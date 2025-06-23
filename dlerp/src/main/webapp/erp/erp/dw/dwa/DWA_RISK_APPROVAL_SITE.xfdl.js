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
            obj._setContents("<ColumnInfo><Column id=\"TARGET\" type=\"STRING\" size=\"256\"/><Column id=\"SP\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"TARGET\">select</Col><Col id=\"SP\">DWAPR_RISK_SELECT</Col></Row><Row><Col id=\"SP\">DWAPR_RISKDTLS_SELECT</Col><Col id=\"TARGET\">d_select</Col></Row><Row><Col id=\"TARGET\">execAppr</Col><Col id=\"SP\">DZZPR_APPROVAL_CALLBACK</Col></Row><Row><Col id=\"SP\">DZRPR_AP_STATE_SELECT</Col><Col id=\"TARGET\">appr_select</Col></Row><Row><Col id=\"TARGET\">aplines</Col><Col id=\"SP\">DZRPR_APPLINES_SELECT</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsListSub", this);
            obj._setContents("");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsSearch", this);
            obj._setContents("<ColumnInfo><Column id=\"CD_SITE\" type=\"STRING\" size=\"256\"/><Column id=\"NO_SILHENG\" type=\"STRING\" size=\"256\"/><Column id=\"NO_RISK\" type=\"STRING\" size=\"256\"/><Column id=\"YN_LINK\" type=\"STRING\" size=\"256\"/><Column id=\"ID_AP\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"CD_SITE\"/><Col id=\"NO_SILHENG\"/><Col id=\"NO_RISK\"/><Col id=\"YN_LINK\"/><Col id=\"ID_AP\"/></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsListAppr", this);
            obj._setContents("<ColumnInfo><Column id=\"ID_AP\" type=\"STRING\" size=\"256\"/><Column id=\"ID_AP_TYPE\" type=\"STRING\" size=\"256\"/><Column id=\"DS_AP_TYPE\" type=\"STRING\" size=\"256\"/><Column id=\"DS_TITLE\" type=\"STRING\" size=\"256\"/><Column id=\"ST_APPR\" type=\"STRING\" size=\"256\"/><Column id=\"YN_USER\" type=\"STRING\" size=\"256\"/><Column id=\"YN_APP\" type=\"STRING\" size=\"256\"/><Column id=\"YN_APP_LINE\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsListAplines", this);
            obj.set_useclientlayout("false");
            obj._setContents("");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Div("divSearch","0.0","10.0",null,"46.0","0",null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_cssclass("div_SEARCH_Bg");
            this.addChild(obj.name, obj);

            obj = new Static("staCD_SITE","0.0","10.0","92.0","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("0");
            obj.set_text("현장코드");
            obj.set_cssclass("sta_WF_SchLabelE");
            this.divSearch.addChild(obj.name, obj);

            obj = new Div("ccfCD_SITE","staCD_SITE:0.0","10.0","350","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.getSetter("CodeFindName").set("DZX_CFSITE");
            obj.getSetter("CDTextWidth").set("80");
            obj.set_taborder("1");
            obj.set_url("cmm::cmmCodeFind.xfdl");
            obj.set_enable("false");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("staNO_RISK","ccfCD_SITE:0.0","10.0","92.0","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("2");
            obj.set_text("관리번호");
            obj.set_textAlign("center");
            obj.set_cssclass("sta_WF_SchLabelE");
            this.divSearch.addChild(obj.name, obj);

            obj = new Div("ccfNO_RISK","staNO_RISK:0.0","10.0","350","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.getSetter("CodeFindName").set("DWX_CFRISK_01");
            obj.getSetter("CDTextWidth").set("90");
            obj.set_taborder("3");
            obj.set_url("cmm::cmmCodeFind.xfdl");
            obj.set_enable("false");
            this.divSearch.addChild(obj.name, obj);

            obj = new CheckBox("cchkYN_Pre","ccfNO_RISK:0.0","10.0","60","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("4");
            obj.set_text("변경전");
            obj.set_value("true");
            this.divSearch.addChild(obj.name, obj);

            obj = new CheckBox("cchkYN_DOKUB","cchkYN_Pre:0.0","10.0","50","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("5");
            obj.set_text("도급");
            obj.set_truevalue("Y");
            obj.set_falsevalue("N");
            this.divSearch.addChild(obj.name, obj);

            obj = new Edit("ctxtNO_SILHENG",null,"10.0","200","24.0","5",null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("6");
            obj.set_enable("false");
            obj.set_visible("false");
            this.divSearch.addChild(obj.name, obj);

            obj = new Div("divData","0","divSearch:10",null,null,"0","0",null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_cssclass("div_DATA_Bg");
            this.addChild(obj.name, obj);

            obj = new Div("divSplitter","0","32.65%","100%","5",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("1");
            obj.set_background("skyblue");
            obj.set_cursor("ns-resize");
            this.divData.addChild(obj.name, obj);

            obj = new Div("divDataApprLeft","0","0","700","79",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("4");
            obj.set_background("");
            obj.set_border("1px solid #c9c6c3");
            this.divData.addChild(obj.name, obj);

            obj = new Static("staApprNm","0","4",null,null,"0","0",null,null,null,null,this.divData.form.divDataApprLeft.form);
            obj.set_taborder("0");
            obj.set_text("변경내역 품의서");
            obj.set_textDecoration("none");
            obj.set_background("");
            obj.set_font("normal 20pt/normal \"Arial\"");
            obj.set_textAlign("center");
            this.divData.form.divDataApprLeft.addChild(obj.name, obj);

            obj = new Div("divDataAppr","divDataApprLeft:10","0",null,"80","0",null,null,null,null,null,this.divData.form);
            obj.set_taborder("3");
            this.divData.addChild(obj.name, obj);

            obj = new Grid("objGridAppr","0","0",null,null,"0","0",null,null,null,null,this.divData.form.divDataAppr.form);
            obj.set_taborder("0");
            obj._setContents("");
            this.divData.form.divDataAppr.addChild(obj.name, obj);

            obj = new Div("divDataTop","0","divDataAppr:10",null,null,"0","divSplitter:5",null,null,null,null,this.divData.form);
            obj.set_taborder("0");
            this.divData.addChild(obj.name, obj);

            obj = new Grid("objGrid","0","0",null,null,"0","0",null,null,null,null,this.divData.form.divDataTop.form);
            obj.set_taborder("0");
            obj._setContents("");
            this.divData.form.divDataTop.addChild(obj.name, obj);

            obj = new Div("divDataBottom","0","divSplitter:5",null,null,"0","0",null,null,null,null,this.divData.form);
            obj.set_taborder("0");
            this.divData.addChild(obj.name, obj);

            obj = new Static("sta02","0","0",null,"22","0",null,null,null,null,null,this.divData.form.divDataBottom.form);
            obj.set_taborder("0");
            obj.set_cssclass("sta_TITLE_Bg");
            obj.set_text("변경상세내역");
            this.divData.form.divDataBottom.addChild(obj.name, obj);

            obj = new Grid("objGridSub","0","sta02:5",null,null,"0","0",null,null,null,null,this.divData.form.divDataBottom.form);
            obj.getSetter("sub").set("true");
            obj.set_taborder("1");
            obj._setContents("");
            this.divData.form.divDataBottom.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this
            obj = new Layout("default","",this._adjust_width,this._adjust_height,this,function(p){});
            this.addLayout(obj.name, obj);
            
            // BindItem Information
            obj = new BindItem("item0","divSearch.form.ccfCD_SITE.form.CDTextBox","value","dsSearch","CD_SITE");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item1","divSearch.form.ccfNO_RISK.form.CDTextBox","value","dsSearch","NO_RISK");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item2","divSearch.form.ctxtNO_SILHENG","value","dsSearch","NO_SILHENG");
            this.addChild(obj.name, obj);
            obj.bind();
            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {
            this._addPreloadList("fdl","cmm::cmmCodeFind.xfdl");
        };
        
        // User Script
        this.registerScript("DWA_RISK_APPROVAL_SITE.xfdl", function() {
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

        	// 타화면에서 오픈시 넘어오는 파라미터 처리
        	if(!this.gfnIsNull(this.getOwnerFrame().PARAM01) && !this.gfnIsNull(this.getOwnerFrame().PARAM02)) {
        		this.dsSearch.setColumn(0, "CD_SITE", this.getOwnerFrame().PARAM01);
        		this.divSearch.form.ccfCD_SITE.form.fnCodeFindLoad();
        		this.dsSearch.setColumn(0, "NO_RISK", this.getOwnerFrame().PARAM02);
        		this.divSearch.form.ccfNO_RISK.form.fnCodeFindLoad();
        		this.dsSearch.setColumn(0, "YN_LINK", this.getOwnerFrame().YN_LINK);	// 화면에서 팝업을 호출할경우 N, 링크를 통해서 화면을 오픈할경우 null 이다
        		this.dsSearch.setColumn(0, "ID_AP", this.getOwnerFrame().ID_AP);		// 전자결재문서번호
        		//this.dsSearch.setColumn(0, "NO_SILHENG", this.getOwnerFrame().NO_SILHENG);

        		// 결재상태값 조회 후 그리드 조회한다
        		this.fnApprSel();
        	}

        	this.divSearch_cchkYN_Pre_onchanged(this.divSearch.form.cchkYN_Pre, {postvalue:this.divSearch.form.cchkYN_Pre.value});
        	this.divSearch_cchkYN_DOKUB_onchanged(this.divSearch.form.cchkYN_DOKUB, {postvalue:this.divSearch.form.cchkYN_DOKUB.value});

        };



        /************************************************************************
         * 버튼 설정 : 화면(Tab) 전환시 마다 호출
         ************************************************************************/
        this.fnSetButton = function() {
        }

        /************************************************************************
         * 확장 버튼 : 화면별 버튼 설정 ID, function 연결
         ************************************************************************/
        this.fnSetExtendButton = function() {
        	this.btnAttachFile = this.gfnFormButtonAdd("btnAttachFile", "fnAttachFile");
        	this.btnRiskAtfl = this.gfnFormButtonAdd("btnRiskAtfl", "fnRiskAtfl");
        	this.btnAprvCmpl = this.gfnFormButtonAdd("btnAprvCmpl", "fnAprvCmpl");
        	this.btnAprvCnc = this.gfnFormButtonAdd("btnAprvCnc", "fnAprvCnc");
        	this.btnAprvInf = this.gfnFormButtonAdd("btnAprvInf", "fnAprvInf");
        	this.btnAprvSang = this.gfnFormButtonAdd("btnAprvSang", "fnAprvSang");
        	this.btnApCnl = this.gfnFormButtonAdd("btnApCnl", "fnApCnl");
        };

        /************************************************************************
         * 변수 선언
         ************************************************************************/
        this.fnSetVariable = function() {
        	this.ccfCD_SITE = this.divSearch.form.ccfCD_SITE;
        	this.ccfNO_RISK = this.divSearch.form.ccfNO_RISK;
        	this.dxGrid = this.divData.form.divDataTop.form.objGrid;
        	this.dxGridSub = this.divData.form.divDataBottom.form.objGridSub;

        	this.dxGridAppr = this.divData.form.divDataAppr.form.objGridAppr;
        };

        /************************************************************************
         * 이벤트 설정
         ************************************************************************/
        this.fnSetEvent = function() {
        	this.ccfNO_RISK.BeforeUserDataSetParam = "fnBeforeUserDataSetParam";
        	this.ccfNO_RISK.AfterCDTextChanged = "ccfNO_RISK_AfterCDTextChanged";

        	this.gfnGridInit(this.dxGrid, this.dsList, "DW", "DWA_RISK_APP");
        	this.dxGrid.set_selecttype("cell");
        	//this.dxGrid.addEventHandler("onselectchanged", this.fnGrid_RowCellChanged, this);
        	//this.dsList.addEventHandler("canrowposchange", this.dsList_canrowposchange, this);

        	this.gfnGridInit(this.dxGridSub, this.dsListSub, "DW", "DWA_RISKDTLS_APP");

        	// 결재관련
        	this.gfnGridInit(this.dxGridAppr, this.dsListAplines, "DZ", "DZR_APLINES_01");

        	this.dxGridAppr.set_extendsizetype("row");
        	this.dxGridAppr.set_scrollbartype("none default");	// 가로 스크롤이 생기지 않게 셋팅
        	var colDS_NOTE = this.dxGridAppr.getBindCellIndex("body", "DS_NOTE");
        	this.dxGridAppr.setCellProperty("body", colDS_NOTE, "tooltiptext", "expr:DS_NOTE==''?'':DS_NOTE" );	// 의견컬럼 툴팁추가
        }

        /************************************************************************
         * 파라미터 설정
         ************************************************************************/
        this.fnSetParameter = function() {

        	this.dsSelect = new Dataset();
        	this.dsSelect.addColumn("TY_WRK", "string");
        	this.dsSelect.addColumn("CD_SITE", "string");
        	this.dsSelect.addColumn("NO_RISK", "string");

        	this.dsSelectSub = new Dataset();
        	this.dsSelectSub.addColumn("TY_WRK", "string");
        	this.dsSelectSub.addColumn("CD_SITE", "string");
        	this.dsSelectSub.addColumn("NO_RISK", "string");
        	this.dsSelectSub.addColumn("NO_HADOCONT", "string");
        	this.dsSelectSub.addColumn("NO_SEQCONT", "string");

        	this.dsExecAppr = new Dataset();
        	this.dsExecAppr.addColumn("ID_AP", "string");
        	this.dsExecAppr.addColumn("V_PARAM01", "string");
        	this.dsExecAppr.addColumn("V_PARAM02", "string");
        	this.dsExecAppr.addColumn("V_PARAM03", "string");
        	this.dsExecAppr.addColumn("V_PARAM04", "string");
        	this.dsExecAppr.addColumn("ST_APPR", "string");
        	this.dsExecAppr.addColumn("ID_USER", "string");

        	this.dsSelectAppr = new Dataset();
        	this.dsSelectAppr.addColumn("ID_AP", "string");
        	this.dsSelectAppr.addColumn("ID_USER", "string");

        	// 결재선 그리드
        	this.dsAplines = new Dataset();
        	this.dsAplines.addColumn("ID_AP", "string");
        }

        /************************************************************************
         * 버튼 이벤트
         ************************************************************************/
         /*
          *	조회 버튼
          */
        this.fnSelect = function() {
        	if (!this.fnSelectValidate()) return false;


        	this.dsSelect.clearData();
        	this.dsSelect.addRow();

        	this.dsSelect.setColumn(0, "TY_WRK", "Q");
        	this.dsSelect.setColumn(0, "CD_SITE", this.dsSearch.getColumn(0, "CD_SITE"));
        	this.dsSelect.setColumn(0, "NO_RISK", this.dsSearch.getColumn(0, "NO_RISK"));


        	// 디테일
        	this.dsSelectSub.clearData();
        	this.dsSelectSub.addRow();

        	this.dsSelectSub.setColumn(0, "TY_WRK", "Q");
        	this.dsSelectSub.setColumn(0, "CD_SITE", this.dsSearch.getColumn(0, "CD_SITE"));
        	this.dsSelectSub.setColumn(0, "NO_RISK", this.dsSearch.getColumn(0, "NO_RISK"));
        	this.dsSelectSub.setColumn(0, "NO_HADOCONT", this.dsList.getColumn(this.dsList.rowposition, "NO_HADOCONT"));
        	this.dsSelectSub.setColumn(0, "NO_SEQCONT", this.dsList.getColumn(this.dsList.rowposition, "NO_SEQCONT"));

        	// 결재선
        	this.dsAplines.clearData();
        	this.dsAplines.addRow();

        	this.dsAplines.setColumn(0, "ID_AP", this.dsSearch.getColumn(0, "ID_AP"));

        	var strSvcId    = "select";
        	var strSvcType  = "grid";
        	var inProc		= "_dsProc";
        	var inData      = "select=dsSelect d_select=dsSelectSub aplines=dsAplines";
        	var outData     = "dsList=select0 dsListSub=d_select0 dsListAplines=aplines0";
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
        	this.gfnGridAdd(this.dxGrid);
        }

        /*
         *	삭제 버튼
         */
        this.fnDel = function() {
        	this.gfnGridDel(this.dxGrid);
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

        	if (this.gfnIsNull(this.dsSearch.getColumn(0, "CD_SITE"))) {
        		validate = false;
        		// Alert후 실행할 처리
        		this.fnVaidateCallback = function() {
        			this.divSearch.form.ccfCD_SITE.form.CDTextBox.setFocus();
        		}
        		this.gfnAlert("현장코드를 입력하세요.", "fnVaidateCallback");
        	}
        	else if (this.gfnIsNull(this.dsSearch.getColumn(0, "NO_RISK"))) {
        		validate = false;
        		// Alert후 실행할 처리
        		this.fnVaidateCallback = function() {
        			this.divSearch.form.ccfNO_RISK.form.CDTextBox.setFocus();
        		}
        		this.gfnAlert("리스크번호를 입력하세요.", "fnVaidateCallback");
        	}

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
        		//this.gfnGridAfterSelect(this.dxGridSub);
        		// 확장버튼 활성화 or 비활성화 처리
        		this.fnBtnEnable();

        		if(this.dsListAplines.rowcount > 0) {
        			this.dxGridAppr.setRealRowSize(0, 22);
        			this.dxGridAppr.setRealRowSize(1, 34);
        			this.dxGridAppr.setRealRowSize(2, 22);
        		}
        	}
        	else if (svcID == "apprsel") {
        		// 링크 통해서 화면이 오픈되었을 경우에 this.fnExec() 실행한다
        		if(this.dsSearch.getColumn(0, "YN_LINK") != "N"){
        			if(this.dsListAppr.rowcount < 1){
        				this.fnApprselnullCallback = function() {
        					//this.getParentContext().close(true);
        					 window.close();
        					return;
        				}
        				this.gfnAlert("품의서를 열수없습니다.", "fnApprselnullCallback");
        			}

        			if(this.dsListAppr.getColumn(0,"ST_APPR") == "05" || this.dsListAppr.getColumn(0, "ST_APPR") == "09"){
        				this.fnApprselCallback = function() {
        					//this.getParentContext().close(true);
        					 window.close();
        				}
        				this.gfnAlert("기안자가 결재를 취소하였습니다.", "fnApprselCallback");
        			}else if(this.dsListAppr.getColumn(0,"ST_APPR") == "04"){
        				// 결재정보 팝업을 띄운다
        				this.fnAprvInf();

        				this.btnAprvSang.set_enable(false);	// 재상신 버튼을 비활성화시킨다

        				this.FormBtns.Select.click();
        			}else if(this.dsListAppr.getColumn(0,"ST_APPR") == "01" || this.dsListAppr.getColumn(0,"ST_APPR") == "02"){
        				// 결재정보 팝업을 띄운다
        				this.fnAprvInf();

        				this.FormBtns.Select.click();
        			}else{
        				this.fnExecAppr();
        			}
        		}else{
        			if(this.dsListAppr.getColumn(0,"ST_APPR") == "01" || this.dsListAppr.getColumn(0,"ST_APPR") == "02" || this.dsListAppr.getColumn(0,"ST_APPR") == "04"){
        				// 결재정보 팝업을 띄운다
        				this.fnAprvInf();

        				if((this.dsListAppr.getColumn(0,"ST_APPR") == "01" || this.dsListAppr.getColumn(0,"ST_APPR") == "02") && this.dsListAppr.getColumn(0,"YN_APP") == "Y"){
        					this.fnExecAppr();
        				}else{
        					this.FormBtns.Select.click();
        				}
        			}else{
        				this.FormBtns.Select.click();
        			}
        		}
        	}
        	else if(svcID == "execAppr") {
        		if (errorCode == 0) {
        			// 화면 로드시에 링크 통해서 화면이 오픈되었을경우에만 처리후에 조회한다
        			this.FormBtns.Select.click();
        		} else {
        			this.gfnAlert(errorMsg);
        		}
        	}
        }

        // 확장버튼 활성화 or 비활성화처리
        this.fnBtnEnable = function() {
        	if(this.gfnIsNull(this.dsListAppr.getColumn(0, "ID_AP"))){	// 결재번호
        		this.btnAprvCmpl.set_enable(false);		// 승인(03)
        		this.btnAprvCnc.set_enable(false);		// 반려(04)
        		this.btnApCnl.set_enable(false);		// 결제취소(05)
        		this.btnAprvInf.set_enable(false);		// 결제정보
        		this.btnAprvSang.set_enable(true);		// 결제상신

        	}else{
        		if(this.dsListAppr.getColumn(0, "ST_APPR") == "01"){	// 결재상태
        			if(this.dsListAppr.getColumn(0, "YN_USER") == "Y"){
        				if(this.dsListAppr.getColumn(0, "YN_APP") == "Y"){
        					this.btnAprvCmpl.set_enable(true);
        				}else{
        					this.btnAprvCmpl.set_enable(false);
        				}

        				this.btnAprvCnc.set_enable(false);
        				this.btnApCnl.set_enable(true);
        			}else{
        				if(this.dsListAppr.getColumn(0, "YN_APP") == "Y"){
        					this.btnAprvCmpl.set_enable(true);
        					this.btnAprvCnc.set_enable(true);
        				}else{
        					this.btnAprvCmpl.set_enable(false);
        					this.btnAprvCnc.set_enable(false);
        				}

        				this.btnApCnl.set_enable(false);
        			}

        			this.btnAprvInf.set_enable(true);
        			this.btnAprvSang.set_enable(false);
        		}else if(this.dsListAppr.getColumn(0, "ST_APPR") == "02"){
        			if(this.dsListAppr.getColumn(0, "YN_USER") == "Y"){
        				if(this.dsListAppr.getColumn(0, "YN_APP") == "Y"){
        					this.btnAprvCmpl.set_enable(true);
        				}else{
        					this.btnAprvCmpl.set_enable(false);
        				}

        				this.btnAprvCnc.set_enable(false);
        				this.btnApCnl.set_enable(false);
        			}else{
        				if(this.dsListAppr.getColumn(0, "YN_APP") == "Y"){
        					this.btnAprvCmpl.set_enable(true);
        					this.btnAprvCnc.set_enable(true);
        				}else{
        					if(this.dsListAppr.getColumn(0, "YN_APP_LINE") == "Y"){
        						this.btnAprvCnc.set_enable(true);
        					}else{
        						this.btnAprvCnc.set_enable(false);
        					}

        					this.btnAprvCmpl.set_enable(false);
        				}

        				this.btnApCnl.set_enable(false);
        			}

        			this.btnAprvInf.set_enable(true);
        			this.btnAprvSang.set_enable(false);
        		}else if(this.dsListAppr.getColumn(0, "ST_APPR") == "03"){
        			this.btnAprvCmpl.set_enable(false);
        			this.btnAprvCnc.set_enable(false);
        			this.btnApCnl.set_enable(false);
        			this.btnAprvInf.set_enable(true);
        			this.btnAprvSang.set_enable(false);
        		}else if(this.dsListAppr.getColumn(0, "ST_APPR") == "04"){
        			this.btnAprvCmpl.set_enable(false);
        			this.btnAprvCnc.set_enable(false);
        			this.btnApCnl.set_enable(false);
        			this.btnAprvInf.set_enable(true);
        			this.btnAprvSang.set_enable(true);
        			this.btnAprvSang.set_text("재상신");	// 반려 상태일때는 결재상신 버튼이 재상신으로 셋팅한다
        		}else if(this.dsListAppr.getColumn(0, "ST_APPR") == "05"){
        			this.btnAprvCmpl.set_enable(false);
        			this.btnAprvCnc.set_enable(false);
        			this.btnApCnl.set_enable(false);
        			this.btnAprvInf.set_enable(false);
        			this.btnAprvSang.set_enable(true);
        		}else if(this.dsListAppr.getColumn(0, "ST_APPR") == "09"){
        			this.btnAprvCmpl.set_enable(false);
        			this.btnAprvCnc.set_enable(false);
        			this.btnApCnl.set_enable(false);
        			this.btnAprvInf.set_enable(true);
        			this.btnAprvSang.set_enable(true);
        		}
        	}
        }

        // 결재상태값 조회
        this.fnApprSel = function() {
        	this.dsSelectAppr.clearData();
        	this.dsSelectAppr.addRow();

        	this.dsSelectAppr.setColumn(0, "ID_AP", this.dsSearch.getColumn(0, "ID_AP"));
        	this.dsSelectAppr.setColumn(0, "ID_USER", this.AuthClient.ID_USER);

        	var strSvcId    = "apprsel";
        	var strSvcType  = "grid";
        	var inProc		= "_dsProc";
        	var inData      = "appr_select=dsSelectAppr";
        	var outData     = "dsListAppr=appr_select0";
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

        /************************************************************************
         * 코드파인드 이벤트
         ************************************************************************/
        this.fnBeforeUserDataSetParam = function(id, dsUserParam, nrow) {
        	if (id == "ccfNO_RISK") {
        		dsUserParam.setColumn(nrow, "CD_SITE", this.dsSearch.getColumn(0, "CD_SITE"));	// 현장코드
        	}

        	return true;
        }

        this.ccfNO_RISK_AfterCDTextChanged = function(id, codeFindData) {
        	// 코드,명칭 외 추가 컬럼 처리
        	var arr = codeFindData;

        	if(!this.gfnIsNull(arr))
        		this.dsSearch.setColumn(0, "NO_SILHENG", arr[0]["NO_SILHENG"]);
        	else
        		this.dsSearch.setColumn(0, "NO_SILHENG", "");

        	//this.fnSearchInit();
        }
        /************************************************************************
         * 그리드 이벤트
         ************************************************************************/

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
        		this.divData.form.divSplitter.set_top(e.clienty);
        		this.divData.form.resetScroll();
        	}
        };

        this.divData_divSplitter_ondrag = function(obj,e)
        {
        	e.set_userdata("splitter");
        	return true;
        };


        this.divData_divSplitter_ondrag = function(obj,e)
        {
        	e.set_userdata("splitter");
        	return true;
        };

        this.divSearch_cchkYN_Pre_onchanged = function(obj,e)
        {
        	var QN_DOKUB_PRE_Index = this.dxGridSub.getBindCellIndex("body", "QN_DOKUB_PRE");
        	var UP_DOKUB_PRE_Index = this.dxGridSub.getBindCellIndex("body", "UP_DOKUB_PRE");
        	var AM_DOKUB_PRE_Index = this.dxGridSub.getBindCellIndex("body", "AM_DOKUB_PRE");
        	var QN_SILHENG_PRE_Index = this.dxGridSub.getBindCellIndex("body", "QN_SILHENG_PRE");
        	var UP_SILHENG_PRE_Index = this.dxGridSub.getBindCellIndex("body", "UP_SILHENG_PRE");
        	var AM_SILHENG_PRE_Index = this.dxGridSub.getBindCellIndex("body", "AM_SILHENG_PRE");

        	if(obj.isChecked()) {
        		if(this.divSearch.form.cchkYN_DOKUB.isChecked())
        		{
        			this.dxGridSub.setRealColSize("body", QN_DOKUB_PRE_Index, 70);
        			this.dxGridSub.setRealColSize("body", UP_DOKUB_PRE_Index, 80);
        			this.dxGridSub.setRealColSize("body", AM_DOKUB_PRE_Index, 100);
        		}
        		this.dxGridSub.setRealColSize("body", QN_SILHENG_PRE_Index, 70);
        		this.dxGridSub.setRealColSize("body", UP_SILHENG_PRE_Index, 80);
        		this.dxGridSub.setRealColSize("body", AM_SILHENG_PRE_Index, 100);
        	}
        	else
        	{
        		this.dxGridSub.setRealColSize("body", QN_DOKUB_PRE_Index, 0);
        		this.dxGridSub.setRealColSize("body", UP_DOKUB_PRE_Index, 0);
        		this.dxGridSub.setRealColSize("body", AM_DOKUB_PRE_Index, 0);
        		this.dxGridSub.setRealColSize("body", QN_SILHENG_PRE_Index, 0);
        		this.dxGridSub.setRealColSize("body", UP_SILHENG_PRE_Index, 0);
        		this.dxGridSub.setRealColSize("body", AM_SILHENG_PRE_Index, 0);
        	}
        };


        // 도급 체크박스
        this.divSearch_cchkYN_DOKUB_onchanged = function(obj,e)
        {
        	var QN_DOKUB_PRE_Index = this.dxGridSub.getBindCellIndex("body", "QN_DOKUB_PRE");
        	var UP_DOKUB_PRE_Index = this.dxGridSub.getBindCellIndex("body", "UP_DOKUB_PRE");
        	var AM_DOKUB_PRE_Index = this.dxGridSub.getBindCellIndex("body", "AM_DOKUB_PRE");
        	var QN_DOKUB_Index = this.dxGridSub.getBindCellIndex("body", "QN_DOKUB");
        	var UP_DOKUB_Index = this.dxGridSub.getBindCellIndex("body", "UP_DOKUB");
        	var AM_DOKUB_Index = this.dxGridSub.getBindCellIndex("body", "AM_DOKUB");
        	var AM_DOKUB_CHG_Index = this.dxGridSub.getBindCellIndex("body", "AM_DOKUB_CHG");

        	if(obj.isChecked()) {
        		if(this.divSearch.form.cchkYN_Pre.isChecked())
        		{
        			this.dxGridSub.setRealColSize("body", QN_DOKUB_PRE_Index, 70);
        			this.dxGridSub.setRealColSize("body", UP_DOKUB_PRE_Index, 80);
        			this.dxGridSub.setRealColSize("body", AM_DOKUB_PRE_Index, 100);
        		}
        		this.dxGridSub.setRealColSize("body", QN_DOKUB_Index, 70);
        		this.dxGridSub.setRealColSize("body", UP_DOKUB_Index, 80);
        		this.dxGridSub.setRealColSize("body", AM_DOKUB_Index, 100);
        		this.dxGridSub.setRealColSize("body", AM_DOKUB_CHG_Index, 100);
        	}
        	else
        	{
        		this.dxGridSub.setRealColSize("body", QN_DOKUB_PRE_Index, 0);
        		this.dxGridSub.setRealColSize("body", UP_DOKUB_PRE_Index, 0);
        		this.dxGridSub.setRealColSize("body", AM_DOKUB_PRE_Index, 0);
        		this.dxGridSub.setRealColSize("body", QN_DOKUB_Index, 0);
        		this.dxGridSub.setRealColSize("body", UP_DOKUB_Index, 0);
        		this.dxGridSub.setRealColSize("body", AM_DOKUB_Index, 0);
        		this.dxGridSub.setRealColSize("body", AM_DOKUB_CHG_Index, 0);
        	}
        };


         // 승인 버튼 클릭 이벤트
         this.fnAprvCmpl = function(obj,e) {
        	// 선택된 row가 있을 경우에만 팝업을 띄움
        	if (!this.gfnGridIsRow(this.dxGrid)) { return false; }
        	if (!this.fnGrid_FlagCheck()) { this.gfnAlert("저장 후 사용 가능합니다."); return false; }

        	var param = {};

        	param.ID_AP = this.dsSearch.getColumn(0, "ID_AP");
        	param.V_PARAM01 = this.dsSearch.getColumn(0, "CD_SITE");
        	param.V_PARAM02 = this.dsList.getColumn(this.dsList.rowposition, "NO_RISK");
        	param.V_PARAM03 = "";
        	param.V_PARAM04 = "";
        	param.ST_APPR = "03";

        	this.gfnFormOpenNonAuth("DZR", "DZR_AP_NOTE", "fnAprvDialogCallback", param, 580, 310);

        	//var tyWrk = "COMP";
        	//this.fnExec(tyWrk);
        }

         // 반려 버튼 클릭 이벤트
         this.fnAprvCnc = function(obj,e) {
        	// 선택된 row가 있을 경우에만 팝업을 띄움
        	if (!this.gfnGridIsRow(this.dxGrid)) { return false; }
        	if (!this.fnGrid_FlagCheck()) { this.gfnAlert("저장 후 사용 가능합니다."); return false; }

        	var param = {};

        	param.ID_AP = this.dsSearch.getColumn(0, "ID_AP");
        	param.V_PARAM01 = this.dsSearch.getColumn(0, "CD_SITE");
        	param.V_PARAM02 = this.dsList.getColumn(this.dsList.rowposition, "NO_RISK");
        	param.V_PARAM03 = "";
        	param.V_PARAM04 = "";
        	param.ST_APPR = "04";

        	this.gfnFormOpenNonAuth("DZR", "DZR_AP_NOTE", "fnAprvDialogCallback", param, 580, 310);

        	//var tyWrk = "CANC";
        	//this.fnExec(tyWrk);
        }

         // 결재취소 버튼 클릭 이벤트
         this.fnApCnl = function(obj,e) {
        	// 선택된 row가 있을 경우에만 팝업을 띄움
        	if (!this.gfnGridIsRow(this.dxGrid)) { return false; }
        	if (!this.fnGrid_FlagCheck()) { this.gfnAlert("저장 후 사용 가능합니다."); return false; }

        	var param = {};

        	param.ID_AP = this.dsSearch.getColumn(0, "ID_AP");
        	param.V_PARAM01 = this.dsSearch.getColumn(0, "CD_SITE");
        	param.V_PARAM02 = this.dsList.getColumn(this.dsList.rowposition, "NO_RISK");
        	param.V_PARAM03 = "";
        	param.V_PARAM04 = "";
        	param.ST_APPR = "05";

        	this.gfnFormOpenNonAuth("DZR", "DZR_AP_NOTE", "fnAprvDialogCallback", param, 580, 310);

        	//var tyWrk = "CANC";
        	//this.fnExec(tyWrk);
        }


        this.fnAprvDialogCallback = function(svcID, value) {
        	// 리턴값
        	if(value){
        		//this.getParentContext().close(true);
        	   if(this.divTopBtn.isdirect == "true") {
        		  window.close();
        	   } else {
        		  this.getParentContext().close(true);
        	   }
        	}
        };

         // 결재정보 버튼 클릭 이벤트
         this.fnAprvInf = function(obj,e) {
        	// 선택된 row가 있을 경우에만 팝업을 띄움
        	//if (!this.gfnGridIsRow(this.dxGrid)) { return false; }
        	//if (!this.fnGrid_FlagCheck()) { this.gfnAlert("저장 후 사용 가능합니다."); return false; }

        	var param = {};

        	param.ID_AP = this.dsListAppr.getColumn(0, "ID_AP");

        	this.gfnFormOpenNonAuth("DZR", "DZR_APLINES", "", param, 1030, 630);
        }


        // 결제상신
         this.fnAprvSang = function(obj,e) {
        	if (!this.gfnGridIsRow(this.dxGrid)) { return false; }
        	if (!this.fnGrid_FlagCheck()) { this.gfnAlert("저장 후 사용 가능합니다."); return false; }

        	var param = {};

        	param.ID_AP_TYPE = "DW11";
        	param.V_PARAM01 = this.dsSearch.getColumn(0, "CD_SITE");
        	param.V_PARAM02 = this.dsList.getColumn(this.dsList.rowposition, "NO_RISK");
        	param.V_PARAM03 = "";
        	param.V_PARAM04 = "";
        	param.DS_TITLE = this.dsList.getColumn(this.dsList.rowposition, "NM_RISK");

        	this.gfnFormOpenNonAuth("DZR", "DZR_AP_REQUEST", "fnDialogCallback", param, 900, 650);
         }

         this.fnDialogCallback = function(svcID, value) {
        	// 리턴값
        	if(value == true){
        		//this.getParentContext().close(true);
        	   if(this.divTopBtn.isdirect == "true") {
        		  window.close();
        	   } else {
        		  this.getParentContext().close(true);
        	   }
        	}
        };


         // 첨부파일 버튼
         this.fnAttachFile = function(obj,e) {
        	// 선택된 row가 있을 경우에만 팝업을 띄움
        	if (!this.gfnGridIsRow(this.dxGrid)) { return false; }
        	if (!this.fnGrid_FlagCheck()) { this.gfnAlert("저장 후 사용 가능합니다."); return false; }

        	var fileManager = {};
        	fileManager.CD_GUBUN = "DWR1";
        	fileManager.CD_DIR = [this.dsSearch.getColumn(0,"CD_SITE"), this.dsList.getColumn(this.dsList.rowposition, "NO_RISK")];
        	if(this.FormInfo.TY_AUTH == "R") {
        		fileManager.IS_READONLY = true;
        	} else {
        		fileManager.IS_READONLY = false;
        	}

        	if(!this.gfnIsNull(this.dsSearch.getColumn(0, "ID_AP"))) {
        		// 결제상태가 01,02,03일때만 첨부못하고 다운로드만 가능
        		if(this.dsListAppr.getColumn(0, "ST_APPR") == "01" || this.dsListAppr.getColumn(0, "ST_APPR") == "02" || this.dsListAppr.getColumn(0, "ST_APPR") == "03"){
        			fileManager.IS_READONLY = true;
        		}
        	}

        	this.gfnFileManager(fileManager, "fnFileCallback");

        	/*
        	// 결재번호가 null이 아니고 결재상태가 01,02,03,04 이면 다운로드만 가능하고 업로드,삭제,비고저장은 할수 없다
        	//this.fnBtnEnable();
        	if(!this.gfnIsNull(this.dsListAppr.getColumn(0, "ID_AP"))){	// 결재번호
        		if(this.dsListAppr.getColumn(0, "ST_APPR") == "01" || this.dsListAppr.getColumn(0, "ST_APPR") == "02" || this.dsListAppr.getColumn(0, "ST_APPR") == "03" || this.dsListAppr.getColumn(0, "ST_APPR") == "04"){	// 결재상태
        			var arrPopFrame = nexacro.getPopupFrames();
        			//trace(arrPopFrame[arrPopFrame[1].id].form.btnUpload.text);
        			//trace(arrPopFrame.length);// 팝업의 팝업이기때문에 2개 존재하는데 그중에 마지막 팝업이기떄문에(arrPopFrame[1]) 인덱스의 팝업이 파일첨부 팝업이다
        			arrPopFrame[arrPopFrame[1].id].form.btnUpload.set_enable(false);	// 업로드
        			arrPopFrame[arrPopFrame[1].id].form.btnDelete.set_enable(false);	// 삭제
        			arrPopFrame[arrPopFrame[1].id].form.btnEtcSave.set_enable(false);	// 비고저장
        		}
        	}
        	*/
        };

        // 리스크(첨부)관리
         this.fnRiskAtfl = function(obj,e) {
        	if (!this.gfnGridIsRow(this.dxGrid)) { return false; }
        	if (!this.fnGrid_FlagCheck()) { this.gfnAlert("저장 후 사용 가능합니다."); return false; }

        	var param = {};

        	param.CD_SITE = this.dsSearch.getColumn(0, "CD_SITE");
        	param.DS_SITE = this.divSearch.form.ccfCD_SITE.form.DSTextBox.text;
        	param.NO_RISK = this.dsList.getColumn(this.dsList.rowposition, "NO_RISK");
        	param.NM_RISK = this.dsList.getColumn(this.dsList.rowposition, "NM_RISK");
        	param.NO_SILHENG = this.dsList.getColumn(this.dsList.rowposition, "NO_SILHENG");


        	this.gfnFormOpen("DWR", "DWA_RISKATFL", "", param);
         }


         this.fnGrid_FlagCheck = function()
        {
        	var flag = this.gfnGetFlag(this.dsList, this.dsList.rowposition);

        	if(flag == "I")
        		return false;

        	return true;
        }


        /*
         *	결재완료 or 취소 처리
         */
        this.fnExecAppr = function() {

        	this.dsExecAppr.clearData();

        	this.dsExecAppr.addRow();

        	this.dsExecAppr.setColumn(0, "ID_AP", this.dsSearch.getColumn(0, "ID_AP"));
        	this.dsExecAppr.setColumn(0, "V_PARAM01", this.dsSearch.getColumn(0, "CD_SITE"));
        	this.dsExecAppr.setColumn(0, "V_PARAM02", this.dsList.getColumn(this.dsList.rowposition, "NO_RISK"));
        	this.dsExecAppr.setColumn(0, "V_PARAM03", "");
        	this.dsExecAppr.setColumn(0, "V_PARAM04", "");
        	this.dsExecAppr.setColumn(0, "ST_APPR", "02");
        	this.dsExecAppr.setColumn(0, "ID_USER", this.AuthClient.ID_USER);

        	if (this.dsExecAppr.rowcount == 0) return;

        	var strSvcId    = "execAppr";
        	var strSvcType  = "save";
        	var inProc		= "_dsProc";
        	var inData      = "execAppr=dsExecAppr";
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

        this.dsSearch_onvaluechanged = function(obj,e)
        {
        	if(e.oldvalue != e.newvalue) {
        		if(e.columnid == "NO_SILHENG"){	// NO_RISK 코드파인드 값 변경할때 실행번호를 셋팅하기때문에 실행번호 셋팅될때는 그리드 초기화하지않는다.
        			return;
        		}else if(e.columnid == "CD_SITE"){
        			//this.dsSearch.setColumn(0, "NO_RISK", "");
        			//this.divSearch.form.ccfNO_RISK.form.DSTextBox.set_value("");
        			//this.dsSearch.setColumn(0, "NO_SILHENG", "");
        		}

        		this.gfnSetFormStatus(this);	// 폼상태 초기화
        		this.gfnGridClear(this.dxGrid);
        		this.gfnGridClear(this.dxGridSub);
        	}
        };


        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.form_onload,this);
            this.divSearch.form.cchkYN_Pre.addEventHandler("onchanged",this.divSearch_cchkYN_Pre_onchanged,this);
            this.divSearch.form.cchkYN_DOKUB.addEventHandler("onchanged",this.divSearch_cchkYN_DOKUB_onchanged,this);
            this.divData.addEventHandler("ondragmove",this.divData_ondragmove,this);
            this.divData.form.divSplitter.addEventHandler("ondrag",this.divData_divSplitter_ondrag,this);
            this.dsSearch.addEventHandler("onvaluechanged",this.dsSearch_onvaluechanged,this);
        };
        this.loadIncludeScript("DWA_RISK_APPROVAL_SITE.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
