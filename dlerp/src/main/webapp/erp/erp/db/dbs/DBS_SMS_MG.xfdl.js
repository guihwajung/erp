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
            this.set_titletext("결산기수");
            if (Form == this.constructor)
            {
                this._setFormPosition(1280,720);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("dsList", this);
            obj._setContents("<ColumnInfo><Column id=\"RM_MSG\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("_dsProc", this);
            obj._setContents("<ColumnInfo><Column id=\"TARGET\" type=\"STRING\" size=\"256\"/><Column id=\"SP\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"TARGET\">select</Col><Col id=\"SP\">DBSPR_SMS_NEW_SELECT</Col></Row><Row><Col id=\"TARGET\">send</Col><Col id=\"SP\">DZZPR_SMS_TRANSMISSION_KSBJ</Col></Row><Row><Col id=\"SP\">DBSPR_SMS_NEW_ADD</Col><Col id=\"TARGET\">add</Col></Row><Row><Col id=\"SP\">DBSPR_SMS_NEW_DELETE</Col><Col id=\"TARGET\">delete</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsSearch", this);
            obj._setContents("<ColumnInfo><Column id=\"SEND_NAME\" type=\"STRING\" size=\"256\"/><Column id=\"SEND_NUMBER\" type=\"STRING\" size=\"256\"/><Column id=\"RECV_NAME\" type=\"STRING\" size=\"256\"/><Column id=\"RECV_NUMBER\" type=\"STRING\" size=\"256\"/><Column id=\"MESSAGE\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"SEND_NAME\"/><Col id=\"SEND_NUMBER\"/><Col id=\"RECV_NAME\"/><Col id=\"RECV_NUMBER\"/><Col id=\"MESSAGE\"/></Row></Rows>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Div("divData","0","0",null,null,"0","0",null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_cssclass("div_DATA_Bg");
            obj.set_text("");
            this.addChild(obj.name, obj);

            obj = new Static("staBg1",null,"31","262","312","0",null,null,null,null,null,this.divData.form);
            obj.set_taborder("13");
            obj.set_cssclass("sta_WF_tablebg");
            this.divData.addChild(obj.name, obj);

            obj = new Grid("objGrid","390","32",null,null,"staBg1:18","0",null,null,null,null,this.divData.form);
            obj.set_taborder("0");
            obj._setContents("");
            this.divData.addChild(obj.name, obj);

            obj = new Static("staBg01","109","32","262","27",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("1");
            obj.set_cssclass("sta_WF_tablebg");
            this.divData.addChild(obj.name, obj);

            obj = new Static("staBg02","109","62","262","27",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("2");
            obj.set_cssclass("sta_WF_tablebg");
            this.divData.addChild(obj.name, obj);

            obj = new Static("staBg03","109","92","262","27",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("3");
            obj.set_cssclass("sta_WF_tablebg");
            this.divData.addChild(obj.name, obj);

            obj = new Static("staBg04","109","122","262","27",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("4");
            obj.set_cssclass("sta_WF_tablebg");
            this.divData.addChild(obj.name, obj);

            obj = new Static("staBg05","108","152","262","307",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("5");
            obj.set_cssclass("sta_WF_tablebg");
            this.divData.addChild(obj.name, obj);

            obj = new Edit("txtSEND_NAME","115","36","250","20",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("6");
            obj.set_readonly("false");
            obj.set_textAlign("left");
            obj.set_inputtype("normal");
            this.divData.addChild(obj.name, obj);

            obj = new Static("staDS_CONTENT05","0","152","109","307",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("7");
            obj.set_text("메시지");
            obj.set_textAlign("center");
            obj.set_cssclass("sta_WF_tablelabelE");
            this.divData.addChild(obj.name, obj);

            obj = new Static("staDS_CONTENT04","0","122","110","27",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("8");
            obj.set_text("수신자번호");
            obj.set_textAlign("center");
            obj.set_cssclass("sta_WF_tablelabelE");
            this.divData.addChild(obj.name, obj);

            obj = new Static("staDS_CONTENT03","0","92","110","27",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("9");
            obj.set_text("수신자명");
            obj.set_textAlign("center");
            obj.set_cssclass("sta_WF_tablelabelE");
            this.divData.addChild(obj.name, obj);

            obj = new Static("staDS_CONTENT02","0","62","110","27",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("10");
            obj.set_text("송신자번호");
            obj.set_textAlign("center");
            obj.set_cssclass("sta_WF_tablelabelE");
            this.divData.addChild(obj.name, obj);

            obj = new Static("staDS_CONTENT01","0","32","110","27",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("11");
            obj.set_text("송신자명");
            obj.set_textAlign("center");
            obj.set_cssclass("sta_WF_tablelabelE");
            this.divData.addChild(obj.name, obj);

            obj = new Static("sta01","0","0","300","22",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("12");
            obj.set_text("SMS 송신");
            obj.set_cssclass("sta_TITLE_Bg");
            this.divData.addChild(obj.name, obj);

            obj = new TextArea("txtRM_MSG",null,"37","249","300","7",null,null,null,null,null,this.divData.form);
            obj.set_taborder("14");
            obj.set_readonly("true");
            obj.set_enable("true");
            obj.set_background("#f3f3f3");
            this.divData.addChild(obj.name, obj);

            obj = new Static("sta00","390","0","230","22",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("15");
            obj.set_text("자주사용하는 메시지");
            obj.set_cssclass("sta_TITLE_Bg");
            this.divData.addChild(obj.name, obj);

            obj = new Static("sta02",null,"0","262","22","0",null,null,null,null,null,this.divData.form);
            obj.set_taborder("16");
            obj.set_text("메시지상세");
            obj.set_cssclass("sta_TITLE_Bg");
            this.divData.addChild(obj.name, obj);

            obj = new TextArea("txtMESSAGE","114","155","250","300",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("17");
            this.divData.addChild(obj.name, obj);

            obj = new Edit("txtRECV_NAME","115","95","250","20",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("18");
            obj.set_readonly("false");
            obj.set_textAlign("left");
            this.divData.addChild(obj.name, obj);

            obj = new Edit("txtSEND_NUMBER","115","65","250","20",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("19");
            obj.set_readonly("false");
            obj.set_textAlign("left");
            obj.set_inputtype("number");
            this.divData.addChild(obj.name, obj);

            obj = new Edit("txtRECV_NUMBER","115","125","250","20",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("20");
            obj.set_readonly("false");
            obj.set_textAlign("left");
            obj.set_inputtype("number");
            this.divData.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this
            obj = new Layout("default","",this._adjust_width,this._adjust_height,this,function(p){});
            obj.set_stepcount("0");
            this.addLayout(obj.name, obj);
            
            // BindItem Information
            obj = new BindItem("item0","divData.form.txtRM_MSG","value","dsList","RM_MSG");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item1","divData.form.txtSEND_NAME","value","dsSearch","SEND_NAME");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item3","divData.form.txtRECV_NAME","value","dsSearch","RECV_NAME");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item5","divData.form.txtMESSAGE","value","dsSearch","MESSAGE");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item6","divData.form.txtSEND_NUMBER","value","dsSearch","SEND_NUMBER");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item2","divData.form.txtRECV_NUMBER","value","dsSearch","RECV_NUMBER");
            this.addChild(obj.name, obj);
            obj.bind();
            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script
        this.registerScript("DBS_SMS_MG.xfdl", function() {
        this.objApp = this.gfnGetApplication();

        this.form_onload = function(obj,e)
        {
        	// -- 필수 -------------------//
        	this.gfnFormOnLoad(this);
        	this.gfnFormInfo(this);
        	// ---------------------------//

        	this.fnSetVariable();
        	this.fnSetButton();
        	this.fnSetExtendButton();
        	this.fnSetParameter();
        	this.fnSetEvent();

        	this.dsSearch.setColumn(0, "SEND_NAME", this.AuthClient.DS_HNAME);

        	// 타화면에서 오픈시 넘어오는 파라미터 처리
        	if(!this.gfnIsNull(this.getOwnerFrame().RECV_NUMBER) && !this.gfnIsNull(this.getOwnerFrame().RECV_NAME) && !this.gfnIsNull(this.getOwnerFrame().MESSAGE)) {
        		this.dsSearch.setColumn(0, "RECV_NUMBER", this.getOwnerFrame().RECV_NUMBER);
        		this.dsSearch.setColumn(0, "RECV_NAME", this.getOwnerFrame().RECV_NAME);
        		this.dsSearch.setColumn(0, "MESSAGE", this.getOwnerFrame().MESSAGE);
        		this.dsSearch.setColumn(0, "SEND_NUMBER", this.getOwnerFrame().SEND_NUMBER);
        	}

        	this.FormBtns.Select.click();
        };

        /************************************************************************
         * 변수 선언
         ************************************************************************/
        this.fnSetVariable = function() {
        	this.txtSEND_NAME = this.divData.form.txtSEND_NAME;
        	this.txtSEND_NUMBER = this.divData.form.txtSEND_NUMBER;
        	this.txtRECV_NAME = this.divData.form.txtRECV_NAME;
        	this.txtRECV_NUMBER = this.divData.form.txtRECV_NUMBER;
        	this.txtMESSAGE = this.divData.form.txtMESSAGE;

        	this.dxGrid = this.divData.form.objGrid;
        };

        this.fnSetButton = function() {
        	// Select, Add, Del, Save, Excel, Print
        	// SubSelect, SubAdd, SubDel, SuubSave, SubExcel
        }

        this.fnSetExtendButton = function() {
        	this.btnSendSms = this.gfnFormButtonAdd("btnSendSms", "fnSendSms");  // SMS송신
        	this.btnViewSendRslt = this.gfnFormButtonAdd("btnViewSendRslt", "fnViewSendRslt");  // 송신결과
        	this.btnSelMsg = this.gfnFormButtonAdd("btnSelMsg", "fnSelMsg");  	// 메시지선택
        	this.btnAddMsg = this.gfnFormButtonAdd("btnAddMsg", "fnAddMsg");  	// 메시지등록
        	this.btnRemoveMsg = this.gfnFormButtonAdd("btnRemoveMsg", "fnRemoveMsg");  // 메시지삭제
        };


        this.fnSetParameter = function() {

        	this.dsSelect = new Dataset();
        	this.dsSelect.addColumn("TY_WORK", "string");

        	this.dsSend = new Dataset();
        	this.dsSend.addColumn("TR_PHONE", "string");
        	this.dsSend.addColumn("TR_CALLBACK", "string");
        	this.dsSend.addColumn("TR_MSG", "string");
        	this.dsSend.addColumn("TRAN_DESC", "string");
        	this.dsSend.addColumn("ID_USER", "string");

        	this.dsAdd = new Dataset();
        	this.dsAdd.addColumn("RM_MSG", "string");

        	this.dsDelete = new Dataset();
        	this.dsDelete.addColumn("NO_SEQ", "int");
        }

        this.fnSetEvent = function() {
        	// 그리드 초기화
        	this.gfnGridInit(this.dxGrid, this.dsList, "DB", "DBS_SMS_NEW");

        	this.dxGrid.set_selecttype("cell");
        }

        this.fnCallback = function(svcID, errorCode, errorMsg) {
        	if(svcID == "select") {
        		this.gfnGridAfterSelect(this.dxGrid);
        	} else if(svcID == "send") {
        		if (errorCode == 0) {
        			//this.FormBtns.Select.click();
        			this.gfnAlert("SMS전송이 완료 되었습니다.");
        		} else {
        			this.gfnAlert(errorMsg);
        		}
        	} else if(svcID == "add") {
        		if (errorCode == 0) {
        			this.FormBtns.Select.click();
        		} else {
        			this.gfnAlert(errorMsg);
        		}
        	} else if(svcID == "delete") {
        		if (errorCode == 0) {
        			this.FormBtns.Select.click();
        		} else {
        			this.gfnAlert(errorMsg);
        		}
        	}
        }

        this.fnSelectValidation = function() {

        	var validate = true;



        	return validate;
        }

        this.fnSelect = function() {

        	//if (!this.fnSelectValidation()) return;

        	this.gfnGridBeforeSelect(this.dxGrid);

        	this.dsSelect.clearData();
        	this.dsSelect.addRow();

        	this.dsSelect.setColumn(0, "TY_WORK", "Q");

        	var strSvcId    = "select";
        	var strSvcType  = "grid";
        	var inProc		= "_dsProc";
        	var inData      = "select=dsSelect";
        	var outData     = "dsList=select0";
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

        this.fnAdd = function() {
        	var nrow = this.gfnGridAdd(this.dxGrid);
        }

        this.fnDel = function() {
        	this.gfnGridDel(this.dxGrid);

        }

        this.fnSave = function() {

        }

        this.fnExcel = function() {
        	this.gfnExcelExport(this.dxGrid);
        }

        this.fnPrint = function() {

        }

        /************************************************************************
         * 코드파인드 이벤트
         ************************************************************************/

        /************************************************************************
         * 기타 이벤트
         ************************************************************************/
        /*
         *	조회 조건 변경시 초기화
         */
        this.dsSearch_onvaluechanged = function(obj,e) {
        	if(e.oldvalue != e.newvalue) {
        		this.gfnSetFormStatus(this);	// 정보를 입력,수정해도 폼상태는 초기화시킨다(화면닫을때 변경정보있다는 메시지 안뜨게 함)
        	}
        };


        // SMS송신 버튼 클릭시 팝업화면 호출
        this.fnSendSms = function(obj,e) {
        	// 선택된 row가 있을 경우에만 팝업을 띄움
        	//if (!this.gfnGridIsRow(this.dxGrid)) { return false; }

        	var strSEND_NUMBER = nexacro.replaceAll(this.dsSearch.getColumn(0,"SEND_NUMBER"), "-", "");

        	if (!this.gfnIsNull(strSEND_NUMBER) && strSEND_NUMBER.length >= 7) {
        	}else{
        		this.fnVaidateCallback = function() {
        			this.txtSEND_NUMBER.setFocus();
        		}
        		this.gfnAlert("송신자번호가 올바르지 않습니다.", "fnVaidateCallback");
        		return;
        	}

        	var strRECV_NUMBER = nexacro.replaceAll(this.dsSearch.getColumn(0,"RECV_NUMBER"), "-", "");

        	if (!this.gfnIsNull(strRECV_NUMBER) && strRECV_NUMBER.length >= 10) {
        	}else{
        		this.fnVaidateCallback = function() {
        			this.txtRECV_NUMBER.setFocus();
        		}
        		this.gfnAlert("수신자번호가 올바르지 않습니다.", "fnVaidateCallback");
        		return;
        	}

        	if (this.gfnIsNull(this.dsSearch.getColumn(0,"SEND_NAME"))) {
        		this.fnVaidateCallback = function() {
        			this.txtSEND_NAME.setFocus();
        		}
        		this.gfnAlert("송신자명을 입력하세요.", "fnVaidateCallback");
        		return;
        	}

        	if (this.gfnIsNull(this.dsSearch.getColumn(0,"RECV_NAME"))) {
        		this.fnVaidateCallback = function() {
        			this.txtRECV_NAME.setFocus();
        		}
        		this.gfnAlert("수신자명을 입력하세요.", "fnVaidateCallback");
        		return;
        	}

        	if (this.gfnIsNull(this.dsSearch.getColumn(0,"MESSAGE"))) {
        		this.fnVaidateCallback = function() {
        			this.txtMESSAGE.setFocus();
        		}
        		this.gfnAlert("메시지를 입력하세요.", "fnVaidateCallback");
        		return;
        	}


        	this.gfnConfirm("SMS를 전송하시겠습니까?", "fnSmsSend_callback");
        }


        this.fnSmsSend_callback = function(strId, val)
        {
        	if(val == true) {
        		this.dsSend.clearData();

        		this.dsSend.addRow();

        		this.dsSend.setColumn(0, "TR_PHONE", this.dsSearch.getColumn(0, "RECV_NUMBER"));
        		this.dsSend.setColumn(0, "TR_CALLBACK", this.dsSearch.getColumn(0, "SEND_NUMBER"));
        		this.dsSend.setColumn(0, "TR_MSG", this.dsSearch.getColumn(0, "MESSAGE"));
        		this.dsSend.setColumn(0, "TRAN_DESC", "");
        		this.dsSend.setColumn(0, "ID_USER", this.AuthClient.ID_USER);

        		if (this.dsSend.rowcount == 0) return;

        		var strSvcId    = "send";
        		var strSvcType  = "save";
        		var inProc		= "_dsProc";
        		var inData      = "send=dsSend";
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
        }


        // 송신결과 버튼 클릭시 팝업화면 호출
        this.fnViewSendRslt = function(obj,e) {
        	// 선택된 row가 있을 경우에만 팝업을 띄움
        	//if (!this.gfnGridIsRow(this.dxGrid)) { return false; }

        	var param = {};
        	//param.SEND_NUMBER = this.dsSearch.getColumn(0, "SEND_NUMBER");
        	//param.RECV_NUMBER = this.dsSearch.getColumn(0, "RECV_NUMBER");

        	// 화면 오픈.
        	// CD_MODULE은 보통 같은 모듈에서 호출하는 경우가 많으니 this.FormInfo.CD_MODULE 사용
        	// 타 모듈 화면 호출시 지정할것.

        	this.gfnFormOpen("DBV", "DRB_SMS_RESULT", "", param);
        }


        // 메시지선택 버튼 클릭시 팝업화면 호출
        this.fnSelMsg = function(obj,e) {
        	// 선택된 row가 있을 경우에만 팝업을 띄움
        	if (!this.gfnGridIsRow(this.dxGrid)) { return false; }

        	this.dsSearch.setColumn(0, "MESSAGE", this.dsList.getColumn(this.dsList.rowposition, "RM_MSG"));
        }


        // 메시지등록 버튼 클릭시 팝업화면 호출
        this.fnAddMsg = function(obj,e) {
        	// 선택된 row가 있을 경우에만 팝업을 띄움
        	//if (!this.gfnGridIsRow(this.dxGrid)) { return false; }

        	if(this.gfnIsNull(this.dsSearch.getColumn(0, "MESSAGE"))) {
        		this.fnVaidateCallback = function() {
        			this.txtMESSAGE.setFocus();
        		}
        		this.gfnAlert("메시지를 입력하세요.","fnVaidateCallback");
        		return;
        	}

        	this.dsAdd.clearData();

        	this.dsAdd.addRow();

        	this.dsAdd.setColumn(0, "RM_MSG", this.dsSearch.getColumn(0, "MESSAGE"));

        	if (this.dsAdd.rowcount == 0) return;

        	var strSvcId    = "add";
        	var strSvcType  = "save";
        	var inProc		= "_dsProc";
        	var inData      = "add=dsAdd";
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


        // 메시지삭제 버튼 클릭시 팝업화면 호출
        this.fnRemoveMsg = function(obj,e) {
        	// 선택된 row가 있을 경우에만 팝업을 띄움
        	if (!this.gfnGridIsRow(this.dxGrid)) { return false; }

        	this.gfnConfirm("삭제하시겠습니까?", "fnRemoveMsg_callback");
        }

        this.fnRemoveMsg_callback = function(strId, val)
        {
        	if(val == true) {
        		this.dsDelete.clearData();

        		this.dsDelete.addRow();

        		this.dsDelete.setColumn(0, "NO_SEQ", this.dsList.getColumn(this.dsList.rowposition, "NO_SEQ"));

        		if (this.dsDelete.rowcount == 0) return;

        		var strSvcId    = "delete";
        		var strSvcType  = "save";
        		var inProc		= "_dsProc";
        		var inData      = "delete=dsDelete";
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
        }

        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.form_onload,this);
            this.dsSearch.addEventHandler("onvaluechanged",this.dsSearch_onvaluechanged,this);
        };
        this.loadIncludeScript("DBS_SMS_MG.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
