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
            this.set_titletext("도급기성-하도직불");
            if (Form == this.constructor)
            {
                this._setFormPosition(1090,500);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("dsList", this);
            obj._setContents("<ColumnInfo><Column id=\"AM_DIRECT\" type=\"BIGDECIMAL\" size=\"256\"/><Column id=\"DS_RM\" type=\"STRING\" size=\"256\"/><Column id=\"NO_HADOCONT\" type=\"STRING\" size=\"256\"/><Column id=\"DS_HADOCONT\" type=\"STRING\" size=\"256\"/><Column id=\"NO_SJC\" type=\"STRING\" size=\"256\"/><Column id=\"DS_VENDOR\" type=\"STRING\" size=\"256\"/><Column id=\"DS_DAEPYO\" type=\"STRING\" size=\"256\"/><Column id=\"DT_HDCONT\" type=\"STRING\" size=\"256\"/><Column id=\"AM_HDCONT_PROV\" type=\"BIGDECIMAL\" size=\"256\"/><Column id=\"AM_HDCONT_VAT\" type=\"BIGDECIMAL\" size=\"256\"/><Column id=\"AM_HDCONT_TOT\" type=\"BIGDECIMAL\" size=\"256\"/><Column id=\"CD_FIELD\" type=\"STRING\" size=\"256\"/><Column id=\"NO_CONT\" type=\"INT\" size=\"256\"/><Column id=\"NO_DMD\" type=\"INT\" size=\"256\"/><Column id=\"NO_COLT\" type=\"INT\" size=\"256\"/><Column id=\"NO_DIRECT\" type=\"INT\" size=\"256\"/><Column id=\"ID_ADD\" type=\"STRING\" size=\"256\"/><Column id=\"CD_SLIP\" type=\"STRING\" size=\"256\"/><Column id=\"TY_DIRECT\" type=\"STRING\" size=\"256\"/><Column id=\"AM_JTDIRECT\" type=\"BIGDECIMAL\" size=\"256\"/><Column id=\"CD_VENDOR\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("_dsProc", this);
            obj._setContents("<ColumnInfo><Column id=\"TARGET\" type=\"STRING\" size=\"256\"/><Column id=\"SP\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"TARGET\">select</Col><Col id=\"SP\">DOFPR_HADO_DIRECT_SELECT</Col></Row><Row><Col id=\"TARGET\">save</Col><Col id=\"SP\">DOFPR_HADO_DIRECT_MERGE</Col></Row><Row><Col id=\"TARGET\">saveChk</Col><Col id=\"SP\">DOFPR_HADO_DIRECT_CHECK</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsSearch", this);
            obj._setContents("<ColumnInfo><Column id=\"CD_FIELD\" type=\"STRING\" size=\"256\"/><Column id=\"DS_FIELD\" type=\"STRING\" size=\"256\"/><Column id=\"NO_CONT\" type=\"INT\" size=\"256\"/><Column id=\"NO_DMD\" type=\"INT\" size=\"256\"/><Column id=\"NO_COLT\" type=\"INT\" size=\"256\"/><Column id=\"AM_UNCOLT_TOT\" type=\"BIGDECIMAL\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"AM_UNCOLT_TOT\">0</Col></Row></Rows>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Div("divSearch","0.0","10.0",null,"78.0","0",null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_cssclass("div_SEARCH_Bg");
            obj.set_formscrolltype("none");
            this.addChild(obj.name, obj);

            obj = new Static("staCD_BONBU","0.0","10.0","105.0","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("0");
            obj.set_text("현장코드");
            obj.set_textDecoration("none");
            obj.set_cssclass("sta_WF_SchLabel");
            this.divSearch.addChild(obj.name, obj);

            obj = new Edit("ctxtCD_FIELD","0.0","staCD_BONBU:10.0","66","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("1");
            obj.set_value("");
            obj.set_readonly("true");
            this.divSearch.addChild(obj.name, obj);

            obj = new Edit("ctxtDS_FIELD","ctxtCD_FIELD:0.0","staCD_BONBU:10.0","500","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("2");
            obj.set_value("");
            obj.set_readonly("true");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("staCD_BONBU00","0.0","10.0","105.0","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("3");
            obj.set_text("청구 회차");
            obj.set_textDecoration("none");
            obj.set_cssclass("sta_WF_SchLabel");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("staCD_BONBU00_00","staCD_BONBU00:0.0","10.0","105.0","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("5");
            obj.set_text("수금 회차");
            obj.set_textDecoration("none");
            obj.set_cssclass("sta_WF_SchLabel");
            this.divSearch.addChild(obj.name, obj);

            obj = new Edit("ctxtDS_FIELD00","0.0","staCD_BONBU:10.0","20","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("4");
            obj.set_value("");
            obj.set_readonly("true");
            this.divSearch.addChild(obj.name, obj);

            obj = new Edit("ctxtDS_FIELD00_00","ctxtDS_FIELD00:0.0","staCD_BONBU:10.0","20","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("6");
            obj.set_value("");
            obj.set_readonly("true");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("staCD_BONBU00_00_00","0.0","10.0","105.0","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("7");
            obj.set_text("미수금");
            obj.set_textDecoration("none");
            obj.set_cssclass("sta_WF_SchLabel");
            this.divSearch.addChild(obj.name, obj);

            obj = new MaskEdit("ctxtAM_COLT_TOT","staCD_BONBU00_00_00:0.0","staCD_BONBU:10.0","132","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("8");
            obj.set_value("");
            obj.set_textAlign("right");
            obj.set_format("#,0");
            obj.set_autoselect("true");
            obj.set_readonly("true");
            this.divSearch.addChild(obj.name, obj);

            obj = new Div("divData","0","55",null,null,"0","0",null,null,null,null,this);
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
            obj = new BindItem("item0","divSearch.form.ctxtCD_FIELD","value","dsSearch","CD_FIELD");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item1","divSearch.form.ctxtDS_FIELD","value","dsSearch","DS_FIELD");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item2","divSearch.form.ctxtDS_FIELD00","value","dsSearch","NO_DMD");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item3","divSearch.form.ctxtDS_FIELD00_00","value","dsSearch","NO_COLT");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item4","divSearch.form.ctxtAM_COLT_TOT","value","dsSearch","AM_UNCOLT_TOT");
            this.addChild(obj.name, obj);
            obj.bind();
            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script
        this.registerScript("DOF_HADO_DIRECT.xfdl", function() {
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

        	this.dsSearch.setColumn(0, "CD_FIELD", this.getOwnerFrame().CD_FIELD);
        	this.dsSearch.setColumn(0, "DS_FIELD", this.getOwnerFrame().DS_FIELD);
        	this.dsSearch.setColumn(0, "NO_CONT", this.getOwnerFrame().NO_CONT);
        	this.dsSearch.setColumn(0, "NO_DMD", this.getOwnerFrame().NO_DMD);
        	this.dsSearch.setColumn(0, "NO_COLT", this.getOwnerFrame().NO_COLT);
        	this.dsSearch.setColumn(0, "AM_UNCOLT_TOT", this.getOwnerFrame().AM_UNCOLT_TOT);

        	this.FormBtns.Select.click();
        };


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
        	this.btnHadoInfo = this.gfnFormButtonAdd("btnHadoInfo", "fnbtnHadoInfo"); //하도대장
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
        	this.gfnGridInit(this.dxGrid, this.dsList, "DO", "DOF_HADO_DIRECT");
        	// 그리드 코드파인드 설정
        	this.dxGrid.BeforeUserDataSetParam = "fnGrid_BeforeUserDataSetParam";

        	// 그리드 코드파인드 값 변경
        	this.dxGrid.AfterCDTextChanged = "fnGrid_AfterCDTextChanged";
        };


        this.fnGrid_BeforeUserDataSetParam = function(id, dsUserParam, nrow) {
        	// 그리드에서 코드파인드 id는 그리드셋팅의 코드파인드 식별ID
        	if (id == "DOXPR_HADOCONT_CODEFIND") {
        		dsUserParam.setColumn(nrow, "CD_FIELD", this.dsSearch.getColumn(0, "CD_FIELD"));
         	}
        	else if (id == "DOX_CFACNTUNIT") {

        	}
        	else if (id == "DOX_DIRECT_SLIP") { // 전표번호
        	var CD_DEPT_ACNT = this.dsList.getColumn(this.dsList.rowposition, "CD_DEPT_ACNT");
        		if(this.gfnIsNull(CD_DEPT_ACNT)) {
        			this.gfnAlert("귀속부서를 먼저 선택하시기 바랍니다.");
        			return false;
        		}
        		dsUserParam.setColumn(nrow, "CD_SITE", CD_DEPT_ACNT);
        		dsUserParam.setColumn(nrow, "CD_VENDOR", this.dsList.getColumn(this.dsList.rowposition, "CD_VENDOR"));
         	}
        	return true;
        }

        this.fnGrid_AfterCDTextChanged = function(id, codeFindData) {
        // 	if(id == "DOXPR_HADOCONT_CODEFIND") {
        // 		var arr = codeFindData;
        // 		if(arr.length > 0) {
        // 			var NO_HADOCONT = arr[0].NO_HADOCONT;
        // 			var chkCnt = this.dsList.getCaseCount("NO_HADOCONT == '" + NO_HADOCONT + "'");
        // 			if(chkCnt > 1){
        // 				this.gfnAlert("하도계약번호 코드가 중복입니다.");
        // 				this.dsList.setColumn(this.dsList.rowposition,"NO_HADOCONT","");
        // 				this.dsList.setColumn(this.dsList.rowposition,"DS_HADOCONT","");
        // 				this.dsList.setColumn(this.dsList.rowposition,"AM_DIRECT","");
        // 				this.dsList.setColumn(this.dsList.rowposition,"NO_SJC","");
        // 				this.dsList.setColumn(this.dsList.rowposition,"DS_VENDOR","");
        // 				this.dsList.setColumn(this.dsList.rowposition,"DS_DAEPYO","");
        // 				this.dsList.setColumn(this.dsList.rowposition,"DT_HDCONT","");
        // 				this.dsList.setColumn(this.dsList.rowposition,"AM_HDCONT_PROV","");
        // 				this.dsList.setColumn(this.dsList.rowposition,"AM_HDCONT_VAT","");
        // 				this.dsList.setColumn(this.dsList.rowposition,"AM_HDCONT_TOT","");
        //
        // 				return false;
        // 			}
        // 		}
        // 	}
            if (id == "DOX_DIRECT_SLIP") {
        		var arr = codeFindData;
        		if(arr.length > 0) {
        			 this.dsList.setColumn(this.dsList.rowposition,"CD_VENDOR",arr[0].CD_VENDOR);
        			 this.dsList.setColumn(this.dsList.rowposition,"DS_VENDOR",arr[0].DS_VENDOR);
        			 this.dsList.setColumn(this.dsList.rowposition,"NO_SJC",arr[0].NO_SJC);
        		}
         	}

        	return true;
        };

        /************************************************************************
         * 파라미터 설정
         ************************************************************************/
        this.fnSetParameter = function() {

        	this.dsSelect = new Dataset();
        	this.dsSelect.addColumn("CD_FIELD", "string");
        	this.dsSelect.addColumn("NO_CONT", "int");
        	this.dsSelect.addColumn("NO_DMD", "int");
        	this.dsSelect.addColumn("NO_COLT", "int");
        }

        this.fnSelect = function(){
        	this.gfnGridBeforeSelect(this.dxGrid);

        	this.dsSelect.clearData();
        	this.dsSelect.addRow();

        	this.dsSelect.setColumn(0, "CD_FIELD", this.dsSearch.getColumn(0, "CD_FIELD"));
        	this.dsSelect.setColumn(0, "NO_CONT", this.dsSearch.getColumn(0, "NO_CONT"));
        	this.dsSelect.setColumn(0, "NO_DMD", this.dsSearch.getColumn(0, "NO_DMD"));
        	this.dsSelect.setColumn(0, "NO_COLT", this.dsSearch.getColumn(0, "NO_COLT"));

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
        						strArg, 		// 입력갑스로 보낼 arguments, strFormData="20120607"
        						callBackFnc);   // 통신방법 정의 [생략가능]
        }


        /************************************************************************
         * 콜백 이벤트
         ************************************************************************/
        /*
         *	콜백 처리
         */
        this.fnCallback = function(svcID, errorCode, errorMsg)
        {
        	if (errorCode == 0) {
        		if(svcID == "select"){
        			this.gfnGridAfterSelect(this.dxGrid);
        		} else if(svcID == "save") {
        			this.FormBtns.Select.click();
        		}
        	} else {
        		this.gfnAlert(errorMsg);
        	}
        };


        /*
         *	입력 버튼
         */
        this.fnAdd = function() {
        	var nrow = this.gfnGridAdd(this.dxGrid, "bottom"); // top (default), bottom, current
        	//this.dsList.set_updatecontrol(false);
        	this.dsList.setColumn(nrow, "CD_DEPT_ACNT", this.dsSearch.getColumn(0, "CD_FIELD"));
        	this.dsList.setColumn(nrow, "DS_DEPT_ACNT", this.dsSearch.getColumn(0, "DS_FIELD"));
        	this.dsList.setColumn(nrow, "CD_FIELD", this.dsSearch.getColumn(0, "CD_FIELD"));
        	this.dsList.setColumn(nrow, "NO_CONT", this.dsSearch.getColumn(0, "NO_CONT"));
        	this.dsList.setColumn(nrow, "NO_DMD", this.dsSearch.getColumn(0, "NO_DMD"));
        	this.dsList.setColumn(nrow, "NO_COLT", this.dsSearch.getColumn(0, "NO_COLT"));
        	this.dsList.setColumn(nrow, "ID_ADD", this.objApp.gdsUserInfo.getColumn(0, "ID_USER"));

        	//this.dsList.set_updatecontrol(true);
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
        	if (this.dsList.rowcount == 0) return;

        	for(var i=0; i < this.dsList.getRowCount(); i++){
        		if(!this.gfnIsNull(this.dsList.getColumn(i, "nx_flag"))){
        			this.dsList.setColumn(i, "ID_ADD", this.objApp.gdsUserInfo.getColumn(0, "ID_USER"));
        		}
        	}

        	var strSvcId    = "save";
        	var strSvcType  = "save";
        	var inProc		= "_dsProc";
        	var inData      = "save=dsList saveChk=dsSearch";
        	var outData     = "";
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
         * 확장 버튼 : 화면별 버튼 설정 ID, function 연결 (화면버튼관리)
         * 하도대장
         ************************************************************************/
        this.fnHadoInfo = function(obj,e){

        }

        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.form_onload,this);
        };
        this.loadIncludeScript("DOF_HADO_DIRECT.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
