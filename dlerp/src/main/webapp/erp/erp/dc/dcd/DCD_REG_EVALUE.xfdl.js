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
            obj._setContents("<ColumnInfo><Column id=\"TARGET\" type=\"STRING\" size=\"256\"/><Column id=\"SP\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"TARGET\">select</Col><Col id=\"SP\">DCDPR_REG_EVALUE_SELECT</Col></Row><Row><Col id=\"TARGET\">insert</Col><Col id=\"SP\">DCDPR_REG_EVALUE_INSERT</Col></Row><Row><Col id=\"TARGET\">update</Col><Col id=\"SP\">DCDPR_REG_EVALUE_UPDATE</Col></Row><Row><Col id=\"TARGET\">delete</Col><Col id=\"SP\">DCDPR_REG_EVALUE_DELETE</Col></Row><Row><Col id=\"TARGET\">create</Col><Col id=\"SP\">DCDPR_REG_EVALUE_CREATE</Col></Row><Row><Col id=\"TARGET\">file_insert</Col><Col id=\"SP\">DCDPR_REG_EVALUE_INSERT_FILE</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsSearch", this);
            obj._setContents("<ColumnInfo><Column id=\"YR_MAGAM\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row/></Rows>");
            this.addChild(obj.name, obj);


            obj = new FileDialog("fdg00", this);
            this.addChild(obj.name, obj);


            obj = new FileUpTransfer("FileUpTransfer00", this);
            this.addChild(obj.name, obj);


            obj = new FileDownTransfer("FileDownTransfer00", this);
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Div("divSearch","0.0","10.0",null,"46.0","0",null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_cssclass("div_SEARCH_Bg");
            obj.set_formscrolltype("none");
            this.addChild(obj.name, obj);

            obj = new Static("staYR_MAGAM","0.0","10.0","92.0","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("2");
            obj.set_text("평가년도");
            obj.set_cssclass("sta_WF_SchLabelE");
            this.divSearch.addChild(obj.name, obj);

            obj = new Div("ctclYR_MAGAM","staYR_MAGAM:0.0","10.0","100","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("3");
            obj.set_url("cmm::cmmCalYY.xfdl");
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
            obj = new BindItem("item0","divSearch.form.ctclYR_MAGAM.form.TextBox","value","dsSearch","YR_MAGAM");
            this.addChild(obj.name, obj);
            obj.bind();
            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {
            this._addPreloadList("fdl","cmm::cmmCalYY.xfdl");
        };
        
        // User Script
        this.registerScript("DCD_REG_EVALUE.xfdl", function() {
        this.objApp = this.gfnGetApplication();

        this.form_onload = function(obj,e)
        {
        	// -- 필수 -------------------//
        	this.gfnFormOnLoad(this);
        	this.gfnFormInfo(this);
        	// ---------------------------//
        	this.fileConfig = this.gfnGetFileConfig();

        	this.fnSetButton();
        	this.fnSetExtendButton();
        	this.fnSetVariable();
        	this.fnSetEvent();
        	this.fnSetParameter();

        	this.dsSearch.setColumn(0, "YR_MAGAM", this.gfnGetDate().substr(0,4));

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
        	this.btnCreate = this.gfnFormButtonAdd("btnCreate", "fnCreate");
        	this.btnLiccost = this.gfnFormButtonAdd("btnLiccost", "fnLiccost");
        	this.btnFileInsert = this.gfnFormButtonAdd("btnFileInsert", "fnFileInsert");
        };
        /************************************************************************
         * 변수 선언
         ************************************************************************/
        this.fnSetVariable = function() {
        	//this.ctclYR_JUDGE = this.divSearch.form.ctclYR_JUDGE;
        	this.dxGrid = this.divData.form.objGrid;
        };

        /************************************************************************
         * 이벤트 설정
         ************************************************************************/
        this.fnSetEvent = function() {
        	// 그리드 초기화
        	this.gfnGridInit(this.dxGrid, this.dsList, "DC", "DCD_REG_EVALUE");

        	this.dxGrid.BeforeUserDataSetParam = "fnGrid_BeforeUserDataSetParam";
        	this.dxGrid.addEventHandler("oncelldblclick", this.dxGrid_oncelldblclick, this);

        };

        /************************************************************************
         * 파라미터 설정
         ************************************************************************/
        this.fnSetParameter = function() {

        	this.dsSelect = new Dataset();
        	this.dsSelect.addColumn("YR_MAGAM", "string");
        	this.dsSelect.addColumn("TY_SYSTEM", "string");

        	this.dsInsert = new Dataset();
        	this.dsInsert.addColumn("YR_MAGAM", "string");
        	this.dsInsert.addColumn("TY_SYSTEM", "string");
        	this.dsInsert.addColumn("FR_SELECTION", "string");
        	this.dsInsert.addColumn("TO_SELECTION", "string");
        	this.dsInsert.addColumn("TY_STATUS", "string");
        	this.dsInsert.addColumn("DS_BIGO", "string");

        	this.dsUpdate = new Dataset();
        	this.dsUpdate.addColumn("YR_MAGAM", "string");
        	this.dsUpdate.addColumn("TY_SYSTEM", "string");
        	this.dsUpdate.addColumn("FR_SELECTION", "string");
        	this.dsUpdate.addColumn("TO_SELECTION", "string");
        	this.dsUpdate.addColumn("TY_STATUS", "string");
        	this.dsUpdate.addColumn("DS_BIGO", "string");

        	this.dsDelete = new Dataset();
        	this.dsDelete.addColumn("YR_MAGAM", "string");
        	this.dsDelete.addColumn("TY_SYSTEM", "string");

        	this.dsCreate = new Dataset();
        	this.dsCreate.addColumn("YR_MAGAM", "string");
        	this.dsCreate.addColumn("TY_SYSTEM", "string");

        	this.dsFile = new Dataset();
        	this.dsFile.addColumn("YR_MAGAM", "string");
        	this.dsFile.addColumn("TY_SYSTEM", "string");
        	this.dsFile.addColumn("FILE_NM", "string");
        	this.dsFile.addColumn("PATH_NM", "string");
        	this.dsFile.addColumn("FILE_SIZ", "int");
        	this.dsFile.addColumn("FILE_HASH", "string");
        	this.dsFile.addColumn("ID_TRANS", "string");
        }


        /************************************************************************
         * 컨트롤 이벤트
         ************************************************************************/
         /*
          *	조회 버튼
          */
        this.fnSelect = function() {
        	if(!this.fnValidate()) return;

        	this.FileUpTransfer00.clearFileList();
        	this.filepath = "/EVALUE/" + this.dsSearch.getColumn(0, "YR_MAGAM") + "/" + this.FormInfo.DS_PARAM ;

        	this.dsSelect.clearData();
        	this.dsSelect.addRow();
        	this.dsSelect.setColumn(0, "YR_EVALUE", this.dsSearch.getColumn(0, "YR_EVALUE"));
        	this.dsSelect.setColumn(0, "TY_SYSTEM", this.FormInfo.DS_PARAM);

        	var strSvcId    = "select";
        	var strSvcType  = "grid";
        	var inProc		= "_dsProc";
        	var inData      = "select=dsSelect";
        	var outData     = "dsList=select0";
        	var strArg      = "";
        	var callBackFnc = "fnCallback";

        	this.gfnTransaction( strSvcId , 	// transaction을 구분하기 위한 svc id값
        						strSvcType , 	// trabsaction을 요청할 구분
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
        	var nrow = this.gfnGridAdd(this.dxGrid);
        	this.dsList.setColumn(nrow, "YR_MAGAM", this.dsSearch.getColumn(0, "YR_MAGAM"));
        	this.dsList.setColumn(nrow, "TY_SYSTEM", this.FormInfo.DS_PARAM);
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
        	// 그리드 필수항목 체크
        	if (!this.gfnGridValidate(this.dxGrid)) return;

        	this.dxGrid.updateToDataset();

        	this.dsInsert.clearData();
        	this.dsUpdate.clearData();
        	this.dsDelete.clearData();

        	for (var i = 0; i < this.dsList.rowcount; i++) {
        		var flag = this.gfnGetFlag(this.dsList, i);

        		switch(flag) {
        			case "I":
        				var nrow = this.dsInsert.addRow();
        				this.dsInsert.setColumn(nrow, "YR_MAGAM", this.dsList.getColumn(i, "YR_MAGAM"));
        				this.dsInsert.setColumn(nrow, "TY_SYSTEM", this.dsList.getColumn(i, "TY_SYSTEM"));
        				this.dsInsert.setColumn(nrow, "FR_SELECTION", this.dsList.getColumn(i, "FR_SELECTION"));
        				this.dsInsert.setColumn(nrow, "TO_SELECTION", this.dsList.getColumn(i, "TO_SELECTION"));
        				this.dsInsert.setColumn(nrow, "TY_STATUS", this.dsList.getColumn(i, "TY_STATUS"));
        				this.dsInsert.setColumn(nrow, "DS_BIGO", this.dsList.getColumn(i, "DS_BIGO"));
        			break;
        			case "U":
        				var nrow = this.dsUpdate.addRow();
        				this.dsUpdate.setColumn(nrow, "YR_MAGAM", this.dsList.getColumn(i, "YR_MAGAM"));
        				this.dsUpdate.setColumn(nrow, "TY_SYSTEM", this.dsList.getColumn(i, "TY_SYSTEM"));
        				this.dsUpdate.setColumn(nrow, "FR_SELECTION", this.dsList.getColumn(i, "FR_SELECTION"));
        				this.dsUpdate.setColumn(nrow, "TO_SELECTION", this.dsList.getColumn(i, "TO_SELECTION"));
        				this.dsUpdate.setColumn(nrow, "TY_STATUS", this.dsList.getColumn(i, "TY_STATUS"));
        				this.dsUpdate.setColumn(nrow, "DS_BIGO", this.dsList.getColumn(i, "DS_BIGO"));

        			break;
        			case "D":
        				var nrow = this.dsDelete.addRow();
        				this.dsDelete.setColumn(nrow, "YR_MAGAM", this.dsList.getColumn(i, "YR_MAGAM"));
        				this.dsDelete.setColumn(nrow, "TY_SYSTEM", this.dsList.getColumn(i, "TY_SYSTEM"));
        				this.dsDelete.setColumn(nrow, "FR_SELECTION", this.dsList.getColumn(i, "FR_SELECTION"));
        				this.dsDelete.setColumn(nrow, "TO_SELECTION", this.dsList.getColumn(i, "TO_SELECTION"));
        				this.dsDelete.setColumn(nrow, "TY_STATUS", this.dsList.getColumn(i, "TY_STATUS"));
        				this.dsDelete.setColumn(nrow, "DS_BIGO", this.dsList.getColumn(i, "DS_BIGO"));
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
        						strArg, 		// 입력값으로 보낼 arguments, strFormData="20120607"
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
        this.fnValidate = function() {
        	var validate = true;

        	if(this.gfnIsNull(this.dsSearch.getColumn(0, "YR_MAGAM")))
        	{
        		validate = false;
        		this.gfnAlert("평가년도를 입력해주십시오.");
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
        	}
        	else if(svcID == "save")
        	{
        		if (errorCode == 0) {
        			this.FormBtns.Select.click();
        		} else {
        			this.gfnAlert(errorMsg);
        		}
        	}
        	else if(svcID == "create")
        	{
        		if (errorCode == 0) {
        			this.FormBtns.Select.click();
        		} else {
        			this.gfnAlert(errorMsg);
        		}
        	}
        	else if(svcID == "file") {
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
        this.ccfSite_AfterCDTextChanged = function(id) {
        }

        this.fnBeforeUserDataSetParam = function(id, dsUserParam, nrow) {
        	return true;
        }

        /************************************************************************
         * 그리드 이벤트
         ************************************************************************/
        this.fnGrid_BeforeUserDataSetParam = function(id, dsUserParam, nrow) {
        	if(id == "DCX_CFEVALUEKIND")
        	{
        		dsUserParam.setColumn(nrow, "YR_EVALUE", this.dsList.getColumn(this.dsList.rowposition, "YR_EVALUE"));
        		dsUserParam.setColumn(nrow, "TY_SYSTEM", this.FormInfo.DS_PARAM);
        	}
        	return true;
        }

        this.dxGrid_oncelldblclick = function(obj,e)
        {
        	if(this.gfnGridGetBindColumnNameByIndex(obj, e.cell) == "FILE_NM") {
        		this.fnDownload();
        	}
        }
        /************************************************************************
         * 기타 이벤트
         ************************************************************************/
        /*
         *	조회 조건 변경시 초기화
         */
        this.fnSearchInit = function(obj,e) {
        	if(e == null || (e.pretext != e.posttext)) {
        		// 폼상태 초기화
        		this.gfnSetFormStatus(this);
        		this.gfnGridClear(this.dxGrid);
        	}
        };

        this.dsSearch_onvaluechanged = function(obj,e)
        {
        	if(e.oldvalue != e.newvalue) {
        		this.gfnSetFormStatus(this);	// 폼상태 초기화
        		this.gfnGridClear(this.dxGrid);
        	}
        };

        this.fnCreate = function(obj, e){

        	if(!this.gfnGridIsRow(this.dxGrid)){return false;}


        	var msg = "평가년도 : [" + this.dsList.getColumn(this.dsList.rowposition, "YR_MAGAM") + "년]"
        			+ "\n\n평가대상정보생성을 진행하시겠습니까?"
        	;

        	this.gfnConfirm(msg, "fnCreate_callback");

        };

        this.fnCreate_callback = function(strID, val)
        {
        	if(val == true)
        	{
        		this.dsCreate.clearData();

        		var nrow = this.dsCreate.addRow();
        		this.dsCreate.setColumn(nrow, "YR_MAGAM", this.dsList.getColumn(this.dsList.rowposition, "YR_MAGAM"));
        		this.dsCreate.setColumn(nrow, "TY_SYSTEM", this.dsList.getColumn(this.dsList.rowposition, "TY_SYSTEM"));

        		if (this.dsCreate.rowcount == 0) return;

        		var strSvcId    = "create";
        		var strSvcType  = "save";
        		var inProc		= "_dsProc";
        		var inData      = "create=dsCreate";
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
        }

        this.fnLiccost = function()
        {
        	if(this.dsList.rowposition < 0) return;

        	var param = {};
        	param.YR_MAGAM = this.dsList.getColumn(this.dsList.rowposition, "YR_MAGAM");
        	param.TY_SYSTEM = this.dsList.getColumn(this.dsList.rowposition, "TY_SYSTEM");

        	this.gfnFormOpen(this.FormInfo.CD_MODULE, "DCD_REG_EVALUE_LICCOST_DLG", "fnLiccost_callback", param);
        }

        this.fnLiccost_callback = function(strID, val)
        {
        	this.FormBtns.Select.click();
        }

        // 작성서류 버튼 클릭 이벤트
        this.fnFileInsert = function()
        {
        	if(this.dsList.rowposition < 0) return;
        	if(this.gfnGetFlag(this.dsList, this.dsList.rowposition) == "#") return;

        	this.fdg00.open('FileOpen', FileDialog.SAVE);
        }

        /* 아래부터는 파일관련 */
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
        			this.filepath = "/EVALUE/" + this.dsList.getColumn(this.dsList.rowposition, "YR_MAGAM") + "/" + this.FormInfo.DS_PARAM;
        			this.FileUpTransfer00.addFile(obj.filename, obj);
        			this._waitCursor(true);
        			var sUploadUrl = this.fileConfig.host + this.fileConfig.uploadUrl;
        			this.FileUpTransfer00.setPostData("path", this.filepath);
        			this.FileUpTransfer00.upload(sUploadUrl);
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
        			//for(var i = 0; i < e.datasets[0].rowcount; i++) {
        				//var row = obj.filelist[i].row;
        				//this.dsList.setColumn(row, "FILE_SIZ", e.datasets[0].getColumn(i, "filesize"));
        				//this.dsList.setColumn(row, "FILE_HASH", e.datasets[0].getColumn(i, "filehash"));
        			//}

        			// 무조건 단건이니까 이렇게 처리해보았..
        			var fileNm = e.datasets[0].getColumn(0, "filename");
        			var fileSize = e.datasets[0].getColumn(0, "filesize");
        			var fileHash = e.datasets[0].getColumn(0, "filehash");

        			this.fnSaveFile(fileNm, fileSize, fileHash);
        		}
        	}
        };


        this.fnSaveFile = function(fileNm, fileSize, fileHash)
        {
        	this.dsFile.clearData();
        	this.filepath = "/EVALUE/" + this.dsList.getColumn(this.dsList.rowposition, "YR_MAGAM") + "/" + this.FormInfo.DS_PARAM;

        	var nrow = this.dsFile.addRow();
        	this.dsFile.setColumn(nrow, "YR_MAGAM", this.dsList.getColumn(this.dsList.rowposition, "YR_MAGAM"));
        	this.dsFile.setColumn(nrow, "TY_SYSTEM", this.dsList.getColumn(this.dsList.rowposition, "TY_SYSTEM"));
        	this.dsFile.setColumn(nrow, "FILE_NM", fileNm);
        	this.dsFile.setColumn(nrow, "PATH_NM", this.filepath);
        	this.dsFile.setColumn(nrow, "FILE_SIZ", fileSize);
        	this.dsFile.setColumn(nrow, "FILE_HASH", fileHash);
        	this.dsFile.setColumn(nrow, "ID_TRANS", this.AuthClient.ID_USER);

        	if (this.dsFile.rowcount == 0) return;

        	var strSvcId    = "file";
        	var strSvcType  = "save";
        	var inProc		= "_dsProc";
        	var inData      = "file_insert=dsFile";
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


        this.fnDownload = function() {
        	if(!this.gfnIsNull(this.gfnGetFlag(this.dsList, this.dsList.rowposition))) return;

        	var sFilename = this.dsList.getColumn(this.dsList.rowposition, "FILE_NM");
        	var sFilepath = this.dsList.getColumn(this.dsList.rowposition, "PATH_NM");
        	var encodeFileName = encodeURIComponent(sFilename);

        	var surl = this.fileConfig.host+ this.fileConfig.downloadUrl;
        	this.FileDownTransfer00.set_url(surl);
        	this.FileDownTransfer00.setPostData("path", sFilepath);
        	this.FileDownTransfer00.setPostData("fileName", encodeFileName);
        	if( system.navigatorname =="nexacro"){
        		this.FileDownTransfer00.set_downloadfilename(sFilename);
        	}

        	console.log(sFilename);
        	console.log(sFilepath);
        	console.log(surl);

        	this.FileDownTransfer00.download();
        };
        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.form_onload,this);
            this.dsSearch.addEventHandler("onvaluechanged",this.dsSearch_onvaluechanged,this);
            this.fdg00.addEventHandler("onclose",this.fdg00_onclose,this);
            this.FileUpTransfer00.addEventHandler("onprogress",this.FileUpTransfer00_onprogress,this);
            this.FileUpTransfer00.addEventHandler("onsuccess",this.FileUpTransfer00_onsuccess,this);
            this.FileUpTransfer00.addEventHandler("onerror",this.FileUpTransfer00_onerror,this);
        };
        this.loadIncludeScript("DCD_REG_EVALUE.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
