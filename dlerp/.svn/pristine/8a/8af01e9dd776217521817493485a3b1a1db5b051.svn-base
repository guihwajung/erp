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
            this.set_titletext("평형도면관리");
            if (Form == this.constructor)
            {
                this._setFormPosition(1280,720);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("dsList", this);
            obj._setContents("");
            this.addChild(obj.name, obj);


            obj = new Dataset("_dsProc", this);
            obj._setContents("<ColumnInfo><Column id=\"TARGET\" type=\"STRING\" size=\"256\"/><Column id=\"SP\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"TARGET\">select</Col><Col id=\"SP\">DBZPR_SIZEINFOBLUEPRINT_SELECT</Col></Row><Row><Col id=\"TARGET\">save</Col><Col id=\"SP\">DBZPR_SIZEINFOBLUEPRINT_SAVE</Col></Row><Row><Col id=\"TARGET\">detail</Col><Col id=\"SP\">DBZPR_SIZEINFOBLUEPRINT_DETAIL</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsTY_GUBUN", this);
            obj._setContents("");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsSearch", this);
            obj._setContents("<ColumnInfo><Column id=\"CD_ACNTUNIT\" type=\"STRING\" size=\"256\"/><Column id=\"DS_ACNTUNIT\" type=\"STRING\" size=\"256\"/><Column id=\"NO_SIZE\" type=\"bigdecimal\" size=\"256\"/><Column id=\"TY_TYPE\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row/></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsDeleteFile", this);
            obj._setContents("<ColumnInfo><Column id=\"filepath\" type=\"STRING\" size=\"256\"/><Column id=\"filename\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsList2", this);
            obj._setContents("");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsList3", this);
            obj._setContents("");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsImageFile", this);
            obj._setContents("<ColumnInfo><Column id=\"filepath\" type=\"STRING\" size=\"256\"/><Column id=\"filename\" type=\"STRING\" size=\"256\"/><Column id=\"filereturn\" type=\"STRING\" size=\"10000\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new FileDownTransfer("FileDownTransfer00", this);
            this.addChild(obj.name, obj);


            obj = new FileUpTransfer("FileUpTransfer00", this);
            this.addChild(obj.name, obj);


            obj = new FileDialog("fdg00", this);
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Div("divSearch","0.0","10.0",null,"46.0","0",null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_cssclass("div_SEARCH_Bg");
            this.addChild(obj.name, obj);

            obj = new Static("staCD_SITE","0.0","10.0","92.0","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("1");
            obj.set_text("현장코드");
            obj.set_cssclass("sta_WF_SchLabelE");
            this.divSearch.addChild(obj.name, obj);

            obj = new Div("ccfCD_ACNTUNIT","staCD_SITE:0.0","10.0","300","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.getSetter("CodeFindName").set("DBX_CFMAINSITE");
            obj.getSetter("CDTextWidth").set("70");
            obj.set_taborder("0");
            obj.set_url("cmm::cmmCodeFind.xfdl");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("staNO_SIZE","ccfCD_ACNTUNIT:0.0","10.0","92.0","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("0");
            obj.set_text("평형관리");
            obj.set_textAlign("center");
            obj.set_cssclass("sta_WF_SchLabel");
            this.divSearch.addChild(obj.name, obj);

            obj = new Div("ccfNO_SIZE","staNO_SIZE:0.0","10.0","300","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.getSetter("CodeFindName").set("DBX_CFSIZETYPE");
            obj.getSetter("CDTextWidth").set("70");
            obj.set_taborder("0");
            obj.set_url("cmm::cmmCodeFind.xfdl");
            this.divSearch.addChild(obj.name, obj);

            obj = new Div("divData","0","divSearch:10",null,null,"0","0",null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_cssclass("div_DATA_Bg");
            this.addChild(obj.name, obj);

            obj = new Div("divSplitter","34%","0","5","100%",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("1");
            obj.set_background("skyblue");
            obj.set_cursor("ew-resize");
            this.divData.addChild(obj.name, obj);

            obj = new Div("divDataLeft","0","0",null,null,"divSplitter:5","0",null,null,null,null,this.divData.form);
            obj.set_taborder("0");
            this.divData.addChild(obj.name, obj);

            obj = new Static("sta01","0","0","70","20",null,null,null,null,null,null,this.divData.form.divDataLeft.form);
            obj.set_taborder("0");
            obj.set_text("평형관리");
            obj.set_cssclass("sta_TITLE_Bg");
            this.divData.form.divDataLeft.addChild(obj.name, obj);

            obj = new Grid("objGrid","0","sta01:5",null,null,"0","0",null,null,null,null,this.divData.form.divDataLeft.form);
            obj.set_taborder("0");
            obj._setContents("");
            this.divData.form.divDataLeft.addChild(obj.name, obj);

            obj = new Div("divDataRight","divSplitter:5","0",null,null,"0","0",null,null,null,null,this.divData.form);
            obj.set_taborder("0");
            this.divData.addChild(obj.name, obj);

            obj = new Static("sta02","0","0","100%","22",null,null,null,null,null,null,this.divData.form.divDataRight.form);
            obj.set_taborder("0");
            obj.set_text("도면정보");
            obj.set_cssclass("sta_TITLE_Bg");
            this.divData.form.divDataRight.addChild(obj.name, obj);

            obj = new ImageViewer("ImageViewer","0","sta02:5",null,null,"0","0",null,null,null,null,this.divData.form.divDataRight.form);
            obj.set_taborder("1");
            obj.set_stretch("fixaspectratio");
            this.divData.form.divDataRight.addChild(obj.name, obj);

            obj = new Button("btnDelete_Click",null,"3","60","24","0",null,null,null,null,null,this.divData.form.divDataRight.form);
            obj.set_taborder("5");
            obj.set_text("삭제");
            this.divData.form.divDataRight.addChild(obj.name, obj);

            obj = new Button("btnAdd_Click",null,"3","60","24","btnDelete_Click:5",null,null,null,null,null,this.divData.form.divDataRight.form);
            obj.set_taborder("4");
            obj.set_text("등록");
            this.divData.form.divDataRight.addChild(obj.name, obj);

            obj = new Button("btnZoomOut_Click",null,"3","60","24","btnAdd_Click:5",null,null,null,null,null,this.divData.form.divDataRight.form);
            obj.set_taborder("3");
            obj.set_text("축소");
            this.divData.form.divDataRight.addChild(obj.name, obj);

            obj = new Button("btnZoomIn_Click",null,"3","60","24","btnZoomOut_Click:5",null,null,null,null,null,this.divData.form.divDataRight.form);
            obj.set_taborder("2");
            obj.set_text("확대");
            this.divData.form.divDataRight.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this
            obj = new Layout("default","",this._adjust_width,this._adjust_height,this,function(p){});
            this.addLayout(obj.name, obj);
            
            // BindItem Information
            obj = new BindItem("item0","divSearch.form.ccfCD_ACNTUNIT.form.CDTextBox","value","dsSearch","CD_ACNTUNIT");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item00","divSearch.form.ccfCD_ACNTUNIT.form.DSTextBox","value","dsSearch","DS_ACNTUNIT");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item01","divSearch.form.ccfNO_SIZE.form.CDTextBox","value","dsSearch","NO_SIZE");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item02","divSearch.form.ccfNO_SIZE.form.DSTextBox","value","dsSearch","TY_TYPE");
            this.addChild(obj.name, obj);
            obj.bind();
            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {
            this._addPreloadList("fdl","cmm::cmmCodeFind.xfdl");
        };
        
        // User Script
        this.registerScript("DBZ_SIZEINFOBLUEPRINT.xfdl", function() {
        this.objApp = this.gfnGetApplication();
        /************************************************************************************************
         * FORM 변수 선언 영역
         ***********************************************************************************************/
         //this.filepath = "/DB/DBZ/SIZEINFO/";
         this.fileConfig = {};
         this.fileuploads = {};

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


        	this.dsSearch.setColumn(0, "CD_ACNTUNIT", this.gfnNvl(this.objApp.DB_SPACE01,""));
        	this.ccfCD_ACNTUNIT.form.DSTextBox.set_value(this.gfnNvl(this.objApp.DB_SPACE02,""));

        	if( this.FormInfo.ID_GROUP == "6" || this.FormInfo.ID_GROUP == "C" ){
        		this.dsSearch.setColumn(0, "CD_ACNTUNIT", this.AuthClient.CD_DEPT);
        		this.ccfCD_ACNTUNIT.form.DSTextBox.set_value(this.AuthClient.DS_DEPT);
        		this.ccfCD_ACNTUNIT.form.set_readonly(true);

        		if(this.gfnIsNull(this.getOwnerFrame().CF_CD_SITE) ) {
        			this.FormBtns.Select.click();
        		}
        	}

        	// 팝업으로 오픈시 조회
        	if(!this.gfnIsNull(this.getOwnerFrame().CD_SITE)) {
        		this.dsSearch.setColumn(0, "CD_ACNTUNIT", this.getOwnerFrame().CD_SITE);
        		this.ccfCD_ACNTUNIT.form.DSTextBox.set_value(this.getOwnerFrame().DS_SITE);
        		this.dsSearch.setColumn(0, "NO_SIZE", this.getOwnerFrame().DS_SIZE);
        		this.ccfNO_SIZE.form.DSTextBox.set_value(this.getOwnerFrame().DS_TYPE);
        		this.FormBtns.Select.click();
        	}

        	// 파일설정
        	this.fileConfig = this.gfnGetFileConfig();
        	this.fileConfig.allowTypes = ["jpg","jpeg","gif","png"]; // 넥사브라우저 전용, 웹은 적용불가
        	this.FileUpTransfer00.clearFileList();

        	this.filepath = "/DB/DBZ/SIZEINFO/" + this.dsSearch.getColumn(0, "CD_ACNTUNIT") + "/" + this.dsSearch.getColumn(0, "NO_SIZE");
        	trace("zxzvxcvxczvxzc>>>" + this.dsSearch.getColumn(0, "NO_SIZE"));

        };

        /************************************************************************
         * 버튼 설정 : 화면(Tab) 전환시 마다 호출
         ************************************************************************/
        this.fnSetButton = function() {
        };

        /************************************************************************
         * 확장 버튼 : 화면별 버튼 설정 ID, function 연결
         ************************************************************************/
        this.fnSetExtendButton = function() {
        	this.btnFormButton1 = this.gfnFormButtonAdd("WorkBtn1", "fnWorkBtn");  // 평형관리
        	this.divData.form.divDataRight.form.ImageViewer.set_image(null);
        };

        /************************************************************************
         * 변수 선언
         ************************************************************************/
        this.fnSetVariable = function() {
        	this.vWidth = this.divData.form.divDataRight.form.ImageViewer.getOffsetWidth();
        	this.vHeight = this.divData.form.divDataRight.form.ImageViewer.getOffsetHeight();
        	this.ccfCD_ACNTUNIT = this.divSearch.form.ccfCD_ACNTUNIT;
        	this.ccfNO_SIZE = this.divSearch.form.ccfNO_SIZE;
        	this.dxGrid = this.divData.form.divDataLeft.form.objGrid;
        };

        /************************************************************************
         * 이벤트 설정
         ************************************************************************/
        this.fnSetEvent = function() {
        	this.ccfCD_ACNTUNIT.BeforeUserDataSetParam = "fnBeforeUserDataSetParam";
        	this.ccfCD_ACNTUNIT.AfterCDTextChanged = "fnAfterCDTextChanged";

        	this.ccfNO_SIZE.BeforeUserDataSetParam = "fnBeforeUserDataSetParam";
        	this.ccfNO_SIZE.AfterCDTextChanged = "fnAfterCDTextChanged";

        	this.gfnGridInit(this.dxGrid, this.dsList, "DB", "DBZ_SIZEINFO");
        	this.dxGrid.set_selecttype("cell");

        	this.dxGrid.addEventHandler("onselectchanged", this.fnGrid_RowCellChanged, this);
        }

        /************************************************************************
         * 파라미터 설정
         ************************************************************************/
        this.fnSetParameter = function() {

        	this.dsSelect = new Dataset();
        	this.dsSelect.addColumn("CD_ACNTUNIT", "string");
        	this.dsSelect.addColumn("NO_SIZE", "bigdecimal");
        	this.dsSelect.addColumn("TY_TYPE", "string");

        // 	this.dsSave = new Dataset();
        // 	this.dsSave.addColumn("CD_ACNTUNIT", "string");
        // 	this.dsSave.addColumn("NO_SIZE", "bigdecimal");
        // 	this.dsSave.addColumn("TY_TYPE", "string");
        // 	this.dsSave.addColumn("PIC_BLUEPRINT", "blob");

        	this.dsSave = new Dataset();
        	this.dsSave.addColumn("CD_ACNTUNIT", "string");
        	this.dsSave.addColumn("NO_SIZE", "bigdecimal");
        	this.dsSave.addColumn("TY_TYPE", "string");
        	this.dsSave.addColumn("PIC_BLUEPRINTNM", "string");

        	this.dsDetail = new Dataset();
        	this.dsDetail.addColumn("CD_ACNTUNIT", "string");
        	this.dsDetail.addColumn("NO_SIZE", "bigdecimal");
        	this.dsDetail.addColumn("TY_TYPE", "string");
        };

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
        	this.dsSelect.setColumn(0, "CD_ACNTUNIT", this.dsSearch.getColumn(0,"CD_ACNTUNIT"));
        	this.dsSelect.setColumn(0, "NO_SIZE", this.dsSearch.getColumn(0,"NO_SIZE"));
        	this.dsSelect.setColumn(0, "TY_TYPE", this.dsSearch.getColumn(0,"TY_TYPE"));

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
        }

        /*
         *	저장 버튼
         */
        this.fnSave = function() {
        	if (!this.gfnGridValidate(this.dxGrid)) return;
        	this.dxGrid.updateToDataset();
        	this.dsSave.clearData();
        	for (var i = 0; i < this.dsList.rowcount; i++) {
        		var flag = this.gfnGetFlag(this.dsList, i);
        		if( flag == "I" || flag == "U" || flag == "D" ){
        			var nrow = this.dsSave.addRow();
        			this.dsSave.setColumn(nrow, "CD_ACNTUNIT", this.dsSearch.getColumn(0, "CD_ACNTUNIT"));
        			this.dsSave.setColumn(nrow, "NO_SIZE", this.dsList.getColumn(i, "NO_SIZE").trim() == "" ? 0 : this.dsList.getColumn(i, "NO_SIZE"));
        			this.dsSave.setColumn(nrow, "TY_TYPE", this.dsList.getColumn(i, "TY_TYPE"));
        			this.dsSave.setColumn(nrow, "PIC_BLUEPRINT", this.dsList.getColumn(i, "PIC_BLUEPRINT"));
        		}
        	}
        	if (this.dsSave.rowcount == 0 ) return;

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
        						strArg, 			// 입력갑스로 보낼 arguments, strFormData="20120607"
        						callBackFnc); // 통신방법 정의 [생략가능]
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


        /*
         * 파일 삭제 버튼
         */
        this.fnDelImage = function (){
        	if(!this.gfnGridIsRow(this.dxGrid)) return;
        	this.divData.form.divDataRight.form.ImageViewer.set_image(null);
        	this.dsList.setColumn(this.dsList.rowposition, "PIC_BLUEPRINT","");
        	this.gfnSetFormStatus(this, "U");
        };

        /*
         * 이미지 파일 다운로드
         */
        this.fnDownImage = function() {
        	if(!this.gfnGridIsRow(this.dxGrid)) return;
        	this.fileConfig.downloadUrl = "/file/downloadFile.do";
        	var encodeFileName = encodeURIComponent(this.dsList.getColumn(this.dsList.rowposition, "PIC_BLUEPRINT"));
        	var surl = this.fileConfig.host+ this.fileConfig.downloadUrl; // + encodeFileName;
        	this.FileDownTransfer00.set_url(surl);

        	var key = this.dsList.getColumn(this.dsList.rowposition, "CD_ACNTUNIT") + "/" + this.dsList.getColumn(this.dsList.rowposition, "NO_SIZE");
        	if (!this.gfnIsNull(this.gfnTrim(this.dsList.getColumn(this.dsList.rowposition, "TY_TYPE")))) {
        		key += "/" + this.gfnTrim(this.dsList.getColumn(this.dsList.rowposition, "TY_TYPE"));

        	}

        	if( this.dsList.getColumn(this.dsList.rowposition, "YN_IMG_CHANGE") == "N"){
        		this.FileDownTransfer00.setPostData("path", "\\DL\\SIZEINFO\\"+key);

        	} else {
        		this.FileDownTransfer00.setPostData("path", "\\DB\\SIZEINFO\\"+key);
        	}
        	this.FileDownTransfer00.setPostData("fileName", encodeFileName);
        	if( system.navigatorname =="nexacro"){
        		this.FileDownTransfer00.set_downloadfilename(this.dsList.getColumn(this.dsList.rowposition, "PIC_BLUEPRINT"));
        	}
        	this.FileDownTransfer00.download();
        };

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
        		this.fnVaidateCallback = function() {
        			this.ccfCD_ACNTUNIT.form.CDTextBox.setFocus();
        		}
        		this.gfnAlert("현장코드를 입력하셔야 합니다.", "fnVaidateCallback"); // gfnAlert = function (sMsgId, arrArg, sPopId, sCallback)
        	}
        	return validate;
        }
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
        		this.divData.form.divDataRight.form.ImageViewer.resize(this.vWidth, this.vHeight);
        		this.fnDetial();
        		trace("dsList>>>" + this.dsList.saveXML());
        	}
        	else if(svcID == "save") {
        		if (errorCode == 0) {
        			this.FormBtns.Select.click();
        		} else {
        			this.gfnAlert(errorMsg);
        		}
        	}
        	else if (svcID == "detial")
        	{
        		trace("dsList2>>>" + this.dsList2.saveXML());
        		this.fnImageView();
        	}
        // 	else if (svcID == "imagefileView")
        // 	{
        //
        // 		trace("dsList3>>>" + this.dsList3.saveXML());
        // 		trace("dsImageFile>>>" + this.dsImageFile.saveXML());
        // 		this.divData.form.divDataRight.form.ImageViewer.set_image(this.dsImageFile.getColumn(0, "filereturn"));
        // 	}
        	else if (svcID == "imagefile")
        	{
        		trace("dsImageFile>>>" + this.dsImageFile.saveXML());
        		this.divData.form.divDataRight.form.ImageViewer.set_image(this.dsImageFile.getColumn(0, "filereturn"));
        	}
        }

        /************************************************************************
         * 코드파인드 이벤트
         ************************************************************************/
        /*
         * 코드파인드 변경전
         */
        this.fnBeforeUserDataSetParam = function(id, dsUserParam, nrow) {
        	if (id == "ccfCD_ACNTUNIT") {
        		dsUserParam.setColumn(nrow, "CD_AUTHDEPT", this.AuthClient.CD_DEPT);
        	}else if (id == "ccfNO_SIZE") {
        		dsUserParam.setColumn(nrow, "CD_ACNTUNIT", this.dsSearch.getColumn(0, "CD_ACNTUNIT"));
        	}
        	return true;
        };

        /*
         * 코드파인드 변경후
         */
        this.fnAfterCDTextChanged = function(id, codeFindData) {
        	if (id == "ccfCD_ACNTUNIT") {
        		var arr = codeFindData;
        		if(arr.length > 0) {
        			this.objApp.DB_SPACE01 = this.dsSearch.getColumn(0, "CD_ACNTUNIT");
        			this.objApp.DB_SPACE02 = this.ccfCD_ACNTUNIT.form.DSTextBox.value;
        		}
        	}

        	if (id == "ccfNO_SIZE") {
        		var arr = codeFindData;
        		if(arr.length > 0) {
        			//this.dsSearch.setColumn(0, "NO_SIZE", arr[0]["NO_SIZE"]);
        			this.ccfNO_SIZE.form.DSTextBox.set_value(arr[0]["TY_GUBUN"]);
        		}
        	}
        };

        /************************************************************************
         * 그리드 이벤트
         ************************************************************************/
        this.fnGrid_RowCellChanged = function(obj,e)
        {
            if (e.oldrow != e.row) {
        		//this.fnSelectImage(); //도면정보이미지조회
        		this.fnDetial();
        	}
        };

        /************************************************************************
         * 기타 이벤트
         ************************************************************************/
        /*
         *	조회 조건 변경시 초기화
         */
         this.dsSearch_onvaluechanged = function(obj,e)
        {
        	if(e.oldvalue != e.newvalue) {
        		this.gfnSetFormStatus(this);	// 폼상태 초기화
        		this.gfnGridClear(this.dxGrid);
        		this.divData.form.divDataRight.form.ImageViewer.set_image(null);
        	}
        };

        this.divData_ondragmove = function(obj,e)
        {
        	if(e.userdata == "splitter") {
        		this.divData.form.divSplitter.set_left(e.clientx);
        		this.divData.form.resetScroll();
        	}
        };

        this.divData_divSplitter_ondrag = function(obj,e)
        {
        	e.set_userdata("splitter");
        	return true;
        };

        //확장버튼
        this.fnWorkBtn = function(obj,e) {
        	if(!this.gfnGridIsRow(this.dxGrid)) return;

        	// 평형관리
        	if(obj.id == "btnExt_WorkBtn1"){
        		var param = {};
        		param.CF_CDSITE = this.dsSearch.getColumn(0, "CD_ACNTUNIT");
        		param.CF_DSSITE = this.dsSearch.getColumn(0, "DS_ACNTUNIT");
        		this.gfnFormOpen(this.FormInfo.CD_MODULE, "DBZ_SIZEINFO", "", param);
        	}
        };

        //도면정보이미지조회
        this.fnDetial = function(){

        	if (!this.fnSelectValidate()) return false;

        	this.gfnGridBeforeSelect(this.dxGrid);
        	this.dsDetail.clearData();
        	this.dsDetail.addRow();
        	this.dsDetail.setColumn(0, "CD_ACNTUNIT", this.dsSearch.getColumn(0, "CD_ACNTUNIT"));
        	this.dsDetail.setColumn(0, "NO_SIZE", this.dsList.getColumn(this.dsList.rowposition, "NO_SIZE"));
        	this.dsDetail.setColumn(0, "TY_TYPE", this.dsList.getColumn(this.dsList.rowposition, "TY_TYPE"));

        	var strSvcId    = "detial";
        	var strSvcType  = "grid";
        	var inProc		= "_dsProc";
        	var inData      = "detail=dsDetail";
        	var outData     = "dsList2=detail0";
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
        //확대
        this.divData_divDataRight_btnZoomIn_Click_onclick = function(obj,e)
        {
        	this.fnSet_Size(1.1);
        };
        //축소
        this.divData_divDataRight_btnZoomOut_Click_onclick = function(obj,e)
        {
        	this.fnSet_Size(0.9);
        };
        //등록
        // this.divData_divDataRight_btnAdd_Click_onclick = function(obj:nexacro.Button,e:nexacro.ClickEventInfo)
        // {
        // 	//this.gfnAlert("TODO : 등록버튼 구현");
        // 	//this.fnDownImage();
        // };

        this.fnUpload = function()
        {
        	this.fdg00.open('FileOpen', FileDialog.LOAD);
        }



        this.fdg00_onclose = function(obj,e)
        {
        	this.addFileList(obj, e.virtualfiles);
        };



        this.addFileList = function(obj, filelist)
        {
        	this.FileList = filelist;
        	if(filelist.length > 0) {
        		var vFile;
        		for (var i = 0; i < filelist.length; i++)
        		{
        			vFile = filelist[i];
        			vFile.row = obj.row;
        			vFile.addEventHandler("onsuccess", this.FileList_onsuccess, this);
        			vFile.addEventHandler("onerror", this.FileList_onerror , this);

        			vFile.open(null, 1);
        		}
        	}
        }



        this.FileList_onsuccess = function(obj, e)
        {
        	switch (e.reason)
        	{
        		case 1:
        			obj.getFileSize();
        			break;
        		case 9:
        			this.FileUpTransfer00.addFile(obj.filename, obj);
        			if(this.FileUpTransfer00.filelist.length > 0) {
        				this._waitCursor(true);
        				var sUploadUrl = this.fileConfig.host + this.fileConfig.uploadUrl;
        				this.filepath = "/DB/DBZ/SIZEINFO/" + this.dsSearch.getColumn(0, "CD_ACNTUNIT") + "/" + this.dsList.getColumn(this.dsList.rowposition, "NO_SIZE"); ///////////
        				trace("realfilepath>>>" + this.filepath);
        				this.FileUpTransfer00.setPostData("path", this.filepath);
        				this.FileUpTransfer00.upload(sUploadUrl);
        				trace("sUploadUrl>>>" + sUploadUrl);
        				trace("filepath>>>" + this.filepath);
        			}
        			break;
        	}
        }



        this.FileList_onerror = function(obj, e)
        {
        	trace("errortype: "+e.errortype);
        	trace("errormsg: "+e.errormsg);
        	trace("statuscode: "+e.statuscode);
        }

        this.FileUpTransfer00_onprogress = function(obj,e)
        {
        	trace("FileUpTransfer00_onprogress: " + e.loaded+"/"+e.total);
        };



        this.FileUpTransfer00_onsuccess = function(obj,e)
        {
        	this._waitCursor(false);
        	trace("FileUpTransfer00_onsuccess: " + e.code + "/" + e.message);
        	if(e.code == 0) {
        		if(e.datasets.length > 0) {
        			for(var i = 0; i < e.datasets[0].rowcount; i++) {
        				if(this.dsList2.rowcount == 0)
        				{
        					this.dsList2.addRow();
        				}
        				this.dsList2.setColumn(0, "PIC_BLUEPRINTNM", obj.filelist[i].filename);

        			}
        			obj.filelist.clear();
        			this.fnSaveProc();
        		}
        	}
        };



        this.FileUpTransfer00_onerror = function(obj,e)
        {
        	this._waitCursor(false);
        	if(e.errormsg.indexOf("maxsize") > -1) {
        		this.gfnAlert("첨부파일 허용용량("+ this.gfnCutFileSize(nexacro.toNumber(e.errormsg.split(':')[1])) + ")을 초과할 수 없습니다.");
        	} else {
        		this.gfnAlert(e.errormsg);
        	}
        };


        this.fnSaveProc = function()
        {
        	this.dsSave.clearData();
        	var nrow = this.dsSave.addRow();

        	this.dsSave.setColumn(nrow, "CD_ACNTUNIT", this.dsSearch.getColumn(0, "CD_ACNTUNIT"));
        	//this.dsSave.setColumn(nrow, "NO_SIZE", this.dsSearch.getColumn(0, "NO_SIZE"));
        	this.dsSave.setColumn(nrow, "NO_SIZE", this.dsList.getColumn(this.dsList.rowposition, "NO_SIZE"));
        	//this.dsSave.setColumn(nrow, "TY_TYPE", this.dsSearch.getColumn(0, "TY_TYPE"));
        	this.dsSave.setColumn(nrow, "TY_TYPE", this.dsList.getColumn(this.dsList.rowposition, "TY_TYPE"));
        	this.dsSave.setColumn(nrow, "PIC_BLUEPRINTNM", this.dsList2.getColumn(0, "PIC_BLUEPRINTNM"));

        // 	if(this.dsUpdate.getColumn(0, "PIC_IMAGENM") == this.dsUpdate.getColumn(0, "PIC_IMAGENM2")) {
        // 		this.gfnAlert("동일한 파일명으로 등록할 수 없습니다.");
        // 		return false;
        // 	}

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

        //삭제
        this.divData_divDataRight_btnDelete_Click_onclick = function(obj,e)
        {
        	this.fnDelImage();
        };

        //이미지 확대/축소
        this.fnSet_Size = function(val){
        	var nHeight = this.divData.form.divDataRight.form.ImageViewer.imageheight;
            var nWidth = this.divData.form.divDataRight.form.ImageViewer.imagewidth;
        	this.divData.form.divDataRight.form.ImageViewer.set_height(nHeight * val);
            this.divData.form.divDataRight.form.ImageViewer.set_width(nWidth * val);
        };

        // this.fnImageView = function() {
        //
        // 	this.dsImageFile.clearData();
        // 	this.dsImageFile.addRow();
        //
        // 	this.dsImageFile.setColumn(0, "filepath", "/DB/DBZ/SIZEINFO/" + this.dsSearch.getColumn(0, "CD_ACNTUNIT") + "/" + this.dsList3.getColumn(this.dsList3.rowposition, "NO_SIZE"));
        // 	this.dsImageFile.setColumn(0, "filename", this.dsList3.getColumn(0, "PIC_BLUEPRINTNM"));
        //
        // 	// 서버 이미지파일 base64 로 받아오기
        // 	var strSvcId    = "imagefile";
        // 	var strSvcType  = "file/imageFile";
        // 	var inProc		= "";
        // 	var inData      = "input=dsImageFile";
        // 	var outData     = "dsImageFile=input";
        // 	var strArg      = "";
        // 	var callBackFnc = "fnCallback";
        //
        // 	this.gfnTransaction( strSvcId , 	// transaction을 구분하기 위한 svc id값
        // 						strSvcType , 	// transaction을 요청할 구분
        // 						inProc,			// Procedure 정보 Dataset 이름
        // 						inData , 		// 입력값으로 보낼 dataset id , a=b형태로 실제이름과 입력이름을 매칭
        // 						outData , 		// 처리결과값으로 받을 dataset id, a=b형태로 실제이름과 입력이름을 매칭
        // 						strArg, 		// 입력갑스로 보낼 arguments, strFormData="20120607"
        // 						callBackFnc,
        // 						false); 		// 통신방법 정의 [생략가능]
        // };

        /*
         * 이미지 파일 조회
         */
        this.fnImageView = function() {
        	trace("afdsljisadfolisdf>>>" + this.filepath);
        	this.dsImageFile.clearData();
        	if (this.dsList2.rowcount > 0) {
        		var nrow = 0;
        		if (!this.gfnIsNull(this.dsList2.getColumn(0,"PIC_BLUEPRINTNM"))) {
        			nrow = this.dsImageFile.addRow();
        			//this.dsImageFile.setColumn(nrow, "filepath", this.filepath + this.dsSearch.getColumn(0, "CD_ACNTUNIT") + "/" + this.dsList2.getColumn(0, "NO_SIZE"));
        			this.dsImageFile.setColumn(nrow, "filepath", "/DB/DBZ/SIZEINFO/" + this.dsSearch.getColumn(0, "CD_ACNTUNIT") + "/" + this.dsList.getColumn(this.dsList.rowposition, "NO_SIZE"));
        			//this.dsImageFile.setColumn(nrow, "filepath", this.filepath);
        			this.dsImageFile.setColumn(nrow, "filename", this.dsList2.getColumn(0, "PIC_BLUEPRINTNM"));
        		}
        	}

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
        						callBackFnc); // 통신방법 정의 [생략가능]
        };
        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.form_onload,this);
            this.divData.addEventHandler("ondragmove",this.divData_ondragmove,this);
            this.divData.form.divSplitter.addEventHandler("ondrag",this.divData_divSplitter_ondrag,this);
            this.divData.form.divDataRight.form.btnDelete_Click.addEventHandler("onclick",this.divData_divDataRight_btnDelete_Click_onclick,this);
            this.divData.form.divDataRight.form.btnAdd_Click.addEventHandler("onclick",this.fnUpload,this);
            this.divData.form.divDataRight.form.btnZoomOut_Click.addEventHandler("onclick",this.divData_divDataRight_btnZoomOut_Click_onclick,this);
            this.divData.form.divDataRight.form.btnZoomIn_Click.addEventHandler("onclick",this.divData_divDataRight_btnZoomIn_Click_onclick,this);
            this.dsSearch.addEventHandler("onvaluechanged",this.dsSearch_onvaluechanged,this);
            this.FileUpTransfer00.addEventHandler("onprogress",this.FileUpTransfer00_onprogress,this);
            this.FileUpTransfer00.addEventHandler("onsuccess",this.FileUpTransfer00_onsuccess,this);
            this.FileUpTransfer00.addEventHandler("onerror",this.FileUpTransfer00_onerror,this);
            this.fdg00.addEventHandler("onclose",this.fdg00_onclose,this);
        };
        this.loadIncludeScript("DBZ_SIZEINFOBLUEPRINT.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
