(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("DAB_FAMILYEVENTINFO");
            this.set_titletext("경조관계");
            if (Form == this.constructor)
            {
                this._setFormPosition(1280,720);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("dsList", this);
            obj._setContents("<ColumnInfo><Column id=\"CD_EVENT\" type=\"STRING\" size=\"256\"/><Column id=\"DS_EVENT\" type=\"STRING\" size=\"256\"/><Column id=\"CD_UPCODE\" type=\"STRING\" size=\"256\"/><Column id=\"DS_UPCODE\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("_dsProc", this);
            obj._setContents("<ColumnInfo><Column id=\"TARGET\" type=\"STRING\" size=\"256\"/><Column id=\"SP\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"TARGET\">select</Col><Col id=\"SP\">DABPR_FAMILYEVENTINFO_MASTER</Col></Row><Row><Col id=\"TARGET\">d_select</Col><Col id=\"SP\">DABPR_FAMILYEVENTINFO_SELECT</Col></Row><Row><Col id=\"TARGET\">savesub</Col><Col id=\"SP\">DABPR_FAMILYEVENTINFO_SAVE</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsSearch", this);
            obj._setContents("<ColumnInfo><Column id=\"YN_USE\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row/></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsYN_USE", this);
            obj._setContents("<ColumnInfo><Column id=\"CD_CODE\" type=\"STRING\" size=\"256\"/><Column id=\"DS_CODE\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"CD_CODE\">%</Col><Col id=\"DS_CODE\">전체</Col></Row><Row><Col id=\"CD_CODE\">Y</Col><Col id=\"DS_CODE\">사용</Col></Row><Row><Col id=\"CD_CODE\">N</Col><Col id=\"DS_CODE\">미사용</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsListSub", this);
            obj._setContents("<ColumnInfo><Column id=\"NO_SEQ\" type=\"INT\" size=\"256\"/><Column id=\"YM_BASE\" type=\"STRING\" size=\"256\"/><Column id=\"CD_EVENT\" type=\"STRING\" size=\"256\"/><Column id=\"CD_RELATION\" type=\"STRING\" size=\"256\"/><Column id=\"DS_RELATION\" type=\"STRING\" size=\"256\"/><Column id=\"QN_EVENTBASE\" type=\"INT\" size=\"256\"/><Column id=\"AM_EVENTBASE\" type=\"BIGDECIMAL\" size=\"256\"/><Column id=\"DS_WREATHBASE\" type=\"STRING\" size=\"256\"/><Column id=\"DS_REMARK\" type=\"STRING\" size=\"256\"/><Column id=\"YN_USE\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Div("divSearch","0","0",null,"46.0","0",null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_cssclass("div_SEARCH_Bg");
            obj.set_formscrolltype("none");
            this.addChild(obj.name, obj);

            obj = new Static("staYN_USE","0.0","10.0","92.0","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("0");
            obj.set_text("사용여부");
            obj.set_cssclass("sta_WF_SchLabelE");
            this.divSearch.addChild(obj.name, obj);

            obj = new Combo("cboYN_USE","staYN_USE:0","10.0","80","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("2");
            obj.set_innerdataset("dsYN_USE");
            obj.set_codecolumn("CD_CODE");
            obj.set_datacolumn("DS_CODE");
            this.divSearch.addChild(obj.name, obj);

            obj = new Div("divData","0","divSearch:10",null,null,"0","0",null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_cssclass("div_DATA_Bg");
            this.addChild(obj.name, obj);

            obj = new Div("divSplitter","50%","0","5","100%",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("1");
            obj.set_background("#c9c9c9");
            obj.set_cursor("ew-resize");
            obj.set_cssclass("div_Splitter");
            this.divData.addChild(obj.name, obj);

            obj = new Div("divDataLeft","0","0",null,null,"divSplitter:5","0",null,null,null,null,this.divData.form);
            obj.set_taborder("0");
            this.divData.addChild(obj.name, obj);

            obj = new Grid("objGrid","0","0",null,null,"0","0",null,null,null,null,this.divData.form.divDataLeft.form);
            obj.set_taborder("0");
            obj._setContents("");
            this.divData.form.divDataLeft.addChild(obj.name, obj);

            obj = new Div("divDataRight","divSplitter:5","0",null,null,"0","0",null,null,null,null,this.divData.form);
            obj.set_taborder("0");
            this.divData.addChild(obj.name, obj);

            obj = new Grid("objGridSub","0","0",null,null,"0","0",null,null,null,null,this.divData.form.divDataRight.form);
            obj.getSetter("sub").set("true");
            obj.set_taborder("0");
            obj._setContents("");
            this.divData.form.divDataRight.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this
            obj = new Layout("default","",this._adjust_width,this._adjust_height,this,function(p){});
            this.addLayout(obj.name, obj);
            
            // BindItem Information
            obj = new BindItem("item0","divSearch.form.cboYN_USE","value","dsSearch","YN_USE");
            this.addChild(obj.name, obj);
            obj.bind();
            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script
        this.registerScript("DAB_FAMILYEVENTINFO.xfdl", function() {
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

        	this.divSearch.form.cboYN_USE.set_index(0);

        	this.FormBtns.Select.click();
        };

        /************************************************************************
         * 버튼 설정 : 화면(Tab) 전환시 마다 호출
         ************************************************************************/
        this.fnSetButton = function() {
        	// 서브 버튼 사용
        	this.gfnUseSubBtn(true, this.divData, this.divData.form.divSplitter); // divSplitter sync
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
        	this.gfnGridInit(this.dxGrid, this.dsList, "DA", "DAB_FAMILYEVENTINFO_MASTER");
        	this.dxGrid.set_selecttype("cell");
        	this.dxGrid.addEventHandler("onselectchanged", this.fnGrid_RowCellChanged, this);
        	this.dsList.addEventHandler("canrowposchange", this.dsList_canrowposchange, this);

        	this.gfnGridInit(this.dxGridSub, this.dsListSub, "DA", "DAB_FAMILYEVENTINFO");
        	this.dxGridSub.BeforeUserDataSetParam = "fnGridSub_BeforeUserDataSetParam";
        }

        /************************************************************************
         * 파라미터 설정
         ************************************************************************/
        this.fnSetParameter = function() {

        	this.dsSelect = new Dataset();
        	this.dsSelect.addColumn("YN_USE", "string");

        	this.dsSelectSub = new Dataset();
        	this.dsSelectSub.addColumn("CD_EVENT", "string");


        	this.dsSaveSub = new Dataset();
        	this.dsSaveSub.addColumn("TY_SAVE", "string");
        	this.dsSaveSub.addColumn("NO_SEQ", "int");
        	this.dsSaveSub.addColumn("YM_BASE", "string");
        	this.dsSaveSub.addColumn("CD_EVENT", "string");
        	this.dsSaveSub.addColumn("CD_RELATION", "string");
        	this.dsSaveSub.addColumn("DS_RELATION", "string");
        	this.dsSaveSub.addColumn("QN_EVENTBASE", "int");
        	this.dsSaveSub.addColumn("AM_EVENTBASE", "bigdecimal");
        	this.dsSaveSub.addColumn("DS_WREATHBASE", "string");
        	this.dsSaveSub.addColumn("DS_REMARK", "string");
        	this.dsSaveSub.addColumn("YN_USE", "string");
        	this.dsSaveSub.addColumn("GR_SEARCH", "string");
        	this.dsSaveSub.addColumn("TY_AUTH", "string");
        	this.dsSaveSub.addColumn("GR_DEPT", "string");
        	this.dsSaveSub.addColumn("ID_USER", "string");

        }

        /************************************************************************
         * 버튼 이벤트
         ************************************************************************/
         /*
          *	조회 버튼
          */
        this.fnSelect = function() {
        	this.gfnGridBeforeSelect(this.dxGrid);

        	this.dsListSub.clearData();

        	this.dsSelect.clearData();
        	this.dsSelect.addRow();
        	this.dsSelect.setColumn(0, "YN_USE", this.dsSearch.getColumn(0, "YN_USE"));

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
        	//this.gfnGridAdd(this.dxGrid);
        }

        /*
         *	삭제 버튼
         */
        this.fnDel = function() {
        	//this.gfnGridDel(this.dxGrid);
        }

        /*
         *	저장 버튼
         */
        this.fnSave = function() {

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
        this.fnSelectSub = function() {
        	if (this.dxGrid.rowcount == 0 || this.dxGrid.currentrow < 0) return false;

        	this.dsListSub.clearData();
        	var sCD_EVENT = this.dsList.getColumn(this.dsList.rowposition, "CD_EVENT");
        	if (this.gfnIsNull(sCD_EVENT)) {
        		return false;
        	}

        	this.gfnGridBeforeSelect(this.dxGridSub);

        	this.dsSelectSub.clearData();
        	this.dsSelectSub.addRow();
        	this.dsSelectSub.setColumn(0, "CD_EVENT", sCD_EVENT);

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

        this.fnAddSub = function() {
        	this.gfnGridAdd(this.dxGridSub);
        }
        this.fnDelSub = function() {
        	this.gfnGridDel(this.dxGridSub);
        }

        this.fnSaveSub = function() {

        	if (!this.gfnGridValidate(this.dxGridSub)) return;

        	this.dxGridSub.updateToDataset();
        	this.dsSaveSub.clearData();

        	var sCD_EVENT = this.dsList.getColumn(this.dsList.rowposition, "CD_EVENT");

        	for (var i = 0; i < this.dsListSub.rowcount; i++) {
        		var flag = this.gfnGetFlag(this.dsListSub, i);
        		switch(flag) {
        			case "I":
        			case "U":
        			case "D":
        				var nrow = this.dsSaveSub.addRow();
        				this.dsSaveSub.setColumn(nrow, "TY_SAVE", flag);
        				this.dsSaveSub.setColumn(nrow, "NO_SEQ", this.gfnNvl(this.dsListSub.getColumn(i, "NO_SEQ"), ""));
        				this.dsSaveSub.setColumn(nrow, "YM_BASE", this.gfnNvl(this.dsListSub.getColumn(i, "YM_BASE"), ""));
        				this.dsSaveSub.setColumn(nrow, "CD_EVENT", this.gfnNvl(sCD_EVENT, ""));
        				this.dsSaveSub.setColumn(nrow, "CD_RELATION", this.gfnNvl(this.dsListSub.getColumn(i, "CD_RELATION"), ""));
        				this.dsSaveSub.setColumn(nrow, "DS_RELATION", this.gfnNvl(this.dsListSub.getColumn(i, "DS_RELATION"), ""));
        				this.dsSaveSub.setColumn(nrow, "QN_EVENTBASE", this.gfnNvl(this.dsListSub.getColumn(i, "QN_EVENTBASE"), 0));
        				this.dsSaveSub.setColumn(nrow, "AM_EVENTBASE", this.gfnNvl(this.dsListSub.getColumn(i, "AM_EVENTBASE"), 0));
        				this.dsSaveSub.setColumn(nrow, "DS_WREATHBASE", this.gfnNvl(this.dsListSub.getColumn(i, "DS_WREATHBASE"), ""));
        				this.dsSaveSub.setColumn(nrow, "DS_REMARK", this.gfnNvl(this.dsListSub.getColumn(i, "DS_REMARK"), ""));
        				this.dsSaveSub.setColumn(nrow, "YN_USE", this.gfnNvl(this.dsListSub.getColumn(i, "YN_USE"), ""));
        				this.dsSaveSub.setColumn(nrow, "GR_SEARCH", this.FormInfo.GR_SEARCH);
        				this.dsSaveSub.setColumn(nrow, "TY_AUTH", this.FormInfo.TY_AUTH);
        				this.dsSaveSub.setColumn(nrow, "GR_DEPT", this.AuthClient.CD_DEPT);
        				this.dsSaveSub.setColumn(nrow, "ID_USER", this.AuthClient.ID_USER);
        		}
        	}

        	if (this.dsSaveSub.rowcount == 0) return;

        	var strSvcId    = "savesub";
        	var strSvcType  = "save";
        	var inProc		= "_dsProc";
        	var inData      = "savesub=dsSaveSub";
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
        	else if(svcID == "savesub") {
        		if (errorCode == 0) {
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

        /*
         *	서브 그리드 코드파인드
         */
        this.fnGridSub_BeforeUserDataSetParam = function(id, dsUserParam, nrow) {
        	return true;
        }

        /************************************************************************
         * 기타 이벤트
         ************************************************************************/
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
        	if(e.newvalue != e.oldvalue){
        		this.gfnSetFormStatus(this);
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
        this.loadIncludeScript("DAB_FAMILYEVENTINFO.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
