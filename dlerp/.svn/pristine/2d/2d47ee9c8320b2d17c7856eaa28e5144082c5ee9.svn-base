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
            this.set_titletext("임대료 수납");
            this.getSetter("maxwidth").set("500");
            this.getSetter("maxheight").set("670");
            if (Form == this.constructor)
            {
                this._setFormPosition(500,670);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("dsList", this);
            obj._setContents("<ColumnInfo><Column id=\"DT_RECEIVED\" type=\"STRING\" size=\"256\"/><Column id=\"AM_RECEIVED\" type=\"BIGDECIMAL\" size=\"256\"/><Column id=\"AM_DEPOSITFEE\" type=\"BIGDECIMAL\" size=\"256\"/><Column id=\"TY_RECEIPT\" type=\"STRING\" size=\"256\"/><Column id=\"TY_POSITION\" type=\"STRING\" size=\"256\"/><Column id=\"DT_PAYBACK\" type=\"STRING\" size=\"256\"/><Column id=\"CD_GUJA\" type=\"STRING\" size=\"256\"/><Column id=\"DS_GUJA\" type=\"STRING\" size=\"256\"/><Column id=\"CD_CARD\" type=\"STRING\" size=\"256\"/><Column id=\"DS_CARD\" type=\"STRING\" size=\"256\"/><Column id=\"NO_APPROVAL\" type=\"STRING\" size=\"256\"/><Column id=\"TY_MONEY\" type=\"STRING\" size=\"256\"/><Column id=\"CD_FINANCING\" type=\"STRING\" size=\"256\"/><Column id=\"DS_FINANCING\" type=\"STRING\" size=\"256\"/><Column id=\"YN_DELAY\" type=\"STRING\" size=\"256\"/><Column id=\"YN_INDIDELAY\" type=\"STRING\" size=\"256\"/><Column id=\"RT_ARREAR\" type=\"BIGDECIMAL\" size=\"256\"/><Column id=\"YN_DISCOUNT\" type=\"STRING\" size=\"256\"/><Column id=\"YN_INDIDISCOUNT\" type=\"STRING\" size=\"256\"/><Column id=\"RT_CUTOFF\" type=\"BIGDECIMAL\" size=\"256\"/></ColumnInfo><Rows><Row/></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("_dsProc", this);
            obj._setContents("<ColumnInfo><Column id=\"TARGET\" type=\"STRING\" size=\"256\"/><Column id=\"SP\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"TARGET\">save</Col><Col id=\"SP\">DLCPR_RECEIPT_HANDLE3</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsTY_RECEIPT", this);
            obj._setContents("<ColumnInfo><Column id=\"CD_CODE\" type=\"STRING\" size=\"256\"/><Column id=\"DS_CODE\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"CD_CODE\">N</Col><Col id=\"DS_CODE\">정상</Col></Row><Row><Col id=\"CD_CODE\">C</Col><Col id=\"DS_CODE\">대체(동층호 변경)</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsYN", this);
            obj._setContents("<ColumnInfo><Column id=\"CD_CODE\" type=\"STRING\" size=\"256\"/><Column id=\"DS_CODE\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"CD_CODE\">Y</Col><Col id=\"DS_CODE\">적용함</Col></Row><Row><Col id=\"CD_CODE\">N</Col><Col id=\"DS_CODE\">적용안함</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsTY_POSITION", this);
            obj._setContents("<ColumnInfo><Column id=\"CD_CODE\" type=\"STRING\" size=\"256\"/><Column id=\"DS_CODE\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"CD_CODE\">1</Col><Col id=\"DS_CODE\">M/H(현금)</Col></Row><Row><Col id=\"CD_CODE\">2</Col><Col id=\"DS_CODE\">은행</Col></Row><Row><Col id=\"CD_CODE\">3</Col><Col id=\"DS_CODE\">본사</Col></Row><Row><Col id=\"CD_CODE\">4</Col><Col id=\"DS_CODE\">기타</Col></Row><Row><Col id=\"CD_CODE\">7</Col><Col id=\"DS_CODE\">주택기금승계</Col></Row><Row><Col id=\"CD_CODE\">D</Col><Col id=\"DS_CODE\">대체수납</Col></Row><Row><Col id=\"CD_CODE\">F</Col><Col id=\"DS_CODE\">카드</Col></Row><Row><Col id=\"CD_CODE\">J</Col><Col id=\"DS_CODE\">만기대여금</Col></Row></Rows>");
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
            obj.set_text("임대료 수납");
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

            obj = new Static("sta23","0","sta02:-1","87","30",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("38");
            obj.set_text("보증수수료");
            obj.set_cssclass("sta_WF_tablelabel");
            this.divData.addChild(obj.name, obj);

            obj = new Static("sta24","sta23:-1","sta03:-1",null,"30","0",null,null,null,null,null,this.divData.form);
            obj.set_taborder("39");
            obj.set_cssclass("sta_WF_tablebg");
            obj.set_text("");
            this.divData.addChild(obj.name, obj);

            obj = new Static("sta04","0","sta23:-1","87","30",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("7");
            obj.set_text("수납구분");
            obj.set_cssclass("sta_WF_tablelabelE");
            this.divData.addChild(obj.name, obj);

            obj = new Static("sta05","sta04:-1","sta24:-1",null,"30","0",null,null,null,null,null,this.divData.form);
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

            obj = new Static("sta25","0","sta06:-1","87","30",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("40");
            obj.set_text("상환일자");
            obj.set_cssclass("sta_WF_tablelabel");
            this.divData.addChild(obj.name, obj);

            obj = new Static("sta26","sta25:-1","sta07:-1",null,"30","0",null,null,null,null,null,this.divData.form);
            obj.set_taborder("41");
            obj.set_cssclass("sta_WF_tablebg");
            obj.set_text("");
            this.divData.addChild(obj.name, obj);

            obj = new Static("sta08","0","sta25:-1","87","30",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("11");
            obj.set_text("납입계좌");
            obj.set_cssclass("sta_WF_tablelabelE");
            this.divData.addChild(obj.name, obj);

            obj = new Static("sta09","sta08:-1","sta26:-1",null,"30","0",null,null,null,null,null,this.divData.form);
            obj.set_taborder("12");
            obj.set_cssclass("sta_WF_tablebg");
            obj.set_text("");
            this.divData.addChild(obj.name, obj);

            obj = new Static("sta10","0","sta08:-1","87","30",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("13");
            obj.set_text("카드사");
            obj.set_cssclass("sta_WF_tablelabel");
            this.divData.addChild(obj.name, obj);

            obj = new Static("sta11","sta10:-1","sta09:-1",null,"30","0",null,null,null,null,null,this.divData.form);
            obj.set_taborder("14");
            obj.set_cssclass("sta_WF_tablebg");
            obj.set_text("");
            this.divData.addChild(obj.name, obj);

            obj = new Static("sta12","0","sta10:-1","87","30",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("15");
            obj.set_text("승인번호");
            obj.set_cssclass("sta_WF_tablelabel");
            this.divData.addChild(obj.name, obj);

            obj = new Static("sta13","sta12:-1","sta11:-1",null,"30","0",null,null,null,null,null,this.divData.form);
            obj.set_taborder("16");
            obj.set_cssclass("sta_WF_tablebg");
            obj.set_text("");
            this.divData.addChild(obj.name, obj);

            obj = new Static("sta14","0","sta12:-1","87","30",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("17");
            obj.set_text("납입구분");
            obj.set_cssclass("sta_WF_tablelabel");
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

            obj = new Static("sta27","0","sta18:-1","87","30",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("42");
            obj.set_text("개별연체");
            obj.set_cssclass("sta_WF_tablelabel");
            this.divData.addChild(obj.name, obj);

            obj = new Static("sta28","sta27:-1","sta19:-1",null,"30","0",null,null,null,null,null,this.divData.form);
            obj.set_taborder("43");
            obj.set_cssclass("sta_WF_tablebg");
            obj.set_text("");
            this.divData.addChild(obj.name, obj);

            obj = new Static("sta20","0","sta27:-1","87","30",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("23");
            obj.set_text("할인적용");
            obj.set_cssclass("sta_WF_tablelabelE");
            this.divData.addChild(obj.name, obj);

            obj = new Static("sta21","sta20:-1","sta28:-1",null,"30","0",null,null,null,null,null,this.divData.form);
            obj.set_taborder("24");
            obj.set_cssclass("sta_WF_tablebg");
            obj.set_text("");
            this.divData.addChild(obj.name, obj);

            obj = new Static("sta29","0","sta20:-1","87","30",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("44");
            obj.set_text("개별할인");
            obj.set_cssclass("sta_WF_tablelabel");
            this.divData.addChild(obj.name, obj);

            obj = new Static("sta30","sta29:-1","sta21:-1",null,"30","0",null,null,null,null,null,this.divData.form);
            obj.set_taborder("45");
            obj.set_cssclass("sta_WF_tablebg");
            obj.set_text("");
            this.divData.addChild(obj.name, obj);

            obj = new Button("btnOK","134","540","60","27",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("3");
            obj.set_text("확인");
            this.divData.addChild(obj.name, obj);

            obj = new Button("btnCANCLE","btnOK:30","540","60","27",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("4");
            obj.set_text("취소");
            this.divData.addChild(obj.name, obj);

            obj = new Calendar("tclDT_RECEIVED","sta00:5","sta01:-25","105","20",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("25");
            obj.set_dateformat("yyyy-MM-dd");
            obj.set_editformat("yyyyMMdd");
            obj.set_autoselect("true");
            this.divData.addChild(obj.name, obj);

            obj = new MaskEdit("txtAM_RECEIVED","sta02:5","sta03:-25","120","20",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("26");
            obj.set_format("#,##0");
            this.divData.addChild(obj.name, obj);

            obj = new Static("sta22","txtAM_RECEIVED:5","sta03:-25","20","20",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("27");
            obj.set_text("원");
            this.divData.addChild(obj.name, obj);

            obj = new MaskEdit("txtAM_DEPOSITFEE","sta23:5","sta24:-25","120","20",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("47");
            obj.set_format("#,##0");
            this.divData.addChild(obj.name, obj);

            obj = new Static("sta31","txtAM_DEPOSITFEE:5","sta24:-25","20","20",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("46");
            obj.set_text("원");
            this.divData.addChild(obj.name, obj);

            obj = new Radio("rdoTY_RECEIPT","92","sta05:-25","228","20",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("28");
            obj.set_direction("vertical");
            obj.set_codecolumn("CD_CODE");
            obj.set_datacolumn("DS_CODE");
            obj.set_innerdataset("dsTY_RECEIPT");
            obj.set_fittocontents("width");
            this.divData.addChild(obj.name, obj);

            obj = new Combo("cboTY_POSITION","92","sta07:-25","120","20",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("29");
            obj.set_innerdataset("dsTY_POSITION");
            obj.set_datacolumn("DS_CODE");
            obj.set_codecolumn("CD_CODE");
            this.divData.addChild(obj.name, obj);

            obj = new Calendar("tclDT_PAYBACK","sta25:5","sta26:-25","105","20",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("48");
            obj.set_dateformat("yyyy-MM-dd");
            obj.set_editformat("yyyyMMdd");
            obj.set_autoselect("true");
            this.divData.addChild(obj.name, obj);

            obj = new Div("cfCD_GUJA","92","sta09:-25","300","20",null,null,null,null,null,null,this.divData.form);
            obj.getSetter("CodeFindName").set("DLB_CFBANK_ACCOUNT_LEASE_CODEFIND");
            obj.getSetter("CDTextWidth").set("70");
            obj.set_taborder("30");
            obj.set_url("cmm::cmmCodeFind.xfdl");
            this.divData.addChild(obj.name, obj);

            obj = new Div("cfCD_CARD","92","sta11:-25","300","20",null,null,null,null,null,null,this.divData.form);
            obj.getSetter("CodeFindName").set("DRX_CARD_CODEFIND");
            obj.getSetter("CDTextWidth").set("70");
            obj.set_taborder("31");
            obj.set_url("cmm::cmmCodeFind.xfdl");
            this.divData.addChild(obj.name, obj);

            obj = new Edit("txtNO_APPROVAL","92","sta13:-25","150","20",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("32");
            this.divData.addChild(obj.name, obj);

            obj = new Combo("cboTY_MONEY","92","sta15:-25","120","20",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("33");
            obj.set_innerdataset("dsTY_MONEY");
            obj.set_datacolumn("DS_CODE");
            obj.set_codecolumn("CD_CODE");
            this.divData.addChild(obj.name, obj);

            obj = new Div("cfCD_FINANCING","92","sta17:-25","300","20",null,null,null,null,null,null,this.divData.form);
            obj.getSetter("CodeFindName").set("DRX_CFFINANCING_CODEFIND");
            obj.getSetter("CDTextWidth").set("70");
            obj.set_taborder("34");
            obj.set_url("cmm::cmmCodeFind.xfdl");
            this.divData.addChild(obj.name, obj);

            obj = new Radio("rdoYN_DELAY","92","sta19:-25","178","20",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("35");
            obj.set_direction("vertical");
            obj.set_codecolumn("CD_CODE");
            obj.set_datacolumn("DS_CODE");
            obj.set_innerdataset("dsYN");
            obj.set_fittocontents("width");
            this.divData.addChild(obj.name, obj);

            obj = new CheckBox("chkYN_INDIDELAY","sta27:5","sta28:-25","60","20",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("49");
            obj.set_truevalue("Y");
            obj.set_falsevalue("N");
            obj.getSetter("onvaluechanged").set("dsSearch_onvaluechanged");
            obj.set_text("적용함");
            this.divData.addChild(obj.name, obj);

            obj = new MaskEdit("txtRT_ARREAR","chkYN_INDIDELAY:5","sta28:-25","70","20",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("51");
            obj.set_format("#,##0");
            this.divData.addChild(obj.name, obj);

            obj = new Static("sta32","txtRT_ARREAR:5","sta28:-25","20","20",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("50");
            obj.set_text("%");
            this.divData.addChild(obj.name, obj);

            obj = new Radio("rdoYN_DISCOUNT","92","sta21:-25","178","20",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("36");
            obj.set_direction("vertical");
            obj.set_codecolumn("CD_CODE");
            obj.set_datacolumn("DS_CODE");
            obj.set_innerdataset("dsYN");
            obj.set_fittocontents("width");
            this.divData.addChild(obj.name, obj);

            obj = new CheckBox("chkYN_INDIDISCOUNT","sta27:5","sta30:-25","60","20",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("49");
            obj.set_truevalue("Y");
            obj.set_falsevalue("N");
            obj.getSetter("onvaluechanged").set("dsSearch_onvaluechanged");
            obj.set_text("적용함");
            this.divData.addChild(obj.name, obj);

            obj = new MaskEdit("txtRT_CUTOFF","chkYN_INDIDISCOUNT:5","sta30:-25","70","20",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("51");
            obj.set_format("#,##0");
            this.divData.addChild(obj.name, obj);

            obj = new Static("sta33","txtRT_CUTOFF:5","sta30:-25","20","20",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("50");
            obj.set_text("%");
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

            obj = new BindItem("item8","divData.form.txtAM_DEPOSITFEE","value","dsList","AM_DEPOSITFEE");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item15","divData.form.tclDT_PAYBACK","value","dsList","DT_PAYBACK");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item16","divData.form.chkYN_INDIDELAY","value","dsList","YN_INDIDELAY");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item17","divData.form.txtRT_ARREAR","value","dsList","RT_ARREAR");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item18","divData.form.chkYN_INDIDISCOUNT","value","dsList","YN_INDIDISCOUNT");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item19","divData.form.txtRT_CUTOFF","value","dsList","RT_CUTOFF");
            this.addChild(obj.name, obj);
            obj.bind();
            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {
            this._addPreloadList("fdl","cmm::cmmCodeFind.xfdl");
        };
        
        // User Script
        this.registerScript("DLB_DLGRECEIPT.xfdl", function() {
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
        	this.NO_DONG = this.getOwnerFrame().DONG;
        	this.NO_FLOOR = this.getOwnerFrame().FLOOR;
        	this.NO_HO = this.getOwnerFrame().HO;
        	this.YN_VACNT = this.getOwnerFrame().YN_VACNT;
        	this.CD_GUJA = this.getOwnerFrame().CD_GUJA;
        	this.NO_GUJA = this.getOwnerFrame().NO_GUJA;

        	this.staSunapInfo.set_text("임대계약 ( " + this.NO_DONG + "동 " + this.NO_FLOOR + "층 " + this.NO_HO + "호 )");


        	this.dsList.setColumn(0, "DT_RECEIVED", this.gfnAddDate(this.gfnGetDate(), -1));
        	this.dsList.setColumn(0, "AM_RECEIVED", 0);
        	this.dsList.setColumn(0, "AM_DEPOSITFEE", 0);
        	this.dsList.setColumn(0, "TY_RECEIPT", "N");
        	this.dsList.setColumn(0, "YN_DELAY", "Y");
        	this.dsList.setColumn(0, "YN_DISCOUNT", "Y");
        	this.cfCD_FINANCING.set_enable(false);
        	this.dsList.setColumn(0, "TY_MONEY", "1");
        	this.dsList.setColumn(0, "TY_POSITION", "2");

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
        	this.txtAM_DEPOSITFEE = this.divData.form.txtAM_DEPOSITFEE;
        	this.rdoTY_RECEIPT = this.divData.form.rdoTY_RECEIPT;
        	this.cboTY_POSITION = this.divData.form.cboTY_POSITION;
        	this.tclDT_PAYBACK = this.divData.form.tclDT_PAYBACK;
        	this.cfCD_GUJA = this.divData.form.cfCD_GUJA;
        	this.cfCD_CARD = this.divData.form.cfCD_CARD;
        	this.txtNO_APPROVAL = this.divData.form.txtNO_APPROVAL;
        	this.cboTY_MONEY = this.divData.form.cboTY_MONEY;
        	this.cfCD_FINANCING = this.divData.form.cfCD_FINANCING;
        	this.rdoYN_DELAY = this.divData.form.rdoYN_DELAY;
        	this.chkYN_INDIDELAY = this.divData.form.chkYN_INDIDELAY;
        	this.txtRT_ARREAR = this.divData.form.txtRT_ARREAR;
        	this.rdoYN_DISCOUNT = this.divData.form.rdoYN_DISCOUNT;
        	this.chkYN_INDIDISCOUNT = this.divData.form.chkYN_INDIDISCOUNT;
        	this.txtRT_CUTOFF = this.divData.form.txtRT_CUTOFF;
        	this.staSunapInfo = this.divData.form.staSunapInfo;
        	this.sta08 = this.divData.form.sta08;	//납입계좌 label
        	this.sta10 = this.divData.form.sta10;	//카드사 label
        	this.sta12 = this.divData.form.sta12;	//승인번호 label
        	this.sta25 = this.divData.form.sta25;	//상환일자 label

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
        	this.dsSave.addColumn("YN_INDIDELAY", "string");
        	this.dsSave.addColumn("RT_ARREAR", "bigdecimal");
        	this.dsSave.addColumn("YN_INDIDISCOUNT", "string");
        	this.dsSave.addColumn("RT_CUTOFF", "bigdecimal");
        	this.dsSave.addColumn("AM_SETTLE", "bigdecimal");
        	this.dsSave.addColumn("YN_AUTO", "string");
        	this.dsSave.addColumn("ID_INSERT", "string");
        	this.dsSave.addColumn("DT_ADDUPBACK", "string");
        	this.dsSave.addColumn("CD_CARD", "string");
        	this.dsSave.addColumn("DS_CARD", "string");
        	this.dsSave.addColumn("NO_APPROVAL", "string");
        	this.dsSave.addColumn("AM_DEPOSITFEE", "bigdecimal");
        	this.dsSave.addColumn("DT_PAYBACK", "string");
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

        	if (this.dsList.getColumn(0, "TY_POSITION") == "7") {
        	}
        	else {
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
        		else if (this.dsList.getColumn(0, "TY_POSITION") == "J") {
        			if (this.gfnIsNull(this.dsList.getColumn(0, "DT_PAYBACK"))) {
        				this.fnVaidateCallback = function() {
        					this.tclDT_PAYBACK.setFocus();
        				}
        				this.gfnAlert("상환일자가 입력되지 않았습니다.", "fnVaidateCallback");
        				return false;
        			}
        		}
        		else {
        			if (this.gfnIsNull(this.dsList.getColumn(0, "CD_GUJA"))) {
        				this.fnVaidateCallback = function() {
        					this.cfCD_GUJA.form.CDTextBox.setFocus();
        				}
        				this.gfnAlert("계좌정보가 입력되지 않았습니다.", "fnVaidateCallback");
        				return false;
        			}
        		}
        	}

        	if (this.dsList.getColumn(0, "TY_MONEY") == "2" || this.dsList.getColumn(0, "TY_MONEY") == "3") {
        		if (this.gfnIsNull(this.dsList.getColumn(0, "CD_FINANCING"))) {
        			this.fnVaidateCallback = function() {
        				this.cfCD_FINANCING.form.CDTextBox.setFocus();
        			}
        			this.gfnAlert("융자사정보가 입력되지 않았습니다.", "fnVaidateCallback");
        			return false;
        		}
        	}

        	if (this.dsList.getColumn(0, "YN_INDIDELAY") == "Y") {
        		if (this.gfnIsNull(this.dsList.getColumn(0, "RT_ARREAR"))) {
        			this.fnVaidateCallback = function() {
        				this.txtRT_ARREAR.setFocus();
        			}
        			this.gfnAlert("개별연체율이 입력되지 않았습니다.", "fnVaidateCallback");
        			return false;
        		}
        	}

        	if (this.dsList.getColumn(0, "YN_INDIDISCOUNT") == "Y") {
        		if (this.gfnIsNull(this.dsList.getColumn(0, "RT_CUTOFF"))) {
        			this.fnVaidateCallback = function() {
        				this.txtRT_CUTOFF.setFocus();
        			}
        			this.gfnAlert("개별할인율이 입력되지 않았습니다.", "fnVaidateCallback");
        			return false;
        		}
        	}

        	return true;
        };

        /************************************************************************
         * 코드파인드 이벤트
         ************************************************************************/
        this.fnBeforeUserDataSetParam = function(id, dsUserParam, nrow) {
        	if (id == "cfCD_GUJA") {
        		dsUserParam.setColumn(nrow, "CD_ACNTUNIT", this.CD_ACNTUNIT);
        		dsUserParam.setColumn(nrow, "YN_OPTION", "N");
        		dsUserParam.setColumn(nrow, "FLG_GUBUN", "A");
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
        			if (this.dsResult.rowcount > 0) {
        				this.fnSave_callback = function() {
        					this.getParentContext().close(true);
        				}
        				this.gfnAlert(this.dsResult.getColumn(0, "MSG"), "fnSave_callback");
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
        			if (e.newvalue.length != 0 && this.dsList.getColumn(0, "TY_POSITION") == "J") {
        				this.dsList.setColumn(0, "DT_PAYBACK", this.gfnAddMonth(e.newvalue, 12));
        			}
        		}
        		else if (e.columnid == "YN_DISCOUNT") {
        			if (e.newvalue == "Y") {
        				this.txtRT_CUTOFF.set_readonly(false);
        				this.dsList.setColumn(0, "RT_CUTOFF", 0);
        			}
        			else {
        				this.txtRT_CUTOFF.set_readonly(true);
        				this.dsList.setColumn(0, "RT_CUTOFF", 0);
        			}
        		}
        		else if (e.columnid == "YN_DELAY") {
        			if (e.newvalue == "Y") {
        				this.txtRT_ARREAR.set_readonly(false);
        				this.dsList.setColumn(0, "RT_ARREAR", 0);
        			}
        			else {
        				this.txtRT_ARREAR.set_readonly(true);
        				this.dsList.setColumn(0, "RT_ARREAR", 0);
        			}
        		}
        		else if (e.columnid == "YN_INDIDISCOUNT") {
        			if (e.newvalue == "Y") {
        				this.txtRT_CUTOFF.set_readonly(false);
        				this.dsList.setColumn(0, "RT_CUTOFF", 0);
        			}
        			else {
        				this.txtRT_CUTOFF.set_readonly(true);
        				this.dsList.setColumn(0, "RT_CUTOFF", 0);
        			}
        		}
        		else if (e.columnid == "YN_INDIDELAY") {
        			if (e.newvalue == "Y") {
        				this.txtRT_ARREAR.set_readonly(false);
        				this.dsList.setColumn(0, "RT_ARREAR", 0);
        			}
        			else {
        				this.txtRT_ARREAR.set_readonly(true);
        				this.dsList.setColumn(0, "RT_ARREAR", 0);
        			}
        		}
        		else if (e.columnid == "TY_POSITION") {
        			if (this.gfnIsNull(this.dsList.getColumn(0, "TY_POSITION")) || this.gfnIsNull(this.dsList.getColumn(0, "TY_MONEY"))) return;

        			switch (e.newvalue) {
        				case "7":	//주택기금승계
        					this.dsList.setColumn(0, "TY_MONEY", "9");
        					this.cboTY_MONEY.set_readonly(true);
        					this.dsList.setColumn(0, "YN_DELAY", "N");
        					this.rdoYN_DELAY.set_readonly(true);
        					this.dsList.setColumn(0, "YN_DISCOUNT", "N");
        					this.rdoYN_DISCOUNT.set_readonly(true);

        					this.cfCD_GUJA.set_enable(false);
        					this.dsList.setColumn(0, "CD_GUJA", "");
        					this.dsList.setColumn(0, "DS_GUJA", "");

        					this.txtNO_APPROVAL.set_readonly(true);
        					this.dsList.setColumn(0, "NO_APPROVAL", "");
        					this.cfCD_CARD.set_enable(false);
        					this.dsList.setColumn(0, "CD_CARD", "");
        					this.dsList.setColumn(0, "DS_CARD", "");

        					this.tclDT_PAYBACK.set_readonly(true);
        					this.dsList.setColumn(0, "DT_PAYBACK", "");
        					this.sta25.set_textDecoration("");
        					break;

        // 				case "1":	//M/H(현금)
        // 					this.cboTY_MONEY.set_readonly(false);
        // 					this.dsList.setColumn(0, "YN_DELAY", "Y");
        // 					this.rdoYN_DELAY.set_readonly(false);
        // 					this.dsList.setColumn(0, "YN_DISCOUNT", "Y");
        // 					this.rdoYN_DISCOUNT.set_readonly(false);
        //
        // 					this.cfCD_GUJA.set_enable(false);
        // 					this.dsList.setColumn(0, "CD_GUJA", this.YN_VACNT == "Y" ? this.CD_GUJA : "");
        // 					this.dsList.setColumn(0, "DS_GUJA", this.YN_VACNT == "Y" ? this.NO_GUJA : "");
        //
        // 					this.txtNO_APPROVAL.set_readonly(true);
        // 					this.dsList.setColumn(0, "NO_APPROVAL", "");
        // 					this.cfCD_CARD.set_enable(false);
        // 					this.dsList.setColumn(0, "CD_CARD", "");
        // 					this.dsList.setColumn(0, "DS_CARD", "");
        //
        // 					this.tclDT_PAYBACK.set_readonly(true);
        // 					this.dsList.setColumn(0, "DT_PAYBACK", "");
        // 					this.sta25.set_textDecoration("");
        // 					break;

        				case "F":	//카드
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

        					this.tclDT_PAYBACK.set_readonly(true);
        					this.dsList.setColumn(0, "DT_PAYBACK", "");
        					this.sta25.set_textDecoration("");
        					break;

        				case "J":	//단기대여금
        					this.dsList.setColumn(0, "TY_MONEY", "9");
        					this.cboTY_MONEY.set_readonly(true);
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

        					this.tclDT_PAYBACK.set_readonly(false);
        					this.dsList.setColumn(0, "DT_PAYBACK", this.gfnAddMonth(this.dsList.getColumn(0, "DT_RECEIVED"), 12));
        					this.sta25.set_textDecoration("underline");
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

        					this.tclDT_PAYBACK.set_readonly(true);
        					this.dsList.setColumn(0, "DT_PAYBACK", "");
        					this.sta25.set_textDecoration("");
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

        			switch (this.dsList.getColumn(0, "TY_MONEY")) {
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

        this.fnReceiptSaveData = function() {
        	this.dsSave.clearData();
        	this.dsSave.addRow();
        	this.dsSave.setColumn(0, "CD_ACNTUNIT", this.CD_ACNTUNIT.substr(0, 6));
        	this.dsSave.setColumn(0, "TY_GUBUN", this.CD_ACNTUNIT.substr(6, 1));
        	this.dsSave.setColumn(0, "NO_CHASU", this.CD_ACNTUNIT.substr(7, 2));
        	this.dsSave.setColumn(0, "NO_DONG", this.NO_DONG);
        	this.dsSave.setColumn(0, "NO_FLOOR", this.NO_FLOOR);
        	this.dsSave.setColumn(0, "NO_HO", this.NO_HO);
        	this.dsSave.setColumn(0, "NO_UNIONMEMBER", "");
        	this.dsSave.setColumn(0, "DT_RECEIVED", this.dsList.getColumn(0, "DT_RECEIVED"));
        	this.dsSave.setColumn(0, "AM_RECEIVED", this.dsList.getColumn(0, "AM_RECEIVED"));
        	this.dsSave.setColumn(0, "TY_RECEIPT", this.dsList.getColumn(0, "TY_RECEIPT"));
        	this.dsSave.setColumn(0, "TY_POSITION", this.dsList.getColumn(0, "TY_POSITION"));
        	this.dsSave.setColumn(0, "DT_REPAYMENT", "");
        	this.dsSave.setColumn(0, "CD_GUJA", this.dsList.getColumn(0, "CD_GUJA"));
        	this.dsSave.setColumn(0, "TY_MONEY", this.dsList.getColumn(0, "TY_MONEY"));
        	this.dsSave.setColumn(0, "CD_VENDOR", this.dsList.getColumn(0, "CD_FINANCING"));
        	this.dsSave.setColumn(0, "YN_DELAY", this.dsList.getColumn(0, "YN_DELAY"));
        	this.dsSave.setColumn(0, "YN_DISCOUNT", this.dsList.getColumn(0, "YN_DISCOUNT"));
        	this.dsSave.setColumn(0, "YN_INDIDELAY", this.dsList.getColumn(0, "YN_INDIDELAY"));
        	this.dsSave.setColumn(0, "RT_ARREAR", this.dsList.getColumn(0, "RT_ARREAR"));
        	this.dsSave.setColumn(0, "YN_INDIDISCOUNT", this.dsList.getColumn(0, "YN_INDIDISCOUNT"));
        	this.dsSave.setColumn(0, "RT_CUTOFF", this.dsList.getColumn(0, "RT_CUTOFF"));
        	this.dsSave.setColumn(0, "AM_SETTLE", 0);
        	this.dsSave.setColumn(0, "YN_AUTO", "N");
        	this.dsSave.setColumn(0, "ID_INSERT", this.AuthClient.ID_USER);
        	this.dsSave.setColumn(0, "DT_ADDUPBACK", "");
        	this.dsSave.setColumn(0, "CD_CARD", this.dsList.getColumn(0, "CD_CARD"));
        	this.dsSave.setColumn(0, "DS_CARD", this.dsList.getColumn(0, "DS_CARD"));
        	this.dsSave.setColumn(0, "NO_APPROVAL", this.dsList.getColumn(0, "NO_APPROVAL"));
        	this.dsSave.setColumn(0, "AM_DEPOSITFEE", this.dsList.getColumn(0, "AM_DEPOSITFEE"));
        	this.dsSave.setColumn(0, "DT_PAYBACK", this.dsList.getColumn(0, "DT_PAYBACK"));

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

        	this.fnReceiptSaveData();
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
            this.divData.form.tclDT_PAYBACK.addEventHandler("onchanged",this.fnSearchInit,this);
            this.dsList.addEventHandler("onvaluechanged",this.dsList_onvaluechanged,this);
        };
        this.loadIncludeScript("DLB_DLGRECEIPT.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
