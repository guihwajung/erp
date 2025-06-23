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
            obj._setContents("<ColumnInfo><Column id=\"TARGET\" type=\"STRING\" size=\"256\"/><Column id=\"SP\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"TARGET\">select</Col><Col id=\"SP\">DCAPR_JUDGE_NON_REGULAR_SELECT</Col></Row><Row><Col id=\"TARGET\">insert</Col><Col id=\"SP\">DCAPR_JUDGE_NON_REGULAR_INSERT</Col></Row><Row><Col id=\"TARGET\">update</Col><Col id=\"SP\">DCAPR_JUDGE_NON_REGULAR_UPDATE</Col></Row><Row><Col id=\"TARGET\">delete</Col><Col id=\"SP\">DCAPR_JUDGE_NON_REGULAR_DELETE</Col></Row><Row><Col id=\"TARGET\">regist</Col><Col id=\"SP\">DCAPR_JUDGE_NON_REGULAR_OK</Col></Row><Row><Col id=\"TARGET\">registcancel</Col><Col id=\"SP\">DCAPR_JUDGE_NON_REGULAR_CANCEL</Col></Row><Row><Col id=\"TARGET\">autojudge</Col><Col id=\"SP\">DCAPR_JUDGE_NON_REGULAR_AUTO_JUDGE</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsSearch", this);
            obj._setContents("<ColumnInfo><Column id=\"YR_JUDGE\" type=\"STRING\" size=\"256\"/><Column id=\"NO_SEQ\" type=\"STRING\" size=\"256\"/><Column id=\"CD_JUDGEKIND\" type=\"STRING\" size=\"256\"/><Column id=\"CD_VENDOR\" type=\"STRING\" size=\"256\"/><Column id=\"ID_JUDGE\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"TY_SELECT\">미심사</Col></Row></Rows>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Div("divSearch","0.0","10.0",null,"78.0","0",null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_cssclass("div_SEARCH_Bg");
            obj.set_formscrolltype("none");
            this.addChild(obj.name, obj);

            obj = new Static("staCD_SYSTEM","0.0","10.0","92.0","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("1");
            obj.set_text("심사년도");
            obj.set_cssclass("sta_WF_SchLabelE");
            this.divSearch.addChild(obj.name, obj);

            obj = new Div("ctclYR_JUDGE","staCD_SYSTEM:0.0","10.0","60","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.getSetter("readonly").set("true");
            obj.set_taborder("1");
            obj.set_url("cmm::cmmCalYY.xfdl");
            this.divSearch.addChild(obj.name, obj);

            obj = new Div("ccfNO_SEQ","ctclYR_JUDGE:0.0","10.0","63","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.getSetter("readonly").set("true");
            obj.getSetter("CodeFindName").set("DCX_CFJUDGE_MAGAM_N");
            obj.getSetter("CDTextWidth").set("40");
            obj.set_taborder("1");
            obj.set_url("cmm::cmmCodeFind.xfdl");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("staID_JUDGE","0.0","staCD_SYSTEM:10.0","92.0","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("1");
            obj.set_text("평가자");
            obj.set_cssclass("sta_WF_SchLabel");
            this.divSearch.addChild(obj.name, obj);

            obj = new Div("ccfID_JUDGE","staID_JUDGE:0.0","staCD_SYSTEM:10.0","180","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.getSetter("readonly").set("true");
            obj.getSetter("CodeFindName").set("DCX_CFSABUN_02");
            obj.getSetter("CDTextWidth").set("60");
            obj.set_taborder("1");
            obj.set_url("cmm::cmmCodeFind.xfdl");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("staCD_SYSTEM00","ccfID_JUDGE:0.0","staCD_SYSTEM:10.0","92.0","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("1");
            obj.set_text("심사업체");
            obj.set_cssclass("sta_WF_SchLabel");
            this.divSearch.addChild(obj.name, obj);

            obj = new Div("ccfCD_VENDOR","staCD_SYSTEM00:0.0","staCD_SYSTEM:10.0","300","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.getSetter("readonly").set("true");
            obj.getSetter("CodeFindName").set("DCX_CFVendor_06");
            obj.getSetter("CDTextWidth").set("80");
            obj.set_taborder("1");
            obj.set_url("cmm::cmmCodeFind.xfdl");
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
            obj = new BindItem("item0","divSearch.form.ctclYR_JUDGE.form.TextBox","value","dsSearch","YR_JUDGE");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item1","divSearch.form.ccfNO_SEQ.form.CDTextBox","value","dsSearch","NO_SEQ");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item2","divSearch.form.ccfCD_VENDOR.form.CDTextBox","value","dsSearch","CD_VENDOR");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item3","divSearch.form.ccfID_JUDGE.form.CDTextBox","value","dsSearch","ID_JUDGE");
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
        this.registerScript("DCA_JUDGE_NON_REGULAR.xfdl", function() {
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

        	this.dsSearch.setColumn(0, "ID_JUDGE", this.AuthClient.ID_USER);
        	this.ccfID_JUDGE.form.DSTextBox.set_value(this.AuthClient.DS_HNAME);

        	// 타화면에서 오픈시 넘어오는 파라미터 처리
        	if(!this.gfnIsNull(this.getOwnerFrame().YR_JUDGE) && !this.gfnIsNull(this.getOwnerFrame().NO_SEQ) && !this.gfnIsNull(this.getOwnerFrame().CD_VENDOR)) {
        		this.dsSearch.setColumn(0, "YR_JUDGE", this.getOwnerFrame().YR_JUDGE);
        		this.dsSearch.setColumn(0, "NO_SEQ", this.getOwnerFrame().NO_SEQ);
        		this.dsSearch.setColumn(0, "CD_VENDOR", this.getOwnerFrame().CD_VENDOR);
        		this.ccfCD_VENDOR.form.DSTextBox.set_value(this.getOwnerFrame().DS_VENDOR);

        		this.FormBtns.Select.click();
        	}
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
        	this.btnRegist = this.gfnFormButtonAdd("btnRegist", "fnRegist");
        	this.btnRegistCancel = this.gfnFormButtonAdd("btnRegistCancel", "fnRegistCancel");
        	this.btnAutoJudge = this.gfnFormButtonAdd("btnAutoJudge", "fnAutoJudge");
        };

        /************************************************************************
         * 변수 선언
         ************************************************************************/
        this.fnSetVariable = function() {
        	this.ctclYR_JUDGE = this.divSearch.form.ctclYR_JUDGE;
        	this.ccfNO_SEQ = this.divSearch.form.ccfNO_SEQ;
        	this.ccfCD_VENDOR = this.divSearch.form.ccfCD_VENDOR;
        	this.ccfID_JUDGE = this.divSearch.form.ccfID_JUDGE;
        	this.dxGrid = this.divData.form.objGrid;
        };

        /************************************************************************
         * 이벤트 설정
         ************************************************************************/
        this.fnSetEvent = function() {
        	this.ccfNO_SEQ.BeforeUserDataSetParam = "fnBeforeUserDataSetParam";

        	// 그리드 초기화
        	this.gfnGridInit(this.dxGrid, this.dsList, "DC", "DCA_JUDGE_NON_REGULAR");
        	this.dxGrid.BeforeUserDataSetParam = "fnGrid_BeforeUserDataSetParam";
        };

        /************************************************************************
         * 파라미터 설정
         ************************************************************************/
        this.fnSetParameter = function() {
        	this.dsSelect = new Dataset();
        	this.dsSelect.addColumn("YR_JUDGE", "string");
        	this.dsSelect.addColumn("NO_SEQ", "string");
        	this.dsSelect.addColumn("CD_JUDGEKIND", "string");
        	this.dsSelect.addColumn("CD_VENDOR", "string");
        	this.dsSelect.addColumn("ID_JUDGE", "string");

        	this.dsInsert = new Dataset();
        	this.dsInsert.addColumn("YR_JUDGE", "string");
        	this.dsInsert.addColumn("NO_SEQ", "string");
        	this.dsInsert.addColumn("CD_JUDGEKIND", "string");
        	this.dsInsert.addColumn("CD_VENDOR", "string");
        	this.dsInsert.addColumn("DS_VENDOR", "string");
        	this.dsInsert.addColumn("CD_LEVEL", "string");
        	this.dsInsert.addColumn("DS_LEVEL", "string");
        	this.dsInsert.addColumn("CD_CODE", "string");
        	this.dsInsert.addColumn("DS_CODE", "string");
        	this.dsInsert.addColumn("CD_STANDARD", "string");
        	this.dsInsert.addColumn("DS_STANDARD", "string");
        	this.dsInsert.addColumn("AM_JUDGE", "bigdecimal");
        	this.dsInsert.addColumn("RM_BIGO", "string");
        	this.dsInsert.addColumn("ID_JUDGE", "string");
        	this.dsInsert.addColumn("DS_JUDGE", "string");
        	this.dsInsert.addColumn("DT_JUDGE", "string");

        	this.dsUpdate = new Dataset();
        	this.dsUpdate.addColumn("YR_JUDGE", "string");
        	this.dsUpdate.addColumn("NO_SEQ", "string");
        	this.dsUpdate.addColumn("CD_JUDGEKIND", "string");
        	this.dsUpdate.addColumn("CD_VENDOR", "string");
        	this.dsUpdate.addColumn("DS_VENDOR", "string");
        	this.dsUpdate.addColumn("CD_LEVEL", "string");
        	this.dsUpdate.addColumn("DS_LEVEL", "string");
        	this.dsUpdate.addColumn("CD_CODE", "string");
        	this.dsUpdate.addColumn("DS_CODE", "string");
        	this.dsUpdate.addColumn("CD_STANDARD", "string");
        	this.dsUpdate.addColumn("DS_STANDARD", "string");
        	this.dsUpdate.addColumn("AM_JUDGE", "bigdecimal");
        	this.dsUpdate.addColumn("RM_BIGO", "string");
        	this.dsUpdate.addColumn("ID_JUDGE", "string");
        	this.dsUpdate.addColumn("DS_JUDGE", "string");
        	this.dsUpdate.addColumn("DT_JUDGE", "string");

        	this.dsDelete = new Dataset();
        	this.dsDelete.addColumn("YR_JUDGE", "string");
        	this.dsDelete.addColumn("NO_SEQ", "string");
        	this.dsDelete.addColumn("CD_JUDGEKIND", "string");
        	this.dsDelete.addColumn("CD_VENDOR", "string");
        	this.dsDelete.addColumn("CD_LEVEL", "string");
        	this.dsDelete.addColumn("CD_CODE", "string");
        	this.dsDelete.addColumn("ID_JUDGE", "string");

        	this.dsRegist = new Dataset();
        	this.dsRegist.addColumn("YR_JUDGE", "string");
        	this.dsRegist.addColumn("NO_SEQ", "string");
        	this.dsRegist.addColumn("CD_VENDOR", "string");

        	this.dsRegistCancel = new Dataset();
        	this.dsRegistCancel.addColumn("YR_JUDGE", "string");
        	this.dsRegistCancel.addColumn("NO_SEQ", "string");
        	this.dsRegistCancel.addColumn("CD_VENDOR", "string");

        	this.dsAutoJudge = new Dataset();
        	this.dsAutoJudge.addColumn("YR_JUDGE", "string");
        	this.dsAutoJudge.addColumn("NO_SEQ", "string");
        	this.dsAutoJudge.addColumn("CD_VENDOR", "string");
        	this.dsAutoJudge.addColumn("ID_JUDGE", "string");
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

        	this.dsSelect.setColumn(0, "YR_JUDGE", this.dsSearch.getColumn(0, "YR_JUDGE"));
        	this.dsSelect.setColumn(0, "NO_SEQ", this.dsSearch.getColumn(0, "NO_SEQ"));
        	this.dsSelect.setColumn(0, "CD_JUDGEKIND", this.dsSearch.getColumn(0, "CD_JUDGEKIND"));
        	this.dsSelect.setColumn(0, "CD_VENDOR", this.dsSearch.getColumn(0, "CD_VENDOR"));
        	this.dsSelect.setColumn(0, "ID_JUDGE", this.dsSearch.getColumn(0, "ID_JUDGE"));

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
        	var nrow = this.gfnGridAdd(this.dxGrid); // top (default), bottom, current
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
        	// 그리드 필수항목 체크
        	if (!this.gfnGridValidate(this.dxGrid)) return;

        	this.dxGrid.updateToDataset();

        	this.dsInsert.clearData();
        	this.dsUpdate.clearData();
        	this.dsDelete.clearData();

        	var dt_today = this.gfnGetDate();
        	for (var i = 0; i < this.dsList.rowcount; i++) {
        		var flag = this.gfnGetFlag(this.dsList, i);
        		switch(flag) {
        			case "I":
        				var nrow = this.dsInsert.addRow();
        				this.dsInsert.setColumn(nrow, "YR_JUDGE", this.dsList.getColumn(i, "YR_JUDGE"));
        				this.dsInsert.setColumn(nrow, "NO_SEQ", this.dsList.getColumn(i, "NO_SEQ"));
        				this.dsInsert.setColumn(nrow, "CD_JUDGEKIND", this.dsSearch.getColumn(0, "CD_JUDGEKIND"));
        				this.dsInsert.setColumn(nrow, "CD_VENDOR", this.dsList.getColumn(i, "CD_VENDOR"));
        				this.dsInsert.setColumn(nrow, "DS_VENDOR", this.dsList.getColumn(i, "DS_VENDOR"));
        				this.dsInsert.setColumn(nrow, "CD_LEVEL", this.dsList.getColumn(i, "CD_LEVEL"));
        				this.dsInsert.setColumn(nrow, "DS_LEVEL", this.dsList.getColumn(i, "DS_LEVEL"));
        				this.dsInsert.setColumn(nrow, "CD_CODE", this.dsList.getColumn(i, "CD_CODE"));
        				this.dsInsert.setColumn(nrow, "DS_CODE", this.dsList.getColumn(i, "DS_CODE"));
        				this.dsInsert.setColumn(nrow, "CD_STANDARD", this.dsList.getColumn(i, "CD_STANDARD"));
        				this.dsInsert.setColumn(nrow, "DS_STANDARD", this.dsList.getColumn(i, "DS_STANDARD"));
        				this.dsInsert.setColumn(nrow, "AM_JUDGE", this.dsList.getColumn(i, "AM_JUDGE"));
        				this.dsInsert.setColumn(nrow, "RM_BIGO", this.dsList.getColumn(i, "RM_BIGO"));
        				this.dsInsert.setColumn(nrow, "ID_JUDGE", this.AuthClient.ID_USER);
        				this.dsInsert.setColumn(nrow, "DS_JUDGE", this.AuthClient.DS_HNAME);
        				this.dsInsert.setColumn(nrow, "DT_JUDGE", dt_today);
        				break;

        			case "U":
        				var nrow = this.dsUpdate.addRow();
        				this.dsUpdate.setColumn(nrow, "YR_JUDGE", this.dsList.getColumn(i, "YR_JUDGE"));
        				this.dsUpdate.setColumn(nrow, "NO_SEQ", this.dsList.getColumn(i, "NO_SEQ"));
        				this.dsUpdate.setColumn(nrow, "CD_JUDGEKIND", this.dsSearch.getColumn(0, "CD_JUDGEKIND"));
        				this.dsUpdate.setColumn(nrow, "CD_VENDOR", this.dsList.getColumn(i, "CD_VENDOR"));
        				this.dsUpdate.setColumn(nrow, "DS_VENDOR", this.dsList.getColumn(i, "DS_VENDOR"));
        				this.dsUpdate.setColumn(nrow, "CD_LEVEL", this.dsList.getColumn(i, "CD_LEVEL"));
        				this.dsUpdate.setColumn(nrow, "DS_LEVEL", this.dsList.getColumn(i, "DS_LEVEL"));
        				this.dsUpdate.setColumn(nrow, "CD_CODE", this.dsList.getColumn(i, "CD_CODE"));
        				this.dsUpdate.setColumn(nrow, "DS_CODE", this.dsList.getColumn(i, "DS_CODE"));
        				this.dsUpdate.setColumn(nrow, "CD_STANDARD", this.dsList.getColumn(i, "CD_STANDARD"));
        				this.dsUpdate.setColumn(nrow, "DS_STANDARD", this.dsList.getColumn(i, "DS_STANDARD"));
        				this.dsUpdate.setColumn(nrow, "AM_JUDGE", this.dsList.getColumn(i, "AM_JUDGE"));
        				this.dsUpdate.setColumn(nrow, "RM_BIGO", this.dsList.getColumn(i, "RM_BIGO"));
        				this.dsUpdate.setColumn(nrow, "ID_JUDGE", this.AuthClient.ID_USER);
        				this.dsUpdate.setColumn(nrow, "DS_JUDGE", this.AuthClient.DS_HNAME);
        				this.dsUpdate.setColumn(nrow, "DT_JUDGE", dt_today);
        				break;

        			case "D":
        				var nrow = this.dsDelete.addRow();
        				this.dsDelete.setColumn(nrow, "YR_JUDGE", this.dsList.getColumn(i, "YR_JUDGE"));
        				this.dsDelete.setColumn(nrow, "NO_SEQ", this.dsList.getColumn(i, "NO_SEQ"));
        				this.dsDelete.setColumn(nrow, "CD_JUDGEKIND", this.dsSearch.getColumn(0, "CD_JUDGEKIND"));
        				this.dsDelete.setColumn(nrow, "CD_VENDOR", this.dsList.getColumn(i, "CD_VENDOR"));
        				this.dsDelete.setColumn(nrow, "CD_LEVEL", this.dsList.getColumn(i, "CD_LEVEL"));
        				this.dsDelete.setColumn(nrow, "CD_CODE", this.dsList.getColumn(i, "CD_CODE"));
        				this.dsDelete.setColumn(nrow, "ID_JUDGE", this.AuthClient.ID_USER);
        				break;
        		}
        	}

        	if (this.dsInsert.rowcount == 0 && this.dsUpdate.rowcount == 0 && this.dsDelete.rowcount == 0) return;


        	var strSvcId    = "save";
        	var strSvcType  = "save";
        	var inProc		= "_dsProc";
        	var inData      = "insert=dsInsert update=dsUpdate delete=dsDelete";
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
         * Validate
         ************************************************************************/
        /*
         *	조회 Validate
         */
        this.fnSelectValidate = function() {
        	var validate = true;

        	if (this.gfnIsNull(this.dsSearch.getColumn(0,"YR_JUDGE"))) {
        		validate = false;
        		// Alert후 실행할 처리
        		this.fnVaidateCallback = function() {
        			this.ctclYR_JUDGE.form.TextBox.setFocus();
        		}
        		this.gfnAlert("심사년도를 입력하세요.", "fnVaidateCallback");
        	}
        	else if (this.gfnIsNull(this.dsSearch.getColumn(0,"NO_SEQ"))) {
        		validate = false;
        		// Alert후 실행할 처리
        		this.fnVaidateCallback = function() {
        			this.ccfNO_SEQ.form.CDTextBox.setFocus();
        		}
        		this.gfnAlert("회차를 입력하세요.", "fnVaidateCallback");
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
        	if (errorCode != 0) {
        		this.gfnAlert(errorMsg);
        		return;
        	}

        	if (svcID == "select") {
        		this.gfnGridAfterSelect(this.dxGrid);
        	}
        	else if(svcID == "save") {
        		this.FormBtns.Select.click();
        	}
        	else if(svcID == "regist") {
        		this.gfnAlert("완료되었습니다.");
        		this.FormBtns.Select.click();
        	}
        	else if(svcID == "registcancel") {
        		this.gfnAlert("취소되었습니다.");
        		this.FormBtns.Select.click();
        	}
        	else if(svcID == "autojudge") {
        		this.gfnAlert("자동심사 완료되었습니다.");
        		this.FormBtns.Select.click();
        	}
        }

        /************************************************************************
         * 코드파인드 이벤트
         ************************************************************************/
        this.fnBeforeUserDataSetParam = function(id, dsUserParam, nrow) {
        	if (id == "ccfNO_SEQ") {
        		if (this.gfnIsNull(this.dsSearch.getColumn(0, "YR_JUDGE"))) {
        			this.gfnAlert("심사년도를 먼저 입력하세요.");
        			return false;
        		}
        		dsUserParam.setColumn(nrow, "YR_JUDGE", this.dsSearch.getColumn(0, "YR_JUDGE"));
        		dsUserParam.setColumn(nrow, "ID_JUDGE", this.AuthClient.ID_USER);
        	}
        	return true;
        }

        /************************************************************************
         * 그리드 이벤트
         ************************************************************************/
        this.fnGrid_BeforeUserDataSetParam = function(id, dsUserParam, nrow) {
        	// 그리드에서 코드파인드 id는 그리드셋팅의 코드파인드 식별ID
         	if (id == "DCX_CFJUDGESTANDARD") {
         		dsUserParam.setColumn(nrow, "YR_YEAR", this.dsList.getColumn(this.dsList.rowposition, "YR_JUDGE"));
        		dsUserParam.setColumn(nrow, "NO_SEQ", this.dsList.getColumn(this.dsList.rowposition, "NO_SEQ"));
        		dsUserParam.setColumn(nrow, "CD_LEVEL", this.dsList.getColumn(this.dsList.rowposition, "CD_LEVEL"));
        		dsUserParam.setColumn(nrow, "CD_CODE", this.dsList.getColumn(this.dsList.rowposition, "CD_CODE"));
         	}
        	return true;
        }


        /************************************************************************
         * 기타 이벤트
         ************************************************************************/
        this.fnRegist = function() {
        	if (!this.gfnGridIsRow(this.dxGrid)) { return false; }
        	this.gfnConfirm("심사결과를 적용 하시겠습니까?", "fnRegist_CallBack");
        }

        this.fnRegist_CallBack = function(strId, val) {
        	if(val == true) {
        		this.dsRegist.clearData();
        		var nrow = this.dsRegist.addRow();
        		var row = this.dsList.rowposition;
        		this.dsRegist.setColumn(nrow, "YR_JUDGE", this.dsList.getColumn(row, "YR_JUDGE"));
        		this.dsRegist.setColumn(nrow, "NO_SEQ", this.dsList.getColumn(row, "NO_SEQ"));
        		this.dsRegist.setColumn(nrow, "CD_VENDOR", this.dsList.getColumn(row, "CD_VENDOR"));

        		var strSvcId    = "regist";
        		var strSvcType  = "save";
        		var inProc		= "_dsProc";
        		var inData      = "regist=dsRegist";
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

        this.fnRegistCancel = function() {
        	if (!this.gfnGridIsRow(this.dxGrid)) { return false; }
        	this.gfnConfirm("심사결과적용을 취소  하시겠습니까?", "fnRegistCancel_CallBack");
        }

        this.fnRegistCancel_CallBack = function(strId, val) {
        	if(val == true) {
        		this.dsRegistCancel.clearData();
        		var nrow = this.dsRegistCancel.addRow();
        		var row = this.dsList.rowposition;

        		this.dsRegistCancel.setColumn(nrow, "YR_JUDGE", this.dsList.getColumn(row, "YR_JUDGE"));
        		this.dsRegistCancel.setColumn(nrow, "NO_SEQ", this.dsList.getColumn(row, "NO_SEQ"));
        		this.dsRegistCancel.setColumn(nrow, "CD_VENDOR", this.dsList.getColumn(row, "CD_VENDOR"));

        		var strSvcId    = "registcancel";
        		var strSvcType  = "save";
        		var inProc		= "_dsProc";
        		var inData      = "registcancel=dsRegistCancel";
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

        this.fnAutoJudge = function() {
        	if (!this.gfnGridIsRow(this.dxGrid)) { return false; }
        	this.gfnConfirm("자동심사 적용하시겠습니까?", "fnAutoJudge_CallBack");
        }

        this.fnAutoJudge_CallBack = function(strId, val) {
        	if(val == true) {
        		this.dsAutoJudge.clearData();
        		var nrow = this.dsAutoJudge.addRow();
        		var row = this.dsList.rowposition;
        		this.dsAutoJudge.setColumn(nrow, "YR_JUDGE", this.dsList.getColumn(row, "YR_JUDGE"));
        		this.dsAutoJudge.setColumn(nrow, "NO_SEQ", this.dsList.getColumn(row, "NO_SEQ"));
        		this.dsAutoJudge.setColumn(nrow, "CD_VENDOR", this.dsList.getColumn(row, "CD_VENDOR"));
        		this.dsAutoJudge.setColumn(nrow, "ID_JUDGE", this.AuthClient.ID_USER);

        		var strSvcId    = "autojudge";
        		var strSvcType  = "save";
        		var inProc		= "_dsProc";
        		var inData      = "autojudge=dsAutoJudge";
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

        this.dsSearch_onvaluechanged = function(obj,e)
        {
        	if(e.oldvalue != e.newvalue) {
        		this.gfnSetFormStatus(this);	// 폼상태 초기화
        		this.gfnGridClear(this.dxGrid);

        		if(e.columnid == "YR_JUDGE") {
        			this.ccfNO_SEQ.form.fnCodeFindClear();
        		}
        	}
        };


        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.form_onload,this);
            this.dsSearch.addEventHandler("onvaluechanged",this.dsSearch_onvaluechanged,this);
        };
        this.loadIncludeScript("DCA_JUDGE_NON_REGULAR.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
