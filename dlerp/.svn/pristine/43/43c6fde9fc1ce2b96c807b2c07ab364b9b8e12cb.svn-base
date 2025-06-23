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
            this.set_titletext("실행기성조회");
            if (Form == this.constructor)
            {
                this._setFormPosition(1280,720);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("dsList", this);
            obj._setContents("");
            this.addChild(obj.name, obj);


            obj = new Dataset("_dsProc", this);
            obj._setContents("<ColumnInfo><Column id=\"TARGET\" type=\"STRING\" size=\"256\"/><Column id=\"SP\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"TARGET\">select</Col><Col id=\"SP\">DWBPR_SHGISUNGCONT_SELECT</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsSearch", this);
            obj._setContents("<ColumnInfo><Column id=\"CD_SITE\" type=\"STRING\" size=\"256\"/><Column id=\"YM_WORK\" type=\"STRING\" size=\"256\"/><Column id=\"NO_HADOCONT\" type=\"STRING\" size=\"256\"/><Column id=\"YN_TUJA\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row/></Rows>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Div("divSearch","0.0","10.0",null,"46.0","0",null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_cssclass("div_SEARCH_Bg");
            obj.set_formscrolltype("none");
            obj.set_text("");
            this.addChild(obj.name, obj);

            obj = new Static("staCD_SITE","0.0","10.0","92.0","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("2");
            obj.set_text("현장코드");
            obj.set_cssclass("sta_WF_SchLabelE");
            this.divSearch.addChild(obj.name, obj);

            obj = new Div("ccfCD_SITE","staCD_SITE:0.0","10.0","200","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.getSetter("CodeFindName").set("DZX_CFSITE");
            obj.getSetter("CDTextWidth").set("80");
            obj.set_taborder("0");
            obj.set_url("cmm::cmmCodeFind.xfdl");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("staYM_WORK","ccfCD_SITE:0.0","10.0","92.0","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("3");
            obj.set_text("기성년월");
            obj.set_cssclass("sta_WF_SchLabelE");
            this.divSearch.addChild(obj.name, obj);

            obj = new Div("ctclYM_WORK","staYM_WORK:0.0","10.0","80","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("1");
            obj.set_url("cmm::cmmCalMM.xfdl");
            this.divSearch.addChild(obj.name, obj);

            obj = new CheckBox("cchkYN_DOKUB","ctclYM_WORK:0.0","10.0","50","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("6");
            obj.set_text("도급");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("sta00","cchkYN_DOKUB:0.0","10.0","92.0","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("4");
            obj.set_text("계약번호");
            obj.set_visible("false");
            obj.set_cssclass("sta_WF_SchLabelE");
            this.divSearch.addChild(obj.name, obj);

            obj = new Div("ccfNO_HADOCONT","sta00:0.0","10.0","250","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.getSetter("CDTextWidth").set("80");
            obj.set_taborder("5");
            obj.set_url("cmm::cmmCodeFind.xfdl");
            obj.getSetter("CodeFindName").set("DWX_CFHADO_01_CHA");
            obj.set_visible("false");
            this.divSearch.addChild(obj.name, obj);

            obj = new Div("divData","0","divSearch:10",null,null,"0","0",null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_cssclass("div_DATA_Bg");
            this.addChild(obj.name, obj);

            obj = new Grid("objGrid","0","0",null,null,"0","0",null,null,null,null,this.divData.form);
            obj.set_taborder("0");
            obj.set_treeinitstatus("collapse,all");
            obj._setContents("");
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

            obj = new BindItem("item2","divSearch.form.ccfNO_HADOCONT.form.CDTextBox","value","dsSearch","NO_HADOCONT");
            this.addChild(obj.name, obj);
            obj.bind();
            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {
            this._addPreloadList("fdl","cmm::cmmCodeFind.xfdl");
            this._addPreloadList("fdl","cmm::cmmCalMM.xfdl");
        };
        
        // User Script
        this.registerScript("DWD_SHGISUNGCONT.xfdl", function() {
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

        	if(!this.gfnIsNull(this.getOwnerFrame().CD_SITE) && !this.gfnIsNull(this.getOwnerFrame().DS_SITE)
        	 && !this.gfnIsNull(this.getOwnerFrame().YM_WORK))
        	 {
        		this.dsSearch.setColumn(0, "CD_SITE", this.getOwnerFrame().CD_SITE);
        		this.divSearch.form.ccfCD_SITE.form.DSTextBox.set_value(this.getOwnerFrame().DS_SITE);
        		this.dsSearch.setColumn(0, "YM_WORK", (this.getOwnerFrame().YM_WORK).substr(0,6));

        		this.FormBtns.Select.click();
        	 }
        	 else
        	 {
        		var today = this.gfnGetDate().substr(0, 6);
        		this.dsSearch.setColumn(0, "YM_WORK", today);
        	 }
         	 this.dsSearch.setColumn(0, "NO_HADOCONT", "직영");

        	 this.divSearch.form.cchkYN_DOKUB.set_visible(false);
        	 //this.divSearch.form.cchkYN_DOKUB.set_value(true);
        	 //this.divSearch_cchkYN_DOKUB_onchanged(this.divSearch.form.cchkYN_DOKUB, {postvalue:this.divSearch.form.cchkYN_DOKUB.value});

        // 	 this.divSearch.form.ccfNO_HADOCONT.form.DSTextBox.set_value("미발주분");
        // 	 this.divSearch.form.ccfNO_HADOCONT.form.fnFitToContents();
        };

        /************************************************************************
         * 버튼 설정 : 화면(Tab) 전환시 마다 호출
         * 서브버튼 사용 및 공통버튼 강제 제어시 여기서 처리
         ************************************************************************/
        this.fnSetButton = function() {
        	this.FormBtns.Add.set_enable(false);
        	this.FormBtns.Del.set_enable(false);

        }

        /************************************************************************
         * 확장 버튼 : 화면별 버튼 설정 ID, function 연결 (화면버튼관리)
         ************************************************************************/
        this.fnSetExtendButton = function() {
            this.btnCostTuja = this.gfnFormButtonAdd("btnCostTuja", "fnCostTuja");
        };

        this.fnCostTuja = function(obj, e){

        	if(!this.gfnGridIsRow(this.dxGrid)){return false;}
        	var param = {};
        	param.CD_SITE = this.dsSearch.getColumn(0, "CD_SITE");
        	param.DS_SITE = this.divSearch.form.ccfCD_SITE.form.DSTextBox.value;
        	param.CD_COST = this.dsList.getColumn(this.dsList.rowposition, "CD_COST");
        	param.CD_DKCOST = this.dsList.getColumn(this.dsList.rowposition, "CD_DKCOST");
        	param.DS_COST = this.dsList.getColumn(this.dsList.rowposition, "DS_COST");
        	param.SZ_SIZE = this.dsList.getColumn(this.dsList.rowposition, "SZ_SIZE");
        	param.DS_UNIT = this.dsList.getColumn(this.dsList.rowposition, "DS_UNIT");

        	this.gfnFormOpen(this.FormInfo.CD_MODULE, "DWX_COSTTUJA", "", param);
        };

        /************************************************************************
         * 변수 선언
         ************************************************************************/
        this.fnSetVariable = function() {
        	this.dxGrid = this.divData.form.objGrid;
        };

        /************************************************************************
         * 이벤트 설정
         ************************************************************************/
        this.fnSetEvent = function() {
        	//this.divSearch.form.ccfCD_SITE.BeforeUserDataSetParam = 'fnBeforeUserDataSetParam';
        	//this.divSearch.form.ccfNO_HADOCONT.BeforeUserDataSetParam = 'fnBeforeUserDataSetParam';


        	// 그리드 초기화
        	this.gfnGridInit(this.dxGrid, this.dsList, "DW", "DWB_SHGISUNGCONT", "DS_ITEM", "GR_COST");
        };

        /************************************************************************
         * 파라미터 설정
         ************************************************************************/
        this.fnSetParameter = function() {
        	this.dsSelect = new Dataset();
        	this.dsSelect.addColumn("CD_SITE", "string");
        	this.dsSelect.addColumn("YM_WORK", "string");
        	this.dsSelect.addColumn("NO_HADOCONT", "string");
        	this.dsSelect.addColumn("YN_TUJA", "string");
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

        	this.dsSelect.setColumn(0, "CD_SITE", this.dsSearch.getColumn(0, "CD_SITE"));
        	this.dsSelect.setColumn(0, "YM_WORK", this.dsSearch.getColumn(0, "YM_WORK"));
        	this.dsSelect.setColumn(0, "NO_HADOCONT",  this.dsSearch.getColumn(0, "NO_HADOCONT"));
        	this.dsSelect.setColumn(0, "YN_TUJA",  this.dsSearch.getColumn(0, "YN_TUJA"));

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

        	if (this.gfnIsNull(this.dsSearch.getColumn(0, "CD_SITE"))) {
        		validate = false;
        		// Alert후 실행할 처리
        		this.fnVaidateCallback = function() {
        			this.divSearch.form.ccfCD_SITE.form.CDTextBox.setFocus();
        		}
        		this.gfnAlert("현장코드를 입력하세요.", "fnVaidateCallback");
        	}
        	else if (this.gfnIsNull(this.dsSearch.getColumn(0, "YM_WORK"))) {
        		validate = false;
        		// Alert후 실행할 처리
        		this.fnVaidateCallback = function() {
        			this.divSearch.form.ctclYM_WORK.setFocus();
        		}
        		this.gfnAlert("기성년월을 입력하세요.", "fnVaidateCallback");
        	}
        // 	else if (this.gfnIsNull(this.dsSearch.getColumn(0, "NO_HADOCONT"))) {
        // 		validate = false;
        // 		// Alert후 실행할 처리
        // 		this.fnVaidateCallback = function() {
        // 			this.divSearch.form.ccfNO_HADOCONT.setFocus();
        // 		}
        // 		this.gfnAlert("계약번호를 입력하세요.", "fnVaidateCallback");
        // 	}

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
        //코드파인드의 파라미터 값을 넘겨줄때 사용하는 함수
        this.fnBeforeUserDataSetParam = function(id, dsUserParam, nrow) {

        	if (id == "ccfCD_SITE") {
        		dsUserParam.setColumn(nrow, "CD_CORP", this.objApp.gdsUserInfo.getColumn(0, "CD_CORP"));	// 현장코드
        		dsUserParam.setColumn(nrow, "CD_SAUPCENTER", "");	// 현장코드
        	}

        // 	if (id == "ccfNO_HADOCONT") {
        // 		var cd_site = this.dsSearch.getColumn(0, "CD_SITE");
        // 		if (this.gfnIsNull(cd_site)) {
        //  			this.gfnAlert("현장코드를 먼저 입력하세요.");
        //  			return false;
        //  		}
        // 		dsUserParam.setColumn(nrow, "CD_SITE", cd_site);	// 현장코드
        // 	}
        	return true;
        }

        /************************************************************************
         * 그리드 이벤트
         ************************************************************************/

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

        // 도급 체크박스 이벤트
        this.divSearch_cchkYN_DOKUB_onchanged = function(obj,e)
        {
        	var QN_TT_DOKUB_Index = this.dxGrid.getBindCellIndex("body", "QN_TT_DOKUB");
        	var UP_TT_DOKUB_Index = this.dxGrid.getBindCellIndex("body", "UP_TT_DOKUB");
        	var AM_TT_DOKUB_Index = this.dxGrid.getBindCellIndex("body", "AM_TT_DOKUB");
        	var QN_PP_DOKUBGS_Index = this.dxGrid.getBindCellIndex("body", "QN_PP_DOKUBGS");
        	var AM_PP_DOKUBGS_Index = this.dxGrid.getBindCellIndex("body", "AM_PP_DOKUBGS");
        	var QN_DOKUBGS_Index = this.dxGrid.getBindCellIndex("body", "QN_DOKUBGS");
        	var AM_DOKUBGS_Index = this.dxGrid.getBindCellIndex("body", "AM_DOKUBGS");
        	var QN_TT_DOKUBGS_Index = this.dxGrid.getBindCellIndex("body", "QN_TT_DOKUBGS");
        	var AM_TT_DOKUBGS_Index = this.dxGrid.getBindCellIndex("body", "AM_TT_DOKUBGS");
        	var RT_TT_DOKUBGS_Index = this.dxGrid.getBindCellIndex("body", "RT_TT_DOKUBGS");

        	if(obj.isChecked()) {
        		this.dxGrid.setRealColSize("body", QN_TT_DOKUB_Index, 90);
        		this.dxGrid.setRealColSize("body", UP_TT_DOKUB_Index, 80);
        		this.dxGrid.setRealColSize("body", AM_TT_DOKUB_Index, 100);
        		this.dxGrid.setRealColSize("body", QN_PP_DOKUBGS_Index, 90);
        		this.dxGrid.setRealColSize("body", AM_PP_DOKUBGS_Index, 100);
        		this.dxGrid.setRealColSize("body", QN_DOKUBGS_Index, 90);
        		this.dxGrid.setRealColSize("body", AM_DOKUBGS_Index, 100);
        		this.dxGrid.setRealColSize("body", QN_TT_DOKUBGS_Index, 90);
        		this.dxGrid.setRealColSize("body", AM_TT_DOKUBGS_Index, 100);
        		this.dxGrid.setRealColSize("body", RT_TT_DOKUBGS_Index, 80);
        	}
        	else
        	{
        		this.dxGrid.setRealColSize("body", QN_TT_DOKUB_Index, 0);
        		this.dxGrid.setRealColSize("body", UP_TT_DOKUB_Index, 0);
        		this.dxGrid.setRealColSize("body", AM_TT_DOKUB_Index, 0);
        		this.dxGrid.setRealColSize("body", QN_PP_DOKUBGS_Index, 0);
        		this.dxGrid.setRealColSize("body", AM_PP_DOKUBGS_Index, 0);
        		this.dxGrid.setRealColSize("body", QN_DOKUBGS_Index, 0);
        		this.dxGrid.setRealColSize("body", AM_DOKUBGS_Index, 0);
        		this.dxGrid.setRealColSize("body", QN_TT_DOKUBGS_Index, 0);
        		this.dxGrid.setRealColSize("body", AM_TT_DOKUBGS_Index, 0);
        		this.dxGrid.setRealColSize("body", RT_TT_DOKUBGS_Index, 0);
        	}
        };

        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.form_onload,this);
            this.divSearch.form.cchkYN_DOKUB.addEventHandler("onchanged",this.divSearch_cchkYN_DOKUB_onchanged,this);
            this.dsSearch.addEventHandler("onvaluechanged",this.dsSearch_onvaluechanged,this);
        };
        this.loadIncludeScript("DWD_SHGISUNGCONT.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
