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
            this.set_titletext("출장보고서 작성 주의사항");
            this.getSetter("maxwidth").set("740");
            this.getSetter("maxheight").set("535");
            if (Form == this.constructor)
            {
                this._setFormPosition(720,470);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize

            
            // UI Components Initialize
            obj = new Div("divSearch","0","0","700","420",null,null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_text("");
            this.addChild(obj.name, obj);

            obj = new Static("sta_TITLE_T","0","5","300","18",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("0");
            obj.set_text("출장보고서 작성 주의사항");
            obj.set_cssclass("sta_TITLE_Bg");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("staBackground","0","33","700","380",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("1");
            obj.set_cssclass("sta_WF_tablebg");
            obj.set_text("");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("sta01","15","45","675","29",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("2");
            obj.set_text("- USD금액 : 보고서 작성시 발생한 증빙의 적용환율은 하나은행 환율 조회");
            obj.set_cssclass("");
            obj.set_verticalAlign("middle");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("sta02","15","sta01:-10","675","29",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("3");
            obj.set_text("  → 증빙일자 전일 최초고시 현금살때 기준");
            obj.set_cssclass("");
            obj.set_verticalAlign("middle");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("sta03","15","sta02:-10","675","29",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("4");
            obj.set_text("  ※ 계산 시 소수점 첫째 자리에서 반올림");
            obj.set_cssclass("");
            obj.set_verticalAlign("middle");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("sta04","15","sta03:-10","675","29",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("5");
            obj.set_text("  ※ 하나은행 환율 조회 URL : https://www.kebhana.com/cont/mall/mall15/mall1501/index.jsp");
            obj.set_cssclass("");
            obj.set_verticalAlign("middle");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("sta05","15","sta04:-5","675","29",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("6");
            obj.set_text("- 기타 : 통신비(해외사용분 청구내역 첨부) 및 비자/공항세 등 기재 후 상세내역 기재");
            obj.set_cssclass("");
            obj.set_verticalAlign("middle");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("sta06","15","sta05:-10","675","29",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("7");
            obj.set_text("         (예 : 도착비자구입 및 현지공항세)");
            obj.set_cssclass("");
            obj.set_verticalAlign("middle");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("sta07","15","sta06:-5","675","29",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("8");
            obj.set_text("- 가불금반납 : 최종정산금이 가불금(출장계획서에서 신청) 보다 작아 (-)로 표시 되는 경우,");
            obj.set_cssclass("");
            obj.set_verticalAlign("middle");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("sta08","15","sta07:-5","675","29",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("9");
            obj.set_text("  회사 모계좌로 반납금 입금 후 입금증빙 스캔본 첨부");
            obj.set_cssclass("");
            obj.set_verticalAlign("middle");
            obj.set_font("normal bold 10pt/normal \"Arial\"");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("sta09","15","sta08:-10","675","29",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("10");
            obj.set_text("  → [카본코원화모계좌] : 우리은행 1005-504-391928 (카본코 피티이 엘티디 한국지점)");
            obj.set_cssclass("");
            obj.set_verticalAlign("middle");
            obj.set_font("normal bold 10pt/normal \"Arial\"");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("sta10","15","sta09:-10","675","29",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("11");
            obj.set_text("  → 입금시 출장비 영수자성명 입력");
            obj.set_cssclass("");
            obj.set_verticalAlign("middle");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("sta11","15","sta10:-5","675","29",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("12");
            obj.set_text("- 정산한도 : 체재비(숙박비, 식비, 잡비)의 합산금액을 기준으로 하며, 초과 발생분 청구시는 별도 품의서 첨부");
            obj.set_cssclass("");
            obj.set_verticalAlign("middle");
            obj.set_color("red");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("sta12","15","sta11:-10","675","29",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("13");
            obj.set_text("  (카본코 경영관리팀 담당임원 승인)");
            obj.set_cssclass("");
            obj.set_verticalAlign("middle");
            obj.set_color("red");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("sta13","15","sta12:-5","115","29",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("14");
            obj.set_text("- 출장자 정보에 없는");
            obj.set_cssclass("");
            obj.set_verticalAlign("middle");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("sta14","sta13:5","sta12:-5","350","29",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("15");
            obj.set_text("동행자의 비용 합산청구는 정산한도가 초과될 수 있으니 주의");
            obj.set_cssclass("");
            obj.set_verticalAlign("middle");
            obj.set_font("normal bold 10pt/normal \"Arial\"");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("sta15","sta14:5","sta12:-5","75","29",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("16");
            obj.set_text("필요");
            obj.set_cssclass("");
            obj.set_verticalAlign("middle");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("sta16","15","sta15:-5","675","29",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("17");
            obj.set_text("- 교제비(선물대 및 내객접대비)는 별도 회계처리");
            obj.set_cssclass("");
            obj.set_verticalAlign("middle");
            obj.set_color("red");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("sta17","15","sta16:-5","675","29",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("18");
            obj.set_text("- 30일 초과된 출장일수의 숙박비, 식비, 잡비는 70%限 청구 가능");
            obj.set_cssclass("");
            obj.set_verticalAlign("middle");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("sta18","15","sta17:-5","675","29",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("19");
            obj.set_text("- 정직원 외 동행출장자의 출장비 정산을 함께 정산할 경우, 이체확인서 스캔본 첨부");
            obj.set_cssclass("");
            obj.set_verticalAlign("middle");
            this.divSearch.addChild(obj.name, obj);

            obj = new Div("divData","0","divSearch:10","625","27",null,null,null,null,null,null,this);
            obj.set_taborder("3");
            obj.set_text("");
            this.addChild(obj.name, obj);

            obj = new Div("divBtns","297","0","130","27",null,null,null,null,null,null,this.divData.form);
            obj.set_text("");
            this.divData.addChild(obj.name, obj);

            obj = new Button("btnOK","30","0","60","27",null,null,null,null,null,null,this.divData.form.divBtns.form);
            obj.set_taborder("1");
            obj.set_text("닫기");
            this.divData.form.divBtns.addChild(obj.name, obj);
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
        this.registerScript("DAB_BZTP_RULE_RPT_DLG.xfdl", function() {
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
        	this.sta01 = this.divSearch.form.sta01;
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
        // 	if (this.getOwnerFrame().GUBUN == "PLAN")
        // 	{
        // 		this.sta01.set_text(this.gfnGetConfig("DA" , "DS_RULE_PLAN"));
        // 	}
        // 	else
        // 	{
        // 		this.sta01.set_text(this.gfnGetConfig("DA" , "DS_RULE_RPT"));
        // 	}
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

        /*
         * 저장 버튼
         */
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
        // 확인버튼
        this.btnOK_onclick = function(obj, e) {
        	this.getParentContext().close(false);
        }

        /************************************************************************
         * 콜백 이벤트
         ************************************************************************/
        /*
         * 기본 콜백
         */
        this.fnCallback = function(svcID, errorCode, errorMsg) {
        	if (errorCode != 0) {
        		this.gfnAlert(errorMsg);
        		return;
        	}

        	if (svcID == "select") {

        	}
        }

        /************************************************************************
         * 코드파인드 이벤트
         ************************************************************************/
        this.fnBeforeUserDataSetParam = function(id, dsUserParam, nrow) {
        	return true;
        }

        this.fnAfterCDTextChanged = function(id, codeFindData) {

        }

        /************************************************************************
         * 그리드 이벤트
         ************************************************************************/
        this.fnGridBeforeUserDataSetParam = function(id, dsUserParam, nrow) {
        	return true;
        }

        this.fnGridAfterCDTextChanged = function(id, codeFindData) {

        }

        this.fnGridAfterEdit = function(obj,e) {

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
            this.divSearch.form.sta01.addEventHandler("onclick",this.divSearch_sta_onclick,this);
            this.divSearch.form.sta02.addEventHandler("onclick",this.divSearch_sta_onclick,this);
            this.divSearch.form.sta03.addEventHandler("onclick",this.divSearch_sta_onclick,this);
            this.divSearch.form.sta04.addEventHandler("onclick",this.divSearch_sta_onclick,this);
            this.divSearch.form.sta05.addEventHandler("onclick",this.divSearch_sta_onclick,this);
            this.divSearch.form.sta06.addEventHandler("onclick",this.divSearch_sta_onclick,this);
            this.divSearch.form.sta07.addEventHandler("onclick",this.divSearch_sta_onclick,this);
            this.divSearch.form.sta08.addEventHandler("onclick",this.divSearch_sta_onclick,this);
            this.divSearch.form.sta09.addEventHandler("onclick",this.divSearch_sta_onclick,this);
            this.divSearch.form.sta10.addEventHandler("onclick",this.divSearch_sta_onclick,this);
            this.divSearch.form.sta11.addEventHandler("onclick",this.divSearch_sta_onclick,this);
            this.divSearch.form.sta12.addEventHandler("onclick",this.divSearch_sta_onclick,this);
            this.divSearch.form.sta13.addEventHandler("onclick",this.divSearch_sta_onclick,this);
            this.divSearch.form.sta14.addEventHandler("onclick",this.divSearch_sta_onclick,this);
            this.divSearch.form.sta15.addEventHandler("onclick",this.divSearch_sta_onclick,this);
            this.divSearch.form.sta16.addEventHandler("onclick",this.divSearch_sta_onclick,this);
            this.divSearch.form.sta17.addEventHandler("onclick",this.divSearch_sta_onclick,this);
            this.divSearch.form.sta18.addEventHandler("onclick",this.divSearch_sta_onclick,this);
            this.divData.form.divBtns.form.btnOK.addEventHandler("onclick",this.btnOK_onclick,this);
        };
        this.loadIncludeScript("DAB_BZTP_RULE_RPT_DLG.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
