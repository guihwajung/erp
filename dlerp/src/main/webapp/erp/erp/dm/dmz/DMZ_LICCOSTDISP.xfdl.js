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
            this.set_titletext("자재품목마스터");
            if (Form == this.constructor)
            {
                this._setFormPosition(1280,720);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("dsList", this);
            obj._setContents("");
            this.addChild(obj.name, obj);


            obj = new Dataset("_dsProc", this);
            obj._setContents("<ColumnInfo><Column id=\"TARGET\" type=\"STRING\" size=\"256\"/><Column id=\"SP\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"TARGET\">select</Col><Col id=\"SP\">DMZPR_COSTCLASS_SELECT</Col></Row><Row><Col id=\"TARGET\">selectSub</Col><Col id=\"SP\">DMZPR_LICCOST_SELECT</Col></Row><Row><Col id=\"TARGET\">insert</Col><Col id=\"SP\">DMZPR_LICCOST_INSERT</Col></Row><Row><Col id=\"TARGET\">update</Col><Col id=\"SP\">DMZPR_LICCOST_UPDATE</Col></Row><Row><Col id=\"TARGET\">delete</Col><Col id=\"SP\">DMZPR_LICCOST_DELETE</Col></Row></Rows>");
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
            obj.set_text("품목그룹");
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
            obj.set_text("품목마스터");
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
        this.registerScript("DMZ_LICCOSTDISP.xfdl", function() {
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
        	this.gfnGridInit(this.dxGrid, this.dsList, "DM", "DMZ_LICCOSTDISP");
        	this.dxGrid.set_selecttype("cell");
        	this.dxGrid.addEventHandler("onselectchanged", this.fnGrid_RowCellChanged, this);

        	this.gfnGridInit(this.dxGridSub, this.dsListSub, "DM", "DMZ_LICCOSTDISPDETAIL");

        }

        /************************************************************************
         * 파라미터 설정
         ************************************************************************/
        this.fnSetParameter = function() {

        	this.dsSelect = new Dataset();
        	this.dsSelect.addColumn("CD_H01", "string");

        	this.dsSelectSub = new Dataset();
        	this.dsSelectSub.addColumn("CD_H01", "string");
        	this.dsSelectSub.addColumn("CD_H02", "string");

        	this.dsInsert = new Dataset();
        	this.dsInsert.addColumn("CD_H01", "string");
        	this.dsInsert.addColumn("CD_H02", "string");
        	this.dsInsert.addColumn("CD_LICCOST", "string");
        	this.dsInsert.addColumn("DS_LICCOST", "string");
        	this.dsInsert.addColumn("ID_DAM", "string");
        	this.dsInsert.addColumn("CD_PURCHASE", "string");
        	this.dsInsert.addColumn("DS_ORDER", "string");
        	this.dsInsert.addColumn("YN_RECRUIT", "string");
        	this.dsInsert.addColumn("YN_GISUNG", "string");
        	this.dsInsert.addColumn("YN_FTAX", "string");
        	this.dsInsert.addColumn("YN_CONT", "string");
        	this.dsInsert.addColumn("YN_CONT_GUARANTEE", "string");
        	this.dsInsert.addColumn("RT_GUARANTEE", "bigdecimal");
        	this.dsInsert.addColumn("CD_PART", "string");
        	this.dsInsert.addColumn("YN_AS", "string");
        	this.dsInsert.addColumn("RT_AS_GUARANTEE", "string");
        	this.dsInsert.addColumn("MO_AS", "int");
        	this.dsInsert.addColumn("YR_AS", "int");
        	this.dsInsert.addColumn("YN_DELAY", "string");
        	this.dsInsert.addColumn("RT_DELAY", "bigdecimal");
        	this.dsInsert.addColumn("YN_REINSU", "string");
        	this.dsInsert.addColumn("YN_DIRECT_AGREE", "string");
        	this.dsInsert.addColumn("YN_OVERHEAD", "string");
        	this.dsInsert.addColumn("YN_REQ_PTAX", "string");
        	this.dsInsert.addColumn("YN_KISCON", "string");
        	this.dsInsert.addColumn("CD_CONT_FORMAT", "string");
        	this.dsInsert.addColumn("DS_QS", "string");
        	this.dsInsert.addColumn("RM_BIGO", "string");
        	this.dsInsert.addColumn("YN_USE", "string");
        	this.dsInsert.addColumn("DS_AS_TERM_BASIC_LAW", "string");
        	this.dsInsert.addColumn("DS_AS_TERM_APARTMENT_LAW", "string");
        	this.dsInsert.addColumn("YN_DISCHARGE", "string");
        	this.dsInsert.addColumn("CD_JUDGEKIND", "string");
        	this.dsInsert.addColumn("CD_LICENSE", "string");
        	this.dsInsert.addColumn("YN_AUTORECOMMEND", "string");
        	this.dsInsert.addColumn("CNT_REC_VENDOR", "int");
        	this.dsInsert.addColumn("YN_REG", "string");
        	this.dsInsert.addColumn("YN_FEEDBACK_MG", "string");
        	this.dsInsert.addColumn("YN_FEEDBACK_APPLY", "string");
        	this.dsInsert.addColumn("YN_MH", "string");
        	this.dsInsert.addColumn("YN_EMP_INSU", "string");
        	this.dsInsert.addColumn("YN_LIC_NEC", "string");
        	this.dsInsert.addColumn("ID_USER", "string");
        	this.dsInsert.addColumn("TY_SELECT", "string");

        	this.dsUpdate = new Dataset();
        	this.dsUpdate.addColumn("CD_H01", "string");
        	this.dsUpdate.addColumn("CD_H02", "string");
        	this.dsUpdate.addColumn("CD_LICCOST", "string");
        	this.dsUpdate.addColumn("DS_LICCOST", "string");
        	this.dsUpdate.addColumn("ID_DAM", "string");
        	this.dsUpdate.addColumn("CD_PURCHASE", "string");
        	this.dsUpdate.addColumn("DS_ORDER", "string");
        	this.dsUpdate.addColumn("YN_RECRUIT", "string");
        	this.dsUpdate.addColumn("YN_GISUNG", "string");
        	this.dsUpdate.addColumn("YN_FTAX", "string");
        	this.dsUpdate.addColumn("YN_CONT", "string");
        	this.dsUpdate.addColumn("YN_CONT_GUARANTEE", "string");
        	this.dsUpdate.addColumn("RT_GUARANTEE", "bigdecimal");
        	this.dsUpdate.addColumn("CD_PART", "string");
        	this.dsUpdate.addColumn("YN_AS", "string");
        	this.dsUpdate.addColumn("RT_AS_GUARANTEE", "string");
        	this.dsUpdate.addColumn("MO_AS", "int");
        	this.dsUpdate.addColumn("YR_AS", "int");
        	this.dsUpdate.addColumn("YN_DELAY", "string");
        	this.dsUpdate.addColumn("RT_DELAY", "bigdecimal");
        	this.dsUpdate.addColumn("YN_REINSU", "string");
        	this.dsUpdate.addColumn("YN_DIRECT_AGREE", "string");
        	this.dsUpdate.addColumn("YN_OVERHEAD", "string");
        	this.dsUpdate.addColumn("YN_REQ_PTAX", "string");
        	this.dsUpdate.addColumn("YN_KISCON", "string");
        	this.dsUpdate.addColumn("CD_CONT_FORMAT", "string");
        	this.dsUpdate.addColumn("DS_QS", "string");
        	this.dsUpdate.addColumn("RM_BIGO", "string");
        	this.dsUpdate.addColumn("YN_USE", "string");
        	this.dsUpdate.addColumn("DS_AS_TERM_BASIC_LAW", "string");
        	this.dsUpdate.addColumn("DS_AS_TERM_APARTMENT_LAW", "string");
        	this.dsUpdate.addColumn("YN_DISCHARGE", "string");
        	this.dsUpdate.addColumn("CD_JUDGEKIND", "string");
        	this.dsUpdate.addColumn("CD_LICENSE", "string");
        	this.dsUpdate.addColumn("YN_AUTORECOMMEND", "string");
        	this.dsUpdate.addColumn("CNT_REC_VENDOR", "int");
        	this.dsUpdate.addColumn("YN_REG", "string");
        	this.dsUpdate.addColumn("YN_FEEDBACK_MG", "string");
        	this.dsUpdate.addColumn("YN_FEEDBACK_APPLY", "string");
        	this.dsUpdate.addColumn("YN_MH", "string");
        	this.dsUpdate.addColumn("YN_EMP_INSU", "string");
        	this.dsUpdate.addColumn("YN_LIC_NEC", "string");
        	this.dsUpdate.addColumn("ID_USER", "string");
        	this.dsUpdate.addColumn("TY_SELECT", "string");

        	this.dsDelete = new Dataset();
        	this.dsDelete.addColumn("CD_H01", "string");
        	this.dsDelete.addColumn("CD_H02", "string");
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

        	this.dsSelect.setColumn(0, "CD_H01", "");

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

        	this.dsSelectSub.setColumn(0, "CD_H01", this.dsList.getColumn(this.dsList.rowposition, "CD_H01"));
        	this.dsSelectSub.setColumn(0, "CD_H02", this.dsList.getColumn(this.dsList.rowposition, "CD_H02"));

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

        	this.dsListSub.setColumn(nrow, "CD_H01", this.dsList.getColumn(this.dsList.rowposition, "CD_H01"));
        	this.dsListSub.setColumn(nrow, "CD_H02", this.dsList.getColumn(this.dsList.rowposition, "CD_H02"));
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
        				this.dsInsert.setColumn(nrow, "CD_H01", this.dsListSub.getColumn(i, "CD_H01"));
        				this.dsInsert.setColumn(nrow, "CD_H02", this.dsListSub.getColumn(i, "CD_H02"));
        				this.dsInsert.setColumn(nrow, "CD_LICCOST", this.dsListSub.getColumn(i, "CD_LICCOST"));
        				this.dsInsert.setColumn(nrow, "DS_LICCOST", this.dsListSub.getColumn(i, "DS_LICCOST"));
        				this.dsInsert.setColumn(nrow, "ID_DAM", this.dsListSub.getColumn(i, "ID_DAM"));
        				this.dsInsert.setColumn(nrow, "CD_PURCHASE", this.dsListSub.getColumn(i, "CD_PURCHASE"));
        				this.dsInsert.setColumn(nrow, "DS_ORDER", this.dsListSub.getColumn(i, "DS_ORDER"));
        				this.dsInsert.setColumn(nrow, "YN_RECRUIT", this.dsListSub.getColumn(i, "YN_RECRUIT"));
        				this.dsInsert.setColumn(nrow, "YN_GISUNG", this.dsListSub.getColumn(i, "YN_GISUNG"));
        				this.dsInsert.setColumn(nrow, "YN_FTAX", this.dsListSub.getColumn(i, "YN_FTAX"));
        				this.dsInsert.setColumn(nrow, "YN_CONT", this.dsListSub.getColumn(i, "YN_CONT"));
        				this.dsInsert.setColumn(nrow, "YN_CONT_GUARANTEE", this.dsListSub.getColumn(i, "YN_CONT_GUARANTEE"));
        				this.dsInsert.setColumn(nrow, "RT_GUARANTEE", this.dsListSub.getColumn(i, "RT_GUARANTEE"));
        				this.dsInsert.setColumn(nrow, "CD_PART", this.dsListSub.getColumn(i, "CD_PART"));
        				this.dsInsert.setColumn(nrow, "YN_AS", this.dsListSub.getColumn(i, "YN_AS"));
        				this.dsInsert.setColumn(nrow, "RT_AS_GUARANTEE", this.dsListSub.getColumn(i, "RT_AS_GUARANTEE"));
        				this.dsInsert.setColumn(nrow, "MO_AS", this.dsListSub.getColumn(i, "MO_AS"));
        				this.dsInsert.setColumn(nrow, "YR_AS", this.dsListSub.getColumn(i, "YR_AS"));
        				this.dsInsert.setColumn(nrow, "YN_DELAY", this.dsListSub.getColumn(i, "YN_DELAY"));
        				this.dsInsert.setColumn(nrow, "RT_DELAY", this.dsListSub.getColumn(i, "RT_DELAY"));
        				this.dsInsert.setColumn(nrow, "YN_REINSU", this.dsListSub.getColumn(i, "YN_REINSU"));
        				this.dsInsert.setColumn(nrow, "YN_DIRECT_AGREE", this.dsListSub.getColumn(i, "YN_DIRECT_AGREE"));
        				this.dsInsert.setColumn(nrow, "YN_OVERHEAD", this.dsListSub.getColumn(i, "YN_OVERHEAD"));
        				this.dsInsert.setColumn(nrow, "YN_REQ_PTAX", this.dsListSub.getColumn(i, "YN_REQ_PTAX"));
        				this.dsInsert.setColumn(nrow, "YN_KISCON", this.dsListSub.getColumn(i, "YN_KISCON"));
        				this.dsInsert.setColumn(nrow, "CD_CONT_FORMAT", this.dsListSub.getColumn(i, "CD_CONT_FORMAT"));
        				this.dsInsert.setColumn(nrow, "DS_QS", this.dsListSub.getColumn(i, "DS_QS"));
        				this.dsInsert.setColumn(nrow, "RM_BIGO", this.dsListSub.getColumn(i, "RM_BIGO"));
        				this.dsInsert.setColumn(nrow, "YN_USE", this.dsListSub.getColumn(i, "YN_USE"));
        				this.dsInsert.setColumn(nrow, "DS_AS_TERM_BASIC_LAW", this.dsListSub.getColumn(i, "DS_AS_TERM_BASIC_LAW"));
        				this.dsInsert.setColumn(nrow, "DS_AS_TERM_APARTMENT_LAW", this.dsListSub.getColumn(i, "DS_AS_TERM_APARTMENT_LAW"));
        				this.dsInsert.setColumn(nrow, "YN_DISCHARGE", this.dsListSub.getColumn(i, "YN_DISCHARGE"));
        				this.dsInsert.setColumn(nrow, "CD_JUDGEKIND", this.dsListSub.getColumn(i, "CD_JUDGEKIND"));
        				this.dsInsert.setColumn(nrow, "CD_LICENSE", this.dsListSub.getColumn(i, "CD_LICENSE"));
        				this.dsInsert.setColumn(nrow, "YN_AUTORECOMMEND", this.dsListSub.getColumn(i, "YN_AUTORECOMMEND"));
        				this.dsInsert.setColumn(nrow, "CNT_REC_VENDOR", this.dsListSub.getColumn(i, "CNT_REC_VENDOR"));
        				this.dsInsert.setColumn(nrow, "YN_REG", this.dsListSub.getColumn(i, "YN_REG"));
        				this.dsInsert.setColumn(nrow, "YN_FEEDBACK_MG", this.dsListSub.getColumn(i, "YN_FEEDBACK_MG"));
        				this.dsInsert.setColumn(nrow, "YN_FEEDBACK_APPLY", this.dsListSub.getColumn(i, "YN_FEEDBACK_APPLY"));
        				this.dsInsert.setColumn(nrow, "YN_MH", this.dsListSub.getColumn(i, "YN_MH"));
        				this.dsInsert.setColumn(nrow, "YN_EMP_INSU", this.dsListSub.getColumn(i, "YN_EMP_INSU"));
        				this.dsInsert.setColumn(nrow, "YN_LIC_NEC", this.dsListSub.getColumn(i, "YN_LIC_NEC"));
        				this.dsInsert.setColumn(nrow, "ID_USER", this.AuthClient.ID_USER);
        				this.dsInsert.setColumn(nrow, "TY_SELECT", this.dsListSub.getColumn(i, "TY_SELECT"));
        				break;

        			case "U":
        				var nrow = this.dsUpdate.addRow();
        				this.dsUpdate.setColumn(nrow, "CD_H01", this.dsListSub.getColumn(i, "CD_H01"));
        				this.dsUpdate.setColumn(nrow, "CD_H02", this.dsListSub.getColumn(i, "CD_H02"));
        				this.dsUpdate.setColumn(nrow, "CD_LICCOST", this.dsListSub.getColumn(i, "CD_LICCOST"));
        				this.dsUpdate.setColumn(nrow, "DS_LICCOST", this.dsListSub.getColumn(i, "DS_LICCOST"));
        				this.dsUpdate.setColumn(nrow, "ID_DAM", this.dsListSub.getColumn(i, "ID_DAM"));
        				this.dsUpdate.setColumn(nrow, "CD_PURCHASE", this.dsListSub.getColumn(i, "CD_PURCHASE"));
        				this.dsUpdate.setColumn(nrow, "DS_ORDER", this.dsListSub.getColumn(i, "DS_ORDER"));
        				this.dsUpdate.setColumn(nrow, "YN_RECRUIT", this.dsListSub.getColumn(i, "YN_RECRUIT"));
        				this.dsUpdate.setColumn(nrow, "YN_GISUNG", this.dsListSub.getColumn(i, "YN_GISUNG"));
        				this.dsUpdate.setColumn(nrow, "YN_FTAX", this.dsListSub.getColumn(i, "YN_FTAX"));
        				this.dsUpdate.setColumn(nrow, "YN_CONT", this.dsListSub.getColumn(i, "YN_CONT"));
        				this.dsUpdate.setColumn(nrow, "YN_CONT_GUARANTEE", this.dsListSub.getColumn(i, "YN_CONT_GUARANTEE"));
        				this.dsUpdate.setColumn(nrow, "RT_GUARANTEE", this.dsListSub.getColumn(i, "RT_GUARANTEE"));
        				this.dsUpdate.setColumn(nrow, "CD_PART", this.dsListSub.getColumn(i, "CD_PART"));
        				this.dsUpdate.setColumn(nrow, "YN_AS", this.dsListSub.getColumn(i, "YN_AS"));
        				this.dsUpdate.setColumn(nrow, "RT_AS_GUARANTEE", this.dsListSub.getColumn(i, "RT_AS_GUARANTEE"));
        				this.dsUpdate.setColumn(nrow, "MO_AS", this.dsListSub.getColumn(i, "MO_AS"));
        				this.dsUpdate.setColumn(nrow, "YR_AS", this.dsListSub.getColumn(i, "YR_AS"));
        				this.dsUpdate.setColumn(nrow, "YN_DELAY", this.dsListSub.getColumn(i, "YN_DELAY"));
        				this.dsUpdate.setColumn(nrow, "RT_DELAY", this.dsListSub.getColumn(i, "RT_DELAY"));
        				this.dsUpdate.setColumn(nrow, "YN_REINSU", this.dsListSub.getColumn(i, "YN_REINSU"));
        				this.dsUpdate.setColumn(nrow, "YN_DIRECT_AGREE", this.dsListSub.getColumn(i, "YN_DIRECT_AGREE"));
        				this.dsUpdate.setColumn(nrow, "YN_OVERHEAD", this.dsListSub.getColumn(i, "YN_OVERHEAD"));
        				this.dsUpdate.setColumn(nrow, "YN_REQ_PTAX", this.dsListSub.getColumn(i, "YN_REQ_PTAX"));
        				this.dsUpdate.setColumn(nrow, "YN_KISCON", this.dsListSub.getColumn(i, "YN_KISCON"));
        				this.dsUpdate.setColumn(nrow, "CD_CONT_FORMAT", this.dsListSub.getColumn(i, "CD_CONT_FORMAT"));
        				this.dsUpdate.setColumn(nrow, "DS_QS", this.dsListSub.getColumn(i, "DS_QS"));
        				this.dsUpdate.setColumn(nrow, "RM_BIGO", this.dsListSub.getColumn(i, "RM_BIGO"));
        				this.dsUpdate.setColumn(nrow, "YN_USE", this.dsListSub.getColumn(i, "YN_USE"));
        				this.dsUpdate.setColumn(nrow, "DS_AS_TERM_BASIC_LAW", this.dsListSub.getColumn(i, "DS_AS_TERM_BASIC_LAW"));
        				this.dsUpdate.setColumn(nrow, "DS_AS_TERM_APARTMENT_LAW", this.dsListSub.getColumn(i, "DS_AS_TERM_APARTMENT_LAW"));
        				this.dsUpdate.setColumn(nrow, "YN_DISCHARGE", this.dsListSub.getColumn(i, "YN_DISCHARGE"));
        				this.dsUpdate.setColumn(nrow, "CD_JUDGEKIND", this.dsListSub.getColumn(i, "CD_JUDGEKIND"));
        				this.dsUpdate.setColumn(nrow, "CD_LICENSE", this.dsListSub.getColumn(i, "CD_LICENSE"));
        				this.dsUpdate.setColumn(nrow, "YN_AUTORECOMMEND", this.dsListSub.getColumn(i, "YN_AUTORECOMMEND"));
        				this.dsUpdate.setColumn(nrow, "CNT_REC_VENDOR", this.dsListSub.getColumn(i, "CNT_REC_VENDOR"));
        				this.dsUpdate.setColumn(nrow, "YN_REG", this.dsListSub.getColumn(i, "YN_REG"));
        				this.dsUpdate.setColumn(nrow, "YN_FEEDBACK_MG", this.dsListSub.getColumn(i, "YN_FEEDBACK_MG"));
        				this.dsUpdate.setColumn(nrow, "YN_FEEDBACK_APPLY", this.dsListSub.getColumn(i, "YN_FEEDBACK_APPLY"));
        				this.dsUpdate.setColumn(nrow, "YN_MH", this.dsListSub.getColumn(i, "YN_MH"));
        				this.dsUpdate.setColumn(nrow, "YN_EMP_INSU", this.dsListSub.getColumn(i, "YN_EMP_INSU"));
        				this.dsUpdate.setColumn(nrow, "YN_LIC_NEC", this.dsListSub.getColumn(i, "YN_LIC_NEC"));
        				this.dsUpdate.setColumn(nrow, "ID_USER", this.AuthClient.ID_USER);
        				this.dsUpdate.setColumn(nrow, "TY_SELECT", this.dsListSub.getColumn(i, "TY_SELECT"));
        				break;

        			case "D":
        				var nrow = this.dsDelete.addRow();
        				this.dsDelete.setColumn(nrow, "CD_H01", this.dsListSub.getColumn(i, "CD_H01"));
        				this.dsDelete.setColumn(nrow, "CD_H02", this.dsListSub.getColumn(i, "CD_H02"));
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
        this.loadIncludeScript("DMZ_LICCOSTDISP.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
