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
            this.set_titletext("옵션종합현황");
            if (Form == this.constructor)
            {
                this._setFormPosition(1280,720);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("dsList", this);
            obj._setContents("");
            this.addChild(obj.name, obj);


            obj = new Dataset("_dsProc", this);
            obj._setContents("<ColumnInfo><Column id=\"TARGET\" type=\"STRING\" size=\"256\"/><Column id=\"SP\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"TARGET\">select</Col><Col id=\"SP\">DRFPR_RECEIPT_STATE_SELECT_DT</Col></Row><Row><Col id=\"TARGET\">selectDetail</Col><Col id=\"SP\">DRFPR_CONTRACTOR_SELECT</Col></Row><Row><Col id=\"TARGET\">selectSub</Col><Col id=\"SP\">DRFPR_ITEMCONTRACT_SELECT</Col></Row><Row><Col id=\"TARGET\">selectReceived</Col><Col id=\"SP\">DRFPR_RECEIVED_SELECT_DT</Col></Row><Row><Col id=\"TARGET\">selectAppropriate</Col><Col id=\"SP\">DRFPR_APPROPRIATE_SELECT</Col></Row><Row><Col id=\"TARGET\">selectCancelhistory</Col><Col id=\"SP\">DRFPR_CANCELHISTORY_SELECT</Col></Row><Row><Col id=\"TARGET\">selectRtdelay</Col><Col id=\"SP\">DRFPR_IND_RTDELAY_SELECT</Col></Row><Row><Col id=\"TARGET\">insert</Col><Col id=\"SP\">DRFPR_IND_RTDELAY_INSERT</Col></Row><Row><Col id=\"TARGET\">update</Col><Col id=\"SP\">DRFPR_IND_RTDELAY_UPDATE</Col></Row><Row><Col id=\"TARGET\">delete</Col><Col id=\"SP\">DRFPR_IND_RTDELAY_DELETE</Col></Row><Row><Col id=\"TARGET\">selectPayback</Col><Col id=\"SP\">DRFPR_PAYBACK_SELECT</Col></Row><Row><Col id=\"TARGET\">insertPayback</Col><Col id=\"SP\">DRFPR_PAYBACK_INSERT</Col></Row><Row><Col id=\"TARGET\">updatePayback</Col><Col id=\"SP\">DRFPR_PAYBACK_UPDATE</Col></Row><Row><Col id=\"TARGET\">deletePayback</Col><Col id=\"SP\">DRFPR_PAYBACK_DELETE</Col></Row><Row><Col id=\"TARGET\">receiptCancel</Col><Col id=\"SP\">DRFPR_RECEIPT_CANCEL</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsSearch", this);
            obj._setContents("<ColumnInfo><Column id=\"CD_ACNTUNIT\" type=\"STRING\" size=\"256\"/><Column id=\"DS_ACNTUNIT\" type=\"STRING\" size=\"256\"/><Column id=\"NO_DONG\" type=\"STRING\" size=\"256\"/><Column id=\"NO_FLOOR\" type=\"STRING\" size=\"256\"/><Column id=\"NO_HO\" type=\"STRING\" size=\"256\"/><Column id=\"TY_STATE\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"CD_ACNTUNIT\"/><Col id=\"DS_ACNTUNIT\"/><Col id=\"NO_DONG\"/><Col id=\"NO_FLOOR\"/><Col id=\"NO_HO\"/><Col id=\"TY_STATE\"/></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsListDetail", this);
            obj._setContents("");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsListSub", this);
            obj._setContents("");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsListReceived", this);
            obj._setContents("");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsListAppropriate", this);
            obj._setContents("");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsListCancelhistory", this);
            obj._setContents("");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsListRtdelay", this);
            obj._setContents("");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsListPayback", this);
            obj._setContents("");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Div("divSearch","0.0","10.0",null,"46.0","0",null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_cssclass("div_SEARCH_Bg");
            obj.set_formscrolltype("none");
            this.addChild(obj.name, obj);

            obj = new Static("staCD_ACNTUNIT","0.0","10.0","105.0","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("0");
            obj.set_text("사업지코드");
            obj.set_cssclass("sta_WF_SchLabelE");
            this.divSearch.addChild(obj.name, obj);

            obj = new Div("ccfCD_ACNTUNIT","staCD_ACNTUNIT:0.0","10.0","400","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.getSetter("CodeFindName").set("DRX_CFACNTUNIT");
            obj.getSetter("CDTextWidth").set("100");
            obj.set_taborder("1");
            obj.set_url("cmm::cmmCodeFind.xfdl");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("staTY_STATE","ccfCD_ACNTUNIT:0.0","10.0","105.0","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("6");
            obj.set_text("별도계약");
            obj.set_cssclass("sta_WF_SchLabelE");
            this.divSearch.addChild(obj.name, obj);

            obj = new Combo("ccboTY_STATE","staTY_STATE:0.0","10.0","100","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("7");
            obj.set_datacolumn("datacolumn");
            obj.set_codecolumn("codecolumn");
            var divSearch_form_ccboTY_STATE_innerdataset = new nexacro.NormalDataset("divSearch_form_ccboTY_STATE_innerdataset", obj);
            divSearch_form_ccboTY_STATE_innerdataset._setContents("<ColumnInfo><Column id=\"codecolumn\" size=\"256\"/><Column id=\"datacolumn\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"codecolumn\"/><Col id=\"datacolumn\">전체보기</Col></Row><Row><Col id=\"codecolumn\">수납중</Col><Col id=\"datacolumn\">수납중</Col></Row><Row><Col id=\"codecolumn\">수납완료</Col><Col id=\"datacolumn\">수납완료</Col></Row></Rows>");
            obj.set_innerdataset(divSearch_form_ccboTY_STATE_innerdataset);
            obj.set_text("전체");
            obj.set_value("");
            obj.set_index("0");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("staContent","ccboTY_STATE:0.0","10.0","105.0","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("2");
            obj.set_text("동층호");
            obj.set_textDecoration("none");
            obj.set_cssclass("sta_WF_SchLabel");
            this.divSearch.addChild(obj.name, obj);

            obj = new Edit("ctxtNO_DONG","staContent:0.0","10.0","50","24.0","15",null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("3");
            this.divSearch.addChild(obj.name, obj);

            obj = new Edit("ctxtNO_FLOOR","ctxtNO_DONG:0.0","10.0","30","24.0","15",null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("4");
            this.divSearch.addChild(obj.name, obj);

            obj = new Edit("ctxtNO_HO","ctxtNO_FLOOR:0.0","10.0","50","24.0","15",null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("5");
            this.divSearch.addChild(obj.name, obj);

            obj = new Button("BtnSearch","ctxtNO_HO:0.0","10.0","25",null,null,"8",null,null,null,null,this.divSearch.form);
            obj.set_taborder("6");
            obj.set_cssclass("btn_CF_Search");
            obj.set_tabstop("10.0");
            this.divSearch.addChild(obj.name, obj);

            obj = new Div("divData","0","divSearch:10",null,null,"0","0",null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_cssclass("div_DATA_Bg");
            this.addChild(obj.name, obj);

            obj = new Div("divSplitter","25%","0","5","100%",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("1");
            obj.set_background("skyblue");
            obj.set_cursor("ew-resize");
            this.divData.addChild(obj.name, obj);

            obj = new Div("divDataLeft","0","0",null,null,"divSplitter:5","0",null,null,null,null,this.divData.form);
            obj.set_taborder("2");
            this.divData.addChild(obj.name, obj);

            obj = new Grid("objGrid","0","10",null,null,"0","0",null,null,null,null,this.divData.form.divDataLeft.form);
            obj.set_taborder("3");
            obj._setContents("");
            this.divData.form.divDataLeft.addChild(obj.name, obj);

            obj = new Div("divDataRight","divSplitter:5","0",null,null,"0","0",null,null,null,null,this.divData.form);
            obj.set_taborder("4");
            this.divData.addChild(obj.name, obj);

            obj = new Static("sta00_0","1","35","60","36",null,null,null,null,null,null,this.divData.form.divDataRight.form);
            obj.set_taborder("20");
            obj.set_text("계약방식 : ");
            this.divData.form.divDataRight.addChild(obj.name, obj);

            obj = new Static("sta00_1","sta00_0:0","35","80","36",null,null,null,null,null,null,this.divData.form.divDataRight.form);
            obj.set_taborder("20");
            obj.set_textAlign("right");
            this.divData.form.divDataRight.addChild(obj.name, obj);

            obj = new Static("sta00_2","sta00_1:5","35","15","36",null,null,null,null,null,null,this.divData.form.divDataRight.form);
            obj.set_taborder("20");
            obj.set_text("m²");
            this.divData.form.divDataRight.addChild(obj.name, obj);

            obj = new Static("sta00_3","sta00_2:0","35","50","36",null,null,null,null,null,null,this.divData.form.divDataRight.form);
            obj.set_taborder("20");
            obj.set_textAlign("right");
            this.divData.form.divDataRight.addChild(obj.name, obj);

            obj = new Static("sta00_4","sta00_3:5","35","60","36",null,null,null,null,null,null,this.divData.form.divDataRight.form);
            obj.set_taborder("20");
            obj.set_text("형     군 : ");
            this.divData.form.divDataRight.addChild(obj.name, obj);

            obj = new Static("sta00_5","sta00_4:0","35","50","36",null,null,null,null,null,null,this.divData.form.divDataRight.form);
            obj.set_taborder("20");
            obj.set_textAlign("left");
            this.divData.form.divDataRight.addChild(obj.name, obj);

            obj = new Static("sta00_6","sta00_5:0","35","55","36",null,null,null,null,null,null,this.divData.form.divDataRight.form);
            obj.set_taborder("20");
            obj.set_text("OPTION : ");
            this.divData.form.divDataRight.addChild(obj.name, obj);

            obj = new Static("sta00_7","sta00_6:0","35","150","36",null,null,null,null,null,null,this.divData.form.divDataRight.form);
            obj.set_taborder("20");
            obj.set_textAlign("left");
            this.divData.form.divDataRight.addChild(obj.name, obj);

            obj = new Static("sta01","0","70","120","30",null,null,null,null,null,null,this.divData.form.divDataRight.form);
            obj.set_taborder("7");
            obj.set_text("계약자 성명");
            obj.set_cssclass("sta_WF_tablelabel");
            this.divData.form.divDataRight.addChild(obj.name, obj);

            obj = new Static("statxtAM_GETBEFOR","sta01:-1","70","120","30",null,null,null,null,null,null,this.divData.form.divDataRight.form);
            obj.set_taborder("9");
            obj.set_cssclass("sta_WF_tablebg");
            this.divData.form.divDataRight.addChild(obj.name, obj);

            obj = new Edit("edttxtAM_GETBEFOR","sta01:4","74","110","20",null,null,null,null,null,null,this.divData.form.divDataRight.form);
            obj.set_taborder("10");
            obj.set_enable("false");
            obj.set_readonly("true");
            this.divData.form.divDataRight.addChild(obj.name, obj);

            obj = new Static("sta02","statxtAM_GETBEFOR:-1","70","120","30",null,null,null,null,null,null,this.divData.form.divDataRight.form);
            obj.set_taborder("7");
            obj.set_text("주민(사업자)번호");
            obj.set_cssclass("sta_WF_tablelabel");
            this.divData.form.divDataRight.addChild(obj.name, obj);

            obj = new Static("statxtAM_GETDEC","sta02:-1","70","120","30",null,null,null,null,null,null,this.divData.form.divDataRight.form);
            obj.set_taborder("13");
            obj.set_cssclass("sta_WF_tablebg");
            this.divData.form.divDataRight.addChild(obj.name, obj);

            obj = new Edit("edttxtAM_GETDEC","sta02:4","74","110","20",null,null,null,null,null,null,this.divData.form.divDataRight.form);
            obj.set_taborder("14");
            obj.set_enable("false");
            obj.set_readonly("true");
            this.divData.form.divDataRight.addChild(obj.name, obj);

            obj = new Static("sta03","statxtAM_GETDEC:-1","70","120","30",null,null,null,null,null,null,this.divData.form.divDataRight.form);
            obj.set_taborder("7");
            obj.set_text("계약건수");
            obj.set_cssclass("sta_WF_tablelabel");
            this.divData.form.divDataRight.addChild(obj.name, obj);

            obj = new Static("statxtAM_GETSUM","sta03:-1","70","120","30",null,null,null,null,null,null,this.divData.form.divDataRight.form);
            obj.set_taborder("15");
            obj.set_cssclass("sta_WF_tablebg");
            this.divData.form.divDataRight.addChild(obj.name, obj);

            obj = new Edit("edttxtAM_GETSUM","sta03:4","74","110","20",null,null,null,null,null,null,this.divData.form.divDataRight.form);
            obj.set_taborder("16");
            obj.set_enable("false");
            obj.set_readonly("true");
            obj.set_textAlign("right");
            this.divData.form.divDataRight.addChild(obj.name, obj);

            obj = new Static("sta04","0","sta01:-1","120","30",null,null,null,null,null,null,this.divData.form.divDataRight.form);
            obj.set_taborder("19");
            obj.set_text("☎(자택)");
            obj.set_cssclass("sta_WF_tablelabel");
            this.divData.form.divDataRight.addChild(obj.name, obj);

            obj = new Static("statxtAM_DEPBEFOR","sta01:-1","sta01:-1","120","30",null,null,null,null,null,null,this.divData.form.divDataRight.form);
            obj.set_taborder("20");
            obj.set_cssclass("sta_WF_tablebg");
            this.divData.form.divDataRight.addChild(obj.name, obj);

            obj = new Edit("edttxtAM_DEPBEFOR","sta01:4","sta01:4","110","20",null,null,null,null,null,null,this.divData.form.divDataRight.form);
            obj.set_taborder("21");
            obj.set_enable("false");
            obj.set_readonly("true");
            this.divData.form.divDataRight.addChild(obj.name, obj);

            obj = new Static("sta05","statxtAM_DEPBEFOR:-1","sta01:-1","120","30",null,null,null,null,null,null,this.divData.form.divDataRight.form);
            obj.set_taborder("7");
            obj.set_text("☎(직장)");
            obj.set_cssclass("sta_WF_tablelabel");
            this.divData.form.divDataRight.addChild(obj.name, obj);

            obj = new Static("statxtAM_DEPINC","sta05:-1","sta01:-1","120","30",null,null,null,null,null,null,this.divData.form.divDataRight.form);
            obj.set_taborder("22");
            obj.set_cssclass("sta_WF_tablebg");
            this.divData.form.divDataRight.addChild(obj.name, obj);

            obj = new Edit("edttxtAM_DEPINC","sta05:4","sta01:4","110","20",null,null,null,null,null,null,this.divData.form.divDataRight.form);
            obj.set_taborder("23");
            obj.set_enable("false");
            obj.set_readonly("true");
            this.divData.form.divDataRight.addChild(obj.name, obj);

            obj = new Static("sta06","statxtAM_DEPINC:-1","sta01:-1","120","30",null,null,null,null,null,null,this.divData.form.divDataRight.form);
            obj.set_taborder("7");
            obj.set_text("휴대폰");
            obj.set_cssclass("sta_WF_tablelabel");
            this.divData.form.divDataRight.addChild(obj.name, obj);

            obj = new Static("statxtAM_DEPDEC","sta06:-1","sta01:-1","120","30",null,null,null,null,null,null,this.divData.form.divDataRight.form);
            obj.set_taborder("24");
            obj.set_cssclass("sta_WF_tablebg");
            this.divData.form.divDataRight.addChild(obj.name, obj);

            obj = new Edit("edttxtAM_DEPDEC","sta06:4","sta01:4","110","20",null,null,null,null,null,null,this.divData.form.divDataRight.form);
            obj.set_taborder("25");
            obj.set_enable("false");
            obj.set_readonly("true");
            this.divData.form.divDataRight.addChild(obj.name, obj);

            obj = new Grid("objGridSub","0","sta06:20",null,"30%","0",null,null,null,null,null,this.divData.form.divDataRight.form);
            obj.set_taborder("5");
            obj._setContents("");
            this.divData.form.divDataRight.addChild(obj.name, obj);

            obj = new Tab("tabData","0","objGridSub:20",null,null,"0","0",null,null,null,null,this.divData.form.divDataRight.form);
            obj.set_taborder("20");
            obj.set_tabindex("0");
            this.divData.form.divDataRight.addChild(obj.name, obj);

            obj = new Tabpage("page1",this.divData.form.divDataRight.form.tabData);
            obj.set_text("약정/수납내역");
            this.divData.form.divDataRight.form.tabData.addChild(obj.name, obj);

            obj = new Grid("objGridReceived","0","0",null,null,"0","0",null,null,null,null,this.divData.form.divDataRight.form.tabData.page1.form);
            obj.set_taborder("6");
            obj._setContents("");
            this.divData.form.divDataRight.form.tabData.page1.addChild(obj.name, obj);

            obj = new Tabpage("page2",this.divData.form.divDataRight.form.tabData);
            obj.set_text("예수금");
            this.divData.form.divDataRight.form.tabData.addChild(obj.name, obj);

            obj = new Static("sta07","5","0","150","22",null,null,null,null,null,null,this.divData.form.divDataRight.form.tabData.page2.form);
            obj.set_taborder("6");
            obj.set_text("계상내역");
            obj.set_cssclass("sta_TITLE_Bg");
            this.divData.form.divDataRight.form.tabData.page2.addChild(obj.name, obj);

            obj = new Grid("objGridAppropriate","0","sta07:5","30%",null,null,"0",null,null,null,null,this.divData.form.divDataRight.form.tabData.page2.form);
            obj.set_taborder("6");
            obj._setContents("");
            this.divData.form.divDataRight.form.tabData.page2.addChild(obj.name, obj);

            obj = new Static("sta08","objGridAppropriate:20","0","150","22",null,null,null,null,null,null,this.divData.form.divDataRight.form.tabData.page2.form);
            obj.set_taborder("6");
            obj.set_text("반제내역");
            obj.set_cssclass("sta_TITLE_Bg");
            this.divData.form.divDataRight.form.tabData.page2.addChild(obj.name, obj);

            obj = new Grid("objGridPayback","objGridAppropriate:15","sta07:5",null,null,"0","0",null,null,null,null,this.divData.form.divDataRight.form.tabData.page2.form);
            obj.set_taborder("6");
            obj._setContents("");
            this.divData.form.divDataRight.form.tabData.page2.addChild(obj.name, obj);

            obj = new Tabpage("page3",this.divData.form.divDataRight.form.tabData);
            obj.set_text("해약HISTORY");
            this.divData.form.divDataRight.form.tabData.addChild(obj.name, obj);

            obj = new Grid("objGridCancelhistory","0","0",null,null,"0","0",null,null,null,null,this.divData.form.divDataRight.form.tabData.page3.form);
            obj.set_taborder("6");
            obj._setContents("");
            this.divData.form.divDataRight.form.tabData.page3.addChild(obj.name, obj);

            obj = new Tabpage("page4",this.divData.form.divDataRight.form.tabData);
            obj.set_text("변동금리");
            this.divData.form.divDataRight.form.tabData.addChild(obj.name, obj);

            obj = new Grid("objGridRtdelay","0","0",null,null,"0","0",null,null,null,null,this.divData.form.divDataRight.form.tabData.page4.form);
            obj.set_taborder("6");
            obj._setContents("");
            this.divData.form.divDataRight.form.tabData.page4.addChild(obj.name, obj);

            obj = new Button("btn_03",null,"objGridSub:20","80","22","0",null,null,null,null,null,this.divData.form.divDataRight.form);
            obj.set_taborder("2");
            obj.set_text("특별수납");
            this.divData.form.divDataRight.addChild(obj.name, obj);

            obj = new Button("btn_02",null,"objGridSub:20","80","22","btn_03:5",null,null,null,null,null,this.divData.form.divDataRight.form);
            obj.set_taborder("2");
            obj.set_text("수납취소");
            this.divData.form.divDataRight.addChild(obj.name, obj);

            obj = new Button("btn_01",null,"objGridSub:20","80","22","btn_02:5",null,null,null,null,null,this.divData.form.divDataRight.form);
            obj.set_taborder("2");
            obj.set_text("수납");
            this.divData.form.divDataRight.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this
            obj = new Layout("default","",this._adjust_width,this._adjust_height,this,function(p){});
            this.addLayout(obj.name, obj);
            
            // BindItem Information
            obj = new BindItem("item0","divSearch.form.ccfCD_ACNTUNIT.form.CDTextBox","value","dsSearch","CD_ACNTUNIT");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item1","divSearch.form.ccfCD_ACNTUNIT.form.DSTextBox","value","dsSearch","DS_ACNTUNIT");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item4","divSearch.form.ccboTY_POSITION","value","dsSearch","TY_STATE");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item5","divSearch.form.ctxtNO_DONG","value","dsSearch","NO_DONG");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item2","divSearch.form.ctxtNO_FLOOR","value","dsSearch","NO_FLOOR");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item3","divSearch.form.ctxtNO_HO","value","dsSearch","NO_HO");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item6","divData.form.divDataRight.form.edttxtAM_GETBEFOR","value","dsListDetail","DS_CONTRACTOR");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item7","divData.form.divDataRight.form.edttxtAM_GETDEC","value","dsListDetail","NO_JUMINVENDOR");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item8","divData.form.divDataRight.form.edttxtAM_DEPBEFOR","value","dsListDetail","NO_TEL");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item9","divData.form.divDataRight.form.edttxtAM_DEPINC","value","dsListDetail","NO_OFFICETEL");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item10","divData.form.divDataRight.form.edttxtAM_DEPDEC","value","dsListDetail","NO_MOBILE");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item11","divData.form.divDataRight.form.edttxtAM_GETSUM","value","dsListDetail","CT_CONTRACT");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item12","divData.form.divDataRight.form.sta00_1","text","dsListDetail","NO_SIZE");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item13","divData.form.divDataRight.form.sta00_3","text","dsListDetail","TY_TYPE");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item14","divData.form.divDataRight.form.sta00_5","text","dsListDetail","TY_DISTRICT");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item15","divData.form.divDataRight.form.sta00_7","text","dsListDetail","RT_OPTION");
            this.addChild(obj.name, obj);
            obj.bind();
            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {
            this._addPreloadList("fdl","cmm::cmmCodeFind.xfdl");
        };
        
        // User Script
        this.registerScript("DRF_RECEIPTMANAGE.xfdl", function() {
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
        };

        /************************************************************************
         * 버튼 설정 : 화면(Tab) 전환시 마다 호출
         * 서브버튼 사용 및 공통버튼 강제 제어시 여기서 처리
         ************************************************************************/
        this.fnSetButton = function() {
        	// Select, Add, Del, Save, Excel, Print
        	// SubSelect, SubAdd, SubDel, SuubSave, SubExcel
        }

        /************************************************************************
         * 확장 버튼 : 화면별 버튼 설정 ID, function 연결 (화면버튼관리)
         ************************************************************************/
        this.fnSetExtendButton = function() {

        	this.btnEstimate = this.gfnFormButtonAdd("Estimate", "fnButtonClick"); 	// 예상수납안내
        	this.btnCancel   = this.gfnFormButtonAdd("Cancel"  , "fnButtonClick"); 	// 해약관리
        	this.btnAgree    = this.gfnFormButtonAdd("Agree"   , "fnButtonClick"); 	// 약정관리
        	this.btnCounsel  = this.gfnFormButtonAdd("Counsel" , "fnButtonClick"); 	// 상담일지
        };

        /************************************************************************
         * 변수 선언
         ************************************************************************/
        this.fnSetVariable = function() {

        	this.ccfCD_ACNTUNIT 	 = this.divSearch.form.ccfCD_ACNTUNIT;	// 사업지코드
        	this.ccboTY_STATE   	 = this.divSearch.form.ccboTY_POSITION;	// 별도계약

        	this.dxGrid              = this.divData.form.divDataLeft.form.objGrid;
        	this.dxGridSub           = this.divData.form.divDataRight.form.objGridSub;
        	this.tabdata             = this.divData.form.divDataRight.form.tabData;
        	this.dxGridReceived      = this.divData.form.divDataRight.form.tabData.page1.form.objGridReceived;
        	this.dxGridAppropriate   = this.divData.form.divDataRight.form.tabData.page2.form.objGridAppropriate;
        	this.dxGridPayback       = this.divData.form.divDataRight.form.tabData.page2.form.objGridPayback;
        	this.dxGridCancelhistory = this.divData.form.divDataRight.form.tabData.page3.form.objGridCancelhistory;
        	this.dxGridRtdelay       = this.divData.form.divDataRight.form.tabData.page4.form.objGridRtdelay;

        	this.dxGrid.addEventHandler("onselectchanged"           , this.fnGrid_RowCellChanged, this);
        	this.dxGridSub.addEventHandler("onselectchanged"        , this.fnGrid_RowCellChanged, this);
        	this.dxGridAppropriate.addEventHandler("onselectchanged", this.fnGrid_RowCellChanged, this);

        	// 버튼 세팅.
        	this.BtnSearch = this.divSearch.form.BtnSearch;
        	this.BtnSearch.addEventHandler("onclick", this.BtnSearch_onclick, this);

        	this.btn_01 = this.divData.form.divDataRight.form.btn_01;
        	this.btn_02 = this.divData.form.divDataRight.form.btn_02;
        	this.btn_03 = this.divData.form.divDataRight.form.btn_03;

        	this.btn_01.addEventHandler("onclick", this.fnButtonClick, this);
        	this.btn_02.addEventHandler("onclick", this.fnButtonClick, this);
        	this.btn_03.addEventHandler("onclick", this.fnButtonClick, this);
        };

        /************************************************************************
         * 이벤트 설정
         ************************************************************************/
        this.fnSetEvent = function() {

        	this.ccfCD_ACNTUNIT.BeforeUserDataSetParam = "fnBeforeUserDataSetParam";
        	this.ccfCD_ACNTUNIT.AfterCDTextChanged     = "fnAfterCDTextChanged";

        	// 그리드 초기화
        	this.gfnGridInit(this.dxGrid             , this.dsList             , "DR", "DRF_RECEIPTMANAGE_1");
        	this.gfnGridInit(this.dxGridSub          , this.dsListSub          , "DR", "DRF_RECEIPTMANAGE_2");
        	this.gfnGridInit(this.dxGridReceived     , this.dsListReceived     , "DR", "DRF_RECEIPTMANAGE_3");
        	this.gfnGridInit(this.dxGridAppropriate  , this.dsListAppropriate  , "DR", "DRF_RECEIPTMANAGE_4");
        	this.gfnGridInit(this.dxGridPayback      , this.dsListPayback      , "DR", "DRF_RECEIPTMANAGE_5");	// 반제
        	this.gfnGridInit(this.dxGridCancelhistory, this.dsListCancelhistory, "DR", "DRF_RECEIPTMANAGE_6");
        	this.gfnGridInit(this.dxGridRtdelay      , this.dsListRtdelay      , "DR", "DRF_RECEIPTMANAGE_7");

        	this.dxGridSub.set_selecttype("cell");  			//  추후 문의.
        	this.dxGridAppropriate.set_selecttype("cell");

        	this.dsSearch.setColumn(0, "TY_STATE", "");	// 전체보기
        };

        /************************************************************************
         * 파라미터 설정
         ************************************************************************/
        this.fnSetParameter = function() {

        	this.dsSelect = new Dataset();
        	this.dsSelect.addColumn("CD_ACNTUNIT"     		, "string");
        	this.dsSelect.addColumn("TY_GUBUN"        		, "string");
        	this.dsSelect.addColumn("NO_CHASU"        		, "string");
        	this.dsSelect.addColumn("NO_DONG"         		, "string");
        	this.dsSelect.addColumn("NO_FLOOR"        		, "string");
        	this.dsSelect.addColumn("NO_HO"           		, "string");
        	this.dsSelect.addColumn("NO_UNIONMEMBER_1"		, "string");
        	this.dsSelect.addColumn("NO_UNIONMEMBER_2"		, "string");
        	this.dsSelect.addColumn("TY_STATE"        		, "string");

        	this.dsSelectDetail = new Dataset();
        	this.dsSelectDetail.addColumn("CD_ACNTUNIT"     , "string");
        	this.dsSelectDetail.addColumn("TY_GUBUN"        , "string");
        	this.dsSelectDetail.addColumn("NO_CHASU"        , "string");
        	this.dsSelectDetail.addColumn("NO_DONG"         , "string");
        	this.dsSelectDetail.addColumn("NO_FLOOR"        , "string");
        	this.dsSelectDetail.addColumn("NO_HO"           , "string");
        	this.dsSelectDetail.addColumn("NO_UNIONMEMBER"  , "string");

        	this.dsSelectSub = new Dataset();
        	this.dsSelectSub.addColumn("CD_ACNTUNIT"     	, "string");
        	this.dsSelectSub.addColumn("TY_GUBUN"        	, "string");
        	this.dsSelectSub.addColumn("NO_CHASU"        	, "string");
        	this.dsSelectSub.addColumn("NO_DONG"         	, "string");
        	this.dsSelectSub.addColumn("NO_FLOOR"        	, "string");
        	this.dsSelectSub.addColumn("NO_HO"           	, "string");
        	this.dsSelectSub.addColumn("NO_UNIONMEMBER"  	, "string");

        	this.dsSelectThird = new Dataset();
        	this.dsSelectThird.addColumn("CD_ACNTUNIT"     	, "string");
        	this.dsSelectThird.addColumn("TY_GUBUN"        	, "string");
        	this.dsSelectThird.addColumn("NO_CHASU"        	, "string");
        	this.dsSelectThird.addColumn("NO_DONG"         	, "string");
        	this.dsSelectThird.addColumn("NO_FLOOR"        	, "string");
        	this.dsSelectThird.addColumn("NO_HO"           	, "string");
        	this.dsSelectThird.addColumn("NO_UNIONMEMBER"  	, "string");
        	this.dsSelectThird.addColumn("NO_CONTRACT"  	, "string");

        	this.dsInsert = new Dataset();
        	this.dsInsert.addColumn("CD_ACNTUNIT"     		, "string");
        	this.dsInsert.addColumn("TY_GUBUN"        		, "string");
        	this.dsInsert.addColumn("NO_CHASU"        		, "string");
        	this.dsInsert.addColumn("NO_DONG"		  		, "string");
        	this.dsInsert.addColumn("NO_HOSU"		  		, "string");
        	this.dsInsert.addColumn("NO_UNIONMEMBER"  		, "string");
        	this.dsInsert.addColumn("TY_NAPIP"		  		, "string");
        	this.dsInsert.addColumn("NO_NAPIP"		  		, "string");
        	this.dsInsert.addColumn("DT_START"		  		, "string");
        	this.dsInsert.addColumn("DT_END"		  		, "string");
        	this.dsInsert.addColumn("RT_DISCOUNT"  	  		, "string");
        	this.dsInsert.addColumn("RT_DELAY1"	      		, "string");
        	this.dsInsert.addColumn("RT_DELAY3"		  		, "string");
        	this.dsInsert.addColumn("RT_DELAY6"	  	  		, "string");
        	this.dsInsert.addColumn("RT_DELAY99"	  		, "string");
        	this.dsInsert.addColumn("ID_INSERT"		  		, "string");

        	this.dsUpdate = new Dataset();
        	this.dsUpdate.addColumn("CD_ACNTUNIT"     		, "string");
        	this.dsUpdate.addColumn("TY_GUBUN"        		, "string");
        	this.dsUpdate.addColumn("NO_CHASU"        		, "string");
        	this.dsUpdate.addColumn("NO_DONG"		  		, "string");
        	this.dsUpdate.addColumn("NO_HOSU"		  		, "string");
        	this.dsUpdate.addColumn("NO_UNIONMEMBER"  		, "string");
        	this.dsUpdate.addColumn("TY_NAPIP"		  		, "string");
        	this.dsUpdate.addColumn("NO_NAPIP"		  		, "string");
        	this.dsUpdate.addColumn("DT_START"		  		, "string");
        	this.dsUpdate.addColumn("DT_END"		  		, "string");
        	this.dsUpdate.addColumn("RT_DISCOUNT"  	  		, "string");
        	this.dsUpdate.addColumn("RT_DELAY1"	      		, "string");
        	this.dsUpdate.addColumn("RT_DELAY3"		  		, "string");
        	this.dsUpdate.addColumn("RT_DELAY6"	  	  		, "string");
        	this.dsUpdate.addColumn("RT_DELAY99"	  		, "string");
        	this.dsUpdate.addColumn("ID_UPDATE"		  		, "string");

        	this.dsDelete = new Dataset();
        	this.dsDelete.addColumn("CD_ACNTUNIT"     		, "string");
        	this.dsDelete.addColumn("TY_GUBUN"        		, "string");
        	this.dsDelete.addColumn("NO_CHASU"        		, "string");
        	this.dsDelete.addColumn("NO_DONG"		  		, "string");
        	this.dsDelete.addColumn("NO_HOSU"		  		, "string");
        	this.dsDelete.addColumn("NO_UNIONMEMBER"  		, "string");
        	this.dsDelete.addColumn("TY_NAPIP"		  		, "string");
        	this.dsDelete.addColumn("NO_NAPIP"		  		, "string");
        	this.dsDelete.addColumn("DT_START"		  		, "string");

        	this.dsSelectPayback = new Dataset();
        	this.dsSelectPayback.addColumn("CD_ACNTUNIT"    , "string");
        	this.dsSelectPayback.addColumn("TY_GUBUN"       , "string");
        	this.dsSelectPayback.addColumn("NO_CHASU"       , "string");
        	this.dsSelectPayback.addColumn("NO_DONG"        , "string");
        	this.dsSelectPayback.addColumn("NO_FLOOR"       , "string");
        	this.dsSelectPayback.addColumn("NO_HO"          , "string");
        	this.dsSelectPayback.addColumn("NO_UNIONMEMBER" , "string");
        	this.dsSelectPayback.addColumn("NO_APPRO"       , "string");
        	this.dsSelectPayback.addColumn("NO_CONTRACT"    , "string");

        	this.dsInsertPayback = new Dataset()
        	this.dsInsertPayback.addColumn("CD_ACNTUNIT"    , "string");
        	this.dsInsertPayback.addColumn("TY_GUBUN"       , "string");
        	this.dsInsertPayback.addColumn("NO_CHASU"       , "string");
        	this.dsInsertPayback.addColumn("NO_DONG"		, "string");
        	this.dsInsertPayback.addColumn("NO_HOSU"		, "string");
        	this.dsInsertPayback.addColumn("NO_UNIONMEMBER" , "string");
        	this.dsInsertPayback.addColumn("NO_CONTRACT"	, "string");
        	this.dsInsertPayback.addColumn("NO_APPRO"		, "string");
        	this.dsInsertPayback.addColumn("NO_PAYBACK"	    , "string");
        	this.dsInsertPayback.addColumn("DT_PAYBACK"     , "string");
        	this.dsInsertPayback.addColumn("AM_PAYBACK"  	, "bigdecimal");
        	this.dsInsertPayback.addColumn("TY_PROCESS"	    , "string");
        	this.dsInsertPayback.addColumn("DT_REFUND"		, "string");
        	this.dsInsertPayback.addColumn("DS_REFUNDBANK"	, "string");
        	this.dsInsertPayback.addColumn("NO_REFUNDBANK"	, "string");
        	this.dsInsertPayback.addColumn("DS_OWNER"	    , "string");
        	this.dsInsertPayback.addColumn("ID_INSERT"		, "string");

        	this.dsUpdatePayback = new Dataset()
        	this.dsUpdatePayback.addColumn("CD_ACNTUNIT"    , "string");
        	this.dsUpdatePayback.addColumn("TY_GUBUN"       , "string");
        	this.dsUpdatePayback.addColumn("NO_CHASU"       , "string");
        	this.dsUpdatePayback.addColumn("NO_DONG"		, "string");
        	this.dsUpdatePayback.addColumn("NO_HOSU"		, "string");
        	this.dsUpdatePayback.addColumn("NO_UNIONMEMBER" , "string");
        	this.dsUpdatePayback.addColumn("NO_CONTRACT"	, "string");
        	this.dsUpdatePayback.addColumn("NO_APPRO"		, "string");
        	this.dsUpdatePayback.addColumn("NO_PAYBACK"	    , "string");
        	this.dsUpdatePayback.addColumn("DT_PAYBACK"     , "string");
        	this.dsUpdatePayback.addColumn("AM_PAYBACK"  	, "bigdecimal");
        	this.dsUpdatePayback.addColumn("TY_PROCESS"	    , "string");
        	this.dsUpdatePayback.addColumn("DT_REFUND"		, "string");
        	this.dsUpdatePayback.addColumn("DS_REFUNDBANK"	, "string");
        	this.dsUpdatePayback.addColumn("NO_REFUNDBANK"	, "string");
        	this.dsUpdatePayback.addColumn("DS_OWNER"	    , "string");
        	this.dsUpdatePayback.addColumn("ID_INSERT"		, "string");

        	this.dsDeletePayback = new Dataset();
        	this.dsDeletePayback.addColumn("CD_ACNTUNIT"    , "string");
        	this.dsDeletePayback.addColumn("TY_GUBUN"       , "string");
        	this.dsDeletePayback.addColumn("NO_CHASU"       , "string");
        	this.dsDeletePayback.addColumn("NO_DONG"		, "string");
        	this.dsDeletePayback.addColumn("NO_HOSU"		, "string");
        	this.dsDeletePayback.addColumn("NO_UNIONMEMBER" , "string");
        	this.dsDeletePayback.addColumn("NO_CONTRACT"	, "string");
        	this.dsDeletePayback.addColumn("NO_APPRO"		, "string");
        	this.dsDeletePayback.addColumn("NO_PAYBACK"	    , "string");

        	this.dsReceiptCancel = new Dataset();
        	this.dsReceiptCancel.addColumn("CD_ACNTUNIT"    , "string");
        	this.dsReceiptCancel.addColumn("TY_GUBUN"       , "string");
        	this.dsReceiptCancel.addColumn("NO_CHASU"       , "string");
        	this.dsReceiptCancel.addColumn("NO_DONG"		, "string");
        	this.dsReceiptCancel.addColumn("NO_FLOOR"		, "string");
        	this.dsReceiptCancel.addColumn("NO_HO"	   	    , "string");
        	this.dsReceiptCancel.addColumn("NO_UNIONMEMBER" , "string");
        	this.dsReceiptCancel.addColumn("TY_NAPIP"	    , "string");
        	this.dsReceiptCancel.addColumn("NO_NAPIP"		, "string");
        	this.dsReceiptCancel.addColumn("NO_BUNNAP"	    , "string");
        	this.dsReceiptCancel.addColumn("DT_RECEIPT"	    , "string");
        	this.dsReceiptCancel.addColumn("NO_CONTRACT"	, "string");
        	this.dsReceiptCancel.addColumn("ID_INSERT"	    , "string");
        }

        /************************************************************************
         * 컨트롤 이벤트
         ************************************************************************/
         /*
          *	조회 버튼
          */
        this.fnSelect = function() {

        	if (!this.fnSelectValidate()) return false;

        	this.gfnGridBeforeSelect(this.dxGrid);

        	this.dsSelect.clearData();
        	this.dsSelect.addRow();

        	this.dsSelect.setColumn(0, "CD_ACNTUNIT"     , this.dsSearch.getColumn(0, "CD_ACNTUNIT").substr(0, 6));
        	this.dsSelect.setColumn(0, "TY_GUBUN"        , this.dsSearch.getColumn(0, "CD_ACNTUNIT").substr(6, 1));
        	this.dsSelect.setColumn(0, "NO_CHASU"        , this.dsSearch.getColumn(0, "CD_ACNTUNIT").substr(7, 2));
        	this.dsSelect.setColumn(0, "NO_DONG"         , this.dsSearch.getColumn(0, "NO_DONG"));
        	this.dsSelect.setColumn(0, "NO_FLOOR"        , this.dsSearch.getColumn(0, "NO_FLOOR"));
        	this.dsSelect.setColumn(0, "NO_HO"           , this.dsSearch.getColumn(0, "NO_HO"));
        	this.dsSelect.setColumn(0, "NO_UNIONMEMBER_1", "");
        	this.dsSelect.setColumn(0, "NO_UNIONMEMBER_2", "");
        	this.dsSelect.setColumn(0, "TY_STATE"        , this.dsSearch.getColumn(0, "TY_STATE"));

        	var strSvcId    = "select";
        	var strSvcType  = "grid";
        	var inProc		= "_dsProc";
        	var inData      = "select=dsSelect";
        	var outData     = "dsList=select0";
        	var strArg      = "";
        	var callBackFnc = "fnCallback";

        	this.gfnTransaction(strSvcId, 		// transaction을 구분하기 위한 svc id값
        						strSvcType, 	// transaction을 요청할 구분
        						inProc,			// Procedure 정보 Dataset 이름
        						inData, 		// 입력값으로 보낼 dataset id , a=b형태로 실제이름과 입력이름을 매칭
        						outData, 		// 처리결과값으로 받을 dataset id, a=b형태로 실제이름과 입력이름을 매칭
        						strArg, 		// 입력값으로 보낼 arguments, strFormData="20120607"
        						callBackFnc); 	// 통신방법 정의 [생략가능]
        }

        /*
         *	입력 버튼
         */
        this.fnAdd = function() {

        	var tabIdx = this.tabdata.tabindex;

        	if(tabIdx == 1) this.gfnGridAdd(this.dxGridPayback);
        	if(tabIdx == 3) this.gfnGridAdd(this.dxGridRtdelay);
        };

        /*
         *	삭제 버튼
         */
        this.fnDel = function() {

        	var tabIdx = this.tabdata.tabindex;

        	if(tabIdx == 1) this.gfnGridDel(this.dxGridPayback);
        	if(tabIdx == 3) this.gfnGridDel(this.dxGridRtdelay);
        };

        /*
         *	저장 버튼
         */
        this.fnSave = function() {

        	var tabIdx = this.tabdata.tabindex;

        	if(tabIdx == 1) this.fnSavePayback();
        	if(tabIdx == 3) this.fnSaveRtdelay();
        };

        this.fnSavePayback = function() {

        	if(!this.gfnGridValidate(this.dxGridPayback)) return false; 	// 반제정보

        	this.dxGridPayback.updateToDataset();

        	this.dsInsertPayback.clearData();
        	this.dsUpdatePayback.clearData();
        	this.dsDeletePayback.clearData();

        	for (var i = 0; i < this.dsListPayback.rowcount; i++) {
        		var flag      = this.gfnGetFlag(this.dsListPayback, i);
        		var lrow      = this.dsList.rowposition, srow = this.dsListSub.rowposition, arow = this.dsListAppropriate.rowposition;
        		var tyProcess = this.dsListPayback.getColumn(i, "TY_PROCESS");

        		if(tyProcess == "분양대금으로 반제") tyProcess = "1";
        		if(tyProcess == "영업외 수익처리")   tyProcess = "2";
        		if(tyProcess == "환불처리")           tyProcess = "3";

        		switch(flag) {
        			case "I" :

        					var nRow = this.dsInsertPayback.addRow();

        					this.dsInsertPayback.setColumn(nRow, "CD_ACNTUNIT"   , this.dsSearch.getColumn(0, "CD_ACNTUNIT").substr(0, 6));
        					this.dsInsertPayback.setColumn(nRow, "TY_GUBUN"      , this.dsSearch.getColumn(0, "CD_ACNTUNIT").substr(6, 1));
        					this.dsInsertPayback.setColumn(nRow, "NO_CHASU"      , this.dsSearch.getColumn(0, "CD_ACNTUNIT").substr(7, 2));
        					this.dsInsertPayback.setColumn(nRow, "NO_DONG"       , this.dsList.getColumn(lrow, "NO_DONG"));
        					this.dsInsertPayback.setColumn(nRow, "NO_FLOOR"      , this.dsList.getColumn(lrow, "NO_FLOOR"));
        					this.dsInsertPayback.setColumn(nRow, "NO_HO"         , this.dsList.getColumn(lrow, "NO_HO"));
        					this.dsInsertPayback.setColumn(nRow, "NO_UNIONMEMBER", this.dsList.getColumn(lrow, "NO_UNIONMEMBER"));
        					this.dsInsertPayback.setColumn(nRow, "NO_CONTRACT"   , this.dsListSub.getColumn(srow, "NO_CONTRACT"));
        					this.dsInsertPayback.setColumn(nRow, "NO_APPRO"      , this.dsListAppropriate.getColumn(arow, "NO_APPRO"));
        					this.dsInsertPayback.setColumn(nRow, "NO_PAYBACK"    , this.dsListPayback.getColumn(i, "NO_PAYBACK"));
        					this.dsInsertPayback.setColumn(nRow, "DT_PAYBACK"    , this.dsListPayback.getColumn(i, "DT_PAYBACK"));
        					this.dsInsertPayback.setColumn(nRow, "AM_PAYBACK"    , this.dsListPayback.getColumn(i, "AM_PAYBACK"));
        					this.dsInsertPayback.setColumn(nRow, "TY_PROCESS"    , tyProcess);
        					this.dsInsertPayback.setColumn(nRow, "DT_REFUND"     , this.dsListPayback.getColumn(i, "DT_REFUND"));
        					this.dsInsertPayback.setColumn(nRow, "DS_REFUNDBANK" , this.dsListPayback.getColumn(i, "DS_REFUNDBANK"));
        					this.dsInsertPayback.setColumn(nRow, "NO_REFUNDBANK" , this.dsListPayback.getColumn(i, "NO_REFUNDBANK"));
        					this.dsInsertPayback.setColumn(nRow, "DS_OWNER"      , this.dsListPayback.getColumn(i, "DS_OWNER"));
        					this.dsInsertPayback.setColumn(nRow, "ID_INSERT"     , this.AuthClient.ID_USER);

        				break;
        			case "U" :
        					var nRow = this.dsUpdatePayback.addRow();

        					this.dsUpdatePayback.setColumn(nRow, "CD_ACNTUNIT"   , this.dsSearch.getColumn(0, "CD_ACNTUNIT").substr(0, 6));
        					this.dsUpdatePayback.setColumn(nRow, "TY_GUBUN"      , this.dsSearch.getColumn(0, "CD_ACNTUNIT").substr(6, 1));
        					this.dsUpdatePayback.setColumn(nRow, "NO_CHASU"      , this.dsSearch.getColumn(0, "CD_ACNTUNIT").substr(7, 2));
        					this.dsUpdatePayback.setColumn(nRow, "NO_DONG"       , this.dsList.getColumn(lrow, "NO_DONG"));
        					this.dsUpdatePayback.setColumn(nRow, "NO_FLOOR"      , this.dsList.getColumn(lrow, "NO_FLOOR"));
        					this.dsUpdatePayback.setColumn(nRow, "NO_HO"         , this.dsList.getColumn(lrow, "NO_HO"));
        					this.dsUpdatePayback.setColumn(nRow, "NO_UNIONMEMBER", this.dsList.getColumn(lrow, "NO_UNIONMEMBER"));
        					this.dsUpdatePayback.setColumn(nRow, "NO_CONTRACT"   , this.dsListSub.getColumn(srow, "NO_CONTRACT"));
        					this.dsUpdatePayback.setColumn(nRow, "NO_APPRO"      , this.dsListAppropriate.getColumn(arow, "NO_APPRO"));
        					this.dsUpdatePayback.setColumn(nRow, "NO_PAYBACK"    , this.dsListPayback.getColumn(i, "NO_PAYBACK"));
        					this.dsUpdatePayback.setColumn(nRow, "DT_PAYBACK"    , this.dsListPayback.getColumn(i, "DT_PAYBACK"));
        					this.dsUpdatePayback.setColumn(nRow, "AM_PAYBACK"    , this.dsListPayback.getColumn(i, "AM_PAYBACK"));
        					this.dsUpdatePayback.setColumn(nRow, "TY_PROCESS"    , tyProcess);
        					this.dsUpdatePayback.setColumn(nRow, "DT_REFUND"     , this.dsListPayback.getColumn(i, "DT_REFUND"));
        					this.dsUpdatePayback.setColumn(nRow, "DS_REFUNDBANK" , this.dsListPayback.getColumn(i, "DS_REFUNDBANK"));
        					this.dsUpdatePayback.setColumn(nRow, "NO_REFUNDBANK" , this.dsListPayback.getColumn(i, "NO_REFUNDBANK"));
        					this.dsUpdatePayback.setColumn(nRow, "DS_OWNER"      , this.dsListPayback.getColumn(i, "DS_OWNER"));
        					this.dsUpdatePayback.setColumn(nRow, "ID_UPDATE"     , this.AuthClient.ID_USER);
        				break;
        			case "D" :
        					var nRow = this.dsDeletePayback.addRow();

        					this.dsDeletePayback.setColumn(nRow, "CD_ACNTUNIT"   , this.dsSearch.getColumn(0, "CD_ACNTUNIT").substr(0, 6));
        					this.dsDeletePayback.setColumn(nRow, "TY_GUBUN"      , this.dsSearch.getColumn(0, "CD_ACNTUNIT").substr(6, 1));
        					this.dsDeletePayback.setColumn(nRow, "NO_CHASU"      , this.dsSearch.getColumn(0, "CD_ACNTUNIT").substr(7, 2));
        					this.dsDeletePayback.setColumn(nRow, "NO_DONG"       , this.dsList.getColumn(lrow, "NO_DONG"));
        					this.dsDeletePayback.setColumn(nRow, "NO_FLOOR"      , this.dsList.getColumn(lrow, "NO_FLOOR"));
        					this.dsDeletePayback.setColumn(nRow, "NO_HO"         , this.dsList.getColumn(lrow, "NO_HO"));
        					this.dsDeletePayback.setColumn(nRow, "NO_UNIONMEMBER", this.dsList.getColumn(lrow, "NO_UNIONMEMBER"));
        					this.dsDeletePayback.setColumn(nRow, "NO_CONTRACT"   , this.dsListSub.getColumn(srow, "NO_CONTRACT"));
        					this.dsDeletePayback.setColumn(nRow, "NO_APPRO"      , this.dsListAppropriate.getColumn(arow, "NO_APPRO"));
        					this.dsDeletePayback.setColumn(nRow, "NO_PAYBACK"    , this.dsListPayback.getColumn(i, "NO_PAYBACK"));
        				break;
        		}
        	}

        	if (this.dsInsertPayback.rowcount == 0 && this.dsUpdatePayback.rowcount == 0 && this.dsDeletePayback.rowcount == 0) return;

        	var strSvcId    = "savePayback";
        	var strSvcType  = "save";
        	var inProc		= "_dsProc";
        	var inData      = "insert=dsInsertPayback update=dsUpdatePayback delete=dsDeletePayback";
        	var outData     = "";
        	var strArg      = "";
        	var callBackFnc = "fnCallback";

        	this.gfnTransaction(strSvcId, 		// transaction을 구분하기 위한 svc id값
        						strSvcType, 	// transaction을 요청할 구분
        						inProc,			// Procedure 정보 Dataset 이름
        						inData, 		// 입력값으로 보낼 dataset id , a=b형태로 실제이름과 입력이름을 매칭
        						outData, 		// 처리결과값으로 받을 dataset id, a=b형태로 실제이름과 입력이름을 매칭
        						strArg, 		// 입력값으로 보낼 arguments, strFormData="20120607"
        						callBackFnc); 	// 통신방법 정의 [생략가능]
        }

        this.fnSaveRtdelay = function() {

        	if(!this.gfnGridValidate(this.dxGridRtdelay)) return false;	// 변동금리

        	this.dxGridRtdelay.updateToDataset();

        	this.dsInsert.clearData();
        	this.dsUpdate.clearData();
        	this.dsDelete.clearData();

        	for (var i = 0; i < this.dsListRtdelay.rowcount; i++) {
        		var flag      = this.gfnGetFlag(this.dsListRtdelay, i);
        		var lrow      = this.dsList.rowposition, srow = this.dsListSub.rowposition, rrow = this.dsListRtdelay.rowposition;
        		var tyNapip = this.dsListRtdelay.getColumn(i, "TY_NAPIP");

        		if(tyNapip == "계약금")   tyProcess = "C";
        		if(tyNapip == "중도금")   tyProcess = "J";
        		if(tyNapip == "잔금")     tyProcess = "R";
        		if(tyNapip == "잔금유예") tyProcess = "U";

        		switch(flag) {
        			case "I" :

        					var nRow = this.dsInsert.addRow();

        					this.dsInsert.setColumn(nRow, "CD_ACNTUNIT"   , this.dsSearch.getColumn(0, "CD_ACNTUNIT").substr(0, 6));
        					this.dsInsert.setColumn(nRow, "TY_GUBUN"      , this.dsSearch.getColumn(0, "CD_ACNTUNIT").substr(6, 1));
        					this.dsInsert.setColumn(nRow, "NO_CHASU"      , this.dsSearch.getColumn(0, "CD_ACNTUNIT").substr(7, 2));
        					this.dsInsert.setColumn(nRow, "NO_DONG"       , this.dsList.getColumn(lrow, "NO_DONG"));
        					this.dsInsert.setColumn(nRow, "NO_FLOOR"      , this.dsList.getColumn(lrow, "NO_FLOOR"));
        					this.dsInsert.setColumn(nRow, "NO_HO"         , this.dsList.getColumn(lrow, "NO_HO"));
        					this.dsInsert.setColumn(nRow, "NO_UNIONMEMBER", this.dsList.getColumn(lrow, "NO_UNIONMEMBER"));
        					this.dsInsert.setColumn(nRow, "NO_CONTRACT"   , this.dsListSub.getColumn(srow, "NO_CONTRACT"));
        					this.dsInsert.setColumn(nRow, "TY_NAPIP"      , tyNapip);
        					this.dsInsert.setColumn(nRow, "NO_NAPIP"      , this.dsListRtdelay.getColumn(i, "NO_NAPIP"));
        					this.dsInsert.setColumn(nRow, "DT_START"      , this.dsListRtdelay.getColumn(i, "DT_START"));
        					this.dsInsert.setColumn(nRow, "DT_END"        , this.dsListRtdelay.getColumn(i, "DT_END"));
        					this.dsInsert.setColumn(nRow, "RT_DISCOUNT"   , this.dsListRtdelay.getColumn(i, "RT_DISCOUNT"));
        					this.dsInsert.setColumn(nRow, "RT_DELAY1"     , this.dsListRtdelay.getColumn(i, "RT_DELAY1"));
        					this.dsInsert.setColumn(nRow, "RT_DELAY3"     , this.dsListRtdelay.getColumn(i, "RT_DELAY3"));
        					this.dsInsert.setColumn(nRow, "RT_DELAY6"     , this.dsListRtdelay.getColumn(i, "RT_DELAY6"));
        					this.dsInsert.setColumn(nRow, "RT_DELAY99"    , this.dsListRtdelay.getColumn(i, "RT_DELAY99"));
        					this.dsInsert.setColumn(nRow, "ID_INSERT"     , this.AuthClient.ID_USER);

        				break;
        			case "U" :
        					var nRow = this.dsUpdate.addRow();

        					this.dsUpdate.setColumn(nRow, "CD_ACNTUNIT"   , this.dsSearch.getColumn(0, "CD_ACNTUNIT").substr(0, 6));
        					this.dsUpdate.setColumn(nRow, "TY_GUBUN"      , this.dsSearch.getColumn(0, "CD_ACNTUNIT").substr(6, 1));
        					this.dsUpdate.setColumn(nRow, "NO_CHASU"      , this.dsSearch.getColumn(0, "CD_ACNTUNIT").substr(7, 2));
        					this.dsUpdate.setColumn(nRow, "NO_DONG"       , this.dsList.getColumn(lrow, "NO_DONG"));
        					this.dsUpdate.setColumn(nRow, "NO_FLOOR"      , this.dsList.getColumn(lrow, "NO_FLOOR"));
        					this.dsUpdate.setColumn(nRow, "NO_HO"         , this.dsList.getColumn(lrow, "NO_HO"));
        					this.dsUpdate.setColumn(nRow, "NO_UNIONMEMBER", this.dsList.getColumn(lrow, "NO_UNIONMEMBER"));
        					this.dsUpdate.setColumn(nRow, "NO_CONTRACT"   , this.dsListSub.getColumn(srow, "NO_CONTRACT"));
        					this.dsUpdate.setColumn(nRow, "TY_NAPIP"      , tyNapip);
        					this.dsUpdate.setColumn(nRow, "NO_NAPIP"      , this.dsListRtdelay.getColumn(i, "NO_NAPIP"));
        					this.dsUpdate.setColumn(nRow, "DT_START"      , this.dsListRtdelay.getColumn(i, "DT_START"));
        					this.dsUpdate.setColumn(nRow, "DT_END"        , this.dsListRtdelay.getColumn(i, "DT_END"));
        					this.dsUpdate.setColumn(nRow, "RT_DISCOUNT"   , this.dsListRtdelay.getColumn(i, "RT_DISCOUNT"));
        					this.dsUpdate.setColumn(nRow, "RT_DELAY1"     , this.dsListRtdelay.getColumn(i, "RT_DELAY1"));
        					this.dsUpdate.setColumn(nRow, "RT_DELAY3"     , this.dsListRtdelay.getColumn(i, "RT_DELAY3"));
        					this.dsUpdate.setColumn(nRow, "RT_DELAY6"     , this.dsListRtdelay.getColumn(i, "RT_DELAY6"));
        					this.dsUpdate.setColumn(nRow, "RT_DELAY99"    , this.dsListRtdelay.getColumn(i, "RT_DELAY99"));
        					this.dsUpdate.setColumn(nRow, "ID_UPDATE"     , this.AuthClient.ID_USER);
        				break;
        			case "D" :
        					var nRow = this.dsDelete.addRow();

        					this.dsDelete.setColumn(nRow, "CD_ACNTUNIT"   , this.dsSearch.getColumn(0, "CD_ACNTUNIT").substr(0, 6));
        					this.dsDelete.setColumn(nRow, "TY_GUBUN"      , this.dsSearch.getColumn(0, "CD_ACNTUNIT").substr(6, 1));
        					this.dsDelete.setColumn(nRow, "NO_CHASU"      , this.dsSearch.getColumn(0, "CD_ACNTUNIT").substr(7, 2));
        					this.dsDelete.setColumn(nRow, "NO_DONG"       , this.dsList.getColumn(lrow, "NO_DONG"));
        					this.dsDelete.setColumn(nRow, "NO_FLOOR"      , this.dsList.getColumn(lrow, "NO_FLOOR"));
        					this.dsDelete.setColumn(nRow, "NO_HO"         , this.dsList.getColumn(lrow, "NO_HO"));
        					this.dsDelete.setColumn(nRow, "NO_UNIONMEMBER", this.dsList.getColumn(lrow, "NO_UNIONMEMBER"));
        					this.dsDelete.setColumn(nRow, "NO_CONTRACT"   , this.dsListSub.getColumn(srow, "NO_CONTRACT"));
        					this.dsDelete.setColumn(nRow, "TY_NAPIP"      , tyNapip);
        					this.dsDelete.setColumn(nRow, "NO_NAPIP"      , this.dsListRtdelay.getColumn(i, "NO_NAPIP"));
        					this.dsDelete.setColumn(nRow, "DT_START"      , this.dsListRtdelay.getColumn(i, "DT_START"));
        				break;
        		}
        	}

        	if (this.dsInsertPayback.rowcount == 0 && this.dsUpdatePayback.rowcount == 0 && this.dsDeletePayback.rowcount == 0) return;

        	var strSvcId    = "savePayback";
        	var strSvcType  = "save";
        	var inProc		= "_dsProc";
        	var inData      = "insert=dsInsertPayback update=dsUpdatePayback delete=dsDeletePayback";
        	var outData     = "";
        	var strArg      = "";
        	var callBackFnc = "fnCallback";

        	this.gfnTransaction(strSvcId, 		// transaction을 구분하기 위한 svc id값
        						strSvcType, 	// transaction을 요청할 구분
        						inProc,			// Procedure 정보 Dataset 이름
        						inData, 		// 입력값으로 보낼 dataset id , a=b형태로 실제이름과 입력이름을 매칭
        						outData, 		// 처리결과값으로 받을 dataset id, a=b형태로 실제이름과 입력이름을 매칭
        						strArg, 		// 입력값으로 보낼 arguments, strFormData="20120607"
        						callBackFnc); 	// 통신방법 정의 [생략가능]
        }

        /*
         *	엑셀 버튼
         */
        this.fnExcel = function() {
        	this.gfnExcelExport(this.dxGrid);
        }

        /*
         *	출력 버튼
         */
        this.fnPrint = function() {
        }

        /************************************************************************
         * 서브 버튼 이벤트
         ************************************************************************/
        this.fnSelectSub = function() {

        	this.gfnGridBeforeSelect(this.dxGridSub);

        	this.dsSelectSub.clearData();
        	this.dsSelectSub.addRow();

        	this.dsSelectSub.setColumn(0, "CD_ACNTUNIT"   , this.dsSearch.getColumn(0, "CD_ACNTUNIT").substr(0, 6));
        	this.dsSelectSub.setColumn(0, "TY_GUBUN"      , this.dsSearch.getColumn(0, "CD_ACNTUNIT").substr(6, 1));
        	this.dsSelectSub.setColumn(0, "NO_CHASU"      , this.dsSearch.getColumn(0, "CD_ACNTUNIT").substr(7, 2));
        	this.dsSelectSub.setColumn(0, "NO_DONG"       , this.dsList.getColumn(this.dsList.rowposition, "NO_DONG"));
        	this.dsSelectSub.setColumn(0, "NO_FLOOR"      , this.dsList.getColumn(this.dsList.rowposition, "NO_FLOOR"));
        	this.dsSelectSub.setColumn(0, "NO_HO"         , this.dsList.getColumn(this.dsList.rowposition, "NO_HO"));
        	this.dsSelectSub.setColumn(0, "NO_UNIONMEMBER", this.dsList.getColumn(this.dsList.rowposition, "NO_UNIONMEMBER"));

        	var strSvcId    = "selectSub";
        	var strSvcType  = "grid";
        	var inProc		= "_dsProc";
        	var inData      = "selectSub=dsSelectSub selectDetail=dsSelectSub";
        	var outData     = "dsListSub=selectSub0 dsListDetail=selectDetail0";
        	var strArg      = "";
        	var callBackFnc = "fnCallback";

        	this.gfnTransaction(strSvcId, 		// transaction을 구분하기 위한 svc id값
        						strSvcType, 	// transaction을 요청할 구분
        						inProc,			// Procedure 정보 Dataset 이름
        						inData, 		// 입력값으로 보낼 dataset id , a=b형태로 실제이름과 입력이름을 매칭
        						outData, 		// 처리결과값으로 받을 dataset id, a=b형태로 실제이름과 입력이름을 매칭
        						strArg, 		// 입력값으로 보낼 arguments, strFormData="20120607"
        						callBackFnc); 	// 통신방법 정의 [생략가능]
        }

        this.fnSelectDetail = function() {

        	this.dsSelectThird.clearData();
        	this.dsSelectThird.addRow();

        	this.dsSelectThird.setColumn(0, "CD_ACNTUNIT"   , this.dsSearch.getColumn(0, "CD_ACNTUNIT").substr(0, 6));
        	this.dsSelectThird.setColumn(0, "TY_GUBUN"      , this.dsSearch.getColumn(0, "CD_ACNTUNIT").substr(6, 1));
        	this.dsSelectThird.setColumn(0, "NO_CHASU"      , this.dsSearch.getColumn(0, "CD_ACNTUNIT").substr(7, 2));
        	this.dsSelectThird.setColumn(0, "NO_DONG"       , this.dsList.getColumn(this.dsList.rowposition, "NO_DONG"));
        	this.dsSelectThird.setColumn(0, "NO_FLOOR"      , this.dsList.getColumn(this.dsList.rowposition, "NO_FLOOR"));
        	this.dsSelectThird.setColumn(0, "NO_HO"         , this.dsList.getColumn(this.dsList.rowposition, "NO_HO"));
        	this.dsSelectThird.setColumn(0, "NO_UNIONMEMBER", this.dsList.getColumn(this.dsList.rowposition, "NO_UNIONMEMBER"));
        	this.dsSelectThird.setColumn(0, "NO_CONTRACT"   , this.dsListSub.getColumn(this.dsListSub.rowposition, "NO_CONTRACT"));

        	var strSvcId    = "selectThird";
        	var strSvcType  = "grid";
        	var inProc		= "_dsProc";
        	var inData      = "selectReceived=dsSelectThird selectAppropriate=dsSelectThird selectCancelhistory=dsSelectThird selectRtdelay=dsSelectThird";
        	var outData     = "dsListReceived=selectReceived0 dsListAppropriate=selectAppropriate0 dsListCancelhistory=selectCancelhistory0 dsListRtdelay=selectRtdelay0";
        	var strArg      = "";
        	var callBackFnc = "fnCallback";

        	this.gfnTransaction(strSvcId, 		// transaction을 구분하기 위한 svc id값
        						strSvcType, 	// transaction을 요청할 구분
        						inProc,			// Procedure 정보 Dataset 이름
        						inData, 		// 입력값으로 보낼 dataset id , a=b형태로 실제이름과 입력이름을 매칭
        						outData, 		// 처리결과값으로 받을 dataset id, a=b형태로 실제이름과 입력이름을 매칭
        						strArg, 		// 입력값으로 보낼 arguments, strFormData="20120607"
        						callBackFnc); 	// 통신방법 정의 [생략가능]
        }

        this.fnSelectPayback = function() {

        	this.dsSelectPayback.clearData();
        	this.dsSelectPayback.addRow();

        	this.dsSelectPayback.setColumn(0, "CD_ACNTUNIT"   , this.dsSearch.getColumn(0, "CD_ACNTUNIT").substr(0, 6));
        	this.dsSelectPayback.setColumn(0, "TY_GUBUN"      , this.dsSearch.getColumn(0, "CD_ACNTUNIT").substr(6, 1));
        	this.dsSelectPayback.setColumn(0, "NO_CHASU"      , this.dsSearch.getColumn(0, "CD_ACNTUNIT").substr(7, 2));
        	this.dsSelectPayback.setColumn(0, "NO_DONG"       , this.dsList.getColumn(this.dsList.rowposition, "NO_DONG"));
        	this.dsSelectPayback.setColumn(0, "NO_FLOOR"      , this.dsList.getColumn(this.dsList.rowposition, "NO_FLOOR"));
        	this.dsSelectPayback.setColumn(0, "NO_HO"         , this.dsList.getColumn(this.dsList.rowposition, "NO_HO"));
        	this.dsSelectPayback.setColumn(0, "NO_UNIONMEMBER", this.dsList.getColumn(this.dsList.rowposition, "NO_UNIONMEMBER"));
        	this.dsSelectPayback.setColumn(0, "NO_APPRO"      , this.dsListAppropriate.getColumn(this.dsListAppropriate.rowposition, "NO_APPRO"));
        	this.dsSelectPayback.setColumn(0, "NO_CONTRACT"   , this.dsListSub.getColumn(this.dsListSub.rowposition, "NO_CONTRACT"));

        	var strSvcId    = "selectPayback";
        	var strSvcType  = "grid";
        	var inProc		= "_dsProc";
        	var inData      = "selectPayback=dsSelectPayback";
        	var outData     = "dsListPayback=selectPayback0";
        	var strArg      = "";
        	var callBackFnc = "fnCallback";

        	this.gfnTransaction(strSvcId, 		// transaction을 구분하기 위한 svc id값
        						strSvcType, 	// transaction을 요청할 구분
        						inProc,			// Procedure 정보 Dataset 이름
        						inData, 		// 입력값으로 보낼 dataset id , a=b형태로 실제이름과 입력이름을 매칭
        						outData, 		// 처리결과값으로 받을 dataset id, a=b형태로 실제이름과 입력이름을 매칭
        						strArg, 		// 입력값으로 보낼 arguments, strFormData="20120607"
        						callBackFnc); 	// 통신방법 정의 [생략가능]
        }

        /************************************************************************
         * Validate
         ************************************************************************/
        /*
         *	조회 Validate
         */
        this.fnSelectValidate = function() {

        	if (this.gfnIsNull(this.dsSearch.getColumn(0, "CD_ACNTUNIT"))) {
        		this.gfnAlert("사업지코드를 입력하지 않았습니다.");
        		return false;
        	}

        	return true;
        };

        /************************************************************************
         * 콜백 이벤트
         ************************************************************************/
        /*
         *	콜백 처리
         */
        this.fnCallback = function(svcID, errorCode, errorMsg) {

        	if (svcID == "select") {
        		this.gfnGridAfterSelect(this.dxGrid);
        	}
        	if (svcID == "selectSub") {
        		this.gfnGridAfterSelect(this.dxGridSub);
        	}
        	if (svcID == "selectThird") {
        		this.gfnGridAfterSelect(this.dxGridAppropriate);
        	}
        	if (svcID == "save") {
        		if (errorCode == 0) {
        			this.FormBtns.Select.click();
        		} else {
        			this.gfnAlert(errorMsg);
        		}
        	}
        	if (svcID == "receiptCancel") {
        		if (errorCode == 0) {
        			this.fnSelectDetail();
        		} else {
        			this.gfnAlert(errorMsg);
        		}
        	}
        }

        /************************************************************************
         * 코드파인드 이벤트
         ************************************************************************/

        //코드파인드의 파라미터 값을 넘겨줄때 사용하는 함수
        this.fnBeforeUserDataSetParam = function(id, dsUserParam, nrow) {

        	// 사업지코드
        	if (id == "ccfCD_ACNTUNIT") {
        		dsUserParam.setColumn(nrow, "CD_DEPT"  , this.AuthClient.CD_DEPT);
        		dsUserParam.setColumn(nrow, "ID_USER"  , this.AuthClient.ID_USER);
        		dsUserParam.setColumn(nrow, "ID_GROUP" , this.FormInfo.ID_GROUP);
        		dsUserParam.setColumn(nrow, "GR_SEARCH", this.FormInfo.GR_SEARCH);
        	}

        	return true;
        }



        this.fnAfterCDTextChanged = function(id, codeFindData) {
           var arr = codeFindData;

           // 사업지코드
           if (id == "ccfCD_ACNTUNIT") {
              this.dsSearch.setColumn(0, "NO_DONG" , "");
              this.dsSearch.setColumn(0, "NO_FLOOR", "");
              this.dsSearch.setColumn(0, "NO_HO"   , "");
           }
        }

        /************************************************************************
         * 그리드 이벤트
         ************************************************************************/
        this.fnGrid_RowCellChanged = function(obj,e)
        {
            if ((obj.oldrow > -1 && obj.oldrow == e.row)
        		|| (obj.oldrow == -1 && e.oldrow != e.row)) {

        		if(obj.name == "objGrid")            this.FormBtns.SubSelect.click();
        		if(obj.name == "objGridSub")         this.fnSelectDetail();
        		if(obj.name == "objGridAppropriate") this.fnSelectPayback();

        		obj.oldrow = -1;
        	}
        };

        /************************************************************************
         * 기타 이벤트
         ************************************************************************/
        this.dsSearch_onvaluechanged = function(obj,e)
        {
        	if(e.oldvalue != e.newvalue) {
        		this.gfnSetFormStatus(this);	// 폼상태 초기화
        		this.gfnGridClear(this.dxGrid);
        	}
        };

        this.divData_divDataRight_tabData_onchanged = function(obj,e)
        {
        	for(var i = 1; i < 4; ++i) this["btn_0" + i].set_visible(e.postindex == 0 ? true : false);

        	this.FormBtns.Save.set_enable(false);
        	this.FormBtns.Add.set_enable(false);
        	this.FormBtns.Del.set_enable(false);

        	switch(e.postindex) {
        		case 0:	// 약정수납
        			break;

        		case 1:	// 예수금
        				if(this.dsListAppropriate.rowcount > 0) this.FormBtns.Add.set_enable(true);
        			break;

        		case 2:	// 해약
        			break;

        		case 3:	// 변동금리
        				this.FormBtns.Add.set_enable(true);
        			break;
        	}

        };

        this.fnButtonClick = function(obj,e) {

        	switch(obj.name) {
        		case "btnExt_Estimate":										// 예상수납안내.

        				var napip  = this.dsListReceived.getColumn(this.dsList.rowcount - 1, "TY_NAPIP");	// 납입구분
        				var bunnap = this.dsListReceived.getColumn(this.dsList.rowcount - 1, "NO_BUNNAP");	// 분납번호

        				if(napip == "잔금" && bunnap == "99") {
        					this.gfnAlert("수납이 이미 완료되었습니다.");
        					return false;
        				}

        				if(!this.gfnGridIsRow(this.dxGrid)) {return false;}

        				var param = {};

        				param.CD_ACNTUNIT    = this.dsSearch.getColumn(0, "CD_ACNTUNIT");
        				param.NO_DONG        = this.dsList.getColumn(this.dsList.rowposition, "NO_DONG");
        				param.NO_FLOOR       = this.dsList.getColumn(this.dsList.rowposition, "NO_FLOOR");
        				param.NO_HO          = this.dsList.getColumn(this.dsList.rowposition, "NO_HO");
        				param.NO_UNIONMEMBER = this.dsList.getColumn(this.dsList.rowposition, "NO_UNIONMEMBER");

        				this.gfnFormOpen(this.FormInfo.CD_MODULE, "DRF_DLGESTIMATERECEIPT", "", param);

        			break;

        		case "btnExt_Cancel":										// 해약관리.

        				var AM_BUNYANGPLAN = 0, AM_BUNYANGGET = 0;

        				if(this.dsListReceived.rowcount > 1) {
        					AM_BUNYANGPLAN = parseInt(this.dsListSub.getColumn(0, "AM_AMOUNT"));
        					AM_BUNYANGGET  = parseInt(this.dsListReceived.getColumn(this.dsListReceived.rowcount - 2, "AM_BUNYANG"));
        				}

        				if(AM_BUNYANGPLAN != 0 && (AM_BUNYANGPLAN - AM_BUNYANGGET) <= 0) {
        					this.gfnConfirm("수납이 이미 완료되었습니다.\n계약을 해약 하시겠습니까?", function(strId, val) {
        						if(!val) {
        							return;
        						}
        					});
        				}

        				var CD_TYPE   = this.UserInfo.DR_SPACE03 || "";
        				var YN_DONGHO = this.UserInfo.DR_SPACE04 || "";

        				var param = {};

        				param.CD_ACNTUNIT    = this.dsSearch.getColumn(0, "CD_ACNTUNIT");
        				param.NO_DONG        = this.dsList.getColumn(this.dsList.rowposition, "NO_DONG");
        				param.NO_FLOOR       = this.dsList.getColumn(this.dsList.rowposition, "NO_FLOOR");
        				param.NO_HO          = this.dsList.getColumn(this.dsList.rowposition, "NO_HO");
        				param.NO_UNIONMEMBER = this.dsList.getColumn(this.dsList.rowposition, "NO_UNIONMEMBER");
        				param.NO_SIZE        = this.dsListDetail.getColumn(0, "NO_SIZE");
        				param.TY_TYPE        = this.dsListDetail.getColumn(0, "TY_TYPE");
        				param.CD_ITEM        = this.dsListSub.getColumn(this.dsListSub.rowposition, "CD_ITEM");
        				param.DS_CONTRACTOR  = this.dsList.getColumn(this.dsList.rowposition, "DS_CONTRACTOR");
        				param.NO_CONTRACT    = this.dsListSub.getColumn(this.dsListSub.rowposition, "NO_CONTRACT");
        				param.TY_SERVICE     = this.dsListSub.getColumn(this.dsListSub.rowposition, "TY_SERVICE") == "Y" ? true : false;
        				param.DS_CONTRACT    = this.dsListSub.getColumn(this.dsListSub.rowposition, "DS_ITEM");
        				param.AM_BUNYANG     = AM_BUNYANGPLAN;
        				param.AM_RECEIPT     = this.dsListReceived.getSum("AM_RECEIPT");
        				param.AM_DISCOUNT    = this.dsListReceived.getSum("AM_DISCOUNT");
        				param.AM_DELAY       = this.dsListReceived.getSum("AM_DELAY");
        				param.AM_REALRECEIPT = this.dsListReceived.getSum("AM_REALRECEIPT");
        				param.AM_FORFEIT     = AM_BUNYANGPLAN * 0.1;

        				if((CD_TYPE != "1" || CD_TYPE != "2") && YN_DONGHO.toUpperCase() == "N") {
        					param.Title = "별도계약해약      (" + param.NO_UNIONMEMBER + ")";
        				} else {
        					param.Title = "별도계약해약      (" + param.NO_DONG + "동 " + param.NO_FLOOR + "층 " + param.NO_HO + "호)";
        				}

        				this.gfnFormOpen(this.FormInfo.CD_MODULE, "DRF_DLGCANCELACC", "", param);


        			break;

        		case "btnExt_Agree":										// 약정관리.

        				if (!this.serviceItemCheck("약정")) { return; }

        				var param = {};

        				param.CD_ACNTUNIT    = this.dsSearch.getColumn(0, "CD_ACNTUNIT");
        				param.DS_ACNTUNIT    = this.dsSearch.getColumn(0, "DS_ACNTUNIT");
        				param.NO_DONG        = this.dsList.getColumn(this.dsList.rowposition, "NO_DONG");
        				param.NO_FLOOR       = this.dsList.getColumn(this.dsList.rowposition, "NO_FLOOR");
        				param.NO_HO          = this.dsList.getColumn(this.dsList.rowposition, "NO_HO");
        				param.NO_UNIONMEMBER = this.dsList.getColumn(this.dsList.rowposition, "NO_UNIONMEMBER");
        				param.NO_CONTRACT    = this.dsListSub.getColumn(this.dsListSub.rowposition, "NO_CONTRACT");

        				this.gfnFormOpen(this.FormInfo.CD_MODULE, "DRF_CONTRACTAGREE", "", param);

        			break;

        		case "btnExt_Counsel":										// 상담일지.

        				var param = {};

        				param.CD_ACNTUNIT    = this.dsSearch.getColumn(0, "CD_ACNTUNIT");
        				param.DS_ACNTUNIT    = this.dsSearch.getColumn(0, "DS_ACNTUNIT");
        				param.NO_DONG        = this.dsListReceived.getColumn(this.dsListReceived.rowposition, "NO_DONG");
        				param.NO_FLOOR       = this.dsListReceived.getColumn(this.dsListReceived.rowposition, "NO_FLOOR");
        				param.NO_HO          = this.dsListReceived.getColumn(this.dsListReceived.rowposition, "NO_HO");

        				this.gfnFormOpen(this.FormInfo.CD_MODULE, "DRB_COUNSEL", "", param);

        			break;

        		case "btn_01":												// 수납.

        				if (!this.serviceItemCheck("수납사항")) { return; }

        				var param = {};

        				param.CD_ACNTUNIT    = this.dsSearch.getColumn(0, "CD_ACNTUNIT");
        				param.NO_DONG        = this.dsList.getColumn(this.dsList.rowposition, "NO_DONG");
        				param.NO_FLOOR       = this.dsList.getColumn(this.dsList.rowposition, "NO_FLOOR");
        				param.NO_HO          = this.dsList.getColumn(this.dsList.rowposition, "NO_HO");
        				param.NO_UNIONMEMBER = this.dsList.getColumn(this.dsList.rowposition, "NO_UNIONMEMBER");
        				param.NO_CONTRACT    = this.dsListSub.getColumn(this.dsListSub.rowposition, "NO_CONTRACT");
        				param.YN_COLLECT     = false;
        				param.Title          = "계약번호 [" + param.NO_CONTRACT + "] 을(를) 수납합니다";

        				this.gfnFormOpen(this.FormInfo.CD_MODULE, "DRF_DLGRECEIPT", "", param);

        			break;

        		case "btn_02":												// 수납취소.

        				if (!this.serviceItemCheck("수납사항")) { return; }

        				var NoContract = this.dsListSub.getColumn(this.dsListSub.rowposition, "NO_CONTRACT");
        				this.gfnConfirm("계약번호 [" + NoContract + "]의 최종 수납내역이 취소됩니다.", function(strId, val) {
        					if(val) {

        						var noNapcha = "", noBunnap = "", dtReceipt = "", tyNapip = "";

        						for(var i = 0; i < this.dsListReceived.rowcount; ++i) {

        							var dtReceipt = this.dsListReceived.getColumn(i, "DT_RECEIPT");

        							if(dtReceipt != "") {
        								noNapcha  = this.dsListReceived.getColumn(i, "NO_NAPCHA");
        								noBunnap  = this.dsListReceived.getColumn(i, "NO_BUNNAP");
        								dtReceipt = this.dsListReceived.getColumn(i, "DT_RECEIPT");

        								if(this.dsListReceived.getColumn(i, "TY_NAPIP") == "계약금")    tyNapip = "C";
        								if(this.dsListReceived.getColumn(i, "TY_NAPIP") == "중도금")    tyNapip = "J";
        								if(this.dsListReceived.getColumn(i, "TY_NAPIP") == "잔금")      tyNapip = "R";
        								if(this.dsListReceived.getColumn(i, "TY_NAPIP") == "잔금유예") tyNapip = "U";
        							}
        						}

        						if(noNapcha == "") {
        							this.gfnAlert("수납내역이 없습니다.");
        							return;
        						}

        						this.dsReceiptCancel.clearData();
        						this.dsReceiptCancel.addRow();

        						this.dsReceiptCancel.setColumn(0, "CD_ACNTUNIT"   , this.dsSearch.getColumn(0, "CD_ACNTUNIT").substr(0, 6));
        						this.dsReceiptCancel.setColumn(0, "TY_GUBUN"      , this.dsSearch.getColumn(0, "CD_ACNTUNIT").substr(6, 1));
        						this.dsReceiptCancel.setColumn(0, "NO_CHASU"      , this.dsSearch.getColumn(0, "CD_ACNTUNIT").substr(7, 2));
        						this.dsReceiptCancel.setColumn(0, "NO_DONG"       , this.dsList.getColumn(this.dsList.rowposition, "NO_DONG"));
        						this.dsReceiptCancel.setColumn(0, "NO_FLOOR"      , this.dsList.getColumn(this.dsList.rowposition, "NO_FLOOR"));
        						this.dsReceiptCancel.setColumn(0, "NO_HO"         , this.dsList.getColumn(this.dsList.rowposition, "NO_HO"));
        						this.dsReceiptCancel.setColumn(0, "NO_UNIONMEMBER", this.dsList.getColumn(this.dsList.rowposition, "NO_UNIONMEMBER"));
        						this.dsReceiptCancel.setColumn(0, "TY_NAPIP"      , tyNapip);
        						this.dsReceiptCancel.setColumn(0, "NO_NAPIP"      , noNapcha);
        						this.dsReceiptCancel.setColumn(0, "NO_BUNNAP"     , noBunnap || "");
        						this.dsReceiptCancel.setColumn(0, "DT_RECEIPT"    , dtReceipt || "");
        						this.dsReceiptCancel.setColumn(0, "NO_CONTRACT"   , this.dsListSub.getColumn(this.dsListSub.rowposition, "NO_CONTRACT"));
        						this.dsReceiptCancel.setColumn(0, "ID_INSERT"     , this.AuthClient.ID_USER);

        						var strSvcId    = "receiptCancel";
        						var strSvcType  = "grid";
        						var inProc		= "_dsProc";
        						var inData      = "receiptCancel=dsReceiptCancel";
        						var outData     = "";
        						var strArg      = "";
        						var callBackFnc = "fnCallback";

        						this.gfnTransaction(strSvcId, 		// transaction을 구분하기 위한 svc id값
        											strSvcType, 	// transaction을 요청할 구분
        											inProc,			// Procedure 정보 Dataset 이름
        											inData, 		// 입력값으로 보낼 dataset id , a=b형태로 실제이름과 입력이름을 매칭
        											outData, 		// 처리결과값으로 받을 dataset id, a=b형태로 실제이름과 입력이름을 매칭
        											strArg, 		// 입력값으로 보낼 arguments, strFormData="20120607"
        											callBackFnc); 	// 통신방법 정의 [생략가능]
        					}
        				});

        			break;

        		case "btn_03":												// 특별수납.

        				if (!this.serviceItemCheck("수납사항")) { return; }

        				var tyNapip = "";

        				for(var i = 0; i < this.dsListReceived.rowcount; ++i) {

        					var dtReceipt = this.dsListReceived.getColumn(i, "DT_RECEIPT");

        					if(dtReceipt != "") {
        						if(this.dsListReceived.getColumn(i, "TY_NAPIP") == "계약금")    tyNapip = "C";
        						if(this.dsListReceived.getColumn(i, "TY_NAPIP") == "중도금")    tyNapip = "J";
        						if(this.dsListReceived.getColumn(i, "TY_NAPIP") == "잔금")      tyNapip = "R";
        						if(this.dsListReceived.getColumn(i, "TY_NAPIP") == "잔금유예") tyNapip = "U";
        					}
        				}

        				if(tyNapip == "") {
        					this.gfnAlert("수납내역이 없습니다.");
        					return;
        				}

        				var lrow = this.dsList.rowposition, rrow = this.dsListReceived.rowposition;
        				var param = {};

        				param.CD_ACNTUNIT    = this.dsSearch.getColumn(0, "CD_ACNTUNIT");
        				param.NO_DONG        = this.dsList.getColumn(lrow, "NO_DONG");
        				param.NO_FLOOR       = this.dsList.getColumn(lrow, "NO_FLOOR");
        				param.NO_HO          = this.dsList.getColumn(lrow, "NO_HO");
        				param.NO_UNIONMEMBER = this.dsList.getColumn(lrow, "NO_UNIONMEMBER");
        				param.NO_CONTRACT    = this.dsListSub.getColumn(this.dsListSub.rowposition, "NO_CONTRACT");
        				param.DT_RECEIVED    = this.dsListReceived.getColumn(rrow, "DT_RECEIPT");
        				param.AM_RECEIVED    = this.dsListReceived.getColumn(rrow, "AM_RECEIPT");
        				param.AM_BUNYANG     = this.dsListReceived.getColumn(rrow, "AM_BUNYANG");
        				param.DD_COUNT       = this.dsListReceived.getColumn(rrow, "DD_DAY");
        				param.TY_NAPIP       = tyNapip;
        				param.NO_NAPCHA      = this.dsListReceived.getColumn(rrow, "NO_NAPCHA");
        				param.NO_BUNNAP      = this.dsListReceived.getColumn(rrow, "NO_BUNNAP");
        				param.CD_GUJA        = this.dsListReceived.getColumn(rrow, "CD_GUJA");
        				param.NO_GUJA        = this.dsListReceived.getColumn(rrow, "NO_GUJA");
        				param.TY_MONEY       = this.dsListReceived.getColumn(rrow, "TY_MONEY");

        				if(parseInt(this.dsListReceived.getColumn(rrow, "TY_MONEY")) > 0) {
        					param.TY_DELAY    = true;
        					param.TY_DISCOUNT = false;
        					param.AM_MONEY    = this.dsListReceived.getColumn(rrow, "AM_DELAY");		// 연체료
        				} else {
        					param.TY_DELAY    = false;
        					param.TY_DISCOUNT = true;
        					param.AM_MONEY    = this.dsListReceived.getColumn(rrow, "AM_DISCOUNT");		// 할인료
        				}

        				this.gfnFormOpen(this.FormInfo.CD_MODULE, "DRF_DLGSPECIALRECEIPT", "", param);

        			break;
        	}
        }

        this.serviceItemCheck = function($val) {
        	if(this.dsListSub.getColumn(this.dsListSub.rowposition, "YN_SERVICE") == "Y") {
        		this.gfnAlert("서비스품목은 " + $val + "이 존재하지 않습니다.");
        		return false;
        	}
        	return true;
        }

        this.BtnSearch_onclick = function(obj,e)
        {
        	if (this.gfnIsNull(this.dsSearch.getColumn(0, "CD_ACNTUNIT"))) {
        		this.gfnAlert("사업지를 입력해주세요!", function() {
        			this.ccfCD_ACNTUNIT.form.CDTextBox.setFocus();
        		});
        		return;
        	}

        	var param = {};
        	param.CD_ACNTUNIT = this.dsSearch.getColumn(0, "CD_ACNTUNIT");
        	param.FLAG = "1";

        	this.gfnFormOpen("DRI", "DRI_DONGHOCONTRACT", "fnPopupCallback", param);
        };

        this.fnPopupCallback = function(svcID, val) {
        	if (!val) return;

        	var json = JSON.parse(val);
        	if (json.DONG.length > 0) {
        		this.dsSearch.setColumn(0, "NO_DONG" , json.DONG);
        		this.dsSearch.setColumn(0, "NO_FLOOR", json.FLOOR);
        		this.dsSearch.setColumn(0, "NO_HO"	 , json.HO);
        	}
        }
        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.form_onload,this);
            this.divData.form.divSplitter.addEventHandler("ondrag",this.divData_divSplitter_ondrag,this);
            this.divData.form.divDataRight.form.tabData.addEventHandler("onchanged",this.divData_divDataRight_tabData_onchanged,this);
            this.dsSearch.addEventHandler("onvaluechanged",this.dsSearch_onvaluechanged,this);
        };
        this.loadIncludeScript("DRF_RECEIPTMANAGE.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
