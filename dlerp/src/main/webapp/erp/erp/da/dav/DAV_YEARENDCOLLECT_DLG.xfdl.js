(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("DAV_YEARENDCOLLECT_DLG");
            this.set_titletext("근로소득 원천징수부(미사용)");
            this.getSetter("maxwidth").set("400");
            this.getSetter("maxheight").set("380");
            if (Form == this.constructor)
            {
                this._setFormPosition(380,340);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("dsList", this);
            obj._setContents("");
            this.addChild(obj.name, obj);


            obj = new Dataset("_dsProc", this);
            obj._setContents("<ColumnInfo><Column id=\"TARGET\" type=\"STRING\" size=\"256\"/><Column id=\"SP\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"TARGET\">reportL04</Col><Col id=\"SP\">DAVPR_SALARYTAX_SELECT</Col></Row><Row><Col id=\"TARGET\">reportL04Sub</Col><Col id=\"SP\">DAVPR_SALARYTAX_SUB_SELECT</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsTY_PRINT", this);
            obj._setContents("<ColumnInfo><Column id=\"CODE\" type=\"STRING\" size=\"256\"/><Column id=\"VALUE\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"VALUE\">특정성명</Col><Col id=\"CODE\">1</Col></Row><Row><Col id=\"VALUE\">특정부서</Col><Col id=\"CODE\">2</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsTY_SORT", this);
            obj._setContents("<ColumnInfo><Column id=\"CODE\" type=\"STRING\" size=\"256\"/><Column id=\"VALUE\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"CODE\">1</Col><Col id=\"VALUE\">부서순</Col></Row><Row><Col id=\"VALUE\">사번순</Col><Col id=\"CODE\">2</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsList2", this);
            obj._setContents("");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsTY_PRINT_ORG", this);
            obj._setContents("<ColumnInfo><Column id=\"CODE\" type=\"STRING\" size=\"256\"/><Column id=\"VALUE\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"CODE\">%</Col><Col id=\"VALUE\">전체</Col></Row><Row><Col id=\"VALUE\">특정성명</Col><Col id=\"CODE\">1</Col></Row><Row><Col id=\"VALUE\">특정부서</Col><Col id=\"CODE\">2</Col></Row></Rows>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Div("divData","0","0",null,null,"0","0",null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_cssclass("div_DATA_Bg");
            obj.set_text("");
            this.addChild(obj.name, obj);

            obj = new Static("staTITLE","5","10","344","30",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("1");
            obj.set_text("근로소득 원천징수부");
            obj.set_cssclass("sta_TITLE_Bg");
            obj.set_textAlign("left");
            this.divData.addChild(obj.name, obj);

            obj = new Static("staDT_REGIST","3","45","87","30",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("21");
            obj.set_text("작성일자");
            obj.set_cssclass("sta_WF_tablelabel");
            obj.set_visible("true");
            this.divData.addChild(obj.name, obj);

            obj = new Static("sta02","89","45","260","30",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("24");
            obj.set_cssclass("sta_WF_tablebg");
            obj.set_visible("true");
            this.divData.addChild(obj.name, obj);

            obj = new Static("staYM_BASE","3","staDT_REGIST:-1","87","30",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("15");
            obj.set_text("적용년월");
            obj.set_cssclass("sta_WF_tablelabelE");
            this.divData.addChild(obj.name, obj);

            obj = new Static("sta04","89","74","260","30",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("16");
            obj.set_cssclass("sta_WF_tablebg");
            obj.set_textAlign("right");
            this.divData.addChild(obj.name, obj);

            obj = new Static("staCD_CORP","3","160","87","30",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("17");
            obj.set_text("법인코드");
            obj.set_visible("true");
            obj.set_cssclass("sta_WF_tablelabelE");
            this.divData.addChild(obj.name, obj);

            obj = new Static("sta06","89","160","260","30",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("18");
            obj.set_cssclass("sta_WF_tablebg");
            obj.set_visible("true");
            this.divData.addChild(obj.name, obj);

            obj = new Div("ccfCD_CORP","staCD_CORP:5","165","240","20",null,null,null,null,null,null,this.divData.form);
            obj.getSetter("CodeFindName").set("DAX_CFCORP_CODEFIND");
            obj.getSetter("CDTextWidth").set("70");
            obj.set_taborder("5");
            obj.set_url("cmm::cmmCodeFind.xfdl");
            obj.set_text("");
            obj.set_visible("true");
            obj.getSetter("BeforeUserDataSetParam").set("fnBeforeUserDataSetParam");
            obj.getSetter("AfterCDTextChanged").set("fnAfterCDTextChanged");
            this.divData.addChild(obj.name, obj);

            obj = new Static("staOPT_PRINT","3","132","87","30",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("26");
            obj.set_text("출력옵션");
            obj.set_cssclass("sta_WF_tablelabel");
            this.divData.addChild(obj.name, obj);

            obj = new Static("sta17","89","132","260","30",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("27");
            obj.set_cssclass("sta_WF_tablebg");
            this.divData.addChild(obj.name, obj);

            obj = new Static("staSEQ_ORDER","3","103","87","30",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("16");
            obj.set_text("정렬순서");
            obj.set_cssclass("sta_WF_tablelabel");
            this.divData.addChild(obj.name, obj);

            obj = new Static("sta12","89","103","260","30",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("17");
            obj.set_cssclass("sta_WF_tablebg");
            this.divData.addChild(obj.name, obj);

            obj = new Radio("rdoSEQ_ORDER","95","110","140","20",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("22");
            obj.set_innerdataset("dsTY_SORT");
            obj.set_codecolumn("CODE");
            obj.set_datacolumn("VALUE");
            obj.set_direction("vertical");
            obj.set_text("부서순");
            obj.set_value("1");
            obj.set_index("0");
            this.divData.addChild(obj.name, obj);

            obj = new Calendar("ctclDT_REGIST","95","50","105","20",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("22");
            obj.set_dateformat("yyyy-MM-dd");
            obj.set_editformat("yyyyMMdd");
            obj.set_autoselect("true");
            this.divData.addChild(obj.name, obj);

            obj = new Static("sta13","186","79","134","20",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("23");
            obj.set_text("최종급여월 입력");
            this.divData.addChild(obj.name, obj);

            obj = new Combo("cboOPT_PRINT","95","137","129","20",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("20");
            obj.set_codecolumn("CODE");
            obj.set_datacolumn("VALUE");
            obj.set_innerdataset("dsTY_PRINT");
            obj.set_text("전체");
            obj.set_value("%");
            obj.set_index("0");
            this.divData.addChild(obj.name, obj);

            obj = new Div("ctclYM_BASE","95","79","80","20",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("17");
            obj.set_url("cmm::cmmCalMM.xfdl");
            this.divData.addChild(obj.name, obj);

            obj = new Static("stagb","3","189","87","30",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("18");
            obj.set_cssclass("sta_WF_tablelabel");
            obj.set_visible("true");
            obj.set_text("인감여부");
            this.divData.addChild(obj.name, obj);

            obj = new Static("stagb00","89","189","260","30",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("20");
            obj.set_cssclass("sta_WF_tablebg");
            obj.set_visible("true");
            this.divData.addChild(obj.name, obj);

            obj = new Radio("rdoYN_STAMP_IMG","95","194","113","20",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("20");
            obj.set_codecolumn("codecolumn");
            obj.set_datacolumn("datacolumn");
            obj.set_direction("vertical");
            var divData_form_rdoYN_STAMP_IMG_innerdataset = new nexacro.NormalDataset("divData_form_rdoYN_STAMP_IMG_innerdataset", obj);
            divData_form_rdoYN_STAMP_IMG_innerdataset._setContents("<ColumnInfo><Column id=\"codecolumn\" size=\"256\"/><Column id=\"datacolumn\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"datacolumn\">Y</Col><Col id=\"codecolumn\">Y</Col></Row><Row><Col id=\"datacolumn\">N</Col><Col id=\"codecolumn\">N</Col></Row></Rows>");
            obj.set_innerdataset(divData_form_rdoYN_STAMP_IMG_innerdataset);
            obj.set_text("Y");
            obj.set_value("Y");
            obj.set_index("0");
            this.divData.addChild(obj.name, obj);

            obj = new Static("sta00","89","218","260","30",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("21");
            obj.set_cssclass("sta_WF_tablebg");
            obj.set_visible("false");
            this.divData.addChild(obj.name, obj);

            obj = new Div("ccf","95","223","240","20",null,null,null,null,null,null,this.divData.form);
            obj.getSetter("CodeFindName").set("DAX_CFCORP_CODEFIND");
            obj.getSetter("CDTextWidth").set("100");
            obj.set_taborder("22");
            obj.set_url("cmm::cmmCodeFind.xfdl");
            obj.set_text("");
            obj.set_visible("false");
            obj.getSetter("BeforeUserDataSetParam").set("fnBeforeUserDataSetParam");
            obj.getSetter("AfterCDTextChanged").set("fnAfterCDTextChanged");
            this.divData.addChild(obj.name, obj);

            obj = new Static("sta","3","218","87","30",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("23");
            obj.set_text("");
            obj.set_cssclass("sta_WF_tablelabel");
            obj.set_visible("false");
            this.divData.addChild(obj.name, obj);

            obj = new Div("divBtns","75","sta00:20","200","27",null,null,null,null,null,null,this.divData.form);
            this.divData.addChild(obj.name, obj);

            obj = new Button("btnCANCLE","120","0","60","27",null,null,null,null,null,null,this.divData.form.divBtns.form);
            obj.set_taborder("0");
            obj.set_text("취소");
            this.divData.form.divBtns.addChild(obj.name, obj);

            obj = new Button("btnOK","30","0","60","27",null,null,null,null,null,null,this.divData.form.divBtns.form);
            obj.set_taborder("1");
            obj.set_text("확인");
            this.divData.form.divBtns.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this
            obj = new Layout("default","",this._adjust_width,this._adjust_height,this,function(p){});
            this.addLayout(obj.name, obj);
            
            // BindItem Information

            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {
            this._addPreloadList("fdl","cmm::cmmCodeFind.xfdl");
            this._addPreloadList("fdl","cmm::cmmCalMM.xfdl");
        };
        
        // User Script
        this.registerScript("DAV_YEARENDCOLLECT_DLG.xfdl", function() {
        this.objApp = this.gfnGetApplication();

        this.form_onload = function(obj,e)
        {
        	// -- 필수 -------------------//
        	this.gfnFormOnLoad(this);
        	this.gfnFormInfo(this);
        	// ---------------------------//

        	this.fnSetButton();
        	//this.fnSetExtendButton();
        	this.fnSetVariable();
        	this.fnSetEvent();
        	this.fnSetParameter();

        	if(!this.gfnIsNull(this.getOwnerFrame().CD_CORP)){

        		// 법인코드 및 법인명 기본세팅
        		this.ccfCD_CORP.form.CDTextBox.set_value(this.getOwnerFrame().CD_CORP);
        		this.ccfCD_CORP.form.DSTextBox.set_value(this.getOwnerFrame().DS_CORP);
        		//적용년월
        		this.ctclYM_BASE.form.TextBox.set_value(this.getOwnerFrame().WORK_BASE);

        		this.cboOPT_PRINT.set_value("1");
        		this.sta.set_visible(true);
        		this.sta00.set_visible(true);
        		this.ccf.set_visible(true);
        		this.sta.set_text("주민번호");
        		this.ccf.CodeFindName="DAX_CFEMP";
        		this.ccf.form.CDTextBox.set_value(nexacro.replaceAll(this.gfnNvl(this.getOwnerFrame().ID_RESIDENT,""), "-", ""));
        		this.ccf.form.DSTextBox.set_value(this.getOwnerFrame().DS_HNAME);

        	}else{
        		// 법인코드 및 법인명 기본세팅
        		this.ccfCD_CORP.form.CDTextBox.set_value(this.AuthClient.CD_CORP);
        		this.ccfCD_CORP.form.DSTextBox.set_value(this.AuthClient.DS_CORP);
        		//적용년월
        		this.ctclYM_BASE.form.TextBox.set_value(this.gfnGetDate().substr(0,6));
        	}

        	//작성일자
        	this.ctclDT_REGIST.set_value(this.gfnGetDate());
        };

        /************************************************************************
         * 버튼 설정 : 화면(Tab) 전환시 마다 호출
         * 서브버튼 사용 및 공통버튼 강제 제어시 여기서 처리
         ************************************************************************/
        this.fnSetButton = function() {
        	// Select, Add, Del, Save, Excel, Print
        	// SubSelect, SubAdd, SubDel, SuubSave, SubExcel
        	// this.FormBtns.Add.set_enable(false);
        	// this.FormBtns.Del.set_enable(false);
        };

        /************************************************************************
         * 확장 버튼 : 화면별 버튼 설정 ID, function 연결 (화면버튼관리)
         ************************************************************************/

        /************************************************************************
         * 변수 선언
         ************************************************************************/
        this.fnSetVariable = function() {
        	this.cboOPT_PRINT   = this.divData.form.cboOPT_PRINT;	//
        	this.ctclYM_BASE    = this.divData.form.ctclYM_BASE;	// 사번

        	this.ctclDT_REGIST  = this.divData.form.ctclDT_REGIST;	// 적용년월
        	this.rdoYN_STAMP_IMG  	= this.divData.form.rdoYN_STAMP_IMG;	// 구분
        	this.rdoSEQ_ORDER  = this.divData.form.rdoSEQ_ORDER;	// 대상
        	this.ccfCD_CORP 	= this.divData.form.ccfCD_CORP;		// 법인
        	this.sta00    = this.divData.form.sta00;	// 사번
        	this.ccf    = this.divData.form.ccf;	// 사번
        	this.sta    = this.divData.form.sta;	// 사번
        	this.sta13    = this.divData.form.sta13;	// 사번

        	this.grSearch = this.FormInfo.GR_SEARCH;					          // 권한
        	this.cdGroup = this.AuthClient.CD_GROUP;					          // 그룹코드
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

        };

        /************************************************************************
         * 컨트롤 이벤트
         ************************************************************************/
         /************************************************************************
         * Validate
         ************************************************************************/
        this.fnSelectValidate = function() {

        	//적용년월
        	if (this.gfnIsNull(this.ctclYM_BASE.form.TextBox.value)) {
        		this.fnVaidateCallback = function() {
        			this.ctclYM_BASE.form.TextBox.setFocus();
        		}
        		this.gfnAlert("적용년월을 입력하세요.");
        		return false;
        	}

        	//법인
        	if (this.gfnIsNull(this.ccfCD_CORP.form.CDTextBox.value)) {
        		this.fnVaidateCallback = function() {
        			this.ccfCD_CORP.form.CDTextBox.setFocus();
        		}
        		this.gfnAlert("법인코드를 입력하세요.", "fnVaidateCallback");
        		return false;
        	}

        	if(this.cboOPT_PRINT.value != "%"){
        		if(this.gfnIsNull(this.ccf.form.CDTextBox.value)){
        			this.fnVaidateCallback = function() {
        				this.ccf.form.CDTextBox.setFocus();
        			}
        			this.gfnAlert(this.sta.text+"을/를 입력하세요.", "fnVaidateCallback");
        			return false;
        		}
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
        	if (svcID == "report") {
        		if(this.dsList.rowcount > 0){
        // 			var inProc		= "_dsProc";
        // 			var inParam 	= "params=dsList";			// 조회SP이외 사용할 정보
        // 			//var inParam 	= "";			// 조회SP이외 사용할 정보
        // 			//var inParam 	= "";						// 필요없는 경우 생략
        // 			//var inData      = "reportL04=dsReport reportL04Sub=dsReport";	// data1 과 data2 가 바뀌어 전달되는 경우발생으로 기본정보는 param 으로 전송
        // 			var inData      = "reportL04Sub=dsReport";	// data1 과 data2 가 바뀌어 전달되는 경우발생으로 기본정보는 param 으로 전송
        // 			//var reportpath  = "/da/dav/DAV_YEARENDCOLLECT3.ozr";	// 닷넷소스버젼
        // 			var reportpath  = "/da/dav/DAV_YEARENDCOLLECT.ozr";
        //
        //			gfnOpenReport(this, reportpath, inProc, inParam, inData);

        			this.fnPrintProc();
        		}else{
        			this.gfnAlert("조회된 자료가 없습니다.");
        		}
        	}
        };

        this.fnPrintProc = function(){
        // 	var strSvcId    = "report";
        // 	var strSvcType  = "select";
        // 	var inProc		= "_dsProc";
        // 	//var inData      = "reportL04=dsReport reportL04Sub=dsReport";
        // 	var inData      = "reportL04=dsReport reportL04Sub=dsReportSub";
        // 	var outData     = "dsList=reportL040 dsList2=reportL04Sub0";
        // 	var strArg 		= "";
        // 	var callBackFnc = "fnCallback";


        // 	var strSvcId    = "report2";
        // 	var strSvcType  = "select";
        // 	var inProc		= "_dsProc";
        // 	var inData      = "reportL04Sub=dsReportSub";
        // 	var outData     = "dsList2=reportL04Sub0";
        // 	var strArg 		= "";
        // 	var callBackFnc = "fnCallback";
        // 	this.gfnTransaction( strSvcId , 	// transaction을 구분하기 위한 svc id값
        // 						strSvcType , 	// trabsaction을 요청할 구분
        // 						inProc,			// Procedure 정보 Dataset 이름
        // 						inData , 		// 입력값으로 보낼 dataset id , a=b형태로 실제이름과 입력이름을 매칭
        // 						outData , 		// 처리결과값으로 받을 dataset id, a=b형태로 실제이름과 입력이름을 매칭
        // 						strArg, 		// 입력갑스로 보낼 arguments, strFormData="20120607"
        //  						callBackFnc,
        // 						false);			// 통신방법 정의 [생략가능]
        // 	return;


        	var inProc		= "_dsProc";
        	var inParam 	= "params=dsList";			// 조회SP이외 사용할 정보
        	var inData      = "reportL04=dsReport reportL04Sub=dsReportSub";	// data1 과 data2 가 바뀌어 전달되는 경우발생으로 기본정보는 param 으로 전송
        	//var inData      = "reportL04Sub=dsReportSub";	// data1 과 data2 가 바뀌어 전달되는 경우발생으로 기본정보는 param 으로 전송
        	var reportpath  = "/da/dav/DAV_YEARENDCOLLECT.ozr";

        trace("reportpath", reportpath);

        	gfnOpenReport(this, reportpath, inProc, inParam, inData);
        }

        /************************************************************************
         * 코드파인드 이벤트
         ************************************************************************/
        this.fnBeforeUserDataSetParam = function(id, dsUserParam, nrow) {

         	switch(id) {
        		case "ccfCD_CORP": // 법인코드
        			dsUserParam.setColumn(nrow, "CD_CORP", this.AuthClient.CD_CORP);
        			dsUserParam.setColumn(nrow, "GR_SEARCH", this.FormInfo.GR_SEARCH);
        			dsUserParam.setColumn(nrow, "ID_USER", this.AuthClient.ID_USER);
        			break;

        		case "ccf":
        			if(this.gfnIsNull(this.ccfCD_CORP.form.CDTextBox.value)){
        				this.fnBeforeUserCallback = function() {
        						this.ccfCD_CORP.form.CDTextBox.setFocus();
        				}
        				this.gfnAlert("법인코드를 입력하세요.", "fnBeforeUserCallback");
        				return false;
        			}

        			if(this.cboOPT_PRINT.value == "1"){
        				dsUserParam.setColumn(nrow, "GUBUN", "E");
        				dsUserParam.setColumn(nrow, "CD_CORP", this.ccfCD_CORP.form.CDTextBox.value);
        			}else if(this.cboOPT_PRINT.value == "2"){
        				dsUserParam.setColumn(nrow, "GR_SEARCH",  this.FormInfo.GR_SEARCH);	// 사용자 권한
        				dsUserParam.setColumn(nrow, "CD_DEPT",  this.AuthClient.CD_DEPT);	// 로그인부서
        				dsUserParam.setColumn(nrow, "CD_CORP",  this.ccfCD_CORP.form.CDTextBox.value);	// 조회조건에 있는 소속법인
        				dsUserParam.setColumn(nrow, "YN_CURRENT",  "Y");
        			}
        			break;

        		default:
         	}
         	return true;
        };

        this.fnAfterCDTextChanged = function(id, codeFindData) {
        	var arr = codeFindData;

        	switch(id) {
        		case "ccfCD_CORP": // 법인코드
        			this.ccf.form.CDTextBox.set_value("");
        			this.ccf.form.DSTextBox.set_value("");

        // 			this.ccfID_RESIDENT.form.CDTextBox.set_value("");
        // 			this.ccfID_RESIDENT.form.DSTextBox.set_value("");
        			break;

        		default:
        	}
        };

        /************************************************************************
         * 그리드 이벤트
         ************************************************************************/
         /************************************************************************
         * 확장버튼 이벤트
         ************************************************************************/
        /************************************************************************
         * 기타 이벤트
         ************************************************************************/

        this.btnOK_onclick = function(obj,e)
        {
        	if(!this.fnSelectValidate()) return false;

        	this.dsReport = new Dataset();
        	this.dsReport.addColumn("YM_BASE", "string");
        	this.dsReport.addColumn("NO_APPLY", "int");
        	this.dsReport.addColumn("ID_RESIDENT", "string");
        	this.dsReport.addColumn("TY_ORDERBY", "int");
        	this.dsReport.addColumn("CD_ORG2", "string");
        	this.dsReport.addColumn("CD_CORP", "string");
        	this.dsReport.addColumn("YN_STAMP_IMG", "string");

        	this.dsReportSub = new Dataset();
        	this.dsReportSub.addColumn("YY_BASE", "string");
        	this.dsReportSub.addColumn("MM_BASE", "string");
        	this.dsReportSub.addColumn("NO_APPLY", "int");
        	this.dsReportSub.addColumn("ID_RESIDENT", "string");
        	this.dsReportSub.addColumn("TY_ORDERBY", "int");
        	this.dsReportSub.addColumn("CD_ORG2", "string");
        	this.dsReportSub.addColumn("CD_CORP", "string");
        	this.dsReportSub.addColumn("YN_STAMP_IMG", "string");



        	/*
        	var nrow = this.dsReport.addRow();
        	this.dsReport.setColumn(nrow, "DT_WRITE", this.gfnGetDate());
        	this.dsReport.setColumn(nrow, "YM_BASE", this.ctclYM_BASE.form.TextBox.value);
        	this.dsReport.setColumn(nrow, "TY_ORDERBY", this.rdoSEQ_ORDER.value);
        	this.dsReport.setColumn(nrow, "ID_SABUN", this.cboOPT_PRINT.value=="1"?this.ccf.form.CDTextBox.value:"%");
        	this.dsReport.setColumn(nrow, "CD_DEPT", this.cboOPT_PRINT.value=="2"?this.ccf.form.CDTextBox.value:"%");
        	this.dsReport.setColumn(nrow, "CD_CORP", this.ccfCD_CORP.form.CDTextBox.value);
        	this.dsReport.setColumn(nrow, "YN_STAMP_IMG", "N");
        	*/


        	var sCD_ORG2 = "";
        	var sID_RESIDENT = "";
        	if(this.cboOPT_PRINT.value == "%" || this.cboOPT_PRINT.value == "1"){
        		sCD_ORG2 = "";
        	}else if(this.cboOPT_PRINT.value == "2"){
        		sCD_ORG2 = this.ccf.form.CDTextBox.value;
        	}

        	if(this.cboOPT_PRINT.value == "1"){ //특정성명
        		sID_RESIDENT = this.ccf.form.CDTextBox.value;
        	}else{
        		sID_RESIDENT = "%";
        	}

        	var nrow = this.dsReport.addRow();
        	this.dsReport.setColumn(nrow, "YM_BASE", this.ctclYM_BASE.form.TextBox.value);
        	this.dsReport.setColumn(nrow, "NO_APPLY", 1);
        	this.dsReport.setColumn(nrow, "ID_RESIDENT", sID_RESIDENT);//this.ccf.form.CDTextBox.value);
        	this.dsReport.setColumn(nrow, "TY_ORDERBY", this.rdoSEQ_ORDER.value);
        	this.dsReport.setColumn(nrow, "CD_ORG2", sCD_ORG2); //부서
        	this.dsReport.setColumn(nrow, "CD_CORP", this.ccfCD_CORP.form.CDTextBox.value);
        	this.dsReport.setColumn(nrow, "YN_STAMP_IMG", this.rdoYN_STAMP_IMG.value);

        	var nrowSub = this.dsReportSub.addRow();
        	this.dsReportSub.setColumn(nrowSub, "YY_BASE", this.ctclYM_BASE.form.TextBox.value.substring(0,4));
        	this.dsReportSub.setColumn(nrowSub, "MM_BASE", this.ctclYM_BASE.form.TextBox.value.substring(4,6));
        	this.dsReportSub.setColumn(nrowSub, "NO_APPLY", 1);
        	this.dsReportSub.setColumn(nrowSub, "ID_RESIDENT", sID_RESIDENT);//this.ccf.form.CDTextBox.value);
        	this.dsReportSub.setColumn(nrowSub, "TY_ORDERBY", this.rdoSEQ_ORDER.value);
        	this.dsReportSub.setColumn(nrowSub, "CD_ORG2", sCD_ORG2); //부서
        	this.dsReportSub.setColumn(nrowSub, "CD_CORP", this.ccfCD_CORP.form.CDTextBox.value);
        	this.dsReportSub.setColumn(nrowSub, "YN_STAMP_IMG", this.rdoYN_STAMP_IMG.value);

         	var strSvcId    = "report";
         	var strSvcType  = "select";
         	var inProc		= "_dsProc";
        	//var inData      = "reportL04=dsReport reportL04Sub=dsReport";
        	var inData      = "reportL04=dsReport reportL04Sub=dsReportSub";
        	var outData     = "dsList=reportL040 dsList2=reportL04Sub0";
        	var strArg 		= "";
        	var callBackFnc = "fnCallback";

        // 	trace("dsReport", this.dsReport.saveXML());
        // 	return;

        	this.gfnTransaction( strSvcId , 	// transaction을 구분하기 위한 svc id값
        						strSvcType , 	// trabsaction을 요청할 구분
        						inProc,			// Procedure 정보 Dataset 이름
        						inData , 		// 입력값으로 보낼 dataset id , a=b형태로 실제이름과 입력이름을 매칭
        						outData , 		// 처리결과값으로 받을 dataset id, a=b형태로 실제이름과 입력이름을 매칭
        						strArg, 		// 입력갑스로 보낼 arguments, strFormData="20120607"
         						callBackFnc,
        						false);			// 통신방법 정의 [생략가능]
        };

        this.btnCANCLE_onclick = function(obj,e)
        {
        	this.getParentContext().close(false);
        };

        this.cboOPT_PRINT_onitemchanged = function(obj,e)
        {
        	switch(obj.value){
        		case "%":
        			this.sta.set_visible(false);
        			this.sta00.set_visible(false);
        			this.ccf.set_visible(false);
        			this.ccf.form.fnCodeFindClear();
        			break;

        		case "1":	//특정성명
        			this.sta.set_visible(true);
        			this.sta00.set_visible(true);
        			this.ccf.set_visible(true);
        			this.sta.set_text("주민번호");
        			this.ccf.CodeFindName="DAX_CFEMP";
        			this.ccf.form.CDTextBox.set_value("");
        			this.ccf.form.DSTextBox.set_value("");
        			break;

        		case "2":	//특정부서
        			this.sta.set_visible(true);
        			this.sta00.set_visible(true);
        			this.ccf.set_visible(true);
        			this.sta.set_text("특정부서");
        			this.ccf.CodeFindName="DAX_CFDEPT";
        			this.ccf.form.CDTextBox.set_value("");
        			this.ccf.form.DSTextBox.set_value("");
        			break;

        		default:
        	}
        };
        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.form_onload,this);
            this.divData.form.sta04.addEventHandler("onclick",this.sta04_onclick,this);
            this.divData.form.ctclDT_REGIST.addEventHandler("onchanged",this.fnSearchInit,this);
            this.divData.form.cboOPT_PRINT.addEventHandler("onitemchanged",this.cboOPT_PRINT_onitemchanged,this);
            this.divData.form.divBtns.form.btnCANCLE.addEventHandler("onclick",this.btnCANCLE_onclick,this);
            this.divData.form.divBtns.form.btnOK.addEventHandler("onclick",this.btnOK_onclick,this);
        };
        this.loadIncludeScript("DAV_YEARENDCOLLECT_DLG.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
