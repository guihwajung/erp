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
            this.set_titletext("거래처삭제정보");
            if (Form == this.constructor)
            {
                this._setFormPosition(1280,720);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("dsList", this);
            obj._setContents("");
            this.addChild(obj.name, obj);


            obj = new Dataset("_dsProc", this);
            obj._setContents("<ColumnInfo><Column id=\"TARGET\" type=\"STRING\" size=\"256\"/><Column id=\"SP\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"TARGET\">select</Col><Col id=\"SP\">DHZPR_UNUSEVENDOR_SELECT</Col></Row><Row><Col id=\"TARGET\">update</Col><Col id=\"SP\">DHZPR_VENDOR_RESTORE</Col></Row><Row><Col id=\"TARGET\">delete</Col><Col id=\"SP\">DHZPR_VENDOR_PERM_DELETE</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsTY_TYPE", this);
            obj._setContents("<ColumnInfo><Column id=\"CD_CODE\" type=\"STRING\" size=\"256\"/><Column id=\"DS_CODE\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"CD_CODE\">C</Col><Col id=\"DS_CODE\">코드</Col></Row><Row><Col id=\"CD_CODE\">N</Col><Col id=\"DS_CODE\">명칭</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsVENDOR_TYPE", this);
            obj._setContents("<ColumnInfo><Column id=\"CODE\" type=\"STRING\" size=\"256\"/><Column id=\"VALUE\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"CODE\">A</Col><Col id=\"VALUE\">전체</Col></Row><Row><Col id=\"CODE\">F</Col><Col id=\"VALUE\">일반</Col></Row><Row><Col id=\"CODE\">B</Col><Col id=\"VALUE\">금융</Col></Row><Row><Col id=\"CODE\">P</Col><Col id=\"VALUE\">개인</Col></Row><Row><Col id=\"CODE\">X</Col><Col id=\"VALUE\">기타</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsSearch", this);
            obj._setContents("<ColumnInfo><Column id=\"TY_TYPE\" type=\"STRING\" size=\"256\"/><Column id=\"VENDOR_TYPE\" type=\"STRING\" size=\"256\"/><Column id=\"CD_VENDOR\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"TY_TYPE\">N</Col><Col id=\"VENDOR_TYPE\">A</Col><Col id=\"CD_VENDOR\"/></Row></Rows>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Div("divSearch","0.0","10.0",null,"46.0","0",null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_cssclass("div_SEARCH_Bg");
            obj.set_formscrolltype("none");
            this.addChild(obj.name, obj);

            obj = new Static("sta01","0.0","10.0","92.0","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("4");
            obj.set_text("조회조건");
            obj.set_cssclass("sta_WF_SchLabel");
            this.divSearch.addChild(obj.name, obj);

            obj = new Radio("ccboTY_TYPE","sta01:0.0","10.0","100","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("2");
            obj.set_innerdataset("dsTY_TYPE");
            obj.set_datacolumn("DS_CODE");
            obj.set_codecolumn("CD_CODE");
            obj.set_direction("vertical");
            this.divSearch.addChild(obj.name, obj);

            obj = new Combo("ccboVENDOR_TYPE","ccboTY_TYPE:0.0","10.0","120","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("9");
            obj.set_innerdataset("dsVENDOR_TYPE");
            obj.set_datacolumn("VALUE");
            obj.set_codecolumn("CODE");
            obj.set_text("");
            obj.set_value("0");
            obj.set_index("0");
            this.divSearch.addChild(obj.name, obj);

            obj = new Edit("txtSEARCH","ccboVENDOR_TYPE:0.0","10.0","120","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("1");
            this.divSearch.addChild(obj.name, obj);

            obj = new Div("divData","0","divSearch:10",null,null,"0","0",null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_cssclass("div_DATA_Bg");
            this.addChild(obj.name, obj);

            obj = new Div("divDataLeft","0","0","560",null,null,"0",null,null,null,null,this.divData.form);
            obj.set_taborder("0");
            this.divData.addChild(obj.name, obj);

            obj = new Grid("objGrid","0","0",null,null,"0","0",null,null,null,null,this.divData.form.divDataLeft.form);
            obj.set_taborder("0");
            obj._setContents("");
            this.divData.form.divDataLeft.addChild(obj.name, obj);

            obj = new Div("divDataRight","divDataLeft:10","0",null,null,"0","0",null,null,null,null,this.divData.form);
            obj.set_taborder("0");
            obj.set_text("");
            this.divData.addChild(obj.name, obj);

            obj = new Static("sta00","0","0","100%","22",null,null,null,null,null,null,this.divData.form.divDataRight.form);
            obj.set_taborder("0");
            obj.set_text("상세정보");
            obj.set_cssclass("sta_TITLE_Bg");
            this.divData.form.divDataRight.addChild(obj.name, obj);

            obj = new Static("sta01","0","30","100","30",null,null,null,null,null,null,this.divData.form.divDataRight.form);
            obj.set_taborder("1");
            obj.set_text("거래처코드");
            obj.set_cssclass("sta_WF_tablelabel");
            this.divData.form.divDataRight.addChild(obj.name, obj);

            obj = new Static("sta02","0","sta01:-1","100","30",null,null,null,null,null,null,this.divData.form.divDataRight.form);
            obj.set_taborder("2");
            obj.set_text("거래처명칭");
            obj.set_cssclass("sta_WF_tablelabel");
            this.divData.form.divDataRight.addChild(obj.name, obj);

            obj = new Static("sta03","0","sta02:-1","100","30",null,null,null,null,null,null,this.divData.form.divDataRight.form);
            obj.set_taborder("3");
            obj.set_text("사업자등록번호");
            obj.set_cssclass("sta_WF_tablelabel");
            this.divData.form.divDataRight.addChild(obj.name, obj);

            obj = new Static("sta04","0","sta03:-1","100","30",null,null,null,null,null,null,this.divData.form.divDataRight.form);
            obj.set_taborder("4");
            obj.set_text("대표자명");
            obj.set_cssclass("sta_WF_tablelabel");
            this.divData.form.divDataRight.addChild(obj.name, obj);

            obj = new Static("sta05","0","sta04:-1","100","30",null,null,null,null,null,null,this.divData.form.divDataRight.form);
            obj.set_taborder("5");
            obj.set_text("우편번호");
            obj.set_cssclass("sta_WF_tablelabel");
            this.divData.form.divDataRight.addChild(obj.name, obj);

            obj = new Static("sta06","0","sta05:-1","100","30",null,null,null,null,null,null,this.divData.form.divDataRight.form);
            obj.set_taborder("6");
            obj.set_text("주소");
            obj.set_cssclass("sta_WF_tablelabel");
            this.divData.form.divDataRight.addChild(obj.name, obj);

            obj = new Static("sta07","0","sta06:-1","100","30",null,null,null,null,null,null,this.divData.form.divDataRight.form);
            obj.set_taborder("7");
            obj.set_text("전화번호");
            obj.set_cssclass("sta_WF_tablelabel");
            this.divData.form.divDataRight.addChild(obj.name, obj);

            obj = new Static("sta08","0","sta07:-1","100","30",null,null,null,null,null,null,this.divData.form.divDataRight.form);
            obj.set_taborder("7");
            obj.set_text("핸드폰번호");
            obj.set_cssclass("sta_WF_tablelabel");
            this.divData.form.divDataRight.addChild(obj.name, obj);

            obj = new Static("sta09","0","sta08:-1","100","30",null,null,null,null,null,null,this.divData.form.divDataRight.form);
            obj.set_taborder("7");
            obj.set_text("업종");
            obj.set_cssclass("sta_WF_tablelabel");
            this.divData.form.divDataRight.addChild(obj.name, obj);

            obj = new Static("sta10","0","sta09:-1","100","30",null,null,null,null,null,null,this.divData.form.divDataRight.form);
            obj.set_taborder("7");
            obj.set_text("업태");
            obj.set_cssclass("sta_WF_tablelabel");
            this.divData.form.divDataRight.addChild(obj.name, obj);

            obj = new Static("sta11","0","sta10:-1","100","30",null,null,null,null,null,null,this.divData.form.divDataRight.form);
            obj.set_taborder("7");
            obj.set_text("비고");
            obj.set_cssclass("sta_WF_tablelabel");
            this.divData.form.divDataRight.addChild(obj.name, obj);

            obj = new Static("sta12","sta01:-1","30","600","30",null,null,null,null,null,null,this.divData.form.divDataRight.form);
            obj.set_taborder("14");
            obj.set_cssclass("sta_WF_tablebg");
            this.divData.form.divDataRight.addChild(obj.name, obj);

            obj = new Static("sta13","sta02:-1","sta12:-1","600","30",null,null,null,null,null,null,this.divData.form.divDataRight.form);
            obj.set_taborder("15");
            obj.set_cssclass("sta_WF_tablebg");
            this.divData.form.divDataRight.addChild(obj.name, obj);

            obj = new Static("sta14","sta03:-1","sta13:-1","600","30",null,null,null,null,null,null,this.divData.form.divDataRight.form);
            obj.set_taborder("16");
            obj.set_cssclass("sta_WF_tablebg");
            this.divData.form.divDataRight.addChild(obj.name, obj);

            obj = new Static("sta15","sta04:-1","sta14:-1","600","30",null,null,null,null,null,null,this.divData.form.divDataRight.form);
            obj.set_taborder("17");
            obj.set_cssclass("sta_WF_tablebg");
            this.divData.form.divDataRight.addChild(obj.name, obj);

            obj = new Static("sta16","sta05:-1","sta15:-1","600","30",null,null,null,null,null,null,this.divData.form.divDataRight.form);
            obj.set_taborder("18");
            obj.set_cssclass("sta_WF_tablebg");
            this.divData.form.divDataRight.addChild(obj.name, obj);

            obj = new Static("sta17","sta06:-1","sta16:-1","600","30",null,null,null,null,null,null,this.divData.form.divDataRight.form);
            obj.set_taborder("19");
            obj.set_cssclass("sta_WF_tablebg");
            this.divData.form.divDataRight.addChild(obj.name, obj);

            obj = new Static("sta18","sta07:-1","sta17:-1","600","30",null,null,null,null,null,null,this.divData.form.divDataRight.form);
            obj.set_taborder("20");
            obj.set_cssclass("sta_WF_tablebg");
            this.divData.form.divDataRight.addChild(obj.name, obj);

            obj = new Static("sta19","sta08:-1","sta18:-1","600","30",null,null,null,null,null,null,this.divData.form.divDataRight.form);
            obj.set_taborder("20");
            obj.set_cssclass("sta_WF_tablebg");
            this.divData.form.divDataRight.addChild(obj.name, obj);

            obj = new Static("sta20","sta09:-1","sta19:-1","600","30",null,null,null,null,null,null,this.divData.form.divDataRight.form);
            obj.set_taborder("20");
            obj.set_cssclass("sta_WF_tablebg");
            this.divData.form.divDataRight.addChild(obj.name, obj);

            obj = new Static("sta21","sta10:-1","sta20:-1","600","30",null,null,null,null,null,null,this.divData.form.divDataRight.form);
            obj.set_taborder("20");
            obj.set_cssclass("sta_WF_tablebg");
            this.divData.form.divDataRight.addChild(obj.name, obj);

            obj = new Static("sta22","sta11:-1","sta21:-1","600","30",null,null,null,null,null,null,this.divData.form.divDataRight.form);
            obj.set_taborder("20");
            obj.set_cssclass("sta_WF_tablebg");
            this.divData.form.divDataRight.addChild(obj.name, obj);

            obj = new Edit("edt00","sta01:5","35","350","20",null,null,null,null,null,null,this.divData.form.divDataRight.form);
            obj.set_taborder("28");
            this.divData.form.divDataRight.addChild(obj.name, obj);

            obj = new Edit("edt01","sta02:5","edt00:9","350","20",null,null,null,null,null,null,this.divData.form.divDataRight.form);
            obj.set_taborder("28");
            this.divData.form.divDataRight.addChild(obj.name, obj);

            obj = new Edit("edt02","sta03:5","edt01:9","350","20",null,null,null,null,null,null,this.divData.form.divDataRight.form);
            obj.set_taborder("28");
            this.divData.form.divDataRight.addChild(obj.name, obj);

            obj = new Edit("edt03","sta04:5","edt02:9","350","20",null,null,null,null,null,null,this.divData.form.divDataRight.form);
            obj.set_taborder("28");
            this.divData.form.divDataRight.addChild(obj.name, obj);

            obj = new Edit("edt04","sta05:5","edt03:9","350","20",null,null,null,null,null,null,this.divData.form.divDataRight.form);
            obj.set_taborder("28");
            this.divData.form.divDataRight.addChild(obj.name, obj);

            obj = new Edit("edt05","sta06:5","edt04:9","350","20",null,null,null,null,null,null,this.divData.form.divDataRight.form);
            obj.set_taborder("28");
            this.divData.form.divDataRight.addChild(obj.name, obj);

            obj = new Edit("edt06","sta07:5","edt05:9","350","20",null,null,null,null,null,null,this.divData.form.divDataRight.form);
            obj.set_taborder("28");
            this.divData.form.divDataRight.addChild(obj.name, obj);

            obj = new Edit("edt07","sta08:5","edt06:9","350","20",null,null,null,null,null,null,this.divData.form.divDataRight.form);
            obj.set_taborder("28");
            this.divData.form.divDataRight.addChild(obj.name, obj);

            obj = new Edit("edt08","sta09:5","edt07:9","350","20",null,null,null,null,null,null,this.divData.form.divDataRight.form);
            obj.set_taborder("28");
            this.divData.form.divDataRight.addChild(obj.name, obj);

            obj = new Edit("edt09","sta10:5","edt08:9","350","20",null,null,null,null,null,null,this.divData.form.divDataRight.form);
            obj.set_taborder("28");
            this.divData.form.divDataRight.addChild(obj.name, obj);

            obj = new Edit("edt10","sta11:5","edt09:9","350","20",null,null,null,null,null,null,this.divData.form.divDataRight.form);
            obj.set_taborder("28");
            this.divData.form.divDataRight.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this
            obj = new Layout("default","",this._adjust_width,this._adjust_height,this,function(p){});
            this.addLayout(obj.name, obj);
            
            // BindItem Information
            obj = new BindItem("item0","divSearch.form.ccboTY_TYPE","value","dsSearch","TY_TYPE");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item1","divSearch.form.ccboVENDOR_TYPE","value","dsSearch","VENDOR_TYPE");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item2","divSearch.form.txtSEARCH","value","dsSearch","CD_VENDOR");
            this.addChild(obj.name, obj);
            obj.bind();
            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script
        this.registerScript("DHZ_UNUSEVENDOR.xfdl", function() {
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
        	//this.FormBtns.Select.set_enable(false);
        }

        /************************************************************************
         * 확장 버튼 : 화면별 버튼 설정 ID, function 연결 (화면버튼관리)
         ************************************************************************/
        this.fnSetExtendButton = function() {
        	this.btnRestore = this.gfnFormButtonAdd("Restore", "fnRestore");
        	this.btnDelete = this.gfnFormButtonAdd("Delete", "fnDelete");
        };

        /************************************************************************
         * 변수 선언
         ************************************************************************/
        this.fnSetVariable = function() {
        	this.ccboTY_TYPE = this.divSearch.form.ccboTY_TYPE;
        	this.ccboVENDOR_TYPE = this.divSearch.form.ccboVENDOR_TYPE;
        	this.txtSEARCH = this.divSearch.form.txtSEARCH;
        	this.dxGrid = this.divData.form.divDataLeft.form.objGrid;
        };

        /************************************************************************
         * 이벤트 설정
         ************************************************************************/
        this.fnSetEvent = function() {

        	// 그리드 초기화
        	this.gfnGridInit(this.dxGrid, this.dsList, "DH", "DHZ_UNUSEVENDOR");

        	// 셀 수정가능 여부
        	this.dxGrid.EnterCell = "fnGrid_EnterCell";

        	// 셀 변경 후 이벤트
        	this.dxGrid.AfterEdit = "fnGrid_AfterEdit";

        	// 그리드 코드파인드 설정
        	this.dxGrid.BeforeUserDataSetParam = "fnGrid_BeforeUserDataSetParam";

        	// 전체체크박스 체크/해제 이벤트
        	this.dxGrid.AfterAllCheck = "fnGrid_AfterAllCheck";

        	// BUTTON, BUTTON-IN 처리
        	this.dxGrid.addEventHandler("onexpandup", this.fnGrid_ExpandUp, this);

        };

        /************************************************************************
         * 파라미터 설정
         ************************************************************************/
        this.fnSetParameter = function() {

        	this.dsSelect = new Dataset();
        	this.dsSelect.addColumn("TYPE_SELECT", "string");
        	this.dsSelect.addColumn("CD_VENDOR", "string");

        	this.dsUpdate = new Dataset();
        	this.dsUpdate.addColumn("CD_VENDOR", "string");

        	this.dsDelete = new Dataset();
        	this.dsDelete.addColumn("CD_VENDOR", "string");
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
        	this.dsSelect.setColumn(0, "TYPE_SELECT", this.dsSearch.getColumn(0, "TY_TYPE"));
        	this.dsSelect.setColumn(0, "CD_VENDOR", this.dsSearch.getColumn(0, "VENDOR_TYPE"));

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
        }

        /*
         *	삭제 버튼
         */
        this.fnDel = function() {
        }

        /*
         *	저장 버튼
         */
        this.fnSave = function() {
        }

        /*
         *	엑셀 버튼
         */
        this.fnExcel = function() {
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
        	}
        }

        /************************************************************************
         * 코드파인드 이벤트
         ************************************************************************/

        /************************************************************************
         * 그리드 이벤트
         ************************************************************************/
        this.fnGrid_EnterCell = function(obj, row, cell) {
        	var colnm = this.gfnGridGetBindColumnNameByIndex(obj, cell);
        	return true;
        }

        this.fnGrid_AfterEdit = function(obj,e) {
        }

        this.fnGrid_BeforeUserDataSetParam = function(id, dsUserParam, nrow) {
        }

        this.fnGrid_AfterAllCheck = function(obj, cell, check) {
        	var colnm = this.gfnGridGetBindColumnNameByIndex(obj, cell);
        	if(colnm == "CHK") {
        		trace("fnGrid_AfterAllCheck] " + col + "," + check);
        	}
        }

        this.fnGrid_ExpandUp = function(obj,e) {
        	var colnm = this.gfnGridGetBindColumnNameByIndex(obj, e.cell);
        	if(colnm == "BUTTON") {
        		this.gfnAlert("BUTTON 처리");
        	}
        	else if (colnm == "BUTTON_IN") {
        		this.gfnAlert("BUTTON-IN 처리");
        	}
        }
        /************************************************************************
         * 기타 이벤트
         ************************************************************************/
        /*
         *	조회 조건 변경시 초기화
         */
        this.fnSearchInit = function(obj,e) {
        	if(e == null || (e.pretext != e.posttext)) {
        		this.gfnSetFormStatus(this);	// 폼상태 초기화
        		this.gfnGridClear(this.dxGrid);
        	}
        };

        this.fnRestore = function(obj,e) {
        	if (!this.gfnGridIsRow(this.dxGrid)) { return false; }
        	this.gfnConfirm("복원하시겠습니까?", "fnRestore_callback");
        }

        this.fnRestore_callback = function(strId, val)
        {
        	if(val == true) {
        	if (!this.gfnGridValidate(this.dxGrid)) return;

        	this.dxGrid.updateToDataset();
        	this.dsDelete.clearData();

        	var nrow = this.dsUpdate.addRow();
        	this.dsUpdate.setColumn(nrow, "CD_VENDOR", this.dsList.getColumn(this.dsList.rowposition, "CD_VENDOR"));

        	var strSvcId    = "save";
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
        }

        this.fnDelete = function(obj,e) {
        	if (!this.gfnGridIsRow(this.dxGrid)) { return false; }
        	this.gfnConfirm("DB에서 영구 삭제되어 복구할 수 없습니다! 그래도 삭제 하시겠습니까?", "fnDelete_callback");
        }
        this.fnDelete_callback = function(strId, val)
        {
        	if(val == true) {
        	if (!this.gfnGridValidate(this.dxGrid)) return;

        	this.dxGrid.updateToDataset();
        	this.dsDelete.clearData();

        	var nrow = this.dsDelete.addRow();
        	this.dsDelete.setColumn(nrow, "CD_VENDOR", this.dsList.getColumn(this.dsList.rowposition, "CD_VENDOR"));

        	var strSvcId    = "save";
        	var strSvcType  = "save";
        	var inProc		= "_dsProc";
        	var inData      = "delete=dsDelete";
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

        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.form_onload,this);
            this.divSearch.form.ccboVENDOR_TYPE.addEventHandler("onitemchanged",this.fnSearchInit,this);
            this.divSearch.form.txtSEARCH.addEventHandler("onkeydown",this.divSearch_txtSEARCH_onkeydown,this);
            this.dsTY_TYPE.addEventHandler("onvaluechanged",this.dsSearch_onvaluechanged,this);
        };
        this.loadIncludeScript("DHZ_UNUSEVENDOR.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
