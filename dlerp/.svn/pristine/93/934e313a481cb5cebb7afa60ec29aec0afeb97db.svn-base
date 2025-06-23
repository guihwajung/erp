(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("DRB_DLGCANCEL");
            this.set_titletext("");
            this.getSetter("maxwidth").set("400");
            this.getSetter("maxheight").set("400");
            if (Form == this.constructor)
            {
                this._setFormPosition(580,380);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("_dsProc", this);
            obj._setContents("<ColumnInfo><Column id=\"TARGET\" type=\"STRING\" size=\"256\"/><Column id=\"SP\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"TARGET\">update</Col><Col id=\"SP\">DRBPR_AGREEMENT_CHANGE</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsData", this);
            obj._setContents("<ColumnInfo><Column id=\"CD_ACNTUNIT\" type=\"STRING\" size=\"256\"/><Column id=\"DS_ACNTUNIT\" type=\"STRING\" size=\"256\"/><Column id=\"TY_NAPIP\" type=\"STRING\" size=\"256\"/><Column id=\"DS_NAPIP\" type=\"STRING\" size=\"256\"/><Column id=\"NO_NAPCHA\" type=\"STRING\" size=\"256\"/><Column id=\"DT_STARTAGREE\" type=\"STRING\" size=\"256\"/><Column id=\"DT_ENDAGREE\" type=\"STRING\" size=\"256\"/><Column id=\"DT_STARTAGREE_CHG\" type=\"STRING\" size=\"256\"/><Column id=\"DT_ENDAGREE_CHG\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row/></Rows>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Div("divData","0","0",null,"300","0",null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_cssclass("div_DATA_Bg");
            obj.set_text("");
            this.addChild(obj.name, obj);

            obj = new Static("staTITLE","0","13","97.42%","20",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("0");
            obj.set_cssclass("sta_TITLE_Bg");
            obj.set_textAlign("left");
            obj.set_text("약정일자변경");
            this.divData.addChild(obj.name, obj);

            obj = new Static("staText","10","staTITLE:5",null,"20","0",null,null,null,null,null,this.divData.form);
            obj.set_taborder("1");
            obj.set_text("약정일자를 납입구분, 차수별로 일괄변경합니다.");
            this.divData.addChild(obj.name, obj);

            obj = new Static("staCD_ACNTUNIT","0","staText:5","130","30",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("2");
            obj.set_text("사업지코드");
            obj.set_cssclass("sta_WF_tablelabel");
            obj.set_textAlign("right");
            this.divData.addChild(obj.name, obj);

            obj = new Static("staDS_NAPIP","0","staCD_ACNTUNIT:-1","130","30",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("3");
            obj.set_text("납입구분|차수");
            obj.set_cssclass("sta_WF_tablelabel");
            obj.set_textAlign("right");
            this.divData.addChild(obj.name, obj);

            obj = new Static("staDT_AGREE","0","staDS_NAPIP:-1","130","30",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("4");
            obj.set_text("변경전 약정일자");
            obj.set_cssclass("sta_WF_tablelabel");
            obj.set_textAlign("right");
            this.divData.addChild(obj.name, obj);

            obj = new Static("staDT_AGREE_CHG","0","staDT_AGREE:-1","130","30",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("5");
            obj.set_text("변경후 약정일자");
            obj.set_cssclass("sta_WF_tablelabel");
            obj.set_textAlign("right");
            this.divData.addChild(obj.name, obj);

            obj = new Static("staBgCD_ACNTUNIT","staCD_ACNTUNIT:-1","staText:5",null,"30","0",null,null,null,null,null,this.divData.form);
            obj.set_taborder("6");
            obj.set_cssclass("sta_WF_tablebg");
            this.divData.addChild(obj.name, obj);

            obj = new Static("staBgDS_NAPIP","staDS_NAPIP:-1","staBgCD_ACNTUNIT:-1",null,"30","0",null,null,null,null,null,this.divData.form);
            obj.set_taborder("7");
            obj.set_cssclass("sta_WF_tablebg");
            this.divData.addChild(obj.name, obj);

            obj = new Static("staBgDT_AGREE","staDT_AGREE:-1","staBgDS_NAPIP:-1",null,"30","0",null,null,null,null,null,this.divData.form);
            obj.set_taborder("8");
            obj.set_cssclass("sta_WF_tablebg");
            this.divData.addChild(obj.name, obj);

            obj = new Static("staBgDT_AGREE_CHG","staDT_AGREE_CHG:-1","staBgDT_AGREE:-1",null,"30","0",null,null,null,null,null,this.divData.form);
            obj.set_taborder("9");
            obj.set_cssclass("sta_WF_tablebg");
            this.divData.addChild(obj.name, obj);

            obj = new Div("ccfCD_ACNTUNIT","staCD_ACNTUNIT:5","staText:10",null,"20","10",null,"200",null,null,null,this.divData.form);
            obj.getSetter("CodeFindName").set("DRX_CFACNTUNIT");
            obj.getSetter("CDTextWidth").set("90");
            obj.set_taborder("10");
            obj.set_url("cmm::cmmCodeFind.xfdl");
            this.divData.addChild(obj.name, obj);

            obj = new Edit("ctxtDS_NAPIP","staDS_NAPIP:5","ccfCD_ACNTUNIT:9","120","20",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("11");
            obj.set_value("");
            obj.set_readonly("true");
            this.divData.addChild(obj.name, obj);

            obj = new Edit("ctxtNO_NAPCHA","ctxtDS_NAPIP:3","ccfCD_ACNTUNIT:9","80","20",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("12");
            obj.set_value("");
            obj.set_readonly("true");
            this.divData.addChild(obj.name, obj);

            obj = new Div("ccfAGREE","ctxtNO_NAPCHA:5","ccfCD_ACNTUNIT:9","25","20",null,null,null,null,null,null,this.divData.form);
            obj.getSetter("CodeFindName").set("DRX_CFAgreement_Change_CodeFind");
            obj.getSetter("CDTextWidth").set("0");
            obj.getSetter("DSTextWidth").set("0");
            obj.set_taborder("13");
            obj.set_url("cmm::cmmCodeFind.xfdl");
            this.divData.addChild(obj.name, obj);

            obj = new Calendar("ctclDT_STARTAGREE","staDT_AGREE:5","ctxtDS_NAPIP:9","105","20",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("14");
            obj.set_dateformat("yyyy-MM-dd");
            obj.set_editformat("yyyyMMdd");
            obj.set_autoselect("true");
            obj.set_value("");
            obj.set_readonly("true");
            this.divData.addChild(obj.name, obj);

            obj = new Static("staDT_AGREE_range","ctclDT_STARTAGREE:5","ctxtDS_NAPIP:9","10","20",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("15");
            obj.set_text("~");
            this.divData.addChild(obj.name, obj);

            obj = new Calendar("ctclDT_ENDAGREE","staDT_AGREE_range:5","ctxtDS_NAPIP:9","105","20",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("16");
            obj.set_dateformat("yyyy-MM-dd");
            obj.set_editformat("yyyyMMdd");
            obj.set_autoselect("true");
            obj.set_value("");
            obj.set_readonly("true");
            this.divData.addChild(obj.name, obj);

            obj = new Calendar("ctclDT_STARTAGREE_CHG","staDT_AGREE_CHG:5","ctclDT_STARTAGREE:9","105","20",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("17");
            obj.set_dateformat("yyyy-MM-dd");
            obj.set_editformat("yyyyMMdd");
            obj.set_autoselect("true");
            obj.set_value("");
            this.divData.addChild(obj.name, obj);

            obj = new Static("staDT_AGREE_CHG_range","ctclDT_STARTAGREE_CHG:5","ctclDT_STARTAGREE:9","10","20",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("18");
            obj.set_text("~");
            this.divData.addChild(obj.name, obj);

            obj = new Calendar("ctclDT_ENDAGREE_CHG","staDT_AGREE_CHG_range:5","ctclDT_STARTAGREE:9","105","20",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("19");
            obj.set_dateformat("yyyy-MM-dd");
            obj.set_editformat("yyyyMMdd");
            obj.set_autoselect("true");
            obj.set_value("");
            this.divData.addChild(obj.name, obj);

            obj = new Static("staTextBottom","30","staDT_AGREE_CHG:5",null,"40","0",null,null,null,null,null,this.divData.form);
            obj.set_taborder("20");
            obj.set_text("해당 납입구분|차수에 수납을 한 계약자가 있으면\r\n해당계약자는 약정일자를 변경하지 않습니다.");
            this.divData.addChild(obj.name, obj);

            obj = new Button("btnConf","30%","staTextBottom:20","60","30",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("21");
            obj.set_text("확인");
            obj.set_cssclass("btnExt");
            this.divData.addChild(obj.name, obj);

            obj = new Button("btnCancel","55%","staTextBottom:20","60","30",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("22");
            obj.set_text("취소");
            obj.set_cssclass("btnExt");
            this.divData.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this
            obj = new Layout("default","",this._adjust_width,this._adjust_height,this,function(p){});
            this.addLayout(obj.name, obj);
            
            // BindItem Information
            obj = new BindItem("item0","divData.form.ccfCD_ACNTUNIT.form.CDTextBox","value","dsData","CD_ACNTUNIT");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item1","divData.form.ccfCD_ACNTUNIT.form.DSTextBox","value","dsData","DS_ACNTUNIT");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item2","divData.form.ctxtDS_NAPIP","value","dsData","DS_NAPIP");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item3","divData.form.ctxtNO_NAPCHA","value","dsData","NO_NAPCHA");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item4","divData.form.ctclDT_STARTAGREE","value","dsData","DT_STARTAGREE");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item5","divData.form.ctclDT_ENDAGREE","value","dsData","DT_ENDAGREE");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item6","divData.form.ctclDT_STARTAGREE_CHG","value","dsData","DT_STARTAGREE_CHG");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item7","divData.form.ctclDT_ENDAGREE_CHG","value","dsData","DT_ENDAGREE_CHG");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item8","divData.form.ccfAGREE.form.CDTextBox","value","dsData","TY_NAPIP");
            this.addChild(obj.name, obj);
            obj.bind();
            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {
            this._addPreloadList("fdl","cmm::cmmCodeFind.xfdl");
        };
        
        // User Script
        this.registerScript("DRB_AGREEMENT_CHANGE.xfdl", function() {
        this.objApp = this.gfnGetApplication();

        this.form_onload = function(obj,e)
        {
        	// -- 필수 -------------------//
        	this.gfnFormOnLoad(this);
        	this.gfnFormInfo(this);
        	// ---------------------------//

        	this.fnSetButton();
        	this.fnSetExtendButton();
        	this.fnSetVariable();
        	this.fnSetEvent();
        	this.fnSetParameter();

        };

        /************************************************************************
         * 버튼 설정 : 화면(Tab) 전환시 마다 호출
         * 서브버튼 사용 및 공통버튼 강제 제어시 여기서 처리
         ************************************************************************/
        this.fnSetButton = function() {
        }

        /************************************************************************
         * 확장 버튼 : 화면별 버튼 설정 ID, function 연결 (화면버튼관리)
         ************************************************************************/
        this.fnSetExtendButton = function() {

        };

        /************************************************************************
         * 변수 선언
         ************************************************************************/
        this.fnSetVariable = function() {

        };

        /************************************************************************
         * 이벤트 설정
         ************************************************************************/
        this.fnSetEvent = function() {
        	this.divData.form.ccfCD_ACNTUNIT.BeforeUserDataSetParam = "fnBeforeUserDataSetParam";
        	this.divData.form.ccfAGREE.BeforeUserDataSetParam = "fnBeforeUserDataSetParam";
        	this.divData.form.ccfAGREE.AfterCDTextChanged = "fnAfterCDTextChanged";
        };

        /************************************************************************
         * 파라미터 설정
         ************************************************************************/
        this.fnSetParameter = function() {
        	this.dsUpdate = new Dataset();
        	this.dsUpdate.addColumn("CD_ACNTUNIT", "string");
        	this.dsUpdate.addColumn("TY_GUBUN", "string");
        	this.dsUpdate.addColumn("NO_CHASU", "string");
        	this.dsUpdate.addColumn("TY_NAPIP", "string");
        	this.dsUpdate.addColumn("NO_NAPCHA", "string");
        	this.dsUpdate.addColumn("DT_STARTAGREE", "string");
        	this.dsUpdate.addColumn("DT_ENDAGREE", "string");
        	this.dsUpdate.addColumn("DT_STARTAGREE_CHG", "string");
        	this.dsUpdate.addColumn("DT_ENDAGREE_CHG", "string");
        	this.dsUpdate.addColumn("ID_UPDATE", "string");
        }

        /************************************************************************
         * 컨트롤 이벤트
         ************************************************************************/

         /************************************************************************
         * 콤보 이벤트
         ************************************************************************/


        /************************************************************************
         * Validate
         ************************************************************************/
        this.fnSaveValidate = function() {
        	var validate = true;

        	if (this.gfnIsNull(this.dsData.getColumn(0, "CD_ACNTUNIT"))) {
        		validate = false;
        		this.fnVaidateCallback = function() {
        			this.divData.form.ccfCD_ACNTUNIT.form.CDTextBox.setFocus();
        		}
        		this.gfnAlert("사업지코드를 입력하지 않았습니다.", "fnVaidateCallback");
        	}
        	else if (this.gfnIsNull(this.dsData.getColumn(0, "DS_NAPIP"))) {
        		validate = false;
        		this.fnVaidateCallback = function() {
        			this.divData.form.ctxtDS_NAPIP.setFocus();
        		}
        		this.gfnAlert("납입구분이 선택되지 않았습니다.", "fnVaidateCallback");
        	}
        	else if (this.gfnIsNull(this.dsData.getColumn(0, "DT_STARTAGREE"))
        		 ||  this.gfnIsNull(this.dsData.getColumn(0, "DT_ENDAGREE")))
        	{
        		validate = false;
        		this.fnVaidateCallback = function() {
        			this.divData.form.ctclDT_STARTAGREE.setFocus();
        		}
        		this.gfnAlert("변경전 약정일자가 선택되지 않았습니다.", "fnVaidateCallback");
        	}
        	else if (this.gfnIsNull(this.dsData.getColumn(0, "DT_STARTAGREE_CHG"))
        		 ||  this.gfnIsNull(this.dsData.getColumn(0, "DT_ENDAGREE_CHG")))
        	{
        		validate = false;
        		this.fnVaidateCallback = function() {
        			this.divData.form.ctclDT_STARTAGREE_CHG.setFocus();
        		}
        		this.gfnAlert("변경후 약정일자가 입력되지 않았습니다.", "fnVaidateCallback");
        	}
        	else if (this.gfnGetDiffDate(this.dsData.getColumn(0, "DT_STARTAGREE_CHG"), this.dsData.getColumn(0, "DT_ENDAGREE_CHG")) < 0)
        	{
        		validate = false;
        		this.fnVaidateCallback = function() {
        			this.divData.form.ctclDT_STARTAGREE_CHG.setFocus();
        		}
        		this.gfnAlert("변경후 약정일자가 잘못 입력되었습니다.", "fnVaidateCallback");
        	}

        	return validate;
        }
        /************************************************************************
         * 콜백 이벤트
         ************************************************************************/
        /*
         *	콜백 처리
         */
        this.fnCallback = function(svcID, errorCode, errorMsg)
        {
        	if (svcID == "save") {
        		if(errorCode == 0){
        			this.getParentContext().close(true);
        		}else{
        			this.gfnAlert(errorMsg);
        		}
        	}
        }

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
        	else if (id == "ccfAGREE") {
        		if(this.gfnIsNull(this.dsData.getColumn(0, "CD_ACNTUNIT")))
        		{
        			this.gfnAlert("사업지코드를 먼저 입력해주세요.");
        			return false;
        		}

        		dsUserParam.setColumn(nrow, "CD_ACNTUNIT", this.dsData.getColumn(0, "CD_ACNTUNIT"));
        	}

        	return true;
        }

        this.fnAfterCDTextChanged = function(id, codeFindData) {
        	if(id == "ccfAGREE") {
        		var arr = codeFindData;
        		if(arr.length > 0 ){
        			this.dsData.setColumn(0, "DS_NAPIP", arr[0]["DS_NAPIP"]);
        			this.dsData.setColumn(0, "NO_NAPCHA", arr[0]["NO_NAPCHA"]);
        			this.dsData.setColumn(0, "DT_STARTAGREE", arr[0]["DT_STARTAGREE"].replaceAll("-",""));
        			this.dsData.setColumn(0, "DT_ENDAGREE", arr[0]["DT_ENDAGREE"].replaceAll("-",""));
        			this.dsData.setColumn(0, "DT_STARTAGREE_CHG", arr[0]["DT_STARTAGREE"].replaceAll("-",""));
        			this.dsData.setColumn(0, "DT_ENDAGREE_CHG", arr[0]["DT_ENDAGREE"].replaceAll("-",""));
        		}
        	}
        }

        /************************************************************************
         * 그리드 이벤트
         ************************************************************************/

        /************************************************************************
         * 기타 이벤트
         ************************************************************************/
        //확인버튼
        this.btnConf_onclick = function(obj,e)
        {
        	if(!this.fnSaveValidate()) return;

        	this.dsUpdate.clearData();
        	var nrow = this.dsUpdate.addRow();
        	this.dsUpdate.setColumn(nrow, "CD_ACNTUNIT", this.dsData.getColumn(0, "CD_ACNTUNIT").substr(0,6));
        	this.dsUpdate.setColumn(nrow, "TY_GUBUN", this.dsData.getColumn(0, "CD_ACNTUNIT").substr(6,1));
        	this.dsUpdate.setColumn(nrow, "NO_CHASU", this.dsData.getColumn(0, "CD_ACNTUNIT").substr(7,2));
        	this.dsUpdate.setColumn(nrow, "TY_NAPIP", this.dsData.getColumn(0, "TY_NAPIP"));
        	this.dsUpdate.setColumn(nrow, "NO_NAPCHA", this.dsData.getColumn(0, "NO_NAPCHA"));
        	this.dsUpdate.setColumn(nrow, "DT_STARTAGREE", this.dsData.getColumn(0, "DT_STARTAGREE").replaceAll("-",""));
        	this.dsUpdate.setColumn(nrow, "DT_ENDAGREE", this.dsData.getColumn(0, "DT_ENDAGREE").replaceAll("-",""));
        	this.dsUpdate.setColumn(nrow, "DT_STARTAGREE_CHG", this.dsData.getColumn(0, "DT_STARTAGREE_CHG").replaceAll("-",""));
        	this.dsUpdate.setColumn(nrow, "DT_ENDAGREE_CHG", this.dsData.getColumn(0, "DT_ENDAGREE_CHG").replaceAll("-",""));
        	this.dsUpdate.setColumn(nrow, "ID_UPDATE", this.AuthClient.ID_USER);

        	var strSvcId    = "save";
        	var strSvcType  = "save";
        	var inProc		= "_dsProc";
        	var inData      = "update=dsUpdate";
        	var outData     = "";
        	var strArg      = "";
        	var callBackFnc = "fnCallback";

        	this.gfnTransaction( strSvcId , 	// transaction을 구분하기 위한 svc id값
        						strSvcType , 	// transaction을 요청할 구분
        						inProc,			// Procedure 정보 Dataset 이름
        						inData , 		// 입력값으로 보낼 dataset id , a=b형태로 실제이름과 입력이름을 매칭
        						outData , 		// 처리결과값으로 받을 dataset id, a=b형태로 실제이름과 입력이름을 매칭
        						strArg, 		// 입력값으로 보낼 arguments, strFormData="20120607"
        						callBackFnc); // 통신방법 정의 [생략가능]
        };


        //취소버튼
        this.btnCancel_onclick = function(obj,e)
        {
        	this.getParentContext().close(false);
        };

        this.dsData_onvaluechanged = function(obj,e)
        {
        	if(e.oldvalue != e.newvalue)
        	{
        		if(e.columnid == "CD_ACNTUNIT")
        		{
        			this.dsData.setColumn(0, "DS_NAPIP", "");
        			this.dsData.setColumn(0, "NO_NAPCHA", "");
        			this.dsData.setColumn(0, "DT_STARTAGREE", "");
        			this.dsData.setColumn(0, "DT_ENDAGREE", "");
        			this.dsData.setColumn(0, "DT_STARTAGREE_CHG", "");
        			this.dsData.setColumn(0, "DT_ENDAGREE_CHG", "");
        		}
        	}
        };

        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.form_onload,this);
            this.divData.form.btnConf.addEventHandler("onclick",this.btnConf_onclick,this);
            this.divData.form.btnCancel.addEventHandler("onclick",this.btnCancel_onclick,this);
            this.dsData.addEventHandler("onvaluechanged",this.dsData_onvaluechanged,this);
        };
        this.loadIncludeScript("DRB_AGREEMENT_CHANGE.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
