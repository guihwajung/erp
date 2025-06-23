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
            this.set_titletext("인사발령");
            this.getSetter("maxwidth").set("370");
            this.getSetter("maxheight").set("310");
            if (Form == this.constructor)
            {
                this._setFormPosition(336,250);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("dsList", this);
            obj._setContents("<ColumnInfo><Column id=\"ID_PERSON\" type=\"STRING\" size=\"256\"/><Column id=\"ID_SABUN\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"ID_PERSON\"/><Col id=\"ID_SABUN\"/></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("_dsProc", this);
            obj._setContents("<ColumnInfo><Column id=\"TARGET\" type=\"STRING\" size=\"256\"/><Column id=\"SP\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"TARGET\">select</Col><Col id=\"SP\">DAGPR_WORKDAY_CREATE_BASE</Col></Row><Row><Col id=\"TARGET\">save</Col><Col id=\"SP\">DAGPR_WORKDAY_CREATE</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsData", this);
            obj._setContents("<ColumnInfo><Column id=\"DT_WORK_START\" type=\"STRING\" size=\"256\"/><Column id=\"DT_WORK_END\" type=\"STRING\" size=\"256\"/><Column id=\"CD_CORP\" type=\"STRING\" size=\"256\"/><Column id=\"DS_CORP\" type=\"STRING\" size=\"256\"/><Column id=\"TY_PLAN\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"DT_WORK_START\"/><Col id=\"DT_WORK_END\"/><Col id=\"CD_CORP\"/><Col id=\"DS_CORP\"/><Col id=\"TY_PLAN\"/></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsTY_GUBUN", this);
            obj._setContents("<ColumnInfo><Column id=\"CD_CODE\" type=\"STRING\" size=\"256\"/><Column id=\"DS_CODE\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"CD_CODE\">2</Col><Col id=\"DS_CODE\">2주단위</Col></Row><Row><Col id=\"CD_CODE\">4</Col><Col id=\"DS_CODE\">4주단위</Col></Row><Row><Col id=\"CD_CODE\">13</Col><Col id=\"DS_CODE\">13주단위</Col></Row></Rows>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Static("staTITLE","0","10","100.00%","30",null,null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_text("계획생성");
            obj.set_cssclass("sta_TITLE_Bg");
            obj.set_textAlign("left");
            this.addChild(obj.name, obj);

            obj = new Static("sta23","86","163","250","30",null,null,null,null,null,null,this);
            obj.set_taborder("8");
            obj.set_cssclass("sta_WF_tablebg");
            obj.set_text("");
            obj.set_visible("true");
            this.addChild(obj.name, obj);

            obj = new Static("sta01","86","105","250","30",null,null,null,null,null,null,this);
            obj.set_taborder("6");
            obj.set_cssclass("sta_WF_tablebg");
            obj.set_text("");
            this.addChild(obj.name, obj);

            obj = new Static("sta02","86","76","250","30",null,null,null,null,null,null,this);
            obj.set_taborder("4");
            obj.set_cssclass("sta_WF_tablebg");
            obj.set_text("");
            this.addChild(obj.name, obj);

            obj = new Static("sta03","0","76","100","30",null,null,null,null,null,null,this);
            obj.set_taborder("3");
            obj.set_text("근로종료일");
            obj.set_cssclass("sta_WF_tablelabel");
            this.addChild(obj.name, obj);

            obj = new Static("sta04","86","47","250","30",null,null,null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_cssclass("sta_WF_tablebg");
            obj.set_text("");
            this.addChild(obj.name, obj);

            obj = new Static("sta05","0","47","100","30",null,null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_text("근로시직일");
            obj.set_cssclass("sta_WF_tablelabel");
            this.addChild(obj.name, obj);

            obj = new Div("divBtns","47","211","200","30",null,null,null,null,null,null,this);
            obj.set_taborder("9");
            this.addChild(obj.name, obj);

            obj = new Button("btnOK","50","0","60","27",null,null,null,null,null,null,this.divBtns.form);
            obj.set_taborder("0");
            obj.set_text("확인");
            this.divBtns.addChild(obj.name, obj);

            obj = new Button("btnCANCLE","btnOK:30","0","60","27",null,null,null,null,null,null,this.divBtns.form);
            obj.set_taborder("15");
            obj.set_text("취소");
            this.divBtns.addChild(obj.name, obj);

            obj = new Div("ccfCD_CORP","104","110","227","20",null,null,null,null,null,null,this);
            obj.getSetter("CDTextWidth").set("40");
            obj.set_taborder("10");
            obj.set_url("cmm::cmmCodeFind.xfdl");
            obj.set_text("");
            obj.set_enable("false");
            this.addChild(obj.name, obj);

            obj = new Calendar("ctclDT_WORK_START","104","52","105","20",null,null,null,null,null,null,this);
            obj.set_taborder("11");
            obj.set_dateformat("yyyy-MM-dd");
            obj.set_editformat("yyyyMMdd");
            obj.set_autoselect("true");
            obj.set_visible("true");
            obj.set_enable("false");
            this.addChild(obj.name, obj);

            obj = new Combo("cboTY_PLAN","104","168","105","20",null,null,null,null,null,null,this);
            obj.set_taborder("12");
            obj.set_datacolumn("DS_CODE");
            obj.set_codecolumn("CD_CODE");
            obj.set_innerdataset("dsTY_GUBUN");
            obj.set_visible("true");
            obj.set_enable("false");
            obj.set_text("");
            obj.set_value("");
            obj.set_index("0");
            this.addChild(obj.name, obj);

            obj = new Static("sta00","0","105","100","30",null,null,null,null,null,null,this);
            obj.set_taborder("5");
            obj.set_text("법인");
            obj.set_cssclass("sta_WF_tablelabel");
            this.addChild(obj.name, obj);

            obj = new Static("sta22","0","163","100","30",null,null,null,null,null,null,this);
            obj.set_taborder("7");
            obj.set_text("근무구분");
            obj.set_cssclass("sta_WF_tablelabel");
            obj.set_visible("true");
            this.addChild(obj.name, obj);

            obj = new Calendar("ctclDT_WORK_END","104","81","105","20",null,null,null,null,null,null,this);
            obj.set_taborder("13");
            obj.set_dateformat("yyyy-MM-dd");
            obj.set_editformat("yyyyMMdd");
            obj.set_autoselect("true");
            obj.set_visible("true");
            obj.set_enable("false");
            this.addChild(obj.name, obj);

            obj = new Static("sta06","86","134","250","30",null,null,null,null,null,null,this);
            obj.set_taborder("14");
            obj.set_cssclass("sta_WF_tablebg");
            obj.set_text("");
            this.addChild(obj.name, obj);

            obj = new Div("ccfID_SABUN","104","139","227","20",null,null,null,null,null,null,this);
            obj.getSetter("CDTextWidth").set("80");
            obj.set_taborder("15");
            obj.set_url("cmm::cmmCodeFind.xfdl");
            obj.set_text("");
            obj.set_enable("false");
            this.addChild(obj.name, obj);

            obj = new Static("sta07","0","134","100","30",null,null,null,null,null,null,this);
            obj.set_taborder("16");
            obj.set_text("성명");
            obj.set_cssclass("sta_WF_tablelabel");
            this.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this
            obj = new Layout("default","",this._adjust_width,this._adjust_height,this,function(p){});
            this.addLayout(obj.name, obj);
            
            // BindItem Information
            obj = new BindItem("item0","ccfCD_CORP.form.CDTextBox","value","dsData","CD_CORP");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item5","ccfCD_CORP.form.DSTextBox","value","dsData","DS_CORP");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item8","ctclDT_WORK_START","value","dsData","DT_WORK_START");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item4","cboTY_PLAN","value","dsData","TY_PLAN");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item1","ctclDT_WORK_END","value","dsData","DT_WORK_END");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item2","ccfID_SABUN.form.CDTextBox","value","dsList","ID_SABUN");
            this.addChild(obj.name, obj);
            obj.bind();
            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {
            this._addPreloadList("fdl","cmm::cmmCodeFind.xfdl");
        };
        
        // User Script
        this.registerScript("DAG_WORKDAY_PLAN_DLG.xfdl", function() {
        this.objApp = this.gfnGetApplication();
        this.gbDel = "";	// 시간과 분 구분자(:) 추가하기위함 변수

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
        	this.dsList.setColumn(0, "ID_PERSON", this.getOwnerFrame().ID_PERSON);
        	this.dsList.setColumn(0, "ID_SABUN", this.getOwnerFrame().ID_SABUN);
        	this.ccfID_SABUN.form.DSTextBox.set_value(this.getOwnerFrame().DS_HNAME);

        	this.fnSelect();
        };

        /************************************************************************
         * 변수 선언
         ************************************************************************/
        this.fnSetVariable = function() {
        	//this.ccfCD_CORP = this.ccfCD_CORP;

        };

        /************************************************************************
         * 파라미터 설정
         ************************************************************************/
        this.fnSetParameter = function() {
        	this.dsSelect = new Dataset();
        	this.dsSelect.addColumn("ID_PERSON", "int");
        	this.dsSelect.addColumn("ID_USER", "string");

        	this.dsSave = new Dataset();
        	this.dsSave.addColumn("CD_CORP", "string");
        	this.dsSave.addColumn("ID_PERSON", "int");
        	this.dsSave.addColumn("ID_SABUN", "string");
        	this.dsSave.addColumn("DT_WORK_START", "string");
        	this.dsSave.addColumn("DT_WORK_END", "string");
        	this.dsSave.addColumn("TY_PLAN", "string");
        	this.dsSave.addColumn("ID_USER", "string");
        }

        /************************************************************************
         * 이벤트 설정
         ************************************************************************/
        this.fnSetEvent = function() {

        	this.ccfCD_CORP.CodeFindName = "DAX_CFCORP_CODEFIND";
        	this.ccfCD_CORP.BeforeUserDataSetParam = "fnBeforeUserDataSetParam";

        	this.ccfID_SABUN.CodeFindName = "DAX_CFBASEINFO_ALL";
        	this.ccfID_SABUN.BeforeUserDataSetParam = "fnBeforeUserDataSetParam";
        	this.ccfID_SABUN.AfterCDTextChanged = "fnAfterCDTextChanged";

        	//this.ccfID_SABUN.CodeFindName = "DAX_CFBASEINFO_ALL";
        	//this.ccfID_SABUN.BeforeUserDataSetParam = "fnBeforeUserDataSetParam";
        	//this.ccfID_SABUN.AfterCDTextChanged = "fnAfterCDTextChanged";
        };

         /*
          *	조회
          */
        this.fnSelect = function() {
        	//if (!this.fnSelectValidate()) return false;

        	this.dsSelect.clearData();
        	this.dsSelect.addRow();

        	this.dsSelect.setColumn(0, "ID_PERSON", this.dsList.getColumn(0, "ID_PERSON"));
        	this.dsSelect.setColumn(0, "ID_USER", this.AuthClient.ID_USER);

        	var strSvcId    = "select";
        	var strSvcType  = "grid";
        	var inProc		= "_dsProc";
        	var inData      = "select=dsSelect";
        	var outData     = "dsData=select0";
        	var strArg      = "";
        	var callBackFnc = "fnCallbackForce";

        	this.gfnTransaction( strSvcId , 	// transaction을 구분하기 위한 svc id값
        						strSvcType , 	// transaction을 요청할 구분
        						inProc,			// Procedure 정보 Dataset 이름
        						inData , 		// 입력값으로 보낼 dataset id , a=b형태로 실제이름과 입력이름을 매칭
        						outData , 		// 처리결과값으로 받을 dataset id, a=b형태로 실제이름과 입력이름을 매칭
        						strArg, 			// 입력갑스로 보낼 arguments, strFormData="20120607"
        						callBackFnc); // 통신방법 정의 [생략가능]
        }

        this.btnOK_onclick = function(obj,e)
        {
        	this.dlgfnSave();
        };


        this.dlgfnSave = function() {
        	//if (!this.fnDataValidate()) return;

        	this.dsSave.clearData();
        	var nrow = this.dsSave.addRow();

        	this.dsSave.setColumn(nrow, "CD_CORP", this.dsData.getColumn(0, "CD_CORP"));
        	this.dsSave.setColumn(nrow, "ID_PERSON", this.dsList.getColumn(0, "ID_PERSON"));
        	this.dsSave.setColumn(nrow, "ID_SABUN", this.dsList.getColumn(0, "ID_SABUN"));
        	this.dsSave.setColumn(nrow, "DT_WORK_START", this.dsData.getColumn(0, "DT_WORK_START"));
        	this.dsSave.setColumn(nrow, "DT_WORK_END", this.dsData.getColumn(0, "DT_WORK_END"));
        	this.dsSave.setColumn(nrow, "TY_PLAN", this.dsData.getColumn(0, "TY_PLAN"));
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
        	/*
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
        	*/
        	return true;
        }
        /************************************************************************
         * 코드파인드 이벤트
         ************************************************************************/
        this.fnBeforeUserDataSetParam = function(id, dsUserParam, nrow) {
        	if  (id == "ccfCD_CORP") {
        		dsUserParam.setColumn(nrow, "CD_CORP", this.AuthClient.CD_CORP);
        		dsUserParam.setColumn(nrow, "GR_SEARCH", this.FormInfo.GR_SEARCH);
        		dsUserParam.setColumn(nrow, "ID_USER", this.AuthClient.ID_USER);
        	}
        	else if(id == "ccfID_SABUN") {
        		if(this.gfnIsNull(this.dsData.getColumn(0, "CD_CORP"))){
        			this.gfnAlert("법인을 먼저 선택하세요.");
        			return false;
        		}

        		dsUserParam.setColumn(nrow, "CD_DEPT", this.AuthClient.CD_DEPT);
        		dsUserParam.setColumn(nrow, "CD_CORP", this.dsData.getColumn(0, "CD_CORP"));
        		dsUserParam.setColumn(nrow, "GR_SEARCH", this.FormInfo.GR_SEARCH);
        		dsUserParam.setColumn(nrow, "YN_CORP", "N");
        		dsUserParam.setColumn(nrow, "TY_RETIRE", "%");
        	}

        	return true;
        }

        this.fnAfterCDTextChanged = function(id, codeFindData) {
        	var arr = codeFindData;

        	if(id == "ccfCD_CORP"){
        		//this.ccfID_SABUN.form.CDTextBox.set_value("");
        		//this.ccfID_SABUN.form.DSTextBox.set_value("");
        		//this.edtID_PERSON.set_value("");
        	}
        };

        /************************************************************************
         * 콜백 이벤트
         ************************************************************************/
        this.fnCallback = function(svcID, errorCode, errorMsg)
        {
        	if(svcID == "save") {
        		if (errorCode == 0) {
        			this.fnClose = function() {
        				this.getParentContext().close(true);
        			}
        			this.gfnAlert("작업이 완료 되었습니다.", "fnClose");
        		} else {
        			this.gfnAlert(errorMsg);
        		}
        	}else if(svcID == "select") {

        	}
        }

        // SP에서 강제리턴시 콜빽받게 처리하는 콜빽함수(콜빽명뒤에 'Force' 붙여준다)
        this.fnCallbackForce = function(svcID, errorCode, errorMsg)
        {
        	if (svcID == "select") {
        		if (errorCode != 0) {	// SP에서 강제리턴시켰을경우
        			// 에러메시지가 강제로 뜨기떄문에 그메시지창을 닫고 새로 에러메시지창을 연다
        			this.gfnSetTimer(this, function() {
        				//this.getParentContext().close(true);
        				var arrPopFrame = nexacro.getPopupFrames();
        				arrPopFrame[arrPopFrame[1].id].form.btnOk_onclick();

        				this.fnCloseVal = function() {
        					this.getParentContext().close(false);
        				}
        				this.gfnAlert(errorMsg, "fnCloseVal");
        			}, 100);  // 1000ms = 1초

        		}else{	// 정상 조회후 콜빽탔을 경우

        		}

        	}
        }



        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.form_onload,this);
            this.sta23.addEventHandler("onclick",this.sta23_onclick,this);
            this.sta01.addEventHandler("onclick",this.sta23_onclick,this);
            this.sta02.addEventHandler("onclick",this.sta23_onclick,this);
            this.sta03.addEventHandler("onclick",this.sta03_onclick,this);
            this.sta04.addEventHandler("onclick",this.sta23_onclick,this);
            this.sta05.addEventHandler("onclick",this.sta05_onclick,this);
            this.divBtns.form.btnOK.addEventHandler("onclick",this.btnOK_onclick,this);
            this.divBtns.form.btnCANCLE.addEventHandler("onclick",this.btnCANCLE_onclick,this);
            this.sta06.addEventHandler("onclick",this.sta23_onclick,this);
        };
        this.loadIncludeScript("DAG_WORKDAY_PLAN_DLG.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
