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
            this.set_titletext("발주계획항목생성");
            if (Form == this.constructor)
            {
                this._setFormPosition(460,255);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("_dsProc", this);
            obj._setContents("<ColumnInfo><Column id=\"TARGET\" type=\"STRING\" size=\"256\"/><Column id=\"SP\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"TARGET\">execute</Col><Col id=\"SP\">DWZPR_ORDPLN_EXECUTE</Col></Row><Row><Col id=\"SP\">DZXPR_COMBO_COMMON_SELECT_01</Col><Col id=\"TARGET\">combo_sel</Col></Row><Row><Col id=\"TARGET\">combo_sav</Col><Col id=\"SP\">DZXPR_COMBO_COMMON_SAVE_01</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsList", this);
            obj._setContents("<ColumnInfo><Column id=\"CD_SITE\" type=\"STRING\" size=\"256\"/><Column id=\"DS_SITE\" type=\"STRING\" size=\"256\"/><Column id=\"CD_ORD\" type=\"STRING\" size=\"256\"/><Column id=\"CD_DIV\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"CD_SITE\"/><Col id=\"CD_ORD\"/><Col id=\"CD_DIV\"/><Col id=\"DS_SITE\"/></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsCD_ORD", this);
            obj._setContents("");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsCD_DIV", this);
            obj._setContents("");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Div("divData","0","0",null,null,"0","0",null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_cssclass("div_DATA_Bg");
            obj.set_text("");
            this.addChild(obj.name, obj);

            obj = new Static("staTITLE","0","0","100%","30",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("0");
            obj.set_text("발주계획공종생성");
            obj.set_cssclass("sta_TITLE_Bg");
            obj.set_textAlign("center");
            this.divData.addChild(obj.name, obj);

            obj = new Static("staCD_SITE","0","staTITLE:5","87","30",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("1");
            obj.set_text("현장코드");
            obj.set_cssclass("sta_WF_tablelabel");
            obj.set_textAlign("right");
            this.divData.addChild(obj.name, obj);

            obj = new Static("staDT_FROM_TO","0","staCD_SITE:-1","87","30",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("2");
            obj.set_text("발주구분");
            obj.set_cssclass("sta_WF_tablelabel");
            obj.set_textAlign("right");
            this.divData.addChild(obj.name, obj);

            obj = new Static("staDT_END","0","staDT_FROM_TO:-1","87","30",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("3");
            obj.set_text("계획구분");
            obj.set_cssclass("sta_WF_tablelabel");
            obj.set_textAlign("right");
            this.divData.addChild(obj.name, obj);

            obj = new Static("staBg1","staCD_SITE:-1","staTITLE:5",null,"30","0%",null,null,null,null,null,this.divData.form);
            obj.set_taborder("4");
            obj.set_cssclass("sta_WF_tablebg");
            this.divData.addChild(obj.name, obj);

            obj = new Static("staBg2","staDT_FROM_TO:-1","staBg1:-1",null,"30","0%",null,null,null,null,null,this.divData.form);
            obj.set_taborder("5");
            obj.set_cssclass("sta_WF_tablebg");
            this.divData.addChild(obj.name, obj);

            obj = new Static("staBg3","staDT_END:-1","staBg2:-1",null,"30","0%",null,null,null,null,null,this.divData.form);
            obj.set_taborder("6");
            obj.set_cssclass("sta_WF_tablebg");
            this.divData.addChild(obj.name, obj);

            obj = new Edit("ctxtCD_SITE","staCD_SITE:5","staTITLE:10","90","20",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("7");
            obj.set_value("");
            obj.set_readonly("true");
            this.divData.addChild(obj.name, obj);

            obj = new Edit("ctxtDS_SITE","ctxtCD_SITE:3","staTITLE:10",null,"20","5",null,null,null,null,null,this.divData.form);
            obj.set_taborder("8");
            obj.set_value("");
            obj.set_readonly("true");
            this.divData.addChild(obj.name, obj);

            obj = new Static("staMessage","25","staDT_END:5","400","25",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("9");
            obj.set_text("발주구분/계획구분 정보기준으로 발주계획공종을 자동생성합니다.");
            obj.set_textAlign("center");
            obj.set_font("bold 12px/normal \"Dotum\"");
            this.divData.addChild(obj.name, obj);

            obj = new Button("btnOk","32.5%","staMessage:20","60","20",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("10");
            obj.set_text("확인");
            this.divData.addChild(obj.name, obj);

            obj = new Button("btnCancel","57.5%","staMessage:20","60","20",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("11");
            obj.set_text("취소");
            this.divData.addChild(obj.name, obj);

            obj = new Combo("cboCD_ORD","92","69","100","20",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("12");
            obj.set_innerdataset("dsCD_ORD");
            obj.set_datacolumn("DS_CODE");
            obj.set_codecolumn("CD_CODE");
            obj.set_text("전체");
            obj.set_value("");
            obj.set_index("0");
            this.divData.addChild(obj.name, obj);

            obj = new Combo("cboCD_DIV","92","98","100","20",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("13");
            obj.set_innerdataset("dsCD_DIV");
            obj.set_datacolumn("DS_CODE");
            obj.set_codecolumn("CD_CODE");
            obj.set_text("전체");
            obj.set_value("");
            obj.set_index("0");
            this.divData.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this
            obj = new Layout("default","",this._adjust_width,this._adjust_height,this,function(p){});
            this.addLayout(obj.name, obj);
            
            // BindItem Information
            obj = new BindItem("item0","divData.form.ctxtCD_SITE","value","dsList","CD_SITE");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item5","divData.form.cboCD_ORD","value","dsList","CD_ORD");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item2","divData.form.cboCD_DIV","value","dsList","CD_DIV");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item1","divData.form.ctxtDS_SITE","value","dsList","DS_SITE");
            this.addChild(obj.name, obj);
            obj.bind();
            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script
        this.registerScript("DWZ_ORDPLNCRTDLG.xfdl", function() {
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

        	this.dsList.setColumn(0, "CD_SITE", this.getOwnerFrame().CD_SITE);
        	this.dsList.setColumn(0, "DS_SITE", this.getOwnerFrame().DS_SITE);
        	this.fnSetComboSel();
        	this.fnSetComboSav();
        };

        /************************************************************************
         * 버튼 설정 : 화면(Tab) 전환시 마다 호출
         * 서브버튼 사용 및 공통버튼 강제 제어시 여기서 처리
         ************************************************************************/
        this.fnSetButton = function() {
        	/*this.FormBtns.Select.set_enable(false);*/
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
        	this.dxGrid = this.divData.form.objGrid;
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
        	this.dsExecute = new Dataset();
        	this.dsExecute.addColumn("TY_WRK", "string");
        	this.dsExecute.addColumn("ID_USER", "string");
        	this.dsExecute.addColumn("CD_SITE", "string");
        	this.dsExecute.addColumn("CD_ORD", "string");
        	this.dsExecute.addColumn("CD_DIV", "string");
        }
        /************************************************************************
         * 컨트롤 이벤트
         ************************************************************************/
        this.fnExecute = function()
        {
        	this.dsExecute.clearData();

        	var nrow = this.dsExecute.addRow();
        	this.dsExecute.setColumn(nrow, "TY_WRK", "CRT");
        	this.dsExecute.setColumn(nrow, "ID_USER", this.AuthClient.ID_USER);
        	this.dsExecute.setColumn(nrow, "CD_SITE", this.dsList.getColumn(0, "CD_SITE"));
        	this.dsExecute.setColumn(nrow, "CD_ORD", this.dsList.getColumn(0, "CD_ORD"));
        	this.dsExecute.setColumn(nrow, "CD_DIV", this.dsList.getColumn(0, "CD_DIV"));

        	if (this.dsExecute.rowcount == 0) return;

        	var strSvcId    = "execute";
        	var strSvcType  = "save";
        	var inProc		= "_dsProc";
            var inData     = "execute=dsExecute";
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
        }

        /************************************************************************
         * 콜백 이벤트
         ************************************************************************/
        /*
         *	콜백 처리
         */
        this.fnCallback = function(svcID, errorCode, errorMsg)
        {
        	if (svcID == "execute") {
        		if (errorCode == 0) {

        			this.fnExecute_callback = function()
        			{
        				this.getParentContext().close(true);
        			}

        			this.gfnAlert("발주계획공종생성이 정상 처리되었습니다.", "fnExecute_callback");

        		} else {
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
        	this.fnExecute();
        };

        // 취소 버튼 클릭
        this.divData_btnCancel_onclick = function(obj,e)
        {
        	// this.close()가 작동하지 않았고,
        	// 부모의 callback 함수로 데이터를 넘겨주기 위해 작성되었습니다.
        	this.getParentContext().close(false);
        };


        this.fnSetComboSel = function() {

        	this.dsComboSel = new Dataset();
        	this.dsComboSel.addColumn("CD_SYSTEM", "string");
        	this.dsComboSel.addColumn("CD_TYPE", "string");
        	this.dsComboSel.addColumn("YN_USE", "string");
        	this.dsComboSel.addColumn("YN_ALL", "string");

        	this.dsComboSel.addRow();	// 채용구분(검색조건)
        	this.dsComboSel.setColumn(0, "CD_SYSTEM", "DW");
        	this.dsComboSel.setColumn(0, "CD_TYPE", "81");
        	this.dsComboSel.setColumn(0, "YN_USE", "Y");
        	this.dsComboSel.setColumn(0, "YN_ALL", "Y");

        	var strSvcId    = "combo_sel";
        	var strSvcType  = "select";
        	var inProc		= "_dsProc";
        	var inData      = "combo_sel=dsComboSel";
        	var outData     = "dsCD_ORD=combo_sel0";
        	var strArg      = "";
        	var callBackFnc = "fnCallbackCombo";

        	this.gfnTransaction( strSvcId , 	// transaction을 구분하기 위한 svc id값
        						strSvcType , 	// transaction을 요청할 구분
        						inProc,			// Procedure 정보 Dataset 이름
        						inData , 		// 입력값으로 보낼 dataset id , a=b형태로 실제이름과 입력이름을 매칭
        						outData , 		// 처리결과값으로 받을 dataset id, a=b형태로 실제이름과 입력이름을 매칭
        						strArg, 			// 입력갑스로 보낼 arguments, strFormData="20120607"
        						callBackFnc); // 통신방법 정의 [생략가능]
        };

        this.fnSetComboSav = function() {

        	this.dsComboSav = new Dataset();
        	this.dsComboSav.addColumn("CD_SYSTEM", "string");
        	this.dsComboSav.addColumn("CD_TYPE", "string");
        	this.dsComboSav.addColumn("YN_USE", "string");
        	this.dsComboSav.addColumn("YN_MAND", "string");

        	this.dsComboSav.addRow();	// 재직구분(검색조건)
        	this.dsComboSav.setColumn(0, "CD_SYSTEM", "DC");
        	this.dsComboSav.setColumn(0, "CD_TYPE", "C30");
        	this.dsComboSav.setColumn(0, "YN_USE", "Y");
        	this.dsComboSav.setColumn(0, "YN_MAND", "Y");


        	var strSvcId    = "combo_sav";
        	var strSvcType  = "select";
        	var inProc		= "_dsProc";
        	var inData      = "combo_sav=dsComboSav";
        	var outData     = "dsCD_DIV=combo_sav0";
        	var strArg      = "";
        	var callBackFnc = "fnCallbackCombo";

        	this.gfnTransaction( strSvcId , 	// transaction을 구분하기 위한 svc id값
        						strSvcType , 	// transaction을 요청할 구분
        						inProc,			// Procedure 정보 Dataset 이름
        						inData , 		// 입력값으로 보낼 dataset id , a=b형태로 실제이름과 입력이름을 매칭
        						outData , 		// 처리결과값으로 받을 dataset id, a=b형태로 실제이름과 입력이름을 매칭
        						strArg, 			// 입력갑스로 보낼 arguments, strFormData="20120607"
        						callBackFnc); // 통신방법 정의 [생략가능]
        };

        this.fnCallbackCombo = function(svcID, errorCode, errorMsg)
        {
        	if(svcID == "combo_sel") {
         		this.divData.form.cboCD_ORD.set_index(0);
        	}else if(svcID == "combo_sav") {
         		this.divData.form.cboCD_DIV.set_index(0);
        	}
        };
        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.form_onload,this);
            this.divData.form.btnOk.addEventHandler("onclick",this.divData_btnOk_onclick,this);
            this.divData.form.btnCancel.addEventHandler("onclick",this.divData_btnCancel_onclick,this);
        };
        this.loadIncludeScript("DWZ_ORDPLNCRTDLG.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
