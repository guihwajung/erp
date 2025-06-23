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
            this.set_titletext("마감일자관리");
            if (Form == this.constructor)
            {
                this._setFormPosition(1280,720);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("dsList", this);
            obj._setContents("");
            this.addChild(obj.name, obj);


            obj = new Dataset("_dsProc", this);
            obj._setContents("<ColumnInfo><Column id=\"TARGET\" type=\"STRING\" size=\"256\"/><Column id=\"SP\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"TARGET\">select</Col><Col id=\"SP\">DHBPR_ACNTUNIT_MAGAMLV_SELECT</Col></Row><Row><Col id=\"TARGET\">update</Col><Col id=\"SP\">DHBPR_CLOSINGDATE_UPDATE</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsSearch", this);
            obj._setContents("<ColumnInfo><Column id=\"CD_DEPT_ACNT\" type=\"STRING\" size=\"256\"/><Column id=\"DS_DEPT_ACNT\" type=\"STRING\" size=\"256\"/><Column id=\"CD_CORP\" type=\"STRING\" size=\"256\"/><Column id=\"TY_USE\" type=\"STRING\" size=\"256\"/><Column id=\"DS_CORP\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"TY_USE\">Y</Col></Row></Rows>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Div("divSearch","0.0","10.0",null,"46.0","0",null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_cssclass("div_SEARCH_Bg");
            obj.set_formscrolltype("none");
            this.addChild(obj.name, obj);

            obj = new Static("staCD_CORP","0","10.0","92","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("4");
            obj.set_text("법인코드");
            obj.set_cssclass("sta_WF_SchLabelE");
            this.divSearch.addChild(obj.name, obj);

            obj = new Div("ccfCD_CORP","staCD_CORP:0.0","10.0","250","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.getSetter("CDTextWidth").set("50");
            obj.set_taborder("0");
            obj.set_url("cmm::cmmCodeFind.xfdl");
            obj.set_text("");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("staCD_DEPT_ACNT","ccfCD_CORP:0.0","10.0","92","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("1");
            obj.set_text("귀속부서");
            obj.set_cssclass("sta_WF_SchLabel");
            this.divSearch.addChild(obj.name, obj);

            obj = new Div("ccfCD_DEPT_ACNT","staCD_DEPT_ACNT:0.0","10.0","270","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("2");
            obj.getSetter("CDTextWidth").set("60");
            obj.getSetter("CodeFindName").set("DHX_CFACNTUNIT");
            obj.set_url("cmm::cmmCodeFind.xfdl");
            obj.set_text("");
            this.divSearch.addChild(obj.name, obj);

            obj = new CheckBox("chkYN_USE","ccfCD_DEPT_ACNT:10","10.0","90","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("3");
            obj.set_text("사용여부");
            obj.set_truevalue("Y");
            obj.set_falsevalue("N");
            obj.set_value("N");
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

            obj = new BindItem("item2","divSearch.form.ccfCD_CORP.form.CDTextBox","value","dsSearch","CD_CORP");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item3","divSearch.form.ccfCD_CORP.form.DSTextBox","value","dsSearch","DS_CORP");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item4","divSearch.form.chkYN_USE","value","dsSearch","TY_USE");
            this.addChild(obj.name, obj);
            obj.bind();
            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {
            this._addPreloadList("fdl","cmm::cmmCodeFind.xfdl");
        };
        
        // User Script
        this.registerScript("DHB_CLOSINGDATE.xfdl", function() {
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

        	this.dsSearch.setColumn(0, "CD_CORP", this.AuthClient.CD_CORP);
        	this.dsSearch.setColumn(0, "DS_CORP", this.AuthClient.DS_CORP);
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

        };

        /************************************************************************
         * 변수 선언
         ************************************************************************/
        this.fnSetVariable = function() {
        	this.dxGrid = this.divData.form.objGrid;

        	this.ccfCD_DEPT_ACNT = this.divSearch.form.ccfCD_DEPT_ACNT;
        	this.ccfCD_CORP = this.divSearch.form.ccfCD_CORP;
        	this.chkYN_USE = this.divSearch.form.chkYN_USE;
        };

        /************************************************************************
         * 이벤트 설정
         ************************************************************************/
        this.fnSetEvent = function() {
        	this.ccfCD_DEPT_ACNT.BeforeUserDataSetParam = "fnBeforeUserDataSetParam";

        	this.ccfCD_CORP.CodeFindName = "DHX_CFCORP";
        	this.ccfCD_CORP.BeforeUserDataSetParam = "fnBeforeUserDataSetParam";
        	this.ccfCD_CORP.AfterCDTextChanged = "fnAfterCDTextChanged";

        	this.dsList.addEventHandler("oncolumnchanged", this.fnGrid_ColumnChanged, this);

        	// 그리드 초기화
        	this.gfnGridInit(this.dxGrid, this.dsList, "DH", "DHB_CLOSINGDATE", "CD_DEPT_ACNT", "LV_DEPT_ACNT");
        };

        /************************************************************************
         * 파라미터 설정
         ************************************************************************/
        this.fnSetParameter = function() {
        	this.dsSelect = new Dataset();
        	this.dsSelect.addColumn("CD_DEPT_ACNT", "string");	//회계단위코드
        	this.dsSelect.addColumn("TY_USE"      , "string");	//사용여부
        	this.dsSelect.addColumn("CD_CORP"      , "string");	//법인코드

        	this.dsUpdate = new Dataset();
        	this.dsUpdate.addColumn("CD_DEPT_ACNT", "string");
        	this.dsUpdate.addColumn("DT_SLIP", "string");
        	this.dsUpdate.addColumn("DD_CONTROL", "bigdecimal");
        	this.dsUpdate.addColumn("DT_BACKUP", "string");
        	this.dsUpdate.addColumn("DT_CASH", "string");
        	this.dsUpdate.addColumn("DT_MONTH", "string");
        	this.dsUpdate.addColumn("DT_COST", "string");
        	this.dsUpdate.addColumn("DT_SALEVAT", "string");
        	this.dsUpdate.addColumn("DT_BUYVAT", "string");
        	this.dsUpdate.addColumn("DT_SPLITVAT", "string");
        	this.dsUpdate.addColumn("DT_GM", "string");
        	this.dsUpdate.addColumn("DT_TB", "string");
        	this.dsUpdate.addColumn("DT_BS", "string");
        	this.dsUpdate.addColumn("DT_PL", "string");
        	this.dsUpdate.addColumn("ID_SABUN", "string");

        	this.dsSelectUser = new Dataset();
        	this.dsSelectUser.addColumn("ID_USER", "string");
        	this.dsSelectUser.addColumn("CD_DEPT", "string");
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
        	this.dsSelect.setColumn(0, "TY_USE", this.chkYN_USE.value);
        	this.dsSelect.setColumn(0, "CD_CORP", this.dsSearch.getColumn(0, "CD_CORP"));	//법인코드

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
        	// 그리드 필수항목 체크
        	if (!this.gfnGridValidate(this.dxGrid)) return;

        	this.dxGrid.updateToDataset();

        	this.dsUpdate.clearData();

        	for (var i = 0; i < this.dsList.rowcount; i++) {
        		var flag = this.gfnGetFlag(this.dsList, i);
        		switch(flag) {
        			case "U":
        				var nrow = this.dsUpdate.addRow();
        				this.dsUpdate.setColumn(nrow, "CD_DEPT_ACNT", this.dsList.getColumn(i, "CD_DEPT"));
        				this.dsUpdate.setColumn(nrow, "DT_SLIP", this.dsList.getColumn(i, "DT_SLIP"));
        				this.dsUpdate.setColumn(nrow, "DD_CONTROL", this.dsList.getColumn(i, "DD_CONTROL"));
        				this.dsUpdate.setColumn(nrow, "DT_BACKUP", this.dsList.getColumn(i, "DT_BACKUP"));
        				this.dsUpdate.setColumn(nrow, "DT_CASH", this.dsList.getColumn(i, "DT_CASH"));
        				this.dsUpdate.setColumn(nrow, "DT_MONTH", this.dsList.getColumn(i, "YM_MONTH"));
        				this.dsUpdate.setColumn(nrow, "DT_COST", this.dsList.getColumn(i, "YM_COST"));
        				this.dsUpdate.setColumn(nrow, "DT_SALEVAT", this.dsList.getColumn(i, "YM_SALEVAT"));
        				this.dsUpdate.setColumn(nrow, "DT_BUYVAT", this.dsList.getColumn(i, "YM_BUYVAT"));
        				this.dsUpdate.setColumn(nrow, "DT_SPLITVAT", this.dsList.getColumn(i, "YM_SPLITVAT"));
        				this.dsUpdate.setColumn(nrow, "DT_GM", this.dsList.getColumn(i, "YM_GM"));
        				this.dsUpdate.setColumn(nrow, "DT_TB", this.dsList.getColumn(i, "YM_TB"));
        				this.dsUpdate.setColumn(nrow, "DT_BS", this.dsList.getColumn(i, "YM_BS"));
        				this.dsUpdate.setColumn(nrow, "DT_PL", this.dsList.getColumn(i, "YM_PL"));
        				this.dsUpdate.setColumn(nrow, "ID_SABUN", this.AuthClient.ID_USER);
        				break;
        		}
        	}

        	if (this.dsUpdate.rowcount == 0) return;

        	var strSvcId    = "save";
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

        	if (this.gfnIsNull(this.ccfCD_CORP.form.CDTextBox.value)) {
        		this.ccfCD_CORP.form.CDTextBox.setFocus();
        		this.gfnAlert("법인코드를 입력하세요!");
        		return false;
        	}

        	/*
        	if (this.gfnIsNull(this.dsSearch.getColumn(0, "CD_DEPT_ACNT"))) {
        		validate = false;
        		// Alert후 실행할 처리
        		this.fnVaidateCallback = function() {
        			this.ccfCD_DEPT_ACNT.form.CDTextBox.setFocus();
        		}
        		this.gfnAlert("귀속부서코드는 반드시 입력하셔야합니다.", "fnVaidateCallback");
        	}
        	*/
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
        	if (id == "ccfCD_CORP") {
        		dsUserParam.setColumn(nrow, "ID_SABUN", this.AuthClient.ID_USER);
        	}

        	if (id == "ccfCD_DEPT_ACNT") {
        		var cdCorp = this.ccfCD_CORP.form.CDTextBox.value;
        		if(this.gfnIsNull(cdCorp)){
        			this.gfnAlert("법인코드를 선택하세요.");
        			return false;
        		}
        		dsUserParam.setColumn(nrow, "CD_DEPT_UPPER"	, "");						//상위부서
        		dsUserParam.setColumn(nrow, "YN_SLIPACCEPT"	, "Y");						//전표발행여부
        		dsUserParam.setColumn(nrow, "CD_CORP"		, cdCorp);					//법인코드
        		dsUserParam.setColumn(nrow, "YN_USE"		, "Y");						//사용여부
        		dsUserParam.setColumn(nrow, "GR_DEPT_ACNT"	, "");						//현장/본사여부
        		dsUserParam.setColumn(nrow, "LEVCD_DEPT_UPPER", this.AuthClient.LEVCD_DEPT_UPPER);
        	}
        	return true;
        };

        /************************************************************************
         * 그리드 이벤트
         ************************************************************************/
          //그리드 값변경 이벤트
        this.fnGrid_ColumnChanged = function(obj,e)
        {
         	if(e.columnid == "DT_SLIP"){
        		this.fnSetCheckedUpperDept(obj, e.row, e.newvalue);
        // 		if(!this.gfnIsNull(e.newvalue) && e.newvalue != e.oldvalue){
        // 			obj.setColumn(e.row, "CD_DEPT_UPPER", "");		//상위귀속부서코드
        // 			obj.setColumn(e.row, "DS_DEPT_ACNT_UPPER", "");	//상위귀속부서명
        // 			obj.setColumn(e.row, "CD_DEPT_SELFACNT", "");	//세무단위코드
        // 			obj.setColumn(e.row, "DS_DEPT_SELFACNT", "");	//세무단위명
        // 		}
         	}
        };

        this.fnSetCheckedUpperDept = function(objDs, nRow, newValue) {
        	var CD_DEPT_UPPER = objDs.getColumn(nRow, "CD_DEPT_UPPER");
        	var CD_DEPT_ACNT = objDs.getColumn(nRow, "CD_DEPT_ACNT");
        	var DS_DEPT_ACNT = objDs.getColumn(nRow, "DS_DEPT_ACNT");
        	var LV_DEPT_ACNT = objDs.getColumn(nRow, "LV_DEPT_ACNT");
        	var findRow = objDs.findRowExpr("!dataset.parent.gfnIsNull(CD_DEPT_UPPER) && CD_DEPT_UPPER =='"+CD_DEPT_ACNT+"' && nx_flag != '#'");
        	var arrRows = objDs.extractRowsNF("!dataset.parent.gfnIsNull(CD_DEPT_UPPER) && CD_DEPT_UPPER =='"+CD_DEPT_ACNT+"' && nx_flag != '#'");

        	// 하위부서 있는지 확인
        	if(findRow > -1){
        		//objDs.set_enableevent(false);
        		for (i = 0; i < arrRows.length; i++) {
        			var deptRows1 = arrRows[i];
        			objDs.setColumn(deptRows1, "DT_SLIP", newValue);
        			objDs.setColumn(deptRows1, this.ucFlag, "U");
        			//this.fnSetCheckedUpperDept(objDs, deptRows, newValue);
        			//trace(deptRows + " " + objDs.getColumn(deptRows, "LV_DEPT_ACNT") + " / " + objDs.getColumn(deptRows, "CD_DEPT_ACNT") + " / " + objDs.getColumn(deptRows, "DS_DEPT_ACNT"));

        			var arrRowsLower2 = objDs.extractRowsNF("!dataset.parent.gfnIsNull(CD_DEPT_UPPER) && CD_DEPT_UPPER =='"+objDs.getColumn(deptRows1, "CD_DEPT_ACNT")+"' && nx_flag != '#'");
        			for (k = 0; k < arrRowsLower2.length; k++) {
        				var deptRows2 = arrRowsLower2[k];
        				objDs.setColumn(deptRows2, "DT_SLIP", newValue);
        				objDs.setColumn(deptRows2, this.ucFlag, "U");

        				var arrRowsLower3 = objDs.extractRowsNF("!dataset.parent.gfnIsNull(CD_DEPT_UPPER) && CD_DEPT_UPPER =='"+objDs.getColumn(deptRows2, "CD_DEPT_ACNT")+"' && nx_flag != '#'");
        				for (j = 0; j < arrRowsLower3.length; j++) {
        					var deptRows3 = arrRowsLower3[j];
        					objDs.setColumn(deptRows3, "DT_SLIP", newValue);
        					objDs.setColumn(deptRows3, this.ucFlag, "U");
        					//trace(deptRows2 + " 하위부서->" + objDs.getColumn(deptRows2, "LV_DEPT_ACNT") + " / " + objDs.getColumn(deptRows2, "CD_DEPT_ACNT") + " / " + objDs.getColumn(deptRows2, "DS_DEPT_ACNT"));
        				}
        			}
        		}
        		//objDs.set_enableevent(true);

        	}else{
        		return;
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

        this.dsList_onvaluechanged = function(obj,e)
        {
        	if(e.oldvalue != e.newvalue){
        		switch(e.columnid){
        			case "YM_MONTH" :
        				this.dsList.setColumn(e.row, "DT_SLIP", this.gfnGetLastDate(this.dsList.getColumn(e.row, "YM_MONTH"))); //전표마감일자가 월마감 년월의 마지막 일자로 변경
        				this.dsList.setColumn(e.row, "YM_GM", this.dsList.getColumn(e.row, "YM_MONTH"));
        				this.dsList.setColumn(e.row, "YM_TB", this.dsList.getColumn(e.row, "YM_MONTH"));
        				this.dsList.setColumn(e.row, "YM_BS", this.dsList.getColumn(e.row, "YM_MONTH"));
        				this.dsList.setColumn(e.row, "YM_PL", this.dsList.getColumn(e.row, "YM_MONTH"));
        			break;
        		}
        	}
        };
        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.form_onload,this);
            this.dsList.addEventHandler("onvaluechanged",this.dsList_onvaluechanged,this);
            this.dsSearch.addEventHandler("onvaluechanged",this.dsSearch_onvaluechanged,this);
        };
        this.loadIncludeScript("DHB_CLOSINGDATE.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
