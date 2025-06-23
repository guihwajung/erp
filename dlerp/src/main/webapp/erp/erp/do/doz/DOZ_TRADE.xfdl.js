(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("DCA_REGISTLIST");
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
            obj._setContents("<ColumnInfo><Column id=\"TARGET\" type=\"STRING\" size=\"256\"/><Column id=\"SP\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"TARGET\">combo</Col><Col id=\"SP\">DOZPR_TRADE_COMBO</Col></Row><Row><Col id=\"TARGET\">select</Col><Col id=\"SP\">DOZPR_TRADE_SELECT</Col></Row><Row><Col id=\"TARGET\">save</Col><Col id=\"SP\">DOZPR_TRADE_SAVE</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsCombo1", this);
            obj._setContents("");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsCombo2", this);
            obj._setContents("");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsSearch", this);
            obj._setContents("<ColumnInfo><Column id=\"DS_VENDOR\" type=\"STRING\" size=\"256\"/><Column id=\"CD_COMBO1\" type=\"STRING\" size=\"256\"/><Column id=\"CD_COMBO2\" type=\"STRING\" size=\"256\"/><Column id=\"YN_DH\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row/></Rows>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Div("divSearch","0.0","10.0",null,"78.0","0",null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_cssclass("div_SEARCH_Bg");
            obj.set_formscrolltype("none");
            this.addChild(obj.name, obj);

            obj = new Static("staCD_SITE","0.0","10.0","144.0","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("0");
            obj.set_text("업체명");
            obj.set_cssclass("sta_WF_SchLabel");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("staCONT2","staCD_SITE:0.0","10.0","144.0","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("2");
            obj.set_cssclass("sta_WF_SchLabel");
            this.divSearch.addChild(obj.name, obj);

            obj = new Edit("ctxtDS_VENDOR","staCONT2:0.0","10.0","250","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("1");
            obj.set_value("");
            this.divSearch.addChild(obj.name, obj);

            obj = new CheckBox("chk_YN_DH","0.0","staCD_SITE:10.0","115","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("3");
            obj.set_text("회계연결 거래처");
            obj.set_truevalue("Y");
            obj.set_falsevalue("N");
            obj.set_value("N");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("staCD_SITE00","0.0","10.0","144.0","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("4");
            obj.set_text("발주처");
            obj.set_cssclass("sta_WF_SchLabel");
            this.divSearch.addChild(obj.name, obj);

            obj = new Combo("ccboCD_COMBO1","staCD_SITE00:0.0","10.0","116","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("5");
            obj.set_datacolumn("DS_CODE");
            obj.set_codecolumn("CD_CODE");
            obj.set_innerdataset("dsCombo1");
            obj.set_text("");
            obj.set_value("N");
            obj.set_index("-1");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("staCD_SITE00_00","ccboCD_COMBO1:0.0","10.0","144.0","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("6");
            obj.set_text("정부기관");
            obj.set_cssclass("sta_WF_SchLabel");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("staCD_SITE00_01","staCD_SITE00_00:0.0","10.0","144.0","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("7");
            obj.set_text("업체구분");
            obj.set_cssclass("sta_WF_SchLabel");
            this.divSearch.addChild(obj.name, obj);

            obj = new Combo("ccboCD_COMBO2","staCD_SITE00_01:0.0","10.0","106","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("8");
            obj.set_datacolumn("DS_CODE");
            obj.set_codecolumn("CD_CODE");
            obj.set_innerdataset("dsCombo2");
            obj.set_text("");
            obj.set_value("N");
            obj.set_index("-1");
            this.divSearch.addChild(obj.name, obj);

            obj = new Div("ccfTY_S_COMP","ccboCD_COMBO2:0.0","10.0","314","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.getSetter("CodeFindName").set("DOXPR_TY_S_COMP_CODEFIND");
            obj.getSetter("CDTextWidth").set("80");
            obj.set_taborder("9");
            obj.set_url("cmm::cmmCodeFind.xfdl");
            this.divSearch.addChild(obj.name, obj);

            obj = new Div("divData","0","55",null,null,"0","0",null,null,null,null,this);
            obj.set_taborder("1");
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
            obj = new BindItem("item0","divSearch.form.ctxtDS_VENDOR","value","dsSearch","DS_VENDOR");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item1","divSearch.form.ccboCD_COMBO2","value","dsSearch","CD_COMBO2");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item2","divSearch.form.ccboCD_COMBO1","value","dsSearch","CD_COMBO1");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item3","divSearch.form.chk_YN_DH","value","dsSearch","YN_DH");
            this.addChild(obj.name, obj);
            obj.bind();
            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {
            this._addPreloadList("fdl","cmm::cmmCodeFind.xfdl");
        };
        
        // User Script
        this.registerScript("DOZ_TRADE.xfdl", function() {
        this.objApp = this.gfnGetApplication();

        this.DCA_REGISTLIST_onload = function(obj,e)
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

        	this.fnSetCombo();
        };

        /************************************************************************
         * 버튼 설정 : 화면(Tab) 전환시 마다 호출
         * 서브버튼 사용 및 공통버튼 강제 제어시 여기서 처리
         ************************************************************************/
        this.fnSetButton = function() {
        	// Select, Add, Del, Save, Excel, Print.
        	// SubSelect, SubAdd, SubDel, SuubSave, SubExcel
        	//this.FormBtns.Add.set_enable(false);
        	//this.FormBtns.Save.set_enable(false);
        	//this.FormBtns.Del.set_enable(false);
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

           this.ccfTY_S_COMP = this.divSearch.form.ccfTY_S_COMP;

        };

        /************************************************************************
         * 이벤트 설정
         ************************************************************************/
        this.fnSetEvent = function() {
        	// 그리드 초기화
        	this.ccfTY_S_COMP.BeforeUserDataSetParam = "fnBeforeUserDataSetParam";
        	this.gfnGridInit(this.dxGrid, this.dsList, "DO", "DOZ_TRADE");
        	this.dxGrid.BeforeUserDataSetParam = "fnGrid_BeforeUserDataSetParam";
        	// 그리드 코드파인드 값 변경
        	this.dxGrid.AfterCDTextChanged = "fnGrid_AfterCDTextChanged";
        	this.dxGrid.EnterCell = "fnGrid_EnterCell";

        	this.gfnGridColumnColor(this.dxGrid, "CD_TRADE","BACK_ReadOnly", "nx_flag==null");
        };

        /************************************************************************
         * 파라미터 설정
         ************************************************************************/
        this.fnSetParameter = function() {
        	this.dsCombo = new Dataset();
        	this.dsCombo.addColumn("CD_SYSTEM", "STRING");
        	this.dsCombo.addColumn("CD_TYPE", "STRING");
        	this.dsCombo.addColumn("CD_VALUE", "STRING");

        	this.dsSelect = new Dataset();

        	this.dsSelect.addColumn("DS_VENDOR", "string");		// 업체명
        	this.dsSelect.addColumn("TY_L_COMP", "string");
        	this.dsSelect.addColumn("TY_S_COMP", "string");
        	this.dsSelect.addColumn("TY_TRADE", "string");
        	this.dsSelect.addColumn("YN_DH", "string");			// 회계연결 거래처
        };

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

        	this.dsSelect.setColumn(0, "DS_VENDOR", this.dsSearch.getColumn(0, "DS_VENDOR"));
        	this.dsSelect.setColumn(0, "TY_TRADE", this.gfnIsNull(this.dsSearch.getColumn(0, "CD_COMBO2")) ? "" : this.dsSearch.getColumn(0, "CD_COMBO2"));
        	this.dsSelect.setColumn(0, "TY_L_COMP", this.gfnIsNull(this.dsSearch.getColumn(0, "CD_COMBO1")) ? "" : this.dsSearch.getColumn(0, "CD_COMBO1"));
        	this.dsSelect.setColumn(0, "TY_S_COMP", this.ccfTY_S_COMP.form.CDTextBox.value);
        	this.dsSelect.setColumn(0, "YN_DH", this.gfnIsNull(this.dsSearch.getColumn(0, "YN_DH")) || this.dsSearch.getColumn(0, "YN_DH") == "N" ? "N" : "Y");

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
        	this.gfnGridAdd(this.dxGrid);
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

        	this.dsSave = new Dataset();
        	this.dsSave.addColumn("TY_WRK", "string");
        	this.dsSave.addColumn("CD_TRADE", "string");
        	this.dsSave.addColumn("NM_TRADE", "string");
        	this.dsSave.addColumn("NO_LPSS", "string");
        	this.dsSave.addColumn("NM_CEO", "string");
        	this.dsSave.addColumn("NO_SJC", "string");
        	this.dsSave.addColumn("TY_L_COMP", "string");
        	this.dsSave.addColumn("TY_S_COMP", "string");
        	this.dsSave.addColumn("TY_TRADE", "string");
        	this.dsSave.addColumn("NO_TEL", "string");
        	this.dsSave.addColumn("NO_FAX", "string");
        	this.dsSave.addColumn("CD_ZIP", "string");
        	this.dsSave.addColumn("DS_ADDR1", "string");
        	this.dsSave.addColumn("DS_ADDR2", "string");
        	this.dsSave.addColumn("CD_VENDOR", "string");
        	this.dsSave.addColumn("YN_USE", "string");
        	this.dsSave.addColumn("ID_ADD", "string");


        	this.dxGrid.updateToDataset();
        	this.dsSave.clearData();

        	for (var i = 0; i < this.dsList.rowcount; i++) {
        		var flag = this.gfnGetFlag(this.dsList, i);
        		switch(flag) {
        			case "I":
        			case "U":
        			case "D":
        				var nrow = this.dsSave.addRow();
        				this.dsSave.setColumn(nrow, "TY_WRK", flag);
        				this.dsSave.setColumn(nrow, "CD_TRADE", this.dsList.getColumn(i, "CD_TRADE"));
        				this.dsSave.setColumn(nrow, "NM_TRADE", this.dsList.getColumn(i, "NM_TRADE"));
        				this.dsSave.setColumn(nrow, "NO_LPSS", this.dsList.getColumn(i, "NO_LPSS"));
        				this.dsSave.setColumn(nrow, "NM_CEO", this.dsList.getColumn(i, "NM_CEO"));
        				this.dsSave.setColumn(nrow, "NO_SJC", this.dsList.getColumn(i, "NO_SJC"));
        				this.dsSave.setColumn(nrow, "TY_L_COMP", this.dsList.getColumn(i, "TY_L_COMP"));
        				this.dsSave.setColumn(nrow, "TY_S_COMP", this.dsList.getColumn(i, "TY_S_COMP"));
        				this.dsSave.setColumn(nrow, "TY_TRADE", this.dsList.getColumn(i, "TY_TRADE"));
        				this.dsSave.setColumn(nrow, "NO_TEL", this.dsList.getColumn(i, "NO_TEL"));
        				this.dsSave.setColumn(nrow, "NO_FAX", this.dsList.getColumn(i, "NO_FAX"));
        				this.dsSave.setColumn(nrow, "CD_ZIP", this.dsList.getColumn(i, "CD_ZIP"));
        				this.dsSave.setColumn(nrow, "DS_ADDR1", this.dsList.getColumn(i, "DS_ADDR1"));
        				this.dsSave.setColumn(nrow, "DS_ADDR2", this.dsList.getColumn(i, "DS_ADDR2"));
        				this.dsSave.setColumn(nrow, "CD_VENDOR", this.dsList.getColumn(i, "CD_VENDOR"));
        				this.dsSave.setColumn(nrow, "YN_USE", this.dsList.getColumn(i, "YN_USE"));
        				this.dsSave.setColumn(nrow, "ID_ADD", this.objApp.gdsUserInfo.getColumn(0, "ID_USER"));
        				break;
        		}
        	}

        	if (this.dsSave.rowcount == 0) return;

        	var strSvcId    = "save";
        	var strSvcType  = "save";
        	var inProc		= "_dsProc";
        	var inData      = "save=dsSave";
        	var outData     = "";
        	var strArg      = "";
        	var callBackFnc = "fnCallback";

        	this.gfnTransaction( strSvcId , 	// transaction을 구분하기 위한 svc id값
        						strSvcType , 	// transaction을 요청할 구분
        						inProc,			// Procedure 정보 Dataset 이름
        						inData , 		// 입력값으로 보낼 dataset id , a=b형태로 실제이름과 입력이름을 매칭
        						outData , 		// 처리결과값으로 받을 dataset id, a=b형태로 실제이름과 입력이름을 매칭
        						strArg, 			// 입력갑스로 보낼 arguments, strFormData="20120607"
        						callBackFnc,false); // 통신방법 정의 [생략가능]
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
        this.fnSelectValidate = function() {
           var validate = true;

           return validate;
        };

        /************************************************************************
         * 콜백 이벤트
         ***********************************************************************
         /
        /*
         *	콜백 처리
         */
        this.fnCallback = function(svcID, errorCode, errorMsg)
        {
        	if (errorCode == 0) {
        		if(svcID == "combo"){
        			this.dsCombo1.insertRow(0);

        			this.dsCombo1.setColumn(0, "CD_CODE", "");
        			this.dsCombo1.setColumn(0, "DS_CODE", "전체");
        			this.divSearch.form.ccboCD_COMBO1.set_index(0);

        			this.dsCombo2.insertRow(0);
        			this.dsCombo2.setColumn(0, "CD_CODE", "");
        			this.dsCombo2.setColumn(0, "DS_CODE", "전체");
        			this.divSearch.form.ccboCD_COMBO2.set_index(0);
        		} else if (svcID == "select") {
        			this.gfnGridAfterSelect(this.dxGrid);
        		} else if(svcID == "save") {
        			if (errorCode == 0) {
        				this.FormBtns.Select.click();
        			} else {
        				this.gfnAlert(errorMsg);
        			}
        		}
        	} else {
        		this.gfnAlert(errorMsg);
        	}
        }

        /************************************************************************
         * 코드파인드 이벤트
         ************************************************************************/
        this.fnBeforeUserDataSetParam = function(id, dsUserParam, nrow)
         {
        	if(id == "ccfTY_S_COMP")
        	{
        		dsUserParam.setColumn(nrow, "CD_UPPER", this.dsSearch.getColumn(0,"CD_COMBO1"));
        		this.gfnSetFormStatus(this);	// 폼상태 초기화
        		this.gfnGridClear(this.dxGrid);
        	}
        	return true;
         }

        /************************************************************************
         * 그리드 이벤트
         ************************************************************************/

        /************************************************************************
         * 기타 이벤트
         ************************************************************************/

        this.fnGrid_BeforeUserDataSetParam = function(id, dsUserParam, nrow) {
        	// 그리드에서 코드파인드 id는 그리드셋팅의 코드파인드 식별ID
         	if (id == "DOX_CFVENDOR_DH") {
         		dsUserParam.setColumn(nrow, "CD_CORP", "");
         		dsUserParam.setColumn(nrow, "CD_SITE", "");
         		dsUserParam.setColumn(nrow, "TY_VENDOR", "");
         	}
        	if (id == "DOXPR_TY_S_COMP_CODEFIND") {
         		dsUserParam.setColumn(nrow, "CD_UPPER", this.gfnIsNull(this.dsList.getColumn(this.dsList.rowposition,"TY_L_COMP")) ? "" : this.dsList.getColumn(this.dsList.rowposition,"TY_L_COMP"));
         	}
        	return true;
        };


        this.fnGrid_AfterCDTextChanged = function(id, codeFindData) {

        	return true;
        };

        this.dsSearch_onvaluechanged = function(obj,e)
        {
        	if(e.columnid == "DS_VENDOR" || e.columnid == "CD_COMBO1" || e.columnid == "CD_COMBO2" || e.columnid == "YN_DH"){
        		if(e.oldvalue != e.newvalue) {
        			this.gfnSetFormStatus(this);	// 폼상태 초기화
        			this.gfnGridClear(this.dxGrid);
        		}
        	}
        };

        this.fnSetCombo = function() {
        	this.dsCombo.clearData();
        	this.dsCombo.addRow();
        	this.dsCombo.setColumn(0, "CD_SYSTEM", "DO");
        	this.dsCombo.setColumn(0, "CD_TYPE", "47");
        	this.dsCombo.setColumn(0, "CD_VALUE", this.gfnIsNull(this.dsSearch.getColumn(0, "CD_COMBO1")) ? "" : this.dsSearch.getColumn(0, "CD_COMBO1"));

        	this.dsCombo.addRow();
        	this.dsCombo.setColumn(1, "CD_SYSTEM", "DO");
        	this.dsCombo.setColumn(1, "CD_TYPE", "49");
        	this.dsCombo.setColumn(1, "CD_VALUE", "");

        	var strSvcId    = "combo";
        	var strSvcType  = "select";
        	var inProc		= "_dsProc";
        	var inData      = "combo=dsCombo";
        	var outData     = "dsCombo1=combo0 dsCombo2=combo1";
        	var strArg      = "";
        	var callBackFnc = "fnCallback";

        	this.gfnTransaction( strSvcId , 	// transaction을 구분하기 위한 svc id값
        						strSvcType , 	// transaction을 요청할 구분
        						inProc,			// Procedure 정보 Dataset 이름
        						inData , 		// 입력값으로 보낼 dataset id , a=b형태로 실제이름과 입력이름을 매칭
        						outData , 		// 처리결과값으로 받을 dataset id, a=b형태로 실제이름과 입력이름을 매칭
        						strArg, 			// 입력갑스로 보낼 arguments, strFormData="20120607"
        						callBackFnc); // 통신방법 정의 [생략가능]
        };

        this.dsList_onvaluechanged = function(obj,e)
        {
        	if(e.columnid == "TY_L_COMP"){
        		if(e.newvalue != e.oldvalue){
        			this.dsList.setColumn(e.row,"TY_S_COMP","");
        		}
        	}
        };

        /*한대운 수정: 셀수정 설정*/
        this.fnGrid_EnterCell = function(obj, row, cell){
            var colnm = this.gfnGridGetBindColumnNameByIndex(obj, cell);
        	if(colnm == "CD_TRADE" && this.gfnGetFlag(this.dsList, row) != "I")
        		return false;

        	return true;
         };

        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.DCA_REGISTLIST_onload,this);
            this.divSearch.form.ccboCD_COMBO1.addEventHandler("onitemchanged",this.divSearch_ccboCD_COMBO1_onitemchanged,this);
            this.dsList.addEventHandler("onvaluechanged",this.dsList_onvaluechanged,this);
            this.dsSearch.addEventHandler("onvaluechanged",this.dsSearch_onvaluechanged,this);
        };
        this.loadIncludeScript("DOZ_TRADE.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
