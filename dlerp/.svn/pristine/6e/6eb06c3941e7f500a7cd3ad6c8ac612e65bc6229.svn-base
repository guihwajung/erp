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
            this.set_titletext("은행송금명세서 급여이체");
            this.getSetter("maxwidth").set("388");
            this.getSetter("maxheight").set("172");
            if (Form == this.constructor)
            {
                this._setFormPosition(348,96);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("dsData", this);
            obj._setContents("<ColumnInfo><Column id=\"CD_CORP\" type=\"STRING\" size=\"256\"/><Column id=\"NO_OUT\" type=\"STRING\" size=\"256\"/><Column id=\"SEND_GB\" type=\"STRING\" size=\"256\"/><Column id=\"YM_SALARY\" type=\"STRING\" size=\"256\"/><Column id=\"TY_SALARY\" type=\"STRING\" size=\"256\"/><Column id=\"SN_SALARY\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row/></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("_dsProc", this);
            obj._setContents("<ColumnInfo><Column id=\"TARGET\" type=\"STRING\" size=\"256\"/><Column id=\"SP\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"TARGET\">insert</Col><Col id=\"SP\">DAUPR_BRANCH_INSERT</Col></Row><Row><Col id=\"SP\">DAUPR_SALARYBANK_COMBO</Col><Col id=\"TARGET\">account</Col></Row><Row><Col id=\"TARGET\">trans</Col><Col id=\"SP\">DAZPR_COMMONCODE_COMBO</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsACCOUNT", this);
            obj._setContents("<ColumnInfo><Column id=\"CD_BANK\" type=\"STRING\" size=\"256\"/><Column id=\"DS_BANK\" type=\"STRING\" size=\"256\"/><Column id=\"NO_ACCOUNT\" type=\"STRING\" size=\"256\"/><Column id=\"DS_ACCOUNT\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsTRANS", this);
            obj._setContents("<ColumnInfo><Column id=\"CD_CODE\" type=\"STRING\" size=\"256\"/><Column id=\"DS_CODE\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsList", this);
            obj._setContents("");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Div("divData","0","0",null,null,"0","0",null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_cssclass("div_DATA_Bg");
            this.addChild(obj.name, obj);

            obj = new Static("staACCOUNT","0","0","87","30",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("3");
            obj.set_text("출금계좌");
            obj.set_cssclass("sta_WF_tablelabelE");
            this.divData.addChild(obj.name, obj);

            obj = new Static("staACCOUNT_bg","staACCOUNT:-1","staACCOUNT:-30","262","30",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("4");
            obj.set_cssclass("sta_WF_tablebg");
            obj.set_textAlign("right");
            this.divData.addChild(obj.name, obj);

            obj = new Combo("cboACCOUNT","staACCOUNT:5","staACCOUNT:-25","250","20",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("6");
            obj.set_datacolumn("DS_ACCOUNT");
            obj.set_codecolumn("NO_ACCOUNT");
            obj.set_readonly("false");
            obj.set_innerdataset("dsACCOUNT");
            obj.set_value("1");
            obj.set_index("-1");
            this.divData.addChild(obj.name, obj);

            obj = new Static("staTRANS","0","staACCOUNT:-1","87","30",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("0");
            obj.set_text("이체구분");
            obj.set_visible("true");
            obj.set_cssclass("sta_WF_tablelabelE");
            this.divData.addChild(obj.name, obj);

            obj = new Static("staTRANS_bg","staTRANS:-1","staTRANS:-30","262","30",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("1");
            obj.set_cssclass("sta_WF_tablebg");
            obj.set_visible("true");
            this.divData.addChild(obj.name, obj);

            obj = new Combo("cboTRANS","staTRANS:5","staTRANS:-25","250","20",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("5");
            obj.set_innerdataset("dsTRANS");
            obj.set_datacolumn("DS_CODE");
            obj.set_codecolumn("CD_CODE");
            obj.set_readonly("false");
            obj.set_value("1");
            obj.set_index("-1");
            this.divData.addChild(obj.name, obj);

            obj = new Div("ccfCD_CORP","87","30","180","20",null,null,null,null,null,null,this.divData.form);
            obj.getSetter("CDTextWidth").set("30");
            obj.set_taborder("8");
            obj.set_url("cmm::cmmCodeFind.xfdl");
            obj.set_text("");
            obj.getSetter("CodeFindName").set("DAX_CFCORP2");
            obj.set_enable("true");
            obj.set_visible("false");
            this.divData.addChild(obj.name, obj);

            obj = new Div("divBtns","120","staTRANS:10","130","27",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("2");
            this.divData.addChild(obj.name, obj);

            obj = new Button("btnOK","0","0","60","27",null,null,null,null,null,null,this.divData.form.divBtns.form);
            obj.set_taborder("1");
            obj.set_text("확인");
            this.divData.form.divBtns.addChild(obj.name, obj);

            obj = new Button("btnCANCLE","btnOK:10","0","60","27",null,null,null,null,null,null,this.divData.form.divBtns.form);
            obj.set_taborder("0");
            obj.set_text("취소");
            this.divData.form.divBtns.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this
            obj = new Layout("default","",this._adjust_width,this._adjust_height,this,function(p){});
            this.addLayout(obj.name, obj);
            
            // BindItem Information
            obj = new BindItem("item0","ccfCD_CORP.form.CDTextBox","value","dsData","CD_CORP");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item1","divData.form.cboACCOUNT","value","dsData","NO_OUT");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item2","divData.form.cboTRANS","value","dsData","SEND_GB");
            this.addChild(obj.name, obj);
            obj.bind();
            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {
            this._addPreloadList("fdl","cmm::cmmCodeFind.xfdl");
        };
        
        // User Script
        this.registerScript("DAU_SALARYBANK_DLG.xfdl", function() {
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
            this.fnSetCombo();
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

        }

        /************************************************************************
         * 변수 선언
         ************************************************************************/
        this.fnSetVariable = function() {
        	this.cboACCOUNT = this.divData.form.cboACCOUNT;
        	this.cboTRANS = this.divData.form.cboTRANS;
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
        	// 저장
        	this.dsInsert = new Dataset();
        	this.dsInsert.addColumn("SEND_GB", "string");
        	this.dsInsert.addColumn("YM_SALARY", "string");
        	this.dsInsert.addColumn("TY_SALARY", "string");
        	this.dsInsert.addColumn("SN_SALARY", "int");
        	this.dsInsert.addColumn("CD_CORP", "string");
        	this.dsInsert.addColumn("ID_SABUN", "string");
        	this.dsInsert.addColumn("DT_SALARY", "string");
        	this.dsInsert.addColumn("AM_SALARY", "bigdecimal");
        	this.dsInsert.addColumn("NM_OWNER", "string");
        	this.dsInsert.addColumn("NO_IN", "string");
        	this.dsInsert.addColumn("CD_IN", "string");
        	this.dsInsert.addColumn("NO_OUT", "string");
        	this.dsInsert.addColumn("CD_OUT", "string");
        	this.dsInsert.addColumn("ID_USER", "string");
        }

        /************************************************************************
         * 콤보 데이터 조회 및 설정
         ************************************************************************/
        this.fnSetCombo = function() {
        	// 계좌 콤보 데이터 조회
        	this.dsComboAccount = new Dataset();
        	this.dsComboAccount.addColumn("CD_CORP", "string");

        	this.dsComboAccount.clearData();
        	this.dsComboAccount.addRow();
        	this.dsComboAccount.setColumn(0, "CD_CORP", this.dsData.getColumn(0, "CD_CORP"));

        	// 이체구분 콤보 데이터 조회
        	this.dsComboTrans = new Dataset();
        	this.dsComboTrans.addColumn("TY_SEL", "string");
        	this.dsComboTrans.addColumn("CD_PREFIX", "string");
        	this.dsComboTrans.addColumn("CD_UPPREFIX", "string");

        	this.dsComboTrans.clearData();
        	this.dsComboTrans.addRow();
        	this.dsComboTrans.setColumn(0, "TY_SEL", "P");
        	this.dsComboTrans.setColumn(0, "CD_PREFIX", "GU");
        	this.dsComboTrans.setColumn(0, "CD_UPPREFIX", "");

        	var strSvcId    = "combo";
        	var strSvcType  = "select";
        	var inProc		= "_dsProc";
        	var inData      = "account=dsComboAccount trans=dsComboTrans";
        	var outData     = "dsACCOUNT=account0 dsTRANS=trans0";
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
         * 화면 및 검색영역 초기화
         ************************************************************************/
        this.fnInit = function() {
         	var frame = this.getOwnerFrame();
         	if (!this.gfnIsNull(frame.CD_CORP)) {
        		this.dsData.setColumn(0, "CD_CORP"  , frame.CD_CORP);
        		this.dsData.setColumn(0, "YM_SALARY", frame.YM_SALARY);
        		this.dsData.setColumn(0, "TY_SALARY", frame.TY_SALARY);
        		this.dsData.setColumn(0, "SN_SALARY", frame.SN_SALARY);
         	}
        }

        /************************************************************************
         * 컨트롤 이벤트
         ************************************************************************/
         //계좌조회
        // this.fnSetComboAccount = function() {
        // 	this.dsComboAccount.clearData();
        // 	this.dsComboAccount.addRow();
        // 	this.dsComboAccount.setColumn(0, "CD_CORP", this.dsData.getColumn(0, "CD_CORP"));
        //
        // 	var strSvcId    = "account";
        // 	var strSvcType  = "select";
        // 	var inProc		= "_dsProc";
        // 	var inData      = "account=dsComboAccount trans=dsComboTrans";
        // 	var outData     = "dsACCOUNT=account0";
        // 	var strArg      = "";
        // 	var callBackFnc = "fnCallback";
        //
        // 	this.gfnTransaction( strSvcId , 	// transaction을 구분하기 위한 svc id값
        // 						strSvcType , 	// transaction을 요청할 구분
        // 						inProc,			// Procedure 정보 Dataset 이름
        // 						inData , 		// 입력값으로 보낼 dataset id , a=b형태로 실제이름과 입력이름을 매칭
        // 						outData , 		// 처리결과값으로 받을 dataset id, a=b형태로 실제이름과 입력이름을 매칭
        // 						strArg, 			// 입력갑스로 보낼 arguments, strFormData="20120607"
        // 						callBackFnc); // 통신방법 정의 [생략가능]
        // };

        //이체구분 조회
        // this.fnSetComboTrans = function() {
        //
        // 	this.dsComboTrans.clearData();
        // 	this.dsComboTrans.addRow();
        // 	this.dsComboTrans.setColumn(0, "TY_SEL", "P");
        // 	this.dsComboTrans.setColumn(0, "CD_PREFIX", "GU");
        // 	this.dsComboTrans.setColumn(0, "CD_UPPREFIX", "");
        //
        // 	var strSvcId    = "trans";
        // 	var strSvcType  = "select";
        // 	var inProc		= "_dsProc";
        // 	var inData      = "trans=dsComboTrans";
        // 	var outData     = "dsTRANS=trans0";
        // 	var strArg      = "";
        // 	var callBackFnc = "fnCallback";
        //
        // 	this.gfnTransaction( strSvcId , 	// transaction을 구분하기 위한 svc id값
        // 						strSvcType , 	// transaction을 요청할 구분
        // 						inProc,			// Procedure 정보 Dataset 이름
        // 						inData , 		// 입력값으로 보낼 dataset id , a=b형태로 실제이름과 입력이름을 매칭
        // 						outData , 		// 처리결과값으로 받을 dataset id, a=b형태로 실제이름과 입력이름을 매칭
        // 						strArg, 			// 입력갑스로 보낼 arguments, strFormData="20120607"
        // 						callBackFnc); // 통신방법 정의 [생략가능]
        // };

        // 급여이체
        this.fnSave = function() {
        	if(!this.fnSaveValid()) return;

        	this.dsInsert.clearData();

        	var CD_OUT = "";
        	var NO_OUT = this.dsData.getColumn(0, "NO_OUT");
        	var nFindIdx = this.dsACCOUNT.findRow("NO_ACCOUNT", NO_OUT);
        	if(nFindIdx == -1){
        		this.gfnAlert("계좌 은행찾기 오류");
        		return;
        	}else{
        		CD_OUT = this.dsACCOUNT.getColumn(nFindIdx, "CD_BANK"); //은행
        	}

        	for(var i=0;i<this.getOwnerFrame().targetDs.rowcount;i++){
        		if(this.gfnNvl(this.getOwnerFrame().targetDs.getColumn(i, "CHK"), "0") != "1") continue;

        		var nrow = this.dsInsert.addRow();

        		this.dsInsert.setColumn(nrow, "SEND_GB", this.dsData.getColumn(0, "SEND_GB")); //이체구분
        		this.dsInsert.setColumn(nrow, "YM_SALARY", this.dsData.getColumn(0, "YM_SALARY"));
        		this.dsInsert.setColumn(nrow, "TY_SALARY", this.dsData.getColumn(0, "TY_SALARY"));
        		this.dsInsert.setColumn(nrow, "SN_SALARY", this.dsData.getColumn(0, "SN_SALARY"));
        		this.dsInsert.setColumn(nrow, "CD_CORP", this.dsData.getColumn(0, "CD_CORP"));
        		this.dsInsert.setColumn(nrow, "ID_SABUN", this.gfnNvl(this.getOwnerFrame().targetDs.getColumn(i, "ID_SABUN"), ""));
        		this.dsInsert.setColumn(nrow, "DT_SALARY", this.gfnNvl(this.getOwnerFrame().targetDs.getColumn(i, "DT_SALARY"), ""));
        		this.dsInsert.setColumn(nrow, "AM_SALARY", this.getOwnerFrame().targetDs.getColumn(i, "AM_NETPAYSUM"));//급여금액(지급총액)
        		this.dsInsert.setColumn(nrow, "NM_OWNER", this.gfnNvl(this.getOwnerFrame().targetDs.getColumn(i, "NM_OWNER"), ""));
        		this.dsInsert.setColumn(nrow, "NO_IN", this.gfnNvl(this.getOwnerFrame().targetDs.getColumn(i, "CD_ACCOUNT"), "")); //입금계좌
        		this.dsInsert.setColumn(nrow, "CD_IN", this.gfnNvl(this.getOwnerFrame().targetDs.getColumn(i, "CD_BANK"), "")); //입금은행
        		this.dsInsert.setColumn(nrow, "NO_OUT", NO_OUT); //출금계좌
        		this.dsInsert.setColumn(nrow, "CD_OUT", CD_OUT); //출금은행
        		this.dsInsert.setColumn(nrow, "ID_USER", this.AuthClient.ID_USER);
        	}

        	//trace(this.dsInsert.saveXML());

        	if (this.dsInsert.rowcount == 0) return;

        	var strSvcId    = "save";
        	var strSvcType  = "save";
        	var inProc		= "_dsProc";
        	var inData      = "insert=dsInsert";
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

         /************************************************************************
         * Validate
         ************************************************************************/
        this.fnSaveValid = function() {
        	if(this.gfnIsNull(this.dsData.getColumn(0, "NO_OUT"))) {
        		this.fnValidCallback = function() {
        			this.cboACCOUNT.setFocus();
        		}
        		this.gfnAlert("출급계좌를 선택하세요.", "fnValidCallback");
        		return false;
        	}
        	if (this.gfnIsNull(this.dsData.getColumn(0, "SEND_GB"))) {
        		this.fnValidCallback = function() {
        			this.cboTRANS.form.CDTextBox.setFocus();
        		}
        		this.gfnAlert("이체구분을 선택하세요.", "fnValidCallback");
        		return false;
        	}
         	return true;
        };
        /************************************************************************
         * 콜백 이벤트
         ************************************************************************/
        /*
         *	콜백 처리
         */
        this.fnCallback = function(svcID, errorCode, errorMsg)
        {
        	if(svcID == "combo"){
        		this.cboACCOUNT.set_index(0);
        		this.cboTRANS.set_index(0);
         	}
        	else if(svcID == "trans"){
        		this.cboTRANS.set_index(0);
        	}
        	else if(svcID == "save"){

        		if (errorCode == 0) {
        			this.fnSaveAfter = function(){
        				this.getParentContext().close(true);
        			}
        			this.gfnAlert("급여이체가 완료 되었습니다.", "fnSaveAfter");
        			return;
        		} else {
        			this.gfnAlert(errorMsg);
        		}
        	}
        };

        /************************************************************************
         * 코드파인드 이벤트
         ************************************************************************/


        /************************************************************************
         * 그리드 이벤트
         ************************************************************************/
         /************************************************************************
         * 확장버튼 이벤트
         ************************************************************************/
        /************************************************************************
         * 기타 이벤트
         ************************************************************************/
        this.btnOK_onclick = function(obj,e){
        	this.fnSave();
        };

        this.btnCANCLE_onclick = function(obj,e){
        	this.getParentContext().close(false);
        };


        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.form_onload,this);
            this.divData.form.staACCOUNT_bg.addEventHandler("onclick",this.sta04_onclick,this);
            this.divData.form.cboACCOUNT.addEventHandler("onitemchanged",this.fnSearchInit,this);
            this.divData.form.cboTRANS.addEventHandler("onitemchanged",this.fnSearchInit,this);
            this.divData.form.divBtns.form.btnOK.addEventHandler("onclick",this.btnOK_onclick,this);
            this.divData.form.divBtns.form.btnCANCLE.addEventHandler("onclick",this.btnCANCLE_onclick,this);
        };
        this.loadIncludeScript("DAU_SALARYBANK_DLG.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
