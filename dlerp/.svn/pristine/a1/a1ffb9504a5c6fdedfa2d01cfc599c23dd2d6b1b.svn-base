(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("DAM_CARUSE_PRT_DLG");
            this.set_titletext("차량별운행일지");
            this.getSetter("maxwidth").set("370");
            this.getSetter("maxheight").set("280");
            if (Form == this.constructor)
            {
                this._setFormPosition(336,250);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("dsSearch", this);
            obj._setContents("<ColumnInfo><Column id=\"CD_CORP\" type=\"STRING\" size=\"256\"/><Column id=\"DS_CORP\" type=\"STRING\" size=\"256\"/><Column id=\"CD_CAR\" type=\"STRING\" size=\"256\"/><Column id=\"DS_CAR\" type=\"STRING\" size=\"256\"/><Column id=\"YR_BASE\" type=\"STRING\" size=\"256\"/><Column id=\"CD_DEPT\" type=\"STRING\" size=\"256\"/><Column id=\"DS_DEPT\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"CD_CORP\"/><Col id=\"DS_CORP\"/><Col id=\"CD_CAR\"/></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("_dsProc", this);
            obj._setContents("<ColumnInfo><Column id=\"TARGET\" type=\"STRING\" size=\"256\"/><Column id=\"SP\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"TARGET\">selectMaster</Col><Col id=\"SP\">DAMPR_CARUSE_PRINT_M</Col></Row><Row><Col id=\"TARGET\">selectDetail</Col><Col id=\"SP\">DAMPR_CARUSE_PRINT_D</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsMaster", this);
            obj._setContents("<ColumnInfo><Column id=\"YR_BASE\" type=\"STRING\" size=\"256\"/><Column id=\"DT_FROM\" type=\"STRING\" size=\"256\"/><Column id=\"DT_TO\" type=\"STRING\" size=\"256\"/><Column id=\"CD_CORP\" type=\"STRING\" size=\"256\"/><Column id=\"DS_CORP\" type=\"STRING\" size=\"256\"/><Column id=\"NO_BUSINESS\" type=\"STRING\" size=\"256\"/><Column id=\"TY_CAR\" type=\"STRING\" size=\"256\"/><Column id=\"NO_CAR\" type=\"STRING\" size=\"256\"/><Column id=\"CD_DEPT\" type=\"STRING\" size=\"256\"/><Column id=\"DS_DEPT\" type=\"STRING\" size=\"256\"/><Column id=\"CD_CAR\" type=\"STRING\" size=\"256\"/><Column id=\"DT_USE\" type=\"STRING\" size=\"256\"/><Column id=\"DAY_USE\" type=\"STRING\" size=\"256\"/><Column id=\"USER_DEPT\" type=\"STRING\" size=\"256\"/><Column id=\"ID_SABUN\" type=\"STRING\" size=\"256\"/><Column id=\"DS_HNAME\" type=\"STRING\" size=\"256\"/><Column id=\"SEQ\" type=\"BIGDECIMAL\" size=\"256\"/><Column id=\"KM_BEFORE\" type=\"INT\" size=\"256\"/><Column id=\"KM_AFTER\" type=\"INT\" size=\"256\"/><Column id=\"KM_DRIVE\" type=\"INT\" size=\"256\"/><Column id=\"KM_BUSINESS\" type=\"INT\" size=\"256\"/><Column id=\"KM_WORKING\" type=\"INT\" size=\"256\"/><Column id=\"AM_CAR_FUEL\" type=\"BIGDECIMAL\" size=\"256\"/><Column id=\"AM_REPAIR\" type=\"BIGDECIMAL\" size=\"256\"/><Column id=\"AM_HIPASS\" type=\"BIGDECIMAL\" size=\"256\"/><Column id=\"DS_DRIVE\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsDetail", this);
            obj._setContents("");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Static("staTITLE","0","10","100.00%","30",null,null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_text("차량별운행일지");
            obj.set_cssclass("sta_TITLE_Bg");
            obj.set_textAlign("left");
            obj.set_visible("false");
            this.addChild(obj.name, obj);

            obj = new Static("staCD_CAR","0","105","87","30",null,null,null,null,null,null,this);
            obj.set_taborder("5");
            obj.set_text("차량코드");
            obj.set_cssclass("sta_WF_tablelabel");
            this.addChild(obj.name, obj);

            obj = new Static("sta01","86","105","250","30",null,null,null,null,null,null,this);
            obj.set_taborder("6");
            obj.set_cssclass("sta_WF_tablebg");
            obj.set_text("");
            this.addChild(obj.name, obj);

            obj = new Static("sta02","86","76","250","30",null,null,null,null,null,null,this);
            obj.set_taborder("4");
            obj.set_cssclass("sta_WF_tablebg");
            obj.set_text("");
            this.addChild(obj.name, obj);

            obj = new Static("staYR_BASE","0","76","87","30",null,null,null,null,null,null,this);
            obj.set_taborder("3");
            obj.set_text("사업년도");
            obj.set_cssclass("sta_WF_tablelabelE");
            this.addChild(obj.name, obj);

            obj = new Static("sta04","86","47","250","30",null,null,null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_cssclass("sta_WF_tablebg");
            obj.set_text("");
            this.addChild(obj.name, obj);

            obj = new Static("stCD_CORP","0","47","87","30",null,null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_text("법인");
            obj.set_cssclass("sta_WF_tablelabelE");
            this.addChild(obj.name, obj);

            obj = new Div("divBtns","47","180","200","30",null,null,null,null,null,null,this);
            obj.set_taborder("7");
            this.addChild(obj.name, obj);

            obj = new Button("btnOK","50","0","60","27",null,null,null,null,null,null,this.divBtns.form);
            obj.set_taborder("0");
            obj.set_text("확인");
            this.divBtns.addChild(obj.name, obj);

            obj = new Button("btnCANCLE","btnOK:30","0","60","27",null,null,null,null,null,null,this.divBtns.form);
            obj.set_taborder("15");
            obj.set_text("취소");
            this.divBtns.addChild(obj.name, obj);

            obj = new Div("ccfCD_CORP","93","52","227","20",null,null,null,null,null,null,this);
            obj.getSetter("CDTextWidth").set("40");
            obj.set_taborder("8");
            obj.set_url("cmm::cmmCodeFind.xfdl");
            obj.set_text("");
            obj.set_enable("true");
            obj.getSetter("CodeFindName").set("DAX_CFCORP_CODEFIND");
            this.addChild(obj.name, obj);

            obj = new Div("ccfYR_BASE","93","81","105","20",null,null,null,null,null,null,this);
            obj.set_taborder("9");
            obj.set_url("cmm::cmmCalYY.xfdl");
            obj.set_text("");
            this.addChild(obj.name, obj);

            obj = new Div("ccfCD_CAR","93","110","227","20",null,null,null,null,null,null,this);
            obj.getSetter("CDTextWidth").set("80");
            obj.set_taborder("10");
            obj.set_url("cmm::cmmCodeFind.xfdl");
            obj.set_text("");
            obj.set_enable("true");
            obj.getSetter("CodeFindName").set("DHX_CAR");
            this.addChild(obj.name, obj);

            obj = new Static("staCD_DEPT","0","134","87","30",null,null,null,null,null,null,this);
            obj.set_taborder("11");
            obj.set_text("부서");
            obj.set_cssclass("sta_WF_tablelabel");
            this.addChild(obj.name, obj);

            obj = new Static("sta04_00","86","134","250","30",null,null,null,null,null,null,this);
            obj.set_taborder("12");
            obj.set_cssclass("sta_WF_tablebg");
            obj.set_text("");
            this.addChild(obj.name, obj);

            obj = new Div("ccfCD_DEPT","93","139","227","20",null,null,null,null,null,null,this);
            obj.getSetter("CDTextWidth").set("80");
            obj.set_taborder("13");
            obj.set_url("cmm::cmmCodeFind.xfdl");
            obj.set_text("");
            obj.set_enable("true");
            obj.getSetter("CodeFindName").set("DAX_CFDEPT");
            this.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this
            obj = new Layout("default","",this._adjust_width,this._adjust_height,this,function(p){});
            this.addLayout(obj.name, obj);
            
            // BindItem Information
            obj = new BindItem("item0","ccfCD_CORP.form.CDTextBox","value","dsSearch","CD_CORP");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item1","ccfCD_CORP.form.DSTextBox","value","dsSearch","DS_CORP");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item2","ccfYR_BASE.form.TextBox","value","dsSearch","YR_BASE");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item3","ccfCD_CAR.form.CDTextBox","value","dsSearch","CD_CAR");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item4","ccfCD_CAR.form.DSTextBox","value","dsSearch","DS_CAR");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item5","ccfCD_DEPT.form.CDTextBox","value","dsSearch","CD_DEPT");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item6","ccfCD_DEPT.form.DSTextBox","value","dsSearch","DS_DEPT");
            this.addChild(obj.name, obj);
            obj.bind();
            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {
            this._addPreloadList("fdl","cmm::cmmCodeFind.xfdl");
            this._addPreloadList("fdl","cmm::cmmCalYY.xfdl");
        };
        
        // User Script
        this.registerScript("DAM_CARUSE_PRT_DLG.xfdl", function() {
        this.objApp = this.gfnGetApplication();
        //this.gbDel = "";	// 시간과 분 구분자(:) 추가하기위함 변수

        this.form_onload = function(obj,e)
        {
        	// -- 필수 -------------------//
        	this.gfnFormOnLoad(this);
        	this.gfnFormInfo(this);
        	// ---------------------------//

        	this.fnSetVariable();
        	this.fnSetEvent();
        	this.fnSetParameter();

        	// 메인창 파라미터 받기
        	this.dsSearch.setColumn(0, "CD_CORP", this.getOwnerFrame().CD_CORP);
        	this.dsSearch.setColumn(0, "DS_CORP", this.getOwnerFrame().DS_CORP);
        	this.dsSearch.setColumn(0, "CD_CAR", this.getOwnerFrame().CD_CAR);
        	this.dsSearch.setColumn(0, "DS_CAR", this.getOwnerFrame().DS_CAR);
        	this.dsSearch.setColumn(0, "YR_BASE", this.gfnGetDate().toString().substr(0,4));
        	this.dsSearch.setColumn(0, "CD_DEPT", this.AuthClient.CD_DEPT);
        	this.dsSearch.setColumn(0, "DS_DEPT", this.AuthClient.DS_DEPT);



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
        	this.dsSelect = new Dataset();
        	this.dsSelect.addColumn("CD_CORP", "string");
        	this.dsSelect.addColumn("YR_BASE", "string");
        	this.dsSelect.addColumn("CD_CAR", "string");
        	this.dsSelect.addColumn("CD_DEPT", "string");
        }

        /************************************************************************
         * 이벤트 설정
         ************************************************************************/
        this.fnSetEvent = function() {

        	this.ccfCD_CORP.BeforeUserDataSetParam = "fnBeforeUserDataSetParam";
        	this.ccfCD_CORP.AfterCDTextChanged = "fnAfterCDTextChanged";

        	this.ccfCD_CAR.BeforeUserDataSetParam = "fnBeforeUserDataSetParam";
        	this.ccfCD_CAR.AfterCDTextChanged = "fnAfterCDTextChanged";

        	this.ccfCD_DEPT.BeforeUserDataSetParam = "fnBeforeUserDataSetParam";
        	this.ccfCD_DEPT.AfterCDTextChanged = "fn_AfterCDTextChanged";
        };

        this.btnOK_onclick = function(obj,e){
        	if(!this.fnDataValidate()) return;

        	this.gfnConfirm("출력하시겠습니까?", "fnSelect");
        };

        this.fnSelect = function(){

        	this.dsSelect.clearData();
        	this.dsSelect.addRow();
        	this.dsSelect.setColumn(0, "CD_CORP", this.dsSearch.getColumn(0, "CD_CORP"));
        	this.dsSelect.setColumn(0, "YR_BASE", this.dsSearch.getColumn(0, "YR_BASE"));
        	this.dsSelect.setColumn(0, "CD_CAR", this.dsSearch.getColumn(0, "CD_CAR"));
        	this.dsSelect.setColumn(0, "CD_DEPT", this.dsSearch.getColumn(0, "CD_DEPT"));

        	var strSvcId    = "select";
        	var strSvcType  = "grid";
        	var inProc		= "_dsProc";
        	var inData      = "selectMaster=dsSelect selectDetail=dsSelect";
        	var outData     = "dsMaster=selectMaster0 dsDetail=selectDetail0";
        	var strArg      = "";
        	var callBackFnc = "fnCallback";

        	this.gfnTransaction( strSvcId , 	// transaction을 구분하기 위한 svc id값
        						strSvcType , 	// trabsaction을 요청할 구분
        						inProc,			// Procedure 정보 Dataset 이름
        						inData , 		// 입력값으로 보낼 dataset id , a=b형태로 실제이름과 입력이름을 매칭
        						outData , 		// 처리결과값으로 받을 dataset id, a=b형태로 실제이름과 입력이름을 매칭
        						strArg, 			// 입력갑스로 보낼 arguments, strFormData="20120607"
        						callBackFnc); // 통신방법 정의 [생략가능]
        }

        this.fnPrint = function(){
        	var reportpath  = "/da/dam/DAM_CARUSE_PRT.ozr";
        	var inProc		= "_dsProc";
        	//var inParam 	= "params=dsSelect";						// 필요없는 경우 생략
        	var inParam 	= "";
        	var inData      = "selectMaster=dsSelect selectDetail=dsSelect";

        	gfnOpenReport(this, reportpath, inProc, inParam, inData);
        }


        this.btnCANCLE_onclick = function(obj,e){
        	// 취소
        	this.getParentContext().close(false);
        };

        this.fnDataValidate = function(){
        	if(this.gfnIsNull(this.ccfCD_CORP.form.CDTextBox.value)) {
        		this.ccfCD_CORP.form.CDTextBox.setFocus();
        		this.gfnAlert("법인을 입력해주세요");
        		return false;
        	}

        	trace("["+this.ccfYR_BASE.form.TextBox.value+"]");
        	if(this.gfnIsNull(this.ccfYR_BASE.form.TextBox.value)) {
        		this.ccfYR_BASE.setFocus();
        		this.gfnAlert("사업년도를 입력해주세요");
        		return false;
        	}
        // 	if(this.gfnIsNull(this.ccfCD_CAR.form.CDTextBox.value)) {
        // 		this.ccfCD_CAR.form.CDTextBox.setFocus();
        // 		this.gfnAlert("차량코드를 입력해주세요");
        // 		return false;
        // 	}

        	return true;
        }
        /************************************************************************
         * 코드파인드 이벤트
         ************************************************************************/
        this.fnBeforeUserDataSetParam = function(id, dsUserParam, nrow) {
        	if (id == "ccfCD_CORP") {
        		dsUserParam.setColumn(nrow, "CD_CORP", this.AuthClient.CD_CORP);
        		dsUserParam.setColumn(nrow, "GR_SEARCH", this.FormInfo.GR_SEARCH);
        		dsUserParam.setColumn(nrow, "ID_USER", this.AuthClient.ID_USER);
        	}
         	else if (id == "ccfCD_CAR") {
        		if (this.gfnIsNull(this.ccfCD_CORP.form.CDTextBox.value)) {
        			this.gfnAlert("법인을 먼저 입력하세요.");
        			return false;
        		}
        		dsUserParam.setColumn(nrow, "CD_CORP", this.ccfCD_CORP.form.CDTextBox.value);
        	}
        	else  if(id == "ccfCD_DEPT"){
        		var sCD_CORP = this.ccfCD_CORP.form.CDTextBox.value;
        		if (this.gfnIsNull(sCD_CORP)) {
        			this.gfnAlert("법인을 먼저 입력하세요.");
        			return false;
        		}
        		dsUserParam.setColumn(nrow, "GR_SEARCH", this.FormInfo.GR_SEARCH);
        		dsUserParam.setColumn(nrow, "CD_DEPT", this.AuthClient.CD_DEPT);
        		dsUserParam.setColumn(nrow, "CD_CORP", sCD_CORP);
        		dsUserParam.setColumn(nrow, "YN_CURRENT", "N");
        	}

        	return true;
        }

        this.fnAfterCDTextChanged = function(id, codeFindData) {
        	var arr = codeFindData;

        	if (id == "ccfCD_CORP") {
        		this.ccfCD_CAR.form.CDTextBox.set_value("");
        		this.ccfCD_CAR.form.DSTextBox.set_value("");
        	}else if(id == "ccfCD_CAR"){
        		;
        	}
        };

        /************************************************************************
         * 콜백 이벤트
         ************************************************************************/
        this.fnCallback = function(svcID, errorCode, errorMsg){
        	if(svcID == "select") {
        		if (errorCode == 0) {
        			if(this.dsMaster.rowcount == 0){
        				this.gfnAlert("조회된 자료가 없습니다.");
        			}else{
        				this.fnPrint();
        			}
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
            this.sta01.addEventHandler("onclick",this.sta23_onclick,this);
            this.sta02.addEventHandler("onclick",this.sta23_onclick,this);
            this.staYR_BASE.addEventHandler("onclick",this.sta03_onclick,this);
            this.sta04.addEventHandler("onclick",this.sta23_onclick,this);
            this.stCD_CORP.addEventHandler("onclick",this.sta05_onclick,this);
            this.divBtns.form.btnOK.addEventHandler("onclick",this.btnOK_onclick,this);
            this.divBtns.form.btnCANCLE.addEventHandler("onclick",this.btnCANCLE_onclick,this);
            this.staCD_DEPT.addEventHandler("onclick",this.sta05_onclick,this);
            this.sta04_00.addEventHandler("onclick",this.sta23_onclick,this);
        };
        this.loadIncludeScript("DAM_CARUSE_PRT_DLG.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
