(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("DAA_LICLIST");
            this.set_titletext("자격증관리");
            if (Form == this.constructor)
            {
                this._setFormPosition(1280,720);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("_dsProc", this);
            obj._setContents("<ColumnInfo><Column id=\"TARGET\" type=\"STRING\" size=\"256\"/><Column id=\"SP\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"TARGET\">select</Col><Col id=\"SP\">DAAPR_LICLIST_SELECT</Col></Row><Row><Col id=\"TARGET\">save</Col><Col id=\"SP\">DAAPR_LICLIST_SAVE</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsSearch", this);
            obj._setContents("<ColumnInfo><Column id=\"CD_CORP\" type=\"STRING\" size=\"256\"/><Column id=\"DS_CORP\" type=\"STRING\" size=\"256\"/><Column id=\"ID_SABUN\" type=\"STRING\" size=\"256\"/><Column id=\"DS_HNAME\" type=\"STRING\" size=\"256\"/><Column id=\"ID_PERSON\" type=\"STRING\" size=\"256\"/><Column id=\"CD_LICENSE\" type=\"STRING\" size=\"256\"/><Column id=\"TY_RETIRE\" type=\"STRING\" size=\"256\"/><Column id=\"TY_INWON\" type=\"STRING\" size=\"256\"/><Column id=\"DT_BASE\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"CD_CORP\"/><Col id=\"DS_CORP\"/><Col id=\"ID_SABUN\"/><Col id=\"DS_HNAME\"/><Col id=\"ID_PERSON\"/><Col id=\"CD_LICENSE\"/><Col id=\"TY_INWON\"/><Col id=\"DT_BASE\"/></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsList", this);
            obj._setContents("");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsExcelForm", this);
            obj.set_useclientlayout("true");
            obj._setContents("<ColumnInfo><Column id=\"ID_SABUN\" type=\"STRING\" size=\"256\"/><Column id=\"CD_LICENSE\" type=\"STRING\" size=\"256\"/><Column id=\"NO_LICENSE\" type=\"STRING\" size=\"256\"/><Column id=\"DS_ORGAN\" type=\"STRING\" size=\"256\"/><Column id=\"DT_ACQUIRE\" type=\"STRING\" size=\"256\"/><Column id=\"DT_EXPIRE\" type=\"STRING\" size=\"256\"/><Column id=\"DS_LEVEL\" type=\"STRING\" size=\"256\"/><Column id=\"YN_LICENSE\" type=\"STRING\" size=\"256\"/><Column id=\"AM_LICENSE\" type=\"BIGDECIMAL\" size=\"256\"/><Column id=\"DS_REMARK\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row/></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsTY_RETIRE", this);
            obj._setContents("<ColumnInfo><Column id=\"CD_CODE\" type=\"STRING\" size=\"256\"/><Column id=\"DS_CODE\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"CD_CODE\">%</Col><Col id=\"DS_CODE\">전체</Col></Row><Row><Col id=\"CD_CODE\">01</Col><Col id=\"DS_CODE\">재직자</Col></Row><Row><Col id=\"CD_CODE\">02</Col><Col id=\"DS_CODE\">휴직자</Col></Row><Row><Col id=\"CD_CODE\">04</Col><Col id=\"DS_CODE\">퇴직자</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsTY_INWON", this);
            obj._setContents("<ColumnInfo><Column id=\"CD_CODE\" type=\"STRING\" size=\"256\"/><Column id=\"DS_CODE\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"CD_CODE\">%</Col><Col id=\"DS_CODE\">전체</Col></Row><Row><Col id=\"CD_CODE\">Y</Col><Col id=\"DS_CODE\">자격증등록인원</Col></Row><Row><Col id=\"CD_CODE\">N</Col><Col id=\"DS_CODE\">자격증미등록인원</Col></Row></Rows>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Div("divSearch","0","0",null,"78.0","0",null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_cssclass("div_SEARCH_Bg");
            obj.set_text("");
            this.addChild(obj.name, obj);

            obj = new Div("ccfCD_CORP","0.0","10.0","280","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.getSetter("CDTextWidth").set("70");
            obj.set_taborder("4");
            obj.set_url("cmm::cmmCodeFind.xfdl");
            obj.set_text("");
            obj.getSetter("CodeFindName").set("DAX_CFCORP");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("staID_SABUN","ccfCD_CORP:0.0","10.0","92.0","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("0");
            obj.set_text("성명");
            obj.set_cssclass("sta_WF_SchLabel");
            this.divSearch.addChild(obj.name, obj);

            obj = new Div("ccfID_SABUN","staID_SABUN:0.0","10.0","200","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.getSetter("CDTextWidth").set("70");
            obj.set_taborder("1");
            obj.set_url("cmm::cmmCodeFind.xfdl");
            obj.set_text("");
            obj.getSetter("CodeFindName").set("DAX_CFBASEINFO_ALL");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("staCD_LICENSE","ccfID_SABUN:0.0","10.0","92.0","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("2");
            obj.set_text("자격증");
            obj.set_rtl("false");
            obj.set_cssclass("sta_WF_SchLabel");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("staCD_CORP","staCD_LICENSE:0.0","10.0","92.0","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("3");
            obj.set_text("법인");
            obj.set_cssclass("sta_WF_SchLabelE");
            this.divSearch.addChild(obj.name, obj);

            obj = new Div("ccfCD_LICENSE","staCD_LICENSE:0.0","10.0","280","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.getSetter("CDTextWidth").set("60");
            obj.set_taborder("6");
            obj.set_url("cmm::cmmCodeFind.xfdl");
            obj.set_text("");
            obj.getSetter("CodeFindName").set("DAX_CFCOMMONCODE");
            this.divSearch.addChild(obj.name, obj);

            obj = new Edit("edtID_PERSON","ccfCD_LICENSE:0.0","10.0","29","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("5");
            obj.set_enable("false");
            obj.set_visible("false");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("staTY_RETIRE","edtID_PERSON:0.0","10.0","92.0","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("7");
            obj.set_text("재직구분");
            obj.set_cssclass("sta_WF_SchLabel");
            this.divSearch.addChild(obj.name, obj);

            obj = new Combo("cboTY_RETIRE","staTY_RETIRE:0.0","10.0","80","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("8");
            obj.set_innerdataset("dsTY_RETIRE");
            obj.set_datacolumn("DS_CODE");
            obj.set_codecolumn("CD_CODE");
            obj.getSetter("onvaluechanged").set("dsSearch_onvaluechanged");
            obj.set_value("");
            obj.set_index("1");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("staTY_INWON","0.0","ccfCD_CORP:10.0","92.0","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("4");
            obj.set_text("인원여부");
            obj.set_cssclass("sta_WF_SchLabel");
            this.divSearch.addChild(obj.name, obj);

            obj = new Combo("cboTY_INWON","staTY_INWON:0.0","ccfCD_CORP:10.0","150","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("5");
            obj.set_innerdataset("dsTY_INWON");
            obj.set_datacolumn("DS_CODE");
            obj.set_codecolumn("CD_CODE");
            obj.getSetter("onvaluechanged").set("dsSearch_onvaluechanged");
            obj.set_value("");
            obj.set_index("1");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("staDT_BASE","cboTY_INWON:0.0","ccfCD_CORP:10.0","92.0","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("6");
            obj.set_text("기준일자");
            obj.set_cssclass("sta_WF_SchLabel");
            this.divSearch.addChild(obj.name, obj);

            obj = new Calendar("ctclDT_BASE","staDT_BASE:0.0","ccfCD_CORP:10.0","105","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("7");
            obj.set_dateformat("yyyy-MM-dd");
            obj.set_editformat("yyyyMMdd");
            obj.set_autoselect("true");
            this.divSearch.addChild(obj.name, obj);

            obj = new Div("divData","0","divSearch:10",null,null,"0","0",null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_cssclass("div_DATA_Bg");
            this.addChild(obj.name, obj);

            obj = new Grid("objGrid","0","0",null,null,"0","0",null,null,null,null,this.divData.form);
            obj.set_taborder("0");
            obj._setContents("");
            this.divData.addChild(obj.name, obj);

            obj = new Grid("grdForm","651","240","104","155",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("1");
            obj.set_binddataset("dsExcelForm");
            obj.set_visible("false");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/></Columns><Rows><Row size=\"24\" band=\"head\"/><Row size=\"24\"/></Rows><Band id=\"head\"><Cell text=\"사원번호\"/><Cell col=\"1\" text=\"면허코드\"/><Cell col=\"2\" text=\"자격번호\"/><Cell col=\"3\" text=\"허가기관\"/><Cell col=\"4\" text=\"취득일\"/><Cell col=\"5\" text=\"만료일\"/><Cell col=\"6\" text=\"등급\"/><Cell col=\"7\" text=\"기술수당여부\"/><Cell col=\"8\" text=\"기술수당금액\"/><Cell col=\"9\" text=\"비고\"/></Band><Band id=\"body\"><Cell text=\"bind:ID_SABUN\"/><Cell col=\"1\" text=\"bind:CD_LICENSE\"/><Cell col=\"2\" text=\"bind:NO_LICENSE\"/><Cell col=\"3\" text=\"bind:DS_ORGAN\"/><Cell col=\"4\" text=\"bind:DT_ACQUIRE\"/><Cell col=\"5\" text=\"bind:DT_EXPIRE\"/><Cell col=\"6\" text=\"bind:DS_LEVEL\"/><Cell col=\"7\" text=\"bind:YN_LICENSE\"/><Cell col=\"8\" text=\"bind:AM_LICENSE\"/><Cell col=\"9\" text=\"bind:DS_REMARK\"/></Band></Format></Formats>");
            this.divData.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this
            obj = new Layout("default","",this._adjust_width,this._adjust_height,this,function(p){});
            this.addLayout(obj.name, obj);
            
            // BindItem Information
            obj = new BindItem("item0","divSearch.form.ccfCD_CORP.form.CDTextBox","value","dsSearch","CD_CORP");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item1","divSearch.form.ccfCD_CORP.form.DSTextBox","value","dsSearch","DS_CORP");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item4","divSearch.form.ccfID_SABUN.form.CDTextBox","value","dsSearch","ID_SABUN");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item5","divSearch.form.ccfID_SABUN.form.DSTextBox","value","dsSearch","DS_HNAME");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item7","divSearch.form.edtID_PERSON","value","dsSearch","ID_PERSON");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item2","divSearch.form.ccfCD_LICENSE.form.CDTextBox","value","dsSearch","CD_LICENSE");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item3","divSearch.form.cboTY_RETIRE","value","dsSearch","TY_RETIRE");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item8","divSearch.form.cboTY_INWON","value","dsSearch","TY_INWON");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item9","divSearch.form.ctclDT_BASE","value","dsSearch","DT_BASE");
            this.addChild(obj.name, obj);
            obj.bind();
            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {
            this._addPreloadList("fdl","cmm::cmmCodeFind.xfdl");
        };
        
        // User Script
        this.registerScript("DAA_LICLIST.xfdl", function() {
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

        	//default
        	this.ccfCD_CORP.form.CDTextBox.set_value(this.AuthClient.CD_CORP);
        	this.ccfCD_CORP.form.DSTextBox.set_value(this.AuthClient.DS_CORP);

        	this.cboTY_RETIRE.set_index(0);
        	this.cboTY_INWON.set_index(0);

        	var today = this.gfnGetDate();
        	this.dsSearch.setColumn(0, "DT_BASE", today);

        // 	if(this.FormInfo.GR_SEARCH == "9"){
        // 		//GR_SEARCH 가 9인경우에는 본인것만 신청 가능
        // 		this.ccfID_SABUN.form.CDTextBox.set_value(this.AuthClient.ID_SABUN);
        // 		this.ccfID_SABUN.form.DSTextBox.set_value(this.AuthClient.DS_HNAME);
        // 		this.ccfCD_CORP.set_enable(false);
        // 		this.ccfID_SABUN.set_enable(false);
        // 	}

        	//화면 로드시 자동조회
        	//this.FormBtns.Select.click();
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
         	this.btnFormDown = this.gfnFormButtonAdd("FormDown", "fnFormDown"); //양식다운로드
        	this.btnExcelImport = this.gfnFormButtonAdd("ExcelImport", "fnExcelImport"); 	//엑셀업로드
        };

        /************************************************************************
         * 변수 선언
         ************************************************************************/
        this.fnSetVariable = function() {

        	this.dxGrid = this.divData.form.objGrid;

        	this.ccfCD_CORP = this.divSearch.form.ccfCD_CORP;
        	this.ccfID_SABUN = this.divSearch.form.ccfID_SABUN;
        	this.ccfCD_LICENSE = this.divSearch.form.ccfCD_LICENSE;
        	this.edtID_PERSON = this.divSearch.form.edtID_PERSON;
        	this.cboTY_RETIRE = this.divSearch.form.cboTY_RETIRE;
        	this.cboTY_INWON = this.divSearch.form.cboTY_INWON;
        	this.ctclDT_BASE = this.divSearch.form.ctclDT_BASE;
        };

        /************************************************************************
         * 이벤트 설정
         ************************************************************************/
        this.fnSetEvent = function() {
        	this.ccfCD_CORP.BeforeUserDataSetParam = "fnBeforeUserDataSetParam";
        	this.ccfCD_CORP.AfterCDTextChanged = "fnAfterCDTextChanged";
        	this.ccfID_SABUN.BeforeUserDataSetParam = "fnBeforeUserDataSetParam";
        	this.ccfID_SABUN.AfterCDTextChanged = "fnAfterCDTextChanged";
        	this.ccfCD_LICENSE.BeforeUserDataSetParam = "fnBeforeUserDataSetParam";
        	this.ccfCD_LICENSE.AfterCDTextChanged = "fnAfterCDTextChanged";


        	this.gfnGridInit(this.dxGrid, this.dsList, "DA", "DAA_LICLIST");

          	this.dxGrid.BeforeUserDataSetParam = "fnGrid_BeforeUserDataSetParam";// 그리드 코드파인드 설정
        	this.dxGrid.AfterCDTextChanged = "fnGrid_AfterCDTextChanged";	// 그리드 코드파인드 값 변경
        	this.dxGrid.AfterEdit = "fnGrid_AfterEdit";

        }

        /************************************************************************
         * 파라미터 설정
         ************************************************************************/
        this.fnSetParameter = function() {

        	this.dsSelect = new Dataset();
        	this.dsSelect.addColumn("CD_CORP", "string");
        	this.dsSelect.addColumn("ID_PERSON", "int");
        	this.dsSelect.addColumn("CD_LICENSE", "string");
        	this.dsSelect.addColumn("TY_RETIRE", "string");
        	this.dsSelect.addColumn("TY_INWON", "string");
        	this.dsSelect.addColumn("DT_BASE", "string");
        	this.dsSelect.addColumn("GR_SEARCH", "string");
        	this.dsSelect.addColumn("ID_USER", "string");
        	this.dsSelect.addColumn("TY_AUTH", "string");
        	this.dsSelect.addColumn("GR_CORP", "string");

        	this.dsSave = new Dataset();
        	this.dsSave.addColumn("TY_SAVE", "string");
        	this.dsSave.addColumn("ID_PERSON", "int");
        	this.dsSave.addColumn("NO_SEQ", "int");
        	this.dsSave.addColumn("CD_CORP", "string");
        	this.dsSave.addColumn("ID_SABUN", "string");
        	this.dsSave.addColumn("CD_LICENSE", "string");
        	this.dsSave.addColumn("DS_LICENSE", "string");
        	this.dsSave.addColumn("NO_LICENSE", "string");
        	this.dsSave.addColumn("DT_ACQUIRE", "string");
        	this.dsSave.addColumn("DS_ORGAN", "string");
        	this.dsSave.addColumn("DT_EXPIRE", "string");
        	this.dsSave.addColumn("DS_LEVEL", "string");
        	this.dsSave.addColumn("DS_REMARK", "string");
        	this.dsSave.addColumn("YN_LICENSE", "string");
        	this.dsSave.addColumn("AM_LICENSE", "bigdecimal");
        	this.dsSave.addColumn("GR_SEARCH", "string");
        	this.dsSave.addColumn("ID_USER", "string");
        	this.dsSave.addColumn("TY_AUTH", "string");
        	this.dsSave.addColumn("GR_CORP", "string");

        }

        /************************************************************************
         * 컨트롤 이벤트
         ************************************************************************/
         /*
          *	조회 버튼
          */
        this.fnSelect = function() {
        	if(!this.fnSelectValid()) return;

        	this.gfnGridBeforeSelect(this.dxGrid);
        	this.gfnSetFormStatus(this);

        	this.dsSelect.clearData();
        	this.dsSelect.addRow();

        	this.dsSelect.setColumn(0, "CD_CORP", this.gfnNvl(this.dsSearch.getColumn(0, "CD_CORP"), ""));
        	this.dsSelect.setColumn(0, "ID_PERSON", this.dsSearch.getColumn(0, "ID_PERSON"));
        	this.dsSelect.setColumn(0, "CD_LICENSE", this.gfnNvl(this.dsSearch.getColumn(0, "CD_LICENSE"), ""));
        	this.dsSelect.setColumn(0, "TY_RETIRE", this.gfnNvl(this.dsSearch.getColumn(0, "TY_RETIRE"), ""));
        	this.dsSelect.setColumn(0, "TY_INWON", this.gfnNvl(this.dsSearch.getColumn(0, "TY_INWON"), ""));
        	this.dsSelect.setColumn(0, "DT_BASE", this.gfnNvl(this.dsSearch.getColumn(0, "DT_BASE"), ""));
        	this.dsSelect.setColumn(0, "GR_SEARCH", this.FormInfo.GR_SEARCH);
        	this.dsSelect.setColumn(0, "ID_USER", this.AuthClient.ID_USER);
        	this.dsSelect.setColumn(0, "TY_AUTH", this.FormInfo.TY_AUTH);
        	this.dsSelect.setColumn(0, "GR_CORP", this.AuthClient.CD_CORP);

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

        this.fnSelectValid = function(){
        	if(this.gfnIsNull(this.ccfCD_CORP.form.CDTextBox.value)){
        		this.fnValidCallback = function(){
        			this.ccfCD_CORP.form.CDTextBox.setFocus();
        		}
        		this.gfnAlert("법인을 선택하세요!", "fnValidCallback");
        		return false;
        	}

        	return true;
        }

        this.fnAdd = function() {
        	var nrow = this.gfnGridAdd(this.dxGrid);

        	this.dsList.setColumn(nrow, "CD_CORP", this.ccfCD_CORP.form.CDTextBox.value);
        	this.dsList.setColumn(nrow, "DS_CORP", this.ccfCD_CORP.form.DSTextBox.value);
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
        	this.dsSave.clearData();

        	for (var i = 0; i < this.dsList.rowcount; i++) {
        		var flag = this.gfnGetFlag(this.dsList, i);
        		switch(flag) {
        			case "I":
        			case "U":
        			case "D":

        				var nrow = this.dsSave.addRow();
        				this.dsSave.setColumn(nrow, "TY_SAVE", flag);
        				this.dsSave.setColumn(nrow, "ID_PERSON", this.dsList.getColumn(i, "ID_PERSON"));
        				this.dsSave.setColumn(nrow, "NO_SEQ", (flag == "I" ? 0 : this.dsList.getColumn(i, "NO_SEQ")));
        				this.dsSave.setColumn(nrow, "CD_CORP", this.dsList.getColumn(i, "CD_CORP"));
        				this.dsSave.setColumn(nrow, "ID_SABUN", this.dsList.getColumn(i, "ID_SABUN"));
        				this.dsSave.setColumn(nrow, "CD_LICENSE", this.gfnNvl(this.dsList.getColumn(i, "CD_LICENSE"), ""));
        				this.dsSave.setColumn(nrow, "DS_LICENSE", this.gfnNvl(this.dsList.getColumn(i, "DS_LICENSE"), ""));
        				this.dsSave.setColumn(nrow, "NO_LICENSE", this.gfnNvl(this.dsList.getColumn(i, "NO_LICENSE"), ""));
        				this.dsSave.setColumn(nrow, "DT_ACQUIRE", this.gfnNvl(this.dsList.getColumn(i, "DT_ACQUIRE"), ""));
        				this.dsSave.setColumn(nrow, "DS_ORGAN", this.gfnNvl(this.dsList.getColumn(i, "DS_ORGAN"), ""));
        				this.dsSave.setColumn(nrow, "DT_EXPIRE", this.gfnNvl(this.dsList.getColumn(i, "DT_EXPIRE"), ""));
        				this.dsSave.setColumn(nrow, "DS_LEVEL", this.gfnNvl(this.dsList.getColumn(i, "DS_LEVEL"), ""));
        				this.dsSave.setColumn(nrow, "DS_REMARK", this.gfnNvl(this.dsList.getColumn(i, "DS_REMARK"), ""));
        				this.dsSave.setColumn(nrow, "YN_LICENSE", this.gfnNvl(this.dsList.getColumn(i, "YN_LICENSE"), ""));
        				this.dsSave.setColumn(nrow, "AM_LICENSE", this.gfnNvl(this.dsList.getColumn(i, "AM_LICENSE"), 0));
        				this.dsSave.setColumn(nrow, "GR_SEARCH", this.FormInfo.GR_SEARCH);
        				this.dsSave.setColumn(nrow, "ID_USER", this.AuthClient.ID_USER);
        				this.dsSave.setColumn(nrow, "TY_AUTH", this.FormInfo.TY_AUTH);
        				this.dsSave.setColumn(nrow, "GR_CORP", this.AuthClient.CD_CORP);
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
        						callBackFnc);   // 통신방법 정의 [생략가능]
        }

        this.fnExcel = function() {
        	this.gfnExcelExport(this.dxGrid);
        }

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
        // 			this.fnSaveAfter = function(){
        // 				this.FormBtns.Select.click();
        // 			}
        // 			this.gfnAlert("저장이 완료되었습니다.", "fnSaveAfter");

        			this.FormBtns.Select.click();
        			this.gfnAlert("저장이 완료되었습니다.");
        		} else {
        			this.gfnAlert(errorMsg);
        		}
        	}
        }


        /************************************************************************
         * 코드파인드 이벤트
         ************************************************************************/
        this.fnBeforeUserDataSetParam = function(id, dsUserParam, nrow) {
        	if(id == "ccfCD_CORP"){
        		;

        	}
        	else if(id == "ccfID_SABUN"){
        		if(this.gfnIsNull(this.ccfCD_CORP.form.CDTextBox.value)){
        			this.fnValidCallback = function(){
        				this.ccfCD_CORP.form.CDTextBox.setFocus();
        			}
        			this.gfnAlert("법인을 선택하세요!", "fnValidCallback");
        			return false;
        		}
        		dsUserParam.setColumn(nrow, "CD_DEPT", this.AuthClient.CD_DEPT);
        		dsUserParam.setColumn(nrow, "CD_CORP", this.gfnNvl(this.ccfCD_CORP.form.CDTextBox.value,"%"));
        		dsUserParam.setColumn(nrow, "GR_SEARCH", this.FormInfo.GR_SEARCH);
        		dsUserParam.setColumn(nrow, "YN_CORP", "N");
        		dsUserParam.setColumn(nrow, "TY_RETIRE", "%");
        	}
        	else if(id == "ccfCD_LICENSE"){
        		dsUserParam.setColumn(nrow, "CD_PREFIX", "LA");
        	}

        	return true;
        };

        this.fnAfterCDTextChanged = function(id, codeFindData) {
        	var arr = codeFindData;

        	if(id == "ccfCD_CORP"){
        		this.ccfID_SABUN.form.fnCodeFindClear();
        		this.edtID_PERSON.set_value("");

        	}else if(id == "ccfID_SABUN"){
        		this.edtID_PERSON.set_value("");
        		if(arr.length >0){
        			this.edtID_PERSON.set_value(arr[0]["ID_PERSON"]);
        		}
        	}
        }

        /************************************************************************
         * 그리드 이벤트
         ************************************************************************/
        this.fnGrid_BeforeUserDataSetParam = function(id, dsUserParam, nrow){
        	if(id == "DAX_CFBASEINFO_ALL") {
        		// 사번 	ID_SABUN
        		var sCD_CORP = this.dsList.getColumn(this.dsList.rowposition, "CD_CORP");
        		if(this.gfnIsNull(sCD_CORP)){
        			this.gfnAlert("법인을 먼저 선택하세요.");
        			return false;
        		}

        		dsUserParam.setColumn(nrow, "CD_DEPT", this.AuthClient.CD_DEPT);
        		dsUserParam.setColumn(nrow, "CD_CORP", sCD_CORP);
        		dsUserParam.setColumn(nrow, "GR_SEARCH", this.FormInfo.GR_SEARCH);
        		dsUserParam.setColumn(nrow, "YN_CORP", "N");
        		dsUserParam.setColumn(nrow, "TY_RETIRE", "%");
        	}
         	else if(id == "LA") {
        		//자격
        		dsUserParam.setColumn(nrow, "CD_PREFIX", "LA");
         	}
         	return true;
        };

        this.fnGrid_AfterCDTextChanged = function(id, codeFindData) {
        	if(id == "DAX_CFBASEINFO_ALL") {
        		var arr = codeFindData;
        		if(arr.length > 0) {
        			//trace("DAX_CFBASEINFO_ALL", arr[0]);
        		}else{
        		}
        	}
        	else if(id == "LA"){	//자격
        		this.dsList.setColumn(this.dsList.rowposition, "DS_LICENSE_ETC", "");
        		if(codeFindData.length >0){
        			var sAM_ALLOW = codeFindData[0]["AM_ALLOW"];
        			if(!this.gfnIsNull(sAM_ALLOW) && parseFloat(sAM_ALLOW) > 0){
        				this.dsList.setColumn(this.dsList.rowposition, "YN_LICENSE", "Y");
        				this.dsList.setColumn(this.dsList.rowposition, "AM_LICENSE", parseFloat(sAM_ALLOW));
        			}else{
        				this.dsList.setColumn(this.dsList.rowposition, "YN_LICENSE", "N");
        				this.dsList.setColumn(this.dsList.rowposition, "AM_LICENSE", 0);
        			}
        		}
        	}
        };

        this.fnGrid_AfterEdit = function(obj,e) {
        	//자격
        	if(e.columnid == "CD_LICENSE" && this.gfnIsNull(e.newvalue)) {
        		this.dsList.setColumn(this.dsList.rowposition, "YN_LICENSE", null);
        		this.dsList.setColumn(this.dsList.rowposition, "AM_LICENSE", null);
        	}

        }


        /************************************************************************
         * 확장버튼 이벤트
         ************************************************************************/
        this.fnFormDown = function(){
        	this.dsExcelForm.clearData();
        	this.gfnExcelExport(this.divData.form.grdForm);
        }

        this.fnExcelImport = function(){
        	if(!this.fnSelectValid()) return;

        	this.gfnExcelImport("dsExcelForm","Sheet1","A2","fnExcelImportCallback","import",this);
        }


        this.fnExcelImportCallback = function(sImportId, dsOut, dsSheet) {
        	//trace("sImportId", sImportId);

         	if (dsOut.rowcount == 0)  {
        		this.gfnAlert("엑셀파일에 내용이 없습니다.");
        		return false;
        	}

        	// 주석시작(양식 다운로드해서 업로드하는게 아니면 아래 부분 주석처리하고 값셋하는부분 더 아래부분 주석 풀어서 처리하면 됨, copyRow로 주석처리해야함)
        // 	trace(dsOut.saveXML());
        // 	for (var i=0; i< this.dsList.getColCount(); i++)
        // 	{
        // 		sColumnId = "Column"+i;
        //
        // 		var sColumnNm = this.gfnGridGetBindColumnNameByIndex(this.dxGrid, i);
        // 		if (sColumnNm != "" && sColumnId != sColumnNm)
        // 		{
        // 			dsOut.updateColID(sColumnId, sColumnNm);
        // 		}
        // 	}
        // 	trace("==============111===============");
        //	trace(dsOut.saveXML());


            //그리드 코드파인드 타게하려고 set_enableevent false 주석 막음 >> 속도가 안나면 set_enableevent false 할것
        	//this.dsList.set_enableevent(false);
        	for (var i=0; i< dsOut.rowcount; i++) {
        		var nrow = this.dsList.addRow();

        		//아래 copyRow가 컬럼변경 이벤트를 실행하지 않음. 코드파인더 실행때문에 이 위치로 이동
        		// 양식이 일치하는 경우 copyRow
        		//this.dsList.copyRow(nrow, dsOut, i);

        		this.dsList.setColumn(nrow, "CD_CORP", this.dsSearch.getColumn(0, "CD_CORP"));  //법인
        		this.dsList.setColumn(nrow, "DS_CORP", this.dsSearch.getColumn(0, "DS_CORP"));  //법인
        		this.dsList.setColumn(nrow, "ID_SABUN", dsOut.getColumn(i, "Column0"));  //사번
        		this.dsList.setColumn(nrow, "CD_LICENSE", dsOut.getColumn(i, "Column1"));  //면허코드
        		this.dsList.setColumn(nrow, "NO_LICENSE", dsOut.getColumn(i, "Column2"));  //자격번호
        		this.dsList.setColumn(nrow, "DS_ORGAN", dsOut.getColumn(i, "Column3")); //허가기관
        		this.dsList.setColumn(nrow, "DT_ACQUIRE", dsOut.getColumn(i, "Column4"));  //취득일
        		this.dsList.setColumn(nrow, "DT_EXPIRE", dsOut.getColumn(i, "Column5"));  //만료일
        		this.dsList.setColumn(nrow, "DS_LEVEL", dsOut.getColumn(i, "Column6"));  //등급
        		this.dsList.setColumn(nrow, "YN_LICENSE", dsOut.getColumn(i, "Column7"));  //기술수당여부
        		this.dsList.setColumn(nrow, "AM_LICENSE", dsOut.getColumn(i, "Column8"));  //기술수당금액
        		this.dsList.setColumn(nrow, "DS_REMARK", dsOut.getColumn(i, "Column9"));  //비고

        		this.dsList.setColumn(nrow, this.ucFlag, "I");
        	}
        	//this.dsList.set_enableevent(true);

        	this.gfnSetFormStatus(this, "I");
        };
        /************************************************************************
         * 기타 이벤트
         ************************************************************************/
        this.dsSearch_onvaluechanged = function(obj,e){
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
            this.divSearch.form.cboTY_RETIRE.addEventHandler("onitemchanged",this.fnSearchInit,this);
            this.dsSearch.addEventHandler("onvaluechanged",this.dsSearch_onvaluechanged,this);
        };
        this.loadIncludeScript("DAA_LICLIST.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
