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
            this.set_titletext("가등록평가(자재)");
            if (Form == this.constructor)
            {
                this._setFormPosition(1280,720);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("dsList", this);
            obj._setContents("");
            this.addChild(obj.name, obj);


            obj = new Dataset("_dsProc", this);
            obj._setContents("<ColumnInfo><Column id=\"TARGET\" type=\"STRING\" size=\"256\"/><Column id=\"SP\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"TARGET\">select</Col><Col id=\"SP\">DCAPR_REGIST_TEMP_REQ_LIST_DM_SELECT</Col></Row><Row><Col id=\"TARGET\">update</Col><Col id=\"SP\">DCAPR_REGIST_TEMP_REQ_LIST_DM_UPDATE</Col></Row><Row><Col id=\"TARGET\">delete</Col><Col id=\"SP\">DCAPR_REGIST_TEMP_REQ_LIST_DM_DELETE</Col></Row><Row><Col id=\"TARGET\">combo</Col><Col id=\"SP\">DZXPR_COMBO_SELECT</Col></Row><Row><Col id=\"TARGET\">combo1</Col><Col id=\"SP\">DMXPR_LICCOST_COMBO_SELECT</Col></Row><Row><Col id=\"TARGET\">regist</Col><Col id=\"SP\">DCAPR_JUDGE_REGIST_TEMP_RESULT_UPDATE</Col></Row><Row><Col id=\"TARGET\">auto</Col><Col id=\"SP\">DCAPR_REGIST_TEMP_REQ_AUTO_JUDGE_DM</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsSearch", this);
            obj._setContents("<ColumnInfo><Column id=\"NO_SJC\" type=\"STRING\" size=\"256\"/><Column id=\"YR_REQ\" type=\"STRING\" size=\"256\"/><Column id=\"DS_VENDOR\" type=\"STRING\" size=\"256\"/><Column id=\"CD_LICCOST\" type=\"STRING\" size=\"256\"/><Column id=\"CD_DAM\" type=\"STRING\" size=\"256\"/><Column id=\"CD_BUMUN\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"TY_SELECT\">미심사</Col><Col id=\"CD_LICCOST\"/></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsCD_DAM", this);
            obj._setContents("");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsCD_BUMUN", this);
            obj._setContents("");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsCD_LICCOST", this);
            obj._setContents("<ColumnInfo><Column id=\"CD_CODE\" type=\"STRING\" size=\"256\"/><Column id=\"DS_CODE\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"CD_CODE\"/><Col id=\"DS_CODE\">전체</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsTY_GUBUN", this);
            obj._setContents("<ColumnInfo><Column id=\"CODE\" type=\"STRING\" size=\"256\"/><Column id=\"VALUE\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"VALUE\">전체</Col><Col id=\"CODE\">0</Col></Row></Rows>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Div("divSearch","0.0","10.0",null,"78.0","0",null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_cssclass("div_SEARCH_Bg");
            obj.set_formscrolltype("none");
            this.addChild(obj.name, obj);

            obj = new Static("staYR_REQ","0.0","10.0","118.0","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("2");
            obj.set_text("평가년도");
            obj.set_textDecoration("none");
            obj.set_cssclass("sta_WF_SchLabel");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("staNO_SJC","0.0","staYR_REQ:10.0","118.0","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("0");
            obj.set_text("사업자번호");
            obj.set_cssclass("sta_WF_SchLabel");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("staDS_VENDOR","staNO_SJC:0.0","staYR_REQ:10.0","118.0","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("1");
            obj.set_text("회사명");
            obj.set_cssclass("sta_WF_SchLabel");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("staCD_LICCOST","0.0","10.0","118.0","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("3");
            obj.set_text("품목");
            obj.set_textDecoration("none");
            obj.set_cssclass("sta_WF_SchLabel");
            this.divSearch.addChild(obj.name, obj);

            obj = new Combo("ccboCD_BUMUN","staCD_LICCOST:0.0","10.0","95","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("4");
            obj.set_innerdataset("dsCD_BUMUN");
            obj.set_datacolumn("DS_CODE");
            obj.set_codecolumn("CD_CODE");
            obj.set_text("미심사");
            obj.set_value("미심사");
            this.divSearch.addChild(obj.name, obj);

            obj = new Combo("ccboCD_LICCOST","ccboCD_BUMUN:0.0","10.0","95","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("5");
            obj.set_innerdataset("dsCD_LICCOST");
            obj.set_datacolumn("DS_CODE");
            obj.set_codecolumn("CD_CODE");
            obj.set_text("미심사");
            obj.set_value("미심사");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("staCD_DAM","0.0","staYR_REQ:10.0","118.0","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("6");
            obj.set_text("자재팀담당자");
            obj.set_cssclass("sta_WF_SchLabel");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("staTY_GUBUN","staCD_DAM:0.0","staYR_REQ:10.0","118.0","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("7");
            obj.set_text("진행상태");
            obj.set_cssclass("sta_WF_SchLabel");
            this.divSearch.addChild(obj.name, obj);

            obj = new Combo("ccboCD_DAM","staTY_GUBUN:0.0","staYR_REQ:10.0","95","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("8");
            obj.set_innerdataset("dsCD_DAM");
            obj.set_datacolumn("DS_CODE");
            obj.set_codecolumn("CD_CODE");
            obj.set_text("미심사");
            obj.set_value("미심사");
            this.divSearch.addChild(obj.name, obj);

            obj = new Combo("ccboTY_GUBUN","ccboCD_DAM:0.0","staYR_REQ:10.0","95","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("9");
            obj.set_innerdataset("dsTY_GUBUN");
            obj.set_datacolumn("VALUE");
            obj.set_codecolumn("CODE");
            obj.set_text("전체");
            obj.set_value("0");
            obj.set_index("0");
            this.divSearch.addChild(obj.name, obj);

            obj = new Edit("ctxtNO_SJC","ccboTY_GUBUN:0.0","staYR_REQ:10.0","150","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("10");
            obj.set_value("");
            this.divSearch.addChild(obj.name, obj);

            obj = new Edit("ctxtDS_VENDOR","ctxtNO_SJC:0.0","staYR_REQ:10.0","150","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("11");
            obj.set_value("");
            this.divSearch.addChild(obj.name, obj);

            obj = new Div("ctcYR_REQ","0.0","10.0","100","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("12");
            obj.set_url("cmm::cmmCalYY.xfdl");
            obj.set_text("");
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
            obj = new BindItem("item1","divSearch.form.ctxtNO_SJC","value","dsSearch","NO_SJC");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item2","divSearch.form.ctxtDS_VENDOR","value","dsSearch","DS_VENDOR");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item3","divSearch.form.ccboCD_BUMUN","value","dsSearch","CD_BUMUN");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item4","divSearch.form.ccboCD_LICCOST","value","dsSearch","CD_LICCOST");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item5","divSearch.form.ccboCD_DAM","value","dsSearch","CD_DAM");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item6","divSearch.form.ctcYR_REQ.form.TextBox","value","dsSearch","YR_REQ");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item0","divSearch.form.ccboTY_GUBUN","value","dsSearch","TY_GUBUN");
            this.addChild(obj.name, obj);
            obj.bind();
            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {
            this._addPreloadList("fdl","cmm::cmmCalYY.xfdl");
        };
        
        // User Script
        this.registerScript("DCA_REGIST_TEMP_REQ_DM_LIST.xfdl", function() {
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

        	this.ctcYR_REQ.form.TextBox.set_value(this.gfnGetDate().substr(0,4));

        	//this.FormBtns.Select.click();
        };

        /************************************************************************
         * 버튼 설정 : 화면(Tab) 전환시 마다 호출
         * 서브버튼 사용 및 공통버튼 강제 제어시 여기서 처리
         ************************************************************************/
        this.fnSetButton = function() {
        	this.FormBtns.Add.set_enable(false);
        }

        /************************************************************************
         * 확장 버튼 : 화면별 버튼 설정 ID, function 연결 (화면버튼관리)
         ************************************************************************/
        this.fnSetExtendButton = function() {
        	this.btnRegist = this.gfnFormButtonAdd("btnInsertDLG", "fnInsertDLG");
        	this.btnReject = this.gfnFormButtonAdd("btnReject", "fnReject");
        	this.btnLess = this.gfnFormButtonAdd("btnLess", "fnLess");
        	this.btnPass = this.gfnFormButtonAdd("btnPass", "fnPass");
        	this.btnAutoJudge = this.gfnFormButtonAdd("btnAutoJudge", "fnAutoJudge");
        	this.btnDetail = this.gfnFormButtonAdd("btnDetail", "fnDetail");
        	this.btnAPP = this.gfnFormButtonAdd("btnAPP", "fnAPP");
        };


        /************************************************************************
         * 변수 선언
         ************************************************************************/
        this.fnSetVariable = function() {
        	this.ctcYR_REQ = this.divSearch.form.ctcYR_REQ;
        	this.ccboCD_BUMUN = this.divSearch.form.ccboCD_BUMUN;
        	this.ccboCD_LICCOST = this.divSearch.form.ccboCD_LICCOST;
        	this.ctxtNO_SJC = this.divSearch.form.ctxtNO_SJC;
        	this.ctxtDS_VENDOR = this.divSearch.form.ctxtDS_VENDOR;
        	this.ccboCD_DAM = this.divSearch.form.ccboCD_DAM;

        	this.dxGrid = this.divData.form.objGrid;
        };

        /************************************************************************
         * 이벤트 설정
         ************************************************************************/
        this.fnSetEvent = function() {

        	// 그리드 초기화
        	this.gfnGridInit(this.dxGrid, this.dsList, "DC", "DCA_REGIST_TEMP_REQ_DM_LIST");
        	//this.dxGrid.BeforeUserDataSetParam = "fnGrid_BeforeUserDataSetParam";
        };

        /************************************************************************
         * 파라미터 설정
         ************************************************************************/
        this.fnSetParameter = function() {

        	this.dsSelect = new Dataset();
        	this.dsSelect.addColumn("NO_SJC", "string");
        	this.dsSelect.addColumn("YR_REQ", "string");
        	this.dsSelect.addColumn("DS_VENDOR", "string");
        	this.dsSelect.addColumn("CD_BUMUN", "string");
        	this.dsSelect.addColumn("CD_LICCOST", "string");
        	this.dsSelect.addColumn("CD_DAM", "string");

        	this.dsUpdate = new Dataset();
        	this.dsUpdate.addColumn("NO_ID", "string");
        	this.dsUpdate.addColumn("YR_REQ", "string");
        	this.dsUpdate.addColumn("NO_SJC", "string");
        	this.dsUpdate.addColumn("DS_PRESIDENT", "string");
        	this.dsUpdate.addColumn("DS_VENDOR", "string");
        	this.dsUpdate.addColumn("CD_BUMUN", "string");
        	this.dsUpdate.addColumn("CD_LICCOST", "string");
        	this.dsUpdate.addColumn("DS_EMAIL", "string");
        	this.dsUpdate.addColumn("NO_HP", "string");
        	this.dsUpdate.addColumn("CD_JUDGEKIND", "string");
        	this.dsUpdate.addColumn("CD_JUDGEKIND_ORG", "string");
        	this.dsUpdate.addColumn("CD_CREDIT", "string");
        	this.dsUpdate.addColumn("NO_CORP", "string");
        	this.dsUpdate.addColumn("NO_TEL", "string");
        	this.dsUpdate.addColumn("DS_UPJONG", "string");
        	this.dsUpdate.addColumn("DS_UPTAE", "string");
        	this.dsUpdate.addColumn("ID_DAM", "string");
        	this.dsUpdate.addColumn("DS_DAM", "string");
        	this.dsUpdate.addColumn("REQ_DS_DEPT", "string");
        	this.dsUpdate.addColumn("REQ_DS_SPOT", "string");
        	this.dsUpdate.addColumn("REQ_DS_NAME", "string");
        	this.dsUpdate.addColumn("REQ_REASON", "string");

        	this.dsDelete = new Dataset();
        	this.dsDelete.addColumn("NO_ID", "string");
        	this.dsDelete.addColumn("YR_REQ", "string");
        	this.dsDelete.addColumn("NO_SJC", "string");

        	this.dsRegist = new Dataset();
        	this.dsRegist.addColumn("YR_REQ", "string");
        	this.dsRegist.addColumn("CD_VENDOR", "string");
        	this.dsRegist.addColumn("CD_JUDGEKIND", "string");
        	this.dsRegist.addColumn("CD_LICCOST", "string");
        	this.dsRegist.addColumn("TY_RESULT", "string");
        	this.dsRegist.addColumn("RM_ETC_REASON", "string");

        	this.dsAuto = new Dataset();
        	this.dsAuto.addColumn("YR_JUDGE", "string");
        	this.dsAuto.addColumn("CD_JUDGEKIND", "string");
        	this.dsAuto.addColumn("CD_VENDOR", "string");
        	this.dsAuto.addColumn("CD_LICCOST", "string");
        	this.dsAuto.addColumn("ID_USER", "string");
        }

        /************************************************************************
         * 컨트롤 이벤트
         ************************************************************************/
         /*
          *	조회 버튼
          */
        this.fnSelect = function() {
        	//if (!this.fnSelectValidate()) return false;

        	this.gfnGridBeforeSelect(this.dxGrid);

        	this.dsSelect.clearData();
        	this.dsSelect.addRow();

        	this.dsSelect.setColumn(0, "NO_SJC", this.dsSearch.getColumn(0, "NO_SJC"));
        	this.dsSelect.setColumn(0, "YR_REQ", this.dsSearch.getColumn(0, "YR_REQ"));
        	this.dsSelect.setColumn(0, "DS_VENDOR", this.dsSearch.getColumn(0, "DS_VENDOR"));
        	this.dsSelect.setColumn(0, "CD_BUMUN", this.dsSearch.getColumn(0, "CD_BUMUN"));
        	this.dsSelect.setColumn(0, "CD_LICCOST", this.dsSearch.getColumn(0, "CD_LICCOST"));
        	this.dsSelect.setColumn(0, "CD_DAM", this.dsSearch.getColumn(0, "CD_DAM"));

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
        	this.gfnGridDel(this.dxGrid);
        }

        /*
         *	저장 버튼
         */
        this.fnSave = function() {
        	// 그리드 필수항목 체크
        	if (!this.gfnGridValidate(this.dxGrid)) return;

        	this.dxGrid.updateToDataset();

        	this.dsUpdate.clearData();
        	this.dsDelete.clearData();

        	var dt_today = this.gfnGetDate();
        	for (var i = 0; i < this.dsList.rowcount; i++) {
        		var flag = this.gfnGetFlag(this.dsList, i);
        		switch(flag) {
        			case "I":
        				var nrow = this.dsInsert.addRow();
        				break;

        			case "U":
        				var nrow = this.dsUpdate.addRow();
        				this.dsUpdate.setColumn(nrow, "NO_ID", this.dsList.getColumn(i, "NO_ID"));
        				this.dsUpdate.setColumn(nrow, "YR_REQ", this.dsList.getColumn(i, "YR_REQ"));
        				this.dsUpdate.setColumn(nrow, "NO_SJC", this.dsList.getColumn(i, "NO_SJC"));
        				this.dsUpdate.setColumn(nrow, "DS_PRESIDENT", this.dsList.getColumn(i, "DS_PRESIDENT"));
        				this.dsUpdate.setColumn(nrow, "DS_VENDOR", this.dsList.getColumn(i, "DS_VENDOR"));
        				this.dsUpdate.setColumn(nrow, "CD_BUMUN", this.dsList.getColumn(i, "CD_BUMUN"));
        				this.dsUpdate.setColumn(nrow, "CD_LICCOST", this.dsList.getColumn(i, "CD_LICCOST"));
        				this.dsUpdate.setColumn(nrow, "DS_EMAIL", this.dsList.getColumn(i, "DS_EMAIL"));
        				this.dsUpdate.setColumn(nrow, "NO_HP", this.dsList.getColumn(i, "NO_HP"));
        				this.dsUpdate.setColumn(nrow, "CD_JUDGEKIND", this.dsList.getColumn(i, "CD_JUDGEKIND"));
        				this.dsUpdate.setColumn(nrow, "CD_JUDGEKIND_ORG", this.dsList.getColumn(i, "CD_JUDGEKIND_ORG"));
        				this.dsUpdate.setColumn(nrow, "CD_CREDIT", this.dsList.getColumn(i, "CD_CREDIT"));
        				this.dsUpdate.setColumn(nrow, "NO_CORP", this.dsList.getColumn(i, "NO_CORP"));
        				this.dsUpdate.setColumn(nrow, "NO_TEL", this.dsList.getColumn(i, "NO_TEL"));
        				this.dsUpdate.setColumn(nrow, "DS_UPJONG", this.dsList.getColumn(i, "DS_UPJONG"));
        				this.dsUpdate.setColumn(nrow, "DS_UPTAE", this.dsList.getColumn(i, "DS_UPTAE"));
        				this.dsUpdate.setColumn(nrow, "ID_DAM", this.dsList.getColumn(i, "ID_DAM"));
        				this.dsUpdate.setColumn(nrow, "DS_DAM", this.dsList.getColumn(i, "DS_DAM"));
        				this.dsUpdate.setColumn(nrow, "REQ_DS_DEPT", this.dsList.getColumn(i, "REQ_DS_DEPT"));
        				this.dsUpdate.setColumn(nrow, "REQ_DS_SPOT", this.dsList.getColumn(i, "REQ_DS_SPOT"));
        				this.dsUpdate.setColumn(nrow, "REQ_DS_NAME", this.dsList.getColumn(i, "REQ_DS_NAME"));
        				this.dsUpdate.setColumn(nrow, "REQ_REASON", this.dsList.getColumn(i, "REQ_REASON"));
        				break;

        			case "D":
        				var nrow = this.dsDelete.addRow();
        				this.dsDelete.setColumn(nrow, "NO_ID", this.dsList.getColumn(i, "NO_ID"));
        				this.dsDelete.setColumn(nrow, "YR_REQ", this.dsList.getColumn(i, "YR_REQ"));
        				this.dsDelete.setColumn(nrow, "NO_SJC", this.dsList.getColumn(i, "NO_SJC"));
        				break;
        		}
        	}

        	if (this.dsUpdate.rowcount == 0 && this.dsDelete.rowcount == 0) return;


        	var strSvcId    = "save";
        	var strSvcType  = "save";
        	var inProc		= "_dsProc";
        	var inData      = "update=dsUpdate delete=dsDelete";
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

        	return validate;
        };

        /************************************************************************
         * 콜백 이벤트
         ************************************************************************/
        /*
         *	콜백 처리
         */
        this.fnCallback = function(svcID, errorCode, errorMsg, strArg)
        {
        	if (svcID == "select") {
        		this.gfnGridAfterSelect(this.dxGrid);
        		this.FormBtns.Add.set_enable(false);
        	}
        	else if(svcID == "save") {
        		if (errorCode == 0) {
        			this.FormBtns.Select.click();
        		} else {
        			this.gfnAlert(errorMsg);
        		}
        	}
        	else if(svcID == "regist") {
        		if (errorCode == 0) {
        			this.fnCallback_callback = function()
        			{
        				this.FormBtns.Select.click();
        			}

        			var json = this.gfnArgsToJson(strArg);
        			strArg = json.gubun;

        			var msg = "";

        			if(strArg == "반려") msg = "반려처리가 정상 처리되었습니다.";
        			else if(strArg == "합격") msg = "합격처리가 정상 처리되었습니다.";
        			else if(strArg == "기준미달") msg = "기준미달처리가 정상 처리되었습니다.";

        			this.gfnAlert(msg, "fnCallback_callback");

        		} else {
        			this.gfnAlert(errorMsg);
        		}
        	}
        	else if(svcID == "auto")
        	{
        		if (errorCode == 0) {
        			this.fnCallback_callback = function()
        			{
        				this.FormBtns.Select.click();
        			}

        			this.gfnAlert("자동평가가 정상 처리되었습니다.", "fnCallback_callback");
        		} else {
        			this.gfnAlert(errorMsg);
        		}
        	}
        }
        /***********************************************************************
         * 코드파인드 이벤트
         ************************************************************************/
        this.fnBeforeUserDataSetParam = function(id, dsUserParam, nrow) {

        	return true;
        }

        /************************************************************************
         * 그리드 이벤트
         ************************************************************************/
        this.fnGrid_BeforeUserDataSetParam = function(id, dsUserParam, nrow) {

        	return true;
        }

        /************************************************************************
         * 기타 이벤트
         ************************************************************************/
        //미등록사승인요청
        this.fnInsertDLG = function() {

           var nRow = this.dsList.rowposition;
           var param = {};

           this.gfnFormOpenNonAuth("DCA", "DCA_REGIST_TEMP_REQ_DM_DLG", "fnInsertDLG_callback", param, 660, 500);

        }

        this.fnInsertDLG_callback = function(svcID, value)
        {
        	if(value == true)
        	{
        		this.FormBtns.Select.click();
        	}
        }


        this.dsSearch_onvaluechanged = function(obj,e)
        {
        	if(e.oldvalue != e.newvalue) {
        		this.gfnSetFormStatus(this);	// 폼상태 초기화
        		this.gfnGridClear(this.dxGrid);
        	}
        };

        this.fnSetCombo = function()
        {
        	this.dsCombo = new Dataset();
        	this.dsCombo.addColumn("CD_SYSTEM", "string");
        	this.dsCombo.addColumn("CD_TYPE", "string");

        	//부문
        	this.dsCombo.addRow();
        	this.dsCombo.setColumn(0, "CD_SYSTEM", "DM");
        	this.dsCombo.setColumn(0, "CD_TYPE", "H01");

        	//담당자
        	this.dsCombo.addRow();
        	this.dsCombo.setColumn(1, "CD_SYSTEM", "DM");
        	this.dsCombo.setColumn(1, "CD_TYPE", "H07");

        	var strSvcId    = "combo";
        	var strSvcType  = "select";
        	var inProc		= "_dsProc";
        	var inData      = "combo=dsCombo";
        	var outData     = "dsCD_BUMUN=combo0 dsCD_DAM=combo1";
        	var strArg      = "";
        	var callBackFnc = "fnCallbackCombo";

        	this.gfnTransaction( strSvcId , 	// transaction을 구분하기 위한 svc id값
        						strSvcType , 	// transaction을 요청할 구분
        						inProc,			// Procedure 정보 Dataset 이름
        						inData , 		// 입력값으로 보낼 dataset id , a=b형태로 실제이름과 입력이름을 매칭
        						outData , 		// 처리결과값으로 받을 dataset id, a=b형태로 실제이름과 입력이름을 매칭
        						strArg, 		// 입력값으로 보낼 arguments, strFormData="20120607"
        						callBackFnc); // 통신방법 정의 [생략가능]
        }

        this.fnCallbackCombo = function(svcID, errorCode, errorMsg)
        {
        	if(svcID == "combo") {
        		this.dsCD_BUMUN.insertRow(0);
        		this.dsCD_BUMUN.setColumn(0, "CD_CODE", "");
        		this.dsCD_BUMUN.setColumn(0, "DS_CODE", "전체");
        		this.divSearch.form.ccboCD_BUMUN.set_index(0);

        		this.dsCD_DAM.insertRow(0);
        		this.dsCD_DAM.setColumn(0, "CD_CODE", "");
        		this.dsCD_DAM.setColumn(0, "DS_CODE", "전체");
         		this.divSearch.form.ccboCD_DAM.set_index(0);
        	}
        };

        this.fnSetCombo1 = function(cd_bumun)
        {
           this.dsCombo1 = new Dataset();
           this.dsCombo1.addColumn("CD_BUMUN", "string");

           //품목
           this.dsCombo1.addRow();
           this.dsCombo1.setColumn(0, "CD_BUMUN", cd_bumun);

           var strSvcId    = "combo1";
           var strSvcType  = "select";
           var inProc      = "_dsProc";
           var inData      = "combo1=dsCombo1";
           var outData     = "dsCD_LICCOST=combo10";
           var strArg      = "";
           var callBackFnc = "fnCallbackCombo1";

           this.gfnTransaction( strSvcId ,    // transaction을 구분하기 위한 svc id값
                          strSvcType ,    // transaction을 요청할 구분
                          inProc,         // Procedure 정보 Dataset 이름
                          inData ,       // 입력값으로 보낼 dataset id , a=b형태로 실제이름과 입력이름을 매칭
                          outData ,       // 처리결과값으로 받을 dataset id, a=b형태로 실제이름과 입력이름을 매칭
                          strArg,       // 입력값으로 보낼 arguments, strFormData="20120607"
                          callBackFnc); // 통신방법 정의 [생략가능]
        }

        this.fnCallbackCombo1 = function(svcID, errorCode, errorMsg)
        {
        	if(svcID == "combo1") {

        		this.dsCD_LICCOST.insertRow(0);
        		this.dsCD_LICCOST.setColumn(0, "CD_CODE", "");
        		this.dsCD_LICCOST.setColumn(0, "DS_CODE", "전체");
        	}
        };

        this.divSearch_ccboCD_BUMUN_onitemchanged = function(obj,e)
        {
           if(e.prevalue != e.postvalue) {
              this.fnSetCombo1(e.postvalue);
           }
        };

        this.fnDetail = function() {
        	var param = {};

        	param.YR_JUDGE = this.dsSearch.getColumn(0, "YR_REQ");
        	param.CD_VENDOR = this.dsList.getColumn(this.dsList.rowposition, "CD_VENDOR");
        	param.DS_VENDOR = this.dsList.getColumn(this.dsList.rowposition, "DS_VENDOR");
        	param.CD_LICCOST = this.dsList.getColumn(this.dsList.rowposition, "CD_LICCOST");
        	param.CD_JUDGEKIND = "2019SUNEW";

        	this.gfnFormOpen(this.FormInfo.CD_MODULE, "DCA_JUDGE", "fnDetail_callback", param);
        }

        this.fnDetail_callback = function(strID, val)
        {
        	if(val == true)
        	{
        		this.FormBtns.Select.click();
        	}
        }


        // 합격, 반려, 기준미달
        this.fnRegist = function(gubun)
        {
        	this.dsRegist.clearData();

        	for(var i = 0; i < this.dsList.rowcount; i++)
        	{
        		if(this.dsList.getColumn(i, "CHK") == "Y")
        		{
        			var nrow = this.dsRegist.addRow();
        			this.dsRegist.setColumn(nrow, "YR_REQ", this.dsList.getColumn(i, "YR_REQ"));
        			this.dsRegist.setColumn(nrow, "CD_VENDOR", this.dsList.getColumn(i, "CD_VENDOR"));
        			this.dsRegist.setColumn(nrow, "CD_JUDGEKIND", this.dsList.getColumn(i, "CD_JUDGEKIND"));
        			this.dsRegist.setColumn(nrow, "CD_LICCOST", this.dsList.getColumn(i, "CD_LICCOST"));
        			this.dsRegist.setColumn(nrow, "TY_RESULT", gubun);
        			this.dsRegist.setColumn(nrow, "RM_ETC_REASON", this.dsList.getColumn(i, "RM_ETC_REASON"));
        		}
        	}

        	if (this.dsRegist.rowcount == 0) return;

        	var strSvcId    = "regist";
        	var strSvcType  = "save";
        	var inProc		= "_dsProc";
        	var inData      = "regist=dsRegist";
        	var outData     = "";
        	var strArg      = "gubun=" + gubun;
        	var callBackFnc = "fnCallback";

        	this.gfnTransaction( strSvcId , 	// transaction을 구분하기 위한 svc id값
        						strSvcType , 	// transaction을 요청할 구분
        						inProc,			// Procedure 정보 Dataset 이름
        						inData , 		// 입력값으로 보낼 dataset id , a=b형태로 실제이름과 입력이름을 매칭
        						outData , 		// 처리결과값으로 받을 dataset id, a=b형태로 실제이름과 입력이름을 매칭
        						strArg, 		// 입력값으로 보낼 arguments, strFormData="20120607"
        						callBackFnc); // 통신방법 정의 [생략가능]
        }

        this.fnReject = function() {
        	this.gfnConfirm("반려 처리를 진행하시겠습니까?","fnReject_callback");
        }

        this.fnReject_callback = function(strID, val)
        {
        	if(val == true)
        	{
        		this.fnRegist("반려");
        	}
        }

        this.fnLess = function() {
        	this.gfnConfirm("기준미달 처리를 진행하시겠습니까?","fnLess_callback");
        }

        this.fnLess_callback = function(strID, val)
        {
        	if(val == true)
        	{
        		this.fnRegist("기준미달");
        	}
        }

        this.fnPass = function() {
        	this.gfnConfirm("합격 처리를 진행하시겠습니까?","fnPass_callback");
        }

        this.fnPass_callback = function(strID, val)
        {
        	if(val == true)
        	{
        		this.fnRegist("합격");
        	}
        }

        this.fnAutoJudge = function() {
        	this.gfnConfirm("자동평가를 진행하시겠습니까?","fnAutoJudge_callback");
        }

        this.fnAutoJudge_callback = function(strID, val)
        {
        	if(val == true)
        	{
        		this.fnAuto();
        	}
        }


        this.fnAuto = function()
        {
        	this.dsAuto.clearData();
        	for(var i = 0; i < this.dsList.rowcount; i++)
        	{
        		if(this.dsList.getColumn(i, "CHK") == "Y")
        		{
        			var nrow = this.dsAuto.addRow();

        			this.dsAuto.setColumn(nrow, "YR_JUDGE", this.dsList.getColumn(i, "YR_REQ"));
        			this.dsAuto.setColumn(nrow, "CD_JUDGEKIND", "");
        			this.dsAuto.setColumn(nrow, "CD_VENDOR", this.dsList.getColumn(i, "CD_VENDOR"));
        			this.dsAuto.setColumn(nrow, "CD_LICCOST", this.dsList.getColumn(i, "CD_LICCOST"));
        			this.dsAuto.setColumn(nrow, "ID_USER", this.AuthClient.ID_USER);
        		}
        	}

        	if (this.dsAuto.rowcount == 0) return;

        	var strSvcId    = "auto";
        	var strSvcType  = "save";
        	var inProc		= "_dsProc";
        	var inData      = "auto=dsAuto";
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


        this.fnAPP = function(obj,e) {
        	if (!this.gfnGridIsRow(this.dxGrid)) { return false; }

        	var param = {};
        	var nRow = this.dsList.rowposition;

        	param.PARAM01 = this.dsList.getColumn(nRow,"NO_SJC");
        	param.PARAM02 = this.dsList.getColumn(nRow, "TY_MODULE");
        	param.ID_AP = this.dsList.getColumn(nRow, "NO_ELAPDOC");	// 전자결재문서번호
        	param.YN_LINK = "N";	// 화면에서 팝업을 호출할경우 N, 링크를 통해서 화면을 오픈할경우 null 이다

        	// 화면 오픈.
        	// CD_MODULE은 보통 같은 모듈에서 호출하는 경우가 많으니 this.FormInfo.CD_MODULE 사용
        	// 타 모듈 화면 호출시 지정할것.
        	this.gfnFormOpen(this.FormInfo.CD_MODULE, "DCA_REGIST_TEMP_DM_APP", "fnAprvDialogCallback", param);

        }

         this.fnAprvDialogCallback = function(svcID, value) {
        	// 리턴값
        	if(value){
        		// 결재완료, 결재취소, 결재상신 후에는 재조회를 한다
        		this.FormBtns.Select.click();
        	}
        };

        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.form_onload,this);
            this.divSearch.form.ccboCD_BUMUN.addEventHandler("onitemchanged",this.divSearch_ccboCD_BUMUN_onitemchanged,this);
            this.divSearch.form.ccboCD_LICCOST.addEventHandler("onitemchanged",this.fnSearchInit,this);
            this.divSearch.form.ccboCD_DAM.addEventHandler("onitemchanged",this.fnSearchInit,this);
            this.divSearch.form.ccboTY_GUBUN.addEventHandler("onitemchanged",this.fnSearchInit,this);
            this.dsSearch.addEventHandler("onvaluechanged",this.dsSearch_onvaluechanged,this);
        };
        this.loadIncludeScript("DCA_REGIST_TEMP_REQ_DM_LIST.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
