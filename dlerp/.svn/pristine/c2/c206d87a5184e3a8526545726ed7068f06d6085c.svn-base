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
            this.set_titletext("결의전표출력");
            this.getSetter("maxwidth").set("400");
            this.getSetter("maxheight").set("300");
            if (Form == this.constructor)
            {
                this._setFormPosition(400,250);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("_dsProc", this);
            obj._setContents("<ColumnInfo><Column id=\"TARGET\" type=\"STRING\" size=\"256\"/><Column id=\"SP\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsData", this);
            obj._setContents("<ColumnInfo><Column id=\"CHK_SLIP\" type=\"STRING\" size=\"256\"/><Column id=\"CHK_ATTACH\" type=\"STRING\" size=\"256\"/><Column id=\"CHK_ETC\" type=\"STRING\" size=\"256\"/><Column id=\"CHK_SERVICE\" type=\"STRING\" size=\"256\"/><Column id=\"AM_SLIP\" type=\"STRING\" size=\"256\"/><Column id=\"CD_TRADE\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row/></Rows>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Div("divData","0","0",null,null,"0","0",null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_cssclass("div_DATA_Bg");
            this.addChild(obj.name, obj);

            obj = new Static("staTitle","10","0",null,"22","0",null,null,null,null,null,this.divData.form);
            obj.set_taborder("1");
            obj.set_text("결의전표출력");
            obj.set_cssclass("sta_TITLE_Bg");
            this.divData.addChild(obj.name, obj);

            obj = new Static("sta00","10","staTitle:5","95","120",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("2");
            obj.set_text("작업종류");
            obj.set_cssclass("sta_WF_tablelabel");
            obj.set_textDecoration("none");
            this.divData.addChild(obj.name, obj);

            obj = new Static("sta01","10","sta00:-1","95","30",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("3");
            obj.set_text("결의금액");
            obj.set_cssclass("sta_WF_tablelabel");
            obj.set_textDecoration("none");
            this.divData.addChild(obj.name, obj);

            obj = new Static("staBg00","sta00:-1","staTitle:5",null,"120","5",null,null,null,null,null,this.divData.form);
            obj.set_taborder("4");
            obj.set_cssclass("sta_WF_tablebg");
            obj.set_text("");
            this.divData.addChild(obj.name, obj);

            obj = new Static("staBg01","sta01:-1","staBg00:-1",null,"30","5",null,null,null,null,null,this.divData.form);
            obj.set_taborder("5");
            obj.set_cssclass("sta_WF_tablebg");
            obj.set_text("");
            this.divData.addChild(obj.name, obj);

            obj = new CheckBox("cchkSLIP","sta00:5","staTitle:10","100","20",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("6");
            obj.set_text("결의전표발행");
            obj.set_truevalue("Y");
            obj.set_falsevalue("N");
            this.divData.addChild(obj.name, obj);

            obj = new CheckBox("cchkATTACH","sta00:5","cchkSLIP:9","100","20",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("7");
            obj.set_text("증빙자료첨부");
            obj.set_truevalue("Y");
            obj.set_falsevalue("N");
            this.divData.addChild(obj.name, obj);

            obj = new CheckBox("cchkETC","sta00:5","cchkATTACH:9","100","20",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("8");
            obj.set_text("기타증빙");
            obj.set_truevalue("Y");
            obj.set_falsevalue("N");
            this.divData.addChild(obj.name, obj);

            obj = new CheckBox("cchkSERVICE","sta00:5","cchkETC:9","100","20",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("9");
            obj.set_text("접대비자료");
            obj.set_truevalue("Y");
            obj.set_falsevalue("N");
            this.divData.addChild(obj.name, obj);

            obj = new MaskEdit("ctxtAM_SLIP","sta01:5","cchkSERVICE:11","200","20",null,null,"100",null,null,null,this.divData.form);
            obj.set_taborder("10");
            obj.set_value("");
            obj.set_format("#,0");
            obj.set_enable("false");
            this.divData.addChild(obj.name, obj);

            obj = new Button("btnConf","30%","staBg01:20","60","27",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("11");
            obj.set_text("확인");
            this.divData.addChild(obj.name, obj);

            obj = new Button("btnCancel","55%","staBg01:20","60","27",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("12");
            obj.set_text("취소");
            this.divData.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this
            obj = new Layout("default","",this._adjust_width,this._adjust_height,this,function(p){});
            this.addLayout(obj.name, obj);
            
            // BindItem Information
            obj = new BindItem("item0","divData.form.cchkSLIP","value","dsData","CHK_SLIP");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item1","divData.form.cchkATTACH","value","dsData","CHK_ATTACH");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item2","divData.form.cchkETC","value","dsData","CHK_ETC");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item3","divData.form.cchkSERVICE","value","dsData","CHK_SERVICE");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item4","divData.form.ctxtAM_SLIP","value","dsData","AMOUNT");
            this.addChild(obj.name, obj);
            obj.bind();
            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script
        this.registerScript("DHA_ISSUESLIPDLG.xfdl", function() {
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

        	this.fnLoadParam();


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
        	this.cchkSLIP = this.divData.form.cchkSLIP;
        	this.cchkATTACH = this.divData.form.cchkATTACH;
        	this.cchkETC = this.divData.form.cchkETC;
        	this.cchkSERVICE = this.divData.form.cchkSERVICE;
        	this.ctxtAM_SLIP = this.divData.form.ctxtAM_SLIP;


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
        //취소버튼 클릭
        this.btnCancel_onclick = function(obj,e)
        {
        	this.getParentContext().close();
        };

        //확인버튼 클릭
        this.btnConf_onclick = function(obj,e)
        {
        	this.fnOpenReport();
        };

        this.fnLoadParam = function()
        {
        	this.dsData.setColumn(0, "CD_TRADE", this.getOwnerFrame().CD_TRADE);
        	this.dsData.setColumn(0, "AM_SLIP", this.getOwnerFrame().AM_DR);

        	if(this.getOwnerFrame().YN_VAT == "Y")
        	{
        		this.dsData.setColumn(0, "CHK_ATTACH", "Y");
        	}
        	else
        	{
        		this.cchkATTACH.set_enable(false);
        	}

        	 if (this.getOwnerFrame().YN_SERVICE == "Y")
        	{
        		this.dsData.setColumn(0, "CHK_SERVICE", "Y");
        	}
        	else
        	{
        		this.cchkSERVICE.set_enable(false);
        	}
        }

        // 레포트를 불러온다. (미구현)
        this.fnOpenReport = function()
        {
        	try
        	{
        		if(this.dsData.getColumn(0, "CHK_SLIP") == "Y")
        		{
        			var param = {};

        			param.CD_TRADE = this.dsData.getColumn(0, "CD_TRADE");

        			//DHA_ISSUESLIPDLG_SLIP01
        		}

        		if(this.dsData.getColumn(0, "CHK_ATTACH") == "Y")
        		{
        			var param = {};

        			param.CD_TRADE = this.dsData.getColumn(0, "CD_TRADE");
        			param.AM_SLIP = this.dsData.getColumn(0, "AM_SLIP");
        			//DHA_ISSUESLIPDLG_SLIP02
        		}

        		if(this.dsData.getColumn(0, "CHK_ETC") == "Y")
        		{
        			var param = {};

        			param.CD_TRADE = this.dsData.getColumn(0, "CD_TRADE");
        			param.AM_SLIP = this.dsData.getColumn(0, "AM_SLIP");
        			//DHA_ISSUESLIPDLG_SLIP03
        		}

        		if(this.dsData.getColumn(0, "CHK_SERVICE") == "Y")
        		{
        			var param = {};

        			param.CD_TRADE = this.dsData.getColumn(0, "CD_TRADE");
        			param.AM_SLIP = this.dsData.getColumn(0, "AM_SLIP");
        			//DHA_ISSUESLIPDLG_SLIP04
        		}
        	}
        	catch(e)
        	{
        		this.gfnAlert(e);
        	}

        }


        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.form_onload,this);
            this.divData.form.sta00.addEventHandler("onclick",this.divData_divDataRight_sta01_onclick,this);
            this.divData.form.sta01.addEventHandler("onclick",this.divData_divDataRight_sta01_onclick,this);
            this.divData.form.btnConf.addEventHandler("onclick",this.btnConf_onclick,this);
            this.divData.form.btnCancel.addEventHandler("onclick",this.btnCancel_onclick,this);
        };
        this.loadIncludeScript("DHA_ISSUESLIPDLG.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
