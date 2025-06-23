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
            obj._setContents("<ColumnInfo><Column id=\"TARGET\" type=\"STRING\" size=\"256\"/><Column id=\"SP\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"TARGET\">select</Col><Col id=\"SP\">DSAPR_EMPLOYEE_FILES_SELECT</Col></Row><Row><Col id=\"TARGET\">insert</Col><Col id=\"SP\">DSAPR_EMPLOYEE_FILES_INSERT</Col></Row><Row><Col id=\"TARGET\">delete</Col><Col id=\"SP\">DSAPR_EMPLOYEE_FILES_DELETE</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsSearch", this);
            obj._setContents("<ColumnInfo><Column id=\"CD_CORP\" type=\"STRING\" size=\"256\"/><Column id=\"CD_SITE\" type=\"STRING\" size=\"256\"/><Column id=\"DS_NAME\" type=\"STRING\" size=\"256\"/><Column id=\"NO_ID\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row/></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsDeleteFile", this);
            obj._setContents("<ColumnInfo><Column id=\"filepath\" type=\"STRING\" size=\"256\"/><Column id=\"filename\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Div("divSearch","0.0","10.0",null,"46.0","0",null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_cssclass("div_SEARCH_Bg");
            this.addChild(obj.name, obj);

            obj = new Static("staCD_SITE","0.0","10.0","92.0","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("3");
            obj.set_text("현장코드");
            obj.set_cssclass("sta_WF_SchLabelE");
            this.divSearch.addChild(obj.name, obj);

            obj = new Div("ccfCD_SITE","staCD_SITE:0.0","10.0","250","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.getSetter("CodeFindName").set("DZX_CFSITE");
            obj.getSetter("CDTextWidth").set("80");
            obj.set_taborder("1");
            obj.set_url("cmm::cmmCodeFind.xfdl");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("staDS_NAME","ccfCD_SITE:0.0","10.0","92.0","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("2");
            obj.set_text("성명");
            obj.set_cssclass("sta_WF_SchLabel");
            this.divSearch.addChild(obj.name, obj);

            obj = new Div("ccfDS_NAME","staDS_NAME:0.0","10.0","220","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.getSetter("CodeFindName").set("DSX_CFEMPLOYEE_01");
            obj.getSetter("CDTextWidth").set("80");
            obj.set_taborder("0");
            obj.set_url("cmm::cmmCodeFind.xfdl");
            this.divSearch.addChild(obj.name, obj);

            obj = new Div("divData","0","divSearch:10","900",null,null,"0",null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_cssclass("div_DATA_Bg");
            this.addChild(obj.name, obj);

            obj = new Static("staTITLE_BOTTOM","0","5","100%","22",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("0");
            obj.set_text("자료내역");
            obj.set_cssclass("sta_TITLE_Bg");
            this.divData.addChild(obj.name, obj);

            obj = new Button("btnFILE_DOWNLOAD",null,"0","120","24","0",null,null,null,null,null,this.divData.form);
            obj.set_taborder("0");
            obj.set_text("FILEDOWNLOAD");
            this.divData.addChild(obj.name, obj);

            obj = new Grid("objGrid","0","staTITLE_BOTTOM:10",null,null,"0","0",null,null,null,null,this.divData.form);
            obj.set_taborder("0");
            obj._setContents("");
            this.divData.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this
            obj = new Layout("default","",this._adjust_width,this._adjust_height,this,function(p){});
            this.addLayout(obj.name, obj);
            
            // BindItem Information
            obj = new BindItem("item1","divSearch.form.ccfCD_SITE.form.CDTextBox","value","dsSearch","CD_SITE");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item2","divSearch.form.ccfDS_NAME.form.CDTextBox","value","dsSearch","DS_NAME");
            this.addChild(obj.name, obj);
            obj.bind();
            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {
            this._addPreloadList("fdl","cmm::cmmCodeFind.xfdl");
        };
        
        // User Script
        this.registerScript("DSA_EMPLOYEE_FILES.xfdl", function() {
        this.objApp = this.gfnGetApplication();
        this.filepath = "/DS/TEST/";
        this.fileuploads = {};

        this.form_onload = function(obj,e)
        {
        	// -- 필수 -------------------//
        	this.gfnFormOnLoad(this);
        	this.gfnFormInfo(this);
        	// ---------------------------//

        	this.fnSetButton();
        	//this.fnSetExtendButton();
        	this.fnSetVariable();
        	this.fnSetEvent();
        	this.fnSetParameter();

        	// 파일설정
        	this.fileConfig = this.gfnGetFileConfig();
        	this.fileConfig.uploadUrl = this.fileConfig.uploadUrl.replace("path=", "path=" + this.filepath);
        	this.fileConfig.downloadUrl = this.fileConfig.downloadUrl.replace("path=", "path=" + this.filepath);

        	//this.FormBtns.Select.click();
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
        	this.ccfCD_SITE = this.divSearch.form.ccfCD_SITE;
        	this.ccfDS_NAME = this.divSearch.form.ccfDS_NAME;

        	this.dxGrid = this.divData.form.objGrid;
        };

        /************************************************************************
         * 이벤트 설정
         ************************************************************************/
        this.fnSetEvent = function() {

        	this.ccfDS_NAME.BeforeUserDataSetParam = "fnBeforeUserDataSetParam";

        	this.gfnGridInit(this.dxGrid, this.dsList, "DS", "DSA_EMPLOYEE_FILES");
        	this.dxGrid.BeforeUserDataSetParam = "fnGrid_BeforeUserDataSetParam";
        	this.dxGrid.ExpandUp = "fnGrid_ExpandUp";
        }

        /************************************************************************
         * 파라미터 설정
         ************************************************************************/
        this.fnSetParameter = function() {

        	this.dsSelect = new Dataset();
        	this.dsSelect.addColumn("CD_SITE", "string");
        	this.dsSelect.addColumn("NO_ID", "string");

        	this.dsInsert = new Dataset();
        	this.dsInsert.addColumn("CD_SITE", "string");
        	this.dsInsert.addColumn("NO_ID", "string");
        	this.dsInsert.addColumn("NM_FILE", "string");
        	this.dsInsert.addColumn("DS_PATH", "string");
        	this.dsInsert.addColumn("RM_BIGO", "string");
        	this.dsInsert.addColumn("ID_INSERT", "string");

        	this.dsDelete = new Dataset();
        	this.dsDelete.addColumn("SN_SEQ", "int");
        }

        /************************************************************************
         * 버튼 이벤트
         ************************************************************************/
         /*
          *	조회 버튼
          */
        this.fnSelect = function() {
        	if (!this.fnSelectValidate()) return false;

        	// 업로드할 파일 컨트롤 초기화
        	this.fileuploads = {}
        	this.gfnGridClear(this.dxGrid);
        	this.gfnGridBeforeSelect(this.dxGrid);

        	this.dsSelect.clearData();
        	this.dsSelect.addRow();
        	this.dsSelect.setColumn(0, "CD_SITE", this.dsSearch.getColumn(0, "CD_SITE"));
        	this.dsSelect.setColumn(0, "NO_ID", this.dsSearch.getColumn(0, "NO_ID"));

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
        	var nrow = this.gfnGridAdd(this.dxGrid);
        	this.dsList.setColumn(nrow, "DS_SITECHA", this.ccfCD_SITE.form.DSTextBox.value);
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
        	if (!this.gfnGridValidate(this.dxGrid)) return;


        	// 파일저장
        	this.keys = Object.keys(this.fileuploads);
        	this.filecnt = 0;
        	if (this.keys.length > 0) {
        		for(var i = 0; i < this.keys.length; i++) {
        			var fileup = this.fileuploads[this.keys[i]];
        			var sFilePath = fileup.value;
        			var dirExpt = sFilePath.lastIndexOf("\\")+1;
        			var sFileName = sFilePath.substr(dirExpt);

        			var sUploadUrl = this.fileConfig.host + this.fileConfig.uploadUrl;
        			trace(sUploadUrl);
        			fileup.upload(sUploadUrl);
        		}
        	}
        	else {
        		this.fnSaveProc();
        	}
        }

        this.fnSaveProc = function() {

        	this.dxGrid.updateToDataset();

        	this.dsInsert.clearData();
        	this.dsDelete.clearData();
        	this.dsDeleteFile.clearData();

        	for (var i = 0; i < this.dsList.rowcount; i++) {
        		var flag = this.gfnGetFlag(this.dsList, i);
        		switch(flag) {
        			case "I":
        				var nrow = this.dsInsert.addRow();
        				this.dsInsert.setColumn(nrow, "CD_SITE", this.dsSearch.getColumn(0, "CD_SITE"));
        				this.dsInsert.setColumn(nrow, "NO_ID", this.dsList.getColumn(i, "NO_ID"));
        				this.dsInsert.setColumn(nrow, "NM_FILE", this.dsList.getColumn(i, "NM_FILE"));
        				this.dsInsert.setColumn(nrow, "DS_PATH", this.filepath); //this.dsList.getColumn(i, "DS_PATH"));
        				this.dsInsert.setColumn(nrow, "RM_BIGO", this.dsList.getColumn(i, "RM_BIGO"));
        				this.dsInsert.setColumn(nrow, "ID_INSERT", this.AuthClient.ID_USER);
        				break;
        			case "D":
        				var nrow = this.dsDelete.addRow();
        				this.dsDelete.setColumn(nrow, "SN_SEQ", this.dsList.getColumn(i, "SN_SEQ"));

        				//삭제시 서버파일도 삭제
        				if (!this.gfnIsNull(this.dsList.getColumn(i, "NM_FILE"))) {
        					nrow = this.dsDeleteFile.addRow();
        					this.dsDeleteFile.setColumn(nrow, "filepath", this.filepath); //this.dsList.getColumn(i, "DS_PATH"));
        					this.dsDeleteFile.setColumn(nrow, "filename", this.dsList.getColumn(i, "NM_FILE"));
        				}
        				break;
        		}
        	}

        	if (this.dsInsert.rowcount == 0 && this.dsDelete.rowcount == 0) return;

        	var strSvcId    = "save";
        	var strSvcType  = "save";
        	var inProc		= "_dsProc";
        	var inData      = "insert=dsInsert delete=dsDelete";
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

        	// 서버 파일 삭제
        	if(this.dsDeleteFile.rowcount > 0) {

        		var strSvcId    = "deletefile";
        		var strSvcType  = "file/deleteFile";
        		var inProc		= "";
        		var inData      = "input=dsDeleteFile";
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
        this.fnSelectValidate = function() {
        	var validate = true;

        	if (this.gfnIsNull(this.dsSearch.getColumn(0,"CD_SITE"))) {
        		validate = false;
        		// Alert후 실행할 처리
        		this.fnVaidateCallback = function() {
        			this.ccfCD_SITE.form.CDTextBox.setFocus();
        		}
        		this.gfnAlert("현장코드를 입력하셔야합니다.", "fnVaidateCallback");
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
        	else if(svcID == "save") {
        		if (errorCode == 0) {
        			this.FormBtns.Select.click();
        		} else {
        			this.gfnAlert(errorMsg);
        		}
        	}

        	return true;
        }

        /************************************************************************
         * 코드파인드 이벤트
         ************************************************************************/
        //코드파인드의 파라미터 값을 넘겨줄때 사용하는 함수
        this.fnBeforeUserDataSetParam = function(id, dsUserParam, nrow) {
        	if(id == "ccfDS_NAME") {
        		dsUserParam.setColumn(nrow, "CD_SITE", this.ccfCD_SITE.form.CDTextBox.text);
        	}

        	return true;
        }

        /************************************************************************
         * 그리드 이벤트
         ************************************************************************/

        this.fnGrid_BeforeUserDataSetParam = function(id, dsUserParam, nrow) {
        	// 그리드에서 코드파인드 id는 그리드셋팅의 코드파인드 식별ID
         	if (id == "DSX_CFEMPLOYEE_01") {
         		dsUserParam.setColumn(nrow, "CD_SITE", this.dsSearch.getColumn(0,"CD_SITE"));
         	}
        	return true;
        }

        this.fnGrid_ExpandUp = function(obj,e) {
        	var colnm = this.gfnGridGetBindColumnNameByIndex(obj, e.cell);
        	if(colnm == "NM_FILE") {
        		var fileid = "fileup_"+e.row;
        		var fileup = new FileUpload();
        		fileup.init(fileid, 0,0,0,0);
        		if(this.lookup(fileid)) {
        			delete this.fileuploads[fileid];
        			this.removeChild(fileid);
        		}
        		this.addChild(fileid, fileup);
        		fileup.show();
        		fileup.row = e.row;
        		fileup.addEventHandler("onitemchanged", this.fileup_onitemchanged, this);
        		fileup.addEventHandler("onsuccess", this.fileup_onsuccess, this);
        		fileup.addEventHandler("onerror", this.fileup_onerror, this);

        		this.fileuploads[fileid] = fileup;
        		fileup.filefindbuttons.upfile0.click();

        	}
        }

        this.fileup_onitemchanged = function(obj,e) {
        	var row = obj.row;
        	if(obj.filelist.length > 0) {
        		this.dsList.setColumn(row, "NM_FILE", obj.filelist[0].filename);
        	}
        }

        this.fileup_onsuccess = function(obj,e) {
        	this.filecnt += 1;
        	if(this.keys.length == this.filecnt) {
        		this.fnSaveProc();
        	}
        }

        this.fileup_onerror = function(obj,e) {
        	this.filecnt += 1;
        	if(this.keys.length == this.filecnt) {
        		this.fnSaveProc();
        	}
        }

        /************************************************************************
         * 기타 이벤트
         ************************************************************************/
        this.fnSearchInit = function(obj,e) {
        	if(e == null || (e.pretext != e.posttext)) {
        		this.gfnSetFormStatus(this);
        		this.gfnGridClear(this.dxGrid);
        	}
        }

        this.fnFileCallback = function() {

        };


        this.fnImageFile = function() {

        	this.dsImageList.clearData();

        	var nrow = this.dsImageList.addRow();
        	this.dsImageList.setColumn(nrow, "filepath", ""); //this.dsList.getColumn(this.dsList.rowposition, "DS_PATH"));
        	this.dsImageList.setColumn(nrow, "filename", ""); //this.dsList.getColumn(this.dsList.rowposition, "NM_FILE"));


        	var strSvcId    = "imagefile";
        	var strSvcType  = "file/imageFile";
        	var inProc		= "";
        	var inData      = "input=dsImageList";
        	var outData     = "";
        	var strArg      = "";
        	var callBackFnc = "fnImageFileCallback";

        	this.gfnTransaction( strSvcId , 	// transaction을 구분하기 위한 svc id값
        						strSvcType , 	// transaction을 요청할 구분
        						inProc,			// Procedure 정보 Dataset 이름
        						inData , 		// 입력값으로 보낼 dataset id , a=b형태로 실제이름과 입력이름을 매칭
        						outData , 		// 처리결과값으로 받을 dataset id, a=b형태로 실제이름과 입력이름을 매칭
        						strArg, 			// 입력갑스로 보낼 arguments, strFormData="20120607"
        						callBackFnc); // 통신방법 정의 [생략가능]
        };

        this.fnImageFileCallback = function() {

        };
        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.form_onload,this);
            this.divData.addEventHandler("ondragmove",this.divData_ondragmove,this);
            this.divData.form.btnFILE_DOWNLOAD.addEventHandler("onclick",this.divData_btnFILE_DOWNLOAD_onclick,this);
        };
        this.loadIncludeScript("DSA_EMPLOYEE_FILES.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
