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
            this.set_titletext("부외자산관리");
            if (Form == this.constructor)
            {
                this._setFormPosition(470,450);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("dsList", this);
            obj._setContents("");
            this.addChild(obj.name, obj);


            obj = new Dataset("_dsProc", this);
            obj._setContents("<ColumnInfo><Column id=\"TARGET\" type=\"STRING\" size=\"256\"/><Column id=\"SP\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"TARGET\">select</Col><Col id=\"SP\">DMBPR_ASSET_OUT_IMG_SELECT</Col></Row><Row><Col id=\"TARGET\">fileup</Col><Col id=\"SP\">DMBPR_ASSET_OUT_IMG_UPDATE</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsSearch", this);
            obj._setContents("<ColumnInfo><Column id=\"NO_ASSET\" type=\"STRING\" size=\"256\"/><Column id=\"DS_ASSET\" type=\"STRING\" size=\"256\"/><Column id=\"NO_KEY\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"NO_ASSET\"/></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsDeleteFile", this);
            obj._setContents("<ColumnInfo><Column id=\"filepath\" type=\"STRING\" size=\"256\"/><Column id=\"filename\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsImageFile", this);
            obj._setContents("<ColumnInfo><Column id=\"filepath\" type=\"STRING\" size=\"256\"/><Column id=\"filename\" type=\"STRING\" size=\"256\"/><Column id=\"filereturn\" type=\"STRING\" size=\"2000000\"/></ColumnInfo>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Div("divSearch","0.0","10.0",null,"46.0","0",null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_cssclass("div_SEARCH_Bg");
            obj.set_text("");
            this.addChild(obj.name, obj);

            obj = new Static("staCD_SYSTEM","0.0","10.0","92.0","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("0");
            obj.set_text("자산번호");
            obj.set_textDecoration("none");
            obj.set_cssclass("sta_WF_SchLabel");
            this.divSearch.addChild(obj.name, obj);

            obj = new Edit("edtNO_ASSET","staCD_SYSTEM:0.0","10.0","90","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("1");
            obj.set_readonly("true");
            obj.set_textAlign("center");
            this.divSearch.addChild(obj.name, obj);

            obj = new Edit("edtDS_ASSET","edtNO_ASSET:0.0","10.0","234","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("2");
            obj.set_readonly("true");
            this.divSearch.addChild(obj.name, obj);

            obj = new Edit("edtNO_KEY","edtDS_ASSET:0.0","10.0","30","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("3");
            obj.set_readonly("true");
            obj.set_textAlign("center");
            obj.set_visible("false");
            this.divSearch.addChild(obj.name, obj);

            obj = new Div("divData","0","divSearch:10",null,null,"0","0",null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_cssclass("div_DATA_Bg");
            this.addChild(obj.name, obj);

            obj = new ImageViewer("ImageViewer","0","0",null,null,"0","50",null,null,null,null,this.divData.form);
            obj.set_taborder("13");
            obj.set_stretch("fixaspectratio");
            this.divData.addChild(obj.name, obj);

            obj = new Button("btnClose",null,"ImageViewer:10","70","25","10",null,null,null,null,null,this.divData.form);
            obj.set_taborder("2");
            obj.set_text("닫기");
            this.divData.addChild(obj.name, obj);

            obj = new Button("btnDelete",null,"ImageViewer:10","75","25","btnClose:5",null,null,null,null,null,this.divData.form);
            obj.set_taborder("3");
            obj.set_text("사진삭제");
            this.divData.addChild(obj.name, obj);

            obj = new Button("btnUploadP",null,"ImageViewer:10","75","25","btnDelete:5",null,null,null,null,null,this.divData.form);
            obj.set_taborder("12");
            obj.set_text("사진등록");
            this.divData.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this
            obj = new Layout("default","",this._adjust_width,this._adjust_height,this,function(p){});
            this.addLayout(obj.name, obj);
            
            // BindItem Information
            obj = new BindItem("item0","divSearch.form.edtNO_ASSET","value","dsSearch","NO_ASSET");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item1","divSearch.form.edtNO_KEY","value","dsSearch","NO_KEY");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item2","divSearch.form.edtDS_ASSET","value","dsSearch","DS_ASSET");
            this.addChild(obj.name, obj);
            obj.bind();
            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script
        this.registerScript("DMB_ASSET_OUT_IMG.xfdl", function() {
        this.objApp = this.gfnGetApplication();

        this.filepath = "/DM/ASSET_OUT/";
        this.fileuploads0 = {};

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

        	var today = this.gfnGetDate();

        	this.divSearch.form.edtNO_ASSET.set_value(this.getOwnerFrame().NO_ASSET);
        	this.divSearch.form.edtDS_ASSET.set_value(this.getOwnerFrame().DS_ASSET);
        	this.divSearch.form.edtNO_KEY.set_value(this.getOwnerFrame().NO_KEY);

        	this.fileConfig = this.gfnGetFileConfig();
        	this.fileConfig.allowTypes = ["jpg","jpeg","gif","png"]; // 넥사브라우저 전용, 웹은 적용불가
        	this.fileConfig.uploadUrl = this.fileConfig.uploadUrl.replace("path=", "path=" + this.filepath);
        	this.fileConfig.downloadUrl = this.fileConfig.downloadUrl.replace("path=", "path=" + this.filepath);
        	console.log(this.fileConfig.uploadUrl);
        	console.log(this.filepath);
        	console.log(this.fileConfig.downloadUrl);

        	var fileid1 = "fileup_0";
        	this.fileup0 = new FileUpload();
        	this.fileup0.init(fileid1, 0,0,0,0);
        		if(this.lookup(fileid1)) {
        			delete this.fileuploads0[fileid1];
        			this.removeChild(fileid1);
        		}
        	this.addChild(fileid1, this.fileup0);
        	this.fileup0.show();
        	this.fileup0.row = 0;
        	this.fileup0.addEventHandler("onitemchanged", this.fileup1_onitemchanged, this);
        	this.fileup0.addEventHandler("onsuccess", this.fileup1_onsuccess, this);
        	this.fileup0.addEventHandler("onerror", this.fileup1_onerror, this);

        	this.fileuploads0[fileid1] = this.fileup0;

        	this.fnSelect();
        };

        /************************************************************************
         * 버튼 설정 : 화면(Tab) 전환시 마다 호출
         ************************************************************************/
        this.fnSetButton = function() {
         	var id_group = this.FormInfo.ID_GROUP;
         	var gr_search = this.FormInfo.GR_SEARCH;
         	var cd_role = this.FormInfo.CD_ROLE;
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
        	// this.dxGrid = this.divData.form.objGrid;
        };

        /************************************************************************
         * 이벤트 설정
         ************************************************************************/
        this.fnSetEvent = function() {
        	// this.gfnGridInit(this.dxGrid, this.dsList, "DM", "DMB_ASSET_OUT_HISTORY");
        }

        /************************************************************************
         * 파라미터 설정
         ************************************************************************/
        this.fnSetParameter = function() {
        	this.dsSelect = new Dataset();
        	this.dsSelect.addColumn("NO_ASSET","string");
        	this.dsSelect.addColumn("NO_KEY","string");

        	this.dsFileUp2 = new Dataset();
        	this.dsFileUp2.addColumn("NO_ASSET", "string");
        	this.dsFileUp2.addColumn("NO_KEY", "string");
        	this.dsFileUp2.addColumn("IMG_NM", "string");
        }

        /************************************************************************
         * 컨트롤 이벤트
         ************************************************************************/
         /*
          *	조회 버튼
          */
        this.fnSelect = function() {

        	this.dsSelect.clearData();
        	this.dsSelect.addRow();

        	this.dsSelect.setColumn(0,"NO_ASSET",this.dsSearch.getColumn(0, "NO_ASSET"));
        	this.dsSelect.setColumn(0,"NO_KEY",this.dsSearch.getColumn(0, "NO_KEY"));

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

        }

        /*
         *	엑셀 버튼
         */
        this.fnExcel = function() {
        	// this.gfnExcelExport(this.dxGrid);
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
        	if (svcID == "select") {
        		this.fnImageView();
        	}
        	else if(svcID == "update"){
        		if (errorCode == 0) {
        			this.fnSelect();
        		} else {
        			this.gfnAlert(errorMsg);
        		}
        	}
        	else if(svcID == "imagefile"){
        		var key = this.dsSearch.getColumn(0, "NO_KEY");
        		var fullpath = this.filepath + key;

        		console.log("여기");
        		console.log(this.filepath);
        		console.log(key);
        		console.log(this.dsImageFile.saveXML());
        		console.log(this.dsImageFile.rowcount);

        		if(this.dsImageFile.rowcount == 0)
        		{
        			console.log("여기1");
        			this.divData.form.ImageViewer.set_image(null);
        		}
        		else if(this.dsImageFile.rowcount > 0){
        			console.log("여기2");
        			for(var i=0;i<this.dsImageFile.rowcount;i++)
        			{
        				if(this.dsImageFile.getColumn(i, "filename") == this.dsList.getColumn(0, "DS_ASSET_IMG") && this.dsImageFile.getColumn(i, "filepath") == fullpath){
        					this.divData.form.ImageViewer.set_image(this.dsImageFile.getColumn(i, "filereturn"));
        				}
        			}
        		}
        	}
        }

        this.fnImageView = function() {

        	this.dsImageFile.clearData();
        	if(!this.gfnIsNull(this.dsList.getColumn(0, "DS_ASSET_IMG"))){
        		var nrow = this.dsImageFile.addRow();
        		var key = this.dsSearch.getColumn(0, "NO_KEY");
        		this.dsImageFile.setColumn(nrow, "filepath", this.filepath + key);
        		this.dsImageFile.setColumn(nrow, "filename", this.dsList.getColumn(0, "DS_ASSET_IMG"));
        	}

        	// console.log(this.dsImageFile.saveXML());

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

        /************************************************************************
         * 코드파인드 이벤트
         ************************************************************************/

        /************************************************************************
         * 그리드 이벤트
         ************************************************************************/
        this.fnGrid_RowCellChanged = function(obj,e)
        {

        }
        /************************************************************************
         * 기타 이벤트
         ************************************************************************/
        this.dsSearch_onvaluechanged = function(obj,e)
        {
        	/*
        	if(e.oldvalue != e.newvalue) {
        		this.gfnSetFormStatus(this);	// 폼상태 초기화
        		this.gfnGridClear(this.dxGrid);
        	}
        	*/
        };

        this.fnAPP = function(obj,e) {

        }

        this.fnAPPCANCEL = function(obj,e) {

        }

        this.fnAPP_callback = function(strId, val)
        {
        	if(val == true) {

        	}
        }

        this.divData_btnUploadP_onclick = function(obj,e)
        {
        	var fileup0 = this.fileup0;
        	fileup0.filefindbuttons.upfile0.click();
        };

        this.fileup1_onitemchanged = function(obj,e) {
        	var row = obj.row;

        	if(obj.filelist.length > 0) {

        		var filename = obj.filelist[0].filename;
        		var fileext = filename.toLocaleLowerCase().substring(filename.lastIndexOf('.')+1);

        		if(!this.gfnIsExistInArray(this.fileConfig.allowTypes, fileext)) {
        			this.gfnAlert("이미지 파일(" + this.fileConfig.allowTypes.join(',') + ")을 선택하세요.");
        			return;
        		}

        		this.keys = Object.keys(this.fileuploads0);
        		for(var i = 0; i < this.keys.length; i++) {
        			var fileup = this.fileuploads0[this.keys[i]];
        			var sFilePath = fileup.value;
        			var dirExpt = sFilePath.lastIndexOf("\\")+1;
        			var sFileName = sFilePath.substr(dirExpt);

        			var key = this.dsSearch.getColumn(0, "NO_KEY");
        			var sUploadUrl = this.fileConfig.host + this.fileConfig.uploadUrl;
        			fileup.upload(sUploadUrl + "?path=" + this.filepath + key);
        		}
        	}
        }

        this.fileup1_onsuccess = function(obj,e) {
        	if(!this.gfnIsNull(this.dsList.getColumn(0, "DS_ASSET_IMG"))){
        		this.dsDeleteFile.clearData();
        		var nrow = this.dsDeleteFile.addRow();
        		var key = this.dsSearch.getColumn(nrow, "NO_KEY");
        		this.dsDeleteFile.setColumn(nrow, "filepath", this.filepath + key);
        		this.dsDeleteFile.setColumn(nrow, "filename", this.dsList.getColumn(0, "DS_ASSET_IMG"));
        	}
        	this.fnFileUploadGo("1",  obj.filelist[0].filename);
        };

        this.fileup1_onerror = function(obj,e) {

        };

        this.fnFileUploadGo = function(str, filenm)
        {
        	this.dsFileUp2.clearData();
        	this.dsFileUp2.addRow();
        	this.dsFileUp2.setColumn(0, "NO_ASSET", this.dsSearch.getColumn(0, "NO_ASSET"));
        	this.dsFileUp2.setColumn(0, "NO_KEY", this.dsSearch.getColumn(0, "NO_KEY"));
        	this.dsFileUp2.setColumn(0, "IMG_NM", filenm);

        	var strSvcId    = "update";
        	var strSvcType  = "save";
        	var inProc		= "_dsProc";
        	var inData      = "fileup=dsFileUp2";
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
        							strArg, 		// 입력갑스로 보낼 arguments, strFormData="20120607"
        							callBackFnc);   // 통신방법 정의 [생략가능]
        	}
        };

        this.divData_btnClose_onclick = function(obj,e)
        {
        	this.getParentContext().close(false);
        };

        this.divData_btnDelete_onclick = function(obj,e)
        {
        	if(!this.gfnIsNull(this.dsList.getColumn(0, "DS_ASSET_IMG"))){
        		this.dsDeleteFile.clearData();
        		var nrow = this.dsDeleteFile.addRow();
        		var key = this.dsSearch.getColumn(nrow, "NO_KEY");
        		this.dsDeleteFile.setColumn(nrow, "filepath", this.filepath + key);
        		this.dsDeleteFile.setColumn(nrow, "filename", this.dsList.getColumn(0, "DS_ASSET_IMG"));

        		this.fnFileUploadGo("1",  "");
        	}
        };

        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.form_onload,this);
            this.divData.form.btnClose.addEventHandler("onclick",this.divData_btnClose_onclick,this);
            this.divData.form.btnDelete.addEventHandler("onclick",this.divData_btnDelete_onclick,this);
            this.divData.form.btnUploadP.addEventHandler("onclick",this.divData_btnUploadP_onclick,this);
            this.dsList.addEventHandler("oncolumnchanged",this.dsList_oncolumnchanged,this);
            this.dsSearch.addEventHandler("onvaluechanged",this.dsSearch_onvaluechanged,this);
        };
        this.loadIncludeScript("DMB_ASSET_OUT_IMG.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
