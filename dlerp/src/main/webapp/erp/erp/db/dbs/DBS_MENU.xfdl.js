(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("DBS_MENU");
            this.set_titletext("콜센터 메뉴");
            if (Form == this.constructor)
            {
                this._setFormPosition(1280,720);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("dsList", this);
            obj._setContents("");
            this.addChild(obj.name, obj);


            obj = new Dataset("_dsProc", this);
            obj._setContents("<ColumnInfo><Column id=\"TARGET\" type=\"STRING\" size=\"256\"/><Column id=\"SP\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"TARGET\">select</Col><Col id=\"SP\">DBLPR_MENU_SELECT</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsAPT_ST_GU", this);
            obj._setContents("<ColumnInfo><Column id=\"CD_CODE\" type=\"STRING\" size=\"256\"/><Column id=\"DS_CODE\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"CD_CODE\">1</Col><Col id=\"DS_CODE\">아파트</Col></Row><Row><Col id=\"CD_CODE\">2</Col><Col id=\"DS_CODE\">상가</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsSearch", this);
            obj._setContents("<ColumnInfo><Column id=\"ACC_CODE\" type=\"STRING\" size=\"256\"/><Column id=\"DH_CD1\" type=\"STRING\" size=\"256\"/><Column id=\"DH_CD2\" type=\"STRING\" size=\"256\"/><Column id=\"CONT_DEG\" type=\"STRING\" size=\"256\"/><Column id=\"APT_ST_GU\" type=\"STRING\" size=\"256\"/><Column id=\"DS_HNAME\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row/></Rows>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Div("divSearch","0.0","10.0",null,"46.0","0",null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_cssclass("div_SEARCH_Bg");
            this.addChild(obj.name, obj);

            obj = new Static("staACC_CODE","0.0","10.0","92.0","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("3");
            obj.set_text("단지코드");
            obj.set_cssclass("sta_WF_SchLabel");
            this.divSearch.addChild(obj.name, obj);

            obj = new Div("ccfACC_CODE","staACC_CODE:0.0","10.0","300","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.getSetter("CodeFindName").set("DLX_CFACNTUNIT");
            obj.getSetter("CDTextWidth").set("50");
            obj.set_taborder("0");
            obj.set_url("cmm::cmmCodeFind.xfdl");
            obj.getSetter("BeforeUserDataSetParam").set("fnBeforeUserDataSetParam");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("staNO_DONG","ccfACC_CODE:0.0","10.0","92.0","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("4");
            obj.set_text("동호");
            obj.set_cssclass("sta_WF_SchLabel");
            this.divSearch.addChild(obj.name, obj);

            obj = new Div("ccfDH_CD","staNO_DONG:0.0","10.0","175","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.getSetter("CDTextWidth").set("70");
            obj.set_taborder("1");
            obj.set_url("cmm::cmmCodeFind.xfdl");
            obj.set_text("");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("staAPT_ST_GU","ccfDH_CD:0.0","10.0","92.0","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("5");
            obj.set_text("아파트/상가 구분");
            obj.set_textDecoration("none");
            obj.set_cssclass("sta_WF_SchLabel");
            this.divSearch.addChild(obj.name, obj);

            obj = new Combo("cboAPT_ST_GU","staAPT_ST_GU:0.0","10.0","90","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("2");
            obj.set_innerdataset("dsAPT_ST_GU");
            obj.set_datacolumn("DS_CODE");
            obj.set_codecolumn("CD_CODE");
            obj.set_text("아파트");
            obj.set_value("1");
            obj.set_index("0");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("staAPT_ST_GU00","cboAPT_ST_GU:0.0","10.0","92.0","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("6");
            obj.set_text("고객명");
            obj.set_textDecoration("none");
            obj.set_cssclass("sta_WF_SchLabel");
            this.divSearch.addChild(obj.name, obj);

            obj = new Edit("edtDS_HNAME","staAPT_ST_GU00:0.0","10.0","7.36%","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("7");
            obj.set_readonly("true");
            this.divSearch.addChild(obj.name, obj);

            obj = new Div("divData","0","divSearch:10",null,null,"0","0",null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_cssclass("div_DATA_Bg");
            obj.set_text("");
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
            obj = new BindItem("item3","divSearch.form.ccfACC_CODE.form.CDTextBox","value","dsSearch","ACC_CODE");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item0","divSearch.form.ccfDH_CD.form.CDTextBox","value","dsSearch","DH_CD1");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item1","divSearch.form.ccfDH_CD.form.DSTextBox","value","dsSearch","DH_CD2");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item2","divSearch.form.cboAPT_ST_GU","value","dsSearch","APT_ST_GU");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item4","divSearch.form.edtDS_HNAME","value","dsSearch","DS_HNAME");
            this.addChild(obj.name, obj);
            obj.bind();
            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {
            this._addPreloadList("fdl","cmm::cmmCodeFind.xfdl");
        };
        
        // User Script
        this.registerScript("DBS_MENU.xfdl", function() {
        this.objApp = this.gfnGetApplication();

        this.form_onload = function(obj,e)
        {

        	// -- 필수 -------------------//
        	this.gfnFormOnLoad(this);
        	this.gfnFormInfo(this);
        	// ---------------------------//

        	this.fnSetButton();
        	this.fnSetExtendButton();
        	this.fnSetParameter();
        	this.fnSetVariable();
        	this.fnSetEvent();

        	this.FormBtns.Select.click();
        };

        /************************************************************************
         * 버튼 설정 : 화면(Tab) 전환시 마다 호출
         ************************************************************************/
        this.fnSetButton = function() {
        	// 입력버튼 사용안함
        	//this.alert(this.FormBtns.Add.enable);
        	//this.FormBtns.Add.set_enable(true);
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
        	this.ccfACC_CODE = this.divSearch.form.ccfACC_CODE;    //단지코드
        	this.ccfDH_CD = this.divSearch.form.ccfDH_CD;          // 동호
        	this.cboAPT_ST_GU = this.divSearch.form.cboAPT_ST_GU;  // 아파트/상가 구분

        	this.dxGrid = this.divData.form.objGrid;

        	// 단지코드 버튼크기 조정
        	var nWidth = nexacro.toNumber(this.ccfACC_CODE.form.CDTextBox.width) + 20;
        	this.ccfACC_CODE.form.CDTextBox.set_width(nWidth);
        	nWidth = nWidth + nexacro.toNumber(this.ccfACC_CODE.form.CDTextBox.left) + 3;
        	this.ccfACC_CODE.form.BtnSearch.set_left(nWidth);

        	nWidth = nWidth + nexacro.toNumber(this.ccfACC_CODE.form.BtnSearch.width) + 3;
        	this.ccfACC_CODE.form.DSTextBox.set_left(nWidth);

        	this.cboAPT_ST_GU.set_index(0);
        	this.isCall = false;

        	// 파라미터가 있을 경우
        	if ( !this.gfnIsNull(this.getOwnerFrame().acc_code) ) {
        		this.isCall = true;
        		this.ccfACC_CODE.form.CDTextBox.set_value(this.gfnNvl(this.getOwnerFrame().acc_code,""));
        		this.ccfACC_CODE.form.fnCodeFindLoad();
        		this.ccfDH_CD.form.CDTextBox.set_value(this.gfnNvl(this.getOwnerFrame().dh_cd1,""));
        		this.ccfDH_CD.form.DSTextBox.set_value(this.gfnNvl(this.getOwnerFrame().dh_cd2,""));
        		this.cboAPT_ST_GU.set_value(this.gfnNvl(this.getOwnerFrame().apt_st_gu,""));
        		this.dsSearch.setColumn(0,"CONT_DEG",this.gfnNvl(this.getOwnerFrame().cont_deg,""));
        		this.dsSearch.setColumn(0,"DS_HNAME",this.gfnNvl(this.getOwnerFrame().ds_hname,""));

        		this.ccfACC_CODE.form.set_readonly(true);
        		this.ccfDH_CD.form.set_readonly(true);
        		this.cboAPT_ST_GU.set_readonly(true);
        	}

        	this.dsSearch.addEventHandler("onvaluechanged", this.dsSearch_onvaluechanged, this);
        };

        /************************************************************************
         * 이벤트 설정
         ************************************************************************/
        this.fnSetEvent = function() {
        	this.ccfACC_CODE.BeforeUserDataSetParam = "fnBeforeUserDataSetParam";
        	this.ccfDH_CD.CodeFindName = "DLX_CFDONGHO_DETAIL_CODEFIND";
        	this.ccfDH_CD.BeforeUserDataSetParam = "fnBeforeUserDataSetParam";
        	this.ccfDH_CD.AfterCDTextChanged = "fnAfterCDTextChanged";

        	this.gfnGridInit(this.dxGrid, this.dsList, "DB", "DBL_MENU");  // pForm.gfnGridInit = function(objGrid, objDs, cd_system, id_grid, tree_column, level_column, is_manual)
        	//this.dxGrid.set_selecttype("cell");	// IE경우만 multiarea모드에서 master선택후 마우스 이동 빠르게 할 경우 버그가 있어서 cell 모드로 변경

        	this.dxGrid.addEventHandler("oncellclick", this.dxGrid_oncellclick, this);

        }

        /************************************************************************
         * 파라미터 설정
         ************************************************************************/
        this.fnSetParameter = function() {

        	this.dsSelect = new Dataset();
        	this.dsSelect.addColumn("ACC_CODE", "string");

        }

        /************************************************************************
         * 컨트롤 이벤트
         ************************************************************************/
         /*
          *	조회 버튼
          */
        this.fnSelect = function() {
        	this.gfnGridBeforeSelect(this.dxGrid);

        	this.dsList.clearData();
        	this.dsSelect.clearData();
        	this.dsSelect.addRow();
        	this.dsSelect.setColumn(0, "ACC_CODE", "");

        	var strSvcId    = "select";
        	var strSvcType  = "grid";
        	var inProc		= "_dsProc";
        	var inData      = "select=dsSelect";
        	//var outData     = "dsList=select0 dsChart2=select1";
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

        }

        /*
         *	저장 버튼
         */
        this.fnSave = function() {
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
        		this.dsList.set_rowposition(0);
        	}
        }

        /************************************************************************
         * 코드파인드 이벤트
         ************************************************************************/
        /*
         * 코드파인드 Before
         */
        this.fnBeforeUserDataSetParam = function(id, dsUserParam, nrow) {
        	if (id == "ccfACC_CODE") {
        		if( this.isCall ) {
        			this.isCall = false;
        		} else {
        			dsUserParam.setColumn(nrow, "CD_DEPT", this.AuthClient.CD_DEPT);
        			dsUserParam.setColumn(nrow, "ID_USER", this.AuthClient.ID_USER);
        			dsUserParam.setColumn(nrow, "ID_GROUP", this.FormInfo.ID_GROUP);
        			dsUserParam.setColumn(nrow, "GR_SEARCH", this.FormInfo.GR_SEARCH);
        		}
        	} else if (id == "ccfDH_CD"){
         		if (this.gfnIsNull(this.dsSearch.getColumn(0, "ACC_CODE"))) {
         			this.gfnAlert("단지코드를 먼저 입력하세요.");
         			return false;
         		}
        		dsUserParam.setColumn(nrow, "CD_ACNTUNIT", this.dsSearch.getColumn(0, "ACC_CODE"));
        		dsUserParam.setColumn(nrow, "TY_BUNYANG", "");
        		dsUserParam.setColumn(nrow, "APT_ST_GU", this.dsSearch.getColumn(0, "APT_ST_GU"));
        	}
        	return true;
        };

        /*
         * 코드파인드 After
         */
        this.fnAfterCDTextChanged = function(id, codeFindData) {

        	if(id == "ccfDH_CD"){
        		var arr = codeFindData;
        		if(arr.length > 0 ){
        			this.dsSearch.setColumn(0, "DH_CD1", arr[0]["NO_DONG"]);
        			this.dsSearch.setColumn(0, "DH_CD2", arr[0]["NO_HO"]);
        			this.dsSearch.setColumn(0, "CONT_DEG", arr[0]["CONT_DEG"]);

        		} else{
        			this.dsSearch.setColumn(0, "DH_CD1", "");
        			this.dsSearch.setColumn(0, "DH_CD2", "");
        			this.dsSearch.setColumn(0, "CONT_DEG", "");
        		}

        		trace(this.dsSearch.saveXML());
        	}
        };
        /************************************************************************
         * 그리드 이벤트
         ************************************************************************/
         /*
          * 그리드 더블 클릭
          */
         this.dxGrid_oncellclick = function(obj,e)
        {
        	if( e.row < 0 ) return false;
        	if ( this.dsList.getColumn(this.dsList.rowposition,"ID_FORM") != "DBS_AS_EXCEL" && this.dsList.getColumn(this.dsList.rowposition,"ID_FORM") != "DBS_JEOBSU_GONGA" && this.dsList.getColumn(this.dsList.rowposition,"ID_FORM") != "DBS_GONGA_STATE"){
        		if( this.gfnIsNull(this.dsSearch.getColumn(0,"ACC_CODE")) ){
        			this.gfnAlert("단지코드를 입력하세요!");
        			this.ccfACC_CODE.setFocus();
        			return false;
        		}
        		if (    this.dsList.getColumn(this.dsList.rowposition,"ID_FORM") != "DLC_ACCOUNT_CALL"
        		    &&  this.dsList.getColumn(this.dsList.rowposition,"ID_FORM") != "DLC_ENFORCE_CALL"
        			&&  this.dsList.getColumn(this.dsList.rowposition,"ID_FORM") != "DLA_001_CALL") {
        			if( this.gfnIsNull(this.dsSearch.getColumn(0,"DH_CD1")) ){
        				this.gfnAlert("동호를 입력하세요!");
        				this.ccfDH_CD.setFocus();
        				return false;
        			}
        		}
        	}
        	var url = nexacro.replaceAll(window.location.href,window.location.search,"") + "?ID_FORM="+this.dsList.getColumn(this.dsList.rowposition,"ID_FORM")+"&ACC_CODE="+this.gfnNvl(this.dsSearch.getColumn(0,"ACC_CODE"),"")+"&DH_CD1="+this.gfnNvl(this.dsSearch.getColumn(0,"DH_CD1"),"")+"&DH_CD2="+this.gfnNvl(this.dsSearch.getColumn(0,"DH_CD2"),"")+"&CONT_DEG="+this.gfnNvl(this.dsSearch.getColumn(0,"CONT_DEG"),"")+"&APT_ST_GU="+this.gfnNvl(this.dsSearch.getColumn(0,"APT_ST_GU"),"")
        	window.open(url,"_blank", "width=1350,height=720,menubar=no,scrollbars=no,resizable=no,status=no");
        };
        /************************************************************************
         * 확장버튼 이벤트
         ************************************************************************/

        /************************************************************************
         * 기타 이벤트
         ************************************************************************/
         this.dsSearch_onvaluechanged = function(obj,e)
        {
        	if(e.oldvalue != e.newvalue){
        		if (e.columnid == "ACC_CODE") {
        			this.dsSearch.setColumn(0, "DH_CD1", "");
        			this.dsSearch.setColumn(0, "DH_CD2", "");
        			this.dsSearch.setColumn(0, "CONT_DEG", "");
        		}
        	}
        }
        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.form_onload,this);
            this.divData.addEventHandler("ondragmove",this.divData_ondragmove,this);
            this.divData.form.objGrid.addEventHandler("oncellclick",this.divData_objGrid_oncellclick,this);
        };
        this.loadIncludeScript("DBS_MENU.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
