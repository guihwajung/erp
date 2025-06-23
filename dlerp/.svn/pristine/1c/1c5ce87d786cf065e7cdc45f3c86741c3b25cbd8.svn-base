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
            obj._setContents("<ColumnInfo><Column id=\"TARGET\" type=\"STRING\" size=\"256\"/><Column id=\"SP\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"TARGET\">select</Col><Col id=\"SP\">DRFPR_ITEMS_SELECT</Col></Row><Row><Col id=\"TARGET\">insert</Col><Col id=\"SP\">DRFPR_ITEMS_INSERT</Col></Row><Row><Col id=\"TARGET\">update</Col><Col id=\"SP\">DRFPR_ITEMS_UPDATE</Col></Row><Row><Col id=\"TARGET\">delete</Col><Col id=\"SP\">DRFPR_ITEMS_DELETE</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsSearch", this);
            obj._setContents("<ColumnInfo><Column id=\"CD_ACNTUNIT\" type=\"STRING\" size=\"256\"/><Column id=\"NO_SIZE\" type=\"STRING\" size=\"256\"/><Column id=\"TY_TYPE\" type=\"STRING\" size=\"256\"/><Column id=\"SZ_EXCLUSIVE\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"CD_ACNTUNIT\"/><Col id=\"NO_SIZE\"/><Col id=\"TY_TYPE\"/><Col id=\"SZ_EXCLUSIVE\"/></Row></Rows>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Div("divSearch","0.0","10.0",null,"46.0","0",null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_cssclass("div_SEARCH_Bg");
            obj.set_formscrolltype("none");
            obj.set_text("");
            this.addChild(obj.name, obj);

            obj = new Edit("ctxtCD_ACNTUNIT","0.0","10.0","80","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("0");
            obj.set_value("");
            obj.set_readonly("true");
            this.divSearch.addChild(obj.name, obj);

            obj = new Edit("ctxtDS_ACNTUNIT","ctxtCD_ACNTUNIT:0.0","10.0","220","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("1");
            obj.set_value("");
            obj.set_readonly("true");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("staCD_CORP00","ctxtDS_ACNTUNIT:0.0","10.0","105.0","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("4");
            obj.set_text("면적/형");
            obj.set_cssclass("sta_WF_SchLabelE");
            this.divSearch.addChild(obj.name, obj);

            obj = new Edit("ctxtNO_SIZE","staCD_CORP00:0.0","10.0","80","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("2");
            obj.set_value("");
            obj.set_readonly("false");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("staCD_CORP","ctxtNO_SIZE:0.0","10.0","105.0","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("3");
            obj.set_text("사업지코드");
            obj.set_cssclass("sta_WF_SchLabel");
            this.divSearch.addChild(obj.name, obj);

            obj = new Div("ccfTY_TYPE","ctxtNO_SIZE:0.0","10.0","78","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.getSetter("CodeFindName").set("DRX_CFSIZETYPE");
            obj.getSetter("CDTextWidth").set("50");
            obj.set_taborder("5");
            obj.set_url("cmm::cmmCodeFind.xfdl");
            obj.set_text("");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("staCD_CORP01","ccfTY_TYPE:0.0","10.0","105.0","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("6");
            obj.set_text("전용면적");
            obj.set_cssclass("sta_WF_SchLabel");
            this.divSearch.addChild(obj.name, obj);

            obj = new Edit("ctxtSZ_EXCLUSIVE","staCD_CORP01:0.0","10.0","80","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("7");
            obj.set_value("");
            obj.set_readonly("false");
            this.divSearch.addChild(obj.name, obj);

            obj = new Div("divData","0","60",null,null,"0","0",null,null,null,null,this);
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
            obj = new BindItem("item0","divSearch.form.ctxtCD_ACNTUNIT","value","dsSearch","CD_ACNTUNIT");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item1","divSearch.form.ctxtNO_SIZE","value","dsSearch","NO_SIZE");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item2","divSearch.form.ccfTY_TYPE.form.CDTextBox","value","dsSearch","TY_TYPE");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item3","divSearch.form.ctxtSZ_EXCLUSIVE","value","dsSearch","SZ_EXCLUSIVE");
            this.addChild(obj.name, obj);
            obj.bind();
            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {
            this._addPreloadList("fdl","cmm::cmmCodeFind.xfdl");
        };
        
        // User Script
        this.registerScript("DLF_ITEM.xfdl", function() {
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
        		this.dsSearch.setColumn(0, "CD_ACNTUNIT", this.getOwnerFrame().CD_ACNTUNIT);
        		this.divSearch.form.ctxtDS_ACNTUNIT.set_value(this.getOwnerFrame().DS_ACNTUNIT);
        	}
        };

        /************************************************************************
         * 변수 선언
         ************************************************************************/
        this.fnSetVariable = function() {
        	this.ctxtCD_ACNTUNIT = this.divSearch.form.ctxtCD_ACNTUNIT;
        	this.ctxtDS_ACNTUNIT = this.divSearch.form.ctxtDS_ACNTUNIT;
        	this.ctxtNO_SIZE = this.divSearch.form.ctxtNO_SIZE;
        	this.ccfTY_TYPE = this.divSearch.form.ccfTY_TYPE;

        	this.dxGrid = this.divData.form.objGrid;
        };

        this.fnSetButton = function() {
        	// Select, Add, Del, Save, Excel, Print
        	// SubSelect, SubAdd, SubDel, SuubSave, SubExcel
        }

        this.fnSetExtendButton = function() {
        	//this.btnColorCd = this.gfnFormButtonAdd("btnColorCd", "fnColorCd");
        };


        this.fnSetParameter = function() {

        	this.dsSelect = new Dataset();
        	this.dsSelect.addColumn("CD_ACNTUNIT", "string");
        	this.dsSelect.addColumn("TY_GUBUN", "string");
        	this.dsSelect.addColumn("NO_CHASU", "string");
        	this.dsSelect.addColumn("NO_SIZE", "bigdecimal");
        	this.dsSelect.addColumn("TY_TYPE", "string");

        	this.dsInsert = new Dataset();
        	this.dsInsert.addColumn("CD_ACNTUNIT", "string");
        	this.dsInsert.addColumn("TY_GUBUN", "string");
        	this.dsInsert.addColumn("NO_CHASU", "string");
        	this.dsInsert.addColumn("NO_SIZE", "bigdecimal");
        	this.dsInsert.addColumn("TY_TYPE", "string");
        	this.dsInsert.addColumn("CD_LCODE", "string");
        	this.dsInsert.addColumn("CD_RCODE", "string");
        	this.dsInsert.addColumn("CD_ICODE", "string");
        	this.dsInsert.addColumn("DS_ITEM", "string");
        	this.dsInsert.addColumn("CD_CCODE", "string");
        	this.dsInsert.addColumn("YN_SERVICE", "string");
        	this.dsInsert.addColumn("NO_COLOR", "int");
        	this.dsInsert.addColumn("AM_SUPPLY", "bigdecimal");
        	this.dsInsert.addColumn("AM_VAT", "bigdecimal");
        	this.dsInsert.addColumn("DS_REMARK", "string");
        	this.dsInsert.addColumn("ID_INSERT", "string");

        	this.dsUpdate = new Dataset();
        	this.dsUpdate.addColumn("CD_ACNTUNIT", "string");
        	this.dsUpdate.addColumn("TY_GUBUN", "string");
        	this.dsUpdate.addColumn("NO_CHASU", "string");
        	this.dsUpdate.addColumn("NO_SIZE", "bigdecimal");
        	this.dsUpdate.addColumn("TY_TYPE", "string");
        	this.dsUpdate.addColumn("CD_LCODE", "string");
        	this.dsUpdate.addColumn("CD_RCODE", "string");
        	this.dsUpdate.addColumn("CD_ICODE", "string");
        	this.dsUpdate.addColumn("DS_ITEM", "string");
        	this.dsUpdate.addColumn("CD_CCODE", "string");
        	this.dsUpdate.addColumn("YN_SERVICE", "string");
        	this.dsUpdate.addColumn("NO_COLOR", "int");
        	this.dsUpdate.addColumn("AM_SUPPLY", "bigdecimal");
        	this.dsUpdate.addColumn("AM_VAT", "bigdecimal");
        	this.dsUpdate.addColumn("DS_REMARK", "string");
        	this.dsUpdate.addColumn("ID_UPDATE", "string");

        	this.dsDelete = new Dataset();
        	this.dsDelete.addColumn("CD_ACNTUNIT", "string");
        	this.dsDelete.addColumn("TY_GUBUN", "string");
        	this.dsDelete.addColumn("NO_CHASU", "string");
        	this.dsDelete.addColumn("NO_SIZE", "bigdecimal");
        	this.dsDelete.addColumn("TY_TYPE", "string");
        	this.dsDelete.addColumn("CD_LCODE", "string");
        	this.dsDelete.addColumn("CD_RCODE", "string");
        	this.dsDelete.addColumn("CD_ICODE", "string");
        	this.dsDelete.addColumn("CD_CCODE", "string");

        }

        this.fnSetEvent = function() {

        	// 그리드 초기화
        	this.gfnGridInit(this.dxGrid, this.dsList, "DL", "Dlf_Item");

        	this.dxGrid.set_selecttype("cell");

        	this.ccfTY_TYPE.BeforeUserDataSetParam = "fnBeforeUserDataSetParam";
        	this.ccfTY_TYPE.AfterCDTextChanged = "fnAfterCDTextChanged";

        	this.dxGrid.BeforeUserDataSetParam = "fnGrid_BeforeUserDataSetParam";
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

        	if (this.gfnIsNull(this.dsSearch.getColumn(0,"NO_SIZE"))) {
        		validate = false;
        		// Alert후 실행할 처리
        		this.fnVaidateCallback = function() {
        			this.ctxtNO_SIZE.setFocus();
        		}
        		this.gfnAlert("면적/형은 반드시 입력 하셔야 합니다.", "fnVaidateCallback");
        	}
        	if (this.gfnIsNull(this.dsSearch.getColumn(0,"TY_TYPE"))) {
        		validate = false;
        		// Alert후 실행할 처리
        		this.fnVaidateCallback = function() {
        			this.ccfTY_TYPE.form.CDTextBox.setFocus();
        		}
        		this.gfnAlert("면적/형은 반드시 입력 하셔야 합니다.", "fnVaidateCallback");
        	}

        	return validate;
        }

        this.fnSelect = function() {

        	if (!this.fnSelectValidation()) return;

        	this.gfnGridBeforeSelect(this.dxGrid);

        	this.dsSelect.clearData();
        	this.dsSelect.addRow();

        	this.dsSelect.setColumn(0, "CD_ACNTUNIT", this.dsSearch.getColumn(0, "CD_ACNTUNIT").substr(0, 6));
        	this.dsSelect.setColumn(0, "TY_GUBUN", this.dsSearch.getColumn(0, "CD_ACNTUNIT").substr(6, 1));
        	this.dsSelect.setColumn(0, "NO_CHASU", this.dsSearch.getColumn(0, "CD_ACNTUNIT").substr(7, 2));
        	this.dsSelect.setColumn(0, "NO_SIZE", this.dsSearch.getColumn(0, "NO_SIZE"));
        	this.dsSelect.setColumn(0, "TY_TYPE", this.dsSearch.getColumn(0, "TY_TYPE"));

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
        				this.dsInsert.setColumn(nrow, "CD_ACNTUNIT", this.dsSearch.getColumn(0, "CD_ACNTUNIT").substr(0, 6));
        				this.dsInsert.setColumn(nrow, "TY_GUBUN", this.dsSearch.getColumn(0, "CD_ACNTUNIT").substr(6, 1));
        				this.dsInsert.setColumn(nrow, "NO_CHASU", this.dsSearch.getColumn(0, "CD_ACNTUNIT").substr(7, 2));
        				this.dsInsert.setColumn(nrow, "NO_SIZE", this.dsSearch.getColumn(0, "NO_SIZE"));
        				this.dsInsert.setColumn(nrow, "TY_TYPE", this.dsSearch.getColumn(0, "TY_TYPE"));
        				this.dsInsert.setColumn(nrow, "CD_LCODE", this.dsList.getColumn(i, "CD_LCODE"));
        				this.dsInsert.setColumn(nrow, "CD_RCODE", this.dsList.getColumn(i, "CD_RCODE"));
        				this.dsInsert.setColumn(nrow, "CD_ICODE", this.dsList.getColumn(i, "CD_ICODE"));
        				this.dsInsert.setColumn(nrow, "DS_ITEM", this.dsList.getColumn(i, "DS_ITEM"));
        				this.dsInsert.setColumn(nrow, "CD_CCODE", this.dsList.getColumn(i, "CD_CCODE"));
        				this.dsInsert.setColumn(nrow, "YN_SERVICE", this.dsList.getColumn(i, "YN_SERVICE"));
        				this.dsInsert.setColumn(nrow, "NO_COLOR", "0");
        				this.dsInsert.setColumn(nrow, "AM_SUPPLY", this.dsList.getColumn(i, "AM_SUPPLY"));
        				this.dsInsert.setColumn(nrow, "AM_VAT", this.dsList.getColumn(i, "AM_VAT"));
        				this.dsInsert.setColumn(nrow, "DS_REMARK", this.dsList.getColumn(i, "DS_REMARK"));
        				this.dsInsert.setColumn(nrow, "ID_INSERT", this.AuthClient.ID_USER);
        				break;

        			case "U":
        				var nrow = this.dsUpdate.addRow();
        				this.dsUpdate.setColumn(nrow, "CD_ACNTUNIT", this.dsSearch.getColumn(0, "CD_ACNTUNIT").substr(0, 6));
        				this.dsUpdate.setColumn(nrow, "TY_GUBUN", this.dsSearch.getColumn(0, "CD_ACNTUNIT").substr(6, 1));
        				this.dsUpdate.setColumn(nrow, "NO_CHASU", this.dsSearch.getColumn(0, "CD_ACNTUNIT").substr(7, 2));
        				this.dsUpdate.setColumn(nrow, "NO_SIZE", this.dsSearch.getColumn(0, "NO_SIZE"));
        				this.dsUpdate.setColumn(nrow, "TY_TYPE", this.dsSearch.getColumn(0, "TY_TYPE"));
        				this.dsUpdate.setColumn(nrow, "CD_LCODE", this.dsList.getColumn(i, "CD_LCODE"));
        				this.dsUpdate.setColumn(nrow, "CD_RCODE", this.dsList.getColumn(i, "CD_RCODE"));
        				this.dsUpdate.setColumn(nrow, "CD_ICODE", this.dsList.getColumn(i, "CD_ICODE"));
        				this.dsUpdate.setColumn(nrow, "DS_ITEM", this.dsList.getColumn(i, "DS_ITEM"));
        				this.dsUpdate.setColumn(nrow, "CD_CCODE", this.dsList.getColumn(i, "CD_CCODE"));
        				this.dsUpdate.setColumn(nrow, "YN_SERVICE", this.dsList.getColumn(i, "YN_SERVICE"));
        				this.dsUpdate.setColumn(nrow, "NO_COLOR", this.dsList.getColumn(i, "NO_COLOR"));
        				this.dsUpdate.setColumn(nrow, "AM_SUPPLY", this.dsList.getColumn(i, "AM_SUPPLY"));
        				this.dsUpdate.setColumn(nrow, "AM_VAT", this.dsList.getColumn(i, "AM_VAT"));
        				this.dsUpdate.setColumn(nrow, "DS_REMARK", this.dsList.getColumn(i, "DS_REMARK"));
        				this.dsUpdate.setColumn(nrow, "ID_UPDATE", this.AuthClient.ID_USER);
        				break;

        			case "D":
        				var nrow = this.dsDelete.addRow();
        				this.dsDelete.setColumn(nrow, "CD_ACNTUNIT", this.dsSearch.getColumn(0, "CD_ACNTUNIT").substr(0, 6));
        				this.dsDelete.setColumn(nrow, "TY_GUBUN", this.dsSearch.getColumn(0, "CD_ACNTUNIT").substr(6, 1));
        				this.dsDelete.setColumn(nrow, "NO_CHASU", this.dsSearch.getColumn(0, "CD_ACNTUNIT").substr(7, 2));
        				this.dsDelete.setColumn(nrow, "NO_SIZE", this.dsSearch.getColumn(0, "NO_SIZE"));
        				this.dsDelete.setColumn(nrow, "TY_TYPE", this.dsSearch.getColumn(0, "TY_TYPE"));
        				this.dsDelete.setColumn(nrow, "CD_LCODE", this.dsList.getColumn(i, "CD_LCODE"));
        				this.dsDelete.setColumn(nrow, "CD_RCODE", this.dsList.getColumn(i, "CD_RCODE"));
        				this.dsDelete.setColumn(nrow, "CD_ICODE", this.dsList.getColumn(i, "CD_ICODE"));
        				this.dsDelete.setColumn(nrow, "CD_CCODE", this.dsList.getColumn(i, "CD_CCODE"));
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

        	if(id == "ccfTY_TYPE") {
        		dsUserParam.setColumn(nrow, "CD_ACNTUNIT", this.dsSearch.getColumn(0, "CD_ACNTUNIT"));
        	}

        	return true;
        };

        this.fnAfterCDTextChanged = function(id, codeFindData) {
        	var arrData = codeFindData;
        	if(id == "ccfTY_TYPE") {
        		this.dsSearch.setColumn(0, "NO_SIZE", arrData[0]["NO_SIZE"]);
        		this.dsSearch.setColumn(0, "TY_TYPE", arrData[0]["TY_TYPE"]);
        		this.dsSearch.setColumn(0, "SZ_EXCLUSIVE", arrData[0]["SZ_EXCLUSIVE"]);
        	}
        }

        this.fnGrid_BeforeUserDataSetParam = function(id, dsUserParam, nrow) {
        	// 분류코드
        	if(id == "DRX_CFOPTIONCODE_LARGE_CODEFIND") {
        		dsUserParam.setColumn(nrow, "CD_ACNTUNIT", this.dsSearch.getColumn(0, "CD_ACNTUNIT"));
        	}
        	// 실코드
        	if(id == "DRX_CFOPTIONCODE_ROOM_CODEFIND") {
        		if(this.gfnIsNull(this.dsList.getColumn(this.dsList.rowposition, "CD_LCODE"))){
        			this.gfnAlert("분류코드를 먼저 선택하세요.");
        			return false;
        		}
        		dsUserParam.setColumn(nrow, "CD_LCODE", this.dsList.getColumn(this.dsList.rowposition, "CD_LCODE"));
        		dsUserParam.setColumn(nrow, "CD_ACNTUNIT", this.dsSearch.getColumn(0, "CD_ACNTUNIT"));
        	}
        	// 품목코드
        	if(id == "DRX_CFOPTIONCODE_ITEM_CODEFIND") {
        		if(this.gfnIsNull(this.dsList.getColumn(this.dsList.rowposition, "CD_LCODE"))){
        			this.gfnAlert("분류코드를 먼저 선택하세요.");
        			return false;
        		}else if(this.gfnIsNull(this.dsList.getColumn(this.dsList.rowposition, "CD_RCODE"))){
        			this.gfnAlert("실코드를 먼저 선택하세요.");
        			return false;
        		}
        		dsUserParam.setColumn(nrow, "CD_ACNTUNIT", this.dsSearch.getColumn(0, "CD_ACNTUNIT"));
        		dsUserParam.setColumn(nrow, "CD_LCODE", this.dsList.getColumn(this.dsList.rowposition, "CD_LCODE"));
        		dsUserParam.setColumn(nrow, "CD_RCODE", this.dsList.getColumn(this.dsList.rowposition, "CD_RCODE"));
        	}
        	// 색상코드
        	if(id == "DRX_CFOPTIONCODE_COLOR_CODEFIND") {
        		if(this.gfnIsNull(this.dsList.getColumn(this.dsList.rowposition, "CD_LCODE"))){
        			this.gfnAlert("분류코드를 먼저 선택하세요.");
        			return false;
        		}else if(this.gfnIsNull(this.dsList.getColumn(this.dsList.rowposition, "CD_RCODE"))){
        			this.gfnAlert("실코드를 먼저 선택하세요.");
        			return false;
        		}else if(this.gfnIsNull(this.dsList.getColumn(this.dsList.rowposition, "CD_ICODE"))){
        			this.gfnAlert("품목코드를 먼저 선택하세요.");
        			return false;
        		}
        		dsUserParam.setColumn(nrow, "CD_ACNTUNIT", this.dsSearch.getColumn(0, "CD_ACNTUNIT"));
        		dsUserParam.setColumn(nrow, "CD_LCODE", this.dsList.getColumn(this.dsList.rowposition, "CD_LCODE"));
        		dsUserParam.setColumn(nrow, "CD_RCODE", this.dsList.getColumn(this.dsList.rowposition, "CD_RCODE"));
        		dsUserParam.setColumn(nrow, "CD_ICODE", this.dsList.getColumn(this.dsList.rowposition, "CD_ICODE"));
        	}

        	return true;
        };



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


        // 자동산식
        this.dsList_onvaluechanged = function(obj,e)
        {
        	if(e.oldvalue != e.newvalue)
        	{
        		if(e.columnid == "TOTAL") {	// 총금액
        			if(this.dsList.getColumn(e.row, "TOTAL") == 0) return;

        			if(!this.gfnIsNull(this.dsList.getColumn(e.row, "TOTAL"))){
        				this.dsList.setColumn(e.row, "AM_SUPPLY", nexacro.floor(nexacro.toNumber(this.dsList.getColumn(e.row, "TOTAL"),0) * 10 / 11));
        				this.dsList.setColumn(e.row, "AM_VAT", nexacro.toNumber(this.dsList.getColumn(e.row, "TOTAL"),0) - nexacro.toNumber(this.dsList.getColumn(e.row, "AM_SUPPLY"),0));
        			}else{
        				this.dsList.setColumn(e.row, "TOTAL", 0);
        			}
        		}else if(e.columnid == "CD_LCODE") {
        			if(this.gfnIsNull(this.dsList.getColumn(e.row, "CD_LCODE"))){
        				this.dsList.setColumn(e.row, "CD_RCODE", "");
        				this.dsList.setColumn(e.row, "DS_RCODE", "");
        				this.dsList.setColumn(e.row, "CD_ICODE", "");
        				this.dsList.setColumn(e.row, "DS_ITEM", "");
        				this.dsList.setColumn(e.row, "CD_CCODE", "");
        				this.dsList.setColumn(e.row, "DS_COLOR", "");
        			}
        		}else if(e.columnid == "CD_RCODE") {
        			if(this.gfnIsNull(this.dsList.getColumn(e.row, "CD_RCODE"))){
        				this.dsList.setColumn(e.row, "CD_ICODE", "");
        				this.dsList.setColumn(e.row, "DS_ITEM", "");
        				this.dsList.setColumn(e.row, "CD_CCODE", "");
        				this.dsList.setColumn(e.row, "DS_COLOR", "");
        			}
        		}else if(e.columnid == "CD_ICODE") {
        			if(this.gfnIsNull(this.dsList.getColumn(e.row, "CD_ICODE"))){
        				this.dsList.setColumn(e.row, "CD_CCODE", "");
        				this.dsList.setColumn(e.row, "DS_COLOR", "");
        			}
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
        this.loadIncludeScript("DLF_ITEM.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
