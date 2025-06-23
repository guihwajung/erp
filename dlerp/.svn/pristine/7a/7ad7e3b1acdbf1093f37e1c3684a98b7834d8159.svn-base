(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("DAA_BASE_PERSCARD_DLG");
            this.set_titletext("증명서 신청자현황");
            this.getSetter("maxwidth").set("400");
            this.getSetter("maxheight").set("250");
            if (Form == this.constructor)
            {
                this._setFormPosition(350,200);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("dsList", this);
            obj._setContents("<ColumnInfo><Column id=\"TY_ORDER\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row/></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("_dsProc", this);
            obj._setContents("<ColumnInfo><Column id=\"TARGET\" type=\"STRING\" size=\"256\"/><Column id=\"SP\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"TARGET\">select</Col><Col id=\"SP\">DAAPR_CERTIFICATE_SELECT</Col></Row><Row><Col id=\"TARGET\">report</Col><Col id=\"SP\">DAAPR_CERTIFICATE_RPT</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsTY_ORDER", this);
            obj._setContents("<ColumnInfo><Column id=\"CODE\" type=\"STRING\" size=\"256\"/><Column id=\"VALUE\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"CODE\">2</Col><Col id=\"VALUE\">내역</Col></Row><Row><Col id=\"CODE\">1</Col><Col id=\"VALUE\">집계</Col></Row></Rows>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Static("staTITLE","0","0",null,"30","6",null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_text("증명서 신청자 현황");
            obj.set_cssclass("sta_TITLE_Bg");
            obj.set_textAlign("left");
            this.addChild(obj.name, obj);

            obj = new Div("divBtns","71","120","200","36",null,null,null,null,null,null,this);
            obj.set_taborder("1");
            this.addChild(obj.name, obj);

            obj = new Button("btnOK","30","3","60","27",null,null,null,null,null,null,this.divBtns.form);
            obj.set_taborder("16");
            obj.set_text("확인");
            this.divBtns.addChild(obj.name, obj);

            obj = new Button("btnCANCLE","btnOK:30","3","60","27",null,null,null,null,null,null,this.divBtns.form);
            obj.set_taborder("17");
            obj.set_text("취소");
            this.divBtns.addChild(obj.name, obj);

            obj = new Static("sta03","6","63","80","30",null,null,null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_text("출력구분");
            obj.set_cssclass("sta_WF_tablelabel");
            this.addChild(obj.name, obj);

            obj = new Static("sta04","sta03:-1","63","260","30",null,null,null,null,null,null,this);
            obj.set_taborder("3");
            obj.set_cssclass("sta_WF_tablebg");
            obj.set_text("");
            this.addChild(obj.name, obj);

            obj = new Radio("rdoTY_ORDER","100","66","148","24",null,null,null,null,null,null,this);
            obj.set_taborder("4");
            obj.set_innerdataset("dsTY_ORDER");
            obj.set_codecolumn("CODE");
            obj.set_datacolumn("VALUE");
            obj.set_direction("vertical");
            obj.set_value("");
            obj.set_index("0");
            this.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this
            obj = new Layout("default","",this._adjust_width,this._adjust_height,this,function(p){});
            this.addLayout(obj.name, obj);
            
            // BindItem Information
            obj = new BindItem("item10","rdoTY_ORDER","value","dsList","TY_ORDER");
            this.addChild(obj.name, obj);
            obj.bind();
            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script
        this.registerScript("DAA_CERTIFICATE_RPT_DLG.xfdl", function() {
        this.objApp = this.gfnGetApplication();

        this.form_onload = function(obj,e)
        {
        	// -- 필수 -------------------//
        	this.gfnFormOnLoad(this);
        	this.gfnFormInfo(this);
        	// ---------------------------//

        	this.fnSetVariable();
        	this.fnSetEvent();
        	this.fnSetParameter();

        	this.rdoTY_ORDER.set_value("2");
        };

        /************************************************************************
         * 변수 선언
         ************************************************************************/
        this.fnSetVariable = function() {

        };

        /************************************************************************
         * 파라미터 설정
         ************************************************************************/
        this.fnSetParameter = function() {
        	this.dsSelect = new Dataset();
        	this.dsSelect.addColumn("CD_CORP", "string");
        	this.dsSelect.addColumn("CD_DEPT", "string");
        	this.dsSelect.addColumn("ID_SABUN", "string");
        	this.dsSelect.addColumn("TY_CERTIFICATE", "string");
        	this.dsSelect.addColumn("YN_APPROVE", "string");
        	this.dsSelect.addColumn("DT_SINCHUNG_FR", "string");
        	this.dsSelect.addColumn("DT_SINCHUNG_TO", "string");
        	this.dsSelect.addColumn("GR_SEARCH", "string");
        	this.dsSelect.addColumn("GR_DEPT", "string");
        	this.dsSelect.addColumn("ID_LOGIN", "string");

        	this.dsRpt = new Dataset();
        	this.dsRpt.addColumn("DT_SINCHUNG_FR", "string");
        	this.dsRpt.addColumn("DT_SINCHUNG_TO", "string");
        	this.dsRpt.addColumn("ID_LOGIN", "string");
        }

        /************************************************************************
         * 이벤트 설정
         ************************************************************************/
        this.fnSetEvent = function() {
        };

        this.btnOK_onclick = function(obj,e){
        	this.fnPrint();
        	//this.getParentContext().close(true);
        };

        this.fnPrint = function (){
        	var sTY_ORDER = this.rdoTY_ORDER.value;

        	if (sTY_ORDER == "2") { // 내역
        		this.dsSelect.clearData();
        		this.dsSelect.addRow();

        		this.dsSelect.setColumn(0, "CD_CORP", this.getOwnerFrame().CD_CORP);
        		this.dsSelect.setColumn(0, "TY_CERTIFICATE", this.getOwnerFrame().TY_CERTIFICATE);
        		this.dsSelect.setColumn(0, "YN_APPROVE", this.getOwnerFrame().YN_APPROVE);
        		this.dsSelect.setColumn(0, "ID_SABUN", this.getOwnerFrame().ID_SABUN);
        		this.dsSelect.setColumn(0, "CD_DEPT", this.getOwnerFrame().CD_DEPT);
        		this.dsSelect.setColumn(0, "DT_SINCHUNG_FR", this.getOwnerFrame().DT_SINCHUNG_FR);
        		this.dsSelect.setColumn(0, "DT_SINCHUNG_TO", this.getOwnerFrame().DT_SINCHUNG_TO);
        		this.dsSelect.setColumn(0, "GR_SEARCH", this.FormInfo.GR_SEARCH);
        		this.dsSelect.setColumn(0, "GR_DEPT", this.AuthClient.CD_DEPT);
        		this.dsSelect.setColumn(0, "ID_LOGIN", this.AuthClient.ID_USER);

        // 		////////////////////
        // 		var strSvcId    = "report";
        // 		var strSvcType  = "grid";
        // 		var inProc		= "_dsProc";
        // 		var inData      = "select=dsSelect";
        // 		var outData     = "dsReqInfo=select0";
        // 		var strArg      = "";
        // 		var callBackFnc = "fnCallback";
        //
        // 		this.gfnTransaction( strSvcId , 	// transaction을 구분하기 위한 svc id값
        // 							strSvcType , 	// trabsaction을 요청할 구분
        // 							inProc,			// Procedure 정보 Dataset 이름
        // 							inData , 		// 입력값으로 보낼 dataset id , a=b형태로 실제이름과 입력이름을 매칭
        // 							outData , 		// 처리결과값으로 받을 dataset id, a=b형태로 실제이름과 입력이름을 매칭
        // 							strArg, 			// 입력갑스로 보낼 arguments, strFormData="20120607"
        // 							callBackFnc); // 통신방법 정의 [생략가능]
        // 		return;
        // 		////////////////////


        		var inProc		= "_dsProc";
        		//var inParam 	= "params=dsReportParam";
        		var inParam 	= "";
        		var inData      = "select=dsSelect";
        		var reportpath  = "/da/daa/DAA_CERTIFICATE_2.ozr";

        		gfnOpenReport(this, reportpath, inProc, inParam, inData);

        	} else { // 집계
        		this.dsRpt.clearData();
        		this.dsRpt.addRow();

        		this.dsRpt.setColumn(0, "DT_SINCHUNG_FR", this.getOwnerFrame().DT_SINCHUNG_FR);
        		this.dsRpt.setColumn(0, "DT_SINCHUNG_TO", this.getOwnerFrame().DT_SINCHUNG_TO);
        		this.dsRpt.setColumn(0, "ID_LOGIN", this.AuthClient.ID_USER);

        // 		////////////////////
        // 		var strSvcId    = "report2";
        // 		var strSvcType  = "grid";
        // 		var inProc		= "_dsProc";
        // 		var inData      = "report=dsRpt";
        // 		var outData     = "dsReqInfo2=report0";
        // 		var strArg      = "";
        // 		var callBackFnc = "fnCallback";
        //
        // 		this.gfnTransaction( strSvcId , 	// transaction을 구분하기 위한 svc id값
        // 							strSvcType , 	// trabsaction을 요청할 구분
        // 							inProc,			// Procedure 정보 Dataset 이름
        // 							inData , 		// 입력값으로 보낼 dataset id , a=b형태로 실제이름과 입력이름을 매칭
        // 							outData , 		// 처리결과값으로 받을 dataset id, a=b형태로 실제이름과 입력이름을 매칭
        // 							strArg, 			// 입력갑스로 보낼 arguments, strFormData="20120607"
        // 							callBackFnc); // 통신방법 정의 [생략가능]
        //
        // 		return;
        // 		////////////////////

        		var inProc		= "_dsProc";
        		//var inParam 	= "params=dsReportParam";
        		var inParam 	= "";
        		var inData      = "report=dsRpt";
        		var reportpath  = "/da/daa/DAA_CERTIFICATE.ozr";

        		gfnOpenReport(this, reportpath, inProc, inParam, inData);
        	}

        };

        this.btnCANCLE_onclick = function(obj,e)
        {
        	// 취소
        	this.getParentContext().close(false);
        };

        /************************************************************************
         * Validate
         ************************************************************************/


        /************************************************************************
         * 코드파인드 이벤트
         ************************************************************************/


        /************************************************************************
         * 콜백 이벤트
         ************************************************************************/


        this.dsList_onvaluechanged = function(obj,e)
        {
        	var strColid = e.columnid;
        	if(e.oldvalue != e.newvalue) {
        	}
        };

        /************************************************************************
         * 기타 이벤트
         ************************************************************************/

        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.form_onload,this);
            this.divBtns.form.btnOK.addEventHandler("onclick",this.btnOK_onclick,this);
            this.divBtns.form.btnCANCLE.addEventHandler("onclick",this.btnCANCLE_onclick,this);
            this.dsList.addEventHandler("onvaluechanged",this.dsList_onvaluechanged,this);
        };
        this.loadIncludeScript("DAA_CERTIFICATE_RPT_DLG.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
