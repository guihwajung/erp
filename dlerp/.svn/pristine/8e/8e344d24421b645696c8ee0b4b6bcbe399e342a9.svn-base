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
            this.set_titletext("자산코드관리");
            if (Form == this.constructor)
            {
                this._setFormPosition(1280,720);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("dsList", this);
            obj._setContents("");
            this.addChild(obj.name, obj);


            obj = new Dataset("_dsProc", this);
            obj._setContents("<ColumnInfo><Column id=\"TARGET\" type=\"STRING\" size=\"256\"/><Column id=\"SP\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"TARGET\">select</Col><Col id=\"SP\">DHNPR_ASSETINFO_SELECT</Col></Row><Row><Col id=\"TARGET\">insert</Col><Col id=\"SP\">DHNPR_ASSETINFO_INSERT</Col></Row><Row><Col id=\"TARGET\">update</Col><Col id=\"SP\">DHNPR_ASSETINFO_UPDATE</Col></Row><Row><Col id=\"TARGET\">delete</Col><Col id=\"SP\">DHNPR_ASSETINFO_DELETE</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsSearch", this);
            obj._setContents("<ColumnInfo><Column id=\"CD_CORP\" type=\"STRING\" size=\"256\"/><Column id=\"DS_CORP\" type=\"STRING\" size=\"256\"/><Column id=\"CD_ACASSET\" type=\"STRING\" size=\"256\"/><Column id=\"DS_ACASSET\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"CD_CORP\"/><Col id=\"CD_ACASSET\"/></Row></Rows>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Div("divSearch","0.0","10.0",null,"46.0","0",null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_cssclass("div_SEARCH_Bg");
            obj.set_formscrolltype("none");
            obj.set_text("");
            this.addChild(obj.name, obj);

            obj = new Static("staCD_SUJIFIRST","0.0","10.0","92.0","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("1");
            obj.set_text("법인코드");
            obj.set_cssclass("sta_WF_SchLabelE");
            this.divSearch.addChild(obj.name, obj);

            obj = new Div("ccfCD_CORP","staCD_SUJIFIRST:0.0","10.0","250","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.getSetter("CDTextWidth").set("50");
            obj.set_taborder("0");
            obj.set_url("cmm::cmmCodeFind.xfdl");
            obj.getSetter("CodeFindName").set("DHX_CFCORP");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("staCD_SUJISECOND","ccfCD_CORP:0.0","10.0","92.0","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("1");
            obj.set_text("자산코드");
            obj.set_textDecoration("none");
            obj.set_cssclass("sta_WF_SchLabel");
            this.divSearch.addChild(obj.name, obj);

            obj = new Div("ccfCD_ACASSET","staCD_SUJISECOND:0.0","10.0","350","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.getSetter("CDTextWidth").set("50");
            obj.set_taborder("0");
            obj.set_url("cmm::cmmCodeFind.xfdl");
            obj.getSetter("CodeFindName").set("DHX_CFASSETINFO");
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
            obj = new BindItem("item0","divSearch.form.ccfCD_CORP.form.CDTextBox","value","dsSearch","CD_CORP");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item1","divSearch.form.ccfCD_ACASSET.form.CDTextBox","value","dsSearch","CD_ACASSET");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item2","divSearch.form.ccfCD_CORP.form.DSTextBox","value","dsSearch","DS_CORP");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item3","divSearch.form.ccfCD_ACASSET.form.DSTextBox","value","dsSearch","DS_ACASSET");
            this.addChild(obj.name, obj);
            obj.bind();
            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {
            this._addPreloadList("fdl","cmm::cmmCodeFind.xfdl");
        };
        
        // User Script
        this.registerScript("DHN_ASSETINFO.xfdl", function() {
        this.objApp = this.gfnGetApplication();

        this.form_onload = function(obj,e)
        {
        	// -- 필수 -------------------//
        	this.gfnFormOnLoad(this);
        	this.gfnFormInfo(this);
        	// ---------------------------//

        	this.fnSetVariable();
        	this.fnSetButton();
        	this.fnSetExtendButton();
        	this.fnSetParameter();
        	this.fnSetEvent();

        	this.dsSearch.setColumn(0, "CD_CORP", this.AuthClient.CD_CORP);
        	this.dsSearch.setColumn(0, "DS_CORP", this.AuthClient.DS_CORP);

        	if (nexacro.toNumber(this.FormInfo.GR_SEARCH) > 1) {
         		this.ccfCD_CORP.set_enable(false);
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
        	this.btnAssetSeMok = this.gfnFormButtonAdd("AssetSeMok", "fnAssetSeMok"); 		//자산세목관리 버튼
        	this.btnRtDep      = this.gfnFormButtonAdd("RtDep", "fnRtDep"); 				//상각율표관리 버튼
        };

        /************************************************************************
         * 변수 선언
         ************************************************************************/
        this.fnSetVariable = function() {
            this.ccfCD_CORP = this.divSearch.form.ccfCD_CORP;
        	this.ccfCD_ACASSET = this.divSearch.form.ccfCD_ACASSET;
        	this.dxGrid = this.divData.form.objGrid;
        };

        /************************************************************************
         * 이벤트 설정
         ************************************************************************/
        this.fnSetEvent = function() {

        	// 그리드 초기화
        	this.gfnGridInit(this.dxGrid, this.dsList, "DH", "DHN_ASSETINFO");

        	this.dxGrid.set_selecttype("cell");
        	this.dxGrid.BeforeUserDataSetParam = "fnGrid_BeforeUserDataSetParam";

        	this.ccfCD_CORP.BeforeUserDataSetParam = "fnBeforeUserDataSetParam";
        	this.ccfCD_ACASSET.BeforeUserDataSetParam = "fnBeforeUserDataSetParam";

        	this.ccfCD_CORP.AfterCDTextChanged = "fnAfterCDTextChanged";
        	this.ccfCD_ACASSET.AfterCDTextChanged = "fnAfterCDTextChanged";

        };

        /************************************************************************
         * 파라미터 설정
         ************************************************************************/
        this.fnSetParameter = function() {

        	this.dsSelect = new Dataset();
        	this.dsSelect.addColumn("CD_CORP", "string");
        	this.dsSelect.addColumn("CD_ACASSET", "string");

        	this.dsInsert = new Dataset();
        	this.dsInsert.addColumn("CD_CORP", "string");
        	this.dsInsert.addColumn("CD_ACASSET", "string");
        	this.dsInsert.addColumn("DS_ACASSET", "string");
        	this.dsInsert.addColumn("TY_DEP", "string");
        	this.dsInsert.addColumn("CD_ACCOUNT", "string");
        	this.dsInsert.addColumn("DS_ACCOUNT", "string");
        	this.dsInsert.addColumn("YN_DEP", "string");
        	this.dsInsert.addColumn("TY_ITEM", "string");
        	this.dsInsert.addColumn("TY_MGMT", "string");
        	this.dsInsert.addColumn("YR_TAXLIFE", "string");
        	this.dsInsert.addColumn("RT_DEP", "string");
        	this.dsInsert.addColumn("ID_TRANS", "string");

        	this.dsInsert.addColumn("CD_REPAY_COST_AC", "string");
        	this.dsInsert.addColumn("DS_REPAY_COST_AC", "string");
        	this.dsInsert.addColumn("CD_REPAY_ASSET_AC", "string");
        	this.dsInsert.addColumn("DS_REPAY_ASSET_AC", "string");

        	this.dsUpdate = new Dataset();
        	this.dsUpdate.addColumn("CD_CORP", "string");
        	this.dsUpdate.addColumn("CD_ACASSET", "string");
        	this.dsUpdate.addColumn("DS_ACASSET", "string");
        	this.dsUpdate.addColumn("TY_DEP", "string");
        	this.dsUpdate.addColumn("CD_ACCOUNT", "string");
        	this.dsUpdate.addColumn("DS_ACCOUNT", "string");
        	this.dsUpdate.addColumn("YN_DEP", "string");
        	this.dsUpdate.addColumn("TY_ITEM", "string");
        	this.dsUpdate.addColumn("TY_MGMT", "string");
        	this.dsUpdate.addColumn("YR_TAXLIFE", "string");
        	this.dsUpdate.addColumn("RT_DEP", "string");
        	this.dsUpdate.addColumn("ID_TRANS", "string");

        	this.dsUpdate.addColumn("CD_REPAY_COST_AC", "string");
        	this.dsUpdate.addColumn("DS_REPAY_COST_AC", "string");
        	this.dsUpdate.addColumn("CD_REPAY_ASSET_AC", "string");
        	this.dsUpdate.addColumn("DS_REPAY_ASSET_AC", "string");

        	this.dsDelete = new Dataset();
        	this.dsDelete.addColumn("CD_CORP", "string");
        	this.dsDelete.addColumn("CD_ACASSET", "string");
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

        	this.dsSelect.setColumn(0, "CD_CORP"	, this.dsSearch.getColumn(0, "CD_CORP"));
        	this.dsSelect.setColumn(0, "CD_ACASSET" , this.dsSearch.getColumn(0, "CD_ACASSET"));

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
        	var nrow = 	this.gfnGridAdd(this.dxGrid); // top (default), bottom, current
        	this.dsList.setColumn(nrow, "CD_CORP", this.dsSearch.getColumn(0, "CD_CORP"));
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

        	// 공통 체크 외 필수 체크
        	if (!this.fnSaveValidation()) return;

        	this.dxGrid.updateToDataset();

        	this.dsInsert.clearData();
        	this.dsUpdate.clearData();
        	this.dsDelete.clearData();

        	for (var i = 0; i < this.dsList.rowcount; i++) {
        		var flag = this.gfnGetFlag(this.dsList, i);
        		switch(flag) {
        			case "I":
        				var nrow = this.dsInsert.addRow();
        				this.dsInsert.setColumn(nrow, "CD_CORP", this.dsList.getColumn(i, "CD_CORP"));
        				this.dsInsert.setColumn(nrow, "CD_ACASSET", this.dsList.getColumn(i, "CD_ACASSET"));
        				this.dsInsert.setColumn(nrow, "DS_ACASSET", this.dsList.getColumn(i, "DS_ACASSET"));
        				this.dsInsert.setColumn(nrow, "TY_DEP", this.dsList.getColumn(i, "TY_DEP"));
        				this.dsInsert.setColumn(nrow, "CD_ACCOUNT", this.dsList.getColumn(i, "CD_ACCOUNT"));
        				this.dsInsert.setColumn(nrow, "DS_ACCOUNT", this.dsList.getColumn(i, "DS_ACCOUNT"));
        				this.dsInsert.setColumn(nrow, "YN_DEP", this.dsList.getColumn(i, "YN_DEP"));
        				this.dsInsert.setColumn(nrow, "YR_TAXLIFE", this.dsList.getColumn(i, "YR_TAXLIFE"));
        				this.dsInsert.setColumn(nrow, "RT_DEP", this.dsList.getColumn(i, "RT_DEP"));
        				this.dsInsert.setColumn(nrow, "ID_TRANS", this.AuthClient.ID_USER);
        				this.dsInsert.setColumn(nrow, "CD_REPAY_COST_AC", this.dsList.getColumn(i, "CD_REPAY_COST_AC"))
        				this.dsInsert.setColumn(nrow, "DS_REPAY_COST_AC", this.dsList.getColumn(i, "DS_REPAY_COST_AC"))
        				this.dsInsert.setColumn(nrow, "CD_REPAY_ASSET_AC", this.dsList.getColumn(i, "CD_REPAY_ASSET_AC"))
        				this.dsInsert.setColumn(nrow, "DS_REPAY_ASSET_AC", this.dsList.getColumn(i, "DS_REPAY_ASSET_AC"))
        				break;

        			case "U":
        				var nrow = this.dsUpdate.addRow();
        				this.dsUpdate.setColumn(nrow, "CD_CORP", this.dsList.getColumn(i, "CD_CORP"));
        				this.dsUpdate.setColumn(nrow, "CD_ACASSET", this.dsList.getColumn(i, "CD_ACASSET"));
        				this.dsUpdate.setColumn(nrow, "DS_ACASSET", this.dsList.getColumn(i, "DS_ACASSET"));
        				this.dsUpdate.setColumn(nrow, "TY_DEP", this.dsList.getColumn(i, "TY_DEP"));
        				this.dsUpdate.setColumn(nrow, "CD_ACCOUNT", this.dsList.getColumn(i, "CD_ACCOUNT"));
        				this.dsUpdate.setColumn(nrow, "DS_ACCOUNT", this.dsList.getColumn(i, "DS_ACCOUNT"));
        				this.dsUpdate.setColumn(nrow, "YN_DEP", this.dsList.getColumn(i, "YN_DEP"));
        				this.dsUpdate.setColumn(nrow, "YR_TAXLIFE", this.dsList.getColumn(i, "YR_TAXLIFE"));
        				this.dsUpdate.setColumn(nrow, "RT_DEP", this.dsList.getColumn(i, "RT_DEP"));
        				this.dsUpdate.setColumn(nrow, "ID_TRANS", this.AuthClient.ID_USER);
        				this.dsUpdate.setColumn(nrow, "CD_REPAY_COST_AC", this.dsList.getColumn(i, "CD_REPAY_COST_AC"))
        				this.dsUpdate.setColumn(nrow, "DS_REPAY_COST_AC", this.dsList.getColumn(i, "DS_REPAY_COST_AC"))
        				this.dsUpdate.setColumn(nrow, "CD_REPAY_ASSET_AC", this.dsList.getColumn(i, "CD_REPAY_ASSET_AC"))
        				this.dsUpdate.setColumn(nrow, "DS_REPAY_ASSET_AC", this.dsList.getColumn(i, "DS_REPAY_ASSET_AC"))
        				break;

        			case "D":
        				var nrow = this.dsDelete.addRow();
        				this.dsDelete.setColumn(nrow, "CD_CORP", this.dsList.getColumn(i, "CD_CORP"));
        				this.dsDelete.setColumn(nrow, "CD_ACASSET", this.dsList.getColumn(i, "CD_ACASSET"));
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

        	if (this.gfnIsNull(this.dsSearch.getColumn(0, "CD_CORP"))) {
        		validate = false;
        		// Alert후 실행할 처리
        		this.fnVaidateCallback = function() {
        			this.ccfCD_CORP.form.CDTextBox.setFocus();
        		}
        		this.gfnAlert("법인코드를 입력하세요.", "fnVaidateCallback");
        		return false;
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

        this.fnBeforeUserDataSetParam = function(id, dsUserParam, nrow) {
        	if (id == "ccfCD_CORP") {
        		dsUserParam.setColumn(nrow, "ID_SABUN", this.AuthClient.ID_USER);
        		//dsUserParam.setColumn(nrow, "LEVLV_DEPT", this.FormInfo.TY_AUTH);
        		//dsUserParam.setColumn(nrow, "LEVCD_DEPT", this.FormInfo.TY_AUTH);
        	} else if (id == "ccfCD_ACASSET") {
        		if(this.gfnIsNull(this.dsSearch.getColumn(0, "CD_CORP"))){
        			this.gfnAlert("법인코드를 선택하세요.");
        			return false;
        		}

        		dsUserParam.setColumn(nrow, "CD_CORP", this.dsSearch.getColumn(0, "CD_CORP"));
        		dsUserParam.setColumn(nrow, "YN_CORP", "Y");
        	}
        	return true;
        };

        this.fnAfterCDTextChanged = function(id, codeFindData) {
        	if(id == "ccfCD_CORP") {
        		this.ccfCD_ACASSET.form.fnCodeFindClear();
        	}
        }

        /************************************************************************
         * 그리드 이벤트
         ************************************************************************/
        this.fnGrid_BeforeUserDataSetParam = function(id, dsUserParam, nrow) {
        	// 그리드에서 코드파인드 id는 그리드셋팅의 코드파인드 식별ID
        	if(id == "DHX_CFACNT_SLIP_AND_TRIAL1" || id == "DHX_BI_SEMOK" || id == "DHX_CFACNT_SLIP_AND_TRIAL3") {
        		dsUserParam.setColumn(nrow, "CD_CORP", this.AuthClient.CD_CORP);
        	}

        	return true;
        };
        /************************************************************************
         * 기타 이벤트
         ************************************************************************/
        /*
         *	조회 조건 변경시 초기화
         */
        // this.fnSearchInit = function(obj,e) {
        // 	if(e == null || (e.pretext != e.posttext)) {
        // 		// 폼상태 초기화
        // 		this.gfnSetFormStatus(this);
        // 		this.gfnGridClear(this.dxGrid);
        // 	}
        // };

        this.dsSearch_onvaluechanged = function(obj,e)
        {
        	if(e.oldvalue != e.newvalue) {
        		this.gfnSetFormStatus(this);	// 폼상태 초기화
        		this.gfnGridClear(this.dxGrid);
        	}
        };

        /************************************************************************
        * 기타 버튼 이벤트
        ************************************************************************/

        //자산세목관리
        this.fnAssetSeMok = function (obj,e)
        {
        	var objDs = this.dxGrid.getBindDataset();
        	if(!this.gfnGridIsRow(this.dxGrid)) {return false;}
        	var param = {};
        	param.CD_CORP    = objDs.getColumn(objDs.rowposition, "CD_CORP");
        	param.DS_CORP    = objDs.getColumn(objDs.rowposition, "DS_CORP");
        	param.CD_ACASSET = objDs.getColumn(objDs.rowposition, "CD_ACASSET");
        	param.DS_ACASSET = objDs.getColumn(objDs.rowposition, "DS_ACASSET");

        	this.gfnFormOpen(this.FormInfo.CD_MODULE, "DHN_ASSETSEMOK", "", param);
        };

        //상각율표관리
        this.fnRtDep = function (obj,e)
        {
        	var objDs = this.dxGrid.getBindDataset();
        	if(!this.gfnGridIsRow(this.dxGrid)) {return false;}

        	var param = {};

        	this.gfnFormOpen(this.FormInfo.CD_MODULE, "DHN_RTDEP", "", param);
        };

        //필수체크
        this.fnSaveValidation = function ()
        {
        	for(var i=0;i<this.dsList.rowcount;i++){
        		if(this.dsList.getCaseCount("CD_ACASSET == '" + this.dsList.getColumn(i, "CD_ACASSET") + "'") > 1){
        			this.gfnAlert("자산코드(은)는 중복될수 없습니다.");
        			return false;
        		}
        	}

        	return true;
        };
        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.form_onload,this);
            this.dsSearch.addEventHandler("onvaluechanged",this.dsSearch_onvaluechanged,this);
        };
        this.loadIncludeScript("DHN_ASSETINFO.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
