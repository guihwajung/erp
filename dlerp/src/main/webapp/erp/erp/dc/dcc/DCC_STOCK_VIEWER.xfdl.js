(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("DCC_STAMP_VIEWER");
            this.set_titletext("New Form");
            if (Form == this.constructor)
            {
                this._setFormPosition(1280,720);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize

            
            // UI Components Initialize
            obj = new WebBrowser("webStockViewer","0","0","50%",null,null,"0",null,null,null,null,this);
            obj.set_taborder("0");
            this.addChild(obj.name, obj);

            obj = new WebBrowser("webStockViewer2","webStockViewer:0","0","50.00%",null,null,"0",null,null,null,null,this);
            obj.set_taborder("1");
            this.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this
            obj = new Layout("default","",1280,720,this,function(p){});
            obj.set_mobileorientation("landscape");
            this.addLayout(obj.name, obj);
            
            // BindItem Information

            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script
        this.registerScript("DCC_STOCK_VIEWER.xfdl", function() {
        this.objApp = this.gfnGetApplication();

        this.form_onload = function(obj,e)
        {
        	// -- 필수 -------------------//
        // 	this.gfnFormOnLoad(this);
        // 	this.gfnFormInfo(this);
        	// ---------------------------//
        	this.fnSetParameter();
        	this.fnSelect();
        };

        /************************************************************************
         * 파라미터 설정
         ************************************************************************/
        this.fnSetParameter = function() {
        	// 보증관련
        	this.dsTransure = new Dataset();
        	this.dsTransure.addColumn("CD_SITE", "string");
        	this.dsTransure.addColumn("NO_CONT", "string");
        	this.dsTransure.addColumn("SN_SEQ", "string");
        	this.dsTransure.addColumn("TY_STOCK", "string");
        	this.dsTransure.addColumn("MODULE", "string");

        	this.dsTransureView = new Dataset();
        };

        this.fnSelect = function() {

        	this.dsTransure.clearData();
        	this.dsTransure.addRow();
        	this.dsTransure.setColumn(0, "CD_SITE",	this.getOwnerFrame().CD_SITE);
        	this.dsTransure.setColumn(0, "NO_CONT",	this.getOwnerFrame().NO_CONT);
        	this.dsTransure.setColumn(0, "SN_SEQ", 	this.getOwnerFrame().SN_SEQ);
        	this.dsTransure.setColumn(0, "TY_STOCK", this.getOwnerFrame().TY_STOCK);
        	this.dsTransure.setColumn(0, "MODULE", 	this.getOwnerFrame().MODULE);

        	var strSvcId    = "transureView";
        	var strSvcType  = "dcc_transure_" + this.getOwnerFrame().TY_PUBLICATION.toLowerCase() + "_view";
        	var inProc		= "";
        	var inData      = "dsTransure=dsTransure";
        	var outData     = "dsTransureView=dsTransureView";
        	var strArg      = "";
        	var callBackFnc = "fnTransureCallback";

        	this.gfnTransaction( strSvcId , 	// transaction을 구분하기 위한 svc id값
        						strSvcType , 	// transaction을 요청할 구분
        						inProc,			// Procedure 정보 Dataset 이름
        						inData , 		// 입력값으로 보낼 dataset id , a=b형태로 실제이름과 입력이름을 매칭
        						outData , 		// 처리결과값으로 받을 dataset id, a=b형태로 실제이름과 입력이름을 매칭
        						strArg, 			// 입력갑스로 보낼 arguments, strFormData="20120607"
        						callBackFnc); // 통신방법 정의 [생략가능]
        };

        this.fnTransureCallback = function(svcID, errorCode, errorMsg)
        {
        	if(svcID == "transureView"){
        		if(errorCode != 0) {
        			this.gfnAlert(errorMsg);
        			return;
        		};

        		this.fnTransureViewerMake();
        	};
        };

        this.arrViewer = [this.webStockViewer,this.webStockViewer2];
        this.fnTransureViewerMake = function(svcID, errorCode, errorMsg)
        {
        	for(var i = 0; i < this.dsTransureView.rowcount; ++i) {
        		this.arrViewer[i].set_url(this.dsTransureView.getColumn(i,"urlView"));
        	};

        };
        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.form_onload,this);
        };
        this.loadIncludeScript("DCC_STOCK_VIEWER.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
