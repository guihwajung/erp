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
            this.getSetter("maxwidth").set("500");
            this.getSetter("maxheight").set("300");
            if (Form == this.constructor)
            {
                this._setFormPosition(400,250);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("_dsProc", this);
            obj._setContents("<ColumnInfo><Column id=\"TARGET\" type=\"STRING\" size=\"256\"/><Column id=\"SP\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"TARGET\">create</Col><Col id=\"SP\">DCBPR_BIDTOPO_INSERT</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsData", this);
            obj._setContents("<ColumnInfo><Column id=\"NO_BID\" type=\"STRING\" size=\"256\"/><Column id=\"DS_SUBCON\" type=\"STRING\" size=\"256\"/><Column id=\"CD_LICCOST\" type=\"STRING\" size=\"256\"/><Column id=\"DS_LICCOST\" type=\"STRING\" size=\"256\"/><Column id=\"CD_VENDOR\" type=\"STRING\" size=\"256\"/><Column id=\"DS_VENDOR\" type=\"STRING\" size=\"256\"/><Column id=\"CD_COSTCLASS\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row/></Rows>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Div("divData","0","0",null,null,"0","0",null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_cssclass("div_DATA_Bg");
            obj.set_text("");
            this.addChild(obj.name, obj);

            obj = new Static("staTITLE","0","0","100%","30",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("0");
            obj.set_text("PO생성");
            obj.set_cssclass("sta_TITLE_Bg");
            obj.set_textAlign("center");
            this.divData.addChild(obj.name, obj);

            obj = new Static("staNO_BID","0","staTITLE:5","87","30",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("1");
            obj.set_text("입찰번호");
            obj.set_cssclass("sta_WF_tablelabel");
            obj.set_textAlign("right");
            this.divData.addChild(obj.name, obj);

            obj = new Static("staCD_LICCOST","0","staNO_BID:-1","87","30",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("2");
            obj.set_text("품목코드");
            obj.set_cssclass("sta_WF_tablelabel");
            obj.set_textAlign("right");
            this.divData.addChild(obj.name, obj);

            obj = new Static("staSPACE00","0","staCD_LICCOST:-1","87","30",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("3");
            obj.set_cssclass("sta_WF_tablelabel");
            obj.set_textAlign("right");
            this.divData.addChild(obj.name, obj);

            obj = new Static("staCD_VENDOR","0","staSPACE00:-1","87","30",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("4");
            obj.set_text("업체");
            obj.set_textAlign("right");
            obj.set_cssclass("sta_WF_tablelabelE");
            this.divData.addChild(obj.name, obj);

            obj = new Static("staBg1","staNO_BID:-1","staTITLE:5",null,"30","0%",null,null,null,null,null,this.divData.form);
            obj.set_taborder("5");
            obj.set_cssclass("sta_WF_tablebg");
            this.divData.addChild(obj.name, obj);

            obj = new Static("staBg2","staCD_LICCOST:-1","staBg1:-1",null,"30","0%",null,null,null,null,null,this.divData.form);
            obj.set_taborder("6");
            obj.set_cssclass("sta_WF_tablebg");
            this.divData.addChild(obj.name, obj);

            obj = new Static("staBg3","staSPACE00:-1","staBg2:-1",null,"30","0%",null,null,null,null,null,this.divData.form);
            obj.set_taborder("7");
            obj.set_cssclass("sta_WF_tablebg");
            this.divData.addChild(obj.name, obj);

            obj = new Static("staBg4","staCD_VENDOR:-1","staBg3:-1",null,"30","0%",null,null,null,null,null,this.divData.form);
            obj.set_taborder("8");
            obj.set_cssclass("sta_WF_tablebg");
            this.divData.addChild(obj.name, obj);

            obj = new Edit("edtNO_BID","staNO_BID:5","staTITLE:10","100","20",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("9");
            obj.set_readonly("true");
            this.divData.addChild(obj.name, obj);

            obj = new Edit("edtDS_SUBCON","edtNO_BID:3","staTITLE:10",null,"20","5",null,null,null,null,null,this.divData.form);
            obj.set_taborder("10");
            obj.set_readonly("true");
            this.divData.addChild(obj.name, obj);

            obj = new Edit("edtCD_LICCOST","staCD_LICCOST:5","edtNO_BID:9","100","20",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("11");
            obj.set_readonly("true");
            this.divData.addChild(obj.name, obj);

            obj = new Edit("edtDS_LICCOST","edtCD_LICCOST:3","edtNO_BID:9",null,"20","5",null,null,null,null,null,this.divData.form);
            obj.set_taborder("12");
            obj.set_readonly("true");
            this.divData.addChild(obj.name, obj);

            obj = new Edit("ctxtCD_VENDOR","staCD_VENDOR:5","staSPACE00:5","98","20",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("13");
            obj.set_value("");
            obj.set_readonly("true");
            this.divData.addChild(obj.name, obj);

            obj = new Edit("ctxtDS_VENDOR","ctxtCD_VENDOR:3","staSPACE00:5","120","20",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("14");
            obj.set_value("");
            obj.set_readonly("true");
            this.divData.addChild(obj.name, obj);

            obj = new Button("btnCD_VENDOR","ctxtDS_VENDOR:5","staSPACE00:5","60","20",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("15");
            obj.set_text("검색");
            this.divData.addChild(obj.name, obj);

            obj = new Div("ccfCD_VENDOR","staCD_VENDOR:5","staBg3:5",null,"20","5",null,null,null,null,null,this.divData.form);
            obj.getSetter("CodeFindName").set("DCX_CFVENDOR_DM");
            obj.getSetter("CDTextWidth").set("80");
            obj.set_taborder("13");
            obj.set_url("cmm::cmmCodeFind.xfdl");
            this.divData.addChild(obj.name, obj);

            obj = new Button("btnOk","35%","staCD_VENDOR:20","60","20",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("15");
            obj.set_text("생성");
            this.divData.addChild(obj.name, obj);

            obj = new Button("btnCancel","55%","staCD_VENDOR:20","60","20",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("16");
            obj.set_text("취소");
            this.divData.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this
            obj = new Layout("default","",this._adjust_width,this._adjust_height,this,function(p){});
            this.addLayout(obj.name, obj);
            
            // BindItem Information
            obj = new BindItem("item0","divData.form.edtNO_BID","value","dsData","NO_BID");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item1","divData.form.edtDS_SUBCON","value","dsData","DS_SUBCON");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item2","divData.form.edtCD_LICCOST","value","dsData","CD_LICCOST");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item3","divData.form.edtDS_LICCOST","value","dsData","DS_LICCOST");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item4","divData.form.ctxtCD_VENDOR","value","dsData","CD_VENDOR");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item5","divData.form.ctxtDS_VENDOR","value","dsData","DS_VENDOR");
            this.addChild(obj.name, obj);
            obj.bind();
            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {
            this._addPreloadList("fdl","cmm::cmmCodeFind.xfdl");
        };
        
        // User Script
        this.registerScript("DCB_BIDTOPO_DLG.xfdl", function() {
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

        	// 이전 화면에서 데이터 받기.
        	this.dsData.setColumn(0, "NO_BID", this.getOwnerFrame().NO_BID);
        	this.dsData.setColumn(0, "DS_SUBCON", this.getOwnerFrame().DS_SUBCON);
        	this.dsData.setColumn(0, "CD_LICCOST", this.getOwnerFrame().CD_LICCOST);
        	this.dsData.setColumn(0, "DS_LICCOST",  this.getOwnerFrame().DS_LICCOST);
        	this.dsData.setColumn(0, "CD_COSTCLASS",  this.getOwnerFrame().CD_COSTCLASS);
        };

        /************************************************************************
         * 버튼 설정 : 화면(Tab) 전환시 마다 호출
         * 서브버튼 사용 및 공통버튼 강제 제어시 여기서 처리
         ************************************************************************/
        this.fnSetButton = function() {
        	this.FormBtns.Select.set_enable(false);
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
        	this.dxGrid = this.divData.form.objGrid;
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
        	this.dsCreate = new Dataset();
        	this.dsCreate.addColumn("NO_BID", "string");
        	this.dsCreate.addColumn("CD_VENDOR", "string");
        	this.dsCreate.addColumn("ID_USER", "string");
        }

        /************************************************************************
         * 컨트롤 이벤트
         ************************************************************************/

        /************************************************************************
         * Validate
         ************************************************************************/
        this.fnSaveValidate = function()
        {
        	var validate = true;

        	if(this.gfnIsNull(this.dsData.getColumn(0, "CD_VENDOR")))
        	{
        		this.gfnAlert("업체를 반드시 입력하여야 합니다.");
        		validate = false;
        	}

        	return validate;
        }
        /************************************************************************
         * 콜백 이벤트
         ************************************************************************/
        /*
         *	콜백 처리
         */
        this.fnCallback = function(svcID, errorCode, errorMsg)
        {
        	if (svcID == "create") {
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
        	if(!this.fnSaveValidate()) return false;

        	this.dsCreate.clearData();
        	var nrow = this.dsCreate.addRow();

        	this.dsCreate.setColumn(nrow, "NO_BID", this.dsData.getColumn(0, "NO_BID"));
        	this.dsCreate.setColumn(nrow, "CD_VENDOR", this.dsData.getColumn(0, "CD_VENDOR"));
        	this.dsCreate.setColumn(nrow, "ID_USER", this.AuthClient.ID_USER);

        	var strSvcId    = "create";
        	var strSvcType  = "save";
        	var inProc		= "_dsProc";
        	var inData      = "create=dsCreate";
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

        // 업체검색 버튼
        this.divData_btnCD_VENDOR_onclick = function(obj,e)
        {
        	var param = {};

        	param.CD_LICCOST = this.dsData.getColumn(0, "CD_LICCOST");
        	param.DS_LICCOST = this.dsData.getColumn(0, "DS_LICCOST");
        	param.CD_COSTCLASS = this.dsData.getColumn(0, "CD_COSTCLASS");

        	this.gfnFormOpenNonAuth(this.FormInfo.CD_MODULE, "DMA_VENDOR_SEARCHDLG", "fnVENDOR_SEARCH_callback", param, 600, 500);
        };

        this.fnVENDOR_SEARCH_callback = function(strID, val)
        {
        	if(val != false)
        	{

        		var vendor = val.toString().split(",");
        		this.dsData.setColumn(0, "CD_VENDOR", vendor[0]);
        		this.dsData.setColumn(0, "DS_VENDOR", vendor[1]);

        	}
        }
        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.form_onload,this);
            this.divData.form.btnCD_VENDOR.addEventHandler("onclick",this.divData_btnCD_VENDOR_onclick,this);
            this.divData.form.btnOk.addEventHandler("onclick",this.divData_btnOk_onclick,this);
            this.divData.form.btnCancel.addEventHandler("onclick",this.divData_btnCancel_onclick,this);
            this.dsData.addEventHandler("onvaluechanged",this.dsData_onvaluechanged,this);
        };
        this.loadIncludeScript("DCB_BIDTOPO_DLG.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
