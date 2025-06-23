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
            this.set_titletext("사내대출 급여이관");
            this.getSetter("maxwidth").set("415");
            this.getSetter("maxheight").set("340");
            if (Form == this.constructor)
            {
                this._setFormPosition(380,260);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("dsList", this);
            obj._setContents("<ColumnInfo><Column id=\"CD_CORP\" type=\"STRING\" size=\"256\"/><Column id=\"DS_CORP\" type=\"STRING\" size=\"256\"/><Column id=\"TY_FLAG\" type=\"STRING\" size=\"256\"/><Column id=\"ID_SABUN\" type=\"STRING\" size=\"256\"/><Column id=\"DS_HNAME\" type=\"STRING\" size=\"256\"/><Column id=\"YM_SALARY\" type=\"STRING\" size=\"256\"/><Column id=\"TY_SALARY\" type=\"STRING\" size=\"256\"/><Column id=\"SN_SALARY\" type=\"STRING\" size=\"256\"/><Column id=\"DT_REPAYMENT\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"CD_CORP\"/><Col id=\"DS_CORP\"/><Col id=\"TY_FLAG\"/><Col id=\"ID_SABUN\"/><Col id=\"DS_HNAME\"/></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("_dsProc", this);
            obj._setContents("<ColumnInfo><Column id=\"TARGET\" type=\"STRING\" size=\"256\"/><Column id=\"SP\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"TARGET\">save</Col><Col id=\"SP\">DABPR_LOANSALARY_TRANSFER</Col></Row><Row><Col id=\"TARGET\">combo</Col><Col id=\"SP\">DAZPR_COMMONCODE_COMBO</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsTY_SALARY", this);
            obj._setContents("<ColumnInfo><Column id=\"TY_SALARY\" type=\"STRING\" size=\"256\"/><Column id=\"DS_SALARY\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsSN_SALARY", this);
            obj._setContents("<ColumnInfo><Column id=\"CODE\" type=\"STRING\" size=\"256\"/><Column id=\"VALUE\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"CODE\">1</Col><Col id=\"VALUE\">1</Col></Row><Row><Col id=\"CODE\">2</Col><Col id=\"VALUE\">2</Col></Row><Row><Col id=\"CODE\">3</Col><Col id=\"VALUE\">3</Col></Row><Row><Col id=\"CODE\">4</Col><Col id=\"VALUE\">4</Col></Row><Row><Col id=\"CODE\">5</Col><Col id=\"VALUE\">5</Col></Row><Row><Col id=\"CODE\">6</Col><Col id=\"VALUE\">6</Col></Row><Row><Col id=\"CODE\">7</Col><Col id=\"VALUE\">7</Col></Row><Row><Col id=\"CODE\">8</Col><Col id=\"VALUE\">8</Col></Row><Row><Col id=\"CODE\">9</Col><Col id=\"VALUE\">9</Col></Row><Row><Col id=\"CODE\">10</Col><Col id=\"VALUE\">10</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsTY_FLAG", this);
            obj._setContents("<ColumnInfo><Column id=\"CODE\" type=\"STRING\" size=\"256\"/><Column id=\"VALUE\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"CODE\"/><Col id=\"VALUE\">전체</Col></Row><Row><Col id=\"CODE\">S</Col><Col id=\"VALUE\">특정사번</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsRequired", this);
            obj._setContents("<ColumnInfo><Column id=\"CD_FIELD\" type=\"STRING\" size=\"256\"/><Column id=\"DS_FIELD\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"CD_FIELD\">TY_GUBUN</Col><Col id=\"DS_FIELD\">구분</Col></Row><Row><Col id=\"CD_FIELD\">YY_BASE</Col><Col id=\"DS_FIELD\">대상년도</Col></Row><Row><Col id=\"CD_FIELD\">YM_SALARY</Col><Col id=\"DS_FIELD\">급여년월</Col></Row><Row><Col id=\"CD_FIELD\">TY_SALARY</Col><Col id=\"DS_FIELD\">지급구분</Col></Row><Row><Col id=\"CD_FIELD\">SN_SALARY</Col><Col id=\"DS_FIELD\">지급차수</Col></Row><Row><Col id=\"CD_FIELD\">CD_CORP</Col><Col id=\"DS_FIELD\">법인</Col></Row></Rows>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Static("staTitle","0","-10",null,"35","0",null,null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_text("사내대출 급여이관");
            obj.set_cssclass("sta_TITLE_Bg");
            obj.set_textAlign("left");
            this.addChild(obj.name, obj);

            obj = new Div("divData","0","25",null,"185","0",null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_cssclass("div_DATA_Bg");
            this.addChild(obj.name, obj);

            obj = new Static("staYM_SALARY","0","29","100","30",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("12");
            obj.set_text("급여년월");
            obj.set_cssclass("sta_WF_tablelabelE");
            this.divData.addChild(obj.name, obj);

            obj = new Static("staYmSalaryBg","99","29",null,"30","0",null,null,null,null,null,this.divData.form);
            obj.set_taborder("13");
            obj.set_cssclass("sta_WF_tablebg");
            obj.set_textAlign("right");
            this.divData.addChild(obj.name, obj);

            obj = new Static("staDT_REPAYMENT","0","0","100","30",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("8");
            obj.set_cssclass("sta_WF_tablelabelTE");
            obj.set_text("대출상환일자");
            this.divData.addChild(obj.name, obj);

            obj = new Static("staTyGubunBg","99","0",null,"30","0",null,null,null,null,null,this.divData.form);
            obj.set_taborder("9");
            obj.set_cssclass("sta_WF_tablebgT");
            this.divData.addChild(obj.name, obj);

            obj = new Static("staTY_SALARY","0","staYM_SALARY:-1","100","30",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("4");
            obj.set_text("지급구분");
            obj.set_visible("true");
            obj.set_cssclass("sta_WF_tablelabelE");
            this.divData.addChild(obj.name, obj);

            obj = new Static("staTY_SALARY_bg","staTY_SALARY:-1","staTY_SALARY:-30",null,"30","0",null,null,null,null,null,this.divData.form);
            obj.set_taborder("7");
            obj.set_cssclass("sta_WF_tablebg");
            this.divData.addChild(obj.name, obj);

            obj = new Combo("cboTY_SALARY","staTY_SALARY:4","staTY_SALARY:-26","70","20",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("1");
            obj.set_innerdataset("dsTY_SALARY");
            obj.set_datacolumn("DS_CODE");
            obj.set_codecolumn("CD_CODE");
            obj.set_readonly("false");
            obj.set_value("1");
            obj.set_index("-1");
            this.divData.addChild(obj.name, obj);

            obj = new Combo("cboSN_SALARY","cboTY_SALARY:4","staTY_SALARY:-26","50","20",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("2");
            obj.set_innerdataset("dsSN_SALARY");
            obj.set_datacolumn("VALUE");
            obj.set_codecolumn("CODE");
            obj.set_readonly("false");
            obj.set_value("1");
            obj.set_index("-1");
            this.divData.addChild(obj.name, obj);

            obj = new Static("staCD_CORP","0","staTY_SALARY:-1","100","30",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("10");
            obj.set_text("법인");
            obj.set_cssclass("sta_WF_tablelabelE");
            this.divData.addChild(obj.name, obj);

            obj = new Static("staCdCorpBg","99","staCD_CORP:-30",null,"30","0",null,null,null,null,null,this.divData.form);
            obj.set_taborder("11");
            obj.set_cssclass("sta_WF_tablebg");
            obj.set_textAlign("right");
            this.divData.addChild(obj.name, obj);

            obj = new Div("cfCD_CORP","staCD_CORP:4","92",null,"20","4",null,null,null,null,null,this.divData.form);
            obj.getSetter("CodeFindName").set("DAX_CFCORP");
            obj.getSetter("CDTextWidth").set("50");
            obj.getSetter("FitToContents").set("false");
            obj.set_taborder("3");
            obj.set_url("cmm::cmmCodeFind.xfdl");
            this.divData.addChild(obj.name, obj);

            obj = new Static("staTY_FLAG","0","staCD_CORP:-1","100","30",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("14");
            obj.set_text("대상자");
            obj.set_cssclass("sta_WF_tablelabel");
            this.divData.addChild(obj.name, obj);

            obj = new Static("staTyFlagBg","99","staTY_FLAG:-30",null,"30","0",null,null,null,null,null,this.divData.form);
            obj.set_taborder("15");
            obj.set_cssclass("sta_WF_tablebg");
            obj.set_textAlign("right");
            this.divData.addChild(obj.name, obj);

            obj = new Radio("rdoTY_FLAG","104","staTY_FLAG:-24","231","20",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("5");
            obj.set_codecolumn("CODE");
            obj.set_datacolumn("VALUE");
            obj.set_direction("vertical");
            obj.set_fittocontents("width");
            obj.set_innerdataset("dsTY_FLAG");
            obj.set_value("03");
            obj.set_index("0");
            this.divData.addChild(obj.name, obj);

            obj = new Static("staID_SABUN","0","145","100","30",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("16");
            obj.set_text("특정사번");
            obj.set_cssclass("sta_WF_tablelabel");
            this.divData.addChild(obj.name, obj);

            obj = new Static("staIdSabunBg","99","staID_SABUN:-30",null,"30","0",null,null,null,null,null,this.divData.form);
            obj.set_taborder("17");
            obj.set_cssclass("sta_WF_tablebg");
            obj.set_textAlign("right");
            this.divData.addChild(obj.name, obj);

            obj = new Div("cfID_SABUN","104","staID_SABUN:-25",null,"20","4",null,null,null,null,null,this.divData.form);
            obj.getSetter("CodeFindName").set("DAX_CFBASEINFO_ALL");
            obj.getSetter("CDTextWidth").set("90");
            obj.getSetter("FitToContents").set("false");
            obj.set_taborder("6");
            obj.set_url("cmm::cmmCodeFind.xfdl");
            this.divData.addChild(obj.name, obj);

            obj = new Div("tclYM_SALARY","104","35","90","20",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("0");
            obj.set_url("cmm::cmmCalMM.xfdl");
            this.divData.addChild(obj.name, obj);

            obj = new Calendar("tclDT_REPAYMENT","104","5","95","20",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("18");
            obj.set_dateformat("yyyy-MM-dd");
            obj.set_editformat("yyyyMMdd");
            obj.set_autoselect("true");
            obj.set_value("");
            obj.set_readonly("false");
            this.divData.addChild(obj.name, obj);

            obj = new Div("divBtns",null,"divData:20","110","27","140",null,null,null,null,null,this);
            obj.set_taborder("1");
            this.addChild(obj.name, obj);

            obj = new Button("btnCancle",null,"0","52","26","0",null,null,null,null,null,this.divBtns.form);
            obj.set_taborder("0");
            obj.set_text("취소");
            this.divBtns.addChild(obj.name, obj);

            obj = new Button("btnOk","0","0","52","26",null,null,null,null,null,null,this.divBtns.form);
            obj.set_taborder("1");
            obj.set_text("확인");
            this.divBtns.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this
            obj = new Layout("default","",this._adjust_width,this._adjust_height,this,function(p){});
            this.addLayout(obj.name, obj);
            
            // BindItem Information
            obj = new BindItem("item3","divData.form.cfCD_CORP.form.CDTextBox","value","dsList","CD_CORP");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item4","divData.form.cfCD_CORP.form.DSTextBox","value","dsList","DS_CORP");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item5","divData.form.rdoTY_FLAG","value","dsList","TY_FLAG");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item8","divData.form.cfID_SABUN.form.CDTextBox","value","dsList","ID_SABUN");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item9","divData.form.cfID_SABUN.form.DSTextBox","value","dsList","DS_HNAME");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item11","divData.form.cboTY_SALARY","value","dsList","TY_SALARY");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item12","divData.form.cboSN_SALARY","value","dsList","SN_SALARY");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item0","divData.form.tclDT_REPAYMENT","value","dsList","DT_REPAYMENT");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item1","divData.form.tclYM_SALARY.form.TextBox","value","dsList","YM_SALARY");
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
        this.registerScript("DAB_LOANTRANSPER_DLG.xfdl", function() {
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

        	this.dsList.setColumn(0, "CD_CORP", this.AuthClient.CD_CORP);
        	this.dsList.setColumn(0, "DS_CORP", this.AuthClient.DS_CORP);
        	this.dsList.setColumn(0, "DT_REPAYMENT"   , this.getOwnerFrame().DT_REPAYMENT);	// 대출상환일자
        	this.dsList.setColumn(0, "TY_FLAG"   , this.getOwnerFrame().TY_FLAG);	// 대상자 ('':전체, S : 특정사번)
        	this.dsList.setColumn(0, "YM_SALARY" , this.getOwnerFrame().DT_REPAYMENT.substr(0,6));	// 급여년월
        	this.dsList.setColumn(0, "TY_SALARY" , "S");	// 지급구분
        	this.dsList.setColumn(0, "SN_SALARY" , "1");	// 지급차수
        	this.dsList.setColumn(0, "ID_SABUN"  , this.getOwnerFrame().ID_SABUN);	// 사번
        	this.dsList.setColumn(0, "DS_HNAME"  , this.getOwnerFrame().DS_HNAME);	// 성명

        	this.cfID_SABUN.form.set_readonly(true);

            if(this.getOwnerFrame().TY_FLAG == "S"){

        		this.cfID_SABUN.form.set_readonly(false);
        	}else{
        		this.cfID_SABUN.form.set_readonly(true);

        		this.dsList.setColumn(0, "ID_SABUN", "");
        		this.dsList.setColumn(0, "DS_HNAME", "");
        	}
        };

        /************************************************************************
         * 변수 선언
         ************************************************************************/
        this.fnSetVariable = function() {
        	//this.rdoSN_GUBUN = this.divData.form.rdoSN_GUBUN; 	// 구분 (1차, 2차)

        	this.cfCD_CORP   = this.divData.form.cfCD_CORP;	    //법인코드
        	this.cfID_SABUN  = this.divData.form.cfID_SABUN;	//특정사번
        	this.tclDT_REPAYMENT  = this.divData.form.tclDT_REPAYMENT;
        	this.tclYM_SALARY = this.divData.form.tclYM_SALARY;
        	this.cboTY_SALARY = this.divData.form.cboTY_SALARY;
        };

        /************************************************************************
         * 이벤트 설정
         ************************************************************************/
        this.fnSetEvent = function() {
        	//코드파인드
        	this.cfCD_CORP.AfterCDTextChanged       = "fnAfterCDTextChanged";
        	this.cfID_SABUN.BeforeUserDataSetParam  = "fnBeforeUserDataSetParam";
        	this.cfID_SABUN.AfterCDTextChanged      = "fnAfterCDTextChanged";

        	this.dsList.addEventHandler("onvaluechanged", this.dsList_onvaluechanged, this);
        };

        /************************************************************************
         * 파라미터 설정
         ************************************************************************/
        this.fnSetParameter = function() {

        }

        /************************************************************************
         * 콤보 설정
         ************************************************************************/
        this.fnSetCombo = function() {
        	this.dsCombo = new Dataset();
        	this.dsCombo.addColumn("TY_SEL", "string");
        	this.dsCombo.addColumn("CD_PREFIX", "string");
        	this.dsCombo.addColumn("CD_UPPREFIX", "string");

        	this.dsCombo.addRow();
        	this.dsCombo.setColumn(0, "TY_SEL"     , "P");
        	this.dsCombo.setColumn(0, "CD_PREFIX"  , "GS");
        	this.dsCombo.setColumn(0, "CD_UPPREFIX", "");

        	var strSvcId    = "combo";
        	var strSvcType  = "select";
        	var inProc		= "_dsProc";
        	var inData      = "combo=dsCombo";
        	var outData     = "dsTY_SALARY=combo0";
        	var strArg      = "";
        	var callBackFnc = "fnCallback";

        	this.gfnTransaction(strSvcId,		// transaction을 구분하기 위한 svc id값
        						strSvcType, 	// transaction을 요청할 구분
        						inProc,			// Procedure 정보 Dataset 이름
        						inData, 		// 입력값으로 보낼 dataset id, a=b형태로 실제이름과 입력이름을 매칭
        						outData, 		// 처리결과값으로 받을 dataset id, a=b형태로 실제이름과 입력이름을 매칭
        						strArg, 		// 입력갑스로 보낼 arguments, strFormData="20120607"
        						callBackFnc);	// 통신방법 정의 [생략가능]
        }

        this.btnOk_onclick = function(obj,e)
        {
        	//if(!this.gfnSearchValidate(this.divData, this.dsList)) return false;
        	// 확인
        	if (this.gfnNvl(this.dsList.getColumn(0, "DT_REPAYMENT")) =="")
        	{
        		this.gfnAlert("대출상환일자를 입력하세요");
        		this.tclDT_REPAYMENT.setFocus();
        		return;
        	}
        	if (this.gfnNvl(this.dsList.getColumn(0, "YM_SALARY")) =="")
        	{
        		this.gfnAlert("급여지급년월을 입력하세요");
        		this.tclYM_SALARY.setFocus();
        		return;
        	}
        	if (this.gfnNvl(this.dsList.getColumn(0, "TY_SALARY")) =="")
        	{
        		this.gfnAlert("지급구분을 입력하세요");
        		this.cboTY_SALARY.setFocus();
        		return;
        	}
        	if (this.gfnNvl(this.dsList.getColumn(0, "SN_SALARY")) =="")
        	{
        		this.gfnAlert("지급차수를 입력하세요");
        		this.cfID_SABUN.setFocus();
        		return;
        	}
        	if(this.dsList.getColumn(0, "TY_GUBUN") == "S"){
        		if (this.gfnNvl(this.dsList.getColumn(0,"ID_SABUN"), "") =="")
        		{
        			this.gfnAlert("사번을 입력하세요");
        			this.cfID_SABUN.setFocus();
        			return;
        		}
        	}
        	this.gfnConfirm("급여이관 처리 하시겠습니까?", "fnOK_callback" );
        };

        this.fnOK_callback = function (svcId, value)
        {
        	if (value)
        	{
        		this.dsTransfer = new Dataset();
        		this.dsTransfer.addColumn("TY_WORK", "string");
        		this.dsTransfer.addColumn("DT_REPAYMENT", "string");
        		this.dsTransfer.addColumn("CD_CORP", "string");
        		this.dsTransfer.addColumn("ID_SABUN", "string");
        		this.dsTransfer.addColumn("YM_SALARY", "string");
        		this.dsTransfer.addColumn("TY_SALARY", "string");
        		this.dsTransfer.addColumn("SN_SALARY", "int");
        		this.dsTransfer.addColumn("ID_USER", "string");
        		this.dsTransfer.clearData();

        		var nrow = this.dsTransfer.addRow();
        		this.dsTransfer.setColumn(nrow, "TY_WORK", "T");
        		this.dsTransfer.setColumn(nrow, "DT_REPAYMENT", this.dsList.getColumn(0, "DT_REPAYMENT"));
        		this.dsTransfer.setColumn(nrow, "CD_CORP", this.dsList.getColumn(0, "CD_CORP"));
        		this.dsTransfer.setColumn(nrow, "ID_SABUN", this.dsList.getColumn(0, "ID_SABUN"));
        		this.dsTransfer.setColumn(nrow, "YM_SALARY",this.dsList.getColumn(0, "YM_SALARY"));
        		this.dsTransfer.setColumn(nrow, "TY_SALARY", this.dsList.getColumn(0, "TY_SALARY"));
        		this.dsTransfer.setColumn(nrow, "SN_SALARY", this.dsList.getColumn(0, "SN_SALARY"));
        		this.dsTransfer.setColumn(nrow, "ID_USER", this.AuthClient.ID_USER);

        		if (this.dsTransfer.rowcount == 0) return;

        		var strSvcId    = "save";
        		var strSvcType  = "savesel";
        		var inProc		= "_dsProc";
        		var inData      = "save=dsTransfer";
        		var outData     = "";
        		var strArg      = "";
        		var callBackFnc = "fnCallback";

        		this.gfnTransaction( strSvcId , 	// transaction을 구분하기 위한 svc id값
        							strSvcType , 	// transaction을 요청할 구분
        							inProc,			// Procedure 정보 Dataset 이름
        							inData , 		// 입력값으로 보낼 dataset id , a=b형태로 실제이름과 입력이름을 매칭
        							outData , 		// 처리결과값으로 받을 dataset id, a=b형태로 실제이름과 입력이름을 매칭
        							strArg, 		// 입력값으로 보낼 arguments, strFormData="20120607"
        							callBackFnc);   // 통신방법 정의 [생략가능]
        	}
        };

        this.fnCallback = function(svcID, errorCode, errorMsg)
        {
        	if(svcID == "save") {
        		if (errorCode == 0) {
        			this.getParentContext().close(true);
        		} else {
        			this.gfnAlert(errorMsg);
        		}
        	}
        }

        this.btnCancle_onclick = function(obj,e)
        {
        	// 취소
        	this.getParentContext().close(false);
        };

        /************************************************************************
         * Validate
         ************************************************************************/
        /*
         *	저장 Validate
         */
        /************************************************************************
         * 코드파인드 이벤트
         ************************************************************************/
        this.fnBeforeUserDataSetParam = function(id, dsUserParam, nrow) {
        //trace("코드파인드 id :["+id+"] nrow :["+nrow+"]");
        	switch(id){
        		case "cfID_SABUN" :
        			dsUserParam.setColumn(nrow, "CD_CORP", this.dsList.getColumn(0, "CD_CORP"));
        			dsUserParam.setColumn(nrow, "CD_DEPT", this.dsList.getColumn(0, "CD_DEPT"));
        			dsUserParam.setColumn(nrow, "GR_SEARCH", this.FormInfo.GR_SEARCH);
        			dsUserParam.setColumn(nrow, "YN_CORP", "N");
        			dsUserParam.setColumn(nrow, "TY_RETIRE", "");

        			break;
        	}

        	return true;
        }

        this.fnAfterCDTextChanged = function(id, codeFindData) {

        	var arr = codeFindData;

        	switch(id){
        		case "cfCD_CORP" :
        			this.dsList.setColumn(0,"ID_SABUN","");
        			this.dsList.setColumn(0,"DS_HNAME","");

        		break;
        	}
        };

        /************************************************************************
         * 콜백 이벤트
         ************************************************************************/
        this.fnCallback = function(svcID, errorCode, errorMsg)
        {
        	//trace("fnCallback >>>> svcID:["+svcID+"] errorMsg:["+errorMsg+"]");

        	if (errorCode != 0) {
        		this.gfnAlert(errorMsg);
        		return;
        	}

        	if(svcID == "save") {
        		if (errorCode == 0) {
        			this.fnClose = function() {
        				this.getParentContext().close(true);
        			}
        			this.gfnAlert("작업이 완료되었습니다.", "fnClose");
        		} else {
        			this.gfnAlert(errorMsg);
        		}
        	}
        	else if(svcID == "combo"){
         	}

        }

        /************************************************************************
         * 기타 이벤트
         ************************************************************************/


        /*
         *	조회 조건 변경시 초기화
         */
        this.dsList_onvaluechanged = function(obj,e)
        {
        	//trace("dsList_onvaluechanged >>>"+ e.columnid);
        	if(e.oldvalue != e.newvalue) {

        		this.dsList.set_enableevent(false);
        		if(e.columnid == "TY_FLAG"){
        			/*
        				%	전체
        				D	특정부서
        				S	특정사번
        			*/
        			this.dsList.set_enableevent(false);

        			if(e.newvalue == "S"){
        				this.cfID_SABUN.form.set_readonly(false);
        			}else{
        				this.cfID_SABUN.form.set_readonly(true);
        			}
        			this.dsList.setColumn(0, "ID_SABUN", "");
        			this.dsList.setColumn(0, "DS_HNAME", "");
        			this.dsList.set_enableevent(true);
        		}
        		this.dsList.set_enableevent(true);
        	}
        };

        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.form_onload,this);
            this.divData.form.cboTY_SALARY.addEventHandler("onitemchanged",this.fnSearchInit,this);
            this.divData.form.cboSN_SALARY.addEventHandler("onitemchanged",this.fnSearchInit,this);
            this.divBtns.form.btnCancle.addEventHandler("onclick",this.btnCancle_onclick,this);
            this.divBtns.form.btnOk.addEventHandler("onclick",this.btnOk_onclick,this);
        };
        this.loadIncludeScript("DAB_LOANTRANSPER_DLG.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
