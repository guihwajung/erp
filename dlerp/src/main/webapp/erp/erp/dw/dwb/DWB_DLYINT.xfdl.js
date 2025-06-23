(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("DWB_HDCONTVSMAINGS");
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
            obj._setContents("<ColumnInfo><Column id=\"TARGET\" type=\"STRING\" size=\"256\"/><Column id=\"SP\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"TARGET\">select</Col><Col id=\"SP\">DWBPR_DLYINT_SELECT</Col></Row><Row><Col id=\"TARGET\">combo</Col><Col id=\"SP\">DZXPR_COMBO_COMMON_SELECT_01</Col></Row><Row><Col id=\"TARGET\">save</Col><Col id=\"SP\">DWBPR_DLYINT_SAVE</Col></Row><Row><Col id=\"TARGET\">exec</Col><Col id=\"SP\">DWBPR_DLYINT_EXECUTE</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsSearch", this);
            obj._setContents("<ColumnInfo><Column id=\"CD_SITE\" type=\"STRING\" size=\"256\"/><Column id=\"YR_WORK\" type=\"STRING\" size=\"256\"/><Column id=\"CD_VENDOR\" type=\"STRING\" size=\"256\"/><Column id=\"NO_QRT\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"CD_SITE\"/><Col id=\"YR_WORK\"/></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsNO_QRT", this);
            obj._setContents("");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Div("divSearch","0.0","10.0",null,"46.0","0",null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_cssclass("div_SEARCH_Bg");
            obj.set_text("");
            this.addChild(obj.name, obj);

            obj = new Div("ctclYR_WORK","0.0","10.0","60","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("6");
            obj.set_url("cmm::cmmCalYY.xfdl");
            this.divSearch.addChild(obj.name, obj);

            obj = new Combo("cbo_NO_QRT","ctclYR_WORK:0.0","10.0","90","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("3");
            obj.set_innerdataset("dsNO_QRT");
            obj.set_codecolumn("CD_CODE");
            obj.set_datacolumn("DS_CODE");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("staCD_SITE","cbo_NO_QRT:0.0","10.0","92.0","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("2");
            obj.set_text("현장코드");
            obj.set_cssclass("sta_WF_SchLabel");
            this.divSearch.addChild(obj.name, obj);

            obj = new Div("ccfCD_SITE","staCD_SITE:0.0","10.0","250","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.getSetter("CodeFindName").set("DZX_CFSITE");
            obj.getSetter("AutoSet").set("false");
            obj.getSetter("CDTextWidth").set("80");
            obj.set_taborder("0");
            obj.set_url("cmm::cmmCodeFind.xfdl");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("staCD_VENDOR","ccfCD_SITE:0.0","10.0","92.0","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("5");
            obj.set_text("업체코드");
            obj.set_cssclass("sta_WF_SchLabel");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("staYM_WORK","staCD_VENDOR:0.0","10.0","92.0","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("1");
            obj.set_text("기준년도");
            obj.set_cssclass("sta_WF_SchLabelE");
            this.divSearch.addChild(obj.name, obj);

            obj = new Div("ccfCD_VENDOR","staCD_VENDOR:0.0","10.0","250","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.getSetter("CodeFindName").set("DWX_CFVENDOR_DH");
            obj.getSetter("CDTextWidth").set("80");
            obj.set_taborder("4");
            obj.set_url("cmm::cmmCodeFind.xfdl");
            this.divSearch.addChild(obj.name, obj);

            obj = new Div("divData","0","divSearch:10",null,null,"0","0",null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_cssclass("div_DATA_Bg");
            this.addChild(obj.name, obj);

            obj = new Div("divData","0","0",null,null,"0","0",null,null,null,null,this.divData.form);
            obj.set_taborder("0");
            this.divData.addChild(obj.name, obj);

            obj = new Static("sta01","0","-20","100.00%","22",null,null,null,null,null,null,this.divData.form.divData.form);
            obj.set_taborder("1");
            obj.set_cssclass("sta_TITLE_Bg");
            this.divData.form.divData.addChild(obj.name, obj);

            obj = new Grid("objGrid","staCD_VENDOR:0","sta01:5",null,null,"10","0",null,null,null,null,this.divData.form.divData.form);
            obj.set_taborder("0");
            obj._setContents("<Formats><Format id=\"default\"/></Formats>");
            this.divData.form.divData.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this
            obj = new Layout("default","",this._adjust_width,this._adjust_height,this,function(p){});
            this.addLayout(obj.name, obj);
            
            // BindItem Information
            obj = new BindItem("item1","divSearch.form.ctclYR_WORK.form.TextBox","value","dsSearch","YR_WORK");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item0","divSearch.form.ccfCD_SITE.form.CDTextBox","value","dsSearch","CD_SITE");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item2","divSearch.form.ccfCD_VENDOR.form.CDTextBox","value","dsSearch","CD_VENDOR");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item3","divSearch.form.cbo_NO_QRT","value","dsSearch","NO_QRT");
            this.addChild(obj.name, obj);
            obj.bind();
            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {
            this._addPreloadList("fdl","cmm::cmmCalYY.xfdl");
            this._addPreloadList("fdl","cmm::cmmCodeFind.xfdl");
        };
        
        // User Script
        this.registerScript("DWB_DLYINT.xfdl", function() {
        this.DWB_HDGISUNGAPPV_onload = function(obj,e)
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

        	if(!this.gfnIsNull(this.getOwnerFrame().CD_SITE) && !this.gfnIsNull(this.getOwnerFrame().YR_WORK))
        	{
        		this.dsSearch.setColumn(0,"CD_SITE", this.getOwnerFrame().CD_SITE);
        		this.dsSearch.setColumn(0,"YR_WORK", this.getOwnerFrame().YR_WORK);
        		this.ccfCD_SITE.form.DSTextBox.set_value(this.getOwnerFrame().DS_SITE);
        		this.dsSearch.setColumn(0,"NO_QRT", this.getOwnerFrame().NO_QRT);
        	}else{
        		var today = this.gfnGetDate();
        		this.dsSearch.setColumn(0,"YR_WORK",today.substr(0,4));
        	}
        };

        /************************************************************************
         * 버튼 설정 : 화면(Tab) 전환시 마다 호출
         ************************************************************************/
        this.fnSetButton = function() {
           // 서브 버튼 사용
           //this.gfnUseSubBtn(true, this.divData, this.divData.form.divSplitter); // divSplitter sync
        }

        /************************************************************************
         * 확장 버튼 : 화면별 버튼 설정 ID, function 연결
         ************************************************************************/
        this.fnSetExtendButton = function() {
           this.btnDlyIntCrt = this.gfnFormButtonAdd("btnDlyIntCrt", "fnDlyIntCrt");
           this.btnDlyIntCalc = this.gfnFormButtonAdd("btnDlyIntCalc", "fnDlyIntCalc");
        };

        /************************************************************************
         * 변수 선언
         ************************************************************************/
        this.fnSetVariable = function() {
           this.ccfCD_SITE = this.divSearch.form.ccfCD_SITE;
           this.ctclYR_WORK = this.divSearch.form.ctclYR_WORK;
           this.ccfCD_VENDOR = this.divSearch.form.ccfCD_VENDOR;
           this.cbo_NO_QRT = this.divSearch.form.cbo_NO_QRT;

           this.dxGrid = this.divData.form.divData.form.objGrid;
        };

        /************************************************************************
         * 이벤트 설정
         ************************************************************************/
        this.fnSetEvent = function() {

           this.ccfCD_VENDOR.BeforeUserDataSetParam = "fnBeforeUserDataSetParam";
           this.gfnGridInit(this.dxGrid, this.dsList, "DW", "DWB_DLYINT");
           this.dxGrid.EnterCell = "fnGrid_EnterCell";

        };

        /************************************************************************
         * 파라미터 설정
         ************************************************************************/
        this.fnSetParameter = function() {

        	this.dsSelect = new Dataset();
        	this.dsSelect.addColumn("TY_WRK", "string");
        	this.dsSelect.addColumn("YR_WORK", "string");
        	this.dsSelect.addColumn("NO_QRT", "string");
        	this.dsSelect.addColumn("CD_SITE", "string");
        	this.dsSelect.addColumn("CD_VENDOR", "string");

        	this.dsSave = new Dataset();
        	this.dsSave.addColumn("TY_WRK", "string");
        	this.dsSave.addColumn("ID_USER", "string");
        	this.dsSave.addColumn("YR_WORK", "string");
        	this.dsSave.addColumn("NO_QRT", "string");
        	this.dsSave.addColumn("CD_SITE", "string");
        	this.dsSave.addColumn("YM_WORK", "string");
        	this.dsSave.addColumn("NO_DGR", "string");
        	this.dsSave.addColumn("NO_HADOCONT", "string");
        	this.dsSave.addColumn("CD_VENDOR", "string");
        	this.dsSave.addColumn("DT_CCNST", "string");
        	this.dsSave.addColumn("TY_PAYMENT", "string");
        	this.dsSave.addColumn("DT_PAYMENT", "string");
        	this.dsSave.addColumn("DT_NOTEETM", "string");
        	this.dsSave.addColumn("AM_DDCT", "bigdecimal");
        	this.dsSave.addColumn("DS_DCCTRSN", "string");
        	this.dsSave.addColumn("AM_UNPD", "bigdecimal");
        	this.dsSave.addColumn("DS_UNPDRSN", "string");
        	this.dsSave.addColumn("DT_REALPAYMENT", "string");
        	this.dsSave.addColumn("RT_DLYDC", "bigdecimal");
        	this.dsSave.addColumn("DT_DLYINT", "string");
        	this.dsSave.addColumn("AM_DLYINTPAY", "bigdecimal");
        	this.dsSave.addColumn("AM_DLYINTXCL", "bigdecimal");
        	this.dsSave.addColumn("CD_DLYINTXCL", "string");
        	this.dsSave.addColumn("DS_DLYINTXCL", "string");
        	this.dsSave.addColumn("DS_RMKS", "string");

        	this.dsExec = new Dataset();
        	this.dsExec.addColumn("TY_WRK", "string");
        	this.dsExec.addColumn("ID_USER", "string");
        	this.dsExec.addColumn("YR_WORK", "string");
        	this.dsExec.addColumn("NO_QRT", "string");
        };


        /************************************************************************
         * 버튼 이벤트
         ************************************************************************/
          /*
          *	조회 버튼
          */
        this.fnSelect = function() {
        	if (!this.fnSelectValidate()) return false;

        	this.gfnGridBeforeSelect(this.dxGrid);
        	this.dsSelect.clearData();
        	this.dsSelect.addRow();

        	this.dsSelect.setColumn(0, "TY_WRK", "Q");
        	this.dsSelect.setColumn(0, "YR_WORK", this.dsSearch.getColumn(0, "YR_WORK"));
        	this.dsSelect.setColumn(0, "NO_QRT", this.dsSearch.getColumn(0, "NO_QRT"));
        	this.dsSelect.setColumn(0, "CD_SITE", this.dsSearch.getColumn(0, "CD_SITE"));
        	this.dsSelect.setColumn(0, "CD_VENDOR", this.dsSearch.getColumn(0, "CD_VENDOR"));

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
         *   입력 버튼
         */
        this.fnAdd = function() {
           //this.gfnGridAdd(this.dxGrid);
        }

        /*
         *   삭제 버튼
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
        	if (!this.fnSaveValidate()) return false;

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
        				this.dsSave.setColumn(nrow, "YR_WORK", this.dsSearch.getColumn(0, "YR_WORK").substr(0,4));
        				this.dsSave.setColumn(nrow, "NO_QRT", this.dsSearch.getColumn(0, "NO_QRT"));
        				this.dsSave.setColumn(nrow, "CD_SITE", this.dsList.getColumn(i, "CD_SITE"));
        				this.dsSave.setColumn(nrow, "YM_WORK", this.dsList.getColumn(i, "YM_WORK"));
        				this.dsSave.setColumn(nrow, "NO_DGR", this.dsList.getColumn(i, "NO_DGR"));
        				this.dsSave.setColumn(nrow, "NO_HADOCONT", this.dsList.getColumn(i, "NO_HADOCONT"));
        				this.dsSave.setColumn(nrow, "CD_VENDOR", this.dsList.getColumn(i, "CD_VENDOR"));
        				this.dsSave.setColumn(nrow, "DT_CCNST", this.dsList.getColumn(i, "DT_CCNST"));
        				this.dsSave.setColumn(nrow, "TY_PAYMENT", this.dsList.getColumn(i, "TY_PAYMENT"));
        				this.dsSave.setColumn(nrow, "DT_PAYMENT", this.dsList.getColumn(i, "DT_PAYMENT"));
        				this.dsSave.setColumn(nrow, "DT_NOTEETM", this.dsList.getColumn(i, "DT_NOTEETM"));
        				this.dsSave.setColumn(nrow, "AM_DDCT", this.dsList.getColumn(i, "AM_DDCT"));
        				this.dsSave.setColumn(nrow, "DS_DCCTRSN", this.dsList.getColumn(i, "DS_DCCTRSN"));
        				this.dsSave.setColumn(nrow, "AM_UNPD", this.dsList.getColumn(i, "AM_UNPD"));
        				this.dsSave.setColumn(nrow, "DS_UNPDRSN", this.dsList.getColumn(i, "DS_UNPDRSN"));
        				this.dsSave.setColumn(nrow, "DT_REALPAYMENT", this.dsList.getColumn(i, "DT_REALPAYMENT"));
        				this.dsSave.setColumn(nrow, "RT_DLYDC", this.dsList.getColumn(i, "RT_DLYDC"));
        				this.dsSave.setColumn(nrow, "DT_DLYINT", this.dsList.getColumn(i, "DT_DLYINT"));
        				this.dsSave.setColumn(nrow, "AM_DLYINTPAY", this.dsList.getColumn(i, "AM_DLYINTPAY"));
        				this.dsSave.setColumn(nrow, "AM_DLYINTXCL", this.dsList.getColumn(i, "AM_DLYINTXCL"));
        				this.dsSave.setColumn(nrow, "CD_DLYINTXCL", this.dsList.getColumn(i, "CD_DLYINTXCL"));
        				this.dsSave.setColumn(nrow, "DS_DLYINTXCL", this.dsList.getColumn(i, "DS_DLYINTXCL"));
        				this.dsSave.setColumn(nrow, "DS_RMKS", this.dsList.getColumn(i, "DS_RMKS"));

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
         *   엑셀 버튼
         */
        this.fnExcel = function() {
           this.gfnExcelExport(this.dxGrid);
        }

        /*
         *   출력 버튼
         */
        this.fnPrint = function() {
        }

        /************************************************************************
         * 서브 버튼 이벤트
         ************************************************************************/

        /************************************************************************
         * Validate
         ************************************************************************/
        this.fnSelectValidate = function() {
        	var validate = true;

        	if (this.gfnIsNull(this.dsSearch.getColumn(0,"NO_QRT"))) {
        		validate = false;

        		this.fnVaidateCallback = function() {
        			this.divSearch.form.cbo_NO_QRT.setFocus();
        		}
        		this.gfnAlert("분기를 선택하세요.", "fnVaidateCallback");
        		}
        	return validate;
        };

        /*
        	저장 Validate
        */
        this.fnSaveValidate = function() {
        	var validate = true;

        	for (var i = 0; i < this.dsList.rowcount; i++) {
        		var flag = this.gfnGetFlag(this.dsList, i);
        		switch(flag) {
        			case "I":
        			case "U":
        			case "D":
        				if(this.dsList.getColumn(i, "DS_PAYMENT") == "외담대" || this.dsList.getColumn(i, "DS_PAYMENT") == "전자어음") {
        					if(this.gfnIsNull(this.dsList.getColumn(i, "DT_NOTEETM"))) {
        						this.gfnAlert("지불구분 현금이 아닌경우 만기일자는 필수입력입니다.");
        						validate = false;
        					}
        				}
        				break;
        		}
        	}

        	return validate;
        };

        /************************************************************************
         * 콜백 이벤트
         ************************************************************************/
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
        	}else if(svcID == "CRT") {
        		if (errorCode == 0) {
        			this.gfnAlert("지연이자대장생성이 정상 처리되었습니다.");
         			this.FormBtns.Select.click();
         		} else {
         			this.gfnAlert(errorMsg);
         		}
         	}
         	else if(svcID == "CALC") {
         		if (errorCode == 0) {
         			this.gfnAlert("지연이자자동계산이 정상 처리되었습니다.");
         			this.FormBtns.Select.click();
         		} else {
         			this.gfnAlert(errorMsg);
         		}
         	}
        }
        /************************************************************************
         * 코드파인드 이벤트
         ************************************************************************/
        this.fnBeforeUserDataSetParam = function(id, dsUserParam, nrow) {
        	if (id == "ccfCD_VENDOR") {

        		dsUserParam.setColumn(nrow, "CD_CORP", this.AuthClient.CD_CORP);
        		dsUserParam.setColumn(nrow, "CD_SITE", this.dsSearch.getColumn(0, "CD_SITE"));
        		dsUserParam.setColumn(nrow, "TY_VENDOR", "DLYINT");
        	}
        	return true;
        }

        /************************************************************************
         * 그리드 이벤트
         ************************************************************************/
         this.fnGrid_EnterCell = function(obj, row, cell) {
        	// 수정가능 true, false 처리하려는 컬럼에 대해서만 return 처리할것.
        	var colnm = this.gfnGridGetBindColumnNameByIndex(this.dxGrid, cell);	// 클릭한 cell의 컬럼명

        	// 클릭했을때 클릭한 cell을 수정 가능 or 불가능 상태로 만든다.
        	// YN_EDIT 값이 Y일때만 수정가능상태
        	if(this.dsList.getColumn(row, "YN_EDIT") == "N") {
        		return false;
        	}

        }
        /************************************************************************
         * 기타 이벤트
         ************************************************************************/
        this.fnSearchInit = function(obj,e) {
           if(e == null || (e.pretext != e.posttext)) {
              this.gfnSetFormStatus(this);
              this.gfnGridClear(this.dxGrid);
           }
        };

        this.dsSearch_onvaluechanged = function(obj,e)
        {
           if(e.oldvalue != e.newvalue){
        	  this.gfnGridClear(this.dxGrid);

        	  if(e.columnid == "CD_SITE" || e.columnid == "YR_WORK"){
        		this.fnSetCombo();
        	  }
           }
        };

        this.fnSetCombo = function()
        {
        	this.dsCombo = new Dataset();
        	this.dsCombo.addColumn("CD_SYSTEM", "string");
        	this.dsCombo.addColumn("CD_TYPE", "string");
        	this.dsCombo.addColumn("YN_USE", "string");
        	this.dsCombo.addColumn("YN_ALL", "string");

        	this.dsCombo.addRow();
        	this.dsCombo.setColumn(0, "CD_SYSTEM", "DW");
        	this.dsCombo.setColumn(0, "CD_TYPE", "54");
        	this.dsCombo.setColumn(0, "YN_USE", "Y");
        	this.dsCombo.setColumn(0, "YN_ALL", "N");

        	var strSvcId    = "combo";
        	var strSvcType  = "select";
        	var inProc		= "_dsProc";
        	var inData      = "combo=dsCombo";
        	var outData     = "dsNO_QRT=combo0";
        	var strArg      = "";
        	var callBackFnc = "fnCallbackCombo";

        	this.gfnTransaction( strSvcId , 	// transaction을 구분하기 위한 svc id값
        						strSvcType , 	// transaction을 요청할 구분
        						inProc,			// Procedure 정보 Dataset 이름
        						inData , 		// 입력값으로 보낼 dataset id , a=b형태로 실제이름과 입력이름을 매칭
        						outData , 		// 처리결과값으로 받을 dataset id, a=b형태로 실제이름과 입력이름을 매칭
        						strArg, 		// 입력값으로 보낼 arguments, strFormData="20120607"
        						callBackFnc);   // 통신방법 정의 [생략가능]
        };

        // Execute. save 뒤에 실행됨.
        this.fnExec = function(strID) {
           this.dsExec.clearData();

           var nrow = this.dsExec.addRow();
           this.dsExec.setColumn(nrow, "TY_WRK", strID);
           this.dsExec.setColumn(nrow, "ID_USER", this.AuthClient.ID_USER);
           this.dsExec.setColumn(nrow, "YR_WORK", this.dsSearch.getColumn(0, "YR_WORK").substr(0,4));
           this.dsExec.setColumn(nrow, "NO_QRT", this.dsSearch.getColumn(0, "NO_QRT"));

           if (this.dsExec.rowcount == 0) return;

           var strSvcId    = strID;
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
        						strArg, 		// 입력값으로 보낼 arguments, strFormData="20120607"
        						callBackFnc);   // 통신방법 정의 [생략가능]

        }


        this.fnCallbackCombo = function(svcID, errorCode, errorMsg)
        {
        	if(svcID == "combo") {
        		//this.dsTY_JAJIK.insertRow(0);
        		//this.dsTY_JAJIK.setColumn(0, "CD_CODE", "");
        		//this.dsTY_JAJIK.setColumn(0, "DS_CODE", "전체");
         		this.divSearch.form.cbo_NO_QRT.set_index(0);
        		//this.divSearch.form.cbo_NO_QRT.set_index(0);
        	}
        };



        //아래부터는 확장버튼 이벤트.
        this.fnDlyIntCrt = function(obj,e) {

        	var msg = "기준년도 : [" + this.dsSearch.getColumn(0, "YR_WORK").substr(0,4) + "] "
        			+ "\n분      기 : [" + this.dsSearch.getColumn(0, "NO_QRT") + "]"
        			+ "\n기존 지연이자정보를 삭제 이후 재생성합니다. "
        			+ "\n\n지연이자대장정보 생성 하시겠습니까?";

        	this.gfnConfirm(msg, "fnExec_callback", "CRT");

        }


        this.fnDlyIntCalc = function(obj,e) {
        	var msg = "기준년도 : [" + this.dsSearch.getColumn(0, "YR_WORK").substr(0,4) + "] "
        			+ "\n분      기 : [" + this.dsSearch.getColumn(0, "NO_QRT") + "]"
        			+ "\n지연이자정보를 기준으로 재계산합니다. "
        			+ "\n\n지연이자자동계산 처리 하시겠습니까?";

        	this.gfnConfirm(msg, "fnExec_callback", "CALC");

        }

        this.fnExec_callback = function(strID, val) {
           if(val == true) {
              this.fnExec(strID);
           }
        }

        this.dsList_onvaluechanged = function(obj,e)
        {
           if(e.oldvalue != e.newvalue)
           {
           if(e.columnid == "AM_DDCT" || e.columnid == "AM_UNPD" ){

                 this.dsList.setColumn(e.row, "AM_REALPAYMENT", nexacro.toNumber(this.dsList.getColumn(e.row, "AM_TOTAL"),0) - nexacro.toNumber(this.dsList.getColumn(e.row, "AM_DDCT"),0) - nexacro.toNumber(this.dsList.getColumn(e.row, "AM_UNPD"),0));
                 }
              }
        }

        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.DWB_HDGISUNGAPPV_onload,this);
            this.divData.addEventHandler("ondragmove",this.divData_ondragmove,this);
            this.dsList.addEventHandler("onvaluechanged",this.dsList_onvaluechanged,this);
            this.dsSearch.addEventHandler("onvaluechanged",this.dsSearch_onvaluechanged,this);
        };
        this.loadIncludeScript("DWB_DLYINT.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
