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
            obj._setContents("<ColumnInfo><Column id=\"TY_WRK\" type=\"STRING\" size=\"256\"/><Column id=\"CD_DEPT\" type=\"STRING\" size=\"256\"/><Column id=\"CD_USER\" type=\"STRING\" size=\"256\"/><Column id=\"DS_USER\" type=\"STRING\" size=\"256\"/><Column id=\"YM_WORK\" type=\"STRING\" size=\"256\"/><Column id=\"CD_SAUP\" type=\"STRING\" size=\"256\"/><Column id=\"CD_TEMPSITE\" type=\"STRING\" size=\"256\"/><Column id=\"DS_TEMPSITE\" type=\"STRING\" size=\"256\"/><Column id=\"CD_ZIPCODE\" type=\"STRING\" size=\"256\"/><Column id=\"DS_ADDRESS1\" type=\"STRING\" size=\"256\"/><Column id=\"DS_ADDRESS2\" type=\"STRING\" size=\"256\"/><Column id=\"CD_SAUPBI\" type=\"STRING\" size=\"256\"/><Column id=\"AM_SAUPBI\" type=\"BIGDECIMAL\" size=\"256\"/><Column id=\"CD_AREA\" type=\"STRING\" size=\"256\"/><Column id=\"DS_AREA\" type=\"STRING\" size=\"256\"/><Column id=\"CD_ETC\" type=\"STRING\" size=\"256\"/><Column id=\"DS_ETC\" type=\"STRING\" size=\"256\"/><Column id=\"DS_INFO\" type=\"INT\" size=\"256\"/><Column id=\"CD_PROC\" type=\"STRING\" size=\"256\"/><Column id=\"DS_PROC\" type=\"STRING\" size=\"256\"/><Column id=\"CD_RESULT\" type=\"STRING\" size=\"256\"/><Column id=\"YN_SUJI\" type=\"STRING\" size=\"256\"/><Column id=\"ID_INSERT\" type=\"STRING\" size=\"256\"/><Column id=\"DT_INSERT\" type=\"STRING\" size=\"256\"/><Column id=\"ID_UPDATE\" type=\"STRING\" size=\"256\"/><Column id=\"DT_UPDATE\" type=\"STRING\" size=\"256\"/><Column id=\"DS_HIS\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("_dsProc", this);
            obj._setContents("<ColumnInfo><Column id=\"TARGET\" type=\"STRING\" size=\"256\"/><Column id=\"SP\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"TARGET\">select</Col><Col id=\"SP\">DODPR_OBTAIN_ORDER_SELECT</Col></Row><Row><Col id=\"TARGET\">save</Col><Col id=\"SP\">DODPR_OBTAIN_ORDER_SAVE</Col></Row><Row><Col id=\"TARGET\">select_d</Col><Col id=\"SP\">DODPR_OBTAIN_ORDER_HIS_SELECT</Col></Row><Row><Col id=\"TARGET\">combo</Col><Col id=\"SP\">DZXPR_COMBO_SELECT</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsSearch", this);
            obj._setContents("<ColumnInfo><Column id=\"CD_DEPT\" type=\"STRING\" size=\"256\"/><Column id=\"YY_WORK\" type=\"STRING\" size=\"256\"/><Column id=\"ID_USER\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"CD_DEPT\"/><Col id=\"YY_WORK\"/></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsCheckList", this);
            obj._setContents("");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsOutput", this);
            obj._setContents("");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsParam", this);
            obj._setContents("<ColumnInfo><Column id=\"resultCode\" type=\"STRING\" size=\"256\"/><Column id=\"resultMsg\" type=\"STRING\" size=\"256\"/><Column id=\"numOfRows\" type=\"STRING\" size=\"256\"/><Column id=\"pageNo\" type=\"STRING\" size=\"256\"/><Column id=\"totalCount\" type=\"STRING\" size=\"256\"/><Column id=\"rnum\" type=\"STRING\" size=\"256\"/><Column id=\"appointno\" type=\"STRING\" size=\"256\"/><Column id=\"licenseno\" type=\"STRING\" size=\"256\"/><Column id=\"company\" type=\"STRING\" size=\"256\"/><Column id=\"businessnm\" type=\"STRING\" size=\"256\"/><Column id=\"species\" type=\"STRING\" size=\"256\"/><Column id=\"ceoname\" type=\"STRING\" size=\"256\"/><Column id=\"sido\" type=\"STRING\" size=\"256\"/><Column id=\"sgg\" type=\"STRING\" size=\"256\"/><Column id=\"issueenddate\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsListSub", this);
            obj._setContents("<ColumnInfo><Column id=\"CD_TEMPSITE\" type=\"STRING\" size=\"256\"/><Column id=\"NO_HIS\" type=\"STRING\" size=\"256\"/><Column id=\"DS_HIS\" type=\"STRING\" size=\"256\"/><Column id=\"ID_INSERT\" type=\"STRING\" size=\"256\"/><Column id=\"DT_INSERT\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsCheck", this);
            obj._setContents("<ColumnInfo><Column id=\"COL_NM\" type=\"STRING\" size=\"256\"/><Column id=\"YN_CHECK\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"COL_NM\">TY_WRK</Col><Col id=\"YN_CHECK\">N</Col></Row><Row><Col id=\"COL_NM\">CD_DEPT</Col><Col id=\"YN_CHECK\">N</Col></Row><Row><Col id=\"COL_NM\">CD_USER</Col><Col id=\"YN_CHECK\">Y</Col></Row><Row><Col id=\"COL_NM\">DS_USER</Col><Col id=\"YN_CHECK\">N</Col></Row><Row><Col id=\"COL_NM\">YM_WORK</Col><Col id=\"YN_CHECK\">N</Col></Row><Row><Col id=\"COL_NM\">CD_SAUP</Col><Col id=\"YN_CHECK\">N</Col></Row><Row><Col id=\"COL_NM\">CD_TEMPSITE</Col><Col id=\"YN_CHECK\">N</Col></Row><Row><Col id=\"COL_NM\">DS_TEMPSITE</Col><Col id=\"YN_CHECK\">N</Col></Row><Row><Col id=\"COL_NM\">CD_ZIPCODE</Col><Col id=\"YN_CHECK\">N</Col></Row><Row><Col id=\"COL_NM\">DS_ADDRESS1</Col><Col id=\"YN_CHECK\">N</Col></Row><Row><Col id=\"COL_NM\">DS_ADDRESS2</Col><Col id=\"YN_CHECK\">N</Col></Row><Row><Col id=\"COL_NM\">CD_SAUPBI</Col><Col id=\"YN_CHECK\">N</Col></Row><Row><Col id=\"COL_NM\">AM_SAUPBI</Col><Col id=\"YN_CHECK\">N</Col></Row><Row><Col id=\"COL_NM\">CD_AREA</Col><Col id=\"YN_CHECK\">N</Col></Row><Row><Col id=\"COL_NM\">DS_AREA</Col><Col id=\"YN_CHECK\">N</Col></Row><Row><Col id=\"COL_NM\">CD_ETC</Col><Col id=\"YN_CHECK\">N</Col></Row><Row><Col id=\"COL_NM\">DS_ETC</Col><Col id=\"YN_CHECK\">N</Col></Row><Row><Col id=\"COL_NM\">DS_INFO</Col><Col id=\"YN_CHECK\">N</Col></Row><Row><Col id=\"COL_NM\">CD_PROC</Col><Col id=\"YN_CHECK\">Y</Col></Row><Row><Col id=\"COL_NM\">DS_PROC</Col><Col id=\"YN_CHECK\">N</Col></Row><Row><Col id=\"COL_NM\">CD_RESULT</Col><Col id=\"YN_CHECK\">Y</Col></Row><Row><Col id=\"COL_NM\">YN_SUJI</Col><Col id=\"YN_CHECK\">N</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsComboDz98", this);
            obj._setContents("<ColumnInfo><Column id=\"CD_CODE\" type=\"STRING\" size=\"256\"/><Column id=\"DS_CODE\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Div("divSearch","0","0",null,"45","0",null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_cssclass("div_SEARCH_Bg");
            obj.set_formscrolltype("none");
            this.addChild(obj.name, obj);

            obj = new Static("staDT_YEAR","10","10","60","25",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("0");
            obj.set_text("접수년도");
            obj.set_textDecoration("underline");
            this.divSearch.addChild(obj.name, obj);

            obj = new Div("ctclDT_YEAR","staDT_YEAR:10","10","60","25",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("1");
            obj.set_url("cmm::cmmCalYY.xfdl");
            this.divSearch.addChild(obj.name, obj);

            obj = new Div("divData","0","55",null,null,"0","0",null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_cssclass("div_DATA_Bg");
            this.addChild(obj.name, obj);

            obj = new Div("divSplitter","0","61.50%","100.00%","5",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("1");
            obj.set_background("skyblue");
            obj.set_cursor("ns-resize");
            this.divData.addChild(obj.name, obj);

            obj = new Div("divDataTop","0","0",null,null,"0","divSplitter:5",null,null,null,null,this.divData.form);
            obj.set_taborder("0");
            this.divData.addChild(obj.name, obj);

            obj = new Static("sta01","0","0","100%","22",null,null,null,null,null,null,this.divData.form.divDataTop.form);
            obj.set_taborder("0");
            obj.set_text("영업정보");
            obj.set_cssclass("sta_TITLE_Bg");
            this.divData.form.divDataTop.addChild(obj.name, obj);

            obj = new Grid("objGrid","0","25",null,null,"0","2",null,null,null,null,this.divData.form.divDataTop.form);
            obj.set_taborder("1");
            obj._setContents("");
            this.divData.form.divDataTop.addChild(obj.name, obj);

            obj = new Div("divDataBottom","0","divSplitter:5",null,null,"0","0",null,null,null,null,this.divData.form);
            obj.set_taborder("0");
            this.divData.addChild(obj.name, obj);

            obj = new Static("sta02","0","0",null,"22","170",null,null,null,null,null,this.divData.form.divDataBottom.form);
            obj.set_taborder("1");
            obj.set_text("변경이력");
            obj.set_cssclass("sta_TITLE_Bg");
            this.divData.form.divDataBottom.addChild(obj.name, obj);

            obj = new Grid("objGridSub","0","sta02:5",null,null,"0","0",null,null,null,null,this.divData.form.divDataBottom.form);
            obj.getSetter("sub").set("true");
            obj.set_taborder("0");
            obj._setContents("");
            this.divData.form.divDataBottom.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this
            obj = new Layout("default","",this._adjust_width,this._adjust_height,this,function(p){});
            this.addLayout(obj.name, obj);
            
            // BindItem Information
            obj = new BindItem("item0","divSearch.form.ctclDT_YEAR.form.TextBox","value","dsSearch","YY_WORK");
            this.addChild(obj.name, obj);
            obj.bind();
            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {
            this._addPreloadList("fdl","cmm::cmmCalYY.xfdl");
        };
        
        // User Script
        this.registerScript("DZE_OBTAIN_ORDER.xfdl", function() {
        this.objApp = this.gfnGetApplication();

        //this.Page = 1;
        this.colCheck = false;

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

        	var today = this.gfnGetDate();
        	this.dsSearch.setColumn(0, "YY_WORK", today.substr(0,4));

        	this.fnSetCombo();


        	this.FormBtns.Select.click();
        };

        /************************************************************************
         * 버튼 설정 : 화면(Tab) 전환시 마다 호출
         * 서브버튼 사용 및 공통버튼 강제 제어시 여기서 처리
         ************************************************************************/
        this.fnSetButton = function() {
        	// Select, Add, Del, Save, Excel, Print
        	// SubSelect, SubAdd, SubDel, SuubSave, SubExcel
        	//this.FormBtns.Select.set_enable(false);
        }

        /************************************************************************
         * 확장 버튼 : 화면별 버튼 설정 ID, function 연결 (화면버튼관리)
         ************************************************************************/
        this.fnSetExtendButton = function() {
        	this.btnAPP = this.gfnFormButtonAdd("btnAPP", "fnAPP");		// 품의서
        };

        /************************************************************************
         * 변수 선언
         ************************************************************************/
        this.fnSetVariable = function() {
        	//this.ccfCD_SITE = this.divSearch.form.ccfCD_SITE;
        	this.dxGrid = this.divData.form.divDataTop.form.objGrid;
        	this.dxGridSub = this.divData.form.divDataBottom.form.objGridSub
        	//this.ccfCD_SITE_HD = this.divSearch.form.ccfCD_SITE_HD;


        };

        /************************************************************************
         * 이벤트 설정
         ************************************************************************/
        this.fnSetEvent = function() {
        	//this.ccfCD_SITE.BeforeUserDataSetParam = "fnBeforeUserDataSetParam";

        	// 그리드 초기화
        	this.gfnGridInit(this.dxGrid, this.dsList, "DZ", "DZE_OBTAIN_ORDER");
        	this.gfnGridInit(this.dxGridSub, this.dsListSub, "DZ", "DZE_OBTAIN_ORDER_HIS");

        	this.dxGridSub.addEventHandler("onexpandup", this.fnGridSub_ExpandUp, this);

        	this.dxGrid.addEventHandler("onselectchanged", this.fnGrid_RowCellChanged, this);
        	this.dsList.addEventHandler("canrowposchange", this.dsList_canrowposchange, this);

        };

        /************************************************************************
         * 파라미터 설정
         ************************************************************************/
        this.fnSetParameter = function() {
        	this.dsSelect = new Dataset();
        	this.dsSelect.addColumn("TY_WRK", "string");	//구분
        	this.dsSelect.addColumn("YY_WORK", "string");	//접수년도
        	this.dsSelect.addColumn("ID_USER", "string");	//사번


        	this.dsSelectSub = new Dataset();
        	this.dsSelectSub.addColumn("TY_WRK", "string");	//팀코드
        	this.dsSelectSub.addColumn("CD_TEMPSITE", "string");	//수주사업지코드

        	this.dsSave = new Dataset();
        	this.dsSave.addColumn("TY_WRK", "string");
        	this.dsSave.addColumn("CD_DEPT", "string");
        	this.dsSave.addColumn("CD_USER", "string");
        	this.dsSave.addColumn("DS_USER", "string");
        	this.dsSave.addColumn("YM_WORK", "string");
        	this.dsSave.addColumn("CD_SAUP", "string");
        	this.dsSave.addColumn("CD_TEMPSITE", "string");
        	this.dsSave.addColumn("DS_TEMPSITE", "string");
        	this.dsSave.addColumn("CD_ZIPCODE", "string");
        	this.dsSave.addColumn("DS_ADDRESS1", "string");
        	this.dsSave.addColumn("DS_ADDRESS2", "string");
        	this.dsSave.addColumn("CD_SAUPBI", "string");
        	this.dsSave.addColumn("AM_SAUPBI", "BIGDECIMAL");
        	this.dsSave.addColumn("CD_AREA", "string");
        	this.dsSave.addColumn("DS_AREA", "string");
        	this.dsSave.addColumn("CD_ETC", "string");
        	this.dsSave.addColumn("DS_ETC", "string");
        	this.dsSave.addColumn("DS_INFO", "INT");
        	this.dsSave.addColumn("CD_PROC", "string");
        	this.dsSave.addColumn("DS_PROC", "string");
        	this.dsSave.addColumn("CD_RESULT", "string");
        	this.dsSave.addColumn("YN_SUJI", "string");
        	this.dsSave.addColumn("ID_USER", "string");
        	this.dsSave.addColumn("DS_HIS", "string");


        	this.dsDelete = new Dataset();
        	this.dsDelete.addColumn("CD_TEMPSITE", "string");
        	this.dsDelete.addColumn("ID_INSERT", "string");

        }

        this.fnSetCombo = function()
        {
        	this.dsCombo = new Dataset();
        	this.dsCombo.addColumn("CD_SYSTEM", "string");
        	this.dsCombo.addColumn("CD_TYPE", "string");

        	//해당 화면 작성(save 권한)
        	this.dsCombo.addRow();
        	this.dsCombo.setColumn(0, "CD_SYSTEM", "DZ");
        	this.dsCombo.setColumn(0, "CD_TYPE", "DZ98");

        	var strSvcId    = "combo";
        	var strSvcType  = "select";
        	var inProc		= "_dsProc";
        	var inData      = "combo=dsCombo";
        	var outData     = "dsComboDz98=combo0";
        	var strArg      = "";
        	var callBackFnc = "fnComboCallback";

        	this.gfnTransaction( strSvcId , 	// transaction을 구분하기 위한 svc id값
        						strSvcType , 	// transaction을 요청할 구분
        						inProc,			// Procedure 정보 Dataset 이름
        						inData , 		// 입력값으로 보낼 dataset id , a=b형태로 실제이름과 입력이름을 매칭
        						outData , 		// 처리결과값으로 받을 dataset id, a=b형태로 실제이름과 입력이름을 매칭
        						strArg, 		// 입력값으로 보낼 arguments, strFormData="20120607"
        						callBackFnc); // 통신방법 정의 [생략가능]

        }

        this.fnComboCallback = function(svcID, errorCode, errorMsg)
        {
        	if (svcID == "combo") {

        		if(errorCode == 0)
        		{
        			this.fnButtonAUTH_Chk();
        		}
        		else
        		{
        			this.gfnAlert(errorMsg);
        		}
        	}

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

        	this.dsSelect.setColumn(0, "TY_WRK",  'Q');
        	//this.dsSelect.setColumn(0, "CD_DEPT", this.dsSearch.getColumn(0, "CD_DEPT"));
        	this.dsSelect.setColumn(0, "YY_WORK", this.dsSearch.getColumn(0, "YY_WORK"));
        	this.dsSelect.setColumn(0, "ID_USER", this.AuthClient.ID_USER);

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
          *	조회 버튼
          */
        this.fnSelectSub = function() {
        	if (!this.fnSelectValidate()) return false;

        	this.gfnGridBeforeSelect(this.dxGridSub);

        	this.dsSelectSub.clearData();
        	this.dsSelectSub.addRow();

        	if( this.gfnIsNull(this.dsList.getColumn(this.dsList.rowposition, "CD_TEMPSITE"))) return true;

        	this.dsSelectSub.setColumn(0, "TY_WRK",  'Q');
        	this.dsSelectSub.setColumn(0, "CD_TEMPSITE",  this.dsList.getColumn(this.dsList.rowposition, "CD_TEMPSITE") );

        	var strSvcId    = "select_d";
        	var strSvcType  = "grid";
        	var inProc		= "_dsProc";
        	var inData      = "select_d=dsSelectSub";
        	var outData     = "dsListSub=select_d0";
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
        	var flag = this.gfnGetFormStatus(this);
        	//한건씩 입력 가능하도록 변경.
        	if( flag == "I") return;

        	if( flag == "U") {
        		this.gfnAlert("수정중인 데이터가 있습니다.\n\n한번에 한건만 수정/추가 할 수 있습니다.");
        		return;
        	}

        	var nrow = this.gfnGridAdd(this.dxGrid); // top (default), bottom, current

        	this.dsList.set_enableevent(false);
        	this.dsList.setColumn(nrow, "CD_DEPT", this.AuthClient.CD_DEPT);
        	this.dsList.setColumn(nrow, "DS_INFO", "0");
        	this.dsList.set_enableevent(true);

        	this.dsListSub.clearData();
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
        	this.dxGrid.updateToDataset();
        	// 그리드 필수항목 체크
        	if (!this.gfnGridValidate(this.dxGrid)) return;
        	var nIndex = this.dsList.rowposition ;

        	var strAddress1 = this.dsList.getColumn(nIndex, "DS_ADDRESS1");
        	var strAddress2 = this.dsList.getColumn(nIndex, "DS_ADDRESS2");

        	if( this.gfnIsNull(strAddress1) && this.gfnIsNull(strAddress2)  ) {
        		var msg = "[사업장 주소] 또는 [사업장 상세주소]둘중 하나는 필수입력입니다."
        		this.gfnAlert(msg);
        		return;
        	}

        	this.fn_SubCheck()
        }

        // 변경상태에 따른 필수 이력 생성여부 체크/등록
        this.fn_SubCheck = function()
        {
        	var flag = this.gfnGetFlag(this.dsList, this.dsList.rowposition);

        	//필수 이력등록일때
        	if(!this.colCheck){
        		//최조 등록시에는 이력등록 안함
        		if(flag == "I" || flag == "D"){
        			this.fnObtainOrderHis("", false);
        		}else{
        			var msg = "변경에 따른 이력을 생성하시겠습니까?";
        			this.gfnConfirm(msg, "fnObtainOrderHis");
        		}
        	}else{
        		//필수 이력등록이 아닐때
        		if(flag == "I" || flag == "D"){
        			this.fnObtainOrderHis("", false);
        		}else{
        			this.fnObtainOrderHis("", true);
        		}
        	}
        }

        //이력 등록 팝업 호출
        this.fnObtainOrderHis = function(strId, val) {
        	if(val == true) {
        		var param = {};
        		param.CD_TEMPSITE = this.dsList.getColumn(this.dsList.rowposition, "CD_TEMPSITE");
        		param.NO_HIS = "";
        		//param.NO_HIS = this.dsListSub.getColumn(this.dsListSub.rowposition, "NO_HIS");
        		this.gfnFormOpen(this.FormInfo.CD_MODULE, "DZE_OBTAIN_ORDER_HIS", "fnObtainOrderHis_callback",  param, 650, 500);
        	}else{
        		this.fnMainSave();
        	}

        }

        // 이력 호출 팝업 내용 추가 및 저장 호출.
        this.fnObtainOrderHis_callback = function(strId, val) {
        	if(!this.gfnIsNull(val) ) this.dsList.setColumn(this.dsList.rowposition, "DS_HIS" , val );

        	this.fnMainSave();
        }

        //저장 프로세스
        this.fnMainSave = function()
        {
        	var flag = this.gfnGetFlag(this.dsList, this.dsList.rowposition);
        	if( !(flag == "I"  || flag == "D") ){
        		if(this.colCheck && this.gfnIsNull(this.dsList.getColumn(this.dsList.rowposition, "DS_HIS"))){
        			var msg = "필수 변경사항이 변경되었습니다."
        					+ "\n\n이력 저장후 진행가능 합니다."
        			this.gfnAlert(msg);
        			return false;
        		}
        	}

        	this.dsSave.clearData();
        	this.dsDelete.clearData();

        	for (var i = 0; i < this.dsList.rowcount; i++) {
        		var flag = this.gfnGetFlag(this.dsList, i);
        		switch(flag) {
        			case "I":
        			case "U":
        			case "D":
        				var nrow = this.dsSave.addRow();
        				this.dsSave.setColumn(nrow, "TY_WRK",  flag );
        				this.dsSave.setColumn(nrow, "CD_DEPT", this.dsList.getColumn(i, "CD_DEPT"));
        				this.dsSave.setColumn(nrow, "CD_USER", this.dsList.getColumn(i, "CD_USER"));
        				this.dsSave.setColumn(nrow, "YM_WORK", this.dsList.getColumn(i, "YM_WORK"));
        				this.dsSave.setColumn(nrow, "CD_SAUP", this.dsList.getColumn(i, "CD_SAUP"));
        				this.dsSave.setColumn(nrow, "CD_TEMPSITE", this.dsList.getColumn(i, "CD_TEMPSITE"));
        				this.dsSave.setColumn(nrow, "DS_TEMPSITE", this.dsList.getColumn(i, "DS_TEMPSITE"));
        				this.dsSave.setColumn(nrow, "CD_ZIPCODE",  this.dsList.getColumn(i, "CD_ZIPCODE"));
        				this.dsSave.setColumn(nrow, "DS_ADDRESS1", this.dsList.getColumn(i, "DS_ADDRESS1"));
        				this.dsSave.setColumn(nrow, "DS_ADDRESS2", this.dsList.getColumn(i, "DS_ADDRESS2"));
        				this.dsSave.setColumn(nrow, "CD_SAUPBI", this.dsList.getColumn(i, "CD_SAUPBI"));
        				this.dsSave.setColumn(nrow, "AM_SAUPBI", this.dsList.getColumn(i, "AM_SAUPBI"));
        				this.dsSave.setColumn(nrow, "CD_AREA",   this.dsList.getColumn(i, "CD_AREA"));
        				this.dsSave.setColumn(nrow, "DS_AREA",   this.dsList.getColumn(i, "DS_AREA"));
        				this.dsSave.setColumn(nrow, "CD_ETC",    this.dsList.getColumn(i, "CD_ETC"));
        				this.dsSave.setColumn(nrow, "DS_ETC",    this.dsList.getColumn(i, "DS_ETC"));
        				this.dsSave.setColumn(nrow, "DS_INFO",   this.dsList.getColumn(i, "DS_INFO"));
        				this.dsSave.setColumn(nrow, "CD_PROC",   this.dsList.getColumn(i, "CD_PROC"));
        				this.dsSave.setColumn(nrow, "DS_PROC",   this.dsList.getColumn(i, "DS_PROC"));
        				this.dsSave.setColumn(nrow, "CD_RESULT", this.dsList.getColumn(i, "CD_RESULT"));
        				this.dsSave.setColumn(nrow, "YN_SUJI",   this.dsList.getColumn(i, "YN_SUJI"));
        				this.dsSave.setColumn(nrow, "DS_HIS",    this.dsList.getColumn(i, "DS_HIS"));
        				this.dsSave.setColumn(nrow, "ID_USER",   this.AuthClient.ID_USER);
        				break;
        		}
        	}

        	if (this.dsSave.rowcount == 0 ) return;

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

        	if (this.gfnIsNull(this.dsSearch.getColumn(0,"YY_WORK"))) {
        		validate = false;
        		// Alert후 실행할 처리
        		this.fnVaidateCallback = function() {
        			this.divSearch.form.ctclDT_YEAR.form.TextBox.setFocus();
        		}
        		this.gfnAlert("입력년도는 반드시 입력 하셔야 합니다.", "fnVaidateCallback");
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
        		this.fnButtonAUTH_Chk();

        		this.gfnGridAfterSelect(this.dxGrid);
        		this.colCheck = false ;
        		this.fnSelectSub();
        	}
        	else if (svcID == "select_d") {
        		this.gfnGridAfterSelect(this.dxGridSub);
        		this.colCheck = false ;
        	}
        	else if(svcID == "save") {
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
        //코드파인드의 파라미터 값을 넘겨줄때 사용하는 함수
        this.fnBeforeUserDataSetParam = function(id, dsUserParam, nrow) {

        // 	if (id == "ccfCD_SITE") {
        //
        // 		dsUserParam.setColumn(nrow, "CD_CORP", "01");
        // 	}
        //
        	return true;
        }
        /************************************************************************
         * 그리드 이벤트
         ************************************************************************/
        this.fnGrid_BeforeUserDataSetParam = function(id, dsUserParam, nrow) {
        // 	if(id == "ccfCD_SITE_HD")
        // 	{
        // 		dsUserParam.setColumn(nrow, "CD_CORP", this.AuthClient.CD_CORP);
        // 		dsUserParam.setColumn(nrow, "CD_CORP", "");
        // 		dsUserParam.setColumn(nrow, "CD_DEPT", "");
        // 		dsUserParam.setColumn(nrow, "ID_USER", "");
        // 		dsUserParam.setColumn(nrow, "GR_SEARCH", "");
        // 	}


        	return true;
        }
        /************************************************************************
         * 기타 이벤트
         ************************************************************************/
        this.dsSearch_onvaluechanged = function(obj,e)
        {
        	if(e.oldvalue != e.newvalue) {
        		this.gfnSetFormStatus(this);	// 폼상태 초기화
        		this.gfnGridClear(this.dxGrid);
        	}
        };




        this.dsList_oncolumnchanged = function(obj,e)
        {
        	if(e.oldvalue != e.newvalue)
        	{
        		var flag = this.gfnGetFlag(this.dsList, e.row);
        		var ynCheck = this.dsCheck.lookup( "COL_NM", e.columnid, "YN_CHECK" );
        		if( ynCheck == "Y" )  this.colCheck = true;
        	}

        };


        this.divData_divDataBottom_objGridSub_oncelldblclick = function(obj,e)
        {
        	var colnm = this.gfnGridGetBindColumnNameByIndex(obj, e.cell);

        	if(colnm != "FILE_NM") {
        		var param = {};
        		param.CD_TEMPSITE = this.dsList.getColumn(this.dsList.rowposition, "CD_TEMPSITE");
        		param.NO_HIS = this.dsListSub.getColumn(this.dsListSub.rowposition, "NO_HIS");

        		this.gfnFormOpen(this.FormInfo.CD_MODULE, "DZE_OBTAIN_ORDER_HIS", "",  param, 650, 500);
        	}
        };

        //그리드 첨부파일.
         this.fnGridSub_ExpandUp = function(obj,e) {
        	var colnm = this.gfnGridGetBindColumnNameByIndex(obj, e.cell);
        	if(colnm == "FILE_NM") {
        		var nIndex = this.dsListSub.rowposition;

        		var fileManager = {};
        			fileManager.CD_GUBUN = "DZ10";
        			fileManager.CD_DIR = [this.dsListSub.getColumn(nIndex, "CD_TEMPSITE"), this.dsListSub.getColumn(nIndex, "NO_HIS")];
        			fileManager.IS_READONLY = false;

        		this.gfnFileManager(fileManager, "fnOpenFileManagerGrid_callback");
        	}
        }

        //그리드 첨부 재조회
         this.fnOpenFileManagerGrid_callback = function()
         {
        	//this.fnSelect();
        	this.FormBtns.Select.click();
         }

        //그리드 변경시 상태값 체크
        this.dsList_canrowposchange = function(obj,e) {
        	var can_rowchange = true;
        	//for (var i = 0; i < this.dsList.rowcount; i++) {
        		var flag = this.gfnGetFlag(this.dsList, this.dsList.rowposition);
        		if (flag == "I" || flag == "U" || flag == "D") {
        			can_rowchange = false;
        			//break;
        		}
        	//}
        	if(!can_rowchange) {
        		this._row = e.newrow;
        		this.gfnConfirm("변경된 데이터가 있습니다.\r\n 변경내역을 저장 하시겠습니까?", "dsList_canrowposchange_callback");
        	}
        	return can_rowchange;
        }

        //변경이력 때문에 초기화->저장으로 변경
        this.dsList_canrowposchange_callback = function(strId, val)
        {
        	if(val == true) {
        		this.FormBtns.Save.click();
        	}
        }


        //그리드 이력 조회
        this.fnGrid_RowCellChanged = function(obj,e)
        {
            //if ((obj.oldrow > -1 && obj.oldrow == e.row) || (obj.oldrow == -1 && e.oldrow != e.row)) {
        	if (e.oldrow != e.row) {
        		this.fnSelectSub();
        	}
        };


        // 작성권한 부서에 따른 공통버튼 제어
        this.fnButtonAUTH_Chk = function()
        {
        	//공통 버튼 리스트 - Select, Add, Del, Save, Excel, Print
        	//작성권한 부서인지 체크
        	var nFindRow = this.dsComboDz98.findRow("CD_CODE" , this.AuthClient.CD_DEPT  );

        	if( nFindRow == -1 ) {
        		this.FormBtns.Add.set_enable(false);
        		this.FormBtns.Save.set_enable(false);
        		this.FormBtns.Del.set_enable(false);
        	}else{
        		this.FormBtns.Add.set_enable(true);
        		this.FormBtns.Save.set_enable(true);
        		this.FormBtns.Del.set_enable(true);
        	}

        }







        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.form_onload,this);
            this.divData.addEventHandler("ondragmove",this.divData_ondragmove,this);
            this.divData.form.divSplitter.addEventHandler("ondrag",this.divData_divSplitter_ondrag,this);
            this.divData.form.divDataBottom.form.objGridSub.addEventHandler("oncelldblclick",this.divData_divDataBottom_objGridSub_oncelldblclick,this);
            this.dsList.addEventHandler("oncolumnchanged",this.dsList_oncolumnchanged,this);
            this.dsSearch.addEventHandler("onvaluechanged",this.dsSearch_onvaluechanged,this);
        };
        this.loadIncludeScript("DZE_OBTAIN_ORDER.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
