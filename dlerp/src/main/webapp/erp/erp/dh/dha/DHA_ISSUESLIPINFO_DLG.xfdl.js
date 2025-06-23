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
            this.set_titletext("결의전표출력");
            this.getSetter("maxwidth").set("600");
            this.getSetter("maxheight").set("300");
            if (Form == this.constructor)
            {
                this._setFormPosition(600,250);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("_dsProc", this);
            obj._setContents("<ColumnInfo><Column id=\"TARGET\" type=\"STRING\" size=\"256\"/><Column id=\"SP\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"TARGET\">select</Col><Col id=\"SP\">DHAPR_ISSUESLIPINFO_SELECT</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsData", this);
            obj._setContents("<ColumnInfo><Column id=\"DT_INSERT\" type=\"STRING\" size=\"256\"/><Column id=\"ID_INSERT\" type=\"STRING\" size=\"256\"/><Column id=\"DS_INSERT\" type=\"STRING\" size=\"256\"/><Column id=\"DT_APPR\" type=\"STRING\" size=\"256\"/><Column id=\"ID_APPR\" type=\"STRING\" size=\"256\"/><Column id=\"DS_APPR\" type=\"STRING\" size=\"256\"/><Column id=\"DT_UPDATE\" type=\"STRING\" size=\"256\"/><Column id=\"ID_UPDATE\" type=\"STRING\" size=\"256\"/><Column id=\"DS_UPDATE\" type=\"STRING\" size=\"256\"/><Column id=\"DT_REVERSE\" type=\"STRING\" size=\"256\"/><Column id=\"ID_REVERSE\" type=\"STRING\" size=\"256\"/><Column id=\"DS_REVERSE\" type=\"STRING\" size=\"256\"/><Column id=\"TY_SLIP\" type=\"STRING\" size=\"256\"/><Column id=\"DS_AUTOSLIP\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row/></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsSearch", this);
            obj._setContents("<ColumnInfo><Column id=\"CD_TRADE\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row/></Rows>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Div("divData","0","0",null,null,"0","0",null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_cssclass("div_DATA_Bg");
            this.addChild(obj.name, obj);

            obj = new Static("staTitle","10","0",null,"22","0",null,null,null,null,null,this.divData.form);
            obj.set_taborder("0");
            obj.set_text("전표발행 상세정보");
            obj.set_cssclass("sta_TITLE_Bg");
            this.divData.addChild(obj.name, obj);

            obj = new Static("staDT_INSERT","10","staTitle:5","95","30",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("1");
            obj.set_text("발행일시");
            obj.set_cssclass("sta_WF_tablelabel");
            obj.set_textDecoration("none");
            this.divData.addChild(obj.name, obj);

            obj = new Static("staDT_APPR","10","staDT_INSERT:-1","95","30",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("2");
            obj.set_text("최종승인일시");
            obj.set_cssclass("sta_WF_tablelabel");
            obj.set_textDecoration("none");
            this.divData.addChild(obj.name, obj);

            obj = new Static("staDT_UPDATE","10","staDT_APPR:-1","95","30",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("3");
            obj.set_text("수정일시");
            obj.set_cssclass("sta_WF_tablelabel");
            obj.set_textDecoration("none");
            this.divData.addChild(obj.name, obj);

            obj = new Static("staDT_REVERSE","10","staDT_UPDATE:-1","95","30",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("4");
            obj.set_text("승인취소일시");
            obj.set_cssclass("sta_WF_tablelabel");
            obj.set_textDecoration("none");
            this.divData.addChild(obj.name, obj);

            obj = new Static("staTY_SLIP","10","staDT_REVERSE:-1","95","30",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("5");
            obj.set_text("전표유형");
            obj.set_cssclass("sta_WF_tablelabel");
            obj.set_textDecoration("none");
            this.divData.addChild(obj.name, obj);

            obj = new Static("staBgDT_INSERT","staDT_INSERT:-1","staTitle:5",null,"30","50%",null,"120",null,null,null,this.divData.form);
            obj.set_taborder("6");
            obj.set_cssclass("sta_WF_tablebg");
            obj.set_text("");
            this.divData.addChild(obj.name, obj);

            obj = new Static("staBgDT_APPR","staDT_APPR:-1","staBgDT_INSERT:-1",null,"30","50%",null,"120",null,null,null,this.divData.form);
            obj.set_taborder("7");
            obj.set_cssclass("sta_WF_tablebg");
            obj.set_text("");
            this.divData.addChild(obj.name, obj);

            obj = new Static("staBgDT_UPDATE","staDT_UPDATE:-1","staBgDT_APPR:-1",null,"30","50%",null,"120",null,null,null,this.divData.form);
            obj.set_taborder("8");
            obj.set_cssclass("sta_WF_tablebg");
            obj.set_text("");
            this.divData.addChild(obj.name, obj);

            obj = new Static("staBgDT_REVERSE","staDT_REVERSE:-1","staBgDT_UPDATE:-1",null,"30","50%",null,"120",null,null,null,this.divData.form);
            obj.set_taborder("9");
            obj.set_cssclass("sta_WF_tablebg");
            obj.set_text("");
            this.divData.addChild(obj.name, obj);

            obj = new Static("staBgTY_SLIP","staTY_SLIP:-1","staBgDT_REVERSE:-1",null,"30","50%",null,"120",null,null,null,this.divData.form);
            obj.set_taborder("10");
            obj.set_cssclass("sta_WF_tablebg");
            obj.set_text("");
            this.divData.addChild(obj.name, obj);

            obj = new Static("staDS_INSERT","staBgDT_INSERT:-1","staTitle:5","95","30",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("11");
            obj.set_text("발행자");
            obj.set_cssclass("sta_WF_tablelabel");
            obj.set_textDecoration("none");
            this.divData.addChild(obj.name, obj);

            obj = new Static("staDS_APPR","staBgDT_APPR:-1","staDS_INSERT:-1","95","30",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("12");
            obj.set_text("최종승인자");
            obj.set_cssclass("sta_WF_tablelabel");
            obj.set_textDecoration("none");
            this.divData.addChild(obj.name, obj);

            obj = new Static("staDS_UPDATE","staBgDT_UPDATE:-1","staDS_APPR:-1","95","30",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("13");
            obj.set_text("수정자");
            obj.set_cssclass("sta_WF_tablelabel");
            obj.set_textDecoration("none");
            this.divData.addChild(obj.name, obj);

            obj = new Static("staDS_REVERSE","staBgDT_REVERSE:-1","staDS_UPDATE:-1","95","30",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("14");
            obj.set_text("승인취소자");
            obj.set_cssclass("sta_WF_tablelabel");
            obj.set_textDecoration("none");
            this.divData.addChild(obj.name, obj);

            obj = new Static("staDS_AUTOSLIP","staBgTY_SLIP:-1","staDS_REVERSE:-1","95","30",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("15");
            obj.set_text("자동전표명칭");
            obj.set_cssclass("sta_WF_tablelabel");
            obj.set_textDecoration("none");
            this.divData.addChild(obj.name, obj);

            obj = new Static("staBgDS_INSERT","staDS_INSERT:-1","staTitle:5",null,"30","5",null,"120",null,null,null,this.divData.form);
            obj.set_taborder("16");
            obj.set_cssclass("sta_WF_tablebg");
            obj.set_text("");
            this.divData.addChild(obj.name, obj);

            obj = new Static("staBgDS_APPR","staDS_APPR:-1","staBgDS_INSERT:-1",null,"30","5",null,"120",null,null,null,this.divData.form);
            obj.set_taborder("17");
            obj.set_cssclass("sta_WF_tablebg");
            obj.set_text("");
            this.divData.addChild(obj.name, obj);

            obj = new Static("staBgDS_UPDATE","staDS_UPDATE:-1","staBgDS_APPR:-1",null,"30","5",null,"120",null,null,null,this.divData.form);
            obj.set_taborder("18");
            obj.set_cssclass("sta_WF_tablebg");
            obj.set_text("");
            this.divData.addChild(obj.name, obj);

            obj = new Static("staBgDS_REVERSE","staDS_REVERSE:-1","staBgDS_UPDATE:-1",null,"30","5",null,"120",null,null,null,this.divData.form);
            obj.set_taborder("19");
            obj.set_cssclass("sta_WF_tablebg");
            obj.set_text("");
            this.divData.addChild(obj.name, obj);

            obj = new Static("staBgDS_AUTOSLIP","staDS_AUTOSLIP:-1","staBgDS_REVERSE:-1",null,"30","5",null,"120",null,null,null,this.divData.form);
            obj.set_taborder("20");
            obj.set_cssclass("sta_WF_tablebg");
            obj.set_text("");
            this.divData.addChild(obj.name, obj);

            obj = new Edit("ctxtDT_INSERT","staDT_INSERT:5","staTitle:10",null,"20","staDS_INSERT:5",null,"110",null,null,null,this.divData.form);
            obj.set_taborder("21");
            obj.set_value("");
            obj.set_readonly("true");
            this.divData.addChild(obj.name, obj);

            obj = new Edit("ctxtDS_INSERT","staDS_INSERT:5","staTitle:10",null,"20","10",null,"110",null,null,null,this.divData.form);
            obj.set_taborder("22");
            obj.set_value("");
            obj.set_readonly("true");
            this.divData.addChild(obj.name, obj);

            obj = new Edit("ctxtDT_APPR","staDT_APPR:5","ctxtDT_INSERT:9",null,"20","staDS_INSERT:5",null,"110",null,null,null,this.divData.form);
            obj.set_taborder("23");
            obj.set_value("");
            obj.set_readonly("true");
            this.divData.addChild(obj.name, obj);

            obj = new Edit("ctxtDS_APPR","staDS_APPR:5","ctxtDS_INSERT:9",null,"20","10",null,"110",null,null,null,this.divData.form);
            obj.set_taborder("24");
            obj.set_value("");
            obj.set_readonly("true");
            this.divData.addChild(obj.name, obj);

            obj = new Edit("ctxtDT_UPDATE","staDT_UPDATE:5","ctxtDT_APPR:9",null,"20","staDS_INSERT:5",null,"110",null,null,null,this.divData.form);
            obj.set_taborder("25");
            obj.set_value("");
            obj.set_readonly("true");
            this.divData.addChild(obj.name, obj);

            obj = new Edit("ctxtDS_UPDATE","staDS_UPDATE:5","ctxtDS_APPR:9",null,"20","10",null,"110",null,null,null,this.divData.form);
            obj.set_taborder("26");
            obj.set_value("");
            obj.set_readonly("true");
            this.divData.addChild(obj.name, obj);

            obj = new Edit("ctxtDT_REVERSE","staDT_REVERSE:5","ctxtDT_UPDATE:9",null,"20","staDS_INSERT:5",null,"110",null,null,null,this.divData.form);
            obj.set_taborder("27");
            obj.set_value("");
            obj.set_readonly("true");
            this.divData.addChild(obj.name, obj);

            obj = new Edit("ctxtDS_REVERSE","staDS_REVERSE:5","ctxtDS_UPDATE:9",null,"20","10",null,"110",null,null,null,this.divData.form);
            obj.set_taborder("28");
            obj.set_value("");
            obj.set_readonly("true");
            this.divData.addChild(obj.name, obj);

            obj = new Edit("ctxtTY_SLIP","staTY_SLIP:5","ctxtDT_REVERSE:9",null,"20","staDS_INSERT:5",null,"110",null,null,null,this.divData.form);
            obj.set_taborder("29");
            obj.set_value("");
            obj.set_readonly("true");
            this.divData.addChild(obj.name, obj);

            obj = new Edit("ctxtDS_AUTOSLIP","staDS_AUTOSLIP:5","ctxtDS_REVERSE:9",null,"20","10",null,"110",null,null,null,this.divData.form);
            obj.set_taborder("30");
            obj.set_value("");
            obj.set_readonly("true");
            this.divData.addChild(obj.name, obj);

            obj = new Button("btnOk","45%","staBgTY_SLIP:20","60","27",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("31");
            obj.set_text("확인");
            this.divData.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this
            obj = new Layout("default","",this._adjust_width,this._adjust_height,this,function(p){});
            this.addLayout(obj.name, obj);
            
            // BindItem Information
            obj = new BindItem("item0","divData.form.ctxtDT_INSERT","value","dsData","DT_INSERT");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item1","divData.form.ctxtDS_INSERT","value","dsData","DS_INSERT");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item2","divData.form.ctxtDT_APPR","value","dsData","DT_APPR");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item3","divData.form.ctxtDS_APPR","value","dsData","DS_APPR");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item4","divData.form.ctxtDT_UPDATE","value","dsData","DT_UPDATE");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item5","divData.form.ctxtDS_UPDATE","value","dsData","DS_UPDATE");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item6","divData.form.ctxtDT_REVERSE","value","dsData","DT_REVERSE");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item7","divData.form.ctxtDS_REVERSE","value","dsData","ID_REVERSE");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item8","divData.form.ctxtTY_SLIP","value","dsData","TY_SLIP");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item9","divData.form.ctxtDS_AUTOSLIP","value","dsData","DS_AUTOSLIP");
            this.addChild(obj.name, obj);
            obj.bind();
            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script
        this.registerScript("DHA_ISSUESLIPINFO_DLG.xfdl", function() {
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

        	this.dsSearch.getColumn(0, "CD_TRADE", this.getOwnerFrame().CD_TRADE);
        	this.FormBtns.Select.click();
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

        };

        /************************************************************************
         * 변수 선언
         ************************************************************************/
        this.fnSetVariable = function() {
        	this.ctxtDT_INSERT = this.divData.form.ctxtDT_INSERT;
        	this.ctxtID_INSERT = this.divData.form.ctxtID_INSERT;
        	this.ctxtDS_INSERT = this.divData.form.ctxtDS_INSERT;
        	this.ctxtDT_APPR = this.divData.form.ctxtDT_APPR;
        	this.ctxtID_APPR = this.divData.form.ctxtID_APPR;
        	this.ctxtDS_APPR = this.divData.form.ctxtDS_APPR;
        	this.ctxtDT_UPDATE = this.divData.form.ctxtDT_UPDATE;
        	this.ctxtID_UPDATE = this.divData.form.ctxtID_UPDATE;
        	this.ctxtDS_UPDATE = this.divData.form.ctxtDS_UPDATE;
        	this.ctxtDT_REVERSE = this.divData.form.ctxtDT_REVERSE;
        	this.ctxtID_REVERSE = this.divData.form.ctxtID_REVERSE;
        	this.ctxtDS_REVERSE = this.divData.form.ctxtDS_REVERSE;
        	this.ctxtTY_SLIP = this.divData.form.ctxtTY_SLIP;
        	this.ctxtDS_AUTOSLIP = this.divData.form.ctxtDS_AUTOSLIP;

        };

        /************************************************************************
         * 이벤트 설정
         ************************************************************************/
        this.fnSetEvent = function() {


        };

        /************************************************************************
         * 파라미터 설정
         ************************************************************************/
        this.fnSetParameter = function() {
        	this.dsSelect = new Dataset();
        	this.dsSelect.addColumn("CD_TRADE", "string");
        }

        /************************************************************************
         * 컨트롤 이벤트
         ************************************************************************/
         /*
          *	조회 버튼
          */
        this.fnSelect = function() {
        	this.dsSelect.clearData();
        	this.dsSelect.addRow();

        	this.dsSelect.setColumn(0, "CD_TRADE", this.dsSearch.getColumn(0, "CD_TRADE"));

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


        }

         /*
         *	저장 버튼
         */
        this.fnSave = function() {

        }

        /*
         *	삭제 버튼
         */
        this.fnDel = function() {

        }


        /*
         *	엑셀 버튼
         */
        this.fnExcel = function() {

        }

        /*
         *	출력 버튼
         */
        this.fnPrint = function() {
        }
        /************************************************************************
         * Validate
         ************************************************************************/
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

        }

        /************************************************************************
         * 코드파인드 이벤트
         ************************************************************************/

        /************************************************************************
         * 그리드 이벤트
         ************************************************************************/

        /************************************************************************
         * 기타 이벤트
         ************************************************************************/
        //확인버튼 클릭
        this.btnOk_onclick = function(obj,e)
        {
        	this.getParentContext().close();
        };


        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.form_onload,this);
            this.divData.form.staDT_INSERT.addEventHandler("onclick",this.divData_divDataRight_sta01_onclick,this);
            this.divData.form.staDT_APPR.addEventHandler("onclick",this.divData_divDataRight_sta01_onclick,this);
            this.divData.form.staDT_UPDATE.addEventHandler("onclick",this.divData_divDataRight_sta01_onclick,this);
            this.divData.form.staDT_REVERSE.addEventHandler("onclick",this.divData_divDataRight_sta01_onclick,this);
            this.divData.form.staTY_SLIP.addEventHandler("onclick",this.divData_divDataRight_sta01_onclick,this);
            this.divData.form.staDS_INSERT.addEventHandler("onclick",this.divData_divDataRight_sta01_onclick,this);
            this.divData.form.staDS_APPR.addEventHandler("onclick",this.divData_divDataRight_sta01_onclick,this);
            this.divData.form.staDS_UPDATE.addEventHandler("onclick",this.divData_divDataRight_sta01_onclick,this);
            this.divData.form.staDS_REVERSE.addEventHandler("onclick",this.divData_divDataRight_sta01_onclick,this);
            this.divData.form.staDS_AUTOSLIP.addEventHandler("onclick",this.divData_divDataRight_sta01_onclick,this);
            this.divData.form.btnOk.addEventHandler("onclick",this.btnOk_onclick,this);
        };
        this.loadIncludeScript("DHA_ISSUESLIPINFO_DLG.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
