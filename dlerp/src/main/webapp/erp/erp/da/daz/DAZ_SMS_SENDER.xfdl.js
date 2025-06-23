(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("DAJ_RTNG_SMS_DLG");
            this.set_titletext("평가진행 메시지 전송");
            this.getSetter("maxwidth").set("485");
            this.getSetter("maxheight").set("380");
            if (Form == this.constructor)
            {
                this._setFormPosition(442,297);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("dsSearch", this);
            obj._setContents("<ColumnInfo><Column id=\"DS_TITLE\" type=\"STRING\" size=\"256\"/><Column id=\"DS_MESSAGE\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row/></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("_dsProc", this);
            obj._setContents("<ColumnInfo><Column id=\"TARGET\" type=\"STRING\" size=\"256\"/><Column id=\"SP\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows/>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Div("divSearch","0","0","441","297",null,null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_text("");
            this.addChild(obj.name, obj);

            obj = new Static("staDS_TITLE","0","0","80","35",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("0");
            obj.set_text("타이틀");
            obj.set_visible("false");
            obj.set_cssclass("sta_WF_tablelabel");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("staDS_TITLE_bg","staDS_TITLE:-1","staDS_TITLE:-35","262","35",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("1");
            obj.set_cssclass("sta_WF_tablebg");
            obj.set_visible("false");
            obj.set_text("");
            this.divSearch.addChild(obj.name, obj);

            obj = new Edit("edtDS_TITLE","staDS_TITLE:5","staDS_TITLE:-30","252","24",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("6");
            obj.set_visible("false");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("staDS_MESSAGE","0","0","80","240",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("0");
            obj.set_text("메시지");
            obj.set_visible("true");
            obj.set_cssclass("sta_WF_tablelabelE");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("staDS_REM_bg","staDS_MESSAGE:-1","0","362","240",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("1");
            obj.set_text("[홍길동:010-1111-2222]");
            obj.set_cssclass("sta_WF_tablebg");
            obj.set_visible("true");
            obj.set_textAlign("left");
            obj.set_verticalAlign("top");
            this.divSearch.addChild(obj.name, obj);

            obj = new TextArea("txtDS_MESSAGE","staDS_MESSAGE:5","25","352","210",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("5");
            this.divSearch.addChild(obj.name, obj);

            obj = new Div("divBtns","155","staDS_MESSAGE:30","130","27",null,null,null,null,null,null,this.divSearch.form);
            obj.set_text("");
            this.divSearch.addChild(obj.name, obj);

            obj = new Button("btnSend","0","0","60","27",null,null,null,null,null,null,this.divSearch.form.divBtns.form);
            obj.set_taborder("1");
            obj.set_text("전송");
            this.divSearch.form.divBtns.addChild(obj.name, obj);

            obj = new Button("btnCancle","btnSend:10","0","60","27",null,null,null,null,null,null,this.divSearch.form.divBtns.form);
            obj.set_taborder("0");
            obj.set_text("취소");
            this.divSearch.form.divBtns.addChild(obj.name, obj);

            obj = new Button("btnClose","40","0","60","27",null,null,null,null,null,null,this.divSearch.form.divBtns.form);
            obj.set_taborder("2");
            obj.set_text("닫기");
            obj.set_tabstop("true");
            obj.set_visible("false");
            this.divSearch.form.divBtns.addChild(obj.name, obj);

            obj = new Static("staNotice1","0","staDS_MESSAGE:0","280","28",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("7");
            obj.set_text("※ 90바이트 이상의 긴 문자는 LMS로 전송됩니다.");
            obj.set_font("bold 12px/normal \"Malgun Gothic\"");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("staNotice2","13","staNotice1:-5","290","30",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("8");
            obj.set_text("LMS의 경우 타이틀이 없을 경우 \'제목없음\'으로\r\n문자가 전송됩니다.");
            obj.set_font("bold 12px/normal \"Malgun Gothic\"");
            obj.set_visible("false");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("staDS_MESSAGE_BYTE1","staNotice1:0","staDS_MESSAGE:0","8","28",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("33");
            obj.set_text("( ");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("staDS_MESSAGE_BYTE2","staDS_MESSAGE_BYTE1:0","staDS_MESSAGE:0","40","28",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("33");
            obj.set_text("00/90");
            obj.set_font("bold 12px/normal \"Malgun Gothic\"");
            obj.set_textAlign("center");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("staDS_MESSAGE_BYTE3","staDS_MESSAGE_BYTE2:0","staDS_MESSAGE:0","50","28",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("33");
            obj.set_text("byte )");
            this.divSearch.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this
            obj = new Layout("default","",this._adjust_width,this._adjust_height,this,function(p){});
            this.addLayout(obj.name, obj);
            
            // BindItem Information
            obj = new BindItem("item0","divSearch.form.txtDS_MESSAGE","value","dsSearch","DS_MESSAGE");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item1","divSearch.form.edtDS_TITLE","value","dsSearch","DS_TITLE");
            this.addChild(obj.name, obj);
            obj.bind();
            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script
        this.registerScript("DAZ_SMS_SENDER.xfdl", function() {
        this.objApp = this.gfnGetApplication();

        this.form_onload = function(obj, e) {
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
        	this.edtDS_TITLE   = this.divSearch.form.edtDS_TITLE;				// 타이틀
        	this.txtDS_MESSAGE = this.divSearch.form.txtDS_MESSAGE;				// 메시지
        	this.btnClose      = this.divSearch.form.divBtns.form.btnClose;		// 닫기 버튼
        	this.btnSend       = this.divSearch.form.divBtns.form.btnSend;		// 확인 버튼
        	this.btnCancle     = this.divSearch.form.divBtns.form.btnCancle;	// 취소 버튼
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
        	this.dsSearch.setColumn(0, "DS_TITLE", this.getOwnerFrame().TITLE);
        	this.dsSearch.setColumn(0, "DS_MESSAGE", this.getOwnerFrame().MESSAGE);

        	this.divSearch.form.staDS_REM_bg.set_text("[" + this.AuthClient.DS_HNAME + ":" + this.UserInfo.DS_HANDPHONE + "]");

        	var DS_SENDER_BYTE = this.getByteLength(this.divSearch.form.staDS_REM_bg.text) - 1;
        	var DS_MESSAGE_BYTE = this.getByteLength(this.getOwnerFrame().MESSAGE);
        	this.divSearch.form.staDS_MESSAGE_BYTE2.set_text(DS_SENDER_BYTE + DS_MESSAGE_BYTE + "/90");

        	if (this.getOwnerFrame().READONLY) {
        		this.edtDS_TITLE.set_readonly(true);
        		this.txtDS_MESSAGE.set_readonly(true);

        		this.divSearch.form.staDS_REM_bg.set_text("");
        		this.divSearch.form.staDS_MESSAGE_BYTE2.set_text(DS_MESSAGE_BYTE + "/90");

        		this.btnClose.set_visible(true);
        		this.btnSend.set_visible(false);
        		this.btnCancle.set_visible(false);
        	}
        }

        /************************************************************************
         * 컨트롤 이벤트
         ************************************************************************/
        /*
         * 조회 버튼
         */
        this.fnSelect = function() {

        }

        /*
         * 추가 버튼
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
        this.fnSelectValid = function() {
        	return true;
        }

        /************************************************************************
         * 기타 이벤트
         ************************************************************************/
        this.txtDS_MESSAGE_onkeydown = function(obj,e)
        {
        	var DS_SENDER_BYTE = this.getByteLength(this.divSearch.form.staDS_REM_bg.text) - 1;
        	var DS_MESSAGE_BYTE = this.getByteLength(obj.value);

        	if(90 < DS_SENDER_BYTE + DS_MESSAGE_BYTE){
        		this.divSearch.form.staDS_MESSAGE_BYTE2.set_text("LMS");
        // 		this.gfnAlert("최대 90byte 입력이 가능합니다.");
        // 		obj.set_value(obj.value.substr(0, obj.value.length-2));
        // 		return;
        	} else {
        		this.divSearch.form.staDS_MESSAGE_BYTE2.set_text(DS_SENDER_BYTE + DS_MESSAGE_BYTE + "/90");
        	}

        };

        this.getByteLength = function(s) {

        	if (s == null || s.length == 0) {
        		return 0;
        	}
        	var size = 0;

        	for ( var i = 0; i < s.length; i++) {
        		size += this.charByteSize(s.charAt(i));
        	}

        	return size;
        }


        this.charByteSize = function(ch) {

        	if (ch == null || ch.length == 0) {
        		return 0;
        	}

        	var charCode = ch.charCodeAt(0);

        	if (charCode <= 0x00007F) {
        		return 1;
        	} else if (charCode <= 0x0007FF) {
        		return 2;
        	} else if (charCode <= 0x00FFFF) {
        		return 3;
        	} else {
        		return 4;
        	}
        }

        /************************************************************************
         * 확장버튼 이벤트
         ************************************************************************/
        // 확인 버튼
        this.btnSend_onclick = function(obj, e) {
        	this.gfnConfirm("메시지를 전송하시겠습니까?", "fnOKCallback");
        }

        this.fnOKCallback = function() {
        	var json = {};
        	json.CONTINUE = true;
        	json.TITLE = this.dsSearch.getColumn(0, "DS_TITLE");
        	json.MESSAGE = this.dsSearch.getColumn(0, "DS_MESSAGE");

        	this.getParentContext().close(JSON.stringify(json));
        }

        // 취소 버튼
        this.btnCANCLE_onclick = function(obj, e) {
        	var json = {};
        	json.CONTINUE = false;

        	this.getParentContext().close(JSON.stringify(json));
        }

        // 닫기 버튼
        this.btnClose_onclick = function(obj, e) {
        	var json = {};
        	json.CONTINUE = false;

        	this.getParentContext().close(JSON.stringify(json));
        }

        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.form_onload,this);
            this.divSearch.form.txtDS_MESSAGE.addEventHandler("onchanged",this.divSearch_txt00_onchanged,this);
            this.divSearch.form.txtDS_MESSAGE.addEventHandler("onkeydown",this.txtDS_MESSAGE_onkeydown,this);
            this.divSearch.form.divBtns.form.btnSend.addEventHandler("onclick",this.btnSend_onclick,this);
            this.divSearch.form.divBtns.form.btnCancle.addEventHandler("onclick",this.btnCANCLE_onclick,this);
            this.divSearch.form.divBtns.form.btnClose.addEventHandler("onclick",this.btnClose_onclick,this);
        };
        this.loadIncludeScript("DAZ_SMS_SENDER.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
