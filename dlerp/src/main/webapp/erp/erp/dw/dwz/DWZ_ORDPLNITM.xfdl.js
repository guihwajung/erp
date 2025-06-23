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
            this.set_titletext("계획기초항목관리");
            if (Form == this.constructor)
            {
                this._setFormPosition(1280,720);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("dsList", this);
            obj._setContents("");
            this.addChild(obj.name, obj);


            obj = new Dataset("_dsProc", this);
            obj._setContents("<ColumnInfo><Column id=\"TARGET\" type=\"STRING\" size=\"256\"/><Column id=\"SP\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"TARGET\">select</Col><Col id=\"SP\">DWZPR_ORDPLNITM_PRD_SELECT</Col></Row><Row><Col id=\"TARGET\">lic_select</Col><Col id=\"SP\">DWZPR_ORDPLNITM_LICCOST_SELECT</Col></Row><Row><Col id=\"TARGET\">d_select</Col><Col id=\"SP\">DWZPR_ORDPLNITM_SELECT</Col></Row><Row><Col id=\"TARGET\">save</Col><Col id=\"SP\">DWZPR_ORDPLNITM_SAVE</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsListSub", this);
            obj._setContents("");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsSearch", this);
            obj._setContents("<ColumnInfo><Column id=\"CD_SITE\" type=\"STRING\" size=\"256\"/><Column id=\"CD_LV1\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"CD_LV1\"/><Col id=\"CD_SITE\"/></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsList2", this);
            obj._setContents("");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Div("divSearch","0.0","10.0",null,"46.0","0",null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_cssclass("div_SEARCH_Bg");
            obj.set_text("");
            this.addChild(obj.name, obj);

            obj = new Div("divData","0","divSearch:10",null,null,"0","0",null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_cssclass("div_DATA_Bg");
            this.addChild(obj.name, obj);

            obj = new Div("divSplitter","37.27%","0","5","100.00%",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("2");
            obj.set_background("skyblue");
            obj.set_cursor("ew-resize");
            this.divData.addChild(obj.name, obj);

            obj = new Div("divDataLeft","0","0",null,null,"divSplitter:5","0",null,null,null,null,this.divData.form);
            obj.set_taborder("0");
            this.divData.addChild(obj.name, obj);

            obj = new Static("sta00","209","0",null,"22","0",null,null,null,null,null,this.divData.form.divDataLeft.form);
            obj.set_taborder("3");
            obj.set_text("발주공종");
            obj.set_cssclass("sta_TITLE_Bg");
            this.divData.form.divDataLeft.addChild(obj.name, obj);

            obj = new Static("sta01","0","0",null,"22","sta00:11",null,null,null,null,null,this.divData.form.divDataLeft.form);
            obj.set_taborder("0");
            obj.set_text("발주계획구분");
            obj.set_cssclass("sta_TITLE_Bg");
            this.divData.form.divDataLeft.addChild(obj.name, obj);

            obj = new Grid("objGrid2","209","sta01:5",null,null,"0","0",null,null,null,null,this.divData.form.divDataLeft.form);
            obj.set_taborder("0");
            obj._setContents("");
            this.divData.form.divDataLeft.addChild(obj.name, obj);

            obj = new Grid("objGrid","0","27",null,null,"objGrid2:10","0",null,null,null,null,this.divData.form.divDataLeft.form);
            obj.set_taborder("2");
            obj._setContents("");
            this.divData.form.divDataLeft.addChild(obj.name, obj);

            obj = new Button("btnRight","divSplitter:5","40.00%","30","30",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("3");
            obj.set_text("▶");
            this.divData.addChild(obj.name, obj);

            obj = new Div("divDataRight","btnRight:5","0",null,null,"0","0",null,null,null,null,this.divData.form);
            obj.set_taborder("1");
            this.divData.addChild(obj.name, obj);

            obj = new Static("sta02","0","0","100%","22",null,null,null,null,null,null,this.divData.form.divDataRight.form);
            obj.set_taborder("1");
            obj.set_text("발주계획기본항목");
            obj.set_cssclass("sta_TITLE_Bg");
            this.divData.form.divDataRight.addChild(obj.name, obj);

            obj = new Grid("objGridSub","0","sta02:5",null,null,"0","0",null,null,null,null,this.divData.form.divDataRight.form);
            obj.set_taborder("0");
            obj._setContents("");
            this.divData.form.divDataRight.addChild(obj.name, obj);

            obj = new Button("btnLeft","divSplitter:5","60.00%","30","30",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("4");
            obj.set_text("◀");
            this.divData.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this
            obj = new Layout("default","",this._adjust_width,this._adjust_height,this,function(p){});
            this.addLayout(obj.name, obj);
            
            // BindItem Information

            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script
        this.registerScript("DWZ_ORDPLNITM.xfdl", function() {
        this.objApp = this.gfnGetApplication();
        this.saveRow = "";	// 상품유형 그리드에서 row변경시 발주계획항목 그리드에 변경된 데이터가 있을경우에 해당 row위치값을 가진다

        this.form_onload = function(obj,e)
        {
        	// -- 필수 -------------------//
        	this.gfnFormOnLoad(this);
        	this.gfnFormInfo(this);
        	// ---------------------------//

        	this.fnSetButton();
        	//this.fnSetExtendButton();
        	this.fnSetVariable();
        	this.fnSetEvent();
        	this.fnSetParameter();

        	// 화면 오픈시 조회함
        	this.FormBtns.Select.click();
        };

        /************************************************************************
         * 버튼 설정 : 화면(Tab) 전환시 마다 호출
         ************************************************************************/
        this.fnSetButton = function() {
        	// 서브 버튼 사용(2개 그리드 중간에 있는 파란선) 상단에 공통 셋트가 하나더 생긴다
        	//this.gfnUseSubBtn(true, this.divData, this.divData.form.divSplitter); // divSplitter sync
        }

        /************************************************************************
         * 확장 버튼 : 화면별 버튼 설정 ID, function 연결
         ************************************************************************/
        this.fnSetExtendButton = function() {
        	//this.btn1 = this.gfnFormButtonAdd("Detail", "fnDetail1");
        };

        /************************************************************************
         * 변수 선언
         ************************************************************************/
        this.fnSetVariable = function() {
        	//this.ccfCD_SITE = this.divSearch.form.ccfCD_SITE;
        	//this.ccfCD_CBS = this.divSearch.form.ccfCD_CBS;
        	this.dxGrid = this.divData.form.divDataLeft.form.objGrid;
        	this.dxGrid2 = this.divData.form.divDataLeft.form.objGrid2;
        	this.dxGridSub = this.divData.form.divDataRight.form.objGridSub;
        };

        /************************************************************************
         * 이벤트 설정
         ************************************************************************/
        this.fnSetEvent = function() {
        	//this.ccfCD_CBS.CodeFindName = "DQX_CBSMENU";
        	this.gfnGridInit(this.dxGrid, this.dsList, "DW", "DWZ_ORDPLNITM_PRD");
        	this.dxGrid.set_selecttype("cell");
        	this.dxGrid.addEventHandler("onselectchanged", this.fnGrid_RowCellChanged, this);
        	this.dsList.addEventHandler("canrowposchange", this.dsList_canrowposchange, this);

        	this.gfnGridInit(this.dxGrid2, this.dsList2, "DW", "DWZ_ORDPLNITM_LICCOST", "DS_LICCOST", "GR_LICCOST");
        	this.gfnGridInit(this.dxGridSub, this.dsListSub, "DW", "DWZ_ORDPLNITM");
        	//this.dxGridSub.BeforeUserDataSetParam = "fnGridSub_BeforeUserDataSetParam";
        }

        /************************************************************************
         * 파라미터 설정
         ************************************************************************/
        this.fnSetParameter = function() {

        	this.dsSelect = new Dataset();
        	this.dsSelect.addColumn("TY_WRK", "string");
        	this.dsSelect.addColumn("TP_PRD", "string");

        	this.dsSelectLic = new Dataset();
        	this.dsSelectLic.addColumn("TY_WRK", "string");
        	this.dsSelectLic.addColumn("TP_PRD", "string");

        	this.dsSelectSub = new Dataset();
        	this.dsSelectSub.addColumn("TY_WRK", "string");
        	this.dsSelectSub.addColumn("TP_PRD", "string");

        	this.dsSave = new Dataset();
        	this.dsSave.addColumn("TY_WRK", "string");
        	this.dsSave.addColumn("ID_USER", "string");
        	this.dsSave.addColumn("TP_PRD", "string");
        	this.dsSave.addColumn("CD_ORD", "string");
        	this.dsSave.addColumn("CD_ORDCOST", "string");
        	this.dsSave.addColumn("DS_RMKS", "string");
        	this.dsSave.addColumn("SN_SRT", "int");
        	this.dsSave.addColumn("YN_USE", "string");

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

        	this.dsSelect.setColumn(0, "TY_WRK", "Q");
        	this.dsSelect.setColumn(0, "TP_PRD", "");

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
        	/*
        	if(this.dsList.getColumn(this.dsList.rowposition, "CNT") < 1) {
        		this.gfnAlert("자리수 항목값이 0 이하일 경우에는 신규입력 할수 없습니다.");
        		return;
        	}

        	var nrow = this.gfnGridAdd(this.dxGridSub);

        	this.dsListSub.set_enableevent(false);
        	this.dsListSub.setColumn(nrow, "CD_SITE", this.dsSearch.getColumn(0, "CD_SITE"));
        	this.dsListSub.setColumn(nrow, "CD_CBS", this.dsList.getColumn(this.dsList.rowposition, "CD_CBS"));
        	this.dsListSub.setColumn(nrow, "CD_ITEMREG", this.dsList.getColumn(this.dsList.rowposition, "ITEMREG"));
        	this.dsListSub.set_enableevent(true);
        	*/
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
        	// 그리드 필수항목 체크``
        	if (!this.gfnGridValidate(this.dxGridSub)) return;

        	this.dxGridSub.updateToDataset();

        	this.dsSave.clearData();

        	for (var i = 0; i < this.dsListSub.rowcount; i++) {
        		var flag = this.gfnGetFlag(this.dsListSub, i);
        		switch(flag) {
        			case "I":
        			case "U":
        			case "D":
        				var nrow = this.dsSave.addRow();
        				this.dsSave.setColumn(nrow, "TY_WRK", flag);
        				this.dsSave.setColumn(nrow, "ID_USER", this.AuthClient.ID_USER);
        				this.dsSave.setColumn(nrow, "TP_PRD", this.dsList.getColumn(this.dsList.rowposition, "TP_PRD"));
        				this.dsSave.setColumn(nrow, "CD_ORD", this.dsListSub.getColumn(i, "CD_ORD"));
        				this.dsSave.setColumn(nrow, "CD_ORDCOST", this.dsListSub.getColumn(i, "CD_ORDCOST"));
        				this.dsSave.setColumn(nrow, "DS_RMKS", this.dsListSub.getColumn(i, "DS_RMKS"));
        				this.dsSave.setColumn(nrow, "SN_SRT", this.dsListSub.getColumn(i, "SN_SRT"));
        				this.dsSave.setColumn(nrow, "YN_USE", this.dsListSub.getColumn(i, "YN_USE"));
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
         * 서브 버튼 이벤트
         ************************************************************************/
        // 발주공종 그리드 조회
        this.fnSelectLic = function() {

        	this.gfnGridBeforeSelect(this.dxGrid2);

        	// 디테일 데이터셋 데이터 삭제
        	this.dsList2.clearData();

        	// 디테일 파마리터 데이터셋 셋팅
        	this.dsSelectLic.clearData();
        	this.dsSelectLic.addRow();

        	this.dsSelectLic.setColumn(0, "TY_WRK", "Q");
        	this.dsSelectLic.setColumn(0, "TP_PRD", "");

        	var strSvcId    = "selectLic";
        	var strSvcType  = "grid";
        	var inProc		= "_dsProc";
        	var inData      = "lic_select=dsSelectLic";
        	var outData     = "dsList2=lic_select0";
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

        // 발주계획 그리드 조회
        this.fnSelectSub = function() {

        	if (this.dxGrid.rowcount == 0 || this.dxGrid.currentrow < 0) return;

        	this.gfnGridBeforeSelect(this.dxGridSub);

        	// 디테일 데이터셋 데이터 삭제
        	this.dsListSub.clearData();

        	// 디테일 파마리터 데이터셋 셋팅
        	this.dsSelectSub.clearData();
        	this.dsSelectSub.addRow();

        	this.dsSelectSub.setColumn(0, "TY_WRK", "Q");
        	this.dsSelectSub.setColumn(0, "TP_PRD", this.dsList.getColumn(this.dsList.rowposition, "TP_PRD"));

        	var strSvcId    = "detail";
        	var strSvcType  = "grid";
        	var inProc		= "_dsProc";
        	var inData      = "d_select=dsSelectSub";
        	var outData     = "dsListSub=d_select0";
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



        this.fnExcelSub = function() {
        	this.gfnExcelExport(this.dxGridSub);
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
        	if (this.gfnIsNull(this.dsSearch.getColumn(0,"CD_SITE"))) {
        		validate = false;
        		// Alert후 실행할 처리
        		this.fnVaidateCallback = function() {
        			this.ccfCD_SITE.form.CDTextBox.setFocus();
        		}
        		this.gfnAlert("현장코드는 반드시 입력 하셔야 합니다.", "fnVaidateCallback");
        	}
        	*/
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
        		this.fnSelectLic();
        	}
        	else if (svcID == "selectLic") {
        		this.gfnGridAfterSelect(this.dxGrid2);
        		this.FormBtns.SubSelect.click();
        	}
        	else if (svcID == "detail") {
        		if(!this.gfnIsNull(this.saveRow)){
        			this.dsList.set_rowposition(this.saveRow);
        			this.saveRow = "";
        		}else{
        			this.gfnGridAfterSelect(this.dxGridSub);
        		}
        	}
        	else if(svcID == "save") {
        		if (errorCode == 0) {
        			// 저장 후에 메인 select가 실행된게 아니라 sub select가 실행된거라서 화면form상태가 수정상태로 남아있다. 그래서 조회(Q)상태로 초기화시키고 조회함
        			this.gfnSetFormStatus(this, "Q");	// 이부분 처리하지 않으면 저장후에 바로 화면 닫을때 변경된 데이터있다고 메시지 나옴
        			this.FormBtns.SubSelect.click();
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
        this.fnGrid_RowCellChanged = function(obj,e)
        {
            if ((obj.oldrow > -1 && obj.oldrow == e.row)
        		|| (obj.oldrow == -1 && e.oldrow != e.row)) {
        		// 마스터 그리드 클릭 이벤트(디테일 그리드 조회)
        		this.FormBtns.SubSelect.click();
        		obj.oldrow = -1;
        	}
        };

        this.dsList_canrowposchange = function(obj,e) {
        	var can_rowchange = true;
        	for (var i = 0; i < this.dsListSub.rowcount; i++) {
        		var flag = this.gfnGetFlag(this.dsListSub, i);
        		if (flag == "I" || flag == "U" || flag == "D") {
        			can_rowchange = false;
        			break;
        		}
        	}
        	if(!can_rowchange) {
        		this._row = e.newrow;
        		this.gfnConfirm("변경된 데이터가 있습니다.\r\n자료 저장 후 이동하시겠습니까?", "dsList_canrowposchange_callback");
        	}
        	return can_rowchange;
        }

        this.dsList_canrowposchange_callback = function(strId, val)
        {
        	if(val == true) {	// 확인시 저장 후에 해당 row로 이동한다
        		this.saveRow = this._row;
        		this.fnSave();
        	}else{	// 취소시 저장 하장하지 않고 해당 row로 이동한다
        		this.dsList.set_enableevent(false);
        		this.dsList.set_rowposition(this._row);
        		this.dsList.set_enableevent(true);
        		this.gfnSetFormStatus(this, "Q");	// 취소시에 화면상태를 초기화해준다
        	}
        }



        /************************************************************************
         * 기타 이벤트
         ************************************************************************/
        this.fnSearchInit = function(obj,e) {
        	if(e == null || (e.pretext != e.posttext)) {
        		this.gfnSetFormStatus(this);
        		this.gfnGridClear(this.dxGrid);
        		this.gfnGridClear(this.dxGrid2);
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
        this.dsSearch_onvaluechanged = function(obj,e)
        {
        	if(e.oldvalue != e.newvalue){
        	this.gfnGridClear(this.dxGrid);
        	this.gfnGridClear(this.dxGrid2);
        	this.gfnGridClear(this.dxGridSub);
        	}
        };

        this.divData_btnRight_onclick = function(obj,e)
        {
        	var rows = this.dxGrid2.getSelectedDatasetRows();

        	/*
        	for(var j = 0; j < rows.length; j++)
        	{
        		var nrow = rows[j];

        		for (var k = 0; k < this.dsListSub.rowcount; k++) {
        			var cd_liccost = this.dsList2.getColumn(nrow, "CD_ORD")+this.dsList2.getColumn(nrow, "CD_LICCOST");
        			var cd_ordcost = this.dsListSub.getColumn(k, "CD_ORD")+this.dsListSub.getColumn(k, "CD_ORDCOST");
        			if(cd_liccost == cd_ordcost){
        				this.gfnAlert("중복된 항목이 있습니다.");
        				return false;
        			}
        		}
        	}
        	*/

        	this.dsListSub.set_enableevent(false);

        	for(var i = 0; i < rows.length; i++)
        	{
        		var nrow = rows[i];
        		var addOk = "Y";

        		// YN_COST가 N이라면 최하위 노드가 아님.
        		if(this.dsList2.getColumn(nrow,"YN_COST") == "N") continue;


        		// 중복된 데이터가 있으면 addOk에 N 값을 셋팅
        		for (var k = 0; k < this.dsListSub.rowcount; k++) {
        			var cd_liccost = this.dsList2.getColumn(nrow, "CD_ORD")+this.dsList2.getColumn(nrow, "CD_LICCOST");
        			var cd_ordcost = this.dsListSub.getColumn(k, "CD_ORD")+this.dsListSub.getColumn(k, "CD_ORDCOST");
        			if(cd_liccost == cd_ordcost){
        				addOk = "N";
        			}
        		}

        		// 중복된 데이터는 추가하지 않는다.
        		if(addOk == "N") continue;

        		var listRow = this.dsListSub.addRow();

        		this.dsListSub.setColumn(listRow, this.ucFlag, "I");
        		this.dsListSub.setColumn(listRow, "CD_ORD", this.dsList2.getColumn(nrow, "CD_ORD"));	//발주구분
        		this.dsListSub.setColumn(listRow, "CD_ORDCOST", this.dsList2.getColumn(nrow, "CD_LICCOST"));	//발주공종
        		this.dsListSub.setColumn(listRow, "DS_ORDCOST", this.dsList2.getColumn(nrow, "DS_LICCOST"));	//발주공종명
        		this.dsListSub.setColumn(listRow, "YN_USE", "Y");
        	}
        	this.gfnSetFormStatus(this, "I");
        	this.dsListSub.set_enableevent(true);
        };

        this.divData_btnLeft_onclick = function(obj,e)
        {
        	this.gfnGridDel(this.dxGridSub);
        };



        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.form_onload,this);
            this.divData.addEventHandler("ondragmove",this.divData_ondragmove,this);
            this.divData.form.divSplitter.addEventHandler("ondrag",this.divData_divSplitter_ondrag,this);
            this.divData.form.btnRight.addEventHandler("onclick",this.divData_btnRight_onclick,this);
            this.divData.form.btnLeft.addEventHandler("onclick",this.divData_btnLeft_onclick,this);
            this.dsSearch.addEventHandler("onvaluechanged",this.dsSearch_onvaluechanged,this);
        };
        this.loadIncludeScript("DWZ_ORDPLNITM.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
