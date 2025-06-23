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
            this.getSetter("maxwidth").set("450");
            this.getSetter("maxheight").set("180");
            if (Form == this.constructor)
            {
                this._setFormPosition(450,180);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("dsList", this);
            obj._setContents("<ColumnInfo><Column id=\"CD_ACNTUNIT\" type=\"STRING\" size=\"256\"/><Column id=\"DS_ACNTUNIT\" type=\"STRING\" size=\"256\"/><Column id=\"NO_DONG\" type=\"STRING\" size=\"256\"/><Column id=\"NO_FLOOR\" type=\"STRING\" size=\"256\"/><Column id=\"NO_HO\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row/></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("_dsProc", this);
            obj._setContents("<ColumnInfo><Column id=\"TARGET\" type=\"STRING\" size=\"256\"/><Column id=\"SP\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows/>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Div("divData","0","0",null,null,"0","0",null,null,null,null,this);
            obj.set_taborder("0");
            this.addChild(obj.name, obj);

            obj = new Static("staCD_ACNTUNIT","10","10","100","30",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("1");
            obj.set_text("사업지코드");
            obj.set_textAlign("right");
            obj.set_cssclass("sta_WF_tablelabelE");
            this.divData.addChild(obj.name, obj);

            obj = new Static("staBgCD_ACNTUNIT","staCD_ACNTUNIT:-1","10","300","30",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("2");
            obj.set_cssclass("sta_WF_tablebg");
            obj.set_text("");
            this.divData.addChild(obj.name, obj);

            obj = new Static("staNO_DONG","10","staCD_ACNTUNIT:-1","100","30",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("3");
            obj.set_text("동층호");
            obj.set_textAlign("right");
            obj.set_cssclass("sta_WF_tablelabelE");
            this.divData.addChild(obj.name, obj);

            obj = new Static("staBgNO_DONG","staNO_DONG:-1","staBgCD_ACNTUNIT:-1","300","30",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("4");
            obj.set_cssclass("sta_WF_tablebg");
            obj.set_text("");
            this.divData.addChild(obj.name, obj);

            obj = new Div("ccfCD_ACNTUNIT","staCD_ACNTUNIT:5","15","200","20",null,null,null,null,null,null,this.divData.form);
            obj.getSetter("CodeFindName").set("DRX_CFACNTUNIT");
            obj.getSetter("CDTextWidth").set("70");
            obj.set_taborder("1");
            obj.set_url("cmm::cmmCodeFind.xfdl");
            this.divData.addChild(obj.name, obj);

            obj = new Edit("ctxtNO_DONG","staNO_DONG:5","ccfCD_ACNTUNIT:9","80","20",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("4");
            obj.set_value("");
            obj.set_readonly("false");
            obj.set_maxlength("4");
            this.divData.addChild(obj.name, obj);

            obj = new Edit("ctxtNO_FLOOR","ctxtNO_DONG:5","ccfCD_ACNTUNIT:9","60","20",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("5");
            obj.set_value("");
            obj.set_readonly("false");
            obj.set_maxlength("2");
            this.divData.addChild(obj.name, obj);

            obj = new Edit("ctxtNO_HO","ctxtNO_FLOOR:5","ccfCD_ACNTUNIT:9","80","20",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("6");
            obj.set_value("");
            obj.set_readonly("false");
            obj.set_maxlength("3");
            this.divData.addChild(obj.name, obj);

            obj = new Button("cbtnNO_DONGHO","ctxtNO_HO:5","ccfCD_ACNTUNIT:9","25","20",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("7");
            obj.set_cssclass("btn_CF_Search");
            this.divData.addChild(obj.name, obj);

            obj = new Button("btnOK","30%","staBgNO_DONG:20","60","27",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("8");
            obj.set_text("확인");
            this.divData.addChild(obj.name, obj);

            obj = new Button("btnCANCLE","btnOK:30","staBgNO_DONG:20","60","27",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("9");
            obj.set_text("취소");
            this.divData.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this
            obj = new Layout("default","",this._adjust_width,this._adjust_height,this,function(p){});
            this.addLayout(obj.name, obj);
            
            // BindItem Information

            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {
            this._addPreloadList("fdl","cmm::cmmCodeFind.xfdl");
        };
        
        // User Script
        this.registerScript("DLB_TRANSBUNYANGDLG.xfdl", function() {
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
        	this.dsList.setColumn(0, "DS_ACNTUNIT", this.getOwnerFrame().DS_ACNTUNIT);

        };


        /************************************************************************
         * 변수 선언
         ************************************************************************/
        this.fnSetVariable = function() {
        	this.ccfCD_ACNTUNIT = this.divData.form.ccfCD_ACNTUNIT;
        };

        /************************************************************************
         * 파라미터 설정
         ************************************************************************/
        this.fnSetParameter = function() {

        }

        /************************************************************************
         * 이벤트 설정
         ************************************************************************/
        this.fnSetEvent = function() {
        	this.ccfCD_ACNTUNIT.BeforeUserDataSetParam = "fnBeforeUserDataSetParam";
        	this.ccfCD_ACNTUNIT.AfterCDTextChanged = "fnAfterCDTextChanged";
        };
        /************************************************************************
         * Validate
         ************************************************************************/
        this.fnSaveValidate = function() {
        	var validate = true;
        	if (this.gfnIsNull(this.dsList.getColumn(0, "CD_ACNTUNIT"))) {
        		validate = false;
        		// Alert후 실행할 처리
        		this.fnVaidateCallback = function() {
        			this.divData.form.ccfCD_ACNTUNIT.form.CDTextBox.setFocus();
        		}
        		this.gfnAlert("사업지코드를 입력하세요.", "fnVaidateCallback");
        	}
        	else if (this.gfnIsNull(this.dsList.getColumn(0, "NO_DONG"))
        		  || this.gfnIsNull(this.dsList.getColumn(0, "NO_FLOOR"))
        		  || this.gfnIsNull(this.dsList.getColumn(0, "NO_HO")))
        	{
        		validate = false;
        		this.gfnAlert("동층호를 입력하세요.", "fnVaidateCallback");
        	}
        	return validate;
        };

        /************************************************************************
         * 코드파인드 이벤트
         ************************************************************************/
        this.fnBeforeUserDataSetParam = function(id, dsUserParam, nrow) {
        	if (id == "ccfCD_ACNTUNIT") {
        		dsUserParam.setColumn(nrow, "CD_DEPT", this.AuthClient.CD_DEPT);
        		dsUserParam.setColumn(nrow, "ID_USER", this.AuthClient.ID_USER);
        		dsUserParam.setColumn(nrow, "ID_GROUP", this.FormInfo.ID_GROUP);
        		dsUserParam.setColumn(nrow, "GR_SEARCH", this.FormInfo.GR_SEARCH);
        	}
        	return true;
        }

        this.fnAfterCDTextChanged = function(id, codeFindData) {
        	if (id == "ccfCD_ACNTUNIT") {
        		this.dsList.setColumn(0, "NO_DONG", "");
        		this.dsList.setColumn(0, "NO_FLOOR", "");
        		this.dsList.setColumn(0, "NO_HO", "");
        	}
        	return true;
        }

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
        	this.getParentContext().close(true);
        };

        this.btnCANCLE_onclick = function(obj,e)
        {
        	// 취소
        	this.getParentContext().close(false);
        };


        this.divData_cbtnNO_DONGHO_onclick = function(obj,e)
        {
        	if(this.gfnIsNull(this.dsList.getColumn(0, "CD_ACNTUNIT")))
        	{
        		this.gfnAlert("사업지코드 (을)를 먼저 입력 하셔야 합니다.");
        		return false;
        	}

        	var param = {};

        	param.CD_ACNTUNIT = this.dsList.getColumn(0, "CD_ACNTUNIT");

        	this.gfnFormOpen(this.FormInfo.CD_MODULE, "DLB_DONGHOBATCHMIBUN", "fnDonghoPopupCallback", param);
        };


        this.fnDonghoPopupCallback = function(svcID, val) {
        	if (!val) return;

        	var json = JSON.parse(val);
        	if (json.DONG.length > 0) {
        		this.dsList.setColumn(0, "NO_DONG", json.DONG);
        		this.dsList.setColumn(0, "NO_FLOOR", json.FLOOR);
        		this.dsList.setColumn(0, "NO_HO", json.HO);
        	}
        	else {
        		this.dsList.setColumn(0, "NO_DONG", "");
        		this.dsList.setColumn(0, "NO_FLOOR", "");
        		this.dsList.setColumn(0, "NO_HO", "");
        	}
        }

        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.form_onload,this);
            this.addEventHandler("onclick",this.DAA_BASE_PERSCARD_DLG_onclick,this);
            this.divData.form.cbtnNO_DONGHO.addEventHandler("onclick",this.divData_cbtnNO_DONGHO_onclick,this);
            this.divData.form.btnOK.addEventHandler("onclick",this.btnOK_onclick,this);
            this.divData.form.btnCANCLE.addEventHandler("onclick",this.btnCANCLE_onclick,this);
            this.dsList.addEventHandler("onvaluechanged",this.dsList_onvaluechanged,this);
        };
        this.loadIncludeScript("DLB_TRANSBUNYANGDLG.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
