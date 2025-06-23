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
            this.set_titletext("엑셀전표발행(CU,해외)");
            if (Form == this.constructor)
            {
                this._setFormPosition(1280,720);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("dsList", this);
            obj._setContents("");
            this.addChild(obj.name, obj);


            obj = new Dataset("_dsProc", this);
            obj._setContents("<ColumnInfo><Column id=\"TARGET\" type=\"STRING\" size=\"256\"/><Column id=\"SP\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"TARGET\">select</Col><Col id=\"SP\">DHAPR_SLIP_EXCEL_SELECT</Col></Row><Row><Col id=\"TARGET\">insert</Col><Col id=\"SP\">DHAPR_SLIP_EXCEL_INSERT</Col></Row><Row><Col id=\"TARGET\">update</Col><Col id=\"SP\">DHAPR_SLIP_EXCEL_UPDATE</Col></Row><Row><Col id=\"TARGET\">delete</Col><Col id=\"SP\">DHAPR_SLIP_EXCEL_DELETE</Col></Row><Row><Col id=\"TARGET\">combo</Col><Col id=\"SP\">DHXPR_COMMON_CODEFIND_SELECT</Col></Row><Row><Col id=\"TARGET\">issueSlip</Col><Col id=\"SP\">DHAPR_SLIP_EXCEL_AUTOSLIP</Col></Row><Row><Col id=\"SP\">DHAPR_SLIP_EXCEL_CANCELSLIP</Col><Col id=\"TARGET\">cancelSlip</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsSearch", this);
            obj._setContents("<ColumnInfo><Column id=\"CD_CORP\" type=\"STRING\" size=\"256\"/><Column id=\"DT_ACCOUNT_FR\" type=\"STRING\" size=\"256\"/><Column id=\"DT_ACCOUNT_TO\" type=\"STRING\" size=\"256\"/><Column id=\"CD_NATION\" type=\"STRING\" size=\"256\"/><Column id=\"YN_SLIP\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"CD_CORP\"/><Col id=\"DT_ACCOUNT_FR\"/><Col id=\"DT_ACCOUNT_TO\"/></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsCD_NATION", this);
            obj._setContents("<ColumnInfo><Column id=\"CD_CODE\" type=\"STRING\" size=\"256\"/><Column id=\"DS_CODE\" type=\"STRING\" size=\"256\"/><Column id=\"RM_BIGO\" type=\"STRING\" size=\"256\"/><Column id=\"DS_ETC1\" type=\"STRING\" size=\"256\"/><Column id=\"DS_ETC2\" type=\"STRING\" size=\"256\"/><Column id=\"DS_ETC3\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsFormat", this);
            obj._setContents("<ColumnInfo><Column id=\"CD_NATION\" type=\"STRING\" size=\"256\"/><Column id=\"NO_TRADE\" type=\"INT\" size=\"256\"/><Column id=\"DT_ACCOUNT\" type=\"STRING\" size=\"256\"/><Column id=\"CD_DEPT_BE\" type=\"STRING\" size=\"256\"/><Column id=\"CD_ACCOUNT\" type=\"STRING\" size=\"256\"/><Column id=\"DS_ACCOUNT\" type=\"STRING\" size=\"256\"/><Column id=\"AM_DR\" type=\"INT\" size=\"256\"/><Column id=\"AM_CR\" type=\"INT\" size=\"256\"/><Column id=\"DS_REM\" type=\"STRING\" size=\"256\"/><Column id=\"DS_VENDOR\" type=\"STRING\" size=\"256\"/><Column id=\"NO_REF\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"CD_NATION\">KHR</Col><Col id=\"NO_TRADE\">1</Col><Col id=\"DT_ACCOUNT\">20190901</Col><Col id=\"CD_DEPT_BE\">0100000</Col><Col id=\"CD_ACCOUNT\">11111</Col><Col id=\"DS_ACCOUNT\">계정1</Col><Col id=\"AM_DR\">110000</Col><Col id=\"DS_REM\">적요</Col><Col id=\"DS_VENDOR\">118631</Col><Col id=\"NO_REF\">12345657890</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new FileDownTransfer("FileDownTransfer00", this);
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Div("divSearch","0.0","10.0",null,"46.0","0",null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_cssclass("div_SEARCH_Bg");
            obj.set_formscrolltype("none");
            this.addChild(obj.name, obj);

            obj = new Static("sta00","0.0","10.0","118.0","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("5");
            obj.set_text("법인코드");
            obj.set_cssclass("sta_WF_SchLabelE");
            this.divSearch.addChild(obj.name, obj);

            obj = new Div("ccfCD_CORP","sta00:0.0","10.0","269","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.getSetter("CDTextWidth").set("70");
            obj.set_taborder("0");
            obj.set_url("cmm::cmmCodeFind.xfdl");
            obj.set_text("");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("sta01","ccfCD_CORP:0.0","10.0","118.0","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("6");
            obj.set_text("회계일자");
            obj.set_cssclass("sta_WF_SchLabelE");
            this.divSearch.addChild(obj.name, obj);

            obj = new Calendar("ctclDT_ACCOUNT_FR","sta01:0.0","10.0","105","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("1");
            obj.set_dateformat("yyyy-MM-dd");
            obj.set_editformat("yyyyMMdd");
            obj.set_autoselect("true");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("sta02","ctclDT_ACCOUNT_FR:0.0","10.0","30.0","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("7");
            obj.set_text("~");
            obj.set_cssclass("sta_WF_AC");
            this.divSearch.addChild(obj.name, obj);

            obj = new Calendar("ctclDT_ACCOUNT_TO","sta02:0.0","10.0","105","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("2");
            obj.set_dateformat("yyyy-MM-dd");
            obj.set_editformat("yyyyMMdd");
            obj.set_autoselect("true");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("sta03","ctclDT_ACCOUNT_TO:0.0","10.0","118.0","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("8");
            obj.set_text("국가");
            obj.set_cssclass("sta_WF_SchLabel");
            this.divSearch.addChild(obj.name, obj);

            obj = new Combo("ccboCD_NATION","sta03:0.0","10.0","100","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("3");
            obj.set_innerdataset("dsCD_NATION");
            obj.set_datacolumn("DS_CODE");
            obj.set_codecolumn("CD_CODE");
            obj.set_text("");
            obj.set_value("");
            obj.set_index("-1");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("sta04","ccboCD_NATION:0.0","10.0","118.0","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("9");
            obj.set_text("전표발행여부");
            obj.set_cssclass("sta_WF_SchLabel");
            this.divSearch.addChild(obj.name, obj);

            obj = new Combo("ccboYN_SLIP","sta04:0.0","10.0","100","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("4");
            obj.set_datacolumn("datacolumn");
            obj.set_codecolumn("codecolumn");
            var divSearch_form_ccboYN_SLIP_innerdataset = new nexacro.NormalDataset("divSearch_form_ccboYN_SLIP_innerdataset", obj);
            divSearch_form_ccboYN_SLIP_innerdataset._setContents("<ColumnInfo><Column id=\"codecolumn\" size=\"256\"/><Column id=\"datacolumn\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"codecolumn\">Y</Col><Col id=\"datacolumn\">발행</Col></Row><Row><Col id=\"codecolumn\">N</Col><Col id=\"datacolumn\">미발행</Col></Row></Rows>");
            obj.set_innerdataset(divSearch_form_ccboYN_SLIP_innerdataset);
            obj.set_text("");
            obj.set_value("");
            obj.set_index("-1");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("sta05","ccboYN_SLIP:0.0","10.0","118.0","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("10");
            obj.set_text("환율기준일자");
            obj.set_cssclass("sta_WF_SchLabelE");
            this.divSearch.addChild(obj.name, obj);

            obj = new Calendar("ctclDT_STD_EX","sta05:0.0","10.0","105","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("11");
            obj.set_dateformat("yyyy-MM-dd");
            obj.set_editformat("yyyyMMdd");
            obj.set_autoselect("true");
            this.divSearch.addChild(obj.name, obj);

            obj = new Div("divData","0","divSearch:10",null,null,"0","0",null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_cssclass("div_DATA_Bg");
            this.addChild(obj.name, obj);

            obj = new Grid("objGrid","0","0",null,null,"0","0",null,null,null,null,this.divData.form);
            obj.set_taborder("0");
            obj._setContents("");
            this.divData.addChild(obj.name, obj);

            obj = new Grid("grdFormat","30","121","980","162",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("1");
            obj.set_binddataset("dsFormat");
            obj.set_visible("false");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"76\"/><Column size=\"74\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"141\"/><Column size=\"86\"/><Column size=\"86\"/><Column size=\"140\"/><Column size=\"80\"/><Column size=\"109\"/></Columns><Rows><Row size=\"24\" band=\"head\"/><Row size=\"24\"/></Rows><Band id=\"head\"><Cell text=\"국가\" textDecoration=\"underline\"/><Cell col=\"1\" text=\"순번\" textDecoration=\"underline\"/><Cell col=\"2\" text=\"일자\"/><Cell col=\"3\" text=\"귀속부서\" textDecoration=\"underline\"/><Cell col=\"4\" text=\"계정코드\" textDecoration=\"underline\"/><Cell col=\"5\" text=\"계정명\"/><Cell col=\"6\" text=\"차변(로컬)\"/><Cell col=\"7\" text=\"대변(로컬)\"/><Cell col=\"8\" text=\"적요\"/><Cell col=\"9\" text=\"거래처코드\" textDecoration=\"underline\"/><Cell col=\"10\" text=\"계좌번호\"/></Band><Band id=\"body\"><Cell text=\"bind:CD_NATION\" textAlign=\"center\"/><Cell col=\"1\" text=\"bind:NO_TRADE\" textAlign=\"center\"/><Cell col=\"2\" text=\"bind:DT_ACCOUNT\" textAlign=\"center\"/><Cell col=\"3\" text=\"bind:CD_DEPT_BE\" textAlign=\"center\"/><Cell col=\"4\" text=\"bind:CD_ACCOUNT\" textAlign=\"center\"/><Cell col=\"5\" text=\"bind:DS_ACCOUNT\" textAlign=\"left\"/><Cell col=\"6\" text=\"bind:AM_DR\" textAlign=\"right\"/><Cell col=\"7\" text=\"bind:AM_CR\" textAlign=\"right\"/><Cell col=\"8\" text=\"bind:DS_REM\"/><Cell col=\"9\" text=\"bind:DS_VENDOR\" textAlign=\"center\"/><Cell col=\"10\" text=\"bind:NO_REF\" textAlign=\"center\" edittype=\"text\" displaytype=\"text\" editinputfilter=\"sign\" editinputtype=\"number\"/></Band></Format></Formats>");
            this.divData.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this
            obj = new Layout("default","",this._adjust_width,this._adjust_height,this,function(p){});
            this.addLayout(obj.name, obj);
            
            // BindItem Information
            obj = new BindItem("item0","divSearch.form.ccfCD_CORP.form.CDTextBox","value","dsSearch","CD_CORP");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item1","divSearch.form.ctclDT_ACCOUNT_TO","value","dsSearch","DT_ACCOUNT_FR");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item2","divSearch.form.ctclDT_ACCOUNT_FR","value","dsSearch","DT_ACCOUNT_TO");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item3","divSearch.form.ccboCD_NATION","value","dsSearch","CD_NATION");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item4","divSearch.form.ccboYN_SLIP","value","dsSearch","YN_SLIP");
            this.addChild(obj.name, obj);
            obj.bind();
            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {
            this._addPreloadList("fdl","cmm::cmmCodeFind.xfdl");
        };
        
        // User Script
        this.registerScript("DHA_EXCEL_SLIP.xfdl", function() {
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
        	this.fnSetCombo();

        	this.ccfCD_CORP.setFocus();

        	var toDay = this.gfnGetDate();
        	//검색조건 기본일자 셋팅
        	this.divSearch.form.ctclDT_ACCOUNT_FR.set_value(toDay.substr(0,4) + "0101");	//현재년1월1일
        	this.divSearch.form.ctclDT_ACCOUNT_TO.set_value(toDay);	//현재일자

        	this.ctclDT_ACCOUNT_TO.set_value(toDay);	//현재일자
        	this.ctclDT_STD_EX.set_value(toDay);

        	//법인코드 세션에 코드로 셋팅
        	this.ccfCD_CORP.form.DSTextBox.set_value(this.AuthClient.DS_CORP);
        	this.ccfCD_CORP.form.CDTextBox.set_value(this.AuthClient.CD_CORP);

        	//전역변수에 그리드에 필수체크 배열 담기
        	this.vArrRequired = this.dxGrid.usRequired;
        };

        /************************************************************************
         * 버튼 설정 : 화면(Tab) 전환시 마다 호출
         * 서브버튼 사용 및 공통버튼 강제 제어시 여기서 처리
         ************************************************************************/
        this.fnSetButton = function() {
        	// Select, Add, Del, Save, Excel, Print
        	// SubSelect, SubAdd, SubDel, SuubSave, SubExcel

        }

        /************************************************************************
         * 확장 버튼 : 화면별 버튼 설정 ID, function 연결 (화면버튼관리)
         ************************************************************************/
        this.fnSetExtendButton = function() {
        	this.btnExcelUpload = this.gfnFormButtonAdd("ExcelUpload", "fnExcelUpload"); 	//엑셀업로드 버튼
        	this.btnExcelDown   = this.gfnFormButtonAdd("ExcelDown", "fnExcelDown"); 		//양식다운 버튼
        	this.btnIssueSlip   = this.gfnFormButtonAdd("IssueSlip", "fnIssueSlip"); 		//전표발행 버튼
        	this.btnCancelSlip  = this.gfnFormButtonAdd("CancelSlip", "fnCancelSlip"); 		//전표취소 버튼
        	this.btnSearchSlip  = this.gfnFormButtonAdd("SearchSlip", "fnSearchSlip"); 		//전표조회 버튼
        };

        /************************************************************************
         * 변수 선언
         ************************************************************************/
        this.fnSetVariable = function() {
        	this.ccfCD_CORP = this.divSearch.form.ccfCD_CORP;
        	this.ctclDT_ACCOUNT_FR = this.divSearch.form.ctclDT_ACCOUNT_FR;
        	this.ctclDT_ACCOUNT_TO = this.divSearch.form.ctclDT_ACCOUNT_TO;
        	this.ccboCD_NATION = this.divSearch.form.ccboCD_NATION;
        	this.ccboYN_SLIP = this.divSearch.form.ccboYN_SLIP;
        	this.ctclDT_STD_EX = this.divSearch.form.ctclDT_STD_EX;
        	this.dxGrid = this.divData.form.objGrid;

        	this.vArrRequired = [];
        };

        /************************************************************************
         * 이벤트 설정
         ************************************************************************/
        this.fnSetEvent = function() {
        	this.ccfCD_CORP.CodeFindName = "DHX_CFCORP";
        	this.ccfCD_CORP.BeforeUserDataSetParam = "fnBeforeUserDataSetParam";
        	this.ccfCD_CORP.AfterCDTextChanged = "fnAfterCDTextChanged";

        	// 그리드 초기화
        	this.gfnGridInit(this.dxGrid, this.dsList, "DH", "DHA_SLIP_EXCEL");

        	this.dxGrid.BeforeUserDataSetParam = "fnGrid_BeforeUserDataSetParam";
        	//this.dxGrid.AfterCDTextChanged = "fnGrid_AfterCDTextChanged";
        	this.dsList.addEventHandler("oncolumnchanged", this.dsList_ColumnChanged, this);
        	//this.dxGrid.set_selecttype("cell");

        	//검색조건 변경 이벤트
        	this.dsSearch.addEventHandler("onvaluechanged", this.dsSearch_Valuechanged, this);

        	//this.dxGrid.deleteContentsCol("body", this.dxGrid.getBindCellIndex("body", "CD_CORP"));		//법인코드
        	//this.dxGrid.deleteContentsCol("body", this.dxGrid.getBindCellIndex("body", "CD_DEPT_BE"));	//귀속부서코드
        	//this.dxGrid.deleteContentsCol("body", this.dxGrid.getBindCellIndex("body", "CD_VENDOR"));	//거래처코드

        	var colNOREF = this.dxGrid.getBindCellIndex("body", "NO_REF");
        	this.dxGrid.setCellProperty("body", colNOREF, "editinputfilter", "sign");
        	this.dxGrid.setCellProperty("body", colNOREF, "editinputtype"  , "number");

        	//발행구분 미발행
        	this.ccboYN_SLIP.set_value("N");
        };

        /************************************************************************
         * 파라미터 설정
         ************************************************************************/
        this.fnSetParameter = function() {

        	this.dsSelect = new Dataset();
        	this.dsSelect.addColumn("CD_CORP", "string");
        	this.dsSelect.addColumn("DT_FROM", "string");
        	this.dsSelect.addColumn("DT_TO", "string");
        	this.dsSelect.addColumn("CD_NATION", "string");
        	this.dsSelect.addColumn("YN_SLIP", "string");

        	this.dsInsert = new Dataset();
        	this.dsInsert.addColumn("CD_CORP", "string");
        	this.dsInsert.addColumn("CD_NATION", "string");
        	this.dsInsert.addColumn("NO_TRADE", "string");
        	this.dsInsert.addColumn("DT_ACCOUNT", "string");
        	this.dsInsert.addColumn("CD_DEPT_BE", "string");
        	this.dsInsert.addColumn("CD_ACCOUNT", "string");
        	this.dsInsert.addColumn("DS_ACCOUNT", "string");
        	this.dsInsert.addColumn("AM_DR", "BIGDECIMAL");
        	this.dsInsert.addColumn("AM_CR", "BIGDECIMAL");
        	this.dsInsert.addColumn("DS_REM", "string");
        	this.dsInsert.addColumn("CD_VENDOR", "string");
        	this.dsInsert.addColumn("CD_PROOF", "string");
        	this.dsInsert.addColumn("AM_SUPPLY", "BIGDECIMAL");
        	this.dsInsert.addColumn("AM_VAT", "BIGDECIMAL");
        	this.dsInsert.addColumn("YN_LAST", "string");
        	this.dsInsert.addColumn("NO_REF", "string");
        	this.dsInsert.addColumn("DT_STD_EX", "string");
        	this.dsInsert.addColumn("ID_USER", "string");

        	this.dsUpdate = new Dataset();
        	this.dsUpdate.addColumn("SEQ", "BIGDECIMAL");
        	this.dsUpdate.addColumn("CD_CORP", "string");
        	this.dsUpdate.addColumn("CD_NATION", "string");
        	this.dsUpdate.addColumn("NO_TRADE", "string");
        	this.dsUpdate.addColumn("DT_ACCOUNT", "string");
        	this.dsUpdate.addColumn("CD_DEPT_BE", "string");
        	this.dsUpdate.addColumn("CD_ACCOUNT", "string");
        	this.dsUpdate.addColumn("DS_ACCOUNT", "string");
        	this.dsUpdate.addColumn("AM_DR", "BIGDECIMAL");
        	this.dsUpdate.addColumn("AM_CR", "BIGDECIMAL");
        	this.dsUpdate.addColumn("DS_REM", "string");
        	this.dsUpdate.addColumn("AM_DR_EX", "int");
        	this.dsUpdate.addColumn("AM_CR_EX", "int");
        	this.dsUpdate.addColumn("CD_VENDOR", "string");
        	this.dsUpdate.addColumn("CD_PROOF", "string");
        	this.dsUpdate.addColumn("AM_SUPPLY", "BIGDECIMAL");
        	this.dsUpdate.addColumn("AM_VAT", "BIGDECIMAL");
        	this.dsUpdate.addColumn("NO_REF", "string");
        	this.dsUpdate.addColumn("DT_STD_EX", "string");
        	this.dsUpdate.addColumn("ID_USER", "string");

        	this.dsDelete = new Dataset();
        	this.dsDelete.addColumn("SEQ", "BIGDECIMAL");

        	//전표발행용 데이터셋
        	this.dsIssueSlip = new Dataset();
        	this.dsIssueSlip.addColumn("CD_CORP"    , "string");
        	this.dsIssueSlip.addColumn("DT_FROM"    , "string");
        	this.dsIssueSlip.addColumn("DT_TO"      , "string");
        	this.dsIssueSlip.addColumn("CD_NATION"  , "string");
        	this.dsIssueSlip.addColumn("CD_SITE_BH" , "string");
        	this.dsIssueSlip.addColumn("ID_USER"    , "string");

        	//전표취소용 데이터셋
        	this.dsCancelSlip = new Dataset();
        	this.dsCancelSlip.addColumn("CD_CORP"    , "string");
        	this.dsCancelSlip.addColumn("DT_FROM"    , "string");
        	this.dsCancelSlip.addColumn("DT_TO"      , "string");
        	this.dsCancelSlip.addColumn("CD_NATION"  , "string");
        	this.dsCancelSlip.addColumn("SEQ"  		 , "string");

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

        	this.dsSelect.setColumn(0, "CD_CORP"	, this.ccfCD_CORP.form.CDTextBox.text);
        	this.dsSelect.setColumn(0, "DT_FROM"	, this.ctclDT_ACCOUNT_FR.value);
        	this.dsSelect.setColumn(0, "DT_TO"		, this.ctclDT_ACCOUNT_TO.value);
        	this.dsSelect.setColumn(0, "CD_NATION"	, this.ccboCD_NATION.value);
        	this.dsSelect.setColumn(0, "YN_SLIP"	, this.ccboYN_SLIP.value);

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
        	var nRow = this.gfnGridAdd(this.dxGrid);

        	this.dsList.setColumn(nRow, "CD_CORP", this.ccfCD_CORP.form.CDTextBox.text);
        	//this.dsList.setColumn(nRow, "DT_WORK", this.ctclDT_WORK.form.TextBox.value);
        }

        /*
         *	삭제 버튼
         */
        this.fnDel = function() {
        	this.dsList.set_enableevent(false);

        	var arrDel = [];
         	for(var i =0;i<this.dsList.getRowCountNF();i++){
        		if(this.dsList.getColumnNF(i, "CHK") == "1" && this.gfnIsNull(this.dsList.getColumnNF(i, "CD_TRADE"))){

        			var flag = this.dsList.getColumnNF(i, this.ucFlag);

        			if(flag == "I"){
        				arrDel[arrDel.length] = i;
        			}
        			else if (flag == "D") {
        				this.dsList.setColumnNF(i, this.ucFlag, "");
        			}
        			else if (flag == "DU") {
        				this.dsList.setColumnNF(i, this.ucFlag, "U");
        			}
        			else {
        				if (flag == "U") {
        					this.dsList.setColumnNF(i, this.ucFlag, "DU");
        				}
        				else if (flag != "#") {
        					this.dsList.setColumnNF(i, this.ucFlag, "D");
        				}
        			}
        		}
         	}

        	//신규로우 데이터 삭제
        	this.dsList.deleteMultiRows(arrDel);

        	this.dsList.set_enableevent(true);

        	this.gfnSetFormStatus(this, "D");
        }

        /*
         *	저장 버튼
         */
        this.fnSave = function() {


        	// 그리드 필수항목 체크
        	if (!this.gfnGridValidate(this.dxGrid)) return;
        	if (!this.fnValidate()) return;

        	this.dxGrid.updateToDataset();

        	this.dsInsert.clearData();
        	this.dsUpdate.clearData();
        	this.dsDelete.clearData();

        	for (var i = 0; i < this.dsList.rowcount; i++) {
        		var flag = this.gfnGetFlag(this.dsList, i);

        		switch(flag) {
        			case "I":
        				var nrow = this.dsInsert.addRow();
        				this.dsInsert.setColumn(nrow, "CD_CORP"  		, this.dsList.getColumn(i, "CD_CORP"));			//법인코드
        				this.dsInsert.setColumn(nrow, "CD_NATION"  		, this.dsList.getColumn(i, "CD_NATION"));		//국가코드
        				this.dsInsert.setColumn(nrow, "NO_TRADE"  		, this.dsList.getColumn(i, "NO_TRADE"));		//전표번호
        				this.dsInsert.setColumn(nrow, "DT_ACCOUNT"  	, this.dsList.getColumn(i, "DT_ACCOUNT"));		//회계일자

        				//엑셀업로드시 명에 코드가 들어올경우 처리
        				if(this.gfnIsNull(this.gfnTrim(this.dsList.getColumn(i, "CD_DEPT_BE")))){
        					this.dsInsert.setColumn(nrow, "CD_DEPT_BE"  	, this.dsList.getColumn(i, "DS_DEPT_BE"));		//귀속부서
        				}else{
        					this.dsInsert.setColumn(nrow, "CD_DEPT_BE"  	, this.dsList.getColumn(i, "CD_DEPT_BE"));		//귀속부서
        				}

        				this.dsInsert.setColumn(nrow, "CD_ACCOUNT"  	, this.dsList.getColumn(i, "CD_ACCOUNT"));		//계정코드
        				this.dsInsert.setColumn(nrow, "DS_ACCOUNT"  	, this.dsList.getColumn(i, "DS_ACCOUNT"));		//계정명
        				this.dsInsert.setColumn(nrow, "AM_DR"  			, this.dsList.getColumn(i, "AM_DR"));			//차변금액
        				this.dsInsert.setColumn(nrow, "AM_CR"  			, this.dsList.getColumn(i, "AM_CR"));			//대변금액
        				this.dsInsert.setColumn(nrow, "DS_REM"  		, this.dsList.getColumn(i, "DS_REM"));			//적요

        				//엑셀업로드시 명에 코드가 들어올경우 처리
        				if(this.gfnIsNull(this.gfnTrim(this.dsList.getColumn(i, "CD_VENDOR")))){

        					this.dsInsert.setColumn(nrow, "CD_VENDOR"  		, this.dsList.getColumn(i, "DS_VENDOR"));		//거래처코드
        				}else{
        					this.dsInsert.setColumn(nrow, "CD_VENDOR"  		, this.dsList.getColumn(i, "CD_VENDOR"));		//거래처코드
        				}

        				this.dsInsert.setColumn(nrow, "CD_PROOF" 		, this.dsList.getColumn(i, "CD_PROOF"));		//증빙구분
        				this.dsInsert.setColumn(nrow, "AM_SUPPLY"  		, this.dsList.getColumn(i, "AM_SUPPLY"));		//공급가
        				this.dsInsert.setColumn(nrow, "AM_VAT"  		, this.dsList.getColumn(i, "AM_VAT"));			//부가세
        				this.dsInsert.setColumn(nrow, "YN_LAST"  		, this.dsList.getColumn(i, "YN_LAST"));			//마지막 전표여부
        				this.dsInsert.setColumn(nrow, "NO_REF"  		, this.dsList.getColumn(i, "NO_REF"));			//계좌번호
        				this.dsInsert.setColumn(nrow, "DT_STD_EX"    	, this.dsList.getColumn(i, "DT_STD_EX"));		//환율기준일자
        				this.dsInsert.setColumn(nrow, "ID_USER"  		, this.AuthClient.ID_USER);						//사용자 아이디
        				break;
        			case "U":
        				var nrow = this.dsUpdate.addRow();
        				this.dsUpdate.setColumn(nrow, "SEQ"  			, this.dsList.getColumn(i, "SEQ"));				//순번
        				this.dsUpdate.setColumn(nrow, "CD_CORP"  		, this.dsList.getColumn(i, "CD_CORP"));			//법인코드
        				this.dsUpdate.setColumn(nrow, "CD_NATION"  		, this.dsList.getColumn(i, "CD_NATION"));		//국가코드
        				this.dsUpdate.setColumn(nrow, "NO_TRADE"  		, this.dsList.getColumn(i, "NO_TRADE"));		//전표번호
        				this.dsUpdate.setColumn(nrow, "DT_ACCOUNT"  	, this.dsList.getColumn(i, "DT_ACCOUNT"));		//회계일자
        				this.dsUpdate.setColumn(nrow, "CD_DEPT_BE"  	, this.dsList.getColumn(i, "CD_DEPT_BE"));		//귀속부서
        				this.dsUpdate.setColumn(nrow, "CD_ACCOUNT"  	, this.dsList.getColumn(i, "CD_ACCOUNT"));		//계정코드
        				this.dsUpdate.setColumn(nrow, "DS_ACCOUNT"  	, this.dsList.getColumn(i, "DS_ACCOUNT"));		//계정명
        				this.dsUpdate.setColumn(nrow, "AM_DR"  			, this.dsList.getColumn(i, "AM_DR"));			//차변금액
        				this.dsUpdate.setColumn(nrow, "AM_CR"  			, this.dsList.getColumn(i, "AM_CR"));			//대변금액
        				this.dsUpdate.setColumn(nrow, "DS_REM"  		, this.dsList.getColumn(i, "DS_REM"));			//적요
        				this.dsUpdate.setColumn(nrow, "AM_DR_EX"  		, this.dsList.getColumn(i, "AM_DR_EX"));		//원화환산차변금액
        				this.dsUpdate.setColumn(nrow, "AM_CR_EX"  		, this.dsList.getColumn(i, "AM_CR_EX"));		//원화환산대변금액
        				this.dsUpdate.setColumn(nrow, "CD_VENDOR"  		, this.dsList.getColumn(i, "CD_VENDOR"));		//거래처코드
        				this.dsUpdate.setColumn(nrow, "CD_PROOF" 	    , this.dsList.getColumn(i, "CD_PROOF"));		//증빙구분
        				this.dsUpdate.setColumn(nrow, "AM_SUPPLY"  		, this.dsList.getColumn(i, "AM_SUPPLY"));		//공급가
        				this.dsUpdate.setColumn(nrow, "AM_VAT"  		, this.dsList.getColumn(i, "AM_VAT"));			//부가세
        				this.dsUpdate.setColumn(nrow, "NO_REF"  		, this.dsList.getColumn(i, "NO_REF"));			//계좌번호
        				this.dsUpdate.setColumn(nrow, "DT_STD_EX"     	, this.dsList.getColumn(i, "DT_STD_EX"));		//환율기준일자
        				this.dsUpdate.setColumn(nrow, "ID_USER"  		, this.AuthClient.ID_USER);						//사용자 아이디
        				break;
        			case "D":
        				var nrow = this.dsDelete.addRow();
        				this.dsDelete.setColumn(nrow, "SEQ"  , this.dsList.getColumn(i, "SEQ"));		//순번
        				break;
        		}
        	}

        	if (this.dsInsert.rowcount == 0 && this.dsUpdate.rowcount == 0 && this.dsDelete.rowcount == 0) return;

        	var strSvcId    = "save";
        	var strSvcType  = "save";
        	var inProc		= "_dsProc";
        	var inData      = "insert=dsInsert update=dsUpdate delete=dsDelete";
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
         * Validate
         ************************************************************************/
        /*
         *	조회 Validate
         */
        this.fnSelectValidate = function() {
        	var validate = true;

        	if (this.gfnIsNull(this.ccfCD_CORP.form.CDTextBox.text)) {
        		this.gfnAlert("법인코드는 필수입니다.");
        		this.ccfCD_CORP.form.CDTextBox.setFocus();
        		validate = false;
        	}

        	var dtAcntFr = this.divSearch.form.ctclDT_ACCOUNT_FR.value;
        	var dtAcnTo  = this.divSearch.form.ctclDT_ACCOUNT_TO.value;

        	if(this.gfnIsNull(dtAcntFr)){
        		this.gfnAlert("회계일자(시작일)은 필수입니다.");
        		this.divSearch.form.ctclDT_ACCOUNT_FR.setFocus();
        		validate = false;
        	}

        	if(this.gfnIsNull(dtAcnTo)){
        		this.gfnAlert("회계일자(종료일)은 필수입니다.");
        		this.divSearch.form.ctclDT_ACCOUNT_TO.setFocus();
        		validate = false;
        	}

        	if(this.gfnGetDiffDate(dtAcntFr, dtAcnTo) <= -1){
        		this.gfnAlert("회계일자의 시작일은 종료일보다 작아야 합니다.");
        		this.divSearch.form.ctclDT_ACCOUNT_FR.setFocus();
        		validate = false;
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
        	switch(svcID) {
        		case "select":
        			this.gfnGridAfterSelect(this.dxGrid);

        			if(this.dsList.rowcount > 0){
        				if(this.dsList.rowcount == 1 && this.dsList.getColumn(0, this.ucFlag) == "#"){
        					return;
        				}

        				if(this.ccboYN_SLIP.value == "Y"){	//전표발행여부
        					this.gfnSetEnable(this.btnIssueSlip, false);
        					this.gfnSetEnable(this.btnCancelSlip, true);
        					this.gfnSetEnable(this.btnSearchSlip, true);
        				}else{
        					this.gfnSetEnable(this.btnIssueSlip, true);
        					this.gfnSetEnable(this.btnCancelSlip, false);
        					this.gfnSetEnable(this.btnSearchSlip, false);
        				}
        			}
        		break;
        		case "save":
        			if (errorCode == 0) {
        				this.FormBtns.Select.click();
        			} else {
        				this.gfnAlert(errorMsg);
        			}
        		break;
        		case "issueSlip":
        			if (errorCode == 0) {
        				this.gfnAlert("전표가 발행 되었습니다.");
        				this.FormBtns.Select.click();
        			} else {
        				this.gfnAlert(errorMsg);
        			}
        		break;
        		case "cancelSlip":
        			if (errorCode == 0) {
        				this.gfnAlert("전표가 취소 되었습니다.");
        				this.FormBtns.Select.click();
        			} else {
        				this.gfnAlert(errorMsg);
        			}
        		break;
        		case "combo":
        			if (errorCode == 0) {
        				var nRow = this.dsCD_NATION.insertRow(0);
        				this.dsCD_NATION.setColumn(nRow, "CD_CODE", "");
        				this.dsCD_NATION.setColumn(nRow, "DS_CODE", "전체");

        				this.ccboCD_NATION.set_index(0);
        			}
        		break;

        	}

        }

        /************************************************************************
         * 코드파인드 이벤트
         ************************************************************************/
        this.fnBeforeUserDataSetParam = function(id, dsUserParam, nrow) {
        	if (id == "ccfCD_CORP") {	//법인코드
        		dsUserParam.setColumn(nrow, "ID_SABUN", this.AuthClient.ID_USER);
        	}
        	return true;
        };

        this.fnAfterCDTextChanged = function(id, codeFindData) {

        	switch(id) {
        		case "ccfCD_CORP":	//법인코드

        		break;
        	}
        }

        /************************************************************************
         * 그리드 이벤트
         ************************************************************************/

        this.fnGrid_BeforeUserDataSetParam = function(id, dsUserParam, nrow) {
        	// 그리드에서 코드파인드 id는 그리드셋팅의 코드파인드 식별ID
        	var cdCorp = this.dsList.getColumn(this.dsList.rowposition, "CD_CORP");

        	switch(id) {
        		case "DHX_CFACNTUNIT":	//귀속부서
        			dsUserParam.setColumn(nrow, "CD_DEPT_UPPER"	, "");				//상위부서
        			dsUserParam.setColumn(nrow, "YN_SLIPACCEPT"	, "");				//전표발행여부
        			dsUserParam.setColumn(nrow, "CD_CORP"		, cdCorp);			//법인코드
        			dsUserParam.setColumn(nrow, "YN_USE"		, "Y");				//사용여부
        			dsUserParam.setColumn(nrow, "GR_DEPT_ACNT"	, "");				//현장/본사여부
        		break;
        		case "DHX_CFVENDOR":	//거래처코드
        			dsUserParam.setColumn(nrow, "TY_VENDOR" , "X");		//거래처구분
        			dsUserParam.setColumn(nrow, "YN_RELATED", "");		//관계사여부
        		break;
        	}

        	return true;
        }

        this.fnGrid_AfterCDTextChanged = function(id, codeFindData) {
        	var arr = codeFindData;
        	switch(id) {
        		case "DHX_CFACNTUNIT":	//귀속부서

        		break;

        	}
        };

        //그리드 값변경 이벤트
        this.dsList_ColumnChanged = function(obj, e)
        {
        	if(e.columnid == "AM_SUPPLY"){	//공급가
        		var am_supply = nexacro.round(nexacro.toNumber(e.newvalue,0) * 0.1);

        		obj.setColumn(e.row, "AM_VAT", am_supply);
        	}

        	if(e.columnid == "CD_NATION"){	//국가
        		if(e.newvalue == "CU"){
        			obj.setColumn(e.row, "DT_STD_EX", "");
        		}

        		if(!this.gfnIsNull(e.newvalue)){
        			//공통코드에 국가를 찾기
        			var fRow = this.dsCD_NATION.findRow("CD_CODE", e.newvalue);
        			var dsVender = this.dsCD_NATION.getColumn(fRow, "DS_ETC2");

        			obj.setColumn(e.row, "DS_VENDOR", dsVender);
        		}
        	}
        };

        /************************************************************************
         * 기타 이벤트
         ************************************************************************/

        //검색조건 변경 이벤트
        this.dsSearch_Valuechanged = function(obj,e)
        {
        	if(e.oldvalue != e.newvalue) {
        		this.gfnSetFormStatus(this);	// 폼상태 초기화
        		this.gfnGridClear(this.dxGrid);
        	}
        };

        this.fnSetCombo = function() {
        	this.dsCombo = new Dataset();
        	this.dsCombo.addColumn("CD_SYSTEM", "string");
        	this.dsCombo.addColumn("CD_TYPE", "string");

        	this.dsCombo.addRow();
        	this.dsCombo.setColumn(0, "CD_SYSTEM", "DH");
        	this.dsCombo.setColumn(0, "CD_TYPE"  , "A04");

        	var strSvcId    = "combo";
        	var strSvcType  = "select";
        	var inProc		= "_dsProc";
        	var inData      = "combo=dsCombo";
        	var outData     = "dsCD_NATION=combo0";
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


        //엑셀업로드 처리
        this.fnExcelUpload = function (obj,e)
        {
        	if (this.gfnIsNull(this.ccfCD_CORP.form.CDTextBox.value)) {
        		this.gfnAlert("법인코드를 선택하세요.");
        		this.ccfCD_CORP.form.CDTextBox.setFocus();
        		return;
        	}

        	if (this.gfnIsNull(this.ctclDT_STD_EX.value)) {
        		this.gfnAlert("환율기준일을 입력하세요.");
        		this.ctclDT_STD_EX.setFocus();
        		return;
        	}

        	this.gfnExcelImport("dsList", "", "A2", "fnExcelImportCallback", "import", this);

        };


        /*
         *	엑셀업로드 Callback
         */
        this.fnExcelImportCallback = function(sImportId, dsOut, dsSheet) {

        	// 엑셀 양식과 그리드 컬럼이 그대로 일치 하는경우 아래와 같이 처리.
        	// 아닌경우는 이부분 주석처리
        	if (dsOut.rowcount == 0)  {
        		this.gfnAlert("엑셀파일에 내용이 없습니다.");
        		return false;
        	}

        	this.dsList.clearData();

        	for (var i=0; i< this.dsList.getColCount(); i++)
        	{
        		sColumnId = "Column"+i;
        		var sColumnNm = this.gfnGridGetBindColumnNameByIndex(this.dxGrid, i);
        		if (sColumnNm != "" && sColumnId != sColumnNm)
        		{
        			//dsOut.updateColID(sColumnId, sColumnNm);
        		}
        	}


        	// 양식이 일치하고 엑셀내역을 기존데이터에 Insert하지 않고
        	// 엑셀내역 그대로 그리드 반영할 시 copyData
        	//this.dsList.copyData(dsOut);

        	trace("rowcount :: "+dsOut.rowcount);

        	var oDsColCnt = dsOut.getColCount();
        	this.dsList.set_enableevent(false);
        	for (var i=0; i< dsOut.rowcount; i++) {
        		var nrow = this.dsList.addRow();
        		this.dsList.setColumn(nrow, this.ucFlag		, "I");
        		this.dsList.setColumn(nrow, "CD_CORP"		, this.ccfCD_CORP.form.CDTextBox.text);		//법인코드 셋팅
        		this.dsList.setColumn(nrow, "SEQ"			, "");
        		this.dsList.setColumn(nrow, "CD_NATION"		, dsOut.getColumn(i, "Column0"));		//국가
        		this.dsList.setColumn(nrow, "NO_TRADE"		, dsOut.getColumn(i, "Column1"));		//전표번호
        		this.dsList.setColumn(nrow, "DT_ACCOUNT"	, dsOut.getColumn(i, "Column2"));		//회계일자
        		this.dsList.setColumn(nrow, "DS_DEPT_BE"	, dsOut.getColumn(i, "Column3"));		//귀속부서
        		this.dsList.setColumn(nrow, "CD_ACCOUNT"	, dsOut.getColumn(i, "Column4"));		//계정코드
        		this.dsList.setColumn(nrow, "DS_ACCOUNT"	, dsOut.getColumn(i, "Column5"));		//계정코드
        		this.dsList.setColumn(nrow, "AM_DR"			, dsOut.getColumn(i, "Column6"));		//차변(로컬)
        		this.dsList.setColumn(nrow, "AM_CR"			, dsOut.getColumn(i, "Column7"));		//대변(로컬)
        		this.dsList.setColumn(nrow, "AM_DR_EX"		, "");		//차변(원화)
        		this.dsList.setColumn(nrow, "AM_CR_EX"		, "");		//대변(원화)
        		this.dsList.setColumn(nrow, "DS_REM"		, dsOut.getColumn(i, "Column8"));		//적요

        		var dsVender = "";
        		if(this.gfnIsNull(dsOut.getColumn(i, "Column9"))){
        			//공통코드에 국가를 찾기
        			var fRow = this.dsCD_NATION.findRow("CD_CODE", dsOut.getColumn(i, "Column0"));
        			dsVender = this.dsCD_NATION.getColumn(fRow, "DS_ETC2");
        		}else{
        			dsVender = dsOut.getColumn(i, "Column9");
        		}

        		this.dsList.setColumn(nrow, "DS_VENDOR"		, dsVender);		//거래처

        		this.dsList.setColumn(nrow, "NO_REF"		, this.gfnRemoveSpecialChar(this.gfnNvl(dsOut.getColumn(i, "Column10"),"")));		//계좌번호
        		this.dsList.setColumn(nrow, "YN_LAST"		,(i == dsOut.rowcount-1 ? "Y" : "N"));	//마지막 데이터 여부
        		this.dsList.setColumn(nrow, "DT_STD_EX"     ,(dsOut.getColumn(i, "Column0") != 'CU'? this.ctclDT_STD_EX.value:''));	//캄보디아일 경우 환율기준일 담기
        		this.dsList.setColumn(nrow, "YN_EXCEL"		, "Y");		//엑셀여부
        	}
        	this.dsList.set_enableevent(true);

        	//trace("saveXML :: "+this.dsList.saveXML());

        	this.gfnSetFormStatus(this, "I");
        };

        //엑셀다운 처리
        this.fnExcelDown = function (obj,e)
        {
        // 	var fileConfig = this.gfnGetFileConfig();
        //
        // 	fileConfig.downloadUrl = "/file/downloadFile.do";
        // 	var sFilename = this.FormInfo.ID_FORM + ".xls";
        // 	var encodeFileName = encodeURIComponent(sFilename);
        //
        // 	var surl = fileConfig.host+ fileConfig.downloadUrl; // + encodeFileName;
        //
        // 	this.FileDownTransfer00.set_url(surl);
        // 	this.FileDownTransfer00.setPostData("path", "\\DH\\DHA\\EXCEL\\");
        // 	this.FileDownTransfer00.setPostData("fileName", encodeFileName);
        // 	if( system.navigatorname =="nexacro"){
        // 		this.FileDownTransfer00.set_downloadfilename(sFilename);
        // 	}
        // 	this.FileDownTransfer00.download();

        	this.gfnExcelExport(this.divData.form.grdFormat, null, "엑셀전표발행 양식");

        };

        //전표발행 처리
        this.fnIssueSlip = function (obj,e)
        {
        	if (this.gfnIsNull(this.gfnTrim(this.ccfCD_CORP.form.CDTextBox.value))) {
        		this.gfnAlert("법인코드는 필수입니다.");
        		this.ccfCD_CORP.form.CDTextBox.setFocus();
        		return;
        	}

        	if(this.gfnIsNull(this.ctclDT_ACCOUNT_FR.value)){
        		this.gfnAlert("회계일자(시작일)는 필수입니다.");
        		this.ctclDT_ACCOUNT_FR.setFocus();
        		return;
        	}

        	if(this.gfnIsNull(this.ctclDT_ACCOUNT_TO.value)){
        		this.gfnAlert("회계일자(종료일)는 필수입니다.");
        		this.ctclDT_ACCOUNT_TO.setFocus();
        		return;
        	}

        	if(this.gfnGetDiffDate(this.ctclDT_ACCOUNT_FR.value, this.ctclDT_ACCOUNT_TO.value) <= -1){
        		this.gfnAlert("회계일자의 시작일은 종료일보다 작아야 합니다.");
        		this.ctclDT_ACCOUNT_FR.setFocus();
        		return;
        	}

        	this.gfnConfirm("전표발행 하시겠습니까?", "fnIssueSlip_callback");

        };

        this.fnIssueSlip_callback = function(strId, val)
        {
        	if(val == true) {
        		this.dsIssueSlip.clearData();
        		var nRow = this.dsIssueSlip.addRow();

        		//처리할 데이터 담기
        		this.dsIssueSlip.setColumn(nRow, "CD_CORP"		, this.ccfCD_CORP.form.CDTextBox.value);
        		this.dsIssueSlip.setColumn(nRow, "DT_FROM"		, this.ctclDT_ACCOUNT_FR.value);
        		this.dsIssueSlip.setColumn(nRow, "DT_TO"		, this.ctclDT_ACCOUNT_TO.value);
        		this.dsIssueSlip.setColumn(nRow, "CD_NATION" 	, this.gfnNvl(this.ccboCD_NATION.value,""));
        		this.dsIssueSlip.setColumn(nRow, "CD_SITE_BH" 	, this.AuthClient.CD_DEPT);
        		this.dsIssueSlip.setColumn(nRow, "ID_USER" 		, this.AuthClient.ID_USER);

        		var strSvcId    = "issueSlip";
        		var strSvcType  = "save";
        		var inProc		= "_dsProc";
        		var inData      = "issueSlip=dsIssueSlip";
        		var outData     = "";
        		var strArg      = "";
        		var callBackFnc = "fnCallback";

        		this.gfnTransaction( strSvcId , 	// transaction을 구분하기 위한 svc id값
        							strSvcType , 	// transaction을 요청할 구분
        							inProc,			// Procedure 정보 Dataset 이름
        							inData , 		// 입력값으로 보낼 dataset id , a=b형태로 실제이름과 입력이름을 매칭
        							outData , 		// 처리결과값으로 받을 dataset id, a=b형태로 실제이름과 입력이름을 매칭
        							strArg, 		// 입력갑스로 보낼 arguments, strFormData="20120607"
        							callBackFnc); 	// 통신방법 정의 [생략가능]
        	}
        };

        //전표취소 처리
        this.fnCancelSlip = function (obj,e)
        {
        	if (this.gfnIsNull(this.gfnTrim(this.ccfCD_CORP.form.CDTextBox.value))) {
        		this.gfnAlert("법인코드는 필수입니다.");
        		this.ccfCD_CORP.form.CDTextBox.setFocus();
        		return;
        	}

        	if(this.gfnIsNull(this.ctclDT_ACCOUNT_FR.value)){
        		this.gfnAlert("회계일자(시작일)는 필수입니다.");
        		this.ctclDT_ACCOUNT_FR.setFocus();
        		return;
        	}

        	if(this.gfnIsNull(this.ctclDT_ACCOUNT_TO.value)){
        		this.gfnAlert("회계일자(종료일)는 필수입니다.");
        		this.ctclDT_ACCOUNT_TO.setFocus();
        		return;
        	}

        	if(this.gfnGetDiffDate(this.ctclDT_ACCOUNT_FR.value, this.ctclDT_ACCOUNT_TO.value) <= -1){
        		this.gfnAlert("회계일자의 시작일은 종료일보다 작아야 합니다.");
        		this.ctclDT_ACCOUNT_FR.setFocus();
        		return;
        	}

        	var chkCount = 0;
        	for (var i = 0; i < this.dsList.rowcount; i++) {
        		if (this.dsList.getColumn(i, "CHK") == 1) chkCount ++;
        	}


        	if( chkCount !== 1){
        		this.gfnAlert("전표취소는 전표번호 하나씩 선택하여 취소하시기 바랍니다");
        		return;
        	}

        	this.gfnConfirm("전표를 취소하시겠습니까?", "fnCancelSlip_callback");

        };

        this.fnCancelSlip_callback = function(strId, val)
        {
        	if(val == true) {
        		this.dsCancelSlip.clearData();
        		var nRow = this.dsCancelSlip.addRow();

        		var seq ;
        		for (var i = 0; i < this.dsList.rowcount; i++) {
        			if (this.dsList.getColumn(i, "CHK") == 1) {
        				seq = this.dsList.getColumn(i, "SEQ") ;
        				break;
        			}
        		}

        		//처리할 데이터 담기
        		this.dsCancelSlip.setColumn(nRow, "CD_CORP"		, this.ccfCD_CORP.form.CDTextBox.value);
        		this.dsCancelSlip.setColumn(nRow, "DT_FROM"		, this.ctclDT_ACCOUNT_FR.value);
        		this.dsCancelSlip.setColumn(nRow, "DT_TO"		, this.ctclDT_ACCOUNT_TO.value);
        		this.dsCancelSlip.setColumn(nRow, "CD_NATION" 	, this.gfnNvl(this.ccboCD_NATION.value,""));
        		this.dsCancelSlip.setColumn(nRow, "SEQ" 	, seq);

        		var strSvcId    = "cancelSlip";
        		var strSvcType  = "save";
        		var inProc		= "_dsProc";
        		var inData      = "cancelSlip=dsCancelSlip";
        		var outData     = "";
        		var strArg      = "";
        		var callBackFnc = "fnCallback";

        		this.gfnTransaction( strSvcId , 	// transaction을 구분하기 위한 svc id값
        							strSvcType , 	// transaction을 요청할 구분
        							inProc,			// Procedure 정보 Dataset 이름
        							inData , 		// 입력값으로 보낼 dataset id , a=b형태로 실제이름과 입력이름을 매칭
        							outData , 		// 처리결과값으로 받을 dataset id, a=b형태로 실제이름과 입력이름을 매칭
        							strArg, 		// 입력갑스로 보낼 arguments, strFormData="20120607"
        							callBackFnc); 	// 통신방법 정의 [생략가능]
        	}
        };

        //전표 조회
        this.fnSearchSlip = function (obj,e)
        {
        	if (this.gfnIsNull(this.gfnAllTrim(this.dsList.getColumn(this.dsList.rowposition, "CD_TRADE")))) {
        		this.gfnAlert("전표번호는 필수입니다.");
        		return;
        	}

        	var param = {};
        	param.IUD_FLAG = "S";
        	param.CD_TRADE = this.gfnAllTrim(this.dsList.getColumn(this.dsList.rowposition, "CD_TRADE"));
        	this.gfnFormOpen(this.FormInfo.CD_MODULE, "DHA_ISSUESLIP", "fnPopupCallBack", param, this.getOffsetWidth(), this.getOffsetHeight());

        };

        this.fnValidate = function ()
        {
        	var headText = this.dxGrid.getCellProperty("head", this.dxGrid.getBindCellIndex("body", "DT_STD_EX"), "text");
        	for(var i=0;i<this.dsList.rowcount;i++){
        		if(this.dsList.getColumn(i, this.ucFlag) == "I" && this.dsList.getColumn(i, "CD_NATION") != "CU"){
        			if(this.gfnIsNull(this.dsList.getColumn(i, "DT_STD_EX"))){
        				this.gfnAlert((i+1)+"행: ["+headText+"] 필수입력값입니다.");
        				return false;
        			}
        		}
        	}

        	return true;
        };

        //환율기준일을 변경할 경우
        this.divSearch_ctclDT_STD_EX_onchanged = function(obj,e)
        {
        	if(this.dsList.rowcount > 0){
        		var fRow = this.dsList.findRowExprNF("dataset.parent.gfnIsNull(CD_TRADE) && CD_NATION != 'CU' && "+this.ucFlag+" != '#'");

        		//전표발행이 안되고 국가 구분이 CU가 아닌경우
        		if(fRow > -1){
        			this.gfnConfirm("전체 데이터의 환율을 변경 하시겠습니까?", "fnDtStdExAllChange_callback");
        		}
        	}
        };

        this.fnDtStdExAllChange_callback = function(strId, val)
        {
        	if(val == true) {
        		for(var i =0;i<this.dsList.getRowCountNF();i++){
        			var flag = this.dsList.getColumnNF(i, this.ucFlag);
        			if(this.gfnIsNull(this.dsList.getColumnNF(i, "CD_TRADE")) && this.dsList.getColumnNF(i, "CD_NATION") != "CU" && this.dsList.getColumnNF(i, this.ucFlag) != "#"){
        				this.dsList.setColumnNF(i, this.ucFlag, (flag == "I" ? "I" : "U"));
        				this.dsList.setColumnNF(i, "DT_STD_EX", this.ctclDT_STD_EX.value);
        			}
        		}
        		this.gfnSetFormStatus(this, "U");
        	}
        };
        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.form_onload,this);
            this.divSearch.form.ctclDT_STD_EX.addEventHandler("onchanged",this.divSearch_ctclDT_STD_EX_onchanged,this);
        };
        this.loadIncludeScript("DHA_EXCEL_SLIP.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
