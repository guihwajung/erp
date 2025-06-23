(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("DAC_MGTVACATION_PAY_DLG1");
            this.set_titletext("대상자 생성");
            this.getSetter("maxwidth").set("431");
            this.getSetter("maxheight").set("439");
            if (Form == this.constructor)
            {
                this._setFormPosition(391,364);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("dsList", this);
            obj._setContents("<ColumnInfo><Column id=\"TY_GUBUN\" type=\"STRING\" size=\"256\"/><Column id=\"SN_GUBUN\" type=\"INT\" size=\"256\"/><Column id=\"YY_BASE\" type=\"STRING\" size=\"256\"/><Column id=\"CD_CORP\" type=\"STRING\" size=\"256\"/><Column id=\"DS_CORP\" type=\"STRING\" size=\"256\"/><Column id=\"YM_BASE\" type=\"STRING\" size=\"256\"/><Column id=\"TY_FLAG\" type=\"STRING\" size=\"256\"/><Column id=\"CD_DEPT\" type=\"STRING\" size=\"256\"/><Column id=\"DS_DEPT\" type=\"STRING\" size=\"256\"/><Column id=\"ID_SABUN\" type=\"STRING\" size=\"256\"/><Column id=\"DS_HNAME\" type=\"STRING\" size=\"256\"/><Column id=\"ID_PERSON\" type=\"INT\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"TY_GUBUN\"/><Col id=\"YY_BASE\"/><Col id=\"CD_CORP\"/><Col id=\"DS_CORP\"/><Col id=\"YM_BASE\"/><Col id=\"TY_FLAG\"/><Col id=\"CD_DEPT\"/><Col id=\"DS_DEPT\"/><Col id=\"ID_SABUN\"/><Col id=\"DS_HNAME\"/><Col id=\"ID_PERSON\"/></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("_dsProc", this);
            obj._setContents("<ColumnInfo><Column id=\"TARGET\" type=\"STRING\" size=\"256\"/><Column id=\"SP\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"TARGET\">save</Col><Col id=\"SP\">DACPR_MGTVACA_PAY_CREATE</Col></Row><Row><Col id=\"SP\">DACPR_MGTVACA_PAY_G_FINAL_CREATE</Col><Col id=\"TARGET\">save_G</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsTY_GUBUN", this);
            obj._setContents("<ColumnInfo><Column id=\"CODE\" type=\"STRING\" size=\"256\"/><Column id=\"VALUE\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"CODE\">G</Col><Col id=\"VALUE\">재직자</Col></Row><Row><Col id=\"CODE\">T</Col><Col id=\"VALUE\">퇴직자</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsTY_FLAG", this);
            obj._setContents("<ColumnInfo><Column id=\"CODE\" type=\"STRING\" size=\"256\"/><Column id=\"VALUE\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"CODE\"/><Col id=\"VALUE\">전체</Col></Row><Row><Col id=\"CODE\">D</Col><Col id=\"VALUE\">특정부서</Col></Row><Row><Col id=\"CODE\">S</Col><Col id=\"VALUE\">특정사번</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsRequired", this);
            obj._setContents("<ColumnInfo><Column id=\"CD_FIELD\" type=\"STRING\" size=\"256\"/><Column id=\"DS_FIELD\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"CD_FIELD\">TY_GUBUN</Col><Col id=\"DS_FIELD\">구분</Col></Row><Row><Col id=\"CD_FIELD\">YY_BASE</Col><Col id=\"DS_FIELD\">대상년도</Col></Row><Row><Col id=\"CD_FIELD\">CD_CORP</Col><Col id=\"DS_FIELD\">법인</Col></Row><Row><Col id=\"CD_FIELD\">YM_BASE</Col><Col id=\"DS_FIELD\">기준년월</Col></Row></Rows>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Static("staTitle","0","-10",null,"35","0",null,null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_text("대상자 생성");
            obj.set_cssclass("sta_TITLE_Bg");
            obj.set_textAlign("left");
            this.addChild(obj.name, obj);

            obj = new Div("divData","0","25",null,"232","0",null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_cssclass("div_DATA_Bg");
            this.addChild(obj.name, obj);

            obj = new Static("staTyGubun","0","0","120","34",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("6");
            obj.set_text("구분");
            obj.set_cssclass("sta_WF_tablelabelTE");
            this.divData.addChild(obj.name, obj);

            obj = new Static("staTyGubunBg","119","0",null,"34","0",null,null,null,null,null,this.divData.form);
            obj.set_taborder("7");
            obj.set_cssclass("sta_WF_tablebgT");
            this.divData.addChild(obj.name, obj);

            obj = new Radio("rdoTY_GUBUN","124","5","150","24",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("0");
            obj.set_codecolumn("CODE");
            obj.set_datacolumn("VALUE");
            obj.set_direction("vertical");
            obj.set_fittocontents("width");
            obj.set_innerdataset("dsTY_GUBUN");
            obj.set_value("03");
            obj.set_index("0");
            this.divData.addChild(obj.name, obj);

            obj = new Static("staYyBase","0","33","120","34",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("8");
            obj.set_text("생성기준년도");
            obj.set_cssclass("sta_WF_tablelabelE");
            this.divData.addChild(obj.name, obj);

            obj = new Static("staYyBaseBg","119","33",null,"34","0",null,null,null,null,null,this.divData.form);
            obj.set_taborder("9");
            obj.set_cssclass("sta_WF_tablebg");
            this.divData.addChild(obj.name, obj);

            obj = new Div("tclYY_BASE","124","38","80","24",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("1");
            obj.set_url("cmm::cmmCalYY.xfdl");
            this.divData.addChild(obj.name, obj);

            obj = new Static("staCdCorp","0","99","120","34",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("10");
            obj.set_text("법인");
            obj.set_cssclass("sta_WF_tablelabelE");
            this.divData.addChild(obj.name, obj);

            obj = new Static("staCdCorpBg","119","99",null,"34","0",null,null,null,null,null,this.divData.form);
            obj.set_taborder("11");
            obj.set_cssclass("sta_WF_tablebg");
            obj.set_textAlign("right");
            this.divData.addChild(obj.name, obj);

            obj = new Div("cfCD_CORP","124","104",null,"24","4",null,null,null,null,null,this.divData.form);
            obj.getSetter("CodeFindName").set("DZX_CFCORP_STD");
            obj.getSetter("CDTextWidth").set("50");
            obj.getSetter("FitToContents").set("false");
            obj.set_taborder("2");
            obj.set_url("cmm::cmmCodeFind.xfdl");
            this.divData.addChild(obj.name, obj);

            obj = new Static("staYmBase","0","66","120","34",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("12");
            obj.set_text("통상임금적용 월");
            obj.set_cssclass("sta_WF_tablelabelE");
            this.divData.addChild(obj.name, obj);

            obj = new Static("staYmBaseBg","119","66",null,"34","0",null,null,null,null,null,this.divData.form);
            obj.set_taborder("13");
            obj.set_cssclass("sta_WF_tablebg");
            obj.set_textAlign("right");
            this.divData.addChild(obj.name, obj);

            obj = new Div("tclYM_BASE","124","71","90","24",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("3");
            obj.set_url("cmm::cmmCalMM.xfdl");
            obj.set_text("");
            this.divData.addChild(obj.name, obj);

            obj = new Static("staTyFlag","0","132","120","34",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("14");
            obj.set_text("대상자");
            obj.set_cssclass("sta_WF_tablelabel");
            this.divData.addChild(obj.name, obj);

            obj = new Static("staTyFlagBg","119","132",null,"34","0",null,null,null,null,null,this.divData.form);
            obj.set_taborder("15");
            obj.set_cssclass("sta_WF_tablebg");
            obj.set_textAlign("right");
            this.divData.addChild(obj.name, obj);

            obj = new Radio("rdoTY_FLAG","124","137","231","24",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("4");
            obj.set_codecolumn("CODE");
            obj.set_datacolumn("VALUE");
            obj.set_direction("vertical");
            obj.set_fittocontents("width");
            obj.set_innerdataset("dsTY_FLAG");
            obj.set_value("03");
            obj.set_index("0");
            this.divData.addChild(obj.name, obj);

            obj = new Static("staCdDept","0","165","120","34",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("16");
            obj.set_text("특정부서");
            obj.set_cssclass("sta_WF_tablelabel");
            this.divData.addChild(obj.name, obj);

            obj = new Static("staCdDeptBg","119","165",null,"34","0",null,null,null,null,null,this.divData.form);
            obj.set_taborder("17");
            obj.set_cssclass("sta_WF_tablebg");
            obj.set_textAlign("right");
            this.divData.addChild(obj.name, obj);

            obj = new Div("cfCD_DEPT","124","170",null,"24","4",null,null,null,null,null,this.divData.form);
            obj.getSetter("CodeFindName").set("DAX_CFDEPT");
            obj.getSetter("CDTextWidth").set("90");
            obj.getSetter("FitToContents").set("false");
            obj.set_taborder("5");
            obj.set_url("cmm::cmmCodeFind.xfdl");
            this.divData.addChild(obj.name, obj);

            obj = new Static("staIdSabun","0","198","120","34",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("18");
            obj.set_text("특정사번");
            obj.set_cssclass("sta_WF_tablelabel");
            this.divData.addChild(obj.name, obj);

            obj = new Static("staIdSabunBg","119","198",null,"34","0",null,null,null,null,null,this.divData.form);
            obj.set_taborder("19");
            obj.set_cssclass("sta_WF_tablebg");
            obj.set_textAlign("right");
            this.divData.addChild(obj.name, obj);

            obj = new Div("cfID_SABUN","124","203",null,"24","4",null,null,null,null,null,this.divData.form);
            obj.getSetter("CodeFindName").set("DAX_CFBASEINFO_ALL");
            obj.getSetter("CDTextWidth").set("90");
            obj.getSetter("FitToContents").set("false");
            obj.set_taborder("20");
            obj.set_url("cmm::cmmCodeFind.xfdl");
            this.divData.addChild(obj.name, obj);

            obj = new Combo("cboSN_GUBUN","rdoTY_GUBUN:0","5","93","24",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("21");
            obj.set_codecolumn("codecolumn");
            obj.set_datacolumn("datacolumn");
            obj.set_visible("false");
            var divData_form_cboSN_GUBUN_innerdataset = new nexacro.NormalDataset("divData_form_cboSN_GUBUN_innerdataset", obj);
            divData_form_cboSN_GUBUN_innerdataset._setContents("<ColumnInfo><Column id=\"codecolumn\" size=\"256\"/><Column id=\"datacolumn\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"codecolumn\">1</Col><Col id=\"datacolumn\">1차</Col></Row><Row><Col id=\"codecolumn\">2</Col><Col id=\"datacolumn\">2차</Col></Row><Row><Col id=\"codecolumn\">3</Col><Col id=\"datacolumn\">3차</Col></Row></Rows>");
            obj.set_innerdataset(divData_form_cboSN_GUBUN_innerdataset);
            obj.set_text("cbo00");
            this.divData.addChild(obj.name, obj);

            obj = new Div("divBtns",null,null,"200","27","0","0",null,null,null,null,this);
            obj.set_taborder("1");
            this.addChild(obj.name, obj);

            obj = new Button("btnCancle",null,"0","52","26","0",null,null,null,null,null,this.divBtns.form);
            obj.set_taborder("0");
            obj.set_text("취소");
            this.divBtns.addChild(obj.name, obj);

            obj = new Button("btnOk","92","0","52","26",null,null,null,null,null,null,this.divBtns.form);
            obj.set_taborder("1");
            obj.set_text("확인");
            obj.set_cssclass("btn_WF_action");
            this.divBtns.addChild(obj.name, obj);

            obj = new Static("staDesc","0","272",null,"50","0",null,null,null,null,null,this);
            obj.set_taborder("3");
            obj.set_text("2024년 미사용연차를 대상으로 작업됩니다.\r\n특정 사번이 입력되지 않으면 전직원을 대상으로 작업됩니다.");
            obj.set_cssclass("sta_WF_notice");
            this.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this
            obj = new Layout("default","",this._adjust_width,this._adjust_height,this,function(p){});
            this.addLayout(obj.name, obj);
            
            // BindItem Information
            obj = new BindItem("item0","divData.form.rdoTY_GUBUN","value","dsList","TY_GUBUN");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item4","divData.form.tclYY_BASE.form.TextBox","value","dsList","YY_BASE");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item5","divData.form.cfCD_CORP.form.CDTextBox","value","dsList","CD_CORP");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item6","divData.form.cfCD_CORP.form.DSTextBox","value","dsList","DS_CORP");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item1","divData.form.tclYM_BASE.form.TextBox","value","dsList","YM_BASE");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item2","divData.form.cfCD_DEPT.form.CDTextBox","value","dsList","CD_DEPT");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item3","divData.form.cfCD_DEPT.form.DSTextBox","value","dsList","DS_DEPT");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item7","divData.form.cfID_SABUN.form.CDTextBox","value","dsList","ID_SABUN");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item8","divData.form.cfID_SABUN.form.DSTextBox","value","dsList","DS_HNAME");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item9","divData.form.rdoTY_FLAG","value","dsList","TY_FLAG");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item10","divData.form.cboSN_GUBUN","value","dsList","SN_GUBUN");
            this.addChild(obj.name, obj);
            obj.bind();
            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {
            this._addPreloadList("fdl","cmm::cmmCalYY.xfdl");
            this._addPreloadList("fdl","cmm::cmmCodeFind.xfdl");
            this._addPreloadList("fdl","cmm::cmmCalMM.xfdl");
        };
        
        // User Script
        this.registerScript("DAC_MGTVACATION_PAY_CREATE_DLG.xfdl", function() {
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

        	var yy_base = this.getOwnerFrame().YY_BASE;

        	this.dsList.setColumn(0, "TY_GUBUN", this.getOwnerFrame().TY_GUBUN);	// 구분 (G: 계속근로 T: 퇴직자)
        	this.dsList.setColumn(0, "SN_GUBUN", this.getOwnerFrame().SN_GUBUN);	// 구분 G: 계속근로일때 => 1 : 1차, 2: 2차
        	this.dsList.setColumn(0, "TY_FLAG" , this.getOwnerFrame().TY_FLAG);		// 대상자 ('':전체, D:특정부서, S : 특정사번)
        	this.dsList.setColumn(0, "YY_BASE" , yy_base);
        	this.dsList.setColumn(0, "YM_BASE" , yy_base+"12");

        // 	if(this.getOwnerFrame().TY_GUBUN == 'G'){
        // 		//this.rdoSN_GUBUN.set_visible(true);
        // 		this.cboSN_GUBUN.set_visible(true);
        // 	}

        	this.cfCD_DEPT.form.set_readonly(true);
        	this.cfID_SABUN.form.set_readonly(true);

        	if(this.getOwnerFrame().TY_FLAG == "D"){
        		this.cfCD_DEPT.form.set_readonly(false);
        		this.cfID_SABUN.form.set_readonly(true);
        		this.dsList.setColumn(0, "ID_SABUN", "");
        		this.dsList.setColumn(0, "DS_HNAME", "");
        		this.dsList.setColumn(0, "ID_PERSON", "");
        	}else if(this.getOwnerFrame().TY_FLAG == "S"){
        		this.cfCD_DEPT.form.set_readonly(true);
        		this.cfID_SABUN.form.set_readonly(false);
        		this.dsList.setColumn(0, "CD_DEPT", "");
        		this.dsList.setColumn(0, "DS_DEPT", "");
        	}else{
        		this.cfCD_DEPT.form.set_readonly(true);
        		this.cfID_SABUN.form.set_readonly(true);
        		this.dsList.setColumn(0, "CD_DEPT", "");
        		this.dsList.setColumn(0, "DS_DEPT", "");
        		this.dsList.setColumn(0, "ID_SABUN", "");
        		this.dsList.setColumn(0, "DS_HNAME", "");
        		this.dsList.setColumn(0, "ID_PERSON", "");
        	}
        };

        /************************************************************************
         * 변수 선언
         ************************************************************************/
        this.fnSetVariable = function() {
        	//this.rdoSN_GUBUN = this.divData.form.rdoSN_GUBUN; 	// 구분 (1차, 2차)
        	this.cboSN_GUBUN = this.divData.form.cboSN_GUBUN; 	// 구분 (1차, 2차, 3차)
        	this.cfCD_CORP   = this.divData.form.cfCD_CORP;		//법인코드
        	this.staYmBase   = this.divData.form.staYmBase;     ////기준년월
        	this.cfCD_DEPT   = this.divData.form.cfCD_DEPT;		//특정부서
        	this.cfID_SABUN  = this.divData.form.cfID_SABUN;	//특정사번
        };

        /************************************************************************
         * 파라미터 설정
         ************************************************************************/
        this.fnSetParameter = function() {
        	this.dsSave = new Dataset();
        	this.dsSave.addColumn("TY_GUBUN" , "string");
        	this.dsSave.addColumn("SN_GUBUN" , "string");
        	this.dsSave.addColumn("YY_BASE"  , "string");
        	this.dsSave.addColumn("YM_BASE"  , "string");
        	this.dsSave.addColumn("CD_CORP"  , "string");
        	this.dsSave.addColumn("CD_DEPT"  , "string");
        	this.dsSave.addColumn("ID_SABUN" , "string");
        	this.dsSave.addColumn("ID_PERSON", "string");
        	this.dsSave.addColumn("ID_INSERT", "string");
        }

        /************************************************************************
         * 이벤트 설정
         ************************************************************************/
        this.fnSetEvent = function() {
        	//코드파인드
        	this.cfCD_CORP.AfterCDTextChanged      = "fnAfterCDTextChanged";
        	this.cfCD_DEPT.BeforeUserDataSetParam  = "fnBeforeUserDataSetParam";
        	this.cfCD_DEPT.AfterCDTextChanged      = "fnAfterCDTextChanged";
        	this.cfID_SABUN.BeforeUserDataSetParam = "fnBeforeUserDataSetParam";
        	this.cfID_SABUN.AfterCDTextChanged     = "fnAfterCDTextChanged";

        	this.dsList.addEventHandler("onvaluechanged", this.dsList_onvaluechanged, this);
        };

        /************************************************************************
         * 확인/취소 버튼
         ************************************************************************/
         // 확인 버튼
        this.btnOk_onclick = function(obj,e)
        {
        	// 확인
        	if(!this.fnSaveValidate()) {
        		this.dsRequired.deleteRow(this.dsRequired.rowcount-1);
        		return;
        	} else {
        		this.dsRequired.deleteRow(this.dsRequired.rowcount-1);
        	}
        	this.gfnConfirm("기존의 생성된 대상자는 지워집니다.  계속하시겠습니까?", "fnDialogCallback");
        };

        this.fnDialogCallback = function(strId, val)  {

        	if(val) {
        		this.dlgfnSave();
        		//this.getParentContext().close(true);  // fnCallback 에서 닫기처리
        	}
        };

        this.dlgfnSave = function() {

        	this.dsSave.clearData();
        	var nrow = this.dsSave.addRow();

        	this.dsSave.setColumn(nrow, "TY_GUBUN" , this.dsList.getColumn(0, "TY_GUBUN"));
        	this.dsSave.setColumn(nrow, "SN_GUBUN" , this.dsList.getColumn(0, "SN_GUBUN"));
        	this.dsSave.setColumn(nrow, "YY_BASE"  , this.dsList.getColumn(0, "YY_BASE"));
        	this.dsSave.setColumn(nrow, "YM_BASE"  , this.dsList.getColumn(0, "YM_BASE"));
        	this.dsSave.setColumn(nrow, "CD_CORP"  , this.dsList.getColumn(0, "CD_CORP"));
        	this.dsSave.setColumn(nrow, "CD_DEPT"  , this.dsList.getColumn(0, "CD_DEPT"));
        	this.dsSave.setColumn(nrow, "ID_SABUN" , this.dsList.getColumn(0, "ID_SABUN"));
        	this.dsSave.setColumn(nrow, "ID_PERSON", this.dsList.getColumn(0, "ID_PERSON"));
        	this.dsSave.setColumn(nrow, "ID_INSERT", this.AuthClient.ID_USER);

        	var strSvcId    = "save";
        	var strSvcType  = "save";
        	var inProc		= "_dsProc";
        	var inData      = "save=dsSave";
        	if( this.dsList.getColumn(0, "SN_GUBUN") >= 2 ){
        		inData      = "save_G=dsSave";
        	}
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

        // 취소 버튼
        this.btnCancle_onclick = function(obj,e)
        {
        	// 취소
        	this.getParentContext().close(false);
        };

        // 팝업 닫기전 확인
        this.fnClose = function()
        {
        	this.getParentContext().close(false);
        };
        /************************************************************************
         * Validate
         ************************************************************************/
        /*
         *	저장 Validate
         */
        this.fnSaveValidate = function() {
        	//대상자 체크
        	if(this.dsList.getColumn(0, "TY_FLAG") == "D"){
        		var nrow = this.dsRequired.addRow();
        		this.dsRequired.setColumn(nrow,"CD_FIELD","CD_DEPT");
        		this.dsRequired.setColumn(nrow,"DS_FIELD","특정부서");
        	}else if(this.dsList.getColumn(0, "TY_FLAG") == "S"){
        		var nrow = this.dsRequired.addRow();
        		this.dsRequired.setColumn(nrow,"CD_FIELD","ID_SABUN");
        		this.dsRequired.setColumn(nrow,"DS_FIELD","특정사번");
        	}
         	return this.gfnDataValidate(this.dsList,this.dsRequired);
        };

        /************************************************************************
         * 코드파인드 이벤트
         ************************************************************************/
        this.fnBeforeUserDataSetParam = function(id, dsUserParam, nrow) {

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
        			dsUserParam.setColumn(nrow, "CD_DEPT", this.dsList.getColumn(0, "CD_DEPT"));
        			dsUserParam.setColumn(nrow, "GR_SEARCH", this.FormInfo.GR_SEARCH);
        			dsUserParam.setColumn(nrow, "YN_CORP", "N");
        			//G : 계속근로, T : 퇴직자
        			var tyGubun =  this.dsList.getColumn(0, "TY_GUBUN");
        			if( tyGubun == "G" ){
        				dsUserParam.setColumn(nrow, "TY_RETIRE", "");
        			}else if( tyGubun == "T" ){
        				dsUserParam.setColumn(nrow, "TY_RETIRE", "04");
        			}

        			break;
        	}
        	return true;
        }

        this.fnAfterCDTextChanged = function(id, codeFindData) {
        	var arr = codeFindData;

        	switch(id){
        		case "cfCD_CORP" :
        			this.dsList.setColumn(0,"CD_DEPT","");
        			this.dsList.setColumn(0,"DS_DEPT","");
        			this.dsList.setColumn(0,"ID_SABUN","");
        			this.dsList.setColumn(0,"DS_HNAME","");
        			this.dsList.setColumn(0,"ID_PERSON","");
        		case "cfCD_DEPT" :
        			this.dsList.setColumn(0,"ID_SABUN","");
        			this.dsList.setColumn(0,"DS_HNAME","");
        			this.dsList.setColumn(0,"ID_PERSON","");
        		break;
        		case "cfID_SABUN" :
        			if(arr.length > 0) {
        				this.dsList.setColumn(0,"CD_CORP",arr[0]["CD_CORP"]);
        				this.dsList.setColumn(0,"DS_CORP",arr[0]["DS_CORP"]);
        				this.dsList.setColumn(0,"CD_DEPT",arr[0]["CD_DEPT"]);
        				this.dsList.setColumn(0,"DS_DEPT",arr[0]["DS_DEPT"]);
        				this.dsList.setColumn(0,"ID_PERSON",arr[0]["ID_PERSON"]);
        			}else{
        				this.dsList.setColumn(0,"CD_CORP","");
        				this.dsList.setColumn(0,"DS_CORP","");
        				this.dsList.setColumn(0,"CD_DEPT","");
        				this.dsList.setColumn(0,"DS_DEPT","");
        				this.dsList.setColumn(0,"ID_PERSON","");
        			}
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
        	} if(svcID == "save") {
        		if (errorCode == 0) {
        			this.getParentContext().close(true);
        		} else {

        			this.gfnAlert(errorMsg);
        		}
        	}
        }

        this.dsList_onvaluechanged = function(obj,e)
        {
        	if(e.oldvalue != e.newvalue) {

        		this.dsList.set_enableevent(false);
        		if( e.columnid == "TY_GUBUN" ){
        			if(e.newvalue == "G"){ // 계속근로
        				this.dsList.setColumn(0,"SN_GUBUN","1");
        				//this.rdoSN_GUBUN.set_visible(true);
        				//this.cboSN_GUBUN.set_visible(true);
        				this.staYmBase.set_text("통상임금적용 월");
        				this.dsList.setColumn(0,"YY_BASE", this.getOwnerFrame().YY_BASE);
        				this.dsList.setColumn(0, "YM_BASE", this.dsList.getColumn(0,"YY_BASE")+"12");
        				this.staDesc.set_text(this.dsList.getColumn(0,"YY_BASE")+ "년 미사용연차를 대상으로 작업됩니다.\n특정 사번이 입력되지 않으면 전직원을 대상으로 작업됩니다.");

        				this.dsList.setColumn(0,"TY_FLAG","");
        				this.cfCD_DEPT.form.set_readonly(true);
        				this.cfID_SABUN.form.set_readonly(true);
        				this.dsList.setColumn(0, "CD_DEPT", "");
        				this.dsList.setColumn(0, "DS_DEPT", "");
        				this.dsList.setColumn(0, "ID_SABUN", "");
        				this.dsList.setColumn(0, "DS_HNAME", "");
        				this.dsList.setColumn(0, "ID_PERSON", "");
        			} else {  // 퇴직자
        				this.dsList.setColumn(0,"SN_GUBUN","");
        				//this.rdoSN_GUBUN.set_visible(false);
        				//this.cboSN_GUBUN.set_visible(false);
        				this.staYmBase.set_text("퇴직년월");
        				//this.dsList.setColumn(0,"YY_BASE", this.gfnGetDate().substr(0,4));
        				this.dsList.setColumn(0,"YY_BASE", this.getOwnerFrame().YY_BASE);
        				this.dsList.setColumn(0, "YM_BASE",this.dsList.getColumn(0,"YY_BASE")+this.gfnGetDate().substr(4,2));
        				this.staDesc.set_text("특정 사번이 입력되지 않으면 전직원을 대상으로 작업됩니다.");

        				this.dsList.setColumn(0,"TY_FLAG","S");
        				this.cfCD_DEPT.form.set_readonly(true);
        				this.cfID_SABUN.form.set_readonly(false);
        				this.dsList.setColumn(0, "CD_DEPT", "");
        				this.dsList.setColumn(0, "DS_DEPT", "");
        			}
        		}

        		if(e.columnid == "YY_BASE"){
        			if(e.newvalue == ""){
        				this.dsList.setColumn(0, "YM_BASE", "");
        			}else{
        				if(this.dsList.getColumn(0,"TY_GUBUN") == "G"){ // 계속근로
        					this.dsList.setColumn(0, "YM_BASE", e.newvalue+"12");
        					this.staDesc.set_text(e.newvalue+ "년 미사용연차를 대상으로 작업됩니다.\n특정 사번이 입력되지 않으면 전직원을 대상으로 작업됩니다.");
        				} else {  // 퇴직자
        					this.dsList.setColumn(0, "YM_BASE", e.newvalue+this.gfnGetDate().substr(4,2));
        				}
        			}
        		}


        		if(e.columnid == "TY_FLAG"){
        			/*
        				%	전체
        				D	특정부서
        				S	특정사번
        			*/
        			this.dsList.set_enableevent(false);

        			if(e.newvalue == "D"){
        				this.cfCD_DEPT.form.set_readonly(false);
        				this.cfID_SABUN.form.set_readonly(true);
        				this.dsList.setColumn(0, "ID_SABUN", "");
        				this.dsList.setColumn(0, "DS_HNAME", "");
        				this.dsList.setColumn(0, "ID_PERSON", "");
        			}else if(e.newvalue == "S"){
        				this.cfCD_DEPT.form.set_readonly(true);
        				this.cfID_SABUN.form.set_readonly(false);
        				this.dsList.setColumn(0, "CD_DEPT", "");
        				this.dsList.setColumn(0, "DS_DEPT", "");
        			}else{
        				this.cfCD_DEPT.form.set_readonly(true);
        				this.cfID_SABUN.form.set_readonly(true);
        				this.dsList.setColumn(0, "CD_DEPT", "");
        				this.dsList.setColumn(0, "DS_DEPT", "");
        				this.dsList.setColumn(0, "ID_SABUN", "");
        				this.dsList.setColumn(0, "DS_HNAME", "");
        				this.dsList.setColumn(0, "ID_PERSON", "");
        			}
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
        this.loadIncludeScript("DAC_MGTVACATION_PAY_CREATE_DLG.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
