(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("DLB_COUNSEL");
            this.set_titletext("상담일지");
            if (Form == this.constructor)
            {
                this._setFormPosition(1280,720);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("dsList", this);
            obj._setContents("");
            this.addChild(obj.name, obj);


            obj = new Dataset("_dsProc", this);
            obj._setContents("<ColumnInfo><Column id=\"TARGET\" type=\"STRING\" size=\"256\"/><Column id=\"SP\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"TARGET\">select</Col><Col id=\"SP\">DRBPR_COUNSEL_SELECT</Col></Row><Row><Col id=\"TARGET\">insert</Col><Col id=\"SP\">DRBPR_COUNSEL_INSERT</Col></Row><Row><Col id=\"TARGET\">update</Col><Col id=\"SP\">DRBPR_COUNSEL_UPDATE</Col></Row><Row><Col id=\"TARGET\">delete</Col><Col id=\"SP\">DRBPR_COUNSEL_DELETE</Col></Row><Row><Col id=\"TARGET\">d_select</Col><Col id=\"SP\">DRBPR_CONTRACTDETAIL_SELECT</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsSearch", this);
            obj._setContents("<ColumnInfo><Column id=\"CD_ACNTUNIT\" type=\"STRING\" size=\"256\"/><Column id=\"DS_ACNTUNIT\" type=\"STRING\" size=\"256\"/><Column id=\"NO_DONG\" type=\"STRING\" size=\"256\"/><Column id=\"NO_FLOOR\" type=\"STRING\" size=\"256\"/><Column id=\"NO_HO\" type=\"STRING\" size=\"256\"/><Column id=\"NO_UNIONMEMBER\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"CD_ACNTUNIT\"/></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsDetail", this);
            obj._setContents("<ColumnInfo><Column id=\"TY_STATE\" type=\"STRING\" size=\"256\"/><Column id=\"TY_BUNYANG\" type=\"STRING\" size=\"256\"/><Column id=\"NO_SIZE\" type=\"STRING\" size=\"256\"/><Column id=\"TY_TYPE\" type=\"STRING\" size=\"256\"/><Column id=\"TY_DISTRICT\" type=\"STRING\" size=\"256\"/><Column id=\"RT_OPTION\" type=\"STRING\" size=\"256\"/><Column id=\"DS_OPTION\" type=\"STRING\" size=\"256\"/><Column id=\"TY_CONTRACTOR\" type=\"STRING\" size=\"256\"/><Column id=\"DS_CONTRACTOR\" type=\"STRING\" size=\"256\"/><Column id=\"NO_JUMIN\" type=\"STRING\" size=\"256\"/><Column id=\"NO_POST\" type=\"STRING\" size=\"256\"/><Column id=\"DS_ADDR2\" type=\"STRING\" size=\"256\"/><Column id=\"DS_ADDR3\" type=\"STRING\" size=\"256\"/><Column id=\"NO_TEL\" type=\"STRING\" size=\"256\"/><Column id=\"NO_OFFICETEL\" type=\"STRING\" size=\"256\"/><Column id=\"NO_MOBILE\" type=\"STRING\" size=\"256\"/><Column id=\"DT_CONTRACT\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsTY_COUNSEL", this);
            obj._setContents("<ColumnInfo><Column id=\"CODE\" type=\"STRING\" size=\"256\"/><Column id=\"VALUE\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"CODE\">1</Col><Col id=\"VALUE\">항의</Col></Row><Row><Col id=\"CODE\">2</Col><Col id=\"VALUE\">특이사항</Col></Row><Row><Col id=\"CODE\">3</Col><Col id=\"VALUE\">해약</Col></Row><Row><Col id=\"CODE\">4</Col><Col id=\"VALUE\">전화문의</Col></Row><Row><Col id=\"CODE\">5</Col><Col id=\"VALUE\">기타</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsTY_CONTRACTOR", this);
            obj._setContents("<ColumnInfo><Column id=\"CODE\" type=\"STRING\" size=\"256\"/><Column id=\"VALUE\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"CODE\">P</Col><Col id=\"VALUE\">개인</Col></Row><Row><Col id=\"CODE\">C</Col><Col id=\"VALUE\">법인</Col></Row></Rows>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Div("divSearch","0.0","10.0",null,"46.0","0",null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_cssclass("div_SEARCH_Bg");
            obj.set_text("");
            obj.set_formscrolltype("none");
            this.addChild(obj.name, obj);

            obj = new Static("staCD_ACNTUNIT","0.0","10.0","105.0","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("4");
            obj.set_text("사업지코드");
            obj.set_textAlign("center");
            obj.set_cssclass("sta_WF_SchLabel");
            this.divSearch.addChild(obj.name, obj);

            obj = new Div("ccfCD_ACNTUNIT","staCD_ACNTUNIT:0.0","10.0","339","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.getSetter("CodeFindName").set("DRX_CFACNTUNIT");
            obj.getSetter("CDTextWidth").set("110");
            obj.set_taborder("0");
            obj.getSetter("FitToContents").set("true");
            obj.set_url("cmm::cmmCodeFind.xfdl");
            obj.getSetter("readonly").set("true");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("sta00","ccfCD_ACNTUNIT:0.0","10.0","105.0","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("5");
            obj.set_text("동층호");
            obj.set_cssclass("sta_WF_SchLabelE");
            this.divSearch.addChild(obj.name, obj);

            obj = new Edit("ctxtNO_DONG","sta00:0.0","10.0","45","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("1");
            obj.set_maxlength("4");
            obj.set_readonly("true");
            this.divSearch.addChild(obj.name, obj);

            obj = new Edit("ctxtNO_FLOOR","ctxtNO_DONG:0.0","10.0","35","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("2");
            obj.set_maxlength("2");
            obj.set_readonly("true");
            this.divSearch.addChild(obj.name, obj);

            obj = new Edit("ctxtNO_HO","ctxtNO_FLOOR:0.0","10.0","45","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("3");
            obj.set_maxlength("3");
            obj.set_readonly("true");
            this.divSearch.addChild(obj.name, obj);

            obj = new Div("divData","0","divSearch:10",null,null,"0","0",null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_cssclass("div_DATA_Bg");
            obj.set_text("");
            this.addChild(obj.name, obj);

            obj = new Div("divSplitter","34.38%","182","6",null,null,"0",null,null,null,null,this.divData.form);
            obj.set_taborder("1");
            obj.set_background("skyblue");
            obj.set_cursor("ew-resize");
            this.divData.addChild(obj.name, obj);

            obj = new Div("divDataLeft","0","155",null,null,"divSplitter:5","0",null,null,null,null,this.divData.form);
            obj.set_taborder("0");
            this.divData.addChild(obj.name, obj);

            obj = new Static("sta01","0","0","100%","22",null,null,null,null,null,null,this.divData.form.divDataLeft.form);
            obj.set_taborder("0");
            obj.set_text("상담내역");
            obj.set_cssclass("sta_TITLE_Bg");
            this.divData.form.divDataLeft.addChild(obj.name, obj);

            obj = new Grid("objGrid","0","sta01:5",null,null,"0","0",null,null,null,null,this.divData.form.divDataLeft.form);
            obj.set_taborder("0");
            obj._setContents("");
            this.divData.form.divDataLeft.addChild(obj.name, obj);

            obj = new Div("divDataRight","divSplitter:4","181",null,null,"0","0",null,null,null,null,this.divData.form);
            obj.set_taborder("2");
            this.divData.addChild(obj.name, obj);

            obj = new Static("staTY_COUNSEL_NEW9","1","2","97","30",null,null,null,null,null,null,this.divData.form.divDataRight.form);
            obj.set_taborder("4");
            obj.set_text("구분");
            obj.set_textAlign("right");
            obj.set_cssclass("sta_WF_tablelabelE");
            this.divData.form.divDataRight.addChild(obj.name, obj);

            obj = new Static("staBg3_00_00_00_00_00_00_00_00_00_00_00","97","2",null,"30","0",null,null,null,null,null,this.divData.form.divDataRight.form);
            obj.set_taborder("5");
            obj.set_cssclass("sta_WF_tablebg");
            this.divData.form.divDataRight.addChild(obj.name, obj);

            obj = new Radio("rdoTY_COUNSEL","102","5","528","22",null,null,null,null,null,null,this.divData.form.divDataRight.form);
            obj.set_taborder("0");
            obj.set_fittocontents("width");
            obj.set_innerdataset("dsTY_COUNSEL");
            obj.set_codecolumn("CODE");
            obj.set_datacolumn("VALUE");
            obj.set_direction("vertical");
            this.divData.form.divDataRight.addChild(obj.name, obj);

            obj = new Static("staDT_WRITE","1","31","97","30",null,null,null,null,null,null,this.divData.form.divDataRight.form);
            obj.set_taborder("6");
            obj.set_text("기록일자");
            obj.set_textAlign("right");
            obj.set_cssclass("sta_WF_tablelabelE");
            this.divData.form.divDataRight.addChild(obj.name, obj);

            obj = new Static("staBg3_00_00_00_00_00_00_00_00_00_00_00_00","97","31",null,"30","0",null,null,null,null,null,this.divData.form.divDataRight.form);
            obj.set_taborder("7");
            obj.set_cssclass("sta_WF_tablebg");
            this.divData.form.divDataRight.addChild(obj.name, obj);

            obj = new Static("staDS_WRITE","1","60","97","30",null,null,null,null,null,null,this.divData.form.divDataRight.form);
            obj.set_taborder("8");
            obj.set_text("기록자");
            obj.set_textAlign("right");
            obj.set_cssclass("sta_WF_tablelabelE");
            this.divData.form.divDataRight.addChild(obj.name, obj);

            obj = new Static("staBg3_00_00_00_00_00_00_00_00_00_00_00_00_00","97","60",null,"30","0",null,null,null,null,null,this.divData.form.divDataRight.form);
            obj.set_taborder("9");
            obj.set_cssclass("sta_WF_tablebg");
            this.divData.form.divDataRight.addChild(obj.name, obj);

            obj = new Static("staBg3_00_00_00_00_00_00_00_00_00_00_00_00_00_00","97","89",null,null,"0","0",null,null,null,null,this.divData.form.divDataRight.form);
            obj.set_taborder("10");
            obj.set_cssclass("sta_WF_tablebg");
            this.divData.form.divDataRight.addChild(obj.name, obj);

            obj = new Static("staDS_COMMENT","1","89","97",null,null,"0",null,null,null,null,this.divData.form.divDataRight.form);
            obj.set_taborder("11");
            obj.set_text("내용");
            obj.set_textAlign("right");
            obj.set_cssclass("sta_WF_tablelabelE");
            this.divData.form.divDataRight.addChild(obj.name, obj);

            obj = new Calendar("calDT_WRITE","102","35","108","22",null,null,null,null,null,null,this.divData.form.divDataRight.form);
            obj.set_taborder("1");
            this.divData.form.divDataRight.addChild(obj.name, obj);

            obj = new Edit("txtDS_WRITE","102","64","108","22",null,null,null,null,null,null,this.divData.form.divDataRight.form);
            obj.set_taborder("2");
            obj.set_value("");
            obj.set_maxlength("10");
            this.divData.form.divDataRight.addChild(obj.name, obj);

            obj = new TextArea("txtDS_COMMENT","102","94",null,null,"0","5",null,null,null,null,this.divData.form.divDataRight.form);
            obj.set_taborder("3");
            obj.set_value("");
            obj.set_visible("true");
            obj.set_enable("true");
            obj.set_maxlength("1000");
            this.divData.form.divDataRight.addChild(obj.name, obj);

            obj = new Static("staNO_SIZE","0","0","127","30",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("3");
            obj.set_text("평형");
            obj.set_cssclass("sta_WF_tablelabel");
            obj.set_textAlign("right");
            this.divData.addChild(obj.name, obj);

            obj = new Static("staBg1","126","0","304","30",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("4");
            obj.set_cssclass("sta_WF_tablebg");
            obj.set_text("");
            this.divData.addChild(obj.name, obj);

            obj = new Static("staTY_STATE","0","29","127","30",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("5");
            obj.set_text("분양상태");
            obj.set_cssclass("sta_WF_tablelabel");
            obj.set_textAlign("right");
            this.divData.addChild(obj.name, obj);

            obj = new Static("staBg2","126","29","304","30",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("6");
            obj.set_cssclass("sta_WF_tablebg");
            this.divData.addChild(obj.name, obj);

            obj = new Static("staTY_DISTRICT","429","0","127","30",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("7");
            obj.set_text("군/OPTION");
            obj.set_cssclass("sta_WF_tablelabel");
            obj.set_textAlign("right");
            this.divData.addChild(obj.name, obj);

            obj = new Static("staBg3","555","0",null,"30","0",null,null,null,null,null,this.divData.form);
            obj.set_taborder("8");
            obj.set_cssclass("sta_WF_tablebg");
            this.divData.addChild(obj.name, obj);

            obj = new Static("staDT_CONTRACT","0","58","127","30",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("9");
            obj.set_text("계약일자");
            obj.set_cssclass("sta_WF_tablelabel");
            obj.set_textAlign("right");
            this.divData.addChild(obj.name, obj);

            obj = new Static("staBg2_00","126","58","304","30",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("10");
            obj.set_cssclass("sta_WF_tablebg");
            this.divData.addChild(obj.name, obj);

            obj = new Static("staNO_TEL","0","87","127","30",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("11");
            obj.set_text("☎ (자택)");
            obj.set_cssclass("sta_WF_tablelabel");
            obj.set_textAlign("right");
            this.divData.addChild(obj.name, obj);

            obj = new Static("staBg2_00_00","126","87","304","30",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("12");
            obj.set_cssclass("sta_WF_tablebg");
            this.divData.addChild(obj.name, obj);

            obj = new Static("staNO_OFFICETEL","429","87","127","30",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("13");
            obj.set_text("☎ (직장)");
            obj.set_cssclass("sta_WF_tablelabel");
            obj.set_textAlign("right");
            this.divData.addChild(obj.name, obj);

            obj = new Static("staBg2_00_00_00","555","87","304","30",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("14");
            obj.set_cssclass("sta_WF_tablebg");
            this.divData.addChild(obj.name, obj);

            obj = new Static("staNO_POST","0","116","127","30",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("15");
            obj.set_text("현주소");
            obj.set_cssclass("sta_WF_tablelabel");
            obj.set_textAlign("right");
            this.divData.addChild(obj.name, obj);

            obj = new Static("staBg2_00_00_01","126","116",null,"30","0",null,null,null,null,null,this.divData.form);
            obj.set_taborder("16");
            obj.set_cssclass("sta_WF_tablebg");
            this.divData.addChild(obj.name, obj);

            obj = new Static("staTY_BUNYANG","429","29","127","30",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("17");
            obj.set_text("분양구분");
            obj.set_cssclass("sta_WF_tablelabel");
            obj.set_textAlign("right");
            this.divData.addChild(obj.name, obj);

            obj = new Static("staBg3_00","555","29","304","30",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("18");
            obj.set_cssclass("sta_WF_tablebg");
            this.divData.addChild(obj.name, obj);

            obj = new Static("staDS_CONTRACTOR","429","58","127","30",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("19");
            obj.set_text("계약자명");
            obj.set_cssclass("sta_WF_tablelabel");
            obj.set_textAlign("right");
            this.divData.addChild(obj.name, obj);

            obj = new Static("staBg3_00_00","555","58","304","30",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("20");
            obj.set_cssclass("sta_WF_tablebg");
            this.divData.addChild(obj.name, obj);

            obj = new Static("staTY_CONTRACTOR","858","29","127","30",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("21");
            obj.set_text("계약구분");
            obj.set_cssclass("sta_WF_tablelabel");
            obj.set_textAlign("right");
            this.divData.addChild(obj.name, obj);

            obj = new Static("staBg3_00_01","984","29",null,"30","0",null,null,null,null,null,this.divData.form);
            obj.set_taborder("22");
            obj.set_cssclass("sta_WF_tablebg");
            this.divData.addChild(obj.name, obj);

            obj = new Static("staDT_RETURN00_00_00","858","58","127","30",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("23");
            obj.set_text("주민등록번호");
            obj.set_cssclass("sta_WF_tablelabel");
            obj.set_textAlign("right");
            this.divData.addChild(obj.name, obj);

            obj = new Static("staBg3_00_00_00","984","58",null,"30","0",null,null,null,null,null,this.divData.form);
            obj.set_taborder("24");
            obj.set_cssclass("sta_WF_tablebg");
            this.divData.addChild(obj.name, obj);

            obj = new Static("staNO_MOBILE","858","87","127","30",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("25");
            obj.set_text("휴대폰");
            obj.set_cssclass("sta_WF_tablelabel");
            obj.set_textAlign("right");
            this.divData.addChild(obj.name, obj);

            obj = new Static("staBg2_00_00_00_00","984","87",null,"30","0",null,null,null,null,null,this.divData.form);
            obj.set_taborder("26");
            obj.set_cssclass("sta_WF_tablebg");
            this.divData.addChild(obj.name, obj);

            obj = new Edit("txtNO_SIZE","132","4","83","22",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("27");
            obj.set_value("");
            obj.set_maxlength("40");
            obj.set_readonly("true");
            this.divData.addChild(obj.name, obj);

            obj = new Static("sta00","220","3","32","22",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("28");
            obj.set_text("m²");
            this.divData.addChild(obj.name, obj);

            obj = new Edit("txtTY_TYPE","242","4","43","22",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("29");
            obj.set_value("");
            obj.set_maxlength("40");
            obj.set_readonly("true");
            this.divData.addChild(obj.name, obj);

            obj = new Static("sta00_00","290","3","32","22",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("30");
            obj.set_text("형");
            this.divData.addChild(obj.name, obj);

            obj = new Edit("txtTY_STATE","132","33","153","22",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("31");
            obj.set_value("");
            obj.set_maxlength("40");
            obj.set_readonly("true");
            this.divData.addChild(obj.name, obj);

            obj = new Edit("txtDT_CONTRACT","132","62","153","22",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("32");
            obj.set_value("");
            obj.set_maxlength("40");
            obj.set_readonly("true");
            this.divData.addChild(obj.name, obj);

            obj = new Edit("txtNO_TEL","132","91","153","22",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("33");
            obj.set_value("");
            obj.set_maxlength("40");
            obj.set_readonly("true");
            this.divData.addChild(obj.name, obj);

            obj = new Edit("txtNO_POST","132","120","63","22",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("34");
            obj.set_value("");
            obj.set_maxlength("40");
            obj.set_readonly("true");
            this.divData.addChild(obj.name, obj);

            obj = new Edit("txtDS_ADDR1","198","120","337","22",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("35");
            obj.set_value("");
            obj.set_maxlength("40");
            obj.set_readonly("true");
            this.divData.addChild(obj.name, obj);

            obj = new Edit("txtDS_ADDR2","538","120",null,"22","6",null,null,null,null,null,this.divData.form);
            obj.set_taborder("36");
            obj.set_value("");
            obj.set_maxlength("40");
            obj.set_readonly("true");
            this.divData.addChild(obj.name, obj);

            obj = new Edit("txtTY_DISTRICT","561","4","33","22",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("37");
            obj.set_value("");
            obj.set_maxlength("40");
            obj.set_readonly("true");
            this.divData.addChild(obj.name, obj);

            obj = new Edit("txtRT_OPTION","597","4","33","22",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("38");
            obj.set_value("");
            obj.set_maxlength("40");
            obj.set_readonly("true");
            this.divData.addChild(obj.name, obj);

            obj = new Edit("txtDS_OPTION","633","4",null,"22","6",null,null,null,null,null,this.divData.form);
            obj.set_taborder("39");
            obj.set_value("");
            obj.set_maxlength("40");
            obj.set_readonly("true");
            this.divData.addChild(obj.name, obj);

            obj = new Edit("txtTY_BUNYANG","561","33","153","22",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("40");
            obj.set_value("");
            obj.set_maxlength("40");
            obj.set_readonly("true");
            this.divData.addChild(obj.name, obj);

            obj = new Edit("txtDS_CONTRACTOR","561","62","153","22",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("41");
            obj.set_value("");
            obj.set_maxlength("40");
            obj.set_readonly("true");
            this.divData.addChild(obj.name, obj);

            obj = new Edit("txtNO_OFFICETEL","561","91","153","22",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("42");
            obj.set_value("");
            obj.set_maxlength("40");
            obj.set_readonly("true");
            this.divData.addChild(obj.name, obj);

            obj = new Radio("rdoTY_CONTRACTOR","990","32","161","22",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("43");
            obj.set_innerdataset("dsTY_CONTRACTOR");
            obj.set_codecolumn("CODE");
            obj.set_datacolumn("VALUE");
            obj.set_direction("vertical");
            obj.set_readonly("true");
            this.divData.addChild(obj.name, obj);

            obj = new Edit("txtNO_JUMIN","990","62","153","22",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("44");
            obj.set_value("");
            obj.set_maxlength("40");
            obj.set_readonly("true");
            this.divData.addChild(obj.name, obj);

            obj = new Edit("txtNO_MOBILE","990","91","153","22",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("45");
            obj.set_value("");
            obj.set_maxlength("40");
            obj.set_readonly("true");
            this.divData.addChild(obj.name, obj);
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

            obj = new BindItem("item2","divSearch.form.ctxtNO_DONG","value","dsSearch","NO_DONG");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item3","divSearch.form.ctxtNO_FLOOR","value","dsSearch","NO_FLOOR");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item4","divSearch.form.ctxtNO_HO","value","dsSearch","NO_HO");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item5","divData.form.txtNO_SIZE","value","dsDetail","NO_SIZE");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item6","divData.form.txtTY_TYPE","value","dsDetail","TY_TYPE");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item7","divData.form.txtTY_STATE","value","dsDetail","TY_STATE");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item8","divData.form.txtDT_CONTRACT","value","dsDetail","DT_CONTRACT");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item9","divData.form.txtNO_TEL","value","dsDetail","NO_TEL");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item10","divData.form.txtNO_POST","value","dsDetail","NO_POST");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item11","divData.form.txtDS_ADDR1","value","dsDetail","DS_ADDR2");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item12","divData.form.txtDS_ADDR2","value","dsDetail","DS_ADDR3");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item13","divData.form.txtTY_DISTRICT","value","dsDetail","TY_DISTRICT");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item14","divData.form.txtRT_OPTION","value","dsDetail","RT_OPTION");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item15","divData.form.txtDS_OPTION","value","dsDetail","DS_OPTION");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item16","divData.form.txtTY_BUNYANG","value","dsDetail","TY_BUNYANG");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item17","divData.form.txtDS_CONTRACTOR","value","dsDetail","DS_CONTRACTOR");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item18","divData.form.txtNO_OFFICETEL","value","dsDetail","NO_OFFICETEL");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item19","divData.form.txtNO_JUMIN","value","dsDetail","NO_JUMIN");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item20","divData.form.txtNO_MOBILE","value","dsDetail","NO_MOBILE");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item21","divData.form.divDataRight.form.calDT_WRITE","value","dsList","DT_WRITE");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item22","divData.form.divDataRight.form.txtDS_WRITE","value","dsList","DS_WRITE");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item23","divData.form.divDataRight.form.txtDS_COMMENT","value","dsList","DS_COMMENT");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item25","divData.form.divDataRight.form.rdoTY_COUNSEL","value","dsList","TY_COUNSEL");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item33","divData.form.rdoTY_CONTRACTOR","value","dsDetail","TY_CONTRACTOR");
            this.addChild(obj.name, obj);
            obj.bind();
            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {
            this._addPreloadList("fdl","cmm::cmmCodeFind.xfdl");
        };
        
        // User Script
        this.registerScript("DLB_COUNSEL.xfdl", function() {
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

        	if(!this.gfnIsNull(this.getOwnerFrame().CD_ACNTUNIT)){
        		this.dsSearch.setColumn(0, "CD_ACNTUNIT", 	 this.getOwnerFrame().CD_ACNTUNIT);
        		this.dsSearch.setColumn(0, "DS_ACNTUNIT", 	 this.getOwnerFrame().DS_ACNTUNIT);
        		this.dsSearch.setColumn(0, "NO_DONG", 	  	 this.getOwnerFrame().NO_DONG);
        		this.dsSearch.setColumn(0, "NO_FLOOR", 	  	 this.getOwnerFrame().NO_FLOOR);
        		this.dsSearch.setColumn(0, "NO_HO", 	  	 this.getOwnerFrame().NO_HO);
        		this.dsSearch.setColumn(0, "NO_UNIONMEMBER", this.getOwnerFrame().NO_UNIONMEMBER);

        		this.FormBtns.Select.click();
        	}
        };

        /************************************************************************
         * 버튼 설정 : 화면(Tab) 전환시 마다 호출
         ************************************************************************/
        this.fnSetButton = function() {

        }

        /************************************************************************
         * 확장 버튼 : 화면별 버튼 설정 ID, function 연결
         ************************************************************************/
        this.fnSetExtendButton = function() {

        };

        /************************************************************************
         * 변수 선언
         ************************************************************************/
        this.fnSetVariable = function() {
        	this.ccfCD_ACNTUNIT = this.divSearch.form.ccfCD_ACNTUNIT;
        	this.ctxtNO_DONG  	= this.divSearch.form.ctxtNO_DONG;
        	this.ctxtNO_FLOOR   = this.divSearch.form.ctxtNO_FLOOR;
        	this.ctxtNO_HO      = this.divSearch.form.ctxtNO_HO;

        	this.calDT_WRITE    = this.divData.form.divDataRight.form.calDT_WRITE;
        	this.txtDS_WRITE    = this.divData.form.divDataRight.form.txtDS_WRITE;
        	this.txtDS_COMMENT  = this.divData.form.divDataRight.form.txtDS_COMMENT;
        	this.dxGrid  	    = this.divData.form.divDataLeft.form.objGrid;
        };

        /************************************************************************
         * 이벤트 설정
         ************************************************************************/
        this.fnSetEvent = function() {
        	this.gfnGridInit(this.dxGrid, this.dsList, "DL", "DLB_COUNSEL");
        	this.dxGrid.set_selecttype("cell");
        }
        /************************************************************************
         * 파라미터 설정
         ************************************************************************/
        this.fnSetParameter = function() {
        	this.dsSelect = new Dataset();
        	this.dsSelect.addColumn("CD_ACNTUNIT"	 , "string");
        	this.dsSelect.addColumn("TY_GUBUN"	 	 , "string");
        	this.dsSelect.addColumn("NO_CHASU"	 	 , "string");
        	this.dsSelect.addColumn("NO_DONG" 		 , "string");
        	this.dsSelect.addColumn("NO_FLOOR"	     , "string");
        	this.dsSelect.addColumn("NO_HO"	     	 , "string");
        	this.dsSelect.addColumn("NO_UNIONMEMBER" , "string");

        	this.dsInsert = new Dataset();
        	this.dsInsert.addColumn("CD_ACNTUNIT"		, "string");
        	this.dsInsert.addColumn("TY_GUBUN"	 		, "string");
        	this.dsInsert.addColumn("NO_CHASU"	 		, "string");
        	this.dsInsert.addColumn("NO_DONG"	 		, "string");
        	this.dsInsert.addColumn("NO_FLOOR"	 		, "string");
        	this.dsInsert.addColumn("NO_HO"	     		, "string");
        	this.dsInsert.addColumn("NO_UNIONMEMBER"	, "string");
        	this.dsInsert.addColumn("DT_WRITE"	        , "string");
        	this.dsInsert.addColumn("DS_WRITE"	        , "string");
        	this.dsInsert.addColumn("TY_COUNSEL"	    , "string");

        	this.dsInsert.addColumn("TY_COUNSEL_NEW1"	, "string");
        	this.dsInsert.addColumn("TY_COUNSEL_NEW2"	, "string");
        	this.dsInsert.addColumn("TY_COUNSEL_NEW3"	, "string");
        	this.dsInsert.addColumn("TY_COUNSEL_NEW4"	, "string");
        	this.dsInsert.addColumn("TY_COUNSEL_NEW5"	, "string");
        	this.dsInsert.addColumn("TY_COUNSEL_NEW6"	, "string");
        	this.dsInsert.addColumn("TY_COUNSEL_NEW7"	, "string");
        	this.dsInsert.addColumn("TY_COUNSEL_NEW8"	, "string");
        	this.dsInsert.addColumn("DS_COMMENT"	    , "string");
        	this.dsInsert.addColumn("ID_INSERT"	     	, "string");

        	this.dsUpdate = new Dataset();
        	this.dsUpdate.addColumn("CD_ACNTUNIT"		, "string");
        	this.dsUpdate.addColumn("TY_GUBUN"	 		, "string");
        	this.dsUpdate.addColumn("NO_CHASU"	 		, "string");
        	this.dsUpdate.addColumn("NO_DONG"	 		, "string");
        	this.dsUpdate.addColumn("NO_FLOOR"	 		, "string");
        	this.dsUpdate.addColumn("NO_HO"	     		, "string");
        	this.dsUpdate.addColumn("NO_UNIONMEMBER"	, "string");
        	this.dsUpdate.addColumn("NO_SEQ"	    	, "string");
        	this.dsUpdate.addColumn("DT_WRITE"	    	, "string");
        	this.dsUpdate.addColumn("DS_WRITE"	     	, "string");
        	this.dsUpdate.addColumn("TY_COUNSEL"	    , "string");
        	this.dsUpdate.addColumn("TY_COUNSEL_NEW1"	, "string");
        	this.dsUpdate.addColumn("TY_COUNSEL_NEW2"	, "string");
        	this.dsUpdate.addColumn("TY_COUNSEL_NEW3"	, "string");
        	this.dsUpdate.addColumn("TY_COUNSEL_NEW4"	, "string");
        	this.dsUpdate.addColumn("TY_COUNSEL_NEW5"	, "string");
        	this.dsUpdate.addColumn("TY_COUNSEL_NEW6"	, "string");
        	this.dsUpdate.addColumn("TY_COUNSEL_NEW7"	, "string");
        	this.dsUpdate.addColumn("TY_COUNSEL_NEW8"	, "string");
        	this.dsUpdate.addColumn("DS_COMMENT"	    , "string");
        	this.dsUpdate.addColumn("ID_UPDATE"	     	, "string");

        	this.dsDelete = new Dataset();
        	this.dsDelete.addColumn("CD_ACNTUNIT"		, "string");
        	this.dsDelete.addColumn("TY_GUBUN"	 		, "string");
        	this.dsDelete.addColumn("NO_CHASU"	 		, "string");
        	this.dsDelete.addColumn("NO_DONG"	 		, "string");
        	this.dsDelete.addColumn("NO_FLOOR"	 		, "string");
        	this.dsDelete.addColumn("NO_HO"	     		, "string");
        	this.dsDelete.addColumn("NO_UNIONMEMBER"	, "string");
        	this.dsDelete.addColumn("NO_SEQ"	    	, "string");
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

        	this.dsSelect.setColumn(0, "CD_ACNTUNIT"	, this.dsSearch.getColumn(0, "CD_ACNTUNIT").substr(0, 6));
        	this.dsSelect.setColumn(0, "TY_GUBUN"		, this.dsSearch.getColumn(0, "CD_ACNTUNIT").substr(6, 1));
        	this.dsSelect.setColumn(0, "NO_CHASU"	 	, this.dsSearch.getColumn(0, "CD_ACNTUNIT").substr(7, 2));
        	this.dsSelect.setColumn(0, "NO_DONG"		, this.dsSearch.getColumn(0, "NO_DONG"));
        	this.dsSelect.setColumn(0, "NO_FLOOR"	 	, this.dsSearch.getColumn(0, "NO_FLOOR"));
        	this.dsSelect.setColumn(0, "NO_HO"		 	, this.dsSearch.getColumn(0, "NO_HO"));
        	this.dsSelect.setColumn(0, "NO_UNIONMEMBER"	, this.dsSearch.getColumn(0, "NO_UNIONMEMBER"));

        	var strSvcId    = "select";
        	var strSvcType  = "grid";
        	var inProc		= "_dsProc";
        	var inData      = "d_select=dsSelect select=dsSelect";
        	var outData     = "dsDetail=d_select0 dsList=select0";
        	var strArg      = "";
        	var callBackFnc = "fnCallback";

        	this.gfnTransaction( strSvcId , 	// transaction을 구분하기 위한 svc id값
        						strSvcType , 	// transaction을 요청할 구분
        						inProc,			// Procedure 정보 Dataset 이름
        						inData , 		// 입력값으로 보낼 dataset id , a=b형태로 실제이름과 입력이름을 매칭
        						outData , 		// 처리결과값으로 받을 dataset id, a=b형태로 실제이름과 입력이름을 매칭
        						strArg, 		// 입력갑스로 보낼 arguments, strFormData="20120607"
        						callBackFnc); 	// 통신방법 정의 [생략가능]
        }



        /*
         *	입력 버튼
         */
        this.fnAdd = function() {
        	var nRow = this.gfnGridAdd(this.dxGrid);

        	this.dsList.setColumn(nRow, "DT_WRITE"  	 , this.gfnGetDate());
        	this.dsList.setColumn(nRow, "DS_WRITE"  	 , this.AuthClient.DS_HNAME);
        	this.dsList.setColumn(nRow, "DS_COMMENT"	 , "");
        	this.dsList.setColumn(nRow, "TY_COUNSEL"	 , "4");
        // 	this.dsList.setColumn(nRow, "TY_COUNSEL_NEW1", "0");
        // 	this.dsList.setColumn(nRow, "TY_COUNSEL_NEW2", "0");
        // 	this.dsList.setColumn(nRow, "TY_COUNSEL_NEW3", "0");
        // 	this.dsList.setColumn(nRow, "TY_COUNSEL_NEW4", "0");
        // 	this.dsList.setColumn(nRow, "TY_COUNSEL_NEW5", "0");
        // 	this.dsList.setColumn(nRow, "TY_COUNSEL_NEW6", "0");
        // 	this.dsList.setColumn(nRow, "TY_COUNSEL_NEW7", "0");
        // 	this.dsList.setColumn(nRow, "TY_COUNSEL_NEW8", "0");
        }

        /*
         *	삭제 버튼
         */
        this.fnDel = function() {
        	this.gfnConfirm("삭제하시겠습니까?", "fncallbackDelete");
        }

        this.fncallbackDelete = function(strID, val) {
        	if (!val) return;

        	this.gfnGridDel(this.dxGrid);

        	this.fnSave();

        }
        /*
         *	저장 버튼
         */
        this.fnSave = function() {
        	//if (!this.gfnGridValidate(this.dxGrid)) return;
        	if (!this.fnValidateCheck()) return;

        	this.dxGrid.updateToDataset();

        	this.dsInsert.clearData();
        	this.dsUpdate.clearData();
        	this.dsDelete.clearData();

        	for (var i = 0; i < this.dsList.rowcount; i++) {
        		var flag = this.gfnGetFlag(this.dsList, i);

        		switch(flag) {
        			case "I":
        				var nrow = this.dsInsert.addRow();
        				this.dsInsert.setColumn(nrow, "CD_ACNTUNIT"		, this.dsSearch.getColumn(0, "CD_ACNTUNIT").substr(0, 6));			//사업지코드
        				this.dsInsert.setColumn(nrow, "TY_GUBUN"   		, this.dsSearch.getColumn(0, "CD_ACNTUNIT").substr(6, 1));			//구분
        				this.dsInsert.setColumn(nrow, "NO_CHASU"		, this.dsSearch.getColumn(0, "CD_ACNTUNIT").substr(7, 2));			//차수
        				this.dsInsert.setColumn(nrow, "NO_DONG"			, this.dsSearch.getColumn(0, "NO_DONG"));							//동
        				this.dsInsert.setColumn(nrow, "NO_FLOOR"		, this.dsSearch.getColumn(0, "NO_FLOOR"));							//층
        				this.dsInsert.setColumn(nrow, "NO_HO"			, this.dsSearch.getColumn(0, "NO_HO"));								//호
        				this.dsInsert.setColumn(nrow, "NO_UNIONMEMBER"	, this.dsSearch.getColumn(0, "NO_UNIONMEMBER"));					//조합원번호
        				this.dsInsert.setColumn(nrow, "DT_WRITE"		, this.dsList.getColumn(i, "DT_WRITE"));							//기록일자
        				this.dsInsert.setColumn(nrow, "DS_WRITE"		, this.dsList.getColumn(i, "DS_WRITE"));							//기록자
        				this.dsInsert.setColumn(nrow, "TY_COUNSEL"		, this.dsList.getColumn(i, "TY_COUNSEL"));							//구분
        				this.dsInsert.setColumn(nrow, "TY_COUNSEL_NEW1"	, "");						//민원강도
        				this.dsInsert.setColumn(nrow, "TY_COUNSEL_NEW2"	, "");						//대금관련
        				this.dsInsert.setColumn(nrow, "TY_COUNSEL_NEW3"	, "");						//별도계약관련
        				this.dsInsert.setColumn(nrow, "TY_COUNSEL_NEW4"	, "");						//임대관련
        				this.dsInsert.setColumn(nrow, "TY_COUNSEL_NEW5"	, "");						//계약관련
        				this.dsInsert.setColumn(nrow, "TY_COUNSEL_NEW6"	, "");						//대출관련
        				this.dsInsert.setColumn(nrow, "TY_COUNSEL_NEW7"	, "");						//입주관련
        				this.dsInsert.setColumn(nrow, "TY_COUNSEL_NEW8"	, "");						//기타
        				this.dsInsert.setColumn(nrow, "DS_COMMENT"	    , this.dsList.getColumn(i, "DS_COMMENT"));							//상담내용
        				this.dsInsert.setColumn(nrow, "ID_INSERT"		, this.AuthClient.ID_USER);											//등록자ID
        				break;
        			case "U":
        				var nrow = this.dsUpdate.addRow();
        				this.dsUpdate.setColumn(nrow, "CD_ACNTUNIT"		, this.dsSearch.getColumn(0, "CD_ACNTUNIT").substr(0, 6));
        				this.dsUpdate.setColumn(nrow, "TY_GUBUN"   		, this.dsSearch.getColumn(0, "CD_ACNTUNIT").substr(6, 1));
        				this.dsUpdate.setColumn(nrow, "NO_CHASU"		, this.dsSearch.getColumn(0, "CD_ACNTUNIT").substr(7, 2));
        				this.dsUpdate.setColumn(nrow, "NO_DONG"			, this.dsSearch.getColumn(0, "NO_DONG"));
        				this.dsUpdate.setColumn(nrow, "NO_FLOOR"		, this.dsSearch.getColumn(0, "NO_FLOOR"));
        				this.dsUpdate.setColumn(nrow, "NO_HO"			, this.dsSearch.getColumn(0, "NO_HO"));
        				this.dsUpdate.setColumn(nrow, "NO_UNIONMEMBER"	, this.dsSearch.getColumn(0, "NO_UNIONMEMBER"));
        				this.dsUpdate.setColumn(nrow, "NO_SEQ"			, this.dsList.getColumn(i, "NO_SEQ"));
        				this.dsUpdate.setColumn(nrow, "DT_WRITE"		, this.dsList.getColumn(i, "DT_WRITE"));
        				this.dsUpdate.setColumn(nrow, "DS_WRITE"		, this.dsList.getColumn(i, "DS_WRITE"));
        				this.dsUpdate.setColumn(nrow, "TY_COUNSEL"		, this.dsList.getColumn(i, "TY_COUNSEL"));
        				this.dsUpdate.setColumn(nrow, "TY_COUNSEL_NEW1"	, "");
        				this.dsUpdate.setColumn(nrow, "TY_COUNSEL_NEW2"	, "");
        				this.dsUpdate.setColumn(nrow, "TY_COUNSEL_NEW3"	, "");
        				this.dsUpdate.setColumn(nrow, "TY_COUNSEL_NEW4"	, "");
        				this.dsUpdate.setColumn(nrow, "TY_COUNSEL_NEW5"	, "");
        				this.dsUpdate.setColumn(nrow, "TY_COUNSEL_NEW6"	, "");
        				this.dsUpdate.setColumn(nrow, "TY_COUNSEL_NEW7"	, "");
        				this.dsUpdate.setColumn(nrow, "TY_COUNSEL_NEW8"	, "");
        				this.dsUpdate.setColumn(nrow, "DS_COMMENT"		, this.dsList.getColumn(i, "DS_COMMENT"));
        				this.dsUpdate.setColumn(nrow, "ID_UPDATE"		, this.AuthClient.ID_USER);
        				break;
        			case "D":
        				var nrow = this.dsDelete.addRow();
        				this.dsDelete.setColumn(nrow, "CD_ACNTUNIT"		, this.dsSearch.getColumn(0, "CD_ACNTUNIT").substr(0, 6));
        				this.dsDelete.setColumn(nrow, "TY_GUBUN"   		, this.dsSearch.getColumn(0, "CD_ACNTUNIT").substr(6, 1));
        				this.dsDelete.setColumn(nrow, "NO_CHASU"		, this.dsSearch.getColumn(0, "CD_ACNTUNIT").substr(7, 2));
        				this.dsDelete.setColumn(nrow, "NO_DONG"			, this.dsSearch.getColumn(0, "NO_DONG"));
        				this.dsDelete.setColumn(nrow, "NO_FLOOR"		, this.dsSearch.getColumn(0, "NO_FLOOR"));
        				this.dsDelete.setColumn(nrow, "NO_HO"			, this.dsSearch.getColumn(0, "NO_HO"));
        				this.dsDelete.setColumn(nrow, "NO_UNIONMEMBER"	, this.dsSearch.getColumn(0, "NO_UNIONMEMBER"));
        				this.dsDelete.setColumn(nrow, "NO_SEQ"			, this.dsList.getColumn(i, "NO_SEQ"));
        				break;

        		}
        	}

        	if (this.dsInsert.rowcount == 0 && this.dsUpdate.rowcount == 0 && this.dsDelete.rowcount == 0) return;

        	var strSvcId    = "save";
        	var strSvcType  = "save";
        	var inProc		= "_dsProc";
        	var inData      = "insert=dsInsert update=dsUpdate delete=dsDelete";
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
         * Validate
         ************************************************************************/
        /*
         *	조회 Validate
          */
        this.fnSelectValidate = function() {
        	if(this.gfnIsNull(this.dsSearch.getColumn(0, "CD_ACNTUNIT"))){
        		this.gfnAlert("사업지코드는 필수입니다.");
        		this.ccfCD_ACNTUNIT.form.CDTextBox.setFocus();
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
        this.fnCallback = function(svcID, errorCode, errorMsg)
        {
        	if (svcID == "select") {
        		this.gfnGridAfterSelect(this.dxGrid);
        	} else if(svcID == "save"){
        		if (errorCode == 0) {
        			this.FormBtns.Select.click();
        		} else {
        			this.gfnAlert(errorMsg);
        		}
        	}
        }

        /************************************************************************
         * 코드파인드 이벤트
         ************************************************************************/

        /************************************************************************
         * 그리드 이벤트
         ************************************************************************/

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

        this.divData_divSplitter_ondrag = function(obj,e)
        {
        	e.set_userdata("splitter");
        	return true;
        };

        this.divData_ondragmove = function(obj,e)
        {
        	if(e.userdata == "splitter") {
        		this.divData.form.divSplitter.set_left(e.clientx);
        		this.divData.form.resetScroll();
        	}
        };

        this.fnValidateCheck = function ()
        {
        	if(this.gfnGetFlag(this.dsList, this.dsList.rowposition) != "D"){
        		if(this.gfnIsNull(this.dsList.getColumn(this.dsList.rowposition, "TY_COUNSEL"))){
        			this.gfnAlert("상담구분을 선택하여 주십시오.");
        			this.rdoTY_COUNSEL.setFocus();
        			return false;
        		}
        		if(this.gfnIsNull(this.dsList.getColumn(this.dsList.rowposition, "DT_WRITE"))){
        			this.gfnAlert("기록일자를 입력하세요");
        			this.calDT_WRITE.setFocus();
        			return false;
        		}
        		if(this.gfnIsNull(this.gfnTrim(this.dsList.getColumn(this.dsList.rowposition, "DS_WRITE")))){
        			this.gfnAlert("기록자를 입력하세요");
        			this.txtDS_WRITE.setFocus();
        			return false;
        		}
        		if(this.gfnIsNull(this.gfnTrim(this.dsList.getColumn(this.dsList.rowposition, "DS_COMMENT")))){
        			this.gfnAlert("상담내용을 입력하세요");
        			this.txtDS_COMMENT.setFocus();
        			return false;
        		}
        	}
        	return true;
        };
        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.form_onload,this);
            this.divSearch.form.ctxtNO_DONG.addEventHandler("onkillfocus",this.divSearch_ctxtNO_DONG_onkillfocus,this);
            this.divSearch.form.ctxtNO_DONG.addEventHandler("onkeyup",this.divSearch_ctxt_onkeyup,this);
            this.divSearch.form.ctxtNO_FLOOR.addEventHandler("onkillfocus",this.divSearch_ctxtNO_FLOOR_onkillfocus,this);
            this.divSearch.form.ctxtNO_FLOOR.addEventHandler("onkeyup",this.divSearch_ctxt_onkeyup,this);
            this.divSearch.form.ctxtNO_HO.addEventHandler("onkillfocus",this.divSearch_ctxtNO_HO_onkillfocus,this);
            this.divSearch.form.ctxtNO_HO.addEventHandler("onkeyup",this.divSearch_ctxt_onkeyup,this);
            this.divData.addEventHandler("ondragmove",this.divData_ondragmove,this);
            this.divData.form.divSplitter.addEventHandler("ondrag",this.divData_divSplitter_ondrag,this);
            this.dsSearch.addEventHandler("onvaluechanged",this.dsSearch_onvaluechanged,this);
        };
        this.loadIncludeScript("DLB_COUNSEL.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
