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
            this.set_titletext("발주요청내역");
            if (Form == this.constructor)
            {
                this._setFormPosition(1280,720);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("dsList", this);
            obj._setContents("");
            this.addChild(obj.name, obj);


            obj = new Dataset("_dsProc", this);
            obj._setContents("<ColumnInfo><Column id=\"TARGET\" type=\"STRING\" size=\"256\"/><Column id=\"SP\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"TARGET\">select</Col><Col id=\"SP\">DCDPR_REG_LICCOST_SELECT</Col></Row><Row><Col id=\"TARGET\">select_d</Col><Col id=\"SP\">DCDPR_REG_EVALUE_LICCOST_SELECT</Col></Row><Row><Col id=\"TARGET\">insert</Col><Col id=\"SP\">DCDPR_REG_EVALUE_LICCOST_INSERT</Col></Row><Row><Col id=\"TARGET\">delete</Col><Col id=\"SP\">DCDPR_REG_EVALUE_LICCOST_DELETE</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsListSub", this);
            obj._setContents("");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsSearch", this);
            obj._setContents("<ColumnInfo><Column id=\"YR_MAGAM\" type=\"STRING\" size=\"256\"/><Column id=\"TY_SYSTEM\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row/></Rows>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Div("divSearch","0.0","10.0",null,"46.0","0",null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_cssclass("div_SEARCH_Bg");
            this.addChild(obj.name, obj);

            obj = new Static("staYR_MAGAM","0.0","10.0","92.0","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("0");
            obj.set_text("평가년도");
            obj.set_cssclass("sta_WF_SchLabelE");
            this.divSearch.addChild(obj.name, obj);

            obj = new Div("ctclYR_MAGAM","staYR_MAGAM:0.0","10.0","100","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("1");
            obj.set_url("cmm::cmmCalYY.xfdl");
            this.divSearch.addChild(obj.name, obj);

            obj = new Div("divData","0","divSearch:10",null,null,"0","0",null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_cssclass("div_DATA_Bg");
            this.addChild(obj.name, obj);

            obj = new Div("divSplitter","50%","0","5","100%",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("1");
            obj.set_background("skyblue");
            obj.set_cursor("ew-resize");
            this.divData.addChild(obj.name, obj);

            obj = new Div("divDataLeft","0","0",null,null,"divSplitter:5","0",null,null,null,null,this.divData.form);
            obj.set_taborder("0");
            this.divData.addChild(obj.name, obj);

            obj = new Static("sta01","0","0","100%","22",null,null,null,null,null,null,this.divData.form.divDataLeft.form);
            obj.set_taborder("0");
            obj.set_text("공종정보");
            obj.set_cssclass("sta_TITLE_Bg");
            this.divData.form.divDataLeft.addChild(obj.name, obj);

            obj = new Grid("objGrid","0","sta01:5",null,null,"0","0",null,null,null,null,this.divData.form.divDataLeft.form);
            obj.set_taborder("0");
            obj._setContents("");
            this.divData.form.divDataLeft.addChild(obj.name, obj);

            obj = new Div("divDataRight","divSplitter:32","0",null,null,"0","0",null,null,null,null,this.divData.form);
            obj.set_taborder("0");
            this.divData.addChild(obj.name, obj);

            obj = new Static("sta02","0","0","100%","22",null,null,null,null,null,null,this.divData.form.divDataRight.form);
            obj.set_taborder("1");
            obj.set_text("등록정보");
            obj.set_cssclass("sta_TITLE_Bg");
            this.divData.form.divDataRight.addChild(obj.name, obj);

            obj = new Grid("objGridSub","0","sta02:5",null,null,"0","0",null,null,null,null,this.divData.form.divDataRight.form);
            obj.set_taborder("0");
            obj._setContents("");
            this.divData.form.divDataRight.addChild(obj.name, obj);

            obj = new Button("btnSend_Right","divSplitter:1","40%","30","30",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("3");
            obj.set_text("▶");
            this.divData.addChild(obj.name, obj);

            obj = new Button("btnSend_Left","divSplitter:1","60%","30","30",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("3");
            obj.set_text("◀");
            this.divData.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this
            obj = new Layout("default","",this._adjust_width,this._adjust_height,this,function(p){});
            this.addLayout(obj.name, obj);
            
            // BindItem Information
            obj = new BindItem("item0","divSearch.form.ctclYR_MAGAM.form.TextBox","value","dsSearch","YR_MAGAM");
            this.addChild(obj.name, obj);
            obj.bind();
            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {
            this._addPreloadList("fdl","cmm::cmmCalYY.xfdl");
        };
        
        // User Script
        this.registerScript("DCD_REG_EVALUE_LICCOST_DLG.xfdl", function() {
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

        	// 이전화면에서 데이터 받기.
        	if(!this.gfnIsNull(this.getOwnerFrame().YR_MAGAM) && !this.gfnIsNull(this.getOwnerFrame().TY_SYSTEM)) {

        		this.dsSearch.setColumn(0, "YR_MAGAM", this.getOwnerFrame().YR_MAGAM);
        		this.dsSearch.setColumn(0, "TY_SYSTEM", this.getOwnerFrame().TY_SYSTEM);

        		this.FormBtns.Select.click();
        	}
        };


        /************************************************************************
         * 버튼 설정 : 화면(Tab) 전환시 마다 호출
         ************************************************************************/
        this.fnSetButton = function() {
        	// Select, Add, Del, Save, Excel, Print
        	// TODO : set_enable로 Add창이 비활성화가 되지않아 우선 안 보이게 설정.
        	//this.FormBtns.Add.set_visible(false);
        	//this.FormBtns.Add.set_enable(false);

        }

        /************************************************************************
         * 확장 버튼 : 화면별 버튼 설정 ID, function 연결
         ************************************************************************/
        this.fnSetExtendButton = function() {

        };

        /************************************************************************
         * 변수 선언
         ************************************************************************/
        this.fnSetVariable = function() {
        	this.dxGrid = this.divData.form.divDataLeft.form.objGrid;
        	this.dxGridSub = this.divData.form.divDataRight.form.objGridSub;
        };

        /************************************************************************
         * 이벤트 설정
         ************************************************************************/
        this.fnSetEvent = function() {

         	this.gfnGridInit(this.dxGrid, this.dsList, "DC", "DCD_REG_LICCOST");
        	this.gfnGridInit(this.dxGridSub, this.dsListSub, "DC", "DCD_REG_EVALUE_LICCOST");
        	this.dxGrid.addEventHandler("onselectchanged", this.fnGrid_RowCellChanged, this);
        	this.dxGridSub.addEventHandler("onselectchanged", this.fnGridSub_RowCellChanged, this);
        	// 트리 전체 접는 로직.
        	//this.dxGrid.set_treeinitstatus("collapse,all");

        };

        /************************************************************************
         * 파라미터 설정
         ************************************************************************/
        this.fnSetParameter = function() {
        	this.dsSelect = new Dataset();
        	this.dsSelect.addColumn("TY_SYSTEM", "string");

        	this.dsSelectSub = new Dataset();
        	this.dsSelectSub.addColumn("YR_MAGAM", "string");
        	this.dsSelectSub.addColumn("TY_SYSTEM", "string");

        	this.dsInsert = new Dataset();
        	this.dsInsert.addColumn("TY_SYSTEM", "string");
        	this.dsInsert.addColumn("YR_MAGAM", "string");
        	this.dsInsert.addColumn("CD_LICCOST", "string");

        	this.dsDelete = new Dataset();
        	this.dsDelete.addColumn("TY_SYSTEM", "string");
        	this.dsDelete.addColumn("YR_MAGAM", "string");
        	this.dsDelete.addColumn("CD_LICCOST", "string");
        }

        /************************************************************************
         * 버튼 이벤트
         ************************************************************************/
         /*
          *	조회 버튼
          */
        this.fnSelect = function() {
        	if (!this.fnSelectValidate()) return false;

        	this.gfnGridBeforeSelect(this.dxGridSub);
         	this.gfnGridBeforeSelect(this.dxGrid);

         	this.dsSelect.clearData();
         	this.dsSelect.addRow();

        	this.dsSelect.setColumn(0, "TY_SYSTEM", this.dsSearch.getColumn(0, "TY_SYSTEM"));

        	this.dsSelectSub.clearData();
        	this.dsSelectSub.addRow();

        	this.dsSelectSub.setColumn(0, "YR_MAGAM", this.dsSearch.getColumn(0, "YR_MAGAM"));
        	this.dsSelectSub.setColumn(0, "TY_SYSTEM", this.dsSearch.getColumn(0, "TY_SYSTEM"));

         	var strSvcId    = "select";
         	var strSvcType  = "grid";
         	var inProc		= "_dsProc";
         	var inData      = "select=dsSelect select_d=dsSelectSub";
         	var outData     = "dsList=select0 dsListSub=select_d0";
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
         *	입력 버튼
         */
        this.fnAdd = function() {

        }

        /*
         *	삭제 버튼
         */
        this.fnDel = function() {
        	this.gfnGridDel(this.dxGridSub);
        }

        /*
         *	저장 버튼
         */
        this.fnSave = function() {
        	if (!this.gfnGridValidate(this.dxGridSub)) return;

        	this.dxGridSub.updateToDataset();

        	this.dsInsert.clearData();
        	this.dsDelete.clearData();

        	for (var i = 0; i < this.dsListSub.rowcount; i++) {
        		var flag = this.gfnGetFlag(this.dsListSub, i);
        		switch(flag) {
        			case "I":
        				var nrow = this.dsInsert.addRow();
        				this.dsInsert.setColumn(nrow, "TY_SYSTEM", this.dsSearch.getColumn(0, "TY_SYSTEM"));
        				this.dsInsert.setColumn(nrow, "YR_MAGAM", this.dsListSub.getColumn(i, "YR_MAGAM"));
        				this.dsInsert.setColumn(nrow, "CD_LICCOST", this.dsListSub.getColumn(i, "CD_LICCOST"));

        				break;
        			case "D":
        				var nrow = this.dsDelete.addRow();
        				this.dsDelete.setColumn(nrow, "TY_SYSTEM",  this.dsSearch.getColumn(0, "TY_SYSTEM"));
        				this.dsDelete.setColumn(nrow, "YR_MAGAM", this.dsListSub.getColumn(i, "YR_MAGAM"));
        				this.dsDelete.setColumn(nrow, "CD_LICCOST", this.dsListSub.getColumn(i, "CD_LICCOST"));
        				break;
        		}
        	}

        	if (this.dsInsert.rowcount == 0 && this.dsDelete.rowcount == 0) return;

        	var strSvcId    = "save";
        	var strSvcType  = "save";
        	var inProc		= "_dsProc";
        	var inData      = "insert=dsInsert delete=dsDelete";
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
        	this.gfnExcelExport(this.dxGridSub);
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

        	if (this.gfnIsNull(this.dsSearch.getColumn(0, "YR_MAGAM"))) {
        		validate = false;
        		//Alert후 실행할 처리
        		this.fnVaidateCallback = function() {
        			this.divSearch.form.ctclYR_MAGAM.form.TextBox.setFocus();
        		}
        		this.gfnAlert("평가년도를 입력하세요.", "fnVaidateCallback");
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
        		this.gfnGridAfterSelect(this.dxGridSub);
        		this.gfnGridAfterSelect(this.dxGrid);

        		// 트리의 레벨2까지만 펼침
        // 		if(this.dsList.rowcount > 0){
        // 			this.dxGrid.setTreeStatus(1, true);
        // 		}
        	}else if(svcID == "save") {
        		this.gfnGridAfterSelect(this.dxGridSub);
        		this.gfnGridAfterSelect(this.dxGrid);

        		this.FormBtns.Select.click();
        	}

        }
        /************************************************************************
         * 코드파인드 이벤트
         ************************************************************************/

        /************************************************************************
         * 그리드 이벤트
         ************************************************************************/

        this.fnGrid_RowCellChanged = function(obj,e, event)
        {
        	if ((obj.oldrow > -1 && obj.oldrow == e.row)
        		|| (obj.oldrow == -1 && e.oldrow != e.row)) {
        		var colnm = this.gfnGridGetBindColumnNameByIndex(obj, e.cell);

        		var event = nexacro.KeyEventInfo;

        		var rows = this.dxGrid.getSelectedDatasetRows();

        		this.dsList.set_enableevent(false);
        		for(var i = 0; i < this.dsList.rowcount; i++)
        		{
        			var check = false;

        			if(this.gfnGetFlag(this.dsList, i) != "#")
        			{
        				if(colnm == "CHK")
        				{
        					check = true;
        					break;
        				}

        				if(rows.length > 0)
        				{
        					for(var j = 0; j < rows.length ; j++)
        					{
        						if(i == e.row || i == rows[j])
        						{
        							check = true;
        							this.dsList.setColumn(i, "CHK", 1);
        						}
        					}
        				}
        				else
        				{
        					if(i == e.row)
        					{
        						check = true;
        						this.dsList.setColumn(i, "CHK", 1);
        					}
        				}

        				if(check == false)
        				{
        					this.dsList.setColumn(i, "CHK", 0);
        				}
        			}
        		}
        		this.dsList.set_enableevent(true);

        		obj.oldrow = -1;
        	}
        }

        this.fnGridSub_RowCellChanged = function(obj,e, event)
        {
        	if ((obj.oldrow > -1 && obj.oldrow == e.row)
        		|| (obj.oldrow == -1 && e.oldrow != e.row)) {
        		var colnm = this.gfnGridGetBindColumnNameByIndex(obj, e.cell);

        		var event = nexacro.KeyEventInfo;

        		var rows = this.dxGridSub.getSelectedDatasetRows();

        		this.dsListSub.set_enableevent(false);
        		for(var i = 0; i < this.dsListSub.rowcount; i++)
        		{
        			var check = false;

        			if(this.gfnGetFlag(this.dsListSub, i) != "#")
        			{
        				if(colnm == "CHK")
        				{
        					check = true;
        					break;
        				}

        				if(rows.length > 0)
        				{
        					for(var j = 0; j < rows.length ; j++)
        					{
        						if(i == e.row || i == rows[j])
        						{
        							check = true;
        							this.dsListSub.setColumn(i, "CHK", 1);
        						}
        					}
        				}
        				else
        				{
        					if(i == e.row)
        					{
        						check = true;
        						this.dsListSub.setColumn(i, "CHK", 1);
        					}
        				}

        				if(check == false)
        				{
        					this.dsListSub.setColumn(i, "CHK", 0);
        				}
        			}
        		}
        		this.dsListSub.set_enableevent(true);

        		obj.oldrow = -1;
        	}
        }
        /************************************************************************
         * 기타 이벤트
         ************************************************************************/
        this.fnSearchInit = function(obj,e) {
        	if(e == null || (e.pretext != e.posttext)) {
        		this.gfnSetFormStatus(this);
        		this.gfnGridClear(this.dxGrid);
        		this.gfnGridClear(this.dxGridSub);
        	}
        }

        this.divData_ondragmove = function(obj,e)
        {
        	if(e.userdata == "splitter") {
        		this.divData.form.divSplitter.set_left(e.clientx);
        		this.divData.form.resetScroll();
        	}
        };

        this.divData_divSplitter_ondrag = function(obj,e)
        {
        	e.set_userdata("splitter");
        	return true;
        };

        // ▶ 버튼 클릭.
        this.divData_btnSend_Right_onclick = function(obj,e)
        {
        	var rows = this.dxGrid.getSelectedDatasetRows();

        	this.dsListSub.set_enableevent(false);

        	for(var i = 0; i < rows.length; i++)
        	{
        		var nrow = rows[i];

        		//var listRow = this.dsListSub.addRow();
        		var listRow = this.gfnGridAdd(this.dxGridSub, "bottom");

        		// QN_TT_HADO / UP_TT_HADO / AM_TT_HADO 가 왼쪽 그리드에는 컬럼이 없어 null로 넘어옴.
        		//this.dsListSub.copyRow(listRow, this.dsList, nrow);
        		this.dsListSub.setColumn(listRow, this.ucFlag, "I");
        		this.dsListSub.setColumn(listRow, "CD_COSTCLASS", this.dsList.getColumn(nrow, "CD_COSTCLASS"));
        		this.dsListSub.setColumn(listRow, "DS_COSTCLASS", this.dsList.getColumn(nrow, "DS_COSTCLASS"));
        		this.dsListSub.setColumn(listRow, "CD_LICCOST", this.dsList.getColumn(nrow, "CD_LICCOST"));
        		this.dsListSub.setColumn(listRow, "DS_LICCOST", this.dsList.getColumn(nrow, "DS_LICCOST"));
        		this.dsListSub.setColumn(listRow, "YR_MAGAM", this.dsSearch.getColumn(0, "YR_MAGAM"));
        	}

        	this.gfnSetFormStatus(this, "I");
        	this.dsListSub.set_enableevent(true);

        }

        // ◀ 버튼 클릭
        this.divData_btnSend_Left_onclick = function(obj,e)
        {
        	this.fnDel();
        };

        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.form_onload,this);
            this.divData.addEventHandler("ondragmove",this.divData_ondragmove,this);
            this.divData.form.divSplitter.addEventHandler("ondrag",this.divData_divSplitter_ondrag,this);
            this.divData.form.btnSend_Right.addEventHandler("onclick",this.divData_btnSend_Right_onclick,this);
            this.divData.form.btnSend_Left.addEventHandler("onclick",this.divData_btnSend_Left_onclick,this);
            this.dsListSub.addEventHandler("oncolumnchanged",this.dsListSub_oncolumnchanged,this);
        };
        this.loadIncludeScript("DCD_REG_EVALUE_LICCOST_DLG.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
