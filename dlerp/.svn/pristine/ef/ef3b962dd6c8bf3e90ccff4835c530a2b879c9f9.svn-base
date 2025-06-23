(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("DAA_BASE_PERSCARD_DLG");
            this.set_titletext("기본정보_인사기록카드");
            this.getSetter("maxwidth").set("300");
            this.getSetter("maxheight").set("180");
            if (Form == this.constructor)
            {
                this._setFormPosition(300,180);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("dsList", this);
            obj._setContents("<ColumnInfo><Column id=\"CD_ACNTUNIT\" type=\"STRING\" size=\"256\"/><Column id=\"DT_IPJU\" type=\"STRING\" size=\"256\"/><Column id=\"DT_IPJUPLAN\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row/></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("_dsProc", this);
            obj._setContents("<ColumnInfo><Column id=\"TARGET\" type=\"STRING\" size=\"256\"/><Column id=\"SP\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"TARGET\">update</Col><Col id=\"SP\">DLBPR_CONTRACTOR_STATE_UPDATE</Col></Row><Row><Col id=\"TARGET\">selectRptEtc</Col><Col id=\"SP\">DAAPR_BASEINFO_CARD_PRINT_ETC</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsData", this);
            obj._setContents("<ColumnInfo><Column id=\"NO_DONG\" type=\"STRING\" size=\"256\"/><Column id=\"NO_FLOOR\" type=\"STRING\" size=\"256\"/><Column id=\"NO_HO\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Div("divData","0","0",null,null,"0","0",null,null,null,null,this);
            obj.set_taborder("0");
            this.addChild(obj.name, obj);

            obj = new Static("staDT_IPJU","10","10","100","30",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("1");
            obj.set_text("입주(예정)일자");
            obj.set_cssclass("sta_WF_tablelabel");
            this.divData.addChild(obj.name, obj);

            obj = new Static("staBgDT_IPJU","staDT_IPJU:-1","10","150","30",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("2");
            obj.set_cssclass("sta_WF_tablebg");
            obj.set_text("");
            this.divData.addChild(obj.name, obj);

            obj = new Static("staDT_FIPJU","10","staDT_IPJU:-1","100","30",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("3");
            obj.set_text("입주기산일자");
            obj.set_cssclass("sta_WF_tablelabel");
            this.divData.addChild(obj.name, obj);

            obj = new Static("staBgDT_FIPJU","staDT_FIPJU:-1","staBgDT_IPJU:-1","150","30",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("4");
            obj.set_cssclass("sta_WF_tablebg");
            obj.set_text("");
            this.divData.addChild(obj.name, obj);

            obj = new Calendar("ctclDT_IPJU","staDT_IPJU:5","15","110","20",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("5");
            obj.set_dateformat("yyyy-MM-dd");
            obj.set_editformat("yyyyMMdd");
            obj.set_autoselect("true");
            obj.set_value("");
            this.divData.addChild(obj.name, obj);

            obj = new Calendar("ctclDT_FIPJU","staDT_FIPJU:5","ctclDT_IPJU:9","110","20",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("6");
            obj.set_dateformat("yyyy-MM-dd");
            obj.set_editformat("yyyyMMdd");
            obj.set_autoselect("true");
            obj.set_value("");
            this.divData.addChild(obj.name, obj);

            obj = new Button("btnOK","20%","staDT_FIPJU:20","60","27",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("7");
            obj.set_text("확인");
            this.divData.addChild(obj.name, obj);

            obj = new Button("btnCANCLE","btnOK:30","staDT_FIPJU:20","60","27",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("8");
            obj.set_text("취소");
            this.divData.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this
            obj = new Layout("default","",this._adjust_width,this._adjust_height,this,function(p){});
            this.addLayout(obj.name, obj);
            
            // BindItem Information
            obj = new BindItem("item0","divData.form.ctclDT_IPJU","value","dsList","DT_IPJU");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item1","divData.form.ctclDT_FIPJU","value","dsList","DT_IPJUPLAN");
            this.addChild(obj.name, obj);
            obj.bind();
            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script
        this.registerScript("DLB_DLGCONTRACTORSTATE_UPDATE.xfdl", function() {
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

        	this.dsList.setColumn(0, "CD_ACNTUNIT", this.getOwnerFrame().CD_ACNTUNIT);
        	var datas = JSON.parse(this.getOwnerFrame().GRID_DATA);

        	this.dsData.clearData();

        	// 다건의 동층호 정보를 JSON으로 받아 처리.
        	for(var i = 0; i < datas.length; i++)
        	{
        		var json = datas[i];
        		var nrow = this.dsData.addRow();
        		this.dsData.setColumn(nrow, "NO_DONG", json.NO_DONG);
        		this.dsData.setColumn(nrow, "NO_FLOOR", json.NO_FLOOR);
        		this.dsData.setColumn(nrow, "NO_HO", json.NO_HO);
        	}
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
        	this.dsUpdate = new Dataset();
        	this.dsUpdate.addColumn("CD_ACNTUNIT", "string");
        	this.dsUpdate.addColumn("TY_GUBUN", "string");
        	this.dsUpdate.addColumn("NO_CHASU", "string");
        	this.dsUpdate.addColumn("NO_DONG", "string");
        	this.dsUpdate.addColumn("NO_FLOOR", "string");
        	this.dsUpdate.addColumn("NO_HO", "string");
        	this.dsUpdate.addColumn("DT_IPJU", "string");
        	this.dsUpdate.addColumn("DT_IPJUPLAN", "string");
        	this.dsUpdate.addColumn("ID_UPDATE", "string");
        }

        /************************************************************************
         * 이벤트 설정
         ************************************************************************/
        this.fnSetEvent = function() {

        };
        /************************************************************************
         * Validate
         ************************************************************************/
        this.fnSaveValidate = function() {
        	var validate = true;
        	if (this.gfnIsNull(this.dsList.getColumn(0, "DT_IPJU"))) {
        		validate = false;
        		// Alert후 실행할 처리
        		this.fnVaidateCallback = function() {
        			this.divData.form.ctclDT_IPJU.setFocus();
        		}
        		this.gfnAlert("입주예정일자를 입력하세요.", "fnVaidateCallback");
        	}
        	else if (this.gfnIsNull(this.dsList.getColumn(0, "DT_IPJUPLAN"))) {
        		validate = false;
        		// Alert후 실행할 처리
        		this.fnVaidateCallback = function() {
        			this.divData.form.ctclDT_FIPJU.setFocus();
        		}
        		this.gfnAlert("입주기산일자를 입력하세요.", "fnVaidateCallback");
        	}
        	return validate;
        };

        /************************************************************************
         * 코드파인드 이벤트
         ************************************************************************/

        /************************************************************************
         * 콜백 이벤트
         ************************************************************************/
        this.fnCallback = function(svcID, errorCode, errorMsg)
        {
        	if (errorCode != 0) {
        		this.gfnAlert(errorMsg);
        		return;
        	}
        	if(svcID == "save"){
        		if (errorCode == 0) {

        			this.getParentContext().close(true);

        		} else {
        			this.gfnAlert(errorMsg);
        		}
        	}
        }


        /************************************************************************
         * 기타 이벤트
         ************************************************************************/

        this.btnOK_onclick = function(obj,e)
        {
        	if(!this.fnSaveValidate()) return;
        	this.fnSave();
        };

        this.btnCANCLE_onclick = function(obj,e)
        {
        	// 취소
        	this.getParentContext().close(false);
        };

        this.fnSave = function()
        {
        	this.dsUpdate.clearData();

        	// 다건의 동층호건을 동시에 update 처리.
        	for(var i = 0; i < this.dsData.rowcount; i++)
        	{
        		var nrow = this.dsUpdate.addRow();
        		this.dsUpdate.setColumn(nrow, "CD_ACNTUNIT", this.dsList.getColumn(0, "CD_ACNTUNIT").substr(0,6));
        		this.dsUpdate.setColumn(nrow, "TY_GUBUN", this.dsList.getColumn(0, "CD_ACNTUNIT").substr(6,1));
        		this.dsUpdate.setColumn(nrow, "NO_CHASU", this.dsList.getColumn(0, "CD_ACNTUNIT").substr(7,2));
        		this.dsUpdate.setColumn(nrow, "NO_DONG", this.dsData.getColumn(i, "NO_DONG"));
        		this.dsUpdate.setColumn(nrow, "NO_FLOOR", this.dsData.getColumn(i, "NO_FLOOR"));
        		this.dsUpdate.setColumn(nrow, "NO_HO", this.dsData.getColumn(i, "NO_HO"));
        		this.dsUpdate.setColumn(nrow, "DT_IPJU", this.dsList.getColumn(0, "DT_IPJU"));
        		this.dsUpdate.setColumn(nrow, "DT_IPJUPLAN", this.dsList.getColumn(0, "DT_IPJUPLAN"));
        		this.dsUpdate.setColumn(nrow, "ID_UPDATE", this.AuthClient.ID_USER);
        	}

        	if (this.dsUpdate.rowcount == 0) return;

        	var strSvcId    = "save";
        	var strSvcType  = "save";
        	var inProc		= "_dsProc";
        	var inData      = "update=dsUpdate";
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
        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.form_onload,this);
            this.addEventHandler("onclick",this.DAA_BASE_PERSCARD_DLG_onclick,this);
            this.divData.form.btnOK.addEventHandler("onclick",this.btnOK_onclick,this);
            this.divData.form.btnCANCLE.addEventHandler("onclick",this.btnCANCLE_onclick,this);
            this.dsList.addEventHandler("onvaluechanged",this.dsList_onvaluechanged,this);
        };
        this.loadIncludeScript("DLB_DLGCONTRACTORSTATE_UPDATE.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
