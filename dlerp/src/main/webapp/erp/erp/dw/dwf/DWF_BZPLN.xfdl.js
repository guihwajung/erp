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
            this.set_titletext("사업계획(예정현장)등록");
            if (Form == this.constructor)
            {
                this._setFormPosition(1280,720);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("dsList", this);
            obj._setContents("");
            this.addChild(obj.name, obj);


            obj = new Dataset("_dsProc", this);
            obj._setContents("<ColumnInfo><Column id=\"TARGET\" type=\"STRING\" size=\"256\"/><Column id=\"SP\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"TARGET\">select</Col><Col id=\"SP\">DWFPR_BZPLN_SELECT</Col></Row><Row><Col id=\"TARGET\">save</Col><Col id=\"SP\">DWFPR_BZPLN_SAVE</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsSearch", this);
            obj._setContents("<ColumnInfo><Column id=\"CD_SITE\" type=\"STRING\" size=\"256\"/><Column id=\"YM_WORK\" type=\"STRING\" size=\"256\"/><Column id=\"YR_PLN\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row/></Rows>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Div("divSearch","0.0","10.0",null,"46.0","0",null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_cssclass("div_SEARCH_Bg");
            obj.set_formscrolltype("none");
            this.addChild(obj.name, obj);

            obj = new Static("staCD_SITE","0.0","10.0","92.0","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("0");
            obj.set_text("현장코드");
            obj.set_textDecoration("none");
            obj.set_textAlign("center");
            obj.set_cssclass("sta_WF_SchLabel");
            this.divSearch.addChild(obj.name, obj);

            obj = new Div("ccfCD_SITE","staCD_SITE:0.0","10.0","200","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.getSetter("CodeFindName").set("DWX_CFBZPLNSITE");
            obj.getSetter("CDTextWidth").set("80");
            obj.set_taborder("1");
            obj.set_url("cmm::cmmCodeFind.xfdl");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("staYM_WORK","ccfCD_SITE:0.0","10.0","92.0","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("0");
            obj.set_text("작성년월");
            obj.set_textAlign("center");
            obj.set_cssclass("sta_WF_SchLabelE");
            this.divSearch.addChild(obj.name, obj);

            obj = new Div("ctclYM_WORK","staYM_WORK:0.0","10.0","80","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("1");
            obj.set_url("cmm::cmmCalMM.xfdl");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("staYR_PLN","ctclYM_WORK:0.0","10.0","92.0","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("0");
            obj.set_text("계획년도");
            obj.set_textAlign("center");
            obj.set_cssclass("sta_WF_SchLabelE");
            this.divSearch.addChild(obj.name, obj);

            obj = new Div("ctclYR_PLN","staYR_PLN:0.0","10.0","60","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("1");
            obj.set_url("cmm::cmmCalYY.xfdl");
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

            obj = new BindItem("item1","divSearch.form.ctclYM_WORK.form.TextBox","value","dsSearch","YM_WORK");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item2","divSearch.form.ctclYR_PLN.form.TextBox","value","dsSearch","YR_PLN");
            this.addChild(obj.name, obj);
            obj.bind();
            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {
            this._addPreloadList("fdl","cmm::cmmCodeFind.xfdl");
            this._addPreloadList("fdl","cmm::cmmCalMM.xfdl");
            this._addPreloadList("fdl","cmm::cmmCalYY.xfdl");
        };
        
        // User Script
        this.registerScript("DWF_BZPLN.xfdl", function() {
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

        	var today = this.gfnGetDate();
        	this.dsSearch.setColumn(0, "YM_WORK", today.substr(0,6));
        	this.dsSearch.setColumn(0, "YR_PLN", today.substr(0,4));

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
        	this.gfnGridInit(this.dxGrid, this.dsList, "DW", "DWF_BZPLN");

        	this.dxGrid.EnterCell = "fnGrid_EnterCell";
        };

        /************************************************************************
         * 파라미터 설정
         ************************************************************************/
        this.fnSetParameter = function() {
        	this.dsSelect = new Dataset();
        	this.dsSelect.addColumn("TY_WRK", "string");
        	this.dsSelect.addColumn("CD_SITE", "string");
        	this.dsSelect.addColumn("YR_PLN", "string");
        	this.dsSelect.addColumn("YM_WORK", "string");

        	this.dsSave = new Dataset();
        	this.dsSave.addColumn("TY_WRK", "string");
        	this.dsSave.addColumn("ID_USER", "string");
        	this.dsSave.addColumn("CD_SITE", "string");
        	this.dsSave.addColumn("YR_PLN", "string");
        	this.dsSave.addColumn("YM_WORK", "string");
        	this.dsSave.addColumn("CD_PLNITM", "string");
        	this.dsSave.addColumn("AM_BZPLN_01", "bigdecimal");
        	this.dsSave.addColumn("AM_BZPLN_02", "bigdecimal");
        	this.dsSave.addColumn("AM_BZPLN_03", "bigdecimal");
        	this.dsSave.addColumn("AM_BZPLN_04", "bigdecimal");
        	this.dsSave.addColumn("AM_BZPLN_05", "bigdecimal");
        	this.dsSave.addColumn("AM_BZPLN_06", "bigdecimal");
        	this.dsSave.addColumn("AM_BZPLN_07", "bigdecimal");
        	this.dsSave.addColumn("AM_BZPLN_08", "bigdecimal");
        	this.dsSave.addColumn("AM_BZPLN_09", "bigdecimal");
        	this.dsSave.addColumn("AM_BZPLN_10", "bigdecimal");
        	this.dsSave.addColumn("AM_BZPLN_11", "bigdecimal");
        	this.dsSave.addColumn("AM_BZPLN_12", "bigdecimal");
        	this.dsSave.addColumn("DS_RMKS", "string");
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

        	this.dsSelect.setColumn(0, "TY_WRK", "Q");
        	this.dsSelect.setColumn(0, "CD_SITE", this.dsSearch.getColumn(0, "CD_SITE"));
        	this.dsSelect.setColumn(0, "YR_PLN", this.dsSearch.getColumn(0, "YR_PLN"));
        	this.dsSelect.setColumn(0, "YM_WORK", this.dsSearch.getColumn(0, "YM_WORK"));

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
        	var nrow = this.gfnGridAdd(this.dxGrid); // top (default), bottom, current
        	//this.dsList.set_enableevent(false);
        	this.dsList.setColumn(nrow, "CD_PLNITM", "01");
        	this.dsList.setColumn(nrow, "YN_EDIT", "Y");

        	if(!this.gfnIsNull(this.dsSearch.getColumn(0, "CD_SITE")))
        	{
        		this.dsList.setColumn(nrow, "CD_SITE", this.dsSearch.getColumn(0, "CD_SITE"));
        	}
        	//this.dsList.set_enableevent(true);
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
        				this.dsSave.setColumn(nrow, "CD_SITE", this.dsList.getColumn(i, "CD_SITE"));
        				this.dsSave.setColumn(nrow, "YR_PLN", this.dsSearch.getColumn(0, "YR_PLN"));
        				this.dsSave.setColumn(nrow, "YM_WORK", this.dsSearch.getColumn(0, "YM_WORK"));
        				this.dsSave.setColumn(nrow, "CD_PLNITM", this.dsList.getColumn(i, "CD_PLNITM"));
        				this.dsSave.setColumn(nrow, "AM_BZPLN_01", this.dsList.getColumn(i, "AM_BZPLN_01"));
        				this.dsSave.setColumn(nrow, "AM_BZPLN_02", this.dsList.getColumn(i, "AM_BZPLN_02"));
        				this.dsSave.setColumn(nrow, "AM_BZPLN_03", this.dsList.getColumn(i, "AM_BZPLN_03"));
        				this.dsSave.setColumn(nrow, "AM_BZPLN_04", this.dsList.getColumn(i, "AM_BZPLN_04"));
        				this.dsSave.setColumn(nrow, "AM_BZPLN_05", this.dsList.getColumn(i, "AM_BZPLN_05"));
        				this.dsSave.setColumn(nrow, "AM_BZPLN_06", this.dsList.getColumn(i, "AM_BZPLN_06"));
        				this.dsSave.setColumn(nrow, "AM_BZPLN_07", this.dsList.getColumn(i, "AM_BZPLN_07"));
        				this.dsSave.setColumn(nrow, "AM_BZPLN_08", this.dsList.getColumn(i, "AM_BZPLN_08"));
        				this.dsSave.setColumn(nrow, "AM_BZPLN_09", this.dsList.getColumn(i, "AM_BZPLN_09"));
        				this.dsSave.setColumn(nrow, "AM_BZPLN_10", this.dsList.getColumn(i, "AM_BZPLN_10"));
        				this.dsSave.setColumn(nrow, "AM_BZPLN_11", this.dsList.getColumn(i, "AM_BZPLN_11"));
        				this.dsSave.setColumn(nrow, "AM_BZPLN_12", this.dsList.getColumn(i, "AM_BZPLN_12"));
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
        						strArg, 		// 입력갑스로 보낼 arguments, strFormData="20120607"
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
        		//Alert후 실행할 처리
        		this.fnVaidateCallback = function() {
        			this.divSearch.form.ctclYM_WORK.form.TextBox.setFocus();
        		}
        		this.gfnAlert("작성년월을 입력하세요.", "fnVaidateCallback");
        	}
        	else if (this.gfnIsNull(this.dsSearch.getColumn(0, "YR_PLN"))) {
        		validate = false;
        		//Alert후 실행할 처리
        		this.fnVaidateCallback = function() {
        			this.divSearch.form.ctclYR_PLN.form.TextBox.setFocus();
        		}
        		this.gfnAlert("계획년도를 입력하세요.", "fnVaidateCallback");
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
        }

        /************************************************************************
         * 코드파인드 이벤트
         ************************************************************************/

        /************************************************************************
         * 그리드 이벤트
         ************************************************************************/
         this.fnGrid_EnterCell = function(obj, row, cell) {
        	//var colnm = this.gfnGridGetBindColumnNameByIndex(obj, cell);
        	if(this.dsList.getColumn(row, "YN_EDIT") != "Y" ) {
        		return false;
        	}

        }

        /************************************************************************
         * 기타 이벤트
         ************************************************************************/
        this.dsSearch_onvaluechanged = function(obj,e)
        {
        	if(e.oldvalue != e.newvalue) {
        		this.gfnSetFormStatus(this);	// 폼상태 초기화
        		this.gfnGridClear(this.dxGrid);

        		if(e.columnid == "YR_PLN")
        		{
        			for(var i=0; i < this.dxGrid.getCellCount("head"); i++) {
        				if(this.dxGrid.getCellText(-1,i).indexOf("당해") > -1) {
        					if(this.gfnIsNull(e.newvalue))
        					{
        						this.dxGrid.setCellProperty("head", i, "text", "당해(계획)년도");
        					}
        					else
        					{
        						this.dxGrid.setCellProperty("head", i, "text", "당해(" + e.newvalue + ")년도");
        					}
        				}
        			}
        		}
        	}
        };


        this.dsList_onvaluechanged = function(obj,e)
        {
        	if(e.oldvalue != e.newvalue)
        	{
        		var pos = this.dsList.rowposition;

        		var am_bzpln_01 = nexacro.toNumber(this.dsList.getColumn(pos, "AM_BZPLN_01"), 0);
        		var am_bzpln_02 = nexacro.toNumber(this.dsList.getColumn(pos, "AM_BZPLN_02"), 0);
        		var am_bzpln_03 = nexacro.toNumber(this.dsList.getColumn(pos, "AM_BZPLN_03"), 0);
        		var am_bzpln_04 = nexacro.toNumber(this.dsList.getColumn(pos, "AM_BZPLN_04"), 0);
        		var am_bzpln_05 = nexacro.toNumber(this.dsList.getColumn(pos, "AM_BZPLN_05"), 0);
        		var am_bzpln_06 = nexacro.toNumber(this.dsList.getColumn(pos, "AM_BZPLN_06"), 0);
        		var am_bzpln_07 = nexacro.toNumber(this.dsList.getColumn(pos, "AM_BZPLN_07"), 0);
        		var am_bzpln_08 = nexacro.toNumber(this.dsList.getColumn(pos, "AM_BZPLN_08"), 0);
        		var am_bzpln_09 = nexacro.toNumber(this.dsList.getColumn(pos, "AM_BZPLN_09"), 0);
        		var am_bzpln_10 = nexacro.toNumber(this.dsList.getColumn(pos, "AM_BZPLN_10"), 0);
        		var am_bzpln_11 = nexacro.toNumber(this.dsList.getColumn(pos, "AM_BZPLN_11"), 0);
        		var am_bzpln_12 = nexacro.toNumber(this.dsList.getColumn(pos, "AM_BZPLN_12"), 0);

        		switch(e.columnid)
        		{
        			// 당해년도(계) 를 위한 자동산식.
        			case "AM_BZPLN_01":
        			case "AM_BZPLN_02":
        			case "AM_BZPLN_03":
        			case "AM_BZPLN_04":
        			case "AM_BZPLN_05":
        			case "AM_BZPLN_06":
        			case "AM_BZPLN_07":
        			case "AM_BZPLN_08":
        			case "AM_BZPLN_09":
        			case "AM_BZPLN_10":
        			case "AM_BZPLN_11":
        			case "AM_BZPLN_12":
        				var result = am_bzpln_01 + am_bzpln_02 + am_bzpln_03 + am_bzpln_04 + am_bzpln_05 + am_bzpln_06 + am_bzpln_07 + am_bzpln_08 + am_bzpln_09 + am_bzpln_10 + am_bzpln_11 + am_bzpln_12;
        				this.dsList.setColumn(pos, "AM_BZPLN_TMON", result);
        			break;

        			case "AM_BZPLN_TMON" :
        			case "AM_BZPLN_PSUM" :
        				var result = nexacro.toNumber(this.dsList.getColumn(pos, "AM_BZPLN_TMON"),0) + nexacro.toNumber(this.dsList.getColumn(pos, "AM_BZPLN_PSUM"),0);
        				this.dsList.setColumn(pos, "AM_BZPLN_TSUM", result);
        			break;

        			case "AM_DOKUB" :
        			case "AM_BZPLN_TSUM" :
        				var result = nexacro.toNumber(this.dsList.getColumn(pos, "AM_DOKUB"),0) - nexacro.toNumber(this.dsList.getColumn(pos, "AM_BZPLN_TSUM"),0);
        				this.dsList.setColumn(pos, "AM_BZPLN_RMN", result);
        			break;
        		}
        	}
        };

        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.form_onload,this);
            this.dsList.addEventHandler("onvaluechanged",this.dsList_onvaluechanged,this);
            this.dsSearch.addEventHandler("onvaluechanged",this.dsSearch_onvaluechanged,this);
        };
        this.loadIncludeScript("DWF_BZPLN.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
