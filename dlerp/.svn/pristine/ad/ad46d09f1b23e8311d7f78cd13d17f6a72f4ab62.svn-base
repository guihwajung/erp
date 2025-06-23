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
            this.set_titletext("감가상각작업");
            this.getSetter("maxheight").set("260");
            this.getSetter("maxwidth").set("400");
            if (Form == this.constructor)
            {
                this._setFormPosition(370,200);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("dsResult", this);
            obj._setContents("");
            this.addChild(obj.name, obj);


            obj = new Dataset("_dsProc", this);
            obj._setContents("<ColumnInfo><Column id=\"TARGET\" type=\"STRING\" size=\"256\"/><Column id=\"SP\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"TARGET\">select</Col><Col id=\"SP\">DHNPR_ASSETDEP_MAX</Col></Row><Row><Col id=\"TARGET\">insert</Col><Col id=\"SP\">DHNPR_ASSETDEP_REPAYMENT</Col></Row></Rows>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Div("divData","0","0","100%","100.00%",null,null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_cssclass("div_DATA_Bg");
            obj.set_text("");
            this.addChild(obj.name, obj);

            obj = new Button("btnOk","102",null,"69","27",null,"0",null,null,null,null,this.divData.form);
            obj.set_taborder("0");
            obj.set_text("확인");
            obj.getSetter("uWord").set("popup.ok");
            this.divData.addChild(obj.name, obj);

            obj = new Button("btnCancle","180",null,"69","27",null,"0",null,null,null,null,this.divData.form);
            obj.set_taborder("1");
            obj.set_text("취소");
            obj.getSetter("uWord").set("popup.cancel");
            this.divData.addChild(obj.name, obj);

            obj = new Static("staCD_CORP","1","41","120","27",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("2");
            obj.set_text("법인코드");
            obj.set_textAlign("center");
            obj.set_cssclass("sta_WF_tablelabelE");
            this.divData.addChild(obj.name, obj);

            obj = new Static("staBg","staCD_CORP:-1","staCD_CORP:-27","240","27",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("3");
            obj.set_cssclass("sta_WF_tablebg");
            this.divData.addChild(obj.name, obj);

            obj = new Static("staMAGAM_DAY","staCD_CORP:-120","staCD_CORP:-1","120","27",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("4");
            obj.set_text("최종감가상각년월");
            obj.set_cssclass("sta_WF_tablelabel");
            obj.set_textAlign("center");
            obj.set_textDecoration("none");
            this.divData.addChild(obj.name, obj);

            obj = new Static("staMAGAM","staMAGAM_DAY:-120","staMAGAM_DAY:-1","120","27",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("5");
            obj.set_text("감가상각년월");
            obj.set_textAlign("center");
            obj.set_cssclass("sta_WF_tablelabelE");
            this.divData.addChild(obj.name, obj);

            obj = new Static("staBg00","staMAGAM_DAY:-1","staMAGAM_DAY:-27","240","27",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("6");
            obj.set_cssclass("sta_WF_tablebg");
            this.divData.addChild(obj.name, obj);

            obj = new Static("staBg01","staMAGAM:-1","staMAGAM:-27","240","27",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("7");
            obj.set_cssclass("sta_WF_tablebg");
            this.divData.addChild(obj.name, obj);

            obj = new Div("ctclMAGAM_FROM","staMAGAM:5","staMAGAM:-23","80","20",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("8");
            obj.set_url("cmm::cmmCalMM.xfdl");
            obj.set_enableevent("true");
            obj.set_text("");
            this.divData.addChild(obj.name, obj);

            obj = new Static("staMAGAM_WAVE","ctclMAGAM_FROM:5","ctclMAGAM_FROM:-19","10","20",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("9");
            obj.set_text("~");
            obj.set_visible("false");
            this.divData.addChild(obj.name, obj);

            obj = new Div("ctclMAGAM_TO","staMAGAM:105","staMAGAM:-23","80","20",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("10");
            obj.set_url("cmm::cmmCalMM.xfdl");
            obj.set_enableevent("true");
            obj.set_text("");
            obj.set_visible("false");
            this.divData.addChild(obj.name, obj);

            obj = new Edit("edtMAGAM_DAY","staMAGAM_DAY:5","staMAGAM_DAY:-23","100","20",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("11");
            obj.set_readonly("true");
            this.divData.addChild(obj.name, obj);

            obj = new Div("cfCD_CORP","staCD_CORP:5","44","224","20",null,null,null,null,null,null,this.divData.form);
            obj.getSetter("CodeFindName").set("DHX_CFCORP");
            obj.getSetter("CDTextWidth").set("50");
            obj.set_taborder("12");
            obj.set_url("cmm::cmmCodeFind.xfdl");
            obj.set_text("");
            this.divData.addChild(obj.name, obj);

            obj = new Static("staTitle00","0","10",null,"22","120",null,null,null,null,null,this.divData.form);
            obj.set_taborder("13");
            obj.set_text("감가상각작업");
            obj.set_cssclass("sta_TITLE_Bg");
            this.divData.addChild(obj.name, obj);

            obj = new Static("sta00","2","123","179","18",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("14");
            obj.set_text("해당월의 감가상각을 합니다.");
            this.divData.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this
            obj = new Layout("default","",370,200,this,function(p){});
            this.addLayout(obj.name, obj);
            
            // BindItem Information

            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {
            this._addPreloadList("fdl","cmm::cmmCalMM.xfdl");
            this._addPreloadList("fdl","cmm::cmmCodeFind.xfdl");
        };
        
        // User Script
        this.registerScript("DHN_ASSETDEPMAGAM.xfdl", function() {
        /***********************************************************************************************
        * FORM EVENT 영역(onload)
        /***********************************************************************************************/
        this.objApp = this.gfnGetApplication();

        this.form_onload = function(obj,e)
        {
        	// -- 필수 -------------------//
        	this.gfnFormOnLoad(this);
        	this.gfnFormInfo(this);
        	// ---------------------------//

        	this.fnSetVariable();
        	this.fnSetParameter();
        	this.fnSetEvent();

        	var frame = this.getOwnerFrame();

        	if(!this.gfnIsNull(frame.CD_CORP)) {
        		this.cfCD_CORP.form.CDTextBox.set_value(frame.CD_CORP);
        		this.cfCD_CORP.form.DSTextBox.set_value(frame.DS_CORP);
        		this.fnSelect();
        	} else {
        		this.cfCD_CORP.form.CDTextBox.set_value(this.AuthClient.CD_CORP);
        		this.cfCD_CORP.form.DSTextBox.set_value(this.AuthClient.DS_CORP);
        		this.fnSelect();
        	}
        };


        this.fnSetVariable = function() {
        	this.cfCD_CORP      = this.divData.form.cfCD_CORP;
        	this.edtMAGAM_DAY   = this.divData.form.edtMAGAM_DAY;
        	this.ctclMAGAM_FROM = this.divData.form.ctclMAGAM_FROM;

        	this.btnOk          = this.divData.form.btnOk;
        	this.btnCancle      = this.divData.form.btnCancle;
        };

        this.fnSetParameter = function() {

        	this.dsSelect = new Dataset();
        	this.dsSelect.addColumn("CD_CORP" , "string");
        	this.dsSelect.addColumn("ID_TRANS", "string");

        	this.dsResult = new Dataset();

        	this.dsInsert = new Dataset();
        	this.dsInsert.addColumn("DT_YYYMM_FROM", "string");
        	this.dsInsert.addColumn("DT_YYYMM_TO"  , "string");
        	this.dsInsert.addColumn("ID_TRANS"     , "string");
        	this.dsInsert.addColumn("CD_CORP"      , "string");
        };

        this.fnSetEvent = function() {

        	// 법인코드
        	this.cfCD_CORP.BeforeUserDataSetParam = "fnBeforeUserDataSetParam";
        	this.cfCD_CORP.AfterCDTextChanged     = "fnAfterCDTextChanged";
        }

        this.fnBeforeUserDataSetParam = function(id, dsUserParam, nrow) {
        	if (id == "cfCD_CORP") {
        		dsUserParam.setColumn(nrow, "ID_SABUN", this.AuthClient.ID_USER);
        		//dsUserParam.setColumn(nrow, "LEVLV_DEPT_ACNT", this.UserInfo.LEVLV_DEPT_ACNT);
        		//dsUserParam.setColumn(nrow, "LEVCD_DEPT_ACNT", this.UserInfo.LEVCD_DEPT_ACNT);
        	}
        	return true;
        };

        this.fnAfterCDTextChanged = function(id, codeFindData) {
        	if(id == "cfCD_CORP") {
        		this.fnSelect();
        	}
        }

        this.btnOk_onclick = function(obj,e) {
        	this.save();
        };

        /**
        * @description 취소버튼
        */
        this.btnCancle_onclick = function(obj,e) {
        	this.getParentContext().close(false);
        };


        this.fnCallback = function(svcID, errorCode, errorMsg) {

        	if(svcID == "select") {
        		if(this.dsResult.rowcount == 0) {
        			this.gfnAlert("자료가 존재하지 않습니다.");
        		} else {
        			var ymAccount = this.dsResult.getColumn(0, "YM_ACCOUNT");

        			if(!this.gfnIsNull(ymAccount)) {
        				this.edtMAGAM_DAY.set_value(ymAccount.substring(0, 4) + "-" + ymAccount.substring(4, 6));
        			}

        			if(this.gfnIsNull(this.edtMAGAM_DAY.value)) {

        				this.ctclMAGAM_FROM.form.TextBox.set_value("");

        			} else {

        				var magam = (this.edtMAGAM_DAY.value + "-01").replace(/-/gi, "");

        				this.ctclMAGAM_FROM.form.TextBox.set_value(this.gfnAddMonth(magam, 1).substring(0,6));
        			}
        		}
        	}

        	if(svcID == "save") {
        		this.gfnAlert("작업이 성공적으로 수행되었습니다.", "fnClose_callback");

        	}
        }

        this.fnClose_callback = function(strID)
        {
          	this.getParentContext().close(true);
        }

        this.fnSaveValidate = function() {
        	if(this.gfnIsNull(this.cfCD_CORP.form.CDTextBox.value)) {
        		this.gfnAlert("법인코드는 반드시 입력 하셔야 합니다.");
        		return false;
        	}

        	if(this.gfnIsNull(this.ctclMAGAM_FROM.form.TextBox.value)) {
        		this.gfnAlert("감가상각년월은 반드시 입력 하셔야 합니다.");
        		return false;
        	}

        	var dtFromDate = this.ctclMAGAM_FROM.form.TextBox.value.replace(/-/gi, "") + "01";
        	var magamDay   = this.edtMAGAM_DAY.value.replace(/-/gi, "") + "01";

         	if(!this.gfnIsNull(this.edtMAGAM_DAY.value) && this.gfnGetDiffMonth(magamDay, dtFromDate) > 1) {
         		this.gfnAlert("감가상각 작업년월은 최종감가상각년월보다 2개월이상 큰달을 선택할 수 없습니다.");
         		return false;
         	}

        	return true;
        }

        this.save = function() {

        	if(!this.fnSaveValidate()) return;

        	this.dsInsert.clearData();

        	var nrow = this.dsInsert.addRow();

        	this.dsInsert.setColumn(nrow, "DT_YYYMM_FROM", this.ctclMAGAM_FROM.form.TextBox.value);
        	this.dsInsert.setColumn(nrow, "DT_YYYMM_TO"  , this.ctclMAGAM_FROM.form.TextBox.value);
        	this.dsInsert.setColumn(nrow, "ID_TRANS"     , this.AuthClient.ID_USER);
        	this.dsInsert.setColumn(nrow, "CD_CORP"      , this.cfCD_CORP.form.CDTextBox.value);

        	var strSvcId    = "save";
        	var strSvcType  = "save";
        	var inProc		= "_dsProc";
        	var inData      = "insert=dsInsert";
        	var outData     = "";
        	var strArg      = "";
        	var callBackFnc = "fnCallback";

        	this.gfnTransaction( strSvcId , 	// transaction을 구분하기 위한 svc id값
         						strSvcType , 	// transaction을 요청할 구분
         						inProc,			// Procedure 정보 Dataset 이름
         						inData , 		// 입력값으로 보낼 dataset id , a=b형태로 실제이름과 입력이름을 매칭
         						outData , 		// 처리결과값으로 받을 dataset id, a=b형태로 실제이름과 입력이름을 매칭
         						strArg, 		// 입력갑스로 보낼 arguments, strFormData="20120607"
         						callBackFnc); 	// 통신방법 정의 [생략가능]
        }

        this.fnSelect = function() {

        	this.edtMAGAM_DAY.set_value("");
        	this.ctclMAGAM_FROM.form.TextBox.set_value("");

        	this.dsSelect.clearData();

        	var nrow = this.dsSelect.addRow();

        	this.dsSelect.setColumn(nrow, "CD_CORP" , this.cfCD_CORP.form.CDTextBox.value);
        	this.dsSelect.setColumn(nrow, "ID_TRANS", this.AuthClient.ID_USER);

        	var strSvcId    = "select";
        	var strSvcType  = "grid";
        	var inProc		= "_dsProc";
        	var inData      = "select=dsSelect";
        	var outData     = "dsResult=select0";
        	var strArg      = "";
        	var callBackFnc = "fnCallback";

        	this.gfnTransaction( strSvcId , 	// transaction을 구분하기 위한 svc id값
        						strSvcType , 	// transaction을 요청할 구분
        						inProc,			// Procedure 정보 Dataset 이름
        						inData , 		// 입력값으로 보낼 dataset id , a=b형태로 실제이름과 입력이름을 매칭
        						outData , 		// 처리결과값으로 받을 dataset id, a=b형태로 실제이름과 입력이름을 매칭
        						strArg, 		// 입력갑스로 보낼 arguments, strFormData="20120607"
        						callBackFnc); 	// 통신방법 정의 [생략가능]
        }

        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.form_onload,this);
            this.divData.form.btnOk.addEventHandler("onclick",this.btnOk_onclick,this);
            this.divData.form.btnCancle.addEventHandler("onclick",this.btnCancle_onclick,this);
            this.divData.form.cfCD_CORP.addEventHandler("onclick",this.Common_onclick,this);
        };
        this.loadIncludeScript("DHN_ASSETDEPMAGAM.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
