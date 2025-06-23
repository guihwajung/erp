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
            this.set_titletext("임대료 수납");
            this.getSetter("maxwidth").set("450");
            this.getSetter("maxheight").set("550");
            if (Form == this.constructor)
            {
                this._setFormPosition(450,400);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("dsList", this);
            obj._setContents("<ColumnInfo><Column id=\"CD_ACNTUNIT\" type=\"STRING\" size=\"256\"/><Column id=\"NO_DONG\" type=\"STRING\" size=\"256\"/><Column id=\"NO_FLOOR\" type=\"STRING\" size=\"256\"/><Column id=\"NO_HO\" type=\"STRING\" size=\"256\"/><Column id=\"YM_IMPOSE\" type=\"STRING\" size=\"256\"/><Column id=\"CD_GUJA\" type=\"STRING\" size=\"256\"/><Column id=\"TY_GUBUN\" type=\"STRING\" size=\"256\"/><Column id=\"NO_CHASU\" type=\"STRING\" size=\"256\"/><Column id=\"DT_RECEIPT\" type=\"STRING\" size=\"256\"/><Column id=\"AM_RECEIPT\" type=\"STRING\" size=\"256\"/><Column id=\"TY_SUNAP\" type=\"STRING\" size=\"256\"/><Column id=\"DS_ACNTUNIT\" type=\"STRING\" size=\"256\"/><Column id=\"DS_GUJA\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row/></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("_dsProc", this);
            obj._setContents("<ColumnInfo><Column id=\"TARGET\" type=\"STRING\" size=\"256\"/><Column id=\"SP\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"TARGET\">save</Col><Col id=\"SP\">DLCPR_BTN_SUNAP</Col></Row><Row><Col id=\"SP\">DZXPR_COMBO_SELECT</Col><Col id=\"TARGET\">combo</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsResult", this);
            obj._setContents("");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsTY_GUBUN", this);
            obj._setContents("<ColumnInfo><Column id=\"CD_CODE\" type=\"STRING\" size=\"256\"/><Column id=\"DS_CODE\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Div("divData","0","0",null,null,"0","0",null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_cssclass("div_DATA_Bg");
            obj.set_text("");
            this.addChild(obj.name, obj);

            obj = new Static("staTITLE","0","20","100.00%","30",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("0");
            obj.set_text("임대료 수납");
            obj.set_cssclass("sta_TITLE_Bg");
            obj.set_textAlign("left");
            this.divData.addChild(obj.name, obj);

            obj = new Static("sta08","0","staTITLE:5",null,"22","0",null,null,null,null,null,this.divData.form);
            obj.set_taborder("10");
            obj.set_text("수납정보");
            this.divData.addChild(obj.name, obj);

            obj = new Static("sta00","0","198","87","30",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("1");
            obj.set_text("수납일자");
            obj.set_cssclass("sta_WF_tablelabelE");
            this.divData.addChild(obj.name, obj);

            obj = new Static("sta01","86","198",null,"30","0",null,null,null,null,null,this.divData.form);
            obj.set_taborder("2");
            obj.set_cssclass("sta_WF_tablebg");
            obj.set_text("");
            this.divData.addChild(obj.name, obj);

            obj = new Static("sta02","0","227","87","30",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("5");
            obj.set_text("수납금액");
            obj.set_cssclass("sta_WF_tablelabelE");
            this.divData.addChild(obj.name, obj);

            obj = new Static("sta03","86","227",null,"30","0",null,null,null,null,null,this.divData.form);
            obj.set_taborder("6");
            obj.set_cssclass("sta_WF_tablebg");
            obj.set_text("");
            this.divData.addChild(obj.name, obj);

            obj = new Static("sta06","0","256","87","30",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("7");
            obj.set_text("납입계좌");
            obj.set_cssclass("sta_WF_tablelabelE");
            this.divData.addChild(obj.name, obj);

            obj = new Static("sta07","86","256",null,"30","0",null,null,null,null,null,this.divData.form);
            obj.set_taborder("8");
            obj.set_cssclass("sta_WF_tablebg");
            obj.set_text("");
            this.divData.addChild(obj.name, obj);

            obj = new Button("btnOK","134","340","60","27",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("3");
            obj.set_text("확인");
            this.divData.addChild(obj.name, obj);

            obj = new Button("btnCANCEL","btnOK:30","340","60","27",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("4");
            obj.set_text("취소");
            this.divData.addChild(obj.name, obj);

            obj = new Div("cfCD_GUJA","92","261","300","20",null,null,null,null,null,null,this.divData.form);
            obj.getSetter("CodeFindName").set("DRX_CFACCOUNT_CODEFIND_BATCH");
            obj.getSetter("CDTextWidth").set("50");
            obj.set_taborder("9");
            obj.set_url("cmm::cmmCodeFind.xfdl");
            this.divData.addChild(obj.name, obj);

            obj = new Static("sta00_00","0","82","87","30",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("11");
            obj.set_text("사업자명");
            obj.set_cssclass("sta_WF_tablelabel");
            this.divData.addChild(obj.name, obj);

            obj = new Static("sta01_00","86","82",null,"30","0",null,null,null,null,null,this.divData.form);
            obj.set_taborder("13");
            obj.set_cssclass("sta_WF_tablebg");
            obj.set_text("");
            this.divData.addChild(obj.name, obj);

            obj = new Static("sta03_00","86","111",null,"30","0",null,null,null,null,null,this.divData.form);
            obj.set_taborder("14");
            obj.set_cssclass("sta_WF_tablebg");
            obj.set_text("");
            this.divData.addChild(obj.name, obj);

            obj = new Static("sta02_00","0","111","87","30",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("15");
            obj.set_text("동층호");
            obj.set_cssclass("sta_WF_tablelabelE");
            this.divData.addChild(obj.name, obj);

            obj = new Div("cfCD_ACNTUNIT","92","87","300","20",null,null,null,null,null,null,this.divData.form);
            obj.getSetter("CodeFindName").set("DLX_CFLEASESITE_CODEFIND");
            obj.getSetter("CDTextWidth").set("70");
            obj.set_taborder("12");
            obj.set_url("cmm::cmmCodeFind.xfdl");
            this.divData.addChild(obj.name, obj);

            obj = new Edit("txtNO_DONG","92","116","40","20",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("16");
            obj.set_maxlength("4");
            this.divData.addChild(obj.name, obj);

            obj = new Edit("txtNO_FLOOR","137","116","30","20",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("17");
            obj.set_maxlength("2");
            this.divData.addChild(obj.name, obj);

            obj = new Edit("txtNO_HO","172","116","40","20",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("18");
            obj.set_maxlength("3");
            this.divData.addChild(obj.name, obj);

            obj = new Button("btnNO_DONGHO","217","116","25","20",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("19");
            obj.set_cssclass("btn_CF_Search");
            this.divData.addChild(obj.name, obj);

            obj = new Static("sta04_00","0","140","87","30",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("20");
            obj.set_text("구 분");
            obj.set_cssclass("sta_WF_tablelabelE");
            this.divData.addChild(obj.name, obj);

            obj = new Static("sta07_00","86","140",null,"30","0",null,null,null,null,null,this.divData.form);
            obj.set_taborder("21");
            obj.set_cssclass("sta_WF_tablebg");
            obj.set_text("");
            this.divData.addChild(obj.name, obj);

            obj = new Static("sta04_00_00","0","169","87","30",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("22");
            obj.set_text("부과년월");
            obj.set_cssclass("sta_WF_tablelabelE");
            this.divData.addChild(obj.name, obj);

            obj = new Static("sta07_00_00","86","169",null,"30","0",null,null,null,null,null,this.divData.form);
            obj.set_taborder("23");
            obj.set_cssclass("sta_WF_tablebg");
            obj.set_text("");
            this.divData.addChild(obj.name, obj);

            obj = new Calendar("tclDT_RECEIPT","92","203","105","20",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("24");
            obj.set_dateformat("yyyy-MM-dd");
            obj.set_editformat("yyyyMMdd");
            obj.set_autoselect("true");
            this.divData.addChild(obj.name, obj);

            obj = new MaskEdit("txtAM_RECEIPT","92","232","120","20",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("25");
            obj.set_format("#,##0");
            this.divData.addChild(obj.name, obj);

            obj = new Combo("ccboTY_GUBUN","92","145","111","20",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("26");
            obj.set_innerdataset("dsTY_GUBUN");
            obj.set_datacolumn("DS_CODE");
            obj.set_codecolumn("CD_CODE");
            obj.set_text("N");
            obj.set_value("N");
            obj.set_index("0");
            this.divData.addChild(obj.name, obj);

            obj = new Div("tclYM_IMPOSE","92","174","98","20",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("27");
            obj.set_url("cmm::cmmCalMM.xfdl");
            obj.set_enableevent("true");
            obj.set_text("");
            this.divData.addChild(obj.name, obj);

            obj = new Static("sta22","217","232","20","20",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("28");
            obj.set_text("원");
            this.divData.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this
            obj = new Layout("default","",this._adjust_width,this._adjust_height,this,function(p){});
            this.addLayout(obj.name, obj);
            
            // BindItem Information
            obj = new BindItem("item3","divData.form.cfCD_GUJA.form.CDTextBox","value","dsList","CD_GUJA");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item4","divData.form.cfCD_GUJA.form.DSTextBox","value","dsList","DS_GUJA");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item0","divData.form.cfCD_ACNTUNIT.form.CDTextBox","value","dsList","CD_ACNTUNIT");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item1","divData.form.cfCD_ACNTUNIT.form.DSTextBox","value","dsList","DS_ACNTUNIT");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item2","divData.form.txtNO_DONG","value","dsList","NO_DONG");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item5","divData.form.txtNO_FLOOR","value","dsList","NO_FLOOR");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item6","divData.form.txtNO_HO","value","dsList","NO_HO");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item9","divData.form.tclDT_RECEIPT","value","dsList","DT_RECEIPT");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item10","divData.form.txtAM_RECEIPT","value","dsList","AM_RECEIPT");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item11","divData.form.tclYM_IMPOSE","value","dsList","YM_IMPOSE");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item12","divData.form.ccboTY_GUBUN","value","dsList","TY_SUNAP");
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
        this.registerScript("DLC_DLGSUNAP.xfdl", function() {
        this.objApp = this.gfnGetApplication();

        this.saveFlag = "";

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

        	this.dsList.setColumn(0, "CD_ACNTUNIT", this.getOwnerFrame().CD_ACNTUNIT);
        	this.dsList.setColumn(0, "DS_ACNTUNIT", this.getOwnerFrame().DS_ACNTUNIT);
        	this.dsList.setColumn(0, "NO_DONG", this.getOwnerFrame().NO_DONG);
        	this.dsList.setColumn(0, "NO_FLOOR", this.getOwnerFrame().NO_FLOOR);
        	this.dsList.setColumn(0, "NO_HO", this.getOwnerFrame().NO_HO);
        	this.dsList.setColumn(0, "YM_IMPOSE", this.getOwnerFrame().YM_IMPOSE);
        	this.dsList.setColumn(0, "CD_GUJA", this.getOwnerFrame().CD_GUJA);
        	this.dsList.setColumn(0, "AM_RECEIPT", 0);
        };

        /************************************************************************
         * 변수 선언
         ************************************************************************/
        this.fnSetVariable = function() {
        	this.cfCD_ACNTUNIT = this.divData.form.cfCD_ACNTUNIT;
        	this.txtNO_DONG = this.divData.form.txtNO_DONG;
        	this.txtNO_FLOOR = this.divData.form.txtNO_FLOOR;
        	this.txtNO_HO = this.divData.form.txtNO_HO;
        	this.tclDT_RECEIPT = this.divData.form.tclDT_RECEIPT;
        	this.txtAM_RECEIPT = this.divData.form.txtAM_RECEIPT;
        	this.tclYM_IMPOSE= this.divData.form.tclYM_IMPOSE;
        	this.cfCD_GUJA = this.divData.form.cfCD_GUJA;
        };

        /************************************************************************
         * 이벤트 설정
         ************************************************************************/
        this.fnSetEvent = function() {
        	this.cfCD_ACNTUNIT.BeforeUserDataSetParam = "fnBeforeUserDataSetParam";
        	this.cfCD_GUJA.BeforeUserDataSetParam = "fnBeforeUserDataSetParam";
        };

        /************************************************************************
         * 파라미터 설정
         ************************************************************************/
        this.fnSetParameter = function() {
        	this.dsSave = new Dataset();
        	this.dsSave.addColumn("CD_ACNTUNIT", "string");
        	this.dsSave.addColumn("TY_GUBUN", "string");
        	this.dsSave.addColumn("NO_CHASU", "string");
        	this.dsSave.addColumn("NO_DONG", "string");
        	this.dsSave.addColumn("NO_FLOOR", "string");
        	this.dsSave.addColumn("NO_HO", "string");
        	this.dsSave.addColumn("DT_RECEIPT", "string");
        	this.dsSave.addColumn("YM_IMPOSE", "string");
        	this.dsSave.addColumn("AM_RECEIPT", "bigdecimal");
        	this.dsSave.addColumn("CD_GUJA", "string");
        	this.dsSave.addColumn("TY_SUNAP", "string");
        	this.dsSave.addColumn("ID_INSERT", "string");
        }

        /************************************************************************
         * 버튼 이벤트
         ************************************************************************/
        this.fnSave = function() {
        	if (!this.fnSaveValidate()) return;

        	this.dsSave.clearData();
        	this.dsSave.addRow();
        	this.dsSave.setColumn(0, "CD_ACNTUNIT", this.dsList.getColumn(0, "CD_ACNTUNIT").substr(0, 6));
        	this.dsSave.setColumn(0, "TY_GUBUN", this.dsList.getColumn(0, "CD_ACNTUNIT").substr(6, 1));
        	this.dsSave.setColumn(0, "NO_CHASU", this.dsList.getColumn(0, "CD_ACNTUNIT").substr(7, 2));
        	this.dsSave.setColumn(0, "NO_DONG", this.dsList.getColumn(0, "NO_DONG"));
        	this.dsSave.setColumn(0, "NO_FLOOR", this.dsList.getColumn(0, "NO_FLOOR"));
        	this.dsSave.setColumn(0, "NO_HO", this.dsList.getColumn(0, "NO_HO"));
        	this.dsSave.setColumn(0, "DT_RECEIPT", this.dsList.getColumn(0, "DT_RECEIPT"));
        	this.dsSave.setColumn(0, "YM_IMPOSE", this.dsList.getColumn(0, "YM_IMPOSE"));
        	this.dsSave.setColumn(0, "AM_RECEIPT", this.dsList.getColumn(0, "AM_RECEIPT"));
        	this.dsSave.setColumn(0, "CD_GUJA", this.dsList.getColumn(0, "CD_GUJA"));
        	this.dsSave.setColumn(0, "TY_SUNAP", this.dsList.getColumn(0, "TY_SUNAP"));
        	this.dsSave.setColumn(0, "ID_INSERT", this.AuthClient.ID_USER);

        	var strSvcId    = "save";
        	var strSvcType  = "save";
        	var inProc		= "_dsProc";
        	var inData      = "save=dsSave";
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
        };

        /************************************************************************
         * Validate
         ************************************************************************/
        this.fnSaveValidate = function() {
        	if (this.gfnIsNull(this.dsList.getColumn(0, "NO_DONG"))) {
        		this.gfnAlert("동을 입력하지 않았습니다.");
        		return false;
        	}
        	else if (this.gfnIsNull(this.dsList.getColumn(0, "NO_FLOOR"))) {
        		this.gfnAlert("층을 입력하지 않았습니다.");
        		return false;
        	}
        	else if (this.gfnIsNull(this.dsList.getColumn(0, "NO_HO"))) {
        		this.gfnAlert("호를 입력하지 않았습니다.");
        		return false;
        	}

        	if (this.gfnIsNull(this.dsList.getColumn(0, "DT_RECEIPT"))) {
        		this.fnVaidateCallback = function() {
        			this.tclDT_RECEIPT.setFocus();
        		}
        		this.gfnAlert("수납일자가 입력되지 않았습니다.", "fnVaidateCallback");
        		return false;
        	}
        	if (nexacro.toNumber(this.dsList.getColumn(0, "AM_RECEIVED")) == 0) {
        		this.gfnAlert("수납금액이 입력되지 않았습니다.");
        		return false;
        	}
        	if (this.gfnIsNull(this.dsList.getColumn(0, "CD_GUJA"))) {
        		this.fnVaidateCallback = function() {
        			this.cfCD_GUJA.form.CDTextBox.setFocus();
        		}
        		this.gfnAlert("계좌정보가 입력되지 않았습니다.", "fnVaidateCallback");
        		return false;
        	}

        	return true;
        }

        /************************************************************************
         * 코드파인드 이벤트
         ************************************************************************/
        this.fnBeforeUserDataSetParam = function(id, dsUserParam, nrow) {
        	if (id == "cfCD_ACNTUNIT") {
        		dsUserParam.setColumn(nrow, "FLAG", "A");
        		dsUserParam.setColumn(nrow, "CD_DEPT", this.AuthClient.CD_DEPT);
        		dsUserParam.setColumn(nrow, "ID_USER", this.AuthClient.ID_USER);
        		dsUserParam.setColumn(nrow, "ID_GROUP", this.FormInfo.ID_GROUP);
        		dsUserParam.setColumn(nrow, "GR_SEARCH", this.FormInfo.GR_SEARCH);
        		dsUserParam.setColumn(nrow, "YN_TOTALCHASU", "");
        	}
        	else if (id == "cfCD_GUJA") {
        		dsUserParam.setColumn(nrow, "CD_ACNTUNIT", this.dsList.getColumn(0, "CD_ACNTUNIT"));
        		dsUserParam.setColumn(nrow, "YN_OPTION", "N");
        	}
        	return true;
        };

        /************************************************************************
         * 콜백 이벤트
         ************************************************************************/
        this.fnCallback = function(svcID, errorCode, errorMsg) {
        	if (svcID == "save") {
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
        this.btnOK_onclick = function(obj,e) {
        	this.fnSave();
        };

        this.btnCANCEL_onclick = function(obj,e) {
        	this.getParentContext().close(false);
        };

        // 공통코드콤보
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
        	var outData     = "dsTY_GUBUN=combo0";
        	var strArg      = "";
        	var callBackFnc = "fnCallback";

        	this.gfnTransaction( strSvcId , 	// transaction을 구분하기 위한 svc id값
        						strSvcType , 	// transaction을 요청할 구분
        						inProc,			// Procedure 정보 Dataset 이름
        						inData , 		// 입력값으로 보낼 dataset id , a=b형태로 실제이름과 입력이름을 매칭
        						outData , 		// 처리결과값으로 받을 dataset id, a=b형태로 실제이름과 입력이름을 매칭
        						strArg, 		// 입력갑스로 보낼 arguments, strFormData="20120607"
        						callBackFnc); 	// 통신방법 정의 [생략가능]
        };

        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.form_onload,this);
            this.divData.form.btnOK.addEventHandler("onclick",this.btnOK_onclick,this);
            this.divData.form.btnCANCEL.addEventHandler("onclick",this.btnCANCEL_onclick,this);
            this.divData.form.txtNO_DONG.addEventHandler("onkillfocus",this.divData_txtNO_DONG_onkillfocus,this);
            this.divData.form.txtNO_DONG.addEventHandler("onkeyup",this.divData_txt_onkeyup,this);
            this.divData.form.txtNO_FLOOR.addEventHandler("onkillfocus",this.divData_txtNO_FLOOR_onkillfocus,this);
            this.divData.form.txtNO_FLOOR.addEventHandler("onkeyup",this.divData_txt_onkeyup,this);
            this.divData.form.txtNO_HO.addEventHandler("onkillfocus",this.divData_txtNO_HO_onkillfocus,this);
            this.divData.form.txtNO_HO.addEventHandler("onkeyup",this.divData_txt_onkeyup,this);
            this.divData.form.btnNO_DONGHO.addEventHandler("onclick",this.divSearch_btnNO_DONGHO_onclick,this);
            this.divData.form.sta04_00.addEventHandler("onclick",this.divData_sta04_00_onclick,this);
            this.divData.form.tclDT_RECEIPT.addEventHandler("onchanged",this.fnSearchInit,this);
            this.divData.form.ccboTY_GUBUN.addEventHandler("onitemchanged",this.fnSearchInit,this);
            this.dsList.addEventHandler("onvaluechanged",this.dsList_onvaluechanged,this);
        };
        this.loadIncludeScript("DLC_DLGSUNAP.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
