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
            this.set_titletext("건물 등 감가상각 자산취득명세서");
            if (Form == this.constructor)
            {
                this._setFormPosition(1280,720);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("dsList", this);
            obj._setContents("");
            this.addChild(obj.name, obj);


            obj = new Dataset("_dsProc", this);
            obj._setContents("<ColumnInfo><Column id=\"TARGET\" type=\"STRING\" size=\"256\"/><Column id=\"SP\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"TARGET\">select</Col><Col id=\"SP\">DHVPR_TAX_SINGO_ASSET_SELECT</Col></Row><Row><Col id=\"TARGET\">selectSub</Col><Col id=\"SP\">DHVPR_TAX_SINGO_ASSET_DTL</Col></Row><Row><Col id=\"TARGET\">create</Col><Col id=\"SP\">DHVPR_TAX_SINGO_ASSET_CREATE</Col></Row><Row><Col id=\"TARGET\">selectSelfAcnt</Col><Col id=\"SP\">DHXPR_SELFACNT</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsNO_TAX", this);
            obj._setContents("<ColumnInfo><Column id=\"CODE\" type=\"STRING\" size=\"256\"/><Column id=\"VALUE\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"CODE\">1</Col><Col id=\"VALUE\">1기예정</Col></Row><Row><Col id=\"CODE\">2</Col><Col id=\"VALUE\">1기확정</Col></Row><Row><Col id=\"CODE\">3</Col><Col id=\"VALUE\">2기예정</Col></Row><Row><Col id=\"CODE\">4</Col><Col id=\"VALUE\">2기확정</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsSearch", this);
            obj._setContents("<ColumnInfo><Column id=\"CD_CORP\" type=\"STRING\" size=\"256\"/><Column id=\"CD_SELFACNT\" type=\"STRING\" size=\"256\"/><Column id=\"YM_MAGAM\" type=\"STRING\" size=\"256\"/><Column id=\"NO_TAX\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"CD_SELFACNT\"/><Col id=\"YM_MAGAM\"/><Col id=\"NO_TAX\"/></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsListSub", this);
            obj._setContents("");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Div("divSearch","0","10",null,"46.0","0",null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_cssclass("div_SEARCH_Bg");
            this.addChild(obj.name, obj);

            obj = new Static("staCD_CORP","0","10","92","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("9");
            obj.set_text("법인코드");
            obj.set_cssclass("sta_WF_SchLabelE");
            this.divSearch.addChild(obj.name, obj);

            obj = new Div("ccfCD_CORP","staCD_CORP:0","10","250","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.getSetter("CDTextWidth").set("70");
            obj.set_taborder("0");
            obj.set_url("cmm::cmmCodeFind.xfdl");
            obj.set_text("");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("staCD_SELFACNT","ccfCD_CORP:0","10","92","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("1");
            obj.set_text("세무단위");
            obj.set_usedecorate("false");
            obj.set_cssclass("sta_WF_SchLabelE");
            this.divSearch.addChild(obj.name, obj);

            obj = new Div("ccfCD_SELFACNT","staCD_SELFACNT:0","10","300","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.getSetter("CDTextWidth").set("70");
            obj.set_taborder("2");
            obj.set_url("cmm::cmmCodeFind.xfdl");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("staYM_MAGAM","ccfCD_SELFACNT:0","10","92","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("3");
            obj.set_text("작성년도");
            obj.set_cssclass("sta_WF_SchLabelE");
            this.divSearch.addChild(obj.name, obj);

            obj = new Div("ctclYM_MAGAM","staYM_MAGAM:0","10","67","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("4");
            obj.set_url("cmm::cmmCalYY.xfdl");
            obj.set_enableevent("true");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("staNO_TAX","ctclYM_MAGAM:0","10","92","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("5");
            obj.set_text("작성기수");
            obj.set_cssclass("sta_WF_SchLabelE");
            this.divSearch.addChild(obj.name, obj);

            obj = new Combo("ccboNO_TAX","staNO_TAX:0","10","100","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("6");
            obj.set_innerdataset("dsNO_TAX");
            obj.set_codecolumn("CODE");
            obj.set_datacolumn("VALUE");
            obj.set_value("1");
            obj.set_index("0");
            this.divSearch.addChild(obj.name, obj);

            obj = new Edit("cedtDT_FROM","ccboNO_TAX:10","10","85","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("8");
            obj.set_readonly("true");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("staWAVE","cedtDT_FROM:5","10","10","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("7");
            obj.set_text("~");
            obj.set_cssclass("sta_WF_AC");
            this.divSearch.addChild(obj.name, obj);

            obj = new Edit("cedtDT_TO","staWAVE:5","10","85","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("10");
            obj.set_readonly("true");
            this.divSearch.addChild(obj.name, obj);

            obj = new Div("divData","0","divSearch:10",null,null,"0","0",null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_cssclass("div_DATA_Bg");
            this.addChild(obj.name, obj);

            obj = new Grid("objGrid","0","21",null,"205","0",null,null,null,null,null,this.divData.form);
            obj.set_taborder("0");
            obj.set_autofittype("none");
            obj._setContents("");
            this.divData.addChild(obj.name, obj);

            obj = new Grid("objGridSub","0","261",null,null,"0","0",null,null,null,null,this.divData.form);
            obj.set_taborder("1");
            obj.set_autofittype("col");
            obj._setContents("");
            this.divData.addChild(obj.name, obj);

            obj = new Static("sta02","0","-2","300","22",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("2");
            obj.set_text("감가상각자산 취득내역 합계");
            obj.set_cssclass("sta_TITLE_Bg");
            this.divData.addChild(obj.name, obj);

            obj = new Static("sta02_00","0","234","300","22",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("3");
            obj.set_text("감가상각자산 취득내역 명세");
            obj.set_cssclass("sta_TITLE_Bg");
            this.divData.addChild(obj.name, obj);

            obj = new Static("info01_00","270","236","600","20",null,null,null,null,null,null,this.divData.form);
            obj.set_text("세금계산서(과세), 신용카드(과세) 일 경우");
            obj.set_color("dimgray");
            obj.set_font("11px/normal \"Dotum\"");
            obj.set_taborder("4");
            this.divData.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this
            obj = new Layout("default","",this._adjust_width,this._adjust_height,this,function(p){});
            this.addLayout(obj.name, obj);
            
            // BindItem Information
            obj = new BindItem("item0","divSearch.form.ccfCD_DEPT_SELFACNT.form.CDTextBox","value","dsSearch","CD_SELFACNT");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item1","divSearch.form.ctclYM_MAGAM.form.TextBox","value","dsSearch","YM_MAGAM");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item2","divSearch.form.ccboNO_TAX","value","dsSearch","NO_TAX");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item3","divSearch.form.ccfCD_CORP.form.CDTextBox","value","dsSearch","CD_CORP");
            this.addChild(obj.name, obj);
            obj.bind();
            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {
            this._addPreloadList("fdl","cmm::cmmCodeFind.xfdl");
            this._addPreloadList("fdl","cmm::cmmCalYY.xfdl");
        };
        
        // User Script
        this.registerScript("DHV_ASSET.xfdl", function() {
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

        	this.ccfCD_CORP.setFocus();
        	this.dsSearch.setColumn(0, "CD_SELFACNT", this.UserInfo.CD_DEPT_SELFACNT);
        	if (!this.gfnIsNull(this.dsSearch.getColumn(0, "CD_SELFACNT")))
        		this.ccfCD_SELFACNT.form.fnCodeFindLoad();
        	//세무단위조회
        	//this.fnSetSelfAcnt();
        };

        /************************************************************************
         * 버튼 설정 : 화면(Tab) 전환시 마다 호출
         * 서브버튼 사용 및 공통버튼 강제 제어시 여기서 처리
         ************************************************************************/
        this.fnSetButton = function() {
        	// Select, Add, Del, Save, Excel, Print
        	// SubSelect, SubAdd, SubDel, SuubSave, SubExcel
        	// this.FormBtns.Add.set_enable(true);
        	 this.FormBtns.Select.set_enable(true);
        	 this.FormBtns.Add.set_enable(false);
        	 this.FormBtns.Del.set_enable(false);
        	 this.FormBtns.Save.set_enable(false);
        }

        /************************************************************************
         * 확장 버튼 : 화면별 버튼 설정 ID, function 연결 (화면버튼관리)
         ************************************************************************/
        this.fnSetExtendButton = function() {
        	this.btnCreateData   = this.gfnFormButtonAdd("CreateData", "fnCreateData", "데이터생성");		// 전표승인
        };

        /************************************************************************
         * 변수 선언
         ************************************************************************/
        this.fnSetVariable = function() {

        	this.ccfCD_CORP = this.divSearch.form.ccfCD_CORP;	// 법인코드
        	this.ccfCD_SELFACNT = this.divSearch.form.ccfCD_SELFACNT;
        	this.ctclYM_MAGAM = this.divSearch.form.ctclYM_MAGAM;
        	this.ccboNO_TAX = this.divSearch.form.ccboNO_TAX;
        	this.cedtDT_FROM = this.divSearch.form.cedtDT_FROM;
        	this.cedtDT_TO = this.divSearch.form.cedtDT_TO;

        	this.dxGrid = this.divData.form.objGrid;
        	this.dxGridSub = this.divData.form.objGridSub;

        	//확장버튼종류
        	this.eBtnType = "";
        };

        /************************************************************************
         * 이벤트 설정
         ************************************************************************/
        this.fnSetEvent = function() {

        	// 법인코드
        	this.ccfCD_CORP.CodeFindName = "DHX_CFCORP";
        	this.ccfCD_CORP.BeforeUserDataSetParam = "fnBeforeUserDataSetParam";
        	this.ccfCD_CORP.AfterCDTextChanged = "fnAfterCDTextChanged";

        	//세무단위
        	this.ccfCD_SELFACNT.CodeFindName = "DHX_CFSELFACNT";
        	this.ccfCD_SELFACNT.BeforeUserDataSetParam = "fnBeforeUserDataSetParam";
        	this.ccfCD_SELFACNT.AfterCDTextChanged = "fnAfterCDTextChanged";

        	// 그리드 초기화
        	this.gfnGridInit(this.dxGrid, this.dsList, "DH", "DHV_ASSET");
        	this.dxGrid.BeforeUserDataSetParam = "fnGrid_BeforeUserDataSetParam";

        	this.gfnGridInit(this.dxGridSub, this.dsListSub, "DH", "DHV_ASSETSUB");
        	this.dxGridSub.BeforeUserDataSetParam = "fnGrid_BeforeUserDataSetParam";

        	//this.ccboNO_TAX.set_index(0);
        	this.ctclYM_MAGAM.form.TextBox.set_value(this.gfnGetDate().substring(0, 4));

        	// 법인코드세션
        	if (this.gfnIsNull(this.ccfCD_CORP.form.CDTextBox.value)) {
        		this.ccfCD_CORP.form.DSTextBox.set_value(this.AuthClient.DS_CORP);
        		this.ccfCD_CORP.form.CDTextBox.set_value(this.AuthClient.CD_CORP);
        	}
        };

        /************************************************************************
         * 파라미터 설정
         ************************************************************************/
        this.fnSetParameter = function() {

        	this.dsSelect = new Dataset();
        	this.dsSelect.addColumn("CD_DEPT_SELFACNT", "string");
        	this.dsSelect.addColumn("DT_START", "string");
        	this.dsSelect.addColumn("DT_END", "string");

        	//세무단위조회
        	this.dsSelfAcnt = new Dataset();
        	this.dsSelfAcnt.addColumn("CD_DEPT_SELFACNT", "string");
        	this.dsSelfAcnt.addColumn("DS_DEPT_SELFACNT", "string");
        	this.dsSelfAcnt.addColumn("VALUE", "string");

        	this.dsCreate = new Dataset();
        	this.dsCreate.addColumn("CD_DEPT_SELFACNT", "string");
        	this.dsCreate.addColumn("DT_START", "string");
        	this.dsCreate.addColumn("DT_END", "string");
        	this.dsCreate.addColumn("CD_CORP", "string");
        	this.dsCreate.addColumn("ID_SABUN", "string");
        }


        /************************************************************************
         * 컨트롤 이벤트
         ************************************************************************/
         /*
          *	조회 버튼
          */
        this.fnSelect = function() {

        	if (!this.fnSelectValidate()) return false;

        	this.gfnGridBeforeSelect(this.dxGrid);

        	this.dsSelect.clearData();
        	this.dsSelect.addRow();

        	this.dsSelect.setColumn(0, "CD_DEPT_SELFACNT", this.ccfCD_SELFACNT.form.CDTextBox.value);
        	this.dsSelect.setColumn(0, "DT_START", this.cedtDT_FROM.value.replace(/-/gi, ""));
        	this.dsSelect.setColumn(0, "DT_END", this.cedtDT_TO.value.replace(/-/gi, ""));
        	//this.dsSelect.setColumn(0, "CD_CORP", this.ccfCD_CORP.form.CDTextBox.value);
        	//this.dsSelect.setColumn(0, "ID_SABUN", this.AuthClient.ID_USER);

        	var strSvcId    = "select";
        	var strSvcType  = "grid";
        	var inProc		= "_dsProc";
        	var inData      = "select=dsSelect selectSub=dsSelect";
        	var outData     = "dsList=select0 dsListSub=selectSub0";
        	var strArg      = "";
        	var callBackFnc = "fnCallback";

        	this.gfnTransaction( strSvcId , 	// transaction을 구분하기 위한 svc id값
        						strSvcType , 	// transaction을 요청할 구분
        						inProc,			// Procedure 정보 Dataset 이름
        						inData , 		// 입력값으로 보낼 dataset id , a=b형태로 실제이름과 입력이름을 매칭
        						outData , 		// 처리결과값으로 받을 dataset id, a=b형태로 실제이름과 입력이름을 매칭
        						strArg, 			// 입력갑스로 보낼 arguments, strFormData="20120607"
        						callBackFnc); // 통신방법 정의 [생략가능]
        }

        /*
         *	입력 버튼
         */
        this.fnAdd = function() {

        }

        /*
         *	삭제 버튼
         */
        this.fnDel = function() {
        	this.gfnGridDel(this.dxGrid);
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
        }

        // 데이터 생성
        this.fnCreateData = function() {

        	this.gfnConfirm("데이터 생성하시겠습니까?", function(strId, val) {
        		if (val == false) return;

        		if (!this.fnSelectValidate()) return false;

        		this.gfnGridBeforeSelect(this.dxGrid);

        		this.dsCreate.clearData();
        		var nrow = this.dsCreate.addRow();

        		this.dsCreate.setColumn(nrow, "CD_DEPT_SELFACNT", this.ccfCD_SELFACNT.form.CDTextBox.value);
        		this.dsCreate.setColumn(nrow, "DT_START", this.cedtDT_FROM.value.replace(/-/gi, ""));
        		this.dsCreate.setColumn(nrow, "DT_END", this.cedtDT_TO.value.replace(/-/gi, ""));
        		this.dsCreate.setColumn(nrow, "CD_CORP", this.ccfCD_CORP.form.CDTextBox.value);
        		this.dsCreate.setColumn(nrow, "ID_SABUN", this.AuthClient.ID_SABUN);

        		var strSvcId    = "create";
        		var strSvcType  = "save";
        		var inProc		= "_dsProc";
        		var inData      = "create=dsCreate";
        		var outData     = "";
        		var strArg      = "";
        		var callBackFnc = "fnCallback";

        		this.gfnTransaction( strSvcId , 	// transaction을 구분하기 위한 svc id값
        							strSvcType , 	// transaction을 요청할 구분
        							inProc,			// Procedure 정보 Dataset 이름
        							inData , 		// 입력값으로 보낼 dataset id , a=b형태로 실제이름과 입력이름을 매칭
        							outData , 		// 처리결과값으로 받을 dataset id, a=b형태로 실제이름과 입력이름을 매칭
        							strArg, 			// 입력갑스로 보낼 arguments, strFormData="20120607"
        							callBackFnc); // 통신방법 정의 [생략가능]
        	});

        }



        /************************************************************************
         * 코드파인드 이벤트
         ************************************************************************/
        this.fnBeforeUserDataSetParam = function(id, dsUserParam, nrow) {
        	// 법인코드
        	if (id == "ccfCD_CORP") {
        		dsUserParam.setColumn(nrow, "ID_SABUN", this.AuthClient.ID_USER);
        	}

        	if (id == "ccfCD_SELFACNT") {
        		if (this.gfnIsNull(this.ccfCD_CORP.form.CDTextBox.value)) {
        			this.gfnAlert("법인코드를 먼저 선택하세요.");
        			this.ccfCD_CORP.form.CDTextBox.setFocus();
        			return false;
        		}
        		dsUserParam.setColumn(nrow, "CD_CORP", this.ccfCD_CORP.form.CDTextBox.value);
        	}
        	return true;
        };

        this.fnAfterCDTextChanged = function(id, codeFindData) {

        	var arrData = codeFindData;

        	switch(id) {
        		case "ccfCD_CORP": // 법인코드
        			this.ccfCD_SELFACNT.form.fnCodeFindClear();
        			break;

        		case "ccfCD_SELFACNT":	//세무단위
        			if (arrData.length > 0) {
        				var strCdSelfAcnt = "";
        				var strDsSelfAcnt = "";
        				for(var r = 0; r < arrData.length; r++) {
        					strCdSelfAcnt += arrData[r]["CD_DEPT_SELFACNT"]+",";
        					strDsSelfAcnt += arrData[r]["DS_DEPT_SELFACNT"]+",";
        				}

        				strCdSelfAcnt = strCdSelfAcnt.substr(0,strCdSelfAcnt.length-1);
        				strDsSelfAcnt = strDsSelfAcnt.substr(0,strDsSelfAcnt.length-1);

        				this.ccfCD_SELFACNT.form.CDTextBox.set_value(strCdSelfAcnt);
        				this.ccfCD_SELFACNT.form.DSTextBox.set_value(strDsSelfAcnt);
        			}
        		break;
        	}
        }

        /************************************************************************
         * Validate
         ************************************************************************/
        /*
         *	조회 Validate
         */
        this.fnSelectValidate = function() {

        	if (this.gfnIsNull(this.ccfCD_CORP.form.CDTextBox.value)) {
        		this.gfnAlert("법인코드는 필수입니다.");
        		this.ccfCD_CORP.form.CDTextBox.setFocus();
        		return false;
        	}

         	if (this.gfnIsNull(this.ccfCD_SELFACNT.form.CDTextBox.value)) {
          		this.gfnAlert("세무단위를 입력하세요!");
          		return false;
          	}

        	if (this.gfnIsNull(this.ctclYM_MAGAM.form.TextBox.value)) {
         		this.gfnAlert("작성년도를 입력하세요!");
         		return false;
         	}

        	if (this.ccboNO_TAX.index == -1) {
         		this.gfnAlert("작성기수를 입력하세요!");
         		return false;
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
        		this.gfnGridAfterSelect(this.dxGrid);
        		this.FormBtns.Add.set_enable(false);
        		this.FormBtns.Del.set_enable(false);
        	} else if (svcID == "create") {
        		this.gfnAlert("생성되었습니다.")
        		this.FormBtns.Add.set_enable(false);
        		this.FormBtns.Del.set_enable(false);
        	} else if (svcID == "selectSelfAcnt") {
        		if (errorCode == 0) {
        			if(this.dsSelfAcnt.rowcount > 0){
        				this.ccfCD_SELFACNT.form.CDTextBox.set_value(this.dsSelfAcnt.getColumn(0,"CD_DEPT_SELFACNT"));
        				this.ccfCD_SELFACNT.form.DSTextBox.set_value(this.dsSelfAcnt.getColumn(0,"DS_DEPT_SELFACNT"));
        			}
        		} else {
        			this.gfnAlert(errorMsg);
        		}
        	}
        }


        /************************************************************************
         * 그리드 이벤트
         ************************************************************************/
         this.fnGrid_BeforeUserDataSetParam = function(id, dsUserParam, nrow) {

        	if(id == "DHX_CFVENDOR") {
        		dsUserParam.setColumn(nrow, "TY_VENDOR", "F");
        		//dsUserParam.setColumn(nrow, "VALUE", this.dsList.getColumn(this.dsList.rowposition, "CD_VENDOR"));
        		dsUserParam.setColumn(nrow, "YN_RELATED", "");
        	}

        	if(id == "DHX_CFSELFACNT"){	//세무단위
        		if (this.gfnIsNull(this.ccfCD_CORP.form.CDTextBox.value)) {
        			this.gfnAlert("법인코드를 먼저 선택하세요.");
        			this.ccfCD_CORP.form.CDTextBox.setFocus();
        			return false;
        		}
        		dsUserParam.setColumn(nrow, "CD_CORP", this.ccfCD_CORP.form.CDTextBox.value);
        	}
        	if(id == "DHX_CFACNTUNIT"){	//단지
        		if (this.gfnIsNull(this.ccfCD_CORP.form.CDTextBox.value)) {
        			this.gfnAlert("법인코드를 먼저 선택하세요.");
        			this.ccfCD_CORP.form.CDTextBox.setFocus();
        			return false;
        		}
        		dsUserParam.setColumn(nrow, "CD_DEPT_UPPER", "");
        		dsUserParam.setColumn(nrow, "YN_SLIPACCEPT", "");
        		dsUserParam.setColumn(nrow, "CD_CORP", this.ccfCD_CORP.form.CDTextBox.value);
        		dsUserParam.setColumn(nrow, "YN_USE", "Y");
        		dsUserParam.setColumn(nrow, "GR_DEPT_ACNT", "");
        	}
        	return true;
        };


        /************************************************************************
         * 기타 이벤트
         ************************************************************************/
        this.dsSearch_onvaluechanged = function(obj,e) {

        	if(e.oldvalue != e.newvalue) {

        		switch(e.columnid) {
        			case "YM_MAGAM" :
        				this.setDt(e.newvalue, this.ccboNO_TAX.value);
        				break;
        			case "NO_TAX" :
        				this.setDt(this.ctclYM_MAGAM.form.TextBox.value, e.newvalue);
        				break;
        		}

        		this.gfnSetFormStatus(this);	// 폼상태 초기화
        		this.gfnGridClear(this.dxGrid);
           }
        }

        this.setDt = function(ymMagam, noTax) {
        	var dtFrom;
        	var dtTo;

        	if(this.gfnIsNull(ymMagam) || this.gfnIsNull(noTax)) {

                dtFrom = "";
                dtTo = "";

            } else {

        		switch(noTax) {
        			case "1" :
        				dtFrom = ymMagam + "-01-01";
        				dtTo = ymMagam + "-03-31";
        				break;
        			case "2" :
        				dtFrom = ymMagam + "-04-01";
        				dtTo = ymMagam + "-06-30";
        				break;
        			case "3" :
        				dtFrom = ymMagam + "-07-01";
        				dtTo = ymMagam + "-09-30";
        				break;
        			case "4" :
        				dtFrom = ymMagam + "-10-01";
        				dtTo = ymMagam + "-12-31";
        				break;
        			default :
        				dtFrom = "";
        				dtTo = "";
        				break;
        		}
        	}

        	this.cedtDT_FROM.set_value(dtFrom);
        	this.cedtDT_TO.set_value(dtTo);
        }

        // 세무단위조회
        this.fnSetSelfAcnt = function() {
        	this.dsSelfAcnt.clearData();
        	this.dsSelfAcnt.addRow();
        	this.dsSelfAcnt.setColumn(0, "VALUE", this.AuthClient.CD_CORP);

        	var strSvcId    = "selectSelfAcnt";
        	var strSvcType  = "select";
        	var inProc		= "_dsProc";
        	var inData      = "selectSelfAcnt=dsSelfAcnt";
        	var outData     = "dsSelfAcnt=selectSelfAcnt0";
        	var strArg      = "";
        	var callBackFnc = "fnCallback";

        	this.gfnTransaction( strSvcId , 	// transaction을 구분하기 위한 svc id값
        						strSvcType , 	// transaction을 요청할 구분
        						inProc,			// Procedure 정보 Dataset 이름
        						inData , 		// 입력값으로 보낼 dataset id , a=b형태로 실제이름과 입력이름을 매칭
        						outData , 		// 처리결과값으로 받을 dataset id, a=b형태로 실제이름과 입력이름을 매칭
        						strArg, 			// 입력갑스로 보낼 arguments, strFormData="20120607"
        						callBackFnc,
        						false // 통신방법 정의 [생략가능]
        						);
        }
        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.form_onload,this);
            this.divData.form.info01_00.addEventHandler("onclick",this.divData_divDataBottom_tab1_TabInfo_info01_00_onclick,this);
            this.dsSearch.addEventHandler("onvaluechanged",this.dsSearch_onvaluechanged,this);
        };
        this.loadIncludeScript("DHV_ASSET.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
