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
            if (Form == this.constructor)
            {
                this._setFormPosition(500,350);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("dsDomains", this);
            obj._setContents("<ColumnInfo><Column id=\"mailDomain\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsSearch", this);
            obj._setContents("<ColumnInfo><Column id=\"page\" type=\"STRING\" size=\"256\"/><Column id=\"size\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsParam", this);
            obj._setContents("<ColumnInfo><Column id=\"size\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"size\">50</Col></Row></Rows>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Static("staBG","0","0",null,null,"0","0",null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_background("#ffffff");
            obj.set_text("");
            this.addChild(obj.name, obj);

            obj = new Grid("grd","20","44",null,"246","20",null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_binddataset("dsDomains");
            obj.set_autofittype("col");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"80\"/></Columns><Rows><Row size=\"24\" band=\"head\"/><Row size=\"24\"/></Rows><Band id=\"head\"><Cell text=\"도메인\"/></Band><Band id=\"body\"><Cell text=\"bind:mailDomain\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Div("divBtns",null,"grd:20","130","26","20",null,null,null,null,null,this);
            obj.set_taborder("2");
            this.addChild(obj.name, obj);

            obj = new Button("btnConfirm","22","0","52","26",null,null,null,null,null,null,this.divBtns.form);
            obj.set_taborder("3");
            obj.set_text("확인");
            obj.set_cssclass("btn_WF_action");
            this.divBtns.addChild(obj.name, obj);

            obj = new Button("btnCancel","btnConfirm:4","0","52","26",null,null,null,null,null,null,this.divBtns.form);
            obj.set_taborder("4");
            obj.set_text("취소");
            this.divBtns.addChild(obj.name, obj);

            obj = new Static("sta00","20","12",null,"25","19",null,null,null,null,null,this);
            obj.set_taborder("3");
            obj.set_text("Dooray 에 등록된 도메인 목록입니다.");
            obj.set_cssclass("sta_WF_notice");
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
        this.registerScript("DZU_ORGANIZATIONS_DOMAINS.xfdl", function() {
        this.form_onload = function(obj,e)
        {
        	var strSvcId    = "select";
        	var strSvcType  = "dooray/mail-domains";
        	var inProc		= "";
        	var inData      = "dsParam=dsParam";
        	var outData     = "dsDomains=result";
        	var strArg      = "";
        	var callBackFnc = "fnCallback";
        	this.gfnTransaction(strSvcId, strSvcType, inProc, inData, outData, strArg, callBackFnc);
        };

        this.fnCallback = function(svcId, errCode, errMsg)
        {

        };

        this.div00_btnCancel_onclick = function(obj,e)
        {
        	this.close();
        };

        this.div00_btnConfirm_onclick = function(obj,e)
        {
        	this.fnConfirm();
        };

        this._grd_oncelldblclick = function(obj,e)
        {
        	this.fnConfirm();
        };

        this.fnConfirm = function() {
        	this.close(this.dsDomains.getColumn(this.dsDomains.rowposition, "mailDomain"));
        };


        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.form_onload,this);
            this.grd.addEventHandler("oncelldblclick",this._grd_oncelldblclick,this);
            this.divBtns.form.btnConfirm.addEventHandler("onclick",this.div00_btnConfirm_onclick,this);
            this.divBtns.form.btnCancel.addEventHandler("onclick",this.div00_btnCancel_onclick,this);
        };
        this.loadIncludeScript("DZU_ORGANIZATIONS_DOMAINS.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
