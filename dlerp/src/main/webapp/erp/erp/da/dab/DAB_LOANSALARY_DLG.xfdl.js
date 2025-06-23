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
            this.set_titletext("급여상환 자료생성");
            this.getSetter("maxwidth").set("415");
            this.getSetter("maxheight").set("290");
            if (Form == this.constructor)
            {
                this._setFormPosition(380,210);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("dsList", this);
            obj._setContents("<ColumnInfo><Column id=\"CD_CORP\" type=\"STRING\" size=\"256\"/><Column id=\"DS_CORP\" type=\"STRING\" size=\"256\"/><Column id=\"ID_SABUN\" type=\"STRING\" size=\"256\"/><Column id=\"DS_HNAME\" type=\"STRING\" size=\"256\"/><Column id=\"TY_GUBUN\" type=\"STRING\" size=\"256\"/><Column id=\"DT_REPAYMENT\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"CD_CORP\"/><Col id=\"DS_CORP\"/><Col id=\"ID_SABUN\"/></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("_dsProc", this);
            obj._setContents("<ColumnInfo><Column id=\"TARGET\" type=\"STRING\" size=\"256\"/><Column id=\"SP\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"TARGET\">save</Col><Col id=\"SP\">DABPR_LOANSALARY_CREATE</Col></Row><Row><Col id=\"TARGET\">combo</Col><Col id=\"SP\">DAZPR_COMMONCODE_COMBO</Col></Row></Rows>");
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
            obj.set_text("사내대출 급여상환 자료생성");
            obj.set_cssclass("sta_TITLE_Bg");
            obj.set_textAlign("left");
            this.addChild(obj.name, obj);

            obj = new Div("divData","0","25",null,"145","0",null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_cssclass("div_DATA_Bg");
            this.addChild(obj.name, obj);

            obj = new Static("staDtRepaymentBg","99","9",null,"30","0",null,null,null,null,null,this.divData.form);
            obj.set_taborder("10");
            obj.set_cssclass("sta_WF_tablebgT");
            this.divData.addChild(obj.name, obj);

            obj = new Static("staCdCorpBg","99","staDtRepaymentBg:-1",null,"30","0",null,null,null,null,null,this.divData.form);
            obj.set_taborder("4");
            obj.set_cssclass("sta_WF_tablebg");
            obj.set_textAlign("right");
            this.divData.addChild(obj.name, obj);

            obj = new Static("staTyFlagBg","99","staCdCorpBg:-1",null,"30","0",null,null,null,null,null,this.divData.form);
            obj.set_taborder("6");
            obj.set_cssclass("sta_WF_tablebg");
            obj.set_textAlign("right");
            this.divData.addChild(obj.name, obj);

            obj = new Static("staIdSabunBg","99","96",null,"30","0",null,null,null,null,null,this.divData.form);
            obj.set_taborder("8");
            obj.set_cssclass("sta_WF_tablebg");
            obj.set_textAlign("right");
            this.divData.addChild(obj.name, obj);

            obj = new Static("staDT_REPAYMENT","0","9","110","30",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("9");
            obj.set_cssclass("sta_WF_tablelabelTE");
            obj.set_text("대출상환일자");
            this.divData.addChild(obj.name, obj);

            obj = new Static("staCD_CORP","0","staDT_REPAYMENT:-1","110","30",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("3");
            obj.set_text("법인");
            obj.set_cssclass("sta_WF_tablelabelE");
            this.divData.addChild(obj.name, obj);

            obj = new Div("cfCD_CORP","114","staCD_CORP:-25",null,"20","10",null,null,null,null,null,this.divData.form);
            obj.getSetter("CodeFindName").set("DAX_CFCORP");
            obj.getSetter("CDTextWidth").set("50");
            obj.getSetter("FitToContents").set("false");
            obj.set_taborder("0");
            obj.set_url("cmm::cmmCodeFind.xfdl");
            this.divData.addChild(obj.name, obj);

            obj = new Static("staTY_FLAG","0","staCD_CORP:-1","110","30",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("5");
            obj.set_text("대상자");
            obj.set_cssclass("sta_WF_tablelabel");
            this.divData.addChild(obj.name, obj);

            obj = new Radio("rdoTY_FLAG","114","cfCD_CORP:9","231","20",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("1");
            obj.set_codecolumn("CODE");
            obj.set_datacolumn("VALUE");
            obj.set_direction("vertical");
            obj.set_fittocontents("width");
            obj.set_innerdataset("dsTY_FLAG");
            obj.set_value("03");
            obj.set_index("0");
            this.divData.addChild(obj.name, obj);

            obj = new Static("staID_SABUN","0","staCD_CORP:28","110","30",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("7");
            obj.set_text("특정사번");
            obj.set_cssclass("sta_WF_tablelabel");
            this.divData.addChild(obj.name, obj);

            obj = new Div("cfID_SABUN","114","staID_SABUN:-25",null,"20","10",null,null,null,null,null,this.divData.form);
            obj.getSetter("CodeFindName").set("DAX_LOAN");
            obj.getSetter("CDTextWidth").set("90");
            obj.getSetter("FitToContents").set("false");
            obj.set_taborder("2");
            obj.set_url("cmm::cmmCodeFind.xfdl");
            this.divData.addChild(obj.name, obj);

            obj = new Calendar("tclDT_REPAYMENT","staDT_REPAYMENT:4","14","95","20",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("11");
            obj.set_dateformat("yyyy-MM-dd");
            obj.set_editformat("yyyyMMdd");
            obj.set_autoselect("true");
            obj.set_value("");
            obj.set_readonly("false");
            this.divData.addChild(obj.name, obj);

            obj = new Div("divBtns",null,"divData:10","110","27","140",null,null,null,null,null,this);
            obj.set_taborder("1");
            this.addChild(obj.name, obj);

            obj = new Button("btnCancle",null,"0","52","26","0",null,null,null,null,null,this.divBtns.form);
            obj.set_taborder("0");
            obj.set_text("취소");
            obj.set_textAlign("center");
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

            obj = new BindItem("item5","divData.form.rdoTY_FLAG","value","dsList","TY_GUBUN");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item8","divData.form.cfID_SABUN.form.CDTextBox","value","dsList","ID_SABUN");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item9","divData.form.cfID_SABUN.form.DSTextBox","value","dsList","DS_HNAME");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item1","divData.form.tclDT_REPAYMENT","value","dsList","DT_REPAYMENT");
            this.addChild(obj.name, obj);
            obj.bind();
            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {
            this._addPreloadList("fdl","cmm::cmmCodeFind.xfdl");
        };
        
        // User Script
        this.registerScript("DAB_LOANSALARY_DLG.xfdl", function() {
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

        	trace(" YM_BASE=>" + this.getOwnerFrame().CD_CORP);
        	//this.dsList.setColumn(0, "YM_BASE"  , this.getOwnerFrame().YM_BASE);	//
        	this.dsList.setColumn(0, "CD_CORP"  , this.getOwnerFrame().CD_CORP);	//
        	this.dsList.setColumn(0, "DS_CORP"  , this.getOwnerFrame().DS_CORP);	//
        	this.dsList.setColumn(0, "ID_SABUN" , this.getOwnerFrame().ID_SABUN);	//
        	this.dsList.setColumn(0, "DS_HNAME" , this.getOwnerFrame().DS_HNAME);	//
        	this.dsList.setColumn(0, "DT_REPAYMENT"  , this.getOwnerFrame().YM_BASE + "25"); // 급여상환일자
        	this.dsList.setColumn(0, "TY_GUBUN" , "");

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
        	this.cfCD_CORP   = this.divData.form.cfCD_CORP;	    //법인코드
        	this.cfID_SABUN  = this.divData.form.cfID_SABUN;	//특정사번
        	this.tclDT_REPAYMENT = this.divData.form.tclDT_REPAYMENT;     //급여상환일자

        };

        /************************************************************************
         * 이벤트 설정
         ************************************************************************/
        this.fnSetEvent = function() {
        	//코드파인드
        	this.cfCD_CORP.AfterCDTextChanged       = "fnAfterCDTextChanged";
        	this.cfCD_CORP.BeforeUserDataSetParam   = "fnBeforeUserDataSetParam";
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

        this.btnOk_onclick = function(obj,e)
        {
        	// 확인
        	if(!this.gfnSearchValidate(this.divData, this.dsList)) return false;

        	if (this.gfnNvl(this.dsList.getColumn(0, "DT_REPAYMENT")) =="")
        	{
        		this.gfnAlert("대출상환일자을 입력하세요");
        		this.tclDT_REPAYMENT.setFocus();
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
        	this.gfnConfirm("자료생성 하시겠습니까?", "fnOK_callback" );
        };

        this.fnOK_callback = function (svcId, value)
        {
        	if (value)
        	{
        		this.dsCreate = new Dataset();
        		this.dsCreate.addColumn("CD_CORP", "string");
        		this.dsCreate.addColumn("ID_SABUN", "string");
        		//this.dsCreate.addColumn("YM_REPAYMENT", "string");
        		this.dsCreate.addColumn("DT_REPAYMENT", "string");
        		this.dsCreate.addColumn("ID_USER", "string");

        		var nrow = this.dsCreate.addRow();
        		this.dsCreate.setColumn(nrow, "CD_CORP", this.dsList.getColumn(0, "CD_CORP"));
        		this.dsCreate.setColumn(nrow, "ID_SABUN", this.dsList.getColumn(0, "ID_SABUN"));
        		//this.dsCreate.setColumn(nrow, "YM_REPAYMENT", this.dsList.getColumn(0, "YM_BASE"));
        		this.dsCreate.setColumn(nrow, "DT_REPAYMENT", this.dsList.getColumn(0, "DT_REPAYMENT"));
        		this.dsCreate.setColumn(nrow, "ID_USER", this.AuthClient.ID_USER);

        		if (this.dsCreate.rowcount == 0) return;

        		var strSvcId    = "save";
        		var strSvcType  = "savesel";
        		var inProc		= "_dsProc";
        		var inData      = "save=dsCreate";
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
         * 코드파인드 이벤트
         ************************************************************************/
        this.fnBeforeUserDataSetParam = function(id, dsUserParam, nrow) {
        //trace("코드파인드 id :["+id+"] nrow :["+nrow+"]");
        	switch(id){
        		case "cfCD_DEPT" :
        			if(this.gfnIsNull(this.dsList.getColumn(0, "CD_CORP"))) {
        				this.gfnAlert("법인을 입력하세요.");
        				return false;
        			}

        			dsUserParam.setColumn(nrow, "GR_SEARCH", this.FormInfo.GR_SEARCH); // 프로시저에서 실제 사용 안함
        			dsUserParam.setColumn(nrow, "CD_DEPT", this.dsList.getColumn(0, "CD_DEPT")); // 프로시저에서 실제 사용 안함
        			dsUserParam.setColumn(nrow, "CD_CORP", this.dsList.getColumn(0, "CD_CORP"));
        			dsUserParam.setColumn(nrow, "YN_CURRENT", "");	// 프로시저에서 실제 사용 안함

        			break;
        		case "cfID_SABUN" :
        			dsUserParam.setColumn(nrow, "CD_CORP", this.dsList.getColumn(0, "CD_CORP"));

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
        // 		if(e.columnid == "YM_BASE"){
        // 			if (this.gfnNvl(e.newvalue, "") != "" )
        // 			{
        // 				this.dsList.set_enableevent(false);
        // 				this.dsList.setColumn(0, "DT_REPAYMENT", e.newvalue+ "25");
        // 				this.dsList.set_enableevent(true);
        // 			} else {
        // 				this.dsList.set_enableevent(false);
        // 				this.dsList.setColumn(0, "DT_REPAYMENT","");
        //
        // 				this.dsList.set_enableevent(true);
        // 			}
        // 		}
        		if(e.columnid == "TY_GUBUN"){
        			/*
        				%	전체
        				S	특정사번
        			*/
        			this.dsList.set_enableevent(false);

        			if(e.newvalue == "S"){
        				this.cfID_SABUN.form.set_readonly(false);
        			}else{
        				this.cfID_SABUN.form.set_readonly(true);
        			}
        			this.dsList.setColumn(0, "CD_DEPT", "");
        			this.dsList.setColumn(0, "DS_DEPT", "");
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
            this.divBtns.form.btnCancle.addEventHandler("onclick",this.btnCancle_onclick,this);
            this.divBtns.form.btnOk.addEventHandler("onclick",this.btnOk_onclick,this);
        };
        this.loadIncludeScript("DAB_LOANSALARY_DLG.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
