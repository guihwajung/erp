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
            this.set_titletext("결산기수");
            if (Form == this.constructor)
            {
                this._setFormPosition(1400,720);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("dsList", this);
            obj._setContents("");
            this.addChild(obj.name, obj);


            obj = new Dataset("_dsProc", this);
            obj._setContents("<ColumnInfo><Column id=\"TARGET\" type=\"STRING\" size=\"256\"/><Column id=\"SP\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"TARGET\">select</Col><Col id=\"SP\">DLBPR_SIMPLETRANSBUNYANGTARGET_SELECT</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsSearch", this);
            obj._setContents("<ColumnInfo><Column id=\"CD_ACNTUNIT\" type=\"STRING\" size=\"256\"/><Column id=\"NO_DONG\" type=\"STRING\" size=\"256\"/><Column id=\"NO_FLOOR\" type=\"STRING\" size=\"256\"/><Column id=\"NO_HO\" type=\"STRING\" size=\"256\"/><Column id=\"TY_SUNAB\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"CD_ACNTUNIT\"/><Col id=\"NO_DONG\"/><Col id=\"NO_FLOOR\"/><Col id=\"NO_HO\"/><Col id=\"TY_SUNAB\"/></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsTY_SUNAB", this);
            obj._setContents("<ColumnInfo><Column id=\"CD_CODE\" type=\"STRING\" size=\"256\"/><Column id=\"DS_CODE\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"CD_CODE\">자체분양</Col><Col id=\"DS_CODE\">자체분양</Col></Row><Row><Col id=\"CD_CODE\">외부분양</Col><Col id=\"DS_CODE\">외부분양</Col></Row><Row><Col id=\"CD_CODE\">임대사업자분양</Col><Col id=\"DS_CODE\">임대사업자분양</Col></Row><Row><Col id=\"CD_CODE\">분양미전환</Col><Col id=\"DS_CODE\">분양미전환</Col></Row><Row><Col id=\"DS_CODE\">전체보기</Col><Col id=\"CD_CODE\"/></Row></Rows>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Div("divSearch","0.0","10.0",null,"46.0","0",null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_cssclass("div_SEARCH_Bg");
            obj.set_formscrolltype("none");
            obj.set_text("");
            this.addChild(obj.name, obj);

            obj = new Static("staCD_CORP","0.0","10.0","105.0","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("1");
            obj.set_text("사업지코드");
            obj.set_cssclass("sta_WF_SchLabelE");
            this.divSearch.addChild(obj.name, obj);

            obj = new Div("ccfCD_ACNTUNIT","staCD_CORP:0.0","10.0","250","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.getSetter("CodeFindName").set("DLX_CFLEASESITE_CODEFIND");
            obj.getSetter("CDTextWidth").set("70");
            obj.set_taborder("0");
            obj.set_url("cmm::cmmCodeFind.xfdl");
            obj.set_text("");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("staTY_CHAIYONG","ccfCD_ACNTUNIT:0.0","10.0","105.0","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("3");
            obj.set_text("별도계약");
            obj.set_cssclass("sta_WF_SchLabel");
            this.divSearch.addChild(obj.name, obj);

            obj = new Combo("cboTY_SUNAB","staTY_CHAIYONG:0.0","10.0","100","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("4");
            obj.set_innerdataset("dsTY_SUNAB");
            obj.set_datacolumn("DS_CODE");
            obj.set_codecolumn("CD_CODE");
            obj.set_value("");
            obj.set_index("0");
            this.divSearch.addChild(obj.name, obj);

            obj = new Div("divSearchDong","cboTY_SUNAB:0.0","10.0","279","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("2");
            obj.set_text("");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("staCD_CORP00","0.0","10.0","105.0","24.0",null,null,null,null,null,null,this.divSearch.form.divSearchDong.form);
            obj.set_taborder("4");
            obj.set_text("동층호");
            obj.set_cssclass("sta_WF_SchLabel");
            this.divSearch.form.divSearchDong.addChild(obj.name, obj);

            obj = new Edit("ctxtNO_DONG","staCD_CORP00:0.0","10.0","50","24.0",null,null,null,null,null,null,this.divSearch.form.divSearchDong.form);
            obj.set_taborder("3");
            obj.set_value("");
            obj.set_readonly("false");
            obj.set_maxlength("4");
            this.divSearch.form.divSearchDong.addChild(obj.name, obj);

            obj = new Edit("ctxtNO_FLOOR","ctxtNO_DONG:0.0","10.0","33","24.0",null,null,null,null,null,null,this.divSearch.form.divSearchDong.form);
            obj.set_taborder("2");
            obj.set_value("");
            obj.set_readonly("false");
            obj.set_maxlength("2");
            this.divSearch.form.divSearchDong.addChild(obj.name, obj);

            obj = new Edit("ctxtNO_HO","ctxtNO_FLOOR:0.0","10.0","50","24.0",null,null,null,null,null,null,this.divSearch.form.divSearchDong.form);
            obj.set_taborder("1");
            obj.set_value("");
            obj.set_readonly("false");
            obj.set_maxlength("3");
            this.divSearch.form.divSearchDong.addChild(obj.name, obj);

            obj = new Button("btnDong","ctxtNO_HO:0.0","10.0","25",null,null,"2",null,null,null,null,this.divSearch.form.divSearchDong.form);
            obj.set_taborder("0");
            obj.set_cssclass("btn_CF_Search");
            obj.set_tabstop("10.0");
            this.divSearch.form.divSearchDong.addChild(obj.name, obj);

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
            obj.set_stepcount("0");
            this.addLayout(obj.name, obj);
            
            // BindItem Information
            obj = new BindItem("item0","divSearch.form.ccfCD_ACNTUNIT.form.CDTextBox","value","dsSearch","CD_ACNTUNIT");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item4","divSearch.form.divSearchDong.form.ctxtNO_HO","value","dsSearch","NO_HO");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item5","divSearch.form.divSearchDong.form.ctxtNO_FLOOR","value","dsSearch","NO_FLOOR");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item6","divSearch.form.divSearchDong.form.ctxtNO_DONG","value","dsSearch","NO_DONG");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item1","divSearch.form.cboTY_SUNAB","value","dsSearch","TY_SUNAB");
            this.addChild(obj.name, obj);
            obj.bind();
            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {
            this._addPreloadList("fdl","cmm::cmmCodeFind.xfdl");
        };
        
        // User Script
        this.registerScript("DLB_SIMPLETRANSTOBUNYANG.xfdl", function() {
        this.objApp = this.gfnGetApplication();

        this.form_onload = function(obj,e)
        {
        	// -- 필수 -------------------//
        	this.gfnFormOnLoad(this);
        	this.gfnFormInfo(this);
        	// ---------------------------//

        	this.fnSetVariable();
        	this.fnSetButton();
        	this.fnSetExtendButton();
        	this.fnSetParameter();
        	this.fnSetEvent();

        	// 타화면에서 오픈시 넘어오는 파라미터 처리
        	if(!this.gfnIsNull(this.getOwnerFrame().CD_ACNTUNIT)) {
        		this.dsData.setColumn(0, "CD_ACNTUNIT", this.getOwnerFrame().CD_ACNTUNIT);
        		this.divData.form.cfCD_ACNTUNIT.form.DSTextBox.set_value(this.getOwnerFrame().DS_ACNTUNIT);
        	}

        	// 별도계약 검색조건 '전체보기'로 선택
        	this.cboTY_SUNAB.set_index(4);
        };

        /************************************************************************
         * 변수 선언
         ************************************************************************/
        this.fnSetVariable = function() {
        	this.ccfCD_ACNTUNIT = this.divSearch.form.ccfCD_ACNTUNIT;
        	this.divSearchDong = this.divSearch.form.divSearchDong;
        	this.cboTY_SUNAB = this.divSearch.form.cboTY_SUNAB;

        	this.dxGrid = this.divData.form.objGrid;
        };

        this.fnSetButton = function() {
        	// Select, Add, Del, Save, Excel, Print
        	// SubSelect, SubAdd, SubDel, SuubSave, SubExcel
        }

        this.fnSetExtendButton = function() {
        	this.btnSetTrans = this.gfnFormButtonAdd("btnSetTrans", "fnSetTrans");
        	//this.btnEstmRcp = this.gfnFormButtonAdd("btnEstmRcp", "fnEstmRcp");
        };


        this.fnSetParameter = function() {

        	this.dsSelect = new Dataset();
        	this.dsSelect.addColumn("CD_ACNTUNIT", "string");
        	this.dsSelect.addColumn("TY_GUBUN", "string");
        	this.dsSelect.addColumn("NO_CHASU", "string");
        	this.dsSelect.addColumn("TY_TRANSBUNYANG", "string");
        	this.dsSelect.addColumn("NO_DONG", "string");
        	this.dsSelect.addColumn("NO_FLOOR", "string");
        	this.dsSelect.addColumn("NO_HO", "string");

        }

        this.fnSetEvent = function() {

        	// 그리드 초기화
        	this.gfnGridInit(this.dxGrid, this.dsList, "DL", "DLB_SIMPLETRANSTOBUNYANG");

        	this.ccfCD_ACNTUNIT.BeforeUserDataSetParam = "fnBeforeUserDataSetParam";
        	this.ccfCD_ACNTUNIT.AfterCDTextChanged = "fnAfterCDTextChanged";

        	this.dxGrid.set_selecttype("cell");
        }

        this.fnCallback = function(svcID, errorCode, errorMsg) {
        	if(svcID == "select") {
        		this.gfnGridAfterSelect(this.dxGrid);
        	} else if(svcID == "save") {
        		if (errorCode == 0) {
        			this.FormBtns.Select.click();
        		} else {
        			this.gfnAlert(errorMsg);
        		}

        	}

        }

        this.fnSelectValidation = function() {

        	var validate = true;

        	if (this.gfnIsNull(this.dsSearch.getColumn(0,"CD_ACNTUNIT"))) {
        		validate = false;
        		// Alert후 실행할 처리
        		this.fnVaidateCallback = function() {
        			this.ccfCD_ACNTUNIT.form.CDTextBox.setFocus();
        		}
        		this.gfnAlert("사업지코드는 반드시 입력 하셔야 합니다.", "fnVaidateCallback");
        	}

        	return validate;
        }

        this.fnSelect = function() {

        	if (!this.fnSelectValidation()) return;

        	this.gfnGridBeforeSelect(this.dxGrid);

        	this.dsSelect.clearData();
        	this.dsSelect.addRow();

        	var tySunab = "";
        	if(this.cboTY_SUNAB.text == "전체보기"){
        		tySunab = "0";
        	}else{
        		tySunab = this.cboTY_SUNAB.index + 1;
        	}

        	this.dsSelect.setColumn(0, "CD_ACNTUNIT", this.dsSearch.getColumn(0, "CD_ACNTUNIT").substr(0, 6));
        	this.dsSelect.setColumn(0, "TY_GUBUN", this.dsSearch.getColumn(0, "CD_ACNTUNIT").substr(6, 1));
        	this.dsSelect.setColumn(0, "NO_CHASU", this.dsSearch.getColumn(0, "CD_ACNTUNIT").substr(7, 2));
        	this.dsSelect.setColumn(0, "TY_TRANSBUNYANG", tySunab);
        	this.dsSelect.setColumn(0, "NO_DONG", this.dsSearch.getColumn(0, "NO_DONG"));
        	this.dsSelect.setColumn(0, "NO_FLOOR", this.dsSearch.getColumn(0, "NO_FLOOR"));
        	this.dsSelect.setColumn(0, "NO_HO", this.dsSearch.getColumn(0, "NO_HO"));

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

        this.fnAdd = function() {
        	var nrow = this.gfnGridAdd(this.dxGrid);
        }

        this.fnDel = function() {
        	this.gfnGridDel(this.dxGrid);

        }

        this.fnSave = function() {

        }

        this.fnExcel = function() {
        	this.gfnExcelExport(this.dxGrid);
        }

        this.fnPrint = function() {

        }

        /************************************************************************
         * 코드파인드 이벤트
         ************************************************************************/
        this.fnBeforeUserDataSetParam = function(id, dsUserParam, nrow) {

        	if(id == "ccfCD_ACNTUNIT") {
        		dsUserParam.setColumn(nrow, "FLAG", "X");
        		dsUserParam.setColumn(nrow, "CD_DEPT", this.AuthClient.CD_DEPT);
        		dsUserParam.setColumn(nrow, "ID_USER", this.AuthClient.ID_USER);
        		dsUserParam.setColumn(nrow, "ID_GROUP", this.FormInfo.ID_GROUP);
        		dsUserParam.setColumn(nrow, "GR_SEARCH", this.FormInfo.GR_SEARCH);
        		dsUserParam.setColumn(nrow, "YN_TOTALCHASU", "");
        	}

        	return true;
        };

        this.fnAfterCDTextChanged = function(id, codeFindData) {
        	var arrData = codeFindData;

        	if(id == "ccfCD_ACNTUNIT") {

        	}

        }

        /************************************************************************
         * 기타 이벤트
         ************************************************************************/
        /*
         *	조회 조건 변경시 초기화
         */
        this.dsSearch_onvaluechanged = function(obj,e) {
        	if(e.oldvalue != e.newvalue) {
        		this.gfnSetFormStatus(this);	// 폼상태 초기화
        		this.gfnGridClear(this.dxGrid);
        	}
        };



         // 분양전환설정 버튼 클릭시 팝업화면 호출
        //  this.fnSetTrans = function(obj:nexacro.Button,e:nexacro.ClickEventInfo) {
        // 	// 선택된 row가 있을 경우에만 팝업을 띄움
        // 	if (!this.gfnGridIsRow(this.dxGrid)) { return false; }
        //
        // 	var param = {};
        // 	var nRow = this.dsList.rowposition;
        // 	param.CD_ACNTUNIT = this.dsSearch.getColumn(0, "CD_ACNTUNIT");
        // 	param.DS_ACNTUNIT = this.ccfCD_ACNTUNIT.form.DSTextBox.value;
        //
        //     param.DONG = this.dsList.getColumn(nRow, "NO_DONG");
        // 	param.FLOOR = this.dsList.getColumn(nRow, "NO_FLOOR");
        // 	param.HO = this.dsList.getColumn(nRow, "NO_HO");
        // 	param.CONTRACTOR = this.dsList.getColumn(nRow, "DS_CONTRACTOR");
        //
        // 	// 화면 오픈.
        // 	// CD_MODULE은 보통 같은 모듈에서 호출하는 경우가 많으니 this.FormInfo.CD_MODULE 사용
        // 	// 타 모듈 화면 호출시 지정할것.
        //
        // 	this.gfnFormOpen(this.FormInfo.CD_MODULE, "DLB_SETTRANS", "fnSetTransCallback", param);
        // }
        //
        // this.fnSetTransCallback =  function(svcID, val) {
        // 	if(val == true) {
        // 		this.FormBtns.Select.click();
        // 	}
        // };



        // 동층호 검색 버튼 클릭시 팝업화면 호출
        this.divSearch_divSearchDong_btnDong_onclick = function(obj,e)
        {
        	var param = {};
        	param.CD_ACNTUNIT = this.dsSearch.getColumn(0, "CD_ACNTUNIT");
        	param.FLAG = "1";

        	// 화면 오픈.
        	// CD_MODULE은 보통 같은 모듈에서 호출하는 경우가 많으니 this.FormInfo.CD_MODULE 사용
        	// 타 모듈 화면 호출시 지정할것.

        	this.gfnFormOpen("DRI", "DRI_DONGHOBATCHRECEIPT", "fnDongCallback", param);
        };

        this.fnDongCallback = function(svcID, val) {
        	if (!val) return;

        	var json = JSON.parse(val);
        	if (json.DONG.length > 0) {
        		this.dsSearch.setColumn(0, "NO_DONG", json.DONG);
        		this.dsSearch.setColumn(0, "NO_FLOOR", json.FLOOR);
        		this.dsSearch.setColumn(0, "NO_HO", json.HO);

        		this.FormBtns.Select.click();
        	}
        };


        this.divSearch_divSearchDong_ctxtNO_DONG_onkillfocus = function(obj,e)
        {
        	if (this.gfnIsNull(this.dsSearch.getColumn(0, "NO_DONG"))) return;
        	this.dsSearch.setColumn(0, "NO_DONG", this.dsSearch.getColumn(0, "NO_DONG").padLeft(4, "0"));
        };

        this.divSearch_divSearchDong_ctxtNO_FLOOR_onkillfocus = function(obj,e)
        {
        	if (this.gfnIsNull(this.dsSearch.getColumn(0, "NO_FLOOR"))) return;
        	this.dsSearch.setColumn(0, "NO_FLOOR", this.dsSearch.getColumn(0, "NO_FLOOR").padLeft(2, "0"));
        };

        this.divSearch_divSearchDong_ctxtNO_HO_onkillfocus = function(obj,e)
        {
        	if (this.gfnIsNull(this.dsSearch.getColumn(0, "NO_HO"))) return;
        	this.dsSearch.setColumn(0, "NO_HO", this.dsSearch.getColumn(0, "NO_HO").padLeft(3, "0"));
        };

        this.divSearch_ctxt_onkeyup = function(obj,e)
        {
        	if (obj.value.length == obj.maxlength) {
        		switch (obj.id) {
        			case "ctxtNO_DONG":
        				this.ctxtNO_FLOOR.setFocus();
        				break;
        			case "ctxtNO_FLOOR":
        				this.ctxtNO_HO.setFocus();
        				break;
        		}
        	}
        };

        this.fnSetTrans = function() {
        	this.dsSelectRpt = new Dataset();
        	this.dsSelectRpt.addColumn("test", "string");

        	var nrow = this.dsSelectRpt.addRow();
        	this.dsSelectRpt.setColumn(0, "test", "test");

        	var inProc		= "_dsProc";
        	//var inParam 	= "params=dsReportParam";
        	var inParam 	= "";
        	var inData      = "report=dsSelectRpt";
        	var reportpath  = "/dl/dlb/dlb_test.ozr";

        	gfnOpenReport(this, reportpath, inProc, inParam, inData);
        };
        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.form_onload,this);
            this.divSearch.form.ccfCD_ACNTUNIT.addEventHandler("onclick",this.Common_onclick,this);
            this.divSearch.form.divSearchDong.form.ctxtNO_DONG.addEventHandler("onkillfocus",this.divSearch_divSearchDong_ctxtNO_DONG_onkillfocus,this);
            this.divSearch.form.divSearchDong.form.ctxtNO_DONG.addEventHandler("onkeyup",this.divSearch_ctxt_onkeyup,this);
            this.divSearch.form.divSearchDong.form.ctxtNO_FLOOR.addEventHandler("onkillfocus",this.divSearch_divSearchDong_ctxtNO_FLOOR_onkillfocus,this);
            this.divSearch.form.divSearchDong.form.ctxtNO_FLOOR.addEventHandler("onkeyup",this.divSearch_ctxt_onkeyup,this);
            this.divSearch.form.divSearchDong.form.ctxtNO_HO.addEventHandler("onkillfocus",this.divSearch_divSearchDong_ctxtNO_HO_onkillfocus,this);
            this.divSearch.form.divSearchDong.form.ctxtNO_HO.addEventHandler("onkeyup",this.divSearch_ctxt_onkeyup,this);
            this.divSearch.form.divSearchDong.form.btnDong.addEventHandler("onclick",this.divSearch_divSearchDong_btnDong_onclick,this);
            this.dsSearch.addEventHandler("onvaluechanged",this.dsSearch_onvaluechanged,this);
        };
        this.loadIncludeScript("DLB_SIMPLETRANSTOBUNYANG.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
