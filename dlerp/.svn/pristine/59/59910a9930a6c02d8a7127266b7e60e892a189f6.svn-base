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
            this.set_titletext("상향평가");
            if (Form == this.constructor)
            {
                this._setFormPosition(1280,720);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("_dsProc", this);
            obj._setContents("<ColumnInfo><Column id=\"TARGET\" type=\"STRING\" size=\"256\"/><Column id=\"SP\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"TARGET\">select</Col><Col id=\"SP\">DAJPR_UPTURN_SELECT</Col></Row><Row><Col id=\"TARGET\">save</Col><Col id=\"SP\">DAJPR_UPTURN_SAVE</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsSearch", this);
            obj._setContents("<ColumnInfo><Column id=\"CD_CORP\" type=\"STRING\" size=\"256\"/><Column id=\"DS_CORP\" type=\"STRING\" size=\"256\"/><Column id=\"YY_EVALUATION\" type=\"STRING\" size=\"256\"/><Column id=\"TY_EVALUATION\" type=\"STRING\" size=\"256\"/><Column id=\"ID_SABUN\" type=\"STRING\" size=\"256\"/><Column id=\"DS_HNAME\" type=\"STRING\" size=\"256\"/><Column id=\"ID_ASSESSOR\" type=\"STRING\" size=\"256\"/><Column id=\"NM_ASSESSOR\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"CD_CORP\"/><Col id=\"DS_CORP\"/></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsList", this);
            obj._setContents("");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsTY_EVALUATION", this);
            obj._setContents("<ColumnInfo><Column id=\"CD_CODE\" type=\"STRING\" size=\"256\"/><Column id=\"DS_CODE\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"CD_CODE\">01</Col><Col id=\"DS_CODE\">상반기</Col></Row><Row><Col id=\"CD_CODE\">02</Col><Col id=\"DS_CODE\">하반기</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsHead", this);
            obj._setContents("<ColumnInfo><Column id=\"DS_SABUN\" type=\"STRING\" size=\"256\"/><Column id=\"DS_ASSESSOR\" type=\"STRING\" size=\"256\"/><Column id=\"DS_CLOSE\" type=\"STRING\" size=\"256\"/><Column id=\"YN_CLOSE\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Div("divSearch","0","0",null,"78.0","0",null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_cssclass("div_SEARCH_Bg");
            obj.set_text("");
            this.addChild(obj.name, obj);

            obj = new Static("staCD_CORP","0.0","10.0","92.0","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("2");
            obj.set_text("법인");
            obj.set_cssclass("sta_WF_SchLabelE");
            this.divSearch.addChild(obj.name, obj);

            obj = new Div("ccfCD_CORP","staCD_CORP:0.0","10.0","280","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.getSetter("CDTextWidth").set("70");
            obj.set_taborder("3");
            obj.set_url("cmm::cmmCodeFind.xfdl");
            obj.set_text("");
            obj.getSetter("CodeFindName").set("DAX_CFCORP");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("staYY_EVALUATION","ccfCD_CORP:0.0","10.0","92.0","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("0");
            obj.set_text("평가년도");
            obj.set_cssclass("sta_WF_SchLabelE");
            this.divSearch.addChild(obj.name, obj);

            obj = new Div("ccfYY_EVALUATION","staYY_EVALUATION:0.0","10.0","90","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.getSetter("CDTextWidth").set("70");
            obj.set_taborder("4");
            obj.set_url("cmm::cmmCalYY.xfdl");
            obj.set_text("");
            obj.getSetter("CodeFindName").set("DAX_CFCORP");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("staTY_EVALUATION","ccfYY_EVALUATION:0.0","10.0","92.0","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("1");
            obj.set_text("구분");
            obj.set_rtl("false");
            obj.set_cssclass("sta_WF_SchLabelE");
            this.divSearch.addChild(obj.name, obj);

            obj = new Combo("cboTY_EVALUATION","staTY_EVALUATION:0.0","10.0","94","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("5");
            obj.set_innerdataset("dsTY_EVALUATION");
            obj.set_codecolumn("CD_CODE");
            obj.set_datacolumn("DS_CODE");
            obj.set_text("cbo00");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("staID_SABUN","0.0","staCD_CORP:10.0","92.0","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("7");
            obj.set_text("평가자");
            obj.set_usedecorate("false");
            obj.set_cssclass("sta_WF_SchLabelE");
            this.divSearch.addChild(obj.name, obj);

            obj = new Div("ccfID_ASSESSOR","staID_SABUN:0.0","staCD_CORP:10.0","210","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.getSetter("CodeFindName").set("DAX_CFUPTURN_CODEFIND");
            obj.getSetter("CDTextWidth").set("70");
            obj.set_taborder("6");
            obj.set_url("cmm::cmmCodeFind.xfdl");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("staID_SABUN00","ccfID_ASSESSOR:0.0","staCD_CORP:10.0","92.0","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("8");
            obj.set_usedecorate("false");
            obj.set_text("대상자");
            obj.set_cssclass("sta_WF_SchLabelE");
            this.divSearch.addChild(obj.name, obj);

            obj = new Div("ccfID_SABUN","staID_SABUN00:0.0","staCD_CORP:10.0","210","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.getSetter("CodeFindName").set("DAX_CFUPTURN_TARGET_CODEFIND");
            obj.getSetter("CDTextWidth").set("70");
            obj.set_taborder("9");
            obj.set_url("cmm::cmmCodeFind.xfdl");
            this.divSearch.addChild(obj.name, obj);

            obj = new Div("divData","0","divSearch:10",null,null,"0","0",null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_cssclass("div_DATA_Bg");
            this.addChild(obj.name, obj);

            obj = new Div("divTop","0","0",null,"60","0",null,null,null,null,null,this.divData.form);
            obj.set_taborder("1");
            this.divData.addChild(obj.name, obj);

            obj = new Static("staHEAD_DS_SABUN","0","0","200","30",null,null,null,null,null,null,this.divData.form.divTop.form);
            obj.set_taborder("0");
            obj.set_text("대상자");
            obj.set_cssclass("sta_WF_tablelabel");
            obj.set_textAlign("center");
            this.divData.form.divTop.addChild(obj.name, obj);

            obj = new Static("staHEAD_DS_ASSESSOR","staHEAD_DS_SABUN:-1","0","200","30",null,null,null,null,null,null,this.divData.form.divTop.form);
            obj.set_taborder("1");
            obj.set_text("평가자");
            obj.set_cssclass("sta_WF_tablelabel");
            obj.set_textAlign("center");
            this.divData.form.divTop.addChild(obj.name, obj);

            obj = new Static("staHEAD_DS_CLOSE","staHEAD_DS_ASSESSOR:-1","0","200","30",null,null,null,null,null,null,this.divData.form.divTop.form);
            obj.set_taborder("2");
            obj.set_text("제출여부");
            obj.set_cssclass("sta_WF_tablelabel");
            obj.set_textAlign("center");
            this.divData.form.divTop.addChild(obj.name, obj);

            obj = new Edit("edt_HEAD_DS_SABUN","0","29","200","30",null,null,null,null,null,null,this.divData.form.divTop.form);
            obj.set_taborder("3");
            obj.set_readonly("true");
            this.divData.form.divTop.addChild(obj.name, obj);

            obj = new Edit("edt_HEAD_DS_ASSESSOR","edt_HEAD_DS_SABUN:-1","29","200","30",null,null,null,null,null,null,this.divData.form.divTop.form);
            obj.set_taborder("4");
            obj.set_readonly("true");
            this.divData.form.divTop.addChild(obj.name, obj);

            obj = new Edit("edt_HEAD_DS_CLOSE","edt_HEAD_DS_ASSESSOR:-1","29","200","30",null,null,null,null,null,null,this.divData.form.divTop.form);
            obj.set_taborder("5");
            obj.set_readonly("true");
            this.divData.form.divTop.addChild(obj.name, obj);

            obj = new Grid("objGrid","0","divTop:10",null,null,"0","0",null,null,null,null,this.divData.form);
            obj.set_taborder("0");
            obj._setContents("");
            this.divData.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this
            obj = new Layout("default","",this._adjust_width,this._adjust_height,this,function(p){});
            this.addLayout(obj.name, obj);
            
            // BindItem Information
            obj = new BindItem("item0","divSearch.form.ccfCD_CORP.form.CDTextBox","value","dsSearch","CD_CORP");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item1","divSearch.form.ccfCD_CORP.form.DSTextBox","value","dsSearch","DS_CORP");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item2","divSearch.form.ccfYY_EVALUATION.form.TextBox","value","dsSearch","YY_EVALUATION");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item3","divSearch.form.cboTY_EVALUATION","value","dsSearch","TY_EVALUATION");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item4","divSearch.form.ccfID_ASSESSOR.form.CDTextBox","value","dsSearch","ID_ASSESSOR");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item5","divSearch.form.ccfID_ASSESSOR.form.DSTextBox","value","dsSearch","NM_ASSESSOR");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item6","divSearch.form.ccfID_SABUN.form.CDTextBox","value","dsSearch","ID_SABUN");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item7","divSearch.form.ccfID_SABUN.form.DSTextBox","value","dsSearch","DS_HNAME");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item8","divData.form.divTop.form.edt_HEAD_DS_SABUN","value","dsHead","DS_SABUN");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item9","divData.form.divTop.form.edt_HEAD_DS_ASSESSOR","value","dsHead","DS_ASSESSOR");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item10","divData.form.divTop.form.edt_HEAD_DS_CLOSE","value","dsHead","DS_CLOSE");
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
        this.registerScript("DAJ_UPTURN.xfdl", function() {
        this.objApp = this.gfnGetApplication();

        this.form_onload = function(obj,e)
        {
        	// -- 필수 -------------------//
        	this.gfnFormOnLoad(this);
        	this.gfnFormInfo(this);
        	// ---------------------------//

        	this.fnSetButton();
        	this.fnSetExtendButton();
        	this.fnSetVariable();
        	this.fnSetEvent();
        	this.fnSetParameter();

        	var today = this.gfnGetDate();
        	this.ccfYY_EVALUATION.form.TextBox.set_value(today.substr(0,4));
        	this.cboTY_EVALUATION.set_index(0);

        	this.ccfCD_CORP.form.CDTextBox.set_value(this.AuthClient.CD_CORP);
        	this.ccfCD_CORP.form.DSTextBox.set_value(this.AuthClient.DS_CORP);

        	if(this.FormInfo.GR_SEARCH == "9"){
        		this.ccfID_ASSESSOR.form.CDTextBox.set_value(this.AuthClient.ID_SABUN);
        		this.ccfID_ASSESSOR.form.fnCodeFindLoad();
        	}

        	if(this.FormInfo.GR_SEARCH == "1"){
        		this.ccfCD_CORP.set_enable(true);
        	}else{
        		this.ccfCD_CORP.set_enable(false);
        	}

        	if(this.FormInfo.GR_SEARCH == "9"){
        		this.ccfID_ASSESSOR.set_enable(false);
        	}else{
        		this.ccfID_ASSESSOR.set_enable(true);
        	}


        	//화면 로드시 자동조회
        	//this.FormBtns.Select.click();
        };

        /************************************************************************
         * 버튼 설정 : 화면(Tab) 전환시 마다 호출
         * 서브버튼 사용 및 공통버튼 강제 제어시 여기서 처리
         ************************************************************************/
        this.fnSetButton = function() {
        }

        /************************************************************************
         * 확장 버튼 : 화면별 버튼 설정 ID, function 연결 (화면버튼관리)
         ************************************************************************/
        this.fnSetExtendButton = function() {
        	this.btnComplete = this.gfnFormButtonAdd("Complete", "fnComplete");  //제출
        	this.btnComplete.set_background("#1289ed");
        	this.btnComplete.set_color("#ffffff");
        };

        this.fnComplete = function(){
        	if(this.dsList.rowcount == 0) return;

        	this.fnCompleteCallback = function(id, val){
        		if(val){
        			this.fnSaveProc("C"); //제출(완료)
        		}
        	}
        	this.gfnConfirm("제출하시겠습니까?", "fnCompleteCallback");
        }

        /************************************************************************
         * 변수 선언
         ************************************************************************/
        this.fnSetVariable = function() {
        	this.dxGrid = this.divData.form.objGrid;
        	//this.dxGridHead = this.divData.form.objGridHead;

        	this.ccfCD_CORP = this.divSearch.form.ccfCD_CORP;
        	this.ccfYY_EVALUATION = this.divSearch.form.ccfYY_EVALUATION;
        	this.cboTY_EVALUATION = this.divSearch.form.cboTY_EVALUATION;
        	this.ccfID_ASSESSOR = this.divSearch.form.ccfID_ASSESSOR;
        	this.ccfID_SABUN = this.divSearch.form.ccfID_SABUN;

        };

        /************************************************************************
         * 이벤트 설정
         ************************************************************************/
        this.fnSetEvent = function() {
        	this.ccfCD_CORP.BeforeUserDataSetParam = "fnBeforeUserDataSetParam";
        	this.ccfCD_CORP.AfterCDTextChanged = "fnAfterCDTextChanged";

        	this.ccfID_ASSESSOR.BeforeUserDataSetParam = "fnBeforeUserDataSetParam";
        	this.ccfID_ASSESSOR.AfterCDTextChanged = "fnAfterCDTextChanged";

        	this.ccfID_SABUN.BeforeUserDataSetParam = "fnBeforeUserDataSetParam";
        	this.ccfID_SABUN.AfterCDTextChanged = "fnAfterCDTextChanged";

        	this.gfnGridInit(this.dxGrid, this.dsList, "DA", "DAJ_UPTURN");
        	//this.gfnGridInit(this.dxGridHead, this.dsHead, "DA", "DAJ_UPTURN_HEAD");


        	this.dxGrid.BeforeUserDataSetParam = "fnGrid_BeforeUserDataSetParam";	// 그리드 코드파인드 설정
        	this.dxGrid.AfterEdit = "fnGrid_AfterEdit";	// 셀 변경 후 이벤트
        	// 셀 수정가능 여부
        	this.dxGrid.EnterCell = "fnGrid_EnterCell";
        }

        /************************************************************************
         * 파라미터 설정
         ************************************************************************/
        this.fnSetParameter = function() {

        	this.dsSelect = new Dataset();
        	this.dsSelect.addColumn("CD_CORP", "string");
        	this.dsSelect.addColumn("YY_EVALUATION", "string");
        	this.dsSelect.addColumn("TY_EVALUATION", "string");
        	this.dsSelect.addColumn("ID_SABUN", "string");
        	this.dsSelect.addColumn("ID_ASSESSOR", "string");
        	this.dsSelect.addColumn("GR_SEARCH", "string");
        	this.dsSelect.addColumn("TY_AUTH", "string");
        	this.dsSelect.addColumn("GR_DEPT", "string");
        	this.dsSelect.addColumn("ID_USER", "string");

        	this.dsSave = new Dataset();
        	this.dsSave.addColumn("CD_CORP", "string");
        	this.dsSave.addColumn("YY_EVALUATION", "string");
        	this.dsSave.addColumn("TY_EVALUATION", "string");
        	this.dsSave.addColumn("ID_SABUN", "string");
        	this.dsSave.addColumn("ID_ASSESSOR", "string");
        	this.dsSave.addColumn("DS_RESULT", "string");
        	this.dsSave.addColumn("YN_CLOSE", "string");
        	this.dsSave.addColumn("GR_SEARCH", "string");
        	this.dsSave.addColumn("TY_AUTH", "string");
        	this.dsSave.addColumn("GR_DEPT", "string");
        	this.dsSave.addColumn("ID_USER", "string");


        }

        /************************************************************************
         * 컨트롤 이벤트
         ************************************************************************/
         /*
          *	조회 버튼
          */
        this.fnSelect = function() {
        	if(!this.fnSelectValid()) return;

        	this.gfnGridBeforeSelect(this.dxGrid);

        	this.dsSelect.clearData();
        	this.dsSelect.addRow();

        	this.dsSelect.setColumn(0, "CD_CORP", this.dsSearch.getColumn(0, "CD_CORP"));
        	this.dsSelect.setColumn(0, "YY_EVALUATION", this.dsSearch.getColumn(0, "YY_EVALUATION"));
        	this.dsSelect.setColumn(0, "TY_EVALUATION", this.dsSearch.getColumn(0, "TY_EVALUATION"));
        	this.dsSelect.setColumn(0, "ID_SABUN", this.dsSearch.getColumn(0, "ID_SABUN"));
        	this.dsSelect.setColumn(0, "ID_ASSESSOR", this.dsSearch.getColumn(0, "ID_ASSESSOR"));
        	this.dsSelect.setColumn(0, "GR_SEARCH", this.FormInfo.GR_SEARCH);
        	this.dsSelect.setColumn(0, "TY_AUTH", this.FormInfo.TY_AUTH);
        	this.dsSelect.setColumn(0, "GR_DEPT", this.AuthClient.CD_DEPT);
        	this.dsSelect.setColumn(0, "ID_USER", this.AuthClient.ID_USER);

        	var strSvcId    = "select";
        	var strSvcType  = "grid";
        	var inProc		= "_dsProc";
        	var inData      = "select=dsSelect";
        	var outData     = "dsHead=select0 dsList=select1";
        	var strArg      = "";
        	var callBackFnc = "fnCallback";

        	this.gfnTransaction( strSvcId , 	// transaction을 구분하기 위한 svc id값
        						strSvcType , 	// transaction을 요청할 구분
        						inProc,			// Procedure 정보 Dataset 이름
        						inData , 		// 입력값으로 보낼 dataset id , a=b형태로 실제이름과 입력이름을 매칭
        						outData , 		// 처리결과값으로 받을 dataset id, a=b형태로 실제이름과 입력이름을 매칭
        						strArg, 			// 입력갑스로 보낼 arguments, strFormData="20120607"
        						callBackFnc); // 통신방법 정의 [생략가능]

        }

        this.fnSelectValid = function(){
        	if(this.gfnIsNull(this.ccfCD_CORP.form.CDTextBox.value)){
        		this.fnValidCallback = function(){
        			this.ccfCD_CORP.form.CDTextBox.setFocus();
        		}
        		this.gfnAlert("법인을 선택하세요!", "fnValidCallback");
        		return false;
        	}
        	if(this.gfnIsNull(this.ccfYY_EVALUATION.form.TextBox.value)){
        		this.fnValidCallback = function(){
        			this.ccfYY_EVALUATION.form.TextBox.setFocus();
        		}
        		this.gfnAlert("평가년도를 입력하세요!", "fnValidCallback");
        		return false;
        	}
        	if(this.gfnIsNull(this.cboTY_EVALUATION.value)){
        		this.fnValidCallback = function(){
        			this.cboTY_EVALUATION.setFocus();
        		}
        		this.gfnAlert("구분을 선택하세요!", "fnValidCallback");
        		return false;
        	}
        	if(this.gfnIsNull(this.ccfID_ASSESSOR.form.CDTextBox.value)){
        		this.fnValidCallback = function(){
        			this.ccfID_ASSESSOR.form.CDTextBox.setFocus();
        		}
        		this.gfnAlert("평가자를 입력하세요!", "fnValidCallback");
        		return false;
        	}
        	if(this.gfnIsNull(this.ccfID_SABUN.form.CDTextBox.value)){
        		this.fnValidCallback = function(){
        			this.ccfID_SABUN.form.CDTextBox.setFocus();
        		}
        		this.gfnAlert("대상자를 입력하세요!", "fnValidCallback");
        		return false;
        	}

        	return true;
        }


        this.fnAdd = function() {
        	//var nrow = this.gfnGridAdd(this.dxGrid);

        }

        /*
         *	삭제 버튼
         */
        this.fnDel = function() {
        	//this.gfnGridDel(this.dxGrid);
        }

        /*
         *	저장 버튼
         */
        this.fnSave = function() {
        	if(this.dsList.rowcount == 0) return;
        	this.fnSaveProc("S");
        }

        this.fnSaveProc = function(callType){

        	//저장이나 제출일때만 필수 체크
        	if(callType == "S" || callType == "C"){
        		// 그리드 필수항목 체크
        		if (!this.gfnGridValidate(this.dxGrid)) return;
        	}

        	this.dxGrid.updateToDataset();

        	this.dsSave.clearData();

        	this.fv_COL_SPLIT =	":";
        	this.fv_ROW_SPLIT =	";";
        	var sDS_RESULT = "";

        	for (var i = 0; i < this.dsList.rowcount; i++) {
        		var flag = this.gfnGetFlag(this.dsList, i);
        		if(flag == "#") continue;

        		var CD_ITEM = this.gfnNvl(this.dsList.getColumn(i, "CD_ITEM"), "");
        		var NO_POINT = this.gfnNvl(this.dsList.getColumn(i, "NO_POINT"), 0);
        		//CD_ITEM:NO_POINT;

        		sDS_RESULT +=  CD_ITEM + this.fv_COL_SPLIT + NO_POINT + this.fv_ROW_SPLIT;
        	}
        	//trace("2222", sDS_RESULT);

        	var nrow = this.dsSave.addRow();
        	this.dsSave.setColumn(nrow, "CD_CORP", this.dsSearch.getColumn(0, "CD_CORP"));
        	this.dsSave.setColumn(nrow, "YY_EVALUATION", this.dsSearch.getColumn(0, "YY_EVALUATION"));
        	this.dsSave.setColumn(nrow, "TY_EVALUATION", this.dsSearch.getColumn(0, "TY_EVALUATION"));
        	this.dsSave.setColumn(nrow, "ID_SABUN", this.dsSearch.getColumn(0, "ID_SABUN"));
        	this.dsSave.setColumn(nrow, "ID_ASSESSOR", this.dsSearch.getColumn(0, "ID_ASSESSOR"));
        	this.dsSave.setColumn(nrow, "DS_RESULT", sDS_RESULT);
        	this.dsSave.setColumn(nrow, "YN_CLOSE", callType == "C" ? "Y" : ""); //제출일 경우에는 Y 임시저장일 경우 빈값
        	this.dsSave.setColumn(nrow, "GR_SEARCH", this.FormInfo.GR_SEARCH);
        	this.dsSave.setColumn(nrow, "TY_AUTH", this.FormInfo.TY_AUTH);
        	this.dsSave.setColumn(nrow, "GR_DEPT", this.AuthClient.CD_DEPT);
        	this.dsSave.setColumn(nrow, "ID_USER", this.AuthClient.ID_USER);


        	if (this.dsSave.rowcount == 0) return;

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
        						strArg, 			// 입력갑스로 보낼 arguments, strFormData="20120607"
        						callBackFnc); // 통신방법 정의 [생략가능]
        }


        this.fnExcel = function() {
        	this.gfnExcelExport(this.dxGrid);
        }

        this.fnPrint = function() {
        }

        /************************************************************************
         * Validate
         ************************************************************************/

        /************************************************************************
         * 콜백 이벤트
         ************************************************************************/
        /*
         *	콜백 처리
         */
        this.fnCallback = function(svcID, errorCode, errorMsg)
        {
        	if (svcID == "select") {
        		this.gfnGridAfterSelect(this.dxGrid);

        		this.fnSelectAfter();
        	}
        	else if(svcID == "save") {
        		if (errorCode == 0) {
        			this.gfnAlert("저장이 완료되었습니다.");
        			this.FormBtns.Select.click();

        		} else {
        			this.gfnAlert(errorMsg);
        		}
        	}

        }
        this.fnSelectAfter = function(){

        	this.fnSetFormEnable();
        }


        /************************************************************************
         * 코드파인드 이벤트
         ************************************************************************/
        this.fnBeforeUserDataSetParam = function(id, dsUserParam, nrow) {
        	if(id == "ccfCD_CORP"){
        		;
        	}
        	else if (id == "ccfID_ASSESSOR") {
        		if(this.gfnIsNull(this.ccfCD_CORP.form.CDTextBox.value)){
        			this.gfnAlert("법인코드를 먼저 입력하세요.");
        			return false;
        		}
        		if(this.gfnIsNull(this.ccfYY_EVALUATION.form.TextBox.value)){
        			this.gfnAlert("평가년도를 먼저 입력하세요.");
        			return false;
        		}
        		if(this.gfnIsNull(this.cboTY_EVALUATION.value)){
        			this.gfnAlert("구분을 먼저 입력하세요.");
        			return false;
        		}
        		dsUserParam.setColumn(nrow, "CD_CORP", this.ccfCD_CORP.form.CDTextBox.value);
        		dsUserParam.setColumn(nrow, "YY_EVALUATION", this.ccfYY_EVALUATION.form.TextBox.value);
        		dsUserParam.setColumn(nrow, "TY_EVALUATION", this.cboTY_EVALUATION.value);
        		dsUserParam.setColumn(nrow, "GR_SEARCH", this.FormInfo.GR_SEARCH);
        		dsUserParam.setColumn(nrow, "ID_USER", this.AuthClient.ID_USER);
        	}
        	else if (id == "ccfID_SABUN") {
        		if(this.gfnIsNull(this.ccfCD_CORP.form.CDTextBox.value)){
        			this.gfnAlert("법인코드를 먼저 입력하세요.");
        			return false;
        		}
        		if(this.gfnIsNull(this.ccfYY_EVALUATION.form.TextBox.value)){
        			this.gfnAlert("평가년도를 먼저 입력하세요.");
        			return false;
        		}
        		if(this.gfnIsNull(this.cboTY_EVALUATION.value)){
        			this.gfnAlert("구분을 먼저 입력하세요.");
        			return false;
        		}
        		if(this.gfnIsNull(this.ccfID_ASSESSOR.form.CDTextBox.value)){
        			this.gfnAlert("평가자를 먼저 입력하세요.");
        			return false;
        		}
        		dsUserParam.setColumn(nrow, "CD_CORP", this.ccfCD_CORP.form.CDTextBox.value);
        		dsUserParam.setColumn(nrow, "YY_EVALUATION", this.ccfYY_EVALUATION.form.TextBox.value);
        		dsUserParam.setColumn(nrow, "TY_EVALUATION", this.cboTY_EVALUATION.value);
        		dsUserParam.setColumn(nrow, "ID_ASSESSOR", this.ccfID_ASSESSOR.form.CDTextBox.value);
        		dsUserParam.setColumn(nrow, "GR_SEARCH", this.FormInfo.GR_SEARCH);
        		dsUserParam.setColumn(nrow, "ID_USER", this.AuthClient.ID_USER);
        	}
        	return true;
        };

        this.fnAfterCDTextChanged = function(id, codeFindData) {
        	var arr = codeFindData;

        	if(id == "ccfCD_CORP"){
        		this.ccfID_ASSESSOR.form.fnCodeFindClear();
        		this.ccfID_SABUN.form.fnCodeFindClear();
        	}
        	else if (id == "ccfID_ASSESSOR") {
        		this.ccfID_SABUN.form.fnCodeFindClear();
        	}
        	else if (id == "ccfID_SABUN") {
        	}
        }

        /************************************************************************
         * 그리드 이벤트
         ************************************************************************/
        this.fnGrid_BeforeUserDataSetParam = function(id, dsUserParam, nrow) {
        	return true;
        }

        this.fnGrid_EnterCell = function(obj, row, cell) {
         	var colnm = this.gfnGridGetBindColumnNameByIndex(this.dxGrid, cell);

        	var bRtn = this.fnIsChangePossible();

        	if(bRtn == false){
        		return false;
        	}
        }

        this.fnGrid_AfterEdit = function(obj,e) {
        	if(e.columnid == "NO_POINT5"
        		|| e.columnid == "NO_POINT4"
        		|| e.columnid == "NO_POINT3"
        		|| e.columnid == "NO_POINT2"
        		|| e.columnid == "NO_POINT1"){

        		if(e.newvalue != e.oldvalue){

        			if(e.newvalue == 0){

        				obj.setColumn(e.row, "NO_POINT", 0);

        			}else if(e.newvalue == 1){
        				var colidx = parseInt(this.gfnRight(e.columnid,1));

        				trace("colidx", colidx);

        				this.fnSetUnCheck(obj, e.row, colidx);
        				obj.setColumn(e.row, "NO_POINT", colidx);

        			}
        		}
        	}
        }

        this.fnSetUnCheck = function(objDs, rowidx, colidx){
        	objDs.set_enableevent(false);
        	for(i=1;i<=5;i++){
        		if(colidx == i) continue;
        		objDs.setColumn(rowidx, "NO_POINT"+i, 0);
        	}
        	objDs.set_enableevent(true);
        }

        /************************************************************************
         * 확장버튼 이벤트
         ************************************************************************/

        /************************************************************************
         * 기타 이벤트
         ************************************************************************/
        this.dsSearch_onvaluechanged = function(obj,e){
        	if(e.oldvalue != e.newvalue) {
        		this.gfnSetFormStatus(this);	// 폼상태 초기화
        		this.gfnGridClear(this.dxGrid);
        		//this.gfnGridClear(this.dxGridHead);
        	}
        };


        this.fnIsChangePossible = function(){
        	var bPossible = true;

        	var today = this.gfnGetDate();

        	var YN_CLOSE = this.dsHead.getColumn(0, "YN_CLOSE");
        	if(YN_CLOSE == "Y"){
        		bPossible = false;
        	}

        	if(bPossible){
        		trace("fnIsChangePossible>>수정가능");
        	}else{
        		trace("fnIsChangePossible>>수정불가");
        	}

        	return bPossible;
        }


        this.fnSetFormEnable = function(){
        	var bRtn = this.fnIsChangePossible();

        	this.btnComplete.set_enable(bRtn);
        }


        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.form_onload,this);
            this.dsSearch.addEventHandler("onvaluechanged",this.dsSearch_onvaluechanged,this);
            this.dsList.addEventHandler("onvaluechanged",this.dsList_onvaluechanged,this);
        };
        this.loadIncludeScript("DAJ_UPTURN.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
