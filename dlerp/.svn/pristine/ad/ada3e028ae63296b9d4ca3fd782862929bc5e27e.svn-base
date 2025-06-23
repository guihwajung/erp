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
            this.set_titletext("재입찰상세내역");
            if (Form == this.constructor)
            {
                this._setFormPosition(1280,720);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("dsList", this);
            obj._setContents("");
            this.addChild(obj.name, obj);


            obj = new Dataset("_dsProc", this);
            obj._setContents("<ColumnInfo><Column id=\"TARGET\" type=\"STRING\" size=\"256\"/><Column id=\"SP\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"TARGET\">select</Col><Col id=\"SP\">DCBPR_ESTIMATIONDETAIL_DAEBI_DX_REBID_SELECT</Col></Row><Row><Col id=\"TARGET\">selectnm</Col><Col id=\"SP\">DCBPR_ESTIMATIONDETAIL_REGIST_REBID_SELECT</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsSearch", this);
            obj._setContents("<ColumnInfo><Column id=\"CD_SITE\" type=\"STRING\" size=\"256\"/><Column id=\"NO_BID\" type=\"STRING\" size=\"256\"/><Column id=\"CT_BID\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"CD_SITE\"/><Col id=\"NO_BID\"/></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsListNm", this);
            obj._setContents("");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Div("divSearch","0.0","10.0",null,"46.0","0",null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_cssclass("div_SEARCH_Bg");
            obj.set_formscrolltype("none");
            this.addChild(obj.name, obj);

            obj = new Static("staCD_SITE","0.0","10.0","92.0","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("2");
            obj.set_text("현장코드");
            obj.set_textDecoration("none");
            obj.set_textAlign("center");
            obj.set_cssclass("sta_WF_SchLabel");
            this.divSearch.addChild(obj.name, obj);

            obj = new Div("ccfCD_SITE","staCD_SITE:0.0","10.0","200","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.getSetter("AfterCDTextChanged").set("ccfCD_SITE_AfterCDTextChanged");
            obj.getSetter("CodeFindName").set("DZX_CFSITE");
            obj.getSetter("FitToContents").set("true");
            obj.getSetter("CDTextWidth").set("80");
            obj.set_taborder("0");
            obj.set_url("cmm::cmmCodeFind.xfdl");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("staNO_BID","ccfCD_SITE:0.0","10.0","92.0","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("3");
            obj.set_text("입찰번호");
            obj.set_textAlign("center");
            obj.set_cssclass("sta_WF_SchLabel");
            this.divSearch.addChild(obj.name, obj);

            obj = new Div("ccfNO_BID","staNO_BID:0.0","10.0","300","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.getSetter("FitToContents").set("true");
            obj.getSetter("CDTextWidth").set("120");
            obj.set_taborder("1");
            obj.set_url("cmm::cmmCodeFind.xfdl");
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
            obj = new BindItem("item0","divSearch.form.ccfCD_SITE.form.CDTextBox","value","dsSearch","CD_SITE");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item1","divSearch.form.ccfNO_BID.form.CDTextBox","value","dsSearch","NO_BID");
            this.addChild(obj.name, obj);
            obj.bind();
            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {
            this._addPreloadList("fdl","cmm::cmmCodeFind.xfdl");
        };
        
        // User Script
        this.registerScript("DCB_HADOESTIMATIONDAEBIQRY_REBID.xfdl", function() {
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

        	this.dsSearch.setColumn(0, "CD_SITE", this.getOwnerFrame().CD_SITE);
        	this.divSearch.form.ccfCD_SITE.form.DSTextBox.set_value(this.getOwnerFrame().DS_SITE);
        	this.dsSearch.setColumn(0, "NO_BID", this.getOwnerFrame().NO_BID);
        	this.divSearch.form.ccfNO_BID.form.DSTextBox.set_value(this.getOwnerFrame().DS_SUBCON);
        	this.dsSearch.setColumn(0, "CT_BID", this.getOwnerFrame().CT_BID);


        	//this.ccfCD_SITE.form.fnCodeFindLoad();
        	//this.ccfNO_BID.form.fnCodeFindLoad();
        	//this.ccfCD_SITE.set_enable(false);
        	//this.ccfNO_BID.set_enable(false);
        	this.FormBtns.Select.click();

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
        	this.ccfCD_SITE = this.divSearch.form.ccfCD_SITE;
        	this.ccfNO_BID = this.divSearch.form.ccfNO_BID;

        	this.dxGrid = this.divData.form.objGrid;
        };

        /************************************************************************
         * 이벤트 설정
         ************************************************************************/
        this.fnSetEvent = function() {
        	this.ccfNO_BID.CodeFindName = "DCX_CFORDERPLAN_01";

        	this.ccfNO_BID.BeforeUserDataSetParam = "fnBeforeUserDataSetParam";
        	this.ccfCD_SITE.AfterCDTextChanged = "fnAfterCDTextChanged";

        	// 그리드 초기화
        	this.gfnGridInit(this.dxGrid, this.dsList, "DC", "DCB_HADOESTIMATIONDAEBIQRY_REBID", "DS_COST", "GR_COST");
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
        	}
        }
        /************************************************************************
         * 코드파인드 이벤트
         ************************************************************************/
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

        this.fnAfterCDTextChanged = function(id, codeFindData){
        	var arr = codeFindData;

        	if(id == "ccfCD_SITE") {
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

        // 헤더명 변경 및 컬럼 보이고 숨기기
        this.fnHeadNmCh = function()
        {
        	// 해당 헤더컬럼 인덱스 구하기
        	var idx0 = "";
        	var idx1 = "";
        	var idx2 = "";
        	var idx3 = "";
        	var idx4 = "";
        	var idx5 = "";
        	var idx6 = "";
        	var idx7 = "";
        	var idx8 = "";
        	var idx9 = "";

        	// 해당 컬럼의 인덱스값을 구함
        	for(var i=0; i < this.dxGrid.getCellCount("head"); i++) {
        		if(this.dxGrid.getCellText(-1,i) == "1"){
        			idx0 = i;
        		}else if(this.dxGrid.getCellText(-1,i) == "2"){
        			idx1 = i;
        		}else if(this.dxGrid.getCellText(-1,i) == "3"){
        			idx2 = i;
        		}else if(this.dxGrid.getCellText(-1,i) == "4"){
        			idx3 = i;
        		}else if(this.dxGrid.getCellText(-1,i) == "5"){
        			idx4 = i;
        		}else if(this.dxGrid.getCellText(-1,i) == "6"){
        			idx5 = i;
        		}else if(this.dxGrid.getCellText(-1,i) == "7"){
        			idx6 = i;
        		}else if(this.dxGrid.getCellText(-1,i) == "8"){
        			idx7 = i;
        		}else if(this.dxGrid.getCellText(-1,i) == "9"){
        			idx8 = i;
        		}else if(this.dxGrid.getCellText(-1,i) == "10"){
        			idx9 = i;
        		}
        	}

        	// 헤더 컬럼명 변경
        	for (var i = 0; i < this.dsListNm.rowcount; i++) {
        		if(i == 0){
        			this.dxGrid.setCellProperty("head", idx0, "text", this.dsListNm.getColumn(i, "DS_VENDOR"));
        		}else if(i == 1){
        			this.dxGrid.setCellProperty("head", idx1, "text", this.dsListNm.getColumn(i, "DS_VENDOR"));
        		}else if(i == 2){
        			this.dxGrid.setCellProperty("head", idx2, "text", this.dsListNm.getColumn(i, "DS_VENDOR"));
        		}else if(i == 3){
        			this.dxGrid.setCellProperty("head", idx3, "text", this.dsListNm.getColumn(i, "DS_VENDOR"));
        		}else if(i == 4){
        			this.dxGrid.setCellProperty("head", idx4, "text", this.dsListNm.getColumn(i, "DS_VENDOR"));
        		}else if(i == 5){
        			this.dxGrid.setCellProperty("head", idx5, "text", this.dsListNm.getColumn(i, "DS_VENDOR"));
        		}else if(i == 6){
        			this.dxGrid.setCellProperty("head", idx6, "text", this.dsListNm.getColumn(i, "DS_VENDOR"));
        		}else if(i == 7){
        			this.dxGrid.setCellProperty("head", idx7, "text", this.dsListNm.getColumn(i, "DS_VENDOR"));
        		}else if(i == 8){
        			this.dxGrid.setCellProperty("head", idx8, "text", this.dsListNm.getColumn(i, "DS_VENDOR"));
        		}else if(i == 9){
        			this.dxGrid.setCellProperty("head", idx9, "text", this.dsListNm.getColumn(i, "DS_VENDOR"));
        		}

        		// 조회할때 조회조건이 다룰수 있기 때문에 컬럼 보이기
        		this.dxGrid.setFormatColProperty(this.dxGrid.getBindCellIndex("body", "UP_VENDOR"+(i+1)),"size",100);
        		this.dxGrid.setFormatColProperty(this.dxGrid.getBindCellIndex("body", "AM_VENDOR"+(i+1)),"size",120);
        	}

        	// 컬럼 숨기기
        	for (var i = 10; i > this.dsListNm.rowcount; i--) {
        		this.dxGrid.setFormatColProperty(this.dxGrid.getBindCellIndex("body", "UP_VENDOR"+i),"size",0);
        		this.dxGrid.setFormatColProperty(this.dxGrid.getBindCellIndex("body", "AM_VENDOR"+i),"size",0);
        	}

        }
        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.form_onload,this);
            this.dsSearch.addEventHandler("onvaluechanged",this.dsSearch_onvaluechanged,this);
        };
        this.loadIncludeScript("DCB_HADOESTIMATIONDAEBIQRY_REBID.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
