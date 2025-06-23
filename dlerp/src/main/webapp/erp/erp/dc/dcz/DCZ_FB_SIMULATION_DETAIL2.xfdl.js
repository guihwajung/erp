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
            this.set_titletext("C/F(건축) Simulation");
            if (Form == this.constructor)
            {
                this._setFormPosition(1280,720);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("dsList", this);
            obj._setContents("");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsSearch", this);
            obj._setContents("<ColumnInfo><Column id=\"NO_ID_FB\" type=\"STRING\" size=\"256\"/><Column id=\"CD_LICCOST\" type=\"STRING\" size=\"256\"/><Column id=\"DS_LICCOST\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row/></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsListSub", this);
            obj._setContents("");
            this.addChild(obj.name, obj);


            obj = new Dataset("_dsProc", this);
            obj._setContents("<ColumnInfo><Column id=\"TARGET\" type=\"STRING\" size=\"256\"/><Column id=\"SP\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"TARGET\">select</Col><Col id=\"SP\">DCZPR_FB_SIMULATION_DETAIL2_SELECT</Col></Row><Row><Col id=\"TARGET\">d_select</Col><Col id=\"SP\">DCZPR_FB_SIMULATION_DETAIL2_CAL_SELECT</Col></Row><Row><Col id=\"TARGET\">exec</Col><Col id=\"SP\">DCZPR_FB_SIMULATION_DETAIL2_CREATE</Col></Row></Rows>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Div("divData","0","0",null,null,"0","0",null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_cssclass("div_DATA_Bg");
            this.addChild(obj.name, obj);

            obj = new Div("divSplitter","0","50%","100%","5",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("1");
            obj.set_background("skyblue");
            obj.set_cursor("ns-resize");
            this.divData.addChild(obj.name, obj);

            obj = new Div("divDataTop","0","0",null,null,"0","divSplitter:5",null,null,null,null,this.divData.form);
            obj.set_taborder("0");
            this.divData.addChild(obj.name, obj);

            obj = new Grid("objGrid","0","0",null,null,"0","0",null,null,null,null,this.divData.form.divDataTop.form);
            obj.set_taborder("0");
            obj._setContents("");
            this.divData.form.divDataTop.addChild(obj.name, obj);

            obj = new Div("divDataBottom","0","divSplitter:5",null,null,"0","0",null,null,null,null,this.divData.form);
            obj.set_taborder("0");
            this.divData.addChild(obj.name, obj);

            obj = new Grid("objGridSub","0","0",null,null,"0","0",null,null,null,null,this.divData.form.divDataBottom.form);
            obj.getSetter("sub").set("true");
            obj.set_taborder("0");
            obj._setContents("");
            this.divData.form.divDataBottom.addChild(obj.name, obj);
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
        this.registerScript("DCZ_FB_SIMULATION_DETAIL2.xfdl", function() {
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

        	if(!this.gfnIsNull(this.getOwnerFrame().NO_ID_FB) && !this.gfnIsNull(this.getOwnerFrame().CD_LICCOST))
        	{
        		this.dsSearch.setColumn(0, "NO_ID_FB", this.getOwnerFrame().NO_ID_FB);
        		this.dsSearch.setColumn(0, "CD_LICCOST", this.getOwnerFrame().CD_LICCOST);
        		this.dsSearch.setColumn(0, "DS_LICCOST", this.getOwnerFrame().DS_LICCOST);

        		this.firstSelect = true;
        		//this.dsList.set_enableevent(false);
        		this.FormBtns.Select.click();
        		//this.dsList.set_enableevent(true);
        	}
        };


        /************************************************************************
         * 버튼 설정 : 화면(Tab) 전환시 마다 호출
         ************************************************************************/
        this.fnSetButton = function() {
        	this.FormBtns.Add.set_enable(false);
        	this.FormBtns.Save.set_enable(false);
        	this.FormBtns.Del.set_enable(false);
        }

        /************************************************************************
         * 확장 버튼 : 화면별 버튼 설정 ID, function 연결
         ************************************************************************/
        this.fnSetExtendButton = function() {
        	this.btnCal = this.gfnFormButtonAdd("btnCal", "fnCal");
        };

        /************************************************************************
         * 변수 선언
         ************************************************************************/
        this.fnSetVariable = function() {

           this.dxGrid = this.divData.form.divDataTop.form.objGrid;
           this.dxGridSub = this.divData.form.divDataBottom.form.objGridSub;
        };


        /************************************************************************
         * 이벤트 설정
         ************************************************************************/
        this.fnSetEvent = function() {

           this.gfnGridInit(this.dxGrid, this.dsList, "DC", "DCZ_FB_SIMULATION_DETAIL2");
           this.gfnGridInit(this.dxGridSub, this.dsListSub, "DC", "DCZ_FB_SIMULATION_DETAIL2_CAL");

           this.dxGrid.set_selecttype("cell");
           this.dxGrid.addEventHandler("onselectchanged", this.fnGrid_RowCellChanged, this);
           this.dsList.addEventHandler("canrowposchange", this.dsList_canrowposchange, this);

        }


        /************************************************************************
         * 파라미터 설정
         ************************************************************************/
        this.fnSetParameter = function() {

        	this.dsSelect = new Dataset();
        	this.dsSelect.addColumn("NO_ID_FB", "string");
        	this.dsSelect.addColumn("DT_FEEDBACK", "string");
        	this.dsSelect.addColumn("CD_LICCOST", "string");

        	this.dsSelectSub = new Dataset();
        	this.dsSelectSub.addColumn("NO_ID_FB", "string");
        	this.dsSelectSub.addColumn("CD_CCOST", "string");
        	this.dsSelectSub.addColumn("CD_CBS", "string");

        	this.dsExec = new Dataset();
        	this.dsExec.addColumn("NO_ID_FB", "string");
        	this.dsExec.addColumn("DT_FEEDBACK", "string");
        	this.dsExec.addColumn("CD_LICCOST", "string");

        }

        /************************************************************************
         * 버튼 이벤트
         ************************************************************************/
         /*
          *   조회 버튼
          */
        this.fnSelect = function() {
           //if (!this.fnSelectValidate()) return false;
           this.gfnGridBeforeSelect(this.dxGrid);

           this.dsSelect.clearData();
           this.dsSelect.addRow();

           this.dsSelect.setColumn(0, "NO_ID_FB", this.dsSearch.getColumn(0, "NO_ID_FB"));
           this.dsSelect.setColumn(0, "DT_FEEDBACK", "");
           this.dsSelect.setColumn(0, "CD_LICCOST", this.dsSearch.getColumn(0, "CD_LICCOST"));

           var strSvcId    = "select";
           var strSvcType  = "grid";
           var inProc      = "_dsProc";
           var inData      = "select=dsSelect";
           var outData     = "dsList=select0";
           var strArg      = "";
           var callBackFnc = "fnCallback";

           this.gfnTransaction( strSvcId ,    // transaction을 구분하기 위한 svc id값
                          strSvcType ,    // transaction을 요청할 구분
                          inProc,         // Procedure 정보 Dataset 이름
                          inData ,       // 입력값으로 보낼 dataset id , a=b형태로 실제이름과 입력이름을 매칭
                          outData ,       // 처리결과값으로 받을 dataset id, a=b형태로 실제이름과 입력이름을 매칭
                          strArg,          // 입력갑스로 보낼 arguments, strFormData="20120607"
                          callBackFnc); // 통신방법 정의 [생략가능]
        }



        /************************************************************************
         * 서브 버튼 이벤트
         ************************************************************************/
        this.fnSelectSub = function() {
        	if(this.dsList.rowcount < 1 || this.dsList.rowposition < 0) return;

        	if (this.firstSelect) {
        		this.firstSelect = false;
        		this.dxGrid.set_enableevent(false);
        		this.dxGrid.clearSelect();
        		this.dxGrid.set_enableevent(true);
        		return;
        	}

        	this.gfnGridBeforeSelect(this.dxGridSub);

        	// 디테일 데이터셋 데이터 삭제
        	this.dsListSub.clearData();

        	// 디테일 파마리터 데이터셋 셋팅
        	this.dsSelectSub.clearData();
        	this.dsSelectSub.addRow();

        	this.dsSelectSub.setColumn(0, "NO_ID_FB", this.dsList.getColumn(this.dsList.rowposition, "NO_ID_FB"));
        	this.dsSelectSub.setColumn(0, "CD_CCOST", this.dsList.getColumn(this.dsList.rowposition, "CD_CCOST"));
        	this.dsSelectSub.setColumn(0, "CD_CBS", this.dsList.getColumn(this.dsList.rowposition, "CD_CBS"));

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



        /*
         *   입력 버튼
         */
        this.fnAdd = function() {

           //var nrow = this.gfnGridAdd(this.dxGridSub, "bottom"); // top (default), bottom, current


        }


        /*
         *   삭제 버튼
        */
        this.fnDel = function() {
        	this.gfnGridDel(this.dxGridSub);
        }

        this.fnExcel = function() {
        	this.gfnExcelExport(this.dxGridSub);
        }

        /************************************************************************
         * Validate
         ************************************************************************/
        /*
         *   조회 Validate
         */
        this.fnSelectValidate = function() {
           var validate = true;

           return validate;

        };
        /************************************************************************
         * 콜백 이벤트
         ************************************************************************/
        /*
         *   콜백 처리
         */
        this.fnCallback = function(svcID, errorCode, errorMsg)
        {
           if (svcID == "select") {
        		this.gfnGridAfterSelect(this.dxGrid);
           }else if (svcID == "detail") {

        		this.gfnGridAfterSelect(this.dxGridSub);
        	}
        	else if(svcID == "exec") {
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
         *********************************************************************** */



        this.fnGrid_RowCellChanged = function(obj,e)
        {
            if ((obj.oldrow > -1 && obj.oldrow == e.row)
        		|| (obj.oldrow == -1 && e.oldrow != e.row)) {
        		// 마스터 그리드 클릭 이벤트(디테일 그리드 조회)
        		this.fnSelectSub();
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
        		this.gfnConfirm("변경된 데이터가 있습니다.\r\n계속 진행하시겠습니까?", "dsList_canrowposchange_callback");
        	}
        	return can_rowchange;
        }

        this.dsList_canrowposchange_callback = function(strId, val)
        {
        	if(val == true) {
        		this.dsList.set_enableevent(false);
        		this.dsList.set_rowposition(this._row);
        		this.dsList.set_enableevent(true);
        	}
        }


        /************************************************************************
         * 기타 이벤트
         ************************************************************************/

        this.dsSearch_onvaluechanged = function(obj,e)
        {
           if(e.oldvalue != e.newvalue) {
        		 this.gfnSetFormStatus(this);   // 폼상태 초기화
        		 this.gfnGridClear(this.dxGrid);
        		 this.gfnGridClear(this.dxGridSub);
        	}
        };


        this.fnSearchInit = function(obj,e) {
           if(e == null || (e.pretext != e.posttext)) {
              this.gfnSetFormStatus(this);
              this.gfnGridClear(this.dxGrid);
              }
        }


        this.divData_ondragmove = function(obj,e)
        {
           if(e.userdata == "splitter") {
              this.divData.form.divSplitter.set_top(e.clienty);
              this.divData.form.resetScroll();
           }
        };

        this.divData_divSplitter_ondrag = function(obj,e)
        {
           e.set_userdata("splitter");
           return true;
        };


        this.fnExec = function() {

        	this.dsExec.clearData();

        	this.dsExec.addRow();

        	this.dsExec.setColumn(0, "NO_ID_FB", this.dsList.getColumn(this.dsList.rowposition, "NO_ID_FB"));
        	this.dsExec.setColumn(0, "DT_FEEDBACK", "");
        	this.dsExec.setColumn(0, "CD_LICCOST", "");

        	if (this.dsExec.rowcount == 0) return;

        	var strSvcId    = "exec";
        	var strSvcType  = "save";
        	var inProc		= "_dsProc";
        	var inData      = "exec=dsExec";
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

        this.fnCal = function(obj,e) {
        	// 선택된 row가 있을 경우에만 팝업을 띄움
        	if (!this.gfnGridIsRow(this.dxGrid)) { return false; }

        	this.gfnConfirm("시뮬레이션 생성하시겠습니까?", "dsList_fnCal_callback");


        }

        this.dsList_fnCal_callback = function(strId, val)
        {
        	if(val == true) {
        		this.fnExec();
        	}
        }


        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.form_onload,this);
            this.divData.addEventHandler("ondragmove",this.divData_ondragmove,this);
            this.divData.form.divSplitter.addEventHandler("ondrag",this.divData_divSplitter_ondrag,this);
            this.dsList.addEventHandler("canrowposchange",this.dsList_canrowposchange,this);
            this.dsSearch.addEventHandler("onvaluechanged",this.dsSearch_onvaluechanged,this);
            this.dsListSub.addEventHandler("oncolumnchanged",this.dsListSub_oncolumnchanged,this);
        };
        this.loadIncludeScript("DCZ_FB_SIMULATION_DETAIL2.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
