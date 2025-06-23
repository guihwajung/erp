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
            this.set_titletext("양식파일관리");
            if (Form == this.constructor)
            {
                this._setFormPosition(1280,720);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("dsList", this);
            obj._setContents("");
            this.addChild(obj.name, obj);


            obj = new Dataset("_dsProc", this);
            obj._setContents("<ColumnInfo><Column id=\"TARGET\" type=\"STRING\" size=\"256\"/><Column id=\"SP\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"TARGET\">select</Col><Col id=\"SP\">DZZPR_FORM_FILE_SELECT</Col></Row><Row><Col id=\"TARGET\">save</Col><Col id=\"SP\">DZZPR_FORM_FILE_SAVE</Col></Row><Row><Col id=\"TARGET\">download</Col><Col id=\"SP\">DZZPR_FORM_FILE_DOWNLOAD</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsSearch", this);
            obj._setContents("<ColumnInfo><Column id=\"USE_YN\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"USE_YN\"/></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsUSE_YN", this);
            obj._setContents("<ColumnInfo><Column id=\"CD_CODE\" type=\"STRING\" size=\"256\"/><Column id=\"DS_CODE\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"CD_CODE\"/><Col id=\"DS_CODE\">전체</Col></Row><Row><Col id=\"CD_CODE\">Y</Col><Col id=\"DS_CODE\">사용</Col></Row><Row><Col id=\"CD_CODE\">N</Col><Col id=\"DS_CODE\">미사용</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsDownload", this);
            obj._setContents("");
            this.addChild(obj.name, obj);


            obj = new FileDialog("fdg00", this);
            this.addChild(obj.name, obj);


            obj = new FileUpTransfer("FileUpTransfer00", this);
            this.addChild(obj.name, obj);


            obj = new FileDownTransfer("FileDownTransferFormFile", this);
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Div("divSearch","0","0",null,"46","0",null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_cssclass("div_SEARCH_Bg");
            obj.set_formscrolltype("none");
            this.addChild(obj.name, obj);

            obj = new Static("staUSE_YN","0","10","92","24",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("0");
            obj.set_text("사용여부");
            obj.set_textDecoration("none");
            obj.set_cssclass("sta_WF_SchLabel");
            this.divSearch.addChild(obj.name, obj);

            obj = new Combo("ccboUSE_YN","staUSE_YN:0","10","80","24",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("1");
            obj.set_innerdataset("dsUSE_YN");
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
            // Layout Functions
            //-- Default Layout : this
            obj = new Layout("default","",this._adjust_width,this._adjust_height,this,function(p){});
            this.addLayout(obj.name, obj);
            
            // BindItem Information
            obj = new BindItem("item0","divSearch.form.ccboUSE_YN","value","dsSearch","USE_YN");
            this.addChild(obj.name, obj);
            obj.bind();
            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script
        this.registerScript("DZZ_FORM_FILE.xfdl", function() {
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


        	// 파일설정
        	this.fileConfig = this.gfnGetFileConfig();
        	this.fileConfig.downloadUrl = "/file/rtfdown.do";
        	this.fileConfig.uploadUrl = "/file/rtfup.do";
        };

        /************************************************************************
         * 버튼 설정
         * 서브버튼 사용 처리. 공통 및 확장버튼 버튼관리화면에서 셋팅.
         ************************************************************************/
        this.fnSetButton = function() {
        }

        /************************************************************************
         * 확장 버튼 : 화면별 버튼 설정 ID, function 연결 (화면버튼관리)
         ************************************************************************/
        this.fnSetExtendButton = function() {
        	this.btnDownload = this.gfnFormButtonAdd("btnDownload", "fnDownload");
        	this.btnUpload = this.gfnFormButtonAdd("btnUpload", "fnUpload");
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
        	// 그리드 초기화
        	this.gfnGridInit(this.dxGrid, this.dsList, "DZ", "DZZ_FORM_FILE");
        };

        /************************************************************************
         * 파라미터 설정
         ************************************************************************/
        this.fnSetParameter = function() {
        	this.dsSelect = new Dataset();
        	this.dsSelect.addColumn("WORK_CD", "string");
        	this.dsSelect.addColumn("USE_YN", "string");

        	this.dsSave = new Dataset();
        	this.dsSave.addColumn("TY_SAVE", "string");
        	this.dsSave.addColumn("FORM_FILE_NO", "int");
        	this.dsSave.addColumn("SUBJECT", "string");
        	this.dsSave.addColumn("WORK_CD", "string");
        	this.dsSave.addColumn("USE_YN", "string");
        	this.dsSave.addColumn("EXT_CD", "string");
        	this.dsSave.addColumn("ID_USER", "string");
        	this.dsSave.addColumn("WORK_GBN", "string");
        	this.dsSave.addColumn("WORK_GBN_CD", "string");
        	this.dsSave.addColumn("REQUIRED_YN", "string");
        	this.dsSave.addColumn("SORT_ORDER", "int");

        	this.dsDownload = new Dataset();
        	this.dsDownload.addColumn("FORM_FILE_NO", "int");
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

        	this.dsSelect.setColumn(0, "WORK_CD", "");
        	this.dsSelect.setColumn(0, "USE_YN", this.dsSearch.getColumn(0, "USE_YN"));

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
        	var nrow = this.gfnGridAdd(this.dxGrid); // top (default), bottom, current
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

        	this.dsSave.clearData();

        	for (var i = 0; i < this.dsList.rowcount; i++) {
        		var flag = this.gfnGetFlag(this.dsList, i);
        		switch(flag) {
        			case "I":
        			case "U":
        			case "D":
        				var nrow = this.dsSave.addRow();
        				this.dsSave.setColumn(nrow, "TY_SAVE", flag);
        				this.dsSave.setColumn(nrow, "FORM_FILE_NO", this.dsList.getColumn(i, "FORM_FILE_NO"));
        				this.dsSave.setColumn(nrow, "SUBJECT", this.dsList.getColumn(i, "SUBJECT"));
        				this.dsSave.setColumn(nrow, "WORK_CD", this.dsList.getColumn(i, "WORK_CD"));
        				this.dsSave.setColumn(nrow, "USE_YN", this.dsList.getColumn(i, "USE_YN"));
        				this.dsSave.setColumn(nrow, "EXT_CD", this.dsList.getColumn(i, "EXT_CD"));
        				this.dsSave.setColumn(nrow, "ID_USER", this.AuthClient.ID_USER);
        				this.dsSave.setColumn(nrow, "WORK_GBN", this.dsList.getColumn(i, "WORK_GBN"));
        				this.dsSave.setColumn(nrow, "WORK_GBN_CD", this.dsList.getColumn(i, "WORK_GBN_CD"));
        				this.dsSave.setColumn(nrow, "REQUIRED_YN", this.dsList.getColumn(i, "REQUIRED_YN"));
        				this.dsSave.setColumn(nrow, "SORT_ORDER", this.dsList.getColumn(i, "SORT_ORDER"));
        				break;
        		}
        	}

        	if (this.dsSave.rowcount == 0) return;


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
        	/*
        	if (this.gfnIsNull(this.dsSearch.getColumn(0,"CD_SYSTEM"))) {
        		validate = false;
        		// Alert후 실행할 처리
        		this.fnVaidateCallback = function() {
        			this.ccfCD_SYSTEM.form.CDTextBox.setFocus();
        		}
        		this.gfnAlert("시스템을 입력하세요.", "fnVaidateCallback");
        	}
        	*/
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
        	else if(svcID == "download") {

        	}
        	else if(svcID == "upload") {

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
        this.dsSearch_onvaluechanged = function(obj,e)
        {
        	if(e.oldvalue != e.newvalue) {
        		this.gfnSetFormStatus(this);	// 폼상태 초기화
        		this.gfnGridClear(this.dxGrid);
        	}
        };

        // 확장버튼 다운로드 이벤트
        this.fnDownload = function(obj,e) {
        	if (!this.gfnGridIsRow(this.dxGrid)) { return false; }
        	if (this.dsList.getColumn(this.dsList.rowposition, "YN_UPLOAD") == "N") { return false; }

        	var surl = this.fileConfig.host+ this.fileConfig.downloadUrl;
        	this.FileDownTransferFormFile.clearPostDataList();
        	this.FileDownTransferFormFile.set_url(surl);
        	this.FileDownTransferFormFile.setPostData("FORM_FILE_NO", this.dsList.getColumn(this.dsList.rowposition, "FORM_FILE_NO"));
        	this.FileDownTransferFormFile.download();
        }

        // 확장버튼 업로드 이벤트
        this.fnUpload = function(obj,e) {
        	this.fdg00.row = this.dsList.rowposition;
        	this.fdg00.ext = this.dsList.getColumn(this.dsList.rowposition, "EXT_CD");
        	this.fdg00.open('FileOpen', FileDialog.LOAD);
        }

        // 파일저장
        this.fdg00_onclose = function(obj,e)
        {
        	this.addFileList(obj, e.virtualfiles);
        }

        this.addFileList = function(obj, filelist)
        {
        	this.FileList = filelist;
        	if(filelist.length > 0) {
        		var vFile;
        		for (var i = 0; i < filelist.length; i++)
        		{
        			vFile = filelist[i];
        //			var extFile = vFile.filename.substring(vFile.filename.lastIndexOf('.'));
        // 			if(extFile.toLocaleLowerCase() != ".rtf"){
        // 				this.gfnAlert("RTF 파일이 아닙니다.");
        // 				return;
        // 			}
        			vFile.row = obj.row;
        			vFile.ext = obj.ext;
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
        			var row = obj.row;
        			// 로우별로 하나씩 올리는 화면이므로 바로 업로드 처리
        			this.FileUpTransfer00.clearFileList();
        			this.FileUpTransfer00.addFile(obj.filename, obj);
        			if(this.FileUpTransfer00.filelist.length > 0) {
        				this._waitCursor(true);
        				var sUploadUrl = this.fileConfig.host + this.fileConfig.uploadUrl;
        				this.FileUpTransfer00.setPostData("FORM_FILE_NO", this.dsList.getColumn(row, "FORM_FILE_NO"));
        				this.FileUpTransfer00.setPostData("ID_USER", this.AuthClient.ID_USER);
        				this.FileUpTransfer00.setPostData("TY_FILE", obj.ext);
        				this.FileUpTransfer00.upload(sUploadUrl);
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
        		this.FormBtns.Select.click();
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
        this.loadIncludeScript("DZZ_FORM_FILE.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
