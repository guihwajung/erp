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
            this.set_titletext("입주일변환");
            this.getSetter("maxwidth").set("500");
            this.getSetter("maxheight").set("380");
            if (Form == this.constructor)
            {
                this._setFormPosition(380,400);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("dsList2", this);
            obj._setContents("");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsList", this);
            obj._setContents("<ColumnInfo><Column id=\"CD_ACNTUNIT\" type=\"STRING\" size=\"256\"/><Column id=\"DS_ACNTUNIT\" type=\"STRING\" size=\"256\"/><Column id=\"DT_STARTAGREE\" type=\"STRING\" size=\"256\"/><Column id=\"DT_ENDAGREE\" type=\"STRING\" size=\"256\"/><Column id=\"DT_IPJUSTART\" type=\"STRING\" size=\"256\"/><Column id=\"DT_IPJUEND\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row/></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("_dsProc", this);
            obj._setContents("<ColumnInfo><Column id=\"TARGET\" type=\"STRING\" size=\"256\"/><Column id=\"SP\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"TARGET\">select</Col><Col id=\"SP\">DRDPR_IPJUPERIOD_SELECT</Col></Row><Row><Col id=\"TARGET\">update</Col><Col id=\"SP\">DRDPR_IPJUPERIOD_UPDATE</Col></Row></Rows>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Div("divData","0","0",null,null,"0","0",null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_cssclass("div_DATA_Bg");
            obj.set_text("");
            this.addChild(obj.name, obj);

            obj = new Static("staTITLE","0","20","100.00%","30",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("0");
            obj.set_text("입주일변환");
            obj.set_cssclass("sta_TITLE_Bg");
            obj.set_textAlign("left");
            this.divData.addChild(obj.name, obj);

            obj = new Static("staSunapInfo","0","staTITLE:5",null,"22","0",null,null,null,null,null,this.divData.form);
            obj.set_taborder("37");
            obj.set_text("입주일을 일괄 변경합니다.");
            this.divData.addChild(obj.name, obj);

            obj = new Static("staCD_ACNTUNIT","0","staSunapInfo:15","100","30",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("1");
            obj.set_text("사업지코드");
            obj.set_cssclass("sta_WF_tablelabelE");
            this.divData.addChild(obj.name, obj);

            obj = new Static("staBgCD_ACNTUNIT","staCD_ACNTUNIT:-1","staSunapInfo:15",null,"30","0",null,null,null,null,null,this.divData.form);
            obj.set_taborder("2");
            obj.set_cssclass("sta_WF_tablebg");
            obj.set_text("");
            this.divData.addChild(obj.name, obj);

            obj = new Div("ccfCD_ACNTUNIT","staCD_ACNTUNIT:4","staCD_ACNTUNIT:-25","300","20",null,null,null,null,null,null,this.divData.form);
            obj.getSetter("CodeFindName").set("DRX_CFACNTUNIT");
            obj.getSetter("CDTextWidth").set("100");
            obj.set_taborder("1");
            obj.set_url("cmm::cmmCodeFind.xfdl");
            this.divData.addChild(obj.name, obj);

            obj = new Static("staDT_STARTAGREE","0","staCD_ACNTUNIT:-1","100","30",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("1");
            obj.set_text("예정입주기간");
            obj.set_cssclass("sta_WF_tablelabelE");
            this.divData.addChild(obj.name, obj);

            obj = new Static("staBgDT_STARTAGREE","staDT_STARTAGREE:-1","staCD_ACNTUNIT:-1",null,"30","0",null,null,null,null,null,this.divData.form);
            obj.set_taborder("2");
            obj.set_cssclass("sta_WF_tablebg");
            obj.set_text("");
            this.divData.addChild(obj.name, obj);

            obj = new Edit("txtDT_STARTAGREE","staDT_STARTAGREE:4","staBgDT_STARTAGREE:-25","105","20",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("5");
            obj.set_readonly("true");
            this.divData.addChild(obj.name, obj);

            obj = new Static("staDT_PERIOD_TIL","txtDT_STARTAGREE:7","staBgDT_STARTAGREE:-25","10","20",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("0");
            obj.set_text("~");
            this.divData.addChild(obj.name, obj);

            obj = new Edit("txtDT_ENDAGREE","staDT_PERIOD_TIL:5","staBgDT_STARTAGREE:-25","105","20",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("5");
            obj.set_readonly("true");
            this.divData.addChild(obj.name, obj);

            obj = new Static("staDT_IPJUSTART","0","staDT_STARTAGREE:-1","100","30",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("1");
            obj.set_text("변경입주기간");
            obj.set_cssclass("sta_WF_tablelabelE");
            this.divData.addChild(obj.name, obj);

            obj = new Static("staBgDT_IPJUSTART","staDT_IPJUSTART:-1","staDT_STARTAGREE:-1",null,"30","0",null,null,null,null,null,this.divData.form);
            obj.set_taborder("2");
            obj.set_cssclass("sta_WF_tablebg");
            obj.set_text("");
            this.divData.addChild(obj.name, obj);

            obj = new Calendar("tclDT_IPJUSTART","staDT_IPJUSTART:4","staBgDT_IPJUSTART:-25","105","20",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("25");
            obj.set_dateformat("yyyy-MM-dd");
            obj.set_editformat("yyyyMMdd");
            obj.set_autoselect("true");
            this.divData.addChild(obj.name, obj);

            obj = new Static("staDT_PERIOD_TIL2","tclDT_IPJUSTART:7","staBgDT_IPJUSTART:-25","10","20",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("0");
            obj.set_text("~");
            this.divData.addChild(obj.name, obj);

            obj = new Calendar("tclDT_IPJUEND","staDT_PERIOD_TIL2:5","staBgDT_IPJUSTART:-25","105","20",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("25");
            obj.set_dateformat("yyyy-MM-dd");
            obj.set_editformat("yyyyMMdd");
            obj.set_autoselect("true");
            this.divData.addChild(obj.name, obj);

            obj = new Static("sta01","0","staBgDT_IPJUSTART:9",null,"22","0",null,null,null,null,null,this.divData.form);
            obj.set_taborder("37");
            obj.set_text("잔금 선납자에 대한 회계처리를 변경해야 하니");
            this.divData.addChild(obj.name, obj);

            obj = new Static("sta02","0","sta01:-1",null,"22","0",null,null,null,null,null,this.divData.form);
            obj.set_taborder("37");
            obj.set_text("작업 전에 잔금수납자 현황을 우선적으로 확인하시기 바랍니다.");
            this.divData.addChild(obj.name, obj);

            obj = new Button("btnOK","134","251","60","27",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("3");
            obj.set_text("확인");
            this.divData.addChild(obj.name, obj);

            obj = new Button("btnCANCLE","btnOK:30","251","60","27",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("4");
            obj.set_text("취소");
            this.divData.addChild(obj.name, obj);

            obj = new Div("staSunapSplitter","0","staSunapInfo:79","100.00%","5",null,null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_background("skyblue");
            obj.set_cursor("ns-resize");
            this.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this
            obj = new Layout("default","",this._adjust_width,this._adjust_height,this,function(p){});
            this.addLayout(obj.name, obj);
            
            // BindItem Information
            obj = new BindItem("item0","divData.form.ccfCD_ACNTUNIT.form.CDTextBox","value","dsList","CD_ACNTUNIT");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item1","divData.form.ccfCD_ACNTUNIT.form.DSTextBox","value","dsList","DS_ACNTUNIT");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item2","divData.form.txtDT_STARTAGREE","value","dsList","DT_STARTAGREE");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item3","divData.form.txtDT_ENDAGREE","value","dsList","DT_ENDAGREE");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item4","divData.form.tclDT_IPJUSTART","value","dsList","DT_IPJUSTART");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item5","divData.form.tclDT_IPJUEND","value","dsList","DT_IPJUEND");
            this.addChild(obj.name, obj);
            obj.bind();
            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {
            this._addPreloadList("fdl","cmm::cmmCodeFind.xfdl");
        };
        
        // User Script
        this.registerScript("DRD_DLGCHANGEMOVE.xfdl", function() {
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

        	// 초기화
        	this.dsList.setColumn(0, "DT_IPJUSTART", this.gfnGetDate());
        	this.dsList.setColumn(0, "DT_IPJUEND", this.gfnGetDate());
        	this.ccfCD_ACNTUNIT.setFocus();
        };

        /************************************************************************
        * 변수 선언
        ************************************************************************/
        this.fnSetVariable = function() {
        	this.ccfCD_ACNTUNIT = this.divData.form.ccfCD_ACNTUNIT;
        	this.txtDT_STARTAGREE = this.divData.form.txtDT_STARTAGREE;
        	this.txtDT_ENDAGREE = this.divData.form.txtDT_ENDAGREE;
        	this.tclDT_IPJUSTART = this.divData.form.tclDT_IPJUSTART;
        	this.tclDT_IPJUEND = this.divData.form.tclDT_IPJUEND;
        };

        /************************************************************************
        * 이벤트 설정
        ************************************************************************/
        this.fnSetEvent = function() {
        	this.ccfCD_ACNTUNIT.BeforeUserDataSetParam = "fnBeforeUserDataSetParam";
        	this.ccfCD_ACNTUNIT.AfterCDTextChanged = "fnAfterCDTextChanged";
        };

        /************************************************************************
        * 파라미터 설정
        ************************************************************************/
        this.fnSetParameter = function() {
        	this.dsSelect = new Dataset();
        	this.dsSelect.addColumn("CD_ACNTUNIT", "string");
        	this.dsSelect.addColumn("TY_GUBUN", "string");
        	this.dsSelect.addColumn("NO_CHASU", "string");

        	this.dsUpdate = new Dataset();
        	this.dsUpdate.addColumn("CD_ACNTUNIT", "string");
        	this.dsUpdate.addColumn("TY_GUBUN", "string");
        	this.dsUpdate.addColumn("NO_CHASU", "string");
        	this.dsUpdate.addColumn("DT_IPJUSTART2", "string");
        	this.dsUpdate.addColumn("DT_IPJUEND2", "string");
        	this.dsUpdate.addColumn("ID_UPDATE", "string");
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
        	this.dsSelect.setColumn(0, "CD_ACNTUNIT", this.dsList.getColumn(0, "CD_ACNTUNIT").substr(0, 6));  //사업자코드
        	this.dsSelect.setColumn(0, "TY_GUBUN", this.dsList.getColumn(0, "CD_ACNTUNIT").substr(6, 1));		//종류
        	this.dsSelect.setColumn(0, "NO_CHASU", this.dsList.getColumn(0, "CD_ACNTUNIT").substr(7, 2));		//차수

        	var strSvcId    = "select";
        	var strSvcType  = "grid";
        	var inProc		= "_dsProc";
        	var inData      = "select=dsSelect";
        	var outData     = "dsList2=select0";
        	var strArg      = "";
        	var callBackFnc = "fnCallback";

        	this.gfnTransaction(strSvcId, 		// transaction을 구분하기 위한 svc id값
        		strSvcType, 	// transaction을 요청할 구분
        		inProc,			// Procedure 정보 Dataset 이름
        		inData, 		// 입력값으로 보낼 dataset id , a=b형태로 실제이름과 입력이름을 매칭
        		outData, 		// 처리결과값으로 받을 dataset id, a=b형태로 실제이름과 입력이름을 매칭
        		strArg, 		// 입력값으로 보낼 arguments, strFormData="20120607"
        		callBackFnc); 	// 통신방법 정의 [생략가능]
        }

        /************************************************************************
        * Validate
        ************************************************************************/
        this.fnSaveValidate = function() {
        	if (this.gfnIsNull(this.dsList.getColumn(0, "CD_ACNTUNIT"))) {
        		this.fnVaidateCallback = function() {
        			this.ccfCD_ACNTUNIT.setFocus();
        		}
        		this.gfnAlert("사업지코드가 입력되지 않았습니다.", "fnVaidateCallback");
        		return false;
        	}
        	else if (this.gfnIsNull(this.dsList.getColumn(0, "DT_IPJUSTART")) || this.gfnIsNull(this.dsList.getColumn(0, "DT_IPJUEND"))) {
        		this.fnVaidateCallback = function() {
        			this.tclDT_IPJUSTART.setFocus();
        		}
        		this.gfnAlert("변경입주기간이 입력되지 않았습니다.", "fnVaidateCallback");
        		return false;
        	}
        	return true;
        };

        /************************************************************************
        * 코드파인드 이벤트
        ************************************************************************/
        this.fnBeforeUserDataSetParam = function(id, dsUserParam, nrow) {
        	if (id == "ccfCD_ACNTUNIT") {
        		dsUserParam.setColumn(nrow, "CD_DEPT", this.AuthClient.CD_DEPT);
        		dsUserParam.setColumn(nrow, "ID_USER", this.AuthClient.ID_USER);
        		dsUserParam.setColumn(nrow, "ID_GROUP", this.AuthClient.CD_CORP);
        		dsUserParam.setColumn(nrow, "GR_SEARCH", this.FormInfo.GR_SEARCH);
        	}
        	return true;
        };
        this.fnAfterCDTextChanged = function(id, codeFindData) {
        	var arr = codeFindData;
        	if(id =="ccfCD_ACNTUNIT"){
        		if(arr.length > 0 ){
        			this.fnSelect();
        		}
        	}
        };
        /************************************************************************
        * 콜백 이벤트
        ************************************************************************/
        this.fnCallback = function(svcID, errorCode, errorMsg) {
        	if(svcID == "select"){
        		if (errorCode == 0) {
        			this.dsList.setColumn(0, "DT_STARTAGREE", this.dsList2.getColumn(0, "DT_STARTAGREE"));
        			this.dsList.setColumn(0, "DT_ENDAGREE", this.dsList2.getColumn(0, "DT_ENDAGREE"));
        		}
        		else {
        			this.gfnAlert(errorMsg);
        		}
         	}
        	if (svcID == "save") {
        		if(errorCode == 0){
        			this.getParentContext().close(true);
        		}
        		else{
        			this.gfnAlert(errorMsg);
        		}
        	}
        }

        /************************************************************************
        * 기타 이벤트
        ************************************************************************/
        this.dsList_onvaluechanged = function(obj,e) {
        	if (e.oldvalue != e.newvalue) {

        	}
        };

        this.fnSaveData = function() {
        	this.dsUpdate.clearData();
        	var nrow = this.dsUpdate.addRow();
        	this.dsUpdate.setColumn(nrow, "CD_ACNTUNIT", this.dsList.getColumn(0, "CD_ACNTUNIT").substr(0, 6));  //사업자코드
        	this.dsUpdate.setColumn(nrow, "TY_GUBUN", this.dsList.getColumn(0, "CD_ACNTUNIT").substr(6, 1));		//종류
        	this.dsUpdate.setColumn(nrow, "NO_CHASU", this.dsList.getColumn(0, "CD_ACNTUNIT").substr(7, 2));		//차수
        	this.dsUpdate.setColumn(nrow, "DT_IPJUSTART2", this.dsList.getColumn(0, "DT_IPJUSTART"));
        	this.dsUpdate.setColumn(nrow, "DT_IPJUEND2", this.dsList.getColumn(0, "DT_IPJUEND"));
        	this.dsUpdate.setColumn(nrow, "ID_UPDATE", this.AuthClient.ID_USER);

        	var strSvcId    = "save";
        	var strSvcType  = "save";
        	var inProc		= "_dsProc";
        	var inData      = "update=dsUpdate";
        	var outData     = "";
        	var strArg      = "";
        	var callBackFnc = "fnCallback";

        	this.gfnTransaction( strSvcId , 	// transaction을 구분하기 위한 svc id값
        		strSvcType , 	// trabsaction을 요청할 구분
        		inProc,			// Procedure 정보 Dataset 이름
        		inData , 		// 입력값으로 보낼 dataset id , a=b형태로 실제이름과 입력이름을 매칭
        		outData , 		// 처리결과값으로 받을 dataset id, a=b형태로 실제이름과 입력이름을 매칭
        		strArg, 			// 입력갑스로 보낼 arguments, strFormData="20120607"
        		callBackFnc); // 통신방법 정의 [생략가능]
        };

        this.btnOK_onclick = function(obj,e) {
        	if(!this.fnSaveValidate()) return;
        	this.fnSaveData();
        };

        this.btnCANCLE_onclick = function(obj,e) {
        	this.getParentContext().close(false);
        };


        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.form_onload,this);
            this.divData.form.tclDT_IPJUSTART.addEventHandler("onchanged",this.fnSearchInit,this);
            this.divData.form.tclDT_IPJUEND.addEventHandler("onchanged",this.fnSearchInit,this);
            this.divData.form.btnOK.addEventHandler("onclick",this.btnOK_onclick,this);
            this.divData.form.btnCANCLE.addEventHandler("onclick",this.btnCANCLE_onclick,this);
            this.dsList.addEventHandler("onvaluechanged",this.dsList_onvaluechanged,this);
        };
        this.loadIncludeScript("DRD_DLGCHANGEMOVE.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
