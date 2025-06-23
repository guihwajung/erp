(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("DAG_FOODCOST_DLG");
            this.set_titletext("식대급여적용");
            this.getSetter("maxwidth").set("370");
            this.getSetter("maxheight").set("310");
            if (Form == this.constructor)
            {
                this._setFormPosition(336,250);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("dsList", this);
            obj._setContents("<ColumnInfo><Column id=\"YN_CLOSE\" type=\"STRING\" size=\"256\"/><Column id=\"CD_CORP\" type=\"STRING\" size=\"256\"/><Column id=\"YM_WORK\" type=\"STRING\" size=\"256\"/><Column id=\"YM_SALARY\" type=\"STRING\" size=\"256\"/><Column id=\"TY_SALARY\" type=\"STRING\" size=\"256\"/><Column id=\"SN_SALARY\" type=\"STRING\" size=\"256\"/><Column id=\"DS_CORP\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row/></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("_dsProc", this);
            obj._setContents("<ColumnInfo><Column id=\"TARGET\" type=\"STRING\" size=\"256\"/><Column id=\"SP\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"TARGET\">save</Col><Col id=\"SP\">DAGPR_FOODCOST_CREATE</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsYN_CLOSE", this);
            obj._setContents("<ColumnInfo><Column id=\"CD_CODE\" type=\"STRING\" size=\"256\"/><Column id=\"DS_CODE\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"DS_CODE\">마감</Col><Col id=\"CD_CODE\">Y</Col></Row><Row><Col id=\"DS_CODE\">마감취소</Col><Col id=\"CD_CODE\">N</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsTY_SALARY", this);
            obj._setContents("<ColumnInfo><Column id=\"CD_CODE\" type=\"STRING\" size=\"256\"/><Column id=\"DS_CODE\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"CD_CODE\">S</Col><Col id=\"DS_CODE\">급여</Col></Row><Row><Col id=\"CD_CODE\">B</Col><Col id=\"DS_CODE\">상여</Col></Row><Row><Col id=\"CD_CODE\">X</Col><Col id=\"DS_CODE\">성과급</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsSN_SALARY", this);
            obj._setContents("<ColumnInfo><Column id=\"CD_CODE\" type=\"STRING\" size=\"256\"/><Column id=\"DS_CODE\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"CD_CODE\">1</Col><Col id=\"DS_CODE\">1</Col></Row><Row><Col id=\"CD_CODE\">2</Col><Col id=\"DS_CODE\">2</Col></Row><Row><Col id=\"CD_CODE\">3</Col><Col id=\"DS_CODE\">3</Col></Row><Row><Col id=\"CD_CODE\">4</Col><Col id=\"DS_CODE\">4</Col></Row><Row><Col id=\"CD_CODE\">5</Col><Col id=\"DS_CODE\">5</Col></Row><Row><Col id=\"CD_CODE\">6</Col><Col id=\"DS_CODE\">6</Col></Row><Row><Col id=\"CD_CODE\">7</Col><Col id=\"DS_CODE\">7</Col></Row><Row><Col id=\"CD_CODE\">8</Col><Col id=\"DS_CODE\">8</Col></Row><Row><Col id=\"CD_CODE\">9</Col><Col id=\"DS_CODE\">9</Col></Row><Row><Col id=\"CD_CODE\">10</Col><Col id=\"DS_CODE\">10</Col></Row></Rows>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Static("staTITLE","0","10","100.00%","30",null,null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_text("식대 급여적용");
            obj.set_cssclass("sta_TITLE_Bg");
            obj.set_textAlign("left");
            obj.set_visible("false");
            this.addChild(obj.name, obj);

            obj = new Static("staYM_SALARY","0","135","87","30",null,null,null,null,null,null,this);
            obj.set_taborder("5");
            obj.set_text("급여년월");
            obj.set_cssclass("sta_WF_tablelabel");
            this.addChild(obj.name, obj);

            obj = new Static("staYM_SALARY_BG","86","135","250","30",null,null,null,null,null,null,this);
            obj.set_taborder("6");
            obj.set_cssclass("sta_WF_tablebg");
            obj.set_text("");
            this.addChild(obj.name, obj);

            obj = new Static("staYM_WORK_BG","86","106","250","30",null,null,null,null,null,null,this);
            obj.set_taborder("4");
            obj.set_cssclass("sta_WF_tablebg");
            obj.set_text("");
            this.addChild(obj.name, obj);

            obj = new Static("staYM_WORK","0","106","87","30",null,null,null,null,null,null,this);
            obj.set_taborder("3");
            obj.set_text("근무년월");
            obj.set_cssclass("sta_WF_tablelabel");
            this.addChild(obj.name, obj);

            obj = new Static("staCD_CORP_BG","86","77","250","30",null,null,null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_cssclass("sta_WF_tablebg");
            obj.set_text("");
            this.addChild(obj.name, obj);

            obj = new Static("staCD_CORP","0","77","87","30",null,null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_text("법인");
            obj.set_cssclass("sta_WF_tablelabel");
            this.addChild(obj.name, obj);

            obj = new Div("divBtns","0","210",null,"30","0",null,null,null,null,null,this);
            obj.set_taborder("7");
            this.addChild(obj.name, obj);

            obj = new Button("btnOK","90","0","60","27",null,null,null,null,null,null,this.divBtns.form);
            obj.set_taborder("0");
            obj.set_text("확인");
            this.divBtns.addChild(obj.name, obj);

            obj = new Button("btnCANCLE","btnOK:30","0","60","27",null,null,null,null,null,null,this.divBtns.form);
            obj.set_taborder("15");
            obj.set_text("취소");
            this.divBtns.addChild(obj.name, obj);

            obj = new Div("ccfCD_CORP","93","82","227","20",null,null,null,null,null,null,this);
            obj.getSetter("CDTextWidth").set("40");
            obj.set_taborder("8");
            obj.set_url("cmm::cmmCodeFind.xfdl");
            obj.set_text("");
            obj.set_enable("false");
            obj.getSetter("CodeFindName").set("DAX_CFCORP_CODEFIND");
            this.addChild(obj.name, obj);

            obj = new Static("staYN_CLOSE","0","48","87","30",null,null,null,null,null,null,this);
            obj.set_taborder("9");
            obj.set_text("마감여부");
            obj.set_cssclass("sta_WF_tablelabel");
            this.addChild(obj.name, obj);

            obj = new Static("staYN_CLOSE_BG","86","48","250","30",null,null,null,null,null,null,this);
            obj.set_taborder("10");
            obj.set_cssclass("sta_WF_tablebg");
            obj.set_text("");
            this.addChild(obj.name, obj);

            obj = new Radio("rdoYN_CLOSE","97","50","176","27",null,null,null,null,null,null,this);
            obj.set_taborder("11");
            obj.set_innerdataset("dsYN_CLOSE");
            obj.set_codecolumn("CD_CODE");
            obj.set_datacolumn("DS_CODE");
            obj.set_columncount("-1");
            obj.set_rowcount("-1");
            this.addChild(obj.name, obj);

            obj = new Static("staTY_SALARY_BG","86","164","250","30",null,null,null,null,null,null,this);
            obj.set_taborder("12");
            obj.set_cssclass("sta_WF_tablebg");
            obj.set_text("");
            this.addChild(obj.name, obj);

            obj = new Static("staTY_SALARY","0","164","87","30",null,null,null,null,null,null,this);
            obj.set_taborder("13");
            obj.set_text("지급구분");
            obj.set_cssclass("sta_WF_tablelabel");
            this.addChild(obj.name, obj);

            obj = new Combo("cboTY_SALARY","93","169","127","20",null,null,null,null,null,null,this);
            obj.set_taborder("14");
            obj.set_innerdataset("dsTY_SALARY");
            obj.set_codecolumn("CD_CODE");
            obj.set_datacolumn("DS_CODE");
            this.addChild(obj.name, obj);

            obj = new Combo("cboSN_SALARY","cboTY_SALARY:2","169","81","20",null,null,null,null,null,null,this);
            obj.set_taborder("15");
            obj.set_innerdataset("dsSN_SALARY");
            obj.set_codecolumn("CD_CODE");
            obj.set_datacolumn("DS_CODE");
            this.addChild(obj.name, obj);

            obj = new Div("ccfYM_WORK","93","110","127","23",null,null,null,null,null,null,this);
            obj.set_taborder("16");
            obj.set_url("cmm::cmmCalMM.xfdl");
            this.addChild(obj.name, obj);

            obj = new Div("ccfYM_SALARY","93","138","127","23",null,null,null,null,null,null,this);
            obj.set_taborder("17");
            obj.set_url("cmm::cmmCalMM.xfdl");
            this.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this
            obj = new Layout("default","",this._adjust_width,this._adjust_height,this,function(p){});
            this.addLayout(obj.name, obj);
            
            // BindItem Information
            obj = new BindItem("item0","rdoYN_CLOSE","value","dsList","YN_CLOSE");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item1","ccfCD_CORP.form.CDTextBox","value","dsList","CD_CORP");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item2","ccfCD_CORP.form.DSTextBox","value","dsList","DS_CORP");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item3","ccfYM_WORK.form.TextBox","value","dsList","YM_WORK");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item4","ccfYM_SALARY.form.TextBox","value","dsList","YM_SALARY");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item5","cboTY_SALARY","value","dsList","TY_SALARY");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item6","cboSN_SALARY","value","dsList","SN_SALARY");
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
        this.registerScript("DAG_FOODCOST_DLG.xfdl", function() {
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

        	var today = this.gfnGetDate();

        	// 메인창 파라미터 받기
        	this.dsList.setColumn(0, "CD_CORP", this.getOwnerFrame().CD_CORP);
        	this.dsList.setColumn(0, "DS_CORP", this.getOwnerFrame().DS_CORP);
        	this.dsList.setColumn(0, "YM_WORK", this.getOwnerFrame().YM_WORK);
        	this.dsList.setColumn(0, "YM_SALARY", today.substring(0,6));

        	this.cboTY_SALARY.set_value("S");
        	this.cboSN_SALARY.set_value("1");

        	this.ccfCD_CORP.set_enable(false);
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
        	this.dsSave.addColumn("YN_CLOSE", "string");
        	this.dsSave.addColumn("CD_CORP", "string");
        	this.dsSave.addColumn("YM_WORK", "string");
        	this.dsSave.addColumn("YM_SALARY", "string");
        	this.dsSave.addColumn("TY_SALARY", "string");
        	this.dsSave.addColumn("SN_SALARY", "int");
        	this.dsSave.addColumn("GR_SEARCH", "string");
        	this.dsSave.addColumn("TY_AUTH", "string");
        	this.dsSave.addColumn("GR_DEPT", "string");
        	this.dsSave.addColumn("ID_USER", "string");
        }

        /************************************************************************
         * 이벤트 설정
         ************************************************************************/
        this.fnSetEvent = function() {
        	this.ccfCD_CORP.BeforeUserDataSetParam = "fnBeforeUserDataSetParam";
        };


        this.btnOK_onclick = function(obj,e)
        {
        	if (!this.fnSaveValid()) return;

        	this.gfnConfirm("급여적용 하시겠습니까?", "fnConfirmCallback");
        };

        this.fnConfirmCallback = function(strId, val)  {
        	if(val == false) return;

        	// 확인
        	this.fnSave();
        };


        this.fnSave = function() {
        	this.dsSave.clearData();
        	var nrow = this.dsSave.addRow();
        	this.dsSave.setColumn(nrow, "YN_CLOSE", this.dsList.getColumn(0, "YN_CLOSE"));
        	this.dsSave.setColumn(nrow, "CD_CORP", this.dsList.getColumn(0, "CD_CORP"));
        	this.dsSave.setColumn(nrow, "YM_WORK", this.dsList.getColumn(0, "YM_WORK"));
        	this.dsSave.setColumn(nrow, "YM_SALARY", this.dsList.getColumn(0, "YM_SALARY"));
        	this.dsSave.setColumn(nrow, "TY_SALARY", this.dsList.getColumn(0, "TY_SALARY"));
        	this.dsSave.setColumn(nrow, "SN_SALARY", this.dsList.getColumn(0, "SN_SALARY"));
        	this.dsSave.setColumn(nrow, "GR_SEARCH", this.FormInfo.GR_SEARCH);
        	this.dsSave.setColumn(nrow, "TY_AUTH", this.FormInfo.TY_AUTH);
        	this.dsSave.setColumn(nrow, "GR_DEPT", this.AuthClient.CD_DEPT);
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

        this.btnCANCLE_onclick = function(obj,e){
        	// 취소
        	this.getParentContext().close(false);
        };

        this.fnSaveValid = function(){
        	if(this.gfnIsNull(this.rdoYN_CLOSE.value)) {
        		this.rdoYN_CLOSE.setFocus();
        		this.gfnAlert("마감여부를 선택해주세요");
        		return false;
        	}
        	if(this.gfnIsNull(this.ccfCD_CORP.form.CDTextBox.value)) {
        		this.ccfCD_CORP.form.CDTextBox.setFocus();
        		this.gfnAlert("법인을 입력해주세요");
        		return false;
        	}
        	if(this.gfnIsNull(this.ccfYM_WORK.form.TextBox.value)) {
        		this.ccfYM_WORK.form.TextBox.setFocus();
        		this.gfnAlert("근무년월월 입력해주세요");
        		return false;
        	}
        	if(this.gfnIsNull(this.ccfYM_SALARY.form.TextBox.value)) {
        		this.ccfYM_SALARY.form.TextBox.setFocus();
        		this.gfnAlert("급여년월을 입력해주세요");
        		return false;
        	}
        	if(this.gfnIsNull(this.cboTY_SALARY.value)) {
        		this.cboTY_SALARY.setFocus();
        		this.gfnAlert("지급구분을 선택해주세요");
        		return false;
        	}
        	if(this.gfnIsNull(this.cboSN_SALARY.value)) {
        		this.cboSN_SALARY.setFocus();
        		this.gfnAlert("지급구분의 차수를 선택해주세요");
        		return false;
        	}

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

        	return true;
        }

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
        			this.gfnAlert("작업이 완료되었습니다.", "fnClose");
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
            this.staYM_SALARY_BG.addEventHandler("onclick",this.sta23_onclick,this);
            this.staYM_WORK_BG.addEventHandler("onclick",this.sta23_onclick,this);
            this.staYM_WORK.addEventHandler("onclick",this.sta03_onclick,this);
            this.staCD_CORP_BG.addEventHandler("onclick",this.sta23_onclick,this);
            this.staCD_CORP.addEventHandler("onclick",this.sta05_onclick,this);
            this.divBtns.form.btnOK.addEventHandler("onclick",this.btnOK_onclick,this);
            this.divBtns.form.btnCANCLE.addEventHandler("onclick",this.btnCANCLE_onclick,this);
            this.staYN_CLOSE.addEventHandler("onclick",this.sta05_onclick,this);
            this.staYN_CLOSE_BG.addEventHandler("onclick",this.sta23_onclick,this);
            this.staTY_SALARY_BG.addEventHandler("onclick",this.sta23_onclick,this);
        };
        this.loadIncludeScript("DAG_FOODCOST_DLG.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
