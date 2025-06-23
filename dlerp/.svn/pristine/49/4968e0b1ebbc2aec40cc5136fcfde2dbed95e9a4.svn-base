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
            this.set_titletext("AS 조회(콜센터)");
            if (Form == this.constructor)
            {
                this._setFormPosition(1280,720);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("dsList", this);
            obj._setContents("");
            this.addChild(obj.name, obj);


            obj = new Dataset("_dsProc", this);
            obj._setContents("<ColumnInfo><Column id=\"TARGET\" type=\"STRING\" size=\"256\"/><Column id=\"SP\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"TARGET\">select</Col><Col id=\"SP\">DBSPR_JEOBSU_CALL_SELECT</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsSearch", this);
            obj._setContents("<ColumnInfo><Column id=\"CD_SITE\" type=\"STRING\" size=\"256\"/><Column id=\"DS_DONG\" type=\"STRING\" size=\"256\"/><Column id=\"DS_HO\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row/></Rows>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Div("divSearch","0.0","10.0",null,"46.0","0",null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_cssclass("div_SEARCH_Bg");
            this.addChild(obj.name, obj);

            obj = new Static("staCD_SITE","0.0","10.0","92.0","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("3");
            obj.set_text("단지코드");
            obj.set_cssclass("sta_WF_SchLabelE");
            this.divSearch.addChild(obj.name, obj);

            obj = new Div("ccfCD_SITE","staCD_SITE:0.0","10.0","300","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.getSetter("CDTextWidth").set("70");
            obj.set_taborder("0");
            obj.set_url("cmm::cmmCodeFind.xfdl");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("staDS_DONG","ccfCD_SITE:0.0","10.0","92.0","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("4");
            obj.set_text("동");
            obj.set_cssclass("sta_WF_SchLabelE");
            this.divSearch.addChild(obj.name, obj);

            obj = new Div("ccfDS_DONG","staDS_DONG:0.0","10.0","93","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.getSetter("CDTextWidth").set("70");
            obj.set_taborder("1");
            obj.set_url("cmm::cmmCodeFind.xfdl");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("staDS_HO","ccfDS_DONG:0.0","10.0","92.0","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("5");
            obj.set_text("호");
            obj.set_cssclass("sta_WF_SchLabelE");
            this.divSearch.addChild(obj.name, obj);

            obj = new Div("ccfDS_HO","staDS_HO:0.0","10.0","93","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.getSetter("CDTextWidth").set("70");
            obj.set_taborder("2");
            obj.set_url("cmm::cmmCodeFind.xfdl");
            this.divSearch.addChild(obj.name, obj);

            obj = new Div("divData","0","40",null,null,"0","0",null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_cssclass("div_DATA_Bg");
            this.addChild(obj.name, obj);

            obj = new Div("divDataMain","0","0",null,"167","0",null,null,null,null,null,this.divData.form);
            obj.set_taborder("0");
            obj.set_text("");
            this.divData.addChild(obj.name, obj);

            obj = new Static("staTitle","0","0",null,"22","0",null,null,null,null,null,this.divData.form.divDataMain.form);
            obj.set_taborder("5");
            obj.set_text("접수내용");
            obj.set_cssclass("sta_TITLE_Bg");
            this.divData.form.divDataMain.addChild(obj.name, obj);

            obj = new Static("staItem01","0","30","89","30",null,null,null,null,null,null,this.divData.form.divDataMain.form);
            obj.set_taborder("0");
            obj.set_text("계약자명");
            obj.set_cssclass("sta_WF_tablelabel");
            this.divData.form.divDataMain.addChild(obj.name, obj);

            obj = new Static("staBar01","staItem01:-1","30","42.97%","30",null,null,null,null,null,null,this.divData.form.divDataMain.form);
            obj.set_taborder("6");
            obj.set_cssclass("sta_WF_tablebg");
            this.divData.form.divDataMain.addChild(obj.name, obj);

            obj = new Static("staItem02","staBar01:-1","30","110","30",null,null,null,null,null,null,this.divData.form.divDataMain.form);
            obj.set_taborder("1");
            obj.set_text("임대차기간");
            obj.set_cssclass("sta_WF_tablelabel");
            this.divData.form.divDataMain.addChild(obj.name, obj);

            obj = new Static("staBar02","staItem02:-1","30",null,"30","0",null,null,null,null,null,this.divData.form.divDataMain.form);
            obj.set_taborder("7");
            obj.set_cssclass("sta_WF_tablebg");
            this.divData.form.divDataMain.addChild(obj.name, obj);

            obj = new Static("staItem03","0","staItem01:-1","89","30",null,null,null,null,null,null,this.divData.form.divDataMain.form);
            obj.set_taborder("2");
            obj.set_text("평형");
            obj.set_cssclass("sta_WF_tablelabel");
            this.divData.form.divDataMain.addChild(obj.name, obj);

            obj = new Static("staBar03","staItem03:-1","staBar01:-1","42.97%","30",null,null,null,null,null,null,this.divData.form.divDataMain.form);
            obj.set_taborder("8");
            obj.set_cssclass("sta_WF_tablebg");
            this.divData.form.divDataMain.addChild(obj.name, obj);

            obj = new Static("staItem04","staBar03:-1","staItem02:-1","110","30",null,null,null,null,null,null,this.divData.form.divDataMain.form);
            obj.set_taborder("3");
            obj.set_text("AS위치");
            obj.set_cssclass("sta_WF_tablelabel");
            this.divData.form.divDataMain.addChild(obj.name, obj);

            obj = new Static("staBar04","staItem04:-1","staItem04:-30",null,"30","0",null,null,null,null,null,this.divData.form.divDataMain.form);
            obj.set_taborder("9");
            obj.set_cssclass("sta_WF_tablebg");
            this.divData.form.divDataMain.addChild(obj.name, obj);

            obj = new Static("staItem05","0","staItem03:-1","89","30",null,null,null,null,null,null,this.divData.form.divDataMain.form);
            obj.set_taborder("4");
            obj.set_text("신청자");
            obj.set_cssclass("sta_WF_tablelabel");
            this.divData.form.divDataMain.addChild(obj.name, obj);

            obj = new Static("staBar05","staItem05:-1","staBar03:-1","42.97%","30",null,null,null,null,null,null,this.divData.form.divDataMain.form);
            obj.set_taborder("10");
            obj.set_cssclass("sta_WF_tablebg");
            this.divData.form.divDataMain.addChild(obj.name, obj);

            obj = new Static("staItem06","staBar05:-1","staItem04:-1","110","30",null,null,null,null,null,null,this.divData.form.divDataMain.form);
            obj.set_taborder("11");
            obj.set_text("신청자 휴대전화");
            obj.set_cssclass("sta_WF_tablelabel");
            this.divData.form.divDataMain.addChild(obj.name, obj);

            obj = new Static("staBar06","staItem06:-1","staBar04:-1",null,"30","0",null,null,null,null,null,this.divData.form.divDataMain.form);
            obj.set_taborder("12");
            obj.set_cssclass("sta_WF_tablebg");
            this.divData.form.divDataMain.addChild(obj.name, obj);

            obj = new Static("staItem07","0","117","89","50",null,null,null,null,null,null,this.divData.form.divDataMain.form);
            obj.set_taborder("13");
            obj.set_text("하자내용");
            obj.set_cssclass("sta_WF_tablelabel");
            this.divData.form.divDataMain.addChild(obj.name, obj);

            obj = new Static("staBar07","staItem07:-1","117",null,"50","0",null,null,null,null,null,this.divData.form.divDataMain.form);
            obj.set_taborder("14");
            obj.set_cssclass("sta_WF_tablebg");
            this.divData.form.divDataMain.addChild(obj.name, obj);

            obj = new Edit("edtDS_CONTRACTOR","staItem01:5","35","178","20",null,null,null,null,null,null,this.divData.form.divDataMain.form);
            obj.set_taborder("15");
            obj.set_maxlength("50");
            obj.set_readonly("true");
            this.divData.form.divDataMain.addChild(obj.name, obj);

            obj = new Edit("edtNO_SIZE","staItem03:5","64","178","20",null,null,null,null,null,null,this.divData.form.divDataMain.form);
            obj.set_taborder("16");
            obj.set_maxlength("50");
            obj.set_readonly("true");
            this.divData.form.divDataMain.addChild(obj.name, obj);

            obj = new Div("ccfCD_SIL","staItem04:5","64","346","20",null,null,null,null,null,null,this.divData.form.divDataMain.form);
            obj.getSetter("CDTextWidth").set("70");
            obj.set_taborder("17");
            obj.set_url("cmm::cmmCodeFind.xfdl");
            this.divData.form.divDataMain.addChild(obj.name, obj);

            obj = new Edit("edtNO_SCTEL","staItem06:5","93","178","20",null,null,null,null,null,null,this.divData.form.divDataMain.form);
            obj.set_taborder("18");
            obj.set_inputtype("number");
            obj.set_maxlength("50");
            obj.set_readonly("true");
            this.divData.form.divDataMain.addChild(obj.name, obj);

            obj = new Edit("edtPN_SC","staItem05:5","93","178","20",null,null,null,null,null,null,this.divData.form.divDataMain.form);
            obj.set_taborder("19");
            obj.set_maxlength("50");
            obj.set_readonly("true");
            this.divData.form.divDataMain.addChild(obj.name, obj);

            obj = new TextArea("taxRM_NY","staItem07:5","122",null,"38","5",null,null,null,null,null,this.divData.form.divDataMain.form);
            obj.set_taborder("20");
            obj.set_autoselect("false");
            obj.set_enableevent("true");
            obj.set_accessibilitydesclevel("all");
            obj.set_maxlength("500");
            obj.set_wordWrap("char");
            obj.set_readonly("true");
            this.divData.form.divDataMain.addChild(obj.name, obj);

            obj = new Calendar("tclDT_LEASE_FR","staItem02:5","35","105","20",null,null,null,null,null,null,this.divData.form.divDataMain.form);
            obj.set_taborder("21");
            obj.set_dateformat("yyyy-MM-dd");
            obj.set_editformat("yyyyMMdd");
            obj.set_autoselect("true");
            obj.set_value("");
            obj.set_readonly("true");
            this.divData.form.divDataMain.addChild(obj.name, obj);

            obj = new Static("sta_range0","tclDT_LEASE_FR:5","35","10","20",null,null,null,null,null,null,this.divData.form.divDataMain.form);
            obj.set_taborder("22");
            obj.set_text("~");
            this.divData.form.divDataMain.addChild(obj.name, obj);

            obj = new Calendar("tclDT_LEASE_TO","sta_range0:5","35","105","20",null,null,null,null,null,null,this.divData.form.divDataMain.form);
            obj.set_taborder("23");
            obj.set_dateformat("yyyy-MM-dd");
            obj.set_editformat("yyyyMMdd");
            obj.set_autoselect("true");
            obj.set_value("");
            obj.set_readonly("true");
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
            obj = new BindItem("item0","divSearch.form.ccfCD_SITE.form.CDTextBox","value","dsSearch","CD_SITE");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item1","divSearch.form.ccfDS_DONG.form.CDTextBox","value","dsSearch","DS_DONG");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item2","divSearch.form.ccfDS_HO.form.CDTextBox","value","dsSearch","DS_HO");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item3","divData.form.divDataMain.form.edtDS_CONTRACTOR","value","dsList","DS_CONTRACTOR");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item4","divData.form.divDataMain.form.edtNO_SIZE","value","dsList","NO_SIZE");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item5","divData.form.divDataMain.form.ccfCD_SIL.form.CDTextBox","value","dsList","CD_SIL");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item6","divData.form.divDataMain.form.ccfCD_SIL.form.DSTextBox","value","dsList","DS_SIL");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item7","divData.form.divDataMain.form.edtNO_SCTEL","value","dsList","NO_SCTEL");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item8","divData.form.divDataMain.form.edtPN_SC","value","dsList","PN_SC");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item9","divData.form.divDataMain.form.taxRM_NY","value","dsList","RM_NY");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item10","divData.form.divDataMain.form.tclDT_LEASE_FR","value","dsList","DT_LEASE_FR");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item11","divData.form.divDataMain.form.tclDT_LEASE_TO","value","dsList","DT_LEASE_TO");
            this.addChild(obj.name, obj);
            obj.bind();
            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {
            this._addPreloadList("fdl","cmm::cmmCodeFind.xfdl");
        };
        
        // User Script
        this.registerScript("DBS_JEOBSU_CALL.xfdl", function() {
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

        	if( !this.gfnIsNull(this.getOwnerFrame().ACC_CODE) ) {
        		this.ccfCD_SITE.form.CDTextBox.set_value(this.gfnNvl(this.getOwnerFrame().ACC_CODE,""));
        		this.ccfCD_SITE.form.fnCodeFindLoad();
        		this.ccfDS_DONG.form.CDTextBox.set_value(this.gfnNvl(this.getOwnerFrame().DH_CD1,""));
        		this.ccfDS_HO.form.CDTextBox.set_value(this.gfnNvl(this.getOwnerFrame().DH_CD2,""));

        		this.ccfCD_SITE.form.set_readonly(true);
        		this.ccfDS_DONG.form.set_readonly(true);
        		this.ccfDS_HO.form.set_readonly(true);

        		this.FormBtns.Select.click();
        	}
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
        	this.ccfCD_SITE = this.divSearch.form.ccfCD_SITE;  // 단지코드
        	this.ccfDS_DONG = this.divSearch.form.ccfDS_DONG;  // 동코드
        	this.ccfDS_HO = this.divSearch.form.ccfDS_HO;      // 호코드

        	this.ccfCD_SIL = this.divData.form.divDataMain.form.ccfCD_SIL; // 위치
        	this.ccfCD_SIL.form.set_readonly(true);

        	this.dxGrid = this.divData.form.divDataSub.form.objGrid;
        };

        /************************************************************************
         * 이벤트 설정
         ************************************************************************/
        this.fnSetEvent = function() {
        	this.ccfCD_SITE.CodeFindName = "DBX_CFMAINSITE";
        	this.ccfCD_SITE.BeforeUserDataSetParam = "fnBeforeUserDataSetParam";
        	this.ccfDS_DONG.CodeFindName = "DBX_CFASDONGHO";                         // 동코드
        	this.ccfDS_DONG.BeforeUserDataSetParam = "fnBeforeUserDataSetParam";     // 동코드 파라미터
        	this.ccfDS_DONG.AfterCDTextChanged = "fnAfterCDTextChanged";
        	this.ccfDS_HO.CodeFindName = "DBX_CFASDONGHO";                           // 호코드
        	this.ccfDS_HO.BeforeUserDataSetParam = "fnBeforeUserDataSetParam";       // 호코드 파라미터
        	this.ccfDS_HO.AfterCDTextChanged = "fnAfterCDTextChanged";

        	this.ccfCD_SIL.CodeFindName = "CF_CODE_DB_S3";                            // 위치
        	this.ccfCD_SIL.AfterCDTextChanged = "fnAfterCDTextChanged";

        	this.gfnGridInit(this.dxGrid, this.dsList, "DB", "DBS_JEOBSU_CALL");
        	this.dxGrid.set_autosizingtype("row");
        	this.dxGrid.setCellProperty( "body", this.dxGrid.getBindCellIndex("body","RM_NY"), "tooltiptext", "bind:RM_NY" );
        	this.dxGrid.setCellProperty( "body", this.dxGrid.getBindCellIndex("body","RM_NY"), "wordWrap", "char" );
        	this.dxGrid.setFormatRowProperty( 1,"size",this.dxGrid.getFormatRowProperty(0,"size")*2 );

        	this.dxGrid.set_selecttype("cell");	// IE경우만 multiarea모드에서 master선택후 마우스 이동 빠르게 할 경우 버그가 있어서 cell 모드로 변경

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
        }

        /************************************************************************
         * 컨트롤 이벤트
         ************************************************************************/
         /*
          *	조회 버튼
          */
        this.fnSelect = function() {
        	if (!this.fnSelectValidate("ALL")) return false;

        	this.gfnGridBeforeSelect(this.dxGrid);

        	this.dsList.clearData();

        	this.dsSelect.clearData();
        	this.dsSelect.addRow();
        	this.dsSelect.setColumn(0, "CD_SITE", this.dsSearch.getColumn(0,"CD_SITE"));
        	this.dsSelect.setColumn(0, "DS_DONG", this.dsSearch.getColumn(0,"DS_DONG"));
        	var strHo = this.dsSearch.getColumn(0,"DS_HO");
        	if( strHo == "공용" ){
        		 strHo = "0000";
        	}
        	this.dsSelect.setColumn(0, "DS_HO", strHo);

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
        };

        /*
         *	입력 버튼
         */
        this.fnAdd = function() {
        };

        /*
         *	삭제 버튼
         */
        this.fnDel = function() {
        };

        /*
         *	엑셀 버튼
         */
        this.fnExcel = function() {
        	this.gfnExcelExport(this.dxGridSub);
        };

        /*
         *	출력 버튼
         */
        this.fnPrint = function() {
        };

        /************************************************************************
         * Validate
         ************************************************************************/
        /*
         *	조회 Validate
         */
        this.fnSelectValidate = function(strType) {
        	var validate = true;
        	if (this.gfnIsNull(this.ccfCD_SITE.form.CDTextBox.value)) {
        		validate = false;
        		this.fnCdSiteVaidateCallback = function() {
        			this.ccfCD_SITE.form.CDTextBox.setFocus();
        			return false;
        		}
        		this.gfnAlert("단지코드를 입력하셔야 합니다.", "fnCdSiteVaidateCallback"); // gfnAlert = function (sMsgId, arrArg, sPopId, sCallback)
        	}
        	if ( validate && strType == "ALL" || strType == "HO"){
        		if (this.gfnIsNull(this.ccfDS_DONG.form.CDTextBox.value)) {
        			validate = false;
        			this.fnDongVaidateCallback = function() {
        				this.ccfDS_DONG.form.CDTextBox.setFocus();
        				return false;
        			}
        			this.gfnAlert("동을 입력하셔야 합니다.", "fnDongVaidateCallback"); // gfnAlert = function (sMsgId, arrArg, sPopId, sCallback)
        		}
        	}
        	if ( validate && strType == "ALL"){
        		if (this.gfnIsNull(this.ccfDS_HO.form.CDTextBox.value)) {
        			validate = false;
        			this.fnHoVaidateCallback = function() {
        				this.ccfDS_HO.form.CDTextBox.setFocus();
        				return false;
        			}
        			this.gfnAlert("호를 입력하셔야 합니다.", "fnHoVaidateCallback"); // gfnAlert = function (sMsgId, arrArg, sPopId, sCallback)
        		}
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
        		if( this.dsList.rowcount > 0){
        			this.gfnGridAfterSelect(this.dxGrid);
        		}

        	}
        };

        /************************************************************************
         * 코드파인드 이벤트
         ************************************************************************/
         this.fnBeforeUserDataSetParam = function(id, dsUserParam, nrow) {

        	if (id == "ccfCD_SITE") {
        		dsUserParam.setColumn(nrow, "CD_AUTHDEPT", "");
        		dsUserParam.setColumn(nrow, "CD_BUNSO", "");

        		if( this.FormInfo.ID_GROUP == "2" ){
        			dsUserParam.setColumn(nrow, "CD_BUNSO", this.AuthClient.CD_DEPT.substr(1));
        		}
        		dsUserParam.setColumn(nrow, "ID_GROUP", this.FormInfo.ID_GROUP);
        		dsUserParam.setColumn(nrow, "CD_DEPT", this.AuthClient.CD_DEPT);
        	} else if (id == "ccfDS_DONG") {
        		if (!this.fnSelectValidate("DONG")) return false;

        		dsUserParam.setColumn(nrow, "TY_TYPE", "DONG");
        		dsUserParam.setColumn(nrow, "CD_SITE", this.ccfCD_SITE.form.CDTextBox.value);
        		dsUserParam.setColumn(nrow, "VALUE1", "");
        		dsUserParam.setColumn(nrow, "VALUE2", "");
        	} else if (id == "ccfDS_HO") {
        		if (!this.fnSelectValidate("HO")) return false;

        		dsUserParam.setColumn(nrow, "TY_TYPE", "HO");
        		dsUserParam.setColumn(nrow, "CD_SITE", this.ccfCD_SITE.form.CDTextBox.value);
        		dsUserParam.setColumn(nrow, "VALUE1", this.gfnNvl(this.ccfDS_DONG.form.CDTextBox.value,""));
        		dsUserParam.setColumn(nrow, "VALUE2", this.gfnNvl(this.ccfDS_HO.form.CDTextBox.value,""));
        	}

        	return true;
        }

        this.fnAfterCDTextChanged = function(id, codeFindData) {
        	var arr = codeFindData; //this.ccfCD_DEPT_ORG.form.SelectedData; 둘다 사용가능

        	if(id == "ccfDS_DONG") {

        		var strCdDong = "";
        		var strDsDong = "";
        		if (arr.length > 0) {
        			for(var r = 0; r < arr.length; r++) {

        				strCdDong += arr[r]["DS_DONG"]+",";
        				strDsDong += arr[r]["DS_BIGO"]+",";
        			}
        			this.ccfDS_DONG.form.CDTextBox.set_value(strCdDong.substr(0,strCdDong.length-1));
        			this.ccfDS_DONG.form.DSTextBox.set_value(strDsDong.substr(0,strDsDong.length-1));
        		}
        	}

        	if(id == "ccfDS_HO") {
        		var strCdDong = "";
        		var strDsDong = "";
        		if (arr.length > 0) {
        			for(var r = 0; r < arr.length; r++) {

        				strCdDong += arr[r]["DS_DONG"]+",";
        				strDsDong += arr[r]["DS_BIGO"]+",";
        			}
        			this.ccfDS_HO.form.CDTextBox.set_value(strCdDong.substr(0,strCdDong.length-1));
        			this.ccfDS_HO.form.DSTextBox.set_value(strDsDong.substr(0,strDsDong.length-1));
        		}
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

        	if( e.columnid == "CD_SITE" ){
        		this.ccfDS_DONG.form.CDTextBox.set_value("");
        		this.ccfDS_HO.form.CDTextBox.set_value("");
        	}
        	if( e.columnid == "DS_DONG" ){
        		this.ccfDS_HO.form.CDTextBox.set_value("");
        		if( e.newvalue == "공용" || e.newvalue == "상가" ){
        			this.ccfCD_SIL.CodeFindName = "CF_CODE_DB_C2";
        		} else {
        			this.ccfCD_SIL.CodeFindName = "CF_CODE_DB_S3";
        		}
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
        		//this.fnEnable();
        	}
        };
        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.form_onload,this);
        };
        this.loadIncludeScript("DBS_JEOBSU_CALL.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
