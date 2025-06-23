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
                this._setFormPosition(400,190);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("_dsProc", this);
            obj._setContents("<ColumnInfo><Column id=\"TARGET\" type=\"STRING\" size=\"256\"/><Column id=\"SP\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"SP\">DCZPR_MDM_ERP_VENDOR_INFO_MIGRATION</Col><Col id=\"TARGET\">save</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsData", this);
            obj._setContents("<ColumnInfo><Column id=\"TY_GUBUN\" type=\"STRING\" size=\"256\"/><Column id=\"MDM_CD_VENDOR\" type=\"STRING\" size=\"256\"/><Column id=\"MDM_DS_VENDOR\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"TY_GUBUN\">C</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsList", this);
            obj._setContents("");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsTY_GUBUN", this);
            obj._setContents("<ColumnInfo><Column id=\"CD_CODE\" type=\"STRING\" size=\"256\"/><Column id=\"DS_CODE\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"CD_CODE\">C</Col><Col id=\"DS_CODE\">외주</Col></Row><Row><Col id=\"CD_CODE\">M</Col><Col id=\"DS_CODE\">자재</Col></Row></Rows>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Div("divData","0","0",null,null,"0","0",null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_cssclass("div_DATA_Bg");
            obj.set_text("");
            this.addChild(obj.name, obj);

            obj = new Static("staTITLE","0","0","100%","45",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("0");
            obj.set_text("자재/외주 거래처이관");
            obj.set_cssclass("sta_TITLE_Bg");
            obj.set_textAlign("center");
            this.divData.addChild(obj.name, obj);

            obj = new Static("staMDM_CD_VENDOR","0","staTITLE:5","80","30",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("1");
            obj.set_text("거래처코드");
            obj.set_textAlign("right");
            obj.set_cssclass("sta_WF_tablelabelE");
            this.divData.addChild(obj.name, obj);

            obj = new Static("staTY_GUBUN","0","staMDM_CD_VENDOR:-1","80","30",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("4");
            obj.set_text("구분");
            obj.set_textAlign("right");
            obj.set_cssclass("sta_WF_tablelabelE");
            this.divData.addChild(obj.name, obj);

            obj = new Static("staBgMDM_CD_VENDOR","staTY_GUBUN:-1","staTITLE:5",null,"30","0",null,null,null,null,null,this.divData.form);
            obj.set_taborder("2");
            obj.set_cssclass("sta_WF_tablebg");
            this.divData.addChild(obj.name, obj);

            obj = new Static("staBgTY_GUBUN","staTY_GUBUN:-1","staBgMDM_CD_VENDOR:-1",null,"30","0",null,null,null,null,null,this.divData.form);
            obj.set_taborder("5");
            obj.set_cssclass("sta_WF_tablebg");
            this.divData.addChild(obj.name, obj);

            obj = new Edit("ctxtMDM_CD_VENDOR","staMDM_CD_VENDOR:5","staTITLE:10","100","20",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("1");
            obj.set_value("");
            obj.set_readonly("true");
            this.divData.addChild(obj.name, obj);

            obj = new Edit("ctxtMDM_DS_VENDOR","ctxtMDM_CD_VENDOR:3","staTITLE:10",null,"20","5",null,null,null,null,null,this.divData.form);
            obj.set_taborder("1");
            obj.set_value("");
            obj.set_readonly("true");
            this.divData.addChild(obj.name, obj);

            obj = new Combo("ccboTY_GUBUN","staTY_GUBUN:5","ctxtMDM_CD_VENDOR:9",null,"20","5",null,null,null,null,null,this.divData.form);
            obj.set_taborder("6");
            obj.set_innerdataset("dsTY_GUBUN");
            obj.set_codecolumn("CD_CODE");
            obj.set_datacolumn("DS_CODE");
            this.divData.addChild(obj.name, obj);

            obj = new Button("btnOk","30%","staTY_GUBUN:20","60","20",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("4");
            obj.set_text("확인");
            this.divData.addChild(obj.name, obj);

            obj = new Button("btnCancel","55%","staTY_GUBUN:20","60","20",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("5");
            obj.set_text("취소");
            this.divData.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this
            obj = new Layout("default","",this._adjust_width,this._adjust_height,this,function(p){});
            this.addLayout(obj.name, obj);
            
            // BindItem Information
            obj = new BindItem("item0","divData.form.ccboTY_GUBUN","value","dsData","TY_GUBUN");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item1","divData.form.ctxtMDM_CD_VENDOR","value","dsData","MDM_CD_VENDOR");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item2","divData.form.ctxtMDM_DS_VENDOR","value","dsData","MDM_DS_VENDOR");
            this.addChild(obj.name, obj);
            obj.bind();
            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script
        this.registerScript("DQD_VENDOR_DCDM.xfdl", function() {
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
        	this.dsData.setColumn(0, "MDM_CD_VENDOR", this.getOwnerFrame().MDM_CD_VENDOR);
        	this.dsData.setColumn(0, "MDM_DS_VENDOR", this.getOwnerFrame().MDM_DS_VENDOR);
        	this.FormBtns.Select.click();
        };

        /************************************************************************
         * 버튼 설정 : 화면(Tab) 전환시 마다 호출
         * 서브버튼 사용 및 공통버튼 강제 제어시 여기서 처리
         ************************************************************************/
        this.fnSetButton = function() {
        	//this.FormBtns.Select.set_enable(false);
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
        	this.dsSave = new Dataset();
        	this.dsSave.addColumn("TY_RANGE", "string");
        	this.dsSave.addColumn("YN_UPDATE", "string");
        	this.dsSave.addColumn("CD_VENDOR", "string");
        	this.dsSave.addColumn("YR_REGIST", "string");
        	this.dsSave.addColumn("NO_BID", "string");
        }

        /************************************************************************
         * 컨트롤 이벤트
         ************************************************************************/
          /*
          *	조회 버튼
          */
        this.fnSelect = function() {

        }

        /************************************************************************
         * Validate
         ************************************************************************/
        /*
         *	저장 Validate
         */
        this.fnSaveValidate = function() {
        	var validate = true;

        	if (this.gfnIsNull(this.dsData.getColumn(0,"TY_GUBUN"))) {
        		validate = false;
        		// Alert후 실행할 처리
        		this.fnVaidateCallback = function() {
        			this.divData.form.ccboTY_GUBUN.setFocus();
        		}
        		this.gfnAlert("구분은 반드시 입력 하셔야 합니다.", "fnVaidateCallback");
        	}

        	return validate;

        };
        /************************************************************************
         * 콜백 이벤트
         ************************************************************************/
        /*
         *	콜백 처리
         */
        this.fnCallback = function(svcID, errorCode, errorMsg)
        {
        	if(svcID == "save") {
        		if (errorCode == 0) {
        			this.fnCallback_callback = function()
        			{
        				this.getParentContext().close(true);
        			}

        			this.gfnAlert("거래처가 이관되었습니다.", "fnCallback_callback");
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

        /************************************************************************
         * 기타 이벤트
         ************************************************************************/
        // 확인 버튼 클릭
        this.divData_btnOk_onclick = function(obj,e)
        {
        	if(!this.fnSaveValidate()) return;

        	this.dsSave.clearData();

        	var nrow = this.dsSave.addRow();
        	this.dsSave.setColumn(nrow, "TY_RANGE", this.dsData.getColumn(0, "TY_GUBUN"));
        	this.dsSave.setColumn(nrow, "YN_UPDATE", "Y");
        	this.dsSave.setColumn(nrow, "CD_VENDOR", this.dsData.getColumn(0, "MDM_CD_VENDOR"));
        	this.dsSave.setColumn(nrow, "YR_REGIST", "");
        	this.dsSave.setColumn(nrow, "NO_BID", "");

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
            this.divData.form.btnOk.addEventHandler("onclick",this.divData_btnOk_onclick,this);
            this.divData.form.btnCancel.addEventHandler("onclick",this.divData_btnCancel_onclick,this);
        };
        this.loadIncludeScript("DQD_VENDOR_DCDM.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
