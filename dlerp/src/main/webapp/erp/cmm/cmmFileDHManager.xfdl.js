(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("cmmFileManager");
            this.set_titletext("전표증빙관리");
            if (Form == this.constructor)
            {
                this._setFormPosition(740,655);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("dsListA", this);
            obj._setContents("<ColumnInfo><Column id=\"nx_flag\" type=\"STRING\" size=\"256\"/><Column id=\"CHK\" type=\"INT\" size=\"256\"/><Column id=\"NO_SEQ\" type=\"INT\" size=\"256\"/><Column id=\"YN_AUTO\" type=\"STRING\" size=\"256\"/><Column id=\"TY_PROOF\" type=\"STRING\" size=\"256\"/><Column id=\"TY_PROOF_DTL\" type=\"STRING\" size=\"256\"/><Column id=\"DS_PATH\" type=\"STRING\" size=\"256\"/><Column id=\"DS_FILEIMG\" type=\"STRING\" size=\"256\"/><Column id=\"NM_FILE\" type=\"STRING\" size=\"256\"/><Column id=\"SZ_FILE\" type=\"BIGDECIMAL\" size=\"256\"/><Column id=\"DS_ETC\" type=\"STRING\" size=\"256\"/><Column id=\"YN_UPLOAD\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsListB", this);
            obj._setContents("<ColumnInfo><Column id=\"nx_flag\" type=\"STRING\" size=\"256\"/><Column id=\"CHK\" type=\"INT\" size=\"256\"/><Column id=\"NO_SEQ\" type=\"INT\" size=\"256\"/><Column id=\"YN_AUTO\" type=\"STRING\" size=\"256\"/><Column id=\"TY_PROOF\" type=\"STRING\" size=\"256\"/><Column id=\"TY_PROOF_DTL\" type=\"STRING\" size=\"256\"/><Column id=\"DS_PATH\" type=\"STRING\" size=\"256\"/><Column id=\"DS_FILEIMG\" type=\"STRING\" size=\"256\"/><Column id=\"NM_FILE\" type=\"STRING\" size=\"256\"/><Column id=\"SZ_FILE\" type=\"BIGDECIMAL\" size=\"256\"/><Column id=\"DS_ETC\" type=\"STRING\" size=\"256\"/><Column id=\"YN_UPLOAD\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("_dsProc", this);
            obj._setContents("<ColumnInfo><Column id=\"TARGET\" type=\"STRING\" size=\"256\"/><Column id=\"SP\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"TARGET\">info</Col><Col id=\"SP\">DZUPR_FILEMANAGER_DH_SELECT</Col></Row><Row><Col id=\"TARGET\">selectA</Col><Col id=\"SP\">DZZPR_FILEMANAGER_DH_SELECT</Col></Row><Row><Col id=\"TARGET\">selectB</Col><Col id=\"SP\">DZZPR_FILEMANAGER_DH_SELECT</Col></Row><Row><Col id=\"TARGET\">save</Col><Col id=\"SP\">DZZPR_FILEMANAGER_DH_SAVE</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsInfo", this);
            obj._setContents("");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsInfoParam", this);
            obj._setContents("<ColumnInfo><Column id=\"CD_GUBUN\" type=\"STRING\" size=\"256\"/><Column id=\"CD_CORP\" type=\"STRING\" size=\"256\"/><Column id=\"NO_FILE\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsParamA", this);
            obj._setContents("<ColumnInfo><Column id=\"CD_GUBUN\" type=\"STRING\" size=\"256\"/><Column id=\"CD_REF1\" type=\"STRING\" size=\"256\"/><Column id=\"CD_REF2\" type=\"STRING\" size=\"256\"/><Column id=\"CD_REF3\" type=\"STRING\" size=\"256\"/><Column id=\"CD_REF4\" type=\"STRING\" size=\"256\"/><Column id=\"CD_REF5\" type=\"STRING\" size=\"256\"/><Column id=\"YN_DESC\" type=\"STRING\" size=\"256\"/><Column id=\"TY_PROOF\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsParamB", this);
            obj._setContents("<ColumnInfo><Column id=\"CD_GUBUN\" type=\"STRING\" size=\"256\"/><Column id=\"CD_REF1\" type=\"STRING\" size=\"256\"/><Column id=\"CD_REF2\" type=\"STRING\" size=\"256\"/><Column id=\"CD_REF3\" type=\"STRING\" size=\"256\"/><Column id=\"CD_REF4\" type=\"STRING\" size=\"256\"/><Column id=\"CD_REF5\" type=\"STRING\" size=\"256\"/><Column id=\"YN_DESC\" type=\"STRING\" size=\"256\"/><Column id=\"TY_PROOF\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsSave", this);
            obj._setContents("<ColumnInfo><Column id=\"TY_SAVE\" type=\"STRING\" size=\"256\"/><Column id=\"NO_SEQ\" type=\"INT\" size=\"256\"/><Column id=\"CD_GUBUN\" type=\"STRING\" size=\"256\"/><Column id=\"DS_PATH\" type=\"STRING\" size=\"256\"/><Column id=\"NM_FILE\" type=\"STRING\" size=\"256\"/><Column id=\"SZ_FILE\" type=\"BIGDECIMAL\" size=\"256\"/><Column id=\"DS_ETC\" type=\"STRING\" size=\"256\"/><Column id=\"CD_REF1\" type=\"STRING\" size=\"256\"/><Column id=\"CD_REF2\" type=\"STRING\" size=\"256\"/><Column id=\"CD_REF3\" type=\"STRING\" size=\"256\"/><Column id=\"CD_REF4\" type=\"STRING\" size=\"256\"/><Column id=\"CD_REF5\" type=\"STRING\" size=\"256\"/><Column id=\"TY_PROOF\" type=\"STRING\" size=\"256\"/><Column id=\"TY_PROOF_DTL\" type=\"STRING\" size=\"256\"/><Column id=\"ID_TRANS\" type=\"STRING\" size=\"256\"/><Column id=\"AUTH_CD_CORP\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsSaveListA", this);
            obj._setContents("<ColumnInfo><Column id=\"NO_SEQ\" type=\"INT\" size=\"256\"/><Column id=\"DS_PATH\" type=\"STRING\" size=\"256\"/><Column id=\"DS_FILEIMG\" type=\"STRING\" size=\"256\"/><Column id=\"NM_FILE\" type=\"STRING\" size=\"256\"/><Column id=\"SZ_FILE\" type=\"BIGDECIMAL\" size=\"256\"/><Column id=\"DS_ETC\" type=\"STRING\" size=\"256\"/><Column id=\"CD_CORP\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsSaveListB", this);
            obj._setContents("<ColumnInfo><Column id=\"NO_SEQ\" type=\"INT\" size=\"256\"/><Column id=\"DS_PATH\" type=\"STRING\" size=\"256\"/><Column id=\"DS_FILEIMG\" type=\"STRING\" size=\"256\"/><Column id=\"NM_FILE\" type=\"STRING\" size=\"256\"/><Column id=\"SZ_FILE\" type=\"BIGDECIMAL\" size=\"256\"/><Column id=\"DS_ETC\" type=\"STRING\" size=\"256\"/><Column id=\"CD_CORP\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsDupeList", this);
            obj._setContents("<ColumnInfo><Column id=\"NO_SEQ\" type=\"INT\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsDeleteList", this);
            obj._setContents("<ColumnInfo><Column id=\"filepath\" type=\"STRING\" size=\"256\"/><Column id=\"filename\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsYN_AUTO", this);
            obj._setContents("<ColumnInfo><Column id=\"CD_CODE\" type=\"STRING\" size=\"256\"/><Column id=\"DS_CODE\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"CD_CODE\">Y</Col><Col id=\"DS_CODE\">자동</Col></Row><Row><Col id=\"CD_CODE\">N</Col><Col id=\"DS_CODE\">직접</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsTY_PROOF", this);
            obj._setContents("<ColumnInfo><Column id=\"CD_CODE\" type=\"STRING\" size=\"256\"/><Column id=\"DS_CODE\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"CD_CODE\">Y</Col><Col id=\"DS_CODE\">자동</Col></Row><Row><Col id=\"CD_CODE\">N</Col><Col id=\"DS_CODE\">직접</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsTY_PROOF_DTL", this);
            obj._setContents("<ColumnInfo><Column id=\"CD_CODE\" type=\"STRING\" size=\"256\"/><Column id=\"DS_CODE\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"CD_CODE\">Y</Col><Col id=\"DS_CODE\">자동</Col></Row><Row><Col id=\"CD_CODE\">N</Col><Col id=\"DS_CODE\">직접</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new FileDialog("fdgA", this);
            this.addChild(obj.name, obj);


            obj = new FileDialog("fdgB", this);
            this.addChild(obj.name, obj);


            obj = new FileUpTransfer("FileUpTransferA", this);
            this.addChild(obj.name, obj);


            obj = new FileUpTransfer("FileUpTransferB", this);
            this.addChild(obj.name, obj);


            obj = new FileDownTransfer("FileDownTransfer00", this);
            this.addChild(obj.name, obj);


            obj = new FileDownTransfer("FileDownTransfer01", this);
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Grid("grdFileA","20","50",null,"275","20",null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_binddataset("dsListA");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"20\"/><Column size=\"32\"/><Column size=\"60\"/><Column size=\"70\"/><Column size=\"170\"/><Column size=\"29\"/><Column size=\"300\"/></Columns><Rows><Row size=\"32\" band=\"head\"/><Row size=\"30\"/></Rows><Band id=\"head\"><Cell/><Cell col=\"1\" displaytype=\"checkboxcontrol\" edittype=\"checkbox\" checkboxfalsevalue=\"0\" checkboxtruevalue=\"1\"/><Cell col=\"2\" text=\"첨부유형\"/><Cell col=\"3\" text=\"증빙구분\" cssclass=\"essential\"/><Cell col=\"4\" text=\"증빙유형\" cssclass=\"essential\"/><Cell col=\"5\" colspan=\"2\" cssclass=\"essential\" text=\"문서명\"/></Band><Band id=\"body\"><Cell text=\"bind:nx_flag\" cssclass=\"expr:nx_flag=='U'?'update':''\"/><Cell col=\"1\" text=\"bind:CHK\" checkboxfalsevalue=\"0\" checkboxtruevalue=\"1\" displaytype=\"expr:YN_AUTO == 'N' ? 'checkboxcontrol' : 'normal'\" edittype=\"expr:YN_AUTO == 'N' ? 'checkbox' : 'none'\" expr=\"YN_AUTO == 'N' ? CHK : ''\"/><Cell col=\"2\" text=\"bind:YN_AUTO\" textAlign=\"center\" combodataset=\"dsYN_AUTO\" combocodecol=\"CD_CODE\" combodatacol=\"DS_CODE\" displaytype=\"combotext\" cssclass=\"expr:nx_flag=='U'?'update':YN_UPLOAD=='Y'?'Green':''\"/><Cell col=\"3\" displaytype=\"combotext\" edittype=\"expr:YN_AUTO == 'N' ? 'combo' : 'none'\" combodataset=\"dsTY_PROOF\" combodatacol=\"DS_CODE\" combocodecol=\"CD_CODE\" text=\"bind:TY_PROOF\" cssclass=\"expr:nx_flag=='U'?'update':YN_UPLOAD=='Y'?'Green':''\"/><Cell col=\"4\" text=\"bind:TY_PROOF_DTL\" edittype=\"expr:YN_AUTO == 'N' ? 'combo' : 'none'\" combodataset=\"dsTY_PROOF_DTL\" combocodecol=\"CD_CODE\" combodatacol=\"DS_CODE\" displaytype=\"combotext\" cssclass=\"expr:nx_flag=='U'?'update':YN_UPLOAD=='Y'?'Green':''\"/><Cell col=\"5\" displaytype=\"imagecontrol\" text=\"expr:comp.parent.getFileIcon(dataset.getColumn(rowidx,'DS_FILEIMG'))\"/><Cell col=\"6\" text=\"bind:NM_FILE\" cssclass=\"expr:nx_flag=='U'?'update':YN_UPLOAD=='Y'?'Green':''\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Button("btnUploadA",null,"20","64","26","209",null,null,null,null,null,this);
            obj.set_taborder("3");
            obj.getSetter("multiselect").set("true");
            obj.set_text("업로드");
            obj.set_visible("false");
            obj.set_cssclass("btn_WF_action");
            this.addChild(obj.name, obj);

            obj = new Button("btnDeleteA",null,"20","52","26","154",null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_text("삭제");
            obj.set_visible("false");
            obj.set_cssclass("btn_WF_action");
            this.addChild(obj.name, obj);

            obj = new Button("btnEtcSaveA",null,"20","52","26","99",null,null,null,null,null,this);
            obj.set_taborder("5");
            obj.set_text("저장");
            obj.set_visible("false");
            obj.set_cssclass("btn_WF_action");
            this.addChild(obj.name, obj);

            obj = new Button("btnDownloadA",null,"20","76","26","20",null,null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_text("다운로드");
            obj.set_cssclass("btn_WF_action");
            this.addChild(obj.name, obj);

            obj = new ProgressBar("progressBarA","100","195",null,"20","100",null,null,null,null,null,this);
            obj.set_taborder("4");
            obj.set_visible("false");
            obj.set_min("0");
            obj.set_max("100");
            this.addChild(obj.name, obj);

            obj = new Button("btnPreviewA",null,"20","76","26","276",null,null,null,null,null,this);
            obj.set_taborder("6");
            obj.set_text("미리보기");
            obj.set_visible("false");
            obj.set_cssclass("btn_WF_action");
            this.addChild(obj.name, obj);

            obj = new Static("staTitle","20","14",null,"35","400",null,null,null,null,null,this);
            obj.set_taborder("7");
            obj.set_text("법적증빙");
            obj.set_cssclass("sta_TITLE_Bg");
            this.addChild(obj.name, obj);

            obj = new Button("btnPreviewB",null,"340","76","26","276",null,null,null,null,null,this);
            obj.set_taborder("8");
            obj.set_text("미리보기");
            obj.set_visible("false");
            obj.set_cssclass("btn_WF_action");
            this.addChild(obj.name, obj);

            obj = new Button("btnUploadB",null,"340","64","26","209",null,null,null,null,null,this);
            obj.set_taborder("9");
            obj.getSetter("multiselect").set("true");
            obj.set_text("업로드");
            obj.set_visible("false");
            obj.set_cssclass("btn_WF_action");
            this.addChild(obj.name, obj);

            obj = new Button("btnDeleteB",null,"340","52","26","154",null,null,null,null,null,this);
            obj.set_taborder("10");
            obj.set_text("삭제");
            obj.set_visible("false");
            obj.set_cssclass("btn_WF_action");
            this.addChild(obj.name, obj);

            obj = new Button("btnEtcSaveB",null,"340","52","26","99",null,null,null,null,null,this);
            obj.set_taborder("11");
            obj.set_text("저장");
            obj.set_visible("false");
            obj.set_cssclass("btn_WF_action");
            this.addChild(obj.name, obj);

            obj = new Button("btnDownloadB",null,"340","76","26","20",null,null,null,null,null,this);
            obj.set_taborder("12");
            obj.set_text("다운로드");
            obj.set_cssclass("btn_WF_action");
            this.addChild(obj.name, obj);

            obj = new Static("staTitle00","20","334",null,"35","400",null,null,null,null,null,this);
            obj.set_taborder("13");
            obj.set_text("보조증빙");
            obj.set_cssclass("sta_TITLE_Bg");
            this.addChild(obj.name, obj);

            obj = new Grid("grdFileB","20","370",null,"265","20",null,null,null,null,null,this);
            obj.set_taborder("14");
            obj.set_binddataset("dsListB");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"20\"/><Column size=\"32\"/><Column size=\"60\"/><Column size=\"70\"/><Column size=\"170\"/><Column size=\"29\"/><Column size=\"300\"/></Columns><Rows><Row size=\"32\" band=\"head\"/><Row size=\"30\"/></Rows><Band id=\"head\"><Cell/><Cell col=\"1\" displaytype=\"checkboxcontrol\" edittype=\"checkbox\" checkboxfalsevalue=\"0\" checkboxtruevalue=\"1\"/><Cell col=\"2\" text=\"첨부유형\"/><Cell col=\"3\" text=\"증빙구분\" cssclass=\"essential\"/><Cell col=\"4\" text=\"증빙유형\" cssclass=\"essential\"/><Cell col=\"5\" colspan=\"2\" cssclass=\"essential\" text=\"문서명\"/></Band><Band id=\"body\"><Cell text=\"bind:nx_flag\" cssclass=\"expr:nx_flag=='U'?'update':''\"/><Cell col=\"1\" text=\"bind:CHK\" checkboxfalsevalue=\"0\" checkboxtruevalue=\"1\" displaytype=\"expr:YN_AUTO == 'N' ? 'checkboxcontrol' : 'normal'\" edittype=\"expr:YN_AUTO == 'N' ? 'checkbox' : 'none'\" expr=\"YN_AUTO == 'N' ? CHK : ''\"/><Cell col=\"2\" text=\"bind:YN_AUTO\" textAlign=\"center\" combodataset=\"dsYN_AUTO\" combocodecol=\"CD_CODE\" combodatacol=\"DS_CODE\" displaytype=\"combotext\" cssclass=\"expr:nx_flag=='U'?'update':YN_UPLOAD=='Y'?'Green':''\"/><Cell col=\"3\" displaytype=\"combotext\" edittype=\"expr:YN_AUTO == 'N' ? 'combo' : 'none'\" combodataset=\"dsTY_PROOF\" combocodecol=\"CD_CODE\" combodatacol=\"DS_CODE\" text=\"bind:TY_PROOF\" cssclass=\"expr:nx_flag=='U'?'update':YN_UPLOAD=='Y'?'Green':''\"/><Cell col=\"4\" text=\"bind:TY_PROOF_DTL\" edittype=\"expr:YN_AUTO == 'N' ? 'combo' : 'none'\" combodataset=\"dsTY_PROOF_DTL\" combocodecol=\"CD_CODE\" combodatacol=\"DS_CODE\" displaytype=\"combotext\" cssclass=\"expr:nx_flag=='U'?'update':YN_UPLOAD=='Y'?'Green':''\"/><Cell col=\"5\" displaytype=\"imagecontrol\" text=\"expr:comp.parent.getFileIcon(dataset.getColumn(rowidx,'DS_FILEIMG'))\"/><Cell col=\"6\" text=\"bind:NM_FILE\" cssclass=\"expr:nx_flag=='U'?'update':YN_UPLOAD=='Y'?'Green':''\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new ProgressBar("progressBarB","100","514",null,"20","100",null,null,null,null,null,this);
            obj.set_taborder("15");
            obj.set_visible("false");
            obj.set_min("0");
            obj.set_max("100");
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
        this.registerScript("cmmFileDHManager.xfdl", function() {
        this.objApp = this.gfnGetApplication();

        //비고 사용 여부
        this.UseEtc = false;

        //변경여부
        this.IsChange = false;

        //아이콘별 확장자 목록.
        this.iconInfo = {
        		file_icon_ZIP: ["zip","rar","7z"],
        		file_icon_IMG: ["jpg", "jpeg", "gif", "png", "bmp"],
        		file_icon_TXT: ["txt", "xml"],
        		file_icon_DOC: ["doc", "docx"],
        		file_icon_XLS: ["xls", "xlsx"],
        		file_icon_PPT: ["ppt", "pptx"],
        		file_icon_PDF: ["pdf"],
        		file_icon_ETC: ["etc"] //위 확장자 목록에 일치하지 않을 경우. default icon
        };

        //확장자별 아이콘 정보
        this.extToIcon   = {};
        this.fileConfig  = {};
        this.FileManager = {};
        this.fnGetServerHost = function() {
        	var url = this.gfnGetServerUrl();
        	// 개발의뢰는 로컬에서 다운가능하도록 개발서버를 바라보게 변경. (단, 업로드는 안됨)
        	if(this.FileManager.CD_GUBUN == "DZ30" && url.indexOf("localhost") > -1) {
        		url = "http://herp.hdc-dvp.com";
        	}
        	return url;
        };

        //파일확장자
        this.fileExt = ".pdf, .tif, .tiff, .png, .jpg";

        this.cmmFileManager_onload = function(obj,e)
        {
        	this.fnSetCombo();
        	//this.gfnFormOnLoad(this);
        	this.setFileManager(this.getOwnerFrame().FileManager);
        	this.grdFileA.addEventHandler("onheadclick", this.gfnGrid_onheadclick, this);
        	this.grdFileB.addEventHandler("onheadclick", this.gfnGrid_onheadclick, this);
        	// 전체체크박스 체크/해제 이벤트
        	this.grdFileA.AfterAllCheck = "fnGrid_AfterAllCheck";
        	this.grdFileB.AfterAllCheck = "fnGrid_AfterAllCheck";

        	//fileDialog 파일 확장자 지정
        	this.fdgA.set_accept(this.fileExt);
        	this.fdgB.set_accept(this.fileExt);
        };

        this.setFileManager = function(fm) {

        	if(new String(fm).valueOf() != "undefined") {
        		this.FileManager = fm;

        		this.fileConfig  = {
        			host 		 	 : this.fnGetServerHost(),
        			uploadUrl    	 : "/file/saveFile.do",
        			downloadUrl  	 : "/file/downloadFile.do",
        			downloadUrlMulti : "/file/downloadFileMulti.do",
        			deleteUrl 	 	 : "/file/deleteFile.do",
        			downImage 	 	 : "theme://img_file.png",
        			delImage 	 	 : "theme://btn_del.png",
        			allowTypes 	 	 : ["jpg","jpeg","gif","png","bmp","txt","zip","7z","gzip","doc","docx","ppt","pptx","xls","xlsx","pdf"],
        			maxCount 	 	 : 10,
        			maxSize 	 	 : "200MB",
        			maxTotalSize 	 : "200MB"
        		};

        		this.initExtToIcon();

        		this.fnInfo();
        	}
        }

        /**
         * @description 확장자별 파일 아이콘 설정
        */
        this.initExtToIcon = function ()
        {
        	var extToIcon = this.extToIcon;
        	var iconInfo = this.iconInfo;

        	for (var name in iconInfo) {
        		var len = iconInfo[name].length;
        		for (var i=0; i<len; i++)
        		{
        			extToIcon[iconInfo[name][i]] = name;
        		}
        	}
        };

        /**
         * @description 파일 확장자에 해당하는 이미지경로 반환.
         * @param {string} fileName file name
         * @return {string} image full path
        */
        this.getFileIcon = function(fileName)
        {
        	if(this.gfnIsNull(fileName)) return;

        	fileName = fileName.toLowerCase();
        	var ext = (/[.]/.exec(fileName)) ? /[^.]+$/.exec(fileName) : undefined;
        	var icon = this.extToIcon[ext];

        	if(icon == undefined) ext = "etc";

        	return "theme://" + this.extToIcon[ext] + ".gif";
        };

        this.fnInfo = function() {

        	this.dsInfoParam.clearData();
        	this.dsInfoParam.addRow();

        	var cdDir  = this.FileManager.CD_DIR;
        	var cdCorp = "", noFile = "";
        	if(!this.gfnIsNull(cdDir)){
        		cdCorp = cdDir[0];
        		noFile = cdDir[1];
        	}

        	this.dsInfoParam.setColumn(0, "CD_GUBUN", this.FileManager.CD_GUBUN);
        	this.dsInfoParam.setColumn(0, "CD_CORP" , cdCorp);
        	this.dsInfoParam.setColumn(0, "NO_FILE" , noFile);

        	var strSvcId    = "info";
        	var strSvcType  = "select";
        	var inProc		= "_dsProc";
        	var inData      = "info=dsInfoParam";
        	var outData     = "dsInfo=info0";
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


        this.fnCallback = function(svcID, errorCode, errorMsg)
        {
        	if (errorCode == 0) {
        		if (svcID == "info") {
        			if(this.dsInfo.rowcount == 0) {
        				this.gfnAlert("[" + this.FileManager.CD_GUBUN + "] 설정값이 없습니다.");
        				return;
        			}

        			if(this.dsInfo.getColumn(0, "IS_READONLY") == "N") {
        				this.btnUploadA.set_visible(true);
        				this.btnDeleteA.set_visible(true);
        				this.btnEtcSaveA.set_visible(true);
        				this.btnUploadB.set_visible(true);
        				this.btnDeleteB.set_visible(true);
        				this.btnEtcSaveB.set_visible(true);
        			}else{
        				this.grdFileA.set_readonly(true);
        				this.grdFileA.set_enableredraw(false);
        				this.grdFileA.setFormatColProperty(this.grdFileA.getBindCellIndex("body", "CHK"), "size", 0);
        				this.grdFileA.set_enableredraw(true);

        				this.grdFileB.set_readonly(true);
        				this.grdFileB.set_enableredraw(false);
        				this.grdFileB.setFormatColProperty(this.grdFileB.getBindCellIndex("body", "CHK"), "size", 0);
        				this.grdFileB.set_enableredraw(true);
        			}

        			//this.btnDownload.set_visible(this.FileManager.IS_DOWNLOAD==undefined?true:this.FileManager.IS_DOWNLOAD);

        			this.FileManager.SERVER_PATH = this.dsInfo.getColumn(0, "DS_PATH").replace(/\//g, "\\") + "\\";
        			this.FileManager.FULL_PATH   = this.FileManager.SERVER_PATH.replace(/\\\\/g, "\\") + this.FileManager.CD_DIR.join('\\');
        			this.fileConfig.uploadUrl    = "/file/saveFile.do";
        			this.fileConfig.downloadUrl  = "/file/downloadFile.do";

        			var cd_ref;
        			var cd_ref1 = "";
        			var cd_ref2 = "";
        			var cd_ref3 = "";
        			var cd_ref4 = "";
        			var cd_ref5 = "";
        			if(!this.gfnIsNull(this.FileManager.CD_REF)) {
        				cd_ref = this.FileManager.CD_REF;
        			} else {
        				cd_ref = this.FileManager.CD_DIR;
        			}

        			if(cd_ref.length > 0) {
        				cd_ref1 = cd_ref[0];
        			}
        			if(cd_ref.length > 1) {
        				cd_ref2 = cd_ref[1];
        			}
        			if(cd_ref.length > 2) {
        				cd_ref3 = cd_ref[2];
        			}
        			if(cd_ref.length > 3) {
        				cd_ref4 = cd_ref[3];
        			}
        			if(cd_ref.length > 4) {
        				cd_ref5 = cd_ref[4];
        			}
        			this.FileManager.CD_REF1 = cd_ref1;
        			this.FileManager.CD_REF2 = cd_ref2;
        			this.FileManager.CD_REF3 = cd_ref3;
        			this.FileManager.CD_REF4 = cd_ref4;
        			this.FileManager.CD_REF5 = cd_ref5;

        			this.fnSelect();
        		}
        	}else{
        		this.gfnAlert(errorMsg);
        	}
        }

        this.fnSelect = function() {

        	this.dsParamA.clearData();
        	this.dsParamA.addRow();

        	this.dsParamA.setColumn(0, "CD_GUBUN", this.FileManager.CD_GUBUN);
        	this.dsParamA.setColumn(0, "CD_REF1" , this.FileManager.CD_REF1);
        	this.dsParamA.setColumn(0, "CD_REF2" , this.FileManager.CD_REF2);
        	this.dsParamA.setColumn(0, "CD_REF3" , this.FileManager.CD_REF3);
        	this.dsParamA.setColumn(0, "CD_REF4" , this.FileManager.CD_REF4);
        	this.dsParamA.setColumn(0, "CD_REF5" , this.FileManager.CD_REF5);
        	this.dsParamA.setColumn(0, "YN_DESC" , "");
        	this.dsParamA.setColumn(0, "TY_PROOF", "A");

        	this.dsParamB.clearData();
        	this.dsParamB.addRow();

        	this.dsParamB.setColumn(0, "CD_GUBUN", this.FileManager.CD_GUBUN);
        	this.dsParamB.setColumn(0, "CD_REF1" , this.FileManager.CD_REF1);
        	this.dsParamB.setColumn(0, "CD_REF2" , this.FileManager.CD_REF2);
        	this.dsParamB.setColumn(0, "CD_REF3" , this.FileManager.CD_REF3);
        	this.dsParamB.setColumn(0, "CD_REF4" , this.FileManager.CD_REF4);
        	this.dsParamB.setColumn(0, "CD_REF5" , this.FileManager.CD_REF5);
        	this.dsParamB.setColumn(0, "YN_DESC" , "");
        	this.dsParamB.setColumn(0, "TY_PROOF", "B");

        	var strSvcId    = "select";
        	var strSvcType  = "grid";
        	var inProc		= "_dsProc";
        	var inData      = "selectA=dsParamA selectB=dsParamB";
        	var outData     = "dsListA=selectA0 dsListB=selectB0";
        	var strArg      = "";
        	var callBackFnc = "fnListCallback";

        	this.gfnTransaction( strSvcId , 	// transaction을 구분하기 위한 svc id값
        						strSvcType , 	// transaction을 요청할 구분
        						inProc,			// Procedure 정보 Dataset 이름
        						inData , 		// 입력값으로 보낼 dataset id , a=b형태로 실제이름과 입력이름을 매칭
        						outData , 		// 처리결과값으로 받을 dataset id, a=b형태로 실제이름과 입력이름을 매칭
        						strArg, 		// 입력값으로 보낼 arguments, strFormData="20120607"
        						callBackFnc); 	// 통신방법 정의 [생략가능]
        }

        this.fnListCallback = function(svcID, errorCode, errorMsg)
        {
        	if (svcID == "select") {
        		this.grdFileA.setCellProperty("head", 1, "text", "0");
        		this.grdFileB.setCellProperty("head", 1, "text", "0");
        	}
        	else if(svcID == "save") {
        		if (errorCode == 0) {
        			this.IsChange = true;
        			this.fnSelect();
        		} else {
        			this.gfnAlert(errorMsg);
        		}
        	}
        }

        this.fnSave = function(objDsSaveList) {
        	var tyProof = "A";	//법적증빙
        	if(objDsSaveList.name == "dsSaveListB"){
        		tyProof = "B";	//보조증빙
        	}

        	this.dsSave.clearData();
        	for( var i=0; i<objDsSaveList.rowcount;i++)
        	{
        		var nrow = this.dsSave.addRow();
        		this.dsSave.setColumn(nrow, "TY_SAVE" 	  	, "I");
        		this.dsSave.setColumn(nrow, "NO_SEQ"  	  	, objDsSaveList.getColumn(i, "NO_SEQ"));		//순번
        		this.dsSave.setColumn(nrow, "CD_GUBUN"	  	, this.FileManager.CD_GUBUN);					//구분
        		this.dsSave.setColumn(nrow, "DS_PATH" 	  	, this.FileManager.FULL_PATH);					//풀경로
        		this.dsSave.setColumn(nrow, "NM_FILE" 	  	, objDsSaveList.getColumn(i, "NM_FILE"));		//파일명
        		this.dsSave.setColumn(nrow, "SZ_FILE" 	  	, objDsSaveList.getColumn(i, "SZ_FILE"));		//파일사이즈
        		this.dsSave.setColumn(nrow, "DS_ETC"  	  	, objDsSaveList.getColumn(i, "DS_ETC"));		//비고
        		this.dsSave.setColumn(nrow, "CD_REF1" 	  	, this.FileManager.CD_REF1);					//파일경로1
        		this.dsSave.setColumn(nrow, "CD_REF2" 	  	, this.FileManager.CD_REF2);					//파일경로2
        		this.dsSave.setColumn(nrow, "CD_REF3" 	  	, this.FileManager.CD_REF3);					//파일경로3
        		this.dsSave.setColumn(nrow, "CD_REF4" 	  	, this.FileManager.CD_REF4);					//파일경로4
        		this.dsSave.setColumn(nrow, "CD_REF5" 	  	, this.FileManager.CD_REF5);					//파일경로5
        		this.dsSave.setColumn(nrow, "TY_PROOF"	  	, tyProof);										//증빙구분(법적증빙)
        		this.dsSave.setColumn(nrow, "TY_PROOF_DTL"	, "04");										//증빙유형(일반증빙)
        		this.dsSave.setColumn(nrow, "ID_TRANS"	  	, this.objApp.gvUserInfo.ID_USER);				//등록자ID
        		this.dsSave.setColumn(nrow, "AUTH_CD_CORP"	, this.FileManager.CD_REF1);					//법인코드
        	}
        	for( var i=0; i<this.dsDupeList.rowcount;i++)
        	{
        		var nrow = this.dsSave.addRow();
        		this.dsSave.setColumn(nrow, "TY_SAVE", "D");
        		this.dsSave.setColumn(nrow, "NO_SEQ", this.dsDupeList.getColumn(i, "NO_SEQ"));
        	}

        	if (this.dsSave.rowcount == 0) return;

        	var strSvcId    = "save";
        	var strSvcType  = "exec/DZZPR_FILEMANAGER_SAVE";
        	var inProc		= "";
        	var inData      = "dsSave=dsSave";
        	var outData     = "";
        	var strArg      = "";
        	var callBackFnc = "fnListCallback";

        	this.gfnTransaction( strSvcId , 	// transaction을 구분하기 위한 svc id값
        						strSvcType , 	// transaction을 요청할 구분
        						inProc,			// Procedure 정보 Dataset 이름
        						inData , 		// 입력값으로 보낼 dataset id , a=b형태로 실제이름과 입력이름을 매칭
        						outData , 		// 처리결과값으로 받을 dataset id, a=b형태로 실제이름과 입력이름을 매칭
        						strArg, 		// 입력값으로 보낼 arguments, strFormData="20120607"
        						callBackFnc); 	// 통신방법 정의 [생략가능]
        };

        this.fnDelete = function(delType) {

        	var objDsList;
        	if(delType == "A"){
        		objDsList = this.dsListA;
        	}else{
        		objDsList = this.dsListB;
        	}

        	this.dsSave.clearData();
        	for( var i=0; i<objDsList.rowcount;i++)
        	{
        		if(objDsList.getColumn(i, "CHK") == 1) {
        			var nrow = this.dsSave.addRow();
        			this.dsSave.setColumn(nrow, "TY_SAVE"	  , "D");
        			this.dsSave.setColumn(nrow, "NO_SEQ" 	  , objDsList.getColumn(i, "NO_SEQ"));
        			this.dsSave.setColumn(nrow, "CD_REF1"	  , this.FileManager.CD_REF1);
        			this.dsSave.setColumn(nrow, "CD_REF2"	  , this.FileManager.CD_REF2);
        			this.dsSave.setColumn(nrow, "CD_REF3"	  , this.FileManager.CD_REF3);
        			this.dsSave.setColumn(nrow, "CD_REF4"	  , this.FileManager.CD_REF4);
        			this.dsSave.setColumn(nrow, "CD_REF5"	  , this.FileManager.CD_REF5);
        			this.dsSave.setColumn(nrow, "AUTH_CD_CORP", this.FileManager.CD_REF1);
        		}
        	}

        	if (this.dsSave.rowcount == 0 && objDsList.rowcount > 0) {
        		var nrow = this.dsSave.addRow();
        			this.dsSave.setColumn(nrow, "TY_SAVE"	  , "D");
        			this.dsSave.setColumn(nrow, "NO_SEQ" 	  , objDsList.getColumn(objDsList.rowposition, "NO_SEQ"));
        			this.dsSave.setColumn(nrow, "CD_REF1"	  , this.FileManager.CD_REF1);
        			this.dsSave.setColumn(nrow, "CD_REF2"	  , this.FileManager.CD_REF2);
        			this.dsSave.setColumn(nrow, "CD_REF3"	  , this.FileManager.CD_REF3);
        			this.dsSave.setColumn(nrow, "CD_REF4"	  , this.FileManager.CD_REF4);
        			this.dsSave.setColumn(nrow, "CD_REF5"	  , this.FileManager.CD_REF5);
        			this.dsSave.setColumn(nrow, "AUTH_CD_CORP", this.FileManager.CD_REF1);
        	}

        	if (this.dsSave.rowcount == 0) return;

        	var strSvcId    = "save";
        	var strSvcType  = "save";
        	var inProc		= "_dsProc";
        	var inData      = "save=dsSave";
        	var outData     = "";
        	var strArg      = "";
        	var callBackFnc = "fnListCallback";

        	this.gfnTransaction( strSvcId , 	// transaction을 구분하기 위한 svc id값
        						strSvcType , 	// transaction을 요청할 구분
        						inProc,			// Procedure 정보 Dataset 이름
        						inData , 		// 입력값으로 보낼 dataset id , a=b형태로 실제이름과 입력이름을 매칭
        						outData , 		// 처리결과값으로 받을 dataset id, a=b형태로 실제이름과 입력이름을 매칭
        						strArg, 		// 입력값으로 보낼 arguments, strFormData="20120607"
        						callBackFnc); 	// 통신방법 정의 [생략가능]
        };

        // this.btnUpload_onerror = function(obj:nexacro.FileUpload,e:nexacro.FileUploadErrorEventInfo)
        // {
        // 	trace("file upload error" + e.errormsg);
        // };

        this.btnDelete_onclick = function(obj,e)
        {
        	var objDsList;
        	if(obj.name == "btnDeleteA"){
        		objDsList = this.dsListA;
        	}else{
        		objDsList = this.dsListB;
        	}

        	var chkCnt = objDsList.getCaseCount("CHK == 1");
        	if(chkCnt == 0){
        		this.gfnAlert("선택된 데이터가 없습니다.");
        		return;
        	}

        	if(objDsList.rowcount > 0) {
        		this.gfnConfirm(chkCnt + "건을 삭제하시겠습니까?", function (strId, val){
        			if(val) {
        				this.dsDeleteList.clearData();

        				for( var i=0; i<objDsList.rowcount;i++)
        				{
        					if(objDsList.getColumn(i, "CHK") == 1) {
        						var nrow = this.dsDeleteList.addRow();
        						this.dsDeleteList.setColumn(nrow, "filepath", objDsList.getColumn(i, "DS_PATH"));
        						this.dsDeleteList.setColumn(nrow, "filename", objDsList.getColumn(i, "NM_FILE"));
        					}
        				}

        				if (this.dsDeleteList.rowcount == 0 && objDsList.rowcount > 0) {
        					var nrow = this.dsDeleteList.addRow();
        					this.dsDeleteList.setColumn(nrow, "filepath", objDsList.getColumn(objDsList.rowposition, "DS_PATH"));
        					this.dsDeleteList.setColumn(nrow, "filename", objDsList.getColumn(objDsList.rowposition, "NM_FILE"));
        				}

        				var strSvcId    = (obj.name == "btnDeleteA" ? "deletefileA" : "deletefileB");
        				var strSvcType  = "file/deleteFile";
        				var inProc		= "";
        				var inData      = "input=dsDeleteList";
        				var outData     = "";
        				var strArg      = "";
        				var callBackFnc = "fnDeleteCallback";

        				this.gfnTransaction( strSvcId , 	// transaction을 구분하기 위한 svc id값
        									strSvcType , 	// transaction을 요청할 구분
        									inProc,			// Procedure 정보 Dataset 이름
        									inData , 		// 입력값으로 보낼 dataset id , a=b형태로 실제이름과 입력이름을 매칭
        									outData , 		// 처리결과값으로 받을 dataset id, a=b형태로 실제이름과 입력이름을 매칭
        									strArg, 		// 입력값으로 보낼 arguments, strFormData="20120607"
        									callBackFnc); 	// 통신방법 정의 [생략가능]

        			}
        		});
        	}
        };

        /*
        this.btnDeleteConfirm = function(strId, val)  {
        	if(val == false) return;

        	this.dsDeleteList.clearData();

        	for( var i=0; i<this.dsList.rowcount;i++)
        	{
        		if(this.dsList.getColumn(i, "CHK") == 1) {
        			var nrow = this.dsDeleteList.addRow();
        			this.dsDeleteList.setColumn(nrow, "filepath", this.dsList.getColumn(i, "DS_PATH"));
        			this.dsDeleteList.setColumn(nrow, "filename", this.dsList.getColumn(i, "NM_FILE"));
        		}
        	}

        	if (this.dsDeleteList.rowcount == 0 && this.dsList.rowcount > 0) {
        		var nrow = this.dsDeleteList.addRow();
        		this.dsDeleteList.setColumn(nrow, "filepath", this.dsList.getColumn(this.dsList.rowposition, "DS_PATH"));
        		this.dsDeleteList.setColumn(nrow, "filename", this.dsList.getColumn(this.dsList.rowposition, "NM_FILE"));
        	}

        	var strSvcId    = "deletefile";
        	var strSvcType  = "file/deleteFile";
        	var inProc		= "";
        	var inData      = "input=dsDeleteList";
        	var outData     = "";
        	var strArg      = "";
        	var callBackFnc = "fnDeleteCallback";

        	this.gfnTransaction( strSvcId , 	// transaction을 구분하기 위한 svc id값
        						strSvcType , 	// transaction을 요청할 구분
        						inProc,			// Procedure 정보 Dataset 이름
        						inData , 		// 입력값으로 보낼 dataset id , a=b형태로 실제이름과 입력이름을 매칭
        						outData , 		// 처리결과값으로 받을 dataset id, a=b형태로 실제이름과 입력이름을 매칭
        						strArg, 		// 입력값으로 보낼 arguments, strFormData="20120607"
        						callBackFnc); 	// 통신방법 정의 [생략가능]
        };*/

        this.fnDeleteCallback = function(svcID, errorCode, errorMsg) {
        	if(svcID == "deletefileA") {
        		if (errorCode == 0) {
        			this.fnDelete("A");
        		} else {
        			this.gfnAlert(errorMsg);
        		}
        	}else if(svcID == "deletefileB") {
        		if (errorCode == 0) {
        			this.fnDelete("B");
        		} else {
        			this.gfnAlert(errorMsg);
        		}
        	}
        	else if(svcID == "delete") {
        	}
        }

        this.btnDownload_onclick = function(obj,e)
        {
        	var objDs = this.dsListA;
        	if(obj.name == "btnDownloadB"){
        		objDs = this.dsListB;
        	}

        	if (objDs.getCaseCountNF("CHK == '1'") > 1)
        	{
        		this.fnZipDownload(objDs);
        	}else{
        		this.fnDownload(objDs);
        	}
        };

        this.fnDownload = function(objDsList) {
        	if(objDsList.rowcount == 0){
        		return;
        	}

        	var sFilename = objDsList.getColumn(objDsList.rowposition, "NM_FILE");
        	var sPath = objDsList.getColumn(objDsList.rowposition, "DS_PATH");
        	var encodeFileName = encodeURIComponent(sFilename);

        	var surl = this.fileConfig.host+ this.fileConfig.downloadUrl; // + encodeFileName;
        	this.FileDownTransfer00.set_url(surl);
        	this.FileDownTransfer00.setPostData("path", sPath);
        	this.FileDownTransfer00.setPostData("fileName", encodeFileName);
        	if( system.navigatorname =="nexacro"){
        		this.FileDownTransfer00.set_downloadfilename(sFilename);
        	}
        	this.FileDownTransfer00.download();
        };

        this.fnZipDownload = function(objDs) {
        	if (objDs.rowcount == 0) return false;

        	var filePathList = [];
        	var downloadFilename = null;
        	for (var i=0; i<objDs.rowcount; i++)
        	{
        		if (objDs.getColumn("CHK") == '1')
        		{
        			var sFilename = objDs.getColumn(i, "NM_FILE");
        			filePathList.push(this.FileManager.FULL_PATH + '\\' + sFilename);

        			if (this.gfnIsNull(downloadFilename)) downloadFilename = sFilename;
        		}
        	}

        	var surl = this.fileConfig.host+ this.fileConfig.downloadUrlMulti;
        	this.FileDownTransfer01.set_url(surl);
        	this.FileDownTransfer01.setPostData("filePathList", filePathList.join(","));
        	this.FileDownTransfer01.setPostData("fileName"	  , downloadFilename);

        	if( system.navigatorname =="nexacro"){
        		this.FileDownTransfer01.set_downloadfilename(downloadFilename);
        	}
        	this.FileDownTransfer01.download();
        };

        this.fnSaveValidate = function (objDS){
        	for(var i=0;i<objDS.rowcount;i++){

        		if(objDS.getColumn(i, this.ucFlag) == "U"){
        			if(this.gfnIsNull(objDS.getColumn(i, "TY_PROOF"))){
        				this.gfnAlert((i+1)+"행 증빙구분은 필수입니다.");
        				return false;
        			}
        			if(this.gfnIsNull(objDS.getColumn(i, "TY_PROOF_DTL"))){
        				this.gfnAlert((i+1)+"행 증빙유형은 필수입니다.");
        				return false;
        			}
        		}
        	}
        	return true;
        };

        this.btnEtcSave_onclick = function(obj,e)
        {
        	var objDsList;
        	if(obj.name == "btnEtcSaveA"){
        		objDsList = this.dsListA;
        	}else{
        		objDsList = this.dsListB;
        	}

        	if(!this.fnSaveValidate(objDsList)) return;

        	this.dsSave.clearData();
        	for( var i=0; i<objDsList.rowcount;i++){
        		var flag = objDsList.getColumn(i, this.ucFlag);
        		switch(flag) {
        			case "U":
        				var nrow = this.dsSave.addRow();
        				this.dsSave.setColumn(nrow, "TY_SAVE"	  , flag);										//IUD플래그
        				this.dsSave.setColumn(nrow, "NO_SEQ"	  , objDsList.getColumn(i, "NO_SEQ"));			//순번
        				this.dsSave.setColumn(nrow, "CD_GUBUN"	  , this.FileManager.CD_GUBUN);					//구분
        				this.dsSave.setColumn(nrow, "DS_PATH"	  , this.FileManager.FULL_PATH);				//풀경로
        				this.dsSave.setColumn(nrow, "NM_FILE"	  , objDsList.getColumn(i, "NM_FILE"));			//파일명
        				this.dsSave.setColumn(nrow, "SZ_FILE"	  , objDsList.getColumn(i, "SZ_FILE"));			//파일 사이즈
        				this.dsSave.setColumn(nrow, "DS_ETC"	  , objDsList.getColumn(i, "DS_ETC"));			//비고
        				this.dsSave.setColumn(nrow, "CD_REF1"	  , this.FileManager.CD_REF1);					//파일경로1
        				this.dsSave.setColumn(nrow, "CD_REF2"	  , this.FileManager.CD_REF2);					//파일경로2
        				this.dsSave.setColumn(nrow, "CD_REF3"	  , this.FileManager.CD_REF3);					//파일경로3
        				this.dsSave.setColumn(nrow, "CD_REF4"	  , this.FileManager.CD_REF4);					//파일경로4
        				this.dsSave.setColumn(nrow, "CD_REF5"	  , this.FileManager.CD_REF5);					//파일경로5
        				this.dsSave.setColumn(nrow, "TY_PROOF"	  , objDsList.getColumn(i, "TY_PROOF"));		//증빙구분
        				this.dsSave.setColumn(nrow, "TY_PROOF_DTL", objDsList.getColumn(i, "TY_PROOF_DTL"));	//증빙유형
        				this.dsSave.setColumn(nrow, "ID_TRANS"	  , this.objApp.gvUserInfo.ID_USER);			//수정자ID
        				this.dsSave.setColumn(nrow, "AUTH_CD_CORP", this.FileManager.CD_REF1);					//법인코드
        			break;
        		}
        	}

        	if (this.dsSave.rowcount == 0) return;

        	var strSvcId    = "save";
        	var strSvcType  = "save";
        	var inProc		= "_dsProc";
        	var inData      = "save=dsSave";
        	var outData     = "";
        	var strArg      = "";
        	var callBackFnc = "fnListCallback";

        	this.gfnTransaction( strSvcId , 	// transaction을 구분하기 위한 svc id값
        						strSvcType , 	// transaction을 요청할 구분
        						inProc,			// Procedure 정보 Dataset 이름
        						inData , 		// 입력값으로 보낼 dataset id , a=b형태로 실제이름과 입력이름을 매칭
        						outData , 		// 처리결과값으로 받을 dataset id, a=b형태로 실제이름과 입력이름을 매칭
        						strArg, 		// 입력값으로 보낼 arguments, strFormData="20120607"
        						callBackFnc); 	// 통신방법 정의 [생략가능]
        };

        this.grdFile_oncelldblclick = function(obj,e)
        {
        	if(this.gfnGridGetBindColumnNameByIndex(obj, e.cell) == "NM_FILE") {
        		var dataset = obj.getBindDataset();
        		var nRow = obj.getDatasetRow(e.row);


        		//세금계산서번호일 경우
        		if(dataset.getColumn(nRow, "YN_AUTO") == "Y" && dataset.getColumn(nRow, "TY_PROOF") == "A" && (dataset.getColumn(nRow, "TY_PROOF_DTL") == "01" || dataset.getColumn(nRow, "TY_PROOF_DTL") == "05")){
        			if(this.gfnIsNull(dataset.getColumn(nRow, "NM_FILE"))){
        				return;
        			}

        			var eBillUrl = this.gfnGetServerUrl();

        			eBillUrl += "/TX/tx.jsp?ISSUE_ID="+dataset.getColumn(nRow, "NM_FILE");
        			eBillUrl += "&TYPE="+(dataset.getColumn(nRow, "TY_PROOF_DTL") == "01" ? "b" : "a");

        			window.open(eBillUrl, "_blank", "width=1024, height=768, resizable=yes");

        		}else if(dataset.getColumn(nRow, "YN_AUTO") == "Y" && dataset.getColumn(nRow, "TY_PROOF") == "A" && dataset.getColumn(nRow, "TY_PROOF_DTL") == "02"){

        			// 법인카드 일 경우

        			var strFile = dataset.getColumn(nRow, "NM_FILE");
        			var strCardNo = strFile.toString().substr(strFile.indexOf("(") + 1, strFile.indexOf(")") -1).replace(/[^0-9]/g, '');
        			var strApproval = strFile.toString().substr(0, strFile.indexOf("(")).replace(/[^0-9]/g, '');

        			var param = {};
        			param.CD_CORP = this.FileManager.CD_REF1;
        			param.NO_CARD = strCardNo;
        			param.NO_APPROVAL = strApproval;

        			this.gfnFormOpen("DHZ", "DHZ_CARDSAAPP", "", param);

        		}else{

        			var CD_SYNAP = dataset.getColumn(nRow, "CD_SYNAP");

        			if (this.gfnIsNull(CD_SYNAP))
        			{
        				this.fnDownload(dataset);
        			}
        			else
        			{
        				var LINK_URL = this.gfnGetConfig("DZ", "AP_LINK_URL");
        				window.open(LINK_URL.replace("{AP_LINK_URL}", CD_SYNAP), "_blank", "width=1024, height=768, resizable=yes");
        			}
        		}
        	}
        };

        this.dsList_oncolumnchanged = function(obj,e)
        {
        	if(e.columnid == "TY_PROOF" || e.columnid == "TY_PROOF_DTL") {
        		obj.setColumn(e.row, this.ucFlag, "U");
        	}
        };

        this.set_enable = function(enable) {
        	this.grdFileA.set_enable(enable);
        	this.grdFileB.set_enable(enable);

        	this.btnDownloadA.set_enable(enable);
        	this.btnUploadA.set_enable(enable);
        	this.btnDeleteA.set_enable(enable);
        	this.btnEtcSaveA.set_enable(enable);

        	this.btnDownloadB.set_enable(enable);
        	this.btnUploadB.set_enable(enable);
        	this.btnDeleteB.set_enable(enable);
        	this.btnEtcSaveB.set_enable(enable);
        }

        this.cmmFileManager_onbeforeclose = function(obj,e)
        {
        	this.getOwnerFrame()._close_argument = { IsChange: this.IsChange, Cnt: (this.dsListA.rowcount+this.dsListB.rowcount)};
        };


        this.fdg_onclose = function(obj,e)
        {
        	//선택한 파일 확장자 체크
        	var chkExt = true;
        	for(var i=0;i<e.virtualfiles.length;i++){
        		var fileName = e.virtualfiles[i].filename;
        		var dirExptType = fileName.lastIndexOf(".")+1;
        		var chkFileType = fileName.substr(dirExptType).toLowerCase();

        		if((this.fileExt).indexOf(chkFileType) == -1){
        			chkExt = false;
        		}
        	}

        	if(!chkExt){
        		this.gfnAlert("["+this.fileExt+"] 확장자 파일만 업로드 가능합니다.");
        		return;
        	}

        	var fileDiv = "A";
        	if(obj.name == "fdgB"){
        		fileDiv = "B";
        	}
        	this.addFileList(e.virtualfiles, fileDiv);
        };

        this.addFileList = function(filelist, fileDiv)
        {
        	this.FileList = filelist;
        	if(filelist.length > 0) {
        		var fileUpTrans = this.FileUpTransferA;
        		var dsSaveList  = this.dsSaveListA;
        		if(fileDiv == "B"){
        			fileUpTrans = this.FileUpTransferB;
        			dsSaveList  = this.dsSaveListB;
        		}

        		fileUpTrans.clearFileList();
        		dsSaveList.clearData();

        		var vFile;
        		for (var i = 0; i < filelist.length; i++)
        		{
        			vFile = filelist[i];
        			vFile.addEventHandler("onsuccess", fileDiv == "A" ? this.FileList_onsuccessA : this.FileList_onsuccessB, this);
        			vFile.addEventHandler("onerror"  , fileDiv == "A" ? this.FileList_onerrorA : this.FileList_onerrorB , this);

        			vFile.open(null, 1);
        		}
        	}
        }

        this.FileList_onsuccessA = function(obj, e)
        {
        	switch (e.reason)
        	{
        		case 1:
        			obj.getFileSize();
        			break;
        		case 9:
        			this.FileUpTransferA.addFile(obj.filename, obj);

        			var sFileName   = obj.filename;
        			var dirExptType = sFileName.lastIndexOf(".")+1;
        			var sFileType   = sFileName.substr(dirExptType);
        			var sIconImage  = this.getFileIcon(sFileName);

        			// 중복체크
        			var nrow = this.dsSaveListA.addRow();
        			this.dsSaveListA.setColumn(nrow, "NO_SEQ"	 , 0);
        			this.dsSaveListA.setColumn(nrow, "DS_PATH"	 , sFileName);
        			this.dsSaveListA.setColumn(nrow, "DS_FILEIMG", sIconImage);
        			this.dsSaveListA.setColumn(nrow, "NM_FILE"	 , sFileName);
        			this.dsSaveListA.setColumn(nrow, "DS_EXT"	 , sFileType);
        			this.dsSaveListA.setColumn(nrow, "YN_UPLOAD" , "Y");

        			if(this.FileList.length == this.FileUpTransferA.filelist.length) {
        				var sUploadUrl = this.fileConfig.host + this.fileConfig.uploadUrl;
        				this.FileUpTransferA.setPostData("path", this.FileManager.FULL_PATH);

        				//this._waitCursor(true);
        				this.progressBarA.set_pos(0);
        				this.progressBarA.set_visible(true);
        				this.FileUpTransferA.upload(sUploadUrl);
        			}
        			break;
        	}
        }

        this.FileList_onsuccessB = function(obj, e)
        {
        	switch (e.reason)
        	{
        		case 1:
        			obj.getFileSize();
        			break;
        		case 9:
        			this.FileUpTransferB.addFile(obj.filename, obj);

        			var sFileName   = obj.filename;
        			var dirExptType = sFileName.lastIndexOf(".")+1;
        			var sFileType   = sFileName.substr(dirExptType);
        			var sIconImage  = this.getFileIcon(sFileName);

        			// 중복체크
        			var nrow = this.dsSaveListB.addRow();
        			this.dsSaveListB.setColumn(nrow, "NO_SEQ"	, 0);
        			this.dsSaveListB.setColumn(nrow, "DS_PATH"	, sFileName);
        			this.dsSaveListB.setColumn(nrow, "DS_FILEIMG", sIconImage);
        			this.dsSaveListB.setColumn(nrow, "NM_FILE"	, sFileName);
        			this.dsSaveListB.setColumn(nrow, "DS_EXT"	, sFileType);
        			this.dsSaveListB.setColumn(nrow, "YN_UPLOAD"	, "Y");

        			if(this.FileList.length == this.FileUpTransferB.filelist.length) {
        				var sUploadUrl = this.fileConfig.host + this.fileConfig.uploadUrl;
        				this.FileUpTransferB.setPostData("path", this.FileManager.FULL_PATH);

        				//this._waitCursor(true);
        				this.progressBarB.set_pos(0);
        				this.progressBarB.set_visible(true);
        				this.FileUpTransferB.upload(sUploadUrl);
        			}
        			break;
        	}
        }

        this.FileList_onerrorA = function(obj, e)
        {
        	trace("errortype: "+e.errortype);
        	trace("errormsg: "+e.errormsg);
        	trace("statuscode: "+e.statuscode);
        }

        this.FileList_onerrorB = function(obj, e)
        {
        	trace("errortype: "+e.errortype);
        	trace("errormsg: "+e.errormsg);
        	trace("statuscode: "+e.statuscode);
        }

        // https://developer.mozilla.org/en-US/docs/Web/API/File/Using_files_from_web_applications#Example_Showing_file(s)_size
        this.cutFileSize = function(filesize)
        {
        	var sOutput = filesize + " bytes";
        	for (var aMultiples = ["KB", "MB", "GB", "TB", "PB", "EB", "ZB", "YB"], nMultiple = 0, nApprox = filesize / 1024; nApprox > 1; nApprox /= 1024, nMultiple++)
        	{
        		sOutput = nApprox.toFixed(0) + " " + aMultiples[nMultiple];
        	}
        	return sOutput;
        };

        this.btnUpload_onclick = function(obj,e)
        {
        	var objFdg;
        	if(obj.name == "btnUploadA"){
        		objFdg = this.fdgA;
        	}else{
        		objFdg = this.fdgB;
        	}
        	objFdg.open('nexacro17', FileDialog.MULTILOAD);
        };

        this.FileUpTransfer_onprogress = function(obj,e)
        {
        	var compProGress;
        	if(obj.name == "FileUpTransferA"){
        		compProGress = this.progressBarA;
        	}else{
        		compProGress = this.progressBarB;
        	}

        	trace("FileUpTransfer_onprogress: " + e.loaded+"/"+e.total);
        	compProGress.set_max(e.total);
        	compProGress.set_pos(e.loaded);
        };

        this.FileUpTransfer_onsuccess = function(obj,e)
        {
        	var compProGress;
        	var objDsSaveList;
        	var objDsList;
        	if(obj.name == "FileUpTransferA"){
        		compProGress  = this.progressBarA;
        		objDsSaveList = this.dsSaveListA;
        		objDsList     = this.dsListA;
        	}else{
        		compProGress  = this.progressBarB;
        		objDsSaveList = this.dsSaveListB;
        		objDsList     = this.dsListA;
        	}

        	//this.dsDupeList.clearData();

        	//this._waitCursor(false);
        	compProGress.set_visible(false);
        	trace("FileUpTransfer_onsuccess: " + e.code + "/" + e.message);
        	if(e.code == 0) {
        		if(e.datasets.length > 0) {
        			objDsSaveList.clearData();
        			for(var i = 0; i < e.datasets[0].rowcount; i++) {
        				var sFileName = e.datasets[0].getColumn(i, "filename");
        				var iFileSize = e.datasets[0].getColumn(i, "filesize");
        				var dirExptType = sFileName.lastIndexOf(".")+1;
        				var sFileType = sFileName.substr(dirExptType);
        				var sIconImage = this.getFileIcon(sFileName);

        				var dupeRow = objDsList.findRow("NM_FILE", sFileName);

        				trace("sFileName : " + sFileName);
        				trace("dupeRow : " + dupeRow);
        				if(dupeRow > -1) {
        					var nrow = this.dsDupeList.addRow();
        					this.dsDupeList.setColumn(nrow, "NO_SEQ", objDsList.getColumn(dupeRow, "NO_SEQ"));
        				}

        				var nrow = objDsSaveList.addRow();
        				objDsSaveList.setColumn(nrow, "NO_SEQ", 0);
        				objDsSaveList.setColumn(nrow, "DS_PATH", sFileName);
        				objDsSaveList.setColumn(nrow, "DS_FILEIMG", sIconImage);
        				objDsSaveList.setColumn(nrow, "NM_FILE", sFileName);
        				objDsSaveList.setColumn(nrow, "SZ_FILE", iFileSize);
        				objDsSaveList.setColumn(nrow, "DS_EXT", sFileType);
        				objDsSaveList.setColumn(nrow, "YN_UPLOAD", "Y");
        			}
        			this.fnSave(objDsSaveList);
        		}
        	}
        };

        this.FileUpTransfer_onerror = function(obj,e)
        {
        	var compProGress;
        	if(obj.name == "FileUpTransferA"){
        		compProGress = this.progressBarA;
        	}else{
        		compProGress = this.progressBarB;
        	}

        	//this._waitCursor(false);
        	compProGress.set_visible(false);
        	if(e.errormsg.indexOf("maxsize") > -1) {
        		this.gfnAlert("첨부파일 허용용량("+ this.cutFileSize(nexacro.toNumber(e.errormsg.split(':')[1])) + ")을 초과할 수 없습니다.");
        	} else {
        		this.gfnAlert(e.errormsg);
        	}
        };

        this.grdFile_ondragenter = function(obj,e)
        {
        	if(this.dsInfo.getColumn(0, "IS_READONLY") == "N") {
        		if(e.datatype == "file")
        		{
        			obj.set_opacity(0.5);
        		}
        	}
        };

        this.grdFile_ondragleave = function(obj,e)
        {
        	if(this.dsInfo.getColumn(0, "IS_READONLY") == "N") {
        		obj.set_opacity(1);
        	}
        };

        this.grdFile_ondrop = function(obj,e)
        {
        	if(this.dsInfo.getColumn(0, "IS_READONLY") == "N") {
        		obj.set_opacity(1);
        		if(e.datatype == "file"){
        			var fileDiv = "A";
        			if(obj.name == "grdFileB"){
        				fileDiv = "B";
        			}

        			this.addFileList(e.filelist, fileDiv);
        		}
        	}
        };

        //콤보박스 셋팅
        this.fnSetCombo = function() {
        	//공통코드
        	var arrComms = [];
        	arrComms.push({col: "TY_PROOF"		, code: "DHDH020", yn_all: ""});	//증빙구분
        	arrComms.push({col: "TY_PROOF_DTL"	, code: "DHDH021", yn_all: ""});	//증빙유형
        	this.gfnLoadCommonCode(arrComms, false);
        };

        this.fnGrid_AfterAllCheck = function(obj, cell, check)
        {
        	var objDs = this.dsListA;
        	if(obj.name == "grdFileB"){
        		objDs = this.dsListB;
        	}

        	objDs.set_enableevent(false);
        	for(var i = 0; i < objDs.rowcount; i++){

        		if(objDs.getColumn(i, "YN_AUTO") == "Y") {
        			objDs.setColumn(i, "CHK", 0);
        		}

        		if(objDs.getColumn(i, "YN_AUTO") == "N") {
        			objDs.setColumn(i, "CHK", check);
        		}
        	}
        	objDs.set_enableevent(true);
        };


        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.cmmFileManager_onload,this);
            this.addEventHandler("onbeforeclose",this.cmmFileManager_onbeforeclose,this);
            this.grdFileA.addEventHandler("onheadclick",this.grdFile_onheadclick,this);
            this.grdFileA.addEventHandler("oncelldblclick",this.grdFile_oncelldblclick,this);
            this.grdFileA.addEventHandler("ondragleave",this.grdFile_ondragleave,this);
            this.grdFileA.addEventHandler("ondragenter",this.grdFile_ondragenter,this);
            this.grdFileA.addEventHandler("ondrop",this.grdFile_ondrop,this);
            this.btnUploadA.addEventHandler("onclick",this.btnUpload_onclick,this);
            this.btnDeleteA.addEventHandler("onclick",this.btnDelete_onclick,this);
            this.btnEtcSaveA.addEventHandler("onclick",this.btnEtcSave_onclick,this);
            this.btnDownloadA.addEventHandler("onclick",this.btnDownload_onclick,this);
            this.btnPreviewA.addEventHandler("onclick",this.btnPreview_onclick,this);
            this.btnPreviewB.addEventHandler("onclick",this.btnPreview_onclick,this);
            this.btnUploadB.addEventHandler("onclick",this.btnUpload_onclick,this);
            this.btnDeleteB.addEventHandler("onclick",this.btnDelete_onclick,this);
            this.btnEtcSaveB.addEventHandler("onclick",this.btnEtcSave_onclick,this);
            this.btnDownloadB.addEventHandler("onclick",this.btnDownload_onclick,this);
            this.grdFileB.addEventHandler("onheadclick",this.grdFile_onheadclick,this);
            this.grdFileB.addEventHandler("oncelldblclick",this.grdFile_oncelldblclick,this);
            this.grdFileB.addEventHandler("ondragleave",this.grdFile_ondragleave,this);
            this.grdFileB.addEventHandler("ondragenter",this.grdFile_ondragenter,this);
            this.grdFileB.addEventHandler("ondrop",this.grdFile_ondrop,this);
            this.dsListA.addEventHandler("oncolumnchanged",this.dsList_oncolumnchanged,this);
            this.dsListB.addEventHandler("oncolumnchanged",this.dsList_oncolumnchanged,this);
            this.fdgA.addEventHandler("onclose",this.fdg_onclose,this);
            this.fdgB.addEventHandler("onclose",this.fdg_onclose,this);
            this.FileUpTransferA.addEventHandler("onprogress",this.FileUpTransfer_onprogress,this);
            this.FileUpTransferA.addEventHandler("onsuccess",this.FileUpTransfer_onsuccess,this);
            this.FileUpTransferA.addEventHandler("onerror",this.FileUpTransfer_onerror,this);
            this.FileUpTransferB.addEventHandler("onprogress",this.FileUpTransfer_onprogress,this);
            this.FileUpTransferB.addEventHandler("onsuccess",this.FileUpTransfer_onsuccess,this);
            this.FileUpTransferB.addEventHandler("onerror",this.FileUpTransfer_onerror,this);
        };
        this.loadIncludeScript("cmmFileDHManager.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
