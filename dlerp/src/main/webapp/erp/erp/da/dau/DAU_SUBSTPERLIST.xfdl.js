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
            this.set_titletext("급여집계표");
            if (Form == this.constructor)
            {
                this._setFormPosition(1280,720);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("dsList", this);
            obj._setContents("");
            this.addChild(obj.name, obj);


            obj = new Dataset("_dsProc", this);
            obj._setContents("<ColumnInfo><Column id=\"TARGET\" type=\"STRING\" size=\"256\"/><Column id=\"SP\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"TARGET\">select</Col><Col id=\"SP\">DAUPR_SUBSTPERLIST_SELECT</Col></Row><Row><Col id=\"TARGET\">combo</Col><Col id=\"SP\">DAUPR_SUBSTPERLIST_SELECT_HEAD</Col></Row><Row><Col id=\"TARGET\">combo2</Col><Col id=\"SP\">DAZPR_COMMONCODE_COMBO</Col></Row><Row><Col id=\"TARGET\">report</Col><Col id=\"SP\">DAUPR_SUBSTPERLIST_PRINT</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsSearch", this);
            obj._setContents("<ColumnInfo><Column id=\"CD_CORP\" type=\"STRING\" size=\"256\"/><Column id=\"ID_SABUN\" type=\"STRING\" size=\"256\"/><Column id=\"FR_SALARY\" type=\"STRING\" size=\"256\"/><Column id=\"TO_SALARY\" type=\"STRING\" size=\"256\"/><Column id=\"SN_SALARY\" type=\"STRING\" size=\"256\"/><Column id=\"TY_SALARY\" type=\"STRING\" size=\"256\"/><Column id=\"DS_CORP\" type=\"STRING\" size=\"256\"/><Column id=\"DS_HNAME\" type=\"STRING\" size=\"256\"/><Column id=\"DS_EMPTYPE\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row/></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsTY_SALARY", this);
            obj._setContents("<ColumnInfo><Column id=\"CODE\" type=\"STRING\" size=\"256\"/><Column id=\"VALUE\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"CODE\">%</Col><Col id=\"VALUE\">전체</Col></Row><Row><Col id=\"CODE\">S</Col><Col id=\"VALUE\">급여</Col></Row><Row><Col id=\"CODE\">X</Col><Col id=\"VALUE\">성과급</Col></Row><Row><Col id=\"CODE\">R</Col><Col id=\"VALUE\">퇴직급여</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsSN_SALARY", this);
            obj._setContents("<ColumnInfo><Column id=\"CODE\" type=\"STRING\" size=\"256\"/><Column id=\"VALUE\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"CODE\">%</Col><Col id=\"VALUE\">전체</Col></Row><Row><Col id=\"CODE\">1</Col><Col id=\"VALUE\">1</Col></Row><Row><Col id=\"VALUE\">2</Col><Col id=\"CODE\">2</Col></Row><Row><Col id=\"CODE\">3</Col><Col id=\"VALUE\">3</Col></Row><Row><Col id=\"CODE\">4</Col><Col id=\"VALUE\">4</Col></Row><Row><Col id=\"CODE\">5</Col><Col id=\"VALUE\">5</Col></Row><Row><Col id=\"CODE\">6</Col><Col id=\"VALUE\">6</Col></Row><Row><Col id=\"CODE\">7</Col><Col id=\"VALUE\">7</Col></Row><Row><Col id=\"CODE\">8</Col><Col id=\"VALUE\">8</Col></Row><Row><Col id=\"CODE\">9</Col><Col id=\"VALUE\">9</Col></Row><Row><Col id=\"CODE\">10</Col><Col id=\"VALUE\">10</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsDS_EMPTYPE", this);
            obj._setContents("<ColumnInfo><Column id=\"CODE\" type=\"STRING\" size=\"256\"/><Column id=\"VALUE\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"CODE\">%</Col><Col id=\"VALUE\">전체</Col></Row><Row><Col id=\"CODE\">01</Col><Col id=\"VALUE\">임원</Col></Row><Row><Col id=\"CODE\">02</Col><Col id=\"VALUE\">직원</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsHeader", this);
            obj.set_enableevent("false");
            obj._setContents("<ColumnInfo><Column id=\"CD_CODE\" type=\"STRING\" size=\"256\"/><Column id=\"DS_CODE\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Div("divSearch","0","0",null,"46.0","0",null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_cssclass("div_SEARCH_Bg");
            this.addChild(obj.name, obj);

            obj = new Static("staCD_CORP","0","10.0","66","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("0");
            obj.set_text("법인");
            obj.set_cssclass("sta_WF_SchLabelE");
            this.divSearch.addChild(obj.name, obj);

            obj = new Div("ccfCD_CORP","staCD_CORP:0.0","10.0","250","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.getSetter("CDTextWidth").set("50");
            obj.set_taborder("1");
            obj.set_url("cmm::cmmCodeFind.xfdl");
            obj.set_text("");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("staYY_WORK","ccfCD_CORP:0.0","10.0","92.0","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("2");
            obj.set_text("지급년월");
            obj.set_cssclass("sta_WF_SchLabelE");
            this.divSearch.addChild(obj.name, obj);

            obj = new Div("ctclFR_SALARY","staYY_WORK:0.0","10.0","80","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("3");
            obj.set_url("cmm::cmmCalMM.xfdl");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("staDT_ORD_TO","ctclFR_SALARY:0.0","10.0","30.0","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("4");
            obj.set_text("~");
            obj.set_cssclass("sta_WF_AC");
            this.divSearch.addChild(obj.name, obj);

            obj = new Div("ctclTO_SALARY","staDT_ORD_TO:0.0","10.0","80","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("5");
            obj.set_url("cmm::cmmCalMM.xfdl");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("staTY_SALARY","ctclTO_SALARY:0.0","10.0","92.0","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("6");
            obj.set_text("지급구분");
            obj.set_cssclass("sta_WF_SchLabelE");
            this.divSearch.addChild(obj.name, obj);

            obj = new Combo("cboTY_SALARY","staTY_SALARY:0.0","10.0","70","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("7");
            obj.set_innerdataset("dsTY_SALARY");
            obj.set_codecolumn("CODE");
            obj.set_datacolumn("VALUE");
            obj.set_readonly("false");
            obj.set_text("");
            obj.set_value("");
            obj.set_index("-1");
            this.divSearch.addChild(obj.name, obj);

            obj = new Combo("cboSN_SALARY","cboTY_SALARY:5","10.0","60","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("8");
            obj.set_innerdataset("dsSN_SALARY");
            obj.set_datacolumn("VALUE");
            obj.set_codecolumn("CODE");
            obj.set_readonly("false");
            obj.set_text("");
            obj.set_value("");
            obj.set_index("-1");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("staDS_EMPTYPE","cboSN_SALARY:0.0","10.0","92.0","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("9");
            obj.set_text("직원구분");
            obj.set_cssclass("sta_WF_SchLabelE");
            this.divSearch.addChild(obj.name, obj);

            obj = new Combo("cboDS_EMPTYPE","staDS_EMPTYPE:0.0","10.0","70","24",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("10");
            obj.set_innerdataset("dsDS_EMPTYPE");
            obj.set_codecolumn("CODE");
            obj.set_datacolumn("VALUE");
            obj.set_readonly("false");
            obj.set_text("");
            obj.set_value("");
            obj.set_index("-1");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("staID_SABUN","cboDS_EMPTYPE:0.0","10.0","66","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("11");
            obj.set_text("성명");
            obj.set_cssclass("sta_WF_SchLabel");
            this.divSearch.addChild(obj.name, obj);

            obj = new Div("ccfID_SABUN","staID_SABUN:0.0","10.0","250","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.getSetter("CDTextWidth").set("80");
            obj.set_taborder("12");
            obj.set_url("cmm::cmmCodeFind.xfdl");
            obj.set_text("");
            this.divSearch.addChild(obj.name, obj);

            obj = new Div("divData","0","divSearch:10",null,null,"0","0",null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_cssclass("div_DATA_Bg");
            this.addChild(obj.name, obj);

            obj = new Grid("objGrid","0","0",null,null,"0","0",null,null,null,null,this.divData.form);
            obj.set_taborder("0");
            obj._setContents("");
            this.divData.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this
            obj = new Layout("default","",this._adjust_width,this._adjust_height,this,function(p){});
            this.addLayout(obj.name, obj);
            
            // BindItem Information
            obj = new BindItem("item0","divSearch.form.cboTY_SALARY","value","dsSearch","TY_SALARY");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item1","divSearch.form.cboSN_SALARY","value","dsSearch","SN_SALARY");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item2","divSearch.form.ctclFR_SALARY.form.TextBox","value","dsSearch","FR_SALARY");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item3","divSearch.form.ctclTO_SALARY.form.TextBox","value","dsSearch","TO_SALARY");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item4","divSearch.form.ccfCD_CORP.form.DSTextBox","value","dsSearch","DS_CORP");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item5","divSearch.form.ccfCD_CORP.form.CDTextBox","value","dsSearch","CD_CORP");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item6","divSearch.form.ccfID_SABUN.form.DSTextBox","value","dsSearch","DS_HNAME");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item7","divSearch.form.ccfID_SABUN.form.CDTextBox","value","dsSearch","ID_SABUN");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item8","divSearch.form.cboDS_EMPTYPE","value","dsSearch","DS_EMPTYPE");
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
        this.registerScript("DAU_SUBSTPERLIST.xfdl", function() {
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
        	this.fnSetCombo();


        // 	//지급년월(현재월)
        // 	this.divSearch.form.ctclFR_SALARY.form.TextBox.set_value(this.gfnGetDate().substr(0,6));
        // 	this.divSearch.form.ctclTO_SALARY.form.TextBox.set_value(this.gfnGetDate().substr(0,6));
        //
        // 	this.dsSearch.setColumn(0, "TY_SALARY", "S");
        // 	this.dsSearch.setColumn(0, "SN_SALARY", "1");

        	//this.FormBtns.Select.click();
        };

        /************************************************************************
         * 버튼 설정 : 화면(Tab) 전환시 마다 호출
         * 서브버튼 사용 및 공통버튼 강제 제어시 여기서 처리
         ************************************************************************/
        this.fnSetButton = function() {
        	// Select, Add, Del, Save, Excel, Print
        	// SubSelect, SubAdd, SubDel, SuubSave, SubExcel
        	//this.FormBtns.Select.set_enable(false);
        	this.FormBtns.Add.set_enable(false);
        	this.FormBtns.Del.set_enable(false);
        	this.FormBtns.Save.set_enable(false);
        	//this.FormBtns.Print.set_enable(false);
        }

        /************************************************************************
         * 확장 버튼 : 화면별 버튼 설정 ID, function 연결 (화면버튼관리)
         ************************************************************************/
        this.fnSetExtendButton = function() {
        	//this.btnPrintSubStrer = this.gfnFormButtonAdd("PrintSubstper", "fnPrintSubstper", "항목별월별대비표");
        };

        /************************************************************************
         * 변수 선언
         ************************************************************************/
        this.fnSetVariable = function() {

        	this.ccfCD_CORP = this.divSearch.form.ccfCD_CORP;
        	this.ctclFR_SALARY = this.divSearch.form.ctclFR_SALARY;
        	this.ctclTO_SALARY = this.divSearch.form.ctclTO_SALARY;
        	this.cboTY_SALARY = this.divSearch.form.cboTY_SALARY;
        	this.cboSN_SALARY = this.divSearch.form.cboSN_SALARY;
        	this.ccfID_SABUN = this.divSearch.form.ccfID_SABUN;
        	this.cboDS_EMPTYPE = this.divSearch.form.cboDS_EMPTYPE;	// 20240523 직원구분 추가

        	this.dxGrid = this.divData.form.objGrid;
        	//this.dxGrid2 = this.divData.form.tabData.tab2.form.objGrid2;

        	this.grSearch = this.FormInfo.GR_SEARCH;					          // 권한
        	this.cdGroup = this.AuthClient.CD_GROUP;					          // 그룹코드

        };

        /************************************************************************
         * 이벤트 설정
         ************************************************************************/
        this.fnSetEvent = function() {


        	this.ccfCD_CORP.CodeFindName = "DAX_CFCORP_CODEFIND";
        	this.ccfCD_CORP.BeforeUserDataSetParam = "fnBeforeUserDataSetParam";
        	this.ccfCD_CORP.AfterCDTextChanged = "fnAfterCDTextChanged";

        	this.ccfID_SABUN.CodeFindName = "DAX_CFBASEINFO";
        	this.ccfID_SABUN.BeforeUserDataSetParam = "fnBeforeUserDataSetParam";
        	this.ccfID_SABUN.AfterCDTextChanged = "fnAfterCDTextChanged";

        	// 그리드 초기화
        	this.gfnGridInit(this.dxGrid, this.dsList, "DA", "DAU_SUBSTPERLIST");
        	this.dxGrid.set_selecttype("cell");

        	for( var i = 2 ; i < this.dxGrid.getCellCount("body"); i++){
        		this.dxGrid.setCellProperty( "body", i, "cssclass", "expr:dataset.getColumn(currow, 'CD_ALLOW') == 'T' ? 'BACK_ChongKe': '' " );
        	}

        	//지급년월(현재월)
        	this.divSearch.form.ctclFR_SALARY.form.TextBox.set_value(this.gfnGetDate().substr(0,6));
        	this.divSearch.form.ctclTO_SALARY.form.TextBox.set_value(this.gfnGetDate().substr(0,6));

        	this.dsSearch.setColumn(0, "TY_SALARY", "%");
        	this.dsSearch.setColumn(0, "SN_SALARY", "%");
        	this.dsSearch.setColumn(0, "DS_EMPTYPE", "%");

        	//법인 셋팅
        	this.divSearch.form.ccfCD_CORP.form.CDTextBox.set_value(this.AuthClient.CD_CORP);
        	this.divSearch.form.ccfCD_CORP.form.DSTextBox.set_value(this.AuthClient.DS_CORP);

        };

        /************************************************************************
         * 파라미터 설정
         ************************************************************************/
        this.fnSetParameter = function() {

        	this.dsSelect = new Dataset();
        	this.dsSelect.addColumn("CD_CORP", "string");
        	this.dsSelect.addColumn("FR_SALARY", "string");
        	this.dsSelect.addColumn("TO_SALARY", "string");
        	this.dsSelect.addColumn("TY_SALARY", "string");
        	this.dsSelect.addColumn("SN_SALARY", "string");
        	this.dsSelect.addColumn("ID_SABUN", "string");
        	this.dsSelect.addColumn("DS_EMPTYPE", "string");

        }

        /************************************************************************
         * 컨트롤 이벤트
         ************************************************************************/
         /*
          *	조회 버튼
          */
        this.fnSelect = function() {
        	if (!this.fnSelectValidate()) return false;

        	this.fnSetGridColunm(this.dsHeader);

        	this.gfnGridBeforeSelect(this.dxGrid);

        	this.dsSelect.clearData();
        	this.dsSelect.addRow();

        	this.dsSelect.setColumn(0, "CD_CORP", this.ccfCD_CORP.form.CDTextBox.value);
        	this.dsSelect.setColumn(0, "FR_SALARY", this.ctclFR_SALARY.form.TextBox.value);
        	this.dsSelect.setColumn(0, "TO_SALARY", this.ctclTO_SALARY.form.TextBox.value);
        	this.dsSelect.setColumn(0, "TY_SALARY", this.cboTY_SALARY.value);
        	this.dsSelect.setColumn(0, "SN_SALARY", this.cboSN_SALARY.value);
        	this.dsSelect.setColumn(0, "ID_SABUN", this.ccfID_SABUN.form.CDTextBox.value);
        	this.dsSelect.setColumn(0, "DS_EMPTYPE", this.cboDS_EMPTYPE.value);

        	var strSvcId    = "select";
        	var strSvcType  = "grid";
        	var inProc		= "_dsProc";
        	var inData      = "select=dsSelect";
        	var outData     = "dsList=select0";
        	var strArg      = "";
        	var callBackFnc = "fnCallback";

        	this.gfnTransaction( strSvcId , 	// transaction을 구분하기 위한 svc id값
        						strSvcType , 	// transaction을 요청할 구분
        						inProc,			// Procedure 정보 Dataset 이름
        						inData , 		// 입력값으로 보낼 dataset id , a=b형태로 실제이름과 입력이름을 매칭
        						outData , 		// 처리결과값으로 받을 dataset id, a=b형태로 실제이름과 입력이름을 매칭
        						strArg, 			// 입력갑스로 보낼 arguments, strFormData="20120607"
        						callBackFnc); // 통신방법 정의 [생략가능]

        };

        /*
         *	입력 버튼
         */
        this.fnAdd = function() {

        }

        /*
         *	삭제 버튼
         */
        this.fnDel = function() {

        }

        /*
         *	저장 버튼
         */
        this.fnSave = function() {

        }


        /*
         *	엑셀 버튼
         */
        this.fnExcel = function() {
        	this.gfnExcelExport(this.dxGrid);
        }

        /*
         *	출력 버튼
         */
        this.fnPrint = function() {
        	this.fnPrintSubstper();
        }

        /************************************************************************
         * Validate
         ************************************************************************/
        /*
         *	조회 Validate
         */
        this.fnSelectValidate = function() {

        	if(this.gfnIsNull(this.ccfCD_CORP.form.CDTextBox.value)){
        		this.gfnAlert("법인을 입력하세요.");
        		this.ccfCD_CORP.form.CDTextBox.setFocus();
        		return false;
        	}

        	if(this.gfnIsNull(this.ctclFR_SALARY.form.TextBox.value)){
        		this.gfnAlert("시작월을 입력하세요.");
        		this.ctclFR_SALARY.form.TextBox.setFocus();
        		return false;
        	}

        	if(this.gfnIsNull(this.ctclTO_SALARY.form.TextBox.value)){
        		this.gfnAlert("종료월을 입력하세요.");
        		this.ctclTO_SALARY.form.TextBox.setFocus();
        		return false;
        	}

        	if(!this.gfnIsNull(this.ctclFR_SALARY.form.TextBox.value) && !this.gfnIsNull(this.ctclTO_SALARY.form.TextBox.value)){
        		if(this.ctclFR_SALARY.form.TextBox.value > this.ctclTO_SALARY.form.TextBox.value){
        			validate = false;
        			this.gfnAlert("지급 시작월이 종료월보다 클 수 없습니다.");
        			this.ctclFR_SALARY.form.TextBox.setFocus();
        			return false;
        		}
        	}
        	return true;
        };

        /************************************************************************
         * 콜백 이벤트
         ************************************************************************/
        /*
         *	콜백 처리
         */
        this.fnCallback = function(svcID, errorCode, errorMsg)
        {
        	if (svcID == "select") {
        		for( var i = 2 ; i < this.dxGrid.getCellCount("body"); i++){
        			this.dxGrid.setCellProperty( "body", i, "cssclass", "expr:dataset.getColumn(currow, 'CD_ALLOW') == 'T' ? 'BACK_ChongKe': '' " );
        		}

        		var dsCodeName = new Array();
        		for(var c=0; c<this.dsHeader.rowcount; c++){
        			dsCodeName[c] = this.dsHeader.getColumn(c, "DS_CODE");
        		}

        		this.dsList.addColumn("SUB_TOT_AMT", "BIGDECIMAL", 256);

        		this.dsList.set_enableevent(false);
        		for(var r=0; r<this.dsList.rowcount; r++){
        		    var tmpAmt = 0;
        			for(var l=0; l<dsCodeName.length; l++){
        				tmpAmt = tmpAmt + ( this.gfnIsNull(this.dsList.getColumn(r, dsCodeName[l])) ? 0 : nexacro.toNumber(this.dsList.getColumn(r, dsCodeName[l])) )  ;
        				//tmpAmt = tmpAmt + ( this.gfnIsNull(this.dsList.getColumn(r, dsCodeName[l])) ? 0 : parseFloat(this.dsList.getColumn(r, dsCodeName[l])) )  ;
        				//trace("조회결과 row["+r+"] idx["+l+"] tmpAmt["+tmpAmt+"]");
        			}
        			this.dsList.setColumn(r, "SUB_TOT_AMT", tmpAmt);
        		}
        		this.dsList.set_enableevent(true);

        		this.gfnGridAfterSelect(this.dxGrid);
        		this.FormBtns.Add.set_enable(false);
        		this.FormBtns.Del.set_enable(false);
        		this.FormBtns.Save.set_enable(false);
        		//this.FormBtns.Print.set_enable(false);
        	}
        	else if(svcID == "combo"){
        		//this.cboDS_EMPTYPE.set_index(0);
        		//trace(this.dsHeader.saveXML());
         	}
        	else if(svcID == "save"){
        		if (errorCode == 0) {
        			this.FormBtns.Select.click();
        		} else {
        			this.gfnAlert(errorMsg);
        		}
        	}

        }

        /************************************************************************
         * 코드파인드 이벤트
         ************************************************************************/
        this.fnBeforeUserDataSetParam = function(id, dsUserParam, nrow) {
        	//trace("코드파인드 id:"+id);
        	switch(id) {
        		case "ccfCD_CORP":
        // 			dsUserParam.setColumn(nrow, "GR_SEARCH", this.FormInfo.GR_SEARCH);
        // 			dsUserParam.setColumn(nrow, "CD_DEPT", this.AuthClient.CD_DEPT);
        			break;
        		case "ccfCD_DEPT":
        			var cd_corp = this.ccfCD_CORP.form.CDTextBox.value;
        			//var cd_corp = this.gfnNvl(this.ccfCD_CORP.form.CDTextBox.value, this.AuthClient.CD_CORP)

        			dsUserParam.setColumn(nrow, "GR_SEARCH", this.FormInfo.GR_SEARCH);
        			dsUserParam.setColumn(nrow, "CD_DEPT", this.AuthClient.CD_DEPT);
        			dsUserParam.setColumn(nrow, "CD_CORP", this.gfnNvl(this.ccfCD_CORP.form.CDTextBox.value,this.AuthClient.CD_CORP));
        			dsUserParam.setColumn(nrow, "YN_CURRENT", "");

        			break;
        		case "ccfID_SABUN":
        			dsUserParam.setColumn(nrow, "GR_SEARCH", this.FormInfo.GR_SEARCH);
        			dsUserParam.setColumn(nrow, "CD_DEPT", "%");
        			dsUserParam.setColumn(nrow, "TY_RETIRE", "%");	// 재직구분
        			break;
        		case "DAX_CFBASEINFO_ALL":
        			dsUserParam.setColumn(nrow, "CD_CORP", this.AuthClient.CD_CORP);
        			dsUserParam.setColumn(nrow, "GR_SEARCH", this.FormInfo.GR_SEARCH);
        			dsUserParam.setColumn(nrow, "CD_DEPT", "%");
        			dsUserParam.setColumn(nrow, "YN_CORP", "Y");
        			dsUserParam.setColumn(nrow, "TY_RETIRE", "%");	// 재직구분
        			break;

        		default:
        	}

        	return true;

        };

        var DT_JOIN = "";
        var DT_RETIRE = "";
        var DS_DEPT = "";
        var DS_POSITION = "";


        this.fnAfterCDTextChanged = function(id, codeFindData) {
        	//this.fnSearchInit();
        	trace(id);

        	var arr = codeFindData;

        	switch(id){
        		case "ccfID_SABUN" :
        			DT_JOIN = arr[0]["DT_JOIN"];
        			DT_RETIRE = arr[0]["DT_RETIRE"];
        			DS_DEPT = arr[0]["DS_DEPT"];
        			DS_POSITION = arr[0]["DS_POSITION"];

        	//		trace(DT_JOIN);
        // 			this.dsList.setColumn(0, "DT_JOIN", arr[0]["CD_DEPT"]);
        // 			this.dsList.setColumn(0, "DT_RETIRE", arr[0]["DT_RETIRE"]);
        // 			this.dsList.setColumn(0, "DS_DEPT", arr[0]["DS_DEPT"]);
        // 			this.dsList.setColumn(0, "DS_POISION", arr[0]["DS_POISION"]);
        		break;

        	}

        	this.fnSearchInit();
        }

        /************************************************************************
         * 그리드 이벤트
         ************************************************************************/


        /************************************************************************
        * 확장버튼 이벤트
        ************************************************************************/
        // 항목별월별대비표 출력
        this.fnPrintSubstper = function() {

        	if (!this.fnSelectValidate()) return false;

        	var FR_SALARY = this.dsSearch.getColumn(0, "FR_SALARY");
        	var TO_SALARY = this.dsSearch.getColumn(0, "TO_SALARY");
        	if(this.gfnGetDiffMonth(FR_SALARY, TO_SALARY) > 12 ){
        		this.gfnAlert("12개월 이내만 조회 가능합니다.");
        		this.ctclFR_SALARY.form.TextBox.setFocus();
        		return false;
        	}

        	this.dsReport = new Dataset();
        	this.dsReport.addColumn("CD_CORP", "string");
        	this.dsReport.addColumn("DS_CORP", "string");
        	this.dsReport.addColumn("FR_SALARY", "string");
        	this.dsReport.addColumn("TO_SALARY", "string");
        	this.dsReport.addColumn("TY_SALARY", "string");
        	this.dsReport.addColumn("SN_SALARY", "string");
        	this.dsReport.addColumn("ID_SABUN", "string");
        	this.dsReport.addColumn("DS_HNAME", "string");

        	this.dsReport.addColumn("DT_JOIN", "string");
        	this.dsReport.addColumn("DT_RETIRE", "string");
        	this.dsReport.addColumn("DS_DEPT", "string");
        	this.dsReport.addColumn("DS_POSITION", "string");

        	var nrow = this.dsReport.addRow();
        	this.dsReport.setColumn(0, "CD_CORP", this.dsSearch.getColumn(0, "CD_CORP"));
        	this.dsReport.setColumn(0, "DS_CORP", this.dsSearch.getColumn(0, "DS_CORP"));
        	this.dsReport.setColumn(0, "FR_SALARY", this.dsSearch.getColumn(0, "FR_SALARY"));
        	this.dsReport.setColumn(0, "TO_SALARY", this.dsSearch.getColumn(0, "TO_SALARY"));
        	this.dsReport.setColumn(0, "TY_SALARY", this.dsSearch.getColumn(0, "TY_SALARY"));
        	this.dsReport.setColumn(0, "SN_SALARY", this.dsSearch.getColumn(0, "SN_SALARY"));
        	this.dsReport.setColumn(0, "ID_SABUN", this.dsSearch.getColumn(0, "ID_SABUN"));
        	this.dsReport.setColumn(0, "DS_HNAME", this.dsSearch.getColumn(0, "DS_HNAME"));

        	this.dsReport.setColumn(0, "DT_JOIN", DT_JOIN);
        	this.dsReport.setColumn(0, "DT_RETIRE", DT_RETIRE);
        	this.dsReport.setColumn(0, "DS_DEPT", DS_DEPT);
        	this.dsReport.setColumn(0, "DS_POSITION", DS_POSITION);

        //trace(DT_JOIN);

        	var inProc		= "_dsProc";
        	var inParam 	= "params=dsReport";	// 조회SP이외 사용할 정보
        	//var inParam 	= "";					// 필요없는 경우 생략
        	var inData      = "report=dsReport";
        	var reportpath  = "/da/dau/DAU_SUBSTPERLIST_PRINT.ozr";

        	gfnOpenReport(this, reportpath, inProc, inParam, inData);
        };

        /************************************************************************
         * 기타 이벤트
         ************************************************************************/
        /*
         *	조회 조건 변경시 초기화
         */
        this.fnSearchInit = function(obj,e) {
        	if(e == null || (e.pretext != e.posttext)) {
        		this.gfnSetFormStatus(this);
        		this.gfnGridClear(this.dxGrid);
        	}
        };

        this.fnSetCombo = function() {

        	this.dsCombo = new Dataset();
        	this.dsCombo.addColumn("FR_SALARY", "string");
        	this.dsCombo.addColumn("TO_SALARY", "string");

        	this.dsCombo.addRow();
        // 	this.dsCombo.setColumn(0, "FR_SALARY", this.ctclFR_SALARY.form.TextBox.value);
        // 	this.dsCombo.setColumn(0, "TO_SALARY", this.ctclTO_SALARY.form.TextBox.value);
        	this.dsCombo.setColumn(0, "FR_SALARY", this.dsSearch.getColumn(0, "FR_SALARY"));
        	this.dsCombo.setColumn(0, "TO_SALARY", this.dsSearch.getColumn(0, "TO_SALARY"));
        //
        // 	this.dsCombo2 = new Dataset();
        // 	this.dsCombo2.addColumn("TY_SEL"     , "string");
        // 	this.dsCombo2.addColumn("CD_PREFIX"  , "string");
        // 	this.dsCombo2.addColumn("CD_UPPREFIX", "string");
        //
        // 	this.dsCombo2.addRow();
        // 	this.dsCombo2.setColumn(0, "TY_SEL"     , "A");	//A
        // 	this.dsCombo2.setColumn(0, "CD_PREFIX"  , "EA");
        // 	this.dsCombo2.setColumn(0, "CD_UPPREFIX", "");

        	var strSvcId    = "combo";
        	var strSvcType  = "select";
        	var inProc		= "_dsProc";
        	var inData      = "combo=dsCombo";
        	var outData     = "dsHeader=combo0";
        // 	var inData      = "combo=dsCombo combo2=dsCombo2";
        // 	var outData     = "dsHeader=combo0 dsDS_EMPTYPE=combo20";
        	var strArg      = "";
        	var callBackFnc = "fnCallback";

        	this.gfnTransaction( strSvcId , 	// transaction을 구분하기 위한 svc id값
        						strSvcType , 	// transaction을 요청할 구분
        						inProc,			// Procedure 정보 Dataset 이름
        						inData , 		// 입력값으로 보낼 dataset id , a=b형태로 실제이름과 입력이름을 매칭
        						outData , 		// 처리결과값으로 받을 dataset id, a=b형태로 실제이름과 입력이름을 매칭
        						strArg, 			// 입력갑스로 보낼 arguments, strFormData="20120607"
        						callBackFnc); // 통신방법 정의 [생략가능]
        };

        this.fnSetGridColunm = function ( objDataSet ){

        	this.gfnGridInit(this.dxGrid, this.dsList, "DA", "DAU_SUBSTPERLIST");

        	var ncol1 = 0;
        	var ncol2 = 0;
        	var ncol3 = 1;
        	var cols = 0; // merge 되면서 cell index가 조정된다.
        	this.dxGrid.set_enableredraw(false);
        	this.dsList.set_enableevent(false);
         	for ( var i =this.dxGrid.getCellCount("body")-1; 6 < i ; i--){
         		if( this.gfnGridGetBindColumnNameByIndex( this.dxGrid, i).search("CD_") > -1 ){
         			this.dxGrid.deleteContentsCol("body",i);
         		}
        		if( this.gfnGridGetBindColumnNameByIndex( this.dxGrid, i).search("SUB_TOT_AMT") > -1 ){
         			this.dxGrid.deleteContentsCol("body",i);
         		}
         	}

        	for ( var i =this.dsList.colcount-1; -1 < i ; i--){
        		//trace(i+"=" + this.dsList.getColID(i));
        		if( this.dsList.getColID(i).search("CD_") > -1 ){
        			this.dsList.deleteColumn(i);
        		}
        		if( this.dsList.getColID(i).search("SUB_TOT_AMT") > -1 ){
        			this.dsList.deleteColumn(i);
        		}
        	}

        	ncol1 = this.dxGrid.appendContentsCol();
        	this.dxGrid.setFormatColProperty(ncol1, "size", 130);
        	this.dxGrid.setCellProperty("head", ncol1, "text", "합계");
        	this.dxGrid.setCellProperty("body", ncol1, "displaytype", "number");
        	this.dxGrid.setCellProperty("body", ncol1, "text", "bind:SUB_TOT_AMT");
        	this.dxGrid.setCellProperty("summ", ncol1, "displaytype", "number");
        	this.dxGrid.setCellProperty("summ", ncol1 , "text", "expr:dataset.getSum('SUB_TOT_AMT')");

        	for( var i = 0; i < objDataSet.rowcount; i++ ){
        		var objColinfo = new ColumnInfo() ;
        		objColinfo.set_type( "BIGDECIMAL" );
        		objColinfo.set_size( 256 );

        		//this.dsList.addColumnInfo("CD_"+objDataSet.getColumn(i,"CD_CODE"),objColinfo);
        		this.dsList.addColumnInfo(objDataSet.getColumn(i,"DS_CODE"),objColinfo);

        		ncol1 = this.dxGrid.appendContentsCol();
        		this.dxGrid.setFormatColProperty(ncol1, "size", 90);
        		this.dxGrid.setCellProperty("head", ncol1, "text", objDataSet.getColumn(i,"CD_CODE").substr(0,4)+"-"+objDataSet.getColumn(i,"CD_CODE").substr(4,2) );
        		this.dxGrid.setCellProperty("body", ncol1, "displaytype", "number");
        //		this.dxGrid.setCellProperty("body", ncol1, "text", "bind:" + "CD_"+objDataSet.getColumn(i,"CD_CODE"));
        		this.dxGrid.setCellProperty("body", ncol1, "text", "bind:" + objDataSet.getColumn(i,"DS_CODE"));
        		this.dxGrid.setCellProperty("summ", ncol1, "displaytype", "number");
        //		this.dxGrid.setCellProperty("summ", ncol1 , "text", "expr:dataset.getSum('CD_" + objDataSet.getColumn(i,"CD_CODE") + "')");
        		this.dxGrid.setCellProperty("summ", ncol1 , "text", "expr:dataset.getSum('" + objDataSet.getColumn(i,"DS_CODE") + "')");

        	}
        	this.dxGrid.set_enableredraw(true);
        	this.dsList.set_enableevent(true);
        };

        this.dsSearch_onvaluechanged = function(obj,e)
        {
        //trace("dsSearch_onvaluechanged >>>>e.oldvalue["+e.oldvalue+"] e.newvalue["+e.newvalue+"]");
        	if(e.oldvalue != e.newvalue) {
        		this.gfnSetFormStatus(this);	// 폼상태 초기화
        		this.gfnGridClear(this.dxGrid);

        		if(e.columnid == "FR_SALARY" || e.columnid == "TO_SALARY"){
        			if(!this.gfnIsNull(this.ctclFR_SALARY.form.TextBox.value) && !this.gfnIsNull(this.ctclTO_SALARY.form.TextBox.value)){
        				this.fnSetCombo();
        			}
        		}
        	}
        };

        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.form_onload,this);
            this.divSearch.form.cboTY_SALARY.addEventHandler("onitemchanged",this.fnSearchInit,this);
            this.divSearch.form.cboSN_SALARY.addEventHandler("onitemchanged",this.fnSearchInit,this);
            this.divSearch.form.cboDS_EMPTYPE.addEventHandler("onitemchanged",this.fnSearchInit,this);
            this.divData.form.objGrid.addEventHandler("oncellclick",this.divData_objGrid_oncellclick,this);
            this.divData.form.objGrid.addEventHandler("oncellposchanged",this.divData_objGrid_oncellposchanged,this);
            this.dsSearch.addEventHandler("onvaluechanged",this.dsSearch_onvaluechanged,this);
        };
        this.loadIncludeScript("DAU_SUBSTPERLIST.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
