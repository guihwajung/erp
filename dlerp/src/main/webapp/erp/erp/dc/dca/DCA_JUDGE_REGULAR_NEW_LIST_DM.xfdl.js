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
            this.set_titletext("신규업체심의");
            if (Form == this.constructor)
            {
                this._setFormPosition(1280,720);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("dsList", this);
            obj._setContents("");
            this.addChild(obj.name, obj);


            obj = new Dataset("_dsProc", this);
            obj._setContents("<ColumnInfo><Column id=\"TARGET\" type=\"STRING\" size=\"256\"/><Column id=\"SP\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"TARGET\">select</Col><Col id=\"SP\">DCAPR_JUDGE_REGULAR_NEW_LIST_DM_SELECT</Col></Row><Row><Col id=\"TARGET\">update</Col><Col id=\"SP\">DCAPR_JUDGE_REGULAR_NEW_LIST_DM_UPDATE</Col></Row><Row><Col id=\"TARGET\">create</Col><Col id=\"SP\">DCAPR_JUDGE_REGULAR_NEW_LIST_DM_CREATE</Col></Row><Row><Col id=\"TARGET\">auto</Col><Col id=\"SP\">DCAPR_JUDGE_REGULAR_NEW_LIST_AUTO_JUDGE_DM</Col></Row><Row><Col id=\"SP\">DCAPR_JUDGE_REGULAR_NEW_LIST_DM_TALAK</Col><Col id=\"TARGET\">talak</Col></Row><Row><Col id=\"SP\">DCAPR_JUDGE_REGULAR_NEW_LIST_DM_EXCEPT</Col><Col id=\"TARGET\">except</Col></Row><Row><Col id=\"SP\">DCAPR_JUDGE_REGULAR_NEW_LIST_DM_REGIST</Col><Col id=\"TARGET\">regist</Col></Row><Row><Col id=\"TARGET\">combo</Col><Col id=\"SP\">DZXPR_COMBO_SELECT</Col></Row><Row><Col id=\"TARGET\">combo1</Col><Col id=\"SP\">DMXPR_LICCOST_COMBO_SELECT</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsSearch", this);
            obj._setContents("<ColumnInfo><Column id=\"YR_JUDGE\" type=\"STRING\" size=\"256\"/><Column id=\"TY_JUDGEKIND\" type=\"STRING\" size=\"256\"/><Column id=\"CD_LICCOST\" type=\"STRING\" size=\"256\"/><Column id=\"DS_DAM\" type=\"STRING\" size=\"256\"/><Column id=\"CD_BUMUN\" type=\"STRING\" size=\"256\"/><Column id=\"TY_RESULT\" type=\"STRING\" size=\"256\"/><Column id=\"DS_VENDOR\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"TY_JUDGEKIND\"/><Col id=\"CD_LICCOST\"/><Col id=\"TY_RESULT\"/></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsTY_JUDGEKIND", this);
            obj._setContents("<ColumnInfo><Column id=\"CD_CODE\" type=\"STRING\" size=\"256\"/><Column id=\"DS_CODE\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"CD_CODE\"/><Col id=\"DS_CODE\">전체</Col></Row><Row><Col id=\"CD_CODE\">Y</Col><Col id=\"DS_CODE\">면허필요</Col></Row><Row><Col id=\"CD_CODE\">N</Col><Col id=\"DS_CODE\">면허불필요</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsID_DAM", this);
            obj._setContents("<ColumnInfo><Column id=\"CD_CODE\" type=\"STRING\" size=\"256\"/><Column id=\"DS_CODE\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsCD_BUMUN", this);
            obj._setContents("<ColumnInfo><Column id=\"CD_CODE\" type=\"STRING\" size=\"256\"/><Column id=\"DS_CODE\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsCD_LICCOST", this);
            obj._setContents("<ColumnInfo><Column id=\"CD_CODE\" type=\"STRING\" size=\"256\"/><Column id=\"DS_CODE\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"CD_CODE\"/><Col id=\"DS_CODE\">전체</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsTY_RESULT", this);
            obj._setContents("<ColumnInfo><Column id=\"CD_CODE\" type=\"STRING\" size=\"256\"/><Column id=\"DS_CODE\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"CD_CODE\"/><Col id=\"DS_CODE\">전체</Col></Row><Row><Col id=\"CD_CODE\">미평가</Col><Col id=\"DS_CODE\">미평가</Col></Row><Row><Col id=\"CD_CODE\">평가중</Col><Col id=\"DS_CODE\">평가중</Col></Row><Row><Col id=\"CD_CODE\">탈락</Col><Col id=\"DS_CODE\">탈락</Col></Row><Row><Col id=\"CD_CODE\">평가제외</Col><Col id=\"DS_CODE\">평가제외</Col></Row><Row><Col id=\"CD_CODE\">등록심의</Col><Col id=\"DS_CODE\">등록심의</Col></Row></Rows>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Div("divSearch","0.0","10.0",null,"46.0","0",null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_cssclass("div_SEARCH_Bg");
            obj.set_formscrolltype("none");
            this.addChild(obj.name, obj);

            obj = new Static("staYR_JUDGE","0.0","10.0","105.0","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("0");
            obj.set_text("평가년도");
            obj.set_cssclass("sta_WF_SchLabelE");
            this.divSearch.addChild(obj.name, obj);

            obj = new Div("ctclYR_JUDGE","staYR_JUDGE:0.0","10.0","60","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("1");
            obj.set_url("cmm::cmmCalYY.xfdl");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("staTY_RESULT","ctclYR_JUDGE:0.0","10.0","105.0","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("2");
            obj.set_text("평가결과");
            obj.set_textDecoration("none");
            obj.set_cssclass("sta_WF_SchLabel");
            this.divSearch.addChild(obj.name, obj);

            obj = new Combo("ccboTY_RESULT","staTY_RESULT:0.0","10.0","70","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("3");
            obj.set_innerdataset("dsTY_RESULT");
            obj.set_codecolumn("CD_CODE");
            obj.set_datacolumn("DS_CODE");
            obj.set_index("-1");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("staCD_LICCOST","ccboTY_RESULT:0.0","10.0","105.0","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("4");
            obj.set_text("품목");
            obj.set_textDecoration("none");
            obj.set_textAlign("center");
            obj.set_cssclass("sta_WF_SchLabel");
            this.divSearch.addChild(obj.name, obj);

            obj = new Combo("ccboCD_BUMUN","staCD_LICCOST:0.0","10.0","60","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("5");
            obj.set_innerdataset("dsCD_BUMUN");
            obj.set_codecolumn("CD_CODE");
            obj.set_datacolumn("DS_CODE");
            this.divSearch.addChild(obj.name, obj);

            obj = new Combo("ccboCD_LICCOST","ccboCD_BUMUN:0.0","10.0","120","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("6");
            obj.set_innerdataset("dsCD_LICCOST");
            obj.set_codecolumn("CD_CODE");
            obj.set_datacolumn("DS_CODE");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("staID_DAM","ccboCD_LICCOST:0.0","10.0","105.0","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("7");
            obj.set_text("평가담당자");
            obj.set_textDecoration("none");
            obj.set_textAlign("center");
            obj.set_cssclass("sta_WF_SchLabel");
            this.divSearch.addChild(obj.name, obj);

            obj = new Edit("ctxtID_DAM","staID_DAM:0.0","10.0","144","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("8");
            obj.getSetter("FitToContents").set("true");
            obj.set_value("");
            obj.set_readonly("false");
            obj.set_enable("true");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("staDS_VENDOR","ctxtID_DAM:0.0","10.0","105.0","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("7");
            obj.set_text("회사명");
            obj.set_textDecoration("none");
            obj.set_textAlign("center");
            obj.set_cssclass("sta_WF_SchLabel");
            this.divSearch.addChild(obj.name, obj);

            obj = new Edit("ctxtDS_VENDOR","staDS_VENDOR:0.0","10.0","144","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("8");
            obj.getSetter("FitToContents").set("true");
            obj.set_value("");
            obj.set_readonly("false");
            obj.set_enable("true");
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

            obj = new BindItem("item1","divSearch.form.ccboTY_RESULT","value","dsSearch","TY_RESULT");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item2","divSearch.form.ctxtCD_COSTCLASS","value","dsSearch","CD_LICCOST");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item3","divSearch.form.ccboCD_BUMUN","value","dsSearch","CD_BUMUN");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item4","divSearch.form.ccboCD_LICCOST","value","dsSearch","CD_LICCOST");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item5","divSearch.form.ctxtID_DAM","value","dsSearch","DS_DAM");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item6","divSearch.form.ctxtDS_VENDOR","value","dsSearch","DS_VENDOR");
            this.addChild(obj.name, obj);
            obj.bind();
            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {
            this._addPreloadList("fdl","cmm::cmmCalYY.xfdl");
        };
        
        // User Script
        this.registerScript("DCA_JUDGE_REGULAR_NEW_LIST_DM.xfdl", function() {
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

        	this.dsSearch.setColumn(0, "YR_JUDGE", this.gfnGetDate().substr(0,4));
        };

        /************************************************************************
         * 버튼 설정 : 화면(Tab) 전환시 마다 호출
         * 서브버튼 사용 및 공통버튼 강제 제어시 여기서 처리
         ************************************************************************/
        this.fnSetButton = function() {
        	this.FormBtns.Add.set_enable(false);
        	this.FormBtns.Del.set_enable(false);
        }

        /************************************************************************
         * 확장 버튼 : 화면별 버튼 설정 ID, function 연결 (화면버튼관리)
         ************************************************************************/
        this.fnSetExtendButton = function() {
        	this.btnCreate = this.gfnFormButtonAdd("btnCreate", "fnCreate");
        	this.btnAutoJudge = this.gfnFormButtonAdd("btnAutoJudge", "fnAutoJudge");
        	this.btnTalak = this.gfnFormButtonAdd("btnTalak", "fnTalak");
        	this.btnExcept = this.gfnFormButtonAdd("btnExcept", "fnExcept");
        	this.btnRegist = this.gfnFormButtonAdd("btnRegist", "fnRegist");
        	this.btnDetail = this.gfnFormButtonAdd("btnDetail", "fnDetail");
        };

        /************************************************************************
         * 변수 선언
         ************************************************************************/
        this.fnSetVariable = function() {
        	this.dxGrid = this.divData.form.objGrid;
        };

        /************************************************************************
         * 이벤트 설정
         ************************************************************************/
        this.fnSetEvent = function() {
        	// 그리드 초기화
        	this.gfnGridInit(this.dxGrid, this.dsList, "DC", "DCA_JUDGE_REGULAR_NEW_LIST_DM");
        };

        /************************************************************************
         * 파라미터 설정
         ************************************************************************/
        this.fnSetParameter = function() {
        	this.dsSelect = new Dataset();
        	this.dsSelect.addColumn("YR_JUDGE", "string");
        	this.dsSelect.addColumn("TY_JUDGEKIND", "string");
        	this.dsSelect.addColumn("CD_LICCOST", "string");
        	this.dsSelect.addColumn("ID_DAM", "string");
        	this.dsSelect.addColumn("DS_DAM", "string");
        	this.dsSelect.addColumn("DS_VENDOR", "string");
        	this.dsSelect.addColumn("TY_RESULT", "string");
        	this.dsSelect.addColumn("ID_USER", "string");

        	this.dsUpdate = new Dataset();
        	this.dsUpdate.addColumn("YR_JUDGE", "string");
        	this.dsUpdate.addColumn("CD_VENDOR", "string");
        	this.dsUpdate.addColumn("CD_LICCOST", "string");
        	this.dsUpdate.addColumn("CD_JUDGEKIND", "string");
        	this.dsUpdate.addColumn("ID_DAM", "string");
        	this.dsUpdate.addColumn("RM_ETC_REASON", "string");
        	this.dsUpdate.addColumn("RM_BIGO_RESULT", "string");
        	this.dsUpdate.addColumn("ID_USER", "string");

        	this.dsCreate = new Dataset();
        	this.dsCreate.addColumn("YR_JUDGE", "string");
        	this.dsCreate.addColumn("ID_USER", "string");

        	this.dsTalak = new Dataset();
        	this.dsTalak.addColumn("YR_JUDGE", "string");
        	this.dsTalak.addColumn("CD_VENDOR", "string");
        	this.dsTalak.addColumn("CD_JUDGEKIND", "string");
        	this.dsTalak.addColumn("CD_LICCOST", "string");
        	this.dsTalak.addColumn("RM_ETC_REASON", "string");
        	this.dsTalak.addColumn("ID_USER", "string");

        	this.dsExcept = new Dataset();
        	this.dsExcept.addColumn("YR_JUDGE", "string");
        	this.dsExcept.addColumn("CD_VENDOR", "string");
        	this.dsExcept.addColumn("CD_JUDGEKIND", "string");
        	this.dsExcept.addColumn("CD_LICCOST", "string");
        	this.dsExcept.addColumn("RM_ETC_REASON", "string");
        	this.dsExcept.addColumn("ID_USER", "string");

        	this.dsRegist = new Dataset();
        	this.dsRegist.addColumn("YR_JUDGE", "string");
        	this.dsRegist.addColumn("CD_VENDOR", "string");
        	this.dsRegist.addColumn("CD_JUDGEKIND", "string");
        	this.dsRegist.addColumn("CD_LICCOST", "string");
        	this.dsRegist.addColumn("ID_USER", "string");
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
        	this.dsSelect.setColumn(0, "TY_JUDGEKIND", this.dsSearch.getColumn(0, "TY_JUDGEKIND"));
        	this.dsSelect.setColumn(0, "CD_LICCOST", this.dsSearch.getColumn(0, "CD_LICCOST"));
        	this.dsSelect.setColumn(0, "ID_DAM", this.dsSearch.getColumn(0, "DS_DAM"));
        	this.dsSelect.setColumn(0, "DS_DAM", this.dsSearch.getColumn(0, "DS_DAM"));
        	this.dsSelect.setColumn(0, "DS_VENDOR", this.dsSearch.getColumn(0, "DS_VENDOR"));
        	this.dsSelect.setColumn(0, "TY_RESULT", this.dsSearch.getColumn(0, "TY_RESULT"));
        	this.dsSelect.setColumn(0, "ID_USER", this.AuthClient.ID_USER);

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
        	this.dsUpdate.clearData();

        	for (var i = 0; i < this.dsList.rowcount; i++) {
        		var flag = this.gfnGetFlag(this.dsList, i);
        		switch(flag) {
        			case "U":
        				var nrow = this.dsUpdate.addRow();
        				this.dsUpdate.setColumn(nrow, "YR_JUDGE", this.dsList.getColumn(i, "YR_JUDGE"));
        				this.dsUpdate.setColumn(nrow, "CD_VENDOR", this.dsList.getColumn(i, "CD_VENDOR"));
        				this.dsUpdate.setColumn(nrow, "CD_LICCOST", this.dsList.getColumn(i, "CD_LICCOST"));
        				this.dsUpdate.setColumn(nrow, "CD_JUDGEKIND", this.dsList.getColumn(i, "CD_JUDGEKIND"));
        				this.dsUpdate.setColumn(nrow, "ID_DAM", this.dsList.getColumn(i, "ID_JUDGE"));
        				this.dsUpdate.setColumn(nrow, "RM_ETC_REASON", this.dsList.getColumn(i, "RM_ETC_REASON"));
        				this.dsUpdate.setColumn(nrow, "RM_BIGO_RESULT", this.dsList.getColumn(i, "RM_BIGO_RESULT"));
        				this.dsUpdate.setColumn(nrow, "ID_USER", this.AuthClient.ID_USER);
        				break;
        		}
        	}

        	if (this.dsUpdate.rowcount == 0) return;

        	var strSvcId    = "save";
        	var strSvcType  = "save";
        	var inProc		= "_dsProc";
        	var inData      = "update=dsUpdate";
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
        			this.divSearch.form.form.ctclYR_JUDGE.form.TextBox.setFocus();
        		}
        		this.gfnAlert("평가년도를 입력하세요.", "fnVaidateCallback");
        	}
        	return validate;
        };

        /************************************************************************
         * 콤보 이벤트 설정
         ************************************************************************/
        this.fnSetCombo = function()
        {
        	this.dsCombo = new Dataset();
        	this.dsCombo.addColumn("CD_SYSTEM", "string");
        	this.dsCombo.addColumn("CD_TYPE", "string");

        	//this.dsCombo.addRow();
        	//this.dsCombo.setColumn(0, "CD_SYSTEM", "DM");
        	//this.dsCombo.setColumn(0, "CD_TYPE", "H07");

        	this.dsCombo.addRow();
        	this.dsCombo.setColumn(0, "CD_SYSTEM", "DM");
        	this.dsCombo.setColumn(0, "CD_TYPE", "H01");

        	var strSvcId    = "combo";
        	var strSvcType  = "select";
        	var inProc		= "_dsProc";
        	var inData      = "combo=dsCombo";
        	//var outData     = "dsID_DAM=combo0 dsCD_BUMUN=combo1";
        	var outData     = "dsCD_BUMUN=combo0";
        	var strArg      = "";
        	var callBackFnc = "fnCallbackCombo";

        	this.gfnTransaction( strSvcId , 	// transaction을 구분하기 위한 svc id값
        						strSvcType , 	// transaction을 요청할 구분
        						inProc,			// Procedure 정보 Dataset 이름
        						inData , 		// 입력값으로 보낼 dataset id , a=b형태로 실제이름과 입력이름을 매칭
        						outData , 		// 처리결과값으로 받을 dataset id, a=b형태로 실제이름과 입력이름을 매칭
        						strArg, 		// 입력값으로 보낼 arguments, strFormData="20120607"
        						callBackFnc); // 통신방법 정의 [생략가능]
        }

        this.fnCallbackCombo = function(svcID, errorCode, errorMsg)
        {
        	if(svcID == "combo") {
        		/*
        		this.dsID_DAM.insertRow(0);
        		this.dsID_DAM.setColumn(0, "CD_CODE", "");
        		this.dsID_DAM.setColumn(0, "DS_CODE", "전체");
        		this.divSearch.form.ccboID_DAM.set_index(0);
        		*/
        		this.dsCD_BUMUN.insertRow(0);
        		this.dsCD_BUMUN.setColumn(0, "CD_CODE", "");
        		this.dsCD_BUMUN.setColumn(0, "DS_CODE", "전체");
         		this.divSearch.form.ccboCD_BUMUN.set_index(0);
        	}
        	else if(svcID == "combo1") {
        		this.dsCD_LICCOST.insertRow(0);
        		this.dsCD_LICCOST.setColumn(0, "CD_CODE", "");
        		this.dsCD_LICCOST.setColumn(0, "DS_CODE", "전체");
        	}
        };


        this.fnSetCombo1 = function(cd_bumun)
        {
           this.dsCombo1 = new Dataset();
           this.dsCombo1.addColumn("CD_BUMUN", "string");

           //품목
           this.dsCombo1.addRow();
           this.dsCombo1.setColumn(0, "CD_BUMUN", cd_bumun);

           var strSvcId    = "combo1";
           var strSvcType  = "select";
           var inProc      = "_dsProc";
           var inData      = "combo1=dsCombo1";
           var outData     = "dsCD_LICCOST=combo10";
           var strArg      = "";
           var callBackFnc = "fnCallbackCombo";

           this.gfnTransaction( strSvcId ,    // transaction을 구분하기 위한 svc id값
                          strSvcType ,    // transaction을 요청할 구분
                          inProc,         // Procedure 정보 Dataset 이름
                          inData ,       // 입력값으로 보낼 dataset id , a=b형태로 실제이름과 입력이름을 매칭
                          outData ,       // 처리결과값으로 받을 dataset id, a=b형태로 실제이름과 입력이름을 매칭
                          strArg,       // 입력값으로 보낼 arguments, strFormData="20120607"
                          callBackFnc); // 통신방법 정의 [생략가능]
        }
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
        	else if(svcID == "save") {
        		if (errorCode == 0) {
        			this.FormBtns.Select.click();
        		} else {
        			this.gfnAlert(errorMsg);
        		}
        	}
        	else if(svcID == "create") {
        		if (errorCode == 0) {
        			this.fnValidate = function()
        			{
        				this.FormBtns.Select.click();
        			}

        			this.gfnAlert("심의자료가 정상 생성되었습니다.", "fnValidate");
        		} else {
        			this.gfnAlert(errorMsg);
        		}
        	}
        	else if(svcID == "auto") {
        		if (errorCode == 0) {
        			this.fnValidate = function()
        			{
        				this.FormBtns.Select.click();
        			}

        			this.gfnAlert("자동평가가 정상 처리되었습니다.", "fnValidate");
        		} else {
        			this.gfnAlert(errorMsg);
        		}
        	}
        	else if(svcID == "talak") {
        		if (errorCode == 0) {
        			this.fnValidate = function()
        			{
        				this.FormBtns.Select.click();
        			}

        			this.gfnAlert("탈락 처리가 정상적으로 처리되었습니다.", "fnValidate");
        		} else {
        			this.gfnAlert(errorMsg);
        		}
        	}
        	else if(svcID == "except") {
        		if (errorCode == 0) {
        			this.fnValidate = function()
        			{
        				this.FormBtns.Select.click();
        			}

        			this.gfnAlert("평가제외가 정상적으로 처리되었습니다.", "fnValidate");
        		} else {
        			this.gfnAlert(errorMsg);
        		}
        	}
        	else if(svcID == "regist") {
        		if (errorCode == 0) {
        			this.fnValidate = function()
        			{
        				this.FormBtns.Select.click();
        			}

        			this.gfnAlert("등록심의가 정상적으로 처리되었습니다.", "fnValidate");
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

        this.divSearch_ccboCD_BUMUN_onitemchanged = function(obj,e)
        {
        	if(e.prevalue != e.postvalue) {
              this.fnSetCombo1(e.postvalue);
           }
        };


        this.fnCreate = function() {
        	//if (!this.gfnGridIsRow(this.dxGrid)) { return false; }

        	this.gfnConfirm("심의자료생성을 진행 하시겠습니까?", "fnCreate_CallBack");
        }

        this.fnAutoJudge = function() {
        	//if (!this.gfnGridIsRow(this.dxGrid)) { return false; }

        	this.gfnConfirm("자동평가를 진행 하시겠습니까?", "fnAutoJudge_CallBack");
        }

        this.fnTalak = function() {
        	if (!this.gfnGridIsRow(this.dxGrid)) { return false; }

        	this.gfnConfirm("해당건을 탈락처리 하시겠습니까?", "fnTalak_CallBack");
        }

        this.fnExcept = function() {
        	if (!this.gfnGridIsRow(this.dxGrid)) { return false; }

        	this.gfnConfirm("해당건을 평가제외 하시겠습니까?", "fnExcept_CallBack");
        }

        this.fnRegist = function() {
        	if (!this.gfnGridIsRow(this.dxGrid)) { return false; }

        	this.gfnConfirm("해당건을 등록심의 하시겠습니까?", "fnRegist_CallBack");
        }

        this.fnDetail = function() {
        	var param = {};
        	param.YR_JUDGE = this.dsSearch.getColumn(0, "YR_JUDGE");
        	param.CD_VENDOR = this.dsList.getColumn(this.dsList.rowposition, "CD_VENDOR");
        	param.DS_VENDOR = this.dsList.getColumn(this.dsList.rowposition, "DS_VENDOR");
        	param.CD_LICCOST = this.dsList.getColumn(this.dsList.rowposition, "CD_LICCOST");
        	param.CD_JUDGEKIND = this.dsList.getColumn(this.dsList.rowposition, "CD_JUDGEKIND");

        	this.gfnFormOpen(this.FormInfo.CD_MODULE, "DCA_JUDGE", "fnDetail_callback", param);
        }

        this.fnDetail_callback = function()
        {
        	this.FormBtns.Select.click();
        }


        this.fnCreate_CallBack = function(strId, val) {
        	if(val == true) {
        		this.dsCreate.clearData();
        		var nrow = this.dsCreate.addRow();
        		var row = this.dsList.rowposition;
        		this.dsCreate.setColumn(nrow, "YR_JUDGE", this.dsSearch.getColumn(0, "YR_JUDGE"));
        		this.dsCreate.setColumn(nrow, "ID_USER", this.AuthClient.ID_USER);

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
        							strArg, 		// 입력값으로 보낼 arguments, strFormData="20120607"
        							callBackFnc); // 통신방법 정의 [생략가능]
        	}
        }

        this.fnAutoJudge_CallBack = function(strId, val) {
        	if(val == true)
        	{
        		this.dsCreate.clearData();
        		var nrow = this.dsCreate.addRow();
        		var row = this.dsList.rowposition;
        		this.dsCreate.setColumn(nrow, "YR_JUDGE", this.dsSearch.getColumn(0, "YR_JUDGE"));
        		this.dsCreate.setColumn(nrow, "ID_USER", this.AuthClient.ID_USER);

        		var strSvcId    = "auto";
        		var strSvcType  = "save";
        		var inProc		= "_dsProc";
        		var inData      = "auto=dsCreate";
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
        }

        this.fnTalak_CallBack = function(strId, val) {
        	if(val == true)
        	{
        		this.dsTalak.clearData();

        		for(var row = 0; row < this.dsList.rowcount; row++)
        		{
        			if(this.dsList.getColumn(row, "CHK") == "Y")
        			{
        				var nrow = this.dsTalak.addRow();
        				this.dsTalak.setColumn(nrow, "YR_JUDGE", this.dsList.getColumn(row, "YR_JUDGE"));
        				this.dsTalak.setColumn(nrow, "CD_VENDOR", this.dsList.getColumn(row, "CD_VENDOR"));
        				this.dsTalak.setColumn(nrow, "CD_JUDGEKIND", this.dsList.getColumn(row, "CD_JUDGEKIND"));
        				this.dsTalak.setColumn(nrow, "CD_LICCOST", this.dsList.getColumn(row, "CD_LICCOST"));
        				this.dsTalak.setColumn(nrow, "RM_ETC_REASON", this.dsList.getColumn(row, "RM_ETC_REASON"));
        				this.dsTalak.setColumn(nrow, "ID_USER", this.AuthClient.ID_USER);
        			}
        		}

        		var strSvcId    = "talak";
        		var strSvcType  = "save";
        		var inProc		= "_dsProc";
        		var inData      = "talak=dsTalak";
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
        }

        this.fnExcept_CallBack = function(strId, val) {
        	if(val == true)
        	{
        		this.dsExcept.clearData();

        		for(var row = 0; row < this.dsList.rowcount; row++)
        		{
        			if(this.dsList.getColumn(row, "CHK") == "Y")
        			{
        				var nrow = this.dsExcept.addRow();
        				this.dsExcept.setColumn(nrow, "YR_JUDGE", this.dsList.getColumn(row, "YR_JUDGE"));
        				this.dsExcept.setColumn(nrow, "CD_VENDOR", this.dsList.getColumn(row, "CD_VENDOR"));
        				this.dsExcept.setColumn(nrow, "CD_JUDGEKIND", this.dsList.getColumn(row, "CD_JUDGEKIND"));
        				this.dsExcept.setColumn(nrow, "CD_LICCOST", this.dsList.getColumn(row, "CD_LICCOST"));
        				this.dsExcept.setColumn(nrow, "RM_ETC_REASON", this.dsList.getColumn(row, "RM_ETC_REASON"));
        				this.dsExcept.setColumn(nrow, "ID_USER", this.AuthClient.ID_USER);
        			}
        		}

        		var strSvcId    = "except";
        		var strSvcType  = "save";
        		var inProc		= "_dsProc";
        		var inData      = "except=dsExcept";
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
        }

        this.fnRegist_CallBack = function(strId, val) {
        	if(val == true)
        	{
        		this.dsRegist.clearData();

        		for(var row = 0; row < this.dsList.rowcount; row++)
        		{
        			if(this.dsList.getColumn(row, "CHK") == "Y")
        			{
        				var nrow = this.dsRegist.addRow();
        				this.dsRegist.setColumn(nrow, "YR_JUDGE", this.dsList.getColumn(row, "YR_JUDGE"));
        				this.dsRegist.setColumn(nrow, "CD_VENDOR", this.dsList.getColumn(row, "CD_VENDOR"));
        				this.dsRegist.setColumn(nrow, "CD_JUDGEKIND", this.dsList.getColumn(row, "CD_JUDGEKIND"));
        				this.dsRegist.setColumn(nrow, "CD_LICCOST", this.dsList.getColumn(row, "CD_LICCOST"));
        				this.dsRegist.setColumn(nrow, "ID_USER", this.AuthClient.ID_USER);
        			}
        		}
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
        							strArg, 		// 입력값으로 보낼 arguments, strFormData="20120607"
        							callBackFnc); // 통신방법 정의 [생략가능]
        	}
        }

        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.form_onload,this);
            this.divSearch.form.ccboCD_BUMUN.addEventHandler("onitemchanged",this.divSearch_ccboCD_BUMUN_onitemchanged,this);
            this.dsSearch.addEventHandler("onvaluechanged",this.dsSearch_onvaluechanged,this);
        };
        this.loadIncludeScript("DCA_JUDGE_REGULAR_NEW_LIST_DM.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
