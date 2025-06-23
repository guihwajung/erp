(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("DWA_SITEBUDGET");
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
            obj._setContents("<ColumnInfo><Column id=\"TARGET\" type=\"STRING\" size=\"256\"/><Column id=\"SP\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"TARGET\">select</Col><Col id=\"SP\">DWAPR_SITEBUDGET_SELECT</Col></Row><Row><Col id=\"SP\">DWAPR_SITEBUDGET_INSERT</Col><Col id=\"TARGET\">insert</Col></Row><Row><Col id=\"SP\">DWAPR_SITEBUDGET_UPDATE</Col><Col id=\"TARGET\">update</Col></Row><Row><Col id=\"SP\">DWAPR_SITEBUDGET_DELETE</Col><Col id=\"TARGET\">delete</Col></Row><Row><Col id=\"TARGET\">insert_bc</Col><Col id=\"SP\">DWAPR_SITEBUDGET_BC_INSERT</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsSearch", this);
            obj._setContents("<ColumnInfo><Column id=\"CD_SITE\" type=\"STRING\" size=\"256\"/><Column id=\"NO_SILHENG\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"CD_SITE\"/><Col id=\"NO_SILHENG\"/></Row></Rows>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Div("divSearch","0.0","10.0",null,"46.0","0",null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_cssclass("div_SEARCH_Bg");
            obj.set_text("");
            obj.set_formscrolltype("none");
            this.addChild(obj.name, obj);

            obj = new Static("staCD_SYSTEM","0.0","10.0","92.0","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("1");
            obj.set_text("현장코드");
            obj.set_cssclass("sta_WF_SchLabelE");
            this.divSearch.addChild(obj.name, obj);

            obj = new Div("ccfCD_SYSTEM","staCD_SYSTEM:0.0","10.0","250","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.getSetter("CodeFindName").set("DZX_CFSITE");
            obj.getSetter("CDTextWidth").set("80");
            obj.set_taborder("0");
            obj.set_url("cmm::cmmCodeFind.xfdl");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("staCD_CORP","ccfCD_SYSTEM:0.0","10.0","92.0","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("1");
            obj.set_text("실행번호");
            obj.set_cssclass("sta_WF_SchLabel");
            this.divSearch.addChild(obj.name, obj);

            obj = new Div("ccfNO_SILHENG","staCD_CORP:0.0","10.0","250","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.getSetter("CDTextWidth").set("80");
            obj.set_taborder("0");
            obj.set_url("cmm::cmmCodeFind.xfdl");
            this.divSearch.addChild(obj.name, obj);

            obj = new CheckBox("chkYN_DOKUB","ccfNO_SILHENG:0.0","10.0","50","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("4");
            obj.set_text("도급");
            obj.set_truevalue("Y");
            obj.set_falsevalue("N");
            obj.set_visible("false");
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
            obj = new BindItem("item0","divSearch.form.ccfCD_SYSTEM.form.CDTextBox","value","dsSearch","CD_SITE");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item1","divSearch.form.ccfNO_SILHENG.form.CDTextBox","value","dsSearch","NO_SILHENG");
            this.addChild(obj.name, obj);
            obj.bind();
            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {
            this._addPreloadList("fdl","cmm::cmmCodeFind.xfdl");
        };
        
        // User Script
        this.registerScript("DWA_SILHENGCHG.xfdl", function() {
        this.objApp = this.gfnGetApplication();

        this.DWA_SITEBUDGET_onload = function(obj,e)
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

        	//this.divSearch_chkYN_DOKUB_onchanged(this.divSearch.form.chkYN_DOKUB, {postvalue:this.divSearch.form.chkYN_DOKUB.value});

        };

        /************************************************************************
         * 버튼 설정 : 화면(Tab) 전환시 마다 호출
         ************************************************************************/
        this.fnSetButton = function() {
        // 	var id_group = this.FormInfo.ID_GROUP;
        // 	var gr_search = this.FormInfo.GR_SEARCH;
        // 	var cd_role = this.FormInfo.CD_ROLE;
        }

        /************************************************************************
         * 확장 버튼 : 화면별 버튼 설정 ID, function 연결
         ************************************************************************/
        this.fnSetExtendButton = function() {
        	this.btn1 = this.gfnFormButtonAdd("btnRegItem", "fnRegItem");
        	this.btn2 = this.gfnFormButtonAdd("btnFile", "fnFile");
        	this.btnAPP = this.gfnFormButtonAdd("btnAPP", "fnAPP");
        	this.btnB = this.gfnFormButtonAdd("btnB", "fnB");
        	this.btnC = this.gfnFormButtonAdd("btnC", "fnC");
        };

        /************************************************************************
         * 변수 선언
         ************************************************************************/
        this.fnSetVariable = function() {
        	this.ccfCD_SYSTEM = this.divSearch.form.ccfCD_SYSTEM;
        	this.ccfNO_SILHENG = this.divSearch.form.ccfNO_SILHENG;
        	this.dxGrid = this.divData.form.objGrid;
        };

        /************************************************************************
         * 이벤트 설정
         ************************************************************************/
        this.fnSetEvent = function() {
        	this.ccfCD_SYSTEM.CodeFindName = "DZX_CFSITE";
        	this.ccfNO_SILHENG.CodeFindName = "DWX_CFNO_SILHENG_01";
        	this.ccfNO_SILHENG.BeforeUserDataSetParam = "fnBeforeUserDataSetParam";

        	// 그리드 코드파인드 설정
        	this.dxGrid.BeforeUserDataSetParam = "fnGrid_BeforeUserDataSetParam";


        	this.gfnGridInit(this.dxGrid, this.dsList, "DW", "DWA_SILHENGCHG");
        }
        /************************************************************************
         * 파라미터 설정
         ************************************************************************/
        this.fnSetParameter = function() {

        	this.dsSelect = new Dataset();
        	this.dsSelect.addColumn("CD_SITE", "string");
        	this.dsSelect.addColumn("TY_GUBUN", "string");

        	this.dsInsert = new Dataset();
        	this.dsInsert.addColumn("CD_SITE", "string");
        	this.dsInsert.addColumn("TY_SILHENG", "string");
        	this.dsInsert.addColumn("DS_SILHENG", "string");
        	this.dsInsert.addColumn("CD_SITE_IEMS", "string");
        	this.dsInsert.addColumn("CD_CONST_IEMS", "string");
        	this.dsInsert.addColumn("NO_SILHENG_IEMS", "string");
        	this.dsInsert.addColumn("CD_RBS1", "string");
        	this.dsInsert.addColumn("CD_RBS2", "string");
        	this.dsInsert.addColumn("CD_RBS3", "string");
        	this.dsInsert.addColumn("CD_RBS4", "string");
        	this.dsInsert.addColumn("CD_RBS5", "string");
        	this.dsInsert.addColumn("CD_RBS6", "string");
        	this.dsInsert.addColumn("ID_REQUEST", "string");
        	this.dsInsert.addColumn("DT_REQUEST", "string");
        	this.dsInsert.addColumn("ID_INSERT", "string");
        	this.dsInsert.addColumn("TY_GUBUN", "string");

        	this.dsUpdate = new Dataset();
        	this.dsUpdate.addColumn("CD_SITE", "string");
        	this.dsUpdate.addColumn("NO_SILHENG", "string");
        	this.dsUpdate.addColumn("DS_SILHENG", "string");
        	this.dsUpdate.addColumn("CD_RBS1", "string");
        	this.dsUpdate.addColumn("CD_RBS2", "string");
        	this.dsUpdate.addColumn("CD_RBS3", "string");
        	this.dsUpdate.addColumn("CD_RBS4", "string");
        	this.dsUpdate.addColumn("CD_RBS5", "string");
        	this.dsUpdate.addColumn("CD_RBS6", "string");
        	this.dsUpdate.addColumn("TY_GUBUN", "string");
        	this.dsUpdate.addColumn("CD_APPDEPT", "string");
        	this.dsUpdate.addColumn("ID_UPDATE", "string");

        	this.dsDelete = new Dataset();
        	this.dsDelete.addColumn("CD_SITE", "string");
        	this.dsDelete.addColumn("NO_SILHENG", "string");
        	this.dsDelete.addColumn("TY_GUBUN", "string");

        	this.dsInsertBC = new Dataset();
        	this.dsInsertBC.addColumn("CD_SITE", "string");
        	this.dsInsertBC.addColumn("NO_SILHENG", "string");
        	this.dsInsertBC.addColumn("TY_SILHENG", "string");
        	this.dsInsertBC.addColumn("ID_USER", "string");
        }

        /************************************************************************
         * 컨트롤 이벤트
         ************************************************************************/
         /*
          *	조회 버튼
          */
        this.fnSelect = function() {
        	if (!this.fnSelectValidate()) return false;

        	this.gfnGridBeforeSelect(this.dxGrid);

        	this.dsSelect.clearData();
        	this.dsSelect.addRow();

        	this.dsSelect.setColumn(0, "CD_SITE", this.ccfCD_SYSTEM.form.CDTextBox.text);
        	this.dsSelect.setColumn(0, "TY_GUBUN", "C");

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
        	this.gfnGridAdd(this.dxGrid);
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
        				this.dsInsert.setColumn(nrow, "CD_SITE", this.dsSearch.getColumn(0, "CD_SITE"));
        				this.dsInsert.setColumn(nrow, "NO_SILHENG", this.dsSearch.getColumn(0, "NO_SILHENG"));
        				this.dsInsert.setColumn(nrow, "TY_SILHENG", this.dsList.getColumn(i, "TY_SILHENG"));
        				this.dsInsert.setColumn(nrow, "DS_SILHENG", this.dsList.getColumn(i, "DS_SILHENG"));
        				this.dsInsert.setColumn(nrow, "CD_SITE_IEMS", this.dsList.getColumn(i, "CD_SITE"));
        				this.dsInsert.setColumn(nrow, "CD_CONST_IEMS", this.dsList.getColumn(i, "CD_CONST_IEMS"));
        				this.dsInsert.setColumn(nrow, "NO_SILHENG_IEMS", this.dsList.getColumn(i, "DS_SILHENG"));
        				this.dsInsert.setColumn(nrow, "CD_RBS1", this.dsList.getColumn(i, "CD_RBS1"));
        				this.dsInsert.setColumn(nrow, "CD_RBS2", this.dsList.getColumn(i, "CD_RBS2"));
        				this.dsInsert.setColumn(nrow, "CD_RBS3", this.dsList.getColumn(i, "CD_RBS3"));
        				this.dsInsert.setColumn(nrow, "CD_RBS4", this.dsList.getColumn(i, "CD_RBS4"));
        				this.dsInsert.setColumn(nrow, "CD_RBS5", this.dsList.getColumn(i, "CD_RBS5"));
        				this.dsInsert.setColumn(nrow, "CD_RBS6", this.dsList.getColumn(i, "CD_RBS6"));
        				this.dsInsert.setColumn(nrow, "ID_REQUEST", this.dsList.getColumn(i, "ID_REQUEST"));
        				this.dsInsert.setColumn(nrow, "DT_REQUEST", this.dsList.getColumn(i, "DT_REQUEST"));
        				this.dsInsert.setColumn(nrow, "ID_INSERT", this.dsList.getColumn(i, "ID_INSERT"));
        				this.dsInsert.setColumn(nrow, "TY_GUBUN", "C");
        				break;

        			case "U":
        				var nrow = this.dsUpdate.addRow();
        				this.dsUpdate.setColumn(nrow, "CD_SITE", this.dsList.getColumn(i, "CD_SITE"));
        				this.dsUpdate.setColumn(nrow, "NO_SILHENG", this.dsList.getColumn(i, "NO_SILHENG"));
        				this.dsUpdate.setColumn(nrow, "DS_SILHENG", this.dsList.getColumn(i, "DS_SILHENG"));
        				this.dsUpdate.setColumn(nrow, "CD_RBS1", this.dsList.getColumn(i, "CD_RBS1"));
        				this.dsUpdate.setColumn(nrow, "CD_RBS2", this.dsList.getColumn(i, "CD_RBS2"));
        				this.dsUpdate.setColumn(nrow, "CD_RBS3", this.dsList.getColumn(i, "CD_RBS3"));
        				this.dsUpdate.setColumn(nrow, "CD_RBS4", this.dsList.getColumn(i, "CD_RBS4"));
        				this.dsUpdate.setColumn(nrow, "CD_RBS5", this.dsList.getColumn(i, "CD_RBS5"));
        				this.dsUpdate.setColumn(nrow, "CD_RBS6", this.dsList.getColumn(i, "CD_RBS6"));
        				this.dsUpdate.setColumn(nrow, "ID_UPDATE", this.dsList.getColumn(i, "ID_UPDATE"));
        				this.dsUpdate.setColumn(nrow, "TY_GUBUN", "C");
        				this.dsUpdate.setColumn(nrow, "CD_APPDEPT", this.dsList.getColumn(i, "CD_APPDEPT"));
        				break;

        			case "D":
        				var nrow = this.dsDelete.addRow();
        				this.dsDelete.setColumn(nrow, "CD_SITE", this.dsList.getColumn(i, "CD_SITE"));
        				this.dsDelete.setColumn(nrow, "NO_SILHENG", this.dsList.getColumn(i, "NO_SILHENG"));
        				this.dsDelete.setColumn(nrow, "TY_GUBUN", "C");
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
        	if (this.gfnIsNull(this.ccfCD_SYSTEM.form.CDTextBox.text)) {
        		validate = false;
        		// Alert후 실행할 처리
        		this.fnVaidateCallback = function() {
        			this.ccfCD_SYSTEM.form.CDTextBox.setFocus();
        		}
        		this.gfnAlert("현장코드를 입력하세요.", "fnVaidateCallback");
        	}

        	return validate;
        };


        /************************************************************************
         * 콜백 이벤트
         ************************************************************************/
        /*
         *	콜백 처리
         */
        this.fnCallback = function(svcID, errorCode, errorMsg, strArg)
        {
        	if (svcID == "select") {
        		this.gfnGridAfterSelect(this.dxGrid);
        	}
        	else if(svcID == "save") {
        		if (errorCode == 0) {
        			this.FormBtns.Select.click();
        		} else {
        			this.gfnAlert(errorMsg);
        		}
        	}
        	else if(svcID == "insert_bc")
        	{
        		if (errorCode == 0) {
        			this.fnCallback_callback = function()
        			{
        				this.FormBtns.Select.click();
        			}

        			var msg = "";
        			var DS_CONST = this.dsList.getColumn(this.dsList.rowposition, "DS_CONST");
        			if(strArg == "B")
        			{
        				msg += DS_CONST + " 부문 설계상세화 내역 등록 정상처리되었습니다.";
        			}
        			else if(strArg == "C")
        			{
        				msg += DS_CONST + " 부문 변경예산 내역 등록 정상처리되었습니다.";
        			}

        			this.gfnAlert(msg, "fnCallback_callback");

        		} else {
        			this.gfnAlert(errorMsg);
        		}
        	}
        }

        /************************************************************************
         * 코드파인드 이벤트
         ************************************************************************/
        this.fnBeforeUserDataSetParam = function(id, dsUserParam, nrow) {

        	if (id == "ccfNO_SILHENG") {

        // 		if (this.gfnIsNull(this.ccfCD_DEPT_ORG.form.CDTextBox.value)) {
        // 			this.gfnAlert("서브모듈을 먼저 입력하세요.");
        // 			return false;
        // 		}
        		dsUserParam.setColumn(nrow, "CD_SITE", this.dsSearch.getColumn(0, "CD_SITE"));	// 현장코드
        	}
        	return true;
        }


        this.fnGrid_BeforeUserDataSetParam=function(id, dsUserParam, nrow){
        	if(id == "DWX_CFSITECONST"){
        		dsUserParam.setColumn(nrow, "CD_SITE", this.dsSearch.getColumn(0, "CD_SITE"));
        	}
        	return true;
        };
        /************************************************************************
         * 그리드 이벤트
         ************************************************************************/

        /************************************************************************
         * 기타 이벤트
         ************************************************************************/

        this.fnRegItem = function(obj,e) {
        	//if (!this.gfnGridIsRow(this.dxGrid)) { return false; }
        	var param = {};

        	if(this.dsList.rowposition > -1){
        		param.CD_SITE = this.dsSearch.getColumn(0, "CD_SITE");
        		param.DS_SITE = this.divSearch.form.ccfCD_SYSTEM.form.DSTextBox.value;
        		param.NO_SILHENG = this.dsList.getColumn(this.dsList.rowposition, "NO_SILHENG");
        		param.DS_SILHENG = this.dsList.getColumn(this.dsList.rowposition, "DS_SILHENG");
        		param.CD_WBS_GROUP = this.dsList.getColumn(this.dsList.rowposition, "CD_RBS2");
        	}

        	// 화면 오픈.
        	// CD_MODULE은 보통 같은 모듈에서 호출하는 경우가 많으니 this.FormInfo.CD_MODULE 사용
        	// 타 모듈 화면 호출시 지정할것.
        	this.gfnFormOpen(this.FormInfo.CD_MODULE, "DWA_SILHENGREGEXCELVT", "", param);

        }

        this.fnFile = function(obj,e) {
        	if (!this.fnSelectValidate()) return false;

        	var fileManager = {};
        	fileManager.CD_GUBUN = "DW01";
        	fileManager.CD_DIR = [ this.dsSearch.getColumn(0, "CD_SITE") ];
        	// CD_DIR 만 지정시 CD_DIR 배열 순대로 키1,키2,키3 까지 자동지정
        	// 저장되는 디렉토리와 키값이 다른경우 CD_REF 추가로 사용
        	//fileManager.CD_REF = [ "A1" ];
        	// 권한 및 상태에 따라 업로드,삭제 가능여부 지정 (기본: true)

        	if(this.FormInfo.TY_AUTH == "R") {
        		fileManager.IS_READONLY = true;
        	} else {
        		fileManager.IS_READONLY = false;
        	}

        	this.gfnFileManager(fileManager, "fnFileCallback");
        };

        this.fnFileCallback = function() {
        };

        this.dsSearch_onvaluechanged = function(obj,e)
        {
        	if(e.oldvalue != e.newvalue) {
        		this.gfnSetFormStatus(this);	// 폼상태 초기화
        		this.gfnGridClear(this.dxGrid);
        	}
        };


        this.fnAPP = function(obj,e) {
        	if (!this.gfnGridIsRow(this.dxGrid)) { return false; }

        	var param = {};
        	var nRow = this.dsList.rowposition;

        	param.PARAM01 = this.dsSearch.getColumn(0,"CD_SITE");
        	param.PARAM02 = this.dsList.getColumn(nRow, "NO_SILHENG");
        	param.ID_AP = this.dsList.getColumn(nRow, "NO_ELAPDOC");	// 전자결재문서번호
        	param.YN_LINK = "N";	// 화면에서 팝업을 호출할경우 N, 링크를 통해서 화면을 오픈할경우 null 이다

        	// 화면 오픈.
        	// CD_MODULE은 보통 같은 모듈에서 호출하는 경우가 많으니 this.FormInfo.CD_MODULE 사용
        	// 타 모듈 화면 호출시 지정할것.
        	this.gfnFormOpen(this.FormInfo.CD_MODULE, "DWA_SILHENGREGEXCELVT_APPROVAL", "fnAprvDialogCallback", param);

        }

        this.fnAprvDialogCallback = function(svcID, value) {
        	// 리턴값
        	if(value){
        		// 결재완료, 결재취소, 결재상신 후에는 재조회를 한다
        		this.FormBtns.Select.click();
        	}
        };

        this.fnB = function(obj,e)
        {
        	if (!this.gfnGridIsRow(this.dxGrid)) { return false; }

        	var DS_CONST = this.dsList.getColumn(this.dsList.rowposition, "DS_CONST");

        	this.gfnConfirm(DS_CONST + " 부문 설계상세화 내역을 등록하시겠습니까?", "fnBC_callback", "B");
        }

        this.fnC = function(obj,e)
        {
        	if (!this.gfnGridIsRow(this.dxGrid)) { return false; }
        	var DS_CONST = this.dsList.getColumn(this.dsList.rowposition, "DS_CONST");

        	this.gfnConfirm(DS_CONST + " 부문 변경예산 내역을 등록하시겠습니까?", "fnBC_callback", "C");
        }

        this.fnBC_callback = function(strID, val)
        {
        	if(val == true)
        	{
        		this.fnInsertBC(strID);
        	}
        }

        this.fnInsertBC = function(ty_silheng)
        {
        	this.dsInsertBC.clearData();

        	var nrow = this.dsInsertBC.addRow();
        	this.dsInsertBC.setColumn(nrow, "CD_SITE", this.dsSearch.getColumn(0, "CD_SITE"));
        	this.dsInsertBC.setColumn(nrow, "NO_SILHENG", this.dsList.getColumn(this.dsList.rowposition, "NO_SILHENG"));
        	this.dsInsertBC.setColumn(nrow, "TY_SILHENG", ty_silheng);
        	this.dsInsertBC.setColumn(nrow, "ID_USER", this.AuthClient.ID_USER);

        	if (this.dsInsertBC.rowcount == 0) return;

        	var strSvcId    = "insert_bc";
        	var strSvcType  = "save";
        	var inProc		= "_dsProc";
        	var inData      = "insert_bc=dsInsertBC";
        	var outData     = "";
        	var strArg      = ty_silheng;
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
        // 도급 체크박스
        this.divSearch_chkYN_DOKUB_onchanged = function(obj:nexacro.CheckBox,e:nexacro.CheckBoxChangedEventInfo)
        {
        	var 설계변경금액_Index = this.dxGrid.getBindCellIndex("body", "설계변경금액");
        	var 설계변경분_Index = this.dxGrid.getBindCellIndex("body", "설계변경분");
        	var AM_DOKUB_Index = this.dxGrid.getBindCellIndex("body", "AM_DOKUB");
        	var AM_DOKUBCHG_Index = this.dxGrid.getBindCellIndex("body", "AM_DOKUBCHG");

        	if(obj.isChecked())
        	{
        		this.dxGrid.setRealColSize("body", 설계변경금액_Index, 120);
        		this.dxGrid.setRealColSize("body", 설계변경분_Index, 120);
        		this.dxGrid.setRealColSize("body", AM_DOKUB_Index, 120);
        		this.dxGrid.setRealColSize("body", AM_DOKUBCHG_Index, 120);
        	}
        	else
        	{
        		this.dxGrid.setRealColSize("body", 설계변경금액_Index, 0);
        		this.dxGrid.setRealColSize("body", 설계변경분_Index, 0);
        		this.dxGrid.setRealColSize("body", AM_DOKUB_Index, 0);
        		this.dxGrid.setRealColSize("body", AM_DOKUBCHG_Index, 0);
        	}
        };
        */
        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.DWA_SITEBUDGET_onload,this);
            this.divSearch.form.chkYN_DOKUB.addEventHandler("onchanged",this.divSearch_chkYN_DOKUB_onchanged,this);
            this.dsSearch.addEventHandler("onvaluechanged",this.dsSearch_onvaluechanged,this);
        };
        this.loadIncludeScript("DWA_SILHENGCHG.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
