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
            this.set_titletext("주택-약정관리");
            if (Form == this.constructor)
            {
                this._setFormPosition(790,450);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("_dsProc", this);
            obj._setContents("<ColumnInfo><Column id=\"TARGET\" type=\"STRING\" size=\"256\"/><Column id=\"SP\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"TARGET\">select</Col><Col id=\"SP\">DOAPR_SOC_PROJ_JV_SELECT</Col></Row><Row><Col id=\"TARGET\">save</Col><Col id=\"SP\">DOAPR_SOC_PROJ_JV_SAVE</Col></Row><Row><Col id=\"TARGET\">selectCharge</Col><Col id=\"SP\">DOAPR_PROJ_YNCHARGE_SELECT</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsList", this);
            obj._setContents("");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsSearch", this);
            obj._setContents("<ColumnInfo><Column id=\"CD_PROJ\" type=\"STRING\" size=\"256\"/><Column id=\"DS_PROJ\" type=\"STRING\" size=\"256\"/><Column id=\"DT_STD\" type=\"STRING\" size=\"256\"/><Column id=\"YN_READ\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row/></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsRequired", this);
            obj._setContents("<ColumnInfo><Column id=\"CD_FIELD\" type=\"STRING\" size=\"256\"/><Column id=\"DS_FIELD\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"CD_FIELD\">TY_JV</Col><Col id=\"DS_FIELD\">구분</Col></Row><Row><Col id=\"CD_FIELD\">CD_VENDOR</Col><Col id=\"DS_FIELD\">업체코드</Col></Row><Row><Col id=\"CD_FIELD\">RT_POTN_IVST</Col><Col id=\"DS_FIELD\">출자지분율</Col></Row><Row><Col id=\"DS_FIELD\">시공지분율</Col><Col id=\"CD_FIELD\">RT_POTN_CONST</Col></Row><Row><Col id=\"CD_FIELD\">RT_POTN_OP</Col><Col id=\"DS_FIELD\">운영지분율</Col></Row><Row><Col id=\"CD_FIELD\">YN_JUGAN</Col><Col id=\"DS_FIELD\">주간사여부</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsRcvYNCharge", this);
            obj._setContents("<ColumnInfo><ConstColumn id=\"YN_EXISTS\" type=\"STRING\" size=\"30\"/></ColumnInfo>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Div("divSearch","0.0","10.0",null,"78.0","0",null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_cssclass("div_SEARCH_Bg");
            obj.set_text("");
            this.addChild(obj.name, obj);

            obj = new Static("staCD_PROJ","0.0","10.0","118.0","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("0");
            obj.set_text("프로젝트코드");
            obj.set_textAlign("right");
            obj.set_cssclass("sta_WF_SchLabel");
            this.divSearch.addChild(obj.name, obj);

            obj = new Edit("ctxtCD_PROJ","0.0","staCD_PROJ:10.0","66","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("1");
            obj.set_value("");
            obj.set_readonly("true");
            obj.set_enable("true");
            this.divSearch.addChild(obj.name, obj);

            obj = new Edit("ctxtDS_PROJ","ctxtCD_PROJ:0.0","staCD_PROJ:10.0","186","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("2");
            obj.set_value("");
            obj.set_readonly("true");
            this.divSearch.addChild(obj.name, obj);

            obj = new Calendar("ctclDT_STD","ctxtDS_PROJ:0.0","staCD_PROJ:10.0","132","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("4");
            obj.set_dateformat("yyyy-MM-dd");
            obj.set_editformat("yyyyMMdd");
            obj.set_autoselect("true");
            obj.set_value("20200101");
            obj.set_enable("true");
            obj.set_visible("true");
            obj.set_readonly("true");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("staCD_PROJ00","0.0","10.0","118.0","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("3");
            obj.set_text("기준일자");
            obj.set_textAlign("right");
            obj.set_cssclass("sta_WF_SchLabel");
            this.divSearch.addChild(obj.name, obj);

            obj = new Div("divData","0","50",null,"400","0",null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_cssclass("div_DATA_Bg");
            obj.set_text("");
            this.addChild(obj.name, obj);

            obj = new Grid("objGrd","0","0",null,null,"0","5",null,null,null,null,this.divData.form);
            obj.set_taborder("0");
            obj._setContents("");
            this.divData.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this
            obj = new Layout("default","",this._adjust_width,this._adjust_height,this,function(p){});
            this.addLayout(obj.name, obj);
            
            // BindItem Information
            obj = new BindItem("item0","divSearch.form.ctxtCD_PROJ","value","dsSearch","CD_PROJ");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item1","divSearch.form.ctxtDS_PROJ","value","dsSearch","DS_PROJ");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item2","divSearch.form.ctclDT_STD","value","dsSearch","DT_STD");
            this.addChild(obj.name, obj);
            obj.bind();
            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script
        this.registerScript("DOC_SOC_JV.xfdl", function() {
        this.objApp = this.gfnGetApplication();
        this.FIELD_EXPL_GUBUN = this.getOwnerFrame().FIELD_EXPL_GUBUN;

        this.form_onload = function(obj,e)
        {
        	// -- 필수 -------------------//
        	this.gfnFormOnLoad(this);
        	this.gfnFormInfo(this);
        	// ---------------------------//
        	this.fnSetButton();
        	this.fnSetExtendButton();

        	this.fnSetVariable();
        	this.fnSetParameter();
        	this.fnSetEvent()
        	;this.gridGoloring();

        	this.dsSearch.setColumn(0, "CD_PROJ", this.getOwnerFrame().CD_PROJ);
        	this.dsSearch.setColumn(0, "DS_PROJ", this.getOwnerFrame().DS_PROJ);
        	this.dsSearch.setColumn(0, "DT_STD", this.getOwnerFrame().DT_STD);

        	this.FormBtns.Select.click();
        };

        /************************************************************************
         * 담당자 여부 검사
         ************************************************************************/
         this.fnGetYNCharge = function(){

        	this.dsReqYNCharge = new Dataset();
        	this.dsReqYNCharge.addColumn("CD_PROJ", "string");
        	this.dsReqYNCharge.addColumn("ID_USER", "string");

        	this.dsReqYNCharge.addRow();
        	this.dsReqYNCharge.setColumn(0, "CD_PROJ", this.getOwnerFrame().CD_PROJ);
        	this.dsReqYNCharge.setColumn(0, "ID_USER", this.objApp.gdsUserInfo.getColumn(0, "ID_USER"));

        	var strSvcId    = "selectCharge";
        	var strSvcType  = "select";
        	var inProc		= "_dsProc";
        		inData      = "selectCharge=dsReqYNCharge";
        		outData     = "dsRcvYNCharge=selectCharge0";
        	var strArg      = "";
        	var callBackFnc = "fnCallback";

        	this.gfnTransaction( strSvcId , 	// transaction을 구분하기 위한 svc id값
        						strSvcType , 	// transaction을 요청할 구분
        						inProc,			// Procedure 정보 Dataset 이름
        						inData , 		// 입력값으로 보낼 dataset id , a=b형태로 실제이름과 입력이름을 매칭
        						outData , 		// 처리결과값으로 받을 dataset id, a=b형태로 실제이름과 입력이름을 매칭
        						strArg, 			// 입력갑스로 보낼 arguments, strFormData="20120607"
        						callBackFnc,false); // 통신방법 정의 [생략가능]
         }


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
        	this.CD_CORP = this.AuthClient.CD_CORP;

        	this.dxGrid = this.divData.form.objGrd;	// 참여사
        };

        /************************************************************************
         * 이벤트 설정
         ************************************************************************/
        this.fnSetEvent = function() {
        	this.gfnGridInit(this.dxGrid, this.dsList, "DO", "DOC_SOC_JV_LIST");	// 참여사구성관리

        	this.dxGrid.BeforeUserDataSetParam = "fnGrid_BeforeUserDataSetParam";
        };


        /************************************************************************
         * 코드파인드 이벤트
         ************************************************************************/
        this.fnGrid_BeforeUserDataSetParam = function(id, dsUserParam, nrow)
         {
        	dsUserParam.setColumn(nrow, "CD_CORP", this.CD_CORP);
        	dsUserParam.setColumn(nrow, "CD_SITE", "");
        	dsUserParam.setColumn(nrow, "TY_VENDOR", "");
        	return true;
         }

        /************************************************************************
         * 파라미터 설정
         ************************************************************************/
        this.fnSetParameter = function() {

        	this.dsSave = new Dataset();

        	this.dsSave.addColumn("TY_WRK", "string");		//
        	this.dsSave.addColumn("CD_PROJ", "string");		// 기준일자
        	this.dsSave.addColumn("DT_STD", "string");		// 기준일자
        	this.dsSave.addColumn("TY_JV", "string");		// 구분
        	this.dsSave.addColumn("CD_VENDOR", "string");	// 업체코드
        	this.dsSave.addColumn("RT_POTN_IVST", "bigdecimal");	// 출자지분율
        	this.dsSave.addColumn("RT_POTN_CONST", "bigdecimal");	// 시공지분율
        	this.dsSave.addColumn("RT_POTN_OP", "bigdecimal");		// 운영지분율
        	this.dsSave.addColumn("YN_JUGAN", "string");		// 주간사여부
        	this.dsSave.addColumn("ID_USER", "string");

        	this.dsSelect = new Dataset();
        	this.dsSelect.addColumn("CD_PROJ", "string");
        	this.dsSelect.addColumn("DT_STD", "string");
        	this.dsSelect.addColumn("YN_READ", "string");
        }


        /************************************************************************
         * 트렌젝션 버튼 이벤트
         ************************************************************************/
        this.fnSelect = function(obj,e){

        	this.dsSelect.clearData();
        	this.dsSelect.addRow();
        	this.dsSelect.setColumn(0, "CD_PROJ", this.dsSearch.getColumn(0, "CD_PROJ"));
        	this.dsSelect.setColumn(0, "DT_STD", this.dsSearch.getColumn(0, "DT_STD"));
        	this.dsSelect.setColumn(0, "YN_READ", "N");

        	var strSvcId    = "select";
        	var strSvcType  = "select";
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
         *	저장 버튼
         */
        this.fnSave = function(obj,e){

        	if(!this.gfnDataValidate(this.dsList, this.dsRequired))return;

        	this.dxGrid.updateToDataset();
        	this.dsSave.clearData();

        	var dsListCnt = this.dsList.rowcount;

        // 	if(dsListCnt > 0){
        // 		var YN_JUGAN_COUNT = 0;
        // 		var TOTAL_CNT = 0;
        //
        // 		for(var i = 0; i < dsListCnt; i++){
        // 			if(this.gfnGetFlag(this.dsList, i) != "D"){
        // 				TOTAL_CNT++;
        // 				if(this.dsList.getColumn(i, "YN_JUGAN") == "Y"){
        // 					YN_JUGAN_COUNT++;
        // 				}
        // 			}
        // 		}
        //
        // 		if(YN_JUGAN_COUNT != 1 && TOTAL_CNT != 0){
        // 			this.gfnAlert("1건의 Main 선택이 가능합니다.");
        // 			return;
        // 		}
        //
        // 	}

        	for (var i = 0; i < dsListCnt; i++) {
        		var flag = this.gfnGetFlag(this.dsList, i);
        		switch(flag) {
        			case "I":
        			case "U":
        			case "D":
        				var nrow = this.dsSave.addRow();
        				this.dsSave.setColumn(nrow, "TY_WRK", flag);
        				this.dsSave.setColumn(nrow, "CD_PROJ", this.getOwnerFrame().CD_PROJ);						// 프로젝트코드
        				this.dsSave.setColumn(nrow, "DT_STD", this.getOwnerFrame().DT_STD);							// 기준일자
        				this.dsSave.setColumn(nrow, "TY_JV", this.dsList.getColumn(i, "TY_JV"));					// 구분
        				this.dsSave.setColumn(nrow, "CD_VENDOR", this.dsList.getColumn(i, "CD_VENDOR"));			// 업체코드
        				this.dsSave.setColumn(nrow, "RT_POTN_IVST", this.dsList.getColumn(i, "RT_POTN_IVST"));		// 출자지분율
        				this.dsSave.setColumn(nrow, "RT_POTN_CONST", this.dsList.getColumn(i, "RT_POTN_CONST"));	// 시공지분율
        				this.dsSave.setColumn(nrow, "RT_POTN_OP", this.dsList.getColumn(i, "RT_POTN_OP"));			// 출자지분율
        				this.dsSave.setColumn(nrow, "YN_JUGAN", this.dsList.getColumn(i, "YN_JUGAN"));				// 주간사여부
        				this.dsSave.setColumn(nrow, "ID_USER", this.AuthClient.ID_USER);
        				break;
        		}
        	}

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
        						strArg, 			// 입력갑스로 보낼 arguments, strFormData="20120607"
        						callBackFnc); // 통신방법 정의 [생략가능]
        }

        /*
         *	입력 버튼
         */
        this.fnAdd = function() {
        	var nrow = this.gfnGridAdd(this.dxGrid, "bottom"); // top (default), bottom, current
        	this.dsList.set_updatecontrol(false);
        	this.dsList.setColumn(nrow, "RT_POTN_IVST", 0);
        	this.dsList.setColumn(nrow, "RT_POTN_CONST", 0);
        	this.dsList.setColumn(nrow, "RT_POTN_OP", 0);
        	this.dsList.setColumn(nrow, "YN_JUGAN", "N");
        	this.dsList.set_updatecontrol(true);
        }

        /*
         *	삭제 버튼
         */
        this.fnDel = function() {
        	this.gfnGridDel(this.dxGrid);
        }


        /*
         *	엑셀 버튼
         */
        this.fnExcel = function() {
        	this.gfnExcelExport(this.dxGrid);
        }
        /************************************************************************
         * 콜백 이벤트
         ************************************************************************/
        /*
         *	콜백 처리
         */
        this.fnCallback = function(svcID, errorCode, errorMsg)
        {
        	if(svcID == "select") {
        	} else if(svcID == "save") {
        		//this.getParentContext().close(true);
        		this.FormBtns.Select.click();
        	} else if(svcID == "delete") {
        		this.FormBtns.Select.click();
        	}
        	this.fnSetButton();
        };


        //readonly color 설정
        this.gridGoloring = function(){
        	this.gfnGridColumnColor(this.dxGrid, "TY_JV","BACK_ReadOnly", "nx_flag==null");
        	this.gfnGridColumnColor(this.dxGrid, "CD_VENDOR","BACK_ReadOnly", "nx_flag==null");
        }
        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.form_onload,this);
        };
        this.loadIncludeScript("DOC_SOC_JV.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
