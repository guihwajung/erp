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
            this.set_titletext("개인정보 제공 및 활용 동의서");
            this.set_scrolltype("both");
            this.getSetter("maxwidth").set("1050");
            this.getSetter("maxheight").set("800");
            if (Form == this.constructor)
            {
                this._setFormPosition(990,950);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize

            
            // UI Components Initialize
            obj = new Div("divData","0","0",null,null,"0","0",null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_cssclass("div_DATA_Bg");
            obj.set_text("");
            this.addChild(obj.name, obj);

            obj = new Static("staTile02","10","10","208","35",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("0");
            obj.set_text("개인정보 제공 및 활용 동의서 ");
            obj.set_cssclass("sta_TITLE_Bg");
            this.divData.addChild(obj.name, obj);

            obj = new Static("staCdCorp","25","45","869","22",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("1");
            obj.set_text("하기 본인은 개인정보보호법 제15조 및 제24조에 따라 귀하의 개인정보의 수집, 이용목적과 수집하려는 개인정보의 항목, 개인정보 보유 기간에 대해 동의합니다. ");
            obj.set_cssclass("ta_WF_tablelabelY");
            this.divData.addChild(obj.name, obj);

            obj = new Static("staCdCorp00_00","10","70",null,"60","0",null,null,null,null,null,this.divData.form);
            obj.set_taborder("2");
            obj.set_text("◀ 아 래 ▶");
            obj.set_cssclass("ta_WF_tablelabelY");
            obj.set_textAlign("center");
            this.divData.addChild(obj.name, obj);

            obj = new Static("staTile02_00","10","130","188","35",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("3");
            obj.set_text("개인정보의 수집, 이용 목적");
            obj.set_cssclass("sta_TITLE_Bg");
            this.divData.addChild(obj.name, obj);

            obj = new Static("staCdCorp00_00_00","25","165","376","22",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("4");
            obj.set_text("1)본인확인, 전화 또는 우편으로 채용결정 통보를 위한 목적 (채용시)");
            obj.set_cssclass("ta_WF_tablelabelY");
            this.divData.addChild(obj.name, obj);

            obj = new Static("staCdCorp00_00_00_00","25","191","533","22",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("5");
            obj.set_text("2)본인확인, 각종 내용증명 통보 및 비상연락망 확보 등 각종 인사업무 처리의 목적(재직자, 퇴직자) ");
            obj.set_cssclass("ta_WF_tablelabelY");
            this.divData.addChild(obj.name, obj);

            obj = new Static("staTile02_00_00","10","233","198","35",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("6");
            obj.set_text("개인정보의 보유 및 이용기간");
            obj.set_cssclass("sta_TITLE_Bg");
            this.divData.addChild(obj.name, obj);

            obj = new Static("staCdCorp00_00_00_01","25","268","275","22",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("7");
            obj.set_text("1)채용응시자: 채용원서 접수일로부터 3개월까지 ");
            obj.set_cssclass("ta_WF_tablelabelY");
            this.divData.addChild(obj.name, obj);

            obj = new Static("staCdCorp00_00_00_01_00","25","294","116","22",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("8");
            obj.set_text("2)재직자: 재직기간 ");
            obj.set_cssclass("ta_WF_tablelabelY");
            this.divData.addChild(obj.name, obj);

            obj = new Static("staCdCorp00_00_00_01_01","25","320","108","22",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("9");
            obj.set_text("3)퇴사자: 무기한  ");
            obj.set_cssclass("ta_WF_tablelabelY");
            this.divData.addChild(obj.name, obj);

            obj = new Static("staTile02_00_00_00","10","362","185","35",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("10");
            obj.set_text("기본 개인 정보 수집 · 활용");
            obj.set_cssclass("sta_TITLE_Bg");
            this.divData.addChild(obj.name, obj);

            obj = new Static("staCdCorp00_00_00_01_02","25","397","164","22",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("11");
            obj.set_text("1. 수집되는 개인정보의 항목");
            obj.set_cssclass("ta_WF_tablelabelY");
            this.divData.addChild(obj.name, obj);

            obj = new Static("staCdCorp00_00_00_01_00_00","45","423","400","22",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("12");
            obj.set_text("채용원서 또는 인사카드에 따른 성명, 전화번호, 주소 등 인사 제반 정보  ");
            obj.set_cssclass("ta_WF_tablelabelY");
            this.divData.addChild(obj.name, obj);

            obj = new Radio("rdoTY_GUBUN","45","447","450","40",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("13");
            obj.set_codecolumn("codecolumn");
            obj.set_datacolumn("datacolumn");
            obj.set_columncount("-1");
            obj.set_rowcount("-1");
            obj.set_font("normal bold 10pt/normal \"Arial\"");
            obj.set_color("#2561ba");
            var divData_form_rdoTY_GUBUN_innerdataset = new nexacro.NormalDataset("divData_form_rdoTY_GUBUN_innerdataset", obj);
            divData_form_rdoTY_GUBUN_innerdataset._setContents("<ColumnInfo><Column id=\"codecolumn\" size=\"256\"/><Column id=\"datacolumn\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"codecolumn\">1</Col><Col id=\"datacolumn\">개인정보 수집 및 이용에 동의함</Col></Row><Row><Col id=\"codecolumn\">0</Col><Col id=\"datacolumn\">개인정보 수집 및 이용에 동의하지 않음</Col></Row></Rows>");
            obj.set_innerdataset(divData_form_rdoTY_GUBUN_innerdataset);
            obj.set_text("개인정보 수집 및 이용에 동의함");
            obj.set_value("1");
            obj.set_index("0");
            this.divData.addChild(obj.name, obj);

            obj = new Static("staCdCorp00_00_00_01_02_00","25","489","192","22",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("14");
            obj.set_text("2. 수집되는 고유식별정보의 항목 ");
            obj.set_cssclass("ta_WF_tablelabelY");
            this.divData.addChild(obj.name, obj);

            obj = new Static("staCdCorp00_00_00_01_00_00_00","45","513","354","22",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("15");
            obj.set_text("1)주민등록번호  2)운전면허번호  3)외국인등록번호  4)여권번호");
            obj.set_cssclass("ta_WF_tablelabelY");
            this.divData.addChild(obj.name, obj);

            obj = new Radio("rdoTY_GUBUN00","45","537","450","40",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("16");
            obj.set_codecolumn("codecolumn");
            obj.set_datacolumn("datacolumn");
            obj.set_columncount("-1");
            obj.set_rowcount("-1");
            obj.set_font("normal bold 10pt/normal \"Arial\"");
            obj.set_color("#2561ba");
            var divData_form_rdoTY_GUBUN00_innerdataset = new nexacro.NormalDataset("divData_form_rdoTY_GUBUN00_innerdataset", obj);
            divData_form_rdoTY_GUBUN00_innerdataset._setContents("<ColumnInfo><Column id=\"codecolumn\" size=\"256\"/><Column id=\"datacolumn\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"codecolumn\">1</Col><Col id=\"datacolumn\">개인정보 수집 및 이용에 동의함</Col></Row><Row><Col id=\"codecolumn\">0</Col><Col id=\"datacolumn\">개인정보 수집 및 이용에 동의하지 않음</Col></Row></Rows>");
            obj.set_innerdataset(divData_form_rdoTY_GUBUN00_innerdataset);
            obj.set_text("임직원");
            obj.set_value("E");
            obj.set_index("0");
            this.divData.addChild(obj.name, obj);

            obj = new Static("staTile02_00_00_01","10","588","500","35",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("17");
            obj.set_text("개인정보 제공 동의 거부 권리");
            obj.set_cssclass("sta_TITLE_Bg");
            this.divData.addChild(obj.name, obj);

            obj = new Static("staCdCorp00_00_00_01_03","30","623",null,"22","5",null,null,null,null,null,this.divData.form);
            obj.set_taborder("18");
            obj.set_text("1) 상기 본인은 개인정보 수집에 대해 거부할 권리가 있으며, 거부를 하는 경우 채용시 본인확인이 불가능하여 채용결정통보가 가지 않을 수 있음을 확인함에 동의합니다. (채용시) ");
            obj.set_cssclass("ta_WF_tablelabelY");
            this.divData.addChild(obj.name, obj);

            obj = new Static("staCdCorp00_00_00_01_00_01","30","649",null,"22","0",null,null,null,null,null,this.divData.form);
            obj.set_taborder("19");
            obj.set_text("2) 상기 본인은 개인정보 수집에 대해 거부할 권리가 있으며, 거부를 하는 경우 동의 거부에 따른 불이익은 없음. 다만 주민번호, 계좌번호 정보를 제공하지 않는 경우 임금의");
            obj.set_cssclass("ta_WF_tablelabelY");
            this.divData.addChild(obj.name, obj);

            obj = new Static("staCdCorp00_00_00_01_01_00","37","675","940","22",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("20");
            obj.set_text("  지급 등이 불편하거나 퇴직 후 각종 증명서 발급이 제한될 수 있음을 확인함에 동의합니다. (재직자, 퇴사자) ");
            obj.set_cssclass("ta_WF_tablelabelY");
            this.divData.addChild(obj.name, obj);

            obj = new Static("staTile02_00_00_01_00","10","717","500","35",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("21");
            obj.set_text("CARBONCO 개인정보 관리책임자 ");
            obj.set_cssclass("sta_TITLE_Bg");
            this.divData.addChild(obj.name, obj);

            obj = new Static("staCdCorp00_00_00_01_01_01_00_00_00","727","855","80","24",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("22");
            obj.set_text("작성일");
            obj.set_cssclass("sta_WF_bold");
            this.divData.addChild(obj.name, obj);

            obj = new Static("staCdCorp00_00_00_01_01_01_00_00","727","884","80","24",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("23");
            obj.set_text("상기 동의자");
            obj.set_cssclass("sta_WF_bold");
            this.divData.addChild(obj.name, obj);

            obj = new Static("staName","817","885","100","24",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("25");
            obj.set_text("홍길동");
            obj.set_cssclass("ta_WF_tablelabelY");
            obj.set_textAlign("left");
            this.divData.addChild(obj.name, obj);

            obj = new Static("staDate","817","855","100","24",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("26");
            obj.set_text("2020년 1월 1일");
            obj.set_cssclass("ta_WF_tablelabelY");
            this.divData.addChild(obj.name, obj);

            obj = new Static("sta21","28","757","97","34",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("27");
            obj.set_text("소속");
            obj.set_cssclass("sta_WF_tablelabel");
            obj.set_textAlign("center");
            this.divData.addChild(obj.name, obj);

            obj = new Static("sta31","28","790","97","34",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("28");
            obj.set_cssclass("sta_WF_tablebg");
            obj.set_text("정보보호센터");
            obj.set_textAlign("center");
            this.divData.addChild(obj.name, obj);

            obj = new Static("sta21_00","124","757","140","34",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("29");
            obj.set_text("개인정보 보호책임자");
            obj.set_cssclass("sta_WF_tablelabel");
            obj.set_textAlign("center");
            this.divData.addChild(obj.name, obj);

            obj = new Static("sta31_00","124","790","140","34",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("30");
            obj.set_cssclass("sta_WF_tablebg");
            obj.set_text("고길동");
            obj.set_textAlign("center");
            this.divData.addChild(obj.name, obj);

            obj = new Static("sta21_00_00","263","757","100","34",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("31");
            obj.set_text("직위");
            obj.set_cssclass("sta_WF_tablelabel");
            obj.set_textAlign("center");
            this.divData.addChild(obj.name, obj);

            obj = new Static("sta31_00_00","263","790","100","34",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("32");
            obj.set_cssclass("sta_WF_tablebg");
            obj.set_text("센터장");
            obj.set_textAlign("center");
            this.divData.addChild(obj.name, obj);

            obj = new Static("sta21_00_00_00","362","757","180","34",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("33");
            obj.set_text("이메일");
            obj.set_cssclass("sta_WF_tablelabel");
            obj.set_textAlign("center");
            this.divData.addChild(obj.name, obj);

            obj = new Static("sta31_00_00_00","362","790","180","34",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("34");
            obj.set_cssclass("sta_WF_tablebg");
            obj.set_text("admin@Carbonco.com");
            obj.set_textAlign("center");
            this.divData.addChild(obj.name, obj);

            obj = new Static("sta21_00_00_00_00","541","757","150","34",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("35");
            obj.set_text("연락처");
            obj.set_cssclass("sta_WF_tablelabel");
            obj.set_textAlign("center");
            this.divData.addChild(obj.name, obj);

            obj = new Static("sta31_00_00_00_00","541","790","150","34",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("36");
            obj.set_cssclass("sta_WF_tablebg");
            obj.set_text("02-2011-7583");
            obj.set_textAlign("center");
            this.divData.addChild(obj.name, obj);

            obj = new Button("btn00_01","890","885","50","24",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("24");
            obj.set_text("확인");
            this.divData.addChild(obj.name, obj);
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
        this.registerScript("DAW_PERSONAL_INFORMATION.xfdl", function() {
        /**  ③	AuthClient 사용자정보 ***
        this.AuthClient.ID_USER	: 사용자 ID
        this.AuthClient.DS_HNAME	: 사용자 이름
        this.AuthClient.CD_DEPT	: 사용자 부서코드
        this.AuthClient.DS_DEPT	: 사용자 부서명칭
        this.AuthClient.CD_CORP	: 사용자 법인코드
        this.AuthClient.DS_CORP	: 사용자 법인명칭
        this.AuthClient.ID_SABUN	: 사용자 사번 **/

        this.objApp = this.gfnGetApplication();
        this.form_onload = function(obj,e)
        {
        	// -- 필수 -------------------//
        	this.gfnFormOnLoad(this);
        	this.gfnFormInfo(this);
        	// ---------------------------//
        	this.fnSetButton();			//버튼 공통 설정
        	this.fnSetExtendButton();	//화면별 버튼 id 설정
        	this.fnSetVariable();		//변수선언
        	this.fnSetEvent();			//이벤트 설정
        	this.fnSetParameter();		//파라미터 설정
        };

        /************************************************************************
         * 버튼 설정
         * 서브버튼 사용 처리. 공통 및 확장버튼 버튼관리화면에서 셋팅.
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

        	// 타화면에서 오픈시 넘어오는 파라미터 처리
        	var frame = this.getOwnerFrame();
        	var date = this.gfnGetDate();
        	//동의 일자 셋팅
        	if( !this.gfnIsNull(frame.dtPersonalInformation) ){
        		date = frame.dtPersonalInformation;
        	}
        	this.divData.form.rdoTY_GUBUN.set_value(frame.tyPersonalInformationUserdata);
        	this.divData.form.rdoTY_GUBUN00.set_value(frame.tyPersonalInformationUnique);

        	//일자 셋팅
        	var year = date.substr(0, 4);
        	var month = date.substr(4, 2);
        	var day = date.substr(6, 2);
        	this.divData.form.staDate.set_text( year + "년 " + month + "월 " + day + "일");

        	//서약자 셋팅
        	this.divData.form.staName.set_text( frame.DS_HNAME + "   (인)" );


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

        /************************************************************************
         * Validate
         ************************************************************************/


        /************************************************************************
         * 콜백 이벤트
         ************************************************************************/

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
        this.divData_btn00_01_onclick
        = function(obj,e)
        {
        	//개인정보제공 동의 여부
        	this.userdata = this.divData.form.rdoTY_GUBUN.value;
        	//고유식별정보제공 동의 여부
        	this.unique = this.divData.form.rdoTY_GUBUN00.value;

        	if( this.userdata != "1" || this.unique != "1" ){
        		this.gfnConfirm("개인정보제공동의 및 고유식별제공동의에  동의 하지 않으면 사직서 신청이 불가능 합니다. 정말로 동의 하지 않으시겠습니까?", "data_canchange_callback");
        	}else{
        		var param = {};
        		param.gubun = "Y";
        		param.userdata = this.userdata;
        		param.unique = this.unique;

        		this.getParentContext().close(JSON.stringify(param));
        	}
        };

        //개인정보 동의
        this.data_canchange_callback = function(strId, val)
        {
        	if(val) {
        		var param = {};
        		param.gubun = "Y";
        		param.userdata = this.userdata;
        		param.unique = this.unique;

        		this.getParentContext().close(JSON.stringify(param));
        	}
        }


        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.form_onload,this);
            this.divData.form.btn00_01.addEventHandler("onclick",this.divData_btn00_01_onclick,this);
        };
        this.loadIncludeScript("DAW_PERSONAL_INFORMATION.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
