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
            this.set_titletext("단지배치도 보기");
            if (Form == this.constructor)
            {
                this._setFormPosition(400,520);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("_dsProc", this);
            obj._setContents("<ColumnInfo><Column id=\"TARGET\" type=\"STRING\" size=\"256\"/><Column id=\"SP\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"TARGET\">updatefileAS</Col><Col id=\"SP\">DBSPR_AFTERASPIC_UPDATE</Col></Row><Row><Col id=\"SP\">DBSPR_IPJUASPIC_UPDATE</Col><Col id=\"TARGET\">updatefileBS</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsList", this);
            obj._setContents("<ColumnInfo><Column id=\"CD_SITE\" type=\"STRING\" size=\"256\"/><Column id=\"DT_JEOBSU\" type=\"STRING\" size=\"256\"/><Column id=\"CD_JOB\" type=\"STRING\" size=\"256\"/><Column id=\"PIC_BEFORE\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsImageFile", this);
            obj._setContents("<ColumnInfo><Column id=\"filepath\" type=\"STRING\" size=\"256\"/><Column id=\"filename\" type=\"STRING\" size=\"256\"/><Column id=\"filereturn\" type=\"STRING\" size=\"10000\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new FileDownTransfer("FileDownTransfer00", this);
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Static("staTitle","20","10","360","22",null,null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_text("단지배치도");
            obj.set_cssclass("sta_TITLE_Bg");
            this.addChild(obj.name, obj);

            obj = new ImageViewer("imgPicBefore","20","40","360","439",null,null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_stretch("fixaspectratio");
            this.addChild(obj.name, obj);

            obj = new Button("btnClose","110","489","80","21",null,null,null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_text("닫기");
            obj.getSetter("uWord").set("popup.cancel");
            this.addChild(obj.name, obj);

            obj = new Button("btnPicAfterDown","20","489","80","21",null,null,null,null,null,null,this);
            obj.set_taborder("3");
            obj.set_text("다운로드");
            obj.getSetter("uWord").set("popup.ok");
            this.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this
            obj = new Layout("default","",400,520,this,function(p){});
            this.addLayout(obj.name, obj);
            
            // BindItem Information

            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script
        this.registerScript("DBZ_DLG_BASE_INFO_PIC.xfdl", function() {
        /************************************************************************************************
         * FORM 변수 선언 영역
         ***********************************************************************************************/
        this.filepath = "/DL/BASEINFO/";
        this.fileDownpath = "\\DL\\BASEINFO\\";
        this.fileuploads = {};
        this.filecnt = 0;
        this.fileup = new FileUpload();
        this.strImgFileNm = "";
        /***********************************************************************************************
        * FORM EVENT 영역(onload)
        /***********************************************************************************************/
        this.form_onload = function(obj,e)
        {
        	this.gfnFormOnLoad(this); //초기화[필수]

        	this.fnSetParameter();
        	this.key = this.getOwnerFrame().CF_CD_SITE;

        	if( !this.gfnIsNull(this.getOwnerFrame().CF_IMG_PATH)) {
        		this.fnImageView();
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
        /**
        * @ 취소버튼이벤트
        */
        this.btnClose_onclick = function(obj,e)
        {
        	this.close();
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

        	if (svcID == "imagefile") {
        		//trace(this.dsImageFile.saveXML());
        		this.imgPicBefore.set_image(this.dsImageFile.getColumn(0, "filereturn"));
        	}
        }


        /*
         * 이미지 파일 조회
         */
        this.fnImageView = function() {

        	this.dsImageFile.clearData();
        	var nrow = this.dsImageFile.addRow();
        	this.dsImageFile.setColumn(nrow, "filepath", this.filepath + this.key);
        	this.dsImageFile.setColumn(nrow, "filename", this.getOwnerFrame().CF_IMG_PATH);

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
         * 이미지 파일 다운로드
         */
        this.fnDownload = function() {
        	this.fileConfig = this.getOwnerFrame().fileConfig;
        	this.fileConfig.allowTypes = ["jpg","jpeg","gif","png"]; // 넥사브라우저 전용, 웹은 적용불가
        	this.fileConfig.downloadUrl = "/file/downloadFile.do";

        	var encodeFileName = encodeURIComponent(this.getOwnerFrame().CF_IMG_PATH);
        	var surl = this.fileConfig.host+ this.fileConfig.downloadUrl; // + encodeFileName;

        	this.FileDownTransfer00.set_url(surl);

        	this.FileDownTransfer00.setPostData("path", this.fileDownpath+this.key);
        	this.FileDownTransfer00.setPostData("fileName", encodeFileName);
        	if( system.navigatorname =="nexacro"){
        		this.FileDownTransfer00.set_downloadfilename(this.getOwnerFrame().CF_IMG_PATH);
        	}
        	this.FileDownTransfer00.download();
        };


        this.btnPicAfterDown_onclick = function(obj,e)
        {
        	if( !this.gfnIsNull(this.getOwnerFrame().CF_IMG_PATH)) {
        		this.fnDownload();
        	}
        };

        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.form_onload,this);
            this.btnClose.addEventHandler("onclick",this.btnClose_onclick,this);
            this.btnPicAfterDown.addEventHandler("onclick",this.btnPicAfterDown_onclick,this);
        };
        this.loadIncludeScript("DBZ_DLG_BASE_INFO_PIC.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
