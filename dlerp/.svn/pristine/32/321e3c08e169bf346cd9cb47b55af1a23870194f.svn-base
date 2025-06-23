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
            this.set_titletext("자사경력관리");
            if (Form == this.constructor)
            {
                this._setFormPosition(1190,720);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("dsList", this);
            obj._setContents("<ColumnInfo><Column id=\"NO_ID\" type=\"STRING\" size=\"256\"/><Column id=\"DS_NAME\" type=\"STRING\" size=\"256\"/><Column id=\"CD_CORP\" type=\"STRING\" size=\"256\"/><Column id=\"DS_CORP\" type=\"STRING\" size=\"256\"/><Column id=\"CD_SITE\" type=\"STRING\" size=\"256\"/><Column id=\"DS_SITE\" type=\"STRING\" size=\"256\"/><Column id=\"NO_JUMIN\" type=\"STRING\" size=\"256\"/><Column id=\"FILE_ATTACH\" type=\"STRING\" size=\"256\"/><Column id=\"DT_IPSA\" type=\"STRING\" size=\"256\"/><Column id=\"TY_CHAIYONG\" type=\"STRING\" size=\"256\"/><Column id=\"DS_CHAIYONG\" type=\"STRING\" size=\"256\"/><Column id=\"DT_IPSA1\" type=\"STRING\" size=\"256\"/><Column id=\"DT_TOIJIK\" type=\"STRING\" size=\"256\"/><Column id=\"DT_START\" type=\"STRING\" size=\"256\"/><Column id=\"DT_END\" type=\"STRING\" size=\"256\"/><Column id=\"CD_JIKJONG\" type=\"STRING\" size=\"256\"/><Column id=\"DS_JIKJONG\" type=\"STRING\" size=\"256\"/><Column id=\"CD_JIKJONG2\" type=\"STRING\" size=\"256\"/><Column id=\"TY_PAY\" type=\"STRING\" size=\"256\"/><Column id=\"DS_PAY\" type=\"STRING\" size=\"256\"/><Column id=\"AM_PAY\" type=\"BIGDECIMAL\" size=\"256\"/><Column id=\"GF_NO_SEQ\" type=\"BIGDECIMAL\" size=\"256\"/><Column id=\"GF_DS_PATH\" type=\"STRING\" size=\"256\"/><Column id=\"GF_NM_FILE\" type=\"STRING\" size=\"256\"/><Column id=\"RF_NO_SEQ\" type=\"BIGDECIMAL\" size=\"256\"/><Column id=\"RF_DS_PATH\" type=\"STRING\" size=\"256\"/><Column id=\"RF_NM_FILE\" type=\"STRING\" size=\"256\"/><Column id=\"FF_NO_SEQ\" type=\"BIGDECIMAL\" size=\"256\"/><Column id=\"FF_DS_PATH\" type=\"STRING\" size=\"256\"/><Column id=\"FF_NM_FILE\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("_dsProc", this);
            obj._setContents("<ColumnInfo><Column id=\"TARGET\" type=\"STRING\" size=\"256\"/><Column id=\"SP\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"TARGET\">select</Col><Col id=\"SP\">DSAPR_CAREER_SELECT</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsSearch", this);
            obj._setContents("<ColumnInfo><Column id=\"NO_ID\" type=\"STRING\" size=\"256\"/><Column id=\"NO_SABUN\" type=\"STRING\" size=\"256\"/><Column id=\"DS_NAME\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"NO_ID\"/><Col id=\"NO_SABUN\"/></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsData", this);
            obj._setContents("<ColumnInfo><Column id=\"DS_NAME\" type=\"STRING\" size=\"256\"/><Column id=\"NO_JUMIN1\" type=\"STRING\" size=\"256\"/><Column id=\"NO_JUMIN2\" type=\"STRING\" size=\"256\"/><Column id=\"CD_SITE\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Div("divSearch","0.0","10.0",null,"46.0","0",null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_cssclass("div_SEARCH_Bg");
            obj.set_formscrolltype("none");
            this.addChild(obj.name, obj);

            obj = new Static("sta01","0.0","10.0","66.0","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("0");
            obj.set_text("성명");
            obj.set_textDecoration("none");
            obj.set_cssclass("sta_WF_SchLabel");
            this.divSearch.addChild(obj.name, obj);

            obj = new Div("ccfNO_ID","sta01:0.0","10.0","180","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.getSetter("CDTextWidth").set("80");
            obj.set_taborder("1");
            obj.set_url("cmm::cmmCodeFind.xfdl");
            obj.set_text("");
            obj.getSetter("CodeFindName").set("DSX_CFEMPLOYEE");
            this.divSearch.addChild(obj.name, obj);

            obj = new Edit("edtNO_ID","ccfNO_ID:0.0","10.0","35","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("2");
            obj.set_readonly("true");
            obj.set_visible("false");
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
            obj = new BindItem("item3","divSearch.form.ccfNO_ID.form.CDTextBox","value","dsSearch","NO_SABUN");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item4","divSearch.form.ccfNO_ID.form.DSTextBox","value","dsSearch","DS_NAME");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item5","divSearch.form.edtNO_ID","value","dsSearch","NO_ID");
            this.addChild(obj.name, obj);
            obj.bind();
            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {
            this._addPreloadList("fdl","cmm::cmmCodeFind.xfdl");
        };
        
        // User Script
        this.registerScript("DSA_CAREER.xfdl", function() {
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

        	if(!this.gfnIsNull(this.getOwnerFrame().NO_ID)) {
        		this.dsSearch.setColumn(0, "NO_ID", this.getOwnerFrame().NO_ID);
        		this.dsSearch.setColumn(0, "NO_SABUN", this.getOwnerFrame().NO_SABUN);
        		this.dsSearch.setColumn(0, "DS_NAME", this.getOwnerFrame().DS_NAME);
        		//this.divSearch.form.ccfNO_ID.set_enable(false);
        	}

        	if(!this.gfnIsNull(this.getOwnerFrame().NO_ID)){
        		this.FormBtns.Select.click();
        	}
        };

        /************************************************************************
         * 버튼 설정 : 화면(Tab) 전환시 마다 호출
         * 서브버튼 사용 및 공통버튼 강제 제어시 여기서 처리
         ************************************************************************/
        this.fnSetButton = function() {
        	// Select, Add, Del, Save, Excel, Print
        	// SubSelect, SubAdd, SubDel, SuubSave, SubExcel
        	//this.FormBtns.Select.set_enable(false);
        }

        /************************************************************************
         * 확장 버튼 : 화면별 버튼 설정 ID, function 연결 (화면버튼관리)
         ************************************************************************/
        this.fnSetExtendButton = function() {
        	//this.btn1 = this.gfnFormButtonAdd("BTN_EXTENSION", "fnExtension");
        	this.btnInsert = this.gfnFormButtonAdd("btnInsert", "fnInsert");
        };

        /************************************************************************
         * 변수 선언
         ************************************************************************/
        this.fnSetVariable = function() {
        	this.ccfNO_ID = this.divSearch.form.ccfNO_ID;
        	this.dxGrid = this.divData.form.objGrid;
        };

        /************************************************************************
         * 이벤트 설정
         ************************************************************************/
        this.fnSetEvent = function() {
        	this.ccfNO_ID.BeforeUserDataSetParam = "fnBeforeUserDataSetParam";
        	this.ccfNO_ID.AfterCDTextChanged = "fnAfterCDTextChanged";

        	// 그리드 초기화
        	this.gfnGridInit(this.dxGrid, this.dsList, "DS", "DSA_CAREER");

        	// 그리드 코드파인드 설정
        	//this.dxGrid.BeforeUserDataSetParam = "fnGrid_BeforeUserDataSetParam";

        	// 그리드 onkeyup 이벤트
        	//this.dxGrid.addEventHandler("onkeyup", this.fnGrid_OnKeyUp, this);
        };

        /************************************************************************
         * 파라미터 설정
         ************************************************************************/
        this.fnSetParameter = function() {
        	this.dsSelect = new Dataset();
        	this.dsSelect.addColumn("NO_ID", "string");
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

        	this.dsSelect.setColumn(0, "NO_ID", this.dsSearch.getColumn(0, "NO_ID"));

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
        	//var nrow = this.gfnGridAdd(this.dxGrid); // top (default), bottom, current
        }

        /*
         *	삭제 버튼
         */
        this.fnDel = function() {
        	//this.gfnGridDel(this.dxGrid);
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
         * 확장 버튼 이벤트
         ************************************************************************/
         this.fnInsert = function(){
        	if (!this.gfnGridIsRow(this.dxGrid)) { return false; }

        	var empYn = "N";

        	if(this.dsList.rowcount > 0){
        		if(!this.gfnIsNull(this.dsList.getColumn(0, "NO_ID"))){
        			empYn = "I";
        		}

        		this.getParentContext().opener.popupVal = {dsName:this.dsList.getColumn(this.dsList.rowposition, "DS_NAME")
        												 , noId1:this.dsList.getColumn(this.dsList.rowposition, "NO_JUMIN")
        												 , noId:this.dsList.getColumn(this.dsList.rowposition, "NO_ID")
        												 , cdSite:this.dsList.getColumn(this.dsList.rowposition, "CD_SITE")};
        		this.getParentContext().close(empYn);
        	}
         }

        /************************************************************************
         * Validate
         ************************************************************************/
        /*
         *	조회 Validate
         */
        this.fnSelectValidate = function() {
        	var validate = true;

        // 	if (this.gfnIsNull(this.dsSearch.getColumn(0,"NO_ID"))) {
        // 		validate = false;
        // 		// Alert후 실행할 처리
        // 		this.fnVaidateCallback = function() {
        // 			this.ccfNO_ID.form.CDTextBox.setFocus();
        // 		}
        // 		this.gfnAlert("성명은 반드시 입력 하셔야 합니다.", "fnVaidateCallback");
        // 	}

        // 	if (this.gfnIsNull(this.ccfNO_ID.form.CDTextBox.value)) {
        // 		validate = false;
        // 		// Alert후 실행할 처리
        // 		this.fnVaidateCallback = function() {
        // 			this.ccfNO_ID.form.CDTextBox.setFocus();
        //  		}
        // 		this.gfnAlert("성명은 반드시 입력 하셔야 합니다.", "fnVaidateCallback");
        // 	}
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
        }

        /************************************************************************
         * 코드파인드 이벤트
         ************************************************************************/
        //코드파인드의 파라미터 값을 넘겨줄때 사용하는 함수
        this.fnBeforeUserDataSetParam = function(id, dsUserParam, nrow) {

        // 	if (id == "ccfNO_ID"){
        //  		if (this.gfnIsNull(this.dsSearch.getColumn(0, "CD_SITE"))) {
        //  			this.gfnAlert("현장코드를 먼저 입력하세요.");
        //  			return false;
        //  		}
        // 		dsUserParam.setColumn(nrow, "CD_SITE", this.dsSearch.getColumn(0, "CD_SITE"));
        // 	}
        //
        	dsUserParam.setColumn(nrow, "NO_ID", "");
        	return true;
        }

        this.fnAfterCDTextChanged = function(id, codeFindData) {
        	var arr = codeFindData; //this.ccfCD_DEPT_ORG.form.SelectedData; 둘다 사용가능

        	if(id == "ccfNO_ID"){
        		if (arr.length > 0) {
        			this.divSearch.form.edtNO_ID.set_value(arr[0]["NO_ID"]);
        		}
        		else
        		{
        			this.dsSearch.setColumn(0, "NO_ID", "");
        			this.divSearch.form.edtNO_ID.set_value("");
        		}
        	}
        }
        /************************************************************************
         * 그리드 이벤트
         ************************************************************************/
        this.divData_objGrid_oncelldblclick = function(obj,e)
        {
        	this.fnInsert();
        };


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
            this.divData.form.objGrid.addEventHandler("oncelldblclick",this.divData_objGrid_oncelldblclick,this);
            this.dsSearch.addEventHandler("onvaluechanged",this.dsSearch_onvaluechanged,this);
        };
        this.loadIncludeScript("DSA_CAREER.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
