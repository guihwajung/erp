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
            this.set_titletext("대외문서발송대장");
            if (Form == this.constructor)
            {
                this._setFormPosition(1280,720);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("dsDOCSTATUS", this);
            obj._setContents("");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsList", this);
            obj._setContents("");
            this.addChild(obj.name, obj);


            obj = new Dataset("_dsProc", this);
            obj._setContents("<ColumnInfo><Column id=\"TARGET\" type=\"STRING\" size=\"256\"/><Column id=\"SP\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"TARGET\">select</Col><Col id=\"SP\">DVAPR_DOCUMENT_LIST_SELECT</Col></Row><Row><Col id=\"TARGET\">combo</Col><Col id=\"SP\">DZXPR_COMBO_SELECT</Col></Row><Row><Col id=\"TARGET\">save</Col><Col id=\"SP\">DVAPR_DOCUMENT_LIST_SAVE</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsSearch", this);
            obj._setContents("<ColumnInfo><Column id=\"DOC_STATUS\" type=\"STRING\" size=\"256\"/><Column id=\"CD_DEPT\" type=\"STRING\" size=\"256\"/><Column id=\"DS_DEPT\" type=\"STRING\" size=\"256\"/><Column id=\"DT_START\" type=\"STRING\" size=\"256\"/><Column id=\"DT_END\" type=\"STRING\" size=\"256\"/><Column id=\"ID_USER\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row/></Rows>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Div("divSearch","0.0","10.0",null,"46.0","0",null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_cssclass("div_SEARCH_Bg");
            obj.set_formscrolltype("none");
            obj.set_text("");
            this.addChild(obj.name, obj);

            obj = new Static("staDT_START","0.0","10.0","92.0","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("3");
            obj.set_text("기준일자");
            obj.set_cssclass("sta_WF_SchLabel");
            this.divSearch.addChild(obj.name, obj);

            obj = new Div("ctclDT_START","staDT_START:0.0","10.0","80","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("6");
            obj.set_url("cmm::cmmCalMM.xfdl");
            obj.set_text("");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("staDT_START_range","ctclDT_START:0.0","10.0","30.0","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("4");
            obj.set_text("~");
            obj.set_cssclass("sta_WF_AC");
            this.divSearch.addChild(obj.name, obj);

            obj = new Div("ctclDT_END","staDT_START_range:0.0","10.0","80","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("7");
            obj.set_url("cmm::cmmCalMM.xfdl");
            obj.set_text("");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("staCD_DEPT","ctclDT_END:0.0","10.0","92.0","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("1");
            obj.set_text("발송처");
            obj.set_cssclass("sta_WF_SchLabel");
            this.divSearch.addChild(obj.name, obj);

            obj = new Div("ccfCD_DEPT","staCD_DEPT:0.0","10.0","200","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("2");
            obj.getSetter("CodeFindName").set("DAX_CFDEPT");
            obj.getSetter("CDTextWidth").set("100");
            obj.getSetter("FitToContents").set("true");
            obj.set_url("cmm::cmmCodeFind.xfdl");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("staDOCSTATUS","ccfCD_DEPT:0.0","10.0","92.0","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("0");
            obj.set_text("진행상태");
            obj.set_cssclass("sta_WF_SchLabel");
            this.divSearch.addChild(obj.name, obj);

            obj = new Combo("cboDOCSTATUS","staDOCSTATUS:0.0","10.0","100","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("5");
            obj.set_innerdataset("dsDOCSTATUS");
            obj.set_codecolumn("CD_CODE");
            obj.set_datacolumn("DS_CODE");
            obj.set_value("");
            obj.set_index("-1");
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
            obj = new BindItem("item0","divSearch.form.ccfCD_DEPT.form.CDTextBox","value","dsSearch","CD_DEPT");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item1","divSearch.form.ccfCD_DEPT.form.DSTextBox","value","dsSearch","DS_DEPT");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item4","divSearch.form.cboDOCSTATUS","value","dsSearch","DOC_STATUS");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item2","divSearch.form.ctclDT_START.form.TextBox","value","dsSearch","DT_START");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item5","divSearch.form.ctclDT_END.form.TextBox","value","dsSearch","DT_END");
            this.addChild(obj.name, obj);
            obj.bind();
            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {
            this._addPreloadList("fdl","cmm::cmmCalMM.xfdl");
            this._addPreloadList("fdl","cmm::cmmCodeFind.xfdl");
        };
        
        // User Script
        this.registerScript("DVA_DOCUMENT_LIST.xfdl", function() {
        this.objApp = this.gfnGetApplication();

        var selDateConfim = "";

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

        	if(this.FormInfo.GR_SEARCH != 1) this.dsSearch.setColumn(0, "ID_USER", this.AuthClient.ID_USER)

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
        	this.btnISSUED = this.gfnFormButtonAdd("ISSUED", "fnISSUED");	//문서번호발급
        	this.btnCANCEL = this.gfnFormButtonAdd("CANCEL", "fnCANCEL");	//발급취소
        	this.btnFILE = this.gfnFormButtonAdd("FILE", "fnFILE");	//첨부
        };

        /************************************************************************
         * 변수 선언
         ************************************************************************/
        this.fnSetVariable = function() {
        	this.dxGrid = this.divData.form.objGrid;
        	this.ccfCD_DEPT = this.divSearch.form.ccfCD_DEPT;
        	this.cboDOCSTATUS = this.divSearch.form.cboDOCSTATUS;
        };

        /************************************************************************
         * 이벤트 설정
         ************************************************************************/
        this.fnSetEvent = function() {
        	this.dsSearch.setColumn(0, "DT_START", this.gfnGetDate().substr(0,6)); //기준일자(START)
        	this.dsSearch.setColumn(0, "DT_END"  , this.gfnGetDate().substr(0,6)); //기준일자(END)

        	// 그리드 초기화
        	this.gfnGridInit(this.dxGrid, this.dsList, "DV", "DVA_DOCUMENT_LIST");
        	this.dxGrid.EnterCell = "fnGrid_EnterCell";

        	this.ccfCD_DEPT.BeforeUserDataSetParam = "fnBeforeUserDataSetParam";
        	this.dxGrid.BeforeUserDataSetParam = "fnGrid_BeforeUserDataSetParam";
        };

        /************************************************************************
         * 파라미터 설정
         ************************************************************************/
        this.fnSetParameter = function() {
        	this.dsSelect = new Dataset();
        	this.dsSelect.addColumn("DT_START", "string");
        	this.dsSelect.addColumn("DT_END", "string");
        	this.dsSelect.addColumn("CD_DEPT", "string");
        	this.dsSelect.addColumn("DOC_STATUS", "string");
        	this.dsSelect.addColumn("WRITE_ER", "string");		// 작성자/수정자/취소,발급자

        	this.dsSave = new Dataset();
        	this.dsSave.addColumn("TY_SAVE", "string");			// SaveParam
        	this.dsSave.addColumn("YM", "string");				// 년월
        	this.dsSave.addColumn("SEQ", "int");				// 순번
        	this.dsSave.addColumn("DOC_YM", "string");			// 문서번호(년월)
        	this.dsSave.addColumn("DOC_NUM", "bigint");			// 문서번호(순번)
        	this.dsSave.addColumn("SEND_DATE", "string");		// 발송일자
        	this.dsSave.addColumn("SEND_DEPT", "string");		// 발송처
        	this.dsSave.addColumn("CONTENTS", "string");		// 내용
        	this.dsSave.addColumn("RECEP_DESK", "string");		// 접수처
        	this.dsSave.addColumn("REMARK", "string");			// 비고
        	this.dsSave.addColumn("STATUS", "string");			// 진행형태
        	this.dsSave.addColumn("CANCEL_CAUSE", "string");	// 취소사유
        	this.dsSave.addColumn("WRITE_ER", "string");		// 작성자/수정자/취소,발급자
        }

        /************************************************************************
         * 컨트롤 이벤트
         ************************************************************************/
         /*
          *	조회 버튼
          */
        this.fnSetCombo = function() {
        	this.dsCombo = new Dataset();
        	this.dsCombo.addColumn("CD_SYSTEM", "string");
        	this.dsCombo.addColumn("CD_TYPE", "string");

        	this.dsCombo.addRow();
        	this.dsCombo.setColumn(0, "CD_SYSTEM", "DV");
        	this.dsCombo.setColumn(0, "CD_TYPE", "DOCSTATUS");

        	var strSvcId    = "combo";
        	var strSvcType  = "select";
        	var inProc		= "_dsProc";
        	var inData      = "combo=dsCombo";
        	var outData     = "dsDOCSTATUS=combo0";
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


        this.fnSelect = function() {
        	if (!this.fnSelectValidate()) return false;
        	this.gfnGridBeforeSelect(this.dxGrid);

        	this.dsSelect.clearData();
        	this.dsSelect.addRow();

        	var cdDept = this.dsSearch.getColumn(0, "CD_DEPT");
        	if(cdDept == undefined) cdDept = "";

        	var cdWher = this.dsSearch.getColumn(0, "ID_USER");
        	if(cdWher == undefined) cdWher = "";

        	this.dsSelect.setColumn(0, "DT_START", this.dsSearch.getColumn(0, "DT_START"));
        	this.dsSelect.setColumn(0, "DT_END", this.dsSearch.getColumn(0, "DT_END"));
        	this.dsSelect.setColumn(0, "CD_DEPT", cdDept);
        	this.dsSelect.setColumn(0, "DOC_STATUS", this.dsSearch.getColumn(0, "DOC_STATUS"));
        	this.dsSelect.setColumn(0, "WRITE_ER", cdWher);

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

        	this.dsList.setColumn(nrow, "DOC_STATUS", "N");
        	this.dsList.setColumn(nrow, "SEND_DEPT_NM", this.AuthClient.DS_DEPT);
        	this.dsList.setColumn(nrow, "WRITE_NM", this.AuthClient.DS_HNAME);
        	this.dsList.setColumn(nrow, "WRITE_YMD", this.gfnGetDate());
        }

        /*
         *	번호 발급 버튼
         */
        this.fnISSUED = function() {
            if(this.dataRowCount(this.dsList, "CHK", "1") == 0){
        	  this.gfnAlert("선택된 건이 없습니다.");
        	  return false;
        	}

        	for(var a=0; a<this.dsList.rowcount; a++){
        	    if(this.dsList.getColumn(a, "CHK") == "1"){
        		    if(this.dsList.getColumn(a, "FILE_CNT") == 0){
        				 this.gfnAlert("파일을 먼저 첨부하세요.");
        			  return false;
        			}
        		}
        	}

        	var param = {};
        	this.gfnFormOpen(this.FormInfo.CD_MODULE, "DVA_DOCUMENT_LIST_DLG", "", param, 440, 135);
        }

        this.fnIssuedProc = function(reDate) {
            this.selDateConfim = reDate;
        	for (var i = 0; i < this.dsList.rowcount; i++) {
        		if(this.dsList.getColumn(i, "CHK") != "1") continue;
        		if(this.dsList.getColumn(i, "DOC_STATUS") == "Y"){
        		   this.gfnAlert("이미 발급 완료된 건이 있습니다.");
        		   return false;
        		}else if(this.dsList.getColumn(i, "DOC_STATUS") == "C"){
        		   this.gfnAlert("이미 취소된 건이 있습니다.");
        		   return false;
        		}
        		this.dsList.setColumn(i, "nx_flag", "K");
        	}
        	this.fnSave();
        }

        /*
         *	번호 취소 버튼
         */
        this.fnCANCEL = function() {
            if(this.dataRowCount(this.dsList, "CHK", "1") == 0){
        	  this.gfnAlert("선택된 건이 없습니다.");
        	  return false;
        	}
        	this.gfnConfirm("취소하시겠습니까?", "fnCancelproc");
        }
        this.fnCancelproc = function(id, val){
        	if(val == false) return;
        	for (var i = 0; i < this.dsList.rowcount; i++) {
        		if(this.dsList.getColumn(i, "CHK") != "1") continue;
        		if(this.dsList.getColumn(i, "DOC_STATUS") == "N"){
        		   this.gfnAlert("작성중인 건이 있습니다.");
        		   return false;
        		}else if(this.dsList.getColumn(i, "DOC_STATUS") == "C"){
        		   this.gfnAlert("이미 취소된 건이 있습니다.");
        		   return false;
        		}
        		this.dsList.setColumn(i, "nx_flag", "C");
        	}
        	this.fnSave();
        }

        /*
         *	삭제 버튼
         */
        this.fnDel = function() {
            if(this.dataRowCount(this.dsList, "CHK", "1") == 0){
        	  this.gfnAlert("선택된 건이 없습니다.");
        	  return false;
        	}
        	this.gfnConfirm("삭제하시겠습니까?", "fnDelproc");
        }
        this.fnDelproc = function(id, val){
        	if(val == false) return;
        	for (var i = 0; i < this.dsList.rowcount; i++) {
        		if(this.dsList.getColumn(i, "CHK") != "1") continue;
        		if(this.dsList.getColumn(i, "DOC_STATUS") == "Y"){
        		   this.gfnAlert("이미 발급 완료된 건 입니다.");
        		   return false;
        		}else if(this.dsList.getColumn(i, "DOC_STATUS") == "C"){
        		   this.gfnAlert("이미 취소된 건 입니다.");
        		   return false;
        		}
        		this.dsList.setColumn(i, "nx_flag", "D");
        	}
        	this.fnSave();
        }

        this.fnChkUpdate = function(){
            for (var i = 0; i < this.dsList.rowcount; i++) {
        		if(this.dsList.getColumn(i, "CHK") != "1") continue;
        		if(this.dsList.getColumn(i, "DOC_STATUS") == "Y"){
        		   this.gfnAlert("이미 발급 완료된 건 입니다.");
        		   return false;
        		}else if(this.dsList.getColumn(i, "DOC_STATUS") == "C"){
        		   this.gfnAlert("이미 취소된 건 입니다.");
        		   return false;
        		}
        	}
        }

        /*
         *	저장 버튼
         */
        this.fnSave = function() {

        // 그리드 필수항목 체크
        	if (!this.gfnGridValidate(this.dxGrid)) return false;
        	this.dxGrid.updateToDataset();
        	this.dsSave.clearData();
        	for (var i = 0; i < this.dsList.rowcount; i++) {
        		var flag = this.gfnGetFlag(this.dsList, i);
        		switch(flag) {
        			case "I":
        				var nrow = this.dsSave.addRow();
        				this.dsSave.setColumn(nrow, "TY_SAVE", flag);
        				this.dsSave.setColumn(nrow, "SEND_DATE", this.dsList.getColumn(i, "SEND_DATE"));
        				this.dsSave.setColumn(nrow, "SEND_DEPT", this.dsList.getColumn(i, "SEND_DEPT"));
        				this.dsSave.setColumn(nrow, "CONTENTS", this.dsList.getColumn(i, "CONTENTS"));
        				this.dsSave.setColumn(nrow, "RECEP_DESK", this.dsList.getColumn(i, "RECEP_DESK"));
        				this.dsSave.setColumn(nrow, "REMARK", this.dsList.getColumn(i, "REMARK"));
        				this.dsSave.setColumn(nrow, "WRITE_ER", this.AuthClient.ID_USER);
        				break;
        			case "U":
        			    if(!this.fnChkUpdate()) return;
        				var nrow = this.dsSave.addRow();
        				this.dsSave.setColumn(nrow, "TY_SAVE", flag);
        				this.dsSave.setColumn(nrow, "YM", this.dsList.getColumn(i, "YM"));
        				this.dsSave.setColumn(nrow, "SEQ", this.dsList.getColumn(i, "SEQ"));
        				this.dsSave.setColumn(nrow, "SEND_DATE", this.dsList.getColumn(i, "SEND_DATE"));
        				this.dsSave.setColumn(nrow, "SEND_DEPT", this.dsList.getColumn(i, "SEND_DEPT"));
        				this.dsSave.setColumn(nrow, "CONTENTS", this.dsList.getColumn(i, "CONTENTS"));
        				this.dsSave.setColumn(nrow, "RECEP_DESK", this.dsList.getColumn(i, "RECEP_DESK"));
        				this.dsSave.setColumn(nrow, "REMARK", this.dsList.getColumn(i, "REMARK"));
        				this.dsSave.setColumn(nrow, "WRITE_ER", this.AuthClient.ID_USER);
        				break;
        			case "K": //문서번호 발급
        			    var nrow = this.dsSave.addRow();
        				this.dsSave.setColumn(nrow, "TY_SAVE", "K");
        				this.dsSave.setColumn(nrow, "YM", this.dsList.getColumn(i, "YM"));
        				this.dsSave.setColumn(nrow, "SEQ", this.dsList.getColumn(i, "SEQ"));
        				this.dsSave.setColumn(nrow, "DOC_YM", this.selDateConfim);
        				this.dsSave.setColumn(nrow, "WRITE_ER", this.AuthClient.ID_USER);
        				break;
        			case "C": //문서번호 취소
        			    var nrow = this.dsSave.addRow();
        				this.dsSave.setColumn(nrow, "TY_SAVE", "C");
        				this.dsSave.setColumn(nrow, "YM", this.dsList.getColumn(i, "YM"));
        				this.dsSave.setColumn(nrow, "SEQ", this.dsList.getColumn(i, "SEQ"));
        				this.dsSave.setColumn(nrow, "CANCEL_CAUSE", this.dsList.getColumn(i, "CANCEL_CAUSE"));
        				this.dsSave.setColumn(nrow, "WRITE_ER", this.AuthClient.ID_USER);
        				break;
        			case "D":
        				var nrow = this.dsSave.addRow();
        				this.dsSave.setColumn(nrow, "TY_SAVE", flag);
        				this.dsSave.setColumn(nrow, "YM", this.dsList.getColumn(i, "YM"));
        				this.dsSave.setColumn(nrow, "SEQ", this.dsList.getColumn(i, "SEQ"));
        				break;
        		}
        	}

        	var strSvcId    = "save";
        	var strSvcType  = "save";
        	var inProc		= "_dsProc";
        	var inData      = "save=dsSave";
        	var outData     = "";
        	var strArg      = "";
        	var callBackFnc = "fnCallback";

        	this.gfnTransaction(strSvcId , 	// transaction을 구분하기 위한 svc id값
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
        this.fnCallback = function(svcID, errorCode, errorMsg)
        {
        	if (svcID == "select") {
        		this.gfnGridAfterSelect(this.dxGrid);
        	}else if(svcID == "save"){
        		this.FormBtns.Select.click();
        	}
        	else if(svcID == "combo"){
        		this.cboDOCSTATUS.set_index(0);
        	}
        }

        /************************************************************************
         * 코드파인드 이벤트
         ************************************************************************/
        this.fnBeforeUserDataSetParam = function(id, dsUserParam, nrow) {
        	if (id = "DAX_CFDEPT") {
        		dsUserParam.setColumn(nrow, "GR_SEARCH", "");
        		dsUserParam.setColumn(nrow, "CD_DEPT", this.AuthClient.CD_DEPT);
        		dsUserParam.setColumn(nrow, "CD_CORP", this.AuthClient.CD_CORP);
        		dsUserParam.setColumn(nrow, "ID_USER", this.AuthClient.ID_USER);
        	}
        	return true;
        }

        this.fnGrid_AfterCDTextChanged = function(id, codeFindData) {
        	return true;
        };
        /************************************************************************
         * 그리드 이벤트
         ************************************************************************/
         this.fnGrid_BeforeUserDataSetParam = function(id, dsUserParam, nrow) {
        	// 사원번호
        	if(id = "DAX_CFBASEINFO_ALL") {
        		dsUserParam.setColumn(nrow, "CD_DEPT", this.AuthClient.CD_DEPT);
        		dsUserParam.setColumn(nrow, "CD_CORP", this.dsSearch.getColumn(0, "CD_CORP"));
        		dsUserParam.setColumn(nrow, "GR_SEARCH", this.FormInfo.GR_SEARCH);
        		dsUserParam.setColumn(nrow, "YN_CORP", "N");
        		dsUserParam.setColumn(nrow, "TY_RETIRE", "%");
        	}

        	// 부서코드
        	if(id = "DAX_CFDEPT") {
        		dsUserParam.setColumn(nrow, "GR_SEARCH", "");
        		dsUserParam.setColumn(nrow, "CD_DEPT", this.AuthClient.CD_DEPT);
        		dsUserParam.setColumn(nrow, "CD_CORP", this.AuthClient.CD_CORP);
        		dsUserParam.setColumn(nrow, "ID_USER", this.AuthClient.ID_USER);
        	}

        	return true;
        };

        // 셀 수정가능 여부 (반드시 EnterCell에서 처리할것)
        this.fnGrid_EnterCell = function(obj, row, cell) {
        	var colnm = this.gfnGridGetBindColumnNameByIndex(obj, cell);
        	var rowFlag = this.gfnGetFlag(this.dsList, row);

        	// 공통 > Setting > 그리드정보 에서 셋팅한 내용 우선
        	nGrdSpcRow = this.dsGridSpec.findRow("DS_FIELD", colnm);

        	if(this.dsGridSpec.getColumn(nGrdSpcRow, "YN_READONLY") == "Y"){
        		return false;
        	}

        	trace("GR_SEARCH====> " + this.FormInfo.GR_SEARCH);

        	if(this.dsList.getColumn(row, "DOC_STATUS") != "N"){
        	    if(this.FormInfo.GR_SEARCH == 1){
        		    return true;
        	    }else{
        		    return false;
        		}
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

        this.dataRowCount = function(objGrid, colNm, notVal){
            var cnt = 0;
        	for (var i = 0; i < objGrid.rowcount; i++) {
        		if(objGrid.getColumn(i, colNm) != notVal) continue;
                else cnt++
        	}
            return cnt;
        }

        this.fnFILE = function(){

            if(this.dsList.getColumn(this.dxGrid.currentrow, "SEQ") == ""){
        		this.gfnAlert("선택된 건이 없습니다.");
        		return;
        	}

        	var param = {};
        	param.YEAR = this.dsList.getColumn(this.dxGrid.currentrow, "YM");
        	param.NO = this.dsList.getColumn(this.dxGrid.currentrow, "SEQ");
        	param.GBN = "RG10";
        	param.TARGET_PROG = "DVA_DOCUMENT_LIST";
        	param.TARGET_NAME = "문서관리 - 문서번호 관리 대장";

        	if(this.dsList.getColumn(this.dxGrid.currentrow, "DOC_STATUS") == "Y" ||
        	   this.dsList.getColumn(this.dxGrid.currentrow, "DOC_STATUS") == "C" ){
        	     param.IS_READONLY = true;
        	}else{
        	     param.IS_READONLY = false;
        	}

        	this.gfnFormOpen("DVA", "DVA_MULTI_FILE_EXPLORER", "fnFileCallBack", param, 1000, 600);
        };

        this.fnFileCallBack = function(){
        	this.FormBtns.Select.click();
        };
        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.form_onload,this);
            this.divSearch.form.staDT_START.addEventHandler("onclick",this.divSearch_staDT_START_onclick,this);
            this.divSearch.form.staCD_DEPT.addEventHandler("onclick",this.divSearch_staCD_ACNTUNIT_onclick,this);
            this.divSearch.form.staDOCSTATUS.addEventHandler("onclick",this.divSearch_sta00_onclick,this);
        };
        this.loadIncludeScript("DVA_DOCUMENT_LIST.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
