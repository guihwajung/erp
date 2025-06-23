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
            this.set_titletext("");
            this.getSetter("maxwidth").set("440");
            this.getSetter("maxheight").set("290");
            if (Form == this.constructor)
            {
                this._setFormPosition(420,270);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("dsList", this);
            obj._setContents("<ColumnInfo><Column id=\"CD_PROJ\" type=\"STRING\" size=\"256\"/><Column id=\"YM_MAGAM\" type=\"STRING\" size=\"256\"/><Column id=\"YY_START\" type=\"STRING\" size=\"256\"/><Column id=\"CT_YEAR\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"YM_MAGAM\">DOSPR_CASH_CREATE</Col><Col id=\"CD_PROJ\">save</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("_dsProc", this);
            obj._setContents("<ColumnInfo><Column id=\"TARGET\" type=\"STRING\" size=\"256\"/><Column id=\"SP\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"TARGET\">save</Col><Col id=\"SP\">DOSPR_CASH_CREATE</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsSearch", this);
            obj._setContents("");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Static("staBgCD_PROJ","119","102","280","30",null,null,null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_cssclass("sta_WF_tablebg");
            obj.set_text("");
            this.addChild(obj.name, obj);

            obj = new Div("divData","0","0",null,null,"0","0",null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_text("");
            this.addChild(obj.name, obj);

            obj = new Static("staTITLE","0","0","100.00%","30",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("0");
            obj.set_text("현금흐름 자료생성");
            obj.set_cssclass("sta_TITLE_Bg");
            obj.set_textAlign("left");
            this.divData.addChild(obj.name, obj);

            obj = new Button("btnOK","28.33%","187","60","27",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("1");
            obj.set_text("확인");
            this.divData.addChild(obj.name, obj);

            obj = new Button("btnCANCLE","btnOK:31","187","60","27",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("2");
            obj.set_text("취소");
            this.divData.addChild(obj.name, obj);

            obj = new MaskEdit("msk00","126","107","120","20",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("3");
            this.divData.addChild(obj.name, obj);

            obj = new Static("staCD_PROJ","10","102","110","30",null,null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_text("년차수");
            obj.set_cssclass("sta_WF_tablelabel");
            obj.set_textAlign("left");
            obj.set_textDecoration("underline");
            this.addChild(obj.name, obj);

            obj = new Static("staYM_WORK","10","73","110","30",null,null,null,null,null,null,this);
            obj.set_taborder("3");
            obj.set_text("시작년도");
            obj.set_cssclass("sta_WF_tablelabel");
            obj.set_textAlign("left");
            obj.set_textDecoration("underline");
            this.addChild(obj.name, obj);

            obj = new Static("staBgYM_WORK","119","73","280","30",null,null,null,null,null,null,this);
            obj.set_taborder("4");
            obj.set_cssclass("sta_WF_tablebg");
            obj.set_text("");
            this.addChild(obj.name, obj);

            obj = new Div("ctclYY_START","126","78","119","20",null,null,null,null,null,null,this);
            obj.set_taborder("5");
            obj.set_url("cmm::cmmCalYY.xfdl");
            obj.set_enable("true");
            this.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this
            obj = new Layout("default","",this._adjust_width,this._adjust_height,this,function(p){});
            this.addLayout(obj.name, obj);
            
            // BindItem Information
            obj = new BindItem("item0","ctclYY_START.form.TextBox","value","dsList","YY_START");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item1","divData.form.msk00","value","dsList","CT_YEAR");
            this.addChild(obj.name, obj);
            obj.bind();
            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {
            this._addPreloadList("fdl","cmm::cmmCalYY.xfdl");
        };
        
        // User Script
        this.registerScript("DOS_CASH_DLG.xfdl", function() {
        this.objApp = this.gfnGetApplication();
        //this._onload = true; // 최초 화면로드 판단.

        this.form_onload = function(obj,e)
        {
        	// -- 필수 -------------------//
        	this.gfnFormOnLoad(this);
        	this.gfnFormInfo(this);
        	// ---------------------------//

        	this.fnSetVariable();
        	this.fnSetEvent();
        	this.fnSetParameter();

        	this.dsList.setColumn(0, "CD_PROJ", this.getOwnerFrame().CD_PROJ);
        	this.dsList.setColumn(0, "YM_MAGAM", this.getOwnerFrame().YM_MAGAM);

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
        	this.dsSave = new Dataset();
        	this.dsSave.addColumn("CD_PROJ", "string");
        	this.dsSave.addColumn("YM_MAGAM", "string");
        	this.dsSave.addColumn("YY_START", "string");
        	this.dsSave.addColumn("CT_YEAR", "int");
        	this.dsSave.addColumn("ID_USER", "string");
        }

        /************************************************************************
         * 이벤트 설정
         ************************************************************************/
        this.fnSetEvent = function() {

        };
        /************************************************************************
         * Validate
         ************************************************************************/

        /************************************************************************
         * 코드파인드 이벤트
         ************************************************************************/
        this.fnBeforeUserDataSetParam = function(id, dsUserParam, nrow) {

        }

        /************************************************************************
         * 콜백 이벤트
         ************************************************************************/
        this.fnCallback = function(svcID, errorCode, errorMsg)
        {
        	if (errorCode != 0) {
        		this.gfnAlert(errorMsg);
        		return;
        	}
        	else if(svcID == "save"){
        		if (errorCode == 0) {
        			this.getParentContext().close(true);

        		} else {
        			this.gfnAlert(errorMsg);
        		}
        	}
        }


        /************************************************************************
         * 기타 이벤트
         ************************************************************************/

        this.btnOK_onclick = function(obj,e)
        {
        	this.fnSave();
        };

        this.btnCANCLE_onclick = function(obj,e)
        {
        	// 취소
        	this.getParentContext().close(false);
        };

        this.fnSave = function()
        {
        	this.dsSave.clearData();
        	var nrow = this.dsSave.addRow();
        	this.dsSave.setColumn(nrow, "CD_PROJ", this.dsList.getColumn(0, "CD_PROJ"));
        	this.dsSave.setColumn(nrow, "YM_MAGAM", this.dsList.getColumn(0, "YM_MAGAM"));
        	this.dsSave.setColumn(nrow, "YY_START", this.dsList.getColumn(0, "YY_START"));
        	this.dsSave.setColumn(nrow, "CT_YEAR", this.dsList.getColumn(0, "CT_YEAR"));
        	this.dsSave.setColumn(nrow, "ID_USER", this.AuthClient.ID_USER);

        	var strSvcId    = "save";
        	var strSvcType  = "save";
        	var inProc		= "_dsProc";
        	var inData      = "save=dsSave";
        	var outData     = "";
        	var strArg      = "";
        	var callBackFnc = "fnCallback";

        	this.gfnTransaction( strSvcId , 	// transaction을 구분하기 위한 svc id값
        						strSvcType , 	// trabsaction을 요청할 구분
        						inProc,			// Procedure 정보 Dataset 이름
        						inData , 		// 입력값으로 보낼 dataset id , a=b형태로 실제이름과 입력이름을 매칭
        						outData , 		// 처리결과값으로 받을 dataset id, a=b형태로 실제이름과 입력이름을 매칭
        						strArg, 			// 입력갑스로 보낼 arguments, strFormData="20120607"
        						callBackFnc); // 통신방법 정의 [생략가능]
        }

        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.form_onload,this);
            this.divData.form.btnOK.addEventHandler("onclick",this.btnOK_onclick,this);
            this.divData.form.btnCANCLE.addEventHandler("onclick",this.btnCANCLE_onclick,this);
            this.staCD_PROJ.addEventHandler("onclick",this.divData_staCD_ACNTUNIT_onclick,this);
            this.dsList.addEventHandler("onvaluechanged",this.dsList_onvaluechanged,this);
        };
        this.loadIncludeScript("DOS_CASH_DLG.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
