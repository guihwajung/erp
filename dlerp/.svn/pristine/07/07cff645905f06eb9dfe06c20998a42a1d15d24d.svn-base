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
            this.set_titletext("이전정보 복사");
            this.getSetter("maxwidth").set("408");
            this.getSetter("maxheight").set("200");
            if (Form == this.constructor)
            {
                this._setFormPosition(368,120);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("dsList", this);
            obj._setContents("<ColumnInfo><Column id=\"ID_PERSON_BEF\" type=\"STRING\" size=\"256\"/><Column id=\"CD_CORP_BEF\" type=\"STRING\" size=\"256\"/><Column id=\"ID_SABUN_BEF\" type=\"STRING\" size=\"256\"/><Column id=\"DS_HNAME_BEF\" type=\"STRING\" size=\"256\"/><Column id=\"ID_PERSON\" type=\"STRING\" size=\"256\"/><Column id=\"CD_CORP\" type=\"STRING\" size=\"256\"/><Column id=\"ID_SABUN\" type=\"STRING\" size=\"256\"/><Column id=\"ID_USER\" type=\"STRING\" size=\"256\"/><Column id=\"DS_HNAME\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row/></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("_dsProc", this);
            obj._setContents("<ColumnInfo><Column id=\"TARGET\" type=\"STRING\" size=\"256\"/><Column id=\"SP\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"TARGET\">save</Col><Col id=\"SP\">DAAPR_BASEINFO_COPY</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsSearch", this);
            obj._setContents("");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Div("divData","0","0",null,null,"0","0",null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_cssclass("div_DATA_Bg");
            obj.set_text("");
            this.addChild(obj.name, obj);

            obj = new Static("staTITLE","0","-6","100.00%","30",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("0");
            obj.set_text("이전정보 복사");
            obj.set_cssclass("sta_TITLE_Bg");
            obj.set_textAlign("left");
            this.divData.addChild(obj.name, obj);

            obj = new Static("staID_SABUN_BEF","0","staTITLE:0","107","30",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("1");
            obj.set_text("이전정보 성명");
            obj.set_cssclass("sta_WF_tablelabelE");
            this.divData.addChild(obj.name, obj);

            obj = new Static("staID_SABUN_BEF_bg","staID_SABUN_BEF:-1","staID_SABUN_BEF:-30","262","30",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("6");
            obj.set_cssclass("sta_WF_tablebg");
            obj.set_text("");
            this.divData.addChild(obj.name, obj);

            obj = new Div("ccfID_SABUN_BEF","staID_SABUN_BEF:5","staID_SABUN_BEF:-25","250","20",null,null,null,null,null,null,this.divData.form);
            obj.getSetter("CodeFindName").set("DAX_CFBASEINFO");
            obj.getSetter("CDTextWidth").set("90");
            obj.set_taborder("2");
            obj.set_url("cmm::cmmCodeFind.xfdl");
            obj.set_text("");
            this.divData.addChild(obj.name, obj);

            obj = new Static("staID_SABUN","0","staID_SABUN_BEF:-1","107","30",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("3");
            obj.set_text("대상자 성명");
            obj.set_cssclass("sta_WF_tablelabelE");
            this.divData.addChild(obj.name, obj);

            obj = new Static("staID_SABUN_bg","staID_SABUN:-1","staID_SABUN:-30","262","30",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("7");
            obj.set_cssclass("sta_WF_tablebg");
            obj.set_text("");
            this.divData.addChild(obj.name, obj);

            obj = new Div("ccfID_SABUN","staID_SABUN:5","staID_SABUN:-25","250","20",null,null,null,null,null,null,this.divData.form);
            obj.getSetter("CodeFindName").set("DAX_CFBASEINFO_ALL");
            obj.getSetter("CDTextWidth").set("90");
            obj.set_taborder("4");
            obj.set_url("cmm::cmmCodeFind.xfdl");
            obj.set_text("");
            obj.set_enable("false");
            this.divData.addChild(obj.name, obj);

            obj = new Div("divBtns","130","staID_SABUN:10","130","27",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("5");
            this.divData.addChild(obj.name, obj);

            obj = new Button("btnOK","0","0","60","27",null,null,null,null,null,null,this.divData.form.divBtns.form);
            obj.set_taborder("10");
            obj.set_text("확인");
            this.divData.form.divBtns.addChild(obj.name, obj);

            obj = new Button("btnCANCLE","btnOK:10","0","60","27",null,null,null,null,null,null,this.divData.form.divBtns.form);
            obj.set_taborder("11");
            obj.set_text("취소");
            this.divData.form.divBtns.addChild(obj.name, obj);

            obj = new Edit("txtID_PERSON_BEF","391","7","65","20",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("8");
            obj.set_visible("false");
            this.divData.addChild(obj.name, obj);

            obj = new Edit("txtCD_CORP_BEF","465","7","65","20",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("9");
            obj.set_visible("false");
            this.divData.addChild(obj.name, obj);

            obj = new Edit("txtID_PERSON","391","93","65","20",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("10");
            obj.set_visible("false");
            this.divData.addChild(obj.name, obj);

            obj = new Edit("txtCD_CORP","500","96","65","20",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("11");
            obj.set_visible("false");
            this.divData.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this
            obj = new Layout("default","",this._adjust_width,this._adjust_height,this,function(p){});
            this.addLayout(obj.name, obj);
            
            // BindItem Information
            obj = new BindItem("item0","ccfID_SABUN_BEF.form.CDTextBox","value","dsList","ID_SABUN_BEF");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item1","ccfID_SABUN_BEF.form.DSTextBox","value","dsList","DS_HNAME_BEF");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item2","ccfID_SABUN.form.CDTextBox","value","dsList","ID_SABUN");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item3","ccfID_SABUN.form.DSTextBox","value","dsList","DS_HNAME");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item4","txtID_PERSON","value","dsList","ID_PERSON");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item5","txtCD_CORP","value","dsList","CD_CORP");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item6","txtCD_CORP_BEF","value","dsList","CD_CORP_BEF");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item7","txtID_PERSON_BEF","value","dsList","ID_PERSON_BEF");
            this.addChild(obj.name, obj);
            obj.bind();
            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {
            this._addPreloadList("fdl","cmm::cmmCodeFind.xfdl");
        };
        
        // User Script
        this.registerScript("DAA_BASEINFO_COPY_DLG.xfdl", function() {
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
        	this.ccfID_SABUN_BEF = this.divData.form.ccfID_SABUN_BEF;	// 법인코드
        	this.ccfID_SABUN     = this.divData.form.ccfID_SABUN;		// 대상자
        }

        /************************************************************************
         * 이벤트 설정
         ************************************************************************/
        this.fnSetEvent = function() {

        	this.ccfID_SABUN_BEF.BeforeUserDataSetParam = "fnBeforeUserDataSetParam";	// 이전정보
        	this.ccfID_SABUN_BEF.AfterCDTextChanged     = "fnAfterCDTextChanged";
        	this.ccfID_SABUN.BeforeUserDataSetParam     = "fnBeforeUserDataSetParam";	// 대상자
        }

        /************************************************************************
         * 파라미터 설정
         ************************************************************************/
        this.fnSetParameter = function() {
        	this.dsSave = new Dataset();
        	this.dsSave.addColumn("ID_PERSON_BEF", "bigdecimal");
        	this.dsSave.addColumn("CD_CORP_BEF", "string");
        	this.dsSave.addColumn("ID_SABUN_BEF", "string");
        	this.dsSave.addColumn("ID_PERSON", "bigdecimal");
        	this.dsSave.addColumn("CD_CORP", "string");
        	this.dsSave.addColumn("ID_SABUN", "string");
        	this.dsSave.addColumn("ID_USER", "string");
        	this.dsSave.addColumn("IP_ADDR", "string");
        }

        /************************************************************************
         * 화면 및 검색영역 초기화
         ************************************************************************/
        this.fnInit = function() {
        	var frame = this.getOwnerFrame();
        	this.dsList.setColumn(0, "ID_SABUN" , frame.ID_SABUN);
        	this.dsList.setColumn(0, "DS_HNAME" , frame.DS_HNAME);
        	this.dsList.setColumn(0, "ID_PERSON", frame.ID_PERSON);
        	this.dsList.setColumn(0, "CD_CORP"  , frame.CD_CORP);
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
        	this.dsSave.clearData();
        	var nrow = this.dsSave.addRow();

        	this.dsSave.setColumn(nrow, "ID_PERSON_BEF", this.dsList.getColumn(0, "ID_PERSON_BEF"));
        	this.dsSave.setColumn(nrow, "CD_CORP_BEF"  , this.dsList.getColumn(0, "CD_CORP_BEF"));
        	this.dsSave.setColumn(nrow, "ID_SABUN_BEF" , this.dsList.getColumn(0, "ID_SABUN_BEF"));
        	this.dsSave.setColumn(nrow, "ID_PERSON"    , this.dsList.getColumn(0, "ID_PERSON"));
        	this.dsSave.setColumn(nrow, "CD_CORP"      , this.dsList.getColumn(0, "CD_CORP"));
        	this.dsSave.setColumn(nrow, "ID_SABUN"     , this.dsList.getColumn(0, "ID_SABUN"));
        	this.dsSave.setColumn(nrow, "ID_USER"      , this.AuthClient.ID_USER);
        	this.dsSave.setColumn(nrow, "IP_ADDR"      , this.AuthClient.NO_IP);

        	var strSvcId    = "save";
        	var strSvcType  = "save";
        	var inProc		= "_dsProc";
        	var inData      = "save=dsSave";
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

        /*
         * 엑셀 버튼
         */
        this.fnExcel = function() {

        }

        /*
         * 출력 버튼
         */
        this.fnPrint = function() {
        	return true;
        }

        /************************************************************************
         * Validate
         ************************************************************************/
        this.fnSaveValidate = function() {
        	if (this.gfnIsNull(this.dsList.getColumn(0, "ID_SABUN_BEF"))) {
        		this.ccfID_SABUN_BEF.form.CDTextBox.setFocus();
        		this.gfnAlert("이전정보 성명 입력하세요.");
        		return false;
        	}

        	if (this.gfnIsNull(this.dsList.getColumn(0, "ID_SABUN"))) {
        		this.ccfID_SABUN.form.CDTextBox.setFocus();
        		this.gfnAlert("대상자 성명 입력하세요.");
        		return false;
        	}

        	return true;
        }

        /************************************************************************
         * 확장버튼 이벤트
         ************************************************************************/
        // 확인 버튼
        this.btnOK_onclick = function(obj, e) {
        	if (!this.fnSaveValidate()) return;
        	this.fnSave();
        }

        // 취소 버튼
        this.btnCANCLE_onclick = function(obj, e) {
        	this.getParentContext().close(false);
        }

        /************************************************************************
         * 콜백 이벤트
         ************************************************************************/
        /*
         * 기본 콜백
         */
        this.fnCallback = function(svcID, errorCode, errorMsg) {
        	if (errorCode != 0) {
        		this.gfnAlert(errorMsg);
        		return;
        	}

        	if (svcID == "save") {
        		if (errorCode == 0) {
        			this.fnClose = function() {
        				this.getParentContext().close(true);
        			}
        			this.gfnAlert("작업이 완료되었습니다.", "fnClose");
        		} else {
        			this.gfnAlert(errorMsg);
        		}
        	}
        }

        /************************************************************************
         * 코드파인드 이벤트
         ************************************************************************/
        this.fnBeforeUserDataSetParam = function(id, dsUserParam, nrow) {
        	if (id == "ccfID_SABUN_BEF") {	// 이전정보
        		dsUserParam.setColumn(nrow, "GR_SEARCH", this.FormInfo.GR_SEARCH);
        		dsUserParam.setColumn(nrow, "CD_DEPT"  , this.AuthClient.CD_DEPT);
        		dsUserParam.setColumn(nrow, "TY_RETIRE", "04");
        	} else if (id == "ccfID_SABUN") {	// 대상자
        		dsUserParam.setColumn(nrow, "CD_CORP"  , "%");
        		dsUserParam.setColumn(nrow, "GR_SEARCH", "");
        		dsUserParam.setColumn(nrow, "CD_DEPT"  , "");
        		dsUserParam.setColumn(nrow, "YN_CORP"  , "");
        		dsUserParam.setColumn(nrow, "TY_RETIRE", "");
        	}

        	return true;
        }

        this.fnAfterCDTextChanged = function(id, codeFindData) {
        	//this.fnSearchInit();
        	var arr = codeFindData;
        	switch (id) {
        	case "ccfID_SABUN_BEF":
        		if (arr.length > 0) {
        			this.dsList.setColumn(0, "ID_SABUN_BEF" , arr[0]["ID_SABUN"]);
        			this.dsList.setColumn(0, "DS_HNAME_BEF" , arr[0]["DS_HNAME"]);
        			this.dsList.setColumn(0, "ID_PERSON_BEF", arr[0]["ID_PERSON"]);
        			this.dsList.setColumn(0, "CD_CORP_BEF"  , arr[0]["CD_CORP"]);
        		}
        		break;
        	}
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

        /************************************************************************
         * 기타 함수
         ************************************************************************/

        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.form_onload,this);
            this.divData.form.divBtns.form.btnOK.addEventHandler("onclick",this.btnOK_onclick,this);
            this.divData.form.divBtns.form.btnCANCLE.addEventHandler("onclick",this.btnCANCLE_onclick,this);
            this.dsSearch.addEventHandler("onvaluechanged",this.dsSearch_onvaluechanged,this);
        };
        this.loadIncludeScript("DAA_BASEINFO_COPY_DLG.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
