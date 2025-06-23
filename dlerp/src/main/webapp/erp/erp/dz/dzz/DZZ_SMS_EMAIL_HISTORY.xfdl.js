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
            this.set_titletext("SMS/EMAIL 전송 이력 조회");
            if (Form == this.constructor)
            {
                this._setFormPosition(1280,720);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("dsList", this);
            obj._setContents("");
            this.addChild(obj.name, obj);


            obj = new Dataset("_dsProc", this);
            obj._setContents("<ColumnInfo><Column id=\"TARGET\" type=\"STRING\" size=\"256\"/><Column id=\"SP\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"TARGET\">select</Col><Col id=\"SP\">DZZPR_SMS_EMAIL_HISTORY_SELECT</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsSearch", this);
            obj._setContents("<ColumnInfo><Column id=\"CD_CORP\" type=\"STRING\" size=\"256\"/><Column id=\"DS_CORP\" type=\"STRING\" size=\"256\"/><Column id=\"FR_TRAN\" type=\"STRING\" size=\"256\"/><Column id=\"TO_TRAN\" type=\"STRING\" size=\"256\"/><Column id=\"ID_SABUN\" type=\"STRING\" size=\"256\"/><Column id=\"DS_HNAME\" type=\"STRING\" size=\"256\"/><Column id=\"TY_GUBUN\" type=\"STRING\" size=\"256\"/><Column id=\"TY_TYPE\" type=\"STRING\" size=\"256\"/><Column id=\"PARAM1\" type=\"STRING\" size=\"256\"/><Column id=\"PARAM2\" type=\"STRING\" size=\"256\"/><Column id=\"PARAM3\" type=\"STRING\" size=\"256\"/><Column id=\"PARAM4\" type=\"STRING\" size=\"256\"/><Column id=\"PARAM5\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row/></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsTY_GUBUN", this);
            obj._setContents("<ColumnInfo><Column id=\"CD_CODE\" type=\"STRING\" size=\"256\"/><Column id=\"DS_CODE\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"CD_CODE\">%</Col><Col id=\"DS_CODE\">전체</Col></Row><Row><Col id=\"CD_CODE\">S</Col><Col id=\"DS_CODE\">문자</Col></Row><Row><Col id=\"CD_CODE\">M</Col><Col id=\"DS_CODE\">메일</Col></Row></Rows>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Div("divSearch","0","0",null,"46.0","0",null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_cssclass("div_SEARCH_Bg");
            obj.set_text("");
            this.addChild(obj.name, obj);

            obj = new Static("staCD_CORP","0","10.0","66","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("1");
            obj.set_text("법인");
            obj.set_cssclass("sta_WF_SchLabelE");
            this.divSearch.addChild(obj.name, obj);

            obj = new Div("ccfCD_CORP","staCD_CORP:0.0","10.0","200","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.getSetter("CDTextWidth").set("50");
            obj.set_taborder("2");
            obj.set_url("cmm::cmmCodeFind.xfdl");
            obj.set_text("");
            obj.getSetter("CodeFindName").set("DAX_CFCORP_CODEFIND");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("staDT_TRAN","ccfCD_CORP:0.0","10.0","79.0","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("1");
            obj.set_text("전송일");
            obj.set_cssclass("sta_WF_SchLabelE");
            this.divSearch.addChild(obj.name, obj);

            obj = new Calendar("ctclDT_TRAN_FR","staDT_TRAN:0.0","10.0","105","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("4");
            obj.set_dateformat("yyyy-MM-dd");
            obj.set_editformat("yyyyMMdd");
            obj.set_autoselect("true");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("staDT_TRAN_TERM","ctclDT_TRAN_FR:0.0","10.0","30.0","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("5");
            obj.set_text("~");
            obj.set_textAlign("center");
            obj.set_cssclass("sta_WF_AC");
            this.divSearch.addChild(obj.name, obj);

            obj = new Calendar("ctclDT_TRAN_TO","staDT_TRAN_TERM:0.0","10.0","105","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("6");
            obj.set_dateformat("yyyy-MM-dd");
            obj.set_editformat("yyyyMMdd");
            obj.set_autoselect("true");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("staID_SABUN","ctclDT_TRAN_TO:0","10","66","24",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("6");
            obj.set_text("사번");
            obj.set_cssclass("sta_WF_SchLabel");
            this.divSearch.addChild(obj.name, obj);

            obj = new Div("ccfID_SABUN","staID_SABUN:0","10","200","24",null,null,null,null,null,null,this.divSearch.form);
            obj.getSetter("FitToContents").set("true");
            obj.getSetter("CDTextWidth").set("90");
            obj.set_taborder("7");
            obj.set_url("cmm::cmmCodeFind.xfdl");
            obj.set_text("");
            obj.getSetter("CodeFindName").set("DAX_CFBASEINFO_ALL");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("staTY_GUBUN","ccfID_SABUN:0","10.0","66","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("7");
            obj.set_text("구분");
            obj.set_rtl("false");
            obj.set_cssclass("sta_WF_SchLabel");
            this.divSearch.addChild(obj.name, obj);

            obj = new Combo("cboTY_GUBUN","staTY_GUBUN:0","10.0","94","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("8");
            obj.set_innerdataset("dsTY_GUBUN");
            obj.set_codecolumn("CD_CODE");
            obj.set_datacolumn("DS_CODE");
            obj.set_autoselect("true");
            obj.set_text("전체");
            obj.set_value("ALL");
            obj.set_index("0");
            this.divSearch.addChild(obj.name, obj);

            obj = new Div("divData","0","divSearch:20",null,null,"0","0",null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_cssclass("div_DATA_Bg");
            this.addChild(obj.name, obj);

            obj = new Grid("objGrid","0","0",null,null,"0","0",null,null,null,null,this.divData.form);
            obj.set_taborder("0");
            obj.set_autosizingtype("row");
            obj.set_autofittype("col");
            obj._setContents("");
            this.divData.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this
            obj = new Layout("default","",this._adjust_width,this._adjust_height,this,function(p){});
            this.addLayout(obj.name, obj);
            
            // BindItem Information
            obj = new BindItem("item0","divSearch.form.ccfCD_CORP.form.CDTextBox","value","dsSearch","CD_CORP");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item1","divSearch.form.ccfCD_CORP.form.DSTextBox","value","dsSearch","DS_CORP");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item2","divSearch.form.ctclDT_TRAN_FR","value","dsSearch","FR_TRAN");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item3","divSearch.form.ctclDT_TRAN_TO","value","dsSearch","TO_TRAN");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item4","divSearch.form.ccfID_SABUN.form.CDTextBox","value","dsSearch","ID_SABUN");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item5","divSearch.form.ccfID_SABUN.form.DSTextBox","value","dsSearch","DS_HNAME");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item6","divSearch.form.cboTY_GUBUN","value","dsSearch","TY_GUBUN");
            this.addChild(obj.name, obj);
            obj.bind();
            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {
            this._addPreloadList("fdl","cmm::cmmCodeFind.xfdl");
        };
        
        // User Script
        this.registerScript("DZZ_SMS_EMAIL_HISTORY.xfdl", function() {
        this.objApp = this.gfnGetApplication();

        this.form_onload = function(obj,e) {
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
        	this.fnInit();
        }

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
        }

        /************************************************************************
         * 변수 선언
         ************************************************************************/
        this.fnSetVariable = function() {
        	/**********  검색조건  **********/
        	this.ccfCD_CORP = this.divSearch.form.ccfCD_CORP;			//소속법인
        	this.ctclFR_TRAN =  this.divSearch.form.ctclFR_TRAN;		//조회기간_시작일자
        	this.ctclTO_TRAN = this.divSearch.form.ctclTO_TRAN;			//조회기간_종료일자
        	this.ccfID_SABUN = this.divSearch.form.ccfID_SABUN;			//사번
        	this.cboTY_GUBUN = this.divSearch.form.cboTY_GUBUN;
        	// 그리드영역
        	this.dxGrid = this.divData.form.objGrid;
        }

        /************************************************************************
         * 이벤트 설정
         ************************************************************************/
        this.fnSetEvent = function() {
        	// 그리드 초기화
        	this.gfnGridInit(this.dxGrid, this.dsList, "DZ", "DZZ_SMS_EMAIL_HISTORY");
        	this.dxGrid.ExpandUp  = "fnGridExpandUp";

        	//그리드 초기화 위한 구분자
        	this.searchReset = true;
        }

        /************************************************************************
         * 파라미터 설정
         ************************************************************************/
        this.fnSetParameter = function() {

        	// SMS/EMAIL 전송 이력 조회
        	this.dsSelect = new Dataset();
        	this.dsSelect.addColumn("CD_CORP", "string");
        	this.dsSelect.addColumn("FR_TRAN", "string");
        	this.dsSelect.addColumn("TO_TRAN", "string");
        	this.dsSelect.addColumn("ID_SABUN", "string");
        	this.dsSelect.addColumn("TY_GUBUN", "string");	// S:SMS M:EMAIL
        	this.dsSelect.addColumn("TY_TYPE", "string");	// 화면유형
        	this.dsSelect.addColumn("PARAM1", "string");	// 참고키1
        	this.dsSelect.addColumn("PARAM2", "string");	// 참고키2
        	this.dsSelect.addColumn("PARAM3", "string");	// 참고키3
        	this.dsSelect.addColumn("PARAM4", "string");	// 참고키4
        	this.dsSelect.addColumn("PARAM5", "string");	// 참고키5
        }

        /************************************************************************
         * 콤보 데이터 조회 및 설정
         ************************************************************************/
        this.fnSetCombo = function() {

        }

        /************************************************************************
         * 화면 및 검색영역 초기화
         ************************************************************************/
        this.fnInit = function() {

        	// 타화면에서 오픈시 넘어오는 파라미터 처리
        	var frame = this.getOwnerFrame();
        	this.dsSearch.setColumn(0, "CD_CORP"	, this.AuthClient.CD_CORP);
        	this.dsSearch.setColumn(0, "DS_CORP"	, this.AuthClient.DS_CORP);
        	this.dsSearch.setColumn(0, "FR_TRAN"	, this.gfnAddMonth(this.gfnGetDate(), -1).substr(0, 8));
        	this.dsSearch.setColumn(0, "TO_TRAN"	, this.gfnGetDate());
        	this.dsSearch.setColumn(0, "ID_SABUN"	, frame.ID_SABUN);		// 사번
        	this.dsSearch.setColumn(0, "DS_HNAME"	, frame.DS_HNAME);		// 성명
        	this.dsSearch.setColumn(0, "TY_GUBUN"   , frame.TY_GUBUN);		// S:SMS M:EMAIL
        	this.dsSearch.setColumn(0, "TY_TYPE"    , frame.TY_TYPE);		// 화면유형
        	this.dsSearch.setColumn(0, "PARAM1"   	, frame.PARAM1);		// 참고키1
        	this.dsSearch.setColumn(0, "PARAM2"   	, frame.PARAM2);		// 참고키2
        	this.dsSearch.setColumn(0, "PARAM3"   	, frame.PARAM3);		// 참고키3
        	this.dsSearch.setColumn(0, "PARAM4"   	, frame.PARAM4);		// 참고키4
        	this.dsSearch.setColumn(0, "PARAM5"   	, frame.PARAM5);		// 참고키5

        	this.cboTY_GUBUN.set_index(0);

        	this.fnSelect();
        }

        /************************************************************************
         * 컨트롤 이벤트
         ************************************************************************/
        /*
         * 조회 버튼
         */
        this.fnSelect = function() {
        	// 조회
        	this.dsSelect.clearData();
        	this.dsSelect.addRow();
        	this.dsSelect.setColumn(0, "CD_CORP"	, this.dsSearch.getColumn(0, "CD_CORP"));
        	this.dsSelect.setColumn(0, "FR_TRAN"	, this.dsSearch.getColumn(0, "FR_TRAN"));
        	this.dsSelect.setColumn(0, "TO_TRAN"	, this.dsSearch.getColumn(0, "TO_TRAN"));
        	this.dsSelect.setColumn(0, "ID_SABUN"	, this.dsSearch.getColumn(0, "ID_SABUN"));
        	this.dsSelect.setColumn(0, "TY_GUBUN"	, this.dsSearch.getColumn(0, "TY_GUBUN"));
        	this.dsSelect.setColumn(0, "TY_TYPE"	, this.dsSearch.getColumn(0, "TY_TYPE"));
        	this.dsSelect.setColumn(0, "PARAM1"		, this.dsSearch.getColumn(0, "PARAM1"));
        	this.dsSelect.setColumn(0, "PARAM2"		, this.dsSearch.getColumn(0, "PARAM2"));
        	this.dsSelect.setColumn(0, "PARAM3"		, this.dsSearch.getColumn(0, "PARAM3"));
        	this.dsSelect.setColumn(0, "PARAM4"		, this.dsSearch.getColumn(0, "PARAM4"));
        	this.dsSelect.setColumn(0, "PARAM5"		, this.dsSearch.getColumn(0, "PARAM5"));

        	var strSvcId    = "select";
        	var strSvcType  = "select";
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
         * 추가 버튼
         */
        this.fnAdd = function() {

        }

        /*
         * 삭제 버튼
         */
        this.fnDel = function() {

        }

        /*
         * 저장 버튼
         */
        this.fnSave = function() {

        }

        /*
         * 엑셀 버튼
         */
        this.fnExcel = function() {

        }

        /*
         * 출력 버튼
         */
        this.fnPrint = function() {

        }

        /************************************************************************
         * Validate
         ************************************************************************/
        this.fnSelectValid = function() {
        	return true;
        }

        /************************************************************************
         * 확장버튼 이벤트
         ************************************************************************/
        // 확인버튼
        this.btnOK_onclick = function(obj, e) {
        	this.getParentContext().close(false);
        }

        /************************************************************************
         * 콜백 이벤트
         ************************************************************************/
        /*
         * 기본 콜백
         */
        this.fnCallback = function(svcID, errorCode, errorMsg) {
        	if (errorCode != 0) {
        		this.gfnAlert(errorMsg);
        		return;
        	}
        }

        /************************************************************************
         * 코드파인드 이벤트
         ************************************************************************/
        this.fnBeforeUserDataSetParam = function(id, dsUserParam, nrow) {
        	return true;
        }

        this.fnAfterCDTextChanged = function(id, codeFindData) {

        }

        /************************************************************************
         * 그리드 이벤트
         ************************************************************************/
        this.fnGridBeforeUserDataSetParam = function(id, dsUserParam, nrow) {
        	return true;
        }

        this.fnGridAfterCDTextChanged = function(id, codeFindData) {

        }

        this.fnGridAfterEdit = function(obj,e) {

        }


        this.fnGridExpandUp = function(obj, e) {
         	var colnm = this.gfnGridGetBindColumnNameByIndex(obj, e.cell);
        	if (colnm == "DS_RESULT") {
        		var TY_GUBUN = this.dsList.getColumn(this.dsList.rowposition, "TY_GUBUN");
        		var DS_TITLE = this.dsList.getColumn(this.dsList.rowposition, "DS_TITLE");
        		var DS_CONTENT = this.dsList.getColumn(this.dsList.rowposition, "DS_CONTENT");

        		if (DS_CONTENT != undefined && DS_CONTENT.length > 0) {
        			if (TY_GUBUN == "SMS")
        			{
        				var param = {
        					DS_TITLE: DS_TITLE,
        					DS_CONTENT: DS_CONTENT,
        					READONLY: true,
        				}
        				this.gfnFormOpen(this.FormInfo.CD_MODULE, "DZZ_SMS_SENDER", "fnSendSMS_readonly", param);
        			}
        			else
        			{
        				var param2 = {
        					DS_TITLE: DS_TITLE,
        					DS_CONTENT: DS_CONTENT,
        					READONLY: true,
        				}
        				this.gfnFormOpen(this.FormInfo.CD_MODULE, "DZZ_EMAIL_SENDER", "fnSendSMS_readonly", param2);
        			}

        		}
        	}
        }
        /************************************************************************
         * 기타 이벤트
         ************************************************************************/
        //조회조건 변경 시 이벤트 발생
        this.dsSearch_onvaluechanged = function(obj,e)
        {
        	if( this.searchReset == true ){
        		if(e.oldvalue != e.newvalue){
        			this.gfnSetFormStatus(this);
        			this.gfnGridClear(this.dxGrid);
        		}
        	}
        };

        /************************************************************************
         * 기타 함수
         ************************************************************************/
        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.form_onload,this);
            this.divSearch.form.cboTY_GUBUN.addEventHandler("onitemchanged",this.fnitemchanged,this);
            this.dsSearch.addEventHandler("onvaluechanged",this.dsSearch_onvaluechanged,this);
        };
        this.loadIncludeScript("DZZ_SMS_EMAIL_HISTORY.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
