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
            this.getSetter("maxwidth").set("990");
            this.getSetter("maxheight").set("520");
            if (Form == this.constructor)
            {
                this._setFormPosition(1280,720);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("dsList", this);
            obj.set_useclientlayout("false");
            obj._setContents("");
            this.addChild(obj.name, obj);


            obj = new Dataset("_dsProc", this);
            obj._setContents("<ColumnInfo><Column id=\"TARGET\" type=\"STRING\" size=\"256\"/><Column id=\"SP\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"TARGET\">select</Col><Col id=\"SP\"/></Row><Row><Col id=\"TARGET\">insert</Col><Col id=\"SP\"/></Row><Row><Col id=\"TARGET\">update</Col><Col id=\"SP\"/></Row><Row><Col id=\"TARGET\">delete</Col><Col id=\"SP\"/></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsSearch", this);
            obj._setContents("<ColumnInfo><Column id=\"contractNo\" type=\"STRING\" size=\"256\"/><Column id=\"contractNoSeq\" type=\"STRING\" size=\"256\"/><Column id=\"contractAmount\" type=\"STRING\" size=\"256\"/><Column id=\"taxamount\" type=\"STRING\" size=\"256\"/><Column id=\"taxtotal\" type=\"STRING\" size=\"256\"/><Column id=\"contractCorpType\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row/></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsTaxamout", this);
            obj._setContents("");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Div("divData","0","0",null,null,"0","0",null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_cssclass("div_DATA_Bg");
            this.addChild(obj.name, obj);

            obj = new Grid("objGrid","0","50",null,null,"0","0",null,null,null,null,this.divData.form);
            obj.set_taborder("0");
            obj._setContents("");
            this.divData.addChild(obj.name, obj);

            obj = new Div("divSearch","objGrid:0.0","10.0",null,"46.0","0",null,null,null,null,null,this.divData.form);
            obj.set_taborder("1");
            obj.set_cssclass("div_SEARCH_Bg");
            obj.set_formscrolltype("none");
            this.divData.addChild(obj.name, obj);

            obj = new Static("staCD_SITE","0.0","10.0","118.0","24.0",null,null,null,null,null,null,this.divData.form.divSearch.form);
            obj.set_taborder("0");
            obj.set_text("인지세액");
            obj.set_visible("true");
            obj.set_cssclass("sta_WF_SchLabel");
            this.divData.form.divSearch.addChild(obj.name, obj);

            obj = new Static("sta01","staCD_SITE:0.0","10.0","118.0","24.0",null,null,null,null,null,null,this.divData.form.divSearch.form);
            obj.set_taborder("1");
            obj.set_text("관리번호");
            obj.set_cssclass("sta_WF_SchLabel");
            this.divData.form.divSearch.addChild(obj.name, obj);

            obj = new MaskEdit("txtAM_TAXAMOUT","sta01:0.0","10.0","85","24.0",null,null,null,null,null,null,this.divData.form.divSearch.form);
            obj.set_taborder("2");
            obj.set_format("9,999");
            obj.set_readonly("true");
            obj.set_enable("true");
            this.divData.form.divSearch.addChild(obj.name, obj);

            obj = new Edit("txtNO_CONT","txtAM_TAXAMOUT:0.0","10.0","205","24.0",null,null,null,null,null,null,this.divData.form.divSearch.form);
            obj.set_taborder("3");
            obj.set_enable("true");
            obj.set_readonly("true");
            this.divData.form.divSearch.addChild(obj.name, obj);

            obj = new Static("staAM_TOTAL","txtNO_CONT:0.0","10.0","118.0","24.0",null,null,null,null,null,null,this.divData.form.divSearch.form);
            obj.set_taborder("4");
            obj.set_text("총 구매금액");
            obj.set_visible("true");
            obj.set_cssclass("sta_WF_SchLabel");
            this.divData.form.divSearch.addChild(obj.name, obj);

            obj = new MaskEdit("txtAM_TAXTOTAL","staAM_TOTAL:0.0","10.0","85","24.0",null,null,null,null,null,null,this.divData.form.divSearch.form);
            obj.set_taborder("5");
            obj.set_format("9,999");
            obj.set_readonly("true");
            obj.set_enable("true");
            this.divData.form.divSearch.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this
            obj = new Layout("default","",this._adjust_width,this._adjust_height,this,function(p){});
            this.addLayout(obj.name, obj);
            
            // BindItem Information
            obj = new BindItem("item0","divData.form.divSearch.form.txtNO_CONT","value","dsSearch","contractNo");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item1","divData.form.divSearch.form.txtAM_TAXAMOUT","value","dsSearch","taxamount");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item2","divData.form.divSearch.form.txtAM_TAXTOTAL","value","dsSearch","taxtotal");
            this.addChild(obj.name, obj);
            obj.bind();
            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script
        this.registerScript("DCC_STAMP_PAYLIST.xfdl", function() {
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

        	if(!this.gfnIsNull(this.getOwnerFrame().contractNo)) {
        		this.dsSearch.setColumn(0, "contractNo", 	this.getOwnerFrame().contractNo);
        		this.dsSearch.setColumn(0, "contractNoSeq", this.getOwnerFrame().contractNoSeq);
        		this.dsSearch.setColumn(0, "contractAmount", this.getOwnerFrame().contractAmount);
        		this.dsSearch.setColumn(0, "contractCorpType", this.getOwnerFrame().contractCorpType);
        		this.FormBtns.Select.click();
        	};
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

        };

        /************************************************************************
         * 변수 선언
         ************************************************************************/
        this.fnSetVariable = function() {
        	this.dxGrid = this.divData.form.objGrid;
        	this.dxGrid.ExpandUp = "fnGrid_ExpandUp";
        };

        /************************************************************************
         * 이벤트 설정
         ************************************************************************/
        this.fnSetEvent = function() {
        	// 그리드 초기화
        	this.gfnGridInit(this.dxGrid, this.dsList, "DC", "DCC_STAMP_PAYLIST");

        };

        /************************************************************************
         * 파라미터 설정
         ************************************************************************/
        this.fnSetParameter = function() {
        	this.dsSelIn = new Dataset();
        	this.dsSelIn.addColumn("contractNo", 	"string");
        	this.dsSelIn.addColumn("contractNoSeq", "string");
        };

        /************************************************************************
         * 컨트롤 이벤트
         ************************************************************************/
         /*
          *	조회 버튼
          */
        this.fnSelect = function() {

        // 	this.dsSelIn.clearData();
        // 	this.dsSelIn.addRow();
        //
        // 	this.dsSelIn.setColumn(0, "contractNo", 	this.dsSearch.getColumn(0, "contractNo"));
        // 	this.dsSelIn.setColumn(0, "contractNoSeq", 	this.dsSearch.getColumn(0, "contractNoSeq"));

        	var strSvcId    = "select";
        	var strSvcType  = "pki/dcc_stamp_paylist";
        	var inProc		= "";
        	var inData      = "dsInji=dsSearch";
        	var outData     = "dsList=output0 dsSearch=output1";
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

        };

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
        // 		if(this.dsList.rowcount > 0){
        // 			this.dsList.set_enableevent(false);
        // 			for(var i=0;i<this.dsList.rowcount;i++){
        // 				this.dsList.setColumn(i, "ContractNo", this.dsSearch.getColumn(0, "contractNo"));
        // 				this.dsList.setColumn(i, "ContractNoSeq", this.dsSearch.getColumn(0, "contractNoSeq"));
        // 			}
        // 			this.dsList.set_enableevent(true);
        // 		}

        	}
        };

        /************************************************************************
         * 코드파인드 이벤트
         ************************************************************************/

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

        this.fnGrid_ExpandUp = function(obj, e) {
        	var colnm = this.gfnGridGetBindColumnNameByIndex(obj, e.cell);
        	if(colnm != "paymentConfirmBtn") return;

        	window.open(this.dsList.getColumn(this.dsList.rowposition, "paymentConfirmUrl"));
        };
        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.form_onload,this);
            this.dsSearch.addEventHandler("onvaluechanged",this.dsSearch_onvaluechanged,this);
        };
        this.loadIncludeScript("DCC_STAMP_PAYLIST.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
