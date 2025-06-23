(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("DAV_CARDMYADDDLG");
            this.set_titletext("신용카드추가공제율사용분증가분(2016귀속)");
            this.getSetter("maxwidth").set("740");
            this.getSetter("maxheight").set("270");
            if (Form == this.constructor)
            {
                this._setFormPosition(740,220);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("dsList", this);
            obj._setContents("<ColumnInfo><Column id=\"AM_MYCARD2013\" type=\"BIGDECIMAL\" size=\"256\"/><Column id=\"AM_MYCARD2014\" type=\"BIGDECIMAL\" size=\"256\"/><Column id=\"AM_MYADD2013\" type=\"BIGDECIMAL\" size=\"256\"/><Column id=\"AM_MYADDSANG2015\" type=\"BIGDECIMAL\" size=\"256\"/><Column id=\"AM_MYCARD2015\" type=\"BIGDECIMAL\" size=\"256\"/><Column id=\"AM_MYADDALL2014\" type=\"BIGDECIMAL\" size=\"256\"/><Column id=\"AM_MYADDHA2015\" type=\"BIGDECIMAL\" size=\"256\"/></ColumnInfo><Rows><Row/></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("_dsProc", this);
            obj._setContents("<ColumnInfo><Column id=\"TARGET\" type=\"STRING\" size=\"256\"/><Column id=\"SP\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"TARGET\">select</Col><Col id=\"SP\">DAVPR_CARDMYADDSUBST2015_SELEC</Col></Row><Row><Col id=\"TARGET\">update</Col><Col id=\"SP\">DAVPR_CARDMYADDSUBST2015_UPDAT</Col></Row></Rows>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Static("staTITLE","0","10",null,"30","0",null,null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_text("신용카드 추가공제율 사용분 증가분(2016년 귀속 연말정산)");
            obj.set_cssclass("sta_TITLE_Bg");
            obj.set_textAlign("left");
            this.addChild(obj.name, obj);

            obj = new Div("divBtns","2","170",null,"40","0",null,null,null,null,null,this);
            obj.set_taborder("1");
            this.addChild(obj.name, obj);

            obj = new Button("btnCANCLE","368","10","60","27",null,null,null,null,null,null,this.divBtns.form);
            obj.set_taborder("1");
            obj.set_text("취소");
            this.divBtns.addChild(obj.name, obj);

            obj = new Button("btnOK","278","10","60","27",null,null,null,null,null,null,this.divBtns.form);
            obj.set_taborder("0");
            obj.set_text("확인");
            this.divBtns.addChild(obj.name, obj);

            obj = new Static("staTitle02","0","103","230","30",null,null,null,null,null,null,this);
            obj.set_taborder("7");
            obj.set_text("2014년 본인 추가공제율 사용액");
            obj.set_cssclass("sta_WF_tablelabel");
            obj.set_visible("true");
            this.addChild(obj.name, obj);

            obj = new Static("sta06","230","103","120","30",null,null,null,null,null,null,this);
            obj.set_taborder("8");
            obj.set_cssclass("sta_WF_tablebg");
            obj.set_visible("true");
            this.addChild(obj.name, obj);

            obj = new Static("staTitle00","0","45","230","30",null,null,null,null,null,null,this);
            obj.set_taborder("3");
            obj.set_text("2014년 본인 신용카드 등 사용액");
            obj.set_cssclass("sta_WF_tablelabel");
            obj.set_visible("true");
            this.addChild(obj.name, obj);

            obj = new Static("sta03","230","45","120","30",null,null,null,null,null,null,this);
            obj.set_taborder("4");
            obj.set_cssclass("sta_WF_tablebg");
            obj.set_visible("true");
            this.addChild(obj.name, obj);

            obj = new Static("staWORK_BASE","0","74","230","30",null,null,null,null,null,null,this);
            obj.set_taborder("5");
            obj.set_text("2015년 본인 신용카드 등 사용액");
            obj.set_cssclass("sta_WF_tablelabel");
            this.addChild(obj.name, obj);

            obj = new Static("sta07","230","74","120","30",null,null,null,null,null,null,this);
            obj.set_taborder("6");
            obj.set_cssclass("sta_WF_tablebg");
            this.addChild(obj.name, obj);

            obj = new Div("staTitle01","84","79","80","20",null,null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.getSetter("onchanged").set("fnSearchInit");
            this.addChild(obj.name, obj);

            obj = new Static("staTitle03","0","132","230","30",null,null,null,null,null,null,this);
            obj.set_taborder("9");
            obj.set_text("2016년 상반기 본인 추가공제율 사용액");
            obj.set_cssclass("sta_WF_tablelabel");
            this.addChild(obj.name, obj);

            obj = new Static("sta08","230","132","120","30",null,null,null,null,null,null,this);
            obj.set_taborder("10");
            obj.set_cssclass("sta_WF_tablebg");
            this.addChild(obj.name, obj);

            obj = new Static("staTitle04","350","45",null,"30","0",null,null,null,null,null,this);
            obj.set_taborder("11");
            obj.set_text("2014.1.1～2014.12.31.까지 본인이 사용한 신용카드, 현금영수증,\r\n직불카드ㆍ선불카드 전체 사용액(전통.대중 포함)");
            obj.set_cssclass("sta_WF_tablelabel");
            obj.set_visible("true");
            this.addChild(obj.name, obj);

            obj = new Static("staTitle05","350","74",null,"30","0",null,null,null,null,null,this);
            obj.set_taborder("12");
            obj.set_text("2015.1.1～2015.12.31.까지 본인이 사용한 신용카드, 현금영수증,\r\n직불카드ㆍ선불카드 전체 사용액 (전통.대중 포함)");
            obj.set_cssclass("sta_WF_tablelabel");
            this.addChild(obj.name, obj);

            obj = new Static("staTitle06","350","103",null,"30","0",null,null,null,null,null,this);
            obj.set_taborder("13");
            obj.set_text("2014.1.1.～2014.12.31.까지 본인이 사용한 전통시장ㆍ대중교통\r\nㆍ현금영수증ㆍ직불카드ㆍ선불카드 사용액의 합계액");
            obj.set_cssclass("sta_WF_tablelabel");
            obj.set_visible("true");
            this.addChild(obj.name, obj);

            obj = new Static("staTitle07","350","132",null,"30","0",null,null,null,null,null,this);
            obj.set_taborder("14");
            obj.set_text("2016.1.1.～2016.6.30.까지 본인이 사용한 전통시장ㆍ대중교통\r\nㆍ현금영수증ㆍ직불카드ㆍ선불카드 사용액의 합계액");
            obj.set_cssclass("sta_WF_tablelabel");
            this.addChild(obj.name, obj);

            obj = new Edit("edtAM_MYCARDBEF","236","50","108","20",null,null,null,null,null,null,this);
            obj.set_taborder("15");
            obj.set_inputtype("number");
            obj.set_textAlign("right");
            this.addChild(obj.name, obj);

            obj = new Edit("edtAM_MYCARD","236","79","108","20",null,null,null,null,null,null,this);
            obj.set_taborder("16");
            obj.set_inputtype("number");
            obj.set_textAlign("right");
            this.addChild(obj.name, obj);

            obj = new Edit("edtAM_MYADDALL","236","108","108","20",null,null,null,null,null,null,this);
            obj.set_taborder("17");
            obj.set_inputtype("number");
            obj.set_textAlign("right");
            this.addChild(obj.name, obj);

            obj = new Edit("edtAM_MYADDHA","236","137","108","20",null,null,null,null,null,null,this);
            obj.set_taborder("18");
            obj.set_inputtype("number");
            obj.set_textAlign("right");
            this.addChild(obj.name, obj);

            obj = new Edit("edtAM_MYCARD2013","6","180","79","26",null,null,null,null,null,null,this);
            obj.set_taborder("19");
            obj.set_visible("false");
            this.addChild(obj.name, obj);

            obj = new Edit("edtAM_MYADD2013","96","180","79","26",null,null,null,null,null,null,this);
            obj.set_taborder("20");
            obj.set_visible("false");
            this.addChild(obj.name, obj);

            obj = new Edit("edtAM_MYADDSANG2015","186","180","79","26",null,null,null,null,null,null,this);
            obj.set_taborder("21");
            obj.set_visible("false");
            this.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this
            obj = new Layout("default","",this._adjust_width,this._adjust_height,this,function(p){});
            this.addLayout(obj.name, obj);
            
            // BindItem Information
            obj = new BindItem("item1","edtAM_MYCARDBEF","value","dsList","AM_MYCARD2014");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item3","edtAM_MYCARD","value","dsList","AM_MYCARD2015");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item5","edtAM_MYADDALL","value","dsList","AM_MYADDALL2014");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item6","edtAM_MYADDHA","value","dsList","AM_MYADDHA2015");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item0","edtAM_MYCARD2013","value","dsList","AM_MYCARD2013");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item2","edtAM_MYADD2013","value","dsList","AM_MYADD2013");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item4","edtAM_MYADDSANG2015","value","dsList","AM_MYADDSANG2015");
            this.addChild(obj.name, obj);
            obj.bind();
            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script
        this.registerScript("DAV_CARDMYADDDLG.xfdl", function() {
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


        // 	this.staTITLE.set_text("신용카드 추가공제율 사용분 증가분("+this.gfnGetDate().substring(0,4)+"2016년 귀속 연말정산)");
        // 	this.staTitle00.set_text((this.gfnGetDate().substring(0,4)-1)+"년 본인 신용카드 등 사용액");
        // 	this.staTitle01.set_text(this.gfnGetDate().substring(0,4)+"년 본인 신용카드 등 사용액");
        // 	this.staTitle02.set_text((this.gfnGetDate().substring(0,4)-1)+"년 본인 추가공제율 사용액");
        // 	this.staTitle03.set_text(this.gfnGetDate().substring(0,4)+"년 본인 추가공제율 사용액");
        // 	this.staTitle04.set_text(2014.1.1～2014.12.31.까지 본인이 사용한 신용카드, 현금영수증,
        // 직불카드ㆍ선불카드 전체 사용액(전통.대중 포함)
        // 	this.staTitle05.set_text(2015.1.1～2015.12.31.까지 본인이 사용한 신용카드, 현금영수증,
        // 직불카드ㆍ선불카드 전체 사용액 (전통.대중 포함)
        // 	this.staTitle06.set_text(2014.1.1.～2014.12.31.까지 본인이 사용한 전통시장ㆍ대중교통
        // ㆍ현금영수증ㆍ직불카드ㆍ선불카드 사용액의 합계액
        // 	this.staTitle07.set_text(2016.1.1.～2016.6.30.까지 본인이 사용한 전통시장ㆍ대중교통
        // ㆍ현금영수증ㆍ직불카드ㆍ선불카드 사용액의 합계액


        	this.FormBtns.Select.click();
        };

        /************************************************************************
         * 버튼 설정 : 화면(Tab) 전환시 마다 호출
         * 서브버튼 사용 및 공통버튼 강제 제어시 여기서 처리
         ************************************************************************/
        this.fnSetButton = function() {
        	// Select, Add, Del, Save, Excel, Print
        	// SubSelect, SubAdd, SubDel, SuubSave, SubExcel
        	// this.FormBtns.Add.set_enable(false);
        	// this.FormBtns.Del.set_enable(false);
        };

        /************************************************************************
         * 확장 버튼 : 화면별 버튼 설정 ID, function 연결 (화면버튼관리)
         ************************************************************************/

        /************************************************************************
         * 변수 선언
         ************************************************************************/
        this.fnSetVariable = function() {

        	this.grSearch = this.FormInfo.GR_SEARCH;					          // 권한
        	this.cdGroup = this.AuthClient.CD_GROUP;					          // 그룹코드
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
        	//조회
        	this.dsSelect = new Dataset();
        	this.dsSelect.addColumn("CD_CORP", "string");
        	this.dsSelect.addColumn("ID_RESIDENT", "string");
        	this.dsSelect.addColumn("ID_SABUN", "string");
        	this.dsSelect.addColumn("YY_BASE", "string");
        	this.dsSelect.addColumn("MM_BASE", "string");
        	this.dsSelect.addColumn("NO_APPLY", "bigdecimal");
        	this.dsSelect.addColumn("YN_MID", "string");

        	//수정
        	this.dsUpdate = new Dataset();
        	this.dsUpdate.addColumn("CD_CORP", "string");
        	this.dsUpdate.addColumn("ID_RESIDENT", "string");
        	this.dsUpdate.addColumn("ID_SABUN", "string");
        	this.dsUpdate.addColumn("YY_BASE", "string");
        	this.dsUpdate.addColumn("MM_BASE", "string");
        	this.dsUpdate.addColumn("NO_APPLY", "bigdecimal");
        	this.dsUpdate.addColumn("YN_MID", "string");
        	this.dsUpdate.addColumn("AM_SUBST1", "bigdecimal");
        	this.dsUpdate.addColumn("AM_SUBST2", "bigdecimal");
        	this.dsUpdate.addColumn("AM_SUBST3", "bigdecimal");
        	this.dsUpdate.addColumn("AM_SUBST4", "bigdecimal");
        	this.dsUpdate.addColumn("AM_SUBST5", "bigdecimal");
        	this.dsUpdate.addColumn("AM_SUBST6", "bigdecimal");
        	this.dsUpdate.addColumn("AM_SUBST7", "bigdecimal");
        	this.dsUpdate.addColumn("ID_UPDATE", "string");
        };

        /************************************************************************
         * 컨트롤 이벤트
         ************************************************************************/
          /*
          *	조회
          */
        this.fnSelect = function() {
        	if (!this.fnSelectValidate()) return false;

        	this.dsSelect.clearData();
        	this.dsSelect.addRow();

        	this.dsSelect.setColumn(0, "CD_CORP", this.getOwnerFrame().CD_CORP);
        	this.dsSelect.setColumn(0, "ID_RESIDENT", this.getOwnerFrame().ID_RESIDENT.replace(/-/g,""));
        	this.dsSelect.setColumn(0, "ID_SABUN", this.getOwnerFrame().ID_SABUN);
        	this.dsSelect.setColumn(0, "YY_BASE", this.getOwnerFrame().YN_MID=="Y"?this.getOwnerFrame().WORK_BASE.substring(0,4):this.getOwnerFrame().WORK_BASE);
        	this.dsSelect.setColumn(0, "MM_BASE", this.getOwnerFrame().YN_MID=="Y"?this.getOwnerFrame().WORK_BASE.substring(4,6):"12");
        	this.dsSelect.setColumn(0, "NO_APPLY", "1");
        	this.dsSelect.setColumn(0, "YN_MID", this.getOwnerFrame().YN_MID);

        	var strSvcId    = "select";
        	var strSvcType  = "grid";
        	var inProc		= "_dsProc";
        	var inData      = "select=dsSelect";
        	var outData     = "dsList=select0";
        	var strArg      = "";
        	var callBackFnc = "fnCallback";

        	this.gfnTransaction( strSvcId , 	// transaction을 구분하기 위한 svc id값
        						strSvcType , 	// trabsaction을 요청할 구분
        						inProc,			// Procedure 정보 Dataset 이름
        						inData , 		// 입력값으로 보낼 dataset id , a=b형태로 실제이름과 입력이름을 매칭
        						outData , 		// 처리결과값으로 받을 dataset id, a=b형태로 실제이름과 입력이름을 매칭
        						strArg, 	    // 입력갑스로 보낼 arguments, strFormData="20120607"
        						callBackFnc); 	// 통신방법 정의 [생략가능]
        };
        /*
         *	저장
         */
        this.fnSave = function() {

        	this.dsUpdate.clearData();

        	var nrow = this.dsUpdate.addRow();

        	this.dsUpdate.setColumn(nrow, "CD_CORP", this.getOwnerFrame().CD_CORP);
        	this.dsUpdate.setColumn(nrow, "ID_RESIDENT", this.getOwnerFrame().ID_RESIDENT.replace(/-/g,""));
        	this.dsUpdate.setColumn(nrow, "ID_SABUN", this.getOwnerFrame().ID_SABUN);
        	this.dsUpdate.setColumn(nrow, "YY_BASE", this.getOwnerFrame().YN_MID=="Y"?this.getOwnerFrame().WORK_BASE.substring(0,4):this.getOwnerFrame().WORK_BASE);
        	this.dsUpdate.setColumn(nrow, "MM_BASE", this.getOwnerFrame().YN_MID=="Y"?this.getOwnerFrame().WORK_BASE.substring(4,6):"12");
        	this.dsUpdate.setColumn(nrow, "NO_APPLY", "1");;
        	this.dsUpdate.setColumn(nrow, "YN_MID", this.getOwnerFrame().YN_MID);
        	this.dsUpdate.setColumn(nrow, "AM_SUBST1", this.edtAM_MYCARD2013.value);//2013년 본인 신용카드등 사용액
        	this.dsUpdate.setColumn(nrow, "AM_SUBST2", this.edtAM_MYCARDBEF.value);	//2014년 본인 신용카드 등 사용액
        	this.dsUpdate.setColumn(nrow, "AM_SUBST3", this.edtAM_MYADD2013.value);	//2013년 본인 추가공제율 사용액
        	this.dsUpdate.setColumn(nrow, "AM_SUBST4", this.edtAM_MYADDSANG2015.value);	//2015년 상반기 본인 추가공제율 사용액
        	this.dsUpdate.setColumn(nrow, "AM_SUBST5", this.edtAM_MYCARD.value);	//2015년 본인 신용카드 등 사용액
        	this.dsUpdate.setColumn(nrow, "AM_SUBST6", this.edtAM_MYADDALL.value);	//2014년 본인 추가공제율 사용액
        	this.dsUpdate.setColumn(nrow, "AM_SUBST7", this.edtAM_MYADDHA.value);	//2015년 하반기 또는 2016년 상반기 본인 추가공제율 사용액
        	this.dsUpdate.setColumn(nrow, "ID_UPDATE", this.AuthClient.ID_USER);

        	var strSvcId    = "save";
        	var strSvcType  = "save";
        	var inProc		= "_dsProc";
        	var inData      = "update=dsUpdate";
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
        };
         /************************************************************************
         * Validate
         ************************************************************************/
         this.fnSelectValidate = function(){

        	return true;
         };
        /************************************************************************
         * 콜백 이벤트
         ************************************************************************/
        /*
         *	콜백 처리
         */
        this.fnCallback = function(svcID, errorCode, errorMsg, args)
        {
        	if (svcID == "select") {

        	} else if(svcID == "save"){
        		if(errorCode == 0){
        			this.getParentContext().close(true);
        		}else{
        			this.gfnAlert(errorMsg);
        		}
        	}
        };

        /************************************************************************
         * 코드파인드 이벤트
         ************************************************************************/
        /************************************************************************
         * 그리드 이벤트
         ************************************************************************/
         /************************************************************************
         * 확장버튼 이벤트
         ************************************************************************/
        /************************************************************************
         * 기타 이벤트
         ************************************************************************/
        this.btnOK_onclick = function(obj,e)
        {
        	this.fnSave();
        };
        this.btnCANCLE_onclick = function(obj,e)
        {
        	this.getParentContext().close(false);
        };
        this.Edit_onchanged = function(obj,e)
        {
        	obj.set_value(this.gfnAppendComma(obj.value));
        };
        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.form_onload,this);
            this.divBtns.form.btnCANCLE.addEventHandler("onclick",this.btnCANCLE_onclick,this);
            this.divBtns.form.btnOK.addEventHandler("onclick",this.btnOK_onclick,this);
            this.edtAM_MYCARDBEF.addEventHandler("onchanged",this.Edit_onchanged,this);
            this.edtAM_MYCARD.addEventHandler("onchanged",this.Edit_onchanged,this);
            this.edtAM_MYADDALL.addEventHandler("onchanged",this.Edit_onchanged,this);
            this.edtAM_MYADDHA.addEventHandler("onchanged",this.Edit_onchanged,this);
        };
        this.loadIncludeScript("DAV_CARDMYADDDLG.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
