(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("DSE_RETIRE_SLIP");
            this.set_titletext("출역 등록");
            if (Form == this.constructor)
            {
                this._setFormPosition(1280,720);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("dsList", this);
            obj.set_useclientlayout("true");
            obj._setContents("<ColumnInfo><Column id=\"CD_SITE\" type=\"STRING\" size=\"256\"/><Column id=\"DS_SITE\" type=\"STRING\" size=\"256\"/><Column id=\"DT_SLIP\" type=\"STRING\" size=\"256\"/><Column id=\"NO_SEQ\" type=\"STRING\" size=\"256\"/><Column id=\"TY_GUBUN\" type=\"STRING\" size=\"256\"/><Column id=\"CD_ACCOUNT_D\" type=\"STRING\" size=\"256\"/><Column id=\"CD_ACCOUNT_C\" type=\"STRING\" size=\"256\"/><Column id=\"CD_SITE_BE\" type=\"STRING\" size=\"256\"/><Column id=\"DS_SITE_BE\" type=\"STRING\" size=\"256\"/><Column id=\"CD_SITE_BH\" type=\"STRING\" size=\"256\"/><Column id=\"DS_SITE_BH\" type=\"STRING\" size=\"256\"/><Column id=\"CD_VENDOR\" type=\"STRING\" size=\"256\"/><Column id=\"DS_VENDOR\" type=\"STRING\" size=\"256\"/><Column id=\"CD_GIBUL\" type=\"STRING\" size=\"256\"/><Column id=\"DS_GIBUL\" type=\"STRING\" size=\"256\"/><Column id=\"CD_GIBUL_GROUP\" type=\"STRING\" size=\"256\"/><Column id=\"DS_GIBUL_GROUP\" type=\"STRING\" size=\"256\"/><Column id=\"CD_JIGUB\" type=\"STRING\" size=\"256\"/><Column id=\"DS_JIGUB\" type=\"STRING\" size=\"256\"/><Column id=\"AM_RETIRE\" type=\"STRING\" size=\"256\"/><Column id=\"AM_SODUK\" type=\"STRING\" size=\"256\"/><Column id=\"AM_JUMIN\" type=\"STRING\" size=\"256\"/><Column id=\"AM_TOIJIKGONGJE\" type=\"STRING\" size=\"256\"/><Column id=\"DS_REM\" type=\"STRING\" size=\"256\"/><Column id=\"CD_APPROVAL\" type=\"STRING\" size=\"256\"/><Column id=\"CD_TRADE\" type=\"STRING\" size=\"256\"/><Column id=\"NO_APPROVAL_SEQ\" type=\"STRING\" size=\"256\"/><Column id=\"NO_APPROVAL_CANCEL_SEQ\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("_dsProc", this);
            obj._setContents("<ColumnInfo><Column id=\"TARGET\" type=\"STRING\" size=\"256\"/><Column id=\"SP\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"TARGET\">select</Col><Col id=\"SP\">DSEPR_RETIRE_SLIP_SELECT</Col></Row><Row><Col id=\"TARGET\">save</Col><Col id=\"SP\">DSEPR_RETIRE_SLIP_INSERT</Col></Row><Row><Col id=\"TARGET\">combo</Col><Col id=\"SP\">DZXPR_CODE_LIST_SELECT</Col></Row><Row><Col id=\"TARGET\">slip</Col><Col id=\"SP\">DSEPR_RETIRE_SLIP_INSERT2</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsSearch", this);
            obj._setContents("<ColumnInfo><Column id=\"CD_SITE\" type=\"STRING\" size=\"256\"/><Column id=\"DT_SLIP\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"CD_SITE\"/><Col id=\"DT_SLIP\"/></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsCD_ACCOUNT_D", this);
            obj._setContents("");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsCD_ACCOUNT_C", this);
            obj._setContents("");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsCD_GIBUL", this);
            obj._setContents("");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsCD_GIBUL_GROUP", this);
            obj._setContents("");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsCD_JIGUB", this);
            obj._setContents("");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Div("divSearch","0.0","10.0",null,"46.0","0",null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_cssclass("div_SEARCH_Bg");
            this.addChild(obj.name, obj);

            obj = new Static("sta00","0.0","10.0","144.0","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("1");
            obj.set_text("현장/부서 코드");
            obj.set_cssclass("sta_WF_SchLabelE");
            this.divSearch.addChild(obj.name, obj);

            obj = new Div("ccfCD_SITE","sta00:0.0","10.0","200","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.getSetter("CDTextWidth").set("70");
            obj.getSetter("CodeFindName").set("DZX_CFDEPTCORP");
            obj.set_taborder("0");
            obj.set_url("cmm::cmmCodeFind.xfdl");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("staDT_SLIP","ccfCD_SITE:0.0","10.0","144.0","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("2");
            obj.set_text("퇴직년월");
            obj.set_cssclass("sta_WF_SchLabel");
            this.divSearch.addChild(obj.name, obj);

            obj = new Div("ctclDT_SLIP","staDT_SLIP:0.0","10.0","80","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("3");
            obj.set_url("cmm::cmmCalMM.xfdl");
            this.divSearch.addChild(obj.name, obj);

            obj = new Div("divData","0","divSearch:10",null,null,"0","0",null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_cssclass("div_DATA_Bg");
            this.addChild(obj.name, obj);

            obj = new Static("staCD_ACCOUNT_D","0","0","150","30",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("0");
            obj.set_text("차변계정");
            obj.set_cssclass("sta_WF_tablelabelE");
            this.divData.addChild(obj.name, obj);

            obj = new Static("sta09","staCD_ACCOUNT_D:-1","0","250","30",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("1");
            obj.set_cssclass("sta_WF_tablebg");
            this.divData.addChild(obj.name, obj);

            obj = new Static("staCD_ACCOUNT_C","sta09:-1","0","150","30",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("2");
            obj.set_text("대변계정");
            obj.set_cssclass("sta_WF_tablelabelE");
            this.divData.addChild(obj.name, obj);

            obj = new Static("sta47_00","staCD_ACCOUNT_C:-1","0","250","30",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("3");
            obj.set_cssclass("sta_WF_tablebg");
            this.divData.addChild(obj.name, obj);

            obj = new Static("staDS_SITE_BE","0","29","150","30",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("4");
            obj.set_text("귀속부서");
            obj.set_cssclass("sta_WF_tablelabel");
            this.divData.addChild(obj.name, obj);

            obj = new Static("sta09_00","staDS_SITE_BE:-1","29","250","30",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("5");
            obj.set_cssclass("sta_WF_tablebg");
            this.divData.addChild(obj.name, obj);

            obj = new Static("staDS_SITE_BH","sta09_00:-1","29","150","30",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("6");
            obj.set_text("발생부서");
            obj.set_cssclass("sta_WF_tablelabel");
            this.divData.addChild(obj.name, obj);

            obj = new Static("sta47_00_00","staDS_SITE_BH:-1","29","250","30",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("7");
            obj.set_cssclass("sta_WF_tablebg");
            this.divData.addChild(obj.name, obj);

            obj = new Static("staCD_VENDOR","0","58","150","30",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("8");
            obj.set_text("거래처");
            obj.set_cssclass("sta_WF_tablelabel");
            this.divData.addChild(obj.name, obj);

            obj = new Static("sta09_00_00","staCD_VENDOR:-1","58","250","30",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("9");
            obj.set_cssclass("sta_WF_tablebg");
            this.divData.addChild(obj.name, obj);

            obj = new Static("staCD_GIBUL","sta09_00_00:-1","58","150","30",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("10");
            obj.set_text("지불방법");
            obj.set_cssclass("sta_WF_tablelabel");
            this.divData.addChild(obj.name, obj);

            obj = new Static("sta47_00_00_00","staCD_GIBUL:-1","58","250","30",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("11");
            obj.set_cssclass("sta_WF_tablebg");
            this.divData.addChild(obj.name, obj);

            obj = new Static("staCD_GIBUL_GROUP","0","87","150","30",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("12");
            obj.set_text("지불그룹");
            obj.set_cssclass("sta_WF_tablelabel");
            this.divData.addChild(obj.name, obj);

            obj = new Static("sta29_00_00_00","0","116","150","30",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("13");
            obj.set_text("퇴직금");
            obj.set_cssclass("sta_WF_tablelabel");
            this.divData.addChild(obj.name, obj);

            obj = new Static("staAM_RETIRE","sta29_00_00_00:-1","116","250","30",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("14");
            obj.set_cssclass("sta_WF_tablebg");
            this.divData.addChild(obj.name, obj);

            obj = new Static("sta09_00_01","staCD_GIBUL_GROUP:-1","87","250","30",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("15");
            obj.set_cssclass("sta_WF_tablebg");
            this.divData.addChild(obj.name, obj);

            obj = new Static("staCD_JIGUB","sta09_00_01:-1","87","150","30",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("16");
            obj.set_text("결재조건");
            obj.set_cssclass("sta_WF_tablelabel");
            this.divData.addChild(obj.name, obj);

            obj = new Static("sta53_00_00_00_00","staAM_RETIRE:-1","116","150","30",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("17");
            obj.set_text("소득세");
            obj.set_cssclass("sta_WF_tablelabel");
            this.divData.addChild(obj.name, obj);

            obj = new Static("staAM_SODUK","sta53_00_00_00_00:-1","116","250","30",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("18");
            obj.set_cssclass("sta_WF_tablebg");
            this.divData.addChild(obj.name, obj);

            obj = new Static("sta47_00_00_01","staCD_JIGUB:-1","87","250","30",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("19");
            obj.set_cssclass("sta_WF_tablebg");
            this.divData.addChild(obj.name, obj);

            obj = new Static("sta29_00_00_00_00","0","145","150","30",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("20");
            obj.set_text("주민세");
            obj.set_cssclass("sta_WF_tablelabel");
            this.divData.addChild(obj.name, obj);

            obj = new Static("staAM_JUMIN","sta29_00_00_00_00:-1","145","250","30",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("21");
            obj.set_cssclass("sta_WF_tablebg");
            this.divData.addChild(obj.name, obj);

            obj = new Static("sta53_00_00_00_00_00","staAM_JUMIN:-1","145","150","30",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("22");
            obj.set_text("퇴직공제부금");
            obj.set_cssclass("sta_WF_tablelabel");
            this.divData.addChild(obj.name, obj);

            obj = new Static("staAM_TOIJIKGONGJE","sta53_00_00_00_00_00:-1","145","250","30",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("23");
            obj.set_cssclass("sta_WF_tablebg");
            this.divData.addChild(obj.name, obj);

            obj = new Static("staDS_REM","0","174","150","90",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("24");
            obj.set_text("적요");
            obj.set_cssclass("sta_WF_tablelabel");
            this.divData.addChild(obj.name, obj);

            obj = new Static("sta09_00_00_00_00_00","staDS_REM:-1","174","648","90",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("25");
            obj.set_cssclass("sta_WF_tablebg");
            obj.set_text("");
            this.divData.addChild(obj.name, obj);

            obj = new Combo("cboCD_ACCOUNT_D","staCD_ACCOUNT_D:4","5","130","20",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("26");
            obj.set_innerdataset("dsCD_ACCOUNT_D");
            obj.set_codecolumn("CD_CODE");
            obj.set_datacolumn("DS_CODE");
            this.divData.addChild(obj.name, obj);

            obj = new Combo("cboCD_ACCOUNT_C","staCD_ACCOUNT_C:4","5","130","20",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("27");
            obj.set_innerdataset("dsCD_ACCOUNT_C");
            obj.set_codecolumn("CD_CODE");
            obj.set_datacolumn("DS_CODE");
            this.divData.addChild(obj.name, obj);

            obj = new Combo("cboCD_GIBUL","staCD_GIBUL:4","63","130","20",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("28");
            obj.set_innerdataset("dsCD_GIBUL");
            obj.set_codecolumn("CD_CODE");
            obj.set_datacolumn("DS_CODE");
            this.divData.addChild(obj.name, obj);

            obj = new Combo("cboCD_GIBUL_GROUP","staCD_GIBUL_GROUP:4","92","130","20",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("29");
            obj.set_innerdataset("dsCD_GIBUL_GROUP");
            obj.set_codecolumn("CD_CODE");
            obj.set_datacolumn("DS_CODE");
            this.divData.addChild(obj.name, obj);

            obj = new Combo("cboCD_JIGUB","staCD_JIGUB:4","92","130","20",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("30");
            obj.set_innerdataset("dsCD_JIGUB");
            obj.set_codecolumn("CD_CODE");
            obj.set_datacolumn("DS_CODE");
            this.divData.addChild(obj.name, obj);

            obj = new TextArea("txtDS_REM","staDS_REM:4","179","638","60",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("31");
            this.divData.addChild(obj.name, obj);

            obj = new Div("divDS_REM","staDS_REM:4","239","200","22",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("32");
            obj.set_text("* 최대 90byte 입력이 가능합니다.");
            this.divData.addChild(obj.name, obj);

            obj = new Div("divDS_REM_BYTE","divDS_REM:-10","239","85","22",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("33");
            obj.set_text("( 00/90 byte )");
            this.divData.addChild(obj.name, obj);

            obj = new Static("staCD_TRACE","0","263","150","30",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("34");
            obj.set_text("전표번호");
            obj.set_cssclass("sta_WF_tablelabel");
            this.divData.addChild(obj.name, obj);

            obj = new Static("staCD_TRACE1","149","263","648","30",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("35");
            obj.set_cssclass("sta_WF_tablebg");
            this.divData.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this
            obj = new Layout("default","",this._adjust_width,this._adjust_height,this,function(p){});
            this.addLayout(obj.name, obj);
            
            // BindItem Information
            obj = new BindItem("item2","divSearch.form.ccfCD_SITE.form.CDTextBox","value","dsSearch","CD_SITE");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item1","divData.form.cboCD_ACCOUNT_D","value","dsList","CD_ACCOUNT_D");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item3","divData.form.cboCD_ACCOUNT_C","value","dsList","CD_ACCOUNT_C");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item4","divData.form.cboCD_GIBUL","value","dsList","CD_GIBUL");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item5","divData.form.cboCD_GIBUL_GROUP","value","dsList","CD_GIBUL_GROUP");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item6","divData.form.cboCD_JIGUB","value","dsList","CD_JIGUB");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item7","divData.form.sta09_00","text","dsList","DS_SITE_BE");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item8","divData.form.sta47_00_00","text","dsList","DS_SITE_BH");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item9","divData.form.sta09_00_00","text","dsList","DS_VENDOR");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item10","divData.form.txtDS_REM","value","dsList","DS_REM");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item0","divSearch.form.ctclDT_SLIP.form.TextBox","value","dsSearch","DT_SLIP");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item11","divData.form.staCD_TRACE1","text","dsList","CD_TRADE");
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
        this.addIncludeScript("DSE_RETIRE_SLIP.xfdl","lib::libCommon.xjs");
        this.registerScript("DSE_RETIRE_SLIP.xfdl", function() {
        this.executeIncludeScript("lib::libCommon.xjs"); /*include "lib::libCommon.xjs"*/;
        this.objApp = this.gfnGetApplication();

        this.DSE_RETIRE_SLIP_onload = function(obj,e)
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

        	this.btnApprove.set_enable(false);
        	this.btnApproveCancel.set_enable(false);
        };

        /************************************************************************
         * 버튼 설정 : 화면(Tab) 전환시 마다 호출
         * 서브버튼 사용 및 공통버튼 강제 제어시 여기서 처리
         ************************************************************************/
        this.fnSetButton = function() {
        	// Select, Add, Del, Save, Excel, Print
        	// SubSelect, SubAdd, SubDel, SuubSave, SubExcel
        // 	this.FormBtns.Add.set_enable(false);
        // 	this.FormBtns.Del.set_enable(false);
        }

        /************************************************************************
         * 확장 버튼 : 화면별 버튼 설정 ID, function 연결 (화면버튼관리)
         ************************************************************************/
        this.fnSetExtendButton = function() {
        	this.btnApprove  = this.gfnFormButtonAdd("btnApprove", "fnApprove");
        	this.btnApproveCancel = this.gfnFormButtonAdd("btnApprove_cancel", "fnApprove_cancel");
        	this.btnShowSlip = this.gfnFormButtonAdd("BTN_SHOW_SLIP", "fnSlipSearch"); //전표조회
        	this.btnSlipCreate  = this.gfnFormButtonAdd("btnSlipCreate", "fnSlipCreate");
        };

        /************************************************************************
         * 변수 선언
         ************************************************************************/
        this.fnSetVariable = function() {
        	this.ccfCD_SITE = this.divSearch.form.ccfCD_SITE;
        	this.ctclDT_SLIP = this.divSearch.form.ctclDT_SLIP;
        };

        /************************************************************************
         * 이벤트 설정
         ************************************************************************/
        this.fnSetEvent = function() {

        	this.ccfCD_SITE.AfterCDTextChanged = "fnAfterCDTextChanged";
        	this.ccfCD_SITE.BeforeUserDataSetParam = "fnBeforeUserDataSetParam";
        }

        /************************************************************************
         * 파라미터 설정
         ************************************************************************/
        this.fnSetParameter = function() {

        	var dt = new Date();
        	this.dsSearch.set_enableevent(false);
            this.dsSearch.setColumn(0, "DT_SLIP", dt.getFullYear().toString() + this.inZero((dt.getMonth() + 1), 2));
        	this.dsSearch.set_enableevent(true);

        	this.dsSelect = new Dataset();
        	this.dsSelect.addColumn("CD_SITE", "string");
        	this.dsSelect.addColumn("DT_SLIP", "string");

        	this.dsExec = new Dataset(); //지급년월확정
        	this.dsExec.addColumn("CD_SITE", "string");
        	this.dsExec.addColumn("ID_RESIDENT", "string");
        	this.dsExec.addColumn("YM_RETIRE", "string");
        	this.dsExec.addColumn("YM_PAY", "string");

        	this.dsSlip = new Dataset();
        	this.dsSlip.addColumn("CD_SITE", "string");
        	this.dsSlip.addColumn("DT_SLIP", "string");

        }

        /************************************************************************
         * 컨트롤 이벤트
         ************************************************************************/
         /*
          *	조회 버튼
          */
        this.fnSelect = function() {
        	if(!this.fnValidate()) return;

        	this.dsSelect.clearData();

        	this.dsSelect.addRow();
        	this.dsSelect.setColumn(0, "CD_SITE", this.dsSearch.getColumn(0, "CD_SITE"));
        	this.dsSelect.setColumn(0, "DT_SLIP", this.dsSearch.getColumn(0, "DT_SLIP"));

        	var strSvcId    = "select";
        	var strSvcType  = "grid";
        	var inProc		= "_dsProc";
        	var inData      = "select=dsSelect";
        	var outData     = "dsList=select0";
        	var strArg      = "";
        	var callBackFnc = "fnCallback";

        	this.gfnTransaction( strSvcId , 	// transaction을 구분하기 위한 svc id값
        						strSvcType , 	// trabsaction을 요청할 구분
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
         *	삭제 버튼
         */
        this.fnDel = function() {
        }

        /*
         *	저장 버튼
         */
        this.fnSave = function() {
        };

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
        /*
         *	조회 Validate
         */
        this.fnValidate = function() {
        	if (this.gfnIsNull(this.ccfCD_SITE.form.CDTextBox.value)) {
        		this.fnVaidateCallback = function() {
        			this.ccfCD_SITE.form.CDTextBox.setFocus();
        		}
        		this.gfnAlert("현장코드는 필수입력 값입니다.", "fnVaidateCallback");
        		return false;
        	}
        	return true;
        };

        /************************************************************************
         * 콜백 이벤트
         ************************************************************************/
        /*
         *	콜백 처리
         */
        this.fnCallback = function(svcID, errorCode, errorMsg)
        {
        	if(svcID == "select") {
        		if( 0 < this.dsList.rowcount){
        			this.divData.form.staAM_RETIRE.set_text(this.gfnAppendComma(this.dsList.getColumn(0, "AM_RETIRE")) + " 원");
        			this.divData.form.staAM_SODUK.set_text(this.gfnAppendComma(this.dsList.getColumn(0, "AM_SODUK")) + " 원");
        			this.divData.form.staAM_JUMIN.set_text(this.gfnAppendComma(this.dsList.getColumn(0, "AM_JUMIN")) + " 원");
        			this.divData.form.staAM_TOIJIKGONGJE.set_text(this.gfnAppendComma(this.dsList.getColumn(0, "AM_TOIJIKGONGJE")) + " 원");

        			var DS_REM_BYTE = this.getByteLength(this.dsList.getColumn(0, "DS_REM"));
        			this.divData.form.divDS_REM_BYTE.set_text("( " + DS_REM_BYTE + "/90 byte )");

        			if(this.gfnIsNull(this.dsList.getColumn(0, "CD_TRADE"))){
        				this.btnApprove.set_enable(true);
        				this.btnApproveCancel.set_enable(false);
        			}else{
        				this.btnApprove.set_enable(false);
        				this.btnApproveCancel.set_enable(true);
        			}
        		}else{
        			this.btnApprove.set_enable(false);
        			this.btnApproveCancel.set_enable(false);
        		}

        	}else if(svcID == "save") {
        		if (errorCode == 0) {
        			this.fnCallGfnApprove();
        		} else {
        			this.gfnAlert(errorMsg);
        		}
        	}else if(svcID == "combo") {


        	}
        	else if(svcID == "slip") {
        		if (errorCode == 0) {
        			this.fnCallback_callback = function()
        			{
        				this.FormBtns.Select.click();
        			}

        			this.gfnAlert("전표내역생성이 정상처리되었습니다.","fnCallback_callback");
        		} else {
        			this.gfnAlert(errorMsg);
        		}
        	}
        }

        /************************************************************************
         * 코드파인드 이벤트
         ************************************************************************/
        this.fnBeforeUserDataSetParam = function(id, dsUserParam, nrow) {

        	if (id == "ccfCD_SITE") {
        		dsUserParam.setColumn(nrow, "CD_CORP", this.objApp.gdsUserInfo.getColumn(0, "CD_CORP"));
        	}
        	return true;
        }

        this.fnAfterCDTextChanged = function(id, codeFindData) {
        	if(id == "ccfCD_SITE") {
        	}
        }

        /************************************************************************
         * 그리드 이벤트
         ************************************************************************/

        /************************************************************************
         * 기타 이벤트
         ************************************************************************/

        this.fnSetCombo = function() {

        	this.dsCombo = new Dataset();
        	this.dsCombo.addColumn("CD_SYSTEM", "string");
        	this.dsCombo.addColumn("CD_TYPE", "string");

        	this.dsCombo.addRow();	// 차변계정(데이터)
        	this.dsCombo.setColumn(0, "CD_SYSTEM", "DS");
        	this.dsCombo.setColumn(0, "CD_TYPE", "70");

        	// 같은 SP 다중건 조회는 row 추가해서
        	this.dsCombo.addRow();	// 대변계정(데이터)
        	this.dsCombo.setColumn(1, "CD_SYSTEM", "DS");
        	this.dsCombo.setColumn(1, "CD_TYPE", "71");

        	this.dsCombo.addRow();	// 지불방법(데이터)
        	this.dsCombo.setColumn(2, "CD_SYSTEM", "DS");
        	this.dsCombo.setColumn(2, "CD_TYPE", "72");

        	this.dsCombo.addRow();	// 지불그룹(데이터)
        	this.dsCombo.setColumn(3, "CD_SYSTEM", "DS");
        	this.dsCombo.setColumn(3, "CD_TYPE", "73");

        	this.dsCombo.addRow();	// 결재조건(데이터)
        	this.dsCombo.setColumn(4, "CD_SYSTEM", "DS");
        	this.dsCombo.setColumn(4, "CD_TYPE", "74");

        	var strSvcId    = "combo";
        	var strSvcType  = "select";
        	var inProc		= "_dsProc";
        	var inData      = "combo=dsCombo";
        	var outData     = "dsCD_ACCOUNT_D=combo0 dsCD_ACCOUNT_C=combo1 dsCD_GIBUL=combo2 dsCD_GIBUL_GROUP=combo3 dsCD_JIGUB=combo4";
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

        /*
         *	조회 조건 변경시 초기화
         */
        this.fnSearchInit = function(obj,e) {
        	if(e == null || (e.pretext != e.posttext)) {
        		// 폼상태 초기화
        		this.gfnSetFormStatus(this);
        	}
        };

        this.dsSearch_onvaluechanged = function(obj,e)
        {
        	if(e.oldvalue != e.newvalue) {
        		this.gfnSetFormStatus(this);	// 폼상태 초기화
        	}
        };

        //날짜 셋팅
        this.inZero = function(p1, p2) {
            var zero = "";
            for (var i = 0; i < p2; i++) zero += "0";
            return zero.toString().concat(p1).match(new RegExp("\\d{" + p2 + "}$"));
        };

        this.getByteLength = function(s) {

        	if (s == null || s.length == 0) {
        		return 0;
        	}
        	var size = 0;

        	for ( var i = 0; i < s.length; i++) {
        		size += this.charByteSize(s.charAt(i));
        	}

        	return size;
        }


        this.charByteSize = function(ch) {

        	if (ch == null || ch.length == 0) {
        		return 0;
        	}

        	var charCode = ch.charCodeAt(0);

        	if (charCode <= 0x00007F) {
        		return 1;
        	} else if (charCode <= 0x0007FF) {
        		return 2;
        	} else if (charCode <= 0x00FFFF) {
        		return 3;
        	} else {
        		return 4;
        	}
        }

        this.divData_txtDS_REM_onkeydown = function(obj,e)
        {
        	var DS_REM_BYTE = this.getByteLength(obj.value);

        	if(90 < DS_REM_BYTE){
        		this.gfnAlert("최대 90byte 입력이 가능합니다.");
        		obj.set_value(obj.value.substr(0, obj.value.length-2));
        		return;
        	}
        	this.divData.form.divDS_REM_BYTE.set_text("( " + DS_REM_BYTE + "/90 byte )");

        };

        this.fnApprove = function(){

        	if (this.dsList.rowcount < 1) { return false; }

        	this.gfnConfirm("결재요청 하시겠습니까?",
        		function(svcId, args)
        		{
        			if (args)
        			{
        				this.fnSaveApprove();
        			}
        		}, "newApprove");
        }

        this.fnSaveApprove = function(){

        	this.dsList.setColumn(0, "DS_GIBUL", this.divData.form.cboCD_GIBUL.text);
        	this.dsList.setColumn(0, "DS_GIBUL_GROUP", this.divData.form.cboCD_GIBUL_GROUP.text);
        	this.dsList.setColumn(0, "DS_JIGUB", this.divData.form.cboCD_JIGUB.text);
        	this.dsList.addColumn("ID_INSERT", "string");
        	this.dsList.setColumn(0, "ID_INSERT", this.objApp.gdsUserInfo.getColumn(0, "ID_USER"));

        	var strSvcId    = "save";
        	var strSvcType  = "save";
        	var inProc		= "_dsProc";
        	var inData      = "save=dsList";
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

        this.fnCallGfnApprove = function(){

        	var dsListTemp = new Dataset();

        	dsListTemp.copyData(this.dsList);

        	dsListTemp.addColumn("DS_ACCOUNT_D", "string");
        	dsListTemp.addColumn("DS_ACCOUNT_C", "string");
        	dsListTemp.setColumn(0, "DS_ACCOUNT_D", this.divData.form.cboCD_ACCOUNT_D.text);
        	dsListTemp.setColumn(0, "DS_ACCOUNT_C", this.divData.form.cboCD_ACCOUNT_C.text);
        	dsListTemp.setColumn(0, "AM_RETIRE", this.gfnAppendComma(dsListTemp.getColumn(0, "AM_RETIRE")));
        	dsListTemp.setColumn(0, "AM_SODUK", this.gfnAppendComma(dsListTemp.getColumn(0, "AM_SODUK")));
        	dsListTemp.setColumn(0, "AM_JUMIN", this.gfnAppendComma(dsListTemp.getColumn(0, "AM_JUMIN")));
        	dsListTemp.setColumn(0, "AM_TOIJIKGONGJE", this.gfnAppendComma(dsListTemp.getColumn(0, "AM_TOIJIKGONGJE")));

        	var sApType = "DS07";
        	var sTitle  = "퇴직금 전표발행";
        	var sRef01  = this.dsSearch.getColumn(0, "CD_SITE");
        	var sRef02  = this.dsSearch.getColumn(0, "DT_SLIP");
        	var sRef03  = dsListTemp.getColumn(0, "NO_APPROVAL_SEQ");
        	var sRef04  = "";
        	var oParam  = this.gfnDataSetToJson(dsListTemp, 0);

        	this.gfnApprove(sApType, sTitle, sRef01, sRef02, sRef03, sRef04, oParam, "fnAprvDialogCallback");

        }


         this.fnAprvDialogCallback = function(svcID, value) {
        	// 리턴값
        	if(value){
        		this.FormBtns.Select.click();
        	}
        };


        this.fnApprove_cancel = function(){

        	if (this.dsList.rowcount < 1) { return false; }

        	this.gfnConfirm("전표취소 하시겠습니까?",
        		function(svcId, args)
        		{
        			if (args)
        			{
        				this.fnCallCancelGfnApprove();
        			}
        		}, "newApprove");
        }



        this.fnCallCancelGfnApprove = function(){

        	var dsListTemp = new Dataset();

        	dsListTemp.copyData(this.dsList);

        	var AM_RETIRE = dsListTemp.getColumn(0, "AM_RETIRE");
        	var AM_SODUK = dsListTemp.getColumn(0, "AM_SODUK");
        	var AM_JUMIN = dsListTemp.getColumn(0, "AM_JUMIN");
        	var AM_TOIJIKGONGJE = dsListTemp.getColumn(0, "AM_TOIJIKGONGJE");

        	dsListTemp.addColumn("DS_ACCOUNT_D", "string");
        	dsListTemp.addColumn("DS_ACCOUNT_C", "string");
        	dsListTemp.setColumn(0, "DS_ACCOUNT_D", this.divData.form.cboCD_ACCOUNT_D.text);
        	dsListTemp.setColumn(0, "DS_ACCOUNT_C", this.divData.form.cboCD_ACCOUNT_C.text);
        	dsListTemp.setColumn(0, "AM_RETIRE", AM_RETIRE == "0" ? "" : "-" + this.gfnAppendComma(AM_RETIRE));
        	dsListTemp.setColumn(0, "AM_SODUK", AM_SODUK == "0" ? "" : "-" + this.gfnAppendComma(AM_SODUK));
        	dsListTemp.setColumn(0, "AM_JUMIN", AM_JUMIN == "0" ? "" : "-" + this.gfnAppendComma(AM_JUMIN));
        	dsListTemp.setColumn(0, "AM_TOIJIKGONGJE", AM_TOIJIKGONGJE == "0" ? "" : "-" + this.gfnAppendComma(AM_TOIJIKGONGJE));

        	var sApType = "DS08";
        	var sTitle  = "퇴직금 전표취소";
        	var sRef01  = this.dsSearch.getColumn(0, "CD_SITE");
        	var sRef02  = this.dsSearch.getColumn(0, "DT_SLIP");
        	var sRef03  = dsListTemp.getColumn(0, "NO_APPROVAL_CANCEL_SEQ");
        	var sRef04  = "";
        	var oParam  = this.gfnDataSetToJson(dsListTemp, 0);

        	this.gfnApprove(sApType, sTitle, sRef01, sRef02, sRef03, sRef04, oParam, "fnAprvDialogCallback");

        }

        // 전표조회 버튼 클릭
        this.fnSlipSearch = function(obj, e) {

            if (this.dsList.rowcount > 0) {
                if (this.gfnIsNull(this.dsList.getColumn(0, "CD_TRADE")))
        		{
                    this.gfnAlert("발행된 전표가 없습니다.");
                }
        		else
        		{
                    this.gfnConfirm("전표를 조회하시겠습니까?", "fnSlipSearch_callback");
                }
            }
        }


        //전표조회 콜백
        this.fnSlipSearch_callback = function(strId, val) {
         if (val == true) {
                var param = {};
                //
                param.CD_TRADE = this.dsList.getColumn(0, "CD_TRADE");

                //전표발행시 팝업창 띄움
                this.gfnFormOpen("DHA", "DHA_ISSUESLIP", "fnDialogCallback", param);
            }
        };

        this.fnSlipCreate = function()
        {
        	this.gfnConfirm("전표 내역생성을 진행하시겠습니까?","fnSlipCreate_callback");
        }

        this.fnSlipCreate_callback = function(strID, val)
        {
        	if(val == true)
        	{
        		this.dsSlip.clearData();
        		var nrow = this.dsSlip.addRow();

        		this.dsSlip.setColumn(nrow, "CD_SITE", this.dsSearch.getColumn(0, "CD_SITE"));
        		this.dsSlip.setColumn(nrow, "DT_SLIP", this.dsSearch.getColumn(0, "DT_SLIP"));

        		var strSvcId    = "slip";
        		var strSvcType  = "save";
        		var inProc		= "_dsProc";
        		var inData      = "slip=dsSlip";
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
        }
        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.DSE_RETIRE_SLIP_onload,this);
            this.divData.form.staCD_ACCOUNT_D.addEventHandler("onclick",this.divData_divDataRight_sta01_onclick,this);
            this.divData.form.staCD_ACCOUNT_C.addEventHandler("onclick",this.divData_divDataRight_sta01_onclick,this);
            this.divData.form.staDS_SITE_BE.addEventHandler("onclick",this.divData_divDataRight_sta01_onclick,this);
            this.divData.form.staDS_SITE_BH.addEventHandler("onclick",this.divData_divDataRight_sta01_onclick,this);
            this.divData.form.staCD_VENDOR.addEventHandler("onclick",this.divData_divDataRight_sta01_onclick,this);
            this.divData.form.staCD_GIBUL.addEventHandler("onclick",this.divData_divDataRight_sta01_onclick,this);
            this.divData.form.staCD_GIBUL_GROUP.addEventHandler("onclick",this.divData_divDataRight_sta01_onclick,this);
            this.divData.form.sta29_00_00_00.addEventHandler("onclick",this.divData_divDataRight_sta01_onclick,this);
            this.divData.form.staCD_JIGUB.addEventHandler("onclick",this.divData_divDataRight_sta01_onclick,this);
            this.divData.form.sta53_00_00_00_00.addEventHandler("onclick",this.divData_divDataRight_sta01_onclick,this);
            this.divData.form.sta29_00_00_00_00.addEventHandler("onclick",this.divData_divDataRight_sta01_onclick,this);
            this.divData.form.sta53_00_00_00_00_00.addEventHandler("onclick",this.divData_divDataRight_sta01_onclick,this);
            this.divData.form.staDS_REM.addEventHandler("onclick",this.divData_divDataRight_sta01_onclick,this);
            this.divData.form.txtDS_REM.addEventHandler("onkeydown",this.divData_txtDS_REM_onkeydown,this);
            this.divData.form.staCD_TRACE.addEventHandler("onclick",this.divData_divDataRight_sta01_onclick,this);
            this.dsSearch.addEventHandler("onvaluechanged",this.dsSearch_onvaluechanged,this);
        };
        this.loadIncludeScript("DSE_RETIRE_SLIP.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
