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
            obj._setContents("<ColumnInfo><Column id=\"TARGET\" type=\"STRING\" size=\"256\"/><Column id=\"SP\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"TARGET\">select</Col><Col id=\"SP\">DRCPR_APPROPRIATE_SELECT_SAMHO</Col></Row><Row><Col id=\"TARGET\">insert</Col><Col id=\"SP\">DRCPR_APPROPRIATE_INSERT</Col></Row><Row><Col id=\"TARGET\">update</Col><Col id=\"SP\">DRCPR_APPROPRIATE_UPDATE</Col></Row><Row><Col id=\"TARGET\">delete</Col><Col id=\"SP\">DRCPR_APPROPRIATE_DELETE</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsSearch", this);
            obj._setContents("<ColumnInfo><Column id=\"CD_ACNTUNIT\" type=\"STRING\" size=\"256\"/><Column id=\"DS_ACNTUNIT\" type=\"STRING\" size=\"256\"/><Column id=\"DT_START\" type=\"STRING\" size=\"256\"/><Column id=\"DT_END\" type=\"STRING\" size=\"256\"/><Column id=\"DS_PAYBACKSTATE\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"CD_ACNTUNIT\"/><Col id=\"DS_ACNTUNIT\"/><Col id=\"DT_START\"/></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsDS_PAYBACKSTATE", this);
            obj._setContents("<ColumnInfo><Column id=\"CD_CODE\" type=\"STRING\" size=\"256\"/><Column id=\"DS_CODE\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"CD_CODE\">반제</Col><Col id=\"DS_CODE\">반제</Col></Row><Row><Col id=\"CD_CODE\">미반제</Col><Col id=\"DS_CODE\">미반제</Col></Row><Row><Col id=\"CD_CODE\"/><Col id=\"DS_CODE\">전체보기</Col></Row></Rows>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Div("divSearch","0.0","10.0",null,"46.0","0",null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_cssclass("div_SEARCH_Bg");
            obj.set_formscrolltype("none");
            obj.set_text("");
            this.addChild(obj.name, obj);

            obj = new Static("staCD_ACNTUNIT","0.0","10.0","105.0","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("2");
            obj.set_text("사업지코드");
            obj.set_cssclass("sta_WF_SchLabelE");
            this.divSearch.addChild(obj.name, obj);

            obj = new Div("ccfCD_ACNTUNIT","staCD_ACNTUNIT:0.0","10.0","350","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.getSetter("CodeFindName").set("DRX_CFACNTUNIT");
            obj.getSetter("CDTextWidth").set("70");
            obj.set_taborder("3");
            obj.set_url("cmm::cmmCodeFind.xfdl");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("staCD_PERIOD","ccfCD_ACNTUNIT:0.0","10.0","105.0","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("3");
            obj.set_text("계상일자");
            obj.set_cssclass("sta_WF_SchLabelE");
            this.divSearch.addChild(obj.name, obj);

            obj = new Calendar("ctclDT_START","staCD_PERIOD:0.0","10.0","105","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("2");
            obj.set_dateformat("yyyy-MM-dd");
            obj.set_editformat("yyyyMMdd");
            obj.set_autoselect("true");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("staDT_PERIOD_TIL","ctclDT_START:0.0","10.0","30.0","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("0");
            obj.set_text("~");
            obj.set_cssclass("sta_WF_AC");
            this.divSearch.addChild(obj.name, obj);

            obj = new Calendar("ctclDT_END","staDT_PERIOD_TIL:0.0","10.0","105","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("1");
            obj.set_dateformat("yyyy-MM-dd");
            obj.set_editformat("yyyyMMdd");
            obj.set_autoselect("true");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("staDS_PAYBACKSTATE","ctclDT_END:0.0","10.0","105.0","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("3");
            obj.set_text("반제유무");
            obj.set_cssclass("sta_WF_SchLabelE");
            this.divSearch.addChild(obj.name, obj);

            obj = new Combo("ccboDS_PAYBACKSTATE","staDS_PAYBACKSTATE:0.0","10.0","100","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("4");
            obj.set_innerdataset("dsDS_PAYBACKSTATE");
            obj.set_datacolumn("DS_CODE");
            obj.set_codecolumn("CD_CODE");
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

            obj = new BindItem("item2","divSearch.form.ctclDT_START","value","dsSearch","DT_START");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item3","divSearch.form.ctclDT_END","value","dsSearch","DT_END");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item4","divSearch.form.ccboDS_PAYBACKSTATE","value","dsSearch","DS_PAYBACKSTATE");
            this.addChild(obj.name, obj);
            obj.bind();
            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {
            this._addPreloadList("fdl","cmm::cmmCodeFind.xfdl");
        };
        
        // User Script
        this.registerScript("DRC_APPROPRIATE.xfdl", function() {
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

        	if (!this.gfnIsNull(this.getOwnerFrame().CD_ACNTUNIT)) {
        		this.dsSearch.setColumn(0, "CD_ACNTUNIT", this.getOwnerFrame().CD_ACNTUNIT);
        		this.dsSearch.setColumn(0, "DS_ACNTUNIT", this.getOwnerFrame().DS_ACNTUNIT);
        		this.dsSearch.setColumn(0, "DT_START", this.getOwnerFrame().DT_FROM);
        		this.dsSearch.setColumn(0, "DT_END", this.getOwnerFrame().DT_TO);
        	}
        	else {
        		var today = this.gfnGetDate();
        		this.dsSearch.setColumn(0, "DT_START", today.substr(0,6)+"01");
        		this.dsSearch.setColumn(0, "DT_END", today);
        	}
        	this.dsSearch.setColumn(0, "DS_PAYBACKSTATE", "반제");

        	if (!this.gfnIsNull(this.dsSearch.getColumn(0, "CD_ACNTUNIT")))
        		this.FormBtns.Select.click();
        };

        this.fnSetButton = function() {
        }

        this.fnSetExtendButton = function() {
        	this.btnSlipSearch = this.gfnFormButtonAdd("btnSlipSearch", "fnSlipSearch");
        	this.btnSlipIssue = this.gfnFormButtonAdd("btnSlipIssue", "fnSlipIssue");
        	this.btnSlipCancel = this.gfnFormButtonAdd("btnSlipCancel", "fnSlipCancel");
        };

        this.fnSetVariable = function() {
        	this.ccfCD_ACNTUNIT = this.divSearch.form.ccfCD_ACNTUNIT;
        	this.ctclDT_START = this.divSearch.form.ctclDT_START;
        	this.ctclDT_END = this.divSearch.form.ctclDT_END;
        	this.ccboYN_RECEIPT = this.divSearch.form.ccboYN_RECEIPT;

        	this.dxGrid = this.divData.form.objGrid;
        };

        this.fnSetEvent = function() {
        	this.gfnGridInit(this.dxGrid, this.dsList, "DR", "DRC_APPROPRIATE");

         	this.gfnGridColumnColor(this.dxGrid, "", "BACK_ReadOnly", "TY_PROCESS=='3'", true);

        	this.dxGrid.EnterCell = "fnGrid_EnterCell";
        	this.dxGrid.ExpandUp = "fnGrid_ExpandUp";
        	this.dxGrid.BeforeUserDataSetParam = "fnGrid_BeforeUserDataSetParam";

        	this.ccfCD_ACNTUNIT.BeforeUserDataSetParam = "fnBeforeUserDataSetParam";

        }

        this.fnSetParameter = function() {
        	this.dsSelect = new Dataset();
        	this.dsSelect.addColumn("CD_ACNTUNIT", "string");
        	this.dsSelect.addColumn("TY_GUBUN", "string");
        	this.dsSelect.addColumn("NO_CHASU", "string");
        	this.dsSelect.addColumn("DT_START", "string");
        	this.dsSelect.addColumn("DT_END", "string");
        	this.dsSelect.addColumn("TY_ESIGN", "string");
        	this.dsSelect.addColumn("DS_PAYBACKSTATE", "string");

        	this.dsInsert = new Dataset();
        	this.dsInsert.addColumn("CD_ACNTUNIT", "string");
        	this.dsInsert.addColumn("TY_GUBUN", "string");
        	this.dsInsert.addColumn("NO_CHASU", "string");
        	this.dsInsert.addColumn("NO_DONG", "string");
        	this.dsInsert.addColumn("NO_FLOOR", "string");
        	this.dsInsert.addColumn("NO_HO", "string");
        	this.dsInsert.addColumn("NO_UNIONMEMBER", "string");
        	this.dsInsert.addColumn("TY_APPRO", "string");
        	this.dsInsert.addColumn("DT_APPRO", "string");
        	this.dsInsert.addColumn("AM_APPRO", "bigdecimal");
        	this.dsInsert.addColumn("TY_PROCESS", "string");
        	this.dsInsert.addColumn("DT_PAYBACK", "string");
        	this.dsInsert.addColumn("AM_PAYBACK", "bigdecimal");
        	this.dsInsert.addColumn("DS_REFUNDBANK", "string");
        	this.dsInsert.addColumn("NO_REFUNDBANK", "string");
        	this.dsInsert.addColumn("DS_OWNER", "string");
        	this.dsInsert.addColumn("DT_REFUND", "string");
        	this.dsInsert.addColumn("TY_ACCGUBUN", "string");
        	this.dsInsert.addColumn("CD_BANK", "string");
        	this.dsInsert.addColumn("ID_INSERT", "string");
        	this.dsInsert.addColumn("DS_BIGO", "string");

        	this.dsUpdate = new Dataset();
        	this.dsUpdate.addColumn("CD_ACNTUNIT", "string");
        	this.dsUpdate.addColumn("TY_GUBUN", "string");
        	this.dsUpdate.addColumn("NO_CHASU", "string");
        	this.dsUpdate.addColumn("NO_DONG", "string");
        	this.dsUpdate.addColumn("NO_FLOOR", "string");
        	this.dsUpdate.addColumn("NO_HO", "string");
        	this.dsUpdate.addColumn("NO_UNIONMEMBER", "string");
        	this.dsUpdate.addColumn("NO_APPRO", "string");
        	this.dsUpdate.addColumn("DT_APPRO", "string");
        	this.dsUpdate.addColumn("AM_APPRO", "bigdecimal");
        	this.dsUpdate.addColumn("TY_PROCESS", "string");
        	this.dsUpdate.addColumn("DT_PAYBACK", "string");
        	this.dsUpdate.addColumn("AM_PAYBACK", "bigdecimal");
        	this.dsUpdate.addColumn("DS_REFUNDBANK", "string");
        	this.dsUpdate.addColumn("NO_REFUNDBANK", "string");
        	this.dsUpdate.addColumn("DS_OWNER", "string");
        	this.dsUpdate.addColumn("DT_REFUND", "string");
        	this.dsUpdate.addColumn("TY_ACCGUBUN", "string");
        	this.dsUpdate.addColumn("CD_BANK", "string");
        	this.dsUpdate.addColumn("ID_UPDATE", "string");
        	this.dsUpdate.addColumn("DS_BIGO", "string");

        	this.dsDelete = new Dataset();
        	this.dsDelete.addColumn("CD_ACNTUNIT", "string");
        	this.dsDelete.addColumn("TY_GUBUN", "string");
        	this.dsDelete.addColumn("NO_CHASU", "string");
        	this.dsDelete.addColumn("NO_DONG", "string");
        	this.dsDelete.addColumn("NO_FLOOR", "string");
        	this.dsDelete.addColumn("NO_HO", "string");
        	this.dsDelete.addColumn("NO_UNIONMEMBER", "string");
        	this.dsDelete.addColumn("NO_APPRO", "string");
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
        	this.dsSelect.setColumn(0, "DT_START", this.dsSearch.getColumn(0, "DT_START"));
        	this.dsSelect.setColumn(0, "DT_END", this.dsSearch.getColumn(0, "DT_END"));
        	this.dsSelect.setColumn(0, "TY_ESIGN", "");
        	this.dsSelect.setColumn(0, "DS_PAYBACKSTATE", this.dsSearch.getColumn(0, "DS_PAYBACKSTATE"));

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
        	if (this.gfnNvl(this.dsList.getColumn(this.dsList.rowposition, "CD_SLIP")).length != 0) {
        		this.gfnAlert("이미 전표발행된 건은 삭제할 수 없습니다.");
        		return;
        	}

        	this.gfnGridDel(this.dxGrid);
        }

        this.fnSave = function() {
        	if (!this.gfnGridValidate(this.dxGrid)) return;
        	if (!this.fnSaveValidation()) return;

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
        				this.dsInsert.setColumn(nrow, "NO_DONG", this.dsList.getColumn(i, "NO_DONG"));
        				this.dsInsert.setColumn(nrow, "NO_FLOOR", this.dsList.getColumn(i, "NO_FLOOR"));
        				this.dsInsert.setColumn(nrow, "NO_HO", this.dsList.getColumn(i, "NO_HO"));
        				this.dsInsert.setColumn(nrow, "NO_UNIONMEMBER", this.dsList.getColumn(i, "NO_UNIONMEMBER"));
        				var tyAppro = "";
        				switch (this.dsList.getColumn(i, "TY_APPRO")) {
        					case "입금액<연체료": tyAppro = "1"; break;
        					case "입금액>분양총액": tyAppro = "2"; break;
        					case "입금액>상환금액": tyAppro = "3"; break;
        					case "착오입금": tyAppro = "4"; break;
        					case "초과입금": tyAppro = "5"; break;
        					default: tyAppro = ""; break;
        				}
        				this.dsInsert.setColumn(nrow, "TY_APPRO", tyAppro);
        				this.dsInsert.setColumn(nrow, "DT_APPRO", this.dsList.getColumn(i, "DT_APPRO"));
        				this.dsInsert.setColumn(nrow, "AM_APPRO", this.dsList.getColumn(i, "AM_APPRO"));
        				this.dsInsert.setColumn(nrow, "TY_PROCESS", this.dsList.getColumn(i, "TY_PROCESS"));
        				this.dsInsert.setColumn(nrow, "DT_PAYBACK", this.dsList.getColumn(i, "DT_PAYBACK"));
        				this.dsInsert.setColumn(nrow, "AM_PAYBACK", this.dsList.getColumn(i, "AM_PAYBACK"));
        				this.dsInsert.setColumn(nrow, "DS_REFUNDBANK", this.dsList.getColumn(i, "DS_REFUNDBANK"));
        				this.dsInsert.setColumn(nrow, "NO_REFUNDBANK", this.dsList.getColumn(i, "NO_REFUNDBANK"));
        				this.dsInsert.setColumn(nrow, "DS_OWNER", this.dsList.getColumn(i, "DS_OWNER"));
        				this.dsInsert.setColumn(nrow, "DT_REFUND", this.dsList.getColumn(i, "DT_REFUND"));
        				this.dsInsert.setColumn(nrow, "TY_ACCGUBUN", this.dsList.getColumn(i, "TY_ACCGUBUN"));
        				this.dsInsert.setColumn(nrow, "CD_BANK", this.dsList.getColumn(i, "CD_BANK"));
        				this.dsInsert.setColumn(nrow, "ID_INSERT", this.AuthClient.ID_USER);
        				this.dsInsert.setColumn(nrow, "DS_BIGO", this.dsList.getColumn(i, "DS_BIGO"));
        				break;
        			case "U":
        				var nrow = this.dsUpdate.addRow();
        				this.dsUpdate.setColumn(nrow, "CD_ACNTUNIT", this.dsSearch.getColumn(0, "CD_ACNTUNIT").substr(0, 6));
        				this.dsUpdate.setColumn(nrow, "TY_GUBUN", this.dsSearch.getColumn(0, "CD_ACNTUNIT").substr(6, 1));
        				this.dsUpdate.setColumn(nrow, "NO_CHASU", this.dsSearch.getColumn(0, "CD_ACNTUNIT").substr(7, 2));
        				this.dsUpdate.setColumn(nrow, "NO_DONG", this.dsList.getColumn(i, "NO_DONG"));
        				this.dsUpdate.setColumn(nrow, "NO_FLOOR", this.dsList.getColumn(i, "NO_FLOOR"));
        				this.dsUpdate.setColumn(nrow, "NO_HO", this.dsList.getColumn(i, "NO_HO"));
        				this.dsUpdate.setColumn(nrow, "NO_UNIONMEMBER", this.dsList.getColumn(i, "NO_UNIONMEMBER"));
        				this.dsUpdate.setColumn(nrow, "NO_APPRO", this.dsList.getColumn(i, "NO_APPRO"));
        				this.dsUpdate.setColumn(nrow, "DT_APPRO", this.dsList.getColumn(i, "DT_APPRO"));
        				this.dsUpdate.setColumn(nrow, "AM_APPRO", this.dsList.getColumn(i, "AM_APPRO"));
        				this.dsUpdate.setColumn(nrow, "TY_PROCESS", this.dsList.getColumn(i, "TY_PROCESS"));
        				this.dsUpdate.setColumn(nrow, "DT_PAYBACK", this.dsList.getColumn(i, "DT_PAYBACK"));
        				this.dsUpdate.setColumn(nrow, "AM_PAYBACK", this.dsList.getColumn(i, "AM_PAYBACK"));
        				this.dsUpdate.setColumn(nrow, "DS_REFUNDBANK", this.dsList.getColumn(i, "DS_REFUNDBANK"));
        				this.dsUpdate.setColumn(nrow, "NO_REFUNDBANK", this.dsList.getColumn(i, "NO_REFUNDBANK"));
        				this.dsUpdate.setColumn(nrow, "DS_OWNER", this.dsList.getColumn(i, "DS_OWNER"));
        				this.dsUpdate.setColumn(nrow, "DT_REFUND", this.dsList.getColumn(i, "DT_REFUND"));
        				this.dsUpdate.setColumn(nrow, "TY_ACCGUBUN", this.dsList.getColumn(i, "TY_ACCGUBUN"));
        				this.dsUpdate.setColumn(nrow, "CD_BANK", this.dsList.getColumn(i, "CD_BANK"));
        				this.dsUpdate.setColumn(nrow, "ID_UPDATE", this.AuthClient.ID_USER);
        				this.dsUpdate.setColumn(nrow, "DS_BIGO", this.dsList.getColumn(i, "DS_BIGO"));

        				break;
        			case "D":
        				var nrow = this.dsDelete.addRow();
        				this.dsDelete.setColumn(nrow, "CD_ACNTUNIT", this.dsSearch.getColumn(0, "CD_ACNTUNIT").substr(0, 6));
        				this.dsDelete.setColumn(nrow, "TY_GUBUN", this.dsSearch.getColumn(0, "CD_ACNTUNIT").substr(6, 1));
        				this.dsDelete.setColumn(nrow, "NO_CHASU", this.dsSearch.getColumn(0, "CD_ACNTUNIT").substr(7, 2));
        				this.dsDelete.setColumn(nrow, "NO_DONG", this.dsList.getColumn(i, "NO_DONG"));
        				this.dsDelete.setColumn(nrow, "NO_FLOOR", this.dsList.getColumn(i, "NO_FLOOR"));
        				this.dsDelete.setColumn(nrow, "NO_HO", this.dsList.getColumn(i, "NO_HO"));
        				this.dsDelete.setColumn(nrow, "NO_UNIONMEMBER", this.dsList.getColumn(i, "NO_UNIONMEMBER"));
        				this.dsDelete.setColumn(nrow, "NO_APPRO", this.dsList.getColumn(i, "NO_APPRO"));

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
         * Validate
         ************************************************************************/
        this.fnSelectValidation = function() {
        	var validate = true;
        	if (this.gfnIsNull(this.dsSearch.getColumn(0, "CD_ACNTUNIT"))) {
        		this.fnVaidateCallback = function() {
        			this.ccfCD_ACNTUNIT.form.CDTextBox.setFocus();
        		}
        		this.gfnAlert("사업지코드를 입력하지 않았습니다.", "fnVaidateCallback");
        		return false;
        	}
        	if (this.gfnIsNull(this.dsSearch.getColumn(0, "DT_START"))) {
        		this.fnVaidateCallback = function() {
        			this.ctclDT_START.setFocus();
        		}
        		this.gfnAlert("시작일자는 꼭 입력하셔야 합니다!", "fnVaidateCallback");
        		return false;
        	}
        	if (this.gfnIsNull(this.dsSearch.getColumn(0, "DT_END"))) {
        		this.dsSearch.setColumn(0, "DT_END", this.gfnGetDate());
        	}
        	if (this.gfnGetDiffDate(this.dsSearch.getColumn(0, "DT_START"), this.dsSearch.getColumn(0, "DT_END")) < 0) {
        		this.gfnAlert("종료일자는 시작일자보다 크거나 같아야 합니다!");
        		return false;
        	}
        	return validate;
        }

        this.fnSaveValidation = function() {
        	var msg = "";
        	var validate = true;
        	for (var i = 0; i < this.dsList.rowcount; i++) {
        		var flag = this.gfnGetFlag(this.dsList, i);

        		if (this.gfnIsNull(flag) || flag == "D") continue;

        		if (this.gfnNvl(this.dsList.getColumn(i, "TY_PROCESS")) == "3") {
        			if (this.gfnIsNull(this.dsList.getColumn(i, "DT_REFUND"))) {
        				msg += "환불일자는 반드시 입력하셔야 합니다.\n";
        				validate = false;
        			}
        			if (this.gfnIsNull(this.dsList.getColumn(i, "DS_REFUNDBANK"))) {
        				msg += "환불은행은 반드시 입력하셔야 합니다.\n";
        				validate = false;
        			}
        			if (this.gfnIsNull(this.dsList.getColumn(i, "NO_REFUNDBANK"))) {
        				msg += "환불계좌는 반드시 입력하셔야 합니다.\n";
        				validate = false;
        			}
        			if (this.gfnIsNull(this.dsList.getColumn(i, "DS_OWNER"))) {
        				msg += "예금주는 반드시 입력하셔야 합니다.\n";
        				validate = false;
        			}
        		}
        		else {
        			if (!this.gfnIsNull(this.gfnTrim(this.dsList.getColumn(i, "DT_REFUND")))) {
        				msg += "환불처리가 아니므로 환불일자는 입력하지 않습니다.\n";
        				validate = false;
        			}
        			if (!this.gfnIsNull(this.dsList.getColumn(i, "DS_REFUNDBANK"))) {
        				msg += "환불처리가 아니므로 환불은행는 입력하지 않습니다.\n";
        				validate = false;
        			}
        			if (!this.gfnIsNull(this.dsList.getColumn(i, "NO_REFUNDBANK"))) {
        				msg += "환불처리가 아니므로 환불계좌는 입력하지 않습니다.\n";
        				validate = false;
        			}
        			if (!this.gfnIsNull(this.dsList.getColumn(i, "DS_OWNER"))) {
        				msg += "환불처리가 아니므로 예금주는 입력하지 않습니다.\n";
        				validate = false;
        			}
        		}

        		if (!validate) {
        			this.gfnAlert(msg);
        			return validate;
        		}
        	}

        	return validate;
        }

        /************************************************************************
         * 콜백 이벤트
         ************************************************************************/
        this.fnCallback = function(svcID, errorCode, errorMsg) {
        	if(svcID == "select") {
        		this.gfnGridAfterSelect(this.dxGrid);
        	}
        	else if(svcID == "save") {
        		if (errorCode == 0) {
        			this.FormBtns.Select.click();
        		}
        		else {
        			this.gfnAlert(errorMsg);
        		}
        	}
        }

        /************************************************************************
         * 코드파인드 이벤트
         ************************************************************************/
        this.fnBeforeUserDataSetParam = function(id, dsUserParam, nrow) {
        	if (id == "ccfCD_ACNTUNIT") {
        		dsUserParam.setColumn(nrow, "CD_DEPT", this.AuthClient.CD_DEPT);
        		dsUserParam.setColumn(nrow, "ID_USER", this.AuthClient.ID_USER);
        		dsUserParam.setColumn(nrow, "ID_GROUP", this.AuthClient.CD_CORP);
        		dsUserParam.setColumn(nrow, "GR_SEARCH", this.FormInfo.GR_SEARCH);
        	}

        	return true;
        };


        /************************************************************************
         * 그리드 이벤트
         ************************************************************************/
        this.fnGrid_EnterCell = function(obj, row, cell) {
        	var colnm = this.gfnGridGetBindColumnNameByIndex(this.dxGrid, cell);
        	var bTY_APPRO = this.dsList.getColumn(row, "TY_APPRO") == "착오입금" || this.dsList.getColumn(row, "TY_APPRO") == "초과입금";
        	var bTY_PROCESS = this.dsList.getColumn(row, "TY_PROCESS") == "3";

        	if (colnm == "DT_APPRO" || colnm == "AM_APPRO") {
        		if (bTY_APPRO && bTY_PROCESS) {
        			return true;
        		}
        	}
        	else if (colnm == "DS_OWNER") {
        		if (!bTY_PROCESS)
        			return false;
        	}
        }

        this.fnGrid_ExpandUp = function(obj,e) {
        	var colnm = this.gfnGridGetBindColumnNameByIndex(obj, e.cell);
        	if (colnm == "DS_CONTRACTOR") {
        		this.fnGridDonghoCodeFind();
        	}
        }

        this.fnGrid_BeforeUserDataSetParam = function(id, dsUserParam, nrow){
        	switch(id) {
        		case "DCZ_CFACCOUNT_BYCASH":
        			dsUserParam.setColumn(nrow, "TY_CASH", "20");
        			dsUserParam.setColumn(nrow, "CD_CORP", this.AuthClient.CD_CORP);
        			break;
        		default:
        			break;
        	}
        	return true;
        };

        /************************************************************************
         * 기타 이벤트
         ************************************************************************/
        this.dsSearch_onvaluechanged = function(obj,e) {
        	if(e.oldvalue != e.newvalue) {
        		this.gfnSetFormStatus(this);	// 폼상태 초기화
        		this.gfnGridClear(this.dxGrid);
        	}
        };

        this.fnGridDonghoCodeFind = function() {
        	var param = {};
        	param.CD_ACNTUNIT = this.dsSearch.getColumn(0, "CD_ACNTUNIT");
        	param.FLAG = "1";

        	this.gfnFormOpen("DRI", "DRI_DONGHOCONTRACT", "fnPopupCallback", param);
        }

        this.fnPopupCallback = function(svcID, val) {
        	if (!val) return;

        	var json = JSON.parse(val);
        	this.dsList.setColumn(this.dsList.rowposition, "NO_DONG", json.DONG);
        	this.dsList.setColumn(this.dsList.rowposition, "NO_FLOOR", json.FLOOR);
        	this.dsList.setColumn(this.dsList.rowposition, "NO_HO", json.HO);
        	this.dsList.setColumn(this.dsList.rowposition, "DS_CONTRACTOR", json.NAME);
        }

        this.fnSlipSearch = function(obj,e) {

        }

        this.fnSlipIssue = function(obj,e) {

        }

        this.fnSlipCancel = function(obj,e) {

        }

        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.form_onload,this);
            this.dsSearch.addEventHandler("onvaluechanged",this.dsSearch_onvaluechanged,this);
        };
        this.loadIncludeScript("DRC_APPROPRIATE.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
