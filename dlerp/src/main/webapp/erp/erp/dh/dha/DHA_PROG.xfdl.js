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
            this.set_titletext("프로젝트관리");
            if (Form == this.constructor)
            {
                this._setFormPosition(1280,720);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("dsList", this);
            obj._setContents("");
            this.addChild(obj.name, obj);


            obj = new Dataset("_dsProc", this);
            obj._setContents("<ColumnInfo><Column id=\"TARGET\" type=\"STRING\" size=\"256\"/><Column id=\"SP\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"TARGET\">select</Col><Col id=\"SP\">DHAPR_PROG_SELECT</Col></Row><Row><Col id=\"TARGET\">issueSlip</Col><Col id=\"SP\">DHAPR_PROG_AUTOSLIP_INSERT</Col></Row><Row><Col id=\"TARGET\">cancelSlip</Col><Col id=\"SP\">DHAPR_PROG_AUTOSLIP_CANCEL</Col></Row><Row><Col id=\"TARGET\">create</Col><Col id=\"SP\">DHAPR_PROG_CREATE</Col></Row><Row><Col id=\"TARGET\">createKRW</Col><Col id=\"SP\">DHAPR_PROG_KRW_CREATE</Col></Row><Row><Col id=\"TARGET\">cancelIssueSlip</Col><Col id=\"SP\">DHAPR_PROG_CANCELAUTOSLIP_INSERT</Col></Row><Row><Col id=\"TARGET\">cancelCancelSlip</Col><Col id=\"SP\">DHAPR_PROG_CANCELAUTOSLIP_CANCEL</Col></Row><Row><Col id=\"TARGET\">selectMax</Col><Col id=\"SP\">DHAPR_PROG_MAXSEQ</Col></Row><Row><Col id=\"SP\">DHAPR_PROG_UPDATE</Col><Col id=\"TARGET\">save</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsSearch", this);
            obj._setContents("<ColumnInfo><Column id=\"CD_CORP\" type=\"STRING\" size=\"256\"/><Column id=\"DS_CORP\" type=\"STRING\" size=\"256\"/><Column id=\"YM_ACCOUNT\" type=\"STRING\" size=\"256\"/><Column id=\"CD_CURR\" type=\"STRING\" size=\"256\"/><Column id=\"NO_SEQ\" type=\"BIGDECIMAL\" size=\"256\"/></ColumnInfo><Rows><Row/></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsCD_CURR", this);
            obj._setContents("<ColumnInfo><Column id=\"CD_CODE\" type=\"STRING\" size=\"256\"/><Column id=\"DS_CODE\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"CD_CODE\"/><Col id=\"DS_CODE\">전체</Col></Row><Row><Col id=\"CD_CODE\">KRW</Col><Col id=\"DS_CODE\">KRW</Col></Row><Row><Col id=\"CD_CODE\">USD</Col><Col id=\"DS_CODE\">USD</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsList1", this);
            obj._setContents("");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsList2", this);
            obj._setContents("");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsNO_SEQ", this);
            obj._setContents("<ColumnInfo><Column id=\"NO_SEQ\" type=\"INT\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"NO_SEQ\">1</Col></Row><Row><Col id=\"NO_SEQ\">2</Col></Row><Row><Col id=\"NO_SEQ\">3</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsMaxSeq", this);
            obj._setContents("");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Div("divSearch","0","10.0",null,"46","0",null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_cssclass("div_SEARCH_Bg");
            obj.set_text("");
            this.addChild(obj.name, obj);

            obj = new Static("staCD_CORP","0","10.0","92","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("0");
            obj.set_text("법인코드");
            obj.set_cssclass("sta_WF_SchLabelE");
            this.divSearch.addChild(obj.name, obj);

            obj = new Div("ccfCD_CORP","staCD_CORP:0.0","10.0","250","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.getSetter("CodeFindName").set("DHX_CFCORP");
            obj.getSetter("CDTextWidth").set("50");
            obj.set_taborder("1");
            obj.set_url("cmm::cmmCodeFind.xfdl");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("staYM_ACCOUNT","ccfCD_CORP:0.0","10.0","92.0","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("2");
            obj.set_text("회계년월");
            obj.set_cssclass("sta_WF_SchLabelE");
            this.divSearch.addChild(obj.name, obj);

            obj = new Div("ctclYM_ACCOUNT","staYM_ACCOUNT:0.0","10.0","80","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("3");
            obj.set_url("cmm::cmmCalMM.xfdl");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("staCD_CURR","ctclYM_ACCOUNT:0.0","10.0","92.0","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("4");
            obj.set_text("화폐단위");
            obj.set_cssclass("sta_WF_SchLabel");
            this.divSearch.addChild(obj.name, obj);

            obj = new Combo("ccboCD_CURR","staCD_CURR:0.0","10.0","70","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("5");
            obj.set_datacolumn("DS_CODE");
            obj.set_codecolumn("CD_CODE");
            obj.set_innerdataset("dsCD_CURR");
            obj.set_text("전체");
            obj.set_value("");
            obj.set_index("0");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("staCD_DEPT_ACNT","ccboCD_CURR:270","10.0","92","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("6");
            obj.set_text("귀속부서");
            obj.set_cssclass("sta_WF_SchLabel");
            obj.set_visible("false");
            this.divSearch.addChild(obj.name, obj);

            obj = new Div("ccfCD_DEPT_ACNT","staCD_DEPT_ACNT:-3","10.0","280","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.getSetter("CDTextWidth").set("70");
            obj.set_taborder("7");
            obj.set_url("cmm::cmmCodeFind.xfdl");
            obj.set_visible("false");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("sta00_00","ccboCD_CURR:5","10","92.0","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("8");
            obj.set_text("결산차수");
            obj.set_cssclass("sta_WF_SchLabel");
            this.divSearch.addChild(obj.name, obj);

            obj = new Combo("ccboNO_SEQ","sta00_00:5","10","90","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("9");
            obj.set_innerdataset("dsNO_SEQ");
            obj.set_datacolumn("NO_SEQ");
            obj.set_codecolumn("NO_SEQ");
            obj.set_enable("true");
            obj.set_color("royalblue");
            obj.set_text("");
            obj.set_value("1");
            obj.set_index("-1");
            this.divSearch.addChild(obj.name, obj);

            obj = new Div("divData","0","divSearch:10",null,null,"0","0",null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_cssclass("div_DATA_Bg");
            this.addChild(obj.name, obj);

            obj = new Tab("tabData","0","0",null,null,"0","0",null,null,null,null,this.divData.form);
            obj.set_taborder("0");
            obj.set_tabindex("0");
            this.divData.addChild(obj.name, obj);

            obj = new Tabpage("tab1",this.divData.form.tabData);
            obj.set_text("원화 진행률표");
            this.divData.form.tabData.addChild(obj.name, obj);

            obj = new Grid("objGrid1","0","0",null,null,"0","0",null,null,null,null,this.divData.form.tabData.tab1.form);
            obj.set_taborder("0");
            obj._setContents("");
            this.divData.form.tabData.tab1.addChild(obj.name, obj);

            obj = new Tabpage("tab2",this.divData.form.tabData);
            obj.set_text("외화 진행률표");
            this.divData.form.tabData.addChild(obj.name, obj);

            obj = new Grid("objGrid2","0","0",null,null,"0","0",null,null,null,null,this.divData.form.tabData.tab2.form);
            obj.set_taborder("0");
            obj._setContents("");
            this.divData.form.tabData.tab2.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this
            obj = new Layout("default","",this._adjust_width,this._adjust_height,this,function(p){});
            this.addLayout(obj.name, obj);
            
            // BindItem Information
            obj = new BindItem("item0","divSearch.form.ccfCD_CORP.form.CDTextBox","value","dsSearch","CD_CORP");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item2","divSearch.form.ccfCD_CORP.form.DSTextBox","value","dsSearch","DS_CORP");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item1","divSearch.form.ctclYM_ACCOUNT.form.TextBox","value","dsSearch","YM_ACCOUNT");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item3","divSearch.form.ccboCD_CURR","value","dsSearch","CD_CURR");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item4","divSearch.form.ccboNO_SEQ","value","dsSearch","NO_SEQ");
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
        this.registerScript("DHA_PROG.xfdl", function() {
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
        	this.fnSetParameter()

        	this.fnSetHeadColSize();

        	this.dsSearch.setColumn(0, "CD_CORP", this.AuthClient.CD_CORP);
        	this.dsSearch.setColumn(0, "DS_CORP", this.AuthClient.DS_CORP);

        //	var today = this.gfnGetDate();
        	//var sCurrentDate = this.gfnGetDate();
        	this.dsSearch.setColumn(0, "YM_ACCOUNT", this.gfnAddMonth(this.gfnGetDate(), -1).substr(0,6));
        	this.divSearch.form.ccboCD_CURR.set_index( 1 );
        	this.divSearch.form.ccboCD_CURR.set_enable(false);

        	//this.dsSearch.setColumn(0, "NO_SEQ", 1);
        	this.fnSetMaxSeq();
        	//this.dsSearch.setColumn(0, "CD_DEPT_ACNT", this.AuthClient.LEVCD_DEPT_UPPER);
        	//this.ccfCD_DEPT_ACNT.form.fnCodeFindLoad();
        	//this.ccfCD_CORP.form.CDTextBox.setFocus();

        };

        /************************************************************************
         * 버튼 설정 : 화면(Tab) 전환시 마다 호출
         ************************************************************************/
        this.fnSetButton = function() {
        }

        /************************************************************************
         * 확장 버튼 : 화면별 버튼 설정 ID, function 연결
         ************************************************************************/
        this.fnSetExtendButton = function() {
        	//this.btnFormButtonGe = this.gfnFormButtonAdd("tbbHistory", "fnTbbHistory", "전표조회");
        	this.btnDataCreate = this.gfnFormButtonAdd("DataCreate", "fnCreateData");	//자료생성
        	this.btnSearchSlip = this.gfnFormButtonAdd("SearchSlip", "fnSearchSlip"); 	//전표조회
        	this.btnIssueSlip  = this.gfnFormButtonAdd("IssueSlip", "fnIssueSlip"); 	//전표발행
        	this.btnCancelSlip = this.gfnFormButtonAdd("CancelSlip", "fnCancelSlip"); 	//전표취소
        	this.btnCancelSearchSlip = this.gfnFormButtonAdd("CancelSearchSlip", "fnCancelSearchSlip"); 	//전표조회
        	this.btnCancelIssueSlip  = this.gfnFormButtonAdd("CancelIssueSlip", "fnCancelIssueSlip"); 	//전표발행
        	this.btnCancelCancelSlip = this.gfnFormButtonAdd("CancelCancelSlip", "fnCancelCancelSlip"); 	//전표취소
        };

        /************************************************************************
         * 변수 선언
         ************************************************************************/
        this.fnSetVariable = function() {
        	this.ccfCD_CORP = this.divSearch.form.ccfCD_CORP;
        	this.ctclYM_ACCOUNT = this.divSearch.form.ctclYM_ACCOUNT;
        	this.ccboCD_CURR = this.divSearch.form.ccboCD_CURR;
        	this.ccboNO_SEQ = this.divSearch.form.ccboNO_SEQ;
        	//this.ccfCD_DEPT_ACNT = this.divSearch.form.ccfCD_DEPT_ACNT;

        	this.tabData = this.divData.form.tabData;

        	//this.dxGrid = this.divData.form.objGrid;

        	this.dxGrid1 = this.divData.form.tabData.tab1.form.objGrid1;
        	this.dxGrid2 = this.divData.form.tabData.tab2.form.objGrid2;
        };

        /************************************************************************
         * 이벤트 설정
         ************************************************************************/
        this.fnSetEvent = function() {
        	// 그리드 초기화
        	this.gfnGridInit(this.dxGrid1, this.dsList1, "DH", "DHA_PROG");
        	this.gfnGridInit(this.dxGrid2, this.dsList2, "DH", "DHA_PROG");

        	//this.dxGrid.addEventHandler("oncelldblclick", this.fnGrid_Celldblclick, this);
        	//this.dxGrid.addEventHandler("onselectchanged", this.fnGrid_RowCellChanged, this);
        	//this.dxGrid.BeforeUserDataSetParam = "fnGrid_BeforeUserDataSetParam";

        	//검색조건 변경 이벤트
        	this.dsSearch.addEventHandler("onvaluechanged", this.dsSearch_Valuechanged, this);
        	this.dsList1.addEventHandler("onrowposchanged", this.dsList_Rowposchanged, this);
        	this.dsList2.addEventHandler("onrowposchanged", this.dsList_Rowposchanged, this);
        	//this.dsList.addEventHandler("onvaluechanged", this.dsList_onvaluechanged, this);

        	//this.ccfCD_DEPT_ACNT.CodeFindName = "DHX_CFACNTUNIT";	// DHX_CFBALANCE_ACNTUNIT

        	this.ccfCD_CORP.BeforeUserDataSetParam = "fnBeforeUserDataSetParam";
        	this.ccfCD_CORP.AfterCDTextChanged = "fnAfterCDTextChanged";
        	//this.ccfCD_DEPT_ACNT.BeforeUserDataSetParam = "fnBeforeUserDataSetParam";

        }

        /************************************************************************
         * 파라미터 설정
         ************************************************************************/
        this.fnSetParameter = function() {

        	this.dsSelect = new Dataset();
        	this.dsSelect.addColumn("CD_CORP", "string");
        	this.dsSelect.addColumn("CD_CURR", "string");
        	this.dsSelect.addColumn("YM_ACCOUNT", "string");
        	this.dsSelect.addColumn("YN_DOMESTIC", "string");
        	this.dsSelect.addColumn("NO_SEQ", "BIGDECIMAL");

        	this.dsIssueSlip = new Dataset();
        	this.dsIssueSlip.addColumn("CD_CORP", "string");			//법인코드
        	this.dsIssueSlip.addColumn("CD_DEPT_ACNT", "string");
        	this.dsIssueSlip.addColumn("YM_ACCOUNT", "string");			//작업년월
        	this.dsIssueSlip.addColumn("CD_DEPT_BH", "string");			//발행부서
        	this.dsIssueSlip.addColumn("CD_CURR", "string");			//화폐단위
        	this.dsIssueSlip.addColumn("ID_TRANS", "string");			//사용자 아이디
        	this.dsIssueSlip.addColumn("NO_SEQ", "BIGDECIMAL");

        	this.dsCancelSlip = new Dataset();
        	this.dsCancelSlip.addColumn("CD_DEPT_ACNT", "string");
        	this.dsCancelSlip.addColumn("YM_ACCOUNT", "string");
        	this.dsCancelSlip.addColumn("CD_CURR", "string");
        	this.dsCancelSlip.addColumn("CD_TRADE", "string");

        	this.dsCreate = new Dataset();
        	//this.dsCreate.addColumn("CD_CORP", "string");
        	this.dsCreate.addColumn("YM_ACCOUNT", "string");
        	this.dsCreate.addColumn("ID_SABUN", "string");
        	this.dsCreate.addColumn("NO_SEQ", "BIGDECIMAL");

        	this.dsSeq = new Dataset();
        	this.dsSeq.addColumn("CD_CORP", "string");
        	this.dsSeq.addColumn("CD_CURR", "string");
        	this.dsSeq.addColumn("YM_ACCOUNT", "string");
        	this.dsSeq.addColumn("YN_DOMESTIC", "string");

        	this.dsSave = new Dataset();
        	this.dsSave.addColumn("CD_CORP", "string");			//법인코드
        	this.dsSave.addColumn("YN_DOMESTIC", "string");			//
        	this.dsSave.addColumn("CD_DEPT_ACNT", "string");
        	this.dsSave.addColumn("YM_ACCOUNT", "string");			//작업년월
        	this.dsSave.addColumn("NO_SEQ", "BIGDECIMAL");
        	this.dsSave.addColumn("CD_CURR", "string");
        	this.dsSave.addColumn("AM_CONTRACT", "BIGDECIMAL");
        	this.dsSave.addColumn("AM_EXPECT_COST", "BIGDECIMAL");
        	this.dsSave.addColumn("ID_USER", "string");			//사용자 아이디

        }

        /************************************************************************
         * 버튼 이벤트
         ************************************************************************/
        /*
          *	조회 버튼
          */
        this.fnSelect = function() {

        	var tabIdx = this.tabData.tabindex;
        	var objGrd = (tabIdx == 0 ? this.dxGrid1 : this.dxGrid2);
        	var objDS = (tabIdx == 0 ? "dsList1" : "dsList2");

        	var YN_DOMESTIC = (tabIdx == 0 ? "Y" : "N");

        	if (!this.fnSelectValidate()) return false;

        	this.gfnGridBeforeSelect(objGrd);

        	this.dsSelect.clearData();
        	this.dsSelect.addRow();

        	this.dsSelect.setColumn(0,"CD_CORP", this.dsSearch.getColumn(0, "CD_CORP"));
        	this.dsSelect.setColumn(0,"CD_CURR", this.dsSearch.getColumn(0, "CD_CURR"));
        	this.dsSelect.setColumn(0,"YM_ACCOUNT", this.dsSearch.getColumn(0, "YM_ACCOUNT"));
        	this.dsSelect.setColumn(0,"YN_DOMESTIC", YN_DOMESTIC);
        	this.dsSelect.setColumn(0,"NO_SEQ", this.dsSearch.getColumn(0, "NO_SEQ"));

        	var strSvcId    = "select";
        	var strSvcType  = "grid";
        	var inProc		= "_dsProc";
        	var inData      = "select=dsSelect";
        	//var outData     = "dsList=select0";
        	var outData     = objDS + "=select0";
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

        	var tabIdx = this.tabData.tabindex;
        	var objGrd = (tabIdx == 0 ? this.dxGrid1 : this.dxGrid2);
        	var objDS = (tabIdx == 0 ? this.dsList1 : this.dsList2);

        	var YN_DOMESTIC = (tabIdx == 0 ? "Y" : "N");

        	if (!this.gfnGridValidate(objGrd)) return;

        	objGrd.updateToDataset();
        	this.dsSave.clearData();

        	for (var i = 0; i < objDS.rowcount; i++) {
        		var flag = this.gfnGetFlag(objDS, i);
        		switch(flag) {
        		case "I":
        		case "U":
        			var nrow = this.dsSave.addRow();
        			this.dsSave.setColumn(nrow, "CD_CORP", this.dsSearch.getColumn(0, "CD_CORP"));
        			this.dsSave.setColumn(nrow, "YN_DOMESTIC", YN_DOMESTIC);
        			this.dsSave.setColumn(nrow, "CD_DEPT_ACNT", objDS.getColumn(i, "CD_DEPT_ACNT"));
        			this.dsSave.setColumn(nrow, "YM_ACCOUNT", objDS.getColumn(i, "YM_ACCOUNT"));
        			this.dsSave.setColumn(nrow, "NO_SEQ", this.dsSearch.getColumn(0, "NO_SEQ"));
        			this.dsSave.setColumn(nrow, "CD_CURR", objDS.getColumn(i, "CD_CURR"));
        			this.dsSave.setColumn(nrow, "AM_CONTRACT", objDS.getColumn(i, "AM_CONTRACT"));
        			this.dsSave.setColumn(nrow, "AM_EXPECT_COST", objDS.getColumn(i, "AM_EXPECT_COST"));
        			this.dsSave.setColumn(nrow, "ID_USER", this.AuthClient.ID_USER);

        			break;
        		case "D":

        		}
        	}
        	trace("rowcount =>" + this.dsSave.rowcount );
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
        	//this.gfnExcelExport(this.dxGrid);
        	var tabIdx = this.tabData.tabindex;
        	var objGrd = (tabIdx == 0 ? this.dxGrid1 : this.dxGrid2);
        	var objDS = (tabIdx == 0 ? "dsList1" : "dsList2");

        	this.gfnExcelExport(objGrd);
        }

        /*
         *	출력 버튼
         */
        this.fnPrint = function() {
        	return false;
        }

        /************************************************************************
         * Validate
         ************************************************************************/
        /*
         *	조회 Validate
         */
        this.fnSelectValidate = function() {

        	if (this.gfnIsNull(this.ccfCD_CORP.form.CDTextBox.value)){
        		this.gfnAlert("법인코드를 입력 하세요.");
        		this.ccfCD_CORP.form.CDTextBox.setFocus();
        		return false;
        	}

        	if (this.gfnIsNull(this.dsSearch.getColumn(0,"YM_ACCOUNT"))){
        		this.gfnAlert("회계년월을 입력 하세요.");
        		this.ctclYM_ACCOUNT.setFocus();
        		return false;
        	}

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
        	var tabIdx = this.tabData.tabindex;
        	var objGrd = (tabIdx == 0 ? this.dxGrid1 : this.dxGrid2);
        	var objDS = (tabIdx == 0 ? this.dsList1 : this.dsList2);

        	if (svcID == "select") {
        		this.gfnGridAfterSelect(objGrd);
        	}else if (svcID == "selectMax") {
        	   if (errorCode == 0) {
        		trace(" fnMaxCallback svcID =>" + svcID );
        		this.ccboNO_SEQ.set_value(this.dsMaxSeq.getColumn(0, "NO_SEQ"));
        		this.FormBtns.Select.click();
        		} else {
        			this.gfnAlert(errorMsg);
        		}
        	}else if(svcID == "create" || svcID == "createKRW" || svcID == "preyearCopy" ) {
        		if (errorCode == 0) {
        			this.gfnAlert("생성되었습니다.");
        			this.FormBtns.Select.click();
        		} else {
        			this.gfnAlert(errorMsg);
        		}
        	}else if(svcID == "issueSlip" ){
        		if (errorCode == 0) {
        			this.gfnAlert("전표가 발행 되었습니다.");
        			this.FormBtns.Select.click();
        		} else {
        			this.gfnAlert(errorMsg);
        		}
        	}else if(svcID == "cancelSlip"){
        		if (errorCode == 0) {
        			this.gfnAlert("전표가 취소 되었습니다.");
        			this.FormBtns.Select.click();
        		} else {
        			this.gfnAlert(errorMsg);
        		}
        	}else if(svcID =="save") {
        		if (errorCode == 0) {
        			this.FormBtns.Select.click();
        		} else {
        			this.gfnAlert(errorMsg);
        		}
        	}

        	this.fnSetButtonEnable();
        }

        /************************************************************************
         * 코드파인드 이벤트
         ************************************************************************/
        this.fnBeforeUserDataSetParam = function(id, dsUserParam, nrow) {
        	var sCdCorp = this.dsSearch.getColumn(0, "CD_CORP");
        	if (id == "ccfCD_CORP")
        	{
        		dsUserParam.setColumn(nrow, "ID_SABUN", this.AuthClient.ID_USER);
        	}
        	else if (id == "ccfCD_DEPT_ACNT") {
        		if (this.gfnIsNull(sCdCorp)) {
        			this.gfnAlert("법인코드를 선택하세요.");
        			return false;
        		}

        		dsUserParam.setColumn(nrow, "CD_DEPT_UPPER"	, "");						//상위부서
        		dsUserParam.setColumn(nrow, "YN_SLIPACCEPT"	, "Y");						//전표발행여부
        		dsUserParam.setColumn(nrow, "CD_CORP"		, sCdCorp);					//법인코드
        		dsUserParam.setColumn(nrow, "YN_USE"		, "Y");						//사용여부
        		dsUserParam.setColumn(nrow, "GR_DEPT_ACNT"	, "02");					//현장/본사여부
        		dsUserParam.setColumn(nrow, "LEVCD_DEPT_UPPER", this.AuthClient.LEVCD_DEPT_UPPER);
        		//dsUserParam.setColumn(nrow, "ID_USER"	    , this.AuthClient.ID_USER);
        		//dsUserParam.setColumn(nrow, "GR_SEARCH"     , this.FormInfo.GR_SEARCH);
        		//dsUserParam.setColumn(nrow, "CD_DEPT"	    , this.AuthClient.CD_DEPT);

        	}

        	return true;
        };

        this.fnAfterCDTextChanged = function(id, codeFindData)
        {
        	var arrData = codeFindData;
        	switch(id) {
        		case "ccfCD_CORP":	//법인코드
        			//this.ccfCD_DEPT_ACNT.form.fnCodeFindClear();
        		break;
        	}
        }

        /************************************************************************
         * 그리드 이벤트
         ************************************************************************/
        this.fnGrid_BeforeUserDataSetParam = function(id, dsUserParam, nrow) {
        	// 그리드에서 코드파인드 id는 그리드셋팅의 코드파인드 식별ID
        	var cdCorp = this.dsSearch.getColumn(0, "CD_CORP");
        	switch(id) {
        		case "DHX_CFACNTUNIT":	//귀속부서
        			dsUserParam.setColumn(nrow, "CD_DEPT_UPPER"	, "");			//상위부서
        			dsUserParam.setColumn(nrow, "YN_SLIPACCEPT"	, "Y");			//전표발행여부
        			dsUserParam.setColumn(nrow, "CD_CORP"		, cdCorp);		//법인코드
        			dsUserParam.setColumn(nrow, "YN_USE"		, "Y");			//사용여부
        			dsUserParam.setColumn(nrow, "GR_DEPT_ACNT"	, "02");			//현장/본사여부
        			dsUserParam.setColumn(nrow, "ID_USER"	    , this.AuthClient.ID_USER);
        			dsUserParam.setColumn(nrow, "GR_SEARCH"	    , this.FormInfo.GR_SEARCH);
        			dsUserParam.setColumn(nrow, "CD_DEPT"	    , this.AuthClient.CD_DEPT);
        			dsUserParam.setColumn(nrow, "LEVCD_DEPT_UPPER", this.AuthClient.LEVCD_DEPT_UPPER);
        		break;
        	}

        	return true;
        }

        this.fnGrid_RowCellChanged = function(obj,e)
        {
        //     if ((obj.oldrow > -1 && obj.oldrow == e.row)
        // 		|| (obj.oldrow == -1 && e.oldrow != e.row)) {
        // 		this.FormBtns.SubSelect.click();
        // 		obj.oldrow = -1;
        // 	}
        };

        this.fnGrid_Celldblclick = function(obj,e)
        {
        	// 선택된 row가 있을 경우에만 팝업을 띄움
        	if (!this.gfnGridIsRow(this.dxGrid)) { return false; }

        	var param = {};

        	var no_slip = nexacro.replaceAll(this.gfnTrim(this.dsList.getColumn(e.row, "CD_TRADE")),"-","");

        	if(this.gfnIsNull(no_slip))
        	{
        		this.gfnAlert("발행된 전표가 없습니다.");
        		return false;
        	}

        	param.CD_TRADE = no_slip;
        	param.IUD_FLAG = "S";

        	this.gfnFormOpen("DHA", "DHA_ISSUESLIP", "", param);
        };



        /************************************************************************
         * 확장버튼 이벤트
         ************************************************************************/
        //자료 생성 처리
        this.fnCreateData = function (obj,e)
        {
        	var tabIdx = this.tabData.tabindex;
        	var objGrd = (tabIdx == 0 ? this.dxGrid1 : this.dxGrid2);
        	var objDS = (tabIdx == 0 ? this.dsList1 : this.dsList2);

        	if (this.gfnIsNull(this.gfnTrim(this.ccfCD_CORP.form.CDTextBox.value))) {
        		this.gfnAlert("법인코드는 필수입니다.");
        		this.ccfCD_CORP.form.CDTextBox.setFocus();
        		return;
        	}

        	if(this.gfnIsNull(this.ctclYM_ACCOUNT.form.TextBox.value)){
        		this.gfnAlert("회계년월은 필수입니다.");
        		this.ctclYM_ACCOUNT.form.TextBox.setFocus();
        		return;
        	}
        	var Ty_msg = (tabIdx == 0 ? "원화 진행률표 " : "외화 진행률표 ");

        	this.gfnConfirm(Ty_msg + "생성하시겠습니까?", function(strId, val) {
        		if(val == true){
        			this.dsCreate.clearData();
        			var nRow = this.dsCreate.addRow();

        			//처리할 데이터 담기
        			//this.dsCreate.setColumn(nRow, "CD_CORP" 	, this.ccfCD_CORP.form.CDTextBox.value);	//법인코드
        			this.dsCreate.setColumn(nRow, "YM_ACCOUNT" 	, this.dsSearch.getColumn(0, "YM_ACCOUNT"));		//회계년월
        			this.dsCreate.setColumn(nRow, "ID_SABUN"   , this.AuthClient.ID_USER);					//작업자 아이디
        			this.dsCreate.setColumn(nRow, "NO_SEQ"   ,this.dsSearch.getColumn(0, "NO_SEQ"));					//작업자 아이디

        			//var strSvcId    = "create";
        			var strSvcId    = (tabIdx == 0 ? "createKRW" : "create")
        			var strSvcType  = "save";
        			var inProc		= "_dsProc";
        			//var inData      = "create=dsCreate";
        			var inData      = strSvcId + "=dsCreate";
        			var outData     = "";
        			var strArg      = "";
        			var callBackFnc = "fnCallback";

        			this.gfnTransaction( strSvcId , 	// transaction을 구분하기 위한 svc id값
        								strSvcType , 	// transaction을 요청할 구분
        								inProc,			// Procedure 정보 Dataset 이름
        								inData , 		// 입력값으로 보낼 dataset id , a=b형태로 실제이름과 입력이름을 매칭
        								outData , 		// 처리결과값으로 받을 dataset id, a=b형태로 실제이름과 입력이름을 매칭
        								strArg, 		// 입력갑스로 보낼 arguments, strFormData="20120607"
        								callBackFnc); 	// 통신방법 정의 [생략가능]
        		}
        	});
        };

        //전표발행 처리
        this.fnIssueSlip = function (obj,e)
        {
        	var tabIdx = this.tabData.tabindex;
        	var objGrd = (tabIdx == 0 ? this.dxGrid1 : this.dxGrid2);
        	var objDS = (tabIdx == 0 ? this.dsList1 : this.dsList2);

        	//if (!this.gfnGridIsRow(this.dxGrid)) { return false; }
        	var chkCnt =  objDS.getCaseCount("CHK == 1");
        	if(chkCnt == 0) {
        		this.gfnAlert("전표발행 대상 행을 선택하세요.");
        		return;
        	}

        	var chkAmCnt =  objDS.getCaseCount("CHK == 1 && YN_VALID == 'N'");
        	if(chkAmCnt > 0) {
        		this.gfnAlert("추가계상금액이 있는 행을 선택하세요.");
        		return;
        	}

        	if (this.gfnIsNull(this.gfnTrim(this.ccfCD_CORP.form.CDTextBox.value))) {
        		this.gfnAlert("법인코드는 필수입니다.");
        		this.ccfCD_CORP.form.CDTextBox.setFocus();
        		return;
        	}

        	if(this.gfnIsNull(this.gfnTrim(this.ctclYM_ACCOUNT.form.TextBox.value))){
        		this.gfnAlert("회계년월은 필수입니다.");
        		this.ctclYM_ACCOUNT.form.TextBox.setFocus();
        		return;
        	}

        	this.gfnConfirm("전표발행 하시겠습니까?", "fnIssueSlip_callback");

        };

        //전표발행 처리 콜백
        this.fnIssueSlip_callback = function(strId, val)
        {
        	var tabIdx = this.tabData.tabindex;
        	var objGrd = (tabIdx == 0 ? this.dxGrid1 : this.dxGrid2);
        	var objDS = (tabIdx == 0 ? this.dsList1 : this.dsList2);

        	if(val == true) {
        		this.dsIssueSlip.clearData();

        		var searchKey = "";
        		var arrDir = [];
        		for(var r = 0; r < objDS.rowcount; r++) {
        			if(objDS.getColumn(r, this.ucFlag) != '#' && objDS.getColumn(r, "CHK") == 1){
        				arrDir.push(objDS.getColumn(r, "CD_DEPT_ACNT"));
        			}
        		}

        		//trace(arrDir.join(','));

        		var nRow = this.dsIssueSlip.addRow();
        		//처리할 데이터 담기
        		this.dsIssueSlip.setColumn(nRow, "CD_CORP"		, this.ccfCD_CORP.form.CDTextBox.value);
        		this.dsIssueSlip.setColumn(nRow, "CD_DEPT_ACNT"	, arrDir.join(','));
        		this.dsIssueSlip.setColumn(nRow, "YM_ACCOUNT"	, this.ctclYM_ACCOUNT.form.TextBox.value);
        		this.dsIssueSlip.setColumn(nRow, "CD_CURR"		, this.dsSearch.getColumn(0, "CD_CURR"));
        		this.dsIssueSlip.setColumn(nRow, "CD_DEPT_BH" 	, this.AuthClient.CD_DEPT);
        		this.dsIssueSlip.setColumn(nRow, "ID_TRANS" 	, this.AuthClient.ID_USER);
        		this.dsIssueSlip.setColumn(nRow, "NO_SEQ" 	, this.dsSearch.getColumn(0, "NO_SEQ"));

        		var strSvcId    = "issueSlip";
        		var strSvcType  = "savesel";
        		var inProc		= "_dsProc";
        		var inData      = "issueSlip=dsIssueSlip";
        		var outData     = "";
        		var strArg      = "";
        		var callBackFnc = "fnCallback";

        		this.gfnTransaction( strSvcId , 	// transaction을 구분하기 위한 svc id값
        							strSvcType , 	// transaction을 요청할 구분
        							inProc,			// Procedure 정보 Dataset 이름
        							inData , 		// 입력값으로 보낼 dataset id , a=b형태로 실제이름과 입력이름을 매칭
        							outData , 		// 처리결과값으로 받을 dataset id, a=b형태로 실제이름과 입력이름을 매칭
        							strArg, 		// 입력갑스로 보낼 arguments, strFormData="20120607"
        							callBackFnc); 	// 통신방법 정의 [생략가능]
        	}
        };

        //전표취소 처리
        this.fnCancelSlip = function (obj,e)
        {
        	var tabIdx = this.tabData.tabindex;
        	var objGrd = (tabIdx == 0 ? this.dxGrid1 : this.dxGrid2);
        	var objDS = (tabIdx == 0 ? this.dsList1 : this.dsList2);

        	//if (!this.gfnGridIsRow(this.dxGrid)) { return false; }
        	if(objDS.getCaseCount("CHK == '1' && "+this.ucFlag+" != '#'") == 0){
        		this.gfnAlert("체크된 항목이 없습니다.");
        		return;
        	}

        	if(objDS.findRowExpr("CHK == 1 && dataset.parent.gfnIsNull(CD_TRADE) && nx_flag != '#'") > -1){
        		this.gfnAlert("전표발행되지않은 항목이 체크되어 있습니다.");
        		return;
        	}

        	this.gfnConfirm("전표를 취소하시겠습니까?", "fnCancelSlip_callback");

        };

        this.fnCancelSlip_callback = function(strId, val)
        {
        	var tabIdx = this.tabData.tabindex;
        	var objGrd = (tabIdx == 0 ? this.dxGrid1 : this.dxGrid2);
        	var objDS = (tabIdx == 0 ? this.dsList1 : this.dsList2);

        	if(val == true) {
        		this.dsCancelSlip.clearData();

        		var arrDir = [];
        		var arrDeptDir = [];
        		for(var r = 0; r < objDS.rowcount; r++) {
        			if(objDS.getColumn(r, this.ucFlag) != '#' && objDS.getColumn(r, "CHK") == 1){
        				if(!this.gfnIsNull(objDS.getColumn(r, "CD_TRADE"))){
        					arrDir.push(objDS.getColumn(r, "CD_TRADE"));
        					arrDeptDir.push(objDS.getColumn(r, "CD_DEPT_ACNT"));
        				}
        			}
        		}

        		var nRow = this.dsCancelSlip.addRow();
        		//처리할 데이터 담기
        		this.dsCancelSlip.setColumn(nRow, "CD_DEPT_ACNT"	, arrDeptDir.join(','));
        		this.dsCancelSlip.setColumn(nRow, "YM_ACCOUNT"		, this.ctclYM_ACCOUNT.form.TextBox.value);
        		this.dsCancelSlip.setColumn(nRow, "CD_CURR"		, this.dsSearch.getColumn(0, "CD_CURR"));
        		this.dsCancelSlip.setColumn(nRow, "CD_TRADE"		, arrDir.join(','));
        		this.dsCancelSlip.setColumn(nRow, "NO_SEQ"		, this.dsSearch.getColumn(0, "NO_SEQ"));

        		var strSvcId    = "cancelSlip";
        		var strSvcType  = "save";
        		var inProc		= "_dsProc";
        		var inData      = "cancelSlip=dsCancelSlip";
        		var outData     = "";
        		var strArg      = "";
        		var callBackFnc = "fnCallback";

        		this.gfnTransaction( strSvcId , 	// transaction을 구분하기 위한 svc id값
        							strSvcType , 	// transaction을 요청할 구분
        							inProc,			// Procedure 정보 Dataset 이름
        							inData , 		// 입력값으로 보낼 dataset id , a=b형태로 실제이름과 입력이름을 매칭
        							outData , 		// 처리결과값으로 받을 dataset id, a=b형태로 실제이름과 입력이름을 매칭
        							strArg, 		// 입력갑스로 보낼 arguments, strFormData="20120607"
        							callBackFnc); 	// 통신방법 정의 [생략가능]
        	}
        };

        //전표 조회
        this.fnSearchSlip = function (obj,e)
        {
        	var tabIdx = this.tabData.tabindex;
        	var objGrd = (tabIdx == 0 ? this.dxGrid1 : this.dxGrid2);
        	var objDS = (tabIdx == 0 ? this.dsList1 : this.dsList2);

        	var CD_TRADE = objDS.getColumn(objDS.rowposition, "CD_TRADE");
        	if (this.gfnIsNull(CD_TRADE)) {
        		this.gfnAlert("전표번호는 필수입니다.");
        		return;
        	}

        	var param = {};
        	param.IUD_FLAG = "S";
        	param.CD_TRADE = CD_TRADE;
        	this.gfnFormOpen("DHA", "DHA_ISSUESLIP", "fnPopupCallBack", param, this.getOffsetWidth(), this.getOffsetHeight());
        };


        //전표발행 처리
        this.fnCancelIssueSlip = function (obj,e)
        {
        	var tabIdx = this.tabData.tabindex;
        	var objGrd = (tabIdx == 0 ? this.dxGrid1 : this.dxGrid2);
        	var objDS = (tabIdx == 0 ? this.dsList1 : this.dsList2);

        	//if (!this.gfnGridIsRow(this.dxGrid)) { return false; }
        	var chkCnt =  objDS.getCaseCount("CHK == 1");
        	if(chkCnt == 0) {
        		this.gfnAlert("전표발행 대상 행을 선택하세요.");
        		return;
        	}

        	var chkAmCnt =  objDS.getCaseCount("CHK == 1 && YN_VALID == 'N'");
        	if(chkAmCnt > 0) {
        		this.gfnAlert("추가계상금액이 있는 행을 선택하세요.");
        		return;
        	}

        	if (this.gfnIsNull(this.gfnTrim(this.ccfCD_CORP.form.CDTextBox.value))) {
        		this.gfnAlert("법인코드는 필수입니다.");
        		this.ccfCD_CORP.form.CDTextBox.setFocus();
        		return;
        	}

        	if(this.gfnIsNull(this.gfnTrim(this.ctclYM_ACCOUNT.form.TextBox.value))){
        		this.gfnAlert("회계년월은 필수입니다.");
        		this.ctclYM_ACCOUNT.form.TextBox.setFocus();
        		return;
        	}

        	this.gfnConfirm("[취소전표]발행 하시겠습니까?", "fnCancelIssueSlip_callback");

        };

        //전표발행 처리 콜백
        this.fnCancelIssueSlip_callback = function(strId, val)
        {
        	var tabIdx = this.tabData.tabindex;
        	var objGrd = (tabIdx == 0 ? this.dxGrid1 : this.dxGrid2);
        	var objDS = (tabIdx == 0 ? this.dsList1 : this.dsList2);

        	if(val == true) {
        		this.dsIssueSlip.clearData();

        		var searchKey = "";
        		var arrDir = [];
        		for(var r = 0; r < objDS.rowcount; r++) {
        			if(objDS.getColumn(r, this.ucFlag) != '#' && objDS.getColumn(r, "CHK") == 1){
        				arrDir.push(objDS.getColumn(r, "CD_DEPT_ACNT"));
        			}
        		}

        		//trace(arrDir.join(','));

        		var nRow = this.dsIssueSlip.addRow();
        		//처리할 데이터 담기
        		this.dsIssueSlip.setColumn(nRow, "CD_CORP"		, this.ccfCD_CORP.form.CDTextBox.value);
        		this.dsIssueSlip.setColumn(nRow, "CD_DEPT_ACNT"	, arrDir.join(','));
        		this.dsIssueSlip.setColumn(nRow, "YM_ACCOUNT"	, this.ctclYM_ACCOUNT.form.TextBox.value);
        		this.dsIssueSlip.setColumn(nRow, "CD_CURR"		, this.dsSearch.getColumn(0, "CD_CURR"));
        		this.dsIssueSlip.setColumn(nRow, "CD_DEPT_BH" 	, this.AuthClient.CD_DEPT);
        		this.dsIssueSlip.setColumn(nRow, "ID_TRANS" 	, this.AuthClient.ID_USER);
        		this.dsIssueSlip.setColumn(nRow, "NO_SEQ" 	, this.dsSearch.getColumn(0, "NO_SEQ"));

        		var strSvcId    = "issueSlip";
        		var strSvcType  = "save";
        		var inProc		= "_dsProc";
        		var inData      = "cancelIssueSlip=dsIssueSlip";
        		var outData     = "";
        		var strArg      = "";
        		var callBackFnc = "fnCallback";

        		this.gfnTransaction( strSvcId , 	// transaction을 구분하기 위한 svc id값
        							strSvcType , 	// transaction을 요청할 구분
        							inProc,			// Procedure 정보 Dataset 이름
        							inData , 		// 입력값으로 보낼 dataset id , a=b형태로 실제이름과 입력이름을 매칭
        							outData , 		// 처리결과값으로 받을 dataset id, a=b형태로 실제이름과 입력이름을 매칭
        							strArg, 		// 입력갑스로 보낼 arguments, strFormData="20120607"
        							callBackFnc); 	// 통신방법 정의 [생략가능]
        	}
        };

        //전표취소 처리
        this.fnCancelCancelSlip = function (obj,e)
        {
        	var tabIdx = this.tabData.tabindex;
        	var objGrd = (tabIdx == 0 ? this.dxGrid1 : this.dxGrid2);
        	var objDS = (tabIdx == 0 ? this.dsList1 : this.dsList2);

        	//if (!this.gfnGridIsRow(this.dxGrid)) { return false; }
        	if(objDS.getCaseCount("CHK == '1' && "+this.ucFlag+" != '#'") == 0){
        		this.gfnAlert("체크된 항목이 없습니다.");
        		return;
        	}

        	if(objDS.findRowExpr("CHK == 1 && dataset.parent.gfnIsNull(CD_TRADECANCEL) && nx_flag != '#'") > -1){
        		this.gfnAlert("전표발행되지않은 항목이 체크되어 있습니다.");
        		return;
        	}

        	this.gfnConfirm("[취소전표]를 취소하시겠습니까?", "fnCancelCancelSlip_callback");

        };

        this.fnCancelCancelSlip_callback = function(strId, val)
        {
        	var tabIdx = this.tabData.tabindex;
        	var objGrd = (tabIdx == 0 ? this.dxGrid1 : this.dxGrid2);
        	var objDS = (tabIdx == 0 ? this.dsList1 : this.dsList2);

        	if(val == true) {
        		this.dsCancelSlip.clearData();

        		var arrDir = [];
        		var arrDeptDir = [];
        		for(var r = 0; r < objDS.rowcount; r++) {
        			if(objDS.getColumn(r, this.ucFlag) != '#' && objDS.getColumn(r, "CHK") == 1){
        				if(!this.gfnIsNull(objDS.getColumn(r, "CD_TRADECANCEL"))){
        					arrDir.push(objDS.getColumn(r, "CD_TRADECANCEL"));
        					arrDeptDir.push(objDS.getColumn(r, "CD_DEPT_ACNT"));
        				}
        			}
        		}

        		var nRow = this.dsCancelSlip.addRow();
        		//처리할 데이터 담기
        		this.dsCancelSlip.setColumn(nRow, "CD_DEPT_ACNT"	, arrDeptDir.join(','));
        		this.dsCancelSlip.setColumn(nRow, "YM_ACCOUNT"		, this.ctclYM_ACCOUNT.form.TextBox.value);
        		this.dsCancelSlip.setColumn(nRow, "CD_CURR"		, this.dsSearch.getColumn(0, "CD_CURR"));
        		this.dsCancelSlip.setColumn(nRow, "CD_TRADE"		, arrDir.join(','));
        		this.dsCancelSlip.setColumn(nRow, "NO_SEQ"		, this.dsSearch.getColumn(0, "NO_SEQ"));

        		var strSvcId    = "cancelSlip";
        		var strSvcType  = "save";
        		var inProc		= "_dsProc";
        		var inData      = "cancelCancelSlip=dsCancelSlip";
        		var outData     = "";
        		var strArg      = "";
        		var callBackFnc = "fnCallback";

        		this.gfnTransaction( strSvcId , 	// transaction을 구분하기 위한 svc id값
        							strSvcType , 	// transaction을 요청할 구분
        							inProc,			// Procedure 정보 Dataset 이름
        							inData , 		// 입력값으로 보낼 dataset id , a=b형태로 실제이름과 입력이름을 매칭
        							outData , 		// 처리결과값으로 받을 dataset id, a=b형태로 실제이름과 입력이름을 매칭
        							strArg, 		// 입력갑스로 보낼 arguments, strFormData="20120607"
        							callBackFnc); 	// 통신방법 정의 [생략가능]
        	}
        };

        //전표 조회
        this.fnCancelSearchSlip = function (obj,e)
        {
        	var tabIdx = this.tabData.tabindex;
        	var objGrd = (tabIdx == 0 ? this.dxGrid1 : this.dxGrid2);
        	var objDS = (tabIdx == 0 ? this.dsList1 : this.dsList2);

        	var CD_TRADE = objDS.getColumn(objDS.rowposition, "CD_TRADECANCEL");
        	if (this.gfnIsNull(CD_TRADE)) {
        		this.gfnAlert("전표번호는 필수입니다.");
        		return;
        	}

        	var param = {};
        	param.IUD_FLAG = "S";
        	param.CD_TRADE = CD_TRADE;
        	this.gfnFormOpen("DHA", "DHA_ISSUESLIP", "fnPopupCallBack", param, this.getOffsetWidth(), this.getOffsetHeight());
        };

        this.fnTbbHistory = function(obj,e) {
        	// 선택된 row가 있을 경우에만 팝업을 띄움
        	if (!this.gfnGridIsRow(this.dxGrid)) { return false; }

        	var param = {};

        	var no_slip = nexacro.replaceAll(this.gfnTrim(objDS.getColumn(objDS.rowposition, "CD_TRADE")),"-","");
        	//var no_slip = objDS.getColumn(objDS.rowposition, "CD_TRADE");

        	if(no_slip == "" || this.gfnIsNull(no_slip))
        	{
        		this.gfnAlert("발행된 전표가 없습니다.");
        		return false;
        	}

        	param.CD_TRADE = no_slip;
        	param.IUD_FLAG = "S";
        	param.strYN_JUNDO_START = "";

        	this.gfnFormOpen("DHA", "DHA_ISSUESLIP", "", param);

        }

        /************************************************************************
         * 기타 이벤트
         ************************************************************************/
        this.fnSearchInit = function(obj,e) {
        	if(e == null || (e.pretext != e.posttext)) {
        		this.gfnSetFormStatus(this);
        		this.gfnGridClear(this.dxGrid1);
        		this.gfnGridClear(this.dxGrid2);
        		this.fnSetButtonEnable();
        	}
        }

        this.dsSearch_oncolumnchanged = function(obj,e)
        {
        	this.fnSearchInit();
        	this.fnSetButtonEnable();
        	if(e.oldvalue == e.newvalue) return;

        	if (e.columnid == "YM_ACCOUNT" || e.columnid == "CD_CORP") {
        		this.fnSetMaxSeq();
        	}

        };
        //그리드 로우변경 이벤트
        this.dsList_Rowposchanged = function(obj,e)
        {
        	this.fnSetButtonEnable();
        };

        this.fnSetButtonEnable = function(){

        	var bEnable = true // (this.dsSearch.getColumn(0, "CD_CURR") == "KRW") ? true : false;

        	//trace(" bEnable=>" + bEnable);

        	var tabIdx = this.tabData.tabindex;
        	var objDS = (tabIdx == 0 ? this.dsList1 : this.dsList2);

        	var CD_TRADECANCEL = objDS.getColumn(objDS.rowposition, "CD_TRADECANCEL");
        	var CD_TRADE = objDS.getColumn(objDS.rowposition, "CD_TRADE");

        	this.btnSearchSlip.set_enable(bEnable && this.gfnNvl(CD_TRADE));
        	this.btnCancelSlip.set_enable(bEnable  && this.gfnNvl(CD_TRADE));
        	this.btnIssueSlip.set_enable(bEnable && !this.gfnNvl(CD_TRADE));

        	this.btnCancelSearchSlip.set_enable(bEnable && this.gfnNvl(CD_TRADECANCEL));
        	this.btnCancelCancelSlip.set_enable(bEnable && this.gfnNvl(CD_TRADECANCEL));
        	this.btnCancelIssueSlip.set_enable(bEnable && !this.gfnNvl(CD_TRADECANCEL) && this.gfnNvl(CD_TRADE));
        }

        this.dsList_onvaluechanged = function(obj,e){

        	if(e.oldvalue == e.newvalue) return;

        	switch(e.columnid) {
        		case "AM_CONTRACT" :	// 계약금액
        		case "AM_COST" :		// 총예정공사원가
        			var amContract = nexacro.toNumber(this.dsList.getColumn(e.row, "AM_CONTRACT"),0);
        			var amCost = nexacro.toNumber(this.dsList.getColumn(e.row, "AM_COST"),0);

        			// 예정공사이익 (계약금액 - 총예정공사원가)
        			var amProfit = amContract - amCost;
        			obj.setColumn(e.row, "AM_PROFIT", amProfit);

        			// 실행이익율 ( 예정공사이익 / 계약금액)
        			var rtProfit = (amContract == 0) ? 0 : (amProfit / amContract) * 100;
        			obj.setColumn(e.row, "RT_PROFIT", nexacro.round(rtProfit, 2));
        		break;
        	}
        }

        this.divData_tabData_onchanged = function(obj,e)
        {
        	var tabIdx = this.tabData.tabindex;
        	var bEnable = (tabIdx == 0 ? false : true);
        	var nIdx = (tabIdx == 0 ? 1 : 0);
        	this.divSearch.form.ccboCD_CURR.set_index(nIdx);
        	this.divSearch.form.ccboCD_CURR.set_enable(bEnable);
            this.fnSetMaxSeq();

        };

        this.fnSetHeadColSize = function(){
        	var tabIdx = this.tabData.tabindex;
        	//var objGrd = (tabIdx == 0 ? this.dxGrid1 : this.dxGrid2);
        	var objGrd = this.dxGrid1;

        	var colIdx = this.gfnGetHeadCellIndex(objGrd, "AM_ADD")
         	objGrd.setCellProperty("head", colIdx, "text", "추가계상금액");

        	var colIdx_RT_EXCH = objGrd.getBindCellIndex("body","RT_EXCH");								// 환율
        	var colIdx_AM_CURR_MONTH_MADE = objGrd.getBindCellIndex("body","AM_CURR_MONTH_MADE");		// 당월진행기성(A)
        	var colIdx_AM_PREV_MONTH_MADE = objGrd.getBindCellIndex("body","AM_PREV_MONTH_MADE");		// 당기전월진행기성
        	var colIdx_AM_CURR_MONTH_INCOME = objGrd.getBindCellIndex("body","AM_CURR_MONTH_INCOME");	// 당월청구(B)
        	var colIdx_AM_PREV_MONTH_INCOME = objGrd.getBindCellIndex("body","AM_PREV_MONTH_INCOME");	// 당기전월청구
        	var colIdx_AM_PREV_MONTH_ADD = objGrd.getBindCellIndex("body","AM_PREV_MONTH_ADD");			// 전월추가계상금액(C)

        	objGrd.setFormatColProperty(colIdx_RT_EXCH, "size", 0);
        	objGrd.setFormatColProperty(colIdx_AM_CURR_MONTH_MADE, "size", 0);
        	objGrd.setFormatColProperty(colIdx_AM_PREV_MONTH_MADE, "size", 0);
        	objGrd.setFormatColProperty(colIdx_AM_CURR_MONTH_INCOME, "size", 0);
        	objGrd.setFormatColProperty(colIdx_AM_PREV_MONTH_INCOME, "size", 0);
        	objGrd.setFormatColProperty(colIdx_AM_PREV_MONTH_ADD, "size", 0);
        }

        // 최종차수 자료 가져오기
        this.fnSetMaxSeq = function() {

        	var tabIdx = this.tabData.tabindex;
        	var YN_DOMESTIC = (tabIdx == 0 ? "Y" : "N");

        	this.dsSeq.clearData();
        	this.dsSeq.addRow();

        	this.dsSeq.setColumn(0,"CD_CORP", this.dsSearch.getColumn(0, "CD_CORP"));
        	this.dsSeq.setColumn(0,"CD_CURR", this.dsSearch.getColumn(0, "CD_CURR"));
        	this.dsSeq.setColumn(0,"YM_ACCOUNT", this.dsSearch.getColumn(0, "YM_ACCOUNT"));
        	this.dsSeq.setColumn(0,"YN_DOMESTIC", YN_DOMESTIC);

        	var strSvcId    = "selectMax";
        	var strSvcType  = "select";
        	var inProc		= "_dsProc";
        	var inData      = "selectMax=dsSeq";
        	var outData     = "dsMaxSeq=selectMax0";
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
        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.form_onload,this);
            this.divSearch.form.ccboCD_CURR.addEventHandler("onitemchanged",this.fnSearchInit,this);
            this.divSearch.form.ccboNO_SEQ.addEventHandler("onitemchanged",this.divSearch_ccboTY_SLIP_onitemchanged,this);
            this.divData.form.tabData.addEventHandler("onchanged",this.divData_tabData_onchanged,this);
            this.dsSearch.addEventHandler("oncolumnchanged",this.dsSearch_oncolumnchanged,this);
        };
        this.loadIncludeScript("DHA_PROG.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
