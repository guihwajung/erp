(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("DWD_SHGISUNG");
            this.set_titletext("직영기성목록");
            if (Form == this.constructor)
            {
                this._setFormPosition(1280,720);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("dsList", this);
            obj._setContents("");
            this.addChild(obj.name, obj);


            obj = new Dataset("_dsProc", this);
            obj._setContents("<ColumnInfo><Column id=\"TARGET\" type=\"STRING\" size=\"256\"/><Column id=\"SP\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"TARGET\">select</Col><Col id=\"SP\">DWDPR_SHGISUNG_LIST_SELECT</Col></Row><Row><Col id=\"TARGET\">finish</Col><Col id=\"SP\">DWBPR_JIKGISUNGMAGAM_OK</Col></Row><Row><Col id=\"TARGET\">cancel</Col><Col id=\"SP\">DWBPR_JIKGISUNGMAGAM_CANCEL</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsSearch", this);
            obj._setContents("<ColumnInfo><Column id=\"CD_SITE\" type=\"STRING\" size=\"256\"/><Column id=\"YM_WORK\" type=\"STRING\" size=\"256\"/><Column id=\"NO_HADOCONT\" type=\"STRING\" size=\"256\"/><Column id=\"YN_PURCS\" type=\"STRING\" size=\"256\"/><Column id=\"YN_SRVCE\" type=\"STRING\" size=\"256\"/><Column id=\"YN_LEASE\" type=\"STRING\" size=\"256\"/><Column id=\"YN_DIRCT\" type=\"STRING\" size=\"256\"/><Column id=\"YN_TUJA\" type=\"STRING\" size=\"256\"/><Column id=\"DS_SITE\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row/></Rows>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Div("divSearch","0.0","10.0",null,"46.0","0",null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_cssclass("div_SEARCH_Bg");
            obj.set_formscrolltype("none");
            obj.set_text("");
            this.addChild(obj.name, obj);

            obj = new Static("staCD_SITE","0.0","10.0","92.0","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("2");
            obj.set_text("현장코드");
            obj.set_cssclass("sta_WF_SchLabelE");
            this.divSearch.addChild(obj.name, obj);

            obj = new Div("ccfCD_SITE","staCD_SITE:0.0","10.0","200","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.getSetter("CodeFindName").set("DZX_CFSITE");
            obj.getSetter("CDTextWidth").set("80");
            obj.set_taborder("0");
            obj.set_url("cmm::cmmCodeFind.xfdl");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("staYM_WORK","ccfCD_SITE:0.0","10.0","92.0","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("3");
            obj.set_text("기성년월");
            obj.set_cssclass("sta_WF_SchLabelE");
            this.divSearch.addChild(obj.name, obj);

            obj = new Div("ctclYM_WORK","staYM_WORK:0.0","10.0","80","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("1");
            obj.set_url("cmm::cmmCalMM.xfdl");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("sta00","ctclYM_WORK:0.0","10.0","92.0","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("4");
            obj.set_text("계약번호");
            obj.set_cssclass("sta_WF_SchLabel");
            this.divSearch.addChild(obj.name, obj);

            obj = new Div("ccfNO_HADOCONT","sta00:0.0","10.0","250","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.getSetter("CDTextWidth").set("80");
            obj.set_taborder("5");
            obj.set_url("cmm::cmmCodeFind.xfdl");
            obj.getSetter("CodeFindName").set("DWX_CFHADO_JIK");
            this.divSearch.addChild(obj.name, obj);

            obj = new Div("divData","0","divSearch:10",null,null,"0","0",null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_cssclass("div_DATA_Bg");
            this.addChild(obj.name, obj);

            obj = new Grid("objGrid","0","0",null,null,"0","0",null,null,null,null,this.divData.form);
            obj.set_taborder("0");
            obj.set_treeinitstatus("collapse,all");
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

            obj = new BindItem("item1","divSearch.form.ctclYM_WORK.form.TextBox","value","dsSearch","YM_WORK");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item2","divSearch.form.ccfNO_HADOCONT.form.CDTextBox","value","dsSearch","NO_HADOCONT");
            this.addChild(obj.name, obj);
            obj.bind();
            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {
            this._addPreloadList("fdl","cmm::cmmCodeFind.xfdl");
            this._addPreloadList("fdl","cmm::cmmCalMM.xfdl");
        };
        
        // User Script
        this.registerScript("DWD_SHGISUNG_LIST.xfdl", function() {
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
        // 	this.dsSearch.setColumn(0, "CD_SITE", this.getOwnerFrame().CD_SITE);
        // 	this.ccfCD_SITE.form.DSTextBox.set_value(this.getOwnerFrame().DS_SITE);
        // 	this.dsSearch.setColumn(0, "YM_WORK", this.getOwnerFrame().YM_WORK);

        	if(!this.gfnIsNull(this.getOwnerFrame().CD_SITE) && !this.gfnIsNull(this.getOwnerFrame().DS_SITE)
        	 && !this.gfnIsNull(this.getOwnerFrame().YM_WORK))
        	 {
        		this.dsSearch.setColumn(0, "CD_SITE", this.getOwnerFrame().CD_SITE);
        		this.divSearch.form.ccfCD_SITE.form.DSTextBox.set_value(this.getOwnerFrame().DS_SITE);
        		this.dsSearch.setColumn(0, "YM_WORK", (this.getOwnerFrame().YM_WORK).substr(0,6));

        		this.FormBtns.Select.click();
        	 }
        	 else
        	 {
        		var today = this.gfnGetDate().substr(0, 6);
        		this.dsSearch.setColumn(0, "YM_WORK", today);
        	 }
        // 	this.gfnGridColumnColor(this.dxGrid, "NO_HADOCONT", "blue", "NO_HADOCONT != ''");
        // 	this.gfnGridColumnColor(this.dxGrid, "DS_HADOCONT", "blue", "NO_HADOCONT != ''");


        	this.fnSetGridCellCss();
        };

        /************************************************************************
         * 그리드 호출 후 설정
         * 그리드 컬럼 css 처리
         ************************************************************************/
        this.fnSetGridCellCss = function(){
        	this.dxGrid.setCellProperty("body", 31, "cssclass", "expr:DS_UNIT =='식'?'BACK_ReadOnly':''");
        	this.dxGrid.setCellProperty("body", 32, "cssclass", "expr:DS_UNIT =='식'?'BACK_ReadOnly':''");

        }

        /************************************************************************
         * 버튼 설정 : 화면(Tab) 전환시 마다 호출
         * 서브버튼 사용 및 공통버튼 강제 제어시 여기서 처리
         ************************************************************************/
        this.fnSetButton = function() {
        	this.FormBtns.Add.set_enable(false);
        	this.FormBtns.Del.set_enable(false);

        }

        /************************************************************************
         * 확장 버튼 : 화면별 버튼 설정 ID, function 연결 (화면버튼관리)
         ************************************************************************/
        this.fnSetExtendButton = function() {
        	this.btnFinish = this.gfnFormButtonAdd("btnFinish", "fnFinish");
            this.btnCancel = this.gfnFormButtonAdd("btnCancel", "fnCancel");
        	this.btnCopy = this.gfnFormButtonAdd("btnCopy", "fnCopy");
        	this.btnMove = this.gfnFormButtonAdd("btnMove", "fnMove");
        };



        /************************************************************************
         * 직영기성마감 버튼 클릭 이벤트
         ************************************************************************/
        this.fnFinish = function(obj,e) {
        	/*this.fnExecute("finish");*/
        	var msg = "현장코드 : [" + this.dsSearch.getColumn(0, "CD_SITE") + "] " + this.divSearch.form.ccfCD_SITE.form.DSTextBox.text
        			+ "\n기성년월 : [" + this.dsSearch.getColumn(0, "YM_WORK").substr(0,6) + "]"
        			+ "\n\n직영기성마감 하시겠습니까?";

        	this.gfnConfirm(msg, "fnExecute", "finish");
        }

        /************************************************************************
         * 직영마감취소 버튼 클릭 이벤트
         ************************************************************************/
        this.fnCancel = function(obj,e) {
        	/*this.fnExecute("cancel");*/
        	var msg = "현장코드 : [" + this.dsSearch.getColumn(0, "CD_SITE") + "] " + this.divSearch.form.ccfCD_SITE.form.DSTextBox.text
        			+ "\n기성년월 : [" + this.dsSearch.getColumn(0, "YM_WORK").substr(0,6) + "]"
        			+ "\n\n직영기성마감취소 하시겠습니까?";

        	this.gfnConfirm(msg, "fnExecute", "cancel");
        }

        /************************************************************************
         * 원가내역복사 버튼 클릭 이벤트
         ************************************************************************/
        this.fnCopy = function(obj,e) {
        	this.fnCopyCost();
        }


        /************************************************************************
         * 버튼이벤트 프로시저 호출
         ************************************************************************/
        this.fnExecute = function(ty_wrk,val)
        {
        	if(val == true)
        	{
        		if(this.gfnIsNull(this.dsSearch.getColumn(0, "CD_SITE"))){
        			this.gfnAlert("선택된 현장이 없습니다.");
        			return false;
        		}

        		if(this.gfnIsNull(this.dsSearch.getColumn(0, "YM_WORK"))){
        			this.gfnAlert("선택된 기성년월이 없습니다.");
        			return false;
        		}

        		this.dsExecute.clearData();
        		var nrow = this.dsExecute.addRow();
        		this.dsExecute.setColumn(nrow, "TY_WRK", ty_wrk);
        		this.dsExecute.setColumn(nrow, "ID_USER", this.AuthClient.ID_USER);
        		this.dsExecute.setColumn(nrow, "CD_SITE", this.dsSearch.getColumn(0, "CD_SITE"));
        		this.dsExecute.setColumn(nrow, "YM_WORK", this.dsSearch.getColumn(0, "YM_WORK"));

        		//var strSvcId    = "execute";
        		var strSvcId    = ty_wrk;
        		var strSvcType  = "save";
        		var inProc		= "_dsProc";
        		var inData      =  ty_wrk+"=dsExecute";
        		var outData     = "";
        		var strArg      = "gubun=" + ty_wrk;
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

        this.dsList_oncolumnchanged = function(obj,e)
        {
           if(e.oldvalue != e.newvalue){
              this.fnCalcRow(e.columnid, e.row);
           }
        };

        this.fnCalcRow = function(colnm, row) {
        	trace("### fnCalcRow");
        	if(colnm == "QN_DOKUBGS"){
        		this.dsList.setColumn(row, "AM_DOKUBGS", Math.floor(this.dsList.getColumn(row, "QN_DOKUBGS") * this.dsList.getColumn(row, "UP_TT_DOKUB")));
        		this.dsList.setColumn(row, "QN_TT_DOKUBGS", Math.floor(this.dsList.getColumn(row, "QN_DOKUBGS") + (this.dsList.getColumn(row, "QN_PP_DOKUBGS") )));
        		this.dsList.setColumn(row, "AM_TT_DOKUBGS", Math.floor(this.dsList.getColumn(row, "AM_PP_DOKUBGS") + (this.dsList.getColumn(row, "QN_DOKUBGS") * this.dsList.getColumn(row, "UP_TT_DOKUB"))));
        	}

        	if(colnm == "QN_SILHENGGS"){
        		this.dsList.setColumn(row, "AM_SILHENGGS", Math.floor(this.dsList.getColumn(row, "QN_SILHENGGS") * this.dsList.getColumn(row, "UP_TT_SILHENG")));
        		this.dsList.setColumn(row, "QN_TT_SILHENGGS", Math.floor(this.dsList.getColumn(row, "QN_SILHENGGS") + (this.dsList.getColumn(row, "QN_PP_SILHENGGS") )));
        		this.dsList.setColumn(row, "AM_TT_SILHENGGS", Math.floor(this.dsList.getColumn(row, "AM_PP_SILHENGGS") + (this.dsList.getColumn(row, "QN_SILHENGGS") * this.dsList.getColumn(row, "UP_TT_SILHENG"))));
        	}

        	if(colnm == "AM_DOKUBGS"){
        		this.dsList.setColumn(row, "AM_TT_DOKUBGS", Math.floor(this.dsList.getColumn(row, "AM_PP_SILHENGGS") + (this.dsList.getColumn(row, "AM_DOKUBGS") )));
        	}
        	if(colnm == "AM_SILHENGGS"){
        		this.dsList.setColumn(row, "AM_TT_SILHENGGS", Math.floor(this.dsList.getColumn(row, "AM_PP_SILHENGGS") + (this.dsList.getColumn(row, "AM_SILHENGGS") )));
        	}

        }

        /************************************************************************
         * 원가내역복사
         ************************************************************************/
        this.fnCopyCost = function(){
        	//trace("##cnt :"+this.dsList.rowcount);
        	for(var i = 0; i < this.dsList.rowcount; i++) {
        		trace("##QN_QUANTITY :"+this.dsList.getColumn(i, "QN_QUANTITY"));
        		trace("##UP_TT_DOKUB :"+this.dsList.getColumn(i, "UP_TT_DOKUB"));
        		trace("##UP_TT_SILHENG :"+this.dsList.getColumn(i, "UP_TT_SILHENG"));

        		this.dsList.setColumn(i, "QN_DOKUBGS", this.dsList.getColumn(i, "QN_QUANTITY"));
        		this.dsList.setColumn(i, "QN_SILHENGGS", this.dsList.getColumn(i, "QN_QUANTITY"));
        		this.dsList.setColumn(i, "AM_DOKUBGS", Math.floor(this.dsList.getColumn(i, "QN_QUANTITY") * this.dsList.getColumn(i, "UP_TT_DOKUB")));
        		this.dsList.setColumn(i, "AM_SILHENGGS", Math.floor(this.dsList.getColumn(i, "QN_QUANTITY") * this.dsList.getColumn(i, "UP_TT_SILHENG")));

        		this.dsList.setColumn(i, "QN_TT_DOKUBGS", Math.floor(this.dsList.getColumn(i, "QN_PP_DOKUBGS") + this.dsList.getColumn(i, "QN_QUANTITY")));
        		this.dsList.setColumn(i, "QN_TT_SILHENGGS", Math.floor(this.dsList.getColumn(i, "QN_PP_SILHENGGS") + this.dsList.getColumn(i, "QN_QUANTITY")));
        		this.dsList.setColumn(i, "AM_TT_DOKUBGS", Math.floor(this.dsList.getColumn(i, "AM_PP_DOKUBGS") + (this.dsList.getColumn(i, "QN_QUANTITY") * this.dsList.getColumn(i, "UP_TT_DOKUB"))));
        		this.dsList.setColumn(i, "AM_TT_SILHENGGS", Math.floor(this.dsList.getColumn(i, "AM_PP_SILHENGGS") + (this.dsList.getColumn(i, "QN_QUANTITY") * this.dsList.getColumn(i, "UP_TT_SILHENG"))));
        	}
        	this.gfnAlert("원가내역복사가 완료되었습니다..");

        };


        /************************************************************************
         * 직영기성작업 버튼 클릭 이벤트
         ************************************************************************/
        this.fnMove = function(obj,e) {
        	var param = {};
        	var rowposition = this.dsList.rowposition;

        	param.CD_SITE = this.dsSearch.getColumn(0, "CD_SITE");
        	//param.DS_SITE = this.dsSearch.getColumn(0, "DS_SITE");
        	param.DS_SITE = this.divSearch.form.ccfCD_SITE.form.DSTextBox.value;
        	param.YM_WORK = this.dsSearch.getColumn(0, "YM_WORK");

        	if(rowposition > -1){
        		param.NO_HADOCONT = this.dsList.getColumn(rowposition, "NO_HADOCONT");
        		param.DS_HADOCONT = this.dsList.getColumn(rowposition, "DS_HADOCONT");

        	}else{
        		param.NO_HADOCONT = "직영";
        		param.DS_HADOCONT = "미발주분";
        	}

        	this.gfnFormOpenNonAuth(this.FormInfo.CD_MODULE, "DWD_SHGISUNG", "fnDialogCallback", param);
        }

        this.fnDialogCallback = function(svcID, value) {
        	this.FormBtns.Select.click();
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
        	//this.divSearch.form.ccfCD_SITE.BeforeUserDataSetParam = 'fnBeforeUserDataSetParam';
        	this.divSearch.form.ccfNO_HADOCONT.BeforeUserDataSetParam = 'fnBeforeUserDataSetParam';


        	// 그리드 초기화
        	this.gfnGridInit(this.dxGrid, this.dsList, "DW", "DWB_SHGISUNG_LIST", "DS_ITEM");
        	this.dxGrid.EnterCell = "fnGrid_EnterCell";


        };

        /************************************************************************
         * 그리드 이벤트
         ************************************************************************/
        this.fnGrid_EnterCell = function(obj, row, cell){
        	var colnm = this.gfnGridGetBindColumnNameByIndex(this.dxGrid, cell);



        	if(colnm == "QN_DOKUBGS" || colnm == "QN_SILHENGGS"){
        		if(this.dsList.getColumn(row, "DS_UNIT")=='식'){
        			//trace("row : "+row);

        			return false;
        		}
        	}
        }


        /************************************************************************
         * 파라미터 설정
         ************************************************************************/
        this.fnSetParameter = function() {
        	this.dsSelect = new Dataset();
        	this.dsSelect.addColumn("CD_SITE", "string");
        	this.dsSelect.addColumn("YM_WORK", "string");
        	this.dsSelect.addColumn("NO_HADOCONT", "string");
        	this.dsSelect.addColumn("YN_PURCS", "string");
        	this.dsSelect.addColumn("YN_SRVCE", "string");
        	this.dsSelect.addColumn("YN_LEASE", "string");
        	this.dsSelect.addColumn("YN_PURCS", "string");
        	this.dsSelect.addColumn("YN_DIRCT", "string");
        	this.dsSelect.addColumn("YN_TUJA", "string");

        	this.dsExecute = new Dataset();
        	this.dsExecute.addColumn("TY_WRK", "string");
        	this.dsExecute.addColumn("ID_USER", "string");
        	this.dsExecute.addColumn("CD_SITE", "string");
        	this.dsExecute.addColumn("YM_WORK", "string");

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

        	this.dsSelect.setColumn(0, "CD_SITE", this.dsSearch.getColumn(0, "CD_SITE"));
        	this.dsSelect.setColumn(0, "YM_WORK", this.dsSearch.getColumn(0, "YM_WORK"));
        	this.dsSelect.setColumn(0, "NO_HADOCONT",  this.dsSearch.getColumn(0, "NO_HADOCONT"));
        	this.dsSelect.setColumn(0, "YN_PURCS",  this.dsSearch.getColumn(0, "YN_PURCS"));
        	this.dsSelect.setColumn(0, "YN_SRVCE",  this.dsSearch.getColumn(0, "YN_SRVCE"));
        	this.dsSelect.setColumn(0, "YN_LEASE",  this.dsSearch.getColumn(0, "YN_LEASE"));
        	this.dsSelect.setColumn(0, "YN_PURCS",  this.dsSearch.getColumn(0, "YN_PURCS"));
        	this.dsSelect.setColumn(0, "YN_DIRCT",  this.dsSearch.getColumn(0, "YN_DIRCT"));
        	//this.dsSelect.setColumn(0, "YN_TUJA",  this.dsSearch.getColumn(0, "YN_TUJA"));
        	this.dsSelect.setColumn(0, "YN_TUJA",  this.dsSearch.getColumn(0, "YN_TUJA") == "true" ? "Y":"N");



        	trace("## YN_TUJA :"+this.dsSelect.getColumn(0, "YN_TUJA"));

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
        	var nrow = this.gfnGridAdd(this.dxGrid); // top (default), bottom, current
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

        	if (this.gfnIsNull(this.dsSearch.getColumn(0, "CD_SITE"))) {
        		validate = false;
        		// Alert후 실행할 처리
        		this.fnVaidateCallback = function() {
        			this.divSearch.form.ccfCD_SITE.form.CDTextBox.setFocus();
        		}
        		this.gfnAlert("현장코드를 입력하세요.", "fnVaidateCallback");
        	}
        	else if (this.gfnIsNull(this.dsSearch.getColumn(0, "YM_WORK"))) {
        		validate = false;
        		// Alert후 실행할 처리
        		this.fnVaidateCallback = function() {
        			this.divSearch.form.ctclYM_WORK.setFocus();
        		}
        		this.gfnAlert("기성년월을 입력하세요.", "fnVaidateCallback");
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
        	}
        	else if(svcID == "save") {
        		if (errorCode == 0) {
        			this.FormBtns.Select.click();
        		} else {
        			this.gfnAlert(errorMsg);
        		}
        	}
        	else if(svcID == "finish") {
        		if (errorCode == 0) {
        			var msg = "직영기성마감이 정상 처리되었습니다.";
        			this.gfnAlert(msg, "fnExecuteCallback");
        		}else{
        			this.gfnAlert(errorMsg);
        		}
        	}
        	else if(svcID == "cancel") {
        		if (errorCode == 0) {
        			var msg = "직영마감취소가 정상 처리되었습니다.";
        			this.gfnAlert(msg, "fnExecuteCallback");
        		}else{
        			this.gfnAlert(errorMsg);
        		}
        	}
        	/*else if(svcID == "execute") {
        		if (errorCode == 0) {
        			this.fnExecuteCallback = function()
        			{
        				this.FormBtns.Select.click();
        			}

        			var json = this.gfnArgsToJson(strArg);
        			strArg = json.gubun;

        			var msg = "";

        			trace("### strArg:"+strArg);
        			switch(strArg)
        			{
        				case "finish" : msg = "직영기성마감이 "; break;
        				case "cancel" : msg = "직영마감취소가 "; break;

        			}

        			msg += "정상 처리되었습니다.";
        			this.gfnAlert(msg, "fnExecuteCallback");
        		}else {
         			this.gfnAlert(errorMsg);
         		}
        	}*/

        }

        /************************************************************************
         * 코드파인드 이벤트
         ************************************************************************/
        //코드파인드의 파라미터 값을 넘겨줄때 사용하는 함수
        this.fnBeforeUserDataSetParam = function(id, dsUserParam, nrow) {

        	if (id == "ccfCD_SITE") {
        		dsUserParam.setColumn(nrow, "CD_CORP", this.objApp.gdsUserInfo.getColumn(0, "CD_CORP"));	// 현장코드
        		dsUserParam.setColumn(nrow, "CD_SAUPCENTER", "");	// 현장코드
        	}

        	if (id == "ccfNO_HADOCONT") {
        		var cd_site = this.dsSearch.getColumn(0, "CD_SITE");
        		if (this.gfnIsNull(cd_site)) {
         			this.gfnAlert("현장코드를 먼저 입력하세요.");
         			return false;
         		}
        		dsUserParam.setColumn(nrow, "CD_SITE", cd_site);	// 현장코드
        	}
        	return true;
        }

        /************************************************************************
         * 그리드 이벤트
         ************************************************************************/

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


        this.divData_objGrid_oncelldblclick = function(obj,e)
        {
        	if (obj.getCellPropertyValue(e.row, e.cell, 'cssclass') != 'BACK_ReadOnly')
        	{
        		return false;
        	}
        	this.fnMove();

        };

        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.form_onload,this);
            this.divData.form.objGrid.addEventHandler("oncelldblclick",this.divData_objGrid_oncelldblclick,this);
            this.dsList.addEventHandler("oncolumnchanged",this.dsList_oncolumnchanged,this);
            this.dsSearch.addEventHandler("onvaluechanged",this.dsSearch_onvaluechanged,this);
        };
        this.loadIncludeScript("DWD_SHGISUNG_LIST.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
