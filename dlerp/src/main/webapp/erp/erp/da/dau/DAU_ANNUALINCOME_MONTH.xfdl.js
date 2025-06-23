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
            this.set_titletext("월별연봉지급현황");
            if (Form == this.constructor)
            {
                this._setFormPosition(1280,720);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("dsList", this);
            obj._setContents("");
            this.addChild(obj.name, obj);


            obj = new Dataset("_dsProc", this);
            obj._setContents("<ColumnInfo><Column id=\"TARGET\" type=\"STRING\" size=\"256\"/><Column id=\"SP\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"TARGET\">select</Col><Col id=\"SP\">DAUPR_ANNUALINCOME_MONTH_SELECT</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsMM_BASE", this);
            obj._setContents("<ColumnInfo><Column id=\"CD_CODE\" type=\"STRING\" size=\"256\"/><Column id=\"DS_CODE\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"CD_CODE\">%</Col><Col id=\"DS_CODE\">전체</Col></Row><Row><Col id=\"CD_CODE\">01</Col><Col id=\"DS_CODE\">01 월</Col></Row><Row><Col id=\"CD_CODE\">02</Col><Col id=\"DS_CODE\">02 월</Col></Row><Row><Col id=\"CD_CODE\">03</Col><Col id=\"DS_CODE\">03 월</Col></Row><Row><Col id=\"CD_CODE\">04</Col><Col id=\"DS_CODE\">04 월</Col></Row><Row><Col id=\"CD_CODE\">05</Col><Col id=\"DS_CODE\">05 월</Col></Row><Row><Col id=\"CD_CODE\">06</Col><Col id=\"DS_CODE\">06 월</Col></Row><Row><Col id=\"CD_CODE\">07</Col><Col id=\"DS_CODE\">07 월</Col></Row><Row><Col id=\"CD_CODE\">08</Col><Col id=\"DS_CODE\">08 월</Col></Row><Row><Col id=\"CD_CODE\">09</Col><Col id=\"DS_CODE\">09 월</Col></Row><Row><Col id=\"CD_CODE\">10</Col><Col id=\"DS_CODE\">10 월</Col></Row><Row><Col id=\"CD_CODE\">11</Col><Col id=\"DS_CODE\">11 월</Col></Row><Row><Col id=\"CD_CODE\">12</Col><Col id=\"DS_CODE\">12 월</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsSearch", this);
            obj._setContents("<ColumnInfo><Column id=\"CD_CORP\" type=\"STRING\" size=\"256\"/><Column id=\"YY_BASE\" type=\"STRING\" size=\"256\"/><Column id=\"MM_BASE\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"CD_CORP\"/><Col id=\"YY_BASE\"/><Col id=\"MM_BASE\"/></Row></Rows>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Div("divSearch","0","0",null,"46.0","0",null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_cssclass("div_SEARCH_Bg");
            this.addChild(obj.name, obj);

            obj = new Static("sta00","0.0","10.0","92.0","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("1");
            obj.set_text("법인코드");
            obj.set_cssclass("sta_WF_SchLabelE");
            this.divSearch.addChild(obj.name, obj);

            obj = new Div("ccfCD_CORP","sta00:0.0","10.0","240","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.getSetter("CDTextWidth").set("70");
            obj.set_taborder("0");
            obj.set_url("cmm::cmmCodeFind.xfdl");
            obj.getSetter("CodeFindName").set("DAX_CFCORP_CODEFIND");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("staYY_BASE","ccfCD_CORP:0.0","10.0","92.0","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("1");
            obj.set_text("년도");
            obj.set_cssclass("sta_WF_SchLabelE");
            this.divSearch.addChild(obj.name, obj);

            obj = new Div("ctclYY_BASE","staYY_BASE:0.0","10.0","80","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("0");
            obj.set_url("cmm::cmmCalYY.xfdl");
            obj.set_text("");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("staTY_RETIRE","ctclYY_BASE:0.0","10.0","92.0","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("4");
            obj.set_text("급여월");
            obj.set_cssclass("sta_WF_SchLabel");
            this.divSearch.addChild(obj.name, obj);

            obj = new Combo("cboMM_BASE","staTY_RETIRE:0.0","10.0","80","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("5");
            obj.set_innerdataset("dsMM_BASE");
            obj.set_codecolumn("CD_CODE");
            obj.set_datacolumn("DS_CODE");
            obj.set_value("01");
            obj.set_index("1");
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

            obj = new BindItem("item1","divSearch.form.ctclYY_BASE.form.TextBox","value","dsSearch","YY_BASE");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item2","divSearch.form.cboMM_BASE","value","dsSearch","MM_BASE");
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
        this.registerScript("DAU_ANNUALINCOME_MONTH.xfdl", function() {
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


        	//적용년도 셋팅
        	var today = this.gfnGetDate().substring(0,4);
        	this.divSearch.form.ctclYY_BASE.form.TextBox.set_value(today);
        	this.cboMM_BASE.set_index(0);

        	var frame = this.getOwnerFrame();
        	if(!this.gfnIsNull(frame.YY_BASE) && !this.gfnIsNull(frame.CD_CORP)){
        		this.ctclYY_BASE.form.TextBox.set_value(frame.YY_BASE); // 년도
        		this.ccfCD_CORP.form.CDTextBox.set_value(frame.CD_CORP); // 법인
        		this.ccfCD_CORP.form.DSTextBox.set_value(frame.DS_CORP);
        		this.FormBtns.Select.click();
        	}else{
        		//법인 셋팅
        		this.divSearch.form.ccfCD_CORP.form.CDTextBox.set_value(this.AuthClient.CD_CORP);
        		this.divSearch.form.ccfCD_CORP.form.DSTextBox.set_value(this.AuthClient.DS_CORP);
        		//this.divSearch.form.ctclYY_BASE.form.TextBox.set_value(today);
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

        };

        /*
         *	입력 버튼
         */
        this.fnAdd = function() {
        	//var nrow = this.gfnGridAdd(this.dxGrid);
        }

        /*
         *	삭제 버튼
         */
        this.fnDel = function() {
        	//this.gfnGridDel(this.dxGrid);
        }

         /************************************************************************
         * 확장버튼 이벤트
         ************************************************************************/

        /************************************************************************
         * 변수 선언
         ************************************************************************/
        this.fnSetVariable = function() {
        	this.ccfCD_CORP = this.divSearch.form.ccfCD_CORP;
        	this.ctclYY_BASE = this.divSearch.form.ctclYY_BASE;
        	this.cboMM_BASE = this.divSearch.form.cboMM_BASE;

        	this.dxGrid = this.divData.form.objGrid;
        };

        /************************************************************************
         * 이벤트 설정
         ************************************************************************/
        this.fnSetEvent = function() {
        	this.ccfCD_CORP.BeforeUserDataSetParam = "fnBeforeUserDataSetParam";
        	this.ccfCD_CORP.AfterCDTextChanged = "fnAfterCDTextChanged";

        	this.gfnGridInit(this.dxGrid, this.dsList, "DA", "DAU_ANNUALINCOME_MONTH");

        }

        /************************************************************************
         * 파라미터 설정
         ************************************************************************/
        this.fnSetParameter = function() {

        	this.dsSelect = new Dataset();
        	this.dsSelect.addColumn("CD_CORP", "string");
        	this.dsSelect.addColumn("YY_BASE", "string");
        	this.dsSelect.addColumn("MM_BASE", "string");
        	this.dsSelect.addColumn("ID_USER", "string");
        	this.dsSelect.addColumn("IP_ADDR", "string");
        	this.dsSelect.addColumn("GR_SEARCH", "string");
        	this.dsSelect.addColumn("GR_CORP", "string");
        }

        /************************************************************************
         * 컨트롤 이벤트
         ************************************************************************/
         /*
          *	조회 버튼
          */
        this.fnSelect = function() {
        	if(!this.fnSelectValidate()) return;

        	this.dsSelect.clearData();
        	this.dsSelect.addRow();

        	this.dsSelect.setColumn(0, "CD_CORP", this.dsSearch.getColumn(0, "CD_CORP"));
        	this.dsSelect.setColumn(0, "YY_BASE", this.dsSearch.getColumn(0, "YY_BASE"));
        	this.dsSelect.setColumn(0, "MM_BASE", this.dsSearch.getColumn(0, "MM_BASE"));
        	this.dsSelect.setColumn(0, "ID_USER", this.AuthClient.ID_USER);
        	this.dsSelect.setColumn(0, "IP_ADDR", this.AuthClient.NO_IP);
        	this.dsSelect.setColumn(0, "GR_SEARCH", this.FormInfo.GR_SEARCH);
        	this.dsSelect.setColumn(0, "GR_CORP", this.AuthClient.CD_CORP);

        	var strSvcId    = "select";
        	var strSvcType  = "grid";
        	var inProc		= "_dsProc";
        	var inData      = "select=dsSelect";
        	var outData     = "dsList=select0";
        	var strArg      = "";
        	var callBackFnc = "fnCallback";

        	this.gfnTransaction( strSvcId , 	// transaction을 구분하기 위한 svc id값
        						strSvcType , 	// trabsaction을 요청할 구분
        						inProc,			// Procedure 정보 Dataset 이름
        						inData , 		// 입력값으로 보낼 dataset id , a=b형태로 실제이름과 입력이름을 매칭
        						outData , 		// 처리결과값으로 받을 dataset id, a=b형태로 실제이름과 입력이름을 매칭
        						strArg, 			// 입력갑스로 보낼 arguments, strFormData="20120607"
        						callBackFnc); // 통신방법 정의 [생략가능]
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
         	if (this.gfnIsNull(this.ccfCD_CORP.form.CDTextBox.value)) {
         		this.fnVaidateCallback = function() {
         			this.ccfCD_CORP.form.CDTextBox.setFocus();
         		}
         		this.gfnAlert("법인코드를 입력하세요.");
         		return false;
         	}

        	if (this.gfnIsNull(this.ctclYY_BASE.form.TextBox.value)) {
        		this.fnVaidateCallback = function() {
        			this.ctclYY_BASE.form.TextBox.setFocus();
        		}
        		this.gfnAlert("적용연도를 입력하세요.");
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
        	}
        }

        /************************************************************************
         * 코드파인드 이벤트
         ************************************************************************/

        this.fnAfterCDTextChanged = function(id) {
        	;
        }


        this.fnBeforeUserDataSetParam = function(id, dsUserParam, nrow) {
        	if(id == "ccfCD_CORP") {
        		dsUserParam.setColumn(nrow, "CD_CORP", this.AuthClient.CD_CORP);
        		dsUserParam.setColumn(nrow, "GR_SEARCH", this.FormInfo.GR_SEARCH);
        		dsUserParam.setColumn(nrow, "ID_USER", this.AuthClient.ID_USER);
        	}
        	return true;
        }


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


        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.form_onload,this);
            this.divSearch.form.staTY_RETIRE.addEventHandler("onclick",this.Common_onclick,this);
            this.dsSearch.addEventHandler("onvaluechanged",this.dsSearch_onvaluechanged,this);
        };
        this.loadIncludeScript("DAU_ANNUALINCOME_MONTH.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
