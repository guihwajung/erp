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
            this.set_titletext("부도징후관리");
            if (Form == this.constructor)
            {
                this._setFormPosition(1280,720);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("dsList", this);
            obj._setContents("");
            this.addChild(obj.name, obj);


            obj = new Dataset("_dsProc", this);
            obj._setContents("<ColumnInfo><Column id=\"TARGET\" type=\"STRING\" size=\"256\"/><Column id=\"SP\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"TARGET\">select</Col><Col id=\"SP\">DZAPR_BUDO_SELECT</Col></Row><Row><Col id=\"TARGET\">insert</Col><Col id=\"SP\">DZAPR_BUDO_INSERT</Col></Row><Row><Col id=\"TARGET\">delete</Col><Col id=\"SP\">DZAPR_BUDO_DELETE</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsGUBUN", this);
            obj._setContents("<ColumnInfo><Column id=\"CD_CODE\" type=\"STRING\" size=\"256\"/><Column id=\"DS_CODE\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"CD_CODE\"/><Col id=\"DS_CODE\">전체</Col></Row><Row><Col id=\"CD_CODE\">N</Col><Col id=\"DS_CODE\">부도진행중</Col></Row><Row><Col id=\"CD_CODE\">Y</Col><Col id=\"DS_CODE\">최종부도</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsSearch", this);
            obj._setContents("<ColumnInfo><Column id=\"CD_CORP\" type=\"STRING\" size=\"256\"/><Column id=\"DS_CORP\" type=\"STRING\" size=\"256\"/><Column id=\"GUBUN\" type=\"STRING\" size=\"256\"/><Column id=\"FR_NONPAY\" type=\"STRING\" size=\"256\"/><Column id=\"TO_NONPAY\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"GUBUN\"/></Row></Rows>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Div("divSearch","0","0",null,"46","0",null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_cssclass("div_SEARCH_Bg");
            this.addChild(obj.name, obj);

            obj = new Static("staCD_CORP","0","10","92","25",null,null,null,null,null,null,this.divSearch.form);
            obj.set_cssclass("sta_WF_SchLabelE");
            obj.set_taborder("5");
            obj.set_text("법인코드");
            this.divSearch.addChild(obj.name, obj);

            obj = new Div("ccfCD_CORP","staCD_CORP:0","10","269","25",null,null,null,null,null,null,this.divSearch.form);
            obj.getSetter("CodeFindName").set("DZX_CFCORP_STD");
            obj.getSetter("CDTextWidth").set("70");
            obj.set_taborder("0");
            obj.set_url("cmm::cmmCodeFind.xfdl");
            obj.set_text("");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("staGUBUN","ccfCD_CORP:0","10","92","24",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("6");
            obj.set_text("부도구분");
            obj.set_cssclass("sta_WF_SchLabel");
            this.divSearch.addChild(obj.name, obj);

            obj = new Combo("ccboGUBUN","staGUBUN:0","10","100","24",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("4");
            obj.set_innerdataset("dsGUBUN");
            obj.set_codecolumn("CD_CODE");
            obj.set_datacolumn("DS_CODE");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("staDT_NONPAY","ccboGUBUN:0","10","92","24",null,null,null,null,null,null,this.divSearch.form);
            obj.set_cssclass("sta_WF_SchLabelE");
            obj.set_taborder("1");
            obj.set_text("부도기간");
            this.divSearch.addChild(obj.name, obj);

            obj = new Calendar("ctclFR_NONPAY","staDT_NONPAY:0","10","120","24",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("2");
            obj.set_dateformat("yyyy-MM-dd");
            obj.set_editformat("yyyy-MM-dd");
            obj.set_autoselect("true");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("staDT_NONPAY_DASH","ctclFR_NONPAY:0","10","20","24",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("3");
            obj.set_text("~");
            obj.set_cssclass("sta_WF_AC");
            this.divSearch.addChild(obj.name, obj);

            obj = new Calendar("ctclTO_NONPAY","staDT_NONPAY_DASH:0","10","120","24",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("4");
            obj.set_dateformat("yyyy-MM-dd");
            obj.set_editformat("yyyy-MM-dd");
            obj.set_autoselect("true");
            this.divSearch.addChild(obj.name, obj);

            obj = new Div("divData","0","divSearch:20",null,null,"0","0",null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_cssclass("div_DATA_Bg");
            this.addChild(obj.name, obj);

            obj = new Grid("objGrid","0","0",null,null,"0","0",null,null,null,null,this.divData.form);
            obj.set_taborder("0");
            obj.set_autofittype("col");
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

            obj = new BindItem("item2","divSearch.form.ccboGUBUN","value","dsSearch","GUBUN");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item3","divSearch.form.ctclFR_NONPAY","value","dsSearch","FR_NONPAY");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item4","divSearch.form.ctclTO_NONPAY","value","dsSearch","TO_NONPAY");
            this.addChild(obj.name, obj);
            obj.bind();
            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {
            this._addPreloadList("fdl","cmm::cmmCodeFind.xfdl");
        };
        
        // User Script
        this.registerScript("DZA_BUDO.xfdl", function() {
        this.objApp = this.gfnGetApplication();

        this.form_onload = function(obj,e)
        {
        	// -- 필수 --------------------//
        	this.gfnFormOnLoad(this);
        	this.gfnFormInfo(this);
        	// ----------------------------//

        	this.fnSetButton();
        	this.fnSetExtendButton();
        	this.fnSetVariable();
        	this.gfnSetElements();
        	this.fnSetEvent();
        	this.fnSetParameter();
        };

        /************************************************************************
         * 버튼 설정
         * 서브버튼 사용 처리. 공통 및 확장버튼 버튼관리화면에서 셋팅.
         ************************************************************************/
        this.fnSetButton = function() {};

        /************************************************************************
         * 확장 버튼 : 화면별 버튼 설정 ID, function 연결 (화면버튼관
         ************************************************************************/
        this.fnSetExtendButton = function() {};

        /************************************************************************
         * 변수 선언
         ************************************************************************/
        this.fnSetVariable = function() {
        	this.dxGrid = this.divData.form.objGrid;
        };

        /************************************************************************
         * 이벤트 설정
         ************************************************************************/
        this.fnSetEvent = function() {

        	this.gfnGridInit(this.dxGrid, this.dsList, "DF", "DZA_BUDO");
        	this.dxGrid.BeforeUserDataSetParam = "fnGrid_BeforuserDataSetParam";

        	this.dsSearch.setColumn(0, "FR_NONPAY", this.gfnGetFirstDate(this.gfnAddDate(this.gfnGetDate(),-1)));
        	this.dsSearch.setColumn(0, "TO_NONPAY", this.gfnAddDate(this.gfnGetDate(),-1));

        	// 부도구분 포커스.
        	this.ccboGUBUN.setFocus();
        }

        /************************************************************************
         * 파라미터 설정
         ************************************************************************/
        this.fnSetParameter = function() {

        	this.dsSelect = new Dataset();
        	this.dsSelect.addColumn("CD_CORP"		 , "string");
        	this.dsSelect.addColumn("FR_NONPAY"		 , "string");
        	this.dsSelect.addColumn("TO_NONPAY"		 , "string");
        	this.dsSelect.addColumn("GUBUN"			 , "string");

        	this.dsInsert = new Dataset();
        	this.dsInsert.addColumn("CD_CORP"		 , "string");
        	this.dsInsert.addColumn("CD_VENDOR"		 , "string");
        	this.dsInsert.addColumn("DT_NONPAY"		 , "string");
        	this.dsInsert.addColumn("AM_NONPAY"		 , "bigdecimal");
        	this.dsInsert.addColumn("YN_FINAL_NONPAY", "string");
        	this.dsInsert.addColumn("YN_GONGJI"		 , "string");
        	this.dsInsert.addColumn("YN_JIGUEB"		 , "string");
        	this.dsInsert.addColumn("RM_BIGO"		 , "string");
        	this.dsInsert.addColumn("ID_USER"		 , "string");

        	this.dsDelete = new Dataset();
        	this.dsDelete.addColumn("CD_CORP"		 , "string");
        	this.dsDelete.addColumn("CD_VENDOR"		 , "string");
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

        	this.dsSelect.clearData();
        	this.dsSelect.addRow();

        	this.dsSelect.setColumn(0, "CD_CORP"  , this.dsSearch.getColumn(0, "CD_CORP"));
        	this.dsSelect.setColumn(0, "GUBUN"    , this.dsSearch.getColumn(0, "GUBUN"));
        	this.dsSelect.setColumn(0, "FR_NONPAY", this.dsSearch.getColumn(0, "FR_NONPAY"));
        	this.dsSelect.setColumn(0, "TO_NONPAY", this.dsSearch.getColumn(0, "TO_NONPAY"));

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
        						strArg, 		// 입력값으로 보낼 arguments, strFormData="20120607"
        						callBackFnc); 	// 통신방법 정의 [생략가능]
        }

        /*
         *	입력 버튼
         */
        this.fnAdd = function() {
        	var nRow = this.gfnGridAdd(this.dxGrid);

        	this.dsList.set_enableevent(false);
        	this.dsList.setColumn(nRow, "CD_CORP"  , this.dsSearch.getColumn(0, "CD_CORP"));	// 법인코드
        	this.dsList.setColumn(nRow, "YN_GONGJI", "N");	// 지급가능여부
        	this.dsList.set_enableevent(true);

        	this.dsList.set_rowposition(nRow);
        	this.dxGrid.setCellPos(1);
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

        	this.dsInsert.clearData();
        	this.dsDelete.clearData();

        	for (var i = 0; i < this.dsList.rowcount; i++) {
        		var flag = this.gfnGetFlag(this.dsList, i);
        		switch(flag) {
        			case "I":
        			case "U":
        					var nrow = this.dsInsert.addRow();
        					this.dsInsert.setColumn(nrow, "CD_CORP"	       , this.dsList.getColumn(i, "CD_CORP"));
        					this.dsInsert.setColumn(nrow, "CD_VENDOR"	   , this.dsList.getColumn(i, "CD_VENDOR"));
        					this.dsInsert.setColumn(nrow, "DT_NONPAY"	   , this.dsList.getColumn(i, "DT_NONPAY"));
        					this.dsInsert.setColumn(nrow, "AM_NONPAY"	   , this.dsList.getColumn(i, "AM_NONPAY"));
        					this.dsInsert.setColumn(nrow, "YN_FINAL_NONPAY", this.dsList.getColumn(i, "YN_FINAL_NONPAY"));
        					this.dsInsert.setColumn(nrow, "YN_GONGJI"	   , this.dsList.getColumn(i, "YN_GONGJI"));
        					this.dsInsert.setColumn(nrow, "YN_JIGUEB"	   , this.dsList.getColumn(i, "YN_JIGUEB"));
        					this.dsInsert.setColumn(nrow, "RM_BIGO"	   	   , this.dsList.getColumn(i, "RM_BIGO"));
        					this.dsInsert.setColumn(nrow, "ID_USER"	       , this.AuthClient.ID_USER);
        				break;

        			case "D":
        					var nrow = this.dsDelete.addRow();
        					this.dsDelete.setColumn(nrow, "CD_CORP"	       , this.dsList.getColumn(i, "CD_CORP"));
        					this.dsDelete.setColumn(nrow, "CD_VENDOR"	   , this.dsList.getColumn(i, "CD_VENDOR"));
        				break;
        		}
        	}

        	if (this.dsInsert.rowcount == 0 && this.dsDelete.rowcount == 0) return;

        	var strSvcId    = "save";
        	var strSvcType  = "save";
        	var inProc		= "_dsProc";
        	var inData      = "insert=dsInsert delete=dsDelete";
        	var outData     = "";
        	var strArg      = "";
        	var callBackFnc = "fnCallback";

        	this.gfnTransaction( strSvcId , 	// transaction을 구분하기 위한 svc id값
        						strSvcType , 	// transaction을 요청할 구분
        						inProc,			// Procedure 정보 Dataset 이름
        						inData , 		// 입력값으로 보낼 dataset id , a=b형태로 실제이름과 입력이름을 매칭
        						outData , 		// 처리결과값으로 받을 dataset id, a=b형태로 실제이름과 입력이름을 매칭
        						strArg, 		// 입력값으로 보낼 arguments, strFormData="20120607"
        						callBackFnc); 	// 통신방법 정의 [생략가능]
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
        this.fnPrint = function() {};

        /************************************************************************
         * Validate
         ************************************************************************/
        /*
         *	조회 Validate
         */
        this.fnSelectValidate = function() {
        	return true;
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

        /************************************************************************
         * 그리드 이벤트
         ************************************************************************/
         this.fnGrid_BeforuserDataSetParam = function(id, dsUserParam, nrow) {

        	// 거래처
        	if (id == "DFX_CFVENDOR") {
        		dsUserParam.setColumn(nrow, "TY_VENDOR1", "F");
        		dsUserParam.setColumn(nrow, "CD_CORP"   , this.dsSearch.getColumn(0, "CD_CORP"));
        	}
        	return true;
        }

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
        };

        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.form_onload,this);
            this.dsSearch.addEventHandler("onvaluechanged",this.dsSearch_onvaluechanged,this);
        };
        this.loadIncludeScript("DZA_BUDO.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
