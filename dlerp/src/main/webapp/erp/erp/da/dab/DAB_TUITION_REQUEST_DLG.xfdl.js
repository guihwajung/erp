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
            this.set_titletext("학자금신청등록");
            this.getSetter("maxwidth").set("1200");
            this.getSetter("maxheight").set("800");
            if (Form == this.constructor)
            {
                this._setFormPosition(1100,450);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("dsList", this);
            obj._setContents("");
            this.addChild(obj.name, obj);


            obj = new Dataset("_dsProc", this);
            obj._setContents("<ColumnInfo><Column id=\"TARGET\" type=\"STRING\" size=\"256\"/><Column id=\"SP\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"TARGET\">periodCheck</Col><Col id=\"SP\">DABPR_TUITION_PERIOD_CHECK</Col></Row><Row><Col id=\"TARGET\">select</Col><Col id=\"SP\">DABPR_TUITION_APP_SELECT</Col></Row><Row><Col id=\"TARGET\">save</Col><Col id=\"SP\">DABPR_TUITION_APP_SAVE</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsCD_TUITION", this);
            obj._setContents("<ColumnInfo><Column id=\"CD_CODE\" type=\"STRING\" size=\"256\"/><Column id=\"DS_CODE\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"CD_CODE\">01</Col><Col id=\"DS_CODE\">1분기</Col></Row><Row><Col id=\"CD_CODE\">02</Col><Col id=\"DS_CODE\">2분기</Col></Row><Row><Col id=\"CD_CODE\">03</Col><Col id=\"DS_CODE\">3분기</Col></Row><Row><Col id=\"CD_CODE\">04</Col><Col id=\"DS_CODE\">4분기</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsSearch", this);
            obj._setContents("<ColumnInfo><Column id=\"ID_SABUN\" type=\"STRING\" size=\"256\"/><Column id=\"DS_HNAME\" type=\"STRING\" size=\"256\"/><Column id=\"ID_PERSON\" type=\"STRING\" size=\"256\"/><Column id=\"CD_DEPT\" type=\"STRING\" size=\"256\"/><Column id=\"DS_DEPT\" type=\"STRING\" size=\"256\"/><Column id=\"CD_CORP\" type=\"STRING\" size=\"256\"/><Column id=\"DS_CORP\" type=\"STRING\" size=\"256\"/><Column id=\"YY_TUITION\" type=\"STRING\" size=\"256\"/><Column id=\"CD_TUITION\" type=\"STRING\" size=\"256\"/><Column id=\"DS_TUITION\" type=\"STRING\" size=\"256\"/><Column id=\"DS_APPROVAL\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Div("divSearch","0","0",null,"158","0",null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_text("");
            this.addChild(obj.name, obj);

            obj = new Static("sta_TITLE_T","0","5","90","18",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("0");
            obj.set_text("신청자정보");
            obj.set_cssclass("sta_TITLE_Bg");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("staCD_CORP","0","34","80","30",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("3");
            obj.set_text("법인코드");
            obj.set_cssclass("sta_WF_tablelabelE");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("staCD_CORP_bg","staCD_CORP:-1","staCD_CORP:-30","262","30",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("1");
            obj.set_cssclass("sta_WF_tablebg");
            obj.set_text("");
            this.divSearch.addChild(obj.name, obj);

            obj = new Div("ccfCD_CORP","staCD_CORP:5","39","250","20",null,null,null,null,null,null,this.divSearch.form);
            obj.getSetter("CDTextWidth").set("50");
            obj.set_taborder("2");
            obj.set_url("cmm::cmmCodeFind.xfdl");
            obj.set_text("");
            obj.getSetter("CodeFindName").set("DAX_CFCORP");
            obj.set_enable("false");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("staYY_TUITION","0","staCD_CORP:-1","80","30",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("4");
            obj.set_text("년도");
            obj.set_cssclass("sta_WF_tablelabel");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("staYY_TUITION_bg","staYY_TUITION:-1","staYY_TUITION:-30","262","30",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("5");
            obj.set_cssclass("sta_WF_tablebg");
            obj.set_text("");
            this.divSearch.addChild(obj.name, obj);

            obj = new Div("ccfYY_TUITION","staYY_TUITION:5","68","79","20",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("19");
            obj.set_text("div00");
            obj.set_url("cmm::cmmCalYY.xfdl");
            obj.set_enable("false");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("staID_SABUN","0","staYY_TUITION:-1","80","30",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("6");
            obj.set_text("성명");
            obj.set_cssclass("sta_WF_tablelabel");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("staID_SABUN_bg","staID_SABUN:-1","staID_SABUN:-30","262","30",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("8");
            obj.set_cssclass("sta_WF_tablebg");
            obj.set_text("");
            this.divSearch.addChild(obj.name, obj);

            obj = new Div("ccfID_SABUN","staID_SABUN:5","97","250","20",null,null,null,null,null,null,this.divSearch.form);
            obj.getSetter("CDTextWidth").set("90");
            obj.set_taborder("17");
            obj.set_url("cmm::cmmCodeFind.xfdl");
            obj.set_text("");
            obj.getSetter("CodeFindName").set("DAX_CFBASEINFO_ALL");
            obj.set_enable("false");
            this.divSearch.addChild(obj.name, obj);

            obj = new Edit("edtID_PERSON","247","67","86","20",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("15");
            obj.set_enable("false");
            obj.set_visible("false");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("staCD_DEPT","0","staID_SABUN:-1","80","30",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("16");
            obj.set_text("부서");
            obj.set_cssclass("sta_WF_tablelabel");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("staCD_DEPT_bg","staCD_DEPT:-1","staCD_DEPT:-30","262","30",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("7");
            obj.set_cssclass("sta_WF_tablebg");
            obj.set_text("");
            this.divSearch.addChild(obj.name, obj);

            obj = new Div("ccfCD_DEPT","staCD_DEPT:5","126","250","20",null,null,null,null,null,null,this.divSearch.form);
            obj.getSetter("CDTextWidth").set("100");
            obj.set_taborder("18");
            obj.set_url("cmm::cmmCodeFind.xfdl");
            obj.set_text("");
            obj.getSetter("CodeFindName").set("DAX_CFDEPT");
            obj.set_enable("false");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("staCD_APPROVAL","staCD_CORP_bg:-1","staCD_CORP_bg:-30","80","30",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("11");
            obj.set_cssclass("sta_WF_tablelabel");
            obj.set_text("결재상태");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("staCD_APPROVAL_bg","staCD_APPROVAL:-1","34","262","30",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("12");
            obj.set_cssclass("sta_WF_tablebg");
            obj.set_text("");
            this.divSearch.addChild(obj.name, obj);

            obj = new Edit("edtDS_APPROVAL","staCD_APPROVAL:5","staCD_APPROVAL:-25","106","20",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("23");
            obj.set_enable("false");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("staCD_TUITION","staYY_TUITION_bg:-1","staCD_APPROVAL:-1","80","30",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("9");
            obj.set_text("분기");
            obj.set_cssclass("sta_WF_tablelabel");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("staCD_TUITION_bg","staCD_TUITION:-1","63","262","30",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("10");
            obj.set_cssclass("sta_WF_tablebg");
            obj.set_text("");
            this.divSearch.addChild(obj.name, obj);

            obj = new Combo("cboCD_TUITION","staCD_TUITION:5","staCD_TUITION:-25","106","19",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("20");
            obj.set_innerdataset("dsCD_TUITION");
            obj.set_codecolumn("CD_CODE");
            obj.set_datacolumn("DS_CODE");
            obj.set_enable("false");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("staDS_EMPTY1","staID_SABUN_bg:-1","staCD_TUITION:-1","80","30",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("13");
            obj.set_cssclass("sta_WF_tablelabel");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("staDS_EMPTY1_bg","staDS_EMPTY1:-1","92","262","30",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("14");
            obj.set_cssclass("sta_WF_tablebg");
            obj.set_text("");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("staDS_EMPTY2","staCD_DEPT_bg:-1","staCD_DEPT_bg:-30","80","30",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("21");
            obj.set_cssclass("sta_WF_tablelabel");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("staDS_EMPTY2_bg","staDS_EMPTY2:-1","staDS_EMPTY2:-30","262","30",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("22");
            obj.set_cssclass("sta_WF_tablebg");
            obj.set_text("");
            this.divSearch.addChild(obj.name, obj);

            obj = new Button("btnCANCLE","46.82%",null,"70","27",null,"10",null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_text("취소");
            this.addChild(obj.name, obj);

            obj = new TextArea("txt00","17",null,null,"19","0","btnCANCLE:5",null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_value("※ 수혜자녀의 정보가 없는경우 【 인사정보변경신청 】을 통하여 가족을 신청하여 주시기 바랍니다. ");
            obj.set_readonly("true");
            obj.set_background("transparent");
            obj.set_border("0px none transparent,0px none,0px none");
            this.addChild(obj.name, obj);

            obj = new Div("divData","0","divSearch:4",null,null,"0","txt00:5",null,null,null,null,this);
            obj.set_taborder("3");
            this.addChild(obj.name, obj);

            obj = new Static("sta_TITLE_L","0","10","150","18",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("1");
            obj.set_text("수혜 자녀 인적사항");
            obj.set_cssclass("sta_TITLE_Bg");
            this.divData.addChild(obj.name, obj);

            obj = new Grid("objGrid","0","sta_TITLE_L:9",null,null,"0","0",null,null,null,null,this.divData.form);
            obj.set_taborder("0");
            obj._setContents("");
            this.divData.addChild(obj.name, obj);

            obj = new Button("btnADD",null,"0","60","30","200",null,null,null,null,null,this.divData.form);
            obj.set_taborder("2");
            obj.set_text("행추가");
            this.divData.addChild(obj.name, obj);

            obj = new Button("btnDEL",null,"0","60","30","133",null,null,null,null,null,this.divData.form);
            obj.set_taborder("3");
            obj.set_text("행삭제");
            this.divData.addChild(obj.name, obj);

            obj = new Button("btnSAVE",null,"0","60","30","67",null,null,null,null,null,this.divData.form);
            obj.set_taborder("5");
            obj.set_text("저장");
            this.divData.addChild(obj.name, obj);

            obj = new Button("btnSUBMIT",null,"0","60","30","1",null,null,null,null,null,this.divData.form);
            obj.set_taborder("4");
            obj.set_text("승인요청");
            this.divData.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this
            obj = new Layout("default","",this._adjust_width,this._adjust_height,this,function(p){});
            this.addLayout(obj.name, obj);
            
            // BindItem Information
            obj = new BindItem("item0","divSearch.form.ccfID_SABUN.form.CDTextBox","value","dsSearch","ID_SABUN");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item1","divSearch.form.ccfID_SABUN.form.DSTextBox","value","dsSearch","DS_HNAME");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item2","divSearch.form.ccfCD_DEPT.form.CDTextBox","value","dsSearch","CD_DEPT");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item3","divSearch.form.ccfCD_DEPT.form.DSTextBox","value","dsSearch","DS_DEPT");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item4","divSearch.form.ccfCD_CORP.form.CDTextBox","value","dsSearch","CD_CORP");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item5","divSearch.form.ccfCD_CORP.form.DSTextBox","value","dsSearch","DS_CORP");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item6","divSearch.form.ccfYY_TUITION.form.TextBox","value","dsSearch","YY_TUITION");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item7","divSearch.form.cboCD_TUITION","value","dsSearch","CD_TUITION");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item8","divSearch.form.edtDS_APPROVAL","value","dsSearch","DS_APPROVAL");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item9","divSearch.form.edtID_PERSON","value","dsSearch","ID_PERSON");
            this.addChild(obj.name, obj);
            obj.bind();
            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {
            this._addPreloadList("fdl","cmm::cmmCodeFind.xfdl");
            this._addPreloadList("fdl","cmm::cmmCalYY.xfdl");
        };
        
        // User Script
        this.registerScript("DAB_TUITION_REQUEST_DLG.xfdl", function() {
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
        	// 그리드영역
        	this.dxGrid = this.divData.form.objGrid;

        	// 검색영역
        	this.ccfCD_CORP     = this.divSearch.form.ccfCD_CORP;		// 법인코드
        	this.ccfYY_TUITION  = this.divSearch.form.ccfYY_TUITION;	// 년도
        	this.ccfID_SABUN    = this.divSearch.form.ccfID_SABUN;		// 성명
        	this.edtID_PERSON   = this.divSearch.form.edtID_PERSON;		// ID_PERSON
        	this.ccfCD_DEPT     = this.divSearch.form.ccfCD_DEPT;		// 부서
        	this.edtDS_APPROVAL = this.divSearch.form.edtDS_APPROVAL;	// 결재상태
        	this.cboCD_TUITION  = this.divSearch.form.cboCD_TUITION;	// 분기
        }

        /************************************************************************
         * 이벤트 설정
         ************************************************************************/
        this.fnSetEvent = function() {
        	// 그리그영역
        	this.gfnGridInit(this.dxGrid, this.dsList, "DA", "DAB_TUITION_REQUEST_DLG");
        	this.dxGrid.BeforeUserDataSetParam = "fnGridBeforeUserDataSetParam";
         	this.dxGrid.AfterCDTextChanged     = "fnGridAfterCDTextChanged";
         	this.dxGrid.AfterEdit              = "fnGridAfterEdit";
        	this.dxGrid.ExpandUp               = "fnGridExpandUp";

        	// 검색 영역
        	this.ccfCD_CORP.BeforeUserDataSetParam  = "fnBeforeUserDataSetParam";	// 법인코드
        	this.ccfCD_CORP.AfterCDTextChanged      = "fnAfterCDTextChanged";
        	this.ccfID_SABUN.BeforeUserDataSetParam = "fnBeforeUserDataSetParam";	// 성명
        	this.ccfID_SABUN.AfterCDTextChanged     = "fnAfterCDTextChanged";
        	this.ccfCD_DEPT.BeforeUserDataSetParam  = "fnBeforeUserDataSetParam";	// 부서
        	this.ccfCD_DEPT.AfterCDTextChanged      = "fnAfterCDTextChanged";
        };

        /************************************************************************
         * 파라미터 설정
         ************************************************************************/
        this.fnSetParameter = function() {
        	// 학자금기간등록 기간 조회
        	this.dsPeriodCheck = new Dataset();
        	this.dsPeriodCheck.addColumn("YY_TUITION", "string");
        	this.dsPeriodCheck.addColumn("CD_TUITION", "string");
        	this.dsPeriodCheck.addColumn("GR_SEARCH", "string");
        	this.dsPeriodCheck.addColumn("TY_AUTH", "string");
        	this.dsPeriodCheck.addColumn("GR_CORP", "string");
        	this.dsPeriodCheck.addColumn("GR_DEPT", "string");
        	this.dsPeriodCheck.addColumn("ID_USER", "string");

        	// 수혜 자녀 인적사항 조회
        	this.dsSelect = new Dataset();
        	this.dsSelect.addColumn("ID_PERSON", "int");
        	this.dsSelect.addColumn("YY_TUITION", "string");
        	this.dsSelect.addColumn("CD_TUITION", "string");
        	this.dsSelect.addColumn("CD_CORP", "string");
        	this.dsSelect.addColumn("ID_SABUN", "string");
        	this.dsSelect.addColumn("GR_SEARCH", "string");
        	this.dsSelect.addColumn("GR_CORP", "string");
        	this.dsSelect.addColumn("GR_DEPT", "string");
        	this.dsSelect.addColumn("ID_USER", "string");

        	// 수혜 자녀 인적사항 저장
        	this.dsSave = new Dataset();
        	this.dsSave.addColumn("TY_SAVE", "string");
        	this.dsSave.addColumn("ID_PERSON", "int");
        	this.dsSave.addColumn("YY_TUITION", "string");
        	this.dsSave.addColumn("CD_TUITION", "string");
        	this.dsSave.addColumn("NO_SEQ", "int");
        	this.dsSave.addColumn("CD_CORP", "string");
        	this.dsSave.addColumn("ID_SABUN", "string");
        	this.dsSave.addColumn("CD_DEPT", "string");
        	this.dsSave.addColumn("DT_REQUEST", "string");
        	this.dsSave.addColumn("CD_FAMILY", "string");
        	this.dsSave.addColumn("ID_RESIDENT", "string");
        	this.dsSave.addColumn("DT_BIRTH", "string");
        	this.dsSave.addColumn("DS_FAM_HNAME", "string");
        	this.dsSave.addColumn("CD_SCHOLARSHIP", "string");
        	this.dsSave.addColumn("DS_SCHOOL", "string");
        	this.dsSave.addColumn("DS_SCHOOL_GRADE", "string");
        	this.dsSave.addColumn("DS_SCHOOL_SEMESTER", "string");
        	this.dsSave.addColumn("DS_MAJOR", "string");
        	this.dsSave.addColumn("AM_TUITION", "bigdecimal");
        	this.dsSave.addColumn("DS_REMARK", "string");
        	this.dsSave.addColumn("CD_APPROVAL", "string");
        	this.dsSave.addColumn("GR_SEARCH", "string");
        	this.dsSave.addColumn("GR_CORP", "string");
        	this.dsSave.addColumn("GR_DEPT", "string");
        	this.dsSave.addColumn("ID_USER", "string");
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
        	this.dsPeriodCheck.clearData();
        	this.dsPeriodCheck.addRow();

        	this.dsPeriodCheck.setColumn(0, "YY_TUITION", this.getOwnerFrame().YY_TUITION);
        	this.dsPeriodCheck.setColumn(0, "CD_TUITION", this.getOwnerFrame().CD_TUITION);
        	this.dsPeriodCheck.setColumn(0, "GR_SEARCH" , this.FormInfo.GR_SEARCH);
        	this.dsPeriodCheck.setColumn(0, "TY_AUTH"   , this.FormInfo.TY_AUTH);
        	this.dsPeriodCheck.setColumn(0, "GR_CORP"   , this.AuthClient.CD_CORP);
        	//this.dsPeriodCheck.setColumn(0, "GR_DEPT"   , this.AuthClient.CD_DEPT);
        	//this.dsPeriodCheck.setColumn(0, "ID_USER"   , this.AuthClient.ID_USER);
        	this.dsPeriodCheck.setColumn(0, "GR_DEPT"   , this.getOwnerFrame().CD_DEPT);
        	this.dsPeriodCheck.setColumn(0, "ID_USER"   , this.getOwnerFrame().ID_SABUN);

         	var strSvcId    = "periodCheck";
        	var strSvcType  = "select";
        	var inProc		= "_dsProc";
        	var inData      = "periodCheck=dsPeriodCheck";
        	var outData     = "dsSearch=periodCheck0";
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

        /************************************************************************
         * 컨트롤 이벤트
         ************************************************************************/
        /*
         * 조회 버튼
         */
        this.fnSelect = function() {
        	if (this.dsSearch.rowcount == 0) return;

        	this.gfnUpdateToDataset();

        	this.dsSelect.clearData();
        	this.dsSelect.addRow();
        	this.dsSelect.setColumn(0, "ID_PERSON" , this.dsSearch.getColumn(0, "ID_PERSON"));
        	this.dsSelect.setColumn(0, "YY_TUITION", this.dsSearch.getColumn(0, "YY_TUITION"));
        	this.dsSelect.setColumn(0, "CD_TUITION", this.dsSearch.getColumn(0, "CD_TUITION"));
        	this.dsSelect.setColumn(0, "CD_CORP"   , this.dsSearch.getColumn(0, "CD_CORP"));
        	this.dsSelect.setColumn(0, "ID_SABUN"  , this.dsSearch.getColumn(0, "ID_SABUN"));
        	this.dsSelect.setColumn(0, "GR_SEARCH" , this.FormInfo.GR_SEARCH);
        	this.dsSelect.setColumn(0, "GR_CORP"   , this.AuthClient.CD_CORP);
        	this.dsSelect.setColumn(0, "GR_DEPT"   , this.AuthClient.CD_DEPT);
        	this.dsSelect.setColumn(0, "ID_USER"   , this.AuthClient.ID_USER);

         	var strSvcId    = "select";
        	var strSvcType  = "select";
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
         * 추가 버튼
         */
        this.fnAdd = function() {
        	var nrow = this.gfnGridAdd(this.dxGrid);
        	this.dsList.setColumn(nrow, "TY_REQUEST" , "M");	// 승인유형	A:일괄신청|M:직접신청
        	this.dsList.setColumn(nrow, "CD_APPROVAL", "00");	// 승인상태	00:작성중|01:요청|02:완료|:03:반려
        }

        /*
         * 삭제 버튼
         */
        this.fnDel = function() {
        	var rows = this.dxGrid.getSelectedDatasetRows();
        	if (rows.length > 0) {
        		for (var i = 0; i < rows.length; i++) {
        			var nrow = rows[i];
        			if (this.dsList.getColumn(nrow, "TY_REQUEST") == "A") {
        				this.gfnAlert("일괄신청된 학자금신청은 삭제할 수 없습니다.");
        				return;
        			}

        			if (this.dsList.getColumn(nrow, "CD_APPROVAL") == "01") {
        				this.gfnAlert("승인요청된 학자금신청은 삭제할 수 없습니다.");
        				return;
        			}

        			if (this.dsList.getColumn(nrow, "CD_APPROVAL") == "02") {
        				this.gfnAlert("승인완료된 학자금신청은 삭제할 수 없습니다.");
        				return;
        			}

        			if (this.gfnNvl(this.dsList.getColumn(nrow, "CNT_FILE"), "첨부(0)") != "첨부(0)") {
        				this.gfnAlert("첨부파일이 존재하여 삭제할 수 없습니다.");
        				return;
        			}
        		}
        	}
        	this.gfnGridDel(this.dxGrid);
        }

        this.fnSave = function() {
        	// 그리드 필수항목 체크
        	if (!this.gfnGridValidate(this.dxGrid)) return;

        	this.dxGrid.updateToDataset();
        	this.dsSave.clearData();

        	for (var i = 0; i < this.dsList.rowcount; i++) {
        		var flag = this.gfnGetFlag(this.dsList, i);
        		switch(flag) {
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

        	if (this.dsSave.rowcount == 0) {
        		this.gfnAlert("변경된 학자금신청이 없습니다.");
        		return;
        	}

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

        }

        /*
         * 출력 버튼
         */
        this.fnPrint = function() {

        }

        /************************************************************************
         * Validate
         ************************************************************************/
        this.fnSelectValid = function(){
        	if (this.gfnIsNull(this.ccfYY_TUITION.form.TextBox.value)) {
        		this.fnValidCallback = function() {
        			this.ccfYY_TUITION.form.TextBox.setFocus();
        		}
        		this.gfnAlert("년도를 선택하세요!", "fnValidCallback");
        		return false;
        	}
        	return true;
        }

        /************************************************************************
         * 확장버튼 이벤트
         ************************************************************************/
        // 승인요청
        this.fnSubmit = function() {
        	var nICnt = this.dsList.findRow(this.ucFlag,"I");
        	var nUCnt = this.dsList.findRow(this.ucFlag,"U");
        	var nDCnt = this.dsList.findRow(this.ucFlag,"D");

        	if (nICnt > -1 || nUCnt > -1 || nDCnt > -1) {
        		this.gfnAlert("수정된 내역이 있습니다. 저장 후 작업하세요!");
        		return;
        	}

        	// 그리드 필수항목 체크
        	if (!this.gfnGridValidate(this.dxGrid)) return;

        	this.dxGrid.updateToDataset();
        	this.dsSave.clearData();

        	for (var i = 0; i < this.dsList.rowcount; i++) {
        		console.log('this.dsList.getColumn(nrow, "TY_REQUEST")', this.dsList.getColumn(i, "TY_REQUEST"));
        		if (this.dsList.getColumn(i, "TY_REQUEST") == "A") {
        			continue;
        		}

        		if (this.gfnNvl(this.dsList.getColumn(i, "CNT_FILE"), "첨부(0)") == "첨부(0)") {
        			this.gfnAlert("직접 학자금신청을 할 경우에는\n증빙자료가 반드시 첨부되어야 합니다.");
        			return;
        		}

        		var nrow = this.dsSave.addRow();
        		this.dsSave.setColumn(nrow, "TY_SAVE"           , "U");
        		this.dsSave.setColumn(nrow, "ID_PERSON"         , this.edtID_PERSON.value);
        		this.dsSave.setColumn(nrow, "YY_TUITION"        , this.ccfYY_TUITION.form.TextBox.value);
        		this.dsSave.setColumn(nrow, "CD_TUITION"        , this.cboCD_TUITION.value);
        		this.dsSave.setColumn(nrow, "NO_SEQ"            , this.dsList.getColumn(i, "NO_SEQ"));
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
        		this.dsSave.setColumn(nrow, "CD_APPROVAL"       , "01");
        		this.dsSave.setColumn(nrow, "GR_SEARCH"         , this.FormInfo.GR_SEARCH);
        		this.dsSave.setColumn(nrow, "GR_CORP"           , this.AuthClient.CD_CORP);
        		this.dsSave.setColumn(nrow, "GR_DEPT"           , this.AuthClient.CD_DEPT);
        		this.dsSave.setColumn(nrow, "ID_USER"           , this.AuthClient.ID_USER);
        	}

        	if (this.dsSave.rowcount == 0) {
        		this.gfnAlert("승인요청 대상 학자금신청이 없습니다.");
        		return;
        	}

        	var strSvcId    = "submit";
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

        /************************************************************************
         * 콜백 이벤트
         ************************************************************************/
        /*
         * 기본 콜백
         */
        this.fnCallback = function(svcID, errorCode, errorMsg) {
        	if (svcID == "periodCheck") {
        		if (this.dsSearch.rowcount == 0 || this.dsSearch.getColumn(0, "CLOSABLE") == "Y") {
        			this.fnPeriodCheckAfter = function() {
        				this.getParentContext().close(true);
        			}
        			this.gfnAlert("학자금 신청기간이 아닙니다.", "fnPeriodCheckAfter");
        		}

        		if (errorCode != 0) {
        			this.fnPeriodCheckAfter = function() {
        				this.getParentContext().close(true);
        			}
        			this.gfnAlert(errorMsg, "fnPeriodCheckAfter");
        		} else {
        			this.fnSelect();
        		}
        	} else if (svcID == "save") {
        		if (errorCode == 0) {
        			this.fnSaveAfter = function() {
        				this.fnSelect();
        			}
        			this.gfnAlert("저장되었습니다.", "fnSaveAfter");
        		} else {
        			this.gfnAlert(errorMsg);
        		}
        	} else if (svcID == "select") {
        		this.gfnGridAfterSelect(this.dxGrid);
        	} else if (svcID == "submit") {
        		if (errorCode == 0) {
        			this.fnSubmitAfter = function() {
        				this.fnSelect();
        			}
        			this.gfnAlert("제출되었습니다.", "fnSubmitAfter");
        		} else {
        			this.gfnAlert(errorMsg);
        		}
        	}
        }

        // 취소
        this.btnCANCLE_onclick = function(obj,e){
        	this.getParentContext().close(false);
        }

        // 첨부파일
        this.fnFileCallback = function(strID, val) {
        	// 파일개수를 다시 셋팅
        	this.dsList.set_enableevent(false);
        	this.dsList.setColumn(this.dsList.rowposition, "CNT_FILE", val.Cnt);
        	if (val.Cnt == 0) {
        		this.dsList.setColumn(this.dsList.rowposition, "CNT_FILE", "첨부(0)");
        	} else {
        		this.dsList.setColumn(this.dsList.rowposition, "CNT_FILE", "첨부(" + val.Cnt + ")");
        	}
        	this.dsList.set_enableevent(true);
        }

        this.fnClose = function() {

        }

        /************************************************************************
         * 코드파인드 이벤트
         ************************************************************************/
        this.fnBeforeUserDataSetParam = function(id, dsUserParam, nrow) {
        	if (id == "ccfCD_CORP") {	//법인
        		dsUserParam.setColumn(nrow, "CD_PREFIX", "ED");	//직위
        	} else if (id == "ccfID_SABUN") {
        		if (this.gfnIsNull(this.ccfCD_CORP.form.CDTextBox.value)) {
        			this.fnValidCallback = function() {
        				this.ccfCD_CORP.form.CDTextBox.setFocus();
        			}
        			this.gfnAlert("법인을 선택하세요!", "fnValidCallback");
        			return false;
        		}
        		dsUserParam.setColumn(nrow, "CD_DEPT"  , this.AuthClient.CD_DEPT);
        		dsUserParam.setColumn(nrow, "CD_CORP"  , this.gfnNvl(this.ccfCD_CORP.form.CDTextBox.value,"%"));
        		dsUserParam.setColumn(nrow, "GR_SEARCH", this.FormInfo.GR_SEARCH);
        		dsUserParam.setColumn(nrow, "YN_CORP"  , "N");
        		dsUserParam.setColumn(nrow, "TY_RETIRE", "%");
        	} else if (id == "ccfCD_DEPT") {
        		dsUserParam.setColumn(nrow, "GR_SEARCH", this.FormInfo.GR_SEARCH);
        		dsUserParam.setColumn(nrow, "CD_DEPT"  , this.gfnNvl(this.AuthClient.CD_DEPT));
        		dsUserParam.setColumn(nrow, "CD_CORP"  , this.gfnNvl(this.getOwnerFrame().CD_CORP, "%"));
        		dsUserParam.setColumn(nrow, "YN_DELETE", "N");
        	}
        	return true;
        }

        this.fnAfterCDTextChanged = function(id, codeFindData) {
        	var arr = codeFindData;
        	if (id == "ccfID_SABUN") {
         		if (arr.length > 0) {
        			var rowData = arr[0];
         			this.edtID_PERSON.set_value(rowData.ID_PERSON);
         			this.ccfCD_DEPT.form.CDTextBox.set_value(rowData.CD_DEPT);
         			this.ccfCD_DEPT.form.DSTextBox.set_value(rowData.DS_DEPT);

        			this.fnSelect();
         		} else {
         			this.edtID_PERSON.set_value("");
         			this.ccfCD_DEPT.form.CDTextBox.set_value("");
         			this.ccfCD_DEPT.form.DSTextBox.set_value("");
        		}
        	}
        }

        /************************************************************************
         * 그리드 이벤트
         ************************************************************************/
        this.fnGridBeforeUserDataSetParam = function(id, dsUserParam, nrow) {
         	if (id == "DAX_CFTUITION_CODEFIND") {	// 학자금자녀코드파인더
        		var sID_SABUN = this.ccfID_SABUN.form.CDTextBox.value;
        		var sID_PERSON = this.edtID_PERSON.value;
        		if (this.gfnIsNull(sID_SABUN) || this.gfnIsNull(sID_PERSON)) {
        			this.gfnAlert("성명을 먼저 입력하세요.");
        			return false;
        		}
         		dsUserParam.setColumn(nrow, "ID_PERSON", sID_PERSON);
        		dsUserParam.setColumn(nrow, "ID_SABUN" , sID_SABUN);
         	} else if (id == "DAX_CFTUITION_SCHOLARSHIP") {	// 학력구분
        		var sCD_TUITION = this.cboCD_TUITION.value;
        		if (this.gfnIsNull(sCD_TUITION)) {
        			this.gfnAlert("분기를 먼저 입력하세요.");
        			return false;
        		}
         		dsUserParam.setColumn(nrow, "CD_TUITION", sCD_TUITION);
        	}
        	return true;
        }

        this.fnGridAfterCDTextChanged = function(id, codeFindData) {
        	var arr = codeFindData;
        	if (id == "DAX_CFTUITION_CODEFIND") {
        		for (var i = 1; i < this.dsList.rowcount; i++) {
        			if (this.dsList.getColumn(i, "ID_RESIDENT") == arr[0]["ID_RESIDENT"]) {
        				this.gfnAlert(arr[0]["DS_HNAME"] + "의 학자금은 이미 신청된 상태입니다.");
        				this.fnDel();
        				this.dxGrid.selectCell(0, 0, true);
        				return;
        			}
        		}
        		this.dsList.setColumn(this.dsList.rowposition, "CD_SCHOLARSHIP", arr[0]["CD_SCHOLARSHIP"]);
        		this.dsList.setColumn(this.dsList.rowposition, "DS_SCHOLARSHIP", arr[0]["DS_SCHOLARSHIP"]);
        	}
        }

        this.fnGridAfterEdit = function(obj, e) {
        	if (e.columnid == "DS_FAM_HNAME") {
        		if (e.oldvalue != e.newvalue && this.gfnIsNull(e.newvalue)) {
        			this.dsList.setColumn(this.dsList.rowposition, "CD_SCHOLARSHIP", "");
        			this.dsList.setColumn(this.dsList.rowposition, "DS_SCHOLARSHIP", "");
        		}
        	} else if (this.dsList.getColumn(this.dsList.rowposition, "CD_SCHOLARSHIP") == "04" && e.columnid == "AM_TUITION") {
        		if (Number(e.newvalue) > 5000000) {
        			this.gfnAlert("대학생의 학자금은 5,000,000원을 넘을 수 없습니다.");
        			this.dsList.setColumn(this.dsList.rowposition, "AM_TUITION", e.oldvalue);
        		}
        	}
        }

        this.fnGridExpandUp = function(obj, e) {
        	var colnm = this.gfnGridGetBindColumnNameByIndex(obj, e.cell);
        	if (colnm == "CNT_FILE") {
        		// 최초 작성시엔 NO_SEQ가 없기 때문에 저장 후에 파일 첨부를 진행하여야 함.
        		// CD_DIR에 넣어줄 값이 없기에 저장 후 진행!
        		if (this.gfnGetFlag(this.dsList, e.row) == "I") {
        			this.gfnAlert("저장 후 파일첨부가 가능합니다.");
        			return false;
        		}

        		var fileManager = {};
        		fileManager.CD_GUBUN = "DA08";
        		fileManager.CD_DIR = [this.dsList.getColumn(e.row, "YY_TUITION"), this.dsList.getColumn(e.row, "CD_TUITION"), this.dsList.getColumn(e.row, "ID_PERSON")];
        		fileManager.CD_REF = [this.dsList.getColumn(e.row, "ID_PERSON"), this.dsList.getColumn(e.row, "NO_SEQ")];
        		fileManager.IS_READONLY = false;

        		this.gfnFileManager(fileManager, "fnFileCallback");
        	}
        }

        /************************************************************************
         * 기타 이벤트
         ************************************************************************/

        /************************************************************************
         * 기타 함수
         ************************************************************************/

        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.form_onload,this);
            this.divSearch.form.staCD_CORP_bg.addEventHandler("onclick",this.sta23_onclick,this);
            this.divSearch.form.staYY_TUITION_bg.addEventHandler("onclick",this.sta23_onclick,this);
            this.divSearch.form.staID_SABUN_bg.addEventHandler("onclick",this.sta23_onclick,this);
            this.divSearch.form.staCD_DEPT_bg.addEventHandler("onclick",this.sta23_onclick,this);
            this.divSearch.form.staCD_APPROVAL_bg.addEventHandler("onclick",this.sta23_onclick,this);
            this.divSearch.form.staCD_TUITION_bg.addEventHandler("onclick",this.sta23_onclick,this);
            this.divSearch.form.staDS_EMPTY1_bg.addEventHandler("onclick",this.sta23_onclick,this);
            this.divSearch.form.staDS_EMPTY2_bg.addEventHandler("onclick",this.sta23_onclick,this);
            this.btnCANCLE.addEventHandler("onclick",this.btnCANCLE_onclick,this);
            this.divData.form.objGrid.addEventHandler("oncelldblclick",this.divData_objGrid_oncelldblclick,this);
            this.divData.form.btnADD.addEventHandler("onclick",this.fnAdd,this);
            this.divData.form.btnDEL.addEventHandler("onclick",this.fnDel,this);
            this.divData.form.btnSAVE.addEventHandler("onclick",this.fnSave,this);
            this.divData.form.btnSUBMIT.addEventHandler("onclick",this.fnSubmit,this);
        };
        this.loadIncludeScript("DAB_TUITION_REQUEST_DLG.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
