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
            this.set_titletext("비밀번호 변경");
            this.getSetter("maxwidth").set("410");
            this.getSetter("maxheight").set("220");
            if (Form == this.constructor)
            {
                this._setFormPosition(361,140);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("dsList", this);
            obj._setContents("<ColumnInfo><Column id=\"ID_PASSWORD\" type=\"STRING\" size=\"256\"/><Column id=\"NO_CURRNETPWD\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"ID_PASSWORD\"/><Col id=\"NO_CURRNETPWD\"/></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("_dsProc", this);
            obj._setContents("<ColumnInfo><Column id=\"TARGET\" type=\"STRING\" size=\"256\"/><Column id=\"SP\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"TARGET\">save</Col><Col id=\"SP\">DZZPR_USERREGISTRATION_UPDATEPWDCHG</Col></Row></Rows>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Div("divSearch","0","0","361","141",null,null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_text("");
            this.addChild(obj.name, obj);

            obj = new Static("staTITLE","0","0","250","30",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("0");
            obj.set_text("비밀번호 변경");
            obj.set_cssclass("sta_TITLE_Bg");
            obj.set_textAlign("left");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("staNO_CURRNETPWD","0","staTITLE:0","100","30",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("1");
            obj.set_text("현재 비밀번호");
            obj.set_cssclass("sta_WF_tablelabel");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("staNO_CURRNETPWD_bg","staNO_CURRNETPWD:-1","staNO_CURRNETPWD:-30","262","30",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("2");
            obj.set_cssclass("sta_WF_tablebg");
            obj.set_text("");
            this.divSearch.addChild(obj.name, obj);

            obj = new Edit("txtNO_CURRNETPWD","staNO_CURRNETPWD:5","staNO_CURRNETPWD:-25","250","20",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("6");
            obj.set_password("true");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("staID_PASSWORD","0","staNO_CURRNETPWD:-1","100","30",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("3");
            obj.set_text("변경 비밀번호");
            obj.set_cssclass("sta_WF_tablelabel");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("staID_PASSWORD_bg","staID_PASSWORD:-1","staID_PASSWORD:-30","262","30",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("4");
            obj.set_cssclass("sta_WF_tablebg");
            obj.set_text("");
            this.divSearch.addChild(obj.name, obj);

            obj = new Edit("txtID_PASSWORD","staID_PASSWORD:5","staID_PASSWORD:-25","250","20",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("7");
            obj.set_password("true");
            this.divSearch.addChild(obj.name, obj);

            obj = new Div("divBtns","120","staID_PASSWORD:25","130","27",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("5");
            this.divSearch.addChild(obj.name, obj);

            obj = new Button("btnOK","0","0","60","27",null,null,null,null,null,null,this.divSearch.form.divBtns.form);
            obj.set_taborder("0");
            obj.set_text("확인");
            this.divSearch.form.divBtns.addChild(obj.name, obj);

            obj = new Button("btnCANCLE","btnOK:10","0","60","27",null,null,null,null,null,null,this.divSearch.form.divBtns.form);
            obj.set_taborder("15");
            obj.set_text("취소");
            this.divSearch.form.divBtns.addChild(obj.name, obj);

            obj = new Static("sta00","25","89","331","20",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("8");
            obj.set_text("영문, 숫자, 특수문자 조합으로 8자 이상, 12자 이하 입니다.");
            obj.set_textAlign("right");
            this.divSearch.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this
            obj = new Layout("default","",this._adjust_width,this._adjust_height,this,function(p){});
            this.addLayout(obj.name, obj);
            
            // BindItem Information
            obj = new BindItem("item1","divSearch.form.txtNO_CURRNETPWD","value","dsList","NO_CURRNETPWD");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item3","divSearch.form.txtID_PASSWORD","value","dsList","ID_PASSWORD");
            this.addChild(obj.name, obj);
            obj.bind();
            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script
        this.registerScript("DZU_PWD.xfdl", function() {
        this.objApp = this.gfnGetApplication();
        this.gbDel = "";	// 시간과 분 구분자(:) 추가하기위함 변수

        this.form_onload = function(obj,e) {
        	// -- 필수 -------------------//
        	this.gfnFormOnLoad(this);
        	this.gfnFormInfo(this);
        	// ---------------------------//

        	this.fnSetVariable();
        	this.fnSetEvent();
        	this.fnSetParameter();
        };

        /************************************************************************
         * 변수 선언
         ************************************************************************/
        this.fnSetVariable = function() {

        };

        /************************************************************************
         * 파라미터 설정
         ************************************************************************/
        this.fnSetParameter = function() {
        	this.dsSave = new Dataset();
        	this.dsSave.addColumn("ID_USER", "string");
        	this.dsSave.addColumn("CD_CORP", "string");
        	this.dsSave.addColumn("ID_PASSWORD", "string");
        	this.dsSave.addColumn("NO_CURRNETPWD", "string");
        }

        /************************************************************************
         * 이벤트 설정
         ************************************************************************/
        this.fnSetEvent = function() {

        };

        this.btnOK_onclick = function(obj,e) {
        	this.dlgfnSave();
        };

        this.dlgfnSave = function() {
        	if (!this.fnSelectValidate()) return false;

        	this.dsSave.clearData();
        	this.dsSave.addRow();

        	this.dsSave.setColumn(0, "ID_USER", this.AuthClient.ID_USER);
        	this.dsSave.setColumn(0, "CD_CORP", this.AuthClient.CD_CORP);
        	this.dsSave.setColumn(0, "ID_PASSWORD", this.dsList.getColumn(0, "ID_PASSWORD"));
        	this.dsSave.setColumn(0, "NO_CURRNETPWD", this.dsList.getColumn(0, "NO_CURRNETPWD"));

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

        }

        this.btnCANCLE_onclick = function(obj,e) {
        	this.getParentContext().close(false);
        };

        /*
         *	조회 Validate
         */
        this.fnSelectValidate = function() {
        	var validate = true;

        	var password = this.dsList.getColumn(0, "ID_PASSWORD") || "";
        	const regAlphabets = /[A-Za-z]{1,}/g;
        	const regNumberics = /[0-9]{1,}/g;
        	const regSpecials = /[!@#$%^&*(),.<>\/?\\+\-]{1,}/g;
        	const alphabets = password.match(regAlphabets) || [];
        	const numberics = password.match(regNumberics) || [];
        	const specials = password.match(regSpecials) || [];
        	if (alphabets.length == 0 || numberics == 0 || specials == 0 || password.length < 8 || password.length > 12) {
        		this.gfnAlert("영문, 숫자, 특수문자 조합으로 8자 이상, 12자 이하 입니다.");
        		return false;
        	}

        	if (this.gfnIsNull(this.dsList.getColumn(0, "NO_CURRNETPWD"))) {
        		validate = false;
        		this.fnVaidateCallback = function() {
        			this.divSearch.form.txtNO_CURRNETPWD.setFocus();
        		}
        		this.gfnAlert("현재 비밀번호를 입력하세요.", "fnVaidateCallback");
        	} else if(this.gfnIsNull(this.dsList.getColumn(0, "ID_PASSWORD"))) {
        		validate = false;

        		this.fnVaidateCallback = function() {
        			this.divSearch.form.txtID_PASSWORD.setFocus();
        		}
        		this.gfnAlert("변경 비밀번호를 입력하세요.", "fnVaidateCallback");
        	}

        	return validate;
        };
        /************************************************************************
         * 코드파인드 이벤트
         ************************************************************************/

        /************************************************************************
         * 콜백 이벤트
         ************************************************************************/
        this.fnCallback = function(svcID, errorCode, errorMsg) {
        	if(svcID == "save") {
        		if (errorCode == 0) {
        			this.fnClose = function() {
        				this.getParentContext().close(true);
        			}
        			this.gfnAlert("비밀번호 변경이 완료 되었습니다.", "fnClose");
        		} else {
        			this.gfnAlert(errorMsg);
        		}
        	}
        }

        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.form_onload,this);
            this.divSearch.form.staNO_CURRNETPWD.addEventHandler("onclick",this.sta05_onclick,this);
            this.divSearch.form.staNO_CURRNETPWD_bg.addEventHandler("onclick",this.sta23_onclick,this);
            this.divSearch.form.staID_PASSWORD.addEventHandler("onclick",this.sta03_onclick,this);
            this.divSearch.form.staID_PASSWORD_bg.addEventHandler("onclick",this.sta23_onclick,this);
            this.divSearch.form.divBtns.form.btnOK.addEventHandler("onclick",this.btnOK_onclick,this);
            this.divSearch.form.divBtns.form.btnCANCLE.addEventHandler("onclick",this.btnCANCLE_onclick,this);
        };
        this.loadIncludeScript("DZU_PWD.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
