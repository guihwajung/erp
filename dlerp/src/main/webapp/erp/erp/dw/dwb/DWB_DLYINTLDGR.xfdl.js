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
                this._setFormPosition(1280,720);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("dsList", this);
            obj._setContents("");
            this.addChild(obj.name, obj);


            obj = new Dataset("_dsProc", this);
            obj._setContents("<ColumnInfo><Column id=\"TARGET\" type=\"STRING\" size=\"256\"/><Column id=\"SP\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"SP\">DWBPR_DLYINTLDGR_SELECT</Col><Col id=\"TARGET\">select</Col></Row><Row><Col id=\"TARGET\">save</Col><Col id=\"SP\">DWBPR_DLYINTLDGR_SAVE</Col></Row><Row><Col id=\"TARGET\">combo</Col><Col id=\"SP\">DZXPR_COMBO_COMMON_SELECT_01</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsSearch", this);
            obj._setContents("<ColumnInfo><Column id=\"YR_WORK\" type=\"STRING\" size=\"256\"/><Column id=\"NO_QRT\" type=\"STRING\" size=\"256\"/><Column id=\"CD_SITE\" type=\"STRING\" size=\"256\"/><Column id=\"CD_VENDOR\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row/></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsNO_QRT", this);
            obj._setContents("<ColumnInfo><Column id=\"CD_CODE\" type=\"STRING\" size=\"256\"/><Column id=\"DS_CODE\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Div("divSearch","0.0","10.0",null,"46.0","0",null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_cssclass("div_SEARCH_Bg");
            obj.set_formscrolltype("none");
            this.addChild(obj.name, obj);

            obj = new Static("staYR_WORK","0.0","10.0","92.0","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("0");
            obj.set_text("기준년도");
            obj.set_cssclass("sta_WF_SchLabelE");
            this.divSearch.addChild(obj.name, obj);

            obj = new Div("ctclYR_WORK","staYR_WORK:0.0","10.0","60","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("1");
            obj.set_url("cmm::cmmCalYY.xfdl");
            this.divSearch.addChild(obj.name, obj);

            obj = new Combo("ccboNO_QRT","ctclYR_WORK:0.0","10.0","100","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("2");
            obj.set_innerdataset("dsNO_QRT");
            obj.set_codecolumn("CD_CODE");
            obj.set_datacolumn("DS_CODE");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("staCD_SITE","ccboNO_QRT:0.0","10.0","92.0","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("3");
            obj.set_text("현장코드");
            obj.set_textDecoration("none");
            obj.set_cssclass("sta_WF_SchLabel");
            this.divSearch.addChild(obj.name, obj);

            obj = new Div("ccfCD_SITE","staCD_SITE:0.0","10.0","200","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.getSetter("CodeFindName").set("DZX_CFSITE");
            obj.getSetter("CDTextWidth").set("70");
            obj.set_taborder("4");
            obj.getSetter("AutoSet").set("false");
            obj.set_url("cmm::cmmCodeFind.xfdl");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("staCD_VENDOR","ccfCD_SITE:0.0","10.0","92.0","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("3");
            obj.set_text("업체코드");
            obj.set_textDecoration("none");
            obj.set_cssclass("sta_WF_SchLabel");
            this.divSearch.addChild(obj.name, obj);

            obj = new Div("ccfCD_VENDOR","staCD_VENDOR:0.0","10.0","200","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.getSetter("CodeFindName").set("DWX_CFVENDOR_DH");
            obj.getSetter("CDTextWidth").set("70");
            obj.set_taborder("4");
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
            obj = new BindItem("item0","divSearch.form.ctclYR_WORK.form.TextBox","value","dsSearch","YR_WORK");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item1","divSearch.form.ccboNO_QRT","value","dsSearch","NO_QRT");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item2","divSearch.form.ccfCD_SITE.form.CDTextBox","value","dsSearch","CD_SITE");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item3","divSearch.form.ccfCD_VENDOR.form.CDTextBox","value","dsSearch","CD_VENDOR");
            this.addChild(obj.name, obj);
            obj.bind();
            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {
            this._addPreloadList("fdl","cmm::cmmCalYY.xfdl");
            this._addPreloadList("fdl","cmm::cmmCodeFind.xfdl");
        };
        
        // User Script
        this.registerScript("DWB_DLYINTLDGR.xfdl", function() {
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

        	this.fnSetCombo();

        	if(!this.gfnIsNull(this.getOwnerFrame().CD_SITE)
        	&& !this.gfnIsNull(this.getOwnerFrame().YR_WORK)
        	&& !this.gfnIsNull(this.getOwnerFrame().NO_QRT))
        	{
        		this.dsSearch.setColumn(0, "CD_SITE", this.getOwnerFrame().CD_SITE);
        		this.dsSearch.setColumn(0, "YR_WORK", this.getOwnerFrame().YR_WORK);
        		this.dsSearch.setColumn(0, "NO_QRT", this.getOwnerFrame().NO_QRT);
        		this.divSearch.form.ccfCD_SITE.form.DSTextBox.set_value(this.getOwnerFrame().DS_SITE);

        		this.FormBtns.Select.click();
        	}
        	else
        	{
        		this.dsSearch.setColumn(0, "YR_WORK", this.gfnGetDate().substr(0,4));
        	}
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
        	this.btnDlyInt = this.gfnFormButtonAdd("btnDlyInt", "fnDlyInt");

        };

        /************************************************************************
         * 변수 선언
         ************************************************************************/
        this.fnSetVariable = function() {
        	this.dxGrid = this.divData.form.objGrid;

        	this.ccfCD_VENDOR = this.divSearch.form.ccfCD_VENDOR;
        };

        /************************************************************************
         * 이벤트 설정
         ************************************************************************/
        this.fnSetEvent = function() {
        	this.ccfCD_VENDOR.BeforeUserDataSetParam = "fnBeforeUserDataSetParam";

        	// 그리드 초기화
        	this.gfnGridInit(this.dxGrid, this.dsList, "DW", "DWB_DLYINTLDGR");
        	this.dxGrid.EnterCell = "fnGrid_EnterCell";

        };

        /************************************************************************
         * 파라미터 설정
         ************************************************************************/
        this.fnSetParameter = function() {
        	this.dsSelect = new Dataset();
        	this.dsSelect.addColumn("TY_WRK", "string");
        	this.dsSelect.addColumn("YR_WORK", "string");
        	this.dsSelect.addColumn("NO_QRT", "string");
        	this.dsSelect.addColumn("CD_SITE", "string");
        	this.dsSelect.addColumn("CD_VENDOR", "string");

        	this.dsSave = new Dataset();
        	this.dsSave.addColumn("TY_WRK", "string");
        	this.dsSave.addColumn("ID_USER", "string");
        	this.dsSave.addColumn("YR_WORK", "string");
        	this.dsSave.addColumn("NO_QRT", "string");
        	this.dsSave.addColumn("CD_SITE", "string");
        	this.dsSave.addColumn("YM_WORK", "string");
        	this.dsSave.addColumn("NO_DGR", "string");
        	this.dsSave.addColumn("NO_HADOCONT", "string");
        	this.dsSave.addColumn("CD_VENDOR", "string");
        	this.dsSave.addColumn("DT_CCNST", "string");
        	this.dsSave.addColumn("TY_PAYMENT", "string");
        	this.dsSave.addColumn("DT_PAYMENT", "string");
        	this.dsSave.addColumn("DT_NOTEETM", "string");
        	this.dsSave.addColumn("AM_DDCT", "bigdecimal");
        	this.dsSave.addColumn("DS_DCCTRSN", "string");
        	this.dsSave.addColumn("AM_UNPD", "bigdecimal");
        	this.dsSave.addColumn("DS_UNPDRSN", "string");
        	this.dsSave.addColumn("RT_DLYDC", "bigdecimal");
        	this.dsSave.addColumn("DT_REALPAYMENT", "string");
        	this.dsSave.addColumn("DT_DLYINT", "string");
        	this.dsSave.addColumn("DD_DLYINT", "int");
        	this.dsSave.addColumn("DD_DCSCHR", "int");
        	this.dsSave.addColumn("DD_PAYETM", "int");
        	this.dsSave.addColumn("AM_DLYINTPAY", "bigdecimal");
        	this.dsSave.addColumn("AM_DLYINTXCL", "bigdecimal");
        	this.dsSave.addColumn("CD_DLYINTXCL", "string");
        	this.dsSave.addColumn("DS_DLYINTXCL", "string");
        	this.dsSave.addColumn("DS_RMKS", "string");
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

        	this.dsSelect.setColumn(0, "TY_WRK", "Q");
        	this.dsSelect.setColumn(0, "YR_WORK", this.dsSearch.getColumn(0, "YR_WORK"));
        	this.dsSelect.setColumn(0, "NO_QRT", this.dsSearch.getColumn(0, "NO_QRT"));
        	this.dsSelect.setColumn(0, "CD_SITE", this.dsSearch.getColumn(0, "CD_SITE"));
        	this.dsSelect.setColumn(0, "CD_VENDOR", this.dsSearch.getColumn(0, "CD_VENDOR"));

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
        	var nrow = this.gfnGridAdd(this.dxGrid); // top (default), bottom, current
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
        	// 그리드 필수항목 체크
        	if (!this.gfnGridValidate(this.dxGrid)) return;

        	this.dxGrid.updateToDataset();

        	// save SP 한개로 사용하는 경우
        	this.dsSave.clearData();

        	for (var i = 0; i < this.dsList.rowcount; i++) {
        		var flag = this.gfnGetFlag(this.dsList, i);
        		switch(flag) {
        			case "I":
        			case "U":
        			case "D":
        				if(!this.fnSaveValidate(i)) return;

        				var nrow = this.dsSave.addRow();
        				this.dsSave.setColumn(nrow, "TY_WRK", flag);
        				this.dsSave.setColumn(nrow, "ID_USER", this.AuthClient.ID_USER);
        				this.dsSave.setColumn(nrow, "YR_WORK", this.dsSearch.getColumn(0, "YR_WORK"));
        				this.dsSave.setColumn(nrow, "NO_QRT", this.dsSearch.getColumn(0, "NO_QRT"));
        				this.dsSave.setColumn(nrow, "CD_SITE", this.dsList.getColumn(i, "CD_SITE"));
        				this.dsSave.setColumn(nrow, "YM_WORK", this.dsList.getColumn(i, "YM_WORK"));
        				this.dsSave.setColumn(nrow, "NO_DGR", this.dsList.getColumn(i, "NO_DGR"));
        				this.dsSave.setColumn(nrow, "NO_HADOCONT", this.dsList.getColumn(i, "NO_HADOCONT"));
        				this.dsSave.setColumn(nrow, "CD_VENDOR", this.dsList.getColumn(i, "CD_VENDOR"));
        				this.dsSave.setColumn(nrow, "DT_CCNST", this.dsList.getColumn(i, "DT_CCNST"));
        				this.dsSave.setColumn(nrow, "TY_PAYMENT", this.dsList.getColumn(i, "TY_PAYMENT"));
        				this.dsSave.setColumn(nrow, "DT_PAYMENT", this.dsList.getColumn(i, "DT_PAYMENT"));
        				this.dsSave.setColumn(nrow, "DT_NOTEETM", this.dsList.getColumn(i, "DT_NOTEETM"));
        				this.dsSave.setColumn(nrow, "AM_DDCT", this.dsList.getColumn(i, "AM_DDCT"));
        				this.dsSave.setColumn(nrow, "DS_DCCTRSN", this.dsList.getColumn(i, "DS_DCCTRSN"));
        				this.dsSave.setColumn(nrow, "AM_UNPD", this.dsList.getColumn(i, "AM_UNPD"));
        				this.dsSave.setColumn(nrow, "DS_UNPDRSN", this.dsList.getColumn(i, "DS_UNPDRSN"));
        				this.dsSave.setColumn(nrow, "RT_DLYDC", this.dsList.getColumn(i, "RT_DLYDC"));
        				this.dsSave.setColumn(nrow, "DT_REALPAYMENT", this.dsList.getColumn(i, "DT_REALPAYMENT"));
        				this.dsSave.setColumn(nrow, "DT_DLYINT", this.dsList.getColumn(i, "DT_DLYINT"));
        				this.dsSave.setColumn(nrow, "DD_DLYINT", this.dsList.getColumn(i, "DD_DLYINT"));
        				this.dsSave.setColumn(nrow, "DD_DCSCHR", this.dsList.getColumn(i, "DD_DCSCHR"));
        				this.dsSave.setColumn(nrow, "DD_PAYETM", this.dsList.getColumn(i, "DD_PAYETM"));
        				this.dsSave.setColumn(nrow, "AM_DLYINTPAY", this.dsList.getColumn(i, "AM_DLYINTPAY"));
        				this.dsSave.setColumn(nrow, "AM_DLYINTXCL", this.dsList.getColumn(i, "AM_DLYINTXCL"));
        				this.dsSave.setColumn(nrow, "CD_DLYINTXCL", this.dsList.getColumn(i, "CD_DLYINTXCL"));
        				this.dsSave.setColumn(nrow, "DS_DLYINTXCL", this.dsList.getColumn(i, "DS_DLYINTXCL"));
        				this.dsSave.setColumn(nrow, "DS_RMKS", this.dsList.getColumn(i, "DS_RMKS"));
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

        	if (this.gfnIsNull(this.dsSearch.getColumn(0,"YR_WORK"))) {
        		validate = false;
        		// Alert후 실행할 처리
        		this.fnVaidateCallback = function() {
        			this.divSearch.form.ctclYR_WORK.form.TextBox.setFocus();
        		}
        		this.gfnAlert("기준년도를 입력하세요.", "fnVaidateCallback");
        	}
        // 	else if (this.gfnIsNull(this.dsSearch.getColumn(0,"NO_QRT"))) {
        // 		validate = false;
        // 		// Alert후 실행할 처리
        // 		this.fnVaidateCallback = function() {
        // 			this.divSearch.form.ccboNO_QRT.setFocus();
        // 		}
        // 		this.gfnAlert("분기를 입력하세요.", "fnVaidateCallback");
        // 	}

        	return validate;
        };

        this.fnSaveValidate = function(row)
        {
        	if(this.dsList.getColumn(row, "CD_DLYINTXCL") == "Z" && this.gfnIsNull(this.dsList.getColumn(row, "DS_DLYINTXCL")))
        	{
        		this.gfnAlert("제외여부 구분이 기타인 경우 사유가 필수로 입력되어야합니다.");
        		return false;
        	}
        	else if(this.dsList.getColumn(row, "AM_DLYINTXCL") > 0 && this.gfnIsNull(this.dsList.getColumn(row, "CD_DLYINTXCL")))
        	{
        		this.gfnAlert("제외금액이 0보다 큰 경우 제외구분이 필수로 입력되어야합니다.");
        		return false;
        	}
        	return true;
        }

        /************************************************************************
         * 콤보 이벤트
         ************************************************************************/
        this.fnSetCombo = function()
        {
        	this.dsCombo = new Dataset();
        	this.dsCombo.addColumn("CD_SYSTEM", "string");
        	this.dsCombo.addColumn("CD_TYPE", "string");
        	this.dsCombo.addColumn("YN_USE", "string");
        	this.dsCombo.addColumn("YN_ALL", "string");

        	this.dsCombo.clearData();
        	this.dsCombo.addRow();

        	this.dsCombo.setColumn(0, "CD_SYSTEM", "DW");
        	this.dsCombo.setColumn(0, "CD_TYPE", "54");
        	this.dsCombo.setColumn(0, "YN_USE", "Y");
        	this.dsCombo.setColumn(0, "YN_ALL", "N");

        	var strSvcId    = "combo";
        	var strSvcType  = "grid";
        	var inProc		= "_dsProc";
        	var inData      = "combo=dsCombo";
        	var outData     = "dsNO_QRT=combo0";
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
        	else if(svcID == "combo") {
        		if (errorCode == 0) {
        			this.divSearch.form.ccboNO_QRT.set_index(0);
        		} else {
        			this.gfnAlert(errorMsg);
        		}
        	}
        }

        /************************************************************************
         * 코드파인드 이벤트
         ************************************************************************/
        this.fnBeforeUserDataSetParam = function(id, dsUserParam, nrow) {
        	if (id == "ccfCD_VENDOR") {
        		if(this.gfnIsNull(this.dsSearch.getColumn(0, "CD_SITE")))
        		{
        			this.gfnAlert("현장코드를 먼저 입력해주세요.");
        			return;
        		}
        		dsUserParam.setColumn(nrow, "CD_CORP", this.AuthClient.CD_CORP);
        		dsUserParam.setColumn(nrow, "CD_SITE", this.dsSearch.getColumn(0, "CD_SITE"));
        		dsUserParam.setColumn(nrow, "TY_VENDOR", "DLYINT");
        	}
        	return true;
        }
        /************************************************************************
         * 그리드 이벤트
         ************************************************************************/
          this.fnGrid_EnterCell = function(obj, row, cell) {
        	// 수정가능 true, false 처리하려는 컬럼에 대해서만 return 처리할것.
        	var colnm = this.gfnGridGetBindColumnNameByIndex(this.dxGrid, cell);	// 클릭한 cell의 컬럼명

        	// 클릭했을때 클릭한 cell을 수정 가능 or 불가능 상태로 만든다.
        	// YN_EDIT 값이 Y일때만 수정가능상태
        	if(this.dsList.getColumn(row, "YN_EDIT") == "N") {
        		return false;
        	}

        	// 지연이자의 제외여부 구분이 기타일 때만 사유가 입력 가능.
        	// 사유의 기본이 readonly이기에 조건이 맞을때 true입력.
        	if(colnm == "DS_DLYINTXCL")
        	{
        		if(this.dsList.getColumn(row, "CD_DLYINTXCL") == "Z")
        		{
        			return true;
        		}
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

        this.fnDlyInt = function(obj,e) {

        	var param = {};
        	param.YR_WORK =  this.dsSearch.getColumn(0, "YR_WORK");
        	param.NO_QRT =  this.dsSearch.getColumn(0, "NO_QRT");
        	param.CD_SITE =  this.dsSearch.getColumn(0, "CD_SITE");
        	param.DS_SITE =  this.divSearch.form.ccfCD_SITE.form.DSTextBox.text;

        	this.gfnFormOpen(this.FormInfo.CD_MODULE, "DWB_DLYINT", "", param);
        }

        this.dsList_onvaluechanged = function(obj,e)
        {
        	if(e.oldvalue != e.newvalue)
        	{
        		// 계
        		if(e.columnid == "AM_DLYDC")
        		{
        			var am_dlyintpay = this.dsList.getColumn(e.row, "AM_DLYINTPAY");
        			var am_dlyintxcl = this.dsList.getColumn(e.row, "AM_DLYINTXCL");

        			var result = nexacro.toNumber(e.newvalue,0) - nexacro.toNumber(am_dlyintpay,0) - nexacro.toNumber(am_dlyintxcl,0);

        			if(result > 0)
        			{
        				this.dsList.setColumn(e.row, "AM_PAYMENT", result);
        			}
        			else
        			{
        				this.dsList.setColumn(e.row, "AM_XCSPAYMENT", -1 * result);
        			}
        		}
        		// 가지급금액
        		else if(e.columnid == "AM_DLYINTPAY")
        		{
        			var am_dlydc = this.dsList.getColumn(e.row, "AM_DLYDC");
        			var am_dlyintxcl = this.dsList.getColumn(e.row, "AM_DLYINTXCL");

        			var result = nexacro.toNumber(am_dlydc,0) - nexacro.toNumber(e.newvalue,0) - nexacro.toNumber(am_dlyintxcl,0);

        			if(result > 0)
        			{
        				this.dsList.setColumn(e.row, "AM_PAYMENT", result);
        			}
        			else
        			{
        				this.dsList.setColumn(e.row, "AM_XCSPAYMENT", -1 * result);
        			}
        		}
        		// 제외금액
        		else if(e.columnid == "AM_DLYINTXCL")
        		{
        			var am_dlydc = this.dsList.getColumn(e.row, "AM_DLYDC");
        			var am_dlyintpay = this.dsList.getColumn(e.row, "AM_DLYINTPAY");

        			var result = nexacro.toNumber(am_dlydc,0) - nexacro.toNumber(e.newvalue,0) - nexacro.toNumber(am_dlyintpay,0);

        			if(result > 0)
        			{
        				this.dsList.setColumn(e.row, "AM_PAYMENT", result);
        			}
        			else
        			{
        				this.dsList.setColumn(e.row, "AM_XCSPAYMENT", -1 * result);
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
        this.loadIncludeScript("DWB_DLYINTLDGR.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
