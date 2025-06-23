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
            this.set_titletext("이율관리");
            if (Form == this.constructor)
            {
                this._setFormPosition(1280,720);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("dsSearch", this);
            obj._setContents("<ColumnInfo><Column id=\"DT_BASE\" type=\"STRING\" size=\"256\"/><Column id=\"CD_CORP\" type=\"STRING\" size=\"256\"/><Column id=\"DS_CORP\" type=\"STRING\" size=\"256\"/><Column id=\"YN_USE\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"CD_CORP\"/><Col id=\"DS_CORP\"/><Col id=\"DT_BASE\"/></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsList", this);
            obj._setContents("");
            this.addChild(obj.name, obj);


            obj = new Dataset("_dsProc", this);
            obj._setContents("<ColumnInfo><Column id=\"TARGET\" type=\"STRING\" size=\"256\"/><Column id=\"SP\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"TARGET\">select</Col><Col id=\"SP\">DABPR_LOANTYPE_SELECT</Col></Row><Row><Col id=\"TARGET\">insert</Col><Col id=\"SP\">DABPR_LOANTYPE_INSERT</Col></Row><Row><Col id=\"TARGET\">update</Col><Col id=\"SP\">DABPR_LOANTYPE_UPDATE</Col></Row><Row><Col id=\"TARGET\">delete</Col><Col id=\"SP\">DABPR_LOANTYPE_DELETE</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsYN_USE", this);
            obj._setContents("<ColumnInfo><Column id=\"CODE\" type=\"STRING\" size=\"256\"/><Column id=\"VALUE\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"CODE\">%</Col><Col id=\"VALUE\">전체</Col></Row><Row><Col id=\"CODE\">Y</Col><Col id=\"VALUE\">사용</Col></Row><Row><Col id=\"CODE\">N</Col><Col id=\"VALUE\">미사용</Col></Row></Rows>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Div("divSearch","0.0","10.0",null,"46.0","0",null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_cssclass("div_SEARCH_Bg");
            obj.set_formscrolltype("none");
            this.addChild(obj.name, obj);

            obj = new Static("staDT_BASE","0.0","10.0","92.0","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("1");
            obj.set_text("기준일자");
            obj.set_cssclass("sta_WF_SchLabelE");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("staCD_CORP","212","10.0","92.0","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.set_cssclass("sta_WF_SchLabelE");
            obj.set_taborder("2");
            obj.set_text("법인");
            this.divSearch.addChild(obj.name, obj);

            obj = new Div("ccfCD_CORP","staCD_CORP:-20","10.0","230","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.getSetter("CodeFindName").set("DAX_CFCORP");
            obj.getSetter("CDTextWidth").set("50");
            obj.getSetter("FitToContents").set("true");
            obj.set_taborder("0");
            obj.set_url("cmm::cmmCodeFind.xfdl");
            this.divSearch.addChild(obj.name, obj);

            obj = new Calendar("ctclDT_BASE","92","10.0","100","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("3");
            obj.set_dateformat("yyyy-MM-dd");
            obj.set_editformat("yyyy-MM-dd");
            obj.set_autoselect("true");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("staYN_USE","532","10","92.0","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.set_cssclass("sta_WF_SchLabelE");
            obj.set_taborder("4");
            obj.set_text("사용유무");
            this.divSearch.addChild(obj.name, obj);

            obj = new Combo("cboYN_USE","622","10.0","80","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("5");
            obj.set_innerdataset("dsYN_USE");
            obj.set_datacolumn("VALUE");
            obj.set_codecolumn("CODE");
            obj.set_text("사용");
            obj.set_value("Y");
            obj.set_index("1");
            this.divSearch.addChild(obj.name, obj);

            obj = new Div("divData","0","divSearch:20",null,null,"0","0",null,null,null,null,this);
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

            obj = new BindItem("item1","divSearch.form.ccfCD_CORP.form.DSTextBox","value","dsSearch","DS_CORP");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item2","divSearch.form.ctclDT_BASE","value","dsSearch","DT_BASE");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item3","divSearch.form.cboYN_USE","value","dsSearch","YN_USE");
            this.addChild(obj.name, obj);
            obj.bind();
            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {
            this._addPreloadList("fdl","cmm::cmmCodeFind.xfdl");
        };
        
        // User Script
        this.registerScript("DAB_LOANTYPE.xfdl", function() {
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

        	var sCurrentDate = this.gfnGetDate();

        	this.ctclDT_BASE.set_value(sCurrentDate);
        	this.dsSearch.setColumn(0, "CD_CORP", this.AuthClient.CD_CORP);
        	this.dsSearch.setColumn(0, "DS_CORP", this.AuthClient.DS_CORP);
        	this.dsSearch.setColumn(0, "YN_USE", "Y");
        };

        /************************************************************************
         * 버튼 설정
         * 서브버튼 사용 처리. 공통 및 확장버튼 버튼관리화면에서 셋팅.
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
        	this.ccfCD_CORP = this.divSearch.form.ccfCD_CORP;
        	this.ctclDT_BASE = this.divSearch.form.ctclDT_BASE;

        	this.dxGrid     = this.divData.form.objGrid;
        };

        /************************************************************************
         * 이벤트 설정
         ************************************************************************/
        this.fnSetEvent = function()
        {
        	// 그리드 초기화
        	this.gfnGridInit(this.dxGrid, this.dsList, "DA", "DAB_LOANTYPE");

        	this.dxGrid.BeforeUserDataSetParam = "fnGridBeforeUserDataSetParam";
        	this.dxGrid.AfterCDTextChanged     = "fnGrid_AfterCDTextChanged";

        	this.dsSearch.addEventHandler("onvaluechanged", this.dsSearch_onvaluechanged, this);

        	var colDsRem = this.dxGrid.getBindCellIndex("body", "DS_REM");
        	this.dxGrid.setCellProperty("body",colDsRem,"tooltiptext","bind:DS_REM");
            var colDsDocument = this.dxGrid.getBindCellIndex("body", "DS_DOCUMENT");
        	this.dxGrid.setCellProperty("body",colDsDocument,"tooltiptext","bind:DS_DOCUMENT");
        	var colDsRequestdoc = this.dxGrid.getBindCellIndex("body", "DS_REQUESTDOC");
        	this.dxGrid.setCellProperty("body",colDsRequestdoc,"tooltiptext","bind:DS_REQUESTDOC");
        	this.dxGrid.setFormatRowProperty(1, "size", 80);
        };

        /************************************************************************
         * 파라미터 설정
         ************************************************************************/
        this.fnSetParameter = function() {

            this.dsSelect = new Dataset();
        	this.dsSelect.addColumn("DT_BASE", "string");
        	this.dsSelect.addColumn("CD_CORP", "string");
        	this.dsSelect.addColumn("YN_USE", "string");

        	this.dsInsert = new Dataset();
        	this.dsInsert.addColumn("DT_BASE", "string");
        	this.dsInsert.addColumn("CD_CORP", "string");
        	this.dsInsert.addColumn("CD_LOAN", "string");
        	this.dsInsert.addColumn("CD_EMPTYPE", "string");
        	this.dsInsert.addColumn("CD_POSITION", "string");
        	this.dsInsert.addColumn("AM_MAXLOAN", "bigdecimal");
        	this.dsInsert.addColumn("YM_MAX", "int");
        	this.dsInsert.addColumn("AM_MONTH", "bigdecimal");
        	this.dsInsert.addColumn("YY_BASEYEAR", "int");
        	this.dsInsert.addColumn("NO_APPRSEQ", "int");
        	this.dsInsert.addColumn("DS_REM", "string");
        	this.dsInsert.addColumn("DS_DOCUMENT", "string");
        	this.dsInsert.addColumn("DS_REQUESTDOC", "string");
        	this.dsInsert.addColumn("YN_USE", "string");
        	this.dsInsert.addColumn("ID_USER", "string");

        	this.dsUpdate = new Dataset();
        	this.dsUpdate.addColumn("DT_BASE", "string");
        	this.dsUpdate.addColumn("CD_CORP", "string");
        	this.dsUpdate.addColumn("CD_LOAN", "string");
        	this.dsUpdate.addColumn("CD_EMPTYPE", "string");
        	this.dsUpdate.addColumn("CD_POSITION", "string");
        	this.dsUpdate.addColumn("AM_MAXLOAN", "bigdecimal");
        	this.dsUpdate.addColumn("YM_MAX", "int");
        	this.dsUpdate.addColumn("AM_MONTH", "bigdecimal");
        	this.dsUpdate.addColumn("YY_BASEYEAR", "int");
        	this.dsUpdate.addColumn("NO_APPRSEQ", "int");
        	this.dsUpdate.addColumn("DS_REM", "string");
        	this.dsUpdate.addColumn("DS_DOCUMENT", "string");
        	this.dsUpdate.addColumn("DS_REQUESTDOC", "string");
        	this.dsUpdate.addColumn("YN_USE", "string");
        	this.dsUpdate.addColumn("ID_USER", "string");

        	this.dsDelete = new Dataset();
        	this.dsDelete.addColumn("DT_BASE", "string");
        	this.dsDelete.addColumn("CD_CORP", "string");
        	this.dsDelete.addColumn("CD_LOAN", "string");
        };

        /************************************************************************
         * 초기화 이벤트
         ************************************************************************/


        /************************************************************************
         * 컨트롤 이벤트
         ************************************************************************/
         /*
          *	조회 버튼
          */
        this.fnSelect = function() {
        	if(!this.gfnSearchValidate(this.divSearch, this.dsSearch)) return false;

        	this.gfnGridBeforeSelect(this.dxGrid);

            this.dsSelect.clearData();
            this.dsSelect.addRow();
        	this.dsSelect.setColumn(0, "DT_BASE", this.dsSearch.getColumn(0, "DT_BASE"));
        	this.dsSelect.setColumn(0, "CD_CORP", this.dsSearch.getColumn(0, "CD_CORP"));
        	this.dsSelect.setColumn(0, "YN_USE", this.dsSearch.getColumn(0, "YN_USE"));


        	var strSvcId    = "select";
        	var strSvcType  = "grid";
        	var inProc		= "_dsProc";
        	var inData      = "select=dsSelect";
        	var outData     = "dsList=select0";
        	var strArg      = "";
        	var callBackFnc = "fnCallback";

        	this.gfnTransaction(strSvcId, 		// transaction을 구분하기 위한 svc id값
        						strSvcType, 	// transaction을 요청할 구분
        						inProc,			// Procedure 정보 Dataset 이름
        						inData, 		// 입력값으로 보낼 dataset id , a=b형태로 실제이름과 입력이름을 매칭
        						outData, 		// 처리결과값으로 받을 dataset id, a=b형태로 실제이름과 입력이름을 매칭
        						strArg, 	    // 입력갑스로 보낼 arguments, strFormData="20120607"
        						callBackFnc); 	// 통신방법 정의 [생략가능]
        }

        /*
         *	입력 버튼
         */
        this.fnAdd = function() {
        	var nrow = this.gfnGridAdd(this.dxGrid);
        	this.dsList.set_enableevent(false);
        	this.dsList.setColumn(nrow, "CD_CORP", this.dsSearch.getColumn(0, "CD_CORP"));
        	this.dsList.setColumn(nrow, "DT_BASE", this.gfnGetDate());
        	this.dsList.setColumn(nrow, "YN_USE" , "Y");
        	this.dsList.set_enableevent(true);
        };

        /*
         *	삭제 버튼
         */
        this.fnDel = function() {
        	this.gfnGridDel(this.dxGrid);
        };

        /*
         *	저장 버튼
         */
        this.fnSave = function() {
        	// 그리드 필수항목 체크
        	if (!this.gfnGridValidate(this.dxGrid)) return;

        	this.dxGrid.updateToDataset();

        	this.dsInsert.clearData();
        	this.dsUpdate.clearData();
        	this.dsDelete.clearData();


        	for (var i = 0; i < this.dsList.rowcount; i++) {
        		var flag = this.gfnGetFlag(this.dsList, i);
        		switch(flag) {
        			case "I":
        				var nrow = this.dsInsert.addRow();
        				this.dsInsert.setColumn(nrow, "DT_BASE", this.dsList.getColumn(i, "DT_BASE"));
        				this.dsInsert.setColumn(nrow, "CD_CORP", this.dsList.getColumn(i, "CD_CORP"));
        				this.dsInsert.setColumn(nrow, "CD_LOAN", this.dsList.getColumn(i, "CD_LOAN"));
        				this.dsInsert.setColumn(nrow, "CD_EMPTYPE", this.dsList.getColumn(i, "CD_EMPTYPE"));
        				this.dsInsert.setColumn(nrow, "CD_POSITION", this.dsList.getColumn(i, "CD_POSITION"));
        				this.dsInsert.setColumn(nrow, "AM_MAXLOAN", this.dsList.getColumn(i, "AM_MAXLOAN"));
        				this.dsInsert.setColumn(nrow, "YM_MAX", this.dsList.getColumn(i, "YM_MAX"));
        				this.dsInsert.setColumn(nrow, "AM_MONTH", this.dsList.getColumn(i, "AM_MONTH"));
        				this.dsInsert.setColumn(nrow, "YY_BASEYEAR", this.dsList.getColumn(i, "YY_BASEYEAR"));
        				this.dsInsert.setColumn(nrow, "NO_APPRSEQ", this.dsList.getColumn(i, "NO_APPRSEQ"));
        				this.dsInsert.setColumn(nrow, "DS_REM", this.dsList.getColumn(i, "DS_REM"));
        				this.dsInsert.setColumn(nrow, "DS_DOCUMENT", this.dsList.getColumn(i, "DS_DOCUMENT"));
        				this.dsInsert.setColumn(nrow, "DS_REQUESTDOC", this.dsList.getColumn(i, "DS_REQUESTDOC"));
        				this.dsInsert.setColumn(nrow, "YN_USE", this.dsList.getColumn(i, "YN_USE"));
        				this.dsInsert.setColumn(nrow, "ID_USER", this.AuthClient.ID_USER);
        				break;
        			case "U":
        				var nrow = this.dsUpdate.addRow();
        				this.dsUpdate.setColumn(nrow, "DT_BASE", this.dsList.getColumn(i, "DT_BASE"));
        				this.dsUpdate.setColumn(nrow, "CD_CORP", this.dsList.getColumn(i, "CD_CORP"));
        				this.dsUpdate.setColumn(nrow, "CD_LOAN", this.dsList.getColumn(i, "CD_LOAN"));
        				this.dsUpdate.setColumn(nrow, "CD_EMPTYPE", this.dsList.getColumn(i, "CD_EMPTYPE"));
        				this.dsUpdate.setColumn(nrow, "CD_POSITION", this.dsList.getColumn(i, "CD_POSITION"));
        				this.dsUpdate.setColumn(nrow, "AM_MAXLOAN", this.dsList.getColumn(i, "AM_MAXLOAN"));
        				this.dsUpdate.setColumn(nrow, "YM_MAX", this.dsList.getColumn(i, "YM_MAX"));
        				this.dsUpdate.setColumn(nrow, "AM_MONTH", this.dsList.getColumn(i, "AM_MONTH"));
        				this.dsUpdate.setColumn(nrow, "YY_BASEYEAR", this.dsList.getColumn(i, "YY_BASEYEAR"));
        				this.dsUpdate.setColumn(nrow, "NO_APPRSEQ", this.dsList.getColumn(i, "NO_APPRSEQ"));
        				this.dsUpdate.setColumn(nrow, "DS_REM", this.dsList.getColumn(i, "DS_REM"));
        				this.dsUpdate.setColumn(nrow, "DS_DOCUMENT", this.dsList.getColumn(i, "DS_DOCUMENT"));
        				this.dsUpdate.setColumn(nrow, "DS_REQUESTDOC", this.dsList.getColumn(i, "DS_REQUESTDOC"));
        				this.dsUpdate.setColumn(nrow, "YN_USE", this.dsList.getColumn(i, "YN_USE"));
        				this.dsUpdate.setColumn(nrow, "ID_USER", this.AuthClient.ID_USER);
        				break;
        			case "D":
        				var nrow = this.dsDelete.addRow();
        				this.dsDelete.setColumn(nrow, "DT_BASE", this.dsList.getColumn(i, "DT_BASE"));
        				this.dsDelete.setColumn(nrow, "CD_CORP", this.dsList.getColumn(i, "CD_CORP"));
        				this.dsDelete.setColumn(nrow, "CD_LOAN", this.dsList.getColumn(i, "CD_LOAN"));
        				break;
        		}
        	}

        	if (this.dsInsert.rowcount == 0 && this.dsUpdate.rowcount ==0 && this.dsDelete.rowcount == 0) return;

        	var strSvcId    = "save";
        	var strSvcType  = "save";
        	var inProc		= "_dsProc";
        	var inData      = "insert=dsInsert update=dsUpdate delete=dsDelete";
        	var outData     = "";
        	var strArg      = "";
        	var callBackFnc = "fnCallback";

        	this.gfnTransaction( strSvcId , 	// transaction을 구분하기 위한 svc id값
        						strSvcType , 	// transaction을 요청할 구분
        						inProc,			// Procedure 정보 Dataset 이름
        						inData , 		// 입력값으로 보낼 dataset id , a=b형태로 실제이름과 입력이름을 매칭
        						outData , 		// 처리결과값으로 받을 dataset id, a=b형태로 실제이름과 입력이름을 매칭
        						strArg, 		// 입력갑스로 보낼 arguments, strFormData="20120607"
        						callBackFnc);   // 통신방법 정의 [생략가능]
        }

        /*
         *	엑셀 버튼
         */
        this.fnExcel = function() {
        	this.gfnExcelExport(this.dxGrid);
        };

        /*
         *	출력 버튼
         */
        this.fnPrint = function() {
        };

        /************************************************************************
         * Validate
         ************************************************************************/
        this.fnSelectValidate = function() {
        	var validate = true;

        	if (validate && this.gfnIsNull(this.dsSearch.getColumn(0, "DT_BASE"))) {
        		validate = false;
        		this.fnVaidateCallback = function() {
        			this.ctclDT_BASE.setFocus();
        		}
        		this.gfnAlert("기준일자를 입력하세요.", "fnVaidateCallback");
        	}

        	if (validate && this.gfnIsNull(this.dsSearch.getColumn(0, "CD_CORP"))) {
        		validate = false;
        		this.fnVaidateCallback = function() {
        			this.ccfCD_CORP.form.CDTextBox.setFocus();
        		}
        		this.gfnAlert("법인을 입력하세요.", "fnVaidateCallback");
        	}

        	return validate;
        };

        /************************************************************************
         * 확장버튼 이벤트
         ************************************************************************/

        /************************************************************************
         * 콜백 이벤트
         ************************************************************************/
        /*
         *	콜백 처리
         */
        this.fnCallback = function(svcID, errorCode, errorMsg) {
        	if (svcID == "select") {
        		this.gfnGridAfterSelect(this.dxGrid);
        	} else if(svcID == "save") {
        		if (errorCode == 0) {
        			this.FormBtns.Select.click();
        		} else {
        			this.gfnAlert(errorMsg);
        		}
        	}
        };

        /************************************************************************
         * 코드파인드 이벤트
         ************************************************************************/

        /************************************************************************
         * 그리드 이벤트
         ************************************************************************/
        /*
         *	메인 그리드 코드파인드
         */
        this.fnGridBeforeUserDataSetParam = function(id, dsUserParam, nrow) {

        	// 대출코드
        	if (id == "DAX_CFCOMMONCODE") {
        		dsUserParam.setColumn(nrow, "CD_PREFIX", "LO");

         	}

        	if (id == "DAX_CFCOMMONCODE_MULTY") {
        		dsUserParam.setColumn(nrow, "CD_PREFIX", "EA");
         	}

        	if (id == "DAX_CFCOMMONCODE_MULTY2") {
        		dsUserParam.setColumn(nrow, "CD_PREFIX", "ED");
         	}

        	return true;
        };

        this.fnGrid_AfterCDTextChanged = function(id, codeFindData) {
        	var arrData = codeFindData;
        	switch (id) {
        	case "DAX_CFCOMMONCODE_MULTY":		// 직원구분	DAX_CERTIFICATE_DEPT

        		if (arrData.length > 0) {
        			var strCdCode = "";
        			var strDsCode = "";
        			for(var r = 0; r < arrData.length; r++) {
        				strCdCode += arrData[r]["CD_CODE"]+",";
        				strDsCode += arrData[r]["DS_CODE"]+",";
        			}

        			strCdCode = strCdCode.substr(0,strCdCode.length-1);
        			strDsCode = strDsCode.substr(0,strDsCode.length-1);
        		}
        		this.dsList.setColumn(this.dsList.rowposition, "CD_EMPTYPE", strCdCode);
        		this.dsList.setColumn(this.dsList.rowposition, "DS_EMPTYPE", strDsCode);
        		break;
        	case "DAX_CFCOMMONCODE_MULTY2":		// 직급구분	DAX_CERTIFICATE_DEPT

        		if (arrData.length > 0) {
        			var strCdCode = "";
        			var strDsCode = "";
        			for(var r = 0; r < arrData.length; r++) {
        				strCdCode += arrData[r]["CD_CODE"]+",";
        				strDsCode += arrData[r]["DS_CODE"]+",";
        			}

        			strCdCode = strCdCode.substr(0,strCdCode.length-1);
        			strDsCode = strDsCode.substr(0,strDsCode.length-1);
        		}
        		this.dsList.setColumn(this.dsList.rowposition, "CD_POSITION", strCdCode);
        		this.dsList.setColumn(this.dsList.rowposition, "DS_POSITION", strDsCode);
        		break;
        	}

        	return true;
        };

        this.dsList_cancolumnchange = function(obj,e)
        {
        	if (this.gfnIsNull(e.newvalue))  return true;

        };


        /************************************************************************
         * 기타 이벤트
         ************************************************************************/
        /*
         *	조회 조건 변경시 초기화
         */
        this.dsSearch_onvaluechanged = function(obj,e)
        {
        	if(e.oldvalue != e.newvalue) {
        		this.gfnSetFormStatus(this);	// 폼상태 초기화
        		this.gfnGridClear(this.dxGrid);
        	}
        };

        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.form_onload,this);
            this.divSearch.form.cboYN_USE.addEventHandler("onitemchanged",this.fnSearchInit,this);
            this.dsList.addEventHandler("onvaluechanged",this.dsList_onvaluechanged,this);
            this.dsList.addEventHandler("cancolumnchange",this.dsList_cancolumnchange,this);
        };
        this.loadIncludeScript("DAB_LOANTYPE.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
