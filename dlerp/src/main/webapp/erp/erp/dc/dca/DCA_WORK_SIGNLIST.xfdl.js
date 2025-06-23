(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("DCA_REGISTLIST");
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
            obj._setContents("<ColumnInfo><Column id=\"TARGET\" type=\"STRING\" size=\"256\"/><Column id=\"SP\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"TARGET\">select</Col><Col id=\"SP\">DCAPR_WORK_SIGNLIST_SELECT</Col></Row><Row><Col id=\"TARGET\">save</Col><Col id=\"SP\">DCAPR_WORK_SIGNLIST_SAVE</Col></Row><Row><Col id=\"TARGET\">combo</Col><Col id=\"SP\">DZXPR_COMBO_SELECT</Col></Row><Row><Col id=\"TARGET\">signInsert</Col><Col id=\"SP\">DCAPR_WORK_SIGNLIST_SIGN_INSERT</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsSearch", this);
            obj._setContents("<ColumnInfo><Column id=\"YR_WORK\" type=\"STRING\" size=\"256\"/><Column id=\"DS_VENDOR\" type=\"STRING\" size=\"256\"/><Column id=\"CD_STATUS\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"CD_STATUS\"/><Col id=\"DS_VENDOR\"/></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsCD_STATUS", this);
            obj._setContents("<ColumnInfo><Column id=\"CD_CODE\" type=\"STRING\" size=\"256\"/><Column id=\"DS_CODE\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new FileDialog("fdg00", this);
            this.addChild(obj.name, obj);


            obj = new FileDownTransfer("FileDownTransfer00", this);
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Div("divSearch","0.0","10.0",null,"46.0","0",null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_cssclass("div_SEARCH_Bg");
            obj.set_formscrolltype("none");
            this.addChild(obj.name, obj);

            obj = new Static("staYR_WORK","0.0","10.0","92.0","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("1");
            obj.set_text("대상년도");
            obj.set_cssclass("sta_WF_SchLabelE");
            this.divSearch.addChild(obj.name, obj);

            obj = new Div("ctclYR_WORK","staYR_WORK:0.0","10.0","60","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("2");
            obj.set_url("cmm::cmmCalYY.xfdl");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("staDS_VENDOR","ctclYR_WORK:0.0","10.0","92.0","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("3");
            obj.set_text("업체명");
            obj.set_cssclass("sta_WF_SchLabel");
            this.divSearch.addChild(obj.name, obj);

            obj = new Edit("ctxtDS_VENDOR","staDS_VENDOR:0.0","10.0","200","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("4");
            obj.set_value("");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("staCD_STATUS","ctxtDS_VENDOR:0.0","10.0","92.0","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("5");
            obj.set_text("상태");
            obj.set_cssclass("sta_WF_SchLabel");
            this.divSearch.addChild(obj.name, obj);

            obj = new Combo("ccboCD_STATUS","staCD_STATUS:0.0","10.0","150","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("6");
            obj.set_innerdataset("dsCD_STATUS");
            obj.set_codecolumn("CD_CODE");
            obj.set_datacolumn("DS_CODE");
            this.divSearch.addChild(obj.name, obj);

            obj = new Div("divData","0","divSearch:10",null,null,"0","0",null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_cssclass("div_DATA_Bg");
            obj.set_text("");
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
            obj = new BindItem("item0","divSearch.form.ctclYR_WORK.form.TextBox","value","dsSearch","YR_WORK");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item1","divSearch.form.ctxtDS_VENDOR","value","dsSearch","DS_VENDOR");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item2","divSearch.form.ccboCD_STATUS","value","dsSearch","CD_STATUS");
            this.addChild(obj.name, obj);
            obj.bind();
            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {
            this._addPreloadList("fdl","cmm::cmmCalYY.xfdl");
        };
        
        // User Script
        this.registerScript("DCA_WORK_SIGNLIST.xfdl", function() {
        this.objApp = this.gfnGetApplication();

        this.DCA_REGISTLIST_onload = function(obj,e)
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

        	this.fnSetCombo();

        	this.fileConfig = this.gfnGetFileConfig();

        	if(!this.gfnIsNull(this.getOwnerFrame().YR_WORK))
        	{
        		this.dsSearch.setColumn(0, "YR_WORK", this.getOwnerFrame().YR_WORK);
        	}
        	else
        	{
        		this.dsSearch.setColumn(0, "YR_WORK", this.gfnGetDate().substr(0,4));
        	}

        };

        /************************************************************************
         * 버튼 설정 : 화면(Tab) 전환시 마다 호출
         * 서브버튼 사용 및 공통버튼 강제 제어시 여기서 처리
         ************************************************************************/
        this.fnSetButton = function() {
        	// Select, Add, Del, Save, Excel, Print.
        	// SubSelect, SubAdd, SubDel, SuubSave, SubExcel
        }

        /************************************************************************
         * 확장 버튼 : 화면별 버튼 설정 ID, function 연결 (화면버튼관리)
         ************************************************************************/
        this.fnSetExtendButton = function() {
        	this.btnAddVendor = this.gfnFormButtonAdd("btnAddVendor", "fnAddVendor");
        	this.btnSend = this.gfnFormButtonAdd("btnSend", "fnSend");
        	this.btnSign = this.gfnFormButtonAdd("btnSign", "fnSign");
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
        	this.gfnGridInit(this.dxGrid, this.dsList, "DC", "DCA_WORK_SIGNLIST");
        };

        /************************************************************************
         * 파라미터 설정
         ************************************************************************/
        this.fnSetParameter = function() {
        	this.dsSelect = new Dataset();
        	this.dsSelect.addColumn("YR_WORK", "string");
        	this.dsSelect.addColumn("DS_VENDOR", "string");
        	this.dsSelect.addColumn("CD_STATUS", "string");

        	this.dsSave = new Dataset();
        	this.dsSave.addColumn("TY_WRK", "string");
        	this.dsSave.addColumn("YR_WORK", "string");
        	this.dsSave.addColumn("CD_VENDOR", "string");

        	this.dsSign = new Dataset();
        	this.dsSign.addColumn("YR_WORK", "string");
        	this.dsSign.addColumn("CD_VENDOR", "string");
        	this.dsSign.addColumn("ADDFILE_NO", "int");
        	this.dsSign.addColumn("DS_HASHVAL", "string");
        	this.dsSign.addColumn("DS_SIGNVAL", "string");
        	this.dsSign.addColumn("DN_CERTORGNAME", "string");
        	this.dsSign.addColumn("DN_SIGNNAME", "string");

        	this.dsSignInsert = new Dataset();
        	this.dsSignInsert.addColumn("YR_WORK", "string");
        	this.dsSignInsert.addColumn("CD_VENDOR", "string");
        	this.dsSignInsert.addColumn("ADDFILE_NO", "int");
        	this.dsSignInsert.addColumn("DS_SIGNVAL", "string");
        	this.dsSignInsert.addColumn("DN_CERTORGNAME", "string");
        	this.dsSignInsert.addColumn("DN_SIGNNAME", "string");
        	this.dsSignInsert.addColumn("DS_HASHVAL", "string");
        };

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

        	this.dsSelect.setColumn(0, "YR_WORK", this.dsSearch.getColumn(0, "YR_WORK"));
        	this.dsSelect.setColumn(0, "DS_VENDOR", this.dsSearch.getColumn(0, "DS_VENDOR"));
        	this.dsSelect.setColumn(0, "CD_STATUS", this.dsSearch.getColumn(0, "CD_STATUS"));

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
        						strArg, 		// 입력값으로 보낼 arguments, strFormData="20120607"
        						callBackFnc); // 통신방법 정의 [생략가능]
        }

        /*
         *	입력 버튼
         */
        this.fnAdd = function() {
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
        	this.dsSave.clearData();

        	for (var i = 0; i < this.dsList.rowcount; i++) {
        		var flag = this.gfnGetFlag(this.dsList, i);
        		switch(flag) {
        			case "D":
        				var nrow = this.dsSave.addRow();
        				this.dsSave.setColumn(nrow, "TY_WRK", flag);
        				this.dsSave.setColumn(nrow, "YR_WORK", this.dsSearch.getColumn(0, "YR_WORK"));
        				this.dsSave.setColumn(nrow, "CD_VENDOR", this.dsList.getColumn(i, "CD_VENDOR"));
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
        						strArg, 		// 입력값으로 보낼 arguments, strFormData="20120607"
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
        this.fnSelectValidate = function() {
           var validate = true;

           return validate;
        };

        /************************************************************************
         * 콜백 이벤트
         ***********************************************************************
         /
        /*
         *	콜백 처리
         */
        this.fnCallback = function(svcID, errorCode, errorMsg)
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
        	else if(svcID == "update") {
        		if(errorCode == 0) {
        			this.fnBonsaSign();
        		}
        		else
        		{
        			this.gfnAlert(errorMsg);
        		}
        	}
        	else if(svcID == "sign") {
        		if (errorCode == 0) {
        			this.fnSaveSign();
        		} else {
        			this.gfnAlert(errorMsg);
        		}
        	}
        	else if(svcID == "signInsert") {
        		if (errorCode == 0) {
        			this.fnCallback_callback = function()
        			{
        				this.FormBtns.Select.click();
        			}
        			this.gfnAlert("업체통보 정상처리되었습니다.","fnCallback_callback");
        			//this.gfnAlert("본사서명 정상처리되었습니다.","fnCallback_callback");
        		} else {
        			this.gfnAlert(errorMsg);
        		}
        	}
        	else if(svcID == "combo") {
        		if (errorCode == 0) {
        			this.dsGubun.insertRow(0);
        			this.dsGubun.setColumn(0, "CD_CODE", "");
        			this.dsGubun.setColumn(0, "DS_CODE", "전체");
        			this.divSearch.form.ccbo_Gubun.set_index(1);
        			this.FormBtns.Select.click();
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
        this.divData_objGrid_oncelldblclick = function(obj,e)
        {
        	if(this.gfnGridGetBindColumnNameByIndex(obj, e.cell) == "DS_SAVEFILE") {
        		if(!this.gfnIsNull(this.dsList.getColumn(e.row, "DS_SAVEFILE")))
        		{
        			this.fnDownload();
        		}
        	}
        };
        /************************************************************************
         * 콤보 이벤트
         ************************************************************************/
        this.fnSetCombo = function()
        {
        	this.dsCombo = new Dataset();
        	this.dsCombo.addColumn("CD_SYSTEM", "string");
        	this.dsCombo.addColumn("CD_TYPE", "string");

        	this.dsCombo.addRow();
        	this.dsCombo.setColumn(0, "CD_SYSTEM", "DC");
        	this.dsCombo.setColumn(0, "CD_TYPE", "80");

        	var strSvcId    = "combo";
        	var strSvcType  = "select";
        	var inProc		= "_dsProc";
        	var inData      = "combo=dsCombo";
        	var outData     = "dsCD_STATUS=combo0";
        	var strArg      = "";
        	var callBackFnc = "fnCallbackCombo";

        	this.gfnTransaction( strSvcId , 	// transaction을 구분하기 위한 svc id값
        						strSvcType , 	// transaction을 요청할 구분
        						inProc,			// Procedure 정보 Dataset 이름
        						inData , 		// 입력값으로 보낼 dataset id , a=b형태로 실제이름과 입력이름을 매칭
        						outData , 		// 처리결과값으로 받을 dataset id, a=b형태로 실제이름과 입력이름을 매칭
        						strArg, 		// 입력값으로 보낼 arguments, strFormData="20120607"
        						callBackFnc); // 통신방법 정의 [생략가능]
        }

        this.fnCallbackCombo = function(svcID, errorCode, errorMsg)
        {
        	if(svcID == "combo") {
        		this.dsCD_STATUS.insertRow(0);
        		this.dsCD_STATUS.setColumn(0, "CD_CODE", "");
        		this.dsCD_STATUS.setColumn(0, "DS_CODE", "전체");
        		this.divSearch.form.ccboCD_STATUS.set_index(0);
        	}
        };

        /************************************************************************
         * 기타 이벤트
         ************************************************************************/
        this.dsSearch_onvaluechanged = function(obj,e)
        {
        	if(this.dsList.rowcount != 0){
        		if(e.oldvalue != e.newvalue) {
        			this.gfnSetFormStatus(this);	// 폼상태 초기화
        			this.gfnGridClear(this.dxGrid);
        		}
        	}
        };

        // 대상업체 등록.
        this.fnAddVendor = function()
        {
        	if(this.gfnIsNull(this.dsSearch.getColumn(0, "YR_WORK")))
        	{
        		this.gfnAlert("대상년도를 먼저 입력해주세요.");

        		return false;
        	}

        	var param = {};

        	param.YR_WORK = this.dsSearch.getColumn(0, "YR_WORK");
        	param.CD_MODULE = "DC";

        	this.gfnFormOpen(this.FormInfo.CD_MODULE, "DCA_WORK_SIGNLIST_DLG", "fnAddVendor_callback", param, 800, 800);
        }

        this.fnAddVendor_callback = function(strID, val)
        {
        	if(val == true)
        	{
        		this.FormBtns.Select.click();
        	}
        }


        // 업체 송부
        this.fnSend = function()
        {
        	if(this.dsList.findRow("CHK", 1) < 0)
        	{
        		this.gfnAlert("선택된 업체가 없습니다.");
        	}

        	var cnt = 0;

        	for(var i = 0; i < this.dsList.rowcount; i++)
        	{
        		if(this.dsList.getColumn(i, "CHK") == 1)
        		{
        			cnt++;
        		}
        	}

        	var msg = "선택한 업체 수 : [" + cnt + "]건"
        			+ "\n\n업체송부 진행하시겠습니까?";

        	this.gfnConfirm(msg, "fnSend_callback");
        }

        this.fnSend_callback = function(strID, val)
        {
        	if(val == true)
        	{
        		this.fnAutoFile();
        	}
        }

        this.fnAutoFile = function()
        {
        	// Global Dataset 사용이므로 반드시 clearData
        	var dsAutoForm = this.objApp.gdsAutoForm;
        	dsAutoForm.clearData();

        	var cd_vendors= "";

        	for(var i = 0; i < this.dsList.rowcount; i++)
        	{
        		if(this.dsList.getColumn(i, "CHK") == 1)
        		{
        			if(cd_vendors != "") cd_vendors += ",";
        			cd_vendors += this.dsList.getColumn(i, "CD_VENDOR");
        		}
        	}

        	var nrow = dsAutoForm.addRow();
        	dsAutoForm.setColumn(nrow, "TY_WORK", "D-01");
        	dsAutoForm.setColumn(nrow, "ATTR01", this.dsSearch.getColumn(0, "YR_WORK"));
        	dsAutoForm.setColumn(nrow, "ATTR02", cd_vendors);
        	dsAutoForm.setColumn(nrow, "ATTR03", "");
        	dsAutoForm.setColumn(nrow, "ATTR04", "");
        	dsAutoForm.setColumn(nrow, "ATTR05", "");
        	dsAutoForm.setColumn(nrow, "ATTR06", "");
        	dsAutoForm.setColumn(nrow, "ID_USER", this.AuthClient.ID_USER);
        	this.gfnAutoForm("fnAutoFile_Callback");	// callback 생략가능
        }

        this.fnAutoFile_Callback = function(svcID, errorCode, errorMsg, strArg) {
        	if(errorCode == 0) {
        		this.fnSendAfter();
        	} else {
        		this.gfnAlert(errorMsg);
        	}
        }

        // 계약서파일 생성 후 상태값 변경.
        this.fnSendAfter = function()
        {
        	this.dsSave.clearData();

        	for(var i = 0; i < this.dsList.rowcount; i++)
        	{
        		if(this.dsList.getColumn(i, "CHK") == 1)
        		{
        			var nrow = this.dsSave.addRow();
        			this.dsSave.setColumn(nrow, "TY_WRK" ,"U");
        			this.dsSave.setColumn(nrow, "YR_WORK", this.dsSearch.getColumn(0, "YR_WORK"));
        			this.dsSave.setColumn(nrow, "CD_VENDOR", this.dsList.getColumn(i, "CD_VENDOR"));
        		}
        	}

        	if (this.dsSave.rowcount == 0) return;

        	var strSvcId    = "update";
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
        						strArg, 		// 입력값으로 보낼 arguments, strFormData="20120607"
        						callBackFnc); // 통신방법 정의 [생략가능]
        }


        this.fnDownload = function() {
        	//if(!this.gfnIsNull(this.gfnGetFlag(this.dsList, this.dsList.rowposition))) return;

        	var sFilename = this.dsList.getColumn(this.dsList.rowposition, "DS_SAVEFILE");
        	var sFilepath = this.dsList.getColumn(this.dsList.rowposition, "SAVEFILEPATH");
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

        this.fnSign = function() {
        	if(this.dsList.findRow("CHK", 1) < 0)
        	{
        		this.gfnAlert("선택된 데이터가 없습니다.");
        		return;
        	}

        	var cnt = 0;
        	for (var i = 0 ; i < this.dsList.rowcount; i++)
        	{
        		if(this.dsList.getColumn(i, "CHK") == 1)
        		{
        			cnt++;
        		}
        	}

        	var msg = "선택한 업체 수 : [" + cnt + "건]"
        			+ "\n\n본사서명 진행하시겠습니까?";

        	this.gfnConfirm(msg, "fnSign_callback");
        }

        this.fnSign_callback = function(strId, val)
        {
        	if(val == true) {
        		this.fnBonsaSign();
        	}
        }

        this.fnBonsaSign = function() {
        	this.dsSign.clearData();
        	for (var i = 0; i < this.dsList.rowcount; i++) {
        		if(this.dsList.getColumn(i, "CHK") == 1)
        		{
        			var nrow = this.dsSign.addRow();
        			var arrVal	= [];
        			arrVal.push(this.dsList.getColumn(i,"YR_WORK"));
        			arrVal.push(this.dsList.getColumn(i,"CD_VENDOR"));
        			arrVal.push(this.dsList.getColumn(i,"ADDFILE_NO"));
        			var strVal = arrVal.join("/");

        			this.dsSign.setColumn(nrow, "YR_WORK", this.dsList.getColumn(i, "YR_WORK"));
        			this.dsSign.setColumn(nrow, "CD_VENDOR", this.dsList.getColumn(i, "CD_VENDOR"));
        			this.dsSign.setColumn(nrow, "ADDFILE_NO", this.dsList.getColumn(i, "ADDFILE_NO"));
        			this.dsSign.setColumn(nrow, "DS_HASHVAL", strVal);
        		}
        	}

        	var strSvcId    = "sign";
        	var strSvcType  = "pki/sign";
        	var inProc		= "";
        	var inData      = "input=dsSign";
        	var outData     = "dsSign=output0";
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

        this.fnSaveSign = function() {
        	this.dsSignInsert.clearData();

        	for (var i = 0; i < this.dsSign.rowcount; i++) {
        		var nrow = this.dsSignInsert.addRow();
        		this.dsSignInsert.setColumn(nrow, "YR_WORK", this.dsSign.getColumn(i, "YR_WORK"));
        		this.dsSignInsert.setColumn(nrow, "CD_VENDOR", this.dsSign.getColumn(i, "CD_VENDOR"));
        		this.dsSignInsert.setColumn(nrow, "ADDFILE_NO", this.dsSign.getColumn(i, "ADDFILE_NO"));
        		this.dsSignInsert.setColumn(nrow, "DS_SIGNVAL", this.dsSign.getColumn(i, "DS_SIGNVAL"));
        		this.dsSignInsert.setColumn(nrow, "DN_CERTORGNAME", this.dsSign.getColumn(i, "DN_CERTORGNAME"));
        		this.dsSignInsert.setColumn(nrow, "DN_SIGNNAME", this.dsSign.getColumn(i, "DN_SIGNNAME"));
        		this.dsSignInsert.setColumn(nrow, "DS_HASHVAL", this.dsSign.getColumn(i, "DS_HASHVAL"));
        	}

        	var strSvcId    = "signInsert";
        	var strSvcType  = "save";
        	var inProc		= "_dsProc";
        	var inData      = "signInsert=dsSignInsert";
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

        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.DCA_REGISTLIST_onload,this);
            this.divData.form.objGrid.addEventHandler("oncelldblclick",this.divData_objGrid_oncelldblclick,this);
            this.dsSearch.addEventHandler("onvaluechanged",this.dsSearch_onvaluechanged,this);
            this.fdg00.addEventHandler("onclose",this.fdg00_onclose,this);
        };
        this.loadIncludeScript("DCA_WORK_SIGNLIST.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
