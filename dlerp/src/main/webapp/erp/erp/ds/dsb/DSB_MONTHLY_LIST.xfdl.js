(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("DSB_MAGAM");
            this.set_titletext("노무비명세서");
            if (Form == this.constructor)
            {
                this._setFormPosition(1280,720);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("dsList", this);
            obj._setContents("");
            this.addChild(obj.name, obj);


            obj = new Dataset("_dsProc", this);
            obj._setContents("<ColumnInfo><Column id=\"TARGET\" type=\"STRING\" size=\"256\"/><Column id=\"SP\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"TARGET\">select</Col><Col id=\"SP\">DSBPR_MONTHLY_LIST_SELECT</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsSearch", this);
            obj._setContents("<ColumnInfo><Column id=\"CD_CORP\" type=\"STRING\" size=\"256\"/><Column id=\"CD_SITE\" type=\"STRING\" size=\"256\"/><Column id=\"YM_WORK\" type=\"STRING\" size=\"256\"/><Column id=\"CD_JIKJONG\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"CD_SITE\"/><Col id=\"YM_WORK\"/><Col id=\"CD_JIKJONG\"/></Row></Rows>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Div("divSearch","0.0","10.0",null,"46.0","0",null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_cssclass("div_SEARCH_Bg");
            obj.set_text("");
            obj.set_formscrolltype("none");
            this.addChild(obj.name, obj);

            obj = new Static("staCD_SITE","0.0","10.0","92.0","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("6");
            obj.set_text("현장코드");
            obj.set_textAlign("center");
            obj.set_cssclass("sta_WF_SchLabelE");
            this.divSearch.addChild(obj.name, obj);

            obj = new Div("ccfCD_SITE","staCD_SITE:0.0","10.0","250","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.getSetter("CDTextWidth").set("80");
            obj.set_taborder("7");
            obj.set_url("cmm::cmmCodeFind.xfdl");
            obj.set_text("");
            obj.getSetter("CodeFindName").set("DSX_CFSITE");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("staYM_WORK","ccfCD_SITE:0.0","10.0","92.0","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("0");
            obj.set_text("출역월");
            obj.set_cssclass("sta_WF_SchLabelE");
            this.divSearch.addChild(obj.name, obj);

            obj = new Div("ctclYM_WORK","staYM_WORK:0.0","10.0","80","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("1");
            obj.set_url("cmm::cmmCalMM.xfdl");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("staYM_WORK00","ctclYM_WORK:0.0","10.0","92.0","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("3");
            obj.set_text("직종");
            obj.set_visible("false");
            obj.set_cssclass("sta_WF_SchLabel");
            this.divSearch.addChild(obj.name, obj);

            obj = new Div("ccfCD_JIKJONG","staYM_WORK00:0.0","10.0","220","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.getSetter("CDTextWidth").set("80");
            obj.set_taborder("2");
            obj.set_url("cmm::cmmCodeFind.xfdl");
            obj.set_text("");
            obj.set_visible("false");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("staCD_CORP","ccfCD_JIKJONG:0.0","10.0","92.0","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("4");
            obj.set_text("법인");
            obj.set_cssclass("sta_WF_SchLabelE");
            this.divSearch.addChild(obj.name, obj);

            obj = new Div("ccfCD_CORP","staCD_CORP:0.0","10.0","250","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.getSetter("CDTextWidth").set("30");
            obj.set_taborder("5");
            obj.set_url("cmm::cmmCodeFind.xfdl");
            obj.set_text("");
            obj.getSetter("CodeFindName").set("DSX_CFCORP");
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
            obj = new BindItem("item1","divSearch.form.ctclYM_WORK.form.TextBox","value","dsSearch","YM_WORK");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item2","divSearch.form.ccfCD_JIKJONG.form.CDTextBox","value","dsSearch","CD_JIKJONG");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item0","divSearch.form.ccfCD_CORP.form.CDTextBox","value","dsSearch","CD_CORP");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item3","divSearch.form.ccfCD_SITE.form.CDTextBox","value","dsSearch","CD_SITE");
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
        this.registerScript("DSB_MONTHLY_LIST.xfdl", function() {
        this.objApp = this.gfnGetApplication();

        this.DSB_MAGAM_onload = function(obj, e) {
            // -- 필수 -------------------//
            this.gfnFormOnLoad(this);
            this.gfnFormInfo(this);
            // ---------------------------//

            this.fnSetButton();
            this.fnSetExtendButton();
            this.fnSetVariable();
            this.fnSetEvent();
            this.fnSetParameter();

        	this.dsSearch.set_enableevent(false);
        	var today = this.gfnGetDate();
            this.dsSearch.setColumn(0, "YM_WORK", today.substr(0,6));
        	this.dsSearch.set_enableevent(true);


        	//법인 셋팅
        	this.divSearch.form.ccfCD_CORP.form.CDTextBox.set_value(this.AuthClient.CD_CORP);
        	this.divSearch.form.ccfCD_CORP.form.DSTextBox.set_value(this.AuthClient.DS_CORP);

        // 	this.divSearch.form.ccfCD_SITE.form.CDTextBox.set_value(this.AuthClient.CD_SITE);
        // 	this.divSearch.form.ccfCD_SITE.form.DSTextBox.set_value(this.AuthClient.DS_SITE);

        	/* CD_SITE, DS_SITE 이전 값 받아오는 부분 START */
        	var cd_site = "";
        	var ds_site = "";
        	if(!this.gfnIsNull(this.objApp.DW_SPACE98)) {
        		cd_site = this.objApp.DW_SPACE98;
        		ds_site = this.objApp.DW_SPACE99;
        	} else {
        		cd_site = this.AuthClient.CD_SITE;
        		ds_site = this.AuthClient.DS_SITE;
        	}

        	this.dsSearch.setColumn(0, "CD_SITE", cd_site);
        	this.divSearch.form.ccfCD_SITE.form.DSTextBox.set_value(ds_site)
        	/* CD_SITE, DS_SITE 이전 값 받아오는 부분 END */

        	// GR_SEARCH가 2보다 크면.. 법인코드 disable
        	// GR_SEARCH가 7또는 9 인경우 부서코드 disable
        	//trace("GR_SEARCH", this.FormInfo.GR_SEARCH);
        	if( this.FormInfo.GR_SEARCH  >= "2"){
        		this.divSearch.form.ccfCD_CORP.set_enable(false);
        	}

        	if(this.FormInfo.GR_SEARCH == "7" || this.FormInfo.GR_SEARCH == "9"){
        		this.divSearch.form.ccfCD_SITE.set_enable(false);
        	}

        	//this.fnSelect();
        	this.FormBtns.Select.click();
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
            //this.btn1 = this.gfnFormButtonAdd("BTN_MONMAGAM", "fnMonmagamYnCheck"); //월마감
        };

        /************************************************************************
         * 변수 선언
         ************************************************************************/
        this.fnSetVariable = function() {
        	this.ccfCD_CORP = this.divSearch.form.ccfCD_CORP;
        	this.ccfCD_SITE = this.divSearch.form.ccfCD_SITE;
            this.ctclYM_WORK = this.divSearch.form.ctclYM_WORK;

            this.dxGrid = this.divData.form.objGrid;
        };

        /************************************************************************
         * 이벤트 설정
         ************************************************************************/
        this.fnSetEvent = function() {
        	//this.ccfCD_JIKJONG.CodeFindName = "DSX_CFJIKJONG";	// 직종
        	this.ccfCD_CORP.BeforeUserDataSetParam = "fnBeforeUserDataSetParam";
        	this.ccfCD_CORP.AfterCDTextChanged = "fnAfterCDTextChanged";
        	this.ccfCD_SITE.BeforeUserDataSetParam = "fnBeforeUserDataSetParam";
        	this.ccfCD_SITE.AfterCDTextChanged = "fnAfterCDTextChanged";

            //그리드 초기화
            this.gfnGridInit(this.dxGrid, this.dsList, "DS", "DSB_MONTHLY_LIST");

        }
        /************************************************************************
         * 파라미터 설정
         ************************************************************************/
        this.fnSetParameter = function() {

        	this.dsSelect = new Dataset();
        	this.dsSelect.addColumn("CD_SITE", "string");
        	this.dsSelect.addColumn("YM_WORK", "string");
        	this.dsSelect.addColumn("ID_SABUN", "string");


        }

        /************************************************************************
         * 컨트롤 이벤트
         ************************************************************************/
        /*
         *   조회 버튼
         */
        this.fnSelect = function() {
            if (!this.fnValidate()) return false;

            this.gfnGridBeforeSelect(this.dxGrid);

            this.dsSelect.clearData();
            this.dsSelect.addRow();
            this.dsSelect.setColumn(0, "CD_SITE", this.dsSearch.getColumn(0, "CD_SITE"));
            this.dsSelect.setColumn(0, "YM_WORK", this.dsSearch.getColumn(0, "YM_WORK"));
        	this.dsSelect.setColumn(0, "ID_SABUN", this.AuthClient.ID_SABUN);

            var strSvcId = "select";
            var strSvcType = "grid";
            var inProc = "_dsProc";
            var inData = "select=dsSelect";
            var outData = "dsList=select0";
            var strArg = "";
            var callBackFnc = "fnCallback";

            this.gfnTransaction(strSvcId, // transaction을 구분하기 위한 svc id값
                strSvcType, // transaction을 요청할 구분
                inProc, // Procedure 정보 Dataset 이름
                inData, // 입력값으로 보낼 dataset id , a=b형태로 실제이름과 입력이름을 매칭
                outData, // 처리결과값으로 받을 dataset id, a=b형태로 실제이름과 입력이름을 매칭
                strArg, // 입력갑스로 보낼 arguments, strFormData="20120607"
                callBackFnc); // 통신방법 정의 [생략가능]
        }



        /*
         *   입력 버튼
         */
        this.fnAdd = function() {
            //this.gfnGridAdd(this.dxGrid);
        }

        /*
         *   삭제 버튼
         */
        this.fnDel = function() {
            //this.gfnGridDel(this.dxGrid);
        }

        /*
         *   저장 버튼
         */
        this.fnSave = function() {

        }

        /*
         *   엑셀 버튼
         */
        this.fnExcel = function() {
            this.gfnExcelExport(this.dxGrid);
        }

        /*
         *   출력 버튼
         */
        this.fnPrint = function() {}

        /************************************************************************
         * Validate
         ************************************************************************/
        /*
         *   조회 Validate
         */
        this.fnValidate = function() {
            var validate = true;

            if (this.gfnIsNull(this.dsSearch.getColumn(0, "CD_SITE"))) {
                validate = false;
                this.fnVaidateCallback = function() {
                    this.ccfCD_SITE.form.CDTextBox.setFocus();
                }
                this.gfnAlert("현장코드를 입력하세요.", "fnVaidateCallback");

            }
            else if (this.gfnIsNull(this.dsSearch.getColumn(0, "YM_WORK"))) {
                validate = false;
                this.fnVaidateCallback = function() {
                    this.ctclYM_WORK.form.TextBox.setFocus();
                }
                this.gfnAlert("조회년월을 입력하세요.", "fnVaidateCallback");

            }
            return validate;
        };

        /************************************************************************
         * 콜백 이벤트
         ***********************************************************************

        /*
         *   콜백 처리
         */

        this.fnCallback = function(svcID, errorCode, errorMsg) {
            if (errorCode != 0) {
                this.gfnAlert(errorMsg);

                return;
            }

            if (svcID == "select") {
                this.gfnGridAfterSelect(this.dxGrid);

            }
        };


        /************************************************************************
         * 코드파인드 이벤트
         ************************************************************************/
        //코드파인드의 파라미터 값을 넘겨줄때 사용하는 함수
        this.fnBeforeUserDataSetParam = function(id, dsUserParam, nrow) {
        	//조회조건 코드파인드
        	if (id == "ccfCD_CORP") {
         		dsUserParam.setColumn(nrow, "GR_SEARCH", this.FormInfo.GR_SEARCH);
        		dsUserParam.setColumn(nrow, "GR_CORP", this.AuthClient.CD_CORP);
         		dsUserParam.setColumn(nrow, "GR_DEPT", this.AuthClient.CD_DEPT);
        	}
        	else if (id == "ccfCD_SITE"){
        		if (this.gfnIsNull(this.ccfCD_CORP.form.CDTextBox.value)) {
        			this.gfnAlert("법인을 먼저 입력하세요.");
        			return false;
        		}
        		dsUserParam.setColumn(nrow, "CD_CORP", this.dsSearch.getColumn(0, "CD_CORP"));	// 법인코드
        		dsUserParam.setColumn(nrow, "GR_SEARCH", this.FormInfo.GR_SEARCH);
        		dsUserParam.setColumn(nrow, "GR_CORP", this.AuthClient.CD_CORP);
         		dsUserParam.setColumn(nrow, "GR_DEPT", this.AuthClient.CD_DEPT);
        	}
        	return true;
        }

        this.fnAfterCDTextChanged = function(id, codeFindData) {
        	if(id == "ccfCD_CORP") {
        		this.ccfCD_SITE.form.fnCodeFindClear();
        	}
        }

        /************************************************************************
         * 그리드 이벤트
         ************************************************************************/

        /************************************************************************
         * 기타 이벤트
         ************************************************************************/

        this.dsSearch_onvaluechanged = function(obj, e) {
            if (e.oldvalue != e.newvalue) {
                this.gfnSetFormStatus(this); // 폼상태 초기화
                this.gfnGridClear(this.dxGrid);
            }
        };
        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.DSB_MAGAM_onload,this);
            this.divSearch.form.staYM_WORK.addEventHandler("onclick",this.divSearch_staYM_WORK_onclick,this);
            this.divSearch.form.staYM_WORK00.addEventHandler("onclick",this.divSearch_staYM_WORK_onclick,this);
            this.divData.addEventHandler("onlbuttonup",this.divData_onlbuttonup,this);
            this.dsList.addEventHandler("onrowposchanged",this.dsList_onrowposchanged,this);
            this.dsSearch.addEventHandler("onvaluechanged",this.dsSearch_onvaluechanged,this);
        };
        this.loadIncludeScript("DSB_MONTHLY_LIST.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
