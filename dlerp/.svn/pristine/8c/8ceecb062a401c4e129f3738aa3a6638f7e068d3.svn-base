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
            this.set_titletext("전표발행");
            this.getSetter("maxwidth").set("400");
            this.getSetter("maxheight").set("330");
            if (Form == this.constructor)
            {
                this._setFormPosition(350,280);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("dsList", this);
            obj._setContents("<ColumnInfo><Column id=\"TY_CHAIYONG\" type=\"STRING\" size=\"256\"/><Column id=\"DT_JIGUB\" type=\"STRING\" size=\"256\"/><Column id=\"CD_TRADE\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("_dsProc", this);
            obj._setContents("<ColumnInfo><Column id=\"TARGET\" type=\"STRING\" size=\"256\"/><Column id=\"SP\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"TARGET\">select</Col><Col id=\"SP\">DSBPR_AUTOSLIP_ISSUE_MAGAM_SELECT</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsTY_CHAIYONG", this);
            obj._setContents("<ColumnInfo><Column id=\"CD_CODE\" type=\"STRING\" size=\"256\"/><Column id=\"DS_CODE\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"CD_CODE\">%</Col><Col id=\"DS_CODE\">전체</Col></Row><Row><Col id=\"CD_CODE\">1</Col><Col id=\"DS_CODE\">상용직</Col></Row><Row><Col id=\"CD_CODE\">2</Col><Col id=\"DS_CODE\">일용직</Col></Row></Rows>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Static("staDT_SLIP","20","113","50","14",null,null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_text("회계일자");
            obj.set_cssclass("sta_WF_tablelabelE");
            this.addChild(obj.name, obj);

            obj = new Calendar("ctclDT_SLIP","staDT_SLIP:10","113","105","20",null,null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_dateformat("yyyy-MM-dd");
            obj.set_editformat("yyyyMMdd");
            obj.set_readonly("false");
            this.addChild(obj.name, obj);

            obj = new Button("btnOK","90","220","60","27",null,null,null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_text("확인");
            this.addChild(obj.name, obj);

            obj = new Button("btnCANCLE","btnOK:30","220","60","27",null,null,null,null,null,null,this);
            obj.set_taborder("3");
            obj.set_text("취소");
            this.addChild(obj.name, obj);

            obj = new Static("staDT_JIGUB","20","142","50","14",null,null,null,null,null,null,this);
            obj.set_taborder("4");
            obj.set_text("지급일자");
            obj.set_cssclass("sta_WF_tablelabelE");
            this.addChild(obj.name, obj);

            obj = new Calendar("ctclDT_JIGUB","staDT_JIGUB:10","142","105","20",null,null,null,null,null,null,this);
            obj.set_taborder("5");
            obj.set_dateformat("yyyy-MM-dd");
            obj.set_editformat("yyyyMMdd");
            obj.set_readonly("false");
            this.addChild(obj.name, obj);

            obj = new Static("staCD_ACCOUNTNO_SUJI","480","44","80","20",null,null,null,null,null,null,this);
            obj.set_taborder("6");
            obj.set_text("입출금계좌");
            obj.set_visible("false");
            obj.set_cssclass("sta_WF_tablelabelE");
            this.addChild(obj.name, obj);

            obj = new Div("ccfCD_ACCOUNTNO_SUJI","560","44","180","20",null,null,null,null,null,null,this);
            obj.getSetter("CDTextWidth").set("50");
            obj.set_taborder("7");
            obj.set_url("cmm::cmmCodeFind.xfdl");
            obj.set_text("");
            obj.set_visible("false");
            this.addChild(obj.name, obj);

            obj = new Static("staCD_CORP","20","24","50","14",null,null,null,null,null,null,this);
            obj.set_taborder("8");
            obj.set_text("소속법인");
            obj.set_cssclass("sta_WF_tablelabelE");
            this.addChild(obj.name, obj);

            obj = new Div("ccfCD_CORP","staCD_CORP:10","24","250","20",null,null,null,null,null,null,this);
            obj.getSetter("CDTextWidth").set("30");
            obj.set_taborder("9");
            obj.set_url("cmm::cmmCodeFind.xfdl");
            obj.set_text("");
            obj.getSetter("CodeFindName").set("DSX_CFCORP");
            obj.set_enable("false");
            this.addChild(obj.name, obj);

            obj = new Static("staCD_SITE","20","54","50","14",null,null,null,null,null,null,this);
            obj.set_taborder("10");
            obj.set_text("현장코드");
            obj.set_textAlign("center");
            obj.set_cssclass("sta_WF_tablelabelE");
            this.addChild(obj.name, obj);

            obj = new Div("ccfCD_SITE","staCD_SITE:10","54","250","20",null,null,null,null,null,null,this);
            obj.getSetter("CDTextWidth").set("80");
            obj.set_taborder("11");
            obj.set_url("cmm::cmmCodeFind.xfdl");
            obj.set_text("");
            obj.getSetter("CodeFindName").set("DSX_CFSITE");
            obj.set_enable("false");
            this.addChild(obj.name, obj);

            obj = new Static("staYM_WORK","20","84","50","14",null,null,null,null,null,null,this);
            obj.set_taborder("12");
            obj.set_text("작업년월");
            obj.set_cssclass("sta_WF_tablelabelE");
            this.addChild(obj.name, obj);

            obj = new Div("ctclYM_WORK","staYM_WORK:10","84","105","20",null,null,null,null,null,null,this);
            obj.set_taborder("13");
            obj.set_url("cmm::cmmCalMM.xfdl");
            obj.set_enable("false");
            this.addChild(obj.name, obj);

            obj = new Static("staTY_SALARY","20","172","50","20",null,null,null,null,null,null,this);
            obj.set_taborder("14");
            obj.set_text("구분");
            this.addChild(obj.name, obj);

            obj = new Combo("cboTY_CHAIYONG","80","172","105","20",null,null,null,null,null,null,this);
            obj.set_taborder("15");
            obj.set_datacolumn("DS_CODE");
            obj.set_codecolumn("CD_CODE");
            obj.set_innerdataset("dsTY_CHAIYONG");
            obj.set_value("");
            obj.set_index("0");
            this.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this
            obj = new Layout("default","",this._adjust_width,this._adjust_height,this,function(p){});
            this.addLayout(obj.name, obj);
            
            // BindItem Information
            obj = new BindItem("item0","ccfCD_ACCOUNTNO_SUJI.form.TextBox","value","dsSearch","CD_CORP");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item1","ccfCD_CORP.form.CDTextBox","value","dsSearch","CD_CORP");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item2","ccfCD_SITE.form.CDTextBox","value","dsSearch","CD_SITE");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item3","ctclYM_WORK.form.TextBox","value","dsSearch","YM_WORK");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item4","cboTY_CHAIYONG","value","dsSearch","TY_CHAIYONG");
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
        this.registerScript("DSB_MAGAMSLIP_DLG.xfdl", function() {
        this.objApp = this.gfnGetApplication();

        this.fv_DT_ACCOUNT = "";
        this.fv_CD_CORP = "";
        this.fv_DS_CORP = "";
        this.fv_CD_SITE = "";
        this.fv_DS_SITE = "";
        this.fv_YM_WORK = "";

        this.form_onload = function(obj,e)
        {
        	// -- 필수 -------------------//
        	this.gfnFormOnLoad(this);
        	this.gfnFormInfo(this);
        	// ---------------------------//

        	this.fnSetVariable();
        	this.fnSetEvent();
        	this.fnSetParameter();

        	this.fv_DT_ACCOUNT = this.getOwnerFrame().DT_ACCOUNT;
        	this.fv_CD_CORP = this.getOwnerFrame().CD_CORP;
        	this.fv_DS_CORP = this.getOwnerFrame().DS_CORP;
        	this.fv_CD_SITE = this.getOwnerFrame().CD_SITE;
        	this.fv_DS_SITE = this.getOwnerFrame().DS_SITE;
        	this.fv_YM_WORK = this.getOwnerFrame().YM_WORK;

        	this.ccfCD_CORP.form.CDTextBox.set_value(this.fv_CD_CORP);
        	this.ccfCD_CORP.form.DSTextBox.set_value(this.fv_DS_CORP);
        	this.ccfCD_SITE.form.CDTextBox.set_value(this.fv_CD_SITE);
        	this.ccfCD_SITE.form.DSTextBox.set_value(this.fv_DS_SITE);
        	this.ctclYM_WORK.form.TextBox.set_value(this.fv_YM_WORK);
        	this.ctclDT_SLIP.set_value(this.fv_DT_ACCOUNT);	 //회계일자 셋팅

        	this.cboTY_CHAIYONG.set_index(0);
        };



        // 확인
        this.btnOK_onclick = function(obj,e)
        {
        	if(!this.fnSaveValidate()) return;
        	var json = {};

        	json.CD_CORP = this.ccfCD_CORP.form.CDTextBox.value;
        	json.CD_SITE = this.ccfCD_SITE.form.CDTextBox.value;
        	json.YM_WORK = this.ctclYM_WORK.form.TextBox.value;
        	json.DT_ACCOUNT = this.ctclDT_SLIP.value;
        	json.DT_JIGUB = this.ctclDT_JIGUB.value;
        	json.TY_CHAIYONG = this.cboTY_CHAIYONG.value;

        	trace("전표발행>>", JSON.stringify(json));

        	this.getParentContext().close(JSON.stringify(json));
        };

        this.fnSaveValidate = function(){
        	var strMsg = "";
        	if(this.gfnIsNull(this.ccfCD_CORP.form.CDTextBox.value)) {
        		strMsg += "소속법인은 반드시 입력 하셔야 합니다.\n";
        	}
        	if(this.gfnIsNull(this.ccfCD_SITE.form.CDTextBox.value)) {
        		strMsg += "현장코드는 반드시 입력 하셔야 합니다.\n";
        	}
        	if(this.gfnIsNull(this.ctclYM_WORK.form.TextBox.value)) {
        		strMsg += "작업년월은 반드시 입력 하셔야 합니다.\n";
        	}
        	if(this.gfnIsNull(this.ctclDT_SLIP.value)) {
        		strMsg += "회계일자는 반드시 입력 하셔야 합니다.\n";
        	}
        	if(this.gfnIsNull(this.cboTY_CHAIYONG.value)) {
        		strMsg += "구분은 반드시 입력 하셔야 합니다.\n";
        	}
        	if(this.gfnIsNull(this.ctclDT_JIGUB.value)) {
        		strMsg += "지급일자는 반드시 입력 하셔야 합니다.\n";
        	}
        	if(strMsg.length > 0) {
        		this.gfnAlert(strMsg);
        		return false;
        	}
        	return true;
        };

        this.btnCANCLE_onclick = function(obj,e){
        	// 취소
        	this.getParentContext().close(false);
        };

        /************************************************************************
         * 변수 선언
         ************************************************************************/
        this.fnSetVariable = function() {
        	//this.ccfCD_ACCOUNTNO_SUJI = this.divSearch.form.ccfCD_ACCOUNTNO_SUJI;
        };

        /************************************************************************
         * 파라미터 설정
         ************************************************************************/
        this.fnSetParameter = function() {

        }

        /************************************************************************
         * 이벤트 설정
         ************************************************************************/
         // 코드파인더
        this.fnSetEvent = function() {
        	//this.ccfCD_ACCOUNTNO_SUJI.CodeFindName = "DFX_CFACCOUNTNO_SUJI";
        	//this.ccfCD_ACCOUNTNO_SUJI.BeforeUserDataSetParam = "fnBeforeUserDataSetParam";
        	//this.ccfCD_ACCOUNTNO_SUJI.AfterCDTextChanged = "fnAfterCDTextChanged";
        };

        /************************************************************************
         * 코드파인드 이벤트
         ************************************************************************/
         this.fnBeforeUserDataSetParam = function(id, dsUserParam, nrow) {
        	if(id == "ccfCD_ACCOUNTNO_SUJI") {
        		dsUserParam.setColumn(nrow, "CD_CORP", this.getOwnerFrame().CD_CORP);
        	}

        	return true;
        }


        var ty_gubun;
        var cd_bank;
        var nm_opener;
        this.fnAfterCDTextChanged = function(id, codeFindData) {
        	var arr = codeFindData;
        	trace(arr[0]["TY_GUBUN"]);
        	ty_gubun = arr[0]["TY_GUBUN"];
        	cd_bank = arr[0]["CD_MANAGEBANK"];
        	nm_opener = arr[0]["NM_OPENER"];
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
        	if (svcID == "select") {
        		if(this.dsList.rowcount > 0 ){
        		//
        		}
        	}
        }

        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.form_onload,this);
            this.btnOK.addEventHandler("onclick",this.btnOK_onclick,this);
            this.btnCANCLE.addEventHandler("onclick",this.btnCANCLE_onclick,this);
            this.cboTY_CHAIYONG.addEventHandler("onitemchanged",this.fnSearchInit,this);
        };
        this.loadIncludeScript("DSB_MAGAMSLIP_DLG.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
