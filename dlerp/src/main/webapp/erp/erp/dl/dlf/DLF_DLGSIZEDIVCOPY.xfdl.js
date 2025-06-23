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
            this.set_titletext("별도계약안분내역복사");
            this.getSetter("maxwidth").set("670");
            this.getSetter("maxheight").set("400");
            if (Form == this.constructor)
            {
                this._setFormPosition(630,360);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("_dsProc", this);
            obj._setContents("<ColumnInfo><Column id=\"TARGET\" type=\"STRING\" size=\"256\"/><Column id=\"SP\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"TARGET\">save</Col><Col id=\"SP\">DRFPR_SIZEDIV_COPY</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsData", this);
            obj._setContents("<ColumnInfo><Column id=\"CD_ACNTUNIT\" type=\"STRING\" size=\"256\"/><Column id=\"NO_SIZE\" type=\"STRING\" size=\"256\"/><Column id=\"TY_TYPE\" type=\"STRING\" size=\"256\"/><Column id=\"CD_ITEM\" type=\"STRING\" size=\"256\"/><Column id=\"NO_SIZE_ORIG\" type=\"STRING\" size=\"256\"/><Column id=\"TY_TYPE_ORIG\" type=\"STRING\" size=\"256\"/><Column id=\"CD_ITEM_ORIG\" type=\"STRING\" size=\"256\"/><Column id=\"TY_COPY\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"CD_ACNTUNIT\"/><Col id=\"NO_SIZE\"/><Col id=\"TY_TYPE\"/><Col id=\"CD_ITEM\"/><Col id=\"NO_SIZE_ORIG\"/><Col id=\"TY_TYPE_ORIG\"/><Col id=\"CD_ITEM_ORIG\"/><Col id=\"TY_COPY\">1</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsTY_COPY", this);
            obj._setContents("<ColumnInfo><Column id=\"CD_CODE\" type=\"STRING\" size=\"256\"/><Column id=\"DS_CODE\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"CD_CODE\">1</Col><Col id=\"DS_CODE\">전체(약정분양금포함)</Col></Row><Row><Col id=\"CD_CODE\">2</Col><Col id=\"DS_CODE\">약정분양금제외</Col></Row></Rows>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Div("divData","0","0",null,null,"0","0",null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_cssclass("div_DATA_Bg");
            obj.set_text("");
            this.addChild(obj.name, obj);

            obj = new Static("staTITLE","0","0","100%","30",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("0");
            obj.set_text("별도계약 안분내역복사");
            obj.set_cssclass("sta_TITLE_Bg");
            obj.set_textAlign("left");
            this.divData.addChild(obj.name, obj);

            obj = new Static("staDS_SITE","0","55","100","30",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("1");
            obj.set_text("면적/평");
            obj.set_cssclass("sta_WF_tablelabel");
            obj.set_textAlign("left");
            this.divData.addChild(obj.name, obj);

            obj = new Static("staDS_SILHENG","0","staDS_SITE:-1","100","30",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("2");
            obj.set_text("품목코드");
            obj.set_cssclass("sta_WF_tablelabel");
            obj.set_textAlign("left");
            this.divData.addChild(obj.name, obj);

            obj = new Static("staTY_APPROVAL","0","staDS_SILHENG:-1","100","30",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("3");
            obj.set_text("품목명");
            obj.set_cssclass("sta_WF_tablelabel");
            obj.set_textAlign("left");
            this.divData.addChild(obj.name, obj);

            obj = new Static("staDT_CONFIRM","0","staTY_APPROVAL:-1","100","30",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("4");
            obj.set_text("실정보");
            obj.set_cssclass("sta_WF_tablelabel");
            obj.set_textAlign("left");
            this.divData.addChild(obj.name, obj);

            obj = new Static("staBg1","staDS_SITE:-1","55","210","30",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("5");
            obj.set_cssclass("sta_WF_tablebg");
            this.divData.addChild(obj.name, obj);

            obj = new Static("staBg2","staDS_SILHENG:-1","staBg1:-1","210","30",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("6");
            obj.set_cssclass("sta_WF_tablebg");
            this.divData.addChild(obj.name, obj);

            obj = new Static("staBg3","staTY_APPROVAL:-1","staBg2:-1","210","30",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("7");
            obj.set_cssclass("sta_WF_tablebg");
            this.divData.addChild(obj.name, obj);

            obj = new Static("staBg4","staDT_CONFIRM:-1","staBg3:-1","210","30",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("8");
            obj.set_cssclass("sta_WF_tablebg");
            this.divData.addChild(obj.name, obj);

            obj = new Edit("edtCD_ITEM","staDS_SILHENG:4","89","150","20",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("9");
            obj.set_readonly("true");
            obj.set_maxlength("50");
            this.divData.addChild(obj.name, obj);

            obj = new Button("btnOk","38.10%","316","60","20",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("10");
            obj.set_text("확인");
            this.divData.addChild(obj.name, obj);

            obj = new Button("btnCancel","51.75%","316","60","20",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("11");
            obj.set_text("취소");
            this.divData.addChild(obj.name, obj);

            obj = new Static("sta00","2","32","219","20",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("12");
            obj.set_text("원본");
            this.divData.addChild(obj.name, obj);

            obj = new Edit("edtNO_SIZE","104","60","96","20",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("13");
            obj.set_readonly("true");
            obj.set_maxlength("50");
            this.divData.addChild(obj.name, obj);

            obj = new Edit("edtDS_ITEM","104","118","200","20",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("14");
            obj.set_readonly("true");
            obj.set_maxlength("50");
            this.divData.addChild(obj.name, obj);

            obj = new Edit("edtDS_ROOM","104","147","200","20",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("15");
            obj.set_readonly("true");
            obj.set_maxlength("50");
            this.divData.addChild(obj.name, obj);

            obj = new Static("staBg00","99","171","210","30",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("16");
            obj.set_cssclass("sta_WF_tablebg");
            this.divData.addChild(obj.name, obj);

            obj = new Static("staBg01","99","200","210","30",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("17");
            obj.set_cssclass("sta_WF_tablebg");
            this.divData.addChild(obj.name, obj);

            obj = new Edit("edtDS_COLOR","104","176","200","20",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("18");
            obj.set_readonly("true");
            obj.set_maxlength("50");
            this.divData.addChild(obj.name, obj);

            obj = new Static("staDT_CONFIRM00","0","200","100","30",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("19");
            obj.set_text("약정금");
            obj.set_cssclass("sta_WF_tablelabel");
            obj.set_textAlign("left");
            this.divData.addChild(obj.name, obj);

            obj = new Static("staTY_APPROVAL00","0","171","100","30",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("20");
            obj.set_text("색상정보");
            obj.set_cssclass("sta_WF_tablelabel");
            obj.set_textAlign("left");
            this.divData.addChild(obj.name, obj);

            obj = new Static("staBg02","417","200","210","30",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("21");
            obj.set_cssclass("sta_WF_tablebg");
            this.divData.addChild(obj.name, obj);

            obj = new Static("staBg03","417","171","210","30",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("22");
            obj.set_cssclass("sta_WF_tablebg");
            this.divData.addChild(obj.name, obj);

            obj = new Static("staBg04","417","142","210","30",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("23");
            obj.set_cssclass("sta_WF_tablebg");
            this.divData.addChild(obj.name, obj);

            obj = new Static("staBg05","417","113","210","30",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("24");
            obj.set_cssclass("sta_WF_tablebg");
            this.divData.addChild(obj.name, obj);

            obj = new Static("staBg06","417","84","210","30",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("25");
            obj.set_cssclass("sta_WF_tablebg");
            this.divData.addChild(obj.name, obj);

            obj = new Static("staBg07","417","55","210","30",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("26");
            obj.set_cssclass("sta_WF_tablebg");
            this.divData.addChild(obj.name, obj);

            obj = new Static("staDT_CONFIRM01","318","200","100","30",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("27");
            obj.set_text("약정금");
            obj.set_cssclass("sta_WF_tablelabel");
            obj.set_textAlign("left");
            this.divData.addChild(obj.name, obj);

            obj = new Static("staTY_APPROVAL01","318","171","100","30",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("28");
            obj.set_text("색상정보");
            obj.set_cssclass("sta_WF_tablelabel");
            obj.set_textAlign("left");
            this.divData.addChild(obj.name, obj);

            obj = new Static("staDT_CONFIRM02","318","142","100","30",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("29");
            obj.set_text("실정보");
            obj.set_cssclass("sta_WF_tablelabel");
            obj.set_textAlign("left");
            this.divData.addChild(obj.name, obj);

            obj = new Static("staTY_APPROVAL02","318","113","100","30",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("30");
            obj.set_text("품목명");
            obj.set_cssclass("sta_WF_tablelabel");
            obj.set_textAlign("left");
            this.divData.addChild(obj.name, obj);

            obj = new Static("staDS_SILHENG00","318","84","100","30",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("31");
            obj.set_text("품목코드");
            obj.set_cssclass("sta_WF_tablelabel");
            obj.set_textAlign("left");
            this.divData.addChild(obj.name, obj);

            obj = new Static("staDS_SITE00","318","55","100","30",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("32");
            obj.set_text("면적/평");
            obj.set_cssclass("sta_WF_tablelabel");
            obj.set_textAlign("left");
            this.divData.addChild(obj.name, obj);

            obj = new Edit("edtDS_COLOR_CP","422","176","200","20",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("33");
            obj.set_readonly("true");
            obj.set_maxlength("50");
            this.divData.addChild(obj.name, obj);

            obj = new Edit("edtDS_ROOM_CP","422","147","200","20",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("34");
            obj.set_readonly("true");
            obj.set_maxlength("50");
            this.divData.addChild(obj.name, obj);

            obj = new Edit("edtDS_ITEM_CP","422","118","200","20",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("35");
            obj.set_readonly("true");
            obj.set_maxlength("50");
            this.divData.addChild(obj.name, obj);

            obj = new Edit("edtCD_ITEM_CP","422","89","150","20",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("36");
            obj.set_readonly("true");
            obj.set_maxlength("50");
            this.divData.addChild(obj.name, obj);

            obj = new Static("sta01","320","32","219","20",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("37");
            obj.set_text("대상");
            this.divData.addChild(obj.name, obj);

            obj = new Div("div00","214","245","202","61",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("38");
            obj.set_border("1px solid #999899");
            obj.set_text("");
            this.divData.addChild(obj.name, obj);

            obj = new Radio("rdoTY_COPY","13","10","145","41",null,null,null,null,null,null,this.divData.form.div00.form);
            obj.set_taborder("0");
            obj.set_innerdataset("dsTY_COPY");
            obj.set_direction("horizontal");
            obj.set_fittocontents("width");
            obj.set_codecolumn("CD_CODE");
            obj.set_datacolumn("DS_CODE");
            this.divData.form.div00.addChild(obj.name, obj);

            obj = new MaskEdit("edtAM_TOTAL","104","205","150","20",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("39");
            obj.set_format("#,###");
            obj.set_readonly("true");
            obj.set_clipmode("excludespace");
            this.divData.addChild(obj.name, obj);

            obj = new MaskEdit("edtAM_TOTAL_CP","422","205","150","20",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("40");
            obj.set_format("#,###");
            obj.set_readonly("true");
            obj.set_clipmode("excludespace");
            this.divData.addChild(obj.name, obj);

            obj = new Edit("edtTY_TYPE","edtNO_SIZE:5","60","50","20",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("41");
            obj.set_readonly("true");
            obj.set_maxlength("50");
            this.divData.addChild(obj.name, obj);

            obj = new Edit("edtNO_SIZE_CP","422","60","96","20",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("42");
            obj.set_value("");
            obj.set_readonly("true");
            this.divData.addChild(obj.name, obj);

            obj = new Div("cfTY_TYPE_CP","edtNO_SIZE_CP:5","60","75","20",null,null,null,null,null,null,this.divData.form);
            obj.getSetter("CodeFindName").set("DRX_CFSIZEITEM_CODEFIND");
            obj.getSetter("CDTextWidth").set("50");
            obj.set_taborder("43");
            obj.set_url("cmm::cmmCodeFind.xfdl");
            obj.set_text("");
            this.divData.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this
            obj = new Layout("default","",this._adjust_width,this._adjust_height,this,function(p){});
            this.addLayout(obj.name, obj);
            
            // BindItem Information
            obj = new BindItem("item8","divData.form.edtCD_ITEM","value","dsData","CD_ITEM_ORIG");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item1","divData.form.edtNO_SIZE","value","dsData","NO_SIZE_ORIG");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item10","divData.form.edtCD_ITEM_CP","value","dsData","CD_ITEM");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item12","divData.form.div00.form.rdoTY_COPY","value","dsData","TY_COPY");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item5","divData.form.edtTY_TYPE","value","dsData","TY_TYPE_ORIG");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item14","divData.form.edtNO_SIZE_CP","value","dsData","NO_SIZE");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item15","divData.form.cfTY_TYPE_CP.form.CDTextBox","value","dsData","TY_TYPE");
            this.addChild(obj.name, obj);
            obj.bind();
            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {
            this._addPreloadList("fdl","cmm::cmmCodeFind.xfdl");
        };
        
        // User Script
        this.registerScript("DLF_DLGSIZEDIVCOPY.xfdl", function() {
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

        	// 평 비활성화 처리
        	this.cfTY_TYPE_CP.form.CDTextBox.set_readonly(true);

        	this.dsData.setColumn(0, "CD_ACNTUNIT", this.getOwnerFrame().CD_ACNTUNIT);
        	this.dsData.setColumn(0, "NO_SIZE_ORIG", this.getOwnerFrame().NO_SIZE);
        	this.dsData.setColumn(0, "TY_TYPE_ORIG", this.getOwnerFrame().TY_TYPE);
        	this.dsData.setColumn(0, "CD_ITEM_ORIG", this.getOwnerFrame().CD_ITEM);
        	this.edtDS_ITEM.set_value(this.getOwnerFrame().DS_ITEM);
        	this.edtDS_ROOM.set_value(this.getOwnerFrame().DS_ROOM);
        	this.edtDS_COLOR.set_value(this.getOwnerFrame().DS_COLOR);
        	this.edtAM_TOTAL.set_value(this.getOwnerFrame().AM_TOTAL);

        };

        /************************************************************************
         * 버튼 설정 : 화면(Tab) 전환시 마다 호출
         * 서브버튼 사용 및 공통버튼 강제 제어시 여기서 처리
         ************************************************************************/
        this.fnSetButton = function() {
        	//this.FormBtns.Select.set_enable(false);
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
        	//this.dxGrid = this.divData.form.objGrid;
        	this.edtNO_SIZE = this.divData.form.edtNO_SIZE;
        	this.edtTY_TYPE = this.divData.form.edtTY_TYPE;
        	this.edtCD_ITEM = this.divData.form.edtCD_ITEM;
        	this.edtDS_ITEM = this.divData.form.edtDS_ITEM;
        	this.edtDS_ROOM = this.divData.form.edtDS_ROOM;
        	this.edtDS_COLOR = this.divData.form.edtDS_COLOR;
        	this.edtAM_TOTAL = this.divData.form.edtAM_TOTAL;

        	this.edtNO_SIZE_CP = this.divData.form.edtNO_SIZE_CP;
        	this.cfTY_TYPE_CP = this.divData.form.cfTY_TYPE_CP;
        	this.edtCD_ITEM_CP = this.divData.form.edtCD_ITEM_CP;
        	this.edtDS_ITEM_CP = this.divData.form.edtDS_ITEM_CP;
        	this.edtDS_ROOM_CP = this.divData.form.edtDS_ROOM_CP;
        	this.edtDS_COLOR_CP = this.divData.form.edtDS_COLOR_CP;
        	this.edtAM_TOTAL_CP = this.divData.form.edtAM_TOTAL_CP;
        };

        /************************************************************************
         * 이벤트 설정
         ************************************************************************/
        this.fnSetEvent = function() {
        	this.cfTY_TYPE_CP.BeforeUserDataSetParam = "fnBeforeUserDataSetParam";
        	this.cfTY_TYPE_CP.AfterCDTextChanged = "fnAfterCDTextChanged";
        };

        /************************************************************************
         * 파라미터 설정
         ************************************************************************/
        this.fnSetParameter = function() {
        	this.dsSave = new Dataset();
        	this.dsSave.addColumn("CD_ACNTUNIT", "string");
        	this.dsSave.addColumn("TY_GUBUN", "string");
        	this.dsSave.addColumn("NO_CHASU", "string");
        	this.dsSave.addColumn("NO_SIZE", "bigdecimal");
        	this.dsSave.addColumn("TY_TYPE", "string");
        	this.dsSave.addColumn("CD_ITEM", "string");
        	this.dsSave.addColumn("NO_SIZE_ORIG", "bigdecimal");
        	this.dsSave.addColumn("TY_TYPE_ORIG", "string");
        	this.dsSave.addColumn("CD_ITEM_ORIG", "string");
        	this.dsSave.addColumn("TY_COPY", "string");
        	this.dsSave.addColumn("ID_INSERT", "string");
        }

        /************************************************************************
         * 컨트롤 이벤트
         ************************************************************************/

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
        	if (svcID == "save") {
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

        	if(id == "cfTY_TYPE_CP") {
        		dsUserParam.setColumn(nrow, "CD_ACNTUNIT", this.dsData.getColumn(0, "CD_ACNTUNIT"));
        	}

        	return true;
        };

        this.fnAfterCDTextChanged = function(id, codeFindData) {
        	var arrData = codeFindData;
        	if(id == "cfTY_TYPE_CP") {
        		this.dsData.setColumn(0, "NO_SIZE", arrData[0]["NO_SIZE"]);
        		this.dsData.setColumn(0, "TY_TYPE", arrData[0]["TY_TYPE"]);
        		this.dsData.setColumn(0, "CD_ITEM", arrData[0]["CD_ITEM"]);
        		this.edtDS_ITEM_CP.set_value(arrData[0]["DS_ITEM"]);
        		this.edtDS_ROOM_CP.set_value(arrData[0]["DS_RCODE"]);
        		this.edtDS_COLOR_CP.set_value(arrData[0]["DS_CCODE"]);
        		this.edtAM_TOTAL_CP.set_value(arrData[0]["AM_AMOUNT"]);


        	}
        }
        /************************************************************************
         * 그리드 이벤트
         ************************************************************************/

        /************************************************************************
         * 기타 이벤트
         ************************************************************************/
        // 확인 버튼 클릭
        this.divData_btnOk_onclick = function(obj,e)
        {
        	if(this.dsData.getColumn(0, "TY_COPY") == "1"){
        		this.gfnConfirm("안분내역 전체를 복사합니다. 계속 진행하시겠습니까?", "fnExec1_callback");
        	}else{
        		this.gfnConfirm("안분내역중 약정분양금을 제외하고 복사합니다. 계속 진행하시겠습니까?", "fnExec2_callback");
        	}
        };

        // 확인 버튼 클릭 후 callback
        this.fnExec1_callback = function(strId, val)
        {
        	if(val == true) {
        		if(nexacro.replaceAll(this.edtAM_TOTAL.value, ",", "") != nexacro.replaceAll(this.edtAM_TOTAL_CP.value, ",", "")){
        			this.gfnConfirm("약정금이 서로 다릅니다. 원본의 약정금으로 변경됩니다.\n 계속 진행하시겠습니까?", "fnExecProc_callback");
        		}else{
        			this.fnExec();
        		}
        	}
        }

        this.fnExecProc_callback = function(strId, val)
        {
        	if(val == true) {
        		this.fnExec();
        	}
        }

        this.fnExec2_callback = function(strId, val)
        {
        	if(val == true) {
        		this.fnExec();
        	}
        }


        // 확인 처리
        this.fnExec = function() {

        	if (!this.fnSaveValidate()) return false;

        	this.dsSave.clearData();
        	this.dsSave.addRow();

        	this.dsSave.setColumn(0, "CD_ACNTUNIT", this.dsData.getColumn(0, "CD_ACNTUNIT").substr(0, 6));
        	this.dsSave.setColumn(0, "TY_GUBUN", this.dsData.getColumn(0, "CD_ACNTUNIT").substr(6, 1));
        	this.dsSave.setColumn(0, "NO_CHASU", this.dsData.getColumn(0, "CD_ACNTUNIT").substr(7, 2));
        	this.dsSave.setColumn(0, "NO_SIZE", nexacro.replaceAll(this.dsData.getColumn(0, "NO_SIZE"), ",", ""));
        	this.dsSave.setColumn(0, "TY_TYPE", this.dsData.getColumn(0, "TY_TYPE"));
        	this.dsSave.setColumn(0, "CD_ITEM", this.dsData.getColumn(0, "CD_ITEM"));
        	this.dsSave.setColumn(0, "NO_SIZE_ORIG", nexacro.replaceAll(this.dsData.getColumn(0, "NO_SIZE_ORIG"), ",", ""));
        	this.dsSave.setColumn(0, "TY_TYPE_ORIG", this.dsData.getColumn(0, "TY_TYPE_ORIG"));
        	this.dsSave.setColumn(0, "CD_ITEM_ORIG", this.dsData.getColumn(0, "CD_ITEM_ORIG"));
        	this.dsSave.setColumn(0, "TY_COPY", this.dsData.getColumn(0, "TY_COPY"));
        	this.dsSave.setColumn(0, "ID_INSERT", this.AuthClient.ID_USER);

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



        // 취소 버튼 클릭
        this.divData_btnCancel_onclick = function(obj,e)
        {
        	// this.close()가 작동하지 않았고,
        	// 부모의 callback 함수로 데이터를 넘겨주기 위해 작성되었습니다.
        	this.getParentContext().close(false);
        };


        this.fnSaveValidate = function() {
        	var validate = true;

        	if (this.gfnIsNull(this.dsData.getColumn(0,"CD_ACNTUNIT"))) {
        		validate = false;
        		this.gfnAlert("사업지코드가 존재하지 않습니다.");
        	}else if (this.gfnIsNull(this.dsData.getColumn(0,"NO_SIZE"))) {
        		validate = false;
        		this.gfnAlert("복사를 실행할 대상이 없습니다.");
        	}

        	return validate;
        }

        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.form_onload,this);
            this.divData.form.staDS_SITE.addEventHandler("onclick",this.divData_staDS_SITE_onclick,this);
            this.divData.form.btnOk.addEventHandler("onclick",this.divData_btnOk_onclick,this);
            this.divData.form.btnCancel.addEventHandler("onclick",this.divData_btnCancel_onclick,this);
            this.divData.form.staDS_SITE00.addEventHandler("onclick",this.divData_staDS_SITE_onclick,this);
        };
        this.loadIncludeScript("DLF_DLGSIZEDIVCOPY.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
