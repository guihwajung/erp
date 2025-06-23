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
            this.set_titletext("New Form");
            if (Form == this.constructor)
            {
                this._setFormPosition(880,500);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("_dsProc", this);
            obj._setContents("<ColumnInfo><Column id=\"TARGET\" type=\"STRING\" size=\"256\"/><Column id=\"SP\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"TARGET\">gubun</Col><Col id=\"SP\">DZZPR_BID_MAIL_SMS_REPLACE_SELECT</Col></Row><Row><Col id=\"SP\">DZZPR_SMS_SEND</Col><Col id=\"TARGET\">send</Col></Row><Row><Col id=\"TARGET\">combo</Col><Col id=\"SP\">DZXPR_COMBO_SELECT</Col></Row><Row><Col id=\"SP\">DZZPR_BID_MAIL_SMS_INFO_SELECT</Col><Col id=\"TARGET\">info</Col></Row><Row><Col id=\"TARGET\">save</Col><Col id=\"SP\">DZZPR_BID_MAIL_SMS_CHARGE_INFO_UPDATE</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsTY_GUBUN", this);
            obj._setContents("<ColumnInfo><Column id=\"CD_CODE\" type=\"STRING\" size=\"256\"/><Column id=\"DS_CODE\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsData", this);
            obj._setContents("<ColumnInfo><Column id=\"CONTENT\" type=\"STRING\" size=\"256\"/><Column id=\"TOMAIL\" type=\"STRING\" size=\"256\"/><Column id=\"TY_GUBUN\" type=\"STRING\" size=\"256\"/><Column id=\"NO_SEND\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row/></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsTEMPLATE", this);
            obj._setContents("<ColumnInfo><Column id=\"TEMPLATE\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row/></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsSearch", this);
            obj._setContents("<ColumnInfo><Column id=\"NO_BID\" type=\"STRING\" size=\"256\"/><Column id=\"CT_BID\" type=\"STRING\" size=\"256\"/><Column id=\"DT_BIDMAGAM\" type=\"STRING\" size=\"256\"/><Column id=\"DS_SUBCON\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row/></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsREPLACE", this);
            obj._setContents("");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsList", this);
            obj._setContents("");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Div("divData","0","0",null,null,"0","0",null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_cssclass("div_DATA_Bg");
            obj.set_text("");
            this.addChild(obj.name, obj);

            obj = new Static("staTopTITLE","0","0","100%","30",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("0");
            obj.set_text("SMS발송");
            obj.set_cssclass("sta_TITLE_Bg");
            obj.set_textAlign("center");
            this.divData.addChild(obj.name, obj);

            obj = new Div("divDataTop","0","staTopTITLE:5",null,"85","0",null,null,null,null,null,this.divData.form);
            obj.set_taborder("0");
            obj.set_cssclass("div_DATA_Bg");
            obj.set_text("");
            this.divData.addChild(obj.name, obj);

            obj = new Static("staNO_BID","0","0",null,"30","80%",null,null,null,null,null,this.divData.form.divDataTop.form);
            obj.set_taborder("1");
            obj.set_text("입찰번호");
            obj.set_cssclass("sta_WF_tablelabel");
            obj.set_textAlign("center");
            this.divData.form.divDataTop.addChild(obj.name, obj);

            obj = new Static("staDT_BIDMAGAM","0","staNO_BID:-1",null,"30","80%",null,null,null,null,null,this.divData.form.divDataTop.form);
            obj.set_taborder("2");
            obj.set_text("입찰마감일시");
            obj.set_cssclass("sta_WF_tablelabel");
            obj.set_textAlign("center");
            this.divData.form.divDataTop.addChild(obj.name, obj);

            obj = new Static("staBgNO_BID","staNO_BID:-1","0",null,"30","50%",null,null,null,null,null,this.divData.form.divDataTop.form);
            obj.set_taborder("3");
            obj.set_cssclass("sta_WF_tablebg");
            this.divData.form.divDataTop.addChild(obj.name, obj);

            obj = new Static("staBgDT_BIDMAGAM","staDT_BIDMAGAM:-1","staBgNO_BID:-1",null,"30","50%",null,null,null,null,null,this.divData.form.divDataTop.form);
            obj.set_taborder("4");
            obj.set_cssclass("sta_WF_tablebg");
            this.divData.form.divDataTop.addChild(obj.name, obj);

            obj = new Static("staCT_BID","staBgNO_BID:-1","0",null,"30","30%",null,null,null,null,null,this.divData.form.divDataTop.form);
            obj.set_taborder("5");
            obj.set_text("입찰차수");
            obj.set_cssclass("sta_WF_tablelabel");
            obj.set_textAlign("center");
            this.divData.form.divDataTop.addChild(obj.name, obj);

            obj = new Static("staDS_SUBCON","staBgNO_BID:-1","staCT_BID:-1",null,"30","30%",null,null,null,null,null,this.divData.form.divDataTop.form);
            obj.set_taborder("6");
            obj.set_text("현장");
            obj.set_cssclass("sta_WF_tablelabel");
            obj.set_textAlign("center");
            this.divData.form.divDataTop.addChild(obj.name, obj);

            obj = new Static("staBgCT_BID","staCT_BID:-1","0",null,"30","0",null,null,null,null,null,this.divData.form.divDataTop.form);
            obj.set_taborder("7");
            obj.set_cssclass("sta_WF_tablebg");
            this.divData.form.divDataTop.addChild(obj.name, obj);

            obj = new Static("staBgDS_SUBCON","staDS_SUBCON:-1","staBgCT_BID:-1",null,"30","0",null,null,null,null,null,this.divData.form.divDataTop.form);
            obj.set_taborder("8");
            obj.set_cssclass("sta_WF_tablebg");
            this.divData.form.divDataTop.addChild(obj.name, obj);

            obj = new Edit("ctxtNO_BID","staNO_BID:5","5",null,"20","staCT_BID:5",null,null,null,null,null,this.divData.form.divDataTop.form);
            obj.set_taborder("9");
            obj.set_value("");
            obj.set_readonly("true");
            this.divData.form.divDataTop.addChild(obj.name, obj);

            obj = new Edit("ctxtDT_BIDMAGAM","staDT_BIDMAGAM:5","ctxtNO_BID:9",null,"20","staDS_SUBCON:5",null,null,null,null,null,this.divData.form.divDataTop.form);
            obj.set_taborder("10");
            obj.set_value("");
            obj.set_readonly("true");
            this.divData.form.divDataTop.addChild(obj.name, obj);

            obj = new Edit("ctxtCT_BID","staCT_BID:5","5",null,"20","5",null,null,null,null,null,this.divData.form.divDataTop.form);
            obj.set_taborder("11");
            obj.set_value("");
            obj.set_readonly("true");
            this.divData.form.divDataTop.addChild(obj.name, obj);

            obj = new Edit("ctxtDS_SUBCON","staDS_SUBCON:5","ctxtCT_BID:9",null,"20","5",null,null,null,null,null,this.divData.form.divDataTop.form);
            obj.set_taborder("12");
            obj.set_value("");
            obj.set_readonly("true");
            this.divData.form.divDataTop.addChild(obj.name, obj);

            obj = new Div("divDataBottom","0","divDataTop:5",null,null,"0","0",null,null,null,null,this.divData.form);
            obj.set_taborder("0");
            obj.set_cssclass("div_DATA_Bg");
            obj.set_text("");
            this.divData.addChild(obj.name, obj);

            obj = new Div("divDataLeft","0","0","300",null,null,"0",null,null,null,null,this.divData.form.divDataBottom.form);
            obj.set_taborder("0");
            obj.set_cssclass("div_DATA_Bg");
            obj.set_text("");
            this.divData.form.divDataBottom.addChild(obj.name, obj);

            obj = new Static("staTY_GUBUN","0","0","87","30",null,null,null,null,null,null,this.divData.form.divDataBottom.form.divDataLeft.form);
            obj.set_taborder("1");
            obj.set_text("문구 항목");
            obj.set_cssclass("sta_WF_tablelabel");
            obj.set_textAlign("right");
            this.divData.form.divDataBottom.form.divDataLeft.addChild(obj.name, obj);

            obj = new Static("staCONTENT","0","staTY_GUBUN:-1","87","276",null,null,null,null,null,null,this.divData.form.divDataBottom.form.divDataLeft.form);
            obj.set_taborder("2");
            obj.set_text("내용");
            obj.set_cssclass("sta_WF_tablelabel");
            obj.set_textAlign("right");
            this.divData.form.divDataBottom.form.divDataLeft.addChild(obj.name, obj);

            obj = new Static("staSEND","0","staCONTENT:-1","87","31",null,null,null,null,null,null,this.divData.form.divDataBottom.form.divDataLeft.form);
            obj.set_taborder("3");
            obj.set_text("보내시는분");
            obj.set_cssclass("sta_WF_tablelabel");
            obj.set_textAlign("right");
            this.divData.form.divDataBottom.form.divDataLeft.addChild(obj.name, obj);

            obj = new Static("staBg2","staTY_GUBUN:-1","0",null,"30","0%",null,null,null,null,null,this.divData.form.divDataBottom.form.divDataLeft.form);
            obj.set_taborder("4");
            obj.set_cssclass("sta_WF_tablebg");
            this.divData.form.divDataBottom.form.divDataLeft.addChild(obj.name, obj);

            obj = new Static("staBg3","staCONTENT:-1","staBg2:-1",null,"276","0.00%",null,null,null,null,null,this.divData.form.divDataBottom.form.divDataLeft.form);
            obj.set_taborder("5");
            obj.set_cssclass("sta_WF_tablebg");
            this.divData.form.divDataBottom.form.divDataLeft.addChild(obj.name, obj);

            obj = new Static("staBgSEND","staSEND:-1","staBg3:-1",null,"31","0.00%",null,null,null,null,null,this.divData.form.divDataBottom.form.divDataLeft.form);
            obj.set_taborder("6");
            obj.set_cssclass("sta_WF_tablebg");
            this.divData.form.divDataBottom.form.divDataLeft.addChild(obj.name, obj);

            obj = new Combo("ccboTY_GUBUN","staTY_GUBUN:5","5",null,"20","5",null,null,null,null,null,this.divData.form.divDataBottom.form.divDataLeft.form);
            obj.set_taborder("7");
            obj.set_innerdataset("dsTY_GUBUN");
            obj.set_codecolumn("CD_CODE");
            obj.set_datacolumn("DS_CODE");
            this.divData.form.divDataBottom.form.divDataLeft.addChild(obj.name, obj);

            obj = new TextArea("ctxtCONTENT","staCONTENT:5","ccboTY_GUBUN:9",null,"266","5",null,null,null,null,null,this.divData.form.divDataBottom.form.divDataLeft.form);
            obj.set_taborder("8");
            obj.set_value("");
            obj.set_wordWrap("char");
            this.divData.form.divDataBottom.form.divDataLeft.addChild(obj.name, obj);

            obj = new Edit("ctxtSEND","staSEND:5","ctxtCONTENT:9",null,"20","5",null,null,null,null,null,this.divData.form.divDataBottom.form.divDataLeft.form);
            obj.set_taborder("9");
            obj.set_value("");
            this.divData.form.divDataBottom.form.divDataLeft.addChild(obj.name, obj);

            obj = new Button("btnOk",null,"staBgSEND:8","60","20","5",null,null,null,null,null,this.divData.form.divDataBottom.form.divDataLeft.form);
            obj.set_taborder("7");
            obj.set_text("확인");
            this.divData.form.divDataBottom.form.divDataLeft.addChild(obj.name, obj);

            obj = new Div("divDataRight","divDataLeft:5","0",null,null,"0","0",null,null,null,null,this.divData.form.divDataBottom.form);
            obj.set_taborder("0");
            obj.set_cssclass("div_DATA_Bg");
            obj.set_text("");
            this.divData.form.divDataBottom.addChild(obj.name, obj);

            obj = new Grid("objGrid","0","0",null,"335","0",null,null,null,null,null,this.divData.form.divDataBottom.form.divDataRight.form);
            obj.set_taborder("0");
            obj._setContents("");
            this.divData.form.divDataBottom.form.divDataRight.addChild(obj.name, obj);

            obj = new Button("btnSave","515","objGrid:8","60","20",null,null,null,null,null,null,this.divData.form.divDataBottom.form.divDataRight.form);
            obj.set_taborder("1");
            obj.set_text("저장");
            this.divData.form.divDataBottom.form.divDataRight.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this
            obj = new Layout("default","",this._adjust_width,this._adjust_height,this,function(p){});
            this.addLayout(obj.name, obj);
            
            // BindItem Information
            obj = new BindItem("item0","divData.form.divDataBottom.form.divDataLeft.form.ccboTY_GUBUN","value","dsData","TY_GUBUN");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item1","divData.form.divDataBottom.form.divDataLeft.form.ctxtCONTENT","value","dsData","CONTENT");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item2","divData.form.divDataTop.form.ctxtNO_BID","value","dsSearch","NO_BID");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item3","divData.form.divDataTop.form.ctxtCT_BID","value","dsSearch","CT_BID");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item4","divData.form.divDataTop.form.ctxtDT_BIDMAGAM","value","dsSearch","DT_BIDMAGAM");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item5","divData.form.divDataTop.form.ctxtDS_SUBCON","value","dsSearch","DS_SUBCON");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item6","divData.form.divDataBottom.form.divDataLeft.form.ctxtSEND","value","dsData","NO_SEND");
            this.addChild(obj.name, obj);
            obj.bind();
            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script
        this.registerScript("DCB_SMS_SENDER.xfdl", function() {
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

        	this.fnSetCombo();

        	if(!this.gfnIsNull(this.getOwnerFrame().NO_BID))
        	{
        		this.dsSearch.setColumn(0, "NO_BID", this.getOwnerFrame().NO_BID);

        		this.fnSelect();
        	}
        };

        /************************************************************************
         * 버튼 설정 : 화면(Tab) 전환시 마다 호출
         * 서브버튼 사용 및 공통버튼 강제 제어시 여기서 처리
         ************************************************************************/
        this.fnSetButton = function() {
        	this.FormBtns.Select.set_enable(false);
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
        	this.dxGrid = this.divData.form.divDataBottom.form.divDataRight.form.objGrid;
        };

        /************************************************************************
         * 이벤트 설정
         ************************************************************************/
        this.fnSetEvent = function() {
        	this.gfnGridInit(this.dxGrid, this.dsList, "DC", "DCB_BID_MAIL_SMS_VENDOR_LIST");

        	//this.dxGrid.EnterCell = "fnGrid_EnterCell";
        };

        /************************************************************************
         * 파라미터 설정
         ************************************************************************/
        this.fnSetParameter = function() {

        	this.dsSelect = new Dataset();
        	this.dsSelect.addColumn("NO_BID", "string");

        	this.dsCombo = new Dataset();
        	this.dsCombo.addColumn("CD_SYSTEM", "string");
        	this.dsCombo.addColumn("CD_TYPE", "string");

        	this.dsGubun = new Dataset();
        	this.dsGubun.addColumn("NO_BID", "string");
        	this.dsGubun.addColumn("TY_GUBUN", "string");
        	this.dsGubun.addColumn("CD_CODE", "string");

        	this.dsSend = new Dataset();
        	this.dsSend.addColumn("NO_SEND", "string");
        	this.dsSend.addColumn("NO_TO", "string");
        	this.dsSend.addColumn("DS_MESSAGE", "string");

        	this.dsSave = new Dataset();
        	this.dsSave.addColumn("CD_VENDOR", "string");
        	this.dsSave.addColumn("NO_HP_BID", "string");
        	this.dsSave.addColumn("DS_EM_BID", "string");

        }

        /************************************************************************
         * 컨트롤 이벤트
         ************************************************************************/
         this.fnSelect = function()
         {
        	this.dsSelect.clearData();
        	var nrow = this.dsSelect.addRow();

        	this.dsSelect.setColumn(nrow, "NO_BID", this.dsSearch.getColumn(0, "NO_BID"));

        	var strSvcId    = "select";
        	var strSvcType  = "grid";
        	var inProc		= "_dsProc";
        	var inData      = "info=dsSelect";
        	var outData     = "dsList=info0";
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
        	if (svcID == "send") {
        		if(errorCode == 0)
        		{
        			// this.close()가 작동하지 않았고,
        			// 부모의 callback 함수로 데이터를 넘겨주기 위해 작성되었습니다.
        			this.fnCallback_callback = function()
        			{
        				this.getParentContext().close(true);
        			}

        			this.gfnAlert("SMS 발송이 정상처리되었습니다.", "fnCallback_callback");
        		}else
        		{
        			this.gfnAlert(errorMsg);
        		}
        	}else if(svcID == "gubun") {
        		if(errorCode == 0)
        		{
        			this.dsData.setColumn(0, "CONTENT", this.dsTEMPLATE.getColumn(0, "TEMPLATE"));
        		}else
        		{
        			this.gfnAlert(errorMsg);
        		}
        	}else if(svcID == "select") {
        		if(this.dsList.rowcount > 0)
        		{
        			this.dsSearch.setColumn(0, "CT_BID", this.dsList.getColumn(0, "CT_BID"));
        			this.dsSearch.setColumn(0, "DT_BIDMAGAM", this.dsList.getColumn(0, "DT_BIDMAGAM"));
        			this.dsSearch.setColumn(0, "DS_SUBCON", this.dsList.getColumn(0, "DS_SUBCON"));
        		}
        	}
        	else if(svcID == "save") {
        		if (errorCode == 0) {
        			this.fnSelect();
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
        this.fnGrid_EnterCell = function(obj, row, cell) {
        	var colnm = this.gfnGridGetBindColumnNameByIndex(this.dxGrid, cell);

        	if(this.gfnIsNull(this.dsList.getColumn(row, "NO_HP_BID")))
        	{
        		return false;
        	}

        	return;
        }
        /************************************************************************
         * 기타 이벤트
         ************************************************************************/

        // 확인 버튼 클릭
        this.divData_btnOk_onclick = function(obj,e)
        {
        	this.fnSend();
        };

        this.fnSend = function()
        {
        	this.dsSend.clearData();

        	for(var i = 0 ; i < this.dsList.rowcount; i++)
        	{
        		if(this.dsList.getColumn(i, "CHK") == 1)
        		{
        			var nrow = this.dsSend.addRow();
        			this.dsSend.setColumn(nrow, "NO_SEND", this.dsData.getColumn(0, "NO_SEND"));
        			this.dsSend.setColumn(nrow, "NO_TO", this.dsList.getColumn(i, "NO_HP_BID"));
        			this.dsSend.setColumn(nrow, "DS_MESSAGE", this.dsData.getColumn(0, "CONTENT"));
        		}
        	}

        	var strSvcId    = "send";
        	var strSvcType  = "select";
        	var inProc		= "_dsProc";
        	var inData      = "send=dsSend";
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

        // 취소 버튼 클릭
        this.divData_btnCancel_onclick = function(obj,e)
        {
        	// this.close()가 작동하지 않았고,
        	// 부모의 callback 함수로 데이터를 넘겨주기 위해 작성되었습니다.
        	this.getParentContext().close(false);
        };

        this.fnSetCombo = function()
        {
        	this.dsCombo.clearData();
        	this.dsCombo.addRow();

        	this.dsCombo.setColumn(0, "CD_SYSTEM", "DC");
        	this.dsCombo.setColumn(0, "CD_TYPE", "CMS2");

        	var strSvcId    = "combo";
        	var strSvcType  = "select";
        	var inProc		= "_dsProc";
        	var inData      = "combo=dsCombo";
        	var outData     = "dsTY_GUBUN=combo0";
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

        this.fnGubun = function()
        {
        	this.dsGubun.clearData();
        	this.dsGubun.addRow();

        	this.dsGubun.setColumn(0, "NO_BID", this.dsSearch.getColumn(0, "NO_BID"));
        	this.dsGubun.setColumn(0, "TY_GUBUN", "S");
        	this.dsGubun.setColumn(0, "CD_CODE", this.dsData.getColumn(0, "TY_GUBUN"));

        	var strSvcId    = "gubun";
        	var strSvcType  = "select";
        	var inProc		= "_dsProc";
        	var inData      = "gubun=dsGubun";
        	var outData     = "dsTEMPLATE=gubun0";
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

        this.dsData_onvaluechanged = function(obj,e)
        {
        	if(e.columnid == "TY_GUBUN" && e.oldvalue != e.newvalue && !this.gfnIsNull(e.newvalue))
        	{
        		this.fnGubun();
        	}
        };

        this.divData_divDataBottom_divDataRight_btnSave_onclick = function(obj,e)
        {
        	// 그리드 필수항목 체크``
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
        				this.dsSave.setColumn(nrow, "CD_VENDOR", this.dsList.getColumn(i, "CD_VENDOR"));
        				this.dsSave.setColumn(nrow, "NO_HP_BID", this.dsList.getColumn(i, "NO_HP_BID"));
        				this.dsSave.setColumn(nrow, "DS_EM_BID", this.dsList.getColumn(i, "DS_EM_BID"));
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

        	this.gfnTransaction( strSvcId , 	// transaction을 구분하기 위한 svc id값
        						strSvcType , 	// transaction을 요청할 구분
        						inProc,			// Procedure 정보 Dataset 이름
        						inData , 		// 입력값으로 보낼 dataset id , a=b형태로 실제이름과 입력이름을 매칭
        						outData , 		// 처리결과값으로 받을 dataset id, a=b형태로 실제이름과 입력이름을 매칭
        						strArg, 			// 입력갑스로 보낼 arguments, strFormData="20120607"
        						callBackFnc); // 통신방법 정의 [생략가능]
        };

        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.form_onload,this);
            this.divData.form.divDataBottom.form.divDataLeft.form.btnOk.addEventHandler("onclick",this.divData_btnOk_onclick,this);
            this.divData.form.divDataBottom.form.divDataRight.form.btnSave.addEventHandler("onclick",this.divData_divDataBottom_divDataRight_btnSave_onclick,this);
            this.dsData.addEventHandler("onvaluechanged",this.dsData_onvaluechanged,this);
        };
        this.loadIncludeScript("DCB_SMS_SENDER.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
