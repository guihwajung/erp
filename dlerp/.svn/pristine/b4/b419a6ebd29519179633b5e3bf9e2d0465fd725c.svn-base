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
            this.set_titletext("휴가취소 신청");
            this.getSetter("maxheight").set("320");
            this.getSetter("maxwidth").set("408");
            if (Form == this.constructor)
            {
                this._setFormPosition(368,320);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("dsList", this);
            obj._setContents("<ColumnInfo><Column id=\"STATE\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row/></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("_dsProc", this);
            obj._setContents("<ColumnInfo><Column id=\"TARGET\" type=\"STRING\" size=\"256\"/><Column id=\"SP\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"TARGET\">exec</Col><Col id=\"SP\">DACPR_PERSONALVOCA_CNC_SAVE</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsSearch", this);
            obj._setContents("<ColumnInfo><Column id=\"CD_VACATION\" type=\"STRING\" size=\"256\"/><Column id=\"DS_VACATION\" type=\"STRING\" size=\"256\"/><Column id=\"DT_VACAFROM\" type=\"STRING\" size=\"256\"/><Column id=\"DT_VACATO\" type=\"STRING\" size=\"256\"/><Column id=\"CD_CORP\" type=\"STRING\" size=\"256\"/><Column id=\"ID_SABUN\" type=\"STRING\" size=\"256\"/><Column id=\"ID_PERSON\" type=\"STRING\" size=\"256\"/><Column id=\"NO_SEQ\" type=\"STRING\" size=\"256\"/><Column id=\"QN_MONTHLY\" type=\"STRING\" size=\"256\"/><Column id=\"DS_REMARK\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"CD_VACATION\"/></Row></Rows>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Div("divData","0","0",null,null,"0","0",null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_cssclass("div_DATA_Bg");
            obj.set_text("");
            this.addChild(obj.name, obj);

            obj = new Static("staTITLE","0","-5","100.00%","30",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("1");
            obj.set_text("휴가취소 신청");
            obj.set_cssclass("sta_TITLE_Bg");
            obj.set_textAlign("left");
            this.divData.addChild(obj.name, obj);

            obj = new Static("staTY_VACATION","0","staTITLE:0","80","30",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("2");
            obj.set_text("유형");
            obj.set_cssclass("sta_WF_tablelabelE");
            this.divData.addChild(obj.name, obj);

            obj = new Static("staTY_VACATION_bg","staTY_VACATION:-1","staTY_VACATION:-30","289","30",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("3");
            obj.set_cssclass("sta_WF_tablebg");
            this.divData.addChild(obj.name, obj);

            obj = new Div("cfCD_VACATION","staTY_VACATION:5","staTY_VACATION:-25","278","20",null,null,null,null,null,null,this.divData.form);
            obj.getSetter("CodeFindName").set("DAX_CFVACATION");
            obj.getSetter("CDTextWidth").set("40");
            obj.set_taborder("4");
            obj.set_url("cmm::cmmCodeFind.xfdl");
            obj.set_enable("false");
            this.divData.addChild(obj.name, obj);

            obj = new Static("stalDT_VACATION","0","staTY_VACATION:-1","80","30",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("5");
            obj.set_text("신청기간");
            obj.set_cssclass("sta_WF_tablelabelE");
            this.divData.addChild(obj.name, obj);

            obj = new Static("stalDT_VACATION_bg","stalDT_VACATION:-1","stalDT_VACATION:-30","289","30",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("6");
            obj.set_cssclass("sta_WF_tablebg");
            this.divData.addChild(obj.name, obj);

            obj = new Calendar("ctclDT_VACAFROM","stalDT_VACATION:5","stalDT_VACATION:-25","100","20",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("7");
            obj.set_dateformat("yyyy-MM-dd");
            obj.set_editformat("yyyyMMdd");
            obj.set_autoselect("true");
            obj.set_enable("false");
            this.divData.addChild(obj.name, obj);

            obj = new Static("staDT_ORD_TO","ctclDT_VACAFROM:0.0","stalDT_VACATION:-25","30.0","24.0",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("8");
            obj.set_text("~");
            obj.set_cssclass("sta_WF_AC");
            this.divData.addChild(obj.name, obj);

            obj = new Calendar("ctclDT_VACATO","staDT_ORD_TO:5","stalDT_VACATION:-25","100","20",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("9");
            obj.set_dateformat("yyyy-MM-dd");
            obj.set_editformat("yyyyMMdd");
            obj.set_autoselect("true");
            obj.set_enable("false");
            this.divData.addChild(obj.name, obj);

            obj = new Edit("txtCD_CORP","stalDT_VACATION:-10","stalDT_VACATION:-25","stalDT_VACATION:10","20",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("19");
            obj.set_readonly("false");
            obj.set_visible("false");
            obj.set_enable("false");
            this.divData.addChild(obj.name, obj);

            obj = new Edit("txtID_SABUN","stalDT_VACATION:-10","stalDT_VACATION:-25","stalDT_VACATION:10","20",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("19");
            obj.set_readonly("false");
            obj.set_visible("false");
            obj.set_enable("false");
            this.divData.addChild(obj.name, obj);

            obj = new Edit("txtID_PERSON","stalDT_VACATION:-10","stalDT_VACATION:-25","stalDT_VACATION:10","20",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("19");
            obj.set_readonly("false");
            obj.set_visible("false");
            obj.set_enable("false");
            this.divData.addChild(obj.name, obj);

            obj = new Edit("txtNO_SEQ","stalDT_VACATION:-10","stalDT_VACATION:-25","stalDT_VACATION:10","20",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("19");
            obj.set_readonly("false");
            obj.set_visible("false");
            obj.set_enable("false");
            this.divData.addChild(obj.name, obj);

            obj = new Static("staQN_MONTHLY","0","stalDT_VACATION:-1","80","30",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("12");
            obj.set_text("일수");
            obj.set_cssclass("sta_WF_tablelabel");
            this.divData.addChild(obj.name, obj);

            obj = new Static("staQN_MONTHLY_bg","staQN_MONTHLY:-1","staQN_MONTHLY:-30","289","30",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("5");
            obj.set_cssclass("sta_WF_tablebg");
            this.divData.addChild(obj.name, obj);

            obj = new Edit("txtQN_MONTHLY","staQN_MONTHLY:5","staQN_MONTHLY:-25","278","20",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("4");
            obj.set_readonly("false");
            obj.set_enable("false");
            this.divData.addChild(obj.name, obj);

            obj = new Static("staDS_REMARK","0","staQN_MONTHLY:-1","80","60",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("21");
            obj.set_text("취소사유");
            obj.set_cssclass("sta_WF_tablelabelE");
            obj.set_visible("true");
            this.divData.addChild(obj.name, obj);

            obj = new Static("staDS_REMARK_bg","staDS_REMARK:-1","staDS_REMARK:-60","289","60",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("24");
            obj.set_cssclass("sta_WF_tablebg");
            obj.set_visible("true");
            this.divData.addChild(obj.name, obj);

            obj = new TextArea("txtDS_REMARK","staDS_REMARK:4","staDS_REMARK:-54","278","47",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("10");
            this.divData.addChild(obj.name, obj);

            obj = new Static("txtDlgGroupText1","0","staDS_REMARK:5","368","20",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("6");
            obj.set_text(" ■ 취소신청 후 취소결재상신을 진행해주시기 바랍니다.");
            obj.set_background("#cfebeb");
            this.divData.addChild(obj.name, obj);

            obj = new Div("divBtns","110","txtDlgGroupText1:15","130","27",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("9");
            this.divData.addChild(obj.name, obj);

            obj = new Button("btnOK","0","0","60","27",null,null,null,null,null,null,this.divData.form.divBtns.form);
            obj.set_taborder("12");
            obj.set_text("취소신청");
            this.divData.form.divBtns.addChild(obj.name, obj);

            obj = new Button("btnCANCLE","btnOK:10","0","60","27",null,null,null,null,null,null,this.divData.form.divBtns.form);
            obj.set_taborder("13");
            obj.set_text("닫기");
            this.divData.form.divBtns.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this
            obj = new Layout("default","",this._adjust_width,this._adjust_height,this,function(p){});
            this.addLayout(obj.name, obj);
            
            // BindItem Information
            obj = new BindItem("item0","divData.form.cfCD_VACATION.form.CDTextBox","value","dsSearch","CD_VACATION");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item1","divData.form.cfCD_VACATION.form.DSTextBox","value","dsSearch","DS_VACATION");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item2","divData.form.ctclDT_VACAFROM.form.TextBox","value","dsSearch","DT_VACAFROM");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item3","divData.form.ctclDT_VACATO.form.TextBox","value","dsSearch","DT_VACATO");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item4","divData.form.txtCD_CORP","value","dsSearch","CD_CORP");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item5","divData.form.txtID_SABUN","value","dsSearch","ID_SABUN");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item6","divData.form.txtID_PERSON","value","dsSearch","ID_PERSON");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item7","divData.form.txtNO_SEQ","value","dsSearch","NO_SEQ");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item8","divData.form.txtQN_MONTHLY","value","dsSearch","QN_MONTHLY");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item9","divData.form.txtDS_REMARK","value","dsSearch","DS_REMARK");
            this.addChild(obj.name, obj);
            obj.bind();
            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {
            this._addPreloadList("fdl","cmm::cmmCodeFind.xfdl");
        };
        
        // User Script
        this.registerScript("DAC_PERSONALVOCA_CNC_DLG.xfdl", function() {
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
        	this.cfCD_VACATION      = this.divData.form.cfCD_VACATION;		// 휴가유형
        	this.ctclDT_VACAFROM    = this.divData.form.ctclDT_VACAFROM;	// 휴가시작일
        	this.ctclDT_VACATO     	= this.divData.form.ctclDT_VACATO;		// 휴가종료일
        	this.txtCD_CORP         = this.divData.form.txtCD_CORP;			// 법인코드
        	this.txtID_SABUN        = this.divData.form.txtID_SABUN;		// 성명
        	this.txtID_PERSON       = this.divData.form.txtID_PERSON;
        	this.txtNO_SEQ       	= this.divData.form.txtNO_SEQ;
        	this.txtQN_MONTHLY      = this.divData.form.txtQN_MONTHLY;		// 일수
        	this.txtDS_REMARK    	= this.divData.form.txtDS_REMARK;		// 휴가취소사유

        	this.txtDlgGroupText1 = this.divData.form.txtDlgGroupText1;
        }

        /************************************************************************
         * 이벤트 설정
         ************************************************************************/
        this.fnSetEvent = function() {

        }

        /************************************************************************
         * 파라미터 설정
         ************************************************************************/
        this.fnSetParameter = function() {
        	this.dsExec = new Dataset();
        	this.dsExec.addColumn("CD_CORP", "string");
        	this.dsExec.addColumn("ID_PERSON", "int");
        	this.dsExec.addColumn("NO_SEQ", "int");
        	this.dsExec.addColumn("ID_SABUN", "string");
        	this.dsExec.addColumn("DS_REMARK", "string");
        	this.dsExec.addColumn("GR_SEARCH", "string");
        	this.dsExec.addColumn("GR_CORP", "string");
        	this.dsExec.addColumn("ID_USER", "string");
        }

        /************************************************************************
         * 화면 및 검색영역 초기화
         ************************************************************************/
        this.fnInit = function() {
        	this.cfCD_VACATION.form.CDTextBox.set_value(this.getOwnerFrame().cdvacation); // 휴가유형
        	this.cfCD_VACATION.form.DSTextBox.set_value(this.getOwnerFrame().dsvacation);

        	this.ctclDT_VACAFROM.set_value(this.getOwnerFrame().vacafrom);
        	this.ctclDT_VACATO.set_value(this.getOwnerFrame().vacato);

        	this.dsSearch.setColumn(0, "DT_VACAFROM", this.getOwnerFrame().vacafrom);	// 휴가시작일
         	this.dsSearch.setColumn(0, "DT_VACATO", this.getOwnerFrame().vacato);		// 휴가종료일
        	this.dsSearch.setColumn(0, "CD_CORP", this.getOwnerFrame().cdcorp);			// 법인
        	this.dsSearch.setColumn(0, "ID_SABUN", this.getOwnerFrame().sabun);			// 성명
        	this.dsSearch.setColumn(0, "ID_PERSON", this.getOwnerFrame().idPerson);
        	this.dsSearch.setColumn(0, "NO_SEQ", this.getOwnerFrame().noseq);
        	this.dsSearch.setColumn(0, "QN_MONTHLY", this.getOwnerFrame().qnmonthly);	// 일수
        }

        /************************************************************************
         * 컨트롤 이벤트
         ************************************************************************/
         /************************************************************************
         * 콜백 이벤트
         ************************************************************************/
        /*
         *	콜백 처리
         */
        this.fnCallback = function(svcID, errorCode, errorMsg)
        {
        	if(svcID == "exec") {
        		if (errorCode == 0) {
        			this.fnWorkAfter = function() {
        				this.getParentContext().close(true);
        			}
        			this.gfnAlert("생성되었습니다. 취소결재상신을 진행해주세요.", "fnWorkAfter");
        		} else {
        			this.gfnAlert(errorMsg);
        		}
        	}
        };
        /************************************************************************
         * 기타 함수
         ************************************************************************/
        /************************************************************************
         * Validate
         ************************************************************************/
        /************************************************************************
         * 코드파인드 이벤트
         ************************************************************************/
        /************************************************************************
         * 확장버튼 이벤트
         ************************************************************************/
        // 확인
        this.btnOK_onclick = function(obj,e) {

        	if(this.gfnIsNull(this.dsSearch.getColumn(0, "DS_REMARK"))){
        		this.txtDS_REMARK.setFocus();
        		this.gfnAlert("휴가 취소 사유가 입력되지 않았습니다.");
        		return;
        	}

        	this.dsExec.clearData();
        	this.dsExec.addRow();
        	this.dsExec.setColumn(0, "CD_CORP"         , this.txtCD_CORP.value);
        	this.dsExec.setColumn(0, "ID_PERSON"       , this.txtID_PERSON.value);
        	this.dsExec.setColumn(0, "NO_SEQ"          , this.txtNO_SEQ.value);
        	this.dsExec.setColumn(0, "ID_SABUN"        , this.txtID_SABUN.value);
        	this.dsExec.setColumn(0, "DS_REMARK"   	   , this.txtDS_REMARK.value);
        	this.dsExec.setColumn(0, "GR_SEARCH"       , this.FormInfo.GR_SEARCH);
        	this.dsExec.setColumn(0, "GR_CORP"         , this.AuthClient.CD_CORP);
        	this.dsExec.setColumn(0, "ID_USER"         , this.AuthClient.ID_USER);

        	if (this.dsExec.rowcount == 0) return;

        	var strSvcId    = "exec";
        	var strSvcType  = "save";
        	var inProc		= "_dsProc";
        	var inData      = "exec=dsExec";
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

        // 취소 버튼
        this.btnCANCLE_onclick = function(obj, e) {
        	this.getParentContext().close(false);
        }

        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.form_onload,this);
            this.divData.form.txtCD_CORP.addEventHandler("onchanged",this.txtCD_COR_onchanged,this);
            this.divData.form.txtID_SABUN.addEventHandler("onchanged",this.txtID_SABUN_onchanged,this);
            this.divData.form.txtID_PERSON.addEventHandler("onchanged",this.txtID_PERSON_onchanged,this);
            this.divData.form.txtNO_SEQ.addEventHandler("onchanged",this.txtNO_SEQ_onchanged,this);
            this.divData.form.divBtns.form.btnOK.addEventHandler("onclick",this.btnOK_onclick,this);
            this.divData.form.divBtns.form.btnCANCLE.addEventHandler("onclick",this.btnCANCLE_onclick,this);
            this.dsSearch.addEventHandler("onvaluechanged",this.dsSearch_onvaluechanged,this);
        };
        this.loadIncludeScript("DAC_PERSONALVOCA_CNC_DLG.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
