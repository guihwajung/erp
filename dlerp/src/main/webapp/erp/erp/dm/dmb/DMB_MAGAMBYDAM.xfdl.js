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
            this.set_titletext("현장마감작업");
            if (Form == this.constructor)
            {
                this._setFormPosition(1280,720);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("dsList", this);
            obj._setContents("");
            this.addChild(obj.name, obj);


            obj = new Dataset("_dsProc", this);
            obj._setContents("<ColumnInfo><Column id=\"TARGET\" type=\"STRING\" size=\"256\"/><Column id=\"SP\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"TARGET\">select</Col><Col id=\"SP\">DmbPR_MagamByDam_Select</Col></Row><Row><Col id=\"TARGET\">execmg</Col><Col id=\"SP\">DMBPR_PROCMAGAM</Col></Row><Row><Col id=\"TARGET\">execmgcl</Col><Col id=\"SP\">Dmbpr_ProcMagamCancel</Col></Row><Row><Col id=\"TARGET\">appChk</Col><Col id=\"SP\">DMBPR_APP_DM10_CHK</Col></Row><Row><Col id=\"TARGET\">appSelect</Col><Col id=\"SP\">DMBPR_APP_DM10_SELECT</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsSearch", this);
            obj._setContents("<ColumnInfo><Column id=\"CD_SITE\" type=\"STRING\" size=\"256\"/><Column id=\"YM_ACT\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"CD_SITE\"/><Col id=\"YM_ACT\"/></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsAppList", this);
            obj._setContents("<ColumnInfo><Column id=\"CD_SITE\" type=\"STRING\" size=\"256\"/><Column id=\"YM_ACT\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"CD_SITE\"/><Col id=\"YM_ACT\"/></Row></Rows>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Div("divSearch","0.0","10.0",null,"46.0","0",null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_cssclass("div_SEARCH_Bg");
            obj.set_formscrolltype("none");
            this.addChild(obj.name, obj);

            obj = new Div("ctclYM_ACT","0.0","10.0","80","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("2");
            obj.getSetter("dateformat").set("yyyy-mm");
            obj.getSetter("editformat").set("yyyymm");
            obj.set_url("cmm::cmmCalMM.xfdl");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("staCD_SITE","ctclYM_ACT:0.0","10.0","118.0","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("3");
            obj.set_text("현장코드");
            obj.set_cssclass("sta_WF_SchLabelE");
            this.divSearch.addChild(obj.name, obj);

            obj = new Div("ccfCD_SITE","staCD_SITE:0.0","10.0","250","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.getSetter("CodeFindName").set("DZX_CFSITE");
            obj.getSetter("CDTextWidth").set("80");
            obj.set_taborder("0");
            obj.set_url("cmm::cmmCodeFind.xfdl");
            obj.set_text("");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("staYM_WORK","ccfCD_SITE:0.0","10.0","118.0","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("1");
            obj.set_text("기준년월");
            obj.set_cssclass("sta_WF_SchLabelE");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("staMsg","ccfCD_SITE:0.0","10.0","118.0","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("3");
            obj.set_text("(마감완료)");
            obj.set_font("normal 700 12px/normal \"Dotum\"");
            obj.set_color("red");
            obj.set_visible("false");
            obj.set_cssclass("sta_WF_SchLabel");
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
            obj = new BindItem("item0","divSearch.form.ccfCD_SITE.form.CDTextBox","value","dsSearch","CD_SITE");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item1","divSearch.form.ctclYM_ACT.form.TextBox","value","dsSearch","YM_ACT");
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
        this.addIncludeScript("DMB_MAGAMBYDAM.xfdl",'lib::libCommon.xjs');
        this.registerScript("DMB_MAGAMBYDAM.xfdl", function() {
        this.executeIncludeScript('lib::libCommon.xjs'); /*include 'lib::libCommon.xjs'*/
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

        	this.dsSearch.setColumn(0, "YM_ACT", this.gfnGetDate().substr(0,6));

        };

        /************************************************************************
         * 버튼 설정 : 화면(Tab) 전환시 마다 호출
         * 서브버튼 사용 및 공통버튼 강제 제어시 여기서 처리
         ************************************************************************/
        this.fnSetButton = function() {
        }

        /************************************************************************
         * 확장 버튼 : 화면별 버튼 설정 ID, function 연결 (화면버튼관리)
         ************************************************************************/
        this.fnSetExtendButton = function() {
        	this.btnMagam = this.gfnFormButtonAdd("btnMagam", "fnMagam");
        	this.btnMagamCancel = this.gfnFormButtonAdd("btnMagamCancel", "fnMagamCancel");
            this.btn7 = this.gfnFormButtonAdd("btnSlip", "fnSlipSearch"); //전표조회
        	this.btnMagamPrint = this.gfnFormButtonAdd("btnMagamPrint", "fnMagamPrint");


        	//this.btnApp = this.gfnFormButtonAdd("btnApp", "fnAPP");
        };

        /************************************************************************
         * 변수 선언
         ************************************************************************/
        this.fnSetVariable = function() {
        	this.ccfCD_SITE = this.divSearch.form.ccfCD_SITE;

        	this.dxGrid = this.divData.form.objGrid;
        };

        /************************************************************************
         * 이벤트 설정
         ************************************************************************/
        this.fnSetEvent = function() {
        	// 그리드 초기화
        	this.gfnGridInit(this.dxGrid, this.dsList, "DM", "DMB_MAGAMBYDAM");

        	// row 수정가능 여부
        	//this.dxGrid.EnterCell = "fnGrid_EnterCell";

        	// 셀 변경 후 이벤트
        	//this.dxGrid.AfterEdit = "fnGrid_AfterEdit";

        	// 그리드 코드파인드 값 변경
        	//this.dxGrid.AfterCDTextChanged = "fnGrid_AfterCDTextChanged";
        	//this.gfnGridColumnColor(this.dxGrid, "YN_MAGAM","Red", "YN_MAGAM=='Y'");
        };

        /************************************************************************
         * 파라미터 설정
         ************************************************************************/
        this.fnSetParameter = function() {
        	this.dsSelect = new Dataset();
        	this.dsSelect.addColumn("YM_ACT", "string");
        	this.dsSelect.addColumn("CD_DAM", "string");
        	this.dsSelect.addColumn("LOGIN_DEPT", "string");
        	this.dsSelect.addColumn("TY_SELECT", "string");
        	this.dsSelect.addColumn("CD_SITE", "string");
        	this.dsSelect.addColumn("CD_CORP", "string");

        	this.dsExecmg = new Dataset();
        	this.dsExecmg.addColumn("CD_SITE", "string");
        	this.dsExecmg.addColumn("YM_CLOSE", "string");
        	this.dsExecmg.addColumn("ID_USER", "string");

        	this.dsExecmgcl = new Dataset();
        	this.dsExecmgcl.addColumn("CD_SITE", "string");
        	this.dsExecmgcl.addColumn("YM_CLOSE", "string");
        	this.dsExecmgcl.addColumn("ID_USER", "string");

        	this.dsAppParam = new Dataset();
        	this.dsAppParam.addColumn("CD_SITE", "string");
        	this.dsAppParam.addColumn("YM_ACT", "string");
        	this.dsAppParam.addColumn("RM_BIGO", "string");
        	this.dsAppParam.addColumn("DOC_APP", "string");
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

        	this.dsSelect.setColumn(0, "YM_ACT", this.dsSearch.getColumn(0, "YM_ACT").substr(0,6));
        	this.dsSelect.setColumn(0, "CD_DAM", "");
        	this.dsSelect.setColumn(0, "LOGIN_DEPT", "");
        	this.dsSelect.setColumn(0, "TY_SELECT", "");
        	this.dsSelect.setColumn(0, "CD_SITE", this.dsSearch.getColumn(0, "CD_SITE"));
        	this.dsSelect.setColumn(0, "CD_CORP", this.AuthClient.CD_CORP);

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
        						strArg, 		// 입력값으로 보낼 arguments, strFormData="20120607"
        						callBackFnc);   // 통신방법 정의 [생략가능]

        }

        /*
         *	입력 버튼
         */
        this.fnAdd = function() {
        	var nrow = this.gfnGridAdd(this.dxGrid); // top (default), bottom, current

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
         * Validate
         ************************************************************************/
        /*
         *	조회 Validate
         */
        this.fnSelectValidate = function() {
        	var validate = true;

        	if(this.gfnIsNull(this.dsSearch.getColumn(0,"YM_ACT"))){
        		validate = false;

        		this.fnVaidateCallback = function() {
        			this.divSearch.form.ctclYM_ACT.form.TextBox.setFocus();
        		}
        		this.gfnAlert("기준년월을 입력하세요.", "fnVaidateCallback");
        	}

        	if(this.gfnIsNull(this.dsSearch.getColumn(0,"CD_SITE"))){
        		validate = false;

        		this.fnVaidateCallback = function() {
        			this.divSearch.form.ccfCD_SITE.form.TextBox.setFocus();
        		}
        		this.gfnAlert("현장코드를 입력하세요.", "fnVaidateCallback");
        	}

        	return validate;
        };

        /************************************************************************
         * 콜백 이벤트
         ************************************************************************/
        /*
         *	콜백 처리
         */
        this.fnCallback = function(svcID, errorCode, errorMsg, strArg)
        {
        	if(errorCode != 0)
        	{
        		this.gfnAlert(errorMsg);

        		return;
        	}

        	if (svcID == "select") {
        		this.gfnGridAfterSelect(this.dxGrid);

        		if(this.dsList.rowcount > 0)
        		{
        			if(!this.gfnIsNull(this.dsSearch.getColumn(0, "CD_SITE")) && this.dsList.getColumn(0, "YN_MAGAM") == "Y")
        			{
        				this.divSearch.form.staMsg.set_visible(true);
        			}
        			else
        			{
        				this.divSearch.form.staMsg.set_visible(false);
        			}
        			this.divSearch.form.resetScroll();
        		}

        	}
        	else if(svcID == "execute") {
        		var json = this.gfnArgsToJson(strArg);
        		strArg = json.gubun;

        		var msg = "";
        		switch(strArg)
        		{
        			case "MAGAM" :
        				msg += "마감 ";
        				break;
        			case "MAGAMCL" :
        				msg += "마감취소 ";
        				break;
        		}

        		msg += "정상 처리되었습니다.";

        		this.gfnAlert(msg);
        		this.FormBtns.Select.click();
        	}
        	else if(svcID == "appChk")
        	{
        		if (errorCode == 0)
        		{
        			this.fnAppBigo();
        			//this.fnAppSelect();
        		}
        		else
        		{
        			this.gfnAlert(errorMsg);
        		}
        	}else if(svcID == "appSelect") {
        		if (errorCode == 0)
        		{
        			this.fnAppOpen();
        		}
        		else
        		{
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

        /************************************************************************
         * 기타 이벤트
         ************************************************************************/
        this.dsSearch_onvaluechanged = function(obj,e)
        {
        	if(e.oldvalue != e.newvalue) {
        		this.gfnSetFormStatus(this);	// 폼상태 초기화
        		this.gfnGridClear(this.dxGrid);
        	}
        };

        // 자재수불 버튼 클릭 이벤트
        this.fnMagamPrint = function(obj,e) {
        	if(this.dsList.rowcount < 1) { return; }

        	var rows = this.dxGrid.getSelectedDatasetRows();
        	if(rows < 0) { this.gfnAlert("출력할 데이터를 선택하세요."); return; }

        	var param = {};
        	var sitecd = this.dsSearch.getColumn(0, "CD_SITE");
        	var sitenm = this.ccfCD_SITE.form.DSTextBox.value ;
        	var workym = this.dsSearch.getColumn(0, "YM_ACT");

        	var strReportName = "/dm/npff0110.ozr";

        	param.REPORT_NAME = strReportName;
        	param.JSONPARAM = "{\"CD_SITE\":\""+ sitecd
        				 + "\", \"DS_SITE\":\"" + sitenm
        				 + "\", \"YM_CLOSE\":\"" + workym
        				 + "\"}";

        	console.log(param);
        	this.gfnFormOpenNonAuth("DZU", "DZU_OZ", "", param, 960, 830);
        }


        // 마감 버튼 클릭 이벤트
        this.fnMagam = function(obj,e) {
        	var nRow = this.dsList.rowposition;
        	var msg = "현장코드 : [" + this.dsList.getColumn(nRow, "CD_SITE") + "] " + this.dsList.getColumn(nRow, "DS_DEPT")
        			+ "\n마감년월 : [" + this.dsSearch.getColumn(0, "YM_ACT").substr(0,6) + "]"
        			+ "\n\n마감 하시겠습니까?";

        	this.gfnConfirm(msg, "fnApp_callback");
        }

        // 마감 버튼 클릭 이벤트
        // this.fnMagam = function(obj:nexacro.Button,e:nexacro.ClickEventInfo) {
        // 	var nRow = this.dsList.rowposition;
        // 	var msg = "현장코드 : [" + this.dsList.getColumn(nRow, "CD_SITE") + "] " + this.dsList.getColumn(nRow, "DS_DEPT")
        // 			+ "\n마감년월 : [" + this.dsSearch.getColumn(0, "YM_ACT").substr(0,6) + "]"
        // 			+ "\n\n마감 하시겠습니까?";
        //
        // 	this.gfnConfirm(msg, "fnMagam_callback", "MAGAM");
        // }

        // 마감취소 버튼 클릭 이벤트
        this.fnMagamCancel = function(obj,e) {
        	var nRow = this.dsList.rowposition;
        	var msg = "현장코드 : [" + this.dsList.getColumn(nRow, "CD_SITE") + "] " + this.dsList.getColumn(nRow, "DS_DEPT")
        			+ "\n마감년월 : [" + this.dsSearch.getColumn(0, "YM_ACT").substr(0,6) + "]"
        			+ "\n\n마감취소 하시겠습니까?";

        	this.gfnConfirm(msg, "fnMagam_callback", "MAGAMCL");
        }

        // 마감 or 취소 처리
        this.fnMagam_callback = function(strId, val) {
        	if(val == true)
        	{
        		var dsGubun = "";
        		if(strId == "MAGAM"){
        			this.dsExecmg.clearData();
        			var nrow = this.dsExecmg.addRow();

        			this.dsExecmg.setColumn(nrow, "CD_SITE", this.dsList.getColumn(this.dsList.rowposition, "CD_SITE"));
        			this.dsExecmg.setColumn(nrow, "YM_CLOSE", this.dsSearch.getColumn(0, "YM_ACT").substr(0,6));
        			this.dsExecmg.setColumn(nrow, "ID_USER", this.AuthClient.ID_USER);

        			if (this.dsExecmg.rowcount == 0) return;

        			dsGubun = "execmg=dsExecmg";
        		}else{
        			this.dsExecmgcl.clearData();
        			var nrow = this.dsExecmgcl.addRow();

        			this.dsExecmgcl.setColumn(nrow, "CD_SITE", this.dsList.getColumn(this.dsList.rowposition, "CD_SITE"));
        			this.dsExecmgcl.setColumn(nrow, "YM_CLOSE", this.dsSearch.getColumn(0, "YM_ACT").substr(0,6));
        			this.dsExecmgcl.setColumn(nrow, "ID_USER", this.AuthClient.ID_USER);

        			if (this.dsExecmgcl.rowcount == 0) return;

        			dsGubun = "execmgcl=dsExecmgcl";
        		}

        		var strSvcId    = "execute";
        		var strSvcType  = "save";
        		var inProc		= "_dsProc";
        		var inData      = dsGubun;
        		var outData     = "";
        		var strArg      = "gubun=" + strId;
        		var callBackFnc = "fnCallback";

        		this.gfnTransaction( strSvcId , 	// transaction을 구분하기 위한 svc id값
        							strSvcType , 	// transaction을 요청할 구분
        							inProc,			// Procedure 정보 Dataset 이름
        							inData , 		// 입력값으로 보낼 dataset id , a=b형태로 실제이름과 입력이름을 매칭
        							outData , 		// 처리결과값으로 받을 dataset id, a=b형태로 실제이름과 입력이름을 매칭
        							strArg, 		// 입력값으로 보낼 arguments, strFormData="20120607"
        							callBackFnc); 	// 통신방법 정의 [생략가능]
        	}
        }

        // 전표조회 버튼 클릭
        this.fnSlipSearch = function(obj, e) {

            if (this.dsList.rowcount > 0) {
                if (this.gfnIsNull(this.dsList.getColumn(0, "CD_TRADE"))) {

                    this.gfnAlert("발행된 전표가 없습니다.");
                } else {

                    this.gfnConfirm("전표를 조회하시겠습니까?", "fnSlipSearch_callback");
                }
            }
        }

        //전표조회 콜백
        this.fnSlipSearch_callback = function(strId, val) {
         if (val == true) {
                var param = {};
                //
                param.CD_TRADE = this.dsList.getColumn(0, "CD_TRADE");

                //전표발행시 팝업창 띄움
                this.gfnFormOpen("DHA", "DHA_ISSUESLIP", "fnDialogCallback", param);
            }
        };

        // 비고
        this.fnAppBigo = function() {
        	var param = {};
        	param.CD_SITE = this.dsList.getColumn(this.dsList.rowposition, "CD_SITE");
        	param.DS_SITE = this.dsList.getColumn(this.dsList.rowposition, "DS_DEPT");
        	param.YM_ACT = this.dsSearch.getColumn(0, "YM_ACT");

        	this.gfnFormOpen("DMB", "DMB_MAGAMBYDAM_BIGO", "fnAppSelect", param);
        }

        this.fnApp_callback = function(strId, val)
        {
        	if(val == true)
        	{
        		var json;
        		json = JSON.parse(val);
        		this.dsAppParam.clearData();
        		var nrow = this.dsAppParam.addRow();

        		this.dsAppParam.setColumn(nrow, "CD_SITE", this.dsList.getColumn(this.dsList.rowposition, "CD_SITE"));
        		this.dsAppParam.setColumn(nrow, "YM_ACT", this.dsSearch.getColumn(0, "YM_ACT"));
        		this.dsAppParam.setColumn(nrow, "RM_BIGO", json.RM_BIGO);

        		if (this.dsAppParam.rowcount == 0) return;

        		var strSvcId    = "appChk";
        		var strSvcType  = "save";
        		var inProc		= "_dsProc";
        		var inData      = "appChk=dsAppParam";
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
        }

        this.fnAppSelect = function(strID, val)
        {
        	if(val != null)
        	{
        		var json;
        		json = JSON.parse(val);
        		this.dsAppParam.setColumn(0, "RM_BIGO", json.RM_BIGO);

        		var strSvcId    = "appSelect";
        		var strSvcType  = "select";
        		var inProc		= "_dsProc";
        		var inData      = "appSelect=dsAppParam";
        		var outData     = "dsAppList=appSelect0";
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
        }

        this.fnAppOpen = function()
        {
        	if(this.dsAppList.rowcount > 0)
        	{
        		var ds_site = this.divSearch.form.ccfCD_SITE.form.DSTextBox.text;

        		var sApType = "DM10";
        		var sTitle = "[정산마감/자재]"+ ds_site;

        		var sRef01  = this.dsAppParam.getColumn(0, "CD_SITE");
        		var sRef02  = this.dsAppParam.getColumn(0, "YM_ACT");
        		var sRef03  = "";
        		var sRef04  = "";
        		var oParam  = this.gfnDataSetToJson(this.dsAppList, this.dsAppList.rowposition)

        		console.info("================ oParam");
        		console.info(oParam);

        		this.gfnApprove(sApType, sTitle, sRef01, sRef02, sRef03, sRef04, oParam, "fnAprvDialogCallback");
        	}
        }
        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.form_onload,this);
            this.dsSearch.addEventHandler("onvaluechanged",this.dsSearch_onvaluechanged,this);
            this.dsAppList.addEventHandler("onvaluechanged",this.dsSearch_onvaluechanged,this);
        };
        this.loadIncludeScript("DMB_MAGAMBYDAM.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
