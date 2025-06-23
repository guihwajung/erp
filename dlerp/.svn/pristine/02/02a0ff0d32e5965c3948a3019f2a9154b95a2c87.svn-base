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
            this.set_titletext("대여금 약정 등록");
            if (Form == this.constructor)
            {
                this._setFormPosition(1480,840);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("dsList", this);
            obj._setContents("");
            this.addChild(obj.name, obj);


            obj = new Dataset("_dsProc", this);
            obj._setContents("<ColumnInfo><Column id=\"TARGET\" type=\"STRING\" size=\"256\"/><Column id=\"SP\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"TARGET\">select</Col><Col id=\"SP\">DFGPR_LOANREG_SELECT</Col></Row><Row><Col id=\"TARGET\">insert</Col><Col id=\"SP\">DFGPR_LOANREG_INSERT</Col></Row><Row><Col id=\"TARGET\">update</Col><Col id=\"SP\">DFGPR_LOANREG_UPDATE</Col></Row><Row><Col id=\"TARGET\">delete</Col><Col id=\"SP\">DFGPR_LOANREG_DELETE</Col></Row><Row><Col id=\"TARGET\">combo</Col><Col id=\"SP\">DZXPR_COMBO_SELECT</Col></Row><Row><Col id=\"TARGET\">combo2</Col><Col id=\"SP\">DZXPR_COMBO_SELECT</Col></Row><Row><Col id=\"TARGET\">combo3</Col><Col id=\"SP\">DZXPR_COMBO_SELECT</Col></Row><Row><Col id=\"TARGET\">combo4</Col><Col id=\"SP\">DZXPR_COMBO_SELECT</Col></Row><Row><Col id=\"TARGET\">combo5</Col><Col id=\"SP\">DZXPR_COMBO_SELECT</Col></Row><Row><Col id=\"TARGET\">combo6</Col><Col id=\"SP\">DZXPR_COMBO_SELECT</Col></Row><Row><Col id=\"TARGET\">combo7</Col><Col id=\"SP\">DZXPR_COMBO_SELECT</Col></Row><Row><Col id=\"TARGET\">combo8</Col><Col id=\"SP\">DZXPR_COMBO_SELECT</Col></Row><Row><Col id=\"TARGET\">combo9</Col><Col id=\"SP\">DZXPR_COMBO_SELECT</Col></Row><Row><Col id=\"TARGET\">combo10</Col><Col id=\"SP\">DZXPR_COMBO_SELECT</Col></Row><Row><Col id=\"TARGET\">combo11</Col><Col id=\"SP\">DZXPR_COMBO_SELECT</Col></Row><Row><Col id=\"TARGET\">combo12</Col><Col id=\"SP\">DZXPR_COMBO_SELECT</Col></Row><Row><Col id=\"TARGET\">combo13</Col><Col id=\"SP\">DZXPR_COMBO_SELECT</Col></Row><Row><Col id=\"TARGET\">e_create</Col><Col id=\"SP\">DFGPR_LOANPLAN_CREATE</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsYN_RELATIVE", this);
            obj._setContents("<ColumnInfo><Column id=\"CODE\" type=\"STRING\" size=\"256\"/><Column id=\"NAME\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"CODE\">Y</Col><Col id=\"NAME\">Y</Col></Row><Row><Col id=\"CODE\">N</Col><Col id=\"NAME\">N</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsYN_DAMBO", this);
            obj._setContents("<ColumnInfo><Column id=\"CODE\" type=\"STRING\" size=\"256\"/><Column id=\"NAME\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"CODE\">Y</Col><Col id=\"NAME\">Y</Col></Row><Row><Col id=\"CODE\">N</Col><Col id=\"NAME\">N</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsTY_DANBOK", this);
            obj._setContents("");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsTY_RAISE", this);
            obj._setContents("");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsTY_SANG", this);
            obj._setContents("");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsTY_EZA", this);
            obj._setContents("");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsTY_INTLOCK", this);
            obj._setContents("");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsTY_SUNHOO", this);
            obj._setContents("");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsTY_EZACAL", this);
            obj._setContents("");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsTY_YANGDAN", this);
            obj._setContents("");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsTY_TERM", this);
            obj._setContents("");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsTY_REPAY1", this);
            obj._setContents("");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsTY_REPAY2", this);
            obj._setContents("");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsTY_CMS", this);
            obj._setContents("");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsResult", this);
            obj._setContents("");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsCD_CURRENCY", this);
            obj._setContents("");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsYN_WONFIX", this);
            obj._setContents("<ColumnInfo><Column id=\"CD_CODE\" type=\"STRING\" size=\"256\"/><Column id=\"DS_CODE\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"CD_CODE\">Y</Col><Col id=\"DS_CODE\">Y</Col></Row><Row><Col id=\"CD_CODE\">N</Col><Col id=\"DS_CODE\">N</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsYN_JANGDAN", this);
            obj._setContents("<ColumnInfo><Column id=\"CODE\" type=\"STRING\" size=\"256\"/><Column id=\"NAME\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"CODE\">Y</Col><Col id=\"NAME\">Y</Col></Row><Row><Col id=\"CODE\">N</Col><Col id=\"NAME\">N</Col></Row></Rows>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Div("divSearch","0.0","10.0",null,"78.0","0",null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_cssclass("div_SEARCH_Bg");
            obj.set_formscrolltype("none");
            this.addChild(obj.name, obj);

            obj = new Static("sta04","0.0","10.0","92.0","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("5");
            obj.set_text("법인코드");
            obj.set_cssclass("sta_WF_SchLabel");
            this.divSearch.addChild(obj.name, obj);

            obj = new Div("cfCD_CORP","sta04:0.0","10.0","269","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.getSetter("CDTextWidth").set("80");
            obj.set_taborder("0");
            obj.set_url("cmm::cmmCodeFind.xfdl");
            obj.set_text("");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("sta00","cfCD_CORP:0.0","10.0","92.0","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("6");
            obj.set_text("대여종류");
            obj.set_cssclass("sta_WF_SchLabel");
            this.divSearch.addChild(obj.name, obj);

            obj = new Div("ccfCD_LOAN","sta00:0.0","10.0","269","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.getSetter("CDTextWidth").set("70");
            obj.set_taborder("1");
            obj.set_url("cmm::cmmCodeFind.xfdl");
            obj.set_text("");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("sta01","0.0","sta04:10.0","92.0","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("7");
            obj.set_text("관리번호");
            obj.set_cssclass("sta_WF_SchLabel");
            this.divSearch.addChild(obj.name, obj);

            obj = new Div("cfNO_LOAN","sta01:0.0","sta04:10.0","269","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.getSetter("CDTextWidth").set("80");
            obj.set_taborder("2");
            obj.set_url("cmm::cmmCodeFind.xfdl");
            obj.set_text("");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("sta03","cfNO_LOAN:0.0","sta04:10.0","92.0","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("4");
            obj.set_text("완료여부");
            obj.set_cssclass("sta_WF_SchLabel");
            this.divSearch.addChild(obj.name, obj);

            obj = new Combo("cboTY_REPAY","sta03:0.0","sta04:10.0","70","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("3");
            obj.set_codecolumn("CD_CODE");
            obj.set_datacolumn("DS_CODE");
            obj.set_innerdataset("dsTY_REPAY1");
            obj.set_text("진행중");
            obj.set_value("N");
            obj.set_index("-1");
            this.divSearch.addChild(obj.name, obj);

            obj = new Div("divData","0","70",null,null,"0","0",null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_cssclass("div_DATA_Bg");
            this.addChild(obj.name, obj);

            obj = new Div("divSplitter","21.88%","0","5",null,null,"0",null,null,null,null,this.divData.form);
            obj.set_taborder("2");
            obj.set_background("skyblue");
            obj.set_cursor("ew-resize");
            this.divData.addChild(obj.name, obj);

            obj = new Div("divDataRight","divSplitter:5","0",null,null,"0","0",null,null,null,null,this.divData.form);
            obj.set_taborder("1");
            obj.set_text("");
            this.divData.addChild(obj.name, obj);

            obj = new Static("sta22","105","279",null,"30","2",null,null,null,null,null,this.divData.form.divDataRight.form);
            obj.set_taborder("65");
            obj.set_cssclass("sta_WF_tablebg");
            obj.set_text("");
            this.divData.form.divDataRight.addChild(obj.name, obj);

            obj = new Static("sta22_00","95","308",null,"30","0",null,null,null,null,null,this.divData.form.divDataRight.form);
            obj.set_taborder("95");
            obj.set_cssclass("sta_WF_tablebg");
            obj.set_text("");
            this.divData.form.divDataRight.addChild(obj.name, obj);

            obj = new Static("sta00","1","0",null,"22","0",null,null,null,null,null,this.divData.form.divDataRight.form);
            obj.set_taborder("39");
            obj.set_text("기본정보");
            obj.set_cssclass("sta_TITLE_Bg");
            this.divData.form.divDataRight.addChild(obj.name, obj);

            obj = new Static("sta11","94","28",null,"30","1",null,null,null,null,null,this.divData.form.divDataRight.form);
            obj.set_taborder("41");
            obj.set_cssclass("sta_WF_tablebg");
            obj.set_text("");
            this.divData.form.divDataRight.addChild(obj.name, obj);

            obj = new Static("sta03","94","57",null,"30","1",null,null,null,null,null,this.divData.form.divDataRight.form);
            obj.set_taborder("42");
            obj.set_cssclass("sta_WF_tablebg");
            this.divData.form.divDataRight.addChild(obj.name, obj);

            obj = new Static("sta05","344","28","95","30",null,null,null,null,null,null,this.divData.form.divDataRight.form);
            obj.set_taborder("43");
            obj.set_text("법인코드");
            obj.set_cssclass("sta_WF_tablelabelE");
            this.divData.form.divDataRight.addChild(obj.name, obj);

            obj = new Div("cfCD_CORP2","446","33","210","20",null,null,null,null,null,null,this.divData.form.divDataRight.form);
            obj.getSetter("CDTextWidth").set("50");
            obj.set_taborder("1");
            obj.set_url("cmm::cmmCodeFind.xfdl");
            obj.set_enable("true");
            this.divData.form.divDataRight.addChild(obj.name, obj);

            obj = new Static("sta06","94","86",null,"30","1",null,null,null,null,null,this.divData.form.divDataRight.form);
            obj.set_taborder("44");
            obj.set_cssclass("sta_WF_tablebg");
            this.divData.form.divDataRight.addChild(obj.name, obj);

            obj = new Static("sta27","94","115",null,"30","1",null,null,null,null,null,this.divData.form.divDataRight.form);
            obj.set_taborder("47");
            obj.set_cssclass("sta_WF_tablebg");
            this.divData.form.divDataRight.addChild(obj.name, obj);

            obj = new Static("sta28","1","157",null,"22","1",null,null,null,null,null,this.divData.form.divDataRight.form);
            obj.set_taborder("48");
            obj.set_text("원금회수조건");
            obj.set_cssclass("sta_TITLE_Bg");
            this.divData.form.divDataRight.addChild(obj.name, obj);

            obj = new Static("sta29","344","115","95","30",null,null,null,null,null,null,this.divData.form.divDataRight.form);
            obj.set_taborder("49");
            obj.set_text("대여금명");
            obj.set_cssclass("sta_WF_tablelabelE");
            this.divData.form.divDataRight.addChild(obj.name, obj);

            obj = new Edit("txtNM_LOAN","446","120","210","20",null,null,null,null,null,null,this.divData.form.divDataRight.form);
            obj.set_taborder("6");
            obj.set_maxlength("100");
            this.divData.form.divDataRight.addChild(obj.name, obj);

            obj = new Static("sta33","94","184",null,"30","1",null,null,null,null,null,this.divData.form.divDataRight.form);
            obj.set_taborder("50");
            obj.set_cssclass("sta_WF_tablebg");
            this.divData.form.divDataRight.addChild(obj.name, obj);

            obj = new Static("sta34","1","184","95","30",null,null,null,null,null,null,this.divData.form.divDataRight.form);
            obj.set_taborder("51");
            obj.set_text("원금회수방법");
            obj.set_cssclass("sta_WF_tablelabelE");
            this.divData.form.divDataRight.addChild(obj.name, obj);

            obj = new Static("sta36","213","184","105","30",null,null,null,null,null,null,this.divData.form.divDataRight.form);
            obj.set_taborder("52");
            obj.set_text("회수주기(개월)");
            obj.set_cssclass("sta_WF_tablelabelE");
            this.divData.form.divDataRight.addChild(obj.name, obj);

            obj = new Static("staChitPubPnt","437","184","105","30",null,null,null,null,null,null,this.divData.form.divDataRight.form);
            obj.set_taborder("53");
            obj.set_text("회수기준일");
            obj.set_cssclass("sta_WF_tablelabelE");
            this.divData.form.divDataRight.addChild(obj.name, obj);

            obj = new Static("sta39","660","184","95","30",null,null,null,null,null,null,this.divData.form.divDataRight.form);
            obj.set_taborder("54");
            obj.set_text("회수거치기간");
            obj.set_cssclass("sta_WF_tablelabel");
            this.divData.form.divDataRight.addChild(obj.name, obj);

            obj = new Static("sta45","1","358",null,"22","480",null,null,null,null,null,this.divData.form.divDataRight.form);
            obj.set_taborder("55");
            obj.set_text("진행정보 및 담보");
            obj.set_cssclass("sta_TITLE_Bg");
            this.divData.form.divDataRight.addChild(obj.name, obj);

            obj = new Static("sta01","1","28","95","30",null,null,null,null,null,null,this.divData.form.divDataRight.form);
            obj.set_taborder("40");
            obj.set_text("관리번호");
            obj.set_cssclass("sta_WF_tablelabel");
            this.divData.form.divDataRight.addChild(obj.name, obj);

            obj = new Edit("txtNO_LOAN","102","33","232","20",null,null,null,null,null,null,this.divData.form.divDataRight.form);
            obj.set_taborder("0");
            obj.set_maxlength("20");
            obj.set_enable("false");
            this.divData.form.divDataRight.addChild(obj.name, obj);

            obj = new Static("sta21","1","115","95","30",null,null,null,null,null,null,this.divData.form.divDataRight.form);
            obj.set_taborder("45");
            obj.set_text("조달방법");
            obj.set_cssclass("sta_WF_tablelabelE");
            this.divData.form.divDataRight.addChild(obj.name, obj);

            obj = new Static("sta02","344","86","95","30",null,null,null,null,null,null,this.divData.form.divDataRight.form);
            obj.set_taborder("56");
            obj.set_text("귀속부서");
            obj.set_cssclass("sta_WF_tablelabelE");
            this.divData.form.divDataRight.addChild(obj.name, obj);

            obj = new Static("sta26","660","57","95","30",null,null,null,null,null,null,this.divData.form.divDataRight.form);
            obj.set_taborder("46");
            obj.set_text("관계사");
            obj.set_cssclass("sta_WF_tablelabelE");
            this.divData.form.divDataRight.addChild(obj.name, obj);

            obj = new Static("sta10","344","57","95","30",null,null,null,null,null,null,this.divData.form.divDataRight.form);
            obj.set_taborder("57");
            obj.set_text("장단기/대체");
            obj.set_cssclass("sta_WF_tablelabelE");
            this.divData.form.divDataRight.addChild(obj.name, obj);

            obj = new Combo("cboTY_RAISE","102","120","150","20",null,null,null,null,null,null,this.divData.form.divDataRight.form);
            obj.set_taborder("9");
            obj.set_codecolumn("CD_CODE");
            obj.set_datacolumn("DS_CODE");
            obj.set_innerdataset("dsTY_RAISE");
            obj.set_text("LOAN");
            obj.set_value("LOAN");
            obj.set_index("0");
            this.divData.form.divDataRight.addChild(obj.name, obj);

            obj = new Static("sta12","1","86","95","30",null,null,null,null,null,null,this.divData.form.divDataRight.form);
            obj.set_taborder("58");
            obj.set_text("대여기관");
            obj.set_cssclass("sta_WF_tablelabelE");
            this.divData.form.divDataRight.addChild(obj.name, obj);

            obj = new Div("cfCD_LOANBANK","102","91","232","20",null,null,null,null,null,null,this.divData.form.divDataRight.form);
            obj.getSetter("CDTextWidth").set("80");
            obj.set_taborder("7");
            obj.set_url("cmm::cmmCodeFind.xfdl");
            obj.set_enable("true");
            this.divData.form.divDataRight.addChild(obj.name, obj);

            obj = new Combo("cboYN_RELATIVE","762","62","210","20",null,null,null,null,null,null,this.divData.form.divDataRight.form);
            obj.set_taborder("8");
            obj.set_innerdataset("dsYN_RELATIVE");
            obj.set_codecolumn("CODE");
            obj.set_datacolumn("NAME");
            obj.set_text("");
            obj.set_value("A");
            obj.set_index("0");
            this.divData.form.divDataRight.addChild(obj.name, obj);

            obj = new Div("cfCD_DEPT","446","91","210","20",null,null,null,null,null,null,this.divData.form.divDataRight.form);
            obj.getSetter("CDTextWidth").set("80");
            obj.set_taborder("12");
            obj.set_url("cmm::cmmCodeFind.xfdl");
            obj.set_enable("true");
            this.divData.form.divDataRight.addChild(obj.name, obj);

            obj = new Combo("cboTY_SANG","100","189","105","20",null,null,null,null,null,null,this.divData.form.divDataRight.form);
            obj.set_taborder("14");
            obj.set_codecolumn("CD_CODE");
            obj.set_datacolumn("DS_CODE");
            obj.set_innerdataset("dsTY_SANG");
            obj.set_text("");
            obj.set_value("");
            obj.set_index("0");
            this.divData.form.divDataRight.addChild(obj.name, obj);

            obj = new MaskEdit("mskTR_SANG","325","189","105","20",null,null,null,null,null,null,this.divData.form.divDataRight.form);
            obj.set_taborder("15");
            obj.set_format("#,###,###,##0");
            obj.set_limitbymask("integer");
            this.divData.form.divDataRight.addChild(obj.name, obj);

            obj = new Calendar("calDT_ORIGINFROM","548","189","105","20",null,null,null,null,null,null,this.divData.form.divDataRight.form);
            obj.set_taborder("16");
            obj.set_dateformat("yyyy-MM-dd");
            obj.set_editformat("yyyyMMdd");
            obj.set_autoselect("true");
            obj.set_value("");
            this.divData.form.divDataRight.addChild(obj.name, obj);

            obj = new Static("sta15","1","222",null,"22","1",null,null,null,null,null,this.divData.form.divDataRight.form);
            obj.set_taborder("59");
            obj.set_text("이자수취방식");
            obj.set_cssclass("sta_TITLE_Bg");
            this.divData.form.divDataRight.addChild(obj.name, obj);

            obj = new Static("sta16","105","250",null,"30","2",null,null,null,null,null,this.divData.form.divDataRight.form);
            obj.set_taborder("60");
            obj.set_cssclass("sta_WF_tablebg");
            obj.set_text("");
            this.divData.form.divDataRight.addChild(obj.name, obj);

            obj = new Static("sta17","1","250","105","30",null,null,null,null,null,null,this.divData.form.divDataRight.form);
            obj.set_taborder("61");
            obj.set_text("기준금리");
            obj.set_cssclass("sta_WF_tablelabelE");
            this.divData.form.divDataRight.addChild(obj.name, obj);

            obj = new MaskEdit("mskRT_EZA","112","255","95","20",null,null,null,null,null,null,this.divData.form.divDataRight.form);
            obj.set_taborder("18");
            obj.set_format("#,##0.####");
            this.divData.form.divDataRight.addChild(obj.name, obj);

            obj = new Static("sta18","214","250","105","30",null,null,null,null,null,null,this.divData.form.divDataRight.form);
            obj.set_taborder("62");
            obj.set_text("가산금리");
            obj.set_cssclass("sta_WF_tablelabelE");
            this.divData.form.divDataRight.addChild(obj.name, obj);

            obj = new MaskEdit("mskRT_SPREAD","325","255","105","20",null,null,null,null,null,null,this.divData.form.divDataRight.form);
            obj.set_taborder("19");
            obj.set_format("#,##0.####");
            this.divData.form.divDataRight.addChild(obj.name, obj);

            obj = new Static("sta19","660","250","105","30",null,null,null,null,null,null,this.divData.form.divDataRight.form);
            obj.set_taborder("63");
            obj.set_text("유형");
            obj.set_cssclass("sta_WF_tablelabelE");
            this.divData.form.divDataRight.addChild(obj.name, obj);

            obj = new Combo("cboTY_EZA","771","255","105","20",null,null,null,null,null,null,this.divData.form.divDataRight.form);
            obj.set_taborder("20");
            obj.set_codecolumn("CD_CODE");
            obj.set_datacolumn("DS_CODE");
            obj.set_innerdataset("dsTY_EZA");
            obj.set_text("LOAN");
            obj.set_value("LOAN");
            obj.set_index("0");
            this.divData.form.divDataRight.addChild(obj.name, obj);

            obj = new Static("sta20","1","279","105","30",null,null,null,null,null,null,this.divData.form.divDataRight.form);
            obj.set_taborder("64");
            obj.set_text("연동");
            obj.set_cssclass("sta_WF_tablelabelE");
            this.divData.form.divDataRight.addChild(obj.name, obj);

            obj = new Combo("cboTY_INTLOCK","112","284","95","20",null,null,null,null,null,null,this.divData.form.divDataRight.form);
            obj.set_taborder("21");
            obj.set_codecolumn("CD_CODE");
            obj.set_datacolumn("DS_CODE");
            obj.set_innerdataset("dsTY_INTLOCK");
            obj.set_text("LOAN");
            obj.set_value("LOAN");
            obj.set_index("0");
            this.divData.form.divDataRight.addChild(obj.name, obj);

            obj = new Static("sta23","437","279","105","30",null,null,null,null,null,null,this.divData.form.divDataRight.form);
            obj.set_taborder("66");
            obj.set_text("방식");
            obj.set_cssclass("sta_WF_tablelabelE");
            this.divData.form.divDataRight.addChild(obj.name, obj);

            obj = new Combo("cboTY_DANBOK","548","284","105","20",null,null,null,null,null,null,this.divData.form.divDataRight.form);
            obj.set_taborder("23");
            obj.set_codecolumn("CD_CODE");
            obj.set_datacolumn("DS_CODE");
            obj.set_innerdataset("dsTY_DANBOK");
            obj.set_text("LOAN");
            obj.set_value("LOAN");
            obj.set_index("0");
            this.divData.form.divDataRight.addChild(obj.name, obj);

            obj = new Static("sta24","660","279","105","30",null,null,null,null,null,null,this.divData.form.divDataRight.form);
            obj.set_taborder("67");
            obj.set_text("수취일");
            obj.set_cssclass("sta_WF_tablelabelE");
            this.divData.form.divDataRight.addChild(obj.name, obj);

            obj = new MaskEdit("mskTR_EZASTD","771","284","105","20",null,null,null,null,null,null,this.divData.form.divDataRight.form);
            obj.set_taborder("24");
            obj.set_format("#,###,###,##0");
            this.divData.form.divDataRight.addChild(obj.name, obj);

            obj = new Static("sta30","214","308","105","30",null,null,null,null,null,null,this.divData.form.divDataRight.form);
            obj.set_taborder("69");
            obj.set_text("수취기준");
            obj.set_cssclass("sta_WF_tablelabelE");
            this.divData.form.divDataRight.addChild(obj.name, obj);

            obj = new Combo("cboTY_SUNHOO","325","313","105","20",null,null,null,null,null,null,this.divData.form.divDataRight.form);
            obj.set_taborder("26");
            obj.set_codecolumn("CD_CODE");
            obj.set_datacolumn("DS_CODE");
            obj.set_innerdataset("dsTY_SUNHOO");
            obj.set_text("LOAN");
            obj.set_value("LOAN");
            obj.set_index("0");
            this.divData.form.divDataRight.addChild(obj.name, obj);

            obj = new Static("sta35","214","279","105","30",null,null,null,null,null,null,this.divData.form.divDataRight.form);
            obj.set_taborder("70");
            obj.set_text("계산방식");
            obj.set_cssclass("sta_WF_tablelabelE");
            this.divData.form.divDataRight.addChild(obj.name, obj);

            obj = new Combo("cboTY_EZACAL","325","284","105","20",null,null,null,null,null,null,this.divData.form.divDataRight.form);
            obj.set_taborder("22");
            obj.set_codecolumn("CD_CODE");
            obj.set_datacolumn("DS_CODE");
            obj.set_innerdataset("dsTY_EZACAL");
            obj.set_text("");
            obj.set_value("LOAN");
            obj.set_index("0");
            this.divData.form.divDataRight.addChild(obj.name, obj);

            obj = new Static("sta37","437","308","105","30",null,null,null,null,null,null,this.divData.form.divDataRight.form);
            obj.set_taborder("71");
            obj.set_text("일수계산");
            obj.set_cssclass("sta_WF_tablelabelE");
            this.divData.form.divDataRight.addChild(obj.name, obj);

            obj = new Combo("cboTY_YANGDAN","548","313","105","20",null,null,null,null,null,null,this.divData.form.divDataRight.form);
            obj.set_taborder("27");
            obj.set_codecolumn("CD_CODE");
            obj.set_datacolumn("DS_CODE");
            obj.set_innerdataset("dsTY_YANGDAN");
            obj.set_text("LOAN");
            obj.set_value("LOAN");
            obj.set_index("0");
            this.divData.form.divDataRight.addChild(obj.name, obj);

            obj = new Static("sta907","94","412",null,"30","1",null,null,null,null,null,this.divData.form.divDataRight.form);
            obj.set_taborder("78");
            obj.set_cssclass("sta_WF_tablebg");
            obj.set_text("");
            this.divData.form.divDataRight.addChild(obj.name, obj);

            obj = new Static("sta901","437","412","105","30",null,null,null,null,null,null,this.divData.form.divDataRight.form);
            obj.set_taborder("80");
            obj.set_text("원화금액");
            obj.set_cssclass("sta_WF_tablelabel");
            this.divData.form.divDataRight.addChild(obj.name, obj);

            obj = new Static("sta42","660","28","95","30",null,null,null,null,null,null,this.divData.form.divDataRight.form);
            obj.set_taborder("72");
            obj.set_text("계획생성");
            obj.set_cssclass("sta_WF_tablelabel");
            this.divData.form.divDataRight.addChild(obj.name, obj);

            obj = new Edit("txtYN_PLAN","761","33","105","20",null,null,null,null,null,null,this.divData.form.divDataRight.form);
            obj.set_taborder("2");
            obj.set_maxlength("1");
            obj.set_enable("false");
            this.divData.form.divDataRight.addChild(obj.name, obj);

            obj = new Static("sta43","873","28","65","30",null,null,null,null,null,null,this.divData.form.divDataRight.form);
            obj.set_taborder("73");
            obj.set_text("결재상태");
            obj.set_cssclass("sta_WF_tablelabel");
            obj.set_visible("false");
            this.divData.form.divDataRight.addChild(obj.name, obj);

            obj = new Edit("txtTY_APPR","944","33","105","20",null,null,null,null,null,null,this.divData.form.divDataRight.form);
            obj.set_taborder("3");
            obj.set_maxlength("20");
            obj.set_enable("false");
            obj.set_visible("false");
            this.divData.form.divDataRight.addChild(obj.name, obj);

            obj = new Edit("txtNO_APPR","548","357","105","20",null,null,null,null,null,null,this.divData.form.divDataRight.form);
            obj.set_taborder("38");
            obj.set_maxlength("100");
            obj.set_enable("false");
            obj.set_visible("false");
            this.divData.form.divDataRight.addChild(obj.name, obj);

            obj = new Combo("cboTY_TERM","446","62","110","20",null,null,null,null,null,null,this.divData.form.divDataRight.form);
            obj.set_taborder("5");
            obj.set_innerdataset("dsTY_TERM");
            obj.set_codecolumn("CD_CODE");
            obj.set_datacolumn("DS_CODE");
            obj.set_text("");
            obj.set_value("A");
            obj.set_index("0");
            this.divData.form.divDataRight.addChild(obj.name, obj);

            obj = new Static("sta04","1","57","95","30",null,null,null,null,null,null,this.divData.form.divDataRight.form);
            obj.set_taborder("74");
            obj.set_text("대여종류");
            obj.set_cssclass("sta_WF_tablelabelE");
            this.divData.form.divDataRight.addChild(obj.name, obj);

            obj = new Div("cfCD_LOAN","102","62","232","20",null,null,null,null,null,null,this.divData.form.divDataRight.form);
            obj.getSetter("CDTextWidth").set("60");
            obj.set_taborder("4");
            obj.set_url("cmm::cmmCodeFind.xfdl");
            obj.set_enable("true");
            this.divData.form.divDataRight.addChild(obj.name, obj);

            obj = new Calendar("calTO_LOAN","883","91","105","20",null,null,null,null,null,null,this.divData.form.divDataRight.form);
            obj.set_taborder("11");
            obj.set_dateformat("yyyy-MM-dd");
            obj.set_editformat("yyyyMMdd");
            obj.set_autoselect("true");
            obj.set_value("");
            this.divData.form.divDataRight.addChild(obj.name, obj);

            obj = new Static("staCD_TILDE","872","91","10","20",null,null,null,null,null,null,this.divData.form.divDataRight.form);
            obj.set_taborder("75");
            obj.set_text("~");
            this.divData.form.divDataRight.addChild(obj.name, obj);

            obj = new Calendar("calFR_LOAN","761","91","105","20",null,null,null,null,null,null,this.divData.form.divDataRight.form);
            obj.set_taborder("10");
            obj.set_dateformat("yyyy-MM-dd");
            obj.set_editformat("yyyyMMdd");
            obj.set_autoselect("true");
            obj.set_value("");
            this.divData.form.divDataRight.addChild(obj.name, obj);

            obj = new Static("sta32","660","86","95","30",null,null,null,null,null,null,this.divData.form.divDataRight.form);
            obj.set_taborder("76");
            obj.set_text("대여기간");
            obj.set_cssclass("sta_WF_tablelabelE");
            this.divData.form.divDataRight.addChild(obj.name, obj);

            obj = new Edit("txtQN_DEFFERED","761","189","90","20",null,null,null,null,null,null,this.divData.form.divDataRight.form);
            obj.set_taborder("17");
            obj.set_maxlength("100");
            obj.set_enable("false");
            this.divData.form.divDataRight.addChild(obj.name, obj);

            obj = new Static("sta46","660","115","95","30",null,null,null,null,null,null,this.divData.form.divDataRight.form);
            obj.set_taborder("77");
            obj.set_text("완료여부");
            obj.set_cssclass("sta_WF_tablelabelE");
            this.divData.form.divDataRight.addChild(obj.name, obj);

            obj = new Combo("cboTY_REPAY","761","120","150","20",null,null,null,null,null,null,this.divData.form.divDataRight.form);
            obj.set_taborder("13");
            obj.set_codecolumn("CD_CODE");
            obj.set_datacolumn("DS_CODE");
            obj.set_innerdataset("dsTY_REPAY2");
            obj.set_text("LOAN");
            obj.set_value("LOAN");
            obj.set_index("0");
            this.divData.form.divDataRight.addChild(obj.name, obj);

            obj = new Static("sta908","94","441",null,"30","1",null,null,null,null,null,this.divData.form.divDataRight.form);
            obj.set_taborder("79");
            obj.set_cssclass("sta_WF_tablebg");
            obj.set_text("");
            this.divData.form.divDataRight.addChild(obj.name, obj);

            obj = new Static("sta904","1","441","95","30",null,null,null,null,null,null,this.divData.form.divDataRight.form);
            obj.set_taborder("81");
            obj.set_text("수리신고번호");
            obj.set_cssclass("sta_WF_tablelabel");
            this.divData.form.divDataRight.addChild(obj.name, obj);

            obj = new Static("sta902","1","412","95","30",null,null,null,null,null,null,this.divData.form.divDataRight.form);
            obj.set_taborder("82");
            obj.set_text("화폐단위");
            obj.set_cssclass("sta_WF_tablelabel");
            this.divData.form.divDataRight.addChild(obj.name, obj);

            obj = new Static("sta903","214","412","105","30",null,null,null,null,null,null,this.divData.form.divDataRight.form);
            obj.set_taborder("83");
            obj.set_text("환율");
            obj.set_cssclass("sta_WF_tablelabel");
            this.divData.form.divDataRight.addChild(obj.name, obj);

            obj = new Static("sta905","214","441","105","30",null,null,null,null,null,null,this.divData.form.divDataRight.form);
            obj.set_taborder("84");
            obj.set_text("사후신고마감일");
            obj.set_cssclass("sta_WF_tablelabel");
            this.divData.form.divDataRight.addChild(obj.name, obj);

            obj = new Static("sta906","437","441","105","30",null,null,null,null,null,null,this.divData.form.divDataRight.form);
            obj.set_taborder("85");
            obj.set_text("사후신고일");
            obj.set_cssclass("sta_WF_tablelabel");
            this.divData.form.divDataRight.addChild(obj.name, obj);

            obj = new MaskEdit("mskAM_KOR","548","417","105","20",null,null,null,null,null,null,this.divData.form.divDataRight.form);
            obj.set_taborder("34");
            obj.set_format("#,###");
            obj.set_enable("false");
            this.divData.form.divDataRight.addChild(obj.name, obj);

            obj = new Combo("cboCD_CURRENCY","101","417","105","20",null,null,null,null,null,null,this.divData.form.divDataRight.form);
            obj.set_taborder("32");
            obj.set_codecolumn("CD_CODE");
            obj.set_datacolumn("DS_CODE");
            obj.set_innerdataset("dsCD_CURRENCY");
            obj.set_text("LOAN");
            obj.set_value("LOAN");
            obj.set_index("0");
            this.divData.form.divDataRight.addChild(obj.name, obj);

            obj = new MaskEdit("mskRT_CURRENCY","325","417","105","20",null,null,null,null,null,null,this.divData.form.divDataRight.form);
            obj.set_taborder("33");
            obj.set_format("##,###,###,###,###,##0.##");
            this.divData.form.divDataRight.addChild(obj.name, obj);

            obj = new Edit("txtNO_AFTER","101","446","105","20",null,null,null,null,null,null,this.divData.form.divDataRight.form);
            obj.set_taborder("35");
            obj.set_maxlength("100");
            obj.set_enable("true");
            this.divData.form.divDataRight.addChild(obj.name, obj);

            obj = new Calendar("calDT_AFTER1","325","446","105","20",null,null,null,null,null,null,this.divData.form.divDataRight.form);
            obj.set_taborder("36");
            obj.set_dateformat("yyyy-MM-dd");
            obj.set_editformat("yyyyMMdd");
            obj.set_autoselect("true");
            obj.set_value("");
            this.divData.form.divDataRight.addChild(obj.name, obj);

            obj = new Calendar("calDT_AFTER2","548","446","105","20",null,null,null,null,null,null,this.divData.form.divDataRight.form);
            obj.set_taborder("37");
            obj.set_dateformat("yyyy-MM-dd");
            obj.set_editformat("yyyyMMdd");
            obj.set_autoselect("true");
            obj.set_value("");
            this.divData.form.divDataRight.addChild(obj.name, obj);

            obj = new Div("div00","0","470",null,null,"0","-20",null,null,null,null,this.divData.form.divDataRight.form);
            obj.set_taborder("86");
            obj.set_text("div00");
            this.divData.form.divDataRight.addChild(obj.name, obj);

            obj = new Static("sta810","94","0",null,"30","1",null,null,null,null,null,this.divData.form.divDataRight.form.div00.form);
            obj.set_taborder("12");
            obj.set_cssclass("sta_WF_tablebg");
            obj.set_text("");
            this.divData.form.divDataRight.form.div00.addChild(obj.name, obj);

            obj = new Static("sta808","660","0","95","30",null,null,null,null,null,null,this.divData.form.divDataRight.form.div00.form);
            obj.set_taborder("13");
            obj.set_text("담보감정가");
            obj.set_cssclass("sta_WF_tablelabel");
            this.divData.form.divDataRight.form.div00.addChild(obj.name, obj);

            obj = new Static("sta807","437","0","105","30",null,null,null,null,null,null,this.divData.form.divDataRight.form.div00.form);
            obj.set_taborder("14");
            obj.set_text("담보방식");
            obj.set_cssclass("sta_WF_tablelabel");
            this.divData.form.divDataRight.form.div00.addChild(obj.name, obj);

            obj = new Static("sta806","214","0","105","30",null,null,null,null,null,null,this.divData.form.divDataRight.form.div00.form);
            obj.set_taborder("15");
            obj.set_text("담보물건");
            obj.set_cssclass("sta_WF_tablelabel");
            this.divData.form.divDataRight.form.div00.addChild(obj.name, obj);

            obj = new Static("sta805","1","0","95","30",null,null,null,null,null,null,this.divData.form.divDataRight.form.div00.form);
            obj.set_taborder("16");
            obj.set_text("담보여부");
            obj.set_cssclass("sta_WF_tablelabelE");
            this.divData.form.divDataRight.form.div00.addChild(obj.name, obj);

            obj = new Combo("cboYN_DAMBO","101","5","105","20",null,null,null,null,null,null,this.divData.form.divDataRight.form.div00.form);
            obj.set_taborder("0");
            obj.set_codecolumn("CODE");
            obj.set_datacolumn("NAME");
            obj.set_innerdataset("dsYN_DAMBO");
            obj.set_text("LOAN");
            obj.set_value("LOAN");
            obj.set_index("0");
            this.divData.form.divDataRight.form.div00.addChild(obj.name, obj);

            obj = new Edit("txtDS_MULGYUN","325","5","105","20",null,null,null,null,null,null,this.divData.form.divDataRight.form.div00.form);
            obj.set_taborder("1");
            obj.set_maxlength("100");
            obj.set_enable("true");
            this.divData.form.divDataRight.form.div00.addChild(obj.name, obj);

            obj = new Edit("txtDS_DAMBO","548","5","105","20",null,null,null,null,null,null,this.divData.form.divDataRight.form.div00.form);
            obj.set_taborder("2");
            obj.set_maxlength("100");
            obj.set_enable("true");
            this.divData.form.divDataRight.form.div00.addChild(obj.name, obj);

            obj = new MaskEdit("mskAM_GAM","761","5","90","20",null,null,null,null,null,null,this.divData.form.divDataRight.form.div00.form);
            obj.set_taborder("3");
            obj.set_format("#,###,###,###,###,###,##0");
            this.divData.form.divDataRight.form.div00.addChild(obj.name, obj);

            obj = new Static("sta811","1","48",null,"22","1",null,null,null,null,null,this.divData.form.divDataRight.form.div00.form);
            obj.set_taborder("17");
            obj.set_text("기타정보");
            obj.set_cssclass("sta_TITLE_Bg");
            this.divData.form.divDataRight.form.div00.addChild(obj.name, obj);

            obj = new Static("sta815","74","77",null,"30","1",null,null,null,null,null,this.divData.form.divDataRight.form.div00.form);
            obj.set_taborder("18");
            obj.set_cssclass("sta_WF_tablebg");
            obj.set_text("");
            this.divData.form.divDataRight.form.div00.addChild(obj.name, obj);

            obj = new Static("sta819","74","106",null,"30","1",null,null,null,null,null,this.divData.form.divDataRight.form.div00.form);
            obj.set_taborder("19");
            obj.set_cssclass("sta_WF_tablebg");
            this.divData.form.divDataRight.form.div00.addChild(obj.name, obj);

            obj = new Static("sta813","319","77","75","30",null,null,null,null,null,null,this.divData.form.divDataRight.form.div00.form);
            obj.set_taborder("20");
            obj.set_text("투자자상세");
            obj.set_cssclass("sta_WF_tablelabel");
            this.divData.form.divDataRight.form.div00.addChild(obj.name, obj);

            obj = new Static("sta821","74","164",null,null,"0","0",null,null,null,null,this.divData.form.divDataRight.form.div00.form);
            obj.set_taborder("21");
            obj.set_cssclass("sta_WF_tablebg");
            this.divData.form.divDataRight.form.div00.addChild(obj.name, obj);

            obj = new Static("sta812","1","77","75","30",null,null,null,null,null,null,this.divData.form.divDataRight.form.div00.form);
            obj.set_taborder("23");
            obj.set_text("보증내역");
            obj.set_cssclass("sta_WF_tablelabel");
            this.divData.form.divDataRight.form.div00.addChild(obj.name, obj);

            obj = new Static("sta817","319","106","75","30",null,null,null,null,null,null,this.divData.form.divDataRight.form.div00.form);
            obj.set_taborder("24");
            obj.set_text("이자계좌");
            obj.set_cssclass("sta_WF_tablelabelE");
            this.divData.form.divDataRight.form.div00.addChild(obj.name, obj);

            obj = new Static("sta814","660","77","75","30",null,null,null,null,null,null,this.divData.form.divDataRight.form.div00.form);
            obj.set_taborder("25");
            obj.set_text("브랜치전송");
            obj.set_cssclass("sta_WF_tablelabelE");
            this.divData.form.divDataRight.form.div00.addChild(obj.name, obj);

            obj = new Static("sta816","1","106","75","30",null,null,null,null,null,null,this.divData.form.divDataRight.form.div00.form);
            obj.set_taborder("26");
            obj.set_text("대여계좌");
            obj.set_cssclass("sta_WF_tablelabelE");
            this.divData.form.divDataRight.form.div00.addChild(obj.name, obj);

            obj = new Static("sta820","1","164","75",null,null,"0",null,null,null,null,this.divData.form.divDataRight.form.div00.form);
            obj.set_taborder("27");
            obj.set_cssclass("sta_WF_tablelabel");
            obj.set_text("비고");
            this.divData.form.divDataRight.form.div00.addChild(obj.name, obj);

            obj = new TextArea("TeaRM_BIGO","81","171","902",null,null,"6",null,null,null,null,this.divData.form.divDataRight.form.div00.form);
            obj.set_taborder("11");
            obj.set_maxlength("200");
            this.divData.form.divDataRight.form.div00.addChild(obj.name, obj);

            obj = new Edit("txtDS_BOND","81","82","232","20",null,null,null,null,null,null,this.divData.form.divDataRight.form.div00.form);
            obj.set_taborder("4");
            obj.set_maxlength("100");
            obj.set_enable("true");
            this.divData.form.divDataRight.form.div00.addChild(obj.name, obj);

            obj = new Edit("txtDS_INVESTOR","400","82","253","20",null,null,null,null,null,null,this.divData.form.divDataRight.form.div00.form);
            obj.set_taborder("5");
            obj.set_maxlength("100");
            obj.set_enable("true");
            this.divData.form.divDataRight.form.div00.addChild(obj.name, obj);

            obj = new Combo("cboTY_CMS","741","82","241","20",null,null,null,null,null,null,this.divData.form.divDataRight.form.div00.form);
            obj.set_taborder("6");
            obj.set_codecolumn("CD_CODE");
            obj.set_datacolumn("DS_CODE");
            obj.set_innerdataset("dsTY_CMS");
            obj.set_text("LOAN");
            obj.set_value("LOAN");
            obj.set_index("0");
            this.divData.form.divDataRight.form.div00.addChild(obj.name, obj);

            obj = new Div("cfNO_ACCOUNT_LOAN","81","111","232","20",null,null,null,null,null,null,this.divData.form.divDataRight.form.div00.form);
            obj.getSetter("CDTextWidth").set("110");
            obj.set_taborder("7");
            obj.set_url("cmm::cmmCodeFind.xfdl");
            obj.set_enable("true");
            this.divData.form.divDataRight.form.div00.addChild(obj.name, obj);

            obj = new Div("cfNO_ACCOUNT","400","111","253","20",null,null,null,null,null,null,this.divData.form.divDataRight.form.div00.form);
            obj.getSetter("CDTextWidth").set("110");
            obj.set_taborder("8");
            obj.set_url("cmm::cmmCodeFind.xfdl");
            obj.set_enable("true");
            this.divData.form.divDataRight.form.div00.addChild(obj.name, obj);

            obj = new Static("sta00","74","135",null,"30","1",null,null,null,null,null,this.divData.form.divDataRight.form.div00.form);
            obj.set_taborder("28");
            obj.set_cssclass("sta_WF_tablebg");
            this.divData.form.divDataRight.form.div00.addChild(obj.name, obj);

            obj = new Static("sta818","1","135","75","30",null,null,null,null,null,null,this.divData.form.divDataRight.form.div00.form);
            obj.set_taborder("22");
            obj.set_text("최초대여");
            obj.set_cssclass("sta_WF_tablelabel");
            this.divData.form.divDataRight.form.div00.addChild(obj.name, obj);

            obj = new Div("cfCNO_PARENTS","81","140","232","20",null,null,null,null,null,null,this.divData.form.divDataRight.form.div00.form);
            obj.getSetter("CDTextWidth").set("90");
            obj.set_taborder("10");
            obj.set_url("cmm::cmmCodeFind.xfdl");
            obj.set_enable("true");
            this.divData.form.divDataRight.form.div00.addChild(obj.name, obj);

            obj = new Static("sta01","660","106","75","30",null,null,null,null,null,null,this.divData.form.divDataRight.form.div00.form);
            obj.set_taborder("29");
            obj.set_text("회수계좌");
            obj.set_cssclass("sta_WF_tablelabelE");
            this.divData.form.divDataRight.form.div00.addChild(obj.name, obj);

            obj = new Div("cfNO_ACCOUNT_SANG","741","111","241","20",null,null,null,null,null,null,this.divData.form.divDataRight.form.div00.form);
            obj.getSetter("CDTextWidth").set("110");
            obj.set_taborder("9");
            obj.set_url("cmm::cmmCodeFind.xfdl");
            obj.set_enable("true");
            this.divData.form.divDataRight.form.div00.addChild(obj.name, obj);

            obj = new Static("sta809","94","383",null,"30","1",null,null,null,null,null,this.divData.form.divDataRight.form);
            obj.set_taborder("87");
            obj.set_cssclass("sta_WF_tablebg");
            obj.set_text("");
            this.divData.form.divDataRight.addChild(obj.name, obj);

            obj = new Static("sta801","1","383","95","30",null,null,null,null,null,null,this.divData.form.divDataRight.form);
            obj.set_taborder("88");
            obj.set_text("한도");
            obj.set_cssclass("sta_WF_tablelabelE");
            this.divData.form.divDataRight.addChild(obj.name, obj);

            obj = new MaskEdit("mskAM_LOANMAX","101","388","105","20",null,null,null,null,null,null,this.divData.form.divDataRight.form);
            obj.set_taborder("28");
            obj.set_format("#,###,###,###,###,###,##0");
            this.divData.form.divDataRight.addChild(obj.name, obj);

            obj = new Static("sta802","214","383","105","30",null,null,null,null,null,null,this.divData.form.divDataRight.form);
            obj.set_taborder("89");
            obj.set_text("대여");
            obj.set_cssclass("sta_WF_tablelabelE");
            this.divData.form.divDataRight.addChild(obj.name, obj);

            obj = new MaskEdit("mskAM_LOAN","325","388","105","20",null,null,null,null,null,null,this.divData.form.divDataRight.form);
            obj.set_taborder("29");
            obj.set_format("#,###,###,###,###,###,##0");
            this.divData.form.divDataRight.addChild(obj.name, obj);

            obj = new Static("sta803","437","383","105","30",null,null,null,null,null,null,this.divData.form.divDataRight.form);
            obj.set_taborder("90");
            obj.set_text("회수");
            obj.set_cssclass("sta_WF_tablelabel");
            this.divData.form.divDataRight.addChild(obj.name, obj);

            obj = new Static("sta804","660","383","95","30",null,null,null,null,null,null,this.divData.form.divDataRight.form);
            obj.set_taborder("91");
            obj.set_text("잔액");
            obj.set_cssclass("sta_WF_tablelabel");
            this.divData.form.divDataRight.addChild(obj.name, obj);

            obj = new MaskEdit("mskAM_SANG","548","388","105","20",null,null,null,null,null,null,this.divData.form.divDataRight.form);
            obj.set_taborder("30");
            obj.set_format("#,###,###,###,###,###,##0");
            obj.set_autoselect("false");
            obj.set_enable("false");
            this.divData.form.divDataRight.addChild(obj.name, obj);

            obj = new MaskEdit("mskAM_JAN","761","388","90","20",null,null,null,null,null,null,this.divData.form.divDataRight.form);
            obj.set_taborder("31");
            obj.set_format("#,###,###,###,###,###,##0");
            obj.set_autoselect("false");
            obj.set_enable("false");
            this.divData.form.divDataRight.addChild(obj.name, obj);

            obj = new Static("sta909","660","412","95","30",null,null,null,null,null,null,this.divData.form.divDataRight.form);
            obj.set_taborder("92");
            obj.set_text("원화고정");
            obj.set_cssclass("sta_WF_tablelabel");
            this.divData.form.divDataRight.addChild(obj.name, obj);

            obj = new Combo("cboYN_WONFIX","761","417","90","20",null,null,null,null,null,null,this.divData.form.divDataRight.form);
            obj.set_taborder("93");
            obj.set_codecolumn("CD_CODE");
            obj.set_datacolumn("DS_CODE");
            obj.set_innerdataset("dsYN_WONFIX");
            obj.set_text("LOAN");
            obj.set_value("LOAN");
            obj.set_index("0");
            this.divData.form.divDataRight.addChild(obj.name, obj);

            obj = new Static("sta23_00","1","308","95","30",null,null,null,null,null,null,this.divData.form.divDataRight.form);
            obj.set_taborder("94");
            obj.set_text("방식");
            obj.set_cssclass("sta_WF_tablelabelE");
            this.divData.form.divDataRight.addChild(obj.name, obj);

            obj = new Static("sta25","1","308","105","30",null,null,null,null,null,null,this.divData.form.divDataRight.form);
            obj.set_taborder("68");
            obj.set_text("이자주기(개월)");
            obj.set_cssclass("sta_WF_tablelabelE");
            this.divData.form.divDataRight.addChild(obj.name, obj);

            obj = new MaskEdit("mskTR_INTTERM","113","313","95","20",null,null,null,null,null,null,this.divData.form.divDataRight.form);
            obj.set_taborder("25");
            obj.set_format("#,###,###,##0");
            this.divData.form.divDataRight.addChild(obj.name, obj);

            obj = new Static("sta18_00","437","250","105","30",null,null,null,null,null,null,this.divData.form.divDataRight.form);
            obj.set_taborder("96");
            obj.set_text("연체금리");
            obj.set_cssclass("sta_WF_tablelabelE");
            this.divData.form.divDataRight.addChild(obj.name, obj);

            obj = new MaskEdit("mskRT_OVERDUE","548","255","105","20",null,null,null,null,null,null,this.divData.form.divDataRight.form);
            obj.set_taborder("97");
            obj.set_format("#,##0.####");
            this.divData.form.divDataRight.addChild(obj.name, obj);

            obj = new Combo("YN_JANGDAN","560","62","95","20",null,null,null,null,null,null,this.divData.form.divDataRight.form);
            obj.set_taborder("98");
            obj.set_codecolumn("CODE");
            obj.set_datacolumn("NAME");
            obj.set_innerdataset("dsYN_JANGDAN");
            obj.set_text("Y");
            obj.set_value("Y");
            obj.set_index("0");
            this.divData.form.divDataRight.addChild(obj.name, obj);

            obj = new Div("divDataLeft","0","0",null,null,"divSplitter:5","0",null,null,null,null,this.divData.form);
            obj.set_taborder("0");
            this.divData.addChild(obj.name, obj);

            obj = new Grid("objGrid","0","0",null,null,"0","0",null,null,null,null,this.divData.form.divDataLeft.form);
            obj.set_taborder("0");
            obj._setContents("<Formats><Format id=\"default\"/></Formats>");
            this.divData.form.divDataLeft.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this
            obj = new Layout("default","",this._adjust_width,this._adjust_height,this,function(p){});
            this.addLayout(obj.name, obj);
            
            // BindItem Information
            obj = new BindItem("item0","divData.form.divDataRight.form.txtNO_LOAN","value","dsList","NO_LOAN");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item100","divData.form.divDataRight.form.cfCD_CORP2.form.CDTextBox","value","dsList","CD_CORP");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item101","divData.form.divDataRight.form.cfCD_CORP2.form.DSTextBox","value","dsList","DS_CORP");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item2","divData.form.divDataRight.form.txtNM_LOAN","value","dsList","NM_LOAN");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item3","divData.form.divDataRight.form.cfCD_LOAN.form.CDTextBox","value","dsList","CD_LOAN");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item4","divData.form.divDataRight.form.cfCD_LOAN.form.DSTextBox","value","dsList","DS_LOAN");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item5","divData.form.divDataRight.form.cboTY_TERM","value","dsList","TY_TERM");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item6","divData.form.divDataRight.form.cboTY_RAISE","value","dsList","TY_RAISE");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item7","divData.form.divDataRight.form.cfCD_LOANBANK.form.CDTextBox","value","dsList","CD_LOANBANK");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item8","divData.form.divDataRight.form.cfCD_LOANBANK.form.DSTextBox","value","dsList","DS_VENDOR");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item9","divData.form.divDataRight.form.cboYN_RELATIVE","value","dsList","YN_RELATIVE");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item10","divData.form.divDataRight.form.calFR_LOAN","value","dsList","FR_LOAN");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item11","divData.form.divDataRight.form.calTO_LOAN","value","dsList","TO_LOAN");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item12","divData.form.divDataRight.form.cfCD_DEPT.form.CDTextBox","value","dsList","CD_DEPT");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item13","divData.form.divDataRight.form.cfCD_DEPT.form.DSTextBox","value","dsList","DS_DEPT_ACNT");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item14","divData.form.divDataRight.form.cboTY_SANG","value","dsList","TY_SANG");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item15","divData.form.divDataRight.form.mskTR_SANG","value","dsList","TR_SANG");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item16","divData.form.divDataRight.form.calDT_ORIGINFROM","value","dsList","DT_ORIGINFROM");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item19","divData.form.divDataRight.form.mskRT_EZA","value","dsList","RT_EZA");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item20","divData.form.divDataRight.form.mskRT_SPREAD","value","dsList","RT_SPREAD");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item21","divData.form.divDataRight.form.cboTY_EZA","value","dsList","TY_EZA");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item22","divData.form.divDataRight.form.cboTY_INTLOCK","value","dsList","TY_INTLOCK");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item23","divData.form.divDataRight.form.cboTY_DANBOK","value","dsList","TY_DANBOK");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item24","divData.form.divDataRight.form.mskTR_EZASTD","value","dsList","TR_EZASTD");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item25","divData.form.divDataRight.form.mskTR_INTTERM","value","dsList","TR_INTTERM");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item26","divData.form.divDataRight.form.cboTY_SUNHOO","value","dsList","TY_SUNHOO");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item27","divData.form.divDataRight.form.cboTY_EZACAL","value","dsList","TY_EZACAL");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item28","divData.form.divDataRight.form.cboTY_YANGDAN","value","dsList","TY_YANGDAN");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item33","divData.form.divDataRight.form.txtYN_PLAN","value","dsList","YN_PLAN");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item34","divData.form.divDataRight.form.txtTY_APPR","value","dsList","DS_APPR");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item35","divData.form.divDataRight.form.txtNO_APPR","value","dsList","NO_APPR");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item1","divData.form.divDataRight.form.txtQN_DEFFERED","value","dsList","QN_DEFFERED");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item18","divData.form.divDataRight.form.cboTY_REPAY","value","dsList","TY_REPAY");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item36","divData.form.divDataRight.form.mskAM_KOR","value","dsList","AM_KOR");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item51","divData.form.divDataRight.form.cboCD_CURRENCY","value","dsList","CD_CURRENCY");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item52","divData.form.divDataRight.form.mskRT_CURRENCY","value","dsList","RT_CURRENCY");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item53","divData.form.divDataRight.form.txtNO_AFTER","value","dsList","NO_AFTER");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item54","divData.form.divDataRight.form.calDT_AFTER1","value","dsList","DT_AFTER1");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item55","divData.form.divDataRight.form.calDT_AFTER2","value","dsList","DT_AFTER2");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item30","divData.form.divDataRight.form.mskAM_LOANMAX","value","dsList","AM_LOANMAX");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item38","divData.form.divDataRight.form.div00.form.cboYN_DAMBO","value","dsList","YN_DAMBO");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item39","divData.form.divDataRight.form.div00.form.txtDS_MULGYUN","value","dsList","DS_MULGYUN");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item40","divData.form.divDataRight.form.div00.form.txtDS_DAMBO","value","dsList","DS_DAMBO");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item41","divData.form.divDataRight.form.div00.form.mskAM_GAM","value","dsList","AM_GAM");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item42","divData.form.divDataRight.form.div00.form.TeaRM_BIGO","value","dsList","RM_BIGO");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item43","divData.form.divDataRight.form.div00.form.txtDS_BOND","value","dsList","DS_BOND");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item44","divData.form.divDataRight.form.div00.form.txtDS_INVESTOR","value","dsList","DS_INVESTOR");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item45","divData.form.divDataRight.form.div00.form.cboTY_CMS","value","dsList","TY_CMS");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item46","divData.form.divDataRight.form.div00.form.cfNO_ACCOUNT_LOAN.form.CDTextBox","value","dsList","NO_ACCOUNT_LOAN");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item47","divData.form.divDataRight.form.div00.form.cfNO_ACCOUNT_LOAN.form.DSTextBox","value","dsList","DS_BANK_LOAN");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item48","divData.form.divDataRight.form.cfNO_ACCOUNT_LOAN.form.CDTextBox","value","dsList","NO_ACCOUNT_LOAN");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item49","divData.form.divDataRight.form.cfNO_ACCOUNT_LOAN.form.DSTextBox","value","dsList","DS_BANK_LOAN");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item50","divData.form.divDataRight.form.div00.form.cfNO_ACCOUNT.form.CDTextBox","value","dsList","NO_ACCOUNT");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item56","divData.form.divDataRight.form.div00.form.cfNO_ACCOUNT.form.DSTextBox","value","dsList","DS_BANK");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item57","divData.form.divDataRight.form.div00.form.cfCNO_PARENTS.form.CDTextBox","value","dsList","NO_PARENTS");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item58","divData.form.divDataRight.form.div00.form.cfCNO_PARENTS.form.DSTextBox","value","dsList","DS_PARENTS");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item17","divData.form.divDataRight.form.div00.form.cfNO_ACCOUNT_SANG.form.CDTextBox","value","dsList","NO_ACCOUNT_SANG");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item59","divData.form.divDataRight.form.div00.form.cfNO_ACCOUNT_SANG.form.DSTextBox","value","dsList","DS_BANK_SANG");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item29","divData.form.divDataRight.form.div00.form.mskAM_LOANMAX","value","dsList","AM_LOANMAX");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item31","divData.form.divDataRight.form.mskAM_LOAN","value","dsList","AM_LOAN");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item32","divData.form.divDataRight.form.mskAM_SANG","value","dsList","AM_SANG");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item37","divData.form.divDataRight.form.mskAM_JAN","value","dsList","AM_JAN");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item60","divData.form.divDataRight.form.cboYN_WONFIX","value","dsList","YN_WONFIX");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item61","divData.form.divDataRight.form.mskRT_OVERDUE","value","dsList","RT_OVERDUE");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item62","divData.form.divDataRight.form.YN_JANGDAN","codecolumn","dsList","");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item63","divData.form.divDataRight.form.YN_JANGDAN","value","dsList","YN_JANGDAN");
            this.addChild(obj.name, obj);
            obj.bind();
            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {
            this._addPreloadList("fdl","cmm::cmmCodeFind.xfdl");
        };
        
        // User Script
        this.registerScript("DFG_LOAN.xfdl", function() {
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

        // 	this.divData.form.divDataRight.form.sta31.set_height("0px");
        // 	this.divData.form.divDataRight.form.sta41.set_height("0px");
        // 	this.divData.form.divDataRight.form.sta13.set_height("0px");
        // 	this.divData.form.divDataRight.form.sta14.set_height("0px");
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
        	 this.btnPlanCreat = this.gfnFormButtonAdd("btnPlanCreat", "fnPlanCreat", "계획생성");
        	 this.btnPlanPerform = this.gfnFormButtonAdd("btnPlanPerform", "fnPlanPerform", "계획/실적");
        	 this.btnChngInfoInsert = this.gfnFormButtonAdd("btnChngInfoInsert", "fnChngInfoInsert", "변동정보등록");
        	 this.btnFileUpload = this.gfnFormButtonAdd("btnFileUpload", "fnFileUpload", " 첨부파일 ");
        // 	 this.btnElctrncPmntUp = this.gfnFormButtonAdd("btnElctrncPmntUp", "fnElctrncPmntUp", "전자결재상신");
        // 	 this.btnElctrncPmntSrch = this.gfnFormButtonAdd("btnElctrncPmntSrch", "fnElctrncPmntSrch", "전자결재조회");
        };

        /************************************************************************
         * 변수 선언
         ************************************************************************/
        this.fnSetVariable = function() {

        	// 조회조건
        	this.ScfCD_CORP  = this.divSearch.form.cfCD_CORP;				// 법인코드
        	this.ScfCD_LOAN = this.divSearch.form.ccfCD_LOAN;				// 대여종류
        	this.ScfNO_LOAN = this.divSearch.form.cfNO_LOAN;				// 관리번호
        	this.ScboTY_REPAY = this.divSearch.form.cboTY_REPAY;			// 완료여부

        	this.dxGrid = this.divData.form.divDataLeft.form.objGrid;		// 그리드
        	this.grSearch = this.FormInfo.GR_SEARCH;						// 권한?
        	this.cdGroup = this.gfnIsNull(this.AuthClient.CD_GROUP) ? "" : this.AuthClient.CD_GROUP;						// 그룹코드


        	// 기본정보
        	this.txtNO_LOAN = this.divData.form.divDataRight.form.txtNO_LOAN;			// 관리번호
        	this.cfCD_CORP2 = this.divData.form.divDataRight.form.cfCD_CORP2;			// 법인코드
        	this.txtNM_LOAN = this.divData.form.divDataRight.form.txtNM_LOAN;			// 대여금명
        	this.cfCD_LOAN = this.divData.form.divDataRight.form.cfCD_LOAN;				// 대여종류
        	this.cboTY_TERM = this.divData.form.divDataRight.form.cboTY_TERM;			// 장단기
        	this.cboTY_RAISE = this.divData.form.divDataRight.form.cboTY_RAISE;			// 조달방법
        	this.cfCD_LOANBANK = this.divData.form.divDataRight.form.cfCD_LOANBANK;		// 대여기관
        	this.cboYN_RELATIVE = this.divData.form.divDataRight.form.cboYN_RELATIVE; 	// 관계사
        	this.calFR_LOAN = this.divData.form.divDataRight.form.calFR_LOAN; 			// 대여기간(from)
        	this.calTO_LOAN = this.divData.form.divDataRight.form.calTO_LOAN; 			// 대여기간(to)
        	this.cfCD_DEPT = this.divData.form.divDataRight.form.cfCD_DEPT; 			// 귀속부서
        	this.cboYN_JANGDAN = this.divData.form.divDataRight.form.cboYN_JANGDAN;	    // 장단기대체여부 2021.12.13

        	// 원금회수조건
        	this.cboTY_SANG = this.divData.form.divDataRight.form.cboTY_SANG;				// 원금회수방법
        	this.mskTR_SANG = this.divData.form.divDataRight.form.mskTR_SANG;				// 회수주기
        	this.calDT_ORIGINFROM = this.divData.form.divDataRight.form.calDT_ORIGINFROM;	// 회수기준일
        	//this.calDT_ORIGINTO = this.divData.form.divDataRight.form.calDT_ORIGINTO;		// 원금회수기간(to)
        	this.mskQN_DEFFERED = this.divData.form.divDataRight.form.mskQN_DEFFERED;		// 회수거치기간


        	// 이자수취방식
        	this.mskRT_EZA = this.divData.form.divDataRight.form.mskRT_EZA;					// 기준금리
        	this.mskRT_SPREAD = this.divData.form.divDataRight.form.mskRT_SPREAD;			// 가산금리
        	this.mskRT_OVERDUE = this.divData.form.divDataRight.form.mskRT_OVERDUE;         // 연체금리
        	this.cboTY_EZA = this.divData.form.divDataRight.form.cboTY_EZA;					// 유형
        	this.cboTY_INTLOCK = this.divData.form.divDataRight.form.cboTY_INTLOCK;			// 연동
        	this.cboTY_DANBOK = this.divData.form.divDataRight.form.cboTY_DANBOK;			// 방식
        	this.mskTR_EZASTD = this.divData.form.divDataRight.form.mskTR_EZASTD;			// 수취일
        	this.mskTR_INTTERM = this.divData.form.divDataRight.form.mskTR_INTTERM;			// 주기(개월)
        	this.cboTY_SUNHOO = this.divData.form.divDataRight.form.cboTY_SUNHOO;			// 수취기준
        	this.cboTY_EZACAL = this.divData.form.divDataRight.form.cboTY_EZACAL;			// 계산방식
        	this.cboTY_YANGDAN = this.divData.form.divDataRight.form.cboTY_YANGDAN;			// 일수계산


        	// 진행정보 및 담보
        	this.mskAM_LOANMAX = this.divData.form.divDataRight.form.mskAM_LOANMAX;		// 한도
        	this.mskAM_LOAN = this.divData.form.divDataRight.form.mskAM_LOAN;				// 대여
        	this.mskAM_SANG = this.divData.form.divDataRight.form.mskAM_SANG;				// 회수
        	this.mskAM_JAN = this.divData.form.divDataRight.form.mskAM_JAN;				// 잔액

        	this.txtYN_PLAN = this.divData.form.divDataRight.form.txtYN_PLAN;				// 계획생성
        	this.txtTY_APPR = this.divData.form.divDataRight.form.txtTY_APPR;				// 결재상태
        	this.txtNO_APPR = this.divData.form.divDataRight.form.txtNO_APPR;				// 전자결재문서번호
        	this.cboTY_REPAY = this.divData.form.divDataRight.form.cboTY_REPAY;				// 완료여부

        	this.cboYN_DAMBO = this.divData.form.divDataRight.form.div00.form.cboYN_DAMBO;				// 담보여부
        	this.txtDS_MULGYUN = this.divData.form.divDataRight.form.div00.form.txtDS_MULGYUN;			// 담보물건
        	this.txtDS_DAMBO = this.divData.form.divDataRight.form.div00.form.txtDS_DAMBO;				// 담보방식
        	this.mskAM_GAM = this.divData.form.divDataRight.form.div00.form.mskAM_GAM;					// 담보감정가


        	// 기타정보
        	this.txtDS_BOND = this.divData.form.divDataRight.form.div00.form.txtDS_BOND;				// 보증내역
        	this.txtDS_INVESTOR = this.divData.form.divDataRight.form.div00.form.txtDS_INVESTOR;		// 투자자상세
        	this.cboTY_CMS = this.divData.form.divDataRight.form.div00.form.cboTY_CMS;					// 브랜치전송
        	this.cfNO_ACCOUNT_LOAN = this.divData.form.divDataRight.form.div00.form.cfNO_ACCOUNT_LOAN;	// 대여계좌
        	this.cfNO_ACCOUNT = this.divData.form.divDataRight.form.div00.form.cfNO_ACCOUNT;			// 이자계좌
        	this.cfNO_ACCOUNT_SANG = this.divData.form.divDataRight.form.div00.form.cfNO_ACCOUNT_SANG;	// 회수계좌
        	this.cfCNO_PARENTS = this.divData.form.divDataRight.form.div00.form.cfCNO_PARENTS;			// 최초대여
        	this.TeaRM_BIGO = this.divData.form.divDataRight.form.div00.form.TeaRM_BIGO;				// 비고

        	// 진행정보 및 담보에 추가된 항목
        	this.mskAM_KOR = this.divData.form.divDataRight.form.mskAM_KOR;				// 원화금액
        	this.cboCD_CURRENCY = this.divData.form.divDataRight.form.cboCD_CURRENCY;	// 화폐단위
        	this.mskRT_CURRENCY = this.divData.form.divDataRight.form.mskRT_CURRENCY;	// 환율
        	this.txtNO_AFTER = this.divData.form.divDataRight.form.txtNO_AFTER;			// 신고수리번호
        	this.calDT_AFTER1 = this.divData.form.divDataRight.form.calDT_AFTER1;		// 사후신고마감일
        	this.calDT_AFTER2 = this.divData.form.divDataRight.form.calDT_AFTER2;		// 사후신고일
        };

        /************************************************************************
         * 이벤트 설정
         ************************************************************************/
        this.fnSetEvent = function() {
        	this.ScfCD_CORP.CodeFindName = "DZX_CFCORP";					// 법인코드(조회조건)
        	this.ScfCD_LOAN.CodeFindName = "DFX_CFLOANCODE";				// 대여종류(조회조건)
        	this.ScfNO_LOAN.CodeFindName = "DFX_CFNO_LOAN";					// 관리번호(조회조건)

        	this.cfCD_CORP2.CodeFindName = "DZX_CFCORP"; 					// 법인코드
        	this.cfCD_LOAN.CodeFindName = "DFX_CFLOANCODE";					// 대여종류
        	this.cfCD_LOANBANK.CodeFindName = "DFX_CFVENDOR";				// 대여기관(거래처)
        	this.cfCD_DEPT.CodeFindName = "DFX_CFACNTUNIT";					// 귀속부서
        	this.cfNO_ACCOUNT_LOAN.CodeFindName = "DFX_CFACCOUNTNO_SUJI";	// 대여계좌
        	this.cfNO_ACCOUNT.CodeFindName = "DFX_CFACCOUNTNO_SUJI";		// 이자계좌
        	this.cfNO_ACCOUNT_SANG.CodeFindName = "DFX_CFACCOUNTNO_SUJI";	// 회수계좌

        	this.cfCNO_PARENTS.CodeFindName = "DFX_CFNO_LOAN";				// 최초대여(관리번호)

        	this.ScfCD_CORP.BeforeUserDataSetParam = "fnBeforeUserDataSetParam";
        	this.ScfCD_LOAN.BeforeUserDataSetParam = "fnBeforeUserDataSetParam";
        	this.ScfNO_LOAN.BeforeUserDataSetParam = "fnBeforeUserDataSetParam";

        	this.cfCD_CORP2.BeforeUserDataSetParam = "fnBeforeUserDataSetParam";
        	this.cfCD_LOAN.BeforeUserDataSetParam = "fnBeforeUserDataSetParam";
        	this.cfCD_LOANBANK.BeforeUserDataSetParam = "fnBeforeUserDataSetParam";
        	this.cfCD_DEPT.BeforeUserDataSetParam = "fnBeforeUserDataSetParam";
        	this.cfNO_ACCOUNT_LOAN.BeforeUserDataSetParam = "fnBeforeUserDataSetParam";
        	this.cfNO_ACCOUNT.BeforeUserDataSetParam = "fnBeforeUserDataSetParam";
        	this.cfNO_ACCOUNT_SANG.BeforeUserDataSetParam = "fnBeforeUserDataSetParam";
        	this.cfCNO_PARENTS.BeforeUserDataSetParam = "fnBeforeUserDataSetParam";

        	this.ScfCD_CORP.AfterCDTextChanged = "fnAfterCDTextChanged";
        	this.ScfCD_LOAN.AfterCDTextChanged = "fnAfterCDTextChanged";
        	this.ScfNO_LOAN.AfterCDTextChanged = "fnAfterCDTextChanged";

        	this.cfCD_CORP2.AfterCDTextChanged = "fnAfterCDTextChanged";
        	this.cfCD_LOAN.AfterCDTextChanged = "fnAfterCDTextChanged";
        	this.cfCD_LOANBANK.AfterCDTextChanged = "fnAfterCDTextChanged";
        	this.cfCD_DEPT.AfterCDTextChanged = "fnAfterCDTextChanged";
        	this.cfNO_ACCOUNT_LOAN.AfterCDTextChanged = "fnAfterCDTextChanged";
        	this.cfNO_ACCOUNT.AfterCDTextChanged = "fnAfterCDTextChanged";
        	this.cfNO_ACCOUNT_SANG.AfterCDTextChanged = "fnAfterCDTextChanged";
        	this.cfCNO_PARENTS.AfterCDTextChanged = "fnAfterCDTextChanged";

        	// 그리드 초기화
        	this.gfnGridInit(this.dxGrid, this.dsList, "DF", "DFG_LOANREG");
        	this.dxGrid.BeforeUserDataSetParam = "fnGrid_BeforuserDataSetParam";
        	this.dxGrid.AfterCDTextChanged = "fnGrid_AfterCDTextChanged";
        	this.dxGrid.addEventHandler("onselectchanged", this.fnGrid_RowCellChanged, this);

        	if (this.gfnIsNull(this.ScfCD_CORP.form.CDTextBox.value)) {
        		this.ScfCD_CORP.form.DSTextBox.set_value(this.AuthClient.DS_CORP);
        		this.ScfCD_CORP.form.CDTextBox.set_value(this.AuthClient.CD_CORP);
        	}


        	// 법인코드 포커스추가
        	this.ScfCD_CORP.form.CDTextBox.setFocus();

        	// 권한체크 - 해당부서내역만 조회가능
        	if (nexacro.toNumber(this.grSearch) >= 2) {
        		this.ScfCD_CORP.set_enable(false);
        	}

        	this.divData.form.divDataRight.form.cboYN_WONFIX.set_index(1);

        	this.fnVisibleComp(false);

        // 	if (this.grSearch != "1") {
        // 		 this.btnPlanCreat.set_enable(false);
        // 		 this.btnPlanPerform.set_enable(false);
        // 		 this.btnChngInfoInsert.set_enable(false);
        // 		 this.btnElctrncPmntUp.set_enable(false);
        // 		 this.btnElctrncPmntSrch.set_enable(false);
        // 	} else {
        // 		 this.btnPlanCreat.set_enable(true);
        // 		 this.btnPlanPerform.set_enable(true);
        // 		 this.btnChngInfoInsert.set_enable(true);
        // 		 this.btnElctrncPmntUp.set_enable(true);
        // 		 this.btnElctrncPmntSrch.set_enable(true);
        // 	}
        };

        /************************************************************************
         * 파라미터 설정
         ************************************************************************/
        this.fnSetParameter = function() {
        	//검색조건 데이터셋
        	this.dsSelect = new Dataset();
        	this.dsSelect.addColumn("CD_CORP", "string");
        	this.dsSelect.addColumn("CD_LOAN", "string");
        	this.dsSelect.addColumn("NO_LOAN", "string");
        	this.dsSelect.addColumn("TY_REPAY", "string");
        	this.dsSelect.addColumn("ID_USER", "string");

        	this.dsInsert = new Dataset();
        	this.dsInsert.addColumn("CD_CORP", "string");
        	this.dsInsert.addColumn("CD_LOAN", "string");
        	this.dsInsert.addColumn("TY_TERM", "string");
        	this.dsInsert.addColumn("TY_RAISE", "string");
        	this.dsInsert.addColumn("NM_LOAN", "string");
        	this.dsInsert.addColumn("FR_LOAN", "string");
        	this.dsInsert.addColumn("TO_LOAN", "string");
        	this.dsInsert.addColumn("CD_LOANBANK", "string");
        	this.dsInsert.addColumn("YN_RELATIVE", "string");
        	this.dsInsert.addColumn("CD_DEPT", "string");
        	this.dsInsert.addColumn("TY_SANG", "string");
        	this.dsInsert.addColumn("TR_SANG", "bigdecimal");
        	this.dsInsert.addColumn("DT_ORIGINFROM", "string");
        	//this.dsInsert.addColumn("DT_ORIGINTO", "string");
        	this.dsInsert.addColumn("RT_EZA", "bigdecimal");
        	this.dsInsert.addColumn("RT_SPREAD", "bigdecimal");
        	this.dsInsert.addColumn("TY_EZA", "string");
        	this.dsInsert.addColumn("TY_INTLOCK", "string");
        	this.dsInsert.addColumn("TY_DANBOK", "string");
        	this.dsInsert.addColumn("TR_EZASTD", "bigdecimal");
        	this.dsInsert.addColumn("TR_INTTERM", "bigdecimal");
        	this.dsInsert.addColumn("TY_SUNHOO", "string");
        	this.dsInsert.addColumn("TY_EZACAL", "string");
        	this.dsInsert.addColumn("TY_YANGDAN", "string");
        	this.dsInsert.addColumn("AM_LOANMAX", "bigdecimal");
        	this.dsInsert.addColumn("AM_LOAN", "bigdecimal");
        	this.dsInsert.addColumn("TY_REPAY", "string");
        	this.dsInsert.addColumn("YN_DAMBO", "string");
        	this.dsInsert.addColumn("DS_MULGYUN", "string");
        	this.dsInsert.addColumn("DS_DAMBO", "string");
        	this.dsInsert.addColumn("AM_GAM", "bigdecimal");
        	this.dsInsert.addColumn("DS_BOND", "string");
        	this.dsInsert.addColumn("DS_INVESTOR", "string");
        	this.dsInsert.addColumn("TY_CMS", "string");
        	this.dsInsert.addColumn("NO_ACCOUNT_LOAN", "string");
        	this.dsInsert.addColumn("TY_GUBUN_LOAN", "string");
        	this.dsInsert.addColumn("CD_BANK_LOAN", "string");
        	this.dsInsert.addColumn("NO_ACCOUNT", "string");
        	this.dsInsert.addColumn("TY_GUBUN", "string");
        	this.dsInsert.addColumn("CD_BANK", "string");
        	this.dsInsert.addColumn("NO_PARENTS", "string");
        	this.dsInsert.addColumn("NO_ACCOUNT_SANG", "string");
        	this.dsInsert.addColumn("TY_GUBUN_SANG", "string");
        	this.dsInsert.addColumn("CD_BANK_SANG", "string");
        	this.dsInsert.addColumn("RM_BIGO", "string");
        	//this.dsInsert.addColumn("AM_CURRENCY", "bigdecimal");
        	this.dsInsert.addColumn("CD_CURRENCY", "string");
        	this.dsInsert.addColumn("RT_CURRENCY", "bigdecimal");
        	this.dsInsert.addColumn("YN_WONFIX", "string");
        	this.dsInsert.addColumn("NO_AFTER", "string");
        	this.dsInsert.addColumn("DT_AFTER1", "string");
        	this.dsInsert.addColumn("DT_AFTER2", "string");
        	this.dsInsert.addColumn("ID_USER", "string");
        	this.dsInsert.addColumn("RT_OVERDUE", "bigdecimal");
        	this.dsInsert.addColumn("YN_JANGDAN", "string");  // 장단기대체여부 2021.12.13

        	this.dsUpdate = new Dataset();
        	this.dsUpdate.addColumn("TY_YANGDAN", "string");
        	this.dsUpdate.addColumn("AM_LOANMAX", "bigdecimal");
        	this.dsUpdate.addColumn("AM_LOAN", "bigdecimal");
        	this.dsUpdate.addColumn("TY_REPAY", "string");
        	this.dsUpdate.addColumn("YN_DAMBO", "string");
        	this.dsUpdate.addColumn("DS_MULGYUN", "string");
        	this.dsUpdate.addColumn("DS_DAMBO", "string");
        	this.dsUpdate.addColumn("AM_GAM", "bigdecimal");
        	this.dsUpdate.addColumn("DS_BOND", "string");
        	this.dsUpdate.addColumn("DS_INVESTOR", "string");
        	this.dsUpdate.addColumn("TY_CMS", "string");
        	this.dsUpdate.addColumn("NO_ACCOUNT_LOAN", "string");
        	this.dsUpdate.addColumn("TY_GUBUN_LOAN", "string");
        	this.dsUpdate.addColumn("CD_BANK_LOAN", "string");
        	this.dsUpdate.addColumn("NO_ACCOUNT", "string");
        	this.dsUpdate.addColumn("TY_GUBUN", "string");
        	this.dsUpdate.addColumn("CD_BANK", "string");
        	this.dsUpdate.addColumn("NO_PARENTS", "string");
        	this.dsUpdate.addColumn("RM_BIGO", "string");
        	this.dsUpdate.addColumn("NO_LOAN", "string");
        	this.dsUpdate.addColumn("ID_USER", "string");
        	this.dsUpdate.addColumn("TY_EZACAL", "string");
        	this.dsUpdate.addColumn("CD_LOAN", "string");
        	this.dsUpdate.addColumn("TY_TERM", "string");
        	this.dsUpdate.addColumn("TY_RAISE", "string");
        	this.dsUpdate.addColumn("NM_LOAN", "string");
        	this.dsUpdate.addColumn("FR_LOAN", "string");
        	this.dsUpdate.addColumn("TO_LOAN", "string");
        	this.dsUpdate.addColumn("CD_LOANBANK", "string");
        	this.dsUpdate.addColumn("YN_RELATIVE", "string");
        	this.dsUpdate.addColumn("CD_DEPT", "string");
        	this.dsUpdate.addColumn("TY_SANG", "string");
        	this.dsUpdate.addColumn("CD_CORP", "string");
        	this.dsUpdate.addColumn("TR_SANG", "bigdecimal");
        	this.dsUpdate.addColumn("DT_ORIGINFROM", "string");
        	//this.dsUpdate.addColumn("DT_ORIGINTO", "string");
        	this.dsUpdate.addColumn("RT_EZA", "bigdecimal");
        	this.dsUpdate.addColumn("RT_SPREAD", "bigdecimal");
        	this.dsUpdate.addColumn("TY_EZA", "string");
        	this.dsUpdate.addColumn("TY_INTLOCK", "string");
        	this.dsUpdate.addColumn("TY_DANBOK", "string");
        	this.dsUpdate.addColumn("TR_EZASTD", "bigdecimal");
        	this.dsUpdate.addColumn("TR_INTTERM", "bigdecimal");
        	this.dsUpdate.addColumn("TY_SUNHOO", "string");
        	//this.dsUpdate.addColumn("AM_CURRENCY", "bigdecimal");
        	this.dsUpdate.addColumn("CD_CURRENCY", "string");
        	this.dsUpdate.addColumn("RT_CURRENCY", "bigdecimal");
        	this.dsUpdate.addColumn("YN_WONFIX", "string");
        	this.dsUpdate.addColumn("NO_AFTER", "string");
        	this.dsUpdate.addColumn("DT_AFTER1", "string");
        	this.dsUpdate.addColumn("DT_AFTER2", "string");
        	this.dsUpdate.addColumn("NO_ACCOUNT_SANG", "string");
        	this.dsUpdate.addColumn("TY_GUBUN_SANG", "string");
        	this.dsUpdate.addColumn("CD_BANK_SANG", "string");
        	this.dsUpdate.addColumn("ID_USER", "string");
        	this.dsUpdate.addColumn("RT_OVERDUE", "bigdecimal");
        	this.dsUpdate.addColumn("YN_JANGDAN", "string");   // 장단기대체여부 2021.12.13

        	this.dsDelete = new Dataset();
        	this.dsDelete.addColumn("NO_LOAN", "string");
        	this.dsDelete.addColumn("ID_USER", "string");

        	this.dsExcute = new Dataset();
        	this.dsExcute.addColumn("NO_LOAN", "string");
        	this.dsExcute.addColumn("DT_DATE", "string");
        	this.dsExcute.addColumn("YN_FIRST", "string");
        	this.dsExcute.addColumn("ID_USER", "string");
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
        	//this.fnSelectEnable();

        	this.dsSelect.clearData();
        	this.dsSelect.addRow();

        	this.dsSelect.setColumn(0, "CD_CORP", this.ScfCD_CORP.form.CDTextBox.value);
        	this.dsSelect.setColumn(0, "CD_LOAN", this.ScfCD_LOAN.form.CDTextBox.value);
        	this.dsSelect.setColumn(0, "NO_LOAN", this.ScfNO_LOAN.form.CDTextBox.value);
        	this.dsSelect.setColumn(0, "TY_REPAY", this.ScboTY_REPAY.value);
        	this.dsSelect.setColumn(0, "ID_USER", this.AuthClient.ID_USER);

        	//trace(this.dsSelect.saveXML());

        	var strSvcId    = "select";
        	var strSvcType  = "grid";
        	var inProc		= "_dsProc";
        	var inData      = "select=dsSelect";
        	var outData     = "dsList=select0";
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
        // 	if(this.dsList.findRow(this.ucFlag, "I") > -1){
        // 		this.gfnAlert("신규 추가된 데이터가 이미 있습니다.");
        // 		return;
        // 	}

        // 	this.gfnSetAllReadonly(this.divData.form.divDataRight.form, true);
        // 	this.fnSelectEnable();
        // 	this.fnAddIsEnable();
        // 	this.sTY_GUBUN = "";

        	// 컴포넌트 enable/disable처리
        	this.fnSetComponent(true);

        	var nrow = this.gfnGridAdd(this.dxGrid);
        	this.dsList.set_enableevent(false);

        	this.dsList.setColumn(nrow, "CD_CORP", this.ScfCD_CORP.form.CDTextBox.value);	// 법인코드
        	this.dsList.setColumn(nrow, "DS_CORP", this.ScfCD_CORP.form.DSTextBox.value);	// 법인명
         	this.dsList.setColumn(nrow, "TY_TERM", "단기");				// 장단기
         	this.dsList.setColumn(nrow, "TY_RAISE", "ABCP");			// 조달방법
        	this.dsList.setColumn(nrow, "YN_RELATIVE", "N");			// 관계사
        	this.dsList.setColumn(nrow, "TY_SANG", "만기일시");		// 원금회수방법
        	this.dsList.setColumn(nrow, "TY_EZA", "고정");				// 유형
        	this.dsList.setColumn(nrow, "TY_INTLOCK", "CD");			// 연동
        	this.dsList.setColumn(nrow, "TY_DANBOK", "단리");			// 방식
        	this.dsList.setColumn(nrow, "TY_SUNHOO", "후취");			// 수취기준
        	this.dsList.setColumn(nrow, "TY_EZACAL", "월수");			// 계산방식
        	this.dsList.setColumn(nrow, "TY_YANGDAN", "말일산입");		// 일수계산
        	this.dsList.setColumn(nrow, "TY_REPAY", "N");				// 완료여부
        	this.dsList.setColumn(nrow, "YN_DAMBO", "N");				// 담보여부
        	this.dsList.setColumn(nrow, "TY_CMS", "자동이체");			// 브랜치전송
        	this.dsList.setColumn(nrow, "YN_JANGDAN", "N");	            // 장단기대체여부 2021.12.13

        	this.dsList.setColumn(nrow, "TR_SANG", 0);			// 회수주기(개월)
        	this.dsList.setColumn(nrow, "RT_EZA", 0);			// 기준금리
        	this.dsList.setColumn(nrow, "RT_SPREAD", 0);        // 가산금리
        	this.dsList.setColumn(nrow, "RT_OVERDUE", 0);        // 연체금리
        	this.dsList.setColumn(nrow, "TR_EZASTD", 0);		// 수취일
        	this.dsList.setColumn(nrow, "TR_INTTERM", 0);		// 주기(개월)
        	this.dsList.setColumn(nrow, "AM_LOANMAX", 0);		// 한도
        	this.dsList.setColumn(nrow, "AM_LOAN", 0);			// 대여

        	this.dsList.set_enableevent(true);

        	this.dsList.set_rowposition(nrow);
        	this.dxGrid.setCellPos(1);

        	//trace(this.dsList.saveXML());
        	//trace(this.ccfCorpCd.enable);
        }

        /*
         *	삭제 버튼
         */
        this.fnDel = function() {
        	this.gfnGridDel(this.dxGrid);
        }

        /*
         *	저장 버튼
         */
        this.fnSave = function() {
        	//if (!this.gfnGridValidate(this.dxGrid)) return;

        	// 해당펑션은 입력, 수정대상으로 체크하는게 아니라서 사용 어려움...
        	//if (!this.gfnDataValidate(this.dsList, this.dsRequired)) return;
        	if (!this.fnDataValidate()) return;

        	this.dxGrid.updateToDataset();

        	this.dsInsert.clearData();
        	this.dsUpdate.clearData();
        	this.dsDelete.clearData();

        	for (var i = 0; i < this.dsList.rowcount; i++) {
        		var flag = this.gfnGetFlag(this.dsList, i);
        		switch(flag) {
        			case "I":
        				var nrow = this.dsInsert.addRow();
        				this.dsInsert.setColumn(nrow, "CD_CORP", this.dsList.getColumn(i, "CD_CORP"));
        				this.dsInsert.setColumn(nrow, "CD_LOAN", this.dsList.getColumn(i, "CD_LOAN"));
        				this.dsInsert.setColumn(nrow, "TY_TERM", this.dsList.getColumn(i, "TY_TERM"));
        				this.dsInsert.setColumn(nrow, "TY_RAISE", this.dsList.getColumn(i, "TY_RAISE"));
        				this.dsInsert.setColumn(nrow, "NM_LOAN", this.dsList.getColumn(i, "NM_LOAN"));
        				this.dsInsert.setColumn(nrow, "FR_LOAN", this.dsList.getColumn(i, "FR_LOAN"));
        				this.dsInsert.setColumn(nrow, "TO_LOAN", this.dsList.getColumn(i, "TO_LOAN"));
        				this.dsInsert.setColumn(nrow, "CD_LOANBANK", this.dsList.getColumn(i, "CD_LOANBANK"));
        				this.dsInsert.setColumn(nrow, "YN_RELATIVE", this.dsList.getColumn(i, "YN_RELATIVE"));
        				this.dsInsert.setColumn(nrow, "CD_DEPT", this.dsList.getColumn(i, "CD_DEPT"));
        				this.dsInsert.setColumn(nrow, "TY_SANG", this.dsList.getColumn(i, "TY_SANG"));
        				this.dsInsert.setColumn(nrow, "TR_SANG", this.dsList.getColumn(i, "TR_SANG"));
        				this.dsInsert.setColumn(nrow, "DT_ORIGINFROM", this.dsList.getColumn(i, "DT_ORIGINFROM"));
        				//this.dsInsert.setColumn(nrow, "DT_ORIGINTO", this.dsList.getColumn(i, "DT_ORIGINTO"));
        				this.dsInsert.setColumn(nrow, "RT_EZA", this.dsList.getColumn(i, "RT_EZA"));
        				this.dsInsert.setColumn(nrow, "RT_SPREAD", this.dsList.getColumn(i, "RT_SPREAD"));
        				//연체금리 신규 추가.
        				this.dsInsert.setColumn(nrow, "RT_OVERDUE", this.dsList.getColumn(i, "RT_OVERDUE"));
        				this.dsInsert.setColumn(nrow, "TY_EZA", this.dsList.getColumn(i, "TY_EZA"));
        				this.dsInsert.setColumn(nrow, "TY_INTLOCK", this.dsList.getColumn(i, "TY_INTLOCK"));
        				this.dsInsert.setColumn(nrow, "TY_DANBOK", this.dsList.getColumn(i, "TY_DANBOK"));
        				this.dsInsert.setColumn(nrow, "TR_EZASTD", this.dsList.getColumn(i, "TR_EZASTD"));
        				this.dsInsert.setColumn(nrow, "TR_INTTERM", this.dsList.getColumn(i, "TR_INTTERM"));
        				this.dsInsert.setColumn(nrow, "TY_SUNHOO", this.dsList.getColumn(i, "TY_SUNHOO"));
        				this.dsInsert.setColumn(nrow, "TY_EZACAL", this.dsList.getColumn(i, "TY_EZACAL"));
        				this.dsInsert.setColumn(nrow, "TY_YANGDAN", this.dsList.getColumn(i, "TY_YANGDAN"));
        				this.dsInsert.setColumn(nrow, "AM_LOANMAX", this.dsList.getColumn(i, "AM_LOANMAX"));
        				this.dsInsert.setColumn(nrow, "AM_LOAN", this.dsList.getColumn(i, "AM_LOAN"));
        				this.dsInsert.setColumn(nrow, "TY_REPAY", this.dsList.getColumn(i, "TY_REPAY"));
        				this.dsInsert.setColumn(nrow, "YN_DAMBO", this.dsList.getColumn(i, "YN_DAMBO"));
        				this.dsInsert.setColumn(nrow, "DS_MULGYUN", this.dsList.getColumn(i, "DS_MULGYUN"));
        				this.dsInsert.setColumn(nrow, "DS_DAMBO", this.dsList.getColumn(i, "DS_DAMBO"));
        				this.dsInsert.setColumn(nrow, "AM_GAM", this.dsList.getColumn(i, "AM_GAM"));
        				this.dsInsert.setColumn(nrow, "DS_BOND", this.dsList.getColumn(i, "DS_BOND"));
        				this.dsInsert.setColumn(nrow, "DS_INVESTOR", this.dsList.getColumn(i, "DS_INVESTOR"));
        				this.dsInsert.setColumn(nrow, "TY_CMS", this.dsList.getColumn(i, "TY_CMS"));
        				this.dsInsert.setColumn(nrow, "NO_ACCOUNT_LOAN", this.dsList.getColumn(i, "NO_ACCOUNT_LOAN"));
        				this.dsInsert.setColumn(nrow, "TY_GUBUN_LOAN", this.dsList.getColumn(i, "TY_GUBUN_LOAN"));
        				this.dsInsert.setColumn(nrow, "CD_BANK_LOAN", this.dsList.getColumn(i, "CD_BANK_LOAN"));
        				this.dsInsert.setColumn(nrow, "NO_ACCOUNT", this.dsList.getColumn(i, "NO_ACCOUNT"));
        				this.dsInsert.setColumn(nrow, "TY_GUBUN", this.dsList.getColumn(i, "TY_GUBUN"));
        				this.dsInsert.setColumn(nrow, "CD_BANK", this.dsList.getColumn(i, "CD_BANK"));
        				this.dsInsert.setColumn(nrow, "NO_PARENTS", this.dsList.getColumn(i, "NO_PARENTS"));
        				this.dsInsert.setColumn(nrow, "NO_ACCOUNT_SANG", this.dsList.getColumn(i, "NO_ACCOUNT_SANG"));
        				this.dsInsert.setColumn(nrow, "TY_GUBUN_SANG", this.dsList.getColumn(i, "TY_GUBUN_SANG"));
        				this.dsInsert.setColumn(nrow, "CD_BANK_SANG", this.dsList.getColumn(i, "CD_BANK_SANG"));
        				this.dsInsert.setColumn(nrow, "RM_BIGO", this.dsList.getColumn(i, "RM_BIGO"));
        				//this.dsInsert.setColumn(nrow, "AM_CURRENCY", this.dsList.getColumn(i, "AM_CURRENCY"));
        				this.dsInsert.setColumn(nrow, "CD_CURRENCY", this.dsList.getColumn(i, "CD_CURRENCY"));
        				this.dsInsert.setColumn(nrow, "RT_CURRENCY", this.dsList.getColumn(i, "RT_CURRENCY"));
        				this.dsInsert.setColumn(nrow, "YN_WONFIX", this.dsList.getColumn(i, "YN_WONFIX"));
        				this.dsInsert.setColumn(nrow, "NO_AFTER", this.dsList.getColumn(i, "NO_AFTER"));
        				this.dsInsert.setColumn(nrow, "DT_AFTER1", this.dsList.getColumn(i, "DT_AFTER1"));
        				this.dsInsert.setColumn(nrow, "DT_AFTER2", this.dsList.getColumn(i, "DT_AFTER2"));
        				this.dsInsert.setColumn(nrow, "YN_JANGDAN", this.dsList.getColumn(i, "YN_JANGDAN"));	//장단기대체여부 2021.12.13
        				this.dsInsert.setColumn(nrow, "ID_USER", this.AuthClient.ID_USER);
        				break;

        			case "U":
        				var nrow = this.dsUpdate.addRow();
        				this.dsUpdate.setColumn(nrow, "TY_YANGDAN", this.dsList.getColumn(i, "TY_YANGDAN"));
        				this.dsUpdate.setColumn(nrow, "AM_LOANMAX", this.dsList.getColumn(i, "AM_LOANMAX"));
        				this.dsUpdate.setColumn(nrow, "AM_LOAN", this.dsList.getColumn(i, "AM_LOAN"));
        				this.dsUpdate.setColumn(nrow, "TY_REPAY", this.dsList.getColumn(i, "TY_REPAY"));
        				this.dsUpdate.setColumn(nrow, "YN_DAMBO", this.dsList.getColumn(i, "YN_DAMBO"));
        				this.dsUpdate.setColumn(nrow, "DS_MULGYUN", this.dsList.getColumn(i, "DS_MULGYUN"));
        				this.dsUpdate.setColumn(nrow, "DS_DAMBO", this.dsList.getColumn(i, "DS_DAMBO"));
        				this.dsUpdate.setColumn(nrow, "AM_GAM", this.dsList.getColumn(i, "AM_GAM"));
        				this.dsUpdate.setColumn(nrow, "DS_BOND", this.dsList.getColumn(i, "DS_BOND"));
        				this.dsUpdate.setColumn(nrow, "DS_INVESTOR", this.dsList.getColumn(i, "DS_INVESTOR"));
        				this.dsUpdate.setColumn(nrow, "TY_CMS", this.dsList.getColumn(i, "TY_CMS"));
        				this.dsUpdate.setColumn(nrow, "NO_ACCOUNT_LOAN", this.dsList.getColumn(i, "NO_ACCOUNT_LOAN"));
        				this.dsUpdate.setColumn(nrow, "TY_GUBUN_LOAN", this.dsList.getColumn(i, "TY_GUBUN_LOAN"));
        				this.dsUpdate.setColumn(nrow, "CD_BANK_LOAN", this.dsList.getColumn(i, "CD_BANK_LOAN"));
        				this.dsUpdate.setColumn(nrow, "NO_ACCOUNT", this.dsList.getColumn(i, "NO_ACCOUNT"));
        				this.dsUpdate.setColumn(nrow, "TY_GUBUN", this.dsList.getColumn(i, "TY_GUBUN"));
        				this.dsUpdate.setColumn(nrow, "CD_BANK", this.dsList.getColumn(i, "CD_BANK"));
        				this.dsUpdate.setColumn(nrow, "NO_PARENTS", this.dsList.getColumn(i, "NO_PARENTS"));
        				this.dsUpdate.setColumn(nrow, "RM_BIGO", this.dsList.getColumn(i, "RM_BIGO"));
        				this.dsUpdate.setColumn(nrow, "NO_LOAN", this.dsList.getColumn(i, "NO_LOAN"));
        				this.dsUpdate.setColumn(nrow, "ID_USER", this.dsList.getColumn(i, "ID_USER"));
        				this.dsUpdate.setColumn(nrow, "TY_EZACAL", this.dsList.getColumn(i, "TY_EZACAL"));
        				this.dsUpdate.setColumn(nrow, "CD_LOAN", this.dsList.getColumn(i, "CD_LOAN"));
        				this.dsUpdate.setColumn(nrow, "TY_TERM", this.dsList.getColumn(i, "TY_TERM"));
        				this.dsUpdate.setColumn(nrow, "TY_RAISE", this.dsList.getColumn(i, "TY_RAISE"));
        				this.dsUpdate.setColumn(nrow, "NM_LOAN", this.dsList.getColumn(i, "NM_LOAN"));
        				this.dsUpdate.setColumn(nrow, "FR_LOAN", this.dsList.getColumn(i, "FR_LOAN"));
        				this.dsUpdate.setColumn(nrow, "TO_LOAN", this.dsList.getColumn(i, "TO_LOAN"));
        				this.dsUpdate.setColumn(nrow, "CD_LOANBANK", this.dsList.getColumn(i, "CD_LOANBANK"));
        				this.dsUpdate.setColumn(nrow, "YN_RELATIVE", this.dsList.getColumn(i, "YN_RELATIVE"));
        				this.dsUpdate.setColumn(nrow, "CD_DEPT", this.dsList.getColumn(i, "CD_DEPT"));
        				this.dsUpdate.setColumn(nrow, "TY_SANG", this.dsList.getColumn(i, "TY_SANG"));
        				this.dsUpdate.setColumn(nrow, "CD_CORP", this.dsList.getColumn(i, "CD_CORP"));
        				this.dsUpdate.setColumn(nrow, "TR_SANG", this.dsList.getColumn(i, "TR_SANG"));
        				this.dsUpdate.setColumn(nrow, "DT_ORIGINFROM", this.dsList.getColumn(i, "DT_ORIGINFROM"));
        				//this.dsUpdate.setColumn(nrow, "DT_ORIGINTO", this.dsList.getColumn(i, "DT_ORIGINTO"));
        				this.dsUpdate.setColumn(nrow, "RT_EZA", this.dsList.getColumn(i, "RT_EZA"));
        				this.dsUpdate.setColumn(nrow, "RT_SPREAD", this.dsList.getColumn(i, "RT_SPREAD"));
        				//연체금리 신규추가.
        				this.dsUpdate.setColumn(nrow, "RT_OVERDUE", this.dsList.getColumn(i, "RT_OVERDUE"));
        				this.dsUpdate.setColumn(nrow, "TY_EZA", this.dsList.getColumn(i, "TY_EZA"));
        				this.dsUpdate.setColumn(nrow, "TY_INTLOCK", this.dsList.getColumn(i, "TY_INTLOCK"));
        				this.dsUpdate.setColumn(nrow, "TY_DANBOK", this.dsList.getColumn(i, "TY_DANBOK"));
        				this.dsUpdate.setColumn(nrow, "TR_EZASTD", this.dsList.getColumn(i, "TR_EZASTD"));
        				this.dsUpdate.setColumn(nrow, "TR_INTTERM", this.dsList.getColumn(i, "TR_INTTERM"));
        				this.dsUpdate.setColumn(nrow, "TY_SUNHOO", this.dsList.getColumn(i, "TY_SUNHOO"));
        				//this.dsUpdate.setColumn(nrow, "AM_CURRENCY", this.dsList.getColumn(i, "AM_CURRENCY"));
        				this.dsUpdate.setColumn(nrow, "CD_CURRENCY", this.dsList.getColumn(i, "CD_CURRENCY"));
        				this.dsUpdate.setColumn(nrow, "RT_CURRENCY", this.dsList.getColumn(i, "RT_CURRENCY"));
        				this.dsUpdate.setColumn(nrow, "YN_WONFIX", this.dsList.getColumn(i, "YN_WONFIX"));
        				this.dsUpdate.setColumn(nrow, "NO_AFTER", this.dsList.getColumn(i, "NO_AFTER"));
        				this.dsUpdate.setColumn(nrow, "DT_AFTER1", this.dsList.getColumn(i, "DT_AFTER1"));
        				this.dsUpdate.setColumn(nrow, "DT_AFTER2", this.dsList.getColumn(i, "DT_AFTER2"));
        				this.dsUpdate.setColumn(nrow, "NO_ACCOUNT_SANG", this.dsList.getColumn(i, "NO_ACCOUNT_SANG"));
        				this.dsUpdate.setColumn(nrow, "TY_GUBUN_SANG", this.dsList.getColumn(i, "TY_GUBUN_SANG"));
        				this.dsUpdate.setColumn(nrow, "CD_BANK_SANG", this.dsList.getColumn(i, "CD_BANK_SANG"));
        				this.dsUpdate.setColumn(nrow, "YN_JANGDAN", this.dsList.getColumn(i, "YN_JANGDAN"));        //장단기대체여부 2021.12.13
        				this.dsUpdate.setColumn(nrow, "ID_USER", this.AuthClient.ID_USER);
        				break;
        			case "D":
        				var nrow = this.dsDelete.addRow();
        				this.dsDelete.setColumn(nrow, "NO_LOAN", this.dsList.getColumn(i, "NO_LOAN"));
        				this.dsDelete.setColumn(nrow, "ID_USER", this.AuthClient.ID_USER);
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

        		// YN_VIEW then Y 보이기
        		if (this.dsList.rowcount > 0 && this.dsList.getColumn(this.dsList.rowposition, "YN_VIEW") == "Y") {
        			this.fnVisibleComp(true);
        		}
        	}else if(svcID == "save") {
        		if (errorCode == 0) {
        			this.FormBtns.Select.click();
        		} else {
        			this.gfnAlert(errorMsg);
        		}
        	}else if(svcID == "combo"){

        		//  조회조건(완료여부)
        		var iRow = this.dsTY_REPAY1.insertRow(0);
        		this.dsTY_REPAY1.setColumn(iRow, "CD_CODE", "");
        		this.dsTY_REPAY1.setColumn(iRow, "DS_CODE", "전체");
        		this.ScboTY_REPAY.set_index(2);	// 진행중

        		if ( !this.gfnIsNull(this.getOwnerFrame().CD_CORP) ) {

        			// from 대여금약정현황조회 or 대여금거래현황조회
        			this.ScfCD_CORP.form.CDTextBox.set_value(this.getOwnerFrame().CD_CORP);
        			this.ScfCD_CORP.form.DSTextBox.set_value(this.getOwnerFrame().DS_CORP);
        			this.ScfCD_LOAN.form.CDTextBox.set_value(this.getOwnerFrame().CD_LOAN);
        			this.ScfCD_LOAN.form.DSTextBox.set_value(this.getOwnerFrame().DS_LOAN);
        			this.ScfNO_LOAN.form.CDTextBox.set_value(this.getOwnerFrame().NO_LOAN);
        			this.ScfNO_LOAN.form.DSTextBox.set_value(this.getOwnerFrame().NM_LOAN);

        			this.FormBtns.Select.click();
        		}

        	}else if(svcID == "e_create") {
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
        this.fnAfterCDTextChanged = function(id, codeFindData) {

        	var arr = codeFindData;

        	switch(id) {

        	// 법인코드(조회조건)
        	case "cfCD_CORP":
        		this.fnSearchInit();
        		break;

        	// 대여종류(조회조건)
        	case "ccfCD_LOAN":
        		this.fnSearchInit();
        		break;

        	// 관리번호(조회조건)
        	case "cfNO_LOAN":
        		this.fnSearchInit();
        		break;

        	// 법인코드
        	case "cfCD_CORP2":
        		break;

        	// 대여종류
        	case "cfCD_LOAN":
        		trace("this.gfnGetFlag(this.dsList, this.dsList.rowposition) ::  " + this.gfnGetFlag(this.dsList, this.dsList.rowposition));

        		// 핸재로우가 입력 상태이고 해외여부(YN_FOREIGN) Y이면 외화금액/화폐단위/환율/수리신고번호/사후신고마감일/사후신고일 visible 처리
        		if (arr.length > 0 && this.gfnGetFlag(this.dsList, this.dsList.rowposition) == "I") {
        			//trace("YN_FOREIGN :: " + arr[0]["YN_FOREIGN"]);
        			if ( arr[0]["YN_FOREIGN"] == "Y" ) {
        				this.fnVisibleComp(true);
        			} else {
        				this.fnVisibleComp(false);
        			}
        		}
        		break;

        	// 대여기관(거래처)
        	case "cfCD_LOANBANK":
        		break;

        	// 귀속부서
        	case "cfCD_DEPT":
        		break;

        	// 대여계좌
        	case "cfNO_ACCOUNT_LOAN":
        		if(arr.length > 0) {
        			this.dsList.setColumn(this.dsList.rowposition, "TY_GUBUN_LOAN", arr[0]["TY_GUBUN"]);
        			this.dsList.setColumn(this.dsList.rowposition, "CD_BANK_LOAN", arr[0]["CD_BANK"]);
        		}
        		break;

        	// 이자계좌
        	case "cfNO_ACCOUNT":
        		if(arr.length > 0) {
        			this.dsList.setColumn(this.dsList.rowposition, "TY_GUBUN", arr[0]["TY_GUBUN"]);
        			this.dsList.setColumn(this.dsList.rowposition, "CD_BANK", arr[0]["CD_BANK"]);
        		}
        		break;

        	// 회수계좌
        	case "cfNO_ACCOUNT_SANG":
        		if(arr.length > 0) {
        			this.dsList.setColumn(this.dsList.rowposition, "TY_GUBUN_SANG", arr[0]["TY_GUBUN"]);
        			this.dsList.setColumn(this.dsList.rowposition, "CD_BANK_SANG", arr[0]["CD_BANK"]);
        		}
        		break;

        	// 최초대여(관리번호)
        	case "cfCNO_PARENTS":
        		break;

        	default:
        	}
        	return true;
        }

        this.fnBeforeUserDataSetParam = function(id, dsUserParam, nrow) {

        	var cdCorp = this.ScfCD_CORP.form.CDTextBox.value;
        	var cdCorp2 = this.dsList.getColumn(this.dsList.rowposition, "CD_CORP");

        	switch(id) {

        	// 법인코드(조회조건)
        	case "cfCD_CORP":
        		dsUserParam.setColumn(nrow, "CD_GROUP", this.gfnIsNull(this.cdGroup) ? "" : this.cdGroup);
        		break;

        	// 대여종류(조회조건)
        	case "ccfCD_LOAN":
        		dsUserParam.setColumn(nrow, "YN_USE", "Y");
        		dsUserParam.setColumn(nrow, "ID_USER", this.AuthClient.ID_USER);
        		break;

        	// 관리번호(조회조건)
        	case "cfNO_LOAN":
        		dsUserParam.setColumn(nrow, "CD_CORP", this.gfnIsNull(cdCorp) ? "" : cdCorp);
        		dsUserParam.setColumn(nrow, "ID_USER", this.AuthClient.ID_USER);
        		break;

        	// 법인코드
        	case "cfCD_CORP2":
        		dsUserParam.setColumn(nrow, "CD_GROUP", this.gfnIsNull(this.cdGroup) ? "" : this.cdGroup);
        		break;

        	// 대여종류
        	case "cfCD_LOAN":
        		dsUserParam.setColumn(nrow, "YN_USE", "Y");
        		dsUserParam.setColumn(nrow, "ID_USER", this.AuthClient.ID_USER);
        		break;

        	// 대여기관(거래처)
        	case "cfCD_LOANBANK":
        		dsUserParam.setColumn(nrow, "TY_VENDOR1", "전체");
        		dsUserParam.setColumn(nrow, "CD_CORP", this.gfnIsNull(cdCorp2) ? "" : cdCorp2);
        		break;

        	// 귀속부서
        	case "cfCD_DEPT":
        		//trace("this.cdGroup :: " + this.cdGroup);
        		//trace("cdCorp :: " + this.dsList.getColumn(this.dsList.rowposition, "CD_CORP"));
        		dsUserParam.setColumn(nrow, "CD_GROUP", this.gfnIsNull(this.cdGroup) ? "" : this.cdGroup);
        		dsUserParam.setColumn(nrow, "CD_CORP", this.gfnIsNull(cdCorp2) ? "" : cdCorp2);
        		break;

        	// 대여계좌
        	// 법인코드 공백으로 요청
        	case "cfNO_ACCOUNT_LOAN":
        		dsUserParam.setColumn(nrow, "CD_CORP", "");
        		break;

        	// 이자계좌
        	case "cfNO_ACCOUNT":
        		dsUserParam.setColumn(nrow, "CD_CORP", this.gfnIsNull(cdCorp2) ? "" : cdCorp2);
        		break;

        	// 회수계좌
        	case "cfNO_ACCOUNT_SANG":
        		dsUserParam.setColumn(nrow, "CD_CORP", this.gfnIsNull(cdCorp2) ? "" : cdCorp2);
        		break;

        	// 최초대여(관리번호)
        	case "cfCNO_PARENTS":
        		dsUserParam.setColumn(nrow, "CD_CORP", this.gfnIsNull(cdCorp2) ? "" : cdCorp2);
        		dsUserParam.setColumn(nrow, "ID_USER", this.AuthClient.ID_USER);
        		break;

        	default:
        	}
        	return true;
        }

        /************************************************************************
         * 그리드 이벤트
         ************************************************************************/
        this.fnGrid_RowCellChanged = function(obj,e){
            if (e.row != -1) {
        		var URL_PROOF = this.gfnNvl(this.dsList.getColumn(e.row, "URL_PROOF"), "첨부파일");
        		this.btnFileUpload.set_text(URL_PROOF);
        	}
        };

        /************************************************************************
         * 기타 이벤트
         ************************************************************************/
        /*
         *	조회 조건 변경시 초기화
         */
        this.fnSearchInit = function(obj,e) {

        	if(e == null || (e.pretext != e.posttext)) {
        		this.gfnSetFormStatus(this);	// 폼상태 초기화
        		this.gfnGridClear(this.dxGrid);
        	}
        };

        /*
         * 컴포넌트 enable/disable처리
         */
        this.fnSetComponent = function(flag) {

        //	this.txtNO_LOAN.set_enable(flag);		//  대여번호(관리번호)
        // 	this.StxtAccntNo.set_enable(flag);		//  계좌번호
        // 	this.ccfAccntOwner.set_enable(flag);	//  계좌소유주
        }

        this.fnDataValidate = function(){

        	var msg = "은(는) 필수입력 입니다.";

        	for (var i=0; i < this.dsList.rowcount; i++) {
        		if (this.dsList.getColumn(i, "nx_flag") == "I" || this.dsList.getColumn(i, "nx_flag") == "U") {

        			if(this.gfnIsNull(this.gfnTrim(this.dsList.getColumn(i, "CD_CORP")))){
        				this.gfnAlert("법인코드" + msg);
        				this.dsList.set_rowposition(i);
        				this.cfCD_CORP2.form.CDTextBox.setFocus();
        				return false;
        			}

        			if(this.gfnIsNull(this.gfnTrim(this.dsList.getColumn(i, "NM_LOAN")))){
        				this.gfnAlert("대여금명" + msg);
        				this.dsList.set_rowposition(i);
        				this.txtNM_LOAN.setFocus();
        				return false;
        			}

        			if(this.gfnIsNull(this.gfnTrim(this.dsList.getColumn(i, "CD_LOAN")))){
        				this.gfnAlert("대여종류" + msg);
        				this.dsList.set_rowposition(i);
        				this.cfCD_LOAN.form.CDTextBox.setFocus();
        				return false;
        			}

        			if(this.gfnIsNull(this.gfnTrim(this.dsList.getColumn(i, "TY_TERM")))){
        				this.gfnAlert("장단기" + msg);
        				this.dsList.set_rowposition(i);
        				this.cboTY_TERM.setFocus();
        				return false;
        			}

        			if(this.gfnIsNull(this.gfnTrim(this.dsList.getColumn(i, "TY_RAISE")))){
        				this.gfnAlert("조달방법" + msg);
        				this.dsList.set_rowposition(i);
        				this.cboTY_RAISE.setFocus();
        				return false;
        			}

        			if(this.gfnIsNull(this.gfnTrim(this.dsList.getColumn(i, "CD_LOANBANK")))){
        				this.gfnAlert("대여기관" + msg);
        				this.dsList.set_rowposition(i);
        				this.cfCD_LOANBANK.form.CDTextBox.setFocus();
        				return false;
        			}

        			if(this.gfnIsNull(this.gfnTrim(this.dsList.getColumn(i, "FR_LOAN")))){
        				this.gfnAlert("대여기간(from)" + msg);
        				this.dsList.set_rowposition(i);
        				this.calFR_LOAN.setFocus();
        				return false;
        			}

        			if(this.gfnIsNull(this.gfnTrim(this.dsList.getColumn(i, "TO_LOAN")))){
        				this.gfnAlert("대여기간(to)" + msg);
        				this.dsList.set_rowposition(i);
        				this.calTO_LOAN.setFocus();
        				return false;
        			}


        			if ( !this.gfnIsNull(this.gfnTrim(this.dsList.getColumn(i, "FR_LOAN"))) && !this.gfnIsNull(this.gfnTrim(this.dsList.getColumn(i, "TO_LOAN"))) ) {
        				if ( nexacro.toNumber(this.dsList.getColumn(i, "FR_LOAN"))
        					> nexacro.toNumber(this.dsList.getColumn(i, "TO_LOAN")) ) {
        					this.gfnAlert("대여기간이 잘못 입력 되었습니다.");
        					this.dsList.set_rowposition(i);
        					this.calFR_LOAN.setFocus();
        					return false;
        				}
        			}

        			if(this.gfnIsNull(this.gfnTrim(this.dsList.getColumn(i, "CD_DEPT")))){
        				this.gfnAlert("귀속부서" + msg);
        				this.dsList.set_rowposition(i);
        				this.cfCD_DEPT.form.CDTextBox.setFocus();
        				return false;
        			}

        			if(this.gfnIsNull(this.gfnTrim(this.dsList.getColumn(i, "TY_SANG")))){
        				this.gfnAlert("원금회수방법" + msg);
        				this.dsList.set_rowposition(i);
        				this.cboTY_SANG.setFocus();
        				return false;
        			}

        			if(this.gfnIsNull(this.dsList.getColumn(i, "TR_SANG"))){
        				this.gfnAlert("회수주기(개월)" + msg);
        				this.dsList.set_rowposition(i);
        				this.mskTR_SANG.setFocus();
        				return false;
        			}

        			if(this.gfnIsNull(this.gfnTrim(this.dsList.getColumn(i, "DT_ORIGINFROM")))){
        				this.gfnAlert("회수기준일" + msg);
        				this.dsList.set_rowposition(i);
        				this.calDT_ORIGINFROM.setFocus();
        				return false;
        			}

        // 			if(this.gfnIsNull(this.gfnTrim(this.dsList.getColumn(i, "DT_ORIGINTO")))){
        // 				this.gfnAlert("원금회수기간(to)" + msg);
        // 				this.dsList.set_rowposition(i);
        // 				this.calDT_ORIGINTO.setFocus();
        // 				return false;
        // 			}

        // 			if ( !this.gfnIsNull(this.gfnTrim(this.dsList.getColumn(i, "DT_ORIGINFROM"))) && !this.gfnIsNull(this.gfnTrim(this.dsList.getColumn(i, "DT_ORIGINTO"))) ) {
        // 				if ( this.gfnTrim(this.dsList.getColumn(i, "DT_ORIGINFROM")) > this.gfnTrim(this.dsList.getColumn(i, "DT_ORIGINTO")) ) {
        // 					this.gfnAlert("원금회수기간이 잘못 입력 되었습니다.");
        // 					this.dsList.set_rowposition(i);
        // 					this.calDT_ORIGINFROM.setFocus();
        // 					return false;
        // 				}
        // 			}

        			if(this.gfnIsNull(this.dsList.getColumn(i, "RT_EZA"))){
        				this.gfnAlert("기준금리" + msg);
        				this.dsList.set_rowposition(i);
        				this.mskRT_EZA.setFocus();
        				return false;
        			}

        			if(this.gfnIsNull(this.dsList.getColumn(i, "RT_SPREAD"))){
        				this.gfnAlert("가산금리" + msg);
        				this.dsList.set_rowposition(i);
        				this.mskRT_SPREAD.setFocus();
        				return false;
        			}

        			if(this.gfnIsNull(this.dsList.getColumn(i, "RT_OVERDUE"))){
        				this.gfnAlert("연체금리" + msg);
        				this.dsList.set_rowposition(i);
        				this.mskRT_OVERDUE.setFocus();
        				return false;
        			}

        			if(this.gfnIsNull(this.gfnTrim(this.dsList.getColumn(i, "TY_EZA")))){
        				this.gfnAlert("유형" + msg);
        				this.dsList.set_rowposition(i);
        				this.cboTY_EZA.setFocus();
        				return false;
        			}

        			if(this.gfnIsNull(this.gfnTrim(this.dsList.getColumn(i, "TY_INTLOCK")))){
        				this.gfnAlert("연동" + msg);
        				this.dsList.set_rowposition(i);
        				this.cboTY_INTLOCK.setFocus();
        				return false;
        			}

        			if(this.gfnIsNull(this.gfnTrim(this.dsList.getColumn(i, "TY_DANBOK")))){
        				this.gfnAlert("방식" + msg);
        				this.dsList.set_rowposition(i);
        				this.cboTY_DANBOK.setFocus();
        				return false;
        			}

        			if(this.gfnIsNull(this.dsList.getColumn(i, "TR_EZASTD"))){
        				this.gfnAlert("수취일" + msg);
        				this.dsList.set_rowposition(i);
        				this.mskTR_EZASTD.setFocus();
        				return false;
        			}

        			if(this.gfnIsNull(this.dsList.getColumn(i, "TR_INTTERM"))){
        				this.gfnAlert("주기(개월)" + msg);
        				this.dsList.set_rowposition(i);
        				this.mskTR_INTTERM.setFocus();
        				return false;
        			}

        			if(this.gfnIsNull(this.gfnTrim(this.dsList.getColumn(i, "TY_SUNHOO")))){
        				this.gfnAlert("수취기준" + msg);
        				this.dsList.set_rowposition(i);
        				this.cboTY_SUNHOO.setFocus();
        				return false;
        			}

        			if(this.gfnIsNull(this.gfnTrim(this.dsList.getColumn(i, "TY_EZACAL")))){
        				this.gfnAlert("계산방식" + msg);
        				this.dsList.set_rowposition(i);
        				this.cboTY_EZACAL.setFocus();
        				return false;
        			}

        			if(this.gfnIsNull(this.gfnTrim(this.dsList.getColumn(i, "TY_YANGDAN")))){
        				this.gfnAlert("일수계산" + msg);
        				this.dsList.set_rowposition(i);
        				this.cboTY_YANGDAN.setFocus();
        				return false;
        			}

        			if(this.gfnIsNull(this.dsList.getColumn(i, "AM_LOANMAX"))){
        				this.gfnAlert("한도" + msg);
        				this.dsList.set_rowposition(i);
        				this.mskAM_LOANMAX.setFocus();
        				return false;
        			}

        			if(this.gfnIsNull(this.dsList.getColumn(i, "AM_LOAN"))){
        				this.gfnAlert("대여" + msg);
        				this.dsList.set_rowposition(i);
        				this.mskAM_LOAN.setFocus();
        				return false;
        			}

        			if(this.gfnIsNull(this.gfnTrim(this.dsList.getColumn(i, "TY_REPAY")))){
        				this.gfnAlert("완료여부" + msg);
        				this.dsList.set_rowposition(i);
        				this.cboTY_REPAY.setFocus();
        				return false;
        			}

        			if(this.gfnIsNull(this.gfnTrim(this.dsList.getColumn(i, "YN_DAMBO")))){
        				this.gfnAlert("담보여부" + msg);
        				this.dsList.set_rowposition(i);
        				this.cboYN_DAMBO.setFocus();
        				return false;
        			}

        			if(this.gfnIsNull(this.gfnTrim(this.dsList.getColumn(i, "TY_CMS")))){
        				this.gfnAlert("브랜치전송" + msg);
        				this.dsList.set_rowposition(i);
        				this.cboTY_CMS.setFocus();
        				return false;
        			}

        			if(this.gfnIsNull(this.gfnTrim(this.dsList.getColumn(i, "NO_ACCOUNT_LOAN")))){
        				this.gfnAlert("대여계좌" + msg);
        				this.dsList.set_rowposition(i);
        				this.cfNO_ACCOUNT_LOAN.form.CDTextBox.setFocus();
        				return false;
        			}

        			if(this.gfnIsNull(this.gfnTrim(this.dsList.getColumn(i, "NO_ACCOUNT")))){
        				this.gfnAlert("이자계좌" + msg);
        				this.dsList.set_rowposition(i);
        				this.cfNO_ACCOUNT.form.CDTextBox.setFocus();
        				return false;
        			}
        		}
        	}
        	return true;
        }

        this.fnSetCombo = function() {

        	this.dsCombo = new Dataset();
        	this.dsCombo.addColumn("CD_SYSTEM", "string");
        	this.dsCombo.addColumn("CD_TYPE", "string");
        	this.dsCombo.addRow();
        	this.dsCombo.setColumn(0, "CD_SYSTEM", "DF");
        	this.dsCombo.setColumn(0, "CD_TYPE", "G0");

        	this.dsCombo2 = new Dataset();
        	this.dsCombo2.addColumn("CD_SYSTEM", "string");
        	this.dsCombo2.addColumn("CD_TYPE", "string");
        	this.dsCombo2.addRow();
        	this.dsCombo2.setColumn(0, "CD_SYSTEM", "DF");
        	this.dsCombo2.setColumn(0, "CD_TYPE", "G1");

        	this.dsCombo3 = new Dataset();
        	this.dsCombo3.addColumn("CD_SYSTEM", "string");
        	this.dsCombo3.addColumn("CD_TYPE", "string");
        	this.dsCombo3.addRow();
        	this.dsCombo3.setColumn(0, "CD_SYSTEM", "DF");
        	this.dsCombo3.setColumn(0, "CD_TYPE", "G2");

        	this.dsCombo4 = new Dataset();
        	this.dsCombo4.addColumn("CD_SYSTEM", "string");
        	this.dsCombo4.addColumn("CD_TYPE", "string");
        	this.dsCombo4.addRow();
        	this.dsCombo4.setColumn(0, "CD_SYSTEM", "DF");
        	this.dsCombo4.setColumn(0, "CD_TYPE", "G3");

        	this.dsCombo5 = new Dataset();
        	this.dsCombo5.addColumn("CD_SYSTEM", "string");
        	this.dsCombo5.addColumn("CD_TYPE", "string");
        	this.dsCombo5.addRow();
        	this.dsCombo5.setColumn(0, "CD_SYSTEM", "DF");
        	this.dsCombo5.setColumn(0, "CD_TYPE", "G4");

        	this.dsCombo6 = new Dataset();
        	this.dsCombo6.addColumn("CD_SYSTEM", "string");
        	this.dsCombo6.addColumn("CD_TYPE", "string");
        	this.dsCombo6.addRow();
        	this.dsCombo6.setColumn(0, "CD_SYSTEM", "DF");
        	this.dsCombo6.setColumn(0, "CD_TYPE", "G5");

        	this.dsCombo7 = new Dataset();
        	this.dsCombo7.addColumn("CD_SYSTEM", "string");
        	this.dsCombo7.addColumn("CD_TYPE", "string");
        	this.dsCombo7.addRow();
        	this.dsCombo7.setColumn(0, "CD_SYSTEM", "DF");
        	this.dsCombo7.setColumn(0, "CD_TYPE", "G6");

        	this.dsCombo8 = new Dataset();
        	this.dsCombo8.addColumn("CD_SYSTEM", "string");
        	this.dsCombo8.addColumn("CD_TYPE", "string");
        	this.dsCombo8.addRow();
        	this.dsCombo8.setColumn(0, "CD_SYSTEM", "DF");
        	this.dsCombo8.setColumn(0, "CD_TYPE", "G7");

        	this.dsCombo9 = new Dataset();
        	this.dsCombo9.addColumn("CD_SYSTEM", "string");
        	this.dsCombo9.addColumn("CD_TYPE", "string");
        	this.dsCombo9.addRow();
        	this.dsCombo9.setColumn(0, "CD_SYSTEM", "DF");
        	this.dsCombo9.setColumn(0, "CD_TYPE", "G8");

        	this.dsCombo10 = new Dataset();
        	this.dsCombo10.addColumn("CD_SYSTEM", "string");
        	this.dsCombo10.addColumn("CD_TYPE", "string");
        	this.dsCombo10.addRow();
        	this.dsCombo10.setColumn(0, "CD_SYSTEM", "DF");
        	this.dsCombo10.setColumn(0, "CD_TYPE", "G9");

        	this.dsCombo11 = new Dataset();
        	this.dsCombo11.addColumn("CD_SYSTEM", "string");
        	this.dsCombo11.addColumn("CD_TYPE", "string");
        	this.dsCombo11.addRow();
        	this.dsCombo11.setColumn(0, "CD_SYSTEM", "DF");
        	this.dsCombo11.setColumn(0, "CD_TYPE", "ZZ");


        	this.dsCombo12 = new Dataset();
        	this.dsCombo12.addColumn("CD_SYSTEM", "string");
        	this.dsCombo12.addColumn("CD_TYPE", "string");
        	this.dsCombo12.addRow();
        	this.dsCombo12.setColumn(0, "CD_SYSTEM", "DF");
        	this.dsCombo12.setColumn(0, "CD_TYPE", "G9");

        	this.dsCombo13 = new Dataset();
        	this.dsCombo13.addColumn("CD_SYSTEM", "string");
        	this.dsCombo13.addColumn("CD_TYPE", "string");
        	this.dsCombo13.addRow();
        	this.dsCombo13.setColumn(0, "CD_SYSTEM", "DF");
        	this.dsCombo13.setColumn(0, "CD_TYPE", "40");

        	var strSvcId    = "combo";
        	var strSvcType  = "select";
        	var inProc		= "_dsProc";
        	var inData      = "combo=dsCombo combo2=dsCombo2 combo3=dsCombo3 combo4=dsCombo4 combo5=dsCombo5"
        	                + " combo6=dsCombo6 combo7=dsCombo7 combo8=dsCombo8 combo9=dsCombo9 combo10=dsCombo10 combo11=dsCombo11 combo12=dsCombo12 combo13=dsCombo13";
        	var outData     = "dsTY_DANBOK=combo0 dsTY_RAISE=combo20 dsTY_SANG=combo30 dsTY_EZA=combo40 dsTY_INTLOCK=combo50 dsTY_SUNHOO=combo60"
        	                + " dsTY_EZACAL=combo70 dsTY_YANGDAN=combo80 dsTY_TERM=combo90 dsTY_REPAY1=combo100 dsTY_CMS=combo110 dsTY_REPAY2=combo120 dsCD_CURRENCY=combo130";
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

        //검색어 키다운 이벤트
        this.divSearch_txtSEARCH_onkeydown = function(obj,e)
        {
        	if(e.keycode == 13){
        		this.fnSelect();
        	}
        };

        // 계획생성
        this.fnPlanCreat = function(obj,e) {
        	if(!this.gfnGridIsRow(this.dxGrid)) return;
        	this.gfnConfirm("대여금 계획생성 합니다.", "fnPlanCreatCallback");
        }

        // 계획생성 Callback
        this.fnPlanCreatCallback = function(strId, val) {

        	if(val == false) return;

        	this.dsExcute.clearData();
        	this.dsExcute.addRow();

        	this.dsExcute.setColumn(0, "NO_LOAN", this.dsList.getColumn(this.dsList.rowposition,"NO_LOAN"));
        	this.dsExcute.setColumn(0, "DT_DATE", this.dsList.getColumn(this.dsList.rowposition,"FR_LOAN"));
        	this.dsExcute.setColumn(0, "YN_FIRST", "Y");
        	this.dsExcute.setColumn(0, "ID_USER", this.AuthClient.ID_USER);

        	var strSvcId    = "e_create";
        	var strSvcType  = "grid";
        	var inProc		= "_dsProc";
        	var inData      = "e_create=dsExcute";
        	var outData     = "dsResult=e_create0";
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

        // 계획/실적
        this.fnPlanPerform = function(obj,e) {
        	if (!this.gfnGridIsRow(this.dxGrid)) { return false; }

        	var param = {};
        	param.OWNER_ID = "DFG_LOAN";

        	param.CD_CORP = this.dsList.getColumn(this.dsList.rowposition, "CD_CORP");
        	param.DS_CORP = this.dsList.getColumn(this.dsList.rowposition, "DS_CORP");
        	param.DT_FROM = this.dsList.getColumn(this.dsList.rowposition, "FR_LOAN");
        	param.DT_TO = this.gfnAddMonth(this.dsList.getColumn(this.dsList.rowposition, "TO_LOAN"),1);
        	param.NO_LOAN = this.dsList.getColumn(this.dsList.rowposition, "NO_LOAN");
        	param.NM_LOAN = this.dsList.getColumn(this.dsList.rowposition,"NM_LOAN");

        	this.gfnFormOpen("DFH", "DFG_LOAN_PLAN", "", param);
        }

        // 변동정보등록
        this.fnChngInfoInsert = function(obj,e) {
        	if(!this.gfnGridIsRow(this.dxGrid)) return;
        	var param = {};

        	param.CD_CORP = this.dsList.getColumn(this.dsList.rowposition, "CD_CORP");
        	param.DS_CORP = this.dsList.getColumn(this.dsList.rowposition, "DS_CORP");
        	param.DT_FROM = this.dsList.getColumn(this.dsList.rowposition, "FR_LOAN");
        	param.NO_LOAN = this.dsList.getColumn(this.dsList.rowposition,"NO_LOAN");
        	param.NM_LOAN = this.dsList.getColumn(this.dsList.rowposition,"NM_LOAN");
        	this.gfnFormOpen("DFH", "DFG_LOANCHG", "fnPopCallBack", param, this.getOffsetWidth(), this.getOffsetHeight());
        }

        this.fnPopCallBack = function(svcID, val) {

        	if (svcID.indexOf("DFG_LOANCHG") > -1) {
        		this.FormBtns.Select.click();
        	}
        }

        // 전자결재상신
        this.fnElctrncPmntUp = function(obj,e) {
        	// TODO 전자결재상신 기능 추가
        	this.gfnAlert("todo 전자결재상신");
        }

        // 전자결재조회
        this.fnElctrncPmntSrch = function(obj,e) {
        	// TODO 전자결재조회 기능 추가
        	this.gfnAlert("todo 전자결재조회");
        }

        // 외화금액 및 환율 수정시 대여금액 반영
        // 2019.11.12 원화금액으로 바뀌고 자동계산기능도 없앰
        this.fnCalAmLoan = function(obj,e)
        {
        // 	var amCurr = this.mskAM_CURRENCY.value;	// 외화금액
        // 	var rtCurr = this.mskRT_CURRENCY.value;	// 환율
        // 	var amLoan = 0;							// 대여금액
        //
        // 	amLoan = nexacro.floor(amCurr * rtCurr);
        // 	this.mskAM_LOAN.set_value(amLoan);
        };



        // 조회결과에 따른 외화금액/화폐단위/환율/수리신고번호/사후신고마감일/사후신고일 visible 처리
        this.fnVisibleComp = function(visible) {

        	this.divData.form.divDataRight.form.sta901.set_visible(visible);
        	this.divData.form.divDataRight.form.sta902.set_visible(visible);
        	this.divData.form.divDataRight.form.sta903.set_visible(visible);
        	this.divData.form.divDataRight.form.sta904.set_visible(visible);
        	this.divData.form.divDataRight.form.sta905.set_visible(visible);
        	this.divData.form.divDataRight.form.sta906.set_visible(visible);
        	this.divData.form.divDataRight.form.sta907.set_visible(visible);
        	this.divData.form.divDataRight.form.sta908.set_visible(visible);
        	this.divData.form.divDataRight.form.sta909.set_visible(visible);

        	this.divData.form.divDataRight.form.mskAM_KOR.set_visible(visible);
        	this.divData.form.divDataRight.form.cboCD_CURRENCY.set_visible(visible);
        	this.divData.form.divDataRight.form.mskRT_CURRENCY.set_visible(visible);
        	this.divData.form.divDataRight.form.txtNO_AFTER.set_visible(visible);
        	this.divData.form.divDataRight.form.calDT_AFTER1.set_visible(visible);
        	this.divData.form.divDataRight.form.calDT_AFTER2.set_visible(visible);
        	this.divData.form.divDataRight.form.cboYN_WONFIX.set_visible(visible);

        	if (visible) {
        		this.divData.form.divDataRight.form.div00.set_top(470);
        	} else {
        		this.divData.form.divDataRight.form.div00.set_top(412);
        	}
        }

        this.dsList_onrowposchanged = function(obj,e)
        {

        	var ynView = obj.getColumn(e.newrow, "YN_VIEW");
        	trace("ynView :: " + ynView);

        	if (ynView == "Y") {
        		this.fnVisibleComp(true);
        	} else {
        		this.fnVisibleComp(false);
        	}
        };

        this.dsList_oncolumnchanged = function(obj,e)
        {
        	if (this.gfnGetFlag(this.dsList, e.row) == "#")
        		return;

        	trace("e.columnid :: " + e.columnid);
        	if (e.columnid == "YN_VIEW") {
        		if (e.newvalue == "Y") {
        			this.fnVisibleComp(true);
        		} else {
        			this.fnVisibleComp(false);
        		}
        	}

        	// 대여금명 : 대여기관_귀속부서_YYMM_대여한도_조달방법 으로 조합
        	if (e.columnid == "DS_VENDOR" || e.columnid == "DS_DEPT_ACNT" || e.columnid == "AM_LOANMAX" || e.columnid == "TY_RAISE" || e.columnid == "FR_LOAN") {
        		if (e.oldvalue != e.newvalue) {
        			var NM_LOAN = "";
        			var DS_VENDOR = this.gfnIsNull(obj.getColumn(e.row, "DS_VENDOR")) ? "" : obj.getColumn(e.row, "DS_VENDOR");
        			var DS_DEPT_ACNT = this.gfnIsNull(obj.getColumn(e.row, "DS_DEPT_ACNT")) ? "" : obj.getColumn(e.row, "DS_DEPT_ACNT");
        			// 20200413 대여기간의 년월로 변경 var YYMM = this.gfnGetDate().slice(2,6);
        			var YYMM = this.gfnIsNull(obj.getColumn(e.row, "FR_LOAN")) ? "" : obj.getColumn(e.row, "FR_LOAN").slice(2,6);

        			// 대여한도 억 round처리 및 한글금액으로 수정( ex] 1억, 10억, 123억 억단위...)
        			var AM_LOANMAX = this.gfnIsNull(obj.getColumn(e.row, "AM_LOANMAX")) ? "" : obj.getColumn(e.row, "AM_LOANMAX");
        			var chngAmt = nexacro.round(AM_LOANMAX, -8);
        			var finAmt = "";
        			if (!this.gfnIsNull(chngAmt) && chngAmt.toString().length >= 9) {
        				trace("chngAmt.toString().length :: " + chngAmt.toString().length);
        				var endIdx = chngAmt.toString().length - 8;
        				finAmt = chngAmt.toString().substr(0,endIdx) + "억";
        			} else {
        				finAmt = "";
        			}

        			var TY_RAISE = this.gfnIsNull(obj.getColumn(e.row, "TY_RAISE")) ? "" : obj.getColumn(e.row, "TY_RAISE");

        			NM_LOAN = this.gfnIsNull(DS_VENDOR) ? "" : DS_VENDOR;
        			NM_LOAN = NM_LOAN + (this.gfnIsNull(DS_DEPT_ACNT) ? "" : (this.gfnIsNull(NM_LOAN) ? "" : "_") + DS_DEPT_ACNT);
        			// 20200413 주석 NM_LOAN = NM_LOAN + (this.gfnIsNull(NM_LOAN) ? "" : "_") + YYMM;
        			NM_LOAN = NM_LOAN + (this.gfnIsNull(NM_LOAN) ? "" : this.gfnIsNull(YYMM) ? "" : "_") + YYMM;
        			NM_LOAN = NM_LOAN + (this.gfnIsNull(finAmt) ? "" : (this.gfnIsNull(NM_LOAN) ? "" : "_") + finAmt);
        			NM_LOAN = NM_LOAN + (this.gfnIsNull(TY_RAISE) ? "" : (this.gfnIsNull(NM_LOAN) ? "" : "_") + TY_RAISE);

        			obj.setColumn(e.row, "NM_LOAN", NM_LOAN);
        		}
        	}
        };

        // 첨부파일
        this.fnFileUpload = function(obj,e) {
        	//trace("this.btnFileUpload.text :: " + this.btnFileUpload.text);
        	if (this.dsList.rowcount <= 0) {
        		return false;
        	}
        	//var colnm = this.gfnGridGetBindColumnNameByIndex(obj, e.cell);

        	//if(colnm == "URL_PROOF") {
        		// 최초 작성시엔 NO_SEQ가 없기 때문에 저장 후에 파일 첨부를 진행하여야 함.
        		// CD_DIR에 넣어줄 값이 없기에 저장 후 진행!
        		if(this.gfnGetFlag(this.dsList, this.dsList.rowposition) == "I"){
        			this.gfnAlert("저장 후 파일첨부 진행.");
        			return false;
        		}

        		var cdGubun = "DF05";
        		var cdDir = "NO_LOAN";

        		var fileManager = {};
        		fileManager.CD_GUBUN = cdGubun;
        		fileManager.CD_DIR = [this.dsList.getColumn(this.dsList.rowposition, cdDir)];
        		fileManager.IS_READONLY = false;

        // 		trace("VcboAccntGb :: " + VcboAccntGb);
        // 		trace("fileManager.CD_GUBUN :: " + fileManager.CD_GUBUN);
        // 		trace("fileManager.CD_DIR :: " + fileManager.CD_DIR);
        // 		trace("fileManager.IS_READONLY :: " + fileManager.IS_READONLY);

        		this.gfnFileManager(fileManager, "fnFileCallback");
        	//}
        }

        this.fnFileCallback = function(strID, val) {
        	// val.IsChange : 변경여부, val.Cnt : 파일개수

        	// 파일개수를 다시 셋팅
        	this.dsList.set_enableevent(false);
        	if(val.Cnt == 0) {
        		this.btnFileUpload.set_text("첨부(0)");
        	} else {
        		this.btnFileUpload.set_text("첨부(" + val.Cnt + ")");
        	}
        	this.dsList.setColumn(this.dsList.rowposition, "URL_PROOF", "첨부(" + val.Cnt + ")");
        	this.dsList.set_enableevent(true);
        };
        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.form_onload,this);
            this.divSearch.form.cboTY_REPAY.addEventHandler("onitemchanged",this.fnSearchInit,this);
            this.divData.addEventHandler("ondragmove",this.divData_ondragmove,this);
            this.divData.form.divSplitter.addEventHandler("ondrag",this.divData_divSplitter_ondrag,this);
            this.divData.form.divDataRight.form.sta03.addEventHandler("onclick",this.divData_divDataRight_sta03_onclick,this);
            this.divData.form.divDataRight.form.mskAM_KOR.addEventHandler("onchanged",this.fnCalAmLoan,this);
            this.divData.form.divDataRight.form.mskRT_CURRENCY.addEventHandler("onchanged",this.fnCalAmLoan,this);
            this.divData.form.divDataRight.form.div00.form.sta819.addEventHandler("onclick",this.divData_divDataRight_sta03_onclick,this);
            this.divData.form.divDataRight.form.div00.form.sta00.addEventHandler("onclick",this.divData_divDataRight_sta03_onclick,this);
            this.dsList.addEventHandler("onrowposchanged",this.dsList_onrowposchanged,this);
            this.dsList.addEventHandler("oncolumnchanged",this.dsList_oncolumnchanged,this);
        };
        this.loadIncludeScript("DFG_LOAN.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
