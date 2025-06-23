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
            this.getSetter("maxwidth").set("450");
            this.getSetter("maxheight").set("400");
            if (Form == this.constructor)
            {
                this._setFormPosition(400,400);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("dsList", this);
            obj._setContents("<ColumnInfo><Column id=\"STATE\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row/></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("_dsProc", this);
            obj._setContents("<ColumnInfo><Column id=\"TARGET\" type=\"STRING\" size=\"256\"/><Column id=\"SP\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"TARGET\">save</Col><Col id=\"SP\">DAAPR_DED_MASTER_CREATE</Col></Row></Rows>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Static("staCD_CORP","44","80","60","20",null,null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_text("법인");
            obj.set_cssclass("sta_WF_tablelabelE");
            this.addChild(obj.name, obj);

            obj = new Static("staAM_DEDUCTION","20","140","70","20",null,null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_text("공제금액");
            obj.set_cssclass("sta_WF_tablelabelE");
            this.addChild(obj.name, obj);

            obj = new Div("divBtns","110","230","200","100",null,null,null,null,null,null,this);
            this.addChild(obj.name, obj);

            obj = new Button("btnOK","30","20","60","27",null,null,null,null,null,null,this.divBtns.form);
            obj.set_taborder("12");
            obj.set_text("확인");
            this.divBtns.addChild(obj.name, obj);

            obj = new Button("btnCANCLE","btnOK:30","20","60","27",null,null,null,null,null,null,this.divBtns.form);
            obj.set_taborder("13");
            obj.set_text("취소");
            this.divBtns.addChild(obj.name, obj);

            obj = new Div("cfCD_CORP","90","80","200","20",null,null,null,null,null,null,this);
            obj.getSetter("CDTextWidth").set("70");
            obj.set_taborder("2");
            obj.set_url("cmm::cmmCodeFind.xfdl");
            this.addChild(obj.name, obj);

            obj = new Edit("txtAM_DEDUCTION","90","140","140","20",null,null,null,null,null,null,this);
            obj.set_taborder("10");
            obj.set_readonly("false");
            this.addChild(obj.name, obj);

            obj = new Static("staTITLE01","0","10","100.00%","30",null,null,null,null,null,null,this);
            obj.set_taborder("14");
            obj.set_text("공제정보생성");
            obj.set_cssclass("sta_TITLE_Bg");
            obj.set_textAlign("left");
            this.addChild(obj.name, obj);

            obj = new Static("staCD_POSITION","44","110","60","20",null,null,null,null,null,null,this);
            obj.set_taborder("14");
            obj.set_text("직위");
            obj.set_cssclass("sta_WF_tablelabelE");
            this.addChild(obj.name, obj);

            obj = new Div("cfCD_POSITION","90","110","200","20",null,null,null,null,null,null,this);
            obj.getSetter("CDTextWidth").set("70");
            obj.set_taborder("15");
            obj.set_url("cmm::cmmCodeFind.xfdl");
            this.addChild(obj.name, obj);

            obj = new Static("staYM_DEDUCTION","20","50","50","20",null,null,null,null,null,null,this);
            obj.set_taborder("14");
            obj.set_text("공제년월");
            obj.set_cssclass("sta_WF_tablelabelE");
            this.addChild(obj.name, obj);

            obj = new Div("ctclYM_DEDUCTION","90","50","105","20",null,null,null,null,null,null,this);
            obj.set_taborder("15");
            obj.set_url("cmm::cmmCalMM.xfdl");
            this.addChild(obj.name, obj);
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
            this._addPreloadList("fdl","cmm::cmmCalMM.xfdl");
        };
        
        // User Script
        this.registerScript("DAA_DEDUCTION_MASTER_CREATE.xfdl", function() {
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

        	// 발급일자 셋팅
        	var today = this.gfnGetDate().substring(0, 6);
        	this.ctclYM_DEDUCTION.form.TextBox.set_value(today);

        	//법인 셋팅
        	this.cfCD_CORP.form.CDTextBox.set_value(this.AuthClient.CD_CORP);
        	this.cfCD_CORP.form.DSTextBox.set_value(this.AuthClient.DS_CORP);
        };

        // 확인
        this.btnOK_onclick = function(obj,e)
        {
        	if (!this.fnDataValidate()) return;

        	this.dsSave.clearData();

        	var nrow = this.dsSave.addRow();

        	this.dsSave.setColumn(nrow, "YM_DEDUCTION", this.ctclYM_DEDUCTION.form.TextBox.value);
        	this.dsSave.setColumn(nrow, "CD_CORP", this.cfCD_CORP.form.CDTextBox.value);
        	this.dsSave.setColumn(nrow, "CD_POSITION", this.cfCD_POSITION.form.CDTextBox.value);
        	this.dsSave.setColumn(nrow, "AM_DEDUCTION", this.txtAM_DEDUCTION.value);
        	this.dsSave.setColumn(nrow, "ID_INSERT", this.AuthClient.ID_USER);

        	if (this.dsSave.rowcount == 0) return;

        	var strSvcId    = "save";
        	var strSvcType  = "save";
        	var inProc		= "_dsProc";
        	var inData      = "save=dsSave";
        	var outData     = "dsOutput=save";
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
        	// 취소
        	this.getParentContext().close(false);
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
        	this.dsSave = new Dataset();

        	this.dsSave.addColumn("YM_DEDUCTION", "string");
        	this.dsSave.addColumn("CD_CORP", "string");
        	this.dsSave.addColumn("CD_POSITION", "string");
        	this.dsSave.addColumn("AM_DEDUCTION", "int");
        	this.dsSave.addColumn("ID_INSERT", "string");
        }

        /************************************************************************
         * 이벤트 설정
         ************************************************************************/
         // 코드파인더
        this.fnSetEvent = function() {
            //소속법인
        	this.cfCD_CORP.CodeFindName = "DAX_CFCORP";
        	this.cfCD_CORP.BeforeUserDataSetParam = "fnBeforeUserDataSetParam";
        	/*this.cfCD_CORP.AfterCDTextChanged = "fnAfterCDTextChanged";*/

        	//직위코드
        	this.cfCD_POSITION.CodeFindName = "DAX_CFCOMMONCODE";
        	this.cfCD_POSITION.BeforeUserDataSetParam = "fnBeforeUserDataSetParam";
        	/*this.cfCD_POSITION.AfterCDTextChanged = "fnAfterCDTextChanged";	*/

        };

        /************************************************************************
         * 코드파인드 이벤트
         ************************************************************************/
         this.fnBeforeUserDataSetParam = function(id, dsUserParam, nrow) {
        	if (id == "cfCD_POSITION") {
        		dsUserParam.setColumn(nrow, "CD_PREFIX", "ED");
        	}

        	return true;
        }

        this.fnDataValidate = function(){
        	var msg = "은(는) 필수입력 입니다.";

        	var ymDeduction = this.ctclYM_DEDUCTION.form.TextBox.value;
        	var cdCorp = this.cfCD_CORP.form.CDTextBox.value;
        	var cdPosition = this.cfCD_POSITION.form.CDTextBox.value;
        	var amDeduction = this.txtAM_DEDUCTION.value;

        	if(this.gfnIsNull(this.gfnTrim(ymDeduction))){
        		this.gfnAlert("공제년월" + msg);
        		this.ctclYM_DEDUCTION.form.TextBox.setFocus();
        		return false;
        	}

        	if(this.gfnIsNull(this.gfnTrim(cdCorp))){
        		this.gfnAlert("법인" + msg);
        		this.cfCD_CORP.form.CDTextBox.setFocus();
        		return false;
        	}

        	if(this.gfnIsNull(this.gfnTrim(cdPosition))){
        		this.gfnAlert("직위" + msg);
        		this.cfCD_POSITION.form.CDTextBox.setFocus();
        		return false;
        	}

        	if(this.gfnIsNull(this.gfnTrim(amDeduction))){
        		this.gfnAlert("공제금액" + msg);
        		this.txtAM_DEDUCTION.setFocus();
        		return false;
        	}

        	return true;
        }

        /************************************************************************
         * 콜백 이벤트
         ************************************************************************/
        this.fnCallback = function(svcID, errorCode, errorMsg)
        {
        	if (svcID == "save") {
        		var json = {};

        		json.CD_CORP = this.cfCD_CORP.form.CDTextBox.value;
        		json.YM_DEDUCTION = this.ctclYM_DEDUCTION.form.TextBox.value;

        		this.getParentContext().close(JSON.stringify(json));
        	}
        }

        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.form_onload,this);
            this.divBtns.form.btnOK.addEventHandler("onclick",this.btnOK_onclick,this);
            this.divBtns.form.btnCANCLE.addEventHandler("onclick",this.btnCANCLE_onclick,this);
        };
        this.loadIncludeScript("DAA_DEDUCTION_MASTER_CREATE.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
