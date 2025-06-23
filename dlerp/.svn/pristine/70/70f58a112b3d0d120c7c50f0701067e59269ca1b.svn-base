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
            this.set_titletext("수주-도급-입찰금액결정");
            if (Form == this.constructor)
            {
                this._setFormPosition(1090,315);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("_dsProc", this);
            obj._setContents("<ColumnInfo><Column id=\"TARGET\" type=\"STRING\" size=\"256\"/><Column id=\"SP\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"TARGET\">select</Col><Col id=\"SP\">DOBPR_CIVL_PROJ_AM_DCID_SELECT</Col></Row><Row><Col id=\"TARGET\">save</Col><Col id=\"SP\">DOBPR_CIVL_PROJ_AM_DCID_MERGE</Col></Row><Row><Col id=\"TARGET\">delete</Col><Col id=\"SP\">DOBPR_CIVL_PROJ_AM_DCID_DELETE</Col></Row><Row><Col id=\"TARGET\">selectCharge</Col><Col id=\"SP\">DOAPR_PROJ_YNCHARGE_SELECT</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsSearch", this);
            obj._setContents("<ColumnInfo><Column id=\"CD_PROJ\" type=\"STRING\" size=\"256\"/><Column id=\"DS_PROJ\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row/></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsBase", this);
            obj._setContents("<ColumnInfo><Column id=\"CD_PROJ\" type=\"STRING\" size=\"256\"/><Column id=\"DS_PROJ\" type=\"STRING\" size=\"256\"/><Column id=\"AM_ESTM\" type=\"BIGDECIMAL\" size=\"256\"/><Column id=\"AM_CONST\" type=\"BIGDECIMAL\" size=\"256\"/><Column id=\"AM_ESTM_CONST\" type=\"BIGDECIMAL\" size=\"256\"/><Column id=\"AM_INIT\" type=\"BIGDECIMAL\" size=\"256\"/><Column id=\"AM_PROJ\" type=\"BIGDECIMAL\" size=\"256\"/><Column id=\"RT_ESTM\" type=\"BIGDECIMAL\" size=\"256\"/><Column id=\"RT_QUAL\" type=\"BIGDECIMAL\" size=\"256\"/><Column id=\"RT_PERPECT\" type=\"BIGDECIMAL\" size=\"256\"/><Column id=\"AM_RST\" type=\"BIGDECIMAL\" size=\"256\"/><Column id=\"DS_RM\" type=\"STRING\" size=\"256\"/><Column id=\"RT_YBID\" type=\"STRING\" size=\"256\"/><Column id=\"RT_GBID\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsRcvYNCharge", this);
            obj._setContents("<ColumnInfo><ConstColumn id=\"YN_EXISTS\" type=\"STRING\" size=\"30\"/></ColumnInfo>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Div("divSearch","0.0","10.0",null,"78.0","0",null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_cssclass("div_SEARCH_Bg");
            obj.set_text("");
            this.addChild(obj.name, obj);

            obj = new Static("staCD_PROJ","0.0","10.0","118.0","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("0");
            obj.set_text("프로젝트코드");
            obj.set_cssclass("sta_WF_SchLabel");
            this.divSearch.addChild(obj.name, obj);

            obj = new Edit("ctxtCD_PROJ","0.0","staCD_PROJ:10.0","66","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("1");
            obj.set_value("");
            obj.set_readonly("true");
            obj.set_enable("true");
            this.divSearch.addChild(obj.name, obj);

            obj = new Edit("ctxtDS_PROJ","ctxtCD_PROJ:0.0","staCD_PROJ:10.0","405","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("2");
            obj.set_value("");
            obj.set_readonly("true");
            this.divSearch.addChild(obj.name, obj);

            obj = new Div("divData","0","50",null,null,"4","3",null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_cssclass("div_DATA_Bg");
            obj.set_text("");
            this.addChild(obj.name, obj);

            obj = new Static("staAM_ESTM","5","7","130","30",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("7");
            obj.set_text("추정가격");
            obj.set_cssclass("sta_WF_tablelabel");
            obj.set_textAlign("right");
            this.divData.addChild(obj.name, obj);

            obj = new Static("sta14","134","7","949","30",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("8");
            obj.set_cssclass("sta_WF_tablebg");
            this.divData.addChild(obj.name, obj);

            obj = new Static("staAM_INIT","5","65","130","30",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("9");
            obj.set_text("예가대비낙착율");
            obj.set_cssclass("sta_WF_tablelabel");
            obj.set_textAlign("right");
            this.divData.addChild(obj.name, obj);

            obj = new Static("sta17","134","65","949","30",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("10");
            obj.set_cssclass("sta_WF_tablebg");
            this.divData.addChild(obj.name, obj);

            obj = new Static("staDS_OPNI","5","123","130","90",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("11");
            obj.set_text("비고");
            obj.set_cssclass("sta_WF_tablelabel");
            obj.set_textAlign("right");
            this.divData.addChild(obj.name, obj);

            obj = new Static("sta24","134","123","949","90",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("12");
            obj.set_cssclass("sta_WF_tablebg");
            this.divData.addChild(obj.name, obj);

            obj = new MaskEdit("ctxtAM_ESTM","139","12","140","20",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("13");
            obj.set_value("");
            obj.set_textAlign("right");
            obj.set_format("#,0");
            obj.set_autoselect("true");
            obj.set_readonly("true");
            obj.set_displaynulltext(" ");
            this.divData.addChild(obj.name, obj);

            obj = new TextArea("txtDS_OPNI","139","128","939","80",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("3");
            obj.set_maxlength("1000");
            obj.set_enable("true");
            obj.set_readonly("false");
            this.divData.addChild(obj.name, obj);

            obj = new Static("sta23_00","288","11","121","20",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("14");
            obj.set_text("(VAT 포함)");
            this.divData.addChild(obj.name, obj);

            obj = new Static("staAM_ESTM00","5","36","130","30",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("0");
            obj.set_text("기초금액");
            obj.set_textAlign("right");
            obj.set_cssclass("sta_WF_tablelabelE");
            this.divData.addChild(obj.name, obj);

            obj = new Static("sta14_00","134","36","949","30",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("1");
            obj.set_cssclass("sta_WF_tablebg");
            this.divData.addChild(obj.name, obj);

            obj = new MaskEdit("ctxtAM_ESTM00","139","41","140","20",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("2");
            obj.set_value("");
            obj.set_textAlign("right");
            obj.set_format("#,0");
            obj.set_autoselect("true");
            obj.set_readonly("false");
            obj.set_displaynulltext(" ");
            this.divData.addChild(obj.name, obj);

            obj = new Static("sta23_00_01","288","40","121","20",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("15");
            obj.set_text("(VAT 포함)");
            this.divData.addChild(obj.name, obj);

            obj = new Button("btnCancel","53.85%","228","60","24",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("6");
            obj.set_text("취소");
            this.divData.addChild(obj.name, obj);

            obj = new Button("btnSave","41.01%","228","60","24",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("4");
            obj.set_text("저장");
            this.divData.addChild(obj.name, obj);

            obj = new Button("btnDelete","47.52%","228","60","24",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("5");
            obj.set_text("삭제");
            this.divData.addChild(obj.name, obj);

            obj = new Static("sta22_00","134","94","949","30",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("16");
            obj.set_cssclass("sta_WF_tablebg");
            this.divData.addChild(obj.name, obj);

            obj = new MaskEdit("ctxtAM_ESTM00_00","139","70","140","20",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("17");
            obj.set_value("");
            obj.set_textAlign("right");
            obj.set_format("#,0");
            obj.set_autoselect("true");
            obj.set_readonly("false");
            obj.set_displaynulltext(" ");
            this.divData.addChild(obj.name, obj);

            obj = new MaskEdit("ctxtAM_ESTM00_00_00","139","99","140","20",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("18");
            obj.set_value("");
            obj.set_textAlign("right");
            obj.set_format("#,0");
            obj.set_autoselect("true");
            obj.set_readonly("false");
            obj.set_displaynulltext(" ");
            this.divData.addChild(obj.name, obj);

            obj = new Static("sta23_00_01_00","288","70","121","20",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("19");
            obj.set_text("%");
            this.divData.addChild(obj.name, obj);

            obj = new Static("sta23_00_01_00_00","288","100","121","20",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("20");
            obj.set_text("%");
            this.divData.addChild(obj.name, obj);

            obj = new Static("staAM_INIT00","5","94","130","30",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("21");
            obj.set_text("기초대비낙찰율");
            obj.set_cssclass("sta_WF_tablelabel");
            obj.set_textAlign("right");
            this.divData.addChild(obj.name, obj);

            obj = new MaskEdit("ctxtAM_INIT","1190","30","140","20",null,null,null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_value("");
            obj.set_textAlign("right");
            obj.set_format("#,0");
            obj.set_autoselect("true");
            obj.set_readonly("true");
            obj.set_displaynulltext(" ");
            obj.set_visible("false");
            this.addChild(obj.name, obj);

            obj = new Static("sta23_00_00","1253","37","29","20",null,null,null,null,null,null,this);
            obj.set_taborder("3");
            obj.set_text("원");
            obj.set_visible("false");
            this.addChild(obj.name, obj);

            obj = new Static("sta23_00_00_00","1333","37","10","20",null,null,null,null,null,null,this);
            obj.set_taborder("4");
            obj.set_text("X");
            obj.set_visible("false");
            this.addChild(obj.name, obj);

            obj = new Static("staRT_INIT","1354","32","120","30",null,null,null,null,null,null,this);
            obj.set_taborder("5");
            obj.set_text("예정가 사정");
            obj.set_cssclass("sta_WF_tablelabel");
            obj.set_textAlign("right");
            obj.set_visible("false");
            this.addChild(obj.name, obj);

            obj = new MaskEdit("ctxtRT_INIT","1478","37","80","20",null,null,null,null,null,null,this);
            obj.set_taborder("6");
            obj.set_value("");
            obj.set_textAlign("right");
            obj.set_format("#,0.000");
            obj.set_autoselect("true");
            obj.set_readonly("false");
            obj.set_visible("false");
            this.addChild(obj.name, obj);

            obj = new Static("sta23","1563","37","41","20",null,null,null,null,null,null,this);
            obj.set_taborder("7");
            obj.set_text("%");
            obj.set_visible("false");
            this.addChild(obj.name, obj);

            obj = new Static("staRT_BID","1617","32","120","30",null,null,null,null,null,null,this);
            obj.set_taborder("8");
            obj.set_text("투찰율");
            obj.set_cssclass("sta_WF_tablelabel");
            obj.set_textAlign("right");
            obj.set_visible("false");
            this.addChild(obj.name, obj);

            obj = new MaskEdit("ctxtRT_BID","1741","37","80","20",null,null,null,null,null,null,this);
            obj.set_taborder("9");
            obj.set_value("");
            obj.set_textAlign("right");
            obj.set_format("#,0.000");
            obj.set_autoselect("true");
            obj.set_readonly("false");
            obj.set_visible("false");
            this.addChild(obj.name, obj);

            obj = new Static("sta26","1826","37","21","20",null,null,null,null,null,null,this);
            obj.set_taborder("10");
            obj.set_text("%");
            obj.set_visible("false");
            this.addChild(obj.name, obj);

            obj = new Static("sta26_00","1856","37","31","20",null,null,null,null,null,null,this);
            obj.set_taborder("11");
            obj.set_text(" =");
            obj.set_visible("false");
            this.addChild(obj.name, obj);

            obj = new MaskEdit("ctxtRT_SC","1905","37","161","20",null,null,null,null,null,null,this);
            obj.set_taborder("12");
            obj.set_value("");
            obj.set_textAlign("right");
            obj.set_format("#,0");
            obj.set_autoselect("true");
            obj.set_readonly("true");
            obj.set_visible("false");
            this.addChild(obj.name, obj);

            obj = new Static("sta27","2070","37","21","20",null,null,null,null,null,null,this);
            obj.set_taborder("13");
            obj.set_text("원");
            obj.set_visible("false");
            this.addChild(obj.name, obj);

            obj = new Static("staRT_BID00","1408","80","120","30",null,null,null,null,null,null,this);
            obj.set_taborder("14");
            obj.set_text("만점△");
            obj.set_cssclass("sta_WF_tablelabel");
            obj.set_textAlign("right");
            obj.set_visible("false");
            this.addChild(obj.name, obj);

            obj = new MaskEdit("ctxtRT_BID_OUR","1532","85","80","20",null,null,null,null,null,null,this);
            obj.set_taborder("15");
            obj.set_value("");
            obj.set_textAlign("right");
            obj.set_format("#,0.000");
            obj.set_autoselect("true");
            obj.set_readonly("false");
            obj.set_visible("false");
            this.addChild(obj.name, obj);

            obj = new Static("sta25","1617","85","41","20",null,null,null,null,null,null,this);
            obj.set_taborder("16");
            obj.set_text("%");
            obj.set_visible("false");
            this.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this
            obj = new Layout("default","",this._adjust_width,this._adjust_height,this,function(p){});
            this.addLayout(obj.name, obj);
            
            // BindItem Information
            obj = new BindItem("item0","divSearch.form.ctxtCD_PROJ","value","dsSearch","CD_PROJ");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item1","divSearch.form.ctxtDS_PROJ","value","dsSearch","DS_PROJ");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item2","divData.form.ctxtAM_ESTM","value","dsBase","AM_ESTM_CONST");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item3","divData.form.tabData.tab8.form.ctxtAM_ESTM00","value","dsDetail3","AM_INIT");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item7","divData.form.tabData.tab8.form.ctxtRT_BID_OUR","value","dsDetail3","RT_PERPECT");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item10","divData.form.txtDS_OPNI","value","dsBase","DS_RM");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item11","divData.form.ctxtAM_ESTM00","value","dsBase","AM_INIT");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item4","ctxtAM_INIT","value","dsBase","AM_PROJ");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item5","ctxtRT_INIT","value","dsBase","RT_ESTM");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item6","ctxtRT_BID","value","dsBase","RT_QUAL");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item9","ctxtRT_SC","value","dsBase","AM_RST");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item8","ctxtRT_BID_OUR","value","dsBase","RT_PERPECT");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item12","divData.form.ctxtAM_ESTM00_00","value","dsBase","RT_YBID");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item13","divData.form.ctxtAM_ESTM00_00_00","value","dsBase","RT_GBID");
            this.addChild(obj.name, obj);
            obj.bind();
            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script
        this.registerScript("DOB_BID_AM_DCID.xfdl", function() {
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


        	this.dsSearch.setColumn(0, "CD_PROJ", this.getOwnerFrame().CD_PROJ);
        	this.dsSearch.setColumn(0, "DS_PROJ", this.getOwnerFrame().DS_PROJ);

        	this.FormBtns.Select.click();
        };

        /************************************************************************
         * 담당자 여부 검사
         ************************************************************************/
         this.fnGetYNCharge = function(){

        	this.dsReqYNCharge = new Dataset();
        	this.dsReqYNCharge.addColumn("CD_PROJ", "string");
        	this.dsReqYNCharge.addColumn("ID_USER", "string");

        	this.dsReqYNCharge.addRow();
        	this.dsReqYNCharge.setColumn(0, "CD_PROJ", this.getOwnerFrame().CD_PROJ);
        	this.dsReqYNCharge.setColumn(0, "ID_USER", this.objApp.gdsUserInfo.getColumn(0, "ID_USER"));

        	var strSvcId    = "selectCharge";
        	var strSvcType  = "select";
        	var inProc		= "_dsProc";
        		inData      = "selectCharge=dsReqYNCharge";
        		outData     = "dsRcvYNCharge=selectCharge0";
        	var strArg      = "";
        	var callBackFnc = "fnCallback";

        	this.gfnTransaction( strSvcId , 	// transaction을 구분하기 위한 svc id값
        						strSvcType , 	// transaction을 요청할 구분
        						inProc,			// Procedure 정보 Dataset 이름
        						inData , 		// 입력값으로 보낼 dataset id , a=b형태로 실제이름과 입력이름을 매칭
        						outData , 		// 처리결과값으로 받을 dataset id, a=b형태로 실제이름과 입력이름을 매칭
        						strArg, 			// 입력갑스로 보낼 arguments, strFormData="20120607"
        						callBackFnc,false); // 통신방법 정의 [생략가능]
         }

        /************************************************************************
         * 버튼 설정 : 화면(Tab) 전환시 마다 호출
         * 서브버튼 사용 및 공통버튼 강제 제어시 여기서 처리
         ************************************************************************/
        this.fnSetButton = function() {
        	// Select, Add, Del, Save, Excel, Print
        	// SubSelect, SubAdd, SubDel, SuubSave, SubExcel
        	if(this.FormInfo.TY_AUTH == "R") {
        		this.divData.form.btnSave.set_enable(false);
        		this.divData.form.btnDelete.set_enable(false);
        	}
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

        	this.dsSave.addColumn("CD_PROJ", "string");		// 프로젝트 코드
        	this.dsSave.addColumn("AM_INIT", "bigdecimal");		// 기초금액
        	this.dsSave.addColumn("RT_ESTM", "bigdecimal");	// 예정가 사정
        	this.dsSave.addColumn("RT_QUAL", "bigdecimal");	// 만점
        	this.dsSave.addColumn("RT_PERPECT", "bigdecimal");	// 만점
        	this.dsSave.addColumn("RT_YBID", "bigdecimal");  // 예가대비낙착율
        	this.dsSave.addColumn("RT_GBID", "bigdecimal");  // 기초대비낙찰율
        	this.dsSave.addColumn("DS_RM", "string");		// 비고
        	this.dsSave.addColumn("ID_USER", "string");

        }


        /************************************************************************
         * 트렌젝션 이벤트
         ************************************************************************/
        this.fnSelect = function(){

        	var strSvcId    = "select";
        	var strSvcType  = "select";
        	var inProc		= "_dsProc";
        	var inData      = "select=dsSearch";
        	var outData     = "dsBase=select0";
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
        	if(svcID == "select") {

        	} else if(svcID == "save") {
        		this.fnSelect();
        	} else if(svcID == "delete") {
        		this.getParentContext().close(true);
        	}
        	this.fnSetButton();
        };

        this.dsBase_onvaluechanged = function(obj,e)
        {
        	if(e.oldvalue != e.newvalue){
        		var amRst = 0;

        		if(e.columnid == "AM_INIT"){
        			//기초금액
        			obj.setColumn(0, "AM_PROJ", e.newvalue);
        		} else if(e.columnid == "AM_PROJ"){
        			//투찰금액
        			amRst = this.dsBase.getColumn(0, "AM_PROJ") * (this.dsBase.getColumn(0, "RT_ESTM") / 100) * ((this.dsBase.getColumn(0, "RT_PERPECT") + this.dsBase.getColumn(0, "RT_QUAL")) / 100);
        			this.dsBase.setColumn(0, "AM_RST", amRst);
        		} else if(e.columnid == "RT_ESTM"){
        			//예정가 사정
        			amRst = this.dsBase.getColumn(0, "AM_PROJ") * (this.dsBase.getColumn(0, "RT_ESTM") / 100) * ((this.dsBase.getColumn(0, "RT_PERPECT") + this.dsBase.getColumn(0, "RT_QUAL")) / 100);
        			this.dsBase.setColumn(0, "AM_RST", amRst);
        		} else if(e.columnid == "RT_PERPECT" || e.columnid == "RT_QUAL"){
        			//투찰율
        			amRst = this.dsBase.getColumn(0, "AM_PROJ") * (this.dsBase.getColumn(0, "RT_ESTM") / 100) * ((this.dsBase.getColumn(0, "RT_PERPECT") + this.dsBase.getColumn(0, "RT_QUAL")) / 100);
        			this.dsBase.setColumn(0, "AM_RST", amRst);
        		}
        	}
        };

        this.divData_btnSave_onclick = function(obj,e)
        {
        	if(this.gfnIsNull(this.dsBase.getColumn(0, "AM_INIT"))){
        		this.gfnAlert("기초금액을 입력하세요.");
        		return;
        	}
        	this.dsSave.clearData();
        	this.dsSave.addRow();

        	this.dsSave.copyRow(0, this.dsBase, 0);
        	this.dsSave.setColumn(0, "ID_USER", this.objApp.gdsUserInfo.getColumn(0, "ID_USER"));

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
        						strArg, 			// 입력갑스로 보낼 arguments, strFormData="20120607"
        						callBackFnc,false); // 통신방법 정의 [생략가능]
        };

        this.divData_btnDelete_onclick = function(obj,e)
        {
        	this.gfnConfirm("삭제 하시겠습니까?", function(strId, val){
        		if(val == true) {
        			var strSvcId    = "delete";
        			var strSvcType  = "save";
        			var inProc		= "_dsProc";
        			var inData      = "delete=dsSearch";
        			var outData     = "";
        			var strArg      = "";
        			var callBackFnc = "fnCallback";

        			this.gfnTransaction( strSvcId , 	// transaction을 구분하기 위한 svc id값
        								strSvcType , 	// transaction을 요청할 구분
        								inProc,			// Procedure 정보 Dataset 이름
        								inData , 		// 입력값으로 보낼 dataset id , a=b형태로 실제이름과 입력이름을 매칭
        								outData , 		// 처리결과값으로 받을 dataset id, a=b형태로 실제이름과 입력이름을 매칭
        								strArg, 			// 입력갑스로 보낼 arguments, strFormData="20120607"
        								callBackFnc,false); // 통신방법 정의 [생략가능]
        		}
        	})

        };


        this.divData_btnCancel_onclick = function(obj,e)
        {
        	this.getParentContext().close(true);
        };


        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.form_onload,this);
            this.divData.addEventHandler("ondragmove",this.divData_ondragmove,this);
            this.divData.form.btnCancel.addEventHandler("onclick",this.divData_btnCancel_onclick,this);
            this.divData.form.btnSave.addEventHandler("onclick",this.divData_btnSave_onclick,this);
            this.divData.form.btnDelete.addEventHandler("onclick",this.divData_btnDelete_onclick,this);
            this.dsBase.addEventHandler("onvaluechanged",this.dsBase_onvaluechanged,this);
        };
        this.loadIncludeScript("DOB_BID_AM_DCID.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
