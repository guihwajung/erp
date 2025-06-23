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
            this.set_titletext("점검전 사진");
            this.getSetter("maxwidth").set("960");
            this.getSetter("maxheight").set("300");
            if (Form == this.constructor)
            {
                this._setFormPosition(960,300);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("_dsProc", this);
            obj._setContents("<ColumnInfo><Column id=\"TARGET\" type=\"STRING\" size=\"256\"/><Column id=\"SP\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"TARGET\">select</Col><Col id=\"SP\">DBSPR_WORKENDPIC_SELECT</Col></Row><Row><Col id=\"TARGET\">update</Col><Col id=\"SP\">DBSPR_WORKENDPIC_UPDATE</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsList", this);
            obj._setContents("<ColumnInfo><Column id=\"PIC_AFTERNM\" type=\"STRING\" size=\"256\"/><Column id=\"PIC_AFTERNM2\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsImageFile", this);
            obj._setContents("<ColumnInfo><Column id=\"filepath\" type=\"STRING\" size=\"256\"/><Column id=\"filename\" type=\"STRING\" size=\"256\"/><Column id=\"filename2\" type=\"STRING\" size=\"256\"/><Column id=\"filereturn\" type=\"STRING\" size=\"10000\"/><Column id=\"filereturn2\" type=\"STRING\" size=\"10000\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsSearch", this);
            obj._setContents("<ColumnInfo><Column id=\"CD_SITE\" type=\"STRING\" size=\"256\"/><Column id=\"TY_SEARCH\" type=\"STRING\" size=\"256\"/><Column id=\"CD_JOB\" type=\"STRING\" size=\"256\"/><Column id=\"TY_GBN\" type=\"STRING\" size=\"256\"/><Column id=\"TY_UMGB\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row/></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsImageFile01", this);
            obj._setContents("<ColumnInfo><Column id=\"filepath\" type=\"STRING\" size=\"256\"/><Column id=\"filename\" type=\"STRING\" size=\"256\"/><Column id=\"filename2\" type=\"STRING\" size=\"256\"/><Column id=\"filereturn\" type=\"STRING\" size=\"10000\"/><Column id=\"filereturn2\" type=\"STRING\" size=\"10000\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new FileDownTransfer("FileDownTransfer00", this);
            this.addChild(obj.name, obj);


            obj = new FileUpTransfer("FileUpTransfer00", this);
            this.addChild(obj.name, obj);


            obj = new FileDialog("fdg00", this);
            this.addChild(obj.name, obj);


            obj = new FileDialog("fdg01", this);
            this.addChild(obj.name, obj);


            obj = new FileUpTransfer("FileUpTransfer01", this);
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new ImageViewer("imgPicAfter1","5","40",null,null,"488","40",null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_stretch("fixaspectratio");
            this.addChild(obj.name, obj);

            obj = new Button("btnUpload","27.92%","10","80","20",null,null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_text("업로드");
            obj.getSetter("uWord").set("popup.cancel");
            this.addChild(obj.name, obj);

            obj = new Button("btnDownload","btnUpload:24","10","80","20",null,null,null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_text("다운로드");
            obj.getSetter("uWord").set("popup.cancel");
            this.addChild(obj.name, obj);

            obj = new Button("btnClose","436","270","80","20",null,null,null,null,null,null,this);
            obj.set_taborder("3");
            obj.set_text("닫기");
            obj.getSetter("uWord").set("popup.cancel");
            this.addChild(obj.name, obj);

            obj = new ImageViewer("imgPicAfter2","485","40",null,null,"8","40",null,null,null,null,this);
            obj.set_taborder("4");
            obj.set_stretch("fixaspectratio");
            this.addChild(obj.name, obj);

            obj = new Button("btnUpload2","78.02%","10","80","20",null,null,null,null,null,null,this);
            obj.set_taborder("5");
            obj.set_text("업로드");
            obj.getSetter("uWord").set("popup.cancel");
            this.addChild(obj.name, obj);

            obj = new Button("btnDownload2","btnUpload2:25","10","80","20",null,null,null,null,null,null,this);
            obj.set_taborder("6");
            obj.set_text("다운로드");
            obj.getSetter("uWord").set("popup.cancel");
            this.addChild(obj.name, obj);

            obj = new Static("image1","14","9","130","24",null,null,null,null,null,null,this);
            obj.set_taborder("7");
            obj.set_text("이미지1");
            this.addChild(obj.name, obj);

            obj = new Static("image2","494","9","130","24",null,null,null,null,null,null,this);
            obj.set_taborder("8");
            obj.set_text("이미지2");
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
        this.registerScript("DBS_WORKENDPIC.xfdl", function() {
        /************************************************************************************************
         * FORM 변수 선언 영역
         ***********************************************************************************************/
         this.filepath = "/DB/WORK/AFTER/";
         this.fileConfig = {};
         this.fileuploads = {};
        /***********************************************************************************************
        * FORM EVENT 영역(onload)
        /***********************************************************************************************/
        this.form_onload = function(obj,e)
        {
        	this.gfnFormOnLoad(this); //초기화[필수]

        	this.fnSetParameter();

        	this.dsSearch.setColumn(0, "CD_SITE", this.getOwnerFrame().CD_SITE);
        	this.dsSearch.setColumn(0, "TY_SEARCH", this.getOwnerFrame().TY_SEARCH);
        	this.dsSearch.setColumn(0, "CD_JOB", this.getOwnerFrame().CD_JOB);
        	this.dsSearch.setColumn(0, "TY_GBN", this.getOwnerFrame().TY_GBN);
        	this.dsSearch.setColumn(0, "TY_UMGB", this.getOwnerFrame().TY_UMGB);

        	// 파일설정
        	this.fileConfig = this.gfnGetFileConfig();
        	this.fileConfig.allowTypes = ["jpg","jpeg","gif","png"]; // 넥사브라우저 전용, 웹은 적용불가
        	this.FileUpTransfer00.clearFileList();

        	this.filepath = "/DB/WORK/AFTER/" + this.dsSearch.getColumn(0, "CD_SITE") + "/" + this.dsSearch.getColumn(0, "CD_JOB");

        	this.imgPicAfter1.set_image(null);
        	this.imgPicAfter2.set_image(null);
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
        	this.dsUpdate.addColumn("PIC_AFTERNM", "string");
        	this.dsUpdate.addColumn("PIC_AFTERNM2", "string");
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
        // 	this.dsSelect.setColumn(0, "CD_SITE", this.dsSearch.getColumn(0, "CD_SITE"));
        // 	this.dsSelect.setColumn(0, "CD_JOB", this.dsSearch.getColumn(0, "CD_JOB"));
        // 	this.dsSelect.setColumn(0, "PIC_BEFORENM", this.dsList.getColumn(0, "PIC_BEFORENM"));
        // 	this.dsSelect.setColumn(0, "PIC_BEFORENM2", this.dsList.getColumn(0, "PIC_BEFORENM2"));

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
        	this.close();
        	//this.getParentContext().close(false);
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
        			if(!this.gfnIsNull(this.dsList.getColumn(0, "PIC_AFTERNM")) || !this.gfnIsNull(this.dsList.getColumn(0, "PIC_AFTERNM2")))
        			{
        				this.fnImageView();
        				this.fnImageView2();
        			}
        		}
        	}
        	else if (svcID == "imagefile")
        	{
        		trace("asdfasdf>>>" + this.dsImageFile.saveXML());
        		trace("filepath>>>" + this.filepath);
        		this.imgPicAfter1.set_image(this.dsImageFile.getColumn(0, "filereturn"));
        	}
        	else if (svcID == "imagefile2")
        	{
        		trace("filepath2>>>" + this.filepath);
        		this.imgPicAfter2.set_image(this.dsImageFile01.getColumn(0, "filereturn"));
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
        	if( !this.gfnIsNull( this.dsList.getColumn(0,"PIC_BEFORENM") ) ){
        		this.fnDownload(this.filepath, this.dsList.getColumn(0,"PIC_BEFORENM"));
        	}
        };

        this.btnPicImgDown2_onclick = function(obj,e)
        {
        	if( !this.gfnIsNull( this.dsList.getColumn(0,"PIC_BEFORENM2") ) ){
        		this.fnDownload(this.filepath, this.dsList.getColumn(0,"PIC_BEFORENM2"));
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

        this.fnUpload2 = function(obj,e)
        {
        	this.fdg01.open('FileOpen', FileDialog.LOAD);
        };

        this.fdg00_onclose = function(obj,e)
        {
        	this.addFileList(obj, e.virtualfiles);
        };

        this.fdg01_onclose = function(obj,e)
        {
        	this.addFileList2(obj, e.virtualfiles);
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

        this.addFileList2 = function(obj, filelist)
        {
        	this.FileList = filelist;
        	if(filelist.length > 0) {
        		var vFile;
        		for (var i = 0; i < filelist.length; i++)
        		{
        			vFile = filelist[i];
        			vFile.row = obj.row;
        			vFile.addEventHandler("onsuccess", this.FileList_onsuccess2, this);
        			vFile.addEventHandler("onerror", this.FileList_onerror2, this);

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

        this.FileList_onsuccess2 = function(obj, e)
        {
        	switch (e.reason)
        	{
        		case 1:
        			obj.getFileSize();
        			break;
        		case 9:
        			this.FileUpTransfer01.addFile(obj.filename, obj);
        			if(this.FileUpTransfer01.filelist.length > 0) {
        				this._waitCursor(true);
        				var sUploadUrl = this.fileConfig.host + this.fileConfig.uploadUrl;
        				this.FileUpTransfer01.setPostData("path", this.filepath);
        				this.FileUpTransfer01.upload(sUploadUrl);
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

        this.FileUpTransfer01_onprogress = function(obj,e)
        {
        	trace("FileUpTransfer01_onprogress: " + e.loaded+"/"+e.total);
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
        				this.dsList.setColumn(0, "PIC_AFTERNM", obj.filelist[i].filename);

        			}
        			obj.filelist.clear();
        			this.fnSaveProc();
        		}
        	}
        };

        this.FileUpTransfer01_onsuccess = function(obj,e)
        {
        	this._waitCursor(false);
        	trace("FileUpTransfer01_onsuccess: " + e.code + "/" + e.message);
        	if(e.code == 0) {
        		if(e.datasets.length > 0) {
        			for(var i = 0; i < e.datasets[0].rowcount; i++) {
        				if(this.dsList.rowcount == 0)
        				{
        					this.dsList.addRow();
        				}
        				this.dsList.setColumn(0, "PIC_AFTERNM2", obj.filelist[i].filename);

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

        this.FileUpTransfer01_onerror = function(obj,e)
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

        	this.dsUpdate.setColumn(0, "CD_SITE", this.dsSearch.getColumn(0, "CD_SITE"));
        	this.dsUpdate.setColumn(0, "CD_JOB", this.dsSearch.getColumn(0, "CD_JOB"));
        	this.dsUpdate.setColumn(0, "PIC_AFTERNM", this.dsList.getColumn(0, "PIC_AFTERNM"));
        	this.dsUpdate.setColumn(0, "PIC_AFTERNM2", this.dsList.getColumn(0, "PIC_AFTERNM2"));

        // 	if(this.dsUpdate.getColumn(0, "PIC_IMAGENM") == this.dsUpdate.getColumn(0, "PIC_IMAGENM2")) {
        // 		this.gfnAlert("동일한 파일명으로 등록할 수 없습니다.");
        // 		return false;
        // 	}

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
        	this.dsImageFile.setColumn(0, "filename", this.dsList.getColumn(0, "PIC_AFTERNM"));

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

        this.fnImageView2 = function() {

        	this.dsImageFile01.clearData();
        	this.dsImageFile01.addRow();

        	this.dsImageFile01.setColumn(0, "filepath", this.filepath);
        	this.dsImageFile01.setColumn(0, "filename", this.dsList.getColumn(0, "PIC_AFTERNM2"));

        	// 서버 이미지파일 base64 로 받아오기
        	var strSvcId    = "imagefile2";
        	var strSvcType  = "file/imageFile";
        	var inProc		= "";
        	var inData      = "input=dsImageFile01";
        	var outData     = "dsImageFile01=input";
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
            this.imgPicAfter1.addEventHandler("onload",this.imgPicAfter1_onload,this);
            this.btnUpload.addEventHandler("onclick",this.fnUpload,this);
            this.btnDownload.addEventHandler("onclick",this.btnPicImgDown_onclick,this);
            this.btnClose.addEventHandler("onclick",this.btnCancle_onclick,this);
            this.imgPicAfter2.addEventHandler("onload",this.imgPicAfter2_onload,this);
            this.btnUpload2.addEventHandler("onclick",this.fnUpload2,this);
            this.btnDownload2.addEventHandler("onclick",this.btnPicImgDown2_onclick,this);
            this.dsList.addEventHandler("onvaluechanged",this.dsList_onvaluechanged,this);
            this.FileUpTransfer00.addEventHandler("onprogress",this.FileUpTransfer00_onprogress,this);
            this.FileUpTransfer00.addEventHandler("onsuccess",this.FileUpTransfer00_onsuccess,this);
            this.FileUpTransfer00.addEventHandler("onerror",this.FileUpTransfer00_onerror,this);
            this.fdg00.addEventHandler("onclose",this.fdg00_onclose,this);
            this.fdg01.addEventHandler("onclose",this.fdg01_onclose,this);
            this.FileUpTransfer01.addEventHandler("onprogress",this.FileUpTransfer01_onprogress,this);
            this.FileUpTransfer01.addEventHandler("onsuccess",this.FileUpTransfer01_onsuccess,this);
            this.FileUpTransfer01.addEventHandler("onerror",this.FileUpTransfer01_onerror,this);
        };
        this.loadIncludeScript("DBS_WORKENDPIC.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
