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
            this.set_titletext("인사 평가대상자 설정");
            if (Form == this.constructor)
            {
                this._setFormPosition(1280,850);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("_dsProc", this);
            obj._setContents("<ColumnInfo><Column id=\"TARGET\" type=\"STRING\" size=\"256\"/><Column id=\"SP\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"TARGET\">selectDate</Col><Col id=\"SP\">DAJPR_EVALUATION_DATE_SELECT</Col></Row><Row><Col id=\"TARGET\">select</Col><Col id=\"SP\">DAJPR_EVALUATION_SELF_SELECT</Col></Row><Row><Col id=\"TARGET\">save</Col><Col id=\"SP\">DAJPR_EVALUATION_SELF_SAVE</Col></Row><Row><Col id=\"TARGET\">save1</Col><Col id=\"SP\">DAJPR_EVALUATION_SELF_OPINION_SAVE</Col></Row><Row><Col id=\"TARGET\">dsSearchParam</Col><Col id=\"SP\">DAJPR_EVALUATION_SELF_CHECK</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsSearch", this);
            obj._setContents("<ColumnInfo><Column id=\"CD_CORP\" type=\"STRING\" size=\"256\"/><Column id=\"DS_CORP\" type=\"STRING\" size=\"256\"/><Column id=\"YY_EVALUATION\" type=\"STRING\" size=\"256\"/><Column id=\"TY_EVALUATION\" type=\"STRING\" size=\"256\"/><Column id=\"ID_SABUN\" type=\"STRING\" size=\"256\"/><Column id=\"DS_HNAME\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"CD_CORP\"/><Col id=\"DS_CORP\"/></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsList", this);
            obj._setContents("<ColumnInfo><Column id=\"CD_CORP\" type=\"STRING\" size=\"256\"/><Column id=\"DS_CORP\" type=\"STRING\" size=\"256\"/><Column id=\"YY_EVALUATION\" type=\"STRING\" size=\"256\"/><Column id=\"TY_EVALUATION\" type=\"STRING\" size=\"256\"/><Column id=\"ID_SABUN\" type=\"STRING\" size=\"256\"/><Column id=\"NO_SEQ\" type=\"BIGDECIMAL\" size=\"256\"/><Column id=\"CD_EVALUATION\" type=\"STRING\" size=\"256\"/><Column id=\"DS_EVALUATION\" type=\"STRING\" size=\"256\"/><Column id=\"CD_GROUP\" type=\"STRING\" size=\"256\"/><Column id=\"DS_GROUP\" type=\"STRING\" size=\"256\"/><Column id=\"CD_COMMENT\" type=\"STRING\" size=\"256\"/><Column id=\"DS_COMMENT\" type=\"STRING\" size=\"256\"/><Column id=\"DS_CONTENT\" type=\"STRING\" size=\"256\"/><Column id=\"CD_POINT\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsTY_EVALUATION", this);
            obj._setContents("<ColumnInfo><Column id=\"CD_CODE\" type=\"STRING\" size=\"256\"/><Column id=\"DS_CODE\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"CD_CODE\">01</Col><Col id=\"DS_CODE\">상반기</Col></Row><Row><Col id=\"CD_CODE\">02</Col><Col id=\"DS_CODE\">하반기</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsList1", this);
            obj._setContents("<ColumnInfo><Column id=\"CD_CORP\" type=\"STRING\" size=\"256\"/><Column id=\"YY_EVALUATION\" type=\"STRING\" size=\"256\"/><Column id=\"TY_EVALUATION\" type=\"STRING\" size=\"256\"/><Column id=\"ID_SABUN\" type=\"STRING\" size=\"256\"/><Column id=\"NO_POINT\" type=\"STRING\" size=\"256\"/><Column id=\"CD_POINT\" type=\"STRING\" size=\"256\"/><Column id=\"DS_OPINION\" type=\"STRING\" size=\"256\"/><Column id=\"CD_SLEDDING\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsCD_SLEDDING", this);
            obj._setContents("<ColumnInfo><Column id=\"CD_CODE\" type=\"STRING\" size=\"256\"/><Column id=\"DS_CODE\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"CD_CODE\">01</Col><Col id=\"DS_CODE\">작성중(임시저장)</Col></Row><Row><Col id=\"CD_CODE\">02</Col><Col id=\"DS_CODE\">제출</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsDate", this);
            obj._setContents("<ColumnInfo><Column id=\"CD_CORP\" type=\"STRING\" size=\"256\"/><Column id=\"YY_EVALUATION\" type=\"STRING\" size=\"256\"/><Column id=\"TY_EVALUATION\" type=\"STRING\" size=\"256\"/><Column id=\"FR_SELF\" type=\"STRING\" size=\"256\"/><Column id=\"TO_SELF\" type=\"STRING\" size=\"256\"/><Column id=\"FR_1ST\" type=\"STRING\" size=\"256\"/><Column id=\"TO_1ST\" type=\"STRING\" size=\"256\"/><Column id=\"FR_2ND\" type=\"STRING\" size=\"256\"/><Column id=\"TO_2ND\" type=\"STRING\" size=\"256\"/><Column id=\"FR_UPEVALUATION\" type=\"STRING\" size=\"256\"/><Column id=\"TO_UPEVALUATION\" type=\"STRING\" size=\"256\"/><Column id=\"FR_OTHER\" type=\"STRING\" size=\"256\"/><Column id=\"TO_OTHER\" type=\"STRING\" size=\"256\"/><Column id=\"YN_CLOSE\" type=\"STRING\" size=\"256\"/><Column id=\"DT_CLOSE\" type=\"STRING\" size=\"256\"/><Column id=\"DS_REMARK\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsSearchList", this);
            obj._setContents("<ColumnInfo><Column id=\"CD_CORP\" type=\"STRING\" size=\"256\"/><Column id=\"DS_CORP\" type=\"STRING\" size=\"256\"/><Column id=\"YY_EVALUATION\" type=\"STRING\" size=\"256\"/><Column id=\"TY_EVALUATION\" type=\"STRING\" size=\"256\"/><Column id=\"ID_SABUN\" type=\"STRING\" size=\"256\"/><Column id=\"DS_HNAME\" type=\"STRING\" size=\"256\"/><Column id=\"CD_DEPT\" type=\"STRING\" size=\"256\"/><Column id=\"DS_DEPT\" type=\"STRING\" size=\"256\"/><Column id=\"CD_POSITION\" type=\"STRING\" size=\"256\"/><Column id=\"DS_POSITION\" type=\"STRING\" size=\"256\"/><Column id=\"CD_SLEDDING\" type=\"STRING\" size=\"256\"/><Column id=\"DS_SLEDDING\" type=\"STRING\" size=\"256\"/><Column id=\"YN_CLOSE\" type=\"STRING\" size=\"256\"/><Column id=\"FR_SELF\" type=\"STRING\" size=\"256\"/><Column id=\"TO_SELF\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Div("divSearch","0","0",null,"78.0","0",null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_cssclass("div_SEARCH_Bg");
            obj.set_text("");
            this.addChild(obj.name, obj);

            obj = new Div("ccfCD_CORP","0.0","10.0","280","24.0",null,null,null,null,null,null,this.divSearch.form);
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

            obj = new Div("ccfYY_EVALUATION","staYY_EVALUATION:0.0","10.0","70","24.0",null,null,null,null,null,null,this.divSearch.form);
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

            obj = new Static("staCD_CORP","staTY_EVALUATION:0.0","10.0","92.0","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("2");
            obj.set_text("법인");
            obj.set_cssclass("sta_WF_SchLabelE");
            this.divSearch.addChild(obj.name, obj);

            obj = new Combo("cboTY_EVALUATION","staTY_EVALUATION:0.0","10.0","94","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("5");
            obj.set_innerdataset("dsTY_EVALUATION");
            obj.set_codecolumn("CD_CODE");
            obj.set_datacolumn("DS_CODE");
            obj.set_text("cbo00");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("staID_SABUN","cboTY_EVALUATION:0.0","10.0","92.0","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("7");
            obj.set_text("피평가자");
            obj.set_usedecorate("false");
            obj.set_cssclass("sta_WF_SchLabelE");
            this.divSearch.addChild(obj.name, obj);

            obj = new Div("ccfID_SABUN","staID_SABUN:0.0","10.0","210","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.getSetter("CodeFindName").set("DAX_EVAL_TARGET_CODEFIND");
            obj.getSetter("CDTextWidth").set("70");
            obj.set_taborder("6");
            obj.set_url("cmm::cmmCodeFind.xfdl");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("staCD_DEPT","0.0","ccfCD_CORP:10.0","92.0","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("8");
            obj.set_text("부서");
            obj.set_cssclass("sta_WF_SchLabelE");
            this.divSearch.addChild(obj.name, obj);

            obj = new Edit("edtCD_DEPT","staCD_DEPT:0.0","ccfCD_CORP:10.0","68","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("9");
            obj.set_value("");
            obj.set_readonly("true");
            obj.set_text("");
            this.divSearch.addChild(obj.name, obj);

            obj = new Edit("edtDS_DEPT","edtCD_DEPT:0.0","ccfCD_CORP:10.0","209","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("10");
            obj.set_readonly("true");
            obj.set_value("");
            obj.set_tabstop("ccfCD_CORP:10.0");
            obj.set_text("");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("staCD_POSITION","edtDS_DEPT:0.0","ccfCD_CORP:10.0","92.0","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("11");
            obj.set_text("직위");
            obj.set_cssclass("sta_WF_SchLabelE");
            this.divSearch.addChild(obj.name, obj);

            obj = new Edit("edtCD_POSITION","staCD_POSITION:0.0","ccfCD_CORP:10.0","70","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("12");
            obj.set_value("");
            obj.set_readonly("true");
            obj.set_text("");
            this.divSearch.addChild(obj.name, obj);

            obj = new Edit("edtDS_POSITION","edtCD_POSITION:0.0","ccfCD_CORP:10.0","153","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("13");
            obj.set_readonly("true");
            obj.set_value("");
            obj.set_tabstop("ccfCD_CORP:10.0");
            obj.set_text("");
            this.divSearch.addChild(obj.name, obj);

            obj = new Div("divData","0","divSearch:10",null,null,"0","0",null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_cssclass("div_DATA_Bg");
            obj.set_text("");
            this.addChild(obj.name, obj);

            obj = new Div("divTop","0","0",null,"30","0",null,null,null,null,null,this.divData.form);
            obj.set_taborder("4");
            obj.set_cssclass("div_SEARCH_Bg");
            this.divData.addChild(obj.name, obj);

            obj = new Calendar("calTO_SELF",null,"4","120","20","10",null,null,null,null,null,this.divData.form.divTop.form);
            obj.set_taborder("1");
            obj.set_dateformat("yyyy-MM-dd ddd");
            obj.set_readonly("true");
            obj.set_color("#0000ff");
            this.divData.form.divTop.addChild(obj.name, obj);

            obj = new Static("staID_SABUN00_00_00",null,"3","20","20","calTO_SELF:10",null,null,null,null,null,this.divData.form.divTop.form);
            obj.set_taborder("0");
            obj.set_text("~");
            obj.set_usedecorate("false");
            obj.set_textAlign("center");
            this.divData.form.divTop.addChild(obj.name, obj);

            obj = new Calendar("calFR_SELF",null,"4","120","20","staID_SABUN00_00_00:10",null,null,null,null,null,this.divData.form.divTop.form);
            obj.set_taborder("2");
            obj.set_dateformat("yyyy-MM-dd ddd");
            obj.set_readonly("true");
            obj.set_color("#0000ff");
            this.divData.form.divTop.addChild(obj.name, obj);

            obj = new Static("staID_SABUN00_00",null,"3","80","20","calFR_SELF:0",null,null,null,null,null,this.divData.form.divTop.form);
            obj.set_taborder("3");
            obj.set_text("자기평가기간");
            obj.set_usedecorate("false");
            this.divData.form.divTop.addChild(obj.name, obj);

            obj = new Combo("cboCD_SLEDDING",null,"4","128","20","staID_SABUN00_00:20",null,null,null,null,null,this.divData.form.divTop.form);
            obj.set_taborder("4");
            obj.set_innerdataset("dsCD_SLEDDING");
            obj.set_codecolumn("CD_CODE");
            obj.set_datacolumn("DS_CODE");
            obj.set_displaynulltext("작성중(임시저장)");
            obj.set_readonly("true");
            obj.set_color("#0000ff");
            this.divData.form.divTop.addChild(obj.name, obj);

            obj = new Static("staID_SABUN00",null,"3","110","20","cboCD_SLEDDING:0",null,null,null,null,null,this.divData.form.divTop.form);
            obj.set_taborder("5");
            obj.set_text("자기평가 진행상태");
            obj.set_usedecorate("false");
            this.divData.form.divTop.addChild(obj.name, obj);

            obj = new Static("staStatusMsg","10","3",null,"20","staID_SABUN00:20",null,null,null,null,null,this.divData.form.divTop.form);
            obj.set_taborder("6");
            obj.set_textAlign("left");
            obj.set_cssclass("sta_TITLE_Bg");
            this.divData.form.divTop.addChild(obj.name, obj);

            obj = new Grid("objGrid","0","divTop:1",null,"260","0",null,null,null,null,null,this.divData.form);
            obj.set_taborder("0");
            obj._setContents("");
            this.divData.addChild(obj.name, obj);

            obj = new Static("staDS_OPINION","0","objGrid:5",null,"22","170",null,null,null,null,null,this.divData.form);
            obj.set_taborder("1");
            obj.set_text("피평가자의 의견");
            obj.set_cssclass("sta_TITLE_Bg");
            this.divData.addChild(obj.name, obj);

            obj = new TextArea("txtDS_OPINION","10","staDS_OPINION:3",null,"159","10",null,null,null,null,null,this.divData.form);
            obj.set_taborder("2");
            this.divData.addChild(obj.name, obj);

            obj = new Static("sta00","11","txtDS_OPINION:4","396","29",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("3");
            this.divData.addChild(obj.name, obj);

            obj = new TextArea("txtDS_CONTENT","1240","txtDS_OPINION:5",null,"32","10",null,null,null,null,null,this.divData.form);
            obj.set_taborder("5");
            obj.set_visible("false");
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

            obj = new BindItem("item4","divSearch.form.ccfID_SABUN.form.CDTextBox","value","dsSearch","ID_SABUN");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item5","divSearch.form.ccfID_SABUN.form.DSTextBox","value","dsSearch","DS_HNAME");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item7","divData.form.txtDS_OPINION","value","dsList1","DS_OPINION");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item6","divData.form.divTop.form.calTO_SELF","value","dsSearchList","TO_SELF");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item8","divData.form.divTop.form.calFR_SELF","value","dsSearchList","FR_SELF");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item9","divData.form.divTop.form.cboCD_SLEDDING","value","dsList1","CD_SLEDDING");
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
        this.registerScript("DAJ_EVALUATION_SELF.xfdl", function() {
        this.objApp = this.gfnGetApplication();

        this.fv_initStatusMsg = "평가기간이 아닙니다.";

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
        /*
        //다른 화면에서 오픈해서 오는거였는데, 메뉴에서 여는걸로 바꿔서 주석으로 막음
        // 	if(!this.gfnIsNull(this.getOwnerFrame().CD_CORP) && !this.gfnIsNull(this.getOwnerFrame().ID_SABUN) ){
        //
        // 		this.ccfYY_EVALUATION.form.TextBox.set_value(this.getOwnerFrame().YY_EVALUATION); // 	평가년도
        // 		this.cboTY_EVALUATION.set_value(this.getOwnerFrame().TY_EVALUATION);	 // 	구분
        //
        // 		this.ccfCD_CORP.form.CDTextBox.set_value(this.getOwnerFrame().CD_CORP);		// 	법인
        // 		this.ccfCD_CORP.form.DSTextBox.set_value(this.getOwnerFrame().DS_CORP);
        //
        // 		this.ccfID_SABUN.form.CDTextBox.set_value(this.getOwnerFrame().ID_SABUN); // 	피평가자	사원번호
        // 		this.ccfID_SABUN.form.fnCodeFindLoad();
        //
        // 		this.edtCD_DEPT.set_value(this.getOwnerFrame().CD_DEPT);// 	피평가자	부서코드
        // 		this.edtDS_DEPT.set_value(this.getOwnerFrame().DS_DEPT);
        //
        // 		this.edtCD_POSITION.set_value(this.getOwnerFrame().CD_POSITION);// 	피평가자	직위코드
        // 		this.edtDS_POSITION.set_value(this.getOwnerFrame().DS_POSITION);
        //
        // 	}else{
        //
        // 		var today = this.gfnGetDate();
        // 		this.ccfYY_EVALUATION.form.TextBox.set_value(today.substr(0,4));
        // 		this.cboTY_EVALUATION.set_index(0);
        //
        // 		this.ccfCD_CORP.form.CDTextBox.set_value(this.AuthClient.CD_CORP);
        // 		this.ccfCD_CORP.form.DSTextBox.set_value(this.AuthClient.DS_CORP);
        //
        // 		if(this.FormInfo.GR_SEARCH == "9"){
        // 			this.ccfID_SABUN.form.CDTextBox.set_value(this.AuthClient.ID_SABUN);
        // 			this.ccfID_SABUN.form.fnCodeFindLoad();
        // 		}
        // 	}
        //
        // // 	if(this.FormInfo.GR_SEARCH == "1"){
        //  		this.ccfCD_CORP.set_enable(true);
        // // 	}else{
        // // 		this.ccfCD_CORP.set_enable(false);
        // // 	}
        // //
        // // 	if(this.FormInfo.GR_SEARCH == "9"){
        //  		this.ccfID_SABUN.set_enable(false);
        // // 	}else{
        // // 		this.ccfID_SABUN.set_enable(true);
        // // 	}
        //
        // 	this.ccfCD_CORP.set_enable(false);
        // 	this.ccfID_SABUN.set_enable(false);
        */
        //20220318
        // 	var today = this.gfnGetDate();
        // 	this.ccfYY_EVALUATION.form.TextBox.set_value(today.substr(0,4));
        // 	this.cboTY_EVALUATION.set_index(0);
        //
        // 	this.ccfCD_CORP.form.CDTextBox.set_value(this.AuthClient.CD_CORP);
        // 	this.ccfCD_CORP.form.DSTextBox.set_value(this.AuthClient.DS_CORP);
        	this.fnDsSearchParam();

        	if(this.FormInfo.GR_SEARCH == "9"){
        		this.ccfID_SABUN.form.CDTextBox.set_value(this.AuthClient.ID_SABUN);
        		this.ccfID_SABUN.form.fnCodeFindLoad();
        	}

        // 	if(this.FormInfo.GR_SEARCH == "1"){
        // 		this.ccfCD_CORP.set_enable(true);
        // 	}else{
        // 		this.ccfCD_CORP.set_enable(false);
        // 	}

        	if(this.FormInfo.GR_SEARCH == "9"){
        		this.ccfID_SABUN.set_enable(false);
        	}else{
        		this.ccfID_SABUN.set_enable(true);
        	}

        	//이거 주지 말것... 버그..남..
        	//this.dxGrid.set_autosizingtype("none");
        	//this.dxGrid.set_autosizingtype("row");


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
        };

        this.fnComplete = function(){

        	for(var i=0;i<this.dsList.rowcount;i++){
        		var CD_POINT = this.dsList.getColumn(i, "CD_POINT");
        		var CD_COMMENT = this.dsList.getColumn(i, "CD_COMMENT");
        		var DS_CONTENT = this.gfnTrim(this.dsList.getColumn(i, "DS_CONTENT"));

        // 		if(this.gfnIsNull(CD_POINT)){
        // 			this.gfnAlert("자기평가를 선택하세요!");
        // 			return;
        // 		}

        		//실적
        		if(CD_COMMENT == "ZZ"){
        			if(this.gfnIsNull(DS_CONTENT)){
        				this.gfnAlert("업무실적을 입력하세요!");
        				return;
        			}
        		}
        	}

        	var DS_OPINION = this.gfnTrim(this.divData.form.txtDS_OPINION.value);

        	if(this.gfnIsNull(DS_OPINION)){
        		this.gfnAlert("피평가의 의견을 입력하세요!");
        		return;
        	}


        	this.fnCompleteCallback = function(id, val){
        		if(val){
        			this.fnSaveProc("C"); //제출(완료)
        		}
        	}
        	this.gfnConfirm("제출 할 경우 수정이 불가 합니다.  계속 진행 하시겠습니까?", "fnCompleteCallback");
        }

        /************************************************************************
         * 변수 선언
         ************************************************************************/
        this.fnSetVariable = function() {
        	this.dxGrid = this.divData.form.objGrid;

        	this.ccfCD_CORP = this.divSearch.form.ccfCD_CORP;
        	this.ccfYY_EVALUATION = this.divSearch.form.ccfYY_EVALUATION;
        	this.cboTY_EVALUATION = this.divSearch.form.cboTY_EVALUATION;
        	this.ccfID_SABUN = this.divSearch.form.ccfID_SABUN;
        	this.calFR_SELF = this.divData.form.divTop.form.calFR_SELF;
        	this.calTO_SELF = this.divData.form.divTop.form.calTO_SELF;

        	this.edtCD_DEPT = this.divSearch.form.edtCD_DEPT;
        	this.edtDS_DEPT = this.divSearch.form.edtDS_DEPT;
        	this.edtCD_POSITION = this.divSearch.form.edtCD_POSITION;
        	this.edtDS_POSITION = this.divSearch.form.edtDS_POSITION;

        	//this.txtDS_CONTENT = this.divData.form.txtDS_CONTENT; //업무실적
        	this.txtDS_OPINION = this.divData.form.txtDS_OPINION; //피평가자의 의견

        	this.cboCD_SLEDDING = this.divData.form.divTop.form.cboCD_SLEDDING;
        };

        /************************************************************************
         * 이벤트 설정
         ************************************************************************/
        this.fnSetEvent = function() {
        	this.ccfCD_CORP.BeforeUserDataSetParam = "fnBeforeUserDataSetParam";
        	this.ccfCD_CORP.AfterCDTextChanged = "fnAfterCDTextChanged";

        	this.ccfID_SABUN.BeforeUserDataSetParam = "fnBeforeUserDataSetParam";
        	this.ccfID_SABUN.AfterCDTextChanged = "fnAfterCDTextChanged";

        	this.gfnGridInit(this.dxGrid, this.dsList, "DA", "DAJ_EVALUATION_SELF");


        	this.dxGrid.BeforeUserDataSetParam = "fnGrid_BeforeUserDataSetParam";	// 그리드 코드파인드 설정
        	this.dxGrid.AfterEdit = "fnGrid_AfterEdit";	// 셀 변경 후 이벤트

        	// 셀 수정가능 여부
        	this.dxGrid.EnterCell = "fnGrid_EnterCell";
        }

        /************************************************************************
         * 파라미터 설정
         ************************************************************************/
        this.fnSetParameter = function() {
        	this.dsSelectDate = new Dataset();
        	this.dsSelectDate.addColumn("CD_CORP", "string");
        	this.dsSelectDate.addColumn("YY_EVALUATION", "string");
        	this.dsSelectDate.addColumn("TY_EVALUATION", "string");
        	this.dsSelectDate.addColumn("GR_SEARCH", "string");
        	this.dsSelectDate.addColumn("TY_AUTH", "string");
        	this.dsSelectDate.addColumn("GR_DEPT", "string");
        	this.dsSelectDate.addColumn("ID_USER", "string");

        	this.dsSelect = new Dataset();
        	this.dsSelect.addColumn("CD_CORP", "string");
        	this.dsSelect.addColumn("YY_EVALUATION", "string");
        	this.dsSelect.addColumn("TY_EVALUATION", "string");
        	this.dsSelect.addColumn("ID_SABUN", "string");
        	this.dsSelect.addColumn("GR_SEARCH", "string");
        	this.dsSelect.addColumn("TY_AUTH", "string");
        	this.dsSelect.addColumn("GR_DEPT", "string");
        	this.dsSelect.addColumn("ID_USER", "string");

        	this.dsSave = new Dataset();
        	this.dsSave.addColumn("TY_SAVE", "string");
        	this.dsSave.addColumn("CD_CORP", "string");
        	this.dsSave.addColumn("YY_EVALUATION", "string");
        	this.dsSave.addColumn("TY_EVALUATION", "string");
        	this.dsSave.addColumn("ID_SABUN", "string");
        	this.dsSave.addColumn("NO_SEQ", "int");
        	this.dsSave.addColumn("CD_GROUP", "string");
        	this.dsSave.addColumn("CD_COMMENT", "string");
        	this.dsSave.addColumn("DS_CONTENT", "string");
        	this.dsSave.addColumn("NO_POINT", "int");
        	this.dsSave.addColumn("CD_POINT", "string");
        	this.dsSave.addColumn("NO_1ST_POINT", "int");
        	this.dsSave.addColumn("CD_1ST_POINT", "string");
        	this.dsSave.addColumn("NO_2ND_POINT", "int");
        	this.dsSave.addColumn("CD_2ND_POINT", "string");
        	this.dsSave.addColumn("DS_REMARK", "string");
        	this.dsSave.addColumn("GR_SEARCH", "string");
        	this.dsSave.addColumn("TY_AUTH", "string");
        	this.dsSave.addColumn("GR_DEPT", "string");
        	this.dsSave.addColumn("ID_USER", "string");

        	this.dsSave1 = new Dataset();
        	this.dsSave1.addColumn("TY_SAVE", "string");
        	this.dsSave1.addColumn("CD_CORP", "string");
        	this.dsSave1.addColumn("YY_EVALUATION", "string");
        	this.dsSave1.addColumn("TY_EVALUATION", "string");
        	this.dsSave1.addColumn("ID_SABUN", "string");
        	this.dsSave1.addColumn("NO_POINT", "int");
        	this.dsSave1.addColumn("CD_POINT", "string");
        	this.dsSave1.addColumn("DS_OPINION", "string");
        	this.dsSave1.addColumn("CD_SLEDDING", "string");
        	this.dsSave1.addColumn("GR_SEARCH", "string");
        	this.dsSave1.addColumn("TY_AUTH", "string");
        	this.dsSave1.addColumn("GR_DEPT", "string");
        	this.dsSave1.addColumn("ID_USER", "string");

        	this.dsSearchSelect = new Dataset();
        	this.dsSearchSelect.addColumn("CD_CORP", "string");
        	this.dsSearchSelect.addColumn("ID_SABUN", "string");
        	this.dsSearchSelect.addColumn("YY_EVALUATION", "string");
        	this.dsSearchSelect.addColumn("TY_EVALUATION", "string");
        	this.dsSearchSelect.addColumn("GR_SEARCH", "string");
        	this.dsSearchSelect.addColumn("TY_AUTH", "string");
        	this.dsSearchSelect.addColumn("GR_DEPT", "string");
        	this.dsSearchSelect.addColumn("ID_USER", "string");

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
        	this.gfnSetFormStatus(this);

        	this.divData.form.divTop.form.staStatusMsg.set_text(this.fv_initStatusMsg);

        	this.dsSelect.clearData();
        	this.dsSelect.addRow();
        	this.dsSelect.setColumn(0, "CD_CORP", this.dsSearch.getColumn(0, "CD_CORP"));
        	this.dsSelect.setColumn(0, "YY_EVALUATION", this.dsSearch.getColumn(0, "YY_EVALUATION"));
        	this.dsSelect.setColumn(0, "TY_EVALUATION", this.dsSearch.getColumn(0, "TY_EVALUATION"));
        	this.dsSelect.setColumn(0, "ID_SABUN", this.dsSearch.getColumn(0, "ID_SABUN"));
        	this.dsSelect.setColumn(0, "GR_SEARCH", this.FormInfo.GR_SEARCH);
        	this.dsSelect.setColumn(0, "TY_AUTH", this.FormInfo.TY_AUTH);
        	this.dsSelect.setColumn(0, "GR_DEPT", this.AuthClient.CD_DEPT);
        	this.dsSelect.setColumn(0, "ID_USER", this.AuthClient.ID_USER);

        	this.dsSelectDate.clearData();
        	this.dsSelectDate.addRow();
        	this.dsSelectDate.setColumn(0, "CD_CORP", this.dsSearch.getColumn(0, "CD_CORP"));
        	this.dsSelectDate.setColumn(0, "YY_EVALUATION", this.dsSearch.getColumn(0, "YY_EVALUATION"));
        	this.dsSelectDate.setColumn(0, "TY_EVALUATION", this.dsSearch.getColumn(0, "TY_EVALUATION"));
        	this.dsSelectDate.setColumn(0, "GR_SEARCH", this.FormInfo.GR_SEARCH);
        	this.dsSelectDate.setColumn(0, "TY_AUTH", this.FormInfo.TY_AUTH);
        	this.dsSelectDate.setColumn(0, "GR_DEPT", this.AuthClient.CD_DEPT);
        	this.dsSelectDate.setColumn(0, "ID_USER", this.AuthClient.ID_USER);

        	var strSvcId    = "select";
        	var strSvcType  = "grid";
        	var inProc		= "_dsProc";
        	var inData      = "select=dsSelect selectDate=dsSelectDate";
        	var outData     = "dsList=select0 dsList1=select1 dsDate=selectDate0";
        	//var outData     = "dsList=select0";
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
        		this.gfnAlert("구분을 입력하세요!", "fnValidCallback");
        		return false;
        	}
        	if(this.gfnIsNull(this.ccfID_SABUN.form.CDTextBox.value)){
        		this.fnValidCallback = function(){
        			this.ccfID_SABUN.form.CDTextBox.setFocus();
        		}
        		this.gfnAlert("피평가자를 입력하세요!", "fnValidCallback");
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

        	this.fnDelConfirmCallback = function(id, val){
        		//trace("fnDelConfirmCallback>>"+id, val);
        		if(val){
        			for(var i=0;i<this.dsList.rowcount;i++){
        				this.dsList.setColumn(i, this.ucFlag, "D");
        			}

        			//this.txtDS_CONTENT.set_value("");
        			this.txtDS_OPINION.set_value("");

        			this.fnSaveProc("D");
        		}
        	}
        	this.gfnConfirm("삭제하시겠습니까?", "fnDelConfirmCallback");
        	return;
        }

        /*
         *	저장 버튼
         */
        this.fnSave = function() {
        	this.fnSaveProc("S");
        }

        this.fnSaveProc = function(callType){

        	this.dxGrid.updateToDataset();

        	//저장이나 제출일때만 필수 체크
        	if(callType == "S" || callType == "C"){
        		// 그리드 필수항목 체크
        		if (!this.gfnGridValidate(this.dxGrid)) return;

        		if(callType == "C"){
        		}
        	}


        	this.dsSave.clearData();
        	this.dsSave1.clearData();

        // 	var nFindRow = this.dsList.findRowExpr( "CD_COMMENT == 'ZZ'" );
        // 	if(nFindRow != -1){
        // 		this.dsList.setColumn(nFindRow, "DS_CONTENT", this.txtDS_CONTENT.value);
        // 	}

        	for (var i = 0; i < this.dsList.rowcount; i++) {
         		var flag = this.gfnGetFlag(this.dsList, i);
        		if(flag == "#") continue;

        		var nrow = this.dsSave.addRow();
        		this.dsSave.setColumn(nrow, "TY_SAVE", flag == "D" ? "D" : this.dsList.getColumn(i, "CRUD_FLAG"));
        		this.dsSave.setColumn(nrow, "CD_CORP", this.dsList.getColumn(i, "CD_CORP"));
        		this.dsSave.setColumn(nrow, "YY_EVALUATION", this.dsList.getColumn(i, "YY_EVALUATION"));
        		this.dsSave.setColumn(nrow, "TY_EVALUATION", this.dsList.getColumn(i, "TY_EVALUATION"));
        		this.dsSave.setColumn(nrow, "ID_SABUN", this.dsList.getColumn(i, "ID_SABUN"));
        		this.dsSave.setColumn(nrow, "NO_SEQ", this.dsList.getColumn(i, "NO_SEQ"));
        		this.dsSave.setColumn(nrow, "CD_GROUP", this.gfnNvl(this.dsList.getColumn(i, "CD_GROUP"), ""));
        		this.dsSave.setColumn(nrow, "CD_COMMENT", this.gfnNvl(this.dsList.getColumn(i, "CD_COMMENT"), ""));
        		this.dsSave.setColumn(nrow, "DS_CONTENT", this.gfnNvl(this.dsList.getColumn(i, "DS_CONTENT"), ""));
        		this.dsSave.setColumn(nrow, "NO_POINT", 0);//this.dsList.getColumn(i, "NO_POINT"));
        		this.dsSave.setColumn(nrow, "CD_POINT", this.gfnNvl(this.dsList.getColumn(i, "CD_POINT"), ""));
        		this.dsSave.setColumn(nrow, "NO_1ST_POINT", 0);//this.dsList.getColumn(i, "NO_1ST_POINT"));
        		this.dsSave.setColumn(nrow, "CD_1ST_POINT", "");//this.dsList.getColumn(i, "CD_1ST_POINT"));
        		this.dsSave.setColumn(nrow, "NO_2ND_POINT", 0);//this.dsList.getColumn(i, "NO_2ND_POINT"));
        		this.dsSave.setColumn(nrow, "CD_2ND_POINT", "");//this.dsList.getColumn(i, "CD_2ND_POINT"));
        		this.dsSave.setColumn(nrow, "DS_REMARK", "");//this.dsList.getColumn(i, "DS_REMARK"));
        		this.dsSave.setColumn(nrow, "GR_SEARCH", this.FormInfo.GR_SEARCH);
        		this.dsSave.setColumn(nrow, "TY_AUTH", this.FormInfo.TY_AUTH);
        		this.dsSave.setColumn(nrow, "GR_DEPT", this.AuthClient.CD_DEPT);
        		this.dsSave.setColumn(nrow, "ID_USER", this.AuthClient.ID_USER);
        	}

        	this.dsSave1.addRow();
        	this.dsSave1.setColumn(0, "TY_SAVE", "U");
        	this.dsSave1.setColumn(0, "CD_CORP", this.dsList1.getColumn(0, "CD_CORP"));
        	this.dsSave1.setColumn(0, "YY_EVALUATION", this.dsList1.getColumn(0, "YY_EVALUATION"));
        	this.dsSave1.setColumn(0, "TY_EVALUATION", this.dsList1.getColumn(0, "TY_EVALUATION"));
        	this.dsSave1.setColumn(0, "ID_SABUN", this.dsList1.getColumn(0, "ID_SABUN"));
        	this.dsSave1.setColumn(0, "NO_POINT", this.dsList1.getColumn(0, "NO_POINT"));
        	this.dsSave1.setColumn(0, "CD_POINT", this.gfnNvl(this.dsList1.getColumn(0, "CD_POINT"), ""));
        	this.dsSave1.setColumn(0, "DS_OPINION", this.gfnNvl(this.dsList1.getColumn(0, "DS_OPINION"), ""));
        	this.dsSave1.setColumn(0, "CD_SLEDDING", callType == "C" ? "02" : "01"); //(01 작성중(임시저장) ,02 제출)
        	this.dsSave1.setColumn(0, "GR_SEARCH", this.FormInfo.GR_SEARCH);
        	this.dsSave1.setColumn(0, "TY_AUTH", this.FormInfo.TY_AUTH);
        	this.dsSave1.setColumn(0, "GR_DEPT", this.AuthClient.CD_DEPT);
        	this.dsSave1.setColumn(0, "ID_USER", this.AuthClient.ID_USER);

        	if (this.dsSave.rowcount == 0 || this.dsSave1.rowcount == 0) return;

        	var strSvcId    = "save_"+callType;
        	var strSvcType  = "save";
        	var inProc		= "_dsProc";
        	var inData      = "save=dsSave save1=dsSave1";
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

        this.fnDsSearchParam = function() {
        	this.dsSearchSelect.clearData();
        	this.dsSearchSelect.addRow();

        	this.dsSearchSelect.setColumn(0, "CD_CORP", this.AuthClient.CD_CORP);
        	this.dsSearchSelect.setColumn(0, "ID_SABUN", !this.gfnIsNull(this.dsSearch.getColumn(0, "ID_SABUN")) ? this.dsSearch.getColumn(0, "ID_SABUN") : this.AuthClient.ID_USER);
        	this.dsSearchSelect.setColumn(0, "YY_EVALUATION", this.dsSearch.getColumn(0, "YY_EVALUATION"));
        	this.dsSearchSelect.setColumn(0, "TY_EVALUATION", this.dsSearch.getColumn(0, "TY_EVALUATION"));
        	this.dsSearchSelect.setColumn(0, "GR_SEARCH", this.FormInfo.GR_SEARCH);
        	this.dsSearchSelect.setColumn(0, "TY_AUTH", this.FormInfo.TY_AUTH);
        	this.dsSearchSelect.setColumn(0, "GR_DEPT", this.AuthClient.CD_DEPT);
        	this.dsSearchSelect.setColumn(0, "ID_USER", this.AuthClient.ID_USER);

        	var strSvcId    = "dsSearchSelect";
        	var strSvcType  = "grid";
        	var inProc		= "_dsProc";
        	var inData      = "dsSearchParam=dsSearchSelect";
        	var outData     = "dsSearchList=dsSearchParam0";
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
        	if(svcID == "dsSearchSelect"){
        		if (errorCode == 0) {
        			this.dsSearch.setColumn(0, "CD_CORP", this.dsSearchList.getColumn(0, "CD_CORP"));
        			this.ccfCD_CORP.form.fnCodeFindLoad();
        			this.dsSearch.setColumn(0, "YY_EVALUATION", this.dsSearchList.getColumn(0, "YY_EVALUATION"));
        			this.dsSearch.setColumn(0, "TY_EVALUATION", this.dsSearchList.getColumn(0, "TY_EVALUATION"));
        			this.dsSearch.setColumn(0, "ID_SABUN", this.dsSearchList.getColumn(0, "ID_SABUN"));
        			this.dsCD_SLEDDING.setColumn(0, "CD_CODE", this.dsSearchList.getColumn(0, "CD_SLEDDING"));
        			this.dsCD_SLEDDING.setColumn(0, "DS_CODE", this.dsSearchList.getColumn(0, "DS_SLEDDING"));

        			if(this.dsSearchList.getColumn(0, "YN_CLOSE") == "Y"){
        				this.btnComplete.set_enable(false);
        				this.dxGrid.set_enable(false);
        				this.txtDS_OPINION.set_enable(false);
        			}else{
        				this.btnComplete.set_enable(true);
        				this.dxGrid.set_enable(true);
        				this.txtDS_OPINION.set_enable(true);
        			}
        		}else{
        			this.gfnAlert(errorMsg);
        		}
        	}
        	else if (svcID == "select") {
        		this.gfnGridAfterSelect(this.dxGrid);
        		this.fnSelectAfter();

        		this.fnSetFormEnable();
        	}
        	else if(svcID.startsWith("save_")) {
        		var arrSvcID = svcID.split("_");

        		if (errorCode == 0) {
        			var sMsg = "";
        			if(arrSvcID[1] == "S"){ //저장
        				sMsg = "저장이 완료되었습니다.";
        			}
        			else if(arrSvcID[1] == "D"){ //삭제
        				sMsg = "삭제가 완료되었습니다.";
        			}
        			else if(arrSvcID[1] == "C"){ //제출(완료)
        				sMsg = "제출이 완료되었습니다.";
        			}

        			this.gfnAlert(sMsg);
        			this.FormBtns.Select.click();

        		} else {
        			this.gfnAlert(errorMsg);
        		}
        	}
        }

        this.fnSelectAfter = function(){
        	this.fnSetRealRowSize();

        // 	this.txtDS_CONTENT.set_value("");
        // 	var nFindRow = this.dsList.findRowExpr( "CD_COMMENT == 'ZZ'" );
        // 	if(nFindRow != -1){
        // 		var DS_CONTENT = this.dsList.getColumn(nFindRow, "DS_CONTENT");
        // 		this.txtDS_CONTENT.set_value(DS_CONTENT);
        // 	}

        }

        //업무실적 textarea 처리
        //그리드에서 textarea 형식으로 입력일 잘안되어서 이렇게 처리함.
        this.fnSetRealRowSize = function(){
        	var nrowSizeSum = 0;

        	var rowSize = 200;
        	// 그리드 높이 조절
        	for(var i=0;i < this.dsList.rowcount;i++){
        		var CD_COMMENT = this.dsList.getColumn(i, "CD_COMMENT");

        		this.dxGrid.setRealRowSize(i, rowSize);

        		nrowSizeSum += this.dxGrid.getRealRowSize(i);
        	}

        	//trace("nrowSizeSum", nrowSizeSum);
        	//trace("this.divData.form.objGrid.height", this.divData.form.objGrid.height);

        	var nGridHeight = this.divData.form.objGrid.height;
        	if(nrowSizeSum > nGridHeight){
        		nGridHeight = nrowSizeSum + 50;
        	}
        	//if(nGridHeight > 1000){
        	//	nGridHeight = 1000;
        	//}

        	this.divData.form.objGrid.set_height(nGridHeight);
        	this.divData.form.resetScroll();
        }


        //this.dxGrid.set_autosizingtype("row") 줄때 사용하던거 back
        //근데 set_autosizingtype 주면 버그가있어서 ..막음
        // this.fnSetRealRowSize_back = function(){
        // 	var nrowSizeSum = 0;
        //
        // 	// 그리드 높이 조절
        // 	for(var i=0;i < this.dsList.rowcount;i++){
        // 		var CD_COMMENT = this.dsList.getColumn(i, "CD_COMMENT");
        //
        // 		var rowSize = this.dxGrid.getRealRowSize(i);
        //
        //
        // 		if(CD_COMMENT == "ZZ"){
        // // 			//trace(i, rowSize);
        // 			if(rowSize < 200){
        // 				rowSize = 200;
        // 				this.dxGrid.setRealRowSize(i, rowSize);
        // 			}
        //
        // 			//this.dxGrid.setRealRowSize(i, 0); //숨기기
        // 		}
        //
        // 		nrowSizeSum += rowSize;
        // 	}
        //
        // 	//trace("nrowSizeSum", nrowSizeSum);
        // 	//trace("this.divData.form.objGrid.height", this.divData.form.objGrid.height);
        //
        // 	var nGridHeight = this.divData.form.objGrid.height;
        // 	if(nrowSizeSum > nGridHeight){
        // 		nGridHeight = nrowSizeSum + 50;
        // 	}
        // 	//if(nGridHeight > 1000){
        // 	//	nGridHeight = 1000;
        // 	//}
        //
        // 	this.divData.form.objGrid.set_height(nGridHeight);
        // 	this.divData.form.resetScroll();
        //
        // }


        /************************************************************************
         * 코드파인드 이벤트
         ************************************************************************/
        this.fnBeforeUserDataSetParam = function(id, dsUserParam, nrow) {
        	if(id == "ccfCD_CORP"){
        	}
        	else if (id == "ccfID_SABUN") {
        		if(this.gfnIsNull(this.ccfCD_CORP.form.CDTextBox.value)){
        			this.gfnAlert("법인코드를 먼저 입력하세요.");
        			return false;
        		}

        		dsUserParam.setColumn(nrow, "CD_CORP", this.dsSearch.getColumn(0, "CD_CORP"));
        		dsUserParam.setColumn(nrow, "YY_EVALUATION", this.dsSearch.getColumn(0, "YY_EVALUATION"));
        		dsUserParam.setColumn(nrow, "TY_EVALUATION", this.dsSearch.getColumn(0, "TY_EVALUATION"));
        		dsUserParam.setColumn(nrow, "GR_SEARCH", this.FormInfo.GR_SEARCH);
        		dsUserParam.setColumn(nrow, "ID_USER", this.AuthClient.ID_USER);
        	}
        	return true;
        };

        this.fnAfterCDTextChanged = function(id, codeFindData) {
        	var arr = codeFindData;

        	if(id == "ccfCD_CORP"){
        	}
        	if (id == "ccfID_SABUN") {
        		if(arr.length > 0){
        			this.divSearch.form.edtCD_DEPT.set_value(arr[0]["CD_DEPT"]);
        			this.divSearch.form.edtDS_DEPT.set_value(arr[0]["DS_DEPT"]);

        			this.divSearch.form.edtCD_POSITION.set_value(arr[0]["CD_POSITION"]);
        			this.divSearch.form.edtDS_POSITION.set_value(arr[0]["DS_POSITION"]);

        		}else{
        			this.divSearch.form.edtCD_DEPT.set_value("");
        			this.divSearch.form.edtDS_DEPT.set_value("");

        			this.divSearch.form.edtCD_POSITION.set_value("");
        			this.divSearch.form.edtDS_POSITION.set_value("");
        		}

        		this.fnDsSearchParam();
        	}
        }

        /************************************************************************
         * 그리드 이벤트
         ************************************************************************/
        this.fnGrid_BeforeUserDataSetParam = function(id, dsUserParam, nrow) {
        	return true;
        }

        this.fnGrid_AfterEdit = function(obj,e) {
        }

        this.fnGrid_EnterCell = function(obj, row, cell) {
         	var colnm = this.gfnGridGetBindColumnNameByIndex(this.dxGrid, cell);


        	var bRtn = true; //this.fnIsChangePossible();

        	if(bRtn == false){
        		return false;
        	}
        	if(colnm == "DS_CONTENT"){
        		if(this.dsList.getColumn(row, "CD_COMMENT") != "ZZ") {
        			return false;
        		}
        	}

        // 공통 > Setting > 그리드정보 에서 셋팅한 내용대로
           var nGrdSpcRow = this.dsGridSpec.findRow( "DS_FIELD", colnm);
           var YN_READONLY = this.dsGridSpec.getColumn(nGrdSpcRow, "YN_READONLY");
           if(YN_READONLY == "Y") return false;
           if(YN_READONLY =="U" && (this.gfnIsNull(rowFlag) || rowFlag == "U")){   // flag 가 U 이거나 빈값
              return false;
           }

        	return true;
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

        		if(e.columnid == "ID_SABUN"){
        			//this.FormBtns.Select.click();
        			//this.fnDsSearchParam();
        		}
        	}
        };

        this.divData_txtDS_OPINION_onkeydown = function(obj,e){
        	this.gfnSetFormStatus(this, "U");
        };


        this.fnIsChangePossible = function(){
        	var bPossible = true;

        	var today = this.gfnGetDate();

        	var sStatusMsg = this.fv_initStatusMsg;


        	if(this.dsDate.rowcount == 0){
        		//trace("평가기간없음");
        		bPossible = false;
        		sStatusMsg = "평가기간이 아닙니다.";
        	}else{

        		var FR_SELF = this.gfnNvl(this.dsDate.getColumn(0, "FR_SELF"), "00000000"); //자기평가 시작일
        		var TO_SELF = this.gfnNvl(this.dsDate.getColumn(0, "TO_SELF"), "99999999");	//자기평가 종료일
        		var YN_CLOSE = this.gfnNvl(this.dsDate.getColumn(0, "YN_CLOSE"), "N");	//마감여부

        		var CD_SLEDDING = this.gfnNvl(this.dsList1.getColumn(0, "CD_SLEDDING"), "01"); //(01 작성중(임시저장) ,02 제출)

        		if(YN_CLOSE == "Y"){
        			bPossible = false;
        			//trace("마감");
        			sStatusMsg = "평가 마감되었습니다.";
        		}else{
        			if(today >= FR_SELF && today <= TO_SELF){
        				if(CD_SLEDDING != "01"){
        					bPossible = false;
        					//trace("제출상태");
        					sStatusMsg = "자기평가 제출되었습니다.";
        				}else{
        					sStatusMsg = "자기평가기간입니다.";
        				}
        			}else{
        				bPossible = false;
        				//trace("기간종료");
        				sStatusMsg = "자기평가 입력 기간이 종료되었습니다.";
        			}
        		}
        	}

        	if(bPossible){
        		trace("fnIsChangePossible>>수정가능");
        	}else{
        		trace("fnIsChangePossible>>수정불가");
        	}

        	this.divData.form.divTop.form.staStatusMsg.set_text(sStatusMsg);

        	return bPossible;
        }

        this.fnSetFormEnable = function(){
        	var bRtn = this.fnIsChangePossible();

        // 	this.divData.form.txtDS_CONTENT.set_enable(bRtn);
         	this.divData.form.txtDS_OPINION.set_enable(bRtn);

        	this.FormBtns.Del.set_enable(bRtn);
        	this.FormBtns.Save.set_enable(bRtn);

        	this.btnComplete.set_enable(bRtn);

        	this.fnDsSearchParam();

        }
        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.form_onload,this);
            this.divData.form.txtDS_OPINION.addEventHandler("onkeydown",this.divData_txtDS_OPINION_onkeydown,this);
            this.dsSearch.addEventHandler("onvaluechanged",this.dsSearch_onvaluechanged,this);
        };
        this.loadIncludeScript("DAJ_EVALUATION_SELF.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
