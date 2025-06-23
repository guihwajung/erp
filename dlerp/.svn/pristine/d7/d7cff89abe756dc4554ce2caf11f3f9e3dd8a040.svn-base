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
            this.set_titletext("공조대출 상환");
            this.getSetter("maxwidth").set("434");
            this.getSetter("maxheight").set("213");
            if (Form == this.constructor)
            {
                this._setFormPosition(393,138);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("dsList", this);
            obj._setContents("<ColumnInfo><Column id=\"CD_CORP\" type=\"STRING\" size=\"256\"/><Column id=\"ID_SABUN\" type=\"STRING\" size=\"256\"/><Column id=\"ID_PERSON\" type=\"STRING\" size=\"256\"/><Column id=\"CD_LOAN\" type=\"STRING\" size=\"256\"/><Column id=\"NO_SEQ\" type=\"INT\" size=\"256\"/><Column id=\"DT_REPAY\" type=\"STRING\" size=\"256\"/><Column id=\"TY_REPAY\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"DT_REPAY\"/><Col id=\"TY_REPAY\"/><Col id=\"CD_CORP\"/><Col id=\"ID_SABUN\"/><Col id=\"CD_LOAN\"/><Col id=\"NO_SEQ\"/></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("_dsProc", this);
            obj._setContents("<ColumnInfo><Column id=\"TARGET\" type=\"STRING\" size=\"256\"/><Column id=\"SP\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"TARGET\">repay</Col><Col id=\"SP\">DABPR_LOAN_REPAY</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsTY_REPAY", this);
            obj._setContents("<ColumnInfo><Column id=\"CODE\" type=\"STRING\" size=\"256\"/><Column id=\"VALUE\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"CODE\">1</Col><Col id=\"VALUE\">재직</Col></Row><Row><Col id=\"CODE\">2</Col><Col id=\"VALUE\">퇴직(급여공제)</Col></Row></Rows>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Static("staTitle","0","-10","359","35",null,null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_text("상환방법");
            obj.set_cssclass("sta_TITLE_Bg");
            obj.set_textAlign("left");
            this.addChild(obj.name, obj);

            obj = new Div("divData","0","staTitle:0",null,"79","0",null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_cssclass("div_DATA_Bg");
            this.addChild(obj.name, obj);

            obj = new Static("staDtRepay","0","0","100","34",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("2");
            obj.set_cssclass("sta_WF_tablelabelTE");
            obj.set_text("적용일");
            this.divData.addChild(obj.name, obj);

            obj = new Static("staDtRepayBg","staDtRepay:-1","0",null,"34","0",null,null,null,null,null,this.divData.form);
            obj.set_taborder("3");
            obj.set_cssclass("sta_WF_tablebgT");
            obj.set_textAlign("right");
            this.divData.addChild(obj.name, obj);

            obj = new Static("staTyRepay","0","33","100","34",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("4");
            obj.set_cssclass("sta_WF_tablelabelE");
            obj.set_text("구분");
            this.divData.addChild(obj.name, obj);

            obj = new Static("staTyRepayBg","staTyRepay:-1","33",null,"34","0",null,null,null,null,null,this.divData.form);
            obj.set_taborder("5");
            obj.set_cssclass("sta_WF_tablebg");
            obj.set_textAlign("right");
            obj.set_text("");
            this.divData.addChild(obj.name, obj);

            obj = new Radio("rdoTY_REPAY","staTyRepay:4","38","196","24",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("1");
            obj.set_codecolumn("CODE");
            obj.set_datacolumn("VALUE");
            obj.set_direction("vertical");
            obj.set_fittocontents("width");
            obj.set_innerdataset("dsTY_REPAY");
            obj.set_text("재직");
            obj.set_value("1");
            obj.set_index("0");
            this.divData.addChild(obj.name, obj);

            obj = new Calendar("tclDT_REPAY","staDtRepay:4","5","120","24",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("0");
            obj.set_dateformat("yyyy-MM-dd");
            obj.set_editformat("yyyy-MM-dd");
            obj.set_autoselect("true");
            this.divData.addChild(obj.name, obj);

            obj = new Div("divBtns",null,"112","200","26","0",null,null,null,null,null,this);
            obj.set_taborder("2");
            this.addChild(obj.name, obj);

            obj = new Button("btnCANCLE",null,"0","52","26","0",null,null,null,null,null,this.divBtns.form);
            obj.set_taborder("0");
            obj.set_text("취소");
            this.divBtns.addChild(obj.name, obj);

            obj = new Button("btnOK","92","0","52","26",null,null,null,null,null,null,this.divBtns.form);
            obj.set_taborder("1");
            obj.set_text("확인");
            obj.set_cssclass("btn_WF_action");
            this.divBtns.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this
            obj = new Layout("default","",this._adjust_width,this._adjust_height,this,function(p){});
            this.addLayout(obj.name, obj);
            
            // BindItem Information
            obj = new BindItem("item0","divData.form.tclDT_REPAY","value","dsList","DT_REPAY");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item1","divData.form.rdoTY_REPAY","value","dsList","TY_REPAY");
            this.addChild(obj.name, obj);
            obj.bind();
            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script
        this.registerScript("DAB_REPAY_DLG.xfdl", function() {
        this.objApp = this.gfnGetApplication();

        this.form_onload = function(obj,e)
        {
        	// -- 필수 -------------------//
        	this.gfnFormOnLoad(this);
        	this.gfnFormInfo(this);
        	// ---------------------------//

        	this.fnSetButton();
        	this.fnSetVariable();
        	this.fnSetEvent();
        	this.fnSetParameter();
        	this.fnSetDisplay();

        };

        /************************************************************************
         * 버튼 설정
         * 서브버튼 사용 처리. 공통 및 확장버튼 버튼관리화면에서 셋팅.
         ************************************************************************/
        this.fnSetButton = function() {
        	// Select, Add, Del, Save, Excel, Print
        	// SubSelect, SubAdd, SubDel, SuubSave, SubExcel
        };

        /************************************************************************
         * 확장 버튼 : 화면별 버튼 설정 ID, function 연결 (화면버튼관리)
         ************************************************************************/

        /************************************************************************
         * 변수 선언
         ************************************************************************/
        this.fnSetVariable = function() {
        	this.tclDT_REPAY  = this.divData.form.tclDT_REPAY;
        	this.rdoTY_REPAY  = this.divData.form.rdoTY_REPAY;
        };

        /************************************************************************
         * 이벤트 설정
         ************************************************************************/
        this.fnSetEvent = function() {

        };

        // 부모창에서 받아온것 셋팅
        this.fnSetDisplay = function() {

        	var frame = this.getOwnerFrame();
        	this.dsList.setColumn(0, "ID_PERSON", frame.ID_PERSON);
        	this.dsList.setColumn(0, "CD_CORP", frame.CD_CORP);
        	this.dsList.setColumn(0, "ID_SABUN", frame.ID_SABUN);
        	this.dsList.setColumn(0, "CD_LOAN", frame.CD_LOAN);
        	this.dsList.setColumn(0, "NO_SEQ", frame.NO_SEQ);
        	this.dsList.setColumn(0, "DT_REPAY", this.gfnGetDate());
        	this.dsList.setColumn(0, "TY_REPAY", "1");
        };

        /************************************************************************
         * 파라미터 설정
         ************************************************************************/
        this.fnSetParameter = function() {
        	this.dsRepay = new Dataset();
        	this.dsRepay.addColumn("ID_PERSON", "INT");
        	this.dsRepay.addColumn("CD_CORP", "string");
        	this.dsRepay.addColumn("ID_SABUN", "string");
        	this.dsRepay.addColumn("CD_LOAN", "string");
        	this.dsRepay.addColumn("NO_SEQ", "INT");
        	this.dsRepay.addColumn("DT_REPAY", "string");
        	this.dsRepay.addColumn("TY_REPAY", "string");
        	this.dsRepay.addColumn("ID_USER", "STRING");
        };

        /************************************************************************
         * 컨트롤 이벤트
         ************************************************************************/
         /************************************************************************
         * Validate
         ************************************************************************/
        /************************************************************************
         * 콜백 이벤트
         ************************************************************************/
        /*
         *	콜백 처리
         */
        this.fnCallback = function(svcID, errorCode, errorMsg)
        {
        	if (errorCode != 0) {
        		this.gfnAlert(errorMsg);
        		return false;
        	}

        	switch(svcID) {
        		case "repay":		// 저장
        			if (errorCode == 0) {
        				this.fnVaidateCallback = function() {
        					this.getParentContext().close(true);
        				}
        				this.gfnAlert("상환처리가 완료되었습니다.", "fnVaidateCallback");
        			}

        		default:
        	}
        };

        /************************************************************************
         * 코드파인드 이벤트
         ************************************************************************/
        /************************************************************************
         * 그리드 이벤트
         ************************************************************************/
         /************************************************************************
         * 확장버튼 이벤트
         ************************************************************************/
        /************************************************************************
         * 기타 이벤트
         ************************************************************************/
         // 확인 버튼
        this.btnOk_onclick = function(obj,e)
        {

        	if(this.gfnIsNull(this.dsList.getColumn(0, "DT_REPAY"))) {
        		this.gfnAlert("적용일를 입력하세요.");
        		return false;
        	}

        	this.dsRepay.clearData();
        	var nrow = this.dsRepay.addRow();
        	this.dsRepay.setColumn(nrow, "ID_PERSON", this.dsList.getColumn(0, "ID_PERSON"));
        	this.dsRepay.setColumn(nrow, "CD_CORP", this.dsList.getColumn(0, "CD_CORP"));
        	this.dsRepay.setColumn(nrow, "ID_SABUN", this.dsList.getColumn(0, "ID_SABUN"));
        	this.dsRepay.setColumn(nrow, "CD_LOAN", this.dsList.getColumn(0, "CD_LOAN"));
        	this.dsRepay.setColumn(nrow, "NO_SEQ", this.dsList.getColumn(0, "NO_SEQ"));
        	this.dsRepay.setColumn(nrow, "DT_REPAY",this.dsList.getColumn(0, "DT_REPAY"));
        	this.dsRepay.setColumn(nrow, "TY_REPAY", this.dsList.getColumn(0,"TY_REPAY"));
        	this.dsRepay.setColumn(nrow, "ID_USER", this.AuthClient.ID_USER);

        	if (this.dsRepay.rowcount == 0) return;

        	var strSvcId    = "repay";
        	var strSvcType  = "save";
        	var inProc		= "_dsProc";
        	var inData      = "repay=dsRepay";
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
        };

        // 취소버튼
        this.btnCancle_onclick = function(obj,e)
        {
        	this.getParentContext().close(false);
        };

        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.form_onload,this);
            this.divData.form.rdoTY_REPAY.addEventHandler("onitemchanged",this.fnSearchInit,this);
            this.divBtns.form.btnCANCLE.addEventHandler("onclick",this.btnCancle_onclick,this);
            this.divBtns.form.btnOK.addEventHandler("onclick",this.btnOk_onclick,this);
        };
        this.loadIncludeScript("DAB_REPAY_DLG.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
