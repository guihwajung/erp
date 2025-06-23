(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("DAA_ORGANSYSTEM");
            this.set_titletext("조직도");
            if (Form == this.constructor)
            {
                this._setFormPosition(1280,720);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("dsList", this);
            obj._setContents("");
            this.addChild(obj.name, obj);


            obj = new Dataset("_dsProc", this);
            obj._setContents("<ColumnInfo><Column id=\"TARGET\" type=\"STRING\" size=\"256\"/><Column id=\"SP\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"TARGET\">select</Col><Col id=\"SP\">DAAPR_ORGTREE_SELECT</Col></Row><Row><Col id=\"TARGET\">select2nd</Col><Col id=\"SP\">DAAPR_ORGANLIST_SELECT</Col></Row><Row><Col id=\"SP\">DAAPR_BASEINFO_CARD_PRINT</Col><Col id=\"TARGET\">reportCard</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsRptList1", this);
            obj._setContents("");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsRptList2", this);
            obj._setContents("");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsRptList3", this);
            obj._setContents("");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsRptList4", this);
            obj._setContents("");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsRptList5", this);
            obj._setContents("");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsRptList6", this);
            obj._setContents("");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsRptList7", this);
            obj._setContents("");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsRptList8", this);
            obj._setContents("");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsRptList9", this);
            obj._setContents("");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsRptList10", this);
            obj._setContents("");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsRptList11", this);
            obj._setContents("");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsRptList12", this);
            obj._setContents("");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsRptList13", this);
            obj._setContents("");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsRptList14", this);
            obj._setContents("");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsList2nd", this);
            obj._setContents("");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsSearch", this);
            obj._setContents("<ColumnInfo><Column id=\"CD_CORP\" type=\"STRING\" size=\"256\"/><Column id=\"DS_CORP\" type=\"STRING\" size=\"256\"/><Column id=\"DT_SNAPSHOT\" type=\"STRING\" size=\"256\"/><Column id=\"YN_UPDEPT\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"YN_UPDEPT\">Y</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsList3rd", this);
            obj._setContents("");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Div("divSearch","0","0",null,"46.0","0",null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_cssclass("div_SEARCH_Bg");
            this.addChild(obj.name, obj);

            obj = new Static("staCD_CORP","0","10.0","66","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("0");
            obj.set_text("법인");
            obj.set_cssclass("sta_WF_SchLabelE");
            this.divSearch.addChild(obj.name, obj);

            obj = new Div("ccfCD_CORP","staCD_CORP:0.0","10.0","200","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.getSetter("CDTextWidth").set("50");
            obj.set_taborder("1");
            obj.set_url("cmm::cmmCodeFind.xfdl");
            obj.getSetter("onitemchanged").set("fnSearchInit");
            this.divSearch.addChild(obj.name, obj);

            obj = new CheckBox("chkYN_UPDATE","ccfCD_CORP:10","10.0","120","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("2");
            obj.set_text("상위부서 기준조회");
            obj.set_truevalue("Y");
            obj.set_falsevalue("N");
            obj.set_visible("false");
            this.divSearch.addChild(obj.name, obj);

            obj = new Div("divData","0","divSearch:10",null,null,"0","0",null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_text("div00");
            this.addChild(obj.name, obj);

            obj = new Div("divSplitter","22.70%","0","5",null,null,"0",null,null,null,null,this.divData.form);
            obj.set_taborder("1");
            obj.set_background("skyblue");
            obj.set_cursor("ew-resize");
            obj.set_cssclass("div_Splitter");
            this.divData.addChild(obj.name, obj);

            obj = new Div("divDataLeft","0","0",null,null,"divSplitter:5","0",null,null,null,null,this.divData.form);
            obj.set_taborder("0");
            this.divData.addChild(obj.name, obj);

            obj = new Grid("objGrid","0","5",null,null,"0","0",null,null,null,null,this.divData.form.divDataLeft.form);
            obj.set_taborder("0");
            obj.set_autosizingtype("none");
            obj._setContents("");
            this.divData.form.divDataLeft.addChild(obj.name, obj);

            obj = new Div("divDataRightTop","divSplitter:5","0",null,null,"0","0",null,null,null,null,this.divData.form);
            obj.set_taborder("2");
            this.divData.addChild(obj.name, obj);

            obj = new Button("btnPre","5","4","50","20",null,null,null,null,null,null,this.divData.form.divDataRightTop.form);
            obj.set_taborder("0");
            obj.set_text("이전");
            obj.set_visible("false");
            this.divData.form.divDataRightTop.addChild(obj.name, obj);

            obj = new Button("btnNext","btnPre:5","4","50","20",null,null,null,null,null,null,this.divData.form.divDataRightTop.form);
            obj.set_taborder("1");
            obj.set_text("다음");
            obj.set_visible("false");
            this.divData.form.divDataRightTop.addChild(obj.name, obj);

            obj = new Div("divDataRight","-5","btnNext:5",null,null,"0","0",null,null,null,null,this.divData.form.divDataRightTop.form);
            obj.set_taborder("2");
            obj.set_text("div00");
            this.divData.form.divDataRightTop.addChild(obj.name, obj);

            obj = new Div("divTemp","0","0",null,null,"0","0",null,null,null,null,this.divData.form.divDataRightTop.form.divDataRight.form);
            obj.set_taborder("0");
            obj.set_text("");
            this.divData.form.divDataRightTop.form.divDataRight.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this
            obj = new Layout("default","",1280,720,this,function(p){});
            obj.set_mobileorientation("landscape");
            this.addLayout(obj.name, obj);
            
            // BindItem Information
            obj = new BindItem("item0","divSearch.form.ccfCD_CORP.form.CDTextBox","value","dsSearch","CD_CORP");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item1","divSearch.form.ccfCD_CORP.form.DSTextBox","value","dsSearch","DS_CORP");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item2","divSearch.form.chkYN_UPDATE","value","dsSearch","YN_UPDEPT");
            this.addChild(obj.name, obj);
            obj.bind();
            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {
            this._addPreloadList("fdl","cmm::cmmCodeFind.xfdl");
        };
        
        // User Script
        this.registerScript("DAA_ORGANSYSTEM_MNG.xfdl", function() {
        this.objApp = this.gfnGetApplication();
        this.editId = "";
        this.dblClickCnt = 0;

        this.DAA_ORGANSYSTEM_onload = function(obj,e){
        	// -- 필수 -------------------//
        	this.gfnFormOnLoad(this);
        	this.gfnFormInfo(this);
        	// ---------------------------//

        	this.fnSetButton();
        	this.fnSetExtendButton();
        	this.fnSetVariable();
        	this.fnSetEvent();
        	this.fnSetParameter();

        	this.chkYN_UPDATE.set_value("N");

        	// 법인코드 및 법인명 기본세팅
        	this.ccfCD_CORP.form.CDTextBox.set_value(this.AuthClient.CD_CORP);
            this.ccfCD_CORP.form.DSTextBox.set_value(this.AuthClient.DS_CORP);

        	this.FormBtns.Select.click();
        };

        /************************************************************************
         * 버튼 설정 : 화면(Tab) 전환시 마다 호출
         ************************************************************************/
        this.fnSetButton = function() {
        	// 서브 버튼 사용
        	//this.gfnUseSubBtn(true, this.divData, this.divData.form.divSplitter); // divSplitter sync
        };

        /************************************************************************
         * 확장 버튼 : 화면별 버튼 설정 ID, function 연결
         ************************************************************************/
        this.fnSetExtendButton = function() {
        	//this.btn1 = this.gfnFormButtonAdd("Detail", "fnDetail1");
        };

        /************************************************************************
         * 변수 선언
         ************************************************************************/
        this.fnSetVariable = function() {

        	this.ccfCD_CORP = this.divSearch.form.ccfCD_CORP;
        	this.chkYN_UPDATE = this.divSearch.form.chkYN_UPDATE;

        	this.dxGrid = this.divData.form.divDataLeft.form.objGrid;

        	this.minData = 9;
        	this.img = null;
        };

        /************************************************************************
         * 이벤트 설정
         ************************************************************************/
        this.fnSetEvent = function() {
        	//pForm.gfnGridInit(objGrid, objDs, cd_system, id_grid, tree_column, level_column, is_manual, async)
        	this.gfnGridInit(this.dxGrid, this.dsList, "DA", "DAA_ORGANSYSTEM_1","DS_DEPT","NO_LEVEL");
        	this.dxGrid.set_selecttype("cell");
        	this.dxGrid.addEventHandler("onselectchanged", this.fnGrid_RowCellChanged, this);

        	// 트리 접는 로직.
        	//this.dxGrid.set_treeinitstatus("collapse,all");

        	//코드파인드
        	this.ccfCD_CORP.CodeFindName = "DAX_CFCORP_CODEFIND";
        	this.ccfCD_CORP.BeforeUserDataSetParam = "fnBeforeUserDataSetParam";
        	this.ccfCD_CORP.AfterCDTextChanged = "codefind_AfterCDTextChanged";
        };

        /************************************************************************
         * 파라미터 설정
         ************************************************************************/
        this.fnSetParameter = function() {
        	this.dsSelect = new Dataset();
        	this.dsSelect.addColumn("CD_CORP", "string");
        	this.dsSelect.addColumn("DT_SNAPSHOT", "string");
        	this.dsSelect.addColumn("AUTH_CD_CORP", "string");
        	this.dsSelect.addColumn("GR_SEARCH", "string");
        	this.dsSelect.addColumn("TY_AUTH", "string");
        	this.dsSelect.addColumn("GR_DEPT", "string");
        	this.dsSelect.addColumn("ID_USER", "string");

        	this.dsSelect2nd = new Dataset();
        	this.dsSelect2nd.addColumn("CD_CORP", "string");
        	this.dsSelect2nd.addColumn("CD_DEPT", "string");
        	this.dsSelect2nd.addColumn("CD_MINDATA", "float");
        	this.dsSelect2nd.addColumn("YN_UPDEPT", "string");
        	this.dsSelect2nd.addColumn("GR_SEARCH", "string");
        	this.dsSelect2nd.addColumn("TY_AUTH", "string");
        	this.dsSelect2nd.addColumn("GR_DEPT", "string");
        	this.dsSelect2nd.addColumn("ID_USER", "string");

        	this.dsImageFile = new Dataset();
        	this.dsImageFile.addColumn("filepath", "string");
        	this.dsImageFile.addColumn("filename", "string");
        	this.dsImageFile.addColumn("filereturn", "string");

        	// 인사기록카드
        	this.dsSelectCardRpt = new Dataset();
        	this.dsSelectCardRpt.addColumn("CD_CORP", "string");
        	this.dsSelectCardRpt.addColumn("ID_SABUN", "string");
        	this.dsSelectCardRpt.addColumn("CD_DEPT", "string");
        	this.dsSelectCardRpt.addColumn("TY_RETIRE", "string");
        	this.dsSelectCardRpt.addColumn("ID_USER", "string");

        	this.dsReportParam = new Dataset();
        	this.dsReportParam.addColumn("IMG", "STRING");
        };

        /************************************************************************
         * 버튼 이벤트
         ************************************************************************/
         /*
          *	조회 버튼
          */
        this.fnSelect = function() {
        	if (!this.fnSelectValidate()) return false;

        	var sToday = this.gfnGetDate().substring(0,6);

        	this.gfnGridBeforeSelect(this.dxGrid);

        	this.dsSelect.clearData();
        	this.dsSelect.addRow();
        	this.dsSelect.setColumn(0, "CD_CORP", this.dsSearch.getColumn(0, "CD_CORP"));
        	this.dsSelect.setColumn(0, "DT_SNAPSHOT", this.dsSearch.getColumn(0, sToday));
        	this.dsSelect.setColumn(0, "AUTH_CD_CORP", "");
        	this.dsSelect.setColumn(0, "GR_SEARCH", this.FormInfo.GR_SEARCH);
        	this.dsSelect.setColumn(0, "TY_AUTH", this.FormInfo.TY_AUTH);
        	this.dsSelect.setColumn(0, "GR_DEPT", this.AuthClient.CD_DEPT);
        	this.dsSelect.setColumn(0, "ID_USER", this.AuthClient.ID_USER);

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
        };

        /*
         *	입력 버튼
         */
        this.fnAdd = function() {

        };

        /*
         *	삭제 버튼
         */
        this.fnDel = function() {

        };

        /*
         *	저장 버튼
         */
        this.fnSave = function() {

        };

        /*
         *	엑셀 버튼
         */
        this.fnExcel = function() {
        	this.gfnExcelExport(this.dxGrid);
        };

        /*
         *	출력 버튼
         */
        this.fnPrint = function() {

        };

        /************************************************************************
         * 서브 버튼 이벤트
         ************************************************************************/
        this.fnselect2nd = function() {
        	if (this.dxGrid.rowcount == 0 || this.dxGrid.currentrow < 0) return false;

        	this.dsSelect2nd.clearData();
        	this.dsSelect2nd.addRow();

        	this.dsSelect2nd.setColumn(0, "CD_CORP", this.dsSearch.getColumn(0, "CD_CORP"));
        	this.dsSelect2nd.setColumn(0, "CD_DEPT", this.dsList.getColumn(this.dsList.rowposition, "CD_DEPT"));
        	this.dsSelect2nd.setColumn(0, "CD_MINDATA", this.minData);
        	this.dsSelect2nd.setColumn(0, "YN_UPDEPT", this.dsSearch.getColumn(0, "YN_UPDEPT"));
        	this.dsSelect2nd.setColumn(0, "GR_SEARCH", this.FormInfo.GR_SEARCH);
        	this.dsSelect2nd.setColumn(0, "TY_AUTH", this.FormInfo.TY_AUTH);
        	this.dsSelect2nd.setColumn(0, "GR_DEPT", this.AuthClient.CD_DEPT);
        	this.dsSelect2nd.setColumn(0, "ID_USER", this.AuthClient.ID_USER);

        	var strSvcId    = "select2nd";
        	var strSvcType  = "grid";
        	var inProc		= "_dsProc";
        	var inData      = "select2nd=dsSelect2nd";
        	var outData     = "dsList2nd=select2nd0";
        	var strArg      = "";
        	var callBackFnc = "fnCallback";

        	this.gfnTransaction( strSvcId , 	// transaction을 구분하기 위한 svc id값
        						strSvcType , 	// transaction을 요청할 구분
        						inProc,			// Procedure 정보 Dataset 이름
        						inData , 		// 입력값으로 보낼 dataset id , a=b형태로 실제이름과 입력이름을 매칭
        						outData , 		// 처리결과값으로 받을 dataset id, a=b형태로 실제이름과 입력이름을 매칭
        						strArg, 		// 입력값으로 보낼 arguments, strFormData="20120607"
        						callBackFnc); // 통신방법 정의 [생략가능]
        };

        /************************************************************************
         * Validate
         ************************************************************************/
        this.fnSelectValidate = function() {
        	var validate = true;
        	var cd_corp = this.ccfCD_CORP.form.CDTextBox.value;
        	if (this.gfnIsNull(cd_corp)) {
        		validate = false;
        		this.fnVaidateCallback = function() {
        			this.ccfCD_CORP.form.CDTextBox.setFocus();
        		}
        		this.gfnAlert("법인코드를 입력하세요.", "fnVaidateCallback");
        	}
        	return validate;
        };

        /************************************************************************
         * 콜백 이벤트
         ************************************************************************/
        /*
         *	콜백 처리
         */
        this.fnCallback = function(svcID, errorCode, errorMsg){
        	if (svcID == "select") {
        		this.gfnGridAfterSelect(this.dxGrid);
        		//this._gfnGridTreeOpen(this.dxGrid, 3);
        		this.minData = 9;

        	} else if (svcID == "select2nd") {
        		var cnt = this.dsList2nd.getCount();
        		var totalCnt = 0;
        		var ty_gubun = 1;
        		if(cnt > 0){
        			totalCnt = this.dsList2nd.getColumn(0, "TOTAL_CNT");
        			ty_gubun = this.dsList2nd.getColumn(0, "TY_GUBUN");
        		}

        		//이전 다음 버튼  control
        		if(this.minData == 9) {	// 1 페이지
        			this.divData.form.divDataRightTop.form.btnPre.set_enable(false);
        			this.divData.form.divDataRightTop.form.btnNext.set_enable(true);
        			if( cnt < 9 || totalCnt == 9){
        				this.divData.form.divDataRightTop.form.btnPre.set_visible(false);
        				this.divData.form.divDataRightTop.form.btnNext.set_visible(false);
        			}else{
        				this.divData.form.divDataRightTop.form.btnPre.set_visible(true);
        				this.divData.form.divDataRightTop.form.btnNext.set_visible(true);
        			}
        		}else if(this.minData > 9 && cnt == 9){	//2페이지 이상
        			this.divData.form.divDataRightTop.form.btnPre.set_enable(true);
        			this.divData.form.divDataRightTop.form.btnNext.set_enable(true);
        		}else if(this.minData > 9 && cnt < 9) {
        			this.divData.form.divDataRightTop.form.btnPre.set_enable(true);
        			this.divData.form.divDataRightTop.form.btnNext.set_enable(false);
        		}

        		this.divData.form.divDataRightTop.form.btnPre.set_visible(false);
        		this.divData.form.divDataRightTop.form.btnNext.set_visible(false);

        		this.divData.form.divDataRightTop.form.btnPre.set_enable(false);
        		this.divData.form.divDataRightTop.form.btnNext.set_enable(false);

        		//사진 및 정보
        		if(cnt > 0){
        			var divTemp = new Div(null, 0, 0, null, null, 0, 0);

        			//var divDataRight = this.divData.form.divDataRight;
        			var divDataRight = this.divData.form.divDataRightTop.form.divDataRight;

        			divDataRight.form.divTemp.destroy();
        			divDataRight.addChild("divTemp", divTemp);
        			var tDiv = divDataRight.form["divTemp"];
        			tDiv.show();

        			var left = 3;
        			var top = 5;
        			var width = 400;	//240;
        			var height = 210;	//320;
        			var dleft = left;
        			var text_width = 170;

        			if (ty_gubun == 1) {
        				width = 400;
        			}
        			else {
        				width = 500;
        			}

        			for(var i=0; i < cnt; i++){
        				var divNew = new Div(null, dleft, top, width, height, null, null);
        				var divId = "divOrg" + i;
        				tDiv.form.addChild(divId, divNew);
        				var nDiv = tDiv.form[divId];
        				divNew.addEventHandler("ondblclick",this.click,this);
        				nDiv.show();

        				var nTop = 5;
        				var iHeight = 180;
        				var imageViewerNew = new ImageViewer(null, 5, nTop, 150, iHeight, null, null);	//200
        				imageViewerNew.set_stretch( "fixaspectratio" );

        				imageViewerNew.addEventHandler("ondblclick",this.click,this);

        				nDiv.form.addChild(divId+"IMG", imageViewerNew);

        				if (!this.gfnIsNull(this.dsList2nd.getColumn(i,"ID_SABUN_PIC"))) {

        					this.img = nDiv.form[divId+"IMG"];

        					this.dsImageFile.clearData();
        					this.dsImageFile.addRow();
        					this.dsImageFile.setColumn(0, "filepath", "/DA/BASEINFO/");
        					this.dsImageFile.setColumn(0, "filename", this.dsList2nd.getColumn(i, "ID_SABUN_PIC"));

        					// 서버 이미지파일 base64 로 받아오기
        					var strSvcId    = "imagefile";
        					var strSvcType  = "file/imageFile";
        					var inProc		= "";
        					var inData      = "input=dsImageFile";
        					var outData     = "dsImageFile=input";
        					var strArg      = "";
        					var callBackFnc = "fnCallback";

        					this.gfnTransaction( strSvcId , 	// transaction을 구분하기 위한 svc id값
        										strSvcType , 	// transaction을 요청할 구분
        										inProc,			// Procedure 정보 Dataset 이름
        										inData , 		// 입력값으로 보낼 dataset id , a=b형태로 실제이름과 입력이름을 매칭
        										outData , 		// 처리결과값으로 받을 dataset id, a=b형태로 실제이름과 입력이름을 매칭
        										strArg, 			// 입력갑스로 보낼 arguments, strFormData="20120607"
        										callBackFnc, false);
        				}

        				nDiv.form[divId+"IMG"].show();

        				//nTop += iHeight + 5;
        				nTop += nTop + 5;
        				this.setEdit(nDiv, divId + "DS_HNAME" + i, this.dsList2nd.getColumn(i, "DS_HNAME"), text_width, nTop);
        				nTop = this.setEdit(nDiv, divId + "ID_SABUN" + i, this.dsList2nd.getColumn(i, "ID_SABUN"), 285, nTop);

        				nTop = this.setEdit(nDiv, divId + "DS_POSITION" + i, this.dsList2nd.getColumn(i, "DS_POSITION"), text_width, nTop, 300);
        				nTop = this.setEdit(nDiv, divId + "DS_DEPT" + i, this.dsList2nd.getColumn(i, "DS_DEPT"), text_width, nTop, 300);
        				//nTop = this.setEdit(nDiv, divId + "DS_POSITION" + i, this.dsList2nd.getColumn(i, "DS_POSITION"), 105, nTop, 120);

        				nTop = this.setEdit(nDiv, divId + "DS_OFFICEPHONE" + i, this.dsList2nd.getColumn(i, "DS_OFFICEPHONE"),text_width, nTop);
        				nTop = this.setEdit(nDiv, divId + "DS_HANDPHONE" + i, this.dsList2nd.getColumn(i, "DS_HANDPHONE"), text_width, nTop);
        				nTop = this.setEdit(nDiv, divId + "DS_EMAIL" + i, this.dsList2nd.getColumn(i, "DS_EMAIL"), text_width, nTop, 220);
        				nTop = this.setEdit(nDiv, divId + "DS_BUSINESS" + i, this.dsList2nd.getColumn(i, "DS_BUSINESS"), text_width, nTop, 310); // 5

        				nTop = this.setEdit(nDiv, divId + "PERSCARD" + i, "인사기록카드", text_width, nTop); // 5

        				dleft += width;
        // 				if( i == 2 || i == 5){
        // 					dleft = left;
        // 					top += height + 10;
        // 				}

        				if (ty_gubun == 1) {
        					if( i == 2 || i == 5 || i == 8 || i == 11 || i == 14 || i == 17){
        						dleft = left;
        						top += height + 10;
        					}
        				}
        				else {
        					if( i == 1 || i == 3 || i == 5 || i == 7 || i == 9 || i == 11){
        						dleft = left;
        						top += height + 10;
        					}
        				}
        			}

        			//우측 DIV에 스크롤이 안생겨서 넣음
        			this.divData.form.divDataRightTop.form.divDataRight.form.divTemp.set_formscrollbartype("fixed");

        		}else{
        			this.minData = this.minData - 9;
        			var divDataRight = this.divData.form.divDataRightTop.form.divDataRight;
        			this.divData.form.divDataRightTop.form.divDataRight.form.divTemp.set_visible(false);
        		}

        	} else if (svcID == "imagefile") {
        		this.img.set_image(this.dsImageFile.getColumn(0, "filereturn"));
        	} else if (svcID == "selectRpt") {
        		if (this.dsRptList1.rowcount > 0) {
        			var inProc		= "_dsProc";
        			var inParam 	= "params=dsRptList1 params1=dsRptList2 params2=dsRptList3 params3=dsRptList4 params4=dsRptList5 params5=dsRptList6 params6=dsRptList7 params7=dsRptList8 params8=dsRptList9 params9=dsRptList10 params10=dsRptList11 params11=dsRptList12 params12=dsRptList13 params13=dsRptList14 param14=dsReportParam";	// 조회SP이외 사용할 정보
        			var inData      = "";//"reportCard=dsSelectCardRpt";
        			//var reportpath  = "/da/daa/DAA_PERSCARD_NEW.ozr";
        			var reportpath  = "/da/daa/DAA_PERSCARD_CBC.ozr";

        			//gfnOpenReport(this, reportpath, inProc, inParam, inData);
        			gfnOpenReport(this, reportpath, inProc, inParam, inData, false, '인사기록카드');
        		} else {
        			this.gfnAlert("출력할 자료가 없습니다.");
        			return;
        		}
        	}
        };

        this.setEdit = function (div, id, value, left, top, width)
        {
        	width = width == null ? 200 : width;

        	if (value == "인사기록카드")
        	{
        		if(this.FormInfo.GR_SEARCH != 9){
        			var editNew = new Button("btn", left, top+3, 90, 22, null, null);
        			editNew.addEventHandler("onclick",this.click3,this);
        			editNew.set_text(value);
        			div.form.addChild(id, editNew);
        			var edit = div.form[id];
        			//edit.set_readonly(true);
        			//edit.set_value(value);
        			edit.show();
        		}
        	}
        	else
        	{
        		var editNew = new Edit(null, left, top, width, 21, null, null);
        		div.form.addChild(id, editNew);
        		var edit = div.form[id];
        		edit.set_readonly(true);
        		edit.set_value(value);
        		edit.addEventHandler("oneditclick",this.click2,this);
        		edit.show();
        	}

        	return top += 21;
        };

        this.setEdit2 = function (div, id, value, left, top, width)
        {
        	width = width == null ? 200 : width;
        	var editNew = new Edit(null, left, top, width, 21, null, null);
        	//editNew.set_taborder(2);
        	div.form.addChild(id, editNew);
        	var edit = div.form[id];
        	edit.set_readonly(true);
        	edit.set_value(value);
        	//edit.addEventHandler("oneditclick",this.click2,this);

        	if (value == "인사기록카드")
        	{
        		if(this.FormInfo.GR_SEARCH != 9){
        			edit.addEventHandler("oneditclick",this.click3,this);
        		}
        	}
        	else
        	{
        		edit.addEventHandler("oneditclick",this.click2,this);
        	}

        	edit.show();

        	return top += 21;
        };

        /************************************************************************
         * 코드파인드 이벤트
         ************************************************************************/
         this.fnBeforeUserDataSetParam = function(id, dsUserParam, nrow) {
        	if (id == "ccfCD_CORP") {
        		dsUserParam.setColumn(nrow, "GR_SEARCH",  this.FormInfo.GR_SEARCH);	// 사용자 권한
        		dsUserParam.setColumn(nrow, "ID_USER", this.AuthClient.ID_USER);
        		dsUserParam.setColumn(nrow, "CD_CORP", this.AuthClient.CD_CORP);
        	}
        	return true;
        }

         /************************************************************************
         * 그리드 이벤트
         ************************************************************************/
        this.fnGrid_RowCellChanged = function(obj,e)
        {
            if ((obj.oldrow > -1 && obj.oldrow == e.row)
        		|| (obj.oldrow == -1 && e.oldrow != e.row)) {
        		this.minData = 9;
        		this.fnselect2nd();

        		obj.oldrow = -1;

        	}
        };

        /************************************************************************
         * 기타 이벤트
         ************************************************************************/
         this.divData_ondragmove = function(obj,e){
        	if(e.userdata == "splitter") {
        		this.divData.form.divSplitter.set_left(e.clientx);
        		this.divData.form.resetScroll();
        	}
        };

        this.divData_divSplitter_ondrag = function(obj,e){
        	e.set_userdata("splitter");
        	return true;
        };

        this.divData_divDataRightTop_btnPre_onclick = function(obj,e)
        {
        	this.minData = this.minData - 9;
        	if(this.minData < 9){
        		this.minData = 9;
        	}

        	this.fnselect2nd();
        };

        this.divData_divDataRightTop_btnNext_onclick = function(obj,e)
        {
        	this.minData = this.minData + 9;
        	this.fnselect2nd();
        };
        this.click2= function(obj,e){

        	this.dblClickCnt +=1;

        	if(this.editId == obj.id){	//더블클릭
        		if(this.dblClickCnt == 1){
        			this.setTimer(obj.id,1000);
        		}if(this.dblClickCnt == 2){
        			if(this.FormInfo.GR_SEARCH != 9){
        				this.click(obj,e);
        			}
        		}
        	}else{		//다른 edit 클릭
        		this.killTimer(this.editId);
        		this.editId = obj.id;
        		this.setTimer(obj.id,1000);
        	};

        };

        this.click = function(obj,e){

        	//var noDiv = obj.id.substring(6,7);
        	var noDiv = obj.parent.parent.id.replace("divOrg","");

        	var parentObj = obj.parent;

        	var compArr = parentObj.components;

        	//사번 값 추출
        	var sabun = "";
        	for( var i=0;i< compArr.length;i++){
        		var comp = compArr[i];
        		if(comp.id == ("divOrg"+noDiv+"ID_SABUN"+noDiv)){
        			sabun = comp.value;
        		}
        	}

        	var param = {
        		  CD_CORP  : this.ccfCD_CORP.form.CDTextBox.value
        		, DS_CORP  : this.ccfCD_CORP.form.DSTextBox.value
        		, ID_SABUN : sabun
        		, CD_PM : "PM"     //20220527 임동빈 요청[134134]으로 추가
        	};
        	//this.gfnFormOpenNonAuth(this.FormInfo.CD_MODULE, "DAA_BASEINFO", "", param , this.width, this.height);
        	this.gfnFormOpen(this.FormInfo.CD_MODULE, "DAA_BASEINFO", "", param , 1350, 860);

        };

        this.DAA_ORGANSYSTEM_ontimer = function(obj,e)
        {
        	this.killTimer(this.editId);
        	this.dblClickCnt = 0;
        };

        this.dsSearch_onvaluechanged = function(obj,e){
        	//trace("dsSearch_onvaluechanged");

        	if(e.oldvalue != e.newvalue) {
        		//trace("11111");

        		this.gfnSetFormStatus(this);	// 폼상태 초기화
        		this.gfnGridClear(this.dxGrid);


        		var objTargetDiv = this.divData.form.divDataRightTop.form.divDataRight.form.divTemp;
        		for(var i=0;i<7;i++){
        			var arrComp = objTargetDiv.form.components;
        			if(arrComp.length == 0){
        				break;
        			}
        			this.fn_componentsRemove(objTargetDiv, arrComp);
        		}

        	}
        };

        //동적으로 추가했던 Object 삭제하기
        this.fn_componentsRemove = function(objParent, arrComp){
        	for (var i = (arrComp.length-1) ; i >= 0  ; i--){
        		var objComp = arrComp[i];

        		var objRmv = objParent.removeChild(objComp.name);
        		if(objRmv != null){
        			objRmv.destroy();
        			objRmv = null;
        		}
        	}
        }


        this.click3 = function(obj,e)
        {
        	//var noDiv = obj.id.substring(6,7);
        	var noDiv = obj.parent.parent.id.replace("divOrg","");
        	var parentObj = obj.parent;
        	var compArr = parentObj.components;

        	this.dsReportParam.clearData();
        	this.dsReportParam.addRow();

        	//사번 값 추출
        	var sabun = "";
        	var percard = "";
        	var img = "";
        	for( var i=0;i< compArr.length;i++){
        		var comp = compArr[i];
        		if(comp.id == ("divOrg"+noDiv+"ID_SABUN"+noDiv)){
        			sabun = comp.value;
        		}
        		if(comp.id == ("divOrg"+noDiv+"IMG")){
        			img = comp.image;
        		}
        	}
        	this.dsReportParam.setColumn(0, "IMG", img);	//this.dsImageFile.getColumn(0, "filereturn"));

        	this.dsSelectCardRpt.clearData();
        	this.dsRptList1.clearData();
        	this.dsRptList2.clearData();
        	this.dsRptList3.clearData();
        	this.dsRptList4.clearData();
        	this.dsRptList5.clearData();
        	this.dsRptList6.clearData();
        	this.dsRptList7.clearData();
        	this.dsRptList8.clearData();
        	this.dsRptList9.clearData();
        	this.dsRptList10.clearData();
        	this.dsRptList11.clearData();
        	this.dsRptList12.clearData();
        	this.dsRptList13.clearData();
        	this.dsRptList14.clearData();

        	var nrow = this.dsSelectCardRpt.addRow();
        	this.dsSelectCardRpt.setColumn(0, "CD_CORP", this.ccfCD_CORP.form.CDTextBox.value);
        	this.dsSelectCardRpt.setColumn(0, "ID_SABUN", sabun);
        	this.dsSelectCardRpt.setColumn(0, "CD_DEPT", "");
        	this.dsSelectCardRpt.setColumn(0, "TY_RETIRE", "");
        	this.dsSelectCardRpt.setColumn(0, "ID_USER", this.AuthClient.ID_USER);

        // 	var strSvcId    = "selectRpt";
        // 	var strSvcType  = "select";
        // 	var inProc		= "_dsProc";
        // 	var inData      = "reportCard=dsSelectCardRpt";
        // 	var outData     = "dsRptList1=reportCard0 dsRptList2=reportCard1 dsRptList3=reportCard2 dsRptList4=reportCard3 dsRptList5=reportCard4 dsRptList6=reportCard5 dsRptList7=reportCard6 dsRptList8=reportCard7 dsRptList9=reportCard8 dsRptList10=reportCard9 dsRptList11=reportCard10 dsRptList12=reportCard11 dsRptList13=reportCard12 dsRptList14=reportCard13";
        // 	var strArg      = "";
        // 	var callBackFnc = "fnCallback";
        //
        //     this.gfnTransaction(strSvcId,       // transaction을 구분하기 위한 svc id값
        //                         strSvcType,     // transaction을 요청할 구분
        // 						inProc,         // Procedure 정보 Dataset 이름
        // 						inData,         // 입력값으로 보낼 dataset id, a=b형태로 실제이름과 입력이름을 매칭
        // 						outData,        // 처리결과값으로 받을 dataset id, a=b형태로 실제이름과 입력이름을 매칭
        // 						strArg, 		// 입력갑스로 보낼 arguments, strFormData="20120607"
        // 						callBackFnc);   // 통신방법 정의 [생략가능]

        	var inProc		= "_dsProc";
        	var inParam 	= "params=dsReportParam";	// 조회SP이외 사용할 정보
        	var inData      = "reportCard=dsSelectCardRpt";
        	var reportpath  = "/da/daa/DAA_PERSCARD_CBC.ozr";
        	//var reportpath  = "/da/daa/DAA_PERSCARD_NEW.ozr";

        	gfnOpenReport(this, reportpath, inProc, inParam, inData);
        };

        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.DAA_ORGANSYSTEM_onload,this);
            this.addEventHandler("ontimer",this.DAA_ORGANSYSTEM_ontimer,this);
            this.divData.addEventHandler("ondragmove",this.divData_ondragmove,this);
            this.divData.form.divSplitter.addEventHandler("ondrag",this.divData_divSplitter_ondrag,this);
            this.divData.form.divDataRightTop.form.btnPre.addEventHandler("onclick",this.divData_divDataRightTop_btnPre_onclick,this);
            this.divData.form.divDataRightTop.form.btnNext.addEventHandler("onclick",this.divData_divDataRightTop_btnNext_onclick,this);
            this.dsSearch.addEventHandler("onvaluechanged",this.dsSearch_onvaluechanged,this);
        };
        this.loadIncludeScript("DAA_ORGANSYSTEM_MNG.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
