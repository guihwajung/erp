(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("form1");
            this.set_titletext("");
            this.getSetter("maxwidth").set("385");
            this.getSetter("maxheight").set("220");
            if (Form == this.constructor)
            {
                this._setFormPosition(339,135);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("dsList", this);
            obj._setContents("<ColumnInfo><Column id=\"ID_SABUN\" type=\"STRING\" size=\"256\"/><Column id=\"DS_HNAME\" type=\"STRING\" size=\"256\"/><Column id=\"FILE_CNT\" type=\"INT\" size=\"256\"/><Column id=\"NO_ID\" type=\"INT\" size=\"256\"/><Column id=\"CD_CORP\" type=\"STRING\" size=\"256\"/><Column id=\"DS_CORP\" type=\"STRING\" size=\"256\"/><Column id=\"NO_BUSU\" type=\"INT\" size=\"256\"/><Column id=\"ID_APPROVE\" type=\"STRING\" size=\"256\"/><Column id=\"DS_APPROVE\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row/></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("_dsProc", this);
            obj._setContents("<ColumnInfo><Column id=\"TARGET\" type=\"STRING\" size=\"256\"/><Column id=\"SP\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"TARGET\">save</Col><Col id=\"SP\">DABPR_ENGINEERS_APPROVE</Col></Row></Rows>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Div("divData","0","0",null,null,"0","0",null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_cssclass("div_DATA_Bg");
            obj.set_text("");
            this.addChild(obj.name, obj);

            obj = new Static("staTY_ORDER_bg00_00","79","29","260","30",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("7");
            obj.set_cssclass("sta_WF_tablebg");
            obj.set_text("");
            this.divData.addChild(obj.name, obj);

            obj = new Static("staTITLE","0","-6",null,"30","6",null,null,null,null,null,this.divData.form);
            obj.set_taborder("0");
            obj.set_text("승인처리 ");
            obj.set_cssclass("sta_TITLE_Bg");
            obj.set_textAlign("left");
            this.divData.addChild(obj.name, obj);

            obj = new Static("staTY_ORDER","0","staTITLE:5","80","30",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("2");
            obj.set_text("승인자");
            obj.set_cssclass("sta_WF_tablelabelE");
            this.divData.addChild(obj.name, obj);

            obj = new Div("divBtns","70","staTY_ORDER:45","190","30",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("1");
            this.divData.addChild(obj.name, obj);

            obj = new Button("btnOK","30","0","60","30",null,null,null,null,null,null,this.divData.form.divBtns.form);
            obj.set_taborder("0");
            obj.set_text("승인");
            this.divData.form.divBtns.addChild(obj.name, obj);

            obj = new Button("btnCANCLE","btnOK:10","0","60","30",null,null,null,null,null,null,this.divData.form.divBtns.form);
            obj.set_taborder("1");
            obj.set_text("취소");
            this.divData.form.divBtns.addChild(obj.name, obj);

            obj = new Static("staTY_ORDER00","0","58","80","30",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("3");
            obj.set_text("발급근거");
            obj.set_cssclass("sta_WF_tablelabelE");
            this.divData.addChild(obj.name, obj);

            obj = new Static("staTY_ORDER_bg00","79","58","260","30",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("4");
            obj.set_cssclass("sta_WF_tablebg");
            obj.set_text("");
            this.divData.addChild(obj.name, obj);

            obj = new Button("btnOK","183","63","60","20",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("5");
            obj.set_text("파일첨부");
            this.divData.addChild(obj.name, obj);

            obj = new Static("staFileUpload","89","61","91","24",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("6");
            obj.set_text("파일수 :  0 개");
            this.divData.addChild(obj.name, obj);

            obj = new Div("ccfID_APPROVE","83","34","250","20",null,null,null,null,null,null,this.divData.form);
            obj.getSetter("CDTextWidth").set("90");
            obj.set_taborder("8");
            obj.set_url("cmm::cmmCodeFind.xfdl");
            obj.set_text("");
            obj.getSetter("CodeFindName").set("DAX_CFBASEINFO_FULL");
            obj.set_enable("false");
            this.divData.addChild(obj.name, obj);

            obj = new Edit("edtFILE_CNT","259","63","67","20",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("9");
            obj.set_visible("false");
            this.divData.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this
            obj = new Layout("default","",this._adjust_width,this._adjust_height,this,function(p){});
            this.addLayout(obj.name, obj);
            
            // BindItem Information
            obj = new BindItem("item0","divData.form.edtFILE_CNT","value","dsList","FILE_CNT");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item1","divData.form.ccfID_APPROVE.form.CDTextBox","value","dsList","ID_APPROVE");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item2","divData.form.ccfID_APPROVE.form.DSTextBox","value","dsList","DS_APPROVE");
            this.addChild(obj.name, obj);
            obj.bind();
            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {
            this._addPreloadList("fdl","cmm::cmmCodeFind.xfdl");
        };
        
        // User Script
        this.registerScript("DAB_ENGINEERS_APPROVE_DLG.xfdl", function() {
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

        	this.dsList.setColumn(0, "ID_SABUN" , this.getOwnerFrame().ID_SABUN );
        	this.dsList.setColumn(0, "DS_HNAME" , this.getOwnerFrame().DS_HNAME );
        	this.dsList.setColumn(0, "FILE_CNT" , this.getOwnerFrame().FILE_CNT );
        	this.dsList.setColumn(0, "NO_ID" 	, this.getOwnerFrame().NO_ID );
        	this.dsList.setColumn(0, "CD_CORP" 	, this.getOwnerFrame().CD_CORP );
        	this.dsList.setColumn(0, "DS_CORP" 	, this.getOwnerFrame().DS_CORP );
        	this.dsList.setColumn(0, "NO_BUSU" 	, this.getOwnerFrame().NO_BUSU );
        	this.dsList.setColumn(0, "ID_APPROVE" 	, this.AuthClient.ID_USER);
        	this.dsList.setColumn(0, "DS_APPROVE" 	, this.AuthClient.DS_HNAME);

        	this.staFileUpload.set_text("파일수 : "+ this.getOwnerFrame().FILE_CNT + " 개");

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
        	this.ccfID_APPROVE = this.divData.form.ccfID_APPROVE;
        	this.staFileUpload = this.divData.form.staFileUpload;
        	this.edtFILE_CNT = this.divData.form.edtFILE_CNT;
        };

        /************************************************************************
         * 이벤트 설정
         ************************************************************************/
        this.fnSetEvent = function() {
        	this.ccfID_APPROVE.BeforeUserDataSetParam    = "fnBeforeUserDataSetParam";	// 성명
        	this.ccfID_APPROVE.AfterCDTextChanged        = "fnAfterCDTextChanged";
        }

        /************************************************************************
         * 파라미터 설정
         ************************************************************************/
        this.fnSetParameter = function() {

        	this.dsApprove = new Dataset();
        	this.dsApprove.addColumn("CD_CORP", "string");
        	this.dsApprove.addColumn("ID_PERSON", "int");
        	this.dsApprove.addColumn("NO_ID", "int");
        	this.dsApprove.addColumn("NO_BUSU", "int");
        	this.dsApprove.addColumn("TY_GUBUN", "string");
        	this.dsApprove.addColumn("GR_SEARCH", "string");
        	this.dsApprove.addColumn("GR_DEPT", "string");
        	this.dsApprove.addColumn("ID_LOGIN", "string");

        }

        /************************************************************************
         * 컨트롤 이벤트
         ************************************************************************/
        /*
         * 저장 버튼
         */
        this.fnSave = function() {
        	if (this.gfnIsNull(this.getOwnerFrame().NO_ID) || this.getOwnerFrame().NO_ID == 0	||
        	    this.gfnIsNull(this.getOwnerFrame().ID_PERSON) || this.getOwnerFrame().ID_PERSON == 0) {
        		return;
        	}
        	if (!this.fnSaveValid()) return;

        	this.dsApprove.clearData();
        	var nrow = this.dsApprove.addRow();
        	this.dsApprove.setColumn(nrow, "CD_CORP", this.getOwnerFrame().CD_CORP);
        	this.dsApprove.setColumn(nrow, "ID_PERSON", this.getOwnerFrame().ID_PERSON);
        	this.dsApprove.setColumn(nrow, "NO_ID", this.getOwnerFrame().NO_ID);
        	this.dsApprove.setColumn(nrow, "NO_BUSU", this.getOwnerFrame().NO_BUSU);
        	this.dsApprove.setColumn(nrow, "TY_GUBUN", this.getOwnerFrame().TY_GUBUN);
        	this.dsApprove.setColumn(nrow, "GR_SEARCH", this.AuthClient.GR_SEARCH );
        	this.dsApprove.setColumn(nrow, "GR_DEPT", this.AuthClient.GR_DEPT);
        	this.dsApprove.setColumn(nrow, "ID_LOGIN",  this.AuthClient.ID_USER);

        	var strSvcId    = "save";
        	var strSvcType  = "save";
        	var inProc		= "_dsProc";
        	var inData      = "save=dsApprove";
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

        /************************************************************************
         * Validate
         ************************************************************************/
        this.fnSaveValid = function() {
        // 	if (this.getOwnerFrame().TY_GUBUN == "HR" && (this.gfnIsNull(this.edtFILE_CNT.value) || this.edtFILE_CNT.value == 0)) {
        // 		this.gfnAlert("발급근거를 파일첨부해주세요.", "fnValidCallback");
        // 		return false;
        // 	}


        	return true;
        }

        /************************************************************************
         * Validate
         ************************************************************************/
        this.fnSelectValid = function() {
        	return true;
        }

        /************************************************************************
         * 확장버튼 이벤트
         ************************************************************************/
        // 확인 버튼
        this.btnOK_onclick = function(obj, e) {
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
        			this.fnWorkAfter = function() {
        				this.getParentContext().close(true);
        			}
        			this.gfnAlert("승인처리 완료되었습니다.", "fnWorkAfter");
        		} else {
        			this.gfnAlert(errorMsg);
        		}
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

        // 첨부파일
        this.fnFileUpload = function(obj,e) {
        	//trace("this.btnFileUpload.text :: " + this.btnFileUpload.text);

        		var cdGubun = "";
        		var cdDir = "";

        		cdGubun = "DA90";
        		var fileManager = {};
        		fileManager.CD_GUBUN = cdGubun;
        		fileManager.CD_DIR = [this.dsList.getColumn(0, "NO_ID")];
        		fileManager.IS_READONLY = false;

        		this.gfnFileManager(fileManager, "fnFileCallback");

        }


        this.fnFileCallback = function(strID, val) {
        	// val.IsChange : 변경여부, val.Cnt : 파일개수

        	// 파일개수를 다시 셋팅
        	this.dsList.set_enableevent(false);
        	if(val.Cnt == 0) {
        		this.staFileUpload.set_text("파일수 : 0 개");
        		this.edtFILE_CNT.set_value(0);
        	} else {
        		this.staFileUpload.set_text("파일수 : " + val.Cnt + " 개");
        		this.edtFILE_CNT.set_value(val.Cnt);
        	}

        	//this.dsList.setColumn(this.dsList.rowposition, "URL_PROOF", val.Cnt);
        	this.dsList.set_enableevent(true);
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
         * 콜백 이벤트
         ************************************************************************/


        this.dsList_onvaluechanged = function(obj,e)
        {
        	var strColid = e.columnid;
        	if(e.oldvalue != e.newvalue) {
        	}
        };

        /************************************************************************
         * 기타 이벤트
         ************************************************************************/


        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.form_onload,this);
            this.divData.form.divBtns.form.btnOK.addEventHandler("onclick",this.btnOK_onclick,this);
            this.divData.form.divBtns.form.btnCANCLE.addEventHandler("onclick",this.btnCANCLE_onclick,this);
            this.divData.form.btnOK.addEventHandler("onclick",this.fnFileUpload,this);
            this.dsList.addEventHandler("onvaluechanged",this.dsList_onvaluechanged,this);
        };
        this.loadIncludeScript("DAB_ENGINEERS_APPROVE_DLG.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
