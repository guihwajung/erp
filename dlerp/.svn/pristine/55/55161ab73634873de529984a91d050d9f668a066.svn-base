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
            obj._setContents("<ColumnInfo><Column id=\"name\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("_dsProc", this);
            obj._setContents("<ColumnInfo><Column id=\"TARGET\" type=\"STRING\" size=\"256\"/><Column id=\"SP\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsSearch", this);
            obj._setContents("");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsParam", this);
            obj._setContents("<ColumnInfo><Column id=\"size\" type=\"STRING\" size=\"256\"/><Column id=\"page\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsVariables", this);
            obj._setContents("<ColumnInfo><Column id=\"COLUMN\" type=\"STRING\" size=\"256\"/><Column id=\"VALUE\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsResult", this);
            obj._setContents("<ColumnInfo><Column id=\"name\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Div("divSearch","0","0",null,"46","0",null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_cssclass("div_SEARCH_Bg");
            obj.set_text("");
            this.addChild(obj.name, obj);

            obj = new Static("staCD_SYSTEM","0","10","120","26",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("1");
            obj.set_text("COMMAND");
            obj.set_cssclass("sta_WF_SchLabelE");
            this.divSearch.addChild(obj.name, obj);

            obj = new Combo("cboCommand","staCD_SYSTEM:0","10","213","26",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("1");
            obj.set_codecolumn("codecolumn");
            obj.set_datacolumn("datacolumn");
            var divSearch_form_cboCommand_innerdataset = new nexacro.NormalDataset("divSearch_form_cboCommand_innerdataset", obj);
            divSearch_form_cboCommand_innerdataset._setContents("<ColumnInfo><Column id=\"codecolumn\" size=\"256\"/><Column id=\"datacolumn\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"codecolumn\">/dooray/mail-domains</Col><Col id=\"datacolumn\">도메인목록</Col></Row><Row><Col id=\"codecolumn\">/dooray/organizations</Col><Col id=\"datacolumn\">법인 목록</Col></Row><Row><Col id=\"codecolumn\">/dooray/members/list</Col><Col id=\"datacolumn\">멤버목록</Col></Row><Row><Col id=\"codecolumn\">/dooray/departments/list</Col><Col id=\"datacolumn\">부서 목록</Col></Row><Row><Col id=\"codecolumn\">/dooray/job-positions</Col><Col id=\"datacolumn\">조직에서 사용하는 직책 목록</Col></Row><Row><Col id=\"codecolumn\">/dooray/job-ranks</Col><Col id=\"datacolumn\">조직에서 사용하는 직위 목록</Col></Row></Rows>");
            obj.set_innerdataset(divSearch_form_cboCommand_innerdataset);
            obj.set_text("도메인목록");
            obj.set_value("/get/admin/v1/mail-domains");
            obj.set_index("0");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("staUSE_YN","cboCommand:0","10","92","24",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("2");
            obj.set_text("size");
            obj.set_textDecoration("none");
            obj.set_cssclass("sta_WF_SchLabel");
            this.divSearch.addChild(obj.name, obj);

            obj = new Combo("ccboSIZE","staUSE_YN:0","10","80","24",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("3");
            obj.set_codecolumn("codecolumn");
            obj.set_datacolumn("datacolumn");
            var divSearch_form_ccboSIZE_innerdataset = new nexacro.NormalDataset("divSearch_form_ccboSIZE_innerdataset", obj);
            divSearch_form_ccboSIZE_innerdataset._setContents("<ColumnInfo><Column id=\"codecolumn\" size=\"256\"/><Column id=\"datacolumn\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"codecolumn\">20</Col><Col id=\"datacolumn\">20</Col></Row><Row><Col id=\"codecolumn\">50</Col><Col id=\"datacolumn\">50</Col></Row><Row><Col id=\"codecolumn\">100</Col><Col id=\"datacolumn\">100</Col></Row><Row><Col id=\"codecolumn\">500</Col><Col id=\"datacolumn\">500</Col></Row><Row><Col id=\"codecolumn\">1000</Col><Col id=\"datacolumn\">1000</Col></Row></Rows>");
            obj.set_innerdataset(divSearch_form_ccboSIZE_innerdataset);
            obj.set_text("20");
            obj.set_value("20");
            obj.set_index("0");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("sta00","ccboSIZE:0","10","92","24",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("4");
            obj.set_text("page");
            obj.set_textDecoration("none");
            obj.set_cssclass("sta_WF_SchLabel");
            this.divSearch.addChild(obj.name, obj);

            obj = new Edit("ctxtPAGE","sta00:0","10","73","24",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("5");
            obj.set_readonly("false");
            obj.set_maxlength("50");
            this.divSearch.addChild(obj.name, obj);

            obj = new Div("divData","0","divSearch:0",null,null,"0","0",null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_cssclass("div_DATA_Bg");
            obj.set_text("");
            this.addChild(obj.name, obj);

            obj = new Static("sta00_01","0","0",null,"30","0",null,null,null,null,null,this.divData.form);
            obj.set_taborder("1");
            obj.set_text("Result");
            obj.set_cssclass("sta_TITLE_Bg2");
            this.divData.addChild(obj.name, obj);

            obj = new Grid("objGrid","0","sta00_01:0",null,null,"0","0",null,null,null,null,this.divData.form);
            obj.set_taborder("0");
            obj.set_autosizingtype("col");
            obj.set_binddataset("dsList");
            obj.set_selecttype("area");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"48\"/></Columns><Rows><Row size=\"32\" band=\"head\"/><Row size=\"32\"/></Rows><Band id=\"head\"><Cell/></Band><Band id=\"body\"><Cell text=\"bind:name\"/></Band></Format></Formats>");
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
        this.registerScript("DZZ_SAP.xfdl", function() {
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

        //	this.FormBtns.Select.click();
        };

        /************************************************************************
         * 버튼 설정
         * 서브버튼 사용 처리. 공통 및 확장버튼 버튼관리화면에서 셋팅.
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
        	this.dxGrid = this.divData.form.objGrid;
        };

        /************************************************************************
         * 이벤트 설정
         ************************************************************************/
        this.fnSetEvent = function() {

        };

        /************************************************************************
         * 파라미터 설정
         ************************************************************************/
        this.fnSetParameter = function() {

        }

        /************************************************************************
         * 컨트롤 이벤트
         ************************************************************************/
         /*
          *	조회 버튼
          */
        this.fnSelect = function() {
        	if (!this.fnSelectValidate()) return false;

        	this.dsParam.clearData();

        	var nRow = this.dsParam.addRow();
        	this.dsParam.setColumn(nRow, 'size', this.divSearch.form.ccboSIZE.value);
        	this.dsParam.setColumn(nRow, 'page', this.gfnNvl(this.divSearch.form.ctxtPAGE.value, 0));

        	var strSvcId    = "select";
        	var strSvcType  = this.divSearch.form.cboCommand.value;
        	var inProc		= "";
        	var inData      = "dsParam=dsParam";
        	var outData     = "dsResult=result";
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
        this.fnAdd = function(obj,e) {
        	this.gfnGridAdd(this.divData.form.objGrid)
        };

        /*
         *	삭제 버튼
         */
        this.fnDel = function(obj,e) {

        };

        /*
         *	저장 버튼
         */
        this.fnSave = function() {
        }

        /*
         *	엑셀 버튼
         */
        this.fnExcel = function() {
        	this.gfnExcelExport(this.dxGrid,  'sheet1', this.divSearch.form.cboCommand.text);
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
        	if(errorCode != 0) {
        		this.gfnAlert(errorMsg);
        		return;
        	}

        	if (svcID == "select")
        	{
        		this.fnSetGrid();
        		this.dsList.copyData(this.dsResult);
        	}
        }



        /************************************************************************
         * 코드파인드 이벤트
         ************************************************************************/

        /************************************************************************
         * 그리드 이벤트
         ************************************************************************/

        /************************************************************************
         * 기타 이벤트
         ************************************************************************/

        this.fnSetGrid = function()
        {
        	var gridName = 'objGrid';

        	if (this.dxGrid != null)
        	{
        		this.divData.form.removeChild(gridName);
        		this.dxGrid.destroy();
        	}

        	this.dxGrid = new Grid(gridName, 0, 'sta00_01:0', null, null, 0, 0);

        	this.dxGrid.set_autoupdatetype("itemselect")
        	this.dxGrid.set_selecttype("multiarea");
        	this.dxGrid.set_cellsizingtype("col");
        	this.dxGrid.set_cellmovingtype("none"); //col
        	this.dxGrid.set_treeusecheckbox(false);
        	this.dxGrid.set_binddataset(this.dsList);

        	var nRow = this.dxGrid.appendContentsRow("head");
        	this.dxGrid.appendContentsRow("body");

        	// 컬럼
        	var start_col = 0;
        	for (var i = 0; i < this.dsResult.colcount; i++) {
        		var cd_field = this.dsResult.getColID(i);
        		var ds_field = this.dsResult.getColID(i);;

        		var sz_width = 100;
        		var ty_align = "left"

        		var nCol = 0;
        		if (i > 0) {
        			nCol = this.dxGrid.appendContentsCol();
        		}

        		var displaytype = "text";
        		var edittype = "text";
        		this.dxGrid.setCellProperty("head", nCol, "displaytype", displaytype);
        		this.dxGrid.setCellProperty("head", nCol, "edittype", edittype);

        		this.dxGrid.setCellProperty("head", nCol, "text", ds_field);
        		this.dxGrid.setFormatColProperty(nCol, "size", sz_width);
        		this.dxGrid.setCellProperty("body", nCol, "text", "bind:" + cd_field);
        		this.dxGrid.setCellProperty("body", nCol, "textAlign", ty_align);

        		this.dxGrid.setCellProperty("body", nCol, "displaytype", displaytype);
        		this.dxGrid.setCellProperty("body", nCol, "edittype", edittype);
        	}

        	this.divData.form.addChild(gridName, this.dxGrid);

        	this.dxGrid.show();
        };
        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.form_onload,this);
            this.divData.form.sta00_01.addEventHandler("onclick",this.divData_sta00_onclick,this);
        };
        this.loadIncludeScript("DZZ_SAP.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
