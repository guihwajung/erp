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
            this.set_titletext("협력사제한");
            this.getSetter("maxwidth").set("400");
            this.getSetter("maxheight").set("360");
            if (Form == this.constructor)
            {
                this._setFormPosition(400,360);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("_dsProc", this);
            obj._setContents("<ColumnInfo><Column id=\"TARGET\" type=\"STRING\" size=\"256\"/><Column id=\"SP\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"TARGET\">insert</Col><Col id=\"SP\">DMZPR_PUNISH_INSERT</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsList", this);
            obj._setContents("<ColumnInfo><Column id=\"NO_VENDOR_SAP\" type=\"STRING\" size=\"256\"/><Column id=\"CD_REQUEST\" type=\"STRING\" size=\"256\"/><Column id=\"DT_PUNISH\" type=\"STRING\" size=\"256\"/><Column id=\"RM_REMARK\" type=\"STRING\" size=\"256\"/><Column id=\"CD_VENDOR\" type=\"STRING\" size=\"256\"/><Column id=\"DS_VENDOR\" type=\"STRING\" size=\"256\"/><Column id=\"DS_REQUEST\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row/></Rows>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Div("divData","0","0",null,null,"0","0",null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_cssclass("div_DATA_Bg");
            obj.set_text("");
            this.addChild(obj.name, obj);

            obj = new Static("staTITLE","0","0","100%","30",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("0");
            obj.set_text("제한사항등록");
            obj.set_cssclass("sta_TITLE_Bg");
            obj.set_textAlign("left");
            this.divData.addChild(obj.name, obj);

            obj = new Static("staCD_VENDOR","0","40","110","30",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("1");
            obj.set_text("협력업체");
            obj.set_cssclass("sta_WF_tablelabel");
            obj.set_textAlign("right");
            this.divData.addChild(obj.name, obj);

            obj = new Static("staNO_VENDOR_SAP","0","69","110","31",null,null,null,null,null,null,this.divData.form);
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

            obj = new Static("staDT_PUNISH","0","staCD_REQUEST:-1","109","30",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("4");
            obj.set_text("제한등록(시작)일");
            obj.set_cssclass("sta_WF_tablelabel");
            obj.set_textAlign("right");
            this.divData.addChild(obj.name, obj);

            obj = new Static("staRM_REMARK","0","staDT_PUNISH:-1","110","70",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("5");
            obj.set_text("비고");
            obj.set_cssclass("sta_WF_tablelabel");
            obj.set_textAlign("right");
            this.divData.addChild(obj.name, obj);

            obj = new Static("staBg2","staNO_VENDOR_SAP:-1","65",null,"36","0.00%",null,null,null,null,null,this.divData.form);
            obj.set_taborder("6");
            obj.set_cssclass("sta_WF_tablebg");
            this.divData.addChild(obj.name, obj);

            obj = new Static("staBg3","staCD_REQUEST:-1","staNO_VENDOR_SAP:-1",null,"30","0.00%",null,null,null,null,null,this.divData.form);
            obj.set_taborder("7");
            obj.set_cssclass("sta_WF_tablebg");
            this.divData.addChild(obj.name, obj);

            obj = new Static("staBg4","staDT_PUNISH:0","staBg3:-1",null,"30","0.00%",null,null,null,null,null,this.divData.form);
            obj.set_taborder("8");
            obj.set_cssclass("sta_WF_tablebg");
            obj.set_text("");
            this.divData.addChild(obj.name, obj);

            obj = new Static("staBg5","staRM_REMARK:-1","staBg4:-1",null,"70","0.00%",null,null,null,null,null,this.divData.form);
            obj.set_taborder("9");
            obj.set_cssclass("sta_WF_tablebg");
            this.divData.addChild(obj.name, obj);

            obj = new Calendar("ctclDT_PUNISH","staDT_PUNISH:10","staCD_REQUEST:4","100","20",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("10");
            obj.set_dateformat("yyyy-MM-dd");
            obj.set_editformat("yyyyMMdd");
            obj.set_autoselect("true");
            obj.set_value("");
            this.divData.addChild(obj.name, obj);

            obj = new TextArea("ctxtRM_REMARK","staRM_REMARK:9","staCD_REQUEST:34",null,"60","7",null,null,null,null,null,this.divData.form);
            obj.set_taborder("11");
            obj.set_value("");
            this.divData.addChild(obj.name, obj);

            obj = new Edit("edtNO_VENDOR_SAP","staNO_VENDOR_SAP:10","75",null,"20","7",null,null,null,null,null,this.divData.form);
            obj.set_taborder("14");
            obj.set_autoselect("true");
            this.divData.addChild(obj.name, obj);

            obj = new Static("staBg00","109","40",null,"30","0.00%",null,null,null,null,null,this.divData.form);
            obj.set_taborder("15");
            obj.set_cssclass("sta_WF_tablebg");
            this.divData.addChild(obj.name, obj);

            obj = new Div("ccfCD_REQUEST","119","104",null,"20","7",null,null,null,null,null,this.divData.form);
            obj.getSetter("CDTextWidth").set("70");
            obj.set_taborder("16");
            obj.getSetter("CodeFindName").set("DCX_CFPUNISH");
            obj.set_url("cmm::cmmCodeFind.xfdl");
            obj.set_text("");
            this.divData.addChild(obj.name, obj);

            obj = new Button("btnSave","32.50%","staRM_REMARK:35","60","20",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("12");
            obj.set_text("저장");
            this.divData.addChild(obj.name, obj);

            obj = new Button("btnCancel","52.50%","staRM_REMARK:35","60","20",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("13");
            obj.set_text("취소");
            this.divData.addChild(obj.name, obj);

            obj = new Div("ccfCD_VENDOR","30:120","45",null,"20","7",null,null,null,null,null,this.divData.form);
            obj.getSetter("CDTextWidth").set("70");
            obj.set_taborder("17");
            obj.getSetter("CodeFindName").set("DCX_CFVENDOR_COMMON");
            obj.set_url("cmm::cmmCodeFind.xfdl");
            obj.set_text("");
            this.divData.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this
            obj = new Layout("default","",this._adjust_width,this._adjust_height,this,function(p){});
            this.addLayout(obj.name, obj);
            
            // BindItem Information
            obj = new BindItem("item2","divData.form.edtNO_VENDOR_SAP","value","dsList","NO_VENDOR_SAP");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item4","divData.form.ctclDT_PUNISH","value","dsList","DT_PUNISH");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item5","divData.form.ctxtRM_REMARK","value","dsList","RM_REMARK");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item3","divData.form.ccfCD_REQUEST.form.CDTextBox","value","dsList","CD_REQUEST");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item6","divData.form.ccfCD_REQUEST.form.DSTextBox","value","dsList","DS_REQUEST");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item0","divData.form.ccfCD_VENDOR.form.CDTextBox","value","dsList","CD_VENDOR");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item1","divData.form.ccfCD_VENDOR.form.DSTextBox","value","dsList","DS_VENDOR");
            this.addChild(obj.name, obj);
            obj.bind();
            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {
            this._addPreloadList("fdl","cmm::cmmCodeFind.xfdl");
        };
        
        // User Script
        this.registerScript("DMZ_PUNISH_DLG_REG.xfdl", function() {
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
        // 	this.dsList.setColumn(0, "CD_VENDOR", this.getOwnerFrame().CD_VENDOR);
        // 	this.dsList.setColumn(0, "DS_VENDOR", this.getOwnerFrame().DS_VENDOR);
        // 	this.dsList.setColumn(0, "NO_VENDOR_SAP", this.getOwnerFrame().NO_VENDOR_SAP);
        // 	this.dsList.setColumn(0, "CD_REQUEST", this.getOwnerFrame().CD_REQUEST);
        // 	this.dsList.setColumn(0, "DS_REQUEST", this.getOwnerFrame().DS_REQUEST);
        // 	this.dsList.setColumn(0, "DT_PUNISH",  this.getOwnerFrame().DT_PUNISH);
        // 	this.dsList.setColumn(0, "RM_REMARK", this.getOwnerFrame().RM_REMARK);

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

        	this.ccfCD_REQUEST = this.divData.form.ccfCD_REQUEST;
        	this.ctclDT_PUNISH = this.divData.form.ctclDT_PUNISH;
        	this.ctxtRM_REMARK = this.divData.form.ctxtRM_REMARK;
        	this.ccfCD_VENDOR = this.divData.form.ccfCD_VENDOR;

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

        	this.dsInsert = new Dataset();
        	this.dsInsert.addColumn("CD_VENDOR", "string");
        	this.dsInsert.addColumn("DT_PUNISH", "string");
        	this.dsInsert.addColumn("CD_REQUEST", "string");
        	this.dsInsert.addColumn("RM_REMARK", "string");
        	this.dsInsert.addColumn("ID_SABUN", "string");
        	this.dsInsert.addColumn("CD_DEPT", "string");
        	this.dsInsert.addColumn("DS_DEPT", "string");

        }

        /************************************************************************
         * 컨트롤 이벤트
         ************************************************************************/

         /*
         *	입력 버튼
         */
        this.fnAdd = function() {


        }

         /*
         *	저장 버튼
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
        	//this.gfnExcelExport(this.dxGrid);
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
        		this.dsInsert.clearData();

        		var nrow = this.dsInsert.addRow();

        		this.dsInsert.setColumn(nrow, "CD_VENDOR", this.dsList.getColumn(0, "CD_VENDOR"));
        		this.dsInsert.setColumn(nrow, "DT_PUNISH", this.dsList.getColumn(0, "DT_PUNISH"));
        		this.dsInsert.setColumn(nrow, "CD_REQUEST", this.dsList.getColumn(0, "CD_REQUEST"));
        		this.dsInsert.setColumn(nrow, "RM_REMARK", this.dsList.getColumn(0, "RM_REMARK"));
        		this.dsInsert.setColumn(nrow, "ID_SABUN", this.AuthClient.ID_USER);
        		this.dsInsert.setColumn(nrow, "CD_DEPT", this.AuthClient.CD_DEPT);
        		this.dsInsert.setColumn(nrow, "DS_DEPT", this.AuthClient.DS_DEPT);

        		if (this.dsInsert.rowcount == 0) return;

        		var strSvcId    = "save";
        		var strSvcType  = "save";
        		var inProc		= "_dsProc";
        		var inData      = "insert=dsInsert";
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
            this.divData.form.staBg3.addEventHandler("onclick",this.divData_staBg3_onclick,this);
            this.divData.form.btnSave.addEventHandler("onclick",this.divData_btnSave_onclick,this);
            this.divData.form.btnCancel.addEventHandler("onclick",this.divData_btnCancel_onclick,this);
            this.dsList.addEventHandler("onvaluechanged",this.dsData_onvaluechanged,this);
        };
        this.loadIncludeScript("DMZ_PUNISH_DLG_REG.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
