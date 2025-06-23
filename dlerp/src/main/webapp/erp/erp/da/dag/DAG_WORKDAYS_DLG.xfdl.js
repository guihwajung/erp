(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("DAG_WORKDAYS_DLG");
            this.set_titletext("출퇴근내역가져오기");
            this.getSetter("maxwidth").set("360");
            this.getSetter("maxheight").set("235");
            if (Form == this.constructor)
            {
                this._setFormPosition(320,160);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("dsList", this);
            obj._setContents("<ColumnInfo><Column id=\"CD_CORP\" type=\"STRING\" size=\"256\"/><Column id=\"DS_CORP\" type=\"STRING\" size=\"256\"/><Column id=\"ID_SABUN\" type=\"STRING\" size=\"256\"/><Column id=\"DS_HNAME\" type=\"STRING\" size=\"256\"/><Column id=\"DT_WORK_FROM\" type=\"STRING\" size=\"256\"/><Column id=\"DT_WORK_TO\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row/></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("_dsProc", this);
            obj._setContents("<ColumnInfo><Column id=\"TARGET\" type=\"STRING\" size=\"256\"/><Column id=\"SP\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"TARGET\">save</Col><Col id=\"SP\">DAGPR_WORKDAYS_CREATE</Col></Row></Rows>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Div("divData","0","0",null,null,"0","0",null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_cssclass("div_DATA_Bg");
            obj.set_text("");
            this.addChild(obj.name, obj);

            obj = new Static("sta_TITLE","0","6","180","18",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("0");
            obj.set_text("출퇴근내역가져오기");
            obj.set_cssclass("sta_TITLE_Bg");
            obj.set_visible("true");
            this.divData.addChild(obj.name, obj);

            obj = new Static("staCD_CORP","0","35","65","30",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("4");
            obj.set_text("법인");
            obj.set_cssclass("sta_WF_tablelabelE");
            this.divData.addChild(obj.name, obj);

            obj = new Static("staCD_CORP_bg","staCD_CORP:-1","staCD_CORP:-30","252","30",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("6");
            obj.set_cssclass("sta_WF_tablebg");
            obj.set_text("");
            this.divData.addChild(obj.name, obj);

            obj = new Div("ccfCD_CORP","staCD_CORP:5","staCD_CORP:-25","240","20",null,null,null,null,null,null,this.divData.form);
            obj.getSetter("CDTextWidth").set("70");
            obj.set_taborder("5");
            obj.set_url("cmm::cmmCodeFind.xfdl");
            obj.set_text("");
            obj.getSetter("CodeFindName").set("DAX_CFCORP");
            this.divData.addChild(obj.name, obj);

            obj = new Static("staID_SABUN","0","staCD_CORP:-1","65","30",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("3");
            obj.set_text("성명");
            obj.set_cssclass("sta_WF_tablelabel");
            this.divData.addChild(obj.name, obj);

            obj = new Static("staID_SABUN_BG","staID_SABUN:-1","staID_SABUN:-30","252","30",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("1");
            obj.set_cssclass("sta_WF_tablebg");
            obj.set_text("");
            this.divData.addChild(obj.name, obj);

            obj = new Div("ccfID_SABUN","staID_SABUN:5","staID_SABUN:-25","240","20",null,null,null,null,null,null,this.divData.form);
            obj.getSetter("CDTextWidth").set("70");
            obj.set_taborder("2");
            obj.set_url("cmm::cmmCodeFind.xfdl");
            obj.set_text("");
            obj.getSetter("CodeFindName").set("DAX_CFBASEINFO_ALL");
            this.divData.addChild(obj.name, obj);

            obj = new Static("staDT_WORK","0","staID_SABUN:-1","65","30",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("10");
            obj.set_text("근로일");
            obj.set_cssclass("sta_WF_tablelabelE");
            this.divData.addChild(obj.name, obj);

            obj = new Static("staDT_WORK_bg","staDT_WORK:-1","staDT_WORK:-30","252","30",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("11");
            obj.set_cssclass("sta_WF_tablebg");
            obj.set_text("");
            this.divData.addChild(obj.name, obj);

            obj = new Calendar("ctclFR_WORK","staDT_WORK:5","staDT_WORK:-25","105","20",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("9");
            obj.set_dateformat("yyyy-MM-dd");
            obj.set_editformat("yyyyMMdd");
            obj.set_autoselect("true");
            this.divData.addChild(obj.name, obj);

            obj = new Static("staDT_WORK_tilt","ctclFR_WORK:0","staDT_WORK:-25","30","20",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("7");
            obj.set_text("~");
            obj.set_textAlign("center");
            this.divData.addChild(obj.name, obj);

            obj = new Calendar("ctclTO_WORK","staDT_WORK_tilt:0","staDT_WORK:-25","100","20",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("8");
            obj.set_dateformat("yyyy-MM-dd");
            obj.set_editformat("yyyyMMdd");
            obj.set_autoselect("true");
            this.divData.addChild(obj.name, obj);

            obj = new Div("divBtns","95","staDT_WORK:10","130","27",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("6");
            obj.set_text("");
            this.divData.addChild(obj.name, obj);

            obj = new Button("btnOK","0","0","60","27",null,null,null,null,null,null,this.divData.form.divBtns.form);
            obj.set_taborder("0");
            obj.set_text("확인");
            this.divData.form.divBtns.addChild(obj.name, obj);

            obj = new Button("btnCANCLE","btnOK:10","0","60","27",null,null,null,null,null,null,this.divData.form.divBtns.form);
            obj.set_taborder("1");
            obj.set_text("취소");
            this.divData.form.divBtns.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this
            obj = new Layout("default","",this._adjust_width,this._adjust_height,this,function(p){});
            this.addLayout(obj.name, obj);
            
            // BindItem Information
            obj = new BindItem("item0","divData.form.ccfID_SABUN.form.CDTextBox","value","dsList","ID_SABUN");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item1","divData.form.ccfID_SABUN.form.DSTextBox","value","dsList","DS_HNAME");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item2","divData.form.ccfCD_CORP.form.CDTextBox","value","dsList","CD_CORP");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item3","divData.form.ccfCD_CORP.form.DSTextBox","value","dsList","DS_CORP");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item4","divData.form.ctclTO_WORK","value","dsList","DT_WORK_TO");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item5","divData.form.ctclFR_WORK","value","dsList","DT_WORK_FROM");
            this.addChild(obj.name, obj);
            obj.bind();
            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {
            this._addPreloadList("fdl","cmm::cmmCodeFind.xfdl");
        };
        
        // User Script
        this.registerScript("DAG_WORKDAYS_DLG.xfdl", function() {
        this.objApp = this.gfnGetApplication();

        this.form_onload = function(obj,e)
        {
        	// -- 필수 -------------------//
        	this.gfnFormOnLoad(this);
        	this.gfnFormInfo(this);
        	// ---------------------------//

        	this.fnSetVariable();
        	this.fnSetEvent();
        	this.fnSetParameter();

        	if(!this.gfnIsNull(this.getOwnerFrame().ID_SABUN)){
        		this.ccfID_SABUN.form.CDTextBox.set_value(this.getOwnerFrame().ID_SABUN);
        		this.ccfID_SABUN.form.fnCodeFindLoad();
        	}else{
        		if(!this.gfnIsNull(this.getOwnerFrame().CD_CORP)){
        			this.ccfCD_CORP.form.CDTextBox.set_value(this.getOwnerFrame().CD_CORP);
        			this.ccfCD_CORP.form.DSTextBox.set_value(this.getOwnerFrame().DS_CORP);
        		}
        	}
        	this.ctclFR_WORK.set_value(this.gfnNvl(this.getOwnerFrame().DT_WORK_FROM, ""));
        	this.ctclTO_WORK.set_value(this.gfnNvl(this.getOwnerFrame().DT_WORK_TO, ""));

        };

        /************************************************************************
         * 변수 선언
         ************************************************************************/
        this.fnSetVariable = function() {
        	this.ccfCD_CORP = this.divData.form.ccfCD_CORP;
        	this.ccfID_SABUN = this.divData.form.ccfID_SABUN;
        	this.ctclFR_WORK = this.divData.form.ctclFR_WORK;
        	this.ctclTO_WORK = this.divData.form.ctclTO_WORK;

        };

        /************************************************************************
         * 파라미터 설정
         ************************************************************************/
        this.fnSetParameter = function() {
        	this.dsSave = new Dataset();
        	this.dsSave.addColumn("CD_CORP", "string");
        	this.dsSave.addColumn("ID_SABUN", "string");
        	this.dsSave.addColumn("DT_WORK_FROM", "string");
        	this.dsSave.addColumn("DT_WORK_TO", "string");
        	this.dsSave.addColumn("GR_SEARCH", "string");
        	this.dsSave.addColumn("TY_AUTH", "string");
        	this.dsSave.addColumn("GR_DEPT", "string");
        	this.dsSave.addColumn("ID_USER", "string");
        }

        /************************************************************************
         * 이벤트 설정
         ************************************************************************/
        this.fnSetEvent = function() {
        	this.ccfCD_CORP.BeforeUserDataSetParam = "fnBeforeUserDataSetParam";
        	this.ccfCD_CORP.AfterCDTextChanged = "fnAfterCDTextChanged";
        	this.ccfID_SABUN.BeforeUserDataSetParam = "fnBeforeUserDataSetParam";
        	this.ccfID_SABUN.AfterCDTextChanged = "fnAfterCDTextChanged";
        };


        this.btnOK_onclick = function(obj,e){
        	if(this.dsList.rowcount == 0) return;
        	if(!this.fnSaveValid()) return;

        	this.gfnConfirm("기존 정보는 삭제되고 새로 생성됩니다.\n계속 진행 하시겠습니까?", "fnConfirmCallback");
        };

        this.fnConfirmCallback = function(id, val){
        	trace("fnConfirmCallback", val);
        	if(val){
        		this.fnSave();
        	}
        }

        this.fnSave = function() {

        	this.dsSave.clearData();
        	var nrow = this.dsSave.addRow();

        	this.dsSave.setColumn(nrow, "CD_CORP", this.dsList.getColumn(0, "CD_CORP"));
        	this.dsSave.setColumn(nrow, "ID_SABUN", this.dsList.getColumn(0, "ID_SABUN"));
        	this.dsSave.setColumn(nrow, "DT_WORK_FROM", this.dsList.getColumn(0, "DT_WORK_FROM"));
        	this.dsSave.setColumn(nrow, "DT_WORK_TO", this.dsList.getColumn(0, "DT_WORK_TO"));
        	this.dsSave.setColumn(nrow, "GR_SEARCH", this.FormInfo.GR_SEARCH);
        	this.dsSave.setColumn(nrow, "TY_AUTH", this.FormInfo.TY_AUTH);
        	this.dsSave.setColumn(nrow, "GR_DEPT", this.AuthClient.CD_DEPT);
        	this.dsSave.setColumn(nrow, "ID_USER", this.AuthClient.ID_USER);

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

        }

        this.btnCANCLE_onclick = function(obj,e){
        	// 취소
        	this.getParentContext().close(false);
        };

        this.fnSaveValid = function(){
        	if(this.gfnIsNull(this.ccfCD_CORP.form.CDTextBox.value)) {
        		this.fnValidCallback = function(){
        			this.ccfCD_CORP.form.CDTextBox.setFocus();
        		}
        		this.gfnAlert("법인을 입력해주세요", "fnValidCallback");
        		return false;
        	}
        	if(this.gfnIsNull(this.ctclFR_WORK.value)) {
        		this.fnValidCallback = function(){
        			this.ctclFR_WORK.setFocus();
        		}
        		this.gfnAlert("근로시작일을 입력해주세요", "fnValidCallback");
        		return false;
        	}
        	if(this.gfnIsNull(this.ctclTO_WORK.value)) {
        		this.fnValidCallback = function(){
        			this.ctclTO_WORK.setFocus();
        		}
        		this.gfnAlert("근로종료일을 입력해주세요", "fnValidCallback");
        		return false;
        	}
        	if(!this.gfnIsNull(this.ctclFR_WORK.value) && !this.gfnIsNull(this.ctclTO_WORK.value)){
        		if(this.ctclFR_WORK.value > this.ctclTO_WORK.value){
        			this.fnValidCallback = function(){
        				this.ctclTO_WORK.setFocus();
        			}
        			this.gfnAlert("근로시작일 종료일을 바르게 입력해주세요", "fnValidCallback");
        			return false;
        		}
        	}

        	return true;
        }

        /************************************************************************
         * 코드파인드 이벤트
         ************************************************************************/
        this.fnBeforeUserDataSetParam = function(id, dsUserParam, nrow) {
        	if(id == "ccfCD_CORP"){
        		;//
        	}
        	else if(id == "ccfID_SABUN"){
        		dsUserParam.setColumn(nrow, "CD_DEPT", "");
        		dsUserParam.setColumn(nrow, "CD_CORP", this.gfnNvl(this.ccfCD_CORP.form.CDTextBox.value, "%"));
        		dsUserParam.setColumn(nrow, "GR_SEARCH", this.FormInfo.GR_SEARCH);
        		dsUserParam.setColumn(nrow, "YN_CORP", "N");
        		dsUserParam.setColumn(nrow, "TY_RETIRE", "%");
        	}

        	return true;
        };

        this.fnAfterCDTextChanged = function(id, codeFindData) {
        	var arr = codeFindData;

        	if(id == "ccfID_SABUN"){
         		if(arr.length >0){
        			var rowData = arr[0];
        			this.ccfCD_CORP.form.CDTextBox.set_value(rowData.CD_CORP);
        			this.ccfCD_CORP.form.DSTextBox.set_value(rowData.DS_CORP);
         		}else{

        		}
        	}
        }

        /************************************************************************
         * 콜백 이벤트
         ************************************************************************/
        this.fnCallback = function(svcID, errorCode, errorMsg){
        	if(svcID == "save") {
        		if (errorCode == 0) {
        			this.fnSaveAfter = function() {
        				this.getParentContext().close(true);
        			}
        			this.gfnAlert("출퇴근내역 가져오기 완료되었습니다.", "fnSaveAfter");
        		} else {
        			this.gfnAlert(errorMsg);
        		}
        	}
        }


        this.dsList_onvaluechanged = function(obj,e){
        	if(e.newvalue != e.oldvalue){
        		if(e.columnid == "ID_SABUN"){
        		}
        	}
        };

        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.form_onload,this);
            this.divData.form.staCD_CORP_bg.addEventHandler("onclick",this.sta23_onclick,this);
            this.divData.form.staID_SABUN_BG.addEventHandler("onclick",this.sta23_onclick,this);
            this.divData.form.staDT_WORK_bg.addEventHandler("onclick",this.sta23_onclick,this);
            this.divData.form.ctclFR_WORK.addEventHandler("onchanged",this.fnSearchInit,this);
            this.divData.form.ctclTO_WORK.addEventHandler("onchanged",this.fnSearchInit,this);
            this.divData.form.divBtns.form.btnOK.addEventHandler("onclick",this.btnOK_onclick,this);
            this.divData.form.divBtns.form.btnCANCLE.addEventHandler("onclick",this.btnCANCLE_onclick,this);
            this.dsList.addEventHandler("onvaluechanged",this.dsList_onvaluechanged,this);
        };
        this.loadIncludeScript("DAG_WORKDAYS_DLG.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
