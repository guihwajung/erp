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
            this.set_titletext("본사계약입고송장");
            if (Form == this.constructor)
            {
                this._setFormPosition(800,380);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("_dsProc", this);
            obj._setContents("<ColumnInfo><Column id=\"TARGET\" type=\"STRING\" size=\"256\"/><Column id=\"SP\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"TARGET\">select</Col><Col id=\"SP\">DMBPR_INVOBAS_SELECT</Col></Row><Row><Col id=\"TARGET\">save</Col><Col id=\"SP\">DMBPR_INVOMST_SAVE</Col></Row><Row><Col id=\"TARGET\">select1</Col><Col id=\"SP\">DMBPR_INVOITEMFORGGPM_SELECT</Col></Row><Row><Col id=\"TARGET\">save1</Col><Col id=\"SP\">DMBPR_INVODTL_SAVE</Col></Row><Row><Col id=\"TARGET\">exec</Col><Col id=\"SP\">DMBPR_INVOSTK_ACT</Col></Row><Row><Col id=\"TARGET\">exec1</Col><Col id=\"SP\">DMBPR_INVOMST_SAVE</Col></Row><Row><Col id=\"TARGET\">combo</Col><Col id=\"SP\">DZXPR_COMBO_SELECT</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsSearch", this);
            obj._setContents("<ColumnInfo><Column id=\"TY_ACCOUNT\" type=\"STRING\" size=\"256\"/><Column id=\"CD_ACCOUNT_D\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"TY_ACCOUNT\"/><Col id=\"CD_ACCOUNT_D\"/></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsTY_ACCOUNT", this);
            obj._setContents("<ColumnInfo><Column id=\"CODE\" type=\"STRING\" size=\"256\"/><Column id=\"DATA\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"CODE\">01</Col><Col id=\"DATA\">과세</Col></Row><Row><Col id=\"CODE\">면세</Col><Col id=\"DATA\">면세</Col></Row><Row><Col id=\"CODE\">공존</Col><Col id=\"DATA\">공존</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsCD_ACCOUNT_D", this);
            obj._setContents("<ColumnInfo><Column id=\"CODE\" type=\"STRING\" size=\"256\"/><Column id=\"DATA\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"CODE\">과세</Col><Col id=\"DATA\">과세</Col></Row><Row><Col id=\"CODE\">면세</Col><Col id=\"DATA\">면세</Col></Row><Row><Col id=\"CODE\">공존</Col><Col id=\"DATA\">공존</Col></Row></Rows>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Div("divData","0","0",null,null,"0","0",null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_text("");
            obj.set_cssclass("div_DATA_Bg");
            this.addChild(obj.name, obj);

            obj = new Static("staBg00_00_00","86","63","234","30",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("7");
            obj.set_cssclass("sta_WF_tablebg");
            this.divData.addChild(obj.name, obj);

            obj = new Static("staDS_SITE00_00","0","34","87","30",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("0");
            obj.set_text("계정구분");
            obj.set_cssclass("sta_WF_tablelabel");
            obj.set_textAlign("center");
            this.divData.addChild(obj.name, obj);

            obj = new Static("staBg00_00","86","34","234","30",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("4");
            obj.set_cssclass("sta_WF_tablebg");
            this.divData.addChild(obj.name, obj);

            obj = new Combo("cboTY_ACCOUNT","95","39","219","20",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("1");
            obj.set_innerdataset("dsTY_ACCOUNT");
            obj.set_codecolumn("CD_CODE");
            obj.set_datacolumn("DS_CODE");
            this.divData.addChild(obj.name, obj);

            obj = new Static("staDS_SITE00_00_00","0","63","87","30",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("2");
            obj.set_text("차변계정");
            obj.set_cssclass("sta_WF_tablelabel");
            obj.set_textAlign("center");
            this.divData.addChild(obj.name, obj);

            obj = new Combo("cboCD_ACCOUNT_D","94","69","219","20",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("3");
            obj.set_innerdataset("dsCD_ACCOUNT_D");
            obj.set_codecolumn("CD_CODE");
            obj.set_datacolumn("DS_CODE");
            this.divData.addChild(obj.name, obj);

            obj = new Button("btnConfirm","95","107","60","20",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("5");
            obj.set_text("확인");
            this.divData.addChild(obj.name, obj);

            obj = new Button("btnCancel","177","107","60","20",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("6");
            obj.set_text("닫기");
            this.divData.addChild(obj.name, obj);

            obj = new Static("sta02","7","8","165","22",null,null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_text("송장정보");
            obj.set_cssclass("sta_TITLE_Bg");
            this.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this
            obj = new Layout("default","",this._adjust_width,this._adjust_height,this,function(p){});
            this.addLayout(obj.name, obj);
            
            // BindItem Information
            obj = new BindItem("item0","divData.form.cboTY_ACCOUNT","value","dsSearch","TY_ACCOUNT");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item1","divData.form.cboCD_ACCOUNT_D","value","dsSearch","CD_ACCOUNT_D");
            this.addChild(obj.name, obj);
            obj.bind();
            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script
        this.registerScript("DMB_INVOICEGGP_DLG.xfdl", function() {
        this.objApp = this.gfnGetApplication();

        this.form_onload = function(obj, e) {
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
        };

        this.fnSetCombo = function()
        {
        	this.dsCombo = new Dataset();
        	this.dsCombo.addColumn("CD_SYSTEM", "string");
        	this.dsCombo.addColumn("CD_TYPE", "string");

        	this.dsCombo.addRow();
        	this.dsCombo.setColumn(0, "CD_SYSTEM", "DM");
        	this.dsCombo.setColumn(0, "CD_TYPE", "M01");

        	var strSvcId    = "combo";
        	var strSvcType  = "select";
        	var inProc		= "_dsProc";
        	var inData      = "combo=dsCombo";
        	var outData     = "dsTY_ACCOUNT=combo0";// dsCD_ACCOUNT_D=combo1";
        	var strArg      = "";
        	var callBackFnc = "fnCallbackCombo";

        	this.gfnTransaction( strSvcId , 	// transaction을 구분하기 위한 svc id값
        						strSvcType , 	// transaction을 요청할 구분
        						inProc,			// Procedure 정보 Dataset 이름
        						inData , 		// 입력값으로 보낼 dataset id , a=b형태로 실제이름과 입력이름을 매칭
        						outData , 		// 처리결과값으로 받을 dataset id, a=b형태로 실제이름과 입력이름을 매칭
        						strArg, 		// 입력값으로 보낼 arguments, strFormData="20120607"
        						callBackFnc); // 통신방법 정의 [생략가능]
        }

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
        	this.btn1 = this.gfnFormButtonAdd("btnConfirm", "fnConfirm");
        };

        /************************************************************************
         * 변수 선언
         ************************************************************************/
        this.fnSetVariable = function() {
        };

        /************************************************************************
         * 이벤트 설정
         ************************************************************************/
        this.fnSetEvent = function() {
        };
        /************************************************************************
         * 파라미터 설정
         ************************************************************************/
        this.fnSetParameter = function() {
        }

        /************************************************************************
         * 컨트롤 이벤트
         ************************************************************************/
        /*
         *	조회 버튼
         */
        this.fnSelect = function() {
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
        this.fnPrint = function() {}

        /************************************************************************
         * Validate
         ************************************************************************/
        /*
         *	조회 Validate
         */
        this.fnValidate = function() {
        };

        /************************************************************************
         * 콜백 이벤트
         ************************************************************************/
        /*
         *	콜백 처리
         */
        this.fnCallback = function(svcID, errorCode, errorMsg) {

        }


        this.fnCloseForm = function() {
            this.getParentContext().close(null);
        }

        /************************************************************************
         * 코드파인드 이벤트
         ************************************************************************/
        //코드파인드의 파라미터 값을 넘겨줄때 사용하는 함수

        this.fnBeforeUserDataSetParam = function(id, dsUserParam, nrow) {
        }

        /************************************************************************
         * 그리드 이벤트
         ************************************************************************/


        /************************************************************************
         * 기타 이벤트
         ************************************************************************/
        /*
         *	조회1 버튼
         */

         this.fnConfirm = function(obj,e) {
        	var json = {};
        	json.TY_ACCOUNT 	= this.dsSearch.getColumn(0,"TY_ACCOUNT");
        	json.CD_ACCOUNT_D 	= this.dsSearch.getColumn(0,"CD_ACCOUNT_D");
        	json.STRID			= this.getOwnerFrame().STRID;

        	if(this.gfnIsNull(json.TY_ACCOUNT)) {
        		this.gfnAlert("계정구분을 선택하세요!!");
        		return;
        	};

        	if(this.gfnIsNull(json.CD_ACCOUNT_D)) {
        		this.gfnAlert("차변계정을 선택하세요!!");
        		return;
        	};

        	this.getParentContext().close(JSON.stringify(json));
         };

        this.divData_divDataTop_cboTY_ACCOUNT_onitemchanged = function(obj,e)
        {
        	this.fnTyAccountDSelect(obj.value);
        };

        this.fnTyAccountDSelect = function(cd)
        {
        	this.dsCombo.clearData();
        	this.dsCombo.addRow();
        	this.dsCombo.setColumn(0, "CD_SYSTEM", "DM");
        	this.dsCombo.setColumn(0, "CD_TYPE", cd);

        	var strSvcId    = "combo";
        	var strSvcType  = "select";
        	var inProc		= "_dsProc";
        	var inData      = "combo=dsCombo";
        	var outData     = "dsCD_ACCOUNT_D=combo0";
        	var strArg      = "";
        	var callBackFnc = "fnCallbackCombo";

        	this.gfnTransaction( strSvcId , 	// transaction을 구분하기 위한 svc id값
        						strSvcType , 	// transaction을 요청할 구분
        						inProc,			// Procedure 정보 Dataset 이름
        						inData , 		// 입력값으로 보낼 dataset id , a=b형태로 실제이름과 입력이름을 매칭
        						outData , 		// 처리결과값으로 받을 dataset id, a=b형태로 실제이름과 입력이름을 매칭
        						strArg, 		// 입력값으로 보낼 arguments, strFormData="20120607"
        						callBackFnc); // 통신방법 정의 [생략가능]
        };

        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.form_onload,this);
            this.divData.addEventHandler("ondragmove",this.divData_ondragmove,this);
            this.divData.form.cboTY_ACCOUNT.addEventHandler("onitemchanged",this.divData_divDataTop_cboTY_ACCOUNT_onitemchanged,this);
            this.divData.form.btnConfirm.addEventHandler("onclick",this.fnConfirm,this);
            this.divData.form.btnCancel.addEventHandler("onclick",this.fnCloseForm,this);
            this.dsSearch.addEventHandler("onvaluechanged",this.dsSearch_onvaluechanged,this);
        };
        this.loadIncludeScript("DMB_INVOICEGGP_DLG.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
