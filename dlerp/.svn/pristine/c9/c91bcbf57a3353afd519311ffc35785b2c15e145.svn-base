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
            obj._setContents("<ColumnInfo><Column id=\"TARGET\" type=\"STRING\" size=\"256\"/><Column id=\"SP\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"TARGET\">select</Col><Col id=\"SP\">DSBPR_PERSON_DAY_SELECT  </Col></Row><Row><Col id=\"TARGET\">save</Col><Col id=\"SP\">DSBPR_PERSON_UPDATE</Col></Row><Row><Col id=\"TARGET\">updateWeekmoon</Col><Col id=\"SP\">DSBPR_TIMECARD_UPDATE_WEEKMOON</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsSearch", this);
            obj._setContents("<ColumnInfo><Column id=\"CD_SITE\" type=\"STRING\" size=\"256\"/><Column id=\"DT_WORK\" type=\"STRING\" size=\"256\"/><Column id=\"CD_HADO\" type=\"STRING\" size=\"256\"/><Column id=\"DS_HADO\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"CD_SITE\"/><Col id=\"DT_WORK\"/><Col id=\"CD_HADO\"/><Col id=\"DS_HADO\"/></Row></Rows>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Div("divSearch","0.0","10.0",null,"46.0","0",null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_cssclass("div_SEARCH_Bg");
            obj.set_formscrolltype("none");
            this.addChild(obj.name, obj);

            obj = new Static("sta00","0.0","10.0","144.0","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("0");
            obj.set_text("현장/부서 코드");
            obj.set_cssclass("sta_WF_SchLabelE");
            this.divSearch.addChild(obj.name, obj);

            obj = new Div("ccfCD_SITE","sta00:0.0","10.0","250","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.getSetter("CodeFindName").set("DZX_CFDEPTCORP");
            obj.getSetter("CDTextWidth").set("80");
            obj.set_taborder("1");
            obj.set_url("cmm::cmmCodeFind.xfdl");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("staCD_HADO","ccfCD_SITE:0.0","10.0","144.0","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("4");
            obj.set_text("작업반");
            obj.set_cssclass("sta_WF_SchLabel");
            this.divSearch.addChild(obj.name, obj);

            obj = new Div("cfSEARCH_CD_HADO","staCD_HADO:0.0","10.0","183","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.getSetter("CDTextWidth").set("80");
            obj.set_taborder("5");
            obj.set_url("cmm::cmmCodeFind.xfdl");
            obj.set_text("");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("staCD_PERIOD","cfSEARCH_CD_HADO:0.0","10.0","144.0","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("2");
            obj.set_text("일자");
            obj.set_cssclass("sta_WF_SchLabelE");
            this.divSearch.addChild(obj.name, obj);

            obj = new Calendar("ctclDT_WORK","staCD_PERIOD:0.0","10.0","105","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("3");
            obj.set_dateformat("yyyy-MM-dd");
            obj.set_editformat("yyyyMMdd");
            obj.set_autoselect("true");
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
            obj = new BindItem("item2","divSearch.form.ccfCD_SITE.form.CDTextBox","value","dsSearch","CD_SITE");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item0","divSearch.form.ctclDT_WORK","value","dsSearch","DT_WORK");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item1","divSearch.form.cfSEARCH_CD_HADO.form.CDTextBox","value","dsSearch","CD_HADO");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item3","divSearch.form.cfSEARCH_CD_HADO.form.DSTextBox","value","dsSearch","DS_HADO");
            this.addChild(obj.name, obj);
            obj.bind();
            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {
            this._addPreloadList("fdl","cmm::cmmCodeFind.xfdl");
        };
        
        // User Script
        this.registerScript("DSB_DAY_PERSON.xfdl", function() {
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

        	this.dsSearch.setColumn(0, "DT_WORK",  this.gfnGetDate());	// 일자 현재일로 셋팅
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
        	this.btnJigub = this.gfnFormButtonAdd("BTN_JIGUB", "fnJigub");
        };

        /************************************************************************
         * 변수 선언
         ************************************************************************/
        this.fnSetVariable = function() {
        	this.ccfCD_SITE = this.divSearch.form.ccfCD_SITE;
        	this.cfSEARCH_CD_HADO = this.divSearch.form.cfSEARCH_CD_HADO;
        	this.ctclDT_WORK = this.divSearch.form.ctclDT_WORK;
        	this.dxGrid = this.divData.form.objGrid;
        };

        /************************************************************************
         * 이벤트 설정
         ************************************************************************/
        this.fnSetEvent = function() {
        	this.cfSEARCH_CD_HADO.CodeFindName = "DWX_CFHADO_JIK";	// 계약번호

        	// 그리드 초기화
        	this.gfnGridInit(this.dxGrid, this.dsList, "DS", "DSB_DAY_PERSON");

        	this.ccfCD_SITE.BeforeUserDataSetParam = "fnBeforeUserDataSetParam";
        	this.cfSEARCH_CD_HADO.BeforeUserDataSetParam = "fnBeforeUserDataSetParam";
        	// 그리드 코드파인드 설정
        	this.dxGrid.BeforeUserDataSetParam = "fnGrid_BeforeUserDataSetParam";

        };

        /************************************************************************
         * 파라미터 설정
         ************************************************************************/
        this.fnSetParameter = function() {

        	this.dsSelect = new Dataset();
        	this.dsSelect.addColumn("CD_SITE", "string");
        	this.dsSelect.addColumn("DT_WORK", "string");
        	this.dsSelect.addColumn("CD_HADO", "string");

        	this.dsSave = new Dataset();
        	this.dsSave.addColumn("CD_SITE", "string");
        	this.dsSave.addColumn("DT_WORK", "string");
        	this.dsSave.addColumn("TY_CHAIYONG", "string");
        	this.dsSave.addColumn("NO_ID", "string");
        	this.dsSave.addColumn("TY_PAY", "string");
        	this.dsSave.addColumn("AM_SIGUB", "int");
        	this.dsSave.addColumn("TM_START", "string");
        	this.dsSave.addColumn("MN_START", "string");
        	this.dsSave.addColumn("TM_END", "string");
        	this.dsSave.addColumn("MN_END", "string");
        	this.dsSave.addColumn("CD_COST", "string");
        	this.dsSave.addColumn("TM_RW", "bigdecimal");
        	this.dsSave.addColumn("TM_OT", "bigdecimal");
        	this.dsSave.addColumn("TM_HW", "bigdecimal");
        	this.dsSave.addColumn("TM_NW", "bigdecimal");
        	this.dsSave.addColumn("TM_WW", "bigdecimal");
        	this.dsSave.addColumn("TM_MW", "bigdecimal");
        	this.dsSave.addColumn("RT_INSENTIVE", "bigdecimal");
        	this.dsSave.addColumn("AM_ETCPAY", "int");
        	this.dsSave.addColumn("TY_HOLIDAY", "string");
        	this.dsSave.addColumn("CD_VENDOR", "string");
        	this.dsSave.addColumn("AM_WGSIGUB", "int");
        	this.dsSave.addColumn("SEQ", "int");
        	this.dsSave.addColumn("AM_ILDANG", "int");
        	this.dsSave.addColumn("ID_INSERT", "string");
        	this.dsSave.addColumn("AM_COST1", "int");
        	this.dsSave.addColumn("AM_COST2", "int");
        	this.dsSave.addColumn("AM_COST3", "int");
        	this.dsSave.addColumn("AM_COST4", "int");
        	this.dsSave.addColumn("AM_COST5", "int");
        	this.dsSave.addColumn("AM_COST6", "int");
        	this.dsSave.addColumn("YN_PREPAY", "string");
        	this.dsSave.addColumn("YN_BREAKFAST", "string");
        	this.dsSave.addColumn("YN_LUNCH", "string");
        	this.dsSave.addColumn("YN_DINNER", "string");
        	this.dsSave.addColumn("YN_CONFIRM", "string");
        	this.dsSave.addColumn("RT_GS", "bigdecimal");
        	this.dsSave.addColumn("CDSEQ_COST", "string");
        	this.dsSave.addColumn("RT_OT_RATE", "bigdecimal");

        	this.dsUpdateWeekmoon = new Dataset();
        	this.dsUpdateWeekmoon.addColumn("CD_SITE", "string");
        	this.dsUpdateWeekmoon.addColumn("DT_WORK", "string");
        	this.dsUpdateWeekmoon.addColumn("NO_ID", "string");
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

        	this.dsSelect.setColumn(0, "CD_SITE", this.dsSearch.getColumn(0, "CD_SITE"));
        	this.dsSelect.setColumn(0, "DT_WORK", this.dsSearch.getColumn(0, "DT_WORK"));
        	this.dsSelect.setColumn(0, "CD_HADO", this.dsSearch.getColumn(0, "CD_HADO"));

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
        	var nrow = this.gfnGridAdd(this.dxGrid, "bottom"); // top (default), bottom, current
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

        	this.dsSave.clearData();
        	this.dsUpdateWeekmoon.clearData();

        	for (var i = 0; i < this.dsList.rowcount; i++) {
        		var flag = this.gfnGetFlag(this.dsList, i);
        		switch(flag) {
        			case "I":
        			case "U":
        			case "D":
        				var nrow = this.dsSave.addRow();
        				this.dsSave.setColumn(nrow, "CD_SITE", this.dsList.getColumn(i, "CD_SITE"));
        				this.dsSave.setColumn(nrow, "DT_WORK", this.dsList.getColumn(i, "DT_WORK"));
        				this.dsSave.setColumn(nrow, "TY_CHAIYONG", "");
        				this.dsSave.setColumn(nrow, "NO_ID", this.dsList.getColumn(i, "NO_ID"));
        				this.dsSave.setColumn(nrow, "TY_PAY", "시급제");
        				this.dsSave.setColumn(nrow, "AM_SIGUB", this.dsList.getColumn(i, "AM_SIGUB"));
        				this.dsSave.setColumn(nrow, "TM_START", "");
        				this.dsSave.setColumn(nrow, "MN_START", "");
        				this.dsSave.setColumn(nrow, "TM_END", "");
        				this.dsSave.setColumn(nrow, "MN_END", "");
        				this.dsSave.setColumn(nrow, "CD_COST", this.dsList.getColumn(i, "CD_COST"));
        				this.dsSave.setColumn(nrow, "TM_RW", this.dsList.getColumn(i, "TM_RW"));
        				this.dsSave.setColumn(nrow, "TM_OT", this.dsList.getColumn(i, "TM_OT"));
        				this.dsSave.setColumn(nrow, "TM_HW", 0);
        				this.dsSave.setColumn(nrow, "TM_NW", this.dsList.getColumn(i, "TM_NW"));
        				this.dsSave.setColumn(nrow, "TM_WW", 0);
        				this.dsSave.setColumn(nrow, "TM_MW", 0);
        				this.dsSave.setColumn(nrow, "RT_INSENTIVE", 0);
        				this.dsSave.setColumn(nrow, "AM_ETCPAY", this.dsList.getColumn(i, "AM_ETCPAY"));
        				this.dsSave.setColumn(nrow, "TY_HOLIDAY", "");
        				this.dsSave.setColumn(nrow, "CD_VENDOR", "");
        				this.dsSave.setColumn(nrow, "AM_WGSIGUB", 0);
        				this.dsSave.setColumn(nrow, "SEQ", 0);
        				this.dsSave.setColumn(nrow, "AM_ILDANG", 0);
        				this.dsSave.setColumn(nrow, "ID_INSERT", this.AuthClient.ID_USER);
        				this.dsSave.setColumn(nrow, "AM_COST1", 0);
        				this.dsSave.setColumn(nrow, "AM_COST2", 0);
        				this.dsSave.setColumn(nrow, "AM_COST3", 0);
        				this.dsSave.setColumn(nrow, "AM_COST4", 0);
        				this.dsSave.setColumn(nrow, "AM_COST5", 0);
        				this.dsSave.setColumn(nrow, "AM_COST6", 0);
        				this.dsSave.setColumn(nrow, "YN_PREPAY", "N");
        				this.dsSave.setColumn(nrow, "YN_BREAKFAST", "");
        				this.dsSave.setColumn(nrow, "YN_LUNCH", "");
        				this.dsSave.setColumn(nrow, "YN_DINNER", "");
        				this.dsSave.setColumn(nrow, "YN_CONFIRM", "");
        				this.dsSave.setColumn(nrow, "RT_GS", 0);
        				this.dsSave.setColumn(nrow, "CDSEQ_COST", this.dsList.getColumn(i, "CDSEQ_COST"));
        				this.dsSave.setColumn(nrow, "RT_OT_RATE", 0);

        				var WeekmoonNrow = this.dsUpdateWeekmoon.addRow();
        				this.dsUpdateWeekmoon.setColumn(WeekmoonNrow, "CD_SITE", this.dsList.getColumn(i, "CD_SITE"));
        				this.dsUpdateWeekmoon.setColumn(WeekmoonNrow, "DT_WORK", this.dsList.getColumn(i, "DT_WORK").substring(0, 6));
        				this.dsUpdateWeekmoon.setColumn(WeekmoonNrow, "NO_ID", this.dsList.getColumn(i, "NO_ID"));

        				break;
        		}
        	}

        	if (this.dsSave.rowcount == 0) return;

        	var strSvcId    = "save";
        	var strSvcType  = "save";
        	var inProc		= "_dsProc";
        	var inData      = "save=dsSave updateWeekmoon=dsUpdateWeekmoon";
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

        	if (this.gfnIsNull(this.dsSearch.getColumn(0,"CD_SITE"))) {
        		validate = false;
        		// Alert후 실행할 처리
        		this.fnVaidateCallback = function() {
        			this.ccfCD_SITE.form.CDTextBox.setFocus();
        		}
        		this.gfnAlert("현장코드는 반드시 입력 하셔야 합니다.", "fnVaidateCallback");
        	}else if (this.gfnIsNull(this.dsSearch.getColumn(0,"DT_WORK"))) {
        		validate = false;
        		// Alert후 실행할 처리
        		this.fnVaidateCallback = function() {
        			this.ctclDT_WORK.setFocus();
        		}
        		this.gfnAlert("일자는 반드시 입력 하셔야 합니다.", "fnVaidateCallback");
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
        		this.gfnGridAfterSelect(this.dxGrid);

        		// STATE 컬럼값이 'U'이면 그리드 row 상태값을 update 상태로 변환한다
        		for (var i = 0; i < this.dsList.rowcount; i++) {
        			if(this.dsList.getColumn(i,"STATE") == "U"){
        				this.dsList.setColumn(i, this.ucFlag, "U");
        				this.gfnSetFormStatus(this, "U");
        			}
        		}
        	}
        	else if(svcID == "save") {
        		if (errorCode == 0) {
        			//this.fnUpdateWeekmoon();
        			this.FormBtns.Select.click();
        		} else {
        			this.gfnAlert(errorMsg);
        		}
        	}else if(svcID == "updateWeekmoon"){
        		this.FormBtns.Select.click();
        	}
        }

        /************************************************************************
         * 코드파인드 이벤트
         ************************************************************************/

        //코드파인드의 파라미터 값을 넘겨줄때 사용하는 함수
        this.fnBeforeUserDataSetParam = function(id, dsUserParam, nrow) {
        	if (id == "ccfCD_SITE") {
        		dsUserParam.setColumn(nrow, "CD_CORP", this.objApp.gdsUserInfo.getColumn(0, "CD_CORP"));
         	} else if (id == "cfSEARCH_CD_HADO") {
        		dsUserParam.setColumn(nrow, "CD_SITE", this.dsSearch.getColumn(0, "CD_SITE"));
         	}
        	return true;
        }
        this.fnGrid_BeforeUserDataSetParam = function(id, dsUserParam, nrow) {
        	// 그리드에서 코드파인드 id는 그리드셋팅의 코드파인드 식별ID
         	//그리드 발주처 코드파인드
        	if (id == "DWX_CFCOST_ADJUST" || id == "DWX_CFCOST_BATSEL") {

        		var cd_site = this.dsSearch.getColumn(0, "CD_SITE");
        		if(this.gfnIsNull(cd_site)) {
        			this.gfnAlert("현장코드를 먼저 입력하세요.");
        			return false;
        		}

        		dsUserParam.setColumn(nrow, "CD_SITE", this.dsSearch.getColumn(0, "CD_SITE"));
        		dsUserParam.setColumn(nrow, "NO_HADOCONT", this.dsList.getColumn(this.dsList.rowposition, "CD_HADO"));
        		//dsUserParam.setColumn(nrow, "CD_STDAGG", "");
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
        		this.gfnGridClear(this.dxGrid);

        	}
        };

        // 주휴 년차 저장
        this.fnUpdateWeekmoon = function(){
        	this.dsUpdateWeekmoon.clearData();

        	for (var i = 0; i < this.dsList.rowcount; i++) {
        		var flag = this.gfnGetFlag(this.dsList, i);
        		if(flag == "I" || flag == "U"){
        			var nrow = this.dsUpdateWeekmoon.addRow();
        			this.dsUpdateWeekmoon.setColumn(nrow, "CD_SITE", this.dsList.getColumn(i, "CD_SITE"));
        			this.dsUpdateWeekmoon.setColumn(nrow, "DT_WORK", this.dsList.getColumn(i, "DT_WORK").substring(0, 6));
        			this.dsUpdateWeekmoon.setColumn(nrow, "NO_ID", this.dsList.getColumn(i, "NO_ID"));
        		}
        	}

        	this.dsUpdateWeekmoon.setColumn(0, "");

        	var strSvcId    = "updateWeekmoon";
        	var strSvcType  = "save";
        	var inProc		= "_dsProc";
        	var inData      = "updateWeekmoon=dsUpdateWeekmoon";
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


        this.fnJigub = function(){

        	var param = {};

        	var sitecd = this.dsSearch.getColumn(0, "CD_SITE");
        	var workdt = this.dsSearch.getColumn(0, "DT_WORK");
        	var sitenm = this.ccfCD_SITE.form.DSTextBox.value ;
        	var workpartynm = this.cfSEARCH_CD_HADO.form.DSTextBox.value ;
        	var dailyrptno = "" ;
        	var strReportName ="/ds/cmbd0070jl.ozr";

        	param.REPORT_NAME = strReportName;
        	param.JSONPARAM = "{\"sitecd\":\""+ sitecd +
        	               "\", \"workdt\":\"" + workdt +
        	               "\", \"sitenm\":\"" + sitenm +
        	               "\", \"workpartynm\":\"" + workpartynm +
        	               "\", \"dailyrptno\":\"" + dailyrptno +
        				   "\"}";
        	console.log(param);
        	this.gfnFormOpenNonAuth("DZU", "DZU_OZ", "", param, 900, 650);
        }
        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.form_onload,this);
            this.dsSearch.addEventHandler("onvaluechanged",this.dsSearch_onvaluechanged,this);
        };
        this.loadIncludeScript("DSB_DAY_PERSON.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
