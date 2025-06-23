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
                this._setFormPosition(830,520);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("dsList", this);
            obj._setContents("");
            this.addChild(obj.name, obj);


            obj = new Dataset("_dsProc", this);
            obj._setContents("<ColumnInfo><Column id=\"TARGET\" type=\"STRING\" size=\"256\"/><Column id=\"SP\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"TARGET\">select</Col><Col id=\"SP\">DSAPR_INSU_USER_LIST_SELECT</Col></Row><Row><Col id=\"TARGET\">insert</Col><Col id=\"SP\">DSAPR_INSU_USER_LIST_INSERT</Col></Row><Row><Col id=\"TARGET\">update</Col><Col id=\"SP\">DSAPR_INSU_USER_LIST_UPDATE</Col></Row><Row><Col id=\"TARGET\">calcinsure</Col><Col id=\"SP\">DSZPR_CALCINSURE_SELECT</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsSearch", this);
            obj._setContents("<ColumnInfo><Column id=\"CD_SITE\" type=\"STRING\" size=\"256\"/><Column id=\"NO_ID\" type=\"STRING\" size=\"256\"/><Column id=\"NO_ID_REAL\" type=\"STRING\" size=\"256\"/><Column id=\"TY_GUBUN\" type=\"STRING\" size=\"256\"/><Column id=\"ORG_NO_JUMIN\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"CD_SITE\"/><Col id=\"NO_ID\"/><Col id=\"NO_ID_REAL\"/><Col id=\"TY_GUBUN\"/></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsCalcinSureRst", this);
            obj._setContents("");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsReturnData", this);
            obj._setContents("<ColumnInfo><Column id=\"TY_GUBUN_KO\" type=\"STRING\" size=\"256\"/><Column id=\"TY_USE_KO\" type=\"STRING\" size=\"256\"/><Column id=\"AM_KUMAK_KO\" type=\"STRING\" size=\"256\"/><Column id=\"TY_GUBUN_MI\" type=\"STRING\" size=\"256\"/><Column id=\"TY_USE_MI\" type=\"STRING\" size=\"256\"/><Column id=\"AM_KUMAK_MI\" type=\"STRING\" size=\"256\"/><Column id=\"TY_GUBUN_SI\" type=\"STRING\" size=\"256\"/><Column id=\"TY_USE_SI\" type=\"STRING\" size=\"256\"/><Column id=\"AM_KUMAK_SI\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsList2", this);
            obj._setContents("");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Div("divSearch","0.0","10.0",null,"46.0","0",null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_cssclass("div_SEARCH_Bg");
            obj.set_formscrolltype("none");
            this.addChild(obj.name, obj);

            obj = new Static("sta02","0.0","10.0","144.0","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("0");
            obj.set_text("현장/부서 코드");
            obj.set_cssclass("sta_WF_SchLabelE");
            this.divSearch.addChild(obj.name, obj);

            obj = new Div("ccfCD_SITE","sta02:0.0","10.0","250","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.getSetter("CodeFindName").set("DZX_CFDEPTCORP");
            obj.getSetter("CDTextWidth").set("80");
            obj.set_taborder("1");
            obj.set_url("cmm::cmmCodeFind.xfdl");
            obj.set_text("");
            obj.set_enable("false");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("sta01","ccfCD_SITE:0.0","10.0","144.0","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("2");
            obj.set_text("성명");
            obj.set_cssclass("sta_WF_SchLabelE");
            this.divSearch.addChild(obj.name, obj);

            obj = new Div("ccfNO_ID","sta01:0.0","10.0","200","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.getSetter("CDTextWidth").set("80");
            obj.set_taborder("3");
            obj.set_url("cmm::cmmCodeFind.xfdl");
            obj.set_text("");
            obj.set_enable("false");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("sta03","ccfNO_ID:0.0","10.0","144.0","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("5");
            obj.set_text("구분");
            obj.set_visible("false");
            obj.set_cssclass("sta_WF_SchLabelE");
            this.divSearch.addChild(obj.name, obj);

            obj = new Combo("ccboTY_GUBUN","sta03:0.0","10.0","120","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("4");
            obj.set_codecolumn("codecolumn");
            obj.set_datacolumn("datacolumn");
            obj.set_visible("false");
            var divSearch_form_ccboTY_GUBUN_innerdataset = new nexacro.NormalDataset("divSearch_form_ccboTY_GUBUN_innerdataset", obj);
            divSearch_form_ccboTY_GUBUN_innerdataset._setContents("<ColumnInfo><Column id=\"codecolumn\" size=\"256\"/><Column id=\"datacolumn\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"codecolumn\">KO</Col><Col id=\"datacolumn\">국민연금</Col></Row><Row><Col id=\"codecolumn\">MI</Col><Col id=\"datacolumn\">건강보험</Col></Row><Row><Col id=\"codecolumn\">SI</Col><Col id=\"datacolumn\">장기요양</Col></Row></Rows>");
            obj.set_innerdataset(divSearch_form_ccboTY_GUBUN_innerdataset);
            obj.set_text("고용보험");
            obj.set_value("GO");
            obj.set_index("0");
            this.divSearch.addChild(obj.name, obj);

            obj = new Div("divData","0","divSearch:10",null,null,"0","0",null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_cssclass("div_DATA_Bg");
            this.addChild(obj.name, obj);

            obj = new Grid("objGrid","0","30",null,"200","0",null,null,null,null,null,this.divData.form);
            obj.set_taborder("0");
            obj._setContents("");
            this.divData.addChild(obj.name, obj);

            obj = new Grid("objGrid2","0","264",null,"200","0",null,null,null,null,null,this.divData.form);
            obj.set_taborder("1");
            obj._setContents("");
            this.divData.addChild(obj.name, obj);

            obj = new Static("sta02","1","0",null,"22","0",null,null,null,null,null,this.divData.form);
            obj.set_taborder("2");
            obj.set_cssclass("sta_TITLE_Bg");
            obj.set_text("국민연금");
            this.divData.addChild(obj.name, obj);

            obj = new Static("sta02_00","1","234",null,"22","0",null,null,null,null,null,this.divData.form);
            obj.set_taborder("3");
            obj.set_text("건강보험/장기요양");
            obj.set_cssclass("sta_TITLE_Bg");
            this.divData.addChild(obj.name, obj);

            obj = new Button("btnSubAdd",null,"235","60","25","71",null,null,null,null,null,this.divData.form);
            obj.set_taborder("4");
            obj.set_text("추가");
            this.divData.addChild(obj.name, obj);

            obj = new Button("btnSubSave",null,"235","60","25","6",null,null,null,null,null,this.divData.form);
            obj.set_taborder("5");
            obj.set_text("저장");
            this.divData.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this
            obj = new Layout("default","",this._adjust_width,this._adjust_height,this,function(p){});
            this.addLayout(obj.name, obj);
            
            // BindItem Information
            obj = new BindItem("item0","divSearch.form.ccfCD_SITE.form.CDTextBox","value","dsSearch","CD_SITE");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item2","divSearch.form.ccfNO_ID.form.DSTextBox","value","dsSearch","NO_ID");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item1","divSearch.form.ccboTY_GUBUN","value","dsSearch","TY_GUBUN");
            this.addChild(obj.name, obj);
            obj.bind();
            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {
            this._addPreloadList("fdl","cmm::cmmCodeFind.xfdl");
        };
        
        // User Script
        this.registerScript("DSA_INSU_USER.xfdl", function() {
        this.objApp = this.gfnGetApplication();
        this.calcinSureRow = 0;
        this.calcinSureRow2 = 0;

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

        	this.dsSearch.setColumn(0, "CD_SITE", this.getOwnerFrame().CD_SITE);
        	this.divSearch.form.ccfCD_SITE.form.DSTextBox.set_value(this.getOwnerFrame().DS_SITE);
        	this.dsSearch.setColumn(0, "NO_ID", this.getOwnerFrame().NO_ID);
        	this.dsSearch.setColumn(0, "NO_ID_REAL", this.getOwnerFrame().NO_ID_REAL);
        	this.divSearch.form.ccfNO_ID.form.CDTextBox.set_value(this.getOwnerFrame().DS_NAME);
        //	this.dsSearch.setColumn(0, "TY_GUBUN", this.getOwnerFrame().TY_GUBUN);
        	this.dsSearch.setColumn(0, "ORG_NO_JUMIN", this.getOwnerFrame().ORG_NO_JUMIN);

        	// 타화면에서 오픈시 넘어오는 파라미터 처리
        	if(!this.gfnIsNull(this.getOwnerFrame().CD_SITE) && !this.gfnIsNull(this.getOwnerFrame().NO_ID) && !this.gfnIsNull(this.getOwnerFrame().NO_ID_REAL)) {
        		this.FormBtns.Select.click();
        	}

        };

        /************************************************************************
         * 버튼 설정 : 화면(Tab) 전환시 마다 호출
         * 서브버튼 사용 및 공통버튼 강제 제어시 여기서 처리
         ************************************************************************/
        this.fnSetButton = function() {
        	// Select, Add, Del, Save, Excel, Print
        	// SubSelect, SubAdd, SubDel, SuubSave, SubExcel
        	//this.FormBtns.Select.set_enable(false);
        }

        /************************************************************************
         * 확장 버튼 : 화면별 버튼 설정 ID, function 연결 (화면버튼관리)
         ************************************************************************/
        this.fnSetExtendButton = function() {
        	//this.btn1 = this.gfnFormButtonAdd("btnRiskDtls", "fnRiskDtls");
        	//this.btn2 = this.gfnFormButtonAdd("btnAprvCmpl", "fnAprvCmpl");
        	//this.btn3 = this.gfnFormButtonAdd("btnAprvCnc", "fnAprvCnc");
        };

        /************************************************************************
         * 변수 선언
         ************************************************************************/
        this.fnSetVariable = function() {
        	this.ccfCD_SITE = this.divSearch.form.ccfCD_SITE;
        	this.ccfNO_ID = this.divSearch.form.ccfNO_ID;
        	this.ccboTY_GUBUN = this.divSearch.form.ccboTY_GUBUN;	// GO:고용보험
        	this.dxGrid = this.divData.form.objGrid;
        	this.dxGrid2 = this.divData.form.objGrid2;
        };

        /************************************************************************
         * 이벤트 설정
         ************************************************************************/
        this.fnSetEvent = function() {
        	this.ccfNO_ID.CodeFindName = "DSX_CFEMPLOYEE_01";	// 성명-주민번호(검색조건)

        	this.ccfCD_SITE.BeforeUserDataSetParam = "fnBeforeUserDataSetParam";
        	this.ccfNO_ID.BeforeUserDataSetParam = "fnBeforeUserDataSetParam";

        	this.ccfCD_SITE.AfterCDTextChanged = "ccfCD_SITE_AfterCDTextChanged";
        	this.ccfNO_ID.AfterCDTextChanged = "ccfNO_ID_AfterCDTextChanged";

        	// 그리드 초기화
        	this.gfnGridInit(this.dxGrid, this.dsList, "DS", "DSA_INSU_USER_LIST");
        	this.gfnGridInit(this.dxGrid2, this.dsList2, "DS", "DSA_INSU_USER_LIST2");
        };

        /************************************************************************
         * 파라미터 설정
         ************************************************************************/
        this.fnSetParameter = function() {

        	this.dsSelect = new Dataset();
        	this.dsSelect.addColumn("REG_GUBUN", "string");
        	this.dsSelect.addColumn("ORG_NO_JUMIN", "string");
        	this.dsSelect.addColumn("NO_ID", "string");
        	this.dsSelect.addColumn("CD_SITE", "string");
        //	this.dsSelect.addColumn("TY_GUBUN", "string");

        	this.dsInsert = new Dataset();
        	this.dsInsert.addColumn("REG_GUBUN", "string");
        	this.dsInsert.addColumn("ORG_NO_JUMIN", "string");
        	this.dsInsert.addColumn("CD_SITE", "string");
        	this.dsInsert.addColumn("NO_ID", "string");
        	this.dsInsert.addColumn("TY_GUBUN", "string");
        	this.dsInsert.addColumn("YM_WORK", "string");
        	this.dsInsert.addColumn("TY_USE", "string");
        	this.dsInsert.addColumn("AM_BOSUWOLAK", "bigdecimal");
        	this.dsInsert.addColumn("AM_KUMAK", "bigdecimal");
        	this.dsInsert.addColumn("AM_KUMAK_SI", "bigdecimal");
        	this.dsInsert.addColumn("DT_CHANGE", "string");
        	this.dsInsert.addColumn("AM_ADD", "bigdecimal");
        	this.dsInsert.addColumn("AM_ADD_SI", "bigdecimal");
        	this.dsInsert.addColumn("DS_COMMENT", "string");

        	this.dsUpdate = new Dataset();
        	this.dsInsert.addColumn("REG_GUBUN", "string");
        	this.dsInsert.addColumn("ORG_NO_JUMIN", "string");
        	this.dsUpdate.addColumn("CD_SITE", "string");
        	this.dsUpdate.addColumn("NO_SEQ", "bigdecimal");
        	this.dsUpdate.addColumn("NO_ID", "string");
        	this.dsUpdate.addColumn("TY_GUBUN", "string");
        	this.dsUpdate.addColumn("YM_WORK", "string");
        	this.dsUpdate.addColumn("TY_USE", "string");
        	this.dsUpdate.addColumn("AM_BOSUWOLAK", "bigdecimal");
        	this.dsUpdate.addColumn("AM_KUMAK", "bigdecimal");
        	this.dsUpdate.addColumn("AM_KUMAK_SI", "bigdecimal");
        	this.dsUpdate.addColumn("DT_CHANGE", "string");
        	this.dsUpdate.addColumn("AM_ADD", "bigdecimal");
        	this.dsUpdate.addColumn("AM_ADD_SI", "bigdecimal");
        	this.dsUpdate.addColumn("DS_COMMENT", "string");

        	this.dsCalcinSure = new Dataset();
        	this.dsCalcinSure.addColumn("CD_CORP", "string");
        	this.dsCalcinSure.addColumn("YM_WORK", "string");
        	this.dsCalcinSure.addColumn("CD_GUBUN", "string");
        	this.dsCalcinSure.addColumn("TY_PERSON", "string");
        	this.dsCalcinSure.addColumn("AM_TARGET", "bigdecimal");

        }

        /************************************************************************
         * 컨트롤 이벤트
         ************************************************************************/
         /*
          *	조회 버튼
          */
        this.fnSelect = function() {
        	if (!this.fnSelectValidate()) return false;

        	if(this.dsSearch.getColumn(0, "TY_GUBUN") == "GO"){	//고용보험일때
        		// 그리드 초기화
        		this.gfnGridInit(this.dxGrid, this.dsList, "DS", "DSA_INSU_USER_GO_LIST");
        	}else{
        		// 그리드 초기화
        		this.gfnGridInit(this.dxGrid, this.dsList, "DS", "DSA_INSU_USER_LIST");
        	}

        	this.gfnGridBeforeSelect(this.dxGrid);

        	this.dsSelect.clearData();
        	this.dsSelect.addRow();

        	this.dsSelect.setColumn(0, "REG_GUBUN", this.getOwnerFrame().REG_GUBUN);
        	this.dsSelect.setColumn(0, "ORG_NO_JUMIN", this.dsSearch.getColumn(0, "ORG_NO_JUMIN"));
        	this.dsSelect.setColumn(0, "NO_ID", this.dsSearch.getColumn(0, "NO_ID_REAL"));
        	this.dsSelect.setColumn(0, "CD_SITE", this.dsSearch.getColumn(0, "CD_SITE"));
        //	this.dsSelect.setColumn(0, "TY_GUBUN", this.dsSearch.getColumn(0, "TY_GUBUN"));

        	var strSvcId    = "select";
        	var strSvcType  = "grid";
        	var inProc		= "_dsProc";
        	var inData      = "select=dsSelect";
        	var outData     = "dsList=select0 dsList2=select1";
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

        //	var TY_GUBUN = this.dsSelect.getColumn(0, "TY_GUBUN");
        var TY_GUBUN = '1';

        //	if(TY_GUBUN == "KO"){
        		var ORG_NO_JUMIN = this.getOwnerFrame().ORG_NO_JUMIN; // 주민번호
        		var DT_IPSA = this.getOwnerFrame().DT_IPSA;	// 입사일자
        		var JUMIN_SEX = ORG_NO_JUMIN.substring(6,7);

        		var nPayYear = "";

        		if(JUMIN_SEX == "1" || JUMIN_SEX == "2" || JUMIN_SEX == "5" || JUMIN_SEX == "6") {
        			nPayYear = "19" + ORG_NO_JUMIN.substring(0,2);
        		}else{
        			nPayYear = "20" + ORG_NO_JUMIN.substring(0,2);
        		}

        		nPayYear = (parseInt(nPayYear) + 60) + ORG_NO_JUMIN.substring(2,4) + "31"  //만 60세 생일 다음

        		if(nPayYear < DT_IPSA){
        			//var cnt = document.frmlns.laborhistcnt.value; AS-IS 소스반영필요
        			//if(cnt > 0){ }
        			//this.gfnAlert("만 65세 이후 고용된 근로자는 고용보험 공제대상이 아닙니다.");
        			//return;
        			TY_GUBUN = '0';
        		}
        //	}

        	var nrow = this.gfnGridAdd(this.dxGrid); // top (default), bottom, current

        	this.dsList.set_enableevent(false);
        	this.dsList.setColumn(nrow, "TY_USE", TY_GUBUN);
        	this.dsList.setColumn(nrow, "CD_SITE", this.dsSearch.getColumn(0, "CD_SITE"));
        	this.dsList.setColumn(nrow, "DS_DEPT", this.ccfCD_SITE.form.DSTextBox.value);
        	this.dsList.setColumn(nrow, "DT_CHANGE", this.gfnGetDate());
        	this.dsList.setColumn(nrow, "YM_WORK", this.gfnGetDate().substr(0, 6));
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
        this.fnSave = function(TY_GUBUN) {
        	// 그리드 필수항목 체크``
        	if (!this.gfnGridValidate(this.dxGrid)) return;

        	if(TY_GUBUN == "MI"){
        		this.gfnConfirm("건강보험 자격취득일이 매월 1일이 아닐 경우 (2일~말일)" + "\r\n"
        					+ "익월부터 보험료가 부과되오니," + "\r\n"
        					+ "취득월의 보험료는 0원으로 저장해 주세요." + "\r\n"
        					+ "\r\n"
        					+ "( 건강보험의 경우 해당 월의 1일자에 본인이 속해 있는 곳(지역 또는 직장)에서 보험료를 납부하므로, 4월 5월 입사자의 경우 5월 보험료부터 공제합니다. )"
        		, function(strId, val){
        			if(val){
        				this.fnSaveData2();
        			}
        		});
        	}else{
        		this.fnSaveData();
        	}
        }

        this.fnSaveData = function() {
        	this.dxGrid.updateToDataset();

        	this.dsInsert.clearData();
        	this.dsUpdate.clearData();

        	for (var i = 0; i < this.dsList.rowcount; i++) {
        		var flag = this.gfnGetFlag(this.dsList, i);
        		switch(flag) {
        			case "I":
        				var nrow = this.dsInsert.addRow();

        				this.dsInsert.setColumn(nrow, "REG_GUBUN", this.getOwnerFrame().REG_GUBUN);
        				this.dsInsert.setColumn(nrow, "ORG_NO_JUMIN", this.dsSelect.getColumn(0, "ORG_NO_JUMIN"));
        				this.dsInsert.setColumn(nrow, "CD_SITE", this.dsSelect.getColumn(0, "CD_SITE"));
        				this.dsInsert.setColumn(nrow, "NO_ID", this.dsSelect.getColumn(0, "NO_ID"));
        				this.dsInsert.setColumn(nrow, "TY_GUBUN", "KO");
        				this.dsInsert.setColumn(nrow, "YM_WORK", this.dsList.getColumn(i, "YM_WORK"));
        				this.dsInsert.setColumn(nrow, "TY_USE", this.dsList.getColumn(i, "TY_USE"));
        				this.dsInsert.setColumn(nrow, "AM_BOSUWOLAK", this.dsList.getColumn(i, "AM_BOSUWOLAK"));
        				this.dsInsert.setColumn(nrow, "AM_KUMAK", this.dsList.getColumn(i, "AM_KUMAK"));
        				this.dsInsert.setColumn(nrow, "DT_CHANGE", this.dsList.getColumn(i, "DT_CHANGE"));
        				this.dsInsert.setColumn(nrow, "AM_ADD", this.dsList.getColumn(i, "AM_ADD"));
        				this.dsInsert.setColumn(nrow, "DS_COMMENT", this.dsList.getColumn(i, "DS_COMMENT"));
        				break;

        			case "U":
        				var nrow = this.dsUpdate.addRow();
        				this.dsUpdate.setColumn(nrow, "REG_GUBUN", this.getOwnerFrame().REG_GUBUN);
        				this.dsUpdate.setColumn(nrow, "ORG_NO_JUMIN", this.dsSelect.getColumn(0, "ORG_NO_JUMIN"));
        				this.dsUpdate.setColumn(nrow, "CD_SITE", this.dsList.getColumn(i, "CD_SITE"));
        				this.dsUpdate.setColumn(nrow, "NO_ID", this.dsList.getColumn(i, "NO_ID"));
        				this.dsUpdate.setColumn(nrow, "NO_SEQ", this.dsList.getColumn(i, "NO_SEQ"));
        				this.dsUpdate.setColumn(nrow, "TY_GUBUN", this.dsList.getColumn(i, "TY_GUBUN"));
        				this.dsUpdate.setColumn(nrow, "YM_WORK", this.dsList.getColumn(i, "YM_WORK"));
        				this.dsUpdate.setColumn(nrow, "TY_USE", this.dsList.getColumn(i, "TY_USE"));
        				this.dsUpdate.setColumn(nrow, "AM_BOSUWOLAK", this.dsList.getColumn(i, "AM_BOSUWOLAK"));
        				this.dsUpdate.setColumn(nrow, "AM_KUMAK", this.dsList.getColumn(i, "AM_KUMAK"));
        				this.dsUpdate.setColumn(nrow, "DT_CHANGE", this.dsList.getColumn(i, "DT_CHANGE"));
        				this.dsUpdate.setColumn(nrow, "AM_ADD", this.dsList.getColumn(i, "AM_ADD"));
        				this.dsUpdate.setColumn(nrow, "DS_COMMENT", this.dsList.getColumn(i, "DS_COMMENT"));
        				break;
        		}
        	}

        	if (this.dsInsert.rowcount == 0 && this.dsUpdate.rowcount == 0) return;

        	var strSvcId    = "save";
        	var strSvcType  = "save";
        	var inProc		= "_dsProc";
        	var inData      = "insert=dsInsert update=dsUpdate";
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

        this.fnSaveData2 = function(){

        	this.dxGrid2.updateToDataset();

        	this.dsInsert.clearData();
        	this.dsUpdate.clearData();

        	for (var i = 0; i < this.dsList2.rowcount; i++) {
        		var flag = this.gfnGetFlag(this.dsList2, i);
        		switch(flag) {
        			case "I":
        				var nrow = this.dsInsert.addRow();

        				this.dsInsert.setColumn(nrow, "REG_GUBUN", this.getOwnerFrame().REG_GUBUN);
        				this.dsInsert.setColumn(nrow, "ORG_NO_JUMIN", this.dsSelect.getColumn(0, "ORG_NO_JUMIN"));
        				this.dsInsert.setColumn(nrow, "CD_SITE", this.dsSelect.getColumn(0, "CD_SITE"));
        				this.dsInsert.setColumn(nrow, "NO_ID", this.dsSelect.getColumn(0, "NO_ID"));
        				this.dsInsert.setColumn(nrow, "TY_GUBUN", "MI");
        				this.dsInsert.setColumn(nrow, "YM_WORK", this.dsList2.getColumn(i, "YM_WORK"));
        				this.dsInsert.setColumn(nrow, "TY_USE", this.dsList2.getColumn(i, "TY_USE"));
        				this.dsInsert.setColumn(nrow, "AM_BOSUWOLAK", this.dsList2.getColumn(i, "AM_BOSUWOLAK"));
        				this.dsInsert.setColumn(nrow, "AM_KUMAK", this.dsList2.getColumn(i, "AM_KUMAK"));
        				this.dsInsert.setColumn(nrow, "AM_KUMAK_SI", this.dsList2.getColumn(i, "AM_KUMAK_SI"));
        				this.dsInsert.setColumn(nrow, "DT_CHANGE", this.dsList2.getColumn(i, "DT_CHANGE"));
        				this.dsInsert.setColumn(nrow, "AM_ADD", this.dsList2.getColumn(i, "AM_ADD"));
        				this.dsInsert.setColumn(nrow, "AM_ADD_SI", this.dsList2.getColumn(i, "AM_ADD_SI"));
        				this.dsInsert.setColumn(nrow, "DS_COMMENT", this.dsList2.getColumn(i, "DS_COMMENT"));
        				break;

        			case "U":
        				var nrow = this.dsUpdate.addRow();
        				this.dsUpdate.setColumn(nrow, "REG_GUBUN", this.getOwnerFrame().REG_GUBUN);
        				this.dsUpdate.setColumn(nrow, "ORG_NO_JUMIN", this.dsSelect.getColumn(0, "ORG_NO_JUMIN"));
        				this.dsUpdate.setColumn(nrow, "CD_SITE", this.dsList2.getColumn(i, "CD_SITE"));
        				this.dsUpdate.setColumn(nrow, "NO_ID", this.dsList2.getColumn(i, "NO_ID"));
        				this.dsUpdate.setColumn(nrow, "NO_SEQ", this.dsList2.getColumn(i, "NO_SEQ"));
        				this.dsUpdate.setColumn(nrow, "TY_GUBUN", this.dsList2.getColumn(i, "TY_GUBUN"));
        				this.dsUpdate.setColumn(nrow, "YM_WORK", this.dsList2.getColumn(i, "YM_WORK"));
        				this.dsUpdate.setColumn(nrow, "TY_USE", this.dsList2.getColumn(i, "TY_USE"));
        				this.dsUpdate.setColumn(nrow, "AM_BOSUWOLAK", this.dsList2.getColumn(i, "AM_BOSUWOLAK"));
        				this.dsUpdate.setColumn(nrow, "AM_KUMAK", this.dsList2.getColumn(i, "AM_KUMAK"));
        				this.dsUpdate.setColumn(nrow, "AM_KUMAK_SI", this.dsList2.getColumn(i, "AM_KUMAK_SI"));
        				this.dsUpdate.setColumn(nrow, "DT_CHANGE", this.dsList2.getColumn(i, "DT_CHANGE"));
        				this.dsUpdate.setColumn(nrow, "AM_ADD", this.dsList2.getColumn(i, "AM_ADD"));
        				this.dsUpdate.setColumn(nrow, "AM_ADD_SI", this.dsList2.getColumn(i, "AM_ADD_SI"));
        				this.dsUpdate.setColumn(nrow, "DS_COMMENT", this.dsList2.getColumn(i, "DS_COMMENT"));
        				break;
        		}
        	}

        	if (this.dsInsert.rowcount == 0 && this.dsUpdate.rowcount == 0) return;

        	var strSvcId    = "save";
        	var strSvcType  = "save";
        	var inProc		= "_dsProc";
        	var inData      = "insert=dsInsert update=dsUpdate";
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

        	if (this.gfnIsNull(this.dsSearch.getColumn(0,"CD_SITE"))) {
        		validate = false;
        		// Alert후 실행할 처리
        		this.fnVaidateCallback = function() {
        			this.ccfCD_SITE.form.CDTextBox.setFocus();
        		}
        		this.gfnAlert("현장코드는 반드시 입력 하셔야 합니다.", "fnVaidateCallback");
        	}else if (this.gfnIsNull(this.dsSearch.getColumn(0,"NO_ID"))) {
        		validate = false;
        		// Alert후 실행할 처리
        		this.fnVaidateCallback = function() {
        			this.ccfNO_ID.form.CDTextBox.setFocus();
        		}
        		this.gfnAlert("성명은 반드시 입력 하셔야 합니다.", "fnVaidateCallback");
        	}
        // 	else if (this.gfnIsNull(this.dsSearch.getColumn(0,"TY_GUBUN"))) {
        // 		validate = false;
        // 		// Alert후 실행할 처리
        // 		this.fnVaidateCallback = function() {
        // 			this.ccboTY_GUBUN.setFocus();
        // 		}
        // 		this.gfnAlert("구분은 반드시 입력 하셔야 합니다.", "fnVaidateCallback");
        // 	}

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
        	else if(svcID == "calcinsure") {
        		this.gfnAlert("1");
        		this.dsList.setColumn(this.calcinSureRow, "AM_KUMAK",  this.dsCalcinSureRst.getColumn(0, "AM_RTN"));
        	}
        	else if(svcID == "calcinsure2") {
        		this.dsList2.setColumn(this.calcinSureRow2, "AM_KUMAK",  this.dsCalcinSureRst.getColumn(0, "AM_RTN"));
        		this.dsList2.setColumn(this.calcinSureRow2, "AM_KUMAK_SI",  this.dsCalcinSureRst.getColumn(0, "AM_RTN_SI"));
        	}
        }

        /************************************************************************
         * 코드파인드 이벤트
         ************************************************************************/
        //코드파인드의 파라미터 값을 넘겨줄때 사용하는 함수
        this.fnBeforeUserDataSetParam = function(id, dsUserParam, nrow) {

        	if (id == "ccfCD_SITE") {
        		dsUserParam.setColumn(nrow, "CD_CORP", this.objApp.gdsUserInfo.getColumn(0, "CD_CORP"));
        	}
        	else if (id == "ccfNO_ID"){
         		if (this.gfnIsNull(this.dsSearch.getColumn(0, "CD_SITE"))) {
         			this.gfnAlert("현장코드를 먼저 입력하세요.");
         			return false;
         		}
        		dsUserParam.setColumn(nrow, "CD_SITE", this.dsSearch.getColumn(0, "CD_SITE"));
        	}

        	return true;
        }

        // 현장코드 입력시 성명-주민번호 재선택 하기위해 null값으로 초기화 시킴
        this.ccfCD_SITE_AfterCDTextChanged = function(id, codeFindData) {
        	this.dsSearch.setColumn(0, "NO_ID", "");		// 주민번호
        	this.dsSearch.setColumn(0, "NO_ID_REAL", "");	// 암호화 안된 주민번호
        	this.ccfNO_ID.form.fnCodeFindClear();		// 이름

        }

        // 성명-주민번호 암호화 안된 리얼주민번호 셋팅
        this.ccfNO_ID_AfterCDTextChanged = function(id, codeFindData) {
        	// 코드,명칭 외 추가 컬럼 처리
        	var arr = codeFindData; //this.ccfCD_DEPT_ORG.form.SelectedData; 둘다 사용가능
        	var ds_noIdReal = "";

        	if (arr.length > 0) {
        		ds_noIdReal = arr[0]["NO_ID_REAL"];
        	}
        	this.dsSearch.setColumn(0, "NO_ID_REAL", ds_noIdReal);
        }
        /************************************************************************
         * 그리드 이벤트
         ************************************************************************/

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

        this.dsList_oncolumnchanged = function(obj,e)
        {
        	if(e.columnid == "TY_USE"){
        		var ORG_NO_JUMIN = this.getOwnerFrame().ORG_NO_JUMIN; // 주민번호
        		var DT_IPSA = this.getOwnerFrame().DT_IPSA;	// 입사일자
        		var JUMIN_SEX = ORG_NO_JUMIN.substring(6,7);

        		var nPayYear = "";

        		if(JUMIN_SEX == "1" || JUMIN_SEX == "2" || JUMIN_SEX == "5" || JUMIN_SEX == "6") {
        			nPayYear = "19" + ORG_NO_JUMIN.substring(0,2);
        		}else{
        			nPayYear = "20" + ORG_NO_JUMIN.substring(0,2);
        		}

        		nPayYear = (parseInt(nPayYear) + 60) + ORG_NO_JUMIN.substring(2,4) + "31"  //만 60세 생일 다음

        		if(nPayYear < DT_IPSA){
        			//var cnt = document.frmlns.laborhistcnt.value; AS-IS 소스반영필요
        			//if(cnt > 0){ }
        			this.gfnAlert("만 60세 이후 고용된 근로자는 고용보험 공제대상이 아닙니다.");
        			this.dsList.setColumn(e.row, "TY_USE", '0');
        			return;
        		}
        	}
        	//금액2부분 자동계산
        	if(e.columnid == "AM_BOSUWOLAK" || e.columnid == "YM_WORK"){
        		// 금액2 자동계산 로직 추가 예정.
        		this.calcinSureRow = e.row;
        		this.fnCalcinSure("A");
        		//this.dsList.setColumn(e.row, "AM_KUMAK", e.newvalue / 10);
        	}

        	if(this.dsSelect.getColumn(0, "TY_GUBUN") == "GO" && e.columnid == "DT_CHANGE"){
        		this.dsList.setColumn(e.row, "YM_WORK", e.newvalue.substring(0,6));
        	}
        };

        this.dsList2_oncolumnchanged = function(obj,e)
        {
        	//금액2부분 자동계산
        	if(e.columnid == "AM_BOSUWOLAK" || e.columnid == "YM_WORK"){
        		// 금액2 자동계산 로직 추가 예정.
        		this.calcinSureRow2 = e.row;
        		this.fnCalcinSure2("H1");
        		//this.dsList.setColumn(e.row, "AM_KUMAK", e.newvalue / 10);
        	}
        };

        this.fnCalcinSure = function(CD_GUBUN) {

        // 	if(this.dsSelect.getColumn(0, "TY_GUBUN") == "KO"){
        // 		CD_GUBUN = "A";
        // 	}else if(this.dsSelect.getColumn(0, "TY_GUBUN") == "MI"){
        // 		CD_GUBUN = "H1";
        // 	}else if(this.dsSelect.getColumn(0, "TY_GUBUN") == "SI"){
        // 		CD_GUBUN = "H3";
        // 	}

        	this.dsCalcinSure.clearData();
        	this.dsCalcinSure.addRow();

        	this.dsCalcinSure.setColumn(0, "CD_CORP", "");
        	this.dsCalcinSure.setColumn(0, "YM_WORK", this.dsList.getColumn(this.calcinSureRow, "YM_WORK"));
        	this.dsCalcinSure.setColumn(0, "CD_GUBUN", CD_GUBUN);
        	this.dsCalcinSure.setColumn(0, "TY_PERSON", "P");
        	this.dsCalcinSure.setColumn(0, "AM_TARGET", this.dsList.getColumn(this.calcinSureRow, "AM_BOSUWOLAK"));

        	var strSvcId    = "calcinsure";
        	var strSvcType  = "select";
        	var inProc		= "_dsProc";
        	var inData      = "calcinsure=dsCalcinSure";
        	var outData     = "dsCalcinSureRst=calcinsure0";
        	var strArg      = "";
        	var callBackFnc = "fnCallback";

        	this.gfnTransaction( strSvcId , 	// transaction을 구분하기 위한 svc id값
        						strSvcType , 	// transaction을 요청할 구분
        						inProc,			// Procedure 정보 Dataset 이름
        						inData , 		// 입력값으로 보낼 dataset id , a=b형태로 실제이름과 입력이름을 매칭
        						outData , 		// 처리결과값으로 받을 dataset id, a=b형태로 실제이름과 입력이름을 매칭
        						strArg, 			// 입력갑스로 보낼 argument
        						callBackFnc); // 통신방법 정의 [생략가능]
        }

        this.fnCalcinSure2 = function(CD_GUBUN) {

        // 	if(this.dsSelect.getColumn(0, "TY_GUBUN") == "KO"){
        // 		CD_GUBUN = "A";
        // 	}else if(this.dsSelect.getColumn(0, "TY_GUBUN") == "MI"){
        // 		CD_GUBUN = "H1";
        // 	}else if(this.dsSelect.getColumn(0, "TY_GUBUN") == "SI"){
        // 		CD_GUBUN = "H3";
        // 	}

        	this.dsCalcinSure.clearData();
        	this.dsCalcinSure.addRow();

        	this.dsCalcinSure.setColumn(0, "CD_CORP", "");
        	this.dsCalcinSure.setColumn(0, "YM_WORK", this.dsList2.getColumn(this.calcinSureRow2, "YM_WORK"));
        	this.dsCalcinSure.setColumn(0, "CD_GUBUN", CD_GUBUN);
        	this.dsCalcinSure.setColumn(0, "TY_PERSON", "P");
        	this.dsCalcinSure.setColumn(0, "AM_TARGET", this.dsList2.getColumn(this.calcinSureRow2, "AM_BOSUWOLAK"));

        	var strSvcId    = "calcinsure2";
        	var strSvcType  = "select";
        	var inProc		= "_dsProc";
        	var inData      = "calcinsure=dsCalcinSure";
        	var outData     = "dsCalcinSureRst=calcinsure0";
        	var strArg      = "";
        	var callBackFnc = "fnCallback";

        	this.gfnTransaction( strSvcId , 	// transaction을 구분하기 위한 svc id값
        						strSvcType , 	// transaction을 요청할 구분
        						inProc,			// Procedure 정보 Dataset 이름
        						inData , 		// 입력값으로 보낼 dataset id , a=b형태로 실제이름과 입력이름을 매칭
        						outData , 		// 처리결과값으로 받을 dataset id, a=b형태로 실제이름과 입력이름을 매칭
        						strArg, 			// 입력갑스로 보낼 argument
        						callBackFnc); // 통신방법 정의 [생략가능]
        }



        this.divData_btnSubAdd_onclick = function(obj,e)
        {
        	var nrow = this.gfnGridAdd(this.dxGrid2); // top (default), bottom, current

        	this.dsList2.set_enableevent(false);
        	this.dsList2.setColumn(nrow, "TY_USE", "1");
        	this.dsList2.setColumn(nrow, "CD_SITE", this.dsSearch.getColumn(0, "CD_SITE"));
        	this.dsList2.setColumn(nrow, "DS_DEPT", this.ccfCD_SITE.form.DSTextBox.value);
        	this.dsList2.setColumn(nrow, "DT_CHANGE", this.gfnGetDate());
        	this.dsList2.setColumn(nrow, "YM_WORK", this.gfnGetDate().substr(0, 6));
        	this.dsList2.set_enableevent(true);
        };

        this.divData_btnSubDel_onclick = function(obj,e)
        {
        	this.gfnGridDel(this.dxGrid2);
        };

        this.divData_btnSubSave_onclick = function(obj,e)
        {
        	this.fnSave("MI");
        };

        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.form_onload,this);
            this.divData.form.btnSubAdd.addEventHandler("onclick",this.divData_btnSubAdd_onclick,this);
            this.divData.form.btnSubSave.addEventHandler("onclick",this.divData_btnSubSave_onclick,this);
            this.dsList.addEventHandler("oncolumnchanged",this.dsList_oncolumnchanged,this);
            this.dsSearch.addEventHandler("onvaluechanged",this.dsSearch_onvaluechanged,this);
            this.dsList2.addEventHandler("oncolumnchanged",this.dsList2_oncolumnchanged,this);
        };
        this.loadIncludeScript("DSA_INSU_USER.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
