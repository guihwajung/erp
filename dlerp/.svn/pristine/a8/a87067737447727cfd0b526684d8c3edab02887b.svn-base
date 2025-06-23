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
                this._setFormPosition(400,370);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("_dsProc", this);
            obj._setContents("<ColumnInfo><Column id=\"TARGET\" type=\"STRING\" size=\"256\"/><Column id=\"SP\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"TARGET\">delete</Col><Col id=\"SP\">DCBPR_RECOMMEND_DELETE</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsList", this);
            obj._setContents("<ColumnInfo><Column id=\"CD_SITE\" type=\"STRING\" size=\"256\"/><Column id=\"DS_SITE\" type=\"STRING\" size=\"256\"/><Column id=\"NO_BID\" type=\"STRING\" size=\"256\"/><Column id=\"DS_SUBCON\" type=\"STRING\" size=\"256\"/><Column id=\"CD_COSTCLASS\" type=\"STRING\" size=\"256\"/><Column id=\"DS_COSTCLASS\" type=\"STRING\" size=\"256\"/><Column id=\"CD_LICCOST\" type=\"STRING\" size=\"256\"/><Column id=\"DS_LICCOST\" type=\"STRING\" size=\"256\"/><Column id=\"ID_CANCEL\" type=\"STRING\" size=\"256\"/><Column id=\"DS_HNAME\" type=\"STRING\" size=\"256\"/><Column id=\"CD_DEPT\" type=\"STRING\" size=\"256\"/><Column id=\"DS_DEPT\" type=\"STRING\" size=\"256\"/><Column id=\"CD_VENDOR\" type=\"STRING\" size=\"256\"/><Column id=\"DS_VENDOR\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row/></Rows>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Div("divData","0","0",null,"158","0",null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_cssclass("div_DATA_Bg");
            obj.set_text("");
            this.addChild(obj.name, obj);

            obj = new Static("staTITLE","0","0","351","30",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("0");
            obj.set_text("입찰정보");
            obj.set_cssclass("sta_TITLE_Bg");
            this.divData.addChild(obj.name, obj);

            obj = new Static("staCD_SITE","0","staTITLE:5","87","30",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("1");
            obj.set_text("현장코드");
            obj.set_textAlign("center");
            obj.set_cssclass("sta_WF_tablelabelE");
            this.divData.addChild(obj.name, obj);

            obj = new Static("staNO_BID","0","staCD_SITE:-1","87","30",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("2");
            obj.set_text("입찰번호");
            obj.set_textAlign("center");
            obj.set_cssclass("sta_WF_tablelabelE");
            this.divData.addChild(obj.name, obj);

            obj = new Static("staCD_COSTCLASS","0","staNO_BID:-1","87","30",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("3");
            obj.set_text("대공종");
            obj.set_textAlign("center");
            obj.set_cssclass("sta_WF_tablelabelE");
            this.divData.addChild(obj.name, obj);

            obj = new Static("staCD_LICCOST","0","staCD_COSTCLASS:-1","87","30",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("13");
            obj.set_text("등록공종");
            obj.set_textAlign("center");
            obj.set_cssclass("sta_WF_tablelabelE");
            this.divData.addChild(obj.name, obj);

            obj = new Static("staBg1","staCD_SITE:-1","staTITLE:5","265","30",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("4");
            obj.set_cssclass("sta_WF_tablebg");
            this.divData.addChild(obj.name, obj);

            obj = new Static("staBg2","staNO_BID:-1","staBg1:-1","265","30",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("5");
            obj.set_cssclass("sta_WF_tablebg");
            this.divData.addChild(obj.name, obj);

            obj = new Static("staBg3","staCD_COSTCLASS:-1","staBg2:-1","265","30",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("6");
            obj.set_cssclass("sta_WF_tablebg");
            this.divData.addChild(obj.name, obj);

            obj = new Static("staBg4","staCD_LICCOST:-1","staBg3:-1","265","30",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("14");
            obj.set_cssclass("sta_WF_tablebg");
            this.divData.addChild(obj.name, obj);

            obj = new Edit("edtCD_SITE","staCD_SITE:5","staTITLE:10","100","20",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("7");
            obj.set_readonly("false");
            this.divData.addChild(obj.name, obj);

            obj = new Edit("edtDS_SITE","edtCD_SITE:5","staTITLE:10","150","20",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("8");
            obj.set_readonly("false");
            this.divData.addChild(obj.name, obj);

            obj = new Edit("edtNO_BID","staNO_BID:5","edtCD_SITE:9","100","20",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("9");
            obj.set_readonly("false");
            this.divData.addChild(obj.name, obj);

            obj = new Edit("edtDS_SUBCON","edtNO_BID:5","edtCD_SITE:9","150","20",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("10");
            obj.set_readonly("false");
            this.divData.addChild(obj.name, obj);

            obj = new Edit("edtCD_COSTCLASS","staCD_COSTCLASS:5","edtDS_SUBCON:9","100","20",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("11");
            obj.set_readonly("false");
            this.divData.addChild(obj.name, obj);

            obj = new Edit("edtDS_COSTCLASS","edtCD_COSTCLASS:5","edtDS_SUBCON:9","150","20",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("12");
            obj.set_readonly("false");
            this.divData.addChild(obj.name, obj);

            obj = new Edit("edtCD_LICCOST","staCD_LICCOST:5","edtCD_COSTCLASS:9","100","20",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("15");
            obj.set_readonly("false");
            this.divData.addChild(obj.name, obj);

            obj = new Edit("edtDS_LICCOST","edtCD_LICCOST:5","edtCD_COSTCLASS:9","150","20",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("16");
            obj.set_readonly("false");
            this.divData.addChild(obj.name, obj);

            obj = new Div("divDataBottom","0","divData:5",null,null,"0","0",null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_cssclass("div_DATA_Bg");
            obj.set_text("");
            this.addChild(obj.name, obj);

            obj = new Static("staTITLE","0","0","351","30",null,null,null,null,null,null,this.divDataBottom.form);
            obj.set_taborder("17");
            obj.set_text("배제정보");
            obj.set_cssclass("sta_TITLE_Bg");
            this.divDataBottom.addChild(obj.name, obj);

            obj = new Static("staID_CANCEL","0","staTITLE:5","87","30",null,null,null,null,null,null,this.divDataBottom.form);
            obj.set_taborder("1");
            obj.set_text("처리자");
            obj.set_cssclass("sta_WF_tablelabel");
            obj.set_textAlign("center");
            obj.set_textDecoration("underline");
            this.divDataBottom.addChild(obj.name, obj);

            obj = new Static("staCD_DEPT","0","staID_CANCEL:-1","87","30",null,null,null,null,null,null,this.divDataBottom.form);
            obj.set_taborder("2");
            obj.set_text("부서");
            obj.set_cssclass("sta_WF_tablelabel");
            obj.set_textAlign("center");
            obj.set_textDecoration("underline");
            this.divDataBottom.addChild(obj.name, obj);

            obj = new Static("staCD_VENDOR","0","staCD_DEPT:-1","87","30",null,null,null,null,null,null,this.divDataBottom.form);
            obj.set_taborder("3");
            obj.set_text("배제업체");
            obj.set_cssclass("sta_WF_tablelabel");
            obj.set_textAlign("center");
            obj.set_textDecoration("underline");
            this.divDataBottom.addChild(obj.name, obj);

            obj = new Static("staBg5","staID_CANCEL:-1","staTITLE:5","265","30",null,null,null,null,null,null,this.divDataBottom.form);
            obj.set_taborder("4");
            obj.set_cssclass("sta_WF_tablebg");
            this.divDataBottom.addChild(obj.name, obj);

            obj = new Static("staBg6","staCD_DEPT:-1","staBg5:-1","265","30",null,null,null,null,null,null,this.divDataBottom.form);
            obj.set_taborder("5");
            obj.set_cssclass("sta_WF_tablebg");
            this.divDataBottom.addChild(obj.name, obj);

            obj = new Static("staBg7","staCD_VENDOR:-1","staBg6:-1","265","30",null,null,null,null,null,null,this.divDataBottom.form);
            obj.set_taborder("6");
            obj.set_cssclass("sta_WF_tablebg");
            this.divDataBottom.addChild(obj.name, obj);

            obj = new Edit("edtID_CANCEL","staID_CANCEL:5","staTITLE:10","100","20",null,null,null,null,null,null,this.divDataBottom.form);
            obj.set_taborder("7");
            obj.set_readonly("false");
            this.divDataBottom.addChild(obj.name, obj);

            obj = new Edit("edtDS_HNAME","edtID_CANCEL:5","staTITLE:10","150","20",null,null,null,null,null,null,this.divDataBottom.form);
            obj.set_taborder("8");
            obj.set_readonly("false");
            this.divDataBottom.addChild(obj.name, obj);

            obj = new Div("ccfCD_DEPT","staCD_DEPT:5","edtID_CANCEL:9","255","20",null,null,null,null,null,null,this.divDataBottom.form);
            obj.getSetter("CodeFindName").set("DCX_CFDEPT_02");
            obj.getSetter("CDTextWidth").set("100");
            obj.set_taborder("0");
            obj.set_url("cmm::cmmCodeFind.xfdl");
            obj.set_enable("false");
            this.divDataBottom.addChild(obj.name, obj);

            obj = new Div("ccfCD_VENDOR","staCD_VENDOR:5","ccfCD_DEPT:9","255","20",null,null,null,null,null,null,this.divDataBottom.form);
            obj.getSetter("CodeFindName").set("DCX_CFVENDOR_COMMON");
            obj.getSetter("CDTextWidth").set("100");
            obj.set_taborder("0");
            obj.set_url("cmm::cmmCodeFind.xfdl");
            obj.set_enable("false");
            this.divDataBottom.addChild(obj.name, obj);

            obj = new Button("btnOk","32.50%","staBg7:25","60","20",null,null,null,null,null,null,this.divDataBottom.form);
            obj.set_taborder("35");
            obj.set_text("저장");
            this.divDataBottom.addChild(obj.name, obj);

            obj = new Button("btnCancel","52.50%","staBg7:25","60","20",null,null,null,null,null,null,this.divDataBottom.form);
            obj.set_taborder("36");
            obj.set_text("취소");
            this.divDataBottom.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this
            obj = new Layout("default","",this._adjust_width,this._adjust_height,this,function(p){});
            this.addLayout(obj.name, obj);
            
            // BindItem Information
            obj = new BindItem("item0","divData.form.edtCD_SITE","value","dsList","CD_SITE");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item1","divData.form.edtDS_SITE","value","dsList","DS_SITE");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item2","divData.form.edtNO_BID","value","dsList","NO_BID");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item3","divData.form.edtDS_SUBCON","value","dsList","DS_SUBCON");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item4","divData.form.edtCD_COSTCLASS","value","dsList","CD_COSTCLASS");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item5","divData.form.edtDS_COSTCLASS","value","dsList","DS_COSTCLASS");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item6","divData.form.edtCD_LICCOST","value","dsList","CD_LICCOST");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item7","divData.form.edtDS_LICCOST","value","dsList","DS_LICCOST");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item8","divDataBottom.form.edtID_CANCEL","value","dsList","ID_CANCEL");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item9","divDataBottom.form.edtDS_HNAME","value","dsList","DS_HNAME");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item10","divDataBottom.form.ccfCD_DEPT.form.CDTextBox","value","dsList","CD_DEPT");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item11","divDataBottom.form.ccfCD_DEPT.form.DSTextBox","value","dsList","DS_DEPT");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item12","divDataBottom.form.ccfCD_VENDOR.form.CDTextBox","value","dsList","CD_VENDOR");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item13","divDataBottom.form.ccfCD_VENDOR.form.DSTextBox","value","dsList","DS_VENDOR");
            this.addChild(obj.name, obj);
            obj.bind();
            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {
            this._addPreloadList("fdl","cmm::cmmCodeFind.xfdl");
        };
        
        // User Script
        this.registerScript("DCB_RECOMMENDCANCELDLG.xfdl", function() {
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

         	// 이전 화면에서 데이터 받기.
        	this.dsList.setColumn(0, "CD_SITE", this.getOwnerFrame().CD_SITE);
        	this.dsList.setColumn(0, "DS_SITE", this.getOwnerFrame().DS_SITE);
        	this.dsList.setColumn(0, "NO_BID", this.getOwnerFrame().NO_BID);
        	this.dsList.setColumn(0, "DS_SUBCON", this.getOwnerFrame().DS_SUBCON);
        	this.dsList.setColumn(0, "CD_COSTCLASS", this.getOwnerFrame().CD_COSTCLASS);
        	this.dsList.setColumn(0, "DS_COSTCLASS", this.getOwnerFrame().DS_COSTCLASS);
        	this.dsList.setColumn(0, "CD_LICCOST", this.getOwnerFrame().CD_LICCOST);
        	this.dsList.setColumn(0, "DS_LICCOST", this.getOwnerFrame().DS_LICCOST);
        	this.dsList.setColumn(0, "ID_CANCEL", this.AuthClient.ID_USER);
        	this.dsList.setColumn(0, "DS_HNAME", this.AuthClient.DS_HNAME);
        	this.dsList.setColumn(0, "CD_DEPT", this.AuthClient.CD_DEPT);
        	this.dsList.setColumn(0, "DS_DEPT", this.AuthClient.DS_DEPT);
        	this.dsList.setColumn(0, "CD_VENDOR", this.getOwnerFrame().CD_VENDOR);
        	this.dsList.setColumn(0, "DS_VENDOR", this.getOwnerFrame().DS_VENDOR);

        };

        /************************************************************************
         * 버튼 설정 : 화면(Tab) 전환시 마다 호출
         * 서브버튼 사용 및 공통버튼 강제 제어시 여기서 처리
         ************************************************************************/
        this.fnSetButton = function() {
        	this.FormBtns.Select.set_enable(false);
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
        	//this.dxGrid = this.divDataBottom.form.objGrid;
        };

        /************************************************************************
         * 이벤트 설정
         ************************************************************************/
        this.fnSetEvent = function() {
        	this.divDataBottom.form.ccfCD_DEPT.BeforeUserDataSetParam = "fnBeforeUserDataSetParam";


        	//this.gfnGridInit(this.dxGrid, this.dsList, "DC", "DCB_RECOMMENDGRIDDLG");
        };

        /************************************************************************
         * 파라미터 설정
         ************************************************************************/
        this.fnSetParameter = function() {

        	this.dsDelete = new Dataset();
        	this.dsDelete.addColumn("CD_SITE", "string");
        	this.dsDelete.addColumn("NO_BID", "string");
        	this.dsDelete.addColumn("CD_VENDOR", "string");
        	this.dsDelete.addColumn("ID_CANCEL", "string");
        	this.dsDelete.addColumn("CANCEL_REASON", "string");
        }

        /************************************************************************
         * 컨트롤 이벤트
         ************************************************************************/

         /************************************************************************
         * 버튼 이벤트
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
        	if (svcID == "delete") {
        		if(errorCode == 0)
        		{
        			// this.close()가 작동하지 않았고,
        			// 부모의 callback 함수로 데이터를 넘겨주기 위해 작성되었습니다.
        			this.getParentContext().close(true);
        		}else
        		{
        			this.gfnAlert(errorMsg);
        		}
        	}
        }

        /************************************************************************
         * 코드파인드 이벤트
         ************************************************************************/
        this.fnBeforeUserDataSetParam = function(id, dsUserParam, nrow) {
        	if (id == "ccfCD_DEPT") {
        		dsUserParam.setColumn(nrow, "CD_CORP", this.AuthClient.CD_CORP);
        	}
        	return true;
        }
        /************************************************************************
         * 그리드 이벤트
         ************************************************************************/

        /************************************************************************
         * 기타 이벤트
         ************************************************************************/

        // 확인 버튼 클릭
        this.divData_btnOk_onclick = function(obj,e)
        {
         	this.dsDelete.clearData();
        	var nrow = this.dsDelete.addRow();

        	this.dsDelete.setColumn(nrow, "CD_SITE", this.dsList.getColumn(0, "CD_SITE"));
        	this.dsDelete.setColumn(nrow, "NO_BID", this.dsList.getColumn(0, "NO_BID"));
        	this.dsDelete.setColumn(nrow, "CD_VENDOR", this.dsList.getColumn(0, "CD_VENDOR"));
        	this.dsDelete.setColumn(nrow, "ID_CANCEL", this.dsList.getColumn(0, "ID_CANCEL"));
        	this.dsDelete.setColumn(nrow, "CANCEL_REASON", "");

        	if (this.dsDelete.rowcount == 0) return;

        	var strSvcId    = "delete";
        	var strSvcType  = "save";
        	var inProc		= "_dsProc";
        	var inData      = "delete=dsDelete";
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
        };

        // 취소 버튼 클릭
        this.divData_btnCancel_onclick = function(obj,e)
        {
        	// this.close()가 작동하지 않았고,
        	// 부모의 callback 함수로 데이터를 넘겨주기 위해 작성되었습니다.
        	this.getParentContext().close(false);
        };


        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.form_onload,this);
            this.divDataBottom.form.btnOk.addEventHandler("onclick",this.divData_btnOk_onclick,this);
            this.divDataBottom.form.btnCancel.addEventHandler("onclick",this.divData_btnCancel_onclick,this);
        };
        this.loadIncludeScript("DCB_RECOMMENDCANCELDLG.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
