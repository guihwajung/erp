(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("DAW_RETIRE_REQUEST");
            this.set_titletext("고용관계종료확인서");
            this.set_scrolltype("both");
            this.getSetter("maxheight").set("474");
            this.getSetter("maxwidth").set("735");
            if (Form == this.constructor)
            {
                this._setFormPosition(694,400);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize

            
            // UI Components Initialize
            obj = new Div("divData","0","0",null,null,"0","0",null,null,null,null,this);
            obj.set_taborder("9");
            obj.set_cssclass("div_DATA_Bg");
            this.addChild(obj.name, obj);

            obj = new Static("staDesc01","69","10","50","60",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("0");
            obj.set_text("본인은 ");
            obj.set_cssclass("sta_WF_noticeTit01");
            this.divData.addChild(obj.name, obj);

            obj = new Static("staDesc03","28","140","205","23",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("1");
            obj.set_text(" 사직서에 기재한 사직일 이후 ");
            obj.set_font("14px/1.5 \"Malgun Gothic\"");
            obj.set_cssclass("sta_WF_noticeTxt01");
            this.divData.addChild(obj.name, obj);

            obj = new Static("sta00_01","312","80","70","30",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("2");
            obj.set_text("◀ 아 래 ▶");
            obj.set_cssclass("ta_WF_tablelabelY");
            this.divData.addChild(obj.name, obj);

            obj = new Static("sta01",null,"263","273","114","27",null,null,null,null,null,this.divData.form);
            obj.set_taborder("3");
            obj.set_cssclass("sta_WF_noticeBox01");
            this.divData.addChild(obj.name, obj);

            obj = new Static("staCdCorp00_00_00",null,"309","36","22","254",null,null,null,null,null,this.divData.form);
            obj.set_taborder("4");
            obj.set_text("서약자");
            obj.set_cssclass("sta_WF_bold");
            this.divData.addChild(obj.name, obj);

            obj = new Edit("edtName",null,"308","108","24","108",null,null,null,null,null,this.divData.form);
            obj.set_taborder("5");
            obj.set_readonly("true");
            obj.set_value("홍 길동");
            obj.set_text("홍 길동");
            this.divData.addChild(obj.name, obj);

            obj = new Static("staCdCorp00_00_00_00",null,"339","209","22","81",null,null,null,null,null,this.divData.form);
            obj.set_taborder("6");
            obj.set_text("(생년월일 :                                 )");
            obj.set_cssclass("ta_WF_tablelabelY");
            this.divData.addChild(obj.name, obj);

            obj = new Static("staDate",null,"277","188","22","102",null,null,null,null,null,this.divData.form);
            obj.set_taborder("7");
            obj.set_text("2021년 12월 22일");
            obj.set_cssclass("sta_WF_bold");
            this.divData.addChild(obj.name, obj);

            obj = new Button("btnConform",null,"339","52","24","32",null,null,null,null,null,this.divData.form);
            obj.set_taborder("8");
            obj.set_text("확인");
            this.divData.addChild(obj.name, obj);

            obj = new Calendar("ctclBdate",null,"340","105","20","111",null,null,null,null,null,this.divData.form);
            obj.set_taborder("9");
            obj.set_dateformat("yyyy-MM-dd");
            obj.set_editformat("yyyyMMdd");
            obj.set_autoselect("true");
            obj.set_enable("true");
            obj.set_readonly("true");
            this.divData.addChild(obj.name, obj);

            obj = new Static("staDsCorp","staDesc01:0","10","123","60",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("10");
            obj.set_cssclass("sta_WF_noticeTit01");
            this.divData.addChild(obj.name, obj);

            obj = new Static("staDesc02","staDsCorp:0","10","362","60",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("11");
            obj.set_text("에서 퇴사하면서 아래사항을 준수할 것을 서약합니다.");
            obj.set_cssclass("sta_WF_noticeTit01");
            this.divData.addChild(obj.name, obj);

            obj = new Static("staDesc05","28","161","638","46",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("12");
            obj.set_text("퇴직금을 수령함으로써 임금, 성과금, 수당 등 모든 금품 관계가 청산되었음을 확인합니다.\r\n향후 이로 인해 민·형사·행정상 어떠한 이의제기도 하지 않음을 서약합니다.");
            obj.set_font("14px/1.5 \"Malgun Gothic\"");
            obj.set_cssclass("sta_WF_noticeTxt01");
            this.divData.addChild(obj.name, obj);

            obj = new Static("staDsCorp2","staDesc03:0","140","90","23",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("13");
            obj.set_text("CARBONCO");
            obj.set_font("14px/1.5 \"Malgun Gothic\"");
            obj.set_cssclass("sta_WF_noticeTxt01");
            this.divData.addChild(obj.name, obj);

            obj = new Static("staDesc04","staDsCorp2:3","140","332","23",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("14");
            obj.set_text("과(와)의 모든 근로관계가 종료되었을음 확인하며");
            obj.set_font("14px/1.5 \"Malgun Gothic\"");
            obj.set_cssclass("sta_WF_noticeTxt01");
            this.divData.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this
            obj = new Layout("default","",this._adjust_width,this._adjust_height,this,function(p){});
            this.addLayout(obj.name, obj);
            
            // BindItem Information

            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script
        this.registerScript("DAW_TERMINATION_EMPLOYMENT.xfdl", function() {
        /**  ③	AuthClient 사용자정보 ***
        this.AuthClient.ID_USER	: 사용자 ID
        this.AuthClient.DS_HNAME	: 사용자 이름
        this.AuthClient.CD_DEPT	: 사용자 부서코드
        this.AuthClient.DS_DEPT	: 사용자 부서명칭
        this.AuthClient.CD_CORP	: 사용자 법인코드
        this.AuthClient.DS_CORP	: 사용자 법인명칭
        this.AuthClient.ID_SABUN	: 사용자 사번 **/

        this.objApp = this.gfnGetApplication();
        this.form_onload = function(obj,e)
        {
        	// -- 필수 -------------------//
        	this.gfnFormOnLoad(this);
        	this.gfnFormInfo(this);
        	// ---------------------------//
        	this.fnSetButton();			//버튼 공통 설정
        	this.fnSetExtendButton();	//화면별 버튼 id 설정
        	this.fnSetVariable();		//변수선언
        	this.fnSetEvent();			//이벤트 설정
        	this.fnSetParameter();		//파라미터 설정
        };

        /************************************************************************
         * 버튼 설정
         * 서브버튼 사용 처리. 공통 및 확장버튼 버튼관리화면에서 셋팅.
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
        	// 타화면에서 오픈시 넘어오는 파라미터 처리
        	var frame = this.getOwnerFrame();
        	// 법인명
        	this.divData.form.staDsCorp.set_text(frame.DsCorp );
        	this.divData.form.staDsCorp.set_fittocontents("width");
        	this.divData.form.staDesc02.set_left("staDsCorp:0");

        	this.divData.form.staDsCorp2.set_text(frame.DsCorp );
        	this.divData.form.staDsCorp2.set_fittocontents("width");
        	this.divData.form.staDesc04.set_left("staDsCorp2:3");

        	//서약자 셋팅
        	this.divData.form.edtName.set_value(frame.dsHname );

        	var date = this.gfnGetDate();
        	if( !this.gfnIsNull(frame.dtInformationSecurity) ){
        		date = frame.dtInformationSecurity;
        	}
        	if( !this.gfnIsNull(frame.dtBirthday) ){
        		this.divData.form.ctclBdate.set_value(frame.dtBirthday);
        	}
        	//일자 셋팅
        	var year = date.substr(0, 4);
        	var month = date.substr(4, 2);
        	var day = date.substr(6, 2);
        	this.divData.form.staDate.set_text( year + "년 " + month + "월 " + day + "일");
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

        /************************************************************************
         * 코드파인드 이벤트
         ************************************************************************/

        /************************************************************************
         * 그리드 이벤트
         ************************************************************************/

        /************************************************************************
         * 기타 이벤트
         ************************************************************************/

        //확인버튼 클릭
        this.divData_btnConform_onclick = function(obj,e)
        {
        	var bDate = this.divData.form.ctclBdate.value;


        	if (this.gfnIsNull(bDate)) {
        		this.divData.form.ctclBdate.setFocus();
        		this.gfnAlert("생년월일을 입력하세요.");
        		return false;
        	}
        	var param = {};
        	param.gubun = "Y";
        	param.bDate = bDate;

        	this.getParentContext().close(JSON.stringify(param));
        };

        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.form_onload,this);
            this.divData.form.btnConform.addEventHandler("onclick",this.divData_btnConform_onclick,this);
            this.divData.form.ctclBdate.addEventHandler("onchanged",this.divSearch_ctclDT_END_onchanged,this);
        };
        this.loadIncludeScript("DAW_TERMINATION_EMPLOYMENT.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
