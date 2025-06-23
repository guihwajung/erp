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
            if (Form == this.constructor)
            {
                this._setFormPosition(420,220);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("dsData", this);
            obj._setContents("<ColumnInfo><Column id=\"DS_CONTMETHOD\" type=\"STRING\" size=\"256\"/><Column id=\"NO_FORM\" type=\"STRING\" size=\"256\"/><Column id=\"NM_DS_CONTMETHOD\" type=\"STRING\" size=\"256\"/><Column id=\"NM_FORM\" type=\"STRING\" size=\"256\"/><Column id=\"YN_PARTNERSIGN\" type=\"STRING\" size=\"256\"/><Column id=\"CD_PARTNERSIGN\" type=\"STRING\" size=\"256\"/><Column id=\"DS_PARTNERSIGN\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"DS_CONTMETHOD\"/><Col id=\"NO_FORM\"/><Col id=\"NM_FORM\"/><Col id=\"NM_DS_CONTMETHOD\"/><Col id=\"YN_PARTNERSIGN\"/><Col id=\"CD_PARTNERSIGN\"/></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("_dsProc", this);
            obj._setContents("<ColumnInfo><Column id=\"TARGET\" type=\"STRING\" size=\"256\"/><Column id=\"SP\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"TARGET\">combo</Col><Col id=\"SP\">DZXPR_COMBO_COMMON_SAVE_02</Col></Row></Rows>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Div("divData","0","0",null,null,"0","0",null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_cssclass("div_DATA_Bg");
            obj.set_text("");
            this.addChild(obj.name, obj);

            obj = new Static("staTITLE","0","0","100%","30",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("0");
            obj.set_text("계약종류선택");
            obj.set_cssclass("sta_TITLE_Bg");
            obj.set_textAlign("left");
            this.divData.addChild(obj.name, obj);

            obj = new Static("staDS_SITE","0","40","87","30",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("1");
            obj.set_text("구분");
            obj.set_textAlign("left");
            obj.set_cssclass("sta_WF_tablelabelE");
            this.divData.addChild(obj.name, obj);

            obj = new Static("staDS_SILHENG","0","staDS_SITE:-1","87","30",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("2");
            obj.set_text("서식");
            obj.set_textAlign("left");
            obj.set_visible("false");
            obj.set_cssclass("sta_WF_tablelabelE");
            this.divData.addChild(obj.name, obj);

            obj = new Static("staYN_PARTNERSIGN","0","staDS_SILHENG:-1","87","30",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("3");
            obj.set_text("공사구분");
            obj.set_textAlign("left");
            obj.set_visible("false");
            obj.set_cssclass("sta_WF_tablelabelE");
            this.divData.addChild(obj.name, obj);

            obj = new Static("staBg1","staDS_SITE:-1","40",null,"30","0%",null,null,null,null,null,this.divData.form);
            obj.set_taborder("4");
            obj.set_cssclass("sta_WF_tablebg");
            this.divData.addChild(obj.name, obj);

            obj = new Static("staBg2","staDS_SILHENG:-1","staBg1:-1",null,"30","0%",null,null,null,null,null,this.divData.form);
            obj.set_taborder("5");
            obj.set_cssclass("sta_WF_tablebg");
            obj.set_visible("false");
            this.divData.addChild(obj.name, obj);

            obj = new Static("staBg3","staYN_PARTNERSIGN:-1","staBg2:-1",null,"30","0%",null,null,null,null,null,this.divData.form);
            obj.set_taborder("6");
            obj.set_cssclass("sta_WF_tablebg");
            obj.set_visible("false");
            this.divData.addChild(obj.name, obj);

            obj = new Button("btnOk","32.50%","staYN_PARTNERSIGN:20","60","20",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("7");
            obj.set_text("확인");
            this.divData.addChild(obj.name, obj);

            obj = new Button("btnCancel","52.50%","staYN_PARTNERSIGN:20","60","20",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("8");
            obj.set_text("취소");
            this.divData.addChild(obj.name, obj);

            obj = new Div("cfDS_CONTMETHOD","92","45","300","20",null,null,null,null,null,null,this.divData.form);
            obj.getSetter("CodeFindName").set("DCX_MDM_DC_CT01");
            obj.getSetter("CDTextWidth").set("70");
            obj.set_taborder("9");
            obj.set_url("cmm::cmmCodeFind.xfdl");
            this.divData.addChild(obj.name, obj);

            obj = new Div("cfNO_FORM","92","74","300","20",null,null,null,null,null,null,this.divData.form);
            obj.getSetter("CodeFindName").set("DCX_CFCONTFORM");
            obj.getSetter("CDTextWidth").set("70");
            obj.set_taborder("10");
            obj.set_url("cmm::cmmCodeFind.xfdl");
            obj.set_visible("false");
            this.divData.addChild(obj.name, obj);

            obj = new Div("cfYN_PARTNERSIGN","92","cfNO_FORM:9","300","20",null,null,null,null,null,null,this.divData.form);
            obj.getSetter("CodeFindName").set("CF_CODE_DC_CT04");
            obj.getSetter("CDTextWidth").set("70");
            obj.set_taborder("11");
            obj.set_url("cmm::cmmCodeFind.xfdl");
            obj.set_visible("false");
            this.divData.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this
            obj = new Layout("default","",this._adjust_width,this._adjust_height,this,function(p){});
            this.addLayout(obj.name, obj);
            
            // BindItem Information
            obj = new BindItem("item0","divData.form.cfDS_CONTMETHOD.form.CDTextBox","value","dsData","DS_CONTMETHOD");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item1","divData.form.cfDS_CONTMETHOD.form.DSTextBox","value","dsData","NM_DS_CONTMETHOD");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item2","divData.form.cfNO_FORM.form.CDTextBox","value","dsData","NO_FORM");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item3","divData.form.cfNO_FORM.form.DSTextBox","value","dsData","NM_FORM");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item4","divData.form.cfYN_PARTNERSIGN.form.CDTextBox","value","dsData","CD_PARTNERSIGN");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item5","divData.form.cfYN_PARTNERSIGN.form.DSTextBox","value","dsData","DS_PARTNERSIGN");
            this.addChild(obj.name, obj);
            obj.bind();
            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {
            this._addPreloadList("fdl","cmm::cmmCodeFind.xfdl");
        };
        
        // User Script
        this.registerScript("DCC_CONTRACT_S_DLG.xfdl", function() {
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
        	//this.FormBtns.Select.set_enable(false);
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
        	//this.dxGrid = this.divData.form.objGrid;
        	this.cfDS_CONTMETHOD = this.divData.form.cfDS_CONTMETHOD;
        	this.cfNO_FORM = this.divData.form.cfNO_FORM;
        };

        /************************************************************************
         * 이벤트 설정
         ************************************************************************/
        this.fnSetEvent = function() {
        	//this.cfDS_CONTMETHOD.CodeFindName = "CF_CODE_DC_CT01";
        	//this.cfNO_FORM.CodeFindName = "DCX_CFCONTFORM";

        	this.cfNO_FORM.BeforeUserDataSetParam = "fnBeforeUserDataSetParam";
        	this.divData.form.cfYN_PARTNERSIGN.AfterCDTextChanged = "fnAfterCDTextChanged";
        };

        /************************************************************************
         * 파라미터 설정
         ************************************************************************/
        this.fnSetParameter = function() {

        }

        /************************************************************************
         * 컨트롤 이벤트
         ************************************************************************/

        /************************************************************************
         * Validate
         ************************************************************************/
        /*
         *	조회 Validate
         */
        this.fnSelectValidate = function() {
        	var validate = true;

        	if (this.gfnIsNull(this.dsData.getColumn(0,"DS_CONTMETHOD"))) {
        		validate = false;
        		// Alert후 실행할 처리
        		this.fnVaidateCallback = function() {
        			this.cfDS_CONTMETHOD.form.CDTextBox.setFocus();
        		}
        		this.gfnAlert("구분은 반드시 입력 하셔야 합니다.", "fnVaidateCallback");
        	}
        	/*
        	else if(this.gfnIsNull(this.dsData.getColumn(0,"NO_FORM"))){
        		validate = false;
        		// Alert후 실행할 처리
        		this.fnVaidateCallback = function() {
        			this.cfNO_FORM.form.CDTextBox.setFocus();
        		}
        		this.gfnAlert("서식은 반드시 입력 하셔야 합니다.", "fnVaidateCallback");
        	}
        	else if(this.gfnIsNull(this.dsData.getColumn(0,"CD_PARTNERSIGN"))){
        		validate = false;
        		// Alert후 실행할 처리
        		this.fnVaidateCallback = function() {
        			this.divData.form.cfYN_PARTNERSIGN.form.CDTextBox.setFocus();
        		}
        		this.gfnAlert("공사구분은 반드시 입력 하셔야 합니다.", "fnVaidateCallback");
        	}
        	*/
        	return validate;

        };
        /************************************************************************
         * 콜백 이벤트
         ************************************************************************/
        /*
         *	콜백 처리
         */
        this.fnCallback = function(svcID, errorCode, errorMsg)
        {
        	if (svcID == "combo") {

        	}
        }

        /************************************************************************
         * 코드파인드 이벤트
         ************************************************************************/
        //코드파인드의 파라미터 값을 넘겨줄때 사용하는 함수
        this.fnBeforeUserDataSetParam = function(id, dsUserParam, nrow) {

        	if (id == "cfNO_FORM"){
         		if (this.gfnIsNull(this.dsData.getColumn(0, "DS_CONTMETHOD"))) {
         			this.gfnAlert("구분을 먼저 입력하세요.");
         			return false;
         		}

        		dsUserParam.setColumn(nrow, "TY_CONT", this.dsData.getColumn(0, "DS_CONTMETHOD"));
        		dsUserParam.setColumn(nrow, "SN_SEQ", "001");
        	}

        	return true;
        }

        this.fnAfterCDTextChanged = function(id, codeFindData) {
        	if(id == "cfYN_PARTNERSIGN") {
        		var arr = codeFindData;
        		if(arr.length > 0)
        		{
        			this.dsData.setColumn(0, "YN_PARTNERSIGN", arr[0]["DS_ETC1"]);
        		}
        	}
        }
        /************************************************************************
         * 그리드 이벤트
         ************************************************************************/

        /************************************************************************
         * 기타 이벤트
         ************************************************************************/
        // 확인 버튼 클릭
        this.divData_btnOk_onclick = function(obj,e)
        {
        	if (!this.fnSelectValidate()) return false;

        	var yn_e_cont = this.dsData.getColumn(0, "DS_CONTMETHOD")=="90" ? "N" : "Y";

        	var yn_partnersign = this.dsData.getColumn(0,"YN_PARTNERSIGN")=="Y" ? "Y" : "N";

        	// 부모창 변수 값 셋팅
        // 	this.getParentContext().opener.popupVal = {dsContmethod:this.dsData.getColumn(0,"DS_CONTMETHOD"), dsForm:this.dsData.getColumn(0,"NO_FORM")
        // 											 , dsNmContmethod:this.dsData.getColumn(0,"NM_DS_CONTMETHOD")
        // 											 , dsNmForm:this.dsData.getColumn(0,"NM_FORM"), dsYN_PARTNERSIGN:yn_partnersign
        // 											 , dsCD_PARTNERSIGN:this.dsData.getColumn(0,"CD_PARTNERSIGN"), dsDS_PARTNERSIGN:this.dsData.getColumn(0,"DS_PARTNERSIGN")
        // 											 , dsYN_E_CONT:yn_e_cont};

        	this.getParentContext().opener.popupVal = {dsContmethod:this.dsData.getColumn(0,"DS_CONTMETHOD"), dsNmContmethod:this.dsData.getColumn(0,"NM_DS_CONTMETHOD")};

        	this.getParentContext().close(true);
        };

        // 취소 버튼 클릭
        this.divData_btnCancel_onclick = function(obj,e)
        {
        	// this.close()가 작동하지 않았고,
        	// 부모의 callback 함수로 데이터를 넘겨주기 위해 작성되었습니다.
        	this.getParentContext().close(false);
        };

        this.dsData_onvaluechanged = function(obj,e)
        {
        	if(e.oldvalue != e.newvalue) {

        		if(e.columnid == "DS_CONTMETHOD"){
        			this.cfNO_FORM.form.fnCodeFindClear();
        		}
        	}
        };

        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.form_onload,this);
            this.divData.form.staDS_SITE.addEventHandler("onclick",this.divData_staDS_SITE_onclick,this);
            this.divData.form.btnOk.addEventHandler("onclick",this.divData_btnOk_onclick,this);
            this.divData.form.btnCancel.addEventHandler("onclick",this.divData_btnCancel_onclick,this);
            this.dsData.addEventHandler("onvaluechanged",this.dsData_onvaluechanged,this);
        };
        this.loadIncludeScript("DCC_CONTRACT_S_DLG.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
