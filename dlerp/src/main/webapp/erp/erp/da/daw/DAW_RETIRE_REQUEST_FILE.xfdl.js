(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("DAW_RETIRE_REQUEST_FILE");
            this.set_titletext("사직서 첨부문서 관리");
            this.getSetter("maxheight").set("344");
            this.getSetter("maxwidth").set("575");
            if (Form == this.constructor)
            {
                this._setFormPosition(575,344);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("dsList", this);
            obj._setContents("");
            this.addChild(obj.name, obj);


            obj = new Dataset("_dsProc", this);
            obj._setContents("<ColumnInfo><Column id=\"TARGET\" type=\"STRING\" size=\"256\"/><Column id=\"SP\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"TARGET\">select</Col><Col id=\"SP\">DAWPR_RETIRE_REQUEST_FILE_SELECT</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsSearch", this);
            obj._setContents("<ColumnInfo><Column id=\"CD_CORP\" type=\"STRING\" size=\"256\"/><Column id=\"ID_SABUN\" type=\"STRING\" size=\"256\"/><Column id=\"ID_PERSON\" type=\"STRING\" size=\"256\"/><Column id=\"NO_SEQ\" type=\"STRING\" size=\"256\"/><Column id=\"TY_GUBUN\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row/></Rows>");
            this.addChild(obj.name, obj);


            obj = new FileDownTransfer("FileDownTransfer", this);
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Div("divData","0","0",null,null,"0","0",null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_cssclass("div_DATA_Bg");
            this.addChild(obj.name, obj);

            obj = new Static("staCD_BANK","0","5","120","30",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("1");
            obj.set_text("은행명(코드)");
            obj.set_cssclass("sta_WF_tablelabel");
            obj.set_visible("false");
            this.divData.addChild(obj.name, obj);

            obj = new Static("staCD_BANK_bg","staCD_BANK:-1","staCD_BANK:-30","200","30",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("2");
            obj.set_cssclass("sta_WF_tablebg");
            obj.set_visible("false");
            this.divData.addChild(obj.name, obj);

            obj = new Div("cfCD_BANK","staCD_BANK:5","staCD_BANK:-25","190","20",null,null,null,null,null,null,this.divData.form);
            obj.getSetter("CodeFindName").set("DAX_CFCOMMONCODE");
            obj.getSetter("CDTextWidth").set("60");
            obj.set_taborder("45");
            obj.set_url("cmm::cmmCodeFind.xfdl");
            obj.set_text("");
            obj.set_visible("false");
            this.divData.addChild(obj.name, obj);

            obj = new Static("staTile03_00_00","10","0","50%","25",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("6");
            obj.set_text("사직서 첨부문서 관리");
            obj.set_cssclass("sta_TITLE_Bg");
            this.divData.addChild(obj.name, obj);

            obj = new Button("btnFileDown",null,"0","100","24","0",null,null,null,null,null,this.divData.form);
            obj.set_taborder("5");
            obj.set_text("전체다운로드");
            obj.set_cssclass("btn_WF_action");
            obj.set_visible("false");
            this.divData.addChild(obj.name, obj);

            obj = new Grid("objGrid","0","staTile03_00_00:0",null,null,"0","0",null,null,null,null,this.divData.form);
            obj.set_taborder("0");
            obj.set_autofittype("col");
            obj._setContents("");
            this.divData.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this
            obj = new Layout("default","",this._adjust_width,this._adjust_height,this,function(p){});
            this.addLayout(obj.name, obj);
            
            // BindItem Information

            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {
            this._addPreloadList("fdl","cmm::cmmCodeFind.xfdl");
        };
        
        // User Script
        this.registerScript("DAW_RETIRE_REQUEST_FILE.xfdl", function() {
        this.objApp = this.gfnGetApplication();
        this.fileConfig = {};
        this.form_onload = function(obj,e)
        {
        	// -- 필수 -------------------//
        	this.gfnFormOnLoad(this);
        	this.gfnFormInfo(this);
        	// ---------------------------//
        	this.fnSetButton();			//버튼 공통 설정
        	this.fnSetExtendButton();	//화면별 버튼 id 설정
        	this.fnSetVariable();		//변수선언
        	this.fnSetEvent();			//이벤트 설정
        	this.fnSetParameter();		//파라미터 설정
        	this.fnInit();

        // 	//첨부파일

        	this.fileConfig = this.gfnGetFileConfig();
        // 	var context = "/";
        // 	if (nexacro.getEnvironmentVariable("evContextPath") != undefined) {
        // 		context = nexacro.getEnvironmentVariable("evContextPath");
        // 	}
        // 	this.fileConfig = this.gfnGetFileConfig();
        // 	this.fileConfig.allowTypes = ["jpg","jpeg","gif","png","xls","doc","hwp","pdf","xlsx","ppt", "pptx"]; // 넥사브라우저 전용, 웹은 적용불가
        // 	this.fileConfig.downloadUrl = context + "file/downloadFile.do";
        // 	this.filepath = this.fnGetfilepath("DAW2");
        // 	this.fileConfig.downloadUrl = this.fileConfig.downloadUrl.replace("path=", "path=" + this.filepath);
        };

        /************************************************************************
         * 버튼 설정
         * 서브버튼 사용 처리. 공통 및 확장버튼 버튼관리화면에서 셋팅.
         ************************************************************************/
        this.fnSetButton = function() {
        	this.gfnSetEnable(this.FormBtns.Select, false);
        	this.gfnSetEnable(this.FormBtns.Save, false);
        	this.gfnSetEnable(this.FormBtns.Add, false);
        	this.gfnSetEnable(this.FormBtns.Del, false);
        	this.gfnSetEnable(this.FormBtns.Excel, false);
        	this.gfnSetEnable(this.FormBtns.Print, false);
        	this.gfnSetEnable(this.FormBtns.Close, false);
        	this.FormBtns.Select.set_visible(false);
        	this.FormBtns.Save.set_visible(false);
        	this.FormBtns.Add.set_visible(false);
        	this.FormBtns.Del.set_visible(false);
        	this.FormBtns.Excel.set_visible(false);
        	this.FormBtns.Print.set_visible(false);
        	this.FormBtns.Close.set_visible(false);
        };

        /************************************************************************
         * 확장 버튼 : 화면별 버튼 설정 ID, function 연결 (화면버튼관리)
         ************************************************************************/
        this.fnSetExtendButton = function() {
        };

        /************************************************************************
         * 변수 선언
         ************************************************************************/
        this.fnSetVariable = function() {
        	/**********  그리드  **********/
        	this.dxGrid = this.divData.form.objGrid;
        	//this.dxGrid.set_autosizingtype("col");
        };

        /************************************************************************
         * 이벤트 설정
         ************************************************************************/
        this.fnSetEvent = function() {
        	// 그리드 초기화
        	this.gfnGridInit(this.dxGrid, this.dsList, "DA", "DAW_RETIRE_FILELIST");
        	this.dxGrid.ExpandUp = "fnGrid_ExpandUp";
        	this.dxGrid.deleteContentsCol("head",0);
        	// 타화면에서 오픈시 넘어오는 파라미터 처리
        	var frame = this.getOwnerFrame();
        	if (frame.TY_GUBUN == "ERP")
        	{
        		this.dxGrid.setFormatColProperty(this.dxGrid.getBindCellIndex("body", "NO_SEQ"), "size", 40);	//180
        		this.dxGrid.setFormatColProperty(this.dxGrid.getBindCellIndex("body", "DS_ATTACH_FILE"), "size", 350);	//180
        		this.dxGrid.setFormatColProperty(this.dxGrid.getBindCellIndex("body", "NM_FILE_LIST"), "size", 0);	//323
        		this.dxGrid.setFormatColProperty(this.dxGrid.getBindCellIndex("body", "DS_FILE_NAME"), "size", 100);	//100
        		this.dxGrid.setFormatColProperty(this.dxGrid.getBindCellIndex("body", "DS_REMARK"), "size", 0);
        	}
        	else
        	{
        		this.divData.set_top(17);
        		this.dxGrid.setFormatColProperty(this.dxGrid.getBindCellIndex("body", "NO_SEQ"), "size", 40);	//180
        		this.dxGrid.setFormatColProperty(this.dxGrid.getBindCellIndex("body", "DS_ATTACH_FILE"), "size", 350);	//180
        		this.dxGrid.setFormatColProperty(this.dxGrid.getBindCellIndex("body", "NM_FILE_LIST"), "size", 0);	//323
        		this.dxGrid.setFormatColProperty(this.dxGrid.getBindCellIndex("body", "DS_FILE_NAME"), "size", 100);	//100
        		this.dxGrid.setFormatColProperty(this.dxGrid.getBindCellIndex("body", "DS_REMARK"), "size", 0);
        	}
        };

        /************************************************************************
         * 파라미터 설정
         ************************************************************************/
        this.fnSetParameter = function() {

        	//조회조건 Dataset
        	this.dsSelect = new Dataset();
        	this.dsSelect.addColumn("CD_CORP", "string");
        	this.dsSelect.addColumn("ID_SABUN", "string");
        	this.dsSelect.addColumn("NO_SEQ", "bigdecimal");
        	this.dsSelect.addColumn("TY_GUBUN", "string");
        };

        /************************************************************************
         * 화면 및 검색영역 초기화
         ************************************************************************/
        var READONLY = false;
        this.fnInit = function() {
        	// 타화면에서 오픈시 넘어오는 파라미터 처리
        	var frame = this.getOwnerFrame();
        	if (typeof frame.READONLY == "string") {
        		if (frame.READONLY == "true" || frame.READONLY == undefined) {
        			this.READONLY = true;
        		} else {
        			this.READONLY = false;
        		}
        	} else {
        		this.READONLY = false;
        	}

        	this.dsSearch.setColumn(0, "CD_CORP"    , frame.CD_CORP);	// 법인코드
        	this.dsSearch.setColumn(0, "ID_SABUN"   , frame.ID_SABUN);	// 사번
        	this.dsSearch.setColumn(0, "ID_PERSON"	, frame.ID_PERSON);	//
        	this.dsSearch.setColumn(0, "NO_SEQ"		, frame.NO_SEQ);	// 순번
        	this.dsSearch.setColumn(0, "TY_GUBUN"	, frame.TY_GUBUN);	// ERP/GW 구분
        	//this.READONLY = frame.READONLY;
        	this.fnSelect();
        };
        /************************************************************************
         * 컨트롤 이벤트
         ************************************************************************/
         /*
          *	조회 버튼
          */
        this.fnSelect = function() {
        	//this.gfnGridBeforeSelect(this.dxGrid);
        	//this.dsList.clearData();

        	this.dsSelect.clearData();
        	this.dsSelect.addRow();

        	this.dsSelect.setColumn(0, "CD_CORP", this.dsSearch.getColumn(0, "CD_CORP"));
        	this.dsSelect.setColumn(0, "ID_SABUN", this.dsSearch.getColumn(0, "ID_SABUN"));
        	this.dsSelect.setColumn(0, "NO_SEQ", this.dsSearch.getColumn(0, "NO_SEQ"));
        	this.dsSelect.setColumn(0, "TY_GUBUN", this.dsSearch.getColumn(0, "TY_GUBUN"));

        	var strSvcId    = "select";
        	var strSvcType  = "select";
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

        /************************************************************************
         * Validate
         ************************************************************************/


        /************************************************************************
         * 콜백 이벤트
         ************************************************************************/
        /*
         *	콜백 처리
         */
        this.fnCallback = function(svcID, errorCode, errorMsg)
        {
        	//조회완료 후
        	if( svcID == "select" ){
        		if(this.dsList.rowcount == 0) {
        			this.gfnAlert("자료가 존재하지 않습니다.");
        		}else{
        			this.gfnGridAfterSelect(this.dxGrid);
        		}
        	}
        };

        /************************************************************************
         * 코드파인드 이벤트
         ************************************************************************/

        /************************************************************************
         * 그리드 이벤트
         ************************************************************************/
        //그리드 파일 더블클릭 다운로드.
        this.divData_btnFileDown_onclick = function(obj,e)
        {
        	if (this.dsList.rowcount == 0) return false;
        	for(var i = 0; i < this.dsList.rowcount; i++) {
        		var sFilename = this.dsList.getColumn(i, "NM_FILE_LIST");
        		var encodeFileName = encodeURIComponent(sFilename).replace(/[!'()*]/g, escape);

        		var svrPath = this.dsList.getColumn(i, "DS_FILE_PATH").replace(/\//g, "\\") + "\\";
        		var filePath = svrPath.replace(/\\\\/g, "\\");// + this.FileManager.CD_DIR.join('\\');

        		var fileDownTransID = "FileDownTransfer_"+i;
        		if(this[fileDownTransID] != null) {
        			this.removeChild(fileDownTransID);
        		}
        		var fileDownTrans = new nexacro.FileDownTransfer(fileDownTransID, this);
        		this.addChild(fileDownTransID, fileDownTrans);

        		var surl = this.fileConfig.host+ this.fileConfig.downloadUrl; // + encodeFileName;
        		fileDownTrans.set_url(surl);
        		fileDownTrans.setPostData("path", filePath);
        		fileDownTrans.setPostData("fileName", encodeFileName);
        		if( system.navigatorname =="nexacro"){
        			fileDownTrans.set_downloadfilename(sFilename);
        		}
        		fileDownTrans.download();
        	}
        };

        this.divData_objGrid_oncelldblclick = function(obj,e)
        {
        	this.fnDownload();
        };

        this.fnDownload = function() {
        	if (this.dsList.rowcount == 0) return false;
        	var sFilename = this.dsList.getColumn(this.dsList.rowposition, "NM_FILE_LIST");
        	var encodeFileName = encodeURIComponent(sFilename).replace(/[!'()*]/g, escape);

        	var svrPath = this.dsList.getColumn(this.dsList.rowposition, "DS_FILE_PATH").replace(/\//g, "\\") + "\\";
        	var filePath = svrPath.replace(/\\\\/g, "\\");// + this.FileManager.CD_DIR.join('\\');

        	var surl = this.fileConfig.host+ this.fileConfig.downloadUrl; // + encodeFileName;
        	this.FileDownTransfer.set_url(surl);
        	this.FileDownTransfer.setPostData("path", filePath);
        	this.FileDownTransfer.setPostData("fileName", encodeFileName);

        	if( system.navigatorname =="nexacro"){
        		this.FileDownTransfer.set_downloadfilename(sFilename);
        	}
        	this.FileDownTransfer.download();
        };

        //첨부파일 팝업
        this.fnGrid_ExpandUp = function(obj, e){
         	var colnm = this.gfnGridGetBindColumnNameByIndex(obj, e.cell);
        	if(colnm == "DS_FILE_NAME") {
        		// 최초 작성시엔 NO_SEQ가 없기 때문에 저장 후에 파일 첨부를 진행하여야 함.
        		// CD_DIR에 넣어줄 값이 없기에 저장 후 진행!
        // 		if(this.gfnGetFlag(dataset, e.row) == "I"){
        // 			this.gfnAlert("저장 후 파일첨부 진행.");
        // 			return false;
        // 		}

        		var fileManager = {};
        		fileManager.CD_GUBUN = "DAW2";
        		fileManager.CD_DIR = [this.dsSearch.getColumn(0, "ID_PERSON"), this.dsSearch.getColumn(0, "NO_SEQ"), this.dsList.getColumn(e.row, "NO_SEQ")];
        		// 권한설정
        		if (this.FormInfo.GR_SEARCH == "1") {
        			fileManager.IS_READONLY = false;
        		} else {
        			//fileManager.IS_READONLY = true;
        			fileManager.IS_READONLY = this.READONLY;
        		}
        		//fileManager.IS_READONLY = this.READONLY;
        		this.gfnFileManager(fileManager, "fnFileCallback");
        	}
        };
        //첨부파일 콜백
        this.fnFileCallback = function(strID, val) {
        	// 변경시 조회를 다시 하거나
        	if(val.IsChange == true) {
        		this.fnSelect();
        	}
        //
        // 	//파일첨부 갯수
        // 	this.fileCnt = val.Cnt;
        // 	this.fileNm = val.Cnt;
        // 	//셋팅 갯수 조절
        // 	this.dsFileList.setColumn(this.dsFileList.rowposition, "FILE_CNT", this.fileCnt);
        //
        // 	// 파일개수를 다시 셋팅
        // 	this.dsFileList.set_enableevent(false);
        // 	if(val.Cnt == 0) {
        // 		this.dsFileList.setColumn(this.dsFileList.rowposition, "DS_FILE_NAME", "   첨부(0)");
        // 	} else {
        // 		this.dsFileList.setColumn(this.dsFileList.rowposition, "DS_FILE_NAME", "   첨부(" + val.Cnt + ")");
        // 	}
        // 	this.dsFileList.set_enableevent(true);
        };
        /************************************************************************
         * 기타 이벤트
         ************************************************************************/

        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.form_onload,this);
            this.divData.form.btnFileDown.addEventHandler("onclick",this.divData_btnFileDown_onclick,this);
            this.divData.form.objGrid.addEventHandler("oncelldblclick",this.divData_objGrid_oncelldblclick,this);
        };
        this.loadIncludeScript("DAW_RETIRE_REQUEST_FILE.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
