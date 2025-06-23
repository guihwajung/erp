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
            this.set_titletext("AS 하자 접수입력");
            if (Form == this.constructor)
            {
                this._setFormPosition(1280,1000);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("dsList", this);
            obj._setContents("<ColumnInfo><Column id=\"DS_ACNTUNIT\" type=\"STRING\" size=\"256\"/><Column id=\"NO_DONG\" type=\"STRING\" size=\"256\"/><Column id=\"HOSU\" type=\"STRING\" size=\"256\"/><Column id=\"DS_CONTRACTOR\" type=\"STRING\" size=\"256\"/><Column id=\"DT_CONTRACT\" type=\"STRING\" size=\"256\"/><Column id=\"DT_BIRTH\" type=\"STRING\" size=\"256\"/><Column id=\"DS_JOING_CONTRACTOR\" type=\"STRING\" size=\"256\"/><Column id=\"DT_BIRTH_JOINT\" type=\"STRING\" size=\"256\"/><Column id=\"NO_MOBILE\" type=\"STRING\" size=\"256\"/><Column id=\"DS_EMAIL\" type=\"STRING\" size=\"256\"/><Column id=\"DS_ADDRESS\" type=\"STRING\" size=\"256\"/><Column id=\"NO_SIZE\" type=\"STRING\" size=\"256\"/><Column id=\"SZ_EXCLUSIVE\" type=\"STRING\" size=\"256\"/><Column id=\"SZ_LIVING\" type=\"STRING\" size=\"256\"/><Column id=\"SZ_SUPPLY\" type=\"STRING\" size=\"256\"/><Column id=\"SZ_ETC\" type=\"STRING\" size=\"256\"/><Column id=\"SZ_CONTRACT\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("_dsProc", this);
            obj._setContents("<ColumnInfo><Column id=\"TARGET\" type=\"STRING\" size=\"256\"/><Column id=\"SP\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"SP\">DRBPR_WEB_RECEIPT_SELECT</Col><Col id=\"TARGET\">select</Col></Row><Row><Col id=\"TARGET\">select1</Col><Col id=\"SP\">DRBPR_WEB_RECEIPT_OPT1_SELECT</Col></Row><Row><Col id=\"TARGET\">select2</Col><Col id=\"SP\">DRBPR_WEB_RECEIPT_OPT2_SELECT</Col></Row><Row><Col id=\"SP\">DRBPR_WEB_LOANINTERESTPAY_SUM_SELECT</Col><Col id=\"TARGET\">select3</Col></Row><Row><Col id=\"SP\">DRBPR_WEB_LOANINTERESTPAY_SELECT</Col><Col id=\"TARGET\">select4</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsSearch", this);
            obj._setContents("<ColumnInfo><Column id=\"DS_CONTRACTOR\" type=\"STRING\" size=\"256\"/><Column id=\"DT_BIRTH\" type=\"STRING\" size=\"256\"/><Column id=\"NO_DONG\" type=\"STRING\" size=\"256\"/><Column id=\"NO_HOSU\" type=\"STRING\" size=\"256\"/><Column id=\"DS_ACNTUNIT\" type=\"STRING\" size=\"256\"/><Column id=\"TY_GUBUN\" type=\"STRING\" size=\"256\"/><Column id=\"NO_CHASU\" type=\"STRING\" size=\"256\"/><Column id=\"CD_ACNTUNIT\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row/></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsList1", this);
            obj._setContents("<ColumnInfo><Column id=\"CD_ITEM\" type=\"STRING\" size=\"256\"/><Column id=\"DS_ITEM\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsList2", this);
            obj._setContents("<ColumnInfo><Column id=\"CD_ITEM\" type=\"STRING\" size=\"256\"/><Column id=\"DS_ITEM\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsList3", this);
            obj._setContents("<ColumnInfo><Column id=\"CD_ITEM\" type=\"STRING\" size=\"256\"/><Column id=\"DS_ITEM\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsList4", this);
            obj._setContents("<ColumnInfo><Column id=\"CD_ITEM\" type=\"STRING\" size=\"256\"/><Column id=\"DS_ITEM\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Div("divSearch","0.0","10.0",null,"46.0","30",null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_cssclass("div_SEARCH_Bg");
            this.addChild(obj.name, obj);

            obj = new Static("staTitleMENU01","0.0","10.0",null,"24.0","1180",null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("0");
            obj.set_text("계약정보");
            obj.set_cssclass("sta_TITLE_Bg");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("staTitleMENU02","staTitleMENU01:0.0","10.0",null,"24.0","1003",null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("1");
            obj.set_text("납입내역조회");
            obj.set_cssclass("sta_TITLE_Bg");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("staTitleMENU03","staTitleMENU02:0.0","10.0",null,"24.0","811",null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("2");
            obj.set_text("납입금일정조회");
            obj.set_cssclass("sta_TITLE_Bg");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("staTitleMENU04","staTitleMENU03:0.0","10.0",null,"24.0","679",null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("3");
            obj.set_text("미납내역조회");
            obj.set_cssclass("sta_TITLE_Bg");
            this.divSearch.addChild(obj.name, obj);

            obj = new Div("divData","0","40",null,null,"0","0",null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_cssclass("div_DATA_Bg");
            this.addChild(obj.name, obj);

            obj = new Div("divDataMain","0","-5",null,"965","0",null,null,null,null,null,this.divData.form);
            obj.set_taborder("0");
            obj.set_text("");
            obj.set_enable("true");
            this.divData.addChild(obj.name, obj);

            obj = new Static("staTitle02","0","90",null,"22","0",null,null,null,null,null,this.divData.form.divDataMain.form);
            obj.set_taborder("0");
            obj.set_text("본계약");
            obj.set_cssclass("sta_TITLE_Bg");
            this.divData.form.divDataMain.addChild(obj.name, obj);

            obj = new Static("staBar01","9","29","891","56",null,null,null,null,null,null,this.divData.form.divDataMain.form);
            obj.set_taborder("1");
            obj.set_cssclass("sta_WF_tablebg");
            this.divData.form.divDataMain.addChild(obj.name, obj);

            obj = new Static("staTitle03","0","332",null,"22","0",null,null,null,null,null,this.divData.form.divDataMain.form);
            obj.set_taborder("2");
            obj.set_text("별도계약1");
            obj.set_cssclass("sta_TITLE_Bg");
            this.divData.form.divDataMain.addChild(obj.name, obj);

            obj = new Edit("edtPN_SC01","12","35","883","22",null,null,null,null,null,null,this.divData.form.divDataMain.form);
            obj.set_taborder("3");
            obj.set_maxlength("50");
            obj.set_border("1px none");
            obj.set_enable("true");
            this.divData.form.divDataMain.addChild(obj.name, obj);

            obj = new Edit("edtPN_SC01_02","12","59","883","22",null,null,null,null,null,null,this.divData.form.divDataMain.form);
            obj.set_taborder("4");
            obj.set_maxlength("50");
            obj.set_border("1px none");
            obj.set_enable("true");
            this.divData.form.divDataMain.addChild(obj.name, obj);

            obj = new Grid("objGrid","0","115",null,null,"360","650",null,null,null,null,this.divData.form.divDataMain.form);
            obj.set_taborder("5");
            obj._setContents("");
            this.divData.form.divDataMain.addChild(obj.name, obj);

            obj = new Grid("objGrid1","0","355",null,null,"360","493",null,null,null,null,this.divData.form.divDataMain.form);
            obj.set_taborder("6");
            obj._setContents("");
            this.divData.form.divDataMain.addChild(obj.name, obj);

            obj = new Static("staTitle03_00","0","482",null,"22","0",null,null,null,null,null,this.divData.form.divDataMain.form);
            obj.set_taborder("7");
            obj.set_text("별도계약2");
            obj.set_cssclass("sta_TITLE_Bg");
            this.divData.form.divDataMain.addChild(obj.name, obj);

            obj = new Static("staTitle03_00_00","0","632",null,"22","0",null,null,null,null,null,this.divData.form.divDataMain.form);
            obj.set_taborder("8");
            obj.set_text("이자현황");
            obj.set_cssclass("sta_TITLE_Bg");
            this.divData.form.divDataMain.addChild(obj.name, obj);

            obj = new Grid("objGrid2","0","505",null,null,"360","343",null,null,null,null,this.divData.form.divDataMain.form);
            obj.set_taborder("9");
            obj._setContents("");
            this.divData.form.divDataMain.addChild(obj.name, obj);

            obj = new Grid("objGrid3","0","655",null,null,"780","193",null,null,null,null,this.divData.form.divDataMain.form);
            obj.set_taborder("10");
            obj._setContents("");
            this.divData.form.divDataMain.addChild(obj.name, obj);

            obj = new Static("staTitle03_00_00_00","0","782",null,"22","0",null,null,null,null,null,this.divData.form.divDataMain.form);
            obj.set_taborder("11");
            obj.set_text("이자내역");
            obj.set_cssclass("sta_TITLE_Bg");
            this.divData.form.divDataMain.addChild(obj.name, obj);

            obj = new Grid("objGrid4","0","805",null,null,"780","43",null,null,null,null,this.divData.form.divDataMain.form);
            obj.set_taborder("12");
            obj._setContents("");
            this.divData.form.divDataMain.addChild(obj.name, obj);

            obj = new Static("staTitle01","0","-1",null,"22","0",null,null,null,null,null,this.divData.form);
            obj.set_taborder("1");
            obj.set_text("납입내역조회");
            obj.set_cssclass("sta_TITLE_Bg");
            this.divData.addChild(obj.name, obj);

            obj = new Static("staTitleMENU05","599","-2",null,"22","552",null,null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_text("예상수납안내");
            obj.set_cssclass("sta_TITLE_Bg");
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
        this.registerScript("DRQ_RECEIPT.xfdl", function() {
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

        	//this.fnBtnSendSmsEnble();

        	//this.fnSetCombo();

        	// 타화면에서 오픈시 넘어오는 파라미터 처리
        	this.dsSearch.setColumn(0, "DS_CONTRACTOR", this.getOwnerFrame().DS_CONTRACTOR);
        	this.dsSearch.setColumn(0, "DT_BIRTH", this.getOwnerFrame().DT_BIRTH);
        	this.dsSearch.setColumn(0, "NO_DONG", this.getOwnerFrame().NO_DONG);
        	this.dsSearch.setColumn(0, "NO_HOSU", this.getOwnerFrame().NO_HOSU);
        	this.dsSearch.setColumn(0, "CD_ACNTUNIT", this.getOwnerFrame().CD_ACNTUNIT);
        	this.dsSearch.setColumn(0, "DS_ACNTUNIT", this.getOwnerFrame().DS_ACNTUNIT);
        	this.dsSearch.setColumn(0, "TY_GUBUN", this.getOwnerFrame().TY_GUBUN);
        	this.dsSearch.setColumn(0, "NO_CHASU", this.getOwnerFrame().NO_CHASU);

        	this.FormBtns.Select.click();
        };

        /************************************************************************
         * 버튼 설정 : 화면(Tab) 전환시 마다 호출
         ************************************************************************/
        this.fnSetButton = function() {

        }

        /************************************************************************
         * 확장 버튼 : 화면별 버튼 설정 ID, function 연결
         ************************************************************************/
        this.fnSetExtendButton = function() {

        };



        /************************************************************************
         * 변수 선언
         ************************************************************************/
        this.fnSetVariable = function() {
        	this.dxGrid = this.divData.form.divDataMain.form.objGrid;
        	this.dxGrid1 = this.divData.form.divDataMain.form.objGrid1;
        	this.dxGrid2 = this.divData.form.divDataMain.form.objGrid2;
        	this.dxGrid3 = this.divData.form.divDataMain.form.objGrid3;
        	this.dxGrid4 = this.divData.form.divDataMain.form.objGrid4;
        };

        /************************************************************************
         * 이벤트 설정
         ************************************************************************/
        this.fnSetEvent = function() {
        	// 그리드 초기화
        	this.gfnGridInit(this.dxGrid, this.dsList, "DR", "DRQ_CONTRACT1");
        	this.gfnGridInit(this.dxGrid1, this.dsList1, "DR", "DRQ_CONTRACT1");
        	this.gfnGridInit(this.dxGrid2, this.dsList2, "DR", "DRQ_CONTRACT1");
        	this.gfnGridInit(this.dxGrid3, this.dsList3, "DR", "DRQ_CONTRACT2");
        	this.gfnGridInit(this.dxGrid4, this.dsList4, "DR", "DRQ_CONTRACT3");
        }

        /************************************************************************
         * 파라미터 설정
         ************************************************************************/
        this.fnSetParameter = function() {

        	this.dsSelect = new Dataset();
        	this.dsSelect.addColumn("DS_CONTRACTOR", "string");
        	this.dsSelect.addColumn("DT_BIRTH", "string");
        	this.dsSelect.addColumn("NO_DONG", "string");
        	this.dsSelect.addColumn("NO_HOSU", "string");
        	this.dsSelect.addColumn("CD_ACNTUNIT", "string");
        	this.dsSelect.addColumn("TY_GUBUN", "string");
        	this.dsSelect.addColumn("NO_CHASU", "string");

        	this.dsSelect1 = new Dataset();
        	this.dsSelect1.addColumn("DS_CONTRACTOR", "string");
        	this.dsSelect1.addColumn("DT_BIRTH", "string");
        	this.dsSelect1.addColumn("NO_DONG", "string");
        	this.dsSelect1.addColumn("NO_HOSU", "string");
        	this.dsSelect1.addColumn("CD_ACNTUNIT", "string");
        	this.dsSelect1.addColumn("TY_GUBUN", "string");
        	this.dsSelect1.addColumn("NO_CHASU", "string");

        	this.dsSelect2 = new Dataset();
        	this.dsSelect2.addColumn("DS_CONTRACTOR", "string");
        	this.dsSelect2.addColumn("DT_BIRTH", "string");
        	this.dsSelect2.addColumn("NO_DONG", "string");
        	this.dsSelect2.addColumn("NO_HOSU", "string");
        	this.dsSelect2.addColumn("CD_ACNTUNIT", "string");
        	this.dsSelect2.addColumn("TY_GUBUN", "string");
        	this.dsSelect2.addColumn("NO_CHASU", "string");

        	this.dsSelect3 = new Dataset();
        	this.dsSelect3.addColumn("CD_ACNTUNIT", "string");
        	this.dsSelect3.addColumn("TY_GUBUN", "string");
        	this.dsSelect3.addColumn("NO_CHASU", "string");
        	this.dsSelect3.addColumn("NO_DONG", "string");
        	this.dsSelect3.addColumn("NO_HOSU", "string");

        	this.dsSelect4 = new Dataset();
        	this.dsSelect4.addColumn("CD_ACNTUNIT", "string");
        	this.dsSelect4.addColumn("TY_GUBUN", "string");
        	this.dsSelect4.addColumn("NO_CHASU", "string");
        	this.dsSelect4.addColumn("NO_DONG", "string");
        	this.dsSelect4.addColumn("NO_HOSU", "string");
        }

        /************************************************************************
         * 컨트롤 이벤트
         ************************************************************************/
         /*
          *	조회 버튼
          */
        this.fnSelect = function() {
        // 	if (!this.fnSelectValidate()) return false;
        //
        // 	this.gfnGridBeforeSelect(this.dxGrid);


        	this.dsSelect.clearData();
        	this.dsSelect.addRow();
        	this.dsSelect.setColumn(0, "DS_CONTRACTOR", this.dsSearch.getColumn(0, "DS_CONTRACTOR"));
        	this.dsSelect.setColumn(0, "DT_BIRTH", this.dsSearch.getColumn(0, "DT_BIRTH"));
        	this.dsSelect.setColumn(0, "NO_DONG", this.dsSearch.getColumn(0, "NO_DONG"));
        	this.dsSelect.setColumn(0, "NO_HOSU", this.dsSearch.getColumn(0, "NO_HOSU"));
        	this.dsSelect.setColumn(0, "CD_ACNTUNIT", this.dsSearch.getColumn(0, "CD_ACNTUNIT"));
        	this.dsSelect.setColumn(0, "TY_GUBUN", this.dsSearch.getColumn(0, "TY_GUBUN"));
        	this.dsSelect.setColumn(0, "NO_CHASU", this.dsSearch.getColumn(0, "NO_CHASU"));

        	this.dsSelect1.clearData();
        	this.dsSelect1.addRow();
        	this.dsSelect1.setColumn(0, "DS_CONTRACTOR", this.dsSearch.getColumn(0, "DS_CONTRACTOR"));
        	this.dsSelect1.setColumn(0, "DT_BIRTH", this.dsSearch.getColumn(0, "DT_BIRTH"));
        	this.dsSelect1.setColumn(0, "NO_DONG", this.dsSearch.getColumn(0, "NO_DONG"));
        	this.dsSelect1.setColumn(0, "NO_HOSU", this.dsSearch.getColumn(0, "NO_HOSU"));
        	this.dsSelect1.setColumn(0, "CD_ACNTUNIT", this.dsSearch.getColumn(0, "CD_ACNTUNIT"));
        	this.dsSelect1.setColumn(0, "TY_GUBUN", this.dsSearch.getColumn(0, "TY_GUBUN"));
        	this.dsSelect1.setColumn(0, "NO_CHASU", this.dsSearch.getColumn(0, "NO_CHASU"));

        	this.dsSelect2.clearData();
        	this.dsSelect2.addRow();
        	this.dsSelect2.setColumn(0, "DS_CONTRACTOR", this.dsSearch.getColumn(0, "DS_CONTRACTOR"));
        	this.dsSelect2.setColumn(0, "DT_BIRTH", this.dsSearch.getColumn(0, "DT_BIRTH"));
        	this.dsSelect2.setColumn(0, "NO_DONG", this.dsSearch.getColumn(0, "NO_DONG"));
        	this.dsSelect2.setColumn(0, "NO_HOSU", this.dsSearch.getColumn(0, "NO_HOSU"));
        	this.dsSelect2.setColumn(0, "CD_ACNTUNIT", this.dsSearch.getColumn(0, "CD_ACNTUNIT"));
        	this.dsSelect2.setColumn(0, "TY_GUBUN", this.dsSearch.getColumn(0, "TY_GUBUN"));
        	this.dsSelect2.setColumn(0, "NO_CHASU", this.dsSearch.getColumn(0, "NO_CHASU"));

        	this.dsSelect3.clearData();
        	this.dsSelect3.addRow();
        	this.dsSelect3.setColumn(0, "CD_ACNTUNIT", this.dsSearch.getColumn(0, "CD_ACNTUNIT"));
        	this.dsSelect3.setColumn(0, "TY_GUBUN", this.dsSearch.getColumn(0, "TY_GUBUN"));
        	this.dsSelect3.setColumn(0, "NO_CHASU", this.dsSearch.getColumn(0, "NO_CHASU"));
        	this.dsSelect3.setColumn(0, "NO_DONG", this.dsSearch.getColumn(0, "NO_DONG"));
        	this.dsSelect3.setColumn(0, "NO_HOSU", this.dsSearch.getColumn(0, "NO_HOSU"));

        	this.dsSelect4.clearData();
        	this.dsSelect4.addRow();
        	this.dsSelect4.setColumn(0, "CD_ACNTUNIT", this.dsSearch.getColumn(0, "CD_ACNTUNIT"));
        	this.dsSelect4.setColumn(0, "TY_GUBUN", this.dsSearch.getColumn(0, "TY_GUBUN"));
        	this.dsSelect4.setColumn(0, "NO_CHASU", this.dsSearch.getColumn(0, "NO_CHASU"));
        	this.dsSelect4.setColumn(0, "NO_DONG", this.dsSearch.getColumn(0, "NO_DONG"));
        	this.dsSelect4.setColumn(0, "NO_HOSU", this.dsSearch.getColumn(0, "NO_HOSU"));

        	var strSvcId    = "select";
        	var strSvcType  = "grid";
        	var inProc		= "_dsProc";
        	var inData      = "select=dsSelect select1=dsSelect1 select2=dsSelect2 select3=dsSelect3 select4=dsSelect4";
        	var outData     = "dsList=select0 dsList1=select10 dsList2=select20 dsList3=select30 dsList4=select40";
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
          *	조회 버튼
          */
        this.fnSelectAdd = function() {
        	//if (!this.fnSelectValidate()) return false;

        }

        /*
         *	저장 버튼
         */
        this.fnSave = function() {

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

        		this.divData.form.divDataMain.form.edtPN_SC01.set_value("["+this.dsSearch.getColumn(0, "DS_ACNTUNIT")+"]");
        		this.divData.form.divDataMain.form.edtPN_SC01_02.set_value(this.dsSearch.getColumn(0, "DS_CONTRACTOR")+"("+this.dsSearch.getColumn(0, "NO_DONG")+"동 "+this.dsSearch.getColumn(0, "NO_HOSU")+"호)님 환영합니다");
        	}
        };

        // this.fnPopupCallback = function(strId, val) {
        // 	if( val.bSave ){
        // 		this.FormBtns.Select.click();
        // 	}
        // }
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
        // //납입금일정조회
        // this.divData_staTitleMENU03_onclick = function(obj:nexacro.Static,e:nexacro.ClickEventInfo)
        // {
        // 	var param = {};
        // 	param.DS_CONTRACTOR = this.dsSearch.getColumn(0, "DS_CONTRACTOR");
        // 	param.DT_BIRTH = this.dsSearch.getColumn(0, "DT_BIRTH");
        // 	param.NO_DONG = this.dsSearch.getColumn(0, "NO_DONG");
        // 	param.NO_HOSU = this.dsSearch.getColumn(0, "NO_HOSU");
        // 	param.CD_ACNTUNIT = this.dsSearch.getColumn(0, "CD_ACNTUNIT");
        // 	param.DS_ACNTUNIT = this.dsSearch.getColumn(0, "DS_ACNTUNIT");
        // 	param.TY_GUBUN = this.dsSearch.getColumn(0, "TY_GUBUN");
        // 	param.NO_CHASU = this.dsSearch.getColumn(0, "NO_CHASU");
        //
        // 	this.gfnFormOpen(this.FormInfo.CD_MODULE, "DRQ_ARGEEMENT", "fnConfirmcallback", param);
        // };
        //
        // //미납내역조회
        // this.divData_staTitleMENU04_onclick = function(obj:nexacro.Static,e:nexacro.ClickEventInfo)
        // {
        // 	var param = {};
        // 	param.DS_CONTRACTOR = this.dsSearch.getColumn(0, "DS_CONTRACTOR");
        // 	param.DT_BIRTH = this.dsSearch.getColumn(0, "DT_BIRTH");
        // 	param.NO_DONG = this.dsSearch.getColumn(0, "NO_DONG");
        // 	param.NO_HOSU = this.dsSearch.getColumn(0, "NO_HOSU");
        // 	param.CD_ACNTUNIT = this.dsSearch.getColumn(0, "CD_ACNTUNIT");
        // 	param.DS_ACNTUNIT = this.dsSearch.getColumn(0, "DS_ACNTUNIT");
        // 	param.TY_GUBUN = this.dsSearch.getColumn(0, "TY_GUBUN");
        // 	param.NO_CHASU = this.dsSearch.getColumn(0, "NO_CHASU");
        //
        // 	this.gfnFormOpen(this.FormInfo.CD_MODULE, "DRQ_MINAP", "fnConfirmcallback", param);
        // };

        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.form_onload,this);
            this.addEventHandler("onsize",this.form_onsize,this);
            this.divSearch.form.staTitleMENU01.addEventHandler("onclick",this.divData_staTitle01_onclick,this);
            this.divSearch.form.staTitleMENU02.addEventHandler("onclick",this.divData_staTitleMENU02_onclick,this);
            this.divSearch.form.staTitleMENU03.addEventHandler("onclick",this.divData_staTitleMENU03_onclick,this);
            this.divSearch.form.staTitleMENU04.addEventHandler("onclick",this.divData_staTitle01_onclick,this);
            this.divData.form.staTitle01.addEventHandler("onclick",this.divData_staTitle01_onclick,this);
            this.staTitleMENU05.addEventHandler("onclick",this.divData_staTitleMENU05_onclick,this);
            this.dsList.addEventHandler("onvaluechanged",this.dsList_onvaluechanged,this);
            this.dsList1.addEventHandler("onvaluechanged",this.dsList_onvaluechanged,this);
            this.dsList2.addEventHandler("onvaluechanged",this.dsList_onvaluechanged,this);
            this.dsList3.addEventHandler("onvaluechanged",this.dsList_onvaluechanged,this);
            this.dsList4.addEventHandler("onvaluechanged",this.dsList_onvaluechanged,this);
        };
        this.loadIncludeScript("DRQ_RECEIPT.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
