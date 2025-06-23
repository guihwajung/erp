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
            this.set_titletext("New Form");
            if (Form == this.constructor)
            {
                this._setFormPosition(1280,720);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("dsList", this);
            obj._setContents("");
            this.addChild(obj.name, obj);


            obj = new Dataset("_dsProc", this);
            obj._setContents("<ColumnInfo><Column id=\"TARGET\" type=\"STRING\" size=\"256\"/><Column id=\"SP\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"TARGET\">select</Col><Col id=\"SP\">DCCPR_HD_CONTRACTFILE_SELECT</Col></Row><Row><Col id=\"TARGET\">save</Col><Col id=\"SP\">DCCPR_HD_CONTRACTFILE_SAVE</Col></Row><Row><Col id=\"SP\">DCCPR_CONTFILE_INIT_INSERT</Col><Col id=\"TARGET\">exec</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsSearch", this);
            obj._setContents("<ColumnInfo><Column id=\"CD_SITE\" type=\"STRING\" size=\"256\"/><Column id=\"NO_CONT\" type=\"STRING\" size=\"256\"/><Column id=\"SN_SEQ\" type=\"STRING\" size=\"256\"/><Column id=\"YN_ICRS\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"YN_ICRS\"/></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new FileDialog("fdg00", this);
            this.addChild(obj.name, obj);


            obj = new FileUpTransfer("FileUpTransfer00", this);
            this.addChild(obj.name, obj);


            obj = new FileDownTransfer("FileDownTransfer00", this);
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Div("divSearch","0.0","10.0",null,"46.0","0",null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_cssclass("div_SEARCH_Bg");
            obj.set_formscrolltype("none");
            this.addChild(obj.name, obj);

            obj = new Static("staCD_SITE","0.0","10.0","92.0","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("1");
            obj.set_text("현장코드");
            obj.set_cssclass("sta_WF_SchLabelE");
            this.divSearch.addChild(obj.name, obj);

            obj = new Div("ccfCD_SITE","staCD_SITE:0.0","10.0","250","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.getSetter("CodeFindName").set("DZX_CFSITE");
            obj.getSetter("CDTextWidth").set("80");
            obj.set_taborder("1");
            obj.set_url("cmm::cmmCodeFind.xfdl");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("sta01","ccfCD_SITE:0.0","10.0","92.0","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("2");
            obj.set_text("계약번호");
            obj.set_cssclass("sta_WF_SchLabelE");
            this.divSearch.addChild(obj.name, obj);

            obj = new Div("ccfNO_CONT","sta01:0.0","10.0","250","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.getSetter("CodeFindName").set("DCX_CFCONTRACT_01");
            obj.getSetter("CDTextWidth").set("100");
            obj.set_taborder("3");
            obj.set_url("cmm::cmmCodeFind.xfdl");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("sta00","ccfNO_CONT:0.0","10.0","92.0","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("4");
            obj.set_text("차수");
            obj.set_cssclass("sta_WF_SchLabelE");
            this.divSearch.addChild(obj.name, obj);

            obj = new Div("ccfSN_SEQ","sta00:0.0","10.0","250","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.getSetter("CodeFindName").set("DCX_CFSNSEQ_01");
            obj.getSetter("CDTextWidth").set("80");
            obj.set_taborder("5");
            obj.set_url("cmm::cmmCodeFind.xfdl");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("staYN_ICRS","ccfSN_SEQ:0.0","10.0","92.0","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("6");
            obj.set_text("증액/감액 통보서 선택");
            obj.set_cssclass("sta_WF_SchLabel");
            this.divSearch.addChild(obj.name, obj);

            obj = new Combo("cboYN_ICRS","staYN_ICRS:0.0","10.0","122","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("7");
            obj.set_codecolumn("codecolumn");
            obj.set_datacolumn("datacolumn");
            var divSearch_form_cboYN_ICRS_innerdataset = new nexacro.NormalDataset("divSearch_form_cboYN_ICRS_innerdataset", obj);
            divSearch_form_cboYN_ICRS_innerdataset._setContents("<ColumnInfo><Column id=\"codecolumn\" size=\"256\"/><Column id=\"datacolumn\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"codecolumn\"/><Col id=\"datacolumn\">선택 없음</Col></Row><Row><Col id=\"codecolumn\">Y</Col><Col id=\"datacolumn\">증액통보서</Col></Row><Row><Col id=\"codecolumn\">N</Col><Col id=\"datacolumn\">감액통보서</Col></Row></Rows>");
            obj.set_innerdataset(divSearch_form_cboYN_ICRS_innerdataset);
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
            obj = new BindItem("item0","divSearch.form.ccfCD_SITE.form.CDTextBox","value","dsSearch","CD_SITE");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item1","divSearch.form.ccfNO_CONT.form.CDTextBox","value","dsSearch","NO_CONT");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item2","divSearch.form.ccfSN_SEQ.form.CDTextBox","value","dsSearch","SN_SEQ");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item3","divSearch.form.cboYN_ICRS","value","dsSearch","YN_ICRS");
            this.addChild(obj.name, obj);
            obj.bind();
            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {
            this._addPreloadList("fdl","cmm::cmmCodeFind.xfdl");
        };
        
        // User Script
        this.registerScript("DCC_CONTRACTFILE.xfdl", function() {
        this.objApp = this.gfnGetApplication();

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

        	// 타화면에서 오픈시 넘어오는 파라미터 처리
        	if(!this.gfnIsNull(this.getOwnerFrame().CD_SITE) && !this.gfnIsNull(this.getOwnerFrame().NO_CONT) && !this.gfnIsNull(this.getOwnerFrame().SN_SEQ)) {
        		this.dsSearch.setColumn(0, "CD_SITE", this.getOwnerFrame().CD_SITE);
        		this.dsSearch.setColumn(0, "NO_CONT", this.getOwnerFrame().NO_CONT);
        		this.dsSearch.setColumn(0, "SN_SEQ", this.getOwnerFrame().SN_SEQ);

        		if(this.getOwnerFrame().POPUPTYPE != "READONLY")
        		{
        			this.ccfCD_SITE.form.fnCodeFindLoad();
        			this.ccfNO_CONT.form.fnCodeFindLoad();
        			this.ccfSN_SEQ.form.fnCodeFindLoad();
        		}

        		this.FormBtns.Select.click();
        	}

        	if(!this.gfnIsNull(this.getOwnerFrame().DS_PARAM && !this.gfnIsNull(this.getOwnerFrame().TY_CONT))) {
        		if(!(this.getOwnerFrame().DS_PARAM == "SU" && (this.getOwnerFrame().TY_CONT == "03" || this.getOwnerFrame().TY_CONT == "04" || this.getOwnerFrame().TY_CONT == "05" || this.getOwnerFrame().TY_CONT == "06"))) {
        			this.divSearch.form.staYN_ICRS.set_visible(false);
        			this.divSearch.form.cboYN_ICRS.set_visible(false);
        		}
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
        	this.btnCreate = this.gfnFormButtonAdd("btnCreate", "fnCreate");
        	this.btnAutoFile = this.gfnFormButtonAdd("btnAutoFile", "fnAutoFile");
        	this.btnOldAutoFileOpen = this.gfnFormButtonAdd("btnOldAutoFileOpen", "fnOldAutoFileOpen");
        	this.btnPdfCrt = this.gfnFormButtonAdd("btnPdfCrt", "fnPdfCrt");
        	this.btnPreviewContFile = this.gfnFormButtonAdd("btnPreviewContFile", "fnPreviewContFile");
        };

        /************************************************************************
         * 변수 선언
         ************************************************************************/
        this.fnSetVariable = function() {
        	this.ccfCD_SITE = this.divSearch.form.ccfCD_SITE;
        	this.ccfNO_CONT = this.divSearch.form.ccfNO_CONT;
        	this.ccfSN_SEQ = this.divSearch.form.ccfSN_SEQ;

        	this.dxGrid = this.divData.form.objGrid;
        };

        /************************************************************************
         * 이벤트 설정
         ************************************************************************/
        this.fnSetEvent = function() {
        	this.ccfNO_CONT.BeforeUserDataSetParam = "fnBeforeUserDataSetParam";
        	this.ccfSN_SEQ.BeforeUserDataSetParam = "fnBeforeUserDataSetParam";

        	// 그리드 초기화
        	this.gfnGridInit(this.dxGrid, this.dsList, "DC", "DCC_CONTRACTFILE");

        	var colFILE_SIZ = this.dxGrid.getBindCellIndex("body", "FILE_SIZ");
        	this.dxGrid.setCellProperty("body", colFILE_SIZ, "expr", "expr:FILE_SIZ==null?null:FILE_SIZ/1024");

        	this.dxGrid.ExpandUp = "fnGrid_ExpandUp";
        	this.dxGrid.addEventHandler("onselectchanged", this.fnGrid_RowCellChanged, this);
        	this.dxGrid.addEventHandler("oncelldblclick", this.dxGrid_oncelldblclick, this);
        };

        /************************************************************************
         * 파라미터 설정
         ************************************************************************/
        this.fnSetParameter = function() {
        	this.dsSelect = new Dataset();
        	this.dsSelect.addColumn("NO_CONT", "string");
        	this.dsSelect.addColumn("SN_SEQ", "string");

        	this.dsSave = new Dataset();
        	this.dsSave.addColumn("TY_SAVE", "string");
        	this.dsSave.addColumn("NO_CONT", "string");
        	this.dsSave.addColumn("SN_SEQ", "string");
        	this.dsSave.addColumn("SEQNO", "int");
        	this.dsSave.addColumn("ITEMNM", "string");
        	this.dsSave.addColumn("SIGN_YN", "string");
        	this.dsSave.addColumn("MANDATORY_YN", "string");
        	this.dsSave.addColumn("FORM_FILE_NO", "int");
        	this.dsSave.addColumn("FORM_FILE_YN", "string");
        	this.dsSave.addColumn("ADDFILE_NO", "int");
        	this.dsSave.addColumn("ADDFILE_SEQNO", "int");
        	this.dsSave.addColumn("FILE_NM", "string");
        	this.dsSave.addColumn("PATH_NM", "string");
        	this.dsSave.addColumn("FILE_SIZ", "int");
        	this.dsSave.addColumn("ATTR01", "string");
        	this.dsSave.addColumn("ATTR02", "string");
        	this.dsSave.addColumn("ATTR03", "string");
        	this.dsSave.addColumn("ATTR04", "string");
        	this.dsSave.addColumn("ATTR05", "string");
        	this.dsSave.addColumn("FILE_HASH", "string");
        	this.dsSave.addColumn("ID_USER", "string");

        	this.dsExec = new Dataset();
        	this.dsExec.addColumn("NO_CONT", "string");
        	this.dsExec.addColumn("SN_SEQ", "string");
        	this.dsExec.addColumn("ID_USER", "string");
        	this.dsExec.addColumn("YN_ICRS", "string");
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
        	this.filepath = "/CONT/" + this.dsSearch.getColumn(0, "CD_SITE") + "/" + this.dsSearch.getColumn(0, "NO_CONT") + "/" + "EQUIP/" + this.dsSearch.getColumn(0, "SN_SEQ");
        	//this.fileConfig.uploadUrl = this.fileConfig.uploadUrl + "?path=" + this.filepath;

        	this.gfnGridBeforeSelect(this.dxGrid);

        	this.dsSelect.clearData();
        	this.dsSelect.addRow();

        	this.dsSelect.setColumn(0, "NO_CONT", this.dsSearch.getColumn(0, "NO_CONT"));
        	this.dsSelect.setColumn(0, "SN_SEQ", this.dsSearch.getColumn(0, "SN_SEQ"));

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
        			case "U":
        				var nrow = this.dsSave.addRow();
        				this.dsSave.setColumn(nrow, "TY_SAVE", flag);
        				this.dsSave.setColumn(nrow, "NO_CONT", this.dsList.getColumn(i, "CONT_NO"));
        				this.dsSave.setColumn(nrow, "SN_SEQ", this.dsList.getColumn(i, "SN_SEQ"));
        				this.dsSave.setColumn(nrow, "SEQNO", this.dsList.getColumn(i, "SEQNO"));
        				this.dsSave.setColumn(nrow, "ITEMNM", this.dsList.getColumn(i, "ITEM_NM"));
        				this.dsSave.setColumn(nrow, "SIGN_YN", this.dsList.getColumn(i, "SIGN_YN"));
        				this.dsSave.setColumn(nrow, "MANDATORY_YN", this.dsList.getColumn(i, "MANDATORY_YN"));
        				this.dsSave.setColumn(nrow, "FORM_FILE_NO", this.dsList.getColumn(i, "FORM_FILE_NO"));
        				this.dsSave.setColumn(nrow, "FORM_FILE_YN", this.dsList.getColumn(i, "FORM_FILE_YN"));
        				this.dsSave.setColumn(nrow, "ADDFILE_NO", this.dsList.getColumn(i, "ADDFILE_NO"));
        				this.dsSave.setColumn(nrow, "ADDFILE_SEQNO", this.dsList.getColumn(i, "ADDFILE_SEQNO"));
        				this.dsSave.setColumn(nrow, "FILE_NM", this.dsList.getColumn(i, "FILE_NM"));
        				this.dsSave.setColumn(nrow, "PATH_NM", this.filepath);
        				this.dsSave.setColumn(nrow, "FILE_SIZ", this.dsList.getColumn(i, "FILE_SIZ"));
        				this.dsSave.setColumn(nrow, "ATTR01", "");
        				this.dsSave.setColumn(nrow, "ATTR02", "");
        				this.dsSave.setColumn(nrow, "ATTR03", "");
        				this.dsSave.setColumn(nrow, "ATTR04", "");
        				this.dsSave.setColumn(nrow, "ATTR05", "");
        				this.dsSave.setColumn(nrow, "FILE_HASH", this.dsList.getColumn(i, "FILE_HASH"));
        				this.dsSave.setColumn(nrow, "ID_USER", this.AuthClient.ID_USER);
        				break;
        			case "D":
        				var nrow = this.dsSave.addRow();
        				this.dsSave.setColumn(nrow, "TY_SAVE", flag);
        				this.dsSave.setColumn(nrow, "NO_CONT", this.dsList.getColumn(i, "CONT_NO"));
        				this.dsSave.setColumn(nrow, "SN_SEQ", this.dsList.getColumn(i, "SN_SEQ"));
        				this.dsSave.setColumn(nrow, "SEQNO", this.dsList.getColumn(i, "SEQNO"));
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
        	if (this.gfnIsNull(this.dsSearch.getColumn(0, "CD_SITE"))) {
        		validate = false;
        		// Alert후 실행할 처리
        		this.fnVaidateCallback = function() {
        			this.divSearch.form.ccfCD_SITE.form.CDTextBox.setFocus();
        		}
        		this.gfnAlert("현장코드를 입력하세요.", "fnVaidateCallback");
        	}else if (this.gfnIsNull(this.dsSearch.getColumn(0, "NO_CONT"))) {
        		validate = false;
        		// Alert후 실행할 처리
        		this.fnVaidateCallback = function() {
        			this.divSearch.form.ccfNO_CONT.form.CDTextBox.setFocus();
        		}
        		this.gfnAlert("계약번호를 입력하세요.", "fnVaidateCallback");
        	}else if (this.gfnIsNull(this.dsSearch.getColumn(0, "SN_SEQ"))) {
        		validate = false;
        		// Alert후 실행할 처리
        		this.fnVaidateCallback = function() {
        			this.divSearch.form.ccfSN_SEQ.form.CDTextBox.setFocus();
        		}
        		this.gfnAlert("차수를 입력하세요.", "fnVaidateCallback");
        	}
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

        		if(this.dsList.rowcount < 1)
        		{
        			this.btnCreate.set_enable(true);
        			this.btnAutoFile.set_enable(true);
        		}
        		else
        		{
        			this.fnBtnCheck(0);
        		}

        		// 2020.05.25
        		this.fnBtnCheckAll();

        		// 21.10.18 버튼컨트롤 추가
        		if(!this.gfnIsNull(this.getOwnerFrame().YN_EDITABLE) && this.getOwnerFrame().YN_EDITABLE != "Y") {
        			this.btnCreate.set_enable(false);
        			this.btnAutoFile.set_enable(false);
        		}
        	}
        	else if(svcID == "save") {
        		if (errorCode == 0) {
        			this.FormBtns.Select.click();
        		} else {
        			this.gfnAlert(errorMsg);
        		}
        	}
        	else if(svcID == "exec") {
        		if (errorCode == 0) {
        			var dsAutoForm = this.objApp.gdsAutoForm;
        			dsAutoForm.clearData();

        			var nrow = dsAutoForm.addRow();
        			dsAutoForm.setColumn(nrow, "TY_WORK", "C-01");
        			dsAutoForm.setColumn(nrow, "ATTR01", this.dsSearch.getColumn(0, "NO_CONT"));
        			dsAutoForm.setColumn(nrow, "ATTR02", this.dsSearch.getColumn(0, "SN_SEQ"));
        			dsAutoForm.setColumn(nrow, "ATTR03", this.dsSearch.getColumn(0, "YN_ICRS"));
        			dsAutoForm.setColumn(nrow, "ATTR04", "");
        			dsAutoForm.setColumn(nrow, "ATTR05", "");
        			dsAutoForm.setColumn(nrow, "ATTR06", "");
        			dsAutoForm.setColumn(nrow, "ID_USER", this.AuthClient.ID_USER);

        			this.gfnAutoFormHtml("fnAutoFile_Callback");	// callback 생략가능
        // 			this.gfnAlert("계약파일이 정상 초기화되었습니다.");
        // 			this.FormBtns.Select.click();
        		} else {
        			this.gfnAlert(errorMsg);
        		}
        	}
        }

        this.fnBtnCheckAll = function()
        {
        	this.fnBtnCheck(this.btnCreate, this.dsList);
        	this.fnBtnCheck(this.btnAutoFile, this.dsList);


        	if(this.getOwnerFrame().POPUPTYPE == "READONLY")
        	{
        		this.btnCreate.set_enable(false);
        		this.btnOldAutoFileOpen.set_enable(false);
        	}
        }

        /************************************************************************
         * 코드파인드 이벤트
         ************************************************************************/
        //코드파인드의 파라미터 값을 넘겨줄때 사용하는 함수
        this.fnBeforeUserDataSetParam = function(id, dsUserParam, nrow) {

        	if (id == "ccfNO_CONT") {
        		if (this.gfnIsNull(this.dsSearch.getColumn(0, "CD_SITE"))) {
         			this.gfnAlert("현장코드를 먼저 입력하세요.");
         			return false;
         		}

        		dsUserParam.setColumn(nrow, "CD_SITE", this.dsSearch.getColumn(0, "CD_SITE"));
        	}
        	else if (id == "ccfSN_SEQ"){
         		if (this.gfnIsNull(this.dsSearch.getColumn(0, "NO_CONT"))) {
         			this.gfnAlert("계약번호를 먼저 입력하세요.");
         			return false;
         		}

        		dsUserParam.setColumn(nrow, "VALUE1", this.dsSearch.getColumn(0, "NO_CONT"));
        	}

        	return true;
        }

        /************************************************************************
         * 그리드 이벤트
         ************************************************************************/
        this.dxGrid_oncelldblclick = function(obj,e)
        {
        	if(this.gfnGridGetBindColumnNameByIndex(obj, e.cell) == "FILE_NM") {
        		this.fnDownload();
        	}
        }

        this.fnGrid_ExpandUp = function(obj,e) {
        	var colnm = this.gfnGridGetBindColumnNameByIndex(obj, e.cell);
        	if(colnm == "FILE_NM") {
        		this.fdg00.row = e.row;
        		this.fdg00.open('FileOpen', FileDialog.LOAD);
        	}
        }


        this.fnGrid_RowCellChanged = function(obj,e)
        {
            if ((obj.oldrow > -1 && obj.oldrow == e.row)
        		|| (obj.oldrow == -1 && e.oldrow != e.row)) {

        		// this.fnBtnCheck(e.row);

        		obj.oldrow = -1;
        	}
        };


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
        			this.dsList.setColumn(row, "FILE_NM", obj.filename);
        			this.dsList.setColumn(row, "FILE_SIZ", null);
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
        	trace("FileUpTransfer00_onprogress: " + e.loaded+"/"+e.total);
        };

        this.FileUpTransfer00_onsuccess = function(obj,e)
        {
        	this._waitCursor(false);
        	trace("FileUpTransfer00_onsuccess: " + e.code + "/" + e.message);
        	if(e.code == 0) {
        		if(e.datasets.length > 0) {
        			for(var i = 0; i < e.datasets[0].rowcount; i++) {
        				var row = obj.filelist[i].row;
        				this.dsList.setColumn(row, "FILE_SIZ", e.datasets[0].getColumn(i, "filesize"));
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

        	var sFilename = this.dsList.getColumn(this.dsList.rowposition, "FILE_NM");
        	var sFilepath = this.dsList.getColumn(this.dsList.rowposition, "PATH_NM");
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
        	if(e.oldvalue != e.newvalue && e.columnid != "YN_ICRS") {
        		this.gfnSetFormStatus(this);	// 폼상태 초기화
        		this.gfnGridClear(this.dxGrid);
        	}
        };


         // 파일 버튼 클릭 이벤트
         this.fnCreate = function(obj,e) {
        	this.gfnConfirm("계약파일을 초기화 하시겠습니까?", "fnCreate_Confirm", "Cancel");
        }

        this.fnCreate_Confirm = function(strId, val) {
        	if(val == true) {
        		this.fnExec();
        	}
        }


        /*
         *	마감 or 마감취소 처리
         */
        this.fnExec = function() {

        	this.dsExec.clearData();

        	this.dsExec.addRow();

        	this.dsExec.setColumn(0, "NO_CONT", this.dsSearch.getColumn(0, "NO_CONT"));
        	this.dsExec.setColumn(0, "SN_SEQ", this.dsSearch.getColumn(0, "SN_SEQ"));
        	this.dsExec.setColumn(0, "ID_USER", this.AuthClient.ID_USER);
        	this.dsExec.setColumn(0, "YN_ICRS", this.dsSearch.getColumn(0, "YN_ICRS"));

        	if (this.dsExec.rowcount == 0) return;

        	var strSvcId    = "exec";
        	var strSvcType  = "save";
        	var inProc		= "_dsProc";
        	var inData      = "exec=dsExec";
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



        this.fnPdfCrt = function() {

        	// Global Dataset 사용이므로 반드시 clearData
        	var dsAutoForm = this.objApp.gdsAutoForm;
        	dsAutoForm.clearData();

        	var nrow = dsAutoForm.addRow();
        	dsAutoForm.setColumn(nrow, "TY_WORK", "C-01");
        	dsAutoForm.setColumn(nrow, "ATTR01", this.dsSearch.getColumn(0, "NO_CONT"));
        	dsAutoForm.setColumn(nrow, "ATTR02", this.dsSearch.getColumn(0, "SN_SEQ"));
        	dsAutoForm.setColumn(nrow, "ATTR03", this.dsSearch.getColumn(0, "YN_ICRS"));
        	dsAutoForm.setColumn(nrow, "ATTR04", "");
        	dsAutoForm.setColumn(nrow, "ATTR05", "");
        	dsAutoForm.setColumn(nrow, "ATTR06", "");
        	dsAutoForm.setColumn(nrow, "ID_USER", this.AuthClient.ID_USER);

        	this.gfnAutoFormHtml("fnAutoFile_Callback");	// callback 생략가능

        }


        this.fnAutoFile = function() {
        	if (!this.fnSelectValidate()) return false;

        	this.gfnConfirm("파일을 생성 하시겠습니까?", "fnAutoFile_Confirm");
        }

        this.fnAutoFile_Confirm = function(strId, val) {
        	if(val == true) {
        		// Global Dataset 사용이므로 반드시 clearData
        		var dsAutoForm = this.objApp.gdsAutoForm;
        		dsAutoForm.clearData();

        		var nrow = dsAutoForm.addRow();
        		dsAutoForm.setColumn(nrow, "TY_WORK", "C-01");
        		dsAutoForm.setColumn(nrow, "ATTR01", this.dsSearch.getColumn(0, "NO_CONT"));
        		dsAutoForm.setColumn(nrow, "ATTR02", this.dsSearch.getColumn(0, "SN_SEQ"));
        		dsAutoForm.setColumn(nrow, "ATTR03", this.dsSearch.getColumn(0, "YN_ICRS"));
        		dsAutoForm.setColumn(nrow, "ATTR04", "");
        		dsAutoForm.setColumn(nrow, "ATTR05", "");
        		dsAutoForm.setColumn(nrow, "ATTR06", "");
        		dsAutoForm.setColumn(nrow, "ID_USER", this.AuthClient.ID_USER);

        		this.gfnAutoFormHtml("fnAutoFile_Callback");	// callback 생략가능
        	}
        }

        this.fnAutoFile_Callback = function(svcID, errorCode, errorMsg, strArg) {
        	if(errorCode == 0) {
        		this.FormBtns.Select.click();
        	} else {
        		this.gfnAlert(errorMsg);
        	}
        }


        this.fnBtnCheck = function(row)
        {
        	if(this.dsList.getColumn(row, "YN_HQ_READONLY") == "Y")
        	{
        		this.btnCreate.set_enable(false);
        		this.btnAutoFile.set_enable(false);
        	}
        	else
        	{
        		this.btnCreate.set_enable(true);
        		this.btnAutoFile.set_enable(true);
        	}
        }

        this.fnOldAutoFileOpen = function()
        {
        	var param = {};
        	param.path = this.dsList.getColumn(this.dsList.rowposition, "PATH_NM");
        	param.fileName = this.dsList.getColumn(this.dsList.rowposition, "FILE_NM");

        	this.gfnFormOpen(this.FormInfo.CD_MODULE, "DCC_CONTRACTOLDFILE_VIEWER", "", param, 800, 800);
        }

        this.fnPreviewContFile = function() {
        	if (!this.gfnGridIsRow(this.dxGrid)) { return false; }

        	var NO_CONT = this.dsSearch.getColumn(0, "NO_CONT");
        	var SN_SEQ = this.dsSearch.getColumn(0, "SN_SEQ");

        	//https://erp.dsmec.com/report/previewContfile.do
        	window.open("https://erp.dsmec.com/report/previewContfile.do?NO_CONT=" + NO_CONT + "&SN_SEQ=" + SN_SEQ);
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
        this.loadIncludeScript("DCC_CONTRACTFILE.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
