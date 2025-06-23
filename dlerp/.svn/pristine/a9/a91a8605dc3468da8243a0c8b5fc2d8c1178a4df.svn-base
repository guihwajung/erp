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
            this.set_titletext("평가 최종결과 생성");
            this.getSetter("maxwidth").set("450");
            this.getSetter("maxheight").set("420");
            if (Form == this.constructor)
            {
                this._setFormPosition(390,320);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("dsList", this);
            obj._setContents("");
            this.addChild(obj.name, obj);


            obj = new Dataset("_dsProc", this);
            obj._setContents("<ColumnInfo><Column id=\"TARGET\" type=\"STRING\" size=\"256\"/><Column id=\"SP\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"TARGET\">create</Col><Col id=\"SP\">DAJPR_EVALUATION_TOTAL_CREATE</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsJOB_TYPE", this);
            obj._setContents("<ColumnInfo><Column id=\"CODE\" type=\"STRING\" size=\"256\"/><Column id=\"VALUE\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"CODE\">1</Col><Col id=\"VALUE\">전체</Col></Row><Row><Col id=\"VALUE\">특정사원</Col><Col id=\"CODE\">2</Col></Row></Rows>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Static("staTITLE","0","0","100.00%","30",null,null,null,null,null,null,this);
            obj.set_taborder("4");
            obj.set_text("평가 최종결과 생성");
            obj.set_cssclass("sta_TITLE_Bg");
            obj.set_textAlign("center");
            this.addChild(obj.name, obj);

            obj = new Static("staJOB_TYPE","20","130","60","20",null,null,null,null,null,null,this);
            obj.set_taborder("6");
            obj.set_text("대상");
            obj.set_cssclass("sta_WF_tablelabelE");
            this.addChild(obj.name, obj);

            obj = new Static("staYR_BASE","20","70","60","20",null,null,null,null,null,null,this);
            obj.set_taborder("8");
            obj.set_text("평가년도");
            obj.set_cssclass("sta_WF_tablelabelE");
            this.addChild(obj.name, obj);

            obj = new Static("staCD_CORP","20","39","60","20",null,null,null,null,null,null,this);
            obj.set_taborder("7");
            obj.set_text("법인");
            this.addChild(obj.name, obj);

            obj = new Div("cfCD_CORP","90","39","200","20",null,null,null,null,null,null,this);
            obj.getSetter("CDTextWidth").set("70");
            obj.set_taborder("2");
            obj.set_url("cmm::cmmCodeFind.xfdl");
            this.addChild(obj.name, obj);

            obj = new Radio("rdoJOB_TYPE","90","130","220","20",null,null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_innerdataset("dsJOB_TYPE");
            obj.set_codecolumn("CODE");
            obj.set_datacolumn("VALUE");
            obj.set_direction("vertical");
            obj.set_fittocontents("width");
            obj.set_value("1");
            obj.set_index("0");
            this.addChild(obj.name, obj);

            obj = new Div("ctclYR_BASE","90","70","80","20",null,null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_url("cmm::cmmCalYY.xfdl");
            obj.set_enableevent("true");
            obj.set_text("2019");
            this.addChild(obj.name, obj);

            obj = new Static("txtDlgGroupText1","20","210",null,"20","30",null,null,null,null,null,this);
            obj.set_taborder("3");
            obj.set_text("특정 사번이 입력되지 않으면 전직원을 대상으로 작업됩니다.");
            obj.set_background("#cfebeb");
            this.addChild(obj.name, obj);

            obj = new Combo("cboGUBUN","90","101","150","20",null,null,null,null,null,null,this);
            obj.set_taborder("9");
            obj.set_codecolumn("codecolumn");
            obj.set_datacolumn("datacolumn");
            var cboGUBUN_innerdataset = new nexacro.NormalDataset("cboGUBUN_innerdataset", obj);
            cboGUBUN_innerdataset._setContents("<ColumnInfo><Column id=\"codecolumn\" size=\"256\"/><Column id=\"datacolumn\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"codecolumn\">01</Col><Col id=\"datacolumn\">상반기</Col></Row><Row><Col id=\"codecolumn\">02</Col><Col id=\"datacolumn\">하반기</Col></Row></Rows>");
            obj.set_innerdataset(cboGUBUN_innerdataset);
            this.addChild(obj.name, obj);

            obj = new Static("staYR_BASE00","20","101","60","20",null,null,null,null,null,null,this);
            obj.set_taborder("10");
            obj.set_text("구분");
            obj.set_cssclass("sta_WF_tablelabelE");
            this.addChild(obj.name, obj);

            obj = new Static("staCD_CORP00","20","158","60","20",null,null,null,null,null,null,this);
            obj.set_taborder("11");
            obj.set_text("피평가자");
            this.addChild(obj.name, obj);

            obj = new Div("cfID_SABUN","90","158","200","20",null,null,null,null,null,null,this);
            obj.getSetter("CDTextWidth").set("70");
            obj.set_taborder("12");
            obj.set_url("cmm::cmmCodeFind.xfdl");
            obj.set_enable("false");
            this.addChild(obj.name, obj);

            obj = new Div("divBtns","91","265","200","60",null,null,null,null,null,null,this);
            obj.set_taborder("5");
            this.addChild(obj.name, obj);

            obj = new Button("btnOK","20","0","60","27",null,null,null,null,null,null,this.divBtns.form);
            obj.set_taborder("12");
            obj.set_text("확인");
            this.divBtns.addChild(obj.name, obj);

            obj = new Button("btnCANCLE","btnOK:30","0","60","27",null,null,null,null,null,null,this.divBtns.form);
            obj.set_taborder("13");
            obj.set_text("취소");
            this.divBtns.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this
            obj = new Layout("default","",this._adjust_width,this._adjust_height,this,function(p){});
            this.addLayout(obj.name, obj);
            
            // BindItem Information
            obj = new BindItem("item1","ctclYR_BASE.form.TextBox","value","dsSearch","YR_BASE");
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
        this.registerScript("DAJ_EVALUATION_TOTAL_DLG.xfdl", function() {
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

        	//생성년도
        	this.ctclYR_BASE.form.TextBox.set_value(this.getOwnerFrame().textCal);

        	//법인
        	this.cfCD_CORP.form.CDTextBox.set_value(this.getOwnerFrame().cdcorp);
        	this.cfCD_CORP.form.DSTextBox.set_value(this.getOwnerFrame().dscorp);

        	//구분
        	this.cboGUBUN.set_value(this.getOwnerFrame().gubun);

        };

        //자료생성
        this.btnOK_onclick = function(obj,e){
        	this.gfnConfirm("자료생성 하시겠습니까?","fnCreate");
        };

        // 확인
        this.fnCreate = function()
        {
        	if (!this.fnDataValidate()) return;

        	this.dsCreate.clearData();

        	var nrow = this.dsCreate.addRow();

        	this.dsCreate.setColumn(nrow, "CD_CORP", this.gfnNvl(this.gfnTrim(this.cfCD_CORP.form.CDTextBox.value), ""));
        	this.dsCreate.setColumn(nrow, "YY_EVALUATION", this.gfnNvl(this.gfnTrim(this.ctclYR_BASE.form.TextBox.text), ""));
        	this.dsCreate.setColumn(nrow, "TY_EVALUATION", this.cboGUBUN.value);
        	this.dsCreate.setColumn(nrow, "ID_SABUN", this.gfnNvl(this.gfnTrim(this.cfID_SABUN.form.CDTextBox.value), ""));
        	this.dsCreate.setColumn(nrow, "GR_SEARCH", this.FormInfo.GR_SEARCH);
        	this.dsCreate.setColumn(nrow, "TY_AUTH", this.FormInfo.TY_AUTH);
        	this.dsCreate.setColumn(nrow, "GR_DEPT", this.AuthClient.CD_DEPT);
        	this.dsCreate.setColumn(nrow, "ID_USER", this.AuthClient.ID_USER);

        	if (this.dsCreate.rowcount == 0) return;

        	var strSvcId    = "create";
        	var strSvcType  = "save";
        	var inProc		= "_dsProc";
        	var inData      = "create=dsCreate";
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
        };

        /************************************************************************
         * 파라미터 설정
         ************************************************************************/
        this.fnSetParameter = function() {
        	this.dsCreate = new Dataset();
        	this.dsCreate.addColumn("CD_CORP", "string");
        	this.dsCreate.addColumn("YY_EVALUATION", "string");
        	this.dsCreate.addColumn("TY_EVALUATION", "string");
        	this.dsCreate.addColumn("ID_SABUN", "string");
        	this.dsCreate.addColumn("GR_SEARCH", "string");
        	this.dsCreate.addColumn("TY_AUTH", "string");
        	this.dsCreate.addColumn("GR_DEPT", "string");
        	this.dsCreate.addColumn("ID_USER", "string");
        }

        /************************************************************************
         * 이벤트 설정
         ************************************************************************/
         // 코드파인더
        this.fnSetEvent = function() {

            this.cfID_SABUN.CodeFindName = "DAX_EVAL_TARGET_CODEFIND";
        	this.cfID_SABUN.BeforeUserDataSetParam = "fnBeforeUserDataSetParam";
        	this.cfID_SABUN.AfterCDTextChanged = "fnAfterCDTextChanged";

        	this.cfCD_CORP.CodeFindName = "DAX_CFCORP";
        	this.cfCD_CORP.BeforeUserDataSetParam = "fnBeforeUserDataSetParam";
        	this.cfCD_CORP.AfterCDTextChanged = "fnAfterCDTextChanged";

        };

        /************************************************************************
         * 코드파인드 이벤트
         ************************************************************************/
         this.fnBeforeUserDataSetParam = function(id, dsUserParam, nrow) {

        	if(id == "cfID_SABUN") {
        		dsUserParam.setColumn(nrow, "CD_CORP", this.gfnNvl(this.gfnTrim(this.cfCD_CORP.form.CDTextBox.value), ""));
        		dsUserParam.setColumn(nrow, "GR_SEARCH", this.FormInfo.GR_SEARCH);
        		dsUserParam.setColumn(nrow, "YY_EVALUATION", this.gfnNvl(this.gfnTrim(this.ctclYR_BASE.form.TextBox.text), ""));
        		dsUserParam.setColumn(nrow, "TY_EVALUATION", this.cboGUBUN.value);
        		dsUserParam.setColumn(nrow, "ID_USER", this.AuthClient.ID_USER);
        	}

        	if(id == "cfCD_CORP") {
        		dsUserParam.setColumn(nrow, "GR_SEARCH", "");
        		dsUserParam.setColumn(nrow, "CD_DEPT", "");
        	}

        	return true;
        }

        this.fnAfterCDTextChanged = function(id, codeFindData) {

        // 	if(id == "cfID_SABUN") {
        // 	    if(codeFindData.length > 0){
        // 		    this.cfID_SABUN.form.CDTextBox.set_value(codeFindData[0]["CD_CORP"]);
        // 			this.cfID_SABUN.form.DSTextBox.set_value(codeFindData[0]["DS_CORP"]);
        // 		}
        // 	}else if(id == "cfCD_CORP") {
        // 	    if(codeFindData.length == 0){
        // 			this.cfCD_CORP.form.CDTextBox.set_value("");
        // 			this.cfCD_CORP.form.DSTextBox.set_value("");
        // 		}
        // 	}
        }

        this.fnDataValidate = function(){
        		if(this.gfnIsNull(this.ctclYR_BASE.form.TextBox.value)) {
        			this.ctclYR_BASE.form.TextBox.setFocus();
        			this.gfnAlert("평가년도가 입력되지 않았습니다.");
        			return false;
        		}
        		if(this.rdoJOB_TYPE.value == 2 && this.gfnIsNull(this.cfID_SABUN.form.CDTextBox.value))
        		{
        		    this.cfID_SABUN.form.CDTextBox.setFocus();
        			this.gfnAlert("특정사원이 지정되지 않았습니다.");
        			return false;
        		}
        	return true;
        }

        /************************************************************************
         * 콜백 이벤트
         ************************************************************************/
        this.fnCallback = function(svcID, errorCode, errorMsg)
        {
        	if(svcID == "select") {

        	} else if(svcID == "create") {
        		if (errorCode == 0) {
        		    this.fnWorkAfter = function(){
        				this.getParentContext().close(false);
        			}
        		    this.gfnAlert("최종 평가 생성 작업이 완료되었습니다.", "fnWorkAfter");
        		} else {
        			this.gfnAlert(errorMsg);
        		}
        	}
        }

        /************************************************************************
         * 기타 이벤트
         ************************************************************************/
        this.fnCreateInit = function(obj,e)
        {
        	if(e.postvalue == 1){
        		this.cfID_SABUN.form.fnCodeFindClear(false);
        	    this.cfID_SABUN.set_enable(false);
        	}
        	else if(e.postvalue == 2){
        	    this.cfID_SABUN.set_enable(true);
        	}
        };

        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.form_onload,this);
            this.staJOB_TYPE.addEventHandler("onclick",this.staCD_UPDEPT_onclick,this);
            this.rdoJOB_TYPE.addEventHandler("onitemchanged",this.fnCreateInit,this);
            this.divBtns.form.btnOK.addEventHandler("onclick",this.btnOK_onclick,this);
            this.divBtns.form.btnCANCLE.addEventHandler("onclick",this.btnCANCLE_onclick,this);
            this.dsList.addEventHandler("onvaluechanged",this.dsList_onvaluechanged,this);
        };
        this.loadIncludeScript("DAJ_EVALUATION_TOTAL_DLG.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
