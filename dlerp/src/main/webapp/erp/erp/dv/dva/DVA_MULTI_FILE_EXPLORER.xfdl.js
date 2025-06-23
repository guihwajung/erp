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
            this.set_titletext("파일관리");
            if (Form == this.constructor)
            {
                this._setFormPosition(900,500);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("dsList", this);
            obj._setContents("");
            this.addChild(obj.name, obj);


            obj = new Dataset("_dsProc", this);
            obj._setContents("<ColumnInfo><Column id=\"TARGET\" type=\"STRING\" size=\"256\"/><Column id=\"SP\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"TARGET\">select</Col><Col id=\"SP\">DVAPR_MULTI_FILE_EXPLORER_SELECT</Col></Row><Row><Col id=\"TARGET\">save</Col><Col id=\"SP\">DVAPR_MULTI_FILE_EXPLORER_SAVE</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsSearch", this);
            obj._setContents("<ColumnInfo><Column id=\"YEAR\" type=\"STRING\" size=\"256\"/><Column id=\"NO\" type=\"INT\" size=\"256\"/><Column id=\"GBN\" type=\"STRING\" size=\"256\"/><Column id=\"TARGET_PROG\" type=\"STRING\" size=\"256\"/><Column id=\"TARGET_NAME\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row/></Rows>");
            this.addChild(obj.name, obj);


            obj = new FileDialog("fdg00", this);
            this.addChild(obj.name, obj);


            obj = new FileUpTransfer("FileUpTransfer00", this);
            this.addChild(obj.name, obj);


            obj = new FileDownTransfer("FileDownTransfer00", this);
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Div("divSearch","0.0","10.0",null,"46.0","0",null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_cssclass("div_SEARCH_Bg");
            obj.set_formscrolltype("none");
            this.addChild(obj.name, obj);

            obj = new Static("staCD_CORP","0.0","10.0","92.0","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("0");
            obj.set_text("관리대상");
            obj.set_cssclass("sta_WF_SchLabelE");
            this.divSearch.addChild(obj.name, obj);

            obj = new Edit("edt00","staCD_CORP:0.0","10.0","220","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("1");
            obj.set_enable("false");
            obj.set_readonly("true");
            obj.set_value("계약서검토 - 결과(날인)");
            obj.set_text("계약서검토 - 결과(날인)");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("staCD_CORP00","edt00:0.0","10.0","92.0","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("2");
            obj.set_text("관리번호");
            obj.set_cssclass("sta_WF_SchLabelE");
            this.divSearch.addChild(obj.name, obj);

            obj = new Edit("edt00_00","staCD_CORP00:0.0","10.0","60","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("3");
            obj.set_enable("false");
            obj.set_readonly("true");
            obj.set_value("2021");
            obj.set_text("2021");
            this.divSearch.addChild(obj.name, obj);

            obj = new Edit("edt00_00_00","edt00_00:0.0","10.0","60","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("4");
            obj.set_enable("false");
            obj.set_readonly("true");
            obj.set_value("1");
            obj.set_text("1");
            this.divSearch.addChild(obj.name, obj);

            obj = new Div("divData","0","divSearch:5","50%",null,null,"0",null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_cssclass("div_DATA_Bg");
            this.addChild(obj.name, obj);

            obj = new Grid("objGrid","0","0",null,null,"0","0",null,null,null,null,this.divData.form);
            obj.set_taborder("0");
            obj._setContents("");
            this.divData.addChild(obj.name, obj);

            obj = new Div("divData00","divData:5","40",null,null,"0","0",null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_cssclass("div_DATA_Bg");
            this.addChild(obj.name, obj);

            obj = new Static("sta01","0","0",null,"30","0",null,null,null,null,null,this.divData00.form);
            obj.set_taborder("0");
            obj.set_text("설     명");
            obj.set_cssclass("sta_WF_tablelabel");
            obj.set_textAlign("center");
            this.divData00.addChild(obj.name, obj);

            obj = new Static("sta12","0","sta01:-1",null,"196","0",null,null,null,null,null,this.divData00.form);
            obj.set_taborder("2");
            obj.set_cssclass("sta_WF_tablebg");
            this.divData00.addChild(obj.name, obj);

            obj = new Static("sta01_00","0","sta12:5",null,"30","0",null,null,null,null,null,this.divData00.form);
            obj.set_taborder("3");
            obj.set_text("비     고");
            obj.set_cssclass("sta_WF_tablelabel");
            obj.set_textAlign("center");
            this.divData00.addChild(obj.name, obj);

            obj = new Static("sta12_00","0","259",null,null,"0","2",null,null,null,null,this.divData00.form);
            obj.set_taborder("4");
            obj.set_cssclass("sta_WF_tablebg");
            this.divData00.addChild(obj.name, obj);

            obj = new TextArea("txt00_00","3","262",null,null,"2","5",null,null,null,null,this.divData00.form);
            obj.set_taborder("5");
            this.divData00.addChild(obj.name, obj);

            obj = new TextArea("txt00","3","32",null,"190","2",null,null,null,null,null,this.divData00.form);
            obj.set_taborder("1");
            this.divData00.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this
            obj = new Layout("default","",this._adjust_width,this._adjust_height,this,function(p){});
            this.addLayout(obj.name, obj);
            
            // BindItem Information
            obj = new BindItem("item0","divSearch.form.edt00","value","dsSearch","TARGET_NAME");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item1","divSearch.form.edt00_00","value","dsSearch","YEAR");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item2","divSearch.form.edt00_00_00","value","dsSearch","NO");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item3","divData00.form.txt00","value","dsList","DESCRIPTION");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item4","divData00.form.txt00_00","value","dsList","NOTICE");
            this.addChild(obj.name, obj);
            obj.bind();
            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script
        this.registerScript("DVA_MULTI_FILE_EXPLORER.xfdl", function() {
        this.objApp = this.gfnGetApplication();

        this.deleteFile = false;

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

        	// 파일설정
        	this.fileConfig = this.gfnGetFileConfig();

        	if(!this.gfnIsNull(this.getOwnerFrame().YEAR)
        	&& !this.gfnIsNull(this.getOwnerFrame().NO)
        	&& !this.gfnIsNull(this.getOwnerFrame().GBN)
        	&& !this.gfnIsNull(this.getOwnerFrame().TARGET_PROG))
        	{
        		this.dsSearch.setColumn(0, "YEAR", this.getOwnerFrame().YEAR);
        		this.dsSearch.setColumn(0, "NO", this.getOwnerFrame().NO);
        		this.dsSearch.setColumn(0, "GBN", this.getOwnerFrame().GBN);
        		this.dsSearch.setColumn(0, "TARGET_PROG", this.getOwnerFrame().TARGET_PROG);
        		this.dsSearch.setColumn(0, "TARGET_NAME", this.getOwnerFrame().TARGET_NAME);

        		this.FormBtns.Select.click();
        	}

        	if(this.FormInfo.GR_SEARCH == 1){
        	     this.divTopBtn.set_visible(true);
        	}
        };

        /************************************************************************
         * 버튼 설정 : 화면(Tab) 전환시 마다 호출
         * 서브버튼 사용 및 공통버튼 강제 제어시 여기서 처리
         ************************************************************************/
        this.fnSetButton = function() {
        	if(this.getOwnerFrame().IS_READONLY) {
        		this.divTopBtn.set_visible(false);
        	}
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
        	this.dxGrid = this.divData.form.objGrid;
        };

        /************************************************************************
         * 이벤트 설정
         ************************************************************************/
        this.fnSetEvent = function() {
        	// 그리드 초기화
        	this.gfnGridInit(this.dxGrid, this.dsList, "DV", "DVA_MULTI_FILE_EXPLORER");

        	var colFILE_SIZ = this.dxGrid.getBindCellIndex("body", "FILE_SIZE");
        	this.dxGrid.setCellProperty("body", colFILE_SIZ, "expr", "expr:FILE_SIZE==null?null:FILE_SIZE/1024");

        	this.dxGrid.ExpandUp = "fnGrid_ExpandUp";
        	this.dxGrid.addEventHandler("oncelldblclick", this.dxGrid_oncelldblclick, this);
        };

        /************************************************************************
         * 파라미터 설정
         ************************************************************************/
        this.fnSetParameter = function() {
        	this.dsSelect = new Dataset();
        	this.dsSelect.addColumn("YEAR", "string")          // 년도
        	this.dsSelect.addColumn("NO", "int")            // 순번
        	this.dsSelect.addColumn("GBN", "string")           // 구분
        	this.dsSelect.addColumn("TARGET_PROG", "string")   // 대상화면구분

        	this.dsSave = new Dataset();
        	this.dsSave.addColumn("TY_SAVE", "string")       // 저장구분
        	this.dsSave.addColumn("YEAR", "string")          // 년도
        	this.dsSave.addColumn("NO", "int")               // 순번
        	this.dsSave.addColumn("GBN", "string")           // 구분
        	this.dsSave.addColumn("TARGET_PROG", "string")   // 대상화면구분
        	this.dsSave.addColumn("FILE_NO", "string")       // 파일연번
        	this.dsSave.addColumn("TITLE", "string")         // 제목
        	this.dsSave.addColumn("FILE_NM_REAL", "string")  // 파일명
        	this.dsSave.addColumn("FILE_SIZE", "string")     // 파일크기
        	this.dsSave.addColumn("FILE_PATH", "string")     // 파일주소
        	this.dsSave.addColumn("FILE_HASH", "string")     // 해쉬코드
        	this.dsSave.addColumn("NOTICE", "string")        // 비고
        	this.dsSave.addColumn("DESCRIPTION", "string")   // 설명
        	this.dsSave.addColumn("WRITE_ER", "string")      // 작성자

        	this.dsDelFile = new Dataset();
        	this.dsDelFile.addColumn("filename", "string")  // 파일명
        	this.dsDelFile.addColumn("filepath", "string")     // 파일주소
        }

        /************************************************************************
         * 컨트롤 이벤트
         ************************************************************************/
         /*
          *	조회 버튼
          */
        this.fnSelect = function() {
        	if (!this.fnSelectValidate()) return false;

        	var target_prog = this.dsSearch.getColumn(0, "TARGET_PROG");
        	var serial = this.dsSearch.getColumn(0, "YEAR") + "_" + this.dsSearch.getColumn(0, "NO")

        	// 파일 설정
        	this.FileUpTransfer00.clearFileList();

        	this.filepath = "/" + target_prog + "/" + serial;

        	this.gfnGridBeforeSelect(this.dxGrid);

        	this.dsSelect.clearData();
        	this.dsSelect.addRow();

        	this.dsSelect.setColumn(0, "YEAR", this.dsSearch.getColumn(0, "YEAR"));
        	this.dsSelect.setColumn(0, "NO", this.dsSearch.getColumn(0, "NO"));
        	this.dsSelect.setColumn(0, "GBN", this.dsSearch.getColumn(0, "GBN"));
        	this.dsSelect.setColumn(0, "TARGET_PROG", this.dsSearch.getColumn(0, "TARGET_PROG"));

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
        }

        /*
         *	입력 버튼
         */
        this.fnAdd = function() {
        	var nrow = this.gfnGridAdd(this.dxGrid); // top (default), bottom, current
        	this.dsList.setColumn(nrow, "YEAR", this.dsSearch.getColumn(0, "YEAR"));
        	this.dsList.setColumn(nrow, "NO", this.dsSearch.getColumn(0, "NO"));
        	this.dsList.setColumn(nrow, "GBN", this.dsSearch.getColumn(0, "GBN"));
        	this.dsList.setColumn(nrow, "TARGET_PROG", this.dsSearch.getColumn(0, "TARGET_PROG"));
        }

        /*
         *	삭제 버튼
         */
        this.fnDel = function() {
        	this.gfnGridDel(this.dxGrid);
        }

        /*
         *	저장 버튼
         */
        this.fnSave = function() {
        	// 그리드 필수항목 체크
        	if (!this.gfnGridValidate(this.dxGrid)) return;

        	this.deleteFile = false;

        	// 파일저장
        	if(this.FileUpTransfer00.filelist.length > 0) {
        		this._waitCursor(true);
        		var sUploadUrl = this.fileConfig.host + this.fileConfig.uploadUrl;
        		this.FileUpTransfer00.setPostData("path", this.filepath);
        		this.FileUpTransfer00.upload(sUploadUrl);
        	}
        	else {
        		this.fnSaveProc();
        	}
        }

        this.fnSaveProc = function() {
        	this.dxGrid.updateToDataset();

        	this.dsSave.clearData();

        	for (var i = 0; i < this.dsList.rowcount; i++) {
        		var flag = this.gfnGetFlag(this.dsList, i);
        		switch(flag) {
        			case "I":
        			case "U":
        				var nrow = this.dsSave.addRow();
        				this.dsSave.setColumn(nrow, "TY_SAVE", flag);
        				this.dsSave.setColumn(nrow, "YEAR", this.dsSearch.getColumn(0, "YEAR"))                // 년도
        				this.dsSave.setColumn(nrow, "NO", this.dsSearch.getColumn(0, "NO"))                    // 순번
        				this.dsSave.setColumn(nrow, "GBN", this.dsSearch.getColumn(0, "GBN"))                  // 구분
        				this.dsSave.setColumn(nrow, "TARGET_PROG", this.dsSearch.getColumn(0, "TARGET_PROG"))  // 대상화면구분
        				this.dsSave.setColumn(nrow, "FILE_NO", this.dsList.getColumn(i, "FILE_NO"))            // 파일연번
        				this.dsSave.setColumn(nrow, "TITLE", this.dsList.getColumn(i, "TITLE"))                // 제목
        				this.dsSave.setColumn(nrow, "FILE_NM_REAL", this.dsList.getColumn(i, "FILE_NM_REAL"))  // 파일명
        				this.dsSave.setColumn(nrow, "FILE_SIZE", this.dsList.getColumn(i, "FILE_SIZE"))        // 파일크기
        				this.dsSave.setColumn(nrow, "FILE_PATH", this.filepath)                                // 파일주소
        				this.dsSave.setColumn(nrow, "FILE_HASH", this.dsList.getColumn(i, "FILE_HASH"))        // 해쉬코드
        				this.dsSave.setColumn(nrow, "NOTICE", this.dsList.getColumn(i, "NOTICE"))              // 비고
        				this.dsSave.setColumn(nrow, "DESCRIPTION", this.dsList.getColumn(i, "DESCRIPTION"))    // 설명
        				this.dsSave.setColumn(nrow, "WRITE_ER", this.AuthClient.ID_USER)                       // 작성자
        				break;
        			case "D":
        				var nrow = this.dsSave.addRow();
        				this.dsSave.setColumn(nrow, "TY_SAVE", flag);
        				this.dsSave.setColumn(nrow, "YEAR", this.dsList.getColumn(i, "YEAR"))          // 년도
        				this.dsSave.setColumn(nrow, "NO", this.dsList.getColumn(i, "NO"))            // 순번
        				this.dsSave.setColumn(nrow, "GBN", this.dsList.getColumn(i, "GBN"))           // 구분
        				this.dsSave.setColumn(nrow, "TARGET_PROG", this.dsList.getColumn(i, "TARGET_PROG"))   // 대상화면구분
        				this.dsSave.setColumn(nrow, "FILE_NO", this.dsList.getColumn(i, "FILE_NO"))       // 파일연번

        				var nrow = this.dsDelFile.addRow();
        				this.dsDelFile.setColumn(nrow, "filename", this.dsList.getColumn(i, "FILE_NM_REAL")); // 파일명
        				this.dsDelFile.setColumn(nrow, "filepath", this.filepath)                             // 파일주소
        				this.deleteFile = true;

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
        	var callBackFnc = "fnCallback";

        	this.gfnTransaction( strSvcId , 	// transaction을 구분하기 위한 svc id값
        						strSvcType , 	// transaction을 요청할 구분
        						inProc,			// Procedure 정보 Dataset 이름
        						inData , 		// 입력값으로 보낼 dataset id , a=b형태로 실제이름과 입력이름을 매칭
        						outData , 		// 처리결과값으로 받을 dataset id, a=b형태로 실제이름과 입력이름을 매칭
        						strArg, 			// 입력갑스로 보낼 arguments, strFormData="20120607"
        						callBackFnc); // 통신방법 정의 [생략가능]

        }

        /*
         *	엑셀 버튼
         */
        this.fnExcel = function() {
        	this.gfnExcelExport(this.dxGrid);
        }

        /*
         *	출력 버튼
         */
        this.fnPrint = function() {
        }

        /************************************************************************
         * Validate
         ************************************************************************/
        /*
         *	조회 Validate
         */
        this.fnSelectValidate = function() {
        	var validate = true;
        	/*
        	if (this.gfnIsNull(this.dsSearch.getColumn(0,"CD_SYSTEM"))) {
        		validate = false;
        		// Alert후 실행할 처리
        		this.fnVaidateCallback = function() {
        			this.ccfCD_SYSTEM.form.CDTextBox.setFocus();
        		}
        		this.gfnAlert("시스템을 입력하세요.", "fnVaidateCallback");
        	}
        	*/
        	return validate;
        };

        /************************************************************************
         * 콜백 이벤트
         ************************************************************************/
        /*
         *	콜백 처리
         */
        this.fnCallback = function(svcID, errorCode, errorMsg)
        {
        	if (svcID == "select") {
        		this.gfnGridAfterSelect(this.dxGrid);

        		this.fnBtnCheckAll();
        	}
        	else if(svcID == "save") {
        		if (errorCode == 0) {
        		    if(this.deleteFile == true){
        			    this.fnDeleteFile();
        			}else{
        			    this.FormBtns.Select.click();
        			}
        		} else {
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
        this.dxGrid_oncelldblclick = function(obj,e)
        {
        	if(this.gfnGridGetBindColumnNameByIndex(obj, e.cell) == "FILE_NM_REAL") {
        		this.fnDownload();
        	}
        }

         this.fnGrid_ExpandUp = function(obj, e) {

        	var colnm = this.gfnGridGetBindColumnNameByIndex(obj, e.cell);
        	if(colnm == "FILE_NM_REAL") {
        		this.fdg00.row = e.row;
        		this.fdg00.open('FileOpen', FileDialog.LOAD);
        	}
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
        			var row = obj.row;
        			this.dsList.setColumn(row, "FILE_NM_REAL", obj.filename);
        			this.dsList.setColumn(row, "FILE_SIZE", null);
        			this.FileUpTransfer00.addFile(obj.filename, obj);
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
        	console.log("FileUpTransfer00_onprogress: " + e.loaded+"/"+e.total);
        };

        this.FileUpTransfer00_onsuccess = function(obj,e)
        {
        	this._waitCursor(false);
        	console.log("FileUpTransfer00_onsuccess: " + e.code + "/" + e.message);
        	if(e.code == 0) {
        		if(e.datasets.length > 0) {
        			for(var i = 0; i < e.datasets[0].rowcount; i++) {
        				var row = obj.filelist[i].row;
        				this.dsList.setColumn(row, "FILE_SIZE", e.datasets[0].getColumn(i, "filesize"));
        				this.dsList.setColumn(row, "FILE_HASH", e.datasets[0].getColumn(i, "filehash"));
        			}
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

        this.fnDownload = function() {
        	if(!this.gfnIsNull(this.gfnGetFlag(this.dsList, this.dsList.rowposition))) return;

        	var sFilename = this.dsList.getColumn(this.dsList.rowposition, "FILE_NM_REAL");
        	var sFilepath = this.dsList.getColumn(this.dsList.rowposition, "FILE_PATH");
        	var encodeFileName = encodeURIComponent(sFilename);

        	var surl = this.fileConfig.host+ this.fileConfig.downloadUrl;
        	this.FileDownTransfer00.set_url(surl);
        	this.FileDownTransfer00.setPostData("path", sFilepath);
        	this.FileDownTransfer00.setPostData("fileName", encodeFileName);
        	if( system.navigatorname =="nexacro"){
        		this.FileDownTransfer00.set_downloadfilename(sFilename);
        	}
        	this.FileDownTransfer00.download();
        };

        this.fnDeleteFile = function()
        {
        	var strSvcId    = "deletefile";
        	var strSvcType  = "file/deleteFile";	//
        	var inProc		= "";
        	var inData      = "input=dsDelFile";
        	var outData     = "";
        	var strArg      = "";
        	var callBackFnc = "fnDeleteCallback";

        	this.gfnTransaction( strSvcId , 	// transaction을 구분하기 위한 svc id값
        						strSvcType , 	// transaction을 요청할 구분
        						inProc,			// Procedure 정보 Dataset 이름
        						inData , 		// 입력값으로 보낼 dataset id , a=b형태로 실제이름과 입력이름을 매칭
        						outData , 		// 처리결과값으로 받을 dataset id, a=b형태로 실제이름과 입력이름을 매칭
        						strArg, 			// 입력갑스로 보낼 arguments, strFormData="20120607"
        						callBackFnc); // 통신방법 정의 [생략가능]
        }

        this.fnDeleteCallback = function(svcID, errorCode, errorMsg) {
        	if(svcID == "deletefile") {
        	    this.dsDelFile.clearData();
        		if (errorCode == 0) {
        			this.FormBtns.Select.click();
        		} else {
        			this.gfnAlert(errorMsg);
        		}
        	}
        }


        /************************************************************************
         * 기타 이벤트
         ************************************************************************/
        this.dsSearch_onvaluechanged = function(obj,e)
        {
        	if(e.oldvalue != e.newvalue) {
        		this.gfnSetFormStatus(this);	// 폼상태 초기화
        		this.gfnGridClear(this.dxGrid);
        	}
        };

        this.fnAutoFile_Callback = function(svcID, errorCode, errorMsg, strArg) {
        	if(errorCode == 0) {
        		this.FormBtns.Select.click();
        	} else {
        		this.gfnAlert(errorMsg);
        	}
        }

        this.fnBtnCheckAll = function()
        {
        	//this.gfnBtnCheck(this.btnInit, this.dsList);
        }
        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.form_onload,this);
            this.divData00.form.sta01.addEventHandler("onclick",this.divData_divDataRight_sta01_onclick,this);
            this.divData00.form.sta01_00.addEventHandler("onclick",this.divData_divDataRight_sta01_onclick,this);
            this.dsSearch.addEventHandler("onvaluechanged",this.dsSearch_onvaluechanged,this);
            this.fdg00.addEventHandler("onclose",this.fdg00_onclose,this);
            this.FileUpTransfer00.addEventHandler("onprogress",this.FileUpTransfer00_onprogress,this);
            this.FileUpTransfer00.addEventHandler("onsuccess",this.FileUpTransfer00_onsuccess,this);
            this.FileUpTransfer00.addEventHandler("onerror",this.FileUpTransfer00_onerror,this);
        };
        this.loadIncludeScript("DVA_MULTI_FILE_EXPLORER.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
