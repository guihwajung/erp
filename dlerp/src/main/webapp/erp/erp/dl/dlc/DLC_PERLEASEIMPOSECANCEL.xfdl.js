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
            this.set_titletext("");
            this.getSetter("maxwidth").set("500");
            this.getSetter("maxheight").set("320");
            if (Form == this.constructor)
            {
                this._setFormPosition(450,320);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("dsList", this);
            obj._setContents("<ColumnInfo><Column id=\"CD_ACNTUNIT\" type=\"STRING\" size=\"256\"/><Column id=\"DS_ACNTUNIT\" type=\"STRING\" size=\"256\"/><Column id=\"NO_DONG\" type=\"STRING\" size=\"256\"/><Column id=\"NO_FLOOR\" type=\"STRING\" size=\"256\"/><Column id=\"NO_HO\" type=\"STRING\" size=\"256\"/><Column id=\"YM_IMPOSE\" type=\"STRING\" size=\"256\"/><Column id=\"TY_TYPE\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row/></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("_dsProc", this);
            obj._setContents("<ColumnInfo><Column id=\"TARGET\" type=\"STRING\" size=\"256\"/><Column id=\"SP\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"TARGET\">delete</Col><Col id=\"SP\">DLCPR_PER_IMPOSECANCEL </Col></Row><Row><Col id=\"SP\">DZXPR_COMBO_SELECT</Col><Col id=\"TARGET\">combo</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsTY_TYPE", this);
            obj._setContents("");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Div("divData","0","0",null,null,"0","30",null,null,null,null,this);
            obj.set_taborder("0");
            this.addChild(obj.name, obj);

            obj = new Static("staTITLE","0","0","100.00%","30",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("0");
            obj.set_text("부과 임대료 개별 취소");
            obj.set_cssclass("sta_TITLE_Bg");
            obj.set_textAlign("left");
            this.divData.addChild(obj.name, obj);

            obj = new Static("staSubTITLE","5","staTITLE:0",null,"30","0",null,null,null,null,null,this.divData.form);
            obj.set_taborder("0");
            obj.set_text("세대별 부과된 임대료를 개별 취소합니다");
            obj.set_textAlign("left");
            this.divData.addChild(obj.name, obj);

            obj = new Static("staCD_ACNTUNIT","10","staSubTITLE:5","100","30",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("1");
            obj.set_text("사업지코드");
            obj.set_textAlign("right");
            obj.set_cssclass("sta_WF_tablelabelE");
            this.divData.addChild(obj.name, obj);

            obj = new Static("staBgCD_ACNTUNIT","staCD_ACNTUNIT:-1","staSubTITLE:5","300","30",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("2");
            obj.set_cssclass("sta_WF_tablebg");
            obj.set_text("");
            this.divData.addChild(obj.name, obj);

            obj = new Static("staNO_DONG","10","staCD_ACNTUNIT:28","100","30",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("3");
            obj.set_text("동층호");
            obj.set_textAlign("right");
            obj.set_cssclass("sta_WF_tablelabelE");
            this.divData.addChild(obj.name, obj);

            obj = new Static("staBgNO_DONG","staNO_DONG:-1","staBgCD_ACNTUNIT:28","300","30",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("4");
            obj.set_cssclass("sta_WF_tablebg");
            obj.set_text("");
            this.divData.addChild(obj.name, obj);

            obj = new Static("staYM_IMPOSE","10","staNO_DONG:-1","100","30",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("3");
            obj.set_text("부과년월");
            obj.set_textAlign("right");
            obj.set_cssclass("sta_WF_tablelabelE");
            this.divData.addChild(obj.name, obj);

            obj = new Static("staBgYM_IMPOSE","staYM_IMPOSE:-1","staBgNO_DONG:-1","300","30",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("4");
            obj.set_cssclass("sta_WF_tablebg");
            obj.set_text("");
            this.divData.addChild(obj.name, obj);

            obj = new Div("ccfCD_ACNTUNIT","staCD_ACNTUNIT:5","staSubTITLE:10","200","20",null,null,null,null,null,null,this.divData.form);
            obj.getSetter("CodeFindName").set("DLX_CFLEASESITE_CODEFIND");
            obj.getSetter("CDTextWidth").set("70");
            obj.set_taborder("1");
            obj.set_url("cmm::cmmCodeFind.xfdl");
            this.divData.addChild(obj.name, obj);

            obj = new Edit("ctxtNO_DONG","staNO_DONG:5","ccfCD_ACNTUNIT:38","80","20",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("4");
            obj.set_value("");
            obj.set_readonly("false");
            obj.set_maxlength("4");
            obj.set_inputtype("normal,number");
            this.divData.addChild(obj.name, obj);

            obj = new Edit("ctxtNO_FLOOR","ctxtNO_DONG:5","ccfCD_ACNTUNIT:38","60","20",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("5");
            obj.set_value("");
            obj.set_readonly("false");
            obj.set_maxlength("2");
            obj.set_inputtype("normal,number");
            this.divData.addChild(obj.name, obj);

            obj = new Edit("ctxtNO_HO","ctxtNO_FLOOR:5","ccfCD_ACNTUNIT:38","80","20",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("6");
            obj.set_value("");
            obj.set_readonly("false");
            obj.set_maxlength("3");
            obj.set_inputtype("normal,number");
            this.divData.addChild(obj.name, obj);

            obj = new Button("cbtnNO_DONGHO","ctxtNO_HO:5","ccfCD_ACNTUNIT:38","25","20",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("7");
            obj.set_cssclass("btn_CF_Search");
            this.divData.addChild(obj.name, obj);

            obj = new Div("ctclYM_IMPOSE","staYM_IMPOSE:5","cbtnNO_DONGHO:9","80","20",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("1");
            obj.set_url("cmm::cmmCalMM.xfdl");
            this.divData.addChild(obj.name, obj);

            obj = new Button("btnOK","30.00%","ctclYM_IMPOSE:20","60","27",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("8");
            obj.set_text("확인");
            this.divData.addChild(obj.name, obj);

            obj = new Button("btnCANCLE","btnOK:30","ctclYM_IMPOSE:20","60","27",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("9");
            obj.set_text("취소");
            this.divData.addChild(obj.name, obj);

            obj = new Static("sta03","109","94","300","30",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("1");
            obj.set_cssclass("sta_WF_tablebg");
            obj.set_text("");
            this.divData.addChild(obj.name, obj);

            obj = new Static("sta02","10","94","100","30",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("2");
            obj.set_text("구분");
            obj.set_textAlign("right");
            obj.set_cssclass("sta_WF_tablelabelE");
            this.divData.addChild(obj.name, obj);

            obj = new Combo("ccboTY_TYPE","115","99","105","20",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("3");
            obj.set_datacolumn("DS_CODE");
            obj.set_codecolumn("CD_CODE");
            obj.set_innerdataset("dsTY_TYPE");
            this.divData.addChild(obj.name, obj);
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

            obj = new BindItem("item2","divData.form.ctxtNO_DONG","value","dsList","NO_DONG");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item3","divData.form.ctxtNO_FLOOR","value","dsList","NO_FLOOR");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item4","divData.form.ctxtNO_HO","value","dsList","NO_HO");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item5","divData.form.ctclYM_IMPOSE.form.TextBox","value","dsList","YM_IMPOSE");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item6","divData.form.ccboTY_TYPE","value","dsList","TY_TYPE");
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
        this.registerScript("DLC_PERLEASEIMPOSECANCEL.xfdl", function() {
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
        	this.fnSetCombo();

        	this.dsList.setColumn(0, "YM_IMPOSE", this.gfnGetDate().substr(0,6));

        	if(!this.gfnIsNull(this.getOwnerFrame().CD_ACNTUNIT)){
        		this.dsList.setColumn(0, "CD_ACNTUNIT", this.getOwnerFrame().CD_ACNTUNIT);
        		this.dsList.setColumn(0, "DS_ACNTUNIT", this.getOwnerFrame().DS_ACNTUNIT);
        		this.dsList.setColumn(0, "NO_DONG", this.getOwnerFrame().NO_DONG);
        		this.dsList.setColumn(0, "NO_FLOOR", this.getOwnerFrame().NO_FLOOR);
        		this.dsList.setColumn(0, "NO_HO", this.getOwnerFrame().NO_HO);
        		this.dsList.setColumn(0, "YM_IMPOSE", this.getOwnerFrame().YM_IMPOSE);
        	}
        };


        /************************************************************************
         * 변수 선언
         ************************************************************************/
        this.fnSetVariable = function() {
        	this.ccfCD_ACNTUNIT = this.divData.form.ccfCD_ACNTUNIT;
        	this.ccboTY_TYPE = this.divData.form.ccboTY_TYPE;
        };

        this.fnSetCombo = function() {

        	this.dsCombo = new Dataset();
        	this.dsCombo.addColumn("CD_SYSTEM", "string");
        	this.dsCombo.addColumn("CD_TYPE", "string");

        	this.dsCombo.addRow();
        	this.dsCombo.setColumn(0, "CD_SYSTEM", "DL");
        	this.dsCombo.setColumn(0, "CD_TYPE", "C1");



        	var strSvcId    = "combo";
        	var strSvcType  = "select";
        	var inProc		= "_dsProc";
        	var inData      = "combo=dsCombo";
        	var outData     = "dsTY_TYPE=combo0";
        	var strArg      = "";
        	var callBackFnc = "fnCallback";

        	this.gfnTransaction( strSvcId , 	// transaction을 구분하기 위한 svc id값
        						strSvcType , 	// transaction을 요청할 구분
        						inProc,			// Procedure 정보 Dataset 이름
        						inData , 		// 입력값으로 보낼 dataset id , a=b형태로 실제이름과 입력이름을 매칭
        						outData , 		// 처리결과값으로 받을 dataset id, a=b형태로 실제이름과 입력이름을 매칭
        						strArg, 			// 입력갑스로 보낼 arguments, strFormData="20120607"
        						callBackFnc,false); // 통신방법 정의 [생략가능]
        };

        /************************************************************************
         * 파라미터 설정
         ************************************************************************/
        this.fnSetParameter = function() {
        	this.dsDelete = new Dataset();
        	this.dsDelete.addColumn("CD_ACNTUNIT", "string");
        	this.dsDelete.addColumn("TY_GUBUN", "string");
        	this.dsDelete.addColumn("NO_CHASU", "string");
        	this.dsDelete.addColumn("NO_DONG", "string");
        	this.dsDelete.addColumn("NO_FLOOR", "string");
        	this.dsDelete.addColumn("NO_HO", "string");
        	this.dsDelete.addColumn("YM_IMPOSE", "string");
        	this.dsDelete.addColumn("ID_UPDATE", "string");
        	this.dsDelete.addColumn("TY_TYPE", "string");
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
        	else if (this.gfnIsNull(this.dsList.getColumn(0, "TY_TYPE")))
        	{
        		this.fnVaidateCallback = function() {
        			this.divData.form.ccboTY_TYPE.form.TextBox.setFocus();
        		}
        		validate = false;
        		this.gfnAlert("구분을 입력하지 않았습니다.", "fnVaidateCallback");
        	}
        	else if (this.gfnIsNull(this.dsList.getColumn(0, "NO_DONG")))
        	{
        		this.fnVaidateCallback = function() {
        			this.divData.form.ctxtNO_DONG.form.TextBox.setFocus();
        		}
        		validate = false;
        		this.gfnAlert("동을 입력하지 않았습니다.", "fnVaidateCallback");
        	}
        	else if (this.gfnIsNull(this.dsList.getColumn(0, "NO_FLOOR")))
        	{
        		this.fnVaidateCallback = function() {
        			this.divData.form.ctxtNO_FLOOR.form.TextBox.setFocus();
        		}
        		validate = false;
        		this.gfnAlert("층을 입력하지 않았습니다.", "fnVaidateCallback");
        	}
        	else if (this.gfnIsNull(this.dsList.getColumn(0, "NO_HO")))
        	{
        		this.fnVaidateCallback = function() {
        			this.divData.form.ctxtNO_HO.form.TextBox.setFocus();
        		}
        		validate = false;
        		this.gfnAlert("호를 입력하지 않았습니다.", "fnVaidateCallback");
        	}
        	else if (this.gfnIsNull(this.dsList.getColumn(0, "YM_IMPOSE")))
        	{
        		this.fnVaidateCallback = function() {
        			this.divData.form.ctclYM_IMPOSE.form.TextBox.setFocus();
        		}
        		validate = false;
        		this.gfnAlert("부과년월을 입력하지 않았습니다.", "fnVaidateCallback");
        	}

        	return validate;
        };

        /************************************************************************
         * 코드파인드 이벤트
         ************************************************************************/
        this.fnBeforeUserDataSetParam = function(id, dsUserParam, nrow) {
        	if (id == "ccfCD_ACNTUNIT") {
        		dsUserParam.setColumn(nrow, "FLAG", "A");
        		dsUserParam.setColumn(nrow, "CD_DEPT", this.AuthClient.CD_DEPT);
        		dsUserParam.setColumn(nrow, "ID_USER", this.AuthClient.ID_USER);
        		dsUserParam.setColumn(nrow, "ID_GROUP", this.FormInfo.ID_GROUP);
        		dsUserParam.setColumn(nrow, "GR_SEARCH", this.FormInfo.GR_SEARCH);
        		dsUserParam.setColumn(nrow, "YN_TOTALCHASU", "");
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
        			this.fnCallback_callback = function()
        			{
        				this.getParentContext().close(true);
        			}

        			var msg = "임대료가 취소되었습니다. \n"
        					+ "사업지 : " + this.dsList.getColumn(0, "DS_ACNTUNIT") + "\n"
        					+ "동층호 : " + this.dsList.getColumn(0, "NO_DONG") + " 동 "
        					+ this.dsList.getColumn(0, "NO_FLOOR") + " 층 "
        					+ this.dsList.getColumn(0, "NO_HO") + " 호 " + "\n"
        					+ "부과년월 : " + this.dsList.getColumn(0, "YM_IMPOSE");

        			this.gfnAlert(msg, "fnCallback_callback");

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
        	var msg = this.dsList.getColumn(0, "NO_DONG") + " 동 "
        	        + this.dsList.getColumn(0, "NO_FLOOR") + " 층 "
        			+ this.dsList.getColumn(0, "NO_HO") + " 호 "
        			+ this.dsList.getColumn(0, "YM_IMPOSE") + "월분 임대료를 취소하시겠습니까? ";
        	this.gfnConfirm(msg, "fnOKConfirm");
        };

        this.fnOKConfirm = function(strId, val)
        {
        	if(val == true)
        	{
        		if(!this.fnSaveValidate()) return;
        		this.fnSave();
        	}
        }

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
        	param.FLAG		  = "1";
        	this.gfnFormOpen(this.FormInfo.CD_MODULE, "DRI_DONGHOCONTRACT", "fnDonghoPopupCallback", param);
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

        this.fnSave = function()
        {
        	this.dsDelete.clearData();
        	var nrow = this.dsDelete.addRow();

        	this.dsDelete.setColumn(nrow, "CD_ACNTUNIT", this.dsList.getColumn(0, "CD_ACNTUNIT").substr(0,6));
        	this.dsDelete.setColumn(nrow, "TY_GUBUN", this.dsList.getColumn(0, "CD_ACNTUNIT").substr(6,1));
        	this.dsDelete.setColumn(nrow, "NO_CHASU", this.dsList.getColumn(0, "CD_ACNTUNIT").substr(7,2));
        	this.dsDelete.setColumn(nrow, "NO_DONG", this.dsList.getColumn(0, "NO_DONG"));
        	this.dsDelete.setColumn(nrow, "NO_FLOOR", this.dsList.getColumn(0, "NO_FLOOR"));
        	this.dsDelete.setColumn(nrow, "NO_HO", this.dsList.getColumn(0, "NO_HO"));
        	this.dsDelete.setColumn(nrow, "YM_IMPOSE", this.dsList.getColumn(0, "YM_IMPOSE"));
        	this.dsDelete.setColumn(nrow, "ID_UPDATE", this.AuthClient.ID_USER);
        	this.dsDelete.setColumn(nrow, "TY_TYPE", this.dsList.getColumn(0, "TY_TYPE"));

        	var strSvcId    = "save";
        	var strSvcType  = "save";
        	var inProc		= "_dsProc";
        	var inData      = "delete=dsDelete";
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
        }

        this.divData_ctxtNO_DONG_onkillfocus = function(obj,e) {
        	if (this.gfnIsNull(this.dsList.getColumn(0, "NO_DONG"))) return;
        	if (nexacro.isNumeric(this.dsList.getColumn(0, "NO_DONG"))) {
        		this.dsList.setColumn(0, "NO_DONG", this.dsList.getColumn(0, "NO_DONG").padLeft(4, "0"));
        	}
        };


        this.divData_ctxtNO_FLOOR_onkillfocus = function(obj,e) {
        	if (this.gfnIsNull(this.dsList.getColumn(0, "NO_FLOOR"))) return;
        	if (nexacro.isNumeric(this.dsList.getColumn(0, "NO_FLOOR"))) {
        		this.dsList.setColumn(0, "NO_FLOOR", this.dsList.getColumn(0, "NO_FLOOR").padLeft(2, "0"));
        	}
        };

        this.divData_ctxtNO_HO_onkillfocus = function(obj,e) {
        	if (this.gfnIsNull(this.dsList.getColumn(0, "NO_HO"))) return;
        	if (nexacro.isNumeric(this.dsList.getColumn(0, "NO_HO"))) {
        		this.dsList.setColumn(0, "NO_HO", this.dsList.getColumn(0, "NO_HO").padLeft(3, "0"));
        	}
        };

        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.form_onload,this);
            this.divData.form.ctxtNO_DONG.addEventHandler("onkillfocus",this.divData_ctxtNO_DONG_onkillfocus,this);
            this.divData.form.cbtnNO_DONGHO.addEventHandler("onclick",this.divData_cbtnNO_DONGHO_onclick,this);
            this.divData.form.btnOK.addEventHandler("onclick",this.btnOK_onclick,this);
            this.divData.form.btnCANCLE.addEventHandler("onclick",this.btnCANCLE_onclick,this);
            this.dsList.addEventHandler("onvaluechanged",this.dsList_onvaluechanged,this);
            this.dsTY_TYPE.addEventHandler("onvaluechanged",this.dsList_onvaluechanged,this);
        };
        this.loadIncludeScript("DLC_PERLEASEIMPOSECANCEL.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
