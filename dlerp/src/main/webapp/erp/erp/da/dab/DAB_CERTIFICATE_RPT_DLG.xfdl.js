(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("DAA_BASE_PERSCARD_DLG");
            this.set_titletext("증명서 신청자현황");
            if (Form == this.constructor)
            {
                this._setFormPosition(339,99);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("dsList", this);
            obj._setContents("<ColumnInfo><Column id=\"TY_ORDER\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row/></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("_dsProc", this);
            obj._setContents("<ColumnInfo><Column id=\"TARGET\" type=\"STRING\" size=\"256\"/><Column id=\"SP\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"TARGET\">select</Col><Col id=\"SP\">DAAPR_CERTIFICATE_SELECT</Col></Row><Row><Col id=\"TARGET\">report</Col><Col id=\"SP\">DAAPR_CERTIFICATE_RPT</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsTY_ORDER", this);
            obj._setContents("<ColumnInfo><Column id=\"CODE\" type=\"STRING\" size=\"256\"/><Column id=\"VALUE\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"CODE\">2</Col><Col id=\"VALUE\">내역</Col></Row><Row><Col id=\"CODE\">1</Col><Col id=\"VALUE\">집계</Col></Row></Rows>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Div("divData","0","0",null,null,"0","0",null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_cssclass("div_DATA_Bg");
            obj.set_text("");
            this.addChild(obj.name, obj);

            obj = new Static("staTITLE","0","-6",null,"30","6",null,null,null,null,null,this.divData.form);
            obj.set_taborder("0");
            obj.set_text("증명서 신청자 현황");
            obj.set_cssclass("sta_TITLE_Bg");
            obj.set_textAlign("left");
            this.divData.addChild(obj.name, obj);

            obj = new Static("staTY_ORDER","0","staTITLE:5","80","30",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("2");
            obj.set_text("출력구분");
            obj.set_cssclass("sta_WF_tablelabel");
            this.divData.addChild(obj.name, obj);

            obj = new Static("staTY_ORDER_bg","staTY_ORDER:-1","staTY_ORDER:-30","260","30",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("3");
            obj.set_cssclass("sta_WF_tablebg");
            obj.set_text("");
            this.divData.addChild(obj.name, obj);

            obj = new Radio("rdoTY_ORDER","staTY_ORDER:5","staTY_ORDER:-30","120","30",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("4");
            obj.set_innerdataset("dsTY_ORDER");
            obj.set_codecolumn("CODE");
            obj.set_datacolumn("VALUE");
            obj.set_direction("vertical");
            obj.set_value("");
            obj.set_index("0");
            this.divData.addChild(obj.name, obj);

            obj = new Div("divBtns","100","staTY_ORDER:10","130","30",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("1");
            this.divData.addChild(obj.name, obj);

            obj = new Button("btnOK","0","0","60","30",null,null,null,null,null,null,this.divData.form.divBtns.form);
            obj.set_taborder("16");
            obj.set_text("확인");
            this.divData.form.divBtns.addChild(obj.name, obj);

            obj = new Button("btnCANCLE","btnOK:10","0","60","30",null,null,null,null,null,null,this.divData.form.divBtns.form);
            obj.set_taborder("17");
            obj.set_text("취소");
            this.divData.form.divBtns.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this
            obj = new Layout("default","",this._adjust_width,this._adjust_height,this,function(p){});
            this.addLayout(obj.name, obj);
            
            // BindItem Information
            obj = new BindItem("item10","rdoTY_ORDER","value","dsList","TY_ORDER");
            this.addChild(obj.name, obj);
            obj.bind();
            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script
        this.registerScript("DAB_CERTIFICATE_RPT_DLG.xfdl", function() {
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
        	this.rdoTY_ORDER = this.divData.form.rdoTY_ORDER;	// 출력구분
        };

        /************************************************************************
         * 이벤트 설정
         ************************************************************************/
        this.fnSetEvent = function() {

        }

        /************************************************************************
         * 파라미터 설정
         ************************************************************************/
        this.fnSetParameter = function() {
        	// 내역 조회
        	this.dsSelect = new Dataset();
        	this.dsSelect.addColumn("CD_CORP", "string");
        	this.dsSelect.addColumn("CD_DEPT", "string");
        	this.dsSelect.addColumn("ID_SABUN", "string");
        	this.dsSelect.addColumn("TY_CERTIFICATE", "string");
        	this.dsSelect.addColumn("YN_APPROVE", "string");
        	this.dsSelect.addColumn("DT_SINCHUNG_FR", "string");
        	this.dsSelect.addColumn("DT_SINCHUNG_TO", "string");
        	this.dsSelect.addColumn("GR_SEARCH", "string");
        	this.dsSelect.addColumn("GR_DEPT", "string");
        	this.dsSelect.addColumn("ID_LOGIN", "string");

        	// 집계 조회
        	this.dsRpt = new Dataset();
        	this.dsRpt.addColumn("DT_SINCHUNG_FR", "string");
        	this.dsRpt.addColumn("DT_SINCHUNG_TO", "string");
        	this.dsRpt.addColumn("ID_LOGIN", "string");
        }

        /************************************************************************
         * 화면 및 검색영역 초기화
         ************************************************************************/
        this.fnInit = function() {
        	this.rdoTY_ORDER.set_value("2");
        }

        /************************************************************************
         * 컨트롤 이벤트
         ************************************************************************/
        /*
         * 조회 버튼
         */
        this.fnSelect = function() {

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
        	this.gfnExcelExport(this.dxGrid);
        }

        /*
         * 출력 버튼
         */
        this.fnPrint = function() {
        	var sTY_ORDER = this.rdoTY_ORDER.value;
        	if (sTY_ORDER == "2") {
        		// 내역
        		this.dsSelect.clearData();
        		this.dsSelect.addRow();
        		this.dsSelect.setColumn(0, "CD_CORP"       , this.getOwnerFrame().CD_CORP);
        		this.dsSelect.setColumn(0, "TY_CERTIFICATE", this.getOwnerFrame().TY_CERTIFICATE);
        		this.dsSelect.setColumn(0, "YN_APPROVE"    , this.getOwnerFrame().YN_APPROVE);
        		this.dsSelect.setColumn(0, "ID_SABUN"      , this.getOwnerFrame().ID_SABUN);
        		this.dsSelect.setColumn(0, "CD_DEPT"       , this.getOwnerFrame().CD_DEPT);
        		this.dsSelect.setColumn(0, "DT_SINCHUNG_FR", this.getOwnerFrame().DT_SINCHUNG_FR);
        		this.dsSelect.setColumn(0, "DT_SINCHUNG_TO", this.getOwnerFrame().DT_SINCHUNG_TO);
        		this.dsSelect.setColumn(0, "GR_SEARCH"     , this.FormInfo.GR_SEARCH);
        		this.dsSelect.setColumn(0, "GR_DEPT"       , this.AuthClient.CD_DEPT);
        		this.dsSelect.setColumn(0, "ID_LOGIN"      , this.AuthClient.ID_USER);

        		var inProc		= "_dsProc";
        		var inParam 	= "";
        		var inData      = "select=dsSelect";
        		var reportpath  = "/da/daa/DAA_CERTIFICATE_2.ozr";

        		gfnOpenReport(this, reportpath, inProc, inParam, inData);
        	} else {
        		// 집계
        		this.dsRpt.clearData();
        		this.dsRpt.addRow();
        		this.dsRpt.setColumn(0, "DT_SINCHUNG_FR", this.getOwnerFrame().DT_SINCHUNG_FR);
        		this.dsRpt.setColumn(0, "DT_SINCHUNG_TO", this.getOwnerFrame().DT_SINCHUNG_TO);
        		this.dsRpt.setColumn(0, "ID_LOGIN"      , this.AuthClient.ID_USER);

        		var inProc		= "_dsProc";
        		var inParam 	= "";
        		var inData      = "report=dsRpt";
        		var reportpath  = "/da/daa/DAA_CERTIFICATE.ozr";

        		gfnOpenReport(this, reportpath, inProc, inParam, inData);
        	}
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
        // 확인 버튼
        this.btnOK_onclick = function(obj, e) {
        	this.fnPrint();
        }

        // 취소 버튼
        this.btnCANCLE_onclick = function(obj, e) {
        	this.getParentContext().close(false);
        }

        /************************************************************************
         * 콜백 이벤트
         ************************************************************************/

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

        /************************************************************************
         * 기타 이벤트
         ************************************************************************/

        /************************************************************************
         * 기타 함수
         ************************************************************************/



































        /************************************************************************
         * Validate
         ************************************************************************/


        /************************************************************************
         * 코드파인드 이벤트
         ************************************************************************/


        /************************************************************************
         * 콜백 이벤트
         ************************************************************************/


        this.dsList_onvaluechanged = function(obj,e)
        {
        	var strColid = e.columnid;
        	if(e.oldvalue != e.newvalue) {
        	}
        };

        /************************************************************************
         * 기타 이벤트
         ************************************************************************/

        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.form_onload,this);
            this.divData.form.divBtns.form.btnOK.addEventHandler("onclick",this.btnOK_onclick,this);
            this.divData.form.divBtns.form.btnCANCLE.addEventHandler("onclick",this.btnCANCLE_onclick,this);
            this.dsList.addEventHandler("onvaluechanged",this.dsList_onvaluechanged,this);
        };
        this.loadIncludeScript("DAB_CERTIFICATE_RPT_DLG.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
