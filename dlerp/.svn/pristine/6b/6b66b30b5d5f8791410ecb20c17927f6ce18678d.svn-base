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
            this.set_titletext("부서명칭변경");
            this.getSetter("maxwidth").set("440");
            this.getSetter("maxheight").set("290");
            if (Form == this.constructor)
            {
                this._setFormPosition(400,210);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("_dsProc", this);
            obj._setContents("<ColumnInfo><Column id=\"TARGET\" type=\"STRING\" size=\"256\"/><Column id=\"SP\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"TARGET\">update</Col><Col id=\"SP\">DAZPR_DEPTNAME_UPDATE</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsList", this);
            obj._setContents("<ColumnInfo><Column id=\"CD_DEPT\" type=\"STRING\" size=\"256\"/><Column id=\"DS_DEPT\" type=\"STRING\" size=\"256\"/><Column id=\"DS_DEPT_ENG\" type=\"STRING\" size=\"256\"/><Column id=\"DT_CHANGE\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"CD_DEPT\"/><Col id=\"DS_DEPT\"/><Col id=\"DS_DEPT_ENG\"/><Col id=\"DT_CHANGE\"/></Row></Rows>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Div("divData","0","0",null,null,"0","0",null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_cssclass("div_DATA_Bg");
            obj.set_text("");
            this.addChild(obj.name, obj);

            obj = new Static("staTitle","0","0","100%","30",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("0");
            obj.set_text("부서명칭개편");
            obj.set_cssclass("sta_TITLE_Bg");
            obj.set_textAlign("left");
            this.divData.addChild(obj.name, obj);

            obj = new Static("staCdDept","0","36","90","30",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("1");
            obj.set_text("부서코드");
            obj.set_textAlign("left");
            obj.set_cssclass("sta_WF_tablelabelE");
            this.divData.addChild(obj.name, obj);

            obj = new Static("staBgCdDept","staCdDept:-1","staCdDept:-30","110","30",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("2");
            obj.set_cssclass("sta_WF_tablebg");
            this.divData.addChild(obj.name, obj);

            obj = new Edit("txtCD_DEPT","staCdDept:5","staCdDept:-25","170","20",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("3");
            obj.set_readonly("true");
            obj.set_autoselect("true");
            obj.set_autoskip("true");
            this.divData.addChild(obj.name, obj);

            obj = new Static("staDsDept","0","staCdDept:-1","90","30",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("4");
            obj.set_text("부서명");
            obj.set_textAlign("left");
            obj.set_cssclass("sta_WF_tablelabelE");
            this.divData.addChild(obj.name, obj);

            obj = new Static("staBgDsDept","staDsDept:-1","staDsDept:-30","311","30",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("5");
            obj.set_cssclass("sta_WF_tablebg");
            this.divData.addChild(obj.name, obj);

            obj = new Edit("txtDS_DEPT","staDsDept:5","staDsDept:-25","301","20",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("6");
            this.divData.addChild(obj.name, obj);

            obj = new Static("staDsDeptE","0","staDsDept:-1","90","30",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("4");
            obj.set_text("부서명(영문)");
            obj.set_textAlign("left");
            obj.set_cssclass("sta_WF_tablelabel");
            this.divData.addChild(obj.name, obj);

            obj = new Static("staBgDsDeptE","staDsDeptE:-1","staDsDeptE:-30","311","30",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("5");
            obj.set_cssclass("sta_WF_tablebg");
            this.divData.addChild(obj.name, obj);

            obj = new Edit("txtDS_DEPT_ENG","staDsDeptE:5","staDsDeptE:-25","301","20",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("6");
            this.divData.addChild(obj.name, obj);

            obj = new Static("staDtChange","staBgCdDept:-1","staBgCdDept:-30","90","30",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("7");
            obj.set_text("변경일");
            obj.set_textAlign("left");
            obj.set_cssclass("sta_WF_tablelabelE");
            this.divData.addChild(obj.name, obj);

            obj = new Static("staBgDtChange","staDtChange:-1","staDtChange:-30","113","30",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("8");
            obj.set_cssclass("sta_WF_tablebg");
            this.divData.addChild(obj.name, obj);

            obj = new Calendar("tclDT_CHANGE","staDtChange:5","staDtChange:-25","104","20",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("9");
            obj.set_dateformat("yyyy-MM-dd");
            this.divData.addChild(obj.name, obj);

            obj = new Static("staTyGubun","0","staDsDeptE:10","100%","50",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("10");
            obj.set_text("개정된 부서명칭을 입력하세요.\r\n이전 명칭은 이력정보에서 확인할 수 있습니다.");
            obj.set_cssclass("sta_WF_notice");
            obj.set_textAlign("left");
            this.divData.addChild(obj.name, obj);

            obj = new Button("btnOk","32.50%","190","60","20",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("11");
            obj.set_text("확인");
            this.divData.addChild(obj.name, obj);

            obj = new Button("btnCancel","52.50%","190","60","20",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("12");
            obj.set_text("취소");
            this.divData.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this
            obj = new Layout("default","",this._adjust_width,this._adjust_height,this,function(p){});
            this.addLayout(obj.name, obj);
            
            // BindItem Information
            obj = new BindItem("item0","divData.form.txtCD_DEPT","value","dsList","CD_DEPT");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item1","divData.form.txtDS_DEPT","value","dsList","DS_DEPT");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item2","divData.form.txtDS_DEPT_ENG","value","dsList","DS_DEPT_ENG");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item3","divData.form.tclDT_CHANGE","value","dsList","DT_CHANGE");
            this.addChild(obj.name, obj);
            obj.bind();
            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script
        this.registerScript("DAZ_DEPTDLG.xfdl", function() {
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

        	var frame = this.getOwnerFrame();

        	if(!this.gfnIsNull(frame.CD_DEPT)) {
        		this.dsList.setColumn(0, "CD_DEPT", frame.CD_DEPT);
        		this.dsList.setColumn(0, "DS_DEPT", frame.DS_DEPT);
        		this.dsList.setColumn(0, "DS_DEPT_ENG", frame.DS_DEPT_ENG);
        	}

        	var today = this.gfnGetDate();
        	this.dsList.setColumn(0, "DT_CHANGE", today);
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
        	this.txtCD_DEPT = this.divData.form.txtCD_DEPT;		// 부서코드
        	this.txtDS_DEPT = this.divData.form.txtDS_DEPT;		// 부서명
        	this.txtDS_DEPT_ENG = this.divData.form.txtDS_DEPT_ENG;		// 부서명(영문)
        	this.tclDT_CHANGE = this.divData.form.tclDT_CHANGE;	// 변경일

        	this.grSearch = this.FormInfo.GR_SEARCH;			// 권한
        	this.cdGroup = this.AuthClient.CD_GROUP;			// 그룹코드
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
        	this.dsUpdate = new Dataset();
        	this.dsUpdate.addColumn("CD_CORP", "string");
        	this.dsUpdate.addColumn("CD_DEPT", "string");
        	this.dsUpdate.addColumn("DS_DEPT", "string");
        	this.dsUpdate.addColumn("DS_DEPT_ENG", "string");
        	this.dsUpdate.addColumn("DT_CHANGE", "string");
        	this.dsUpdate.addColumn("ID_UPDATE", "string");
        }

        /************************************************************************
         * 컨트롤 이벤트
         ************************************************************************/
        /************************************************************************
         * Validate
         ************************************************************************/
        this.fnSelectValidate = function() {

        	var validate = true;

        	//부서코드
        	if (this.gfnIsNull(this.dsList.getColumn(0,"CD_DEPT"))) {
        		validate = false;
        		this.fnVaidateCallback = function() {
        			this.txtCD_DEPT.setFocus();
        		}
        		this.gfnAlert("부서코드를 입력하세요.");
        		return validate;
        	}

        	//부서명
        	if (this.gfnIsNull(this.dsList.getColumn(0,"DS_DEPT"))) {
        		validate = false;
        		this.fnVaidateCallback = function() {
        			this.txtDS_DEPT.setFocus();
        		}
        		this.gfnAlert("부서명을 입력하세요.", "fnVaidateCallback");
        		return validate;
        	}

        	//변경일
        	if (this.gfnIsNull(this.dsList.getColumn(0,"DT_CHANGE"))) {
        		validate = false;
        		this.fnVaidateCallback = function() {
        			this.tclDT_CHANGE.setFocus();
        		}
        		this.gfnAlert("변경일을 입력하세요.");
        		return false;
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
        	if(svcID == "select") {
        		//this.gfnGridAfterSelect(this.dxGrid);
        	}
        	else if(svcID == "update") {
        		if (errorCode == 0) {
        			this.fnClose = function() {
        				this.getParentContext().close(true);
        			}
        			this.gfnAlert("부서명칭 개편작업이 완료되었습니다.", "fnClose");
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
        	if (!this.fnSelectValidate()) return false;

        	this.dsUpdate.clearData();
        	var nrow = this.dsUpdate.addRow();
        	this.dsUpdate.setColumn(nrow, "CD_CORP", this.getOwnerFrame().CD_CORP);
        	this.dsUpdate.setColumn(nrow, "CD_DEPT", this.dsList.getColumn(0, "CD_DEPT"));
        	this.dsUpdate.setColumn(nrow, "DS_DEPT", this.dsList.getColumn(0, "DS_DEPT"));
        	this.dsUpdate.setColumn(nrow, "DS_DEPT_ENG", this.dsList.getColumn(0, "DS_DEPT_ENG"));
        	this.dsUpdate.setColumn(nrow, "DT_CHANGE", this.dsList.getColumn(0, "DT_CHANGE"));
        	this.dsUpdate.setColumn(nrow, "ID_UPDATE", this.AuthClient.ID_USER);

        	var strSvcId    = "update";
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
        						strArg, 			// 입력갑스로 보낼 arguments, strFormData="20120607"
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
            this.dsList.addEventHandler("onvaluechanged",this.dsList_onvaluechanged,this);
        };
        this.loadIncludeScript("DAZ_DEPTDLG.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
