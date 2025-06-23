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
            this.set_titletext("임대료 일괄 부과");
            this.getSetter("maxwidth").set("470");
            this.getSetter("maxheight").set("400");
            if (Form == this.constructor)
            {
                this._setFormPosition(470,400);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("dsList_1", this);
            obj._setContents("<ColumnInfo><Column id=\"CD_ACNTUNIT\" type=\"STRING\" size=\"256\"/><Column id=\"DS_ACNTUNIT\" type=\"STRING\" size=\"256\"/><Column id=\"YM_IMPOSE\" type=\"STRING\" size=\"256\"/><Column id=\"DT_FROM\" type=\"STRING\" size=\"256\"/><Column id=\"DT_TO\" type=\"STRING\" size=\"256\"/><Column id=\"DT_IN\" type=\"STRING\" size=\"256\"/><Column id=\"TY_TYPE\" type=\"STRING\" size=\"256\"/><Column id=\"DT_BILL\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row/></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("_dsProc", this);
            obj._setContents("<ColumnInfo><Column id=\"TARGET\" type=\"STRING\" size=\"256\"/><Column id=\"SP\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"TARGET\">save</Col><Col id=\"SP\">DLCPR_LEASE_IMPOSE_BATCH</Col></Row><Row><Col id=\"TARGET\">combo</Col><Col id=\"SP\">DZXPR_COMBO_SELECT</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsTY_TYPE", this);
            obj._setContents("");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsList", this);
            obj._setContents("<ColumnInfo><Column id=\"CD_ACNTUNIT\" type=\"STRING\" size=\"256\"/><Column id=\"DS_ACNTUNIT\" type=\"STRING\" size=\"256\"/><Column id=\"YM_IMPOSE\" type=\"STRING\" size=\"256\"/><Column id=\"DT_FROM\" type=\"STRING\" size=\"256\"/><Column id=\"DT_TO\" type=\"STRING\" size=\"256\"/><Column id=\"DT_IN\" type=\"STRING\" size=\"256\"/><Column id=\"TY_TYPE\" type=\"STRING\" size=\"256\"/><Column id=\"DT_BILL\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row/></Rows>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Div("divData","0","0",null,null,"0","0",null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_cssclass("div_DATA_Bg");
            obj.set_text("");
            this.addChild(obj.name, obj);

            obj = new Static("staTITLE","0","20","100.00%","30",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("0");
            obj.set_text("임대료 일괄 부과");
            obj.set_cssclass("sta_TITLE_Bg");
            obj.set_textAlign("left");
            this.divData.addChild(obj.name, obj);

            obj = new Static("sta10","0","staTITLE:5",null,"22","0",null,null,null,null,null,this.divData.form);
            obj.set_taborder("16");
            obj.set_text("세대별 임대료를 일괄 부과합니다");
            this.divData.addChild(obj.name, obj);

            obj = new Static("sta00","0","sta10:5","90","30",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("2");
            obj.set_text("사업지코드");
            obj.set_cssclass("sta_WF_tablelabelE");
            this.divData.addChild(obj.name, obj);

            obj = new Static("sta01","sta00:-1","sta10:5",null,"30","0",null,null,null,null,null,this.divData.form);
            obj.set_taborder("4");
            obj.set_cssclass("sta_WF_tablebg");
            obj.set_text("");
            this.divData.addChild(obj.name, obj);

            obj = new Static("sta02","0","sta00:-1","90","30",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("2");
            obj.set_text("구분");
            obj.set_cssclass("sta_WF_tablelabelE");
            this.divData.addChild(obj.name, obj);

            obj = new Static("sta03","sta02:-1","sta01:-1",null,"30","0",null,null,null,null,null,this.divData.form);
            obj.set_taborder("4");
            obj.set_cssclass("sta_WF_tablebg");
            obj.set_text("");
            this.divData.addChild(obj.name, obj);

            obj = new Static("sta04","0","sta02:-1","90","30",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("7");
            obj.set_text("부과년월");
            obj.set_cssclass("sta_WF_tablelabelE");
            this.divData.addChild(obj.name, obj);

            obj = new Static("sta05","sta04:-1","sta03:-1",null,"30","0",null,null,null,null,null,this.divData.form);
            obj.set_taborder("8");
            obj.set_cssclass("sta_WF_tablebg");
            obj.set_text("");
            this.divData.addChild(obj.name, obj);

            obj = new Static("sta06","0","sta04:-1","90","30",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("9");
            obj.set_text("부과기간");
            obj.set_cssclass("sta_WF_tablelabelE");
            this.divData.addChild(obj.name, obj);

            obj = new Static("sta07","sta06:-1","sta05:-1",null,"30","0",null,null,null,null,null,this.divData.form);
            obj.set_taborder("10");
            obj.set_cssclass("sta_WF_tablebg");
            obj.set_text("");
            this.divData.addChild(obj.name, obj);

            obj = new Static("sta08","0","sta06:-1","90","30",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("11");
            obj.set_text("납기내일자");
            obj.set_cssclass("sta_WF_tablelabelE");
            this.divData.addChild(obj.name, obj);

            obj = new Static("sta09","sta08:-1","sta07:-1",null,"30","0",null,null,null,null,null,this.divData.form);
            obj.set_taborder("12");
            obj.set_cssclass("sta_WF_tablebg");
            obj.set_text("");
            this.divData.addChild(obj.name, obj);

            obj = new Button("btnOK","114","300","60","27",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("5");
            obj.set_text("확인");
            this.divData.addChild(obj.name, obj);

            obj = new Button("btnCANCEL","btnOK:30","300","60","27",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("6");
            obj.set_text("취소");
            this.divData.addChild(obj.name, obj);

            obj = new Div("ccfCD_ACNTUNIT","sta00:5","sta01:-25","300","20",null,null,null,null,null,null,this.divData.form);
            obj.getSetter("CodeFindName").set("DLX_CFLEASESITE_CODEFIND_DAEBANG");
            obj.getSetter("CDTextWidth").set("100");
            obj.set_taborder("1");
            obj.set_url("cmm::cmmCodeFind.xfdl");
            this.divData.addChild(obj.name, obj);

            obj = new Div("tclYM_IMPOSE","sta04:5","sta05:-25","105","20",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("7");
            obj.set_url("cmm::cmmCalMM.xfdl");
            obj.set_enableevent("true");
            obj.set_text("");
            obj.getSetter("AfterCDTextChanged").set("fnYM_IMPOSE_AfterCDTextChanged");
            this.divData.addChild(obj.name, obj);

            obj = new Calendar("tclDT_FROM","sta06:5","sta07:-25","105","20",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("13");
            obj.set_dateformat("yyyy-MM-dd");
            obj.set_editformat("yyyyMMdd");
            obj.set_autoselect("true");
            this.divData.addChild(obj.name, obj);

            obj = new Static("sta11","tclDT_FROM:5","sta07:-25","10","20",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("4");
            obj.set_text("~");
            this.divData.addChild(obj.name, obj);

            obj = new Calendar("tclDT_TO","sta11:5","sta07:-25","105","20",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("13");
            obj.set_dateformat("yyyy-MM-dd");
            obj.set_editformat("yyyyMMdd");
            obj.set_autoselect("true");
            obj.getSetter("AfterCDTextChanged").set("fnDT_TO_AfterCDTextChanged");
            this.divData.addChild(obj.name, obj);

            obj = new Calendar("tclDT_IN","sta08:5","sta09:-25","105","20",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("13");
            obj.set_dateformat("yyyy-MM-dd");
            obj.set_editformat("yyyyMMdd");
            obj.set_autoselect("true");
            this.divData.addChild(obj.name, obj);

            obj = new Combo("ccboTY_TYPE","sta02:5","sta03:-25","105","20",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("1");
            obj.set_datacolumn("DS_CODE");
            obj.set_codecolumn("CD_CODE");
            obj.set_innerdataset("dsTY_TYPE");
            this.divData.addChild(obj.name, obj);

            obj = new Static("sta08_00","0","227","90","53",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("21");
            obj.set_text("세금계산서 발행일자");
            obj.set_wordWrap("char");
            obj.set_cssclass("sta_WF_tablelabelE");
            this.divData.addChild(obj.name, obj);

            obj = new Static("sta09_00","89","227",null,"53","0",null,null,null,null,null,this.divData.form);
            obj.set_taborder("23");
            obj.set_cssclass("sta_WF_tablebg");
            obj.set_text("");
            this.divData.addChild(obj.name, obj);

            obj = new Calendar("tclDT_BILL","95","242","105","20",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("22");
            obj.set_dateformat("yyyy-MM-dd");
            obj.set_editformat("yyyyMMdd");
            obj.set_autoselect("true");
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

            obj = new BindItem("item2","divData.form.tclYM_IMPOSE.form.TextBox","value","dsList","YM_IMPOSE");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item3","divData.form.tclDT_FROM","value","dsList","DT_FROM");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item4","divData.form.tclDT_TO","value","dsList","DT_TO");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item5","divData.form.tclDT_IN","value","dsList","DT_IN");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item6","divData.form.ccboTY_TYPE","value","dsList","TY_TYPE");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item7","divData.form.tclDT_BILL","value","dsList","DT_BILL");
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
        this.registerScript("DLC_LEASEIMPOSE.xfdl", function() {
        this.objApp = this.gfnGetApplication();
        this.YN_DAY = "N";
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

        	this.dsList.setColumn(0, "YM_IMPOSE", this.gfnAddMonth(this.gfnGetDate() ,1));

        	var dtfrom = this.gfnAddMonth(this.gfnGetDate() ,1).substr(0,6) + "01";
        	this.dsList.setColumn(0, "DT_FROM", dtfrom);

        	if(!this.gfnIsNull(this.getOwnerFrame().CD_ACNTUNIT)){
        		this.dsList.setColumn(0, "CD_ACNTUNIT", this.getOwnerFrame().CD_ACNTUNIT);
        		this.dsList.setColumn(0, "DS_ACNTUNIT", this.getOwnerFrame().DS_ACNTUNIT);
        		this.dsList.setColumn(0, "YM_IMPOSE", this.getOwnerFrame().YM_IMPOSE);
        		this.dsList.setColumn(0, "DT_FROM", this.getOwnerFrame().DT_FROM);
        		this.dsList.setColumn(0, "DT_TO", this.getOwnerFrame().DT_TO);
        		this.dsList.setColumn(0, "DT_IN", this.getOwnerFrame().DT_IN);
        		this.dsList.setColumn(0, "DT_BILL", this.getOwnerFrame().DT_BILL);
        	}
        };

        /************************************************************************
        * 변수 선언
        ************************************************************************/
        this.fnSetVariable = function() {
        	this.ccfCD_ACNTUNIT = this.divData.form.ccfCD_ACNTUNIT;
        	this.tclYM_IMPOSE = this.divData.form.tclYM_IMPOSE;
        	this.tclDT_FROM = this.divData.form.tclDT_FROM;
        	this.tclDT_TO = this.divData.form.tclDT_TO;
        	this.tclDT_IN = this.divData.form.tclDT_IN;
        	this.ccboTY_TYPE = this.divData.form.ccboTY_TYPE;
        	this.tclDT_BILL = this.divData.form.tclDT_BILL;
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
        * 이벤트 설정
        ************************************************************************/
        this.fnSetEvent = function() {
        	this.ccfCD_ACNTUNIT.BeforeUserDataSetParam = "fnBeforeUserDataSetParam";
        	this.ccfCD_ACNTUNIT.AfterCDTextChanged = "fnAfterCDTextChanged";
        };

        /************************************************************************
        * 파라미터 설정
        ************************************************************************/
        this.fnSetParameter = function() {
        	this.dsSave = new Dataset();
        	this.dsSave.addColumn("CD_ACNTUNIT", "string");
        	this.dsSave.addColumn("TY_GUBUN", "string");
        	this.dsSave.addColumn("NO_CHASU", "string");
        	this.dsSave.addColumn("YM_IMPOSE", "string");
        	this.dsSave.addColumn("DT_FROM", "string");
        	this.dsSave.addColumn("DT_TO", "string");
        	this.dsSave.addColumn("DT_IN", "string");
        	this.dsSave.addColumn("ID_INSERT", "string");
        	this.dsSave.addColumn("TY_TYPE", "string");
        	this.dsSave.addColumn("DT_BILL", "string");
        }

        /************************************************************************
        * 버튼 이벤트
        ************************************************************************/
        this.fnSave = function() {
        	if (!this.fnSelectValidate()) return;
        	this.dsSave.clearData();
        	this.dsSave.addRow();
        	this.dsSave.setColumn(0, "CD_ACNTUNIT", this.dsList.getColumn(0, "CD_ACNTUNIT").substr(0, 6));
        	this.dsSave.setColumn(0, "TY_GUBUN", this.dsList.getColumn(0, "CD_ACNTUNIT").substr(6, 1));
        	this.dsSave.setColumn(0, "NO_CHASU", this.dsList.getColumn(0, "CD_ACNTUNIT").substr(7, 2));
        	this.dsSave.setColumn(0, "YM_IMPOSE", this.dsList.getColumn(0, "YM_IMPOSE"));
        	this.dsSave.setColumn(0, "DT_FROM", this.dsList.getColumn(0, "DT_FROM"));
        	this.dsSave.setColumn(0, "DT_TO", this.dsList.getColumn(0, "DT_TO"));
        	if(this.YN_DAY == "Y"){
        		this.dsSave.setColumn(0, "DT_IN", this.dsList.getColumn(0, "DT_TO"));
        	}else{
        		this.dsSave.setColumn(0, "DT_IN", this.dsList.getColumn(0, "DT_IN"));
        	}
        	this.dsSave.setColumn(0, "ID_INSERT", this.AuthClient.ID_USER);
        	//this.dsSave.setColumn(0, "ID_INSERT", this.AuthClient.ID_USER);
        	this.dsSave.setColumn(0, "TY_TYPE",this.dsList.getColumn(0, "TY_TYPE"));
        	this.dsSave.setColumn(0, "DT_BILL", this.dsList.getColumn(0, "DT_BILL"));

        	var strSvcId    = "save";
        	var strSvcType  = "save";
        	var inProc		= "_dsProc";
        	//if(this.YN_DAY == "Y"){
        		var inData      = "save=dsSave";
        	//}else{
        	//	var inData      = "save2=dsSave";
        	//}
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
        this.fnSelectValidate = function() {
        	if (this.gfnIsNull(this.dsList.getColumn(0, "CD_ACNTUNIT"))) {
        		this.fnVaidateCallback = function() {
        			this.ccfCD_ACNTUNIT.setFocus();
        		}
        		this.gfnAlert("사업지코드가 입력되지 않았습니다.", "fnVaidateCallback");
        		return false;
        	}
        	if (this.gfnIsNull(this.dsList.getColumn(0, "YM_IMPOSE"))) {
        		this.fnVaidateCallback = function() {
        			this.tclYM_IMPOSE.setFocus();
        		}
        		this.gfnAlert("부과년월을 입력되지 않았습니다.", "fnVaidateCallback");
        		return false;
        	}
        	if (this.gfnIsNull(this.dsList.getColumn(0, "DT_FROM"))) {
        		this.fnVaidateCallback = function() {
        			this.tclDT_FROM.setFocus();
        		}
        		this.gfnAlert("부과기간(시작일)을 입력되지 않았습니다.", "fnVaidateCallback");
        		return false;
        	}
        	if (this.gfnIsNull(this.dsList.getColumn(0, "DT_TO"))) {
        		this.fnVaidateCallback = function() {
        			this.tclDT_TO.setFocus();
        		}
        		this.gfnAlert("부과기간(종료일)을 입력되지 않았습니다.", "fnVaidateCallback");
        		return false;
        	}
        	if (this.gfnIsNull(this.dsList.getColumn(0, "DT_IN"))) {
        		this.fnVaidateCallback = function() {
        			this.tclDT_IN.setFocus();
        		}
        		this.gfnAlert("납기내일자를 입력되지 않았습니다.", "fnVaidateCallback");
        		return false;
        	}
        	if (this.gfnIsNull(this.dsList.getColumn(0, "DT_BILL"))) {
        		this.fnVaidateCallback = function() {
        			this.tclDT_BILL.setFocus();
        		}
        		this.gfnAlert("세금계산서 발행일자가 입력되지 않았습니다.", "fnVaidateCallback");
        		return false;
        	}
        	if (this.gfnGetDiffDate(this.dsList.getColumn(0, "DT_FROM"), this.dsList.getColumn(0, "DT_TO")) < 0){
        		this.gfnAlert("부과기간종료일은 부과기간시작일보다 크거나 같아야 합니다.");
        		return false;
        	}
        	return true;
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
        };
        this.fnAfterCDTextChanged = function(id, codeFindData) {
        	this.tclDT_IN.set_enable(true);

        	//납기내일자 = 다음달 말일
        	if(!this.gfnIsNull(this.dsList.getColumn(0, "DT_FROM"))){
        		var vDate = this.gfnAddDate(this.gfnAddMonth(this.dsList.getColumn(0, "DT_FROM") ,2).substring(0, 6) +"01", -1);
        		this.dsList.setColumn(0, "DT_IN", vDate);
        	}
        	var arr = codeFindData;
        	if(arr.length > 0) {
        		this.YN_DAY = arr[0]["YN_DAY"];
        	}
        	if(this.YN_DAY == "Y"){
        		this.dsList.setColumn(0, "DT_IN", this.dsList.getColumn(0, "DT_FROM"));
        		this.tclDT_IN.set_enable(false);
        	}else{
        		var vDate = this.gfnAddDate(this.gfnAddMonth(this.dsList.getColumn(0, "DT_FROM") ,2).substring(0, 6) +"01", -1);
        		this.dsList.setColumn(0, "DT_IN", vDate);
        		this.tclDT_IN.set_enable(true);
        	}
        };

        this.fnYM_IMPOSE_AfterCDTextChanged = function(id, codeFindData) {
        	if(!this.gfnIsNull(this.dsList.getColumn(0, "YM_IMPOSE"))){
        		this.dsList.setColumn(0, "DT_FROM",  this.dsList.getColumn(0, "YM_IMPOSE").substring(0, 6) + "01");

        		var vDate = this.gfnAddDate(this.gfnAddMonth(this.dsList.getColumn(0, "DT_FROM") ,1).substring(0, 6) +"01", -1);
        		this.dsList.setColumn(0, "DT_TO",  vDate);
        	}
        	if(this.YN_DAY == "N"){
        		var vDate = this.gfnAddDate(this.gfnAddMonth(this.dsList.getColumn(0, "DT_FROM") ,2).substring(0, 6) +"01", -1);
        		this.dsList.setColumn(0, "DT_IN", vDate);
        	}else{
        		this.dsList.setColumn(0, "DT_IN", this.dsList.getColumn(0, "DT_TO"));
        	}
        };

        this.fnDT_TO_AfterCDTextChanged = function(id, codeFindData) {
        	if(YN_DAY == "Y"){
        		this.dsList.setColumn(0, "DT_IN", this.dsList.getColumn(0, "DT_TO"));
        	}
        };

        /************************************************************************
        * 콜백 이벤트
        ************************************************************************/
        this.fnCallback = function(svcID, errorCode, errorMsg) {
        	if(svcID == "save") {
        		if (errorCode == 0) {
        			this.fnClose = function() {
        				this.getParentContext().close(true);
        			}
        			this.gfnAlert("해당기간의 세대별 임대료가 일괄부과되었습니다.", "fnClose");
        		} else {
        			this.gfnAlert(errorMsg);
        		}
        	}
        }

        /************************************************************************
        * 기타 이벤트
        ************************************************************************/
        this.dsList_onvaluechanged = function(obj,e) {
        	if (e.oldvalue != e.newvalue) {
        		this.fnYM_IMPOSE_AfterCDTextChanged();
        	}
        };

        this.btnOK_onclick = function(obj,e) {
        	this.fnSave();
        };

        this.btnCANCEL_onclick = function(obj,e) {
        	this.getParentContext().close(false);
        };



        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.form_onload,this);
            this.divData.form.btnOK.addEventHandler("onclick",this.btnOK_onclick,this);
            this.divData.form.btnCANCEL.addEventHandler("onclick",this.btnCANCEL_onclick,this);
            this.dsList_1.addEventHandler("onvaluechanged",this.dsList_onvaluechanged,this);
            this.dsTY_TYPE.addEventHandler("onvaluechanged",this.dsList_onvaluechanged,this);
            this.dsList.addEventHandler("onvaluechanged",this.dsList_onvaluechanged,this);
        };
        this.loadIncludeScript("DLC_LEASEIMPOSE.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
