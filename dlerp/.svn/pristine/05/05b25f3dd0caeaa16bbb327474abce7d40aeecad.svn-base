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
            this.set_titletext("과목구성관리");
            if (Form == this.constructor)
            {
                this._setFormPosition(1280,720);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("dsList", this);
            obj._setContents("");
            this.addChild(obj.name, obj);


            obj = new Dataset("_dsProc", this);
            obj._setContents("<ColumnInfo><Column id=\"TARGET\" type=\"STRING\" size=\"256\"/><Column id=\"SP\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"TARGET\">select</Col><Col id=\"SP\">DHFPR_GMCONS_SELECT</Col></Row><Row><Col id=\"TARGET\">insert</Col><Col id=\"SP\">DHFPR_GMCONS_INSERT</Col></Row><Row><Col id=\"TARGET\">delete</Col><Col id=\"SP\">DHFPR_GMCONS_DELETE</Col></Row><Row><Col id=\"TARGET\">update</Col><Col id=\"SP\">DHFPR_GMCONS_UPDATE</Col></Row><Row><Col id=\"TARGET\">d_select</Col><Col id=\"SP\">DHFPR_GMCALC_SELECT2</Col></Row><Row><Col id=\"TARGET\">d_insert</Col><Col id=\"SP\">DHFPR_GMCALC_INSERT</Col></Row><Row><Col id=\"TARGET\">d_delete</Col><Col id=\"SP\">DHFPR_GMCALC_DELETE</Col></Row><Row><Col id=\"TARGET\">d_update</Col><Col id=\"SP\">DHFPR_GMCALC_UPDATE</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsListSub", this);
            obj._setContents("");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsSearch", this);
            obj._setContents("<ColumnInfo><Column id=\"CD_GMGS\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Div("divSearch","0.0","10.0",null,"46.0","0",null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_cssclass("div_SEARCH_Bg");
            obj.set_text("");
            this.addChild(obj.name, obj);

            obj = new Static("sta00","0.0","10.0","118.0","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("1");
            obj.set_text("과목구성코드");
            obj.set_cssclass("sta_WF_SchLabel");
            this.divSearch.addChild(obj.name, obj);

            obj = new Div("ccfSite","sta00:0.0","10.0","300","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.getSetter("CDTextWidth").set("70");
            obj.set_taborder("2");
            obj.set_url("cmm::cmmCodeFind.xfdl");
            obj.set_text("");
            this.divSearch.addChild(obj.name, obj);

            obj = new Div("divData","0","divSearch:10",null,null,"0","0",null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_cssclass("div_DATA_Bg");
            this.addChild(obj.name, obj);

            obj = new Div("divSplitter","50%","0","5","100%",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("1");
            obj.set_cssclass("div_Splitter");
            obj.set_cursor("ew-resize");
            this.divData.addChild(obj.name, obj);

            obj = new Div("divDataLeft","0","0",null,null,"divSplitter:5","0",null,null,null,null,this.divData.form);
            obj.set_taborder("0");
            this.divData.addChild(obj.name, obj);

            obj = new Grid("objGrid","0","10",null,null,"0","0",null,null,null,null,this.divData.form.divDataLeft.form);
            obj.set_taborder("0");
            obj._setContents("");
            this.divData.form.divDataLeft.addChild(obj.name, obj);

            obj = new Div("divDataRight","divSplitter:5","0",null,null,"0","0",null,null,null,null,this.divData.form);
            obj.set_taborder("0");
            this.divData.addChild(obj.name, obj);

            obj = new Grid("objGridSub","0","10",null,null,"0","0",null,null,null,null,this.divData.form.divDataRight.form);
            obj.getSetter("sub").set("true");
            obj.set_taborder("0");
            obj._setContents("");
            this.divData.form.divDataRight.addChild(obj.name, obj);
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
        this.registerScript("DHF_GMCONS.xfdl", function() {
        this.objApp = this.gfnGetApplication();

        this.form_onload = function(obj,e)
        {
        	// -- 필수 -------------------//
        	this.gfnFormOnLoad(this);
        	this.gfnFormInfo(this);
        	// ---------------------------//

        	this.fnSetButton();
        	//this.fnSetExtendButton();
        	this.fnSetVariable();
        	this.fnSetEvent();
        	this.fnSetParameter();


        };

        /************************************************************************
         * 버튼 설정 : 화면(Tab) 전환시 마다 호출
         ************************************************************************/
        this.fnSetButton = function() {
        	// 서브 버튼 사용
        	this.gfnUseSubBtn(true, this.divData, this.divData.form.divSplitter); // divSplitter sync
        }

        /************************************************************************
         * 확장 버튼 : 화면별 버튼 설정 ID, function 연결
         ************************************************************************/
        this.fnSetExtendButton = function() {
        	//this.btn1 = this.gfnFormButtonAdd("Detail", "fnDetail1");
        };

        /************************************************************************
         * 변수 선언
         ************************************************************************/
        this.fnSetVariable = function() {
        	this.ccfSite = this.divSearch.form.ccfSite;
        	this.dxGrid = this.divData.form.divDataLeft.form.objGrid;
        	this.dxGridSub = this.divData.form.divDataRight.form.objGridSub;
        };

        /************************************************************************
         * 이벤트 설정
         ************************************************************************/
        this.fnSetEvent = function() {
        	this.ccfSite.CodeFindName = "DHX_CFMAGAM_GMCONS";
        	this.ccfSite.BeforeUserDataSetParam = "fnBeforeUserDataSetParam";
        	/*this.ccfSite.AfterCDTextChanged = "ccfSite_AfterCDTextChanged";	*/

        	this.gfnGridInit(this.dxGrid, this.dsList, "DH", "DHF_GMCONS");
        	this.dxGrid.set_selecttype("cell");
        	this.dxGrid.addEventHandler("onselectchanged", this.fnGrid_RowCellChanged, this);
        	this.dsList.addEventHandler("canrowposchange", this.dsList_canrowposchange, this);

        	this.gfnGridInit(this.dxGridSub, this.dsListSub, "DH", "DHF_GMCONS2");
        	this.dxGridSub.BeforeUserDataSetParam = "fnGridSub_BeforeUserDataSetParam";
        	/*this.dxGridSub.BeforeUserDataSetParam = "fnGridSub_BeforeUserDataSetParam";*/
        }

        /************************************************************************
         * 파라미터 설정
         ************************************************************************/
        this.fnSetParameter = function() {

        	this.dsSelect = new Dataset();
        	this.dsSelect.addColumn("CD_GMGS", "string");

        	this.dsInsert = new Dataset();
        	this.dsInsert.addColumn("CD_GMGS", "string");
        	this.dsInsert.addColumn("DS_GMGS", "string");
        	this.dsInsert.addColumn("NO_GMGS", "string");
        	this.dsInsert.addColumn("YN_CALC", "string");
        	this.dsInsert.addColumn("ID_TRANS", "string");

        	this.dsUpdate = new Dataset();
        	this.dsUpdate.addColumn("CD_GMGS", "string");
        	this.dsUpdate.addColumn("DS_GMGS", "string");
        	this.dsUpdate.addColumn("NO_GMGS", "string");
        	this.dsUpdate.addColumn("YN_CALC", "string");
        	this.dsUpdate.addColumn("ID_TRANS", "string");

        	this.dsDelete = new Dataset();
        	this.dsDelete.addColumn("CD_GMGS", "string");


        	this.dsSelectSub = new Dataset();
        	this.dsSelectSub.addColumn("CD_GMGS", "string");
        	this.dsSelectSub.addColumn("NO_CHASU", "int");

         	this.dsInsertSub = new Dataset();
         	this.dsInsertSub.addColumn("CD_GMGS", "string");
        	this.dsInsertSub.addColumn("NO_CHASU", "int");
        	this.dsInsertSub.addColumn("NO_PLUSMINUS", "string");
        	this.dsInsertSub.addColumn("TY_GUBUN", "string");
        	this.dsInsertSub.addColumn("CD_GM_START", "string");
        	this.dsInsertSub.addColumn("CD_GM_END", "string");
        	this.dsInsertSub.addColumn("ID_TRANS", "string");

        	this.dsUpdateSub = new Dataset();
        	this.dsUpdateSub.addColumn("CD_GMGS", "string");
        	this.dsUpdateSub.addColumn("NO_CHASU", "int");
        	this.dsUpdateSub.addColumn("NO_PLUSMINUS", "string");
        	this.dsUpdateSub.addColumn("TY_GUBUN", "string");
        	this.dsUpdateSub.addColumn("CD_GM_START", "string");
        	this.dsUpdateSub.addColumn("CD_GM_END", "string");
        	this.dsUpdateSub.addColumn("ID_TRANS", "string");

        	this.dsDeleteSub = new Dataset();
        	this.dsDeleteSub.addColumn("CD_GMGS", "string");
        	this.dsDeleteSub.addColumn("NO_CHASU", "int");

        }

        /************************************************************************
         * 버튼 이벤트
         ************************************************************************/
         /*
          *	조회 버튼
          */
        this.fnSelect = function() {
        	this.gfnGridBeforeSelect(this.dxGrid);

        	this.dsSelect.clearData();
        	this.dsSelect.addRow();

        	this.dsSelect.setColumn(0, "CD_GMGS", this.ccfSite.form.CDTextBox.text);

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
        				this.dsInsert.setColumn(nrow, "CD_GMGS", this.dsList.getColumn(i, "CD_GMGS"));
        				this.dsInsert.setColumn(nrow, "DS_GMGS", this.dsList.getColumn(i, "DS_GMGS"));
        				this.dsInsert.setColumn(nrow, "NO_GMGS", this.dsList.getColumn(i, "NO_GMGS"));
        				this.dsInsert.setColumn(nrow, "YN_CALC", this.dsList.getColumn(i, "YN_CALC"));
        				this.dsInsert.setColumn(nrow, "ID_TRANS", this.AuthClient.ID_USER);
        				break;

        			case "U":
        				var nrow = this.dsUpdate.addRow();
        				this.dsUpdate.setColumn(nrow, "CD_GMGS", this.dsList.getColumn(i, "CD_GMGS"));
        				this.dsUpdate.setColumn(nrow, "DS_GMGS", this.dsList.getColumn(i, "DS_GMGS"));
        				this.dsUpdate.setColumn(nrow, "NO_GMGS", this.dsList.getColumn(i, "NO_GMGS"));
        				this.dsUpdate.setColumn(nrow, "YN_CALC", this.dsList.getColumn(i, "YN_CALC"));
        				this.dsUpdate.setColumn(nrow, "ID_TRANS", this.AuthClient.ID_USER);
        				break;

        			case "D":
        				var nrow = this.dsDelete.addRow();
        				this.dsDelete.setColumn(nrow, "CD_GMGS", this.dsList.getColumn(i, "CD_GMGS"));
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
         * 서브 버튼 이벤트
         ************************************************************************/
        this.fnSelectSub = function() {
        	if (this.dxGrid.rowcount == 0 || this.dxGrid.currentrow < 0) return false;

        	this.dsListSub.clearData();
        	var cd_gmgs = this.dsList.getColumn(this.dsList.rowposition, "CD_GMGS");
        	var no_chasu = this.dsList.getColumn(this.dsList.rowposition, "NO_CHASU");
        	if (this.gfnIsNull(cd_gmgs)) {
        		return false;
        	}

        	this.gfnGridBeforeSelect(this.dxGridSub);

        	this.dsSelectSub.clearData();
        	this.dsSelectSub.addRow();
        	this.dsSelectSub.setColumn(0, "CD_GMGS", cd_gmgs);
        	this.dsSelectSub.setColumn(0, "NO_CHASU", no_chasu);

        	var strSvcId    = "detail";
        	var strSvcType  = "grid";
        	var inProc		= "_dsProc";
        	var inData      = "d_select=dsSelectSub";
        	var outData     = "dsListSub=d_select0";
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

        this.fnAddSub = function() {
        	this.gfnGridAdd(this.dxGridSub);
        }
        this.fnDelSub = function() {
        	this.gfnGridDel(this.dxGridSub);
        }
        this.fnSaveSub = function() {
        	if (!this.gfnGridValidate(this.dxGridSub)) return;

        	this.dxGridSub.updateToDataset();

        	this.dsInsertSub.clearData();
        	this.dsUpdateSub.clearData();
        	this.dsDeleteSub.clearData();

        	var cd_gmgs = this.dsList.getColumn(this.dsList.rowposition, "CD_GMGS");
        	for (var i = 0; i < this.dsListSub.rowcount; i++) {
        		var flag = this.gfnGetFlag(this.dsListSub, i);
        		switch(flag) {
        			case "I":
        				if(this.dsListSub.getColumn(i,"CD_GM_START")>this.dsListSub.getColumn(i, "CD_GM_END")) {
        				this.gfnAlert("시작과목이 종료과목보다 클 수 없습니다.");
        					return false;
        				}
        				var nrow = this.dsInsertSub.addRow();
        				this.dsInsertSub.setColumn(nrow, "CD_GMGS", cd_gmgs);
        				this.dsInsertSub.setColumn(nrow, "NO_CHASU", this.dsListSub.getColumn(i, "NO_CHASU"));
        				this.dsInsertSub.setColumn(nrow, "NO_PLUSMINUS", this.dsListSub.getColumn(i, "NO_PLUSMINUS") =="+" ? 1:-1);
        				this.dsInsertSub.setColumn(nrow, "TY_GUBUN", this.dsListSub.getColumn(i, "TY_GUBUN"));
        				this.dsInsertSub.setColumn(nrow, "CD_GM_START", this.dsListSub.getColumn(i, "CD_GM_START"));
        				this.dsInsertSub.setColumn(nrow, "CD_GM_END", this.dsListSub.getColumn(i, "CD_GM_END"));
        				this.dsInsertSub.setColumn(nrow, "ID_TRANS", this.AuthClient.ID_USER);
        				break;

        			case "U":
        				if(this.dsListSub.getColumn(i,"CD_GM_START")>this.dsListSub.getColumn(i, "CD_GM_END")) {
        				this.gfnAlert("시작과목이 종료과목보다 클 수 없습니다.");
        					return false;
        				}
        				var nrow = this.dsUpdateSub.addRow();
        				this.dsUpdateSub.setColumn(nrow, "CD_GMGS", cd_gmgs);
        				this.dsUpdateSub.setColumn(nrow, "NO_CHASU", this.dsListSub.getColumn(i, "NO_CHASU"));
        				this.dsUpdateSub.setColumn(nrow, "NO_PLUSMINUS", this.dsListSub.getColumn(i, "NO_PLUSMINUS") =="+" ? 1:-1);
        				this.dsUpdateSub.setColumn(nrow, "TY_GUBUN", this.dsListSub.getColumn(i, "TY_GUBUN"));
        				this.dsUpdateSub.setColumn(nrow, "CD_GM_START", this.dsListSub.getColumn(i, "CD_GM_START"));
        				this.dsUpdateSub.setColumn(nrow, "CD_GM_END", this.dsListSub.getColumn(i, "CD_GM_END"));
        				this.dsUpdateSub.setColumn(nrow, "ID_TRANS", this.AuthClient.ID_USER);
        				break;

        			case "D":
        				var nrow = this.dsDeleteSub.addRow();
        				this.dsDeleteSub.setColumn(nrow, "CD_GMGS", cd_gmgs);
        				this.dsDeleteSub.setColumn(nrow, "NO_CHASU", this.dsListSub.getColumn(i, "NO_CHASU"));
        				break;
        		}
        	}

        	if (this.dsInsertSub.rowcount == 0 && this.dsUpdateSub.rowcount == 0 && this.dsDeleteSub.rowcount == 0) return;

        	var strSvcId    = "savesub";
        	var strSvcType  = "save";
        	var inProc		= "_dsProc";
        	var inData      = "d_insert=dsInsertSub d_update=dsUpdateSub d_delete=dsDeleteSub";
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

        this.fnExcelSub = function() {
        	this.gfnExcelExport(this.dxGridSub);
        }

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
        	if (svcID == "select") {
        		this.gfnGridAfterSelect(this.dxGrid);
        	}
        	else if (svcID == "detail") {
        		this.gfnGridAfterSelect(this.dxGridSub);
        	}
        	else if(svcID == "save") {
        		if (errorCode == 0) {
        			this.FormBtns.Select.click();
        		} else {
        			this.gfnAlert(errorMsg);
        		}
        	}
        	else if(svcID == "savesub") {
        		if (errorCode == 0) {
        			this.FormBtns.SubSelect.click();
        		} else {
        			this.gfnAlert(errorMsg);
        		}
        	}
        }

        /************************************************************************
         * 코드파인드 이벤트
         ************************************************************************/
        this.fnGridSub_BeforeUserDataSetParam = function(id, dsUserParam, nrow) {
        	// 그리드에서 코드파인드 id는 그리드셋팅의 코드파인드 식별ID

         	if (id == "DHX_CFGMCONS21") {
        		var gubun = "";
        		var param1 = "";
        		var ty_gubun = this.gfnNvl(this.dsListSub.getColumn(this.dsListSub.rowposition, "TY_GUBUN"),"");

        		if(ty_gubun =="G") {
        			gubun = "G";
        			param1 = this.gfnNvl(this.dsListSub.getColumn(this.dsListSub.rowposition, "NO_CHASU"),"");
        		}
        		else if(ty_gubun == "T") {
        			gubun = "Y";
        			param1 = "Y";
        		}
        		else
        		{
        			gubun = "Y";
        			param1 = "N";
        		}

        		console.log(ty_gubun);
        		console.log(gubun);
                console.log(param1);
         		dsUserParam.setColumn(nrow, "TY_COMP",  gubun);
        		dsUserParam.setColumn(nrow, "PARAM1" , param1);
         	}

        	if (id == "DHX_CFGMCONS22") {
        		var gubun = "";
        		var param1 = "";
        		var ty_gubun = this.gfnNvl(this.dsListSub.getColumn(this.dsListSub.rowposition, "TY_GUBUN"),"");

        		if(ty_gubun =="G") {
        			gubun = "G";
        			param1 = this.gfnNvl(this.dsListSub.getColumn(this.dsListSub.rowposition, "NO_CHASU"),"");
        		}
        		else if(ty_gubun == "T") {
        			gubun = "Y";
        			param1 = "Y";
        		}
        		else
        		{
        			gubun = "Y";
        			param1 = "N";
        		}

        		console.log(ty_gubun);
        		console.log(gubun);
                console.log(param1);
         		dsUserParam.setColumn(nrow, "TY_COMP",  gubun);
        		dsUserParam.setColumn(nrow, "PARAM1", param1);
         	}
        	return true;
        };

        this.fnBeforeUserDataSetParam = function(id, dsUserParam, nrow) {
        	if (id == "ccfSite") {
        		dsUserParam.setColumn(nrow, "CHASU", "");
        	}
        	return true;
        }
        /************************************************************************
         * 그리드 이벤트
         ************************************************************************/
        this.fnGrid_RowCellChanged = function(obj,e)
        {
            if ((obj.oldrow > -1 && obj.oldrow == e.row)
        		|| (obj.oldrow == -1 && e.oldrow != e.row)) {
        		this.FormBtns.SubSelect.click();
        		obj.oldrow = -1;
        	}
        };

        this.dsList_canrowposchange = function(obj,e) {
        	var can_rowchange = true;
        	for (var i = 0; i < this.dsListSub.rowcount; i++) {
        		var flag = this.gfnGetFlag(this.dsListSub, i);
        		if (flag == "I" || flag == "U" || flag == "D") {
        			can_rowchange = false;
        			break;
        		}
        	}
        	if(!can_rowchange) {
        		this._row = e.newrow;
        		this.gfnConfirm("변경된 데이터가 있습니다.\r\n계속 진행하시겠습니까?", "dsList_canrowposchange_callback");
        	}
        	return can_rowchange;
        }

        this.dsList_canrowposchange_callback = function(strId, val)
        {
        	if(val == true) {
        		this.dsList.set_enableevent(false);
        		this.dsList.set_rowposition(this._row);
        		this.dsList.set_enableevent(true);
        	}
        }


        /************************************************************************
         * 기타 이벤트
         ************************************************************************/
        this.fnSearchInit = function(obj,e) {
        	if(e == null || (e.pretext != e.posttext)) {
        		this.gfnSetFormStatus(this);
        		this.gfnGridClear(this.dxGrid);
        		this.gfnGridClear(this.dxGridSub);
        	}
        }

        this.divData_ondragmove = function(obj,e)
        {
        	if(e.userdata == "splitter") {
        		this.divData.form.divSplitter.set_left(e.clientx);
        		this.divData.form.resetScroll();
        	}
        };

        this.divData_divSplitter_ondrag = function(obj,e)
        {
        	e.set_userdata("splitter");
        	return true;
        };

        this.dsSearch_onvaluechanged = function(obj,e)
        {
        	if(e.oldvalue != e.newvalue) {
        		this.gfnSetFormStatus(this);	// 폼상태 초기화
        		this.gfnGridClear(this.dxGrid);
        	}
        };

        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.form_onload,this);
            this.divData.addEventHandler("ondragmove",this.divData_ondragmove,this);
            this.divData.form.divSplitter.addEventHandler("ondrag",this.divData_divSplitter_ondrag,this);
            this.dsSearch.addEventHandler("onvaluechanged",this.dsSearch_onvaluechanged,this);
        };
        this.loadIncludeScript("DHF_GMCONS.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
