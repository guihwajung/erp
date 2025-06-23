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
            this.set_titletext("환율관리");
            if (Form == this.constructor)
            {
                this._setFormPosition(1280,720);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("dsList", this);
            obj._setContents("");
            this.addChild(obj.name, obj);


            obj = new Dataset("_dsProc", this);
            obj._setContents("<ColumnInfo><Column id=\"TARGET\" type=\"STRING\" size=\"256\"/><Column id=\"SP\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"TARGET\">select</Col><Col id=\"SP\">DHZPR_EXCHANGE_SELECT</Col></Row><Row><Col id=\"TARGET\">insert</Col><Col id=\"SP\">DHZPR_EXCHANGE_INSERT</Col></Row><Row><Col id=\"TARGET\">update</Col><Col id=\"SP\">DHZPR_EXCHANGE_UPDATE</Col></Row><Row><Col id=\"TARGET\">delete</Col><Col id=\"SP\">DHZPR_EXCHANGE_DELETE</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsSearch", this);
            obj._setContents("<ColumnInfo><Column id=\"DT_ACCOUNT_FR\" type=\"STRING\" size=\"256\"/><Column id=\"DT_ACCOUNT_TO\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row/></Rows>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Div("divSearch","0.0","10.0",null,"46.0","0",null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_cssclass("div_SEARCH_Bg");
            obj.set_formscrolltype("none");
            this.addChild(obj.name, obj);

            obj = new Radio("rdo00","0.0","10.0","280","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("0");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("sta01","rdo00:0.0","10.0","92.0","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("1");
            obj.set_text("기준일자");
            obj.set_cssclass("sta_WF_SchLabelE");
            this.divSearch.addChild(obj.name, obj);

            obj = new Calendar("ctclDT_ACCOUNT_FR","sta01:0.0","10.0","105","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("3");
            obj.set_dateformat("yyyy-MM-dd");
            obj.set_editformat("yyyyMMdd");
            obj.set_autoselect("true");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("sta00","ctclDT_ACCOUNT_FR:0.0","10.0","30.0","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("2");
            obj.set_text("~");
            obj.set_cssclass("sta_WF_AC");
            this.divSearch.addChild(obj.name, obj);

            obj = new Calendar("ctclDT_ACCOUNT_TO","ctclDT_ACCOUNT_FR:0.0","10.0","105","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("4");
            obj.set_dateformat("yyyy-MM-dd");
            obj.set_editformat("yyyyMMdd");
            obj.set_autoselect("true");
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
            obj = new BindItem("item0","divSearch.form.ctclDT_ACCOUNT_FR","value","dsSearch","DT_ACCOUNT_FR");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item1","divSearch.form.ctclDT_ACCOUNT_TO","value","dsSearch","DT_ACCOUNT_TO");
            this.addChild(obj.name, obj);
            obj.bind();
            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script
        this.registerScript("DHZ_EXCHANGE.xfdl", function() {
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
        };

        /************************************************************************
         * 버튼 설정 : 화면(Tab) 전환시 마다 호출
         * 서브버튼 사용 및 공통버튼 강제 제어시 여기서 처리
         ************************************************************************/
        this.fnSetButton = function() {
        	// Select, Add, Del, Save, Excel, Print
        	// SubSelect, SubAdd, SubDel, SuubSave, SubExcel

        }

        /************************************************************************
         * 확장 버튼 : 화면별 버튼 설정 ID, function 연결 (화면버튼관리)
         ************************************************************************/
        this.fnSetExtendButton = function() {

        };

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
        	// 그리드 초기화
        	this.gfnGridInit(this.dxGrid, this.dsList, "DH", "DHZ_EXCHANGE");

        	//그리드에 바인딩된 콤보박스 데이터셋 필터 처리
        	//var comboCol = this.dxGrid.getBindCellIndex( "body", "CD_NATION" );
        	//var comboDs  = this.dxGrid.getCellProperty( "body", comboCol, "combodataset" );
        	//var comboObjDs  = this.gfnLookup(this, comboDs);
        	//필터처리
        	//comboObjDs.filter("CODE != 'CU'");

        	//검색조건 변경 이벤트
        	this.dsSearch.addEventHandler("onvaluechanged", this.dsSearch_Valuechanged, this);
        };

        /************************************************************************
         * 파라미터 설정
         ************************************************************************/
        this.fnSetParameter = function() {

        	this.dsSelect = new Dataset();
        	this.dsSelect.addColumn("DT_ACCOUNT_FR", "string");	//기준일자(시작)
        	this.dsSelect.addColumn("DT_ACCOUNT_TO", "string");	//기준일자(종료)

        	this.dsInsert = new Dataset();
        	this.dsInsert.addColumn("DT_ACCOUNT", "string");	//기준일자
        	this.dsInsert.addColumn("CD_NATION", "string");		//국가
        	this.dsInsert.addColumn("RT_END", "bigdecimal");	//기말환율
        	this.dsInsert.addColumn("RT_AVG", "bigdecimal");	//평균환율
        	this.dsInsert.addColumn("ID_INSERT", "string");		//등록자

        	this.dsUpdate = new Dataset();
        	this.dsUpdate.addColumn("DT_ACCOUNT", "string");	//기준일자
        	this.dsUpdate.addColumn("CD_NATION", "string");		//국가
        	this.dsUpdate.addColumn("RT_END", "bigdecimal");	//기말환율
        	this.dsUpdate.addColumn("RT_AVG", "bigdecimal");	//평균환율
        	this.dsUpdate.addColumn("ID_UPDATE", "string");		//수정자

        	this.dsDelete = new Dataset();
        	this.dsDelete.addColumn("DT_ACCOUNT", "string");
        	this.dsDelete.addColumn("CD_NATION", "string");

        	var toDay = this.gfnGetDate();
        	//검색조건 기본일자 셋팅
        	this.divSearch.form.ctclDT_ACCOUNT_FR.set_value(toDay.substr(0,4) + "0101");	//현재년1월1일
        	this.divSearch.form.ctclDT_ACCOUNT_TO.set_value(toDay);	//현재일자

        	//시작일 포커스
        	this.divSearch.form.ctclDT_ACCOUNT_FR.setFocus();
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

        	this.dsSelect.setColumn(0, "DT_ACCOUNT_FR", this.divSearch.form.ctclDT_ACCOUNT_FR.value);
        	this.dsSelect.setColumn(0, "DT_ACCOUNT_TO", this.divSearch.form.ctclDT_ACCOUNT_TO.value);

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

        /*
         *	입력 버튼
         */
        this.fnAdd = function() {
        	var nrow = this.gfnGridAdd(this.dxGrid);

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
        	this.dsUpdate.clearData();
        	this.dsDelete.clearData();

        	for (var i = 0; i < this.dsList.rowcount; i++) {
        		var flag = this.gfnGetFlag(this.dsList, i);
        		switch(flag) {
        			case "I":
        				var nrow = this.dsInsert.addRow();
        				this.dsInsert.setColumn(nrow, "DT_ACCOUNT"  , this.dsList.getColumn(i, "DT_ACCOUNT"));		//기준일자
        				this.dsInsert.setColumn(nrow, "CD_NATION"   , this.dsList.getColumn(i, "CD_NATION"));		//국가코드
        				this.dsInsert.setColumn(nrow, "RT_END"		, this.dsList.getColumn(i, "RT_END"));			//기말환율
        				this.dsInsert.setColumn(nrow, "RT_AVG"		, this.dsList.getColumn(i, "RT_AVG"));			//평균환율
        				this.dsInsert.setColumn(nrow, "ID_INSERT"   , this.AuthClient.ID_USER);
        				break;
        			case "U":
        				var nrow = this.dsUpdate.addRow();
        				this.dsUpdate.setColumn(nrow, "DT_ACCOUNT"  , this.dsList.getColumn(i, "DT_ACCOUNT"));		//기준일자
        				this.dsUpdate.setColumn(nrow, "CD_NATION"   , this.dsList.getColumn(i, "CD_NATION"));		//국가코드
        				this.dsUpdate.setColumn(nrow, "RT_END"		, this.dsList.getColumn(i, "RT_END"));			//기말환율
        				this.dsUpdate.setColumn(nrow, "RT_AVG"		, this.dsList.getColumn(i, "RT_AVG"));			//평균환율
        				this.dsUpdate.setColumn(nrow, "ID_UPDATE"   , this.AuthClient.ID_USER);
        				break;
        			case "D":
        				var nrow = this.dsDelete.addRow();
        				this.dsDelete.setColumn(nrow, "DT_ACCOUNT"  , this.dsList.getColumn(i, "DT_ACCOUNT"));		//기준일자
        				this.dsDelete.setColumn(nrow, "CD_NATION"   , this.dsList.getColumn(i, "CD_NATION"));		//국가코드
        				break;
        		}
        	}

        	if (this.dsInsert.rowcount == 0 && this.dsUpdate.rowcount == 0 && this.dsDelete.rowcount == 0) return;

        	var strSvcId    = "save";
        	var strSvcType  = "save";
        	var inProc		= "_dsProc";
        	var inData      = "insert=dsInsert update=dsUpdate delete=dsDelete";
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

        	var dtAcntFr = this.divSearch.form.ctclDT_ACCOUNT_FR.value;
        	var dtAcnTo  = this.divSearch.form.ctclDT_ACCOUNT_TO.value;

        	if(this.gfnIsNull(dtAcntFr)){
        		this.gfnAlert("기준일자(시작일)은 필수입니다.");
        		validate = false;
        	}

        	if(this.gfnIsNull(dtAcnTo)){
        		this.gfnAlert("기준일자(종료일)은 필수입니다.");
        		validate = false;
        	}

        	if(this.gfnGetDiffDate(dtAcntFr, dtAcnTo) <= -1){
        		this.gfnAlert("기준일자의 시작일은 종료일보다 작아야 합니다.");
        		validate = false;
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
        		this.gfnGridAfterSelect(this.dxGrid);
        	} else if(svcID == "save") {
        		if (errorCode == 0) {
        			this.FormBtns.Select.click();
        		} else {
        			this.gfnAlert(errorMsg);
        		}
        	} else if(svcID == "combo") {
        		if (errorCode == 0) {

        		}
        	}
        }

        /************************************************************************
         * 코드파인드 이벤트
         ************************************************************************/


        /************************************************************************
         * 그리드 이벤트
         ************************************************************************/


        /************************************************************************
         * 기타 이벤트
         ************************************************************************/
         this.dsSearch_Valuechanged = function(obj,e)
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
        };
        this.loadIncludeScript("DHZ_EXCHANGE.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
