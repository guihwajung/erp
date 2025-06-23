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
            this.set_titletext("New Form");
            if (Form == this.constructor)
            {
                this._setFormPosition(400,190);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("_dsProc", this);
            obj._setContents("<ColumnInfo><Column id=\"TARGET\" type=\"STRING\" size=\"256\"/><Column id=\"SP\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"TARGET\">save</Col><Col id=\"SP\">DCBPR_ESTIMATIONDETAIL_SUCCESSBID_UPDATE</Col></Row><Row><Col id=\"TARGET\">create</Col><Col id=\"SP\">DCBPR_ESTIMATIONDETAIL_CREATE_ORDER</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsData", this);
            obj._setContents("<ColumnInfo><Column id=\"CD_SITE\" type=\"STRING\" size=\"256\"/><Column id=\"DS_SITE\" type=\"STRING\" size=\"256\"/><Column id=\"NO_BID\" type=\"STRING\" size=\"256\"/><Column id=\"DS_BID\" type=\"STRING\" size=\"256\"/><Column id=\"CD_VENDOR\" type=\"STRING\" size=\"256\"/><Column id=\"DS_VENDOR\" type=\"STRING\" size=\"256\"/><Column id=\"DS_FALLREASON\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"CD_SITE\"/><Col id=\"NO_BID\"/><Col id=\"CD_VENDOR\"/><Col id=\"DS_FALLREASON\"/><Col id=\"DS_SITE\"/><Col id=\"DS_BID\"/><Col id=\"DS_VENDOR\"/></Row></Rows>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Div("divData","0","0",null,null,"0","0",null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_cssclass("div_DATA_Bg");
            obj.set_text("");
            this.addChild(obj.name, obj);

            obj = new Static("staTITLE","0","0","100%","30",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("0");
            obj.set_text("낙찰업체선정");
            obj.set_cssclass("sta_TITLE_Bg");
            obj.set_textAlign("left");
            this.divData.addChild(obj.name, obj);

            obj = new Static("staDS_SITE","0","40","87","30",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("1");
            obj.set_text("현장코드");
            obj.set_cssclass("sta_WF_tablelabel");
            obj.set_textAlign("left");
            this.divData.addChild(obj.name, obj);

            obj = new Static("staDS_SILHENG","0","staDS_SITE:-1","87","30",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("2");
            obj.set_text("입찰번호");
            obj.set_cssclass("sta_WF_tablelabel");
            obj.set_textAlign("left");
            this.divData.addChild(obj.name, obj);

            obj = new Static("staCD_VENDOR","0","staDS_SILHENG:-1","87","30",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("3");
            obj.set_text("업체명");
            obj.set_cssclass("sta_WF_tablelabel");
            obj.set_textAlign("left");
            this.divData.addChild(obj.name, obj);

            obj = new Static("staDS_FALLREASON","0","staCD_VENDOR:-1","87","20",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("4");
            obj.set_text("사유");
            obj.set_cssclass("sta_WF_tablelabel");
            obj.set_textAlign("left");
            obj.set_visible("false");
            this.divData.addChild(obj.name, obj);

            obj = new Static("staBg1","staDS_SITE:-1","40",null,"30","0%",null,null,null,null,null,this.divData.form);
            obj.set_taborder("5");
            obj.set_cssclass("sta_WF_tablebg");
            this.divData.addChild(obj.name, obj);

            obj = new Static("staBg2","staDS_SILHENG:-1","staBg1:-1",null,"30","0%",null,null,null,null,null,this.divData.form);
            obj.set_taborder("6");
            obj.set_cssclass("sta_WF_tablebg");
            this.divData.addChild(obj.name, obj);

            obj = new Static("staBg3","staCD_VENDOR:-1","staBg2:-1",null,"30","0%",null,null,null,null,null,this.divData.form);
            obj.set_taborder("7");
            obj.set_cssclass("sta_WF_tablebg");
            this.divData.addChild(obj.name, obj);

            obj = new Static("staBg4","staDS_FALLREASON:-1","staBg3:-1",null,"20","0.00%",null,null,null,null,null,this.divData.form);
            obj.set_taborder("8");
            obj.set_cssclass("sta_WF_tablebg");
            obj.set_visible("false");
            this.divData.addChild(obj.name, obj);

            obj = new Edit("edtCD_SITE","staDS_SITE:5","45",null,"20","210",null,null,null,null,null,this.divData.form);
            obj.set_taborder("9");
            obj.set_readonly("true");
            obj.set_maxlength("50");
            this.divData.addChild(obj.name, obj);

            obj = new Edit("edtDS_SITE","edtCD_SITE:3","45",null,"20","5",null,null,null,null,null,this.divData.form);
            obj.set_taborder("10");
            obj.set_readonly("true");
            obj.set_maxlength("50");
            this.divData.addChild(obj.name, obj);

            obj = new Edit("edtNO_BID","staDS_SILHENG:5","edtCD_SITE:9",null,"20","210",null,null,null,null,null,this.divData.form);
            obj.set_taborder("11");
            obj.set_readonly("true");
            obj.set_maxlength("50");
            this.divData.addChild(obj.name, obj);

            obj = new Edit("edtDS_BID","edtNO_BID:3","edtDS_SITE:9",null,"20","5",null,null,null,null,null,this.divData.form);
            obj.set_taborder("12");
            obj.set_readonly("true");
            obj.set_maxlength("50");
            this.divData.addChild(obj.name, obj);

            obj = new Edit("edtDS_VENDOR","staCD_VENDOR:5","edtNO_BID:9",null,"20","116",null,null,null,null,null,this.divData.form);
            obj.set_taborder("13");
            obj.set_readonly("true");
            obj.set_maxlength("50");
            this.divData.addChild(obj.name, obj);

            obj = new Edit("edtCD_VENDOR","edtDS_VENDOR:3","edtDS_BID:9",null,"20","5",null,null,null,null,null,this.divData.form);
            obj.set_taborder("14");
            obj.set_readonly("true");
            obj.set_maxlength("50");
            this.divData.addChild(obj.name, obj);

            obj = new TextArea("edtDS_FALLREASON","staDS_FALLREASON:5","edtDS_VENDOR:9",null,"10","5",null,null,null,null,null,this.divData.form);
            obj.set_taborder("15");
            obj.set_visible("false");
            this.divData.addChild(obj.name, obj);

            obj = new Button("btnOk","34.25%","146","60","20",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("16");
            obj.set_text("확인");
            this.divData.addChild(obj.name, obj);

            obj = new Button("btnCancel","btnOk:10","146","60","20",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("17");
            obj.set_text("취소");
            this.divData.addChild(obj.name, obj);

            obj = new Button("btnOk_EX",null,"16","80","20","3",null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_text("발주서 생성");
            this.addChild(obj.name, obj);

            obj = new Static("staNotice","1","125","394","23",null,null,null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_text("* 발주서로 업무를 진행하실 경우 우측상단에 \"발주서 생성\" 버튼을 클릭");
            obj.set_color("red");
            this.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this
            obj = new Layout("default","",this._adjust_width,this._adjust_height,this,function(p){});
            this.addLayout(obj.name, obj);
            
            // BindItem Information
            obj = new BindItem("item3","divData.form.edtNO_BID","value","dsData","NO_BID");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item0","divData.form.edtDS_FALLREASON","value","dsData","DS_FALLREASON");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item2","divData.form.edtDS_BID","value","dsData","DS_BID");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item5","divData.form.edtDS_VENDOR","value","dsData","DS_VENDOR");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item6","divData.form.edtCD_VENDOR","value","dsData","CD_VENDOR");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item4","divData.form.edtCD_SITE","value","dsData","CD_SITE");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item7","divData.form.edtDS_SITE","value","dsData","DS_SITE");
            this.addChild(obj.name, obj);
            obj.bind();
            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script
        this.registerScript("DCB_SUCCESSBIDDLG.xfdl", function() {
        this.objApp = this.gfnGetApplication();

        this.YN_SUCCESS = "";

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

        	// 이전 화면에서 데이터 받기.
        	this.dsData.setColumn(0, "CD_SITE", this.getOwnerFrame().CD_SITE);
        	this.dsData.setColumn(0, "DS_SITE", this.getOwnerFrame().DS_SITE);
        	this.dsData.setColumn(0, "NO_BID", this.getOwnerFrame().NO_BID);
        	this.dsData.setColumn(0, "DS_BID", this.getOwnerFrame().DS_BID);
        	this.dsData.setColumn(0, "CD_VENDOR", this.getOwnerFrame().CD_VENDOR);
        	this.dsData.setColumn(0, "DS_VENDOR", this.getOwnerFrame().DS_VENDOR);

        	this.YN_SUCCESS = this.getOwnerFrame().YN_SUCCESS;
        	//this.dsData.setColumn(0, "DS_FALLREASON", this.getOwnerFrame().DS_FALLREASON);

        	if(this.YN_SUCCESS == "N")
        	{
        		this.divData.form.staTITLE.set_text("낙찰취소");
        		this.btnOk_EX.set_visible(false);
        		this.staNotice.set_visible(false);
        	}
        	else if(this.YN_SUCCESS == "Y")
        	{
        		this.divData.form.staTITLE.set_text("낙찰사선정");
        		if(this.getOwnerFrame().DS_PARAM != "MM") {
        			this.btnOk_EX.set_visible(false);
        			this.staNotice.set_visible(false);
        		}
        	}
        };

        /************************************************************************
         * 버튼 설정 : 화면(Tab) 전환시 마다 호출
         * 서브버튼 사용 및 공통버튼 강제 제어시 여기서 처리
         ************************************************************************/
        this.fnSetButton = function() {
        	//this.FormBtns.Select.set_enable(false);
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
        	//this.dxGrid = this.divData.form.objGrid;
        	//this.tclDT_TOIJIK = this.divData.form.tclDT_TOIJIK;
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
        	this.dsSave = new Dataset();
        	this.dsSave.addColumn("CD_SITE", "string");
        	this.dsSave.addColumn("NO_BID", "string");
        	this.dsSave.addColumn("CD_VENDOR", "string");
        	this.dsSave.addColumn("YN_SUCCESS", "string");
        	this.dsSave.addColumn("DS_FALLREASON", "string");
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
        /*
         *	콜백 처리
         */
        this.fnCallback = function(svcID, errorCode, errorMsg)
        {
        	if (svcID == "save") {
        		if(errorCode == 0)
        		{
        			// this.close()가 작동하지 않았고,
        			// 부모의 callback 함수로 데이터를 넘겨주기 위해 작성되었습니다.
        			this.getParentContext().close(true);
        		}else
        		{
        			this.gfnAlert(errorMsg);
        		}
        	}
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
        // 확인 버튼 클릭
        this.divData_btnOk_onclick = function(obj,e)
        {
        	this.dsSave.clearData();
        	this.dsSave.addRow();

        	this.dsSave.setColumn(0, "CD_SITE", this.dsData.getColumn(0, "CD_SITE"));
        	this.dsSave.setColumn(0, "NO_BID", this.dsData.getColumn(0, "NO_BID"));
        	this.dsSave.setColumn(0, "CD_VENDOR", this.dsData.getColumn(0, "CD_VENDOR"));
        	this.dsSave.setColumn(0, "YN_SUCCESS", this.YN_SUCCESS);
        	this.dsSave.setColumn(0, "DS_FALLREASON", this.dsData.getColumn(0, "DS_FALLREASON"));

        	var strSvcId    = "save";
        	var strSvcType  = "save";
        	var inProc		= "_dsProc";
        	var inData      = "save=dsSave";
        	var outData     = "";
        	var strArg      = "";
        	var callBackFnc = "fnCallback";

        	this.gfnTransaction( strSvcId , 	// transaction을 구분하기 위한 svc id값
        						strSvcType , 	// transaction을 요청할 구분
        						inProc,			// Procedure 정보 Dataset 이름
        						inData , 		// 입력값으로 보낼 dataset id , a=b형태로 실제이름과 입력이름을 매칭
        						outData , 		// 처리결과값으로 받을 dataset id, a=b형태로 실제이름과 입력이름을 매칭
        						strArg, 		// 입력값으로 보낼 arguments, strFormData="20120607"
        						callBackFnc); // 통신방법 정의 [생략가능]


        };

        // 취소 버튼 클릭
        this.divData_btnCancel_onclick = function(obj,e)
        {
        	// this.close()가 작동하지 않았고,
        	// 부모의 callback 함수로 데이터를 넘겨주기 위해 작성되었습니다.
        	this.getParentContext().close(false);
        };

        this.divData_btnOk_EX_onclick = function(obj,e)
        {
        	this.dsSave.clearData();
        	this.dsSave.addRow();

        	this.dsSave.setColumn(0, "CD_SITE", this.dsData.getColumn(0, "CD_SITE"));
        	this.dsSave.setColumn(0, "NO_BID", this.dsData.getColumn(0, "NO_BID"));
        	this.dsSave.setColumn(0, "CD_VENDOR", this.dsData.getColumn(0, "CD_VENDOR"));
        	this.dsSave.setColumn(0, "DS_FALLREASON", this.dsData.getColumn(0, "DS_FALLREASON"));

        	var strSvcId    = "save";
        	var strSvcType  = "save";
        	var inProc		= "_dsProc";
        	var inData      = "create=dsSave";
        	var outData     = "";
        	var strArg      = "";
        	var callBackFnc = "fnCallback";

        	this.gfnTransaction( strSvcId , 	// transaction을 구분하기 위한 svc id값
        						strSvcType , 	// transaction을 요청할 구분
        						inProc,			// Procedure 정보 Dataset 이름
        						inData , 		// 입력값으로 보낼 dataset id , a=b형태로 실제이름과 입력이름을 매칭
        						outData , 		// 처리결과값으로 받을 dataset id, a=b형태로 실제이름과 입력이름을 매칭
        						strArg, 		// 입력값으로 보낼 arguments, strFormData="20120607"
        						callBackFnc); // 통신방법 정의 [생략가능]
        };

        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.form_onload,this);
            this.divData.form.staDS_SITE.addEventHandler("onclick",this.divData_staDS_SITE_onclick,this);
            this.divData.form.btnOk.addEventHandler("onclick",this.divData_btnOk_onclick,this);
            this.divData.form.btnCancel.addEventHandler("onclick",this.divData_btnCancel_onclick,this);
            this.btnOk_EX.addEventHandler("onclick",this.divData_btnOk_EX_onclick,this);
        };
        this.loadIncludeScript("DCB_SUCCESSBIDDLG.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
