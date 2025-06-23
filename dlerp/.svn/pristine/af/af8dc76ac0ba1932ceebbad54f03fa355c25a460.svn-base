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
            this.set_titletext("공사계약관리");
            if (Form == this.constructor)
            {
                this._setFormPosition(1280,720);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("dsList", this);
            obj._setContents("");
            this.addChild(obj.name, obj);


            obj = new Dataset("_dsProc", this);
            obj._setContents("<ColumnInfo><Column id=\"TARGET\" type=\"STRING\" size=\"256\"/><Column id=\"SP\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"TARGET\">select</Col><Col id=\"SP\">DOZPR_CONST_CONTRCT_SELECT</Col></Row><Row><Col id=\"TARGET\">save</Col><Col id=\"SP\">DOZPR_CONST_CONTRCT_SAVE</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsSearch", this);
            obj._setContents("<ColumnInfo><Column id=\"CD_SITE\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row/></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsROW_DESCRIPTION", this);
            obj._setContents("");
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

            obj = new Div("ccfCD_SITE","staCD_SITE:0.0","10.0","250","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.getSetter("CodeFindName").set("DWX_DEPT_01");
            obj.getSetter("CDTextWidth").set("80");
            obj.set_taborder("1");
            obj.set_url("cmm::cmmCodeFind.xfdl");
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
            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {
            this._addPreloadList("fdl","cmm::cmmCodeFind.xfdl");
        };
        
        // User Script
        this.registerScript("DWU_CONSTCONTRCT.xfdl", function() {
        // TODO : 현재 변경계약건 저장이 안되는 문제가 있음. 우선 다른 화면 우선 진행.

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

        	if(!this.gfnIsNull(this.getOwnerFrame().CD_SITE))
        	{
        		this.dsSearch.setColumn(0, "CD_SITE", this.getOwnerFrame().CD_SITE);
        		this.divSearch.form.ccfCD_SITE.form.DSTextBox.set_value(this.getOwnerFrame().DS_SITE);

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
        	this.btnContrct = this.gfnFormButtonAdd("btnContrct", "fnContrct");
        	this.btnPolyContrct = this.gfnFormButtonAdd("btnPolyContrct", "fnPolyContrct");
        	this.btnChngeContrct = this.gfnFormButtonAdd("btnChngeContrct", "fnChngeContrct");
        	this.btnRcoMng = this.gfnFormButtonAdd("btnRcoMng", "fnRcoMng");
        	this.btnClbCoMng = this.gfnFormButtonAdd("btnClbCoMng", "fnClbCoMng");
        };

        /************************************************************************
         * 변수 선언
         ************************************************************************/
        this.fnSetVariable = function() {
           this.ccfCD_SITE = this.divSearch.form.ccfCD_SITE;
        	this.dxGrid = this.divData.form.objGrid;
        };

        /************************************************************************
         * 이벤트 설정
         ************************************************************************/
        this.fnSetEvent = function() {

        	this.ccfCD_SITE.BeforeUserDataSetParam = "fnBeforeUserDataSetParam";

        	this.dxGrid.addEventHandler("onselectchanged", this.fnGrid_RowCellChanged, this);
        	// 그리드 초기화
        	this.gfnGridInit(this.dxGrid, this.dsList, "DW", "DWU_CONSTCONTRCT");

        	// row 수정가능 여부
        	this.dxGrid.EnterCell = "fnGrid_EnterCell";

        	// 그리드 정렬 막기.
        	this.dxGrid.sort = "false";
        	//this.dxGrid.AfterEdit = "fnGrid_AfterEdit";
        };

        /************************************************************************
         * 파라미터 설정
         ************************************************************************/
        this.fnSetParameter = function() {
        	this.dsSelect = new Dataset();
        	this.dsSelect.addColumn("TY_WRK", "string");
        	this.dsSelect.addColumn("CD_FIELD", "string");
        	this.dsSelect.addColumn("NO_CONTRCT", "string");
        	this.dsSelect.addColumn("NO_POLY_CONST_CONTRCT", "string");

        	this.dsSave = new Dataset();
        	this.dsSave.addColumn("TY_WRK", "string");
        	this.dsSave.addColumn("ID_USER", "string");
        	this.dsSave.addColumn("CD_FIELD", "string");
        	this.dsSave.addColumn("NO_CONTRCT", "string");
        	this.dsSave.addColumn("NO_POLY_CONST_CONTRCT", "string");
        	this.dsSave.addColumn("NO_CHNGE_CONTRCT", "string");
        	this.dsSave.addColumn("DS_CONST_CONTRCT", "string");
        	this.dsSave.addColumn("CD_CORP", "string");
        	this.dsSave.addColumn("CD_CONST_FIELD", "string");
        	this.dsSave.addColumn("CD_CONST_TYPE", "string");
        	this.dsSave.addColumn("DIV_CONTRCT", "string");
        	this.dsSave.addColumn("YN_JUGAN", "string");
        	this.dsSave.addColumn("DT_CONTRCT", "string");
        	this.dsSave.addColumn("DT_ST", "string");
        	this.dsSave.addColumn("DT_INIT_COMPLETE", "string");
        	this.dsSave.addColumn("AM_INIT_CONTRCT", "bigdecimal");
        	this.dsSave.addColumn("AM_INIT_SUPPLY", "bigdecimal");
        	this.dsSave.addColumn("AM_INIT_VAT", "bigdecimal");
        	this.dsSave.addColumn("AM_INIT_TXFR_SUPPLY", "bigdecimal");
        	this.dsSave.addColumn("TY_TAX", "string");
        	this.dsSave.addColumn("RT_TAX", "bigdecimal");
        	this.dsSave.addColumn("RT_TAXFREE", "bigdecimal");
        	this.dsSave.addColumn("RT_PORTION_OUR", "bigdecimal");
        	this.dsSave.addColumn("AM_INIT_CONT_OUR", "bigdecimal");
        	this.dsSave.addColumn("AM_INIT_SUPPLY_OUR", "bigdecimal");
        	this.dsSave.addColumn("AM_INIT_VAT_OUR", "bigdecimal");
        	this.dsSave.addColumn("AM_INIT_TXFR_SUPPLY_OUR", "bigdecimal");
        	this.dsSave.addColumn("RT_PORTION_OUR2", "bigdecimal");
        	this.dsSave.addColumn("AM_INIT_CONT_OUR2", "bigdecimal");
        	this.dsSave.addColumn("AM_INIT_SUPPLY_OUR2", "bigdecimal");
        	this.dsSave.addColumn("AM_INIT_VAT_OUR2", "bigdecimal");
        	this.dsSave.addColumn("AM_INIT_TXFR_SUPPLY_OUR2", "bigdecimal");
        	this.dsSave.addColumn("RT_PORTION_PART", "bigdecimal");
        	this.dsSave.addColumn("AM_INIT_CONT_PART", "bigdecimal");
        	this.dsSave.addColumn("AM_INIT_SUPPLY_PART", "bigdecimal");
        	this.dsSave.addColumn("AM_INIT_VAT_PART", "bigdecimal");
        	this.dsSave.addColumn("AM_INIT_TXFR_SUPPLY_PART", "bigdecimal");
        	this.dsSave.addColumn("RM_SCALE", "string");
        	this.dsSave.addColumn("CD_CONTRACT_DEPT1", "string");
        	this.dsSave.addColumn("CD_CONTRACT_DEPT2", "string");
        	this.dsSave.addColumn("CD_CONTRACT_DEPT3", "string");
        	this.dsSave.addColumn("DT_COMPL_INSPECT", "string");
        	this.dsSave.addColumn("AM_CHNGE_CONTRCT", "bigdecimal");
        	this.dsSave.addColumn("AM_CHNGE_SUPPLY", "bigdecimal");
        	this.dsSave.addColumn("AM_CHNGE_VAT", "bigdecimal");
        	this.dsSave.addColumn("AM_CHNGE_TXFR_SUPPLY", "bigdecimal");
        	this.dsSave.addColumn("RT_PORTION_PART2", "bigdecimal");
        	this.dsSave.addColumn("AM_INIT_CONT_PART2", "bigdecimal");
        	this.dsSave.addColumn("AM_INIT_SUPPLY_PART2", "bigdecimal");
        	this.dsSave.addColumn("AM_INIT_VAT_PART2", "bigdecimal");
        	this.dsSave.addColumn("AM_INIT_TXFR_SUPPLY_PART2", "bigdecimal");
        	this.dsSave.addColumn("AM_CHNGE_CONT_OUR", "bigdecimal");
        	this.dsSave.addColumn("AM_CHNGE_SUPPLY_OUR", "bigdecimal");
        	this.dsSave.addColumn("AM_CHNGE_VAT_OUR", "bigdecimal");
        	this.dsSave.addColumn("AM_CHNGE_TXFR_SUPPLY_OUR", "bigdecimal");
        	this.dsSave.addColumn("AM_CHNGE_CONT_PART", "bigdecimal");
        	this.dsSave.addColumn("AM_CHNGE_SUPPLY_PART", "bigdecimal");
        	this.dsSave.addColumn("AM_CHNGE_VAT_PART", "bigdecimal");
        	this.dsSave.addColumn("AM_CHNGE_TXFR_SUPPLY_PART", "bigdecimal");
        	this.dsSave.addColumn("AM_CONT_GUARANTEE", "bigdecimal");
        	this.dsSave.addColumn("AM_TOTAL_WITH", "bigdecimal");
        	this.dsSave.addColumn("AM_TOTAL_PART", "bigdecimal");
        	this.dsSave.addColumn("DT_GRT_FR", "string");
        	this.dsSave.addColumn("DT_GRT_TO", "string");
        	this.dsSave.addColumn("NO_REGIST_SEAL", "string");
        	this.dsSave.addColumn("RT_DELAY_COMPENSATION", "bigdecimal");
        	this.dsSave.addColumn("AM_DESIGN", "bigdecimal");
        	this.dsSave.addColumn("RT_DESG_SUCCBID", "bigdecimal");
        	this.dsSave.addColumn("AM_ESTIMATE", "bigdecimal");
        	this.dsSave.addColumn("RT_ESTM_SUCCBID", "bigdecimal");
        	this.dsSave.addColumn("ID_FIELD_AGENCY", "string");
        	this.dsSave.addColumn("RM_LICENSE", "string");
        	this.dsSave.addColumn("DT_APPOINT_FR", "string");
        	this.dsSave.addColumn("DT_APPOINT_TO", "string");
        	this.dsSave.addColumn("AM_TOT_DEMAND", "bigdecimal");
        	this.dsSave.addColumn("AM_TOT_COLLECT", "bigdecimal");
        	this.dsSave.addColumn("DT_BID_SUCC", "string");
        	this.dsSave.addColumn("DT_POST_COMPLETE", "string");
        	this.dsSave.addColumn("DIV_PUBPRIV", "string");
        	this.dsSave.addColumn("CD_ZIP", "string");
        	this.dsSave.addColumn("DS_ADDRESS1", "string");
        	this.dsSave.addColumn("DS_ADDRESS2", "string");
        	this.dsSave.addColumn("SIZE_LAND", "bigdecimal");
        	this.dsSave.addColumn("SIZE_BLD_AREA", "bigdecimal");
        	this.dsSave.addColumn("RM_ADMIN", "string");
        	this.dsSave.addColumn("AM_SIHAENG", "bigdecimal");
        	this.dsSave.addColumn("RT_SIHAENG", "bigdecimal");
        	this.dsSave.addColumn("AM_SIGONG", "bigdecimal");
        	this.dsSave.addColumn("RT_SIGONG", "bigdecimal");
        	this.dsSave.addColumn("DS_ATTACHFILE", "string");
        	this.dsSave.addColumn("COND_COLLECT", "string");
        	this.dsSave.addColumn("SIZE_LOWER", "bigdecimal");
        	this.dsSave.addColumn("SIZE_HIGHER", "bigdecimal");
        	this.dsSave.addColumn("SIZE_KINDER", "bigdecimal");
        	this.dsSave.addColumn("DS_STATUS", "string");
        	this.dsSave.addColumn("YN_OH", "string");
        	this.dsSave.addColumn("YN_HAJA", "string");
        	this.dsSave.addColumn("CD_CURRENCY", "string");
        	this.dsSave.addColumn("CD_FIELD_OH", "string");
        	this.dsSave.addColumn("NO_CONTRCT_OH", "string");
        	this.dsSave.addColumn("NO_POLY_CONST_CONTRCT_OH", "string");
        	this.dsSave.addColumn("RT_EXCHANGE", "bigdecimal");
        	this.dsSave.addColumn("AM_TOTAL_OVERSEA", "bigdecimal");
        	this.dsSave.addColumn("RT_OUR_OVERSEA", "bigdecimal");
        	this.dsSave.addColumn("AM_OUR_OVERSEA", "bigdecimal");
        	this.dsSave.addColumn("TY_DESI", "string");
        	this.dsSave.addColumn("CD_BONBU", "string");
        	this.dsSave.addColumn("CD_BUMUN", "string");
        	this.dsSave.addColumn("CD_SAUPCENTER", "string");
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

        // 	this.btnPolyContrct.set_enable(false);
        // 	this.btnChngeContrct.set_enable(false);
        // 	this.btnRcoMng.set_enable(false);
        // 	this.btnClbCoMng.set_enable(false);

        	this.dsSelect.clearData();
        	this.dsSelect.addRow();

        	this.dsSelect.setColumn(0, "TY_WRK", "Q");
        	this.dsSelect.setColumn(0, "CD_FIELD", this.dsSearch.getColumn(0, "CD_SITE"));
        	this.dsSelect.setColumn(0, "NO_CONTRCT", "");
        	this.dsSelect.setColumn(0, "NO_POLY_CONST_CONTRCT", "");

        	var strSvcId    = "select";
        	var strSvcType  = "grid";
        	var inProc		= "_dsProc";
        	var inData      = "select=dsSelect";
        	var outData     = "dsList=select0 dsROW_DESCRIPTION=select1";
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
        	var nrow = this.gfnGridAdd(this.dxGrid, "bottom"); // top (default), bottom, current

        	this.dsList.setColumn(nrow, "NO_CONTRCT", "001");
        	this.dsList.setColumn(nrow, "NO_POLY_CONST_CONTRCT", "000");
        	this.dsList.setColumn(nrow, "YN_EDIT", "Y");
        	this.dsList.setColumn(nrow, "YN_EDIT_COMMON", "Y");

        	this.FormBtns.Add.set_enable(false);
        }

        /*
         *	삭제 버튼
         */
        this.fnDel = function() {
        	this.gfnGridDel(this.dxGrid);

        	if(this.dsList.rowcount != 0)
        	{
        		this.FormBtns.Add.set_enable(false);
        	}

        // 	this.btnPolyContrct.set_enable(false);
        // 	this.btnChngeContrct.set_enable(false);
        // 	this.btnRcoMng.set_enable(false);
        // 	this.btnClbCoMng.set_enable(false);
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
        				this.dsSave.setColumn(nrow, "CD_FIELD", this.dsSearch.getColumn(0, "CD_SITE"));
        				this.dsSave.setColumn(nrow, "NO_CONTRCT", this.dsList.getColumn(i, "NO_CONTRCT"));
        				this.dsSave.setColumn(nrow, "NO_POLY_CONST_CONTRCT", this.dsList.getColumn(i, "NO_POLY_CONST_CONTRCT"));
        				this.dsSave.setColumn(nrow, "NO_CHNGE_CONTRCT", this.dsList.getColumn(i, "NO_CHNGE_CONTRCT"));
        				this.dsSave.setColumn(nrow, "DS_CONST_CONTRCT", this.dsList.getColumn(i, "DS_CONST_CONTRCT"));
        				this.dsSave.setColumn(nrow, "CD_CORP", this.AuthClient.CD_CORP);
        				this.dsSave.setColumn(nrow, "CD_CONST_FIELD", this.dsList.getColumn(i, "CD_CONST_FIELD"));
        				this.dsSave.setColumn(nrow, "CD_CONST_TYPE", this.dsList.getColumn(i, "CD_CONST_TYPE"));
        				this.dsSave.setColumn(nrow, "DIV_CONTRCT", this.dsList.getColumn(i, "DIV_CONTRCT"));
        				this.dsSave.setColumn(nrow, "YN_JUGAN", this.dsList.getColumn(i, "YN_JUGAN"));
        				this.dsSave.setColumn(nrow, "DT_CONTRCT", this.dsList.getColumn(i, "DT_CONTRCT"));
        				this.dsSave.setColumn(nrow, "DT_ST", this.dsList.getColumn(i, "DT_ST"));
        				this.dsSave.setColumn(nrow, "DT_INIT_COMPLETE", this.dsList.getColumn(i, "DT_INIT_COMPLETE"));
        				this.dsSave.setColumn(nrow, "AM_INIT_CONTRCT", this.dsList.getColumn(i, "AM_INIT_CONTRCT"));
        				this.dsSave.setColumn(nrow, "AM_INIT_SUPPLY", this.dsList.getColumn(i, "AM_INIT_SUPPLY"));
        				this.dsSave.setColumn(nrow, "AM_INIT_VAT", this.dsList.getColumn(i, "AM_INIT_VAT"));
        				this.dsSave.setColumn(nrow, "AM_INIT_TXFR_SUPPLY", this.dsList.getColumn(i, "AM_INIT_TXFR_SUPPLY"));
        				this.dsSave.setColumn(nrow, "TY_TAX", this.dsList.getColumn(i, "TY_TAX"));
        				this.dsSave.setColumn(nrow, "RT_TAX", this.dsList.getColumn(i, "RT_TAX"));
        				this.dsSave.setColumn(nrow, "RT_TAXFREE", this.dsList.getColumn(i, "RT_TAXFREE"));
        				this.dsSave.setColumn(nrow, "RT_PORTION_OUR", this.dsList.getColumn(i, "RT_PORTION_OUR"));
        				this.dsSave.setColumn(nrow, "AM_INIT_CONT_OUR", this.dsList.getColumn(i, "AM_INIT_CONT_OUR"));
        				this.dsSave.setColumn(nrow, "AM_INIT_SUPPLY_OUR", this.dsList.getColumn(i, "AM_INIT_SUPPLY_OUR"));
        				this.dsSave.setColumn(nrow, "AM_INIT_VAT_OUR", this.dsList.getColumn(i, "AM_INIT_VAT_OUR"));
        				this.dsSave.setColumn(nrow, "AM_INIT_TXFR_SUPPLY_OUR", this.dsList.getColumn(i, "AM_INIT_TXFR_SUPPLY_OUR"));
        				this.dsSave.setColumn(nrow, "RT_PORTION_OUR2", this.dsList.getColumn(i, "RT_PORTION_OUR2"));
        				this.dsSave.setColumn(nrow, "AM_INIT_CONT_OUR2", this.dsList.getColumn(i, "AM_INIT_CONT_OUR2"));
        				this.dsSave.setColumn(nrow, "AM_INIT_SUPPLY_OUR2", this.dsList.getColumn(i, "AM_INIT_SUPPLY_OUR2"));
        				this.dsSave.setColumn(nrow, "AM_INIT_VAT_OUR2", this.dsList.getColumn(i, "AM_INIT_VAT_OUR2"));
        				this.dsSave.setColumn(nrow, "AM_INIT_TXFR_SUPPLY_OUR2", this.dsList.getColumn(i, "AM_INIT_TXFR_SUPPLY_OUR2"));
        				this.dsSave.setColumn(nrow, "RT_PORTION_PART", this.dsList.getColumn(i, "RT_PORTION_PART"));
        				this.dsSave.setColumn(nrow, "AM_INIT_CONT_PART", this.dsList.getColumn(i, "AM_INIT_CONT_PART"));
        				this.dsSave.setColumn(nrow, "AM_INIT_SUPPLY_PART", this.dsList.getColumn(i, "AM_INIT_SUPPLY_PART"));
        				this.dsSave.setColumn(nrow, "AM_INIT_VAT_PART", this.dsList.getColumn(i, "AM_INIT_VAT_PART"));
        				this.dsSave.setColumn(nrow, "AM_INIT_TXFR_SUPPLY_PART", this.dsList.getColumn(i, "AM_INIT_TXFR_SUPPLY_PART"));
        				this.dsSave.setColumn(nrow, "RM_SCALE", this.dsList.getColumn(i, "RM_SCALE"));
        				this.dsSave.setColumn(nrow, "CD_CONTRACT_DEPT1", this.dsList.getColumn(i, "CD_CONTRACT_DEPT1"));
        				this.dsSave.setColumn(nrow, "CD_CONTRACT_DEPT2", this.dsList.getColumn(i, "CD_CONTRACT_DEPT2"));
        				this.dsSave.setColumn(nrow, "CD_CONTRACT_DEPT3", this.dsList.getColumn(i, "CD_CONTRACT_DEPT3"));
        				this.dsSave.setColumn(nrow, "DT_COMPL_INSPECT", this.dsList.getColumn(i, "DT_COMPL_INSPECT"));
        				this.dsSave.setColumn(nrow, "AM_CHNGE_CONTRCT", this.dsList.getColumn(i, "AM_CHNGE_CONTRCT"));
        				this.dsSave.setColumn(nrow, "AM_CHNGE_SUPPLY", this.dsList.getColumn(i, "AM_CHNGE_SUPPLY"));
        				this.dsSave.setColumn(nrow, "AM_CHNGE_VAT", this.dsList.getColumn(i, "AM_CHNGE_VAT"));
        				this.dsSave.setColumn(nrow, "AM_CHNGE_TXFR_SUPPLY", this.dsList.getColumn(i, "AM_CHNGE_TXFR_SUPPLY"));
        				this.dsSave.setColumn(nrow, "RT_PORTION_PART2", this.dsList.getColumn(i, "RT_PORTION_PART2"));
        				this.dsSave.setColumn(nrow, "AM_INIT_CONT_PART2", this.dsList.getColumn(i, "AM_INIT_CONT_PART2"));
        				this.dsSave.setColumn(nrow, "AM_INIT_SUPPLY_PART2", this.dsList.getColumn(i, "AM_INIT_SUPPLY_PART2"));
        				this.dsSave.setColumn(nrow, "AM_INIT_VAT_PART2", this.dsList.getColumn(i, "AM_INIT_VAT_PART2"));
        				this.dsSave.setColumn(nrow, "AM_INIT_TXFR_SUPPLY_PART2", this.dsList.getColumn(i, "AM_INIT_TXFR_SUPPLY_PART2"));
        				this.dsSave.setColumn(nrow, "AM_CHNGE_CONT_OUR", this.dsList.getColumn(i, "AM_CHNGE_CONT_OUR"));
        				this.dsSave.setColumn(nrow, "AM_CHNGE_SUPPLY_OUR", this.dsList.getColumn(i, "AM_CHNGE_SUPPLY_OUR"));
        				this.dsSave.setColumn(nrow, "AM_CHNGE_VAT_OUR", this.dsList.getColumn(i, "AM_CHNGE_VAT_OUR"));
        				this.dsSave.setColumn(nrow, "AM_CHNGE_TXFR_SUPPLY_OUR", this.dsList.getColumn(i, "AM_CHNGE_TXFR_SUPPLY_OUR"));
        				this.dsSave.setColumn(nrow, "AM_CHNGE_CONT_PART", this.dsList.getColumn(i, "AM_CHNGE_CONT_PART"));
        				this.dsSave.setColumn(nrow, "AM_CHNGE_SUPPLY_PART", this.dsList.getColumn(i, "AM_CHNGE_SUPPLY_PART"));
        				this.dsSave.setColumn(nrow, "AM_CHNGE_VAT_PART", this.dsList.getColumn(i, "AM_CHNGE_VAT_PART"));
        				this.dsSave.setColumn(nrow, "AM_CHNGE_TXFR_SUPPLY_PART", this.dsList.getColumn(i, "AM_CHNGE_TXFR_SUPPLY_PART"));
        				this.dsSave.setColumn(nrow, "AM_CONT_GUARANTEE", this.dsList.getColumn(i, "AM_CONT_GUARANTEE"));
        				this.dsSave.setColumn(nrow, "AM_TOTAL_WITH", this.dsList.getColumn(i, "AM_TOTAL_WITH"));
        				this.dsSave.setColumn(nrow, "AM_TOTAL_PART", this.dsList.getColumn(i, "AM_TOTAL_PART"));
        				this.dsSave.setColumn(nrow, "DT_GRT_FR", this.dsList.getColumn(i, "DT_GRT_FR"));
        				this.dsSave.setColumn(nrow, "DT_GRT_TO", this.dsList.getColumn(i, "DT_GRT_TO"));
        				this.dsSave.setColumn(nrow, "NO_REGIST_SEAL", this.dsList.getColumn(i, "NO_REGIST_SEAL"));
        				this.dsSave.setColumn(nrow, "RT_DELAY_COMPENSATION", this.dsList.getColumn(i, "RT_DELAY_COMPENSATION"));
        				this.dsSave.setColumn(nrow, "AM_DESIGN", this.dsList.getColumn(i, "AM_DESIGN"));
        				this.dsSave.setColumn(nrow, "RT_DESG_SUCCBID", this.dsList.getColumn(i, "RT_DESG_SUCCBID"));
        				this.dsSave.setColumn(nrow, "AM_ESTIMATE", this.dsList.getColumn(i, "AM_ESTIMATE"));
        				this.dsSave.setColumn(nrow, "RT_ESTM_SUCCBID", this.dsList.getColumn(i, "RT_ESTM_SUCCBID"));
        				this.dsSave.setColumn(nrow, "ID_FIELD_AGENCY", this.dsList.getColumn(i, "ID_FIELD_AGENCY"));
        				this.dsSave.setColumn(nrow, "RM_LICENSE", this.dsList.getColumn(i, "RM_LICENSE"));
        				this.dsSave.setColumn(nrow, "DT_APPOINT_FR", this.dsList.getColumn(i, "DT_APPOINT_FR"));
        				this.dsSave.setColumn(nrow, "DT_APPOINT_TO", this.dsList.getColumn(i, "DT_APPOINT_TO"));
        				this.dsSave.setColumn(nrow, "AM_TOT_DEMAND", this.dsList.getColumn(i, "AM_TOT_DEMAND"));
        				this.dsSave.setColumn(nrow, "AM_TOT_COLLECT", this.dsList.getColumn(i, "AM_TOT_COLLECT"));
        				this.dsSave.setColumn(nrow, "DT_BID_SUCC", this.dsList.getColumn(i, "DT_BID_SUCC"));
        				this.dsSave.setColumn(nrow, "DT_POST_COMPLETE", this.dsList.getColumn(i, "DT_POST_COMPLETE"));
        				this.dsSave.setColumn(nrow, "DIV_PUBPRIV", this.dsList.getColumn(i, "DIV_PUBPRIV"));
        				this.dsSave.setColumn(nrow, "CD_ZIP", this.dsList.getColumn(i, "CD_ZIP"));
        				this.dsSave.setColumn(nrow, "DS_ADDRESS1", this.dsList.getColumn(i, "DS_ADDRESS1"));
        				this.dsSave.setColumn(nrow, "DS_ADDRESS2", this.dsList.getColumn(i, "DS_ADDRESS2"));
        				this.dsSave.setColumn(nrow, "SIZE_LAND", this.dsList.getColumn(i, "SIZE_LAND"));
        				this.dsSave.setColumn(nrow, "SIZE_BLD_AREA", this.dsList.getColumn(i, "SIZE_BLD_AREA"));
        				this.dsSave.setColumn(nrow, "RM_ADMIN", this.dsList.getColumn(i, "RM_ADMIN"));
        				this.dsSave.setColumn(nrow, "AM_SIHAENG", this.dsList.getColumn(i, "AM_SIHAENG"));
        				this.dsSave.setColumn(nrow, "RT_SIHAENG", this.dsList.getColumn(i, "RT_SIHAENG"));
        				this.dsSave.setColumn(nrow, "AM_SIGONG", this.dsList.getColumn(i, "AM_SIGONG"));
        				this.dsSave.setColumn(nrow, "RT_SIGONG", this.dsList.getColumn(i, "RT_SIGONG"));
        				this.dsSave.setColumn(nrow, "DS_ATTACHFILE", this.dsList.getColumn(i, "DS_ATTACHFILE"));
        				this.dsSave.setColumn(nrow, "COND_COLLECT", this.dsList.getColumn(i, "COND_COLLECT"));
        				this.dsSave.setColumn(nrow, "SIZE_LOWER", this.dsList.getColumn(i, "SIZE_LOWER"));
        				this.dsSave.setColumn(nrow, "SIZE_HIGHER", this.dsList.getColumn(i, "SIZE_HIGHER"));
        				this.dsSave.setColumn(nrow, "SIZE_KINDER", this.dsList.getColumn(i, "SIZE_KINDER"));
        				this.dsSave.setColumn(nrow, "DS_STATUS", this.dsList.getColumn(i, "DS_STATUS"));
        				this.dsSave.setColumn(nrow, "YN_OH", this.dsList.getColumn(i, "YN_OH"));
        				this.dsSave.setColumn(nrow, "YN_HAJA", this.dsList.getColumn(i, "YN_HAJA"));
        				this.dsSave.setColumn(nrow, "CD_CURRENCY", this.dsList.getColumn(i, "CD_CURRENCY"));
        				this.dsSave.setColumn(nrow, "CD_FIELD_OH", this.dsList.getColumn(i, "CD_FIELD_OH"));
        				this.dsSave.setColumn(nrow, "NO_CONTRCT_OH", this.dsList.getColumn(i, "NO_CONTRCT_OH"));
        				this.dsSave.setColumn(nrow, "NO_POLY_CONST_CONTRCT_OH", this.dsList.getColumn(i, "NO_POLY_CONST_CONTRCT_OH"));
        				this.dsSave.setColumn(nrow, "RT_EXCHANGE", this.dsList.getColumn(i, "RT_EXCHANGE"));
        				this.dsSave.setColumn(nrow, "AM_TOTAL_OVERSEA", this.dsList.getColumn(i, "AM_TOTAL_OVERSEA"));
        				this.dsSave.setColumn(nrow, "RT_OUR_OVERSEA", this.dsList.getColumn(i, "RT_OUR_OVERSEA"));
        				this.dsSave.setColumn(nrow, "AM_OUR_OVERSEA", this.dsList.getColumn(i, "AM_OUR_OVERSEA"));
        				this.dsSave.setColumn(nrow, "TY_DESI", this.dsList.getColumn(i, "TY_DESI"));
        				this.dsSave.setColumn(nrow, "CD_BONBU", this.dsList.getColumn(i, "CD_BONBU"));
        				this.dsSave.setColumn(nrow, "CD_BUMUN", this.dsList.getColumn(i, "CD_BUMUN"));
        				this.dsSave.setColumn(nrow, "CD_SAUPCENTER", this.dsList.getColumn(i, "CD_SAUPCENTER"));
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

        		// 조회 데이터가 없는 경우에만 입력 가능.
        		if(this.dsList.rowcount < 1)
        		{
        			this.FormBtns.Add.set_enable(true);
        			this.btnContrct.set_enable(true);
        		}
        		else
        		{
        			this.FormBtns.Add.set_enable(false);
        			this.btnContrct.set_enable(false);
        		}

        		this.fnBtnCheckAll();

        // 		this.btnPolyContrct.set_enable(false);
        // 		this.btnChngeContrct.set_enable(false);
        // 		this.btnRcoMng.set_enable(false);
        // 		this.btnClbCoMng.set_enable(false);

        		if(this.dsROW_DESCRIPTION.rowcount > 0)
        		{
        			var colDS_CONST_CONTRCT = this.dxGrid.getBindCellIndex("body", "DS_CONST_CONTRCT")
        			this.dxGrid.setCellProperty("summ", colDS_CONST_CONTRCT, "textAlign", "center");
        			this.dxGrid.setCellProperty("summ", colDS_CONST_CONTRCT, "text", this.dsROW_DESCRIPTION.getColumn(0, "DS_SUMDESCRIPTION"));
        		}

        // 		// 총계 row에 캡션 셋팅(기본은 [합계]로 되어있음)
        // 		var colDS_CONST_CONTRCT = this.dxGrid.getBindCellIndex("body", "DS_CONST_CONTRCT");
        // 		this.dxGrid.setCellProperty("summary", colDS_CONST_CONTRCT, "text", "최종계약금액");
        //
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
        this.fnBeforeUserDataSetParam = function(id, dsUserParam, nrow)
         {
        	if(id == "ccfCD_SITE")
        	{
        		dsUserParam.setColumn(nrow, "CD_CORP", this.AuthClient.CD_CORP);
        		dsUserParam.setColumn(nrow, "CD_DEPT", this.AuthClient.CD_DEPT);
        		dsUserParam.setColumn(nrow, "ID_USER", this.AuthClient.ID_USER);
        		dsUserParam.setColumn(nrow, "GR_SEARCH", this.FormInfo.GR_SEARCH);
        		dsUserParam.setColumn(nrow, "CD_ROLE", this.FormInfo.CD_ROLE);
        		dsUserParam.setColumn(nrow, "ID_FORM", this.FormInfo.ID_FORM);
        	}
        	return true;
         }


        /************************************************************************
         * 그리드 이벤트
         ************************************************************************/
         this.fnGrid_RowCellChanged = function(obj,e)
        {
             if (e.row != e.oldrow) {

        // 		this.btnPolyContrct.set_enable(false);
        // 		this.btnChngeContrct.set_enable(false);
        // 		this.btnRcoMng.set_enable(false);
        // 		this.btnClbCoMng.set_enable(false);

        		for(var i = 0 ; i < this.dsList.rowcount; i++)
        		{
        			var flag = this.gfnGetFlag(this.dsList, i);
        			if(flag == "I" || flag == "U" || flag == "D")
        				return;
        		}

        		this.fnBtnCheckAll();

        // 		if(this.dsList.getColumn(e.row, "BTN_POLY_CONTRCT") == "Y")
        // 		{
        // 			this.btnPolyContrct.set_enable(true);
        // 		}
        //
        // 		if(this.dsList.getColumn(e.row, "BTN_CHNGE_CONTRCT") == "Y")
        // 		{
        // 			this.btnChngeContrct.set_enable(true);
        // 		}
        //
        // 		if(this.dsList.getColumn(e.row, "BTN_RCOMNG") == "Y")
        // 		{
        // 			this.btnRcoMng.set_enable(true);
        // 		}
        //
        // 		if(this.dsList.getColumn(e.row, "BTN_CLBCOMNG") == "Y")
        // 		{
        // 			this.btnClbCoMng.set_enable(true);
        // 		}
        //
        	}
        };

        this.fnGrid_EnterCell = function(obj, row, cell) {
        	// 수정가능 true, false 처리하려는 컬럼에 대해서만 return 처리할것.
        	var colnm = this.gfnGridGetBindColumnNameByIndex(this.dxGrid, cell); // 클릭한 cell의 컬럼명

        	// 공사부문(CD_CONST_FIELD), 공사종류(CD_CONST_TYPE), 수주구분(DIV_CONTRCT), 주간사(YN_JUGAN) 컬럼 수정여부체크
            // 1) 조회컬럼 YN_EDIT_COMMON = 'Y' 인 경우 수정가능처리 이외 수정불가
            // 2) 기준 YN_EDIT = 'Y' 인 경우 적용처리 아닌경우 수정불가

        	// 클릭했을때 클릭한 cell을 수정 가능 or 불가능 상태로 만든다.
        	// YN_EDIT_COMMON 값이 Y일때만 수정가능상태

        	if(colnm == "CD_CONST_FIELD" || colnm == "CD_CONST_TYPE" || colnm == "DIV_CONTRCT" || colnm =="YN_JUGAN") {
        		if(this.dsList.getColumn(row, "YN_EDIT_COMMON") == "Y") {
        			return true;
        		} else {
        			return false;
        		}
        	}
        	else if(colnm == "DT_ST" || colnm == "TY_TAX" || colnm == "RT_TAX" || colnm == "RT_TAXFREE"){
        		if(this.dsList.getColumn(row, "YN_EDIT_COMMON") == "Y") {
        			if(this.dsList.getColumn(row, "YN_EDIT") == "Y") {
        				return true;
        			}else{
        				return false;
        			}
        		} else {
        			return false;
        		}
        	}
        	// 그리드 셋팅 YN_EDIT 컬럼 읽기전용 !='Y' 으로 자동 처리됨.
        // 		if(this.dsList.getColumn(row, "YN_EDIT") != "Y") {
        // 			return false;
        // 		}

        }

        	/*
        		// 클릭했을때 클릭한 cell을 수정 가능 or 불가능 상태로 만든다.
        		// YN_EDIT 값이 Y일때만 수정가능상태

         		if(this.dsList.getColumn(row, "YN_EDIT") == "N") {
         			return false;
         		}

        		// 최초 등록건만 아래 컬럼 수정 가능.
        		var isCheck = ( this.dsList.getColumn(row, "NO_CONTRCT") == "001"
        						&& this.dsList.getColumn(row, "NO_POLY_CONST_CONTRCT") == "000"
        						&& this.dsList.getColumn(row, "NO_CHNGE_CONTRCT") == ""
        					  );

        		if(isCheck == false)
        		{
        			if(colnm == "CD_CONST_FIELD" || colnm == "CD_CONST_TYPE"
        				|| colnm == "DIV_CONTRCT" || colnm =="YN_JUGAN")
        			{
        				return false;
        			}
        		}

        	return true;
        	*/

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

        // 아래부터는 확장버튼.
        this.fnPolyContrct = function(obj,e) {
        	var rowposition = this.dsList.rowposition;
        	var nrow = this.gfnGridAdd(this.dxGrid, "bottom");

        	this.dsList.setColumn(nrow, "DS_CONST_CONTRCT", this.dsList.getColumn(rowposition, "DS_CONST_CONTRCT"));
        	this.dsList.setColumn(nrow, "NO_CONTRCT", this.dsList.getColumn(rowposition, "NO_CONTRCT"));
        	this.dsList.setColumn(nrow, "NO_POLY_CONST_CONTRCT", this.dsList.getColumn(rowposition, "NO_POLY_CONST_CONTRCT_NEW"));
        	this.dsList.setColumn(nrow, "CD_CONST_FIELD", this.dsList.getColumn(rowposition, "CD_CONST_FIELD"));
        	this.dsList.setColumn(nrow, "CD_CONST_TYPE", this.dsList.getColumn(rowposition, "CD_CONST_TYPE"));
        	this.dsList.setColumn(nrow, "DIV_CONTRCT", this.dsList.getColumn(rowposition, "DIV_CONTRCT"));
        	this.dsList.setColumn(nrow, "YN_JUGAN", this.dsList.getColumn(rowposition, "YN_JUGAN"));
        	this.dsList.setColumn(nrow, "DT_ST", this.dsList.getColumn(rowposition, "DT_ST"));
        	this.dsList.setColumn(nrow, "TY_TAX", this.dsList.getColumn(rowposition, "TY_TAX"));
        	this.dsList.setColumn(nrow, "RT_TAX", this.dsList.getColumn(rowposition, "RT_TAX"));
        	this.dsList.setColumn(nrow, "RT_TAXFREE", this.dsList.getColumn(rowposition, "RT_TAXFREE"));
        	this.dsList.setColumn(nrow, "YN_EDIT_COMMON", "N");


        	this.FormBtns.Add.set_enable(false);

        }

        this.fnChngeContrct = function(obj,e) {
        	var rowposition = this.dsList.rowposition;
        	var nrow = this.gfnGridAdd(this.dxGrid, "bottom");

        	this.dsList.setColumn(nrow, "DS_CONST_CONTRCT", this.dsList.getColumn(rowposition, "DS_CONST_CONTRCT"));
        	this.dsList.setColumn(nrow, "NO_CONTRCT", this.dsList.getColumn(rowposition, "NO_CONTRCT"));
        	this.dsList.setColumn(nrow, "NO_POLY_CONST_CONTRCT", this.dsList.getColumn(rowposition, "NO_POLY_CONST_CONTRCT"));
        	this.dsList.setColumn(nrow, "NO_CHNGE_CONTRCT", this.dsList.getColumn(rowposition, "NO_CHNGE_CONTRCT_NEW"));
        	this.dsList.setColumn(nrow, "CD_CONST_FIELD", this.dsList.getColumn(rowposition, "CD_CONST_FIELD"));
        	this.dsList.setColumn(nrow, "CD_CONST_TYPE", this.dsList.getColumn(rowposition, "CD_CONST_TYPE"));
        	this.dsList.setColumn(nrow, "DIV_CONTRCT", this.dsList.getColumn(rowposition, "DIV_CONTRCT"));
        	this.dsList.setColumn(nrow, "YN_JUGAN", this.dsList.getColumn(rowposition, "YN_JUGAN"));
        	this.dsList.setColumn(nrow, "TY_TAX", this.dsList.getColumn(rowposition, "TY_TAX"));
        	this.dsList.setColumn(nrow, "RT_TAX", this.dsList.getColumn(rowposition, "RT_TAX"));
        	this.dsList.setColumn(nrow, "RT_TAXFREE", this.dsList.getColumn(rowposition, "RT_TAXFREE"));
        	this.dsList.setColumn(nrow, "YN_EDIT_COMMON", "N");

        	this.dsList.setColumn(nrow, "RT_PORTION_OUR", this.dsList.getColumn(rowposition, "RT_PORTION_OUR"));
        	this.dsList.setColumn(nrow, "RT_PORTION_OUR2", this.dsList.getColumn(rowposition, "RT_PORTION_OUR2"));
        	this.dsList.setColumn(nrow, "DT_ST", this.dsList.getColumn(rowposition, "DT_ST"));
        	this.dsList.setColumn(nrow, "DT_INIT_COMPLETE", this.dsList.getColumn(rowposition, "DT_INIT_COMPLETE"));

        	this.FormBtns.Add.set_enable(false);
        }

        this.fnRcoMng = function(obj,e) {
        	var param = {};

        	param.CD_SITE = this.dsSearch.getColumn(0, "CD_SITE");
        	param.DS_SITE = this.divSearch.form.ccfCD_SITE.form.DSTextBox.text;

        	if(this.dsList.rowposition > -1){
        		param.NO_CONTRCT = this.dsList.getColumn(this.dsList.rowposition, "NO_CONTRCT");
        		param.NO_POLY_CONST_CONTRCT = this.dsList.getColumn(this.dsList.rowposition, "NO_POLY_CONST_CONTRCT");
        	}

        	this.gfnFormOpen("DWU", "DWU_RCOMNG", "", param);
        }

        this.fnClbCoMng = function(obj,e) {
        	var param = {};

        	param.CD_SITE = this.dsSearch.getColumn(0, "CD_SITE");
        	param.DS_SITE = this.divSearch.form.ccfCD_SITE.form.DSTextBox.text;

        	if(this.dsList.rowposition > -1){
        		param.NO_CONTRCT = this.dsList.getColumn(this.dsList.rowposition, "NO_CONTRCT");
        		param.NO_POLY_CONST_CONTRCT = this.dsList.getColumn(this.dsList.rowposition, "NO_POLY_CONST_CONTRCT");
        	}

        	this.gfnFormOpen("DWU", "DWU_CLBCOMNG", "", param);
        }

        this.fnContrct = function(obj,e) {
        	var nrow = this.gfnGridAdd(this.dxGrid, "bottom"); // top (default), bottom, current

        	this.dsList.setColumn(nrow, "NO_CONTRCT", "001");
        	this.dsList.setColumn(nrow, "NO_POLY_CONST_CONTRCT", "000");
        	this.dsList.setColumn(nrow, "YN_EDIT", "Y");
        	this.dsList.setColumn(nrow, "YN_EDIT_COMMON", "Y");

        	this.FormBtns.Add.set_enable(false);
        }

        // 자동산식을 fnGrid_AfterEdit에서 dsList_onvaluechanged로 변경.
        // 자동산식 도중에 연달아서 changed 이벤트가 발생하여야하나 fnGrid_AfterEdit으로 하면 연달아서 발생되지 않음.
        // 자동 산식 처리.
        this.dsList_onvaluechanged = function(obj,e)
        {
        	if(e.oldvalue != e.newvalue)
        	{
        		var nrow = this.dsList.rowposition;

        		if(e.columnid == "AM_INIT_SUPPLY")
        		{
        			var AM_INIT_SUPPLY = nexacro.toNumber(e.newvalue, 0);
        			var AM_INIT_VAT = AM_INIT_SUPPLY * 0.1;
        			var AM_INIT_TXFR_SUPPLY = nexacro.toNumber(this.dsList.getColumn(nrow, "AM_INIT_TXFR_SUPPLY"), 0);

        			this.dsList.setColumn(nrow, "AM_INIT_VAT", AM_INIT_VAT);
        			this.dsList.setColumn(nrow, "AM_INIT_CONTRCT", AM_INIT_SUPPLY + AM_INIT_VAT + AM_INIT_TXFR_SUPPLY);

        			var RT_PORTION_OUR = this.dsList.getColumn(nrow, "RT_PORTION_OUR");
        			// 당사 공급가 = 변경 공급가 * 당사 지분율 * 0.01
        			this.dsList.setColumn(nrow, "AM_INIT_SUPPLY_OUR", AM_INIT_SUPPLY * RT_PORTION_OUR * 0.01);

        			var AM_INIT_SUPPLY_OUR = this.dsList.getColumn(nrow, "AM_INIT_SUPPLY_OUR");
        			// 타사 공급가 = 변경 공급가 - 당사 공급가
        			this.dsList.setColumn(nrow, "AM_INIT_SUPPLY_OUR2", AM_INIT_SUPPLY - AM_INIT_SUPPLY_OUR);

        		}
        		else if(e.columnid == "AM_INIT_VAT")
        		{
        			var AM_INIT_SUPPLY = nexacro.toNumber(this.dsList.getColumn(nrow, "AM_INIT_SUPPLY"), 0);
        			var AM_INIT_VAT = nexacro.toNumber(e.newvalue, 0);
        			var AM_INIT_TXFR_SUPPLY = nexacro.toNumber(this.dsList.getColumn(nrow, "AM_INIT_TXFR_SUPPLY"), 0);

        			this.dsList.setColumn(nrow, "AM_INIT_CONTRCT", AM_INIT_SUPPLY + AM_INIT_VAT + AM_INIT_TXFR_SUPPLY);

        			var AM_INIT_VAT_OUR = nexacro.toNumber(this.dsList.getColumn(nrow, "AM_INIT_VAT_OUR"), 0);
        			this.dsList.setColumn(nrow, "AM_INIT_VAT_OUR2", AM_INIT_VAT - AM_INIT_VAT_OUR);

        		}
        		else if(e.columnid == "AM_INIT_TXFR_SUPPLY")
        		{
        			var AM_INIT_SUPPLY = nexacro.toNumber(this.dsList.getColumn(nrow, "AM_INIT_SUPPLY"), 0);
        			var AM_INIT_VAT =  nexacro.toNumber(this.dsList.getColumn(nrow, "AM_INIT_VAT"), 0);
        			var AM_INIT_TXFR_SUPPLY = nexacro.toNumber(e.newvalue, 0);

        			this.dsList.setColumn(nrow, "AM_INIT_CONTRCT", AM_INIT_SUPPLY + AM_INIT_VAT + AM_INIT_TXFR_SUPPLY);

         			var RT_PORTION_OUR = nexacro.toNumber(this.dsList.getColumn(nrow, "RT_PORTION_OUR"));
         			this.dsList.setColumn(nrow, "AM_INIT_TXFR_SUPPLY_OUR", AM_INIT_TXFR_SUPPLY * RT_PORTION_OUR * 0.01);

        			var AM_INIT_TXFR_SUPPLY_OUR = nexacro.toNumber(this.dsList.getColumn(nrow, "AM_INIT_TXFR_SUPPLY_OUR"));
         			this.dsList.setColumn(nrow, "AM_INIT_TXFR_SUPPLY_OUR2", AM_INIT_TXFR_SUPPLY - AM_INIT_TXFR_SUPPLY_OUR);
        		}
        		else if(e.columnid == "AM_INIT_SUPPLY_OUR")
        		{
        			var AM_INIT_SUPPLY_OUR = nexacro.toNumber(e.newvalue, 0);
        			var AM_INIT_VAT_OUR = AM_INIT_SUPPLY_OUR * 0.1;
        			this.dsList.setColumn(nrow, "AM_INIT_VAT_OUR", AM_INIT_VAT_OUR);
        			var AM_INIT_TXFR_SUPPLY_OUR = nexacro.toNumber(this.dsList.getColumn(nrow, "AM_INIT_TXFR_SUPPLY_OUR"), 0);
        			this.dsList.setColumn(nrow, "AM_INIT_CONT_OUR", AM_INIT_SUPPLY_OUR + AM_INIT_VAT_OUR + AM_INIT_TXFR_SUPPLY_OUR);

        			var AM_INIT_SUPPLY = this.dsList.getColumn(nrow, "AM_INIT_SUPPLY");
        			// 타사 공급가 = 변경 공급가 - 당사 공급가
        			this.dsList.setColumn(nrow, "AM_INIT_SUPPLY_OUR2", AM_INIT_SUPPLY - AM_INIT_SUPPLY_OUR);
        		}
        		else if(e.columnid == "AM_INIT_VAT_OUR")
        		{
        			var AM_INIT_SUPPLY_OUR = nexacro.toNumber(this.dsList.getColumn(nrow, "AM_INIT_SUPPLY_OUR"), 0);
        			var AM_INIT_VAT_OUR = nexacro.toNumber(e.newvalue, 0);
        			var AM_INIT_TXFR_SUPPLY_OUR =  nexacro.toNumber(this.dsList.getColumn(nrow, "AM_INIT_TXFR_SUPPLY_OUR"), 0);
        			this.dsList.setColumn(nrow, "AM_INIT_CONT_OUR", AM_INIT_SUPPLY_OUR + AM_INIT_VAT_OUR + AM_INIT_TXFR_SUPPLY_OUR);

        			var AM_INIT_VAT = nexacro.toNumber(this.dsList.getColumn(nrow, "AM_INIT_VAT"), 0);
        			this.dsList.setColumn(nrow, "AM_INIT_VAT_OUR2", AM_INIT_VAT - AM_INIT_VAT_OUR);
        		}
        		else if(e.columnid == "AM_INIT_TXFR_SUPPLY_OUR")
        		{
        			var AM_INIT_SUPPLY_OUR = nexacro.toNumber(this.dsList.getColumn(nrow, "AM_INIT_SUPPLY_OUR"), 0);
        			var AM_INIT_VAT_OUR = nexacro.toNumber(this.dsList.getColumn(nrow, "AM_INIT_VAT_OUR"), 0);
        			var AM_INIT_TXFR_SUPPLY_OUR = nexacro.toNumber(e.newvalue, 0);
        			this.dsList.setColumn(nrow, "AM_INIT_CONT_OUR", AM_INIT_SUPPLY_OUR + AM_INIT_VAT_OUR + AM_INIT_TXFR_SUPPLY_OUR);

        			var AM_INIT_TXFR_SUPPLY = nexacro.toNumber(this.dsList.getColumn(nrow, "AM_INIT_TXFR_SUPPLY"), 0);
        			this.dsList.setColumn(nrow, "AM_INIT_TXFR_SUPPLY_OUR2", AM_INIT_TXFR_SUPPLY - AM_INIT_TXFR_SUPPLY_OUR);
        		}
        		else if(e.columnid == "AM_INIT_SUPPLY_OUR2")
        		{
        			var AM_INIT_SUPPLY_OUR2 = nexacro.toNumber(e.newvalue, 0);
        			//var AM_INIT_VAT_OUR2 = AM_INIT_SUPPLY_OUR2 * 0.1;
        			var AM_INIT_VAT_OUR2 = nexacro.toNumber(this.dsList.getColumn(nrow, "AM_INIT_VAT_OUR2"), 0);
        			//this.dsList.setColumn(nrow, "AM_INIT_VAT_OUR2", AM_INIT_VAT_OUR2);
        			var AM_INIT_TXFR_SUPPLY_OUR2 = nexacro.toNumber(this.dsList.getColumn(nrow, "AM_INIT_TXFR_SUPPLY_OUR2"), 0);
        			this.dsList.setColumn(nrow, "AM_INIT_CONT_OUR2", AM_INIT_SUPPLY_OUR2 + AM_INIT_VAT_OUR2 + AM_INIT_TXFR_SUPPLY_OUR2);
        		}
        		else if(e.columnid == "AM_INIT_VAT_OUR2")
        		{
        			var AM_INIT_SUPPLY_OUR2 = nexacro.toNumber(this.dsList.getColumn(nrow, "AM_INIT_SUPPLY_OUR2"), 0);
        			var AM_INIT_VAT_OUR2 = nexacro.toNumber(e.newvalue, 0);
        			var AM_INIT_TXFR_SUPPLY_OUR2 =  nexacro.toNumber(this.dsList.getColumn(nrow, "AM_INIT_TXFR_SUPPLY_OUR2"), 0);
        			this.dsList.setColumn(nrow, "AM_INIT_CONT_OUR2", AM_INIT_SUPPLY_OUR2 + AM_INIT_VAT_OUR2 + AM_INIT_TXFR_SUPPLY_OUR2);
        		}
        		else if(e.columnid == "AM_INIT_TXFR_SUPPLY_OUR2")
        		{
        			var AM_INIT_SUPPLY_OUR2 = nexacro.toNumber(this.dsList.getColumn(nrow, "AM_INIT_SUPPLY_OUR2"), 0);
        			var AM_INIT_VAT_OUR2 = nexacro.toNumber(this.dsList.getColumn(nrow, "AM_INIT_VAT_OUR2"), 0);
        			var AM_INIT_TXFR_SUPPLY_OUR2 = nexacro.toNumber(e.newvalue, 0);
        			this.dsList.setColumn(nrow, "AM_INIT_CONT_OUR2", AM_INIT_SUPPLY_OUR2 + AM_INIT_VAT_OUR2 + AM_INIT_TXFR_SUPPLY_OUR2);
        		}
        		else if(e.columnid == "TY_TAX")
        		{
        			var RT_TAX = 100;
        			var RT_TAXFREE = 0;
        			switch(e.newvalue)
        			{
        				case "T" :
        				case "Z" :
        					break;
        				case "F" :
        					RT_TAX = 0; RT_TAXFREE = 100; break;
        				case "C" :
        					RT_TAX = 0; RT_TAXFREE = 0; break;
        			}

        			this.dsList.setColumn(nrow, "RT_TAX", RT_TAX);
        			this.dsList.setColumn(nrow, "RT_TAXFREE", RT_TAXFREE);
        		}
        		else if(e.columnid == "RT_PORTION_OUR") // 당사 지분율
        		{
        			var AM_INIT_SUPPLY = this.dsList.getColumn(nrow, "AM_INIT_SUPPLY");
        			var AM_INIT_TXFR_SUPPLY = this.dsList.getColumn(nrow, "AM_INIT_TXFR_SUPPLY");
        			var RT_PORTION_OUR = nexacro.toNumber(e.newvalue, 0);

        			this.dsList.setColumn(nrow, "AM_INIT_SUPPLY_OUR", AM_INIT_SUPPLY * RT_PORTION_OUR * 0.01);
        			this.dsList.setColumn(nrow, "AM_INIT_TXFR_SUPPLY_OUR", AM_INIT_TXFR_SUPPLY * RT_PORTION_OUR * 0.01);
        			this.dsList.setColumn(nrow, "RT_PORTION_OUR2", 100.0 - RT_PORTION_OUR);
        		}
        	}
        };

        this.fnBtnCheckAll = function()
        {
        	this.gfnBtnCheck(this.btnContrct, this.dsList);
        	this.gfnBtnCheck(this.btnPolyContrct, this.dsList);
        	this.gfnBtnCheck(this.btnChngeContrct, this.dsList);
        	this.gfnBtnCheck(this.btnRcoMng, this.dsList);
        	this.gfnBtnCheck(this.btnClbCoMng, this.dsList);
        }

        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.form_onload,this);
            this.dsList.addEventHandler("onvaluechanged",this.dsList_onvaluechanged,this);
            this.dsSearch.addEventHandler("onvaluechanged",this.dsSearch_onvaluechanged,this);
        };
        this.loadIncludeScript("DWU_CONSTCONTRCT.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
