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
            this.set_titletext("PR(현설)파일관리");
            if (Form == this.constructor)
            {
                this._setFormPosition(1280,720);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("dsList", this);
            obj._setContents("");
            this.addChild(obj.name, obj);


            obj = new Dataset("_dsProc", this);
            obj._setContents("<ColumnInfo><Column id=\"TARGET\" type=\"STRING\" size=\"256\"/><Column id=\"SP\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"TARGET\">select</Col><Col id=\"SP\">DBSPR_ETC_FILES_SELECT</Col></Row><Row><Col id=\"TARGET\">insert</Col><Col id=\"SP\">DBSPR_ETC_FILES_INSERT</Col></Row><Row><Col id=\"TARGET\">update</Col><Col id=\"SP\">DBSPR_ETC_FILES_UPDATE</Col></Row><Row><Col id=\"TARGET\">delete</Col><Col id=\"SP\">DBSPR_ETC_FILES_DELETE</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsSearch", this);
            obj._setContents("<ColumnInfo><Column id=\"DT_MONTH\" type=\"STRING\" size=\"256\"/><Column id=\"CD_SITE\" type=\"STRING\" size=\"256\"/><Column id=\"DS_SITE\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row/></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsDeleteFile", this);
            obj._setContents("<ColumnInfo><Column id=\"filepath\" type=\"STRING\" size=\"256\"/><Column id=\"filename\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
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
            obj.set_text("");
            this.addChild(obj.name, obj);

            obj = new Static("sta00","0.0","10.0","92.0","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("2");
            obj.set_text("작업년월");
            obj.set_cssclass("sta_WF_SchLabel");
            this.divSearch.addChild(obj.name, obj);

            obj = new Div("ctcDT_MONTH","sta00:0.0","10.0","80","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("3");
            obj.set_url("cmm::cmmCalMM.xfdl");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("staCD_SITE","ctcDT_MONTH:0.0","10.0","92.0","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("1");
            obj.set_text("현장코드");
            obj.set_cssclass("sta_WF_SchLabel");
            this.divSearch.addChild(obj.name, obj);

            obj = new Div("ccfCD_SITE","staCD_SITE:0.0","10.0","300","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.getSetter("CodeFindName").set("DBX_CFMAINSITE");
            obj.getSetter("CDTextWidth").set("70");
            obj.set_taborder("0");
            obj.set_url("cmm::cmmCodeFind.xfdl");
            this.divSearch.addChild(obj.name, obj);

            obj = new Div("divData","0","divSearch:10",null,null,"0","0",null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_cssclass("div_DATA_Bg");
            this.addChild(obj.name, obj);

            obj = new Grid("objGrid","0","0",null,null,"0","0",null,null,null,null,this.divData.form);
            obj.set_taborder("0");
            obj._setContents("");
            this.divData.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this
            obj = new Layout("default","",this._adjust_width,this._adjust_height,this,function(p){});
            this.addLayout(obj.name, obj);
            
            // BindItem Information
            obj = new BindItem("item0","divSearch.form.ctcDT_MONTH.form.TextBox","value","dsSearch","DT_MONTH");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item1","divSearch.form.ccfCD_SITE.form.CDTextBox","value","dsSearch","CD_SITE");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item2","divSearch.form.ccfCD_SITE.form.DSTextBox","value","dsSearch","DS_SITE");
            this.addChild(obj.name, obj);
            obj.bind();
            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {
            this._addPreloadList("fdl","cmm::cmmCalMM.xfdl");
            this._addPreloadList("fdl","cmm::cmmCodeFind.xfdl");
        };
        
        // User Script
        this.registerScript("DBS_ETC_FILES.xfdl", function() {
        this.objApp = this.gfnGetApplication();

        this.cCol = "";

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

        	if (!this.gfnIsNull(this.getOwnerFrame().CD_SITE)) {
        		this.dsSearch.setColumn(0, "CD_SITE", this.getOwnerFrame().CD_SITE);
        		this.dsSearch.setColumn(0, "DS_SITE", this.getOwnerFrame().DS_SITE);
        		this.dsSearch.setColumn(0, "DT_MONTH", this.getOwnerFrame().YM_WORK);
        	}
        	else {
        		this.dsSearch.setColumn(0, "DT_MONTH", this.gfnGetDate().substr(0, 6));
        	}

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
         	this.btnDelFile1 = this.gfnFormButtonAdd("DelFile1", "fnDelFile1");
         	this.btnDelFile2 = this.gfnFormButtonAdd("DelFile2", "fnDelFile2");
        	this.btnDelFile3 = this.gfnFormButtonAdd("DelFile3", "fnDelFile3");
        	this.btnDelFile4 = this.gfnFormButtonAdd("DelFile4", "fnDelFile4");
        };

        /************************************************************************
         * 변수 선언
         ************************************************************************/
        this.fnSetVariable = function() {
        	this.ctcDT_MONTH = this.divSearch.form.ctcDT_MONTH;
        	this.ccfCD_SITE = this.divSearch.form.ccfCD_SITE;

        	this.dxGrid = this.divData.form.objGrid;
        };

        /************************************************************************
         * 이벤트 설정
         ************************************************************************/
        this.fnSetEvent = function() {
        	this.gfnGridInit(this.dxGrid, this.dsList, "DB", "DBS_ETC_FILES");

        	this.dxGrid.ExpandUp = "fnGrid_ExpandUp";
        	this.dxGrid.EnterCell = "fnGrid_EnterCell";
        	this.dxGrid.BeforeUserDataSetParam = "fnGrid_BeforeUserDataSetParam";
        	this.dxGrid.addEventHandler("oncelldblclick", this.dxGrid_oncelldblclick, this);

        	this.ccfCD_SITE.BeforeUserDataSetParam = "fnBeforeUserDataSetParam";
        };

        /************************************************************************
         * 파라미터 설정
         ************************************************************************/
        this.fnSetParameter = function() {
        	this.dsSelect = new Dataset();
        	this.dsSelect.addColumn("DT_MONTH", "string");
        	this.dsSelect.addColumn("CD_SITE", "string");

        	this.dsInsert = new Dataset();
        	this.dsInsert.addColumn("CD_SITE", "string");
        	this.dsInsert.addColumn("DT_INS", "string");
        	this.dsInsert.addColumn("DS_FILE1", "string");
        	this.dsInsert.addColumn("PATH_FILE1", "string");
        	this.dsInsert.addColumn("DS_FILE2", "string");
        	this.dsInsert.addColumn("PATH_FILE2", "string");
        	this.dsInsert.addColumn("DS_FILE3", "string");
        	this.dsInsert.addColumn("PATH_FILE3", "string");
        	this.dsInsert.addColumn("DS_FILE4", "string");
        	this.dsInsert.addColumn("PATH_FILE4", "string");
        	this.dsInsert.addColumn("ID_INSERT", "string");

        	this.dsUpdate = new Dataset();
        	this.dsUpdate.addColumn("CD_SITE", "string");
        	this.dsUpdate.addColumn("DT_INS", "string");
        	this.dsUpdate.addColumn("DS_FILE1", "string");
        	this.dsUpdate.addColumn("PATH_FILE1", "string");
        	this.dsUpdate.addColumn("DS_FILE2", "string");
        	this.dsUpdate.addColumn("PATH_FILE2", "string");
        	this.dsUpdate.addColumn("DS_FILE3", "string");
        	this.dsUpdate.addColumn("PATH_FILE3", "string");
        	this.dsUpdate.addColumn("DS_FILE4", "string");
        	this.dsUpdate.addColumn("PATH_FILE4", "string");
        	this.dsUpdate.addColumn("ID_UPDATE", "string");

        	this.dsDelete = new Dataset();
        	this.dsDelete.addColumn("CD_SITE", "string");
        	this.dsDelete.addColumn("DT_INS", "string");
        }

        /************************************************************************
         * 컨트롤 이벤트
         ************************************************************************/
         /*
          *	조회 버튼
          */
        this.fnSelect = function() {
        	if (!this.fnSelectValidate()) return false;

        	// 파일 설정
        	this.FileUpTransfer00.clearFileList();

        	this.gfnGridBeforeSelect(this.dxGrid);

        	this.dsSelect.clearData();
        	this.dsSelect.addRow();
        	this.dsSelect.setColumn(0, "DT_MONTH", this.dsSearch.getColumn(0, "DT_MONTH"));
        	this.dsSelect.setColumn(0, "CD_SITE", this.dsSearch.getColumn(0, "CD_SITE"));

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
        	var nrow = this.gfnGridAdd(this.dxGrid);
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
        	if (!this.gfnGridValidate(this.dxGrid)) return;

        	this.dxGrid.updateToDataset();

        	this.dsInsert.clearData();
        	this.dsUpdate.clearData();
        	this.dsDelete.clearData();

        	for (var i = 0; i < this.dsList.rowcount; i++) {
        		var flag = this.gfnGetFlag(this.dsList, i);
        		switch(flag) {
        			case "I":
        				var nrow = this.dsInsert.addRow();

        				this.dsInsert.setColumn(nrow, "CD_SITE", this.dsList.getColumn(i, "CD_SITE"));
        				this.dsInsert.setColumn(nrow, "DT_INS", nexacro.replaceAll(this.dsList.getColumn(i, "DT_INS"), "-", ""));
        				this.dsInsert.setColumn(nrow, "DS_FILE1", this.dsList.getColumn(i, "DS_FILE1"));
        				this.dsInsert.setColumn(nrow, "PATH_FILE1", !this.gfnIsNull(this.dsList.getColumn(i, "TMP_FILE1")) && this.gfnNvl(this.dsList.getColumn(i, "TMP_FILE1")) != "D"
        															? "DB/DBS/" + this.dsList.getColumn(i, "CD_SITE") + "/" + nexacro.replaceAll(this.dsList.getColumn(i, "DT_INS"), "-", "") + "/" + this.dsList.getColumn(i, "TMP_FILE1")
        															: this.dsList.getColumn(i, "PATH_FILE1"));
        				this.dsInsert.setColumn(nrow, "DS_FILE2", this.dsList.getColumn(i, "DS_FILE2"));
        				this.dsInsert.setColumn(nrow, "PATH_FILE2", !this.gfnIsNull(this.dsList.getColumn(i, "TMP_FILE2")) && this.gfnNvl(this.dsList.getColumn(i, "TMP_FILE2")) != "D"
        															? "DB/DBS/" + this.dsList.getColumn(i, "CD_SITE") + "/" + nexacro.replaceAll(this.dsList.getColumn(i, "DT_INS"), "-", "") + "/" + this.dsList.getColumn(i, "TMP_FILE2")
        															: this.dsList.getColumn(i, "PATH_FILE2"));
        				this.dsInsert.setColumn(nrow, "DS_FILE3", this.dsList.getColumn(i, "DS_FILE3"));
        				this.dsInsert.setColumn(nrow, "PATH_FILE3", !this.gfnIsNull(this.dsList.getColumn(i, "TMP_FILE3")) && this.gfnNvl(this.dsList.getColumn(i, "TMP_FILE3")) != "D"
        															? "DB/DBS/" + this.dsList.getColumn(i, "CD_SITE") + "/" + nexacro.replaceAll(this.dsList.getColumn(i, "DT_INS"), "-", "") + "/" + this.dsList.getColumn(i, "TMP_FILE3")
        															: this.dsList.getColumn(i, "PATH_FILE3"));
        				this.dsInsert.setColumn(nrow, "DS_FILE4", this.dsList.getColumn(i, "DS_FILE4"));
        				this.dsInsert.setColumn(nrow, "PATH_FILE4", !this.gfnIsNull(this.dsList.getColumn(i, "TMP_FILE4")) && this.gfnNvl(this.dsList.getColumn(i, "TMP_FILE4")) != "D"
        															? "DB/DBS/" + this.dsList.getColumn(i, "CD_SITE") + "/" + nexacro.replaceAll(this.dsList.getColumn(i, "DT_INS"), "-", "") + "/" + this.dsList.getColumn(i, "TMP_FILE4")
        															: this.dsList.getColumn(i, "PATH_FILE4"));
        				this.dsInsert.setColumn(nrow, "ID_INSERT", this.AuthClient.ID_USER);
        				break;
        			case "U":
        				var nrow = this.dsUpdate.addRow();
        				this.dsUpdate.setColumn(nrow, "CD_SITE", this.dsList.getColumn(i, "CD_SITE"));
        				this.dsUpdate.setColumn(nrow, "DT_INS", nexacro.replaceAll(this.dsList.getColumn(i, "DT_INS"), "-", ""));
        				this.dsUpdate.setColumn(nrow, "DS_FILE1", this.dsList.getColumn(i, "TMP_FILE1") == "D" ? "" : this.dsList.getColumn(i, "DS_FILE1"));
        				this.dsUpdate.setColumn(nrow, "PATH_FILE1", this.dsList.getColumn(i, "TMP_FILE1") == "D" ? "" :
        															(!this.gfnIsNull(this.dsList.getColumn(i, "TMP_FILE1"))
        															? "DB/DBS/" + this.dsList.getColumn(i, "CD_SITE") + "/" + nexacro.replaceAll(this.dsList.getColumn(i, "DT_INS"), "-", "") + "/" + this.dsList.getColumn(i, "TMP_FILE1")
        															: this.dsList.getColumn(i, "PATH_FILE1")));
        				this.dsUpdate.setColumn(nrow, "DS_FILE2", this.dsList.getColumn(i, "TMP_FILE2") == "D" ? "" : this.dsList.getColumn(i, "DS_FILE2"));
        				this.dsUpdate.setColumn(nrow, "PATH_FILE2", this.dsList.getColumn(i, "TMP_FILE2") == "D" ? "" :
        															(!this.gfnIsNull(this.dsList.getColumn(i, "TMP_FILE2"))
        															? "DB/DBS/" + this.dsList.getColumn(i, "CD_SITE") + "/" + nexacro.replaceAll(this.dsList.getColumn(i, "DT_INS"), "-", "") + "/" + this.dsList.getColumn(i, "TMP_FILE2")
        															: this.dsList.getColumn(i, "PATH_FILE2")));
        				this.dsUpdate.setColumn(nrow, "DS_FILE3", this.dsList.getColumn(i, "TMP_FILE3") == "D" ? "" : this.dsList.getColumn(i, "DS_FILE3"));
        				this.dsUpdate.setColumn(nrow, "PATH_FILE3", this.dsList.getColumn(i, "TMP_FILE3") == "D" ? "" :
        															(!this.gfnIsNull(this.dsList.getColumn(i, "TMP_FILE3"))
        															? "DB/DBS/" + this.dsList.getColumn(i, "CD_SITE") + "/" + nexacro.replaceAll(this.dsList.getColumn(i, "DT_INS"), "-", "") + "/" + this.dsList.getColumn(i, "TMP_FILE3")
        															: this.dsList.getColumn(i, "PATH_FILE3")));
        				this.dsUpdate.setColumn(nrow, "DS_FILE4", this.dsList.getColumn(i, "TMP_FILE4") == "D" ? "" : this.dsList.getColumn(i, "DS_FILE4"));
        				this.dsUpdate.setColumn(nrow, "PATH_FILE4", this.dsList.getColumn(i, "TMP_FILE4") == "D" ? "" :
        															(!this.gfnIsNull(this.dsList.getColumn(i, "TMP_FILE4"))
        															? "DB/DBS/" + this.dsList.getColumn(i, "CD_SITE") + "/" + nexacro.replaceAll(this.dsList.getColumn(i, "DT_INS"), "-", "") + "/" + this.dsList.getColumn(i, "TMP_FILE4")
        															: this.dsList.getColumn(i, "PATH_FILE4")));
        				this.dsUpdate.setColumn(nrow, "ID_UPDATE", this.AuthClient.ID_USER);
        				break;
        			case "D":
        				var nrow = this.dsDelete.addRow();
        				this.dsDelete.setColumn(nrow, "CD_SITE", this.dsList.getColumn(i, "CD_SITE"));
        				this.dsDelete.setColumn(nrow, "DT_INS", this.dsList.getColumn(i, "DT_INS"));
        				break;
        		}
        	}

        	if (this.dsInsert.rowcount == 0 && this.dsUpdate.rowcount == 0 && this.dsDelete.rowcount == 0) return;

        	var strSvcId    = "save";
        	var strSvcType  = "save";
        	var inProc		= "_dsProc";
        	var inData      = "insert=dsInsert update=dsUpdate delete=dsDelete";
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
        	}
        	else if (svcID == "save") {
        		if (errorCode == 0) {
        			this.FormBtns.Select.click();
        		}
        		else {
        			this.gfnAlert(errorMsg);
        		}
        	}
        	else if (svcID == "deletefile") {
        		this.fnSave();
        	}
        }

        /************************************************************************
         * 코드파인드 이벤트
         ************************************************************************/
        this.fnBeforeUserDataSetParam = function(id, dsUserParam, nrow) {
        	if (id == "ccfCD_SITE") {
        		dsUserParam.setColumn(nrow, "CD_AUTHDEPT", this.AuthClient.CD_DEPT);
        	}

        	return true;
        }

        /************************************************************************
         * 그리드 이벤트
         ************************************************************************/
        this.fnGrid_BeforeUserDataSetParam = function(id, dsUserParam, nrow){
        	switch(id) {
        		case "DBX_CFMAINSITE":
        			dsUserParam.setColumn(nrow, "CD_AUTHDEPT", this.AuthClient.CD_DEPT);
        			break;
        		default:
        			break;
        	}
        	return true;
        };

        this.fnGrid_EnterCell = function(obj, row, cell) {
        	var colnm = this.gfnGridGetBindColumnNameByIndex(this.dxGrid, cell);

        	switch (colnm) {
        		case "DS_FILE1":
        		case "DS_FILE2":
        		case "DS_FILE3":
        		case "DS_FILE4":
        			if (this.gfnGetFlag(this.dsList, row) != "I") {
        				if (this.gfnNvl(this.dsList.getColumn(row, colnm)) != "") {
        					return false;
        				}
        			}
        			break;
        	}
        }

        this.dxGrid_oncelldblclick = function(obj,e) {
        	var colnm = this.gfnGridGetBindColumnNameByIndex(this.dxGrid,  e.cell);
        	if (this.gfnGetFlag(this.dsList, e.row) == "I" || this.gfnIsNull(this.dsList.getColumn(e.row, colnm))) return;

        	if (colnm == "DS_FILE1" || colnm == "DS_FILE2" || colnm == "DS_FILE3" || colnm == "DS_FILE4"
        		|| colnm == "PATH_FILE1" || colnm == "PATH_FILE2" || colnm == "PATH_FILE3" || colnm == "PATH_FILE4") {
        		var no = colnm.substr(colnm.length - 1);

        		if (!this.gfnIsNull(this.dsList.getColumn(e.row, "TMP_FILE"+no))) return;

        		this.fnDownload(no);
        	}
        }

        this.fnGrid_ExpandUp = function(obj, e) {
        	var colnm = this.gfnGridGetBindColumnNameByIndex(obj, e.cell);
        	if (this.gfnGetFlag(this.dsList, e.row) == "I") {
        		this.gfnAlert("저장 후 파일첨부 진행.");
        		return false;
        	}

        	if (colnm == "PATH_FILE1" || colnm == "PATH_FILE2" || colnm == "PATH_FILE3" || colnm == "PATH_FILE4") {
        		this.cCol = colnm.substr(colnm.length - 1);

        		this.filepath = "/DB/DBS/" + this.dsList.getColumn(e.row, "CD_SITE") + "/" + nexacro.replaceAll(this.dsList.getColumn(e.row, "DT_INS"), "-", "") + "/" ;

        		this.fdg00.row = e.row;
        		this.fdg00.open('FileOpen', FileDialog.LOAD);
        	}
        }


        this.fdg00_onclose = function(obj,e) {
        	this.addFileList(obj, e.virtualfiles);
        };

        this.addFileList = function(obj, filelist) {
        	this.FileList = filelist;
        	if (filelist.length > 0) {
        		var vFile;
        		for (var i = 0; i < filelist.length; i++) {
        			vFile = filelist[i];
        			vFile.row = obj.row;
        			vFile.addEventHandler("onsuccess", this.FileList_onsuccess, this);
        			vFile.addEventHandler("onerror", this.FileList_onerror , this);

        			vFile.open(null, 1);
        		}
        	}
        }

        this.FileList_onsuccess = function(obj, e) {
        	switch (e.reason) {
        		case 1:
        			obj.getFileSize();
        			break;
        		case 9:
        			var row = obj.row;
        			this.dsList.setColumn(row, "DS_FILE" + this.cCol, obj.filename);
        			this.dsList.setColumn(row, "TMP_FILE" + this.cCol, obj.filename);
        			this.FileUpTransfer00.addFile(obj.filename, obj);

         			this._waitCursor(true);
         			var sUploadUrl = this.fileConfig.host + this.fileConfig.uploadUrl;
         			this.FileUpTransfer00.setPostData("path", this.filepath);
         			this.FileUpTransfer00.upload(sUploadUrl);
        			break;
        	}
        }

        this.FileList_onerror = function(obj, e) {
        	trace("errortype: "+e.errortype);
        	trace("errormsg: "+e.errormsg);
        	trace("statuscode: "+e.statuscode);
        }

        this.FileUpTransfer00_onprogress = function(obj,e) {
        	console.log("FileUpTransfer00_onprogress: " + e.loaded+"/"+e.total);
        };

        this.FileUpTransfer00_onsuccess = function(obj,e) {
        	this._waitCursor(false);
        	console.log("FileUpTransfer00_onsuccess: " + e.code + "/" + e.message);
        	if (e.code == 0) {
        		if (e.datasets.length > 0) {
        			for(var i = 0; i < e.datasets[0].rowcount; i++) {
        				var row = obj.filelist[i].row;
        			}
        			this.fnSave();
        		}
        	}
        };

        this.FileUpTransfer00_onerror = function(obj,e) {
        	this._waitCursor(false);
        	if(e.errormsg.indexOf("maxsize") > -1) {
        		this.gfnAlert("첨부파일 허용용량("+ this.gfnCutFileSize(nexacro.toNumber(e.errormsg.split(':')[1])) + ")을 초과할 수 없습니다.");
        	} else {
        		this.gfnAlert(e.errormsg);
        	}
        };

        this.fnDownload = function(no) {
        	if(!this.gfnIsNull(this.gfnGetFlag(this.dsList, this.dsList.rowposition))) return;

        	var sFilename = this.dsList.getColumn(this.dsList.rowposition, "DS_FILE"+no);
        	var sFilepath = this.dsList.getColumn(this.dsList.rowposition, "PATH_FILE"+no);
        	sFilepath = sFilepath.replace(sFilename, "");
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

        this.fnDelFile1 = function(obj,e) {
        	this.dsList.setColumn(this.dsList.rowposition, "DS_FILE1", "");
        	this.dsList.setColumn(this.dsList.rowposition, "TMP_FILE1", "D");
        	this.dsList.setColumn(this.dsList.rowposition, this.ucFlag, "U");

        	this.fnDeleteFile("1");
        }

        this.fnDelFile2 = function(obj,e) {
        	this.dsList.setColumn(this.dsList.rowposition, "DS_FILE2", "");
        	this.dsList.setColumn(this.dsList.rowposition, "TMP_FILE2", "D");
        	this.dsList.setColumn(this.dsList.rowposition, this.ucFlag, "U");

        	this.fnDeleteFile("2");
        }

        this.fnDelFile3 = function(obj,e) {
        	this.dsList.setColumn(this.dsList.rowposition, "DS_FILE3", "");
        	this.dsList.setColumn(this.dsList.rowposition, "TMP_FILE3", "D");
        	this.dsList.setColumn(this.dsList.rowposition, this.ucFlag, "U");

        	this.fnDeleteFile("3");
        }

        this.fnDelFile4 = function(obj,e) {
        	this.dsList.setColumn(this.dsList.rowposition, "DS_FILE4", "");
        	this.dsList.setColumn(this.dsList.rowposition, "TMP_FILE4", "D");
        	this.dsList.setColumn(this.dsList.rowposition, this.ucFlag, "U");

        	this.fnDeleteFile("4");
        }

        this.fnDeleteFile = function(no) {
        	var sFilepath = this.dsList.getColumn(this.dsList.rowposition, "PATH_FILE"+no);
        	var sFilename = sFilepath.substr(sFilepath.lastIndexOf("/")+1);
        	sFilepath = sFilepath.replace(sFilename, "");

        	this.dsDeleteFile.clearData();
            this.dsDeleteFile.addRow();
            this.dsDeleteFile.setColumn(0, "filepath", sFilepath);
            this.dsDeleteFile.setColumn(0, "filename", sFilename);

            // 서버 파일 삭제
            if (this.dsDeleteFile.rowcount > 0) {
                var strSvcId = "deletefile";
                var strSvcType = "file/deleteFile";
                var inProc = "";
                var inData = "input=dsDeleteFile";
                var outData = "";
                var strArg = "";
                var callBackFnc = "fnCallback";

                this.gfnTransaction(strSvcId, // transaction을 구분하기 위한 svc id값
                    strSvcType, // transaction을 요청할 구분
                    inProc, // Procedure 정보 Dataset 이름
                    inData, // 입력값으로 보낼 dataset id , a=b형태로 실제이름과 입력이름을 매칭
                    outData, // 처리결과값으로 받을 dataset id, a=b형태로 실제이름과 입력이름을 매칭
                    strArg, // 입력갑스로 보낼 arguments, strFormData="20120607"
                    callBackFnc); // 통신방법 정의 [생략가능]

            }
        }

        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.form_onload,this);
            this.dsSearch.addEventHandler("onvaluechanged",this.dsSearch_onvaluechanged,this);
            this.fdg00.addEventHandler("onclose",this.fdg00_onclose,this);
            this.FileUpTransfer00.addEventHandler("onprogress",this.FileUpTransfer00_onprogress,this);
            this.FileUpTransfer00.addEventHandler("onsuccess",this.FileUpTransfer00_onsuccess,this);
            this.FileUpTransfer00.addEventHandler("onerror",this.FileUpTransfer00_onerror,this);
        };
        this.loadIncludeScript("DBS_ETC_FILES.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
