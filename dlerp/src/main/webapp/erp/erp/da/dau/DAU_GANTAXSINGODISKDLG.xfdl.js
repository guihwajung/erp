(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("DAU_GANTAXSINGODISKDLG");
            this.set_titletext("전산매체생성");
            this.getSetter("maxwidth").set("421");
            this.getSetter("maxheight").set("404");
            if (Form == this.constructor)
            {
                this._setFormPosition(381,329);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("dsList", this);
            obj._setContents("");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsListSub", this);
            obj._setContents("");
            this.addChild(obj.name, obj);


            obj = new Dataset("_dsProc", this);
            obj._setContents("<ColumnInfo><Column id=\"TARGET\" type=\"STRING\" size=\"256\"/><Column id=\"SP\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"TARGET\">select</Col><Col id=\"SP\">DAUPR_GANTAXDISKMM_CREATE</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsData", this);
            obj._setContents("<ColumnInfo><Column id=\"YN_GUBUN\" type=\"STRING\" size=\"256\"/><Column id=\"YY_BASE\" type=\"STRING\" size=\"256\"/><Column id=\"CD_CORP\" type=\"STRING\" size=\"256\"/><Column id=\"DS_CORP\" type=\"STRING\" size=\"256\"/><Column id=\"CD_CFSELFACNT\" type=\"STRING\" size=\"256\"/><Column id=\"DS_CFSELFACNT\" type=\"STRING\" size=\"256\"/><Column id=\"ID_HOMETAX\" type=\"STRING\" size=\"256\"/><Column id=\"DS_DEPT\" type=\"STRING\" size=\"256\"/><Column id=\"DS_HNAME\" type=\"STRING\" size=\"256\"/><Column id=\"DS_TELNO\" type=\"STRING\" size=\"256\"/><Column id=\"CONT\" type=\"STRING\" size=\"256\"/><Column id=\"DT_PRINT\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"YN_GUBUN\"/></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new FileDownTransfer("FileDownTransfer00", this);
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Div("divData","0","0",null,null,"0","0",null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_cssclass("div_DATA_Bg");
            this.addChild(obj.name, obj);

            obj = new Static("staTITLE","0","-5","344","30",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("1");
            obj.set_text("간이지급명세서(근로소득) 전산매체생성");
            obj.set_cssclass("sta_TITLE_Bg");
            obj.set_textAlign("left");
            this.divData.addChild(obj.name, obj);

            obj = new Static("staYN_GUBUN","0","staTITLE:5","120","30",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("21");
            obj.set_text("작업구분");
            obj.set_visible("true");
            obj.set_cssclass("sta_WF_tablelabelE");
            this.divData.addChild(obj.name, obj);

            obj = new Static("staYN_GUBUN_bg","staYN_GUBUN:-1","staYN_GUBUN:-30","262","30",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("24");
            obj.set_cssclass("sta_WF_tablebg");
            obj.set_visible("true");
            this.divData.addChild(obj.name, obj);

            obj = new Radio("rdoYN_GUBUN","staYN_GUBUN:5","staYN_GUBUN:-25","120","20",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("25");
            obj.set_codecolumn("codecolumn");
            obj.set_datacolumn("datacolumn");
            obj.set_direction("vertical");
            var divData_form_rdoYN_GUBUN_innerdataset = new nexacro.NormalDataset("divData_form_rdoYN_GUBUN_innerdataset", obj);
            divData_form_rdoYN_GUBUN_innerdataset._setContents("<ColumnInfo><Column id=\"codecolumn\" size=\"256\"/><Column id=\"datacolumn\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"codecolumn\">Y</Col><Col id=\"datacolumn\">상반기</Col></Row><Row><Col id=\"codecolumn\">N</Col><Col id=\"datacolumn\">하반기</Col></Row></Rows>");
            obj.set_innerdataset(divData_form_rdoYN_GUBUN_innerdataset);
            obj.set_text("상반기");
            obj.set_value("Y");
            obj.set_index("0");
            this.divData.addChild(obj.name, obj);

            obj = new Static("staYY_BASE","0","staYN_GUBUN:-1","120","30",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("7");
            obj.set_text("정산년도");
            obj.set_visible("true");
            obj.set_cssclass("sta_WF_tablelabelE");
            this.divData.addChild(obj.name, obj);

            obj = new Static("staYY_BASE_bg","staYY_BASE:-1","staYY_BASE:-30","262","30",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("8");
            obj.set_cssclass("sta_WF_tablebg");
            obj.set_visible("true");
            this.divData.addChild(obj.name, obj);

            obj = new Div("ctcYY_BASE","staYY_BASE:5","staYY_BASE:-25","60","20",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("24");
            obj.set_url("cmm::cmmCalYY.xfdl");
            this.divData.addChild(obj.name, obj);

            obj = new Static("staCD_CORP","0","staYY_BASE:-1","120","30",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("17");
            obj.set_text("법인");
            obj.set_visible("true");
            obj.set_cssclass("sta_WF_tablelabelE");
            this.divData.addChild(obj.name, obj);

            obj = new Static("staCD_CORP_bg","staCD_CORP:-1","staCD_CORP:-30","262","30",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("18");
            obj.set_cssclass("sta_WF_tablebg");
            obj.set_visible("true");
            this.divData.addChild(obj.name, obj);

            obj = new Div("ccfCD_CORP","staCD_CORP:5","staCD_CORP:-25","250","20",null,null,null,null,null,null,this.divData.form);
            obj.getSetter("CodeFindName").set("DAX_CFCORP2");
            obj.getSetter("CDTextWidth").set("50");
            obj.set_taborder("5");
            obj.set_url("cmm::cmmCodeFind.xfdl");
            obj.set_text("");
            obj.set_visible("true");
            this.divData.addChild(obj.name, obj);

            obj = new Static("staCD_CFSELFACNT","0","staCD_CORP:-1","120","30",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("22");
            obj.set_text("세무단위");
            obj.set_visible("true");
            obj.set_cssclass("sta_WF_tablelabelE");
            this.divData.addChild(obj.name, obj);

            obj = new Static("staCD_CFSELFACNT_bg","staCD_CFSELFACNT:-1","staCD_CFSELFACNT:-30","262","30",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("23");
            obj.set_cssclass("sta_WF_tablebg");
            obj.set_visible("true");
            this.divData.addChild(obj.name, obj);

            obj = new Div("ccfCD_CFSELFACNT","staCD_CFSELFACNT:5","staCD_CFSELFACNT:-25","250","20",null,null,null,null,null,null,this.divData.form);
            obj.getSetter("CodeFindName").set("DHX_CFSELFACNT");
            obj.getSetter("CDTextWidth").set("80");
            obj.set_taborder("24");
            obj.set_url("cmm::cmmCodeFind.xfdl");
            obj.set_text("");
            obj.set_visible("true");
            this.divData.addChild(obj.name, obj);

            obj = new Static("staID_HOMETAX","0","staCD_CFSELFACNT:-1","120","30",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("12");
            obj.set_text("홈텍스ID");
            obj.set_cssclass("sta_WF_tablelabel");
            obj.set_visible("true");
            this.divData.addChild(obj.name, obj);

            obj = new Static("staID_HOMETAX_bg","staID_HOMETAX:-1","staID_HOMETAX:-30","262","30",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("17");
            obj.set_cssclass("sta_WF_tablebg");
            obj.set_visible("true");
            this.divData.addChild(obj.name, obj);

            obj = new Edit("edtID_HOMETAX","staID_HOMETAX:5","staID_HOMETAX:-25","250","20",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("24");
            this.divData.addChild(obj.name, obj);

            obj = new Static("staDS_DEPT","0","staID_HOMETAX:-1","120","30",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("13");
            obj.set_text("담당부서");
            obj.set_visible("true");
            obj.set_cssclass("sta_WF_tablelabelE");
            this.divData.addChild(obj.name, obj);

            obj = new Static("staDS_DEPT_bg","staDS_DEPT:-1","staDS_DEPT:-30","262","30",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("18");
            obj.set_cssclass("sta_WF_tablebg");
            obj.set_visible("true");
            this.divData.addChild(obj.name, obj);

            obj = new Edit("edtDS_DEPT","staDS_DEPT:5","staDS_DEPT:-25","250","20",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("25");
            obj.set_textAlign("left");
            this.divData.addChild(obj.name, obj);

            obj = new Static("staDS_HNAME","0","staDS_DEPT:-1","120","30",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("20");
            obj.set_text("담당자");
            obj.set_visible("true");
            obj.set_cssclass("sta_WF_tablelabelE");
            this.divData.addChild(obj.name, obj);

            obj = new Static("staDS_HNAME_bg","staDS_HNAME:-1","staDS_HNAME:-30","262","30",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("21");
            obj.set_cssclass("sta_WF_tablebg");
            obj.set_visible("true");
            this.divData.addChild(obj.name, obj);

            obj = new Edit("edtDS_HNAME","staDS_HNAME:5","staDS_HNAME:-25","250","20",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("26");
            obj.set_textAlign("left");
            this.divData.addChild(obj.name, obj);

            obj = new Static("staDS_TELNO","0","staDS_HNAME:-1","120","30",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("22");
            obj.set_text("담당자전화번호");
            obj.set_visible("true");
            obj.set_cssclass("sta_WF_tablelabelE");
            this.divData.addChild(obj.name, obj);

            obj = new Static("staDS_TELNO_bg","staDS_TELNO:-1","staDS_TELNO:-30","262","30",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("23");
            obj.set_cssclass("sta_WF_tablebg");
            obj.set_visible("true");
            this.divData.addChild(obj.name, obj);

            obj = new Edit("edtDS_TELNO","staDS_TELNO:5","staDS_TELNO:-25","250","20",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("27");
            obj.set_textAlign("left");
            obj.set_inputtype("digit");
            obj.set_displaynulltext("- 없이 번호만 입력하세요.");
            this.divData.addChild(obj.name, obj);

            obj = new TextArea("txtCont","448","29","102","60",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("29");
            obj.set_visible("false");
            this.divData.addChild(obj.name, obj);

            obj = new Static("staDT_PRINT","0","staDS_TELNO:-1","120","30",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("24");
            obj.set_text("제출일");
            obj.set_visible("true");
            obj.set_cssclass("sta_WF_tablelabelE");
            this.divData.addChild(obj.name, obj);

            obj = new Static("staDT_PRINT_bg","staDT_PRINT:-1","staDT_PRINT:-30","262","30",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("25");
            obj.set_cssclass("sta_WF_tablebg");
            obj.set_visible("true");
            this.divData.addChild(obj.name, obj);

            obj = new Calendar("ctclDT_PRINT","staDT_PRINT:5","staDT_PRINT:-25","100","20",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("28");
            obj.set_dateformat("yyyy-MM-dd");
            obj.set_editformat("yyyyMMdd");
            obj.set_autoselect("true");
            this.divData.addChild(obj.name, obj);

            obj = new Div("divBtns","120","staDT_PRINT:10","130","27",null,null,null,null,null,null,this.divData.form);
            this.divData.addChild(obj.name, obj);

            obj = new Button("btnOK","0","0","60","27",null,null,null,null,null,null,this.divData.form.divBtns.form);
            obj.set_taborder("1");
            obj.set_text("확인");
            this.divData.form.divBtns.addChild(obj.name, obj);

            obj = new Button("btnCANCLE","btnOK:10","0","60","27",null,null,null,null,null,null,this.divData.form.divBtns.form);
            obj.set_taborder("0");
            obj.set_text("취소");
            this.divData.form.divBtns.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this
            obj = new Layout("default","",this._adjust_width,this._adjust_height,this,function(p){});
            this.addLayout(obj.name, obj);
            
            // BindItem Information
            obj = new BindItem("item0","divData.form.rdoYN_GUBUN","value","dsData","YN_GUBUN");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item1","divData.form.ctcYY_BASE.form.TextBox","value","dsData","YY_BASE");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item2","divData.form.ccfCD_CORP.form.CDTextBox","value","dsData","CD_CORP");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item3","divData.form.ccfCD_CORP.form.DSTextBox","value","dsData","DS_CORP");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item4","divData.form.ccfCD_CFSELFACNT.form.CDTextBox","value","dsData","CD_CFSELFACNT");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item5","divData.form.ccfCD_CFSELFACNT.form.DSTextBox","value","dsData","DS_CFSELFACNT");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item6","divData.form.edtID_HOMETAX","value","dsData","ID_HOMETAX");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item7","divData.form.edtDS_DEPT","value","dsData","DS_DEPT");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item8","divData.form.edtDS_HNAME","value","dsData","DS_HNAME");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item9","divData.form.edtDS_TELNO","value","dsData","DS_TELNO");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item10","divData.form.txtCont","value","dsData","CONT");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item11","divData.form.ctclDT_PRINT","value","dsData","DT_PRINT");
            this.addChild(obj.name, obj);
            obj.bind();
            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {
            this._addPreloadList("fdl","cmm::cmmCalYY.xfdl");
            this._addPreloadList("fdl","cmm::cmmCodeFind.xfdl");
        };
        
        // User Script
        this.registerScript("DAU_GANTAXSINGODISKDLG.xfdl", function() {
        this.objApp = this.gfnGetApplication();

        var context = "/";
        if (nexacro.getEnvironmentVariable("evContextPath") != undefined) {
        	context = nexacro.getEnvironmentVariable("evContextPath");
        }

        this.fileConfig = {
        	host: this.gfnGetServerUrl(),
        	downloadUrl: context + "file/downloadText.do",
        	allowTypes: ["txt"],
        	maxCount: 1,
        	maxSize: "200MB",
        	maxTotalSize : "200MB"
        };

        this.form_onload = function(obj, e) {
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
        	this.rdoYN_GUBUN      = this.divData.form.rdoYN_GUBUN;			// 작업구분
        	this.ctcYY_BASE       = this.divData.form.ctcYY_BASE;			// 정산년도
        	this.ccfCD_CORP       = this.divData.form.ccfCD_CORP;			// 법인
        	this.ccfCD_CFSELFACNT = this.divData.form.ccfCD_CFSELFACNT;		// 세무단위
        	this.edtID_HOMETAX    = this.divData.form.edtID_HOMETAX;		// 홈텍스ID
        	this.edtDS_DEPT       = this.divData.form.edtDS_DEPT;			// 담당부서
        	this.edtDS_HNAME      = this.divData.form.edtDS_HNAME;			// 담당자
        	this.edtDS_TELNO      = this.divData.form.edtDS_TELNO;			// 담당자전화번호
        	this.txtCont          = this.divData.form.txtCont;
        	this.ctclDT_PRINT     = this.divData.form.ctclDT_PRINT;			// 제출일
        }

        /************************************************************************
         * 이벤트 설정
         ************************************************************************/
        this.fnSetEvent = function() {
        	this.ccfCD_CORP.BeforeUserDataSetParam       = "fnBeforeUserDataSetParam";	// 법인
        	this.ccfCD_CORP.AfterCDTextChanged           = "fnAfterCDTextChanged";
        	this.ccfCD_CFSELFACNT.BeforeUserDataSetParam = "fnBeforeUserDataSetParam";	// 세무단위
        	this.ccfCD_CFSELFACNT.AfterCDTextChanged     = "fnAfterCDTextChanged";
        }

        /************************************************************************
         * 파라미터 설정
         ************************************************************************/
        this.fnSetParameter = function() {
        	// 자료생성
        	this.dsSelect = new Dataset();
        	this.dsSelect.addColumn("YY_BASE", "string");
        	this.dsSelect.addColumn("CD_CORP", "string");
        	this.dsSelect.addColumn("DT_PRINT", "string");
        	this.dsSelect.addColumn("ID_HOMETAX", "string");
        	this.dsSelect.addColumn("DS_DEPT", "string");
        	this.dsSelect.addColumn("DS_HNAME", "string");
        	this.dsSelect.addColumn("DS_TELNO", "string");
        	this.dsSelect.addColumn("YN_GUBUN", "string");
        }

        /************************************************************************
         * 콤보 데이터 조회 및 설정
         ************************************************************************/
        this.fnSetCombo = function() {

        }

        /************************************************************************
         * 화면 및 검색영역 초기화
         ************************************************************************/
        this.fnInit = function() {
        	var frame = this.getOwnerFrame();
        	if (!this.gfnIsNull(frame.YY_BASE) && !this.gfnIsNull(frame.CD_CORP)) {
        		this.dsData.setColumn(0, "YN_GUBUN", frame.YN_GUBUN);	// 작업구분
        		this.dsData.setColumn(0, "YY_BASE", frame.YY_BASE);		// 정산년도
        		this.dsData.setColumn(0, "CD_CORP", frame.CD_CORP);		// 법인
        		this.dsData.setColumn(0, "DS_CORP", frame.DS_CORP);
        	} else {
        		this.dsData.setColumn(0, "YN_GUBUN", "Y");	// 작업구분
        		this.dsData.setColumn(0, "YY_BASE" , this.gfnGetDate().substr(0, 4));	// 정산년도
        		this.dsData.setColumn(0, "CD_CORP" , this.AuthClient.CD_CORP);			// 법인
        		this.dsData.setColumn(0, "DS_CORP" , this.AuthClient.DS_CORP);
        	}
        	this.dsData.setColumn(0, "DT_PRINT", this.gfnGetDate()); // 제출일
        }

        /************************************************************************
         * 컨트롤 이벤트
         ************************************************************************/
        /*
         *	조회 버튼
         */
        this.fnSelect = function() {
        	if (!this.fnSelectValidate()) return false;

        	this.dsSelect.clearData();
        	this.dsSelect.addRow();
        	this.dsSelect.setColumn(0, "YY_BASE"   , this.dsData.getColumn(0, "YY_BASE"));
        	this.dsSelect.setColumn(0, "CD_CORP"   , this.dsData.getColumn(0, "CD_CFSELFACNT"));
        	this.dsSelect.setColumn(0, "DT_PRINT"  , this.dsData.getColumn(0, "DT_PRINT"));
        	this.dsSelect.setColumn(0, "ID_HOMETAX", this.dsData.getColumn(0, "ID_HOMETAX"));
        	this.dsSelect.setColumn(0, "DS_DEPT"   , this.dsData.getColumn(0, "DS_DEPT"));
        	this.dsSelect.setColumn(0, "DS_HNAME"  , this.dsData.getColumn(0, "DS_HNAME"));
        	this.dsSelect.setColumn(0, "DS_TELNO"  , this.dsData.getColumn(0, "DS_TELNO"));
        	this.dsSelect.setColumn(0, "YN_GUBUN"  , this.dsData.getColumn(0, "YN_GUBUN"));

        	var strSvcId    = "select";
        	var strSvcType  = "grid";
        	var inProc      = "_dsProc";
        	var inData      = "select=dsSelect";
        	var outData     = "dsList=select0 dsListSub=select1";
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
         * 추가 버튼
         */
        this.fnAdd = function() {

        }

        /*
         * 삭제 버튼
         */
        this.fnDel = function() {

        }

        /*
         * 저장 버튼
         */
        this.fnSave = function() {

        }

        /*
         * 엑셀 버튼
         */
        this.fnExcel = function() {

        }

        /*
         * 출력 버튼
         */
        this.fnPrint = function() {
        	return true
        }

        /************************************************************************
         * Validate
         ************************************************************************/
        this.fnSelectValidate = function() {
         	var validate = true;

        	// 정산년도
        	if (this.gfnIsNull(this.dsData.getColumn(0, "YY_BASE"))) {
        		validate = false;
        		this.fnVaidateCallback = function() {
        			this.ctcYY_BASE.form.TextBox.setFocus();
        		}
        		this.gfnAlert("정산년도를 입력하세요.");
        		return validate;
        	}

        	// 법인
        	if (this.gfnIsNull(this.dsData.getColumn(0, "CD_CORP"))) {
        		validate = false;
        		this.fnVaidateCallback = function() {
        			this.ccfCD_CORP.form.CDTextBox.setFocus();
        		}
        		this.gfnAlert("법인을 선택하세요.", "fnVaidateCallback");
        		return validate;
        	}

        	// 세무단위
        	if (this.gfnIsNull(this.dsData.getColumn(0, "CD_CFSELFACNT"))) {
        		validate = false;
        		this.fnVaidateCallback = function() {
        			this.ccfCD_CFSELFACNT.form.CDTextBox.setFocus();
        		}
        		this.gfnAlert("세무단위를 선택하세요.", "fnVaidateCallback");
        		return validate;
        	}

        	// 담당부서명
        	if (this.gfnIsNull(this.dsData.getColumn(0, "DS_DEPT"))) {
        		validate = false;
        		this.fnVaidateCallback = function() {
        			this.edtDS_DEPT.setFocus();
        		}
        		this.gfnAlert("담당부서의 이름을 입력하세요.");
        		return false;
        	}

        	// 담당자명
        	if (this.gfnIsNull(this.dsData.getColumn(0, "DS_HNAME"))) {
        		validate = false;
        		this.fnVaidateCallback = function() {
        			this.edtDS_HNAME.setFocus();
        		}
        		this.gfnAlert("담당자의 이름을 입력하세요.");
        		return false;
        	}

        	// 담당자전화번호
        		if (this.gfnIsNull(this.dsData.getColumn(0, "DS_TELNO"))) {
        		validate = false;
        		this.fnVaidateCallback = function() {
        			this.edtDS_TELNO.setFocus();
        		}
        		this.gfnAlert("담당자의 전화번호를 입력하세요.");
        		return false;
        	}

        	// 제출일
        	if (this.gfnIsNull(this.dsData.getColumn(0, "DT_PRINT"))) {
        		validate = false;
        		this.fnVaidateCallback = function() {
        			this.ctclDT_PRINT.setFocus();
        		}
        		this.gfnAlert("제출일을 선택하세요.");
        		return false;
        	}

         	return validate;
        }

        /************************************************************************
         * 확장버튼 이벤트
         ************************************************************************/
        // 확인 버튼
        this.btnOK_onclick = function(obj, e) {
        	this.fnSelect();
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
        	if (svcID == "select") {
        		if (this.dsList.getRowCount() == 0) {
        			this.gfnAlert("신고자료가 존재하지 않습니다.간이지급명세서(근로소득) 신고자료 미존재.");
        		} else {
        			// 내용 txt 생성
        			this.fnSetTextFileCont();
        			// 파일 다운
        			this.fnFileDown();
        			// 닫기
        			this.getParentContext().close(true);
        		}
        	}
        }

        /************************************************************************
         * 코드파인드 이벤트
         ************************************************************************/
        this.fnBeforeUserDataSetParam = function(id, dsUserParam, nrow) {
         	switch (id) {
        	case "ccfCD_CORP":	// 법인코드
        		dsUserParam.setColumn(nrow, "GR_SEARCH", this.FormInfo.GR_SEARCH);
        		dsUserParam.setColumn(nrow, "CD_DEPT"  , this.AuthClient.CD_DEPT);
        		break;
        	}

         	return true;
        }

        this.fnAfterCDTextChanged = function(id, codeFindData) {
        	var arr = codeFindData;
        }

        /************************************************************************
         * 그리드 이벤트
         ************************************************************************/
        this.fnGridBeforeUserDataSetParam = function(id, dsUserParam, nrow) {
        	return true;
        }

        this.fnGridAfterCDTextChanged = function(id, codeFindData) {

        }

        /************************************************************************
         * 기타 이벤트
         ************************************************************************/

        /************************************************************************
         * 기타 함수
         ************************************************************************/
        this.fnSetTextFileCont = function() {
        	var strCont = "";
        	for(var row = 0; row < this.dsList.rowcount; row++) {
        		strCont = strCont + this.dsList.getColumn(row, "COL") + "\n";
        	}
        	this.txtCont.set_value(strCont.replace(/■/g,''));
        }

        this.fnFileDown = function() {
        	var sFilename = this.dsListSub.getColumn(0, "COL") + ".txt";
        	var sFilecont = this.txtCont.value;
        	var encodeFileName = encodeURIComponent(sFilename);

        	var surl = this.fileConfig.host + this.fileConfig.downloadUrl;
        	this.FileDownTransfer00.set_url(surl);
        	this.FileDownTransfer00.setPostData("fileEncoding", "EUC-KR"); //UTF-8, EUC-KR;
        	this.FileDownTransfer00.setPostData("fileCont", sFilecont);
        	this.FileDownTransfer00.setPostData("fileName", encodeFileName);
        	if (system.navigatorname =="nexacro") {
        		this.FileDownTransfer00.set_downloadfilename(sFilename);
        	}

        	this.FileDownTransfer00.download();
        }

        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.form_onload,this);
            this.divData.form.ctclDT_PRINT.addEventHandler("onchanged",this.fnSearchInit,this);
            this.divData.form.divBtns.form.btnOK.addEventHandler("onclick",this.btnOK_onclick,this);
            this.divData.form.divBtns.form.btnCANCLE.addEventHandler("onclick",this.btnCANCLE_onclick,this);
        };
        this.loadIncludeScript("DAU_GANTAXSINGODISKDLG.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
