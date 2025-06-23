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
            this.set_titletext("공동연차 철회자 관리");
            if (Form == this.constructor)
            {
                this._setFormPosition(1280,720);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("dsSearch", this);
            obj._setContents("<ColumnInfo><Column id=\"YY_COMMON\" type=\"STRING\" size=\"256\"/><Column id=\"CD_CORP\" type=\"STRING\" size=\"256\"/><Column id=\"DS_CORP\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"CD_CORP\"/><Col id=\"DS_CORP\"/><Col id=\"YY_COMMON\"/></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsList", this);
            obj._setContents("");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsListSub", this);
            obj._setContents("");
            this.addChild(obj.name, obj);


            obj = new Dataset("_dsProc", this);
            obj._setContents("<ColumnInfo><Column id=\"TARGET\" type=\"STRING\" size=\"256\"/><Column id=\"SP\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"TARGET\">select</Col><Col id=\"SP\">DACPR_COMMONVACATION_LIST_SELECT</Col></Row><Row><Col id=\"TARGET\">save</Col><Col id=\"SP\">DACPR_COMMONVACATION_LIST_SAVE</Col></Row><Row><Col id=\"TARGET\">d_select</Col><Col id=\"SP\">DACPR_COMMONVACATION_CANCEL_SELECT</Col></Row><Row><Col id=\"TARGET\">d_save</Col><Col id=\"SP\">DACPR_COMMONVACATION_CANCEL_SAVE</Col></Row><Row><Col id=\"SP\">DACPR_COMMONVACATION_CANCEL_CREATE</Col><Col id=\"TARGET\">cancelCreate</Col></Row></Rows>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Div("divSearch","0","0",null,"46","0",null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_cssclass("div_SEARCH_Bg");
            this.addChild(obj.name, obj);

            obj = new Static("staYY_COMMON","0","10","123","24",null,null,null,null,null,null,this.divSearch.form);
            obj.set_text("공동연차 년도");
            obj.set_taborder("2");
            obj.set_cssclass("sta_WF_SchLabelE");
            this.divSearch.addChild(obj.name, obj);

            obj = new Div("ctclYY_COMMON","staYY_COMMON:0","10","90","24",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("0");
            obj.set_url("cmm::cmmCalYY.xfdl");
            obj.set_enableevent("true");
            obj.set_text("2019");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("staCD_CORP","ctclYY_COMMON:0","10","66","24",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("3");
            obj.set_text("법인");
            obj.set_cssclass("sta_WF_SchLabelE");
            this.divSearch.addChild(obj.name, obj);

            obj = new Div("ccfCD_CORP","staCD_CORP:0","10","250","24",null,null,null,null,null,null,this.divSearch.form);
            obj.getSetter("CodeFindName").set("DZX_CFCORP_STD");
            obj.getSetter("CDTextWidth").set("50");
            obj.getSetter("FitToContents").set("true");
            obj.set_taborder("1");
            obj.set_url("cmm::cmmCodeFind.xfdl");
            obj.set_text("");
            this.divSearch.addChild(obj.name, obj);

            obj = new Div("divData","0","divSearch:0",null,null,"0","0",null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_cssclass("div_DATA_Bg");
            this.addChild(obj.name, obj);

            obj = new Div("divSplitter","30%","0","5",null,null,"0",null,null,null,null,this.divData.form);
            obj.set_taborder("1");
            obj.set_cursor("ew-resize");
            obj.set_cssclass("div_Splitter");
            this.divData.addChild(obj.name, obj);

            obj = new Div("divDataLeft","0","-3",null,null,"divSplitter:5","0",null,null,null,null,this.divData.form);
            obj.set_taborder("0");
            this.divData.addChild(obj.name, obj);

            obj = new Static("staTitle1","0","0","100%","35",null,null,null,null,null,null,this.divData.form.divDataLeft.form);
            obj.set_taborder("0");
            obj.set_text("공동연차");
            obj.set_cssclass("sta_TITLE_Bg");
            this.divData.form.divDataLeft.addChild(obj.name, obj);

            obj = new Grid("objGrid","0","staTitle1:0",null,null,"0","0",null,null,null,null,this.divData.form.divDataLeft.form);
            obj.set_taborder("0");
            obj._setContents("");
            this.divData.form.divDataLeft.addChild(obj.name, obj);

            obj = new Div("divDataRight","divSplitter:5","-3",null,null,"0","0",null,null,null,null,this.divData.form);
            obj.set_taborder("0");
            this.divData.addChild(obj.name, obj);

            obj = new Static("staTitle2","0","0","150","35",null,null,null,null,null,null,this.divData.form.divDataRight.form);
            obj.set_taborder("1");
            obj.set_text("공동연차 철회자");
            obj.set_cssclass("sta_TITLE_Bg");
            this.divData.form.divDataRight.addChild(obj.name, obj);

            obj = new Grid("objGridSub","0","staTitle2:0",null,null,"0","0",null,null,null,null,this.divData.form.divDataRight.form);
            obj.getSetter("sub").set("true");
            obj.set_taborder("0");
            obj._setContents("");
            this.divData.form.divDataRight.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this
            obj = new Layout("default","",this._adjust_width,this._adjust_height,this,function(p){});
            this.addLayout(obj.name, obj);
            
            // BindItem Information
            obj = new BindItem("item0","divSearch.form.ctclYY_COMMON.form.TextBox","value","dsSearch","YY_COMMON");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item1","divSearch.form.ccfCD_CORP.form.CDTextBox","value","dsSearch","CD_CORP");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item2","divSearch.form.ccfCD_CORP.form.DSTextBox","value","dsSearch","DS_CORP");
            this.addChild(obj.name, obj);
            obj.bind();
            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {
            this._addPreloadList("fdl","cmm::cmmCalYY.xfdl");
            this._addPreloadList("fdl","cmm::cmmCodeFind.xfdl");
        };
        
        // User Script
        this.registerScript("DAC_COMMONVACATION.xfdl", function() {
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
        	this.fnSetInit();
        };

        /************************************************************************
         * 버튼 설정
         ************************************************************************/
        this.fnSetButton = function() {
        	// 서브 버튼 사용
        	this.gfnUseSubBtn(true, this.divData, this.divData.form.divSplitter); // divSplitter sync
        }

        /************************************************************************
         * 확장 버튼 : 화면별 버튼 설정 ID, function 연결
         ************************************************************************/
        this.fnSetExtendButton = function() {
        	this.btnCanCreate = this.gfnFormButtonAdd("CanCreate", "fnCancelCreate"); 	// 제외자 생성
        	this.btnAddSel    = this.gfnFormButtonAdd("AddSel", "fnAddSel"); 	        // 추가자 조회
        };

        /************************************************************************
         * 변수 선언
         ************************************************************************/
        this.fnSetVariable = function() {
        	this.ccfCD_CORP   = this.divSearch.form.ccfCD_CORP;
        	this.ctclYY_COMMON   = this.divSearch.form.ctclYY_COMMON;

        	this.dxGrid       = this.divData.form.divDataLeft.form.objGrid;
        	this.dxGridSub    = this.divData.form.divDataRight.form.objGridSub;
        };

        /************************************************************************
         * 이벤트 설정
         ************************************************************************/
        this.fnSetEvent = function() {
        	this.gfnGridInit(this.dxGrid, this.dsList, "DA", "DAC_COMMONVACATION");
        	this.dxGrid.addEventHandler("onselectchanged", this.fnGrid_RowCellChanged, this);
        	this.dsList.addEventHandler("canrowposchange", this.dsList_canrowposchange, this);

        	this.gfnGridInit(this.dxGridSub, this.dsListSub, "DA", "DAC_COMMONVACATION1");
        	this.dxGridSub.BeforeUserDataSetParam = "fnGridSubBeforeUserDataSetParam";
        	this.dxGridSub.AfterCDTextChanged = "fnGridSubAfterCDTextChanged";

        	this.bSelect = false;
        	this.dsSearch.addEventHandler("onvaluechanged", this.dsSearch_onvaluechanged, this);
        };

        /************************************************************************
         * 파라미터 설정
         ************************************************************************/
        this.fnSetParameter = function() {

        	this.dsSelect = new Dataset();
        	this.dsSelect.addColumn("YY_COMMON" , "STRING");
        	this.dsSelect.addColumn("CD_CORP"   , "STRING");

        	this.dsSave = new Dataset();
        	this.dsSave.addColumn("TY_WRK"   , "STRING");
        	this.dsSave.addColumn("CD_CORP"  , "STRING");
        	this.dsSave.addColumn("DT_COMMON", "STRING");
        	this.dsSave.addColumn("DS_REMARK", "STRING");
        	this.dsSave.addColumn("ID_USER"  , "STRING");

        	this.dsSelectSub = new Dataset();
        	this.dsSelectSub.addColumn("CD_CORP"  , "STRING");
        	this.dsSelectSub.addColumn("DT_COMMON", "STRING");

        	this.dsSaveSub = new Dataset();
        	this.dsSaveSub.addColumn("TY_WRK"     , "STRING");
        	this.dsSaveSub.addColumn("NO_SEQ"     , "INT");
        	this.dsSaveSub.addColumn("TY_GUBUN"   , "STRING");
        	this.dsSaveSub.addColumn("DT_COMMON"  , "STRING");
        	this.dsSaveSub.addColumn("CD_CORP"    , "STRING");
        	this.dsSaveSub.addColumn("ID_PERSON"  , "INT");
        	this.dsSaveSub.addColumn("ID_SABUN"   , "STRING");
        	this.dsSaveSub.addColumn("CD_VACATION", "STRING");
        	this.dsSaveSub.addColumn("DS_REMARK"  , "STRING");
        	this.dsSaveSub.addColumn("ID_USER"    , "STRING");

        	this.dsCreate = new Dataset();
        	this.dsCreate.addColumn("CD_CORP"  , "STRING");
        	this.dsCreate.addColumn("DT_COMMON", "STRING");
        	this.dsCreate.addColumn("ID_USER"  , "STRING");
        };

        /************************************************************************
         * 초기화 이벤트
         ************************************************************************/
        this.fnSetInit = function ()
        {
        	var today = this.gfnGetDate();
        	this.dsSearch.setColumn(0,"YY_COMMON",today.substr(0,4));
        	this.dsSearch.setColumn(0,"CD_CORP",this.AuthClient.CD_CORP);
        	this.dsSearch.setColumn(0,"DS_CORP",this.AuthClient.DS_CORP);
        	this.FormBtns.Select.click();
        	this.bSelect = true;
        };

        /************************************************************************
         * 버튼 이벤트
         ************************************************************************/
         /*
          *	조회 버튼
          */
        this.fnSelect = function() {
        	if(!this.fnSelectValidate()) return;

        	this.gfnGridBeforeSelect(this.dxGrid);

        	this.dsSelect.clearData();
        	this.dsSelect.addRow();
        	this.dsSelect.setColumn(0, "YY_COMMON", this.dsSearch.getColumn(0, "YY_COMMON"));
        	this.dsSelect.setColumn(0, "CD_CORP"  , this.dsSearch.getColumn(0, "CD_CORP"));

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
        	var nrow = this.gfnGridAdd(this.dxGrid);
        	this.dsList.setColumn(nrow,"CD_CORP",this.dsSearch.getColumn(0, "CD_CORP"));
        	this.dsList.setColumn(nrow,"DS_CORP",this.dsSearch.getColumn(0, "DS_CORP"));
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
        	if (!this.gfnGridValidate(this.dxGrid)) return;
        	if (this.dsList.rowcount> 0) {
        		var cnt = this.dsList.getCaseCount("YN_UPDATE == 'N'");
        		if( cnt > 0 ) {
        			this.gfnAlert("오류건이 존재하여 저장할 수 없습니다.\n오류 내용을 확인하고 다시 업로드 해주세요.");
        			return false;
        		}
        	}
        	this.dxGrid.updateToDataset();

        	this.dsSave.clearData();

        	for (var i = 0; i < this.dsList.rowcount; i++) {
        		var flag = this.gfnGetFlag(this.dsList, i);
        		switch(flag) {
        			case "I":
        			case "U":
        			case "D":
        				var nrow = 0;
        				if( flag == "D" ){
        					nrow = this.dsSave.insertRow(0);
        				} else {
        					nrow = this.dsSave.addRow();
        				}
        				this.dsSave.setColumn(nrow, "TY_WRK"       , flag);
        				this.dsSave.setColumn(nrow, "CD_CORP"      , this.dsList.getColumn(i, "CD_CORP"));
        				this.dsSave.setColumn(nrow, "DT_COMMON"    , this.dsList.getColumn(i, "DT_COMMON"));
        				this.dsSave.setColumn(nrow, "DS_REMARK"    , this.dsList.getColumn(i, "DS_REMARK"));
        				this.dsSave.setColumn(nrow, "ID_USER"      , this.AuthClient.ID_USER);
        				break;
        		}
        	}

        	if (this.dsSave.rowcount == 0) return;

        	var strSvcId    = "save";
        	var strSvcType  = "save";
        	var inProc		= "_dsProc";
        	var inData      = "save=dsSave";
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
        	var arrGrid = [], arrSheetName = [];
        	arrGrid[0] = this.dxGrid;
        	arrSheetName[0] = "공동연차";
        	arrGrid[1] = this.dxGridSub;
        	arrSheetName[1] = "공동연차 철회자";
        	this.gfnExcelExportMulti(arrGrid,  arrSheetName, this.titletext);
        };

        /************************************************************************
         * 서브 버튼 이벤트
         ************************************************************************/
         /*
         *	Sub 조회 버튼
         */
        this.fnSelectSub = function() {
        	if (this.dxGrid.rowcount == 0 || this.dxGrid.currentrow < 0) return false;

        	this.dsListSub.clearData();
        	var strCdCorp = this.dsList.getColumn(this.dsList.rowposition, "CD_CORP");
        	var strDtCommon = this.dsList.getColumn(this.dsList.rowposition, "DT_COMMON");
        	if ( this.gfnIsNull(strCdCorp) || this.gfnIsNull(strDtCommon) ) {
        		return false;
        	}

        	this.gfnGridBeforeSelect(this.dxGridSub);

        	this.dsSelectSub.clearData();
        	this.dsSelectSub.addRow();
        	this.dsSelectSub.setColumn(0, "CD_CORP", strCdCorp);
        	this.dsSelectSub.setColumn(0, "DT_COMMON", strDtCommon);

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
        };
         /*
         *	Sub 추가 버튼
         */
        this.fnAddSub = function() {
        	var nrow = this.gfnGridAdd(this.dxGridSub);
        };

         /*
         *	Sub 삭제 버튼
         */
        this.fnDelSub = function() {
        	this.gfnGridDel(this.dxGridSub);
        };

        /*
         *	Sub 저장 버튼
         */
        this.fnSaveSub = function() {
        	if (!this.gfnGridValidate(this.dxGridSub)) return;

        	this.dxGridSub.updateToDataset();

        	this.dsSaveSub.clearData();

        	for (var i = 0; i < this.dsListSub.rowcount; i++) {
        		var flag = this.gfnGetFlag(this.dsListSub, i);
        		switch(flag) {
        			case "I":
        			case "U":
        			case "D":
        				var nrow = 0;
        				if( flag == "D" ){
        					nrow = this.dsSaveSub.insertRow(0);
        				} else {
        					nrow = this.dsSaveSub.addRow();
        				}
        				this.dsSaveSub.setColumn(nrow, "TY_WRK"     , flag);
        				this.dsSaveSub.setColumn(nrow, "CD_CORP"    , this.dsListSub.getColumn(i, "CD_CORP"));
        				this.dsSaveSub.setColumn(nrow, "ID_PERSON"  , this.dsListSub.getColumn(i, "ID_PERSON"));
        				this.dsSaveSub.setColumn(nrow, "ID_SABUN"   , this.dsListSub.getColumn(i, "ID_SABUN"));
        				this.dsSaveSub.setColumn(nrow, "NO_SEQ"     , this.dsListSub.getColumn(i, "NO_SEQ"));
        				this.dsSaveSub.setColumn(nrow, "DT_COMMON"  , this.dsList.getColumn(this.dsList.rowposition, "DT_COMMON"));
        				this.dsSaveSub.setColumn(nrow, "TY_GUBUN"   , this.dsListSub.getColumn(i, "TY_GUBUN"));
        				this.dsSaveSub.setColumn(nrow, "CD_VACATION", this.dsListSub.getColumn(i, "CD_VACATION"));
        				this.dsSaveSub.setColumn(nrow, "DS_REMARK"  , this.dsListSub.getColumn(i, "DS_REMARK"));
        				this.dsSaveSub.setColumn(nrow, "ID_USER"    , this.AuthClient.ID_USER);
        				break;
        		}
        	}

        	if (this.dsSaveSub.rowcount == 0) return;

        	var strSvcId    = "savesub";
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
        };

        /************************************************************************
         * Validate
         ************************************************************************/
        this.fnSelectValidate = function() {
        	// 공통에서 필수 빈값 체크 후 focus 이동. 필수CSS 선언.

        	var validate = true;
        	if (validate && this.gfnIsNull(this.dsSearch.getColumn(0, "YY_COMMON"))) {
        		validate = false;
        		this.fnVaidateCallback = function() {
        			this.ctclYY_COMMON.form.TextBox.setFocus();
        		}
        		this.gfnAlert("공동연차 년도를 입력하세요.", "fnVaidateCallback");
        	}

        	if (validate && this.gfnIsNull(this.dsSearch.getColumn(0, "CD_CORP"))) {
        		validate = false;
        		this.fnVaidateCallback = function() {
        			this.ccfCD_CORP.form.CDTextBox.setFocus();
        		}
        		this.gfnAlert("법인을 입력하세요.", "fnVaidateCallback");
        	}
        	return validate;
        };
        /************************************************************************
         * 확장버튼 이벤트
         ************************************************************************/
        // 대상자 생성 처리
        this.fnCancelCreate_callback = function(strId, val) {
        	if(val) {
        	this.dsCreate.clearData();
        	var nrow = this.dsCreate.addRow();
        	this.dsCreate.setColumn(nrow, "CD_CORP"  , this.dsList.getColumn(this.dsList.rowposition, "CD_CORP"));
        	this.dsCreate.setColumn(nrow, "DT_COMMON", this.dsList.getColumn(this.dsList.rowposition,"DT_COMMON"));
        	this.dsCreate.setColumn(nrow, "ID_USER"  , this.AuthClient.ID_USER);

        	if (this.dsCreate.rowcount == 0) return;

        	var strSvcId    = "cancelCreate";
        	var strSvcType  = "save";
        	var inProc		= "_dsProc";
        	var inData      = "cancelCreate=dsCreate";
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
        };

        // 대상자 생성 버튼
        this.fnCancelCreate = function(obj,e) {


        	if(!this.gfnGridIsRow(this.dxGrid)) return false;
        	var dtCommon = this.dsList.getColumn(this.dsList.rowposition,"DT_COMMON");
        	dtCommon = dtCommon.substr(0,4) +"-" + dtCommon.substr(4,2)+"-" + dtCommon.substr(6,2)
        	this.gfnConfirm("법인 : "+this.dsList.getColumn(this.dsList.rowposition, "DS_CORP")+ "\n공동연차일 : "+dtCommon
        	+"\n\n공동연차 생성 시점 : 재직자\n공동연차 실행 시점 : 제외자 인 직원을 생성하시겠습니까?", "fnCancelCreate_callback");

        };

        // 복직자 현황 버튼
        this.fnAddSel = function(obj,e) {
        	var param = {};
        	param.CD_CORP   = this.dsList.getColumn(this.dsList.rowposition, "CD_CORP");
        	param.DS_CORP   = this.dsList.getColumn(this.dsList.rowposition, "DS_CORP");
        	param.DT_COMMON = this.dsList.getColumn(this.dsList.rowposition,"DT_COMMON");

        	this.gfnFormOpen(this.FormInfo.CD_MODULE, "DAC_COMMONVACATION_ADD", "", param);
        };
        /************************************************************************
         * 콜백 이벤트
         ************************************************************************/
        /*
         *	콜백 처리
         */
        this.fnCallback = function(svcID, errorCode, errorMsg)
        {
        	//trace("fnCallback svcID = " + svcID + " , errorCode = " + errorCode + ", errorMsg = " + errorMsg);
        	if (svcID == "select") {
        		this.gfnGridAfterSelect(this.dxGrid);
        	}
        	else if (svcID == "detail") {
        		this.gfnGridAfterSelect(this.dxGridSub);
        	}
        	else if(svcID == "save") {
        		if (errorCode == 0) {
        			this.FormBtns.Select.click();
        		} else {
        			this.gfnAlert(errorMsg);
        		}
        	}
        	else if(svcID == "savesub" || svcID ==  "cancelCreate") {
        		if (errorCode == 0) {
        			this.FormBtns.SubSelect.click();
        		} else {
        			this.gfnAlert(errorMsg);
        		}
        	}
        }

        /************************************************************************
         * 코드파인드 이벤트
         ************************************************************************/
        /************************************************************************
         * 그리드 이벤트
         ************************************************************************/
        this.fnGrid_RowCellChanged = function(obj,e)
        {
            if ((obj.oldrow > -1 && obj.oldrow == e.row)
        		|| (obj.oldrow == -1 && e.oldrow != e.row)) {
        		this.FormBtns.SubSelect.click();
        		obj.oldrow = -1;
        	}
        };

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
        };

        /*
         *	서브 그리드 코드파인드
         */
        this.fnGridSubBeforeUserDataSetParam = function(id, dsUserParam, nrow) {

        	// 사번
        	if (id == "DAX_CFCOMMON_CANCEL_CODE") {
        		dsUserParam.setColumn(nrow, "CD_CORP", this.dsList.getColumn(this.dsList.rowposition, "CD_CORP"));
        		dsUserParam.setColumn(nrow, "CD_DEPT"  ,"");
        		dsUserParam.setColumn(nrow, "DT_COMMON", this.dsList.getColumn(this.dsList.rowposition, "DT_COMMON"));
        	}

        	// 근태코드
        	if (id == "GT") {
        		dsUserParam.setColumn(nrow, "CD_PREFIX", "GT");
        		dsUserParam.setColumn(nrow, "CD_CORP",  this.dsList.getColumn(this.dsList.rowposition, "CD_CORP"));
         	}
        	return true;
        };

        this.fnGridSubAfterCDTextChanged = function(id, codeFindData) {
        	var arr = codeFindData;
        	if( arr.length > 0 ){
        		switch(id) {
        			case "DAX_CFCOMMON_CANCEL_CODE":	// 사번

        				var nrow = this.dsListSub.rowposition;
        				var nCnt = this.dsListSub.getCaseCount( "currow != "+ nrow +" && ID_PERSON == '" + this.dsListSub.getColumn(nrow,"ID_PERSON") + "' && NO_SEQ == " + arr[0]["NO_SEQ"] + " && CD_CORP == '" + arr[0]["CD_CORP"] + "' && ID_SABUN == '" + arr[0]["ID_SABUN"] + "'" );
        				if (nCnt > 0) {
        					this.fnCallback = function() {
        						this.dsListSub.setColumn(this.dsListSub.rowposition,"CD_CORP","");
        						this.dsListSub.setColumn(this.dsListSub.rowposition,"DS_CORP","");
        						this.dsListSub.setColumn(this.dsListSub.rowposition,"CD_DEPT","");
        						this.dsListSub.setColumn(this.dsListSub.rowposition,"DS_DEPT","");
        						this.dsListSub.setColumn(this.dsListSub.rowposition,"ID_PERSON","");
        						this.dsListSub.setColumn(this.dsListSub.rowposition,"NO_SEQ","");
        						this.dsListSub.setColumn(this.dsListSub.rowposition,"ID_SABUN","");
        						this.dsListSub.setColumn(this.dsListSub.rowposition,"DS_HNAME","");
        						this.dsListSub.setColumn(this.dsListSub.rowposition,"TY_GUBUN","");
        						this.dsListSub.setColumn(this.dsListSub.rowposition,"CD_VACATION","");
        						this.dsListSub.setColumn(this.dsListSub.rowposition,"DS_VACATION","");
        						this.dsListSub.setColumn(this.dsListSub.rowposition,"TY_STATUS","");

        						return false;
        					}
        					this.gfnAlert("이미 등록된 직원입니다.", "fnCallback");
        				} else {
        					this.dsListSub.setColumn(this.dsListSub.rowposition,"CD_VACATION",arr[0]["CD_VACATION"]);
        					this.dsListSub.setColumn(this.dsListSub.rowposition,"DS_VACATION",arr[0]["DS_VACATION"]);
        				}
        				break;
        		}
        	}
        	return true;

        };

        /************************************************************************
         * 기타 이벤트
         ************************************************************************/
        this.dsSearch_onvaluechanged = function(obj,e)
        {
        	if(this.bSelect && e.newvalue != e.oldvalue) {
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
        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.form_onload,this);
            this.divData.addEventHandler("ondragmove",this.divData_ondragmove,this);
            this.divData.form.divSplitter.addEventHandler("ondrag",this.divData_divSplitter_ondrag,this);
        };
        this.loadIncludeScript("DAC_COMMONVACATION.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
