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
            this.set_titletext("급여적용");
            this.getSetter("maxwidth").set("395");
            this.getSetter("maxheight").set("320");
            if (Form == this.constructor)
            {
                this._setFormPosition(360,280);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("dsList", this);
            obj._setContents("");
            this.addChild(obj.name, obj);


            obj = new Dataset("_dsProc", this);
            obj._setContents("<ColumnInfo><Column id=\"TARGET\" type=\"STRING\" size=\"256\"/><Column id=\"SP\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"TARGET\">excute</Col><Col id=\"SP\">DABPR_MEDICAL_EXECUTE</Col></Row></Rows>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Static("staTITLE","0","0","359","30",null,null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_text("급여적용");
            obj.set_cssclass("sta_TITLE_Bg");
            obj.set_textAlign("left");
            this.addChild(obj.name, obj);

            obj = new Static("staCD_CORP","0","151","100","30",null,null,null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_text("법인");
            obj.set_cssclass("sta_WF_tablelabel");
            obj.set_visible("true");
            this.addChild(obj.name, obj);

            obj = new Static("sta06","99","151",null,"30","0",null,null,null,null,null,this);
            obj.set_taborder("3");
            obj.set_cssclass("sta_WF_tablebg");
            obj.set_visible("true");
            this.addChild(obj.name, obj);

            obj = new Div("ccfCD_CORP","staCD_CORP:5","156","250","20",null,null,null,null,null,null,this);
            obj.getSetter("CodeFindName").set("DAX_CFCORP2");
            obj.getSetter("CDTextWidth").set("70");
            obj.set_taborder("1");
            obj.set_url("cmm::cmmCodeFind.xfdl");
            obj.set_text("");
            obj.set_visible("true");
            obj.getSetter("BeforeUserDataSetParam").set("fnBeforeUserDataSetParam");
            obj.getSetter("AfterCDTextChanged").set("fnAfterCDTextChanged");
            this.addChild(obj.name, obj);

            obj = new Div("divBtns","73","224","200","27",null,null,null,null,null,null,this);
            obj.set_taborder("4");
            this.addChild(obj.name, obj);

            obj = new Button("btnCANCLE","120","0","60","27",null,null,null,null,null,null,this.divBtns.form);
            obj.set_taborder("0");
            obj.set_text("취소");
            this.divBtns.addChild(obj.name, obj);

            obj = new Button("btnOK","30","0","60","27",null,null,null,null,null,null,this.divBtns.form);
            obj.set_taborder("1");
            obj.set_text("확인");
            this.divBtns.addChild(obj.name, obj);

            obj = new Static("staYM_PROVIDE","0","64","100","30",null,null,null,null,null,null,this);
            obj.set_taborder("5");
            obj.set_text("지급년월");
            obj.set_cssclass("sta_WF_tablelabelE");
            this.addChild(obj.name, obj);

            obj = new Static("sta04","99","64",null,"30","0",null,null,null,null,null,this);
            obj.set_taborder("6");
            obj.set_cssclass("sta_WF_tablebg");
            obj.set_textAlign("right");
            this.addChild(obj.name, obj);

            obj = new Div("ctclYM_PROVIDE","staYM_PROVIDE:5","69","80","20",null,null,null,null,null,null,this);
            obj.set_taborder("7");
            obj.set_url("cmm::cmmCalMM.xfdl");
            this.addChild(obj.name, obj);

            obj = new Static("staTY_SALARY","0","122","100","30",null,null,null,null,null,null,this);
            obj.set_taborder("8");
            obj.set_text("지급구분");
            obj.set_cssclass("sta_WF_tablelabelE");
            this.addChild(obj.name, obj);

            obj = new Static("sta00","99","122",null,"30","0",null,null,null,null,null,this);
            obj.set_taborder("9");
            obj.set_cssclass("sta_WF_tablebg");
            obj.set_textAlign("right");
            this.addChild(obj.name, obj);

            obj = new Combo("cboSN_SALARY","198","127","50","20",null,null,null,null,null,null,this);
            obj.set_taborder("10");
            obj.set_codecolumn("codecolumn");
            obj.set_datacolumn("datacolumn");
            obj.set_readonly("true");
            var cboSN_SALARY_innerdataset = new nexacro.NormalDataset("cboSN_SALARY_innerdataset", obj);
            cboSN_SALARY_innerdataset._setContents("<ColumnInfo><Column id=\"codecolumn\" size=\"256\"/><Column id=\"datacolumn\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"codecolumn\">1</Col><Col id=\"datacolumn\">1</Col></Row><Row><Col id=\"codecolumn\">2</Col><Col id=\"datacolumn\">2</Col></Row><Row><Col id=\"codecolumn\">3</Col><Col id=\"datacolumn\">3</Col></Row></Rows>");
            obj.set_innerdataset(cboSN_SALARY_innerdataset);
            obj.set_text("3");
            obj.set_value("3");
            obj.set_index("2");
            this.addChild(obj.name, obj);

            obj = new Combo("cboTY_SALARY","105","127","91","20",null,null,null,null,null,null,this);
            obj.set_taborder("11");
            obj.set_codecolumn("codecolumn");
            obj.set_datacolumn("datacolumn");
            obj.set_readonly("true");
            var cboTY_SALARY_innerdataset = new nexacro.NormalDataset("cboTY_SALARY_innerdataset", obj);
            cboTY_SALARY_innerdataset._setContents("<ColumnInfo><Column id=\"codecolumn\" size=\"256\"/><Column id=\"datacolumn\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"codecolumn\">S</Col><Col id=\"datacolumn\">급여</Col></Row></Rows>");
            obj.set_innerdataset(cboTY_SALARY_innerdataset);
            obj.set_text("연말정산");
            obj.set_value("1");
            obj.set_index("0");
            this.addChild(obj.name, obj);

            obj = new Static("staYM_SALARY","0","93","100","30",null,null,null,null,null,null,this);
            obj.set_taborder("12");
            obj.set_text("급여년월");
            obj.set_cssclass("sta_WF_tablelabelE");
            this.addChild(obj.name, obj);

            obj = new Static("sta01","99","93",null,"30","0",null,null,null,null,null,this);
            obj.set_taborder("13");
            obj.set_cssclass("sta_WF_tablebg");
            obj.set_textAlign("right");
            this.addChild(obj.name, obj);

            obj = new Div("ctclYM_SALARY","105","98","80","20",null,null,null,null,null,null,this);
            obj.set_taborder("14");
            obj.set_url("cmm::cmmCalMM.xfdl");
            this.addChild(obj.name, obj);

            obj = new Static("staDT_SALARY","0","180","100","30",null,null,null,null,null,null,this);
            obj.set_taborder("15");
            obj.set_text("급여일");
            obj.set_cssclass("sta_WF_tablelabel");
            this.addChild(obj.name, obj);

            obj = new Static("sta02","99","180",null,"30","0",null,null,null,null,null,this);
            obj.set_taborder("16");
            obj.set_cssclass("sta_WF_tablebg");
            obj.set_textAlign("right");
            this.addChild(obj.name, obj);

            obj = new Calendar("calDT_SALARY","105","185","100","20",null,null,null,null,null,null,this);
            obj.set_taborder("17");
            this.addChild(obj.name, obj);

            obj = new Static("staTY_GUBUN","0","35","100","30",null,null,null,null,null,null,this);
            obj.set_taborder("18");
            obj.set_text("마감여부");
            obj.set_cssclass("sta_WF_tablelabelE");
            this.addChild(obj.name, obj);

            obj = new Static("sta03","99","35",null,"30","0",null,null,null,null,null,this);
            obj.set_taborder("19");
            obj.set_cssclass("sta_WF_tablebg");
            obj.set_textAlign("right");
            this.addChild(obj.name, obj);

            obj = new Radio("rdoTY_GUBUN","106","40","149","20",null,null,null,null,null,null,this);
            obj.set_taborder("20");
            obj.set_codecolumn("codecolumn");
            obj.set_datacolumn("datacolumn");
            obj.set_direction("vertical");
            var rdoTY_GUBUN_innerdataset = new nexacro.NormalDataset("rdoTY_GUBUN_innerdataset", obj);
            rdoTY_GUBUN_innerdataset._setContents("<ColumnInfo><Column id=\"codecolumn\" size=\"256\"/><Column id=\"datacolumn\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"codecolumn\">M</Col><Col id=\"datacolumn\">마감</Col></Row><Row><Col id=\"codecolumn\">C</Col><Col id=\"datacolumn\">마감취소</Col></Row></Rows>");
            obj.set_innerdataset(rdoTY_GUBUN_innerdataset);
            obj.set_text("마감");
            obj.set_value("M");
            obj.set_index("0");
            this.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this
            obj = new Layout("default","",this._adjust_width,this._adjust_height,this,function(p){});
            this.addLayout(obj.name, obj);
            
            // BindItem Information
            obj = new BindItem("item0","ctclYM_PROVIDE.form.TextBox","value","dsSearch","DT_WORK");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item1","ctclYM_SALARY.form.TextBox","value","dsSearch","DT_WORK");
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
        this.registerScript("DAB_MEDICAL_SALARY_APPLY_DLG.xfdl", function() {
        this.objApp = this.gfnGetApplication();

        this.form_onload = function(obj,e)
        {
        	// -- 필수 -------------------//
        	this.gfnFormOnLoad(this);
        	this.gfnFormInfo(this);
        	// ---------------------------//

        	this.fnSetButton();
        	//this.fnSetExtendButton();
        	this.fnSetVariable();
        	this.fnSetEvent();
        	this.fnSetParameter();


        	//적용년월
        	this.ctclYM_PROVIDE.form.TextBox.set_value(this.gfnGetDate().substr(0,6));
        	this.ctclYM_SALARY.form.TextBox.set_value(this.gfnGetDate().substr(0,6));

        	//지급구분
        	this.cboTY_SALARY.set_index(0);

        	// 법인코드 및 법인명 기본세팅
        	//this.ccfCD_CORP.form.CDTextBox.set_value(this.AuthClient.CD_CORP);
            //this.ccfCD_CORP.form.DSTextBox.set_value(this.AuthClient.DS_CORP);

        };

        /************************************************************************
         * 버튼 설정 : 화면(Tab) 전환시 마다 호출
         * 서브버튼 사용 및 공통버튼 강제 제어시 여기서 처리
         ************************************************************************/
        this.fnSetButton = function() {
        	// Select, Add, Del, Save, Excel, Print
        	// SubSelect, SubAdd, SubDel, SuubSave, SubExcel
        	// this.FormBtns.Add.set_enable(false);
        	// this.FormBtns.Del.set_enable(false);
        };

        /************************************************************************
         * 확장 버튼 : 화면별 버튼 설정 ID, function 연결 (화면버튼관리)
         ************************************************************************/

        /************************************************************************
         * 변수 선언
         ************************************************************************/
        this.fnSetVariable = function() {

        	this.grSearch = this.FormInfo.GR_SEARCH;		// 권한
        	this.cdGroup = this.AuthClient.CD_GROUP;		// 그룹코드
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

        	//실행
        	this.dsExcute = new Dataset();
        	this.dsExcute.addColumn("TY_GUBUN", "string");
        	this.dsExcute.addColumn("YM_PROVIDE", "string");
        	this.dsExcute.addColumn("YM_SALARY", "string");
        	this.dsExcute.addColumn("TY_SALARY", "string");
        	this.dsExcute.addColumn("SN_SALARY", "bigdecimal");
        	this.dsExcute.addColumn("CD_CORP", "string");
        	this.dsExcute.addColumn("DT_SALARY", "string");
        	this.dsExcute.addColumn("ID_INSERT", "string");

        };

        /************************************************************************
         * 컨트롤 이벤트
         ************************************************************************/
         /************************************************************************
         * Validate
         ************************************************************************/
        this.fnSelectValidate = function() {

        	//지급년월
        	if(this.gfnIsNull(this.ctclYM_PROVIDE.form.TextBox.value)){
        		this.fnValidateCallback = function() {
        			this.ctclYM_PROVIDE.form.TextBox.setFocus();
        		}
        		this.gfnAlert("지급년월을 입력하세요.", "fnValidateCallback");
        		return false;
        	}

        	//급여년월
        	if(this.gfnIsNull(this.ctclYM_SALARY.form.TextBox.value)){
        		this.fnValidateCallback = function() {
        			this.ctclYM_SALARY.form.TextBox.setFocus();
        		}
        		this.gfnAlert("급여년월을 입력하세요.", "fnValidateCallback");
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
        	if(svcID == "excute") {
        		if (errorCode == 0) {
        			var json = {YN_MAGAM : this.rdoTY_GUBUN.value};
        			this.getParentContext().close(JSON.stringify(json));

        		} else {
        			this.gfnAlert(errorMsg);
        		}
        	}
        };

        /************************************************************************
         * 코드파인드 이벤트
         ************************************************************************/
        this.fnBeforeUserDataSetParam = function(id, dsUserParam, nrow) {

         	switch(id) {
        		case "ccfCD_CORP": // 법인코드
        			dsUserParam.setColumn(nrow, "GR_SEARCH", this.FormInfo.GR_SEARCH);
        			dsUserParam.setColumn(nrow, "CD_DEPT", this.AuthClient.CD_DEPT);
        			break;

        		default:
         	}
         	return true;
        };

        this.fnAfterCDTextChanged = function(id, codeFindData) {
        	var arr = codeFindData;
        };

        /************************************************************************
         * 그리드 이벤트
         ************************************************************************/
         /************************************************************************
         * 확장버튼 이벤트
         ************************************************************************/
        /************************************************************************
         * 기타 이벤트
         ************************************************************************/
        this.btnOK_onclick = function(obj,e)
        {
        	if(!this.fnSelectValidate()) return false;

        	this.dsExcute.clearData();

        	var nrow = this.dsExcute.addRow();

        	this.dsExcute.setColumn(nrow, "TY_GUBUN",	this.rdoTY_GUBUN.value);
        	this.dsExcute.setColumn(nrow, "YM_PROVIDE", this.ctclYM_PROVIDE.form.TextBox.value);
        	this.dsExcute.setColumn(nrow, "YM_SALARY", 	this.ctclYM_SALARY.form.TextBox.value);
        	this.dsExcute.setColumn(nrow, "TY_SALARY", 	this.cboTY_SALARY.value);
        	this.dsExcute.setColumn(nrow, "SN_SALARY", 	this.cboSN_SALARY.value);
        	this.dsExcute.setColumn(nrow, "CD_CORP", 	this.ccfCD_CORP.form.CDTextBox.value);
        	this.dsExcute.setColumn(nrow, "DT_SALARY", 	this.calDT_SALARY.value);
        	this.dsExcute.setColumn(nrow, "ID_INSERT", 	this.AuthClient.ID_USER);

        	var strSvcId    = "excute";
        	var strSvcType  = "save";
        	var inProc		= "_dsProc";
        	var inData      = "excute=dsExcute";
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

        };

        this.btnCANCLE_onclick = function(obj,e)
        {
        	this.getParentContext().close(false);
        };
        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.form_onload,this);
            this.divBtns.form.btnCANCLE.addEventHandler("onclick",this.btnCANCLE_onclick,this);
            this.divBtns.form.btnOK.addEventHandler("onclick",this.btnOK_onclick,this);
            this.sta04.addEventHandler("onclick",this.sta04_onclick,this);
            this.sta00.addEventHandler("onclick",this.sta04_onclick,this);
            this.sta01.addEventHandler("onclick",this.sta04_onclick,this);
            this.sta02.addEventHandler("onclick",this.sta04_onclick,this);
            this.sta03.addEventHandler("onclick",this.sta04_onclick,this);
        };
        this.loadIncludeScript("DAB_MEDICAL_SALARY_APPLY_DLG.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
