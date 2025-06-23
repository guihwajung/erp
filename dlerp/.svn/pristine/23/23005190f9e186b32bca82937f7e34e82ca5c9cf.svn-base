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
            this.set_titletext("패스워드 초기화");
            this.set_cursor("auto");
            if (Form == this.constructor)
            {
                this._setFormPosition(390,170);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("dsSp", this);
            obj._setContents("");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsSearch", this);
            obj._setContents("<ColumnInfo><Column id=\"ID_SABUN\" type=\"STRING\" size=\"256\"/><Column id=\"MOBILE\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsUser", this);
            obj._setContents("<ColumnInfo><Column id=\"ID_SABUN\" type=\"STRING\" size=\"256\"/><Column id=\"MOBILE\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsUserInfo", this);
            obj._setContents("<ColumnInfo><Column id=\"ID_SABUN\" type=\"STRING\" size=\"256\"/><Column id=\"DS_HNAME\" type=\"STRING\" size=\"256\"/><Column id=\"MOBILE\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsAuthenticate", this);
            obj._setContents("<ColumnInfo><Column id=\"ID_SABUN\" type=\"STRING\" size=\"256\"/><Column id=\"DS_HNAME\" type=\"STRING\" size=\"256\"/><Column id=\"MOBILE\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsPassword", this);
            obj._setContents("<ColumnInfo><Column id=\"ID_SABUN\" type=\"STRING\" size=\"256\"/><Column id=\"DS_HNAME\" type=\"STRING\" size=\"256\"/><Column id=\"MOBILE\" type=\"STRING\" size=\"256\"/><Column id=\"AUTH\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Div("divData","0","0",null,null,"0","0",null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_text("div00");
            this.addChild(obj.name, obj);

            obj = new Static("staTitle","0","0",null,"30","0",null,null,null,null,null,this.divData.form);
            obj.set_taborder("15");
            obj.set_text("비밀번호 초기화");
            obj.getSetter("uWord").set("popup.notice");
            obj.set_cssclass("sta_POP_Title");
            this.divData.addChild(obj.name, obj);

            obj = new Static("staID_USER","0","staTitle:0","105","34",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("0");
            obj.set_text("사번");
            obj.set_cssclass("sta_WF_tablelabelT");
            this.divData.addChild(obj.name, obj);

            obj = new Static("staID_USER_Bg","staID_USER:-1","staID_USER:-34",null,"34","0",null,null,null,null,null,this.divData.form);
            obj.set_taborder("2");
            obj.set_cssclass("sta_WF_tablebgT");
            this.divData.addChild(obj.name, obj);

            obj = new Edit("edtID_USER","staID_USER:5","staID_USER:-29","180","24",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("1");
            obj.set_maxlength("10");
            obj.set_inputfilter("none,comma,dot,sign,space,symbol");
            obj.set_displaynulltext("사번을 입력하세요.");
            this.divData.addChild(obj.name, obj);

            obj = new Button("btnLoadPhone",null,"edtID_USER:-24","90","24","5",null,null,null,null,null,this.divData.form);
            obj.set_taborder("4");
            obj.set_text("정보확인");
            obj.set_visible("true");
            this.divData.addChild(obj.name, obj);

            obj = new Static("staMOBILE","0","staID_USER:-1","105","34",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("0");
            obj.set_text("휴대폰");
            obj.set_cssclass("sta_WF_tablelabel");
            this.divData.addChild(obj.name, obj);

            obj = new Static("staMOBILE_Bg","staMOBILE:-1","staMOBILE:-34",null,"34","0",null,null,null,null,null,this.divData.form);
            obj.set_taborder("2");
            obj.set_cssclass("sta_WF_tablebg");
            this.divData.addChild(obj.name, obj);

            obj = new Edit("edtMOBILE","staMOBILE:5","staMOBILE:-29","180","24",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("1");
            obj.set_password("false");
            obj.set_readonly("false");
            obj.set_enable("true");
            obj.set_displaynulltext("숫자만 입력하세요.");
            obj.set_inputfilter("none,symbol,sign,space,dot,alpha,comma");
            obj.set_maxlength("11");
            this.divData.addChild(obj.name, obj);

            obj = new Button("btnAuthNumber",null,"staMOBILE:-29","90","24","5",null,null,null,null,null,this.divData.form);
            obj.set_taborder("4");
            obj.set_text("인증번호 발송");
            obj.set_visible("true");
            obj.set_enable("false");
            this.divData.addChild(obj.name, obj);

            obj = new Static("staAUTH_NUMBER","0","staMOBILE:-1","105","34",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("0");
            obj.set_text("인증확인");
            obj.set_cssclass("sta_WF_tablelabel");
            this.divData.addChild(obj.name, obj);

            obj = new Static("staAUTH_NUMBER_Bg","staAUTH_NUMBER:-1","staAUTH_NUMBER:-34",null,"34","0",null,null,null,null,null,this.divData.form);
            obj.set_taborder("2");
            obj.set_cssclass("sta_WF_tablebg");
            this.divData.addChild(obj.name, obj);

            obj = new Edit("edtAUTH_NUMBER","staAUTH_NUMBER:5","staAUTH_NUMBER:-29","145","24",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("1");
            obj.set_password("false");
            obj.set_enable("false");
            obj.set_inputfilter("none,alpha,comma,dot,sign,space,symbol");
            this.divData.addChild(obj.name, obj);

            obj = new Static("staTIME","260","102","30","22",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("14");
            obj.set_text("03:00");
            obj.set_textAlign("center");
            this.divData.addChild(obj.name, obj);

            obj = new Button("btnConfirm",null,"staAUTH_NUMBER:-29","90","24","5",null,null,null,null,null,this.divData.form);
            obj.set_taborder("4");
            obj.set_text("인증확인");
            obj.set_visible("true");
            obj.set_enable("false");
            this.divData.addChild(obj.name, obj);

            obj = new Button("btnClose",null,"136","90","24","5",null,null,null,null,null,this.divData.form);
            obj.set_taborder("13");
            obj.set_text("닫기");
            obj.set_visible("true");
            this.divData.addChild(obj.name, obj);

            obj = new Static("sta00","6","131","283","28",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("15");
            obj.set_text("\"정보확인\" 클릭 후 \"인증번호 발송\"으로 본인확인 후\r\n변경된 비밀번호가 전송됩니다.");
            obj.set_font("11px/normal \"Malgun Gothic\"");
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
        this.registerScript("DZZ_PASSWORD_RESET.xfdl", function() {
        this.objApp = this.gfnGetApplication();

        this.form_onload = function(obj, e) {
        	// -- 필수 -------------------//
        	//this.gfnFormOnLoad(this);
        	//this.gfnFormInfo(this);
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
        	this.edtID_USER     = this.divData.form.edtID_USER;
        	this.edtMOBILE      = this.divData.form.edtMOBILE;
        	this.edtAUTH_NUMBER = this.divData.form.edtAUTH_NUMBER;
        	this.staTIME        = this.divData.form.staTIME;

        	this.btnLoadPhone  = this.divData.form.btnLoadPhone;
        	this.btnAuthNumber = this.divData.form.btnAuthNumber;
        	this.btnConfirm    = this.divData.form.btnConfirm;
        	this.btnClose      = this.divData.form.btnClose;
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

        }

        /************************************************************************
         * 버튼 이벤트
         ************************************************************************/
        /*
         * 조회 버튼
         */
        this.fnSelect = function() {

        }

        /*
         * 입력 버튼
         */
        this.fnAdd = function() {

        }

        /*
         * 삭제 버튼
         */
        this.fnDel = function() {

        }

        /*
         * 저장 버튼
         */
        this.fnSave = function() {

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
        this.fnSelectValidate = function() {
        	return true;
        }

        /************************************************************************
         * 확장버튼 이벤트
         ************************************************************************/

        /************************************************************************
         * 콜백 이벤트
         ************************************************************************/
        /*
         * 기본 콜백
         */
        this.fnCallback = function(svcID, errorCode, errorMsg, strArg) {
        	if (errorCode != 0) {
        		this.gfnAlert(errorMsg);
        		return;
        	}

        	if (svcID == "user") {
        		if (this.dsUserInfo.rowcount == 0) {
        			this.gfnAlert('해당 사용자를 찾을 수 없습니다.');
        			return;
        		}

        		this.edtMOBILE.set_value(this.dsUserInfo.getColumn(0, "MOBILE"));
        		this.edtMOBILE.set_enable(false);
        		this.btnAuthNumber.set_enable(true);

        		this.gfnAlert('인증번호 발송 버튼을 누르면 인증번호가 발송됩니다.');
        	} else if (svcID == "authenticate") {
        		this.gfnAlert("인증번호가 전송되었습니다.", function() {
        			this.edtAUTH_NUMBER.set_enable(true);
        			this.countdown(this.staTIME, this.edtAUTH_NUMBER, 2, 59);
        			this.btnConfirm.set_enable(true);
        		})
        	} else if (svcID == "password") {
        		this.gfnAlert("변경된 패스워드가 전송되었습니다.", function() {
        			this.close();
        		})
        	}
        }

        /************************************************************************
         * 코드파인드 이벤트
         ************************************************************************/
        this.fnBeforeUserDataSetParam = function(id, dsUserParam, nrow) {
        	return true;
        }

        this.fnAfterCDTextChanged = function(id, codeFindData) {

        }

        /************************************************************************
         * 그리드 이벤트
         ************************************************************************/
        this.fnGridBeforeUserDataSetParam = function(id, dsUserParam, nrow) {
        	return true;
        }

        this.fnGridAfterCDTextChanged = function(id, codeFindData) {

        }

        /************************************************************************
         * 기타 이벤트
         ************************************************************************/
        // 정보확인 버튼 클릭 이벤트
        this.btnLoadPhone_onclick = function(obj, e) {
        	if (this.edtID_USER.value == undefined) {
        		this.gfnAlert("사번을 입력해주세요.");
        		return;
        	}

        	if (this.edtMOBILE.value == undefined) {
        		this.gfnAlert("등록된 휴대폰번로를 입력해주세요.");
        		return;
        	}

        	var dec_key = nexacro.getEnvironmentVariable("evKey");
        	var key = CryptoJS.enc.Hex.parse(dec_key.toString());

        	this.dsUser.clearData();
        	var nrow = this.dsUser.addRow();
        	this.dsUser.setColumn(nrow, "ID_SABUN", CryptoJS.AES.encrypt(this.edtID_USER.value.toUpperCase(), key, {iv:key}).toString());
        	this.dsUser.setColumn(nrow, "MOBILE", CryptoJS.AES.encrypt(this.edtMOBILE.value.toUpperCase(), key, {iv:key}).toString());

        	var strSvcId    = "user";
        	var strSvcType  = "user";
        	var inProc		= "";
        	var inData      = "dsUser=dsUser";
        	var outData     = "dsUserInfo=output0";
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

        // 인증번호발송 버튼 클릭 이벤트
        this.btnAuthNumber_onclick = function(obj, e) {
        	this.gfnConfirm('[' + this.edtMOBILE.value + ']으로 인증번호를 전송하시겠습니까?', function(svcId, isOk) {
        		if (isOk) {
        			var dec_key = nexacro.getEnvironmentVariable("evKey");
        			var key = CryptoJS.enc.Hex.parse(dec_key.toString());

        			this.dsAuthenticate.clearData();
        			var nrow = this.dsAuthenticate.addRow();
        			this.dsAuthenticate.setColumn(nrow, "ID_SABUN", CryptoJS.AES.encrypt(this.dsUserInfo.getColumn(0, "ID_SABUN"), key, {iv:key}).toString());
        			this.dsAuthenticate.setColumn(nrow, "DS_HNAME", CryptoJS.AES.encrypt(this.dsUserInfo.getColumn(0, "DS_HNAME"), key, {iv:key}).toString());
        			this.dsAuthenticate.setColumn(nrow, "MOBILE", CryptoJS.AES.encrypt(this.dsUserInfo.getColumn(0, "MOBILE"), key, {iv:key}).toString());

        			var strSvcId    = "authenticate";
        			var strSvcType  = "authenticate";
        			var inProc		= "";
        			var inData      = "dsAuthenticate=dsAuthenticate";
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
        	});
        }

        // 인증확인 버튼 클릭 이벤트
        this.btnConfirm_onclick = function(obj, e) {
        	this.gfnConfirm('인증번호를 전송하시겠습니까?', function(svcId, isOk) {
        		if (isOk) {
        			var dec_key = nexacro.getEnvironmentVariable("evKey");
        			var key = CryptoJS.enc.Hex.parse(dec_key.toString());

        			this.dsPassword.clearData();
        			var nrow = this.dsPassword.addRow();
        			this.dsPassword.setColumn(nrow, "ID_SABUN", CryptoJS.AES.encrypt(this.dsUserInfo.getColumn(0, "ID_SABUN").toUpperCase(), key, {iv:key}).toString());
        			this.dsPassword.setColumn(nrow, "DS_HNAME", CryptoJS.AES.encrypt(this.dsUserInfo.getColumn(0, "DS_HNAME"), key, {iv:key}).toString());
        			this.dsPassword.setColumn(nrow, "MOBILE", CryptoJS.AES.encrypt(this.dsUserInfo.getColumn(0, "MOBILE"), key, {iv:key}).toString());
        			this.dsPassword.setColumn(nrow, "AUTH", CryptoJS.AES.encrypt(this.edtAUTH_NUMBER.value, key, {iv:key}).toString());

        			var strSvcId    = "password";
        			var strSvcType  = "password";
        			var inProc		= "";
        			var inData      = "dsPassword=dsPassword";
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
        	});

        }

        // 닫기 버튼 클릭 이벤트
        this.btnClose_onclick = function(obj, e) {
        	this.close();
        }

        this.countdown = function(timer, input, minutes, seconds) {
            var time = minutes * 60 + seconds;
            var interval = setInterval(function() {
                if (time <= 0) {
                    clearInterval(interval);
        			input.set_enable(false);
                    return;
                }
                var minutes = Math.floor( time / 60 );
                if (minutes < 10) minutes = "0" + minutes;
                var seconds = time % 60;
                if (seconds < 10) seconds = "0" + seconds;
                var text = minutes + ':' + seconds;

        		timer.set_text(text);

                time--;
            }, 1000);
        }
        this.divData_sta00_onclick = function(obj,e)
        {

        };

        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.form_onload,this);
            this.addEventHandler("onbeforeclose",this.form_onbeforeclose,this);
            this.divData.form.btnLoadPhone.addEventHandler("onclick",this.btnLoadPhone_onclick,this);
            this.divData.form.btnAuthNumber.addEventHandler("onclick",this.btnAuthNumber_onclick,this);
            this.divData.form.btnConfirm.addEventHandler("onclick",this.btnConfirm_onclick,this);
            this.divData.form.btnClose.addEventHandler("onclick",this.btnClose_onclick,this);
            this.divData.form.sta00.addEventHandler("onclick",this.divData_sta00_onclick,this);
        };
        this.loadIncludeScript("DZZ_PASSWORD_RESET.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
