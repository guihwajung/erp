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
            this.set_titletext("연차생성");
            this.getSetter("maxwidth").set("450");
            this.getSetter("maxheight").set("420");
            if (Form == this.constructor)
            {
                this._setFormPosition(400,400);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("dsList", this);
            obj._setContents("<ColumnInfo><Column id=\"STATE\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row/></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("_dsProc", this);
            obj._setContents("<ColumnInfo><Column id=\"TARGET\" type=\"STRING\" size=\"256\"/><Column id=\"SP\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"TARGET\">insert</Col><Col id=\"SP\">DACPR_YEARLYVACATION_INSERT</Col></Row><Row><Col id=\"TARGET\">insert1</Col><Col id=\"SP\">DACPR_MONTHLYVACATION_INSERT</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsJOB_TYPE", this);
            obj._setContents("<ColumnInfo><Column id=\"CODE\" type=\"STRING\" size=\"256\"/><Column id=\"VALUE\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"CODE\">1</Col><Col id=\"VALUE\">연차</Col></Row><Row><Col id=\"VALUE\">1년미만연차생성(매월)</Col><Col id=\"CODE\">2</Col></Row></Rows>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Static("staTITLE","0","0","100.00%","30",null,null,null,null,null,null,this);
            obj.set_taborder("8");
            obj.set_text("연차생성");
            obj.set_cssclass("sta_TITLE_Bg");
            obj.set_textAlign("center");
            this.addChild(obj.name, obj);

            obj = new Static("staJOB_TYPE","20","40","60","20",null,null,null,null,null,null,this);
            obj.set_taborder("10");
            obj.set_text("업무선택");
            this.addChild(obj.name, obj);

            obj = new Static("staID_SABUN","20","130","70","20",null,null,null,null,null,null,this);
            obj.set_taborder("11");
            obj.set_text("특정사번");
            this.addChild(obj.name, obj);

            obj = new Static("staQN_YEARLYBASE","20","staID_SABUN:10","70","20",null,null,null,null,null,null,this);
            obj.set_taborder("12");
            obj.set_text("기본년차");
            this.addChild(obj.name, obj);

            obj = new Edit("txtQN_YEARLYBASE","staQN_YEARLYBASE:0","staQN_YEARLYBASE:-20","140","20",null,null,null,null,null,null,this);
            obj.set_taborder("4");
            obj.set_readonly("false");
            this.addChild(obj.name, obj);

            obj = new Static("staQN_MONTHLY","20","staID_SABUN:10","70","20",null,null,null,null,null,null,this);
            obj.set_taborder("12");
            obj.set_text("일수");
            this.addChild(obj.name, obj);

            obj = new Edit("txtQN_MONTHLY","staQN_MONTHLY:0","staQN_MONTHLY:-20","140","20",null,null,null,null,null,null,this);
            obj.set_taborder("4");
            obj.set_readonly("false");
            this.addChild(obj.name, obj);

            obj = new Static("staQN_YEARLYSERVICE","20","190","50","20",null,null,null,null,null,null,this);
            obj.set_taborder("15");
            obj.set_text("근속년차");
            this.addChild(obj.name, obj);

            obj = new Edit("txtQN_YEARLYSERVICE","staQN_YEARLYSERVICE:20","staQN_YEARLYSERVICE:-20","140","20",null,null,null,null,null,null,this);
            obj.set_taborder("5");
            obj.set_readonly("false");
            this.addChild(obj.name, obj);

            obj = new Static("staYR_BASE","20","70","60","20",null,null,null,null,null,null,this);
            obj.set_taborder("14");
            obj.set_text("생성년도");
            obj.set_cssclass("sta_WF_tablelabelE");
            this.addChild(obj.name, obj);

            obj = new Static("staCD_CORP","20","100","60","20",null,null,null,null,null,null,this);
            obj.set_taborder("13");
            obj.set_text("법인");
            this.addChild(obj.name, obj);

            obj = new Div("cfCD_CORP","staCD_CORP:10","staCD_CORP:-20","200","20",null,null,null,null,null,null,this);
            obj.getSetter("CDTextWidth").set("70");
            obj.set_taborder("2");
            obj.set_url("cmm::cmmCodeFind.xfdl");
            this.addChild(obj.name, obj);

            obj = new Div("cfID_SABUN","staID_SABUN:0","staID_SABUN:-20","200","20",null,null,null,null,null,null,this);
            obj.getSetter("CDTextWidth").set("70");
            obj.set_taborder("3");
            obj.set_url("cmm::cmmCodeFind.xfdl");
            this.addChild(obj.name, obj);

            obj = new Radio("rdoJOB_TYPE","staJOB_TYPE:10","staJOB_TYPE:-20","220","20",null,null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_innerdataset("dsJOB_TYPE");
            obj.set_codecolumn("CODE");
            obj.set_datacolumn("VALUE");
            obj.set_direction("vertical");
            obj.set_fittocontents("width");
            obj.set_value("1");
            obj.set_index("0");
            this.addChild(obj.name, obj);

            obj = new Div("ctclYR_BASE","staYR_BASE:10","staYR_BASE:-19","80","20",null,null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_url("cmm::cmmCalYY.xfdl");
            obj.set_enableevent("true");
            obj.set_text("2019");
            this.addChild(obj.name, obj);

            obj = new Static("txtDlgGroupText1","20","230",null,"20","52",null,null,null,null,null,this);
            obj.set_taborder("6");
            obj.set_text("특정 사번이 입력되지 않으면 전직원을 대상으로 작업됩니다.");
            obj.set_background("#cfebeb");
            this.addChild(obj.name, obj);

            obj = new Static("txtDlgGroupText2","20","260",null,"20","55",null,null,null,null,null,this);
            obj.set_taborder("7");
            obj.set_text("기본연차와 근속연차를 입력하면 입력된 연차로 생성됩니다.");
            obj.set_background("#cfebeb");
            this.addChild(obj.name, obj);

            obj = new Div("divBtns","110","295","200","60",null,null,null,null,null,null,this);
            obj.set_taborder("9");
            this.addChild(obj.name, obj);

            obj = new Button("btnOK","20","10","60","27",null,null,null,null,null,null,this.divBtns.form);
            obj.set_taborder("12");
            obj.set_text("확인");
            this.divBtns.addChild(obj.name, obj);

            obj = new Button("btnCANCLE","btnOK:30","10","60","27",null,null,null,null,null,null,this.divBtns.form);
            obj.set_taborder("13");
            obj.set_text("취소");
            this.divBtns.addChild(obj.name, obj);

            obj = new Calendar("ctclDT_MONVACA","90","71","115","20",null,null,null,null,null,null,this);
            obj.set_taborder("16");
            this.addChild(obj.name, obj);

            obj = new Edit("txtID_PERSON","240","190","140","20",null,null,null,null,null,null,this);
            obj.set_taborder("19");
            obj.set_readonly("false");
            obj.set_visible("false");
            this.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this
            obj = new Layout("default","",this._adjust_width,this._adjust_height,this,function(p){});
            this.addLayout(obj.name, obj);
            
            // BindItem Information
            obj = new BindItem("item0","txtQN_YEARLYBASE","value","dsList","STATE");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item1","ctclYR_BASE.form.TextBox","value","dsSearch","YR_BASE");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item2","ctclDT_MONVACA","value","dsSearch","DT_FROM");
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
        this.registerScript("DAC_CREATEVACATIONDLG.xfdl", function() {
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

        	//업무선택
        	var setItems = this.getOwnerFrame().setItems;
        	if (setItems == "Year") {
        		this.rdoJOB_TYPE.set_index(0);
        		this.rdoJOB_TYPE.set_enable(false);
        		this.ctclYR_BASE.set_visible(true);
        		this.ctclDT_MONVACA.set_visible(false);
        		this.staQN_MONTHLY.set_visible(false);
        		this.txtQN_MONTHLY.set_visible(false);
        	} else {
        		this.rdoJOB_TYPE.set_index(1);
        		this.rdoJOB_TYPE.set_enable(false);
        		this.staYR_BASE.set_text("생성일자");
        		this.ctclYR_BASE.set_visible(false);
        		this.ctclDT_MONVACA.set_visible(true);
        		this.staQN_YEARLYBASE.set_visible(false);
        		this.txtQN_YEARLYBASE.set_visible(false);
        		this.staQN_YEARLYSERVICE.set_visible(false);
        		this.txtQN_YEARLYSERVICE.set_visible(false);
        		this.staQN_MONTHLY.set_visible(true);
        		this.txtQN_MONTHLY.set_visible(true);
        		this.txtQN_MONTHLY.set_value("1");
        		this.txtDlgGroupText2.set_visible(false);

        		var toDay = this.gfnGetDate().substring(0,8);
        		this.ctclDT_MONVACA.set_value(toDay);
        	}

        	//생성년도
        	this.ctclYR_BASE.form.TextBox.set_value(this.getOwnerFrame().textCal);

        	//법인
        	this.cfCD_CORP.form.CDTextBox.set_value(this.getOwnerFrame().cdcorp);
        	this.cfCD_CORP.form.DSTextBox.set_value(this.getOwnerFrame().dscorp);

        	//특정사번
         	this.cfID_SABUN.form.CDTextBox.set_value(this.getOwnerFrame().sabun);
         	this.cfID_SABUN.form.DSTextBox.set_value(this.getOwnerFrame().hname);

        	if(this.gfnIsNull(this.cfCD_CORP.form.CDTextBox.value)){
        		this.cfID_SABUN.form.CDTextBox_onchanged();
        	}

        	//ID_PERSON
        	this.txtID_PERSON.set_value(this.getOwnerFrame().idPerson);

        	this.hdnCD_CORP = this.getOwnerFrame().cdcorp;
        };

        // 확인
        this.btnOK_onclick = function(obj,e)
        {
        	if (!this.fnDataValidate()) return;

        	this.dsInsert.clearData();
        	this.dsInsert1.clearData();

        	var JOB_TYPE = this.rdoJOB_TYPE.value;
        	switch(JOB_TYPE) {
        		case "1": // 연차
        			var nrow = this.dsInsert.addRow();
        			this.dsInsertMake(nrow);
        			break;

        		case "2":	// 1년미만연차생성(매월)
        			var nrow = this.dsInsert1.addRow();
        			this.dsInsert1Make(nrow);
        			break;
        	}

        	if (this.dsInsert.rowcount == 0 && this.dsInsert1.rowcount == 0) return;

        	var strSvcId    = "save";
        	var strSvcType  = "save";
        	var inProc		= "_dsProc";
        	var inData      = "insert=dsInsert insert1=dsInsert1";
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
        	// 취소
        	this.getParentContext().close(false);
        };

        /************************************************************************
         * 변수 선언
         ************************************************************************/
        this.fnSetVariable = function() {
        	this.hdnCD_CORP = "";
        };

        /************************************************************************
         * 파라미터 설정
         ************************************************************************/
        this.fnSetParameter = function() {
        	this.dsInsert = new Dataset();
        	this.dsInsert.addColumn("ID_PERSON", "string");
        	this.dsInsert.addColumn("ID_SABUN", "string");
        	this.dsInsert.addColumn("YR_BASE", "string");
        	this.dsInsert.addColumn("QN_YEARLYBASE", "string");
        	this.dsInsert.addColumn("QN_YEARLYSERVICE", "string");
        	this.dsInsert.addColumn("ID_INSERT", "string");
        	this.dsInsert.addColumn("CD_CORP", "string");

        	this.dsInsert1 = new Dataset();
        	this.dsInsert1.addColumn("ID_PERSON", "string");
        	this.dsInsert1.addColumn("ID_SABUN", "string");
        	this.dsInsert1.addColumn("DT_MONVACA", "string");
        	this.dsInsert1.addColumn("QN_MONTHLY", "string");
        	this.dsInsert1.addColumn("ID_INSERT", "string");
        	this.dsInsert1.addColumn("CD_CORP", "string");
        }

        /************************************************************************
         * 이벤트 설정
         ************************************************************************/
         // 코드파인더
        this.fnSetEvent = function() {

            this.cfID_SABUN.CodeFindName = "DAX_CFBASEINFO_ALL";
        	this.cfID_SABUN.BeforeUserDataSetParam = "fnBeforeUserDataSetParam";
        	this.cfID_SABUN.AfterCDTextChanged = "fnAfterCDTextChanged";

        	this.cfCD_CORP.CodeFindName = "DAX_CFCORP2";
        	this.cfCD_CORP.BeforeUserDataSetParam = "fnBeforeUserDataSetParam";
        	this.cfCD_CORP.AfterCDTextChanged = "fnAfterCDTextChanged";

        };

        /************************************************************************
         * 코드파인드 이벤트
         ************************************************************************/
         this.fnBeforeUserDataSetParam = function(id, dsUserParam, nrow) {

        	if(id == "cfID_SABUN") {
        		dsUserParam.setColumn(nrow, "CD_CORP", this.gfnNvl(this.gfnTrim(this.cfCD_CORP.form.CDTextBox.value),'%'));
        		dsUserParam.setColumn(nrow, "GR_SEARCH", this.FormInfo.GR_SEARCH);
        		dsUserParam.setColumn(nrow, "CD_DEPT", "%");
        		dsUserParam.setColumn(nrow, "YN_CORP", "Y");
        		dsUserParam.setColumn(nrow, "TY_RETIRE", "%");   // 재직구분

        	}

        	if(id == "cfCD_CORP") {
        		dsUserParam.setColumn(nrow, "GR_SEARCH", "");
        		dsUserParam.setColumn(nrow, "CD_DEPT", "");
        	}

        	return true;
        }

        this.fnAfterCDTextChanged = function(id, codeFindData) {

        	if(id == "cfID_SABUN") {
        	    if(codeFindData.length == 0){
        			this.txtID_PERSON.set_value("");
        		}else{
        			this.cfCD_CORP.form.CDTextBox.set_value(codeFindData[0]["CD_CORP"]);
        			this.cfCD_CORP.form.DSTextBox.set_value(codeFindData[0]["DS_CORP"]);
        			this.txtID_PERSON.set_value(codeFindData[0]["ID_PERSON"]);
        		}
        	}else if(id == "cfCD_CORP") {
        	    if(codeFindData.length == 0){
        			this.cfID_SABUN.form.CDTextBox.set_value("");
        			this.cfID_SABUN.form.DSTextBox.set_value("");
        			this.txtID_PERSON.set_value("");
        		}else{
        			if(this.hdnCD_CORP != codeFindData[0]["CD_CORP"]){
        				this.cfID_SABUN.form.CDTextBox.set_value("");
        				this.cfID_SABUN.form.DSTextBox.set_value("");
        				this.txtID_PERSON.set_value("");
        			}
        			this.hdnCD_CORP = codeFindData[0]["CD_CORP"];
        		}
        		//this.gfnSetFormStatus(this, "I");
        	}
        }

        this.fnDataValidate = function(){
        	var JOB_TYPE = this.rdoJOB_TYPE.value;

        	if (JOB_TYPE == "1") {
        		if(this.gfnIsNull(this.ctclYR_BASE.form.TextBox.value)) {
        			this.ctclYR_BASE.form.TextBox.setFocus();
        			this.gfnAlert("생성년도가 입력되지 않았습니다.");
        			return false;
        		}
        		if(!this.gfnIsNull(this.txtQN_YEARLYBASE.value) && !nexacro.isNumeric(this.txtQN_YEARLYBASE.value)) {
        			this.txtQN_YEARLYBASE.setFocus();
        			this.gfnAlert("기본년차의 입력형식이 맞지 않습니다.");
        			return false;
        		}
        		if(!this.gfnIsNull(this.txtQN_YEARLYSERVICE.value) && !nexacro.isNumeric(this.txtQN_YEARLYSERVICE.value)) {
        			this.txtQN_YEARLYSERVICE.setFocus();
        			this.gfnAlert("근속년차의 입력형식이 맞지 않습니다.");
        			return false;
        		}
        	} else {
        		if(this.gfnIsNull(this.ctclDT_MONVACA.value)) {
        			this.ctclDT_MONVACA.setFocus();
        			this.gfnAlert("생성일자가 입력되지 않았습니다.");
        			return false;
        		}
        		if(!this.gfnIsNull(this.cfID_SABUN.form.CDTextBox.value)) {
        			if(this.gfnIsNull(this.txtQN_MONTHLY.value)) {
        				this.txtQN_MONTHLY.setFocus();
        				this.gfnAlert("일수가 입력되지 않았습니다.");
        				return false;
        			}
        		}
        	}

        	return true;
        }

        /************************************************************************
         * 콜백 이벤트
         ************************************************************************/
        this.fnCallback = function(svcID, errorCode, errorMsg)
        {
        	if(svcID == "select") {

        	} else if(svcID == "save") {

        		if (errorCode == 0) {
        			var JOB_TYPE = this.rdoJOB_TYPE.value;

        			if (JOB_TYPE == "1") {
        				this.gfnAlert("연차 생성작업이 완료되었습니다.");
        			} else {
        				this.gfnAlert("1년미만연차 생성작업이 완료되었습니다.");
        			}

        			this.getParentContext().close(false);
        		} else {
        			this.gfnAlert(errorMsg);
        		}

        	}
        }

        /************************************************************************
         * 기타 이벤트
         ************************************************************************/

        this.dsInsertMake = function(nrow) {
        	this.dsInsert.setColumn(nrow, "ID_PERSON", this.txtID_PERSON.value);
        	this.dsInsert.setColumn(nrow, "ID_SABUN", this.gfnTrim(this.cfID_SABUN.form.CDTextBox.value));
        	this.dsInsert.setColumn(nrow, "YR_BASE", this.ctclYR_BASE.form.TextBox.value);
        	this.dsInsert.setColumn(nrow, "QN_YEARLYBASE", this.txtQN_YEARLYBASE.value);
        	this.dsInsert.setColumn(nrow, "QN_YEARLYSERVICE", this.txtQN_YEARLYSERVICE.value);
        	this.dsInsert.setColumn(nrow, "ID_INSERT", this.AuthClient.ID_USER);;
        	this.dsInsert.setColumn(nrow, "CD_CORP", this.gfnTrim(this.cfCD_CORP.form.CDTextBox.value));
        }

        this.dsInsert1Make = function(nrow) {
        	this.dsInsert1.setColumn(nrow, "ID_PERSON", this.txtID_PERSON.value);
        	this.dsInsert1.setColumn(nrow, "ID_SABUN", this.gfnTrim(this.cfID_SABUN.form.CDTextBox.value));
        	this.dsInsert1.setColumn(nrow, "DT_MONVACA", this.ctclDT_MONVACA.value);
        	this.dsInsert1.setColumn(nrow, "QN_MONTHLY", this.txtQN_MONTHLY.value);
        	this.dsInsert1.setColumn(nrow, "ID_INSERT", this.AuthClient.ID_USER);;
        	this.dsInsert1.setColumn(nrow, "CD_CORP", this.gfnTrim(this.cfCD_CORP.form.CDTextBox.value));
        }
        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.form_onload,this);
            this.staJOB_TYPE.addEventHandler("onclick",this.staCD_UPDEPT_onclick,this);
            this.rdoJOB_TYPE.addEventHandler("onitemchanged",this.fnSearchInit,this);
            this.divBtns.form.btnOK.addEventHandler("onclick",this.btnOK_onclick,this);
            this.divBtns.form.btnCANCLE.addEventHandler("onclick",this.btnCANCLE_onclick,this);
        };
        this.loadIncludeScript("DAC_CREATEVACATIONDLG.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
