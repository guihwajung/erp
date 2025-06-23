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
            this.getSetter("maxwidth").set("480");
            this.getSetter("maxheight").set("240");
            if (Form == this.constructor)
            {
                this._setFormPosition(450,230);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("_dsProc", this);
            obj._setContents("<ColumnInfo><Column id=\"TARGET\" type=\"STRING\" size=\"256\"/><Column id=\"SP\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"TARGET\">datainfo</Col><Col id=\"SP\">DHVPR_LOCALTAX_FILE</Col></Row><Row><Col id=\"TARGET\">ESingo</Col><Col id=\"SP\">DHVPR_LOCALTAX_FILE</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsSearch", this);
            obj._setContents("<ColumnInfo><Column id=\"PASSWORD\" type=\"STRING\" size=\"256\"/><Column id=\"PASSWORD2\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row/></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsText", this);
            obj._setContents("");
            this.addChild(obj.name, obj);


            obj = new FileDownTransfer("FileDownTransfer00", this);
            this.addChild(obj.name, obj);


            obj = new FileDialog("fdg00", this);
            this.addChild(obj.name, obj);


            obj = new FileUpTransfer("FileUpTransfer00", this);
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Div("divData","0","0",null,"150","0",null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_cssclass("div_DATA_Bg");
            this.addChild(obj.name, obj);

            obj = new Static("staBg00","0","61",null,"30","0",null,null,null,null,null,this.divData.form);
            obj.set_taborder("8");
            obj.set_cssclass("sta_WF_tablebg");
            obj.set_text("");
            this.divData.addChild(obj.name, obj);

            obj = new Static("staTitle","10","0",null,"22","0",null,null,null,null,null,this.divData.form);
            obj.set_taborder("0");
            obj.set_text("전자신고 파일생성");
            obj.set_cssclass("sta_TITLE_Bg");
            this.divData.addChild(obj.name, obj);

            obj = new Static("staBg","0","staTitle:10",null,"30","0",null,null,null,null,null,this.divData.form);
            obj.set_taborder("1");
            obj.set_cssclass("sta_WF_tablebg");
            obj.set_text("");
            this.divData.addChild(obj.name, obj);

            obj = new Button("btnConf","148","staBg:57","69","27",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("2");
            obj.set_text("확인");
            this.divData.addChild(obj.name, obj);

            obj = new Button("btnCancel","227","staBg:57","69","27",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("3");
            obj.set_text("취소");
            this.divData.addChild(obj.name, obj);

            obj = new Static("staPASSWORD","0","32","110","30",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("4");
            obj.set_text("패스워드");
            obj.set_textAlign("center");
            obj.set_cssclass("sta_WF_tablelabelE");
            this.divData.addChild(obj.name, obj);

            obj = new Edit("edtPASSWORD","112","37","165","20",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("5");
            obj.set_password("true");
            this.divData.addChild(obj.name, obj);

            obj = new Static("staPASSWORD00","0","61","110","30",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("6");
            obj.set_text("패스워드 확인");
            obj.set_textAlign("center");
            obj.set_cssclass("sta_WF_tablelabelE");
            this.divData.addChild(obj.name, obj);

            obj = new Edit("edtPASSWORD2","112","66","165","20",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("7");
            obj.set_password("true");
            this.divData.addChild(obj.name, obj);

            obj = new Static("sta00","25","89","331","20",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("9");
            obj.set_text("영문, 숫자, 특수문자 조합으로 8자 이상, 12자 이하 입니다.");
            obj.set_textAlign("right");
            this.divData.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this
            obj = new Layout("default","",this._adjust_width,this._adjust_height,this,function(p){});
            this.addLayout(obj.name, obj);
            
            // BindItem Information
            obj = new BindItem("item0","divData.form.edtPASSWORD","value","dsSearch","PASSWORD");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item1","divData.form.edtPASSWORD2","value","dsSearch","PASSWORD2");
            this.addChild(obj.name, obj);
            obj.bind();
            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script
        this.registerScript("DHV_LOCALTAX_FILE_DLG.xfdl", function() {
        this.objApp = this.gfnGetApplication();

        var context = "/";
        if (nexacro.getEnvironmentVariable("evContextPath") != undefined) {
        	context = nexacro.getEnvironmentVariable("evContextPath");
        }

        this.fileConfig = {
        	host : this.gfnGetServerUrl(),
        	downloadUrl : context + "file/downloadText.do",
        	allowTypes : ["txt"],
        	maxCount : 1,
        	maxSize : "200MB",
        	maxTotalSize : "200MB"
        };

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

        	this.divData.form.edtPASSWORD.setFocus();

        };

        /************************************************************************
         * 버튼 설정 : 화면(Tab) 전환시 마다 호출
         * 서브버튼 사용 및 공통버튼 강제 제어시 여기서 처리
         ************************************************************************/
        this.fnSetButton = function() {

        }

        /************************************************************************
         * 확장 버튼 : 화면별 버튼 설정 ID, function 연결 (화면버튼관리)
         ************************************************************************/
        this.fnSetExtendButton = function() {

        };

        /************************************************************************
         * 변수 선언
         ************************************************************************/
        this.fnSetVariable = function() {
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

        	this.dsESingo = new Dataset();
        	this.dsESingo.addColumn("CD_CORP", "string");
        	this.dsESingo.addColumn("NO_ID", "string");
        	this.dsESingo.addColumn("_SP", "string");

        }

        /************************************************************************
         * 컨트롤 이벤트
         ************************************************************************/
        /************************************************************************
         * Validate
         ************************************************************************/
        this.fnSelectValidate = function() {
        	var validate = true;

        	return validate;
        };
        /************************************************************************
         * 콜백 이벤트
         ************************************************************************/
        this.fnCallback = function(svcID, errorCode, errorMsg) {

        	if (errorCode != 0) {
        		this.gfnAlert(errorMsg);
        		return;
        	}
        	if(svcID == "ESingo") {
        		if(errorCode == 0) {
        			this.fnFileDownload();
        		}
        		else {
        			this.gfnAlert(errorMsg);
        		}
        	}

        	if(svcID == "fcrypt") {
        		if(errorCode == 0) {
        			//this.FileDownTransfer00.download();
        			this.getParentContext().close(true);
        		}
        		else {
        			this.gfnAlert(errorMsg);
        		}
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
        //취소버튼 클릭
        this.btnCancel_onclick = function(obj,e)
        {
        	this.getParentContext().close(false);
        };

        //확인버튼 클릭
        this.btnConf_onclick = function(obj,e)
        {
        	if(!this.fnValidate()) return;

        // 	var password = this.dsSearch.getColumn(0, "PASSWORD") || "";
        // 	const regAlphabets = /[A-Za-z]{1,}/g;
        // 	const regNumberics = /[0-9]{1,}/g;
        // 	const regSpecials = /[!@#$%^&*(),.<>\/?\\+\-]{1,}/g;
        // 	const alphabets = password.match(regAlphabets) || [];
        // 	const numberics = password.match(regNumberics) || [];
        // 	const specials = password.match(regSpecials) || [];
        //
        // 	if (alphabets.length == 0 || numberics == 0 || specials == 0 || password.length < 8 || password.length > 12) {
        // 		this.gfnAlert("영문, 숫자, 특수문자 조합으로 8자 이상, 12자 이하 입니다.");
        // 		this.divData.form.edtPASSWORD.setFocus();
        // 		return false;
        // 	}

        	if(this.dsSearch.getColumn(0, "PASSWORD") != this.dsSearch.getColumn(0, "PASSWORD2")){
        		this.gfnAlert("패스워드가 서로 다릅니다. 다시 입력하세요!", "");
        		this.divData.form.edtPASSWORD.setFocus();
        		return;
        	}

        	//this.gfnConfirm("전자 신고 작업을 진행하시겠습니까?", "fnESingoCallBack");
        	this.gfnConfirm("전자 신고 작업을 진행하시겠습니까?", "fnFileCrypt");
        };

        this.fnValidate = function() {
        	if (this.gfnIsNull(this.getOwnerFrame().CD_CORP)) {
        		this.gfnAlert("법인코드를 입력하세요.", "");
        		return false;
        	}

        	if(this.gfnIsNull(this.getOwnerFrame().NO_ID)) {
        		this.gfnAlert("신고자료문서를 선택하세요!", "");
        		return false;
        	}

        	if (this.gfnIsNull(this.dsSearch.getColumn(0, "PASSWORD"))) {
        		this.fnVaidateCallback = function() {
        			this.divData.form.edtPASSWORD.setFocus();
        		}
        		this.gfnAlert("패스워드를 입력하세요.", "");
        		return false;
        	}

        	if (this.gfnIsNull(this.dsSearch.getColumn(0, "PASSWORD2"))) {
        		this.fnVaidateCallback = function() {
        			this.divData.form.edtPASSWORD2.setFocus();
        		}
        		this.gfnAlert("패스워드 확인을 입력하세요.", "");
        		return false;
        	}

        	return true;
        }

        this.fnESingoCallBack = function(strId, val) {
        	if(!val) return;

        	//전자신고

        	this.dsESingo.clearData();
        	var nrow = this.dsESingo.addRow();

        	this.dsESingo.setColumn(nrow, "CD_CORP", this.getOwnerFrame().CD_CORP);
        	this.dsESingo.setColumn(nrow, "NO_ID", this.getOwnerFrame().NO_ID);

        	trace(this.dsESingo.saveXML());

        	var strSvcId    = "ESingo";
        	var strSvcType  = "select";
        	var inProc		= "_dsProc";
        	var inData      = "ESingo=dsESingo";
        	var outData     = "dsText=ESingo0";
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

        this.fnFileDownload = function () {

        	if (this.dsText.rowcount <= 0) {
        		return false;
        	}

        	var data="";
        	for(var i=0;i<this.dsText.rowcount;i++){
        		data = data + this.dsText.getColumn(i,"ROWDATA");
        		if(i == this.dsText.rowcount -1){
        			;
        		}else{
        			data = data + "\n";
        		}
        	}
        	//trace("data==>", data);
        	//파일 명명규칙  : 작성일자 + 서식코드(7) + 자료구분(1)
        	var sFilename = this.gfnGetDate()+"A103900.1"; 				  //yyyyMMdd(오늘날짜)A103900.01
        	var sFilecont = data;
        	var encodeFileName = encodeURIComponent(sFilename);
        	var password = this.dsSearch.getColumn(0, "PASSWORD");

        	var surl = this.fileConfig.host+ this.fileConfig.downloadUrl; // + encodeFileName;
        	this.FileDownTransfer00.set_url(surl);
        	this.FileDownTransfer00.setPostData("fileCont", sFilecont);
        	this.FileDownTransfer00.setPostData("fileName", encodeFileName);
        	this.FileDownTransfer00.setPostData("fileEncoding", "EUC-KR");

        	if( system.navigatorname =="nexacro"){
        		this.FileDownTransfer00.set_downloadfilename(sFilename);
        	}
        	this.FileDownTransfer00.download();

        }

        this.fnFileCrypt = function(strId, val) {
        	if(!val) return;

        	//trace(" fnFileCrypt=>" );

        	this.dsFileCrypt = new Dataset();

        	this.dsFileCrypt.addColumn("FILEPATH", "string");
        	this.dsFileCrypt.addColumn("FILENAME", "string");
        	this.dsFileCrypt.addColumn("PASSWORD", "string");

        	var filePath = "NTS";
        	var sFilename = this.gfnGetDate()+"A103900.1"; 				  //yyyyMMdd(오늘날짜)A103900.01
        	var encodeFileName = encodeURIComponent(sFilename);
        	var password = this.dsSearch.getColumn(0, "PASSWORD");

        	this.dsFileCrypt.clearData();
        	this.dsFileCrypt.addRow();
        	this.dsFileCrypt.setColumn(0, "FILEPATH", filePath);
        	this.dsFileCrypt.setColumn(0, "FILENAME", encodeFileName);
        	this.dsFileCrypt.setColumn(0, "PASSWORD", password);

        	this.dsESingo.clearData();
        	var nrow = this.dsESingo.addRow();

        	this.dsESingo.setColumn(nrow, "CD_CORP", this.getOwnerFrame().CD_CORP);
        	this.dsESingo.setColumn(nrow, "NO_ID", this.getOwnerFrame().NO_ID);
        	this.dsESingo.setColumn(nrow, "_SP", "DHVPR_LOCALTAX_FILE");

        // 	trace(" filePath=>" + filePath);
        // 	trace(" fileName=>" + sFilename);
        // 	trace(" password=>" + password);

            var strSvcId    = "fcrypt";
        	var strSvcType  = "file/NTSCrypt";
        	var inProc		= "";
        	var inData      = "datainfo=dsESingo fileinfo=dsFileCrypt";
        	var outData     = "";
        	var strArg      = "";
        	var callBackFnc = "fileCryptCallback";

        	this.gfnTransaction( strSvcId , 	// transaction을 구분하기 위한 svc id값
        						strSvcType , 	// transaction을 요청할 구분
        						inProc,			// Procedure 정보 Dataset 이름
        						inData , 		// 입력값으로 보낼 dataset id , a=b형태로 실제이름과 입력이름을 매칭
        						outData , 		// 처리결과값으로 받을 dataset id, a=b형태로 실제이름과 입력이름을 매칭
        						strArg, 			// 입력갑스로 보낼 arguments, strFormData="20120607"
        						callBackFnc); // 통신방법 정의 [생략가능]
        }

        this.fileCryptCallback = function(svcID, errorCode, errorMsg)
        {
        // 	trace(" fileCryptCallback=>" + svcID);
        // 	trace(" errorMsg=>" + errorMsg);
        	if (errorCode == 0) {
        		var filename = errorMsg;
        		var Filepath = "NTS";
        		var fileConfig = this.gfnGetFileConfig();
        		var surl = fileConfig.host+ fileConfig.downloadUrl;
        		var encodeFileName = encodeURIComponent(filename);

        // 		trace(" Filepath =>" + Filepath);
        //  		trace(" filename =>" + filename);

        		this.FileDownTransfer00.set_url(surl);
        		this.FileDownTransfer00.setPostData("path", Filepath);
        		this.FileDownTransfer00.setPostData("fileName", encodeFileName);
        		if( system.navigatorname =="nexacro"){
        			this.FileDownTransfer00.set_downloadfilename(filename);
        		}
        		this.FileDownTransfer00.download();
        		this.getParentContext().close(true);
        	} else {
        		this.gfnAlert(errorMsg);
        	}
        };



        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.form_onload,this);
            this.divData.form.btnConf.addEventHandler("onclick",this.btnConf_onclick,this);
            this.divData.form.btnCancel.addEventHandler("onclick",this.btnCancel_onclick,this);
            this.dsSearch.addEventHandler("onvaluechanged",this.dsMagam_onvaluechanged,this);
            this.dsText.addEventHandler("onvaluechanged",this.dsMagam_onvaluechanged,this);
            this.fdg00.addEventHandler("onclose",this.fdg00_onclose,this);
            this.FileUpTransfer00.addEventHandler("onprogress",this.FileUpTransfer00_onprogress,this);
            this.FileUpTransfer00.addEventHandler("onsuccess",this.FileUpTransfer00_onsuccess,this);
            this.FileUpTransfer00.addEventHandler("onerror",this.FileUpTransfer00_onerror,this);
        };
        this.loadIncludeScript("DHV_LOCALTAX_FILE_DLG.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
