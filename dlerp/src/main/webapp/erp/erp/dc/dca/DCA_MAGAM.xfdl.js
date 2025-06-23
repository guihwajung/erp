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
            obj._setContents("<ColumnInfo><Column id=\"TARGET\" type=\"STRING\" size=\"256\"/><Column id=\"SP\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"TARGET\">select</Col><Col id=\"SP\">DCZPR_MAGAM_SELECT</Col></Row><Row><Col id=\"TARGET\">insert</Col><Col id=\"SP\">DCZPR_MAGAM_INSERT</Col></Row><Row><Col id=\"TARGET\">update</Col><Col id=\"SP\">DCZPR_MAGAM_UPDATE</Col></Row><Row><Col id=\"TARGET\">delete</Col><Col id=\"SP\">DCZPR_MAGAM_DELETE</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsSearch", this);
            obj._setContents("<ColumnInfo><Column id=\"YR_MAGAM\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row/></Rows>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Div("divSearch","0.0","10.0",null,"46.0","0",null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_cssclass("div_SEARCH_Bg");
            obj.set_formscrolltype("none");
            this.addChild(obj.name, obj);

            obj = new Static("staCD_SYSTEM","0.0","10.0","92.0","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("2");
            obj.set_text("심사년도");
            obj.set_cssclass("sta_WF_SchLabel");
            this.divSearch.addChild(obj.name, obj);

            obj = new Div("ctclYR_MAGAM","staCD_SYSTEM:0.0","10.0","60","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("3");
            obj.set_url("cmm::cmmCalYY.xfdl");
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
            obj = new BindItem("item1","divSearch.form.ctclYR_MAGAM.form.TextBox","value","dsSearch","YR_MAGAM");
            this.addChild(obj.name, obj);
            obj.bind();
            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {
            this._addPreloadList("fdl","cmm::cmmCalYY.xfdl");
        };
        
        // User Script
        this.registerScript("DCA_MAGAM.xfdl", function() {
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

        	this.ctclYR_MAGAM.form.TextBox.set_value(this.gfnGetDate().substr(0,4));

        	this.FormBtns.Select.click();
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
        	this.ctclYR_MAGAM = this.divSearch.form.ctclYR_MAGAM;
        	this.dxGrid = this.divData.form.objGrid;
        };

        /************************************************************************
         * 이벤트 설정
         ************************************************************************/
        this.fnSetEvent = function() {
        	// 그리드 초기화
        	this.gfnGridInit(this.dxGrid, this.dsList, "DC", "DCA_MAGAM");

        	this.dxGrid.EnterCell = "fnGrid_EnterCell";
        	this.dxGrid.AfterEdit = "fnGrid_AfterEdit";
        };

        /************************************************************************
         * 파라미터 설정
         ************************************************************************/
        this.fnSetParameter = function() {

        	this.dsSelect = new Dataset();
        	this.dsSelect.addColumn("YR_MAGAM", "string");
        	this.dsSelect.addColumn("NO_SEQ", "string");

        	this.dsInsert = new Dataset();
        	this.dsInsert.addColumn("YR_MAGAM", "string");
        	this.dsInsert.addColumn("FR_RECOMMEND", "string");
        	this.dsInsert.addColumn("TO_RECOMMEND", "string");
        	this.dsInsert.addColumn("FR_SELECTION", "string");
        	this.dsInsert.addColumn("TO_SELECTION", "string");
        	this.dsInsert.addColumn("FR_JUDGE", "string");
        	this.dsInsert.addColumn("TO_JUDGE", "string");
        	this.dsInsert.addColumn("ID_MAGAM", "string");
        	this.dsInsert.addColumn("CD_JUDGEKIND", "string");
        	this.dsInsert.addColumn("NO_SEQ", "string");

        	this.dsUpdate = new Dataset();
        	this.dsUpdate.addColumn("YR_MAGAM", "string");
        	this.dsUpdate.addColumn("FR_RECOMMEND", "string");
        	this.dsUpdate.addColumn("TO_RECOMMEND", "string");
        	this.dsUpdate.addColumn("FR_SELECTION", "string");
        	this.dsUpdate.addColumn("TO_SELECTION", "string");
        	this.dsUpdate.addColumn("FR_JUDGE", "string");
        	this.dsUpdate.addColumn("TO_JUDGE", "string");
        	this.dsUpdate.addColumn("ID_MAGAM", "string");
        	this.dsUpdate.addColumn("CD_JUDGEKIND", "string");
        	this.dsUpdate.addColumn("NO_SEQ", "string");

        	this.dsDelete = new Dataset();
        	this.dsDelete.addColumn("YR_MAGAM", "string");
        	this.dsDelete.addColumn("NO_SEQ", "string");
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

        	this.dsSelect.setColumn(0, "YR_MAGAM", this.dsSearch.getColumn(0, "YR_MAGAM"));
        	this.dsSelect.setColumn(0, "NO_SEQ", "");

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
        	this.dsList.setColumn(nrow, "YR_MAGAM", this.dsSearch.getColumn(0, "YR_MAGAM"));
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
        				this.dsInsert.setColumn(nrow, "YR_MAGAM", this.dsList.getColumn(i, "YR_MAGAM"));
        				this.dsInsert.setColumn(nrow, "FR_RECOMMEND", this.dsList.getColumn(i, "FR_RECOMMEND"));
        				this.dsInsert.setColumn(nrow, "TO_RECOMMEND", this.dsList.getColumn(i, "TO_RECOMMEND"));
        				this.dsInsert.setColumn(nrow, "FR_SELECTION", this.dsList.getColumn(i, "FR_SELECTION"));
        				this.dsInsert.setColumn(nrow, "TO_SELECTION", this.dsList.getColumn(i, "TO_SELECTION"));
        				this.dsInsert.setColumn(nrow, "FR_JUDGE", this.dsList.getColumn(i, "FR_JUDGE"));
        				this.dsInsert.setColumn(nrow, "TO_JUDGE", this.dsList.getColumn(i, "TO_JUDGE"));
        				this.dsInsert.setColumn(nrow, "ID_MAGAM", this.dsList.getColumn(i, "ID_MAGAM"));
        				this.dsInsert.setColumn(nrow, "CD_JUDGEKIND", this.dsList.getColumn(i, "CD_JUDGEKIND"));
        				this.dsInsert.setColumn(nrow, "NO_SEQ", this.dsList.getColumn(i, "NO_SEQ"));
        				break;

        			case "U":
        				var nrow = this.dsUpdate.addRow();
        				this.dsUpdate.setColumn(nrow, "YR_MAGAM", this.dsList.getColumn(i, "YR_MAGAM"));
        				this.dsUpdate.setColumn(nrow, "FR_RECOMMEND", this.dsList.getColumn(i, "FR_RECOMMEND"));
        				this.dsUpdate.setColumn(nrow, "TO_RECOMMEND", this.dsList.getColumn(i, "TO_RECOMMEND"));
        				this.dsUpdate.setColumn(nrow, "FR_SELECTION", this.dsList.getColumn(i, "FR_SELECTION"));
        				this.dsUpdate.setColumn(nrow, "TO_SELECTION", this.dsList.getColumn(i, "TO_SELECTION"));
        				this.dsUpdate.setColumn(nrow, "FR_JUDGE", this.dsList.getColumn(i, "FR_JUDGE"));
        				this.dsUpdate.setColumn(nrow, "TO_JUDGE", this.dsList.getColumn(i, "TO_JUDGE"));
        				this.dsUpdate.setColumn(nrow, "ID_MAGAM", this.dsList.getColumn(i, "ID_MAGAM"));
        				this.dsUpdate.setColumn(nrow, "CD_JUDGEKIND", this.dsList.getColumn(i, "CD_JUDGEKIND"));
        				this.dsUpdate.setColumn(nrow, "NO_SEQ", this.dsList.getColumn(i, "NO_SEQ"));
        				break;

        			case "D":
        				var nrow = this.dsDelete.addRow();
        				this.dsDelete.setColumn(nrow, "YR_MAGAM", this.dsList.getColumn(i, "YR_MAGAM"));
        				this.dsDelete.setColumn(nrow, "NO_SEQ", this.dsList.getColumn(i, "NO_SEQ"));
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
        	/*
        	if (this.gfnIsNull(this.dsSearch.getColumn(0,"CD_SYSTEM"))) {
        		validate = false;
        		// Alert후 실행할 처리
        		this.fnVaidateCallback = function() {
        			this.ccfCD_SYSTEM.form.CDTextBox.setFocus();
        		}
        		this.gfnAlert("시스템을 입력하세요.", "fnVaidateCallback");
        	}
        	*/
        	return validate;
        };

        this.fnSaveValidate = function() {
        	var validate = true;


        	for(var i = 0; i < this.dsList.rowcount-1; i++) {
        		var yr_magam = this.dsList.getColumn(i, "YR_MAGAM");
        		var no_seq = this.dsList.getColumn(i, "NO_SEQ");
        		for(var j = i+1; j < this.dsList.rowcount; j++) {
        			if(yr_magam == this.dsList.getColumn(j, "YR_MAGAM")
        				&& no_seq == this.dsList.getColumn(j, "NO_SEQ")) {
        				validate = false;
        				this.dxGrid.setCellPos(this.dxGrid.getBindCellIndex("body", "NO_SEQ"), i);
        				this.gfnAlert("심사년도에 회차는 중복될 수 없습니다.");
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

        /************************************************************************
         * 그리드 이벤트
         ************************************************************************/
        this.fnGrid_EnterCell = function(obj, row, cell) {
        	var colnm = this.gfnGridGetBindColumnNameByIndex(this.dxGrid, cell);
        	switch(colnm) {
        		case "YR_MAGAM":
        		case "FR_SELECTION":
        		case "TO_SELECTION":
        		case "CD_JUDGEKIND":
        		case "FR_RECOMMEND":
        		case "TO_RECOMMEND":
        		case "FR_JUDGE":
        		case "TO_JUDGE":
        		case "ID_MAGAM":
        		case "NO_SEQ":
        			if(this.dsList.getColumn(row, "TY_MAGAM") == "마감") {
        				return false;
        			}
        			break;
        	}
        }

        this.fnGrid_AfterEdit = function(obj,e) {
        	if(e.columnid == "YR_MAGAM") {
        		if(e.oldvalue != e.newvalue) {
        			if(this.dsList.getColumn(this.dsList.rowposition, this.ucFlag) == "I"
        				&& !this.gfnIsNull(e.newvalue) && this.gfnIsNull(this.dsList.getColumn(this.dsList.rowposition, "NO_SEQ"))) {
        				this.dsList.setColumn(this.dsList.rowposition, "NO_SEQ", this.fnGetNextSeq());
        			}
        		}
        	}
        	else if(e.columnid == "NO_SEQ") {
        		if(e.oldvalue != e.newvalue) {
        			if(!this.gfnIsNull(e.newvalue)) {
        				var no_seq = this.dsList.getColumn(this.dsList.rowposition, "NO_SEQ");
        				this.dsList.setColumn(this.dsList.rowposition, "NO_SEQ", new String(no_seq).padLeft(3, "0"));
        			}
        		}
        	}
        }

        this.fnGetNextSeq = function() {
        	var curYR_MAGAM = this.dsList.getColumn(this.dsList.rowposition, "YR_MAGAM");
        	var maxSeq = 0;
        	var tmpSeq = 0;
        	for(var i = 0; i < this.dsList.rowcount; i++) {
        		if(this.dsList.getColumn(i, "YR_MAGAM") == curYR_MAGAM && !this.gfnIsNull(this.dsList.getColumn(i, "NO_SEQ"))) {
        			tmpSeq = nexacro.toNumber(this.dsList.getColumn(i, "NO_SEQ"));
        			if(tmpSeq > maxSeq) {
        				maxSeq = tmpSeq;
        			}
        		}
        	}
        	if(maxSeq <= 0) maxSeq = 1;
        	else maxSeq += 1;

        	return new String(maxSeq).padLeft(3,"0");
        }


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
        this.loadIncludeScript("DCA_MAGAM.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
