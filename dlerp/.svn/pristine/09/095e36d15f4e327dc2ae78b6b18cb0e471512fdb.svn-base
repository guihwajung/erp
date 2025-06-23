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
            this.set_titletext("평가(현장)");
            if (Form == this.constructor)
            {
                this._setFormPosition(1280,720);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("dsList", this);
            obj._setContents("");
            this.addChild(obj.name, obj);


            obj = new Dataset("_dsProc", this);
            obj._setContents("<ColumnInfo><Column id=\"TARGET\" type=\"STRING\" size=\"256\"/><Column id=\"SP\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"TARGET\">select</Col><Col id=\"SP\">DCDPR_EVALUE_SELECT</Col></Row><Row><Col id=\"TARGET\">update</Col><Col id=\"SP\">DCDPR_EVALUE_UPDATE</Col></Row><Row><Col id=\"SP\">DCDPR_EVALUE_SUBMIT</Col><Col id=\"TARGET\">submit</Col></Row><Row><Col id=\"SP\">DCDPR_EVALUE_SUBMIT_CANCEL</Col><Col id=\"TARGET\">submit_cancel</Col></Row><Row><Col id=\"TARGET\">year</Col><Col id=\"SP\">DCDPR_EVALUEMAGAM_YEAR_MAX_SELECT</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsSearch", this);
            obj._setContents("<ColumnInfo><Column id=\"YR_MAGAM\" type=\"STRING\" size=\"256\"/><Column id=\"NO_SEQ\" type=\"STRING\" size=\"256\"/><Column id=\"CD_SITE\" type=\"STRING\" size=\"256\"/><Column id=\"CD_EVALUEKIND\" type=\"STRING\" size=\"256\"/><Column id=\"CD_VENDOR\" type=\"STRING\" size=\"256\"/><Column id=\"ID_EVALUE\" type=\"STRING\" size=\"256\"/><Column id=\"NO_CONT\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"YR_MAGAM\"/><Col id=\"NO_SEQ\"/><Col id=\"CD_SITE\"/><Col id=\"CD_EVALUEKIND\"/><Col id=\"CD_VENDOR\"/><Col id=\"ID_EVALUE\"/></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsNO_SEQ", this);
            obj._setContents("<ColumnInfo><Column id=\"CD_CODE\" type=\"STRING\" size=\"256\"/><Column id=\"DS_CODE\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"CD_CODE\">001</Col><Col id=\"DS_CODE\">1/4분기</Col></Row><Row><Col id=\"CD_CODE\">002</Col><Col id=\"DS_CODE\">2/4분기</Col></Row><Row><Col id=\"CD_CODE\">003</Col><Col id=\"DS_CODE\">3/4분기</Col></Row><Row><Col id=\"CD_CODE\">004</Col><Col id=\"DS_CODE\">4/4분기</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsYear", this);
            obj._setContents("");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsCD_EVALUEKIND", this);
            obj._setContents("<ColumnInfo><Column id=\"CD_CODE\" type=\"STRING\" size=\"256\"/><Column id=\"DS_CODE\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"DS_CODE\">전체</Col><Col id=\"CD_CODE\"/></Row><Row><Col id=\"DS_CODE\">소장</Col><Col id=\"CD_CODE\">0001</Col></Row><Row><Col id=\"DS_CODE\">공사</Col><Col id=\"CD_CODE\">0002</Col></Row><Row><Col id=\"CD_CODE\">0003</Col><Col id=\"DS_CODE\">CM</Col></Row><Row><Col id=\"CD_CODE\">00034</Col><Col id=\"DS_CODE\">안전</Col></Row></Rows>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Div("divSearch","0.0","10.0",null,"110.0","0",null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_cssclass("div_SEARCH_Bg");
            obj.set_formscrollbartype("auto auto");
            this.addChild(obj.name, obj);

            obj = new Static("staYY_WORK","0.0","10.0","92.0","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("0");
            obj.set_text("평가년도");
            obj.set_cssclass("sta_WF_SchLabelE");
            this.divSearch.addChild(obj.name, obj);

            obj = new Div("ctcYY_WORK","staYY_WORK:0.0","10.0","70","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("1");
            obj.set_url("cmm::cmmCalYY.xfdl");
            this.divSearch.addChild(obj.name, obj);

            obj = new Div("ccfNO_SEQ","ctcYY_WORK:0.0","10.0","227","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.getSetter("CodeFindName").set("DCX_CFEVALUE_NOSEQ");
            obj.getSetter("CDTextWidth").set("40");
            obj.set_taborder("2");
            obj.set_url("cmm::cmmCodeFind.xfdl");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("staID_EVALUE","ccfNO_SEQ:0.0","10.0","92.0","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("3");
            obj.set_text("평가자");
            obj.set_textAlign("center");
            obj.set_cssclass("sta_WF_SchLabelE");
            this.divSearch.addChild(obj.name, obj);

            obj = new Div("ccfID_EVALUE","staID_EVALUE:0.0","10.0","245","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.getSetter("CodeFindName").set("DZX_CFUSER");
            obj.getSetter("CDTextWidth").set("70");
            obj.set_taborder("4");
            obj.set_url("cmm::cmmCodeFind.xfdl");
            obj.set_enable("true");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("staCD_EVALUEKIND","ccfID_EVALUE:0.0","10.0","92.0","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("5");
            obj.set_text("평가기준");
            obj.set_textDecoration("none");
            obj.set_visible("false");
            obj.set_cssclass("sta_WF_SchLabel");
            this.divSearch.addChild(obj.name, obj);

            obj = new Div("ccfCD_EVALUEKIND","staCD_EVALUEKIND:10","10","246","25",null,null,null,null,null,null,this.divSearch.form);
            obj.getSetter("CodeFindName").set("DCX_CFEVALUEKIND_YEAR_SITE");
            obj.getSetter("CDTextWidth").set("50");
            obj.set_taborder("4");
            obj.set_url("cmm::cmmCodeFind.xfdl");
            this.divSearch.addChild(obj.name, obj);

            obj = new Combo("ccboCD_EVALUEKIND","staCD_EVALUEKIND:0.0","10.0","200","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("6");
            obj.set_innerdataset("dsCD_EVALUEKIND");
            obj.set_codecolumn("CD_CODE");
            obj.set_datacolumn("DS_CODE");
            obj.set_visible("false");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("staCD_SITE","0.0","staYY_WORK:10.0","92.0","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("7");
            obj.set_text("현장코드");
            obj.set_cssclass("sta_WF_SchLabel");
            this.divSearch.addChild(obj.name, obj);

            obj = new Div("ccfCD_SITE","staCD_SITE:0.0","ctcYY_WORK:10.0","300","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.getSetter("CodeFindName").set("DZX_CFSITE_GRD");
            obj.getSetter("CDTextWidth").set("70");
            obj.set_taborder("8");
            obj.set_url("cmm::cmmCodeFind.xfdl");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("staCD_VENDOR","ccfCD_SITE:0.0","staYY_WORK:10.0","92.0","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("9");
            obj.set_text("업체코드");
            obj.set_cssclass("sta_WF_SchLabel");
            this.divSearch.addChild(obj.name, obj);

            obj = new Div("ccfCD_VENDOR","staCD_VENDOR:0.0","staYY_WORK:10.0","245","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.getSetter("CodeFindName").set("DCX_CFVENDOR_DC");
            obj.getSetter("CDTextWidth").set("70");
            obj.set_taborder("10");
            obj.set_url("cmm::cmmCodeFind.xfdl");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("staNO_HADOCONT","ccfCD_VENDOR:0.0","staYY_WORK:10.0","92.0","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("11");
            obj.set_text("계약번호");
            obj.set_visible("false");
            obj.set_cssclass("sta_WF_SchLabel");
            this.divSearch.addChild(obj.name, obj);

            obj = new Div("ccfNO_HADOCONT","staNO_HADOCONT:0.0","ctcYY_WORK:10.0","200","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.getSetter("CodeFindName").set("DCX_CFCONTRACT_03");
            obj.getSetter("CDTextWidth").set("70");
            obj.set_taborder("12");
            obj.set_url("cmm::cmmCodeFind.xfdl");
            obj.set_visible("false");
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
            obj = new BindItem("item0","divSearch.form.ctcYY_WORK.form.TextBox","value","dsSearch","YR_MAGAM");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item2","divSearch.form.ccfCD_SITE.form.CDTextBox","value","dsSearch","CD_SITE");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item4","divSearch.form.ccfCD_VENDOR.form.CDTextBox","value","dsSearch","CD_VENDOR");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item5","divSearch.form.ccfID_EVALUE.form.CDTextBox","value","dsSearch","ID_EVALUE");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item6","divSearch.form.ccfNO_HADOCONT.form.CDTextBox","value","dsSearch","NO_CONT");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item1","divSearch.form.ccfNO_SEQ.form.CDTextBox","value","dsSearch","NO_SEQ");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item3","divSearch.form.ccboCD_EVALUEKIND","value","dsSearch","CD_EVALUEKIND");
            this.addChild(obj.name, obj);
            obj.bind();
            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {
            this._addPreloadList("fdl","cmm::cmmCalYY.xfdl");
            this._addPreloadList("fdl","cmm::cmmCodeFind.xfdl");
        };
        
        // User Script
        this.registerScript("DCD_EVALUE.xfdl", function() {
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

        	this.fnSetYear();
        	this.fnSetCombo_CD_EVALUEKIND();

        	this.dsSearch.setColumn(0, "ID_EVALUE", this.AuthClient.ID_USER);
        	this.divSearch.form.ccfID_EVALUE.form.fnCodeFindLoad();

        	if(!this.gfnIsNull(this.getOwnerFrame().NO_SEQ) && !this.gfnIsNull(this.getOwnerFrame().CD_EVALUEKIND))
        	{
        		this.dsSearch.setColumn(0, "NO_SEQ", this.getOwnerFrame().NO_SEQ);
        		this.dsSearch.setColumn(0, "CD_EVALUEKIND", this.getOwnerFrame().CD_EVALUEKIND);
        		//this.divSearch.form.ccfCD_EVALUEKIND.form.DSTextBox.set_value(this.getOwnerFrame().DS_EVALUEKIND);
        		this.dsSearch.setColumn(0, "CD_VENDOR", this.getOwnerFrame().CD_VENDOR);
        		this.divSearch.form.ccfCD_VENDOR.form.DSTextBox.set_value(this.getOwnerFrame().DS_VENDOR);
        		this.dsSearch.setColumn(0, "NO_HADOCONT", this.getOwnerFrame().NO_HADOCONT);
        		this.divSearch.form.ccfNO_HADOCONT.form.DSTextBox.set_value(this.getOwnerFrame().DS_HADOCONT);

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

        	// R21	외주구매팀권한
        	// R41	본사pm부서
        	// R99	운영자권한

        	var cd_role = this.FormInfo.CD_ROLE;
        	var cd_field = this.objApp.gdsUserInfo.getColumn(0, "CD_SITE");
        	var ds_field = this.objApp.gdsUserInfo.getColumn(0, "DS_SITE");

        	if(cd_role!="R21" && cd_role!="R41" && cd_role!="R99")
        	{
        		//this.divSearch.form.ccfCD_SITE.set_enable(false);
        		this.divSearch.form.ccfID_EVALUE.set_enable(false);
        	}
        };

        /************************************************************************
         * 확장 버튼 : 화면별 버튼 설정 ID, function 연결 (화면버튼관리)
         ************************************************************************/
        this.fnSetExtendButton = function() {
        	this.btnSubmit = this.gfnFormButtonAdd("btnSubmit", "fnSubmit");
        	this.btnSubmitCancel = this.gfnFormButtonAdd("btnSubmitCancel", "fnSubmitCancel");
        };

        /************************************************************************
         * 변수 선언
         ************************************************************************/
        this.fnSetVariable = function() {
        	//this.ccfMagam = this.divSearch.form.ccfMagam;
        	this.ccfCD_SITE = this.divSearch.form.ccfCD_SITE;
        	//this.ccfCD_EVALUEKIND = this.divSearch.form.ccfCD_EVALUEKIND;
        	this.ccfCD_VENDOR = this.divSearch.form.ccfCD_VENDOR;
        	this.ccfID_EVALUE = this.divSearch.form.ccfID_EVALUE;
        	this.ccfNO_HADOCONT = this.divSearch.form.ccfNO_HADOCONT;
        	this.dxGrid = this.divData.form.objGrid;
        };

        /************************************************************************
         * 이벤트 설정
         ************************************************************************/
        this.fnSetEvent = function() {

        	// this.ccfMagam.form.DSTextBox.set_width("0");
        	//this.ccfMagam.BeforeUserDataSetParam = "fnBeforeUserDataSetParam";
        	//this.ccfCD_EVALUEKIND.BeforeUserDataSetParam = "fnBeforeUserDataSetParam";
        	this.ccfNO_HADOCONT.BeforeUserDataSetParam = "fnBeforeUserDataSetParam";
        	this.divSearch.form.ccfNO_SEQ.BeforeUserDataSetParam = "fnBeforeUserDataSetParam";
        	this.divSearch.form.ccfCD_VENDOR.BeforeUserDataSetParam = "fnBeforeUserDataSetParam";
        	if(this.FormInfo.DS_PARAM == "DM")
        	{
        		this.gfnGridInit(this.dxGrid, this.dsList, "DC", "DCD_EVALUE_DM");
        	}else
        	{
        		this.gfnGridInit(this.dxGrid, this.dsList, "DC", "DCD_EVALUE");
        	}

        	// 그리드 코드파인드 설정
        	this.dxGrid.BeforeUserDataSetParam = "fnGrid_BeforeUserDataSetParam";

        	// 셀 수정가능 여부
        	this.dxGrid.EnterCell = "fnGrid_EnterCell";
        };

        /************************************************************************
         * 파라미터 설정
         ************************************************************************/
        this.fnSetParameter = function() {
        	this.dsSelect = new Dataset();
        	this.dsSelect.addColumn("YR_MAGAM", "string");
        	this.dsSelect.addColumn("NO_SEQ", "string");
        	this.dsSelect.addColumn("CD_SITE", "string");
        	this.dsSelect.addColumn("CD_VENDOR", "string");
        	this.dsSelect.addColumn("CD_EVALUEKIND", "string");
        	this.dsSelect.addColumn("ID_EVALUE", "string");
        	this.dsSelect.addColumn("NO_CONT", "string");
        	this.dsSelect.addColumn("TY_SYSTEM", "string");

        	this.dsUpdate = new Dataset();
        	this.dsUpdate.addColumn("YR_MAGAM", "string");
        	this.dsUpdate.addColumn("NO_SEQ", "string");
        	this.dsUpdate.addColumn("CD_SITE", "string");
        	this.dsUpdate.addColumn("CD_VENDOR", "string");
        	this.dsUpdate.addColumn("NO_CONT", "string");
        	this.dsUpdate.addColumn("CD_EVALUEKIND", "string");
        	this.dsUpdate.addColumn("CD_CODE", "string");
        	this.dsUpdate.addColumn("CD_CODE_DTL", "string");
        	this.dsUpdate.addColumn("CD_STANDARD", "string");
        	this.dsUpdate.addColumn("TY_SYSTEM", "string");
        	this.dsUpdate.addColumn("AM_EVALUE", "string");

        	this.dsSubmit = new Dataset();
        	this.dsSubmit.addColumn("YR_MAGAM", "string");
        	this.dsSubmit.addColumn("NO_SEQ", "string");
        	this.dsSubmit.addColumn("CD_SITE", "string");
        	this.dsSubmit.addColumn("CD_VENDOR", "string");
        	this.dsSubmit.addColumn("NO_CONT", "string");
        	this.dsSubmit.addColumn("CD_EVALUEKIND", "string");
        	this.dsSubmit.addColumn("YN_SUBMIT", "string");
        	this.dsSubmit.addColumn("ID_EVALUE", "string");
        	this.dsSubmit.addColumn("TY_SYSTEM", "string");
        };

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
        	this.dsSelect.setColumn(0, "YR_MAGAM", this.dsSearch.getColumn(0, "YR_MAGAM"));
        	this.dsSelect.setColumn(0, "NO_SEQ", this.dsSearch.getColumn(0, "NO_SEQ"));
        	this.dsSelect.setColumn(0, "CD_EVALUEKIND", this.dsSearch.getColumn(0, "CD_EVALUEKIND"));
        	this.dsSelect.setColumn(0, "CD_SITE", this.dsSearch.getColumn(0, "CD_SITE"));
        	this.dsSelect.setColumn(0, "CD_VENDOR", this.dsSearch.getColumn(0, "CD_VENDOR"));
        	this.dsSelect.setColumn(0, "ID_EVALUE", this.dsSearch.getColumn(0, "ID_EVALUE"));
        	this.dsSelect.setColumn(0, "NO_CONT", this.dsSearch.getColumn(0, "NO_CONT"));
        	this.dsSelect.setColumn(0, "TY_SYSTEM", this.FormInfo.DS_PARAM);

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

        };

        /*
         *	삭제 버튼
         */
        this.fnDel = function() {
        	//this.gfnGridDel(this.dxGrid);
        }

        /*
         *	저장 버튼
         */
        this.fnSave = function() {
        	if (!this.gfnGridValidate(this.dxGrid)) return;

        	this.dxGrid.updateToDataset();

        	this.dsUpdate.clearData();

        	for (var i = 0; i < this.dsList.rowcount; i++) {
        		var flag = this.gfnGetFlag(this.dsList, i);
        		switch(flag) {
        			case "U":
        				var nrow = this.dsUpdate.addRow();
        				this.dsUpdate.setColumn(nrow, "YR_MAGAM", this.dsList.getColumn(i, "YR_MAGAM"));
        				this.dsUpdate.setColumn(nrow, "NO_SEQ", this.dsList.getColumn(i, "NO_SEQ"));
        				this.dsUpdate.setColumn(nrow, "CD_SITE", this.dsList.getColumn(i, "CD_SITE"));
        				this.dsUpdate.setColumn(nrow, "CD_VENDOR", this.dsList.getColumn(i, "CD_VENDOR"));
        				this.dsUpdate.setColumn(nrow, "NO_CONT", this.dsList.getColumn(i, "NO_HADOCONT"));
        				this.dsUpdate.setColumn(nrow, "CD_EVALUEKIND", this.dsList.getColumn(i, "CD_EVALUEKIND"));
        				this.dsUpdate.setColumn(nrow, "CD_CODE", this.dsList.getColumn(i, "CD_CODE"));
        				this.dsUpdate.setColumn(nrow, "CD_CODE_DTL", this.dsList.getColumn(i, "CD_CODE_DTL"));
        				this.dsUpdate.setColumn(nrow, "CD_STANDARD", this.dsList.getColumn(i, "CD_STANDARD"));
        				this.dsUpdate.setColumn(nrow, "AM_EVALUE", this.dsList.getColumn(i, "AM_EVALUE"));
        				this.dsUpdate.setColumn(nrow, "TY_SYSTEM", this.FormInfo.DS_PARAM);
        				break;
        		}
        	}

        	if (this.dsUpdate.rowcount == 0) return;

        	var strSvcId    = "save";
        	var strSvcType  = "save";
        	var inProc		= "_dsProc";
        	var inData      = "update=dsUpdate";
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
        };

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

        	if (this.gfnIsNull(this.dsSearch.getColumn(0, "YR_MAGAM"))) {
        		this.fnVaidateCallback = function() {
        			this.divSearch.form.ctcYY_WORK.form.TextBox.setFocus();
        		}
        		this.gfnAlert("평가년도를 입력하세요.");
        		return false;
        	}
        	else if (this.gfnIsNull(this.dsSearch.getColumn(0, "NO_SEQ"))){
        		this.fnVaidateCallback = function() {
        			this.divSearch.form.ccboNO_SEQ.setFocus();
        			//this.ccfMagam.form.CDTextBox.setFocus();
        		}
        		this.gfnAlert("평가기준을 입력하세요.");
        		return false;
        	}
        	else if (this.gfnIsNull(this.dsSearch.getColumn(0, "ID_EVALUE"))){
        		this.fnVaidateCallback = function() {
        			this.divSearch.form.ccfID_EVALUE.form.CDTextBox.setFocus();
        			//this.ccfMagam.form.CDTextBox.setFocus();
        		}
        		this.gfnAlert("평가자를 입력하세요.");
        		return false;
        	}
        // 	else if (this.gfnIsNull(this.dsSearch.getColumn(0, "CD_EVALUEKIND"))){
        // 		this.fnVaidateCallback = function() {
        // 			this.ccfCD_EVALUEKIND.form.CDTextBox.setFocus();
        // 		}
        // 		this.gfnAlert("평가기준을 입력하세요.");
        // 		return false;
        // 	}
        	return true;
        };

        /************************************************************************
         * 콜백 이벤트
         ************************************************************************/
        /*
         *	콜백 처리
         */
        this.fnCallback = function(svcID, errorCode, errorMsg, strArg)
        {
        	if (svcID == "select") {
        		this.gfnGridAfterSelect(this.dxGrid);
        	}
        	else if(svcID == "save"){
        		if(errorCode == 0)
        		{
        			this.FormBtns.Select.click();
        		}
        		else
        		{
        			this.gfnAlert(errorMsg);
        		}
        	}
        	else if(svcID == "year")
        	{
        		if(this.dsYear.rowcount > 0)
        		{
        			this.dsSearch.setColumn(0, "YR_MAGAM", this.dsYear.getColumn(0, "YR_MAGAM"));
        			this.dsSearch.setColumn(0, "NO_SEQ", this.dsYear.getColumn(0, "NO_SEQ"));

        			this.divSearch.form.ccfNO_SEQ.form.fnCodeFindLoad();
        		}
        	}
        	else if(svcID == "submit")
        	{
        		if(errorCode == 0)
        		{
        			this.fnCallback_callback = function()
        			{
        				this.FormBtns.Select.click();
        			}

        			var msg = "정상처리 되었습니다.";
        			/*
        			if(strArg == "Y")
        			{
        				msg = "정상처리 되었습니다.";
        			}
        			*/
        			this.gfnAlert(msg, "fnCallback_callback");
        		}
        		else
        		{
        			this.gfnAlert(errorMsg);
        		}
        	}
        };

        /************************************************************************
         * 코드파인드 이벤트
         ************************************************************************/

        this.fnBeforeUserDataSetParam = function(id, dsUserParam, nrow) {
        // 	if(id == "ccfMagam"){
        // 		dsUserParam.setColumn(nrow, "YR_EVALUE", this.dsSearch.getColumn(0, "YR_EVALUE"));
        // 	}else if(id == "ccfCD_EVALUEKIND"){
        // 		dsUserParam.setColumn(nrow, "YR_EVALUE", this.dsSearch.getColumn(0, "YR_EVALUE"));
        // 		dsUserParam.setColumn(nrow, "NO_SEQ", this.dsSearch.getColumn(0, "NO_SEQ"));
        // 	}
        // 	else
        	if(id =="ccfNO_HADOCONT") {
        		if(this.gfnIsNull(this.dsSearch.getColumn(0, "CD_SITE")))
        		{
        			this.gfnAlert("현장코드를 먼저 입력해주세요.");
        			return false;
        		}
        		dsUserParam.setColumn(nrow, "CD_SITE", this.dsSearch.getColumn(0, "CD_SITE"));
        	}
        	else if(id == "ccfNO_SEQ")
        	{
        		dsUserParam.setColumn(nrow, "CD_SYSTEM", "DC");
        		dsUserParam.setColumn(nrow, "CD_TYPE", "D01");
        		dsUserParam.setColumn(nrow, "YR_MAGAM",this.dsSearch.getColumn(0, "YR_MAGAM"));
        		dsUserParam.setColumn(nrow, "TY_SYSTEM", this.FormInfo.DS_PARAM);
        	}
        	else if(id == "ccfCD_VENDOR")
        	{
        		dsUserParam.setColumn(nrow, "CD_GUBUN", "");
        		dsUserParam.setColumn(nrow, "CD_MODULE", "ALL");
        	}
        	return true;
        };

        this.fnAfterCDTextChanged = function(id){
        };


        /************************************************************************
         * 그리드 이벤트
         ************************************************************************/
         this.fnGrid_BeforeUserDataSetParam = function(id, dsUserParam, nrow) {
        	// 그리드에서 코드파인드 id는 그리드셋팅의 코드파인드 식별ID
        //  	if (id == "DCX_CFCD_STANDARD") {
        // 		dsUserParam.setColumn(nrow, "CD_EVALUEKIND", this.dsList.getColumn(this.dsList.rowposition, "CD_EVALUEKIND"));
        // 		dsUserParam.setColumn(nrow, "CD_LEVEL", this.dsList.getColumn(this.dsList.rowposition, "CD_LEVEL"));
        //  		dsUserParam.setColumn(nrow, "CD_CODE", this.dsList.getColumn(this.dsList.rowposition, "CD_CODE"));
        // 	}
        	if(id == "DCX_EVALUE_CD_DTL") {
        		dsUserParam.setColumn(nrow, "YR_MAGAM", this.dsList.getColumn(this.dsList.rowposition, "YR_MAGAM"));
        		dsUserParam.setColumn(nrow, "NO_SEQ", this.dsList.getColumn(this.dsList.rowposition, "NO_SEQ"));
        		dsUserParam.setColumn(nrow, "CD_SITE", this.dsList.getColumn(this.dsList.rowposition, "CD_SITE"));
        		dsUserParam.setColumn(nrow, "CD_VENDOR", this.dsList.getColumn(this.dsList.rowposition, "CD_VENDOR"));
        		dsUserParam.setColumn(nrow, "NO_HADOCONT", this.dsList.getColumn(this.dsList.rowposition, "NO_HADOCONT"));
        		dsUserParam.setColumn(nrow, "CD_EVALUEKIND", this.dsList.getColumn(this.dsList.rowposition, "CD_EVALUEKIND"));
        		dsUserParam.setColumn(nrow, "CD_CODE", this.dsList.getColumn(this.dsList.rowposition, "CD_CODE"));
        	}
        	else if(id == "DCX_EVALUE_STANDARD")
        	{
        		dsUserParam.setColumn(nrow, "YR_MAGAM", this.dsList.getColumn(this.dsList.rowposition, "YR_MAGAM"));
        		dsUserParam.setColumn(nrow, "NO_SEQ", this.dsSearch.getColumn(0, "NO_SEQ"));
        		dsUserParam.setColumn(nrow, "CD_EVALUEKIND", this.dsList.getColumn(this.dsList.rowposition, "CD_EVALUEKIND"));
        		dsUserParam.setColumn(nrow, "CD_CODE", this.dsList.getColumn(this.dsList.rowposition, "CD_CODE"));
        		dsUserParam.setColumn(nrow, "CD_CODE_DTL", this.dsList.getColumn(this.dsList.rowposition, "CD_CODE_DTL"));
        		dsUserParam.setColumn(nrow, "TY_SYSTEM", this.FormInfo.DS_PARAM);
        	}
        	return true;
        }

        this.fnGrid_EnterCell = function(obj, row, cell) {
        	var colnm = this.gfnGridGetBindColumnNameByIndex(this.dxGrid, cell);

        	if(colnm == "AM_EVALUE"){
        		if(this.dsList.getColumn(row, "YN_READONLY") != "Y" && this.dsList.getColumn(row, "YN_EDIT") == "Y" && this.dsList.getColumn(row, "YN_DIRECT") == "Y"){
        			return true;
        		}
        		return false;
        	}
        }
        /************************************************************************
         * 기타 이벤트
         ************************************************************************/
        /*
         *	조회 조건 변경시 초기화
         */
        // this.fnSearchInit = function(obj,e) {
        // 	if(e == null || (e.pretext != e.posttext)) {
        // 		// 폼상태 초기화
        // 		this.gfnSetFormStatus(this);
        // 		this.gfnGridClear(this.dxGrid);
        // 	}
        // };

        this.dsSearch_onvaluechanged = function(obj,e)
        {
        	if(e.oldvalue != e.newvalue) {
        		this.gfnSetFormStatus(this);	// 폼상태 초기화
        		this.gfnGridClear(this.dxGrid);
        //
        // 		if(e.columnid == "YR_EVALUE")
        // 		{
        // 			this.dsSearch.setColumn(0, "NO_SEQ", "");
        // 			this.dsSearch.setColumn(0, "CD_EVALUEKIND", "");
        // 			this.ccfCD_EVALUEKIND.form.DSTextBox.set_value("");
        // 		}
        // 		else if(e.columnid == "NO_SEQ")
        // 		{
        // 			this.dsSearch.setColumn(0, "CD_EVALUEKIND", "");
        // 			this.ccfCD_EVALUEKIND.form.DSTextBox.set_value("");
        // 		}
        	}
        };


        this.fnSetYear = function()
        {
        	this.dsYearSelect = new Dataset();
        	this.dsYearSelect.addColumn("YR_MAGAM", "string");
        	this.dsYearSelect.addColumn("TY_SYSTEM", "string");
        	this.dsYearSelect.clearData();
        	this.dsYearSelect.addRow();

        	this.dsYearSelect.setColumn(0, "YR_MAGAM", this.gfnGetDate().substr(0,4));
        	this.dsYearSelect.setColumn(0, "TY_SYSTEM", this.FormInfo.DS_PARAM);

        	var strSvcId    = "year";
        	var strSvcType  = "select";
        	var inProc		= "_dsProc";
        	var inData      = "year=dsYearSelect";
        	var outData     = "dsYear=year0";
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

        this.fnSubmit = function()
        {
        	if(this.dsList.rowposition < 0) return;

        	var nrow = this.dsList.rowposition;
        	if(this.gfnIsNull(this.dsList.getColumn(nrow, "YR_MAGAM"))) return;
        	if(this.dsList.getColumn(nrow, "YN_EDIT") == "N") {
        		this.gfnAlert("해당 평가의 담당자만 제출 또는 제출취소 가능합니다.");
        		return;
        	}

        	var msg = "평가년도 : " + this.dsList.getColumn(nrow, "YR_MAGAM")
        			+ "\n" + "현장명 : [" + this.dsList.getColumn(nrow, "CD_SITE") + "]" + this.dsList.getColumn(nrow, "DS_SITE")
        			// + "\n" + "업체명 : [" + this.dsList.getColumn(nrow, "CD_VENDOR") + "]" + this.dsList.getColumn(nrow, "DS_VENDOR")
        			// + "\n" + "계약명 : [" + this.dsList.getColumn(nrow, "NO_HADOCONT") + "]" + this.dsList.getColumn(nrow, "DS_HADOCONT")
        			// + "\n" + "평가기준명 : " + this.dsList.getColumn(nrow, "DS_EVALUEKIND")
        			+ "\n\n" + "제출을 진행하시겠습니까?"
        	;

        	this.gfnConfirm(msg, "fnSubmit_callback", "Y");
        }

        this.fnSubmitCancel = function()
        {
        	if(this.dsList.rowposition < 0) return;

        	var nrow = this.dsList.rowposition;
        	if(this.gfnIsNull(this.dsList.getColumn(nrow, "YR_MAGAM"))) return;
        	if(this.dsList.getColumn(nrow, "YN_EDIT") == "N") {
        		this.gfnAlert("해당 평가의 담당자만 제출 또는 제출취소 가능합니다.");
        		return;
        	}

        	var msg = "평가년도 : " + this.dsList.getColumn(nrow, "YR_MAGAM")
        			+ "\n" + "현장명 : [" + this.dsList.getColumn(nrow, "CD_SITE") + "] " + this.dsList.getColumn(nrow, "DS_SITE")
        			// + "\n" + "업체명 : [" + this.dsList.getColumn(nrow, "CD_VENDOR") + "] " + this.dsList.getColumn(nrow, "DS_VENDOR")
        			// + "\n" + "계약명 : [" + this.dsList.getColumn(nrow, "NO_HADOCONT") + "] " + this.dsList.getColumn(nrow, "DS_HADOCONT")
        			// + "\n" + "평가기준명 : " + this.dsList.getColumn(nrow, "DS_EVALUEKIND")
        			+ "\n\n" + "제출취소를 진행하시겠습니까?"
        	;

        	this.gfnConfirm(msg, "fnSubmit_callback", "N");
        }

        this.fnSubmit_callback = function(strID, val)
        {
        	if(val == true)
        	{
        		this.dsSubmit.clearData();
        		var nrow = this.dsSubmit.addRow();
        		this.dsSubmit.setColumn(nrow, "YR_MAGAM", this.dsList.getColumn(this.dsList.rowposition, "YR_MAGAM"));
        		this.dsSubmit.setColumn(nrow, "NO_SEQ", this.dsList.getColumn(this.dsList.rowposition, "NO_SEQ"));
        		this.dsSubmit.setColumn(nrow, "CD_SITE", this.dsList.getColumn(this.dsList.rowposition, "CD_SITE"));
        		this.dsSubmit.setColumn(nrow, "CD_VENDOR", this.dsList.getColumn(this.dsList.rowposition, "CD_VENDOR"));
        		this.dsSubmit.setColumn(nrow, "NO_CONT", this.dsList.getColumn(this.dsList.rowposition, "NO_HADOCONT"));
        		this.dsSubmit.setColumn(nrow, "CD_EVALUEKIND", this.dsList.getColumn(this.dsList.rowposition, "CD_EVALUEKIND"));
        		this.dsSubmit.setColumn(nrow, "YN_SUBMIT", strID);
        		this.dsSubmit.setColumn(nrow, "ID_EVALUE", this.dsSearch.getColumn(0, "ID_EVALUE"));
        		this.dsSubmit.setColumn(nrow, "TY_SYSTEM", this.FormInfo.DS_PARAM);

        		var strSvcId    = "submit";
        		var strSvcType  = "save";
        		var inProc		= "_dsProc";
        		var inData      = "submit=dsSubmit";
        		var outData     = "";
        		var strArg      = strID;
        		var callBackFnc = "fnCallback";

        		this.gfnTransaction( strSvcId , 	// transaction을 구분하기 위한 svc id값
        							strSvcType , 	// transaction을 요청할 구분
        							inProc,			// Procedure 정보 Dataset 이름
        							inData , 		// 입력값으로 보낼 dataset id , a=b형태로 실제이름과 입력이름을 매칭
        							outData , 		// 처리결과값으로 받을 dataset id, a=b형태로 실제이름과 입력이름을 매칭
        							strArg, 			// 입력갑스로 보낼 arguments, strFormData="20120607"
        							callBackFnc); // 통신방법 정의 [생략가능]
        	}
        }


        this.fnSetCombo_CD_EVALUEKIND = function()
        {
        	if(this.FormInfo.DS_PARAM == "DM")
        	{
        		this.dsCD_EVALUEKIND.clearData();
        		var nrow = this.dsCD_EVALUEKIND.insertRow(0);
        		this.dsCD_EVALUEKIND.setColumn(nrow, "CD_CODE","");
        		this.dsCD_EVALUEKIND.setColumn(nrow, "DS_CODE","전체");
        		nrow = this.dsCD_EVALUEKIND.insertRow(1);
        		this.dsCD_EVALUEKIND.setColumn(nrow, "CD_CODE","01");
        		this.dsCD_EVALUEKIND.setColumn(nrow, "DS_CODE","공사");
        		nrow = this.dsCD_EVALUEKIND.insertRow(2);
        		this.dsCD_EVALUEKIND.setColumn(nrow, "CD_CODE","02");
        		this.dsCD_EVALUEKIND.setColumn(nrow, "DS_CODE","공무");
        		nrow = this.dsCD_EVALUEKIND.insertRow(3);
        		this.dsCD_EVALUEKIND.setColumn(nrow, "CD_CODE","03");
        		this.dsCD_EVALUEKIND.setColumn(nrow, "DS_CODE","관리");
        		this.divSearch.form.ccboCD_EVALUEKIND.set_index(0);
        	}
        }

        this.dsList_onvaluechanged = function(obj,e)
        {
        	if(e.oldvalue != e.newvalue){
        		if(e.columnid == "AM_EVALUE"){
        			if(nexacro.toNumber(this.dsList.getColumn(e.row, "AM_STANDARD"),0) > 0) {
        				if(nexacro.toNumber(this.dsList.getColumn(e.row, "AM_STANDARD"),0) < nexacro.toNumber(this.dsList.getColumn(e.row, "AM_EVALUE"),0)) {
        					this.gfnAlert("배점기준 점수보다 크게 수정할 수 없습니다.");
        					this.dsList.setColumn(e.row, e.columnid, e.oldvalue);
        					return;
        				}
        			} else if(nexacro.toNumber(this.dsList.getColumn(e.row, "AM_STANDARD"),0) < 0) {
        				if(nexacro.toNumber(this.dsList.getColumn(e.row, "AM_STANDARD"),0) > nexacro.toNumber(this.dsList.getColumn(e.row, "AM_EVALUE"),0)) {
        					this.gfnAlert("배점기준 점수보다 작게 수정할 수 없습니다.");
        					this.dsList.setColumn(e.row, e.columnid, e.oldvalue);
        					return;
        				}
        			}
        		}
        	}
        };

        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.form_onload,this);
            this.dsList.addEventHandler("onvaluechanged",this.dsList_onvaluechanged,this);
            this.dsSearch.addEventHandler("onvaluechanged",this.dsSearch_onvaluechanged,this);
            this.dsNO_SEQ.addEventHandler("onvaluechanged",this.dsSearch_onvaluechanged,this);
            this.dsCD_EVALUEKIND.addEventHandler("onvaluechanged",this.dsSearch_onvaluechanged,this);
        };
        this.loadIncludeScript("DCD_EVALUE.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
