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
            this.set_titletext("분양금 수납");
            this.getSetter("maxwidth").set("500");
            this.getSetter("maxheight").set("550");
            if (Form == this.constructor)
            {
                this._setFormPosition(500,550);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("dsList", this);
            obj._setContents("<ColumnInfo><Column id=\"DT_RECEIVED\" type=\"STRING\" size=\"256\"/><Column id=\"AM_RECEIVED\" type=\"BIGDECIMAL\" size=\"256\"/><Column id=\"AM_COMMISSION\" type=\"BIGDECIMAL\" size=\"256\"/><Column id=\"TY_RECEIPT\" type=\"STRING\" size=\"256\"/><Column id=\"TY_POSITION\" type=\"STRING\" size=\"256\"/><Column id=\"CD_GUJA\" type=\"STRING\" size=\"256\"/><Column id=\"DS_GUJA\" type=\"STRING\" size=\"256\"/><Column id=\"CD_CARD\" type=\"STRING\" size=\"256\"/><Column id=\"DS_CARD\" type=\"STRING\" size=\"256\"/><Column id=\"NO_APPROVAL\" type=\"STRING\" size=\"256\"/><Column id=\"TY_MONEY\" type=\"STRING\" size=\"256\"/><Column id=\"CD_FINANCING\" type=\"STRING\" size=\"256\"/><Column id=\"DS_FINANCING\" type=\"STRING\" size=\"256\"/><Column id=\"YN_DELAY\" type=\"STRING\" size=\"256\"/><Column id=\"YN_DISCOUNT\" type=\"STRING\" size=\"256\"/><Column id=\"DT_PAYBACK\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row/></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("_dsProc", this);
            obj._setContents("<ColumnInfo><Column id=\"TARGET\" type=\"STRING\" size=\"256\"/><Column id=\"SP\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"TARGET\">save</Col><Col id=\"SP\">DRCPR_RECEIPT_HANDLE3</Col></Row><Row><Col id=\"TARGET\">select2</Col><Col id=\"SP\">DRCPR_RECEIPT_SALEDISCOUNT</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsTY_RECEIPT", this);
            obj._setContents("<ColumnInfo><Column id=\"CD_CODE\" type=\"STRING\" size=\"256\"/><Column id=\"DS_CODE\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"CD_CODE\">N</Col><Col id=\"DS_CODE\">정상</Col></Row><Row><Col id=\"CD_CODE\">D</Col><Col id=\"DS_CODE\">매출할인</Col></Row><Row><Col id=\"DS_CODE\">마이너스</Col><Col id=\"CD_CODE\">M</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsYN", this);
            obj._setContents("<ColumnInfo><Column id=\"CD_CODE\" type=\"STRING\" size=\"256\"/><Column id=\"DS_CODE\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"CD_CODE\">Y</Col><Col id=\"DS_CODE\">적용함</Col></Row><Row><Col id=\"CD_CODE\">N</Col><Col id=\"DS_CODE\">적용안함</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsTY_POSITION", this);
            obj._setContents("<ColumnInfo><Column id=\"CD_CODE\" type=\"STRING\" size=\"256\"/><Column id=\"DS_CODE\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"CD_CODE\">1</Col><Col id=\"DS_CODE\">M/H(현금)</Col></Row><Row><Col id=\"CD_CODE\">2</Col><Col id=\"DS_CODE\">은행</Col></Row><Row><Col id=\"CD_CODE\">3</Col><Col id=\"DS_CODE\">본사</Col></Row><Row><Col id=\"CD_CODE\">4</Col><Col id=\"DS_CODE\">기타</Col></Row><Row><Col id=\"CD_CODE\">F</Col><Col id=\"DS_CODE\">카드</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsTY_MONEY", this);
            obj._setContents("<ColumnInfo><Column id=\"CD_CODE\" type=\"STRING\" size=\"256\"/><Column id=\"DS_CODE\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"CD_CODE\">1</Col><Col id=\"DS_CODE\">본인</Col></Row><Row><Col id=\"CD_CODE\">2</Col><Col id=\"DS_CODE\">기금융자</Col></Row><Row><Col id=\"CD_CODE\">3</Col><Col id=\"DS_CODE\">알선융자</Col></Row><Row><Col id=\"CD_CODE\">4</Col><Col id=\"DS_CODE\">기타융자</Col></Row><Row><Col id=\"CD_CODE\">9</Col><Col id=\"DS_CODE\">기타</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsResult", this);
            obj._setContents("");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Div("divData","0","0",null,null,"0","0",null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_cssclass("div_DATA_Bg");
            obj.set_text("");
            this.addChild(obj.name, obj);

            obj = new Static("staTITLE","0","20","100.00%","30",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("0");
            obj.set_text("분양금 수납");
            obj.set_cssclass("sta_TITLE_Bg");
            obj.set_textAlign("left");
            this.divData.addChild(obj.name, obj);

            obj = new Static("staSunapInfo","0","staTITLE:5",null,"22","0",null,null,null,null,null,this.divData.form);
            obj.set_taborder("37");
            obj.set_text("수납내역");
            this.divData.addChild(obj.name, obj);

            obj = new Static("sta00","0","staSunapInfo:5","87","30",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("1");
            obj.set_text("수납일자");
            obj.set_cssclass("sta_WF_tablelabelE");
            this.divData.addChild(obj.name, obj);

            obj = new Static("sta01","sta00:-1","staSunapInfo:5",null,"30","0",null,null,null,null,null,this.divData.form);
            obj.set_taborder("2");
            obj.set_cssclass("sta_WF_tablebg");
            obj.set_text("");
            this.divData.addChild(obj.name, obj);

            obj = new Static("sta02","0","sta00:-1","87","30",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("5");
            obj.set_text("수납금액");
            obj.set_cssclass("sta_WF_tablelabelE");
            this.divData.addChild(obj.name, obj);

            obj = new Static("sta03","sta02:-1","sta01:-1",null,"30","0",null,null,null,null,null,this.divData.form);
            obj.set_taborder("6");
            obj.set_cssclass("sta_WF_tablebg");
            obj.set_text("");
            this.divData.addChild(obj.name, obj);

            obj = new Static("sta04","0","sta02:-1","87","30",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("7");
            obj.set_text("수납구분");
            obj.set_cssclass("sta_WF_tablelabelE");
            this.divData.addChild(obj.name, obj);

            obj = new Static("sta05","sta04:-1","sta03:-1",null,"30","0",null,null,null,null,null,this.divData.form);
            obj.set_taborder("8");
            obj.set_cssclass("sta_WF_tablebg");
            obj.set_text("");
            this.divData.addChild(obj.name, obj);

            obj = new Static("sta06","0","sta04:-1","87","30",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("9");
            obj.set_text("수납처구분");
            obj.set_cssclass("sta_WF_tablelabelE");
            this.divData.addChild(obj.name, obj);

            obj = new Static("sta07","sta06:-1","sta05:-1",null,"30","0",null,null,null,null,null,this.divData.form);
            obj.set_taborder("10");
            obj.set_cssclass("sta_WF_tablebg");
            obj.set_text("");
            this.divData.addChild(obj.name, obj);

            obj = new Static("sta08","0","sta06:-1","87","30",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("11");
            obj.set_text("납입계좌");
            obj.set_cssclass("sta_WF_tablelabelE");
            this.divData.addChild(obj.name, obj);

            obj = new Static("sta09","sta08:-1","sta07:-1",null,"30","0",null,null,null,null,null,this.divData.form);
            obj.set_taborder("12");
            obj.set_cssclass("sta_WF_tablebg");
            obj.set_text("");
            this.divData.addChild(obj.name, obj);

            obj = new Static("sta10","0","sta08:-1","87","30",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("13");
            obj.set_text("카드사");
            obj.set_cssclass("sta_WF_tablelabelE");
            this.divData.addChild(obj.name, obj);

            obj = new Static("sta11","sta10:-1","sta09:-1",null,"30","0",null,null,null,null,null,this.divData.form);
            obj.set_taborder("14");
            obj.set_cssclass("sta_WF_tablebg");
            obj.set_text("");
            this.divData.addChild(obj.name, obj);

            obj = new Static("sta12","0","sta10:-1","87","30",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("15");
            obj.set_text("승인번호");
            obj.set_cssclass("sta_WF_tablelabelE");
            this.divData.addChild(obj.name, obj);

            obj = new Static("sta13","sta12:-1","sta11:-1",null,"30","0",null,null,null,null,null,this.divData.form);
            obj.set_taborder("16");
            obj.set_cssclass("sta_WF_tablebg");
            obj.set_text("");
            this.divData.addChild(obj.name, obj);

            obj = new Static("sta14","0","sta12:-1","87","30",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("17");
            obj.set_text("납입구분");
            obj.set_cssclass("sta_WF_tablelabelE");
            this.divData.addChild(obj.name, obj);

            obj = new Static("sta15","sta14:-1","sta13:-1",null,"30","0",null,null,null,null,null,this.divData.form);
            obj.set_taborder("18");
            obj.set_cssclass("sta_WF_tablebg");
            obj.set_text("");
            this.divData.addChild(obj.name, obj);

            obj = new Static("sta16","0","sta14:-1","87","30",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("19");
            obj.set_text("융자사코드");
            obj.set_cssclass("sta_WF_tablelabelE");
            this.divData.addChild(obj.name, obj);

            obj = new Static("sta17","sta16:-1","sta15:-1",null,"30","0",null,null,null,null,null,this.divData.form);
            obj.set_taborder("20");
            obj.set_cssclass("sta_WF_tablebg");
            obj.set_text("");
            this.divData.addChild(obj.name, obj);

            obj = new Static("sta18","0","sta16:-1","87","30",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("21");
            obj.set_text("연체적용");
            obj.set_cssclass("sta_WF_tablelabelE");
            this.divData.addChild(obj.name, obj);

            obj = new Static("sta19","sta18:-1","sta17:-1",null,"30","0",null,null,null,null,null,this.divData.form);
            obj.set_taborder("22");
            obj.set_cssclass("sta_WF_tablebg");
            obj.set_text("");
            this.divData.addChild(obj.name, obj);

            obj = new Static("sta20","0","sta18:-1","87","30",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("23");
            obj.set_text("할인적용");
            obj.set_cssclass("sta_WF_tablelabelE");
            this.divData.addChild(obj.name, obj);

            obj = new Static("sta21","sta20:-1","sta19:-1",null,"30","0",null,null,null,null,null,this.divData.form);
            obj.set_taborder("24");
            obj.set_cssclass("sta_WF_tablebg");
            obj.set_text("");
            this.divData.addChild(obj.name, obj);

            obj = new Button("btnOK","134","420","60","27",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("3");
            obj.set_text("확인");
            this.divData.addChild(obj.name, obj);

            obj = new Button("btnCANCLE","btnOK:30","420","60","27",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("4");
            obj.set_text("취소");
            this.divData.addChild(obj.name, obj);

            obj = new Calendar("tclDT_RECEIVED","sta00:5","87","105","20",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("25");
            obj.set_dateformat("yyyy-MM-dd");
            obj.set_editformat("yyyyMMdd");
            obj.set_autoselect("true");
            this.divData.addChild(obj.name, obj);

            obj = new MaskEdit("txtAM_RECEIVED","sta02:5","sta01:4","120","20",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("26");
            obj.set_format("#,##0");
            this.divData.addChild(obj.name, obj);

            obj = new Static("sta22","txtAM_RECEIVED:5","sta01:4","20","20",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("27");
            obj.set_text("원");
            this.divData.addChild(obj.name, obj);

            obj = new Radio("rdoTY_RECEIPT","92","sta03:4","228","20",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("28");
            obj.set_direction("vertical");
            obj.set_codecolumn("CD_CODE");
            obj.set_datacolumn("DS_CODE");
            obj.set_innerdataset("dsTY_RECEIPT");
            obj.set_fittocontents("width");
            this.divData.addChild(obj.name, obj);

            obj = new Combo("cboTY_POSITION","92","sta05:4","200","20",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("29");
            obj.set_innerdataset("dsTY_POSITION");
            obj.set_datacolumn("DS_CODE");
            obj.set_codecolumn("CD_CODE");
            this.divData.addChild(obj.name, obj);

            obj = new Div("cfCD_GUJA","92","sta07:4","300","20",null,null,null,null,null,null,this.divData.form);
            obj.getSetter("CodeFindName").set("DRX_CFACCOUNT_CODEFIND");
            obj.getSetter("CDTextWidth").set("70");
            obj.set_taborder("30");
            obj.set_url("cmm::cmmCodeFind.xfdl");
            this.divData.addChild(obj.name, obj);

            obj = new Div("cfCD_CARD","92","sta09:4","300","20",null,null,null,null,null,null,this.divData.form);
            obj.getSetter("CodeFindName").set("DRX_CARD_CODEFIND");
            obj.getSetter("CDTextWidth").set("70");
            obj.set_taborder("31");
            obj.set_url("cmm::cmmCodeFind.xfdl");
            this.divData.addChild(obj.name, obj);

            obj = new Edit("txtNO_APPROVAL","92","sta11:4","150","20",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("32");
            this.divData.addChild(obj.name, obj);

            obj = new Combo("cboTY_MONEY","92","sta13:4","120","20",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("33");
            obj.set_innerdataset("dsTY_MONEY");
            obj.set_datacolumn("DS_CODE");
            obj.set_codecolumn("CD_CODE");
            this.divData.addChild(obj.name, obj);

            obj = new Div("cfCD_FINANCING","92","sta15:4","300","20",null,null,null,null,null,null,this.divData.form);
            obj.getSetter("CodeFindName").set("DRX_CFFINANCING_CODEFIND");
            obj.getSetter("CDTextWidth").set("70");
            obj.set_taborder("34");
            obj.set_url("cmm::cmmCodeFind.xfdl");
            this.divData.addChild(obj.name, obj);

            obj = new Radio("rdoYN_DELAY","92","sta17:4","178","20",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("35");
            obj.set_direction("vertical");
            obj.set_codecolumn("CD_CODE");
            obj.set_datacolumn("DS_CODE");
            obj.set_innerdataset("dsYN");
            obj.set_fittocontents("width");
            this.divData.addChild(obj.name, obj);

            obj = new Radio("rdoYN_DISCOUNT","92","sta19:4","178","20",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("36");
            obj.set_direction("vertical");
            obj.set_codecolumn("CD_CODE");
            obj.set_datacolumn("DS_CODE");
            obj.set_innerdataset("dsYN");
            obj.set_fittocontents("width");
            this.divData.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this
            obj = new Layout("default","",this._adjust_width,this._adjust_height,this,function(p){});
            this.addLayout(obj.name, obj);
            
            // BindItem Information
            obj = new BindItem("item0","divData.form.tclDT_RECEIVED","value","dsList","DT_RECEIVED");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item1","divData.form.txtAM_RECEIVED","value","dsList","AM_RECEIVED");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item2","divData.form.rdoTY_RECEIPT","value","dsList","TY_RECEIPT");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item3","divData.form.cboTY_POSITION","value","dsList","TY_POSITION");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item4","divData.form.cfCD_GUJA.form.CDTextBox","value","dsList","CD_GUJA");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item5","divData.form.cfCD_GUJA.form.DSTextBox","value","dsList","DS_GUJA");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item6","divData.form.cfCD_CARD.form.CDTextBox","value","dsList","CD_CARD");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item7","divData.form.cfCD_CARD.form.DSTextBox","value","dsList","DS_CARD");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item9","divData.form.txtNO_APPROVAL","value","dsList","NO_APPROVAL");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item10","divData.form.cboTY_MONEY","value","dsList","TY_MONEY");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item11","divData.form.cfCD_FINANCING.form.CDTextBox","value","dsList","CD_FINANCING");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item12","divData.form.cfCD_FINANCING.form.DSTextBox","value","dsList","DS_FINANCING");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item13","divData.form.rdoYN_DELAY","value","dsList","YN_DELAY");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item14","divData.form.rdoYN_DISCOUNT","value","dsList","YN_DISCOUNT");
            this.addChild(obj.name, obj);
            obj.bind();
            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {
            this._addPreloadList("fdl","cmm::cmmCodeFind.xfdl");
        };
        
        // User Script
        this.registerScript("DRC_DLGRECEIPT.xfdl", function() {
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

        	this.CD_ACNTUNIT = this.getOwnerFrame().CD_ACNTUNIT;
        	this.NO_DONG = this.getOwnerFrame().NO_DONG;
        	this.NO_FLOOR = this.getOwnerFrame().NO_FLOOR;
        	this.NO_HO = this.getOwnerFrame().NO_HO;
        	this.NO_UNIONMEMBER = this.getOwnerFrame().NO_UNIONMEMBER;
        	this.YN_VACNT = this.getOwnerFrame().YN_VACNT;
        	this.CD_GUJA = this.getOwnerFrame().CD_GUJA;
        	this.NO_GUJA = this.getOwnerFrame().NO_GUJA;

        	if (!this.gfnIsNull(this.getOwnerFrame().IsSalediscount)) {
        		if (this.getOwnerFrame().IsSalediscount == "false")
        			this.dsTY_RECEIPT.deleteRow(1);
        	}
        	this.staSunapInfo.set_text("수납정보 ( " + this.NO_DONG + "동 " + this.NO_FLOOR + "층 " + this.NO_HO + "호 )");


        	this.dsList.setColumn(0, "DT_RECEIVED", this.gfnGetDate());
        	this.dsList.setColumn(0, "AM_RECEIVED", 0);
        	this.dsList.setColumn(0, "AM_COMMISSION", 0);
        	this.dsList.setColumn(0, "TY_RECEIPT", "N");
        	this.dsList.setColumn(0, "YN_DELAY", "Y");
        	this.dsList.setColumn(0, "YN_DISCOUNT", "Y");
        	this.cfCD_FINANCING.set_enable(false);
        	this.dsList.setColumn(0, "TY_MONEY", "1");
        	if (this.YN_VACNT == "Y") {
        		this.dsList.setColumn(0, "CD_GUJA", this.CD_GUJA);
        		this.dsList.setColumn(0, "DS_GUJA", this.NO_GUJA);
        	}

        	this.txtAM_RECEIVED.setFocus();
        };

        /************************************************************************
         * 변수 선언
         ************************************************************************/
        this.fnSetVariable = function() {
        	this.tclDT_RECEIVED = this.divData.form.tclDT_RECEIVED;
        	this.txtAM_RECEIVED = this.divData.form.txtAM_RECEIVED;
        	this.rdoTY_RECEIPT = this.divData.form.rdoTY_RECEIPT;
        	this.cboTY_POSITION = this.divData.form.cboTY_POSITION;
        	this.cfCD_GUJA = this.divData.form.cfCD_GUJA;
        	this.cfCD_CARD = this.divData.form.cfCD_CARD;
        	this.txtNO_APPROVAL = this.divData.form.txtNO_APPROVAL;
        	this.cboTY_MONEY = this.divData.form.cboTY_MONEY;
        	this.cfCD_FINANCING = this.divData.form.cfCD_FINANCING;
        	this.rdoYN_DELAY = this.divData.form.rdoYN_DELAY
        	this.rdoYN_DISCOUNT = this.divData.form.rdoYN_DISCOUNT;
        	this.staSunapInfo = this.divData.form.staSunapInfo;
        	this.sta08 = this.divData.form.sta08;	//납입계좌 label
        	this.sta10 = this.divData.form.sta10;	//카드사 label
        	this.sta12 = this.divData.form.sta12;	//승인번호 label
        };

        /************************************************************************
         * 이벤트 설정
         ************************************************************************/
        this.fnSetEvent = function() {
        	this.cfCD_GUJA.BeforeUserDataSetParam = "fnBeforeUserDataSetParam";
        	this.cfCD_FINANCING.BeforeUserDataSetParam = "fnBeforeUserDataSetParam";
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
        	this.dsSave.addColumn("DT_RECEIVED", "string");
        	this.dsSave.addColumn("AM_RECEIVED", "bigdecimal");
        	this.dsSave.addColumn("TY_RECEIPT", "string");
        	this.dsSave.addColumn("TY_POSITION", "string");
        	this.dsSave.addColumn("DT_REPAYMENT", "string");
        	this.dsSave.addColumn("CD_GUJA", "string");
        	this.dsSave.addColumn("TY_MONEY", "string");
        	this.dsSave.addColumn("CD_VENDOR", "string");
        	this.dsSave.addColumn("YN_DELAY", "string");
        	this.dsSave.addColumn("YN_DISCOUNT", "string");
        	this.dsSave.addColumn("AM_SETTLE", "bigdecimal");
        	this.dsSave.addColumn("CD_ACCOUNT", "string");
        	this.dsSave.addColumn("YN_AUTO", "string");
        	this.dsSave.addColumn("DT_TRADE", "string");
        	this.dsSave.addColumn("TM_TRADE", "string");
        	this.dsSave.addColumn("CD_TRADE", "string");
        	this.dsSave.addColumn("ID_INSERT", "string");
        	this.dsSave.addColumn("CD_CARD", "string");
        	this.dsSave.addColumn("DS_CARD", "string");
        	this.dsSave.addColumn("NO_APPROVAL", "string");
        	this.dsSave.addColumn("AM_DEPOSITFEE", "bigdecimal");
        	this.dsSave.addColumn("CD_CHAIP", "string");
        	this.dsSave.addColumn("DT_PAYBACK", "string");
        	this.dsSave.addColumn("CD_DEPT_BE", "string");
        	this.dsSave.addColumn("TY_DAEMUL", "string");

        	this.dsSelect = new Dataset();
        	this.dsSelect.addColumn("CD_ACNTUNIT", "string");
        	this.dsSelect.addColumn("TY_GUBUN", "string");
        	this.dsSelect.addColumn("NO_CHASU", "string");
        	this.dsSelect.addColumn("NO_DONG", "string");
        	this.dsSelect.addColumn("NO_FLOOR", "string");
        	this.dsSelect.addColumn("NO_HO", "string");
        	this.dsSelect.addColumn("NO_UNIONMEMBER", "string");
        	this.dsSelect.addColumn("DT_RECEIVED", "string");
        	this.dsSelect.addColumn("AM_RECEIVED", "bigdecimal");
        	this.dsSelect.addColumn("TY_RECEIPT", "string");
        	this.dsSelect.addColumn("TY_POSITION", "string");
        	this.dsSelect.addColumn("DT_REPAYMENT", "string");
        	this.dsSelect.addColumn("CD_GUJA", "string");
        	this.dsSelect.addColumn("TY_MONEY", "string");
        	this.dsSelect.addColumn("CD_VENDOR", "string");
        	this.dsSelect.addColumn("YN_DELAY", "string");
        	this.dsSelect.addColumn("YN_DISCOUNT", "string");
        	this.dsSelect.addColumn("AM_SETTLE", "bigdecimal");
        	this.dsSelect.addColumn("CD_ACCOUNT", "string");
        	this.dsSelect.addColumn("YN_AUTO", "string");
        	this.dsSelect.addColumn("DT_TRADE", "string");
        	this.dsSelect.addColumn("TM_TRADE", "string");
        	this.dsSelect.addColumn("CD_TRADE", "string");
        	this.dsSelect.addColumn("ID_INSERT", "string");
        	this.dsSelect.addColumn("CD_CARD", "string");
        	this.dsSelect.addColumn("DS_CARD", "string");
        	this.dsSelect.addColumn("NO_APPROVAL", "string");
        	this.dsSelect.addColumn("AM_DEPOSITFEE", "bigdecimal");
        	this.dsSelect.addColumn("CD_CHAIP", "string");
        	this.dsSelect.addColumn("DT_PAYBACK", "string");
        	this.dsSelect.addColumn("CD_DEPT_BE", "string");
        	this.dsSelect.addColumn("TY_DAEMUL", "string");
        }

        /************************************************************************
         * Validate
         ************************************************************************/
        this.fnSaveValidate = function() {
        	if (this.gfnIsNull(this.dsList.getColumn(0, "DT_RECEIVED"))) {
        		this.fnVaidateCallback = function() {
        			this.tclDT_RECEIVED.setFocus();
        		}
        		this.gfnAlert("수납일자가 입력되지 않았습니다.", "fnVaidateCallback");
        		return false;
        	}

        	if (this.gfnIsNull(this.dsList.getColumn(0, "AM_RECEIVED"))) {
        		this.fnVaidateCallback = function() {
        			this.txtAM_RECEIVED.setFocus();
        		}
        		this.gfnAlert("수납금액이 입력되지 않았습니다.", "fnVaidateCallback");
        		return false;
        	}
        	else {
        		if (nexacro.toNumber(this.dsList.getColumn(0, "AM_RECEIVED")) <= 0) {
        			this.fnVaidateCallback = function() {
        				this.txtAM_RECEIVED.setFocus();
        			}
        			this.gfnAlert("수납금액을 잘못 입력하였습니다.", "fnVaidateCallback");
        			return false;
        		}
        	}

        	if (this.dsList.getColumn(0, "TY_POSITION") == "F") {
        		if (this.gfnIsNull(this.dsList.getColumn(0, "CD_CARD"))) {
        			this.fnVaidateCallback = function() {
        				this.cfCD_CARD.form.CDTextBox.setFocus();
        			}
        			this.gfnAlert("카드사정보가 입력되지 않았습니다.", "fnVaidateCallback");
        			return false;
        		}
        		else if (this.gfnIsNull(this.dsList.getColumn(0, "NO_APPROVAL"))) {
        			this.fnVaidateCallback = function() {
        				this.txtNO_APPROVAL.setFocus();
        			}
        			this.gfnAlert("승인번호가 입력되지 않았습니다.", "fnVaidateCallback");
        			return false;
        		}
        	}
        	else if (this.dsList.getColumn(0, "TY_POSITION") != "1"
        			&& this.dsList.getColumn(0, "TY_RECEIPT") != "D" && this.dsList.getColumn(0, "TY_RECEIPT") != "M"
        			&& this.gfnIsNull(this.dsList.getColumn(0, "CD_GUJA"))) {
        		this.fnVaidateCallback = function() {
        			this.cfCD_GUJA.form.CDTextBox.setFocus();
        		}
        		this.gfnAlert("계좌정보가 입력되지 않았습니다.", "fnVaidateCallback");
        		return false;
        	}

        	if (this.dsList.getColumn(0, "TY_MONEY") == "2" || this.dsList.getColumn(0, "TY_MONEY") == "3" && this.gfnIsNull(this.dsList.getColumn(0, "CD_FINANCING"))) {
        		this.fnVaidateCallback = function() {
        			this.cfCD_FINANCING.form.CDTextBox.setFocus();
        		}
        		this.gfnAlert("융자사정보가 입력되지 않았습니다.", "fnVaidateCallback");
        		return false;
        	}

        	return true;
        };

        /************************************************************************
         * 코드파인드 이벤트
         ************************************************************************/
        this.fnBeforeUserDataSetParam = function(id, dsUserParam, nrow) {
        	if (id == "cfCD_GUJA") {
        		dsUserParam.setColumn(nrow, "CD_ACNTUNIT", this.CD_ACNTUNIT);
        	}
        	else if (id == "cfCD_FINANCING") {
        		dsUserParam.setColumn(nrow, "CD_ACNTUNIT", this.CD_ACNTUNIT);
        		dsUserParam.setColumn(nrow, "YN_OPTION", "N");
        	}
        	return true;
        };



        /************************************************************************
         * 콜백 이벤트
         ************************************************************************/
        this.fnCallback = function(svcID, errorCode, errorMsg) {
        	//if(svcID == "select"){
        	if(svcID == "save"){
        		if (errorCode == 0) {
        			if (this.dsResult.rowcount == 0) {
        				this.gfnAlert("분양금 수납에 실패하였습니다.");
        			}
        			else {
        				this.btnOK_callback = function() {
        					this.gfnSetFormStatus(this);
        					this.getParentContext().close(true);
        				}
        				this.gfnAlert(this.dsResult.getColumn(0, "MSG"), "btnOK_callback");
        			}
        		}
        		else {
        			this.gfnAlert(errorMsg);
        		}
         	}
        }

        /************************************************************************
         * 기타 이벤트
         ************************************************************************/
        this.dsList_onvaluechanged = function(obj,e) {
        	if (e.oldvalue != e.newvalue) {
        		if (e.columnid == "DT_RECEIVED") {
        			if (e.newvalue.length != 0 && (this.dsList.getColumn(0, "TY_POSITION") == "단기대여금" || this.dsList.getColumn(0, "TY_POSITION") == "장기대여금")) {
        				this.dsList.setColumn(0, "DT_PAYBACK", e.newvalue);
        			}
        		}
        		else if (e.columnid == "TY_RECEIPT") {
        			switch (e.newvalue) {
        				case "N":	//정상
        					this.dsList.setColumn(0, "TY_POSITION", "2");
        					break;
        				case "D":	//매출할인
        					this.dsList.setColumn(0, "TY_POSITION", "3");
        					this.cboTY_POSITION.set_readonly(true);
        					this.cboTY_MONEY.set_readonly(true);
        					this.cfCD_GUJA.set_enable(false);
        					this.dsList.setColumn(0, "YN_DELAY", "N");
        					this.rdoYN_DELAY.set_readonly(true);
        					this.dsList.setColumn(0, "YN_DISCOUNT", "N");
        					this.rdoYN_DISCOUNT.set_readonly(true);
        					this.dsList.setColumn(0, "CD_GUJA", "");
        					this.dsList.setColumn(0, "DS_GUJA", "");
        					break;
        				case "M":	//마이너스
        					//this.dsList.setColumn(0, "TY_POSITION", "2");
        					this.cboTY_POSITION.set_readonly(false);
        					this.dsList.setColumn(0, "YN_DELAY", "N");
        					this.rdoYN_DELAY.set_readonly(false);
        					this.dsList.setColumn(0, "YN_DISCOUNT", "N");
        					this.rdoYN_DELAY.set_readonly(false);
        					this.cfCD_GUJA.set_enable(false);
        					break;
        			}
        		}
        		else if (e.columnid == "TY_POSITION") {
        			switch (e.newvalue) {
        				case "1":
        					this.cboTY_MONEY.set_readonly(false);
        					this.dsList.setColumn(0, "YN_DELAY", "Y");
        					this.rdoYN_DELAY.set_readonly(false);
        					this.dsList.setColumn(0, "YN_DISCOUNT", "Y");
        					this.rdoYN_DISCOUNT.set_readonly(false);
        					this.cfCD_GUJA.set_enable(false);
        					this.dsList.setColumn(0, "CD_GUJA", this.YN_VACNT == "Y" ? this.CD_GUJA : "");
        					this.dsList.setColumn(0, "DS_GUJA", this.YN_VACNT == "Y" ? this.NO_GUJA : "");
        					this.txtNO_APPROVAL.set_readonly(true);
        					this.dsList.setColumn(0, "NO_APPROVAL", "");
        					this.cfCD_CARD.set_enable(false);
        					this.dsList.setColumn(0, "CD_CARD", "");
        					this.dsList.setColumn(0, "DS_CARD", "");
        					break;
        				case "F":
        					this.dsList.setColumn(0, "TY_MONEY", "9");
        					this.cboTY_MONEY.set_readonly(true);
        					this.dsList.setColumn(0, "YN_DELAY", "Y");
        					this.rdoYN_DELAY.set_readonly(false);
        					this.dsList.setColumn(0, "YN_DISCOUNT", "Y");
        					this.rdoYN_DISCOUNT.set_readonly(false);
        					this.cfCD_GUJA.set_enable(false);
        					this.dsList.setColumn(0, "CD_GUJA", "");
        					this.dsList.setColumn(0, "DS_GUJA", "");
        					this.txtNO_APPROVAL.set_readonly(false);
        					this.cfCD_CARD.set_enable(true);
        					break;
        				case "3":
        					this.cboTY_MONEY.set_readonly(false);
        					this.dsList.setColumn(0, "YN_DELAY", "Y");
        					this.rdoYN_DELAY.set_readonly(false);
        					this.dsList.setColumn(0, "YN_DISCOUNT", "Y");
        					this.rdoYN_DISCOUNT.set_readonly(false);
        					this.cfCD_GUJA.set_enable(false);
        					this.dsList.setColumn(0, "CD_GUJA", "");
        					this.dsList.setColumn(0, "DS_GUJA", "");
        					this.txtNO_APPROVAL.set_readonly(true);
        					this.dsList.setColumn(0, "NO_APPROVAL", "");
        					this.cfCD_CARD.set_enable(false);
        					this.dsList.setColumn(0, "CD_CARD", "");
        					this.dsList.setColumn(0, "DS_CARD", "");
        					break;
        				default:
        					this.cboTY_MONEY.set_readonly(false);
        					this.dsList.setColumn(0, "YN_DELAY", "Y");
        					this.rdoYN_DELAY.set_readonly(false);
        					this.dsList.setColumn(0, "YN_DISCOUNT", "Y");
        					this.rdoYN_DISCOUNT.set_readonly(false);
        					this.cfCD_GUJA.set_enable(this.YN_VACNT == "Y" ? false : true);
        					this.dsList.setColumn(0, "CD_GUJA", this.YN_VACNT == "Y" ? this.CD_GUJA : "");
        					this.dsList.setColumn(0, "DS_GUJA", this.YN_VACNT == "Y" ? this.NO_GUJA : "");
        					this.txtNO_APPROVAL.set_readonly(true);
        					this.dsList.setColumn(0, "NO_APPROVAL", "");
        					this.cfCD_CARD.set_enable(false);
        					this.dsList.setColumn(0, "CD_CARD", "");
        					this.dsList.setColumn(0, "DS_CARD", "");
        					break;
        			}

        			if (e.newvalue == "F") {
        				this.sta08.set_textDecoration("");
        				this.sta10.set_textDecoration("underline");
        				this.sta12.set_textDecoration("underline");
        			}
        			else {
        				this.sta08.set_textDecoration("underline");
        				this.sta10.set_textDecoration("");
        				this.sta12.set_textDecoration("");
        			}
        		}
        		else if (e.columnid == "TY_MONEY") {
        			switch (e.newvalue) {
        				case "2":
        				case "3":
        				case "4":
        					this.cfCD_FINANCING.set_enable(true);
        					break;
        				default:
        					this.cfCD_FINANCING.set_enable(false);
        					this.dsList.setColumn(0, "CD_FINANCING", "");
        					this.dsList.setColumn(0, "DS_FINANCING", "");
        					break;
        			}
        		}
        	}
        };

        this.fnReceiptSelectData = function() {
        	if (this.dsList.getColumn(0, "TY_RECEIPT") == "D") {

        		this.dsSelect.clearData();
        		this.dsSelect.addRow();
        		this.dsSelect.setColumn(0, "CD_ACNTUNIT", this.CD_ACNTUNIT.substr(0, 6));
        		this.dsSelect.setColumn(0, "TY_GUBUN", this.CD_ACNTUNIT.substr(6, 1));
        		this.dsSelect.setColumn(0, "NO_CHASU", this.CD_ACNTUNIT.substr(7, 2));
        		this.dsSelect.setColumn(0, "NO_DONG", this.NO_DONG);
        		this.dsSelect.setColumn(0, "NO_FLOOR", this.NO_FLOOR);
        		this.dsSelect.setColumn(0, "NO_HO", this.NO_HO);
        		this.dsSelect.setColumn(0, "NO_UNIONMEMBER", this.NO_UNIONMEMBER);
        		this.dsSelect.setColumn(0, "DT_RECEIVED", this.dsList.getColumn(0, "DT_RECEIVED"));
        		this.dsSelect.setColumn(0, "AM_RECEIVED", this.dsList.getColumn(0, "AM_RECEIVED"));
        		this.dsSelect.setColumn(0, "TY_RECEIPT", this.dsList.getColumn(0, "TY_RECEIPT"));
        		this.dsSelect.setColumn(0, "TY_POSITION", this.dsList.getColumn(0, "TY_POSITION"));
        		this.dsSelect.setColumn(0, "DT_REPAYMENT", "");
        		this.dsSelect.setColumn(0, "CD_GUJA", this.dsList.getColumn(0, "CD_GUJA"));
        		this.dsSelect.setColumn(0, "TY_MONEY", this.dsList.getColumn(0, "TY_MONEY"));
        		this.dsSelect.setColumn(0, "CD_VENDOR", "");
        		this.dsSelect.setColumn(0, "YN_DELAY", this.dsList.getColumn(0, "YN_DELAY"));
        		this.dsSelect.setColumn(0, "YN_DISCOUNT", this.dsList.getColumn(0, "YN_DISCOUNT"));
        		this.dsSelect.setColumn(0, "AM_SETTLE", 0);
        		this.dsSelect.setColumn(0, "CD_ACCOUNT", "");
        		this.dsSelect.setColumn(0, "YN_AUTO", "N");
        		this.dsSelect.setColumn(0, "DT_TRADE", "");
        		this.dsSelect.setColumn(0, "TM_TRADE", "");
        		this.dsSelect.setColumn(0, "CD_TRADE", "");
        		this.dsSelect.setColumn(0, "ID_INSERT", this.AuthClient.ID_USER);
        		this.dsSelect.setColumn(0, "CD_CARD", this.dsList.getColumn(0, "CD_CARD"));
        		this.dsSelect.setColumn(0, "DS_CARD", this.dsList.getColumn(0, "DS_CARD"));
        		this.dsSelect.setColumn(0, "NO_APPROVAL", this.dsList.getColumn(0, "NO_APPROVAL"));
        		this.dsSelect.setColumn(0, "AM_DEPOSITFEE", 0);
        		this.dsSelect.setColumn(0, "CD_CHAIP", "");
        		this.dsSelect.setColumn(0, "DT_PAYBACK", this.dsList.getColumn(0, "DT_PAYBACK"));
        		this.dsSelect.setColumn(0, "CD_DEPT_BE", "");
        		this.dsSelect.setColumn(0, "TY_DAEMUL", "");

        	// 	var strSvcId = "save";
        	// 	var strInData = "save=dsSave";
        	// 	var strOutData = "dsResult=save0";
        	// 	if (this.dsList.getColumn(0, "TY_RECEIPT") == "D") {
        	// 		var strSvcId = "select";
        	// 		var strInData = "select2=dsSelect";
        	// 		var strOutData = "dsResult=select20";
        	// 	}

        	// 	var strInData = "select=dsSelect";
        	// 	var strOutData = "dsResult=select0";
        	// 	if (this.dsList.getColumn(0, "TY_RECEIPT") == "D") {
        	// 		var strInData = "select2=dsSelect";
        	// 		var strOutData = "dsResult=select20";
        	// 	}

        		var strSvcId    = "select";
        		var strSvcType  = "grid";
        		var inProc		= "_dsProc";
        		var inData      = "select2=dsSelect";
        		var outData     = "dsResult=select20";
        		var strArg      = "";
        		var callBackFnc = "fnCallback";

        		this.gfnTransaction( strSvcId , 	// transaction을 구분하기 위한 svc id값
        							strSvcType , 	// trabsaction을 요청할 구분
        							inProc,			// Procedure 정보 Dataset 이름
        							inData , 		// 입력값으로 보낼 dataset id , a=b형태로 실제이름과 입력이름을 매칭
        							outData , 		// 처리결과값으로 받을 dataset id, a=b형태로 실제이름과 입력이름을 매칭
        							strArg, 			// 입력갑스로 보낼 arguments, strFormData="20120607"
        							callBackFnc); // 통신방법 정의 [생략가능]
        	}
        	else {
        		this.dsSave.clearData();
        		this.dsSave.addRow();
        		this.dsSave.setColumn(0, "CD_ACNTUNIT", this.CD_ACNTUNIT.substr(0, 6));
        		this.dsSave.setColumn(0, "TY_GUBUN", this.CD_ACNTUNIT.substr(6, 1));
        		this.dsSave.setColumn(0, "NO_CHASU", this.CD_ACNTUNIT.substr(7, 2));
        		this.dsSave.setColumn(0, "NO_DONG", this.NO_DONG);
        		this.dsSave.setColumn(0, "NO_FLOOR", this.NO_FLOOR);
        		this.dsSave.setColumn(0, "NO_HO", this.NO_HO);
        		this.dsSave.setColumn(0, "NO_UNIONMEMBER", this.NO_UNIONMEMBER);
        		this.dsSave.setColumn(0, "DT_RECEIVED", this.dsList.getColumn(0, "DT_RECEIVED"));
        		this.dsSave.setColumn(0, "AM_RECEIVED", this.dsList.getColumn(0, "AM_RECEIVED"));
        		this.dsSave.setColumn(0, "TY_RECEIPT", this.dsList.getColumn(0, "TY_RECEIPT"));
        		this.dsSave.setColumn(0, "TY_POSITION", this.dsList.getColumn(0, "TY_POSITION"));
        		this.dsSave.setColumn(0, "DT_REPAYMENT", "");
        		this.dsSave.setColumn(0, "CD_GUJA", this.dsList.getColumn(0, "CD_GUJA"));
        		this.dsSave.setColumn(0, "TY_MONEY", this.dsList.getColumn(0, "TY_MONEY"));
        		this.dsSave.setColumn(0, "CD_VENDOR", "");
        		this.dsSave.setColumn(0, "YN_DELAY", this.dsList.getColumn(0, "YN_DELAY"));
        		this.dsSave.setColumn(0, "YN_DISCOUNT", this.dsList.getColumn(0, "YN_DISCOUNT"));
        		this.dsSave.setColumn(0, "AM_SETTLE", 0);
        		this.dsSave.setColumn(0, "CD_ACCOUNT", "");
        		this.dsSave.setColumn(0, "YN_AUTO", "N");
        		this.dsSave.setColumn(0, "DT_TRADE", "");
        		this.dsSave.setColumn(0, "TM_TRADE", "");
        		this.dsSave.setColumn(0, "CD_TRADE", "");
        		this.dsSave.setColumn(0, "ID_INSERT", this.AuthClient.ID_USER);
        		this.dsSave.setColumn(0, "CD_CARD", this.dsList.getColumn(0, "CD_CARD"));
        		this.dsSave.setColumn(0, "DS_CARD", this.dsList.getColumn(0, "DS_CARD"));
        		this.dsSave.setColumn(0, "NO_APPROVAL", this.dsList.getColumn(0, "NO_APPROVAL"));
        		this.dsSave.setColumn(0, "AM_DEPOSITFEE", 0);
        		this.dsSave.setColumn(0, "CD_CHAIP", "");
        		this.dsSave.setColumn(0, "DT_PAYBACK", this.dsList.getColumn(0, "DT_PAYBACK"));
        		this.dsSave.setColumn(0, "CD_DEPT_BE", "");
        		this.dsSave.setColumn(0, "TY_DAEMUL", "");

        		var strSvcId    = "save";
        		var strSvcType  = "select";
        		var inProc		= "_dsProc";
        		var inData      = "save=dsSave";
        		var outData     = "dsResult=save0";
        		var strArg      = "";
        		var callBackFnc = "fnCallback";

        		this.gfnTransaction( strSvcId , 	// transaction을 구분하기 위한 svc id값
        							strSvcType , 	// trabsaction을 요청할 구분
        							inProc,			// Procedure 정보 Dataset 이름
        							inData , 		// 입력값으로 보낼 dataset id , a=b형태로 실제이름과 입력이름을 매칭
        							outData , 		// 처리결과값으로 받을 dataset id, a=b형태로 실제이름과 입력이름을 매칭
        							strArg, 			// 입력갑스로 보낼 arguments, strFormData="20120607"
        							callBackFnc); // 통신방법 정의 [생략가능]
        	}
        };

        this.btnOK_onclick = function(obj,e) {
        	if(!this.fnSaveValidate()) return;

        	this.fnReceiptSelectData();
        };

        this.btnCANCLE_onclick = function(obj,e) {
        	this.getParentContext().close(false);
        };


        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.form_onload,this);
            this.divData.form.btnOK.addEventHandler("onclick",this.btnOK_onclick,this);
            this.divData.form.btnCANCLE.addEventHandler("onclick",this.btnCANCLE_onclick,this);
            this.divData.form.tclDT_RECEIVED.addEventHandler("onchanged",this.fnSearchInit,this);
            this.dsList.addEventHandler("onvaluechanged",this.dsList_onvaluechanged,this);
        };
        this.loadIncludeScript("DRC_DLGRECEIPT.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
