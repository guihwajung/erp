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
            this.set_titletext("전자세금계산서 수정(팝업)");
            this.getSetter("maxwidth").set("395");
            this.getSetter("maxheight").set("200");
            if (Form == this.constructor)
            {
                this._setFormPosition(370,150);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("_dsProc", this);
            obj._setContents("<ColumnInfo><Column id=\"TARGET\" type=\"STRING\" size=\"256\"/><Column id=\"SP\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"TARGET\">update</Col><Col id=\"SP\">DHVPR_ETAXBILL_UPDATE</Col></Row></Rows>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Div("divData","0","36",null,"68","0",null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_cssclass("div_DATA_Bg");
            this.addChild(obj.name, obj);

            obj = new Static("staCD_DEPT","10","32","125","30",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("0");
            obj.set_text("전자세금계산서번호");
            obj.set_cssclass("sta_WF_tablelabelE");
            this.divData.addChild(obj.name, obj);

            obj = new Static("sta11","134","32",null,"30","10",null,null,null,null,null,this.divData.form);
            obj.set_taborder("1");
            obj.set_cssclass("sta_WF_tablebg");
            obj.set_text("");
            this.divData.addChild(obj.name, obj);

            obj = new Div("ccfISSUE_ID","140","37","205","20",null,null,null,null,null,null,this.divData.form);
            obj.getSetter("CDTextWidth").set("181");
            obj.set_taborder("2");
            obj.set_url("cmm::cmmCodeFind.xfdl");
            obj.set_text("");
            this.divData.addChild(obj.name, obj);

            obj = new Static("staCD_DEPT00","10","3","125","30",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("3");
            obj.set_text("전표번호");
            obj.set_cssclass("sta_WF_tablelabel");
            this.divData.addChild(obj.name, obj);

            obj = new Static("sta00","134","3",null,"30","10",null,null,null,null,null,this.divData.form);
            obj.set_taborder("4");
            obj.set_cssclass("sta_WF_tablebg");
            obj.set_text("");
            this.divData.addChild(obj.name, obj);

            obj = new Edit("txtCD_SLIP","140","8","205","20",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("5");
            obj.set_readonly("true");
            obj.set_enable("false");
            this.divData.addChild(obj.name, obj);

            obj = new Static("staTitle","10","10",null,"22","0",null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_text("전자세금계산서 수정");
            obj.set_cssclass("sta_TITLE_Bg");
            this.addChild(obj.name, obj);

            obj = new Button("btnConf","115",null,"69","27",null,"3",null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_text("확인");
            this.addChild(obj.name, obj);

            obj = new Button("btnCancel","194",null,"69","27",null,"3",null,null,null,null,this);
            obj.set_taborder("3");
            obj.set_text("취소");
            this.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this
            obj = new Layout("default","",this._adjust_width,this._adjust_height,this,function(p){});
            this.addLayout(obj.name, obj);
            
            // BindItem Information
            obj = new BindItem("item0","divData.form.ccfISSUE_ID.form.CDTextBox","value","dsList","ISSUE_ID");
            this.addChild(obj.name, obj);
            obj.bind();
            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {
            this._addPreloadList("fdl","cmm::cmmCodeFind.xfdl");
        };
        
        // User Script
        this.registerScript("DHV_VATCONTROLDLG2.xfdl", function() {
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

        	this.txtCD_SLIP.set_value(this.getOwnerFrame().CD_TRADE);
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

        	this.ccfISSUE_ID = this.divData.form.ccfISSUE_ID;
        	this.txtCD_SLIP  = this.divData.form.txtCD_SLIP;

        };

        /************************************************************************
         * 이벤트 설정
         ************************************************************************/
        this.fnSetEvent = function() {

        	//전자세금계산서번호
        	this.ccfISSUE_ID.CodeFindName = "DHX_CFEBILLBUY_ESERO";
        	this.ccfISSUE_ID.BeforeUserDataSetParam = "fnBeforeUserDataSetParam";
        	//this.ccfISSUE_ID.AfterCDTextChanged = "fnAfterCDTextChanged";
        };

        /************************************************************************
         * 파라미터 설정
         ************************************************************************/
        this.fnSetParameter = function() {
        	this.dsBillUpdate = new Dataset();
        	this.dsBillUpdate.addColumn("NO_VAT"	  , "string");
        	this.dsBillUpdate.addColumn("CD_TRADE"	  , "string");
        	this.dsBillUpdate.addColumn("CD_SLIP"	  , "string");
        	this.dsBillUpdate.addColumn("ISSUE_ID_NEW", "string");
        	this.dsBillUpdate.addColumn("ISSUE_ID_OLD", "string");
        	this.dsBillUpdate.addColumn("ID_USER"	  , "string");
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
         *	저장 버튼
         */
        this.fnSave = function() {

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

        }

        /*
         *	출력 버튼
         */
        this.fnPrint = function() {
        }
        /************************************************************************
         * Validate
         ************************************************************************/
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

        	if(svcID == "billUpdate"){
        		if (errorCode == 0) {
        			this.gfnAlert("처리 되었습니다.", "fnMsgCallback");
        		} else {
        			this.gfnAlert(errorMsg);
        		}
        	}
        }

        this.fnMsgCallback = function() {
        	this.getParentContext().close("SUSESS");
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

        this.fnBeforeUserDataSetParam = function(id, dsUserParam, nrow) {
        	switch(id) {
        		case "ccfISSUE_ID":	//전자세금계산서번호
        			dsUserParam.setColumn(nrow, "CD_CORP"   , this.getOwnerFrame().CD_CORP);
        			dsUserParam.setColumn(nrow, "TY_SALEBUY", this.getOwnerFrame().TY_SALEBUY);
        		break;
        	}
        	return true;
        };

        //취소버튼 클릭
        this.btnCancel_onclick = function(obj,e)
        {
        	this.getParentContext().close();
        };

        //확인버튼 클릭
        this.btnConf_onclick = function(obj,e)
        {
        	if(this.gfnIsNull(this.ccfISSUE_ID.form.CDTextBox.value)){
        		this.gfnAlert("전자세금계산서번호는 필수입니다.");
        		this.ccfISSUE_ID.form.CDTextBox.setFocus();
        		return;
        	}

        	this.gfnConfirm("전자세금계산서로 변경 하시겠습니까?", "fnBillUpdateCallBack");

        };


        this.fnBillUpdateCallBack = function (strId, val)
        {
        	if(val == false) return;

        	this.dsBillUpdate.clearData();
        	var nRow = this.dsBillUpdate.addRow();

        	//처리할 데이터 담기
        	this.dsBillUpdate.setColumn(nRow, "NO_VAT" 	      , this.getOwnerFrame().NO_VAT);
        	this.dsBillUpdate.setColumn(nRow, "CD_TRADE" 	  , this.getOwnerFrame().CD_TRADE);
        	this.dsBillUpdate.setColumn(nRow, "CD_SLIP"  	  , this.getOwnerFrame().CD_SLIP);
        	this.dsBillUpdate.setColumn(nRow, "ISSUE_ID_NEW"  , this.ccfISSUE_ID.form.CDTextBox.value);
        	this.dsBillUpdate.setColumn(nRow, "ISSUE_ID_OLD"  , this.getOwnerFrame().ISSUE_ID);
        	this.dsBillUpdate.setColumn(nRow, "ID_USER"       , this.AuthClient.ID_USER);

        	var strSvcId    = "billUpdate";
        	var strSvcType  = "save";
        	var inProc		= "_dsProc";
        	var inData      = "update=dsBillUpdate";
        	var outData     = "";
        	var strArg      = "";
        	var callBackFnc = "fnCallback";

        	this.gfnTransaction( strSvcId , 	// transaction을 구분하기 위한 svc id값
        						strSvcType , 	// transaction을 요청할 구분
        						inProc,			// Procedure 정보 Dataset 이름
        						inData , 		// 입력값으로 보낼 dataset id , a=b형태로 실제이름과 입력이름을 매칭
        						outData , 		// 처리결과값으로 받을 dataset id, a=b형태로 실제이름과 입력이름을 매칭
        						strArg, 		// 입력갑스로 보낼 arguments, strFormData="20120607"
        						callBackFnc); 	// 통신방법 정의 [생략가능]
        };




        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.form_onload,this);
            this.divData.form.staCD_DEPT.addEventHandler("onclick",this.divData_divDataRight_sta01_onclick,this);
            this.divData.form.staCD_DEPT00.addEventHandler("onclick",this.divData_divDataRight_sta01_onclick,this);
            this.btnConf.addEventHandler("onclick",this.btnConf_onclick,this);
            this.btnCancel.addEventHandler("onclick",this.btnCancel_onclick,this);
        };
        this.loadIncludeScript("DHV_VATCONTROLDLG2.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
