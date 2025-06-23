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
            this.set_titletext("시공품질관리");
            if (Form == this.constructor)
            {
                this._setFormPosition(1280,720);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("dsList", this);
            obj._setContents("<ColumnInfo><Column id=\"CD_SITE\" type=\"STRING\" size=\"256\"/><Column id=\"DS_SITE\" type=\"STRING\" size=\"256\"/><Column id=\"KEY_SEQ\" type=\"STRING\" size=\"256\"/><Column id=\"CD_CHASU\" type=\"STRING\" size=\"256\"/><Column id=\"DS_KONGSA\" type=\"STRING\" size=\"256\"/><Column id=\"AM_DOGEUB_TOT\" type=\"STRING\" size=\"256\"/><Column id=\"RT_SOCOVOL\" type=\"STRING\" size=\"256\"/><Column id=\"DS_CLIENT\" type=\"STRING\" size=\"256\"/><Column id=\"DS_GAMRI1\" type=\"STRING\" size=\"256\"/><Column id=\"CO_COMPANY\" type=\"STRING\" size=\"256\"/><Column id=\"RT_PRG\" type=\"STRING\" size=\"256\"/><Column id=\"RT_PRE\" type=\"STRING\" size=\"256\"/><Column id=\"DS_REMARK\" type=\"STRING\" size=\"256\"/><Column id=\"DS_TERM\" type=\"STRING\" size=\"256\"/><Column id=\"DT_CHECK\" type=\"STRING\" size=\"256\"/><Column id=\"DT_CONFIRM\" type=\"STRING\" size=\"256\"/><Column id=\"DS_CHECKER\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsList1", this);
            obj._setContents("");
            this.addChild(obj.name, obj);


            obj = new Dataset("_dsProc", this);
            obj._setContents("<ColumnInfo><Column id=\"TARGET\" type=\"STRING\" size=\"256\"/><Column id=\"SP\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"TARGET\">select</Col><Col id=\"SP\">DZMPR_NCR_LIST</Col></Row><Row><Col id=\"TARGET\">save</Col><Col id=\"SP\">DZMPR_QM_NCR_LIST_INSERT</Col></Row><Row><Col id=\"TARGET\">update</Col><Col id=\"SP\">DZMPR_QM_NCR_LIST_UPDATE</Col></Row><Row><Col id=\"TARGET\">delete</Col><Col id=\"SP\">DUAPR_GONGSU_MANAGER_DELETE</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsSearch", this);
            obj._setContents("<ColumnInfo><Column id=\"CD_SITE\" type=\"STRING\" size=\"256\"/><Column id=\"ID_USER\" type=\"STRING\" size=\"256\"/><Column id=\"CD_WORK\" type=\"STRING\" size=\"256\"/><Column id=\"CD_CHASU\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"CD_SITE\"/><Col id=\"ID_USER\"/><Col id=\"CD_WORK\"/><Col id=\"CD_CHASU\"/></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsCD_WORK", this);
            obj._setContents("");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsCD_CHASU", this);
            obj._setContents("");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsRequired", this);
            obj._setContents("<ColumnInfo><Column id=\"CD_FIELD\" type=\"STRING\" size=\"256\"/><Column id=\"DS_FIELD\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"CD_FIELD\">DS_KONGSA</Col><Col id=\"DS_FIELD\">공사계약명</Col></Row><Row><Col id=\"CD_FIELD\">DT_TERM</Col><Col id=\"DS_FIELD\">실행공기</Col></Row><Row><Col id=\"CD_FIELD\">DS_REMARK</Col><Col id=\"DS_FIELD\">공사개요</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsListMax", this);
            obj._setContents("<ColumnInfo><Column id=\"RT_MAX\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Div("divSearch","0","0",null,"50","4",null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_cssclass("div_SEARCH_Bg");
            obj.set_formscrolltype("none");
            this.addChild(obj.name, obj);

            obj = new Static("staCD_SITE00","0","10","100","24",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("1");
            obj.set_text("현장코드");
            obj.set_cssclass("sta_WF_SchLabelE");
            this.divSearch.addChild(obj.name, obj);

            obj = new Div("ccfCD_SITE","staCD_SITE00:0","10","250","24",null,null,null,null,null,null,this.divSearch.form);
            obj.getSetter("CodeFindName").set("DZX_CFSITE");
            obj.getSetter("CDTextWidth").set("80");
            obj.set_taborder("0");
            obj.set_url("cmm::cmmCodeFind.xfdl");
            obj.set_text("");
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
            obj = new BindItem("item4","divSearch.form.ccfCD_SITE.form.CDTextBox","value","dsSearch","CD_SITE");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item0","divData.form.tabData.tab1.form.txtDS_REMARK","value","dsList","DS_REMARK");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item1","divData.form.tabData.tab1.form.ctxtDS_CLIENT","value","dsList","DS_CLIENT");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item5","divData.form.tabData.tab1.form.ctxtDS_GAMRI1","value","dsList","DS_GAMRI1");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item6","divData.form.tabData.tab1.form.ctxtDS_KONGSA","value","dsList","DS_KONGSA");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item8","divData.form.tabData.tab1.form.ctxtRT_SOCOVOL","value","dsList","RT_SOCOVOL");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item9","divData.form.tabData.tab1.form.ctxtCO_COMPANY","value","dsList","CO_COMPANY");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item10","divData.form.tabData.tab1.form.ctxtRT_PRG","value","dsList","RT_PRG");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item11","divData.form.tabData.tab1.form.ctxtRT_PRE","value","dsList","RT_PRE");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item7","divData.form.tabData.tab1.form.ctxtAM_DOGEUB_TOT","value","dsList","AM_DOGEUB_TOT");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item12","divData.form.tabData.tab1.form.ctxtDS_TERM","value","dsList","DS_TERM");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item13","divData.form.tabData.tab1.form.ctclDT_CHECK","value","dsList","DT_CHECK");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item14","divData.form.tabData.tab1.form.ctclDT_CONFIRM","value","dsList","DT_CONFIRM");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item15","divData.form.tabData.tab1.form.ctxtDS_CHECKER","value","dsList","DS_CHECKER");
            this.addChild(obj.name, obj);
            obj.bind();
            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {
            this._addPreloadList("fdl","cmm::cmmCodeFind.xfdl");
        };
        
        // User Script
        this.registerScript("DZM_NCR_LIST.xfdl", function() {
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

        	var today = this.gfnGetDate();
        	this.dsSearch.setColumn(0, "ID_USER", this.AuthClient.USER_ID);


        	// 관리자 권한이 아니면 성명 코드파인드 수정 불가
        // 	if(this.AuthClient.CD_ROLE != "R99"){
        // 		this.ccfID_USER.set_enable(false);
        // 	}

        // 	this.fnSetCombo();
        // 	this.fnSetCheckCombo();

        };

        /************************************************************************
         * 버튼 설정 : 화면(Tab) 전환시 마다 호출
         * 서브버튼 사용 및 공통버튼 강제 제어시 여기서 처리
         ************************************************************************/
        this.fnSetButton = function() {
        	// Select, Add, Del, Save, Excel, Print
        	// SubSelect, SubAdd, SubDel, SuubSave, SubExcel
        	//this.FormBtns.Select.set_enable(false);

        }

        /************************************************************************
         * 확장 버튼 : 화면별 버튼 설정 ID, function 연결 (화면버튼관리)
         ************************************************************************/
        this.fnSetExtendButton = function() {
        // 	this.btn1 = this.gfnFormButtonAdd("EXEC_SET", "fnSet");
        // 	this.btn2 = this.gfnFormButtonAdd("EXEC_UNSET", "fnUnset");
        	//this.btn1 = this.gfnFormButtonAdd("btnRiskDtls", "fnRiskDtls");
        };

        /************************************************************************
         * 변수 선언
         ************************************************************************/
        this.fnSetVariable = function() {
        	this.ccfCD_SITE = this.divSearch.form.ccfCD_SITE;
        	this.dxGrid1= this.divData.form.objGrid;
        };

        /************************************************************************
         * 이벤트 설정
         ************************************************************************/
        this.fnSetEvent = function() {


        	// 그리드 초기화
        	this.gfnGridInit(this.dxGrid1, this.dsList, "DZ", "DZM_NCR_LIST");
        	//this.gfnGridInit(this.dxGrid2, this.dsList, "DZ", "DZM_QM_LIST_QM");

        	// 그리드 코드파인드 설정
        	this.dxGrid1.BeforeUserDataSetParam = "fnGrid_BeforeUserDataSetParam";

        	this.dxGrid1.addEventHandler("oncellclick", this.dxGrid_oncellclick, this);

        	// 그리드 onkeyup 이벤트
        	//this.dxGrid.addEventHandler("onkeyup", this.fnGrid_OnKeyUp, this);
        };

        /************************************************************************
         * 파라미터 설정
         ************************************************************************/
        this.fnSetParameter = function() {

        	this.dsSelect = new Dataset();
        	this.dsSelect.addColumn("CD_SITE", "string");

        	this.dsSelect1 = new Dataset();
        	this.dsSelect1.addColumn("CD_SITE", "string");
        	this.dsSelect1.addColumn("CD_GBN", "string");
        	this.dsSelect1.addColumn("CD_CHASU", "string");

        	this.dsSelectBe = new Dataset();
        	this.dsSelectBe.addColumn("CD_SITE", "string");
        	this.dsSelectBe.addColumn("CD_CHASU", "string");
        	this.dsSelectBe.addColumn("CD_GBN", "string");
        	this.dsSelectBe.addColumn("ID_USER", "string");
        	this.dsSelectBe.addColumn("DS_HNAME", "string");

        	this.dsSelectSub = new Dataset();
        	this.dsSelectSub.addColumn("CD_SITE", "string");
        	this.dsSelectSub.addColumn("CD_CHASU", "string");
        	this.dsSelectSub.addColumn("CD_GBN", "string");

        	this.dsInsert = new Dataset();
        	this.dsInsert.addColumn("CD_SITE", "string");
        	this.dsInsert.addColumn("CD_LV1", "string");
        	this.dsInsert.addColumn("DS_LV1", "string");
        	this.dsInsert.addColumn("CD_LV2", "string");
        	this.dsInsert.addColumn("DS_LV2", "string");
        	this.dsInsert.addColumn("CD_LV3", "string");
        	this.dsInsert.addColumn("DS_LV3", "string");
        	this.dsInsert.addColumn("NCR_DTL", "string");

        	this.dsUpdate = new Dataset();
        	this.dsUpdate.addColumn("NCR_CD", "string");
        	this.dsUpdate.addColumn("CD_LV3", "string");
        	this.dsUpdate.addColumn("DS_LV3", "string");
        	this.dsUpdate.addColumn("NCR_DTL", "string");

        	this.dsDelete = new Dataset();
        	this.dsDelete.addColumn("NCR_CD", "string");

        	this.dsCombo = new Dataset();
            this.dsCombo.addColumn("CD_SITE", "string");
            this.dsCombo.addColumn("CD_TYPE", "string");

        }

        /************************************************************************
         * 컨트롤 이벤트
         ************************************************************************/
         /*
          *	조회 버튼
          */
        this.fnSelect = function() {
        	//validation 정리 후 주석 해제
        	//if (!this.fnSelectValidate()) return false;

        	this.gfnGridBeforeSelect(this.dxGrid1);

        	var strSvcId    = "";
        	var strSvcType  = "grid";
        	var inProc		= "_dsProc";
        	var inData      = "";
        	var outData     = "";
        	var strArg      = "";
        	var callBackFnc = "fnCallback";


        	this.dsSelect.clearData();
        	this.dsSelect.addRow();
        	this.dsSelect.setColumn(0, "CD_SITE", this.dsSearch.getColumn(0, "CD_SITE"));
        	strSvcId    = "select";
        	inData      = "select=dsSelect";
        	outData     = "dsList=select0";

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
        	var listRow = this.dsList.rowposition;

        	var nrow = this.gfnGridAdd(this.dxGrid1); // top (default), bottom, current

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
        	var strSvcId    = "save";
        	var strSvcType  = "save";
        	var inProc		= "_dsProc";
        	var inData      = "save=dsInsert update=dsUpdate";
        	var outData     = "";
        	var strArg      = "";
        	var callBackFnc = "fnCallback";



         	this.dsInsert.clearData();
         	this.dsUpdate.clearData();
         	this.dsDelete.clearData();

        		// 리스트 탭
        	for (var i = 0; i < this.dsList.rowcount; i++) {
        			var flag = this.gfnGetFlag(this.dsList, i);
        			switch(flag) {
        				case "I":
        					var nrow = this.dsInsert.addRow();
        					this.dsInsert.setColumn(nrow, "CD_SITE", this.dsSearch.getColumn(0, "CD_SITE"));
        					this.dsInsert.setColumn(nrow, "CD_LV1", this.dsList.getColumn(i, "CD_LV1"));
        					this.dsInsert.setColumn(nrow, "DS_LV1", this.dsList.getColumn(i, "DS_LV1"));
        					this.dsInsert.setColumn(nrow, "CD_LV2", this.dsList.getColumn(i, "CD_LV2"));
        					this.dsInsert.setColumn(nrow, "DS_LV2", this.dsList.getColumn(i, "DS_LV2"));
        					this.dsInsert.setColumn(nrow, "CD_LV3", this.dsList.getColumn(i, "CD_LV3"));
        					this.dsInsert.setColumn(nrow, "DS_LV3", this.dsList.getColumn(i, "DS_LV3"));
        					this.dsInsert.setColumn(nrow, "NCR_DTL", this.dsList.getColumn(i, "NCR_DTL"));
        					break;

        				case "U":
        					var nrow = this.dsUpdate.addRow();
        					this.dsUpdate.setColumn(nrow, "NCR_CD", this.dsList.getColumn(i, "NCR_CD"));
        					this.dsUpdate.setColumn(nrow, "CD_LV3", this.dsList.getColumn(i, "CD_LV3"));
        					this.dsUpdate.setColumn(nrow, "DS_LV3", this.dsList.getColumn(i, "DS_LV3"));
        					this.dsInsert.setColumn(nrow, "NCR_DTL", this.dsList.getColumn(i, "NCR_DTL"));
        					break;

        				case "D":
        					var nrow = this.dsDelete.addRow();
        					this.dsDelete.setColumn(nrow, "NCR_CD", this.dsList.getColumn(i, "NCR_CD"));
        					break;
        			}
        		}




        	//if (this.dsInsert.rowcount == 0 && this.dsUpdate.rowcount == 0 && this.dsDelete.rowcount == 0) return;


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

        	if (this.gfnIsNull(this.dsSearch.getColumn(0,"DT_YYMM"))) {
        		validate = false;
        		// Alert후 실행할 처리
        		this.fnVaidateCallback = function() {
        			this.ctclDT_YYMM.form.TextBox.setFocus();
        		}
        		this.gfnAlert("년월은 반드시 입력 하셔야 합니다.", "fnVaidateCallback");
        	}else if (this.gfnIsNull(this.dsSearch.getColumn(0,"ID_USER"))) {
        		validate = false;
        		// Alert후 실행할 처리
        		this.fnVaidateCallback = function() {
        			this.ccfID_USER.form.CDTextBox.setFocus();
        		}
        		this.gfnAlert("성명은 반드시 입력 하셔야 합니다.", "fnVaidateCallback");
        	}

        	return validate;

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
        		this.gfnGridAfterSelect(this.dxGrid1);
        	}
        	else if(svcID == "save") {
        		if (errorCode == 0) {
        			this.FormBtns.Select.click();
        		} else {
        			this.gfnAlert(errorMsg);
        		}
        	}
        	else if(svcID == "save1") {
        		if (errorCode == 0) {
        			this.FormBtns.Select.click();
        		} else {
        			this.gfnAlert(errorMsg);
        		}
        	}
        }
        // 최초작성 정보 조회
        this.fnSelBe_callback = function(strID, val) {
           if(val == true) {
              this.fnSelectBe();
           }
        }
        /************************************************************************
         * 그리드 이벤트
         ************************************************************************/
        this.fnGrid_BeforeUserDataSetParam = function(id, dsUserParam, nrow) {

        	// 그리드에서 코드파인드 id는 그리드셋팅의 코드파인드 식별ID
         	if (id == "DZMPR_CODEFIND_STD1") {
         		dsUserParam.setColumn(nrow, "CD_TYPE", "SUBWORK");
         	}
         	if (id == "DZMPR_CODEFIND_STD2") {
         		dsUserParam.setColumn(nrow, "CD_TYPE", "CLASS");
         	}
         	if (id == "DZMPR_CODEFIND_STD3") {
         		dsUserParam.setColumn(nrow, "CD_TYPE", "SUBCLASS");
         	}
         	if (id == "DZX_CFDEPTCORP" || id == "DZX_CFDEPTCORP2" ) {

         		dsUserParam.setColumn(nrow, "CD_CORP", "A101");
         	}else if (id == "DZMPR_STANDARD_CODE_TREE_CODEFIND") {

        		dsUserParam.setColumn(nrow, "DT_YYYY", "2021");
        		dsUserParam.setColumn(nrow, "CD_GBN", "04");
        	}

        	return true;
        }

        /************************************************************************
         * 기타 이벤트
         ************************************************************************/
        this.dsSearch_onvaluechanged = function(obj,e)
        {
         	if(e.oldvalue != e.newvalue) {
         		this.gfnSetFormStatus(this);	// 폼상태 초기화
        // 		this.gfnGridClear(this.dxGrid1);
        //
        // 		if(e.columnid == "ID_USER"){
        // 			this.ccfNO_SEL_USER.form.fnCodeFindClear();
        //
        // 			this.fnSetCombo();
        // 		}else if(e.columnid == "CD_DEPT"){
        // 			this.ccfNO_SEL_USER.form.fnCodeFindClear();
        // 		}
         	}
        };


        this.fnSetParameter1 = function()
        {
        	this.dsSave = new Dataset();
        	this.dsSave.addColumn("ID_USER", "string");
        	this.dsSave.addColumn("CD_CHASU", "string");
        	this.dsSave.addColumn("CD_SITE", "string");
        	this.dsSave.addColumn("CD_SITE", "string");
        	this.dsSave.addColumn("CD_SITE", "string");
        	this.dsSave.addColumn("DS_SITE", "string");
        	this.dsSave.addColumn("DS_KONGSA", "string");
        	this.dsSave.addColumn("DS_TERM", "string");
        	this.dsSave.addColumn("DT_CHECK", "string");
        	this.dsSave.addColumn("DT_CONFIRM", "string");
        	this.dsSave.addColumn("DS_CHECKER", "string");
        	this.dsSave.addColumn("DS_CLIENT", "string");
        	this.dsSave.addColumn("DS_GAMRI1", "string");
        	this.dsSave.addColumn("CO_COMPANY", "string");
        	this.dsSave.addColumn("DS_REMARK", "string");
        	this.dsSave.addColumn("AM_DOGEUB_TOT", "string");
        	this.dsSave.addColumn("RT_SOCOVOL", "bigdecimal");
        	this.dsSave.addColumn("RT_PRG", "string");
        	this.dsSave.addColumn("RT_PRE", "string");
        	this.dsSave.addColumn("CD_GONGJONG", "string");
        }

        this.fnSave1 = function()
        {
        	this.dsSave.clearData();

        	var nrow = this.dsSave.addRow();
        	this.dsSave.setColumn(nrow, "ID_USER", this.AuthClient.ID_USER);
        	this.dsSave.setColumn(nrow, "CD_CHASU", this.divSearch.form.cboCD_CHASU.value);
        	this.dsSave.setColumn(nrow, "CD_SITE", this.dsList.getColumn(0, "CD_SITE"));
        	this.dsSave.setColumn(nrow, "DS_SITE", this.dsList.getColumn(0, "DS_SITE"));
        	this.dsSave.setColumn(nrow, "DS_KONGSA", this.dsList.getColumn(0, "DS_KONGSA"));
        	this.dsSave.setColumn(nrow, "DS_TERM", this.dsList.getColumn(0, "DS_TERM"));
        	this.dsSave.setColumn(nrow, "DT_CHECK", this.dsList.getColumn(0, "DT_CHECK"));
        	this.dsSave.setColumn(nrow, "DS_CHECKER", this.dsList.getColumn(0, "DS_CHECKER"));
        	this.dsSave.setColumn(nrow, "DT_CONFIRM", this.dsList.getColumn(0, "DT_CONFIRM"));
        	this.dsSave.setColumn(nrow, "DS_CLIENT", this.dsList.getColumn(0, "DS_CLIENT"));
        	this.dsSave.setColumn(nrow, "DS_GAMRI1", this.dsList.getColumn(0, "DS_GAMRI1"));
        	this.dsSave.setColumn(nrow, "CO_COMPANY", this.dsList.getColumn(0, "CO_COMPANY"));
        	this.dsSave.setColumn(nrow, "DS_REMARK", this.dsList.getColumn(0, "DS_REMARK"));
        	this.dsSave.setColumn(nrow, "AM_DOGEUB_TOT", this.dsList.getColumn(0, "AM_DOGEUB_TOT"));
        	this.dsSave.setColumn(nrow, "RT_SOCOVOL", this.dsList.getColumn(0, "RT_SOCOVOL"));
        	this.dsSave.setColumn(nrow, "RT_PRG", this.dsList.getColumn(0, "RT_PRG"));
        	this.dsSave.setColumn(nrow, "RT_PRE", this.dsList.getColumn(0, "RT_PRE"));
        	var code="";
        	for (var i = 0; i < this.dsList1.rowcount; i++) {
        		if(this.dsList1.getColumn(i, "SET_YN")=="Y"){
        			code += this.dsList1.getColumn(i, "CD_LV1")+",";
        		}
        	}
        	this.dsSave.setColumn(nrow, "CD_GONGJONG", code);
        }
        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.form_onload,this);
            this.divData.addEventHandler("onlbuttonup",this.divData_onlbuttonup,this);
            this.dsList.addEventHandler("oncolumnchanged",this.dsList_oncolumnchanged,this);
            this.dsList1.addEventHandler("oncolumnchanged",this.dsList1_oncolumnchanged,this);
            this.dsList1.addEventHandler("onrowposchanged",this.dsList1_onrowposchanged,this);
            this.dsSearch.addEventHandler("onvaluechanged",this.dsSearch_onvaluechanged,this);
        };
        this.loadIncludeScript("DZM_NCR_LIST.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
