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
            this.set_titletext("자산세목관리");
            if (Form == this.constructor)
            {
                this._setFormPosition(1400,720);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("dsList", this);
            obj._setContents("");
            this.addChild(obj.name, obj);


            obj = new Dataset("_dsProc", this);
            obj._setContents("<ColumnInfo><Column id=\"TARGET\" type=\"STRING\" size=\"256\"/><Column id=\"SP\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"TARGET\">select</Col><Col id=\"SP\">DHNPR_ASSETSEMOK_SELECT</Col></Row><Row><Col id=\"TARGET\">insert</Col><Col id=\"SP\">DHNPR_ASSETSEMOK_INSERT</Col></Row><Row><Col id=\"TARGET\">update</Col><Col id=\"SP\">DHNPR_ASSETSEMOK_UPDATE</Col></Row><Row><Col id=\"TARGET\">delete</Col><Col id=\"SP\">DHNPR_ASSETSEMOK_DELETE</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsSearch", this);
            obj._setContents("<ColumnInfo><Column id=\"CD_CORP\" type=\"STRING\" size=\"256\"/><Column id=\"DS_CORP\" type=\"STRING\" size=\"256\"/><Column id=\"CD_ACASSET\" type=\"STRING\" size=\"256\"/><Column id=\"DS_ACASSET\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"CD_CORP\"/><Col id=\"CD_ACASSET\"/></Row></Rows>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Div("divSearch","0","10.0",null,"46","0",null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_cssclass("div_SEARCH_Bg");
            obj.set_formscrolltype("none");
            obj.set_text("");
            this.addChild(obj.name, obj);

            obj = new Static("staCD_CORP","0.0","10.0","92.0","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("1");
            obj.set_text("법인코드");
            obj.set_cssclass("sta_WF_SchLabelE");
            this.divSearch.addChild(obj.name, obj);

            obj = new Div("ccfCD_CORP","staCD_CORP:0.0","10.0","250","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.getSetter("CDTextWidth").set("50");
            obj.set_taborder("0");
            obj.set_url("cmm::cmmCodeFind.xfdl");
            obj.set_text("");
            obj.getSetter("CodeFindName").set("DHX_CFCORP");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("staCD_ACASSET","ccfCD_CORP:0.0","10.0","92.0","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("2");
            obj.set_text("자산코드");
            obj.set_cssclass("sta_WF_SchLabel");
            this.divSearch.addChild(obj.name, obj);

            obj = new Div("ccfCD_ACASSET","staCD_ACASSET:0.0","10.0","250","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.getSetter("CDTextWidth").set("70");
            obj.set_taborder("3");
            obj.set_url("cmm::cmmCodeFind.xfdl");
            obj.set_text("");
            obj.getSetter("CodeFindName").set("DHX_CFASSETINFO");
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

            obj = new Radio("rdoYN_DEP","75","-34","200","20",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("1");
            obj.set_innerdataset("dsYN_DEP");
            obj.set_datacolumn("VALUE");
            obj.set_codecolumn("CODE");
            obj.set_fittocontents("width");
            obj.set_direction("vertical");
            obj.set_text("");
            obj.set_value("");
            obj.set_index("-1");
            this.divData.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this
            obj = new Layout("default","",this._adjust_width,this._adjust_height,this,function(p){});
            obj.set_stepcount("0");
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
        this.registerScript("DHN_ASSETSEMOK.xfdl", function() {
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


        	//타화면에서 호출되었을 경우
        	if(!this.gfnIsNull(this.getOwnerFrame().CD_ACASSET)){

        		this.dsSearch.setColumn(0, "CD_CORP", this.getOwnerFrame().CD_CORP);
        		this.dsSearch.setColumn(0, "DS_CORP", this.getOwnerFrame().DS_CORP);

        		this.dsSearch.setColumn(0, "CD_ACASSET", this.getOwnerFrame().CD_ACASSET);
        		this.dsSearch.setColumn(0, "DS_ACASSET", this.getOwnerFrame().DS_ACASSET);

        		this.FormBtns.Select.click();
        	}else{
        		this.dsSearch.setColumn(0, "CD_CORP", this.AuthClient.CD_CORP);
        		this.dsSearch.setColumn(0, "DS_CORP", this.AuthClient.DS_CORP);
        	}

        	if (nexacro.toNumber(this.FormInfo.GR_SEARCH) > 1) {
         		this.ccfCD_CORP.set_enable(false);
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

        	//조회
        	this.ccfCD_CORP = this.divSearch.form.ccfCD_CORP;
        	this.ccfCD_ACASSET = this.divSearch.form.ccfCD_ACASSET;

        	//그리드
        	this.dxGrid = this.divData.form.objGrid;
        };

        /************************************************************************
         * 이벤트 설정
         ************************************************************************/
        this.fnSetEvent = function() {

        	// 그리드 초기화
        	this.gfnGridInit(this.dxGrid, this.dsList, "DH", "DHN_ASSETSEMOK");

        	this.dxGrid.set_selecttype("cell");
        	this.dxGrid.BeforeUserDataSetParam = "fnGrid_BeforeUserDataSetParam";

        	this.ccfCD_CORP.BeforeUserDataSetParam = "fnBeforeUserDataSetParam";
        	this.ccfCD_CORP.AfterCDTextChanged = "fnAfterCDTextChanged";

        	this.ccfCD_ACASSET.BeforeUserDataSetParam = "fnBeforeUserDataSetParam";
        	this.ccfCD_ACASSET.AfterCDTextChanged = "fnAfterCDTextChanged";

        }

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
        	this.dsInsert.addColumn("CD_ASSETSEMOK", "string");
        	this.dsInsert.addColumn("DS_ASSETSEMOK", "string");
        	this.dsInsert.addColumn("ID_INSERT", "string");

        	this.dsUpdate = new Dataset();
        	this.dsUpdate.addColumn("CD_CORP", "string");
        	this.dsUpdate.addColumn("CD_ACASSET", "string");
        	this.dsUpdate.addColumn("CD_ASSETSEMOK", "string");
        	this.dsUpdate.addColumn("DS_ASSETSEMOK", "string");
        	this.dsUpdate.addColumn("ID_UPDATE", "string");

        	this.dsDelete = new Dataset();
        	this.dsDelete.addColumn("CD_CORP", "string");
        	this.dsDelete.addColumn("CD_ACASSET", "string");
        	this.dsDelete.addColumn("CD_ASSETSEMOK", "string");

        }

        /************************************************************************
         * 컨트롤 이벤트
         ************************************************************************/
        /*
         *	조회 버튼
         */
        this.fnSelect = function() {

        	if (!this.fnSelectValidate()) return;

        	this.gfnGridBeforeSelect(this.dxGrid);

        	this.dsSelect.clearData();
        	this.dsSelect.addRow();

        	this.dsSelect.setColumn(0, "CD_CORP"   , this.dsSearch.getColumn(0, "CD_CORP"));
        	this.dsSelect.setColumn(0, "CD_ACASSET", this.dsSearch.getColumn(0, "CD_ACASSET"));

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

        	var nrow = this.gfnGridAdd(this.dxGrid);

        	this.dsList.set_enableevent(false);
        	this.dsList.setColumn(nrow, "CD_CORP"   	, this.dsSearch.getColumn(0, "CD_CORP"));
        	this.dsList.setColumn(nrow, "DS_CORP"   	, this.dsSearch.getColumn(0, "DS_CORP"));
        	this.dsList.setColumn(nrow, "CD_ACASSET"	, this.dsSearch.getColumn(0, "CD_ACASSET"));
        	this.dsList.setColumn(nrow, "DS_ACASSET"	, this.dsSearch.getColumn(0, "DS_ACASSET"));
        	this.dsList.setColumn(nrow, "CD_ASSETSEMOK"	, "");
        	this.dsList.setColumn(nrow, "DS_ASSETSEMOK"	, "");
        	this.dsList.set_enableevent(true);
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
        				this.dsInsert.setColumn(nrow, "CD_CORP", this.dsList.getColumn(i, "CD_CORP"));
        				this.dsInsert.setColumn(nrow, "CD_ACASSET", this.dsList.getColumn(i, "CD_ACASSET"));
        				this.dsInsert.setColumn(nrow, "CD_ASSETSEMOK", this.dsList.getColumn(i, "CD_ASSETSEMOK"));
        				this.dsInsert.setColumn(nrow, "DS_ASSETSEMOK", this.dsList.getColumn(i, "DS_ASSETSEMOK"));
        				this.dsInsert.setColumn(nrow, "ID_INSERT", this.AuthClient.ID_USER);
        				break;

        			case "U":
        				var nrow = this.dsUpdate.addRow();
        				this.dsUpdate.setColumn(nrow, "CD_CORP", this.dsList.getColumn(i, "CD_CORP"));
        				this.dsUpdate.setColumn(nrow, "CD_ACASSET", this.dsList.getColumn(i, "CD_ACASSET"));
        				this.dsUpdate.setColumn(nrow, "CD_ASSETSEMOK", this.dsList.getColumn(i, "CD_ASSETSEMOK"));
        				this.dsUpdate.setColumn(nrow, "DS_ASSETSEMOK", this.dsList.getColumn(i, "DS_ASSETSEMOK"));
        				this.dsUpdate.setColumn(nrow, "ID_UPDATE", this.AuthClient.ID_USER);
        				break;

        			case "D":
        				var nrow = this.dsDelete.addRow();
        				this.dsDelete.setColumn(nrow, "CD_CORP", this.dsList.getColumn(i, "CD_CORP"));
        				this.dsDelete.setColumn(nrow, "CD_ACASSET", this.dsList.getColumn(i, "CD_ACASSET"));
        				this.dsDelete.setColumn(nrow, "CD_ASSETSEMOK", this.dsList.getColumn(i, "CD_ASSETSEMOK"));
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

        	if(this.gfnIsNull(this.dsSearch.getColumn(0, "CD_CORP"))) {
        		this.gfnAlert("법인코드는 반드시 입력하셔야 합니다.");
        		this.ccfCD_CORP.form.CDTextBox.setFocus();
        		return false;
        	}

        	return true;
        }


        /************************************************************************
         * 콜백 이벤트
         ************************************************************************/
        this.fnCallback = function(svcID, errorCode, errorMsg) {

        	if(svcID == "select") {

        		this.gfnGridAfterSelect(this.dxGrid);

        	} else if(svcID == "save") {

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
        	}else if(id == "ccfCD_ACASSET") {
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
        this.fnGrid_EnterCell = function(obj, row, cell) {
        	return true;
        }

        this.fnGrid_BeforeUserDataSetParam = function(id, dsUserParam, nrow) {
        	//자산코드
        	if(id == "DHX_CFASSETINFO") {
        		dsUserParam.setColumn(nrow, "CD_CORP", this.dsList.getColumn(this.dsList.rowposition, "CD_CORP"));
        		dsUserParam.setColumn(nrow, "YN_CORP", "Y");
        	}

        	return true;
        };


        /************************************************************************
         * 기타 이벤트
         ************************************************************************/

        this.fnSetCombo = function(obj,e) {

        };

        /*
         *	조회 조건 변경시 초기화
         */
        this.fnSearchInit = function(obj,e) {

        	if(e == null || (e.pretext != e.posttext)) {
        		// 폼상태 초기화
        		this.gfnSetFormStatus(this);
        		this.gfnGridClear(this.dxGrid);
        	}
        };

        this.dsSearch_onvaluechanged = function(obj,e) {
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
            this.divSearch.form.ccfCD_CORP.addEventHandler("onclick",this.Common_onclick,this);
            this.divSearch.form.ccfCD_ACASSET.addEventHandler("onclick",this.Common_onclick,this);
            this.divData.form.rdoYN_DEP.addEventHandler("onitemchanged",this.rdo00_onitemchanged,this);
            this.dsSearch.addEventHandler("onvaluechanged",this.dsSearch_onvaluechanged,this);
        };
        this.loadIncludeScript("DHN_ASSETSEMOK.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
