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
            obj._setContents("<ColumnInfo><Column id=\"TARGET\" type=\"STRING\" size=\"256\"/><Column id=\"SP\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"TARGET\">select</Col><Col id=\"SP\">DQBPR_CBS_ORIGINALDATA_SELECT</Col></Row><Row><Col id=\"TARGET\">insert</Col><Col id=\"SP\">DQBPR_CBS_ORIGINALDATA_INSERT</Col></Row><Row><Col id=\"TARGET\">update</Col><Col id=\"SP\">DQBPR_CBS_ORIGINALDATA_UPDATE</Col></Row><Row><Col id=\"TARGET\">delete</Col><Col id=\"SP\">DQBPR_CBS_ORIGINALDATA_DELETE</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsSearch", this);
            obj._setContents("<ColumnInfo><Column id=\"CD_CBS\" type=\"STRING\" size=\"256\"/><Column id=\"YN_VALID1\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"YN_VALID1\"/></Row></Rows>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Div("divSearch","0.0","10.0",null,"46.0","0",null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_cssclass("div_SEARCH_Bg");
            obj.set_formscrolltype("none");
            obj.set_text("");
            this.addChild(obj.name, obj);

            obj = new Static("staCD_CBS","0.0","10.0","118.0","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("1");
            obj.set_text("CBS 코드");
            obj.set_textDecoration("none");
            obj.set_cssclass("sta_WF_SchLabel");
            this.divSearch.addChild(obj.name, obj);

            obj = new Edit("edtCD_CBS","staCD_CBS:0.0","10.0","150","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("0");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("staCD_CBS00","edtCD_CBS:0.0","10.0","118.0","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("2");
            obj.set_text("검증조건");
            obj.set_textDecoration("none");
            obj.set_cssclass("sta_WF_SchLabel");
            this.divSearch.addChild(obj.name, obj);

            obj = new Div("ccfCD_CBS00","staCD_CBS00:0.0","10.0","250","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.getSetter("CodeFindName").set("CF_CODE_DQ_C02");
            obj.getSetter("CDTextWidth").set("80");
            obj.set_taborder("3");
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
            obj = new BindItem("item0","divSearch.form.edtCD_CBS","value","dsSearch","CD_CBS");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item1","divSearch.form.ccfCD_CBS00.form.CDTextBox","value","dsSearch","YN_VALID1");
            this.addChild(obj.name, obj);
            obj.bind();
            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {
            this._addPreloadList("fdl","cmm::cmmCodeFind.xfdl");
        };
        
        // User Script
        this.registerScript("DQZ_CBS_ORIGINALDATA.xfdl", function() {
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
        	this.gfnGridInit(this.dxGrid, this.dsList, "DQ", "DQZ_CBS_ORIGINALDATA");
        };

        /************************************************************************
         * 파라미터 설정
         ************************************************************************/
        this.fnSetParameter = function() {

        	this.dsSelect = new Dataset();
        	this.dsSelect.addColumn("CD_CBS", "string");
        	this.dsSelect.addColumn("YN_VALID1", "string");

        	this.dsInsert = new Dataset();
        	this.dsInsert.addColumn("CD_LV1", "string");
        	this.dsInsert.addColumn("DS_LV1", "string");
        	this.dsInsert.addColumn("CD_LV2", "string");
        	this.dsInsert.addColumn("DS_LV2", "string");
        	this.dsInsert.addColumn("CD_LV3", "string");
        	this.dsInsert.addColumn("DS_LV3", "string");
        	this.dsInsert.addColumn("CD_LV4", "string");
        	this.dsInsert.addColumn("DS_LV4", "string");
        	this.dsInsert.addColumn("CD_LV5", "string");
        	this.dsInsert.addColumn("DS_LV5", "string");
        	this.dsInsert.addColumn("CD_LV6", "string");
        	this.dsInsert.addColumn("DS_LV6", "string");
        	this.dsInsert.addColumn("CD_LV7", "string");
        	this.dsInsert.addColumn("DS_LV7", "string");
        	this.dsInsert.addColumn("CD_ITEM", "string");
        	this.dsInsert.addColumn("DS_ITEM", "string");
        	this.dsInsert.addColumn("SZ_ITEM", "string");
        	this.dsInsert.addColumn("UT_ITEM", "string");

        	this.dsUpdate = new Dataset();
        	this.dsUpdate.addColumn("SN_NO", "int");
        	this.dsUpdate.addColumn("CD_LV1", "string");
        	this.dsUpdate.addColumn("DS_LV1", "string");
        	this.dsUpdate.addColumn("CD_LV2", "string");
        	this.dsUpdate.addColumn("DS_LV2", "string");
        	this.dsUpdate.addColumn("CD_LV3", "string");
        	this.dsUpdate.addColumn("DS_LV3", "string");
        	this.dsUpdate.addColumn("CD_LV4", "string");
        	this.dsUpdate.addColumn("DS_LV4", "string");
        	this.dsUpdate.addColumn("CD_LV5", "string");
        	this.dsUpdate.addColumn("DS_LV5", "string");
        	this.dsUpdate.addColumn("CD_LV6", "string");
        	this.dsUpdate.addColumn("DS_LV6", "string");
        	this.dsUpdate.addColumn("CD_LV7", "string");
        	this.dsUpdate.addColumn("DS_LV7", "string");
        	this.dsUpdate.addColumn("CD_ITEM", "string");
        	this.dsUpdate.addColumn("DS_ITEM", "string");
        	this.dsUpdate.addColumn("SZ_ITEM", "string");
        	this.dsUpdate.addColumn("UT_ITEM", "string");

        	this.dsDelete = new Dataset();
        	this.dsDelete.addColumn("SN_NO", "int");
        }

        /************************************************************************
         * 컨트롤 이벤트
         ************************************************************************/
         /*
          *	조회 버튼
          */
        this.fnSelect = function() {
        	//if (!this.fnSelectValidate()) return false;

        	this.gfnGridBeforeSelect(this.dxGrid);

        	this.dsSelect.clearData();
        	this.dsSelect.addRow();

        	this.dsSelect.setColumn(0, "CD_CBS", this.dsSearch.getColumn(0, "CD_CBS"));
        	this.dsSelect.setColumn(0, "YN_VALID1", this.dsSearch.getColumn(0, "YN_VALID1"));
        	/*
        	if(this.dsSearch.getColumn(0, "YN_VALID1") == "1") {
        		this.dsSelect.setColumn(0, "YN_VALID1", "Y");
        	}else{
        		this.dsSelect.setColumn(0, "YN_VALID1", "");
        	}
        	*/
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
        	// 그리드 필수항목 체크``
        	if (!this.gfnGridValidate(this.dxGrid)) return;

        	this.dxGrid.updateToDataset();

        	this.dsInsert.clearData();
        	this.dsUpdate.clearData();
        	this.dsDelete.clearData();

        	for (var i = 0; i < this.dsList.rowcount; i++) {
        		var flag = this.gfnGetFlag(this.dsList, i);
        		switch(flag) {
        			case "I":
        				var nrow = this.dsInsert.addRow();
        				this.dsInsert.setColumn(nrow, "CD_LV1", this.dsList.getColumn(i, "CD_LV1"));
        				this.dsInsert.setColumn(nrow, "DS_LV1", this.dsList.getColumn(i, "DS_LV1"));
        				this.dsInsert.setColumn(nrow, "CD_LV2", this.dsList.getColumn(i, "CD_LV2"));
        				this.dsInsert.setColumn(nrow, "DS_LV2", this.dsList.getColumn(i, "DS_LV2"));
        				this.dsInsert.setColumn(nrow, "CD_LV3", this.dsList.getColumn(i, "CD_LV3"));
        				this.dsInsert.setColumn(nrow, "DS_LV3", this.dsList.getColumn(i, "DS_LV3"));
        				this.dsInsert.setColumn(nrow, "CD_LV4", this.dsList.getColumn(i, "CD_LV4"));
        				this.dsInsert.setColumn(nrow, "DS_LV4", this.dsList.getColumn(i, "DS_LV4"));
        				this.dsInsert.setColumn(nrow, "CD_LV5", this.dsList.getColumn(i, "CD_LV5"));
        				this.dsInsert.setColumn(nrow, "DS_LV5", this.dsList.getColumn(i, "DS_LV5"));
        				this.dsInsert.setColumn(nrow, "CD_LV6", this.dsList.getColumn(i, "CD_LV6"));
        				this.dsInsert.setColumn(nrow, "DS_LV6", this.dsList.getColumn(i, "DS_LV6"));
        				this.dsInsert.setColumn(nrow, "CD_LV7", this.dsList.getColumn(i, "CD_LV7"));
        				this.dsInsert.setColumn(nrow, "DS_LV7", this.dsList.getColumn(i, "DS_LV7"));
        				this.dsInsert.setColumn(nrow, "CD_ITEM", this.dsList.getColumn(i, "CD_ITEM"));
        				this.dsInsert.setColumn(nrow, "DS_ITEM", this.dsList.getColumn(i, "DS_ITEM"));
        				this.dsInsert.setColumn(nrow, "SZ_ITEM", this.dsList.getColumn(i, "SZ_ITEM"));
        				this.dsInsert.setColumn(nrow, "UT_ITEM", this.dsList.getColumn(i, "UT_ITEM"));
        				break;

        			case "U":
        				var nrow = this.dsUpdate.addRow();
        				this.dsUpdate.setColumn(nrow, "SN_NO", this.dsList.getColumn(i, "SN_NO"));
        				this.dsUpdate.setColumn(nrow, "CD_LV1", this.dsList.getColumn(i, "CD_LV1"));
        				this.dsUpdate.setColumn(nrow, "DS_LV1", this.dsList.getColumn(i, "DS_LV1"));
        				this.dsUpdate.setColumn(nrow, "CD_LV2", this.dsList.getColumn(i, "CD_LV2"));
        				this.dsUpdate.setColumn(nrow, "DS_LV2", this.dsList.getColumn(i, "DS_LV2"));
        				this.dsUpdate.setColumn(nrow, "CD_LV3", this.dsList.getColumn(i, "CD_LV3"));
        				this.dsUpdate.setColumn(nrow, "DS_LV3", this.dsList.getColumn(i, "DS_LV3"));
        				this.dsUpdate.setColumn(nrow, "CD_LV4", this.dsList.getColumn(i, "CD_LV4"));
        				this.dsUpdate.setColumn(nrow, "DS_LV4", this.dsList.getColumn(i, "DS_LV4"));
        				this.dsUpdate.setColumn(nrow, "CD_LV5", this.dsList.getColumn(i, "CD_LV5"));
        				this.dsUpdate.setColumn(nrow, "DS_LV5", this.dsList.getColumn(i, "DS_LV5"));
        				this.dsUpdate.setColumn(nrow, "CD_LV6", this.dsList.getColumn(i, "CD_LV6"));
        				this.dsUpdate.setColumn(nrow, "DS_LV6", this.dsList.getColumn(i, "DS_LV6"));
        				this.dsUpdate.setColumn(nrow, "CD_LV7", this.dsList.getColumn(i, "CD_LV7"));
        				this.dsUpdate.setColumn(nrow, "DS_LV7", this.dsList.getColumn(i, "DS_LV7"));
        				this.dsUpdate.setColumn(nrow, "CD_ITEM", this.dsList.getColumn(i, "CD_ITEM"));
        				this.dsUpdate.setColumn(nrow, "DS_ITEM", this.dsList.getColumn(i, "DS_ITEM"));
        				this.dsUpdate.setColumn(nrow, "SZ_ITEM", this.dsList.getColumn(i, "SZ_ITEM"));
        				this.dsUpdate.setColumn(nrow, "UT_ITEM", this.dsList.getColumn(i, "UT_ITEM"));
        				break;

        			case "D":
        				var nrow = this.dsDelete.addRow();
        				this.dsDelete.setColumn(nrow, "SN_NO", this.dsList.getColumn(i, "SN_NO"));
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
        };

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

        this.fnSelectValidate = function() {
        	var validate = true;

        	if (this.gfnIsNull(this.dsSearch.getColumn(0, "CD_CBS"))) {
        		validate = false;
        		// Alert후 실행할 처리
        		this.fnVaidateCallback = function() {
        			this.divSearch.form.ccfCD_CBS.form.CDTextBox.setFocus();
        		}
        		this.gfnAlert("CBS코드를 입력하세요.", "fnVaidateCallback");
        	}

        	return validate;
        };
         */
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


        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.form_onload,this);
            this.dsSearch.addEventHandler("onvaluechanged",this.dsSearch_onvaluechanged,this);
        };
        this.loadIncludeScript("DQZ_CBS_ORIGINALDATA.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
