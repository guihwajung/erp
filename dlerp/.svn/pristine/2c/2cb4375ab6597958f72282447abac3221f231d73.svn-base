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
            this.set_titletext("신규발주서작성");
            if (Form == this.constructor)
            {
                this._setFormPosition(1280,720);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("dsList", this);
            obj._setContents("");
            this.addChild(obj.name, obj);


            obj = new Dataset("_dsProc", this);
            obj._setContents("<ColumnInfo><Column id=\"TARGET\" type=\"STRING\" size=\"256\"/><Column id=\"SP\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"TARGET\">select</Col><Col id=\"SP\">DMAPR_SDINSITEM_VEN_SELECT</Col></Row><Row><Col id=\"TARGET\">combo</Col><Col id=\"SP\">DZXPR_COMBO_SELECT</Col></Row><Row><Col id=\"TARGET\">conf</Col><Col id=\"SP\">DMAPR_SDINSITEM_VEN_SAVE</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsSearch", this);
            obj._setContents("<ColumnInfo><Column id=\"CD_VENDOR\" type=\"STRING\" size=\"256\"/><Column id=\"YM_WORK\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"YM_WORK\"/></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsYN_END", this);
            obj._setContents("<ColumnInfo><Column id=\"Column0\" type=\"STRING\" size=\"256\"/><Column id=\"Column1\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Div("divSearch","0.0","10.0",null,"46.0","0",null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_cssclass("div_SEARCH_Bg");
            this.addChild(obj.name, obj);

            obj = new Static("sta01","0.0","10.0","92.0","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("0");
            obj.set_text("업체코드");
            obj.set_textDecoration("none");
            obj.set_cssclass("sta_WF_SchLabel");
            this.divSearch.addChild(obj.name, obj);

            obj = new Div("ccfCD_VENDOR","sta01:0.0","10.0","300","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.getSetter("CDTextWidth").set("70");
            obj.set_taborder("1");
            obj.set_url("cmm::cmmCodeFind.xfdl");
            obj.set_text("");
            obj.getSetter("CodeFindName").set("DZX_INSSITE_CODEFIND");
            this.divSearch.addChild(obj.name, obj);

            obj = new Div("ctclYM_WORK","ccfCD_VENDOR:0.0","10.0","80","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("2");
            obj.set_url("cmm::cmmCalMM.xfdl");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("staYM_WORK","ctclYM_WORK:0.0","10.0","92.0","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("3");
            obj.set_text("기준년월");
            obj.set_cssclass("sta_WF_SchLabelE");
            this.divSearch.addChild(obj.name, obj);

            obj = new Div("divData","0","divSearch:10",null,null,"0","0",null,null,null,null,this);
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
            obj = new BindItem("item1","divSearch.form.ccfCD_VENDOR.form.CDTextBox","value","dsSearch","CD_VENDOR");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item2","divSearch.form.ctclYM_WORK.form.TextBox","value","dsSearch","YM_WORK");
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
        this.registerScript("DMA_SDINSITEM_VEN.xfdl", function() {
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

        	this.fnSetCombo();

        	var today = this.gfnGetDate();
        	this.dsSearch.setColumn(0, "YM_WORK", today.substr(0,6));
        };

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
        	this.btnSdinsItemCopy = this.gfnFormButtonAdd("btnSdinsItemVenCopy", "fnSdinsItemVenCopy");	// 단가복사
        	this.btnSdinsitemCrt = this.gfnFormButtonAdd("btnSdinsitemVenCrt", "fnSdinsitemVenCrt");		// 단가생성
        	this.btnConfirm = this.gfnFormButtonAdd("btnConfirm", "fnConfirm");		// 단가확정
        	this.btnCancel = this.gfnFormButtonAdd("btnCancel", "fnCancel");		// 단가취소
        };

        /************************************************************************
         * 변수 선언
         ************************************************************************/
        this.fnSetVariable = function() {
        	this.ccfCD_VENDOR = this.divSearch.form.ccfCD_VENDOR;

        	this.dxGrid = this.divData.form.objGrid;
        };

        /************************************************************************
         * 이벤트 설정
         ************************************************************************/
        this.fnSetEvent = function() {

        	// 그리드 초기화
        	this.gfnGridInit(this.dxGrid, this.dsList, "DM", "DMA_SDINSITEM");
        };

        /************************************************************************
         * 파라미터 설정
         ************************************************************************/
        this.fnSetParameter = function() {
        	this.dsSelect = new Dataset();
        	this.dsSelect.addColumn("YM_WORK", "string");
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

        	this.dsSelect.setColumn(0, "YM_WORK", this.dsSearch.getColumn(0, "YM_WORK"));
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
        						strArg, 		// 입력값으로 보낼 arguments, strFormData="20120607"
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
        	this.fnSaveAction("gridSave");
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
        	return validate;
        };

        /************************************************************************
         * 콜백 이벤트
         ************************************************************************/
        /*
         *	콜백 처리
         */
        this.fnCallback = function(svcID, errorCode, errorMsg, strArg)
        {
        	if (svcID == "select") {
        		this.gfnGridAfterSelect(this.dxGrid);
        	}
        	else if(svcID == "conf") {
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


        this.fnSetCombo = function() {
        };

        this.fnConfirm = function() {
        	this.fnSaveAction("save");
        }

        this.fnCancel = function() {
        	this.fnSaveAction("cancel");
        }


        this.fnSaveAction = function(strIdVal) {

        	if (this.dsList.rowcount == 0) { return false; }

        	var strIdValTxt = "확정";
        	if(strIdVal == "gridSave"){
        		strIdValTxt = "저장";
        		if (!this.gfnGridIsRow(this.dxGrid)) { return false; }
        	}else if(strIdVal == "cancel"){
        		strIdValTxt = "확정취소";
        	}

        	this.gfnConfirm(strIdValTxt + " 하시겠습니까?", function(strId, val){
        		if(val){
        			this.dsConfirm = new Dataset();
        			this.dsConfirm.addColumn("TY_WRK", "string");
        			this.dsConfirm.addColumn("YN_END", "string");
        			this.dsConfirm.addColumn("UP_ITEM", "string");
        			this.dsConfirm.addColumn("RM_BIGO", "string");

        			this.dsConfirm.addColumn("YM_SDINS", "string")
        			this.dsConfirm.addColumn("CD_VENDOR", "string");
        			this.dsConfirm.addColumn("CD_ITEM", "string");

        			this.dsConfirm.clearData();

        			if(strIdVal == "gridSave"){
        				for (var i = 0; i < this.dsList.rowcount; i++) {
        					var flag = this.gfnGetFlag(this.dsList, i);
        					switch(flag) {
        						case "I":
        						case "U":
        						case "D":
        							var nrow = this.dsConfirm.addRow();
        							this.dsConfirm.setColumn(nrow, "TY_WRK", 	flag);
        							this.dsConfirm.setColumn(nrow, "YN_END", 	this.dsList.getColumn(i, "YN_END"));
        							this.dsConfirm.setColumn(nrow, "UP_ITEM", 	this.dsList.getColumn(i, "UP_ITEM"));
        							this.dsConfirm.setColumn(nrow, "RM_BIGO", 	this.dsList.getColumn(i, "RM_BIGO"));
        							this.dsConfirm.setColumn(nrow, "YM_SDINS", 	this.dsList.getColumn(i, "YM_SDINS"))
        							this.dsConfirm.setColumn(nrow, "CD_VENDOR", this.dsList.getColumn(i, "CD_VENDOR"));
        							this.dsConfirm.setColumn(nrow, "CD_ITEM", 	this.dsList.getColumn(i, "CD_ITEM"));
        							break;
        					}
        				}
        			}else{
        				var nrow = this.dsConfirm.addRow();
        				var selRow = this.dsList.rowposition;
        				var ynEnd = "N";

        				if(strIdVal == "save"){ ynEnd = "Y" }

        				this.dsConfirm.setColumn(nrow, "TY_WRK",	"U");
        				this.dsConfirm.setColumn(nrow, "YN_END", 	ynEnd);
        				this.dsConfirm.setColumn(nrow, "YM_SDINS", 	this.dsSelect.getColumn(0, "YM_WORK"));
        				this.dsConfirm.setColumn(nrow, "CD_VENDOR", this.dsSelect.getColumn(0, "CD_VENDOR"));
        			}

        			if (this.dsConfirm.rowcount == 0) return;

        			var strSvcId    = "conf";
        			var strSvcType  = "save";
        			var inProc		= "_dsProc";
        			var inData      = "conf=dsConfirm";
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
        	});


        }

        // 단가복사 팝업
        this.fnSdinsItemVenCopy = function() {
        	var param = {};
        	// 화면 오픈.
        	// CD_MODULE은 보통 같은 모듈에서 호출하는 경우가 많으니 this.FormInfo.CD_MODULE 사용
        	// 타 모듈 화면 호출시 지정할것.

        	this.gfnFormOpen("DMZ", "DMA_SDINSITEM_VEN_COPY", "fnSdinsItemVenCopyCallback", param, '300', '300');
        }

        this.fnSdinsItemVenCopyCallback = function(svcID, value) {
        	if(value){
        		this.gfnAlert("생성되었습니다.");
        		this.FormBtns.Select.click();
        	}
        };

        // 단가생성 팝업
        this.fnSdinsitemVenCrt = function() {
        	var param = {};
        	// 화면 오픈.
        	// CD_MODULE은 보통 같은 모듈에서 호출하는 경우가 많으니 this.FormInfo.CD_MODULE 사용
        	// 타 모듈 화면 호출시 지정할것.

        	this.gfnFormOpen("DMZ", "DMA_SDINSITEM_VEN_CRT", "fnSdinsitemVenCrtCallback", param, '500', '700');
        }

        this.fnSdinsitemVenCrtCallback = function(svcID, value) {
        	if(value){
        		this.gfnAlert("생성되었습니다.");
        		this.FormBtns.Select.click();
        	}
        };

        this.inZero = function(p1,p2){
        	var zero ="";
        	for(var i=0; i<p2;i++) zero +="0";
        	return zero.toString().concat(p1).match(new RegExp("\\d{"+p2+"}$"));
        };
        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.form_onload,this);
            this.divSearch.form.ccfCD_VENDOR.addEventHandler("onclick",this.Common_onclick,this);
            this.dsSearch.addEventHandler("onvaluechanged",this.dsSearch_onvaluechanged,this);
        };
        this.loadIncludeScript("DMA_SDINSITEM_VEN.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
