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
            obj._setContents("<ColumnInfo><Column id=\"TARGET\" type=\"STRING\" size=\"256\"/><Column id=\"SP\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"TARGET\">select</Col><Col id=\"SP\">DZZPR_CORP_SELECT</Col></Row><Row><Col id=\"TARGET\">insert</Col><Col id=\"SP\">DZZPR_CORP_INSERT</Col></Row><Row><Col id=\"TARGET\">update</Col><Col id=\"SP\">DZZPR_CORP_UPDATE</Col></Row><Row><Col id=\"TARGET\">delete</Col><Col id=\"SP\">DZZPR_CORP_DELETE</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsTY_GUBUN", this);
            obj._setContents("<ColumnInfo><Column id=\"CODE\" type=\"STRING\" size=\"256\"/><Column id=\"VALUE\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"CODE\">0</Col><Col id=\"VALUE\">법인코드</Col></Row><Row><Col id=\"CODE\">1</Col><Col id=\"VALUE\">법인명</Col></Row></Rows>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Div("divSearch","0","0",null,"46","0",null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_cssclass("div_SEARCH_Bg");
            this.addChild(obj.name, obj);

            obj = new Radio("rdoTY_GUBUN","30","10","150","24",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("1");
            obj.set_innerdataset("dsTY_GUBUN");
            obj.set_datacolumn("VALUE");
            obj.set_codecolumn("CODE");
            obj.set_direction("vertical");
            obj.set_fittocontents("width");
            obj.set_text("사업자등록번호");
            obj.set_value("1");
            obj.set_index("0");
            this.divSearch.addChild(obj.name, obj);

            obj = new Edit("txtNO_SEARCH","rdoTY_GUBUN:0","10","140","24",null,null,null,null,null,null,this.divSearch.form);
            obj.set_value("");
            obj.set_taborder("1");
            this.divSearch.addChild(obj.name, obj);

            obj = new Div("divData","0","divSearch:20",null,null,"0","0",null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_cssclass("div_DATA_Bg");
            this.addChild(obj.name, obj);

            obj = new Grid("objGrid","0","0",null,null,"0","0",null,null,null,null,this.divData.form);
            obj.set_taborder("0");
            obj.set_autofittype("col");
            obj._setContents("");
            this.divData.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this
            obj = new Layout("default","",this._adjust_width,this._adjust_height,this,function(p){});
            this.addLayout(obj.name, obj);
            
            // BindItem Information

            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script
        this.registerScript("DZU_CORP.xfdl", function() {
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

        	this.FormBtns.Select.click();

        };

        /************************************************************************
         * 버튼 설정
         ************************************************************************/
        this.fnSetButton = function() {
        // 	var id_group = this.FormInfo.ID_GROUP;
        // 	var gr_search = this.FormInfo.GR_SEARCH;
        // 	var cd_role = this.FormInfo.CD_ROLE;
        };

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
        	this.dxGrid = this.divData.form.objGrid;

        };

        /************************************************************************
         * 이벤트 설정
         ************************************************************************/
        this.fnSetEvent = function() {
        	this.gfnGridInit(this.dxGrid, this.dsList, "DZ", "DZU_CORP");

        	this.dxGrid.ExpandUp = 'fnGrid_ExpandUp';
        };

        /************************************************************************
         * 파라미터 설정
         ************************************************************************/
        this.fnSetParameter = function() {

        	this.dsSelect = new Dataset();
        	this.dsSelect.addColumn("TY_GUBUN", "string");
        	this.dsSelect.addColumn("NO_SEARCH", "string");

        	this.dsInsert = new Dataset();
        	this.dsInsert.addColumn("CD_CORP", "string");
        	this.dsInsert.addColumn("NO_CORP", "string");
        	this.dsInsert.addColumn("DS_CORP", "string");
        	this.dsInsert.addColumn("CD_BUMUN", "string");
        	this.dsInsert.addColumn("CD_GROUP", "string");
        	this.dsInsert.addColumn("DS_DESC", "string");
        	this.dsInsert.addColumn("ID_DOORAY", "string");
        	this.dsInsert.addColumn("DS_MAILDOMAIN", "string");
        	this.dsInsert.addColumn("ID_USER", "string");
        	this.dsInsert.addColumn("ID_DOORAY_DEPT", "string");

        	this.dsUpdate = new Dataset();
        	this.dsUpdate.addColumn("CD_CORP", "string");
        	this.dsUpdate.addColumn("NO_CORP", "string");
        	this.dsUpdate.addColumn("DS_CORP", "string");
        	this.dsUpdate.addColumn("CD_BUMUN", "string");
        	this.dsUpdate.addColumn("CD_GROUP", "string");
        	this.dsUpdate.addColumn("DS_DESC", "string");
        	this.dsUpdate.addColumn("ID_DOORAY", "string");
        	this.dsUpdate.addColumn("DS_MAILDOMAIN", "string");
        	this.dsUpdate.addColumn("ID_UPDATE", "string");
        	this.dsUpdate.addColumn("ID_DOORAY_DEPT", "string");

        	this.dsDelete = new Dataset();
        	this.dsDelete.addColumn("CD_CORP", "string");

        };

        /************************************************************************
         * 컨트롤 이벤트
         ************************************************************************/
         /*
          *	조회 버튼
          */
        this.fnSelect = function() {

        	this.gfnGridBeforeSelect(this.dxGrid);

        	this.dsSelect.clearData();
        	this.dsSelect.addRow();
        	this.dsSelect.setColumn(0, "TY_GUBUN", this.divSearch.form.rdoTY_GUBUN.value);
        	this.dsSelect.setColumn(0, "NO_SEARCH", this.divSearch.form.txtNO_SEARCH.value);

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
        				this.dsInsert.setColumn(nrow, "CD_CORP", this.dsList.getColumn(i, "CD_CORP"));
        				this.dsInsert.setColumn(nrow, "NO_CORP", this.dsList.getColumn(i, "NO_CORP").replace(/-/g, ''));
        				this.dsInsert.setColumn(nrow, "DS_CORP", this.dsList.getColumn(i, "DS_CORP"));
        				this.dsInsert.setColumn(nrow, "CD_BUMUN", this.dsList.getColumn(i, "CD_BUMUN"));
        				this.dsInsert.setColumn(nrow, "CD_GROUP", this.dsList.getColumn(i, "CD_GROUP"));
        				this.dsInsert.setColumn(nrow, "DS_DESC", this.dsList.getColumn(i, "DS_DESC"));
        				this.dsInsert.setColumn(nrow, "ID_DOORAY", this.dsList.getColumn(i, "ID_DOORAY"));
        				this.dsInsert.setColumn(nrow, "ID_DOORAY_DEPT", this.dsList.getColumn(i, "ID_DOORAY_DEPT"));
        				this.dsInsert.setColumn(nrow, "DS_MAILDOMAIN", this.dsList.getColumn(i, "DS_MAILDOMAIN"));
        				this.dsInsert.setColumn(nrow, "ID_USER", this.AuthClient.ID_USER);
        				break;

        			case "U":
        				var nrow = this.dsUpdate.addRow();
        				this.dsUpdate.setColumn(nrow, "CD_CORP", this.dsList.getColumn(i, "CD_CORP"));
        				this.dsUpdate.setColumn(nrow, "NO_CORP", this.dsList.getColumn(i, "NO_CORP").replace(/-/g, ''));
        				this.dsUpdate.setColumn(nrow, "DS_CORP", this.dsList.getColumn(i, "DS_CORP"));
        				this.dsUpdate.setColumn(nrow, "CD_BUMUN", this.dsList.getColumn(i, "CD_BUMUN"));
        				this.dsUpdate.setColumn(nrow, "CD_GROUP", this.dsList.getColumn(i, "CD_GROUP"));
        				this.dsUpdate.setColumn(nrow, "DS_DESC", this.dsList.getColumn(i, "DS_DESC"));
        				this.dsUpdate.setColumn(nrow, "ID_DOORAY", this.dsList.getColumn(i, "ID_DOORAY"));
        				this.dsUpdate.setColumn(nrow, "ID_DOORAY_DEPT", this.dsList.getColumn(i, "ID_DOORAY_DEPT"));
        				this.dsUpdate.setColumn(nrow, "DS_MAILDOMAIN", this.dsList.getColumn(i, "DS_MAILDOMAIN"));
        				this.dsUpdate.setColumn(nrow, "ID_UPDATE", this.AuthClient.ID_USER);
        				break;

        			case "D":
        				var nrow = this.dsDelete.addRow();
        				this.dsDelete.setColumn(nrow, "CD_CORP", this.dsList.getColumn(i, "CD_CORP"));
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
        this.fnGrid_ExpandUp = function(obj, e)
        {
        	var sColumn = this.gfnGridGetBindColumnNameByIndex(obj, e.cell);
        	if (sColumn == 'ID_DOORAY')
        	{
        		var sPopupId = 'organizations_popup';
        		var sUrl = 'dzu::DZU_ORGANIZATIONS.xfdl';
        		var oArg = {};
        		var oOption = {title : '조직목록'};
        		this.gfnOpenPopup( sPopupId, sUrl, oArg, function(svcId, oRtns) {
        			if (oRtns)
        			{
        				var ds = obj.getBindDataset();
        				if (ds.findRowAsNF(sColumn, oRtns) > -1)
        				{
        					this.gfnAlert('이미 사용중인 ID 입니다.');
        				}
        				else
        				{
        					var jsonObject = JSON.parse(oRtns);
        					ds.setColumn(ds.rowposition, 'ID_DOORAY', jsonObject.organizations_id);
        					ds.setColumn(ds.rowposition, 'ID_DOORAY_DEPT', jsonObject.departments_id);
        				}
        			}
        		}, oOption );
        	}
        	else if (sColumn == 'DS_MAILDOMAIN')
        	{
        		var sPopupId = 'domains_popup';
        		var sUrl = 'dzu::DZU_ORGANIZATIONS_DOMAINS.xfdl';
        		var oArg = {};
        		var oOption = {title : '도메인목록'};
        		this.gfnOpenPopup( sPopupId, sUrl, oArg, function(svcId, oRtns) {
        			if (oRtns)
        			{
        				var ds = obj.getBindDataset();
        				if (ds.findRowAsNF(sColumn, oRtns) > -1)
        				{
        					this.gfnAlert('이미 사용중인 도메인 입니다.');
        				}
        				else
        				{
        					ds.setColumn(ds.rowposition, sColumn, oRtns);
        				}
        			}
        		}, oOption );
        	}
        };
        /************************************************************************
         * 기타 이벤트
         ************************************************************************/
        /*
         *	조회 조건 변경시 초기화
         */
        this.fnSearchInit = function(obj,e) {
        	if(e == null || (e.pretext != e.posttext)) {
        		this.gfnSetFormStatus(this);
        		this.gfnGridClear(this.dxGrid);
        	}
        }
        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.form_onload,this);
            this.divSearch.form.txtNO_SEARCH.addEventHandler("onchanged",this.fnSearchInit,this);
        };
        this.loadIncludeScript("DZU_CORP.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
