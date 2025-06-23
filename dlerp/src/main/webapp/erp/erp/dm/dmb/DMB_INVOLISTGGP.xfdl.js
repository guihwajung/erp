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
            this.set_titletext("입고송장");
            if (Form == this.constructor)
            {
                this._setFormPosition(1280,720);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("dsList", this);
            obj._setContents("");
            this.addChild(obj.name, obj);


            obj = new Dataset("_dsProc", this);
            obj._setContents("<ColumnInfo><Column id=\"TARGET\" type=\"STRING\" size=\"256\"/><Column id=\"SP\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"TARGET\">select</Col><Col id=\"SP\">DMBPR_INVOLISTGGP_SELECT</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsSearch", this);
            obj._setContents("<ColumnInfo><Column id=\"YM_FR\" type=\"STRING\" size=\"256\"/><Column id=\"CD_SITE\" type=\"STRING\" size=\"256\"/><Column id=\"YM_TO\" type=\"STRING\" size=\"256\"/><Column id=\"CD_VENDOR\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"CD_SITE\"/><Col id=\"YM_FR\"/><Col id=\"CD_VENDOR\"/></Row></Rows>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Div("divSearch","0.0","10.0",null,"46.0","0",null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_cssclass("div_SEARCH_Bg");
            obj.set_text("");
            this.addChild(obj.name, obj);

            obj = new Static("staCD_SITE","0.0","10.0","105.0","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("3");
            obj.set_text("현장코드");
            obj.set_cssclass("sta_WF_SchLabelE");
            this.divSearch.addChild(obj.name, obj);

            obj = new Div("ccfCD_SITE","staCD_SITE:0.0","10.0","250","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.getSetter("CodeFindName").set("DZX_CFSITE");
            obj.getSetter("CDTextWidth").set("80");
            obj.set_taborder("0");
            obj.set_url("cmm::cmmCodeFind.xfdl");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("staCD_VENDOR","ccfCD_SITE:0.0","10.0","105.0","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("4");
            obj.set_text("거래처코드");
            obj.set_textDecoration("none");
            obj.set_cssclass("sta_WF_SchLabel");
            this.divSearch.addChild(obj.name, obj);

            obj = new Div("ccfCD_VENDOR","staCD_VENDOR:0.0","10.0","250","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.getSetter("CodeFindName").set("DCX_CFVENDOR_DM");
            obj.getSetter("CDTextWidth").set("80");
            obj.set_taborder("5");
            obj.set_url("cmm::cmmCodeFind.xfdl");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("staYM_WORK","ccfCD_VENDOR:0.0","10.0","105.0","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("1");
            obj.set_text("조회기간");
            obj.set_cssclass("sta_WF_SchLabelE");
            this.divSearch.addChild(obj.name, obj);

            obj = new Div("ctclYM_FR","staYM_WORK:0.0","10.0","80","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("2");
            obj.getSetter("dateformat").set("yyyy-mm");
            obj.getSetter("editformat").set("yyyymm");
            obj.set_url("cmm::cmmCalMM.xfdl");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("sta00","ctclYM_FR:0.0","10.0","30.0","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("7");
            obj.set_text("~");
            obj.set_cssclass("sta_WF_AC");
            this.divSearch.addChild(obj.name, obj);

            obj = new Div("ctclYM_TO","sta00:0.0","10.0","80","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("6");
            obj.getSetter("dateformat").set("yyyy-mm");
            obj.getSetter("editformat").set("yyyymm");
            obj.set_url("cmm::cmmCalMM.xfdl");
            obj.set_text("");
            this.divSearch.addChild(obj.name, obj);

            obj = new Div("divData","0","divSearch:10",null,null,"0","0",null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_cssclass("div_DATA_Bg");
            obj.set_text("");
            this.addChild(obj.name, obj);

            obj = new Div("divDataTop","0","0",null,null,"0","divSplitter:5",null,null,null,null,this.divData.form);
            obj.set_taborder("0");
            this.divData.addChild(obj.name, obj);

            obj = new Static("sta01","0","0","100%","22",null,null,null,null,null,null,this.divData.form.divDataTop.form);
            obj.set_taborder("0");
            obj.set_cssclass("sta_TITLE_Bg");
            obj.set_text("송장내역");
            this.divData.form.divDataTop.addChild(obj.name, obj);

            obj = new Grid("objGrid","0","sta01:5",null,null,"0","0",null,null,null,null,this.divData.form.divDataTop.form);
            obj.set_taborder("0");
            obj._setContents("");
            this.divData.form.divDataTop.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this
            obj = new Layout("default","",this._adjust_width,this._adjust_height,this,function(p){});
            this.addLayout(obj.name, obj);
            
            // BindItem Information
            obj = new BindItem("item0","divSearch.form.ccfCD_SITE.form.CDTextBox","value","dsSearch","CD_SITE");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item1","divSearch.form.ccfCD_VENDOR.form.CDTextBox","value","dsSearch","CD_VENDOR");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item2","divSearch.form.ctclYM_FR.form.TextBox","value","dsSearch","YM_FR");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item3","divSearch.form.ctclYM_TO.form.TextBox","value","dsSearch","YM_TO");
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
        this.registerScript("DMB_INVOLISTGGP.xfdl", function() {
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

        	this.dsSearch.setColumn(0, "YM_FR", this.gfnGetDate());
        	this.dsSearch.setColumn(0, "YM_TO", this.gfnGetDate());
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
        	this.btn1 = this.gfnFormButtonAdd("btnDetail", "fnDetail");
        	this.btn2 = this.gfnFormButtonAdd("btnGGP", "fnGGP");
        	this.btn3 = this.gfnFormButtonAdd("btnRPP", "fnRPP");
        };

        /************************************************************************
         * 변수 선언
         ************************************************************************/
        this.fnSetVariable = function() {
        	this.ccfCD_SITE = this.divSearch.form.ccfCD_SITE;
        	this.ccfCD_VENDOR = this.divSearch.form.ccfCD_VENDOR;
        	this.ctclYM_FR = this.divSearch.form.ctclYM_FR;
        	this.ctclYM_TO = this.divSearch.form.ctclYM_TO;

        	this.dxGrid = this.divData.form.divDataTop.form.objGrid;
        };

        /************************************************************************
         * 이벤트 설정
         ************************************************************************/
        this.fnSetEvent = function() {


        	// 그리드 초기화
        	this.gfnGridInit(this.dxGrid, this.dsList, "DM", "DMB_INVOLISTGGP");
        };

        /************************************************************************
         * 파라미터 설정
         ************************************************************************/
        this.fnSetParameter = function() {
        	this.dsSelect = new Dataset();
        	this.dsSelect.addColumn("CD_SITE", "string");
        	this.dsSelect.addColumn("YM_FR", "string");
        	this.dsSelect.addColumn("YM_TO", "string");
        	this.dsSelect.addColumn("CD_VENDOR", "string");

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
        	this.dsSelect.setColumn(0, "YM_FR", this.dsSearch.getColumn(0, "YM_FR").substr(0,6));
        	this.dsSelect.setColumn(0, "YM_TO", this.dsSearch.getColumn(0, "YM_TO").substr(0,6));
        	this.dsSelect.setColumn(0, "CD_VENDOR", this.dsSearch.getColumn(0, "CD_VENDOR"));

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
        	//var nrow = this.gfnGridAdd(this.dxGrid); // top (default), bottom, current
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

        	if (this.gfnIsNull(this.dsSearch.getColumn(0,"CD_SITE"))) {
        		validate = false;

        		this.fnVaidateCallback = function() {
        			this.ccfCD_SITE.form.CDTextBox.setFocus();
        		}
        		this.gfnAlert("현장코드를 입력하세요.", "fnVaidateCallback");

        	}else if(this.gfnIsNull(this.dsSearch.getColumn(0,"YM_FR"))){
        		validate = false;

        		this.fnVaidateCallback = function() {
        			this.divSearch.form.ctclYM_FR.form.TextBox.setFocus();
        		}
        		this.gfnAlert("기성년월을 입력하세요.", "fnVaidateCallback");

        	}else if(this.gfnIsNull(this.dsSearch.getColumn(0,"YM_TO"))){
        		validate = false;

        		this.fnVaidateCallback = function() {
        			this.divSearch.form.ctclYM_TO.form.TextBox.setFocus();
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
        		//this.gfnAlert(errorMsg);
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
         this.dsSearch_onvaluechanged = function(obj,e)
        {
        	if(e.oldvalue != e.newvalue) {
        		this.gfnSetFormStatus(this);	// 폼상태 초기화
        		this.gfnGridClear(this.dxGrid);
        	}
        };

        // 아래부터는 확장버튼 이벤트.
        /*
         *   btnDetail 상세내역
         */
        this.fnDetail = function() {

           	if(this.dsList.rowposition < 0){
        			this.gfnAlert("선택된 행이 없습니다.");
        			return false;
        	}

           //if (!this.gfnGridIsRow(this.dxGrid)) { return false; }

           var strNO_INVOICE = this.dsList.getColumn(this.dsList.rowposition, "송장번호");
           if(this.gfnIsNull(strNO_INVOICE)) { return false; }

           var param = {};
           param.NO_INVOICE = strNO_INVOICE;
           param.NO_PO = this.dsList.getColumn(this.dsList.rowposition, "NO_PO").replace(/\-/g, '');
           param.TY_IO = "I";
           param.MODE = "U";

           // 송장종류로 화면 분기
           switch(this.dsList.getColumn(this.dsList.rowposition, "송장종류")) {
              case "GGP":
                 this.gfnFormOpen(this.FormInfo.CD_MODULE, "DMB_INVOICEGGP", "fnDetail_Callback", param);
                 break;
              case "GTS":
        	      param.CD_SITE = this.dsList.getColumn(this.dsList.rowposition, "출하현장");
        	      param.CD_INSITE = this.dsList.getColumn(this.dsList.rowposition, "입하현장");
        		  param.DT_WORK = this.dsList.getColumn(this.dsList.rowposition, "회계일자").replace(/\-/g, '');
        		  param.RM_BIGO = this.dsList.getColumn(this.dsList.rowposition, "RM_BIGO");
        		  param.CD_TRADE_OUT = this.dsList.getColumn(this.dsList.rowposition, "CD_TRADE_IN");
        		  param.CD_GUBUN = "GGP";
        	      param.Flag = "U";
        		  param.SELECT = "S";
                 this.gfnFormOpen(this.FormInfo.CD_MODULE, "DMB_INVOICEGTS", "fnDetail_Callback", param);
                 break;
              case "INS":
                 this.gfnFormOpen(this.FormInfo.CD_MODULE, "DMB_INVOICEINS", "fnDetail_Callback", param);
                 break;
              case "ETC":
              case "RPP":
                 this.gfnFormOpen(this.FormInfo.CD_MODULE, "DMB_INVOICERPP", "fnDetail_Callback", param);
                 break;
              case "CPS":
                 this.gfnFormOpen(this.FormInfo.CD_MODULE, "DMB_INVOICECPS", "fnDetail_Callback", param);
                 break;
              case "END":
                 this.gfnFormOpen(this.FormInfo.CD_MODULE, "DMB_INVOICEEND", "fnDetail_Callback", param);
                 break;
              case "CMS":
                 this.gfnFormOpen(this.FormInfo.CD_MODULE, "DMB_INVOICECMS", "fnDetail_Callback", param);
                 break;
           }
        }

        this.fnDetail_Callback = function(strID, value) {
           this.FormBtns.Select.click();
        }

        //본사계약입고
        this.fnGGP = function(obj,e) {
        	var param = {};

        	//param.NO_INVOICE = this.dsList.getColumn(this.dsList.rowposition, "송장번호");
        	//param.DT_INVOICE =  this.dsList.getColumn(this.dsList.rowposition, "송장일자");
        	param.CD_SITE = this.dsSearch.getColumn(0, "CD_SITE"); 							//현장코드
        	param.DS_SITE =	this.divSearch.form.ccfCD_SITE.form.DSTextBox.value;
        	//param.NO_PO = this.dsList.getColumn(this.dsList.rowposition, "NO_PO").replace(/\-/g, '');
        	param.CD_VENDOR = this.dsSearch.getColumn(0, "CD_VENDOR");	//거래처코드
        	param.DS_VENDOR = this.divSearch.form.ccfCD_VENDOR.form.DSTextBox.value;
        	param.MODE = "I";

        	this.gfnFormOpen("DMB", "DMB_INVOICEGGP", "fnGGP_Callback", param);
        }

        this.fnGGP_Callback = function(strID, value) {
           this.FormBtns.Select.click();
        }

        //기타입고
        this.fnRPP = function(obj,e) {
        	var param = {};

        	param.CD_SITE = this.dsSearch.getColumn(0, "CD_SITE");
        	param.DS_SITE =	this.divSearch.form.ccfCD_SITE.form.DSTextBox.value;
        	param.CD_VENDOR = this.dsSearch.getColumn(0, "CD_VENDOR")
        	param.DS_VENDOR = this.divSearch.form.ccfCD_VENDOR.form.DSTextBox.value;
        	param.MODE = "I";
        	this.gfnFormOpen("DMB", "DMB_INVOICERPP", "fnRPP_Callback", param);
        }

        this.fnRPP_Callback = function(strID, value) {
           this.FormBtns.Select.click();
        }
        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.form_onload,this);
            this.divData.addEventHandler("ondragmove",this.divData_ondragmove,this);
            this.dsSearch.addEventHandler("onvaluechanged",this.dsSearch_onvaluechanged,this);
        };
        this.loadIncludeScript("DMB_INVOLISTGGP.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
