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
            this.set_titletext("하자내용");
            this.getSetter("maxwidth").set("450");
            this.getSetter("maxheight").set("360");
            if (Form == this.constructor)
            {
                this._setFormPosition(450,270);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("dsList", this);
            obj._setContents("<ColumnInfo><Column id=\"CD_SITE\" type=\"STRING\" size=\"256\"/><Column id=\"CD_JOB\" type=\"STRING\" size=\"256\"/><Column id=\"RM_NY\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row/></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("_dsProc", this);
            obj._setContents("<ColumnInfo><Column id=\"TARGET\" type=\"STRING\" size=\"256\"/><Column id=\"SP\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"TARGET\">update</Col><Col id=\"SP\">DBSPR_RMNY_UPDATE</Col></Row></Rows>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Div("divData","0","0",null,null,"0","0",null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_cssclass("div_DATA_Bg");
            obj.set_text("");
            this.addChild(obj.name, obj);

            obj = new Static("staTITLE","0","20","100.00%","30",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("1");
            obj.set_text("하자내용");
            obj.set_cssclass("sta_TITLE_Bg");
            obj.set_textAlign("left");
            this.divData.addChild(obj.name, obj);

            obj = new TextArea("txtMsg","5","staTITLE:10",null,"190","5",null,null,null,null,null,this.divData.form);
            obj.set_taborder("0");
            obj.set_wordWrap("char");
            obj.set_visible("true");
            obj.set_value("");
            obj.set_enable("false");
            this.divData.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this
            obj = new Layout("default","",this._adjust_width,this._adjust_height,this,function(p){});
            this.addLayout(obj.name, obj);
            
            // BindItem Information
            obj = new BindItem("item0","divData.form.txtMsg","value","dsList","RM_NY");
            this.addChild(obj.name, obj);
            obj.bind();
            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script
        this.registerScript("DBS_RMNY_POPUP_DLG.xfdl", function() {
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

        	this.dsList.setColumn(0, "CD_SITE", this.getOwnerFrame().CD_SITE);
        	this.dsList.setColumn(0, "CD_JOB", this.getOwnerFrame().CD_JOB);
        	this.dsList.setColumn(0, "RM_NY", this.getOwnerFrame().RM_NY);

        };

        /************************************************************************
         * 변수 선언
         ************************************************************************/
        this.fnSetVariable = function() {

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
        	this.dsUpdate = new Dataset();
        	this.dsUpdate.addColumn("CD_SITE", "string");
        	this.dsUpdate.addColumn("CD_JOB", "string");
        	this.dsUpdate.addColumn("RM_NY", "string");
        }

        /************************************************************************
         * Validate
         ************************************************************************/
        this.fnSelectValidation = function() {

        }

        /************************************************************************
         * 코드파인드 이벤트
         ************************************************************************/

        /************************************************************************
         * 콜백 이벤트
         ************************************************************************/
        // this.fnCallback = function(svcID, errorCode, errorMsg) {
        // 	if(svcID == "save"){
        // 		if (errorCode == 0) {
        // 			this.fnCallback_callback = function()
        // 			{
        // 				this.getParentContext().close(true);
        // 			}
        // 			this.gfnAlert("변경되었습니다.", "fnCallback_callback");
        // 		}
        // 		else {
        // 			this.gfnAlert(errorMsg);
        // 		}
        //  	}
        // }

        /************************************************************************
         * 기타 이벤트
         ************************************************************************/
        // 확인버튼 클릭.
        // this.btnOK_onclick = function(obj:nexacro.Button,e:nexacro.ClickEventInfo)
        // {
        // 	if(this.gfnIsNull(this.dsList.getColumn(0, "RM_NY")))
        // 	{
        // 		this.gfnAlert("하자내용을 입력하세요.");
        // 		return;
        // 	}
        //
        // 	this.dsUpdate.clearData();
        //
        // 	var nrow = this.dsUpdate.addRow();
        // 	this.dsUpdate.setColumn(nrow, "CD_SITE", this.dsList.getColumn(0, "CD_SITE"));
        // 	this.dsUpdate.setColumn(nrow, "CD_JOB", this.dsList.getColumn(0, "CD_JOB"));
        // 	this.dsUpdate.setColumn(nrow, "RM_NY", this.dsList.getColumn(0, "RM_NY"));
        //
        // 	if (this.dsUpdate.rowcount == 0) return;
        //
        // 	var strSvcId    = "save";
        // 	var strSvcType  = "save";
        // 	var inProc		= "_dsProc";
        // 	var inData      = "update=dsUpdate";
        // 	var outData     = "";
        // 	var strArg      = "";
        // 	var callBackFnc = "fnCallback";
        //
        // 	this.gfnTransaction( strSvcId , 	// transaction을 구분하기 위한 svc id값
        // 						strSvcType , 	// transaction을 요청할 구분
        // 						inProc,			// Procedure 정보 Dataset 이름
        // 						inData , 		// 입력값으로 보낼 dataset id , a=b형태로 실제이름과 입력이름을 매칭
        // 						outData , 		// 처리결과값으로 받을 dataset id, a=b형태로 실제이름과 입력이름을 매칭
        // 						strArg, 		// 입력값으로 보낼 arguments, strFormData="20120607"
        // 						callBackFnc); // 통신방법 정의 [생략가능]
        // };

        // 취소버튼 클릭.
        // this.btnCANCLE_onclick = function(obj:nexacro.Button,e:nexacro.ClickEventInfo)
        // {
        // 	this.getParentContext().close(false);
        // };

        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.form_onload,this);
            this.dsList.addEventHandler("onvaluechanged",this.dsList_onvaluechanged,this);
        };
        this.loadIncludeScript("DBS_RMNY_POPUP_DLG.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
