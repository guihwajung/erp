(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("DAA_BASE_PERSCARD_DLG");
            this.set_titletext("기본정보_인사기록카드");
            this.getSetter("maxwidth").set("400");
            this.getSetter("maxheight").set("250");
            if (Form == this.constructor)
            {
                this._setFormPosition(350,200);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("dsList", this);
            obj._setContents("<ColumnInfo><Column id=\"CD_CORP\" type=\"STRING\" size=\"256\"/><Column id=\"DS_CORP\" type=\"STRING\" size=\"256\"/><Column id=\"ID_PERSON\" type=\"STRING\" size=\"256\"/><Column id=\"ID_SABUN\" type=\"STRING\" size=\"256\"/><Column id=\"DS_HNAME\" type=\"STRING\" size=\"256\"/><Column id=\"CD_DEPT\" type=\"STRING\" size=\"256\"/><Column id=\"DS_DEPT\" type=\"STRING\" size=\"256\"/><Column id=\"TY_RETIRE\" type=\"STRING\" size=\"256\"/><Column id=\"TY_ORDER\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row/></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("_dsProc", this);
            obj._setContents("<ColumnInfo><Column id=\"TARGET\" type=\"STRING\" size=\"256\"/><Column id=\"SP\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"TARGET\">combo</Col><Col id=\"SP\">DAZPR_COMMONCODE_COMBO</Col></Row><Row><Col id=\"TARGET\">selectRpt</Col><Col id=\"SP\">DAAPR_BASEINFO_CARD_PRINT</Col></Row><Row><Col id=\"TARGET\">selectRptOrd</Col><Col id=\"SP\">DAAPR_BASEINFO_CARD_PRINT_ORD</Col></Row><Row><Col id=\"TARGET\">selectRptEtc</Col><Col id=\"SP\">DAAPR_BASEINFO_CARD_PRINT_ETC</Col></Row><Row><Col id=\"TARGET\">selectRptPlus</Col><Col id=\"SP\">DAAPR_BASEINFO_CARD_PRINT</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsTY_RETIRE", this);
            obj._setContents("<ColumnInfo><Column id=\"CD_CODE\" type=\"STRING\" size=\"256\"/><Column id=\"DS_CODE\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsTY_ORDER", this);
            obj._setContents("<ColumnInfo><Column id=\"CODE\" type=\"STRING\" size=\"256\"/><Column id=\"VALUE\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"CODE\">P</Col><Col id=\"VALUE\">출력용</Col></Row><Row><Col id=\"CODE\">G</Col><Col id=\"VALUE\">일반발령</Col></Row></Rows>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Static("staTITLE","0","0",null,"30","6",null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_text("발령구분 지정");
            obj.set_cssclass("sta_TITLE_Bg");
            obj.set_textAlign("left");
            this.addChild(obj.name, obj);

            obj = new Static("sta00","23","212","87","30",null,null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_text("법인");
            obj.set_visible("false");
            obj.set_cssclass("sta_WF_tablelabelE");
            this.addChild(obj.name, obj);

            obj = new Static("sta22","23","242","87","30",null,null,null,null,null,null,this);
            obj.set_taborder("3");
            obj.set_text("부서");
            obj.set_visible("false");
            obj.set_cssclass("sta_WF_tablelabelE");
            this.addChild(obj.name, obj);

            obj = new Static("sta23","59","242","260","30",null,null,null,null,null,null,this);
            obj.set_taborder("8");
            obj.set_cssclass("sta_WF_tablebg");
            obj.set_text("");
            obj.set_visible("false");
            this.addChild(obj.name, obj);

            obj = new Static("sta01","59","212","260","30",null,null,null,null,null,null,this);
            obj.set_taborder("9");
            obj.set_cssclass("sta_WF_tablebg");
            obj.set_text("");
            obj.set_visible("false");
            this.addChild(obj.name, obj);

            obj = new Div("divBtns","71","120","200","36",null,null,null,null,null,null,this);
            obj.set_taborder("7");
            this.addChild(obj.name, obj);

            obj = new Button("btnOK","30","3","60","27",null,null,null,null,null,null,this.divBtns.form);
            obj.set_taborder("16");
            obj.set_text("확인");
            this.divBtns.addChild(obj.name, obj);

            obj = new Button("btnCANCLE","btnOK:30","3","60","27",null,null,null,null,null,null,this.divBtns.form);
            obj.set_taborder("17");
            obj.set_text("취소");
            this.divBtns.addChild(obj.name, obj);

            obj = new Div("ccfCD_CORP","64","217","250","20",null,null,null,null,null,null,this);
            obj.getSetter("CDTextWidth").set("40");
            obj.set_taborder("2");
            obj.set_url("cmm::cmmCodeFind.xfdl");
            obj.set_text("");
            obj.set_visible("false");
            this.addChild(obj.name, obj);

            obj = new Static("sta10","23","271","87","30",null,null,null,null,null,null,this);
            obj.set_taborder("5");
            obj.set_text("성명");
            obj.set_visible("false");
            obj.set_cssclass("sta_WF_tablelabelE");
            this.addChild(obj.name, obj);

            obj = new Static("sta11","59","271","260","30",null,null,null,null,null,null,this);
            obj.set_taborder("10");
            obj.set_cssclass("sta_WF_tablebg");
            obj.set_text("");
            obj.set_visible("false");
            this.addChild(obj.name, obj);

            obj = new Div("ccfCD_DEPT","64","247","250","20",null,null,null,null,null,null,this);
            obj.getSetter("CDTextWidth").set("70");
            obj.set_taborder("4");
            obj.set_url("cmm::cmmCodeFind.xfdl");
            obj.set_text("");
            obj.set_visible("false");
            this.addChild(obj.name, obj);

            obj = new Div("ccfID_SABUN","64","276","250","20",null,null,null,null,null,null,this);
            obj.getSetter("CDTextWidth").set("50");
            obj.set_taborder("6");
            obj.set_url("cmm::cmmCodeFind.xfdl");
            obj.set_text("");
            obj.set_visible("false");
            this.addChild(obj.name, obj);

            obj = new Static("sta14","23","300","87","30",null,null,null,null,null,null,this);
            obj.set_taborder("11");
            obj.set_text("재직여부");
            obj.set_cssclass("sta_WF_tablelabel");
            obj.set_visible("false");
            this.addChild(obj.name, obj);

            obj = new Static("sta02","59","300","260","30",null,null,null,null,null,null,this);
            obj.set_taborder("12");
            obj.set_cssclass("sta_WF_tablebg");
            obj.set_text("");
            obj.set_visible("false");
            this.addChild(obj.name, obj);

            obj = new Combo("cboTY_RETIRE","64","305","250","20",null,null,null,null,null,null,this);
            obj.set_taborder("13");
            obj.set_datacolumn("DS_CODE");
            obj.set_codecolumn("CD_CODE");
            obj.set_innerdataset("dsTY_RETIRE");
            obj.set_visible("false");
            obj.set_text("전체");
            obj.set_value("%");
            obj.set_index("0");
            this.addChild(obj.name, obj);

            obj = new Static("sta03","6","63","80","30",null,null,null,null,null,null,this);
            obj.set_taborder("14");
            obj.set_text("발령구분");
            obj.set_cssclass("sta_WF_tablelabel");
            this.addChild(obj.name, obj);

            obj = new Static("sta04","sta03:-1","63","260","30",null,null,null,null,null,null,this);
            obj.set_taborder("15");
            obj.set_cssclass("sta_WF_tablebg");
            obj.set_text("");
            this.addChild(obj.name, obj);

            obj = new Radio("rdoTY_ORDER","90","66","148","24",null,null,null,null,null,null,this);
            obj.set_taborder("16");
            obj.set_innerdataset("dsTY_ORDER");
            obj.set_codecolumn("CODE");
            obj.set_datacolumn("VALUE");
            obj.set_direction("vertical");
            obj.set_value("");
            obj.set_index("0");
            this.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this
            obj = new Layout("default","",this._adjust_width,this._adjust_height,this,function(p){});
            this.addLayout(obj.name, obj);
            
            // BindItem Information
            obj = new BindItem("item2","ccfCD_CORP.form.CDTextBox","value","dsList","CD_CORP");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item3","ccfCD_CORP.form.DSTextBox","value","dsList","DS_CORP");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item5","ccfID_SABUN.form.CDTextBox","value","dsList","ID_SABUN");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item6","ccfID_SABUN.form.DSTextBox","value","dsList","DS_HNAME");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item8","ccfCD_DEPT.form.CDTextBox","value","dsList","CD_DEPT");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item9","ccfCD_DEPT.form.DSTextBox","value","dsList","DS_DEPT");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item0","cboTY_RETIRE","value","dsList","TY_RETIRE");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item10","rdoTY_ORDER","value","dsList","TY_ORDER");
            this.addChild(obj.name, obj);
            obj.bind();
            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {
            this._addPreloadList("fdl","cmm::cmmCodeFind.xfdl");
        };
        
        // User Script
        this.registerScript("DAA_BASE_PERSCARD_DLG.xfdl", function() {
        this.objApp = this.gfnGetApplication();

        this.form_onload = function(obj,e)
        {
        	// -- 필수 -------------------//
        	this.gfnFormOnLoad(this);
        	this.gfnFormInfo(this);
        	// ---------------------------//

        	this.fnSetVariable();
        	this.fnSetEvent();
        	//this.fnSetParameter();
        	this.fnSetCombo();

        	this.rdoTY_ORDER.set_value("P");
        };

        /************************************************************************
         * 변수 선언
         ************************************************************************/
        this.fnSetVariable = function() {
        	// 인적사항
        	this.ccfID_SABUN = this.ccfID_SABUN;	//사번
        	this.ccfCD_CORP = this.ccfCD_CORP;	//법인코드
        	this.ccfCD_DEPT = this.ccfCD_DEPT;	//부서

        	// 상세정보
        	this.cboTY_RETIRE = this.cboTY_RETIRE;	//재직여부
        };

        /************************************************************************
         * 파라미터 설정
         ************************************************************************/
        this.fnSetParameter = function() {
        	this.dsSelect = new Dataset();
        	this.dsSelect.addColumn("CD_CORP", "string");	//법인코드
        	this.dsSelect.addColumn("CD_DEPT", "string"); 	//부서코드
        	this.dsSelect.addColumn("ID_SABUN", "string"); 	//사원번호
        	this.dsSelect.addColumn("TY_RETIRE", "string"); 	//재직상태
        	this.dsSelect.addColumn("ID_LOGIN", "string");
        	this.dsSelect.addColumn("TY_ORDER", "string"); 	//발령구분
        }

        /************************************************************************
         * 이벤트 설정
         ************************************************************************/
        this.fnSetEvent = function() {
        	this.ccfCD_CORP.CodeFindName = "DAX_CFCORP_CODEFIND";
        	this.ccfCD_CORP.BeforeUserDataSetParam = "fnBeforeUserDataSetParam";

        	this.ccfCD_DEPT.CodeFindName = "DAX_CFDEPT_MST1";
        	this.ccfCD_DEPT.BeforeUserDataSetParam = "fnBeforeUserDataSetParam";

        	this.ccfID_SABUN.CodeFindName = "DAX_CFBASEINFO";
        	this.ccfID_SABUN.BeforeUserDataSetParam = "fnBeforeUserDataSetParam";
        };

        this.btnOK_onclick = function(obj,e)
        {
        	// 확인
        	if(!this.fnSelectValidate()) return;
        	this.fnSelectRpt();
        };

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
        this.fnSelectValidate = function() {
        	var editCnt = 0;
        // 	if (!this.gfnIsNull(this.ccfCD_DEPT.form.CDTextBox.value)) {
        // 		editCnt++;
        // 	}
        //
        // 	if (!this.gfnIsNull(this.ccfID_SABUN.form.CDTextBox.value)) {
        // 		editCnt++;
        // 	}
        //
        // 	if (editCnt == 0) {
        // 		this.gfnAlert("부서 또는 성명을 입력하세요.");
        // 		return false;
        // 	}

        	return true;
        };

        /************************************************************************
         * 코드파인드 이벤트
         ************************************************************************/
        this.fnBeforeUserDataSetParam = function(id, dsUserParam, nrow) {
        	if (id == "ccfCD_CORP") {	//법인
        	}
        	else if  (id == "ccfCD_DEPT") {	//부서
        	}
        	else if  (id == "ccfID_SABUN") {	//사번
        		dsUserParam.setColumn(nrow, "GR_SEARCH", this.FormInfo.GR_SEARCH);
        		dsUserParam.setColumn(nrow, "CD_DEPT", "%");
        		dsUserParam.setColumn(nrow, "TY_RETIRE", "%");
        	}
        	return true;
        }

        this.fnAfterCDTextChanged = function(id, codeFindData) {
        	var arr = codeFindData;

        	switch(id){
        		case "ccfCD_CORP" :
        			if(this.gfnIsNull(arr[0])){
        				this.dsList.setColumn(0, "CD_CORP", "");
        				this.dsList.setColumn(0, "DS_CORP", "");
        			}else{
        				this.dsList.setColumn(0, "CD_CORP", arr[0]["CD_CORP"]);
        				this.dsList.setColumn(0, "DS_CORP", arr[0]["DS_CORP"]);
        			}
        		break;
        		case "ccfCD_DEPT" :
        			if(this.gfnIsNull(arr[0])){
        				this.dsList.setColumn(0, "CD_DEPT", "");
        				this.dsList.setColumn(0, "DS_DEPT", "");
        			}else{
        				this.dsList.setColumn(0, "CD_DEPT", arr[0]["CD_DEPT_MST"]);
        			}
        		break;
        		case "ccfID_SABUN" :
        			if(this.gfnIsNull(arr[0])){
        				this.dsList.setColumn(0, "ID_SABUN", "");
        				this.dsList.setColumn(0, "DS_HNAME", "");
        				this.dsList.setColumn(0, "ID_PERSON", "");
        			}else{
        				this.dsList.setColumn(0, "ID_SABUN", arr[0]["ID_SABUN"]);
        				this.dsList.setColumn(0, "DS_HNAME", arr[0]["DS_HNAME"]);
        				this.dsList.setColumn(0, "ID_PERSON", arr[0]["ID_PERSON"]);
        			}
        		break;
        	}
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
        	if(svcID == "save"){
        		if (errorCode == 0) {
        			this.parent.parent.opener.divWork.form.fnSelect();
        			this.getParentContext().close(true);

        		} else {
        			this.gfnAlert(errorMsg);
        		}
        	}else if(svcID == "combo"){
        		this.cboTY_RETIRE.set_index(0);
        	}
        }

        this.dsList_onvaluechanged = function(obj,e)
        {
        	var strColid = e.columnid;
        	if(e.oldvalue != e.newvalue) {
        	}
        };

        /************************************************************************
         * 기타 이벤트
         ************************************************************************/
        this.fnSetCombo = function() {

        	this.dsCombo = new Dataset();
        	this.dsCombo.addColumn("TY_SEL", "string");
        	this.dsCombo.addColumn("CD_PREFIX", "string");
        	this.dsCombo.addColumn("CD_UPPREFIX", "string");

        	this.dsCombo.addRow();
        	this.dsCombo.setColumn(0, "TY_SEL", "A");
        	this.dsCombo.setColumn(0, "CD_PREFIX", "AE");
        	this.dsCombo.setColumn(0, "CD_UPPREFIX", "");

        	var strSvcId    = "combo";
        	var strSvcType  = "select";
        	var inProc		= "_dsProc";
        	var inData      = "combo=dsCombo";
        	var outData     = "dsTY_RETIRE=combo0";
        	var strArg      = "";
        	var callBackFnc = "fnCallback";

        	this.gfnTransaction( strSvcId , 	// transaction을 구분하기 위한 svc id값
        						strSvcType , 	// transaction을 요청할 구분
        						inProc,			// Procedure 정보 Dataset 이름
        						inData , 		// 입력값으로 보낼 dataset id , a=b형태로 실제이름과 입력이름을 매칭
        						outData , 		// 처리결과값으로 받을 dataset id, a=b형태로 실제이름과 입력이름을 매칭
        						strArg, 			// 입력갑스로 보낼 arguments, strFormData="20120607"
        						callBackFnc); // 통신방법 정의 [생략가능]
        };

        this.fnSelectRpt = function() {

        	this.dsSelectRpt = new Dataset();
        	this.dsSelectRpt.addColumn("CD_CORP", "string");	//법인코드
        	this.dsSelectRpt.addColumn("CD_DEPT", "string"); 	//부서코드
        	this.dsSelectRpt.addColumn("ID_SABUN", "string"); 	//사원번호
        	this.dsSelectRpt.addColumn("TY_RETIRE", "string"); 	//재직상태
        	this.dsSelectRpt.addColumn("ID_LOGIN", "string"); 	//재직상태
        	this.dsSelectRpt.addColumn("TY_ORDER", "string"); 	//발령구분 (P:출력용, G:일반발령)

        	var nrow = this.dsSelectRpt.addRow();
        	this.dsSelectRpt.setColumn(nrow, "CD_CORP", this.getOwnerFrame().CD_CORP);
        	this.dsSelectRpt.setColumn(nrow, "CD_DEPT", this.dsList.getColumn(0, "CD_DEPT"));
        	this.dsSelectRpt.setColumn(nrow, "ID_SABUN", this.getOwnerFrame().ID_SABUN);
        	this.dsSelectRpt.setColumn(nrow, "TY_RETIRE", this.dsList.getColumn(0, "TY_RETIRE"));
        	this.dsSelectRpt.setColumn(nrow, "ID_LOGIN", this.AuthClient.ID_USER);
        	this.dsSelectRpt.setColumn(nrow, "TY_ORDER", this.rdoTY_ORDER.value);

        	var inProc		= "_dsProc";
        	var inParam 	= "";
        	var inData      = "selectRptPlus=dsSelectRpt selectRptOrd=dsSelectRpt";
        	var reportpath  = "/da/daa/DAA_PERSCARD_DLG.ozr";

        	gfnOpenReport(this, reportpath, inProc, inParam, inData);

        }
        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.form_onload,this);
            this.divBtns.form.btnOK.addEventHandler("onclick",this.btnOK_onclick,this);
            this.divBtns.form.btnCANCLE.addEventHandler("onclick",this.btnCANCLE_onclick,this);
            this.cboTY_RETIRE.addEventHandler("onitemchanged",this.fnSearchInit,this);
            this.dsList.addEventHandler("onvaluechanged",this.dsList_onvaluechanged,this);
        };
        this.loadIncludeScript("DAA_BASE_PERSCARD_DLG.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
