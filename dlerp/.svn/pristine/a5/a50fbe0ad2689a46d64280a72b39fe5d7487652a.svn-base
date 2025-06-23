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
            obj._setContents("<ColumnInfo><Column id=\"TARGET\" type=\"STRING\" size=\"256\"/><Column id=\"SP\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"TARGET\">select</Col><Col id=\"SP\">DWDPR_LANDCST_SELECT</Col></Row><Row><Col id=\"TARGET\">save</Col><Col id=\"SP\">DWDPR_LANDCST_SAVE</Col></Row><Row><Col id=\"TARGET\">exec</Col><Col id=\"SP\">DWDPR_LANDCST_EXECUTE</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsSearch", this);
            obj._setContents("<ColumnInfo><Column id=\"CD_SITE\" type=\"STRING\" size=\"256\"/><Column id=\"FR_WORK\" type=\"STRING\" size=\"256\"/><Column id=\"TO_WORK\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row/></Rows>");
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
            obj.set_cssclass("sta_WF_SchLabelE");
            this.divSearch.addChild(obj.name, obj);

            obj = new Div("ccfCD_SITE","staCD_SITE:0.0","10.0","200","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.getSetter("CodeFindName").set("DZX_CFSITE");
            obj.getSetter("CDTextWidth").set("80");
            obj.set_taborder("1");
            obj.set_url("cmm::cmmCodeFind.xfdl");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("staCD_PERIOD","ccfCD_SITE:0.0","10.0","92.0","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("2");
            obj.set_text("작업년월");
            obj.set_cssclass("sta_WF_SchLabelE");
            this.divSearch.addChild(obj.name, obj);

            obj = new Div("ctclFR_WORK","staCD_PERIOD:0.0","10.0","80","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("3");
            obj.set_url("cmm::cmmCalMM.xfdl");
            obj.set_text("");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("sta00","ctclFR_WORK:0.0","10.0","30.0","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("5");
            obj.set_text("~");
            obj.set_cssclass("sta_WF_AC");
            this.divSearch.addChild(obj.name, obj);

            obj = new Div("ctclYM_WORK","sta00:0.0","10.0","80","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("4");
            obj.set_url("cmm::cmmCalMM.xfdl");
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

            obj = new BindItem("item1","divSearch.form.ctclFR_WORK.form.TextBox","value","dsSearch","FR_WORK");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item2","divSearch.form.ctclYM_WORK.form.TextBox","value","dsSearch","TO_WORK");
            this.addChild(obj.name, obj);
            obj.bind();
            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {
            this._addPreloadList("fdl","cmm::cmmCodeFind.xfdl");
            this._addPreloadList("fdl","cmm::cmmCalMM.xfdl");
        };
        
        // User Script
        this.registerScript("DWD_LANDCST.xfdl", function() {
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
        	// 타화면에서 오픈시 넘어오는 파라미터 처리
        	if(!this.gfnIsNull(this.getOwnerFrame().CD_SITE) && !this.gfnIsNull(this.getOwnerFrame().YM_WORK) && !this.gfnIsNull(this.getOwnerFrame().FR_WORK)) {
        		this.dsSearch.setColumn(0, "CD_SITE", this.getOwnerFrame().CD_SITE);
        		this.ccfCD_SITE.form.DSTextBox.set_value(this.getOwnerFrame().DS_SITE);
        		this.dsSearch.setColumn(0, "TO_WORK", this.getOwnerFrame().YM_WORK);
        		this.dsSearch.setColumn(0, "FR_WORK", this.getOwnerFrame().FR_WORK);

        		this.FormBtns.Select.click();
        	}
        	else
        	{
        		this.dsSearch.setColumn(0, "TO_WORK", today.substr(0,6));
        		this.dsSearch.setColumn(0, "FR_WORK", today.substr(0,4) + "01");
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

        	this.btn1 = this.gfnFormButtonAdd("btnLandCstCrt", "fnLandCstCrt");
        	this.btn2 = this.gfnFormButtonAdd("btnLandCstIpt", "fnLandCstIpt");
        	this.btn3 = this.gfnFormButtonAdd("btnLandCstIptCnc", "fnLandCstIptCnc");
        };

        /************************************************************************
         * 변수 선언
         ************************************************************************/
        this.fnSetVariable = function() {
        	this.ccfCD_SITE = this.divSearch.form.ccfCD_SITE;
        	this.ctclYM_WORK = this.divSearch.form.ctclYM_WORK;
        	this.ctclFR_WORK = this.divSearch.form.ctclFR_WORK;

        	this.dxGrid = this.divData.form.objGrid;
        };

        /************************************************************************
         * 이벤트 설정
         ************************************************************************/
        this.fnSetEvent = function() {
        	// 그리드 초기화
        	this.gfnGridInit(this.dxGrid, this.dsList, "DW", "DWD_LANDCST");

        	this.dxGrid.BeforeUserDataSetParam = "fnGrid_BeforeUserDataSetParam";

        	// row 수정가능 여부
        	this.dxGrid.EnterCell = "fnGrid_EnterCell";

        };

        /************************************************************************
         * 파라미터 설정
         ************************************************************************/
        this.fnSetParameter = function() {

        	this.dsSelect = new Dataset();
        	this.dsSelect.addColumn("TY_WRK", "string");
        	this.dsSelect.addColumn("CD_SITE", "string");
        	this.dsSelect.addColumn("FR_WORK", "string");
        	this.dsSelect.addColumn("TO_WORK", "string");

        	this.dsSave = new Dataset();
        	this.dsSave.addColumn("TY_WRK", "string");
        	this.dsSave.addColumn("ID_USER", "string");
        	this.dsSave.addColumn("CD_SITE", "string");
        	this.dsSave.addColumn("YM_WORK", "string");
        	this.dsSave.addColumn("AM_ACQCST", "bigdecimal");
        	this.dsSave.addColumn("RT_CNSTPRSC", "bigdecimal");
        	this.dsSave.addColumn("DT_RSLT", "string");
        	this.dsSave.addColumn("AM_RSLT", "bigdecimal");
        	this.dsSave.addColumn("CD_COST", "string");
        	this.dsSave.addColumn("NO_ERPKEY", "string");
        	this.dsSave.addColumn("NO_SLIP", "string");
        	this.dsSave.addColumn("DS_RMKS", "string");

        	this.dsExec = new Dataset();
        	this.dsExec.addColumn("TY_WRK", "string");
        	this.dsExec.addColumn("ID_USER", "string");
        	this.dsExec.addColumn("CD_SITE", "string");
        	this.dsExec.addColumn("YM_WORK", "string");
        	this.dsExec.addColumn("CD_DEPT", "string");
        	this.dsExec.addColumn("NO_SLIP", "string");
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
        	this.dsSelect.setColumn(0, "TO_WORK", this.dsSearch.getColumn(0, "TO_WORK").substr(0,6));
        	this.dsSelect.setColumn(0, "FR_WORK", this.dsSearch.getColumn(0, "FR_WORK"));

        	var strSvcId    = "select";
        	var strSvcType  = "grid";
        	var inProc		= "_dsProc";
        	var inData      = "select=dsSelect";
        	var outData     = "dsList=select0 dsList2=select1";
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
        	var nrow = this.gfnGridAdd(this.dxGrid);
        }


        /*
         *	삭제 버튼
         */
        this.fnDel = function() {
        	this.gfnGridDel(this.dxGrid);
        };

        /*
         *	저장 버튼
         */
        this.fnSave = function() {
        	if (!this.gfnGridValidate(this.dxGrid)) return;

        	this.dxGrid.updateToDataset();
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
        				this.dsSave.setColumn(nrow, "YM_WORK", this.dsList.getColumn(this.dsList.rowposition, "YM_WORK"));
        				this.dsSave.setColumn(nrow, "AM_ACQCST", this.dsList.getColumn(i, "AM_ACQCST"));
        				this.dsSave.setColumn(nrow, "RT_CNSTPRSC", this.dsList.getColumn(i, "RT_CNSTPRSC"));
        				this.dsSave.setColumn(nrow, "DT_RSLT", this.dsList.getColumn(i, "DT_RSLT"));
        				this.dsSave.setColumn(nrow, "AM_RSLT", this.dsList.getColumn(i, "AM_RSLT"));
        				this.dsSave.setColumn(nrow, "CD_COST", this.dsList.getColumn(i, "CD_COST"));
        				this.dsSave.setColumn(nrow, "NO_ERPKEY", this.dsList.getColumn(i, "NO_ERPKEY"));
        				this.dsSave.setColumn(nrow, "NO_SLIP", this.dsList.getColumn(i, "NO_SLIP"));
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
        };

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
        			this.ccfCD_SITE.form.CDTextBox.setFocus();
        		}
        		this.gfnAlert("현장코드를 입력하세요.", "fnVaidateCallback");
        	}
        	else if (this.gfnIsNull(this.dsSearch.getColumn(0, "TO_WORK"))) {
        		validate = false;
        		// Alert후 실행할 처리
        		this.fnVaidateCallback = function() {
        			this.ctclYM_WORK.setFocus();
        		}
        		this.gfnAlert("작업종료월을 입력하세요.", "fnVaidateCallback");

        	}else if (this.gfnIsNull(this.dsSearch.getColumn(0, "FR_WORK"))) {
        		validate = false;
        		// Alert후 실행할 처리
        		this.fnVaidateCallback = function() {
        			this.ctclFR_WORK.setFocus();
        		}
        		this.gfnAlert("작업시작월을 입력하세요.", "fnVaidateCallback");
        	}
        	return validate;
        };

        /************************************************************************
         * 콜백 이벤트
         ************************************************************************/
        /*
         *	콜백 처리
         */
        this.fnCallback = function(svcID, errorCode, errorMsg, args)
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
        	else if(svcID == "exec")
        	{
        		if (errorCode == 0) {
        			if(args == "CRT")
        			{
        				this.fnLandCstCrt_callback = function()
        				{
        					this.FormBtns.Select.click();
        				}
        				this.gfnAlert("대지비실적자료 생성 정상 처리되었습니다.", "fnLandCstCrt_callback");
        			}
        			else if(args == "CSTIPT")
        			{
        				this.fnLandCstIpt_callback = function()
        				{
        					this.FormBtns.Select.click();
        				}
        				this.gfnAlert("대지비실적전기 정상 처리되었습니다.", "fnLandCstIpt_callback");
        			}
        				else if(args == "IPTCNC")
        			{
        				this.fnLandCstIptCnc_callback = function()
        				{
        					this.FormBtns.Select.click();
        				}
        				this.gfnAlert("대지비실적전기취소 정상 처리되었습니다.", "fnLandCstIptCnc_callback");
        			}
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

        this.fnGrid_BeforeUserDataSetParam = function(id, dsUserParam, nrow) {
        	// 그리드에서 코드파인드 id는 그리드셋팅의 코드파인드 식별ID
         	//그리드 발주처 코드파인드
        	if (id == "DWX_CFCOST_TREE_01") {

        		var cd_site = this.dsSearch.getColumn(0, "CD_SITE");
        		if(this.gfnIsNull(cd_site)) {
        			this.gfnAlert("현장코드를 먼저 입력하세요.");
        			return false;
        		}

        		dsUserParam.setColumn(nrow, "CD_SITE", this.dsSearch.getColumn(0, "CD_SITE"));
        		dsUserParam.setColumn(nrow, "CD_GBIMOK", "");
        		dsUserParam.setColumn(nrow, "CD_STDAGG", "SIT");
         	}
        	return true;
        }

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
         //대지비실적생성
        this.fnLandCstCrt = function(obj,e) {
        	//if (!this.fnSelectValidate()) return false;

        	var msg = "현장코드 : " + this.dsSearch.getColumn(0, "CD_SITE") + " [" + this.ccfCD_SITE.form.DSTextBox.text + "]"
        	        + "\n작업년월 : " + this.dsSearch.getColumn(0, "TO_WORK")
        			+ "\n기존자료 삭제 후 재생성 처리됩니다."
        			+ "\n\n대지비실적자료 생성 하시겠습니까?";
        	this.gfnConfirm(msg,"fnWrt_callback","CRT");
        }


        //실적전기
        this.fnLandCstIpt = function(obj,e) {
        	//if (!this.fnSelectValidate()) return false;

        	var msg = "현장코드 : " + this.dsSearch.getColumn(0, "CD_SITE") + " [" + this.ccfCD_SITE.form.DSTextBox.text + "]"
        	        + "\n작업년월 : " +  this.dsList.getColumn(this.dsList.rowposition, "YM_WORK")
        			+ "\n\n대지비실적전기 처리 하시겠습니까?";
        	this.gfnConfirm(msg, "fnWrt_callback", "CSTIPT");
        }

        //전기취소
        this.fnLandCstIptCnc = function(obj,e) {
        	//if (!this.fnSelectValidate()) return false;

        	var msg = "현장코드 : " + this.dsSearch.getColumn(0, "CD_SITE") + " [" + this.ccfCD_SITE.form.DSTextBox.text + "]"
        	        + "\n작업년월 : " + this.dsList.getColumn(this.dsList.rowposition, "YM_WORK")
        			+ "\n\n대지비실적전기취소 처리 하시겠습니까?";
        	this.gfnConfirm(msg, "fnWrt_callback", "IPTCNC");
        }

        this.fnWrt_callback = function(strId, val)
        {
        	if(val == true)
        	{
        		this.dsExec.clearData();
        		var nrow = this.dsExec.addRow();

        		this.dsExec.setColumn(nrow, "TY_WRK", strId);
        		this.dsExec.setColumn(nrow, "ID_USER", this.AuthClient.ID_USER);
        		this.dsExec.setColumn(nrow, "CD_SITE", this.dsSearch.getColumn(0, "CD_SITE"));

        		if(strId == "CRT"){
        			this.dsExec.setColumn(nrow, "YM_WORK", this.dsSearch.getColumn(0, "TO_WORK"));
        		}else{
        			this.dsExec.setColumn(nrow, "YM_WORK", this.dsList.getColumn(this.dsList.rowposition, "YM_WORK"));
        		}

        		this.dsExec.setColumn(nrow, "CD_DEPT", this.AuthClient.CD_DEPT);
        		this.dsExec.setColumn(nrow, "NO_SLIP", this.dsList.getColumn(this.dsList.rowposition, "NO_SLIP"));

        		if (this.dsExec.rowcount == 0) return;

        		var strSvcId    = "exec";
        		var strSvcType  = "save";
        		var inProc		= "_dsProc";
        		var inData      = "exec=dsExec";
        		var outData     = "";
        		var strArg      = strId;
        		var callBackFnc = "fnCallback";

        		this.gfnTransaction( strSvcId , 	// transaction을 구분하기 위한 svc id값
        							strSvcType , 	// transaction을 요청할 구분
        							inProc,			// Procedure 정보 Dataset 이름
        							inData , 		// 입력값으로 보낼 dataset id , a=b형태로 실제이름과 입력이름을 매칭
        							outData , 		// 처리결과값으로 받을 dataset id, a=b형태로 실제이름과 입력이름을 매칭
        							strArg, 		// 입력값으로 보낼 arguments, strFormData="20120607"
        							callBackFnc);   // 통신방법 정의 [생략가능]
        	}
        }

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
        this.loadIncludeScript("DWD_LANDCST.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
