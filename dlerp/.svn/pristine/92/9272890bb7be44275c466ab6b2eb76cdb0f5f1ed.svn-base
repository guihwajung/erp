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
            this.set_titletext("별도계약 약정일변경");
            this.getSetter("maxwidth").set("430");
            this.getSetter("maxheight").set("430");
            if (Form == this.constructor)
            {
                this._setFormPosition(400,400);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("_dsProc", this);
            obj._setContents("<ColumnInfo><Column id=\"TARGET\" type=\"STRING\" size=\"256\"/><Column id=\"SP\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"TARGET\">save</Col><Col id=\"SP\">DRFPR_CONTRACTOR_CONTRACT_ITEM_DT</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsData", this);
            obj._setContents("<ColumnInfo><Column id=\"CD_ACNTUNIT\" type=\"STRING\" size=\"256\"/><Column id=\"NO_DONG\" type=\"STRING\" size=\"256\"/><Column id=\"NO_FLOOR\" type=\"STRING\" size=\"256\"/><Column id=\"NO_HO\" type=\"STRING\" size=\"256\"/><Column id=\"NO_UNIONMEMBER\" type=\"STRING\" size=\"256\"/><Column id=\"NO_CONTRACT\" type=\"STRING\" size=\"256\"/><Column id=\"DT_CONTRACT\" type=\"STRING\" size=\"256\"/><Column id=\"AM_RECEIVED\" type=\"STRING\" size=\"256\"/><Column id=\"TY_RECEIPT\" type=\"STRING\" size=\"256\"/><Column id=\"TY_POSITION\" type=\"STRING\" size=\"256\"/><Column id=\"CD_GUJA\" type=\"STRING\" size=\"256\"/><Column id=\"CD_CARD\" type=\"STRING\" size=\"256\"/><Column id=\"NO_APPROVAL\" type=\"STRING\" size=\"256\"/><Column id=\"YN_DELAY\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"CD_ACNTUNIT\"/><Col id=\"NO_DONG\"/><Col id=\"NO_FLOOR\"/><Col id=\"NO_HO\"/><Col id=\"NO_UNIONMEMBER\"/><Col id=\"NO_CONTRACT\"/><Col id=\"DT_CONTRACT\"/><Col id=\"AM_RECEIVED\"/><Col id=\"TY_RECEIPT\">N</Col><Col id=\"TY_POSITION\">2</Col><Col id=\"CD_GUJA\"/><Col id=\"CD_CARD\"/><Col id=\"NO_APPROVAL\"/><Col id=\"YN_DELAY\">N</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsYN", this);
            obj._setContents("<ColumnInfo><Column id=\"CD_CODE\" type=\"STRING\" size=\"256\"/><Column id=\"DS_CODE\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"CD_CODE\">Y</Col><Col id=\"DS_CODE\">적용함</Col></Row><Row><Col id=\"CD_CODE\">N</Col><Col id=\"DS_CODE\">적용안함</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsTY_RECEIPT", this);
            obj._setContents("<ColumnInfo><Column id=\"CD_CODE\" type=\"STRING\" size=\"256\"/><Column id=\"DS_CODE\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"CD_CODE\">N</Col><Col id=\"DS_CODE\">정상</Col></Row><Row><Col id=\"CD_CODE\">C</Col><Col id=\"DS_CODE\">대체(동층호 변경)</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsTY_POSITION", this);
            obj._setContents("<ColumnInfo><Column id=\"CD_CODE\" type=\"STRING\" size=\"256\"/><Column id=\"DS_CODE\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"CD_CODE\">1</Col><Col id=\"DS_CODE\">M/H(현금)</Col></Row><Row><Col id=\"CD_CODE\">2</Col><Col id=\"DS_CODE\">은행</Col></Row><Row><Col id=\"CD_CODE\">3</Col><Col id=\"DS_CODE\">본사</Col></Row><Row><Col id=\"CD_CODE\">4</Col><Col id=\"DS_CODE\">기타</Col></Row><Row><Col id=\"CD_CODE\">F</Col><Col id=\"DS_CODE\">카드</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsTY_MONEY", this);
            obj._setContents("<ColumnInfo><Column id=\"CD_CODE\" type=\"STRING\" size=\"256\"/><Column id=\"DS_CODE\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"CD_CODE\">1</Col><Col id=\"DS_CODE\">본인</Col></Row></Rows>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Div("divData","0","0",null,null,"0","0",null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_cssclass("div_DATA_Bg");
            obj.set_text("");
            this.addChild(obj.name, obj);

            obj = new Static("staTITLE","0","0","100%","30",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("0");
            obj.set_text("별도계약체결");
            obj.set_cssclass("sta_TITLE_Bg");
            obj.set_textAlign("left");
            this.divData.addChild(obj.name, obj);

            obj = new Static("staDS_SITE","0","55","112","30",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("1");
            obj.set_text("수납방법");
            obj.set_textAlign("left");
            obj.set_cssclass("sta_WF_tablelabelE");
            this.divData.addChild(obj.name, obj);

            obj = new Static("staDS_SILHENG","0","staDS_SITE:-1","112","30",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("2");
            obj.set_text("수납일자");
            obj.set_textAlign("left");
            obj.set_cssclass("sta_WF_tablelabelE");
            this.divData.addChild(obj.name, obj);

            obj = new Static("staTY_APPROVAL","0","staDS_SILHENG:-1","112","30",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("3");
            obj.set_text("수납금액");
            obj.set_textAlign("left");
            obj.set_cssclass("sta_WF_tablelabelE");
            this.divData.addChild(obj.name, obj);

            obj = new Static("staDT_CONFIRM","0","staTY_APPROVAL:-1","112","30",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("4");
            obj.set_text("수납구분");
            obj.set_textAlign("left");
            obj.set_cssclass("sta_WF_tablelabelE");
            this.divData.addChild(obj.name, obj);

            obj = new Static("staBg1","staDS_SITE:-1","55","289","30",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("5");
            obj.set_cssclass("sta_WF_tablebg");
            this.divData.addChild(obj.name, obj);

            obj = new Static("staBg2","staDS_SILHENG:-1","staBg1:-1","289","30",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("6");
            obj.set_cssclass("sta_WF_tablebg");
            this.divData.addChild(obj.name, obj);

            obj = new Static("staBg3","staTY_APPROVAL:-1","staBg2:-1","289","30",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("7");
            obj.set_cssclass("sta_WF_tablebg");
            this.divData.addChild(obj.name, obj);

            obj = new Static("staBg4","staDT_CONFIRM:-1","staBg3:-1","289","30",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("8");
            obj.set_cssclass("sta_WF_tablebg");
            this.divData.addChild(obj.name, obj);

            obj = new Button("btnOk","32.50%","349","60","20",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("9");
            obj.set_text("확인");
            this.divData.addChild(obj.name, obj);

            obj = new Button("btnCancel","52.50%","349","60","20",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("10");
            obj.set_text("취소");
            this.divData.addChild(obj.name, obj);

            obj = new Calendar("tclDT_CONTRACT","116","89","100","20",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("11");
            obj.set_dateformat("yyyy-MM-dd");
            obj.set_editformat("yyyyMMdd");
            obj.set_autoselect("true");
            obj.set_value("");
            this.divData.addChild(obj.name, obj);

            obj = new Static("sta00","2","32","337","20",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("12");
            obj.set_text("수납정보");
            this.divData.addChild(obj.name, obj);

            obj = new Static("staBg00","111","171","289","30",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("13");
            obj.set_cssclass("sta_WF_tablebg");
            this.divData.addChild(obj.name, obj);

            obj = new Static("staDT_CONFIRM00","0","171","112","30",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("14");
            obj.set_text("수납처구분");
            obj.set_textAlign("left");
            obj.set_cssclass("sta_WF_tablelabelE");
            this.divData.addChild(obj.name, obj);

            obj = new Static("staBg01","111","200","289","30",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("15");
            obj.set_cssclass("sta_WF_tablebg");
            this.divData.addChild(obj.name, obj);

            obj = new Static("staDT_CONFIRM01","0","200","112","30",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("16");
            obj.set_text("납입계좌");
            obj.set_textAlign("left");
            obj.set_cssclass("sta_WF_tablelabelE");
            this.divData.addChild(obj.name, obj);

            obj = new Static("staBg02","111","229","289","30",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("17");
            obj.set_cssclass("sta_WF_tablebg");
            this.divData.addChild(obj.name, obj);

            obj = new Static("staDT_CONFIRM02","0","229","112","30",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("18");
            obj.set_text("카드사");
            obj.set_cssclass("sta_WF_tablelabel");
            obj.set_textAlign("left");
            this.divData.addChild(obj.name, obj);

            obj = new Static("staBg03","111","258","289","30",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("19");
            obj.set_cssclass("sta_WF_tablebg");
            this.divData.addChild(obj.name, obj);

            obj = new Static("staDT_CONFIRM03","0","258","112","30",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("20");
            obj.set_text("승인번호");
            obj.set_cssclass("sta_WF_tablelabel");
            obj.set_textAlign("left");
            this.divData.addChild(obj.name, obj);

            obj = new Static("staBg04","111","287","289","30",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("21");
            obj.set_cssclass("sta_WF_tablebg");
            this.divData.addChild(obj.name, obj);

            obj = new Static("staDT_CONFIRM04","0","287","112","30",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("22");
            obj.set_text("연체적용");
            obj.set_textAlign("left");
            obj.set_cssclass("sta_WF_tablelabelE");
            this.divData.addChild(obj.name, obj);

            obj = new Static("staTitle","116","60","280","20",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("23");
            obj.set_text("계약번호");
            obj.set_color("red");
            this.divData.addChild(obj.name, obj);

            obj = new Div("cfCD_GUJA","116","205","280","20",null,null,null,null,null,null,this.divData.form);
            obj.getSetter("CodeFindName").set("DRX_CFACCOUNT_ETC_CODEFIND");
            obj.getSetter("CDTextWidth").set("80");
            obj.set_taborder("24");
            obj.set_url("cmm::cmmCodeFind.xfdl");
            obj.set_text("");
            this.divData.addChild(obj.name, obj);

            obj = new Div("cfCD_CARD","116","234","280","20",null,null,null,null,null,null,this.divData.form);
            obj.getSetter("CodeFindName").set("DRX_CARD_CODEFIND");
            obj.getSetter("CDTextWidth").set("80");
            obj.set_taborder("25");
            obj.set_url("cmm::cmmCodeFind.xfdl");
            obj.set_text("");
            this.divData.addChild(obj.name, obj);

            obj = new Edit("edtNO_APPROVAL","116","263","150","20",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("26");
            obj.set_readonly("false");
            obj.set_maxlength("50");
            this.divData.addChild(obj.name, obj);

            obj = new Radio("rdoYN_DELAY","116","293","178","20",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("27");
            obj.set_direction("vertical");
            obj.set_codecolumn("CD_CODE");
            obj.set_datacolumn("DS_CODE");
            obj.set_innerdataset("dsYN");
            obj.set_fittocontents("width");
            this.divData.addChild(obj.name, obj);

            obj = new Combo("cboTY_POSITION","116","176","120","20",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("28");
            obj.set_datacolumn("DS_CODE");
            obj.set_codecolumn("CD_CODE");
            obj.set_innerdataset("dsTY_POSITION");
            this.divData.addChild(obj.name, obj);

            obj = new Radio("rdoTY_RECEIPT","116","147","178","20",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("29");
            obj.set_direction("vertical");
            obj.set_codecolumn("CD_CODE");
            obj.set_datacolumn("DS_CODE");
            obj.set_innerdataset("dsTY_RECEIPT");
            obj.set_fittocontents("width");
            this.divData.addChild(obj.name, obj);

            obj = new MaskEdit("edtAM_RECEIVED","116","118","120","20",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("30");
            obj.set_format("#,###");
            obj.set_readonly("false");
            this.divData.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this
            obj = new Layout("default","",this._adjust_width,this._adjust_height,this,function(p){});
            this.addLayout(obj.name, obj);
            
            // BindItem Information
            obj = new BindItem("item0","divData.form.tclDT_CONTRACT","value","dsData","DT_CONTRACT");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item1","divData.form.edtAM_RECEIVED","value","dsData","AM_RECEIVED");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item2","divData.form.rdoTY_RECEIPT","value","dsData","TY_RECEIPT");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item3","divData.form.cboTY_POSITION","value","dsData","TY_POSITION");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item4","divData.form.cfCD_GUJA.form.CDTextBox","value","dsData","CD_GUJA");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item5","divData.form.cfCD_CARD.form.CDTextBox","value","dsData","CD_CARD");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item6","divData.form.edtNO_APPROVAL","value","dsData","NO_APPROVAL");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item7","divData.form.rdoYN_DELAY","value","dsData","YN_DELAY");
            this.addChild(obj.name, obj);
            obj.bind();
            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {
            this._addPreloadList("fdl","cmm::cmmCodeFind.xfdl");
        };
        
        // User Script
        this.registerScript("DLF_DLGCONTRACT.xfdl", function() {
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

        	this.dsData.setColumn(0, "CD_ACNTUNIT", this.getOwnerFrame().CD_ACNTUNIT);
        	this.dsData.setColumn(0, "NO_DONG", this.getOwnerFrame().NO_DONG);
        	this.dsData.setColumn(0, "NO_FLOOR", this.getOwnerFrame().NO_FLOOR);
        	this.dsData.setColumn(0, "NO_HO", this.getOwnerFrame().NO_HO);
        	this.dsData.setColumn(0, "NO_UNIONMEMBER", this.getOwnerFrame().NO_UNIONMEMBER);
        	this.dsData.setColumn(0, "NO_CONTRACT", this.getOwnerFrame().NO_CONTRACT);
        	this.dsData.setColumn(0, "AM_RECEIVED", this.getOwnerFrame().AM_RECEIVED);
        	this.dsData.setColumn(0, "CD_GUJA", this.getOwnerFrame().CD_GUJA);
        	this.cfCD_GUJA.form.DSTextBox.set_value(this.getOwnerFrame().NO_GUJA);

        	this.divData_cboTY_POSITION_onitemchanged();

        	this.dsData.setColumn(0, "DT_CONTRACT", this.gfnGetDate());
        	this.cfCD_GUJA.set_enable(this.getOwnerFrame().CD_Code_Find);
        	this.staTitle.set_text(this.getOwnerFrame().TITILE);
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
        	this.tclDT_CONTRACT = this.divData.form.tclDT_CONTRACT;
        	this.edtAM_RECEIVED = this.divData.form.edtAM_RECEIVED;
        	this.cboTY_POSITION = this.divData.form.cboTY_POSITION;
        	this.cfCD_GUJA = this.divData.form.cfCD_GUJA;
        	this.cfCD_CARD = this.divData.form.cfCD_CARD;
        	this.edtNO_APPROVAL = this.divData.form.edtNO_APPROVAL;
        	this.staTitle = this.divData.form.staTitle;
        };

        /************************************************************************
         * 이벤트 설정
         ************************************************************************/
        this.fnSetEvent = function() {
        	this.cfCD_GUJA.BeforeUserDataSetParam = "fnBeforeUserDataSetParam";
        	this.cfCD_GUJA.AfterCDTextChanged = "fnAfterCDTextChanged";
        	//this.cfCD_CARD.BeforeUserDataSetParam = "fnBeforeUserDataSetParam";
        };

        /************************************************************************
         * 파라미터 설정
         ************************************************************************/
        this.fnSetParameter = function() {
        	this.dsSave = new Dataset();
        	this.dsSave.addColumn("CD_ACNTUNIT", "string");
        	this.dsSave.addColumn("TY_GUBUN", "string");
        	this.dsSave.addColumn("NO_CHASU", "string");
        	this.dsSave.addColumn("NO_DONG", "string");
        	this.dsSave.addColumn("NO_FLOOR", "string");
        	this.dsSave.addColumn("NO_HO", "string");
        	this.dsSave.addColumn("NO_UNIONMEMBER", "string");
        	this.dsSave.addColumn("DT_CONTRACT", "string");
        	this.dsSave.addColumn("AM_RECEIVED", "bigdecimal");
        	this.dsSave.addColumn("TY_RECEIPT", "string");
        	this.dsSave.addColumn("TY_POSITION", "string");
        	this.dsSave.addColumn("CD_GUJA", "string");
        	this.dsSave.addColumn("YN_DELAY", "string");
        	this.dsSave.addColumn("NO_CONTRACT", "string");
        	this.dsSave.addColumn("ID_UPDATE", "string");
        	this.dsSave.addColumn("CD_CARD", "string");
        	this.dsSave.addColumn("DS_CARD", "string");
        	this.dsSave.addColumn("NO_APPROVAL", "string");
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

        	if(id == "cfCD_GUJA") {
        		dsUserParam.setColumn(nrow, "CD_ACNTUNIT", this.dsData.getColumn(0, "CD_ACNTUNIT"));
        		dsUserParam.setColumn(nrow, "FLAG", "5");
        	}

        	return true;
        };

        this.fnAfterCDTextChanged = function(id, codeFindData) {
        	var arrData = codeFindData;
        	if(id == "cfCD_GUJA") {
        		this.cfCD_GUJA.form.DSTextBox.set_value(arrData[0]["NO_GUJA"]);
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
        	if (!this.fnSaveValidate()) return false;

        	this.dsSave.clearData();
        	this.dsSave.addRow();

        	this.dsSave.setColumn(0, "CD_ACNTUNIT", this.dsData.getColumn(0, "CD_ACNTUNIT").substr(0, 6));
        	this.dsSave.setColumn(0, "TY_GUBUN", this.dsData.getColumn(0, "CD_ACNTUNIT").substr(6, 1));
        	this.dsSave.setColumn(0, "NO_CHASU", this.dsData.getColumn(0, "CD_ACNTUNIT").substr(7, 2));
        	this.dsSave.setColumn(0, "NO_DONG", this.dsData.getColumn(0, "NO_DONG"));
        	this.dsSave.setColumn(0, "NO_FLOOR", this.dsData.getColumn(0, "NO_FLOOR"));
        	this.dsSave.setColumn(0, "NO_HO", this.dsData.getColumn(0, "NO_HO"));
        	this.dsSave.setColumn(0, "NO_UNIONMEMBER", this.dsData.getColumn(0, "NO_UNIONMEMBER"));
        	this.dsSave.setColumn(0, "DT_CONTRACT", this.dsData.getColumn(0, "DT_CONTRACT"));
        	this.dsSave.setColumn(0, "AM_RECEIVED", this.dsData.getColumn(0, "AM_RECEIVED"));
        	this.dsSave.setColumn(0, "TY_RECEIPT", this.dsData.getColumn(0, "TY_RECEIPT"));
        	this.dsSave.setColumn(0, "TY_POSITION", this.dsData.getColumn(0, "TY_POSITION"));
        	this.dsSave.setColumn(0, "CD_GUJA", this.dsData.getColumn(0, "CD_GUJA"));
        	this.dsSave.setColumn(0, "YN_DELAY", this.dsData.getColumn(0, "YN_DELAY"));
        	this.dsSave.setColumn(0, "NO_CONTRACT", this.dsData.getColumn(0, "NO_CONTRACT"));
        	this.dsSave.setColumn(0, "ID_UPDATE", this.AuthClient.ID_USER);
        	this.dsSave.setColumn(0, "CD_CARD", this.dsData.getColumn(0, "CD_CARD"));
        	this.dsSave.setColumn(0, "DS_CARD", this.cfCD_CARD.form.DSTextBox.value);
        	this.dsSave.setColumn(0, "NO_APPROVAL", this.dsData.getColumn(0, "NO_APPROVAL"));

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


        };

        // 취소 버튼 클릭
        this.divData_btnCancel_onclick = function(obj,e)
        {
        	// this.close()가 작동하지 않았고,
        	// 부모의 callback 함수로 데이터를 넘겨주기 위해 작성되었습니다.
        	this.getParentContext().close(false);
        };


        this.fnSaveValidate = function() {
        	var validate = true;

        	if (this.gfnIsNull(this.dsData.getColumn(0,"DT_CONTRACT"))) {
        		validate = false;
        		this.gfnAlert("수납일자는 반드시 입력 하셔야 합니다.");
        	}else if (this.dsData.getColumn(0,"DT_CONTRACT") <= 0) {
        		validate = false;
        		this.gfnAlert("수납금액을 잘못 입력하였습니다.");
        	}else if (this.gfnIsNull(this.dsData.getColumn(0,"DT_CONTRACT")) || this.dsData.getColumn(0,"DT_CONTRACT") == 0) {
        		validate = false;
        		this.gfnAlert("수납금액이 입력되지 않았습니다.");
        	}

        	if (this.dsData.getColumn(0,"TY_POSITION") == "F") {	// 카드일때
        		if (this.gfnIsNull(this.dsData.getColumn(0,"CD_CARD"))) {
        			validate = false;
        			this.gfnAlert("카드사정보가 입력되지 않았습니다.");
        		}
        		if (this.gfnIsNull(this.dsData.getColumn(0,"NO_APPROVAL"))) {
        			validate = false;
        			this.gfnAlert("승인번호가 입력되지 않았습니다.");
        		}
        	}else if ((this.dsData.getColumn(0,"TY_POSITION") != "1" && this.gfnIsNull(this.dsData.getColumn(0,"CD_GUJA"))) || (this.dsData.getColumn(0,"TY_POSITION") != "F" && this.gfnIsNull(this.dsData.getColumn(0,"CD_GUJA")))) {
        		validate = false;
        		this.gfnAlert("계좌정보가 입력되지 않았습니다.");
        	}

        	return validate;
        }

        // 수납구분 라디오 값 변경시 이벤트
        this.divData_rdoTY_RECEIPT_onitemchanged = function(obj,e)
        {
        	if(this.dsData.getColumn(0,"TY_RECEIPT") == "C"){
        		this.dsData.setColumn(0, "TY_POSITION", "3");
        		this.cboTY_POSITION.set_enable(false);
        	}else{
        		this.dsData.setColumn(0, "TY_POSITION", "2");
        		this.cboTY_POSITION.set_enable(true);
        	}
        	//this.cboTY_POSITION.set_index(0);
        };

        // 수납처구분 콤보 값 변경시 이벤트
        this.divData_cboTY_POSITION_onitemchanged = function(obj,e)
        {
        	if(this.dsData.getColumn(0,"TY_POSITION") == "1"){
        		this.cfCD_CARD.set_enable(false);
        		this.dsData.setColumn(0, "CD_CARD", "");
        		this.cfCD_CARD.form.DSTextBox.set_value("");
        		this.edtNO_APPROVAL.set_enable(false);
        		this.dsData.setColumn(0, "NO_APPROVAL", "");

        		this.cfCD_GUJA.set_enable(false);
        		this.dsData.setColumn(0, "CD_GUJA", "");
        		this.cfCD_GUJA.form.DSTextBox.set_value("");
        	}else if(this.dsData.getColumn(0,"TY_POSITION") == "F"){
        		this.cfCD_CARD.set_enable(true);
        		this.edtNO_APPROVAL.set_enable(true);

        		this.cfCD_GUJA.set_enable(false);
        		this.dsData.setColumn(0, "CD_GUJA", "");
        		this.cfCD_GUJA.form.DSTextBox.set_value("");
        	}else{
        		this.cfCD_CARD.set_enable(false);
        		this.dsData.setColumn(0, "CD_CARD", "");
        		this.cfCD_CARD.form.DSTextBox.set_value("");
        		this.edtNO_APPROVAL.set_enable(false);
        		this.dsData.setColumn(0, "NO_APPROVAL", "");

        		this.cfCD_GUJA.set_enable(true);
        	}
        };

        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.form_onload,this);
            this.divData.form.staDS_SITE.addEventHandler("onclick",this.divData_staDS_SITE_onclick,this);
            this.divData.form.btnOk.addEventHandler("onclick",this.divData_btnOk_onclick,this);
            this.divData.form.btnCancel.addEventHandler("onclick",this.divData_btnCancel_onclick,this);
            this.divData.form.cboTY_POSITION.addEventHandler("onitemchanged",this.divData_cboTY_POSITION_onitemchanged,this);
            this.divData.form.rdoTY_RECEIPT.addEventHandler("onitemchanged",this.divData_rdoTY_RECEIPT_onitemchanged,this);
        };
        this.loadIncludeScript("DLF_DLGCONTRACT.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
