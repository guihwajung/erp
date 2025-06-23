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
            this.set_titletext("과목구성계산정보등록");
            if (Form == this.constructor)
            {
                this._setFormPosition(1280,720);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("dsList", this);
            obj._setContents("");
            this.addChild(obj.name, obj);


            obj = new Dataset("_dsProc", this);
            obj._setContents("<ColumnInfo><Column id=\"TARGET\" type=\"STRING\" size=\"256\"/><Column id=\"SP\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"TARGET\">select</Col><Col id=\"SP\">DHFPR_GMCALC_SELECT2</Col></Row><Row><Col id=\"TARGET\">insert</Col><Col id=\"SP\">DHFPR_GMCALC_INSERT</Col></Row><Row><Col id=\"TARGET\">update</Col><Col id=\"SP\">DHFPR_GMCALC_UPDATE</Col></Row><Row><Col id=\"TARGET\">delete</Col><Col id=\"SP\">DHFPR_GMCALC_DELETE</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsSearch", this);
            obj._setContents("<ColumnInfo><Column id=\"CD_GMGS\" type=\"STRING\" size=\"256\"/><Column id=\"NO_CHASU\" type=\"INT\" size=\"256\"/></ColumnInfo><Rows><Row/></Rows>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Div("divSearch","0.0","10.0",null,"46.0","0",null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_cssclass("div_SEARCH_Bg");
            obj.set_formscrolltype("none");
            this.addChild(obj.name, obj);

            obj = new Static("staCD_GMGS","0.0","10.0","118.0","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("1");
            obj.set_text("과목구성코드");
            obj.set_cssclass("sta_WF_SchLabelE");
            this.divSearch.addChild(obj.name, obj);

            obj = new Div("ccfCD_GMGS","staCD_GMGS:0.0","10.0","300","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.getSetter("CDTextWidth").set("70");
            obj.set_taborder("2");
            obj.getSetter("CodeFindName").set("DHX_CFMAGAM_GMCONS");
            obj.set_url("cmm::cmmCodeFind.xfdl");
            obj.set_text("");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("staNO_CHASU","ccfCD_GMGS:0.0","10.0","118.0","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("3");
            obj.set_text("계산차수");
            obj.set_cssclass("sta_WF_SchLabelE");
            this.divSearch.addChild(obj.name, obj);

            obj = new MaskEdit("ctxtNO_CHASU","staNO_CHASU:0.0","10.0","100","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("4");
            obj.set_value("");
            obj.set_type("number");
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
            obj = new BindItem("item0","divSearch.form.ccfCD_GMGS.form.CDTextBox","value","dsSearch","CD_GMGS");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item1","divSearch.form.ctxtNO_CHASU","value","dsSearch","NO_CHASU");
            this.addChild(obj.name, obj);
            obj.bind();
            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {
            this._addPreloadList("fdl","cmm::cmmCodeFind.xfdl");
        };
        
        // User Script
        this.registerScript("DHF_GMCONS2.xfdl", function() {
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

        	if(!this.gfnIsNull(this.getOwnerFrame().CD_GMCONS) && !this.gfnIsNull(this.getOwnerFrame().NO_CHASU))
        	{
        		this.dsSearch.setColumn(0, "CD_GMGS", this.getOwnerFrame().CD_GMCONS);
        		this.divSearch.form.ccfCD_GMGS.form.DSTextBox.set_value(this.getOwnerFrame().DS_GMCONS);
        		this.dsSearch.setColumn(0, "NO_CHASU", this.getOwnerFrame().NO_CHASU);

        		this.FormBtns.Select.click();
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

        };

        /************************************************************************
         * 변수 선언
         ************************************************************************/
        this.fnSetVariable = function() {
        	this.ccfCD_GMGS = this.divSearch.form.ccfCD_GMGS;
        	this.ctxtNO_CHASU = this.divSearch.form.ctxtNO_CHASU;

        	this.dxGrid = this.divData.form.objGrid;
        };

        /************************************************************************
         * 이벤트 설정
         ************************************************************************/
        this.fnSetEvent = function() {
        	this.ccfCD_GMGS.BeforeUserDataSetParam = "fnBeforeUserDataSetParam";

        	// 그리드 초기화
        	this.gfnGridInit(this.dxGrid, this.dsList, "DH", "DHF_GMCONS2");
        	this.dxGrid.BeforeUserDataSetParam = "fnGrid_BeforeUserDataSetParam";
        	this.dxGrid.AfterEdit = "fnGrid_AfterEdit";
        };

        /************************************************************************
         * 파라미터 설정
         ************************************************************************/
        this.fnSetParameter = function() {
        	this.dsSelect = new Dataset();
        	this.dsSelect.addColumn("CD_GMGS", "string");
        	this.dsSelect.addColumn("NO_CHASU", "bigdecimal");

        	this.dsInsert = new Dataset();
        	this.dsInsert.addColumn("CD_GMGS", "string");
        	this.dsInsert.addColumn("NO_CHASU", "bigdecimal");
        	this.dsInsert.addColumn("NO_PLUSMINUS", "bigdecimal");
        	this.dsInsert.addColumn("TY_GUBUN", "string");
        	this.dsInsert.addColumn("CD_GM_START", "string");
        	this.dsInsert.addColumn("CD_GM_END", "string");
        	this.dsInsert.addColumn("ID_TRANS", "string");

        	this.dsUpdate = new Dataset();
        	this.dsUpdate.addColumn("CD_GMGS", "string");
        	this.dsUpdate.addColumn("NO_CHASU", "bigdecimal");
        	this.dsUpdate.addColumn("NO_PLUSMINUS", "bigdecimal");
        	this.dsUpdate.addColumn("TY_GUBUN", "string");
        	this.dsUpdate.addColumn("CD_GM_START", "string");
        	this.dsUpdate.addColumn("CD_GM_END", "string");
        	this.dsUpdate.addColumn("ID_TRANS", "string");

        	this.dsDelete = new Dataset();
        	this.dsDelete.addColumn("CD_GMGS", "string");
        	this.dsDelete.addColumn("NO_CHASU", "bigdecimal");
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

        	this.dsSelect.setColumn(0, "CD_GMGS", this.dsSearch.getColumn(0, "CD_GMGS"));
        	this.dsSelect.setColumn(0, "NO_CHASU", this.dsSearch.getColumn(0, "NO_CHASU"));

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
        	if (!this.fnSaveValidate()) return;
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
        				this.dsInsert.setColumn(nrow, "CD_GMGS", this.dsSearch.getColumn(0, "CD_GMGS"));
        				this.dsInsert.setColumn(nrow, "NO_CHASU", this.dsList.getColumn(i, "NO_CHASU"));
        				this.dsInsert.setColumn(nrow, "NO_PLUSMINUS", this.dsList.getColumn(i, "NO_PLUSMINUS") == "+" ? 1 : -1);
        				this.dsInsert.setColumn(nrow, "TY_GUBUN", this.dsList.getColumn(i, "TY_GUBUN"));
        				this.dsInsert.setColumn(nrow, "CD_GM_START", this.dsList.getColumn(i, "CD_GM_START"));
        				this.dsInsert.setColumn(nrow, "CD_GM_END", this.dsList.getColumn(i, "CD_GM_END"));
        				this.dsInsert.setColumn(nrow, "ID_TRANS", this.dsList.getColumn(i, "ID_TRANS"));
        				break;

        			case "U":
        				var nrow = this.dsUpdate.addRow();
        				this.dsUpdate.setColumn(nrow, "CD_GMGS", this.dsSearch.getColumn(0, "CD_GMGS"));
        				this.dsUpdate.setColumn(nrow, "NO_CHASU", this.dsList.getColumn(i, "NO_CHASU"));
        				this.dsUpdate.setColumn(nrow, "NO_PLUSMINUS", this.dsList.getColumn(i, "NO_PLUSMINUS") == "+" ? 1 : -1);
        				this.dsUpdate.setColumn(nrow, "TY_GUBUN", this.dsList.getColumn(i, "TY_GUBUN"));
        				this.dsUpdate.setColumn(nrow, "CD_GM_START", this.dsList.getColumn(i, "CD_GM_START"));
        				this.dsUpdate.setColumn(nrow, "CD_GM_END", this.dsList.getColumn(i, "CD_GM_END"));
        				this.dsUpdate.setColumn(nrow, "ID_TRANS", this.dsList.getColumn(i, "ID_TRANS"));
        				break;

        			case "D":
        				var nrow = this.dsDelete.addRow();
        				this.dsDelete.setColumn(nrow, "CD_GMGS", this.dsSearch.getColumn(0, "CD_GMGS"));
        				this.dsDelete.setColumn(nrow, "NO_CHASU", this.dsList.getColumn(i, "NO_CHASU"));
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

        	if (this.gfnIsNull(this.dsSearch.getColumn(0,"CD_GMGS"))) {
        		validate = false;
        		// Alert후 실행할 처리
        		this.fnVaidateCallback = function() {
        			this.ccfCD_GMGS.form.CDTextBox.setFocus();
        		}
        		this.gfnAlert("과목구성코드를 입력하세요.", "fnVaidateCallback");
        	}
        	else if (this.gfnIsNull(this.dsSearch.getColumn(0,"NO_CHASU"))) {
        		validate = false;
        		// Alert후 실행할 처리
        		this.fnVaidateCallback = function() {
        			this.ctxtNO_CHASU.setFocus();
        		}
        		this.gfnAlert("계산차수를 입력하세요.", "fnVaidateCallback");
        	}

        	return validate;
        };

        this.fnSaveValidate = function()
        {
        	var validate = true;

        	if(this.dsSearch.getColumn(0, "NO_CHASU") > 1)
        	{
        		if(this.dsList.findRow("TY_GUBUN", "G") < 0)
        		{
        			validate = false;
        			this.gfnAlert("계산차수가 2차 이상일때는 과목구성이 하나 이상 포함되어야합니다.");
        		}
        	}
        	else if(this.dsSearch.getColumn(0, "NO_CHASU") == 1)
        	{
        		for(var i = 0; i < this.dsList.rowcount; i++)
        		{
        			var flag = this.gfnGetFlag(this.dsList, i);

        			if(this.gfnIsNull(flag) || flag == "" || flag == "D") continue;

        			if(this.dsList.getColumn(i, "TY_GUBUN") == "G")
        			{
        				validate = false;
        				this.gfnAlert("계산차수가 1차인경우 구분을 과목으로 선택할수 없습니다.")
        				break;
        			}
        		}
        	}

        	if(validate == true)
        	{
        		for(var i = 0 ; i < this.dsList.rowcount; i++)
        		{
        			if(nexacro.toNumber(this.dsList.getColumn(i, "CD_GM_START"), 0) > nexacro.toNumber(this.dsList.getColumn(i, "CD_GM_END"),0))
        			{
        				validate = false;
        				this.gfnAlert("[" + (i+1) + "번줄]" + "시작코드가 종료코드보다 더 큰값이 입력되었습니다.")
        				break;
        			}
        		}
        	}

        	return validate;
        }
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
        this.fnBeforeUserDataSetParam = function(id, dsUserParam, nrow) {
        	if (id == "ccfCD_GMGS") {
        		dsUserParam.setColumn(nrow, "CHASU", "");
        	}
        	return true;
        }

        this.fnGrid_BeforeUserDataSetParam = function(id, dsUserParam, nrow) {
         	if (id == "DHX_CFGMCONS21" || id == "DHX_CFGMCONS22") {
        		var gubun = "";
        		var param1 = "";
        		var ty_gubun = this.gfnNvl(this.dsList.getColumn(this.dsList.rowposition, "TY_GUBUN"),"");

        		if(ty_gubun =="G") {
        			gubun = "G";
        			param1 = this.gfnNvl(this.dsList.getColumn(this.dsList.rowposition, "NO_CHASU"),"");
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

         		dsUserParam.setColumn(nrow, "TY_COMP",  gubun);
        		dsUserParam.setColumn(nrow, "PARAM1" , param1);
         	}

        	return true;
        };
        /************************************************************************
         * 그리드 이벤트
         ************************************************************************/
         this.fnGrid_AfterEdit = function(obj,e) {
        	if(e.columnid == "TY_GUBUN") {
        		this.dsList.setColumn(e.row, "CD_GM_START", "");
        		this.dsList.setColumn(e.row, "DS_GM_START", "");
        		this.dsList.setColumn(e.row, "CD_GM_END", "");
        		this.dsList.setColumn(e.row, "DS_GM_END", "");
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
        	}
        };


        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.form_onload,this);
            this.dsSearch.addEventHandler("onvaluechanged",this.dsSearch_onvaluechanged,this);
        };
        this.loadIncludeScript("DHF_GMCONS2.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
