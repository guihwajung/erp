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
            this.set_titletext("임대사업지등록");
            if (Form == this.constructor)
            {
                this._setFormPosition(1400,720);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("dsTable", this);
            obj._setContents("");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsList", this);
            obj._setContents("");
            this.addChild(obj.name, obj);


            obj = new Dataset("_dsProc", this);
            obj._setContents("<ColumnInfo><Column id=\"TARGET\" type=\"STRING\" size=\"256\"/><Column id=\"SP\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"TARGET\">select</Col><Col id=\"SP\">DHAPR_LA_SITE_SELECT</Col></Row><Row><Col id=\"TARGET\">insert</Col><Col id=\"SP\">DHAPR_LA_SITE_INSERT</Col></Row><Row><Col id=\"TARGET\">update</Col><Col id=\"SP\">DHAPR_LA_SITE_UPDATE</Col></Row><Row><Col id=\"TARGET\">delete</Col><Col id=\"SP\">DHAPR_LA_SITE_DELETE</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsSearch", this);
            obj._setContents("<ColumnInfo><Column id=\"CORP\" type=\"STRING\" size=\"256\"/><Column id=\"DEPT\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"CORP\"/><Col id=\"DEPT\"/></Row></Rows>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Div("divSearch","staDT_FROM:0.0","staDT_FROM:10.0",null,"142.0","0",null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_cssclass("div_SEARCH_Bg");
            obj.set_formscrolltype("none");
            obj.set_text("");
            this.addChild(obj.name, obj);

            obj = new Static("staCorp","0.0","10.0","105.0","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("1");
            obj.set_text("법인코드");
            obj.set_cssclass("sta_WF_SchLabelE");
            this.divSearch.addChild(obj.name, obj);

            obj = new Div("ccfCorp","staCorp:0.0","staCorp:10.0","250","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.getSetter("CDTextWidth").set("70");
            obj.set_taborder("0");
            obj.set_url("cmm::cmmCodeFind.xfdl");
            obj.set_text("");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("staSite","0.0","10.0","105.0","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("2");
            obj.set_text("사업지코드");
            obj.set_cssclass("sta_WF_SchLabel");
            this.divSearch.addChild(obj.name, obj);

            obj = new Div("ccfSite","staSite:0.0","staSite:10.0","250","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.getSetter("CDTextWidth").set("70");
            obj.set_taborder("3");
            obj.set_url("cmm::cmmCodeFind.xfdl");
            obj.set_text("");
            this.divSearch.addChild(obj.name, obj);

            obj = new Div("divData","0","30",null,null,"0","0",null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_cssclass("div_DATA_Bg");
            obj.set_text("");
            this.addChild(obj.name, obj);

            obj = new Grid("objGrid","0","15",null,null,"0","0",null,null,null,null,this.divData.form);
            obj.set_taborder("0");
            obj._setContents("");
            this.divData.addChild(obj.name, obj);

            obj = new Radio("rdoYN_DEP","75","-34","200","20",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("1");
            obj.set_innerdataset("dsYN_DEP");
            obj.set_datacolumn("VALUE");
            obj.set_codecolumn("CODE");
            obj.set_fittocontents("width");
            obj.set_direction("vertical");
            obj.set_text("");
            obj.set_value("");
            obj.set_index("-1");
            this.divData.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this
            obj = new Layout("default","",this._adjust_width,this._adjust_height,this,function(p){});
            obj.set_stepcount("0");
            this.addLayout(obj.name, obj);
            
            // BindItem Information
            obj = new BindItem("item0","divSearch.form.ccfCorp.form.CDTextBox","value","dsSearch","CORP");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item1","divSearch.form.ccfSite.form.CDTextBox","value","dsSearch","DEPT");
            this.addChild(obj.name, obj);
            obj.bind();
            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {
            this._addPreloadList("fdl","cmm::cmmCodeFind.xfdl");
        };
        
        // User Script
        this.registerScript("DHA_SITE.xfdl", function() {
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
        };

        this.fnSetExtendButton = function() {

        };

        /************************************************************************
         * 변수 선언
         ************************************************************************/
        this.fnSetVariable = function() {

        	//조회
        	this.ccfCorp = this.divSearch.form.ccfCorp;
        	this.ccfSite = this.divSearch.form.ccfSite;

        	//그리드
        	this.dxGrid = this.divData.form.objGrid;
        };

        this.fnSetButton = function() {

        	// Select, Add, Del, Save, Excel, Print
        	// SubSelect, SubAdd, SubDel, SuubSave, SubExcel
        }

        this.fnSetParameter = function() {

        	this.dsSelect = new Dataset();
        	this.dsSelect.addColumn("CD_CORP", "string");
        	this.dsSelect.addColumn("CD_SITE", "string");

        	this.dsInsert = new Dataset();
        	this.dsInsert.addColumn("CD_CORP", "string");
        	this.dsInsert.addColumn("CD_SITE", "string");
        	this.dsInsert.addColumn("NM_SITE", "string");
        	this.dsInsert.addColumn("DT_CMP", "string");
        	this.dsInsert.addColumn("LF_SERV", "string");
        	this.dsInsert.addColumn("RT_SK", "string");
        	this.dsInsert.addColumn("TM_DULEA", "string");
        	this.dsInsert.addColumn("TY_SK", "string");
        	this.dsInsert.addColumn("YN_USE", "string");
        	this.dsInsert.addColumn("YN_MIX", "string");


        	this.dsUpdate = new Dataset();
        	this.dsUpdate.addColumn("CD_CORP", "string");
        	this.dsUpdate.addColumn("CD_SITE", "string");
        	this.dsUpdate.addColumn("NM_SITE", "string");
        	this.dsUpdate.addColumn("DT_CMP", "string");
        	this.dsUpdate.addColumn("LF_SERV", "string");
        	this.dsUpdate.addColumn("RT_SK", "string");
        	this.dsUpdate.addColumn("TM_DULEA", "string");
        	this.dsUpdate.addColumn("TY_SK", "string");
        	this.dsUpdate.addColumn("YN_USE", "string");
        	this.dsUpdate.addColumn("YN_MIX", "string");

        	this.dsDelete = new Dataset();
        	this.dsDelete.addColumn("CD_CORP", "string");
        	this.dsDelete.addColumn("CD_SITE", "string");

        }

        this.fnSetEvent = function() {

        	// 그리드 초기화
        	this.gfnGridInit(this.dxGrid, this.dsList, "DH", "DHA_SITE");
        	this.dxGrid.set_selecttype("cell");
        	this.dxGrid.BeforeUserDataSetParam = "fnGrid_BeforeUserDataSetParam";

        	this.ccfCorp.CodeFindName = "DHX_CFCORP";
        	this.ccfCorp.BeforeUserDataSetParam = "fnBeforeUserDataSetParam";
        	this.ccfCorp.AfterCDTextChanged = "fnAfterCDTextChanged";

        	this.ccfSite.CodeFindName = "DHX_CFACNTUNIT";
        	this.ccfSite.BeforeUserDataSetParam = "fnBeforeUserDataSetParam";
        	this.ccfSite.AfterCDTextChanged = "fnAfterCDTextChanged";

        	this.ccfCorp.form.DSTextBox.set_value(this.AuthClient.DS_CORP);
        	this.ccfCorp.form.CDTextBox.set_value(this.AuthClient.CD_CORP);

        }

        this.fnSearchInit = function(id) {
        	this.gfnSetFormStatus(this);
        };

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

        	if(this.gfnIsNull(this.ccfCorp.form.CDTextBox.value)) {
        		this.ccfCorp.form.CDTextBox.setFocus();
        		this.gfnAlert("법인코드를 입력하세요.");
        		return false;
        	}

        	return true;
        }

        this.fnSaveValidation = function() {

        	for (var i = 0; i < this.dsList.rowcount; i++) {
        		var flag = this.gfnGetFlag(this.dsList, i);

        		if (this.gfnIsNull(flag) || flag == "D") continue;

        		if (flag == "I" || flag == "U") {
        			for (var j = 0; j < this.dsList.rowcount; j++) {
        				if (j == i) continue;
        				if (this.dsList.getColumn(i, "CD_SITE") == this.dsList.getColumn(j, "CD_SITE")) {
        					this.gfnAlert("사업지코드는 중복될수 없습니다.");
        					return false;
        				}
        			}

        			if (this.dsList.getColumn(i, "RT_SK") < 0.000 || this.dsList.getColumn(i, "RT_SK") > 1.000) {
        				this.gfnAlert("상각율은 0~1의 (소숫점3자리이내)숫자로 입력하셔야 됩니다.");
        				return false;
        			}
        		}
        	}

        	return true;
        }

        this.fnSelect = function() {

        	if (!this.fnSelectValidation()) return;

        	this.gfnGridBeforeSelect(this.dxGrid);

        	this.dsSelect.clearData();
        	this.dsSelect.addRow();

        	this.dsSelect.setColumn(0, "CD_CORP", this.gfnTrim(this.ccfCorp.form.CDTextBox.value));
        	this.dsSelect.setColumn(0, "CD_SITE", this.gfnTrim(this.ccfSite.form.CDTextBox.value));

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

        	var nrow = this.gfnGridAdd(this.dxGrid, "top");

        }

        this.fnDel = function() {
        	this.gfnGridDel(this.dxGrid);
        }

        this.fnSave = function() {
        	if (!this.fnSaveValidation()) return;
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
        				this.dsInsertMake(nrow, i);
        				break;

        			case "U":
        				var nrow = this.dsUpdate.addRow();
        				this.dsUpdateMake(nrow, i);
        				break;

        			case "D":
        				var nrow = this.dsDelete.addRow();
        				this.dsDeleteMake(nrow, i);
        				break;
        		}
        	}

        	if (this.dsInsert.rowcount == 0 && this.dsUpdate.rowcount == 0 && this.dsDelete.rowcount == 0) return;

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
        						strArg, 			// 입력갑스로 보낼 arguments, strFormData="20120607"
        						callBackFnc); // 통신방법 정의 [생략가능]
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

        	if(id == "ccfCorp") {
        		dsUserParam.setColumn(nrow, "ID_SABUN", this.AuthClient.ID_USER);
        	}

        	if(id == "ccfSite") {
        		var cdCorp = this.ccfCorp.form.CDTextBox.text;
        		if(this.gfnIsNull(cdCorp)){
        			this.gfnAlert("법인코드를 먼저 선택하세요.");
        			return false;
        		}
        		//dsUserParam.setColumn(nrow, "VALUE", this.ccfSite.form.CDTextBox.value);
        		dsUserParam.setColumn(nrow, "YN_SLIPACCEPT", "");
        		dsUserParam.setColumn(nrow, "CD_DEPT_UPPER", "0000000");
        		dsUserParam.setColumn(nrow, "CD_CORP", cdCorp);
        		dsUserParam.setColumn(nrow, "YN_USE", "Y");
        		dsUserParam.setColumn(nrow, "GR_DEPT_ACNT", "02");
        	}

        	return true;
        };

        this.fnAfterCDTextChanged = function(id, codeFindData) {

        	if(id == "ccfCorp") {
        		this.ccfSite.form.fnCodeFindClear();
        	}else if(id == "ccfSite") {
        		//this.gfnSetFormStatus(this, "I");
        	}
        }

        /************************************************************************
         * 기타 이벤트
         ************************************************************************/


        /*
         *	조회 조건 변경시 초기화
         */
        this.fnSearchInit = function(obj,e) {

        	if(e == null || (e.pretext != e.posttext)) {
        		// 폼상태 초기화
        		this.gfnSetFormStatus(this);
        		this.gfnGridClear(this.dxGrid);
        	}
        };

        this.dsSearch_onvaluechanged = function(obj,e) {
        	if(e.oldvalue != e.newvalue) {
        		this.gfnSetFormStatus(this);	// 폼상태 초기화
        		this.gfnGridClear(this.dxGrid);
        	}
        };


        /************************************************************************
         * 그리드 이벤트
         ************************************************************************/

        this.fnGrid_BeforeUserDataSetParam = function(id, dsUserParam, nrow) {

         	if(id == "DHX_CFACNTUNIT") {
         		var cdCorp = this.ccfCorp.form.CDTextBox.text;
        		var cdSite = this.dsList.getColumn(this.dsList.rowposition, "CD_SITE");
        		if (this.gfnIsNull(cdSite)) {
        			cdSite = "";
        		}
        		//dsUserParam.setColumn(nrow, "VALUE", cdSite);
        		dsUserParam.setColumn(nrow, "YN_SLIPACCEPT", "");
        		dsUserParam.setColumn(nrow, "CD_DEPT_UPPER", "0000000");
        		dsUserParam.setColumn(nrow, "CD_CORP", cdCorp);
        		dsUserParam.setColumn(nrow, "YN_USE", "Y");
        		dsUserParam.setColumn(nrow, "GR_DEPT_ACNT", "02");
         	}

        	return true;
        };

        this.dsInsertMake = function(nrow, i) {
        	this.dsInsert.setColumn(nrow, "CD_CORP", this.gfnTrim(this.ccfCorp.form.CDTextBox.value));
        	this.dsInsert.setColumn(nrow, "CD_SITE", this.dsList.getColumn(i, "CD_SITE"));
        	this.dsInsert.setColumn(nrow, "NM_SITE", this.dsList.getColumn(i, "NM_SITE"));
        	this.dsInsert.setColumn(nrow, "DT_CMP", this.dsList.getColumn(i, "DT_CMP"));
        	this.dsInsert.setColumn(nrow, "LF_SERV", this.dsList.getColumn(i, "LF_SERV"));
        	this.dsInsert.setColumn(nrow, "RT_SK", this.dsList.getColumn(i, "RT_SK"));
        	this.dsInsert.setColumn(nrow, "TM_DULEA", this.dsList.getColumn(i, "TM_DULEA"));
        	this.dsInsert.setColumn(nrow, "TY_SK", this.dsList.getColumn(i, "TY_SK"));
        	this.dsInsert.setColumn(nrow, "YN_USE", this.dsList.getColumn(i, "YN_USE"));
        	this.dsInsert.setColumn(nrow, "YN_MIX", this.dsList.getColumn(i, "YN_MIX"));
        }

        this.dsUpdateMake = function(nrow, i) {
        	this.dsUpdate.setColumn(nrow, "CD_CORP", this.gfnTrim(this.ccfCorp.form.CDTextBox.value));
        	this.dsUpdate.setColumn(nrow, "CD_SITE", this.dsList.getColumn(i, "CD_SITE"));
        	this.dsUpdate.setColumn(nrow, "NM_SITE", this.dsList.getColumn(i, "NM_SITE"));
        	this.dsUpdate.setColumn(nrow, "DT_CMP", this.dsList.getColumn(i, "DT_CMP"));
        	this.dsUpdate.setColumn(nrow, "LF_SERV", this.dsList.getColumn(i, "LF_SERV"));
        	this.dsUpdate.setColumn(nrow, "RT_SK", this.dsList.getColumn(i, "RT_SK"));
        	this.dsUpdate.setColumn(nrow, "TM_DULEA",  this.dsList.getColumn(i, "TM_DULEA"));
        	this.dsUpdate.setColumn(nrow, "TY_SK",  this.dsList.getColumn(i, "TY_SK"));
        	this.dsUpdate.setColumn(nrow, "YN_USE",  this.dsList.getColumn(i, "YN_USE"));
        	this.dsUpdate.setColumn(nrow, "YN_MIX", this.dsList.getColumn(i, "YN_MIX"));
        }

        this.dsDeleteMake = function(nrow, i) {
        	this.dsDelete.setColumn(nrow, "CD_CORP", this.gfnTrim(this.ccfCorp.form.CDTextBox.value));
        	this.dsDelete.setColumn(nrow, "CD_SITE", this.dsList.getColumn(i, "CD_SITE"));
        }



        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.form_onload,this);
            this.divSearch.form.ccfCorp.addEventHandler("onclick",this.Common_onclick,this);
            this.divSearch.form.ccfSite.addEventHandler("onclick",this.Common_onclick,this);
            this.divData.form.rdoYN_DEP.addEventHandler("onitemchanged",this.rdo00_onitemchanged,this);
            this.dsSearch.addEventHandler("onvaluechanged",this.dsSearch_onvaluechanged,this);
        };
        this.loadIncludeScript("DHA_SITE.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
