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
            this.set_titletext("전표조회");
            this.getSetter("maxwidth").set("380");
            this.getSetter("maxheight").set("420");
            if (Form == this.constructor)
            {
                this._setFormPosition(380,340);
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
            obj = new Button("btnOK","90",null,"60","27",null,"13",null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_text("확인");
            this.addChild(obj.name, obj);

            obj = new Button("btnCANCLE","btnOK:30",null,"60","27",null,"13",null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_text("취소");
            this.addChild(obj.name, obj);

            obj = new Static("staCD_CORP","20","24","50","14",null,null,null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_text("소속법인");
            obj.set_textDecoration("underline");
            this.addChild(obj.name, obj);

            obj = new Div("ccfCD_CORP","staCD_CORP:10","24","250","20",null,null,null,null,null,null,this);
            obj.getSetter("CDTextWidth").set("30");
            obj.set_taborder("3");
            obj.set_url("cmm::cmmCodeFind.xfdl");
            obj.set_text("");
            obj.getSetter("CodeFindName").set("DSX_CFCORP");
            obj.set_enable("false");
            this.addChild(obj.name, obj);

            obj = new Static("staCD_SITE","20","54","50","14",null,null,null,null,null,null,this);
            obj.set_taborder("4");
            obj.set_text("현장코드");
            obj.set_textAlign("center");
            obj.set_textDecoration("underline");
            this.addChild(obj.name, obj);

            obj = new Div("ccfCD_SITE","staCD_SITE:10","54","250","20",null,null,null,null,null,null,this);
            obj.getSetter("CDTextWidth").set("80");
            obj.set_taborder("5");
            obj.set_url("cmm::cmmCodeFind.xfdl");
            obj.set_text("");
            obj.getSetter("CodeFindName").set("DSX_CFSITE");
            obj.set_enable("false");
            this.addChild(obj.name, obj);

            obj = new Static("staYM_WORK","20","84","50","14",null,null,null,null,null,null,this);
            obj.set_taborder("6");
            obj.set_text("작업년월");
            obj.set_textDecoration("underline");
            this.addChild(obj.name, obj);

            obj = new Div("ctclYM_WORK","staYM_WORK:10","84","105","20",null,null,null,null,null,null,this);
            obj.set_taborder("7");
            obj.set_url("cmm::cmmCalMM.xfdl");
            obj.set_enable("false");
            this.addChild(obj.name, obj);

            obj = new Div("divData","0","ctclYM_WORK:10",null,null,"0","btnCANCLE:4",null,null,null,null,this);
            obj.set_taborder("8");
            obj.set_cssclass("div_DATA_Bg");
            this.addChild(obj.name, obj);

            obj = new Grid("objGrid","0","0",null,null,"0","0",null,null,null,null,this.divData.form);
            obj.set_taborder("0");
            obj._setContents("");
            this.divData.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this
            obj = new Layout("default","",this._adjust_width,this._adjust_height,this,function(p){});
            this.addLayout(obj.name, obj);
            
            // BindItem Information
            obj = new BindItem("item1","ccfCD_CORP.form.CDTextBox","value","dsSearch","CD_CORP");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item2","ccfCD_SITE.form.CDTextBox","value","dsSearch","CD_SITE");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item3","ctclYM_WORK.form.TextBox","value","dsSearch","YM_WORK");
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
        this.registerScript("DSB_MAGAMSLIP_INQ_DLG.xfdl", function() {
        this.objApp = this.gfnGetApplication();

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

        	this.FormBtns.Select.click();
        };



        // 확인
        this.btnOK_onclick = function(obj,e){
        	if(!this.fnDataValid()) return;

        	this.fnSelectSlip();
        };

        this.fnDataValid = function(){
        	if(!this.gfnGridIsRow(this.dxGrid)) return false;

        	if(this.gfnIsNull(this.ccfCD_CORP.form.CDTextBox.value)) {
        		this.gfnAlert("소속법인은 반드시 입력 하셔야 합니다");
        		return false;
        	}
        	if(this.gfnIsNull(this.ccfCD_SITE.form.CDTextBox.value)) {
        		this.gfnAlert("현장코드는 반드시 입력 하셔야 합니다.");
        		return false;
        	}
        	if(this.gfnIsNull(this.ctclYM_WORK.form.TextBox.value)) {
        		this.gfnAlert("작업년월은 반드시 입력 하셔야 합니다.");
        		return false;
        	}

        	if(this.gfnIsNull(this.dsList.getColumn(this.dsList.rowposition, "CD_TRADE"))){
        		this.gfnAlert("전표번호은 반드시 입력 하셔야 합니다.");
        		return false;
        	}

        	return true;
        }

        this.fnSelectSlip = function(){
        	var param = {};

        	param.CD_TRADE = this.dsList.getColumn(this.dsList.rowposition, "CD_TRADE");
        	param.IUD_FLAG = "S";

        	this.gfnFormOpen("DHA", "DHA_ISSUESLIP", "", param);

        }

        this.btnCANCLE_onclick = function(obj,e){
        	// 취소
        	this.getParentContext().close(false);
        };

        /************************************************************************
         * 변수 선언
         ************************************************************************/
        this.fnSetVariable = function() {
        	this.dxGrid = this.divData.form.objGrid;
        };

        /************************************************************************
         * 파라미터 설정
         ************************************************************************/
        this.fnSetParameter = function() {
        	this.dsSelect = new Dataset();
        	this.dsSelect.addColumn("CD_CORP", "string");
        	this.dsSelect.addColumn("CD_SITE", "string");
        	this.dsSelect.addColumn("YM_WORK", "string");
        }

        this.fnSelect = function() {
        	this.gfnGridBeforeSelect(this.dxGrid);

        	var sCD_CORP = this.ccfCD_CORP.form.CDTextBox.value;
        	var sCD_SITE = this.ccfCD_SITE.form.CDTextBox.value;
        	var sYM_WORK = this.ctclYM_WORK.form.TextBox.value;

        	if(this.gfnIsNull(sCD_CORP)) return;
        	if(this.gfnIsNull(sCD_SITE)) return;
        	if(this.gfnIsNull(sYM_WORK)) return;

        	this.dsSelect.clearData();
        	this.dsSelect.addRow();

        	this.dsSelect.setColumn(0, "CD_CORP", sCD_CORP);
        	this.dsSelect.setColumn(0, "CD_SITE", sCD_SITE);
        	this.dsSelect.setColumn(0, "YM_WORK", sYM_WORK);

        	var strSvcId    = "select";
        	var strSvcType  = "grid";
        	var inProc		= "_dsProc";
        	var inData      = "select=dsSelect";
        	var outData     = "dsList=select0";
        	var strArg      = "";
        	var callBackFnc = "fnCallback";

        	this.gfnTransaction( strSvcId ,
        						strSvcType ,
        						inProc,
        						inData ,
        						outData ,
        						strArg,
        						callBackFnc);
        };

        /************************************************************************
         * 이벤트 설정
         ************************************************************************/
         // 코드파인더
        this.fnSetEvent = function() {
        	this.gfnGridInit(this.dxGrid, this.dsList, "DS", "DSB_MAGAMSLIP_INQ_DLG");
        };

        /************************************************************************
         * 코드파인드 이벤트
         ************************************************************************/



        /************************************************************************
         * 콜백 이벤트
         ************************************************************************/
        this.fnCallback = function(svcID, errorCode, errorMsg)
        {
        	if (svcID == "select") {
        		if (errorCode != 0) {
        			this.gfnAlert(errorMsg);
        			return;
        		}else{
        			this.gfnGridAfterSelect(this.dxGrid);
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
        };
        this.loadIncludeScript("DSB_MAGAMSLIP_INQ_DLG.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
