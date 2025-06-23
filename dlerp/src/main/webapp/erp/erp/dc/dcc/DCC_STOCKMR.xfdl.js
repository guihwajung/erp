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
            obj._setContents("<ColumnInfo><Column id=\"TARGET\" type=\"STRING\" size=\"256\"/><Column id=\"SP\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"TARGET\">select</Col><Col id=\"SP\">DCCPR_STOCK_SELECT</Col></Row><Row><Col id=\"TARGET\">insert</Col><Col id=\"SP\">DCCPR_STOCK_INSERT</Col></Row><Row><Col id=\"TARGET\">update</Col><Col id=\"SP\">DCCPR_STOCK_UPDATE</Col></Row><Row><Col id=\"TARGET\">delete</Col><Col id=\"SP\">DCCPR_STOCK_DELETE</Col></Row><Row><Col id=\"TARGET\">transureReq</Col><Col id=\"SP\">DCCPR_TRANSURE_CONT_INSERT</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsSearch", this);
            obj._setContents("<ColumnInfo><Column id=\"CD_SITE\" type=\"STRING\" size=\"256\"/><Column id=\"NO_CONT\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"CD_SITE\"/><Col id=\"NO_CONT\"/></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new FileUpTransfer("FileUpTransfer00", this);
            this.addChild(obj.name, obj);


            obj = new FileDownTransfer("FileDownTransfer00", this);
            this.addChild(obj.name, obj);


            obj = new FileDialog("fdg00", this);
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Div("divSearch","0.0","10.0",null,"46.0","0",null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_cssclass("div_SEARCH_Bg");
            obj.set_formscrolltype("none");
            this.addChild(obj.name, obj);

            obj = new Static("sta02","0.0","10.0","92.0","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("0");
            obj.set_text("현장코드");
            obj.set_cssclass("sta_WF_SchLabelE");
            this.divSearch.addChild(obj.name, obj);

            obj = new Div("ccfCD_SITE","sta02:0.0","10.0","250","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.getSetter("CodeFindName").set("DZX_CFSITE");
            obj.getSetter("CDTextWidth").set("80");
            obj.set_taborder("1");
            obj.set_url("cmm::cmmCodeFind.xfdl");
            obj.set_text("");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("sta01","ccfCD_SITE:0.0","10.0","92.0","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("2");
            obj.set_text("계약번호");
            obj.set_textDecoration("none");
            obj.set_cssclass("sta_WF_SchLabel");
            this.divSearch.addChild(obj.name, obj);

            obj = new Div("ccfNO_CONT","sta01:0.0","10.0","250","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.getSetter("CDTextWidth").set("100");
            obj.set_taborder("3");
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
            obj = new BindItem("item0","divSearch.form.ccfCD_SITE.form.CDTextBox","value","dsSearch","CD_SITE");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item1","divSearch.form.ccfNO_CONT.form.CDTextBox","value","dsSearch","NO_CONT");
            this.addChild(obj.name, obj);
            obj.bind();
            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {
            this._addPreloadList("fdl","cmm::cmmCodeFind.xfdl");
        };
        
        // User Script
        this.registerScript("DCC_STOCKMR.xfdl", function() {
        this.objApp = this.gfnGetApplication();
        this.setTransure = true;
        this._READONLY = "";

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
        	if(!this.gfnIsNull(this.getOwnerFrame().CD_SITE) && !this.gfnIsNull(this.getOwnerFrame().NO_CONT)) {
        		this.dsSearch.setColumn(0, "CD_SITE", this.getOwnerFrame().CD_SITE);
        		this.divSearch.form.ccfCD_SITE.form.DSTextBox.set_value(this.getOwnerFrame().DS_SITE);
        		this.dsSearch.setColumn(0, "NO_CONT", this.getOwnerFrame().NO_CONT);
        		this.divSearch.form.ccfNO_CONT.form.DSTextBox.set_value(this.getOwnerFrame().DS_CONT);

        		this.FormBtns.Select.click();
        	}

        	if(this.getOwnerFrame().POPUPTYPE == "READONLY")
        	{
        		this.btnStockRes.set_visible(false);
        		this.btnStockAcc.set_visible(false);
        		this.btnStockDes.set_visible(false);
        		//this.btnStockView.set_visible(false);

        		this._READONLY = "Y";
        	}
        };

        /************************************************************************
         * 버튼 설정 : 화면(Tab) 전환시 마다 호출
         * 서브버튼 사용 및 공통버튼 강제 제어시 여기서 처리
         ************************************************************************/
        this.fnSetButton = function() {
        	// Select, Add, Del, Save, Excel, Print
        	// SubSelect, SubAdd, SubDel, SuubSave, SubExcel
        	//this.FormBtns.Select.set_enable(false);

        	// 21.10.18 버튼컨트롤 추가 -> 22.01.20 계약완료 후에도 수정 가능으로 변경
        // 	if(!this.gfnIsNull(this.getOwnerFrame().YN_EDITABLE) && this.getOwnerFrame().YN_EDITABLE != "Y") {
        // 		this.divTopBtn.set_visible(false);
        // 	}

        	//22.02.22 현장권한일때 수정 안되게 변경
        	var cd_role = this.FormInfo.CD_ROLE;
        	if(cd_role == "R51")
        	{
        		this.divTopBtn.set_visible(false);
        	}
        }

        /************************************************************************
         * 확장 버튼 : 화면별 버튼 설정 ID, function 연결 (화면버튼관리)
         ************************************************************************/
        this.fnSetExtendButton = function() {
        // 	this.btnStockReq  = this.gfnFormButtonAdd("btnStockReq", "fnStockReq");
        // 	this.btnStockReq  = this.gfnFormButtonAdd("btnStockCan", "fnStockCan");
        	this.btnStockRes  = this.gfnFormButtonAdd("btnStockRes", "fnStockRes");
        	this.btnStockAcc  = this.gfnFormButtonAdd("btnStockAcc", "fnStockAcc");
        	this.btnStockDes  = this.gfnFormButtonAdd("btnStockDes", "fnStockDes");
        //	this.btnStockApp  = this.gfnFormButtonAdd("btnStockApp", "fnStockApp");
        	this.btnStockView = this.gfnFormButtonAdd("btnStockView", "fnStockView");
        };

        /************************************************************************
         * 변수 선언
         ************************************************************************/
        this.fnSetVariable = function() {
        	this.ccfCD_SITE = this.divSearch.form.ccfCD_SITE;
        	this.ccfNO_CONT = this.divSearch.form.ccfNO_CONT;
        	this.dxGrid = this.divData.form.objGrid;
        };

        /************************************************************************
         * 이벤트 설정
         ************************************************************************/
        this.fnSetEvent = function() {
        	this.ccfCD_SITE.AfterCDTextChanged = "fnAfterCDTextChanged";

        	this.ccfNO_CONT.CodeFindName = "DCX_CFCONTRACT_01";	// 계약번호
        	this.ccfNO_CONT.BeforeUserDataSetParam = "fnBeforeUserDataSetParam";

        	// 그리드 초기화
        	this.gfnGridInit(this.dxGrid, this.dsList, "DC", "DCC_STOCKMR");

        	// 그리드 코드파인드 설정
        	this.dxGrid.BeforeUserDataSetParam = "fnGrid_BeforeUserDataSetParam";

        	this.dxGrid.ExpandUp = "fnGrid_ExpandUp";
        	this.dxGrid.addEventHandler("oncelldblclick", this.dxGrid_oncelldblclick, this);
        	this.dxGrid.addEventHandler("onselectchanged", this.dxGrid_oncellclick, this);
        	this.dxGrid.EnterCell = "fnGrid_EnterCell";
        	// 그리드 onkeyup 이벤트
        	//this.dxGrid.addEventHandler("onkeyup", this.fnGrid_OnKeyUp, this);
        };

        /************************************************************************
         * 파라미터 설정
         ************************************************************************/
        this.fnSetParameter = function() {

        	this.dsSelect = new Dataset();
        	this.dsSelect.addColumn("NO_CONT", "string");
        	this.dsSelect.addColumn("SN_SEQ", "string");

        	this.dsInsert = new Dataset();
        	this.dsInsert.addColumn("NO_CONT", "string");
        	this.dsInsert.addColumn("SN_SEQ", "string");
        	this.dsInsert.addColumn("TY_STOCK", "string");
        	this.dsInsert.addColumn("NO_STOCK", "string");
        	this.dsInsert.addColumn("DS_STOCKKIND", "string");
        	this.dsInsert.addColumn("AM_GUARANTEE", "bigdecimal");
        	this.dsInsert.addColumn("AM_GUARANTEE2", "bigdecimal");
        	this.dsInsert.addColumn("DT_RECEIPT", "string");
        	this.dsInsert.addColumn("DT_MANRYO", "string");
        	this.dsInsert.addColumn("DT_PAYMENT", "string");
        	this.dsInsert.addColumn("DT_PUBLICATION", "string");
        	this.dsInsert.addColumn("TY_PUBLICATION", "string");
        	this.dsInsert.addColumn("OR_PUBLICATION", "string");
        	this.dsInsert.addColumn("NO_PUBLICATION", "string");
        	this.dsInsert.addColumn("DT_INPUT", "string");
        	this.dsInsert.addColumn("RM_BIGO", "string");
        	this.dsInsert.addColumn("YN_REQUIRE", "string");
        	this.dsInsert.addColumn("YN_APPROVE", "string");
        	this.dsInsert.addColumn("YN_ONLINE", "string");
        	this.dsInsert.addColumn("RT_RATE", "bigdecimal");
        	this.dsInsert.addColumn("ID_USER", "string");
        	this.dsInsert.addColumn("DS_FILEPATH", "string");

        	this.dsUpdate = new Dataset();
        	this.dsUpdate.addColumn("NO_CONT", "string");
        	this.dsUpdate.addColumn("SN_SEQ", "string");
        	this.dsUpdate.addColumn("NO_SEQ", "int");
        	this.dsUpdate.addColumn("TY_STOCK", "string");
        	this.dsUpdate.addColumn("NO_STOCK", "string");
        	this.dsUpdate.addColumn("DS_STOCKKIND", "string");
        	this.dsUpdate.addColumn("AM_GUARANTEE", "bigdecimal");
        	this.dsUpdate.addColumn("AM_GUARANTEE2", "bigdecimal");
        	this.dsUpdate.addColumn("DT_RECEIPT", "string");
        	this.dsUpdate.addColumn("DT_MANRYO", "string");
        	this.dsUpdate.addColumn("DT_PAYMENT", "string");
        	this.dsUpdate.addColumn("DT_PUBLICATION", "string");
        	this.dsUpdate.addColumn("TY_PUBLICATION", "string");
        	this.dsUpdate.addColumn("OR_PUBLICATION", "string");
        	this.dsUpdate.addColumn("NO_PUBLICATION", "string");
        	this.dsUpdate.addColumn("DT_INPUT", "string");
        	this.dsUpdate.addColumn("RM_BIGO", "string");
        	this.dsUpdate.addColumn("YN_REQUIRE", "string");
        	this.dsUpdate.addColumn("YN_APPROVE", "string");
        	this.dsUpdate.addColumn("YN_ONLINE", "string");
        	this.dsUpdate.addColumn("RT_RATE", "bigdecimal");
        	this.dsUpdate.addColumn("ID_USER", "string");
        	this.dsUpdate.addColumn("DS_FILEPATH", "string");

        	this.dsDelete = new Dataset();
        	this.dsDelete.addColumn("NO_CONT", "string");
        	this.dsDelete.addColumn("SN_SEQ", "string");
        	this.dsDelete.addColumn("NO_SEQ", "int");
        	this.dsDelete.addColumn("TY_STOCK", "string");

        	// 보증관련
        	this.dsTransure = new Dataset();
        	this.dsTransure.addColumn("CD_SITE", "string");
        	this.dsTransure.addColumn("NO_CONT", "string");
        	this.dsTransure.addColumn("SN_SEQ", "string");
        	this.dsTransure.addColumn("TY_STOCK", "string");
        	this.dsTransure.addColumn("PROCESSCODE", "string");
        	this.dsTransure.addColumn("GRTTYPE", "string");
        	this.dsTransure.addColumn("CONINDICODE", "string");
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

        	this.dsSelect.setColumn(0, "NO_CONT", this.dsSearch.getColumn(0, "NO_CONT"));
        	this.dsSelect.setColumn(0, "SN_SEQ", "");

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

        	this.dsList.set_enableevent(false);
        	this.dsList.setColumn(nrow, "NO_CONT", this.dsSearch.getColumn(0, "NO_CONT"));
        	this.dsList.set_enableevent(true);
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
        	// 그리드 필수항목 체크``
        	if (!this.fnGridValidate(this.dxGrid)) return;

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

        	this.dsInsert.clearData();
        	this.dsUpdate.clearData();
        	this.dsDelete.clearData();

        	for (var i = 0; i < this.dsList.rowcount; i++) {
        		var flag = this.gfnGetFlag(this.dsList, i);
        		switch(flag) {
        			case "I":
        				var nrow = this.dsInsert.addRow();
        				this.dsInsert.setColumn(nrow, "NO_CONT", this.dsList.getColumn(i, "NO_CONT"));
        				this.dsInsert.setColumn(nrow, "SN_SEQ", this.dsList.getColumn(i, "SN_SEQ"));
        				this.dsInsert.setColumn(nrow, "TY_STOCK", this.dsList.getColumn(i, "TY_STOCK"));
        				this.dsInsert.setColumn(nrow, "NO_STOCK", this.dsList.getColumn(i, "NO_STOCK"));
        				this.dsInsert.setColumn(nrow, "DS_STOCKKIND", this.dsList.getColumn(i, "DS_STOCKKIND"));
        				this.dsInsert.setColumn(nrow, "AM_GUARANTEE", this.dsList.getColumn(i, "AM_GUARANTEE"));
        				this.dsInsert.setColumn(nrow, "AM_GUARANTEE2", this.dsList.getColumn(i, "AM_GUARANTEE2"));
        				this.dsInsert.setColumn(nrow, "DT_RECEIPT", this.dsList.getColumn(i, "DT_RECEIPT"));
        				this.dsInsert.setColumn(nrow, "DT_MANRYO", this.dsList.getColumn(i, "DT_MANRYO"));
        				this.dsInsert.setColumn(nrow, "DT_PAYMENT", this.dsList.getColumn(i, "DT_PAYMENT"));
        				this.dsInsert.setColumn(nrow, "DT_PUBLICATION", this.dsList.getColumn(i, "DT_PUBLICATION"));
        				this.dsInsert.setColumn(nrow, "OR_PUBLICATION", this.dsList.getColumn(i, "OR_PUBLICATION"));
        				this.dsInsert.setColumn(nrow, "TY_PUBLICATION", this.dsList.getColumn(i, "TY_PUBLICATION"));
        				this.dsInsert.setColumn(nrow, "NO_PUBLICATION", this.dsList.getColumn(i, "NO_PUBLICATION"));
        				this.dsInsert.setColumn(nrow, "DT_INPUT", this.dsList.getColumn(i, "DT_INPUT"));
        				this.dsInsert.setColumn(nrow, "RM_BIGO", this.dsList.getColumn(i, "RM_BIGO"));
        				this.dsInsert.setColumn(nrow, "YN_REQUIRE", this.dsList.getColumn(i, "YN_REQUIRE"));
        				this.dsInsert.setColumn(nrow, "YN_APPROVE", this.dsList.getColumn(i, "YN_APPROVE"));
        				this.dsInsert.setColumn(nrow, "YN_ONLINE", this.dsList.getColumn(i, "YN_ONLINE"));
        				this.dsInsert.setColumn(nrow, "RT_RATE", this.dsList.getColumn(i, "RT_RATE"));
        				this.dsInsert.setColumn(nrow, "ID_USER", this.AuthClient.ID_USER);
        				this.dsInsert.setColumn(nrow, "DS_FILEPATH", this.dsList.getColumn(i, "DS_FILEPATH"));
        				break;

        			case "U":
        				var nrow = this.dsUpdate.addRow();
        				this.dsUpdate.setColumn(nrow, "NO_CONT", this.dsList.getColumn(i, "NO_CONT"));
        				this.dsUpdate.setColumn(nrow, "SN_SEQ", this.dsList.getColumn(i, "SN_SEQ"));
        				this.dsUpdate.setColumn(nrow, "NO_SEQ", this.dsList.getColumn(i, "NO_SEQ"));
        				this.dsUpdate.setColumn(nrow, "TY_STOCK", this.dsList.getColumn(i, "TY_STOCK"));
        				this.dsUpdate.setColumn(nrow, "NO_STOCK", this.dsList.getColumn(i, "NO_STOCK"));
        				this.dsUpdate.setColumn(nrow, "DS_STOCKKIND", this.dsList.getColumn(i, "DS_STOCKKIND"));
        				this.dsUpdate.setColumn(nrow, "AM_GUARANTEE", this.dsList.getColumn(i, "AM_GUARANTEE"));
        				this.dsUpdate.setColumn(nrow, "AM_GUARANTEE2", this.dsList.getColumn(i, "AM_GUARANTEE2"));
        				this.dsUpdate.setColumn(nrow, "DT_RECEIPT", this.dsList.getColumn(i, "DT_RECEIPT"));
        				this.dsUpdate.setColumn(nrow, "DT_MANRYO", this.dsList.getColumn(i, "DT_MANRYO"));
        				this.dsUpdate.setColumn(nrow, "DT_PAYMENT", this.dsList.getColumn(i, "DT_PAYMENT"));
        				this.dsUpdate.setColumn(nrow, "DT_PUBLICATION", this.dsList.getColumn(i, "DT_PUBLICATION"));
        				this.dsUpdate.setColumn(nrow, "OR_PUBLICATION", this.dsList.getColumn(i, "OR_PUBLICATION"));
        				this.dsUpdate.setColumn(nrow, "TY_PUBLICATION", this.dsList.getColumn(i, "TY_PUBLICATION"));
        				this.dsUpdate.setColumn(nrow, "NO_PUBLICATION", this.dsList.getColumn(i, "NO_PUBLICATION"));
        				this.dsUpdate.setColumn(nrow, "DT_INPUT", this.dsList.getColumn(i, "DT_INPUT"));
        				this.dsUpdate.setColumn(nrow, "RM_BIGO", this.dsList.getColumn(i, "RM_BIGO"));
        				this.dsUpdate.setColumn(nrow, "YN_REQUIRE", this.dsList.getColumn(i, "YN_REQUIRE"));
        				this.dsUpdate.setColumn(nrow, "YN_APPROVE", this.dsList.getColumn(i, "YN_APPROVE"));
        				this.dsUpdate.setColumn(nrow, "YN_ONLINE", this.dsList.getColumn(i, "YN_ONLINE"));
        				this.dsUpdate.setColumn(nrow, "RT_RATE", this.dsList.getColumn(i, "RT_RATE"));
        				this.dsUpdate.setColumn(nrow, "ID_USER", this.AuthClient.ID_USER);
        				this.dsUpdate.setColumn(nrow, "DS_FILEPATH", this.dsList.getColumn(i, "DS_FILEPATH"));
        				break;

        			case "D":
        				var nrow = this.dsDelete.addRow();
        				this.dsDelete.setColumn(nrow, "NO_CONT", this.dsList.getColumn(i, "NO_CONT"));
        				this.dsDelete.setColumn(nrow, "SN_SEQ", this.dsList.getColumn(i, "SN_SEQ"));
        				this.dsDelete.setColumn(nrow, "NO_SEQ", this.dsList.getColumn(i, "NO_SEQ"));
        				this.dsDelete.setColumn(nrow, "TY_STOCK", this.dsList.getColumn(i, "TY_STOCK"));
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

        	if (this.gfnIsNull(this.dsSearch.getColumn(0,"CD_SITE"))) {
        		validate = false;
        		// Alert후 실행할 처리
        		this.fnVaidateCallback = function() {
        			this.ccfCD_SITE.form.CDTextBox.setFocus();
        		}
        		this.gfnAlert("현장코드는 반드시 입력 하셔야 합니다.", "fnVaidateCallback");
        	}else if (this.gfnIsNull(this.dsSearch.getColumn(0,"NO_CONT"))) {
        		validate = false;
        		// Alert후 실행할 처리
        		this.fnVaidateCallback = function() {
        			this.ccfNO_CONT.form.CDTextBox.setFocus();
        		}
        		this.gfnAlert("계약번호는 반드시 입력 하셔야 합니다.", "fnVaidateCallback");
        	}

        	return validate;

        };

        /*
         *	그리드 필수입력 컬럼 검사
         */
        this.fnGridValidate = function(objGrid) {
        	var objDs = objGrid.getBindDataset();

        	var msg = "";
        	for (var i = 0; i < objDs.rowcount; i++) {
        		var flag 	= this.gfnGetFlag(objDs, i);
        		var online	= objDs.getColumn(i,"YN_ONLINE");

        		switch(flag) {
        			case "I":
        			case "U":
        				var arrRequired = objGrid.usRequired;
        				for(var j = 0; j < arrRequired.length; j++) {
        					var spl_req = arrRequired[j].split(';');
        					var colnm = spl_req[0];
        					var header = spl_req[1];

        					if (online == "Y" && colnm == "OR_PUBLICATION" && this.gfnIsNull(objDs.getColumn(i, "OR_PUBLICATION"))) {
        						msg += (i + 1) + "열: [" + header + "] 필수입력값입니다.\n";
        					};

        					if (online != "Y" && this.gfnIsNull(objDs.getColumn(i, colnm))) {
        						msg += (i + 1) + "열: [" + header + "] 필수입력값입니다.\n";
        					};
        				}
        				break;
        		}
        	}

        	if(this.gfnIsNull(msg)) {
        		return true;
        	}
        	else {
        		var arrError = [msg];
        		this.gfnAlert("msg.err.validator", arrError);
        		return false;
        	}
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
        		this.setTransure = false;
        		this.gfnGridAfterSelect(this.dxGrid);
        		if(this._READONLY == "Y")
        		{
        			this.FormBtns.Add.set_enable(false);
        			this.FormBtns.Del.set_enable(false);
        			this.FormBtns.Save.set_enable(false);
        		}
        	}
        	else if(svcID == "save") {
        		if (errorCode == 0) {
        			this.FormBtns.Select.click();
        		} else {
        			this.gfnAlert(errorMsg);
        		}
        	}
        }

        /************************************************************************
         * 코드파인드 이벤트
         ************************************************************************/
        //코드파인드의 파라미터 값을 넘겨줄때 사용하는 함수
        this.fnBeforeUserDataSetParam = function(id, dsUserParam, nrow) {

        	if (id == "ccfNO_CONT"){
         		if (this.gfnIsNull(this.dsSearch.getColumn(0, "CD_SITE"))) {
         			this.gfnAlert("현장코드를 먼저 입력하세요.");
         			return false;
         		}
        		dsUserParam.setColumn(nrow, "CD_SITE", this.dsSearch.getColumn(0, "CD_SITE"));
        	}

        	return true;
        }

        this.fnAfterCDTextChanged = function(id, codeFindData) {
        	if(id == "ccfCD_SITE") {
        		// 현장코드 변경시 초기화
        		this.ccfNO_CONT.form.fnCodeFindClear();
        	}
        }

        /************************************************************************
         * 그리드 이벤트
         ************************************************************************/
        this.fnGrid_BeforeUserDataSetParam = function(id, dsUserParam, nrow) {
        	// 그리드에서 코드파인드 id는 그리드셋팅의 코드파인드 식별ID
         	if (id == "DCX_CFSNSEQ_01") {
         		dsUserParam.setColumn(nrow, "VALUE1", this.dsList.getColumn(this.dsList.rowposition, "NO_CONT"));
         	}
        	return true;
        }

        this.fnGrid_EnterCell = function(obj, row, cell) {
        // 	if(this._READONLY == "Y") return false;
        // 	else return true;

        	//22.02.22 현장권한일때 수정 안되게 변경
        	var cd_role = this.FormInfo.CD_ROLE;
        	if(cd_role == "R51")
        	{
        		return false;
        	}

        	return true;
        }

        this.fnGrid_ExpandUp = function(obj,e) {
        	var colnm = this.gfnGridGetBindColumnNameByIndex(obj, e.cell);
        	if(colnm == "DS_FILENAME") {
        		if(this.gfnIsNull(this.dsList.getColumn(e.row, "SN_SEQ"))) {
        			this.gfnAlert("차수를 먼저 입력하세요.");
        			return;
        		}
        		this.fdg00.row = e.row;
        		this.fdg00.open('FileOpen', FileDialog.LOAD);
        	}
        }

        this.dxGrid_oncelldblclick = function(obj,e)
        {
        	if(this.gfnGridGetBindColumnNameByIndex(obj, e.cell) == "DS_FILENAME") {
        		this.fnDownload();
        	}
        }

        this.dxGrid_oncellclick = function(obj,e)
        {
        	if(this.gfnGridGetBindColumnNameByIndex(obj, e.cell) == "YN_ONLINE") return true;
        	if(this.dsList.getColumn(e.row,"YN_ONLINE") != "Y") return true;

        	if(this.gfnGridGetBindColumnNameByIndex(obj, e.cell) == "OR_PUBLICATION" && this.gfnIsNull(this.dsList.getColumn(e.row,"CD_STATUS"))) {
        		var param = {};
        		param.CD_TRANSURE = this.dsList.getColumn(e.row,"TY_PUBLICATION");
        		param.DS_TRANSURE = this.dsList.getColumn(e.row,"OR_PUBLICATION");

        		if(this.setTransure)
        			this.gfnFormOpen("DCC", "DCC_STOCKMR_TRANSURE_DLG", "fnTransureChoice_Callback", param, 350, 150);
        	};

        	obj.set_readonly(true);
        	this.setTransure = true;
        	return false;
        }

        this.fnTransureChoice_Callback = function(id, val) {
        	if(val != null) {
        		var json = JSON.parse(val);
        		this.dsList.setColumn(this.dsList.rowposition,"TY_PUBLICATION",json.CD_TRANSURE);
        		this.dsList.setColumn(this.dsList.rowposition,"OR_PUBLICATION",json.DS_TRANSURE);
        	};
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
        			this.filepath = "/CONT/" + this.dsSearch.getColumn(0, "CD_SITE") + "/" + this.dsSearch.getColumn(0, "NO_CONT") + "/" + this.dsList.getColumn(row, "SN_SEQ") + "/STOCK";
        			this.dsList.setColumn(row, "DS_FILEPATH", this.filepath + '/' + obj.filename);
        			this.dsList.setColumn(row, "DS_FILENAME", obj.filename);
        			//this.dsList.setColumn(row, "FILE_SIZ", null);
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
        // 			for(var i = 0; i < e.datasets[0].rowcount; i++) {
        // 				var row = obj.filelist[i].row;
        // 				this.dsList.setColumn(row, "FILE_SIZ", e.datasets[0].getColumn(i, "filesize"));
        // 				this.dsList.setColumn(row, "FILE_HASH", e.datasets[0].getColumn(i, "filehash"));
        // 			}
        			this.fnSaveProc();
        		}
        	}
        };

        this.FileUpTransfer00_onerror = function(obj,e)
        {
        // 	this._waitCursor(false);
        // 	if(e.errormsg.indexOf("maxsize") > -1) {
        // 		this.gfnAlert("첨부파일 허용용량("+ this.gfnCutFileSize(nexacro.toNumber(e.errormsg.split(':')[1])) + ")을 초과할 수 없습니다.");
        // 	} else {
        // 		this.gfnAlert(e.errormsg);
        // 	}
        	this._waitCursor(false);
        	if(e.errormsg.indexOf("exceeds the configured maximum (") > -1) {
        		var vfilesize = nexacro.toNumber(nexacro.replaceAll((e.errormsg.split('exceeds the configured maximum (')[1]), ")", ""), 0);
        		this.gfnAlert("첨부파일 허용용량("+ this.gfnCutFileSize(nexacro.toNumber(vfilesize)) + ")을 초과할 수 없습니다.");
        	} else {
        		this.gfnAlert(e.errormsg);
        	}
        };

        this.fnDownload = function() {
        	if(!this.gfnIsNull(this.gfnGetFlag(this.dsList, this.dsList.rowposition))) return;

        	var ds_filepath = this.dsList.getColumn(this.dsList.rowposition, "DS_FILEPATH");
        	if(!this.gfnIsNull(ds_filepath)) {
        		var sFilename = this.dsList.getColumn(this.dsList.rowposition, "DS_FILENAME");
        		var sFilepath = ds_filepath.substring(0, ds_filepath.lastIndexOf('/'));
        		var encodeFileName = encodeURIComponent(sFilename);

        		var surl = this.fileConfig.host+ this.fileConfig.downloadUrl;
        		this.FileDownTransfer00.set_url(surl);
        		this.FileDownTransfer00.setPostData("path", sFilepath);
        		this.FileDownTransfer00.setPostData("fileName", encodeFileName);
        		if( system.navigatorname =="nexacro"){
        			this.FileDownTransfer00.set_downloadfilename(sFilename);
        		}
        		this.FileDownTransfer00.download();
        	}
        };


        /************************************************************************
         * 기타 이벤트
         ************************************************************************/

        this.dsSearch_onvaluechanged = function(obj,e)
        {
        	if(e.oldvalue != e.newvalue) {
        		this.gfnSetFormStatus(this);	// 폼상태 초기화
        		this.gfnGridClear(this.dxGrid);

        		if(e.columnid == "CD_SITE"){
        			this.dsSearch.setColumn(0,"NO_CONT", "");
        			this.divSearch.form.ccfNO_CONT.form.DSTextBox.set_value("");
        		}
        	}
        };

        this.dsList_cancolumnchange = function(obj,e)
        {
        	if(e.columnid != "YN_ONLINE") return;

        	if(!this.gfnIsNull(this.dsList.getColumn(e.row,"CD_STATUS"))) {
        		this.gfnAlert("이미 보증처리된 내역입니다.");
        		return false;
        	};
        };

        this.dsList_onvaluechanged = function(obj,e)
        {
        	if(e.columnid != "YN_ONLINE") return;
        	if(e.newvalue == "Y") return;

        	this.dsList.setColumn(e.row,"TY_PUBLICATION","");
        	this.dsList.setColumn(e.row,"OR_PUBLICATION","");
        };

        /************************************************************************
         * 보증관련 Function
         ************************************************************************/
         this.fnStockReq = function(obj,e) {
        	if(this.dsList.rowposition == -1) return;

        	if(this.dsList.getColumn(this.dsList.rowposition,"YN_ONLINE") != "Y" ||
        		this.gfnIsNull(this.dsList.getColumn(this.dsList.rowposition,"TY_PUBLICATION"))) {
        		this.gfnAlert("전자보증 체크 및 발행처를 선택하세요!");
        		return;
        	};

        	if(this.dsList.getRowType(this.dsList.rowposition) > 1) {
        		this.gfnAlert("변경된 내역이 있습니다!\n저장 처리후 진행해 주세요!");
        		return;
        	};

        	this.dsTransure.clearData();
        	this.dsTransure.addRow();
        	this.dsTransure.setColumn(0, "CD_SITE",		this.dsList.getColumn(this.dsList.rowposition, "CD_SITE"));
        	this.dsTransure.setColumn(0, "NO_CONT",		this.dsList.getColumn(this.dsList.rowposition, "NO_CONT"));
        	this.dsTransure.setColumn(0, "SN_SEQ", 		this.dsList.getColumn(this.dsList.rowposition, "SN_SEQ"));
        	this.dsTransure.setColumn(0, "TY_STOCK", 	this.dsList.getColumn(this.dsList.rowposition, "TY_STOCK"));

        	var strSvcId    = "transureReq";
        	var strSvcType  = "dcc_transure_" + (this.dsList.getColumn(this.dsList.rowposition, "TY_PUBLICATION")).toLowerCase() + "_req";
        	var inProc		= "";
        	var inData      = "dsTransure=dsTransure";
        	var outData     = "";
        	var strArg      = "";
        	var callBackFnc = "fnTransureCallback";

        	this.gfnTransaction( strSvcId , 	// transaction을 구분하기 위한 svc id값
        						strSvcType , 	// transaction을 요청할 구분
        						inProc,			// Procedure 정보 Dataset 이름
        						inData , 		// 입력값으로 보낼 dataset id , a=b형태로 실제이름과 입력이름을 매칭
        						outData , 		// 처리결과값으로 받을 dataset id, a=b형태로 실제이름과 입력이름을 매칭
        						strArg, 			// 입력갑스로 보낼 arguments, strFormData="20120607"
        						callBackFnc); // 통신방법 정의 [생략가능]
        };

        this.fnStockCan = function(obj,e) {
        	if(this.dsList.rowposition == -1) return;

        	if(this.dsList.getColumn(this.dsList.rowposition,"YN_ONLINE") != "Y" ||
        		this.gfnIsNull(this.dsList.getColumn(this.dsList.rowposition,"TY_PUBLICATION"))) {
        		this.gfnAlert("전자보증 체크 및 발행처를 선택하세요!");
        		return;
        	};

        	if(this.dsList.getRowType(this.dsList.rowposition) > 1) {
        		this.gfnAlert("변경된 내역이 있습니다!\n저장 처리후 진행해 주세요!");
        		return;
        	};

        	if(this.gfnIsNull(this.dsList.getColumn(this.dsList.rowposition,"CD_STATUS")) ||
        		!this.gfnIsNull(this.dsList.getColumn(this.dsList.rowposition,"NO_STOCK"))) {
        		this.gfnAlert("보증서 취소처리가 불가능합니다!");
        		return;
        	};

        	this.dsTransure.clearData();
        	this.dsTransure.addRow();
        	this.dsTransure.setColumn(0, "CD_SITE",		this.dsList.getColumn(this.dsList.rowposition, "CD_SITE"));
        	this.dsTransure.setColumn(0, "NO_CONT",		this.dsList.getColumn(this.dsList.rowposition, "NO_CONT"));
        	this.dsTransure.setColumn(0, "SN_SEQ", 		this.dsList.getColumn(this.dsList.rowposition, "SN_SEQ"));
        	this.dsTransure.setColumn(0, "TY_STOCK", 	this.dsList.getColumn(this.dsList.rowposition, "TY_STOCK"));

        	var strSvcId    = "transureCan";
        	var strSvcType  = "dcc_transure_" + (this.dsList.getColumn(this.dsList.rowposition, "TY_PUBLICATION")).toLowerCase() + "_can";
        	var inProc		= "";
        	var inData      = "dsTransure=dsTransure";
        	var outData     = "";
        	var strArg      = "";
        	var callBackFnc = "fnTransureCallback";

        	this.gfnTransaction( strSvcId , 	// transaction을 구분하기 위한 svc id값
        						strSvcType , 	// transaction을 요청할 구분
        						inProc,			// Procedure 정보 Dataset 이름
        						inData , 		// 입력값으로 보낼 dataset id , a=b형태로 실제이름과 입력이름을 매칭
        						outData , 		// 처리결과값으로 받을 dataset id, a=b형태로 실제이름과 입력이름을 매칭
        						strArg, 			// 입력갑스로 보낼 arguments, strFormData="20120607"
        						callBackFnc); // 통신방법 정의 [생략가능]
        };

        this.fnStockRes = function(obj,e) {
        	if(this.dsList.rowposition == -1) return;

        	if(this.dsList.getColumn(this.dsList.rowposition,"CD_STATUS") != 'C310') {
        		this.gfnAlert("보증서 반려처리가 불가능합니다!");
        		return;
        	};

        	this.dsTransure.clearData();
        	this.dsTransure.addRow();
        	this.dsTransure.setColumn(0, "CD_SITE",		this.dsList.getColumn(this.dsList.rowposition, "CD_SITE"));
        	this.dsTransure.setColumn(0, "NO_CONT",		this.dsList.getColumn(this.dsList.rowposition, "NO_CONT"));
        	this.dsTransure.setColumn(0, "SN_SEQ", 		this.dsList.getColumn(this.dsList.rowposition, "SN_SEQ"));
        	this.dsTransure.setColumn(0, "TY_STOCK", 	this.dsList.getColumn(this.dsList.rowposition, "TY_STOCK"));

        	var strSvcId    = "transureRes";
        	var strSvcType  = "dcc_transure_" + (this.dsList.getColumn(this.dsList.rowposition, "TY_PUBLICATION")).toLowerCase() + "_res";
        	var inProc		= "";
        	var inData      = "dsTransure=dsTransure";
        	var outData     = "";
        	var strArg      = "";
        	var callBackFnc = "fnTransureCallback";

        	this.gfnTransaction( strSvcId , 	// transaction을 구분하기 위한 svc id값
        						strSvcType , 	// transaction을 요청할 구분
        						inProc,			// Procedure 정보 Dataset 이름
        						inData , 		// 입력값으로 보낼 dataset id , a=b형태로 실제이름과 입력이름을 매칭
        						outData , 		// 처리결과값으로 받을 dataset id, a=b형태로 실제이름과 입력이름을 매칭
        						strArg, 			// 입력갑스로 보낼 arguments, strFormData="20120607"
        						callBackFnc); // 통신방법 정의 [생략가능]
        };

        this.fnStockAcc = function(obj,e) {
        	if(this.dsList.rowposition == -1) return;
        	if(this.dsList.getColumn(this.dsList.rowposition,"CD_STATUS") != 'C310' &&
        		this.dsList.getColumn(this.dsList.rowposition,"CD_STATUS") != 'C510') {
        		this.gfnAlert("보증서 승인처리가 불가능합니다!");
        		return;
        	};

        	this.dsTransure.clearData();
        	this.dsTransure.addRow();
        	this.dsTransure.setColumn(0, "CD_SITE",		this.dsList.getColumn(this.dsList.rowposition, "CD_SITE"));
        	this.dsTransure.setColumn(0, "NO_CONT",		this.dsList.getColumn(this.dsList.rowposition, "NO_CONT"));
        	this.dsTransure.setColumn(0, "SN_SEQ", 		this.dsList.getColumn(this.dsList.rowposition, "SN_SEQ"));
        	this.dsTransure.setColumn(0, "TY_STOCK", 	this.dsList.getColumn(this.dsList.rowposition, "TY_STOCK"));

        	var strSvcId    = "transureAcc";
        	var strSvcType  = "dcc_transure_" + (this.dsList.getColumn(this.dsList.rowposition, "TY_PUBLICATION")).toLowerCase() + "_acc";
        	var inProc		= "";
        	var inData      = "dsTransure=dsTransure";
        	var outData     = "";
        	var strArg      = "";
        	var callBackFnc = "fnTransureCallback";

        	this.gfnTransaction( strSvcId , 	// transaction을 구분하기 위한 svc id값
        						strSvcType , 	// transaction을 요청할 구분
        						inProc,			// Procedure 정보 Dataset 이름
        						inData , 		// 입력값으로 보낼 dataset id , a=b형태로 실제이름과 입력이름을 매칭
        						outData , 		// 처리결과값으로 받을 dataset id, a=b형태로 실제이름과 입력이름을 매칭
        						strArg, 			// 입력갑스로 보낼 arguments, strFormData="20120607"
        						callBackFnc); // 통신방법 정의 [생략가능]
        };

        // this.fnStockApp = function(obj:nexacro.Button,e:nexacro.ClickEventInfo) {
        // 	if(this.dsList.rowposition == -1) return;
        //
        // 	this.dsTransure.clearData();
        // 	this.dsTransure.addRow();
        // 	this.dsTransure.setColumn(0, "NO_CONT",		this.dsList.getColumn(this.dsList.rowposition, "NO_CONT"));
        // 	this.dsTransure.setColumn(0, "SN_SEQ", 		this.dsList.getColumn(this.dsList.rowposition, "SN_SEQ"));
        // 	this.dsTransure.setColumn(0, "TY_STOCK", 	this.dsList.getColumn(this.dsList.rowposition, "TY_STOCK"));
        //
        // 	var strSvcId    = "transureApp";
        // 	var strSvcType  = "dcc_transure_" + (this.dsList.getColumn(this.dsList.rowposition, "TY_PUBLICATION")).toLowerCase() + "_app";
        // 	var inProc		= "";
        // 	var inData      = "dsTransure=dsTransure";
        // 	var outData     = "";
        // 	var strArg      = "";
        // 	var callBackFnc = "fnTransureCallback";
        //
        // 	this.gfnTransaction( strSvcId , 	// transaction을 구분하기 위한 svc id값
        // 						strSvcType , 	// transaction을 요청할 구분
        // 						inProc,			// Procedure 정보 Dataset 이름
        // 						inData , 		// 입력값으로 보낼 dataset id , a=b형태로 실제이름과 입력이름을 매칭
        // 						outData , 		// 처리결과값으로 받을 dataset id, a=b형태로 실제이름과 입력이름을 매칭
        // 						strArg, 			// 입력갑스로 보낼 arguments, strFormData="20120607"
        // 						callBackFnc); // 통신방법 정의 [생략가능]
        // };

        this.fnStockDes = function(obj,e) {
        	if(this.dsList.rowposition == -1) return;
        	if(this.dsList.getColumn(this.dsList.rowposition,"CD_STATUS") != 'C410') {
        		this.gfnAlert("보증서 파기처리가 불가능합니다!");
        		return;
        	};

        	this.dsTransure.clearData();
        	this.dsTransure.addRow();
        	this.dsTransure.setColumn(0, "CD_SITE",		this.dsList.getColumn(this.dsList.rowposition, "CD_SITE"));
        	this.dsTransure.setColumn(0, "NO_CONT",		this.dsList.getColumn(this.dsList.rowposition, "NO_CONT"));
        	this.dsTransure.setColumn(0, "SN_SEQ", 		this.dsList.getColumn(this.dsList.rowposition, "SN_SEQ"));
        	this.dsTransure.setColumn(0, "TY_STOCK", 	this.dsList.getColumn(this.dsList.rowposition, "TY_STOCK"));

        	var strSvcId    = "transureDes";
        	var strSvcType  = "dcc_transure_" + (this.dsList.getColumn(this.dsList.rowposition, "TY_PUBLICATION")).toLowerCase() + "_des";
        	var inProc		= "";
        	var inData      = "dsTransure=dsTransure";
        	var outData     = "";
        	var strArg      = "";
        	var callBackFnc = "fnTransureCallback";

        	this.gfnTransaction( strSvcId , 	// transaction을 구분하기 위한 svc id값
        						strSvcType , 	// transaction을 요청할 구분
        						inProc,			// Procedure 정보 Dataset 이름
        						inData , 		// 입력값으로 보낼 dataset id , a=b형태로 실제이름과 입력이름을 매칭
        						outData , 		// 처리결과값으로 받을 dataset id, a=b형태로 실제이름과 입력이름을 매칭
        						strArg, 			// 입력갑스로 보낼 arguments, strFormData="20120607"
        						callBackFnc); // 통신방법 정의 [생략가능]
        };

        this.fnStockView = function(obj,e) {
        	if(this.dsList.rowposition == -1) return;
        	if(this.dsList.getColumn(this.dsList.rowposition,"YN_ONLINE") != "Y") {
        		this.gfnAlert("전자보증서만 가능합니다!");
        		return;
        	};
        	if(this.gfnIsNull(this.dsList.getColumn(this.dsList.rowposition,"NO_STOCK"))) {
        		this.gfnAlert("발급된 보증서가 없습니다!");
        		return;
        	};

        	var param = {};
        	param.CD_SITE			=	this.dsList.getColumn(this.dsList.rowposition, "CD_SITE");
        	param.NO_CONT			=	this.dsList.getColumn(this.dsList.rowposition, "NO_CONT");
        	param.SN_SEQ			=	this.dsList.getColumn(this.dsList.rowposition, "SN_SEQ");
        	param.TY_STOCK			=	this.dsList.getColumn(this.dsList.rowposition, "TY_STOCK");
        	param.TY_PUBLICATION	=	this.dsList.getColumn(this.dsList.rowposition, "TY_PUBLICATION");
        	param.MODULE			=	"PO";

        	this.gfnFormOpen("DCC", "DCC_STOCK_VIEWER", "", param);
        };

        this.fnTransureCallback = function(svcID, errorCode, errorMsg)
        {
        	if(svcID == "transureReq"){
        		if(errorCode != 0) {
        			this.gfnAlert(errorMsg);
        			return;
        		}
        		this.gfnAlert("보증신청완료!!!");
        	} else if(svcID == "transureCan") {
        		if(errorCode != 0) {
        			this.gfnAlert(errorMsg);
        			return;
        		}
        		this.gfnAlert("보증취소완료!!!");
        	} else if(svcID == "transureRes") {
        		if(errorCode != 0) {
        			this.gfnAlert(errorMsg);
        			return;
        		}
        		this.gfnAlert("보증반려완료!!!");
        	} else if(svcID == "transureAcc") {
        		if(errorCode != 0) {
        			this.gfnAlert(errorMsg);
        			return;
        		}
        		this.gfnAlert("보증수용완료!!!");
        	} else if(svcID == "transureDes") {
        		if(errorCode != 0) {
        			this.gfnAlert(errorMsg);
        			return;
        		}
        		this.gfnAlert("보증파기완료!!!");
        	} else if(svcID == "transureApp") {
        		if(errorCode != 0) {
        			this.gfnAlert(errorMsg);
        			return;
        		}
        		this.gfnAlert("보증최종완료!!!");
        	};

        	this.FormBtns.Select.click();
        };

        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.form_onload,this);
            this.dsList.addEventHandler("onvaluechanged",this.dsList_onvaluechanged,this);
            this.dsList.addEventHandler("cancolumnchange",this.dsList_cancolumnchange,this);
            this.dsSearch.addEventHandler("onvaluechanged",this.dsSearch_onvaluechanged,this);
            this.FileUpTransfer00.addEventHandler("onprogress",this.FileUpTransfer00_onprogress,this);
            this.FileUpTransfer00.addEventHandler("onsuccess",this.FileUpTransfer00_onsuccess,this);
            this.FileUpTransfer00.addEventHandler("onerror",this.FileUpTransfer00_onerror,this);
            this.fdg00.addEventHandler("onclose",this.fdg00_onclose,this);
        };
        this.loadIncludeScript("DCC_STOCKMR.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
