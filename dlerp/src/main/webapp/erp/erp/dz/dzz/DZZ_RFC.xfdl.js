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
            obj._setContents("<ColumnInfo><Column id=\"TARGET\" type=\"STRING\" size=\"256\"/><Column id=\"SP\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"TARGET\">select</Col><Col id=\"SP\">DZZPR_RFCLIST_SELECT</Col></Row><Row><Col id=\"TARGET\">d_select</Col><Col id=\"SP\">DZZPR_RFCPARAM_SELECT</Col></Row><Row><Col id=\"TARGET\">d_save</Col><Col id=\"SP\">DZZPR_RFCPARAM_SAVE</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsListSub", this);
            obj._setContents("");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsSearch", this);
            obj._setContents("<ColumnInfo><Column id=\"CD_MODULE\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"CD_MODULE\"/></Row></Rows>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Div("divSearch","0","0",null,"46","0",null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_cssclass("div_SEARCH_Bg");
            obj.set_text("");
            this.addChild(obj.name, obj);

            obj = new Static("sta00","0","10","79","24",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("0");
            obj.set_text("시스템");
            obj.set_textDecoration("none");
            obj.set_cssclass("sta_WF_SchLabel");
            this.divSearch.addChild(obj.name, obj);

            obj = new Div("ccfCD_MODULE","79","10","300","24",null,null,null,null,null,null,this.divSearch.form);
            obj.getSetter("CDTextWidth").set("70");
            obj.set_taborder("1");
            obj.set_url("cmm::cmmCodeFind.xfdl");
            this.divSearch.addChild(obj.name, obj);

            obj = new Div("divData","0","divSearch:-3",null,null,"0","0",null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_cssclass("div_DATA_Bg");
            this.addChild(obj.name, obj);

            obj = new Div("divSplitter","50%","0","23","100%",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("0");
            obj.set_background("url(\'theme://images/slt_WF_SplitterV.png\') no-repeat center center");
            obj.set_cursor("ew-resize");
            this.divData.addChild(obj.name, obj);

            obj = new Div("divDataLeft","0","0",null,null,"divSplitter:6","0",null,null,null,null,this.divData.form);
            obj.set_taborder("0");
            this.divData.addChild(obj.name, obj);

            obj = new Static("sta01","0","0","100%","35",null,null,null,null,null,null,this.divData.form.divDataLeft.form);
            obj.set_taborder("0");
            obj.set_text("RFC정보 1");
            obj.set_cssclass("sta_TITLE_Bg");
            this.divData.form.divDataLeft.addChild(obj.name, obj);

            obj = new Grid("objGrid","0","sta01:0",null,null,"0","0",null,null,null,null,this.divData.form.divDataLeft.form);
            obj.set_taborder("0");
            obj._setContents("");
            this.divData.form.divDataLeft.addChild(obj.name, obj);

            obj = new Div("divDataRight","divSplitter:6","0",null,null,"0","0",null,null,null,null,this.divData.form);
            obj.set_taborder("0");
            this.divData.addChild(obj.name, obj);

            obj = new Static("sta02","0","0","100%","35",null,null,null,null,null,null,this.divData.form.divDataRight.form);
            obj.set_taborder("0");
            obj.set_text("RFC정보 2");
            obj.set_cssclass("sta_TITLE_Bg");
            this.divData.form.divDataRight.addChild(obj.name, obj);

            obj = new Grid("objGridSub","0","sta02:0",null,null,"0","0",null,null,null,null,this.divData.form.divDataRight.form);
            obj.set_taborder("0");
            obj._setContents("");
            this.divData.form.divDataRight.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this
            obj = new Layout("default","",this._adjust_width,this._adjust_height,this,function(p){});
            this.addLayout(obj.name, obj);
            
            // BindItem Information
            obj = new BindItem("item0","divSearch.form.ccfCD_MODULE.form.CDTextBox","value","dsSearch","CD_MODULE");
            this.addChild(obj.name, obj);
            obj.bind();
            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {
            this._addPreloadList("fdl","cmm::cmmCodeFind.xfdl");
        };
        
        // User Script
        this.registerScript("DZZ_RFC.xfdl", function() {
        this.objApp = this.gfnGetApplication();

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
        	//this.FormBtns.Select.click();
        };

        /************************************************************************
         * 버튼 설정
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
        	this.ccfCD_MODULE = this.divSearch.form.ccfCD_MODULE;
        	this.dxGrid = this.divData.form.divDataLeft.form.objGrid;
        	this.dxGridSub = this.divData.form.divDataRight.form.objGridSub;
        };

        /************************************************************************
         * 이벤트 설정
         ************************************************************************/
        this.fnSetEvent = function() {
        	this.ccfCD_MODULE.CodeFindName = "DZX_CFSYSTEM";

        	this.gfnGridInit(this.dxGrid, this.dsList, "DZ", "DZZ_RFCLIST");
        	this.dxGrid.set_selecttype("cell");
        	this.dxGrid.addEventHandler("onselectchanged", this.fnGrid_RowCellChanged, this);
        	this.dsList.addEventHandler("canrowposchange", this.dsList_canrowposchange, this);

        	this.gfnGridInit(this.dxGridSub, this.dsListSub, "DZ", "DZZ_RFCPARAM");
        	//this.dxGridSub.BeforeUserDataSetParam = "fnGridSub_BeforeUserDataSetParam";
        }

        /************************************************************************
         * 파라미터 설정
         ************************************************************************/
        this.fnSetParameter = function() {

        	this.dsSelect = new Dataset();
        	this.dsSelect.addColumn("CD_MODULE", "string");

        	this.dsSelectSub = new Dataset();
        	this.dsSelectSub.addColumn("CD_RFC", "string");

        	this.dsSave = new Dataset();
        	this.dsSave.addColumn("TY_SAVE", "string");
        	this.dsSave.addColumn("CD_RFC", "string");
        	this.dsSave.addColumn("NO_ID", "int");
        	this.dsSave.addColumn("TY_PARAM", "string");
        	this.dsSave.addColumn("IN_PARAM", "string");
        	this.dsSave.addColumn("NO_PARAM", "int");
        	this.dsSave.addColumn("DS_RMKS", "string");
        	this.dsSave.addColumn("ID_USER", "string");
        	this.dsSave.addColumn("NM_OUTPUT", "string");
        }

        /************************************************************************
         * 버튼 이벤트
         ************************************************************************/
         /*
          *	조회 버튼
          */
        this.fnSelect = function() {
        	this.gfnGridBeforeSelect(this.dxGrid);
        	this.dsSelect.clearData();
        	this.dsSelect.addRow();

        	this.dsSelect.setColumn(0, "CD_MODULE", this.dsSearch.getColumn(0, "CD_MODULE"));

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
        	var nrow = this.gfnGridAdd(this.dxGridSub);

        	this.dsListSub.set_enableevent(false);
        	this.dsListSub.setColumn(nrow, "CD_RFC", this.dsList.getColumn(this.dsList.rowposition, "CD_CODE"));
        	this.dsListSub.set_enableevent(true);
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
        				this.dsSave.setColumn(nrow, "TY_SAVE", flag);
        				this.dsSave.setColumn(nrow, "CD_RFC", this.dsListSub.getColumn(i, "CD_RFC"));
        				this.dsSave.setColumn(nrow, "NO_ID", this.dsListSub.getColumn(i, "NO_ID"));
        				this.dsSave.setColumn(nrow, "TY_PARAM", this.dsListSub.getColumn(i, "TY_PARAM"));
        				this.dsSave.setColumn(nrow, "IN_PARAM", this.dsListSub.getColumn(i, "IN_PARAM"));
        				this.dsSave.setColumn(nrow, "NO_PARAM", this.dsListSub.getColumn(i, "NO_PARAM"));
        				this.dsSave.setColumn(nrow, "DS_RMKS", this.dsListSub.getColumn(i, "DS_RMKS"));
        				this.dsSave.setColumn(nrow, "ID_USER", this.AuthClient.ID_USER);
        				this.dsSave.setColumn(nrow, "NM_OUTPUT", this.dsListSub.getColumn(i, "NM_OUTPUT"));
        				break;
        		}
        	}

        	if (this.dsSave.rowcount == 0) return;

        	var strSvcId    = "save";
        	var strSvcType  = "save";
        	var inProc		= "_dsProc";
        	var inData      = "d_save=dsSave";
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
        // 디테일 그리드 조회
        this.fnSelectSub = function() {

        	if (this.dxGrid.rowcount == 0 || this.dxGrid.currentrow < 0) return;


        	this.gfnGridBeforeSelect(this.dxGridSub);

        	// 디테일 데이터셋 데이터 삭제
        	this.dsListSub.clearData();

        	// 디테일 파마리터 데이터셋 셋팅
        	this.dsSelectSub.clearData();
        	this.dsSelectSub.addRow();

        	this.dsSelectSub.setColumn(0, "CD_RFC", this.dsList.getColumn(this.dsList.rowposition, "CD_CODE"));

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
        	else if (svcID == "detail") {
        		this.gfnGridAfterSelect(this.dxGridSub);
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
        this.dsSearch_onvaluechanged = function(obj,e)
        {
        	if(e.oldvalue != e.newvalue){
        	this.gfnGridClear(this.dxGrid);
        	this.gfnGridClear(this.dxGridSub);
        	}
        };

        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.form_onload,this);
            this.divData.addEventHandler("ondragmove",this.divData_ondragmove,this);
            this.divData.form.divSplitter.addEventHandler("ondrag",this.divData_divSplitter_ondrag,this);
            this.dsSearch.addEventHandler("onvaluechanged",this.dsSearch_onvaluechanged,this);
        };
        this.loadIncludeScript("DZZ_RFC.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
