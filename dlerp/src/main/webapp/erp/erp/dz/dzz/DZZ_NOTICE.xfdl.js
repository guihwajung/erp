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
            this.set_titletext("공지사항");
            if (Form == this.constructor)
            {
                this._setFormPosition(560,310);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("dsList", this);
            obj._setContents("");
            this.addChild(obj.name, obj);


            obj = new Dataset("_dsProc", this);
            obj._setContents("<ColumnInfo><Column id=\"TARGET\" type=\"STRING\" size=\"256\"/><Column id=\"SP\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"TARGET\">select</Col><Col id=\"SP\">DZZPR_DOTNET_GONGJI_SELECT</Col></Row></Rows>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Div("divData","20","20","521","290",null,null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_text("div00");
            this.addChild(obj.name, obj);

            obj = new Static("staNotice","0","0","120","30",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("8");
            obj.set_text("공지사항");
            obj.set_cssclass("sta_TITLE_Bg");
            this.divData.addChild(obj.name, obj);

            obj = new Static("staTITLE","0","staNotice:0","105","34",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("0");
            obj.set_text("제목");
            obj.set_cssclass("sta_WF_tablelabel");
            this.divData.addChild(obj.name, obj);

            obj = new Static("staTITLE_bg","staTITLE:-1","staTITLE:-34","417","34",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("2");
            obj.set_cssclass("sta_WF_tablebg");
            this.divData.addChild(obj.name, obj);

            obj = new Edit("edtTITLE","staTITLE:5","staTITLE:-29","405","24",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("7");
            obj.set_readonly("true");
            obj.set_enable("true");
            this.divData.addChild(obj.name, obj);

            obj = new Static("staREG_DATE","0","staTITLE:-1","105","34",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("6");
            obj.set_cssclass("sta_WF_tablelabel");
            obj.set_text("등록일시");
            this.divData.addChild(obj.name, obj);

            obj = new Static("staREG_DATE_bg","staREG_DATE:-1","staREG_DATE:-34","417","34",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("5");
            obj.set_cssclass("sta_WF_tablebg");
            this.divData.addChild(obj.name, obj);

            obj = new Edit("edtREG_DATE","staREG_DATE:5","staREG_DATE:-29","405","24",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("9");
            obj.set_readonly("true");
            obj.set_enable("true");
            this.divData.addChild(obj.name, obj);

            obj = new Static("staCONTENT","0","staREG_DATE:-1","105","150",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("10");
            obj.set_cssclass("sta_WF_tablelabel");
            obj.set_text("내용");
            this.divData.addChild(obj.name, obj);

            obj = new Static("staCONTENT_bg","staCONTENT:-1","staCONTENT:-150","417","150",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("11");
            obj.set_cssclass("sta_WF_tablebg");
            this.divData.addChild(obj.name, obj);

            obj = new TextArea("edtCONTENT","staCONTENT:5","staCONTENT:-145","405","140",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("1");
            obj.set_readonly("true");
            obj.set_enable("true");
            obj.set_wordWrap("char");
            obj.set_autoselect("true");
            this.divData.addChild(obj.name, obj);

            obj = new Button("btnFile",null,null,"58","26","271","10",null,null,null,null,this.divData.form);
            obj.set_taborder("4");
            obj.set_text("첨부파일");
            this.divData.addChild(obj.name, obj);

            obj = new Button("btnClose",null,null,"58","26","201","10",null,null,null,null,this.divData.form);
            obj.set_taborder("5");
            obj.set_text("닫기");
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
        this.registerScript("DZZ_NOTICE.xfdl", function() {
        this.objApp = this.gfnGetApplication();

        this.form_onload = function(obj,e) {
        	// -- 필수 -------------------//
        	this.gfnFormOnLoad(this);
        	//this.gfnFormInfo(this);
        	// ---------------------------//

        	this.fnSelect();
        }

        this.fnSelect = function() {
        	this.dsSelect = new Dataset();
        	this.dsSelect.addColumn("SN_SEQ", "string");
        	var nrow = this.dsSelect.addRow();
        	this.dsSelect.setColumn(0, "SN_SEQ", this.getOwnerFrame().SN_SEQ);

        	var strSvcId    = "select";
        	var strSvcType  = "select";
        	var inProc		= "_dsProc";
        	var inData      = "select=dsSelect";
        	var outData     = "dsList=select0";
        	var strArg      = "";
        	var callBackFnc = "fnCallback";

        	this.gfnTransaction(strSvcId,		// transaction을 구분하기 위한 svc id값
        						strSvcType, 	// transaction을 요청할 구분
        						inProc,			// Procedure 정보 Dataset 이름
        						inData, 		// 입력값으로 보낼 dataset id, a=b형태로 실제이름과 입력이름을 매칭
        						outData, 		// 처리결과값으로 받을 dataset id, a=b형태로 실제이름과 입력이름을 매칭
        						strArg, 		// 입력갑스로 보낼 arguments, strFormData="20120607"
        						callBackFnc);	// 통신방법 정의 [생략가능]
        }

        this.fnCallback = function(svcID, errorCode, errorMsg, strArg) {
        	if (svcID == "select") {
        		this.divData.form.edtTITLE.set_value(this.dsList.getColumn(0, "NM_TITLE"));
        		this.divData.form.edtREG_DATE.set_value(this.dsList.getColumn(0, "DT_UPDATE"));
        		this.divData.form.edtCONTENT.set_value(this.dsList.getColumn(0, "RM_CONTENT"));

        		this.divData.form.edtCONTENT.scrollTo(0, 0);
        	}
        }

        this.divData_btnClose_onclick = function(obj, e) {
        	this.close();
        }

        this.divData_btnFile_onclick = function(obj, e) {
        	var fileManager = {};

            fileManager.CD_GUBUN = "DZ01";
        	fileManager.CD_DIR = [this.dsList.getColumn(0, "SN_SEQ")];
        	fileManager.IS_READONLY = true;
            this.gfnFileManager(fileManager, "fnFileCallback");
        }

        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.form_onload,this);
            this.divData.form.staREG_DATE.addEventHandler("onclick",this.divData_staREG_DATE_onclick,this);
            this.divData.form.edtCONTENT.addEventHandler("onchanged",this.divData_edtCONTENT_onchanged,this);
            this.divData.form.btnFile.addEventHandler("onclick",this.divData_btnFile_onclick,this);
            this.divData.form.btnClose.addEventHandler("onclick",this.divData_btnClose_onclick,this);
        };
        this.loadIncludeScript("DZZ_NOTICE.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
