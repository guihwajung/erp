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
            this.set_titletext("총괄마감");
            if (Form == this.constructor)
            {
                this._setFormPosition(1280,720);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("dsList", this);
            obj._setContents("");
            this.addChild(obj.name, obj);


            obj = new Dataset("_dsProc", this);
            obj._setContents("<ColumnInfo><Column id=\"TARGET\" type=\"STRING\" size=\"256\"/><Column id=\"SP\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"TARGET\">select</Col><Col id=\"SP\">DHDPR_MAGAMALLMONTH_SELECT</Col></Row><Row><Col id=\"TARGET\">magamCreate</Col><Col id=\"SP\">DHDPR_MAGAM_MONTH_FROM_TO</Col></Row><Row><Col id=\"TARGET\">magamCancel</Col><Col id=\"SP\">DHDPR_MAGAM_CANCEL</Col></Row><Row><Col id=\"TARGET\">userinfo</Col><Col id=\"SP\">DZZPR_USERINFO_SELECT</Col></Row><Row><Col id=\"TARGET\">deptAcnt</Col><Col id=\"SP\">DHXPR_BALANCE_ACNTUNIT_CODEFIND</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsSearch", this);
            obj._setContents("<ColumnInfo><Column id=\"CD_CORP\" type=\"STRING\" size=\"256\"/><Column id=\"CD_DEPT_ACNT\" type=\"STRING\" size=\"256\"/><Column id=\"YM_MAGAM\" type=\"STRING\" size=\"256\"/><Column id=\"YM_MAGAM2\" type=\"STRING\" size=\"256\"/><Column id=\"TY_MAGAM\" type=\"STRING\" size=\"256\"/><Column id=\"TY_GUBUN\" type=\"STRING\" size=\"256\"/><Column id=\"MAGAM_KIND\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"CD_CORP\"/><Col id=\"CD_DEPT_ACNT\"/><Col id=\"YM_MAGAM\"/><Col id=\"YM_MAGAM2\"/><Col id=\"TY_GUBUN\"/><Col id=\"TY_MAGAM\"/><Col id=\"MAGAM_KIND\"/></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsDept", this);
            obj._setContents("");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Div("divSearch","0.0","10.0",null,"78.0","0",null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_cssclass("div_SEARCH_Bg");
            obj.set_formscrolltype("none");
            obj.set_text("");
            this.addChild(obj.name, obj);

            obj = new Static("sta00","0.0","10.0","92.0","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("0");
            obj.set_text("법인코드");
            obj.set_cssclass("sta_WF_SchLabelE");
            this.divSearch.addChild(obj.name, obj);

            obj = new Div("ccfCD_CORP","sta00:0.0","10.0","275","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.getSetter("CDTextWidth").set("50");
            obj.set_taborder("1");
            obj.set_url("cmm::cmmCodeFind.xfdl");
            obj.set_text("");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("staYM_WORK","ccfCD_CORP:0.0","10.0","92.0","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("2");
            obj.set_text("회계년월");
            obj.set_cssclass("sta_WF_SchLabelE");
            this.divSearch.addChild(obj.name, obj);

            obj = new Div("ctclYM_FRMAGAM","staYM_WORK:0.0","10.0","80","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("3");
            obj.set_url("cmm::cmmCalMM.xfdl");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("sta99","ctclYM_FRMAGAM:0.0","10.0","30.0","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("4");
            obj.set_text("~");
            obj.set_visible("true");
            obj.set_cssclass("sta_WF_AC");
            this.divSearch.addChild(obj.name, obj);

            obj = new Div("ctclYM_TOMAGAM","sta99:0.0","10.0","80","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("5");
            obj.set_url("cmm::cmmCalMM.xfdl");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("sta01","ctclYM_TOMAGAM:0.0","10.0","92.0","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("6");
            obj.set_text("귀속부서");
            obj.set_visible("false");
            obj.set_cssclass("sta_WF_SchLabel");
            this.divSearch.addChild(obj.name, obj);

            obj = new Div("ccfCD_DEPT","sta01:0.0","10.0","269","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.getSetter("CDTextWidth").set("70");
            obj.set_taborder("7");
            obj.set_url("cmm::cmmCodeFind.xfdl");
            obj.set_text("");
            obj.set_visible("false");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("sta02","0.0","sta00:10.0","92.0","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("8");
            obj.set_text("작업구분");
            obj.set_cssclass("sta_WF_SchLabelE");
            this.divSearch.addChild(obj.name, obj);

            obj = new Combo("ccboMAGAM_GUBUN","sta02:0.0","sta00:10.0","92","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("9");
            obj.set_datacolumn("datacolumn");
            obj.set_codecolumn("codecolumn");
            var divSearch_form_ccboMAGAM_GUBUN_innerdataset = new nexacro.NormalDataset("divSearch_form_ccboMAGAM_GUBUN_innerdataset", obj);
            divSearch_form_ccboMAGAM_GUBUN_innerdataset._setContents("<ColumnInfo><Column id=\"codecolumn\" size=\"256\"/><Column id=\"datacolumn\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"codecolumn\">M</Col><Col id=\"datacolumn\">마감</Col></Row><Row><Col id=\"codecolumn\">C</Col><Col id=\"datacolumn\">취소</Col></Row></Rows>");
            obj.set_innerdataset(divSearch_form_ccboMAGAM_GUBUN_innerdataset);
            obj.set_text("");
            obj.set_value("");
            obj.set_index("-1");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("sta03","ccboMAGAM_GUBUN:0.0","sta00:10.0","92.0","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("10");
            obj.set_text("마감유형");
            obj.set_cssclass("sta_WF_SchLabelE");
            this.divSearch.addChild(obj.name, obj);

            obj = new Combo("ccboMAGAM_TYPE","sta03:0.0","sta00:10.0","92","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("11");
            obj.set_datacolumn("datacolumn");
            obj.set_codecolumn("codecolumn");
            var divSearch_form_ccboMAGAM_TYPE_innerdataset = new nexacro.NormalDataset("divSearch_form_ccboMAGAM_TYPE_innerdataset", obj);
            divSearch_form_ccboMAGAM_TYPE_innerdataset._setContents("<ColumnInfo><Column id=\"codecolumn\" size=\"256\"/><Column id=\"datacolumn\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"codecolumn\">N</Col><Col id=\"datacolumn\">정규</Col></Row><Row><Col id=\"codecolumn\">E</Col><Col id=\"datacolumn\">임의</Col></Row></Rows>");
            obj.set_innerdataset(divSearch_form_ccboMAGAM_TYPE_innerdataset);
            obj.set_text("");
            obj.set_value("");
            obj.set_index("-1");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("sta04","ccboMAGAM_TYPE:0.0","sta00:10.0","92.0","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("12");
            obj.set_text("마감종류");
            obj.set_visible("false");
            obj.set_cssclass("sta_WF_SchLabel");
            this.divSearch.addChild(obj.name, obj);

            obj = new Combo("ccboMAGAM_KIND","sta04:0.0","sta00:10.0","92","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("13");
            obj.set_datacolumn("datacolumn");
            obj.set_codecolumn("codecolumn");
            obj.set_enable("false");
            obj.set_visible("false");
            var divSearch_form_ccboMAGAM_KIND_innerdataset = new nexacro.NormalDataset("divSearch_form_ccboMAGAM_KIND_innerdataset", obj);
            divSearch_form_ccboMAGAM_KIND_innerdataset._setContents("<ColumnInfo><Column id=\"codecolumn\" size=\"256\"/><Column id=\"datacolumn\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"codecolumn\">A</Col><Col id=\"datacolumn\">총괄마감</Col></Row><Row><Col id=\"codecolumn\">B</Col><Col id=\"datacolumn\">전표마감</Col></Row><Row><Col id=\"codecolumn\">C</Col><Col id=\"datacolumn\">결산마감</Col></Row></Rows>");
            obj.set_innerdataset(divSearch_form_ccboMAGAM_KIND_innerdataset);
            obj.set_text("");
            obj.set_value("");
            obj.set_index("-1");
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
            obj = new BindItem("item0","divSearch.form.ccfCD_CORP.form.CDTextBox","value","dsSearch","CD_CORP");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item1","divSearch.form.ccfCD_DEPT.form.CDTextBox","value","dsSearch","CD_DEPT_ACNT");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item2","divSearch.form.ctclYM_FRMAGAM.form.TextBox","value","dsSearch","YM_MAGAM");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item3","divSearch.form.ctclYM_TOMAGAM.form.TextBox","value","dsSearch","YM_MAGAM2");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item4","divSearch.form.ccboMAGAM_GUBUN","value","dsSearch","TY_GUBUN");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item5","divSearch.form.ccboMAGAM_TYPE","value","dsSearch","TY_MAGAM");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item6","divSearch.form.ccboMAGAM_KIND","value","dsSearch","MAGAM_KIND");
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
        this.registerScript("DHD_MONTHMAGAMALLMONTH.xfdl", function() {
        this.objApp = this.gfnGetApplication();
        this.CD_CORP;
        this.strLevel;
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
        	//회계년월(현재월)
        	//this.ctclYM_FRMAGAM.form.TextBox.set_value(this.dsUserInfo.getColumn(0, "YM_DATE1"));
        	this.ctclYM_FRMAGAM.form.TextBox.set_value(this.gfnGetDate().substr(0,6));
        	this.ctclYM_TOMAGAM.form.TextBox.set_value(this.gfnGetDate().substr(0,6));
        	//법인코드 세션에 코드로 셋팅
        	this.ccfCD_CORP.form.DSTextBox.set_value(this.AuthClient.DS_CORP);
        	this.ccfCD_CORP.form.CDTextBox.set_value(this.AuthClient.CD_CORP);

        	this.ccboMAGAM_GUBUN.set_index(0);
        	this.ccboMAGAM_TYPE.set_index(0);
        	this.ccboMAGAM_KIND.set_index(0);
        };

        /************************************************************************
        * 버튼 설정 : 화면(Tab) 전환시 마다 호출
        * 서브버튼 사용 및 공통버튼 강제 제어시 여기서 처리
        ************************************************************************/
        this.fnSetButton = function() {
        	// Select, Add, Del, Save, Excel, Print
        	// SubSelect, SubAdd, SubDel, SuubSave, SubExcel

        }

        /************************************************************************
        * 확장 버튼 : 화면별 버튼 설정 ID, function 연결 (화면버튼관리)
        ************************************************************************/
        this.fnSetExtendButton = function() {
        	this.btnMonthMagam = this.gfnFormButtonAdd("MonthMagam", "fnMonthMagam"); 	//월마감작업 버튼
        };

        /************************************************************************
        * 변수 선언
        ************************************************************************/
        this.fnSetVariable = function() {
        	this.ccfCD_CORP 	 = this.divSearch.form.ccfCD_CORP;
        	this.ccfCD_DEPT 	 = this.divSearch.form.ccfCD_DEPT;
        	this.ctclYM_TOMAGAM  = this.divSearch.form.ctclYM_TOMAGAM;
        	this.ctclYM_FRMAGAM  = this.divSearch.form.ctclYM_FRMAGAM;
        	this.ccboMAGAM_GUBUN = this.divSearch.form.ccboMAGAM_GUBUN;
        	this.ccboMAGAM_TYPE  = this.divSearch.form.ccboMAGAM_TYPE;
        	this.ccboMAGAM_KIND  = this.divSearch.form.ccboMAGAM_KIND;
        	this.dxGrid 		 = this.divData.form.objGrid;
        };

        /************************************************************************
        * 이벤트 설정
        ************************************************************************/
        this.fnSetEvent = function() {
        	this.ccfCD_CORP.CodeFindName = "DHX_CFCORP";
        	this.ccfCD_CORP.BeforeUserDataSetParam = "fnBeforeUserDataSetParam";
        	this.ccfCD_CORP.AfterCDTextChanged = "fnAfterCDTextChanged";

        	this.ccfCD_DEPT.CodeFindName = "DHX_CFACNTUNIT";
        	//this.ccfCD_DEPT.CodeFindName = "DHX_CFACNTUNIT_CLOSING";
        	this.ccfCD_DEPT.BeforeUserDataSetParam = "fnBeforeUserDataSetParam";
        	this.ccfCD_DEPT.AfterCDTextChanged = "fnAfterCDTextChanged";

        	// 그리드 초기화
        	this.gfnGridInit(this.dxGrid, this.dsList, "DH", "DHD_MONTHMAGAMALLMONTH");

        	//검색조건 변경 이벤트
        	this.dsSearch.addEventHandler("onvaluechanged", this.dsSearch_Valuechanged, this);

        };

        /************************************************************************
        * 파라미터 설정
        ************************************************************************/
        this.fnSetParameter = function() {

        	this.dsSelect = new Dataset();
        	this.dsSelect.addColumn("INCD_CORP", "string");
        	this.dsSelect.addColumn("INCD_DEPT_ACNT", "string");
        	this.dsSelect.addColumn("INYM_MAGAM", "string");
        	this.dsSelect.addColumn("INTY_MAGAM", "string");
        	this.dsSelect.addColumn("INTY_GUBUN", "string");

        	//마감처리용 데이터셋
        	this.dsMagam = new Dataset();
        	this.dsMagam.addColumn("INCD_CORP", "string");
        //	this.dsMagam.addColumn("InCD_DEPT_ACNT", "string");
        	this.dsMagam.addColumn("InYM_MAGAM", "string");
        	this.dsMagam.addColumn("ToYM_MAGAM", "string");
        	this.dsMagam.addColumn("InOPTION", "string");
        	//this.dsMagam.addColumn("InTY_CLOSINGCLASS", "string");
        	this.dsMagam.addColumn("InID_TRANS", "string");
        	this.dsMagam.addColumn("YN_FLAG", "string");

        	//마감 취소처리용 데이터셋
        	this.dsMagamCancel = new Dataset();
        	this.dsMagamCancel.addColumn("InCD_CORP", "string");
        //	this.dsMagamCancel.addColumn("InCD_DEPT_ACNT", "string");
        	this.dsMagamCancel.addColumn("InYM_MAGAM", "string");
        	this.dsMagamCancel.addColumn("InOPTION", "string");
        	this.dsMagamCancel.addColumn("InID_TRANS", "string");
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
        	this.dsSelect.setColumn(0, "INCD_CORP", this.dsSearch.getColumn(0, "CD_CORP"));
        	this.dsSelect.setColumn(0, "INCD_DEPT_ACNT", this.dsSearch.getColumn(0, "CD_DEPT_ACNT"));
        	this.dsSelect.setColumn(0, "INYM_MAGAM", this.dsSearch.getColumn(0, "YM_MAGAM").replace(/-/g, ''));
        	this.dsSelect.setColumn(0, "INTY_MAGAM", this.dsSearch.getColumn(0, "TY_MAGAM"));
        	this.dsSelect.setColumn(0, "INTY_GUBUN", this.dsSearch.getColumn(0, "TY_GUBUN"));

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

        /************************************************************************
        * Validate
        ************************************************************************/
        /*
        *	조회 Validate
        */
        this.fnSelectValidate = function() {
        	var validate = true;

        	if (this.gfnIsNull(this.ccfCD_CORP.form.CDTextBox.text)) {
        		this.gfnAlert("법인코드가 입력되지 않았습니다.");
        		this.ccfCD_CORP.form.CDTextBox.setFocus();
        		//validate = false;
        		return false;
        	}
        // 	if (this.gfnIsNull(this.ccfCD_DEPT.form.CDTextBox.value)) {
        // 		this.gfnAlert("귀속부서가 입력되지 않았습니다.");
        // 		this.ccfCD_DEPT.form.CDTextBox.setFocus();
        // 		//validate = false;
        // 		return false;
        // 	}

        	if (this.gfnIsNull(this.ctclYM_TOMAGAM.form.TextBox.value)) {
        		this.gfnAlert("회계년월이 입력되지 않았습니다.");
        		this.ctclYM_TOMAGAM.form.TextBox.setFocus();
        		//validate = false;
        		return false;
        	}
        	return true;

        	//return validate;
        };

        /************************************************************************
        * 콜백 이벤트
        ************************************************************************/
        /*
        *	콜백 처리
        */
        this.fnCallback = function(svcID, errorCode, errorMsg)
        {
        	switch(svcID) {
        	case "select":
        		this.gfnGridAfterSelect(this.dxGrid);
        		//this.divSearch_ccboMAGAM_GUBUN_onitemchanged({postvalue: this.dsSearch.getColumn(0, "TY_GUBUN")});
        		break;
        	case "magamCreate":
        	case "magamCancel":
        		if (errorCode == 0) {
        			this.gfnAlert("처리되었습니다.");
        			this.FormBtns.Select.click();
        		} else {
        			this.gfnAlert(errorMsg);
        		}
        		break;
        	case "deptAcnt":
        		if(this.dsDept.rowcount == 0){
        			this.ccfCD_DEPT.form.DSTextBox.set_value = "";
        			this.ccfCD_DEPT.form.CDTextBox.set_value = "";
        			this.CD_CORP = "";
        		}else{
        			this.dsSearch.setColumn(0, "CD_DEPT_ACNT", this.dsDept.getColumn(0, "CD_DEPT_ACNT"));
        			//this.ccfCD_DEPT.form.DSTextBox.set_value(this.dsDept.getColumn(0, "DS_DEPT_ACNT"));
        			this.ccfCD_DEPT.form.fnCodeFindLoad();
        			this.strLevel = this.dsDept.getColumn(0, "LV_DEPT_ACNT");
        			this.CD_CORP = this.dsDept.getColumn(0, "CD_CORP");
        		}
        		break;
        	}

        }

        /************************************************************************
        * 코드파인드 이벤트
        ************************************************************************/
        this.fnBeforeUserDataSetParam = function(id, dsUserParam, nrow) {
        	var sCdCorp = this.dsSearch.getColumn(0, "CD_CORP");
        	if (id == "ccfCD_CORP") {
        		//dsUserParam.setColumn(nrow, "LEVEL", this.dsUserInfo.LEVLV_DEPT_ACNT);
        		//dsUserParam.setColumn(nrow, "ACNTUNIT", this.dsUserInfo.LEVCD_DEPT_ACNT);
        		dsUserParam.setColumn(nrow, "ID_SABUN", this.AuthClient.ID_USER);
        	}
        	if (id == "ccfCD_DEPT") {
        		if(this.gfnIsNull(sCdCorp)){
        			this.gfnAlert("법인코드를 선택하세요.");
        			this.ccfCD_CORP.form.CDTextBox.setFocus();
        			return false;
        		}

        		dsUserParam.setColumn(nrow, "CD_DEPT_UPPER"	, "");						//상위부서
        		dsUserParam.setColumn(nrow, "YN_SLIPACCEPT"	, "Y");						//전표발행여부
        		dsUserParam.setColumn(nrow, "CD_CORP"		, sCdCorp);					//법인코드
        		dsUserParam.setColumn(nrow, "YN_USE"		, "Y");						//사용여부
        		dsUserParam.setColumn(nrow, "GR_DEPT_ACNT"	, "");						//현장/본사여부
        		//dsUserParam.setColumn(nrow, "ID_USER"	    , this.AuthClient.ID_USER);
        		//dsUserParam.setColumn(nrow, "GR_SEARCH"     , this.FormInfo.GR_SEARCH);
        		//dsUserParam.setColumn(nrow, "CD_DEPT"	    , this.AuthClient.CD_DEPT);

        //		var cdCorp = this.ccfCD_CORP.form.CDTextBox.text;
        // 		if(this.gfnIsNull(cdCorp)){
        // 			this.gfnAlert("법인코드를 먼저 선택하세요.");
        // 			return false;
        // 		}
        // 		dsUserParam.setColumn(nrow, "LEVEL", this.dsUserInfo.LEVLV_DEPT_ACNT);
        // 		dsUserParam.setColumn(nrow, "ACNTUNIT", this.dsUserInfo.LEVCD_DEPT_ACNT);
        // 		dsUserParam.setColumn(nrow, "YN_CORP", "N");
        // 		dsUserParam.setColumn(nrow, "CD_CORP", "");
        	}
        	return true;
        };

        this.fnAfterCDTextChanged = function(id, codeFindData) {
        	switch(id) {
        	case "ccfCD_CORP":	//법인코드
        		//this.ccfCD_DEPT.form.fnCodeFindClear();
        		break;
        	case "ccfCD_DEPT": // 귀속부서
        		var arr = codeFindData;
        		if (arr.length > 0) {
        			strLevel = arr[0]["LV_DEPT_ACNT"];
        			cd_corp = arr[0]["CD_CORP"];
        			//this.dsSearch.setColumn(0, "YM_MAGAM", arr[0]["YM_MAGAM_MONTH1"]);
        			//this.dsSearch.setColumn(0, "YM_MAGAM2", arr[0]["YM_MAGAM_MONTH1"]);
        		}
        		break;
        	}
        }
        /************************************************************************
        * 그리드 이벤트
        ************************************************************************/

        /************************************************************************
        * 기타 이벤트
        ************************************************************************/

        //월마감 처리
        this.fnMonthMagam = function (obj,e)
        {

        // 	if(this.dsUserInfo.getColumn(0, "YN_MAGAM_FS") == "N"){
        // 		this.gfnAlert("월마감 작업 권한이 없습니다.");
        // 		return;
        // 	}

        	if(this.dsList.findRowExprNF("YM_MAGAM_CAPA.substr(0, 2) == '불가'") > -1){
        		this.gfnAlert("불가데이터는 작업할 수 없습니다.");
        		return;
        	}
        	if (this.gfnIsNull(this.gfnTrim(this.ccfCD_CORP.form.CDTextBox.value))) {
        		this.gfnAlert("법인코드는 필수입니다.");
        		this.ccfCD_CORP.form.CDTextBox.setFocus();
        		return;
        	}
        // 	if (this.gfnIsNull(this.ccfCD_DEPT.form.CDTextBox.value)) {
        // 		this.gfnAlert("귀속부서가 입력되지 않았습니다.");
        // 		this.ccfCD_DEPT.form.CDTextBox.setFocus();
        // 		return false;
        // 	}
        	if(this.gfnIsNull(this.ctclYM_TOMAGAM.form.TextBox.value)){
        		this.gfnAlert("회계년월은 필수입니다.");
        		this.ctclYM_TOMAGAM.form.TextBox.setFocus();
        		return;
        	}
        	var message = "월마감 작업을 하시겠습니까?";
        	if(obj.text == "월마감취소"){
        		message = "월마감 작업을 취소하시겠습니까?";
        	}
        	this.gfnConfirm(message, "fnMonthMagam_callback");
        };

        //마감처리 Confirm 콜백
        this.fnMonthMagam_callback = function(strId, val) {
        	if(val == true) {
        		this.dsMagam.clearData();
        		this.dsMagamCancel.clearData();

        		var strSvcId    = "";
        		var inData      = "";
        		var sOption = "";

        		if(this.ccboMAGAM_TYPE.value == "N"){	//마감유형이 정규일경우
        			sOption = "MAGAM1";
        		}

        		//작업구분이 마감일 경우
        		if(this.ccboMAGAM_GUBUN.value == "M"){
        			strSvcId    = "magamCreate";
        			inData      = "magamCreate=dsMagam";
        			var nrow = this.dsMagam.addRow();
        			this.dsMagam.setColumn(nrow, "INCD_CORP", this.dsSearch.getColumn(0, "CD_CORP"));
        //			this.dsMagam.setColumn(nrow, "InCD_DEPT_ACNT", this.dsSearch.getColumn(0, "CD_DEPT_ACNT"));
        			this.dsMagam.setColumn(nrow, "InYM_MAGAM", this.dsSearch.getColumn(0, "YM_MAGAM"));
        			this.dsMagam.setColumn(nrow, "ToYM_MAGAM", this.dsSearch.getColumn(0, "YM_MAGAM2"));
        			this.dsMagam.setColumn(nrow, "InOPTION", sOption);
        			//this.dsMagam.setColumn(nrow, "InTY_CLOSINGCLASS", "0");
        			this.dsMagam.setColumn(nrow, "InID_TRANS", this.AuthClient.ID_USER);
        			this.dsMagam.setColumn(nrow, "YN_FLAG", this.dsSearch.getColumn(0, "MAGAM_KIND"));

        		}else{	//취소
        			strSvcId    = "magamCancel";
        			inData      = "magamCancel=dsMagamCancel";
        			var nrow = this.dsMagamCancel.addRow();
        			this.dsMagamCancel.setColumn(nrow, "InCD_CORP", this.dsSearch.getColumn(0, "CD_CORP"));
        //			this.dsMagamCancel.setColumn(nrow, "InCD_DEPT_ACNT", this.dsSearch.getColumn(0, "CD_DEPT_ACNT"));
        			this.dsMagamCancel.setColumn(nrow, "InYM_MAGAM", this.dsSearch.getColumn(0, "YM_MAGAM"));
        			this.dsMagamCancel.setColumn(nrow, "InOPTION", sOption);
        			//this.dsMagamCancel.setColumn(nrow, "INTY_CLOSINGCLASS", "0");
        			this.dsMagamCancel.setColumn(nrow, "InID_TRANS", this.AuthClient.ID_USER);
        		}

        		var strSvcType  = "save";
        		var inProc		= "_dsProc";
        		var outData     = "";
        		var strArg      = "";
        		var callBackFnc = "fnCallback";

        		this.gfnTransaction( strSvcId , 	// transaction을 구분하기 위한 svc id값
        			strSvcType , 	// transaction을 요청할 구분
        			inProc,			// Procedure 정보 Dataset 이름
        			inData , 		// 입력값으로 보낼 dataset id , a=b형태로 실제이름과 입력이름을 매칭
        			outData , 		// 처리결과값으로 받을 dataset id, a=b형태로 실제이름과 입력이름을 매칭
        			strArg, 		// 입력갑스로 보낼 arguments, strFormData="20120607"
        			callBackFnc); 	// 통신방법 정의 [생략가능]
        	}
        };

        //검색조건 변경 이벤트
        this.dsSearch_Valuechanged = function(obj,e)
        {
        	if(e.oldvalue != e.newvalue) {
        		this.gfnSetFormStatus(this);	// 폼상태 초기화
        		this.gfnGridClear(this.dxGrid);
        		if(e.columnid == "YM_MAGAM"){
        			this.ctclYM_TOMAGAM.form.TextBox.set_value(e.newvalue);
        		}
        	}
        };

        this.divSearch_ccboMAGAM_GUBUN_onitemchanged = function(obj,e)
        {
        	if(this.dsSearch.getColumn(0, "TY_GUBUN") == "M"){
        		this.btnMonthMagam.set_text("월마감작업");
        		this.ccboMAGAM_TYPE.set_enable(true);
        	}else{
        		this.btnMonthMagam.set_text("월마감취소");
        		this.ccboMAGAM_TYPE.set_enable(false);
        	}
        	this.FormBtns.Select.click();
        };

        // 사용안하는것 같음?
        this.fnSetCD_DEPT_ACNT = function ()
        {
        	this.dsDept = new Dataset();
        	this.dsDept.addColumn("TY_GUBUN", "string");
        	this.dsDept.addColumn("CN_ROW", "int");
        	this.dsDept.addColumn("VALUE", "string");
        	this.dsDept.addColumn("MIN_VALUE", "string");
        	this.dsDept.addColumn("LEVEL", "string");
        	this.dsDept.addColumn("ACNTUNIT", "string");
        	this.dsDept.addColumn("CD_CORP", "string");

        	this.dsDept.clearData();
        	this.dsDept.addRow();
        	this.dsDept.setColumn(0, "TY_GUBUN", "0");
        	this.dsDept.setColumn(0, "CN_ROW", 100);
        	this.dsDept.setColumn(0, "LEVEL", this.dsUserInfo.LEVLV_DEPT_ACNT);
        	this.dsDept.setColumn(0, "ACNTUNIT", this.dsUserInfo.LEVCD_DEPT_ACNT_DOWN);
        	this.dsDept.setColumn(0, "VALUE", this.dsUserInfo.LEVCD_DEPT_ACNT_DOWN);
        	this.dsDept.setColumn(0, "MIN_VALUE", "");
        	this.dsDept.setColumn(0, "CD_CORP", this.AuthClient.CD_CORP);

        	var strSvcId    = "deptAcnt";
        	var strSvcType  = "grid";
        	var inProc		= "_dsProc";
        	var inData      = "deptAcnt=dsDept";
        	var outData     = "dsDept=deptAcnt0";
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
        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.form_onload,this);
            this.divSearch.form.ccboMAGAM_GUBUN.addEventHandler("onitemchanged",this.divSearch_ccboMAGAM_GUBUN_onitemchanged,this);
        };
        this.loadIncludeScript("DHD_MONTHMAGAMALLMONTH.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
