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
            this.set_titletext("New Form");
            this.getSetter("maxwidth").set("1200");
            this.getSetter("maxheight").set("700");
            if (Form == this.constructor)
            {
                this._setFormPosition(1200,700);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("dsListMaster", this);
            obj._setContents("<ColumnInfo><Column id=\"DS_TITLE\" type=\"STRING\" size=\"256\"/><Column id=\"DS_ETITLE\" type=\"STRING\" size=\"256\"/><Column id=\"DS_HNAME\" type=\"STRING\" size=\"256\"/><Column id=\"DS_DEPT\" type=\"STRING\" size=\"256\"/><Column id=\"DT_START\" type=\"STRING\" size=\"256\"/><Column id=\"NO_DOC\" type=\"STRING\" size=\"256\"/><Column id=\"V_PARAM01\" type=\"STRING\" size=\"256\"/><Column id=\"V_PARAM02\" type=\"STRING\" size=\"256\"/><Column id=\"V_PARAM03\" type=\"STRING\" size=\"256\"/><Column id=\"V_PARAM04\" type=\"STRING\" size=\"256\"/><Column id=\"BTNAPPR\" type=\"STRING\" size=\"256\"/><Column id=\"BTNREJECT\" type=\"STRING\" size=\"256\"/><Column id=\"BTNLINES\" type=\"STRING\" size=\"256\"/><Column id=\"BTNISSUE\" type=\"STRING\" size=\"256\"/><Column id=\"BTNCANCEL\" type=\"STRING\" size=\"256\"/><Column id=\"BTNFILE\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("_dsProc", this);
            obj._setContents("<ColumnInfo><Column id=\"TARGET\" type=\"STRING\" size=\"256\"/><Column id=\"SP\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"TARGET\">init</Col><Col id=\"SP\">DZRPR_APPROVAL_INIT</Col></Row><Row><Col id=\"TARGET\">selectmaster</Col><Col id=\"SP\">DZRPR_APPROVAL_MASTER_SELECT</Col></Row><Row><Col id=\"TARGET\">line1</Col><Col id=\"SP\">DZRPR_APPROVAL_LINE_SELECT</Col></Row><Row><Col id=\"TARGET\">line2</Col><Col id=\"SP\">DZRPR_APPROVAL_LINE_SELECT</Col></Row><Row><Col id=\"TARGET\">exec</Col><Col id=\"SP\">DZRPR_APPROVAL_EXECUTE</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsSearch", this);
            obj._setContents("<ColumnInfo><Column id=\"ID_AP\" type=\"STRING\" size=\"256\"/><Column id=\"ID_AP_TYPE\" type=\"STRING\" size=\"256\"/><Column id=\"V1\" type=\"STRING\" size=\"256\"/><Column id=\"V2\" type=\"STRING\" size=\"256\"/><Column id=\"V3\" type=\"STRING\" size=\"256\"/><Column id=\"V4\" type=\"STRING\" size=\"256\"/><Column id=\"DS_ETITLE\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"ID_AP\"/><Col id=\"ID_AP_TYPE\"/><Col id=\"V1\"/><Col id=\"V2\"/><Col id=\"V3\"/><Col id=\"V4\"/><Col id=\"DS_ETITLE\"/></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsApprLines1", this);
            obj.set_useclientlayout("false");
            obj._setContents("");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsApprLines2", this);
            obj.set_useclientlayout("false");
            obj._setContents("");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsInit", this);
            obj._setContents("");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Div("divData","0","0",null,"200","0",null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_cssclass("div_DATA_Bg");
            obj.set_text("");
            this.addChild(obj.name, obj);

            obj = new Div("divDataApprTitle","0","0",null,"40","0",null,null,null,null,null,this.divData.form);
            obj.set_taborder("0");
            obj.set_background("");
            this.divData.addChild(obj.name, obj);

            obj = new Static("staApprNm","0","0",null,null,"0","0",null,null,null,null,this.divData.form.divDataApprTitle.form);
            obj.set_taborder("0");
            obj.set_text("전자결재 SAMPLE");
            obj.set_font("normal 20pt/normal \"Arial\"");
            obj.set_textAlign("center");
            obj.set_textDecoration("underline");
            this.divData.form.divDataApprTitle.addChild(obj.name, obj);

            obj = new Div("divDataApprLine","0","divDataApprTitle:10",null,"80","0",null,null,null,null,null,this.divData.form);
            obj.set_taborder("1");
            this.divData.addChild(obj.name, obj);

            obj = new Static("sta01","0","0","50",null,null,"0",null,null,null,null,this.divData.form.divDataApprLine.form);
            obj.set_taborder("0");
            obj.set_text("결재");
            obj.set_cssclass("sta_WF_tablelabel");
            obj.set_textAlign("center");
            this.divData.form.divDataApprLine.addChild(obj.name, obj);

            obj = new Grid("objGridAppr1","sta01:-1","0",null,null,"50.5%","0",null,null,null,null,this.divData.form.divDataApprLine.form);
            obj.set_taborder("1");
            obj._setContents("");
            this.divData.form.divDataApprLine.addChild(obj.name, obj);

            obj = new Static("sta02","objGridAppr1:10","0","50",null,null,"0",null,null,null,null,this.divData.form.divDataApprLine.form);
            obj.set_taborder("2");
            obj.set_text("합의");
            obj.set_cssclass("sta_WF_tablelabel");
            obj.set_textAlign("center");
            this.divData.form.divDataApprLine.addChild(obj.name, obj);

            obj = new Grid("objGridAppr2","sta02:-1","0",null,null,"0","0",null,null,null,null,this.divData.form.divDataApprLine.form);
            obj.set_taborder("3");
            obj._setContents("");
            this.divData.form.divDataApprLine.addChild(obj.name, obj);

            obj = new Div("divDataMaster","0","divDataApprLine:10",null,"60","0",null,null,null,null,null,this.divData.form);
            obj.set_taborder("2");
            obj.set_text("");
            this.divData.addChild(obj.name, obj);

            obj = new Static("sta01","0","0","150","30",null,null,null,null,null,null,this.divData.form.divDataMaster.form);
            obj.set_taborder("0");
            obj.set_text("기안자");
            obj.set_cssclass("sta_WF_tablelabel");
            obj.set_textAlign("center");
            this.divData.form.divDataMaster.addChild(obj.name, obj);

            obj = new Static("sta02","sta01:-1","0","270","30",null,null,null,null,null,null,this.divData.form.divDataMaster.form);
            obj.set_taborder("1");
            obj.set_cssclass("sta_WF_tablebg");
            this.divData.form.divDataMaster.addChild(obj.name, obj);

            obj = new Static("sta00","sta02:-1","0","150","30",null,null,null,null,null,null,this.divData.form.divDataMaster.form);
            obj.set_taborder("2");
            obj.set_text("기안부서");
            obj.set_cssclass("sta_WF_tablelabel");
            obj.set_textAlign("center");
            this.divData.form.divDataMaster.addChild(obj.name, obj);

            obj = new Static("sta03","sta00:-1","0","270","30",null,null,null,null,null,null,this.divData.form.divDataMaster.form);
            obj.set_taborder("3");
            obj.set_cssclass("sta_WF_tablebg");
            this.divData.form.divDataMaster.addChild(obj.name, obj);

            obj = new Static("sta04","sta03:-1","0","150","30",null,null,null,null,null,null,this.divData.form.divDataMaster.form);
            obj.set_taborder("4");
            obj.set_text("기안일자");
            obj.set_cssclass("sta_WF_tablelabel");
            obj.set_textAlign("center");
            this.divData.form.divDataMaster.addChild(obj.name, obj);

            obj = new Static("sta05","sta04:-1","0",null,"30","0",null,null,null,null,null,this.divData.form.divDataMaster.form);
            obj.set_taborder("5");
            obj.set_cssclass("sta_WF_tablebg");
            this.divData.form.divDataMaster.addChild(obj.name, obj);

            obj = new Static("sta06","0","sta01:-1","150","30",null,null,null,null,null,null,this.divData.form.divDataMaster.form);
            obj.set_taborder("6");
            obj.set_text("제목");
            obj.set_cssclass("sta_WF_tablelabel");
            obj.set_textAlign("center");
            this.divData.form.divDataMaster.addChild(obj.name, obj);

            obj = new Static("sta07","sta06:-1","sta02:-1","688","30",null,null,null,null,null,null,this.divData.form.divDataMaster.form);
            obj.set_taborder("7");
            obj.set_cssclass("sta_WF_tablebg");
            this.divData.form.divDataMaster.addChild(obj.name, obj);

            obj = new Static("sta08","sta07:-1","sta04:-1","150","30",null,null,null,null,null,null,this.divData.form.divDataMaster.form);
            obj.set_taborder("8");
            obj.set_text("문서번호");
            obj.set_cssclass("sta_WF_tablelabel");
            obj.set_textAlign("center");
            this.divData.form.divDataMaster.addChild(obj.name, obj);

            obj = new Static("sta09","sta08:-1","sta05:-1",null,"30","0",null,null,null,null,null,this.divData.form.divDataMaster.form);
            obj.set_taborder("9");
            obj.set_cssclass("sta_WF_tablebg");
            this.divData.form.divDataMaster.addChild(obj.name, obj);

            obj = new Div("divDetail","0","divData:0",null,null,"0","0",null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_cssclass("div_DATA_Bg");
            obj.set_text("");
            obj.set_url("dzr::DZR_AP_DETAIL_SAMPLE.xfdl");
            this.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this
            obj = new Layout("default","",this._adjust_width,this._adjust_height,this,function(p){});
            this.addLayout(obj.name, obj);
            
            // BindItem Information
            obj = new BindItem("item0","divData.form.divDataMaster.form.sta02","text","dsListMaster","DS_HNAME");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item1","divData.form.divDataMaster.form.sta03","text","dsListMaster","DS_DEPT");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item2","divData.form.divDataMaster.form.sta05","text","dsListMaster","DT_START");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item3","divData.form.divDataMaster.form.sta07","text","dsListMaster","DS_ETITLE");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item4","divData.form.divDataMaster.form.sta09","text","dsListMaster","NO_DOC");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item5","divData.form.divDataApprTitle.form.staApprNm","text","dsListMaster","DS_TITLE");
            this.addChild(obj.name, obj);
            obj.bind();
            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {
            this._addPreloadList("fdl","dzr::DZR_AP_DETAIL_SAMPLE.xfdl");
        };
        
        // User Script
        this.registerScript("DZR_AP_SAMPLE2.xfdl", function() {
        this.objApp = this.gfnGetApplication();

        this.ID_AP_TYPE = "DW11";

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

        	// 기본 버튼(입력,저장 등..) 숨김처리
        	this.objApp.getActiveForm().divTopBtn.form.btnSel.set_visible(false);
        	this.objApp.getActiveForm().divTopBtn.form.btnAdd.set_visible(false);
        	this.objApp.getActiveForm().divTopBtn.form.btnSav.set_visible(false);
        	this.objApp.getActiveForm().divTopBtn.form.btnDel.set_visible(false);
        	this.objApp.getActiveForm().divTopBtn.form.btnExl.set_visible(false);
        	this.objApp.getActiveForm().divTopBtn.form.btnPrt.set_visible(false);
        	this.objApp.getActiveForm().divTopBtn.form.btnCls.set_visible(false);
        	this.objApp.getActiveForm().divTopBtn.form.btnSelb.set_visible(false);
        	this.objApp.getActiveForm().divTopBtn.form.btnAddb.set_visible(false);
        	this.objApp.getActiveForm().divTopBtn.form.btnSavb.set_visible(false);
        	this.objApp.getActiveForm().divTopBtn.form.btnDelb.set_visible(false);
        	this.objApp.getActiveForm().divTopBtn.form.btnExlb.set_visible(false);
        	this.objApp.getActiveForm().divTopBtn.form.btnPrtb.set_visible(false);
        	this.objApp.getActiveForm().divTopBtn.form.btnClsb.set_visible(false);
        	this.objApp.getActiveForm().divTopBtn.form.btnRes.set_visible(false);

        	this.dsSearch.setColumn(0, "V1", this.gfnIsNull(this.getOwnerFrame().V1) ? "" : this.getOwnerFrame().V1);
        	this.dsSearch.setColumn(0, "V2", this.gfnIsNull(this.getOwnerFrame().V2) ? "" : this.getOwnerFrame().V2);
        	this.dsSearch.setColumn(0, "V3", this.gfnIsNull(this.getOwnerFrame().V3) ? "" : this.getOwnerFrame().V3);
        	this.dsSearch.setColumn(0, "V4", this.gfnIsNull(this.getOwnerFrame().V4) ? "" : this.getOwnerFrame().V4);
        	this.dsSearch.setColumn(0, "DS_ETITLE", this.getOwnerFrame().DS_ETITLE);

        	if(this.gfnIsNull(this.getOwnerFrame().ID_AP)) {
        		//채번 후 조회
        		this.fnInit();
        	}
        	else {
        		//조회
        		this.dsSearch.setColumn(0, "ID_AP", this.getOwnerFrame().ID_AP);
        		this.fnSelect();
        	}
        };

        /************************************************************************
         * 버튼 설정 : 화면(Tab) 전환시 마다 호출
         ************************************************************************/
        this.fnSetButton = function() {
        }

        /************************************************************************
         * 확장 버튼 : 화면별 버튼 설정 ID, function 연결
         ************************************************************************/
        this.fnSetExtendButton = function() {
        	this.btn1 = this.gfnFormButtonAdd("btn1", "fnAppr");	//승인
        	this.btn2 = this.gfnFormButtonAdd("btn2", "fnAppr");	//반려
        	this.btn3 = this.gfnFormButtonAdd("btn3", "fnBtn3");	//결재선
        	this.btn4 = this.gfnFormButtonAdd("btn4", "fnAppr");	//상신
        	this.btn5 = this.gfnFormButtonAdd("btn5", "fnAppr");	//상신취소
        	this.btn6 = this.gfnFormButtonAdd("btn6", "fnBtn6");	//파일첨부
        	this.btn7 = this.gfnFormButtonAdd("btn7", "fnAppr");	//재기안
        	this.btn8 = this.gfnFormButtonAdd("btn8", "fnAppr");	//수신접수
        	this.btn9 = this.gfnFormButtonAdd("btn9", "fnAppr");	//삭제
        };

        /************************************************************************
         * 변수 선언
         ************************************************************************/
        this.fnSetVariable = function() {
        	//Title
        	this.staApprNm = this.divData.form.divDataApprTitle.form.staApprNm;

        	// 결재선
        	this.dxGridAppr1 = this.divData.form.divDataApprLine.form.objGridAppr1;
        	this.dxGridAppr2 = this.divData.form.divDataApprLine.form.objGridAppr2;
        };

        /************************************************************************
         * 이벤트 설정
         ************************************************************************/
        this.fnSetEvent = function() {
        	//결재선 그리드 세팅
        	this.gfnGridInit(this.dxGridAppr1, this.dsApprLines1, "DZ", "DZR_APLINES_01");
        	this.gfnGridInit(this.dxGridAppr2, this.dsApprLines2, "DZ", "DZR_APLINES_01");

        	this.dxGridAppr1.set_extendsizetype("none");
        	this.dxGridAppr1.set_scrollbartype("none none");	// 가로 스크롤이 생기지 않게 세팅
        	this.dxGridAppr2.set_extendsizetype("none");
        	this.dxGridAppr2.set_scrollbartype("none none");	// 가로 스크롤이 생기지 않게 세팅
        }

        /************************************************************************
         * 파라미터 설정
         ************************************************************************/
        this.fnSetParameter = function() {
        	this.dsApprInit = new Dataset();
        	this.dsApprInit.addColumn("ID_AP_OUT", "string");
        	this.dsApprInit.addColumn("ID_AP_TYPE", "string");
        	this.dsApprInit.addColumn("PARAM01", "string");
        	this.dsApprInit.addColumn("PARAM02", "string");
        	this.dsApprInit.addColumn("PARAM03", "string");
        	this.dsApprInit.addColumn("PARAM04", "string");
        	this.dsApprInit.addColumn("DS_TITLE", "string");
        	this.dsApprInit.addColumn("ID_USER", "string");

        	this.dsLine1 = new Dataset();
        	this.dsLine1.addColumn("ID_AP", "string");
        	this.dsLine1.addColumn("TY_GUBUN", "string");

        	this.dsLine2 = new Dataset();
        	this.dsLine2.addColumn("ID_AP", "string");
        	this.dsLine2.addColumn("TY_GUBUN", "string");

        	this.dsMaster = new Dataset();
        	this.dsMaster.addColumn("ID_AP", "string");
        	this.dsMaster.addColumn("ID_USER", "string");

        	this.dsExec = new Dataset();
        	this.dsExec.addColumn("ID_AP", "string");
        	this.dsExec.addColumn("ST_APPR", "string");
        	this.dsExec.addColumn("ID_USER", "string");

        	this.dsSaveMaster = new Dataset();
        	this.dsSaveMaster.addColumn("ID_AP", "string");
        	this.dsSaveMaster.addColumn("DS_ETITLE", "string");
        	this.dsSaveMaster.addColumn("ID_USER", "string");

        }


        /************************************************************************
         * 버튼 이벤트
         ************************************************************************/
        //결재정보 조회
        this.fnSelect = function() {
        	//if (!this.fnSelectValidate()) return false;

        	this.dsLine1.clearData();
        	this.dsLine1.addRow();
        	this.dsLine1.setColumn(0, "ID_AP", this.dsSearch.getColumn(0, "ID_AP"));
        	this.dsLine1.setColumn(0, "TY_GUBUN", "결재");

        	this.dsLine2.clearData();
        	this.dsLine2.addRow();
        	this.dsLine2.setColumn(0, "ID_AP", this.dsSearch.getColumn(0, "ID_AP"));
        	this.dsLine2.setColumn(0, "TY_GUBUN", "합의");

        	this.dsMaster.clearData();
        	this.dsMaster.addRow();
        	this.dsMaster.setColumn(0, "ID_AP", this.dsSearch.getColumn(0, "ID_AP"));
        	this.dsMaster.setColumn(0, "ID_USER", this.AuthClient.ID_USER);


        	var strSvcId    = "master";
        	var strSvcType  = "grid";
        	var inProc		= "_dsProc";
         	var inData      = "line1=dsLine1 line2=dsLine2 selectmaster=dsMaster";
         	var outData     = "dsApprLines1=line10 dsApprLines2=line20 dsListMaster=selectmaster0";
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
        /*
         *	조회 Validate
         */
        this.fnSelectValidate = function() {
        	var validate = true;

        	return validate;
        };

        /************************************************************************
         * 콜백 이벤트
         ************************************************************************/
        /*
         *	콜백 처리
         */
        this.fnCallback = function(svcID, errorCode, errorMsg) {
        	if (svcID == "init") {
        		if (this.dsInit.rowcount > 0) {
        			//채번 후 결재선/결재정보 조회
        			this.dsSearch.setColumn(0, "ID_AP", this.dsInit.getColumn(0, "ID_AP_OUT"));

        			this.fnSelect();
        		}
        	}
        	else if (svcID == "master") {
        		//결재선 Height 설정
        		if(this.dsApprLines1.rowcount > 0) {
        			this.dxGridAppr1.setRealRowSize(0, 24);
        			this.dxGridAppr1.setRealRowSize(1, 26);
        		}
        		if(this.dsApprLines2.rowcount > 0) {
        			this.dxGridAppr2.setRealRowSize(0, 24);
        			this.dxGridAppr2.setRealRowSize(1, 26);
        		}

        		if (this.dsListMaster.rowcount > 0) {
        			this.btn1.set_visible(this.dsListMaster.getColumn(0, "BTNAPPR") != "H");
        			this.btn2.set_visible(this.dsListMaster.getColumn(0, "BTNREJECT") != "H");
        			this.btn3.set_visible(this.dsListMaster.getColumn(0, "BTNLINES") != "H");
        			this.btn4.set_visible(this.dsListMaster.getColumn(0, "BTNISSUE") != "H");
        			this.btn5.set_visible(this.dsListMaster.getColumn(0, "BTNCANCEL") != "H");
        			this.btn6.set_visible(this.dsListMaster.getColumn(0, "BTNFILE") != "H");
        			this.btn7.set_visible(this.dsListMaster.getColumn(0, "BTNRE") != "H");
        			this.btn8.set_visible(this.dsListMaster.getColumn(0, "BTNAC") != "H");
        			this.btn9.set_visible(this.dsListMaster.getColumn(0, "BTNDE") != "H");

        			// 확장버튼 숨김 처리 후 위치조정
        			var arrBtns = [];
        			for (var i = this.BtnsInfo.length - 1; i >= 0; i--) {
        				if (this.BtnsInfo[i].COMP_BUTTON.visible)
        					arrBtns.push(this.BtnsInfo[i].COMP_BUTTON);
        			}

        			var r = 0;
        			for(var i = 0; i <= arrBtns.length - 1; i++) {
        				var btn = arrBtns[i];
        				if (i == 0)
        					btn.set_right(0);
        				else {
        					btn.set_right(r + 2);
        				}

        				r = btn.right + btn.width;
        			}

        			this.btn1.set_enable(this.dsListMaster.getColumn(0, "BTNAPPR") == "Y");
        			this.btn2.set_enable(this.dsListMaster.getColumn(0, "BTNREJECT") == "Y");
        			this.btn3.set_enable(this.dsListMaster.getColumn(0, "BTNLINES") == "Y");
        			this.btn4.set_enable(this.dsListMaster.getColumn(0, "BTNISSUE") == "Y");
        			this.btn5.set_enable(this.dsListMaster.getColumn(0, "BTNCANCEL") == "Y");
        			this.btn6.set_enable(this.dsListMaster.getColumn(0, "BTNFILE") == "Y");
        			this.btn7.set_enable(this.dsListMaster.getColumn(0, "BTNRE") == "Y");
        			this.btn8.set_enable(this.dsListMaster.getColumn(0, "BTNAC") == "Y");
        			this.btn9.set_enable(this.dsListMaster.getColumn(0, "BTNDE") == "Y");

        			// 상태값이 00 이면 제목 활성화
        			if (this.dsListMaster.getColumn(0, "ST_APPR") == "00")
        				this.txtDS_ETITLE.set_readonly(false);
        			else
        				this.txtDS_ETITLE.set_readonly(true);

        			// 결재정보 조회후 결재본분 내역 조회
        			this.divDetail.form.fnSelect();
        		}
        	}
        	else if(svcID == "savemaster") {
        		if (errorCode == 0) {
        			//this.fnExec("01");
        			this.fnSave();
        		} else {
        			this.gfnAlert(errorMsg);
        		}
        	}
        	else if(svcID == "save") {
        		if (errorCode == 0) {
        			this.fnExec("01");	//상신
        		} else {
        			this.gfnAlert(errorMsg);
        		}
        	}
        	else if(svcID == "exec") {
        		if (errorCode == 0) {
        			//this.FormBtns.Select.click();
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
         * 확장버튼 이벤트
         ************************************************************************/
         // 승인/반려/상신/상신취소 처리
        this.fnAppr = function(obj,e) {

        	var status = "";
        	switch (obj.name) {
        		case "btnExt_btn1":	//승인
        			status = "03";
        			break;
        		case "btnExt_btn2":	//반려
        			status = "04";
        			break;
        		case "btnExt_btn4":	//상신
        			status = "01";
        			break;
        		case "btnExt_btn5":	//상신취소
        			status = "05";
        			break;
        		case "btnExt_btn7":	//재기안
        			status = "RE";
        			break;
        		case "btnExt_btn8":	//수신접수
        			status = "AC";
        			break;
        		case "btnExt_btn9":	//삭제
        			status = "DE";
        			break;
        	}

        	if (status == "01") {
        		this.fnSave();
        	}
        	else {
        		this.fnExec(stauts);
        	}
        }

        this.fnExec = function(status) {
        	this.dsExec.clearData();
        	this.dsExec.addRow();

        	this.dsExec.setColumn(0, "ID_AP", this.dsSearch.getColumn(0, "ID_AP"));
        	this.dsExec.setColumn(0, "ST_APPR", status);
        	this.dsExec.setColumn(0, "ID_USER", this.AuthClient.ID_USER);

        	var strSvcId    = "exec";
        	var strSvcType  = "save";
        	var inProc		= "_dsProc";
        	var inData      = "exec=dsExec";
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

        this.fnSaveMaster = function() {
        	this.dsSaveMaster.clearData();
        	this.dsSaveMaster.addRow();

        	this.dsSaveMaster.setColumn(0, "ID_AP", this.dsSearch.getColumn(0, "ID_AP"));
        	this.dsSaveMaster.setColumn(0, "DS_ETITLE", this.dsListMaster.getColumn(0, "DS_ETITLE"));
        	this.dsSaveMaster.setColumn(0, "ID_USER", this.AuthClient.ID_USER);

        	var strSvcId    = "savemaster";
        	var strSvcType  = "save";
        	var inProc		= "_dsProc";
        	var inData      = "savemaster=dsSaveMaster";
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

        //결재선
        this.fnBtn3 = function(obj,e) {
        	var param = {};
        	param.ID_AP = this.dsSearch.getColumn(0, "ID_AP");

        	this.gfnFormOpenNonAuth("DZR", "DZR_APLINES", "", param, 1000, 420);
        };

        //파일첨부
        this.fnBtn6 = function(obj,e) {
        	var fileManager = {};
        	fileManager.CD_GUBUN = "DZAP";
        	fileManager.CD_DIR = [ this.dsSearch.getColumn(0, "ID_AP") ];

        	if(this.FormInfo.TY_AUTH == "R") {
        		fileManager.IS_READONLY = true;
        	} else {
        		fileManager.IS_READONLY = false;
        	}

        	this.gfnFileManager(fileManager, "");
        };

        /************************************************************************
         * 기타 이벤트
         ************************************************************************/
        //결재번호 채번
        this.fnInit = function() {
        	this.dsApprInit.clearData();
        	this.dsApprInit.addRow();

        	this.dsApprInit.setColumn(0, "ID_AP_OUT", "");
        	this.dsApprInit.setColumn(0, "ID_AP_TYPE", this.ID_AP_TYPE);
        	this.dsApprInit.setColumn(0, "PARAM01", this.dsSearch.getColumn(0, "V1"));
        	this.dsApprInit.setColumn(0, "PARAM02", this.dsSearch.getColumn(0, "V2"));
        	this.dsApprInit.setColumn(0, "PARAM03", this.dsSearch.getColumn(0, "V3"));
        	this.dsApprInit.setColumn(0, "PARAM04", this.dsSearch.getColumn(0, "V4"));
        	this.dsApprInit.setColumn(0, "DS_TITLE", this.dsSearch.getColumn(0, "DS_ETITLE"));
        	this.dsApprInit.setColumn(0, "ID_USER", this.AuthClient.ID_USER);

        	var strSvcId    = "init";
        	var strSvcType  = "save";
        	var inProc		= "_dsProc";
        	var inData      = "init=dsApprInit";
        	var outData     = "dsInit=init";
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

        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.form_onload,this);
            this.addEventHandler("onclick",this.form_onclick,this);
        };
        this.loadIncludeScript("DZR_AP_SAMPLE2.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
