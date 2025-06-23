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
            obj._setContents("<ColumnInfo><Column id=\"TARGET\" type=\"STRING\" size=\"256\"/><Column id=\"SP\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"TARGET\">select</Col><Col id=\"SP\">DRBPR_SIZEINFO_SELECT_COLOR_DAEBANG</Col></Row><Row><Col id=\"TARGET\">select_d</Col><Col id=\"SP\">DRBPR_CONTRACTSTATE_SELECT</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsSearch", this);
            obj._setContents("<ColumnInfo><Column id=\"CD_ACNTUNIT\" type=\"STRING\" size=\"256\"/><Column id=\"DS_ACNTUNIT\" type=\"STRING\" size=\"256\"/><Column id=\"NO_DONG\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row/></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsListSub", this);
            obj._setContents("");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsListTemp", this);
            obj._setContents("");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsGridSpec", this);
            obj._setContents("<ColumnInfo><Column id=\"NO_WIDTH\" type=\"INT\" size=\"256\"/><Column id=\"YN_READONLY\" type=\"STRING\" size=\"256\"/><Column id=\"YN_ESSENTIAL\" type=\"STRING\" size=\"256\"/><Column id=\"TY_CELLTYPE\" type=\"STRING\" size=\"256\"/><Column id=\"TY_ALIGN\" type=\"STRING\" size=\"256\"/><Column id=\"TY_INPUT\" type=\"STRING\" size=\"256\"/><Column id=\"DS_FIELD\" type=\"STRING\" size=\"256\"/><Column id=\"DS_HEADER1\" type=\"STRING\" size=\"256\"/><Column id=\"DS_HEADER2\" type=\"STRING\" size=\"256\"/><Column id=\"DS_HEADER3\" type=\"STRING\" size=\"256\"/><Column id=\"DS_COMBOLIST\" type=\"STRING\" size=\"256\"/><Column id=\"CD_CODEFIND\" type=\"STRING\" size=\"256\"/><Column id=\"NM_CODEFIND\" type=\"STRING\" size=\"256\"/><Column id=\"DS_RESULTALIAS\" type=\"STRING\" size=\"256\"/><Column id=\"NO_MAXLENGTH\" type=\"INT\" size=\"256\"/><Column id=\"NO_GROUP\" type=\"INT\" size=\"256\"/><Column id=\"NO_MERGE\" type=\"INT\" size=\"256\"/><Column id=\"TY_SUMMARY\" type=\"STRING\" size=\"256\"/><Column id=\"AT_COLBACK\" type=\"STRING\" size=\"256\"/><Column id=\"AT_COLFORE\" type=\"STRING\" size=\"256\"/><Column id=\"AT_READONLY\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsGridInfo", this);
            obj._setContents("<ColumnInfo><Column id=\"YN_READONLY\" type=\"STRING\" size=\"256\"/><Column id=\"NO_FIXEDROWS\" type=\"STRING\" size=\"256\"/><Column id=\"NO_FROZENCOL\" type=\"STRING\" size=\"256\"/><Column id=\"YN_AUTOFILTER\" type=\"STRING\" size=\"256\"/><Column id=\"TY_GROUP\" type=\"STRING\" size=\"256\"/><Column id=\"YN_GROUPPANNEL\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"YN_READONLY\">Y</Col><Col id=\"NO_FIXEDROWS\">0</Col><Col id=\"NO_FROZENCOL\">0</Col><Col id=\"YN_AUTOFILTER\">Y</Col></Row></Rows>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Div("divSearch","0.0","10.0",null,"46.0","0",null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_cssclass("div_SEARCH_Bg");
            obj.set_formscrolltype("none");
            this.addChild(obj.name, obj);

            obj = new Static("staCD_ACNTUNIT","0.0","10.0","105.0","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("1");
            obj.set_text("사업지코드");
            obj.set_textAlign("center");
            obj.set_cssclass("sta_WF_SchLabelE");
            this.divSearch.addChild(obj.name, obj);

            obj = new Div("ccfCD_ACNTUNIT","staCD_ACNTUNIT:0.0","10.0","250","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.getSetter("CodeFindName").set("DRX_CFACNTUNIT");
            obj.getSetter("CDTextWidth").set("100");
            obj.set_taborder("2");
            obj.getSetter("FitToContents").set("true");
            obj.set_url("cmm::cmmCodeFind.xfdl");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("staNO_DONG","ccfCD_ACNTUNIT:0.0","10.0","105.0","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("3");
            obj.set_text("동");
            obj.set_textDecoration("none");
            obj.set_textAlign("center");
            obj.set_cssclass("sta_WF_SchLabel");
            this.divSearch.addChild(obj.name, obj);

            obj = new Div("ccfNO_DONG","staNO_DONG:0.0","10.0","100","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.getSetter("CodeFindName").set("DRX_CFDONG_CODEFIND");
            obj.getSetter("CDTextWidth").set("70");
            obj.getSetter("DSTextWidth").set("0");
            obj.set_taborder("4");
            obj.set_url("cmm::cmmCodeFind.xfdl");
            this.divSearch.addChild(obj.name, obj);

            obj = new Div("divData","0","divSearch:10",null,null,"0","0",null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_cssclass("div_DATA_Bg");
            this.addChild(obj.name, obj);

            obj = new Div("divDataLeft","0","0","300",null,null,"0",null,null,null,null,this.divData.form);
            obj.set_taborder("0");
            obj.set_cssclass("div_DATA_Bg");
            this.divData.addChild(obj.name, obj);

            obj = new Static("staTITLE","0","0","100.00%","30",null,null,null,null,null,null,this.divData.form.divDataLeft.form);
            obj.set_taborder("0");
            obj.set_text("구분");
            obj.set_cssclass("sta_TITLE_Bg");
            obj.set_textAlign("left");
            this.divData.form.divDataLeft.addChild(obj.name, obj);

            obj = new Grid("objGrid","0","staTITLE:5",null,null,"0","0",null,null,null,null,this.divData.form.divDataLeft.form);
            obj.set_taborder("0");
            obj._setContents("");
            this.divData.form.divDataLeft.addChild(obj.name, obj);

            obj = new Div("divDataRight","divDataLeft:10","0",null,null,"0","0",null,null,null,null,this.divData.form);
            obj.set_taborder("0");
            obj.set_cssclass("div_DATA_Bg");
            this.divData.addChild(obj.name, obj);

            obj = new Static("staTITLE","0","0","100.00%","30",null,null,null,null,null,null,this.divData.form.divDataRight.form);
            obj.set_taborder("0");
            obj.set_text("계약현황 (○:계약, △:가계약, □:임대계약, ■:임대입주, ◇:해지신청, ◆:후입주자계약, ×:미계약 ,※ :계약불가)");
            obj.set_cssclass("sta_TITLE_Bg");
            obj.set_textAlign("left");
            this.divData.form.divDataRight.addChild(obj.name, obj);

            obj = new Grid("objGridSub","0","staTITLE:5",null,null,"0","0",null,null,null,null,this.divData.form.divDataRight.form);
            obj.set_taborder("0");
            obj.set_binddataset("dsListSub");
            obj._setContents("");
            this.divData.form.divDataRight.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this
            obj = new Layout("default","",this._adjust_width,this._adjust_height,this,function(p){});
            this.addLayout(obj.name, obj);
            
            // BindItem Information
            obj = new BindItem("item0","divSearch.form.ccfCD_ACNTUNIT.form.CDTextBox","value","dsSearch","CD_ACNTUNIT");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item1","divSearch.form.ccfCD_ACNTUNIT.form.DSTextBox","value","dsSearch","DS_ACNTUNIT");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item2","divSearch.form.ccfNO_DONG.form.CDTextBox","value","dsSearch","NO_DONG");
            this.addChild(obj.name, obj);
            obj.bind();
            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {
            this._addPreloadList("fdl","cmm::cmmCodeFind.xfdl");
        };
        
        // User Script
        this.registerScript("DRB_CONTRACTSTATUS.xfdl", function() {
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
        };

        /************************************************************************
         * 버튼 설정 : 화면(Tab) 전환시 마다 호출
         * 서브버튼 사용 및 공통버튼 강제 제어시 여기서 처리
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
        	this.dxGrid = this.divData.form.divDataLeft.form.objGrid;
        	this.dxGridSub = this.divData.form.divDataRight.form.objGridSub;
        };

        /************************************************************************
         * 이벤트 설정
         ************************************************************************/
        this.fnSetEvent = function() {
        	this.divSearch.form.ccfCD_ACNTUNIT.BeforeUserDataSetParam = "fnBeforeUserDataSetParam";
        	this.divSearch.form.ccfNO_DONG.BeforeUserDataSetParam = "fnBeforeUserDataSetParam";

        	// 그리드 초기화
        	this.gfnGridInit(this.dxGrid, this.dsList, "DR", "DRB_CONTRACTSTATUS");

        	this.fnAddFlagRow();
        	this.gfnGridSet(this, this.dxGridSub, this.dsGridInfo, this.dsGridSpec);

        	//this.gfnGridInit(this.dxGridSub, this.dsListSub, "DR", "DRB_CONTRACTSTATUS1");
        	this.dxGridSub.addEventHandler("oncelldblclick", this.fnGridSub_CellDblclick, this);

        	var col = this.dxGrid.getBindCellIndex("body", "NO_COLOR");
        	this.dxGrid.setCellProperty("body", col, "background", "expr:'#' + DS_COLOR");
        };

        /************************************************************************
         * 파라미터 설정
         ************************************************************************/
        this.fnSetParameter = function() {
        	this.dsSelect = new Dataset();
        	this.dsSelect.addColumn("CD_ACNTUNIT", "string");
        	this.dsSelect.addColumn("TY_GUBUN", "string");
        	this.dsSelect.addColumn("NO_CHASU", "string");

        	this.dsSelect1 = new Dataset();
        	this.dsSelect1.addColumn("CD_ACNTUNIT", "string");
        	this.dsSelect1.addColumn("TY_GUBUN", "string");
        	this.dsSelect1.addColumn("NO_CHASU", "string");
        	this.dsSelect1.addColumn("NO_DONG", "string");
        	this.dsSelect1.addColumn("TY_STATE", "string");
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

        	this.dsSelect.setColumn(0, "CD_ACNTUNIT", this.dsSearch.getColumn(0, "CD_ACNTUNIT").substr(0,6));
        	this.dsSelect.setColumn(0, "TY_GUBUN", this.dsSearch.getColumn(0, "CD_ACNTUNIT").substr(6,1));
        	this.dsSelect.setColumn(0, "NO_CHASU", this.dsSearch.getColumn(0, "CD_ACNTUNIT").substr(7,2));

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

        this.fnDetail = function()
        {
        	this.gfnGridBeforeSelect(this.dxGridSub);

        	this.dsSelect1.clearData();
        	this.dsSelect1.addRow();
        	this.dsSelect1.setColumn(0, "CD_ACNTUNIT", this.dsSearch.getColumn(0, "CD_ACNTUNIT").substr(0,6));
        	this.dsSelect1.setColumn(0, "TY_GUBUN", this.dsSearch.getColumn(0, "CD_ACNTUNIT").substr(6,1));
        	this.dsSelect1.setColumn(0, "NO_CHASU", this.dsSearch.getColumn(0, "CD_ACNTUNIT").substr(7,2));
        	this.dsSelect1.setColumn(0, "NO_DONG", this.dsSearch.getColumn(0, "NO_DONG"));
        	this.dsSelect1.setColumn(0, "TY_STATE", "%");

        	var strSvcId    = "detail";
        	var strSvcType  = "grid";
        	var inProc		= "_dsProc";
        	var inData      = "select_d=dsSelect1";
        	var outData     = "dsListTemp=select_d0";
        	//var outData     = "dsListSub=select_d0";
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
        	//var nrow = this.gfnGridAdd(this.dxGrid); // top (default), bottom, current
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
         * Validate
         ************************************************************************/
        /*
         *	조회 Validate
         */
        this.fnSelectValidate = function() {
        	var validate = true;

        	if (this.gfnIsNull(this.dsSearch.getColumn(0, "CD_ACNTUNIT"))) {
        		validate = false;
        		// Alert후 실행할 처리
        		this.fnVaidateCallback = function() {
        			this.divSearch.form.ccfCD_ACNTUNIT.form.CDTextBox.setFocus();
        		}
        		this.gfnAlert("사업지코드를 입력하세요.", "fnVaidateCallback");
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

        		this.fnDetail();
        	}
        	else if(svcID == "detail")
        	{
        		this.fnAddFlagRow();
        		this.fnSetGrid();

        		if(this.dsListTemp.rowcount > 0)
        		{
        			this.dsListSub.copyData(this.dsListTemp);

        			this.fnGridSub_SetColor();
        			this.fnSetListSub();
        		}

        		this.gfnSetFormStatus(this, "Q");
        	}
        }

        /************************************************************************
         * 코드파인드 이벤트
         ************************************************************************/
        this.fnBeforeUserDataSetParam = function(id, dsUserParam, nrow)  {
        	if (id == "ccfCD_ACNTUNIT") {
        		dsUserParam.setColumn(nrow, "CD_DEPT"	, this.AuthClient.CD_DEPT);
        		dsUserParam.setColumn(nrow, "ID_USER"	, this.AuthClient.ID_USER);
        		dsUserParam.setColumn(nrow, "ID_GROUP"	, this.FormInfo.ID_GROUP);
        		dsUserParam.setColumn(nrow, "GR_SEARCH"	, this.FormInfo.GR_SEARCH);
        	}
        	else if(id == "ccfNO_DONG") {
        		dsUserParam.setColumn(nrow, "CD_ACNTUNIT"	, this.dsSearch.getColumn(0, "CD_ACNTUNIT"));
        	}
        	return true;
        }
        /************************************************************************
         * 그리드 이벤트
         ************************************************************************/
         this.fnGridSub_CellDblclick = function(obj,e){
        	var colName = this.gfnGridGetBindColumnNameByIndex(obj, e.cell);
        	if(colName != "구분" && colName != "ddong"){
        		var str_select = obj.getCellValue(e.row, e.cell);
        		var sql_select = this.gfnNvl(str_select,"").split(" ");

        		if(sql_select.length < 2)
        		{
        			return;
        		}
        		else if(sql_select[1].length == 0)
        		{
        			return;
        		}

        		switch(sql_select[1])
        		{
        			case "○": //계약, 미계약
        			case "×":

        				var param = {};
        				param.CD_ACNTUNIT = this.dsSearch.getColumn(0, "CD_ACNTUNIT");
        				param.DS_ACNTUNIT = this.dsSearch.getColumn(0, "DS_ACNTUNIT");
        				var dong = this.dsListSub.getColumn(this.dsListSub.rowposition, "ddong");
        				param.DONG = this.gfnNvl(dong, "").substr(0, dong.length -1);
        				param.FLOOR = this.gfnNvl(this.dsListSub.getColumn(this.dsListSub.rowposition, colName), "").substr(0,2);
        				param.HO = this.gfnNvl(this.dsListSub.getColumn(this.dsListSub.rowposition, colName), "").substr(2,2).padLeft(3, "0");
        				param.YN_CONTRACT = "계약가능";

        				this.gfnFormOpen(this.FormInfo.CD_MODULE, "DRB_CONTRACTDETAIL", "fnContractDetail_callback", param);
        				break;
        			case "※":
        				var param = {};
        				param.CD_ACNTUNIT = this.dsSearch.getColumn(0, "CD_ACNTUNIT");
        				param.DS_ACNTUNIT = this.dsSearch.getColumn(0, "DS_ACNTUNIT");
        				var dong = this.dsListSub.getColumn(this.dsListSub.rowposition, "ddong");
        				param.DONG = this.gfnNvl(dong, "").substr(0, dong.length -1);
        				param.FLOOR = this.gfnNvl(this.dsListSub.getColumn(this.dsListSub.rowposition, colName), "").substr(0,2);
        				param.HO = this.gfnNvl(this.dsListSub.getColumn(this.dsListSub.rowposition, colName), "").substr(2,2).padLeft(3, "0");
        				param.YN_CONTRACT = "계약불가";

        				this.gfnFormOpen(this.FormInfo.CD_MODULE, "DRB_CONTRACTDETAIL", "fnContractDetail_callback", param);
        				break;
        			case "△":
        				break;
        			default:
        				break;
        		}
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
        		this.gfnGridClear(this.dxGridSub);
        	}
        };

        this.fnGridSub_SetColor = function()
        {
        	for(var i = 2; i < this.dsListTemp.colcount; i++)
        	{
        		var col = this.dxGridSub.getBindCellIndex("body", this.dsListTemp.getColID(i));

        		this.dxGridSub.setCellProperty("body", col, "background", "expr:comp.parent.parent.parent.parent.parent.fnGridSub_SetColorDetail(currow,'" + this.dsListTemp.getColID(i) + "')");

        	}
        	//var col = this.dxGridSub.getBindCellIndex("body", this.dsListTemp.getColID(11));
        	//alert(this.dsListTemp.getColID(11));
        	//this.dxGridSub.setCellProperty("body", col, "background", "expr:comp.parent.parent.parent.parent.parent.fnGridSub_SetColorDetail(currow,'" + this.dsListTemp.getColID(11).toString() + "')");

        }

        this.fnGridSub_SetColorDetail = function(nrow, colnm)
        {

        	var color = "";
        	if(this.dsListTemp.getColumn(nrow, colnm.toString().padLeft(3,"0")) == "0")
        	{
        		color = "#808080";
        		return color;
        	}
        	else if(this.dsListTemp.getColumn(nrow, colnm.toString().padLeft(3,"0")).length == 1)
        	{
        		color = "#FFFFE0";
        		return color;
        	}
        	else
        	{
        		color = "#" + this.gfnNvl(this.dsListTemp.getColumn(nrow, colnm.toString().padLeft(3,"0")).substr(1,6), "");
        		return color;
        	}

        	return color;
        }

        this.fnSetListSub = function()
        {
        	this.dsListSub.set_enableevent(false);
        	for(var i = 0; i < this.dsListTemp.rowcount; i++)
        	{
        		for(var j = 2 ; j < this.dsListTemp.colcount ; j++)
        		{
        			var temp = this.dsListSub.getColumn(i, "구분") + this.dsListTemp.getColID(j).substr(1,2);
        			switch(this.dsListSub.getColumn(i, j).substr(0,1))
        			{
        				case "1" : temp += " ○"; break;
        			    case "2" : temp += " ×";  break;
        			    case "3" : temp += " △"; break;
        			    case "4" : temp += " □"; break;
        			    case "5" : temp += " ■"; break;
        			    case "6" : temp += " ◇"; break;
        			    case "7" : temp += " ◆"; break;
        			    case "9" : temp += " ※"; break;
        				default : temp = "";
        			}

        			this.dsListSub.setColumn(i,j, temp);
        		}
        	}
        	this.dsListSub.set_enableevent(true);
        }

        this.fnAddFlagRow = function() {
        	this.dsGridSpec.clearData();

        	var nrow = this.dsGridSpec.addRow();
        	this.dsGridSpec.setColumn(nrow, "NO_WIDTH", 0);
        	this.dsGridSpec.setColumn(nrow, "YN_READONLY", "Y");
        	this.dsGridSpec.setColumn(nrow, "YN_ESSENTIAL", "N");
        	this.dsGridSpec.setColumn(nrow, "TY_CELLTYPE", "TEXT");
        	this.dsGridSpec.setColumn(nrow, "TY_ALIGN", "CENTER");
        	this.dsGridSpec.setColumn(nrow, "TY_INPUT", "KEYIN");
        	this.dsGridSpec.setColumn(nrow, "DS_FIELD", "구분");
        	this.dsGridSpec.setColumn(nrow, "DS_HEADER1", "");
        	this.dsGridSpec.setColumn(nrow, "DS_HEADER2", "");
        	this.dsGridSpec.setColumn(nrow, "DS_HEADER3", "");

        	nrow = this.dsGridSpec.addRow();
        	this.dsGridSpec.setColumn(nrow, "NO_WIDTH", 100);
        	this.dsGridSpec.setColumn(nrow, "YN_READONLY", "Y");
        	this.dsGridSpec.setColumn(nrow, "YN_ESSENTIAL", "N");
        	this.dsGridSpec.setColumn(nrow, "TY_CELLTYPE", "TEXT");
        	this.dsGridSpec.setColumn(nrow, "TY_ALIGN", "CENTER");
        	this.dsGridSpec.setColumn(nrow, "TY_INPUT", "KEYIN");
        	this.dsGridSpec.setColumn(nrow, "DS_FIELD", "ddong");
        	this.dsGridSpec.setColumn(nrow, "DS_HEADER1", "");
        	this.dsGridSpec.setColumn(nrow, "DS_HEADER2", "");
        	this.dsGridSpec.setColumn(nrow, "DS_HEADER3", "");
        	this.dsGridSpec.setColumn(nrow, "NO_MERGE", 1);
        };


        this.fnSetGrid = function() {
        	if (this.dsListTemp.rowcount > 0) {
        		var ds = this.dsListTemp;

        		// Flag 및 기초데이터
        		this.fnAddFlagRow();

        		for(var i = 2; i < this.dsListTemp.colcount; i++) {
        			var nrow = this.dsGridSpec.addRow();
        			this.dsGridSpec.setColumn(nrow, "NO_WIDTH", 80);
        			this.dsGridSpec.setColumn(nrow, "YN_READONLY", "Y");
        			this.dsGridSpec.setColumn(nrow, "YN_ESSENTIAL", "N");
        			this.dsGridSpec.setColumn(nrow, "TY_CELLTYPE", "TEXT");
        			this.dsGridSpec.setColumn(nrow, "TY_ALIGN", "CENTER");
        			this.dsGridSpec.setColumn(nrow, "TY_INPUT", "KEYIN");
        			this.dsGridSpec.setColumn(nrow, "DS_FIELD",  this.dsListTemp.getColID(i));
        			this.dsGridSpec.setColumn(nrow, "DS_HEADER1", "");
        			this.dsGridSpec.setColumn(nrow, "DS_HEADER2", "");
        			this.dsGridSpec.setColumn(nrow, "DS_HEADER3", "");
        		}
        	}
        	this.dsGridInfo.setColumn(0, "NO_FIXEDROWS", 0);
        	this.dsGridInfo.setColumn(0, "YN_AUTOFILTER", "N");

        	this.gfnGridSet(this, this.dxGridSub, this.dsGridInfo, this.dsGridSpec);
        }
        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.form_onload,this);
            this.dsSearch.addEventHandler("onvaluechanged",this.dsSearch_onvaluechanged,this);
        };
        this.loadIncludeScript("DRB_CONTRACTSTATUS.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
