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
            this.set_titletext("점검후 리포트 입력팝업");
            if (Form == this.constructor)
            {
                this._setFormPosition(495,316);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("_dsProc", this);
            obj._setContents("<ColumnInfo><Column id=\"TARGET\" type=\"STRING\" size=\"256\"/><Column id=\"SP\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"TARGET\">save</Col><Col id=\"SP\">DBZPR_SITEERPDATA_BATCH</Col></Row><Row><Col id=\"TARGET\">combo</Col><Col id=\"SP\">DBXPR_COMBO_SELECT</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsReturn", this);
            obj._setContents("<ColumnInfo><Column id=\"CD_SITE\" type=\"STRING\" size=\"256\"/><Column id=\"DS_SITE\" type=\"STRING\" size=\"256\"/><Column id=\"TY_UMGB\" type=\"STRING\" size=\"256\"/><Column id=\"DS_UMGB\" type=\"STRING\" size=\"256\"/><Column id=\"DT_WRITE\" type=\"STRING\" size=\"256\"/><Column id=\"DT_CHECK_FROM\" type=\"STRING\" size=\"256\"/><Column id=\"DT_CHECK_TO\" type=\"STRING\" size=\"256\"/><Column id=\"NM_CHECKER\" type=\"STRING\" size=\"256\"/><Column id=\"NM_SITE_MANAGER\" type=\"STRING\" size=\"256\"/><Column id=\"DT_JOBEND\" type=\"STRING\" size=\"256\"/><Column id=\"NM_SOJANG\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row/></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsTY_UMGB", this);
            obj._setContents("<ColumnInfo><Column id=\"CD_CODE\" type=\"STRING\" size=\"256\"/><Column id=\"DS_CODE\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Static("staTitle","20","10","470","22",null,null,null,null,null,null,this);
            obj.set_taborder("12");
            obj.set_text("점검후 리포트 입력항목");
            obj.set_cssclass("sta_TITLE_Bg");
            this.addChild(obj.name, obj);

            obj = new Static("staItem01","20","staTitle:10","100","30",null,null,null,null,null,null,this);
            obj.set_taborder("13");
            obj.set_text("단지");
            obj.set_cssclass("sta_WF_tablelabel");
            this.addChild(obj.name, obj);

            obj = new Static("staBar01","staItem01:-1","staTitle:10","356","30",null,null,null,null,null,null,this);
            obj.set_taborder("14");
            obj.set_cssclass("sta_WF_tablebg");
            this.addChild(obj.name, obj);

            obj = new Edit("edtCD_SITE","staItem01:5","staTitle:15","80","20",null,null,null,null,null,null,this);
            obj.set_taborder("9");
            obj.set_value("");
            obj.set_readonly("true");
            obj.set_text("");
            this.addChild(obj.name, obj);

            obj = new Edit("edtDS_SITE","edtCD_SITE:5","staTitle:15","259","20",null,null,null,null,null,null,this);
            obj.set_taborder("10");
            obj.set_value("");
            obj.set_readonly("true");
            obj.set_text("");
            this.addChild(obj.name, obj);

            obj = new Static("staItem02","20","staItem01:-1","100","30",null,null,null,null,null,null,this);
            obj.set_taborder("15");
            obj.set_text("접수구분");
            obj.set_cssclass("sta_WF_tablelabel");
            this.addChild(obj.name, obj);

            obj = new Static("staBar02","staItem02:-1","staBar01:-1","356","30",null,null,null,null,null,null,this);
            obj.set_taborder("16");
            obj.set_cssclass("sta_WF_tablebg");
            this.addChild(obj.name, obj);

            obj = new Edit("edtDS_UMGB","staItem02:5","staBar01:4","125","20",null,null,null,null,null,null,this);
            obj.set_taborder("11");
            obj.set_value("");
            obj.set_readonly("true");
            obj.set_visible("false");
            obj.set_text("");
            this.addChild(obj.name, obj);

            obj = new Static("staItem03","20","staItem02:-1","100","30",null,null,null,null,null,null,this);
            obj.set_taborder("17");
            obj.set_text("작성일자");
            obj.set_cssclass("sta_WF_tablelabel");
            this.addChild(obj.name, obj);

            obj = new Static("staBar03","staItem03:-1","staBar02:-1","356","30",null,null,null,null,null,null,this);
            obj.set_taborder("18");
            obj.set_cssclass("sta_WF_tablebg");
            this.addChild(obj.name, obj);

            obj = new Calendar("calDT_WRITE","staItem03:5","staBar02:4","125","20",null,null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_dateformat("yyyy-MM-dd");
            obj.set_editformat("yyyyMMdd");
            obj.set_autoselect("true");
            this.addChild(obj.name, obj);

            obj = new Static("staItem04","20","staItem03:-1","100","30",null,null,null,null,null,null,this);
            obj.set_taborder("19");
            obj.set_text("점검기간");
            obj.set_cssclass("sta_WF_tablelabel");
            this.addChild(obj.name, obj);

            obj = new Static("staBar04","staItem04:-1","staBar03:-1","356","30",null,null,null,null,null,null,this);
            obj.set_taborder("20");
            obj.set_cssclass("sta_WF_tablebg");
            this.addChild(obj.name, obj);

            obj = new Calendar("calDT_CHECK_FROM","staItem04:5","staBar03:4","125","20",null,null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_dateformat("yyyy-MM-dd");
            obj.set_editformat("yyyyMMdd");
            obj.set_autoselect("true");
            this.addChild(obj.name, obj);

            obj = new Static("sta00","calDT_CHECK_FROM:5","staBar03:4","10","20",null,null,null,null,null,null,this);
            obj.set_taborder("21");
            obj.set_text("~");
            this.addChild(obj.name, obj);

            obj = new Calendar("calDT_CHECK_TO","sta00:5","staBar03:4","125","20",null,null,null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_dateformat("yyyy-MM-dd");
            obj.set_editformat("yyyyMMdd");
            obj.set_autoselect("true");
            this.addChild(obj.name, obj);

            obj = new Static("staItem05","20","staItem04:-1","100","30",null,null,null,null,null,null,this);
            obj.set_taborder("22");
            obj.set_text("점검원");
            obj.set_cssclass("sta_WF_tablelabel");
            this.addChild(obj.name, obj);

            obj = new Static("staBar05","staItem05:-1","staBar04:-1","356","30",null,null,null,null,null,null,this);
            obj.set_taborder("23");
            obj.set_cssclass("sta_WF_tablebg");
            this.addChild(obj.name, obj);

            obj = new Edit("edtNM_CHECKER","staItem05:5","staBar04:4","125","20",null,null,null,null,null,null,this);
            obj.set_taborder("3");
            this.addChild(obj.name, obj);

            obj = new Static("staItem06","20","staItem05:-1","100","30",null,null,null,null,null,null,this);
            obj.set_taborder("24");
            obj.set_text("현장담당자");
            obj.set_cssclass("sta_WF_tablelabel");
            this.addChild(obj.name, obj);

            obj = new Static("staBar06","staItem06:-1","staBar05:-1","356","30",null,null,null,null,null,null,this);
            obj.set_taborder("25");
            obj.set_cssclass("sta_WF_tablebg");
            this.addChild(obj.name, obj);

            obj = new Edit("edtNM_SITE_MANAGER","staItem06:5","staBar05:4","125","20",null,null,null,null,null,null,this);
            obj.set_taborder("4");
            this.addChild(obj.name, obj);

            obj = new Static("staItem07","20","staItem06:-1","100","30",null,null,null,null,null,null,this);
            obj.set_taborder("26");
            obj.set_text("조치완료일");
            obj.set_cssclass("sta_WF_tablelabel");
            this.addChild(obj.name, obj);

            obj = new Static("staBar07","staItem07:-1","staBar06:-1","356","30",null,null,null,null,null,null,this);
            obj.set_taborder("27");
            obj.set_cssclass("sta_WF_tablebg");
            this.addChild(obj.name, obj);

            obj = new Calendar("calDT_JOBEND","staItem07:5","staBar06:4","125","20",null,null,null,null,null,null,this);
            obj.set_taborder("5");
            obj.set_dateformat("yyyy-MM-dd");
            obj.set_editformat("yyyyMMdd");
            obj.set_autoselect("true");
            this.addChild(obj.name, obj);

            obj = new Static("staItem08","20","staItem07:-1","100","30",null,null,null,null,null,null,this);
            obj.set_taborder("28");
            obj.set_text("현장소장");
            obj.set_cssclass("sta_WF_tablelabel");
            this.addChild(obj.name, obj);

            obj = new Static("staBar08","staItem08:-1","staBar07:-1","356","30",null,null,null,null,null,null,this);
            obj.set_taborder("29");
            obj.set_cssclass("sta_WF_tablebg");
            this.addChild(obj.name, obj);

            obj = new Edit("edtNM_SOJANG","staItem08:5","staBar07:4","125","20",null,null,null,null,null,null,this);
            obj.set_taborder("6");
            this.addChild(obj.name, obj);

            obj = new Button("btnOk","40.20%","staBar08:10","45","21",null,null,null,null,null,null,this);
            obj.set_taborder("7");
            obj.set_text("확인");
            obj.getSetter("uWord").set("popup.ok");
            this.addChild(obj.name, obj);

            obj = new Button("btnCancle","248","staBar08:10","45","21",null,null,null,null,null,null,this);
            obj.set_taborder("8");
            obj.set_text("취소");
            obj.getSetter("uWord").set("popup.cancel");
            this.addChild(obj.name, obj);

            obj = new Combo("cboTY_UMGB","125","76","105","20",null,null,null,null,null,null,this);
            obj.set_taborder("30");
            obj.set_innerdataset("dsTY_UMGB");
            obj.set_datacolumn("DS_CODE");
            obj.set_codecolumn("CD_CODE");
            obj.set_visible("false");
            obj.set_text("전체");
            obj.set_value("");
            obj.set_index("0");
            this.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this
            obj = new Layout("default","",495,316,this,function(p){});
            this.addLayout(obj.name, obj);
            
            // BindItem Information
            obj = new BindItem("item7","edtCD_SITE","value","dsReturn","CD_SITE");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item0","calDT_WRITE","value","dsReturn","DT_WRITE");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item5","calDT_CHECK_FROM","value","dsReturn","DT_CHECK_FROM");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item6","calDT_CHECK_TO","value","dsReturn","DT_CHECK_TO");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item1","edtNM_CHECKER","value","dsReturn","NM_CHECKER");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item2","edtNM_SITE_MANAGER","value","dsReturn","NM_SITE_MANAGER");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item3","calDT_JOBEND","value","dsReturn","DT_JOBEND");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item4","edtNM_SOJANG","value","dsReturn","NM_SOJANG");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item8","edtDS_SITE","value","dsReturn","DS_SITE");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item9","edtDS_UMGB","value","dsReturn","DS_UMGB");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item10","cboTY_UMGB","value","dsReturn","TY_UMGB");
            this.addChild(obj.name, obj);
            obj.bind();
            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script
        this.registerScript("DBS_CHECK_PARAM_POPUP.xfdl", function() {
        /**
        *  컨설팅 표준화 작업
        *  @MenuPath    cmm > cmmPopup.xfdl (공통 팝업페이지)
        *  @FileName 	cmmPopup.xfdl
        *  @Creator 	consulting
        *  @CreateDate 	2017.10.19
        *  @Desction         스크립트 표준 및 주석 표준 정의
        ************** 소스 수정 이력 ***************************************************
        *  date          		Modifier                Description
        *******************************************************************************
        *  2017.03.09     	consulting 	                최초 생성
        *******************************************************************************
        */

        /************************************************************************************************
         * FORM 변수 선언 영역
         ************************************************************************************************/

        /***********************************************************************************************
        * FORM EVENT 영역(onload)
        /***********************************************************************************************/
        this.form_onload = function(obj,e)
        {
        	this.gfnFormOnLoad(this); //초기화[필수]

        	this.fnSetEvent();
        	this.fnSetParameter();
        	if( this.gfnNvl(this.getOwnerFrame().CF_TY_FLAG,"") == "CBO" ){
        		this.fnSetCombo();
        	}
        };

        /************************************************************************
         * 변수 선언
         ************************************************************************/

        /************************************************************************
         * 이벤트 설정
         ************************************************************************/
        this.fnSetEvent = function() {
        };
        /************************************************************************
         * 파라미터 설정
         ************************************************************************/
        this.fnSetParameter = function() {
        	var strToday = this.gfnGetDate();

        	if( this.gfnNvl(this.getOwnerFrame().CF_TY_FLAG,"") == "CBO" ){
        		this.cboTY_UMGB.set_visible(true);
        	} else {
        		this.edtDS_UMGB.set_visible(true);
        	}

        	this.dsReturn.setColumn(0,"CD_SITE",this.gfnNvl(this.getOwnerFrame().CF_CD_SITE,""));
        	this.dsReturn.setColumn(0,"DS_SITE",this.gfnNvl(this.getOwnerFrame().CF_DS_SITE,""));
        	this.dsReturn.setColumn(0,"TY_UMGB",this.gfnNvl(this.getOwnerFrame().CF_TY_UMGB,""));
        	this.dsReturn.setColumn(0,"DS_UMGB",this.gfnNvl(this.getOwnerFrame().CF_DS_UMGB,""));
        	this.dsReturn.setColumn(0,"DT_WRITE",strToday);
        	this.dsReturn.setColumn(0,"DT_CHECK_FROM","");
        	this.dsReturn.setColumn(0,"DT_CHECK_TO","");
        	this.dsReturn.setColumn(0,"NM_CHECKER","");
        	this.dsReturn.setColumn(0,"NM_SITE_MANAGER","");
        	this.dsReturn.setColumn(0,"DT_JOBEND","");
        	this.dsReturn.setColumn(0,"NM_SOJANG","");
        };

        /************************************************************************
         * Validate
         ************************************************************************/
        /*
         *	조회 Validate
         */
        this.fnSaveValidate = function() {
        	var validate = true;
        	if (this.gfnIsNull(this.ccfCD_SITE.form.CDTextBox.text)) {
        		validate = false;
        		// Alert후 실행할 처리
        		this.fnVaidateCallback = function() {
        			this.ccfCD_SITE.form.CDTextBox.setFocus();
        		}
        		this.gfnAlert("단지코드를 입력 하셔야 합니다.", "fnVaidateCallback");
        	}

        	return validate;
        };

        /************************************************************************************************
         * 각 COMPONENT 별 EVENT 영역
         ************************************************************************************************/
        /**
        * @ OK버튼이벤트
        */
        this.btnOk_onclick = function(obj,e)
        {
        	this.close(this.dsReturn.saveXML());
        };

        /**
        * @ 취소버튼이벤트
        */
        this.btnCancle_onclick = function(obj,e)
        {
        	this.close();
        };

         /************************************************************************
         * 콜백 이벤트
         ************************************************************************/
        /*
         *	콜백 처리
         */
        this.fnCallback = function(svcID, errorCode, errorMsg)
        {
        	if (svcID == "combo") {
        		this.cboTY_UMGB.set_index(0);
        	}
        };

        /************************************************************************
         * 기타 이벤트
         ************************************************************************/
        /*
         *	콤보박스 값 설정
         */
        this.fnSetCombo = function() {
        	this.dsCombo = new Dataset();
        	this.dsCombo.addColumn("CD_SYSTEM", "string");
        	this.dsCombo.addColumn("CD_TYPE", "string");
        	this.dsCombo.addColumn("DS_ETC1", "string");

        	this.dsCombo.addRow();
        	this.dsCombo.setColumn(0, "CD_SYSTEM", "DB");
        	this.dsCombo.setColumn(0, "CD_TYPE", "S2");    // 접수구분
        	this.dsCombo.setColumn(0, "DS_ETC1", "BS");    // 접수구분

        	var strSvcId    = "combo";
        	var strSvcType  = "select";
        	var inProc		= "_dsProc";
        	var inData      = "combo=dsCombo";
        	var outData     = "dsTY_UMGB=combo0";
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
        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.form_onload,this);
            this.btnOk.addEventHandler("onclick",this.btnOk_onclick,this);
            this.btnCancle.addEventHandler("onclick",this.btnCancle_onclick,this);
        };
        this.loadIncludeScript("DBS_CHECK_PARAM_POPUP.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
