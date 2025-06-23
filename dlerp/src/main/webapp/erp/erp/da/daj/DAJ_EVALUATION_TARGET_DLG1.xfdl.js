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
            this.set_titletext("평가대상자 생성");
            this.getSetter("maxwidth").set("360");
            this.getSetter("maxheight").set("310");
            if (Form == this.constructor)
            {
                this._setFormPosition(326,260);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("dsList", this);
            obj._setContents("<ColumnInfo><Column id=\"DT_EVALUATION\" type=\"STRING\" size=\"256\"/><Column id=\"CD_CORP\" type=\"STRING\" size=\"256\"/><Column id=\"DS_CORP\" type=\"STRING\" size=\"256\"/><Column id=\"TY_EVALUATION\" type=\"STRING\" size=\"256\"/><Column id=\"YY_EVALUATION\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row/></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("_dsProc", this);
            obj._setContents("<ColumnInfo><Column id=\"TARGET\" type=\"STRING\" size=\"256\"/><Column id=\"SP\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"TARGET\">save1</Col><Col id=\"SP\">DAJPR_EVALUATION_TARGET_CREATE</Col></Row><Row><Col id=\"SP\">DAJPR_UPTURN_CREATE</Col><Col id=\"TARGET\">save2</Col></Row><Row><Col id=\"SP\">DAJPR_INTERACTION_CREATE</Col><Col id=\"TARGET\">save3</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsSearch", this);
            obj._setContents("<ColumnInfo><Column id=\"DT_GROUP_GION\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"DT_GROUP_GION\"/></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsTY_EVALUATION", this);
            obj._setContents("<ColumnInfo><Column id=\"CODE\" type=\"STRING\" size=\"256\"/><Column id=\"VALUE\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"CODE\">01</Col><Col id=\"VALUE\">상반기</Col></Row><Row><Col id=\"CODE\">02</Col><Col id=\"VALUE\">하반기</Col></Row></Rows>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Static("staTITLE","0","10","100.00%","30",null,null,null,null,null,null,this);
            obj.set_taborder("7");
            obj.set_text("대상자 생성");
            obj.set_cssclass("sta_TITLE_Bg");
            obj.set_textAlign("left");
            this.addChild(obj.name, obj);

            obj = new Static("staCD_CORP","0","57","87","30",null,null,null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_text("법인");
            obj.set_cssclass("sta_WF_tablelabelE");
            this.addChild(obj.name, obj);

            obj = new Static("stabgCD_CORP","86","57","240","30",null,null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_cssclass("sta_WF_tablebg");
            obj.set_text("");
            this.addChild(obj.name, obj);

            obj = new Div("ccfCD_CORP","92","61","227","20",null,null,null,null,null,null,this);
            obj.getSetter("CodeFindName").set("DAX_CFCORP");
            obj.getSetter("CDTextWidth").set("40");
            obj.set_taborder("5");
            obj.set_url("cmm::cmmCodeFind.xfdl");
            obj.set_text("");
            this.addChild(obj.name, obj);

            obj = new Static("staYY_EVALUATION","0","86","87","30",null,null,null,null,null,null,this);
            obj.set_taborder("12");
            obj.set_text("년도");
            obj.set_cssclass("sta_WF_tablelabelE");
            this.addChild(obj.name, obj);

            obj = new Static("stabgYY_EVALUATION","86","86","240","30",null,null,null,null,null,null,this);
            obj.set_taborder("3");
            obj.set_cssclass("sta_WF_tablebg");
            obj.set_text("");
            this.addChild(obj.name, obj);

            obj = new Div("ccfYY_EVALUATION","ccfCD_CORP:-227","91","90","20",null,null,null,null,null,null,this);
            obj.getSetter("CDTextWidth").set("70");
            obj.set_taborder("4");
            obj.set_url("cmm::cmmCalYY.xfdl");
            obj.set_text("");
            obj.getSetter("CodeFindName").set("DAX_CFCORP");
            this.addChild(obj.name, obj);

            obj = new Static("staTY_EVALUATION","0","115","87","30",null,null,null,null,null,null,this);
            obj.set_taborder("10");
            obj.set_text("구분");
            obj.set_cssclass("sta_WF_tablelabelE");
            this.addChild(obj.name, obj);

            obj = new Static("stabgTY_EVALUATION","86","115","240","30",null,null,null,null,null,null,this);
            obj.set_taborder("10");
            obj.set_cssclass("sta_WF_tablebg");
            obj.set_text("");
            this.addChild(obj.name, obj);

            obj = new Combo("cboTY_EVALUATION","92","120","80","20",null,null,null,null,null,null,this);
            obj.set_taborder("3");
            obj.set_innerdataset("dsTY_EVALUATION");
            obj.set_datacolumn("VALUE");
            obj.set_codecolumn("CODE");
            obj.set_text("전체");
            obj.set_value("%");
            obj.set_index("0");
            this.addChild(obj.name, obj);

            obj = new Div("divBtns","37","190","200","30",null,null,null,null,null,null,this);
            obj.set_taborder("6");
            this.addChild(obj.name, obj);

            obj = new Button("btnOK","50","0","60","27",null,null,null,null,null,null,this.divBtns.form);
            obj.set_taborder("0");
            obj.set_text("확인");
            this.divBtns.addChild(obj.name, obj);

            obj = new Button("btnCANCLE","btnOK:30","0","60","27",null,null,null,null,null,null,this.divBtns.form);
            obj.set_taborder("15");
            obj.set_text("취소");
            this.divBtns.addChild(obj.name, obj);

            obj = new Static("staDT_EVALUATION","0","144","87","30",null,null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_text("기준일자");
            obj.set_cssclass("sta_WF_tablelabelE");
            this.addChild(obj.name, obj);

            obj = new Static("stabgDT_EVALUATION","86","144","240","30",null,null,null,null,null,null,this);
            obj.set_taborder("13");
            obj.set_cssclass("sta_WF_tablebg");
            obj.set_text("");
            this.addChild(obj.name, obj);

            obj = new Calendar("ctclDT_EVALUATION","92","149","105","20",null,null,null,null,null,null,this);
            obj.set_taborder("4");
            obj.set_dateformat("yyyy-MM-dd");
            obj.set_editformat("yyyyMMdd");
            obj.set_autoselect("true");
            this.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this
            obj = new Layout("default","",this._adjust_width,this._adjust_height,this,function(p){});
            this.addLayout(obj.name, obj);
            
            // BindItem Information
            obj = new BindItem("item0","ccfCD_CORP.form.CDTextBox","value","dsList","CD_CORP");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item1","ccfCD_CORP.form.DSTextBox","value","dsList","DS_CORP");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item3","cboTY_EVALUATION","value","dsList","TY_EVALUATION");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item4","ctclDT_EVALUATION","value","dsList","DT_EVALUATION");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item2","ccfYY_EVALUATION.form.TextBox","value","dsList","YY_EVALUATION");
            this.addChild(obj.name, obj);
            obj.bind();
            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {
            this._addPreloadList("fdl","cmm::cmmCodeFind.xfdl");
            this._addPreloadList("fdl","cmm::cmmCalYY.xfdl");
        };
        
        // User Script
        this.registerScript("DAJ_EVALUATION_TARGET_DLG1.xfdl", function() {
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
        	/*	ID_FORM 호출화면
        		DAJ_EVALUATION_TARGET (평가대상자설정)
        		DAJ_UPTURN_MASTER (상향평가 관리)
        		DAJ_INTERACTION_MASTER (상호평가 관리)
        	*/

        	// 메인창 파라미터 받기
        	this.dsList.setColumn(0, "CD_CORP", this.getOwnerFrame().CD_CORP);
        	this.dsList.setColumn(0, "DS_CORP", this.getOwnerFrame().DS_CORP);
        	this.dsList.setColumn(0, "YY_EVALUATION", this.getOwnerFrame().YY_EVALUATION);
        	this.dsList.setColumn(0, "TY_EVALUATION", this.getOwnerFrame().TY_EVALUATION);
        	this.dsList.setColumn(0, "DT_EVALUATION", this.gfnGetDate());
        };

        /************************************************************************
         * 변수 선언
         ************************************************************************/
        this.fnSetVariable = function() {
        	this.ctclDT_EVALUATION = this.ctclDT_EVALUATION; //기준일자
        	this.ccfCD_CORP = this.ccfCD_CORP; //법인코드
        	//this.dxGrid = this.divData.form.objGrid;
        };

        /************************************************************************
         * 파라미터 설정
         ************************************************************************/
        this.fnSetParameter = function() {
        	this.dsCreate = new Dataset();
        	this.dsCreate.addColumn("CD_CORP", "string");
        	this.dsCreate.addColumn("YY_EVALUATION", "string");
        	this.dsCreate.addColumn("TY_EVALUATION", "string");
        	this.dsCreate.addColumn("DT_EVALUATION", "string");
        	this.dsCreate.addColumn("GR_SEARCH", "string");
        	this.dsCreate.addColumn("TY_AUTH", "string");
        	this.dsCreate.addColumn("GR_DEPT", "string");
        	this.dsCreate.addColumn("ID_USER", "string");
        }

        /************************************************************************
         * 이벤트 설정
         ************************************************************************/
        this.fnSetEvent = function() {
         // 코드파인더
        	//법인
        	this.ccfCD_CORP.CodeFindName = "DAX_CFCORP_CODEFIND";
        	this.ccfCD_CORP.BeforeUserDataSetParam = "fnBeforeUserDataSetParam";
        };

        this.btnOK_onclick = function(obj,e)
        {
        	// 확인
        	this.gfnConfirm("기존 데이터는 삭제됩니다.\n대상자를 생성하시겠습니까?", "fnFormButton2ConfCallback");
        };

        this.fnFormButton2ConfCallback = function(strId, val) {
        	if(val == false) return;

        	this.dlgfnSave();
        }

        this.dlgfnSave = function() {

        	if(!this.fnDataValidate()) return;

        	this.dsCreate.clearData();
        	var nrow = this.dsCreate.addRow();

        	this.dsCreate.setColumn(nrow, "CD_CORP", this.dsList.getColumn(0, "CD_CORP"));
        	this.dsCreate.setColumn(nrow, "YY_EVALUATION", this.dsList.getColumn(0, "YY_EVALUATION"));
        	this.dsCreate.setColumn(nrow, "TY_EVALUATION", this.dsList.getColumn(0, "TY_EVALUATION"));
        	this.dsCreate.setColumn(nrow, "DT_EVALUATION", this.dsList.getColumn(0, "DT_EVALUATION"));
        	this.dsCreate.setColumn(nrow, "GR_SEARCH", this.FormInfo.GR_SEARCH);
        	this.dsCreate.setColumn(nrow, "TY_AUTH", this.FormInfo.TY_AUTH);
        	this.dsCreate.setColumn(nrow, "GR_DEPT", this.AuthClient.CD_DEPT);
        	this.dsCreate.setColumn(nrow, "ID_USER", this.AuthClient.ID_USER);


        	/*	ID_FORM 호출화면
        		save1 DAJ_EVALUATION_TARGET (평가대상자설정) - DAJPR_EVALUATION_TARGET_CREATE
        		save2 DAJ_UPTURN_MASTER (상향평가 관리) - DAJPR_UPTURN_CREATE
        		save3 DAJ_INTERACTION_MASTER (상호평가 관리) - DAJPR_INTERACTION_CREATE
        	*/
        	var sIdForm = this.getOwnerFrame().ID_FORM;
        	var sSP = (sIdForm == "DAJ_EVALUATION_TARGET")? "save1" : (sIdForm == "DAJ_UPTURN_MASTER")? "save2" : "save3";

        	var strSvcId    = "save";
        	var strSvcType  = "save";
        	var inProc		= "_dsProc";
        	//var inData      = "save=dsCreate";
        	var inData      = sSP+"=dsCreate";
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

        }

        this.btnCANCLE_onclick = function(obj,e)
        {
        	// 취소
        	this.getParentContext().close(false);
        };

        this.fnDataValidate = function(){

        	var sMsg = " 필수입력값입니다.\n";
        	var strRowMsg = "";

        	if(this.gfnIsNull(this.ccfCD_CORP.form.CDTextBox.value)) {
        		//this.ccfCD_CORP.form.CDTextBox.setFocus();
        		//this.gfnAlert("법인을 입력해주세요");
        		//return false;
        		strRowMsg += "[" + "법인" + "]"+sMsg;
        	}
        	if(this.gfnIsNull(this.ccfYY_EVALUATION.form.TextBox.value)){
        		//this.gfnAlert("평가년도를 입력하세요!");
        		//this.ccfYY_EVALUATION.form.TextBox.setFocus();
        		//return false;
        		strRowMsg += "[" + "평가년도" + "]"+sMsg;
        	}

        	if(this.gfnIsNull(this.cboTY_EVALUATION.value)) {
        		//this.cboTY_EVALUATION.setFocus();
        		//this.gfnAlert("구분값을 입력해주세요");
        		//return false;
        		strRowMsg += "[" + "구분값" + "]"+sMsg;
        	}

        	if(this.gfnIsNull(this.ctclDT_EVALUATION.value)) {
        		//this.ctclDT_EVALUATION.setFocus();
        		//this.gfnAlert("기준일자를 입력해주세요");
        		//return false;
        		strRowMsg += "[" + "기준일자" + "]"+sMsg;
        	}

        	if(!this.gfnIsNull(strRowMsg)){
        		this.gfnAlert(strRowMsg);
        		return false;
        	}

        	return true;
        }

         /************************************************************************
         * 코드파인드 이벤트
         ************************************************************************/
        this.fnBeforeUserDataSetParam = function(id, dsUserParam, nrow) {

        	if (id == "ccfCD_CORP") {
        		dsUserParam.setColumn(nrow, "CD_CORP", this.AuthClient.CD_CORP);
        		dsUserParam.setColumn(nrow, "GR_SEARCH", this.FormInfo.GR_SEARCH);
        		dsUserParam.setColumn(nrow, "ID_USER", this.AuthClient.ID_USER);
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
        	} else if(svcID == "save") {
        		if (errorCode == 0) {
        			this.fnClose = function() {
        				var json = {};

        				json.CD_CORP = this.dsList.getColumn(0, "CD_CORP");
        				json.DS_CORP = this.dsList.getColumn(0, "DS_CORP");
        				json.DT_EVALUATION = this.dsList.getColumn(0, "DT_EVALUATION");
        				json.TY_EVALUATION = this.dsList.getColumn(0, "TY_EVALUATION");
        				json.YY_EVALUATION = this.dsList.getColumn(0, "YY_EVALUATION");

        				this.getParentContext().close(JSON.stringify(json));
        			}
        			this.gfnAlert("대상자 생성이 완료되었습니다.", "fnClose");
        		} else {
        			this.gfnAlert(errorMsg);
        		}
        	}
        }
        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.form_onload,this);
            this.staCD_CORP.addEventHandler("onclick",this.sta03_onclick,this);
            this.stabgCD_CORP.addEventHandler("onclick",this.sta23_onclick,this);
            this.staYY_EVALUATION.addEventHandler("onclick",this.sta03_onclick,this);
            this.stabgYY_EVALUATION.addEventHandler("onclick",this.sta23_onclick,this);
            this.staTY_EVALUATION.addEventHandler("onclick",this.sta03_onclick,this);
            this.stabgTY_EVALUATION.addEventHandler("onclick",this.sta23_onclick,this);
            this.cboTY_EVALUATION.addEventHandler("onitemchanged",this.fnSearchInit,this);
            this.divBtns.form.btnOK.addEventHandler("onclick",this.btnOK_onclick,this);
            this.divBtns.form.btnCANCLE.addEventHandler("onclick",this.btnCANCLE_onclick,this);
            this.staDT_EVALUATION.addEventHandler("onclick",this.sta05_onclick,this);
            this.stabgDT_EVALUATION.addEventHandler("onclick",this.sta23_onclick,this);
            this.ctclDT_EVALUATION.addEventHandler("onchanged",this.fnSearchInit,this);
            this.dsSearch.addEventHandler("onvaluechanged",this.dsSearch_onvaluechanged,this);
        };
        this.loadIncludeScript("DAJ_EVALUATION_TARGET_DLG1.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
