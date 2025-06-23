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
            this.set_titletext("개인정보변경 승인");
            if (Form == this.constructor)
            {
                this._setFormPosition(1280,720);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("dsList", this);
            obj._setContents("");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsAddrList", this);
            obj._setContents("");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsFmyList", this);
            obj._setContents("");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsLicList", this);
            obj._setContents("");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsSchList", this);
            obj._setContents("");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsCrrList", this);
            obj._setContents("");
            this.addChild(obj.name, obj);


            obj = new Dataset("_dsProc", this);
            obj._setContents("<ColumnInfo><Column id=\"TARGET\" type=\"STRING\" size=\"256\"/><Column id=\"SP\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"TARGET\">selectAddr</Col><Col id=\"SP\">DAAPR_ADDRESS_INFO_SELECT</Col></Row><Row><Col id=\"TARGET\">selectFmy</Col><Col id=\"SP\">DAAPR_FAM_INFO_SELECT</Col></Row><Row><Col id=\"TARGET\">selectSch</Col><Col id=\"SP\">DAAPR_SCHOOL_INFO_SELECT</Col></Row><Row><Col id=\"TARGET\">selectLic</Col><Col id=\"SP\">DAAPR_LIC_INFO_SELECT</Col></Row><Row><Col id=\"TARGET\">selectCrr</Col><Col id=\"SP\">DAAPR_CAREER_INFO_SELECT</Col></Row><Row><Col id=\"TARGET\">update</Col><Col id=\"SP\">DAAPR_BASEINFO_INFO_UPDATE</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsTY_STATUS", this);
            obj._setContents("<ColumnInfo><Column id=\"CODE\" type=\"STRING\" size=\"256\"/><Column id=\"VALUE\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"CODE\">01</Col><Col id=\"VALUE\">결재중</Col></Row><Row><Col id=\"CODE\">02</Col><Col id=\"VALUE\">결재완료</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsSearch", this);
            obj._setContents("<ColumnInfo><Column id=\"DT_ASK_FR\" type=\"STRING\" size=\"256\"/><Column id=\"DT_ASK_TO\" type=\"STRING\" size=\"256\"/><Column id=\"TY_STATUS\" type=\"STRING\" size=\"256\"/><Column id=\"CD_CORP\" type=\"STRING\" size=\"256\"/><Column id=\"DS_CORP\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"TY_STATUS\">1</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsTY_STATUS_org", this);
            obj._setContents("<ColumnInfo><Column id=\"CODE\" type=\"STRING\" size=\"256\"/><Column id=\"VALUE\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"CODE\">1</Col><Col id=\"VALUE\">요청</Col></Row><Row><Col id=\"CODE\">7</Col><Col id=\"VALUE\">승인완료</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new FileDownTransfer("FileDownTransfer00", this);
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Div("divSearch","0","0",null,"46.0","0",null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_cssclass("div_SEARCH_Bg");
            obj.set_text("");
            this.addChild(obj.name, obj);

            obj = new Static("ccfCorpCD_CORP","0.0","10.0","92.0","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("7");
            obj.set_text("법인");
            obj.set_cssclass("sta_WF_SchLabelE");
            this.divSearch.addChild(obj.name, obj);

            obj = new Div("ccfCD_CORP","ccfCorpCD_CORP:0.0","10.0","230","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.getSetter("CDTextWidth").set("50");
            obj.set_taborder("8");
            obj.set_url("cmm::cmmCodeFind.xfdl");
            obj.getSetter("onitemchanged").set("fnSearchInit");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("staTY_CHAIYONG","ccfCD_CORP:0.0","10.0","92.0","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("5");
            obj.set_text("결재상태");
            obj.set_cssclass("sta_WF_SchLabel");
            this.divSearch.addChild(obj.name, obj);

            obj = new Combo("ccboTY_STATUS","staTY_CHAIYONG:0.0","10.0","100","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("6");
            obj.set_innerdataset("dsTY_STATUS");
            obj.set_datacolumn("VALUE");
            obj.set_codecolumn("CODE");
            obj.set_text("");
            obj.set_value("01");
            obj.set_index("-1");
            this.divSearch.addChild(obj.name, obj);

            obj = new Edit("txtID_PERSON","ccboTY_STATUS:0.0","10.0","150","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("0");
            obj.set_visible("false");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("staDT_ORD_TO","txtID_PERSON:0.0","10.0","30.0","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("1");
            obj.set_text("~");
            obj.set_visible("false");
            obj.set_cssclass("sta_WF_AC");
            this.divSearch.addChild(obj.name, obj);

            obj = new Calendar("calDtToAppr","staDT_ORD_TO:0.0","10.0","105","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("2");
            obj.set_dateformat("yyyy-MM-dd");
            obj.set_editformat("yyyyMMdd");
            obj.set_autoselect("true");
            obj.set_visible("false");
            this.divSearch.addChild(obj.name, obj);

            obj = new Calendar("calDtFromAppr","calDtToAppr:0.0","10.0","105","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("3");
            obj.set_dateformat("yyyy-MM-dd");
            obj.set_editformat("yyyyMMdd");
            obj.set_autoselect("true");
            obj.set_visible("false");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("staDT_ORD_FR","calDtFromAppr:0.0","10.0","92.0","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("4");
            obj.set_text("요청기간");
            obj.set_textDecoration("none");
            obj.set_visible("false");
            obj.set_cssclass("sta_WF_SchLabel");
            this.divSearch.addChild(obj.name, obj);

            obj = new Div("divData","0","divSearch:10",null,null,"0","0",null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_cssclass("div_DATA_Bg");
            obj.set_text("");
            this.addChild(obj.name, obj);

            obj = new Tab("tabData","0","0",null,null,"0","0",null,null,null,null,this.divData.form);
            obj.set_taborder("0");
            obj.set_tabindex("0");
            this.divData.addChild(obj.name, obj);

            obj = new Tabpage("tab1",this.divData.form.tabData);
            obj.set_text("주소");
            this.divData.form.tabData.addChild(obj.name, obj);

            obj = new Static("staGridAddr","4","0","50%","25",null,null,null,null,null,null,this.divData.form.tabData.tab1.form);
            obj.set_taborder("3");
            obj.set_text("변경정보");
            obj.set_cssclass("sta_TITLE_Bg");
            obj.set_textDecoration("none");
            this.divData.form.tabData.tab1.addChild(obj.name, obj);

            obj = new Grid("objGridAddr","0","staGridAddr:5",null,"95%","0",null,null,null,null,null,this.divData.form.tabData.tab1.form);
            obj.set_taborder("0");
            obj.set_visible("true");
            obj._setContents("");
            this.divData.form.tabData.tab1.addChild(obj.name, obj);

            obj = new Tabpage("tab2",this.divData.form.tabData);
            obj.set_text("가족");
            this.divData.form.tabData.addChild(obj.name, obj);

            obj = new Static("staGridFmy","4","0","50%","25",null,null,null,null,null,null,this.divData.form.tabData.tab2.form);
            obj.set_taborder("78");
            obj.set_text("변경정보");
            obj.set_cssclass("sta_TITLE_Bg");
            obj.set_textDecoration("none");
            this.divData.form.tabData.tab2.addChild(obj.name, obj);

            obj = new Grid("objGridFmy","0","staGridFmy:5",null,null,"0","0",null,null,null,null,this.divData.form.tabData.tab2.form);
            obj.set_taborder("0");
            obj._setContents("");
            this.divData.form.tabData.tab2.addChild(obj.name, obj);

            obj = new Tabpage("tab3",this.divData.form.tabData);
            obj.set_text("학력");
            this.divData.form.tabData.addChild(obj.name, obj);

            obj = new Static("staGridSch","4","0","50%","25",null,null,null,null,null,null,this.divData.form.tabData.tab3.form);
            obj.set_taborder("78");
            obj.set_text("변경정보");
            obj.set_cssclass("sta_TITLE_Bg");
            obj.set_textDecoration("none");
            this.divData.form.tabData.tab3.addChild(obj.name, obj);

            obj = new Grid("objGridSch","0","staGridSch:5",null,null,"0","0",null,null,null,null,this.divData.form.tabData.tab3.form);
            obj.set_taborder("0");
            obj._setContents("");
            this.divData.form.tabData.tab3.addChild(obj.name, obj);

            obj = new Tabpage("tab4",this.divData.form.tabData);
            obj.set_text("자격");
            this.divData.form.tabData.addChild(obj.name, obj);

            obj = new Static("staGridLic","4","0","50%","25",null,null,null,null,null,null,this.divData.form.tabData.tab4.form);
            obj.set_taborder("78");
            obj.set_text("변경정보");
            obj.set_cssclass("sta_TITLE_Bg");
            obj.set_textDecoration("none");
            this.divData.form.tabData.tab4.addChild(obj.name, obj);

            obj = new Grid("objGridLic","0","staGridLic:5",null,null,"0","0",null,null,null,null,this.divData.form.tabData.tab4.form);
            obj.set_taborder("0");
            obj._setContents("");
            this.divData.form.tabData.tab4.addChild(obj.name, obj);

            obj = new Tabpage("tab5",this.divData.form.tabData);
            obj.set_text("경력");
            this.divData.form.tabData.addChild(obj.name, obj);

            obj = new Static("staGridCrr","4","0","50%","25",null,null,null,null,null,null,this.divData.form.tabData.tab5.form);
            obj.set_taborder("78");
            obj.set_text("변경정보");
            obj.set_cssclass("sta_TITLE_Bg");
            obj.set_textDecoration("none");
            this.divData.form.tabData.tab5.addChild(obj.name, obj);

            obj = new Grid("objGridCrr","0","staGridCrr:5",null,null,"0","0",null,null,null,null,this.divData.form.tabData.tab5.form);
            obj.set_taborder("0");
            obj._setContents("");
            this.divData.form.tabData.tab5.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this
            obj = new Layout("default","",this._adjust_width,this._adjust_height,this,function(p){});
            this.addLayout(obj.name, obj);
            
            // BindItem Information
            obj = new BindItem("item0","divSearch.form.calDtFromAppr","value","dsSearch","DT_ASK_FR");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item1","divSearch.form.calDtToAppr","value","dsSearch","DT_ASK_TO");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item2","divSearch.form.ccboTY_STATUS","value","dsSearch","TY_STATUS");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item3","divSearch.form.ccfCD_CORP.form.CDTextBox","value","dsSearch","CD_CORP");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item4","divSearch.form.ccfCD_CORP.form.DSTextBox","value","dsSearch","DS_CORP");
            this.addChild(obj.name, obj);
            obj.bind();
            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {
            this._addPreloadList("fdl","cmm::cmmCodeFind.xfdl");
        };
        
        // User Script
        this.registerScript("DAA_PERSONAL_INFO.xfdl", function() {
        this.objApp = this.gfnGetApplication();
        this.postTabIndex = 0;
        this.aTabName = ["Addr", "Fmy", "Sch", "Lic", "Crr"];	// 주소,가족,학력,자격,경력

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

        	this.fnReset();
        };

        /************************************************************************
         * 버튼 설정 : 화면(Tab) 전환시 마다 호출
         ************************************************************************/
        this.fnSetButton = function() {
        	this.FormBtns.Save.set_enable(false);
        	this.FormBtns.Add.set_enable(false);
        	this.FormBtns.Del.set_enable(false);
        	this.FormBtns.Reset.set_enable(true);
        };

        /************************************************************************
         * 확장 버튼 : 화면별 버튼 설정 ID, function 연결 (화면버튼관리)
         ************************************************************************/
        this.fnSetExtendButton = function() {
        	this.btnApproval = this.gfnFormButtonAdd("btnApproval", "fnApproval", "승인");
        	this.btnReject = this.gfnFormButtonAdd("btnReject", "fnReject", "반려");
        };

        /************************************************************************
         * 변수 선언
         ************************************************************************/
        this.fnSetVariable = function() {

        	//this.ccfID_SABUN = this.divSearch.form.ccfID_SABUN;         // 사번
        	this.ccfCD_CORP = this.divSearch.form.ccfCD_CORP;			// 법인코드
        	this.calDtFromAppr = this.divSearch.form.calDtFromAppr;     // 기간 from
            this.calDtToAppr = this.divSearch.form.calDtToAppr;         // 기간 to
            this.ccboTY_STATUS = this.divSearch.form.ccboTY_STATUS;

        	this.tabData = this.divData.form.tabData;

        	// 그리드변수 세팅
        	this.dxGridAddr = this.divData.form.tabData.tab1.form.objGridAddr;  	// 주소
        	this.dxGridFmy = this.divData.form.tabData.tab2.form.objGridFmy;		// 가족
        	this.dxGridSch = this.divData.form.tabData.tab3.form.objGridSch; 		// 학력
        	this.dxGridLic = this.divData.form.tabData.tab4.form.objGridLic; 		// 자격
        	this.dxGridCrr = this.divData.form.tabData.tab5.form.objGridCrr; 		// 경력
        }

        /************************************************************************
         * 이벤트 설정
         ************************************************************************/
        this.fnSetEvent = function() {
        /*
        	this.ccfID_SABUN.CodeFindName = "DAX_CFBASEINFO_ALL"; //성명 코드파인드
        	this.ccfID_SABUN.BeforeUserDataSetParam = "fnBeforeUserDataSetParam";
        	this.ccfID_SABUN.AfterCDTextChanged = "codefind_AfterCDTextChanged";
        */

        	this.ccfCD_CORP.CodeFindName = "DAX_CFCORP";  //법인코드

        	this.dsSearch.addEventHandler("onvaluechanged", this.dsSearch_onvaluechanged, this);

        	// 그리드 세팅
        	this.fnSetGridCellProperty(0);	// 로딩시 주소먼저
        }

        // 그리드 세팅
        this.fnSetGridCellProperty = function (nTabIdx){
        	var objJson = this.fnGetTabInfo(nTabIdx);
        	var objDS = objJson.objDsList;
        	var objGrd = objJson.objGrid;

        	switch(nTabIdx){
        	case 0:	// 1 주소 그리드 세팅
        		this.gfnGridInit(objGrd, objDS, "DA", "DAA_ADDRESS_INFO");	// 만들어야함
        		objGrd.ExpandUp = "fnGrid_ExpandUp";
        		break;
        	case 1:	// 가족
        		this.gfnGridInit(objGrd, objDS, "DA", "DAA_FAMILY_INFO");
        		objGrd.ExpandUp = "fnGrid_ExpandUp";
        		break;
        	case 2:	// 학력
        		this.gfnGridInit(objGrd, objDS, "DA", "DAA_SCHOOLCAREER_INFO");
        		objGrd.ExpandUp = "fnGrid_ExpandUp";
        		break;
        	case 3:	// 자격
        		this.gfnGridInit(objGrd, objDS, "DA", "DAA_LICENSE_INFO");
        		objGrd.ExpandUp = "fnGrid_ExpandUp";
        		break;
        	case 4:	// 경력
        		this.gfnGridInit(objGrd, objDS, "DA", "DAA_CAREER_INFO");
        		objGrd.ExpandUp = "fnGrid_ExpandUp";
        		break;
        	}
        }

        this.fnCurrentGrid = function (){
        	var tabIdx = this.tabData.tabindex;
        	return this.fnGetTabInfo(tabIdx);
        }

        this.fnGetTabInfo = function (nIdx){
        	var objGrid, objDsList, objDsSave;
        	switch(nIdx){
        		case 0:	// 주소
        			objGrid = this.dxGridAddr;
        			objDsList = this.dsAddrList;
        			objDsSave = this.dsAddrSave;
        			break;
        		case 1:	// 가족
        			objGrid = this.dxGridFmy;
        			objDsList = this.dsFmyList;
        			objDsSave = this.dsFmySave;
        			break;
        		case 2:	// 학력
        			objGrid = this.dxGridSch;
        			objDsList = this.dsSchList;
        			objDsSave = this.dsSchSave;
        			break;
        		case 3:	// 자격
        			objGrid = this.dxGridLic;
        			objDsList = this.dsLicList;
        			objDsSave = this.dsLicSave;
        			break;
        		case 4:	// 경력
        			objGrid = this.dxGridCrr;
        			objDsList = this.dsCrrList;
        			objDsSave = this.dsCrrSave;
        			break;
        	}
        	var objJson = {};
        	objJson.objGrid = objGrid;
        	objJson.objDsList = objDsList;
        	objJson.objDsSave = objDsSave;
        	return objJson;
        }

        /************************************************************************
         * 파라미터 설정
         ************************************************************************/
        this.fnSetParameter = function() {

        	this.dsSelect = new Dataset();
        	//this.dsSelect.addColumn("DT_ASK_FR", "string");  //PERSON ID
        	//this.dsSelect.addColumn("DT_ASK_TO", "string"); // 법인코드
        	this.dsSelect.addColumn("CD_CORP", "string");		// 법인코드
        	this.dsSelect.addColumn("TY_STATUS", "string");		// 상태

        	// 승인 / 반려
        	this.dsUpdate = new Dataset();
            this.dsUpdate.addColumn("TY_GUBUN","string");		// 요청구분 A :주소 F: 가족  S:학력  L:자격 C:경력
        	this.dsUpdate.addColumn("TY_STATUS","string");		// 결재상태 >> 2 :승인 3:반려
            this.dsUpdate.addColumn("CD_CORP","string");		// 법인코드
        	this.dsUpdate.addColumn("ID_PERSON","bigdecimal");	// 체크된 해당ROW ID_PERSON
        	this.dsUpdate.addColumn("NO_SEQ","bigdecimal");   	// 체크된 해당ROW NO_SEQ
        	this.dsUpdate.addColumn("ID_USER","string"); 		// 로그인ID
        /*
        	this.dsUpdate = new Dataset();
            this.dsUpdate.addColumn("TY_SAVE","string");	   //승인 : 7, 반려 : 9  ->  ( 결재전:0 / 결재중:1 / 결재완료:2 / 반려 및 취소:3 )
        	this.dsUpdate.addColumn("TY_GUBUN","string");
            this.dsUpdate.addColumn("NO_SEQ","bigdecimal");    //순번
        	this.dsUpdate.addColumn("NO_SEQ_ORG","bigdecimal");
        	this.dsUpdate.addColumn("CD_CORP","string");
            this.dsUpdate.addColumn("ID_PERSON","bigdecimal"); //PERSON ID
        	this.dsUpdate.addColumn("ID_USER","string");
        */

        }

        /************************************************************************
         * 컨트롤 이벤트
         ************************************************************************/
         /*
          *	조회 버튼
          */
        this.fnSelect = function() {

        	var nTabIdx = this.tabData.tabindex;
        	var sTabNm = this.aTabName[nTabIdx];

        	if (!this.fnSelectValidate()) return false;

        	var objJson = this.fnCurrentGrid();
        	this.gfnGridBeforeSelect(objJson.objGrid);

        	var objDs = objJson.objGrid.getBindDataset();

        	objDs.clearData();

        	this.dsSelect.clearData();
        	this.dsSelect.addRow();
        	this.dsSelect.setColumn(0, "CD_CORP" , this.dsSearch.getColumn(0, "CD_CORP"));
        	this.dsSelect.setColumn(0, "TY_STATUS", this.dsSearch.getColumn(0, "TY_STATUS"));

        	var strInData = "select" + sTabNm + "=dsSelect";
        	var strOutData = objDs.name + "=select" + sTabNm + "0";

        	var strSvcId    = "select";
        	var strSvcType  = "grid";
        	var inProc		= "_dsProc";
        	var inData      = strInData;
        	var outData     = strOutData;
        	var strArg      = "";
        	var callBackFnc = "fnCallback";
        	this.gfnTransaction( strSvcId , 	// transaction을 구분하기 위한 svc id값
        						strSvcType , 	// transaction을 요청할 구분
        						inProc,			// Procedure 정보 Dataset 이름
        						inData , 		// 입력값으로 보낼 dataset id , a=b형태로 실제이름과 입력이름을 매칭
        						outData , 		// 처리결과값으로 받을 dataset id, a=b형태로 실제이름과 입력이름을 매칭
        						strArg, 		// 입력값으로 보낼 arguments, strFormData="20120607"
        						callBackFnc); 	// 통신방법 정의 [생략가능]
        }

        // 승인/반려 처리
        this.fnUpdateApproval = function(sTyStatus) {
        	var nTabIdx = this.tabData.tabindex; // 0주소1가족2학력3자격4경력
        	var objJson = this.fnCurrentGrid();
        	var sTabNm = this.aTabName[nTabIdx];
        	var nRow = objJson.objGrid.currentrow;

        	//if (!this.gfnGridValidate(objJson.objGrid)) return;

        	objJson.objGrid.updateToDataset();

        	this.dsUpdate.clearData();

        	for (var i = 0; i < objJson.objDsList.rowcount; i++) {
        		var flag = objJson.objDsList.getColumn(i,"CHK");
        		if(flag == 1){
        			var nrow = this.dsUpdate.addRow();

        			var ID_PERSON = objJson.objDsList.getColumn(i, "ID_PERSON");
        			var CD_CORP = objJson.objDsList.getColumn(i, "CD_CORP");
        			var ID_SABUN = objJson.objDsList.getColumn(i, "ID_SABUN");
        			var NO_SEQ = objJson.objDsList.getColumn(i, "NO_SEQ");

        			// 요청구분 A :주소 F: 가족  S:학력  L:자격 C:경력
        			this.dsUpdate.setColumn(nrow,"TY_GUBUN", sTabNm.substring(0, 1));
        			this.dsUpdate.setColumn(nrow,"TY_STATUS", sTyStatus);	// 결재상태 >> 2 :승인 3:반려
        			this.dsUpdate.setColumn(nrow,"CD_CORP", CD_CORP);
        			this.dsUpdate.setColumn(nrow,"ID_PERSON", ID_PERSON);
        			this.dsUpdate.setColumn(nrow,"NO_SEQ", NO_SEQ);
        			this.dsUpdate.setColumn(nrow,"ID_USER", this.AuthClient.ID_USER);
        		}
        	}

          	if (this.dsUpdate.rowcount == 0 ) return;

        	var strSvcId    = "save";
        	var strSvcType  = "save";
        	var inProc		= "_dsProc";
        	var inData      = "update=dsUpdate";
        	var outData     = "";
        	var strArg      = "";
        	var callBackFnc = "fnCallback";
        	this.gfnTransaction( strSvcId , 	// transaction을 구분하기 위한 svc id값
        						strSvcType , 	// transaction을 요청할 구분
        						inProc,			// Procedure 정보 Dataset 이름
        						inData , 		// 입력값으로 보낼 dataset id , a=b형태로 실제이름과 입력이름을 매칭
        						outData , 		// 처리결과값으로 받을 dataset id, a=b형태로 실제이름과 입력이름을 매칭
        						strArg, 		// 입력갑스로 보낼 arguments, strFormData="20120607"
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


        }

        /*
         *	엑셀 버튼
         */
        this.fnExcel = function() {
        	var objJson = this.fnCurrentGrid();
        	this.gfnExcelExport(objJson.objGrid);
        	//this.gfnExcelExport(this.dxGrid);
        }

        /*
         *	출력 버튼
         */
        this.fnPrint = function() {
        };
        /*
         *	리셋 버튼
         */
        this.fnReset = function() {

        	this.tabData.set_tabindex(0);

            // 월의 시작일자와 마지막일자
        	var vToday = this.gfnGetDate();
        	this.dsSearch.setColumn(0, "DT_ASK_FR", this.gfnGetFirstDate(vToday));
        	this.dsSearch.setColumn(0, "DT_ASK_TO", this.gfnGetLastDate(vToday.substr(0,6)));
        	this.dsSearch.setColumn(0, "TY_STATUS", "01");

        	this.ccfCD_CORP.form.CDTextBox.set_value(this.AuthClient.CD_CORP);
        	this.ccfCD_CORP.form.DSTextBox.set_value(this.AuthClient.DS_CORP);

        	this.fnSearchInit();
        };

        /************************************************************************
         * Validate
         ************************************************************************/
        /*
         *	조회 Validate
         */
         this.fnSelectValidate = function() {
            var cd_corp = this.dsSearch.getColumn(0, "CD_CORP");
            //var cd_sabun = this.dsSearch.getColumn(0, "ID_SABUN");
        /*
        	if (this.gfnIsNull(cd_corp)) {
        		this.gfnAlert("법인코드가 입력되지 않았습니다.");
        		this.ccfCorpCd.form.CDTextBox.setFocus();
        		return false;
        	}

        	if (this.gfnIsNull(cd_sabun)) {
        		this.gfnAlert("사번이 입력되지 않았습니다.");
        		this.ccfID_SABUN.form.CDTextBox.setFocus();
        		return false;
        	}
        */
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
        	var objJson = this.fnCurrentGrid();
        	if (svcID == "select") {
        		this.gfnGridAfterSelect(objJson.objGrid);
        		this.fnSetButton();
        		if ( objJson.objDsList.rowcount > 0) {
        			objJson.objDsList.set_rowposition(0);
        		}
        	}
        	else if(svcID == "save") {
        		if (errorCode == 0) {
        			this.FormBtns.Select.click();
        			this.gfnAlert('정상 처리되었습니다.');
        		} else {
        			this.gfnAlert(errorMsg);
        		}
        	}
        };

        /************************************************************************
         * 코드파인드 이벤트
         ************************************************************************/
        this.fnBeforeUserDataSetParam = function(id, dsUserParam, nrow) {

        	switch(id) {
        	case "ccfCD_CORP": // 법인코드
        		break;

        	 case "ccfID_SABUN" : // 성명찾기 코드파인드
        	 //this.AuthClient.CD_DEPT
        	    dsUserParam.setColumn(nrow, "GR_SEARCH", "");
        		dsUserParam.setColumn(nrow, "CD_DEPT", "");
        		dsUserParam.setColumn(nrow, "CD_CORP", this.ccfCD_CORP.form.CDTextBox.value);
        	 break;

        	default:
        	}
        	return true;
        }

        this.codefind_AfterCDTextChanged = function(id,codeFindData) {
           	if(id == "ccfID_SABUN") {
        		//ID_PERSON 값 바인딩
        		var arr = codeFindData;
        		if(arr.length > 0) {
        			this.txtID_PERSON.set_value(arr[0]["ID_PERSON"]);
        			this.ccfCD_CORP.form.CDTextBox.set_value(arr[0]["CD_CORP"]);
        			this.ccfCD_CORP.form.DSTextBox.set_value(arr[0]["DS_CORP"]);
        		}else{
        			this.txtID_PERSON.set_value("");
        			this.ccfCD_CORP.form.CDTextBox.set_value("");
        			this.ccfCD_CORP.form.DSTextBox.set_value("");
        		}
        	}
        	this.fnSearchInit();
        }

         // 그리드 코드파인드
        this.fnGrid_BeforuserDataSetParam = function(id, dsUserParam, nrow) {
        	switch(id) {
        		//DAX_CFCOMMONCODE
        	    case "AA":	// 1주소_주소구분(변경)
        		case "AB":	// 1주소_지역코드
        		case "FA":	// 2가족_관계코드
        		case "SA":	// 2가족_학력코드
        		case "SA2":	// 3학력_학력구분
        		case "SD":	// 3학력_학교코드
        		case "SB":	// 3학력_졸업여부
        		case "SE":	// 3학력_전공코드
        		case "SC":	// 3학력_학위코드
        		case "LA":	// 4자격_자격증코드
        			dsUserParam.setColumn(nrow, "CD_PREFIX", id);
        			break;

        		case "SE2":	// 3학력_복수전공코드
        			dsUserParam.setColumn(nrow, "CD_PREFIX", "SE");
        			break;

        		case "DAX_CFADDRESS":	// 1주소_주소코드,주소구분,주소(현재)
        			dsUserParam.setColumn(nrow, "ID_PERSON", this.dsSearch.getColumn(0, "ID_PERSON"));
        			// VALUE DS_ADDRESS
        			break;

        		case "DAX_CFFAMILY_CODEFIND":	//2가족_순번,관계코드,관계명,가족생년월일,가족성명
        			dsUserParam.setColumn(nrow, "ID_PERSON", this.dsSearch.getColumn(0, "ID_PERSON"));
        			//DS_HNAME LIKE @VALUE
        			break;

        		case "DAX_CFSCHOOL":	//3학력_순번,학력구분,학력구분,학교코드,학교명,
        			dsUserParam.setColumn(nrow, "ID_PERSON", this.dsSearch.getColumn(0, "ID_PERSON"));
        			// SCH.CD_LEVEL LIKE @VALUE + '%' OR C_SA.DS_CODE	LIKE @VALUE + '%'
        			break;

        		case "DAX_CFLICENSE":	//4자격_순번,자격증코드,자격증명,자격번호
        			dsUserParam.setColumn(nrow, "ID_PERSON", this.dsSearch.getColumn(0, "ID_PERSON"));
        			// LIC.CD_LICENSE LIKE @VALUE + '%' OR CASE WHEN LIC.CD_LICENSE = '1671' THEN LIC.DS_LICENSE ELSE C_LA.DS_CODE END	LIKE @VALUE + '%'
        			break;

        		case "DAX_CFCAREER":	// 5경력_근무처
        			dsUserParam.setColumn(nrow, "ID_PERSON", this.dsSearch.getColumn(0, "ID_PERSON"));
        			// DS_COMPANY LIKE @VALUE + '%'
        			break;

        		default:
        		}
        		return true;
        }

        this.fnGrid_AfterCDTextChanged = function(id, codeFindData) {
        	switch(id) {
        	case "DFX_CFACNTUNIT":
        		break;

        	default:
        	}
        	return true;
        };

        this.fnGrid_AfterAllCheck = function(obj, cell, check)
        {
            var columnFam = this.gfnGridGetBindColumnNameByIndex(obj, cell);

        }
        /************************************************************************
         * 그리드 이벤트
         ************************************************************************/

        // 첨부파일
        this.fnGrid_ExpandUp = function(obj, e) {
        	var colnm = this.gfnGridGetBindColumnNameByIndex(obj, e.cell);
        	var objDs = obj.getBindDataset();
        	var nTabIdx = this.divData.form.tabData.tabindex;
        	var aTabDir = ["ADDRESS", "FAMILY", "SCHOOL", "LICENSE", "CAREER"];	// 주소,가족,학력,자격,경력
        	var sCdDir = "";

        	if(colnm == "NM_FILE") {
        		// 최초 작성시엔 NO_SEQ가 없기 때문에 저장 후에 파일 첨부를 진행하여야 함.
        		// CD_DIR에 넣어줄 값이 없기에 저장 후 진행!
        		if(this.gfnGetFlag(objDs, e.row) == "I"){
        			this.gfnAlert("저장 후 파일첨부 진행.");
        			return false;
        		}
        		/*
        			주소 >>	ADDRESS	/임직원ID_PERSON / 해당ROW의 NO_SEQ
        			가족 >>	FAMILY	/임직원ID_PERSON / 해당ROW의 NO_SEQ
        			학력 >>	SCHOOL	/임직원ID_PERSON / 해당ROW의 NO_SEQ
        			자격 >>	LICENSE	/임직원ID_PERSON / 해당ROW의 NO_SEQ
        			경력 >>	CAREER	/임직원ID_PERSON / 해당ROW의 NO_SEQ
        		*/

        		var fileManager = {};
        		fileManager.CD_GUBUN = "DA40";
        		//fileManager.CD_DIR = [this.dsList.getColumn(e.row, "CD_OWNER")];
        		fileManager.CD_DIR = [aTabDir[nTabIdx], objDs.getColumn(e.row, "ID_PERSON"), objDs.getColumn(e.row, "NO_SEQ")];
        		fileManager.IS_READONLY = true;

        		this.gfnFileManager(fileManager, "fnFileCallback");
        	}
        }

        this.fnFileCallback = function(strID, val) {
        	var objJson = this.fnCurrentGrid();
        	var objDs = objJson.objGrid.getBindDataset();
        	var nTabIdx = this.divData.form.tabData.tabindex;

        	// val.IsChange : 변경여부, val.Cnt : 파일개수

        	// 파일개수를 다시 셋팅
        	objDs.set_enableevent(false);
        	if(val.Cnt == 0) {
        		//objDs.setColumn(objDs2.rowposition, "NM_FILE", "첨부");
        	}
        	objDs.setColumn(objDs.rowposition, "NM_FILE", "첨부(" + val.Cnt + ")");
        	objDs.set_enableevent(true);
        };

        /************************************************************************
         * 기타 이벤트
         ************************************************************************/
        /*
         *	조회 조건 변경시 초기화
         */
        this.fnSearchInit = function(obj,e) {
        	if(e == null || (e.pretext != e.posttext)) {
        		this.gfnSetFormStatus(this);
        		var objJson = this.fnCurrentGrid();
        		this.gfnGridClear(objJson.objGrid);
        	}
        };

        /*
         *	조회 조건 변경시 초기화
         */
        this.dsSearch_onvaluechanged = function(obj,e){

        	if(e.oldvalue != e.newvalue) {
        		if (e.columnid == "DT_ASK_FR" || e.columnid == "DT_ASK_TO") {

        			if (!this.gfnIsNull(this.dsSearch.getColumn(0, "DT_ASK_FR")) && !this.gfnIsNull(this.dsSearch.getColumn(0, "DT_ASK_TO"))) {
        				if (this.dsSearch.getColumn(0, "DT_ASK_FR") > this.dsSearch.getColumn(0, "DT_ASK_TO")) {
        					this.fnAlertCallback = function() {
        						this.dsSearch.setColumn(0, e.columnid, e.oldvalue);
        					}
        					this.gfnAlert("요청기간이 올바르지 않습니다. 다시 입력해주세요.", "fnAlertCallback");
        				}
        			}
        			return;
        		}

        		var objJson = this.fnCurrentGrid();
        		this.gfnGridClear(objJson.objGrid);

        		this.gfnSetFormStatus(this);	// 폼상태 초기화
        	}

        };

        this.divData_tabData_onchanged = function(obj,e)
        {
        	var nTabIdx = this.divData.form.tabData.tabindex;

        	// 그리드 셋팅
        	this.fnSetGridCellProperty(nTabIdx);
        	this.FormBtns.Select.click();
        };

        // 승인
        this.fnApproval = function(obj,e) {
        	var objJson = this.fnCurrentGrid();
        	var chkCnt =  objJson.objDsList.getCaseCount("CHK == 1");
        	if(chkCnt == 0) {
        		this.gfnAlert("승인처리 대상 행을 선택하세요.");
        		return;
        	}
        	this.gfnConfirm("선택한 내역을 승인 하시겠습니까?", "fnConfirmCallback", "Approval");
        }

        // 반려
        this.fnReject = function(obj,e) {
        	var objJson = this.fnCurrentGrid();
        	var chkCnt =  objJson.objDsList.getCaseCount("CHK == 1");
        	if(chkCnt == 0) {
        		this.gfnAlert("반려처리 대상 행을 선택하세요.");
        		return;
        	}

        	this.gfnConfirm("선택한 내역을 반려 하시겠습니까?", "fnConfirmCallback", "Reject");
        }

        this.fnConfirmCallback = function(strId, val) {
        	if(val) {
        		if(strId == "Approval") {
        			this.fnUpdateApproval("02");	// 승인
        		} else if( strId == "Reject"){
        			this.fnUpdateApproval("03");	// 반려
        		}
        	}
        };

        /*
        // 전자결재문서조회
        this.fnElctrncPmntDoc = function(obj:nexacro.Button,e:nexacro.ClickEventInfo) {
        }


        // 전표처리현황
        this.fnChitPrcsStatus = function(obj:nexacro.Button,e:nexacro.ClickEventInfo) {
        }
        */
        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.form_onload,this);
            this.divData.form.tabData.addEventHandler("onchanged",this.divData_tabData_onchanged,this);
            this.divData.form.tabData.addEventHandler("canchange",this.divData_tabData_canchange,this);
            this.dsSearch.addEventHandler("onvaluechanged",this.dsSearch_onvaluechanged,this);
        };
        this.loadIncludeScript("DAA_PERSONAL_INFO.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
