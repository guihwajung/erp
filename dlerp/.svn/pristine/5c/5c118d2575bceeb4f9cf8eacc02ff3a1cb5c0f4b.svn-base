(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("DAA_PERSCARD_DLG");
            this.set_titletext("사진변경요청");
            this.getSetter("maxwidth").set("435");
            this.getSetter("maxheight").set("440");
            if (Form == this.constructor)
            {
                this._setFormPosition(391,362);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("dsList", this);
            obj._setContents("<ColumnInfo><Column id=\"CD_CORP\" type=\"STRING\" size=\"256\"/><Column id=\"DS_CORP\" type=\"STRING\" size=\"256\"/><Column id=\"ID_PERSON\" type=\"STRING\" size=\"256\"/><Column id=\"ID_SABUN\" type=\"STRING\" size=\"256\"/><Column id=\"DS_HNAME\" type=\"STRING\" size=\"256\"/><Column id=\"CD_DEPT\" type=\"STRING\" size=\"256\"/><Column id=\"DS_DEPT\" type=\"STRING\" size=\"256\"/><Column id=\"TY_RETIRE\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row/></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("_dsProc", this);
            obj._setContents("<ColumnInfo><Column id=\"TARGET\" type=\"STRING\" size=\"256\"/><Column id=\"SP\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"TARGET\">select</Col><Col id=\"SP\">DAAPR_BASEPIC_SELECT</Col></Row><Row><Col id=\"TARGET\">picCheck</Col><Col id=\"SP\">DAAPR_BASEPIC_CHECK</Col></Row><Row><Col id=\"TARGET\">save</Col><Col id=\"SP\">DAAPR_BASEPIC_SAVE</Col></Row><Row><Col id=\"TARGET\">fileInfo</Col><Col id=\"SP\">DZUPR_FILEMANAGER_SELECT</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsSearch", this);
            obj._setContents("<ColumnInfo><Column id=\"ID_SABUN\" type=\"STRING\" size=\"256\"/><Column id=\"DS_HNAME\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row/></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsInfoParam", this);
            obj._setContents("<ColumnInfo><Column id=\"CD_GUBUN\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsInfo", this);
            obj._setContents("");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsInfoTemp", this);
            obj._setContents("");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsImageFile", this);
            obj._setContents("<ColumnInfo><Column id=\"filepath\" type=\"STRING\" size=\"256\"/><Column id=\"filename\" type=\"STRING\" size=\"256\"/><Column id=\"filereturn\" type=\"STRING\" size=\"10000\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new FileDialog("fileUpDialog", this);
            this.addChild(obj.name, obj);


            obj = new FileUpTransfer("FileUpTransfer", this);
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Div("divData","0","0","391","362",null,null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_cssclass("div_DATA_Bg");
            this.addChild(obj.name, obj);

            obj = new Static("staTITLE","0","0","300","30",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("0");
            obj.set_text("사진변경요청");
            obj.set_cssclass("sta_TITLE_Bg");
            obj.set_textAlign("left");
            this.divData.addChild(obj.name, obj);

            obj = new Static("staID_SABUN","0","36","100","30",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("1");
            obj.set_text("성명");
            obj.set_cssclass("sta_WF_tablelabel");
            this.divData.addChild(obj.name, obj);

            obj = new Static("staID_SABUN_bg","staID_SABUN:-1","staID_SABUN:-30","292","30",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("4");
            obj.set_cssclass("sta_WF_tablebg");
            obj.set_text("");
            this.divData.addChild(obj.name, obj);

            obj = new Div("ccfID_SABUN","staID_SABUN:5","41","280","20",null,null,null,null,null,null,this.divData.form);
            obj.getSetter("CDTextWidth").set("90");
            obj.set_taborder("2");
            obj.set_url("cmm::cmmCodeFind.xfdl");
            obj.set_text("");
            obj.getSetter("BeforeUserDataSetParam").set("fnBeforeUserDataSetParam");
            obj.getSetter("AfterCDTextChanged").set("fnAfterCDTextChanged");
            obj.getSetter("CodeFindName").set("DAX_CFBASEINFO");
            obj.set_enable("false");
            this.divData.addChild(obj.name, obj);

            obj = new Static("staDT_REQUEST","0","staID_SABUN:-1","100","30",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("5");
            obj.set_text("최근요청일");
            obj.set_cssclass("sta_WF_tablelabel");
            this.divData.addChild(obj.name, obj);

            obj = new Static("staDT_REQUEST_bg","staDT_REQUEST:-1","staDT_REQUEST:-30","112","30",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("6");
            obj.set_cssclass("sta_WF_tablebg");
            obj.set_text("");
            this.divData.addChild(obj.name, obj);

            obj = new Calendar("calDT_REQUEST","staDT_REQUEST:5","staDT_REQUEST:-25","100","20",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("9");
            obj.set_dateformat("yyyy-MM-dd");
            obj.set_readonly("true");
            this.divData.addChild(obj.name, obj);

            obj = new Static("staTY_STATUS","staDT_REQUEST_bg:-1","staDT_REQUEST_bg:-30","80","30",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("7");
            obj.set_text("요청상태");
            obj.set_cssclass("sta_WF_tablelabel");
            this.divData.addChild(obj.name, obj);

            obj = new Static("edtTY_STATUS_bg","staTY_STATUS:-1","staTY_STATUS:-30","102","30",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("8");
            obj.set_cssclass("sta_WF_tablebg");
            obj.set_text("");
            obj.getSetter("onchanged").set("divData_edtTY_STATUS_bg_onchanged");
            this.divData.addChild(obj.name, obj);

            obj = new Edit("edtTY_STATUS","staTY_STATUS:5","staTY_STATUS:-25","90","20",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("14");
            obj.set_textAlign("center");
            obj.set_readonly("true");
            obj.set_text("반려 및 취소");
            this.divData.addChild(obj.name, obj);

            obj = new Edit("edtID_PERSON","282","20","74","20",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("15");
            obj.set_visible("false");
            this.divData.addChild(obj.name, obj);

            obj = new Static("staPIC_BEFORE","55","staDT_REQUEST:20","126","30",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("10");
            obj.set_text("현재사진");
            obj.set_cssclass("sta_WF_tablelabel");
            obj.set_textAlign("center");
            this.divData.addChild(obj.name, obj);

            obj = new ImageViewer("PIC_BEFORE","staPIC_BEFORE:-126","staPIC_BEFORE:0","126","170",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("11");
            obj.set_stretch("fixaspectratio");
            obj.set_text("");
            this.divData.addChild(obj.name, obj);

            obj = new Static("staPIC_AFTER","staPIC_BEFORE:35","staPIC_BEFORE:-30","126","30",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("12");
            obj.set_text("변경요청");
            obj.set_cssclass("sta_WF_tablelabel");
            obj.set_textAlign("center");
            this.divData.addChild(obj.name, obj);

            obj = new ImageViewer("PIC_AFTER","staPIC_AFTER:-126","staPIC_AFTER:0","126","170",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("13");
            obj.set_stretch("fixaspectratio");
            this.divData.addChild(obj.name, obj);

            obj = new Div("divBtns","135","335","130","27",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("3");
            this.divData.addChild(obj.name, obj);

            obj = new Button("btnOK","0","0","60","27",null,null,null,null,null,null,this.divData.form.divBtns.form);
            obj.set_taborder("16");
            obj.set_text("사진요청");
            this.divData.form.divBtns.addChild(obj.name, obj);

            obj = new Button("btnCANCLE","btnOK:10","0","60","27",null,null,null,null,null,null,this.divData.form.divBtns.form);
            obj.set_taborder("17");
            obj.set_text("닫기");
            this.divData.form.divBtns.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this
            obj = new Layout("default","",this._adjust_width,this._adjust_height,this,function(p){});
            this.addLayout(obj.name, obj);
            
            // BindItem Information
            obj = new BindItem("item5","ccfID_SABUN.form.CDTextBox","value","dsList","ID_SABUN");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item6","ccfID_SABUN.form.DSTextBox","value","dsList","DS_HNAME");
            this.addChild(obj.name, obj);
            obj.bind();
            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {
            this._addPreloadList("fdl","cmm::cmmCodeFind.xfdl");
        };
        
        // User Script
        this.registerScript("DAA_BASETEMP.xfdl", function() {
        this.objApp = this.gfnGetApplication();
        this.fileConfig = {
        			host : this.gfnGetServerUrl(),
        			uploadUrl : "file/saveEmpImg.do?path=",
        			allowTypes : ["jpg","jpeg","gif","png"],
        			maxCount : 1,
        			maxSize : "10MB",
        			maxTotalSize : "10MB"
        		};
        this.FileManager = {};

        this.form_onload = function(obj,e)
        {
        	// -- 필수 -------------------//
        	this.gfnFormOnLoad(this);
        	this.gfnFormInfo(this);
        	// ---------------------------//

        	//this.fnSetButton();
        	//this.fnSetExtendButton();
        	this.fnSetVariable();
        	this.fnSetEvent();
        	this.fnSetParameter();
        	//this.fnSetCombo();

        	//사번
        	this.divData.form.ccfID_SABUN.form.CDTextBox.set_value(this.getOwnerFrame().ID_SABUN);
        	this.divData.form.ccfID_SABUN.form.DSTextBox.set_value(this.getOwnerFrame().DS_HNAME);
        	this.divData.form.edtID_PERSON.set_value(this.getOwnerFrame().ID_PERSON);

        	this.fnSelect();

        	//파일 위치 정보 조회
        	this.fnFileInfo("DA00");
        	this.fnFileInfo("DA03");
        };

        /************************************************************************
         * 버튼 설정 : 화면(Tab) 전환시 마다 호출
         * 서브버튼 사용 및 공통버튼 강제 제어시 여기서 처리
         ************************************************************************/
        this.fnSetButton = function() {
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

        	//조회
        	this.dsSelect = new Dataset();
        	this.dsSelect.addColumn("ID_PERSON", "bigdecimal");

        	//저장
        	this.dsSave = new Dataset();
        	this.dsSave.addColumn("ID_PERSON", "bigdecimal");
        	this.dsSave.addColumn("ID_SABUN", "string");
        	this.dsSave.addColumn("PIC", "string");
        	this.dsSave.addColumn("DS_FILE_PATH", "string");
        	this.dsSave.addColumn("ID_INSERT", "string");
        };

        /************************************************************************
         * 컨트롤 이벤트
         ************************************************************************/
         this.fnSelect = function(){

        	if(this.gfnIsNull(this.divData.form.edtID_PERSON.value)){
        		this.gfnAlert("사원 정보를 찾을수 없습니다.관리자에게 문의하세요.");
        		return false;
        	}

        	this.dsSelect.clearData();
        	var norw = this.dsSelect.addRow();

        	this.dsSelect.setColumn(norw, "ID_PERSON", this.divData.form.edtID_PERSON.value);

        	var strSvcId    = "select";
        	var strSvcType  = "grid";
        	var inProc		= "_dsProc";
        	var inData      = "select=dsSelect";
        	var outData     = "dsList=select0";
        	var strArg      = "";
        	var callBackFnc = "fnCallback";

        	this.gfnTransaction( strSvcId ,
        						strSvcType ,
        						inProc,
        						inData ,
        						outData ,
        						strArg,
        						callBackFnc);
         };

         this.fnPicCheck = function(){

        	if(this.gfnIsNull(this.divData.form.edtID_PERSON.value)){
        		this.gfnAlert("사원 정보를 찾을수 없습니다.관리자에게 문의하세요.");
        		return false;
        	}

        	this.dsSelect.clearData();
        	var norw = this.dsSelect.addRow();

        	this.dsSelect.setColumn(norw, "ID_PERSON", this.divData.form.edtID_PERSON.value);

        	var strSvcId    = "picCheck";
        	var strSvcType  = "grid";
        	var inProc		= "_dsProc";
        	var inData      = "picCheck=dsSelect";
        	var outData     = "";
        	var strArg      = "";
        	var callBackFnc = "fnCallback";

        	this.gfnTransaction( strSvcId ,
        						strSvcType ,
        						inProc,
        						inData ,
        						outData ,
        						strArg,
        						callBackFnc);
         };

         this.fnSave = function(){

        	this.dsSave.clearData();

        	var nrow = this.dsSave.addRow();

        	this.dsSave.setColumn(nrow, "ID_PERSON", this.divData.form.edtID_PERSON.value);
        	this.dsSave.setColumn(nrow, "ID_SABUN", this.divData.form.ccfID_SABUN.form.CDTextBox.value);
        	this.dsSave.setColumn(nrow, "PIC", this.dsList.getColumn(0, "TEMP_PIC"));
        	this.dsSave.setColumn(nrow, "DS_FILE_PATH", this.dsInfoTemp.getColumn(0, "DS_PATH")+this.divData.form.calDT_REQUEST.value+"/");

        	// DS_FILE_PATH = DA/BASEINFO_TEMP/20201228/
        	// 파일경로는 DA03	DA/BASEINFO_TEMP/ + 오늘일자 폴더 + ID_PERSON.파일명

        	this.dsSave.setColumn(nrow, "ID_INSERT", this.AuthClient.ID_USER);

        	var strSvcId    = "save";
        	var strSvcType  = "grid";
        	var inProc		= "_dsProc";
        	var inData      = "save=dsSave";
        	var outData     = "";
        	var strArg      = "";
        	var callBackFnc = "fnCallback";

        	this.gfnTransaction( strSvcId ,
        						strSvcType ,
        						inProc,
        						inData ,
        						outData ,
        						strArg,
        						callBackFnc);
         };

        //사진요청
        this.btnOK_onclick = function(obj,e)
        {
        	 this.fnPicCheck();
        };
        //닫기
        this.btnCANCLE_onclick = function(obj,e)
        {
        	// 닫기
        	this.getParentContext().close(true);
        };

        //사진 업로드
        this.fnPicUpload = function(){
        	//File Dialog
        	this.fileUpDialog.open('nexacro17', FileDialog.LOAD);
        };
        /************************************************************************
         * Validate
         ************************************************************************/

        /************************************************************************
         * 코드파인드 이벤트
         ************************************************************************/
        this.fnBeforeUserDataSetParam = function(id, dsUserParam, nrow) {
        	if  (id == "ccfID_SABUN") {	//사번
        		dsUserParam.setColumn(nrow, "GR_SEARCH", this.FormInfo.GR_SEARCH);
        		dsUserParam.setColumn(nrow, "CD_DEPT", "%");
        		dsUserParam.setColumn(nrow, "TY_RETIRE", "%");
        	}

        	return true;
        };

        this.fnAfterCDTextChanged = function(id, codeFindData) {
        	var arr = codeFindData;

        	switch(id){
        		case "ccfID_SABUN" :
        			this.divData.form.edtID_PERSON.set_value(arr[0]["ID_PERSON"]);
        			this.fnSelect();
        			break;
        	}
        };

        /************************************************************************
         * 콜백 이벤트
         ************************************************************************/
        this.fnCallback = function(svcID, errorCode, errorMsg)
        {
        	if(svcID == "select"){
        		//요청일자
        		this.divData.form.calDT_REQUEST.set_value(this.dsList.getColumn(0, "DT_REQUEST")==null?this.gfnGetDate():this.dsList.getColumn(0, "DT_REQUEST"));
        		//요청상태
        		this.divData.form.edtTY_STATUS.set_value(this.dsList.getColumn(0, "DS_STATUS"));
        		//원본 이미지
        		this.fnImageView(this.dsInfo);

        		//변경이미지
        		this.fnImageView(this.dsInfoTemp);

        	}else if(svcID == "picCheck"){
        		if(errorCode == 0 ){
        			this.fnPicUpload();
        		}else{
        			//TO DO
        			this.divData.form.divBtns.form.btnOK.set_enable(false);
        		}
        	}else if(svcID == "fileInfo"){
        	}else if(svcID == "save"){
        		if(errorCode == 0 ){
        			this.gfnAlert("사진변경이 요청 되었습니다.");
        			//this.divBtns.form.btnOK.set_enable(false);
        			this.fnSelect();
        		} else {
        			this.gfnAlert(errorMsg);
        		}
        	}
        };

        /************************************************************************
         * 기타 이벤트
         ************************************************************************/
         //파일 위치 - 원본 사진
         this.fnFileInfo = function(gubun){

        	this.dsInfoParam.clearData();
        	this.dsInfoParam.addRow();

        	this.dsInfoParam.setColumn(0, "CD_GUBUN", gubun);

        	var strSvcId    = "fileInfo";
        	var strSvcType  = "select";
        	var inProc		= "_dsProc";
        	var inData      = "fileInfo=dsInfoParam";
        	var outData     =  (gubun=="DA00"?"dsInfo":"dsInfoTemp")+"=fileInfo0";
        	var strArg      = "";
        	var callBackFnc = "fnCallback";

        	this.gfnTransaction( strSvcId , 	// transaction을 구분하기 위한 svc id값
        						strSvcType , 	// transaction을 요청할 구분
        						inProc,			// Procedure 정보 Dataset 이름
        						inData , 		// 입력값으로 보낼 dataset id , a=b형태로 실제이름과 입력이름을 매칭
        						outData , 		// 처리결과값으로 받을 dataset id, a=b형태로 실제이름과 입력이름을 매칭
        						strArg, 			// 입력갑스로 보낼 arguments, strFormData="20120607"
        						callBackFnc,
        						false); // 통신방법 정의 [생략가능]
         };

        //이미지
        this.fnImageView = function(dsFilePath){

        	var colId = "";
        	var path = "";
        	if(dsFilePath.name == "dsInfo") {
        		colId = "BASE_PIC";
        		path = dsFilePath.getColumn(0, "DS_PATH");
        	}else{
        		path = this.dsList.getColumn(0, "DS_FILE_PATH");
        		colId = "TEMP_PIC";
        	}

        	 if (this.gfnIsNull(this.dsList) || this.gfnIsNull(this.dsList.getColumn(0, colId))) { return false; }

        		this.dsImageFile.clearData();
        		this.dsImageFile.addRow();

        		//var key = this.dsList.getColumn(0, "ID_PERSON");
        		this.dsImageFile.setColumn(0, "filepath", path);
        		this.dsImageFile.setColumn(0, "filename", this.dsList.getColumn(0, colId));

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

        		if(colId == "BASE_PIC"){
        			this.divData.form.PIC_BEFORE.set_image(this.dsImageFile.getColumn(0, "filereturn"));
        		}else{
        			this.divData.form.PIC_AFTER.set_image(this.dsImageFile.getColumn(0, "filereturn"));
        		}
        };

        //업로드 진행중
        this.FileUpTransfer_onprogress = function(obj,e)
        {
        	//trace("FileUpTransfer_onprogress: " + e.loaded+"/"+e.total);
        };

        //업로드 성공
        this.FileUpTransfer_onsuccess = function(obj,e)
        {
        	this.fnSave();
        };

        //업로드 실패
        this.FileUpTransfer_onerror = function(obj,e)
        {
        	this.gfnAlert(e.errormsg);
        };

        //파일 첨부
        this.fileUpDialog_onclose = function(obj,e)
        {
        	this.FileList = e.virtualfiles;

        	this.FileUpTransfer.clearFileList();
        	this.FileUpTransfer.clearPostDataList();

        	if(this.FileList.length > 0) {
        		var vFile;
        		for (var i = 0; i < this.FileList.length; i++)
        		{

        			vFile = this.FileList[0];

        			var fileExt = vFile.filename.toLocaleLowerCase().substring(vFile.filename.lastIndexOf('.')+1);
        			if(!this.gfnIsExistInArray(this.fileConfig.allowTypes, fileExt)) {
        				this.gfnAlert("이미지 파일(" + this.fileConfig.allowTypes.join(',') + ")을 선택하세요.");
        				return false;
        			}

        			vFile.addEventHandler("onsuccess", this.FileUpLoad_onsuccess, this);
        			vFile.addEventHandler("onerror", this.FileUpLoad_onerror , this);

        			vFile.open(null, 1);
        		}
        	}
        };

        //파일 업로드
        this.FileUpLoad_onsuccess = function(obj, e){
        	var context = "/";
        	if (nexacro.getEnvironmentVariable("evContextPath") != undefined) {
        		context = nexacro.getEnvironmentVariable("evContextPath");
        	}

        	this.FileUpTransfer.addFile(obj.filename, obj);
        	var sUploadUrl = this.fileConfig.host + context + this.fileConfig.uploadUrl+this.dsInfoTemp.getColumn(0, "DS_PATH")+ "|" +this.divData.form.edtID_PERSON.value; //id_person 값을 path에 포함시켜보냄.
        	var fileExt = obj.filename.toLocaleLowerCase().substring(obj.filename.lastIndexOf('.')+1);

        	this.dsList.setColumn(0, "TEMP_PIC", this.dsList.getColumn(0, "ID_PERSON")+"."+fileExt);

         	this.FileManager.SERVER_PATH = this.dsInfoTemp.getColumn(0, "DS_PATH").replace(/\//g, "\\") + "\\";
         	this.FileManager.CD_DIR = [this.divData.form.calDT_REQUEST.value];
         	this.FileManager.FULL_PATH = this.FileManager.SERVER_PATH.replace(/\\\\/g, "\\") + this.FileManager.CD_DIR.join('\\')+"|" +this.divData.form.edtID_PERSON.value;

         	this.FileUpTransfer.setPostData("path", this.FileManager.FULL_PATH);

        	// 파일업로드 - > http://demo.goodcen.com/file/saveEmpImg.do?path=DA/BASEINFO_TEMP/|1008
        	this.FileUpTransfer.upload(sUploadUrl);
        };
        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.form_onload,this);
            this.divData.form.staID_SABUN.addEventHandler("onclick",this.divData_sta10_onclick,this);
            this.divData.form.divBtns.form.btnOK.addEventHandler("onclick",this.btnOK_onclick,this);
            this.divData.form.divBtns.form.btnCANCLE.addEventHandler("onclick",this.btnCANCLE_onclick,this);
            this.dsList.addEventHandler("onvaluechanged",this.dsList_onvaluechanged,this);
            this.fileUpDialog.addEventHandler("onclose",this.fileUpDialog_onclose,this);
            this.FileUpTransfer.addEventHandler("onprogress",this.FileUpTransfer_onprogress,this);
            this.FileUpTransfer.addEventHandler("onsuccess",this.FileUpTransfer_onsuccess,this);
            this.FileUpTransfer.addEventHandler("onerror",this.FileUpTransfer_onerror,this);
        };
        this.loadIncludeScript("DAA_BASETEMP.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
