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
            this.set_titletext("마감현황관리");
            if (Form == this.constructor)
            {
                this._setFormPosition(1280,720);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("dsList", this);
            obj._setContents("");
            this.addChild(obj.name, obj);


            obj = new Dataset("_dsProc", this);
            obj._setContents("<ColumnInfo><Column id=\"TARGET\" type=\"STRING\" size=\"256\"/><Column id=\"SP\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"TARGET\">select</Col><Col id=\"SP\">DWDPR_MAGAMLIST_SELECT</Col></Row><Row><Col id=\"TARGET\">save</Col><Col id=\"SP\">DWDPR_MAGAMLIST_SAVE</Col></Row><Row><Col id=\"TARGET\">selectDeadline</Col><Col id=\"SP\">DWDPR_DEADLINEDAY_SELECT</Col></Row><Row><Col id=\"TARGET\">selectColumn</Col><Col id=\"SP\">DWDPR_MAGAMLIST_COLUMN_SELECT</Col></Row><Row><Col id=\"TARGET\">combo</Col><Col id=\"SP\">DZXPR_COMBO_COMMON_SELECT_01</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsSearch", this);
            obj._setContents("<ColumnInfo><Column id=\"YM_WORK\" type=\"STRING\" size=\"256\"/><Column id=\"CD_SITE\" type=\"STRING\" size=\"256\"/><Column id=\"YN_USE\" type=\"STRING\" size=\"256\"/><Column id=\"COLUMN\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"YN_USE\"/><Col id=\"COLUMN\">DT_COLUMN</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsCOLUMN", this);
            obj._setContents("<ColumnInfo><Column id=\"CODE\" type=\"STRING\" size=\"256\"/><Column id=\"VALUE\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"VALUE\">마감일자</Col><Col id=\"CODE\">DT_COLUMN</Col></Row><Row><Col id=\"VALUE\">마감금액</Col><Col id=\"CODE\">AM_COLUMN</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsYN_USE", this);
            obj._setContents("<ColumnInfo><Column id=\"CD_CODE\" type=\"STRING\" size=\"256\"/><Column id=\"DS_CODE\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row/></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsDeadline", this);
            obj._setContents("");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsColumnView", this);
            obj._setContents("");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Div("divSearch","0.0","10.0",null,"46.0","0",null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_cssclass("div_SEARCH_Bg");
            obj.set_formscrolltype("none");
            this.addChild(obj.name, obj);

            obj = new Static("staYM_WORK","0.0","10.0","92.0","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("6");
            obj.set_text("기성년월");
            obj.set_cssclass("sta_WF_SchLabelE");
            this.divSearch.addChild(obj.name, obj);

            obj = new Div("ctclYM_WORK","staYM_WORK:0.0","10.0","80","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("1");
            obj.set_url("cmm::cmmCalMM.xfdl");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("staCOLUMN","ctclYM_WORK:0.0","10.0","92.0","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("6");
            obj.set_text("조회구분");
            obj.set_visible("false");
            obj.set_cssclass("sta_WF_SchLabel");
            this.divSearch.addChild(obj.name, obj);

            obj = new Radio("crdoCOLUMN","staCOLUMN:0.0","10.0","150","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("1");
            obj.set_innerdataset("dsCOLUMN");
            obj.set_direction("vertical");
            obj.set_fittocontents("width");
            obj.set_codecolumn("CODE");
            obj.set_datacolumn("VALUE");
            obj.set_visible("false");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("staCD_SITE","crdoCOLUMN:0.0","10.0","92.0","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("6");
            obj.set_text("현장코드");
            obj.set_cssclass("sta_WF_SchLabel");
            this.divSearch.addChild(obj.name, obj);

            obj = new Div("ccfCD_SITE","staCD_SITE:0.0","10.0","200","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.getSetter("CodeFindName").set("DZX_CFSITE");
            obj.getSetter("CDTextWidth").set("80");
            obj.set_taborder("0");
            obj.set_url("cmm::cmmCodeFind.xfdl");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("staYN_USE","ccfCD_SITE:0.0","10.0","92.0","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("6");
            obj.set_text("관리대상");
            obj.set_visible("false");
            obj.set_cssclass("sta_WF_SchLabel");
            this.divSearch.addChild(obj.name, obj);

            obj = new Combo("ccboYN_USE","staYN_USE:0.0","10.0","70","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("1");
            obj.set_innerdataset("dsYN_USE");
            obj.set_codecolumn("CD_CODE");
            obj.set_datacolumn("DS_CODE");
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
            obj = new BindItem("item0","divSearch.form.ctclYM_WORK.form.TextBox","value","dsSearch","YM_WORK");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item1","divSearch.form.crdoCOLUMN","value","dsSearch","COLUMN");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item2","divSearch.form.ccfCD_SITE.form.CDTextBox","value","dsSearch","CD_SITE");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item3","divSearch.form.ccboYN_USE","value","dsSearch","YN_USE");
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
        this.registerScript("DWD_MAGAMLIST.xfdl", function() {
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

        	this.fnSetCombo();
        	this.fnSetColumnView();

        	var today = this.gfnGetDate();
        	if(!this.gfnIsNull(this.getOwnerFrame().CD_SITE))
        	{
        		this.dsSearch.setColumn(0, "CD_SITE", this.getOwnerFrame().CD_SITE);
        		this.divSearch.form.ccfCD_SITE.form.DSTextBox.set_value(this.getOwnerFrame().DS_SITE);
        		/*this.dsSearch.setColumn(0, "YEAR", this.getOwnerFrame().YM_WORK.substr(0,4));*/
        		this.dsSearch.setColumn(0, "YEAR", "");
        		this.divSearch.form.ctclYM_WORK.form.TextBox.setFocus();
        		this.divSearch.form.ctclYM_WORK.form.TextBox.set_value(this.getOwnerFrame().YM_WORK);
        		this.divSearch.form.ctclYM_WORK.form.TextBox.TextBox_canchange();

        	}else{
        		this.dsSearch.setColumn(0, "YEAR", "");
        		this.divSearch.form.ctclYM_WORK.form.TextBox.setFocus();
        		this.divSearch.form.ctclYM_WORK.form.TextBox.set_value(this.gfnGetDate().substr(0,6));
        		this.divSearch.form.ctclYM_WORK.form.TextBox.TextBox_canchange();
        	}
        	this.FormBtns.Select.click();
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
        	this.btnSetDate = this.gfnFormButtonAdd("btnSetDate", "fnSetDate");			//통제일자 일괄변경
        };

        /************************************************************************
         * 변수 선언
         ************************************************************************/
        this.fnSetVariable = function() {
        	this.ctclYM_WORK = this.divSearch.form.ctclYM_WORK;
        	this.crdoCOLUMN = this.divSearch.form.crdoCOLUMN;

        	this.dxGrid = this.divData.form.objGrid;
        };

        /************************************************************************
         * 이벤트 설정
         ************************************************************************/
        this.fnSetEvent = function() {
        	// 그리드 초기화
        	this.gfnGridInit(this.dxGrid, this.dsList, "DW", "DWD_MAGAMLIST");

        	this.dxGrid.BeforeUserDataSetParam = "fnGrid_BeforeUserDataSetParam";
        };

        /************************************************************************
         * 파라미터 설정
         ************************************************************************/
        this.fnSetParameter = function() {
        	this.dsSelect = new Dataset();
        	this.dsSelect.addColumn("YM_WORK", "string");
        	this.dsSelect.addColumn("CD_SITE", "string");
        	this.dsSelect.addColumn("CD_BUMUN", "string");
        	this.dsSelect.addColumn("CD_CORP", "string");
        	this.dsSelect.addColumn("YN_USE", "string");

        	this.dsSelect.addColumn("GR_SEARCH", "string");
        	this.dsSelect.addColumn("CD_DEPT", "string");

        	this.dsSelectDeadline = new Dataset();
        	this.dsSelectDeadline.addColumn("YM_WORK", "string");

        	this.dsSave = new Dataset();
        	this.dsSave.addColumn("TY_WRK", "string");
        	this.dsSave.addColumn("ID_USER", "string");
        	this.dsSave.addColumn("YM_WORK", "string");
        	this.dsSave.addColumn("CD_SITE", "string");
        	this.dsSave.addColumn("DT_DEADLINE", "string");
        	this.dsSave.addColumn("DT_DEADLINE_SAP", "string");
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

        	// 혹시 모르니 체크. (년월 달력인데 년월일까지 가는 경우가 존재)
        	var ym_work = this.dsSearch.getColumn(0, "YM_WORK");
        	ym_work = ym_work.substring(0,6);

        	this.dsSelect.setColumn(0, "YM_WORK", ym_work);
        	this.dsSelect.setColumn(0, "CD_SITE", this.dsSearch.getColumn(0, "CD_SITE"));
        	this.dsSelect.setColumn(0, "CD_BUMUN", "");
        	this.dsSelect.setColumn(0, "CD_CORP", this.AuthClient.CD_CORP);
        	this.dsSelect.setColumn(0, "YN_USE", this.dsSearch.getColumn(0, "YN_USE"));

        	this.dsSelect.setColumn(0, "GR_SEARCH", this.FormInfo.GR_SEARCH);

        	var AuthClient = this.gfnDataSetToJson(this.objApp.gdsUserInfo, this.objApp.gdsUserInfo.rowposition);
        	this.dsSelect.setColumn(0, "CD_DEPT", AuthClient.CD_DEPT);

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

        this.fnSelectDeadline =  function()
        {
        	this.dsSelectDeadline.clearData();
        	this.dsSelectDeadline.addRow();

        	// 혹시 모르니 체크. (년월 달력인데 년월일까지 가는 경우가 존재)
        	var ym_work = this.dsSearch.getColumn(0, "YM_WORK");
        	ym_work = ym_work.substring(0,6);

        	this.dsSelectDeadline.setColumn(0, "YM_WORK", ym_work);

        	var strSvcId    = "selectDeadline";
        	var strSvcType  = "select";
        	var inProc		= "_dsProc";
        	var inData      = "selectDeadline=dsSelectDeadline";
        	var outData     = "dsDeadline=selectDeadline0";
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
        	this.fnSelectDeadline();
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

        	this.dxGrid.updateToDataset();

        	// save SP 한개로 사용하는 경우
        	this.dsSave.clearData();

        	for (var i = 0; i < this.dsList.rowcount; i++) {
        		var flag = this.gfnGetFlag(this.dsList, i);
        		switch(flag) {
        			case "I":
        			case "U":
        			case "D":
        				var nrow = this.dsSave.addRow();
        				this.dsSave.setColumn(nrow, "TY_WRK", flag);
        				this.dsSave.setColumn(nrow, "ID_USER", this.AuthClient.ID_USER);
        				this.dsSave.setColumn(nrow, "YM_WORK", this.dsSearch.getColumn(0, "YM_WORK"));
        				this.dsSave.setColumn(nrow, "CD_SITE", this.dsList.getColumn(i, "CD_SITE"));
        				this.dsSave.setColumn(nrow, "DT_DEADLINE", this.dsList.getColumn(i, "DT_DEADLINE"));
        				this.dsSave.setColumn(nrow, "DT_DEADLINE_SAP", this.dsList.getColumn(i, "DT_DEADLINE_SAP"));
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
        /*
         *	조회 Validate
         */
        this.fnSelectValidate = function() {
        	var validate = true;

        	if (this.gfnIsNull(this.dsSearch.getColumn(0, "YM_WORK"))) {
        		validate = false;
        		// Alert후 실행할 처리
        		this.fnVaidateCallback = function() {
        			this.ctclYM_WORK.setFocus();
        		}
        		this.gfnAlert("기성년월을 입력하세요.", "fnVaidateCallback");
        	}

        	return validate;
        };

        /************************************************************************
         * 콜백 이벤트
         ************************************************************************/
        /*
         *	콜백 처리
         */
        this.fnCallback = function(svcID, errorCode, errorMsg, nrow)
        {
        	if (errorCode == 0) {
        		if (svcID == "select") {
        			this.gfnGridAfterSelect(this.dxGrid);
        		}
        		else if(svcID == "selectDeadline")
        		{
        			var nrow = this.gfnGridAdd(this.dxGrid); // top (default), bottom, current

        			this.dsList.setColumn(nrow, "DT_DEADLINE", this.dsDeadline.getColumn(0, "DT_DEADLINE"));
        			this.dsList.setColumn(nrow, "DT_DEADLINE_SAP", this.dsDeadline.getColumn(0, "DT_DEADLINE"));
        		}
        		else if(svcID == "selectColumn")
        		{
        			// 최초 Radio 값에 따른 그리드 컬럼 사이즈 조정을 위해 강제 호출.
        			/*this.divSearch_crdoCOLUMN_onitemchanged(this.crdoCOLUMN, {postvalue:"DT_COLUMN"});*/
        		}
        		else if(svcID == "save") {
        			this.FormBtns.Select.click();
        		}
        	}
        	else {
        		this.gfnAlert(errorMsg);
        	}
        }

        /************************************************************************
         * 코드파인드 이벤트
         ************************************************************************/

        /************************************************************************
         * 그리드 이벤트
         ************************************************************************/
         this.fnGrid_BeforeUserDataSetParam = function(id, dsUserParam, nrow)
         {
        	if(id == "DWX_CFSITE_02")
        	{
        		dsUserParam.setColumn(nrow, "CD_CORP", this.AuthClient.CD_CORP);
        		dsUserParam.setColumn(nrow, "CD_SAUPCENTER", "");
        	}

        	return true;
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

        this.fnSetCombo = function() {
        	this.dsCombo = new Dataset();
        	this.dsCombo.addColumn("CD_SYSTEM", "string");
        	this.dsCombo.addColumn("CD_TYPE", "string");
        	this.dsCombo.addColumn("YN_USE", "string");
        	this.dsCombo.addColumn("YN_ALL", "string");

        	this.dsCombo.addRow();
        	this.dsCombo.setColumn(0, "CD_SYSTEM", "DW");
        	this.dsCombo.setColumn(0, "CD_TYPE", "90");
        	this.dsCombo.setColumn(0, "YN_USE", "Y");
        	this.dsCombo.setColumn(0, "YN_ALL", "Y");

        	var strSvcId    = "combo";
        	var strSvcType  = "select";
        	var inProc		= "_dsProc";
        	var inData      = "combo=dsCombo";
        	var outData     = "dsYN_USE=combo0";
        	var strArg      = "";
        	var callBackFnc = "fnCallback";

        	this.gfnTransaction( strSvcId , 	// transaction을 구분하기 위한 svc id값
        						strSvcType , 	// transaction을 요청할 구분
        						inProc,			// Procedure 정보 Dataset 이름
        						inData , 		// 입력값으로 보낼 dataset id , a=b형태로 실제이름과 입력이름을 매칭
        						outData , 		// 처리결과값으로 받을 dataset id, a=b형태로 실제이름과 입력이름을 매칭
        						strArg, 		// 입력값으로 보낼 arguments, strFormData="20120607"
        						callBackFnc); // 통신방법 정의 [생략가능]
        };

        this.fnSetColumnView = function()
        {
        	this.dsTemp = new Dataset();
        	this.dsTemp.addColumn("YM_WORK", "string");
        	this.dsTemp.addRow();
        	this.dsTemp.setColumn(0, "YM_WORK", "000000");

        	var strSvcId    = "selectColumn";
        	var strSvcType  = "grid";
        	var inProc		= "_dsProc";
        	var inData      = "selectColumn=dsTemp";
        	var outData     = "dsColumnView=selectColumn0";
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
        // this.divSearch_crdoCOLUMN_onitemchanged = function(obj:nexacro.Radio,e:nexacro.ItemChangeEventInfo)
        // {
        // 	var temp = this.dsColumnView.getColumn(0, e.postvalue);
        // 	var columnNames = temp.split('|');
        //
        // 	// 그리드 초기화 진행함으로써 기존 컬럼 포맷 유지 가능. (길이)
        // 	this.gfnGridInit(this.dxGrid, this.dsList, "DW", "DWD_MAGAMLIST");
        //
        // 	for(var k=0; k<this.dxGrid.getFormatColCount(); k++){
        //       var ds_field = this.dxGrid.getCellProperty("body", k, "text");
        //       if(ds_field.indexOf("bind:") > -1) {
        //          ds_field = ds_field.replace("bind:", "");
        //
        // 		 var check = false;
        //
        // 		 for(var i=0; i < columnNames.length; i++)
        // 		 {
        // 			 if(ds_field == columnNames[i])
        // 			 {
        // 				check = true;
        // 				break;
        // 			 }
        // 		 }
        //
        // 		 if(check == false)
        // 		 {
        // 			this.dxGrid.setFormatColProperty(k, "size", 0);
        // 		 }
        //       }
        //    }
        // };


        this.fnSetDate = function(){
        	var param = {};
        // 	param.CD_SITE = this.dsSearch.getColumn(0, "CD_SITE");
        // 	param.CD_HADO = this.dsListSub1.getColumn(this.dsListSub1.rowposition, "CD_HADO");
        // 	param.DS_HADOCONT = this.dsListSub1.getColumn(this.dsListSub1.rowposition, "DS_HADOCONT");

        	this.gfnFormOpen(this.FormInfo.CD_MODULE, "DWB_SET_DAY", "fnSetDate_Callback", param, 430, 260);

        }



        this.fnSetDate_Callback = function(svcID, val) {
        	var bUpdate = false;
        	// 리턴값
        	if(val != false){

        		var json = JSON.parse(val);
        		trace(this.dsList.rowcount);
        		var rows = this.dxGrid.getSelectedDatasetRows();

        		this.dsList.set_enableevent(false);
        		for(var i = 0; i < rows.length; i++) {
        			this.dsList.setColumn(rows[i], "nx_flag", "U");
        			this.dsList.setColumn(rows[i],"DT_DEADLINE", json.DT_EXPLAIN);
        			bUpdate = true;
        		}
        		this.dsList.set_enableevent(true);
        		if(bUpdate) {
        			this.gfnSetFormStatus(this, "U");
        		}
        	}
        }

        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.form_onload,this);
            this.divSearch.form.crdoCOLUMN.addEventHandler("onitemchanged",this.divSearch_crdoCOLUMN_onitemchanged,this);
            this.dsSearch.addEventHandler("onvaluechanged",this.dsSearch_onvaluechanged,this);
        };
        this.loadIncludeScript("DWD_MAGAMLIST.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
