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
            this.set_titletext("일정등록");
            this.getSetter("maxwidth").set("430");
            this.getSetter("maxheight").set("350");
            if (Form == this.constructor)
            {
                this._setFormPosition(400,310);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("_dsProc", this);
            obj._setContents("<ColumnInfo><Column id=\"TARGET\" type=\"STRING\" size=\"256\"/><Column id=\"SP\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"TARGET\">save</Col><Col id=\"SP\">DACPR_YEARLYPLAN_DATE_SAVE</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsData", this);
            obj._setContents("<ColumnInfo><Column id=\"TY_CORP\" type=\"STRING\" size=\"256\"/><Column id=\"CD_CORP\" type=\"STRING\" size=\"256\"/><Column id=\"TY_GUBUN\" type=\"STRING\" size=\"256\"/><Column id=\"YM_BASE\" type=\"STRING\" size=\"256\"/><Column id=\"DT_PLANFROM\" type=\"STRING\" size=\"256\"/><Column id=\"DT_PLANTO\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"TY_CORP\">Y</Col><Col id=\"CD_CORP\"/><Col id=\"TY_GUBUN\">Y</Col><Col id=\"YM_BASE\"/><Col id=\"DT_PLANFROM\"/><Col id=\"DT_PLANTO\"/></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsTY_GUBUN", this);
            obj._setContents("<ColumnInfo><Column id=\"CD_CODE\" type=\"STRING\" size=\"256\"/><Column id=\"DS_CODE\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"DS_CODE\">계속근로</Col><Col id=\"CD_CODE\">Y</Col></Row><Row><Col id=\"DS_CODE\">1년미만</Col><Col id=\"CD_CODE\">N</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsTY_CORP", this);
            obj._setContents("<ColumnInfo><Column id=\"CD_CODE\" type=\"STRING\" size=\"256\"/><Column id=\"DS_CODE\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"DS_CODE\">전법인</Col><Col id=\"CD_CODE\">Y</Col></Row><Row><Col id=\"DS_CODE\">법인별</Col><Col id=\"CD_CODE\">N</Col></Row></Rows>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Div("divData","0","0",null,null,"0","0",null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_cssclass("div_DATA_Bg");
            obj.set_text("");
            this.addChild(obj.name, obj);

            obj = new Static("staTITLE","0","0","100%","30",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("0");
            obj.set_text("일정등록");
            obj.set_cssclass("sta_TITLE_Bg");
            obj.set_textAlign("left");
            this.divData.addChild(obj.name, obj);

            obj = new Static("staDS_SITE","0","65","112","30",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("1");
            obj.set_text("법인");
            obj.set_cssclass("sta_WF_tablelabel");
            obj.set_textAlign("left");
            this.divData.addChild(obj.name, obj);

            obj = new Static("staDS_SILHENG","0","staDS_SITE:-1","112","30",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("2");
            obj.set_text("구분");
            obj.set_textAlign("left");
            obj.set_cssclass("sta_WF_tablelabelE");
            this.divData.addChild(obj.name, obj);

            obj = new Static("staTY_APPROVAL","0","123","112","30",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("3");
            obj.set_text("대상년월");
            obj.set_textAlign("left");
            obj.set_cssclass("sta_WF_tablelabelE");
            this.divData.addChild(obj.name, obj);

            obj = new Static("staDT_CONFIRM","0","staTY_APPROVAL:-1","112","30",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("4");
            obj.set_text("입력일자");
            obj.set_textAlign("left");
            obj.set_cssclass("sta_WF_tablelabelE");
            this.divData.addChild(obj.name, obj);

            obj = new Static("staBg1","staDS_SITE:-1","65","289","30",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("5");
            obj.set_cssclass("sta_WF_tablebg");
            this.divData.addChild(obj.name, obj);

            obj = new Static("staBg2","staDS_SILHENG:-1","94","289","30",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("6");
            obj.set_cssclass("sta_WF_tablebg");
            obj.set_text("");
            this.divData.addChild(obj.name, obj);

            obj = new Static("staBg3","staTY_APPROVAL:-1","123","289","30",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("7");
            obj.set_cssclass("sta_WF_tablebg");
            this.divData.addChild(obj.name, obj);

            obj = new Static("staBg4","staDT_CONFIRM:-1","staBg3:-1","289","30",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("8");
            obj.set_cssclass("sta_WF_tablebg");
            this.divData.addChild(obj.name, obj);

            obj = new Button("btnOk","32.50%","266","60","20",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("9");
            obj.set_text("확인");
            this.divData.addChild(obj.name, obj);

            obj = new Button("btnCancel","52.50%","266","60","20",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("10");
            obj.set_text("취소");
            this.divData.addChild(obj.name, obj);

            obj = new Div("cfCD_CORP","116","70","280","20",null,null,null,null,null,null,this.divData.form);
            obj.getSetter("CDTextWidth").set("80");
            obj.set_taborder("11");
            obj.set_url("cmm::cmmCodeFind.xfdl");
            obj.set_text("");
            this.divData.addChild(obj.name, obj);

            obj = new Calendar("tclDT_PLANFROM","116","157","100","20",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("13");
            obj.set_dateformat("yyyy-MM-dd");
            obj.set_editformat("yyyyMMdd");
            obj.set_autoselect("true");
            obj.set_value("");
            this.divData.addChild(obj.name, obj);

            obj = new Static("staYM_IMPUTE_FROM01","tclDT_PLANFROM:5","158","10","20",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("12");
            obj.set_text("~");
            this.divData.addChild(obj.name, obj);

            obj = new Calendar("tclDT_PLANTO","staYM_IMPUTE_FROM01:5","157","100","20",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("14");
            obj.set_dateformat("yyyy-MM-dd");
            obj.set_editformat("yyyyMMdd");
            obj.set_autoselect("true");
            obj.set_value("");
            this.divData.addChild(obj.name, obj);

            obj = new Static("staBg00","111","36","289","30",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("15");
            obj.set_cssclass("sta_WF_tablebg");
            this.divData.addChild(obj.name, obj);

            obj = new Static("staDS_SITE00","0","36","112","30",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("16");
            obj.set_text("법인구분");
            obj.set_textAlign("left");
            obj.set_cssclass("sta_WF_tablelabelE");
            this.divData.addChild(obj.name, obj);

            obj = new Radio("rdoTY_CORP","116","41","222","20",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("17");
            obj.set_innerdataset("dsTY_CORP");
            obj.set_direction("vertical");
            obj.set_fittocontents("width");
            obj.set_codecolumn("CD_CODE");
            obj.set_datacolumn("DS_CODE");
            obj.set_text("전법인");
            obj.set_value("Y");
            obj.set_index("0");
            this.divData.addChild(obj.name, obj);

            obj = new Div("ctclYM_BASE","116","128","80","20",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("18");
            obj.set_url("cmm::cmmCalMM.xfdl");
            this.divData.addChild(obj.name, obj);

            obj = new Radio("rdoTY_GUBUN","116","100","222","20",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("19");
            obj.set_innerdataset("dsTY_GUBUN");
            obj.set_direction("vertical");
            obj.set_fittocontents("width");
            obj.set_codecolumn("CD_CODE");
            obj.set_datacolumn("DS_CODE");
            obj.set_text("계속근로");
            obj.set_value("Y");
            obj.set_index("0");
            this.divData.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this
            obj = new Layout("default","",this._adjust_width,this._adjust_height,this,function(p){});
            this.addLayout(obj.name, obj);
            
            // BindItem Information
            obj = new BindItem("item3","divData.form.cfCD_CORP.form.CDTextBox","value","dsData","CD_CORP");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item6","divData.form.ctclYM_BASE.form.TextBox","value","dsData","YM_BASE");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item0","divData.form.rdoTY_CORP","value","dsData","TY_CORP");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item1","divData.form.rdoTY_GUBUN","value","dsData","TY_GUBUN");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item2","divData.form.tclDT_PLANFROM","value","dsData","DT_PLANFROM");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item4","divData.form.tclDT_PLANTO","value","dsData","DT_PLANTO");
            this.addChild(obj.name, obj);
            obj.bind();
            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {
            this._addPreloadList("fdl","cmm::cmmCodeFind.xfdl");
            this._addPreloadList("fdl","cmm::cmmCalMM.xfdl");
        };
        
        // User Script
        this.registerScript("DAC_YEARLYPLAN_DATE_DLG.xfdl", function() {
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

        	//적용년도 셋팅
        	var today = this.gfnGetDate();
        	this.dsData.setColumn(0, "YM_BASE", today.substring(0,6));
        	this.dsData.setColumn(0, "DT_PLANFROM", today);
        	this.dsData.setColumn(0, "DT_PLANTO", today);

        	this.fnTycorpEnable();

        	// 차수 비활성화 처리
        	//this.cfNO_NAPCHA.form.CDTextBox.set_readonly(true);
        };

        /************************************************************************
         * 버튼 설정 : 화면(Tab) 전환시 마다 호출
         * 서브버튼 사용 및 공통버튼 강제 제어시 여기서 처리
         ************************************************************************/
        this.fnSetButton = function() {
        	//this.FormBtns.Select.set_enable(false);
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
        	//this.dxGrid = this.divData.form.objGrid;
        	this.rdoTY_CORP = this.divData.form.rdoTY_CORP;
        	this.cfCD_CORP = this.divData.form.cfCD_CORP;
        	this.rdoTY_GUBUN = this.divData.form.rdoTY_GUBUN;
        	this.ctclYM_BASE = this.divData.form.ctclYM_BASE;
        	this.tclDT_PLANFROM = this.divData.form.tclDT_PLANFROM;
        	this.tclDT_PLANTO = this.divData.form.tclDT_PLANTO;
        };

        /************************************************************************
         * 이벤트 설정
         ************************************************************************/
        this.fnSetEvent = function() {
        	this.cfCD_CORP.CodeFindName = "DAX_CFCORP_CODEFIND";
        	this.cfCD_CORP.BeforeUserDataSetParam = "fnBeforeUserDataSetParam";
        };

        /************************************************************************
         * 파라미터 설정
         ************************************************************************/
        this.fnSetParameter = function() {
        	this.dsSave = new Dataset();
        	this.dsSave.addColumn("TY_SAVE", "string");
        	this.dsSave.addColumn("TY_CORP", "string");
        	this.dsSave.addColumn("YR_BASE", "string");
        	this.dsSave.addColumn("YM_BASE", "string");
        	this.dsSave.addColumn("TY_GUBUN", "string");
        	this.dsSave.addColumn("TY_PLAN", "string");
        	this.dsSave.addColumn("CD_CORP", "string");
        	this.dsSave.addColumn("DT_PLANFROM", "string");
        	this.dsSave.addColumn("DT_PLANTO", "string");
        	this.dsSave.addColumn("DS_REMARK", "string");
        	this.dsSave.addColumn("ID_USER", "string");
        	this.dsSave.addColumn("IP_ADDR", "string");
        	this.dsSave.addColumn("GR_SEARCH", "string");
        	this.dsSave.addColumn("GR_CORP", "string");
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
        /*
         *	콜백 처리
         */
        this.fnCallback = function(svcID, errorCode, errorMsg)
        {
        	if (svcID == "save") {
        		if(errorCode == 0)
        		{
        			// this.close()가 작동하지 않았고,
        			// 부모의 callback 함수로 데이터를 넘겨주기 위해 작성되었습니다.
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
        this.fnBeforeUserDataSetParam = function(id, dsUserParam, nrow) {

        	if(id == "cfCD_CORP") {
        		dsUserParam.setColumn(nrow, "CD_CORP", this.AuthClient.CD_CORP);
        		dsUserParam.setColumn(nrow, "GR_SEARCH", this.FormInfo.GR_SEARCH);
        		dsUserParam.setColumn(nrow, "ID_USER", this.AuthClient.ID_USER);
        	}

        	return true;
        };

        /************************************************************************
         * 그리드 이벤트
         ************************************************************************/

        /************************************************************************
         * 기타 이벤트
         ************************************************************************/
        // 확인 버튼 클릭
        this.divData_btnOk_onclick = function(obj,e)
        {
        	if (!this.fnSaveValidate()) return false;

        	this.dsSave.clearData();
        	this.dsSave.addRow();

        	this.dsSave.setColumn(0, "TY_SAVE", "C");
        	this.dsSave.setColumn(0, "TY_CORP", this.dsData.getColumn(0, "TY_CORP"));
        	this.dsSave.setColumn(0, "YR_BASE", this.dsData.getColumn(0, "YM_BASE").substr(0, 4));
        	this.dsSave.setColumn(0, "YM_BASE", this.dsData.getColumn(0, "YM_BASE"));
        	this.dsSave.setColumn(0, "TY_GUBUN", this.dsData.getColumn(0, "TY_GUBUN"));
        	this.dsSave.setColumn(0, "TY_PLAN", "P");
        	this.dsSave.setColumn(0, "CD_CORP", this.dsData.getColumn(0, "CD_CORP"));
        	this.dsSave.setColumn(0, "DT_PLANFROM", this.dsData.getColumn(0, "DT_PLANFROM"));
        	this.dsSave.setColumn(0, "DT_PLANTO", this.dsData.getColumn(0, "DT_PLANTO"));
        	this.dsSave.setColumn(0, "DS_REMARK", "");
        	this.dsSave.setColumn(0, "ID_USER", this.AuthClient.ID_USER);
        	this.dsSave.setColumn(0, "IP_ADDR", this.AuthClient.NO_IP);
        	this.dsSave.setColumn(0, "GR_SEARCH", this.FormInfo.GR_SEARCH);
        	this.dsSave.setColumn(0, "GR_CORP", this.AuthClient.CD_CORP);

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
        						strArg, 		// 입력값으로 보낼 arguments, strFormData="20120607"
        						callBackFnc); // 통신방법 정의 [생략가능]


        };

        // 취소 버튼 클릭
        this.divData_btnCancel_onclick = function(obj,e)
        {
        	// this.close()가 작동하지 않았고,
        	// 부모의 callback 함수로 데이터를 넘겨주기 위해 작성되었습니다.
        	this.getParentContext().close(false);
        };


        this.fnSaveValidate = function() {
        	var validate = true;

        	if(this.dsData.getColumn(0,"TY_CORP") == "N"){
        		if (this.gfnIsNull(this.dsData.getColumn(0,"CD_CORP"))) {
        			validate = false;
        			// Alert후 실행할 처리
        			this.fnVaidateCallback = function() {
        				this.cfCD_CORP.form.CDTextBox.setFocus();
        			}
        			this.gfnAlert("법은은 반드시 입력 하셔야 합니다.", "fnVaidateCallback");
        		}
        	}

        	if (this.gfnIsNull(this.dsData.getColumn(0,"YM_BASE"))) {
        		validate = false;
        		// Alert후 실행할 처리
        		this.fnVaidateCallback = function() {
        			this.ctclYM_BASE.form.TextBox.setFocus();
        		}
        		this.gfnAlert("대상년월은 반드시 입력 하셔야 합니다.", "fnVaidateCallback");
        	}
        	if (this.gfnIsNull(this.dsData.getColumn(0,"DT_PLANFROM"))) {
        		validate = false;
        		// Alert후 실행할 처리
        		this.fnVaidateCallback = function() {
        			this.tclDT_PLANFROM.setFocus();
        		}
        		this.gfnAlert("입력일자는 반드시 입력 하셔야 합니다.", "fnVaidateCallback");
        	}
        	if (this.gfnIsNull(this.dsData.getColumn(0,"DT_PLANTO"))) {
        		validate = false;
        		// Alert후 실행할 처리
        		this.fnVaidateCallback = function() {
        			this.tclDT_PLANTO.setFocus();
        		}
        		this.gfnAlert("입력일자는 반드시 입력 하셔야 합니다.", "fnVaidateCallback");
        	}

        	return validate;
        }

        this.dsData_onvaluechanged = function(obj,e)
        {
        	if(e.oldvalue != e.newvalue) {
        		if(e.columnid == "TY_CORP") {
        			this.fnTycorpEnable();
        		}
        	}
        };

        this.fnTycorpEnable = function()
        {
        	if(this.dsData.getColumn(0,"TY_CORP") == "Y"){
        		this.cfCD_CORP.set_enable(false);
        		this.dsData.setColumn(0, "CD_CORP", "");
        		this.cfCD_CORP.form.DSTextBox.set_value("");
        	}else{
        		this.cfCD_CORP.set_enable(true);
        	}
        }

        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.form_onload,this);
            this.divData.form.staDS_SITE.addEventHandler("onclick",this.divData_staDS_SITE_onclick,this);
            this.divData.form.btnOk.addEventHandler("onclick",this.divData_btnOk_onclick,this);
            this.divData.form.btnCancel.addEventHandler("onclick",this.divData_btnCancel_onclick,this);
            this.divData.form.staYM_IMPUTE_FROM01.addEventHandler("onclick",this.Common_onclick,this);
            this.divData.form.staDS_SITE00.addEventHandler("onclick",this.divData_staDS_SITE_onclick,this);
            this.dsData.addEventHandler("onvaluechanged",this.dsData_onvaluechanged,this);
        };
        this.loadIncludeScript("DAC_YEARLYPLAN_DATE_DLG.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
