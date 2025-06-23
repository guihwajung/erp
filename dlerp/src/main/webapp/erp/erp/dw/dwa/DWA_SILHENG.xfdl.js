(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("DWA_SILHENG");
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
            obj._setContents("<ColumnInfo><Column id=\"TARGET\" type=\"STRING\" size=\"256\"/><Column id=\"SP\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"TARGET\">select</Col><Col id=\"SP\">DWAPR_Silheng_Select</Col></Row><Row><Col id=\"TARGET\">save</Col><Col id=\"SP\">DWAPR_SILHENG_SAVE</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsSearch", this);
            obj._setContents("<ColumnInfo><Column id=\"CD_SITE\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"CD_SITE\"/></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsCD_RP", this);
            obj._setContents("<ColumnInfo><Column id=\"CD_RP\" type=\"STRING\" size=\"256\"/><Column id=\"NM_RP\" type=\"STRING\" size=\"256\"/><Column id=\"NO_CSCT\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"CD_RP\"/><Col id=\"NM_RP\"/><Col id=\"NO_CSCT\"/></Row></Rows>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Div("divSearch","0.0","10.0",null,"46.0","0",null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_cssclass("div_SEARCH_Bg");
            this.addChild(obj.name, obj);

            obj = new Static("sta00","0.0","10.0","92.0","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("1");
            obj.set_text("현장코드");
            obj.set_cssclass("sta_WF_SchLabelE");
            this.divSearch.addChild(obj.name, obj);

            obj = new Div("ccfCD_SITE","sta00:0.0","10.0","300","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.getSetter("CodeFindName").set("DZX_CFSITE");
            obj.getSetter("CDTextWidth").set("70");
            obj.set_taborder("0");
            obj.set_url("cmm::cmmCodeFind.xfdl");
            this.divSearch.addChild(obj.name, obj);

            obj = new Div("ccfCD_RP","ccfCD_SITE:0.0","10.0","250","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.getSetter("CDTextWidth").set("80");
            obj.set_taborder("2");
            obj.set_url("cmm::cmmCodeFind.xfdl");
            obj.set_visible("false");
            this.divSearch.addChild(obj.name, obj);

            obj = new CheckBox("chkYN_DOKUB","ccfCD_SITE:0.0","10.0","50","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("8");
            obj.set_text("도급");
            obj.set_truevalue("Y");
            obj.set_falsevalue("N");
            obj.set_visible("true");
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
            obj = new BindItem("item0","divSearch.form.ccfCD_RP.form.CDTextBox","value","dsCD_RP","CD_RP");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item1","divSearch.form.ccfCD_RP.form.DSTextBox","value","dsCD_RP","NM_RP");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item2","divSearch.form.ccfCD_SITE.form.CDTextBox","value","dsSearch","CD_SITE");
            this.addChild(obj.name, obj);
            obj.bind();
            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {
            this._addPreloadList("fdl","cmm::cmmCodeFind.xfdl");
        };
        
        // User Script
        this.registerScript("DWA_SILHENG.xfdl", function() {
        this.objApp = this.gfnGetApplication();

        this.DWA_SILHENG_onload = function(obj,e)
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

        	this.divSearch_chkYN_DOKUB_onchanged(this.divSearch.form.chkYN_DOKUB, {postvalue:this.divSearch.form.chkYN_DOKUB.value});
        };

        /************************************************************************
         * 버튼 설정 : 화면(Tab) 전환시 마다 호출
         * 서브버튼 사용 및 공통버튼 강제 제어시 여기서 처리
         ************************************************************************/
        this.fnSetButton = function() {
        	// Select, Add, Del, Save, Excel, Print
        	// SubSelect, SubAdd, SubDel, SuubSave, SubExcel
        	this.FormBtns.Add.set_enable(false);
        	this.FormBtns.Del.set_enable(false);
        }

        /************************************************************************
         * 확장 버튼 : 화면별 버튼 설정 ID, function 연결 (화면버튼관리)
         ************************************************************************/
        this.fnSetExtendButton = function() {
        	this.btn1 = this.gfnFormButtonAdd("btnCostTuja", "fnCostTuja");
        	this.btn2 = this.gfnFormButtonAdd("btnBatchRp", "fnBatchRp");
        };

        /************************************************************************
         * 변수 선언
         ************************************************************************/
        this.fnSetVariable = function() {
        	this.ccfCD_SITE = this.divSearch.form.ccfCD_SITE;
        	this.ccfCD_RP = this.divSearch.form.ccfCD_RP;
        	this.dxGrid = this.divData.form.objGrid;
        };

        /************************************************************************
         * 이벤트 설정
         ************************************************************************/
        this.fnSetEvent = function() {
        	this.ccfCD_RP.CodeFindName = "DWX_CFRP";
        	this.ccfCD_RP.BeforeUserDataSetParam = "fnBeforeUserDataSetParam";

        	this.ccfCD_RP.AfterCDTextChanged = "ccfCD_RP_AfterCDTextChanged";

        	this.gfnGridInit(this.dxGrid, this.dsList, "DW", "DWA_SILHENG", "DS_COST", "GR_COST");
        	this.dxGrid.BeforeUserDataSetParam = "fnGrid_BeforuserDataSetParam";

        	this.dxGrid.addEventHandler("onselectchanged", this.dxGrid_RowCellChanged, this);
        }

        /************************************************************************
         * 파라미터 설정
         ************************************************************************/
        this.fnSetParameter = function() {

        	this.dsSelect = new Dataset();
        	this.dsSelect.addColumn("CD_SITE", "string");

        	this.dsSave = new Dataset();
        	this.dsSave.addColumn("TY_WRK", "string");
        	this.dsSave.addColumn("ID_USER", "string");
        	this.dsSave.addColumn("CD_SITE", "string");
        	this.dsSave.addColumn("CD_COST", "string");
        	this.dsSave.addColumn("CD_RP", "string");
        	this.dsSave.addColumn("CD_STD", "string");
        	this.dsSave.addColumn("RM_BIGO", "string");
        	this.dsSave.addColumn("CD_GBIMOK", "string");
        	this.dsSave.addColumn("YN_COST", "string");
        	this.dsSave.addColumn("DS_UNIT", "string");

        }

        /************************************************************************
         * 컨트롤 이벤트
         ************************************************************************/
         /*
          *	조회 버튼
          */
        this.fnSelect = function() {
        	if(!this.fnValidate()) return;

        	this.dsSelect.clearData();
        	this.dsSelect.addRow();
        	this.dsSelect.setColumn(0, "CD_SITE", this.dsSearch.getColumn(0, "CD_SITE"));

        	var strSvcId    = "select";
        	var strSvcType  = "grid";
        	var inProc		= "_dsProc";
        	var inData      = "select=dsSelect";
        	var outData     = "dsList=select0";
        	var strArg      = "";
        	var callBackFnc = "fnCallback";

        	this.gfnTransaction( strSvcId , 	// transaction을 구분하기 위한 svc id값
        						strSvcType , 	// trabsaction을 요청할 구분
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
        }

        /*
         *	삭제 버튼
         */
        this.fnDel = function() {
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

        		switch(flag) {
        			case "I":
        			case "U":
        			case "D":
        				var nrow = this.dsSave.addRow();
        				this.dsSave.setColumn(nrow, "TY_WRK", flag);
        				this.dsSave.setColumn(nrow, "ID_USER", this.AuthClient.ID_USER);
        				this.dsSave.setColumn(nrow, "CD_SITE", this.dsSearch.getColumn(0, "CD_SITE"));
        				this.dsSave.setColumn(nrow, "CD_COST", this.dsList.getColumn(i, "CD_COST"));
        				this.dsSave.setColumn(nrow, "CD_RP", this.dsList.getColumn(i, "CD_RP"));
        				this.dsSave.setColumn(nrow, "CD_STD", this.dsList.getColumn(i, "CD_STD"));
        				this.dsSave.setColumn(nrow, "RM_BIGO", this.dsList.getColumn(i, "RM_BIGO"));
        				this.dsSave.setColumn(nrow, "CD_GBIMOK", this.dsList.getColumn(i, "CD_GBIMOK"));
        				this.dsSave.setColumn(nrow, "YN_COST", this.dsList.getColumn(i, "YN_COST"));
        				this.dsSave.setColumn(nrow, "DS_UNIT", this.dsList.getColumn(i, "DS_UNIT"));
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
        this.fnValidate = function() {
        	if (this.gfnIsNull(this.dsSearch.getColumn(0, "CD_SITE"))) {
        		this.fnVaidateCallback = function() {
        			this.ccfCD_SITE.form.CDTextBox.setFocus();
        		}
        		this.gfnAlert("현장코드는 필수입력 값입니다.");
        		return false;
        	}

        	return true;
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
        		this._gfnGridTreeOpen(this.dxGrid, 1);
        	}else if(svcID == "save") {
        		this.gfnGridAfterSelect(this.dxGrid);

        		this.FormBtns.Select.click();
        	}
        }

        /************************************************************************
         * 코드파인드 이벤트
         ************************************************************************/
        //코드파인드의 파라미터 값을 넘겨줄때 사용하는 함수
        this.fnBeforeUserDataSetParam = function(id, dsUserParam, nrow) {

        	if (id == "ccfCD_RP") {
        		dsUserParam.setColumn(nrow, "CD_SITE", this.dsSearch.getColumn(0, "CD_SITE"));
        	}

        	return true;
        }

        this.ccfCD_RP_AfterCDTextChanged = function(id, codeFindData) {
        	// 코드,명칭 외 추가 컬럼 처리
        	var arr = codeFindData; //this.ccfCD_DEPT_ORG.form.SelectedData; 둘다 사용가능
        	var ds_cdRp = "";
        	var ds_nmRp = "";
        	var ds_noCsct = "";

        	if (arr.length > 0) {
        		ds_cdRp = arr[0]["CD_RP"];
        		ds_nmRp = arr[0]["NM_RP"];
        		ds_noCsct = arr[0]["NO_CSCT"];
        	}

        	// 선택된 row들의 인덱스를 배열형태로 가지고있다
        	var selRows = this.dxGrid.getSelectedDatasetRows();

        	// 이벤트가 걸려서 속도가 느려지기때문에 이벤트 정지시키고 데이터 셋팅함
        	this.dsList.set_enableevent(false);
        	for(var i = 0; i < selRows.length; i++)
        	{
        		var nRow = selRows[i];

        		if(this.dsList.getColumn(nRow, "YN_COST") == "Y"){
        			this.dsList.setColumn(nRow, this.ucFlag, "U");	// 이벤트가 정지되어있기때문에 flag상태가 변하지 않아 강제 셋팅함

        			this.dsList.setColumn(nRow, "CD_RP", ds_cdRp);		// 코드
        			this.dsList.setColumn(nRow, "DS_RP", ds_nmRp);		// 명칭
        			this.dsList.setColumn(nRow, "NO_RP", ds_noCsct);	// 공구

        		}
        	}
        	this.gfnSetFormStatus(this, "U");	// 화면 form상태로 변하지 않아 강제 셋팅함
        	this.dsList.set_enableevent(true);
        }

        /************************************************************************
         * 그리드 이벤트
         ************************************************************************/
         this.fnGrid_BeforuserDataSetParam=function(id, dsUserParam, nrow){
        	if(id == "DWX_CFRP"){
        		dsUserParam.setColumn(nrow, "CD_SITE", this.dsSearch.getColumn(0, "CD_SITE"));
        	}
        	else if(id == "DQX_CBSITEMALL")
        	{
        		dsUserParam.setColumn(nrow, "CD_SITE", this.dsSearch.getColumn(0, "CD_SITE"));
        	}
        	return true;
        };

        this.dxGrid_RowCellChanged = function(obj,e)
        {
        	var colnm = this.gfnGridGetBindColumnNameByIndex(this.dxGrid, e.cell);	// 컬럼 인덱스로 컬럼명 가져오기

        	var rows = obj.getSelectedDatasetRows();
        	var sum = 0;
        	var bRet = "";
        	for(var i = 0; i < rows.length; i++) {
        		//var am = this.dsList.getColumn(rows[i], e.selectstartcol);
        		var am = this.dsList.getColumn(rows[i], colnm);

        		//bRet = nexacro.isNumeric(am);
        		bRet = isNaN(am); // 문자:true, 숫자:false
        		//alert(am+":::"+bRet);
        		if(bRet){
        			break;
        		}

        		if(!this.gfnIsNull(am)) {
        			sum += am;
        		}
        	}

        	var colDS_COST = this.dxGrid.getBindCellIndex("body", "DS_COST");

        	if(!bRet){	// 숫자면 합계표시, 문자면 null
        		this.dxGrid.setCellProperty("summ", colDS_COST, "text",  "선택합계=" + this.gfnAppendComma(sum));
        	}else{
        		this.dxGrid.setCellProperty("summ", colDS_COST, "text", "");
        	}
        }
        /************************************************************************
         * 기타 이벤트
         ************************************************************************/
        /*
         *	조회 조건 변경시 초기화
         */
        this.dsSearch_onvaluechanged = function(obj,e)
        {
        	if(e.oldvalue != e.newvalue) {
        		this.gfnSetFormStatus(this);	// 폼상태 초기화
        		this.gfnGridClear(this.dxGrid);
        	}
        };

        this.fnCostTuja = function(obj, e){

        	if(!this.gfnGridIsRow(this.dxGrid)){return false;}
        	var param = {};
        	param.CD_SITE = this.dsSearch.getColumn(0, "CD_SITE");
        	param.DS_SITE = this.ccfCD_SITE.form.DSTextBox.value;
        	param.CD_COST = this.dsList.getColumn(this.dsList.rowposition, "CD_COST");
        	param.CD_DKCOST = this.dsList.getColumn(this.dsList.rowposition, "CD_DKCOST");
        	param.DS_COST = this.dsList.getColumn(this.dsList.rowposition, "DS_COST");
        	param.SZ_SIZE = this.dsList.getColumn(this.dsList.rowposition, "SZ_SIZE");
        	param.DS_UNIT = this.dsList.getColumn(this.dsList.rowposition, "DS_UNIT");

        	this.gfnFormOpen(this.FormInfo.CD_MODULE, "DWX_COSTTUJA", "", param);
        };

        this.fnBatchRp = function(obj, e){

        	if(!this.gfnGridIsRow(this.dxGrid)){return false;}

        	// 발주계획 코드파인드 팝업
        	this.ccfCD_RP.form.BtnSearch.click();
        };

        // 도급 체크박스
        this.divSearch_chkYN_DOKUB_onchanged = function(obj,e)
        {
        	var QN_TT_DESIGN_Index = this.dxGrid.getBindCellIndex("body", "QN_TT_DESIGN");
        	var UP_TT_DESIGN_Index = this.dxGrid.getBindCellIndex("body", "UP_TT_DESIGN");
        	var AM_TT_DESIGN_Index = this.dxGrid.getBindCellIndex("body", "AM_TT_DESIGN");
        	var QN_TT_DOKUB_Index = this.dxGrid.getBindCellIndex("body", "QN_TT_DOKUB");
        	var UP_TT_DOKUB_Index = this.dxGrid.getBindCellIndex("body", "UP_TT_DOKUB");
        	var AM_TT_DOKUB_Index = this.dxGrid.getBindCellIndex("body", "AM_TT_DOKUB");

        	if(obj.isChecked())
        	{
        		this.dxGrid.setRealColSize("body", QN_TT_DESIGN_Index, 0);
        		this.dxGrid.setRealColSize("body", UP_TT_DESIGN_Index, 0);
        		this.dxGrid.setRealColSize("body", AM_TT_DESIGN_Index, 0);
        		this.dxGrid.setRealColSize("body", QN_TT_DOKUB_Index, 80);
        		this.dxGrid.setRealColSize("body", UP_TT_DOKUB_Index, 80);
        		this.dxGrid.setRealColSize("body", AM_TT_DOKUB_Index, 100);
        	}
        	else
        	{
        		this.dxGrid.setRealColSize("body", QN_TT_DESIGN_Index, 0);
        		this.dxGrid.setRealColSize("body", UP_TT_DESIGN_Index, 0);
        		this.dxGrid.setRealColSize("body", AM_TT_DESIGN_Index, 0);
        		this.dxGrid.setRealColSize("body", QN_TT_DOKUB_Index, 0);
        		this.dxGrid.setRealColSize("body", UP_TT_DOKUB_Index, 0);
        		this.dxGrid.setRealColSize("body", AM_TT_DOKUB_Index, 0);
        	}
        };

        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.DWA_SILHENG_onload,this);
            this.divSearch.form.chkYN_DOKUB.addEventHandler("onchanged",this.divSearch_chkYN_DOKUB_onchanged,this);
            this.dsSearch.addEventHandler("onvaluechanged",this.dsSearch_onvaluechanged,this);
        };
        this.loadIncludeScript("DWA_SILHENG.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
