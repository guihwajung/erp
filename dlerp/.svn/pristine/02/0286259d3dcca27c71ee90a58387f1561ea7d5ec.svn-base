(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("DWE_PRSCOME");
            this.set_titletext("공정/매출/손익보고");
            if (Form == this.constructor)
            {
                this._setFormPosition(1280,720);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("dsList", this);
            obj._setContents("");
            this.addChild(obj.name, obj);


            obj = new Dataset("_dsProc", this);
            obj._setContents("<ColumnInfo><Column id=\"TARGET\" type=\"STRING\" size=\"256\"/><Column id=\"SP\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"TARGET\">select</Col><Col id=\"SP\">DWEPR_PRSCOME_SELECT</Col></Row><Row><Col id=\"TARGET\">save</Col><Col id=\"SP\">DWEPR_PRSCOME_SAVE</Col></Row><Row><Col id=\"TARGET\">save_prs</Col><Col id=\"SP\">DWEPR_PRSCOME_CREATE</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsSearch", this);
            obj._setContents("<ColumnInfo><Column id=\"CD_SITE\" type=\"STRING\" size=\"256\"/><Column id=\"YM_WORK\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"CD_SITE\"/><Col id=\"YM_WORK\"/></Row></Rows>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Div("divSearch","0.0","10.0",null,"46.0","0",null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_cssclass("div_SEARCH_Bg");
            obj.set_text("");
            this.addChild(obj.name, obj);

            obj = new Static("staCD_SITE","0.0","10.0","92.0","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("2");
            obj.set_text("현장코드");
            obj.set_cssclass("sta_WF_SchLabelE");
            this.divSearch.addChild(obj.name, obj);

            obj = new Div("ccfCD_SITE","staCD_SITE:0.0","10.0","250","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.getSetter("CodeFindName").set("DZX_CFSITE");
            obj.getSetter("CDTextWidth").set("80");
            obj.set_taborder("0");
            obj.set_url("cmm::cmmCodeFind.xfdl");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("staYM_WORK","ccfCD_SITE:0.0","10.0","92.0","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("1");
            obj.set_text("기준년도");
            obj.set_cssclass("sta_WF_SchLabelE");
            this.divSearch.addChild(obj.name, obj);

            obj = new Div("ctclYM_WORK","staYM_WORK:0.0","10.0","100","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("2");
            obj.set_url("cmm::cmmCalYY.xfdl");
            this.divSearch.addChild(obj.name, obj);

            obj = new Div("divData","0","divSearch:10",null,null,"0","0",null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_cssclass("div_DATA_Bg");
            this.addChild(obj.name, obj);

            obj = new Grid("objGrid","0","0",null,null,"0","0",null,null,null,null,this.divData.form);
            obj.set_taborder("0");
            obj._setContents("<Formats><Format id=\"default\"/></Formats>");
            this.divData.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this
            obj = new Layout("default","",this._adjust_width,this._adjust_height,this,function(p){});
            this.addLayout(obj.name, obj);
            
            // BindItem Information
            obj = new BindItem("item0","divSearch.form.ccfCD_SITE.form.CDTextBox","value","dsSearch","CD_SITE");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item1","divSearch.form.ctclYM_WORK.form.TextBox","value","dsSearch","YM_WORK");
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
        this.registerScript("DWE_PRSCOME_YY.xfdl", function() {
        this.DWE_PRSCOME_onload = function(obj,e)
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

           //this.fnSetCombo();

           if(!this.gfnIsNull(this.getOwnerFrame().CD_SITE))
        	{
        		this.dsSearch.setColumn(0, "CD_SITE", this.getOwnerFrame().CD_SITE);
        		this.divSearch.form.ccfCD_SITE.form.DSTextBox.set_value(this.getOwnerFrame().DS_SITE);

        		/*this.FormBtns.Select.click();*/
        	}

           var today = this.gfnGetDate();
        	this.dsSearch.setColumn(0, "YM_WORK", today.substr(0,4));
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
        	this.btnCreate = this.gfnFormButtonAdd("btnCreate", "fnCreate");
        };

        /************************************************************************
         * 변수 선언
         ************************************************************************/
        this.fnSetVariable = function() {
           this.ccfCD_SITE = this.divSearch.form.ccfCD_SITE;
           this.ctclYM_WORK = this.divSearch.form.ctclYM_WORK;

           this.dxGrid = this.divData.form.objGrid;
        };

        /************************************************************************
         * 이벤트 설정
         ************************************************************************/
        this.fnSetEvent = function() {
           this.gfnGridInit(this.dxGrid, this.dsList, "DW", "DWE_PRSCOME_YY");
           this.dxGrid.EnterCell = "fnGrid_EnterCell";
        }

        /************************************************************************
         * 파라미터 설정
         ************************************************************************/
        this.fnSetParameter = function() {
            this.dsSelect = new Dataset();
        	this.dsSelect.addColumn("TY_WRK", "string");
            this.dsSelect.addColumn("CD_SITE", "string");
            this.dsSelect.addColumn("YM_WORK", "string");

        	this.dsSave = new Dataset();
        	this.dsSave.addColumn("TY_WRK", "string");
        	this.dsSave.addColumn("CD_SITE", "string");
        	this.dsSave.addColumn("YM_WORK", "string");
        	this.dsSave.addColumn("LIST_1", "string");
        	this.dsSave.addColumn("LIST_2", "string");
        	this.dsSave.addColumn("M01", "bigint");
        	this.dsSave.addColumn("M02", "bigint");
        	this.dsSave.addColumn("M03", "bigint");
        	this.dsSave.addColumn("M04", "bigint");
        	this.dsSave.addColumn("M05", "bigint");
        	this.dsSave.addColumn("M06", "bigint");
        	this.dsSave.addColumn("M07", "bigint");
        	this.dsSave.addColumn("M08", "bigint");
        	this.dsSave.addColumn("M09", "bigint");
        	this.dsSave.addColumn("M10", "bigint");
        	this.dsSave.addColumn("M11", "bigint");
        	this.dsSave.addColumn("M12", "bigint");

        	this.dsCreate = new Dataset();
        	this.dsCreate.addColumn("TY_WRK", "string");
        	this.dsCreate.addColumn("CD_SITE", "string");
        	this.dsCreate.addColumn("YM_WORK", "string");
        }


        /************************************************************************
         * 버튼 이벤트
         ************************************************************************/
          /*
          *	조회 버튼
          */
        this.fnSelect = function() {
        	if (!this.fnSelectValidate()) return false;

        	this.gfnGridBeforeSelect(this.dxGrid);
        	this.dsSelect.clearData();
        	this.dsSelect.addRow();

        	this.dsSelect.setColumn(0, "TY_WRK", "P");
        	this.dsSelect.setColumn(0, "CD_SITE", this.divSearch.form.ccfCD_SITE.form.CDTextBox.value);
        	this.dsSelect.setColumn(0, "YM_WORK", this.divSearch.form.ctclYM_WORK.form.TextBox.value);

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
        	if (!this.gfnGridValidate(this.dxGrid)) return;

        	this.dxGrid.updateToDataset();

        	this.dsSave.clearData();

        	for (var i = 0; i < this.dsList.rowcount; i++) {
        		var flag = this.gfnGetFlag(this.dsList, i);
        		switch(flag) {
        			case "I":
        			case "U":
        			case "D":
        				var nrow = this.dsSave.addRow();
        				this.dsSave.setColumn(nrow, "TY_WRK", "U");
        				this.dsSave.setColumn(nrow, "CD_SITE", this.dsSearch.getColumn(0, "CD_SITE"));
        				this.dsSave.setColumn(nrow, "YM_WORK", this.dsSearch.getColumn(0, "YM_WORK").substr(0,4));
        				this.dsSave.setColumn(nrow, "LIST_1", this.dsList.getColumn(i, "LIST_1"));
        				this.dsSave.setColumn(nrow, "LIST_2", this.dsList.getColumn(i, "LIST_2"));
        				this.dsSave.setColumn(nrow, "M01", this.dsList.getColumn(i, "M01"));
        				this.dsSave.setColumn(nrow, "M02", this.dsList.getColumn(i, "M02"));
        				this.dsSave.setColumn(nrow, "M03", this.dsList.getColumn(i, "M03"));
        				this.dsSave.setColumn(nrow, "M04", this.dsList.getColumn(i, "M04"));
        				this.dsSave.setColumn(nrow, "M05", this.dsList.getColumn(i, "M05"));
        				this.dsSave.setColumn(nrow, "M06", this.dsList.getColumn(i, "M06"));
        				this.dsSave.setColumn(nrow, "M07", this.dsList.getColumn(i, "M07"));
        				this.dsSave.setColumn(nrow, "M08", this.dsList.getColumn(i, "M08"));
        				this.dsSave.setColumn(nrow, "M09", this.dsList.getColumn(i, "M09"));
        				this.dsSave.setColumn(nrow, "M10", this.dsList.getColumn(i, "M10"));
        				this.dsSave.setColumn(nrow, "M11", this.dsList.getColumn(i, "M11"));
        				this.dsSave.setColumn(nrow, "M12", this.dsList.getColumn(i, "M12"));
        				break;
        		}
        	}

        	if (this.dsSave.rowcount == 0) return;

        	var strSvcId    = "save";
        	var strSvcType  = "save";
        	var inProc		= "_dsProc";
        	var inData      = "save=dsSave";
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
         *   엑셀 버튼
         */
        this.fnExcel = function() {
           this.gfnExcelExport(this.dxGrid);
        }

        /*
         *   출력 버튼
         */
        this.fnPrint = function() {
        }

        /************************************************************************
         * 서브 버튼 이벤트
         ************************************************************************/
        this.fnCreate = function(){
        	this.dsCreate.clearData();
        	this.dsCreate.addRow();

        	this.dsCreate.setColumn(0, "TY_WRK", "I");
        	this.dsCreate.setColumn(0, "CD_SITE", this.dsSearch.getColumn(0, "CD_SITE"));
        	this.dsCreate.setColumn(0, "YM_WORK", this.dsSearch.getColumn(0, "YM_WORK").substr(0,4));

        	if (this.dsCreate.rowcount == 0) return;

        	var strSvcId    = "save_prs";
        	var strSvcType  = "save";
        	var inProc		= "_dsProc";
        	var inData      = "save_prs=dsCreate";
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
        /************************************************************************
         * Validate
         ************************************************************************/
        this.fnSelectValidate = function() {
        	var validate = true;

        	if (this.gfnIsNull(this.dsSearch.getColumn(0,"CD_SITE"))) {
        		validate = false;

        		this.fnVaidateCallback = function() {
        			this.ccfCD_SITE.form.CDTextBox.setFocus();
        		}
        		this.gfnAlert("현장코드를 입력하세요.", "fnVaidateCallback");
        	}else if(this.gfnIsNull(this.dsSearch.getColumn(0,"YM_WORK"))){
        		validate = false;

        		this.fnVaidateCallback = function() {
        			this.divSearch.form.ctclYM_WORK.form.TextBox.setFocus();
        		}
        		this.gfnAlert("기준년도를 입력하세요.", "fnVaidateCallback");
        	}

        	return validate;
        };

        /************************************************************************
         * 콜백 이벤트
         ************************************************************************/
        this.fnCallback = function(svcID, errorCode, errorMsg)
        {
        	if (svcID == "select") {
        		this.gfnGridAfterSelect(this.dxGrid);
        	}
        	else if(svcID == "save"){
        		if (errorCode == 0) {
        			this.FormBtns.Select.click();
        		} else {
        			this.gfnAlert(errorMsg);
        		}
        	}
        	else if(svcID == "save_prs"){
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
        	var colnm = this.gfnGridGetBindColumnNameByIndex(this.dxGrid, cell);	// 클릭한 cell의 컬럼명

        	// 클릭했을때 클릭한 cell을 수정 가능 or 불가능 상태로 만든다.
        	// 첫번째 로우는 수정 불가능
        	if(row == 0 || row == 1 || row == 2 || row == 16){
        		return false;
        	}
         }

        /************************************************************************
         * 기타 이벤트
         ************************************************************************/
        this.dsSearch_onvaluechanged = function(obj,e)
        {
           if(e.oldvalue != e.newvalue){
        	  this.gfnGridClear(this.dxGrid);
           }
        }

        this.dsList_onvaluechanged = function(obj,e)
        {
        	if(e.oldvalue != e.newvalue){
        		/*
        		 *   개발(유지보수) 시 참고
        		 *		- 각 변수 = 각 로우의 LIST_2로 사용
        		 *		- if문 내부 계산식 나열 순서 변경 하지 말 것
        		 */
        		var list2 = this.dsList.getColumn(e.row, "LIST_2");
        		var r1_1 = 0;	// 공사매출(추정) 계획 1-1
        		var r2_1 = 0;   // 공사원가(청구) 계획 2-1
        		var r3_2 = 0;   // 원가공정율 누계 3-2
        		var r1_3 = 0;   // 공사매출(추정) % 1-3
        		var r2_3 = 0;   // 공사원가(청구) % 2-3
        		var r5_1 = 0;	// 이익 매출-원가
        		var r5_2 = 0;	// 이익 % 5-2
        		var r8_1 = 0;	// 수지차 수금-지출 8_1

        		switch(list2){
        			case "3-1" : //원가공정율 계획
        				if(e.col > 8 && e.col < 21){
        					r1_1 = nexacro.round(this.dsList.getColumn(e.row, e.columnid) / 100 * this.dsList.getColumn(e.row, "AM_DOGEUB_PROV"), 0); 		// 공사매출(추정) 계획 1-1
        					r2_1 = nexacro.round(this.dsList.getColumn(e.row, e.columnid) / 100 * this.dsList.getColumn(e.row, "AM_CPSILHENG"), 0);   		// 공사원가(청구) 계획 2-1
        					r3_2 = nexacro.round(this.dsList.getColumn(e.row, e.columnid) + this.dsList.getColumn(e.row+1, e.col-1), 1); 			 		// 원가공정율 누계 3-2
        					r1_3 = this.dsList.getColumn(1, e.columnid) != 0 ? nexacro.round((r1_1 / this.dsList.getColumn(1, e.columnid)) * 100, 1) : 0; 	// 공사매출(추정) % 1-3
        					r2_3 = this.dsList.getColumn(4, e.columnid) != 0 ? nexacro.round((r2_1 / this.dsList.getColumn(4, e.columnid)) * 100, 1) : 0;	// 공사원가(청구) % 2-3
        					r5_1 = this.dsList.getColumn(1, e.columnid) - this.dsList.getColumn(4, e.columnid);												// 이익 매출-원가
        					r5_2 = this.dsList.getColumn(1, e.columnid) != 0 ? nexacro.round((r5_1 / this.dsList.getColumn(1, e.columnid)) * 100, 1) : 0;	// 이익 % 5-2

        					this.dsList.setColumn(0, e.columnid, r1_1);
        					this.dsList.setColumn(3, e.columnid, r2_1);
        					this.dsList.setColumn(e.row+1, e.columnid, r3_2);
        					this.dsList.setColumn(2, e.columnid, r1_3);
        					this.dsList.setColumn(5, e.columnid, r2_3);
        					this.dsList.setColumn(12, e.columnid, r5_1);
        					this.dsList.setColumn(13, e.columnid, r5_2);
        				}
        			break;
        			// 6-1, 7-1 같은 로직
        			case "6-1" : // 실 수금 수금
        			case "7-1" : // 실 지출 30일
        				if(e.col > 8 && e.col < 21){
        					r8_1 = this.dsList.getColumn(14, e.columnid) - this.dsList.getColumn(15, e.columnid); // 수지차 수금-지출 8_1

        					this.dsList.setColumn(16, e.columnid, r8_1);
        				}
        			break;
        		}
        	}
        };
        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.DWE_PRSCOME_onload,this);
            this.divData.addEventHandler("ondragmove",this.divData_ondragmove,this);
            this.dsList.addEventHandler("onvaluechanged",this.dsList_onvaluechanged,this);
            this.dsSearch.addEventHandler("onvaluechanged",this.dsSearch_onvaluechanged,this);
        };
        this.loadIncludeScript("DWE_PRSCOME_YY.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
