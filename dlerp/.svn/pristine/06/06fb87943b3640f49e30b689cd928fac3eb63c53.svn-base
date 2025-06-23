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
            this.set_titletext("공사원가명세서");
            if (Form == this.constructor)
            {
                this._setFormPosition(1280,720);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("dsList", this);
            obj._setContents("");
            this.addChild(obj.name, obj);


            obj = new Dataset("_dsProc", this);
            obj._setContents("<ColumnInfo><Column id=\"TARGET\" type=\"STRING\" size=\"256\"/><Column id=\"SP\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"TARGET\">select</Col><Col id=\"SP\">DHFPR_SC_SELECT</Col></Row><Row><Col id=\"TARGET\">update</Col><Col id=\"SP\">DHFPR_SC_UPDATE</Col></Row><Row><Col id=\"TARGET\">d_update</Col><Col id=\"SP\">DHFPR_SC_COMMON_UPDATE</Col></Row><Row><Col id=\"TARGET\">d_select</Col><Col id=\"SP\">DHFPR_SC_SELECT</Col></Row><Row><Col id=\"TARGET\">selectYmMagam</Col><Col id=\"SP\">DHXPR_ACNTUNIT</Col></Row><Row><Col id=\"TARGET\">combo</Col><Col id=\"SP\">DZXPR_COMBO_SELECT </Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsListSub", this);
            obj._setContents("");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsYN_FLAG", this);
            obj._setContents("<ColumnInfo><Column id=\"CODE\" type=\"STRING\" size=\"256\"/><Column id=\"VALUE\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"VALUE\">전체</Col></Row><Row><Col id=\"CODE\">SC00000</Col><Col id=\"VALUE\">용역원가</Col></Row><Row><Col id=\"CODE\">SC00001</Col><Col id=\"VALUE\">국내공사원가</Col></Row><Row><Col id=\"CODE\">SC00002</Col><Col id=\"VALUE\">해외공사원가</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsSearch", this);
            obj._setContents("<ColumnInfo><Column id=\"CD_CORP\" type=\"STRING\" size=\"256\"/><Column id=\"DS_CORP\" type=\"STRING\" size=\"256\"/><Column id=\"CD_DEPT_ACNT\" type=\"STRING\" size=\"256\"/><Column id=\"DS_DEPT_ACNT\" type=\"STRING\" size=\"256\"/><Column id=\"YM_MAGAM\" type=\"STRING\" size=\"256\"/><Column id=\"YM_MAGAM2\" type=\"STRING\" size=\"256\"/><Column id=\"TY_CLOSE\" type=\"STRING\" size=\"256\"/><Column id=\"TY_WONGA\" type=\"STRING\" size=\"256\"/><Column id=\"YN_CORE\" type=\"STRING\" size=\"256\"/><Column id=\"TY_PRINT\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row/></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsYmMagam", this);
            obj._setContents("");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsYN_CORE", this);
            obj._setContents("<ColumnInfo><Column id=\"CD_CODE\" type=\"STRING\" size=\"256\"/><Column id=\"DS_CODE\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"CD_CODE\">N</Col><Col id=\"DS_CODE\">상세</Col></Row><Row><Col id=\"CD_CODE\">Y</Col><Col id=\"DS_CODE\">요약</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsTY_PRINT", this);
            obj._setContents("<ColumnInfo><Column id=\"CD_CODE\" type=\"STRING\" size=\"256\"/><Column id=\"DS_CODE\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Div("divSearch","0","10.0",null,"78","0",null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_cssclass("div_SEARCH_Bg");
            obj.set_formscrolltype("none");
            obj.set_text("");
            this.addChild(obj.name, obj);

            obj = new Static("staCD_CORP","0.0","10.0","92.0","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("3");
            obj.set_text("법인코드");
            obj.set_cssclass("sta_WF_SchLabelE");
            this.divSearch.addChild(obj.name, obj);

            obj = new Div("ccfCD_CORP","staCD_CORP:0.0","10.0","250","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.getSetter("CodeFindName").set("DHX_CFCORP");
            obj.getSetter("CDTextWidth").set("50");
            obj.set_taborder("0");
            obj.set_url("cmm::cmmCodeFind.xfdl");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("staCD_DEPT","ccfCD_CORP:0.0","10.0","92.0","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("2");
            obj.set_text("귀속부서");
            obj.set_cssclass("sta_WF_SchLabelE");
            this.divSearch.addChild(obj.name, obj);

            obj = new Div("ccfCD_DEPT","staCD_DEPT:0.0","10.0","220","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.getSetter("CDTextWidth").set("60");
            obj.set_taborder("1");
            obj.set_url("cmm::cmmCodeFind.xfdl");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("staYN_CORE","ccfCD_DEPT:0.0","10","92.0","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("9");
            obj.set_text("사용구분");
            obj.set_cssclass("sta_WF_SchLabelE");
            this.divSearch.addChild(obj.name, obj);

            obj = new Combo("ccboYN_CORE","staYN_CORE:0.0","10","70","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("4");
            obj.set_innerdataset("dsYN_CORE");
            obj.set_datacolumn("DS_CODE");
            obj.set_codecolumn("CD_CODE");
            obj.set_value("");
            obj.set_index("0");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("staYM_WORK","0","staCD_CORP:10.0","92","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("7");
            obj.set_text("당기");
            obj.set_textAlign("center");
            obj.set_cssclass("sta_WF_SchLabelE");
            this.divSearch.addChild(obj.name, obj);

            obj = new Div("ctclYM_WORK","staYM_WORK:0.0","staCD_CORP:10.0","90","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("5");
            obj.set_url("cmm::cmmCalMM.xfdl");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("sta01","ctclYM_WORK:0.0","staCD_CORP:10.0","66","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("8");
            obj.set_text("전기");
            obj.set_textAlign("center");
            obj.set_cssclass("sta_WF_SchLabel");
            this.divSearch.addChild(obj.name, obj);

            obj = new Div("ctclYM_WORK00","sta01:0.0","staCD_CORP:10.0","90","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("6");
            obj.set_url("cmm::cmmCalMM.xfdl");
            obj.set_visible("true");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("sta02","ctclYM_WORK00:4","staCD_CORP:10","92.0","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("10");
            obj.set_text("원가구분");
            obj.set_textAlign("center");
            obj.set_cssclass("sta_WF_SchLabelE");
            this.divSearch.addChild(obj.name, obj);

            obj = new Combo("ccboTY_WONGA","sta02:0","staCD_CORP:10","80","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("9");
            obj.set_innerdataset("dsYN_FLAG");
            obj.set_datacolumn("VALUE");
            obj.set_codecolumn("CODE");
            obj.set_text("");
            obj.set_value("0");
            obj.set_index("0");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("staCD_SYSTEM00_00","653","44","92.0","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("12");
            obj.set_text("출력구분");
            obj.set_cssclass("sta_WF_SchLabelE");
            this.divSearch.addChild(obj.name, obj);

            obj = new Combo("ccboTY_PRINT","746","44","70","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("13");
            obj.set_innerdataset("dsTY_PRINT");
            obj.set_datacolumn("DS_CODE");
            obj.set_codecolumn("CD_CODE");
            obj.set_text("한글");
            obj.set_value("KOR");
            obj.set_index("0");
            this.divSearch.addChild(obj.name, obj);

            obj = new Div("divData","0","divSearch:10",null,null,"0","0",null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_cssclass("div_DATA_Bg");
            this.addChild(obj.name, obj);

            obj = new Grid("objGrid","0","0",null,null,"0","0",null,null,null,null,this.divData.form);
            obj.set_taborder("0");
            obj._setContents("");
            this.divData.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this
            obj = new Layout("default","",this._adjust_width,this._adjust_height,this,function(p){});
            this.addLayout(obj.name, obj);
            
            // BindItem Information
            obj = new BindItem("item0","divSearch.form.ccfCD_CORP.form.CDTextBox","value","dsSearch","CD_CORP");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item1","divSearch.form.ccfCD_CORP.form.DSTextBox","value","dsSearch","DS_CORP");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item2","divSearch.form.ccfCD_DEPT.form.CDTextBox","value","dsSearch","CD_DEPT_ACNT");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item3","divSearch.form.ccfCD_DEPT.form.DSTextBox","value","dsSearch","DS_DEPT_ACNT");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item4","divSearch.form.ctclYM_WORK.form.TextBox","value","dsSearch","YM_MAGAM");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item5","divSearch.form.ctclYM_WORK00.form.TextBox","value","dsSearch","YM_MAGAM2");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item6","divSearch.form.ccboTY_WONGA","value","dsSearch","TY_WONGA");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item7","divSearch.form.ccboYN_CORE","value","dsSearch","YN_CORE");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item8","divSearch.form.ccboTY_PRINT","value","dsSearch","TY_PRINT");
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
        this.registerScript("DHF_SC.xfdl", function() {
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

        	// 회계년월 셋팅
        	//this.fnGetYmMagam();
        	var sYmMagam = this.AuthClient.YM_MAGAM_MONTH1;
        	var sYmMagam2 = this.gfnAddMonth(sYmMagam+"01",-12).substr(0,6);
        	this.dsSearch.setColumn(0, "YM_MAGAM", sYmMagam);
        	this.dsSearch.setColumn(0, "YM_MAGAM2", sYmMagam2);

        	this.dsSearch.setColumn(0, "YN_CORE", "N");

        	this.dsSearch.setColumn(0, "CD_DEPT_ACNT", this.AuthClient.LEVCD_DEPT_UPPER);
        	this.ccfCD_DEPT.form.fnCodeFindLoad();
        };

        /************************************************************************
         * 버튼 설정 : 화면(Tab) 전환시 마다 호출
         ************************************************************************/
        this.fnSetButton = function() {
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

        	this.dxGrid = this.divData.form.objGrid;

        	this.ccfCD_CORP = this.divSearch.form.ccfCD_CORP;
        	this.ccfCD_DEPT = this.divSearch.form.ccfCD_DEPT;
        	this.ctclYM_WORK = this.divSearch.form.ctclYM_WORK;
        	this.ctclYM_WORK00 = this.divSearch.form.ctclYM_WORK00;
        	this.ccboTY_WONGA = this.divSearch.form.ccboTY_WONGA;
        };

        /************************************************************************
         * 이벤트 설정
         ************************************************************************/
        this.fnSetEvent = function() {
        	this.gfnGridInit(this.dxGrid, this.dsList, "DH", "DHF_SC");
        	this.dxGrid.sort = "false";


        	var nCellIdxAM_CURRENT1_C = this.dxGrid.getBindCellIndex("body", "AM_CURRENT1_C");
        	var nCellIdxAM_CURRENT2_C = this.dxGrid.getBindCellIndex("body", "AM_CURRENT2_C");
        	var nCellIdxAM_CURRENT1_B = this.dxGrid.getBindCellIndex("body", "AM_CURRENT1_B");
        	var nCellIdxAM_CURRENT2_B = this.dxGrid.getBindCellIndex("body", "AM_CURRENT2_B");

        	var sGetProperty = this.dxGrid.getCellProperty( "body", nCellIdxAM_CURRENT1_C, "cssclass" );

        	var sSetPropertyAM_CURRENT1_C = sGetProperty.replace(": '')", ": AM_CURRENT1_C < 0 ? 'Red' : ' ')");
        	var sSetPropertyAM_CURRENT2_C = sGetProperty.replace(": '')", ": AM_CURRENT2_C < 0 ? 'Red' : ' ')");
        	var sSetPropertyAM_CURRENT1_B = sGetProperty.replace(": '')", ": AM_CURRENT1_B < 0 ? 'Red' : ' ')");
        	var sSetPropertyAM_CURRENT2_B = sGetProperty.replace(": '')", ": AM_CURRENT2_B < 0 ? 'Red' : ' ')");

        	this.dxGrid.setCellProperty( "body", nCellIdxAM_CURRENT1_C, "cssclass" , sSetPropertyAM_CURRENT1_C);
        	this.dxGrid.setCellProperty( "body", nCellIdxAM_CURRENT2_C, "cssclass" , sSetPropertyAM_CURRENT2_C);
        	this.dxGrid.setCellProperty( "body", nCellIdxAM_CURRENT1_B, "cssclass" , sSetPropertyAM_CURRENT1_B);
        	this.dxGrid.setCellProperty( "body", nCellIdxAM_CURRENT2_B, "cssclass" , sSetPropertyAM_CURRENT2_B);

        	this.ccfCD_CORP.BeforeUserDataSetParam = "fnBeforeUserDataSetParam";
        	this.ccfCD_CORP.AfterCDTextChanged = "fnAfterCDTextChanged";

        	this.ccfCD_DEPT.CodeFindName = "DHX_CFACNTUNIT";	// DHX_CFBALANCE_ACNTUNIT
        	this.ccfCD_DEPT.BeforeUserDataSetParam = "fnBeforeUserDataSetParam";

        	this.dsSearch.setColumn(0, "CD_CORP", this.AuthClient.CD_CORP);
        	this.dsSearch.setColumn(0, "DS_CORP", this.AuthClient.DS_CORP);
        	this.ccboTY_WONGA.set_index(0);
        	/*
        	if (this.FormInfo.ID_GROUP  == "M"){
        		this.dsSearch.setColumn(0, "CD_DEPT_ACNT", this.AuthClient.CD_CORP);
        	}else{
        		this.dsSearch.setColumn(0, "CD_DEPT_ACNT", this.UserInfo.LEVCD_DEPT_ACNT_DOWN);
        	}
        	if (!this.gfnIsNull(this.dsSearch.getColumn(0, "CD_DEPT_ACNT"))){
        		this.ccfCD_DEPT.form.fnCodeFindLoad();
          	}
         	if (nexacro.toNumber(this.FormInfo.GR_SEARCH) > 1) {
         		this.ccfCD_CORP.set_enable(false);
         	}
        	this.ccfCD_CORP.form.CDTextBox.setFocus();
        	*/

        }

        /************************************************************************
         * 파라미터 설정
         ************************************************************************/
        this.fnSetParameter = function() {

        	this.dsSelect = new Dataset();
        	this.dsSelect.addColumn("CD_CORP" , "string");
        	this.dsSelect.addColumn("YM_C"    , "string");
        	this.dsSelect.addColumn("YM_B"    , "string");
        	this.dsSelect.addColumn("YN_CHECK", "string");
        	this.dsSelect.addColumn("CD_DEPT_ACNT", "string");
        	this.dsSelect.addColumn("TY_CLOSE", "string");

        	this.dsUpdate = new Dataset();
        	this.dsUpdate.addColumn("CD_CORP", "string");
        	this.dsUpdate.addColumn("CD_DEPT_ACNT", "string");
        	this.dsUpdate.addColumn("YM_MAGAM", "string");
        	this.dsUpdate.addColumn("CD_SC", "string");
        	this.dsUpdate.addColumn("DS_PRINT", "string");
        	this.dsUpdate.addColumn("TY_CLOSE", "string");
        	this.dsUpdate.addColumn("ID_TRANS", "string");

        	this.dsSelectYmMagam = new Dataset();
        	this.dsSelectYmMagam.addColumn("TY_GUBUN", "string");
        	this.dsSelectYmMagam.addColumn("CN_ROW", "string");
        	this.dsSelectYmMagam.addColumn("VALUE", "string");
        	this.dsSelectYmMagam.addColumn("MIN_VALUE", "string");
        	this.dsSelectYmMagam.addColumn("YN_SLIPACCEPT", "string");
        	this.dsSelectYmMagam.addColumn("CD_CORP", "string");
        	this.dsSelectYmMagam.addColumn("YN_USE", "string");
        	this.dsSelectYmMagam.addColumn("GR_DEPT_ACNT", "string");
        	this.dsSelectYmMagam.addColumn("ID_USER", "string");
        	this.dsSelectYmMagam.addColumn("GR_SEARCH", "string");
        	this.dsSelectYmMagam.addColumn("CD_DEPT", "string");
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
        	this.dsSelect.setColumn(0, "CD_CORP", this.dsSearch.getColumn(0, "CD_CORP"));
        	this.dsSelect.setColumn(0, "YM_C", this.dsSearch.getColumn(0, "YM_MAGAM"));
        	this.dsSelect.setColumn(0, "YM_B", this.dsSearch.getColumn(0, "YM_MAGAM2"));
        	this.dsSelect.setColumn(0, "YN_CHECK", this.dsSearch.getColumn(0, "YN_CORE"));
        	this.dsSelect.setColumn(0, "CD_DEPT_ACNT", this.dsSearch.getColumn(0, "CD_DEPT_ACNT"));
        	this.dsSelect.setColumn(0, "TY_CLOSE", this.dsSearch.getColumn(0, "TY_WONGA"))

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

        }

        /*
         *	삭제 버튼
         */
        this.fnDel = function() {

        }

        /*
         *	저장 버튼
         */
        this.fnSave = function() {
        	if (!this.gfnGridValidate(this.dxGrid)) return;

        	this.dxGrid.updateToDataset();
        	this.dxGridSub.updateToDataset();
         	this.dsUpdate.clearData();
        	this.dsUpdateSub.clearData();

        	for (var i = 0; i < this.dsList.rowcount; i++) {
        		var flag = this.gfnGetFlag(this.dsList, i);
        		switch(flag) {
        			case "I":
        			case "D":
        			case "U":
        				var nrow = this.dsUpdate.addRow();
        				this.dsUpdate.setColumn(nrow, "CD_CORP", this.dsSearch.getColumn(0, "CD_CORP"));
        				this.dsUpdate.setColumn(nrow, "CD_DEPT_ACNT", this.dsSearch.getColumn(0, "CD_DEPT_ACNT"));
        				this.dsUpdate.setColumn(nrow, "YM_MAGAM", this.dsSearch.getColumn(0, "YM_MAGAM"));
        				this.dsUpdate.setColumn(nrow, "CD_SC", this.dsList.getColumn(i, "CD_SC"));
        				this.dsUpdate.setColumn(nrow, "DS_PRINT", this.dsList.getColumn(i, "DS_PRINT"));
        				this.dsUpdate.setColumn(nrow, "ID_TRANS", this.AuthClient.ID_USER);
        				break;
        		}
        	}
        	for (var i = 0; i < this.dsListSub.rowcount; i++) {
        		var flag = this.gfnGetFlag(this.dsListSub, i);
        		switch(flag) {
        			case "I":
        			case "D":
        			case "U":
        				var nrow = this.dsUpdate.addRow();
        				this.dsUpdate.setColumn(nrow, "CD_CORP", this.dsSearch.getColumn(0, "CD_CORP"));
        				this.dsUpdate.setColumn(nrow, "CD_DEPT_ACNT", this.dsSearch.getColumn(0, "CD_DEPT_ACNT"));
        				this.dsUpdate.setColumn(nrow, "YM_MAGAM", this.dsSearch.getColumn(0, "YM_MAGAM2"));
        				this.dsUpdate.setColumn(nrow, "CD_SC", this.dsListSub.getColumn(i, "CD_SC"));
        				this.dsUpdate.setColumn(nrow, "DS_PRINT", this.dsListSub.getColumn(i, "DS_PRINT"));
        				this.dsUpdate.setColumn(nrow, "TY_CLOSE", "SC00002");
        				this.dsUpdate.setColumn(nrow, "ID_TRANS", this.AuthClient.ID_USER);
        				break;
        		}
        	}
        	if (this.dsUpdate.rowcount == 0) return;
        	var strSvcId    = "save";
        	var strSvcType  = "save";
        	var inProc		= "_dsProc";
        	if(this.dsSearch.getColumn(0, "TY_WONGA") == "SC00002"){
        		var inData      = "d_update=dsUpdate";
        	}else{
        		var inData      = "update=dsUpdate";
        	}
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

        	this.dsReportParam = new Dataset();
        	this.dsReportParam.addColumn("DS_CORP", "string");
        	this.dsReportParam.addColumn("YM_C", "string");
        	this.dsReportParam.addColumn("YM_B", "string");

        	this.dsReportParam.clearData();
        	this.dsReportParam.addRow();

        	this.dsReportParam.setColumn(0, "DS_CORP", "회계단위 : "+this.ccfCD_CORP.form.CDTextBox.value + " " + this.ccfCD_CORP.form.DSTextBox.value);
        	var sYmFrom = this.gfnGetLastDate(this.dsSearch.getColumn(0, "YM_MAGAM")+"01");
        	this.dsReportParam.setColumn(0, "YM_C", "제 "+this.gfnNvl(this.dsList.getColumn(0,"GI1"),"0")+"기 당기 : " + sYmFrom.substr(0,4) + "년 01월 01일부터 " + sYmFrom.substr(0,4) + "년 " + sYmFrom.substr(4,2)+"월 " + sYmFrom.substr(6,2) +"일" );

        	var sYmTo = this.gfnGetLastDate(this.dsSearch.getColumn(0, "YM_MAGAM2")+"01");
        	this.dsReportParam.setColumn(0, "YM_B", "제 "+this.gfnNvl(this.dsList.getColumn(0,"GI2"),"0")+"기 전기 : " + sYmTo.substr(0,4) + "년 01월 01일부터 " + sYmTo.substr(0,4) + "년 " + sYmTo.substr(4,2)+"월 " + sYmTo.substr(6,2) +"일" );

        	if (!this.fnSelectValidate()) return false;

        	this.dsSelect.clearData();
        	this.dsSelect.addRow();
        	this.dsSelect.setColumn(0, "CD_CORP", this.dsSearch.getColumn(0, "CD_CORP"));
        	this.dsSelect.setColumn(0, "YM_C", this.dsSearch.getColumn(0, "YM_MAGAM"));
        	this.dsSelect.setColumn(0, "YM_B", this.dsSearch.getColumn(0, "YM_MAGAM2"));
        	this.dsSelect.setColumn(0, "YN_CHECK", "N");
        	this.dsSelect.setColumn(0, "CD_DEPT_ACNT", this.dsSearch.getColumn(0, "CD_DEPT_ACNT"));
        	this.dsSelect.setColumn(0, "TY_CLOSE", this.dsSearch.getColumn(0, "TY_WONGA"))

        	var reportpath  = "/dh/dhf/DHF_SC.ozr";
        	var inProc		= "_dsProc";
        	var inParam 	= "params=dsReportParam";
        	var inData   = "select=dsSelect";

        	gfnOpenReport(this, reportpath, inProc, inParam, inData);
        	return false;
        }

        /************************************************************************
         * 서브 버튼 이벤트
         ************************************************************************/

        /************************************************************************
         * Validate
         ************************************************************************/
        /*
         *	조회 Validate
         */
        this.fnSelectValidate = function() {
        	if (this.gfnIsNull(this.ccfCD_CORP.form.CDTextBox.text))
        	{
        		this.gfnAlert("법인코드를 입력 하세요.");
        		this.ccfCD_CORP.form.CDTextBox.setFocus();
        		return false;
        	}

        	if (this.gfnIsNull(this.ccfCD_DEPT.form.CDTextBox.text)) {
        		// Alert후 실행할 처리
        		this.fnVaidateCallback = function() {
        			this.ccfCD_DEPT.form.CDTextBox.setFocus();
        		}
        		this.gfnAlert("귀속부서를 입력하세요.", "fnVaidateCallback");
        		return false;
        	}

        	else if(this.gfnIsNull(this.ctclYM_WORK.form.TextBox.value)) {
        		this.fnVaidateCallback = function() {
        			this.ctclYM_WORK.setFocus();
        		}
        		this.gfnAlert("당기년월을 입력하세요.","fnVaidateCallback");
        		return false;
        	}
        	else if(this.gfnIsNull(this.ctclYM_WORK00.form.TextBox.value)) {
        		this.fnVaidateCallback = function() {
        			this.ctclYM_WORK00.setFocus();
        		}
        		this.gfnAlert("전기년월을 입력하세요.","fnVaidateCallback");
        		return false;
        	}

        	return true;
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
        	else if (svcID == "selectYmMagam") {
        		var sYmMagam = this.gfnGetDate().substring(0, 6);
        		var sYmMagam2 = this.gfnAddMonth(this.gfnGetDate(),-12).substr(0,6);
        		if(this.dsYmMagam.rowcount > 0){
        			sYmMagam = this.dsYmMagam.getColumn(0, "YM_MAGAM");
        			var nYear = Number(sYmMagam.substr(0, 4))-1;
        			sYmMagam2 = nYear + sYmMagam.substr(4,4);
        		}
        		this.dsSearch.setColumn(0, "YM_MAGAM", sYmMagam);
        		this.dsSearch.setColumn(0, "YM_MAGAM2", sYmMagam2);
        	}else if (svcID == "combo") {
        		if (errorCode == 0) {
        			var nrow = this.dsTY_PRINT.addRow();
        			this.dsTY_PRINT.setColumn(nrow, "CD_CODE", "");
        			this.dsTY_PRINT.setColumn(nrow, "DS_CODE", "전체");
        			this.divSearch.form.ccboTY_PRINT.set_index(0);
        		}
        	}
        }

        /************************************************************************
         * 코드파인드 이벤트
         ************************************************************************/
        this.fnAfterCDTextChanged = function ( id , codefindData ){
        	var arr = codefindData;
        	switch(id) {
        		case "ccfCD_CORP":
         			if (arr.length > 0) {
        				//var sCdCorp = arr[0]["CD_CORP"];
        				this.fnGetYmMagam();
        			}
        			this.ccfCD_DEPT.form.fnCodeFindClear();
        		break;
        	}
        }

        this.fnBeforeUserDataSetParam = function(id, dsUserParam, nrow) {
        	var sCdCorp = this.dsSearch.getColumn(0, "CD_CORP");
        	if (id == "ccfCD_CORP") {
        		//dsUserParam.setColumn(nrow, "LEVEL", this.UserInfo.LEVLV_DEPT_ACNT);
        		//dsUserParam.setColumn(nrow, "ACNTUNIT", this.UserInfo.LEVCD_DEPT_ACNT);
        		dsUserParam.setColumn(nrow, "ID_SABUN", this.AuthClient.ID_USER);
        	}
         	if (id == "ccfCD_DEPT") {
        		if(this.gfnIsNull(sCdCorp)){
        			this.gfnAlert("법인코드를 선택하세요.");
        			this.ccfCD_CORP.form.CDTextBox.setFocus();
        			return false;
        		}

        		dsUserParam.setColumn(nrow, "CD_DEPT_UPPER"	, "");						//상위부서
        		dsUserParam.setColumn(nrow, "YN_SLIPACCEPT"	, "");						//전표발행여부
        		dsUserParam.setColumn(nrow, "CD_CORP"		, sCdCorp);					//법인코드
        		dsUserParam.setColumn(nrow, "YN_USE"		, "Y");						//사용여부
        		dsUserParam.setColumn(nrow, "GR_DEPT_ACNT"	, "");						//현장/본사여부
        		dsUserParam.setColumn(nrow, "ID_USER"	    , this.AuthClient.ID_USER);
        		dsUserParam.setColumn(nrow, "GR_SEARCH"     , this.FormInfo.GR_SEARCH);
        		dsUserParam.setColumn(nrow, "CD_DEPT"	    , this.AuthClient.CD_DEPT);
        		dsUserParam.setColumn(nrow, "LEVCD_DEPT_UPPER", this.AuthClient.LEVCD_DEPT_UPPER);

        // 		var cd_corp = this.ccfCD_CORP.form.CDTextBox.text;
        // 		if(this.gfnIsNull(cd_corp)) {
        // 			this.gfnAlert("법인코드를 먼저 입력하세요.");
        // 			return false;
        // 		}
        // 		if (this.FormInfo.ID_GROUP == "M") {
        // 			this.ccfCD_DEPT.CodeFindName = "DHX_CFACNTUNIT_CLOSING";
        // 			dsUserParam.setColumn(nrow, "LEVEL", this.UserInfo.LEVLV_DEPT_ACNT);
        // 			dsUserParam.setColumn(nrow, "ACNTUNIT", this.UserInfo.LEVCD_DEPT_ACNT);
        // 			dsUserParam.setColumn(nrow, "YN_CORP ", "Y");
        // 			dsUserParam.setColumn(nrow, "CD_CORP", this.AuthClient.CD_CORP);
        // 		}
        // 		else {
        // 			this.ccfCD_DEPT.CodeFindName = "DHX_CFBALANCE_ACNTUNIT";
        // 			dsUserParam.setColumn(nrow, "LEVEL", this.UserInfo.LEVLV_DEPT_ACNT);
        // 			dsUserParam.setColumn(nrow, "ACNTUNIT", this.UserInfo.LEVCD_DEPT_ACNT);
        // 			dsUserParam.setColumn(nrow, "CD_CORP", this.AuthClient.CD_CORP);
        // 		}
        	}
        	return true;
        }
        /************************************************************************
         * 그리드 이벤트
         ************************************************************************/

        /************************************************************************
         * 기타 이벤트
         ************************************************************************/
        this.fnSearchInit = function(obj,e) {
        	if(e == null || (e.pretext != e.posttext)) {
        		this.gfnSetFormStatus(this);
        		this.gfnGridClear(this.dxGrid);
        	}
        }

        this.dsSearch_onvaluechanged = function(obj,e)
        {
        	if(e.oldvalue != e.newvalue) {
        		this.gfnSetFormStatus(this);	// 폼상태 초기화
        		this.gfnGridClear(this.dxGrid);
        		if (e.columnid == "TY_PRINT")
        		{
        			this.fnsetGridCellProperty();
        		}
        	}
        };

        // 회계년월 가져오기
        this.fnGetYmMagam = function() {
        	return;

        	this.dsSelectYmMagam.clearData();
        	this.dsSelectYmMagam.addRow();
        	this.dsSelectYmMagam.setColumn(0, "TY_GUBUN", "0");
        	this.dsSelectYmMagam.setColumn(0, "CN_ROW", 100);
        	//this.dsSelectYmMagam.setColumn(0, "VALUE", this.UserInfo.LEVCD_DEPT_ACNT_DOWN);
        	this.dsSelectYmMagam.setColumn(0, "MIN_VALUE", "");
        	this.dsSelectYmMagam.setColumn(0, "YN_SLIPACCEPT", "Y");
        	this.dsSelectYmMagam.setColumn(0, "CD_CORP", this.dsSearch.getColumn(0, "CD_CORP"));
        	this.dsSelectYmMagam.setColumn(0, "YN_USE", "Y");

        	var strSvcId    = "selectYmMagam";
        	var strSvcType  = "select";
        	var inProc		= "_dsProc";
        	var inData      = "selectYmMagam=dsSelectYmMagam";
        	var outData     = "dsYmMagam=selectYmMagam0";
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

        this.fnsetGridCellProperty= function ()
        {
        	var TY_PRINT = this.dsSearch.getColumn(0, "TY_PRINT");

        	var nCellIdxDS_PRINT = this.dxGrid.getBindCellIndex("body", "DS_PRINT");
        	var nCellIdxDS_PRINT_ENG = this.dxGrid.getBindCellIndex("body", "DS_PRINT_ENG");
        	this.dxGrid.setFormatColProperty(nCellIdxDS_PRINT	, "size", (TY_PRINT == "ENG") ? 0 : 250);
        	this.dxGrid.setFormatColProperty(nCellIdxDS_PRINT_ENG	, "size", (TY_PRINT == "KOR") ? 0 : 250);
        };

        // 콤보 조회
        this.fnSetCombo = function() {

        	this.dsCombo = new Dataset();
        	this.dsCombo.addColumn("CD_SYSTEM", "string");
        	this.dsCombo.addColumn("CD_TYPE", "string");

        	this.dsCombo.addRow();
        	this.dsCombo.setColumn(0, "CD_SYSTEM", "DH");
        	this.dsCombo.setColumn(0, "CD_TYPE", "A25");

        	var strSvcId    = "combo";
        	var strSvcType  = "select";
        	var inProc		= "_dsProc";
        	var inData      = "combo=dsCombo";
        	var outData     = "dsTY_PRINT=combo0";
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
        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.form_onload,this);
            this.divSearch.form.ccboYN_CORE.addEventHandler("onitemchanged",this.fnSearchInit,this);
            this.divSearch.form.staCD_SYSTEM00_00.addEventHandler("onclick",this.divSearch_staCD_SYSTEM_onclick,this);
            this.dsSearch.addEventHandler("onvaluechanged",this.dsSearch_onvaluechanged,this);
        };
        this.loadIncludeScript("DHF_SC.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
