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
                this._setFormPosition(690,270);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("_dsProc", this);
            obj._setContents("<ColumnInfo><Column id=\"TARGET\" type=\"STRING\" size=\"256\"/><Column id=\"SP\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"TARGET\">save</Col><Col id=\"SP\">DCBPR_APP_REMARK_SAVE</Col></Row><Row><Col id=\"TARGET\">combo</Col><Col id=\"SP\">DZXPR_COMBO_SELECT</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsData", this);
            obj._setContents("<ColumnInfo><Column id=\"CD_SITE\" type=\"STRING\" size=\"256\"/><Column id=\"DS_SITE\" type=\"STRING\" size=\"256\"/><Column id=\"NO_BID\" type=\"STRING\" size=\"256\"/><Column id=\"DS_SUBCON\" type=\"STRING\" size=\"256\"/><Column id=\"TY_WORK\" type=\"STRING\" size=\"256\"/><Column id=\"DS_REASON\" type=\"STRING\" size=\"256\"/><Column id=\"DS_REMARK\" type=\"STRING\" size=\"256\"/><Column id=\"CD_VENDOR\" type=\"STRING\" size=\"256\"/><Column id=\"DS_VENDOR\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"TY_WORK\">01</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsTY_WORK", this);
            obj._setContents("<ColumnInfo><Column id=\"CD_CODE\" type=\"STRING\" size=\"256\"/><Column id=\"DS_CODE\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Div("divData","0","0",null,null,"0","0",null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_cssclass("div_DATA_Bg");
            obj.set_text("");
            this.addChild(obj.name, obj);

            obj = new Static("staTITLE","0","0","100%","30",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("0");
            obj.set_text("낙찰업체선정");
            obj.set_cssclass("sta_TITLE_Bg");
            obj.set_textAlign("left");
            this.divData.addChild(obj.name, obj);

            obj = new Static("staCD_SITE","0","40","87","30",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("1");
            obj.set_text("현장코드");
            obj.set_cssclass("sta_WF_tablelabel");
            obj.set_textAlign("left");
            this.divData.addChild(obj.name, obj);

            obj = new Static("staNO_BID","0","staCD_SITE:-1","87","30",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("2");
            obj.set_text("입찰번호");
            obj.set_cssclass("sta_WF_tablelabel");
            obj.set_textAlign("left");
            this.divData.addChild(obj.name, obj);

            obj = new Static("staTY_WORK","0","staNO_BID:28","87","30",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("3");
            obj.set_text("유찰유형");
            obj.set_cssclass("sta_WF_tablelabel");
            obj.set_textAlign("left");
            obj.set_visible("false");
            this.divData.addChild(obj.name, obj);

            obj = new Static("staDS_REASON","0","staNO_BID:28","87","90",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("4");
            obj.set_text("특기사항");
            obj.set_cssclass("sta_WF_tablelabel");
            obj.set_textAlign("left");
            this.divData.addChild(obj.name, obj);

            obj = new Static("staBg1","staCD_SITE:-1","40",null,"30","0%",null,null,null,null,null,this.divData.form);
            obj.set_taborder("5");
            obj.set_cssclass("sta_WF_tablebg");
            this.divData.addChild(obj.name, obj);

            obj = new Static("staBg2","staNO_BID:-1","staBg1:-1",null,"30","0%",null,null,null,null,null,this.divData.form);
            obj.set_taborder("6");
            obj.set_cssclass("sta_WF_tablebg");
            this.divData.addChild(obj.name, obj);

            obj = new Static("staBg3","staTY_WORK:-1","staBg2:28",null,"30","0.00%",null,null,null,null,null,this.divData.form);
            obj.set_taborder("7");
            obj.set_cssclass("sta_WF_tablebg");
            obj.set_visible("false");
            this.divData.addChild(obj.name, obj);

            obj = new Static("staBg4","86","127",null,"90","0.00%",null,null,null,null,null,this.divData.form);
            obj.set_taborder("8");
            obj.set_cssclass("sta_WF_tablebg");
            this.divData.addChild(obj.name, obj);

            obj = new Edit("edtCD_SITE","staCD_SITE:5","staTITLE:15","90","20",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("9");
            obj.set_readonly("true");
            obj.set_maxlength("50");
            this.divData.addChild(obj.name, obj);

            obj = new Edit("edtDS_SITE","edtCD_SITE:5","staTITLE:15",null,"20","5",null,null,null,null,null,this.divData.form);
            obj.set_taborder("10");
            obj.set_readonly("true");
            obj.set_maxlength("50");
            this.divData.addChild(obj.name, obj);

            obj = new Edit("edtNO_BID","staNO_BID:5","edtCD_SITE:10","90","20",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("11");
            obj.set_readonly("true");
            obj.set_maxlength("50");
            this.divData.addChild(obj.name, obj);

            obj = new Edit("edtDS_SUBCON","edtNO_BID:5","edtCD_SITE:10",null,"20","5",null,null,null,null,null,this.divData.form);
            obj.set_taborder("12");
            obj.set_readonly("true");
            obj.set_maxlength("50");
            this.divData.addChild(obj.name, obj);

            obj = new Combo("ccboTY_WORK","staTY_WORK:5","edtNO_BID:38","200","20",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("13");
            obj.set_innerdataset("dsTY_WORK");
            obj.set_codecolumn("CD_CODE");
            obj.set_datacolumn("DS_CODE");
            obj.set_visible("false");
            this.divData.addChild(obj.name, obj);

            obj = new TextArea("edtDS_FALLREASON","staDS_REASON:5","edtNO_BID:38",null,"80","5",null,null,null,null,null,this.divData.form);
            obj.set_taborder("14");
            this.divData.addChild(obj.name, obj);

            obj = new Button("btnOk","41.74%","229","60","20",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("15");
            obj.set_text("확인");
            this.divData.addChild(obj.name, obj);

            obj = new Button("btnCancel","51.45%","229","60","20",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("16");
            obj.set_text("취소");
            this.divData.addChild(obj.name, obj);

            obj = new Static("staNO_BID00","0","98","87","30",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("17");
            obj.set_text("선정업체");
            obj.set_cssclass("sta_WF_tablelabel");
            obj.set_textAlign("left");
            this.divData.addChild(obj.name, obj);

            obj = new Static("staBg2_00","86","98",null,"30","0.00%",null,null,null,null,null,this.divData.form);
            obj.set_taborder("20");
            obj.set_cssclass("sta_WF_tablebg");
            this.divData.addChild(obj.name, obj);

            obj = new Edit("edtNO_BID00","92","104","90","20",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("18");
            obj.set_readonly("true");
            obj.set_maxlength("50");
            this.divData.addChild(obj.name, obj);

            obj = new Edit("edtDS_SUBCON00","187","104",null,"20","5",null,null,null,null,null,this.divData.form);
            obj.set_taborder("19");
            obj.set_readonly("true");
            obj.set_maxlength("50");
            this.divData.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this
            obj = new Layout("default","",this._adjust_width,this._adjust_height,this,function(p){});
            this.addLayout(obj.name, obj);
            
            // BindItem Information
            obj = new BindItem("item0","divData.form.edtCD_SITE","value","dsData","CD_SITE");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item1","divData.form.edtDS_SITE","value","dsData","DS_SITE");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item2","divData.form.edtNO_BID","value","dsData","NO_BID");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item3","divData.form.edtDS_SUBCON","value","dsData","DS_SUBCON");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item4","divData.form.ccboTY_WORK","value","dsData","TY_WORK");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item5","divData.form.edtDS_FALLREASON","value","dsData","DS_REMARK");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item6","divData.form.edtNO_BID00","value","dsData","CD_VENDOR");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item7","divData.form.edtDS_SUBCON00","value","dsData","DS_VENDOR");
            this.addChild(obj.name, obj);
            obj.bind();
            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script
        this.registerScript("DCB_SUCESSBID_DLG.xfdl", function() {
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

        	// 이전 화면에서 데이터 받기.
        	this.dsData.setColumn(0, "CD_SITE", this.getOwnerFrame().CD_SITE);
        	this.dsData.setColumn(0, "DS_SITE", this.getOwnerFrame().DS_SITE);
        	this.dsData.setColumn(0, "NO_BID", this.getOwnerFrame().NO_BID);
        	this.dsData.setColumn(0, "DS_SUBCON", this.getOwnerFrame().DS_SUBCON);
        	this.dsData.setColumn(0, "CD_VENDOR", this.getOwnerFrame().CD_VENDOR);
        	this.dsData.setColumn(0, "DS_VENDOR", this.getOwnerFrame().DS_VENDOR);
        };

        /************************************************************************
         * 버튼 설정 : 화면(Tab) 전환시 마다 호출
         * 서브버튼 사용 및 공통버튼 강제 제어시 여기서 처리
         ************************************************************************/
        this.fnSetButton = function() {
        	//this.FormBtns.Select.set_enable(false);
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
        	this.dsSave = new Dataset();
        	this.dsSave.addColumn("CD_SITE", "string");
        	this.dsSave.addColumn("NO_BID", "string");
        	this.dsSave.addColumn("DS_REASON", "string");
        	this.dsSave.addColumn("TY_WORK", "string");
        	this.dsSave.addColumn("YN_SMS", "string");
        	this.dsSave.addColumn("DS_REMARK", "string");
        }

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
        	if (svcID == "save") {
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

        /************************************************************************
         * 그리드 이벤트
         ************************************************************************/

        /************************************************************************
         * 기타 이벤트
         ************************************************************************/
        // 확인 버튼 클릭
        this.divData_btnOk_onclick = function(obj,e)
        {
        	this.dsSave.clearData();
        	var nrow = this.dsSave.addRow();

        	this.dsSave.setColumn(nrow, "CD_SITE", this.dsData.getColumn(0, "CD_SITE"));
        	this.dsSave.setColumn(nrow, "NO_BID", this.dsData.getColumn(0, "NO_BID"));
        	this.dsSave.setColumn(nrow, "TY_WORK", "DC04");
        	this.dsSave.setColumn(nrow, "DS_REMARK", this.dsData.getColumn(0, "DS_REMARK"));

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

        this.fnSetCombo = function()
        {
        	this.dsCombo = new Dataset();
        	this.dsCombo.addColumn("CD_SYSTEM", "string");
        	this.dsCombo.addColumn("CD_TYPE", "string");

        	var nrow = this.dsCombo.addRow();
        	this.dsCombo.setColumn(0, "CD_SYSTEM", "DC");
        	this.dsCombo.setColumn(0, "CD_TYPE", "64");

        	var strSvcId    = "combo";
        	var strSvcType  = "select";
        	var inProc		= "_dsProc";
        	var inData      = "combo=dsCombo";
        	var outData     = "dsTY_WORK=combo0";
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
        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.form_onload,this);
            this.divData.form.staCD_SITE.addEventHandler("onclick",this.divData_staDS_SITE_onclick,this);
            this.divData.form.btnOk.addEventHandler("onclick",this.divData_btnOk_onclick,this);
            this.divData.form.btnCancel.addEventHandler("onclick",this.divData_btnCancel_onclick,this);
        };
        this.loadIncludeScript("DCB_SUCESSBID_DLG.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
