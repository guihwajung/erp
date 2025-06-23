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
            this.set_titletext("자동전표 코드등록");
            if (Form == this.constructor)
            {
                this._setFormPosition(1400,720);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("dsList", this);
            obj._setContents("");
            this.addChild(obj.name, obj);


            obj = new Dataset("_dsProc", this);
            obj._setContents("<ColumnInfo><Column id=\"TARGET\" type=\"STRING\" size=\"256\"/><Column id=\"SP\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"TARGET\">select</Col><Col id=\"SP\">DLCPR_MANAGEMENT_SELECT</Col></Row><Row><Col id=\"TARGET\">save</Col><Col id=\"SP\">DLCPR_MANAGEMENT_UPDATE</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsSearch", this);
            obj._setContents("<ColumnInfo><Column id=\"CD_ACNTUNIT\" type=\"STRING\" size=\"256\"/><Column id=\"DS_ACNTUNIT\" type=\"STRING\" size=\"256\"/><Column id=\"YM_MANAGEMENT\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"CD_ACNTUNIT\"/><Col id=\"DS_ACNTUNIT\"/></Row></Rows>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Div("divSearch","0.0","10.0",null,"46.0","0",null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_cssclass("div_SEARCH_Bg");
            obj.set_formscrolltype("none");
            obj.set_text("");
            this.addChild(obj.name, obj);

            obj = new Static("sta00","0.0","10.0","105.0","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("0");
            obj.set_text("사업지코드");
            obj.set_cssclass("sta_WF_SchLabelE");
            this.divSearch.addChild(obj.name, obj);

            obj = new Div("ccfCD_ACNTUNIT","sta00:0.0","10.0","350","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.getSetter("CodeFindName").set("DLX_CFLEASESITE_CODEFIND");
            obj.getSetter("CDTextWidth").set("70");
            obj.set_taborder("2");
            obj.set_url("cmm::cmmCodeFind.xfdl");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("sta01","ccfCD_ACNTUNIT:0.0","10.0","105.0","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("1");
            obj.set_text("작업년월");
            obj.set_cssclass("sta_WF_SchLabelE");
            this.divSearch.addChild(obj.name, obj);

            obj = new Div("ctclYM_MANAGEMENT","sta01:0.0","10.0","105","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("3");
            obj.set_url("cmm::cmmCalMM.xfdl");
            this.divSearch.addChild(obj.name, obj);

            obj = new Div("divData","0","30",null,null,"0","40",null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_cssclass("div_DATA_Bg");
            obj.set_text("");
            this.addChild(obj.name, obj);

            obj = new Grid("objGrid","0","15",null,null,"0","0",null,null,null,null,this.divData.form);
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

            obj = new BindItem("item1","divSearch.form.ccfCD_ACNTUNIT.form.DSTextBox","value","dsSearch","DS_ACNTUNIT");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item2","divSearch.form.ctclYM_MANAGEMENT.form.TextBox","value","dsSearch","YM_MANAGEMENT");
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
        this.registerScript("DLC_MANAGEMENT.xfdl", function() {
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

        	this.dsSearch.setColumn(0, "YM_MANAGEMENT", this.gfnGetDate().substr(0,6));
        	this.ccfCD_ACNTUNIT.form.CDTextBox.setFocus();
        };

        this.fnSetButton = function() {
        };

        this.fnSetExtendButton = function() {
        };

        this.fnSetVariable = function() {
        	this.ccfCD_ACNTUNIT = this.divSearch.form.ccfCD_ACNTUNIT;
        	this.ctclYM_MANAGEMENT = this.divSearch.form.ctclYM_MANAGEMENT;
        	this.dxGrid = this.divData.form.objGrid;
        };

        this.fnSetEvent = function() {
        	this.gfnGridInit(this.dxGrid, this.dsList, "DL", "DLC_MANAGEMENT");
        	this.ccfCD_ACNTUNIT.BeforeUserDataSetParam = "fnBeforeUserDataSetParam";
        	this.dxGrid.AfterEdit = "fnGrid_AfterEdit";
        };

        this.fnSetParameter = function() {
        	this.dsSelect = new Dataset();
        	this.dsSelect.addColumn("CD_ACNTUNIT", "string");
        	this.dsSelect.addColumn("TY_GUBUN", "string");
        	this.dsSelect.addColumn("NO_CHASU", "string");
        	this.dsSelect.addColumn("YM_MANAGEMENT", "string");

        	this.dsSave = new Dataset();
        	this.dsSave.addColumn("CD_ACNTUNIT", "string");
        	this.dsSave.addColumn("TY_GUBUN", "string");
        	this.dsSave.addColumn("NO_CHASU", "string");
        	this.dsSave.addColumn("NO_DONG", "string");
        	this.dsSave.addColumn("NO_FLOOR", "string");
        	this.dsSave.addColumn("NO_HO", "string");
        	this.dsSave.addColumn("YM_MANAGEMENT", "string");
        	this.dsSave.addColumn("AM_LEASE", "bigdecimal");
        	this.dsSave.addColumn("AM_MANAGEMENT", "bigdecimal");
        	this.dsSave.addColumn("AM_PARKING", "bigdecimal");
        	this.dsSave.addColumn("AM_PARKING2", "bigdecimal");
        	this.dsSave.addColumn("AM_ELEC", "bigdecimal");
        	this.dsSave.addColumn("AM_WATER", "bigdecimal");
        	this.dsSave.addColumn("AM_HEAT", "bigdecimal");
        	this.dsSave.addColumn("AM_GAS", "bigdecimal");
        	this.dsSave.addColumn("AM_SUPPLY", "bigdecimal");
        	this.dsSave.addColumn("AM_VAT", "bigdecimal");
        	this.dsSave.addColumn("AM_TOTAL", "bigdecimal");
        	this.dsSave.addColumn("ID_UPDATE", "string");
        }

        /************************************************************************
        * 컨트롤 이벤트
        ************************************************************************/
        this.fnSelect = function() {
        	if (!this.fnSelectValidation()) return;

        	this.gfnGridBeforeSelect(this.dxGrid);

        	this.dsSelect.clearData();
        	this.dsSelect.addRow();
        	this.dsSelect.setColumn(0, "CD_ACNTUNIT", this.dsSearch.getColumn(0, "CD_ACNTUNIT").substr(0, 6));
        	this.dsSelect.setColumn(0, "TY_GUBUN", this.dsSearch.getColumn(0, "CD_ACNTUNIT").substr(6, 1));
        	this.dsSelect.setColumn(0, "NO_CHASU", this.dsSearch.getColumn(0, "CD_ACNTUNIT").substr(7, 2));
        	this.dsSelect.setColumn(0, "YM_MANAGEMENT", this.dsSearch.getColumn(0, "YM_MANAGEMENT"));

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
        }

        this.fnDel = function() {
        }

        this.fnSave = function() {
        	if (!this.gfnGridValidate(this.dxGrid)) return;
        	this.dxGrid.updateToDataset();
        	this.dsSave.clearData();

        	for (var i = 0; i < this.dsList.rowcount; i++) {
        		var flag = this.gfnGetFlag(this.dsList, i);
        		switch(flag) {
        		case "I":
        		case "U":
        			var nrow = this.dsSave.addRow();
        				this.dsSave.setColumn(nrow, "CD_ACNTUNIT", this.dsSearch.getColumn(0, "CD_ACNTUNIT").substr(0, 6));
        				this.dsSave.setColumn(nrow, "TY_GUBUN", this.dsSearch.getColumn(0, "CD_ACNTUNIT").substr(6, 1));
        				this.dsSave.setColumn(nrow, "NO_CHASU", this.dsSearch.getColumn(0, "CD_ACNTUNIT").substr(7, 2));
        				this.dsSave.setColumn(nrow, "NO_DONG", this.dsList.getColumn(i, "NO_DONG"));
        				this.dsSave.setColumn(nrow, "NO_FLOOR", this.dsList.getColumn(i, "NO_FLOOR"));
        				this.dsSave.setColumn(nrow, "NO_HO", this.dsList.getColumn(i, "NO_HO"));
        				this.dsSave.setColumn(nrow, "YM_MANAGEMENT", this.dsSearch.getColumn(0, "YM_MANAGEMENT"));
        				this.dsSave.setColumn(nrow, "AM_LEASE", this.dsList.getColumn(i, "AM_LEASE"));
        				this.dsSave.setColumn(nrow, "AM_MANAGEMENT", this.dsList.getColumn(i, "AM_MANAGEMENT"));
        				this.dsSave.setColumn(nrow, "AM_PARKING", this.dsList.getColumn(i, "AM_PARKING"));
        				this.dsSave.setColumn(nrow, "AM_PARKING2", this.dsList.getColumn(i, "AM_PARKING2"));
        				this.dsSave.setColumn(nrow, "AM_ELEC", this.dsList.getColumn(i, "AM_ELEC"));
        				this.dsSave.setColumn(nrow, "AM_WATER", this.dsList.getColumn(i, "AM_WATER"));
        				this.dsSave.setColumn(nrow, "AM_HEAT", this.dsList.getColumn(i, "AM_HEAT"));
        				this.dsSave.setColumn(nrow, "AM_GAS", this.dsList.getColumn(i, "AM_GAS"));
        				this.dsSave.setColumn(nrow, "AM_SUPPLY", this.dsList.getColumn(i, "AM_SUPPLY"));
        				this.dsSave.setColumn(nrow, "AM_VAT", this.dsList.getColumn(i, "AM_VAT"));
        				this.dsSave.setColumn(nrow, "AM_TOTAL", this.dsList.getColumn(i, "AM_TOTAL"));
        				this.dsSave.setColumn(nrow, "ID_UPDATE", this.AuthClient.ID_USER);
        				break;
        		case "D":

        		}
        	}

        	if (this.dsSave.rowcount == 0) return;

        	var strSvcId    = "save";
        	var strSvcType  = "save";
        	var inProc		= "_dsProc";
        	var inData      = "save=dsSave";
        	var outData     = "dsList=save";
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
        * Validate
        ************************************************************************/
        this.fnSelectValidation = function() {
        	var validate = true;
        	if (this.gfnIsNull(this.dsSearch.getColumn(0, "CD_ACNTUNIT"))) {
        		this.fnVaidateCallback = function() {
        			this.ccfCD_ACNTUNIT.form.CDTextBox.setFocus();
        		}
        		this.gfnAlert("사업지코드가 입력되지 않았습니다.", "fnVaidateCallback");
        		return false;
        	}
        	if (this.gfnIsNull(this.dsSearch.getColumn(0, "YM_MANAGEMENT"))) {
        		this.fnVaidateCallback = function() {
        			this.ctclYM_MANAGEMENT.setFocus();
        		}
        		this.gfnAlert("작업년월이 입력되지 않았습니다.", "fnVaidateCallback");
        		return false;
        	}
        	return validate;
        }

        /************************************************************************
        * 콜백 이벤트
        ************************************************************************/
        this.fnCallback = function(svcID, errorCode, errorMsg) {
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
        	if (id == "ccfCD_ACNTUNIT") {
        		dsUserParam.setColumn(nrow, "FLAG", "A");
        		dsUserParam.setColumn(nrow, "CD_DEPT", this.AuthClient.CD_DEPT);
        		dsUserParam.setColumn(nrow, "ID_USER", this.AuthClient.ID_USER);
        		dsUserParam.setColumn(nrow, "ID_GROUP", this.FormInfo.ID_GROUP);
        		dsUserParam.setColumn(nrow, "GR_SEARCH", this.FormInfo.GR_SEARCH);
        		dsUserParam.setColumn(nrow, "YN_TOTALCHASU", "");
        	}

        	return true;
        };


        /************************************************************************
        * 그리드 이벤트
        ************************************************************************/

        /************************************************************************
        * 기타 이벤트
        ************************************************************************/
        this.dsSearch_onvaluechanged = function(obj,e) {
        	if(e.oldvalue != e.newvalue) {
        		this.gfnSetFormStatus(this);	// 폼상태 초기화
        		this.gfnGridClear(this.dxGrid);
        	}
        };

        this.fnGrid_AfterEdit = function(obj, e)
        {
        	if(e.columnid == "AM_MANAGEMENT" || e.columnid == "AM_ELEC" || e.columnid == "AM_WATER" || e.columnid == "AM_HEAT" || e.columnid == "AM_GAS" ||
        	e.columnid == "AM_PARKING" || e.columnid == "AM_PARKING2" )	{
        		if(e.oldvalue != e.newvalue)
        		{
        				var am_mlease = nexacro.toNumber(this.dsList.getColumn(this.dsList.rowposition, "AM_MLEASE"));
        				var am_management = nexacro.toNumber(this.dsList.getColumn(this.dsList.rowposition, "AM_MANAGEMENT"));
        				var am_elec = nexacro.toNumber(this.dsList.getColumn(this.dsList.rowposition, "AM_ELEC"));
        				var am_heat = nexacro.toNumber(this.dsList.getColumn(this.dsList.rowposition, "AM_HEAT"));
        				var am_water = nexacro.toNumber(this.dsList.getColumn(this.dsList.rowposition, "AM_WATER"));
        				var am_gas = nexacro.toNumber(this.dsList.getColumn(this.dsList.rowposition, "AM_GAS"));
        				var am_parking = nexacro.toNumber(this.dsList.getColumn(this.dsList.rowposition, "AM_PARKING"));
        				var am_parking2 = nexacro.toNumber(this.dsList.getColumn(this.dsList.rowposition, "AM_PARKING2"));

        				var am_supply = am_mlease + am_management + am_elec + am_water + am_heat + am_gas + am_parking + am_parking2;
        		 		var am_supply4vat = am_mlease + am_management + am_elec + am_heat + am_gas + am_parking + am_parking2;
        		 		var am_vat = am_supply4vat * 0.1;
        		 		var am_total = am_supply + am_vat;

        				this.dsList.setColumn(this.dsList.rowposition, "AM_SUPPLY", am_supply);
        				this.dsList.setColumn(this.dsList.rowposition, "AM_VAT", am_vat);
        				this.dsList.setColumn(this.dsList.rowposition, "AM_TOTAL", am_total);
        		}
        	}
        }

        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.form_onload,this);
            this.dsSearch.addEventHandler("onvaluechanged",this.dsSearch_onvaluechanged,this);
        };
        this.loadIncludeScript("DLC_MANAGEMENT.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
