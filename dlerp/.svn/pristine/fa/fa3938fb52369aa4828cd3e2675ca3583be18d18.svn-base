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
            obj._setContents("<ColumnInfo><Column id=\"TARGET\" type=\"STRING\" size=\"256\"/><Column id=\"SP\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"TARGET\">select</Col><Col id=\"SP\">DCBPR_ESTIMATIONDETAIL_DAEBI_DX_SELECT</Col></Row><Row><Col id=\"TARGET\">selectnm</Col><Col id=\"SP\">DCBPR_ESTIMATIONDETAIL_REGIST_SELECT</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsSearch", this);
            obj._setContents("<ColumnInfo><Column id=\"CD_SITE\" type=\"STRING\" size=\"256\"/><Column id=\"NO_BID\" type=\"STRING\" size=\"256\"/><Column id=\"CT_BID\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"CD_SITE\"/><Col id=\"NO_BID\"/><Col id=\"CT_BID\"/></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsListNm", this);
            obj._setContents("");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsExcelTitle", this);
            obj._setContents("<ColumnInfo><Column id=\"TITLE\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"TITLE\">견적대비표</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsTY_SELECT", this);
            obj._setContents("<ColumnInfo><Column id=\"CD_CODE\" type=\"STRING\" size=\"256\"/><Column id=\"DS_CODE\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"CD_CODE\">TYPE1</Col><Col id=\"DS_CODE\">TYPE1</Col></Row><Row><Col id=\"CD_CODE\">TYPE2</Col><Col id=\"DS_CODE\">TYPE2</Col></Row><Row><Col id=\"CD_CODE\">TYPE3</Col><Col id=\"DS_CODE\">TYPE3</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsCT_BID", this);
            obj._setContents("<ColumnInfo><Column id=\"CD_CODE\" type=\"STRING\" size=\"256\"/><Column id=\"DS_CODE\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"CD_CODE\"/><Col id=\"DS_CODE\">최종</Col></Row><Row><Col id=\"CD_CODE\">1</Col><Col id=\"DS_CODE\">1</Col></Row><Row><Col id=\"CD_CODE\">2</Col><Col id=\"DS_CODE\">2</Col></Row><Row><Col id=\"CD_CODE\">3</Col><Col id=\"DS_CODE\">3</Col></Row><Row><Col id=\"CD_CODE\">4</Col><Col id=\"DS_CODE\">4</Col></Row><Row><Col id=\"CD_CODE\">5</Col><Col id=\"DS_CODE\">5</Col></Row></Rows>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Div("divSearch","0.0","10.0",null,"46.0","0",null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_cssclass("div_SEARCH_Bg");
            obj.set_formscrolltype("none");
            this.addChild(obj.name, obj);

            obj = new Static("sta00","0.0","10.0","92.0","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("0");
            obj.set_text("현장코드");
            obj.set_cssclass("sta_WF_SchLabelE");
            this.divSearch.addChild(obj.name, obj);

            obj = new Div("ccfCD_SITE","sta00:0.0","10.0","250","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.getSetter("CodeFindName").set("DZX_CFSITE");
            obj.getSetter("CDTextWidth").set("80");
            obj.set_taborder("1");
            obj.set_url("cmm::cmmCodeFind.xfdl");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("sta01","ccfCD_SITE:0.0","10.0","92.0","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("2");
            obj.set_text("입찰번호");
            obj.set_cssclass("sta_WF_SchLabelE");
            this.divSearch.addChild(obj.name, obj);

            obj = new Div("ccfNO_BID","sta01:0.0","10.0","270","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.getSetter("CDTextWidth").set("100");
            obj.set_taborder("3");
            obj.set_url("cmm::cmmCodeFind.xfdl");
            this.divSearch.addChild(obj.name, obj);

            obj = new CheckBox("cchkDOKUB","ccfNO_BID:0.0","10.0","60","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("4");
            obj.set_text("도급");
            obj.set_visible("false");
            this.divSearch.addChild(obj.name, obj);

            obj = new CheckBox("cchkSILHENG","cchkDOKUB:0.0","10.0","60","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("5");
            obj.set_text("실행");
            obj.set_visible("false");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("staTY_SELECT","ccfNO_BID:0.0","10.0","92.0","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("6");
            obj.set_text("형식");
            obj.set_cssclass("sta_WF_SchLabel");
            this.divSearch.addChild(obj.name, obj);

            obj = new Combo("ccboTY_SELECT","staTY_SELECT:0.0","10.0","200","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("7");
            obj.set_innerdataset("dsTY_SELECT");
            obj.set_codecolumn("CD_CODE");
            obj.set_datacolumn("DS_CODE");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("staTY_SELECT00","cchkSILHENG:0.0","10.0","92.0","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("8");
            obj.set_text("차수");
            obj.set_cssclass("sta_WF_SchLabel");
            this.divSearch.addChild(obj.name, obj);

            obj = new Combo("ccboCT_BID","staTY_SELECT00:0.0","10.0","102","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("9");
            obj.set_innerdataset("dsCT_BID");
            obj.set_codecolumn("CD_CODE");
            obj.set_datacolumn("DS_CODE");
            this.divSearch.addChild(obj.name, obj);

            obj = new Div("divData","0","divSearch:10",null,null,"0","0",null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_cssclass("div_DATA_Bg");
            this.addChild(obj.name, obj);

            obj = new Grid("objGrid","0","0",null,null,"0","0",null,null,null,null,this.divData.form);
            obj.set_taborder("0");
            obj._setContents("");
            this.divData.addChild(obj.name, obj);

            obj = new Grid("objGridTitle","0","objGrid:0",null,null,"0","0",null,null,null,null,this.divData.form);
            obj.set_taborder("0");
            obj.set_visible("false");
            obj.getSetter("sub").set("true");
            obj._setContents("");
            this.divData.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this
            obj = new Layout("default","",this._adjust_width,this._adjust_height,this,function(p){});
            this.addLayout(obj.name, obj);
            
            // BindItem Information
            obj = new BindItem("item2","divSearch.form.ccfCD_SITE.form.CDTextBox","value","dsSearch","CD_SITE");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item0","divSearch.form.ccfNO_BID.form.CDTextBox","value","dsSearch","NO_BID");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item1","divSearch.form.ccboCT_BID","value","dsSearch","CT_BID");
            this.addChild(obj.name, obj);
            obj.bind();
            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {
            this._addPreloadList("fdl","cmm::cmmCodeFind.xfdl");
        };
        
        // User Script
        this.registerScript("DCB_HADOESTIMATIONDAEBIQRY_ENG.xfdl", function() {
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

        	// 이전 화면에서 데이터 받기.
        	this.dsSearch.setColumn(0, "CD_SITE", this.getOwnerFrame().CD_SITE);
        	this.divSearch.form.ccfCD_SITE.form.DSTextBox.set_value(this.getOwnerFrame().DS_SITE);
        	this.dsSearch.setColumn(0, "NO_BID", this.getOwnerFrame().NO_BID);
        	this.divSearch.form.ccfNO_BID.form.DSTextBox.set_value(this.getOwnerFrame().DS_BID);

        	// 전자결재에서 들어오는 경우.
        	if(this.getOwnerFrame().POPUPTYPE == "READONLY")
        	{
        		this.divSearch.form.ccfCD_SITE.set_enable(false);
        		this.divSearch.form.ccfNO_BID.set_enable(false);
        		//this.divSearch.form.ccfCD_SITE.form.fnCodeFindLoad();
        		//this.divSearch.form.ccfNO_BID.form.fnCodeFindLoad();

        	}

        	// 조회조건의 도급,실행 체크박스 초기값에 따라 진행되도록 강제로 이벤트 실행.
        // 	this.divSearch_cchkDOKUB_onchanged(this.divSearch.form.cchkDOKUB, {postvalue:this.divSearch.form.cchkDOKUB.value});
        // 	this.divSearch_cchkSILHENG_onchanged(this.divSearch.form.cchkSILHENG, {postvalue:this.divSearch.form.cchkSILHENG.value});

        	this.divSearch.form.ccboTY_SELECT.set_index(0);
        	this.divSearch.form.ccboCT_BID.set_index(0);
        //	this.divSearch_ccboTY_SELECT_onitemchanged(this.divSearch.form.ccboTY_SELECT, {postvalue:this.divSearch.form.ccboTY_SELECT.value});
        	this.FormBtns.Select.click();
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
        	this.ccfCD_SITE = this.divSearch.form.ccfCD_SITE;
        	this.ccfNO_BID = this.divSearch.form.ccfNO_BID;
        	this.dxGrid = this.divData.form.objGrid;
        	this.dxGridTitle = this.divData.form.objGridTitle;
        };

        /************************************************************************
         * 이벤트 설정
         ************************************************************************/
        this.fnSetEvent = function() {
        	//this.ccfCD_SITE.CodeFindName = "DZX_CFSITE";
        	this.ccfNO_BID.CodeFindName = "DCX_CFORDERPLAN_01";

        	//this.ccfCD_SITE.BeforeUserDataSetParam = "fnBeforeUserDataSetParam";
        	this.ccfCD_SITE.AfterCDTextChanged = "fnAfterCDTextChanged";
        	this.ccfNO_BID.BeforeUserDataSetParam = "fnBeforeUserDataSetParam";

        	// 그리드 초기화
        	this.gfnGridInit(this.dxGrid, this.dsList, "DC", "DCB_HADOESTIMATIONDAEBIQRY", "DS_COST", "GR_COST");
        	this.dxGrid.sort = "false";
        	this.gfnGridInit(this.dxGridTitle, this.dsExcelTitle, "DC", "DCB_HADOESTIMATIONDAEBIQRY_TITLE");
        	// 셀 변경 후 이벤트
        	//this.dxGrid.AfterEdit = "fnGrid_AfterEdit";

        	// 그리드 코드파인드 설정
        	//this.dxGrid.BeforeUserDataSetParam = "fnGrid_BeforeUserDataSetParam";

        	// 전체체크박스 체크/해제 이벤트
        	//this.dxGrid.AfterAllCheck = "fnGrid_AfterAllCheck";

        	// BUTTON, BUTTON-IN 처리
        	//this.dxGrid.ExpandUp = "fnGrid_ExpandUp";
        	var colDS_COST = this.dxGrid.getBindCellIndex("body", "DS_COST");
        	this.dxGrid.setCellProperty("summ", colDS_COST, "text", "합계");
        	this.dxGrid.setCellProperty("summ", colDS_COST, "textAlign", "center");

        	// 헤더 인덱스 자정
        	this.fnSetGridHeadIndex();
        };

        /************************************************************************
         * 파라미터 설정
         ************************************************************************/
        this.fnSetParameter = function() {

        	this.dsSelect = new Dataset();
        	this.dsSelect.addColumn("CD_SITE", "string");
        	this.dsSelect.addColumn("NO_BID", "string");
        	this.dsSelect.addColumn("CT_BID", "string");
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
        	this.dsSelect.setColumn(0, "NO_BID", this.dsSearch.getColumn(0, "NO_BID"));
        	this.dsSelect.setColumn(0, "CT_BID", this.dsSearch.getColumn(0, "CT_BID"));

        	var strSvcId    = "select";
        	var strSvcType  = "grid";
        	var inProc		= "_dsProc";
        	var inData      = "select=dsSelect selectnm=dsSelect";
        	var outData     = "dsList=select0 dsListNm=selectnm0";
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
         *	엑셀 버튼
         */
        this.fnExcel = function() {
        	//this.gfnExcelExport(this.dxGrid);
        	this.fnExcelExportTest(this.dxGrid, "입찰대비표", this.dsExcelTitle.getColumn(0, "TITLE"));
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

        	if (this.gfnIsNull(this.dsSearch.getColumn(0,"CD_SITE"))) {
        		validate = false;
        		// Alert후 실행할 처리
        		this.fnVaidateCallback = function() {
        			this.ccfCD_SITE.form.CDTextBox.setFocus();
        		}
        		this.gfnAlert("현장코드는 반드시 입력 하셔야 합니다.", "fnVaidateCallback");
        	}else if (this.gfnIsNull(this.dsSearch.getColumn(0,"NO_BID"))) {
        		validate = false;
        		// Alert후 실행할 처리
        		this.fnVaidateCallback = function() {
        			this.ccfNO_BID.form.CDTextBox.setFocus();
        		}
        		this.gfnAlert("입찰번호는 반드시 입력 하셔야 합니다.", "fnVaidateCallback");
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

        		this.fnHeadNmCh();
        		//alert(this.dsListNm.rowcount);
        		this.divSearch_ccboTY_SELECT_onitemchanged(this.divSearch.form.ccboTY_SELECT, {postvalue:this.divSearch.form.ccboTY_SELECT.value});

        		var title = "■입찰대비표_" + this.divSearch.form.ccfCD_SITE.form.DSTextBox.text;
        		this.dsExcelTitle.setColumn(0, "TITLE", title);
        	}
        }

        // 헤더명 변경 및 컬럼 보이고 숨기기
        this.fnHeadNmCh = function()
        {



        	// 헤더 컬럼명 변경
        	for (var i = 0; i < this.dsListNm.rowcount; i++) {
        		if(i == 0){
        			this.dxGrid.setCellProperty("head", this.idx0, "text", this.dsListNm.getColumn(i, "DS_VENDOR"));
        		}else if(i == 1){
        			this.dxGrid.setCellProperty("head", this.idx1, "text", this.dsListNm.getColumn(i, "DS_VENDOR"));
        		}else if(i == 2){
        			this.dxGrid.setCellProperty("head", this.idx2, "text", this.dsListNm.getColumn(i, "DS_VENDOR"));
        		}else if(i == 3){
        			this.dxGrid.setCellProperty("head", this.idx3, "text", this.dsListNm.getColumn(i, "DS_VENDOR"));
        		}else if(i == 4){
        			this.dxGrid.setCellProperty("head", this.idx4, "text", this.dsListNm.getColumn(i, "DS_VENDOR"));
        		}else if(i == 5){
        			this.dxGrid.setCellProperty("head", this.idx5, "text", this.dsListNm.getColumn(i, "DS_VENDOR"));
        		}else if(i == 6){
        			this.dxGrid.setCellProperty("head", this.idx6, "text", this.dsListNm.getColumn(i, "DS_VENDOR"));
        		}else if(i == 7){
        			this.dxGrid.setCellProperty("head", this.idx7, "text", this.dsListNm.getColumn(i, "DS_VENDOR"));
        		}else if(i == 8){
        			this.dxGrid.setCellProperty("head", this.idx8, "text", this.dsListNm.getColumn(i, "DS_VENDOR"));
        		}else if(i == 9){
        			this.dxGrid.setCellProperty("head", this.idx9, "text", this.dsListNm.getColumn(i, "DS_VENDOR"));
        		}

        		// 조회할때 조회조건이 다룰수 있기 때문에 컬럼 보이기
        		this.dxGrid.setFormatColProperty(this.dxGrid.getBindCellIndex("body", "UP_VENDOR"+(i+1)),"size",100);
        		this.dxGrid.setFormatColProperty(this.dxGrid.getBindCellIndex("body", "AM_VENDOR"+(i+1)),"size",120);
        		this.dxGrid.setFormatColProperty(this.dxGrid.getBindCellIndex("body", "UP_MATERIAL"+(i+1)),"size",100);
        		this.dxGrid.setFormatColProperty(this.dxGrid.getBindCellIndex("body", "AM_MATERIAL"+(i+1)),"size",120);
        		this.dxGrid.setFormatColProperty(this.dxGrid.getBindCellIndex("body", "UP_LABOR"+(i+1)),"size",100);
        		this.dxGrid.setFormatColProperty(this.dxGrid.getBindCellIndex("body", "AM_LABOR"+(i+1)),"size",120);
        		this.dxGrid.setFormatColProperty(this.dxGrid.getBindCellIndex("body", "UP_COST"+(i+1)),"size",100);
        		this.dxGrid.setFormatColProperty(this.dxGrid.getBindCellIndex("body", "AM_COST"+(i+1)),"size",120);
        		this.dxGrid.setFormatColProperty(this.dxGrid.getBindCellIndex("body", "BOHAL_VENDOR"+(i+1)),"size",120);
        	}

        	// 컬럼 숨기기
        	for (var i = 10; i > this.dsListNm.rowcount; i--) {
        		this.dxGrid.setFormatColProperty(this.dxGrid.getBindCellIndex("body", "UP_VENDOR"+i),"size",0);
        		this.dxGrid.setFormatColProperty(this.dxGrid.getBindCellIndex("body", "AM_VENDOR"+i),"size",0);
        		this.dxGrid.setFormatColProperty(this.dxGrid.getBindCellIndex("body", "UP_MATERIAL"+(i+1)),"size",0);
        		this.dxGrid.setFormatColProperty(this.dxGrid.getBindCellIndex("body", "AM_MATERIAL"+(i+1)),"size",0);
        		this.dxGrid.setFormatColProperty(this.dxGrid.getBindCellIndex("body", "UP_LABOR"+(i+1)),"size",0);
        		this.dxGrid.setFormatColProperty(this.dxGrid.getBindCellIndex("body", "AM_LABOR"+(i+1)),"size",0);
        		this.dxGrid.setFormatColProperty(this.dxGrid.getBindCellIndex("body", "UP_COST"+(i+1)),"size",0);
        		this.dxGrid.setFormatColProperty(this.dxGrid.getBindCellIndex("body", "AM_COST"+(i+1)),"size",0);
        		this.dxGrid.setFormatColProperty(this.dxGrid.getBindCellIndex("body", "BOHAL_VENDOR"+i),"size",0);
        	}

        }

        this.fnSetGridHeadIndex = function()
        {
        	// 해당 헤더컬럼 인덱스 구하기
        	this.idx0 = "";
        	this.idx1 = "";
        	this.idx2 = "";
        	this.idx3 = "";
        	this.idx4 = "";
        	this.idx5 = "";
        	this.idx6 = "";
        	this.idx7 = "";
        	this.idx8 = "";
        	this.idx9 = "";



        	// 해당 컬럼의 인덱스값을 구함
        	for(var i=0; i < this.dxGrid.getCellCount("head"); i++) {
        		if(this.dxGrid.getCellText(-1,i) == "01"){
        			this.idx0 = i;
        		}else if(this.dxGrid.getCellText(-1,i) == "02"){
        			this.idx1 = i;
        		}else if(this.dxGrid.getCellText(-1,i) == "03"){
        			this.idx2 = i;
        		}else if(this.dxGrid.getCellText(-1,i) == "04"){
        			this.idx3 = i;
        		}else if(this.dxGrid.getCellText(-1,i) == "05"){
        			this.idx4 = i;
        		}else if(this.dxGrid.getCellText(-1,i) == "06"){
        			this.idx5 = i;
        		}else if(this.dxGrid.getCellText(-1,i) == "07"){
        			this.idx6 = i;
        		}else if(this.dxGrid.getCellText(-1,i) == "08"){
        			this.idx7 = i;
        		}else if(this.dxGrid.getCellText(-1,i) == "09"){
        			this.idx8 = i;
        		}else if(this.dxGrid.getCellText(-1,i) == "10"){
        			this.idx9 = i;
        		}
        	}

        }

        /************************************************************************
         * 코드파인드 이벤트
         ************************************************************************/
        //코드파인드의 파라미터 값을 넘겨줄때 사용하는 함수
        this.fnBeforeUserDataSetParam = function(id, dsUserParam, nrow) {

        // 	if (id == "ccfCD_SITE"){
        // 		dsUserParam.setColumn(nrow, "CD_CORP", this.AuthClient.CD_CORP);
        // 	}else
        	if (id == "ccfNO_BID"){
         		if (this.gfnIsNull(this.dsSearch.getColumn(0, "CD_SITE"))) {
         			this.gfnAlert("현장코드를 먼저 입력하세요.");
         			return false;
         		}
        		dsUserParam.setColumn(nrow, "CD_SITE", this.dsSearch.getColumn(0, "CD_SITE"));
        	}

        	return true;
        }

        this.fnAfterCDTextChanged = function(id, codeFindData) {
        	if(id == "ccfCD_SITE") {
        		// 현장코드 변경시 입찰번호 초기화
        		this.ccfNO_BID.form.fnCodeFindClear();
        	}
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

        		if(e.columnid == "CD_SITE"){
        			this.dsSearch.setColumn(0, "NO_BID", "");
        			this.divSearch.form.ccfNO_BID.form.DSTextBox.set_value("");
        		}
        	}
        };

        this.fnExcelExportTest = function(objGrid, sSheetName, sFileName)
        {
        	var objDs = objGrid.getBindDataset();
        	if(objGrid.yn_filter == "Y") {
        		objDs.set_enableevent(false);
        		objDs.deleteRow(0);
        		objDs.set_enableevent(true);
        	}

        	this.setWaitCursor(true);

        	var objGrid_excel = objGrid;

        	var regExp = /[?*:\/\[\]]/g;  				//(엑셀에서 지원하지않는 모든 문자)

        	//fileName nullcheck
        	sFileName = this.gfnIsNull(sFileName) ? this.gfnGetArgument("NM_FORM")+"_"+this.gfnGetDate() : sFileName;
        	//sheetName nullcheck
        	sSheetName = this.gfnIsNull(sSheetName) ? "sheet1" : sSheetName;

        	sFileName = sFileName.replace(regExp,"");	//파일명에 특수문자 제거
        	sSheetName = sSheetName.replace(regExp,""); //시트명에 특수문자 제거

        	//sheetName 30이상일경우 기본시트명
        	if( String(sSheetName).length > 30 ){
        		sSheetName =  "sheet1";
        	}

        	var svcUrl = "svcUrl::XExportImport.do";
        	this.objExport = null;
        	this.objExport = new ExcelExportObject();

        	this.objExport.objgrid = objGrid_excel;
        	this.objExport.set_exporturl(svcUrl);
        	this.objExport.addExportItem(nexacro.ExportItemTypes.GRID, this.dxGridTitle, sSheetName+"!A1","nohead","allrecord","suppress","allstyle","none","","both");
        	this.objExport.addExportItem(nexacro.ExportItemTypes.GRID, objGrid_excel, sSheetName+"!A3","allband","allrecord","suppress","allstyle","none","","both");


        	this.objExport.set_exportfilename(sFileName);

         	this.objExport.set_exporteventtype("itemrecord");
         	this.objExport.set_exportuitype("none");
         	this.objExport.set_exportmessageprocess("");
        	this.objExport.addEventHandler("onsuccess", this.gfnExportOnsuccess, this);
        	this.objExport.addEventHandler("onerror", this.gfnExportOnerror, this);

        	var result = this.objExport.exportData();
        }


        this.divSearch_cchkDOKUB_onchanged = function(obj,e)
        {
        	if(e.prevalue != e.postvalue)
        	{
        		var UP_TT_DOKUB_Index = this.dxGrid.getBindCellIndex("body", "UP_TT_DOKUB");
        		var AM_TT_DOKUB_Index = this.dxGrid.getBindCellIndex("body", "AM_TT_DOKUB");

        		var up_size = 100;
        		var am_size = 120;

        		if(e.postvalue == false)
        		{
        			up_size = 0;
        			am_size = 0;
        		}

        		this.dxGrid.setRealColSize("body", UP_TT_DOKUB_Index, up_size);
        		this.dxGrid.setRealColSize("body", AM_TT_DOKUB_Index, am_size);
        	}
        };

        this.divSearch_cchkSILHENG_onchanged = function(obj,e)
        {
        	if(e.prevalue != e.postvalue)
        	{
        		var UP_TT_SILHENG_Index = this.dxGrid.getBindCellIndex("body", "UP_TT_SILHENG");
        		var AM_TT_SILHENG_Index = this.dxGrid.getBindCellIndex("body", "AM_TT_SILHENG");

        		var up_size = 100;
        		var am_size = 120;

        		if(e.postvalue == false)
        		{
        			up_size = 0;
        			am_size = 0;
        		}

        		this.dxGrid.setRealColSize("body", UP_TT_SILHENG_Index, up_size);
        		this.dxGrid.setRealColSize("body", AM_TT_SILHENG_Index, am_size);
        	}
        };

        this.divSearch_ccboTY_SELECT_onitemchanged = function(obj,e)
        {
        	if(e.prevalue != e.postvalue)
        	{
        		switch(e.postvalue)
        		{
        			case "TYPE1" :
        				this.fnSetDokubSilheng(true);
        				this.fnVendor_UP_AM_MLC(false);
        				this.fnVendor_BOHAL(false);
        			break;
        			case "TYPE2" :
        				this.fnSetDokubSilheng(true);
        				this.fnVendor_UP_AM_MLC(true);
        				this.fnVendor_BOHAL(false);
        			break;
        			case "TYPE3" :
        				this.fnSetDokubSilheng(true);
        				this.fnVendor_UP_AM_MLC(false);
        				this.fnVendor_BOHAL(true);
        			break;
        		}
        	}
        };

        this.divSearch_ccboCT_BID_onitemchanged = function(obj,e)
        {
        	if(e.prevalue != e.postvalue)
        	{
        		this.gfnSetFormStatus(this);	// 폼상태 초기화
        		this.gfnGridClear(this.dxGrid);
        	}
        };

        this.fnSetDokubSilheng = function(value)
        {
        	var UP_TT_DOKUB_Index = this.dxGrid.getBindCellIndex("body", "UP_TT_DOKUB");
        	var AM_TT_DOKUB_Index = this.dxGrid.getBindCellIndex("body", "AM_TT_DOKUB");
        	var UP_TT_SILHENG_Index = this.dxGrid.getBindCellIndex("body", "UP_TT_SILHENG");
        	var AM_TT_SILHENG_Index = this.dxGrid.getBindCellIndex("body", "AM_TT_SILHENG");

        	var up_size = 0;
        	var am_size = 0;

        	if(value == true)
        	{
        		up_size = 100;
        		am_size = 120;
        	}

        	this.dxGrid.setRealColSize("body", UP_TT_DOKUB_Index, up_size);
        	this.dxGrid.setRealColSize("body", AM_TT_DOKUB_Index, am_size);
        	this.dxGrid.setRealColSize("body", UP_TT_SILHENG_Index, up_size);
        	this.dxGrid.setRealColSize("body", AM_TT_SILHENG_Index, am_size);
        }

        this.fnVendor_UP_AM_MLC = function(value)
        {
        	var up_size = 0;
        	var am_size = 0;

        	if(value == true)
        	{
        		up_size = 100;
        		am_size = 120;
        	}

        	for(var i = 0 ; i < this.dsListNm.rowcount; i++)
        	{
        		this.dxGrid.setFormatColProperty(this.dxGrid.getBindCellIndex("body", "UP_MATERIAL"+(i+1)),"size",up_size);
        		this.dxGrid.setFormatColProperty(this.dxGrid.getBindCellIndex("body", "AM_MATERIAL"+(i+1)),"size",am_size);
        		this.dxGrid.setFormatColProperty(this.dxGrid.getBindCellIndex("body", "UP_LABOR"+(i+1)),"size",up_size);
        		this.dxGrid.setFormatColProperty(this.dxGrid.getBindCellIndex("body", "AM_LABOR"+(i+1)),"size",am_size);
        		this.dxGrid.setFormatColProperty(this.dxGrid.getBindCellIndex("body", "UP_COST"+(i+1)),"size",up_size);
        		this.dxGrid.setFormatColProperty(this.dxGrid.getBindCellIndex("body", "AM_COST"+(i+1)),"size",am_size);
        	}
        }

        this.fnVendor_BOHAL = function(value)
        {
        	var size = 0;

        	if(value == true)
        	{
        		size = 120;
        	}

        	for(var i = 0 ; i < this.dsListNm.rowcount; i++)
        	{
        		this.dxGrid.setFormatColProperty(this.dxGrid.getBindCellIndex("body", "BOHAL_VENDOR"+(i+1)),"size",size);
        	}
        }



        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.form_onload,this);
            this.divSearch.form.cchkDOKUB.addEventHandler("onchanged",this.divSearch_cchkDOKUB_onchanged,this);
            this.divSearch.form.cchkSILHENG.addEventHandler("onchanged",this.divSearch_cchkSILHENG_onchanged,this);
            this.divSearch.form.ccboTY_SELECT.addEventHandler("onitemchanged",this.divSearch_ccboTY_SELECT_onitemchanged,this);
            this.divSearch.form.ccboCT_BID.addEventHandler("onitemchanged",this.divSearch_ccboCT_BID_onitemchanged,this);
            this.dsSearch.addEventHandler("onvaluechanged",this.dsSearch_onvaluechanged,this);
        };
        this.loadIncludeScript("DCB_HADOESTIMATIONDAEBIQRY_ENG.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
