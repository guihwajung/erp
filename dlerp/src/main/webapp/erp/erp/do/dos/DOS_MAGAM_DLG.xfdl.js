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
            this.getSetter("maxwidth").set("500");
            this.getSetter("maxheight").set("380");
            if (Form == this.constructor)
            {
                this._setFormPosition(500,380);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("dsList", this);
            obj._setContents("<ColumnInfo><Column id=\"CD_PROJ\" type=\"STRING\" size=\"256\"/><Column id=\"DS_PROJ\" type=\"STRING\" size=\"256\"/><Column id=\"YM_WORK\" type=\"STRING\" size=\"256\"/><Column id=\"RT_MNG\" type=\"STRING\" size=\"256\"/><Column id=\"RT_MEZA\" type=\"STRING\" size=\"256\"/><Column id=\"RT_PEZA\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"RT_PEZA\"/><Col id=\"RT_MNG\"/><Col id=\"RT_MEZA\"/><Col id=\"CD_PROJ\"/><Col id=\"DS_PROJ\"/><Col id=\"YM_WORK\"/></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("_dsProc", this);
            obj._setContents("<ColumnInfo><Column id=\"TARGET\" type=\"STRING\" size=\"256\"/><Column id=\"SP\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"TARGET\">save</Col><Col id=\"SP\">DOSPR_SAUP_MAGAM</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsSearch", this);
            obj._setContents("");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Div("divData","0","0",null,null,"0","0",null,null,null,null,this);
            obj.set_taborder("0");
            this.addChild(obj.name, obj);

            obj = new Static("staTITLE","0","0","100.00%","30",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("0");
            obj.set_text("마감정보");
            obj.set_cssclass("sta_TITLE_Bg");
            obj.set_textAlign("left");
            this.divData.addChild(obj.name, obj);

            obj = new Static("staCD_PROJ","10","45","175","30",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("1");
            obj.set_text("프로젝트");
            obj.set_textAlign("left");
            obj.set_cssclass("sta_WF_tablelabelE");
            this.divData.addChild(obj.name, obj);

            obj = new Static("staBgCD_PROJ","184","45","280","30",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("2");
            obj.set_cssclass("sta_WF_tablebg");
            obj.set_text("");
            this.divData.addChild(obj.name, obj);

            obj = new Static("staYM_WORK","10","73","175","30",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("3");
            obj.set_text("회계년월");
            obj.set_textAlign("left");
            obj.set_cssclass("sta_WF_tablelabelE");
            this.divData.addChild(obj.name, obj);

            obj = new Static("staBgYM_WORK","184","73","280","30",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("4");
            obj.set_cssclass("sta_WF_tablebg");
            obj.set_text("");
            this.divData.addChild(obj.name, obj);

            obj = new Static("staRT_MNG","10","102","175","30",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("5");
            obj.set_text("본사관리비이율(%)");
            obj.set_textAlign("left");
            obj.set_cssclass("sta_WF_tablelabelE");
            this.divData.addChild(obj.name, obj);

            obj = new Static("staBgRT_MNG","184","102","280","30",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("6");
            obj.set_cssclass("sta_WF_tablebg");
            obj.set_text("");
            this.divData.addChild(obj.name, obj);

            obj = new Static("staAM_DELAYIMPOSE","10","staAM_MISU:131","175","30",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("7");
            obj.set_text("(-)내부조달이자이율(%)");
            obj.set_textAlign("left");
            obj.set_cssclass("sta_WF_tablelabelE");
            this.divData.addChild(obj.name, obj);

            obj = new Static("staBgAM_DELAYIMPOSE","184","staBgAM_MISU:131","280","30",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("8");
            obj.set_cssclass("sta_WF_tablebg");
            obj.set_text("");
            this.divData.addChild(obj.name, obj);

            obj = new Static("staAM_MLEASE","10","160","175","30",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("9");
            obj.set_text("(+)내부조달이자이율(%)");
            obj.set_textAlign("left");
            obj.set_cssclass("sta_WF_tablelabelE");
            this.divData.addChild(obj.name, obj);

            obj = new Static("staBgAM_MLEASE","184","160","280","30",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("10");
            obj.set_cssclass("sta_WF_tablebg");
            obj.set_text("");
            this.divData.addChild(obj.name, obj);

            obj = new Div("ccfCD_PROJ","staCD_ACNTUNIT:191","50","265","20",null,null,null,null,null,null,this.divData.form);
            obj.getSetter("CodeFindName").set("DOS_CFPROJ");
            obj.getSetter("CDTextWidth").set("70");
            obj.set_taborder("11");
            obj.set_url("cmm::cmmCodeFind.xfdl");
            obj.set_enable("false");
            this.divData.addChild(obj.name, obj);

            obj = new Div("ctclYM_WORK","staYM_IMPOSE:191","78","99","20",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("12");
            obj.set_url("cmm::cmmCalMM.xfdl");
            obj.set_enable("false");
            this.divData.addChild(obj.name, obj);

            obj = new MaskEdit("ctxtRT_MNG","190","107","110","20",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("13");
            obj.set_value("");
            obj.set_format("#,##0.####");
            this.divData.addChild(obj.name, obj);

            obj = new MaskEdit("ctxtRT_MEZA","190","136","110","20",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("14");
            obj.set_value("");
            obj.set_format("#,##0.####");
            this.divData.addChild(obj.name, obj);

            obj = new MaskEdit("ctxtRT_PEZA","190","165","110","20",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("15");
            obj.set_value("");
            obj.set_format("#,##0.####");
            this.divData.addChild(obj.name, obj);

            obj = new Button("btnOK","30.00%","237","60","27",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("16");
            obj.set_text("확인");
            this.divData.addChild(obj.name, obj);

            obj = new Button("btnCANCLE","btnOK:30","237","60","27",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("17");
            obj.set_text("취소");
            this.divData.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this
            obj = new Layout("default","",this._adjust_width,this._adjust_height,this,function(p){});
            this.addLayout(obj.name, obj);
            
            // BindItem Information
            obj = new BindItem("item0","divData.form.ccfCD_PROJ.form.CDTextBox","value","dsList","CD_PROJ");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item1","divData.form.ccfCD_PROJ.form.DSTextBox","value","dsList","DS_PROJ");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item2","divData.form.ctclYM_WORK.form.TextBox","value","dsList","YM_WORK");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item3","divData.form.ctxtRT_MNG","value","dsList","RT_MNG");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item4","divData.form.ctxtRT_MEZA","value","dsList","RT_MEZA");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item5","divData.form.ctxtRT_PEZA","value","dsList","RT_PEZA");
            this.addChild(obj.name, obj);
            obj.bind();
            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {
            this._addPreloadList("fdl","cmm::cmmCodeFind.xfdl");
            this._addPreloadList("fdl","cmm::cmmCalMM.xfdl");
        };
        
        // User Script
        this.registerScript("DOS_MAGAM_DLG.xfdl", function() {
        this.objApp = this.gfnGetApplication();
        this._onload = true; // 최초 화면로드 판단.

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
        	this.dsList.setColumn(0, "DS_PROJ", this.getOwnerFrame().DS_PROJ);
        	this.dsList.setColumn(0, "YM_WORK", this.getOwnerFrame().YM_WORK);
        	this.dsList.setColumn(0, "RT_MNG", this.getOwnerFrame().RT_MNG);
        	this.dsList.setColumn(0, "RT_MEZA", this.getOwnerFrame().RT_MEZA);
        	this.dsList.setColumn(0, "RT_PEZA", this.getOwnerFrame().RT_PEZA);

        };


        /************************************************************************
         * 변수 선언
         ************************************************************************/
        this.fnSetVariable = function() {
        	this.ccfCD_PROJ = this.divData.form.ccfCD_PROJ;
        };

        /************************************************************************
         * 파라미터 설정
         ************************************************************************/
        this.fnSetParameter = function() {
        	this.dsSave = new Dataset();
        	this.dsSave.addColumn("CD_PROJ", "string");
        	this.dsSave.addColumn("YM_WORK", "string");
        	this.dsSave.addColumn("RT_MNG", "bigdecimal");
        	this.dsSave.addColumn("RT_MEZA", "bigdecimal");
        	this.dsSave.addColumn("RT_PEZA", "bigdecimal");
        	this.dsSave.addColumn("ID_USER", "string");

        }

        /************************************************************************
         * 이벤트 설정
         ************************************************************************/
        this.fnSetEvent = function() {
        	this.ccfCD_PROJ.BeforeUserDataSetParam = "fnBeforeUserDataSetParam";
        };
        /************************************************************************
         * Validate
         ************************************************************************/

        /************************************************************************
         * 코드파인드 이벤트
         ************************************************************************/
        this.fnBeforeUserDataSetParam = function(id, dsUserParam, nrow) {
        	if (id == "ccfCD_PROJ") {
        		dsUserParam.setColumn(nrow, "CD_DEPT", this.AuthClient.CD_DEPT);
        		dsUserParam.setColumn(nrow, "ID_USER", this.AuthClient.ID_USER);
        		dsUserParam.setColumn(nrow, "CD_CORP", this.AuthClient.CD_CORP);
        		dsUserParam.setColumn(nrow, "GR_SEARCH", this.FormInfo.GR_SEARCH);
        	}
        	return true;
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
        	this.dsSave.setColumn(nrow, "YM_WORK", this.dsList.getColumn(0, "YM_WORK"));
        	this.dsSave.setColumn(nrow, "RT_MNG", this.dsList.getColumn(0, "RT_MNG"));
        	this.dsSave.setColumn(nrow, "RT_MEZA", this.dsList.getColumn(0, "RT_MEZA"));
        	this.dsSave.setColumn(nrow, "RT_PEZA", this.dsList.getColumn(0, "RT_PEZA"));
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
            this.divData.form.staCD_PROJ.addEventHandler("onclick",this.divData_staCD_ACNTUNIT_onclick,this);
            this.divData.form.btnOK.addEventHandler("onclick",this.btnOK_onclick,this);
            this.divData.form.btnCANCLE.addEventHandler("onclick",this.btnCANCLE_onclick,this);
            this.dsList.addEventHandler("onvaluechanged",this.dsList_onvaluechanged,this);
        };
        this.loadIncludeScript("DOS_MAGAM_DLG.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
