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
            obj._setContents("<ColumnInfo><Column id=\"TARGET\" type=\"STRING\" size=\"256\"/><Column id=\"SP\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"TARGET\">save</Col><Col id=\"SP\">DAAPR_DEDUCTION_DETAIL_EXECUTE</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsTY_SALARY", this);
            obj._setContents("<ColumnInfo><Column id=\"CODE\" type=\"STRING\" size=\"256\"/><Column id=\"VALUE\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"CODE\">S</Col><Col id=\"VALUE\">급여</Col></Row><Row><Col id=\"CODE\">B</Col><Col id=\"VALUE\">상여</Col></Row><Row><Col id=\"CODE\">X</Col><Col id=\"VALUE\">성과급</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsSN_SALARY", this);
            obj._setContents("<ColumnInfo><Column id=\"CODE\" type=\"STRING\" size=\"256\"/><Column id=\"VALUE\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"CODE\">1</Col><Col id=\"VALUE\">1</Col></Row><Row><Col id=\"CODE\">2</Col><Col id=\"VALUE\">2</Col></Row><Row><Col id=\"CODE\">3</Col><Col id=\"VALUE\">3</Col></Row><Row><Col id=\"CODE\">4</Col><Col id=\"VALUE\">4</Col></Row><Row><Col id=\"CODE\">5</Col><Col id=\"VALUE\">5</Col></Row></Rows>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
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

            obj = new Static("staTITLE01","0","10","100.00%","30",null,null,null,null,null,null,this);
            obj.set_taborder("14");
            obj.set_text("급여적용");
            obj.set_cssclass("sta_TITLE_Bg");
            obj.set_textAlign("left");
            this.addChild(obj.name, obj);

            obj = new Static("staCD_CORP","44","50","60","20",null,null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_text("법인");
            obj.set_cssclass("sta_WF_tablelabelE");
            this.addChild(obj.name, obj);

            obj = new Div("cfCD_CORP","90","50","200","20",null,null,null,null,null,null,this);
            obj.getSetter("CDTextWidth").set("70");
            obj.set_taborder("2");
            obj.set_url("cmm::cmmCodeFind.xfdl");
            this.addChild(obj.name, obj);

            obj = new Static("staYM_DEDUCTION","20","80","50","20",null,null,null,null,null,null,this);
            obj.set_taborder("14");
            obj.set_text("공제년월");
            obj.set_cssclass("sta_WF_tablelabelE");
            this.addChild(obj.name, obj);

            obj = new Div("ctclYM_DEDUCTION","90","80","105","20",null,null,null,null,null,null,this);
            obj.set_taborder("15");
            obj.set_url("cmm::cmmCalMM.xfdl");
            this.addChild(obj.name, obj);

            obj = new Static("staYM_SALARY","20","110","50","20",null,null,null,null,null,null,this);
            obj.set_taborder("8");
            obj.set_text("지급년월");
            obj.set_cssclass("sta_WF_tablelabelE");
            this.addChild(obj.name, obj);

            obj = new Div("ctclYM_SALARY","90","110","105","20",null,null,null,null,null,null,this);
            obj.set_taborder("9");
            obj.set_url("cmm::cmmCalMM.xfdl");
            this.addChild(obj.name, obj);

            obj = new Static("staAM_DEDUCTION","20","140","70","20",null,null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_text("지급구분");
            obj.set_cssclass("sta_WF_tablelabelE");
            this.addChild(obj.name, obj);

            obj = new Combo("cboTY_SALARY","90","141","100","20",null,null,null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_innerdataset("dsTY_SALARY");
            obj.set_datacolumn("VALUE");
            obj.set_codecolumn("CODE");
            obj.set_value("");
            obj.set_index("0");
            this.addChild(obj.name, obj);

            obj = new Combo("cboSN_SALARY","195","141","70","20",null,null,null,null,null,null,this);
            obj.set_taborder("3");
            obj.set_innerdataset("dsSN_SALARY");
            obj.set_datacolumn("VALUE");
            obj.set_codecolumn("CODE");
            obj.set_value("");
            obj.set_index("0");
            this.addChild(obj.name, obj);

            obj = new Static("staCD_SUBST","20","170","70","20",null,null,null,null,null,null,this);
            obj.set_taborder("10");
            obj.set_text("공제코드");
            obj.set_cssclass("sta_WF_tablelabelE");
            this.addChild(obj.name, obj);

            obj = new Div("cfCD_SUBST","90","170","200","20",null,null,null,null,null,null,this);
            obj.getSetter("CDTextWidth").set("70");
            obj.set_taborder("11");
            obj.set_url("cmm::cmmCodeFind.xfdl");
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
        this.registerScript("DAA_DEDUCTION_DLG.xfdl", function() {
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

        	// 연월 셋팅
        	var today = this.gfnGetDate().substring(0, 6);
        	this.ctclYM_DEDUCTION.form.TextBox.set_value(today);
        	this.ctclYM_SALARY.form.TextBox.set_value(today);

        	//법인 셋팅
        	this.cfCD_CORP.form.CDTextBox.set_value(this.AuthClient.CD_CORP);
        	this.cfCD_CORP.form.DSTextBox.set_value(this.AuthClient.DS_CORP);

        	this.cboTY_SALARY.set_index(0);
        	this.cboSN_SALARY.set_index(0);
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

        	this.dsSave.addColumn("CD_CORP", "string");
        	this.dsSave.addColumn("YM_DEDUCTION", "string");
        	this.dsSave.addColumn("YM_SALARY", "string");
        	this.dsSave.addColumn("TY_SALARY", "string");
        	this.dsSave.addColumn("SN_SALARY", "int");
        	this.dsSave.addColumn("CD_SUBST", "string");
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
        	this.cfCD_SUBST.CodeFindName = "DAX_CFALLOWSUBST_CODE";
        	this.cfCD_SUBST.BeforeUserDataSetParam = "fnBeforeUserDataSetParam";
        	/*this.cfCD_POSITION.AfterCDTextChanged = "fnAfterCDTextChanged";	*/

        };


        // 확인
        this.btnOK_onclick = function(obj,e)
        {
        	if (!this.fnDataValidate()) return;

        	this.dsSave.clearData();

        	var nrow = this.dsSave.addRow();

        	this.dsSave.setColumn(nrow, "CD_CORP", this.cfCD_CORP.form.CDTextBox.value);
        	this.dsSave.setColumn(nrow, "YM_DEDUCTION", this.ctclYM_DEDUCTION.form.TextBox.value);
        	this.dsSave.setColumn(nrow, "YM_SALARY", this.ctclYM_SALARY.form.TextBox.value);
        	this.dsSave.setColumn(nrow, "TY_SALARY", this.cboTY_SALARY.value);
        	this.dsSave.setColumn(nrow, "SN_SALARY", this.cboSN_SALARY.value);
        	this.dsSave.setColumn(nrow, "CD_SUBST", this.cfCD_SUBST.form.CDTextBox.valuee);
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
         * 코드파인드 이벤트
         ************************************************************************/
         this.fnBeforeUserDataSetParam = function(id, dsUserParam, nrow) {
        	if (id == "cfCD_SUBST") {
        		/*dsUserParam.setColumn(nrow, "CD_PREFIX", "ED");*/
        	}

        	return true;
        }

        this.fnDataValidate = function(){
        	var msg = "은(는) 필수입력 입니다.";

        	var cdCorp = this.cfCD_CORP.form.CDTextBox.value;
        	var ymDeduction = this.ctclYM_DEDUCTION.form.TextBox.value;
        	var ymSalary = this.ctclYM_SALARY.form.TextBox.value;
        	var cdSubst = this.cfCD_SUBST.form.CDTextBox.value;

        	if(this.gfnIsNull(this.gfnTrim(cdCorp))){
        		this.gfnAlert("법인" + msg);
        		this.cfCD_CORP.form.CDTextBox.setFocus();
        		return false;
        	}

        	if(this.gfnIsNull(this.gfnTrim(ymDeduction))){
        		this.gfnAlert("공제년월" + msg);
        		this.ctclYM_DEDUCTION.form.TextBox.setFocus();
        		return false;
        	}

        	if(this.gfnIsNull(this.gfnTrim(ymSalary))){
        		this.gfnAlert("지급년월" + msg);
        		this.ctclYM_SALARY.form.TextBox.setFocus();
        		return false;
        	}

        	if(this.gfnIsNull(this.gfnTrim(cdSubst))){
        		this.gfnAlert("공제코드" + msg);
        		this.cfCD_SUBST.form.CDTextBox.setFocus();
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
        // 		var json = {};
        //
        // 		json.CD_CORP = this.cfCD_CORP.form.CDTextBox.value;
        // 		json.YM_DEDUCTION = this.ctclYM_DEDUCTION.form.TextBox.value;
        //
        // 		this.getParentContext().close(JSON.stringify(json));
        	}
        }

        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.form_onload,this);
            this.divBtns.form.btnOK.addEventHandler("onclick",this.btnOK_onclick,this);
            this.divBtns.form.btnCANCLE.addEventHandler("onclick",this.btnCANCLE_onclick,this);
            this.cboTY_SALARY.addEventHandler("onitemchanged",this.fnSearchInit,this);
            this.cboSN_SALARY.addEventHandler("onitemchanged",this.fnSearchInit,this);
        };
        this.loadIncludeScript("DAA_DEDUCTION_DLG.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
