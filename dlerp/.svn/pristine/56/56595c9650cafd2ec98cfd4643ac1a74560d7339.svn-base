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
            this.set_titletext("실정보고");
            if (Form == this.constructor)
            {
                this._setFormPosition(1280,720);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("dsList", this);
            obj._setContents("");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsListTop", this);
            obj._setContents("");
            this.addChild(obj.name, obj);


            obj = new Dataset("_dsProc", this);
            obj._setContents("<ColumnInfo><Column id=\"TARGET\" type=\"STRING\" size=\"256\"/><Column id=\"SP\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"TARGET\">select</Col><Col id=\"SP\">DMAPR_PRITEM_DETAIL_SELECT</Col></Row><Row><Col id=\"TARGET\">save</Col><Col id=\"SP\">DMAPR_PRITEM_DETAIL_SAVE</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsSearch", this);
            obj._setContents("<ColumnInfo><Column id=\"CD_SITE\" type=\"STRING\" size=\"256\"/><Column id=\"DS_SITE\" type=\"STRING\" size=\"256\"/><Column id=\"NO_PR\" type=\"STRING\" size=\"256\"/><Column id=\"DS_PR\" type=\"STRING\" size=\"256\"/><Column id=\"CD_COST\" type=\"STRING\" size=\"256\"/><Column id=\"DS_COST\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"CD_SITE\"/></Row></Rows>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Div("divSearch","0.0","10.0",null,"78.0","0",null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_cssclass("div_SEARCH_Bg");
            obj.set_formscrolltype("none");
            obj.set_text("");
            this.addChild(obj.name, obj);

            obj = new Static("sta00","0.0","10.0","92.0","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("0");
            obj.set_text("현장코드");
            obj.set_cssclass("sta_WF_SchLabelE");
            this.divSearch.addChild(obj.name, obj);

            obj = new Div("ccfCD_SITE","sta00:0.0","10.0","330","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.getSetter("CodeFindName").set("DZX_CFSITE");
            obj.getSetter("CDTextWidth").set("80");
            obj.set_taborder("1");
            obj.set_url("cmm::cmmCodeFind.xfdl");
            obj.set_enable("false");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("staNO_PR","0.0","sta00:10.0","92.0","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("2");
            obj.set_text("요청번호");
            obj.set_cssclass("sta_WF_SchLabelE");
            this.divSearch.addChild(obj.name, obj);

            obj = new Div("ccfNO_PR","staNO_PR:0.0","sta00:10.0","330","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.getSetter("CodeFindName").set("DWX_CFPR_01");
            obj.getSetter("CDTextWidth").set("80");
            obj.set_taborder("3");
            obj.set_url("cmm::cmmCodeFind.xfdl");
            obj.set_enable("false");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("sta01","ccfNO_PR:0.0","sta00:10.0","92.0","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("4");
            obj.set_text("공종코드");
            obj.set_cssclass("sta_WF_SchLabelE");
            this.divSearch.addChild(obj.name, obj);

            obj = new Div("ccfCD_LICCOST","sta01:0.0","sta00:10.0","479","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.getSetter("CodeFindName").set("DCX_CFLICCOST_ALL");
            obj.getSetter("CDTextWidth").set("120");
            obj.set_taborder("5");
            obj.set_url("cmm::cmmCodeFind.xfdl");
            obj.set_text("");
            obj.set_enable("false");
            this.divSearch.addChild(obj.name, obj);

            obj = new Div("divData","0","divSearch:10",null,null,"0","0",null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_cssclass("div_DATA_Bg");
            this.addChild(obj.name, obj);

            obj = new Grid("objGridTop","0","0",null,"109","0",null,null,null,null,null,this.divData.form);
            obj.set_taborder("0");
            obj._setContents("");
            this.divData.addChild(obj.name, obj);

            obj = new Grid("objGrid","0","objGridTop:40",null,null,"0","0",null,null,null,null,this.divData.form);
            obj.set_taborder("1");
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

            obj = new BindItem("item1","divSearch.form.ccfCD_SITE.form.DSTextBox","value","dsSearch","DS_SITE");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item2","divSearch.form.ccfNO_PR.form.CDTextBox","value","dsSearch","NO_PR");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item3","divSearch.form.ccfNO_PR.form.DSTextBox","value","dsSearch","DS_PR");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item4","divSearch.form.ccfCD_LICCOST.form.CDTextBox","value","dsSearch","CD_COST");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item5","divSearch.form.ccfCD_LICCOST.form.DSTextBox","value","dsSearch","DS_COST");
            this.addChild(obj.name, obj);
            obj.bind();
            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {
            this._addPreloadList("fdl","cmm::cmmCodeFind.xfdl");
        };
        
        // User Script
        this.registerScript("DMA_PRITEM_DETAIL.xfdl", function() {
        this.objApp = this.gfnGetApplication();
        this.isSave = false;

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

        	// 타화면에서 오픈시 넘어오는 파라미터 처리
        	if(!this.gfnIsNull(this.getOwnerFrame().CD_SITE) && !this.gfnIsNull(this.getOwnerFrame().NO_PR ) && !this.gfnIsNull(this.getOwnerFrame().CD_COST )) {
        		this.dsSearch.setColumn(0, "CD_SITE", this.getOwnerFrame().CD_SITE);
        		this.dsSearch.setColumn(0, "DS_SITE", this.getOwnerFrame().DS_SITE);

        		this.dsSearch.setColumn(0, "NO_PR", this.getOwnerFrame().NO_PR);
        		this.dsSearch.setColumn(0, "DS_PR", this.getOwnerFrame().DS_PR);

        		this.dsSearch.setColumn(0, "CD_COST", this.getOwnerFrame().CD_COST);
        		this.dsSearch.setColumn(0, "DS_COST", this.getOwnerFrame().DS_COST);

        		this.FormBtns.Select.click();
        	}
        };

        /************************************************************************
         * 버튼 설정 : 화면(Tab) 전환시 마다 호출
         * 서브버튼 사용 및 공통버튼 강제 제어시 여기서 처리
         ************************************************************************/
        this.fnSetButton = function() {
        	// Select, Add, Del, Save, Excel, Print
        	// SubSelect, SubAdd, SubDel, SuubSave, SubExcel
        	//this.FormBtns.Select.set_enable(false);
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
        	this.ccfCD_SITE 	= this.divSearch.form.ccfCD_SITE;
        	this.ccfCD_LICCOST 	= this.divSearch.form.ccfCD_LICCOST;
        	this.ccfNO_PR 		= this.divSearch.form.ccfNO_PR;

        	this.dxGrid 		= this.divData.form.objGrid;
        	this.dxGridTop 		= this.divData.form.objGridTop;

        };

        /************************************************************************
         * 이벤트 설정
         ************************************************************************/
        this.fnSetEvent = function() {
        	this.ccfCD_SITE.AfterCDTextChanged = "ccfCD_SITE_AfterCDTextChanged";

        	this.ccfNO_PR.BeforeUserDataSetParam = "fnBeforeUserDataSetParam";
        //	this.ccfNO_PR.AfterCDTextChanged = "ccfNO_PR_AfterCDTextChanged";

        	// 그리드 초기화
        	this.gfnGridInit(this.dxGrid, this.dsList, "DM", "DMA_PRITEM_DETAIL");
        	this.gfnGridInit(this.dxGridTop, this.dsListTop, "DM", "DMA_PRITEM_DETAIL_TOP");

        	// 셀 수정가능 여부
        	this.dxGrid.EnterCell = "fnGrid_EnterCell";
        	this.dxGrid.set_selecttype("cell");
        	this.dxGrid.addEventHandler("onselectchanged", this.fnGrid_RowCellChanged, this);

        	// 셀 변경 후 이벤트
        	this.dxGrid.AfterEdit = "fnGrid_AfterEdit";
        };

        /************************************************************************
         * 파라미터 설정
         ************************************************************************/
        this.fnSetParameter = function() {
        	this.dsSelect = new Dataset();
        	this.dsSelect.addColumn("CD_SITE", "string");
        	this.dsSelect.addColumn("NO_PR", "string");
        	this.dsSelect.addColumn("CD_COST", "string");

        	this.dsSave = new Dataset();
        	this.dsSave.addColumn("TY_SAVE", "int");
        	this.dsSave.addColumn("CD_SITE", "string");
        	this.dsSave.addColumn("CD_COST", "string");
        	this.dsSave.addColumn("COST_SEQ", "int");
        	this.dsSave.addColumn("NO_PR", "string");
        	this.dsSave.addColumn("SZ_SIZE_SITE", "string");
        	this.dsSave.addColumn("QN_TT_SILHENG", "BIGDECIMAL");
        	this.dsSave.addColumn("UP_TT_SILHENG", "int");
        	this.dsSave.addColumn("AM_TT_SILHENG", "int");
        	this.dsSave.addColumn("UP_TT_HADO", "int");
        	this.dsSave.addColumn("AM_TT_HADO", "int");
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
        	this.dsSelect.setColumn(0, "NO_PR", this.dsSearch.getColumn(0, "NO_PR"));
        	this.dsSelect.setColumn(0, "CD_COST", this.dsSearch.getColumn(0, "CD_COST"));

        	var strSvcId    = "select";
        	var strSvcType  = "grid";
        	var inProc		= "_dsProc";
        	var inData      = "select=dsSelect";
        	var outData     = "dsListTop=select0 dsList=select1";
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
        	var nrow = this.gfnGridAdd(this.dxGrid, "bottom"); // top (default), bottom, current

        	this.dsList.set_enableevent(false);
        	this.dsList.setColumn(nrow,"CD_SITE",this.getOwnerFrame().CD_SITE);
        	this.dsList.setColumn(nrow,"CD_COST",this.getOwnerFrame().CD_COST);
        	this.dsList.setColumn(nrow,"NO_PR",this.getOwnerFrame().NO_PR);
        	this.dsList.setColumn(nrow,"SZ_SIZE_SITE",this.dsListTop.getColumn(this.dsListTop.rowposition,"SZ_SIZE_SITE"));
        	this.dsList.setColumn(nrow,"QN_TT_SILHENG",0);
        	this.dsList.setColumn(nrow,"UP_TT_SILHENG",this.dsListTop.getColumn(this.dsListTop.rowposition,"UP_TT_SILHENG"));
        	this.dsList.setColumn(nrow,"AM_TT_SILHENG",0);
        	this.dsList.setColumn(nrow,"UP_TT_HADO",this.dsListTop.getColumn(this.dsListTop.rowposition,"UP_TT_HADO"));
        	this.dsList.setColumn(nrow,"AM_TT_HADO",0);
        	this.dsList.set_enableevent(true);
        }

        /*
         *	삭제 버튼
         */
        this.fnDel = function() {
        //	this.gfnGridDel(this.dxGrid);

        	if(this.dsList.getRowType(this.dsList.rowposition) != 2)
        	{
        		var nrow = this.dsSave.addRow();
        		this.dsSave.copyRow(nrow,this.dsList,this.dsList.rowposition);
        		this.dsSave.setColumn(nrow, "TY_SAVE",8);
        		this.FormBtns.Save.set_enable(true);
        	};
        	this.dsList.deleteRow(this.dsList.rowposition);
        	console.info(this.dsSave.saveXML());
        }

        /*
         *	저장 버튼
         */
        this.fnSave = function() {
        	if (this.dsListTop.rowcount == 0) return;

        	// 그리드 필수항목 체크
        	if (!this.gfnGridValidate(this.dxGrid)) return;

        	this.dsList.addColumn("TY_SAVE","int");

        	var dsCnt = this.dsList.rowcount;
        	var ttCnt = this.dsListTop.getColumn(this.dsListTop.rowposition,"QN_TT_SILHENG");
        	var nuCnt = 0;

        	for(var i = 0; i < dsCnt; i++)
        	{
        		var rowTp 	= this.dsList.getRowType(i);
         		var qty 	= this.dsList.getColumn(i,"QN_TT_SILHENG").toString();
        // 		nuCnt += qty;

        		if(rowTp < 2 || qty == 0) continue;
        		this.dsList.setColumn(i,"TY_SAVE",rowTp);
        		var nrow = this.dsSave.addRow();
        		this.dsSave.copyRow(nrow,this.dsList,i);
        	};

        	nuCnt = nexacro.Decimal(this.dxGrid.getCellText(-2,7));

        	if(nexacro.toNumber(nuCnt) > 0 && nexacro.toNumber(ttCnt) != nexacro.toNumber(nuCnt))
        	{
        		this.gfnAlert("등록수량과 발주요청수량이 다릅니다.");
        		return;
        	};

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
        						strArg, 		// 입력값으로 보낼 arguments, strFormData="20120607"
        						callBackFnc); // 통신방법 정의 [생략가능]
        }

        /*
         *	엑셀 버튼
         */
        this.fnExcel = function() {
        //	this.gfnExcelExport(this.dxGrid);
        }

        /*
         *	출력 버튼
         */
        this.fnPrint = function() {
        }

        this.fnClose = function() {
        	this.getParentContext().close(this.isSave);
        };
        /************************************************************************
         * Validate
         ************************************************************************/
        /*
         *	조회 Validate
         */
        this.fnSelectValidate = function() {
        	var validate = true;

        	if (this.gfnIsNull(this.dsSearch.getColumn(0,"CD_SITE"))) {
        		validate = false;
        		// Alert후 실행할 처리
        		this.fnVaidateCallback = function() {
        			this.ccfCD_SITE.form.CDTextBox.setFocus();
        		}
        		this.gfnAlert("현장코드는 반드시 입력 하셔야 합니다.", "fnVaidateCallback");
        	};

        	if (this.gfnIsNull(this.dsSearch.getColumn(0,"NO_PR"))) {
        		validate = false;
        		// Alert후 실행할 처리
        		this.fnVaidateCallback = function() {
        			this.ccfNO_PR.form.CDTextBox.setFocus();
        		}
        		this.gfnAlert("요청번호는 반드시 입력 하셔야 합니다.", "fnVaidateCallback");
        	};

        	if (this.gfnIsNull(this.dsSearch.getColumn(0,"CD_COST"))) {
        		validate = false;
        		// Alert후 실행할 처리
        		this.fnVaidateCallback = function() {
        			this.ccfCD_LICCOST.form.CDTextBox.setFocus();
        		}
        		this.gfnAlert("공종코드는 반드시 입력 하셔야 합니다.", "fnVaidateCallback");
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
        		this.dsSave.clearData();
        	}
        	else if(svcID == "save") {
        		if (errorCode == 0) {
        			this.isSave = true;
        			this.FormBtns.Select.click();
        		} else {
        			this.gfnAlert(errorMsg);
        		}
        	}
        }

        /************************************************************************
         * 코드파인드 이벤트
         ************************************************************************/
         this.ccfCD_SITE_AfterCDTextChanged = function(id, codeFindData) {
        	// 코드,명칭 외 추가 컬럼 처리
        	//var arr = codeFindData; //this.ccfCD_DEPT_ORG.form.SelectedData; 둘다 사용가능

        	this.dsSearch.setColumn(0, "NO_PR","");
        	this.dsSearch.setColumn(0, "DS_PR","");
        	this.dsSearch.setColumn(0, "CD_COST","");
        	this.dsSearch.setColumn(0, "DS_COST","");
        }

        this.fnBeforeUserDataSetParam = function(id, dsUserParam, nrow) {

        	if (id == "ccfNO_PR") {
        		if(this.gfnIsNull(this.dsSearch.getColumn(0, "CD_SITE")))
        		{
        			this.gfnAlert("현장코드를 입력하세요.", "fnVaidateCallback");

        			return false;
        		}
        		dsUserParam.setColumn(nrow, "CD_SITE", this.dsSearch.getColumn(0, "CD_SITE"));

        	}

        	return true;
        }
        /************************************************************************
         * 그리드 이벤트
         ************************************************************************/
        this.fnGrid_AfterEdit = function(obj,e)
        {
        	var qty 	= this.dsList.getColumn(e.row,"QN_TT_SILHENG");
        	var bdan 	= this.dsList.getColumn(e.row,"UP_TT_SILHENG");
        	var hdan	= this.dsList.getColumn(e.row,"UP_TT_HADO");

        	this.dsList.setColumn(e.row,"AM_TT_SILHENG",nexacro.round(qty * bdan))
        	this.dsList.setColumn(e.row,"AM_TT_HADO",nexacro.round(qty * hdan))

        	if(this.gfnIsNull(qty))
        		this.dsList.setColumn(e.row,"QN_TT_SILHENG",0);

        	if(this.gfnIsNull(hdan))
        		this.dsList.setColumn(e.row,"UP_TT_HADO",0);
        };

        this.fnGrid_RowCellChanged = function(obj,e)
        {
            if ((obj.oldrow > -1 && obj.oldrow == e.row)
        		|| (obj.oldrow == -1 && e.oldrow != e.row)) {
        		obj.oldrow = -1;
        	}
        };
        /************************************************************************
         * 기타 이벤트
         ************************************************************************/
        this.dsSearch_onvaluechanged = function(obj,e)
        {
        	if(e.oldvalue != e.newvalue) {
        		this.gfnSetFormStatus(this);	// 폼상태 초기화
        		this.gfnGridClear(this.dxGrid);
        		this.gfnGridClear(this.dxGridTop);
        	}
        };

        this.fnGrid_FlagCheck = function()
        {
        	var flag = this.gfnGetFlag(this.dsList, this.dsList.rowposition);

        	if(flag == "I")
        		return false;

        	return true;
        };
        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.form_onload,this);
            this.dsSearch.addEventHandler("onvaluechanged",this.dsSearch_onvaluechanged,this);
        };
        this.loadIncludeScript("DMA_PRITEM_DETAIL.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
