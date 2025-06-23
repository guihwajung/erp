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
            this.set_titletext("자산분할");
            this.getSetter("maxwidth").set("320");
            this.getSetter("maxheight").set("210");
            if (Form == this.constructor)
            {
                this._setFormPosition(280,160);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("_dsProc", this);
            obj._setContents("<ColumnInfo><Column id=\"TARGET\" type=\"STRING\" size=\"256\"/><Column id=\"SP\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"TARGET\">proc</Col><Col id=\"SP\">DHNPR_ASSETGAINALL_PARTITION</Col></Row></Rows>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Static("staTitle","0","10",null,"22","0",null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_text("자산분할");
            obj.set_cssclass("sta_TITLE_Bg");
            this.addChild(obj.name, obj);

            obj = new Button("btnConf","68","119","69","27",null,null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_text("확인");
            this.addChild(obj.name, obj);

            obj = new Button("btnCancel","148","119","69","27",null,null,null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_text("취소");
            this.addChild(obj.name, obj);

            obj = new Static("staNO_DIVIDE","0","69","120","27",null,null,null,null,null,null,this);
            obj.set_taborder("3");
            obj.set_text("자산분할수(금액)");
            obj.set_textAlign("center");
            obj.set_cssclass("sta_WF_tablelabelE");
            this.addChild(obj.name, obj);

            obj = new Static("staBg14","staNO_DIVIDE:-1","69",null,"27","1",null,null,null,null,null,this);
            obj.set_taborder("4");
            obj.set_cssclass("sta_WF_tablebg");
            this.addChild(obj.name, obj);

            obj = new Static("staBg00","119","43",null,"27","1",null,null,null,null,null,this);
            obj.set_taborder("5");
            obj.set_cssclass("sta_WF_tablebg");
            this.addChild(obj.name, obj);

            obj = new Static("staNO_DIVIDE00","0","43","120","27",null,null,null,null,null,null,this);
            obj.set_taborder("6");
            obj.set_text("취득수량");
            obj.set_cssclass("sta_WF_tablelabel");
            obj.set_textAlign("center");
            this.addChild(obj.name, obj);

            obj = new MaskEdit("mskQN_GET","124","47",null,"20","6",null,null,null,null,null,this);
            obj.set_taborder("7");
            obj.set_format("#,###,###,###,###,###,###");
            obj.set_limitbymask("integer");
            obj.set_enable("false");
            this.addChild(obj.name, obj);

            obj = new MaskEdit("mskNO_PART","124","73",null,"20","6",null,null,null,null,null,this);
            obj.set_taborder("8");
            obj.set_format("!#,###,###,###,###,###,###");
            obj.set_limitbymask("integer");
            this.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this
            obj = new Layout("default","",this._adjust_width,this._adjust_height,this,function(p){});
            this.addLayout(obj.name, obj);
            
            // BindItem Information

            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script
        this.registerScript("DHN_ASSETDIVIDE_DLG.xfdl", function() {
        this.objApp = this.gfnGetApplication();

        this.form_onload = function(obj,e)
        {
        	// -- 필수 -------------------//
        	this.gfnFormOnLoad(this);
        	this.gfnFormInfo(this);
        	// ---------------------------//

        	this.fnSetButton();
        	//this.fnSetExtendButton();
        	this.fnSetVariable();
        	this.fnSetEvent();
        	this.fnSetParameter();
        	//this.fnSetCombo();

        	this.mskQN_GET.set_value(this.getOwnerFrame().QN_GET);

        	this.mskNO_PART.setFocus();

        };

        /************************************************************************
         * 버튼 설정 : 화면(Tab) 전환시 마다 호출
         * 서브버튼 사용 및 공통버튼 강제 제어시 여기서 처리
         ************************************************************************/
        this.fnSetButton = function() {
        };

        /************************************************************************
         * 확장 버튼 : 화면별 버튼 설정 ID, function 연결 (화면버튼관리)
         ************************************************************************/
        this.fnSetExtendButton = function() {
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
        	this.dsSelect = new Dataset();
        	this.dsSelect.addColumn("CD_CORP", "string");			//법인코드
        	this.dsSelect.addColumn("CD_ASSET", "string");			//자산번호
        	this.dsSelect.addColumn("CD_ACASSET", "string");		//자산코드
        	this.dsSelect.addColumn("PART_NO", "string");			//분할수
        	this.dsSelect.addColumn("SABUN", "string");				//변경자 사번
        };

        /************************************************************************
         * 컨트롤 이벤트
         ************************************************************************/
         /*
          *	조회 버튼
          */
        this.fnProc = function() {
        	var qnGet  = nexacro.toNumber(this.getOwnerFrame().QN_GET, 0);	//취득수량
        	var noPart = nexacro.toNumber(this.mskNO_PART.value, 0);		//분할수량
        	var amGet  = nexacro.toNumber(this.getOwnerFrame().AM_GET, 0);	//취득금액

        	if(noPart == 0){
        		this.fnVaidateCallback = function() {
        			this.mskNO_PART.setFocus();
        		}
        		this.gfnAlert("분할수를 입력하세요","fnVaidateCallback");
        		return false;
        	}

        // 	if(qnGet > 1){
        // 		if(noPart > qnGet){
        // 			this.fnVaidateCallback = function() {
        // 				this.mskNO_PART.setFocus();
        // 			}
        // 			this.gfnAlert("분할수는 취득수량( "+qnGet+" )보다 작거나 같아야 합니다.","fnVaidateCallback");
        // 			return false;
        // 		}
        // 	}else{
        // 		if(noPart > amGet){
        // 			this.gfnAlert("분할금액은 취득금액 보다 클수 업습니다.","fnVaidateCallback");
        // 			return false;
        // 		}
        // 	}

        	var sMsg = "분할하시겠습니까?";
        // 	if(qnGet > 1){
        // 		sMsg = "수량으로 분할하시겠습니까?";
        // 	} else if(qnGet == 1){
        // 		sMsg = "금액으로 분할하시겠습니까?";
        // 	}

        	this.gfnConfirm(sMsg, "fnProc_callback");

        };

        this.fnProc_callback = function(strId, val)
        {
        	if(val == true) {
        		this.dsSelect.clearData();
        		var nrow = this.dsSelect.addRow();

        		this.dsSelect.setColumn(nrow, "CD_CORP", this.getOwnerFrame().CD_CORP);				//법인코드
        		this.dsSelect.setColumn(nrow, "CD_ACASSET", this.getOwnerFrame().CD_ACASSET);		//자산코드
        		this.dsSelect.setColumn(nrow, "CD_ASSET", this.getOwnerFrame().CD_ASSET);			//자산번호
        		this.dsSelect.setColumn(nrow, "PART_NO", this.mskNO_PART.value);					//분할수
        		this.dsSelect.setColumn(nrow, "SABUN", this.AuthClient.ID_USER);					//변경자 사번

        		var strSvcId    = "proc";
        		var strSvcType  = "grid";
        		var inProc		= "_dsProc";
        		var inData      = "proc=dsSelect";
        		var outData     = "";
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
        };
         /*
         *	입력 버튼
         */
        this.fnAdd = function() {
        };

         /*
         *	저장 버튼
         */
        this.fnSave = function() {
        };

        /*
         *	삭제 버튼
         */
        this.fnDel = function() {
        	//this.gfnGridDel(this.dxGrid);
        };


        /*
         *	엑셀 버튼
         */
        this.fnExcel = function() {
        	//this.gfnExcelExport(this.dxGrid);
        };

        /*
         *	출력 버튼
         */
        this.fnPrint = function() {
        };
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
        	if (svcID == "proc") {
        		this.getParentContext().close(true);
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
        //확인버튼 클릭
        this.btnConf_onclick = function(obj,e)
        {
        	this.fnProc();
        };
        this.btnCancel_onclick = function(obj,e)
        {
        	this.getParentContext().close();
        };

        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.form_onload,this);
            this.btnConf.addEventHandler("onclick",this.btnConf_onclick,this);
            this.btnCancel.addEventHandler("onclick",this.btnCancel_onclick,this);
        };
        this.loadIncludeScript("DHN_ASSETDIVIDE_DLG.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
