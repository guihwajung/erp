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
            this.set_titletext("WBS업로드");
            if (Form == this.constructor)
            {
                this._setFormPosition(1280,720);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("dsList", this);
            obj._setContents("<ColumnInfo><Column id=\"CD_WBS1\" type=\"STRING\" size=\"256\"/><Column id=\"CD_WBS2\" type=\"STRING\" size=\"256\"/><Column id=\"CD_WBS3\" type=\"STRING\" size=\"256\"/><Column id=\"CD_WBS4\" type=\"STRING\" size=\"256\"/><Column id=\"CD_WBS5\" type=\"STRING\" size=\"256\"/><Column id=\"CD_WBS6\" type=\"STRING\" size=\"256\"/><Column id=\"CD_CBS\" type=\"STRING\" size=\"256\"/><Column id=\"DS_WBS1\" type=\"STRING\" size=\"256\"/><Column id=\"DS_WBS2\" type=\"STRING\" size=\"256\"/><Column id=\"DS_WBS3\" type=\"STRING\" size=\"256\"/><Column id=\"DS_WBS4\" type=\"STRING\" size=\"256\"/><Column id=\"DS_WBS5\" type=\"STRING\" size=\"256\"/><Column id=\"DS_WBS6\" type=\"STRING\" size=\"256\"/><Column id=\"DS_ITEM\" type=\"STRING\" size=\"256\"/><Column id=\"SZ_SIZE\" type=\"STRING\" size=\"256\"/><Column id=\"DS_UNIT\" type=\"STRING\" size=\"256\"/><Column id=\"QN_TT_DOKUB\" type=\"BIGDECIMAL\" size=\"256\"/><Column id=\"UP_TT_DOKUB\" type=\"BIGDECIMAL\" size=\"256\"/><Column id=\"AM_TT_DOKUB\" type=\"BIGDECIMAL\" size=\"256\"/><Column id=\"QN_TT_SILHENG\" type=\"BIGDECIMAL\" size=\"256\"/><Column id=\"UP_TT_SILHENG\" type=\"BIGDECIMAL\" size=\"256\"/><Column id=\"AM_TT_SILHENG\" type=\"BIGDECIMAL\" size=\"256\"/><Column id=\"TY_DONG\" type=\"STRING\" size=\"256\"/><Column id=\"nx_flag\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("_dsProc", this);
            obj._setContents("<ColumnInfo><Column id=\"TARGET\" type=\"STRING\" size=\"256\"/><Column id=\"SP\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"TARGET\">select</Col><Col id=\"SP\">DWAPR_WBS_UPLOAD_SELECT</Col></Row><Row><Col id=\"SP\">DWAPR_WBS_UPLOAD_SAVE</Col><Col id=\"TARGET\">save</Col></Row><Row><Col id=\"TARGET\">exec</Col><Col id=\"SP\">DWAPR_WBSFROMEXCEL_INSERT</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsSearch", this);
            obj._setContents("<ColumnInfo><Column id=\"CD_SITE\" type=\"STRING\" size=\"256\"/><Column id=\"NO_SILHENG\" type=\"STRING\" size=\"256\"/><Column id=\"CD_WBS_GROUP\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"CD_SITE\"/><Col id=\"NO_SILHENG\"/><Col id=\"CD_WBS_GROUP\"/></Row></Rows>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Div("divSearch","0.0","10.0",null,"46.0","0",null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_cssclass("div_SEARCH_Bg");
            obj.set_text("");
            this.addChild(obj.name, obj);

            obj = new Div("ccfCD_SYSTEM","0.0","10.0","250","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.getSetter("CodeFindName").set("DZX_CFSITE");
            obj.getSetter("CDTextWidth").set("80");
            obj.set_taborder("0");
            obj.set_url("cmm::cmmCodeFind.xfdl");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("staCD_CORP","ccfCD_SYSTEM:0.0","10.0","92.0","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("0");
            obj.set_text("실행번호");
            obj.set_cssclass("sta_WF_SchLabelE");
            this.divSearch.addChild(obj.name, obj);

            obj = new Div("ccfNO_SILHENG","staCD_CORP:0.0","10.0","250","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.getSetter("CodeFindName").set("DWX_CFNO_SILHENG_01");
            obj.getSetter("CDTextWidth").set("80");
            obj.set_taborder("2");
            obj.set_url("cmm::cmmCodeFind.xfdl");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("staCD_SYSTEM","ccfNO_SILHENG:0.0","10.0","92.0","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("1");
            obj.set_text("현장코드");
            obj.set_cssclass("sta_WF_SchLabelE");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("staCD_CORP00","ccfNO_SILHENG:0.0","10.0","92.0","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("4");
            obj.set_text("대공종");
            obj.set_cssclass("sta_WF_SchLabelE");
            this.divSearch.addChild(obj.name, obj);

            obj = new Div("ccfCD_WBS_GROUP","staCD_CORP00:0.0","10.0","250","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.getSetter("CodeFindName").set("CF_CODE_DW_20");
            obj.getSetter("CDTextWidth").set("80");
            obj.set_taborder("5");
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
            obj = new BindItem("item0","divSearch.form.ccfCD_SYSTEM.form.CDTextBox","value","dsSearch","CD_SITE");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item2","divSearch.form.ccfNO_SILHENG.form.CDTextBox","value","dsSearch","NO_SILHENG");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item1","divSearch.form.ccfCD_WBS_GROUP.form.CDTextBox","value","dsSearch","CD_WBS_GROUP");
            this.addChild(obj.name, obj);
            obj.bind();
            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {
            this._addPreloadList("fdl","cmm::cmmCodeFind.xfdl");
        };
        
        // User Script
        this.registerScript("DWA_WBSUPLOAD.xfdl", function() {
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

        	if(!this.gfnIsNull(this.getOwnerFrame().CD_SITE) && !this.gfnIsNull(this.getOwnerFrame().NO_SILHENG)) {

        		this.dsSearch.setColumn(0, "CD_SITE", this.getOwnerFrame().CD_SITE);	// 현장코드
        		this.ccfCD_SYSTEM.form.DSTextBox.set_value(this.getOwnerFrame().DS_SITE);	// 현장코드명
        		this.ccfCD_SYSTEM.form.fnFitToContents();
        		this.dsSearch.setColumn(0, "NO_SILHENG", this.getOwnerFrame().NO_SILHENG);	// 실행번호
        		this.ccfNO_SILHENG.form.DSTextBox.set_value(this.getOwnerFrame().DS_SILHENG);	 // 실행번호명
        		this.ccfNO_SILHENG.form.fnFitToContents();

        		//this.fnExcelUpload();
        	}
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
        	this.btnWBSUpload = this.gfnFormButtonAdd("btnWBSUpload", "fnWBSUpload");
        	this.btnIEMS = this.gfnFormButtonAdd("btnIEMS", "fnIEMS");
        	this.btnCBS = this.gfnFormButtonAdd("btnCBS", "fnCBS");
        };

        /************************************************************************
         * 변수 선언
         ************************************************************************/
        this.fnSetVariable = function() {
        	this.ccfCD_SYSTEM = this.divSearch.form.ccfCD_SYSTEM;
        	this.ccfNO_SILHENG = this.divSearch.form.ccfNO_SILHENG;
        	this.ccfCD_WBS_GROUP = this.divSearch.form.ccfCD_WBS_GROUP;
        	this.dxGrid = this.divData.form.objGrid;
        };

        /************************************************************************
         * 이벤트 설정
         ************************************************************************/
        this.fnSetEvent = function() {
        	this.ccfCD_SYSTEM.CodeFindName = "DWX_CFSITE"
        	this.ccfNO_SILHENG.BeforeUserDataSetParam = "fnBeforeUserDataSetParam";


        	this.gfnGridInit(this.dxGrid, this.dsList, "DW", "DWA_WBS_UPLOAD");
        }
        /************************************************************************
         * 파라미터 설정
         ************************************************************************/
        this.fnSetParameter = function() {

        	this.dsSelect = new Dataset();
        	this.dsSelect.addColumn("CD_SITE", "string");
        	this.dsSelect.addColumn("NO_SILHENG", "string");
        	this.dsSelect.addColumn("CD_WBS_GROUP", "string");

        	this.dsSave = new Dataset();
        	this.dsSave.addColumn("TY_SAVE", "string");
        	this.dsSave.addColumn("CD_SITE", "string");
        	this.dsSave.addColumn("NO_SILHENG", "string");
        	this.dsSave.addColumn("CD_WBS_GROUP", "string");
        	this.dsSave.addColumn("CD_WBS1", "string");
        	this.dsSave.addColumn("CD_WBS2", "string");
        	this.dsSave.addColumn("CD_WBS3", "string");
        	this.dsSave.addColumn("CD_WBS4", "string");
        	this.dsSave.addColumn("CD_WBS5", "string");
        	this.dsSave.addColumn("CD_WBS6", "string");
        	this.dsSave.addColumn("CD_CBS", "string");
        	this.dsSave.addColumn("DS_WBS1", "string");
        	this.dsSave.addColumn("DS_WBS2", "string");
        	this.dsSave.addColumn("DS_WBS3", "string");
        	this.dsSave.addColumn("DS_WBS4", "string");
        	this.dsSave.addColumn("DS_WBS5", "string");
        	this.dsSave.addColumn("DS_WBS6", "string");
        	this.dsSave.addColumn("DS_ITEM", "string");
        	this.dsSave.addColumn("SZ_SIZE", "string");
        	this.dsSave.addColumn("DS_UNIT", "string");
        	this.dsSave.addColumn("QN_TT_DOKUB", "bigdecimal");
        	this.dsSave.addColumn("UP_TT_DOKUB", "bigdecimal");
        	this.dsSave.addColumn("AM_TT_DOKUB", "bigdecimal");
        	this.dsSave.addColumn("QN_TT_SILHENG", "bigdecimal");
        	this.dsSave.addColumn("UP_TT_SILHENG", "bigdecimal");
        	this.dsSave.addColumn("AM_TT_SILHENG", "bigdecimal");

        	this.dsExec = new Dataset();
        	this.dsExec.addColumn("CD_SITE", "string");
        	this.dsExec.addColumn("NO_SILHENG", "string");
        	this.dsExec.addColumn("CD_WBS1", "string");

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

        	this.dsSelect.setColumn(0, "CD_SITE", this.dsSearch.getColumn(0, "CD_SITE"));
        	this.dsSelect.setColumn(0, "NO_SILHENG", this.dsSearch.getColumn(0, "NO_SILHENG"));
        	this.dsSelect.setColumn(0, "CD_WBS_GROUP", this.dsSearch.getColumn(0, "CD_WBS_GROUP"));

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

        	this.dsSave.clearData();

        	for (var i = 0; i < this.dsList.rowcount; i++) {
        		var flag = this.gfnGetFlag(this.dsList, i);
        		if(flag == "I" || flag == "U" || flag == "D"){

        			var nrow = this.dsSave.addRow();

        			this.dsSave.setColumn(nrow, "TY_SAVE", flag);
        			this.dsSave.setColumn(nrow, "CD_SITE", this.dsSearch.getColumn(0, "CD_SITE"));
        			this.dsSave.setColumn(nrow, "NO_SILHENG", this.dsSearch.getColumn(0, "NO_SILHENG"));
        			this.dsSave.setColumn(nrow, "CD_WBS_GROUP", this.dsSearch.getColumn(0, "CD_WBS_GROUP"));
        			this.dsSave.setColumn(nrow, "CD_WBS1", this.dsList.getColumn(i, "CD_WBS1"));
        			this.dsSave.setColumn(nrow, "CD_WBS2", this.dsList.getColumn(i, "CD_WBS2"));
        			this.dsSave.setColumn(nrow, "CD_WBS3", this.dsList.getColumn(i, "CD_WBS3"));
        			this.dsSave.setColumn(nrow, "CD_WBS4", this.dsList.getColumn(i, "CD_WBS4"));
        			this.dsSave.setColumn(nrow, "CD_WBS5", this.dsList.getColumn(i, "CD_WBS5"));
        			this.dsSave.setColumn(nrow, "CD_WBS6", this.dsList.getColumn(i, "CD_WBS6"));
        			this.dsSave.setColumn(nrow, "CD_CBS", this.dsList.getColumn(i, "CD_CBS"));
        			this.dsSave.setColumn(nrow, "DS_WBS1", this.dsList.getColumn(i, "DS_WBS1"));
        			this.dsSave.setColumn(nrow, "DS_WBS2", this.dsList.getColumn(i, "DS_WBS2"));
        			this.dsSave.setColumn(nrow, "DS_WBS3", this.dsList.getColumn(i, "DS_WBS3"));
        			this.dsSave.setColumn(nrow, "DS_WBS4", this.dsList.getColumn(i, "DS_WBS4"));
        			this.dsSave.setColumn(nrow, "DS_WBS5", this.dsList.getColumn(i, "DS_WBS5"));
        			this.dsSave.setColumn(nrow, "DS_WBS6", this.dsList.getColumn(i, "DS_WBS6"));
        			this.dsSave.setColumn(nrow, "DS_ITEM", this.dsList.getColumn(i, "DS_ITEM"));
        			this.dsSave.setColumn(nrow, "SZ_SIZE", this.dsList.getColumn(i, "SZ_SIZE"));
        			this.dsSave.setColumn(nrow, "DS_UNIT", this.dsList.getColumn(i, "DS_UNIT"));
        			this.dsSave.setColumn(nrow, "QN_TT_DOKUB", this.dsList.getColumn(i, "QN_TT_DOKUB"));
        			this.dsSave.setColumn(nrow, "UP_TT_DOKUB", this.dsList.getColumn(i, "UP_TT_DOKUB"));
        			this.dsSave.setColumn(nrow, "AM_TT_DOKUB", this.dsList.getColumn(i, "AM_TT_DOKUB"));
        			this.dsSave.setColumn(nrow, "QN_TT_SILHENG", this.dsList.getColumn(i, "QN_TT_SILHENG"));
        			this.dsSave.setColumn(nrow, "UP_TT_SILHENG", this.dsList.getColumn(i, "UP_TT_SILHENG"));
        			this.dsSave.setColumn(nrow, "AM_TT_SILHENG", this.dsList.getColumn(i, "AM_TT_SILHENG"));

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
        			this.ccfCD_SYSTEM.form.CDTextBox.setFocus();
        		}
        		this.gfnAlert("현장코드를 입력하세요.", "fnVaidateCallback");
        	}
        	else if(this.gfnIsNull(this.dsSearch.getColumn(0, "NO_SILHENG"))){
        		validate = false;
        		// Alert후 실행할 처리
        		this.fnVaidateCallback = function() {
        			this.ccfNO_SILHENG.form.CDTextBox.setFocus();
        		}
        		this.gfnAlert("실행번호를 입력하세요.", "fnVaidateCallback");
        	}
        	else if(this.gfnIsNull(this.dsSearch.getColumn(0, "CD_WBS_GROUP"))){
        		validate = false;
        		// Alert후 실행할 처리
        		this.fnVaidateCallback = function() {
        			this.ccfCD_WBS_GROUP.form.CDTextBox.setFocus();
        		}
        		this.gfnAlert("대공종을 입력하세요.", "fnVaidateCallback");
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
        	}
        	else if(svcID == "save") {
        		if (errorCode == 0) {
        			this.fn_AfterExec();
        		} else {
        			this.gfnAlert(errorMsg);
        		}
        	}
        	else if(svcID == "exec"){
        		if (errorCode == 0) {
        			this.FormBtns.Select.click();
        		} else {
        			this.gfnAlert(errorMsg);
        		}
        	}
        };


        /************************************************************************
         * 코드파인드 이벤트
         ************************************************************************/

        this.fnBeforeUserDataSetParam = function(id, dsUserParam, nrow) {

        	if (id == "ccfNO_SILHENG") {
        		dsUserParam.setColumn(nrow, "CD_SITE", this.dsSearch.getColumn(0, "CD_SITE"));	// 현장코드
        	}
        	return true;
        };

        /************************************************************************
         * 그리드 이벤트
         ************************************************************************/

        /************************************************************************
         * 기타 이벤트
         ************************************************************************/
        this.fnWBSUpload = function(obj,e) {
        	//if (!this.fnSelectValidate()) return false;
        	this.gfnExcelImport("dsList","","A3","fnExcelImportCallback","import",this);
        };

        this.fnExcelImportCallback = function(sImportId, dsOut, dsSheet) {
        	// 다중 시트 처리시 양식의 해당 시트여부를 체크하고자 할땐 dsSheet 시트명 체크
        // 	if (dsSheet.rowcount > 1) {
        // 		trace(dsSheet.getColumn(1, "sheetname"));
        // 	}

        	// 엑셀 양식과 그리드 컬럼이 그대로 일치 하는경우 아래와 같이 처리.
        	// 아닌경우는 이부분 주석처리
        	for (var i=0; i< this.dsList.getColCount(); i++)
        	{
        		sColumnId = "Column"+i;
        		var sColumnNm = this.gfnGridGetBindColumnNameByIndex(this.dxGrid, i);
        		if (sColumnNm != "" && sColumnId != sColumnNm)
        		{
        			dsOut.updateColID(sColumnId, sColumnNm);
        		}
        	}

        	// 양식이 일치하고 엑셀내역을 기존데이터에 Insert하지 않고
        	// 엑셀내역 그대로 그리드 반영할 시 copyData
        	//this.dsListSub.copyData(dsOut);

        	this.dsList.set_enableevent(false);
        	for (var i=0; i<dsOut.rowcount; i++) {

        		/* 일단 현재 무조건 인서트만 가능한 요건 추후 변경될수있어 주석처리 2019-06-27
        		var srow = -1;
        		for(var j=0; j<dsList.rowcount; j++){
        			if(dsOut.getColumn(i, "CD_COST") == dsList.getColumn(j, "CD_COST")){
        				srow = j;
        			}
        		}

        		if(srow > -1){
        			this.dsList.setColumn(srow, this.ucFlag, "U");
        			this.dsList.copyRow(srow, dsOut, i);
        		}else{
        			var nrow = this.dsList.addRow();
        			this.dsList.setColumn(nrow, this.ucFlag, "I");

        			// 양식이 일치하는 경우 copyRow
        			this.dsList.copyRow(nrow, dsOut, i);
        		}*/
        		if(!this.gfnIsNull(dsOut.getColumn(i, "CD_WBS1"))){
        			var nrow = this.dsList.addRow();
        			this.dsList.setColumn(nrow, this.ucFlag, "I");
        			this.dsList.copyRow(nrow, dsOut, i);
        		}

        	}
        	this.dsList.set_enableevent(true);
        	this.gfnSetFormStatus(this, "I");
        };
        this.dsSearch_onvaluechanged = function(obj,e)
        {
        	if(e.oldvalue != e.newvalue) {
        		this.gfnSetFormStatus(this);	// 폼상태 초기화
        		this.gfnGridClear(this.dxGrid);
        	}
        };

        this.fnIEMS = function(obj,e) {

        	var param = {};
        	param.pCd_Site = this.dsSearch.getColumn(0, "CD_SITE");
        	param.pNO_Silheng = this.dsSearch.getColumn(0, "NO_SILHENG");

        	// 화면 오픈.
        	// CD_MODULE은 보통 같은 모듈에서 호출하는 경우가 많으니 this.FormInfo.CD_MODULE 사용
        	// 타 모듈 화면 호출시 지정할것.
        	this.gfnFormOpenNonAuth("DWA", "DWA_IEMSDLG", "fnCallbackIEMS", param, 400, 230);
        };

        this.fnCallbackIEMS = function(strID, value){
        	if(value){
        		this.FormBtns.Select.click();
        	}
        };

        this.fn_AfterExec=function(){

        	this.dsExec.clearData();
        	this.dsExec.addRow();

        	this.dsExec.setColumn(0, "CD_SITE", this.dsSearch.getColumn(0, "CD_SITE"));
        	this.dsExec.setColumn(0, "NO_SILHENG", this.dsSearch.getColumn(0, "NO_SILHENG"));
        	this.dsExec.setColumn(0, "CD_WBS1", this.dsSearch.getColumn(0, "CD_WBS_GROUP"));

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
        };

        this.fnCBS = function(obj,e) {

        	var param = {};
        	param.CD_SITE = this.dsSearch.getColumn(0, "CD_SITE");
        	param.DS_SITE = this.ccfCD_SYSTEM.form.DSTextBox.text;
        	param.NO_SILHENG = this.dsSearch.getColumn(0, "NO_SILHENG");
        	param.DS_SILHENG = this.ccfNO_SILHENG.form.DSTextBox.text;

        	this.gfnFormOpen(this.FormInfo.CD_MODULE, "DWA_FROMWBS", "", param);

        };
        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.DWA_SITEBUDGET_onload,this);
            this.dsSearch.addEventHandler("onvaluechanged",this.dsSearch_onvaluechanged,this);
        };
        this.loadIncludeScript("DWA_WBSUPLOAD.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
