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
            this.set_titletext("점검전후이미지 가져오기");
            this.getSetter("maxwidth").set("750");
            this.getSetter("maxheight").set("820");
            if (Form == this.constructor)
            {
                this._setFormPosition(730,820);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("_dsProc", this);
            obj._setContents("<ColumnInfo><Column id=\"TARGET\" type=\"STRING\" size=\"256\"/><Column id=\"SP\" type=\"STRING\" size=\"256\"/><Column id=\"CLOB\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"TARGET\">select</Col><Col id=\"SP\">DBBPR_IMAGEPIC_SELECT</Col></Row><Row><Col id=\"TARGET\">update</Col><Col id=\"SP\">DBBPR_IMAGEPIC_UPDATE</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsList", this);
            obj._setContents("<ColumnInfo><Column id=\"PIC_IMAGE01NM\" type=\"STRING\" size=\"256\"/><Column id=\"PIC_IMAGE02NM\" type=\"STRING\" size=\"256\"/><Column id=\"PIC_IMAGE03NM\" type=\"STRING\" size=\"256\"/><Column id=\"PIC_IMAGE04NM\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsImageFile", this);
            obj._setContents("<ColumnInfo><Column id=\"filepath\" type=\"STRING\" size=\"256\"/><Column id=\"filename\" type=\"STRING\" size=\"256\"/><Column id=\"filereturn\" type=\"STRING\" size=\"10000\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsSearch", this);
            obj._setContents("<ColumnInfo><Column id=\"NO_SEQ\" type=\"STRING\" size=\"256\"/><Column id=\"CD_SITE\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row/></Rows>");
            this.addChild(obj.name, obj);


            obj = new FileDownTransfer("FileDownTransfer00", this);
            this.addChild(obj.name, obj);


            obj = new FileUpTransfer("FileUpTransfer00", this);
            this.addChild(obj.name, obj);


            obj = new FileDialog("fdg00", this);
            this.addChild(obj.name, obj);


            obj = new FileUpTransfer("FileUpTransfer01", this);
            this.addChild(obj.name, obj);


            obj = new FileDialog("fdg01", this);
            this.addChild(obj.name, obj);


            obj = new FileUpTransfer("FileUpTransfer02", this);
            this.addChild(obj.name, obj);


            obj = new FileDialog("fdg02", this);
            this.addChild(obj.name, obj);


            obj = new FileUpTransfer("FileUpTransfer03", this);
            this.addChild(obj.name, obj);


            obj = new FileDialog("fdg03", this);
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Button("btnUpload03","18.90%","371","80","22",null,null,null,null,null,null,this);
            obj.set_taborder("15");
            obj.set_text("업로드");
            obj.getSetter("uWord").set("popup.cancel");
            this.addChild(obj.name, obj);

            obj = new Button("btnPicDown3","btnUpload03:12","372","130","21",null,null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_text("다운로드");
            obj.getSetter("uWord").set("popup.cancel");
            this.addChild(obj.name, obj);

            obj = new Button("btnUpload01","19.04%","11","80","22",null,null,null,null,null,null,this);
            obj.set_taborder("13");
            obj.set_text("업로드");
            obj.getSetter("uWord").set("popup.cancel");
            this.addChild(obj.name, obj);

            obj = new Button("btnPicDown1","btnUpload01:12","11","130","21",null,null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_text("다운로드");
            obj.getSetter("uWord").set("popup.ok");
            this.addChild(obj.name, obj);

            obj = new Static("staTitle01","20","10","80","22",null,null,null,null,null,null,this);
            obj.set_taborder("7");
            obj.set_text("사진1");
            obj.set_cssclass("sta_TITLE_Bg");
            this.addChild(obj.name, obj);

            obj = new ImageViewer("imgPic01","20","40","340","320",null,null,null,null,null,null,this);
            obj.set_taborder("3");
            obj.set_stretch("fixaspectratio");
            this.addChild(obj.name, obj);

            obj = new Static("staTitle02","20","370","80","22",null,null,null,null,null,null,this);
            obj.set_taborder("8");
            obj.set_text("사진3");
            obj.set_cssclass("sta_TITLE_Bg");
            this.addChild(obj.name, obj);

            obj = new ImageViewer("imgPic03","20","400","340","320",null,null,null,null,null,null,this);
            obj.set_taborder("4");
            obj.set_stretch("fixaspectratio");
            this.addChild(obj.name, obj);

            obj = new ImageViewer("imgPic04","370","400","330","320",null,null,null,null,null,null,this);
            obj.set_taborder("5");
            obj.set_stretch("fixaspectratio");
            this.addChild(obj.name, obj);

            obj = new Static("staTitle03","380","370","70","22",null,null,null,null,null,null,this);
            obj.set_taborder("9");
            obj.set_text("사진4");
            obj.set_cssclass("sta_TITLE_Bg");
            this.addChild(obj.name, obj);

            obj = new Button("btnUpload04","65.75%","372","80","21",null,null,null,null,null,null,this);
            obj.set_taborder("16");
            obj.set_text("업로드");
            obj.getSetter("uWord").set("popup.cancel");
            this.addChild(obj.name, obj);

            obj = new Button("btnPicDown4","btnUpload04:11","372","130","21",null,null,null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_text("다운로드");
            obj.getSetter("uWord").set("popup.cancel");
            this.addChild(obj.name, obj);

            obj = new Button("btnClose","300","730","130","21",null,null,null,null,null,null,this);
            obj.set_taborder("6");
            obj.set_text("닫기");
            obj.getSetter("uWord").set("popup.cancel");
            this.addChild(obj.name, obj);

            obj = new Static("staTitle01_00","370","10","80","22",null,null,null,null,null,null,this);
            obj.set_taborder("10");
            obj.set_text("사진2");
            obj.set_cssclass("sta_TITLE_Bg");
            this.addChild(obj.name, obj);

            obj = new ImageViewer("imgPic02","370","40","330","320",null,null,null,null,null,null,this);
            obj.set_taborder("11");
            obj.set_stretch("fixaspectratio");
            this.addChild(obj.name, obj);

            obj = new Button("btnUpload02","65.75%","11","80","21",null,null,null,null,null,null,this);
            obj.set_taborder("14");
            obj.set_text("업로드");
            obj.getSetter("uWord").set("popup.cancel");
            this.addChild(obj.name, obj);

            obj = new Button("btnPicDown2","btnUpload02:11","11","130","21",null,null,null,null,null,null,this);
            obj.set_taborder("12");
            obj.set_text("다운로드");
            obj.getSetter("uWord").set("popup.ok");
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
        this.registerScript("DBB_CASEIMAGE.xfdl", function() {
        this.objApp = this.gfnGetApplication();

        /************************************************************************************************
         * FORM 변수 선언 영역
         ***********************************************************************************************/
         this.filepath = "/DB/DBB/CASE/";
         this.fileConfig = {};
         this.fileuploads = {};
        /***********************************************************************************************
        * FORM EVENT 영역(onload)
        /***********************************************************************************************/
        this.form_onload = function(obj,e)
        {
        	// -- 필수 -------------------//
        	this.gfnFormOnLoad(this);
        	this.gfnFormInfo(this);
        	// ---------------------------//

        	this.fnSetParameter();

        	this.dsSearch.setColumn(0, "CD_SITE", this.getOwnerFrame().CD_SITE);
        	this.dsSearch.setColumn(0, "NO_SEQ", this.getOwnerFrame().NO_SEQ);

        	// 파일설정
        	this.fileConfig = this.gfnGetFileConfig();
        	this.fileConfig.allowTypes = ["jpg","jpeg","gif","png"]; // 넥사브라우저 전용, 웹은 적용불가
        	//this.key = this.getOwnerFrame().CD_SITE + this.getOwnerFrame().CD_JOB + this.getOwnerFrame().TY_UMGB;
        	this.FileUpTransfer00.clearFileList();
        	this.FileUpTransfer01.clearFileList();
        	this.FileUpTransfer02.clearFileList();
        	this.FileUpTransfer03.clearFileList();

        	this.filepath = "/DB/DBB/CASE/" + this.dsSearch.getColumn(0, "NO_SEQ");

        	this.fnImgSelect();
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
        	this.dsSelect.addColumn("NO_SEQ", "string");

        	this.dsUpdate = new Dataset();
        	this.dsUpdate.addColumn("NO_SEQ", "bigdecimal");
        	this.dsUpdate.addColumn("PIC_IMAGE01NM", "string");
        	this.dsUpdate.addColumn("PIC_IMAGE02NM", "string");
        	this.dsUpdate.addColumn("PIC_IMAGE03NM", "string");
        	this.dsUpdate.addColumn("PIC_IMAGE04NM", "string");
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
        	this.dsSelect.setColumn(0, "NO_SEQ", this.getOwnerFrame().NO_SEQ);

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
        this.btnCancle_onclick = function(obj,e) {
        	this.getParentContext().close(false);
        };
        /************************************************************************
         * 콜백 이벤트
         ************************************************************************/
        /*
         *	콜백 처리
         */
        this.fnCallback = function(svcID, errorCode, errorMsg) {
        	if (svcID == "select") {
        		if (this.dsList.rowcount > 0) {
        			this.fnImageView();
        		}
        	}
        	else if (svcID == "save") {
        		this.fnImageView();
        	}
        	else if (svcID == "imagefile") {
        		if (errorCode == 0) {
        			for( var i =0; i < this.dsImageFile.rowcount; i++) {
        				//if( this.dsImageFile.getColumn(i,"filepath")==this.filepath + "BEFORE/" + this.getOwnerFrame().CD_SITE + "/" + this.getOwnerFrame().CD_JOB && this.dsList.getColumn(0, "PIC_BEFORENM") == this.dsImageFile.getColumn(i,"filename") && !this.gfnIsNull( this.dsImageFile.getColumn(i,"filereturn") )){
        					this.imgPic01.set_image(this.dsImageFile.getColumn(0, "filereturn"));
        					this.imgPic02.set_image(this.dsImageFile.getColumn(1, "filereturn"));
        					this.imgPic03.set_image(this.dsImageFile.getColumn(2, "filereturn"));
        					this.imgPic04.set_image(this.dsImageFile.getColumn(3, "filereturn"));
        			}
        		}
        		else {
        			this.gfnAlert(errorMsg);
        			return;
        		}
        	}
        }

        /*
         * 이미지 파일 조회
         */
        this.fnImageView = function() {
        	this.dsImageFile.clearData();
        	if (this.dsList.rowcount > 0) {
        		var nrow = 0;
        		if (!this.gfnIsNull( this.dsList.getColumn(0,"PIC_IMAGE01NM"))) {
        			nrow = this.dsImageFile.addRow();
        			//this.dsImageFile.setColumn(nrow, "filepath", this.filepath + "CASE/" + this.getOwnerFrame().NO_SEQ);
        			this.dsImageFile.setColumn(nrow, "filepath", this.filepath);
        			this.dsImageFile.setColumn(nrow, "filename", this.dsList.getColumn(0, "PIC_IMAGE01NM"));
        		}

        		if (!this.gfnIsNull( this.dsList.getColumn(0,"PIC_IMAGE02NM"))) {
        			nrow = this.dsImageFile.addRow();
        			//this.dsImageFile.setColumn(nrow, "filepath", this.filepath + "BEFORE/" + this.getOwnerFrame().CD_SITE + "/" + this.getOwnerFrame().CD_JOB);
        			this.dsImageFile.setColumn(nrow, "filepath", this.filepath);
        			this.dsImageFile.setColumn(nrow, "filename", this.dsList.getColumn(0, "PIC_IMAGE02NM"));
        		}

        		if (!this.gfnIsNull( this.dsList.getColumn(0,"PIC_IMAGE03NM"))) {
        			nrow = this.dsImageFile.addRow();
        			//this.dsImageFile.setColumn(nrow, "filepath", this.filepath + "AFTER/" + this.getOwnerFrame().CD_SITE + "/" + this.getOwnerFrame().CD_JOB);
        			this.dsImageFile.setColumn(nrow, "filepath", this.filepath);
        			this.dsImageFile.setColumn(nrow, "filename", this.dsList.getColumn(0, "PIC_IMAGE03NM"));
        		}

        		if (!this.gfnIsNull( this.dsList.getColumn(0,"PIC_IMAGE04NM"))) {
        			nrow = this.dsImageFile.addRow();
        			//this.dsImageFile.setColumn(nrow, "filepath", this.filepath + "SIGN/" + this.getOwnerFrame().CD_SITE + "/" + this.getOwnerFrame().CD_JOB);
        			this.dsImageFile.setColumn(nrow, "filepath", this.filepath);
        			this.dsImageFile.setColumn(nrow, "filename", this.dsList.getColumn(0, "PIC_IMAGE04NM"));
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

        /*
         * 이미지 파일 다운로드 버튼 클릭
         */
        this.btnPicImgDown_onclick = function(obj,e) {
        	if (obj.id == "btnPicDown1") {
        		if (this.gfnIsNull(this.dsList.getColumn(0,"PIC_IMAGE01NM"))) {
        			this.gfnAlert("사진이 등록되있지 않습니다.");
        			return;
        		}
        		this.fnDownload(this.filepath, this.dsList.getColumn(0,"PIC_IMAGE01NM"));
        	}

        	else if (obj.id == "btnPicDown2") {
        		if (this.gfnIsNull(this.dsList.getColumn(0,"PIC_IMAGE02NM"))) {
        			this.gfnAlert("사진이 등록되있지 않습니다.");
        			return;
        		}
        		this.fnDownload(this.filepath, this.dsList.getColumn(0,"PIC_IMAGE02NM"));
        	}

        	else if (obj.id == "btnPicDown3") {
        		if (this.gfnIsNull(this.dsList.getColumn(0,"PIC_IMAGE03NM"))) {
        			this.gfnAlert("사진이 등록되있지 않습니다.");
        			return;
        		}
        		this.fnDownload(this.filepath, this.dsList.getColumn(0,"PIC_IMAGE03NM"));
        	}

        	else if (obj.id == "btnPicDown4") {
        		if (this.gfnIsNull(this.dsList.getColumn(0,"PIC_IMAGE04NM"))) {
        			this.gfnAlert("사진이 등록되있지 않습니다.");
        			return;
        		}
        		//this.fnDownload(this.filepath + "SIGN/" + this.getOwnerFrame().CD_SITE + "/" + this.getOwnerFrame().CD_JOB, this.dsList.getColumn(0,"PIC_IMAGE04NM"));
        		this.fnDownload(this.filepath, this.dsList.getColumn(0,"PIC_IMAGE04NM"));
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

        // 이미지 업로드1
        this.fnUpload1 = function()
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
        				this.dsList.setColumn(0, "PIC_IMAGE01NM", obj.filelist[i].filename);
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

        // 이미지 업로드2
        this.fnUpload2 = function()
        {
        	this.fdg01.open('FileOpen', FileDialog.LOAD);
        }

        this.fdg01_onclose = function(obj,e)
        {
        	this.addFileList2(obj, e.virtualfiles);
        };

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

        this.FileList_onerror2 = function(obj, e)
        {
        	trace("errortype: "+e.errortype);
        	trace("errormsg: "+e.errormsg);
        	trace("statuscode: "+e.statuscode);
        }

        this.FileUpTransfer01_onprogress = function(obj,e)
        {
        	trace("FileUpTransfer01_onprogress: " + e.loaded+"/"+e.total);
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
        				this.dsList.setColumn(0, "PIC_IMAGE02NM", obj.filelist[i].filename);
        			}
        			obj.filelist.clear();
        			this.fnSaveProc();
        		}
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

        // 이미지 업로드3
        this.fnUpload3 = function()
        {
        	this.fdg02.open('FileOpen', FileDialog.LOAD);
        }

        this.fdg02_onclose = function(obj,e)
        {
        	this.addFileList3(obj, e.virtualfiles);
        };

        this.addFileList3 = function(obj, filelist)
        {
        	this.FileList = filelist;
        	if(filelist.length > 0) {
        		var vFile;
        		for (var i = 0; i < filelist.length; i++)
        		{
        			vFile = filelist[i];
        			vFile.row = obj.row;
        			vFile.addEventHandler("onsuccess", this.FileList_onsuccess3, this);
        			vFile.addEventHandler("onerror", this.FileList_onerror3, this);

        			vFile.open(null, 1);
        		}
        	}
        }

        this.FileList_onsuccess3 = function(obj, e)
        {
        	switch (e.reason)
        	{
        		case 1:
        			obj.getFileSize();
        			break;
        		case 9:
        			this.FileUpTransfer02.addFile(obj.filename, obj);
        			if(this.FileUpTransfer02.filelist.length > 0) {
        				this._waitCursor(true);
        				var sUploadUrl = this.fileConfig.host + this.fileConfig.uploadUrl;
        				this.FileUpTransfer02.setPostData("path", this.filepath);
        				this.FileUpTransfer02.upload(sUploadUrl);
        			}
        			break;
        	}
        }

        this.FileList_onerror3 = function(obj, e)
        {
        	trace("errortype: "+e.errortype);
        	trace("errormsg: "+e.errormsg);
        	trace("statuscode: "+e.statuscode);
        }

        this.FileUpTransfer02_onprogress = function(obj,e)
        {
        	trace("FileUpTransfer02_onprogress: " + e.loaded+"/"+e.total);
        };

        this.FileUpTransfer02_onsuccess = function(obj,e)
        {
        	this._waitCursor(false);
        	trace("FileUpTransfer02_onsuccess: " + e.code + "/" + e.message);
        	if(e.code == 0) {
        		if(e.datasets.length > 0) {
        			for(var i = 0; i < e.datasets[0].rowcount; i++) {
        				if(this.dsList.rowcount == 0)
        				{
        					this.dsList.addRow();
        				}
        				this.dsList.setColumn(0, "PIC_IMAGE03NM", obj.filelist[i].filename);
        			}
        			obj.filelist.clear();
        			this.fnSaveProc();
        		}
        	}
        };

        this.FileUpTransfer02_onerror = function(obj,e)
        {
        	this._waitCursor(false);
        	if(e.errormsg.indexOf("maxsize") > -1) {
        		this.gfnAlert("첨부파일 허용용량("+ this.gfnCutFileSize(nexacro.toNumber(e.errormsg.split(':')[1])) + ")을 초과할 수 없습니다.");
        	} else {
        		this.gfnAlert(e.errormsg);
        	}
        };

        // 이미지 업로드4
        this.fnUpload4 = function()
        {
        	this.fdg03.open('FileOpen', FileDialog.LOAD);
        }

        this.fdg03_onclose = function(obj,e)
        {
        	this.addFileList4(obj, e.virtualfiles);
        };

        this.addFileList4 = function(obj, filelist)
        {
        	this.FileList = filelist;
        	if(filelist.length > 0) {
        		var vFile;
        		for (var i = 0; i < filelist.length; i++)
        		{
        			vFile = filelist[i];
        			vFile.row = obj.row;
        			vFile.addEventHandler("onsuccess", this.FileList_onsuccess4, this);
        			vFile.addEventHandler("onerror", this.FileList_onerror4, this);

        			vFile.open(null, 1);
        		}
        	}
        }

        this.FileList_onsuccess4 = function(obj, e)
        {
        	switch (e.reason)
        	{
        		case 1:
        			obj.getFileSize();
        			break;
        		case 9:
        			this.FileUpTransfer03.addFile(obj.filename, obj);
        			if(this.FileUpTransfer03.filelist.length > 0) {
        				this._waitCursor(true);
        				var sUploadUrl = this.fileConfig.host + this.fileConfig.uploadUrl;
        				this.FileUpTransfer03.setPostData("path", this.filepath);
        				this.FileUpTransfer03.upload(sUploadUrl);
        			}
        			break;
        	}
        }

        this.FileList_onerror4 = function(obj, e)
        {
        	trace("errortype: "+e.errortype);
        	trace("errormsg: "+e.errormsg);
        	trace("statuscode: "+e.statuscode);
        }

        this.FileUpTransfer03_onprogress = function(obj,e)
        {
        	trace("FileUpTransfer03_onprogress: " + e.loaded+"/"+e.total);
        };

        this.FileUpTransfer03_onsuccess = function(obj,e)
        {
        	this._waitCursor(false);
        	trace("FileUpTransfer03_onsuccess: " + e.code + "/" + e.message);
        	if(e.code == 0) {
        		if(e.datasets.length > 0) {
        			for(var i = 0; i < e.datasets[0].rowcount; i++) {
        				if(this.dsList.rowcount == 0)
        				{
        					this.dsList.addRow();
        				}
        				this.dsList.setColumn(0, "PIC_IMAGE04NM", obj.filelist[i].filename);
        			}
        			obj.filelist.clear();
        			this.fnSaveProc();
        		}
        	}
        };

        this.FileUpTransfer03_onerror = function(obj,e)
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

        	this.dsUpdate.setColumn(nrow, "NO_SEQ", this.dsSearch.getColumn(0, "NO_SEQ"));
        	this.dsUpdate.setColumn(nrow, "PIC_IMAGE01NM", this.dsList.getColumn(0, "PIC_IMAGE01NM"));
        	this.dsUpdate.setColumn(nrow, "PIC_IMAGE02NM", this.dsList.getColumn(0, "PIC_IMAGE02NM"));
        	this.dsUpdate.setColumn(nrow, "PIC_IMAGE03NM", this.dsList.getColumn(0, "PIC_IMAGE03NM"));
        	this.dsUpdate.setColumn(nrow, "PIC_IMAGE04NM", this.dsList.getColumn(0, "PIC_IMAGE04NM"));

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




        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.form_onload,this);
            this.btnUpload03.addEventHandler("onclick",this.fnUpload3,this);
            this.btnPicDown3.addEventHandler("onclick",this.btnPicImgDown_onclick,this);
            this.btnUpload01.addEventHandler("onclick",this.fnUpload1,this);
            this.btnPicDown1.addEventHandler("onclick",this.btnPicImgDown_onclick,this);
            this.btnUpload04.addEventHandler("onclick",this.fnUpload4,this);
            this.btnPicDown4.addEventHandler("onclick",this.btnPicImgDown_onclick,this);
            this.btnClose.addEventHandler("onclick",this.btnCancle_onclick,this);
            this.btnUpload02.addEventHandler("onclick",this.fnUpload2,this);
            this.btnPicDown2.addEventHandler("onclick",this.btnPicImgDown_onclick,this);
            this.dsList.addEventHandler("onvaluechanged",this.dsList_onvaluechanged,this);
            this.FileUpTransfer00.addEventHandler("onprogress",this.FileUpTransfer00_onprogress,this);
            this.FileUpTransfer00.addEventHandler("onsuccess",this.FileUpTransfer00_onsuccess,this);
            this.FileUpTransfer00.addEventHandler("onerror",this.FileUpTransfer00_onerror,this);
            this.fdg00.addEventHandler("onclose",this.fdg00_onclose,this);
            this.FileUpTransfer01.addEventHandler("onprogress",this.FileUpTransfer01_onprogress,this);
            this.FileUpTransfer01.addEventHandler("onsuccess",this.FileUpTransfer01_onsuccess,this);
            this.FileUpTransfer01.addEventHandler("onerror",this.FileUpTransfer01_onerror,this);
            this.fdg01.addEventHandler("onclose",this.fdg01_onclose,this);
            this.FileUpTransfer02.addEventHandler("onprogress",this.FileUpTransfer02_onprogress,this);
            this.FileUpTransfer02.addEventHandler("onsuccess",this.FileUpTransfer02_onsuccess,this);
            this.FileUpTransfer02.addEventHandler("onerror",this.FileUpTransfer02_onerror,this);
            this.fdg02.addEventHandler("onclose",this.fdg02_onclose,this);
            this.FileUpTransfer03.addEventHandler("onprogress",this.FileUpTransfer03_onprogress,this);
            this.FileUpTransfer03.addEventHandler("onsuccess",this.FileUpTransfer03_onsuccess,this);
            this.FileUpTransfer03.addEventHandler("onerror",this.FileUpTransfer03_onerror,this);
            this.fdg03.addEventHandler("onclose",this.fdg03_onclose,this);
        };
        this.loadIncludeScript("DBB_CASEIMAGE.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
