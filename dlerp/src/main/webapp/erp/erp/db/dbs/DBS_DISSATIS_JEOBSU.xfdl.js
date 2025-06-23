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
            this.set_titletext("불만족 접수");
            if (Form == this.constructor)
            {
                this._setFormPosition(1280,720);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("dsList", this);
            obj._setContents("");
            this.addChild(obj.name, obj);


            obj = new Dataset("_dsProc", this);
            obj._setContents("<ColumnInfo><Column id=\"TARGET\" type=\"STRING\" size=\"256\"/><Column id=\"SP\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"TARGET\">select</Col><Col id=\"SP\">DBSPR_DISSATIS_JEOBSU_SELECT</Col></Row><Row><Col id=\"TARGET\">update</Col><Col id=\"SP\">DBSPR_DISSATIS_JEOBSU_UPDATE</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsSearch", this);
            obj._setContents("<ColumnInfo><Column id=\"CD_SITE\" type=\"STRING\" size=\"256\"/><Column id=\"DT_FROM\" type=\"STRING\" size=\"256\"/><Column id=\"DT_TO\" type=\"STRING\" size=\"256\"/><Column id=\"DS_DONG\" type=\"STRING\" size=\"256\"/><Column id=\"DS_HO\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row/></Rows>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Div("divSearch","0.0","10.0",null,"46.0","0",null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_cssclass("div_SEARCH_Bg");
            this.addChild(obj.name, obj);

            obj = new Static("staCD_SITE","0.0","10.0","92.0","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("1");
            obj.set_text("단지코드");
            obj.set_cssclass("sta_WF_SchLabelE");
            this.divSearch.addChild(obj.name, obj);

            obj = new Div("ccfCD_SITE","staCD_SITE:0.0","10.0","300","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.getSetter("CDTextWidth").set("70");
            obj.set_taborder("0");
            obj.set_url("cmm::cmmCodeFind.xfdl");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("staDS_DONG","ccfCD_SITE:0.0","10.0","92.0","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("2");
            obj.set_text("동");
            obj.set_cssclass("sta_WF_SchLabel");
            this.divSearch.addChild(obj.name, obj);

            obj = new Div("ccfDS_DONG","staDS_DONG:0.0","10.0","93","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.getSetter("CDTextWidth").set("70");
            obj.set_taborder("3");
            obj.set_url("cmm::cmmCodeFind.xfdl");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("staDS_HO","ccfDS_DONG:0.0","10.0","92.0","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("4");
            obj.set_text("호");
            obj.set_cssclass("sta_WF_SchLabel");
            this.divSearch.addChild(obj.name, obj);

            obj = new Div("ccfDS_HO","staDS_HO:0.0","10.0","93","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.getSetter("CDTextWidth").set("70");
            obj.set_taborder("5");
            obj.set_url("cmm::cmmCodeFind.xfdl");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("staDT","ccfDS_HO:0.0","10.0","92.0","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("6");
            obj.set_text("접수일자");
            obj.set_cssclass("sta_WF_SchLabel");
            this.divSearch.addChild(obj.name, obj);

            obj = new Calendar("calDT_FROM","staDT:0.0","10.0","105","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("7");
            obj.set_dateformat("yyyy-MM-dd");
            obj.set_editformat("yyyyMMdd");
            obj.set_autoselect("true");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("sta00","calDT_FROM:0.0","10.0","30.0","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("8");
            obj.set_text("~");
            obj.set_cssclass("sta_WF_AC");
            this.divSearch.addChild(obj.name, obj);

            obj = new Calendar("calDT_TO","sta00:0.0","10.0","105","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("9");
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

            obj = new BindItem("item3","divSearch.form.calDT_FROM","value","dsSearch","DT_FROM");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item4","divSearch.form.calDT_TO","value","dsSearch","DT_TO");
            this.addChild(obj.name, obj);
            obj.bind();
            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {
            this._addPreloadList("fdl","cmm::cmmCodeFind.xfdl");
        };
        
        // User Script
        this.registerScript("DBS_DISSATIS_JEOBSU.xfdl", function() {
        this.objApp = this.gfnGetApplication();

        this.form_onload = function(obj,e)
        {
        	// -- 필수 -------------------//
        	this.gfnFormOnLoad(this);
        	this.gfnFormInfo(this);
        	// ---------------------------//
        	//this.fnSetButton();
        	//this.fnSetExtendButton();
        	this.fnSetVariable();
        	this.fnSetEvent();
        	this.fnSetParameter();

        	if( this.FormInfo.GR_SEARCH >= "7" || this.FormInfo.ID_GROUP == "6" || this.FormInfo.ID_GROUP == "C") {
        		this.ccfCD_SITE.form.CDTextBox.set_value(this.AuthClient.CD_DEPT);
        		this.ccfCD_SITE.form.DSTextBox.set_value(this.AuthClient.DS_DEPT);

        		//this.ccfCD_SITE.form.set_readonly(true);
        	}

        	if( !this.gfnIsNull(this.getOwnerFrame().ACC_CODE) ) {
        		this.isCall = true;
        		this.ccfCD_SITE.form.CDTextBox.set_value(this.gfnNvl(this.getOwnerFrame().ACC_CODE,""));
        		this.ccfCD_SITE.form.fnCodeFindLoad();
        		this.ccfDS_DONG.form.CDTextBox.set_value(this.gfnNvl(this.getOwnerFrame().DH_CD1,""));
        		this.ccfDS_HO.form.CDTextBox.set_value(this.gfnNvl(this.getOwnerFrame().DH_CD2,""));

        		this.ccfCD_SITE.form.set_readonly(true);
        		this.ccfDS_DONG.form.set_readonly(true);
        		this.ccfDS_HO.form.set_readonly(true);

        		this.FormBtns.Select.click();
        	}

        	this.dsSearch.addEventHandler("onvaluechanged", this.dsSearch_onvaluechanged, this);
        };

        /************************************************************************
         * 버튼 설정 : 화면(Tab) 전환시 마다 호출
         * 서브버튼 사용 및 공통버튼 강제 제어시 여기서 처리
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
        	this.ccfCD_SITE = this.divSearch.form.ccfCD_SITE;                        // 단지코드
        	this.calDT_FROM = this.divSearch.form.calDT_FROM;                        // 접수일자 FROM
        	this.calDT_TO = this.divSearch.form.calDT_TO;                            // 접수일자 TO
        	this.ccfDS_DONG = this.divSearch.form.ccfDS_DONG;                        // 동코드
        	this.ccfDS_HO = this.divSearch.form.ccfDS_HO;                            // 호코드
        	this.dxGrid = this.divData.form.objGrid;
        };

        /************************************************************************
         * 이벤트 설정
         ************************************************************************/
        this.fnSetEvent = function() {
        	this.ccfCD_SITE.CodeFindName = "DBX_CFMAINSITE";                         // 단지코드
        	this.ccfCD_SITE.BeforeUserDataSetParam = "fnBeforeUserDataSetParam";     // 단지코드 파라미터
        	this.ccfDS_DONG.CodeFindName = "DBX_CFASDONGHO";                         // 동코드
        	this.ccfDS_DONG.BeforeUserDataSetParam = "fnBeforeUserDataSetParam";     // 동코드 파라미터
        	this.ccfDS_DONG.AfterCDTextChanged = "fnAfterCDTextChanged";
        	this.ccfDS_HO.CodeFindName = "DBX_CFASDONGHO";                           // 호코드
        	this.ccfDS_HO.BeforeUserDataSetParam = "fnBeforeUserDataSetParam";       // 호코드 파라미터
        	this.ccfDS_HO.AfterCDTextChanged = "fnAfterCDTextChanged";

        	this.gfnGridInit(this.dxGrid, this.dsList, "DB", "DBS_DISSATIS_JEOBSU");
        	this.dxGrid.setCellProperty( "body", this.dxGrid.getBindCellIndex("body","RM_NY"), "tooltiptext", "bind:RM_NY" );
        	this.dxGrid.setCellProperty( "body", this.dxGrid.getBindCellIndex("body","RM_JOBEND"), "tooltiptext", "bind:RM_JOBEND" );

        	this.dxGrid.setCellProperty( "body", this.dxGrid.getBindCellIndex("body","RM_NY"), "wordWrap", "char" );
        	this.dxGrid.setCellProperty( "body", this.dxGrid.getBindCellIndex("body","RM_JOBEND"), "wordWrap", "char" );
        	this.dxGrid.setFormatRowProperty( 1,"size",this.dxGrid.getFormatRowProperty(0,"size")*2 );


        }

        /************************************************************************
         * 파라미터 설정
         ************************************************************************/
        this.fnSetParameter = function() {

        	this.dsSelect = new Dataset();
        	this.dsSelect.addColumn("CD_SITE", "string");            // 단지코드
        	this.dsSelect.addColumn("DT_FROM", "string");            // 접수일자 FROM
        	this.dsSelect.addColumn("DT_TO", "string");              // 접수일자 TO
        	this.dsSelect.addColumn("DS_DONG", "string");            // 동
        	this.dsSelect.addColumn("DS_HO", "string");              // 호

        	this.dsUpdate = new Dataset();
        	this.dsUpdate.addColumn("CD_SITE", "string");            // 단지코드
        	this.dsUpdate.addColumn("DT_JEOBSU", "string");          // 접수일자
        	this.dsUpdate.addColumn("CD_JOB", "string");             // 순번
        	this.dsUpdate.addColumn("DT_DISSATIS_JEOBSU", "string"); // 불만족접수일자
        	this.dsUpdate.addColumn("ID_USER", "string");            // 수정자ID
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
        	this.dsSelect.setColumn(0, "CD_SITE", this.dsSearch.getColumn(0,"CD_SITE"));          // 단지코드
        	this.dsSelect.setColumn(0, "DT_FROM", this.dsSearch.getColumn(0,"DT_FROM"));          // 접수일자 FROM
        	this.dsSelect.setColumn(0, "DT_TO", this.dsSearch.getColumn(0,"DT_TO"));              // 접수일자 TO
        	this.dsSelect.setColumn(0, "DS_DONG", this.dsSearch.getColumn(0,"DS_DONG"));          // 동
        	var strHo =  this.dsSearch.getColumn(0,"DS_HO");
        	if( this.ccfDS_HO.form.CDTextBox.value == "공용" ){
        		 strHo = "0000";
        	}
        	this.dsSelect.setColumn(0, "DS_HO", strHo);                                            // 호

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

        };

        /*
         *	저장 버튼
         */
        this.fnSave = function() {

        	this.dsUpdate.clearData();

        	for (var i = 0; i < this.dsList.rowcount; i++) {
        		var flag = this.gfnGetFlag(this.dsList, i);
        		switch(flag) {
        			case "U":
        				var nrow = this.dsUpdate.addRow();
        				this.dsUpdate.setColumn(nrow, "CD_SITE", this.dsList.getColumn(i,"CD_SITE"));
        				this.dsUpdate.setColumn(nrow, "DT_JEOBSU", this.dsList.getColumn(i, "DT_JEOBSU"));
        				this.dsUpdate.setColumn(nrow, "CD_JOB", this.dsList.getColumn(i, "CD_JOB"));
        				this.dsUpdate.setColumn(nrow, "DT_DISSATIS_JEOBSU", this.dsList.getColumn(i,"DT_DISSATIS_JEOBSU"));
        				this.dsUpdate.setColumn(nrow, "ID_USER", this.AuthClient.ID_USER);
        				break;
        		}
        	}
        	if (this.dsUpdate.rowcount == 0) return;

        	var strSvcId    = "update";
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
        	if (this.gfnIsNull(this.ccfCD_SITE.form.CDTextBox.text)) {
        		validate = false;
        		this.fnVaidateCallback = function() {
        			this.ccfCD_SITE.form.CDTextBox.setFocus();
        		}
        		this.gfnAlert("단지코드는 반드시 입력하셔야 합니다.", "fnVaidateCallback"); // gfnAlert = function (sMsgId, arrArg, sPopId, sCallback)
        	}

        	if ( validate && !this.gfnIsNull(this.calDT_FROM.value) && !this.gfnIsNull(this.calDT_TO.value) )  {
        		if (this.calDT_FROM.value > this.calDT_TO.value )  {
        			validate = false;
        			this.fnDtVaidateCallback = function() {
        				this.calDT_FROM.setFocus();
        			}
        			this.gfnAlert("접수일자 시작일이 접수 종료일보다 클 수 없습니다.", "fnDtVaidateCallback"); // gfnAlert = function (sMsgId, arrArg, sPopId, sCallback)
        		}
        	}

        	return validate;
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
        		this.gfnGridAfterSelect(this.dxGrid);
        	} else if (svcID == "update") {
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

        	if (id == "ccfCD_SITE") {
        		dsUserParam.setColumn(nrow, "CD_AUTHDEPT", "");
        		dsUserParam.setColumn(nrow, "CD_BUNSO", "");
        		if( this.FormInfo.ID_GROUP == "2" ){
        			dsUserParam.setColumn(nrow, "CD_BUNSO", this.AuthClient.CD_DEPT.substr(1));
        		}
        		dsUserParam.setColumn(nrow, "ID_GROUP", this.FormInfo.ID_GROUP);
        		dsUserParam.setColumn(nrow, "CD_DEPT", this.AuthClient.CD_DEPT);
        	} else if (id == "ccfDS_DONG") {
        		if (!this.fnSelectValidate()) return false;

        		dsUserParam.setColumn(nrow, "TY_TYPE", "DONG");
        		dsUserParam.setColumn(nrow, "CD_SITE", this.ccfCD_SITE.form.CDTextBox.value);
        		dsUserParam.setColumn(nrow, "VALUE1", "");
        		dsUserParam.setColumn(nrow, "VALUE2", "");
        	} else if (id == "ccfDS_HO") {
        		if (!this.fnSelectValidate()) return false;

        		dsUserParam.setColumn(nrow, "TY_TYPE", "HO");
        		dsUserParam.setColumn(nrow, "CD_SITE", this.ccfCD_SITE.form.CDTextBox.value);
        		dsUserParam.setColumn(nrow, "VALUE1", this.gfnNvl(this.ccfDS_DONG.form.CDTextBox.value,""));
        		dsUserParam.setColumn(nrow, "VALUE2", this.gfnNvl(this.ccfDS_HO.form.CDTextBox.value,""));
        	}

        	return true;
        }

        this.fnAfterCDTextChanged = function(id, codeFindData) {
        	var arr = codeFindData; //this.ccfCD_DEPT_ORG.form.SelectedData; 둘다 사용가능
        	if(id == "ccfCD_SITE") {

        		var strCdSite = "";
        		var strDsSite = "";
        		if (arr.length > 0) {
        			for(var r = 0; r < arr.length; r++) {
        				strCdSite += arr[r]["CD_SITE"]+",";
        				strDsSite += arr[r]["DS_SITE"]+",";
        			}

        			this.ccfCD_SITE.form.CDTextBox.set_value(strCdSite.substr(0,strCdSite.length-1));
        			this.ccfCD_SITE.form.DSTextBox.set_value(strDsSite.substr(0,strDsSite.length-1));
        		}
        	}

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
        	if(e.row > -1 && e.oldvalue != e.newvalue) {
        		this.gfnSetFormStatus(this);	// 폼상태 초기화
        		this.gfnGridClear(this.dxGrid);

        		if ( e.columnid == "CD_SITE" ){
        			this.calDT_FROM.set_value("");
        			this.calDT_TO.set_value("");
        			this.ccfDS_DONG.form.CDTextBox.set_value("");
        			this.ccfDS_HO.form.CDTextBox.set_value("");
        		}

        		if ( e.columnid == "DS_DONG" ){
        			this.ccfDS_HO.form.CDTextBox.set_value("");
        			this.ccfDS_HO.form.DSTextBox.set_value("");
        		}
        	}
        };

        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.form_onload,this);
            this.dsList.addEventHandler("onvaluechanged",this.dsList_onvaluechanged,this);
        };
        this.loadIncludeScript("DBS_DISSATIS_JEOBSU.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
