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
            this.set_titletext("규정 조회");
            this.set_visible("false");
            if (Form == this.constructor)
            {
                this._setFormPosition(400,100);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("dsList", this);
            obj._setContents("");
            this.addChild(obj.name, obj);


            obj = new Dataset("_dsProc", this);
            obj._setContents("<ColumnInfo><Column id=\"TARGET\" type=\"STRING\" size=\"256\"/><Column id=\"SP\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"TARGET\">select</Col><Col id=\"SP\">DABPR_RULE_IMG_SELECT</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsImageFile", this);
            obj._setContents("<ColumnInfo><Column id=\"filepath\" type=\"STRING\" size=\"256\"/><Column id=\"filename\" type=\"STRING\" size=\"256\"/><Column id=\"filereturn\" type=\"STRING\" size=\"10000\"/></ColumnInfo>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Div("divData","0","0","400","0",null,null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_cssclass("div_DATA_Bg");
            obj.set_text("");
            this.addChild(obj.name, obj);

            obj = new ImageViewer("imgDS_IMG","0","0",null,null,"0","0",null,null,null,null,this.divData.form);
            obj.set_taborder("0");
            this.divData.addChild(obj.name, obj);

            obj = new Div("divNmFile","0","divData:20",null,"34","0",null,null,null,null,null,this);
            obj.set_taborder("1");
            this.addChild(obj.name, obj);

            obj = new Static("staNmFile","0","0","100","34",null,null,null,null,null,null,this.divNmFile.form);
            obj.set_taborder("0");
            obj.set_text("첨부파일");
            obj.set_cssclass("sta_WF_tablelabelE");
            this.divNmFile.addChild(obj.name, obj);

            obj = new Static("staNmFileBg","99","0",null,"34","0",null,null,null,null,null,this.divNmFile.form);
            obj.set_taborder("1");
            obj.set_cssclass("sta_WF_tablebg");
            obj.set_textAlign("right");
            this.divNmFile.addChild(obj.name, obj);

            obj = new Button("btnATTACH",null,"5","70","24","5",null,null,null,null,null,this.divNmFile.form);
            obj.set_taborder("2");
            obj.set_text("첨부파일");
            this.divNmFile.addChild(obj.name, obj);

            obj = new Edit("txtNM_FILE","staNmFile:4","5",null,"24","btnATTACH:4",null,null,null,null,null,this.divNmFile.form);
            obj.set_taborder("3");
            obj.set_readonly("true");
            this.divNmFile.addChild(obj.name, obj);

            obj = new Button("btnOK",null,"divNmFile:20","52","26","0",null,null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_text("확인");
            obj.set_cssclass("btn_WF_action");
            this.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this
            obj = new Layout("default","",this._adjust_width,this._adjust_height,this,function(p){});
            this.addLayout(obj.name, obj);
            
            // BindItem Information
            obj = new BindItem("item0","divNmFile.form.txtNM_FILE","value","dsList","NM_FILE");
            this.addChild(obj.name, obj);
            obj.bind();
            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script
        this.registerScript("DAB_RULE_IMG_DLG.xfdl", function() {
        this.objApp = this.gfnGetApplication();

        this.form_onload = function(obj,e)
        {
        	// -- 필수 -------------------//
        	this.gfnFormOnLoad(this);
        	this.gfnFormInfo(this);
        	// ---------------------------//

        	this.fnSetButton();
        	this.fnSetVariable();
        	this.fnSetEvent();
        	this.fnSetParameter();
        	this.fnSelect();
        };

        /************************************************************************
         * 버튼 설정
         * 서브버튼 사용 처리. 공통 및 확장버튼 버튼관리화면에서 셋팅.
         ************************************************************************/
        this.fnSetButton = function() {
        	// Select, Add, Del, Save, Excel, Print
        	// SubSelect, SubAdd, SubDel, SuubSave, SubExcel
        };

        /************************************************************************
         * 확장 버튼 : 화면별 버튼 설정 ID, function 연결 (화면버튼관리)
         ************************************************************************/

        /************************************************************************
         * 변수 선언
         ************************************************************************/
        this.fnSetVariable = function() {
        	this.imgDS_IMG = this.divData.form.imgDS_IMG;
        };

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
        	this.dsSelect.addColumn("CD_CORP", "STRING");
        	this.dsSelect.addColumn("CD_RULE", "STRING");
        };

        /************************************************************************
         * 컨트롤 이벤트
         ************************************************************************/
         /*
          *	조회
          */
        this.fnSelect = function() {
        	this.dsSelect.clearData();
        	this.dsSelect.addRow();
        	this.dsSelect.setColumn(0, "CD_CORP" , this.getOwnerFrame().CD_CORP);
        	this.dsSelect.setColumn(0, "CD_RULE" , this.getOwnerFrame().CD_RULE);

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
         /*
          * 이미지 조회
          */
        this.fnImageView = function() {

        	if (this.gfnIsNull(this.dsList.getColumn(0, "DS_IMG"))) {
        		this.fnSetImgView(0, this.divData.width);
            } else {
        		this.dsImageFile.clearData();
        		this.dsImageFile.addRow();
        		var filepath = "/DA/DAB/RULE/";
        		var key1 = this.dsList.getColumn(0, "CD_CORP");
        		var key2 = this.dsList.getColumn(0, "YY_RULE");
        		var key3 = this.dsList.getColumn(0, "CD_RULE");
        		this.dsImageFile.setColumn(0, "filepath", key1 + filepath + key2 + "/" + key3);
        		this.dsImageFile.setColumn(0, "filename", this.dsList.getColumn(0, "DS_IMG"));

        		// 서버 이미지파일 base64 로 받아오기
        		var strSvcId    = "imagefile";
        		var strSvcType  = "file/imageFile";
        		var inProc      = "";
        		var inData      = "input=dsImageFile";
        		var outData     = "dsImageFile=input";
        		var strArg      = "";
        		var callBackFnc = "fnCallback";

        		this.gfnTransaction(strSvcId,   	// transaction을 구분하기 위한 svc id값
        							strSvcType, 	// transaction을 요청할 구분
        							inProc,  		// Procedure 정보 Dataset 이름
        							inData,  		// 입력값으로 보낼 dataset id , a=b형태로 실제이름과 입력이름을 매칭
        							outData, 		// 처리결과값으로 받을 dataset id, a=b형태로 실제이름과 입력이름을 매칭
        							strArg,  		// 입력갑스로 보낼 arguments, strFormData="20120607"
        							callBackFnc,
        							false); 		// 통신방법 정의 [생략가능]
        	}
        };
         /************************************************************************
         * Validate
         ************************************************************************/
        this.fnSaveValidate = function() {

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
        		return false;
        	}

        	switch(svcID) {
        		case "select" :
        			this.imgDS_IMG.set_image(null);

        			if(this.dsList.rowcount > 0) {
        				if( !this.gfnIsNull(this.dsList.getColumn(0,"DS_MSG")) ){
        					this.fnCallback = function() {
        						this.getParentContext().close(false);
        					}
        					this.gfnAlert(this.dsList.getColumn(0,"DS_MSG"), "fnCallback");
        				} else {
        					this.fnImageView();
        				}
        			}
        			break;
        		case "imagefile":
        			if( !this.gfnIsNull(this.dsImageFile.getColumn(0, "filereturn")) ){
        				this.imgDS_IMG.set_image(this.dsImageFile.getColumn(0, "filereturn"));
        			} else {
        				this.fnSetImgView(0, this.divData.width);
        			}

        			break;
        	}
        };

        /************************************************************************
         * 코드파인드 이벤트
         ************************************************************************/
        /************************************************************************
         * 그리드 이벤트
         ************************************************************************/

         /************************************************************************
         * 확장버튼 이벤트
         ************************************************************************/
        /************************************************************************
         * 기타 이벤트
         ************************************************************************/
         // 확인 버튼
        this.btnOk_onclick = function(obj,e)
        {
        	this.getParentContext().close(false);
        };
        this.divData_imgDS_IMG_onload = function(obj,e)
        {

        	this.fnSetImgView(this.imgDS_IMG.imageheight, this.imgDS_IMG.imageheight);
        };

        this.fnSetImgView = function(imageheight, imagewidth){
        	this.set_visible(true);
        	this.divData.set_height(imageheight);
        	this.divData.set_width(imagewidth);
        	this.imgDS_IMG.set_left(0);
        	this.imgDS_IMG.set_top(0);
        	this.imgDS_IMG.set_right(0);
        	this.imgDS_IMG.set_bottom(0);
        	this.divData.form.resetScroll();
        	this.divNmFile.set_top("divData:20");


        	this.btnOK.set_top("divNmFile:20");
        	this.btnOK.set_right(0);
        	this.set_height(nexacro.toNumber(this.divData.height,0)+66+54);
        	this.set_width(this.divData.width);
        	this.resetScroll();

        	// frameWorkPopup : DIALOG#DAB#DAB_RULE_IMG_DLG
        	this.parent.parent.parent.set_width(nexacro.toNumber(this.width,0)+40);
        	this.parent.parent.parent.set_height(nexacro.toNumber(this.divData.height,0)+66+60+54);
        	this.parent.parent.parent.form.resetScroll();

        	var top = this.parent.parent.parent.top;
        	var height = this.parent.parent.parent.height;
        	var center = (this.objApp.mainframe.height - this.parent.parent.parent.height)/2;
        	this.parent.parent.parent.set_top(center);

        }

        this.btnATTACH_onclick = function(obj,e)
        {
        	if( this.dsList.getColumn(0, "CNT_FILE") == 0  ){
        		this.gfnAlert("등록된 첨부파일이 없습니다.");
        		return false;
        	}

        	var fileManager = {};
            fileManager.CD_GUBUN = "DAB8";
            fileManager.CD_DIR = [this.dsList.getColumn(0, "YY_RULE") , this.dsList.getColumn(0, "CD_RULE")];
        	if(this.FormInfo.TY_AUTH == "R") {
        		fileManager.IS_READONLY = true;
        	} else {
        		fileManager.IS_READONLY = false;
            }
            this.gfnFileManager(fileManager, "fnFileCallback");
        };

        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.form_onload,this);
            this.addEventHandler("onbeforeclose",this.form_onbeforeclose,this);
            this.divData.form.imgDS_IMG.addEventHandler("onload",this.divData_imgDS_IMG_onload,this);
            this.divNmFile.form.btnATTACH.addEventHandler("onclick",this.btnATTACH_onclick,this);
            this.btnOK.addEventHandler("onclick",this.btnOk_onclick,this);
            this.dsList.addEventHandler("onvaluechanged",this.dsList_onvaluechanged,this);
        };
        this.loadIncludeScript("DAB_RULE_IMG_DLG.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
