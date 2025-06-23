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
            this.set_titletext("미수미결조회");
            if (Form == this.constructor)
            {
                this._setFormPosition(1280,720);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("dsList", this);
            obj._setContents("<ColumnInfo><Column id=\"NO_SIZE\" type=\"STRING\" size=\"256\"/><Column id=\"SZ_EXCLUSIVE\" type=\"STRING\" size=\"256\"/><Column id=\"TY_TYPE\" type=\"STRING\" size=\"256\"/><Column id=\"CD_ITEM\" type=\"STRING\" size=\"256\"/><Column id=\"DS_ITEM\" type=\"STRING\" size=\"256\"/><Column id=\"DS_RCODE\" type=\"STRING\" size=\"256\"/><Column id=\"DS_CCODE\" type=\"STRING\" size=\"256\"/><Column id=\"AM_SUPPLY\" type=\"STRING\" size=\"256\"/><Column id=\"AM_VAT\" type=\"STRING\" size=\"256\"/><Column id=\"AM_AMOUNT\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("_dsProc", this);
            obj._setContents("<ColumnInfo><Column id=\"TARGET\" type=\"STRING\" size=\"256\"/><Column id=\"SP\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"TARGET\">select</Col><Col id=\"SP\">DRFPR_AGREEMENT_SELECT</Col></Row><Row><Col id=\"SP\">DRFPR_AGREEMENT_INSERT</Col><Col id=\"TARGET\">insert</Col></Row><Row><Col id=\"SP\">DRFPR_AGREEMENT_UPDATE</Col><Col id=\"TARGET\">update</Col></Row><Row><Col id=\"SP\">DRFPR_AGREEMENT_DELETE</Col><Col id=\"TARGET\">delete</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsListSub", this);
            obj._setContents("");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsSearch", this);
            obj._setContents("<ColumnInfo><Column id=\"CD_ACNTUNIT\" type=\"STRING\" size=\"256\"/><Column id=\"NO_SIZE\" type=\"STRING\" size=\"256\"/><Column id=\"TY_TYPE\" type=\"STRING\" size=\"256\"/><Column id=\"SZ_EXCLUSIVE\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"CD_ACNTUNIT\"/><Col id=\"NO_SIZE\"/><Col id=\"TY_TYPE\"/><Col id=\"SZ_EXCLUSIVE\"/></Row></Rows>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Div("divSearch","0.0","10.0",null,"46.0","0",null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_cssclass("div_SEARCH_Bg");
            obj.set_formscrolltype("none");
            obj.set_text("");
            this.addChild(obj.name, obj);

            obj = new Edit("ctxtCD_ACNTUNIT","0.0","10.0","80","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("0");
            obj.set_value("");
            obj.set_readonly("true");
            this.divSearch.addChild(obj.name, obj);

            obj = new Edit("ctxtDS_ACNTUNIT","ctxtCD_ACNTUNIT:0.0","10.0","220","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("1");
            obj.set_value("");
            obj.set_readonly("true");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("staCD_CORP00","ctxtDS_ACNTUNIT:0.0","10.0","118.0","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("3");
            obj.set_text("면적/품목명");
            obj.set_cssclass("sta_WF_SchLabelE");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("staCD_CORP","staCD_CORP00:0.0","10.0","118.0","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("2");
            obj.set_text("사업지코드");
            obj.set_cssclass("sta_WF_SchLabel");
            this.divSearch.addChild(obj.name, obj);

            obj = new Div("ccfTY_TYPE","staCD_CORP00:0.0","10.0","108","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.getSetter("CodeFindName").set("DRX_CFSIZEITEM_CODEFIND");
            obj.getSetter("CDTextWidth").set("80");
            obj.set_taborder("4");
            obj.set_url("cmm::cmmCodeFind.xfdl");
            obj.set_text("");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("staCD_CORP01","ccfTY_TYPE:0.0","10.0","118.0","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("5");
            obj.set_text("전용면적");
            obj.set_cssclass("sta_WF_SchLabel");
            this.divSearch.addChild(obj.name, obj);

            obj = new Edit("ctxtSZ_EXCLUSIVE","staCD_CORP01:0.0","10.0","80","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("6");
            obj.set_value("");
            obj.set_readonly("false");
            this.divSearch.addChild(obj.name, obj);

            obj = new Div("divData","0","60",null,null,"0","0",null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_cssclass("div_DATA_Bg");
            this.addChild(obj.name, obj);

            obj = new Div("divDataTop","0","0",null,"195","0",null,null,null,null,null,this.divData.form);
            obj.set_taborder("1");
            this.divData.addChild(obj.name, obj);

            obj = new Static("sta01","0","-5","100.00%","22",null,null,null,null,null,null,this.divData.form.divDataTop.form);
            obj.set_taborder("1");
            obj.set_text("품목정보");
            obj.set_cssclass("sta_TITLE_Bg");
            this.divData.form.divDataTop.addChild(obj.name, obj);

            obj = new Grid("objGrid","0","sta01:4",null,"101","0",null,null,null,null,null,this.divData.form.divDataTop.form);
            obj.set_taborder("0");
            obj._setContents("");
            this.divData.form.divDataTop.addChild(obj.name, obj);

            obj = new Div("divDataTop","0","objGrid:10",null,"59","0",null,null,null,null,null,this.divData.form.divDataTop.form);
            obj.set_taborder("2");
            this.divData.form.divDataTop.addChild(obj.name, obj);

            obj = new Static("sta02","0","0",null,"22","0",null,null,null,null,null,this.divData.form.divDataTop.form.divDataTop.form);
            obj.set_taborder("0");
            obj.set_text("약정정보");
            obj.set_cssclass("sta_TITLE_Bg");
            this.divData.form.divDataTop.form.divDataTop.addChild(obj.name, obj);

            obj = new Static("statxtNO_JUMIN","0","29","100","30",null,null,null,null,null,null,this.divData.form.divDataTop.form.divDataTop.form);
            obj.set_taborder("1");
            obj.set_text("합계");
            obj.set_cssclass("sta_WF_tablelabel");
            this.divData.form.divDataTop.form.divDataTop.addChild(obj.name, obj);

            obj = new Static("statxtNO_JUMIN00","201","29","161","30",null,null,null,null,null,null,this.divData.form.divDataTop.form.divDataTop.form);
            obj.set_taborder("2");
            obj.set_cssclass("sta_WF_tablebg");
            this.divData.form.divDataTop.form.divDataTop.addChild(obj.name, obj);

            obj = new MaskEdit("edtAM_TOTSUPPLY","207","34","150","20",null,null,null,null,null,null,this.divData.form.divDataTop.form.divDataTop.form);
            obj.set_taborder("3");
            obj.set_format("#,###");
            obj.set_readonly("true");
            this.divData.form.divDataTop.form.divDataTop.addChild(obj.name, obj);

            obj = new Static("statxtNO_JUMIN01","102","29","100","30",null,null,null,null,null,null,this.divData.form.divDataTop.form.divDataTop.form);
            obj.set_taborder("4");
            obj.set_text("공급가");
            obj.set_cssclass("sta_WF_tablelabel");
            this.divData.form.divDataTop.form.divDataTop.addChild(obj.name, obj);

            obj = new Static("statxtNO_JUMIN02","460","29","161","30",null,null,null,null,null,null,this.divData.form.divDataTop.form.divDataTop.form);
            obj.set_taborder("5");
            obj.set_cssclass("sta_WF_tablebg");
            this.divData.form.divDataTop.form.divDataTop.addChild(obj.name, obj);

            obj = new MaskEdit("edtAM_TOTVAT","466","34","150","20",null,null,null,null,null,null,this.divData.form.divDataTop.form.divDataTop.form);
            obj.set_taborder("6");
            obj.set_format("#,###");
            obj.set_readonly("true");
            this.divData.form.divDataTop.form.divDataTop.addChild(obj.name, obj);

            obj = new Static("statxtNO_JUMIN03","361","29","100","30",null,null,null,null,null,null,this.divData.form.divDataTop.form.divDataTop.form);
            obj.set_taborder("7");
            obj.set_text("부가세");
            obj.set_cssclass("sta_WF_tablelabel");
            this.divData.form.divDataTop.form.divDataTop.addChild(obj.name, obj);

            obj = new Static("statxtNO_JUMIN04","719","29","161","30",null,null,null,null,null,null,this.divData.form.divDataTop.form.divDataTop.form);
            obj.set_taborder("8");
            obj.set_cssclass("sta_WF_tablebg");
            this.divData.form.divDataTop.form.divDataTop.addChild(obj.name, obj);

            obj = new MaskEdit("edtAM_TOTSELL","725","34","150","20",null,null,null,null,null,null,this.divData.form.divDataTop.form.divDataTop.form);
            obj.set_taborder("9");
            obj.set_format("#,###");
            obj.set_readonly("true");
            this.divData.form.divDataTop.form.divDataTop.addChild(obj.name, obj);

            obj = new Static("statxtNO_JUMIN05","620","29","100","30",null,null,null,null,null,null,this.divData.form.divDataTop.form.divDataTop.form);
            obj.set_taborder("10");
            obj.set_text("약정금");
            obj.set_cssclass("sta_WF_tablelabel");
            this.divData.form.divDataTop.form.divDataTop.addChild(obj.name, obj);

            obj = new Div("divDataBottom","0","divDataTop:10",null,null,"0","0",null,null,null,null,this.divData.form);
            obj.set_taborder("0");
            this.divData.addChild(obj.name, obj);

            obj = new Grid("objGridSub","0","0",null,null,"0","0",null,null,null,null,this.divData.form.divDataBottom.form);
            obj.set_taborder("1");
            obj._setContents("");
            this.divData.form.divDataBottom.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this
            obj = new Layout("default","",this._adjust_width,this._adjust_height,this,function(p){});
            this.addLayout(obj.name, obj);
            
            // BindItem Information
            obj = new BindItem("item0","divSearch.form.ctxtCD_ACNTUNIT","value","dsSearch","CD_ACNTUNIT");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item2","divSearch.form.ccfTY_TYPE.form.CDTextBox","value","dsSearch","TY_TYPE");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item3","divSearch.form.ctxtSZ_EXCLUSIVE","value","dsSearch","SZ_EXCLUSIVE");
            this.addChild(obj.name, obj);
            obj.bind();
            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {
            this._addPreloadList("fdl","cmm::cmmCodeFind.xfdl");
        };
        
        // User Script
        this.registerScript("DRF_AGREEMENT.xfdl", function() {
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

        	// 타화면에서 오픈시 넘어오는 파라미터 처리
        	if(!this.gfnIsNull(this.getOwnerFrame().CD_ACNTUNIT)) {
        		this.dsSearch.setColumn(0, "CD_ACNTUNIT", this.getOwnerFrame().CD_ACNTUNIT);
        		this.divSearch.form.ctxtDS_ACNTUNIT.set_value(this.getOwnerFrame().DS_ACNTUNIT);
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
        	this.btnCopy = this.gfnFormButtonAdd("btnCopy", "fnCopy");
        };

        /************************************************************************
         * 변수 선언
         ************************************************************************/
        this.fnSetVariable = function() {
        	this.ctxtCD_ACNTUNIT = this.divSearch.form.ctxtCD_ACNTUNIT;
        	this.ccfTY_TYPE = this.divSearch.form.ccfTY_TYPE;

        	this.edtAM_TOTSUPPLY = this.divData.form.divDataTop.form.divDataTop.form.edtAM_TOTSUPPLY;
        	this.edtAM_TOTVAT = this.divData.form.divDataTop.form.divDataTop.form.edtAM_TOTVAT;
        	this.edtAM_TOTSELL = this.divData.form.divDataTop.form.divDataTop.form.edtAM_TOTSELL;

        	this.dxGrid = this.divData.form.divDataTop.form.objGrid;
        	this.dxGridSub = this.divData.form.divDataBottom.form.objGridSub;
        };

        /************************************************************************
         * 이벤트 설정
         ************************************************************************/
        this.fnSetEvent = function() {
        	this.ccfTY_TYPE.BeforeUserDataSetParam = "fnBeforeUserDataSetParam";
        	this.ccfTY_TYPE.AfterCDTextChanged = "fnAfterCDTextChanged";

        	// 그리드 초기화
        	this.gfnGridInit(this.dxGrid, this.dsList, "DR", "DRF_AGREEMENT_PRODUCT");
        	this.gfnGridInit(this.dxGridSub, this.dsListSub, "DR", "DRF_AGREEMENT");

        	this.dxGrid.set_selecttype("cell");
        	//this.dxGrid.addEventHandler("onselectchanged", this.fnGrid_RowCellChanged, this);

        	//검색조건 변경 이벤트
        	this.dsSearch.addEventHandler("onvaluechanged", this.dsSearch_Valuechanged, this);

        	this.dxGridSub.EnterCell = "fnGrid_EnterCell";

        };

        /************************************************************************
         * 파라미터 설정
         ************************************************************************/
        this.fnSetParameter = function() {
        	this.dsSelect = new Dataset();
        	this.dsSelect.addColumn("CD_ACNTUNIT", "string");
        	this.dsSelect.addColumn("TY_GUBUN", "string");
        	this.dsSelect.addColumn("NO_CHASU", "string");
        	this.dsSelect.addColumn("NO_SIZE", "bigdecimal");
        	this.dsSelect.addColumn("TY_TYPE", "string");
        	this.dsSelect.addColumn("CD_ITEM", "string");

        	this.dsInsert = new Dataset();
        	this.dsInsert.addColumn("CD_ACNTUNIT", "string");
        	this.dsInsert.addColumn("TY_GUBUN", "string");
        	this.dsInsert.addColumn("NO_CHASU", "string");
        	this.dsInsert.addColumn("NO_SIZE", "bigdecimal");
        	this.dsInsert.addColumn("TY_TYPE", "string");
        	this.dsInsert.addColumn("CD_ITEM", "string");
        	this.dsInsert.addColumn("TY_NAPIP", "string");
        	this.dsInsert.addColumn("NO_NAPCHA", "string");
        	this.dsInsert.addColumn("DT_STARTAGREE", "string");
        	this.dsInsert.addColumn("DT_ENDAGREE", "string");
        	this.dsInsert.addColumn("AM_SUPPLY", "bigdecimal");
        	this.dsInsert.addColumn("AM_VAT", "bigdecimal");
        	this.dsInsert.addColumn("AM_TOTAL", "bigdecimal");
        	this.dsInsert.addColumn("AM_SELLING_HANDLE", "bigdecimal");
        	this.dsInsert.addColumn("ID_INSERT", "string");

        	this.dsUpdate = new Dataset();
        	this.dsUpdate.addColumn("CD_ACNTUNIT", "string");
        	this.dsUpdate.addColumn("TY_GUBUN", "string");
        	this.dsUpdate.addColumn("NO_CHASU", "string");
        	this.dsUpdate.addColumn("NO_SIZE", "bigdecimal");
        	this.dsUpdate.addColumn("TY_TYPE", "string");
        	this.dsUpdate.addColumn("CD_ITEM", "string");
        	this.dsUpdate.addColumn("TY_NAPIP", "string");
        	this.dsUpdate.addColumn("NO_NAPCHA", "string");
        	this.dsUpdate.addColumn("DT_STARTAGREE", "string");
        	this.dsUpdate.addColumn("DT_ENDAGREE", "string");
        	this.dsUpdate.addColumn("AM_SUPPLY", "bigdecimal");
        	this.dsUpdate.addColumn("AM_VAT", "bigdecimal");
        	this.dsUpdate.addColumn("AM_TOTAL", "bigdecimal");
        	this.dsUpdate.addColumn("AM_SELLING_HANDLE", "bigdecimal");
        	this.dsUpdate.addColumn("ID_UPDATE", "string");

        	this.dsDelete = new Dataset();
        	this.dsDelete.addColumn("CD_ACNTUNIT", "string");
        	this.dsDelete.addColumn("TY_GUBUN", "string");
        	this.dsDelete.addColumn("NO_CHASU", "string");
        	this.dsDelete.addColumn("NO_SIZE", "bigdecimal");
        	this.dsDelete.addColumn("TY_TYPE", "string");
        	this.dsDelete.addColumn("CD_ITEM", "string");
        	this.dsDelete.addColumn("TY_NAPIP", "string");
        	this.dsDelete.addColumn("NO_NAPCHA", "string");
        	this.dsDelete.addColumn("ID_INSERT", "string");
        }

        /************************************************************************
         * 컨트롤 이벤트
         ************************************************************************/
         /*
          *	조회 버튼
          */
        this.fnSelect = function() {
        	if (!this.fnSelectValidate()) return false;

        	this.gfnGridBeforeSelect(this.dxGridSub);

        	this.dsSelect.clearData();
        	this.dsSelect.addRow();

        	this.dsSelect.setColumn(0, "CD_ACNTUNIT", this.dsSearch.getColumn(0, "CD_ACNTUNIT").substr(0, 6));
        	this.dsSelect.setColumn(0, "TY_GUBUN", this.dsSearch.getColumn(0, "CD_ACNTUNIT").substr(6, 1));
        	this.dsSelect.setColumn(0, "NO_CHASU", this.dsSearch.getColumn(0, "CD_ACNTUNIT").substr(7, 2));
        	this.dsSelect.setColumn(0, "NO_SIZE", this.dsList.getColumn(0, "NO_SIZE"));
        	this.dsSelect.setColumn(0, "TY_TYPE", this.dsList.getColumn(0, "TY_TYPE"));
        	this.dsSelect.setColumn(0, "CD_ITEM", this.dsList.getColumn(0, "CD_ITEM"));

        	var strSvcId    = "select";
        	var strSvcType  = "grid";
        	var inProc		= "_dsProc";
        	var inData      = "select=dsSelect ";
        	var outData     = "dsListSub=select0";
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
        	var nrow = this.gfnGridAdd(this.dxGridSub);
        	//this.gfnSetFormStatus(this, "I");	// 폼상태 업데이트
        }

        /*
         *	삭제 버튼
         */
        this.fnDel = function() {
        	this.gfnGridDel(this.dxGridSub);
        	//this.gfnSetFormStatus(this, "D");	// 폼상태 업데이트
        }

        /*
         *	저장 버튼
         */
        this.fnSave = function() {
        	if (!this.gfnGridValidate(this.dxGridSub)) return;

        	if (!this.fnAmountChk()) return;

        	this.dxGridSub.updateToDataset();

        	this.dsInsert.clearData();
        	this.dsUpdate.clearData();
        	this.dsDelete.clearData();

        	for (var i = 0; i < this.dsListSub.rowcount; i++) {
        		if(this.dsListSub.getColumn(i, "NO_NAPCHA").length != 2){
        			this.gfnAlert("납입차수는 2자리로 입력하셔야 합니다.");
        			return;
        		}

        		if(this.gfnGetDiffDate(nexacro.replaceAll(this.dsListSub.getColumn(i, "DT_STARTAGREE"), "-", ""), nexacro.replaceAll(this.dsListSub.getColumn(i, "DT_ENDAGREE"), "-", "")) <= -1){
        			this.gfnAlert("약정종료일자는 약정시작일자보다 크거나 같아야 합니다.");
        			return;
        		}

        		var tyNapip1 = "";
        		if(this.dsListSub.getColumn(i, "TY_NAPIP1") == "계약금"){
        			tyNapip1 = "C";
        		}else if(this.dsListSub.getColumn(i, "TY_NAPIP1") == "중도금"){
        			tyNapip1 = "J";
        		}else if(this.dsListSub.getColumn(i, "TY_NAPIP1") == "잔금"){
        			tyNapip1 = "R";
        		}

        		var flag = this.gfnGetFlag(this.dsListSub, i);
        		switch(flag) {
        			case "I":
        				var nrow = this.dsInsert.addRow();
        				this.dsInsert.setColumn(nrow, "CD_ACNTUNIT", this.dsSearch.getColumn(0, "CD_ACNTUNIT").substr(0, 6));
        				this.dsInsert.setColumn(nrow, "TY_GUBUN", this.dsSearch.getColumn(0, "CD_ACNTUNIT").substr(6, 1));
        				this.dsInsert.setColumn(nrow, "NO_CHASU", this.dsSearch.getColumn(0, "CD_ACNTUNIT").substr(7, 2));
        				this.dsInsert.setColumn(nrow, "NO_SIZE", this.dsList.getColumn(0, "NO_SIZE"));
        				this.dsInsert.setColumn(nrow, "TY_TYPE", this.dsList.getColumn(0, "TY_TYPE"));
        				this.dsInsert.setColumn(nrow, "CD_ITEM", this.dsList.getColumn(0, "CD_ITEM"));
        				this.dsInsert.setColumn(nrow, "TY_NAPIP", tyNapip1);
        				this.dsInsert.setColumn(nrow, "NO_NAPCHA", this.dsListSub.getColumn(i, "NO_NAPCHA"));
        				this.dsInsert.setColumn(nrow, "DT_STARTAGREE", nexacro.replaceAll(this.dsListSub.getColumn(i, "DT_STARTAGREE"), "-", ""));
        				this.dsInsert.setColumn(nrow, "DT_ENDAGREE", nexacro.replaceAll(this.dsListSub.getColumn(i, "DT_ENDAGREE"), "-", ""));
        				this.dsInsert.setColumn(nrow, "AM_SUPPLY", this.dsListSub.getColumn(i, "AM_SUPPLY"));
        				this.dsInsert.setColumn(nrow, "AM_VAT", this.dsListSub.getColumn(i, "AM_VAT"));
        				this.dsInsert.setColumn(nrow, "AM_TOTAL", this.dsListSub.getColumn(i, "AM_TOTAL"));
        				this.dsInsert.setColumn(nrow, "AM_SELLING_HANDLE", this.dsListSub.getColumn(i, "AM_SELLING_HANDLE"));
        				this.dsInsert.setColumn(nrow, "ID_INSERT", this.AuthClient.ID_USER);
        				break;

        			case "U":
        				var nrow = this.dsUpdate.addRow();
        				this.dsUpdate.setColumn(nrow, "CD_ACNTUNIT", this.dsSearch.getColumn(0, "CD_ACNTUNIT").substr(0, 6));
        				this.dsUpdate.setColumn(nrow, "TY_GUBUN", this.dsSearch.getColumn(0, "CD_ACNTUNIT").substr(6, 1));
        				this.dsUpdate.setColumn(nrow, "NO_CHASU", this.dsSearch.getColumn(0, "CD_ACNTUNIT").substr(7, 2));
        				this.dsUpdate.setColumn(nrow, "NO_SIZE", this.dsList.getColumn(0, "NO_SIZE"));
        				this.dsUpdate.setColumn(nrow, "TY_TYPE", this.dsList.getColumn(0, "TY_TYPE"));
        				this.dsUpdate.setColumn(nrow, "CD_ITEM", this.dsList.getColumn(0, "CD_ITEM"));
        				this.dsUpdate.setColumn(nrow, "TY_NAPIP", tyNapip1);
        				this.dsUpdate.setColumn(nrow, "NO_NAPCHA", this.dsListSub.getColumn(i, "NO_NAPCHA"));
        				this.dsUpdate.setColumn(nrow, "DT_STARTAGREE", nexacro.replaceAll(this.dsListSub.getColumn(i, "DT_STARTAGREE"), "-", ""));
        				this.dsUpdate.setColumn(nrow, "DT_ENDAGREE", nexacro.replaceAll(this.dsListSub.getColumn(i, "DT_ENDAGREE"), "-", ""));
        				this.dsUpdate.setColumn(nrow, "AM_SUPPLY", this.dsListSub.getColumn(i, "AM_SUPPLY"));
        				this.dsUpdate.setColumn(nrow, "AM_VAT", this.dsListSub.getColumn(i, "AM_VAT"));
        				this.dsUpdate.setColumn(nrow, "AM_TOTAL", this.dsListSub.getColumn(i, "AM_TOTAL"));
        				this.dsUpdate.setColumn(nrow, "AM_SELLING_HANDLE", this.dsListSub.getColumn(i, "AM_SELLING_HANDLE"));
        				this.dsUpdate.setColumn(nrow, "ID_UPDATE", this.AuthClient.ID_USER);
        				break;

        			case "D":
        				var nrow = this.dsDelete.addRow();
        				this.dsDelete.setColumn(nrow, "CD_ACNTUNIT", this.dsSearch.getColumn(0, "CD_ACNTUNIT").substr(0, 6));
        				this.dsDelete.setColumn(nrow, "TY_GUBUN", this.dsSearch.getColumn(0, "CD_ACNTUNIT").substr(6, 1));
        				this.dsDelete.setColumn(nrow, "NO_CHASU", this.dsSearch.getColumn(0, "CD_ACNTUNIT").substr(7, 2));
        				this.dsDelete.setColumn(nrow, "NO_SIZE", this.dsList.getColumn(0, "NO_SIZE"));
        				this.dsDelete.setColumn(nrow, "TY_TYPE", this.dsList.getColumn(0, "TY_TYPE"));
        				this.dsDelete.setColumn(nrow, "CD_ITEM", this.dsList.getColumn(0, "CD_ITEM"));
        				this.dsDelete.setColumn(nrow, "TY_NAPIP", tyNapip1);
        				this.dsDelete.setColumn(nrow, "NO_NAPCHA", this.dsListSub.getColumn(i, "NO_NAPCHA"));
        				this.dsDelete.setColumn(nrow, "ID_INSERT", this.AuthClient.ID_USER);
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

        // 저장전 약정금,공급가,부가세 체크
        this.fnAmountChk = function()
        {
        	var AM_TOTSUPPLY = 0;	// 공급가
        	var AM_TOTVAT = 0;		// 부가세
        	var AM_TOTAL = 0;		// 약정금

        	for (var i = 0; i < this.dsListSub.rowcount; i++) {
        		AM_TOTSUPPLY = AM_TOTSUPPLY + this.dsListSub.getColumn(i, "AM_SUPPLY");
        		AM_TOTVAT = AM_TOTVAT + this.dsListSub.getColumn(i, "AM_VAT");
        		AM_TOTAL = AM_TOTAL + this.dsListSub.getColumn(i, "AM_TOTAL");
        	}

        	if(AM_TOTSUPPLY != this.dsList.getColumn(0, "AM_SUPPLY")){
        		this.gfnAlert("공급가가 잘못되었습니다.");
        		return false;
        	}else if(AM_TOTVAT != this.dsList.getColumn(0, "AM_VAT")){
        		this.gfnAlert("부가세가 잘못되었습니다.");
        		return false;
        	}else if(AM_TOTAL != this.dsList.getColumn(0, "AM_AMOUNT")){
        		this.gfnAlert("약정금이 잘못되었습니다.");
        		return false;
        	}

        	return true;
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

        	if (this.gfnIsNull(this.dsSearch.getColumn(0,"TY_TYPE"))) {
        		validate = false;
        		// Alert후 실행할 처리
        		this.fnVaidateCallback = function() {
        			this.ccfTY_TYPE.form.CDTextBox.setFocus();
        		}
        		this.gfnAlert("면적/품목명는 반드시 입력 하셔야 합니다.", "fnVaidateCallback");
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
        		this.fnSetButton();
        		this.gfnGridAfterSelect(this.dxGridSub);

        		this.fnSbAM_Sum();
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
        	if(id == "ccfTY_TYPE") {
        		dsUserParam.setColumn(nrow, "CD_ACNTUNIT", this.dsSearch.getColumn(0, "CD_ACNTUNIT"));
        	}

        	return true;
        };


        this.fnAfterCDTextChanged = function(id, codeFindData) {
        	var arrData = codeFindData;
        	if(id == "ccfTY_TYPE") {
        		// 검색조건의 전용면적 셋팅
        		this.dsSearch.setColumn(0, "SZ_EXCLUSIVE", arrData[0]["SZ_EXCLUSIVE"]);

        		// 상단 그리드값 셋팅
        		this.dsList.clearData();
        		this.dsList.addRow();

        		this.dsList.set_enableevent(false);
        		this.dsList.setColumn(0, "NO_SIZE", arrData[0]["NO_SIZE"]);
        		this.dsList.setColumn(0, "SZ_EXCLUSIVE", arrData[0]["SZ_EXCLUSIVE"]);
        		this.dsList.setColumn(0, "TY_TYPE", arrData[0]["TY_TYPE"]);
        		this.dsList.setColumn(0, "CD_ITEM", arrData[0]["CD_ITEM"]);
        		this.dsList.setColumn(0, "DS_ITEM", arrData[0]["DS_ITEM"]);
        		this.dsList.setColumn(0, "DS_RCODE", arrData[0]["DS_RCODE"]);
        		this.dsList.setColumn(0, "DS_CCODE", arrData[0]["DS_CCODE"]);
        		this.dsList.setColumn(0, "AM_SUPPLY", arrData[0]["AM_SUPPLY"]);
        		this.dsList.setColumn(0, "AM_VAT", arrData[0]["AM_VAT"]);
        		this.dsList.setColumn(0, "AM_AMOUNT", arrData[0]["AM_AMOUNT"]);
        		this.dsList.set_enableevent(true);

        		// 조회
        		this.FormBtns.Select.click();
        	}
        }
        /************************************************************************
         * 그리드 이벤트
         ************************************************************************/
        this.fnGrid_RowCellChanged = function(obj,e)
        {
            if ((obj.oldrow > -1 && obj.oldrow == e.row)
        		|| (obj.oldrow == -1 && e.oldrow != e.row)) {
        		// 마스터 그리드 클릭 이벤트(디테일 그리드 조회)
        		this.FormBtns.SubSelect.click();
        		obj.oldrow = -1;
        	}
        };

        // 셀 수정가능 여부
         this.fnGrid_EnterCell = function(obj, row, cell) {
        	var colnm = this.gfnGridGetBindColumnNameByIndex(obj, cell);

        	if(colnm == "AM_VAT") {
        		if(this.dsList.getColumn(0, "AM_VAT") == 0){
        			return false;
        		}
        	}
        }
        /************************************************************************
         * 기타 이벤트
         ************************************************************************/


        /************************************************************************
         * 서브 버튼 이벤트
         ************************************************************************/


        //검색조건 변경 이벤트
        this.dsSearch_Valuechanged = function(obj,e)
        {
        	if(e.oldvalue != e.newvalue) {
        		this.gfnSetFormStatus(this);	// 폼상태 초기화
        		this.gfnGridClear(this.dxGrid);
        		this.gfnGridClear(this.dxGridSub);

        		this.fnSbAM_Sum();
        	}
        };

        // 약정정보의 공급가, 부가세, 약정금 셋팅
        this.fnSbAM_Sum = function()
        {
        	if(this.dsListSub.rowcount < 1) {
        		this.edtAM_TOTSUPPLY.set_value("");
        		this.edtAM_TOTVAT.set_value("");
        		this.edtAM_TOTSELL.set_value("");

        		return;
        	}

        	var AM_TOTSUPPLY = 0;	// 공급가
        	var AM_TOTVAT = 0;		// 부가세
        	var AM_TOTSELL = 0;		// 약정금

        	for (var i = 0; i < this.dsListSub.rowcount; i++) {
        		AM_TOTSUPPLY = AM_TOTSUPPLY + nexacro.toNumber(this.dsListSub.getColumn(i, "AM_SUPPLY"), 0);
        		AM_TOTVAT = AM_TOTVAT + nexacro.toNumber(this.dsListSub.getColumn(i, "AM_VAT"), 0);
        	}

        	AM_TOTSELL = AM_TOTSUPPLY + AM_TOTVAT

        	this.edtAM_TOTSUPPLY.set_value(AM_TOTSUPPLY);
        	this.edtAM_TOTVAT.set_value(AM_TOTVAT);
        	this.edtAM_TOTSELL.set_value(AM_TOTSELL);
        }

        this.dsListSub_onvaluechanged = function(obj,e)
        {
        	if(e.oldvalue != e.newvalue)
        	{
        		//this.gfnSetFormStatus(this, "U");	// 폼상태 업데이트

        		if(e.columnid == "RT_DIVISION") {

        			var rt_division = nexacro.toNumber(this.dsListSub.getColumn(e.row, "RT_DIVISION"), 0);

        			if(rt_division > 0){
        				var am_supply_up = nexacro.toNumber(this.dsList.getColumn(0, "AM_SUPPLY"), 0);

        				var am_supply = am_supply_up * rt_division / 100;
        				var am_vat = am_supply / 10;
        				var am_total = am_supply + am_vat;

        				this.dsListSub.setColumn(e.row, "AM_SUPPLY", am_supply);
        				this.dsListSub.setColumn(e.row, "AM_VAT", am_vat);
        				this.dsListSub.setColumn(e.row, "AM_TOTAL", am_total);

        				this.fnSbAM_Sum();
        			}
        		}else if(e.columnid == "AM_SUPPLY") {
        			var am_supply = nexacro.toNumber(this.dsListSub.getColumn(e.row, "AM_SUPPLY"), 0);
        			var am_vat = 0;
        			var am_total = 0;

        			am_vat = am_supply / 10;
        			am_total = am_supply + am_vat;

        			this.dsListSub.setColumn(e.row, "AM_VAT", am_vat);
        			this.dsListSub.setColumn(e.row, "AM_TOTAL", am_total);

        			this.fnSbAM_Sum();
        		}else if(e.columnid == "AM_VAT") {
        			var am_supply = nexacro.toNumber(this.dsListSub.getColumn(e.row, "AM_SUPPLY"), 0);
        			var am_vat = nexacro.toNumber(this.dsListSub.getColumn(e.row, "AM_VAT"), 0);
        			var am_total = 0;

        			am_total = am_supply + am_vat;

        			this.dsListSub.setColumn(e.row, "AM_TOTAL", am_total);

        			this.fnSbAM_Sum();
        		}else if(e.columnid == "DT_STARTAGREE") {
        			if(nexacro.replaceAll(this.dsListSub.getColumn(e.row, "DT_STARTAGREE"), "-", "").length == 8){
        				this.dsListSub.setColumn(e.row, "DT_ENDAGREE", this.dsListSub.getColumn(e.row, "DT_STARTAGREE"));
        			}
        		}
        	}
        };



         // 안분내역복사 버튼 클릭시 팝업화면 호출
         this.fnCopy = function(obj,e) {
        	// 선택된 row가 있을 경우에만 팝업을 띄움
        	if (!this.gfnGridIsRow(this.dxGrid)) { return false; }

        	var param = {};
        	var nRow = this.dsList.rowposition;

        	param.CD_ACNTUNIT = this.dsSearch.getColumn(0, "CD_ACNTUNIT");
            param.NO_SIZE = this.dsList.getColumn(nRow, "NO_SIZE");
        	param.TY_TYPE = this.dsList.getColumn(nRow, "TY_TYPE");
        	param.CD_ITEM = this.dsList.getColumn(nRow, "CD_ITEM");
        	param.DS_ITEM = this.dsList.getColumn(nRow, "DS_ITEM");
        	param.DS_ROOM = this.dsList.getColumn(nRow, "DS_RCODE");
        	param.DS_COLOR = this.dsList.getColumn(nRow, "DS_CCODE");
        	param.AM_TOTAL = this.dsList.getColumn(nRow, "AM_AMOUNT");

        	// 화면 오픈.
        	// CD_MODULE은 보통 같은 모듈에서 호출하는 경우가 많으니 this.FormInfo.CD_MODULE 사용
        	// 타 모듈 화면 호출시 지정할것.

        	this.gfnFormOpen(this.FormInfo.CD_MODULE, "DRF_DLGSIZEDIVCOPY", "fnCopyCallback", param);
        }


        this.fnCopyCallback =  function(svcID, val) {

        	if(val != false) {
        		this.FormBtns.Select.click();
        	}
        };
        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.form_onload,this);
            this.divData.form.divDataTop.form.objGrid.addEventHandler("oncelldblclick",this.divData_divDataTop_objGrid_oncelldblclick,this);
            this.divData.form.divDataBottom.form.objGridSub.addEventHandler("oncelldblclick",this.divData_divDataTop_objGridsub_oncelldblclick,this);
            this.dsListSub.addEventHandler("onvaluechanged",this.dsListSub_onvaluechanged,this);
        };
        this.loadIncludeScript("DRF_AGREEMENT.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
