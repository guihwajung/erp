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
            this.set_titletext("등록심의항목");
            if (Form == this.constructor)
            {
                this._setFormPosition(1280,720);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("dsList", this);
            obj._setContents("");
            this.addChild(obj.name, obj);


            obj = new Dataset("_dsProc", this);
            obj._setContents("<ColumnInfo><Column id=\"TARGET\" type=\"STRING\" size=\"256\"/><Column id=\"SP\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"TARGET\">select</Col><Col id=\"SP\">DCAPR_JUDGEITEM_SELECT</Col></Row><Row><Col id=\"TARGET\">insert</Col><Col id=\"SP\">DCAPR_JUDGEITEM_INSERT</Col></Row><Row><Col id=\"TARGET\">update</Col><Col id=\"SP\">DCAPR_JUDGEITEM_UPDATE</Col></Row><Row><Col id=\"TARGET\">delete</Col><Col id=\"SP\">DCAPR_JUDGEITEM_DELETE</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsSearch", this);
            obj._setContents("<ColumnInfo><Column id=\"CD_JUDGEKIND\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row/></Rows>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Div("divSearch","0.0","10.0",null,"46.0","0",null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_cssclass("div_SEARCH_Bg");
            obj.set_formscrolltype("none");
            this.addChild(obj.name, obj);

            obj = new Static("staCD_SYSTEM","0.0","10.0","118.0","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("2");
            obj.set_text("등록심사기준");
            obj.set_cssclass("sta_WF_SchLabelE");
            this.divSearch.addChild(obj.name, obj);

            obj = new Div("ccfCD_JUDGEKIND","staCD_SYSTEM:0.0","10.0","240","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.getSetter("CodeFindName").set("DCX_CFJUDGEKIND");
            obj.getSetter("CDTextWidth").set("100");
            obj.set_taborder("2");
            obj.getSetter("FitToContents").set("true");
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
            obj = new BindItem("item1","divSearch.form.ccfCD_JUDGEKIND.form.CDTextBox","value","dsSearch","CD_JUDGEKIND");
            this.addChild(obj.name, obj);
            obj.bind();
            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {
            this._addPreloadList("fdl","cmm::cmmCodeFind.xfdl");
        };
        
        // User Script
        this.registerScript("DCA_JUDGEITEM.xfdl", function() {
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
        	if(!this.gfnIsNull(this.getOwnerFrame().CD_JUDGEKIND)) {
        		this.dsSearch.setColumn(0, "CD_JUDGEKIND", this.getOwnerFrame().CD_JUDGEKIND);
        		this.ccfCD_JUDGEKIND.form.DSTextBox.set_value(this.getOwnerFrame().DS_JUDGEKIND);
        		this.FormBtns.Select.click();

        		this.ccfCD_JUDGEKIND.form.fnFitToContents();
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
        	this.btn1 = this.gfnFormButtonAdd("btnItemDetail", "fnItemDetail");
        };

        /************************************************************************
         * 변수 선언
         ************************************************************************/
        this.fnSetVariable = function() {
        	this.ccfCD_JUDGEKIND = this.divSearch.form.ccfCD_JUDGEKIND;

        	this.dxGrid = this.divData.form.objGrid;
        };

        /************************************************************************
         * 이벤트 설정
         ************************************************************************/
        this.fnSetEvent = function() {

        	// 그리드 초기화
        	this.gfnGridInit(this.dxGrid, this.dsList, "DC", "DCA_JUDGEITEM");
        };

        /************************************************************************
         * 파라미터 설정
         ************************************************************************/
        this.fnSetParameter = function() {

        	this.dsSelect = new Dataset();
        	this.dsSelect.addColumn("CD_JUDGEKIND", "string");
        	this.dsSelect.addColumn("CD_LEVEL", "string");
        	this.dsSelect.addColumn("CD_CODE", "string");

        	this.dsInsert = new Dataset();
        	this.dsInsert.addColumn("CD_JUDGEKIND", "string");
        	this.dsInsert.addColumn("CD_TYPE", "string");
        	this.dsInsert.addColumn("CD_LEVEL", "string");
        	this.dsInsert.addColumn("CD_CODE", "string");
        	this.dsInsert.addColumn("DS_CODE", "string");
        	this.dsInsert.addColumn("AM_JUDGE", "bigdecimal");
        	this.dsInsert.addColumn("RT_WEIGHT", "bigdecimal");
        	this.dsInsert.addColumn("RM_BIGO", "string");
        	this.dsInsert.addColumn("YN_ADDITIONAL", "string");
        	this.dsInsert.addColumn("YN_DIRECTINPUT", "string");

        	this.dsUpdate = new Dataset();
        	this.dsUpdate.addColumn("CD_JUDGEKIND", "string");
        	this.dsUpdate.addColumn("CD_TYPE", "string");
        	this.dsUpdate.addColumn("CD_LEVEL", "string");
        	this.dsUpdate.addColumn("CD_CODE", "string");
        	this.dsUpdate.addColumn("DS_CODE", "string");
        	this.dsUpdate.addColumn("AM_JUDGE", "bigdecimal");
        	this.dsUpdate.addColumn("RT_WEIGHT", "bigdecimal");
        	this.dsUpdate.addColumn("RM_BIGO", "string");
        	this.dsUpdate.addColumn("YN_ADDITIONAL", "string");
        	this.dsUpdate.addColumn("YN_DIRECTINPUT", "string");

        	this.dsDelete = new Dataset();
        	this.dsDelete.addColumn("CD_JUDGEKIND", "string");
        	this.dsDelete.addColumn("CD_LEVEL", "string");
        	this.dsDelete.addColumn("CD_CODE", "string");
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

        	this.dsSelect.setColumn(0, "CD_JUDGEKIND", this.dsSearch.getColumn(0, "CD_JUDGEKIND"));
        	this.dsSelect.setColumn(0, "CD_LEVEL", "");
        	this.dsSelect.setColumn(0, "CD_CODE", "00");

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

        	this.dsList.setColumn(nrow, "CD_JUDGEKIND", this.dsSearch.getColumn(0, "CD_JUDGEKIND"));
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

        	for (var i = 0; i < this.dsList.rowcount; i++) {
        		var flag = this.gfnGetFlag(this.dsList, i);
        		switch(flag) {
        			case "I":
        				var nrow = this.dsInsert.addRow();
        				this.dsInsert.setColumn(nrow, "CD_JUDGEKIND", this.dsList.getColumn(i, "CD_JUDGEKIND"));
        				this.dsInsert.setColumn(nrow, "CD_TYPE", "");
        				this.dsInsert.setColumn(nrow, "CD_LEVEL", this.dsList.getColumn(i, "CD_LEVEL"));
        				this.dsInsert.setColumn(nrow, "CD_CODE", "00");
        				this.dsInsert.setColumn(nrow, "DS_CODE", this.dsList.getColumn(i, "DS_CODE"));
        				this.dsInsert.setColumn(nrow, "AM_JUDGE", this.dsList.getColumn(i, "AM_JUDGE"));
        				this.dsInsert.setColumn(nrow, "RT_WEIGHT", 0);
        				this.dsInsert.setColumn(nrow, "RM_BIGO", this.dsList.getColumn(i, "RM_BIGO"));
        				this.dsInsert.setColumn(nrow, "YN_ADDITIONAL", "N");
        				this.dsInsert.setColumn(nrow, "YN_DIRECTINPUT", "N");
        				break;

        			case "U":
        				var nrow = this.dsUpdate.addRow();
        				this.dsUpdate.setColumn(nrow, "CD_JUDGEKIND", this.dsList.getColumn(i, "CD_JUDGEKIND"));
        				this.dsUpdate.setColumn(nrow, "CD_TYPE", "");
        				this.dsUpdate.setColumn(nrow, "CD_LEVEL", this.dsList.getColumn(i, "CD_LEVEL"));
        				this.dsUpdate.setColumn(nrow, "CD_CODE", "00");
        				this.dsUpdate.setColumn(nrow, "DS_CODE", this.dsList.getColumn(i, "DS_CODE"));
        				this.dsUpdate.setColumn(nrow, "AM_JUDGE", this.dsList.getColumn(i, "AM_JUDGE"));
        				this.dsUpdate.setColumn(nrow, "RT_WEIGHT", 0);
        				this.dsUpdate.setColumn(nrow, "RM_BIGO", this.dsList.getColumn(i, "RM_BIGO"));
        				this.dsUpdate.setColumn(nrow, "YN_ADDITIONAL", "N");
        				this.dsUpdate.setColumn(nrow, "YN_DIRECTINPUT", "N");

        				break;

        			case "D":
        				var nrow = this.dsDelete.addRow();
        				this.dsDelete.setColumn(nrow, "CD_JUDGEKIND", this.dsList.getColumn(i, "CD_JUDGEKIND"));
        				this.dsDelete.setColumn(nrow, "CD_LEVEL", this.dsList.getColumn(i, "CD_LEVEL"));
        				this.dsDelete.setColumn(nrow, "CD_CODE", "00");
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

        	if (this.gfnIsNull(this.dsSearch.getColumn(0,"CD_JUDGEKIND"))) {
        		validate = false;
        		// Alert후 실행할 처리
        		this.fnVaidateCallback = function() {
        			this.ccfCD_JUDGEKIND.form.CDTextBox.setFocus();
        		}
        		this.gfnAlert("등록심사기준을 입력하세요.", "fnVaidateCallback");
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
        this.fnItemDetail = function() {
        	var param = {};
        	param.CD_JUDGEKIND = this.dsList.getColumn(this.dsList.rowposition, "CD_JUDGEKIND");
        	param.DS_JUDGEKIND = this.ccfCD_JUDGEKIND.form.DSTextBox.value;
        	param.CD_LEVEL = this.dsList.getColumn(this.dsList.rowposition, "CD_LEVEL");
        	param.DS_LEVEL = this.dsList.getColumn(this.dsList.rowposition, "DS_CODE");

        	// 화면 오픈.
        	// CD_MODULE은 보통 같은 모듈에서 호출하는 경우가 많으니 this.FormInfo.CD_MODULE 사용
        	// 타 모듈 화면 호출시 지정할것.
        	this.gfnFormOpen(this.FormInfo.CD_MODULE, "DCA_JUDGEITEMDETAIL", "", param);
        }

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
        this.loadIncludeScript("DCA_JUDGEITEM.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
