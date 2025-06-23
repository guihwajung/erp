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
            this.set_titletext("등록심의기준표");
            if (Form == this.constructor)
            {
                this._setFormPosition(1280,720);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("dsList", this);
            obj._setContents("");
            this.addChild(obj.name, obj);


            obj = new Dataset("_dsProc", this);
            obj._setContents("<ColumnInfo><Column id=\"TARGET\" type=\"STRING\" size=\"256\"/><Column id=\"SP\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"TARGET\">select</Col><Col id=\"SP\">DCAPR_JUDGESTANDARD_SELECT</Col></Row><Row><Col id=\"TARGET\">insert</Col><Col id=\"SP\">DCAPR_JUDGESTANDARD_INSERT</Col></Row><Row><Col id=\"TARGET\">update</Col><Col id=\"SP\">DCAPR_JUDGESTANDARD_UPDATE</Col></Row><Row><Col id=\"TARGET\">delete</Col><Col id=\"SP\">DCAPR_JUDGESTANDARD_DELETE</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsSearch", this);
            obj._setContents("<ColumnInfo><Column id=\"CD_JUDGEKIND\" type=\"STRING\" size=\"256\"/><Column id=\"CD_LEVEL\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row/></Rows>");
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
            obj.set_taborder("0");
            obj.getSetter("FitToContents").set("true");
            obj.set_url("cmm::cmmCodeFind.xfdl");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("staCD_SYSTEM00","ccfCD_JUDGEKIND:0.0","10.0","118.0","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("1");
            obj.set_text("항목구분");
            obj.set_cssclass("sta_WF_SchLabel");
            this.divSearch.addChild(obj.name, obj);

            obj = new Div("ccfCD_LEVEL","staCD_SYSTEM00:0.0","10.0","200","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.getSetter("CodeFindName").set("DCX_CFJUDGEITEM_01");
            obj.getSetter("CDTextWidth").set("30");
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
            obj = new BindItem("item1","divSearch.form.ccfCD_JUDGEKIND.form.CDTextBox","value","dsSearch","CD_JUDGEKIND");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item2","divSearch.form.ccfCD_LEVEL.form.CDTextBox","value","dsSearch","CD_LEVEL");
            this.addChild(obj.name, obj);
            obj.bind();
            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {
            this._addPreloadList("fdl","cmm::cmmCodeFind.xfdl");
        };
        
        // User Script
        this.registerScript("DCA_JUDGESTANDARD.xfdl", function() {
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
        	this.ccfCD_JUDGEKIND = this.divSearch.form.ccfCD_JUDGEKIND;
        	this.ccfCD_LEVEL = this.divSearch.form.ccfCD_LEVEL;
        	this.ctxtAM_JUDGE = this.divSearch.form.ctxtAM_JUDGE;

        	this.dxGrid = this.divData.form.objGrid;
        };

        /************************************************************************
         * 이벤트 설정
         ************************************************************************/
        this.fnSetEvent = function() {
        	this.ccfCD_LEVEL.BeforeUserDataSetParam = "fnBeforeUserDataSetParam";

        	this.dxGrid.BeforeUserDataSetParam = "fnGrid_BeforeUserDataSetParam";

        	// 그리드 초기화
        	this.gfnGridInit(this.dxGrid, this.dsList, "DC", "DCA_JUDGESTANDARD");
        };

        /************************************************************************
         * 파라미터 설정
         ************************************************************************/
        this.fnSetParameter = function() {

        	this.dsSelect = new Dataset();
        	this.dsSelect.addColumn("CD_JUDGEKIND", "string");
        	this.dsSelect.addColumn("CD_LEVEL", "string");

        	this.dsInsert = new Dataset();
        	this.dsInsert.addColumn("CD_JUDGEKIND", "string");
        	this.dsInsert.addColumn("CD_LEVEL", "string");
        	this.dsInsert.addColumn("CD_CODE", "string");
        	this.dsInsert.addColumn("CD_STANDARD", "string");
        	this.dsInsert.addColumn("DS_STANDARD", "string");
        	this.dsInsert.addColumn("AM_STANDARD", "bigdecimal");
        	this.dsInsert.addColumn("RM_BIGO", "string");

        	this.dsUpdate = new Dataset();
        	this.dsUpdate.addColumn("CD_JUDGEKIND", "string");
        	this.dsUpdate.addColumn("CD_LEVEL", "string");
        	this.dsUpdate.addColumn("CD_CODE", "string");
        	this.dsUpdate.addColumn("CD_STANDARD", "string");
        	this.dsUpdate.addColumn("DS_STANDARD", "string");
        	this.dsUpdate.addColumn("AM_STANDARD", "bigdecimal");
        	this.dsUpdate.addColumn("RM_BIGO", "string");
        	this.dsUpdate.addColumn("CD_STANDARD_OLD", "string");

        	this.dsDelete = new Dataset();
        	this.dsDelete.addColumn("CD_JUDGEKIND", "string");
        	this.dsDelete.addColumn("CD_LEVEL", "string");
        	this.dsDelete.addColumn("CD_CODE", "string");
        	this.dsDelete.addColumn("CD_STANDARD", "string");
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
        	this.dsSelect.setColumn(0, "CD_LEVEL", this.dsSearch.getColumn(0, "CD_LEVEL"));

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

        	// 저장 체크
        	if (!this.fnSaveValidate()) return;

        	this.dxGrid.updateToDataset();

        	this.dsInsert.clearData();
        	this.dsUpdate.clearData();
        	this.dsDelete.clearData();

        	for (var i = 0; i < this.dsList.rowcount; i++) {
        		var flag = this.gfnGetFlag(this.dsList, i);
        		switch(flag) {
        			case "I":
        				var nrow = this.dsInsert.addRow();
        				this.dsInsert.setColumn(nrow, "CD_JUDGEKIND", this.dsSearch.getColumn(0, "CD_JUDGEKIND"));
        				this.dsInsert.setColumn(nrow, "CD_LEVEL", this.dsList.getColumn(i, "CD_LEVEL"));
        				this.dsInsert.setColumn(nrow, "CD_CODE", this.dsList.getColumn(i, "CD_CODE"));
        				this.dsInsert.setColumn(nrow, "CD_STANDARD", this.dsList.getColumn(i, "CD_STANDARD"));
        				this.dsInsert.setColumn(nrow, "DS_STANDARD", this.dsList.getColumn(i, "DS_STANDARD"));
        				this.dsInsert.setColumn(nrow, "AM_STANDARD", this.dsList.getColumn(i, "AM_STANDARD"));
        				this.dsInsert.setColumn(nrow, "RM_BIGO", this.dsList.getColumn(i, "RM_BIGO"));
        				break;

        			case "U":
        				var nrow = this.dsUpdate.addRow();
        				this.dsUpdate.setColumn(nrow, "CD_JUDGEKIND", this.dsSearch.getColumn(0, "CD_JUDGEKIND"));
        				this.dsUpdate.setColumn(nrow, "CD_LEVEL", this.dsList.getColumn(i, "CD_LEVEL"));
        				this.dsUpdate.setColumn(nrow, "CD_CODE", this.dsList.getColumn(i, "CD_CODE"));
        				this.dsUpdate.setColumn(nrow, "CD_STANDARD", this.dsList.getColumn(i, "CD_STANDARD"));
        				this.dsUpdate.setColumn(nrow, "DS_STANDARD", this.dsList.getColumn(i, "DS_STANDARD"));
        				this.dsUpdate.setColumn(nrow, "AM_STANDARD", this.dsList.getColumn(i, "AM_STANDARD"));
        				this.dsUpdate.setColumn(nrow, "RM_BIGO", this.dsList.getColumn(i, "RM_BIGO"));
        				this.dsUpdate.setColumn(nrow, "CD_STANDARD_OLD", this.dsList.getColumn(i, "CD_STANDARD_OLD"));
        				break;

        			case "D":
        				var nrow = this.dsDelete.addRow();
        				this.dsDelete.setColumn(nrow, "CD_JUDGEKIND", this.dsSearch.getColumn(0, "CD_JUDGEKIND"));
        				this.dsDelete.setColumn(nrow, "CD_LEVEL", this.dsList.getColumn(i, "CD_LEVEL"));
        				this.dsDelete.setColumn(nrow, "CD_CODE", this.dsList.getColumn(i, "CD_CODE"));
        				this.dsDelete.setColumn(nrow, "CD_STANDARD", this.dsList.getColumn(i, "CD_STANDARD_OLD"));
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


        this.fnSaveValidate = function() {
        	var validate = true;

        	for(var i = 0; i < this.dsList.rowcount; i++) {
        		var am_judge = nexacro.toNumber(this.dsList.getColumn(i, "AM_JUDGE"),0);
        		var am_standard = nexacro.toNumber(this.dsList.getColumn(i, "AM_STANDARD"),0);

        		// 심사항목이 배점이 양수일때.
        		if(am_judge >= 0)
        		{
        			if(am_judge < am_standard) {
        				validate = false;
        				this.dxGrid.setCellPos(this.dxGrid.getBindCellIndex("body", "AM_STANDARD"), i);
        				this.gfnAlert("심사항목의 배점보다 심사기준배점이 클 수 없습니다.");
        				break;
        			}
        		}
        		// 심사항목이 배점이 음수일때.
        		else
        		{
        			if(am_judge > am_standard)
        			{
        				validate = false;
        				this.dxGrid.setCellPos(this.dxGrid.getBindCellIndex("body", "AM_STANDARD"), i);
        				this.gfnAlert("심사항목의 배점이 음수인 경우 심사기준배점이 더 작을 수 없습니다.");
        				break;
        			}
        			else if(am_standard > 0)
        			{
        				validate = false;
        				this.dxGrid.setCellPos(this.dxGrid.getBindCellIndex("body", "AM_STANDARD"), i);
        				this.gfnAlert("심사항목의 배점이 음수인 경우 심사기준배점은 0보다 클 수 없습니다.");
        				break;
        			}
        		}
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
        this.fnBeforeUserDataSetParam = function(id, dsUserParam, nrow) {
        	if (id == "ccfCD_LEVEL") {
        		if (this.gfnIsNull(this.dsSearch.getColumn(0, "CD_JUDGEKIND"))) {
        			this.gfnAlert("등록심사기준을 먼저 입력하세요.");
        			return false;
        		}
        		dsUserParam.setColumn(nrow, "CD_JUDGEKIND", this.dsSearch.getColumn(0, "CD_JUDGEKIND"));
        	}
        	return true;
        }

        /************************************************************************
         * 그리드 이벤트
         ************************************************************************/
         this.fnGrid_BeforeUserDataSetParam = function(id, dsUserParam, nrow)
         {
        	// 계약번호
        	if (id == "DCX_CFJUDGEITEM_01") {
        		dsUserParam.setColumn(nrow, "CD_JUDGEKIND", this.dsSearch.getColumn(0, "CD_JUDGEKIND"));
        	}
        	// 비목코드
        	else if(id == "DCX_CFJUDGEITEM_02") {
        		if(this.gfnIsNull(this.dsList.getColumn(nrow, "CD_LEVEL")))
        		{
        			this.gfnAlert("항목구분을 먼저 선택해주세요.");
        			return false;
        		}

        		dsUserParam.setColumn(nrow, "CD_JUDGEKIND", this.dsSearch.getColumn(0, "CD_JUDGEKIND"));
        		dsUserParam.setColumn(nrow, "CD_LEVEL", this.dsList.getColumn(nrow, "CD_LEVEL"));
        	}
        	return true;
         }
        /************************************************************************
         * 기타 이벤트
         ************************************************************************/
        this.dsSearch_onvaluechanged = function(obj,e)
        {
        	if(e.oldvalue != e.newvalue) {
        		this.gfnSetFormStatus(this);	// 폼상태 초기화
        		this.gfnGridClear(this.dxGrid);

        		if(e.columnid == "CD_JUDGEKIND") {
        			this.ccfCD_LEVEL.form.fnCodeFindClear();
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
        this.loadIncludeScript("DCA_JUDGESTANDARD.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
