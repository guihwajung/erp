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
            this.set_titletext("학자금신청등록");
            this.getSetter("maxwidth").set("388");
            this.getSetter("maxheight").set("205");
            if (Form == this.constructor)
            {
                this._setFormPosition(348,127);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("dsCommon", this);
            obj._setContents("<ColumnInfo><Column id=\"ID_SABUN\" type=\"STRING\" size=\"256\"/><Column id=\"YY_TUITION\" type=\"STRING\" size=\"256\"/><Column id=\"CD_TUITION\" type=\"STRING\" size=\"256\"/><Column id=\"CD_CORP\" type=\"STRING\" size=\"256\"/><Column id=\"NO_SEQ\" type=\"STRING\" size=\"256\"/><Column id=\"ID_USER\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row/></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsData", this);
            obj._setContents("<ColumnInfo><Column id=\"DS_RETURN\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"DS_RETURN\"/></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("_dsProc", this);
            obj._setContents("<ColumnInfo><Column id=\"TARGET\" type=\"STRING\" size=\"256\"/><Column id=\"SP\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"TARGET\">reject</Col><Col id=\"SP\">DABPR_TUITION_APP_UPDATE</Col></Row></Rows>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Div("divSearch","0","0",null,"127","0",null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_text("");
            this.addChild(obj.name, obj);

            obj = new Static("staTITLE","0","0","200","30",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("1");
            obj.set_text("학자금신청 반려");
            obj.set_cssclass("sta_TITLE_Bg");
            obj.set_textAlign("left");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("staDS_RETURN","0","staTITLE:0","87","60",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("22");
            obj.set_text("반려사유");
            obj.set_visible("true");
            obj.set_cssclass("sta_WF_tablelabelE");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("staDS_RETURN_bg","staDS_RETURN:-1","staDS_RETURN:-60","262","60",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("23");
            obj.set_cssclass("sta_WF_tablebg");
            obj.set_visible("true");
            this.divSearch.addChild(obj.name, obj);

            obj = new TextArea("txtDS_RETURN","staDS_RETURN:5","staDS_RETURN:-55","250","50",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("29");
            this.divSearch.addChild(obj.name, obj);

            obj = new Div("divBtns","120","staDS_RETURN:10","130","27",null,null,null,null,null,null,this.divSearch.form);
            obj.set_text("");
            this.divSearch.addChild(obj.name, obj);

            obj = new Button("btnReject","0","0","60","27",null,null,null,null,null,null,this.divSearch.form.divBtns.form);
            obj.set_taborder("1");
            obj.set_text("반려");
            this.divSearch.form.divBtns.addChild(obj.name, obj);

            obj = new Button("btnCancle","btnReject:10","0","60","27",null,null,null,null,null,null,this.divSearch.form.divBtns.form);
            obj.set_taborder("0");
            obj.set_text("취소");
            this.divSearch.form.divBtns.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this
            obj = new Layout("default","",this._adjust_width,this._adjust_height,this,function(p){});
            this.addLayout(obj.name, obj);
            
            // BindItem Information
            obj = new BindItem("item0","divSearch.form.txtDS_RETURN","value","dsData","DS_RETURN");
            this.addChild(obj.name, obj);
            obj.bind();
            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script
        this.registerScript("DAB_TUITION_REQUEST_REJECT_DLG.xfdl", function() {
        this.objApp = this.gfnGetApplication();

        this.form_onload = function(obj,e) {
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
        	this.fnInit();
        }

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

        }

        /************************************************************************
         * 변수 선언
         ************************************************************************/
        this.fnSetVariable = function() {

        }

        /************************************************************************
         * 이벤트 설정
         ************************************************************************/
        this.fnSetEvent = function() {

        }

        /************************************************************************
         * 파라미터 설정
         ************************************************************************/
        this.fnSetParameter = function() {
        	// 반려
        	this.dsReject = new Dataset();
        	this.dsReject.addColumn("TY_WORK", "string");
        	this.dsReject.addColumn("ID_SABUN", "string");
        	this.dsReject.addColumn("YY_TUITION", "string");
        	this.dsReject.addColumn("CD_TUITION", "string");
        	this.dsReject.addColumn("CD_CORP", "string");
        	this.dsReject.addColumn("NO_SEQ", "string");
        	this.dsReject.addColumn("DS_RETURN", "string");
        	this.dsReject.addColumn("ID_USER", "string");
        }

        /************************************************************************
         * 콤보 데이터 조회 및 설정
         ************************************************************************/
        this.fnSetCombo = function() {

        }

        /************************************************************************
         * 화면 및 검색영역 초기화
         ************************************************************************/
        this.fnInit = function() {
        	var frame = this.getOwnerFrame();

        	this.dsCommon.setColumn(0, "ID_SABUN"  , frame.ID_SABUN);
        	this.dsCommon.setColumn(0, "YY_TUITION", frame.YY_TUITION);
        	this.dsCommon.setColumn(0, "CD_TUITION", frame.CD_TUITION);
        	this.dsCommon.setColumn(0, "CD_CORP"   , frame.CD_CORP);
        	this.dsCommon.setColumn(0, "NO_SEQ"    , frame.NO_SEQ);
        	this.dsCommon.setColumn(0, "ID_USER"   , frame.ID_USER);
        }

        /************************************************************************
         * 컨트롤 이벤트
         ************************************************************************/
        /*
         * 조회 버튼
         */
        this.fnSelect = function() {

        }

        /*
         * 추가 버튼
         */
        this.fnAdd = function() {

        }

        /*
         * 삭제 버튼
         */
        this.fnDel = function() {

        }

        this.fnSave = function() {

        }

        /*
         * 엑셀 버튼
         */
        this.fnExcel = function() {

        }

        /*
         * 출력 버튼
         */
        this.fnPrint = function() {
        	return true;
        }

        /************************************************************************
         * Validate
         ************************************************************************/
        this.fnSelectValid = function() {
        	return true;
        }

        /************************************************************************
         * 확장버튼 이벤트
         ************************************************************************/
        // 반려 버튼
        this.btnReject_onclick = function() {
        	this.dsReject.clearData();

        	var ID_SABUNs = this.dsCommon.getColumn(0, "ID_SABUN").split(",");
        	var NO_SEQs = this.dsCommon.getColumn(0, "NO_SEQ").split(",");
        	for (var i = 0; i < ID_SABUNs.length; i++) {
        		var nrow = this.dsReject.addRow();
        		this.dsReject.setColumn(nrow, "TY_WORK"   , "R");
        		this.dsReject.setColumn(nrow, "ID_SABUN"  , ID_SABUNs[i]);
        		this.dsReject.setColumn(nrow, "YY_TUITION", this.dsCommon.getColumn(0, "YY_TUITION"));
        		this.dsReject.setColumn(nrow, "CD_TUITION", this.dsCommon.getColumn(0, "CD_TUITION"));
        		this.dsReject.setColumn(nrow, "CD_CORP"   , this.dsCommon.getColumn(0, "CD_CORP"));
        		this.dsReject.setColumn(nrow, "NO_SEQ"    , NO_SEQs[i]);
        		this.dsReject.setColumn(nrow, "DS_RETURN" , this.dsData.getColumn(0, "DS_RETURN"));
        		this.dsReject.setColumn(nrow, "ID_USER"   , this.dsCommon.getColumn(0, "ID_USER"));
        	}

        	if (this.dsReject.rowcount == 0) return;

        	var strSvcId    = "reject";
        	var strSvcType  = "save";
        	var inProc		= "_dsProc";
        	var inData      = "reject=dsReject";
        	var outData     = "";
        	var strArg      = "";
        	var callBackFnc = "fnCallback";

        	this.gfnTransaction(strSvcId,		// transaction을 구분하기 위한 svc id값
        						strSvcType, 	// transaction을 요청할 구분
        						inProc,			// Procedure 정보 Dataset 이름
        						inData, 		// 입력값으로 보낼 dataset id, a=b형태로 실제이름과 입력이름을 매칭
        						outData, 		// 처리결과값으로 받을 dataset id, a=b형태로 실제이름과 입력이름을 매칭
        						strArg, 		// 입력갑스로 보낼 arguments, strFormData="20120607"
        						callBackFnc);	// 통신방법 정의 [생략가능]
        }

        this.btnCancle_onclick = function(obj,e) {
        	this.getParentContext().close(false);
        }

        /************************************************************************
         * 콜백 이벤트
         ************************************************************************/
        /*
         * 기본 콜백
         */
        this.fnCallback = function(svcID, errorCode, errorMsg) {
        	if (svcID == "reject") {
        		this.getParentContext().close(false);
        	}
        }

        /************************************************************************
         * 코드파인드 이벤트
         ************************************************************************/
        this.fnBeforeUserDataSetParam = function(id, dsUserParam, nrow) {
        	return true;
        }

        this.fnAfterCDTextChanged = function(id, codeFindData) {
        	var arr = codeFindData;
        }

        /************************************************************************
         * 그리드 이벤트
         ************************************************************************/
        this.fnGridBeforeUserDataSetParam = function(id, dsUserParam, nrow) {
        	return true;
        }

        this.fnGridAfterCDTextChanged = function(id, codeFindData) {
        	var arr = codeFindData;
        }

        /************************************************************************
         * 기타 이벤트
         ************************************************************************/

        /************************************************************************
         * 기타 함수
         ************************************************************************/

        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.form_onload,this);
            this.divSearch.form.divBtns.form.btnReject.addEventHandler("onclick",this.btnReject_onclick,this);
            this.divSearch.form.divBtns.form.btnCancle.addEventHandler("onclick",this.btnCancle_onclick,this);
        };
        this.loadIncludeScript("DAB_TUITION_REQUEST_REJECT_DLG.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
