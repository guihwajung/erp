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
            this.set_titletext("점검후 사진");
            if (Form == this.constructor)
            {
                this._setFormPosition(480,300);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("_dsProc", this);
            obj._setContents("<ColumnInfo><Column id=\"TARGET\" type=\"STRING\" size=\"256\"/><Column id=\"SP\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"TARGET\">select</Col><Col id=\"SP\">DBSPR_WORKENDSIGN_SELECT</Col></Row><Row><Col id=\"TARGET\">update</Col><Col id=\"SP\">DBSPR_WORKENDSIGN_UPDATE</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsList", this);
            obj._setContents("<ColumnInfo><Column id=\"PIC_SIGNNM\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsImageFile", this);
            obj._setContents("<ColumnInfo><Column id=\"filepath\" type=\"STRING\" size=\"256\"/><Column id=\"filename\" type=\"STRING\" size=\"256\"/><Column id=\"filereturn\" type=\"STRING\" size=\"10000\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsSearch", this);
            obj._setContents("<ColumnInfo><Column id=\"CD_SITE\" type=\"STRING\" size=\"256\"/><Column id=\"TY_SEARCH\" type=\"STRING\" size=\"256\"/><Column id=\"CD_JOB\" type=\"STRING\" size=\"256\"/><Column id=\"TY_GBN\" type=\"STRING\" size=\"256\"/><Column id=\"TY_UMGB\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row/></Rows>");
            this.addChild(obj.name, obj);


            obj = new FileDownTransfer("FileDownTransfer00", this);
            this.addChild(obj.name, obj);


            obj = new FileUpTransfer("FileUpTransfer00", this);
            this.addChild(obj.name, obj);


            obj = new FileDialog("fdg00", this);
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Static("staTitle","0","10",null,"22","0",null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_text("완료확인사인");
            obj.set_cssclass("sta_TITLE_Bg");
            obj.set_textAlign("center");
            this.addChild(obj.name, obj);

            obj = new ImageViewer("imgPicAfter1","5","40",null,null,"5","40",null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_stretch("fixaspectratio");
            this.addChild(obj.name, obj);

            obj = new Button("btnUpload","20%","imgPicAfter1:10","80","20",null,null,null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_text("업로드");
            obj.getSetter("uWord").set("popup.cancel");
            this.addChild(obj.name, obj);

            obj = new Button("btnDownload","btnUpload:20","imgPicAfter1:10","80","20",null,null,null,null,null,null,this);
            obj.set_taborder("3");
            obj.set_text("다운로드");
            obj.getSetter("uWord").set("popup.cancel");
            this.addChild(obj.name, obj);

            obj = new Button("btnClose","btnDownload:20","imgPicAfter1:10","80","20",null,null,null,null,null,null,this);
            obj.set_taborder("4");
            obj.set_text("닫기");
            obj.getSetter("uWord").set("popup.cancel");
            this.addChild(obj.name, obj);
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
        this.registerScript("DBS_WORKENDSIGN.xfdl", function() {
        /************************************************************************************************
         * FORM 변수 선언 영역
         ***********************************************************************************************/
         this.filepath = "/DB/WORK/SIGN/";
         this.fileConfig = {};
        /***********************************************************************************************
        * FORM EVENT 영역(onload)
        /***********************************************************************************************/
        this.form_onload = function(obj,e)
        {
        	this.gfnFormOnLoad(this); //초기화[필수]

        	this.fnSetParameter();

        	this.dsSearch.setColumn(0, "CD_SITE", this.getOwnerFrame().CD_SITE);
        	this.dsSearch.setColumn(0, "CD_JOB", this.getOwnerFrame().CD_JOB);

        	// 파일설정
        	this.fileConfig = this.gfnGetFileConfig();
        	this.fileConfig.allowTypes = ["jpg","jpeg","gif","png"]; // 넥사브라우저 전용, 웹은 적용불가
        	this.FileUpTransfer00.clearFileList();

        	this.filepath = "/DB/WORK/SIGN/" + this.dsSearch.getColumn(0, "CD_SITE") + "/" + this.dsSearch.getColumn(0, "CD_JOB");

        	this.imgPicAfter1.set_image(null);
        	if( !this.gfnIsNull(this.dsSearch.getColumn(0, "CD_SITE")) && !this.gfnIsNull(this.dsSearch.getColumn(0, "CD_JOB"))) {
        		this.fnImgSelect();
        	}
        };

        /************************************************************************
         * 변수 선언
         ************************************************************************/

        /************************************************************************
         * 이벤트 설정
         ************************************************************************/
        this.fnSetEvent = function() {

        };
        /************************************************************************
         * 파라미터 설정
         ************************************************************************/
        this.fnSetParameter = function() {
        	this.dsSelect = new Dataset();
        	this.dsSelect.addColumn("CD_SITE", "string");
        	this.dsSelect.addColumn("TY_SEARCH", "int");
        	this.dsSelect.addColumn("CD_JOB", "string");
        	this.dsSelect.addColumn("TY_GBN", "int");
        	this.dsSelect.addColumn("TY_UMGB", "string");

        	this.dsUpdate = new Dataset();
        	this.dsUpdate.addColumn("CD_SITE", "string");
        	this.dsUpdate.addColumn("CD_JOB", "string");
        	this.dsUpdate.addColumn("PIC_SIGNNM", "string");
        };

        /************************************************************************
         * Validate
         ************************************************************************/

        /************************************************************************
         * 코드파인드 이벤트
         ************************************************************************/

        /************************************************************************
         * 컨트롤 이벤트
         ************************************************************************/
         /*
          *	조회 버튼
          */
        this.fnImgSelect = function() {

        	this.dsSelect.clearData();
        	this.dsSelect.addRow();
        	this.dsSelect.setColumn(0, "CD_SITE", this.dsSearch.getColumn(0, "CD_SITE"));
        	this.dsSelect.setColumn(0, "TY_SEARCH", this.dsSearch.getColumn(0, "TY_SEARCH"));
        	this.dsSelect.setColumn(0, "CD_JOB", this.dsSearch.getColumn(0, "CD_JOB"));
        	this.dsSelect.setColumn(0, "TY_GBN", this.dsSearch.getColumn(0, "TY_GBN"));
        	this.dsSelect.setColumn(0, "TY_UMGB", this.dsSearch.getColumn(0, "TY_UMGB"));

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

        /**
        * @ 취소버튼이벤트
        */
        this.btnCancle_onclick = function(obj,e)
        {
        	this.getParentContext().close(false);
        };
        /************************************************************************
         * 콜백 이벤트
         ************************************************************************/
        /*
         *	콜백 처리
         */
        this.fnCallback = function(svcID, errorCode, errorMsg)
        {
        	if (errorCode != 0) {
        		this.gfnAlert(errorMsg);
        		return;
        	}

        	if (svcID == "select") {
        		trace(this.dsList.saveXML());
        		if(this.dsList.rowcount > 0){
        			this.fnImageView();
        		}
        	}
        	else if (svcID == "imagefile")
        	{
        		this.imgPicAfter1.set_image(this.dsImageFile.getColumn(0, "filereturn"));
        	}
        	else if(svcID == "save")
        	{
        		this.fnImgSelect();
        	}
        }

        /*
         * 이미지 파일 다운로드 버튼 클릭
         */
        this.btnPicImgDown_onclick = function(obj,e)
        {
        	if( !this.gfnIsNull( this.dsList.getColumn(0,"PIC_SIGNNM") ) ){
        		this.fnDownload(this.filepath, this.dsList.getColumn(0,"PIC_SIGNNM"));
        	}
        };

        /*
         * 이미지 파일 다운로드
         */
        this.fnDownload = function(strFilePath, strFileName) {

        	this.fileConfig.downloadUrl = "/file/downloadFile.do";
        	var encodeFileName = encodeURIComponent(strFileName);

        	var surl = this.fileConfig.host+ this.fileConfig.downloadUrl; // + encodeFileName;

        	this.FileDownTransfer00.set_url(surl);

        	this.FileDownTransfer00.setPostData("path", strFilePath);
        	this.FileDownTransfer00.setPostData("fileName", encodeFileName);
        	if( system.navigatorname =="nexacro"){
        		this.FileDownTransfer00.set_downloadfilename(strFileName);
        	}
        	this.FileDownTransfer00.download();
        };

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
        				this.FileUpTransfer00.setPostData("path", this.filepath);
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
        		if(e.datasets.length > 0) {
        			for(var i = 0; i < e.datasets[0].rowcount; i++) {
        				if(this.dsList.rowcount == 0)
        				{
        					this.dsList.addRow();
        				}
        				this.dsList.setColumn(0, "PIC_SIGNNM", obj.filelist[i].filename);
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
        	this.dsUpdate.clearData();
        	var nrow = this.dsUpdate.addRow();

        	this.dsUpdate.setColumn(nrow, "CD_SITE", this.dsSearch.getColumn(0, "CD_SITE"));
        	this.dsUpdate.setColumn(nrow, "CD_JOB", this.dsSearch.getColumn(0, "CD_JOB"));
        	this.dsUpdate.setColumn(nrow, "PIC_SIGNNM", this.dsList.getColumn(0, "PIC_SIGNNM"));

        	var strSvcId    = "save";
        	var strSvcType  = "save";
        	var inProc		= "_dsProc";
        	var inData      = "update=dsUpdate";
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


        this.fnImageView = function() {

        	this.dsImageFile.clearData();
        	this.dsImageFile.addRow();

        	this.dsImageFile.setColumn(0, "filepath", this.filepath);
        	this.dsImageFile.setColumn(0, "filename", this.dsList.getColumn(0, "PIC_SIGNNM"));

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
        						strArg, 		// 입력갑스로 보낼 arguments, strFormData="20120607"
        						callBackFnc,
        						false); 		// 통신방법 정의 [생략가능]
        };

        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.form_onload,this);
            this.btnUpload.addEventHandler("onclick",this.fnUpload,this);
            this.btnDownload.addEventHandler("onclick",this.btnPicImgDown_onclick,this);
            this.btnClose.addEventHandler("onclick",this.btnCancle_onclick,this);
            this.dsList.addEventHandler("onvaluechanged",this.dsList_onvaluechanged,this);
            this.FileUpTransfer00.addEventHandler("onprogress",this.FileUpTransfer00_onprogress,this);
            this.FileUpTransfer00.addEventHandler("onsuccess",this.FileUpTransfer00_onsuccess,this);
            this.FileUpTransfer00.addEventHandler("onerror",this.FileUpTransfer00_onerror,this);
            this.fdg00.addEventHandler("onclose",this.fdg00_onclose,this);
        };
        this.loadIncludeScript("DBS_WORKENDSIGN.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
