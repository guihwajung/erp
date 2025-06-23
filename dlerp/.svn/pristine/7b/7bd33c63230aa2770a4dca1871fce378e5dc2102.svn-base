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
            this.set_titletext("대상자 생성");
            this.getSetter("maxwidth").set("360");
            this.getSetter("maxheight").set("280");
            if (Form == this.constructor)
            {
                this._setFormPosition(326,230);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("dsList", this);
            obj._setContents("<ColumnInfo><Column id=\"DT_BASE\" type=\"STRING\" size=\"256\"/><Column id=\"CD_CORP\" type=\"STRING\" size=\"256\"/><Column id=\"DS_CORP\" type=\"STRING\" size=\"256\"/><Column id=\"TY_GUBUN\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row/></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("_dsProc", this);
            obj._setContents("<ColumnInfo><Column id=\"TARGET\" type=\"STRING\" size=\"256\"/><Column id=\"SP\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"TARGET\">save</Col><Col id=\"SP\">DAAPR_PROMOTION_CREATE</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsSearch", this);
            obj._setContents("<ColumnInfo><Column id=\"DT_GROUP_GION\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"DT_GROUP_GION\"/></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsTY_GUBUN", this);
            obj._setContents("<ColumnInfo><Column id=\"CODE\" type=\"STRING\" size=\"256\"/><Column id=\"VALUE\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"CODE\">P</Col><Col id=\"VALUE\">승진</Col></Row><Row><Col id=\"CODE\">S</Col><Col id=\"VALUE\">승호</Col></Row></Rows>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Static("staTITLE","0","10","100.00%","30",null,null,null,null,null,null,this);
            obj.set_taborder("7");
            obj.set_text("대상자 생성");
            obj.set_cssclass("sta_TITLE_Bg");
            obj.set_textAlign("left");
            this.addChild(obj.name, obj);

            obj = new Static("sta03","0","86","87","30",null,null,null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_text("법인");
            obj.set_cssclass("sta_WF_tablelabelE");
            this.addChild(obj.name, obj);

            obj = new Static("sta04","86","57","240","30",null,null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_cssclass("sta_WF_tablebg");
            obj.set_text("");
            this.addChild(obj.name, obj);

            obj = new Static("sta05","0","57","87","30",null,null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_text("기준일자");
            obj.set_cssclass("sta_WF_tablelabelE");
            this.addChild(obj.name, obj);

            obj = new Static("sta02","86","86","240","30",null,null,null,null,null,null,this);
            obj.set_taborder("3");
            obj.set_cssclass("sta_WF_tablebg");
            obj.set_text("");
            this.addChild(obj.name, obj);

            obj = new Static("staTY_GUBUN","0","115","87","30",null,null,null,null,null,null,this);
            obj.set_taborder("10");
            obj.set_text("구분");
            obj.set_cssclass("sta_WF_tablelabelE");
            this.addChild(obj.name, obj);

            obj = new Static("stabgTY_GUBUN","86","115","240","30",null,null,null,null,null,null,this);
            obj.set_taborder("10");
            obj.set_cssclass("sta_WF_tablebg");
            obj.set_text("");
            this.addChild(obj.name, obj);

            obj = new Combo("cboTY_GUBUN","95","120","80","20",null,null,null,null,null,null,this);
            obj.set_taborder("3");
            obj.set_innerdataset("dsTY_GUBUN");
            obj.set_datacolumn("VALUE");
            obj.set_codecolumn("CODE");
            obj.set_text("전체");
            obj.set_value("%");
            obj.set_index("0");
            this.addChild(obj.name, obj);

            obj = new Div("divBtns","37","170","200","50",null,null,null,null,null,null,this);
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

            obj = new Calendar("ctclDT_BASE","93","62","105","20",null,null,null,null,null,null,this);
            obj.set_taborder("4");
            obj.set_dateformat("yyyy-MM-dd");
            obj.set_editformat("yyyyMMdd");
            obj.set_autoselect("true");
            this.addChild(obj.name, obj);

            obj = new Div("ccfCD_CORP","93","91","227","20",null,null,null,null,null,null,this);
            obj.getSetter("CodeFindName").set("DAX_CFCORP");
            obj.getSetter("CDTextWidth").set("40");
            obj.set_taborder("5");
            obj.set_url("cmm::cmmCodeFind.xfdl");
            obj.set_text("");
            this.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this
            obj = new Layout("default","",this._adjust_width,this._adjust_height,this,function(p){});
            this.addLayout(obj.name, obj);
            
            // BindItem Information
            obj = new BindItem("item1","ctclDT_BASE","value","dsList","DT_BASE");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item2","ccfCD_CORP.form.CDTextBox","value","dsList","CD_CORP");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item3","ccfCD_CORP.form.DSTextBox","value","dsList","DS_CORP");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item0","cboTY_GUBUN","value","dsList","TY_GUBUN");
            this.addChild(obj.name, obj);
            obj.bind();
            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {
            this._addPreloadList("fdl","cmm::cmmCodeFind.xfdl");
        };
        
        // User Script
        this.registerScript("DAA_PROMOTION_DLG1.xfdl", function() {
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

        	// 메인창 파라미터 받기
        // 	this.rdoTY_GUBUN.set_value(this.getOwnerFrame().TY_GUBUN); //구분
        // 	this.ctclDT_BASE.set_value(this.getOwnerFrame().DT_BASE);	//기준일자
        //
        // 	this.ccfCD_CORP.form.CDTextBox.set_value(this.getOwnerFrame().CD_CORP); //법인 코드
        //     this.ccfCD_CORP.form.DSTextBox.set_value(this.getOwnerFrame().DS_CORP);	//법인명
        //
        // 	this.ccfCD_POSITION.form.CDTextBox.set_value(this.getOwnerFrame().CD_POSITION); //직위 코드
        //     this.ccfCD_POSITION.form.DSTextBox.set_value(this.getOwnerFrame().DS_POSITION);	//직위명

        	this.dsList.setColumn(0, "DT_BASE", this.getOwnerFrame().DT_BASE);
        	this.dsList.setColumn(0, "CD_CORP", this.getOwnerFrame().CD_CORP);
        	this.dsList.setColumn(0, "DS_CORP", this.getOwnerFrame().DS_CORP);
        	this.dsList.setColumn(0, "TY_GUBUN", this.getOwnerFrame().TY_GUBUN);
        };

        /************************************************************************
         * 변수 선언
         ************************************************************************/
        this.fnSetVariable = function() {
        	this.ctclDT_BASE = this.ctclDT_BASE; //기준일자
        	this.ccfCD_CORP = this.ccfCD_CORP; //법인코드
        	//this.dxGrid = this.divData.form.objGrid;
        };

        /************************************************************************
         * 파라미터 설정
         ************************************************************************/
        this.fnSetParameter = function() {
        	this.dsSave = new Dataset();
        	this.dsSave.addColumn("DT_BASE", "string");
        	this.dsSave.addColumn("CD_CORP", "string");
        	this.dsSave.addColumn("ID_USER", "string");
        	this.dsSave.addColumn("TY_GUBUN", "string");
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
        	this.gfnConfirm("기존의 동일일자의 정보가 있는 경우 삭제 후 재 생성 됩니다.\n진행하시겠습니까?", "fnFormButton2ConfCallback");
        };

        this.fnFormButton2ConfCallback = function(strId, val) {
        	if(val == false) return;

        	this.dlgfnSave();
        }


        this.dlgfnSave = function() {

        	if(!this.fnDataValidate()) return;

        	this.dsSave.clearData();
        	var nrow = this.dsSave.addRow();

        	this.dsSave.setColumn(nrow, "DT_BASE", this.dsList.getColumn(0, "DT_BASE"));
        	this.dsSave.setColumn(nrow, "CD_CORP", this.dsList.getColumn(0, "CD_CORP"));
        	this.dsSave.setColumn(nrow, "TY_GUBUN", this.dsList.getColumn(0, "TY_GUBUN"));
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
        						callBackFnc); // 통신방법 정의 [생략가능]

        }

        this.btnCANCLE_onclick = function(obj,e)
        {
        	// 취소
        	this.getParentContext().close(false);
        };

        this.fnDataValidate = function(){
        	if(this.gfnIsNull(this.ctclDT_BASE.value)) {
        		this.ctclDT_BASE.setFocus();
        		this.gfnAlert("기준일자를 입력해주세요");
        		return false;
        	}
        	else if(this.gfnIsNull(this.ccfCD_CORP.form.CDTextBox.value)) {
        		this.ccfCD_CORP.form.CDTextBox.setFocus();
        		this.gfnAlert("법인을 입력해주세요");
        		return false;
        	}
        	if(this.gfnIsNull(this.cboTY_GUBUN.value)) {
        		this.cboTY_GUBUN.setFocus();
        		this.gfnAlert("구분값을 입력해주세요");
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
        				json.DT_BASE = this.dsList.getColumn(0, "DT_BASE");
        				json.TY_GUBUN = this.dsList.getColumn(0, "TY_GUBUN");

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
            this.sta03.addEventHandler("onclick",this.sta03_onclick,this);
            this.sta04.addEventHandler("onclick",this.sta23_onclick,this);
            this.sta05.addEventHandler("onclick",this.sta05_onclick,this);
            this.sta02.addEventHandler("onclick",this.sta23_onclick,this);
            this.staTY_GUBUN.addEventHandler("onclick",this.sta03_onclick,this);
            this.stabgTY_GUBUN.addEventHandler("onclick",this.sta23_onclick,this);
            this.cboTY_GUBUN.addEventHandler("onitemchanged",this.fnSearchInit,this);
            this.divBtns.form.btnOK.addEventHandler("onclick",this.btnOK_onclick,this);
            this.divBtns.form.btnCANCLE.addEventHandler("onclick",this.btnCANCLE_onclick,this);
            this.ctclDT_BASE.addEventHandler("onchanged",this.fnSearchInit,this);
            this.dsSearch.addEventHandler("onvaluechanged",this.dsSearch_onvaluechanged,this);
        };
        this.loadIncludeScript("DAA_PROMOTION_DLG1.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
