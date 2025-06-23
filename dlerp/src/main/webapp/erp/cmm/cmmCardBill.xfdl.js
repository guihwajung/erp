(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("cmmCardBill");
            if (Form == this.constructor)
            {
                this._setFormPosition(330,360);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("_dsProc", this);
            obj._setContents("<ColumnInfo><Column id=\"TARGET\" type=\"STRING\" size=\"256\"/><Column id=\"SP\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"TARGET\">select</Col><Col id=\"SP\">DZZPR_CARDBILL_SELECT</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsCardBill", this);
            obj._setContents("");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsSelect", this);
            obj._setContents("<ColumnInfo><Column id=\"NO_SEQ\" type=\"INT\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Static("staNO_CARD","18","20","95","30",null,null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_text("카드번호");
            obj.set_cssclass("sta_WF_tablelabelN");
            obj.set_textAlign("left");
            obj.set_padding("0px 0px 0px 15px");
            this.addChild(obj.name, obj);

            obj = new Static("staNO_CARD_bg","staNO_CARD:-1","staNO_CARD:-30","200","30",null,null,null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_cssclass("sta_WF_tablebg");
            this.addChild(obj.name, obj);

            obj = new Button("btnClose","260","320","52","26",null,null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.getSetter("multiselect").set("true");
            obj.set_text("닫기");
            obj.set_visible("true");
            this.addChild(obj.name, obj);

            obj = new Static("staDT_APPROVAL","staNO_CARD:-95","staNO_CARD:-1","95","30",null,null,null,null,null,null,this);
            obj.set_taborder("3");
            obj.set_text("승인일자");
            obj.set_cssclass("sta_WF_tablelabelN");
            obj.set_textAlign("left");
            obj.set_padding("0px 0px 0px 15px");
            this.addChild(obj.name, obj);

            obj = new Static("staDT_APPROVAL_bg","staDT_APPROVAL:-1","staDT_APPROVAL:-30","200","30",null,null,null,null,null,null,this);
            obj.set_taborder("4");
            obj.set_cssclass("sta_WF_tablebg");
            this.addChild(obj.name, obj);

            obj = new Static("staAM_APPROVAL","staDT_APPROVAL:-95","staDT_APPROVAL:-1","95","30",null,null,null,null,null,null,this);
            obj.set_taborder("5");
            obj.set_text("승인금액");
            obj.set_cssclass("sta_WF_tablelabelN");
            obj.set_textAlign("left");
            obj.set_padding("0px 0px 0px 15px");
            this.addChild(obj.name, obj);

            obj = new Static("staAM_APPROVAL_bg","staAM_APPROVAL:-1","staAM_APPROVAL:-30","200","30",null,null,null,null,null,null,this);
            obj.set_taborder("6");
            obj.set_cssclass("sta_WF_tablebg");
            this.addChild(obj.name, obj);

            obj = new Static("staAM_SURTAX","staAM_APPROVAL:-95","staAM_APPROVAL:-1","95","30",null,null,null,null,null,null,this);
            obj.set_taborder("7");
            obj.set_text("공급가");
            obj.set_cssclass("sta_WF_tablelabelN");
            obj.set_textAlign("left");
            obj.set_padding("0px 0px 0px 15px");
            this.addChild(obj.name, obj);

            obj = new Static("staAM_SURTAX_bg","staAM_SURTAX:-1","staAM_SURTAX:-30","200","30",null,null,null,null,null,null,this);
            obj.set_taborder("8");
            obj.set_cssclass("sta_WF_tablebg");
            this.addChild(obj.name, obj);

            obj = new Static("staAM_VATSUPPLY","staAM_SURTAX:-95","staAM_SURTAX:-1","95","30",null,null,null,null,null,null,this);
            obj.set_taborder("9");
            obj.set_text("부가세");
            obj.set_cssclass("sta_WF_tablelabelN");
            obj.set_textAlign("left");
            obj.set_padding("0px 0px 0px 15px");
            this.addChild(obj.name, obj);

            obj = new Static("staAM_VATSUPPLY_bg","staAM_VATSUPPLY:-1","staAM_VATSUPPLY:-30","200","30",null,null,null,null,null,null,this);
            obj.set_taborder("10");
            obj.set_cssclass("sta_WF_tablebg");
            this.addChild(obj.name, obj);

            obj = new Static("staCD_VENDORCODE","staAM_VATSUPPLY:-95","staAM_VATSUPPLY:-1","95","30",null,null,null,null,null,null,this);
            obj.set_taborder("11");
            obj.set_text("사업자번호");
            obj.set_cssclass("sta_WF_tablelabelN");
            obj.set_textAlign("left");
            obj.set_padding("0px 0px 0px 15px");
            this.addChild(obj.name, obj);

            obj = new Static("staCD_VENDORCODE_bg","staCD_VENDORCODE:-1","staCD_VENDORCODE:-30","200","30",null,null,null,null,null,null,this);
            obj.set_taborder("12");
            obj.set_cssclass("sta_WF_tablebg");
            this.addChild(obj.name, obj);

            obj = new Static("staDS_VENDOR","staCD_VENDORCODE:-95","staCD_VENDORCODE:-1","95","30",null,null,null,null,null,null,this);
            obj.set_taborder("13");
            obj.set_text("가맹점명");
            obj.set_cssclass("sta_WF_tablelabelN");
            obj.set_textAlign("left");
            obj.set_padding("0px 0px 0px 15px");
            this.addChild(obj.name, obj);

            obj = new Static("staDS_VENDOR_bg","staDS_VENDOR:-1","staDS_VENDOR:-30","200","30",null,null,null,null,null,null,this);
            obj.set_taborder("14");
            obj.set_cssclass("sta_WF_tablebg");
            this.addChild(obj.name, obj);

            obj = new Static("staDS_TAXTYPE","staDS_VENDOR:-95","staDS_VENDOR:-1","95","30",null,null,null,null,null,null,this);
            obj.set_taborder("15");
            obj.set_text("과세유형");
            obj.set_cssclass("sta_WF_tablelabelN");
            obj.set_textAlign("left");
            obj.set_padding("0px 0px 0px 15px");
            this.addChild(obj.name, obj);

            obj = new Static("staDS_TAXTYPE_bg","staDS_TAXTYPE:-1","staDS_TAXTYPE:-30","200","30",null,null,null,null,null,null,this);
            obj.set_taborder("16");
            obj.set_cssclass("sta_WF_tablebg");
            this.addChild(obj.name, obj);

            obj = new Static("staCD_USETYPE","staDS_TAXTYPE:-95","staDS_TAXTYPE:-1","95","30",null,null,null,null,null,null,this);
            obj.set_taborder("17");
            obj.set_text("사용목적");
            obj.set_cssclass("sta_WF_tablelabelN");
            obj.set_textAlign("left");
            obj.set_padding("0px 0px 0px 15px");
            this.addChild(obj.name, obj);

            obj = new Static("staCD_USETYPE_bg","staCD_USETYPE:-1","staCD_USETYPE:-30","200","30",null,null,null,null,null,null,this);
            obj.set_taborder("18");
            obj.set_cssclass("sta_WF_tablebg");
            this.addChild(obj.name, obj);

            obj = new Static("staDS_HNAME","staCD_USETYPE:-95","staCD_USETYPE:-1","95","30",null,null,null,null,null,null,this);
            obj.set_taborder("19");
            obj.set_text("사용인");
            obj.set_cssclass("sta_WF_tablelabelN");
            obj.set_textAlign("left");
            obj.set_padding("0px 0px 0px 15px");
            this.addChild(obj.name, obj);

            obj = new Static("staDS_HNAME_bg","staDS_HNAME:-1","staDS_HNAME:-30","200","30",null,null,null,null,null,null,this);
            obj.set_taborder("20");
            obj.set_cssclass("sta_WF_tablebg");
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
        this.registerScript("cmmCardBill.xfdl", function() {
        this.objApp = this.gfnGetApplication();

        this.cmmFileManager_onload = function(obj,e) {
        	// -- 필수 -------------------//
        	this.gfnFormOnLoad(this);
        	//this.gfnFormInfo(this);
        	// ---------------------------//

        	var NO_SEQ = this.getOwnerFrame().NO_SEQ;
        	this.fnSelect(NO_SEQ);
        }

        this.fnSelect = function(NO_SEQ) {
        	this.dsSelect.clearData();
        	this.dsSelect.addRow();

        	this.dsSelect.setColumn(0, "NO_SEQ", NO_SEQ);

        	var strSvcId    = "select";
        	var strSvcType  = "select";
        	var inProc		= "_dsProc";
        	var inData      = "select=dsSelect";
        	var outData     = "dsCardBill=select0";
        	var strArg      = "";
        	var callBackFnc = "fnCallback";

        	this.gfnTransaction(strSvcId, 		// transaction을 구분하기 위한 svc id값
        						strSvcType, 	// transaction을 요청할 구분
        						inProc,			// Procedure 정보 Dataset 이름
        						inData, 		// 입력값으로 보낼 dataset id , a=b형태로 실제이름과 입력이름을 매칭
        						outData, 		// 처리결과값으로 받을 dataset id, a=b형태로 실제이름과 입력이름을 매칭
        						strArg, 		// 입력갑스로 보낼 arguments, strFormData="20120607"
        						callBackFnc); 	// 통신방법 정의 [생략가능]
        }

        this.fnCallback = function(svcID, errorCode, errorMsg) {
        	if (svcID == "select") {
        		this.staNO_CARD_bg.set_text(this.dsCardBill.getColumn(0, "NO_CARD"));
        		this.staDT_APPROVAL_bg.set_text(this.dsCardBill.getColumn(0, "DT_APPROVAL"));
        		this.staAM_APPROVAL_bg.set_text(this.dsCardBill.getColumn(0, "AM_APPROVAL"));
        		this.staAM_SURTAX_bg.set_text(this.dsCardBill.getColumn(0, "AM_SURTAX"));
        		this.staAM_VATSUPPLY_bg.set_text(this.dsCardBill.getColumn(0, "AM_VATSUPPLY"));
        		this.staCD_VENDORCODE_bg.set_text(this.dsCardBill.getColumn(0, "CD_VENDORCODE"));
        		this.staDS_VENDOR_bg.set_text(this.dsCardBill.getColumn(0, "DS_VENDOR"));
        		this.staDS_TAXTYPE_bg.set_text(this.dsCardBill.getColumn(0, "DS_TAXTYPE"));
        		this.staCD_USETYPE_bg.set_text(this.dsCardBill.getColumn(0, "CD_USETYPE"));
        		this.staDS_HNAME_bg.set_text(this.dsCardBill.getColumn(0, "DS_HNAME"));
        	}
        }

        this.btnClose_onclick = function(obj, e) {
        	this.close(false);
        }

        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.cmmFileManager_onload,this);
            this.addEventHandler("onbeforeclose",this.cmmFileManager_onbeforeclose,this);
            this.staNO_CARD.addEventHandler("onclick",this.divData_staCD_CORP00_00_onclick,this);
            this.btnClose.addEventHandler("onclick",this.btnClose_onclick,this);
            this.staDT_APPROVAL.addEventHandler("onclick",this.divData_staCD_CORP00_00_onclick,this);
            this.staAM_APPROVAL.addEventHandler("onclick",this.divData_staCD_CORP00_00_onclick,this);
            this.staAM_SURTAX.addEventHandler("onclick",this.divData_staCD_CORP00_00_onclick,this);
            this.staAM_VATSUPPLY.addEventHandler("onclick",this.divData_staCD_CORP00_00_onclick,this);
            this.staCD_VENDORCODE.addEventHandler("onclick",this.divData_staCD_CORP00_00_onclick,this);
            this.staDS_VENDOR.addEventHandler("onclick",this.divData_staCD_CORP00_00_onclick,this);
            this.staDS_TAXTYPE.addEventHandler("onclick",this.divData_staCD_CORP00_00_onclick,this);
            this.staCD_USETYPE.addEventHandler("onclick",this.divData_staCD_CORP00_00_onclick,this);
            this.staDS_HNAME.addEventHandler("onclick",this.divData_staCD_CORP00_00_onclick,this);
        };
        this.loadIncludeScript("cmmCardBill.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
