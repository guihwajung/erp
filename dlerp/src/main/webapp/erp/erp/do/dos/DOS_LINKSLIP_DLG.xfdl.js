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
            this.set_titletext("집행관리 전표연결");
            this.getSetter("maxwidth").set("380");
            this.getSetter("maxheight").set("280");
            if (Form == this.constructor)
            {
                this._setFormPosition(360,250);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("dsList", this);
            obj._setContents("<ColumnInfo><Column id=\"CD_DEPTINVEST\" type=\"STRING\" size=\"256\"/><Column id=\"DS_DEPTINVEST\" type=\"STRING\" size=\"256\"/><Column id=\"CD_VENDOR\" type=\"STRING\" size=\"256\"/><Column id=\"DS_VENDOR\" type=\"STRING\" size=\"256\"/><Column id=\"DT_EFDTE\" type=\"STRING\" size=\"256\"/><Column id=\"NO_SLIP\" type=\"STRING\" size=\"256\"/><Column id=\"SEQ_EXEC\" type=\"BIGDECIMAL\" size=\"256\"/></ColumnInfo><Rows><Row/></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("_dsProc", this);
            obj._setContents("<ColumnInfo><Column id=\"TARGET\" type=\"STRING\" size=\"256\"/><Column id=\"SP\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"TARGET\">save</Col><Col id=\"SP\">DOSPR_EXEC_LINKSLIP</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsSearch", this);
            obj._setContents("");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Static("staTITLE","0","0","100.00%","30",null,null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_text("집행관리 전표연결");
            obj.set_cssclass("sta_TITLE_Bg");
            obj.set_textAlign("left");
            this.addChild(obj.name, obj);

            obj = new Static("sta04","114","37","226","30",null,null,null,null,null,null,this);
            obj.set_taborder("6");
            obj.set_cssclass("sta_WF_tablebg");
            obj.set_text("");
            this.addChild(obj.name, obj);

            obj = new Static("sta05","8","124","107","30",null,null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_text("전표번호");
            obj.set_cssclass("sta_WF_tablelabelE");
            this.addChild(obj.name, obj);

            obj = new Static("sta00","8","37","107","30",null,null,null,null,null,null,this);
            obj.set_taborder("3");
            obj.set_text("귀속부서");
            obj.set_cssclass("sta_WF_tablelabelE");
            this.addChild(obj.name, obj);

            obj = new Static("sta01","114","124","226","30",null,null,null,null,null,null,this);
            obj.set_taborder("7");
            obj.set_cssclass("sta_WF_tablebg");
            obj.set_text("");
            this.addChild(obj.name, obj);

            obj = new Div("cfNO_SLIP","121","129","209","20",null,null,null,null,null,null,this);
            obj.getSetter("CodeFindName").set("DOS_CFEXECSLIP");
            obj.getSetter("CDTextWidth").set("70");
            obj.set_taborder("2");
            obj.set_url("cmm::cmmCodeFind.xfdl");
            obj.set_text("");
            this.addChild(obj.name, obj);

            obj = new Div("cfCD_DEPT","121","42","209","20",null,null,null,null,null,null,this);
            obj.getSetter("CodeFindName").set("DOS_CFACNTUNIT");
            obj.getSetter("CDTextWidth").set("70");
            obj.set_taborder("4");
            obj.set_url("cmm::cmmCodeFind.xfdl");
            obj.set_text("");
            obj.set_enable("false");
            this.addChild(obj.name, obj);

            obj = new Div("divBtns","65","170","200","40",null,null,null,null,null,null,this);
            obj.set_taborder("5");
            this.addChild(obj.name, obj);

            obj = new Button("btnOK","30","10","60","27",null,null,null,null,null,null,this.divBtns.form);
            obj.set_taborder("10");
            obj.set_text("확인");
            this.divBtns.addChild(obj.name, obj);

            obj = new Button("btnCANCLE","btnOK:30","10","60","27",null,null,null,null,null,null,this.divBtns.form);
            obj.set_taborder("11");
            obj.set_text("취소");
            this.divBtns.addChild(obj.name, obj);

            obj = new Static("sta00_00","8","66","107","30",null,null,null,null,null,null,this);
            obj.set_taborder("8");
            obj.set_text("거래처");
            obj.set_cssclass("sta_WF_tablelabelE");
            this.addChild(obj.name, obj);

            obj = new Static("sta04_00","114","66","226","30",null,null,null,null,null,null,this);
            obj.set_taborder("9");
            obj.set_cssclass("sta_WF_tablebg");
            obj.set_text("");
            this.addChild(obj.name, obj);

            obj = new Div("cfCD_VENDOR","121","71","209","20",null,null,null,null,null,null,this);
            obj.getSetter("CodeFindName").set("DOS_CFVENDOR");
            obj.getSetter("CDTextWidth").set("70");
            obj.set_taborder("10");
            obj.set_url("cmm::cmmCodeFind.xfdl");
            obj.set_text("");
            obj.set_enable("false");
            this.addChild(obj.name, obj);

            obj = new Static("sta00_00_00","8","95","107","30",null,null,null,null,null,null,this);
            obj.set_taborder("11");
            obj.set_text("회계일자");
            obj.set_cssclass("sta_WF_tablelabelE");
            this.addChild(obj.name, obj);

            obj = new Static("sta04_00_00","114","95","226","30",null,null,null,null,null,null,this);
            obj.set_taborder("12");
            obj.set_cssclass("sta_WF_tablebg");
            obj.set_text("");
            this.addChild(obj.name, obj);

            obj = new Calendar("calFR_DT_EFDTE","121","101","105","20",null,null,null,null,null,null,this);
            obj.set_taborder("13");
            obj.set_dateformat("yyyy-MM-dd");
            obj.set_editformat("yyyyMMdd");
            obj.set_autoselect("true");
            obj.set_enable("false");
            this.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this
            obj = new Layout("default","",this._adjust_width,this._adjust_height,this,function(p){});
            this.addLayout(obj.name, obj);
            
            // BindItem Information
            obj = new BindItem("item0","cfNO_SLIP.form.CDTextBox","value","dsList","NO_SLIP");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item1","cfNO_SLIP.form.DSTextBox","value","dsList","NO_SLIP");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item2","cfCD_DEPT.form.CDTextBox","value","dsList","CD_DEPTINVEST");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item3","cfCD_DEPT.form.DSTextBox","value","dsList","DS_DEPTINVEST");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item4","cfCD_VENDOR.form.CDTextBox","value","dsList","CD_VENDOR");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item5","cfCD_VENDOR.form.DSTextBox","value","dsList","DS_VENDOR");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item6","calFR_DT_EFDTE","value","dsList","DT_EFDTE");
            this.addChild(obj.name, obj);
            obj.bind();
            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {
            this._addPreloadList("fdl","cmm::cmmCodeFind.xfdl");
        };
        
        // User Script
        this.registerScript("DOS_LINKSLIP_DLG.xfdl", function() {
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
        	//this.fnSetCombo();

        	var frame = this.getOwnerFrame();
        	this.dsList.setColumn(0, "CD_DEPTINVEST", frame.CD_DEPTINVEST);
        	this.dsList.setColumn(0, "DS_DEPTINVEST", frame.DS_DEPTINVEST);
        	this.dsList.setColumn(0, "CD_VENDOR", frame.CD_VENDOR);
        	this.dsList.setColumn(0, "DS_VENDOR", frame.DS_VENDOR);
        	this.dsList.setColumn(0, "DT_EFDTE", frame.DT_EFDTE);

        };

        /************************************************************************
         * 변수 선언
         ************************************************************************/
        this.fnSetVariable = function() {

        	this.cfCD_DEPT = this.cfCD_DEPT;	//귀속부서
        	this.cfCD_VENDOR = this.cfCD_VENDOR;	//거래처
        	this.cfNO_SLIP = this.cfNO_SLIP;	//전표번호
        };

        /************************************************************************
         * 이벤트 설정
         ************************************************************************/
        this.fnSetEvent = function() {

        	this.cfCD_DEPT.BeforeUserDataSetParam = "fnBeforeUserDataSetParam";
        	this.cfCD_VENDOR.BeforeUserDataSetParam = "fnBeforeUserDataSetParam";
        	this.cfNO_SLIP.BeforeUserDataSetParam = "fnBeforeUserDataSetParam";

        };

        /************************************************************************
         * 파라미터 설정
         ************************************************************************/
        this.fnSetParameter = function() {
        	this.dsSave = new Dataset();
        	this.dsSave.addColumn("SEQ_EXEC", "bigdecimal");
        	this.dsSave.addColumn("NO_SLIP", "string");
        	this.dsSave.addColumn("ID_USER", "string");

        }

        this.btnOK_onclick = function(obj,e)
        {
        	// 확인
        	if(!this.fnSaveValidate()) return;
        	this.dlgfnSave();
        	//this.getParentContext().close(true);  // fnCallback 에서 닫기처리
        };

        this.dlgfnSave = function() {

        	this.dsSave.clearData();
        	var nrow = this.dsSave.addRow();

        	this.dsSave.setColumn(nrow, "SEQ_EXEC", this.dsList.getColumn(0, "SEQ_EXEC"));
        	this.dsSave.setColumn(nrow, "NO_SLIP", this.dsList.getColumn(0, "NO_SLIP"));
        	this.dsSave.setColumn(nrow, "ID_USER", this.AuthClient.ID_USER);

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
        						callBackFnc); 	// 통신방법 정의 [생략가능]
        }

        this.btnCANCLE_onclick = function(obj,e)
        {
        	// 취소
        	this.getParentContext().close(false);
        };

        /************************************************************************
         * Validate
         ************************************************************************/
        /*
         *	저장 Validate
         */
        this.fnSaveValidate = function() {

        	if (this.gfnIsNull(this.dsList.getColumn(0, "NO_SLIP"))) {
        		this.cfNO_SLIP.form.CDTextBox.setFocus();
        		this.gfnAlert("전표번호를 입력하세요.");
        		return false;
        	}

        	return true;
        };

        /************************************************************************
         * 코드파인드 이벤트
         ************************************************************************/
        this.fnBeforeUserDataSetParam = function(id, dsUserParam, nrow) {

        	if (id == "cfNO_SLIP") {	// 전표번호
        		dsUserParam.setColumn(nrow, "CD_DEPTINVEST", this.dsList.getColumn(0, "CD_DEPTINVEST"));
        		dsUserParam.setColumn(nrow, "CD_VENDOR", this.dsList.getColumn(0, "CD_VENDOR"));
        		dsUserParam.setColumn(nrow, "DT_SLIP", this.dsList.getColumn(0, "DT_EFDTE"));
        	}

        	return true;
        };

        /************************************************************************
         * 콜백 이벤트
         ************************************************************************/
        this.fnCallback = function(svcID, errorCode, errorMsg)
        {
        	if (errorCode != 0) {
        		this.gfnAlert(errorMsg);
        		return;
        	}

        	if(svcID == "save") {
        		if (errorCode == 0) {
        			this.fnClose = function() {
        				this.getParentContext().close(true);
        			}
        			this.gfnAlert("작업이 완료되었습니다.", "fnClose");
        		} else {
        			this.gfnAlert(errorMsg);
        		}
        	}
        }

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
            this.calFR_DT_EFDTE.addEventHandler("onchanged",this.fnSearchInit,this);
            this.dsList.addEventHandler("onvaluechanged",this.dsList_onvaluechanged,this);
            this.dsSearch.addEventHandler("onvaluechanged",this.dsSearch_onvaluechanged,this);
        };
        this.loadIncludeScript("DOS_LINKSLIP_DLG.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
