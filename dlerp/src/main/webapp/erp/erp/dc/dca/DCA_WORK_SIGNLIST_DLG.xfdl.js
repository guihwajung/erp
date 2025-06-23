(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("DWA_SILHENG");
            this.set_titletext("New Form");
            if (Form == this.constructor)
            {
                this._setFormPosition(950,550);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("dsList", this);
            obj._setContents("");
            this.addChild(obj.name, obj);


            obj = new Dataset("_dsProc", this);
            obj._setContents("<ColumnInfo><Column id=\"TARGET\" type=\"STRING\" size=\"256\"/><Column id=\"SP\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"TARGET\">select</Col><Col id=\"SP\">DCAPR_WORK_SIGNLIST_VENDOR_SELECT</Col></Row><Row><Col id=\"TARGET\">combo</Col><Col id=\"SP\">DZXPR_COMBO_SELECT</Col></Row><Row><Col id=\"TARGET\">combo1</Col><Col id=\"SP\">DMXPR_LICCOST_COMBO_SELECT</Col></Row><Row><Col id=\"TARGET\">combo2</Col><Col id=\"SP\">DCXPR_LICCOST_COMBO_SELECT</Col></Row><Row><Col id=\"TARGET\">insert</Col><Col id=\"SP\">DCAPR_WORK_SIGNLIST_VENDOR_INSERT</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsSearch", this);
            obj._setContents("<ColumnInfo><Column id=\"YR_WORK\" type=\"STRING\" size=\"256\"/><Column id=\"DS_VENDOR\" type=\"STRING\" size=\"256\"/><Column id=\"CD_COSTCLASS\" type=\"STRING\" size=\"256\"/><Column id=\"CD_LICCOST\" type=\"STRING\" size=\"256\"/><Column id=\"YN_REGIST\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"CD_COSTCLASS\"/><Col id=\"CD_LICCOST\"/><Col id=\"YN_REGIST\"/></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsCD_COSTCLASS", this);
            obj._setContents("<ColumnInfo><Column id=\"CD_CODE\" type=\"STRING\" size=\"256\"/><Column id=\"DS_CODE\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsCD_LICCOST", this);
            obj._setContents("<ColumnInfo><Column id=\"CD_CODE\" type=\"STRING\" size=\"256\"/><Column id=\"DS_CODE\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsYN_REGIST", this);
            obj._setContents("<ColumnInfo><Column id=\"CD_CODE\" type=\"STRING\" size=\"256\"/><Column id=\"DS_CODE\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"CD_CODE\"/><Col id=\"DS_CODE\">전체</Col></Row><Row><Col id=\"CD_CODE\">01</Col><Col id=\"DS_CODE\">등록</Col></Row><Row><Col id=\"CD_CODE\">09</Col><Col id=\"DS_CODE\">미등록</Col></Row></Rows>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Div("divSearch","0.0","10.0",null,"78.0","0",null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_cssclass("div_SEARCH_Bg");
            obj.set_formscrollbartype("auto auto");
            this.addChild(obj.name, obj);

            obj = new Static("staYR_WORK","0.0","10.0","92.0","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("0");
            obj.set_text("대상년도");
            obj.set_textAlign("center");
            obj.set_cssclass("sta_WF_SchLabelE");
            this.divSearch.addChild(obj.name, obj);

            obj = new Div("ctclYR_WORK","staYR_WORK:0.0","10.0","60","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("1");
            obj.set_url("cmm::cmmCalYY.xfdl");
            obj.set_enable("false");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("staDS_VENDOR","ctclYR_WORK:0.0","10.0","92.0","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("2");
            obj.set_text("업체명");
            obj.set_textDecoration("none");
            obj.set_cssclass("sta_WF_SchLabel");
            this.divSearch.addChild(obj.name, obj);

            obj = new Edit("ctxtDS_VENDOR","staDS_VENDOR:0.0","10.0","200","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("3");
            obj.set_value("");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("staCD_COSTCLASS","0.0","staDS_VENDOR:10.0","92.0","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("4");
            obj.set_text("부문");
            obj.set_textDecoration("none");
            obj.set_textAlign("center");
            obj.set_cssclass("sta_WF_SchLabel");
            this.divSearch.addChild(obj.name, obj);

            obj = new Combo("cboCD_COSTCLASS","staCD_COSTCLASS:0.0","staDS_VENDOR:10.0","100","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("5");
            obj.set_datacolumn("DS_CODE");
            obj.set_codecolumn("CD_CODE");
            obj.set_innerdataset("dsCD_COSTCLASS");
            this.divSearch.addChild(obj.name, obj);

            obj = new Combo("cboCD_LICCOST","cboCD_COSTCLASS:0.0","staDS_VENDOR:10.0","180","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("6");
            obj.set_datacolumn("DS_CODE");
            obj.set_codecolumn("CD_CODE");
            obj.set_innerdataset("dsCD_LICCOST");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("staYN_REGIST","cboCD_LICCOST:0.0","staDS_VENDOR:10.0","92.0","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("7");
            obj.set_text("등록구분");
            obj.set_textDecoration("none");
            obj.set_textAlign("center");
            obj.set_visible("true");
            obj.set_cssclass("sta_WF_SchLabel");
            this.divSearch.addChild(obj.name, obj);

            obj = new Combo("ccboYN_REGIST","staYN_REGIST:0.0","staDS_VENDOR:10.0","100","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("8");
            obj.set_innerdataset("dsYN_REGIST");
            obj.set_codecolumn("CD_CODE");
            obj.set_datacolumn("DS_CODE");
            obj.set_visible("true");
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
            obj = new BindItem("item4","divSearch.form.cboCD_COSTCLASS","value","dsSearch","CD_COSTCLASS");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item5","divSearch.form.cboCD_LICCOST","value","dsSearch","CD_LICCOST");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item6","divSearch.form.ccboYN_REGIST","value","dsSearch","YN_REGIST");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item0","divSearch.form.ctclYR_WORK.form.TextBox","value","dsSearch","YR_WORK");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item1","divSearch.form.ctxtDS_VENDOR","value","dsSearch","DS_VENDOR");
            this.addChild(obj.name, obj);
            obj.bind();
            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {
            this._addPreloadList("fdl","cmm::cmmCalYY.xfdl");
        };
        
        // User Script
        this.registerScript("DCA_WORK_SIGNLIST_DLG.xfdl", function() {
        this.objApp = this.gfnGetApplication();
        this._FIRST = true;

        this.DWA_SILHENG_onload = function(obj,e)
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

        	if(!this.gfnIsNull(this.getOwnerFrame().YR_WORK))
        	{
        		this.dsSearch.setColumn(0, "YR_WORK", this.getOwnerFrame().YR_WORK);
        	}
        	else
        	{
        		this.dsSearch.setColumn(0, "YR_WORK", this.gfnGetDate().substr(0,4));
        	}
        //	this.FormBtns.Select.click();
        };

        /************************************************************************
         * 버튼 설정 : 화면(Tab) 전환시 마다 호출
         * 서브버튼 사용 및 공통버튼 강제 제어시 여기서 처리
         ************************************************************************/
        this.fnSetButton = function() {
        	// Select, Add, Del, Save, Excel, Print
        	// SubSelect, SubAdd, SubDel, SuubSave, SubExcel
        	// this.FormBtns.Add.set_enable(false);
        	// this.FormBtns.Del.set_enable(false);
        }

        /************************************************************************
         * 확장 버튼 : 화면별 버튼 설정 ID, function 연결 (화면버튼관리)
         ************************************************************************/
        this.fnSetExtendButton = function() {
        	this.btnAddVendor = this.gfnFormButtonAdd("btnAddVendor", "fnAddVendor");
        };

        /************************************************************************
         * 변수 선언
         ************************************************************************/
        this.fnSetVariable = function() {
        	this.dxGrid = this.divData.form.objGrid;
        };

        /************************************************************************
         * 이벤트 설정
         ************************************************************************/
        this.fnSetEvent = function() {
        	this.gfnGridInit(this.dxGrid, this.dsList, "DC", "DCA_WORK_SIGNLIST_DLG");

        };
        /************************************************************************
         * 파라미터 설정
         ************************************************************************/
        this.fnSetParameter = function() {
        	this.dsSelect = new Dataset();
        	this.dsSelect.addColumn("YR_WORK", "string");
        	this.dsSelect.addColumn("DS_VENDOR", "string");
        	this.dsSelect.addColumn("CD_COSTCLASS", "string");
        	this.dsSelect.addColumn("CD_LICCOST", "string");
        	this.dsSelect.addColumn("YN_REGIST", "string");

        	this.dsInsert = new Dataset();
        	this.dsInsert.addColumn("YR_WORK", "string");
        	this.dsInsert.addColumn("CD_VENDORS", "string");
        	this.dsInsert.addColumn("ID_USER", "string");
        }

        /************************************************************************
         * 그리드 이벤트
         ************************************************************************/


        /************************************************************************
         * 컨트롤 이벤트
         ************************************************************************/
         /*
          *	조회 버튼
          */
        this.fnSelect = function() {
        	if(!this.fnValidate()) return;

        	this.dsSelect.clearData();
        	this.dsSelect.addRow();
        	this.dsSelect.setColumn(0, "YR_WORK", this.dsSearch.getColumn(0, "YR_WORK"));
        	this.dsSelect.setColumn(0, "DS_VENDOR", this.dsSearch.getColumn(0, "DS_VENDOR"));
        	this.dsSelect.setColumn(0, "CD_COSTCLASS", this.dsSearch.getColumn(0, "CD_COSTCLASS"));
        	this.dsSelect.setColumn(0, "CD_LICCOST", this.dsSearch.getColumn(0, "CD_LICCOST"));
        	this.dsSelect.setColumn(0, "YN_REGIST", this.dsSearch.getColumn(0, "YN_REGIST"));

        	var strSvcId    = "select";
        	var strSvcType  = "grid";
        	var inProc		= "_dsProc";
        	var inData      = "select=dsSelect";
        	var outData     = "dsList=select0";
        	var strArg      = "";
        	var callBackFnc = "fnCallback";

        	this.gfnTransaction( strSvcId , 	// transaction을 구분하기 위한 svc id값
        						strSvcType , 	// trabsaction을 요청할 구분
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
        		// 그리드 필수항목 체크
        // 	if (!this.gfnGridValidate(this.dxGrid)) return;
        //
        // 	this.dxGrid.updateToDataset();
        //
        // 	this.dsInsert.clearData();
        // 	this.dsUpdate.clearData();
        // 	this.dsDelete.clearData();
        //
        // 	for (var i = 0; i < this.dsList.rowcount; i++) {
        // 		var flag = this.gfnGetFlag(this.dsList, i);
        //
        // 		switch(flag) {
        // 			case "I":
        //
        // 				var nrow = this.dsInsert.addRow();
        //
        // 				this.dsInsert.setColumn(nrow, "CD_SITE", this.dsSearch.getColumn(0, "CD_SITE"));
        // 				this.dsInsert.setColumn(nrow, "NO_BID", this.dsSearch.getColumn(0, "NO_BID"));
        // 				this.dsInsert.setColumn(nrow, "CD_VENDOR", this.dsList.getColumn(nrow, "CD_VENDOR"));
        // 				this.dsInsert.setColumn(nrow, "TY_RECOMMEND", "추천");
        // 				this.dsInsert.setColumn(nrow, "DS_REASON", this.dsList.getColumn(nrow, "DS_REASON"));
        // 				this.dsInsert.setColumn(nrow, "DS_HNAME", this.AuthClient.DS_HNAME);
        // 				this.dsInsert.setColumn(nrow, "CD_DEPT", this.AuthClient.CD_DEPT);
        // 				this.dsInsert.setColumn(nrow, "RM_REMARK", "");
        // 				this.dsInsert.setColumn(nrow, "TY_WHERE", "2");
        // 				this.dsInsert.setColumn(nrow, "CD_LICENSE", this.dsList.getColumn(nrow, "CD_LICENSE"));
        // 				this.dsInsert.setColumn(nrow, "AM_CONTLIMIT", this.dsList.getColumn(nrow, "AM_CONTLIMIT"));
        // 				this.dsInsert.setColumn(nrow, "ID_USER", this.AuthClient.ID_USER);
        //
        // 			break;
        //
        // 			case "U":
        //
        // 				var nrow = this.dsUpdate.addRow();
        //
        // 				this.dsUpdate.setColumn(nrow, "CD_SITE", this.dsSearch.getColumn(0, "CD_SITE"));
        // 				this.dsUpdate.setColumn(nrow, "NO_BID", this.dsSearch.getColumn(0, "NO_BID"));
        // 				this.dsUpdate.setColumn(nrow, "CD_VENDOR", this.dsList.getColumn(nrow, "CD_VENDOR"));
        // 				this.dsUpdate.setColumn(nrow, "TY_RECOMMEND", "추천");
        // 				this.dsUpdate.setColumn(nrow, "DS_REASON", this.dsList.getColumn(nrow, "DS_REASON"));
        // 				this.dsUpdate.setColumn(nrow, "DS_HNAME", this.AuthClient.DS_HNAME);
        // 				this.dsUpdate.setColumn(nrow, "CD_DEPT", this.AuthClient.CD_DEPT);
        // 				this.dsUpdate.setColumn(nrow, "RM_REMARK", "");
        // 				this.dsUpdate.setColumn(nrow, "TY_WHERE", "2");
        // 				this.dsUpdate.setColumn(nrow, "CD_LICENSE", this.dsList.getColumn(nrow, "CD_LICENSE"));
        // 				this.dsUpdate.setColumn(nrow, "AM_CONTLIMIT", this.dsList.getColumn(nrow, "AM_CONTLIMIT"));
        // 				this.dsUpdate.setColumn(nrow, "ID_USER", this.AuthClient.ID_USER);
        //
        // 			break;
        //
        // 			case "D":
        //
        // 				var nrow = this.dsDelete.addRow();
        //
        // 				this.dsDelete.setColumn(nrow, "CD_SITE", this.dsSearch.getColumn(0, "CD_SITE"));
        // 				this.dsDelete.setColumn(nrow, "NO_BID", this.dsSearch.getColumn(0, "NO_BID"));
        // 				this.dsDelete.setColumn(nrow, "CD_VENDOR", this.dsList.getColumn(nrow, "CD_VENDOR"));
        //
        // 			break;
        // 		}
        // 	}
        //
        // 	if (this.dsInsert.rowcount == 0 && this.dsUpdate.rowcount == 0 && this.dsDelete.rowcount == 0) return;
        //
        // 	var strSvcId    = "save";
        // 	var strSvcType  = "save";
        // 	var inProc		= "_dsProc";
        // 	var inData      = "insert=dsInsert update=dsUpdate delete=dsDelete";
        // 	var outData     = "";
        // 	var strArg      = "";
        // 	var callBackFnc = "fnCallback";
        //
        // 	this.gfnTransaction( strSvcId , 	// transaction을 구분하기 위한 svc id값
        // 						strSvcType , 	// transaction을 요청할 구분
        // 						inProc,			// Procedure 정보 Dataset 이름
        // 						inData , 		// 입력값으로 보낼 dataset id , a=b형태로 실제이름과 입력이름을 매칭
        // 						outData , 		// 처리결과값으로 받을 dataset id, a=b형태로 실제이름과 입력이름을 매칭
        // 						strArg, 		// 입력값으로 보낼 arguments, strFormData="20120607"
        // 						callBackFnc); // 통신방법 정의 [생략가능]

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
        this.fnValidate = function() {
        	/*
        	if (this.gfnIsNull(this.ccfEvalueKind.form.CDTextBox.value)) {
        		this.fnVaidateCallback = function() {
        			this.ccfEvalueKind.form.CDTextBox.setFocus();
        		}
        		this.gfnAlert("평가기준코드를 입력하세요.");
        		return false;
        	}
        	*/

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

        	}else if(svcID == "insert") {
        		if (errorCode == 0) {
        			this.fnCallback_callback = function()
        			{
        				this.getParentContext().close(true);
        			}

        			this.gfnAlert("공정거래협약 업체등록 정상처리되었습니다.","fnCallback_callback");
        		} else {
        			this.gfnAlert(errorMsg);
        		}
        	}else if(svcID == "combo")
        	{
        		if(errorCode == 0)
        		{
        			this.dsCD_COSTCLASS.insertRow(0);
        			this.dsCD_COSTCLASS.setColumn(0, "CD_CODE", "");
        			this.dsCD_COSTCLASS.setColumn(0, "DS_CODE", "전체");
        			//this.divData.form.cboCD_COSTCLASS.set_index(0);

        			if(this._FIRST == true)
        			{
        				this.fnSetCombo1();
        				this._FIRST = false;
        			}
        		}else
        		{
        			this.gfnAlert(errorMsg);
        		}
        	}
        	else if(svcID == "combo1") {
        		if (errorCode == 0) {
        			this.dsCD_LICCOST.insertRow(0);
        			this.dsCD_LICCOST.setColumn(0, "CD_CODE", "");
        			this.dsCD_LICCOST.setColumn(0, "DS_CODE", "전체");
         			//this.divData.form.cboCD_LICCOST.set_index(0);
        		}
        	}

        };

        /************************************************************************
         * 코드파인드 이벤트
         ************************************************************************/


        /************************************************************************
         * 그리드 이벤트
         ************************************************************************/

        /************************************************************************
         * 기타 이벤트
         ************************************************************************/
        /*
         *	조회 조건 변경시 초기화
         */
        this.dsSearch_onvaluechanged = function(obj,e)
        {
        	if(e.oldvalue != e.newvalue) {
        		if(e.columnid == "CD_COSTCLASS")
        		{
        			this.dsSearch.setColumn(0, "CD_LICCOST", "");
        			this.fnSetCombo1();
        		}
        	}
        };

        this.fnSetCombo = function() {

        	this.dsCombo = new Dataset();
        	this.dsCombo.addColumn("CD_SYSTEM", "string");
        	this.dsCombo.addColumn("CD_TYPE", "string");

        	this.dsCombo.addRow();

        	if(this.getOwnerFrame().CD_MODULE == "DC")
        	{
        		this.dsCombo.setColumn(0, "CD_SYSTEM", "DC");
        		this.dsCombo.setColumn(0, "CD_TYPE", "BUMUN");
        	}
        	else
        	{
        		this.dsCombo.setColumn(0, "CD_SYSTEM", "DM");
        		this.dsCombo.setColumn(0, "CD_TYPE", "H01");
        	}

        	var strSvcId    = "combo";
        	var strSvcType  = "select";
        	var inProc		= "_dsProc";
        	var inData      = "combo=dsCombo";
        	var outData     = "dsCD_COSTCLASS=combo0";
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

        this.fnSetCombo1 = function()
        {
        	this.dsCombo = new Dataset();
        	this.dsCombo.setColumn("CD_SYSTEM", "string");
        	this.dsCombo.addColumn("CD_BUMUN", "string");

        	this.dsCombo.addRow();

        	if(this.getOwnerFrame().CD_MODULE == "DC")
        	{
        		this.dsCombo.setColumn(0, "CD_SYSTEM", "DC");
        	}
        	else
        	{
        		this.dsCombo.setColumn(0, "CD_SYSTEM", "DM");
        	}
        	this.dsCombo.setColumn(0, "CD_BUMUN", this.dsSearch.getColumn(0, "CD_COSTCLASS"));

        	var strSvcId    = "combo1";
        	var strSvcType  = "select";
        	var inProc		= "_dsProc";

        	var inData		= "";
        	var outData     = "";

        	if(this.getOwnerFrame().CD_MODULE == "DC")
        	{
        		inData      = "combo2=dsCombo";
        		outData     = "dsCD_LICCOST=combo20";
        	}
        	else
        	{
        		inData      = "combo1=dsCombo";
        		outData     = "dsCD_LICCOST=combo10";
        	}


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


        this.fnAddVendor = function()
        {
        	if(this.dsList.findRow("CHK", 1) < 0)
        	{
        		this.gfnAlert("선택된 업체가 없습니다.");
        		return false;
        	}

        	var cnt = 0;

        	for(var i = 0; i < this.dsList.rowcount; i++)
        	{
        		if(this.dsList.getColumn(i, "CHK") == 1)
        		{
        			cnt++;
        		}
        	}

        	var msg = "선택한 업체 수 : [" + cnt + "]건"
        			+ "\n\n공정거래협약 업체로 등록하시겠습니까?";

        	this.gfnConfirm(msg,"fnAddVendor_callback");
        }

        this.fnAddVendor_callback = function(strID, val)
        {
        	if(val == true)
        	{
        		this.dsInsert.clearData();

        		var cd_vendors = "";

        		for (var i = 0; i < this.dsList.rowcount; i++) {
        			if(this.dsList.getColumn(i, "CHK") == 1)
        			{
        				if(cd_vendors != "") cd_vendors += ",";
        				cd_vendors += this.dsList.getColumn(i, "CD_VENDOR");
        			}
        		}

        		var nrow = this.dsInsert.addRow();
        		this.dsInsert.setColumn(nrow, "YR_WORK", this.dsSearch.getColumn(0, "YR_WORK"));
        		this.dsInsert.setColumn(nrow, "CD_VENDORS", cd_vendors);
        		this.dsInsert.setColumn(nrow, "ID_USER", this.AuthClient.ID_USER);

        		if (this.dsInsert.rowcount == 0) return;

        		var strSvcId    = "insert";
        		var strSvcType  = "save";
        		var inProc		= "_dsProc";
        		var inData      = "insert=dsInsert";
        		var outData     = "";
        		var strArg      = "";
        		var callBackFnc = "fnCallback";

        		this.gfnTransaction( strSvcId , 	// transaction을 구분하기 위한 svc id값
        							strSvcType , 	// transaction을 요청할 구분
        							inProc,			// Procedure 정보 Dataset 이름
        							inData , 		// 입력값으로 보낼 dataset id , a=b형태로 실제이름과 입력이름을 매칭
        							outData , 		// 처리결과값으로 받을 dataset id, a=b형태로 실제이름과 입력이름을 매칭
        							strArg, 		// 입력값으로 보낼 arguments, strFormData="20120607"
        							callBackFnc); // 통신방법 정의 [생략가능]
        	}
        }
        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.DWA_SILHENG_onload,this);
            this.dsSearch.addEventHandler("onvaluechanged",this.dsSearch_onvaluechanged,this);
        };
        this.loadIncludeScript("DCA_WORK_SIGNLIST_DLG.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
