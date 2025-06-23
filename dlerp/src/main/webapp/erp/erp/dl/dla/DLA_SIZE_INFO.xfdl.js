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
            obj._setContents("<ColumnInfo><Column id=\"TARGET\" type=\"STRING\" size=\"256\"/><Column id=\"SP\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"TARGET\">select</Col><Col id=\"SP\">DLAPR_FLOORSIZE_SELECT</Col></Row><Row><Col id=\"TARGET\">insert</Col><Col id=\"SP\">DLAPR_FLOORSIZE_INSERT</Col></Row><Row><Col id=\"TARGET\">update</Col><Col id=\"SP\">DLAPR_FLOORSIZE_UPDATE</Col></Row><Row><Col id=\"TARGET\">delete</Col><Col id=\"SP\">DLAPR_FLOORSIZE_DELETE</Col></Row><Row><Col id=\"TARGET\">select1</Col><Col id=\"SP\">DLAPR_LESSOR_DONGHO_SELECT</Col></Row><Row><Col id=\"TARGET\">insert1</Col><Col id=\"SP\">DLAPR_LESSOR_DONGHO_INSERT</Col></Row><Row><Col id=\"TARGET\">update1</Col><Col id=\"SP\">DLAPR_LESSOR_DONGHO_UPDATE</Col></Row><Row><Col id=\"TARGET\">delete1</Col><Col id=\"SP\">DLAPR_LESSOR_DONGHO_DELETE</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsSearch", this);
            obj._setContents("<ColumnInfo><Column id=\"CD_ACNTUNIT\" type=\"STRING\" size=\"256\"/><Column id=\"DS_ACNTUNIT\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row/></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsList1", this);
            obj._setContents("");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Div("divSearch","0.0","10.0",null,"46.0","0",null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_cssclass("div_SEARCH_Bg");
            obj.set_formscrolltype("none");
            this.addChild(obj.name, obj);

            obj = new Static("staCD_ACNTUNIT","0.0","10.0","105.0","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("1");
            obj.set_text("사업지코드");
            obj.set_cssclass("sta_WF_SchLabelE");
            this.divSearch.addChild(obj.name, obj);

            obj = new Div("ccfCD_ACNTUNIT","staCD_ACNTUNIT:0.0","10.0","250","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.getSetter("CodeFindName").set("DLX_CFLEASESITE_S_CODEFIND2");
            obj.getSetter("CDTextWidth").set("90");
            obj.set_taborder("1");
            obj.getSetter("FirToContents").set("true");
            obj.set_url("cmm::cmmCodeFind.xfdl");
            this.divSearch.addChild(obj.name, obj);

            obj = new Div("divData","0","divSearch:10",null,null,"0","0",null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_cssclass("div_DATA_Bg");
            this.addChild(obj.name, obj);

            obj = new Div("divSplitter","0","40.00%","100.00%","5",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("0");
            obj.set_background("skyblue");
            obj.set_cursor("ns-resize");
            this.divData.addChild(obj.name, obj);

            obj = new Div("divDataTop","0","0",null,null,"0","divSplitter:5",null,null,null,null,this.divData.form);
            obj.set_taborder("0");
            obj.set_cssclass("div_DATA_Bg");
            this.divData.addChild(obj.name, obj);

            obj = new Static("staTITLE","0","0",null,"30","0",null,null,null,null,null,this.divData.form.divDataTop.form);
            obj.set_taborder("0");
            obj.set_text("층별면적정보");
            obj.set_cssclass("sta_TITLE_Bg");
            obj.set_font("normal bold 10pt/normal \"Arial\"");
            this.divData.form.divDataTop.addChild(obj.name, obj);

            obj = new Grid("objGrid","0","staTITLE:5",null,null,"0","0",null,null,null,null,this.divData.form.divDataTop.form);
            obj.set_taborder("0");
            obj._setContents("");
            this.divData.form.divDataTop.addChild(obj.name, obj);

            obj = new Div("divDataBottom","0","divSplitter:5",null,null,"0","0",null,null,null,null,this.divData.form);
            obj.set_taborder("0");
            obj.set_cssclass("div_DATA_Bg");
            this.divData.addChild(obj.name, obj);

            obj = new Static("staTITLE","0","0",null,"30","0",null,null,null,null,null,this.divData.form.divDataBottom.form);
            obj.set_taborder("0");
            obj.set_text("동층호지정");
            obj.set_cssclass("sta_TITLE_Bg");
            obj.set_font("normal bold 10pt/normal \"Arial\"");
            this.divData.form.divDataBottom.addChild(obj.name, obj);

            obj = new Grid("objGrid1","0","staTITLE:5",null,null,"0","0",null,null,null,null,this.divData.form.divDataBottom.form);
            obj.set_taborder("1");
            obj._setContents("");
            this.divData.form.divDataBottom.addChild(obj.name, obj);

            obj = new Button("btnContract",null,"5","60","20","5",null,null,null,null,null,this.divData.form.divDataBottom.form);
            obj.set_taborder("5");
            obj.set_text("임대계약");
            obj.set_enable("false");
            this.divData.form.divDataBottom.addChild(obj.name, obj);

            obj = new Button("btnSaveBottom",null,"5","40","20","btnContract:3",null,null,null,null,null,this.divData.form.divDataBottom.form);
            obj.set_taborder("4");
            obj.set_text("저장");
            obj.set_enable("false");
            this.divData.form.divDataBottom.addChild(obj.name, obj);

            obj = new Button("btnDelBottom",null,"5","40","20","btnSaveBottom:3",null,null,null,null,null,this.divData.form.divDataBottom.form);
            obj.set_taborder("3");
            obj.set_text("삭제");
            obj.set_enable("false");
            this.divData.form.divDataBottom.addChild(obj.name, obj);

            obj = new Button("btnAddBottom",null,"5","40","20","btnDelBottom:3",null,null,null,null,null,this.divData.form.divDataBottom.form);
            obj.set_taborder("2");
            obj.set_text("입력");
            obj.set_enable("false");
            this.divData.form.divDataBottom.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this
            obj = new Layout("default","",this._adjust_width,this._adjust_height,this,function(p){});
            this.addLayout(obj.name, obj);
            
            // BindItem Information
            obj = new BindItem("item0","divSearch.form.ccfCD_ACNTUNIT.form.CDTextBox","value","dsSearch","CD_ACNTUNIT");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item1","divSearch.form.ccfCD_ACNTUNIT.form.DSTextBox","value","dsSearch","DS_ACNTUNIT");
            this.addChild(obj.name, obj);
            obj.bind();
            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {
            this._addPreloadList("fdl","cmm::cmmCodeFind.xfdl");
        };
        
        // User Script
        this.registerScript("DLA_SIZE_INFO.xfdl", function() {
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
        	this.ccfCD_ACNTUNIT = this.divSearch.form.ccfCD_ACNTUNIT;

        	this.dxGrid = this.divData.form.divDataTop.form.objGrid;
        	this.dxGrid1 = this.divData.form.divDataBottom.form.objGrid1;
        };

        /************************************************************************
         * 이벤트 설정
         ************************************************************************/
        this.fnSetEvent = function() {
        	this.ccfCD_ACNTUNIT.BeforeUserDataSetParam = "fnBeforeUserDataSetParam";

        	// 그리드 초기화
        	this.gfnGridInit(this.dxGrid, this.dsList, "DL", "DLA_SIZE_INFO_1");
        	this.gfnGridInit(this.dxGrid1, this.dsList1, "DL", "DLA_SIZE_INFO_2");

        	this.dxGrid.set_selecttype("cell");
        	this.dxGrid.addEventHandler("onselectchanged", this.fnGrid_RowCellChanged, this);

        };

        /************************************************************************
         * 파라미터 설정
         ************************************************************************/
        this.fnSetParameter = function() {
        	this.dsSelect = new Dataset();
        	this.dsSelect.addColumn("CD_ACNTUNIT", "string");
        	this.dsSelect.addColumn("TY_GUBUN", "string");
        	this.dsSelect.addColumn("NO_CHASU", "string");

        	this.dsInsert = new Dataset();
        	this.dsInsert.addColumn("CD_ACNTUNIT", "string");
        	this.dsInsert.addColumn("TY_GUBUN", "string");
        	this.dsInsert.addColumn("NO_CHASU", "string");
        	this.dsInsert.addColumn("NO_DONG", "string");
        	this.dsInsert.addColumn("NO_FLOOR", "string");
        	this.dsInsert.addColumn("SZ_EXCLUSIVE", "bigdecimal");
        	this.dsInsert.addColumn("SZ_PEXCLUSIVE", "bigdecimal");
        	this.dsInsert.addColumn("SZ_FLOORSHARE", "bigdecimal");
        	this.dsInsert.addColumn("SZ_PFLOORSHARE", "bigdecimal");
        	this.dsInsert.addColumn("SZ_SHARE", "bigdecimal");
        	this.dsInsert.addColumn("SZ_ELEC", "bigdecimal");
        	this.dsInsert.addColumn("SZ_TOTAL", "bigdecimal");
        	this.dsInsert.addColumn("SZ_SUPPLY", "bigdecimal");
        	this.dsInsert.addColumn("SZ_PARKING", "bigdecimal");
        	this.dsInsert.addColumn("L_SIZE", "bigdecimal");
        	this.dsInsert.addColumn("L_PSIZE", "bigdecimal");
        	this.dsInsert.addColumn("DS_REMARK", "string");
        	this.dsInsert.addColumn("ID_INSERT", "string");

        	this.dsUpdate = new Dataset();
        	this.dsUpdate.addColumn("CD_ACNTUNIT", "string");
        	this.dsUpdate.addColumn("TY_GUBUN", "string");
        	this.dsUpdate.addColumn("NO_CHASU", "string");
        	this.dsUpdate.addColumn("NO_DONG", "string");
        	this.dsUpdate.addColumn("NO_FLOOR", "string");
        	this.dsUpdate.addColumn("SZ_EXCLUSIVE", "bigdecimal");
        	this.dsUpdate.addColumn("SZ_PEXCLUSIVE", "bigdecimal");
        	this.dsUpdate.addColumn("SZ_FLOORSHARE", "bigdecimal");
        	this.dsUpdate.addColumn("SZ_PFLOORSHARE", "bigdecimal");
        	this.dsUpdate.addColumn("SZ_SHARE", "bigdecimal");
        	this.dsUpdate.addColumn("SZ_ELEC", "bigdecimal");
        	this.dsUpdate.addColumn("SZ_TOTAL", "bigdecimal");
        	this.dsUpdate.addColumn("SZ_SUPPLY", "bigdecimal");
        	this.dsUpdate.addColumn("SZ_PARKING", "bigdecimal");
        	this.dsUpdate.addColumn("L_SIZE", "bigdecimal");
        	this.dsUpdate.addColumn("L_PSIZE", "bigdecimal");
        	this.dsUpdate.addColumn("DS_REMARK", "string");
        	this.dsUpdate.addColumn("ID_UPDATE", "string");

        	this.dsDelete = new Dataset();
        	this.dsDelete.addColumn("CD_ACNTUNIT", "string");
        	this.dsDelete.addColumn("TY_GUBUN", "string");
        	this.dsDelete.addColumn("NO_CHASU", "string");
        	this.dsDelete.addColumn("NO_DONG", "string");
        	this.dsDelete.addColumn("NO_FLOOR", "string");

        	this.dsSelect1 = new Dataset();
        	this.dsSelect1.addColumn("CD_ACNTUNIT", "string");
        	this.dsSelect1.addColumn("TY_GUBUN", "string");
        	this.dsSelect1.addColumn("NO_CHASU", "string");
        	this.dsSelect1.addColumn("NO_DONG", "string");
        	this.dsSelect1.addColumn("NO_FLOOR", "string");

        	this.dsInsert1 = new Dataset();
        	this.dsInsert1.addColumn("CD_ACNTUNIT", "string");
        	this.dsInsert1.addColumn("TY_GUBUN", "string");
        	this.dsInsert1.addColumn("NO_CHASU", "string");
        	this.dsInsert1.addColumn("NO_DONG", "string");
        	this.dsInsert1.addColumn("NO_FLOOR", "string");
        	this.dsInsert1.addColumn("NO_HO", "string");
        	this.dsInsert1.addColumn("TY_SAEDAE", "string");
        	this.dsInsert1.addColumn("SZ_EXCLUSIVE", "bigdecimal");
        	this.dsInsert1.addColumn("SZ_PEXCLUSIVE", "bigdecimal");
        	this.dsInsert1.addColumn("SZ_FLOORSHARE", "bigdecimal");
        	this.dsInsert1.addColumn("SZ_PFLOORSHARE", "bigdecimal");
        	this.dsInsert1.addColumn("SZ_SHARE", "bigdecimal");
        	this.dsInsert1.addColumn("SZ_ELEC", "bigdecimal");
        	this.dsInsert1.addColumn("SZ_TOTAL", "bigdecimal");
        	this.dsInsert1.addColumn("SZ_SUPPLY", "bigdecimal");
        	this.dsInsert1.addColumn("SZ_PARKING", "bigdecimal");
        	this.dsInsert1.addColumn("C_SIZE", "bigdecimal");
        	this.dsInsert1.addColumn("C_PSIZE", "bigdecimal");
        	this.dsInsert1.addColumn("DS_REMARK", "string");
        	this.dsInsert1.addColumn("ID_INSERT", "string");

        	this.dsUpdate1 = new Dataset();
        	this.dsUpdate1.addColumn("CD_ACNTUNIT", "string");
        	this.dsUpdate1.addColumn("TY_GUBUN", "string");
        	this.dsUpdate1.addColumn("NO_CHASU", "string");
        	this.dsUpdate1.addColumn("NO_DONG", "string");
        	this.dsUpdate1.addColumn("NO_FLOOR", "string");
        	this.dsUpdate1.addColumn("NO_HO", "string");
        	this.dsUpdate1.addColumn("TY_SAEDAE", "string");
        	this.dsUpdate1.addColumn("SZ_EXCLUSIVE", "bigdecimal");
        	this.dsUpdate1.addColumn("SZ_PEXCLUSIVE", "bigdecimal");
        	this.dsUpdate1.addColumn("SZ_FLOORSHARE", "bigdecimal");
        	this.dsUpdate1.addColumn("SZ_PFLOORSHARE", "bigdecimal");
        	this.dsUpdate1.addColumn("SZ_SHARE", "bigdecimal");
        	this.dsUpdate1.addColumn("SZ_ELEC", "bigdecimal");
        	this.dsUpdate1.addColumn("SZ_TOTAL", "bigdecimal");
        	this.dsUpdate1.addColumn("SZ_SUPPLY", "bigdecimal");
        	this.dsUpdate1.addColumn("SZ_PARKING", "bigdecimal");
        	this.dsUpdate1.addColumn("C_SIZE", "bigdecimal");
        	this.dsUpdate1.addColumn("C_PSIZE", "bigdecimal");
        	this.dsUpdate1.addColumn("DS_REMARK", "string");
        	this.dsUpdate1.addColumn("ID_UPDATE", "string");

        	this.dsDelete1 = new Dataset();
        	this.dsDelete1.addColumn("CD_ACNTUNIT", "string");
        	this.dsDelete1.addColumn("TY_GUBUN", "string");
        	this.dsDelete1.addColumn("NO_CHASU", "string");
        	this.dsDelete1.addColumn("NO_DONG", "string");
        	this.dsDelete1.addColumn("NO_FLOOR", "string");
        	this.dsDelete1.addColumn("NO_HO", "string");
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

        	this.dsSelect.setColumn(0, "CD_ACNTUNIT", this.dsSearch.getColumn(0, "CD_ACNTUNIT").substr(0,6));
        	this.dsSelect.setColumn(0, "TY_GUBUN", this.dsSearch.getColumn(0, "CD_ACNTUNIT").substr(6,1));
        	this.dsSelect.setColumn(0, "NO_CHASU", this.dsSearch.getColumn(0, "CD_ACNTUNIT").substr(7,2));

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

        this.fnDetail = function() {
        	//if (!this.fnSelectValidate()) return false;

        	this.gfnGridBeforeSelect(this.dxGrid1);

        	this.dsSelect1.clearData();
        	this.dsSelect1.addRow();

        	this.dsSelect1.setColumn(0, "CD_ACNTUNIT", this.dsSearch.getColumn(0, "CD_ACNTUNIT").substr(0,6));
        	this.dsSelect1.setColumn(0, "TY_GUBUN", this.dsSearch.getColumn(0, "CD_ACNTUNIT").substr(6,1));
        	this.dsSelect1.setColumn(0, "NO_CHASU", this.dsSearch.getColumn(0, "CD_ACNTUNIT").substr(7,2));
        	this.dsSelect1.setColumn(0, "NO_DONG", this.dsList.getColumn(this.dsList.rowposition, "NO_DONG"));
        	this.dsSelect1.setColumn(0, "NO_FLOOR", this.dsList.getColumn(this.dsList.rowposition, "NO_FLOOR"));

        	var strSvcId    = "detail";
        	var strSvcType  = "grid";
        	var inProc		= "_dsProc";
        	var inData      = "select1=dsSelect1";
        	var outData     = "dsList1=select10";
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
        				this.dsInsert.setColumn(nrow, "CD_ACNTUNIT", this.dsSearch.getColumn(0, "CD_ACNTUNIT").substr(0,6));
        				this.dsInsert.setColumn(nrow, "TY_GUBUN", this.dsSearch.getColumn(0, "CD_ACNTUNIT").substr(6,1));
        				this.dsInsert.setColumn(nrow, "NO_CHASU", this.dsSearch.getColumn(0, "CD_ACNTUNIT").substr(7,2));
        				this.dsInsert.setColumn(nrow, "NO_DONG", this.dsList.getColumn(i, "NO_DONG"));
        				this.dsInsert.setColumn(nrow, "NO_FLOOR", this.dsList.getColumn(i, "NO_FLOOR"));
        				this.dsInsert.setColumn(nrow, "SZ_EXCLUSIVE", this.dsList.getColumn(i, "SZ_EXCLUSIVE"));
        				this.dsInsert.setColumn(nrow, "SZ_PEXCLUSIVE", this.dsList.getColumn(i, "SZ_PEXCLUSIVE"));
        				this.dsInsert.setColumn(nrow, "SZ_FLOORSHARE", this.dsList.getColumn(i, "SZ_FLOORSHARE"));
        				this.dsInsert.setColumn(nrow, "SZ_PFLOORSHARE", this.dsList.getColumn(i, "SZ_PFLOORSHARE"));
        				this.dsInsert.setColumn(nrow, "SZ_SHARE", this.dsList.getColumn(i, "SZ_SHARE"));
        				this.dsInsert.setColumn(nrow, "SZ_ELEC", this.dsList.getColumn(i, "SZ_ELEC"));
        				this.dsInsert.setColumn(nrow, "SZ_TOTAL", this.dsList.getColumn(i, "SZ_TOTAL"));
        				this.dsInsert.setColumn(nrow, "SZ_SUPPLY", this.dsList.getColumn(i, "SZ_SUPPLY"));
        				this.dsInsert.setColumn(nrow, "SZ_PARKING", this.dsList.getColumn(i, "SZ_PARKING"));
        				this.dsInsert.setColumn(nrow, "L_SIZE", this.dsList.getColumn(i, "L_SIZE"));
        				this.dsInsert.setColumn(nrow, "L_PSIZE", this.dsList.getColumn(i, "L_PSIZE"));
        				this.dsInsert.setColumn(nrow, "DS_REMARK", this.dsList.getColumn(i, "DS_REMARK"));
        				this.dsInsert.setColumn(nrow, "ID_INSERT", this.AuthClient.ID_USER);
        				break;

        			case "U":
        				var nrow = this.dsUpdate.addRow();
        				this.dsUpdate.setColumn(nrow, "CD_ACNTUNIT", this.dsSearch.getColumn(0, "CD_ACNTUNIT").substr(0,6));
        				this.dsUpdate.setColumn(nrow, "TY_GUBUN", this.dsSearch.getColumn(0, "CD_ACNTUNIT").substr(6,1));
        				this.dsUpdate.setColumn(nrow, "NO_CHASU", this.dsSearch.getColumn(0, "CD_ACNTUNIT").substr(7,2));
        				this.dsUpdate.setColumn(nrow, "NO_DONG", this.dsList.getColumn(i, "NO_DONG"));
        				this.dsUpdate.setColumn(nrow, "NO_FLOOR", this.dsList.getColumn(i, "NO_FLOOR"));
        				this.dsUpdate.setColumn(nrow, "SZ_EXCLUSIVE", this.dsList.getColumn(i, "SZ_EXCLUSIVE"));
        				this.dsUpdate.setColumn(nrow, "SZ_PEXCLUSIVE", this.dsList.getColumn(i, "SZ_PEXCLUSIVE"));
        				this.dsUpdate.setColumn(nrow, "SZ_FLOORSHARE", this.dsList.getColumn(i, "SZ_FLOORSHARE"));
        				this.dsUpdate.setColumn(nrow, "SZ_PFLOORSHARE", this.dsList.getColumn(i, "SZ_PFLOORSHARE"));
        				this.dsUpdate.setColumn(nrow, "SZ_SHARE", this.dsList.getColumn(i, "SZ_SHARE"));
        				this.dsUpdate.setColumn(nrow, "SZ_ELEC", this.dsList.getColumn(i, "SZ_ELEC"));
        				this.dsUpdate.setColumn(nrow, "SZ_TOTAL", this.dsList.getColumn(i, "SZ_TOTAL"));
        				this.dsUpdate.setColumn(nrow, "SZ_SUPPLY", this.dsList.getColumn(i, "SZ_SUPPLY"));
        				this.dsUpdate.setColumn(nrow, "SZ_PARKING", this.dsList.getColumn(i, "SZ_PARKING"));
        				this.dsUpdate.setColumn(nrow, "L_SIZE", this.dsList.getColumn(i, "L_SIZE"));
        				this.dsUpdate.setColumn(nrow, "L_PSIZE", this.dsList.getColumn(i, "L_PSIZE"));
        				this.dsUpdate.setColumn(nrow, "DS_REMARK", this.dsList.getColumn(i, "DS_REMARK"));
        				this.dsUpdate.setColumn(nrow, "ID_UPDATE", this.AuthClient.ID_USER);
        				break;

        			case "D":
        				var nrow = this.dsDelete.addRow();
        				this.dsDelete.setColumn(nrow, "CD_ACNTUNIT", this.dsSearch.getColumn(0, "CD_ACNTUNIT").substr(0,6));
        				this.dsDelete.setColumn(nrow, "TY_GUBUN", this.dsSearch.getColumn(0, "CD_ACNTUNIT").substr(6,1));
        				this.dsDelete.setColumn(nrow, "NO_CHASU", this.dsSearch.getColumn(0, "CD_ACNTUNIT").substr(7,2));
        				this.dsDelete.setColumn(nrow, "NO_DONG", this.dsList.getColumn(i, "NO_DONG"));
        				this.dsDelete.setColumn(nrow, "NO_FLOOR", this.dsList.getColumn(i, "NO_FLOOR"));

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


        this.fnSave1 = function() {
        	// 그리드 필수항목 체크
        	if (!this.gfnGridValidate(this.dxGrid1)) return;

        	this.dxGrid1.updateToDataset();

        	this.dsInsert1.clearData();
        	this.dsUpdate1.clearData();
        	this.dsDelete1.clearData();

        	for (var i = 0; i < this.dsList1.rowcount; i++) {
        		var flag = this.gfnGetFlag(this.dsList1, i);
        		switch(flag) {
        			case "I":
        				var nrow = this.dsInsert1.addRow();
        				this.dsInsert1.setColumn(nrow, "CD_ACNTUNIT", this.dsSearch.getColumn(0, "CD_ACNTUNIT").substr(0,6));
        				this.dsInsert1.setColumn(nrow, "TY_GUBUN", this.dsSearch.getColumn(0, "CD_ACNTUNIT").substr(6,1));
        				this.dsInsert1.setColumn(nrow, "NO_CHASU", this.dsSearch.getColumn(0, "CD_ACNTUNIT").substr(7,2));
        				this.dsInsert1.setColumn(nrow, "NO_DONG", this.dsList1.getColumn(i, "NO_DONG"));
        				this.dsInsert1.setColumn(nrow, "NO_FLOOR", this.dsList1.getColumn(i, "NO_FLOOR"));
        				this.dsInsert1.setColumn(nrow, "NO_HO", this.dsList1.getColumn(i, "NO_HO"));
        				this.dsInsert1.setColumn(nrow, "TY_SAEDAE", this.dsList1.getColumn(i, "TY_SAEDAE"));
        				this.dsInsert1.setColumn(nrow, "SZ_EXCLUSIVE", this.dsList1.getColumn(i, "SZ_EXCLUSIVE"));
        				this.dsInsert1.setColumn(nrow, "SZ_PEXCLUSIVE", this.dsList1.getColumn(i, "SZ_PEXCLUSIVE"));
        				this.dsInsert1.setColumn(nrow, "SZ_FLOORSHARE", this.dsList1.getColumn(i, "SZ_FLOORSHARE"));
        				this.dsInsert1.setColumn(nrow, "SZ_PFLOORSHARE", this.dsList1.getColumn(i, "SZ_PFLOORSHARE"));
        				this.dsInsert1.setColumn(nrow, "SZ_SHARE", this.dsList1.getColumn(i, "SZ_SHARE"));
        				this.dsInsert1.setColumn(nrow, "SZ_ELEC", this.dsList1.getColumn(i, "SZ_ELEC"));
        				this.dsInsert1.setColumn(nrow, "SZ_TOTAL", this.dsList1.getColumn(i, "SZ_TOTAL"));
        				this.dsInsert1.setColumn(nrow, "SZ_SUPPLY", this.dsList1.getColumn(i, "SZ_SUPPLY"));
        				this.dsInsert1.setColumn(nrow, "SZ_PARKING", this.dsList1.getColumn(i, "SZ_PARKING"));
        				this.dsInsert1.setColumn(nrow, "C_SIZE", this.dsList1.getColumn(i, "C_SIZE"));
        				this.dsInsert1.setColumn(nrow, "C_PSIZE", this.dsList1.getColumn(i, "C_PSIZE"));
        				this.dsInsert1.setColumn(nrow, "DS_REMARK", this.dsList1.getColumn(i, "DS_REMARK"));
        				this.dsInsert1.setColumn(nrow, "ID_INSERT", this.AuthClient.ID_USER);
        				break;

        			case "U":
        				var nrow = this.dsUpdate1.addRow();
        				this.dsUpdate1.setColumn(nrow, "CD_ACNTUNIT", this.dsSearch.getColumn(0, "CD_ACNTUNIT").substr(0,6));
        				this.dsUpdate1.setColumn(nrow, "TY_GUBUN", this.dsSearch.getColumn(0, "CD_ACNTUNIT").substr(6,1));
        				this.dsUpdate1.setColumn(nrow, "NO_CHASU", this.dsSearch.getColumn(0, "CD_ACNTUNIT").substr(7,2));
        				this.dsUpdate1.setColumn(nrow, "NO_DONG", this.dsList1.getColumn(i, "NO_DONG"));
        				this.dsUpdate1.setColumn(nrow, "NO_FLOOR", this.dsList1.getColumn(i, "NO_FLOOR"));
        				this.dsUpdate1.setColumn(nrow, "NO_HO", this.dsList1.getColumn(i, "NO_HO"));
        				this.dsUpdate1.setColumn(nrow, "TY_SAEDAE", this.dsList1.getColumn(i, "TY_SAEDAE"));
        				this.dsUpdate1.setColumn(nrow, "SZ_EXCLUSIVE", this.dsList1.getColumn(i, "SZ_EXCLUSIVE"));
        				this.dsUpdate1.setColumn(nrow, "SZ_PEXCLUSIVE", this.dsList1.getColumn(i, "SZ_PEXCLUSIVE"));
        				this.dsUpdate1.setColumn(nrow, "SZ_FLOORSHARE", this.dsList1.getColumn(i, "SZ_FLOORSHARE"));
        				this.dsUpdate1.setColumn(nrow, "SZ_PFLOORSHARE", this.dsList1.getColumn(i, "SZ_PFLOORSHARE"));
        				this.dsUpdate1.setColumn(nrow, "SZ_SHARE", this.dsList1.getColumn(i, "SZ_SHARE"));
        				this.dsUpdate1.setColumn(nrow, "SZ_ELEC", this.dsList1.getColumn(i, "SZ_ELEC"));
        				this.dsUpdate1.setColumn(nrow, "SZ_TOTAL", this.dsList1.getColumn(i, "SZ_TOTAL"));
        				this.dsUpdate1.setColumn(nrow, "SZ_SUPPLY", this.dsList1.getColumn(i, "SZ_SUPPLY"));
        				this.dsUpdate1.setColumn(nrow, "SZ_PARKING", this.dsList1.getColumn(i, "SZ_PARKING"));
        				this.dsUpdate1.setColumn(nrow, "C_SIZE", this.dsList1.getColumn(i, "C_SIZE"));
        				this.dsUpdate1.setColumn(nrow, "C_PSIZE", this.dsList1.getColumn(i, "C_PSIZE"));
        				this.dsUpdate1.setColumn(nrow, "DS_REMARK", this.dsList1.getColumn(i, "DS_REMARK"));
        				this.dsUpdate1.setColumn(nrow, "ID_UPDATE", this.AuthClient.ID_USER);
        				break;

        			case "D":
        				var nrow = this.dsDelete1.addRow();
        				this.dsDelete1.setColumn(nrow, "CD_ACNTUNIT", this.dsSearch.getColumn(0, "CD_ACNTUNIT").substr(0,6));
        				this.dsDelete1.setColumn(nrow, "TY_GUBUN", this.dsSearch.getColumn(0, "CD_ACNTUNIT").substr(6,1));
        				this.dsDelete1.setColumn(nrow, "NO_CHASU", this.dsSearch.getColumn(0, "CD_ACNTUNIT").substr(7,2));
        				this.dsDelete1.setColumn(nrow, "NO_DONG", this.dsList1.getColumn(i, "NO_DONG"));
        				this.dsDelete1.setColumn(nrow, "NO_FLOOR", this.dsList1.getColumn(i, "NO_FLOOR"));
        				this.dsDelete1.setColumn(nrow, "NO_HO", this.dsList1.getColumn(i, "NO_HO"));
        				break;
        		}
        	}

        	if (this.dsInsert1.rowcount == 0 && this.dsUpdate1.rowcount == 0 && this.dsDelete1.rowcount == 0) return;

        	var strSvcId    = "save1";
        	var strSvcType  = "save";
        	var inProc		= "_dsProc";
        	var inData      = "insert1=dsInsert1 update1=dsUpdate1 delete1=dsDelete1";
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

        	if (this.gfnIsNull(this.dsSearch.getColumn(0,"CD_ACNTUNIT"))) {
        		validate = false;
        		// Alert후 실행할 처리
        		this.fnVaidateCallback = function() {
        			this.ccfCD_ACNTUNIT.form.CDTextBox.setFocus();
        		}
        		this.gfnAlert("사업지코드를 입력하세요.", "fnVaidateCallback");
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
        	else if (svcID == "detail") {
        		this.gfnGridAfterSelect(this.dxGrid1);

        		this.divData.form.divDataBottom.form.btnAddBottom.set_enable(true);
        		this.divData.form.divDataBottom.form.btnDelBottom.set_enable(true);
        		this.divData.form.divDataBottom.form.btnSaveBottom.set_enable(false);
        		this.divData.form.divDataBottom.form.btnContract.set_enable(true);
        	}
        	else if(svcID == "save") {
        		if (errorCode == 0) {
        			this.FormBtns.Select.click();
        		} else {
        			this.gfnAlert(errorMsg);
        		}
        	}
        	else if(svcID == "save1") {
        		if (errorCode == 0) {
        			this.fnDetail();
        		} else {
        			this.gfnAlert(errorMsg);
        		}
        	}
        }

        /************************************************************************
         * 코드파인드 이벤트
         ************************************************************************/
        this.fnBeforeUserDataSetParam = function(id, dsUserParam, nrow) {
        	if (id == "ccfCD_ACNTUNIT") {
        		//dsUserParam.setColumn(nrow, "CD_DEPT", this.AuthClient.CD_DEPT);
        		dsUserParam.setColumn(nrow, "CD_DEPT", "");
        		dsUserParam.setColumn(nrow, "GR_SEARCH", this.FormInfo.GR_SEARCH);
        	}
        	return true;
        }

        /************************************************************************
         * 그리드 이벤트
         ************************************************************************/
        this.fnGrid_RowCellChanged = function(obj,e)
        {
        	 if ((obj.oldrow > -1 && obj.oldrow == e.row) || (obj.oldrow == -1 && e.oldrow != e.row)) {
        		if (this.dxGrid.rowcount == 0 || this.dxGrid.currentrow < 0) return false;

        		this.fnDetail();
        	}
        };
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


        this.divData_ondragmove = function(obj,e)
        {
        	if(e.userdata == "splitter") {
        		this.divData.form.divSplitter.set_top(e.clienty);
        		this.divData.form.resetScroll();
        	}
        };

        this.divData_divSplitter_ondrag = function(obj,e)
        {
        	e.set_userdata("splitter");
        	return true;
        };

        // 상단 그리드 내용 변경시 이벤트.
        this.dsList_onvaluechanged = function(obj,e)
        {
        	if(e.oldvalue != e.newvalue)
        	{
        		this.dsList.set_enableevent(false);
        		if(e.columnid == "NO_DONG" && !this.gfnIsNull(e.newvalue))
        		{
        			if(e.newvalue.length != 4)
        			{
        				var c = 4 - e.newvalue.length;
        				if(c > 0)
        				{
        					var temp = "";
        					for(var i = 0; i < c; i++)
        					{
        						temp += "0";
        					}

        					this.dsList.setColumn(e.row, "NO_DONG", temp + e.newvalue);
        				}
        			}
        		}

        		if(e.columnid == "NO_FLOOR" && !this.gfnIsNull(e.newvalue))
        		{
        			if(e.newvalue.length != 2)
        			{
        				var c = 2 - e.newvalue.length;
        				if(c > 0)
        				{
        					var temp = "";
        					for(var i = 0; i < c; i++)
        					{
        						temp += "0";
        					}

        					this.dsList.setColumn(e.row, "NO_FLOOR", temp + e.newvalue);
        				}
        			}
        		}

        		var chgSZ_TOTAL = false;
                var chgSZ_SUPPLY = false;
        		var nrow = this.dsList.rowposition;
        		switch(e.columnid)
        		{
        			case "SZ_EXCLUSIVE": this.fnSetSZtoP(this.dsList, "SZ_EXCLUSIVE", "SZ_PEXCLUSIVE");
        				break;
        			case "SZ_FLOORSHARE":this.fnSetSZtoP(this.dsList, "SZ_FLOORSHARE", "SZ_PFLOORSHARE");
        				break;
        			case "L_SIZE": this.fnSetSZtoP(this.dsList, "L_SIZE", "L_PSIZE");
        				break;
        			case "C_SIZE": this.fnSetSZtoP(this.dsList, "C_SIZE", "C_PSIZE");
        				break;
        			case "R_SIZE": this.fnSetSZtoP(this.dsList, "R_SIZE", "R_PSIZE");
        				break;
        		}

        		switch(e.columnid)
        		{
        			case "SZ_FLOORSHARE" :
        			case "SZ_SHARE" :
        			case "SZ_ELEC" :
        				var size1 = this.dsList.getColumn(nrow, "SZ_FLOORSHARE");
        				var size2 = this.dsList.getColumn(nrow, "SZ_SHARE");
        				var size3 = this.dsList.getColumn(nrow, "SZ_ELEC");
        				var total = size1 + size2 + size3;
        				this.dsList.setColumn(nrow, "SZ_TOTAL", total);
        				chgSZ_TOTAL = true;
        			break;
        		}

        		if(e.columnid == "SZ_EXCLUSIVE" || chgSZ_TOTAL == true)
        		{
        			var size1 = this.dsList.getColumn(nrow, "SZ_EXCLUSIVE");
        			var size2 = this.dsList.getColumn(nrow, "SZ_TOTAL");
        			var total = size1 + size2;
        			this.dsList.setColumn(nrow, "SZ_SUPPLY", total);
        			chgSZ_SUPPLY = true;
        		}

        		if(e.columnid == "SZ_PARKING" || chgSZ_SUPPLY == true)
        		{
        			var size1 = this.dsList.getColumn(nrow, "SZ_PARKING");
        			var size2 = this.dsList.getColumn(nrow, "SZ_SUPPLY");
        			var total = size1 + size2;
        			this.dsList.setColumn(nrow, "C_SIZE", total);
        			this.fnSetSZtoP(this.dsList, "C_SIZE", "C_PSIZE");
        		}
        		this.dsList.set_enableevent(true);
        	}
        };

        // 하단 그리드 내용 변경시 이벤트
        this.dsList1_onvaluechanged = function(obj,e)
        {
        	if(e.oldvalue != e.newvalue)
        	{
        		this.divData.form.divDataBottom.form.btnSaveBottom.set_enable(true);
        		this.dsList1.set_enableevent(false);
        		var chgSZ_TOTAL = false;
                var chgSZ_SUPPLY = false;
        		var nrow = this.dsList1.rowposition;
        		switch(e.columnid)
        		{
        			case "SZ_EXCLUSIVE" : this.fnSetSZtoP(this.dsList1, "SZ_EXCLUSIVE", "SZ_PEXCLUSIVE");
        								  break;
        			case "SZ_FLOORSHARE" : this.fnSetSZtoP(this.dsList1, "SZ_FLOORSHARE", "SZ_PFLOORSHARE");
        								  break;
        			case "C_SIZE" : this.fnSetSZtoP(this.dsList1, "C_SIZE", "C_PSIZE");
        							break;
        		}

        		switch(e.columnid)
        		{
        			case "SZ_FLOORSHARE" :
        			case "SZ_SHARE" :
        			case "SZ_ELEC" :
        				var size1 = this.gfnNvl(this.dsList1.getColumn(nrow, "SZ_FLOORSHARE"), 0);
        				var size2 = this.gfnNvl(this.dsList1.getColumn(nrow, "SZ_SHARE"), 0);
        				var size3 = this.gfnNvl(this.dsList1.getColumn(nrow, "SZ_ELEC"), 0);
        				var total = size1 + size2 + size3;
        				this.dsList1.setColumn(nrow, "SZ_TOTAL", total);
        				chgSZ_TOTAL = true;
        			break;
        		}

        		if(e.columnid == "SZ_EXCLUSIVE" || chgSZ_TOTAL == true)
        		{
        			var size1 = this.gfnNvl(this.dsList1.getColumn(nrow, "SZ_EXCLUSIVE"), 0);
        			var size2 = this.gfnNvl(this.dsList1.getColumn(nrow, "SZ_TOTAL"), 0);
        			var total = size1 + size2;
        			this.dsList1.setColumn(nrow, "SZ_SUPPLY", total);
        			chgSZ_SUPPLY = true;
        		}

        		if(e.columnid == "SZ_PARKING" || chgSZ_SUPPLY == true)
        		{
        			var size1 = this.gfnNvl(this.dsList1.getColumn(nrow, "SZ_PARKING"), 0);
        			var size2 = this.gfnNvl(this.dsList1.getColumn(nrow, "SZ_SUPPLY"), 0);
        			var total = size1 + size2;
        			this.dsList1.setColumn(nrow, "C_SIZE", total);
        			this.fnSetSZtoP(this.dsList1, "C_SIZE", "C_PSIZE");
        		}

        		this.dsList1.set_enableevent(true);
        	}
        };


        this.fnSetSZtoP = function(ds, col_sz, col_p)
        {
        	var size = ds.getColumn(ds.rowposition, col_sz);
        	psize = size * 0.3025;

        	ds.setColumn(ds.rowposition, col_p, psize);
        }

        // 하단 그리드 입력.
        this.divData_divDataBottom_btnAddBottom_onclick = function(obj,e)
        {
        	if(this.gfnGetFlag(this.dsList, this.dsList.rowposition) == "I") return;
        	var nrow = this.gfnGridAdd(this.dxGrid1);
        	this.dsList1.setColumn(nrow, "NO_DONG", this.dsList.getColumn(this.dsList.rowposition, "NO_DONG"));
        	this.dsList1.setColumn(nrow, "NO_FLOOR", this.dsList.getColumn(this.dsList.rowposition, "NO_FLOOR"));

        };

        // 하단 그리드 삭제.
        this.divData_divDataBottom_btnDelBottom_onclick = function(obj,e)
        {
        	this.gfnGridDel(this.dxGrid1);
        };

        // 하단 그리드 저장.
        this.divData_divDataBottom_btnSaveBottom_onclick = function(obj,e)
        {
        	this.fnSave1();
        };

        // 하단 그리드 임대계약 버튼.
        this.divData_divDataBottom_btnContract_onclick = function(obj,e)
        {
        	var param = {};
        	param.CD_ACNTUNIT = this.dsSearch.getColumn(0, "CD_ACNTUNIT");
        	param.DS_ACNTUNIT = this.dsSearch.getColumn(0, "DS_ACNTUNIT");
        	param.DONG 	  = this.dsList1.getColumn(this.dsList1.rowposition, "NO_DONG");
        	param.FLOOR 	  = this.dsList1.getColumn(this.dsList1.rowposition, "NO_FLOOR");
        	param.HO 	  = this.dsList1.getColumn(this.dsList1.rowposition, "NO_HO");
        	param.YN_CONTRACT = "계약가능";

        	this.gfnFormOpen(this.FormInfo.CD_MODULE, "DLB_CONTRACT_DETAIL", "fnContractCallBack", param);
        };

        this.divData_divDataBottom_objGrid1_oncelldblclick = function(obj,e)
        {
        	this.divData_divDataBottom_btnContract_onclick(obj, e);
        };

        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.form_onload,this);
            this.divData.addEventHandler("ondragmove",this.divData_ondragmove,this);
            this.divData.form.divSplitter.addEventHandler("ondrag",this.divData_divSplitter_ondrag,this);
            this.divData.form.divDataBottom.form.objGrid1.addEventHandler("oncelldblclick",this.divData_divDataBottom_objGrid1_oncelldblclick,this);
            this.divData.form.divDataBottom.form.btnContract.addEventHandler("onclick",this.divData_divDataBottom_btnContract_onclick,this);
            this.divData.form.divDataBottom.form.btnSaveBottom.addEventHandler("onclick",this.divData_divDataBottom_btnSaveBottom_onclick,this);
            this.divData.form.divDataBottom.form.btnDelBottom.addEventHandler("onclick",this.divData_divDataBottom_btnDelBottom_onclick,this);
            this.divData.form.divDataBottom.form.btnAddBottom.addEventHandler("onclick",this.divData_divDataBottom_btnAddBottom_onclick,this);
            this.dsList.addEventHandler("onvaluechanged",this.dsList_onvaluechanged,this);
            this.dsSearch.addEventHandler("onvaluechanged",this.dsSearch_onvaluechanged,this);
            this.dsList1.addEventHandler("onvaluechanged",this.dsList1_onvaluechanged,this);
        };
        this.loadIncludeScript("DLA_SIZE_INFO.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
