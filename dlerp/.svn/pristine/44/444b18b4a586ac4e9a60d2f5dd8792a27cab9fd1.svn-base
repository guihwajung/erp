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
            this.set_titletext("연차생성");
            this.getSetter("maxheight").set("395");
            this.getSetter("maxwidth").set("408");
            if (Form == this.constructor)
            {
                this._setFormPosition(368,321);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("dsList", this);
            obj._setContents("<ColumnInfo><Column id=\"STATE\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row/></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("_dsProc", this);
            obj._setContents("<ColumnInfo><Column id=\"TARGET\" type=\"STRING\" size=\"256\"/><Column id=\"SP\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"TARGET\">exec</Col><Col id=\"SP\">DACPR_YEARLYVACATION_CREATE</Col></Row><Row><Col id=\"TARGET\">insert1</Col><Col id=\"SP\">DACPR_MONTHLYVACATION_INSERT</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsJOB_TYPE", this);
            obj._setContents("<ColumnInfo><Column id=\"CODE\" type=\"STRING\" size=\"256\"/><Column id=\"VALUE\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"CODE\">Y</Col><Col id=\"VALUE\">연차</Col></Row><Row><Col id=\"CODE\">M</Col><Col id=\"VALUE\">1년미만자 연차</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsSearch", this);
            obj._setContents("<ColumnInfo><Column id=\"JOB_TYPE\" type=\"STRING\" size=\"256\"/><Column id=\"YR_BASE\" type=\"STRING\" size=\"256\"/><Column id=\"YM_MONVACA\" type=\"STRING\" size=\"256\"/><Column id=\"CD_CORP\" type=\"STRING\" size=\"256\"/><Column id=\"DS_CORP\" type=\"STRING\" size=\"256\"/><Column id=\"ID_SABUN\" type=\"STRING\" size=\"256\"/><Column id=\"DS_HNAME\" type=\"STRING\" size=\"256\"/><Column id=\"ID_PERSON\" type=\"STRING\" size=\"256\"/><Column id=\"QN_MONTHLY\" type=\"STRING\" size=\"256\"/><Column id=\"QN_YEARLYBASE\" type=\"STRING\" size=\"256\"/><Column id=\"QN_YEARLYSERVICE\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"JOB_TYPE\"/></Row></Rows>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Div("divData","0","0",null,null,"0","0",null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_cssclass("div_DATA_Bg");
            obj.set_text("");
            this.addChild(obj.name, obj);

            obj = new Static("staTITLE","0","-5","100.00%","30",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("8");
            obj.set_text("연차생성");
            obj.set_cssclass("sta_TITLE_Bg");
            obj.set_textAlign("left");
            this.divData.addChild(obj.name, obj);

            obj = new Static("staJOB_TYPE","0","staTITLE:0","80","30",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("10");
            obj.set_text("구분");
            obj.set_cssclass("sta_WF_tablelabelE");
            this.divData.addChild(obj.name, obj);

            obj = new Static("staJOB_TYPE_bg","staJOB_TYPE:-1","staJOB_TYPE:-30","289","30",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("5");
            obj.set_cssclass("sta_WF_tablebg");
            this.divData.addChild(obj.name, obj);

            obj = new Radio("rdoJOB_TYPE","staJOB_TYPE:5","staJOB_TYPE:-25","220","20",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("0");
            obj.set_innerdataset("dsJOB_TYPE");
            obj.set_codecolumn("CODE");
            obj.set_datacolumn("VALUE");
            obj.set_direction("vertical");
            obj.set_fittocontents("width");
            obj.set_visible("true");
            obj.set_enable("true");
            obj.set_text("연차");
            obj.set_value("1");
            obj.set_index("0");
            this.divData.addChild(obj.name, obj);

            obj = new Static("stalYR_BASE","0","staJOB_TYPE:-1","80","30",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("14");
            obj.set_text("기준년도");
            obj.set_cssclass("sta_WF_tablelabelE");
            this.divData.addChild(obj.name, obj);

            obj = new Static("stalYR_BASE_bg","stalYR_BASE:-1","stalYR_BASE:-30","289","30",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("5");
            obj.set_cssclass("sta_WF_tablebg");
            this.divData.addChild(obj.name, obj);

            obj = new Div("ctclYR_BASE","stalYR_BASE:5","stalYR_BASE:-25","80","20",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("1");
            obj.set_url("cmm::cmmCalYY.xfdl");
            obj.set_enableevent("true");
            obj.set_text("2019");
            this.divData.addChild(obj.name, obj);

            obj = new Div("ctclYM_MONVACA","stalYR_BASE:5","stalYR_BASE:-25","100","20",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("16");
            obj.set_url("cmm::cmmCalMM.xfdl");
            this.divData.addChild(obj.name, obj);

            obj = new Static("staCD_CORP","0","stalYR_BASE:-1","80","30",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("13");
            obj.set_text("법인코드");
            obj.set_cssclass("sta_WF_tablelabelE");
            this.divData.addChild(obj.name, obj);

            obj = new Static("staCD_CORP_bg","staCD_CORP:-1","staCD_CORP:-30","289","30",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("5");
            obj.set_cssclass("sta_WF_tablebg");
            this.divData.addChild(obj.name, obj);

            obj = new Div("cfCD_CORP","staCD_CORP:5","staCD_CORP:-25","278","20",null,null,null,null,null,null,this.divData.form);
            obj.getSetter("CodeFindName").set("DAX_CFCORP_CODEFIND");
            obj.getSetter("CDTextWidth").set("40");
            obj.set_taborder("2");
            obj.set_url("cmm::cmmCodeFind.xfdl");
            this.divData.addChild(obj.name, obj);

            obj = new Static("staID_SABUN","0","staCD_CORP:-1","80","30",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("11");
            obj.set_text("특정사번");
            obj.set_cssclass("sta_WF_tablelabel");
            this.divData.addChild(obj.name, obj);

            obj = new Static("staID_SABUN_bg","staID_SABUN:-1","staID_SABUN:-30","289","30",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("5");
            obj.set_cssclass("sta_WF_tablebg");
            this.divData.addChild(obj.name, obj);

            obj = new Div("cfID_SABUN","staID_SABUN:5","staID_SABUN:-25","278","20",null,null,null,null,null,null,this.divData.form);
            obj.getSetter("CodeFindName").set("DAX_CFBASEINFO_ALL");
            obj.getSetter("CDTextWidth").set("90");
            obj.set_taborder("3");
            obj.set_url("cmm::cmmCodeFind.xfdl");
            this.divData.addChild(obj.name, obj);

            obj = new Edit("txtID_PERSON","cfID_SABUN:-10","staID_SABUN:-25","staID_SABUN:10","20",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("19");
            obj.set_readonly("false");
            obj.set_visible("false");
            this.divData.addChild(obj.name, obj);

            obj = new Static("staQN_MONTHLY","0","staID_SABUN:-1","80","30",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("12");
            obj.set_text("일수");
            obj.set_cssclass("sta_WF_tablelabel");
            this.divData.addChild(obj.name, obj);

            obj = new Static("staQN_MONTHLY_bg","staQN_MONTHLY:-1","staQN_MONTHLY:-30","289","30",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("5");
            obj.set_cssclass("sta_WF_tablebg");
            this.divData.addChild(obj.name, obj);

            obj = new Edit("txtQN_MONTHLY","staQN_MONTHLY:5","staQN_MONTHLY:-25","278","20",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("4");
            obj.set_readonly("false");
            this.divData.addChild(obj.name, obj);

            obj = new Static("staQN_YEARLYBASE","0","staQN_MONTHLY:-1","80","30",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("12");
            obj.set_text("기본연차");
            obj.set_cssclass("sta_WF_tablelabel");
            this.divData.addChild(obj.name, obj);

            obj = new Static("staQN_YEARLYBASE_bg","staQN_YEARLYBASE:-1","staQN_YEARLYBASE:-30","289","30",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("5");
            obj.set_cssclass("sta_WF_tablebg");
            this.divData.addChild(obj.name, obj);

            obj = new Edit("txtQN_YEARLYBASE","staQN_YEARLYBASE:5","staQN_YEARLYBASE:-25","278","20",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("4");
            obj.set_readonly("false");
            this.divData.addChild(obj.name, obj);

            obj = new Static("staQN_YEARLYSERVICE","0","staQN_YEARLYBASE:-1","80","30",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("15");
            obj.set_text("근속연차");
            obj.set_cssclass("sta_WF_tablelabel");
            this.divData.addChild(obj.name, obj);

            obj = new Static("staQN_YEARLYSERVICE_bg","staQN_YEARLYSERVICE:-1","staQN_YEARLYSERVICE:-30","289","30",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("5");
            obj.set_cssclass("sta_WF_tablebg");
            this.divData.addChild(obj.name, obj);

            obj = new Edit("txtQN_YEARLYSERVICE","staQN_YEARLYSERVICE:5","staQN_YEARLYSERVICE:-25","278","20",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("5");
            obj.set_readonly("false");
            this.divData.addChild(obj.name, obj);

            obj = new Static("txtDlgGroupText1","0","staQN_YEARLYSERVICE:5","368","20",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("6");
            obj.set_text(" ■ 특정 사번이 입력되지 않으면 전직원을 대상으로 작업됩니다.");
            obj.set_background("#cfebeb");
            this.divData.addChild(obj.name, obj);

            obj = new Static("txtDlgGroupText2","0","txtDlgGroupText1:5","368","20",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("7");
            obj.set_text(" ■ 기본연차과 근속년차를 입력하면 입력된 연차로 생성됩니다.");
            obj.set_background("#cfebeb");
            this.divData.addChild(obj.name, obj);

            obj = new Div("divBtns","110","txtDlgGroupText1:35","130","27",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("9");
            this.divData.addChild(obj.name, obj);

            obj = new Button("btnOK","0","0","60","27",null,null,null,null,null,null,this.divData.form.divBtns.form);
            obj.set_taborder("12");
            obj.set_text("확인");
            this.divData.form.divBtns.addChild(obj.name, obj);

            obj = new Button("btnCANCLE","btnOK:10","0","60","27",null,null,null,null,null,null,this.divData.form.divBtns.form);
            obj.set_taborder("13");
            obj.set_text("취소");
            this.divData.form.divBtns.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this
            obj = new Layout("default","",this._adjust_width,this._adjust_height,this,function(p){});
            this.addLayout(obj.name, obj);
            
            // BindItem Information
            obj = new BindItem("item0","divData.form.rdoJOB_TYPE","value","dsSearch","JOB_TYPE");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item1","divData.form.ctclYR_BASE.form.TextBox","value","dsSearch","YR_BASE");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item2","divData.form.ctclYM_MONVACA.form.TextBox","value","dsSearch","YM_MONVACA");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item3","divData.form.cfCD_CORP.form.CDTextBox","value","dsSearch","CD_CORP");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item4","divData.form.cfCD_CORP.form.DSTextBox","value","dsSearch","DS_CORP");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item5","divData.form.cfID_SABUN.form.CDTextBox","value","dsSearch","ID_SABUN");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item6","divData.form.cfID_SABUN.form.DSTextBox","value","dsSearch","DS_HNAME");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item7","divData.form.txtID_PERSON","value","dsSearch","ID_PERSON");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item8","divData.form.txtQN_MONTHLY","value","dsSearch","QN_MONTHLY");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item9","divData.form.txtQN_YEARLYBASE","value","dsSearch","QN_YEARLYBASE");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item10","divData.form.txtQN_YEARLYSERVICE","value","dsSearch","QN_YEARLYSERVICE");
            this.addChild(obj.name, obj);
            obj.bind();
            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {
            this._addPreloadList("fdl","cmm::cmmCalYY.xfdl");
            this._addPreloadList("fdl","cmm::cmmCalMM.xfdl");
            this._addPreloadList("fdl","cmm::cmmCodeFind.xfdl");
        };
        
        // User Script
        this.registerScript("DAC_YEARLYVACATION_DLG.xfdl", function() {
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
        	this.rdoJOB_TYPE         = this.divData.form.rdoJOB_TYPE;			// 구분
        	this.ctclYR_BASE         = this.divData.form.ctclYR_BASE;			// 기준일
        	this.stalYR_BASE    	 = this.divData.form.stalYR_BASE;
        	this.ctclYM_MONVACA      = this.divData.form.ctclYM_MONVACA;
        	this.cfCD_CORP           = this.divData.form.cfCD_CORP;				// 법인코드
        	this.cfID_SABUN          = this.divData.form.cfID_SABUN;			// 성명
        	this.txtID_PERSON        = this.divData.form.txtID_PERSON;
        	this.txtQN_MONTHLY       = this.divData.form.txtQN_MONTHLY;			// 일수
        	this.txtQN_YEARLYBASE    = this.divData.form.txtQN_YEARLYBASE;		// 기본연차
        	this.txtQN_YEARLYSERVICE = this.divData.form.txtQN_YEARLYSERVICE;	// 근속연차

        	this.txtDlgGroupText1 = this.divData.form.txtDlgGroupText1;
        	this.txtDlgGroupText2 = this.divData.form.txtDlgGroupText2;
        }

        /************************************************************************
         * 이벤트 설정
         ************************************************************************/
        this.fnSetEvent = function() {
        	this.cfCD_CORP.BeforeUserDataSetParam  = "fnBeforeUserDataSetParam";	// 법인코드
        	this.cfCD_CORP.AfterCDTextChanged      = "fnAfterCDTextChanged";
        	this.cfID_SABUN.BeforeUserDataSetParam = "fnBeforeUserDataSetParam";	// 성명
        	this.cfID_SABUN.AfterCDTextChanged     = "fnAfterCDTextChanged";
        }

        /************************************************************************
         * 파라미터 설정
         ************************************************************************/
        this.fnSetParameter = function() {
        	this.dsExec = new Dataset();
        	this.dsExec.addColumn("TY_GUBUN", "string");
        	this.dsExec.addColumn("YM_BASE", "string");
        	this.dsExec.addColumn("CD_CORP", "string");
        	this.dsExec.addColumn("ID_PERSON", "int");
        	this.dsExec.addColumn("ID_SABUN", "string");
        	this.dsExec.addColumn("QN_YEARLYBASE", "bigdecimal");
        	this.dsExec.addColumn("QN_YEARLYSERVICE", "bigdecimal");
        	this.dsExec.addColumn("QN_MONTHLY", "bigdecimal");
        	this.dsExec.addColumn("GR_SEARCH", "string");
        	this.dsExec.addColumn("GR_CORP", "string");
        	this.dsExec.addColumn("ID_USER", "string");
        }

        /************************************************************************
         * 화면 및 검색영역 초기화
         ************************************************************************/
        this.fnInit = function() {
        	this.dsSearch.setColumn(0, "JOB_TYPE", "Y");								// 구분
         	this.dsSearch.setColumn(0, "YR_BASE", this.getOwnerFrame().textCal);		// 년도
         	this.dsSearch.setColumn(0, "YM_MONVACA", this.gfnGetDate().substr(0, 6));	// 기준일(일자)
        	this.fnSetCodeFinder(this.cfCD_CORP, this.getOwnerFrame().cdcorp);			// 법인
        	this.fnSetCodeFinder(this.cfID_SABUN, this.getOwnerFrame().sabun);			// 성명
        	this.dsSearch.setColumn(0, "ID_PERSON", this.getOwnerFrame().idPerson);

         	this.rdoJOB_TYPE_onitemchanged();
        }

        /************************************************************************
         * 컨트롤 이벤트
         ************************************************************************/
        /*
         * 조회 버튼
         */
        this.fnSelect = function() {
        	if (!this.gfnSearchValidate(this.divSearch, this.dsSearch)) return false;

        	this.gfnGridBeforeSelect(this.dxGrid);
        	this.gfnSetFormStatus(this);

        	this.dsSelect.clearData();
        	this.dsSelect.addRow();
        	this.dsSelect.setColumn(0, "YY_TUITION", this.dsSearch.getColumn(0, "YY_TUITION"));
        	this.dsSelect.setColumn(0, "CD_TUITION", this.dsSearch.getColumn(0, "CD_TUITION"));
        	this.dsSelect.setColumn(0, "CD_CORP"   , this.dsSearch.getColumn(0, "CD_CORP"));
        	this.dsSelect.setColumn(0, "ID_PERSON" , this.dsSearch.getColumn(0, "ID_PERSON"));
        	this.dsSelect.setColumn(0, "ID_SABUN"  , this.dsSearch.getColumn(0, "ID_SABUN"));
        	this.dsSelect.setColumn(0, "GR_SEARCH" , this.FormInfo.GR_SEARCH);
        	this.dsSelect.setColumn(0, "GR_CORP"   , this.AuthClient.CD_CORP);
        	this.dsSelect.setColumn(0, "GR_DEPT"   , this.AuthClient.CD_DEPT);
        	this.dsSelect.setColumn(0, "ID_USER"   , this.AuthClient.ID_USER);

        	var strSvcId    = "select";
        	var strSvcType  = "grid";
        	var inProc		= "_dsProc";
        	var inData      = "select=dsSelect";
        	var outData     = "dsList=select0";
        	var strArg      = "";
        	var callBackFnc = "fnCallback";

        	this.gfnTransaction(strSvcId,		// transaction을 구분하기 위한 svc id값
        						strSvcType, 	// transaction을 요청할 구분
        						inProc,			// Procedure 정보 Dataset 이름
        						inData, 		// 입력값으로 보낼 dataset id, a=b형태로 실제이름과 입력이름을 매칭
        						outData, 		// 처리결과값으로 받을 dataset id, a=b형태로 실제이름과 입력이름을 매칭
        						strArg, 		// 입력갑스로 보낼 arguments, strFormData="20120607"
        						callBackFnc);	// 통신방법 정의 [생략가능]
        }

        /*
         * 입력 버튼
         */
        this.fnAdd = function() {
            var nrow = this.gfnGridAdd(this.dxGrid); // top (default), bottom, current
        }

        /*
         * 삭제 버튼
         */
        this.fnDel = function() {
            this.gfnGridDel(this.dxGrid);
        }

        /*
         * 저장 버튼
         */
        this.fnSave = function() {
            // 그리드 필수항목 체크
        	if (!this.gfnGridValidate(this.dxGrid)) return;

        	this.dxGrid.updateToDataset();
        	this.dsSave.clearData();
        	for (var i = 0; i < this.dsList.rowcount; i++) {
        		var flag = this.gfnGetFlag(this.dsList, i);
        		switch (flag) {
        		case "I":
        		case "U":
        		case "D":
        			var nrow = this.dsSave.addRow();
        			this.dsSave.setColumn(nrow, "TY_SAVE"           , flag);
        			this.dsSave.setColumn(nrow, "ID_PERSON"         , this.edtID_PERSON.value);
        			this.dsSave.setColumn(nrow, "YY_TUITION"        , this.ccfYY_TUITION.form.TextBox.value);
        			this.dsSave.setColumn(nrow, "CD_TUITION"        , this.cboCD_TUITION.value);
        			this.dsSave.setColumn(nrow, "NO_SEQ"            , (flag == "I" ? 0 : this.dsList.getColumn(i, "NO_SEQ")));
        			this.dsSave.setColumn(nrow, "CD_CORP"           , this.ccfCD_CORP.form.CDTextBox.value);
        			this.dsSave.setColumn(nrow, "ID_SABUN"          , this.ccfID_SABUN.form.CDTextBox.value);
        			this.dsSave.setColumn(nrow, "CD_DEPT"           , this.ccfCD_DEPT.form.CDTextBox.value);
        			this.dsSave.setColumn(nrow, "DT_REQUEST"        , this.gfnGetDate());
        			this.dsSave.setColumn(nrow, "CD_FAMILY"         , this.dsList.getColumn(i, "CD_FAMILY"));
        			this.dsSave.setColumn(nrow, "ID_RESIDENT"       , this.dsList.getColumn(i, "ID_RESIDENT"));
        			this.dsSave.setColumn(nrow, "DT_BIRTH"          , this.dsList.getColumn(i, "DT_BIRTH"));
        			this.dsSave.setColumn(nrow, "DS_FAM_HNAME"      , this.dsList.getColumn(i, "DS_FAM_HNAME"));
        			this.dsSave.setColumn(nrow, "CD_SCHOLARSHIP"    , this.dsList.getColumn(i, "CD_SCHOLARSHIP"));
        			this.dsSave.setColumn(nrow, "DS_SCHOOL"         , this.dsList.getColumn(i, "DS_SCHOOL"));
        			this.dsSave.setColumn(nrow, "DS_SCHOOL_GRADE"   , this.dsList.getColumn(i, "DS_SCHOOL_GRADE"));
        			this.dsSave.setColumn(nrow, "DS_SCHOOL_SEMESTER", this.dsList.getColumn(i, "DS_SCHOOL_SEMESTER"));
        			this.dsSave.setColumn(nrow, "DS_MAJOR"          , this.dsList.getColumn(i, "DS_MAJOR"));
        			this.dsSave.setColumn(nrow, "AM_TUITION"        , this.dsList.getColumn(i, "AM_TUITION"));
        			this.dsSave.setColumn(nrow, "DS_REMARK"         , this.dsList.getColumn(i, "DS_REMARK"));
        			this.dsSave.setColumn(nrow, "GR_SEARCH"         , this.FormInfo.GR_SEARCH);
        			this.dsSave.setColumn(nrow, "GR_CORP"           , this.AuthClient.CD_CORP);
        			this.dsSave.setColumn(nrow, "GR_DEPT"           , this.AuthClient.CD_DEPT);
        			this.dsSave.setColumn(nrow, "ID_USER"           , this.AuthClient.ID_USER);
        			break;
        		}
        	}

        	if (this.dsSave.rowcount == 0) return;

        	var strSvcId    = "save";
        	var strSvcType  = "save";
        	var inProc		= "_dsProc";
        	var inData      = "save=dsSave";
        	var outData     = "";
        	var strArg      = "";
        	var callBackFnc = "fnCallback";

        	this.gfnTransaction(strSvcId,		// transaction을 구분하기 위한 svc id값
        						strSvcType, 	// transaction을 요청할 구분
        						inProc,			// Procedure 정보 Dataset 이름
        						inData, 		// 입력값으로 보낼 dataset id, a=b형태로 실제이름과 입력이름을 매칭
        						outData, 		// 처리결과값으로 받을 dataset id, a=b형태로 실제이름과 입력이름을 매칭
        						strArg, 		// 입력갑스로 보낼 arguments, strFormData="20120607"
        						callBackFnc);	// 통신방법 정의 [생략가능]
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
        	this.fnPrintProc();
        	return false;	//브라우저 프린트 막기
        }

        /************************************************************************
         * Validate
         ************************************************************************/
        this.fnSelectValid = function() {
        	var JOB_TYPE = this.dsSearch.getColumn(0, "JOB_TYPE");
        	if (JOB_TYPE == "Y") {
        		if (this.gfnIsNull(this.dsSearch.getColumn(0, "YR_BASE"))) {
        			this.ctclYR_BASE.form.TextBox.setFocus();
        			this.gfnAlert("기준년도가 입력되지 않았습니다.");
        			return false;
        		}

        		if (this.gfnIsNull(this.dsSearch.getColumn(0, "CD_CORP"))) {
        			this.cfCD_CORP.form.CDTextBox.setFocus();
        			this.gfnAlert("법인이 입력되지 않았습니다.");
        			return false;
        		}

        // 		if (!this.gfnIsNull(this.dsSearch.getColumn(0, "QN_YEARLYBASE"))) && !nexacro.isNumeric(this.dsSearch.getColumn(0, "QN_YEARLYBASE"))) {
        // 			this.txtQN_YEARLYBASE.setFocus();
        // 			this.gfnAlert("기본연차의 입력형식이 맞지 않습니다.");
        // 			return false;
        // 		}

        		if (!this.gfnIsNull(this.dsSearch.getColumn(0, "QN_YEARLYSERVICE")) && !nexacro.isNumeric(this.dsSearch.getColumn(0, "QN_YEARLYSERVICE"))) {
        			this.txtQN_YEARLYSERVICE.setFocus();
        			this.gfnAlert("근속연차의 입력형식이 맞지 않습니다.");
        			return false;
        		}
        	} else {
        		if(this.gfnIsNull(this.dsSearch.getColumn(0, "YM_MONVACA"))) {
        			this.ctclDT_MONVACA.setFocus();
        			this.gfnAlert("기준일이 입력되지 않았습니다.");
        			return false;
        		}

        		if(this.gfnIsNull(this.dsSearch.getColumn(0, "CD_CORP"))) {
        			this.cfCD_CORP.form.CDTextBox.setFocus();
        			this.gfnAlert("법인이 입력되지 않았습니다.");
        			return false;
        		}

        		if (!this.gfnIsNull(this.dsSearch.getColumn(0, "ID_SABUN"))) {
        			if (this.gfnIsNull(this.dsSearch.getColumn(0, "QN_MONTHLY"))) {
        				this.txtQN_MONTHLY.setFocus();
        				this.gfnAlert("일수가 입력되지 않았습니다.");
        				return false;
        			}
        		}
        	}

        	return true;
        }

        // 구분 라디오 변경시 이벤트
        this.rdoJOB_TYPE_onitemchanged = function(obj, e) {
        	if (this.dsSearch.getColumn(0, "JOB_TYPE") == "Y") {
        	    this.ctclYR_BASE.set_visible(true);			// 기준일
        		this.stalYR_BASE.set_text("기준년도");
        		this.ctclYM_MONVACA.set_visible(false);
        		this.txtQN_MONTHLY.set_enable(false);		// 일수
        		this.txtQN_YEARLYBASE.set_enable(true);		// 기본연차
        		this.txtQN_YEARLYSERVICE.set_enable(true);	// 연속연차
         		this.txtDlgGroupText2.set_textDecoration("none");
        	} else {
        		this.ctclYR_BASE.set_visible(false);		// 기준일
        		this.stalYR_BASE.set_text("기준년월");
        		this.ctclYM_MONVACA.set_visible(true);
        		this.txtQN_MONTHLY.set_enable(true);		// 일수
        		this.txtQN_MONTHLY.set_value("1");
        		this.txtQN_YEARLYBASE.set_enable(false);	// 기본연차
        		this.txtQN_YEARLYSERVICE.set_enable(false);	// 연속연차
         		this.txtDlgGroupText2.set_textDecoration("line-through");
        	}
        }

        /************************************************************************
         * 확장버튼 이벤트
         ************************************************************************/
        // 확인
        this.btnOK_onclick = function(obj,e) {
        	if (!this.fnSelectValid()) return;

        	var tyGubun = "";
        	var dtBase = "";
        	if (this.dsSearch.getColumn(0, "JOB_TYPE") == "Y") {
        		//tyGubun = "Y";
        		dtBase = this.dsSearch.getColumn(0, "YR_BASE");
        	} else {
        		//tyGubun = "M";
        		dtBase = this.dsSearch.getColumn(0, "YM_MONVACA");
        	}

        	this.dsExec.clearData();
        	this.dsExec.addRow();
        	this.dsExec.setColumn(0, "TY_GUBUN"        , this.dsSearch.getColumn(0, "JOB_TYPE"));
        	this.dsExec.setColumn(0, "YM_BASE"         , dtBase);
        	this.dsExec.setColumn(0, "CD_CORP"         , this.gfnTrim(this.cfCD_CORP.form.CDTextBox.value));
        	this.dsExec.setColumn(0, "ID_PERSON"       , this.txtID_PERSON.value);
        	this.dsExec.setColumn(0, "ID_SABUN"        , this.gfnTrim(this.cfID_SABUN.form.CDTextBox.value));
        	this.dsExec.setColumn(0, "QN_YEARLYBASE"   , this.txtQN_YEARLYBASE.value);
        	this.dsExec.setColumn(0, "QN_YEARLYSERVICE", this.txtQN_YEARLYSERVICE.value);
        	this.dsExec.setColumn(0, "QN_MONTHLY"      , this.txtQN_MONTHLY.value);
        	this.dsExec.setColumn(0, "GR_SEARCH"       , this.FormInfo.GR_SEARCH);
        	this.dsExec.setColumn(0, "GR_CORP"         , this.AuthClient.CD_CORP);
        	this.dsExec.setColumn(0, "ID_USER"         , this.AuthClient.ID_USER);

        	if (this.dsExec.rowcount == 0) return;

        	var strSvcId    = "exec";
        	var strSvcType  = "save";
        	var inProc		= "_dsProc";
        	var inData      = "exec=dsExec";
        	var outData     = "";
        	var strArg      = "";
        	var callBackFnc = "fnCallback";

        	this.gfnTransaction(strSvcId,		// transaction을 구분하기 위한 svc id값
        						strSvcType, 	// transaction을 요청할 구분
        						inProc,			// Procedure 정보 Dataset 이름
        						inData, 		// 입력값으로 보낼 dataset id, a=b형태로 실제이름과 입력이름을 매칭
        						outData, 		// 처리결과값으로 받을 dataset id, a=b형태로 실제이름과 입력이름을 매칭
        						strArg, 		// 입력갑스로 보낼 arguments, strFormData="20120607"
        						callBackFnc);	// 통신방법 정의 [생략가능]
        }

        // 취소 버튼
        this.btnCANCLE_onclick = function(obj, e) {
        	this.getParentContext().close(false);
        }

        /************************************************************************
         * 콜백 이벤트
         ************************************************************************/
        /*
         * 기본 콜백
         */
        this.fnCallback = function(svcID, errorCode, errorMsg) {
        	if (svcID == "exec") {
        		if (errorCode == 0) {
        			var JOB_TYPE = this.dsSearch.getColumn(0, "JOB_TYPE");
        			if (JOB_TYPE == "Y") {
        				this.gfnAlert("연차 생성작업이 완료되었습니다.");
        			} else {
        				this.gfnAlert("1년미만연차 생성작업이 완료되었습니다.");
        			}
        			this.getParentContext().close(true);
        		} else {
        			this.gfnAlert(errorMsg);
        		}
        	}
        }

        /************************************************************************
         * 코드파인드 이벤트
         ************************************************************************/
        this.fnBeforeUserDataSetParam = function(id, dsUserParam, nrow) {
        	if (id == "cfID_SABUN") {
        		dsUserParam.setColumn(nrow, "CD_CORP"  , this.gfnTrim(this.dsSearch.getColumn(0, "CD_CORP")));
        		dsUserParam.setColumn(nrow, "GR_SEARCH", this.FormInfo.GR_SEARCH);
        		dsUserParam.setColumn(nrow, "CD_DEPT"  , this.AuthClient.CD_DEPT);
        		dsUserParam.setColumn(nrow, "YN_CORP"  , "N");
        		dsUserParam.setColumn(nrow, "TY_RETIRE", "01");   // 재직구분
        	} else if (id == "cfCD_CORP") {
        		dsUserParam.setColumn(nrow, "CD_CORP"  , this.AuthClient.CD_CORP);
        		dsUserParam.setColumn(nrow, "GR_SEARCH", this.FormInfo.GR_SEARCH);
        		dsUserParam.setColumn(nrow, "ID_USER"  , this.AuthClient.ID_USER);
        	}

        	return true;
        }

        this.fnAfterCDTextChanged = function(id, codeFindData) {
        	if (id == "cfID_SABUN") {
        	    if (codeFindData.length == 0) {
        			this.fnSetObjectValue(this.txtID_PERSON, "");
        		} else {
        			//this.fnSetCodeFinder(this.cfCD_CORP, codeFindData[0]["CD_CORP"]);
        			this.fnSetObjectValue(this.txtID_PERSON, codeFindData[0]["ID_PERSON"]);
        		}
        	} else if (id == "cfCD_CORP") {
        		this.fnResetCodeFinder(this.cfID_SABUN, this.dsSearch, ["ID_SABUN", "DS_HNAME"]);
        		this.fnSetObjectValue(this.txtID_PERSON, "");
        	}
        }

        /************************************************************************
         * 기타 함수
         ************************************************************************/
        // 코드파인더 초기화
        this.fnResetCodeFinder = function(obj, dataset, columns) {
        	obj.form.fnCodeFindClear();
        	for (var i = 0; i < columns.length; i++) {
        		dataset.setColumn(0, columns[i], "");
        	}
        }

        // 코드파인더 설정
        this.fnSetCodeFinder = function(obj, value) {
        	obj.form.CDTextBox.set_value(value);
        	obj.form.fnCodeFindLoad();
        }

        // 객체 초기화
        this.fnResetObjectValue = function(obj, dataset, columns) {
        	obj.set_value("");
        	for (var i = 0; i < columns.length; i++) {
        		dataset.setColumn(0, columns[i], "");
        	}
        }

        // 객체 설정
        this.fnSetObjectValue = function(obj, value) {
        	obj.set_value(value);
        }
        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.form_onload,this);
            this.divData.form.staJOB_TYPE.addEventHandler("onclick",this.staCD_UPDEPT_onclick,this);
            this.divData.form.rdoJOB_TYPE.addEventHandler("onitemchanged",this.rdoJOB_TYPE_onitemchanged,this);
            this.divData.form.txtID_PERSON.addEventHandler("onchanged",this.txtID_PERSON_onchanged,this);
            this.divData.form.divBtns.form.btnOK.addEventHandler("onclick",this.btnOK_onclick,this);
            this.divData.form.divBtns.form.btnCANCLE.addEventHandler("onclick",this.btnCANCLE_onclick,this);
            this.dsSearch.addEventHandler("onvaluechanged",this.dsSearch_onvaluechanged,this);
        };
        this.loadIncludeScript("DAC_YEARLYVACATION_DLG.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
