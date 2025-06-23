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
                this._setFormPosition(600,500);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("dsList", this);
            obj._setContents("");
            this.addChild(obj.name, obj);


            obj = new Dataset("_dsProc", this);
            obj._setContents("<ColumnInfo><Column id=\"TARGET\" type=\"STRING\" size=\"256\"/><Column id=\"SP\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"TARGET\">select</Col><Col id=\"SP\">DAJPR_RTNG_GOAL_SEARCHDLG_SELECT</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsSearch", this);
            obj._setContents("<ColumnInfo><Column id=\"CD_CORP\" type=\"STRING\" size=\"256\"/><Column id=\"DS_CORP\" type=\"STRING\" size=\"256\"/><Column id=\"YR_RTNG\" type=\"STRING\" size=\"256\"/><Column id=\"ID_RTNG\" type=\"STRING\" size=\"256\"/><Column id=\"DS_RTNG\" type=\"STRING\" size=\"256\"/><Column id=\"CD_RTNG_TYPE\" type=\"STRING\" size=\"256\"/><Column id=\"DS_RTNG_TYPE\" type=\"STRING\" size=\"256\"/><Column id=\"DT_RTNG_BEGN\" type=\"STRING\" size=\"256\"/><Column id=\"DT_RTNG_END\" type=\"STRING\" size=\"256\"/><Column id=\"DT_RTNG_STD\" type=\"STRING\" size=\"256\"/><Column id=\"CD_RTNG_ASBLNEXT\" type=\"STRING\" size=\"256\"/><Column id=\"DS_RTNG_ASBLNEXT\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"CD_CORP\"/></Row></Rows>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Div("divSearch","0","0",null,"45","0",null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_cssclass("div_SEARCH_Bg");
            obj.set_text("");
            this.addChild(obj.name, obj);

            obj = new Static("staCD_CORP","-10","10.0","66","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("1");
            obj.set_text("법인");
            obj.set_cssclass("sta_WF_SchLabelE");
            this.divSearch.addChild(obj.name, obj);

            obj = new Div("ccfCD_CORP","staCD_CORP:0.0","10.0","200","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.getSetter("CDTextWidth").set("50");
            obj.set_taborder("3");
            obj.set_url("cmm::cmmCodeFind.xfdl");
            obj.set_text("");
            obj.getSetter("CodeFindName").set("DAX_CFCORP_CODEFIND");
            obj.set_enable("false");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("staID_RTNG","252","10.0","92","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("0");
            obj.set_text("평가회차");
            obj.set_rtl("false");
            obj.set_cssclass("sta_WF_SchLabelE");
            this.divSearch.addChild(obj.name, obj);

            obj = new Div("ccfID_RTNG","staID_RTNG:0","10.0","240","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.getSetter("CDTextWidth").set("100");
            obj.set_taborder("2");
            obj.set_url("cmm::cmmCodeFind.xfdl");
            obj.set_text("");
            obj.getSetter("CodeFindName").set("DAX_CFRTNG_STD");
            obj.set_enable("false");
            this.divSearch.addChild(obj.name, obj);

            obj = new Div("divData","0","divSearch:10",null,null,"0","50",null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_cssclass("div_DATA_Bg");
            obj.set_text("");
            this.addChild(obj.name, obj);

            obj = new Grid("objGrid","0","0",null,null,"0","0",null,null,null,null,this.divData.form);
            obj.set_taborder("0");
            obj._setContents("");
            this.divData.addChild(obj.name, obj);

            obj = new Button("btnOk","35.17%","divData:15","60",null,null,"10",null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_text("확인");
            this.addChild(obj.name, obj);

            obj = new Button("btnCancel","56.17%","divData:15","60",null,null,"10",null,null,null,null,this);
            obj.set_taborder("3");
            obj.set_text("취소");
            this.addChild(obj.name, obj);
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
        };
        
        // User Script
        this.registerScript("DAJ_RTNG_GOAL_SEARCH_DLG.xfdl", function() {
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
        	this.dxGrid    = this.divData.form.objGrid;

        	// 검색영역
        	this.ccfCD_CORP  = this.divSearch.form.ccfCD_CORP;
        	this.ccfID_RTNG  = this.divSearch.form.ccfID_RTNG;
        }

        /************************************************************************
         * 이벤트 설정
         ************************************************************************/
        this.fnSetEvent = function() {
        	// 그리드 초기화
        	this.gfnGridInit(this.dxGrid, this.dsList, "DA", "DAJ_RTNG_GOAL_SEARCH_DLG");
        	this.dxGrid.BeforeUserDataSetParam = "fnGridBeforeUserDataSetParam";
        	this.dxGrid.AfterCDTextChanged     = "fnGridAfterCDTextChanged";
        }

        /************************************************************************
         * 파라미터 설정
         ************************************************************************/
        this.fnSetParameter = function() {

        	this.dsSelect = new Dataset();
        	this.dsSelect.addColumn("CD_CORP", "string");
        	this.dsSelect.addColumn("ID_RTNG", "string");

        	this.dsResult = new Dataset();
        	this.dsResult.addColumn("SEQ_BGVDPRSN", "INT");
        	this.dsResult.addColumn("ID_CPNYDUTY", "string");
        	this.dsResult.addColumn("DS_HNAME", "string");
        	this.dsResult.addColumn("DS_DEPT", "string");
        	this.dsResult.addColumn("DS_DUTY", "string");
        	this.dsResult.addColumn("CD_POSITION", "string");
        	this.dsResult.addColumn("DS_POSITION", "string");
        	this.dsResult.addColumn("CD_OCCUPATION", "string");
        	this.dsResult.addColumn("DT_JOIN", "string");
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

        	this.dsSearch.setColumn(0, "CD_CORP"	, this.getOwnerFrame().CD_CORP);
        	this.dsSearch.setColumn(0, "DS_CORP"	, this.getOwnerFrame().DS_CORP);
        	this.dsSearch.setColumn(0, "YR_RTNG"	, this.getOwnerFrame().YR_RTNG);
        	this.dsSearch.setColumn(0, "ID_RTNG"	, this.getOwnerFrame().ID_RTNG);
        	this.dsSearch.setColumn(0, "DS_RTNG"	, this.getOwnerFrame().DS_RTNG);
        	this.dsSearch.setColumn(0, "CD_RTNG_TYPE"	, this.getOwnerFrame().CD_RTNG_TYPE);
        	this.dsSearch.setColumn(0, "DS_RTNG_TYPE"	, this.getOwnerFrame().DS_RTNG_TYPE);
        	this.dsSearch.setColumn(0, "DT_RTNG_BEGN"	, this.getOwnerFrame().DT_RTNG_BEGN);
        	this.dsSearch.setColumn(0, "DT_RTNG_END"	, this.getOwnerFrame().DT_RTNG_END);
        	this.dsSearch.setColumn(0, "DT_RTNG_STD"	, this.getOwnerFrame().DT_RTNG_STD);
        	this.dsSearch.setColumn(0, "CD_RTNG_ASBLNEXT"	, this.getOwnerFrame().CD_RTNG_ASBLNEXT);
        	this.dsSearch.setColumn(0, "DS_RTNG_ASBLNEXT"	, this.getOwnerFrame().DS_RTNG_ASBLNEXT);

        	//trace(" ID_RTNG=>" + this.getOwnerFrame().ID_RTNG);

        	if (!this.gfnIsNull(this.dsSearch.getColumn(0, "ID_RTNG")))
        	{
        		this.fnSelect();
        	}
        }

        /************************************************************************
         * 버튼 이벤트
         ************************************************************************/
        /*
         * 조회 버튼
         */
        // 평가자 조회
        this.fnSelect = function() {

        	this.gfnGridBeforeSelect(this.dxGrid);

        	this.dsSelect.clearData();
        	this.dsSelect.addRow();
        	this.dsSelect.setColumn(0, "CD_CORP", this.dsSearch.getColumn(0, "CD_CORP"));
        	this.dsSelect.setColumn(0, "ID_RTNG", this.dsSearch.getColumn(0, "ID_RTNG"));

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

        /************************************************************************
         * 확장버튼 이벤트
         ************************************************************************/
        // 평가자 저장 버튼
        this.divData_divDataBottom_btnSaveRTNGPRSN_onclick = function(obj, e) {
        	// 그리드 필수항목 체크
        	if (!this.gfnGridValidate(this.dxGridSub)) return;

        	this.gfnConfirm("중복된 평가자 정보는 등록되지 않습니다.\n계속하시겠습니까?", function(strId, val) {
        		if (val == false) {
        			return;
        		}
        		this.SaveRTNGPRSNCallback();
        	});
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
        this.fnCallback = function(svcID, errorCode, errorMsg) {
        	if (errorCode != 0) {
        		this.gfnAlert(errorMsg);
        		return;
        	}

        	if (svcID == "select") {
        		this.gfnGridAfterSelect(this.dxGrid);
        	}
        }

        /************************************************************************
         * 기타 이벤트
         ************************************************************************/
        this.fnSearchInit = function(obj,e) {
        	if(e == null || (e.pretext != e.posttext)) {
        		this.gfnSetFormStatus(this);
        		this.gfnGridClear(this.dxGrid);
        	}
        }


        this.btnOk_onclick = function(obj,e)
        {
        	if(this.dsList.getCaseCount("CHK == '1' && "+this.ucFlag+" != '#'") == 0){
        		this.gfnAlert("권한 추가할 피평가자 행을 선택하세요.");
        		return false;
        	}

        	var arr = [];
        	for(var r = 0; r < this.dsList.rowcount; r++) {
        		if(this.dsList.getColumn(r, "CHK") == 1) {
        			var json = {};
        			for(var c = 0; c < this.dsList.colcount; c++) {
        				if(this.dsList.getColumn(r, c) instanceof nexacro.Decimal) {
        					json[this.dsList.getColID(c)] = this.dsList.getColumn(r, c).hi;
        				} else {
        					json[this.dsList.getColID(c)] = this.dsList.getColumn(r, c);
        				}
        			}
        			arr.push(json);
        		}
        	}
        	//trace(" arr=>" + arr);

        	this.getParentContext().close(JSON.stringify(arr));

        };

        this.divData_btnCancel_onclick = function(obj,e)
        {
        	this.getParentContext().close(false);
        };

        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.form_onload,this);
            this.divData.addEventHandler("ondragmove",this.divData_ondragmove,this);
            this.btnOk.addEventHandler("onclick",this.btnOk_onclick,this);
            this.btnCancel.addEventHandler("onclick",this.divData_btnCancel_onclick,this);
            this.dsSearch.addEventHandler("onvaluechanged",this.dsSearch_onvaluechanged,this);
        };
        this.loadIncludeScript("DAJ_RTNG_GOAL_SEARCH_DLG.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
