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
            this.set_titletext("");
            if (Form == this.constructor)
            {
                this._setFormPosition(1280,720);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("dsList", this);
            obj._setContents("");
            this.addChild(obj.name, obj);


            obj = new Dataset("_dsProc", this);
            obj._setContents("<ColumnInfo><Column id=\"TARGET\" type=\"STRING\" size=\"256\"/><Column id=\"SP\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"TARGET\">select</Col><Col id=\"SP\">DFAPR_MANUAL_SELECT</Col></Row><Row><Col id=\"TARGET\">update</Col><Col id=\"SP\">DFAPR_MANUAL_UPDATE</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsSearch", this);
            obj._setContents("<ColumnInfo><Column id=\"CD_CORP\" type=\"STRING\" size=\"256\"/><Column id=\"YM_DATE\" type=\"STRING\" size=\"256\"/><Column id=\"CD_DEPT\" type=\"STRING\" size=\"256\"/><Column id=\"NO_ACCOUNT\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row/></Rows>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Div("divSearch","0.0","10.0",null,"78.0","0",null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_cssclass("div_SEARCH_Bg");
            obj.set_text("");
            this.addChild(obj.name, obj);

            obj = new Static("staCD_CORP","0.0","10.0","92.0","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("3");
            obj.set_text("법인코드");
            obj.set_cssclass("sta_WF_SchLabelE");
            this.divSearch.addChild(obj.name, obj);

            obj = new Div("ccfCD_CORP","staCD_CORP:0.0","10.0","280","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.getSetter("CodeFindName").set("DZX_CFCORP");
            obj.getSetter("CDTextWidth").set("50");
            obj.set_taborder("0");
            obj.set_url("cmm::cmmCodeFind.xfdl");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("staYM_DATE","ccfCD_CORP:0.0","10.0","92.0","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("4");
            obj.set_text("기준년월");
            obj.set_cssclass("sta_WF_SchLabelE");
            this.divSearch.addChild(obj.name, obj);

            obj = new Div("ctclYM_DATE","staYM_DATE:0.0","10.0","80","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("7");
            obj.set_url("cmm::cmmCalMM.xfdl");
            obj.set_text("");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("staCD_CORP01","0.0","staCD_CORP:10.0","92.0","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("5");
            obj.set_text("계좌번호");
            obj.set_textDecoration("none");
            obj.set_cssclass("sta_WF_SchLabel");
            this.divSearch.addChild(obj.name, obj);

            obj = new Div("ccfNO_ACCOUNT","staCD_CORP01:0.0","staCD_CORP:10.0","280","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.getSetter("CodeFindName").set("DFX_CFACCOUNTNO_SUJI");
            obj.getSetter("CDTextWidth").set("110");
            obj.set_taborder("2");
            obj.set_url("cmm::cmmCodeFind.xfdl");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("sta00","ccfNO_ACCOUNT:0.0","staCD_CORP:10.0","92.0","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("6");
            obj.set_text("처리부서");
            obj.set_cssclass("sta_WF_SchLabelE");
            this.divSearch.addChild(obj.name, obj);

            obj = new Div("ccfCD_DEPT","sta00:0.0","staCD_CORP:10.0","280","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.getSetter("CDTextWidth").set("70");
            obj.set_taborder("1");
            obj.set_url("cmm::cmmCodeFind.xfdl");
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
            obj = new BindItem("item0","divSearch.form.ccfCD_CORP.form.CDTextBox","value","dsSearch","CD_CORP");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item1","divSearch.form.ctclYM_DATE.form.TextBox","value","dsSearch","YM_DATE");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item2","divSearch.form.ccfCD_DEPT.form.CDTextBox","value","dsSearch","CD_DEPT");
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
            this._addPreloadList("fdl","cmm::cmmCalMM.xfdl");
        };
        
        // User Script
        this.registerScript("DFA_MANUAL.xfdl", function() {
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

        	var frame = this.getOwnerFrame();

        	if(!this.gfnIsNull(frame.CD_CORP) && !this.gfnIsNull(frame.YM_DATE) && !this.gfnIsNull(frame.CD_DEPT) && !this.gfnIsNull(frame.NO_ACCOUNT)){

        		this.dsSearch.setColumn(0, "YM_DATE", frame.YM_DATE);

        		this.ccfCD_CORP.form.CDTextBox.set_value(frame.CD_CORP);
        		this.ccfCD_CORP.form.DSTextBox.set_value(frame.DS_CORP);
        		this.ccfCD_DEPT.form.CDTextBox.set_value(frame.CD_DEPT);
        		this.ccfCD_DEPT.form.DSTextBox.set_value(frame.DS_DEPT);
        		this.ccfNO_ACCOUNT.form.CDTextBox.set_value(frame.NO_ACCOUNT);
        		this.ccfNO_ACCOUNT.form.DSTextBox.set_value(frame.NM_ACCOUNT);

        		this.FormBtns.Select.click();


        	}else{

        		var today = this.gfnGetDate();
        		//this.dsSearch.setColumn(0, "YM_DATE", this.gfnAddDate(today, -1).substring(0,6));
        		this.dsSearch.setColumn(0, "YM_DATE", today.substring(0,6));	// 기준년월

        		this.ccfCD_CORP.form.CDTextBox.set_value(this.AuthClient.CD_CORP);		 // 법인코드
        		this.ccfCD_CORP.form.DSTextBox.set_value(this.AuthClient.DS_CORP);
        		this.ccfCD_DEPT.form.CDTextBox.set_value(this.AuthClient.CD_DEPT);
        		this.ccfCD_DEPT.form.DSTextBox.set_value(this.AuthClient.DS_DEPT);

        	}
        	//법인코드 GR_SEARCH > 1 일 경우만 밑줄 치고 필수입력 처리
        	if (nexacro.toNumber(this.grSearch) > 1) {
        		this.divSearch.form.staCD_CORP.set_textDecoration("underline");
        	} else {
        		this.divSearch.form.staCD_CORP.set_textDecoration("none");
        	}

        	//처리부서 GR_SEARCH >= 7 일 경우만 밑줄 치고 필수입력 처리
        	if (nexacro.toNumber(this.grSearch) >= 7) {
        		this.divSearch.form.sta00.set_textDecoration("underline");
        	} else {
        		this.divSearch.form.sta00.set_textDecoration("none");
        	}

        };

        /************************************************************************
         * 버튼 설정 : 화면(Tab) 전환시 마다 호출
         ************************************************************************/
        this.fnSetButton = function() {
          	this.FormBtns.Add.set_enable(false);
        //  	this.FormBtns.Save.set_enable(false);
          	this.FormBtns.Del.set_enable(false);
        }

        /************************************************************************
         * 확장 버튼 : 화면별 버튼 설정 ID, function 연결
         ************************************************************************/
        this.fnSetExtendButton = function() {
        	this.btnComPare = this.gfnFormButtonAdd("btnComPare", "fnComPare", "거래내역전표대사");
        };

        /************************************************************************
         * 변수 선언
         ************************************************************************/
        this.fnSetVariable = function() {
        	this.ccfCD_CORP  = this.divSearch.form.ccfCD_CORP;				// 법인코드
        	this.ccfCD_DEPT = this.divSearch.form.ccfCD_DEPT;				// 처리부서
        	this.ctclYM_DATE = this.divSearch.form.ctclYM_DATE;				// 거래일자(from)
        	this.ccfNO_ACCOUNT = this.divSearch.form.ccfNO_ACCOUNT;			// 계좌번호

        	this.dxGrid = this.divData.form.objGrid;		// 그리드
        	this.grSearch = this.FormInfo.GR_SEARCH;		// 권한
        };

        /************************************************************************
         * 이벤트 설정
         ************************************************************************/
        this.fnSetEvent = function() {


        	this.gfnGridInit(this.dxGrid, this.dsList, "DF", "DFA_MANUAL");


        	this.ccfCD_DEPT.CodeFindName = "DFX_CFACNTUNIT_GROUP";	// 처리부서
        	this.ccfCD_CORP.BeforeUserDataSetParam = "fnBeforeUserDataSetParam"; // 법인
        	this.ccfCD_DEPT.BeforeUserDataSetParam = "fnBeforeUserDataSetParam"; // 부서
        	this.ccfNO_ACCOUNT.BeforeUserDataSetParam = "fnBeforeUserDataSetParam"; // 계좌번호

        	this.ccfCD_CORP.AfterCDTextChanged = "fnAfterCDTextChanged";
        	this.ccfCD_DEPT.AfterCDTextChanged = "fnAfterCDTextChanged";
        	this.ccfNO_ACCOUNT.AfterCDTextChanged = "fnAfterCDTextChanged";

        }

        /************************************************************************
         * 파라미터 설정
         ************************************************************************/
        this.fnSetParameter = function() {

        	this.dsSelect = new Dataset();
        	this.dsSelect.addColumn("CD_CORP", "string");
        	this.dsSelect.addColumn("YM_DATE", "string");
        	this.dsSelect.addColumn("CD_DEPT", "string");
        	this.dsSelect.addColumn("NO_ACCOUNT", "string");

        	this.dsUpdate = new Dataset();
        	this.dsUpdate.addColumn("DT_DATE", "string");
        	this.dsUpdate.addColumn("CD_CORP", "string");
        	this.dsUpdate.addColumn("CD_BANK", "string");
        	this.dsUpdate.addColumn("NO_ACCOUNT", "string");
        	this.dsUpdate.addColumn("TY_GUBUN", "string");
        	this.dsUpdate.addColumn("CD_OWNER", "string");
        	this.dsUpdate.addColumn("AM_INPUT", "bigdecimal");
        	this.dsUpdate.addColumn("AM_INPUT_IN", "bigdecimal");
        	this.dsUpdate.addColumn("AM_INPUT_OUT", "bigdecimal");
        	this.dsUpdate.addColumn("ID_USER", "string");


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

        	this.dsList.clearData();

        	this.dsSelect.clearData();
        	var nrow = this.dsSelect.addRow();

        	this.dsSelect.setColumn(nrow, "CD_CORP", this.dsSearch.getColumn(0, "CD_CORP"));
        	this.dsSelect.setColumn(nrow, "YM_DATE", this.dsSearch.getColumn(0, "YM_DATE"));
        	this.dsSelect.setColumn(nrow, "CD_DEPT", this.dsSearch.getColumn(0, "CD_DEPT"));
        	this.dsSelect.setColumn(nrow, "NO_ACCOUNT", this.dsSearch.getColumn(0, "NO_ACCOUNT"));

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
        						strArg, 		// 입력갑스로 보낼 arguments, strFormData="20120607"
        						callBackFnc); 	// 통신방법 정의 [생략가능]

        }


        /*
         *	입력 버튼
         */
        this.fnAdd = function() {
        	var nRow = this.gfnGridAdd(this.dxGrid);
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
        	if (!this.gfnGridValidate(this.dxGrid)) return;

        	this.dxGrid.updateToDataset();

        	this.dsUpdate.clearData();

        	for (var i = 0; i < this.dsList.rowcount; i++) {
        		var flag = this.gfnGetFlag(this.dsList, i);
        		switch(flag) {
        			case "U":
        				var nrow = this.dsUpdate.addRow();
        				this.dsUpdate.setColumn(nrow, "DT_DATE", this.dsList.getColumn(i, "DT_DATE"));
        				this.dsUpdate.setColumn(nrow, "CD_CORP", this.dsList.getColumn(i, "CD_CORP"));
        				this.dsUpdate.setColumn(nrow, "CD_BANK", this.dsList.getColumn(i, "CD_BANK"));
        				this.dsUpdate.setColumn(nrow, "NO_ACCOUNT", this.dsList.getColumn(i, "NO_ACCOUNT"));
        				this.dsUpdate.setColumn(nrow, "TY_GUBUN", this.dsList.getColumn(i, "TY_GUBUN"));
        				this.dsUpdate.setColumn(nrow, "CD_OWNER", this.dsList.getColumn(i, "CD_OWNER"));
        				this.dsUpdate.setColumn(nrow, "AM_INPUT", this.dsList.getColumn(i, "AM_INPUT"));
        				this.dsUpdate.setColumn(nrow, "AM_INPUT_IN", this.dsList.getColumn(i, "AM_INPUT_IN"));
        				this.dsUpdate.setColumn(nrow, "AM_INPUT_OUT", this.dsList.getColumn(i, "AM_INPUT_OUT"));
        				this.dsUpdate.setColumn(nrow, "ID_USER", this.AuthClient.ID_USER);
        				break;
        		}
        	}

        	if (this.dsUpdate.rowcount == 0) return;

        	var strSvcId    = "update";
        	var strSvcType  = "save";
        	var inProc		= "_dsProc";
        	var inData      = "update=dsUpdate";
        	var outData     = "";
        	var strArg      = "";
        	var callBackFnc = "fnCallback";

        	this.gfnTransaction( strSvcId , 	// transaction을 구분하기 위한 svc id값
        						strSvcType , 	// transaction을 요청할 구분
        						inProc,			// Procedure 정보 Dataset 이름
        						inData , 		// 입력값으로 보낼 dataset id , a=b형태로 실제이름과 입력이름을 매칭
        						outData , 		// 처리결과값으로 받을 dataset id, a=b형태로 실제이름과 입력이름을 매칭
        						strArg, 		// 입력갑스로 보낼 arguments, strFormData="20120607"
        						callBackFnc); 	// 통신방법 정의 [생략가능]
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

        	trace("grSearch"+this.grSearch);
        	if (nexacro.toNumber(this.grSearch) > 1) {
        		if ( this.gfnIsNull(this.ccfCD_CORP.form.CDTextBox.value) ) {
        			this.gfnAlert("법인코드가 입력되지 않았습니다.");
        			this.ccfCD_CORP.form.CDTextBox.setFocus();
        			return false;
        		}
        	}

        	if (nexacro.toNumber(this.grSearch) >= 7) {
        		if ( this.gfnIsNull(this.ccfCD_DEPT.form.CDTextBox.value) ) {
        			this.gfnAlert("처리부서가 입력되지 않았습니다.");
        			this.ccfCD_DEPT.form.CDTextBox.setFocus();
        			return false;
        		}
        	}

        	if ( this.gfnIsNull(this.dsSearch.getColumn(0, "YM_DATE"))) {
        		this.gfnAlert("기준년월이 입력되지 않았습니다.");
        		this.ctclYM_DATE.setFocus();
        		return false;
        	}

        // 	if ( this.gfnIsNull(this.ccfNO_ACCOUNT.form.CDTextBox.value)) {
        // 		this.gfnAlert("계좌번호가 입력되지 않았습니다.");
        // 		this.ccfNO_ACCOUNT.form.CDTextBox.setFocus();
        // 		return false;
        // 	}

        	return true;
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
        	} else if (svcID == "update") {
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
        this.fnBeforeUserDataSetParam = function(id, dsUserParam, nrow)  {
        	var cdCorp = this.gfnIsNull(this.ccfCD_CORP.form.CDTextBox.value) ? "" : this.ccfCD_CORP.form.CDTextBox.value;

        	// 법인코드
        	if (id == "ccfCD_CORP") {
        		dsUserParam.setColumn(nrow, "CD_GROUP", this.cdGroup);
        	}

        	if (id == "ccfCD_DEPT") {
        		dsUserParam.setColumn(nrow, "CD_GROUP", "");
        		dsUserParam.setColumn(nrow, "CD_CORP", cdCorp);
        		dsUserParam.setColumn(nrow, "GR_SEARCH", this.FormInfo.GR_SEARCH);
        		dsUserParam.setColumn(nrow, "ID_USER", this.AuthClient.ID_USER);
        		dsUserParam.setColumn(nrow, "CD_DEPT", this.AuthClient.CD_DEPT);
        	}

        	// 은행코드
        	if (id == "cfBANK") {

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
        	}
        }


        this.dsSearch_onvaluechanged = function(obj,e)
        {
        	if ( e.oldvalue != e.newvalue ) {
        		this.gfnSetFormStatus(this);
        		this.gfnGridClear(this.dxGrid);
        	}
        };


        this.fnComPare = function(obj,e) {
        	if(!this.gfnGridIsRow(this.dxGrid)) return;

        	var param = {};
        	param.GUBUN = "M";
        	param.CD_CORP = this.gfnTrim(this.dsList.getColumn(this.dsList.rowposition, "CD_CORP"));	// 법인코드
        	param.DS_CORP = this.gfnTrim(this.dsList.getColumn(this.dsList.rowposition, "DS_CORP"));	// 법인명칭
        	param.DT_DATE = this.gfnTrim(this.dsList.getColumn(this.dsList.rowposition, "DT_DATE"));
        	param.NO_ACCOUNT = this.gfnTrim(this.dsList.getColumn(this.dsList.rowposition, "NO_ACCOUNT"));	// 계좌번호
        	param.NM_ACCOUNT = this.gfnTrim(this.dsList.getColumn(this.dsList.rowposition, "NM_ACCOUNT"));	// 계좌명칭

        	this.gfnFormOpen("DFB", "DFA_COMPARE", "fnPopCallBack", param);
        }

        this.fnPopCallBack = function(svcID, val) {
        	if (val) {
        		var json = JSON.parse(val);

        		if (svcID.indexOf("DFA_COMPARE") > -1) {

        		}

        	}
        }
        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.form_onload,this);
            this.dsList.addEventHandler("onrowposchanged",this.dsList_onrowposchanged,this);
            this.dsSearch.addEventHandler("onvaluechanged",this.dsSearch_onvaluechanged,this);
        };
        this.loadIncludeScript("DFA_MANUAL.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
