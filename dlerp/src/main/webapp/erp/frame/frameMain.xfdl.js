(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("frameMain");
            this.set_titletext("frameMain");
            if (Form == this.constructor)
            {
                this._setFormPosition(1400,870);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("dsNotice", this);
            obj._setContents("<ColumnInfo><Column id=\"SN_SEQ\" type=\"STRING\" size=\"256\"/><Column id=\"NM_TITLE\" type=\"STRING\" size=\"256\"/><Column id=\"DT_UPDATE\" type=\"DATETIME\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("_dsProc", this);
            obj._setContents("<ColumnInfo><Column id=\"TARGET\" type=\"STRING\" size=\"256\"/><Column id=\"SP\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"TARGET\">select</Col><Col id=\"SP\">DZRPR_APPMANAGE_SELECT_01</Col></Row><Row><Col id=\"TARGET\">select1</Col><Col id=\"SP\">DZRPR_APPMANAGE_SELECT_03</Col></Row><Row><Col id=\"TARGET\">select2</Col><Col id=\"SP\">DZRPR_APPMANAGE_SELECT_02</Col></Row><Row><Col id=\"TARGET\">notice</Col><Col id=\"SP\">DZZPR_MAIN_NOTICELIST_SELECT</Col></Row><Row><Col id=\"TARGET\">statistics</Col><Col id=\"SP\">DZZPR_MAIN_STATISTICS_SELECT</Col></Row><Row><Col id=\"TARGET\">status</Col><Col id=\"SP\">DZZPR_MAINFORM_SELECT</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsList", this);
            obj._setContents("<ColumnInfo><Column id=\"ID_AP\" type=\"STRING\" size=\"256\"/><Column id=\"ID_AP_TYPE\" type=\"STRING\" size=\"256\"/><Column id=\"DS_AP_TYPE\" type=\"STRING\" size=\"256\"/><Column id=\"DT_START\" type=\"STRING\" size=\"256\"/><Column id=\"ID_AP_USER\" type=\"STRING\" size=\"256\"/><Column id=\"DS_HNAME\" type=\"STRING\" size=\"256\"/><Column id=\"DS_TITLE\" type=\"STRING\" size=\"256\"/><Column id=\"PARAM01\" type=\"STRING\" size=\"256\"/><Column id=\"PARAM02\" type=\"STRING\" size=\"256\"/><Column id=\"PARAM03\" type=\"STRING\" size=\"256\"/><Column id=\"PARAM04\" type=\"STRING\" size=\"256\"/><Column id=\"V_PARAM01\" type=\"STRING\" size=\"256\"/><Column id=\"V_PARAM02\" type=\"STRING\" size=\"256\"/><Column id=\"V_PARAM03\" type=\"STRING\" size=\"256\"/><Column id=\"V_PARAM04\" type=\"STRING\" size=\"256\"/><Column id=\"ST_APPR\" type=\"STRING\" size=\"256\"/><Column id=\"DS_APPR\" type=\"STRING\" size=\"256\"/><Column id=\"CD_MODULE\" type=\"STRING\" size=\"256\"/><Column id=\"ID_FORM\" type=\"STRING\" size=\"256\"/><Column id=\"ID_USER\" type=\"STRING\" size=\"256\"/><Column id=\"DS_HNAME1\" type=\"STRING\" size=\"256\"/><Column id=\"DT_COMPLETE\" type=\"STRING\" size=\"256\"/><Column id=\"ID_AP_USER1\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsList1", this);
            obj._setContents("<ColumnInfo><Column id=\"ID_AP\" type=\"STRING\" size=\"256\"/><Column id=\"ID_AP_TYPE\" type=\"STRING\" size=\"256\"/><Column id=\"DS_AP_TYPE\" type=\"STRING\" size=\"256\"/><Column id=\"DT_START\" type=\"STRING\" size=\"256\"/><Column id=\"ID_AP_USER\" type=\"STRING\" size=\"256\"/><Column id=\"DS_HNAME\" type=\"STRING\" size=\"256\"/><Column id=\"DS_TITLE\" type=\"STRING\" size=\"256\"/><Column id=\"PARAM01\" type=\"STRING\" size=\"256\"/><Column id=\"PARAM02\" type=\"STRING\" size=\"256\"/><Column id=\"PARAM03\" type=\"STRING\" size=\"256\"/><Column id=\"PARAM04\" type=\"STRING\" size=\"256\"/><Column id=\"V_PARAM01\" type=\"STRING\" size=\"256\"/><Column id=\"V_PARAM02\" type=\"STRING\" size=\"256\"/><Column id=\"V_PARAM03\" type=\"STRING\" size=\"256\"/><Column id=\"V_PARAM04\" type=\"STRING\" size=\"256\"/><Column id=\"ST_APPR\" type=\"STRING\" size=\"256\"/><Column id=\"DS_APPR\" type=\"STRING\" size=\"256\"/><Column id=\"CD_MODULE\" type=\"STRING\" size=\"256\"/><Column id=\"ID_FORM\" type=\"STRING\" size=\"256\"/><Column id=\"ID_USER\" type=\"STRING\" size=\"256\"/><Column id=\"DS_HNAME1\" type=\"STRING\" size=\"256\"/><Column id=\"DT_COMPLETE\" type=\"STRING\" size=\"256\"/><Column id=\"ID_AP_USER1\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsList2", this);
            obj._setContents("<ColumnInfo><Column id=\"ID_AP\" type=\"STRING\" size=\"256\"/><Column id=\"ID_AP_TYPE\" type=\"STRING\" size=\"256\"/><Column id=\"DS_AP_TYPE\" type=\"STRING\" size=\"256\"/><Column id=\"DT_START\" type=\"STRING\" size=\"256\"/><Column id=\"ID_AP_USER\" type=\"STRING\" size=\"256\"/><Column id=\"DS_HNAME\" type=\"STRING\" size=\"256\"/><Column id=\"DS_TITLE\" type=\"STRING\" size=\"256\"/><Column id=\"PARAM01\" type=\"STRING\" size=\"256\"/><Column id=\"PARAM02\" type=\"STRING\" size=\"256\"/><Column id=\"PARAM03\" type=\"STRING\" size=\"256\"/><Column id=\"PARAM04\" type=\"STRING\" size=\"256\"/><Column id=\"V_PARAM01\" type=\"STRING\" size=\"256\"/><Column id=\"V_PARAM02\" type=\"STRING\" size=\"256\"/><Column id=\"V_PARAM03\" type=\"STRING\" size=\"256\"/><Column id=\"V_PARAM04\" type=\"STRING\" size=\"256\"/><Column id=\"ST_APPR\" type=\"STRING\" size=\"256\"/><Column id=\"DS_APPR\" type=\"STRING\" size=\"256\"/><Column id=\"CD_MODULE\" type=\"STRING\" size=\"256\"/><Column id=\"ID_FORM\" type=\"STRING\" size=\"256\"/><Column id=\"DT_COMPLETE\" type=\"STRING\" size=\"256\"/><Column id=\"DT_START1\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsNoticePopup", this);
            obj._setContents("<ColumnInfo><Column id=\"SN_SEQ\" type=\"STRING\" size=\"256\"/><Column id=\"NM_TITLE\" type=\"STRING\" size=\"256\"/><Column id=\"DT_UPDATE\" type=\"DATETIME\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsMainStatus", this);
            obj._setContents("");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsStatistics", this);
            obj._setContents("<ColumnInfo><Column id=\"YM_MONTH\" type=\"STRING\" size=\"256\"/><Column id=\"YM_MONTH_DI\" type=\"STRING\" size=\"256\"/><Column id=\"CT_A\" type=\"INT\" size=\"256\"/><Column id=\"CT_B\" type=\"INT\" size=\"256\"/><Column id=\"TY_C\" type=\"STRING\" size=\"256\"/><Column id=\"RT_D\" type=\"BIGDECIMAL\" size=\"256\"/><Column id=\"RT_E\" type=\"BIGDECIMAL\" size=\"256\"/><Column id=\"RT_F\" type=\"BIGDECIMAL\" size=\"256\"/><Column id=\"AM_G\" type=\"BIGDECIMAL\" size=\"256\"/><Column id=\"AM_H\" type=\"BIGDECIMAL\" size=\"256\"/><Column id=\"RT_I\" type=\"BIGDECIMAL\" size=\"256\"/><Column id=\"AM_J\" type=\"BIGDECIMAL\" size=\"256\"/><Column id=\"AM_K\" type=\"BIGDECIMAL\" size=\"256\"/><Column id=\"RT_L\" type=\"BIGDECIMAL\" size=\"256\"/><Column id=\"CT_M\" type=\"BIGDECIMAL\" size=\"256\"/><Column id=\"CT_N\" type=\"BIGDECIMAL\" size=\"256\"/><Column id=\"CT_O\" type=\"BIGDECIMAL\" size=\"256\"/><Column id=\"CT_R\" type=\"BIGDECIMAL\" size=\"256\"/><Column id=\"CT_P\" type=\"BIGDECIMAL\" size=\"256\"/><Column id=\"CT_Q\" type=\"BIGDECIMAL\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_MF_budget", this);
            obj._setContents("<ColumnInfo><Column id=\"계정과목\" type=\"STRING\" size=\"256\"/><Column id=\"편성금액\" type=\"STRING\" size=\"256\"/><Column id=\"집행내역\" type=\"STRING\" size=\"256\"/><Column id=\"잔여금액\" type=\"STRING\" size=\"256\"/><Column id=\"통제\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"계정과목\">통신비(일반)_휴대폰사용비 test~ test~ test~ test~ test~ test~ </Col><Col id=\"편성금액\">895000</Col><Col id=\"집행내역\">0</Col><Col id=\"잔여금액\">895000</Col><Col id=\"통제\">월</Col></Row><Row><Col id=\"계정과목\">여비교통비(일반)_기타여비 test~ test~ test~ </Col><Col id=\"편성금액\">3540000</Col><Col id=\"집행내역\">480000</Col><Col id=\"잔여금액\">3060000</Col><Col id=\"통제\">분기</Col></Row><Row><Col id=\"계정과목\">여비교통비(일반)_시내교통비 test~ test~ test~ </Col><Col id=\"편성금액\">1890000</Col><Col id=\"집행내역\">86580</Col><Col id=\"잔여금액\">1803420</Col><Col id=\"통제\">월</Col></Row><Row><Col id=\"계정과목\">여비교통비(일반)_국내출장비</Col><Col id=\"편성금액\">54400000</Col><Col id=\"집행내역\">610767</Col><Col id=\"잔여금액\">4789233</Col><Col id=\"통제\">분기</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_MF_claim", this);
            obj._setContents("<ColumnInfo><Column id=\"거래처\" type=\"STRING\" size=\"256\"/><Column id=\"적요\" type=\"STRING\" size=\"256\"/><Column id=\"청구금액\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"거래처\">(주)나은소프트 test~ test~ test~ </Col><Col id=\"적요\">대보그룹 그룹웨어 유지보수료 (9월) test~ test~ test~ </Col><Col id=\"청구금액\">234500</Col></Row><Row><Col id=\"거래처\">퍼스트전산 test~ test~ test~ </Col><Col id=\"적요\">복사기임대료(C4475) 외 9건</Col><Col id=\"청구금액\">5643000</Col></Row><Row><Col id=\"거래처\">(주)이도 test~ test~ test~ </Col><Col id=\"적요\">2022년 06월 전산용역 (테스트, 테스트)</Col><Col id=\"청구금액\">13000000</Col></Row><Row><Col id=\"거래처\">대보정보통신</Col><Col id=\"적요\">CAD 인증서버 5월 기재사항착오 정정</Col><Col id=\"청구금액\">15000000</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_MF_deadline", this);
            obj._setContents("<ColumnInfo><Column id=\"분류\" type=\"STRING\" size=\"256\"/><Column id=\"구분\" type=\"STRING\" size=\"256\"/><Column id=\"진행상태\" type=\"STRING\" size=\"256\"/><Column id=\"건수\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"분류\">본사경비</Col><Col id=\"구분\">[AP] 본사경비</Col><Col id=\"진행상태\">전표미발행</Col><Col id=\"건수\">22</Col></Row><Row><Col id=\"분류\">본사경비</Col><Col id=\"구분\">[AP] 본사법인카드</Col><Col id=\"진행상태\">미작성</Col><Col id=\"건수\">12</Col></Row><Row><Col id=\"분류\">현장경비</Col><Col id=\"구분\">[AP] 현장경비</Col><Col id=\"진행상태\">전표미승인</Col><Col id=\"건수\">7</Col></Row><Row><Col id=\"분류\">현장경비</Col><Col id=\"구분\">[AP] 본사법인카드</Col><Col id=\"진행상태\">미작성</Col><Col id=\"건수\">20</Col></Row><Row><Col id=\"분류\">통합전표</Col><Col id=\"구분\">전자세금계산서</Col><Col id=\"진행상태\">전표미발행</Col><Col id=\"건수\">1</Col></Row><Row><Col id=\"분류\">유무형자산</Col><Col id=\"구분\">자산이동</Col><Col id=\"진행상태\">미작성</Col><Col id=\"건수\">8</Col></Row><Row><Col id=\"분류\">도급기성</Col><Col id=\"구분\">[AR] 공사비청구</Col><Col id=\"진행상태\">세금계산서미발행</Col><Col id=\"건수\">2</Col></Row><Row><Col id=\"분류\">자금운용</Col><Col id=\"구분\">차입금/회사채</Col><Col id=\"진행상태\">전표미발행</Col><Col id=\"건수\">2</Col></Row></Rows>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Static("sta00","0","0","100.00%","500",null,null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_cssclass("sta_WF_topbg");
            this.addChild(obj.name, obj);

            obj = new Div("div00","0","100",null,"194","0",null,"1400",null,null,null,this);
            obj.set_taborder("1");
            obj.set_cssclass("div_info");
            this.addChild(obj.name, obj);

            obj = new Static("sta00","304","43","234","28",null,null,null,null,null,null,this.div00.form);
            obj.set_taborder("0");
            obj.set_text("2023.01.01(월)");
            obj.set_cssclass("sta_today");
            this.div00.addChild(obj.name, obj);

            obj = new Static("sta01","300","sta00:12","590","51",null,null,null,null,null,null,this.div00.form);
            obj.set_taborder("1");
            obj.set_text("<b v=\'true\'>이선화</b>님, 반갑습니다.");
            obj.set_cssclass("sta_welcome");
            obj.set_usedecorate("true");
            this.div00.addChild(obj.name, obj);

            obj = new Static("sta01","82","364","128","37",null,null,null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_text("공지사항");
            obj.set_cssclass("sta_titleNotice");
            this.addChild(obj.name, obj);

            obj = new Button("btn00","82","sta01:16","50","20",null,null,null,null,null,null,this);
            obj.set_taborder("3");
            obj.set_text("더보기");
            obj.set_cssclass("btn_NoticeMore");
            this.addChild(obj.name, obj);

            obj = new Div("divNotice1","290","364","340","374",null,null,null,null,null,null,this);
            obj.set_taborder("4");
            obj.set_cssclass("div_NoticeBox");
            this.addChild(obj.name, obj);

            obj = new Static("staSeq",null,null,null,null,null,null,null,null,null,null,this.divNotice1.form);
            obj.set_text("2");
            this.divNotice1.addChild(obj.name, obj);

            obj = new Static("staDD","39","24","62","51",null,null,null,null,null,null,this.divNotice1.form);
            obj.set_taborder("0");
            obj.set_text("24");
            obj.set_cssclass("sta_NoticeDay");
            this.divNotice1.addChild(obj.name, obj);

            obj = new Static("staYYMM","40","staDD:6","57","18",null,null,null,null,null,null,this.divNotice1.form);
            obj.set_taborder("1");
            obj.set_text("2023.01");
            obj.set_cssclass("sta_NoticeYM");
            this.divNotice1.addChild(obj.name, obj);

            obj = new Static("staTitle","39","staYYMM:24","260","27",null,null,null,null,null,null,this.divNotice1.form);
            obj.set_taborder("2");
            obj.set_text("ERP사이트 정기점검 기간 안내");
            obj.set_cssclass("sta_NoticeTitle");
            this.divNotice1.addChild(obj.name, obj);

            obj = new Static("staContent","40","staTitle:16",null,"64","40",null,null,null,null,null,this.divNotice1.form);
            obj.set_taborder("3");
            obj.set_text("ERP사이트 정기점검 기간을 알려드립니다.ㆍ기간 : 2023.01.21~2023.01.22 ㆍ내용 : ERP사이트 교체로 인한 정기점검 안내사항 숙지바랍니다.");
            obj.set_cssclass("sta_NoticeCon");
            obj.set_wordWrap("char");
            this.divNotice1.addChild(obj.name, obj);

            obj = new Button("btnDetail","244","315","56","28",null,null,null,null,null,null,this.divNotice1.form);
            obj.set_taborder("4");
            obj.set_text("상세보기");
            obj.set_cssclass("btn_NotiDetail");
            this.divNotice1.addChild(obj.name, obj);

            obj = new Div("divNoticeEmpty1","290","364","340","374",null,null,null,null,null,null,this);
            obj.set_taborder("6");
            obj.set_cssclass("div_NoticeNodata");
            obj.set_text("");
            this.addChild(obj.name, obj);

            obj = new Button("btnNoticeRegister","106","216","132","32",null,null,null,null,null,null,this.divNoticeEmpty1.form);
            obj.set_taborder("0");
            obj.set_text("공지사항등록");
            obj.set_cssclass("btn_addNotice");
            this.divNoticeEmpty1.addChild(obj.name, obj);

            obj = new Div("divNotice2","divNotice1:24","364","340","374",null,null,null,null,null,null,this);
            obj.set_taborder("5");
            obj.set_cssclass("div_NoticeBox");
            this.addChild(obj.name, obj);

            obj = new Static("staSeq",null,null,null,null,null,null,null,null,null,null,this.divNotice2.form);
            obj.set_text("2");
            this.divNotice2.addChild(obj.name, obj);

            obj = new Static("staDD","39","24","62","51",null,null,null,null,null,null,this.divNotice2.form);
            obj.set_taborder("0");
            obj.set_text("10");
            obj.set_cssclass("sta_NoticeDay");
            this.divNotice2.addChild(obj.name, obj);

            obj = new Static("staYYMM","40","staDD:6","57","18",null,null,null,null,null,null,this.divNotice2.form);
            obj.set_taborder("1");
            obj.set_text("2023.01");
            obj.set_cssclass("sta_NoticeYM");
            this.divNotice2.addChild(obj.name, obj);

            obj = new Static("staTitle","39","staYYMM:24","260","27",null,null,null,null,null,null,this.divNotice2.form);
            obj.set_taborder("2");
            obj.set_text("ERP 겸직권한 신청방법");
            obj.set_cssclass("sta_NoticeTitle");
            this.divNotice2.addChild(obj.name, obj);

            obj = new Static("staContent","40","staTitle:16",null,"64","40",null,null,null,null,null,this.divNotice2.form);
            obj.set_taborder("3");
            obj.set_text("내용이 없습니다.");
            obj.set_cssclass("sta_NoticeCon");
            obj.set_wordWrap("char");
            this.divNotice2.addChild(obj.name, obj);

            obj = new Button("btnDetail","244","315","56","28",null,null,null,null,null,null,this.divNotice2.form);
            obj.set_taborder("4");
            obj.set_text("상세보기");
            obj.set_cssclass("btn_NotiDetail");
            this.divNotice2.addChild(obj.name, obj);

            obj = new Div("divNoticeEmpty2","divNotice1:24","364","340","374",null,null,null,null,null,null,this);
            obj.set_taborder("6");
            obj.set_cssclass("div_NoticeNodata");
            obj.set_text("");
            this.addChild(obj.name, obj);

            obj = new Button("btnNoticeRegister","106","216","132","32",null,null,null,null,null,null,this.divNoticeEmpty2.form);
            obj.set_taborder("0");
            obj.set_text("공지사항등록");
            obj.set_cssclass("btn_addNotice");
            this.divNoticeEmpty2.addChild(obj.name, obj);

            obj = new Div("divNotice3","divNotice2:24","364","340","374",null,null,null,null,null,null,this);
            obj.set_taborder("5");
            obj.set_cssclass("div_NoticeBox");
            this.addChild(obj.name, obj);

            obj = new Static("staSeq",null,null,null,null,null,null,null,null,null,null,this.divNotice3.form);
            obj.set_text("2");
            this.divNotice3.addChild(obj.name, obj);

            obj = new Static("staDD","39","24","62","51",null,null,null,null,null,null,this.divNotice3.form);
            obj.set_taborder("0");
            obj.set_text("10");
            obj.set_cssclass("sta_NoticeDay");
            this.divNotice3.addChild(obj.name, obj);

            obj = new Static("staYYMM","40","staDD:6","57","18",null,null,null,null,null,null,this.divNotice3.form);
            obj.set_taborder("1");
            obj.set_text("2023.01");
            obj.set_cssclass("sta_NoticeYM");
            this.divNotice3.addChild(obj.name, obj);

            obj = new Static("staTitle","39","staYYMM:24","260","27",null,null,null,null,null,null,this.divNotice3.form);
            obj.set_taborder("2");
            obj.set_text("ERP 겸직권한 신청방법");
            obj.set_cssclass("sta_NoticeTitle");
            this.divNotice3.addChild(obj.name, obj);

            obj = new Static("staContent","40","staTitle:16",null,"64","40",null,null,null,null,null,this.divNotice3.form);
            obj.set_taborder("3");
            obj.set_text("내용이 없습니다.");
            obj.set_cssclass("sta_NoticeCon");
            obj.set_wordWrap("char");
            this.divNotice3.addChild(obj.name, obj);

            obj = new Button("btnDetail","244","315","56","28",null,null,null,null,null,null,this.divNotice3.form);
            obj.set_taborder("4");
            obj.set_text("상세보기");
            obj.set_cssclass("btn_NotiDetail");
            this.divNotice3.addChild(obj.name, obj);

            obj = new Div("divNoticeEmpty3","divNotice2:24","364","340","374",null,null,null,null,null,null,this);
            obj.set_taborder("6");
            obj.set_cssclass("div_NoticeNodata");
            obj.set_text("");
            this.addChild(obj.name, obj);

            obj = new Button("btnNoticeRegister","106","216","132","32",null,null,null,null,null,null,this.divNoticeEmpty3.form);
            obj.set_taborder("0");
            obj.set_text("공지사항등록");
            obj.set_cssclass("btn_addNotice");
            this.divNoticeEmpty3.addChild(obj.name, obj);
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
        this.registerScript("frameMain.xfdl", function() {
        this.fn_setMore1 = function(str){
          var textLength = str.length;
          var returnValue = str;

          if(textLength > 26){
          returnValue = str.substring(0,26)+"...";
          }

          return returnValue;
        };

        this.fn_setMore2 = function(str){
          var textLength = str.length;
          var returnValue = str;

          if(textLength > 8){
          returnValue = str.substring(0,8)+"...";
          }

          return returnValue;
        };

        this.fn_setMore3 = function(str){
          var textLength = str.length;
          var returnValue = str;

          if(textLength > 18){
          returnValue = str.substring(0,18)+"...";
          }

          return returnValue;
        };


        this.fnShowWork  = function(bType){
        }
        this.fnSelect  = function(){
        }


        /*

        재경팀 화면은 ID='div_MF_deadline'를 visible > true 적용해주세요.

        */
        this.divNotice1_btnDetail_onclick = function(obj,e) {
        	var oArgs = {SN_SEQ: this.divNotice1.form.staSeq.text};
        	var oOption = {};
        	this.gfnOpenPopup('notice_popup', 'dzz::DZZ_NOTICE.xfdl', oArgs, function(svcId, oRtn) { }, oOption);
        }

        this.divNotice2_btnDetail_onclick = function(obj,e) {
        	var oArgs = {SN_SEQ: this.divNotice2.form.staSeq.text};
        	var oOption = {};
        	this.gfnOpenPopup('notice_popup', 'dzz::DZZ_NOTICE.xfdl', oArgs, function(svcId, oRtn) { }, oOption);
        }

        this.divNotice3_btnDetail_onclick = function(obj,e) {
        	var oArgs = {SN_SEQ: this.divNotice3.form.staSeq.text};
        	var oOption = {};
        	this.gfnOpenPopup('notice_popup', 'dzz::DZZ_NOTICE.xfdl', oArgs, function(svcId, oRtn) { }, oOption);
        }
        //더보기 클릭
        this.frameMain_btnMore_onclick = function(obj,e)
        {
        	var param = {};
        	this.gfnFormOpen("DZU", "DZU_GONGJILIST", "",  param);
        };

        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.frameMain_onload,this);
            this.sta00.addEventHandler("onclick",this.Common_onclick,this);
            this.btn00.addEventHandler("onclick",this.frameMain_btnMore_onclick,this);
            this.divNotice1.form.staDD.addEventHandler("onclick",this.div01_sta00_onclick,this);
            this.divNotice1.form.btnDetail.addEventHandler("onclick",this.divNotice1_btnDetail_onclick,this);
            this.divNoticeEmpty1.form.btnNoticeRegister.addEventHandler("onclick",this.frameMain_btnMore_onclick,this);
            this.divNotice2.form.btnDetail.addEventHandler("onclick",this.divNotice2_btnDetail_onclick,this);
            this.divNoticeEmpty2.form.btnNoticeRegister.addEventHandler("onclick",this.frameMain_btnMore_onclick,this);
            this.divNotice3.form.btnDetail.addEventHandler("onclick",this.divNotice3_btnDetail_onclick,this);
            this.divNoticeEmpty3.form.btnNoticeRegister.addEventHandler("onclick",this.frameMain_btnMore_onclick,this);
        };
        this.loadIncludeScript("frameMain.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
