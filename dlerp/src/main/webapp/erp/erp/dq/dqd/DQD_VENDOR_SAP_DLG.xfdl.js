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
            if (Form == this.constructor)
            {
                this._setFormPosition(300,220);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("_dsProc", this);
            obj._setContents("<ColumnInfo><Column id=\"TARGET\" type=\"STRING\" size=\"256\"/><Column id=\"SP\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"TARGET\">exec</Col><Col id=\"SP\">DQDPR_VENDOR_IF_RETURN_UPDATE</Col></Row><Row><Col id=\"TARGET\">select</Col><Col id=\"SP\">DQDPR_VENDOR_IF_SELECT_ID</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsList", this);
            obj._setContents("<ColumnInfo><Column id=\"SN_ID\" type=\"STRING\" size=\"256\"/><Column id=\"IN_STCD2\" type=\"STRING\" size=\"256\"/><Column id=\"IN_NAME1\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"SN_ID\"/><Col id=\"IN_STCD2\"/><Col id=\"IN_NAME1\"/></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("_dsProcSap", this);
            obj._setContents("<ColumnInfo><Column id=\"TARGET\" type=\"STRING\" size=\"256\"/><Column id=\"SP\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsExport", this);
            obj._setContents("");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsList1", this);
            obj._setContents("");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsSelectSap", this);
            obj._setContents("<ColumnInfo><Column id=\"IN_AKONT\" type=\"STRING\" size=\"256\"/><Column id=\"IN_CJKTW\" type=\"STRING\" size=\"256\"/><Column id=\"IN_EKGRP\" type=\"STRING\" size=\"256\"/><Column id=\"IN_FDGRV\" type=\"STRING\" size=\"256\"/><Column id=\"IN_FITYP\" type=\"STRING\" size=\"256\"/><Column id=\"IN_INTAD\" type=\"STRING\" size=\"256\"/><Column id=\"IN_J_1KFREPRE\" type=\"STRING\" size=\"256\"/><Column id=\"IN_J_1KFTBUS\" type=\"STRING\" size=\"256\"/><Column id=\"IN_J_1KFTIND\" type=\"STRING\" size=\"256\"/><Column id=\"IN_KTOKK\" type=\"STRING\" size=\"256\"/><Column id=\"IN_LFURL\" type=\"STRING\" size=\"256\"/><Column id=\"IN_NAME1\" type=\"STRING\" size=\"256\"/><Column id=\"IN_ORT01\" type=\"STRING\" size=\"256\"/><Column id=\"IN_PSTLZ\" type=\"STRING\" size=\"256\"/><Column id=\"IN_REGIO\" type=\"STRING\" size=\"256\"/><Column id=\"IN_SORTL\" type=\"STRING\" size=\"256\"/><Column id=\"IN_STCD1\" type=\"STRING\" size=\"256\"/><Column id=\"IN_STCD2\" type=\"STRING\" size=\"256\"/><Column id=\"IN_STRAS\" type=\"STRING\" size=\"256\"/><Column id=\"IN_TELF1\" type=\"STRING\" size=\"256\"/><Column id=\"IN_TELF2\" type=\"STRING\" size=\"256\"/><Column id=\"IN_TLFNS\" type=\"STRING\" size=\"256\"/><Column id=\"IN_TLFXS\" type=\"STRING\" size=\"256\"/><Column id=\"IN_ZTERM\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Div("divData","0","0",null,null,"0","0",null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_cssclass("div_DATA_Bg");
            obj.set_text("");
            this.addChild(obj.name, obj);

            obj = new Static("staTITLE","0","0","100.00%","30",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("0");
            obj.set_text("SAP거래처코드 생성");
            obj.set_cssclass("sta_TITLE_Bg");
            obj.set_textAlign("left");
            this.divData.addChild(obj.name, obj);

            obj = new Static("staSN_ID","0","40","87","30",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("1");
            obj.set_text("SN_ID");
            obj.set_cssclass("sta_WF_tablelabel");
            obj.set_textAlign("right");
            this.divData.addChild(obj.name, obj);

            obj = new Static("staIN_STCD2","0","69","87","30",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("2");
            obj.set_text("사업자번호");
            obj.set_cssclass("sta_WF_tablelabel");
            obj.set_textAlign("right");
            this.divData.addChild(obj.name, obj);

            obj = new Static("staIN_NAME1","0","98","87","30",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("3");
            obj.set_text("거래처명");
            obj.set_cssclass("sta_WF_tablelabel");
            obj.set_textAlign("right");
            this.divData.addChild(obj.name, obj);

            obj = new Static("staBg1","86","40",null,"30","0.00%",null,null,null,null,null,this.divData.form);
            obj.set_taborder("4");
            obj.set_cssclass("sta_WF_tablebg");
            this.divData.addChild(obj.name, obj);

            obj = new Static("staBg2","86","69",null,"30","0.00%",null,null,null,null,null,this.divData.form);
            obj.set_taborder("5");
            obj.set_cssclass("sta_WF_tablebg");
            this.divData.addChild(obj.name, obj);

            obj = new Static("staBg3","86","98",null,"30","0.00%",null,null,null,null,null,this.divData.form);
            obj.set_taborder("6");
            obj.set_cssclass("sta_WF_tablebg");
            this.divData.addChild(obj.name, obj);

            obj = new Edit("edtSN_ID","95","45",null,"20","10",null,null,null,null,null,this.divData.form);
            obj.set_taborder("7");
            obj.set_readonly("true");
            this.divData.addChild(obj.name, obj);

            obj = new Edit("edtIN_STCD2","95","74",null,"20","10",null,null,null,null,null,this.divData.form);
            obj.set_taborder("8");
            obj.set_readonly("true");
            this.divData.addChild(obj.name, obj);

            obj = new Edit("edtIN_NAME1","95","103",null,"20","10",null,null,null,null,null,this.divData.form);
            obj.set_taborder("8");
            obj.set_readonly("true");
            this.divData.addChild(obj.name, obj);

            obj = new Button("btnOk","23.33%","156","60","20",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("9");
            obj.set_text("확인");
            this.divData.addChild(obj.name, obj);

            obj = new Button("btnCancel","53.33%","156","60","20",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("10");
            obj.set_text("취소");
            this.divData.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this
            obj = new Layout("default","",this._adjust_width,this._adjust_height,this,function(p){});
            this.addLayout(obj.name, obj);
            
            // BindItem Information
            obj = new BindItem("item0","divData.form.edtSN_ID","value","dsList","SN_ID");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item1","divData.form.edtIN_STCD2","value","dsList","IN_STCD2");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item2","divData.form.edtIN_NAME1","value","dsList","IN_NAME1");
            this.addChild(obj.name, obj);
            obj.bind();
            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script
        this.registerScript("DQD_VENDOR_SAP_DLG.xfdl", function() {
        this.objApp = this.gfnGetApplication();

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

        	// 이전 화면에서 데이터 받기.
        	this.dsList.setColumn(0, "SN_ID", this.getOwnerFrame().SN_ID);
        	this.dsList.setColumn(0, "IN_STCD2", this.getOwnerFrame().IN_STCD2);
        	this.dsList.setColumn(0, "IN_NAME1", this.getOwnerFrame().IN_NAME1);

        	this.fnSelect();
        };

        /************************************************************************
         * 버튼 설정 : 화면(Tab) 전환시 마다 호출
         * 서브버튼 사용 및 공통버튼 강제 제어시 여기서 처리
         ************************************************************************/
        this.fnSetButton = function() {
        	this.FormBtns.Select.set_enable(false);
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
        	this.dxGrid = this.divData.form.objGrid;
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

        	this.dsSelect = new Dataset();
        	this.dsSelect.addColumn("SN_ID", "string");

        	this.dsExec = new Dataset();
        	this.dsExec.addColumn("SN_ID", "string");
        	this.dsExec.addColumn("RTNCD", "string");
        	this.dsExec.addColumn("RTNMSG", "string");
        	this.dsExec.addColumn("RTNCD1", "string");

        }

        /************************************************************************
         * 컨트롤 이벤트
         ************************************************************************/
          /*
          *	조회 버튼
          */
        this.fnSelect = function() {

        	this.dsSelect.clearData();
        	this.dsSelect.addRow();

        	this.dsSelect.setColumn(0, "SN_ID", this.dsList.getColumn(0, "SN_ID"));

        	// SAP 호출
        	var strSvcId    = "select";
        	var strSvcType  = "select";
        	var inProc		= "_dsProc";
        	var inData      = "select=dsSelect";
        	var outData     = "dsList1=select0";
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

        /************************************************************************
         * 콜백 이벤트
         ************************************************************************/
        /*
         *	콜백 처리
         */
        this.fnCallback = function(svcID, errorCode, errorMsg)
        {
        	if(svcID == "select"){
        	}
        	else if (svcID == "sap") {
        		if(this.dsExport.rowcount > 0) {
        			this.fnExec();
        		}else
        		{
        			this.gfnAlert(errorMsg);
        		}

        	}
        	else if (svcID == "exec") {
        		if(errorCode == 0) {
        			this.getParentContext().close(true);
        		}else
        		{
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
         * 기타 이벤트
         ************************************************************************/

        this.fnSap = function() {

        	this._dsProcSap.clearData();
        	var nrow = this._dsProcSap.addRow();
        	this._dsProcSap.setColumn(nrow, "TARGET", "select");
        	this._dsProcSap.setColumn(nrow, "SP", "ZVENDOR02_0012");

        	this.dsSelectSap.clearData();
        	nrow = this.dsSelectSap.addRow();

        	// IN 파라미터 셋팅
        	this.dsSelectSap.setColumn(nrow, "IN_AKONT", this.dsList1.getColumn(0, "IN_AKONT"));
        	this.dsSelectSap.setColumn(nrow, "IN_CJKTW", this.dsList1.getColumn(0, "IN_CJKTW"));
        	this.dsSelectSap.setColumn(nrow, "IN_EKGRP", this.dsList1.getColumn(0, "IN_EKGRP"));
        	this.dsSelectSap.setColumn(nrow, "IN_FDGRV", this.dsList1.getColumn(0, "IN_FDGRV"));
        	this.dsSelectSap.setColumn(nrow, "IN_FITYP", this.dsList1.getColumn(0, "IN_FITYP"));
        	this.dsSelectSap.setColumn(nrow, "IN_INTAD", this.dsList1.getColumn(0, "IN_INTAD"));
        	this.dsSelectSap.setColumn(nrow, "IN_J_1KFREPRE", this.dsList1.getColumn(0, "IN_J_1KFREPRE"));
        	this.dsSelectSap.setColumn(nrow, "IN_J_1KFTBUS", this.dsList1.getColumn(0, "IN_J_1KFTBUS"));
        	this.dsSelectSap.setColumn(nrow, "IN_J_1KFTIND", this.dsList1.getColumn(0, "IN_J_1KFTIND"));
        	this.dsSelectSap.setColumn(nrow, "IN_KTOKK", this.dsList1.getColumn(0, "IN_KTOKK"));
        	this.dsSelectSap.setColumn(nrow, "IN_LFURL", this.dsList1.getColumn(0, "IN_LFURL"));
        	this.dsSelectSap.setColumn(nrow, "IN_NAME1", this.dsList1.getColumn(0, "IN_NAME1"));
        	this.dsSelectSap.setColumn(nrow, "IN_ORT01", this.dsList1.getColumn(0, "IN_ORT01"));
        	this.dsSelectSap.setColumn(nrow, "IN_PSTLZ", this.dsList1.getColumn(0, "IN_PSTLZ"));
        	this.dsSelectSap.setColumn(nrow, "IN_REGIO", this.dsList1.getColumn(0, "IN_REGIO"));
        	this.dsSelectSap.setColumn(nrow, "IN_SORTL", this.dsList1.getColumn(0, "IN_SORTL"));
        	this.dsSelectSap.setColumn(nrow, "IN_STCD1", this.dsList1.getColumn(0, "IN_STCD1"));
        	this.dsSelectSap.setColumn(nrow, "IN_STCD2", this.dsList1.getColumn(0, "IN_STCD2"));
        	this.dsSelectSap.setColumn(nrow, "IN_STRAS", this.dsList1.getColumn(0, "IN_STRAS"));
        	this.dsSelectSap.setColumn(nrow, "IN_TELF1", this.dsList1.getColumn(0, "IN_TELF1"));
        	this.dsSelectSap.setColumn(nrow, "IN_TELF2", this.dsList1.getColumn(0, "IN_TELF2"));
        	this.dsSelectSap.setColumn(nrow, "IN_TLFNS", this.dsList1.getColumn(0, "IN_TLFNS"));
        	this.dsSelectSap.setColumn(nrow, "IN_TLFXS", this.dsList1.getColumn(0, "IN_TLFXS"));
        	this.dsSelectSap.setColumn(nrow, "IN_ZTERM", this.dsList1.getColumn(0, "IN_ZTERM"));

        	// SAP 호출
        	var strSvcId    = "sap";
        	var strSvcType  = "sap";
        	var inProc		= "_dsProcSap";
        	var inData      = "select=dsSelectSap";
        	var outData     = "dsExport=export";
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


        this.fnExec = function() {

        	this.dsExec.clearData();
        	this.dsExec.addRow();

        	this.dsExec.setColumn(0, "SN_ID", this.dsList.getColumn(this.dsList.rowposition, "SN_ID"));
        	this.dsExec.setColumn(0, "RTNCD", this.dsExport.getColumn(0, "RTNCD"));
        	this.dsExec.setColumn(0, "RTNMSG", this.dsExport.getColumn(0, "RTNMSG"));
        	this.dsExec.setColumn(0, "RTNCD1", this.dsExport.getColumn(0, "RTNCD1"));

        	if (this.dsExec.rowcount == 0) return;

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


        // 확인 버튼 클릭
        this.divData_btnOk_onclick = function(obj,e)
        {
        	if(this.dsList1.rowcount > 0) {
        		this.fnSap();
        	}

        };

        // 취소 버튼 클릭
        this.divData_btnCancel_onclick = function(obj,e)
        {
        	// this.close()가 작동하지 않았고,
        	// 부모의 callback 함수로 데이터를 넘겨주기 위해 작성되었습니다.
        	this.getParentContext().close(false);
        };

        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.form_onload,this);
            this.divData.form.btnOk.addEventHandler("onclick",this.divData_btnOk_onclick,this);
            this.divData.form.btnCancel.addEventHandler("onclick",this.divData_btnCancel_onclick,this);
        };
        this.loadIncludeScript("DQD_VENDOR_SAP_DLG.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
