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
            this.set_titletext("개발진행상황");
            if (Form == this.constructor)
            {
                this._setFormPosition(1400,720);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("dsList", this);
            obj._setContents("");
            this.addChild(obj.name, obj);


            obj = new Dataset("_dsProc", this);
            obj._setContents("<ColumnInfo><Column id=\"TARGET\" type=\"STRING\" size=\"256\"/><Column id=\"SP\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"TARGET\">select</Col><Col id=\"SP\">DZZPR_DEV_TEMP_SELECT</Col></Row><Row><Col id=\"TARGET\">save</Col><Col id=\"SP\">DZZPR_DEV_TEMP_SAVE</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsSearch", this);
            obj._setContents("<ColumnInfo><Column id=\"CD_SYSTEM\" type=\"STRING\" size=\"256\"/><Column id=\"DS_SYSTEM\" type=\"STRING\" size=\"256\"/><Column id=\"YN_EXCEPT\" type=\"STRING\" size=\"256\"/><Column id=\"YN_FINISH\" type=\"STRING\" size=\"256\"/><Column id=\"DS_NAME\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"YN_EXCEPT\"/><Col id=\"DS_NAME\"/><Col id=\"YN_FINISH\"/></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsYN_EXCEPT", this);
            obj._setContents("<ColumnInfo><Column id=\"CD_CODE\" type=\"STRING\" size=\"256\"/><Column id=\"DS_CODE\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"CD_CODE\"/><Col id=\"DS_CODE\">전체</Col></Row><Row><Col id=\"CD_CODE\">Y</Col><Col id=\"DS_CODE\">제외</Col></Row><Row><Col id=\"CD_CODE\">N</Col><Col id=\"DS_CODE\">미제외</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsYN_FINISH", this);
            obj._setContents("<ColumnInfo><Column id=\"CD_CODE\" type=\"STRING\" size=\"256\"/><Column id=\"DS_CODE\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"CD_CODE\"/><Col id=\"DS_CODE\">전체</Col></Row><Row><Col id=\"CD_CODE\">Y</Col><Col id=\"DS_CODE\">완료</Col></Row><Row><Col id=\"CD_CODE\">N</Col><Col id=\"DS_CODE\">미처리</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsDS_NAME", this);
            obj._setContents("<ColumnInfo><Column id=\"CD_CODE\" type=\"STRING\" size=\"256\"/><Column id=\"DS_CODE\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"CD_CODE\"/><Col id=\"DS_CODE\">전체</Col></Row><Row><Col id=\"CD_CODE\">이중영</Col><Col id=\"DS_CODE\">이중영</Col></Row><Row><Col id=\"CD_CODE\">이종석</Col><Col id=\"DS_CODE\">이종석</Col></Row><Row><Col id=\"DS_CODE\">김지원</Col><Col id=\"CD_CODE\">김지원</Col></Row><Row><Col id=\"DS_CODE\">한정환</Col><Col id=\"CD_CODE\">한정환</Col></Row><Row><Col id=\"DS_CODE\">윤미화</Col><Col id=\"CD_CODE\">윤미화</Col></Row><Row><Col id=\"DS_CODE\">이완</Col><Col id=\"CD_CODE\">이완</Col></Row><Row><Col id=\"DS_CODE\">김창현</Col><Col id=\"CD_CODE\">김창현</Col></Row></Rows>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Div("divSearch","0","0",null,"45","0",null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_cssclass("div_SEARCH_Bg");
            this.addChild(obj.name, obj);

            obj = new Static("staCD_SYSTEM","10","10","60","25",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("0");
            obj.set_text("시스템");
            obj.set_textDecoration("underline");
            this.divSearch.addChild(obj.name, obj);

            obj = new Div("ccfCD_SYSTEM","staCD_SYSTEM:5","10","150","25",null,null,null,null,null,null,this.divSearch.form);
            obj.getSetter("CodeFindName").set("DZX_CFSYSTEM");
            obj.getSetter("CDTextWidth").set("50");
            obj.set_taborder("1");
            obj.set_url("cmm::cmmCodeFind.xfdl");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("staYN_EXCEPT","ccfCD_SYSTEM:10","10","60","25",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("2");
            obj.set_text("제외여부");
            obj.set_textDecoration("none");
            this.divSearch.addChild(obj.name, obj);

            obj = new Combo("ccboYN_EXCEPT","staYN_EXCEPT:10","10","70","25",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("3");
            obj.set_innerdataset("dsYN_EXCEPT");
            obj.set_codecolumn("CD_CODE");
            obj.set_datacolumn("DS_CODE");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("staYN_FINISH","ccboYN_EXCEPT:10","10","60","25",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("4");
            obj.set_text("완료여부");
            obj.set_textDecoration("none");
            this.divSearch.addChild(obj.name, obj);

            obj = new Combo("ccboYN_FINISH","staYN_FINISH:10","10","70","25",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("5");
            obj.set_innerdataset("dsYN_FINISH");
            obj.set_codecolumn("CD_CODE");
            obj.set_datacolumn("DS_CODE");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("staDS_NAME","ccboYN_FINISH:10","10","60","25",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("6");
            obj.set_text("개발자");
            obj.set_textDecoration("none");
            this.divSearch.addChild(obj.name, obj);

            obj = new Combo("ccboDS_NAME","staDS_NAME:10","10","90","25",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("7");
            obj.set_innerdataset("dsDS_NAME");
            obj.set_codecolumn("CD_CODE");
            obj.set_datacolumn("DS_CODE");
            this.divSearch.addChild(obj.name, obj);

            obj = new Div("divData","0","divSearch:0",null,null,"0","0",null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_cssclass("div_DATA_Bg");
            obj.set_text("");
            this.addChild(obj.name, obj);

            obj = new Grid("objGrid","0","15",null,null,"0","0",null,null,null,null,this.divData.form);
            obj.set_taborder("0");
            obj._setContents("");
            this.divData.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this
            obj = new Layout("default","",this._adjust_width,this._adjust_height,this,function(p){});
            obj.set_stepcount("0");
            this.addLayout(obj.name, obj);
            
            // BindItem Information
            obj = new BindItem("item0","divSearch.form.ccfCD_SYSTEM.form.CDTextBox","value","dsSearch","CD_SYSTEM");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item1","divSearch.form.ccfCD_SYSTEM.form.DSTextBox","value","dsSearch","DS_SYSTEM");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item2","divSearch.form.ccboYN_EXCEPT","value","dsSearch","YN_EXCEPT");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item3","divSearch.form.ccboYN_FINISH","value","dsSearch","YN_FINISH");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item4","divSearch.form.ccboDS_NAME","value","dsSearch","DS_NAME");
            this.addChild(obj.name, obj);
            obj.bind();
            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {
            this._addPreloadList("fdl","cmm::cmmCodeFind.xfdl");
        };
        
        // User Script
        this.registerScript("DZZ_DEVTEMP.xfdl", function() {
        this.objApp = this.gfnGetApplication();

        this.form_onload = function(obj,e)
        {
        	// -- 필수 -------------------//
        	this.gfnFormOnLoad(this);
        	this.gfnFormInfo(this);
        	// ---------------------------//

        	this.fnSetVariable();
        	this.fnSetButton();
        	this.fnSetExtendButton();
        	this.fnSetParameter();
        	this.fnSetEvent();

        	this.dsSearch.setColumn(0, "CD_SYSTEM", this.FormInfo.DS_PARAM);
        	this.ccfCD_SYSTEM.form.fnCodeFindLoad();

        	this.dsSearch.setColumn(0, "YN_EXCEPT", "N");
        	//this.dsSearch.setColumn(0, "DS_SYSTEM", "회계");
        	this.FormBtns.Select.click();
        };

        this.fnSetButton = function() {
        }

        this.fnSetExtendButton = function() {
        	this.Upload = this.gfnFormButtonAdd("Upload", "fnUpload");
        	this.btnOpen = this.gfnFormButtonAdd("btnOpen", "fnOpen");
        };

        /************************************************************************
         * 변수 선언
         ************************************************************************/
        this.fnSetVariable = function() {
        	this.ccfCD_SYSTEM = this.divSearch.form.ccfCD_SYSTEM;

        	this.dxGrid = this.divData.form.objGrid;
        };

        this.fnSetEvent = function() {
        	this.gfnGridInit(this.dxGrid, this.dsList, "DZ", "DZZ_DEVTEMP");

         	this.gfnGridColumnColor(this.dxGrid, "", "BACK_ReadOnly", "YN_EXCEPT=='Y'", true);

        	this.dxGrid.setCellProperty("summ", this.dxGrid.getBindCellIndex("body", "CD_MODULE"), "text", "총계");
        	this.dxGrid.setCellProperty("summ", this.dxGrid.getBindCellIndex("body", "YN_EXCEPT"), "displaytype", "text");
        	this.dxGrid.setCellProperty("summ", this.dxGrid.getBindCellIndex("body", "YN_FINISH"), "displaytype", "text");
        	this.dxGrid.setCellProperty("summ", this.dxGrid.getBindCellIndex("body", "YN_EXCEPT"), "text", "expr:dataset.getCaseCount(\"YN_EXCEPT=='Y'\")");
        	this.dxGrid.setCellProperty("summ", this.dxGrid.getBindCellIndex("body", "YN_FINISH"), "text", "expr:dataset.getCaseCount(\"YN_FINISH=='Y'\")");
        }

        this.fnSetParameter = function() {
        	this.dsSelect = new Dataset();
        	this.dsSelect.addColumn("CD_SYSTEM", "string");
        	this.dsSelect.addColumn("YN_EXCEPT", "string");
        	this.dsSelect.addColumn("YN_FINISH", "string");
        	this.dsSelect.addColumn("DS_NAME", "string");

        	this.dsSave = new Dataset();
        	this.dsSave.addColumn("TY_SAVE", "string");
        	this.dsSave.addColumn("NO_SEQ", "bigdecimal");
        	this.dsSave.addColumn("CD_SYSTEM", "string");
        	this.dsSave.addColumn("CD_MODULE", "string");
        	this.dsSave.addColumn("ID_FORM", "string");
        	this.dsSave.addColumn("NM_FORM", "string");
        	this.dsSave.addColumn("DS_NAME", "string");
        	this.dsSave.addColumn("YN_EXCEPT", "string");
        	this.dsSave.addColumn("YN_FINISH", "string");
        	this.dsSave.addColumn("DT_REQUEST", "string");
        	this.dsSave.addColumn("DT_FINISH", "string");
        	this.dsSave.addColumn("DS_BIGO", "string");
        	this.dsSave.addColumn("DS_SP", "string");
        };

        /************************************************************************
         * 컨트롤 이벤트
         ************************************************************************/
        this.fnSelect = function() {
        	if (!this.fnSelectValidation()) return;

        	this.gfnGridBeforeSelect(this.dxGrid);

        	this.dsSelect.clearData();
        	this.dsSelect.addRow();

        	this.dsSelect.setColumn(0, "CD_SYSTEM", this.gfnTrim(this.dsSearch.getColumn(0, "CD_SYSTEM")));
        	this.dsSelect.setColumn(0, "YN_EXCEPT", this.dsSearch.getColumn(0, "YN_EXCEPT"));
        	this.dsSelect.setColumn(0, "YN_FINISH", this.dsSearch.getColumn(0, "YN_FINISH"));
        	this.dsSelect.setColumn(0, "DS_NAME", this.dsSearch.getColumn(0, "DS_NAME"));

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
        };

        this.fnAdd = function() {
        	var nrow = this.gfnGridAdd(this.dxGrid);

        	this.dsList.setColumn(nrow, "CD_SYSTEM", this.dsSearch.getColumn(0, "CD_SYSTEM"));
        }

        this.fnDel = function() {
        	this.gfnGridDel(this.dxGrid);
        }

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
        				this.dsSave.setColumn(nrow, "TY_SAVE", flag);
        				this.dsSave.setColumn(nrow, "NO_SEQ", this.dsList.getColumn(i, "NO_SEQ"));
        				this.dsSave.setColumn(nrow, "CD_SYSTEM", this.gfnIsNull(this.dsList.getColumn(i, "CD_SYSTEM")) ? this.dsSearch.getColumn(0, "CD_SYSTEM") : this.dsList.getColumn(i, "CD_SYSTEM"));
        				this.dsSave.setColumn(nrow, "CD_MODULE", this.dsList.getColumn(i, "CD_MODULE"));
        				this.dsSave.setColumn(nrow, "ID_FORM", this.dsList.getColumn(i, "ID_FORM"));
        				this.dsSave.setColumn(nrow, "NM_FORM", this.dsList.getColumn(i, "NM_FORM"));
        				this.dsSave.setColumn(nrow, "DS_NAME", this.dsList.getColumn(i, "DS_NAME"));
        				this.dsSave.setColumn(nrow, "YN_EXCEPT", this.dsList.getColumn(i, "YN_EXCEPT"));
        				this.dsSave.setColumn(nrow, "YN_FINISH", this.dsList.getColumn(i, "YN_FINISH"));
        				this.dsSave.setColumn(nrow, "DT_REQUEST", nexacro.replaceAll(this.gfnNvl(this.dsList.getColumn(i, "DT_REQUEST"),""), "-",""));
        				this.dsSave.setColumn(nrow, "DT_FINISH", nexacro.replaceAll(this.gfnNvl(this.dsList.getColumn(i, "DT_FINISH"),""), "-",""));
        				this.dsSave.setColumn(nrow, "DS_BIGO", this.dsList.getColumn(i, "DS_BIGO"));
        				this.dsSave.setColumn(nrow, "DS_SP", this.dsList.getColumn(i, "DS_SP"));
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

        this.fnExcel = function() {
        	this.gfnExcelExport(this.dxGrid);
        }

        this.fnPrint = function() {
        }

        /************************************************************************
         * Validate
         ************************************************************************/
        this.fnSelectValidation = function() {
        	if (this.gfnIsNull(this.dsSearch.getColumn(0, "CD_SYSTEM"))) {
        		this.fnVaidateCallback = function() {
        			this.ccfCD_SYSTEM.form.CDTextBox.setFocus();
        		}
        		this.gfnAlert("시스템을 입력하세요.", "fnVaidateCallback");
        		return false;
        	}

        	return true;
        }

        /************************************************************************
         * 콜백 이벤트
         ************************************************************************/
        this.fnCallback = function(svcID, errorCode, errorMsg) {
        	if (svcID == "select") {
        		this.gfnGridAfterSelect(this.dxGrid);

        // 		var sum1 = this.dsList.getCaseCount("YN_EXCEPT=='Y'");
        // 		var sum2 = this.dsList.getCaseCount("YN_FINISH=='Y'");
        // 		this.dxGrid.setCellProperty("summ", this.dxGrid.getBindCellIndex("body", "DS_BIGO"), "text", sum1);
        // 		this.dxGrid.setCellProperty("summ", this.dxGrid.getBindCellIndex("body", "DS_SP"), "text", sum2);
        	}
        	else if (svcID == "save") {
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
        this.dsSearch_onvaluechanged = function(obj,e) {
            if (e.oldvalue != e.newvalue) {
        		this.gfnSetFormStatus(this);
        		this.gfnGridClear(this.dxGrid);
            }
        }

        this.fnUpload = function(obj,e) {
        	this.gfnExcelImport("dsList","sheet1","A2","fnExcelImportCallback","import",this);
        }

        this.fnExcelImportCallback = function(sImportId, dsOut, dsSheet) {
        	// 다중 시트 처리시 양식의 해당 시트여부를 체크하고자 할땐 dsSheet 시트명 체크
        // 	if (dsSheet.rowcount > 1) {
        // 		trace(dsSheet.getColumn(1, "sheetname"));
        // 	}

        	// 엑셀 양식과 그리드 컬럼이 그대로 일치 하는경우 아래와 같이 처리.
        	// 아닌경우는 이부분 주석처리
        	for (var i=0; i< this.dsList.getColCount(); i++)
        	{
        		sColumnId = "Column"+i;
        		var sColumnNm = this.gfnGridGetBindColumnNameByIndex(this.dxGrid, i);
        		if (sColumnNm != "" && sColumnId != sColumnNm)
        		{
        			dsOut.updateColID(sColumnId, sColumnNm);
        		}
        	}

        	// 양식이 일치하고 엑셀내역을 기존데이터에 Insert하지 않고
        	// 엑셀내역 그대로 그리드 반영할 시 copyData
        	//this.dsList.copyData(dsOut);

        	this.dsList.set_enableevent(false);
        	for (var i=0; i<dsOut.rowcount; i++) {
        		var nrow = this.dsList.addRow();
        		this.dsList.setColumn(nrow, this.ucFlag, "I");

        		// 양식이 일치하는 경우 copyRow
        		this.dsList.copyRow(nrow, dsOut, i);

        		// 양식과 일치하지 않는 경우 아래와 같이 컬럼별로 처리.
        // 		this.dsListSub.setColumn(nrow, "CD_SYSTEM", dsOut.getColumn(i, "Column1"));
        // 		this.dsListSub.setColumn(nrow, "CD_TYPE", dsOut.getColumn(i, "Column2"));

        	}
        	this.dsList.set_enableevent(true);

        	this.gfnSetFormStatus(this, "I");
        };

        this.fnOpen = function(obj,e) {
        	var row = this.dsList.rowposition;
        	var param = {};

        	this.gfnFormOpen(this.dsList.getColumn(row, "CD_MODULE").substr(0,3) , this.dsList.getColumn(row, "ID_FORM"), "", param);
        }


        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.form_onload,this);
            this.dsSearch.addEventHandler("onvaluechanged",this.dsSearch_onvaluechanged,this);
        };
        this.loadIncludeScript("DZZ_DEVTEMP.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
