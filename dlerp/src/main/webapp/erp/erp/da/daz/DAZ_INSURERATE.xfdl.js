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
                this._setFormPosition(1280,720);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("dsList", this);
            obj._setContents("");
            this.addChild(obj.name, obj);


            obj = new Dataset("_dsProc", this);
            obj._setContents("<ColumnInfo><Column id=\"TARGET\" type=\"STRING\" size=\"256\"/><Column id=\"SP\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"TARGET\">select</Col><Col id=\"SP\">DAZPR_INSURERATELIST_SELECT</Col></Row><Row><Col id=\"TARGET\">d_select</Col><Col id=\"SP\">DAZPR_INSURERATE_SELECT</Col></Row><Row><Col id=\"TARGET\">d_save</Col><Col id=\"SP\">DAZPR_INSURERATE_SAVE</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsListSub", this);
            obj._setContents("");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsSearch", this);
            obj._setContents("<ColumnInfo><Column id=\"YM_BASE\" type=\"STRING\" size=\"256\"/><Column id=\"CD_CORP\" type=\"STRING\" size=\"256\"/><Column id=\"YN_DELETE\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"YM_BASE\"/><Col id=\"CD_CORP\"/><Col id=\"YN_DELETE\">N</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsYN_DELETE", this);
            obj._setContents("<ColumnInfo><Column id=\"CODE\" type=\"STRING\" size=\"256\"/><Column id=\"VALUE\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"CODE\">%</Col><Col id=\"VALUE\">전체</Col></Row><Row><Col id=\"CODE\">N</Col><Col id=\"VALUE\">사용</Col></Row><Row><Col id=\"CODE\">Y</Col><Col id=\"VALUE\">미사용</Col></Row></Rows>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Div("divSearch","0","0",null,"46.0","0",null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_cssclass("div_SEARCH_Bg");
            obj.set_text("");
            this.addChild(obj.name, obj);

            obj = new Static("staYM_BASE","0.0","10.0","92.0","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("0");
            obj.set_text("적용년월");
            obj.set_cssclass("sta_WF_SchLabelE");
            this.divSearch.addChild(obj.name, obj);

            obj = new Div("ctclYM_BASE","staYM_BASE:0.0","10.0","80","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("1");
            obj.set_url("cmm::cmmCalMM.xfdl");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("staCD_CORP","ctclYM_BASE:0.0","10.0","92.0","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("2");
            obj.set_text("법인코드");
            obj.set_cssclass("sta_WF_SchLabel");
            this.divSearch.addChild(obj.name, obj);

            obj = new Div("ccfCD_CORP","staCD_CORP:0.0","10.0","200","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.getSetter("CDTextWidth").set("40");
            obj.set_taborder("3");
            obj.set_url("cmm::cmmCodeFind.xfdl");
            obj.getSetter("CodeFindName").set("DAX_CFCORP");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("staYN_DELETE","ccfCD_CORP:0.0","10.0","92.0","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("4");
            obj.set_text("사용여부");
            obj.set_rtl("false");
            obj.set_cssclass("sta_WF_SchLabel");
            this.divSearch.addChild(obj.name, obj);

            obj = new Combo("cboYN_DELETE","staYN_DELETE:0.0","10.0","80","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("5");
            obj.set_innerdataset("dsYN_DELETE");
            obj.set_datacolumn("VALUE");
            obj.set_codecolumn("CODE");
            obj.set_text("사용");
            obj.set_index("1");
            this.divSearch.addChild(obj.name, obj);

            obj = new Div("divData","0","divSearch:10",null,null,"0","0",null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_cssclass("div_DATA_Bg");
            this.addChild(obj.name, obj);

            obj = new Div("divSplitter","17.73%","0","5","100.00%",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("0");
            obj.set_background("skyblue");
            obj.set_cursor("ew-resize");
            this.divData.addChild(obj.name, obj);

            obj = new Div("divDataLeft","0","0",null,null,"divSplitter:5","0",null,null,null,null,this.divData.form);
            obj.set_taborder("0");
            this.divData.addChild(obj.name, obj);

            obj = new Grid("objGrid","0","0",null,null,"0","0",null,null,null,null,this.divData.form.divDataLeft.form);
            obj.set_taborder("0");
            obj._setContents("");
            this.divData.form.divDataLeft.addChild(obj.name, obj);

            obj = new Div("divDataRight","divSplitter:5","0",null,null,"0","0",null,null,null,null,this.divData.form);
            obj.set_taborder("0");
            this.divData.addChild(obj.name, obj);

            obj = new Grid("objGridSub","0","0",null,null,"0","0",null,null,null,null,this.divData.form.divDataRight.form);
            obj.set_taborder("0");
            obj._setContents("");
            this.divData.form.divDataRight.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this
            obj = new Layout("default","",this._adjust_width,this._adjust_height,this,function(p){});
            this.addLayout(obj.name, obj);
            
            // BindItem Information
            obj = new BindItem("item1","divSearch.form.ctclYM_BASE.form.TextBox","value","dsSearch","YM_BASE");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item0","divSearch.form.ccfCD_CORP.form.CDTextBox","value","dsSearch","CD_CORP");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item3","divSearch.form.cboYN_DELETE","value","dsSearch","YN_DELETE");
            this.addChild(obj.name, obj);
            obj.bind();
            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {
            this._addPreloadList("fdl","cmm::cmmCalMM.xfdl");
            this._addPreloadList("fdl","cmm::cmmCodeFind.xfdl");
        };
        
        // User Script
        this.registerScript("DAZ_INSURERATE.xfdl", function() {
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

        	var toDay = this.gfnGetDate().substr(0,6);
        	this.dsSearch.setColumn(0, "YM_BASE", toDay);

        	this.dsSearch.setColumn(0, "CD_CORP", this.AuthClient.CD_CORP);
        	this.divSearch.form.ccfCD_CORP.form.DSTextBox.set_value(this.AuthClient.DS_CORP);

        	// 화면 오픈시 조회함
        	this.FormBtns.Select.click();
        };

        /************************************************************************
         * 버튼 설정 : 화면(Tab) 전환시 마다 호출
         ************************************************************************/
        this.fnSetButton = function() {
        	// 서브 버튼 사용(2개 그리드 중간에 있는 파란선) 상단에 공통 셋트가 하나더 생긴다
        	//this.gfnUseSubBtn(true, this.divData, this.divData.form.divSplitter); // divSplitter sync
        }

        /************************************************************************
         * 확장 버튼 : 화면별 버튼 설정 ID, function 연결
         ************************************************************************/
        this.fnSetExtendButton = function() {
        	//this.btn1 = this.gfnFormButtonAdd("Detail", "fnDetail1");
        };

        /************************************************************************
         * 변수 선언
         ************************************************************************/
        this.fnSetVariable = function() {
        	this.ctclYM_BASE = this.divSearch.form.ctclYM_BASE;
        	this.ccfCD_CORP = this.divSearch.form.ccfCD_CORP;
        	this.cboYN_DELETE = this.divSearch.form.cboYN_DELETE;
        	this.dxGrid = this.divData.form.divDataLeft.form.objGrid;
        	this.dxGridSub = this.divData.form.divDataRight.form.objGridSub;
        };

        /************************************************************************
         * 이벤트 설정
         ************************************************************************/
        this.fnSetEvent = function() {
        	this.ccfCD_CORP.CodeFindName = "DAX_CFCORP_CODEFIND";
        	this.ccfCD_CORP.BeforeUserDataSetParam = "fnBeforeUserDataSetParam";

        	this.gfnGridInit(this.dxGrid, this.dsList, "DA", "DAZ_INSURERATELIST");
        	this.gfnGridInit(this.dxGridSub, this.dsListSub, "DA", "DAZ_INSURERATE_PENSION");

        	this.dxGrid.set_selecttype("cell");
        	this.dxGrid.addEventHandler("onselectchanged", this.fnGrid_RowCellChanged, this);
        	this.dsList.addEventHandler("canrowposchange", this.dsList_canrowposchange, this);

        	this.dxGridSub.BeforeUserDataSetParam = "fnGrid_BeforeUserDataSetParam";


        	//this.dxGridSub.BeforeUserDataSetParam = "fnGridSub_BeforeUserDataSetParam";
        }

        /************************************************************************
         * 파라미터 설정
         ************************************************************************/
        this.fnSetParameter = function() {

        	this.dsSelect = new Dataset();

        	this.dsSelectSub = new Dataset();
        	this.dsSelectSub.addColumn("CD_CORP", "string");
        	this.dsSelectSub.addColumn("YM_BASE", "string");
        	this.dsSelectSub.addColumn("YN_DELETE", "string");
        	this.dsSelectSub.addColumn("CD_GUBUN", "string");

        	this.dsSaveSub = new Dataset();
        	this.dsSaveSub.addColumn("TY_SAVE", "string");
        	this.dsSaveSub.addColumn("CD_CORP", "string");
        	this.dsSaveSub.addColumn("CD_GUBUN", "string");
        	this.dsSaveSub.addColumn("NO_SEQ", "int");
        	this.dsSaveSub.addColumn("YM_BASE", "string");
        	this.dsSaveSub.addColumn("AM_LOW", "bigdecimal");
        	this.dsSaveSub.addColumn("AM_HIGH", "bigdecimal");
        	this.dsSaveSub.addColumn("RT_EMPLOYEE", "bigdecimal");
        	this.dsSaveSub.addColumn("RT_COMPANY", "bigdecimal");
        	this.dsSaveSub.addColumn("RT_OLDMEDICAL", "bigdecimal");
        	this.dsSaveSub.addColumn("YN_DELETE", "string");
        	this.dsSaveSub.addColumn("ID_USER", "string");
        }

        /************************************************************************
         * 버튼 이벤트
         ************************************************************************/
         /*
          *	조회 버튼
          */
        this.fnSelect = function() {
        	if (!this.fnSelectValidate()) return false;

        	this.gfnGridBeforeSelect(this.dxGrid);
        	//this.dsSelect.clearData();
        	//this.dsSelect.addRow();

        	//this.dsSelect.setColumn(0, "CD_CORP", this.dsSearch.getColumn(0, "CD_CORP"));

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
        	var nrow = this.gfnGridAdd(this.dxGridSub);

        	//this.dsListSub.set_enableevent(false);
        	//this.dsListSub.setColumn(nrow, "CD_ITEMREG", this.dsList.getColumn(this.dsList.rowposition, "ITEMREG"));
        	//this.dsListSub.set_enableevent(true);
        }

        /*
         *	삭제 버튼
         */
        this.fnDel = function() {
        	this.gfnGridDel(this.dxGridSub);
        }

        /*
         *	저장 버튼
         */
        this.fnSave = function() {
        	// 그리드 필수항목 체크
        	if (!this.gfnGridValidate(this.dxGridSub)) return;

        	this.dxGridSub.updateToDataset();

        	// save SP 한개로 사용하는 경우
        	this.dsSaveSub.clearData();

        	for (var i = 0; i < this.dsListSub.rowcount; i++) {
        		var flag = this.gfnGetFlag(this.dsListSub, i);
        		switch(flag) {
        			case "I":
        			case "U":
        			case "D":
        				var cdGubun = this.dsListSub.getColumn(i, "CD_GUBUN");
        				var cdCorp = this.dsListSub.getColumn(i, "CD_CORP");
        				if(cdGubun == "A" || cdGubun == "H" || cdGubun == "P"){
        					cdCorp = "";
        				}

        				var nrow = this.dsSaveSub.addRow();
        				this.dsSaveSub.setColumn(nrow, "TY_SAVE", flag);
        				this.dsSaveSub.setColumn(nrow, "CD_CORP", cdCorp);
        				this.dsSaveSub.setColumn(nrow, "CD_GUBUN", this.dsList.getColumn(this.dsList.rowposition, "CD_GUBUN"));
        				this.dsSaveSub.setColumn(nrow, "NO_SEQ", this.dsListSub.getColumn(i, "NO_SEQ"));
        				this.dsSaveSub.setColumn(nrow, "YM_BASE", this.dsListSub.getColumn(i, "YM_BASE"));
        				this.dsSaveSub.setColumn(nrow, "AM_LOW", this.dsListSub.getColumn(i, "AM_LOW"));
        				this.dsSaveSub.setColumn(nrow, "AM_HIGH", this.dsListSub.getColumn(i, "AM_HIGH"));
        				this.dsSaveSub.setColumn(nrow, "RT_EMPLOYEE", this.dsListSub.getColumn(i, "RT_EMPLOYEE"));
        				this.dsSaveSub.setColumn(nrow, "RT_COMPANY", this.dsListSub.getColumn(i, "RT_COMPANY"));
        				this.dsSaveSub.setColumn(nrow, "RT_OLDMEDICAL", this.dsListSub.getColumn(i, "RT_OLDMEDICAL"));
        				this.dsSaveSub.setColumn(nrow, "YN_DELETE", this.dsListSub.getColumn(i, "YN_DELETE"));
        				this.dsSaveSub.setColumn(nrow, "ID_USER", this.AuthClient.ID_USER);
        				break;
        		}
        	}

        	if (this.dsSaveSub.rowcount == 0) return;

        	var strSvcId    = "d_save";
        	var strSvcType  = "save";
        	var inProc		= "_dsProc";
        	var inData      = "d_save=dsSaveSub";
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
         * 서브 버튼 이벤트
         ************************************************************************/
        // 디테일 그리드 조회
        this.fnSelectSub = function() {
        	if (this.dxGrid.rowcount == 0 || this.dxGrid.currentrow < 0) return;

        	this.gfnGridBeforeSelect(this.dxGridSub);

        	// 디테일 데이터셋 데이터 삭제
        	this.dsListSub.clearData();

        	// 디테일 파마리터 데이터셋 셋팅
        	this.dsSelectSub.clearData();
        	this.dsSelectSub.addRow();

        	var cdGubun = this.dsList.getColumn(this.dsList.rowposition, "CD_GUBUN");
        	var cdCorp = this.dsSearch.getColumn(0, "CD_CORP");
        	if(cdGubun == "A" || cdGubun == "H" || cdGubun == "P"){
        		cdCorp = "";
        	}

        	this.dsSelectSub.setColumn(0, "CD_CORP", cdCorp);
        	this.dsSelectSub.setColumn(0, "YM_BASE", this.dsSearch.getColumn(0, "YM_BASE"));
        	this.dsSelectSub.setColumn(0, "YN_DELETE", this.dsSearch.getColumn(0, "YN_DELETE"));
        	this.dsSelectSub.setColumn(0, "CD_GUBUN", cdGubun);

        	var strSvcId    = "detail";
        	var strSvcType  = "grid";
        	var inProc		= "_dsProc";
        	var inData      = "d_select=dsSelectSub";
        	var outData     = "dsListSub=d_select0";
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



        this.fnExcelSub = function() {
        	this.gfnExcelExport(this.dxGridSub);
        }

        /************************************************************************
         * Validate
         ************************************************************************/
        /*
         *	조회 Validate
         */
        this.fnSelectValidate = function() {
        	var validate = true;

        	if (this.gfnIsNull(this.dsSearch.getColumn(0,"YM_BASE"))) {
        		validate = false;
        		// Alert후 실행할 처리
        		this.fnVaidateCallback = function() {
        			this.ctclYM_BASE.form.TextBox.setFocus();
        		}
        		this.gfnAlert("적용년월을 입력하세요.", "fnVaidateCallback");
        	}
        	/*
        	else if (this.gfnIsNull(this.dsSearch.getColumn(0,"CD_CORP"))) {
        		validate = false;
        		// Alert후 실행할 처리
        		this.fnVaidateCallback = function() {
        			this.ccfCD_CORP.form.CDTextBox.setFocus();
        		}
        		this.gfnAlert("법인코드를 입력하세요.", "fnVaidateCallback");
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
        	if (svcID == "select") {
        		this.gfnGridAfterSelect(this.dxGrid);
        	}
        	else if (svcID == "detail") {
        		this.gfnGridAfterSelect(this.dxGridSub);
        	}
        	else if(svcID == "d_save") {
        		if (errorCode == 0) {
        			// 저장 후에 메인 select가 실행된게 아니라 sub select가 실행된거라서 화면form상태가 수정상태로 남아있다. 그래서 조회(Q)상태로 초기화시키고 조회함
        			this.gfnSetFormStatus(this, "Q");	// 이부분 처리하지 않으면 저장후에 바로 화면 닫을때 변경된 데이터있다고 메시지 나옴
        			this.FormBtns.SubSelect.click();
        		} else {
        			this.gfnAlert(errorMsg);
        		}
        	}
        }

        /************************************************************************
         * 코드파인드 이벤트
         ************************************************************************/
        this.fnBeforeUserDataSetParam = function(id, dsUserParam, nrow) {

         	if(id == "ccfCD_CORP") {
        		dsUserParam.setColumn(nrow, "CD_CORP", this.AuthClient.CD_CORP);
        		dsUserParam.setColumn(nrow, "GR_SEARCH", this.FormInfo.GR_SEARCH);
        		dsUserParam.setColumn(nrow, "ID_USER", this.AuthClient.ID_USER);
        	}

        	return true;
        }

        this.fnGrid_BeforeUserDataSetParam = function(id, dsUserParam, nrow) {
        	// 사원번호
        	if(id == "DAX_CFCORP_CODEFIND") {
        		dsUserParam.setColumn(nrow, "CD_CORP", this.AuthClient.CD_CORP);
        		dsUserParam.setColumn(nrow, "GR_SEARCH", this.FormInfo.GR_SEARCH);
        		dsUserParam.setColumn(nrow, "ID_USER", this.AuthClient.ID_USER);
        	}

        	return true;
        };
        /************************************************************************
         * 그리드 이벤트
         ************************************************************************/
        this.fnGrid_RowCellChanged = function(obj,e)
        {
            if ((obj.oldrow > -1 && obj.oldrow == e.row)
        		|| (obj.oldrow == -1 && e.oldrow != e.row)) {

        		// 디테일 그리드 재설정(그리드 초기화전에 데이터를 먼저 조회한다면 타이머로 딜레이주기)
        		this.fnGridChgInit();

        		// 마스터 그리드 클릭 이벤트(디테일 그리드 조회)
        		this.FormBtns.SubSelect.click();
        		obj.oldrow = -1;
        	}
        };

        // 디테일 그리드 재설정
        this.fnGridChgInit = function()
        {
        	var cdGubun = this.dsList.getColumn(this.dsList.rowposition, "CD_GUBUN");
        	if(cdGubun == "A"){	// 국민연금(A)
        		this.gfnGridInit(this.dxGridSub, this.dsListSub, "DA", "DAZ_INSURERATE_PENSION");
        	}else if(cdGubun == "H"){	// 건강보험(H)
        		this.gfnGridInit(this.dxGridSub, this.dsListSub, "DA", "DAZ_INSURERATE_HEALTH");
        	}else if(cdGubun == "G"){	// 고용보험(G)
        		this.gfnGridInit(this.dxGridSub, this.dsListSub, "DA", "DAZ_INSURERATE_EMPLOY");
        	}else if(cdGubun == "I"){	// 산재보험(I)
        		this.gfnGridInit(this.dxGridSub, this.dsListSub, "DA", "DAZ_INSURERATE_ACCIDENT");
        	}else if(cdGubun == "P"){	// 최저임금(P)
        		this.gfnGridInit(this.dxGridSub, this.dsListSub, "DA", "DAZ_INSURERATE_PAY");
        	}
        }

        this.dsList_canrowposchange = function(obj,e) {
        	var can_rowchange = true;
        	for (var i = 0; i < this.dsListSub.rowcount; i++) {
        		var flag = this.gfnGetFlag(this.dsListSub, i);
        		if (flag == "I" || flag == "U" || flag == "D") {
        			can_rowchange = false;
        			break;
        		}
        	}
        	if(!can_rowchange) {
        		this._row = e.newrow;
        		this.gfnConfirm("변경된 데이터가 있습니다.\r\n계속 진행하시겠습니까?", "dsList_canrowposchange_callback");
        	}
        	return can_rowchange;
        }

        this.dsList_canrowposchange_callback = function(strId, val)
        {
        	if(val == true) {
        		this.dsList.set_enableevent(false);
        		this.dsList.set_rowposition(this._row);
        		this.dsList.set_enableevent(true);
        	}
        }



        /************************************************************************
         * 기타 이벤트
         ************************************************************************/
        this.fnSearchInit = function(obj,e) {
        	if(e == null || (e.pretext != e.posttext)) {
        		this.gfnSetFormStatus(this);
        		this.gfnGridClear(this.dxGrid);
        		this.gfnGridClear(this.dxGridSub);
        	}
        }

        this.divData_ondragmove = function(obj,e)
        {
           if(e.userdata == "splitter") {
              this.divData.form.divSplitter.set_left(e.clientx);
              this.divData.form.resetScroll();
           }
        };

        this.divData_divSplitter_ondrag = function(obj,e)
        {
           e.set_userdata("splitter");
           return true;
        };
        this.dsSearch_onvaluechanged = function(obj,e)
        {
        	if(e.oldvalue != e.newvalue){
        	this.gfnGridClear(this.dxGrid);
        	this.gfnGridClear(this.dxGridSub);
        	}
        };

        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.form_onload,this);
            this.divSearch.form.cboYN_DELETE.addEventHandler("onitemchanged",this.fnSearchInit,this);
            this.divData.addEventHandler("ondragmove",this.divData_ondragmove,this);
            this.divData.form.divSplitter.addEventHandler("ondrag",this.divData_divSplitter_ondrag,this);
            this.dsSearch.addEventHandler("onvaluechanged",this.dsSearch_onvaluechanged,this);
        };
        this.loadIncludeScript("DAZ_INSURERATE.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
