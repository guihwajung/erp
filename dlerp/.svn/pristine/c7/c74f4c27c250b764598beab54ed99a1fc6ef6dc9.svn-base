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
            this.set_titletext("보증금 특별수납");
            this.getSetter("maxwidth").set("480");
            this.getSetter("maxheight").set("520");
            if (Form == this.constructor)
            {
                this._setFormPosition(480,520);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("dsList", this);
            obj._setContents("<ColumnInfo><Column id=\"DT_RECEIVED\" type=\"STRING\" size=\"256\"/><Column id=\"AM_RECEIVED\" type=\"BIGDECIMAL\" size=\"256\"/><Column id=\"GUBUN\" type=\"STRING\" size=\"256\"/><Column id=\"DD_DAY\" type=\"INT\" size=\"256\"/><Column id=\"AM_MONEY\" type=\"BIGDECIMAL\" size=\"256\"/><Column id=\"AM_BUNYANG\" type=\"BIGDECIMAL\" size=\"256\"/><Column id=\"CD_GUJA\" type=\"STRING\" size=\"256\"/><Column id=\"DS_GUJA\" type=\"STRING\" size=\"256\"/><Column id=\"TY_MONEY\" type=\"STRING\" size=\"256\"/><Column id=\"CD_FINANCING\" type=\"STRING\" size=\"256\"/><Column id=\"DS_FINANCING\" type=\"STRING\" size=\"256\"/><Column id=\"DS_REMARK\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row/></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("_dsProc", this);
            obj._setContents("<ColumnInfo><Column id=\"TARGET\" type=\"STRING\" size=\"256\"/><Column id=\"SP\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"TARGET\">save</Col><Col id=\"SP\">DLCPR_SPECIAL_RECEIPT_HANDLE</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsGUBUN", this);
            obj._setContents("<ColumnInfo><Column id=\"CD_CODE\" type=\"STRING\" size=\"256\"/><Column id=\"DS_CODE\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"CD_CODE\">1</Col><Col id=\"DS_CODE\">할인</Col></Row><Row><Col id=\"CD_CODE\">2</Col><Col id=\"DS_CODE\">연체</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsTY_MONEY", this);
            obj._setContents("<ColumnInfo><Column id=\"CD_CODE\" type=\"STRING\" size=\"256\"/><Column id=\"DS_CODE\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"CD_CODE\">1</Col><Col id=\"DS_CODE\">본인</Col></Row><Row><Col id=\"CD_CODE\">2</Col><Col id=\"DS_CODE\">기금융자</Col></Row><Row><Col id=\"CD_CODE\">3</Col><Col id=\"DS_CODE\">알선융자</Col></Row></Rows>");
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
            obj.set_text("보증금 특별수납");
            obj.set_cssclass("sta_TITLE_Bg");
            obj.set_textAlign("left");
            this.divData.addChild(obj.name, obj);

            obj = new Static("staSunapInfo","0","staTITLE:5",null,"22","0",null,null,null,null,null,this.divData.form);
            obj.set_taborder("30");
            obj.set_text("수납정보");
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
            obj.set_text("입금액");
            obj.set_cssclass("sta_WF_tablelabelE");
            this.divData.addChild(obj.name, obj);

            obj = new Static("sta03","sta02:-1","sta01:-1",null,"30","0",null,null,null,null,null,this.divData.form);
            obj.set_taborder("6");
            obj.set_cssclass("sta_WF_tablebg");
            obj.set_text("");
            this.divData.addChild(obj.name, obj);

            obj = new Static("sta04","0","sta02:-1","87","30",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("7");
            obj.set_text("할인/연체");
            obj.set_cssclass("sta_WF_tablelabelE");
            this.divData.addChild(obj.name, obj);

            obj = new Static("sta05","sta04:-1","sta03:-1",null,"30","0",null,null,null,null,null,this.divData.form);
            obj.set_taborder("8");
            obj.set_cssclass("sta_WF_tablebg");
            obj.set_text("");
            this.divData.addChild(obj.name, obj);

            obj = new Static("sta06","0","sta04:-1","87","30",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("9");
            obj.set_text("일수");
            obj.set_cssclass("sta_WF_tablelabelE");
            this.divData.addChild(obj.name, obj);

            obj = new Static("sta07","sta06:-1","sta05:-1",null,"30","0",null,null,null,null,null,this.divData.form);
            obj.set_taborder("10");
            obj.set_cssclass("sta_WF_tablebg");
            obj.set_text("");
            this.divData.addChild(obj.name, obj);

            obj = new Static("sta08","0","sta06:-1","87","30",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("11");
            obj.set_text("할인/연체료");
            obj.set_cssclass("sta_WF_tablelabelE");
            this.divData.addChild(obj.name, obj);

            obj = new Static("sta09","sta08:-1","sta07:-1",null,"30","0",null,null,null,null,null,this.divData.form);
            obj.set_taborder("12");
            obj.set_cssclass("sta_WF_tablebg");
            obj.set_text("");
            this.divData.addChild(obj.name, obj);

            obj = new Static("sta10","0","sta08:-1","87","30",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("13");
            obj.set_text("보증금");
            obj.set_cssclass("sta_WF_tablelabelE");
            this.divData.addChild(obj.name, obj);

            obj = new Static("sta11","sta10:-1","sta09:-1",null,"30","0",null,null,null,null,null,this.divData.form);
            obj.set_taborder("14");
            obj.set_cssclass("sta_WF_tablebg");
            obj.set_text("");
            this.divData.addChild(obj.name, obj);

            obj = new Static("sta12","0","sta10:-1","87","30",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("15");
            obj.set_text("납입계좌");
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
            obj.set_cssclass("sta_WF_tablelabel");
            this.divData.addChild(obj.name, obj);

            obj = new Static("sta17","sta16:-1","sta15:-1",null,"30","0",null,null,null,null,null,this.divData.form);
            obj.set_taborder("20");
            obj.set_cssclass("sta_WF_tablebg");
            obj.set_text("");
            this.divData.addChild(obj.name, obj);

            obj = new Static("sta18","0","sta16:-1","87","60",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("21");
            obj.set_text("비고");
            obj.set_cssclass("sta_WF_tablelabelE");
            this.divData.addChild(obj.name, obj);

            obj = new Static("sta19","sta18:-1","sta17:-1",null,"60","0",null,null,null,null,null,this.divData.form);
            obj.set_taborder("22");
            obj.set_cssclass("sta_WF_tablebg");
            obj.set_text("");
            this.divData.addChild(obj.name, obj);

            obj = new Button("btnOK","154","420","60","27",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("3");
            obj.set_text("확인");
            this.divData.addChild(obj.name, obj);

            obj = new Button("btnCANCLE","btnOK:30","420","60","27",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("4");
            obj.set_text("취소");
            this.divData.addChild(obj.name, obj);

            obj = new Calendar("tclDT_RECEIVED","sta00:5","87","105","20",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("23");
            obj.set_dateformat("yyyy-MM-dd");
            obj.set_editformat("yyyyMMdd");
            obj.set_autoselect("true");
            this.divData.addChild(obj.name, obj);

            obj = new MaskEdit("txtAM_RECEIVED","sta02:5","sta01:4","120","20",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("24");
            obj.set_format("#,##0");
            this.divData.addChild(obj.name, obj);

            obj = new Static("sta22","txtAM_RECEIVED:5","sta01:4","20","20",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("25");
            obj.set_text("원");
            this.divData.addChild(obj.name, obj);

            obj = new Radio("rdoGUBUN","92","sta03:4","228","20",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("26");
            obj.set_direction("vertical");
            obj.set_codecolumn("CD_CODE");
            obj.set_datacolumn("DS_CODE");
            obj.set_innerdataset("dsGUBUN");
            obj.set_fittocontents("width");
            this.divData.addChild(obj.name, obj);

            obj = new MaskEdit("txtDD_DAY","92","sta05:4","120","20",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("31");
            obj.set_format("#,##0");
            this.divData.addChild(obj.name, obj);

            obj = new MaskEdit("txtAM_MONEY","92","sta07:4","120","20",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("32");
            obj.set_format("#,##0");
            this.divData.addChild(obj.name, obj);

            obj = new MaskEdit("txtAM_BUNYANG","92","sta09:4","120","20",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("33");
            obj.set_format("#,##0");
            obj.set_color("blue");
            this.divData.addChild(obj.name, obj);

            obj = new Static("sta20","txtDD_DAY:5","sta05:4","20","20",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("34");
            obj.set_text("일");
            this.divData.addChild(obj.name, obj);

            obj = new Static("sta21","txtAM_MONEY:5","sta07:4","20","20",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("35");
            obj.set_text("원");
            this.divData.addChild(obj.name, obj);

            obj = new Static("sta23","txtAM_BUNYANG:5","sta09:4","20","20",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("36");
            obj.set_text("원");
            this.divData.addChild(obj.name, obj);

            obj = new Div("cfCD_GUJA","92","sta11:4","300","20",null,null,null,null,null,null,this.divData.form);
            obj.getSetter("CodeFindName").set("DRX_CFACCOUNT_CODEFIND");
            obj.getSetter("CDTextWidth").set("70");
            obj.set_taborder("27");
            obj.set_url("cmm::cmmCodeFind.xfdl");
            this.divData.addChild(obj.name, obj);

            obj = new Combo("cboTY_MONEY","92","sta13:4","120","20",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("28");
            obj.set_datacolumn("DS_CODE");
            obj.set_codecolumn("CD_CODE");
            obj.set_innerdataset("dsTY_MONEY");
            this.divData.addChild(obj.name, obj);

            obj = new Div("cfCD_FINANCING","92","sta15:4","300","20",null,null,null,null,null,null,this.divData.form);
            obj.getSetter("CodeFindName").set("DRX_CFFINANCING_CODEFIND");
            obj.getSetter("CDTextWidth").set("70");
            obj.set_taborder("29");
            obj.set_url("cmm::cmmCodeFind.xfdl");
            this.divData.addChild(obj.name, obj);

            obj = new TextArea("txtDS_REMARK","sta18:5","sta17:4","300","50",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("37");
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

            obj = new BindItem("item2","divData.form.rdoGUBUN","value","dsList","GUBUN");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item3","divData.form.txtDD_DAY","value","dsList","DD_DAY");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item4","divData.form.txtAM_MONEY","value","dsList","AM_MONEY");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item5","divData.form.txtAM_BUNYANG","value","dsList","AM_BUNYANG");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item6","divData.form.cfCD_GUJA.form.CDTextBox","value","dsList","CD_GUJA");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item7","divData.form.cfCD_GUJA.form.DSTextBox","value","dsList","DS_GUJA");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item8","divData.form.cboTY_MONEY","value","dsList","TY_MONEY");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item9","divData.form.cfCD_FINANCING.form.CDTextBox","value","dsList","CD_FINANCING");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item10","divData.form.cfCD_FINANCING.form.DSTextBox","value","dsList","DS_FINANCING");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item11","divData.form.txtDS_REMARK","value","dsList","DS_REMARK");
            this.addChild(obj.name, obj);
            obj.bind();
            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {
            this._addPreloadList("fdl","cmm::cmmCodeFind.xfdl");
        };
        
        // User Script
        this.registerScript("DLB_DLGSPECIALRECEIPT.xfdl", function() {
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

        	this.S_DATE = this.getOwnerFrame().S_DATE;
        	this.E_DATE = this.getOwnerFrame().E_DATE;
        	if (this.getOwnerFrame().CD_ACNTUNIT.length > 0) {
        		this.ACNTUNIT = this.getOwnerFrame().CD_ACNTUNIT.substr(0, 6);
        		this.GUBUN = this.getOwnerFrame().CD_ACNTUNIT.substr(6, 1);
        		this.CHASU = this.getOwnerFrame().CD_ACNTUNIT.substr(7, 2);
        	}
        	this.NO_DONG = this.getOwnerFrame().NO_DONG;
        	this.NO_FLOOR = this.getOwnerFrame().NO_FLOOR;
        	this.NO_HO = this.getOwnerFrame().NO_HO;
        	this.NO_UNIONMEMBER = this.getOwnerFrame().NO_UNIONMEMBER;
        	this.CD_ACNTUNIT = this.getOwnerFrame().CD_ACNTUNIT;

        	this.dsList.setColumn(0, "DT_RECEIVED", this.gfnGetDate());
        	this.dsList.setColumn(0, "GUBUN", "1");
        	this.fnDay_Cal();

        	this.dsList.setColumn(0, "TY_MONEY", "1");
        	this.dsList.setColumn(0, "AM_RECEIVED", 0);
        	this.dsList.setColumn(0, "AM_BUNYANG", 0);
        	this.dsList.setColumn(0, "AM_MONEY", 0);
        	this.cfCD_FINANCING.set_enable(false);

        	this.tclDT_RECEIVED.setFocus();
        };

        /************************************************************************
         * 변수 선언
         ************************************************************************/
        this.fnSetVariable = function() {
        	this.tclDT_RECEIVED = this.divData.form.tclDT_RECEIVED;
        	this.txtAM_RECEIVED = this.divData.form.txtAM_RECEIVED;
        	this.rdoGUBUN = this.divData.form.rdoGUBUN;
        	this.txtDD_DAY = this.divData.form.txtDD_DAY;
        	this.txtAM_MONEY = this.divData.form.txtAM_MONEY;
        	this.txtAM_BUNYANG = this.divData.form.txtAM_BUNYANG;
        	this.cfCD_GUJA = this.divData.form.cfCD_GUJA;
        	this.cboTY_MONEY = this.divData.form.cboTY_MONEY;
        	this.cfCD_FINANCING = this.divData.form.cfCD_FINANCING;
        	this.txtDS_REMARK = this.divData.form.txtDS_REMARK
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
        	this.dsSave.addColumn("AM_BUNYANG", "bigdecimal");
        	this.dsSave.addColumn("GUBUN", "string");
        	this.dsSave.addColumn("DD_DAY", "int");
        	this.dsSave.addColumn("AM_MONEY", "bigdecimal");
        	this.dsSave.addColumn("CD_GUJA", "string");
        	this.dsSave.addColumn("TY_MONEY", "string");
        	this.dsSave.addColumn("CD_VENDOR", "string");
        	this.dsSave.addColumn("YN_DELMISU", "string");
        	this.dsSave.addColumn("DS_REMARK", "string");
        	this.dsSave.addColumn("ID_INSERT", "string");
        }

        /************************************************************************
         * Validate
         ************************************************************************/
        this.fnSaveValidate = function() {
        	var validate = true;
        	var strMsg = "";
        	if (this.gfnIsNull(this.dsList.getColumn(0, "DT_RECEIVED"))) {
        		strMsg += "수납일자를 입력하지 않았습니다!\n";
        		this.tclDT_RECEIVED.setFocus();
        		validate = false;
        	}
        	else if (this.gfnIsNull(this.dsList.getColumn(0, "AM_RECEIVED"))) {
        		strMsg += "입금액을 입력하지 않았습니다!\n";
        		this.txtAM_RECEIVED.setFocus();
        		validate = false;
        	}
        	else if (this.gfnIsNull(this.dsList.getColumn(0, "AM_BUNYANG"))) {
        		strMsg += "보증금을 입력하지 않았습니다!\n";
        		this.txtAM_BUNYANG.setFocus();
        		validate = false;
        	}
        	else if (this.gfnIsNull(this.dsList.getColumn(0, "DD_DAY"))) {
        		strMsg += "일수를 입력하지 않았습니다!\n";
        		this.txtDD_DAY.setFocus();
        		validate = false;
        	}
        	else if (this.gfnIsNull(this.dsList.getColumn(0, "AM_MONEY"))) {
        		strMsg += "할인/연체료를 입력하지 않았습니다!\n";
        		this.txtAM_MONEY.setFocus();
        		validate = false;
        	}
        	else if (this.gfnIsNull(this.dsList.getColumn(0, "CD_GUJA"))) {
        		strMsg += "납입계좌를 입력하지 않았습니다!\n";
        		this.cfCD_GUJA.form.CDTextBox.setFocus();
        		validate = false;
        	}
        	else if (this.gfnIsNull(this.dsList.getColumn(0, "TY_MONEY"))) {
        		strMsg += "납입구분을 입력하지 않았습니다!\n";
        		this.cboTY_MONEY.setFocus();
        		validate = false;
        	}
        	else if (this.dsList.getColumn(0, "TY_MONEY") != "1" && this.gfnIsNull(this.dsList.getColumn(0, "CD_FINANCING"))) {
        		strMsg += "융자사정보가 입력되지 않았습니다!\n";
        		this.cfCD_FINANCING.form.CDTextBox.setFocus();
        		validate = false;
        	}
        	else if (this.gfnIsNull(this.dsList.getColumn(0, "DS_REMARK"))) {
        		strMsg += "비고를 입력하지 않았습니다!\n";
        		this.txtDS_REMARK.setFocus();
        		validate = false;
        	}

        	if (!validate) {
        		this.gfnAlert(strMsg);
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
        	if(svcID == "save"){
        		if (errorCode == 0) {
        			this.fnAlertCallback = function() {
        				this.gfnSetFormStatus(this);
        				this.getParentContext().close(true);
        			}
        			if (this.dsResult.rowcount == 0) {
        				this.gfnAlert("보증금 수납에 실패하였습니다.", "fnAlertCallback");
        			}
        			else {
        				this.gfnAlert(this.dsResult.getColumn(0, "MSG"), "fnAlertCallback");
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
        		if (e.columnid == "AM_RECEIVED" || e.columnid == "AM_MONEY") {
        			if (this.gfnIsNull(e.newvalue)) return;
        			this.fnAmount();
        		}
        		else if (e.columnid == "TY_MONEY") {
        			switch (e.newvalue) {
        				case "1":
        					this.cfCD_FINANCING.set_enable(false);
        					this.dsList.setColumn(0, "CD_FINANCING", "");
        					this.dsList.setColumn(0, "DS_FINANCING", "");
        					break;
        				default:
        					this.cfCD_FINANCING.set_enable(true);
        					break;
        			}
        		}
        		else if (e.columnid == "GUBUN") {
        			if (e.newvalue == "1") {
        				this.txtAM_BUNYANG.set_readonly(false);
        			}
        			else {
        				this.txtAM_BUNYANG.set_readonly(true);
        				this.dsList.setColumn(0, "AM_BUNYANG", 0);
        			}
        			this.fnDay_Cal();
        		}
        		else if (e.columnid == "DT_RECEIVED") {
        			this.fnDay_Cal();
        		}
        	}
        };

        this.fnDay_Cal = function() {
        	if (this.dsList.getColumn(0, "GUBUN") == "1") {
        		if (this.S_DATE.length == 0) return;

        		var dDay = this.gfnGetDiffDate(this.S_DATE, this.dsList.getColumn(0, "DT_RECEIVED"));
        		if (dDay > 0) {
        			this.dsList.setColumn(0, "DD_DAY", dDay);
        		}
        	}
        	else {
        		if (this.E_DATE.length == 0) return;

        		var dDay = this.gfnGetDiffDate(this.E_DATE, this.dsList.getColumn(0, "DT_RECEIVED"));
        		if (dDay > 0) {
        			this.dsList.setColumn(0, "DD_DAY", dDay);
        		}
        	}
        }

        this.fnAmount = function() {
        	var amReceived = nexacro.toNumber(this.dsList.getColumn(0, "AM_RECEIVED"));
        	var amMoney = nexacro.toNumber(this.dsList.getColumn(0, "AM_MONEY"));

        	if (this.dsList.getColumn(0, "GUBUN") == "1") {
        		this.dsList.setColumn(0, "AM_BUNYANG", amReceived + amMoney);
        	}
        	else {
        		this.dsList.setColumn(0, "AM_BUNYANG", amReceived - amMoney);
        	}
        }

        this.fnSave = function() {
        	this.dsSave.clearData();
        	this.dsSave.addRow();
        	this.dsSave.setColumn(0, "CD_ACNTUNIT", this.ACNTUNIT);
        	this.dsSave.setColumn(0, "TY_GUBUN", this.GUBUN);
        	this.dsSave.setColumn(0, "NO_CHASU", this.CHASU);
        	this.dsSave.setColumn(0, "NO_DONG", this.NO_DONG);
        	this.dsSave.setColumn(0, "NO_FLOOR", this.NO_FLOOR);
        	this.dsSave.setColumn(0, "NO_HO", this.NO_HO);
        	this.dsSave.setColumn(0, "NO_UNIONMEMBER", this.NO_UNIONMEMBER);
        	this.dsSave.setColumn(0, "DT_RECEIVED", this.dsList.getColumn(0, "DT_RECEIVED"));
        	this.dsSave.setColumn(0, "AM_RECEIVED", this.dsList.getColumn(0, "AM_RECEIVED"));
        	this.dsSave.setColumn(0, "AM_BUNYANG", this.dsList.getColumn(0, "AM_BUNYANG"));
        	this.dsSave.setColumn(0, "GUBUN", this.dsList.getColumn(0, "GUBUN"));
        	this.dsSave.setColumn(0, "DD_DAY", this.dsList.getColumn(0, "DD_DAY"));
        	this.dsSave.setColumn(0, "AM_MONEY", this.dsList.getColumn(0, "AM_MONEY"));
        	this.dsSave.setColumn(0, "CD_GUJA", this.dsList.getColumn(0, "CD_GUJA"));
        	this.dsSave.setColumn(0, "TY_MONEY", this.dsList.getColumn(0, "TY_MONEY"));
        	this.dsSave.setColumn(0, "CD_VENDOR", this.dsList.getColumn(0, "CD_FINANCING"));
        	this.dsSave.setColumn(0, "YN_DELMISU", "N");
        	this.dsSave.setColumn(0, "DS_REMARK", this.dsList.getColumn(0, "DS_REMARK"));
        	this.dsSave.setColumn(0, "ID_INSERT", this.AuthClient.ID_USER);

        // 	var strSvcId    = "select";
        // 	var strSvcType  = "grid";
        // 	var inProc		= "_dsProc";
        // 	var inData      = "select=dsSelect";
        // 	var outData     = "dsResult=select0";
        // 	var strArg      = "";
        // 	var callBackFnc = "fnCallback";

        	var strSvcId    = "save";
        	var strSvcType  = "save";
        	var inProc		= "_dsProc";
        	var inData      = "save=dsSave";
        	var outData     = "";
        	var strArg      = "";
        	var callBackFnc = "fnCallback";

        	this.gfnTransaction( strSvcId , 	// transaction을 구분하기 위한 svc id값
        						strSvcType , 	// trabsaction을 요청할 구분
        						inProc,			// Procedure 정보 Dataset 이름
        						inData , 		// 입력값으로 보낼 dataset id , a=b형태로 실제이름과 입력이름을 매칭
        						outData , 		// 처리결과값으로 받을 dataset id, a=b형태로 실제이름과 입력이름을 매칭
        						strArg, 			// 입력갑스로 보낼 arguments, strFormData="20120607"
        						callBackFnc); // 통신방법 정의 [생략가능]
        };

        this.btnOK_onclick = function(obj,e) {
        	if(!this.fnSaveValidate()) return;

        	this.fnSave();
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
        this.loadIncludeScript("DLB_DLGSPECIALRECEIPT.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
