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
            this.set_titletext("어음번호등록");
            this.getSetter("maxwidth").set("440");
            this.getSetter("maxheight").set("360");
            if (Form == this.constructor)
            {
                this._setFormPosition(430,280);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("_dsProc", this);
            obj._setContents("<ColumnInfo><Column id=\"TARGET\" type=\"STRING\" size=\"256\"/><Column id=\"SP\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsGUBUN", this);
            obj._setContents("<ColumnInfo><Column id=\"CODE\" type=\"STRING\" size=\"256\"/><Column id=\"VALUE\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"CODE\">Y</Col><Col id=\"VALUE\">어음</Col></Row><Row><Col id=\"CODE\">N</Col><Col id=\"VALUE\">B2B</Col></Row></Rows>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Div("divData","0","0",null,null,"0","0",null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_cssclass("div_DATA_Bg");
            obj.set_text("");
            this.addChild(obj.name, obj);

            obj = new Static("staTitle","20","10",null,"22","0",null,null,null,null,null,this.divData.form);
            obj.set_taborder("9");
            obj.set_text("어음생성");
            obj.set_cssclass("sta_TITLE_Bg");
            this.divData.addChild(obj.name, obj);

            obj = new Static("staItem17","20","40","340","30",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("7");
            obj.set_text("어음정보");
            obj.set_cssclass("sta_WF_tablelabel");
            this.divData.addChild(obj.name, obj);

            obj = new Static("staBar53","89","69","271","30",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("8");
            obj.set_cssclass("sta_WF_tablebg");
            this.divData.addChild(obj.name, obj);

            obj = new Button("btnOk","143","246","45","21",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("5");
            obj.set_text("확인");
            obj.getSetter("uWord").set("popup.ok");
            this.divData.addChild(obj.name, obj);

            obj = new Button("btnCancle","193","246","45","21",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("6");
            obj.set_text("취소");
            obj.getSetter("uWord").set("popup.cancel");
            this.divData.addChild(obj.name, obj);

            obj = new Static("staItem55","20","69","70","30",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("10");
            obj.set_text("계좌번호");
            obj.set_cssclass("sta_WF_tablelabelE");
            this.divData.addChild(obj.name, obj);

            obj = new Div("cfCD_SideBank","95","74","258","20",null,null,null,null,null,null,this.divData.form);
            obj.getSetter("CDTextWidth").set("100");
            obj.set_taborder("0");
            obj.set_url("cmm::cmmCodeFind.xfdl");
            this.divData.addChild(obj.name, obj);

            obj = new Static("staItem00","20","98","70","30",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("11");
            obj.set_text("수령일자");
            obj.set_cssclass("sta_WF_tablelabelE");
            this.divData.addChild(obj.name, obj);

            obj = new Static("staBar00","89","98","271","30",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("12");
            obj.set_cssclass("sta_WF_tablebg");
            this.divData.addChild(obj.name, obj);

            obj = new Static("staItem01","20","127","70","30",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("13");
            obj.set_text("구분");
            obj.set_cssclass("sta_WF_tablelabelE");
            this.divData.addChild(obj.name, obj);

            obj = new Static("staBar01","89","127","271","30",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("14");
            obj.set_cssclass("sta_WF_tablebg");
            this.divData.addChild(obj.name, obj);

            obj = new Static("staItem02","20","156","70","30",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("15");
            obj.set_text("어음번호");
            obj.set_cssclass("sta_WF_tablelabelE");
            this.divData.addChild(obj.name, obj);

            obj = new Static("staBar02","89","156","271","30",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("16");
            obj.set_cssclass("sta_WF_tablebg");
            this.divData.addChild(obj.name, obj);

            obj = new Calendar("tclDT_FROM","95","103","105","20",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("1");
            obj.set_dateformat("yyyy-MM-dd");
            obj.set_editformat("yyyyMMdd");
            obj.set_autoselect("true");
            obj.set_value("");
            this.divData.addChild(obj.name, obj);

            obj = new Combo("cboGubun","95","132","105","20",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("2");
            obj.set_innerdataset("dsGUBUN");
            obj.set_codecolumn("CODE");
            obj.set_datacolumn("VALUE");
            obj.set_text("어음");
            obj.set_value("Y");
            obj.set_index("0");
            this.divData.addChild(obj.name, obj);

            obj = new Edit("txtNO_FROM","95","161","173","20",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("3");
            obj.set_maxlength("20");
            obj.set_inputtype("number");
            obj.set_inputfilter("none,comma,dot,alpha");
            this.divData.addChild(obj.name, obj);

            obj = new MaskEdit("txtNO_TO","274","161","55","20",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("4");
            obj.set_format("##,##0");
            obj.set_limitbymask("integer");
            this.divData.addChild(obj.name, obj);

            obj = new Static("sta00","20","191","150","20",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("17");
            obj.set_text("생성하시겠습니까?");
            obj.set_font("normal bold 10pt/normal \"Arial\"");
            this.divData.addChild(obj.name, obj);

            obj = new Static("sta01","336","161","20","20",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("18");
            obj.set_text("매");
            this.divData.addChild(obj.name, obj);

            obj = new Edit("txtCD_BANK","155","41","23","20",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("19");
            obj.set_maxlength("20");
            obj.set_inputtype("number");
            obj.set_visible("false");
            this.divData.addChild(obj.name, obj);

            obj = new Edit("txtDS_BANK","185","41","23","20",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("20");
            obj.set_maxlength("20");
            obj.set_inputtype("number");
            obj.set_visible("false");
            this.divData.addChild(obj.name, obj);

            obj = new Edit("txtDS_VENDOR","215","41","23","20",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("21");
            obj.set_maxlength("20");
            obj.set_inputtype("number");
            obj.set_visible("false");
            this.divData.addChild(obj.name, obj);

            obj = new Edit("txtNO_ACCOUNT","245","41","23","20",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("22");
            obj.set_maxlength("20");
            obj.set_inputtype("number");
            obj.set_visible("false");
            this.divData.addChild(obj.name, obj);
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
        };
        
        // User Script
        this.registerScript("DFD_DLG_NOTES_NUMBER.xfdl", function() {
        /**
        *  컨설팅 표준화 작업
        *  @MenuPath    cmm > cmmPopup.xfdl (공통 팝업페이지)
        *  @FileName 	cmmPopup.xfdl
        *  @Creator 	consulting
        *  @CreateDate 	2017.10.19
        *  @Desction         스크립트 표준 및 주석 표준 정의
        ************** 소스 수정 이력 ***************************************************
        *  date          		Modifier                Description
        *******************************************************************************
        *  2017.03.09     	consulting 	                최초 생성
        *******************************************************************************
        */

        /************************************************************************************************
         * FORM 변수 선언 영역
         ************************************************************************************************/
         this.pv_CD_CORP;
         this.pv_DS_CORP;
         this.CD_MANAGEBANK;
        /***********************************************************************************************
        * FORM EVENT 영역(onload)
        /***********************************************************************************************/
        this.form_onload = function(obj,e)
        {
        	this.gfnFormOnLoad(this); //초기화[필수]
        	this.gfnFormInfo(this);

        	this.fnSetEvent();
        	this.fnSetParameter();

        	// 타화면에서 오픈시 넘어오는 파라미터 처리
        	var frame = this.getOwnerFrame();
        	if(!this.gfnIsNull(frame.CD_CORP) && !this.gfnIsNull(frame.DS_CORP)) {
        	    this.pv_CD_CORP = frame.CD_CORP;
         		this.pv_DS_CORP = frame.DS_CORP;
        	}

        	//trace("this.pv_CD_CORP :: " + this.pv_CD_CORP);
        	//trace("this.pv_DS_CORP :: " + this.pv_DS_CORP);
        };

        /************************************************************************
         * 변수 선언
         ************************************************************************/
        	this.cfCD_SideBank = this.divData.form.cfCD_SideBank;
        	this.tclDT_FROM = this.divData.form.tclDT_FROM;
        	this.cboGubun = this.divData.form.cboGubun;
        	this.txtNO_FROM = this.divData.form.txtNO_FROM;
        	this.txtNO_TO = this.divData.form.txtNO_TO;

        	this.txtCD_BANK = this.divData.form.txtCD_BANK;
        	this.txtDS_BANK = this.divData.form.txtDS_BANK;
        	this.txtDS_VENDOR = this.divData.form.txtDS_VENDOR;
        	this.txtNO_ACCOUNT = this.divData.form.txtNO_ACCOUNT;

        /************************************************************************
         * 이벤트 설정
         ************************************************************************/
        this.fnSetEvent = function() {
        	this.cfCD_SideBank.CodeFindName = "DFX_CFNO_ACCOUNT";
        	this.cfCD_SideBank.BeforeUserDataSetParam = "fnBeforeUserDataSetParam";
        	this.cfCD_SideBank.AfterCDTextChanged = "fnAfterCDTextChanged";
        };
        /************************************************************************
         * 파라미터 설정
         ************************************************************************/
        this.fnSetParameter = function() {

        };

        /************************************************************************
         * Validate
         ************************************************************************/
        this.fnValidation = function() {
        	if (this.gfnIsNull(this.cfCD_SideBank.form.CDTextBox.text)) {
        		this.gfnAlert("지점 코드를 입력하십시오.");
        		this.cfCD_SideBank.form.CDTextBox.setFocus();
        		return false;
        	}

        	if (this.gfnIsNull(this.tclDT_FROM.value)) {
        		this.gfnAlert("수령일자를 입력하십시오.");
        		this.tclDT_FROM.setFocus();
        		return false;
        	}

        	if (this.gfnIsNull(this.cboGubun.value)) {
        		this.gfnAlert("어음/B2B 구분을 선택하십시오.");
        		this.cboGubun.setFocus();
        		return false;
        	}

        	if (this.gfnIsNull(this.txtNO_FROM.value)) {
        		this.gfnAlert("어음번호를 입력하십시오.");
        		this.txtNO_FROM.setFocus();
        		return false;
        	}

        	if (this.gfnIsNull(this.txtNO_TO.value)) {
        		this.gfnAlert("어름번호 매수를 입력하십시오.");
        		this.txtNO_TO.setFocus();
        		return false;
        	}

        	return true;
        }

        /************************************************************************
         * 코드파인드 이벤트
         ************************************************************************/
        this.fnBeforeUserDataSetParam = function(id, dsUserParam, nrow) {

        	if (id == "cfCD_SideBank") {
        		this.txtCD_BANK.set_value("");
        		this.txtDS_BANK.set_value("");
        		this.txtDS_VENDOR.set_value("");
        		this.txtNO_ACCOUNT.set_value("");
        		dsUserParam.setColumn(nrow, "GUBUN", "NOTE");
        		dsUserParam.setColumn(nrow, "CD_CORP", this.pv_CD_CORP);
        	}
        	return true;
        };

        this.fnAfterCDTextChanged = function(id, codeFindData) {

        	var arr = codeFindData;

        	if (id == "cfCD_SideBank") {
        		if(arr.length > 0) {
        			this.txtCD_BANK.set_value(arr[0]["CD_BANK"]);
        			this.txtDS_BANK.set_value(arr[0]["DS_BANK"]);
        			this.txtDS_VENDOR.set_value(arr[0]["DS_VENDOR"]);
        			this.txtNO_ACCOUNT.set_value(arr[0]["NO_ACCOUNT"]);
        			this.CD_MANAGEBANK = arr[0]["CD_MANAGEBANK"];
        			//trace(this.txtCD_BANK.value);
        			//trace(this.txtDS_BANK.value);
        			//trace(this.txtDS_VENDOR.value);
        			//trace(this.txtNO_ACCOUNT.value);
        		}
        	}
        }

        /************************************************************************************************
         * 각 COMPONENT 별 EVENT 영역
         ************************************************************************************************/
        /**
        * @ OK버튼이벤트
        */
        this.btnOk_onclick = function(obj,e)
        {
        	if (!this.fnValidation()) return false;

        	// 확인
        	var json = {};

        	json.CD_SIDEBANK = this.cfCD_SideBank.form.CDTextBox.value;
        	json.CD_BANK = this.txtCD_BANK.value;
        	json.DS_BANK = this.txtDS_BANK.value;
        	json.NO_ACCOUNT = this.txtNO_ACCOUNT.value;
        	json.DS_VENDOR = this.txtDS_VENDOR.value;
        	json.DT_REGIST = this.tclDT_FROM.value;
        	//json.NO_NOTES = newNoteNumber;
        	json.NO_FROM = this.txtNO_FROM.value
        	json.NO_TO = this.txtNO_TO.value
        	json.TY_USE = "미발행";
        	json.TY_GUBUN = this.cboGubun.value;
        	JSON.CD_MANAGEBANK = this.CD_MANAGEBANK;

        	trace("json :: " + json);

        	this.getParentContext().close(JSON.stringify(json));
        };

        /**
        * @ 취소버튼이벤트
        */
        this.btnCancle_onclick = function(obj,e)
        {
        	this.getParentContext().close(false);
        };

        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.form_onload,this);
            this.divData.form.btnOk.addEventHandler("onclick",this.btnOk_onclick,this);
            this.divData.form.btnCancle.addEventHandler("onclick",this.btnCancle_onclick,this);
        };
        this.loadIncludeScript("DFD_DLG_NOTES_NUMBER.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
