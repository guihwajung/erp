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
            this.getSetter("maxwidth").set("1200");
            this.getSetter("maxheight").set("900");
            if (Form == this.constructor)
            {
                this._setFormPosition(1200,900);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("_dsProc", this);
            obj._setContents("<ColumnInfo><Column id=\"TARGET\" type=\"STRING\" size=\"256\"/><Column id=\"SP\" type=\"STRING\" size=\"256\"/><Column id=\"CLOB\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"TARGET\">select</Col><Col id=\"SP\">DBSPR_IPJUWORKSTATE_IMG_SELECT</Col><Col id=\"CLOB\">PIC_SIGN</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsList", this);
            obj._setContents("<ColumnInfo><Column id=\"PIC_BEFORE\" type=\"STRING\" size=\"256\"/><Column id=\"PIC_BEFORE2\" type=\"STRING\" size=\"256\"/><Column id=\"PIC_AFTER\" type=\"STRING\" size=\"256\"/><Column id=\"PIC_SIGN\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsImageFile", this);
            obj._setContents("<ColumnInfo><Column id=\"filepath\" type=\"STRING\" size=\"256\"/><Column id=\"filename\" type=\"STRING\" size=\"256\"/><Column id=\"filereturn\" type=\"STRING\" size=\"10000\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsImageFile1", this);
            obj._setContents("<ColumnInfo><Column id=\"filepath\" type=\"STRING\" size=\"256\"/><Column id=\"filename\" type=\"STRING\" size=\"256\"/><Column id=\"filereturn\" type=\"STRING\" size=\"10000\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsImageFile2", this);
            obj._setContents("<ColumnInfo><Column id=\"filepath\" type=\"STRING\" size=\"256\"/><Column id=\"filename\" type=\"STRING\" size=\"256\"/><Column id=\"filereturn\" type=\"STRING\" size=\"10000\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new FileDownTransfer("FileDownTransfer00", this);
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Button("btnPicAfterDown","300","790","130","21",null,null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_text("점검후사진 다운로드");
            obj.getSetter("uWord").set("popup.cancel");
            this.addChild(obj.name, obj);

            obj = new Button("btnPicBeforeDown","20","790","130","21",null,null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_text("점검전사진 다운로드");
            obj.getSetter("uWord").set("popup.ok");
            this.addChild(obj.name, obj);

            obj = new Static("staTitle01","20","10","140","22",null,null,null,null,null,null,this);
            obj.set_taborder("7");
            obj.set_text("점검전사진");
            obj.set_cssclass("sta_TITLE_Bg");
            this.addChild(obj.name, obj);

            obj = new ImageViewer("imgPicBefore","20","40","360","340",null,null,null,null,null,null,this);
            obj.set_taborder("3");
            obj.set_stretch("fixaspectratio");
            this.addChild(obj.name, obj);

            obj = new Static("staTitle02","20","400","295","22",null,null,null,null,null,null,this);
            obj.set_taborder("8");
            obj.set_text("점검후사진");
            obj.set_cssclass("sta_TITLE_Bg");
            this.addChild(obj.name, obj);

            obj = new ImageViewer("imgPicAfter","20","430","360","340",null,null,null,null,null,null,this);
            obj.set_taborder("4");
            obj.set_stretch("fixaspectratio");
            this.addChild(obj.name, obj);

            obj = new ImageViewer("imgPicSign","780","250","360","340",null,null,null,null,null,null,this);
            obj.set_taborder("5");
            obj.set_stretch("fixaspectratio");
            this.addChild(obj.name, obj);

            obj = new Static("staTitle03","400","400","130","22",null,null,null,null,null,null,this);
            obj.set_taborder("9");
            obj.set_text("점검후사진2");
            obj.set_cssclass("sta_TITLE_Bg");
            this.addChild(obj.name, obj);

            obj = new Button("btnPicSignDown","580","790","130","21",null,null,null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_text("완료사인 다운로드");
            obj.getSetter("uWord").set("popup.cancel");
            this.addChild(obj.name, obj);

            obj = new Button("btnClose","720","790","130","21",null,null,null,null,null,null,this);
            obj.set_taborder("6");
            obj.set_text("닫기");
            obj.getSetter("uWord").set("popup.cancel");
            this.addChild(obj.name, obj);

            obj = new Static("staTitle01_00","400","10","140","22",null,null,null,null,null,null,this);
            obj.set_taborder("10");
            obj.set_text("점검전사진2");
            obj.set_cssclass("sta_TITLE_Bg");
            this.addChild(obj.name, obj);

            obj = new ImageViewer("imgPicBefore2","400","40","360","340",null,null,null,null,null,null,this);
            obj.set_taborder("11");
            obj.set_stretch("fixaspectratio");
            this.addChild(obj.name, obj);

            obj = new Button("btnPicBeforeDown2","160","790","130","21",null,null,null,null,null,null,this);
            obj.set_taborder("12");
            obj.set_text("점검전사진2 다운로드");
            obj.getSetter("uWord").set("popup.ok");
            this.addChild(obj.name, obj);

            obj = new Static("staTitle03_00","780","218","130","22",null,null,null,null,null,null,this);
            obj.set_taborder("13");
            obj.set_text("완료사인");
            obj.set_cssclass("sta_TITLE_Bg");
            this.addChild(obj.name, obj);

            obj = new ImageViewer("imgPicAfter2","400","430","360","340",null,null,null,null,null,null,this);
            obj.set_taborder("14");
            obj.set_stretch("fixaspectratio");
            this.addChild(obj.name, obj);

            obj = new Button("btnPicAfterDown2","440","790","130","21",null,null,null,null,null,null,this);
            obj.set_taborder("15");
            obj.set_text("점검후사진2 다운로드");
            obj.getSetter("uWord").set("popup.cancel");
            this.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this
            obj = new Layout("default","",1150,850,this,function(p){});
            this.addLayout(obj.name, obj);
            
            // BindItem Information

            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script
        this.registerScript("DBS_WORKPICPOPUP.xfdl", function() {
        this.objApp = this.gfnGetApplication();

        /************************************************************************************************
         * FORM 변수 선언 영역
         ***********************************************************************************************/
         this.filepath = "/DB/WORK/";
         this.fileConfig = {};
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

        	// 파일설정
        	this.fileConfig = this.gfnGetFileConfig();
        	this.fileConfig.allowTypes = ["jpg","jpeg","gif","png"]; // 넥사브라우저 전용, 웹은 적용불가
        	//this.key = this.getOwnerFrame().CD_SITE + this.getOwnerFrame().CD_JOB + this.getOwnerFrame().TY_UMGB;

        	this.imgPicBefore.set_image(null);
        	this.imgPicAfter.set_image(null);
        	this.imgPicSign.set_image(null);

        	if( !this.gfnIsNull(this.getOwnerFrame().CD_SITE) && !this.gfnIsNull(this.getOwnerFrame().CD_JOB) && !this.gfnIsNull(this.getOwnerFrame().TY_UMGB)) {
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
        	this.dsSelect.addColumn("CD_JOB", "string");
        	this.dsSelect.addColumn("TY_UMGB", "string");
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
        	this.dsSelect.setColumn(0, "CD_SITE", this.getOwnerFrame().CD_SITE);
        	this.dsSelect.setColumn(0, "CD_JOB", this.getOwnerFrame().CD_JOB);
        	this.dsSelect.setColumn(0, "TY_UMGB", this.getOwnerFrame().TY_UMGB);

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
        			this.fnImageView1();
        			this.fnImageView2();
        		}
        	}
        	else if (svcID == "imagefile") {
        		if (errorCode == 0) {
        			for( var i =0; i < this.dsImageFile.rowcount; i++) {
        				if( this.dsImageFile.getColumn(i,"filepath")==this.filepath + "BEFORE/" + this.getOwnerFrame().CD_SITE + "/" + this.getOwnerFrame().CD_JOB && this.dsList.getColumn(0, "PIC_BEFORENM") == this.dsImageFile.getColumn(i,"filename") && !this.gfnIsNull( this.dsImageFile.getColumn(i,"filereturn") )){
        					this.imgPicBefore.set_image(this.dsImageFile.getColumn(0, "filereturn"));
        					this.imgPicBefore2.set_image(this.dsImageFile.getColumn(1, "filereturn"));
        				}
        			}

        			for( var i =0; i < this.dsImageFile1.rowcount; i++) {
        				if( this.dsImageFile1.getColumn(i,"filepath")==this.filepath + "AFTER/" + this.getOwnerFrame().CD_SITE + "/" + this.getOwnerFrame().CD_JOB && this.dsList.getColumn(0, "PIC_AFTERNM") == this.dsImageFile.getColumn(i,"filename") && !this.gfnIsNull( this.dsImageFile.getColumn(i,"filereturn") )){
        					this.imgPicAfter.set_image(this.dsImageFile1.getColumn(0, "filereturn"));
        					this.imgPicAfter2.set_image(this.dsImageFile1.getColumn(1, "filereturn"));
        				}
        			}

        			for( var i =0; i < this.dsImageFile2.rowcount; i++) {
        				if( this.dsImageFile2.getColumn(i,"filepath")==this.filepath + "SIGN/" + this.getOwnerFrame().CD_SITE + "/" + this.getOwnerFrame().CD_JOB && this.dsList.getColumn(0, "PIC_SIGNNM") == this.dsImageFile.getColumn(i,"filename") && !this.gfnIsNull( this.dsImageFile.getColumn(i,"filereturn") )){
        					this.imgPicSign.set_image(this.dsImageFile2.getColumn(0, "filereturn"));
        				}
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
        		if (!this.gfnIsNull( this.dsList.getColumn(0,"PIC_BEFORENM"))) {
        			nrow = this.dsImageFile.addRow();
        			this.dsImageFile.setColumn(nrow, "filepath", this.filepath + "BEFORE/" + this.getOwnerFrame().CD_SITE + "/" + this.getOwnerFrame().CD_JOB);
        			this.dsImageFile.setColumn(nrow, "filename", this.dsList.getColumn(0, "PIC_BEFORENM"));
        		}

        		if (!this.gfnIsNull( this.dsList.getColumn(0,"PIC_BEFORENM2"))) {
        			nrow = this.dsImageFile.addRow();
        			this.dsImageFile.setColumn(nrow, "filepath", this.filepath + "BEFORE/" + this.getOwnerFrame().CD_SITE + "/" + this.getOwnerFrame().CD_JOB);
        			this.dsImageFile.setColumn(nrow, "filename", this.dsList.getColumn(0, "PIC_BEFORENM2"));
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

        this.fnImageView1 = function() {
        	this.dsImageFile1.clearData();
        	if (this.dsList.rowcount > 0) {
        		var nrow = 0;
        		if (!this.gfnIsNull( this.dsList.getColumn(0,"PIC_AFTERNM"))) {
        			nrow = this.dsImageFile1.addRow();
        			this.dsImageFile1.setColumn(nrow, "filepath", this.filepath + "AFTER/" + this.getOwnerFrame().CD_SITE + "/" + this.getOwnerFrame().CD_JOB);
        			this.dsImageFile1.setColumn(nrow, "filename", this.dsList.getColumn(0, "PIC_AFTERNM"));
        		}

        		if (!this.gfnIsNull( this.dsList.getColumn(0,"PIC_AFTERNM2"))) {
        			nrow = this.dsImageFile1.addRow();
        			this.dsImageFile1.setColumn(nrow, "filepath", this.filepath + "AFTER/" + this.getOwnerFrame().CD_SITE + "/" + this.getOwnerFrame().CD_JOB);
        			this.dsImageFile1.setColumn(nrow, "filename", this.dsList.getColumn(0, "PIC_AFTERNM2"));
        		}
        	}

        	// 서버 이미지파일 base64 로 받아오기
        	var strSvcId    = "imagefile";
        	var strSvcType  = "file/imageFile";
        	var inProc		= "";
        	var inData      = "input=dsImageFile1";
        	var outData     = "dsImageFile1=input";
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

        this.fnImageView2 = function() {
        	this.dsImageFile2.clearData();
        	if (this.dsList.rowcount > 0) {
        		var nrow = 0;
        		if (!this.gfnIsNull( this.dsList.getColumn(0,"PIC_SIGNNM"))) {
        			nrow = this.dsImageFile2.addRow();
        			this.dsImageFile2.setColumn(nrow, "filepath", this.filepath + "SIGN/" + this.getOwnerFrame().CD_SITE + "/" + this.getOwnerFrame().CD_JOB);
        			this.dsImageFile2.setColumn(nrow, "filename", this.dsList.getColumn(0, "PIC_SIGNNM"));
        		}
        	}

        	// 서버 이미지파일 base64 로 받아오기
        	var strSvcId    = "imagefile";
        	var strSvcType  = "file/imageFile";
        	var inProc		= "";
        	var inData      = "input=dsImageFile2";
        	var outData     = "dsImageFile2=input";
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

        // this.fnImageView = function() {
        // 	this.dsImageFile.clearData();
        // 	if (this.dsList.rowcount > 0) {
        // 		var nrow = 0;
        // 		if (!this.gfnIsNull( this.dsList.getColumn(0,"PIC_BEFORENM"))) {
        // 			nrow = this.dsImageFile.addRow();
        // 			this.dsImageFile.setColumn(nrow, "filepath", this.filepath + "BEFORE/" + this.getOwnerFrame().CD_SITE + "/" + this.getOwnerFrame().CD_JOB);
        // 			this.dsImageFile.setColumn(nrow, "filename", this.dsList.getColumn(0, "PIC_BEFORENM"));
        // 		}
        //
        // 		if (!this.gfnIsNull( this.dsList.getColumn(0,"PIC_BEFORENM2"))) {
        // 			nrow = this.dsImageFile.addRow();
        // 			this.dsImageFile.setColumn(nrow, "filepath", this.filepath + "BEFORE/" + this.getOwnerFrame().CD_SITE + "/" + this.getOwnerFrame().CD_JOB);
        // 			this.dsImageFile.setColumn(nrow, "filename", this.dsList.getColumn(0, "PIC_BEFORENM2"));
        // 		}
        //
        // 		if (!this.gfnIsNull( this.dsList.getColumn(0,"PIC_AFTERNM"))) {
        // 			nrow = this.dsImageFile.addRow();
        // 			this.dsImageFile.setColumn(nrow, "filepath", this.filepath + "AFTER/" + this.getOwnerFrame().CD_SITE + "/" + this.getOwnerFrame().CD_JOB);
        // 			this.dsImageFile.setColumn(nrow, "filename", this.dsList.getColumn(0, "PIC_AFTERNM"));
        // 		}
        //
        // 		if (!this.gfnIsNull( this.dsList.getColumn(0,"PIC_AFTERNM2"))) {
        // 			nrow = this.dsImageFile.addRow();
        // 			this.dsImageFile.setColumn(nrow, "filepath", this.filepath + "AFTER/" + this.getOwnerFrame().CD_SITE + "/" + this.getOwnerFrame().CD_JOB);
        // 			this.dsImageFile.setColumn(nrow, "filename", this.dsList.getColumn(0, "PIC_AFTERNM2"));
        // 		}
        //
        // 		if (!this.gfnIsNull( this.dsList.getColumn(0,"PIC_SIGNNM"))) {
        // 			nrow = this.dsImageFile.addRow();
        // 			this.dsImageFile.setColumn(nrow, "filepath", this.filepath + "SIGN/" + this.getOwnerFrame().CD_SITE + "/" + this.getOwnerFrame().CD_JOB);
        // 			this.dsImageFile.setColumn(nrow, "filename", this.dsList.getColumn(0, "PIC_SIGNNM"));
        // 		}
        // 	}
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
        // 						strArg, 			// 입력갑스로 보낼 arguments, strFormData="20120607"
        // 						callBackFnc); // 통신방법 정의 [생략가능]
        // };

        /*
         * 이미지 파일 다운로드 버튼 클릭
         */
        this.btnPicImgDown_onclick = function(obj,e) {
        	if (obj.id == "btnPicBeforeDown") {
        		if (this.gfnIsNull(this.dsList.getColumn(0,"PIC_BEFORENM"))) {
        			this.gfnAlert("점검전 사진이 등록되있지 않습니다.");
        			return;
        		}
        		this.fnDownload(this.filepath + "BEFORE/" + this.getOwnerFrame().CD_SITE + "/" + this.getOwnerFrame().CD_JOB, this.dsList.getColumn(0,"PIC_BEFORENM"));
        	}

        	else if (obj.id == "btnPicBeforeDown2") {
        		if (this.gfnIsNull(this.dsList.getColumn(0,"PIC_BEFORENM2"))) {
        			this.gfnAlert("점검전 사진이 등록되있지 않습니다.");
        			return;
        		}
        		this.fnDownload(this.filepath + "BEFORE/" + this.getOwnerFrame().CD_SITE + "/" + this.getOwnerFrame().CD_JOB, this.dsList.getColumn(0,"PIC_BEFORENM2"));
        	}

        	else if (obj.id == "btnPicAfterDown") {
        		if (this.gfnIsNull(this.dsList.getColumn(0,"PIC_AFTERNM"))) {
        			this.gfnAlert("점검후 사진이 등록되있지 않습니다.");
        			return;
        		}
        		this.fnDownload(this.filepath + "AFTER/" + this.getOwnerFrame().CD_SITE + "/" + this.getOwnerFrame().CD_JOB, this.dsList.getColumn(0,"PIC_AFTERNM"));
        	}

        	else if (obj.id == "btnPicAfterDown2") {
        		if (this.gfnIsNull(this.dsList.getColumn(0,"PIC_AFTERNM2"))) {
        			this.gfnAlert("점검후 사진2이 등록되있지 않습니다.");
        			return;
        		}
        		this.fnDownload(this.filepath + "AFTER/" + this.getOwnerFrame().CD_SITE + "/" + this.getOwnerFrame().CD_JOB, this.dsList.getColumn(0,"PIC_AFTERNM2"));
        	}

        	else if (obj.id == "btnPicSignDown") {
        		if (this.gfnIsNull(this.dsList.getColumn(0,"PIC_SIGNNM"))) {
        			this.gfnAlert("완료사인 사진이 등록되있지 않습니다.");
        			return;
        		}
        		this.fnDownload(this.filepath + "SIGN/" + this.getOwnerFrame().CD_SITE + "/" + this.getOwnerFrame().CD_JOB, this.dsList.getColumn(0,"PIC_SIGNNM"));
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
        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.form_onload,this);
            this.btnPicAfterDown.addEventHandler("onclick",this.btnPicImgDown_onclick,this);
            this.btnPicBeforeDown.addEventHandler("onclick",this.btnPicImgDown_onclick,this);
            this.staTitle03.addEventHandler("onclick",this.staTitle03_onclick,this);
            this.btnPicSignDown.addEventHandler("onclick",this.btnPicImgDown_onclick,this);
            this.btnClose.addEventHandler("onclick",this.btnCancle_onclick,this);
            this.btnPicBeforeDown2.addEventHandler("onclick",this.btnPicImgDown_onclick,this);
            this.btnPicAfterDown2.addEventHandler("onclick",this.btnPicImgDown_onclick,this);
            this.dsList.addEventHandler("onvaluechanged",this.dsList_onvaluechanged,this);
        };
        this.loadIncludeScript("DBS_WORKPICPOPUP.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
