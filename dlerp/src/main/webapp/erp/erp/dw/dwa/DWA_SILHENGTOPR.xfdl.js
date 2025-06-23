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
            obj._setContents("<ColumnInfo><Column id=\"TARGET\" type=\"STRING\" size=\"256\"/><Column id=\"SP\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"TARGET\">select</Col><Col id=\"SP\">DWAPR_SILHENGTOPR_SELECT</Col></Row><Row><Col id=\"TARGET\">save</Col><Col id=\"SP\">DWAPR_SILHENGTOPR_SAVE</Col></Row><Row><Col id=\"TARGET\">indirectCalc</Col><Col id=\"SP\">DWAPR_ORDER_INDIRECT_CALC</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsListSub", this);
            obj._setContents("");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsSearch", this);
            obj._setContents("<ColumnInfo><Column id=\"CD_SITE\" type=\"STRING\" size=\"256\"/><Column id=\"DS_SITE\" type=\"STRING\" size=\"256\"/><Column id=\"NO_HADOCONT\" type=\"STRING\" size=\"256\"/><Column id=\"DS_HADOCONT\" type=\"STRING\" size=\"256\"/><Column id=\"CD_RP\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row/></Rows>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Div("divSearch","0.0","10.0",null,"46.0","0",null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_cssclass("div_SEARCH_Bg");
            this.addChild(obj.name, obj);

            obj = new Static("staCD_SITE","0.0","10.0","118.0","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("3");
            obj.set_text("현장코드");
            obj.set_cssclass("sta_WF_SchLabelE");
            this.divSearch.addChild(obj.name, obj);

            obj = new Div("ccfCD_SITE","staCD_SITE:0.0","10.0","250","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.getSetter("CodeFindName").set("DZX_CFSITE");
            obj.getSetter("CDTextWidth").set("80");
            obj.set_taborder("0");
            obj.set_url("cmm::cmmCodeFind.xfdl");
            obj.set_enable("false");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("staNO_PR","ccfCD_SITE:0.0","10.0","118.0","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("2");
            obj.set_text("발주의뢰번호");
            obj.set_cssclass("sta_WF_SchLabelE");
            this.divSearch.addChild(obj.name, obj);

            obj = new Div("ccfNO_PR","staNO_PR:0.0","10.0","350","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.getSetter("CodeFindName").set("DWX_CFPR_01");
            obj.getSetter("CDTextWidth").set("100");
            obj.set_taborder("1");
            obj.set_url("cmm::cmmCodeFind.xfdl");
            obj.set_enable("false");
            this.divSearch.addChild(obj.name, obj);

            obj = new CheckBox("chkYN_DOKUB","ccfNO_PR:0.0","10.0","50","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("4");
            obj.set_text("도급");
            obj.set_truevalue("Y");
            obj.set_falsevalue("N");
            this.divSearch.addChild(obj.name, obj);

            obj = new Div("divData","0","divSearch:10",null,null,"0","0",null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_cssclass("div_DATA_Bg");
            this.addChild(obj.name, obj);

            obj = new Div("divSplitter","50%","0","5","100%",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("1");
            obj.set_background("skyblue");
            obj.set_cursor("ew-resize");
            this.divData.addChild(obj.name, obj);

            obj = new Button("btnSend_Right",null,"40%","30","40","divSplitter:0",null,null,null,null,null,this.divData.form);
            obj.set_taborder("3");
            obj.set_text("▶");
            this.divData.addChild(obj.name, obj);

            obj = new Button("btnSend_Left",null,"60%","30","40","divSplitter:0",null,null,null,null,null,this.divData.form);
            obj.set_taborder("3");
            obj.set_text("◀");
            this.divData.addChild(obj.name, obj);

            obj = new Div("divDataLeft","0","0",null,null,"btnSend_Left:0","0",null,null,null,null,this.divData.form);
            obj.set_taborder("0");
            this.divData.addChild(obj.name, obj);

            obj = new Static("sta01","0","0","100%","22",null,null,null,null,null,null,this.divData.form.divDataLeft.form);
            obj.set_taborder("0");
            obj.set_text("승인내역");
            obj.set_cssclass("sta_TITLE_Bg");
            this.divData.form.divDataLeft.addChild(obj.name, obj);

            obj = new Grid("objGrid","0","sta01:5",null,null,"0","0",null,null,null,null,this.divData.form.divDataLeft.form);
            obj.set_taborder("0");
            obj.set_treeinitstatus("collapse,all");
            obj._setContents("");
            this.divData.form.divDataLeft.addChild(obj.name, obj);

            obj = new Div("divDataRight","divSplitter:5","0",null,null,"0","0",null,null,null,null,this.divData.form);
            obj.set_taborder("0");
            this.divData.addChild(obj.name, obj);

            obj = new Static("sta02","0","0","100%","22",null,null,null,null,null,null,this.divData.form.divDataRight.form);
            obj.set_taborder("0");
            obj.set_text("발주내역");
            obj.set_cssclass("sta_TITLE_Bg");
            this.divData.form.divDataRight.addChild(obj.name, obj);

            obj = new Grid("objGridSub","0","sta02:5",null,null,"0","0",null,null,null,null,this.divData.form.divDataRight.form);
            obj.set_taborder("0");
            obj._setContents("");
            this.divData.form.divDataRight.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this
            obj = new Layout("default","",this._adjust_width,this._adjust_height,this,function(p){});
            this.addLayout(obj.name, obj);
            
            // BindItem Information
            obj = new BindItem("item0","divSearch.form.ccfCD_SITE.form.CDTextBox","value","dsSearch","CD_SITE");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item1","divSearch.form.ccfNO_PR.form.CDTextBox","value","dsSearch","NO_HADOCONT");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item3","divSearch.form.ccfCD_SITE.form.DSTextBox","value","dsSearch","DS_SITE");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item4","divSearch.form.ccfNO_PR.form.DSTextBox","value","dsSearch","DS_HADOCONT");
            this.addChild(obj.name, obj);
            obj.bind();
            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {
            this._addPreloadList("fdl","cmm::cmmCodeFind.xfdl");
        };
        
        // User Script
        this.registerScript("DWA_SILHENGTOPR.xfdl", function() {
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

        	// 이전화면에서 데이터 받기.
        	if(!this.gfnIsNull(this.getOwnerFrame().CD_SITE) && !this.gfnIsNull(this.getOwnerFrame().NO_PR)) {
        		this.dsSearch.setColumn(0, "CD_SITE", this.getOwnerFrame().CD_SITE);
        		this.dsSearch.setColumn(0, "DS_SITE", this.getOwnerFrame().DS_SITE);
        		this.dsSearch.setColumn(0, "NO_HADOCONT", this.getOwnerFrame().NO_PR);
        		this.dsSearch.setColumn(0, "DS_HADOCONT", this.getOwnerFrame().DS_PR);
        		this.dsSearch.setColumn(0, "CD_RP", this.getOwnerFrame().CD_RP);
        		this.dsList.setColumn(0, "NM_RP", this.getOwnerFrame().NM_RP);

        		this.FormBtns.Select.click();
        	}

        	this.divSearch_chkYN_DOKUB_onchanged(this.divSearch.form.chkYN_DOKUB, {postvalue:this.divSearch.form.chkYN_DOKUB.value});

        	this._AM_CALC = this.gfnGetConfig("DW", "AM_CALC");
        };


        /************************************************************************
         * 버튼 설정 : 화면(Tab) 전환시 마다 호출
         ************************************************************************/
        this.fnSetButton = function() {
        	// Select, Add, Del, Save, Excel, Print
        	// TODO : set_enable로 Add창이 비활성화가 되지않아 우선 안 보이게 설정.
        	//this.FormBtns.Add.set_visible(false);
        	//this.FormBtns.Add.set_enable(false);

        // 	if(this.getOwnerFrame().DS_PARAM == "SU") {
        // 		this.divSearch.form.staNO_PR.set_text("시행결의번호");
        // 	} else {
        // 		this.divSearch.form.staNO_PR.set_text("발주번호");
        // 	}
        }

        /************************************************************************
         * 확장 버튼 : 화면별 버튼 설정 ID, function 연결
         ************************************************************************/
        this.fnSetExtendButton = function() {
        	//this.btn1 = this.gfnFormButtonAdd("Costtuja", "fnCosttuja");
        	//this.btn2 = this.gfnFormButtonAdd( "btnIcstCalc" , "fnIcstCalc");
        	this.btnIndirectList = this.gfnFormButtonAdd( "btnIndirectList" , "fnIndirectList");
        	this.btnAutoCreation = this.gfnFormButtonAdd( "btnAutoCreation" , "fnAutoCreation");
        	this.btnStdCode = this.gfnFormButtonAdd( "btnStdCode" , "fnStdCode");
        	this.btnIndirectCalc = this.gfnFormButtonAdd( "btnIndirectCalc" , "fnIndirectCalc");


        };

        /************************************************************************
         * 변수 선언
         ************************************************************************/
        this.fnSetVariable = function() {
        	this.ccfCD_SITE = this.divSearch.form.ccfCD_SITE;
        	this.ccfNO_PR = this.divSearch.form.ccfNO_PR;
        	//this.ccfCD_RP = this.divSearch.form.ccfCD_RP;

        	this.dxGrid = this.divData.form.divDataLeft.form.objGrid;
        	this.dxGridSub = this.divData.form.divDataRight.form.objGridSub;
        };

        /************************************************************************
         * 이벤트 설정
         ************************************************************************/
        this.fnSetEvent = function() {
        	this.ccfCD_SITE.AfterCDTextChanged = "ccfCD_SITE_AfterCDTextChanged";

        	this.ccfNO_PR.BeforeUserDataSetParam = "fnBeforeUserDataSetParam";
        	this.ccfNO_PR.AfterCDTextChanged = "ccfNO_PR_AfterCDTextChanged";

        	//this.ccfCD_RP.CodeFindName = "DWX_CFRP";
        	//this.ccfCD_RP.BeforeUserDataSetParam = "fnBeforeUserDataSetParam";

        	// 그리드 코드파인드 설정
        	this.dxGridSub.BeforeUserDataSetParam = "fnGridSub_BeforeUserDataSetParam";

         	this.gfnGridInit(this.dxGrid, this.dsList, "DW", "DWA_SILHENGTOPRTREE", "DS_COST", "GR_COST");
        	this.gfnGridInit(this.dxGridSub, this.dsListSub, "DW", "DWA_SILHENGTOPR", "DS_COST", "GR_COST");

        	this.dxGrid.addEventHandler("onselectchanged", this.dxGrid_RowCellChanged, this);
        	this.dxGridSub.addEventHandler("onselectchanged", this.fnGridSub_RowCellChanged, this);
        	this.dsListSub.addEventHandler("canrowposchange", this.dsListSub_canrowposchange, this);

        	// 셀 수정가능 여부
        	this.dxGridSub.EnterCell = "fnGrid_EnterCell";

        	// 트리 전체 접는 로직.
        	//this.dxGrid.set_treeinitstatus("collapse,all");

        	if(!this.gfnIsNull(this.getOwnerFrame().DS_PARAM)) {
        		if(this.getOwnerFrame().DS_PARAM == "MM") { //자재
        			var idx_IND_CD = this.dxGridSub.getBindCellIndex("body", "IND_CD");
        			this.dxGridSub.setRealColSize("body", idx_IND_CD, 0);
        		}
        	}
        };

        /************************************************************************
         * 파라미터 설정
         ************************************************************************/
        this.fnSetParameter = function() {
        	this.dsSelect = new Dataset();
        	this.dsSelect.addColumn("CD_SITE", "string");
        	this.dsSelect.addColumn("NO_HADOCONT", "string");
        	this.dsSelect.addColumn("CD_RP", "string");

        	this.dsSave = new Dataset();
        	this.dsSave.addColumn("TY_SAVE", "string");
        	this.dsSave.addColumn("CD_SITE", "string");
        	this.dsSave.addColumn("NO_HADOCONT", "string");
        	this.dsSave.addColumn("CD_COST", "string");
        	this.dsSave.addColumn("CD_ITEM", "string");
        	this.dsSave.addColumn("QN_TT_DOKUB", "bigdecimal");
        	this.dsSave.addColumn("UP_TT_DOKUB", "bigdecimal");
        	this.dsSave.addColumn("AM_TT_DOKUB", "bigdecimal");
        	this.dsSave.addColumn("QN_TT_SILHENG", "bigdecimal");
        	this.dsSave.addColumn("UP_TT_SILHENG", "bigdecimal");
        	this.dsSave.addColumn("AM_TT_SILHENG", "bigdecimal");
        	this.dsSave.addColumn("QN_TT_HADO", "bigdecimal");
        	this.dsSave.addColumn("UP_TT_HADO", "bigdecimal");
        	this.dsSave.addColumn("AM_TT_HADO", "bigdecimal");
        	this.dsSave.addColumn("CD_STDCOST", "string");
        	this.dsSave.addColumn("CD_SITE_ORGN", "string");
        	this.dsSave.addColumn("NO_HADOCONT_ORGN", "string");
        	this.dsSave.addColumn("CD_COST_ORGN", "string");
        	this.dsSave.addColumn("IND_CD", "string");

        	this.dsExec = new Dataset();
        	this.dsExec.addColumn("TY_WRK", "string");
        	this.dsExec.addColumn("ID_USER", "string");
        	this.dsExec.addColumn("CD_SITE", "string");
        	this.dsExec.addColumn("NO_HADOCONT", "string");







            /*
            this.dsAutoCreation = new Dataset();
        	this.dsAutoCreation.addColumn("TY_SAVE", "string");
        	this.dsAutoCreation.addColumn("CD_SITE", "string");
        	this.dsAutoCreation.addColumn("NO_HADOCONT", "string");
        	this.dsAutoCreation.addColumn("CD_COST", "string");
        	this.dsAutoCreation.addColumn("CD_ITEM", "string");
        	this.dsAutoCreation.addColumn("QN_TT_DOKUB", "bigdecimal");
        	this.dsAutoCreation.addColumn("UP_TT_DOKUB", "bigdecimal");
        	this.dsAutoCreation.addColumn("AM_TT_DOKUB", "bigdecimal");
        	this.dsAutoCreation.addColumn("QN_TT_SILHENG", "bigdecimal");
        	this.dsAutoCreation.addColumn("UP_TT_SILHENG", "bigdecimal");
        	this.dsAutoCreation.addColumn("AM_TT_SILHENG", "bigdecimal");
        	this.dsAutoCreation.addColumn("QN_TT_HADO", "bigdecimal");
        	this.dsAutoCreation.addColumn("UP_TT_HADO", "bigdecimal");
        	this.dsAutoCreation.addColumn("AM_TT_HADO", "bigdecimal");
        	this.dsAutoCreation.addColumn("CD_STDCOST", "string");
        	this.dsAutoCreation.addColumn("CD_SITE_ORGN", "string");
        	this.dsAutoCreation.addColumn("NO_HADOCONT_ORGN", "string");
        	this.dsAutoCreation.addColumn("CD_COST_ORGN", "string");
        	*/
        }

        /************************************************************************
         * 버튼 이벤트
         ************************************************************************/
         /*
          *	조회 버튼
          */
        this.fnSelect = function() {
        	if (!this.fnSelectValidate()) return false;

        	this.gfnGridBeforeSelect(this.dxGridSub);
         	this.gfnGridBeforeSelect(this.dxGrid);

         	this.dsSelect.clearData();
         	this.dsSelect.addRow();
         	this.dsSelect.setColumn(0, "CD_SITE", this.dsSearch.getColumn(0, "CD_SITE"));
        	this.dsSelect.setColumn(0, "NO_HADOCONT", this.dsSearch.getColumn(0, "NO_HADOCONT"));
         	this.dsSelect.setColumn(0, "CD_RP", this.dsSearch.getColumn(0, "CD_RP"));

         	var strSvcId    = "select";
         	var strSvcType  = "grid";
         	var inProc		= "_dsProc";
         	var inData      = "select=dsSelect";
         	var outData     = "dsList=select0 dsListSub=select1";
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

        }

        /*
         *	삭제 버튼
         */
        this.fnDel = function() {
        	this.gfnGridDel(this.dxGridSub, "YN_COST");
        }

        /*
         *	저장 버튼
         */

        this.fnSave = function() {


        	if (!this.gfnGridValidate(this.dxGridSub)) return;

        	this.dxGridSub.updateToDataset();

        	this.dsSave.clearData();

        	for (var i = 0; i < this.dsListSub.rowcount; i++) {
        		var flag = this.gfnGetFlag(this.dsListSub, i);

        		switch(flag) {
        			case "I":
        			case "U":
        			case "D":
        				var nrow = this.dsSave.addRow();
        				this.dsSave.setColumn(nrow, "TY_SAVE", flag);
        				this.dsSave.setColumn(nrow, "CD_SITE", this.dsSearch.getColumn(0, "CD_SITE"));
        				this.dsSave.setColumn(nrow, "NO_HADOCONT", this.dsSearch.getColumn(0, "NO_HADOCONT"));
        				this.dsSave.setColumn(nrow, "CD_COST", this.dsListSub.getColumn(i, "CD_COST"));
        				this.dsSave.setColumn(nrow, "CD_ITEM", this.dsListSub.getColumn(i, "CD_ITEM"));
        				this.dsSave.setColumn(nrow, "QN_TT_DOKUB", this.dsListSub.getColumn(i, "QN_TT_DOKUB"));
        				this.dsSave.setColumn(nrow, "UP_TT_DOKUB", this.dsListSub.getColumn(i, "UP_TT_DOKUB"));
        				this.dsSave.setColumn(nrow, "AM_TT_DOKUB", this.dsListSub.getColumn(i, "AM_TT_DOKUB"));
        				this.dsSave.setColumn(nrow, "QN_TT_SILHENG", this.dsListSub.getColumn(i, "QN_TT_SILHENG"));
        				this.dsSave.setColumn(nrow, "UP_TT_SILHENG", this.dsListSub.getColumn(i, "UP_TT_SILHENG"));
        				this.dsSave.setColumn(nrow, "AM_TT_SILHENG", this.dsListSub.getColumn(i, "AM_TT_SILHENG"));
        				this.dsSave.setColumn(nrow, "QN_TT_HADO", this.dsListSub.getColumn(i, "QN_TT_HADO"));
        				this.dsSave.setColumn(nrow, "UP_TT_HADO", this.dsListSub.getColumn(i, "UP_TT_HADO"));
        				this.dsSave.setColumn(nrow, "AM_TT_HADO", this.dsListSub.getColumn(i, "AM_TT_HADO"));
        				this.dsSave.setColumn(nrow, "CD_STDCOST", this.dsListSub.getColumn(i, "CD_STDCOST"));
        				this.dsSave.setColumn(nrow, "CD_SITE_ORGN", this.dsListSub.getColumn(i, "CD_SITE_ORGN"));
        				this.dsSave.setColumn(nrow, "NO_HADOCONT_ORGN", this.dsListSub.getColumn(i, "NO_HADOCONT_ORGN"));
        				this.dsSave.setColumn(nrow, "CD_COST_ORGN", this.dsListSub.getColumn(i, "CD_COST_ORGN"));
        				this.dsSave.setColumn(nrow, "IND_CD", this.dsListSub.getColumn(i, "IND_CD"));

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
            저장 후 실행처리
        */
        /*
        this.fnExec = function() {

        	this.dsExec.clearData();

        	this.dsExec.addRow();

        	this.dsExec.setColumn(nrow, "TY_WRK", "CALC");
        	this.dsExec.setColumn(nrow, "ID_USER", this.AuthClient.ID_USER);
        	this.dsExec.setColumn(nrow, "CD_SITE", this.dsSearch.getColumn(0, "CD_SITE"));
        	this.dsExec.setColumn(nrow, "NO_HADOCONT", this.dsSearch.getColumn(0, "NO_HADOCONT"));

        	if (this.dsExec.rowcount == 0) return;

        	var strSvcId    = "exec";
        	var strSvcType  = "save";
        	var inProc		= "_dsProc";
        	var inData      = "exec=dsExec";
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



        */

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
        		//Alert후 실행할 처리
        		this.fnVaidateCallback = function() {
        			this.ccfCD_SITE.form.CDTextBox.setFocus();
        		}
        		this.gfnAlert("현장코드를 입력하세요.", "fnVaidateCallback");
        	}

        	if (this.gfnIsNull(this.dsSearch.getColumn(0, "NO_HADOCONT"))) {
        		validate = false;
        		//Alert후 실행할 처리
        		this.fnVaidateCallback = function() {
        			this.ccfNO_PR.form.CDTextBox.setFocus();
        		}
        		this.gfnAlert("PR번호를 입력하세요.", "fnVaidateCallback");
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
        		this.gfnGridAfterSelect(this.dxGridSub);
        		this.gfnGridAfterSelect(this.dxGrid);

        		// 트리의 레벨2까지만 펼침
        		this._gfnGridTreeOpen(this.dxGrid, 1);

        		// 트리의 레벨2까지만 펼침
        		//if(this.dsList.rowcount > 0){
        		//	this.dxGrid.setTreeStatus(1, true);
        		//}
        	}else if(svcID == "save") {
        		this.gfnGridAfterSelect(this.dxGridSub);
        		this.gfnGridAfterSelect(this.dxGrid);

        		this.FormBtns.Select.click();
        	}
        	/*
        	else if(svcID == "exec") {
        		this.gfnGridAfterSelect(this.dxGridSub);
        		this.gfnGridAfterSelect(this.dxGrid);

        		this.FormBtns.Select.click();

        	}
        	*/
        	else if(svcID == "indirectCalc") {
        		if (errorCode == 0) {
        			this.gfnAlert("간접비 자동계산을 완료했습니다.");
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

        	if (id == "ccfNO_PR") {
        		if(this.gfnIsNull(this.dsSearch.getColumn(0, "CD_SITE")))
        		{
        			this.gfnAlert("현장코드를 입력하세요.", "fnVaidateCallback");

        			return false;
        		}
        		dsUserParam.setColumn(nrow, "CD_SITE", this.dsSearch.getColumn(0, "CD_SITE"));

        	}
        // 	if (id == "ccfCD_RP") {
        //
        // 		dsUserParam.setColumn(nrow, "CD_SITE", this.dsSearch.getColumn(0, "CD_SITE"));	// 현장코드
        // 	}

        	return true;
        }

        this.ccfCD_SITE_AfterCDTextChanged = function(id, codeFindData) {
        	// 코드,명칭 외 추가 컬럼 처리
        	//var arr = codeFindData; //this.ccfCD_DEPT_ORG.form.SelectedData; 둘다 사용가능

        	this.dsSearch.setColumn(0, "NO_HADOCONT","");
        	this.dsSearch.setColumn(0, "DS_HADOCONT","");

        	this.fnSearchInit();
        }

        this.ccfNO_PR_AfterCDTextChanged = function(id, codeFindData) {
        	// 코드,명칭 외 추가 컬럼 처리
        	//var arr = codeFindData; //this.ccfCD_DEPT_ORG.form.SelectedData; 둘다 사용가능

        	this.fnSearchInit();
        }

        /************************************************************************
         * 그리드 이벤트
         ************************************************************************/
         this.fnGridSub_BeforeUserDataSetParam = function(id, dsUserParam, nrow) {
        	// 그리드에서 코드파인드 id는 그리드셋팅의 코드파인드 식별ID
         	if (id == "DQX_CBSITEMALL") {
         		dsUserParam.setColumn(nrow, "CD_SITE", this.dsSearch.getColumn(0, "CD_SITE"));
         	}
        	return true;
        }

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

        this.fnGridSub_RowCellChanged = function(obj,e)
        {
            if ((obj.oldrow > -1 && obj.oldrow == e.row)
        		|| (obj.oldrow == -1 && e.oldrow != e.row)) {
        		//this.FormBtns.SubSelect.click();

        		var cd_cost = this.dsListSub.getColumn(this.dsListSub.rowposition, "CD_COST");

        		for (var nrow = 0; nrow < this.dsList.rowcount; nrow++) {
        			if(this.dsList.getColumn(nrow, "CD_COST") == cd_cost)
        			{
        				this.dsList.set_rowposition(nrow);

        				break;
        			}
        		}

        		obj.oldrow = -1;
        	}

        	/* 칼럼 드레그 시 선택합계 표시*/
        	var colnm = this.gfnGridGetBindColumnNameByIndex(this.dxGridSub, e.cell);	// 컬럼 인덱스로 컬럼명 가져오기

        	var rows = obj.getSelectedDatasetRows();
        	var sum = 0;
        	var bRet = "";
        	for(var i = 0; i < rows.length; i++) {
        		//var am = this.dsList.getColumn(rows[i], e.selectstartcol);
        		var am = this.dsListSub.getColumn(rows[i], colnm);

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

        	var colDS_COST = this.dxGridSub.getBindCellIndex("body", "DS_COST");

        	if(!bRet){	// 숫자면 합계표시, 문자면 null
        		this.dxGridSub.setCellProperty("summ", colDS_COST, "text",  "선택합계=" + this.gfnAppendComma(sum));
        	}else{
        		this.dxGridSub.setCellProperty("summ", colDS_COST, "text", "");
        	}
        };

        this.dsListSub_canrowposchange = function(obj,e) {
        	// TODO : 현재 켜놓으면 Insert 후에 우측 그리드에 좌클릭을 하면 해당 문구가 뜸. 왜일까..
        // 	var can_rowchange = true;
        // 	for (var i = 0; i < this.dsListSub.rowcount; i++) {
        // 		var flag = this.gfnGetFlag(this.dsListSub, i);
        // 		if (flag == "I" || flag == "U" || flag == "D") {
        // 			can_rowchange = false;
        // 			break;
        // 		}
        // 	}
        //
        // 	if(!can_rowchange) {
        // 		this._row = e.newrow;
        // 		this.gfnConfirm("변경된 데이터가 있습니다.\r\n계속 진행하시겠습니까?", "dsListSub_canrowposchange_callback");
        // 	}
        //
        // 	return can_rowchange;
        }

        this.fnGrid_EnterCell = function(obj, row, cell) {
        	var colnm = this.gfnGridGetBindColumnNameByIndex(this.dxGridSub, cell);

        	if(colnm == "AM_TT_DOKUB"){
        		if(this.dsListSub.getColumn(row, "YN_EDIT") == "Y" && this.dsListSub.getColumn(row, "YN_LSUNIT") == "Y" && this.dsListSub.getColumn(row, "YN_EDIT_D") == "Y"){
        			return true;
        		}
        	}else if(colnm == "AM_TT_SILHENG"){
        		if(this.dsListSub.getColumn(row, "YN_EDIT") == "Y" && this.dsListSub.getColumn(row, "YN_LSUNIT") == "Y" && this.dsListSub.getColumn(row, "YN_EDIT_S") == "Y"){
        			return true;
        		}
        	}else if(colnm == "AM_TT_HADO"){
        		if(this.dsListSub.getColumn(row, "YN_EDIT") == "Y" && this.dsListSub.getColumn(row, "YN_LSUNIT") == "Y" && this.dsListSub.getColumn(row, "YN_EDIT_H") == "Y"){
        			return true;
        		}
        	}else if(colnm == "QN_TT_DOKUB"){ //21.10.25 도급수량 변경 못하게 막음
        // 		if(this.dsListSub.getColumn(row, "YN_EDIT") == "Y" && this.dsListSub.getColumn(row, "YN_LSUNIT") != "Y" && this.dsListSub.getColumn(row, "YN_EDIT_D") == "Y"){
        // 			return true;
        // 		}
        	}else if(colnm == "QN_TT_SILHENG"){
        		if(this.dsListSub.getColumn(row, "YN_EDIT") == "Y" && this.dsListSub.getColumn(row, "YN_LSUNIT") != "Y" && this.dsListSub.getColumn(row, "YN_EDIT_S") == "Y"){
        			return true;
        		}
        	}
        	else if(colnm == "QN_TT_HADO"){
        		if(this.dsListSub.getColumn(row, "YN_EDIT") == "Y" && this.dsListSub.getColumn(row, "YN_EDIT_H") == "Y"){
        			if(this.dsListSub.getColumn(row, "YN_LSUNIT") != "Y") return true;
        			else return false;
        		}
        	}
        // 	else if(colnm == "UP_TT_HADO"){
        // 		if(this.dsListSub.getColumn(row, "YN_EDIT") == "Y" /*&& this.dsListSub.getColumn(row, "YN_LSUNIT") != "Y" */&& this.dsListSub.getColumn(row, "YN_EDIT_H") == "Y"/* && this.dsListSub.getColumn(row, "YN_UPRC_H") == "Y"*/){
        // 			if(this.dsListSub.getColumn(row, "YN_LSUNIT") != "Y" && this.dsListSub.getColumn(row, "YN_UPRC_H") == "Y") return true;
        // 			else return false;
        // 		}
        // 	}
        }
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

        this.divData_ondragmove = function(obj,e)
        {
        	if(e.userdata == "splitter") {
        		this.divData.form.divSplitter.set_left(e.clientx);
        		this.divData.form.resetScroll();
        	}
        };

        this.divData_divSplitter_ondrag = function(obj,e)
        {
        	e.set_userdata("splitter");
        	return true;
        };

        // ▶ 버튼 클릭.
        this.divData_btnSend_Right_onclick = function(obj,e)
        {
        	var rows = this.dxGrid.getSelectedDatasetRows();

        	for(var i = 0; i < rows.length; i++)
        	{
        		var nrow = rows[i];

        		// 발주내역에 있는지 확인.
        		for(var j = 0; j < this.dsListSub.getRowCount(); j++)
        		{
        			if(this.dsList.getColumn(nrow, "CD_COST") == this.dsListSub.getColumn(j, "CD_COST"))
        			{
        				this.gfnAlert("발주내역에 공종번호 " + this.dsList.getColumn(nrow, "CD_COST") + "이 존재합니다.");
        				return false;
        			}
        		}
        	}

        	this.dsListSub.set_enableevent(false);

        	for(var i = 0; i < rows.length; i++)
        	{
        		var nrow = rows[i];

        		// YN_COST가 N이라면 최하위 노드가 아님.
        		if(this.dsList.getColumn(nrow,"YN_COST") == "N") continue;

        		var listRow = this.dsListSub.addRow();
        		//var listRow = this.gfnGridAdd(this.dxGrid, "bottom");

        		// QN_TT_HADO / UP_TT_HADO / AM_TT_HADO 가 왼쪽 그리드에는 컬럼이 없어 null로 넘어옴.
        		this.dsListSub.copyRow(listRow, this.dsList, nrow);
        		this.dsListSub.setColumn(listRow, this.ucFlag, "I");
        		this.dsListSub.setColumn(listRow, "QN_TT_SILHENG", this.dsList.getColumn(nrow, "QN_SILHENG_MI"));
        		this.dsListSub.setColumn(listRow, "UP_TT_SILHENG", this.dsList.getColumn(nrow, "UP_SILHENG_MI"));
        		this.dsListSub.setColumn(listRow, "AM_TT_SILHENG", this.dsList.getColumn(nrow, "AM_SILHENG_MI"));
        		this.dsListSub.setColumn(listRow, "QN_TT_HADO", this.dsList.getColumn(nrow, "QN_SILHENG_MI"));
        		this.dsListSub.setColumn(listRow, "UP_TT_HADO", this.dsList.getColumn(nrow, "UP_SILHENG_MI"));
        		this.dsListSub.setColumn(listRow, "AM_TT_HADO", this.dsList.getColumn(nrow, "AM_SILHENG_MI"));
        		this.dsListSub.setColumn(listRow, "QN_SILHENG_MI", this.dsListSub.getColumn(listRow, "QN_TT_HADO"));
        		this.dsListSub.setColumn(listRow, "UP_SILHENG_MI", this.dsListSub.getColumn(listRow, "UP_TT_HADO"));
        		this.dsListSub.setColumn(listRow, "AM_SILHENG_MI", this.dsListSub.getColumn(listRow, "AM_TT_HADO"));

        	}

        	this.gfnSetFormStatus(this, "I");
        	this.dsListSub.set_enableevent(true);

        }

        // ◀ 버튼 클릭
        this.divData_btnSend_Left_onclick = function(obj,e)
        {
        	this.fnDel();
        };

        // 아래부터는 확장버튼 이벤트.
        /*
        this.fnCosttuja = function(obj:nexacro.Button,e:nexacro.ClickEventInfo) {
        	//if (!this.gfnGridIsRow(this.dxGrid)) { return false; }
        	var param = {};

        	param.CD_SITE = this.dsSearch.getColumn(0, "CD_SITE");
        	param.DS_SITE = this.divSearch.form.ccfCD_SITE.form.DSTextBox.text;
        	param.CD_COST = this.dsList.getColumn(this.dsList.rowposition, "CD_COST");
        	param.CD_DKCOST = this.dsList.getColumn(this.dsList.rowposition, "CD_DKCOST");
        	param.DS_COST = this.dsList.getColumn(this.dsList.rowposition, "DS_COST");
        	param.SZ_SIZE = this.dsList.getColumn(this.dsList.rowposition, "SZ_SIZE");
        	param.DS_UNIT = this.dsList.getColumn(this.dsList.rowposition, "DS_UNIT");

        	// 화면 오픈.
        	// CD_MODULE은 보통 같은 모듈에서 호출하는 경우가 많으니 this.FormInfo.CD_MODULE 사용
        	// 타 모듈 화면 호출시 지정할것.
        	this.gfnFormOpen(this.FormInfo.CD_MODULE, "DWX_COSTTUJA", "", param);

        };
        */
        /*
        this.fnIcstCalc = function(obj:nexacro.Button,e:nexacro.ClickEventInfo) {
        	//if (!this.gfnGridIsRow(this.dxGrid)) { return false; }

        	this.fnExec();
        	//this.gfnAlert("개발중인 화면입니다");

        }
        */
        /*
        this.fnAutoCreation = function(obj:nexacro.Button,e:nexacro.ClickEventInfo) {


        	this.dsSave.clearData();

        	for (var i = 0; i < this.dsListSub.rowcount; i++) {
        		var flag = this.gfnGetFlag(this.dsListSub, i);

        		switch(flag) {
        			case "I":
        			case "U":
        			case "D":
        				var nrow = this.dsSave.addRow();
        				this.dsSave.setColumn(nrow, "TY_SAVE", flag);
        				this.dsSave.setColumn(nrow, "CD_SITE", this.dsSearch.getColumn(0, "CD_SITE"));
        				this.dsSave.setColumn(nrow, "NO_HADOCONT", this.dsSearch.getColumn(0, "NO_HADOCONT"));
        				this.dsSave.setColumn(nrow, "CD_COST", this.dsListSub.getColumn(i, "CD_COST"));
        				this.dsSave.setColumn(nrow, "CD_ITEM", this.dsListSub.getColumn(i, "CD_ITEM"));
        				this.dsSave.setColumn(nrow, "QN_TT_DOKUB", this.dsListSub.getColumn(i, "QN_TT_DOKUB"));
        				this.dsSave.setColumn(nrow, "UP_TT_DOKUB", this.dsListSub.getColumn(i, "UP_TT_DOKUB"));
        				this.dsSave.setColumn(nrow, "AM_TT_DOKUB", this.dsListSub.getColumn(i, "AM_TT_DOKUB"));
        				this.dsSave.setColumn(nrow, "QN_TT_SILHENG", this.dsListSub.getColumn(i, "QN_TT_SILHENG"));
        				this.dsSave.setColumn(nrow, "UP_TT_SILHENG", this.dsListSub.getColumn(i, "UP_TT_SILHENG"));
        				this.dsSave.setColumn(nrow, "AM_TT_SILHENG", this.dsListSub.getColumn(i, "AM_TT_SILHENG"));
        				this.dsSave.setColumn(nrow, "QN_TT_HADO", this.dsListSub.getColumn(i, "QN_TT_HADO"));
        				this.dsSave.setColumn(nrow, "UP_TT_HADO", this.dsListSub.getColumn(i, "UP_TT_HADO"));
        				this.dsSave.setColumn(nrow, "AM_TT_HADO", this.dsListSub.getColumn(i, "AM_TT_HADO"));
        				this.dsSave.setColumn(nrow, "CD_STDCOST", this.dsListSub.getColumn(i, "CD_STDCOST"));

        				break;
        		}
        	}

        	if (this.dsSave.rowcount == 0) return;

        	var strSvcId    = "save";
        	var strSvcType  = "save";
        	var inProc		= "_dsProc";
        	var inData      = "save=dsExec2";
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
        */


        /*
        // 구분별 일괄저장
        this.fnAutoCreation = function(obj:nexacro.Button,e:nexacro.ClickEventInfo) {

            if (!this.gfnGridIsRow(this.dxGridSub)) { return false; }

            this.gfnConfirm("구분별 일괄저장을 하시겠습니까?" , "fnAutoCreation_callback");

        }
        */




        // 간접비산식
        this.fnIndirectList = function(obj,e) {


            if (!this.gfnGridIsRow(this.dxGridSub)) { return false; }

        	var param = {};
        	param.CD_SITE = this.dsSearch.getColumn(0, "CD_SITE");
        	param.DS_SITE = this.dsSearch.getColumn(0, "DS_SITE");
        	param.NO_PR = this.dsSearch.getColumn(0, "NO_HADOCONT");
        	param.DS_PR = this.dsSearch.getColumn(0, "DS_HADOCONT");
        	param.CD_ITEM = this.dsListSub.getColumn(this.dsListSub.rowposition, "CD_ITEM");
        	param.DS_ITEM = this.dsListSub.getColumn(this.dsListSub.rowposition, "DS_ITEM");

            this.gfnFormOpenNonAuth(this.FormInfo.CD_MODULE, "DWA_INDIRECT_LIST", "", param);

        }


        //자동간접비자동계산
        this.fnIndirectCalc = function(obj,e) {

        	if (!this.gfnGridIsRow(this.dxGridSub)) { return false; }

        	this.gfnConfirm("간접비 자동계산을 하시겠습니까?" , "fnIndirectCalc_callback");

        }

        this.fnIndirectCalc_callback = function(strId, val){

           if(val == true) {
        		this.dsIndirectCalc.clearData();

        		this.dsIndirectCalc.addRow();

        		this.dsIndirectCalc.setColumn(0, "CD_SITE", this.dsSearch.getColumn(0, "CD_SITE"));
        		this.dsIndirectCalc.setColumn(0, "NO_HADOCONT", this.dsSearch.getColumn(0, "NO_HADOCONT"));


        		if (this.dsIndirectCalc.rowcount == 0) return;

        		var strSvcId    = "indirectCalc";
        		var strSvcType  = "save";
        		var inProc		= "_dsProc";
        		var inData      = "indirectCalc=dsIndirectCalc";
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
        }



        //자동간접비자동계산
        this.fnAutoCreation = function(obj,e) {

        	if (!this.gfnGridIsRow(this.dxGridSub)) { return false; }

        	this.gfnConfirm("간접비 자동계산을 하시겠습니까?" , "fnAutoCreation_callback");

        }

        this.fnAutoCreation_callback = function(strId, val){

           if(val == true) {
        		this.dsIndirectCalc.clearData();

        		this.dsIndirectCalc.addRow();

        		this.dsIndirectCalc.setColumn(0, "CD_SITE", this.dsSearch.getColumn(0, "CD_SITE"));
        		this.dsIndirectCalc.setColumn(0, "NO_HADOCONT", this.dsSearch.getColumn(0, "NO_HADOCONT"));


        		if (this.dsIndirectCalc.rowcount == 0) return;

        		var strSvcId    = "indirectCalc";
        		var strSvcType  = "save";
        		var inProc		= "_dsProc";
        		var inData      = "indirectCalc=dsIndirectCalc";
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
        }



        // 간접비산식
        this.fnStdCode = function(obj,e) {


            if (!this.gfnGridIsRow(this.dxGridSub)) { return false; }
        	var param = {};

            this.gfnFormOpen(this.FormInfo.CD_MODULE, "DWA_STDCOST_FORMULA", "", param);

        }

        /*
        this.fnAutoCreation_callback = function(strId, val){

            if (!this.gfnGridValidate(this.dxGridSub)) return;

         	this.dxGridSub.updateToDataset();

        	this.dsSave.clearData();

        	for (var i = 0; i < this.dsListSub.rowcount; i++) {
        		var flag = this.gfnGetFlag(this.dsListSub, i);

        		switch(flag) {
        			case "I":
        			case "U":
        			case "D":
        				var nrow = this.dsSave.addRow();
        				this.dsSave.setColumn(nrow, "TY_SAVE", flag);
        				this.dsSave.setColumn(nrow, "CD_SITE", this.dsSearch.getColumn(0, "CD_SITE"));
        				this.dsSave.setColumn(nrow, "NO_HADOCONT", this.dsSearch.getColumn(0, "NO_HADOCONT"));
        				this.dsSave.setColumn(nrow, "CD_COST", this.dsListSub.getColumn(i, "CD_COST"));
        				this.dsSave.setColumn(nrow, "CD_ITEM", this.dsListSub.getColumn(i, "CD_ITEM"));
        				this.dsSave.setColumn(nrow, "QN_TT_DOKUB", this.dsListSub.getColumn(i, "QN_TT_DOKUB"));
        				this.dsSave.setColumn(nrow, "UP_TT_DOKUB", this.dsListSub.getColumn(i, "UP_TT_DOKUB"));
        				this.dsSave.setColumn(nrow, "AM_TT_DOKUB", this.dsListSub.getColumn(i, "AM_TT_DOKUB"));
        				this.dsSave.setColumn(nrow, "QN_TT_SILHENG", this.dsListSub.getColumn(i, "QN_TT_SILHENG"));
        				this.dsSave.setColumn(nrow, "UP_TT_SILHENG", this.dsListSub.getColumn(i, "UP_TT_SILHENG"));
        				this.dsSave.setColumn(nrow, "AM_TT_SILHENG", this.dsListSub.getColumn(i, "AM_TT_SILHENG"));
        				this.dsSave.setColumn(nrow, "QN_TT_HADO", this.dsListSub.getColumn(i, "QN_TT_HADO"));
        				this.dsSave.setColumn(nrow, "UP_TT_HADO", this.dsListSub.getColumn(i, "UP_TT_HADO"));
        				this.dsSave.setColumn(nrow, "AM_TT_HADO", this.dsListSub.getColumn(i, "AM_TT_HADO"));
        				this.dsSave.setColumn(nrow, "CD_STDCOST", this.dsListSub.getColumn(i, "CD_STDCOST"));
        				this.dsSave.setColumn(nrow, "CD_SITE_ORGN", this.dsListSub.getColumn(i, "CD_SITE_ORGN"));
        				this.dsSave.setColumn(nrow, "NO_HADOCONT_ORGN", this.dsListSub.getColumn(i, "NO_HADOCONT_ORGN"));
        				this.dsSave.setColumn(nrow, "CD_COST_ORGN", this.dsListSub.getColumn(i, "CD_COST_ORGN"));


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
        */

        this.dsListSub_oncolumnchanged = function(obj,e)
        {
        	if(e.oldvalue != e.newvalue){
        		if(e.columnid == "AM_TT_DOKUB"){
        			this.dsListSub.setColumn(e.row, "UP_TT_DOKUB", this.dsListSub.getColumn(e.row, "AM_TT_DOKUB"));
        		}else if(e.columnid == "AM_TT_SILHENG"){
        			this.dsListSub.setColumn(e.row, "UP_TT_SILHENG", this.dsListSub.getColumn(e.row, "AM_TT_SILHENG"));

        			this.dsListSub.setColumn(e.row, "AM_TT_HADO", this.dsListSub.getColumn(e.row, "AM_TT_SILHENG"));
        			this.dsListSub.setColumn(e.row, "UP_TT_HADO", this.dsListSub.getColumn(e.row, "AM_TT_HADO"));

        			//21.11.01 실행금액 변경 시 도급금액도 같이 변경
        			this.dsListSub.setColumn(e.row, "AM_TT_DOKUB", this.dsListSub.getColumn(e.row, "AM_TT_SILHENG"));
        			//21.12.10 실행금액 변경 시 도급단가도 같이 변경
        			this.dsListSub.setColumn(e.row, "UP_TT_DOKUB", this.dsListSub.getColumn(e.row, "AM_TT_SILHENG"));
        		}else if(e.columnid == "AM_TT_HADO"){
        			this.dsListSub.setColumn(e.row, "UP_TT_HADO", this.dsListSub.getColumn(e.row, "AM_TT_HADO"));
        		}else if(e.columnid == "QN_TT_DOKUB"){
        			var UP_TT_DOKUB = nexacro.toNumber(this.dsListSub.getColumn(e.row, "UP_TT_DOKUB"),0);
        			var QN_TT_DOKUB = nexacro.toNumber(this.dsListSub.getColumn(e.row, "QN_TT_DOKUB"),0);

        			var am_tt_dokub = nexacro.toNumber((UP_TT_DOKUB * nexacro.toNumber(QN_TT_DOKUB,0)),0);

        			this.dsListSub.setColumn(e.row, "AM_TT_DOKUB", this.fnRoundOrFloor(am_tt_dokub));
        		}else if(e.columnid == "QN_TT_SILHENG" || e.columnid == "UP_TT_SILHENG"){
        			var UP_TT_SILHENG = nexacro.toNumber(this.dsListSub.getColumn(e.row, "UP_TT_SILHENG"),0);
        			var QN_TT_SILHENG = nexacro.toNumber(this.dsListSub.getColumn(e.row, "QN_TT_SILHENG"),0);

        			var am_tt_silheng = nexacro.toNumber((UP_TT_SILHENG * QN_TT_SILHENG),0);

        			this.dsListSub.setColumn(e.row, "AM_TT_SILHENG", this.fnRoundOrFloor(am_tt_silheng));

        			this.dsListSub.setColumn(e.row, "QN_TT_HADO", this.dsListSub.getColumn(e.row, "QN_TT_SILHENG"));

        			var QN_TT_HADO = nexacro.toNumber(this.dsListSub.getColumn(e.row, "QN_TT_HADO"),0);
        			var UP_TT_HADO = nexacro.toNumber(this.dsListSub.getColumn(e.row, "UP_TT_HADO"),0);

        			var am_tt_hado = nexacro.toNumber((QN_TT_HADO * UP_TT_HADO),0);

        			this.dsListSub.setColumn(e.row, "AM_TT_HADO", this.fnRoundOrFloor(am_tt_hado));

        			//21.10.25 실행수량 변경 시 도급수량도 같이 변경
        			if(e.columnid == "QN_TT_SILHENG") {
        				this.dsListSub.setColumn(e.row, "QN_TT_DOKUB", this.dsListSub.getColumn(e.row, "QN_TT_SILHENG"));

        				var UP_TT_DOKUB = nexacro.toNumber(this.dsListSub.getColumn(e.row, "UP_TT_DOKUB"),0);
        				var QN_TT_DOKUB = nexacro.toNumber(this.dsListSub.getColumn(e.row, "QN_TT_DOKUB"),0);

        				var am_tt_dokub = nexacro.toNumber((UP_TT_DOKUB * nexacro.toNumber(QN_TT_DOKUB,0)),0);

        				this.dsListSub.setColumn(e.row, "AM_TT_DOKUB", this.fnRoundOrFloor(am_tt_dokub));
        			}
        		}else if(e.columnid == "QN_TT_HADO" || e.columnid == "UP_TT_HADO"){
        			var QN_TT_HADO = nexacro.toNumber(this.dsListSub.getColumn(e.row, "QN_TT_HADO"),0);
        			var UP_TT_HADO = nexacro.toNumber(this.dsListSub.getColumn(e.row, "UP_TT_HADO"),0);

        			var am_tt_hado = nexacro.toNumber((QN_TT_HADO * UP_TT_HADO),0);

        			this.dsListSub.setColumn(e.row, "AM_TT_HADO", this.fnRoundOrFloor(am_tt_hado));
        		}
        	}
        };
        this.divSearch_chkYN_DOKUB_onchanged = function(obj,e)
        {
        	var QN_TT_DOKUB_Index = this.dxGrid.getBindCellIndex("body", "QN_TT_DOKUB");
        	var UP_TT_DOKUB_Index = this.dxGrid.getBindCellIndex("body", "UP_TT_DOKUB");
        	var AM_TT_DOKUB_Index = this.dxGrid.getBindCellIndex("body", "AM_TT_DOKUB");

        	var QN_TT_DOKUB_SUB_Index = this.dxGridSub.getBindCellIndex("body", "QN_TT_DOKUB");
        	var UP_TT_DOKUB_SUB_Index = this.dxGridSub.getBindCellIndex("body", "UP_TT_DOKUB");
        	var AM_TT_DOKUB_SUB_Index = this.dxGridSub.getBindCellIndex("body", "AM_TT_DOKUB");

        	if(obj.isChecked())
        	{
        		this.dxGrid.setRealColSize("body", QN_TT_DOKUB_Index, 70);
        		this.dxGrid.setRealColSize("body", UP_TT_DOKUB_Index, 90);
        		this.dxGrid.setRealColSize("body", AM_TT_DOKUB_Index, 100);
        		this.dxGridSub.setRealColSize("body", QN_TT_DOKUB_SUB_Index, 70);
        		this.dxGridSub.setRealColSize("body", UP_TT_DOKUB_SUB_Index, 90);
        		this.dxGridSub.setRealColSize("body", AM_TT_DOKUB_SUB_Index, 100);
        	}
        	else
        	{
        		this.dxGrid.setRealColSize("body", QN_TT_DOKUB_Index, 0);
        		this.dxGrid.setRealColSize("body", UP_TT_DOKUB_Index, 0);
        		this.dxGrid.setRealColSize("body", AM_TT_DOKUB_Index, 0);
        		this.dxGridSub.setRealColSize("body", QN_TT_DOKUB_SUB_Index, 0);
        		this.dxGridSub.setRealColSize("body", UP_TT_DOKUB_SUB_Index, 0);
        		this.dxGridSub.setRealColSize("body", AM_TT_DOKUB_SUB_Index, 0);
        	}
        };


        this.fnRoundOrFloor = function(val)
        {
        	var result = val;

        	if(this._AM_CALC == "ROUND")
        	{
        		result = nexacro.round(nexacro.toNumber(result.toFixed(0),0));
        	}
        	else if(this._AM_CALC == "TRUNC")
        	{
        		result = nexacro.floor(result);
        	}

        	return result;
        }
        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.form_onload,this);
            this.divSearch.form.chkYN_DOKUB.addEventHandler("onchanged",this.divSearch_chkYN_DOKUB_onchanged,this);
            this.divData.addEventHandler("ondragmove",this.divData_ondragmove,this);
            this.divData.form.divSplitter.addEventHandler("ondrag",this.divData_divSplitter_ondrag,this);
            this.divData.form.btnSend_Right.addEventHandler("onclick",this.divData_btnSend_Right_onclick,this);
            this.divData.form.btnSend_Left.addEventHandler("onclick",this.divData_btnSend_Left_onclick,this);
            this.dsListSub.addEventHandler("oncolumnchanged",this.dsListSub_oncolumnchanged,this);
        };
        this.loadIncludeScript("DWA_SILHENGTOPR.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
