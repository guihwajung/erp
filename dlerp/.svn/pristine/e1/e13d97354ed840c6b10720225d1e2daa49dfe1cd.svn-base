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
            this.set_titletext("제한해제");
            if (Form == this.constructor)
            {
                this._setFormPosition(400,560);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("_dsProc", this);
            obj._setContents("<ColumnInfo><Column id=\"TARGET\" type=\"STRING\" size=\"256\"/><Column id=\"SP\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"TARGET\">select</Col><Col id=\"SP\">DMZPR_PUNISH_SELECT</Col></Row><Row><Col id=\"TARGET\">update</Col><Col id=\"SP\">DMZPR_PUNISH_UPDATE</Col></Row><Row><Col id=\"TARGET\">delete</Col><Col id=\"SP\">DMZPR_PUNISH_DELETE</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsList", this);
            obj._setContents("<ColumnInfo><Column id=\"NO_VENDOR_SAP\" type=\"STRING\" size=\"256\"/><Column id=\"CD_REQUEST\" type=\"STRING\" size=\"256\"/><Column id=\"DT_PUNISH\" type=\"STRING\" size=\"256\"/><Column id=\"CD_VENDOR\" type=\"STRING\" size=\"256\"/><Column id=\"DS_VENDOR\" type=\"STRING\" size=\"256\"/><Column id=\"YN_RELEASE\" type=\"STRING\" size=\"256\"/><Column id=\"DT_RELEASE\" type=\"STRING\" size=\"256\"/><Column id=\"RM_RELEASE\" type=\"STRING\" size=\"256\"/><Column id=\"NO_ID\" type=\"STRING\" size=\"256\"/><Column id=\"DS_REQUEST\" type=\"STRING\" size=\"256\"/><Column id=\"FR_PUNISH\" type=\"STRING\" size=\"256\"/><Column id=\"TO_PUNISH\" type=\"STRING\" size=\"256\"/><Column id=\"FN_PUNISH\" type=\"STRING\" size=\"256\"/><Column id=\"DS_PUNISH\" type=\"STRING\" size=\"256\"/><Column id=\"RM_REMARK\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row/></Rows>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Div("divData","0","0","400","560",null,null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_cssclass("div_DATA_Bg");
            obj.set_text("");
            this.addChild(obj.name, obj);

            obj = new Static("staTITLE","0","0","100.00%","30",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("0");
            obj.set_text("제한사항해제");
            obj.set_cssclass("sta_TITLE_Bg");
            obj.set_textAlign("left");
            this.divData.addChild(obj.name, obj);

            obj = new Static("staCD_VENDOR","0","79","110","30",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("1");
            obj.set_text("협력업체");
            obj.set_cssclass("sta_WF_tablelabel");
            obj.set_textAlign("right");
            this.divData.addChild(obj.name, obj);

            obj = new Static("staNO_VENDOR_SAP","0","107","110","31",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("2");
            obj.set_text("회사(SAP)코드");
            obj.set_cssclass("sta_WF_tablelabel");
            obj.set_textAlign("right");
            this.divData.addChild(obj.name, obj);

            obj = new Static("staCD_REQUEST","0","staNO_VENDOR_SAP:-1","110","30",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("3");
            obj.set_text("제한사유");
            obj.set_cssclass("sta_WF_tablelabel");
            obj.set_textAlign("right");
            this.divData.addChild(obj.name, obj);

            obj = new Static("staDT_PUNISH","0","staCD_REQUEST:-1","110","32",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("4");
            obj.set_text("제한등록(시작)일");
            obj.set_cssclass("sta_WF_tablelabel");
            obj.set_textAlign("right");
            this.divData.addChild(obj.name, obj);

            obj = new Static("staDS_PUNISH","0","staDT_PUNISH:28","111","61",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("5");
            obj.set_text("제한내용");
            obj.set_cssclass("sta_WF_tablelabel");
            obj.set_textAlign("right");
            this.divData.addChild(obj.name, obj);

            obj = new Static("staBg1","staCD_VENDOR:-1","79",null,"30","0.25%",null,null,null,null,null,this.divData.form);
            obj.set_taborder("6");
            obj.set_cssclass("sta_WF_tablebg");
            this.divData.addChild(obj.name, obj);

            obj = new Static("staBg2","staNO_VENDOR_SAP:-1","107",null,"32","0.25%",null,null,null,null,null,this.divData.form);
            obj.set_taborder("7");
            obj.set_cssclass("sta_WF_tablebg");
            this.divData.addChild(obj.name, obj);

            obj = new Static("staBg3","staCD_REQUEST:-1","staNO_VENDOR_SAP:-1",null,"30","0.25%",null,null,null,null,null,this.divData.form);
            obj.set_taborder("8");
            obj.set_cssclass("sta_WF_tablebg");
            this.divData.addChild(obj.name, obj);

            obj = new Static("staBg4","staDT_PUNISH:-1","staBg3:-1",null,"34","0.25%",null,null,null,null,null,this.divData.form);
            obj.set_taborder("9");
            obj.set_cssclass("sta_WF_tablebg");
            obj.set_text("");
            this.divData.addChild(obj.name, obj);

            obj = new Static("staBg5","staDS_PUNISH:-2","staBg4:26",null,"61","0.25%",null,null,null,null,null,this.divData.form);
            obj.set_taborder("10");
            obj.set_cssclass("sta_WF_tablebg");
            this.divData.addChild(obj.name, obj);

            obj = new Calendar("ctclDT_PUNISH","staDT_PUNISH:11","171","100","20",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("11");
            obj.set_dateformat("yyyy-MM-dd");
            obj.set_editformat("yyyyMMdd");
            obj.set_autoselect("true");
            obj.set_value("");
            obj.set_readonly("true");
            obj.set_enable("false");
            this.divData.addChild(obj.name, obj);

            obj = new TextArea("ctxtDS_PUNISH","staDS_PUNISH:10","231",null,"49","7",null,null,null,null,null,this.divData.form);
            obj.set_readonly("true");
            obj.set_taborder("12");
            obj.set_value("");
            obj.set_enable("false");
            this.divData.addChild(obj.name, obj);

            obj = new Static("staDT_PUNISH00","0","350","111","33",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("15");
            obj.set_text("제한해제");
            obj.set_cssclass("sta_WF_tablelabel");
            obj.set_textAlign("right");
            this.divData.addChild(obj.name, obj);

            obj = new Static("staBg01","109","378",null,"30","0.00%",null,null,null,null,null,this.divData.form);
            obj.set_taborder("16");
            obj.set_cssclass("sta_WF_tablebg");
            obj.set_text("");
            this.divData.addChild(obj.name, obj);

            obj = new Static("staCD_REQUEST00","0","380","110","30",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("20");
            obj.set_text("제한해제일자");
            obj.set_cssclass("sta_WF_tablelabel");
            obj.set_textAlign("right");
            this.divData.addChild(obj.name, obj);

            obj = new Calendar("ctclDT_PUNISH00","staCD_REQUEST00:9","383","100","20",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("17");
            obj.set_dateformat("yyyy-MM-dd");
            obj.set_editformat("yyyyMMdd");
            obj.set_autoselect("true");
            obj.set_value("");
            this.divData.addChild(obj.name, obj);

            obj = new Static("staBg00","109","350",null,"30","0.00%",null,null,null,null,null,this.divData.form);
            obj.set_taborder("18");
            obj.set_cssclass("sta_WF_tablebg");
            obj.set_text("");
            this.divData.addChild(obj.name, obj);

            obj = new CheckBox("chk00","staDT_PUNISH00:16","355","86","20",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("19");
            obj.set_expr("expr:YN_RELEASE==\'Y\'?\'1\':\'0\'");
            obj.set_truevalue("Y");
            obj.set_falsevalue("N");
            this.divData.addChild(obj.name, obj);

            obj = new Static("staRM_RELEASE","0","407","111","63",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("21");
            obj.set_text("내용");
            obj.set_cssclass("sta_WF_tablelabel");
            obj.set_textAlign("right");
            this.divData.addChild(obj.name, obj);

            obj = new Static("staBg02","109","407",null,"63","0.00%",null,null,null,null,null,this.divData.form);
            obj.set_taborder("22");
            obj.set_cssclass("sta_WF_tablebg");
            this.divData.addChild(obj.name, obj);

            obj = new TextArea("ctxtRM_RELEASE","117","413",null,"50","8",null,null,null,null,null,this.divData.form);
            obj.set_taborder("23");
            obj.set_value("");
            this.divData.addChild(obj.name, obj);

            obj = new Edit("edtNO_VENDOR_SAP","staNO_VENDOR_SAP:10","113",null,"20","7",null,null,null,null,null,this.divData.form);
            obj.set_taborder("24");
            obj.set_autoselect("true");
            obj.set_enable("false");
            this.divData.addChild(obj.name, obj);

            obj = new Static("staCD_VENDOR00","0","50","110","30",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("25");
            obj.set_text("일련번호");
            obj.set_cssclass("sta_WF_tablelabel");
            obj.set_textAlign("right");
            this.divData.addChild(obj.name, obj);

            obj = new Static("staBg03","109","50",null,"30","0.25%",null,null,null,null,null,this.divData.form);
            obj.set_taborder("26");
            obj.set_cssclass("sta_WF_tablebg");
            this.divData.addChild(obj.name, obj);

            obj = new Edit("edtNO_ID","staCD_VENDOR00:10","55",null,"20","7",null,null,null,null,null,this.divData.form);
            obj.set_taborder("27");
            obj.set_autoselect("true");
            obj.set_enable("false");
            this.divData.addChild(obj.name, obj);

            obj = new Edit("edtCD_REQUEST","staCD_REQUEST:10","142",null,"20","179",null,null,null,null,null,this.divData.form);
            obj.set_readonly("true");
            obj.set_taborder("29");
            obj.set_autoselect("true");
            obj.set_enable("false");
            this.divData.addChild(obj.name, obj);

            obj = new Edit("edtDS_REQUEST","edtCD_REQUEST:-1","142",null,"20","7",null,null,null,null,null,this.divData.form);
            obj.set_readonly("true");
            obj.set_taborder("28");
            obj.set_autoselect("true");
            obj.set_enable("false");
            this.divData.addChild(obj.name, obj);

            obj = new Edit("edtCD_VENDOR","staCD_VENDOR:10","84",null,"20","180",null,null,null,null,null,this.divData.form);
            obj.set_taborder("30");
            obj.set_readonly("true");
            obj.set_autoselect("true");
            this.divData.addChild(obj.name, obj);

            obj = new Edit("edtDS_VENDOR","edtCD_VENDOR:-1","84",null,"20","7",null,null,null,null,null,this.divData.form);
            obj.set_readonly("true");
            obj.set_taborder("31");
            obj.set_autoselect("true");
            obj.set_enable("false");
            this.divData.addChild(obj.name, obj);

            obj = new Static("staFR_PUNISH01","0","197","110","30",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("32");
            obj.set_text("제한기간");
            obj.set_cssclass("sta_WF_tablelabel");
            obj.set_textAlign("right");
            this.divData.addChild(obj.name, obj);

            obj = new Static("staBg04","109","197",null,"30","0.25%",null,null,null,null,null,this.divData.form);
            obj.set_taborder("33");
            obj.set_cssclass("sta_WF_tablebg");
            obj.set_text("");
            this.divData.addChild(obj.name, obj);

            obj = new Calendar("ctclFR_PUNISH","staFR_PUNISH01:11","202","100","20",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("34");
            obj.set_dateformat("yyyy-MM-dd");
            obj.set_editformat("yyyyMMdd");
            obj.set_autoselect("true");
            obj.set_value("");
            obj.set_readonly("true");
            obj.set_enable("false");
            this.divData.addChild(obj.name, obj);

            obj = new Calendar("ctclTO_PUNISH","ctclFR_PUNISH:19","202","100","20",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("35");
            obj.set_dateformat("yyyy-MM-dd");
            obj.set_editformat("yyyyMMdd");
            obj.set_autoselect("true");
            obj.set_value("");
            obj.set_readonly("true");
            obj.set_enable("false");
            this.divData.addChild(obj.name, obj);

            obj = new Static("staRM_REMARK","-1","285","111","60",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("36");
            obj.set_text("비고");
            obj.set_cssclass("sta_WF_tablelabel");
            obj.set_textAlign("right");
            this.divData.addChild(obj.name, obj);

            obj = new Static("staBg05","109","285",null,"60","0.25%",null,null,null,null,null,this.divData.form);
            obj.set_taborder("37");
            obj.set_cssclass("sta_WF_tablebg");
            this.divData.addChild(obj.name, obj);

            obj = new Edit("edtRM_REMARK","staRM_REMARK:11","290",null,"50","6",null,null,null,null,null,this.divData.form);
            obj.set_taborder("38");
            obj.set_readonly("true");
            obj.set_autoselect("true");
            obj.set_enable("false");
            this.divData.addChild(obj.name, obj);

            obj = new Button("btnSave","32.50%","510","60","20",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("13");
            obj.set_text("저장");
            this.divData.addChild(obj.name, obj);

            obj = new Button("btnCancel","52.50%","510","60","20",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("14");
            obj.set_text("취소");
            this.divData.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this
            obj = new Layout("default","",this._adjust_width,this._adjust_height,this,function(p){});
            this.addLayout(obj.name, obj);
            
            // BindItem Information
            obj = new BindItem("item0","divData.form.edtNO_ID","value","dsList","NO_ID");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item1","divData.form.edtCD_VENDOR","value","dsList","CD_VENDOR");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item2","divData.form.edtDS_VENDOR","value","dsList","DS_VENDOR");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item3","divData.form.edtNO_VENDOR_SAP","value","dsList","NO_VENDOR_SAP");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item4","divData.form.edtCD_REQUEST","value","dsList","CD_REQUEST");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item5","divData.form.edtDS_REQUEST","value","dsList","DS_REQUEST");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item6","divData.form.ctclDT_PUNISH","value","dsList","DT_PUNISH");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item7","divData.form.ctclFR_PUNISH","value","dsList","FR_PUNISH");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item8","divData.form.ctclTO_PUNISH","value","dsList","TO_PUNISH");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item9","divData.form.ctxtDS_PUNISH","value","dsList","DS_PUNISH");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item11","divData.form.chk00","value","dsList","YN_RELEASE");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item12","divData.form.ctclDT_PUNISH00","value","dsList","DT_RELEASE");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item10","divData.form.ctxtRM_RELEASE","value","dsList","RM_RELEASE");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item13","divData.form.edtRM_REMARK","value","dsList","RM_REMARK");
            this.addChild(obj.name, obj);
            obj.bind();
            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script
        this.registerScript("DMZ_PUNISH_DLG_RELEASE.xfdl", function() {
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

        	// 이전 화면에서 데이터 받기.
        	this.dsList.setColumn(0, "NO_ID", this.getOwnerFrame().NO_ID);
        	this.dsList.setColumn(0, "CD_VENDOR", this.getOwnerFrame().CD_VENDOR);
        	this.dsList.setColumn(0, "DS_VENDOR", this.getOwnerFrame().DS_VENDOR);

        	this.FormBtns.Select.click();
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

        	this.edtCD_REQUEST = this.divData.form.edtCD_REQUEST;
        	this.ctclDT_PUNISH = this.divData.form.ctclDT_PUNISH;
        	this.edtRM_REMARK = this.divData.form.edtRM_REMARK;
        	this.edtCD_VENDOR = this.divData.form.edtCD_VENDOR;

        	this.dxGrid = this.divData.form.objGrid;
        };

        /************************************************************************
         * 이벤트 설정
         ************************************************************************/
        this.fnSetEvent = function() {

        	//this.staCD_VENDOR_SAP.BeforeUserDataSetParam = "fnBeforeUserDataSetParam";
        };

        /************************************************************************
         * 파라미터 설정
         ************************************************************************/
        this.fnSetParameter = function() {

        	this.dsSelect = new Dataset();
        	this.dsSelect.addColumn("CD_VENDOR", "string");
        	this.dsSelect.addColumn("NO_ID", "bigdecimal");

        	this.dsUpdate = new Dataset();
        	this.dsUpdate.addColumn("CD_VENDOR", "string");
        	this.dsUpdate.addColumn("NO_ID", "bigdecimal");
        	this.dsUpdate.addColumn("YN_RELEASE", "string");
        	this.dsUpdate.addColumn("DT_RELEASE", "string");
        	this.dsUpdate.addColumn("RM_RELEASE", "string");
        	this.dsUpdate.addColumn("ID_RELEASE", "string");

        	this.dsDelete = new Dataset();
        	this.dsDelete.addColumn("CD_VENDOR", "string");
        	this.dsDelete.addColumn("NO_ID", "bigdecimal");
        	this.dsDelete.addColumn("ID_RELEASE", "string");

        }

        /************************************************************************
         * 컨트롤 이벤트
         ************************************************************************/
         /*
          *	조회 버튼
          */
        this.fnSelect = function() {

        	this.dsSelect.clearData();
        	this.dsSelect.addRow();

        	this.dsSelect.setColumn(0, "CD_VENDOR", this.dsList.getColumn(0, "CD_VENDOR"));
        	this.dsSelect.setColumn(0, "NO_ID", this.dsList.getColumn(0, "NO_ID"));

        	var strSvcId    = "select";
        	var strSvcType  = "grid";
        	var inProc		= "_dsProc";
        	var inData      = "select=dsSelect";
        	var outData     = "dsList=select0";
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

         /*
         *	입력 버튼
         */
        this.fnAdd = function() {


        }

        /*
        	저장
        */
        this.fnSave = function() {

        }



        /*
         *	삭제 버튼
         */
        this.fnDel = function() {
        	//this.gfnGridDel(this.dxGrid);
        }


        /*
         *	엑셀 버튼
         */
        this.fnExcel = function() {
        	this.gfnExcelExport(this.dxGrid);
        }

        /*
         *	출력 버튼
         */
        this.fnPrint = function() {
        }
        /************************************************************************
         * Validate
         ************************************************************************/

        /************************************************************************
         * 콜백 이벤트
         ************************************************************************/
        /*
         *	콜백 처리
        */
        this.fnCallback = function(svcID, errorCode, errorMsg)
        {
        	if (svcID == "save") {
        		if(errorCode == 0)
        		{
        			// this.close()가 작동하지 않았고,
        			// 부모의 callback 함수로 데이터를 넘겨주기 위해 작성되었습니다.
        			this.getParentContext().close(true);
        		}else
        		{
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

        // 저장 버튼 클릭
        this.divData_btnSave_onclick = function(obj,e)
        {
        	this.dsUpdate.clearData();

        	var nrow = this.dsUpdate.addRow();

        	this.dsUpdate.setColumn(nrow, "CD_VENDOR", this.dsList.getColumn(0, "CD_VENDOR"));
        	this.dsUpdate.setColumn(nrow, "NO_ID", this.dsList.getColumn(0, "NO_ID"));
        	this.dsUpdate.setColumn(nrow, "YN_RELEASE", this.dsList.getColumn(0, "YN_RELEASE"));
        	this.dsUpdate.setColumn(nrow, "DT_RELEASE", this.dsList.getColumn(0, "DT_RELEASE"));
        	this.dsUpdate.setColumn(nrow, "RM_RELEASE", this.dsList.getColumn(0, "RM_RELEASE"));
        	this.dsUpdate.setColumn(nrow, "ID_RELEASE", this.dsList.getColumn(0, "ID_RELEASE"));

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
        						strArg, 		// 입력값으로 보낼 arguments, strFormData="20120607"
        						callBackFnc); // 통신방법 정의 [생략가능]

        };


        // 취소 버튼 클릭
        this.divData_btnCancel_onclick = function(obj,e)
        {
        	// this.close()가 작동하지 않았고,
        	// 부모의 callback 함수로 데이터를 넘겨주기 위해 작성되었습니다.
        	this.getParentContext().close(false);
        };





        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.form_onload,this);
            this.divData.form.staBg2.addEventHandler("onclick",this.divData_staBg2_onclick,this);
            this.divData.form.btnSave.addEventHandler("onclick",this.divData_btnSave_onclick,this);
            this.divData.form.btnCancel.addEventHandler("onclick",this.divData_btnCancel_onclick,this);
            this.dsList.addEventHandler("onvaluechanged",this.dsData_onvaluechanged,this);
        };
        this.loadIncludeScript("DMZ_PUNISH_DLG_RELEASE.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
