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
            obj = new Dataset("dsChartList", this);
            obj._setContents("<ColumnInfo><Column id=\"X_COL\" type=\"STRING\" size=\"256\"/><Column id=\"SR01_DATA\" type=\"STRING\" size=\"256\"/><Column id=\"SR02_DATA\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("_dsProc", this);
            obj._setContents("<ColumnInfo><Column id=\"TARGET\" type=\"STRING\" size=\"256\"/><Column id=\"SP\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"TARGET\">select</Col><Col id=\"SP\">DZEPR_DW_F0010_SELECT</Col></Row><Row><Col id=\"TARGET\">chart</Col><Col id=\"SP\">DZEPR_DW_C0010_SELECT</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsSearch", this);
            obj._setContents("<ColumnInfo><Column id=\"YM_WORK\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row/></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsList", this);
            obj._setContents("");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsChartStatus", this);
            obj._setContents("");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsChartList1", this);
            obj._setContents("<ColumnInfo><Column id=\"X_COL\" type=\"STRING\" size=\"256\"/><Column id=\"SR01_DATA\" type=\"STRING\" size=\"256\"/><Column id=\"SR02_DATA\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Div("divSearch","0","0",null,"45","0",null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_cssclass("div_SEARCH_Bg");
            obj.set_formscrolltype("none");
            this.addChild(obj.name, obj);

            obj = new Static("staYM_WORK","10","10","60","25",null,null,null,null,null,null,this.divSearch.form);
            obj.set_cssclass("sta_SearchY");
            obj.set_taborder("0");
            obj.set_text("기준년월");
            this.divSearch.addChild(obj.name, obj);

            obj = new Div("ctclYM_WORK","staYM_WORK:10","10","80","25",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("1");
            obj.set_url("cmm::cmmCalMM.xfdl");
            this.divSearch.addChild(obj.name, obj);

            obj = new Div("divData","0","divSearch:10",null,null,"0","0",null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_cssclass("div_DATA_Bg");
            this.addChild(obj.name, obj);

            obj = new Div("divSplitter","0","50%","100%","5",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("1");
            obj.set_background("skyblue");
            obj.set_cursor("ns-resize");
            this.divData.addChild(obj.name, obj);

            obj = new Div("divDataTop","0","0",null,null,"0","divSplitter:5",null,null,null,null,this.divData.form);
            obj.set_taborder("0");
            obj.set_cssclass("div_DATA_Bg");
            this.divData.addChild(obj.name, obj);

            obj = new Div("divDataLeft","0","0",null,null,"50%","0",null,null,null,null,this.divData.form.divDataTop.form);
            obj.set_taborder("0");
            obj.set_cssclass("div_DATA_Bg");
            this.divData.form.divDataTop.addChild(obj.name, obj);

            obj = new BasicChart("BasicChart00","10","19",null,null,"0","0",null,null,null,null,this.divData.form.divDataTop.form.divDataLeft.form);
            obj.getSetter("taborder").set("1");
            obj.getSetter("binddataset").set("dsChartList");
            obj.getSetter("categorycolumn").set("bind:X_COL");
            obj.getSetter("bargrouping").set("false");
            obj.getSetter("stacktype").set("none");
            obj.getSetter("enableanimation").set("false");
            obj.getSetter("rotateaxis").set("false");
            obj.getSetter("border").set("1px solid black");
            obj.getSetter("rangezoom").set("none");
            this.divData.form.divDataTop.form.divDataLeft.addChild(obj.name, obj);

            obj = new Div("divDataRight","divDataLeft:0","0",null,null,"0","0",null,null,null,null,this.divData.form.divDataTop.form);
            obj.set_taborder("0");
            obj.set_cssclass("div_DATA_Bg");
            this.divData.form.divDataTop.addChild(obj.name, obj);

            obj = new BasicChart("BasicChart01","10","19",null,null,"0","0",null,null,null,null,this.divData.form.divDataTop.form.divDataRight.form);
            obj.getSetter("taborder").set("1");
            obj.getSetter("binddataset").set("dsChartList1");
            obj.getSetter("categorycolumn").set("bind:X_COL");
            obj.getSetter("bargrouping").set("false");
            obj.getSetter("stacktype").set("none");
            obj.getSetter("enableanimation").set("false");
            obj.getSetter("rotateaxis").set("false");
            obj.getSetter("border").set("1px solid black");
            this.divData.form.divDataTop.form.divDataRight.addChild(obj.name, obj);

            obj = new Div("divDataBottom","0","divSplitter:0",null,null,"0","0",null,null,null,null,this.divData.form);
            obj.set_taborder("0");
            obj.set_cssclass("div_DATA_Bg");
            this.divData.addChild(obj.name, obj);

            obj = new Static("staMSG",null,"10","200","25","10",null,null,null,null,null,this.divData.form.divDataBottom.form);
            obj.set_taborder("0");
            obj.set_text("(단위 : 억원)");
            obj.set_textAlign("right");
            obj.set_font("bold 9pt/normal \"Arial\"");
            this.divData.form.divDataBottom.addChild(obj.name, obj);

            obj = new Grid("objGrid","0","staMSG:0",null,null,"0","0",null,null,null,null,this.divData.form.divDataBottom.form);
            obj.set_taborder("0");
            obj._setContents("");
            this.divData.form.divDataBottom.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this
            obj = new Layout("default","",this._adjust_width,this._adjust_height,this,function(p){});
            this.addLayout(obj.name, obj);
            
            // BindItem Information
            obj = new BindItem("item0","divSearch.form.ctclYM_WORK.form.TextBox","value","dsSearch","YM_WORK");
            this.addChild(obj.name, obj);
            obj.bind();
            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {
            this._addPreloadList("fdl","cmm::cmmCalMM.xfdl");
        };
        
        // User Script
        this.registerScript("DZE_DW_F0010.xfdl", function() {
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

        	if(!this.gfnIsNull(this.getOwnerFrame().PARAM1))
        	{
        		this.dsSearch.setColumn(0, "YM_WORK", this.getOwnerFrame().PARAM1);

        		this.FormBtns.Select.click();
        	}
        	else
        	{
        		var today = this.gfnGetDate();
        		this.dsSearch.setColumn(0, "YM_WORK", today.substr(0,6));
        	}
        };

        /************************************************************************
         * 버튼 설정
         * 서브버튼 사용 처리. 공통 및 확장버튼 버튼관리화면에서 셋팅.
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
        	this.BasicChartLeft = this.divData.form.divDataTop.form.divDataLeft.form.BasicChart00;
        	this.BasicChartRight = this.divData.form.divDataTop.form.divDataRight.form.BasicChart01;

        	this.dxGrid = this.divData.form.divDataBottom.form.objGrid;
        };

        /************************************************************************
         * 이벤트 설정
         ************************************************************************/
        this.fnSetEvent = function() {
        	// 그리드 초기화
        	this.gfnGridInit(this.dxGrid, this.dsList, "DZ", "DZE_DW_F0010");
        };

        /************************************************************************
         * 파라미터 설정
         ************************************************************************/
        this.fnSetParameter = function() {
        	this.dsSelect = new Dataset();
        	this.dsSelect.addColumn("TY_WRK", "string");
        	this.dsSelect.addColumn("YM_WORK", "string");
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

        	this.dsSelect.setColumn(0, "TY_WRK", "Q");
        	this.dsSelect.setColumn(0, "YM_WORK", this.dsSearch.getColumn(0, "YM_WORK"));

        	var strSvcId    = "select";
        	var strSvcType  = "grid";
        	var inProc		= "_dsProc";
        	var inData      = "select=dsSelect chart=dsSelect";
        	var outData     = "dsList=select0 dsChartStatus=chart0 dsChartList=chart1 dsChartList1=chart2";
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
        // 	// 그리드 필수항목 체크
        // 	if (!this.gfnGridValidate(this.dxGrid)) return;
        //
        // 	this.dxGrid.updateToDataset();
        //
        // 	this.dsInsert.clearData();
        // 	this.dsUpdate.clearData();
        // 	this.dsDelete.clearData();
        //
        // 	for (var i = 0; i < this.dsList.rowcount; i++) {
        // 		var flag = this.gfnGetFlag(this.dsList, i);
        // 		switch(flag) {
        // 			case "I":
        // 				var nrow = this.dsInsert.addRow();
        // // 				this.dsInsert.setColumn(nrow, "CD_CORP", this.dsList.getColumn(i, "CD_CORP"));
        // // 				this.dsInsert.setColumn(nrow, "NO_CORP", this.dsList.getColumn(i, "NO_CORP").replace(/-/g, ''));
        // // 				this.dsInsert.setColumn(nrow, "ID_USER", this.AuthClient.ID_USER);
        // 				break;
        //
        // 			case "U":
        // 				var nrow = this.dsUpdate.addRow();
        // // 				this.dsUpdate.setColumn(nrow, "CD_CORP", this.dsList.getColumn(i, "CD_CORP"));
        // // 				this.dsUpdate.setColumn(nrow, "NO_CORP", this.dsList.getColumn(i, "NO_CORP").replace(/-/g, ''));
        // // 				this.dsUpdate.setColumn(nrow, "ID_UPDATE", this.AuthClient.ID_USER);
        // 				break;
        //
        // 			case "D":
        // 				var nrow = this.dsDelete.addRow();
        // //				this.dsDelete.setColumn(nrow, "CD_CORP", this.dsList.getColumn(i, "CD_CORP"));
        // 				break;
        // 		}
        // 	}
        //
        // 	if (this.dsInsert.rowcount == 0 && this.dsUpdate.rowcount == 0 && this.dsDelete.rowcount == 0) return;
        //
        // 	// save SP 한개로 사용하는 경우
        // 	/*
        // 	this.dsSave.clearData();
        //
        // 	for (var i = 0; i < this.dsList.rowcount; i++) {
        // 		var flag = this.gfnGetFlag(this.dsList, i);
        // 		switch(flag) {
        // 			case "I":
        // 			case "U":
        // 			case "D":
        // 				var nrow = this.dsSave.addRow();
        // 				this.dsSave.setColumn(nrow, "TY_FLAG", flag);
        // 				this.dsSave.setColumn(nrow, "NO_IDX", this.dsList.getColumn(i, "NO_IDX"));
        // 				break;
        // 		}
        // 	}
        //
        // 	if (this.dsSave.rowcount == 0) return;
        // 	*/
        //
        // 	var strSvcId    = "save";
        // 	var strSvcType  = "save";
        // 	var inProc		= "_dsProc";
        // 	var inData      = "insert=dsInsert update=dsUpdate delete=dsDelete";
        // 	//var inData      = "save=dsSave";
        // 	var outData     = "";
        // 	var strArg      = "";
        // 	var callBackFnc = "fnCallback";
        //
        // 	this.gfnTransaction( strSvcId , 	// transaction을 구분하기 위한 svc id값
        // 						strSvcType , 	// transaction을 요청할 구분
        // 						inProc,			// Procedure 정보 Dataset 이름
        // 						inData , 		// 입력값으로 보낼 dataset id , a=b형태로 실제이름과 입력이름을 매칭
        // 						outData , 		// 처리결과값으로 받을 dataset id, a=b형태로 실제이름과 입력이름을 매칭
        // 						strArg, 			// 입력갑스로 보낼 arguments, strFormData="20120607"
        // 						callBackFnc); // 통신방법 정의 [생략가능]
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

        	if (this.gfnIsNull(this.dsSearch.getColumn(0,"YM_WORK"))) {
        		validate = false;
        		// Alert후 실행할 처리
        		this.fnVaidateCallback = function() {
        			this.divSearch.form.ctclYM_WORK.form.TextBox.setFocus();
        		}
        		this.gfnAlert("기준년월을 입력하세요.", "fnVaidateCallback");
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

        		this.fnSetLeftChart_Status();
        		this.fnSetRightChart_Status();
        		this.fnSetRightChart_TickMinMax();

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

        // 하단 그리드 더블클릭 이벤트.
        this.divData_divDataBottom_objGrid_oncelldblclick = function(obj,e)
        {
        	var param = {};
        	var pageNm = "";
        	var cellNm = this.gfnGridGetBindColumnNameByIndex(obj, e.cell);


        	switch(cellNm)
        	{
        		// 현장코드, 현장명
        		case "CD_SITE" : case "DS_SITE" :
        			pageNm = "DWZ_SITE";
        			param.CD_SITE = this.dsList.getColumn(e.row, "CD_SITE");
        			param.DS_SITE = this.dsList.getColumn(e.row, "DS_SITE");
        		break;
        		// 소화(당월), 소화(누계)
        		case "AM_CNSTPRSC_TYER_PLN" : case "RT_CNSTPRSC_TYER_PLN" :  case "AM_CNSTPRSC_TYER" :
        		case "RT_CNSTPRSC_TYER" :     case "AM_CNSTPRSC_TYER_ANSB" : case "RT_CNSTPRSC_TYER_ANSB" :
        		case "AM_CNSTPRSC_TSUM_PLN" : case "RT_CNSTPRSC_TSUM_PLN" :  case "AM_CNSTPRSC_TSUM" :
        		case "RT_CNSTPRSC_TSUM" :     case "AM_CNSTPRSC_TSUM_ANSB" : case "RT_CNSTPRSC_TSUM_ANSB" :
        			pageNm = "DWD_FNDWREQSMMZTB";
        			param.CD_SITE = this.dsList.getColumn(e.row, "CD_SITE");
        			param.DS_SITE = this.dsList.getColumn(e.row, "DS_SITE");
        			param.YM_WORK = this.dsSearch.getColumn(0, "YM_WORK");
        		break;
        		// 청산율(%)
        		case "RT_CPSILHENG_CNSLT" :	case "RT_CPSILHENG_BZPLN" :	case "RT_CPSILHENG_RSLT" :
        		case "RT_CPSILHENG_ANSB" :	case "RT_CPSILHENG_PRSP" :
        			pageNm = "DWE_PRECOST";
        			param.CD_SITE = this.dsList.getColumn(e.row, "CD_SITE");
        			param.DS_SITE = this.dsList.getColumn(e.row, "DS_SITE");
        			param.YM_WORK = this.dsSearch.getColumn(0, "YM_WORK");
        		break;
        		// 출역현황
        		case "CT_LABOR" :
        			pageNm = "DSK_HDC_WORK_LIST";
        			param.PARAM1 = this.gfnGetDate();
        			param.PARAM2 = this.dsList.getColumn(e.row, "CD_SITE");
        		break;

        		// 계약현황(건) 외주
        		case "CT_CONT_DC" :
        			pageNm = "DCC_CONTRACTEIS";
        			param.CD_SITE = this.dsList.getColumn(e.row, "CD_SITE");
        			param.DS_SITE = this.dsList.getColumn(e.row, "DS_SITE");
        			param.DS_PARAM = "SU";
        		break;
        		// 계약현황(건) 자재
        		case "CT_CONT_DM" :
        			pageNm = "DCC_CONTRACTEIS";
        			param.CD_SITE = this.dsList.getColumn(e.row, "CD_SITE");
        			param.DS_SITE = this.dsList.getColumn(e.row, "DS_SITE");
        			param.DS_PARAM = "MM";
        		break;
        		// CM조치현황(건)
        		case "CT_CM_TMON" : case "CT_CM_TSUM" :
        			pageNm = "DZE_DW_F0020";
        			param.YM_WORK = this.dsSearch.getColumn(0, "YM_WORK").substr(0,6);
        		break;
        	}

        	this.gfnFormOpen(this.FormInfo.CD_MODULE, pageNm, "", param);
        };
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

        this.fnSetLeftChart_Status = function()
        {
        	if(this.dsChartStatus.rowcount == 0) return;

        	this.BasicChartLeft.title.set_text(this.dsChartStatus.getColumn(0, "DS_TEXT"));
        	this.BasicChartLeft.title.set_subtext(this.dsChartStatus.getColumn(0, "DS_SUBTEXT"));

        	this.BasicChartLeft.seriesset[0].set_titletext(this.dsChartStatus.getColumn(0, "SR01_DESC"));
        	this.BasicChartLeft.seriesset[0].set_pointvisible(this.dsChartStatus.getColumn(0, "SR01_POINT_VISIBLE"));
        	this.BasicChartLeft.seriesset[0].set_linestyle("1px solid " + this.dsChartStatus.getColumn(0, "SR01_COLOR"));
        	this.BasicChartLeft.seriesset[0].set_pointlinestyle("1px solid " + this.dsChartStatus.getColumn(0, "SR01_COLOR"));
        	this.BasicChartLeft.seriesset[0].set_pointfillstyle(this.dsChartStatus.getColumn(0, "SR01_COLOR"));
        	this.BasicChartLeft.seriesset[0].set_pointshape(this.dsChartStatus.getColumn(0, "SR01_POINT_SHAPE"));
        	this.BasicChartLeft.seriesset[0].set_pointsize(this.dsChartStatus.getColumn(0, "SR01_POINT_SIZE"));
        	this.BasicChartLeft.seriesset[0].set_lineareafillstyle(this.dsChartStatus.getColumn(0, "SR01_COLOR"));
        	this.BasicChartLeft.seriesset[0].set_itemtextcolor(this.dsChartStatus.getColumn(0, "SR01_COLOR"));

        	//this.BasicChartLeft.seriesset[0].set_itemtext("expr:" + "\"" + this.dsChartStatus.getColumn(0, "SR01_DESC") + " : " + "\"" +"SR01_DATA" + "\n" + this.dsChartStatus.getColumn(0, "SR02_DESC") + " : SR02_DATA" );
        	this.BasicChartLeft.seriesset[0].set_tooltiptext("expr:\"" + this.dsChartStatus.getColumn(0, "SR01_DESC") + " : \" + SR01_DATA + \"\\n" + this.dsChartStatus.getColumn(0, "SR02_DESC") + " : \" + SR02_DATA");

        	this.BasicChartLeft.seriesset[1].set_titletext(this.dsChartStatus.getColumn(0, "SR02_DESC"));
        	this.BasicChartLeft.seriesset[1].set_pointvisible(this.dsChartStatus.getColumn(0, "SR02_POINT_VISIBLE"));
        	this.BasicChartLeft.seriesset[1].set_linestyle("1px solid " + this.dsChartStatus.getColumn(0, "SR02_COLOR"));
        	this.BasicChartLeft.seriesset[1].set_pointlinestyle("1px solid " + this.dsChartStatus.getColumn(0, "SR02_COLOR"));
        	this.BasicChartLeft.seriesset[1].set_pointfillstyle(this.dsChartStatus.getColumn(0, "SR02_COLOR"));
        	this.BasicChartLeft.seriesset[1].set_pointshape(this.dsChartStatus.getColumn(0, "SR02_POINT_SHAPE"));
        	this.BasicChartLeft.seriesset[1].set_pointsize(this.dsChartStatus.getColumn(0, "SR02_POINT_SIZE"));
        	this.BasicChartLeft.seriesset[1].set_lineareafillstyle(this.dsChartStatus.getColumn(0, "SR02_COLOR"));
        	this.BasicChartLeft.seriesset[1].set_tooltiptext("expr:\"" + this.dsChartStatus.getColumn(0, "SR01_DESC") + " : \" + SR01_DATA + \"\\n" + this.dsChartStatus.getColumn(0, "SR02_DESC") + " : \" + SR02_DATA");
        	this.BasicChartLeft.seriesset[1].set_itemtextcolor(this.dsChartStatus.getColumn(0, "SR02_COLOR"));

        }

        this.fnSetRightChart_Status = function()
        {
        	if(this.dsChartStatus.rowcount == 0) return;

        	this.BasicChartRight.title.set_text(this.dsChartStatus.getColumn(1, "DS_TEXT"));
        	this.BasicChartRight.title.set_subtext(this.dsChartStatus.getColumn(1, "DS_SUBTEXT"));

        	this.BasicChartRight.seriesset[0].set_titletext(this.dsChartStatus.getColumn(1, "SR01_DESC"));
        	this.BasicChartRight.seriesset[0].set_pointvisible(this.dsChartStatus.getColumn(1, "SR01_POINT_VISIBLE"));
        	this.BasicChartRight.seriesset[0].set_linestyle("1px solid " + this.dsChartStatus.getColumn(1, "SR01_COLOR"));
        	this.BasicChartRight.seriesset[0].set_pointshape(this.dsChartStatus.getColumn(1, "SR01_POINT_SHAPE"));
        	this.BasicChartRight.seriesset[0].set_pointsize(this.dsChartStatus.getColumn(1, "SR01_POINT_SIZE"));
        	this.BasicChartRight.seriesset[0].set_pointlinestyle("1px solid " + this.dsChartStatus.getColumn(1, "SR01_COLOR"));
        	this.BasicChartRight.seriesset[0].set_pointfillstyle(this.dsChartStatus.getColumn(1, "SR01_COLOR"));
        	this.BasicChartRight.seriesset[0].set_tooltiptext("expr:\"" + this.dsChartStatus.getColumn(1, "SR01_DESC") + " : \" + SR01_DATA + \"\\n" + this.dsChartStatus.getColumn(1, "SR02_DESC") + " : \" + SR02_DATA");
        	this.BasicChartRight.seriesset[0].set_itemtextcolor(this.dsChartStatus.getColumn(1, "SR01_COLOR"));

        	this.BasicChartRight.seriesset[1].set_titletext(this.dsChartStatus.getColumn(1, "SR02_DESC"));
        	this.BasicChartRight.seriesset[1].set_pointvisible(this.dsChartStatus.getColumn(1, "SR02_POINT_VISIBLE"));
        	this.BasicChartRight.seriesset[1].set_linestyle("1px solid " + this.dsChartStatus.getColumn(1, "SR02_COLOR"));
        	this.BasicChartRight.seriesset[1].set_pointshape(this.dsChartStatus.getColumn(1, "SR02_POINT_SHAPE"));
        	this.BasicChartRight.seriesset[1].set_pointsize(this.dsChartStatus.getColumn(1, "SR02_POINT_SIZE"));
        	this.BasicChartRight.seriesset[1].set_pointlinestyle("1px solid " + this.dsChartStatus.getColumn(1, "SR02_COLOR"));
        	this.BasicChartRight.seriesset[1].set_pointfillstyle(this.dsChartStatus.getColumn(1, "SR02_COLOR"));
        	this.BasicChartRight.seriesset[1].set_tooltiptext("expr:\"" + this.dsChartStatus.getColumn(1, "SR01_DESC") + " : \" + SR01_DATA + \"\\n" + this.dsChartStatus.getColumn(1, "SR02_DESC") + " : \" + SR02_DATA");
        	this.BasicChartRight.seriesset[1].set_itemtextcolor(this.dsChartStatus.getColumn(1, "SR02_COLOR"));

        }


        // 우측 차트 최대값, 최소값 조정.
        this.fnSetRightChart_TickMinMax = function()
        {
        	var col_max = 0;
        	var col_min = 0;
        	if(this.dsChartList1.getColumn(0, "SR01_DATA") > this.dsChartList1.getColumn(0, "SR02_DATA"))
        	{
        		col_max = this.dsChartList1.getColumn(0, "SR01_DATA");
        		col_min = this.dsChartList1.getColumn(0, "SR02_DATA");
        	}
        	else
        	{
        		col_max = this.dsChartList1.getColumn(0, "SR01_DATA");
        		col_min = this.dsChartList1.getColumn(0, "SR02_DATA");
        	}

        	var col_next = 0;

        	for (var i=0; i< this.dsChartList1.rowcount; i++)
        	{
        		if(this.dsChartList1.rowcount > 1){
        			col_next = this.dsChartList1.getColumn(i+1, "SR01_DATA");

        			if(col_max < col_next){
        				col_max = col_next;
        			}

        			if(col_min > col_next){
        				col_min = col_next;
        			}

        			col_next = this.dsChartList1.getColumn(i+1, "SR02_DATA");

        			if(col_max < col_next){
        				col_max = col_next;
        			}

        			if(col_min > col_next){
        				col_min = col_next;
        			}
        		}
        	}

        	if(col_max < 100)
        	{
        		col_max = 105;
        	}

        	this.BasicChartRight.valueaxes[0].set_tickmax(col_max + 5);
        	this.BasicChartRight.valueaxes[0].set_tickmin(col_min - 5);
        }


        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.form_onload,this);
            this.divData.addEventHandler("ondragmove",this.divData_ondragmove,this);
            this.divData.form.divSplitter.addEventHandler("ondrag",this.divData_divSplitter_ondrag,this);
            this.divData.form.divDataBottom.form.objGrid.addEventHandler("oncelldblclick",this.divData_divDataBottom_objGrid_oncelldblclick,this);
            this.dsSearch.addEventHandler("onvaluechanged",this.dsSearch_onvaluechanged,this);
        };
        this.loadIncludeScript("DZE_DW_F0010.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
