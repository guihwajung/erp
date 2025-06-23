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
            this.set_titletext("공사원가마감");
            if (Form == this.constructor)
            {
                this._setFormPosition(1280,720);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("dsList", this);
            obj._setContents("");
            this.addChild(obj.name, obj);


            obj = new Dataset("_dsProc", this);
            obj._setContents("<ColumnInfo><Column id=\"TARGET\" type=\"STRING\" size=\"256\"/><Column id=\"SP\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"TARGET\">select</Col><Col id=\"SP\">DWDPR_SITEMAGAM_SELECT</Col></Row><Row><Col id=\"TARGET\">selectColumn</Col><Col id=\"SP\">DWDPR_MAGAMLIST_COLUMN_SELECT</Col></Row><Row><Col id=\"TARGET\">magamOk</Col><Col id=\"SP\">DWDPR_COST_MAGAM_OK</Col></Row><Row><Col id=\"TARGET\">magamCancel</Col><Col id=\"SP\">DWDPR_COST_MAGAM_CANCEL</Col></Row><Row><Col id=\"TARGET\">selectDeadline</Col><Col id=\"SP\">DWDPR_DEADLINEDAY_SELECT</Col></Row><Row><Col id=\"TARGET\">save</Col><Col id=\"SP\">DWDPR_MAGAMLIST_SAVE</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsSearch", this);
            obj._setContents("<ColumnInfo><Column id=\"CD_SITE\" type=\"STRING\" size=\"256\"/><Column id=\"YEAR\" type=\"STRING\" size=\"256\"/><Column id=\"COLUMN\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"COLUMN\">DT_COLUMN</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsColumnView", this);
            obj._setContents("");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsCOLUMN", this);
            obj._setContents("<ColumnInfo><Column id=\"CODE\" type=\"STRING\" size=\"256\"/><Column id=\"VALUE\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"CODE\">DT_COLUMN</Col><Col id=\"VALUE\">마감일자</Col></Row><Row><Col id=\"CODE\">AM_COLUMN</Col><Col id=\"VALUE\">마감금액</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsDeadline", this);
            obj._setContents("");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Div("divSearch","0.0","10.0",null,"46.0","0",null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_cssclass("div_SEARCH_Bg");
            obj.set_formscrolltype("none");
            this.addChild(obj.name, obj);

            obj = new Static("staCD_SITE","0.0","10.0","92.0","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("6");
            obj.set_text("현장코드");
            obj.set_cssclass("sta_WF_SchLabelE");
            this.divSearch.addChild(obj.name, obj);

            obj = new Div("ccfCD_SITE","staCD_SITE:0.0","10.0","200","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.getSetter("CodeFindName").set("DZX_CFSITE");
            obj.getSetter("CDTextWidth").set("80");
            obj.set_taborder("0");
            obj.set_url("cmm::cmmCodeFind.xfdl");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("staYEAR","ccfCD_SITE:0.0","10.0","92.0","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("6");
            obj.set_text("회계년도");
            obj.set_cssclass("sta_WF_SchLabelE");
            this.divSearch.addChild(obj.name, obj);

            obj = new Div("ctclYEAR","staYEAR:0.0","10.0","60","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("1");
            obj.set_url("cmm::cmmCalYY.xfdl");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("staCOLUMN","ctclYEAR:0.0","10.0","92.0","24.0",null,null,null,null,null,null,this.divSearch.form);
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

            obj = new BindItem("item1","divSearch.form.ctclYEAR.form.TextBox","value","dsSearch","YEAR");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item2","divSearch.form.crdoCOLUMN","value","dsSearch","COLUMN");
            this.addChild(obj.name, obj);
            obj.bind();
            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {
            this._addPreloadList("fdl","cmm::cmmCodeFind.xfdl");
            this._addPreloadList("fdl","cmm::cmmCalYY.xfdl");
        };
        
        // User Script
        this.registerScript("DWD_SITEMAGAM.xfdl", function() {
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

        	this.fnSetColumnView();

        	var today = this.gfnGetDate();


        	if(!this.gfnIsNull(this.getOwnerFrame().CD_SITE))
        	{
        		this.dsSearch.setColumn(0, "CD_SITE", this.getOwnerFrame().CD_SITE);
        		this.divSearch.form.ccfCD_SITE.form.DSTextBox.set_value(this.getOwnerFrame().DS_SITE);
        		this.dsSearch.setColumn(0, "YEAR", this.getOwnerFrame().YM_WORK.substr(0,4));

        		this.FormBtns.Select.click();
        	}else{
        		this.dsSearch.setColumn(0, "YEAR", today.substr(0,4));
        	}
        };

        /************************************************************************
         * 버튼 설정 : 화면(Tab) 전환시 마다 호출
         * 서브버튼 사용 및 공통버튼 강제 제어시 여기서 처리
         ************************************************************************/
        this.fnSetButton = function() {
        	this.FormBtns.Add.set_enable(false);
        	this.FormBtns.Del.set_enable(false);
        }

        /************************************************************************
         * 확장 버튼 : 화면별 버튼 설정 ID, function 연결 (화면버튼관리)
         ************************************************************************/
        this.fnSetExtendButton = function() {
        	this.btnSiteMagam = this.gfnFormButtonAdd("btnSiteMagam", "fnSiteMagam");
        	this.btnSiteMagamCancel = this.gfnFormButtonAdd("btnSiteMagamCancel", "fnSiteMagamCancel");

        };

        /************************************************************************
         * 변수 선언
         ************************************************************************/
        this.fnSetVariable = function() {
        	this.ctclYEAR = this.divSearch.form.ctclYEAR;
        	this.ccfCD_SITE = this.divSearch.form.ccfCD_SITE;

        	this.dxGrid = this.divData.form.objGrid;
        };

        /************************************************************************
         * 이벤트 설정
         ************************************************************************/
        this.fnSetEvent = function() {
        	// 그리드 초기화
        	this.gfnGridInit(this.dxGrid, this.dsList, "DW", "DWD_SITEMAGAM");
        };

        /************************************************************************
         * 파라미터 설정
         ************************************************************************/
        this.fnSetParameter = function() {
        	this.dsSelect = new Dataset();
        	this.dsSelect.addColumn("YEAR", "string");
        	this.dsSelect.addColumn("CD_SITE", "string");

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

        	this.dsSelect.setColumn(0, "YEAR", this.dsSearch.getColumn(0, "YEAR"));
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
        						strArg, 		// 입력값으로 보낼 arguments, strFormData="20120607"
        						callBackFnc); // 통신방법 정의 [생략가능]
        }

        /*
         *	입력 버튼
         */
        this.fnAdd = function() {
        	//var nrow = this.gfnGridAdd(this.dxGrid); // top (default), bottom, current
        }

        /*
         *	삭제 버튼
         */
        this.fnDel = function() {
        	//this.gfnGridDel(this.dxGrid);
        }

        /*
         *	저장 버튼
         */
        this.fnSave = function() {
        	// 그리드 필수항목 체크
        // 	if (!this.gfnGridValidate(this.dxGrid)) return;
        //
        // 	this.dxGrid.updateToDataset();
        //
        // 	// save SP 한개로 사용하는 경우
        //
        // 	this.dsSave.clearData();
        //
        // 	for (var i = 0; i < this.dsList.rowcount; i++) {
        // 		var flag = this.gfnGetFlag(this.dsList, i);
        // 		switch(flag) {
        // 			case "I":
        // 			case "U":
        // 			case "D":
        // 				var nrow = this.dsSave.addRow();
        // 				this.dsSave.setColumn(nrow, "TY_FLAG", flag);
        // 				this.dsSave.setColumn(nrow, "NO_IDX", this.dsList.getColumn(i, "NO_IDX"));
        // 				break;
        // 		}
        // 	}
        //
        // 	if (this.dsSave.rowcount == 0) return;
        //
        //
        // 	var strSvcId    = "save";
        // 	var strSvcType  = "save";
        // 	var inProc		= "_dsProc";
        // 	//var inData      = "insert=dsInsert update=dsUpdate delete=dsDelete";
        // 	var inData      = "save=dsSave";
        // 	var outData     = "";
        // 	var strArg      = "";
        // 	var callBackFnc = "fnCallback";
        //
        // 	this.gfnTransaction( strSvcId , 	// transaction을 구분하기 위한 svc id값
        // 						strSvcType , 	// transaction을 요청할 구분
        // 						inProc,			// Procedure 정보 Dataset 이름
        // 						inData , 		// 입력값으로 보낼 dataset id , a=b형태로 실제이름과 입력이름을 매칭
        // 						outData , 		// 처리결과값으로 받을 dataset id, a=b형태로 실제이름과 입력이름을 매칭
        // 						strArg, 		// 입력값으로 보낼 arguments, strFormData="20120607"
        // 						callBackFnc); // 통신방법 정의 [생략가능]
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

        	if (this.gfnIsNull(this.dsSearch.getColumn(0, "CD_SITE")))
        	{
        		validate = false;
        		// Alert후 실행할 처리
        		this.fnVaidateCallback = function() {
        			this.ccfCD_SITE.form.CDTextBox.setFocus();
        		}
        		this.gfnAlert("현장코드를 입력하세요.", "fnVaidateCallback");
        	}
        	else if(this.gfnIsNull(this.dsSearch.getColumn(0, "YEAR")))
        	{
        		validate = false;
        		// Alert후 실행할 처리
        		this.fnVaidateCallback = function() {
        			this.ctclYEAR.form.TextBox.setFocus();
        		}
        		this.gfnAlert("회계연도를 입력하세요.", "fnVaidateCallback");
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
        			this.FormBtns.Select.click();
        		} else {
        			this.gfnAlert(errorMsg);
        		}
        	}
        	else if(svcID == "selectColumn")
        	{
        		// 최초 Radio 값에 따른 그리드 컬럼 사이즈 조정을 위해 강제 호출.
        		//this.divSearch_crdoCOLUMN_onitemchanged(this.crdoCOLUMN, {postvalue:"DT_COLUMN"});
        	}
        	else if(svcID == "magamOk")
        	{
        		if (errorCode == 0) {
        			this.gfnAlert("공사원가마감이 정상 처리되었습니다.");
        			this.FormBtns.Select.click();
        		} else {
        			this.gfnAlert(errorMsg);
        		}
        	}
        	else if(svcID == "magamCancel")
        	{
        		if (errorCode == 0) {
        			this.gfnAlert("원가마감취소 정상 처리되었습니다.");
        			this.FormBtns.Select.click();
        		} else {
        			this.gfnAlert(errorMsg);
        		}
        	}
        	else if(svcID == "selectDeadline")
        	{
        		var nrow = this.gfnGridAdd(this.dxGrid); // top (default), bottom, current

        		this.dsList.setColumn(nrow, "DT_DEADLINE", this.dsDeadline.getColumn(0, "DT_DEADLINE"));
        		this.dsList.setColumn(nrow, "DT_DEADLINE_SAP", this.dsDeadline.getColumn(0, "DT_DEADLINE"));
        	}
        }

        /************************************************************************
         * 코드파인드 이벤트
         ************************************************************************/

        /************************************************************************
         * 그리드 이벤트
         ************************************************************************/

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
        // 	this.gfnGridInit(this.dxGrid, this.dsList, "DW", "DWD_SITEMAGAM");
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

        // 아래부터는 확장버튼.
        this.fnSiteMagam = function(obj,e) {
        	if(this.dsList.rowposition == -1)
        	{
        		this.gfnAlert("공사원가 건을 선택해주세요.");
        		return false;
        	}

        	var msg = "현장코드 : [" + this.dsSearch.getColumn(0, "CD_SITE") + "] " + this.divSearch.form.ccfCD_SITE.form.DSTextBox.text
        				+ "\n마감년월 : [" + this.dsList.getColumn(this.dsList.rowposition, "YM_WORK") + "]"
        				+ "\n공사원가마감 처리 후 발생원가 투입통제 됩니다."
        				+ "\n\n공사원가마감 처리 하시겠습니까?";

        	this.gfnConfirm(msg, "fnSiteMagam_callback");
        }

        this.fnSiteMagamCancel = function(obj,e) {
        	if(this.dsList.rowposition == -1)
        	{
        		this.gfnAlert("공사원가 건을 선택해주세요.");
        		return false;
        	}

        	var msg = "현장코드 : [" + this.dsSearch.getColumn(0, "CD_SITE") + "] " + this.divSearch.form.ccfCD_SITE.form.DSTextBox.text
        				+ "\n마감년월 : [" + this.dsList.getColumn(this.dsList.rowposition, "YM_WORK") + "]"
        				+ "\n원가마감취소 처리 후 발생원가 투입이 가능합니다."
        				+ "\n\n원가마감취소 처리 하시겠습니까?";

        	this.gfnConfirm(msg, "fnSiteMagamCancel_callback");
        }

        this.fnSiteMagam_callback = function(strId, val) {
        	if(val == true) {
        		this.dsMagamOk = new Dataset();
        		this.dsMagamOk.addColumn("CD_SITE", "string");
        		this.dsMagamOk.addColumn("YM_WORK", "string");
        		this.dsMagamOk.addColumn("AM_BONSA", "bigdecimal");
        		this.dsMagamOk.addColumn("RT_SOCOVOL", "bigdecimal");
        		this.dsMagamOk.addColumn("DS_DLTUJA", "string");
        		this.dsMagamOk.addColumn("AM_DLTUJA", "bigdecimal");
        		this.dsMagamOk.addColumn("YN_CLOSE", "string");
        		this.dsMagamOk.addColumn("ID_INSERT", "string");

        		var nrow = this.dsMagamOk.addRow();

        		var ym_work = this.dsList.getColumn(this.dsList.rowposition, "YM_WORK");
        		ym_work = ym_work.replace("-","");
        		this.dsMagamOk.setColumn(nrow, "CD_SITE", this.dsSearch.getColumn(0, "CD_SITE"));
        		this.dsMagamOk.setColumn(nrow, "YM_WORK", ym_work);
        		this.dsMagamOk.setColumn(nrow, "AM_BONSA", "0");
        		this.dsMagamOk.setColumn(nrow, "RT_SOCOVOL", "100.00");
        		this.dsMagamOk.setColumn(nrow, "DS_DLTUJA", "");
        		this.dsMagamOk.setColumn(nrow, "AM_DLTUJA", "0");
        		this.dsMagamOk.setColumn(nrow, "YN_CLOSE", "N");
        		this.dsMagamOk.setColumn(nrow, "ID_INSERT", this.AuthClient.ID_USER);

        		if (this.dsMagamOk.rowcount == 0) return;

        		var strSvcId    = "magamOk";
        		var strSvcType  = "save";
        		var inProc		= "_dsProc";
        		var inData      = "magamOk=dsMagamOk";
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
        }


        this.fnSiteMagamCancel_callback = function(strId, val) {
        	if(val == true) {
        		this.dsMagamCancel = new Dataset();
        		this.dsMagamCancel.addColumn("CD_SITE", "string");
        		this.dsMagamCancel.addColumn("YM_WORK", "string");
        		this.dsMagamCancel.addColumn("ID_INSERT", "string");

        		var nrow = this.dsMagamCancel.addRow();
        		var ym_work = this.dsList.getColumn(this.dsList.rowposition, "YM_WORK");
        		ym_work = ym_work.replace("-","");
        		this.dsMagamCancel.setColumn(nrow, "CD_SITE", this.dsSearch.getColumn(0, "CD_SITE"));
        		this.dsMagamCancel.setColumn(nrow, "YM_WORK", ym_work);
        		this.dsMagamCancel.setColumn(nrow, "ID_INSERT", this.AuthClient.ID_USER);

        		if (this.dsMagamCancel.rowcount == 0) return;

        		var strSvcId    = "magamCancel";
        		var strSvcType  = "save";
        		var inProc		= "_dsProc";
        		var inData      = "magamCancel=dsMagamCancel";
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
        }


        this.fnSelectDeadline =  function()
        {
        	this.dsSelectDeadline.clearData();
        	this.dsSelectDeadline.addRow();

        	// 혹시 모르니 체크. (년월 달력인데 년월일까지 가는 경우가 존재)
        	var ym_work = this.dsList.getColumn(this.dsList.rowposition, "YM_WORK");
        	ym_work = ym_work.replace("-","");

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
        				this.dsSave.setColumn(nrow, "CD_SITE", this.dsSearch.getColumn(0, "CD_SITE"));
        				this.dsSave.setColumn(nrow, "YM_WORK", this.dsList.getColumn(i, "YM_WORK").replace("-",""));
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
        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.form_onload,this);
            this.divSearch.form.crdoCOLUMN.addEventHandler("onitemchanged",this.divSearch_crdoCOLUMN_onitemchanged,this);
            this.dsSearch.addEventHandler("onvaluechanged",this.dsSearch_onvaluechanged,this);
        };
        this.loadIncludeScript("DWD_SITEMAGAM.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
