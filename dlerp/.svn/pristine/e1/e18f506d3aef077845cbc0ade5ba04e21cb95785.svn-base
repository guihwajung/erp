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
            this.set_titletext("공종마스터관리");
            if (Form == this.constructor)
            {
                this._setFormPosition(1280,720);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("dsList", this);
            obj._setContents("");
            this.addChild(obj.name, obj);


            obj = new Dataset("_dsProc", this);
            obj._setContents("<ColumnInfo><Column id=\"TARGET\" type=\"STRING\" size=\"256\"/><Column id=\"SP\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"TARGET\">select</Col><Col id=\"SP\">DCZPR_COSTCLASS_SELECT</Col></Row><Row><Col id=\"TARGET\">selectSub</Col><Col id=\"SP\">DCZPR_LICCOSTDISP_SELECT</Col></Row><Row><Col id=\"TARGET\">insert</Col><Col id=\"SP\">DCZPR_LICCOST_INSERT</Col></Row><Row><Col id=\"TARGET\">update</Col><Col id=\"SP\">DCZPR_LICCOST_UPDATE</Col></Row><Row><Col id=\"TARGET\">delete</Col><Col id=\"SP\">DCZPR_LICCOST_DELETE</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsListSub", this);
            obj._setContents("");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Div("divData","0","0",null,null,"0","0",null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_cssclass("div_DATA_Bg");
            this.addChild(obj.name, obj);

            obj = new Div("divDataLeft","0","0","300",null,null,"0",null,null,null,null,this.divData.form);
            obj.set_taborder("0");
            this.divData.addChild(obj.name, obj);

            obj = new Static("staLeftTitle","0","0","100%","22",null,null,null,null,null,null,this.divData.form.divDataLeft.form);
            obj.set_taborder("0");
            obj.set_text("대공종코드");
            obj.set_cssclass("sta_TITLE_Bg");
            this.divData.form.divDataLeft.addChild(obj.name, obj);

            obj = new Grid("objGrid","0","staLeftTitle:5",null,null,"0","0",null,null,null,null,this.divData.form.divDataLeft.form);
            obj.set_taborder("0");
            obj._setContents("");
            this.divData.form.divDataLeft.addChild(obj.name, obj);

            obj = new Div("divDataRight","divDataLeft:10","0",null,null,"0","0",null,null,null,null,this.divData.form);
            obj.set_taborder("0");
            this.divData.addChild(obj.name, obj);

            obj = new Static("staRightTitle","0","0","100%","22",null,null,null,null,null,null,this.divData.form.divDataRight.form);
            obj.set_taborder("0");
            obj.set_text("등록공종코드");
            obj.set_cssclass("sta_TITLE_Bg");
            this.divData.form.divDataRight.addChild(obj.name, obj);

            obj = new Grid("objGridSub","0","staRightTitle:5",null,null,"0","0",null,null,null,null,this.divData.form.divDataRight.form);
            obj.set_taborder("0");
            obj._setContents("");
            this.divData.form.divDataRight.addChild(obj.name, obj);
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
        this.registerScript("DCZ_LICCOSTDISP_BAK.xfdl", function() {
        this.objApp = this.gfnGetApplication();

        this.form_onload = function(obj,e)
        {
        	// -- 필수 -------------------//
        	this.gfnFormOnLoad(this);
        	this.gfnFormInfo(this);
        	// ---------------------------//

        	this.fnSetButton();
        	//this.fnSetExtendButton();
        	this.fnSetVariable();
        	this.fnSetEvent();
        	this.fnSetParameter();

        	this.FormBtns.Select.click();
        };

        /************************************************************************
         * 버튼 설정 : 화면(Tab) 전환시 마다 호출
         ************************************************************************/
        this.fnSetButton = function() {

        }

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
        	this.dxGrid = this.divData.form.divDataLeft.form.objGrid;
        	this.dxGridSub = this.divData.form.divDataRight.form.objGridSub;
        };

        /************************************************************************
         * 이벤트 설정
         ************************************************************************/
        this.fnSetEvent = function() {
        	this.gfnGridInit(this.dxGrid, this.dsList, "DC", "DCZ_LICCOSTDISP");
        	this.dxGrid.set_selecttype("cell");
        	this.dxGrid.addEventHandler("onselectchanged", this.fnGrid_RowCellChanged, this);

        	this.gfnGridInit(this.dxGridSub, this.dsListSub, "DC", "DCZ_LICCOSTDISPDETAIL");
        }

        /************************************************************************
         * 파라미터 설정
         ************************************************************************/
        this.fnSetParameter = function() {

        	this.dsSelect = new Dataset();
        	this.dsSelect.addColumn("CD_COSTCLASS", "string");

        	this.dsSelectSub = new Dataset();
        	this.dsSelectSub.addColumn("CD_COSTCLASS", "string");

        	this.dsInsert = new Dataset();
        	this.dsInsert.addColumn("CD_COSTCLASS", "string");
        	this.dsInsert.addColumn("CD_LICCOST", "string");
        	this.dsInsert.addColumn("DS_LICCOST", "string");
        	this.dsInsert.addColumn("CD_PART", "string");
        	this.dsInsert.addColumn("MO_AS", "int");
        	this.dsInsert.addColumn("RT_GUARANTEE", "bigdecimal");
        	this.dsInsert.addColumn("YN_DISCHARGE", "string");
        	this.dsInsert.addColumn("RM_BIGO", "string");
        	this.dsInsert.addColumn("CD_LICENSE", "string");
        	this.dsInsert.addColumn("YN_AUTORECOMMEND", "string");
        	this.dsInsert.addColumn("CNT_REC_VENDOR", "int");
        	this.dsInsert.addColumn("YN_REG", "string");
        	this.dsInsert.addColumn("YN_USE", "string");
        	this.dsInsert.addColumn("YN_FEEDBACK_MG", "string");
        	this.dsInsert.addColumn("YN_FEEDBACK_APPLY", "string");
        	this.dsInsert.addColumn("YN_MH", "string");
        	this.dsInsert.addColumn("YN_REINSU", "string");
        	this.dsInsert.addColumn("YN_EMP_INSU", "string");
        	this.dsInsert.addColumn("YN_KISCON", "string");
        	this.dsInsert.addColumn("RT_IND_EQUIP", "bigdecimal");
        	this.dsInsert.addColumn("YN_LIC_NEC", "string");

        	this.dsUpdate = new Dataset();
        	this.dsUpdate.addColumn("CD_COSTCLASS", "string");
        	this.dsUpdate.addColumn("CD_LICCOST", "string");
        	this.dsUpdate.addColumn("DS_LICCOST", "string");
        	this.dsUpdate.addColumn("CD_PART", "string");
        	this.dsUpdate.addColumn("MO_AS", "int");
        	this.dsUpdate.addColumn("RT_GUARANTEE", "bigdecimal");
        	this.dsUpdate.addColumn("YN_DISCHARGE", "string");
        	this.dsUpdate.addColumn("RM_BIGO", "string");
        	this.dsUpdate.addColumn("CD_LICENSE", "string");
        	this.dsUpdate.addColumn("YN_AUTORECOMMEND", "string");
        	this.dsUpdate.addColumn("CNT_REC_VENDOR", "int");
        	this.dsUpdate.addColumn("YN_REG", "string");
        	this.dsUpdate.addColumn("YN_USE", "string");
        	this.dsUpdate.addColumn("YN_FEEDBACK_MG", "string");
        	this.dsUpdate.addColumn("YN_FEEDBACK_APPLY", "string");
        	this.dsUpdate.addColumn("YN_MH", "string");
        	this.dsUpdate.addColumn("YN_REINSU", "string");
        	this.dsUpdate.addColumn("YN_EMP_INSU", "string");
        	this.dsUpdate.addColumn("YN_KISCON", "string");
        	this.dsUpdate.addColumn("RT_IND_EQUIP", "bigdecimal");
        	this.dsUpdate.addColumn("YN_LIC_NEC", "string");

        	this.dsDelete = new Dataset();
        	this.dsDelete.addColumn("CD_COSTCLASS", "string");
        	this.dsDelete.addColumn("CD_LICCOST", "string");
        }

        /************************************************************************
         * 버튼 이벤트
         ************************************************************************/
         /*
          *	조회 버튼
          */
        this.fnSelect = function() {
        	this.gfnGridBeforeSelect(this.dxGrid);

        	this.dsSelect.clearData();
        	this.dsSelect.addRow();

        	this.dsSelect.setColumn(0, "CD_COSTCLASS", "");

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

        this.fnSelectSub = function()
        {
        	this.gfnGridBeforeSelect(this.dxGridSub);

        	this.dsSelectSub.clearData();
        	this.dsSelectSub.addRow();

        	this.dsSelectSub.setColumn(0, "CD_COSTCLASS", this.dsList.getColumn(this.dsList.rowposition, "CD_COSTCLASS"));

        	var strSvcId    = "selectSub";
        	var strSvcType  = "grid";
        	var inProc		= "_dsProc";
        	var inData      = "selectSub=dsSelectSub";
        	var outData     = "dsListSub=selectSub0";
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
        	var nrow = this.gfnGridAdd(this.dxGridSub);

        	this.dsListSub.setColumn(nrow, "CD_COSTCLASS", this.dsList.getColumn(this.dsList.rowposition, "CD_COSTCLASS"));
        }

        /*
         *	삭제 버튼
         */
        this.fnDel = function() {
        	this.gfnGridDel(this.dxGridSub);
        }

        /*
         *	저장 버튼
         */
        this.fnSave = function() {
        	if (!this.gfnGridValidate(this.dxGridSub)) return;

        	this.dxGridSub.updateToDataset();

        	this.dsInsert.clearData();
        	this.dsUpdate.clearData();
        	this.dsDelete.clearData();

        	for (var i = 0; i < this.dsListSub.rowcount; i++) {
        		var flag = this.gfnGetFlag(this.dsListSub, i);
        		switch(flag) {
        			case "I":
        				var nrow = this.dsInsert.addRow();
        				this.dsInsert.setColumn(nrow, "CD_COSTCLASS", this.dsListSub.getColumn(i, "CD_COSTCLASS"));
        				this.dsInsert.setColumn(nrow, "CD_LICCOST", this.dsListSub.getColumn(i, "CD_LICCOST"));
        				this.dsInsert.setColumn(nrow, "DS_LICCOST", this.dsListSub.getColumn(i, "DS_LICCOST"));
        				this.dsInsert.setColumn(nrow, "CD_PART", this.dsListSub.getColumn(i, "CD_PART"));
        				this.dsInsert.setColumn(nrow, "MO_AS", this.dsListSub.getColumn(i, "MO_AS"));
        				this.dsInsert.setColumn(nrow, "RT_GUARANTEE", this.dsListSub.getColumn(i, "RT_GUARANTEE"));
        				this.dsInsert.setColumn(nrow, "YN_DISCHARGE", this.dsListSub.getColumn(i, "YN_DISCHARGE"));
        				this.dsInsert.setColumn(nrow, "RM_BIGO", this.dsListSub.getColumn(i, "RM_BIGO"));
        				this.dsInsert.setColumn(nrow, "CD_LICENSE", this.dsListSub.getColumn(i, "CD_LICENSE"));
        				this.dsInsert.setColumn(nrow, "YN_AUTORECOMMEND", this.dsListSub.getColumn(i, "YN_AUTORECOMMEND"));
        				this.dsInsert.setColumn(nrow, "CNT_REC_VENDOR", this.dsListSub.getColumn(i, "CNT_REC_VENDOR"));
        				this.dsInsert.setColumn(nrow, "YN_REG", this.dsListSub.getColumn(i, "YN_REG"));
        				this.dsInsert.setColumn(nrow, "YN_USE", this.dsListSub.getColumn(i, "YN_USE"));
        				this.dsInsert.setColumn(nrow, "YN_FEEDBACK_MG", this.dsListSub.getColumn(i, "YN_FEEDBACK_MG"));
        				this.dsInsert.setColumn(nrow, "YN_FEEDBACK_APPLY", this.dsListSub.getColumn(i, "YN_FEEDBACK_APPLY"));
        				this.dsInsert.setColumn(nrow, "YN_MH", this.dsListSub.getColumn(i, "YN_MH"));
        				this.dsInsert.setColumn(nrow, "YN_REINSU", this.dsListSub.getColumn(i, "YN_REINSU"));
        				this.dsInsert.setColumn(nrow, "YN_EMP_INSU", this.dsListSub.getColumn(i, "YN_EMP_INSU"));
        				this.dsInsert.setColumn(nrow, "YN_KISCON", this.dsListSub.getColumn(i, "YN_KISCON"));
        				this.dsInsert.setColumn(nrow, "RT_IND_EQUIP", this.dsListSub.getColumn(i, "RT_IND_EQUIP"));
        				this.dsInsert.setColumn(nrow, "YN_LIC_NEC", this.dsListSub.getColumn(i, "YN_LIC_NEC"));
        				break;

        			case "U":
        				var nrow = this.dsUpdate.addRow();
        				this.dsUpdate.setColumn(nrow, "CD_COSTCLASS", this.dsListSub.getColumn(i, "CD_COSTCLASS"));
        				this.dsUpdate.setColumn(nrow, "CD_LICCOST", this.dsListSub.getColumn(i, "CD_LICCOST"));
        				this.dsUpdate.setColumn(nrow, "DS_LICCOST", this.dsListSub.getColumn(i, "DS_LICCOST"));
        				this.dsUpdate.setColumn(nrow, "CD_PART", this.dsListSub.getColumn(i, "CD_PART"));
        				this.dsUpdate.setColumn(nrow, "MO_AS", this.dsListSub.getColumn(i, "MO_AS"));
        				this.dsUpdate.setColumn(nrow, "RT_GUARANTEE", this.dsListSub.getColumn(i, "RT_GUARANTEE"));
        				this.dsUpdate.setColumn(nrow, "YN_DISCHARGE", this.dsListSub.getColumn(i, "YN_DISCHARGE"));
        				this.dsUpdate.setColumn(nrow, "RM_BIGO", this.dsListSub.getColumn(i, "RM_BIGO"));
        				this.dsUpdate.setColumn(nrow, "CD_LICENSE", this.dsListSub.getColumn(i, "CD_LICENSE"));
        				this.dsUpdate.setColumn(nrow, "YN_AUTORECOMMEND", this.dsListSub.getColumn(i, "YN_AUTORECOMMEND"));
        				this.dsUpdate.setColumn(nrow, "CNT_REC_VENDOR", this.dsListSub.getColumn(i, "CNT_REC_VENDOR"));
        				this.dsUpdate.setColumn(nrow, "YN_REG", this.dsListSub.getColumn(i, "YN_REG"));
        				this.dsUpdate.setColumn(nrow, "YN_USE", this.dsListSub.getColumn(i, "YN_USE"));
        				this.dsUpdate.setColumn(nrow, "YN_FEEDBACK_MG", this.dsListSub.getColumn(i, "YN_FEEDBACK_MG"));
        				this.dsUpdate.setColumn(nrow, "YN_FEEDBACK_APPLY", this.dsListSub.getColumn(i, "YN_FEEDBACK_APPLY"));
        				this.dsUpdate.setColumn(nrow, "YN_MH", this.dsListSub.getColumn(i, "YN_MH"));
        				this.dsUpdate.setColumn(nrow, "YN_REINSU", this.dsListSub.getColumn(i, "YN_REINSU"));
        				this.dsUpdate.setColumn(nrow, "YN_EMP_INSU", this.dsListSub.getColumn(i, "YN_EMP_INSU"));
        				this.dsUpdate.setColumn(nrow, "YN_KISCON", this.dsListSub.getColumn(i, "YN_KISCON"));
        				this.dsUpdate.setColumn(nrow, "RT_IND_EQUIP", this.dsListSub.getColumn(i, "RT_IND_EQUIP"));
        				this.dsUpdate.setColumn(nrow, "YN_LIC_NEC", this.dsListSub.getColumn(i, "YN_LIC_NEC"));
        				break;

        			case "D":
        				var nrow = this.dsDelete.addRow();
        				this.dsDelete.setColumn(nrow, "CD_COSTCLASS", this.dsListSub.getColumn(i, "CD_COSTCLASS"));
        				this.dsDelete.setColumn(nrow, "CD_LICCOST", this.dsListSub.getColumn(i, "CD_LICCOST"));
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
        		this.fnSelectSub();
        	}
        	else if (svcID == "selectSub") {
        		this.gfnGridAfterSelect(this.dxGridSub);
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
        this.fnGrid_RowCellChanged = function(obj,e)
        {
            if ((obj.oldrow > -1 && obj.oldrow == e.row)
        		|| (obj.oldrow == -1 && e.oldrow != e.row)) {
        		this.fnSelectSub();
        		obj.oldrow = -1;
        	}
        };

        /************************************************************************
         * 기타 이벤트
         ************************************************************************/
        this.fnSearchInit = function(obj,e) {
        	if(e == null || (e.pretext != e.posttext)) {
        		this.gfnSetFormStatus(this);
        		this.gfnGridClear(this.dxGrid);
        		this.gfnGridClear(this.dxGridSub);
        	}
        }
        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.form_onload,this);
            this.divData.addEventHandler("ondragmove",this.divData_ondragmove,this);
        };
        this.loadIncludeScript("DCZ_LICCOSTDISP_BAK.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
