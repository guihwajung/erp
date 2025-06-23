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
            this.set_titletext("결산대체전표발행_DLG");
            this.getSetter("maxwidth").set("500");
            this.getSetter("maxheight").set("350");
            if (Form == this.constructor)
            {
                this._setFormPosition(500,350);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("dsList", this);
            obj._setContents("<ColumnInfo><Column id=\"CD_DEPT_ACNT\" type=\"STRING\" size=\"256\"/><Column id=\"DS_DEPT_ACNT\" type=\"STRING\" size=\"256\"/><Column id=\"CD_SITE\" type=\"STRING\" size=\"256\"/><Column id=\"DS_SITE\" type=\"STRING\" size=\"256\"/><Column id=\"CD_AFTER\" type=\"STRING\" size=\"256\"/><Column id=\"DS_AFTER\" type=\"STRING\" size=\"256\"/><Column id=\"CD_ACCOST\" type=\"STRING\" size=\"256\"/><Column id=\"DS_ACCOST\" type=\"STRING\" size=\"256\"/><Column id=\"CFCD_ACCOST\" type=\"STRING\" size=\"256\"/><Column id=\"CFDS_ACCOST\" type=\"STRING\" size=\"256\"/><Column id=\"YM_MAGAM\" type=\"STRING\" size=\"256\"/><Column id=\"CD_CORP\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("_dsProc", this);
            obj._setContents("<ColumnInfo><Column id=\"TARGET\" type=\"STRING\" size=\"256\"/><Column id=\"SP\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"TARGET\">save</Col><Col id=\"SP\">DHFPR_PREPAYTOCOST_AUTOSLIP_INSERT</Col></Row></Rows>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Div("divData","0","0",null,"250","0",null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_cssclass("div_DATA_Bg");
            obj.set_text("");
            this.addChild(obj.name, obj);

            obj = new Static("staTitle","0","0",null,"22","0",null,null,null,null,null,this.divData.form);
            obj.set_taborder("1");
            obj.set_text("결산대체전표발행_DLG");
            obj.set_cssclass("sta_TITLE_Bg");
            this.divData.addChild(obj.name, obj);

            obj = new Static("staCD_DEPT_BH","10","staTitle:5","95","30",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("2");
            obj.set_text("발행부서");
            obj.set_cssclass("sta_WF_tablelabel");
            this.divData.addChild(obj.name, obj);

            obj = new Static("staCD_SITE","10","staCD_DEPT_BH:-1","95","30",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("2");
            obj.set_text("귀속부서");
            obj.set_cssclass("sta_WF_tablelabel");
            this.divData.addChild(obj.name, obj);

            obj = new Static("staCD_AFTER","10","staCD_SITE:-1","95","30",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("2");
            obj.set_text("원가투입현장");
            obj.set_cssclass("sta_WF_tablelabelE");
            this.divData.addChild(obj.name, obj);

            obj = new Static("staCD_ACCOST","10","staCD_AFTER:-1","95","30",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("2");
            obj.set_text("기존 원가코드");
            obj.set_cssclass("sta_WF_tablelabel");
            this.divData.addChild(obj.name, obj);

            obj = new Static("staCF_ACCOST","10","staCD_ACCOST:-1","95","30",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("2");
            obj.set_text("정산 원가코드");
            obj.set_cssclass("sta_WF_tablelabel");
            this.divData.addChild(obj.name, obj);

            obj = new Static("staYM_MAGAM","10","staCF_ACCOST:-1","95","30",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("2");
            obj.set_text("결산년월");
            obj.set_cssclass("sta_WF_tablelabel");
            this.divData.addChild(obj.name, obj);

            obj = new Static("staBgCD_DEPT_BH","staCD_DEPT_BH:-1","staTitle:5",null,"30","10",null,null,null,null,null,this.divData.form);
            obj.set_taborder("21");
            obj.set_cssclass("sta_WF_tablebg");
            obj.set_text("");
            this.divData.addChild(obj.name, obj);

            obj = new Static("staBgCD_SITE","staCD_SITE:-1","staBgCD_DEPT_BH:-1",null,"30","10",null,null,null,null,null,this.divData.form);
            obj.set_taborder("21");
            obj.set_cssclass("sta_WF_tablebg");
            obj.set_text("");
            this.divData.addChild(obj.name, obj);

            obj = new Static("staBgCD_AFTER","staCD_AFTER:-1","staBgCD_SITE:-1",null,"30","10",null,null,null,null,null,this.divData.form);
            obj.set_taborder("21");
            obj.set_cssclass("sta_WF_tablebg");
            obj.set_text("");
            this.divData.addChild(obj.name, obj);

            obj = new Static("staBgCD_ACCOST","staCD_ACCOST:-1","staBgCD_AFTER:-1",null,"30","10",null,null,null,null,null,this.divData.form);
            obj.set_taborder("21");
            obj.set_cssclass("sta_WF_tablebg");
            obj.set_text("");
            this.divData.addChild(obj.name, obj);

            obj = new Static("staBgCF_ACCOST","staCF_ACCOST:-1","staBgCD_ACCOST:-1",null,"30","10",null,null,null,null,null,this.divData.form);
            obj.set_taborder("21");
            obj.set_cssclass("sta_WF_tablebg");
            obj.set_text("");
            this.divData.addChild(obj.name, obj);

            obj = new Static("staBgYM_MAGAM","staYM_MAGAM:-1","staBgCF_ACCOST:-1",null,"30","10",null,null,null,null,null,this.divData.form);
            obj.set_taborder("21");
            obj.set_cssclass("sta_WF_tablebg");
            obj.set_text("");
            this.divData.addChild(obj.name, obj);

            obj = new Edit("edtCD_DEPT_BH","staCD_DEPT_BH:5","staCD_DEPT_BH:-25","115","20",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("35");
            obj.set_readonly("true");
            this.divData.addChild(obj.name, obj);

            obj = new Edit("edtDS_DEPT_BH","edtCD_DEPT_BH:5","staCD_DEPT_BH:-25","160","20",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("35");
            obj.set_readonly("true");
            this.divData.addChild(obj.name, obj);

            obj = new Edit("edtCD_SITE","staCD_SITE:5","staCD_SITE:-25","115","20",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("35");
            obj.set_readonly("true");
            this.divData.addChild(obj.name, obj);

            obj = new Edit("edtDS_SITE","edtCD_SITE:5","staCD_SITE:-25","160","20",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("35");
            obj.set_readonly("true");
            this.divData.addChild(obj.name, obj);

            obj = new Div("ccfCD_AFTER","staCD_AFTER:5","staCD_AFTER:-25","280","20",null,null,null,null,null,null,this.divData.form);
            obj.getSetter("CDTextWidth").set("100");
            obj.set_taborder("1");
            obj.set_url("cmm::cmmCodeFind.xfdl");
            obj.set_text("");
            obj.getSetter("BeforeUserDataSetParam").set("fnBeforeUserDataSetParam");
            obj.getSetter("AfterCDTextChanged").set("fnAfterCDTextChanged");
            this.divData.addChild(obj.name, obj);

            obj = new Edit("edtCD_ACCOST","staCD_ACCOST:5","staCD_ACCOST:-25","115","20",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("35");
            obj.set_readonly("true");
            this.divData.addChild(obj.name, obj);

            obj = new Edit("edtDS_ACCOST","edtCD_ACCOST:5","staCD_ACCOST:-25","160","20",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("35");
            obj.set_readonly("true");
            this.divData.addChild(obj.name, obj);

            obj = new Div("ccfCD_ACCOST","staCF_ACCOST:5","staCF_ACCOST:-25","280","20",null,null,null,null,null,null,this.divData.form);
            obj.getSetter("CDTextWidth").set("100");
            obj.set_taborder("1");
            obj.set_url("cmm::cmmCodeFind.xfdl");
            obj.set_text("");
            obj.getSetter("BeforeUserDataSetParam").set("fnBeforeUserDataSetParam");
            obj.getSetter("AfterCDTextChanged").set("fnAfterCDTextChanged");
            this.divData.addChild(obj.name, obj);

            obj = new Div("ctclYM_MAGAM","staYM_MAGAM:5","staYM_MAGAM:-25","90","20",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("7");
            obj.set_url("cmm::cmmCalMM.xfdl");
            this.divData.addChild(obj.name, obj);

            obj = new Button("btnConf","177","215","69","27",null,null,null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_text("확인");
            this.addChild(obj.name, obj);

            obj = new Button("btnCancel","253","215","69","27",null,null,null,null,null,null,this);
            obj.set_taborder("3");
            obj.set_text("취소");
            this.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this
            obj = new Layout("default","",this._adjust_width,this._adjust_height,this,function(p){});
            this.addLayout(obj.name, obj);
            
            // BindItem Information
            obj = new BindItem("item01","divData.form.edtCD_DEPT_BH","value","dsList","CD_DEPT_ACNT");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item02","divData.form.edtDS_DEPT_BH","value","dsList","DS_DEPT_ACNT");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item03","divData.form.edtCD_SITE","value","dsList","CD_SITE");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item04","divData.form.edtDS_SITE","value","dsList","DS_SITE");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item05","divData.form.ccfCD_AFTER.form.CDTextBox","value","dsList","CD_AFTER");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item06","divData.form.ccfCD_AFTER.form.DSTextBox","value","dsList","DS_AFTER");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item07","divData.form.edtCD_ACCOST","value","dsList","CD_ACCOST");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item08","divData.form.edtDS_ACCOST","value","dsList","DS_ACCOST");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item09","divData.form.ccfCD_ACCOST.form.CDTextBox","value","dsList","CFCD_ACCOST");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item10","divData.form.ccfCD_ACCOST.form.DSTextBox","value","dsList","CFDS_ACCOST");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item11","divData.form.ctclYM_MAGAM.form.TextBox","value","dsList","YM_MAGAM");
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
        this.registerScript("DHF_PREPAY_SLIPDLG.xfdl", function() {
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

        	this.dsList.addRow();
        	this.dsList.setColumn(0, "CD_DEPT_ACNT", this.AuthClient.CD_DEPT);
        	this.dsList.setColumn(0, "DS_DEPT_ACNT", this.AuthClient.DS_DEPT);
        	this.dsList.setColumn(0, "CD_SITE", this.getOwnerFrame().CD_SITE);
        	this.dsList.setColumn(0, "DS_SITE", this.getOwnerFrame().DS_SITE);
        	this.dsList.setColumn(0, "CD_ACCOST", this.getOwnerFrame().CD_ACCOST);
        	this.dsList.setColumn(0, "DS_ACCOST", this.getOwnerFrame().DS_ACCOST);
        	this.dsList.setColumn(0, "CD_CORP", this.getOwnerFrame().CD_CORP);

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
        	this.edtCD_DEPT_BH = this.divData.form.edtCD_DEPT_BH;
        	this.edtDS_DEPT_BH = this.divData.form.edtDS_DEPT_BH;
        	this.edtCD_SITE    = this.divData.form.edtCD_SITE;
        	this.edtDS_SITE    = this.divData.form.edtDS_SITE;
        	this.edtCD_ACCOST  = this.divData.form.edtCD_ACCOST;
        	this.edtDS_ACCOST  = this.divData.form.edtDS_ACCOST;
        	this.ccfCD_ACCOST  = this.divData.form.ccfCD_ACCOST;
        	this.ccfDS_ACCOST  = this.divData.form.ccfDS_ACCOST;
        	this.ccfCD_AFTER  = this.divData.form.ccfCD_AFTER;
        	this.ctclYM_MAGAM  = this.divData.form.ctclYM_MAGAM;
        };

        /************************************************************************
         * 이벤트 설정
         ************************************************************************/
        this.fnSetEvent = function() {

        	this.ccfCD_AFTER.CodeFindName = "DHX_CFACNTUNIT";
        	//this.ccfCD_ACCOST.CodeFindName = "DHX_CFACCOST";
        	this.ccfCD_ACCOST.CodeFindName = "DHX_COMMON_CODEFIND_SELECT";

        	this.dsList.addEventHandler("oncolumnchanged", this.dsList_ColumnChanged, this);
        	this.divData.form.ccfCD_AFTER.BeforeUserDataSetParam = "fnBeforeUserDataSetParam";
        	this.divData.form.ccfCD_ACCOST.BeforeUserDataSetParam = "fnBeforeUserDataSetParam";
        	this.divData.form.ccfCD_AFTER.AfterCDTextChanged = "fnAfterCDTextChanged";
        	//this.divData.form.ccfCD_ACCOST.AfterCDTextChanged = "fnAfterCDTextChanged";
        };

        /************************************************************************
         * 파라미터 설정
         ************************************************************************/
        this.fnSetParameter = function() {
        	this.dsSave = new Dataset();
        	this.dsSave.addColumn("CD_CORP", "string");
        	this.dsSave.addColumn("CD_DEPT_BH", "string");
        	this.dsSave.addColumn("CD_DEPT_BE", "string");
        	this.dsSave.addColumn("CD_DEPT_AFTER", "string");
        	this.dsSave.addColumn("YM_MAGAM", "string");
        	this.dsSave.addColumn("PRE_CD_COST", "string");
        	this.dsSave.addColumn("CD_COST", "string");
        	this.dsSave.addColumn("ID_INSERT", "string");
        }

        /************************************************************************
         * 컨트롤 이벤트
         ************************************************************************/

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
        this.fnCallback = function(svcID, errorCode, errorMsg, args)
        {

        }

        /************************************************************************
         * 코드파인드 이벤트
         ************************************************************************/
        this.fnBeforeUserDataSetParam = function(id, dsUserParam, nrow) {
        	var sCdCorp = this.dsList.getColumn(0, "CD_CORP");
        	switch(id) {
        		case "ccfCD_AFTER":
        			if(this.gfnIsNull(sCdCorp)){
        				this.gfnAlert("법인코드를 선택하세요.");
        				this.ccfCD_CORP.form.CDTextBox.setFocus();
        				return false;
        			}

        			dsUserParam.setColumn(nrow, "CD_DEPT_UPPER"	, "");						//상위부서
        			dsUserParam.setColumn(nrow, "YN_SLIPACCEPT"	, "Y");						//전표발행여부
        			dsUserParam.setColumn(nrow, "CD_CORP"		, sCdCorp);					//법인코드
        			dsUserParam.setColumn(nrow, "YN_USE"		, "Y");						//사용여부
        			dsUserParam.setColumn(nrow, "GR_DEPT_ACNT"	, "");						//현장/본사여부
        			//dsUserParam.setColumn(nrow, "ID_USER"	    , this.AuthClient.ID_USER);
        			//dsUserParam.setColumn(nrow, "GR_SEARCH"     , this.FormInfo.GR_SEARCH);
        			//dsUserParam.setColumn(nrow, "CD_DEPT"	    , this.AuthClient.CD_DEPT);

        // 		if (this.FormInfo.ID_GROUP == "M") {
        // 			this.ccfCD_AFTER.CodeFindName = "DHX_CFACNTUNIT_CLOSING";
        // 			dsUserParam.setColumn(nrow, "LEVEL", this.dsUserInfo.LEVLV_DEPT_ACNT);
        // 			dsUserParam.setColumn(nrow, "ACNTUNIT", this.dsUserInfo.LEVCD_DEPT_ACNT);
        // 			dsUserParam.setColumn(nrow, "YN_CORP", "Y");
        // 			dsUserParam.setColumn(nrow, "CD_CORP", "01");
        // 		}
        // 		else {
        // 			this.ccfCD_AFTER.CodeFindName = "DHX_CFBALANCE_ACNTUNIT";
        // 			dsUserParam.setColumn(nrow, "LEVEL", this.dsUserInfo.LEVLV_DEPT_ACNT);
        // 			dsUserParam.setColumn(nrow, "ACNTUNIT", this.dsUserInfo.LEVCD_DEPT_ACNT);
        // 			dsUserParam.setColumn(nrow, "CD_CORP", "01");
        // 		}
        		break;
        		case "ccfCD_ACCOST":
        			dsUserParam.setColumn(nrow, "CD_SYSTEM"	, "DH");						//시스템코드
        			dsUserParam.setColumn(nrow, "CD_TYPE"	, "A13");						//공통분류코드
        		break;
        	}
        	return true;
        };

        this.fnAfterCDTextChanged = function(id, codeFindData) {
        	// 코드,명칭 외 추가 컬럼 처리
        	var arr = codeFindData; //this.ccfCD_DEPT_ORG.form.SelectedData; 둘다 사용가능
        	if (arr.length > 0) {
         		if(id == "ccfCD_AFTER")
         		{
        			this.dsList.setColumn(0, "CD_AFTER", arr[0]["CD_DEPT_ACNT"]);
        			this.dsList.setColumn(0, "DS_AFTER", arr[0]["DS_DEPT_ACNT"]);
         		}
        // 		else if(id == "ccfCD_ACCOST")
        //  		{
        // 			this.dsList.setColumn(0, "CFCD_ACCOST", arr[0]["CD_COST"]);
        // 			this.dsList.setColumn(0, "CFDS_ACCOST", arr[0]["DS_COST"]);
        //  		}
        	}
        }

        /************************************************************************
         * 그리드 이벤트
         ************************************************************************/

        /************************************************************************
         * 기타 이벤트
         ************************************************************************/
        //취소버튼 클릭
        this.btnCancel_onclick = function(obj,e)
        {
        	this.getParentContext().close();
        };

        //확인버튼 클릭
        this.btnConf_onclick = function(obj,e)
        {
        	this.fnSave();
        };

        this.btnDel_onclick = function(obj,e)
        {
        	this.gfnConfirm("삭제를 진행하시겠습니까?", "fnBtnDelCallback");

        };

        this.fnSave = function(){

        	if(this.gfnIsNull(this.dsList.getColumn(0, "CD_AFTER"))){
        		this.gfnAlert("원가투입현장을 선택 하십시오.");
        		return false;
        	}
        	if(this.gfnIsNull(this.dsList.getColumn(0, "CFCD_ACCOST"))){
        		this.gfnAlert("정산원가코드를 입력 하십시오.");
        		return false;
        	}
        	if(this.gfnIsNull(this.dsList.getColumn(0, "YM_MAGAM"))){
        		this.gfnAlert("결산년월을 입력 하십시오.");
        		return false;
        	}

        	this.dsSave.clearData();
        	var nrow = this.dsSave.addRow();
        	this.dsSave.setColumn(nrow, "CD_CORP", this.dsList.getColumn(0, "CD_CORP"));
        	this.dsSave.setColumn(nrow, "CD_DEPT_BH", this.AuthClient.CD_DEPT);
        	this.dsSave.setColumn(nrow, "CD_DEPT_BE", this.dsList.getColumn(0, "CD_SITE"));
        	this.dsSave.setColumn(nrow, "CD_DEPT_AFTER", this.dsList.getColumn(0, "CD_AFTER"));
        	this.dsSave.setColumn(nrow, "YM_MAGAM", this.dsList.getColumn(0, "YM_MAGAM"));
        	this.dsSave.setColumn(nrow, "PRE_CD_COST", this.dsList.getColumn(0, "CD_ACCOST"));
        	this.dsSave.setColumn(nrow, "CD_COST", this.dsList.getColumn(0, "CFCD_ACCOST"));
        	this.dsSave.setColumn(nrow, "ID_INSERT", this.AuthClient.ID_USER);

        	trace("this.dsSave==>>", this.dsSave.saveXML());

        	var strSvcId    = "save";
        	var strSvcType  = "grid";
        	var inProc		= "_dsProc";
        	var inData      = "save=dsSave";
        	var outData     = "";
        	var strArg      = "";
        	var callBackFnc = "fnCallback";

        	this.gfnTransaction( strSvcId ,
        						strSvcType ,
        						inProc,
        						inData ,
        						outData ,
        						strArg,
        						callBackFnc);
         };
        this.fnBtnDelCallback = function(strId, val)
        {
        	if(val == true)
        	{
        		this.dsSearch.setColumn(0, "IUD_FLAG", "D");
        		this.fnSave();
        	}
        }
        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.form_onload,this);
            this.addEventHandler("ondeactivate",this.form_ondeactivate,this);
            this.addEventHandler("onbeforeclose",this.form_onbeforeclose,this);
            this.btnConf.addEventHandler("onclick",this.btnConf_onclick,this);
            this.btnCancel.addEventHandler("onclick",this.btnCancel_onclick,this);
        };
        this.loadIncludeScript("DHF_PREPAY_SLIPDLG.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
