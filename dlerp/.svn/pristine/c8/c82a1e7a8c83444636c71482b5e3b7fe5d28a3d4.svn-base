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
            this.set_titletext("평가항목 기본정보");
            this.getSetter("maxwidth").set("650");
            this.getSetter("maxheight").set("500");
            if (Form == this.constructor)
            {
                this._setFormPosition(630,450);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("_dsProc", this);
            obj._setContents("<ColumnInfo><Column id=\"TARGET\" type=\"STRING\" size=\"256\"/><Column id=\"SP\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"TARGET\">save</Col><Col id=\"SP\">DAJPR_EVAL_ITEMS_SAVE</Col></Row><Row><Col id=\"TARGET\">combo</Col><Col id=\"SP\">DAXPR_EVAL_TERMS_CODEFIND</Col></Row><Row><Col id=\"TARGET\">comboStd</Col><Col id=\"SP\">DAZPR_COMMONCODE_COMBO</Col></Row><Row><Col id=\"TARGET\">comboTy</Col><Col id=\"SP\">DAZPR_COMMONCODE_COMBO</Col></Row><Row><Col id=\"TARGET\">comboGrp</Col><Col id=\"SP\">DAXPR_EVAL_GRADES_COMBO</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsSearch", this);
            obj._setContents("");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsList", this);
            obj._setContents("");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsSave", this);
            obj._setContents("<ColumnInfo><Column id=\"TY_SAVE\" type=\"STRING\" size=\"256\"/><Column id=\"TERM_EVAL\" type=\"STRING\" size=\"256\"/><Column id=\"TY_EVAL\" type=\"STRING\" size=\"256\"/><Column id=\"STD_EVAL\" type=\"STRING\" size=\"256\"/><Column id=\"ITEM_EVAL\" type=\"STRING\" size=\"256\"/><Column id=\"SERV_EVAL\" type=\"STRING\" size=\"256\"/><Column id=\"REF_ITEM\" type=\"STRING\" size=\"256\"/><Column id=\"CD_EVALGROUP\" type=\"STRING\" size=\"256\"/><Column id=\"SABUN\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsTERM_EVAL", this);
            obj._setContents("<ColumnInfo><Column id=\"CD_CODE\" type=\"STRING\" size=\"256\"/><Column id=\"DS_CODE\" type=\"STRING\" size=\"256\"/><Column id=\"TERM_EVAL\" type=\"STRING\" size=\"256\"/><Column id=\"YN_STRUCTFINI\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsSTD_EVAL", this);
            obj._setContents("<ColumnInfo><Column id=\"CD_CODE\" type=\"STRING\" size=\"256\"/><Column id=\"DS_CODE\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsTY_EVAL", this);
            obj._setContents("<ColumnInfo><Column id=\"CD_CODE\" type=\"STRING\" size=\"256\"/><Column id=\"DS_CODE\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsCD_GROUP", this);
            obj._setContents("<ColumnInfo><Column id=\"CD_CODE\" type=\"STRING\" size=\"256\"/><Column id=\"DS_CODE\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Div("divData","0","0",null,"400","0",null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_cssclass("div_DATA_Bg");
            obj.set_text("");
            this.addChild(obj.name, obj);

            obj = new Static("staTITLE","0","0","610","30",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("0");
            obj.set_text("평가항목 기본정보");
            obj.set_cssclass("sta_TITLE_Bg");
            this.divData.addChild(obj.name, obj);

            obj = new Static("staTERM_EVAL","0","staTITLE:5","87","30",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("1");
            obj.set_text("평가기수");
            obj.set_textAlign("center");
            obj.set_cssclass("sta_WF_tablelabelE");
            this.divData.addChild(obj.name, obj);

            obj = new Static("staTY_EVAL","0","staTERM_EVAL:-1","87","30",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("3");
            obj.set_text("평가구분");
            obj.set_textAlign("center");
            obj.set_cssclass("sta_WF_tablelabelE");
            this.divData.addChild(obj.name, obj);

            obj = new Static("staSTD_EVAL","0","staTY_EVAL:-1","87","30",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("4");
            obj.set_text("평가기준");
            obj.set_textAlign("center");
            obj.set_cssclass("sta_WF_tablelabelE");
            this.divData.addChild(obj.name, obj);

            obj = new Static("staITEM_EVAL","0","staSTD_EVAL:-1","87","30",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("1");
            obj.set_text("평가요소");
            obj.set_textAlign("center");
            obj.set_cssclass("sta_WF_tablelabelE");
            this.divData.addChild(obj.name, obj);

            obj = new Static("staCD_EVALGROUP","0","staITEM_EVAL:-1","87","30",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("1");
            obj.set_text("평가등급그룹");
            obj.set_textAlign("center");
            obj.set_cssclass("sta_WF_tablelabelE");
            this.divData.addChild(obj.name, obj);

            obj = new Static("staSERV_EVAL","0","staCD_EVALGROUP:-1","87","90",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("2");
            obj.set_text("평가내용");
            obj.set_cssclass("sta_WF_tablelabel");
            obj.set_textAlign("center");
            this.divData.addChild(obj.name, obj);

            obj = new Static("staREF_ITEM","0","staSERV_EVAL:-1","87","90",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("5");
            obj.set_text("비고");
            obj.set_cssclass("sta_WF_tablelabel");
            obj.set_textAlign("center");
            this.divData.addChild(obj.name, obj);

            obj = new Static("staBg1","staTERM_EVAL:-1","staTITLE:5","524","30",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("1");
            obj.set_cssclass("sta_WF_tablebg");
            this.divData.addChild(obj.name, obj);

            obj = new Static("staBg2","staTY_EVAL:-1","staBg1:-1","524","30",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("7");
            obj.set_cssclass("sta_WF_tablebg");
            this.divData.addChild(obj.name, obj);

            obj = new Static("staBg3","staSTD_EVAL:-1","staBg2:-1","524","30",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("8");
            obj.set_cssclass("sta_WF_tablebg");
            this.divData.addChild(obj.name, obj);

            obj = new Static("staBg4","staITEM_EVAL:-1","staBg3:-1","524","30",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("8");
            obj.set_cssclass("sta_WF_tablebg");
            this.divData.addChild(obj.name, obj);

            obj = new Static("staBg5","staCD_EVALGROUP:-1","staBg4:-1","524","30",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("5");
            obj.set_cssclass("sta_WF_tablebg");
            this.divData.addChild(obj.name, obj);

            obj = new Static("staBg6","staSERV_EVAL:-1","staBg5:-1","524","90",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("6");
            obj.set_cssclass("sta_WF_tablebg");
            this.divData.addChild(obj.name, obj);

            obj = new Static("staBg7","staREF_ITEM:-1","staBg6:-1","524","90",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("6");
            obj.set_cssclass("sta_WF_tablebg");
            this.divData.addChild(obj.name, obj);

            obj = new Combo("cboTERM_EVAL","92","40","100","20",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("2");
            obj.set_datacolumn("TERM_EVAL");
            obj.set_codecolumn("TERM_EVAL");
            obj.set_innerdataset("dsTERM_EVAL");
            obj.set_text("");
            obj.set_value("");
            obj.set_index("0");
            this.divData.addChild(obj.name, obj);

            obj = new Combo("cboTY_EVAL","staTY_EVAL:5","staBg1:5","150","20",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("10");
            obj.set_datacolumn("DS_CODE");
            obj.set_codecolumn("CD_CODE");
            obj.set_innerdataset("dsTY_EVAL");
            obj.set_text("전체");
            obj.set_value("");
            obj.set_index("0");
            this.divData.addChild(obj.name, obj);

            obj = new Combo("cboSTD_EVAL","staSTD_EVAL:5","staBg2:5","150","20",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("11");
            obj.set_datacolumn("DS_CODE");
            obj.set_codecolumn("CD_CODE");
            obj.set_innerdataset("dsSTD_EVAL");
            obj.set_text("전체");
            obj.set_value("");
            obj.set_index("0");
            this.divData.addChild(obj.name, obj);

            obj = new Edit("ctxtITEM_EVAL","staITEM_EVAL:5","staBg3:5","325","20",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("7");
            obj.set_value("");
            obj.set_maxlength("100");
            this.divData.addChild(obj.name, obj);

            obj = new Combo("cboCD_EVALGROUP","staCD_EVALGROUP:5","staBg4:5","89","20",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("2");
            obj.set_datacolumn("DS_CODE");
            obj.set_codecolumn("CD_CODE");
            obj.set_innerdataset("dsCD_GROUP");
            obj.set_text("");
            obj.set_value("");
            obj.set_index("0");
            this.divData.addChild(obj.name, obj);

            obj = new Button("btnEvalGrades","cboCD_EVALGROUP:15","staBg4:5","80","20",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("8");
            obj.set_text("평가등급목록");
            this.divData.addChild(obj.name, obj);

            obj = new TextArea("edtSERV_EVAL","staSERV_EVAL:5","staBg5:5","510","80",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("11");
            this.divData.addChild(obj.name, obj);

            obj = new TextArea("edtREF_ITEM","staREF_ITEM:5","staBg6:5","510","80",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("12");
            this.divData.addChild(obj.name, obj);

            obj = new Button("btnSave","35%","staBg7:10","60","20",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("13");
            obj.set_text("저장");
            this.divData.addChild(obj.name, obj);

            obj = new Button("btnCancel","55%","staBg7:10","60","20",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("14");
            obj.set_text("취소");
            this.divData.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this
            obj = new Layout("default","",this._adjust_width,this._adjust_height,this,function(p){});
            this.addLayout(obj.name, obj);
            
            // BindItem Information
            obj = new BindItem("item0","divData.form.cboTERM_EVAL","value","dsSave","TERM_EVAL");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item6","divData.form.cboTY_EVAL","value","dsSave","TY_EVAL");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item1","divData.form.cboSTD_EVAL","value","dsSave","STD_EVAL");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item2","divData.form.ctxtITEM_EVAL","value","dsSave","ITEM_EVAL");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item3","divData.form.edtSERV_EVAL","value","dsSave","SERV_EVAL");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item4","divData.form.edtREF_ITEM","value","dsSave","REF_ITEM");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item5","divData.form.cboCD_EVALGROUP","value","dsSave","CD_EVALGROUP");
            this.addChild(obj.name, obj);
            obj.bind();
            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script
        this.registerScript("DAJ_EVALUATION_ITEMS_DLG.xfdl", function() {
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
        	this.fnSetCombo();
        };

        /************************************************************************
         * 버튼 설정 : 화면(Tab) 전환시 마다 호출
         * 서브버튼 사용 및 공통버튼 강제 제어시 여기서 처리
         ************************************************************************/
        this.fnSetButton = function() {
        	this.FormBtns.Select.set_enable(false);
        }

        /************************************************************************
         * 확장 버튼 : 화면별 버튼 설정 ID, function 연결 (화면버튼관리)
         ************************************************************************/
        this.fnSetExtendButton = function() {

        };

        /************************************************************************
         * 변수 선언
         ************************************************************************/
        this.fnSetVariable = function() {
        	//this.dxGrid = this.divDataBottom.form.objGrid;
        	this.cboTERM_EVAL = this.divData.form.cboTERM_EVAL;		// 평가기수
        	this.cboTY_EVAL = this.divData.form.cboTY_EVAL;			// 평가구분
        	this.cboSTD_EVAL = this.divData.form.cboSTD_EVAL; 		// 평가기준
        	this.ctxtITEM_EVAL = this.divData.form.ctxtITEM_EVAL; 	// 평가항목
        };

        /************************************************************************
         * 이벤트 설정
         ************************************************************************/
        this.fnSetEvent = function() {

        	this.dsSave.clearData();

        	if(this.getOwnerFrame().P_TY_SAVE == "U"){	// 수정or조회
        		var val = this.getOwnerFrame().P_DS_PARAM;
        		this.dsSave.loadCSV(val);
        		this.dsSave.addColumn("TY_SAVE", "string");
        		this.dsSave.addColumn("SABUN", "string");

        		this.cboTERM_EVAL.set_enable( false );	// 평가기수
        		this.cboTY_EVAL.set_enable( false );	// 평가구분
        		this.cboSTD_EVAL.set_enable( false );	// 평가기준
        		this.ctxtITEM_EVAL.set_enable( false ); // 평가항목
        	}else{
        		this.dsSave.addRow();
        		this.dsSave.setColumn(0, "TERM_EVAL", this.getOwnerFrame().P_TERM_EVAL);
        		this.dsSave.setColumn(0, "TY_EVAL", this.getOwnerFrame().P_TY_EVAL);
        		this.dsSave.setColumn(0, "STD_EVAL", this.getOwnerFrame().P_STD_EVAL);
        	}

        	this.dsSave.setColumn(0, "SABUN", this.AuthClient.ID_USER);
        	this.dsSave.setColumn(0, "TY_SAVE", this.getOwnerFrame().P_TY_SAVE);
        	//trace(" dsSave->" + this.dsSave.saveXML())

        };

        /************************************************************************
         * 파라미터 설정
         ************************************************************************/
        this.fnSetParameter = function() {
        }

        /************************************************************************
         * 컨트롤 이벤트
         ************************************************************************/

         /************************************************************************
         * 버튼 이벤트
         ************************************************************************/
         /*
          *	조회 버튼
          */
        this.fnSelect = function() {
        }

        /************************************************************************
         * Validate
         ************************************************************************/
        this.fnSaveValidate = function() {
        /*
        	if (this.gfnIsNull(cd_corp)) {
        		validate = false;
        		this.fnVaidateCallback = function() {
        			this.ccfCD_CORP.form.CDTextBox.setFocus();
        		}
        		this.gfnAlert("법인코드를 입력하세요.", "fnVaidateCallback");
        	}
        */
        	var strMsg = "";
        	if(this.gfnIsNull(this.dsSave.getColumn(0, "TERM_EVAL"))) {
        		strMsg += "평가기수는 반드시 입력 하셔야 합니다.\n";
        	}
        	if(this.gfnIsNull(this.dsSave.getColumn(0, "TY_EVAL"))) {
        		strMsg += "평가구분은 반드시 입력 하셔야 합니다.\n";
        	}
        	if(this.gfnIsNull(this.dsSave.getColumn(0, "STD_EVAL"))) {
        		strMsg += "평가기준는 반드시 입력 하셔야 합니다.\n";
        	}
        	if(this.gfnIsNull(this.dsSave.getColumn(0, "ITEM_EVAL"))) {
        		strMsg += "평가항목은 반드시 입력 하셔야 합니다.\n";
        	}
        	if(strMsg.length > 0) {
        		this.gfnAlert(strMsg);
        		return false;
        	}
        	return true;
        }

        /************************************************************************
         * 콜백 이벤트
         ************************************************************************/
        /*
         *	콜백 처리
         */
        this.fnCallback = function(svcID, errorCode, errorMsg)
        {
        	if (svcID == "combo") {

        	} else if (svcID == "save") {
        		if(errorCode == 0)
        		{
        			// this.close()가 작동하지 않았고,
        			// 부모의 callback 함수로 데이터를 넘겨주기 위해 작성되었습니다.
        			this.getParentContext().close(true);
        		}else
        		{
        			this.gfnAlert(errorMsg);
        		}
        	}
        }

        /************************************************************************
         * 코드파인드 이벤트
         ************************************************************************/
        this.fnBeforeUserDataSetParam = function(id, dsUserParam, nrow) {
        	if (id == "ccfCD_DEPT") {
        		dsUserParam.setColumn(nrow, "CD_CORP", this.AuthClient.CD_CORP);
        	}
        	return true;
        }

        /************************************************************************
         * 그리드 이벤트
         ************************************************************************/

        /************************************************************************
         * 기타 이벤트
         ************************************************************************/
        //콤보 조회
        this.fnSetCombo = function() {

        	// 평가기수
        	this.dsCombo = new Dataset();
        	this.dsCombo.addColumn("TY_SEL", "string");
        	this.dsCombo.addColumn("YEAR_EVAL", "string");

        	this.dsCombo.addRow();
        	this.dsCombo.setColumn(0, "TY_SEL", "P");	// A: 전체 P: 필수
        	this.dsCombo.setColumn(0, "YEAR_EVAL", "");

        	// 평가그룹
        	this.dsComboGrp = new Dataset();
        	this.dsComboGrp.addColumn("TY_SEL", "string");

        	this.dsComboGrp.addRow();
        	this.dsComboGrp.setColumn(0, "TY_SEL", "P");	// A: 전체 P: 필수

        	// 평가구분 EL
        	this.dsComboTy = new Dataset();
        	this.dsComboTy.addColumn("TY_SEL", "string");
        	this.dsComboTy.addColumn("CD_PREFIX", "string");
        	this.dsComboTy.addColumn("CD_UPPREFIX", "string");

        	this.dsComboTy.addRow();
        	this.dsComboTy.setColumn(0, "TY_SEL", "P");
        	this.dsComboTy.setColumn(0, "CD_PREFIX", "EL");
        	this.dsComboTy.setColumn(0, "CD_UPPREFIX", "");

        	// 평가기준 EM
        	this.dsComboStd = new Dataset();
        	this.dsComboStd.addColumn("TY_SEL", "string");
        	this.dsComboStd.addColumn("CD_PREFIX", "string");
        	this.dsComboStd.addColumn("CD_UPPREFIX", "string");

        	this.dsComboStd.addRow();
        	this.dsComboStd.setColumn(0, "TY_SEL", "P");
        	this.dsComboStd.setColumn(0, "CD_PREFIX", "EM");
        	this.dsComboStd.setColumn(0, "CD_UPPREFIX", "");

        	var strSvcId    = "combo";
        	var strSvcType  = "select";
        	var inProc		= "_dsProc";
        	var inData      = "combo=dsCombo comboTy=dsComboTy comboStd=dsComboStd comboGrp=dsComboGrp";
        	var outData     = "dsTERM_EVAL=combo0 dsTY_EVAL=comboTy0 dsSTD_EVAL=comboStd0 dsCD_GROUP=comboGrp0";
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

        /*
         *	조회 조건 변경시 초기화
         */
        this.fnSearchInit = function(obj,e) {
        	var strEventid = e.eventid;
        	var objComp = e.fromobject;
        	var nPostIdx = e.postindex; // 새로 변경된 아이템의 인덱스값
        	//trace("obj->" + obj + " / eventid->" + strEventid  + " / fromobject->" + objComp  + " / nPostIdx->" + nPostIdx );

        	// 평가기수 구조확정여부
        	var nrow = this.dsTERM_EVAL.rowposition;
        	YN_STRUCTFINI = this.dsTERM_EVAL.getColumn(nPostIdx, "YN_STRUCTFINI");
        	if(YN_STRUCTFINI == "Y"){
        		this.gfnAlert( "평가기수의 구조가 확정되어 입력이 불가능합니다.");
        		this.dsSave.setColumn(0, "TERM_EVAL", "");
        		return;
        	}
        };

        // 저장 버튼 클릭
        this.divData_btnSave_onclick = function(obj,e)
        {
        	if(!this.fnSaveValidate()) return;

        	var strSvcId    = "save";
        	var strSvcType  = "save";
        	var inProc		= "_dsProc";
        	var inData      = "save=dsSave";
        	var outData     = "";
        	var strArg      = "";
        	var callBackFnc = "fnCallback";

        	this.gfnTransaction( strSvcId , // transaction을 구분하기 위한 svc id값
        					strSvcType , 	// transaction을 요청할 구분
        					inProc,			// Procedure 정보 Dataset 이름
        					inData , 		// 입력값으로 보낼 dataset id , a=b형태로 실제이름과 입력이름을 매칭
        					outData , 		// 처리결과값으로 받을 dataset id, a=b형태로 실제이름과 입력이름을 매칭
        					strArg, 		// 입력값으로 보낼 arguments, strFormData="20120607"
        					callBackFnc); 	// 통신방법 정의 [생략가능]
        };


        // 취소 버튼 클릭
        this.divData_btnCancel_onclick = function(obj,e)
        {
        	// this.close()가 작동하지 않았고,
        	// 부모의 callback 함수로 데이터를 넘겨주기 위해 작성되었습니다.
        	this.getParentContext().close(false);
        };

        this.divData_btnEvalGrades_onclick = function(obj,e)
        {
        	var param = {};
        	this.gfnFormOpen("DAJ", "DAJ_EVALUATION_GRADES", "fnEvalGrades_callback", param);
        };

        this.fnEvalGrades_callback = function() {}


        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.form_onload,this);
            this.divData.form.cboTERM_EVAL.addEventHandler("onitemchanged",this.fnSearchInit,this);
            this.divData.form.btnEvalGrades.addEventHandler("onclick",this.divData_btnEvalGrades_onclick,this);
            this.divData.form.btnSave.addEventHandler("onclick",this.divData_btnSave_onclick,this);
            this.divData.form.btnCancel.addEventHandler("onclick",this.divData_btnCancel_onclick,this);
        };
        this.loadIncludeScript("DAJ_EVALUATION_ITEMS_DLG.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
