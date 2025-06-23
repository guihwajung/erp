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
            this.set_titletext("평가진행현황");
            if (Form == this.constructor)
            {
                this._setFormPosition(1280,720);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("_dsProc", this);
            obj._setContents("<ColumnInfo><Column id=\"TARGET\" type=\"STRING\" size=\"256\"/><Column id=\"SP\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"TARGET\">select_mtsd_clge</Col><Col id=\"SP\">DAJPR_RTNG_RSLT_MTSD_CLGE_SELECT</Col></Row><Row><Col id=\"TARGET\">select_ldsh</Col><Col id=\"SP\">DAJPR_RTNG_RSLT_LDSH_SELECT</Col></Row><Row><Col id=\"TARGET\">select_column</Col><Col id=\"SP\">DAJPR_RTNG_RSLT_COLUMN_SELECT</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsSearch", this);
            obj._setContents("<ColumnInfo><Column id=\"CD_CORP\" type=\"STRING\" size=\"256\"/><Column id=\"DS_CORP\" type=\"STRING\" size=\"256\"/><Column id=\"YR_RTNG\" type=\"STRING\" size=\"256\"/><Column id=\"ID_RTNG\" type=\"STRING\" size=\"256\"/><Column id=\"DS_RTNG\" type=\"STRING\" size=\"256\"/><Column id=\"CD_RTNG_TYPE\" type=\"STRING\" size=\"256\"/><Column id=\"DS_RTNG_TYPE\" type=\"STRING\" size=\"256\"/><Column id=\"DT_RTNG_BEGN\" type=\"STRING\" size=\"256\"/><Column id=\"DT_RTNG_END\" type=\"STRING\" size=\"256\"/><Column id=\"DT_RTNG_STD\" type=\"STRING\" size=\"256\"/><Column id=\"CD_RTNG_ASBLNEXT\" type=\"STRING\" size=\"256\"/><Column id=\"DS_RTNG_ASBLNEXT\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"CD_CORP\"/></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsList", this);
            obj._setContents("");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsListColumn", this);
            obj._setContents("");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Div("divSearch","0","0",null,"46.0","0",null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_cssclass("div_SEARCH_Bg");
            obj.set_text("");
            this.addChild(obj.name, obj);

            obj = new Static("staCD_CORP","0","10.0","66","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("2");
            obj.set_text("법인");
            obj.set_cssclass("sta_WF_SchLabelE");
            this.divSearch.addChild(obj.name, obj);

            obj = new Div("ccfCD_CORP","staCD_CORP:0.0","10.0","250","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.getSetter("CDTextWidth").set("50");
            obj.set_taborder("3");
            obj.set_url("cmm::cmmCodeFind.xfdl");
            obj.set_text("");
            obj.getSetter("CodeFindName").set("DAX_CFCORP_CODEFIND");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("staYR_RTNG","ccfCD_CORP:0.0","10.0","66","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("0");
            obj.set_text("년도");
            obj.set_cssclass("sta_WF_SchLabelE");
            this.divSearch.addChild(obj.name, obj);

            obj = new Div("ccfYR_RTNG","staYR_RTNG:0.0","10.0","60","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.getSetter("CDTextWidth").set("70");
            obj.set_taborder("4");
            obj.set_url("cmm::cmmCalYY.xfdl");
            obj.set_text("");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("staID_RTNG","ccfYR_RTNG:0.0","10.0","92","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("1");
            obj.set_text("평가회차");
            obj.set_rtl("false");
            obj.set_cssclass("sta_WF_SchLabelE");
            this.divSearch.addChild(obj.name, obj);

            obj = new Div("ccfID_RTNG","staID_RTNG:0.0","10.0","350","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.getSetter("CDTextWidth").set("100");
            obj.set_taborder("3");
            obj.set_url("cmm::cmmCodeFind.xfdl");
            obj.set_text("");
            obj.getSetter("CodeFindName").set("DAX_CFRTNG_STD");
            this.divSearch.addChild(obj.name, obj);

            obj = new Div("divData","0","divSearch:10",null,null,"0","0",null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_cssclass("div_DATA_Bg");
            this.addChild(obj.name, obj);

            obj = new Grid("objGrid","0","0",null,null,"0","0",null,null,null,null,this.divData.form);
            obj.set_taborder("0");
            obj.set_autosizingtype("row");
            obj.set_readonly("true");
            obj._setContents("");
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

            obj = new BindItem("item2","divSearch.form.ccfYR_RTNG.form.TextBox","value","dsSearch","YR_RTNG");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item3","divSearch.form.ccfID_RTNG.form.CDTextBox","value","dsSearch","ID_RTNG");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item4","divSearch.form.ccfID_RTNG.form.DSTextBox","value","dsSearch","DS_RTNG");
            this.addChild(obj.name, obj);
            obj.bind();
            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {
            this._addPreloadList("fdl","cmm::cmmCodeFind.xfdl");
            this._addPreloadList("fdl","cmm::cmmCalYY.xfdl");
        };
        
        // User Script
        this.registerScript("DAJ_RTNG_RSLT.xfdl", function() {
        this.objApp = this.gfnGetApplication();

        this.form_onload = function(obj,e) {
        	// -- 필수 -------------------//
        	this.gfnFormOnLoad(this);
        	this.gfnFormInfo(this);
        	// ---------------------------//

        	this.fnSetButton();
        	this.fnSetExtendButton();
        	this.fnSetVariable();
        	this.fnSetEvent();
        	this.fnSetParameter();
        	this.fnSetCombo();
        	this.fnInit();
        }

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

        }

        /************************************************************************
         * 변수 선언
         ************************************************************************/
        this.fnSetVariable = function() {
        	// 그리드영역
        	this.dxGrid = this.divData.form.objGrid;

        	// 검색영역
        	this.ccfCD_CORP = this.divSearch.form.ccfCD_CORP;
        	this.ccfYR_RTNG = this.divSearch.form.ccfYR_RTNG;
        	this.ccfID_RTNG = this.divSearch.form.ccfID_RTNG;
        };

        /************************************************************************
         * 이벤트 설정
         ************************************************************************/
        this.fnSetEvent = function() {
        	// 그리드 초기화
        	this.gfnGridInit(this.dxGrid, this.dsList, "DA", "DAJ_RTNG_RSLT");
        	this.dxGrid.BeforeUserDataSetParam = "fnGridBeforeUserDataSetParam";
        	this.dxGrid.AfterCDTextChanged     = "fnGridAfterCDTextChanged";
        	this.dxGrid.set_selecttype("row");

        	// 검색영역
        	this.ccfCD_CORP.BeforeUserDataSetParam = "fnBeforeUserDataSetParam";	// 법인
        	this.ccfCD_CORP.AfterCDTextChanged     = "fnAfterCDTextChanged";
        	this.ccfID_RTNG.BeforeUserDataSetParam = "fnBeforeUserDataSetParam";	// 평가기준
        	this.ccfID_RTNG.AfterCDTextChanged     = "fnAfterCDTextChanged";
        }

        /************************************************************************
         * 파라미터 설정
         ************************************************************************/
        this.fnSetParameter = function() {
        	// 동적 컬럼 조회
        	this.dsSelectColumn = new Dataset();
        	this.dsSelectColumn.addColumn("CD_CORP", "string");
        	this.dsSelectColumn.addColumn("ID_RTNG", "string");

        	// 조회
        	this.dsSelect = new Dataset();
        	this.dsSelect.addColumn("CD_CORP", "string");
        	this.dsSelect.addColumn("ID_RTNG", "string");
        }

        /************************************************************************
         * 콤보 데이터 조회 및 설정
         ************************************************************************/
        this.fnSetCombo = function() {

        }

        /************************************************************************
         * 화면 및 검색영역 초기화
         ************************************************************************/
        this.fnInit = function() {
        	// 법인
        	this.dsSearch.setColumn(0, "CD_CORP", this.AuthClient.CD_CORP);
        	this.dsSearch.setColumn(0, "DS_CORP", this.AuthClient.DS_CORP);

        	var today = this.gfnGetDate();
        	this.dsSearch.setColumn(0, "YR_RTNG", today.substr(0, 4));
        }

        /************************************************************************
         * 버튼 이벤트
         ************************************************************************/
         /*
          *	조회 버튼
          */
        this.fnSelect = function() {
        	if (!this.gfnSearchValidate(this.divSearch, this.dsSearch)) return false;

        	this.gfnGridBeforeSelect(this.dxGrid);

        	this.dsSelectColumn.clearData();
        	this.dsSelectColumn.addRow();
        	this.dsSelectColumn.setColumn(0, "CD_CORP", this.dsSearch.getColumn(0, "CD_CORP"));
        	this.dsSelectColumn.setColumn(0, "ID_RTNG", this.dsSearch.getColumn(0, "ID_RTNG"));

        	var strSvcId    = "select_column";
        	var strSvcType  = "grid";
        	var inProc		= "_dsProc";
        	var inData      = "select_column=dsSelectColumn";
        	var outData     = "dsListColumn=select_column0";
        	var strArg      = "";
        	var callBackFnc = "fnCallback";

        	this.gfnTransaction(strSvcId,		// transaction을 구분하기 위한 svc id값
        						strSvcType, 	// transaction을 요청할 구분
        						inProc,			// Procedure 정보 Dataset 이름
        						inData, 		// 입력값으로 보낼 dataset id, a=b형태로 실제이름과 입력이름을 매칭
        						outData, 		// 처리결과값으로 받을 dataset id, a=b형태로 실제이름과 입력이름을 매칭
        						strArg, 		// 입력갑스로 보낼 arguments, strFormData="20120607"
        						callBackFnc);	// 통신방법 정의 [생략가능]
        }

        this.fnSelectMtsdClge = function() {
        	if (!this.gfnSearchValidate(this.divSearch, this.dsSearch)) return false;

        	this.gfnGridBeforeSelect(this.dxGrid);

        	this.dsSelect.clearData();
        	this.dsSelect.addRow();
        	this.dsSelect.setColumn(0, "CD_CORP", this.dsSearch.getColumn(0, "CD_CORP"));
        	this.dsSelect.setColumn(0, "ID_RTNG", this.dsSearch.getColumn(0, "ID_RTNG"));

        	var strSvcId    = "select_mtsd_clge";
        	var strSvcType  = "grid";
        	var inProc		= "_dsProc";
        	var inData      = "select_mtsd_clge=dsSelect";
        	var outData     = "dsList=select_mtsd_clge0";
        	var strArg      = "";
        	var callBackFnc = "fnCallback";

        	this.gfnTransaction(strSvcId,		// transaction을 구분하기 위한 svc id값
        						strSvcType, 	// transaction을 요청할 구분
        						inProc,			// Procedure 정보 Dataset 이름
        						inData, 		// 입력값으로 보낼 dataset id, a=b형태로 실제이름과 입력이름을 매칭
        						outData, 		// 처리결과값으로 받을 dataset id, a=b형태로 실제이름과 입력이름을 매칭
        						strArg, 		// 입력갑스로 보낼 arguments, strFormData="20120607"
        						callBackFnc);	// 통신방법 정의 [생략가능]
        }

        this.fnSelectLdsh = function() {
        	if (!this.gfnSearchValidate(this.divSearch, this.dsSearch)) return false;

        	this.gfnGridBeforeSelect(this.dxGrid);

        	this.dsSelect.clearData();
        	this.dsSelect.addRow();
        	this.dsSelect.setColumn(0, "CD_CORP", this.dsSearch.getColumn(0, "CD_CORP"));
        	this.dsSelect.setColumn(0, "ID_RTNG", this.dsSearch.getColumn(0, "ID_RTNG"));

        	var strSvcId    = "select_ldsh";
        	var strSvcType  = "grid";
        	var inProc		= "_dsProc";
        	var inData      = "select_ldsh=dsSelect";
        	var outData     = "dsList=select_ldsh0";
        	var strArg      = "";
        	var callBackFnc = "fnCallback";

        	this.gfnTransaction(strSvcId,		// transaction을 구분하기 위한 svc id값
        						strSvcType, 	// transaction을 요청할 구분
        						inProc,			// Procedure 정보 Dataset 이름
        						inData, 		// 입력값으로 보낼 dataset id, a=b형태로 실제이름과 입력이름을 매칭
        						outData, 		// 처리결과값으로 받을 dataset id, a=b형태로 실제이름과 입력이름을 매칭
        						strArg, 		// 입력갑스로 보낼 arguments, strFormData="20120607"
        						callBackFnc);	// 통신방법 정의 [생략가능]
        }

        /*
         * 입력 버튼
         */
        this.fnAdd = function() {

        }

        /*
         * 삭제 버튼
         */
        this.fnDel = function() {

        }

        /*
         * 저장 버튼
         */
        this.fnSave = function() {

        }

        /*
         * 엑셀 버튼
         */
        this.fnExcel = function() {
        	//this.gfnExcelExport(this.dxGrid);
        	this.gfnExcelExport(this.dxGrid, "", this.dsSearch.getColumn(0, "DS_RTNG")+" 결과_"+this.gfnGetDate());
        }

        /*
         * 출력 버튼
         */
        this.fnPrint = function() {

        }

        /************************************************************************
         * Validate
         ************************************************************************/
        this.fnSelectValidate = function() {
        	return true;
        }

        /************************************************************************
         * 확장버튼 이벤트
         ************************************************************************/

        /************************************************************************
         * 콜백 이벤트
         ************************************************************************/
        /*
         * 기본 콜백
         */
        this.fnCallback = function(svcID, errorCode, errorMsg, strArg) {
        	if (errorCode != 0) {
        		this.gfnAlert(errorMsg);
        		return;
        	}

        	if (svcID == "select_column") {
        		for (var i = 0; i < 40; i++) {
        			this.dxGrid.setFormatColProperty(this.dxGrid.getBindCellIndex("body", "ITEM_" + (i + 1)), "size", 0);
        		}

        		for (var i = 0; i < this.dsListColumn.rowcount; i++) {
        			var text = this.dsListColumn.getColumn(i, "DS_ITEM");
        			this.dxGrid.setCellProperty("head", 66 + i, "text", this.dsListColumn.getColumn(i, "DS_ITEM"));	// 65
        			this.dxGrid.setFormatColProperty(this.dxGrid.getBindCellIndex("body", "ITEM_" + this.dsListColumn.getColumn(i, "SEQ_ITEM")), "size", text.length * 13);
        		}

        		// 다면동료평가
        		if (this.dsSearch.getColumn(0, "CD_RTNG_TYPE") == "JA01") {
        			this.fnSelectMtsdClge();
        		}

        		// 리더십평가
        		if (this.dsSearch.getColumn(0, "CD_RTNG_TYPE") == "JA02") {
        			this.fnSelectLdsh();
        		}
        	} else if (svcID == "select_mtsd_clge" || svcID == "select_ldsh") {
        		this.gfnGridAfterSelect(this.dxGrid);

        		this.dsList.set_enableevent(false);
        		var ID_SABUN_BGVDs = new Array();
        		for (var i = 1; i < this.dsList.rowcount; i++) {
        			if (!ID_SABUN_BGVDs.includes(this.dsList.getColumn(i, "ID_SABUN_BGVD"))) {
        				ID_SABUN_BGVDs.push(this.dsList.getColumn(i, "ID_SABUN_BGVD"));
        			}
        		}

        		for (var i = 0; i < ID_SABUN_BGVDs.length; i++) {
        			this.dsList.filter("ID_SABUN_BGVD == '" + ID_SABUN_BGVDs[i] + "' && SEQ_RTNGPRSN != 1");
        			var NPS = 0;
        			var NPS_HIGH = 0;
        			var NPS_LOW = 0;
        			for (var j = 0; j < this.dsList.rowcount; j++) {
        				var ASR_CTN_WRK = this.dsList.getColumn(j, "ASR_CTN_WRK");
        				if (ASR_CTN_WRK != undefined) {
        					if (ASR_CTN_WRK > 8) {
        						NPS_HIGH++;
        					}
        					if (ASR_CTN_WRK < 7) {
        						NPS_LOW++;
        					}
        					NPS++
        				}
        			}

        			this.dsList.filter("");
        			this.dsList.filter("ID_SABUN_BGVD == '" + ID_SABUN_BGVDs[i] + "'");

        			var NPS_POINT = '';
        			if (NPS > 0) {
        				NPS_POINT = Math.round(((NPS_HIGH - NPS_LOW) / NPS) * 100) / 100;
        				console.log('NPS_POINT', NPS_POINT);
        				for (var j = 0; j < this.dsList.rowcount; j++) {
        					if (this.dsList.getColumn(j, "ST_MTSD_RTNG") == "평가완료" ||
        					    this.dsList.getColumn(j, "ST_LDSH_RTNG") == "평가완료")
        					{
        						if (this.dsList.getColumn(j, "SEQ_RTNGPRSN") == "1" && this.dsList.getColumn(j, "ASR_CTN_WRK") > 8)
        						{
        							this.dsList.setColumn(j, "NPS_POINT", 100)
        						} else if (this.dsList.getColumn(j, "SEQ_RTNGPRSN") == "1" && (this.dsList.getColumn(j, "ASR_CTN_WRK") == 7 || this.dsList.getColumn(j, "ASR_CTN_WRK") == 8))
        						{
        							this.dsList.setColumn(j, "NPS_POINT", 0)
        						} else if (this.dsList.getColumn(j, "SEQ_RTNGPRSN") == "1" && this.dsList.getColumn(j, "ASR_CTN_WRK") < 7)
        						{
        							this.dsList.setColumn(j, "NPS_POINT", -100)
        						} else {
        							this.dsList.setColumn(j, "NPS_POINT", NPS_POINT)
        						}
        					}
        				}
        			}
        		}
        		this.dsList.filter("");

        		this.dsList.set_enableevent(true);
        	}
        }

        /************************************************************************
         * 코드파인드 이벤트
         ************************************************************************/
        this.fnBeforeUserDataSetParam = function(id, dsUserParam, nrow) {
        	if (id == "ccfCD_CORP") {
        		dsUserParam.setColumn(nrow, "CD_CORP"  , this.AuthClient.CD_CORP);
        		dsUserParam.setColumn(nrow, "GR_SEARCH", this.FormInfo.GR_SEARCH);
        		dsUserParam.setColumn(nrow, "ID_USER"  , this.AuthClient.ID_USER);
        	} else if (id == "ccfID_RTNG") {
        		dsUserParam.setColumn(nrow, "CD_CORP"     , this.dsSearch.getColumn(0, "CD_CORP"));
        		dsUserParam.setColumn(nrow, "YR_RTNG"     , this.dsSearch.getColumn(0, "YR_RTNG"));
        		dsUserParam.setColumn(nrow, "CD_RTNG_TYPE", "JA");
        		dsUserParam.setColumn(nrow, "ID_SCREEN"   , "DAJ_RTNG_RSLT");
        		dsUserParam.setColumn(nrow, "CD_ROLE"     , this.AuthClient.CD_ROLE);
        	}

        	return true;
        }

        this.fnAfterCDTextChanged = function(id, codeFindData) {
        	if (codeFindData[0] == undefined) {
        		return;
        	}

        	if (id == "ccfID_RTNG") {
        		this.dsSearch.setColumn(0, "CD_RTNG_TYPE"    , codeFindData[0]["CD_RTNG_TYPE"]);
        		this.dsSearch.setColumn(0, "DS_RTNG_TYPE"    , codeFindData[0]["DS_RTNG_TYPE"]);
        		this.dsSearch.setColumn(0, "DT_RTNG_BEGN"    , codeFindData[0]["DT_RTNG_BEGN"]);
        		this.dsSearch.setColumn(0, "DT_RTNG_END"     , codeFindData[0]["DT_RTNG_END"]);
        		this.dsSearch.setColumn(0, "DT_RTNG_STD"     , codeFindData[0]["DT_RTNG_STD"]);
        		this.dsSearch.setColumn(0, "CD_RTNG_ASBLNEXT", codeFindData[0]["CD_RTNG_ASBLNEXT"]);
        		this.dsSearch.setColumn(0, "DS_RTNG_ASBLNEXT", codeFindData[0]["DS_RTNG_ASBLNEXT"]);

        		// 다면동료평가
        		if (codeFindData[0]['CD_RTNG_TYPE'] == 'JA01') {
        			this.dxGrid.setFormatColProperty(this.dxGrid.getBindCellIndex("body", "ST_MTSD_POOL"), "size", 100);
        			this.dxGrid.setFormatColProperty(this.dxGrid.getBindCellIndex("body", "ST_MTSD_RTNG"), "size", 100);
        			this.dxGrid.setFormatColProperty(this.dxGrid.getBindCellIndex("body", "ST_LDSH_RTNG"), "size", 0);
        			this.dxGrid.setFormatColProperty(this.dxGrid.getBindCellIndex("body", "ASR_ETC"), "size", 0);
        		}

        		// 리더십평가
        		if (codeFindData[0]['CD_RTNG_TYPE'] == 'JA02') {
        			this.dxGrid.setFormatColProperty(this.dxGrid.getBindCellIndex("body", "ST_MTSD_POOL"), "size", 0);
        			this.dxGrid.setFormatColProperty(this.dxGrid.getBindCellIndex("body", "ST_MTSD_RTNG"), "size", 0);
        			this.dxGrid.setFormatColProperty(this.dxGrid.getBindCellIndex("body", "ST_LDSH_RTNG"), "size", 100);
        			this.dxGrid.setFormatColProperty(this.dxGrid.getBindCellIndex("body", "ASR_ETC"), "size", 200);
        		}
        	}
        }

        /************************************************************************
         * 그리드 이벤트
         ************************************************************************/
        this.fnGridBeforeUserDataSetParam = function(id, dsUserParam, nrow) {
        	return true;
        }

        this.fnGridAfterCDTextChanged = function(id, codeFindData) {

        }

        /************************************************************************
         * 기타 이벤트
         ************************************************************************/
        this.dsSearch_onvaluechanged = function(obj,e) {
        	if (e.oldvalue != e.newvalue) {
        		this.gfnSetFormStatus(this);	// 폼상태 초기화
        		this.gfnGridClear(this.dxGrid);
        	}
        }

        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.form_onload,this);
            this.divData.addEventHandler("ondragmove",this.divData_ondragmove,this);
            this.dsSearch.addEventHandler("onvaluechanged",this.dsSearch_onvaluechanged,this);
            this.dsList.addEventHandler("onvaluechanged",this.dsList_onvaluechanged,this);
        };
        this.loadIncludeScript("DAJ_RTNG_RSLT.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
