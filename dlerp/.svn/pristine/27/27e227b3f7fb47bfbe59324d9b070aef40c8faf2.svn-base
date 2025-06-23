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
                this._setFormPosition(400,170);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("_dsProc", this);
            obj._setContents("<ColumnInfo><Column id=\"TARGET\" type=\"STRING\" size=\"256\"/><Column id=\"SP\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"TARGET\">approve_ok</Col><Col id=\"SP\">DCBPR_PREORDERPLAN_APPROVE_OK</Col></Row><Row><Col id=\"SP\">DCBPR_PREORDERPLAN_APPROVE_CANCEL</Col><Col id=\"TARGET\">approve_cancel</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsTY_APPROVAL", this);
            obj._setContents("<ColumnInfo><Column id=\"CODE\" type=\"STRING\" size=\"256\"/><Column id=\"VALUE\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"CODE\">2</Col><Col id=\"VALUE\">승인</Col></Row><Row><Col id=\"CODE\">3</Col><Col id=\"VALUE\">반려</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsData", this);
            obj._setContents("<ColumnInfo><Column id=\"CD_SITE\" type=\"STRING\" size=\"256\"/><Column id=\"DS_SITE\" type=\"STRING\" size=\"256\"/><Column id=\"NO_BID\" type=\"STRING\" size=\"256\"/><Column id=\"DS_SUBCON\" type=\"STRING\" size=\"256\"/><Column id=\"TY_COSMI\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"CD_SITE\"/><Col id=\"DS_SITE\"/><Col id=\"NO_BID\"/><Col id=\"DS_SUBCON\"/><Col id=\"TY_COSMI\">2</Col></Row></Rows>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Div("divData","0","0",null,null,"0","0",null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_cssclass("div_DATA_Bg");
            obj.set_text("");
            this.addChild(obj.name, obj);

            obj = new Static("staTITLE","0","0","100%","30",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("0");
            obj.set_text("접수확인");
            obj.set_cssclass("sta_TITLE_Bg");
            obj.set_textAlign("left");
            this.divData.addChild(obj.name, obj);

            obj = new Static("staCD_SITE","0","staTITLE:5","97","30",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("1");
            obj.set_text("현장코드");
            obj.set_cssclass("sta_WF_tablelabel");
            obj.set_textAlign("right");
            this.divData.addChild(obj.name, obj);

            obj = new Static("staNO_BID","0","staCD_SITE:-1","97","30",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("3");
            obj.set_text("발주의뢰번호");
            obj.set_cssclass("sta_WF_tablelabel");
            obj.set_textAlign("right");
            this.divData.addChild(obj.name, obj);

            obj = new Static("staDS_SUBCON","0","staNO_BID:-1","97","30",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("2");
            obj.set_text("입찰명");
            obj.set_cssclass("sta_WF_tablelabel");
            obj.set_textAlign("right");
            this.divData.addChild(obj.name, obj);

            obj = new Static("staBg1","staCD_SITE:-1","staTITLE:5",null,"30","0%",null,null,null,null,null,this.divData.form);
            obj.set_taborder("4");
            obj.set_cssclass("sta_WF_tablebg");
            this.divData.addChild(obj.name, obj);

            obj = new Static("staBg2","staNO_BID:-1","staBg1:-1",null,"30","0%",null,null,null,null,null,this.divData.form);
            obj.set_taborder("5");
            obj.set_cssclass("sta_WF_tablebg");
            obj.set_text("");
            this.divData.addChild(obj.name, obj);

            obj = new Static("staBg3","staDS_SUBCON:-1","staBg2:-1",null,"30","0%",null,null,null,null,null,this.divData.form);
            obj.set_taborder("6");
            obj.set_cssclass("sta_WF_tablebg");
            obj.set_text("");
            this.divData.addChild(obj.name, obj);

            obj = new Edit("edtCD_SITE","staCD_SITE:5","staTITLE:10",null,"20","160",null,null,null,null,null,this.divData.form);
            obj.set_taborder("7");
            obj.set_readonly("true");
            this.divData.addChild(obj.name, obj);

            obj = new Edit("edtDS_SITE","edtCD_SITE:3","staTITLE:10",null,"20","5",null,null,null,null,null,this.divData.form);
            obj.set_taborder("11");
            obj.set_readonly("true");
            this.divData.addChild(obj.name, obj);

            obj = new Edit("edtNO_BID","staNO_BID:5","edtCD_SITE:9",null,"20","5",null,null,null,null,null,this.divData.form);
            obj.set_taborder("8");
            obj.set_readonly("true");
            this.divData.addChild(obj.name, obj);

            obj = new Edit("edtDS_SUBCON","staDS_SUBCON:5","edtNO_BID:9",null,"20","5",null,null,null,null,null,this.divData.form);
            obj.set_taborder("12");
            this.divData.addChild(obj.name, obj);

            obj = new Button("btnOk","34.25%","137","60","20",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("9");
            obj.set_text("확인");
            this.divData.addChild(obj.name, obj);

            obj = new Button("btnCancel","50.00%","137","60","20",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("10");
            obj.set_text("취소");
            this.divData.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this
            obj = new Layout("default","",this._adjust_width,this._adjust_height,this,function(p){});
            this.addLayout(obj.name, obj);
            
            // BindItem Information
            obj = new BindItem("item0","divData.form.edtCD_SITE","value","dsData","CD_SITE");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item1","divData.form.edtDS_SITE","value","dsData","DS_SITE");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item2","divData.form.edtNO_BID","value","dsData","NO_BID");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item3","divData.form.edtDS_SUBCON","value","dsData","DS_SUBCON");
            this.addChild(obj.name, obj);
            obj.bind();
            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script
        this.registerScript("DCB_PREORDERPLANHQAPPRDLG.xfdl", function() {
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

        	// 이전화면에서 데이터 받기.
        	if(!this.gfnIsNull(this.getOwnerFrame().CD_SITE)) {

        		this.dsData.setColumn(0, "CD_SITE", this.getOwnerFrame().CD_SITE);
        		this.dsData.setColumn(0, "DS_SITE", this.getOwnerFrame().DS_SITE);
        		this.dsData.setColumn(0, "NO_BID", this.getOwnerFrame().NO_BID);
        		this.dsData.setColumn(0, "DS_SUBCON", this.getOwnerFrame().DS_SUBCON);
        	}
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

        	this.dsApprove = new Dataset();
        	this.dsApprove.addColumn("CD_SITE", "string");
        	this.dsApprove.addColumn("NO_BID", "string");
        	this.dsApprove.addColumn("ID_USER", "string");
        	this.dsApprove.addColumn("TY_COSMI", "string");
        	this.dsApprove.addColumn("DS_SUBCON", "string");
        }

        /************************************************************************
         * 컨트롤 이벤트
         ************************************************************************/

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
        	if (svcID == "approve") {
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

          // 라디오 버튼 설정
         this.fnSetRadio = function()
         {
        	// 라디오 값 세팅 및 폼 초기화
        	this.gfnSetFormStatus(this);
        	this.divData.form.resetScroll();

        	// 라디오 박스 초기값 설정.
        	this.divData.form.crdoTY_APPROVAL.set_value(this.dsData.getColumn(0, "TY_APPROVAL"));

         }

        // 확인 버튼 클릭
        this.divData_btnOk_onclick = function(obj,e)
        {
        	var strSvcId    = "";
        	var inData      = "";

        	this.dsApprove.clearData();
        	this.dsApprove.addRow();

        	this.dsApprove.setColumn(0, "CD_SITE", this.dsData.getColumn(0, "CD_SITE"));
        	this.dsApprove.setColumn(0, "NO_BID", this.dsData.getColumn(0, "NO_BID"));
        	this.dsApprove.setColumn(0, "DS_SUBCON", this.dsData.getColumn(0, "DS_SUBCON"));
        	this.dsApprove.setColumn(0, "ID_USER", this.AuthClient.ID_USER);

        	/*
        	if(this.divData.form.crdoTY_APPROVAL.value == "2") {

        		strSvcId    = "approve";
        		inData      = "approve_ok=dsApprove";

        	} else if(this.divData.form.crdoTY_APPROVAL.value == "3") {

        		this.dsApprove.setColumn(0, "TY_COSMI", "3");

        		strSvcId    = "approve";
        		inData      = "approve_cancel=dsApprove";
        	}
        	*/

        	strSvcId    = "approve";
        	inData      = "approve_ok=dsApprove";

        	if (this.dsApprove.rowcount == 0) return;

        	var strSvcType  = "save";
        	var inProc		= "_dsProc";
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
        	this.getParentContext().close(false);
        };



        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.form_onload,this);
            this.divData.form.btnOk.addEventHandler("onclick",this.divData_btnOk_onclick,this);
            this.divData.form.btnCancel.addEventHandler("onclick",this.divData_btnCancel_onclick,this);
            this.dsData.addEventHandler("onvaluechanged",this.dsData_onvaluechanged,this);
        };
        this.loadIncludeScript("DCB_PREORDERPLANHQAPPRDLG.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
