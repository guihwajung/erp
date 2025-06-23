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
            this.set_titletext("공가 접수(콜센터)");
            if (Form == this.constructor)
            {
                this._setFormPosition(1280,720);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("dsList", this);
            obj._setContents("");
            this.addChild(obj.name, obj);


            obj = new Dataset("_dsProc", this);
            obj._setContents("<ColumnInfo><Column id=\"TARGET\" type=\"STRING\" size=\"256\"/><Column id=\"SP\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"TARGET\">select</Col><Col id=\"SP\">DBSPR_JEOBSU_GONGA_SELECT</Col></Row><Row><Col id=\"TARGET\">insert</Col><Col id=\"SP\">DBSPR_JEOBSU_GONGA_INSERT</Col></Row><Row><Col id=\"TARGET\">update</Col><Col id=\"SP\">DBSPR_JEOBSU_GONGA_UPDATE</Col></Row><Row><Col id=\"TARGET\">delete</Col><Col id=\"SP\">DBSPR_JEOBSU_GONGA_DELETE</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsSearch", this);
            obj._setContents("<ColumnInfo><Column id=\"CD_ACNTUNIT\" type=\"STRING\" size=\"256\"/><Column id=\"NO_DONG\" type=\"STRING\" size=\"256\"/><Column id=\"NO_HO\" type=\"STRING\" size=\"256\"/><Column id=\"DT_FROM\" type=\"STRING\" size=\"256\"/><Column id=\"DT_TO\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row/></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsYN_COMPLAIN", this);
            obj._setContents("<ColumnInfo><Column id=\"CD_CODE\" type=\"STRING\" size=\"256\"/><Column id=\"DS_CODE\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"DS_CODE\">전체</Col></Row><Row><Col id=\"DS_CODE\">공가</Col><Col id=\"CD_CODE\">N</Col></Row><Row><Col id=\"DS_CODE\">민원</Col><Col id=\"CD_CODE\">Y</Col></Row></Rows>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Div("divSearch","0.0","10.0",null,"46.0","0",null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_cssclass("div_SEARCH_Bg");
            this.addChild(obj.name, obj);

            obj = new Static("staCD_SITE","0.0","10.0","92.0","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("0");
            obj.set_text("단지코드");
            obj.set_cssclass("sta_WF_SchLabelE");
            this.divSearch.addChild(obj.name, obj);

            obj = new Div("ccfCD_ACNTUNIT","staCD_SITE:0.0","10.0","250","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.getSetter("CDTextWidth").set("80");
            obj.set_taborder("1");
            obj.set_url("cmm::cmmCodeFind.xfdl");
            obj.set_text("");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("staDS_DONG","ccfCD_ACNTUNIT:0.0","10.0","92.0","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("2");
            obj.set_text("동호");
            obj.set_cssclass("sta_WF_SchLabelE");
            this.divSearch.addChild(obj.name, obj);

            obj = new Div("ccfNO_DONG","staDS_DONG:0.0","10.0","175","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.getSetter("CDTextWidth").set("70");
            obj.set_taborder("3");
            obj.set_url("cmm::cmmCodeFind.xfdl");
            obj.set_text("");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("staYN_COMPLAIN","ccfNO_DONG:0.0","10.0","92.0","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("4");
            obj.set_text("접수일자");
            obj.set_cssclass("sta_WF_SchLabel");
            this.divSearch.addChild(obj.name, obj);

            obj = new Calendar("calDT_FROM","staYN_COMPLAIN:0.0","10.0","120","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.set_innerdataset("dsList");
            obj.set_taborder("5");
            obj.set_dateformat("yyyy-MM-dd");
            obj.set_editformat("yyyyMMdd");
            obj.set_autoselect("true");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("sta00","calDT_FROM:0.0","10.0","30.0","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("6");
            obj.set_text("~");
            obj.set_cssclass("sta_WF_AC");
            this.divSearch.addChild(obj.name, obj);

            obj = new Calendar("calDT_TO","sta00:0.0","10.0","105","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("7");
            obj.set_dateformat("yyyy-MM-dd");
            obj.set_editformat("yyyyMMdd");
            obj.set_autoselect("true");
            this.divSearch.addChild(obj.name, obj);

            obj = new Div("divData","0","40",null,null,"0","0",null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_cssclass("div_DATA_Bg");
            this.addChild(obj.name, obj);

            obj = new Div("divDataMain","0","0",null,"138","0",null,null,null,null,null,this.divData.form);
            obj.set_taborder("0");
            obj.set_text("");
            this.divData.addChild(obj.name, obj);

            obj = new Static("staTitle","0","0",null,"22","0",null,null,null,null,null,this.divData.form.divDataMain.form);
            obj.set_taborder("10");
            obj.set_text("접수내용");
            obj.set_cssclass("sta_TITLE_Bg");
            this.divData.form.divDataMain.addChild(obj.name, obj);

            obj = new Static("staItem01","0","30","89","30",null,null,null,null,null,null,this.divData.form.divDataMain.form);
            obj.set_taborder("5");
            obj.set_text("접수일자");
            obj.set_cssclass("sta_WF_tablelabelE");
            this.divData.form.divDataMain.addChild(obj.name, obj);

            obj = new Static("staBar01","staItem01:-1","30","42.97%","30",null,null,null,null,null,null,this.divData.form.divDataMain.form);
            obj.set_taborder("11");
            obj.set_cssclass("sta_WF_tablebg");
            this.divData.form.divDataMain.addChild(obj.name, obj);

            obj = new Calendar("calDT_JEOBSU","staItem01:5","35","120","20",null,null,null,null,null,null,this.divData.form.divDataMain.form);
            obj.set_innerdataset("dsList");
            obj.set_taborder("0");
            obj.set_dateformat("yyyy-MM-dd");
            obj.set_editformat("yyyyMMdd");
            obj.set_autoselect("true");
            obj.set_readonly("true");
            this.divData.form.divDataMain.addChild(obj.name, obj);

            obj = new Static("staItem02","staBar01:-1","30","110","30",null,null,null,null,null,null,this.divData.form.divDataMain.form);
            obj.set_taborder("6");
            obj.set_text("AS위치");
            obj.set_cssclass("sta_WF_tablelabelE");
            this.divData.form.divDataMain.addChild(obj.name, obj);

            obj = new Static("staBar02","staItem02:-1","30",null,"30","0",null,null,null,null,null,this.divData.form.divDataMain.form);
            obj.set_taborder("12");
            obj.set_cssclass("sta_WF_tablebg");
            this.divData.form.divDataMain.addChild(obj.name, obj);

            obj = new Div("ccfCD_SIL","staItem02:5","35","346","20",null,null,null,null,null,null,this.divData.form.divDataMain.form);
            obj.getSetter("CDTextWidth").set("70");
            obj.set_taborder("1");
            obj.set_url("cmm::cmmCodeFind.xfdl");
            this.divData.form.divDataMain.addChild(obj.name, obj);

            obj = new Static("staItem03","0","staItem01:-1","89","30",null,null,null,null,null,null,this.divData.form.divDataMain.form);
            obj.set_taborder("7");
            obj.set_text("신청자");
            obj.set_cssclass("sta_WF_tablelabelE");
            this.divData.form.divDataMain.addChild(obj.name, obj);

            obj = new Static("staBar03","staItem03:-1","staBar01:-1","42.97%","30",null,null,null,null,null,null,this.divData.form.divDataMain.form);
            obj.set_taborder("13");
            obj.set_cssclass("sta_WF_tablebg");
            this.divData.form.divDataMain.addChild(obj.name, obj);

            obj = new Edit("edtPN_SC","staItem03:5","staBar01:5","178","20",null,null,null,null,null,null,this.divData.form.divDataMain.form);
            obj.set_taborder("2");
            obj.set_maxlength("50");
            this.divData.form.divDataMain.addChild(obj.name, obj);

            obj = new Static("staItem04","staBar03:-1","staItem02:-1","110","30",null,null,null,null,null,null,this.divData.form.divDataMain.form);
            obj.set_taborder("8");
            obj.set_text("신청자 휴대전화");
            obj.set_cssclass("sta_WF_tablelabelE");
            this.divData.form.divDataMain.addChild(obj.name, obj);

            obj = new Static("staBar04","staItem04:-1","staItem04:-30",null,"30","0",null,null,null,null,null,this.divData.form.divDataMain.form);
            obj.set_taborder("14");
            obj.set_cssclass("sta_WF_tablebg");
            this.divData.form.divDataMain.addChild(obj.name, obj);

            obj = new Edit("edtNO_SCTEL","staItem04:5","65","178","20",null,null,null,null,null,null,this.divData.form.divDataMain.form);
            obj.set_taborder("3");
            obj.set_inputtype("number");
            obj.set_maxlength("50");
            this.divData.form.divDataMain.addChild(obj.name, obj);

            obj = new Static("staItem05","0","staItem03:-1","89","50",null,null,null,null,null,null,this.divData.form.divDataMain.form);
            obj.set_taborder("9");
            obj.set_text("하자내용");
            obj.set_cssclass("sta_WF_tablelabelE");
            this.divData.form.divDataMain.addChild(obj.name, obj);

            obj = new Static("staBar05","staItem05:-1","staBar03:-1",null,"50","0",null,null,null,null,null,this.divData.form.divDataMain.form);
            obj.set_taborder("15");
            obj.set_cssclass("sta_WF_tablebg");
            this.divData.form.divDataMain.addChild(obj.name, obj);

            obj = new TextArea("taxRM_NY","staItem05:5","staBar03:5",null,"38","5",null,null,null,null,null,this.divData.form.divDataMain.form);
            obj.set_taborder("4");
            obj.set_autoselect("false");
            obj.set_enableevent("true");
            obj.set_accessibilitydesclevel("all");
            obj.set_maxlength("500");
            obj.set_wordWrap("char");
            this.divData.form.divDataMain.addChild(obj.name, obj);

            obj = new Div("divDataSub","0","divDataMain:10",null,null,"0","0",null,null,null,null,this.divData.form);
            obj.set_taborder("1");
            this.divData.addChild(obj.name, obj);

            obj = new Grid("objGrid","0","0",null,null,"0","1",null,null,null,null,this.divData.form.divDataSub.form);
            obj.set_taborder("0");
            obj._setContents("");
            this.divData.form.divDataSub.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this
            obj = new Layout("default","",this._adjust_width,this._adjust_height,this,function(p){});
            this.addLayout(obj.name, obj);
            
            // BindItem Information
            obj = new BindItem("item3","divData.form.divDataMain.form.calDT_JEOBSU","value","dsList","DT_JEOBSU");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item6","divData.form.divDataMain.form.ccfCD_SIL.form.CDTextBox","value","dsList","CD_SIL");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item7","divData.form.divDataMain.form.ccfCD_SIL.form.DSTextBox","value","dsList","DS_SIL");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item8","divData.form.divDataMain.form.edtPN_SC","value","dsList","PN_SC");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item9","divData.form.divDataMain.form.edtNO_SCTEL","value","dsList","NO_SCTEL");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item10","divData.form.divDataMain.form.taxRM_NY","value","dsList","RM_NY");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item0","divSearch.form.ccfCD_ACNTUNIT.form.CDTextBox","value","dsSearch","CD_ACNTUNIT");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item1","divSearch.form.ccfNO_DONG.form.CDTextBox","value","dsSearch","NO_DONG");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item2","divSearch.form.ccfNO_DONG.form.DSTextBox","value","dsSearch","NO_HO");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item4","divSearch.form.calDT_FROM","value","dsSearch","DT_FROM");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item5","divSearch.form.calDT_TO","value","dsSearch","DT_TO");
            this.addChild(obj.name, obj);
            obj.bind();
            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {
            this._addPreloadList("fdl","cmm::cmmCodeFind.xfdl");
        };
        
        // User Script
        this.registerScript("DBS_JEOBSU_GONGA.xfdl", function() {
        this.objApp = this.gfnGetApplication();
        this.filepath = "/DB/SIZEINFO/";

        this.form_onload = function(obj,e)
        {

        	// -- 필수 -------------------//
        	this.gfnFormOnLoad(this);
        	this.gfnFormInfo(this);
        	// ---------------------------//

        	//this.fnSetButton();
        	this.fnSetExtendButton();
        	this.fnSetVariable();
        	this.fnSetEvent();
        	this.fnSetParameter();
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
        };

        /************************************************************************
         * 변수 선언
         ************************************************************************/
        this.fnSetVariable = function() {
        	this.ccfCD_ACNTUNIT = this.divSearch.form.ccfCD_ACNTUNIT;  // 단지코드
        	this.ccfNO_DONG = this.divSearch.form.ccfNO_DONG;  // 동코드
        	this.calDT_FROM = this.divSearch.form.calDT_FROM;  // 접수기간 시작일
        	this.calDT_TO = this.divSearch.form.calDT_TO;      // 접수기간 시작일

        	this.ccfCD_SIL = this.divData.form.divDataMain.form.ccfCD_SIL; // 위치


        	this.dxGrid = this.divData.form.divDataSub.form.objGrid;

        	// 접수기간 초기화
        	var today = this.gfnGetDate();
        	this.calDT_FROM.set_value(this.gfnAddMonth(today,-1));
        	this.calDT_TO.set_value(today);
        };

        /************************************************************************
         * 이벤트 설정
         ************************************************************************/
        this.fnSetEvent = function() {
        	this.ccfCD_ACNTUNIT.CodeFindName = "DLX_CFACNTUNIT";
        	this.ccfCD_ACNTUNIT.BeforeUserDataSetParam = "fnBeforeUserDataSetParam";
        	this.ccfCD_ACNTUNIT.AfterCDTextChanged = "fnAfterCDTextChanged";

        	this.ccfNO_DONG.CodeFindName = "DLX_CFDONGHO_CODEFIND";//"DLX_CFDONGHO_CODEFIND_K";
        	this.ccfNO_DONG.BeforeUserDataSetParam = "fnBeforeUserDataSetParam";
        	this.ccfNO_DONG.AfterCDTextChanged = "fnAfterCDTextChanged";

        	this.ccfCD_SIL.CodeFindName = "CF_CODE_DB_S3";                            // 위치
        	this.ccfCD_SIL.AfterCDTextChanged = "fnAfterCDTextChanged";

        	this.gfnGridInit(this.dxGrid, this.dsList, "DB", "DBS_JEOBSU_GONGA");
        	this.dxGrid.set_autosizingtype("row");
        	this.dxGrid.setCellProperty( "body", this.dxGrid.getBindCellIndex("body","RM_NY"), "tooltiptext", "bind:RM_NY" );
        	this.dxGrid.setCellProperty( "body", this.dxGrid.getBindCellIndex("body","RM_NY"), "wordWrap", "char" );
        	this.dxGrid.setFormatRowProperty( 1,"size",this.dxGrid.getFormatRowProperty(0,"size")*2 );

        	this.dxGrid.set_selecttype("cell");	// IE경우만 multiarea모드에서 master선택후 마우스 이동 빠르게 할 경우 버그가 있어서 cell 모드로 변경

        	this.dsList.addEventHandler("onrowposchanged", this.dsList_onrowposchanged, this);
        	this.dsSearch.addEventHandler("onvaluechanged", this.dsSearch_onvaluechanged, this);
        }

        /************************************************************************
         * 파라미터 설정
         ************************************************************************/
        this.fnSetParameter = function() {

        	this.dsSelect = new Dataset();
        	this.dsSelect.addColumn("CD_SITE", "string");
        	this.dsSelect.addColumn("DS_DONG", "string");
        	this.dsSelect.addColumn("DS_HO", "string");
        	this.dsSelect.addColumn("DT_FROM", "string");
        	this.dsSelect.addColumn("DT_TO", "string");

        	this.dsInsert = new Dataset();
        	this.dsInsert.addColumn("CD_SITE", "string");           // 단지코드
        	this.dsInsert.addColumn("DS_DONG", "string");           // 동
        	this.dsInsert.addColumn("DS_HO", "string");             // 호
        	this.dsInsert.addColumn("PN_SC", "string");             // 신청자명
        	this.dsInsert.addColumn("NO_SCTEL", "string");          // 신청자핸드폰
        	this.dsInsert.addColumn("CD_SIL", "string");            // 실(위치)
        	this.dsInsert.addColumn("RM_NY", "string");             // 하자내용
        	this.dsInsert.addColumn("ID_INSERT", "string");
        	this.dsInsert.addColumn("SEQ", "int");

        	this.dsUpdate = new Dataset();
        	this.dsUpdate.addColumn("CD_SITE", "string");           // 단지코드
        	this.dsUpdate.addColumn("DT_JEOBSU", "string");         // 접수일자
        	this.dsUpdate.addColumn("CD_JOB", "string");            // 순번
        	this.dsUpdate.addColumn("PN_SC", "string");             // 신청자명
        	this.dsUpdate.addColumn("NO_SCTEL", "string");          // 신청자핸드폰
        	this.dsUpdate.addColumn("CD_SIL", "string");            // 실(위치)
        	this.dsUpdate.addColumn("RM_NY", "string");             // 하자내용
        	this.dsUpdate.addColumn("ID_UPDATE", "string");         // 수정자 사번

        	this.dsDelete = new Dataset();
        	this.dsDelete.addColumn("CD_SITE", "string");           // 단지코드
        	this.dsDelete.addColumn("DT_JEOBSU", "string");         // 접수일자
        	this.dsDelete.addColumn("CD_JOB", "string");            // 순번
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

        	this.dsList.clearData();

        	this.dsSelect.clearData();
        	this.dsSelect.addRow();
        	this.dsSelect.setColumn(0, "CD_SITE", this.dsSearch.getColumn(0,"CD_ACNTUNIT"));
        	this.dsSelect.setColumn(0, "DS_DONG", this.dsSearch.getColumn(0,"NO_DONG"));
        	this.dsSelect.setColumn(0, "DS_HO", this.dsSearch.getColumn(0,"NO_HO"));
        	this.dsSelect.setColumn(0, "DT_FROM", this.dsSearch.getColumn(0,"DT_FROM"));                          // 접수일자 FROM
        	this.dsSelect.setColumn(0, "DT_TO", this.dsSearch.getColumn(0,"DT_TO"));                              // 접수일자 TO

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
         *	저장 버튼
         */
        this.fnSave = function() {
        	if (!this.fnSaveValidate()) return false;


        	this.dsInsert.clearData();
        	this.dsUpdate.clearData();
        	this.dsDelete.clearData();

        	for (var i = 0; i < this.dsList.rowcount; i++) {
        		var flag = this.gfnGetFlag(this.dsList, i);
        		switch(flag) {
        			case "I":
        				var nrow = this.dsInsert.addRow();
        				this.dsInsert.setColumn(nrow, "CD_SITE", this.dsSearch.getColumn(0,"CD_ACNTUNIT"));
        				this.dsInsert.setColumn(nrow, "DS_DONG", this.dsSearch.getColumn(0,"NO_DONG"));
        				this.dsInsert.setColumn(nrow, "DS_HO", this.dsSearch.getColumn(0,"NO_HO"));
        				this.dsInsert.setColumn(nrow, "PN_SC", this.dsList.getColumn(i,"PN_SC"));
        				this.dsInsert.setColumn(nrow, "NO_SCTEL", this.dsList.getColumn(i,"NO_SCTEL"));
        				this.dsInsert.setColumn(nrow, "CD_SIL", this.dsList.getColumn(i,"CD_SIL"));
        				this.dsInsert.setColumn(nrow, "RM_NY", this.dsList.getColumn(i,"RM_NY"));
        				this.dsInsert.setColumn(nrow, "ID_INSERT", this.AuthClient.ID_USER);
        				this.dsInsert.setColumn(nrow, "SEQ", i);

        				break;

        			case "U":
        				var nrow = this.dsUpdate.addRow();
        				this.dsUpdate.setColumn(nrow, "CD_SITE", this.dsList.getColumn(i,"CD_SITE"));
        				this.dsUpdate.setColumn(nrow, "DT_JEOBSU", this.dsList.getColumn(i, "DT_JEOBSU"));
        				this.dsUpdate.setColumn(nrow, "CD_JOB", this.dsList.getColumn(i, "CD_JOB"));
        				this.dsUpdate.setColumn(nrow, "PN_SC", this.dsList.getColumn(i,"PN_SC"));
        				this.dsUpdate.setColumn(nrow, "NO_SCTEL", this.dsList.getColumn(i,"NO_SCTEL"));
        				this.dsUpdate.setColumn(nrow, "CD_SIL", this.dsList.getColumn(i,"CD_SIL"));
        				this.dsUpdate.setColumn(nrow, "RM_NY", this.dsList.getColumn(i,"RM_NY"));
        				this.dsUpdate.setColumn(nrow, "ID_UPDATE", this.AuthClient.ID_USER);
        				break;

        			case "D":
        				var nrow = this.dsDelete.addRow();
        				this.dsDelete.setColumn(nrow, "CD_SITE", this.dsList.getColumn(i,"CD_SITE"));
        				this.dsDelete.setColumn(nrow, "DT_JEOBSU", this.dsList.getColumn(i,"DT_JEOBSU"));
        				this.dsDelete.setColumn(nrow, "CD_JOB", this.dsList.getColumn(i,"CD_JOB"));

        				break;
        		}
        	}
        	if (this.dsInsert.rowcount == 0 && this.dsUpdate.rowcount == 0 && this.dsDelete.rowcount == 0) return;

        	var strSvcId    = "save";
        	var strSvcType  = "save";
        	var inProc		= "_dsProc";
        	var inData      = "delete=dsDelete insert=dsInsert update=dsUpdate";
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
         *	입력 버튼
         */
        this.fnAdd = function() {
        	var nRow = this.gfnGridAdd(this.dxGrid,"");
        	this.dsList.setColumn(nRow,"CD_SITE",this.dsSearch.getColumn(0,"CD_ACNTUNIT"));
        	this.dsList.setColumn(nRow,"DS_SITE",this.ccfCD_ACNTUNIT.form.DSTextBox.value);
        	this.dsList.setColumn(nRow,"DT_JEOBSU",this.gfnGetDate());
        	this.dsList.setColumn(nRow,"DS_DONG",this.dsSearch.getColumn(0,"NO_DONG"));
        	this.dsList.setColumn(nRow, "DS_HO", this.dsSearch.getColumn(0,"NO_HO"));
        	this.fnEnable();
        }

        /*
         *	삭제 버튼
         */
        this.fnDel = function() {
        	if( this.dsList.getColumn(this.dsList.rowposition, this.ucFlag) == "#") return;
        	if ( !this.gfnIsNull(this.dsList.getColumn(this.dsList.rowposition,"CD_ACT")) ){
        		this.gfnAlert("공종이 입력된 접수건은 삭제할 수 없습니다.", "");
        	} else {
        		this.gfnGridDel(this.dxGrid);
        	}
        }

        /*
         *	엑셀 버튼
         */
        this.fnExcel = function() {
        	this.gfnExcelExport(this.dxGridSub);
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
        		this.gfnAlert("단지코드는 반드시 입력 하셔야 합니다.", "fnVaidateCallback");
        		return validate;
        	}

        	if (validate && (this.gfnIsNull(this.dsSearch.getColumn(0,"NO_DONG")) || this.gfnIsNull(this.dsSearch.getColumn(0,"NO_HO"))) ) {
        		validate = false;
        		// Alert후 실행할 처리
        		this.fnVaidateCallback = function() {
        			this.ccfNO_DONG.form.CDTextBox.setFocus();
        		}
        		this.gfnAlert("동/호는 반드시 입력 하셔야 합니다.", "fnVaidateCallback");
        		return validate;
        	}

        	return validate;
        }
        /*
         *	저장 Validate
         */
        this.fnSaveValidate = function() {
        	var strMsg = "";
        	for (var i = 0; i < this.dsList.rowcount; i++) {
        		var  flag = this.gfnGetFlag(this.dsList, i);
        		if( flag == "I" ||  flag == "U" ) {

        			if ( this.gfnIsNull(this.dsList.getColumn(i,"CD_SIL")) ) {
        				strMsg += (i+1)+"행 : [위치] 필수입력값입니다.\n";
        			}

        			if( this.gfnIsNull(this.dsList.getColumn(i,"PN_SC")) ) {
        				strMsg += (i+1)+"행 : [신청자] 필수입력값입니다.\n";
        			}

        			if( this.gfnIsNull(this.dsList.getColumn(i,"NO_SCTEL")) ) {
        				strMsg += (i+1)+"행 : [신청자 휴대전화] 필수입력값입니다.\n";
        			}

        			if( this.gfnIsNull(this.dsList.getColumn(i,"RM_NY")) ) {
        				strMsg += (i+1)+"행 : [하자내용] 필수입력값입니다.\n";
        			}
        		}
        	}

        	if(strMsg.length > 0) {
        		this.gfnAlert(strMsg);
        		return false;
        	}

        	return true;
        }
        /************************************************************************
         * 콜백 이벤트
         ************************************************************************/
        /*
         *	콜백 처리
         */
        this.fnCallback = function(svcID, errorCode, errorMsg)
        {
        	if (svcID == "select") {
        		if( this.dsList.rowcount > 0){
        			this.gfnGridAfterSelect(this.dxGrid);
        			for( var i=0; i < this.dsList.rowposition; i++ ){
        				if( this.gfnIsNull(this.dsList.getColumn(i,"RM_NY")) ){
        					this.dsList.setColumn(i,"RM_NY","");
        				}
        			}
        		}
        		this.fnEnable();

        	} else if(svcID == "save"){
        		if (errorCode == 0) {
        			this.FormBtns.Select.click();
        		} else {
        			this.gfnAlert(errorMsg);
        		}
        	}
        };

        /************************************************************************
         * 코드파인드 이벤트
         ************************************************************************/
         this.fnBeforeUserDataSetParam = function(id, dsUserParam, nrow) {

        	if (id == "ccfCD_ACNTUNIT"){
        		if ( this.gfnIsNull(this.dsSearch.getColumn(0, "CD_ACNTUNIT")) ) {
        			dsUserParam.setColumn(nrow, "CD_DEPT", this.AuthClient.CD_DEPT);
        			dsUserParam.setColumn(nrow, "ID_USER", this.AuthClient.ID_USER);
        			dsUserParam.setColumn(nrow, "ID_GROUP", this.FormInfo.ID_GROUP);
        			dsUserParam.setColumn(nrow, "GR_SEARCH", this.FormInfo.GR_SEARCH);
        		}

        	} else if (id == "ccfNO_DONG"){
         		if (this.gfnIsNull(this.dsSearch.getColumn(0, "CD_ACNTUNIT"))) {
         			this.gfnAlert("단지코드를 먼저 입력하세요.");
         			return false;
         		}
        		dsUserParam.setColumn(nrow, "CD_ACNTUNIT", this.dsSearch.getColumn(0, "CD_ACNTUNIT"));
        	}

        	return true;
        }

        this.fnAfterCDTextChanged = function(id, codeFindData) {
        	if(id == "ccfCD_ACNTUNIT"){
        		if( this.gfnIsNull(this.getOwnerFrame().ACC_CODE) ) {
        			this.dsSearch.setColumn(0, "NO_DONG", null);
        			this.dsSearch.setColumn(0, "NO_HO", null);
        			this.dsSearch.setColumn(0, "CONT_DEG", null);
        		}
        	}
        	if(id == "ccfNO_DONG"){
        		var arr = codeFindData;
        		if(arr.length > 0 ){
        		trace(JSON.stringify(arr[0]));
        			this.dsSearch.setColumn(0, "NO_DONG", arr[0]["NO_DONG"]);
        			this.dsSearch.setColumn(0, "NO_HO", arr[0]["NO_HO"]);
        			this.dsSearch.setColumn(0, "CONT_DEG", arr[0]["CONT_DEG"]);

        		}else{
        			this.dsSearch.setColumn(0, "NO_DONG", null);
        			this.dsSearch.setColumn(0, "NO_HO", null);
        			this.dsSearch.setColumn(0, "CONT_DEG", null);
        		}
        	}

        	if( id =="ccfCD_SIL" ) {
        		var strVal = "";
        		if( !this.gfnIsNull(this.ccfCD_SIL.form.DSTextBox.text) ) strVal += this.ccfCD_SIL.form.DSTextBox.text;

        		this.divData.form.divDataMain.form.taxRM_NY.set_value(strVal);
        	}
        };
        /************************************************************************
         * 그리드 이벤트
         ************************************************************************/

        /************************************************************************
         * 확장버튼 이벤트
         ************************************************************************/

        /************************************************************************
         * 기타 이벤트
         ************************************************************************/
         /*
         *	조회 조건 변경시 초기화
         */
         this.dsSearch_onvaluechanged = function(obj,e)
        {

        	if(e.oldvalue != e.newvalue) {
        		this.gfnSetFormStatus(this);	// 폼상태 초기화
        		this.gfnGridClear(this.dxGrid);
        	}

        	if( e.columnid == "CD_ACNTUNIT" ){
        		this.ccfNO_DONG.form.fnCodeFindClear("");
        	}
        };


        /*
         *	항목 활성화 설정
         */
        this.fnEnable = function () {

        	if( this.dsList.getColumn(this.dsList.rowposition, this.ucFlag) == "#"){
        		bReadOnly = false;
        		this.gfnSetAllReadonly(this.divData.form.divDataMain.form, true );
        	} else if( !this.gfnIsNull(this.dsList.getColumn(this.dsList.rowposition,"CD_ACT")) ){
        		this.gfnSetAllReadonly(this.divData.form.divDataMain.form, true );
        		this.divData.form.divDataMain.form.taxRM_NY.set_readonly(true);
        	} else {
        		this.gfnSetAllReadonly(this.divData.form.divDataMain.form, false );
        		this.divData.form.divDataMain.form.taxRM_NY.set_readonly(false);
        	}

        	this.ccfCD_SIL.form.DSTextBox.set_readonly(true);
        };

        /*
         *	그리드 행 이동시 항목 활성화 설정
         */
        this.dsList_onrowposchanged = function(obj,e)
        {
        	trace("e.newrow = " + e.newrow);
        	if(e.oldrow > -1 && e.oldrow != e.newrow ){
        		this.fnEnable();
        	}
        };
        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.form_onload,this);
        };
        this.loadIncludeScript("DBS_JEOBSU_GONGA.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
