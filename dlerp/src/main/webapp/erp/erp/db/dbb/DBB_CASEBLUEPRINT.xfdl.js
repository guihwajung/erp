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
            this.getSetter("maxwidth").set("800");
            this.getSetter("maxheight").set("820");
            if (Form == this.constructor)
            {
                this._setFormPosition(800,820);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("_dsProc", this);
            obj._setContents("<ColumnInfo><Column id=\"TARGET\" type=\"STRING\" size=\"256\"/><Column id=\"SP\" type=\"STRING\" size=\"256\"/><Column id=\"CLOB\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"TARGET\">select</Col><Col id=\"SP\">DBBPR_BLUEPRINTPIC_SELECT</Col></Row><Row><Col id=\"TARGET\">update</Col><Col id=\"SP\">DBBPR_BLUEPRINTPIC_UPDATE</Col></Row></Rows>");
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
            
            // UI Components Initialize
            obj = new Button("btnUpload01","66.25%","11","80","22",null,null,null,null,null,null,this);
            obj.set_taborder("4");
            obj.set_text("업로드");
            obj.getSetter("uWord").set("popup.cancel");
            this.addChild(obj.name, obj);

            obj = new Button("btnPicDown1","btnUpload01:11","11","130","21",null,null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_text("다운로드");
            obj.getSetter("uWord").set("popup.ok");
            this.addChild(obj.name, obj);

            obj = new Static("staTitle01","20","10","80","22",null,null,null,null,null,null,this);
            obj.set_taborder("3");
            obj.set_text("관련도면");
            obj.set_cssclass("sta_TITLE_Bg");
            this.addChild(obj.name, obj);

            obj = new ImageViewer("imgPic01","20","40","730","680",null,null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_stretch("fixaspectratio");
            this.addChild(obj.name, obj);

            obj = new Button("btnClose","300","730","130","21",null,null,null,null,null,null,this);
            obj.set_taborder("2");
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
        this.registerScript("DBB_CASEBLUEPRINT.xfdl", function() {
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
        	this.dsSelect.addColumn("NO_SEQ", "bigdecimal");

        	this.dsUpdate = new Dataset();
        	this.dsUpdate.addColumn("NO_SEQ", "bigdecimal");
        	this.dsUpdate.addColumn("PIC_BLUEPRINTNM", "string");
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
        				this.imgPic01.set_image(this.dsImageFile.getColumn(0, "filereturn"));
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
        		if (!this.gfnIsNull( this.dsList.getColumn(0,"PIC_BLUEPRINTNM"))) {
        			nrow = this.dsImageFile.addRow();
        			//this.dsImageFile.setColumn(nrow, "filepath", this.filepath + "CASE/" + this.getOwnerFrame().NO_SEQ);
        			this.dsImageFile.setColumn(nrow, "filepath", this.filepath);
        			this.dsImageFile.setColumn(nrow, "filename", this.dsList.getColumn(0, "PIC_BLUEPRINTNM"));
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
        		if (this.gfnIsNull(this.dsList.getColumn(0,"PIC_BLUEPRINTNM"))) {
        			this.gfnAlert("사진이 등록되있지 않습니다.");
        			return;
        		}
        		this.fnDownload(this.filepath, this.dsList.getColumn(0,"PIC_BLUEPRINTNM"));
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
        				this.dsList.setColumn(0, "PIC_BLUEPRINTNM", obj.filelist[i].filename);
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

        	this.dsUpdate.setColumn(nrow, "NO_SEQ", this.dsSearch.getColumn(0, "NO_SEQ"));
        	this.dsUpdate.setColumn(nrow, "PIC_BLUEPRINTNM", this.dsList.getColumn(0, "PIC_BLUEPRINTNM"));

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
            this.btnUpload01.addEventHandler("onclick",this.fnUpload1,this);
            this.btnPicDown1.addEventHandler("onclick",this.btnPicImgDown_onclick,this);
            this.btnClose.addEventHandler("onclick",this.btnCancle_onclick,this);
            this.dsList.addEventHandler("onvaluechanged",this.dsList_onvaluechanged,this);
            this.FileUpTransfer00.addEventHandler("onprogress",this.FileUpTransfer00_onprogress,this);
            this.FileUpTransfer00.addEventHandler("onsuccess",this.FileUpTransfer00_onsuccess,this);
            this.FileUpTransfer00.addEventHandler("onerror",this.FileUpTransfer00_onerror,this);
            this.fdg00.addEventHandler("onclose",this.fdg00_onclose,this);
        };
        this.loadIncludeScript("DBB_CASEBLUEPRINT.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
