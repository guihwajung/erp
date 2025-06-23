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
            this.set_titletext("New Form");
            if (Form == this.constructor)
            {
                this._setFormPosition(1280,720);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("dsList", this);
            obj._setContents("<ColumnInfo><Column id=\"CD_CORP\" type=\"STRING\" size=\"256\"/><Column id=\"DS_CORP\" type=\"STRING\" size=\"256\"/><Column id=\"DT_BASE\" type=\"STRING\" size=\"256\"/><Column id=\"TY_DEPT\" type=\"STRING\" size=\"256\"/><Column id=\"TM_SWORK\" type=\"STRING\" size=\"256\"/><Column id=\"TM_EWORK\" type=\"STRING\" size=\"256\"/><Column id=\"TM_SOBLIGATE\" type=\"STRING\" size=\"256\"/><Column id=\"TM_EOBLIGATE\" type=\"STRING\" size=\"256\"/><Column id=\"TM_BREAKWORK\" type=\"STRING\" size=\"256\"/><Column id=\"TM_WORK_DAY\" type=\"STRING\" size=\"256\"/><Column id=\"YN_OVER_MIN\" type=\"STRING\" size=\"256\"/><Column id=\"TM_OVER_MIN\" type=\"STRING\" size=\"256\"/><Column id=\"YN_OVER_MAX\" type=\"STRING\" size=\"256\"/><Column id=\"TM_OVER_MAX\" type=\"STRING\" size=\"256\"/><Column id=\"CD_DEPT\" type=\"STRING\" size=\"256\"/><Column id=\"DS_DEPT\" type=\"STRING\" size=\"256\"/><Column id=\"HH_SWORK\" type=\"STRING\" size=\"256\"/><Column id=\"MM_SWORK\" type=\"STRING\" size=\"256\"/><Column id=\"HH_EWORK\" type=\"STRING\" size=\"256\"/><Column id=\"MM_EWORK\" type=\"STRING\" size=\"256\"/><Column id=\"HH_SOBLIGATE\" type=\"STRING\" size=\"256\"/><Column id=\"MM_SOBLIGATE\" type=\"STRING\" size=\"256\"/><Column id=\"HH_EOBLIGATE\" type=\"STRING\" size=\"256\"/><Column id=\"MM_EOBLIGATE\" type=\"STRING\" size=\"256\"/><Column id=\"HH_BREAKWORK\" type=\"STRING\" size=\"256\"/><Column id=\"MM_BREAKWORK\" type=\"STRING\" size=\"256\"/><Column id=\"HH_OVER_MIN\" type=\"STRING\" size=\"256\"/><Column id=\"MM_OVER_MIN\" type=\"STRING\" size=\"256\"/><Column id=\"HH_OVER_MAX\" type=\"STRING\" size=\"256\"/><Column id=\"MM_OVER_MAX\" type=\"STRING\" size=\"256\"/><Column id=\"YN_SATURDAY\" type=\"STRING\" size=\"256\"/><Column id=\"HH_SATSTART\" type=\"STRING\" size=\"256\"/><Column id=\"MM_SATSTART\" type=\"STRING\" size=\"256\"/><Column id=\"HH_SATEND\" type=\"STRING\" size=\"256\"/><Column id=\"MM_SATEND\" type=\"STRING\" size=\"256\"/><Column id=\"HH_SATBREAK\" type=\"STRING\" size=\"256\"/><Column id=\"MM_SATBREAK\" type=\"STRING\" size=\"256\"/><Column id=\"TM_SATWORK\" type=\"STRING\" size=\"256\"/><Column id=\"DS_REMARK\" type=\"STRING\" size=\"256\"/><Column id=\"YN_DELETE\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("_dsProc", this);
            obj._setContents("<ColumnInfo><Column id=\"TARGET\" type=\"STRING\" size=\"256\"/><Column id=\"SP\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"TARGET\">select</Col><Col id=\"SP\">DAGPR_AUTH_WEEK_SELECT</Col></Row><Row><Col id=\"TARGET\">save</Col><Col id=\"SP\">DAGPR_AUTH_WEEK_SAVE</Col></Row><Row><Col id=\"SP\">DAGPR_AUTH_WEEK_CREATE</Col><Col id=\"TARGET\">exec</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsSearch", this);
            obj._setContents("<ColumnInfo><Column id=\"CD_CORP\" type=\"STRING\" size=\"256\"/><Column id=\"DT_BASE\" type=\"STRING\" size=\"256\"/><Column id=\"TY_DEPT\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"CD_CORP\"/><Col id=\"DT_BASE\"/><Col id=\"TY_DEPT\">%</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsTY_DEPT", this);
            obj._setContents("<ColumnInfo><Column id=\"CD_CODE\" type=\"STRING\" size=\"256\"/><Column id=\"DS_CODE\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"CD_CODE\">%</Col><Col id=\"DS_CODE\">전체</Col></Row><Row><Col id=\"CD_CODE\">00</Col><Col id=\"DS_CODE\">본사</Col></Row><Row><Col id=\"CD_CODE\">10</Col><Col id=\"DS_CODE\">현장</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsYN_OVER", this);
            obj._setContents("<ColumnInfo><Column id=\"CD_CODE\" type=\"STRING\" size=\"256\"/><Column id=\"DS_CODE\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"CD_CODE\">Y</Col><Col id=\"DS_CODE\">적용</Col></Row><Row><Col id=\"CD_CODE\">N</Col><Col id=\"DS_CODE\">미적용</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsTY_DEPT_DT", this);
            obj._setContents("<ColumnInfo><Column id=\"CD_CODE\" type=\"STRING\" size=\"256\"/><Column id=\"DS_CODE\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"CD_CODE\">00</Col><Col id=\"DS_CODE\">본사</Col></Row><Row><Col id=\"CD_CODE\">10</Col><Col id=\"DS_CODE\">현장</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsHH_SWORK", this);
            obj._setContents("<ColumnInfo><Column id=\"CD_CODE\" type=\"STRING\" size=\"256\"/><Column id=\"DS_CODE\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"CD_CODE\">00</Col><Col id=\"DS_CODE\">00</Col></Row><Row><Col id=\"CD_CODE\">07</Col><Col id=\"DS_CODE\">07</Col></Row><Row><Col id=\"CD_CODE\">08</Col><Col id=\"DS_CODE\">08</Col></Row><Row><Col id=\"CD_CODE\">09</Col><Col id=\"DS_CODE\">09</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsMM", this);
            obj._setContents("<ColumnInfo><Column id=\"CD_CODE\" type=\"STRING\" size=\"256\"/><Column id=\"DS_CODE\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"CD_CODE\">00</Col><Col id=\"DS_CODE\">00</Col></Row><Row><Col id=\"CD_CODE\">10</Col><Col id=\"DS_CODE\">10</Col></Row><Row><Col id=\"CD_CODE\">20</Col><Col id=\"DS_CODE\">20</Col></Row><Row><Col id=\"CD_CODE\">30</Col><Col id=\"DS_CODE\">30</Col></Row><Row><Col id=\"CD_CODE\">40</Col><Col id=\"DS_CODE\">40</Col></Row><Row><Col id=\"CD_CODE\">50</Col><Col id=\"DS_CODE\">50</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsHH_EWORK", this);
            obj._setContents("<ColumnInfo><Column id=\"CD_CODE\" type=\"STRING\" size=\"256\"/><Column id=\"DS_CODE\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"CD_CODE\">00</Col><Col id=\"DS_CODE\">00</Col></Row><Row><Col id=\"CD_CODE\">17</Col><Col id=\"DS_CODE\">17</Col></Row><Row><Col id=\"CD_CODE\">18</Col><Col id=\"DS_CODE\">18</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsHH_SOBLIGATE", this);
            obj._setContents("<ColumnInfo><Column id=\"CD_CODE\" type=\"STRING\" size=\"256\"/><Column id=\"DS_CODE\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"CD_CODE\">00</Col><Col id=\"DS_CODE\">00</Col></Row><Row><Col id=\"CD_CODE\">17</Col><Col id=\"DS_CODE\">17</Col></Row><Row><Col id=\"CD_CODE\">18</Col><Col id=\"DS_CODE\">18</Col></Row><Row><Col id=\"CD_CODE\">19</Col><Col id=\"DS_CODE\">19</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsHH_EOBLIGATE", this);
            obj._setContents("<ColumnInfo><Column id=\"CD_CODE\" type=\"STRING\" size=\"256\"/><Column id=\"DS_CODE\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"CD_CODE\">00</Col><Col id=\"DS_CODE\">00</Col></Row><Row><Col id=\"CD_CODE\">17</Col><Col id=\"DS_CODE\">17</Col></Row><Row><Col id=\"CD_CODE\">18</Col><Col id=\"DS_CODE\">18</Col></Row><Row><Col id=\"CD_CODE\">19</Col><Col id=\"DS_CODE\">19</Col></Row><Row><Col id=\"CD_CODE\">20</Col><Col id=\"DS_CODE\">20</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsHH_BREAKWORK", this);
            obj._setContents("<ColumnInfo><Column id=\"CD_CODE\" type=\"STRING\" size=\"256\"/><Column id=\"DS_CODE\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"CD_CODE\">00</Col><Col id=\"DS_CODE\">00</Col></Row><Row><Col id=\"CD_CODE\">01</Col><Col id=\"DS_CODE\">01</Col></Row><Row><Col id=\"CD_CODE\">02</Col><Col id=\"DS_CODE\">02</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsHH_OVER_MIN", this);
            obj._setContents("<ColumnInfo><Column id=\"CD_CODE\" type=\"STRING\" size=\"256\"/><Column id=\"DS_CODE\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"CD_CODE\">00</Col><Col id=\"DS_CODE\">00</Col></Row><Row><Col id=\"CD_CODE\">01</Col><Col id=\"DS_CODE\">01</Col></Row><Row><Col id=\"CD_CODE\">02</Col><Col id=\"DS_CODE\">02</Col></Row><Row><Col id=\"CD_CODE\">03</Col><Col id=\"DS_CODE\">03</Col></Row><Row><Col id=\"CD_CODE\">04</Col><Col id=\"DS_CODE\">04</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsHH_OVER_MAX", this);
            obj._setContents("<ColumnInfo><Column id=\"CD_CODE\" type=\"STRING\" size=\"256\"/><Column id=\"DS_CODE\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"CD_CODE\">00</Col><Col id=\"DS_CODE\">00</Col></Row><Row><Col id=\"CD_CODE\">01</Col><Col id=\"DS_CODE\">01</Col></Row><Row><Col id=\"CD_CODE\">02</Col><Col id=\"DS_CODE\">02</Col></Row><Row><Col id=\"CD_CODE\">03</Col><Col id=\"DS_CODE\">03</Col></Row><Row><Col id=\"CD_CODE\">04</Col><Col id=\"DS_CODE\">04</Col></Row><Row><Col id=\"CD_CODE\">05</Col><Col id=\"DS_CODE\">05</Col></Row><Row><Col id=\"CD_CODE\">06</Col><Col id=\"DS_CODE\">06</Col></Row><Row><Col id=\"CD_CODE\">07</Col><Col id=\"DS_CODE\">07</Col></Row><Row><Col id=\"CD_CODE\">08</Col><Col id=\"DS_CODE\">08</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsHH_SATSTART", this);
            obj._setContents("<ColumnInfo><Column id=\"CD_CODE\" type=\"STRING\" size=\"256\"/><Column id=\"DS_CODE\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"CD_CODE\">00</Col><Col id=\"DS_CODE\">00</Col></Row><Row><Col id=\"CD_CODE\">07</Col><Col id=\"DS_CODE\">07</Col></Row><Row><Col id=\"CD_CODE\">08</Col><Col id=\"DS_CODE\">08</Col></Row><Row><Col id=\"CD_CODE\">09</Col><Col id=\"DS_CODE\">09</Col></Row><Row><Col id=\"CD_CODE\">10</Col><Col id=\"DS_CODE\">10</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsHH_SATEND", this);
            obj._setContents("<ColumnInfo><Column id=\"CD_CODE\" type=\"STRING\" size=\"256\"/><Column id=\"DS_CODE\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"CD_CODE\">00</Col><Col id=\"DS_CODE\">00</Col></Row><Row><Col id=\"CD_CODE\">12</Col><Col id=\"DS_CODE\">12</Col></Row><Row><Col id=\"CD_CODE\">13</Col><Col id=\"DS_CODE\">13</Col></Row><Row><Col id=\"CD_CODE\">14</Col><Col id=\"DS_CODE\">14</Col></Row><Row><Col id=\"CD_CODE\">15</Col><Col id=\"DS_CODE\">15</Col></Row><Row><Col id=\"CD_CODE\">16</Col><Col id=\"DS_CODE\">16</Col></Row><Row><Col id=\"CD_CODE\">17</Col><Col id=\"DS_CODE\">17</Col></Row><Row><Col id=\"CD_CODE\">18</Col><Col id=\"DS_CODE\">18</Col></Row><Row><Col id=\"CD_CODE\">19</Col><Col id=\"DS_CODE\">19</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsYN_SATURDAY", this);
            obj._setContents("<ColumnInfo><Column id=\"CD_CODE\" type=\"STRING\" size=\"256\"/><Column id=\"DS_CODE\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"CD_CODE\">Y</Col><Col id=\"DS_CODE\">대상</Col></Row><Row><Col id=\"CD_CODE\">N</Col><Col id=\"DS_CODE\">미대상</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsYN_DELETE", this);
            obj._setContents("<ColumnInfo><Column id=\"CD_CODE\" type=\"STRING\" size=\"256\"/><Column id=\"DS_CODE\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"CD_CODE\">Y</Col><Col id=\"DS_CODE\">사용</Col></Row><Row><Col id=\"CD_CODE\">N</Col><Col id=\"DS_CODE\">미사용</Col></Row></Rows>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Div("divSearch","0","0",null,"46.0","0",null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_cssclass("div_SEARCH_Bg");
            obj.set_text("");
            this.addChild(obj.name, obj);

            obj = new Static("staCD_CORP","0.0","10.0","79.0","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("0");
            obj.set_text("법인");
            obj.set_cssclass("sta_WF_SchLabelE");
            this.divSearch.addChild(obj.name, obj);

            obj = new Div("ccfCD_CORP","staCD_CORP:0.0","10.0","250","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.getSetter("CDTextWidth").set("30");
            obj.set_taborder("1");
            obj.set_url("cmm::cmmCodeFind.xfdl");
            obj.set_text("");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("staDT_BASE","ccfCD_CORP:0.0","10.0","79.0","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("2");
            obj.set_text("적용일");
            obj.set_cssclass("sta_WF_SchLabel");
            this.divSearch.addChild(obj.name, obj);

            obj = new Calendar("ctclDT_BASE","staDT_BASE:0.0","10.0","105","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("3");
            obj.set_dateformat("yyyy-MM-dd");
            obj.set_editformat("yyyyMMdd");
            obj.set_autoselect("true");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("staID_SABUN","ctclDT_BASE:0.0","10.0","79.0","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("4");
            obj.set_text("구분");
            obj.set_cssclass("sta_WF_SchLabel");
            this.divSearch.addChild(obj.name, obj);

            obj = new Radio("rdoTY_DEPT","staID_SABUN:0.0","10.0","206","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("5");
            obj.set_innerdataset("dsTY_DEPT");
            obj.set_direction("vertical");
            obj.set_fittocontents("width");
            obj.set_codecolumn("CD_CODE");
            obj.set_datacolumn("DS_CODE");
            obj.set_text("전체");
            obj.set_value("%");
            obj.set_index("0");
            this.divSearch.addChild(obj.name, obj);

            obj = new Div("divData","0","divSearch:10",null,null,"0","0",null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_cssclass("div_DATA_Bg");
            this.addChild(obj.name, obj);

            obj = new Div("divSplitter","47.19%","0","5","100.00%",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("0");
            obj.set_background("skyblue");
            obj.set_cursor("ew-resize");
            this.divData.addChild(obj.name, obj);

            obj = new Div("divDataLeft","0","0",null,null,"divSplitter:5","0",null,null,null,null,this.divData.form);
            obj.set_taborder("0");
            this.divData.addChild(obj.name, obj);

            obj = new Grid("objGrid","0","0",null,null,"0","0",null,null,null,null,this.divData.form.divDataLeft.form);
            obj.set_taborder("0");
            obj._setContents("");
            this.divData.form.divDataLeft.addChild(obj.name, obj);

            obj = new Div("divDataRight","divSplitter:5","0",null,null,"0","0",null,null,null,null,this.divData.form);
            obj.set_taborder("0");
            this.divData.addChild(obj.name, obj);

            obj = new Static("sta30","0","0","120","30",null,null,null,null,null,null,this.divData.form.divDataRight.form);
            obj.set_taborder("0");
            obj.set_text("법인");
            obj.set_cssclass("sta_WF_tablelabelE");
            this.divData.form.divDataRight.addChild(obj.name, obj);

            obj = new Static("sta00","119","29",null,"30","0",null,null,null,null,null,this.divData.form.divDataRight.form);
            obj.set_taborder("1");
            obj.set_cssclass("sta_WF_tablebg");
            this.divData.form.divDataRight.addChild(obj.name, obj);

            obj = new Static("sta35","119","0",null,"30","0",null,null,null,null,null,this.divData.form.divDataRight.form);
            obj.set_taborder("2");
            obj.set_cssclass("sta_WF_tablebg");
            this.divData.form.divDataRight.addChild(obj.name, obj);

            obj = new Static("sta02","0","29","120","30",null,null,null,null,null,null,this.divData.form.divDataRight.form);
            obj.set_taborder("3");
            obj.set_text("적용일자");
            obj.set_cssclass("sta_WF_tablelabelE");
            this.divData.form.divDataRight.addChild(obj.name, obj);

            obj = new Static("sta01","119","58",null,"30","0",null,null,null,null,null,this.divData.form.divDataRight.form);
            obj.set_taborder("5");
            obj.set_cssclass("sta_WF_tablebg");
            this.divData.form.divDataRight.addChild(obj.name, obj);

            obj = new Static("sta03","0","58","120","30",null,null,null,null,null,null,this.divData.form.divDataRight.form);
            obj.set_taborder("6");
            obj.set_text("구분");
            obj.set_cssclass("sta_WF_tablelabelE");
            this.divData.form.divDataRight.addChild(obj.name, obj);

            obj = new Radio("rdoTY_DEPT","124","64","205","20",null,null,null,null,null,null,this.divData.form.divDataRight.form);
            obj.set_taborder("4");
            obj.set_innerdataset("dsTY_DEPT_DT");
            obj.set_direction("vertical");
            obj.set_fittocontents("width");
            obj.set_codecolumn("CD_CODE");
            obj.set_datacolumn("DS_CODE");
            obj.set_enable("false");
            obj.set_text("본사");
            obj.set_value("00");
            obj.set_index("0");
            this.divData.form.divDataRight.addChild(obj.name, obj);

            obj = new Div("ccfCD_CORP","124","5","250","20",null,null,null,null,null,null,this.divData.form.divDataRight.form);
            obj.getSetter("CodeFindName").set("DAX_CFCORP_CODEFIND");
            obj.getSetter("CDTextWidth").set("30");
            obj.set_taborder("7");
            obj.set_url("cmm::cmmCodeFind.xfdl");
            obj.set_text("");
            obj.set_enable("false");
            this.divData.form.divDataRight.addChild(obj.name, obj);

            obj = new Calendar("ctclDT_BASE","124","34","105","20",null,null,null,null,null,null,this.divData.form.divDataRight.form);
            obj.set_taborder("8");
            obj.set_dateformat("yyyy-MM-dd");
            obj.set_editformat("yyyyMMdd");
            obj.set_autoselect("true");
            obj.set_enable("false");
            this.divData.form.divDataRight.addChild(obj.name, obj);

            obj = new Static("sta04","119","116",null,"30","0",null,null,null,null,null,this.divData.form.divDataRight.form);
            obj.set_taborder("9");
            obj.set_cssclass("sta_WF_tablebg");
            this.divData.form.divDataRight.addChild(obj.name, obj);

            obj = new Static("sta05","0","116","120","30",null,null,null,null,null,null,this.divData.form.divDataRight.form);
            obj.set_taborder("10");
            obj.set_text("소정근로시간");
            obj.set_cssclass("sta_WF_tablelabel");
            obj.set_textDecoration("none");
            this.divData.form.divDataRight.addChild(obj.name, obj);

            obj = new Static("sta06","119","145",null,"30","0",null,null,null,null,null,this.divData.form.divDataRight.form);
            obj.set_taborder("11");
            obj.set_cssclass("sta_WF_tablebg");
            this.divData.form.divDataRight.addChild(obj.name, obj);

            obj = new Static("sta07","0","145","120","30",null,null,null,null,null,null,this.divData.form.divDataRight.form);
            obj.set_taborder("12");
            obj.set_text("의무연장시간");
            obj.set_cssclass("sta_WF_tablelabel");
            obj.set_textDecoration("none");
            this.divData.form.divDataRight.addChild(obj.name, obj);

            obj = new Static("sta08","119","174",null,"30","0",null,null,null,null,null,this.divData.form.divDataRight.form);
            obj.set_taborder("13");
            obj.set_cssclass("sta_WF_tablebg");
            this.divData.form.divDataRight.addChild(obj.name, obj);

            obj = new Static("sta09","0","174","120","30",null,null,null,null,null,null,this.divData.form.divDataRight.form);
            obj.set_taborder("14");
            obj.set_text("휴게시간");
            obj.set_cssclass("sta_WF_tablelabel");
            obj.set_textDecoration("none");
            this.divData.form.divDataRight.addChild(obj.name, obj);

            obj = new Static("sta10","119","203",null,"30","0",null,null,null,null,null,this.divData.form.divDataRight.form);
            obj.set_taborder("15");
            obj.set_cssclass("sta_WF_tablebg");
            this.divData.form.divDataRight.addChild(obj.name, obj);

            obj = new Static("sta11","0","203","120","30",null,null,null,null,null,null,this.divData.form.divDataRight.form);
            obj.set_taborder("16");
            obj.set_text("일근로시간");
            obj.set_cssclass("sta_WF_tablelabel");
            obj.set_textDecoration("none");
            this.divData.form.divDataRight.addChild(obj.name, obj);

            obj = new Edit("txtTM_WORK_DAY","124","208","50","20",null,null,null,null,null,null,this.divData.form.divDataRight.form);
            obj.set_taborder("17");
            obj.set_maxlength("5");
            obj.set_enable("false");
            this.divData.form.divDataRight.addChild(obj.name, obj);

            obj = new Static("sta12","119","232",null,"30","0",null,null,null,null,null,this.divData.form.divDataRight.form);
            obj.set_taborder("18");
            obj.set_cssclass("sta_WF_tablebg");
            this.divData.form.divDataRight.addChild(obj.name, obj);

            obj = new Static("sta13","0","232","120","30",null,null,null,null,null,null,this.divData.form.divDataRight.form);
            obj.set_taborder("19");
            obj.set_text("일최소연장근로");
            obj.set_cssclass("sta_WF_tablelabel");
            obj.set_textDecoration("none");
            this.divData.form.divDataRight.addChild(obj.name, obj);

            obj = new Static("sta14","119","261",null,"30","0",null,null,null,null,null,this.divData.form.divDataRight.form);
            obj.set_taborder("20");
            obj.set_cssclass("sta_WF_tablebg");
            this.divData.form.divDataRight.addChild(obj.name, obj);

            obj = new Static("sta15","0","261","120","30",null,null,null,null,null,null,this.divData.form.divDataRight.form);
            obj.set_taborder("21");
            obj.set_text("일최대연장근로");
            obj.set_cssclass("sta_WF_tablelabel");
            obj.set_textDecoration("none");
            this.divData.form.divDataRight.addChild(obj.name, obj);

            obj = new Radio("rdoYN_OVER_MIN","124","238","110","20",null,null,null,null,null,null,this.divData.form.divDataRight.form);
            obj.set_taborder("22");
            obj.set_innerdataset("dsYN_OVER");
            obj.set_direction("vertical");
            obj.set_fittocontents("width");
            obj.set_codecolumn("CD_CODE");
            obj.set_datacolumn("DS_CODE");
            obj.set_text("적용");
            obj.set_value("Y");
            obj.set_index("0");
            this.divData.form.divDataRight.addChild(obj.name, obj);

            obj = new Radio("rdoYN_OVER_MAX","124","267","110","20",null,null,null,null,null,null,this.divData.form.divDataRight.form);
            obj.set_taborder("23");
            obj.set_innerdataset("dsYN_OVER");
            obj.set_direction("vertical");
            obj.set_fittocontents("width");
            obj.set_codecolumn("CD_CODE");
            obj.set_datacolumn("DS_CODE");
            obj.set_text("적용");
            obj.set_value("Y");
            obj.set_index("0");
            this.divData.form.divDataRight.addChild(obj.name, obj);

            obj = new Static("sta16","119","87",null,"30","0",null,null,null,null,null,this.divData.form.divDataRight.form);
            obj.set_taborder("24");
            obj.set_cssclass("sta_WF_tablebg");
            this.divData.form.divDataRight.addChild(obj.name, obj);

            obj = new Static("sta17","0","87","120","30",null,null,null,null,null,null,this.divData.form.divDataRight.form);
            obj.set_taborder("25");
            obj.set_text("부서코드");
            obj.set_cssclass("sta_WF_tablelabel");
            obj.set_textDecoration("none");
            this.divData.form.divDataRight.addChild(obj.name, obj);

            obj = new Div("ccfCD_DEPT","124","92","250","20",null,null,null,null,null,null,this.divData.form.divDataRight.form);
            obj.getSetter("CDTextWidth").set("80");
            obj.set_taborder("26");
            obj.set_url("cmm::cmmCodeFind.xfdl");
            obj.set_text("");
            obj.set_enable("true");
            this.divData.form.divDataRight.addChild(obj.name, obj);

            obj = new Static("sta18","119","290",null,"30","0",null,null,null,null,null,this.divData.form.divDataRight.form);
            obj.set_taborder("27");
            obj.set_cssclass("sta_WF_tablebg");
            obj.set_text("");
            this.divData.form.divDataRight.addChild(obj.name, obj);

            obj = new Radio("rdoYN_SATURDAY","124","296","110","20",null,null,null,null,null,null,this.divData.form.divDataRight.form);
            obj.set_taborder("28");
            obj.set_innerdataset("dsYN_SATURDAY");
            obj.set_direction("vertical");
            obj.set_fittocontents("width");
            obj.set_codecolumn("CD_CODE");
            obj.set_datacolumn("DS_CODE");
            obj.set_text("적용");
            obj.set_value("Y");
            obj.set_index("0");
            this.divData.form.divDataRight.addChild(obj.name, obj);

            obj = new Static("sta19","0","290","120","30",null,null,null,null,null,null,this.divData.form.divDataRight.form);
            obj.set_taborder("29");
            obj.set_text("토요대상여부");
            obj.set_cssclass("sta_WF_tablelabel");
            obj.set_textDecoration("none");
            this.divData.form.divDataRight.addChild(obj.name, obj);

            obj = new Static("sta20","119","319",null,"30","0",null,null,null,null,null,this.divData.form.divDataRight.form);
            obj.set_taborder("30");
            obj.set_cssclass("sta_WF_tablebg");
            this.divData.form.divDataRight.addChild(obj.name, obj);

            obj = new Static("sta21","0","319","120","30",null,null,null,null,null,null,this.divData.form.divDataRight.form);
            obj.set_taborder("31");
            obj.set_text("토요근무시간");
            obj.set_cssclass("sta_WF_tablelabel");
            obj.set_textDecoration("none");
            this.divData.form.divDataRight.addChild(obj.name, obj);

            obj = new Static("sta22","119","348",null,"30","0",null,null,null,null,null,this.divData.form.divDataRight.form);
            obj.set_taborder("32");
            obj.set_cssclass("sta_WF_tablebg");
            this.divData.form.divDataRight.addChild(obj.name, obj);

            obj = new Static("sta23","0","348","120","30",null,null,null,null,null,null,this.divData.form.divDataRight.form);
            obj.set_taborder("33");
            obj.set_text("토요휴게시간");
            obj.set_cssclass("sta_WF_tablelabel");
            obj.set_textDecoration("none");
            this.divData.form.divDataRight.addChild(obj.name, obj);

            obj = new Static("sta24","119","377",null,"30","0",null,null,null,null,null,this.divData.form.divDataRight.form);
            obj.set_taborder("34");
            obj.set_cssclass("sta_WF_tablebg");
            this.divData.form.divDataRight.addChild(obj.name, obj);

            obj = new Static("sta25","0","377","120","30",null,null,null,null,null,null,this.divData.form.divDataRight.form);
            obj.set_taborder("35");
            obj.set_text("토요근로시간");
            obj.set_cssclass("sta_WF_tablelabel");
            obj.set_textDecoration("none");
            this.divData.form.divDataRight.addChild(obj.name, obj);

            obj = new Static("sta26","119","435",null,"71","0",null,null,null,null,null,this.divData.form.divDataRight.form);
            obj.set_taborder("36");
            obj.set_cssclass("sta_WF_tablebg");
            this.divData.form.divDataRight.addChild(obj.name, obj);

            obj = new Static("sta27","0","435","120","71",null,null,null,null,null,null,this.divData.form.divDataRight.form);
            obj.set_taborder("37");
            obj.set_text("비고");
            obj.set_cssclass("sta_WF_tablelabel");
            obj.set_textDecoration("none");
            this.divData.form.divDataRight.addChild(obj.name, obj);

            obj = new TextArea("txtDS_REMARK","124","440","517","61",null,null,null,null,null,null,this.divData.form.divDataRight.form);
            obj.set_taborder("38");
            this.divData.form.divDataRight.addChild(obj.name, obj);

            obj = new Edit("txtTM_SATWORK","124","382","50","20",null,null,null,null,null,null,this.divData.form.divDataRight.form);
            obj.set_taborder("39");
            obj.set_maxlength("5");
            obj.set_enable("false");
            this.divData.form.divDataRight.addChild(obj.name, obj);

            obj = new Combo("cboHH_SATBREAK","124","353","50","20",null,null,null,null,null,null,this.divData.form.divDataRight.form);
            obj.set_taborder("40");
            obj.set_datacolumn("DS_CODE");
            obj.set_codecolumn("CD_CODE");
            obj.set_innerdataset("dsHH_BREAKWORK");
            obj.set_text("");
            obj.set_value("");
            obj.set_index("0");
            this.divData.form.divDataRight.addChild(obj.name, obj);

            obj = new Combo("cboMM_SATBREAK","cboHH_SATBREAK:5","353","50","20",null,null,null,null,null,null,this.divData.form.divDataRight.form);
            obj.set_taborder("41");
            obj.set_datacolumn("DS_CODE");
            obj.set_codecolumn("CD_CODE");
            obj.set_innerdataset("dsMM");
            obj.set_text("00");
            obj.set_value("00");
            obj.set_index("0");
            this.divData.form.divDataRight.addChild(obj.name, obj);

            obj = new Static("staTO_EDUCATION02","234","324","10","20",null,null,null,null,null,null,this.divData.form.divDataRight.form);
            obj.set_taborder("42");
            obj.set_text("~");
            this.divData.form.divDataRight.addChild(obj.name, obj);

            obj = new Combo("cboHH_SATEND","249","324","50","20",null,null,null,null,null,null,this.divData.form.divDataRight.form);
            obj.set_taborder("43");
            obj.set_datacolumn("DS_CODE");
            obj.set_codecolumn("CD_CODE");
            obj.set_innerdataset("dsHH_SATEND");
            obj.set_text("");
            obj.set_value("");
            obj.set_index("0");
            this.divData.form.divDataRight.addChild(obj.name, obj);

            obj = new Combo("cboMM_SATEND","304","324","50","20",null,null,null,null,null,null,this.divData.form.divDataRight.form);
            obj.set_taborder("44");
            obj.set_datacolumn("DS_CODE");
            obj.set_codecolumn("CD_CODE");
            obj.set_innerdataset("dsMM");
            obj.set_text("");
            obj.set_value("");
            obj.set_index("0");
            this.divData.form.divDataRight.addChild(obj.name, obj);

            obj = new Combo("cboMM_SATSTART","179","324","50","20",null,null,null,null,null,null,this.divData.form.divDataRight.form);
            obj.set_taborder("45");
            obj.set_datacolumn("DS_CODE");
            obj.set_codecolumn("CD_CODE");
            obj.set_innerdataset("dsMM");
            obj.set_text("");
            obj.set_value("");
            obj.set_index("0");
            this.divData.form.divDataRight.addChild(obj.name, obj);

            obj = new Combo("cboHH_SATSTART","124","324","50","20",null,null,null,null,null,null,this.divData.form.divDataRight.form);
            obj.set_taborder("46");
            obj.set_datacolumn("DS_CODE");
            obj.set_codecolumn("CD_CODE");
            obj.set_innerdataset("dsHH_SATSTART");
            obj.set_text("");
            obj.set_value("");
            obj.set_index("0");
            this.divData.form.divDataRight.addChild(obj.name, obj);

            obj = new Static("staTO_EDUCATION00","234","121","10","20",null,null,null,null,null,null,this.divData.form.divDataRight.form);
            obj.set_taborder("47");
            obj.set_text("~");
            this.divData.form.divDataRight.addChild(obj.name, obj);

            obj = new Combo("cboHH_EWORK","249","121","50","20",null,null,null,null,null,null,this.divData.form.divDataRight.form);
            obj.set_taborder("48");
            obj.set_datacolumn("DS_CODE");
            obj.set_codecolumn("CD_CODE");
            obj.set_innerdataset("dsHH_EWORK");
            obj.set_text("");
            obj.set_value("");
            obj.set_index("0");
            this.divData.form.divDataRight.addChild(obj.name, obj);

            obj = new Combo("cboMM_EWORK","304","121","50","20",null,null,null,null,null,null,this.divData.form.divDataRight.form);
            obj.set_taborder("49");
            obj.set_datacolumn("DS_CODE");
            obj.set_codecolumn("CD_CODE");
            obj.set_innerdataset("dsMM");
            obj.set_text("");
            obj.set_value("");
            obj.set_index("0");
            this.divData.form.divDataRight.addChild(obj.name, obj);

            obj = new Combo("cboMM_SWORK","179","121","50","20",null,null,null,null,null,null,this.divData.form.divDataRight.form);
            obj.set_taborder("50");
            obj.set_datacolumn("DS_CODE");
            obj.set_codecolumn("CD_CODE");
            obj.set_innerdataset("dsMM");
            obj.set_text("");
            obj.set_value("");
            obj.set_index("0");
            this.divData.form.divDataRight.addChild(obj.name, obj);

            obj = new Combo("cboHH_SWORK","124","121","50","20",null,null,null,null,null,null,this.divData.form.divDataRight.form);
            obj.set_taborder("51");
            obj.set_datacolumn("DS_CODE");
            obj.set_codecolumn("CD_CODE");
            obj.set_innerdataset("dsHH_SWORK");
            obj.set_text("");
            obj.set_value("");
            obj.set_index("0");
            this.divData.form.divDataRight.addChild(obj.name, obj);

            obj = new Static("staTO_EDUCATION03","234","150","10","20",null,null,null,null,null,null,this.divData.form.divDataRight.form);
            obj.set_taborder("52");
            obj.set_text("~");
            this.divData.form.divDataRight.addChild(obj.name, obj);

            obj = new Combo("cboHH_EOBLIGATE","249","150","50","20",null,null,null,null,null,null,this.divData.form.divDataRight.form);
            obj.set_taborder("53");
            obj.set_datacolumn("DS_CODE");
            obj.set_codecolumn("CD_CODE");
            obj.set_innerdataset("dsHH_EOBLIGATE");
            obj.set_text("");
            obj.set_value("");
            obj.set_index("0");
            this.divData.form.divDataRight.addChild(obj.name, obj);

            obj = new Combo("cboMM_EOBLIGATE","304","150","50","20",null,null,null,null,null,null,this.divData.form.divDataRight.form);
            obj.set_taborder("54");
            obj.set_datacolumn("DS_CODE");
            obj.set_codecolumn("CD_CODE");
            obj.set_innerdataset("dsMM");
            obj.set_text("");
            obj.set_value("");
            obj.set_index("0");
            this.divData.form.divDataRight.addChild(obj.name, obj);

            obj = new Combo("cboMM_SOBLIGATE","179","150","50","20",null,null,null,null,null,null,this.divData.form.divDataRight.form);
            obj.set_taborder("55");
            obj.set_datacolumn("DS_CODE");
            obj.set_codecolumn("CD_CODE");
            obj.set_innerdataset("dsMM");
            obj.set_text("");
            obj.set_value("");
            obj.set_index("0");
            this.divData.form.divDataRight.addChild(obj.name, obj);

            obj = new Combo("cboHH_SOBLIGATE","124","150","50","20",null,null,null,null,null,null,this.divData.form.divDataRight.form);
            obj.set_taborder("56");
            obj.set_datacolumn("DS_CODE");
            obj.set_codecolumn("CD_CODE");
            obj.set_innerdataset("dsHH_SOBLIGATE");
            obj.set_text("");
            obj.set_value("");
            obj.set_index("0");
            this.divData.form.divDataRight.addChild(obj.name, obj);

            obj = new Combo("cboMM_BREAKWORK","179","179","50","20",null,null,null,null,null,null,this.divData.form.divDataRight.form);
            obj.set_taborder("57");
            obj.set_datacolumn("DS_CODE");
            obj.set_codecolumn("CD_CODE");
            obj.set_innerdataset("dsMM");
            obj.set_text("");
            obj.set_value("");
            obj.set_index("0");
            this.divData.form.divDataRight.addChild(obj.name, obj);

            obj = new Combo("cboHH_BREAKWORK","124","179","50","20",null,null,null,null,null,null,this.divData.form.divDataRight.form);
            obj.set_taborder("58");
            obj.set_datacolumn("DS_CODE");
            obj.set_codecolumn("CD_CODE");
            obj.set_innerdataset("dsHH_BREAKWORK");
            obj.set_text("");
            obj.set_value("");
            obj.set_index("0");
            this.divData.form.divDataRight.addChild(obj.name, obj);

            obj = new Combo("cboMM_OVER_MIN","289","237","50","20",null,null,null,null,null,null,this.divData.form.divDataRight.form);
            obj.set_taborder("59");
            obj.set_datacolumn("DS_CODE");
            obj.set_codecolumn("CD_CODE");
            obj.set_innerdataset("dsMM");
            obj.set_text("");
            obj.set_value("");
            obj.set_index("0");
            this.divData.form.divDataRight.addChild(obj.name, obj);

            obj = new Combo("cboHH_OVER_MIN","234","237","50","20",null,null,null,null,null,null,this.divData.form.divDataRight.form);
            obj.set_taborder("60");
            obj.set_datacolumn("DS_CODE");
            obj.set_codecolumn("CD_CODE");
            obj.set_innerdataset("dsHH_OVER_MIN");
            obj.set_text("");
            obj.set_value("");
            obj.set_index("0");
            this.divData.form.divDataRight.addChild(obj.name, obj);

            obj = new Combo("cboMM_OVER_MAX","289","266","50","20",null,null,null,null,null,null,this.divData.form.divDataRight.form);
            obj.set_taborder("61");
            obj.set_datacolumn("DS_CODE");
            obj.set_codecolumn("CD_CODE");
            obj.set_innerdataset("dsMM");
            obj.set_text("");
            obj.set_value("");
            obj.set_index("0");
            this.divData.form.divDataRight.addChild(obj.name, obj);

            obj = new Combo("cboHH_OVER_MAX","234","266","50","20",null,null,null,null,null,null,this.divData.form.divDataRight.form);
            obj.set_taborder("62");
            obj.set_datacolumn("DS_CODE");
            obj.set_codecolumn("CD_CODE");
            obj.set_innerdataset("dsHH_OVER_MAX");
            obj.set_text("");
            obj.set_value("");
            obj.set_index("0");
            this.divData.form.divDataRight.addChild(obj.name, obj);

            obj = new Static("sta28","119","406",null,"30","0",null,null,null,null,null,this.divData.form.divDataRight.form);
            obj.set_taborder("63");
            obj.set_cssclass("sta_WF_tablebg");
            obj.set_text("");
            this.divData.form.divDataRight.addChild(obj.name, obj);

            obj = new Radio("rdoYN_DELETE","124","412","110","20",null,null,null,null,null,null,this.divData.form.divDataRight.form);
            obj.set_taborder("64");
            obj.set_innerdataset("dsYN_DELETE");
            obj.set_direction("vertical");
            obj.set_fittocontents("width");
            obj.set_codecolumn("CD_CODE");
            obj.set_datacolumn("DS_CODE");
            obj.set_text("적용");
            obj.set_value("Y");
            obj.set_index("0");
            this.divData.form.divDataRight.addChild(obj.name, obj);

            obj = new Static("sta29","0","406","120","30",null,null,null,null,null,null,this.divData.form.divDataRight.form);
            obj.set_taborder("65");
            obj.set_text("사용여부");
            obj.set_cssclass("sta_WF_tablelabel");
            obj.set_textDecoration("none");
            this.divData.form.divDataRight.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this
            obj = new Layout("default","",this._adjust_width,this._adjust_height,this,function(p){});
            this.addLayout(obj.name, obj);
            
            // BindItem Information
            obj = new BindItem("item0","divSearch.form.ccfCD_CORP.form.CDTextBox","value","dsSearch","CD_CORP");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item1","divSearch.form.ctclDT_BASE","value","dsSearch","DT_BASE");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item2","divData.form.divDataRight.form.ccfCD_CORP.form.CDTextBox","value","dsList","CD_CORP");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item3","divData.form.divDataRight.form.ctclDT_BASE","value","dsList","DT_BASE");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item9","divSearch.form.rdoTY_DEPT","value","dsSearch","TY_DEPT");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item4","divData.form.divDataRight.form.rdoTY_DEPT","value","dsList","TY_DEPT");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item11","divData.form.divDataRight.form.txtTM_WORK_DAY","value","dsList","TM_WORK_DAY");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item12","divData.form.divDataRight.form.rdoYN_OVER_MIN","value","dsList","YN_OVER_MIN");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item13","divData.form.divDataRight.form.rdoYN_OVER_MAX","value","dsList","YN_OVER_MAX");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item16","divData.form.divDataRight.form.ccfCD_CORP.form.DSTextBox","value","dsList","DS_CORP");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item17","divData.form.divDataRight.form.ccfCD_DEPT.form.CDTextBox","value","dsList","CD_DEPT");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item18","divData.form.divDataRight.form.ccfCD_DEPT.form.DSTextBox","value","dsList","DS_DEPT");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item19","divData.form.divDataRight.form.rdoYN_SATURDAY","value","dsList","YN_SATURDAY");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item20","divData.form.divDataRight.form.txtDS_REMARK","value","dsList","DS_REMARK");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item22","divData.form.divDataRight.form.cboHH_SATBREAK","value","dsList","HH_SATBREAK");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item23","divData.form.divDataRight.form.cboMM_SATBREAK","value","dsList","MM_SATBREAK");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item26","divData.form.divDataRight.form.cboHH_SATEND","value","dsList","HH_SATEND");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item27","divData.form.divDataRight.form.cboMM_SATEND","value","dsList","MM_SATEND");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item28","divData.form.divDataRight.form.cboMM_SATSTART","value","dsList","MM_SATSTART");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item29","divData.form.divDataRight.form.cboHH_SATSTART","value","dsList","HH_SATSTART");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item5","divData.form.divDataRight.form.cboHH_EWORK","value","dsList","HH_EWORK");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item6","divData.form.divDataRight.form.cboMM_EWORK","value","dsList","MM_EWORK");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item7","divData.form.divDataRight.form.cboMM_SWORK","value","dsList","MM_SWORK");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item8","divData.form.divDataRight.form.cboHH_SWORK","value","dsList","HH_SWORK");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item21","divData.form.divDataRight.form.cboHH_EOBLIGATE","value","dsList","HH_EOBLIGATE");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item30","divData.form.divDataRight.form.cboMM_EOBLIGATE","value","dsList","MM_EOBLIGATE");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item31","divData.form.divDataRight.form.cboMM_SOBLIGATE","value","dsList","MM_SOBLIGATE");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item32","divData.form.divDataRight.form.cboHH_SOBLIGATE","value","dsList","HH_SOBLIGATE");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item10","divData.form.divDataRight.form.cboMM_BREAKWORK","value","dsList","MM_BREAKWORK");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item33","divData.form.divDataRight.form.cboHH_BREAKWORK","value","dsList","HH_BREAKWORK");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item14","divData.form.divDataRight.form.cboMM_OVER_MIN","value","dsList","MM_OVER_MIN");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item34","divData.form.divDataRight.form.cboHH_OVER_MIN","value","dsList","HH_OVER_MIN");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item15","divData.form.divDataRight.form.cboMM_OVER_MAX","value","dsList","MM_OVER_MAX");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item35","divData.form.divDataRight.form.cboHH_OVER_MAX","value","dsList","HH_OVER_MAX");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item24","divData.form.divDataRight.form.txtTM_SATWORK","value","dsList","TM_SATWORK");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item25","divData.form.divDataRight.form.rdoYN_DELETE","value","dsList","YN_DELETE");
            this.addChild(obj.name, obj);
            obj.bind();
            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {
            this._addPreloadList("fdl","cmm::cmmCodeFind.xfdl");
        };
        
        // User Script
        this.registerScript("DAG_AUTHWEEK.xfdl", function() {
        this.objApp = this.gfnGetApplication();
        this.gbDel = "";	// 시간과 분 구분자(:) 추가하기위함 변수

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

        	//var toDay = this.gfnGetDate().substr(0,4);
        	//this.dsSearch.setColumn(0, "YY_BASE", toDay);
        	this.dsSearch.setColumn(0, "CD_CORP", this.AuthClient.CD_CORP);
        	this.divSearch.form.ccfCD_CORP.form.DSTextBox.set_value(this.AuthClient.DS_CORP);
        };

        /************************************************************************
         * 버튼 설정 : 화면(Tab) 전환시 마다 호출
         ************************************************************************/
        this.fnSetButton = function() {
        	// 서브 버튼 사용(2개 그리드 중간에 있는 파란선) 상단에 공통 셋트가 하나더 생긴다
        	//this.gfnUseSubBtn(true, this.divData, this.divData.form.divSplitter); // divSplitter sync
        }

        /************************************************************************
         * 확장 버튼 : 화면별 버튼 설정 ID, function 연결
         ************************************************************************/
        this.fnSetExtendButton = function() {
        	//this.btnCorpCrt = this.gfnFormButtonAdd("btnCorpCrt", "fnCorpCrt");	// 전 법인 생성
        };

        /************************************************************************
         * 변수 선언
         ************************************************************************/
        this.fnSetVariable = function() {
        	this.ccfCD_CORP = this.divSearch.form.ccfCD_CORP;
        	this.ctclDT_BASE = this.divSearch.form.ctclDT_BASE;
        	this.rdoTY_DEPT = this.divSearch.form.rdoTY_DEPT;

        	this.ccfCD_CORP_DT = this.divData.form.divDataRight.form.ccfCD_CORP;
        	this.ctclDT_BASE_DT = this.divData.form.divDataRight.form.ctclDT_BASE;
        	this.rdoTY_DEPT_DT = this.divData.form.divDataRight.form.rdoTY_DEPT;
        	this.ccfCD_DEPT = this.divData.form.divDataRight.form.ccfCD_DEPT;

        	this.cboHH_SWORK = this.divData.form.divDataRight.form.cboHH_SWORK;
        	this.cboMM_SWORK = this.divData.form.divDataRight.form.cboMM_SWORK;
        	this.cboHH_EWORK = this.divData.form.divDataRight.form.cboHH_EWORK;
        	this.cboMM_EWORK = this.divData.form.divDataRight.form.cboMM_EWORK;
        	this.cboHH_SOBLIGATE = this.divData.form.divDataRight.form.cboHH_SOBLIGATE;
        	this.cboMM_SOBLIGATE = this.divData.form.divDataRight.form.cboMM_SOBLIGATE;
        	this.cboHH_EOBLIGATE = this.divData.form.divDataRight.form.cboHH_EOBLIGATE;
        	this.cboMM_EOBLIGATE = this.divData.form.divDataRight.form.cboMM_EOBLIGATE;
        	this.cboHH_BREAKWORK = this.divData.form.divDataRight.form.cboHH_BREAKWORK;
        	this.cboMM_BREAKWORK = this.divData.form.divDataRight.form.cboMM_BREAKWORK;
        	this.txtTM_WORK_DAY = this.divData.form.divDataRight.form.txtTM_WORK_DAY;
        	this.rdoYN_OVER_MIN = this.divData.form.divDataRight.form.rdoYN_OVER_MIN;
        	this.cboHH_OVER_MIN = this.divData.form.divDataRight.form.cboHH_OVER_MIN;
        	this.cboMM_OVER_MIN = this.divData.form.divDataRight.form.cboMM_OVER_MIN;
        	this.rdoYN_OVER_MAX = this.divData.form.divDataRight.form.rdoYN_OVER_MAX;
        	this.cboHH_OVER_MAX = this.divData.form.divDataRight.form.cboHH_OVER_MAX;
        	this.cboMM_OVER_MAX = this.divData.form.divDataRight.form.cboMM_OVER_MAX;
        	this.rdoYN_SATURDAY = this.divData.form.divDataRight.form.rdoYN_SATURDAY;
        	this.cboHH_SATSTART = this.divData.form.divDataRight.form.cboHH_SATSTART;
        	this.cboMM_SATSTART = this.divData.form.divDataRight.form.cboMM_SATSTART;
        	this.cboHH_SATEND = this.divData.form.divDataRight.form.cboHH_SATEND;
        	this.cboMM_SATEND = this.divData.form.divDataRight.form.cboMM_SATEND;
        	this.cboHH_SATBREAK = this.divData.form.divDataRight.form.cboHH_SATBREAK;
        	this.cboMM_SATBREAK = this.divData.form.divDataRight.form.cboMM_SATBREAK;
        	this.txtTM_SATWORK = this.divData.form.divDataRight.form.txtTM_SATWORK;
        	this.rdoYN_DELETE = this.divData.form.divDataRight.form.rdoYN_DELETE;
        	this.txtDS_REMARK = this.divData.form.divDataRight.form.txtDS_REMARK;

        	this.dxGrid = this.divData.form.divDataLeft.form.objGrid;
        };

        /************************************************************************
         * 이벤트 설정
         ************************************************************************/
        this.fnSetEvent = function() {
        	this.gfnGridInit(this.dxGrid, this.dsList, "DA", "DAG_AUTHWEEK");

        	this.ccfCD_CORP.CodeFindName = "DAX_CFCORP_CODEFIND";
        	this.ccfCD_CORP.BeforeUserDataSetParam = "fnBeforeUserDataSetParam";

        	this.ccfCD_CORP_DT.CodeFindName = "DAX_CFCORP_CODEFIND";
        	this.ccfCD_CORP_DT.BeforeUserDataSetParam = "fnBeforeUserDataSetParam";

        	this.ccfCD_DEPT.CodeFindName = "DAX_CFTYDEPT";
        	this.ccfCD_DEPT.BeforeUserDataSetParam = "fnBeforeUserDataSetParam";

        	this.dxGrid.set_selecttype("cell");
        	this.dxGrid.addEventHandler("onselectchanged", this.fnGrid_RowCellChanged, this);
        	//this.dsList.addEventHandler("canrowposchange", this.dsList_canrowposchange, this);


        	//this.dxGridSub.EnterCell = "fnGrid_EnterCell";
        }

        /************************************************************************
         * 파라미터 설정
         ************************************************************************/
        this.fnSetParameter = function() {

        	this.dsSelect = new Dataset();
        	this.dsSelect.addColumn("CD_CORP", "string");
        	this.dsSelect.addColumn("DT_BASE", "string");
        	this.dsSelect.addColumn("TY_DEPT", "string");
        	this.dsSelect.addColumn("GR_SEARCH", "string");
        	this.dsSelect.addColumn("GR_CORP", "string");
        	this.dsSelect.addColumn("GR_USER", "string");

        	this.dsSave = new Dataset();
        	this.dsSave.addColumn("TY_SAVE", "string");
        	this.dsSave.addColumn("NO_SEQ", "int");
        	this.dsSave.addColumn("DT_BASE", "string");
        	this.dsSave.addColumn("CD_CORP", "string");
        	this.dsSave.addColumn("TY_DEPT", "string");
        	this.dsSave.addColumn("CD_DEPT", "string");
        	this.dsSave.addColumn("HH_SWORK", "string");		// datetime 타입으로 보내면 null값으로 보내져서 string 타입으로 보냄
        	this.dsSave.addColumn("MM_SWORK", "string");
        	this.dsSave.addColumn("HH_EWORK", "string");
        	this.dsSave.addColumn("MM_EWORK", "string");
        	this.dsSave.addColumn("HH_SOBLIGATE", "string");
        	this.dsSave.addColumn("MM_SOBLIGATE", "string");
        	this.dsSave.addColumn("HH_EOBLIGATE", "string");
        	this.dsSave.addColumn("MM_EOBLIGATE", "string");
        	this.dsSave.addColumn("HH_BREAKWORK", "string");
        	this.dsSave.addColumn("MM_BREAKWORK", "string");
        	this.dsSave.addColumn("YN_OVER_MIN", "string");
        	this.dsSave.addColumn("HH_OVER_MIN", "string");
        	this.dsSave.addColumn("MM_OVER_MIN", "string");
        	this.dsSave.addColumn("YN_OVER_MAX", "string");
        	this.dsSave.addColumn("HH_OVER_MAX", "string");
        	this.dsSave.addColumn("MM_OVER_MAX", "string");
        	this.dsSave.addColumn("YN_SATURDAY", "string");
        	this.dsSave.addColumn("HH_SATSTART", "string");
        	this.dsSave.addColumn("MM_SATSTART", "string");
        	this.dsSave.addColumn("HH_SATEND", "string");
        	this.dsSave.addColumn("MM_SATEND", "string");
        	this.dsSave.addColumn("HH_SATBREAK", "string");
        	this.dsSave.addColumn("MM_SATBREAK", "string");
        	this.dsSave.addColumn("YN_DELETE", "string");
        	this.dsSave.addColumn("DS_REMARK", "string");
        	this.dsSave.addColumn("ID_USER", "string");

        	this.dsExec = new Dataset();
        	this.dsExec.addColumn("CD_CORP", "string");
        	this.dsExec.addColumn("DT_BASE", "string");
        	this.dsExec.addColumn("TY_DEPT", "string");
        	this.dsExec.addColumn("ID_USER", "string");
        }

        /************************************************************************
         * 버튼 이벤트
         ************************************************************************/
         /*
          *	조회 버튼
          */
        this.fnSelect = function() {
        	if (!this.fnSelectValidate()) return false;

        	this.gfnGridBeforeSelect(this.dxGrid);

        	this.dsSelect.clearData();
        	this.dsSelect.addRow();

        	this.dsSelect.setColumn(0, "CD_CORP", this.dsSearch.getColumn(0, "CD_CORP"));
        	this.dsSelect.setColumn(0, "DT_BASE", this.dsSearch.getColumn(0, "DT_BASE"));
        	this.dsSelect.setColumn(0, "TY_DEPT", this.dsSearch.getColumn(0, "TY_DEPT"));
        	this.dsSelect.setColumn(0, "GR_SEARCH", this.FormInfo.GR_SEARCH);
        	this.dsSelect.setColumn(0, "GR_CORP", this.AuthClient.CD_CORP);
        	this.dsSelect.setColumn(0, "GR_USER", this.AuthClient.ID_USER);

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
        						strArg, 			// 입력갑스로 보낼 arguments, strFormData="20120607"
        						callBackFnc); // 통신방법 정의 [생략가능]
        }

        /*
         *	입력 버튼
         */
        this.fnAdd = function() {
        	var nrow = this.gfnGridAdd(this.dxGrid, "bottom"); // top (default), bottom, current

        	this.dsList.setColumn(nrow, "CD_CORP", this.ccfCD_CORP.form.CDTextBox.value);
        	this.dsList.setColumn(nrow, "DS_CORP", this.ccfCD_CORP.form.DSTextBox.value);

        	this.dsList.setColumn(nrow, "HH_SWORK", "00");
        	this.dsList.setColumn(nrow, "MM_SWORK", "00");
        	this.dsList.setColumn(nrow, "HH_EWORK", "00");
        	this.dsList.setColumn(nrow, "MM_EWORK", "00");
        	this.dsList.setColumn(nrow, "HH_SOBLIGATE", "00");
        	this.dsList.setColumn(nrow, "MM_SOBLIGATE", "00");
        	this.dsList.setColumn(nrow, "HH_EOBLIGATE", "00");
        	this.dsList.setColumn(nrow, "MM_EOBLIGATE", "00");
        	this.dsList.setColumn(nrow, "HH_BREAKWORK", "00");
        	this.dsList.setColumn(nrow, "MM_BREAKWORK", "00");


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
        	// 그리드 필수항목 체크
        	if (!this.gfnGridValidate(this.dxGrid)) return;

        	this.dxGrid.updateToDataset();

        	// save SP 한개로 사용하는 경우
        	this.dsSave.clearData();

        	for (var i = 0; i < this.dsList.rowcount; i++) {
        		var flag = this.gfnGetFlag(this.dsList, i);
        		switch(flag) {
        			case "I":
        			case "U":
        			case "D":
        				var nrow = this.dsSave.addRow();
        				this.dsSave.setColumn(nrow, "TY_SAVE", flag);
        				this.dsSave.setColumn(nrow, "NO_SEQ", this.dsList.getColumn(i, "NO_SEQ"));
        				this.dsSave.setColumn(nrow, "DT_BASE", this.dsList.getColumn(i, "DT_BASE"));
        				this.dsSave.setColumn(nrow, "CD_CORP", this.dsList.getColumn(i, "CD_CORP"));
        				this.dsSave.setColumn(nrow, "TY_DEPT", this.dsList.getColumn(i, "TY_DEPT"));
        				this.dsSave.setColumn(nrow, "CD_DEPT", this.dsList.getColumn(i, "CD_DEPT"));
        				this.dsSave.setColumn(nrow, "HH_SWORK", this.dsList.getColumn(i, "HH_SWORK"));
        				this.dsSave.setColumn(nrow, "MM_SWORK", this.dsList.getColumn(i, "MM_SWORK"));
        				this.dsSave.setColumn(nrow, "HH_EWORK", this.dsList.getColumn(i, "HH_EWORK"));
        				this.dsSave.setColumn(nrow, "MM_EWORK", this.dsList.getColumn(i, "MM_EWORK"));
        				this.dsSave.setColumn(nrow, "HH_SOBLIGATE", this.dsList.getColumn(i, "HH_SOBLIGATE"));
        				this.dsSave.setColumn(nrow, "MM_SOBLIGATE", this.dsList.getColumn(i, "MM_SOBLIGATE"));
        				this.dsSave.setColumn(nrow, "HH_EOBLIGATE", this.dsList.getColumn(i, "HH_EOBLIGATE"));
        				this.dsSave.setColumn(nrow, "MM_EOBLIGATE", this.dsList.getColumn(i, "MM_EOBLIGATE"));
        				this.dsSave.setColumn(nrow, "HH_BREAKWORK", this.dsList.getColumn(i, "HH_BREAKWORK"));
        				this.dsSave.setColumn(nrow, "MM_BREAKWORK", this.dsList.getColumn(i, "MM_BREAKWORK"));
        				this.dsSave.setColumn(nrow, "YN_OVER_MIN", this.dsList.getColumn(i, "YN_OVER_MIN"));
        				this.dsSave.setColumn(nrow, "HH_OVER_MIN", this.dsList.getColumn(i, "HH_OVER_MIN"));
        				this.dsSave.setColumn(nrow, "MM_OVER_MIN", this.dsList.getColumn(i, "MM_OVER_MIN"));
        				this.dsSave.setColumn(nrow, "YN_OVER_MAX", this.dsList.getColumn(i, "YN_OVER_MAX"));
        				this.dsSave.setColumn(nrow, "HH_OVER_MAX", this.dsList.getColumn(i, "HH_OVER_MAX"));
        				this.dsSave.setColumn(nrow, "MM_OVER_MAX", this.dsList.getColumn(i, "MM_OVER_MAX"));
        				this.dsSave.setColumn(nrow, "YN_SATURDAY", this.dsList.getColumn(i, "YN_SATURDAY"));
        				this.dsSave.setColumn(nrow, "HH_SATSTART", this.dsList.getColumn(i, "HH_SATSTART"));
        				this.dsSave.setColumn(nrow, "MM_SATSTART", this.dsList.getColumn(i, "MM_SATSTART"));
        				this.dsSave.setColumn(nrow, "HH_SATEND", this.dsList.getColumn(i, "HH_SATEND"));
        				this.dsSave.setColumn(nrow, "MM_SATEND", this.dsList.getColumn(i, "MM_SATEND"));
        				this.dsSave.setColumn(nrow, "HH_SATBREAK", this.dsList.getColumn(i, "HH_SATBREAK"));
        				this.dsSave.setColumn(nrow, "MM_SATBREAK", this.dsList.getColumn(i, "MM_SATBREAK"));
        				this.dsSave.setColumn(nrow, "YN_DELETE", this.dsList.getColumn(i, "YN_DELETE"));
        				this.dsSave.setColumn(nrow, "DS_REMARK", this.dsList.getColumn(i, "DS_REMARK"));
        				this.dsSave.setColumn(nrow, "ID_USER", this.AuthClient.ID_USER);
        				break;
        		}
        	}

        	if (this.dsSave.rowcount == 0) return;

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
         * 서브 버튼 이벤트
         ************************************************************************/

        /************************************************************************
         * Validate
         ************************************************************************/
        /*
         *	조회 Validate
         */
        this.fnSelectValidate = function() {
        	var validate = true;

        	if (this.gfnIsNull(this.dsSearch.getColumn(0,"CD_CORP"))) {
        		validate = false;
        		// Alert후 실행할 처리
        		this.fnVaidateCallback = function() {
        			this.ccfCD_CORP.form.CDTextBox.setFocus();
        		}
        		this.gfnAlert("법인을 입력하세요.", "fnVaidateCallback");
        	}

        	return validate;
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

        		this.fnEnableSet();
        	}
        	else if(svcID == "save") {
        		if (errorCode == 0) {
        			this.FormBtns.Select.click();
        		} else {
        			this.gfnAlert(errorMsg);
        		}
        	}
        	else if(svcID == "exec") {
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
        this.fnBeforeUserDataSetParam = function(id, dsUserParam, nrow) {

        	if(id == "ccfCD_CORP") {
        		dsUserParam.setColumn(nrow, "CD_CORP", this.AuthClient.CD_CORP);
        		dsUserParam.setColumn(nrow, "GR_SEARCH", this.FormInfo.GR_SEARCH);
        		dsUserParam.setColumn(nrow, "ID_USER", this.AuthClient.ID_USER);
        	}

        	if(id == "ccfCD_CORP_D") {
        		dsUserParam.setColumn(nrow, "CD_CORP", this.AuthClient.CD_CORP);
        		dsUserParam.setColumn(nrow, "GR_SEARCH", this.FormInfo.GR_SEARCH);
        		dsUserParam.setColumn(nrow, "ID_USER", this.AuthClient.ID_USER);
        	}

        	if(id == "ccfCD_DEPT") {
        		dsUserParam.setColumn(nrow, "GR_SEARCH", this.FormInfo.GR_SEARCH);
        		dsUserParam.setColumn(nrow, "CD_DEPT", this.AuthClient.CD_DEPT);
        		dsUserParam.setColumn(nrow, "CD_CORP", this.ccfCD_CORP.form.CDTextBox.value);//this.AuthClient.CD_CORP);
        		dsUserParam.setColumn(nrow, "TY_DEPT", this.dsList.getColumn(this.dsList.rowposition, "TY_DEPT"));
        		dsUserParam.setColumn(nrow, "YN_DELETE", "N");
        	}

        	return true;
        };


        this.fnGrid_AfterCDTextChanged = function(id, codeFindData) {

        	if(id == "ccfCD_CORP") {
        		var arr = codeFindData;

        	}

        	return true;
        };
        /************************************************************************
         * 그리드 이벤트
         ************************************************************************/
        this.fnGrid_RowCellChanged = function(obj,e)
        {
            if ((obj.oldrow > -1 && obj.oldrow == e.row)
        		|| (obj.oldrow == -1 && e.oldrow != e.row)) {

        		this.fnSetEnable();
        		this.fnEnableSet();
        		obj.oldrow = -1;
        	}
        };

        this.fnSetEnable = function()
        {
        	if(this.dsList.rowposition == 0){
        		this.ccfCD_CORP_DT.set_enable(false);
        		this.ctclDT_BASE_DT.set_enable(false);
        		this.rdoTY_DEPT_DT.set_enable(false);

        		this.ccfCD_DEPT.set_enable(false);
        		this.cboHH_SWORK.set_enable(false);
        		this.cboMM_SWORK.set_enable(false);
        		this.cboHH_EWORK.set_enable(false);
        		this.cboMM_EWORK.set_enable(false);
        		this.cboHH_SOBLIGATE.set_enable(false);
        		this.cboMM_SOBLIGATE.set_enable(false);
        		this.cboHH_EOBLIGATE.set_enable(false);
        		this.cboMM_EOBLIGATE.set_enable(false);
        		this.cboHH_BREAKWORK.set_enable(false);
        		this.cboMM_BREAKWORK.set_enable(false);
        		//this.txtTM_WORK_DAY.set_enable(false);
        		this.rdoYN_OVER_MIN.set_enable(false);
        		this.cboHH_OVER_MIN.set_enable(false);
        		this.cboMM_OVER_MIN.set_enable(false);
        		this.rdoYN_OVER_MAX.set_enable(false);
        		this.cboHH_OVER_MAX.set_enable(false);
        		this.cboMM_OVER_MAX.set_enable(false);
        		this.rdoYN_SATURDAY.set_enable(false);
        		this.cboHH_SATSTART.set_enable(false);
        		this.cboMM_SATSTART.set_enable(false);
        		this.cboHH_SATEND.set_enable(false);
        		this.cboMM_SATEND.set_enable(false);
        		this.cboHH_SATBREAK.set_enable(false);
        		this.cboMM_SATBREAK.set_enable(false);
        		//this.txtTM_SATWORK.set_enable(false);
        		this.rdoYN_DELETE.set_enable(false);
        		this.txtDS_REMARK.set_enable(false);
        	}else{
        		var flag = this.gfnGetFlag(this.dsList, this.dsList.rowposition);

        		if(flag == "I"){
        			this.ccfCD_CORP_DT.set_enable(true);
        			this.ctclDT_BASE_DT.set_enable(true);
        			this.rdoTY_DEPT_DT.set_enable(true);
        		}else{
        			this.ccfCD_CORP_DT.set_enable(false);
        			this.ctclDT_BASE_DT.set_enable(false);
        			this.rdoTY_DEPT_DT.set_enable(false);
        		}

        		this.ccfCD_DEPT.set_enable(true);
        		this.cboHH_SWORK.set_enable(true);
        		this.cboMM_SWORK.set_enable(true);
        		this.cboHH_EWORK.set_enable(true);
        		this.cboMM_EWORK.set_enable(true);
        		this.cboHH_SOBLIGATE.set_enable(true);
        		this.cboMM_SOBLIGATE.set_enable(true);
        		this.cboHH_EOBLIGATE.set_enable(true);
        		this.cboMM_EOBLIGATE.set_enable(true);
        		this.cboHH_BREAKWORK.set_enable(true);
        		this.cboMM_BREAKWORK.set_enable(true);
        		//this.txtTM_WORK_DAY.set_enable(true);
        		this.rdoYN_OVER_MIN.set_enable(true);
        		this.cboHH_OVER_MIN.set_enable(true);
        		this.cboMM_OVER_MIN.set_enable(true);
        		this.rdoYN_OVER_MAX.set_enable(true);
        		this.cboHH_OVER_MAX.set_enable(true);
        		this.cboMM_OVER_MAX.set_enable(true);
        		this.rdoYN_SATURDAY.set_enable(true);
        		this.cboHH_SATSTART.set_enable(true);
        		this.cboMM_SATSTART.set_enable(true);
        		this.cboHH_SATEND.set_enable(true);
        		this.cboMM_SATEND.set_enable(true);
        		this.cboHH_SATBREAK.set_enable(true);
        		this.cboMM_SATBREAK.set_enable(true);
        		//this.txtTM_SATWORK.set_enable(true);
        		this.rdoYN_DELETE.set_enable(true);
        		this.txtDS_REMARK.set_enable(true);
        	}
        }



        this.dsList_canrowposchange = function(obj,e) {
        	var can_rowchange = true;
        	for (var i = 0; i < this.dsListSub.rowcount; i++) {
        		var flag = this.gfnGetFlag(this.dsListSub, i);
        		if (flag == "I" || flag == "U" || flag == "D") {
        			can_rowchange = false;
        			break;
        		}
        	}
        	if(!can_rowchange) {
        		this._row = e.newrow;
        		this.gfnConfirm("변경된 데이터가 있습니다.\r\n계속 진행하시겠습니까?", "dsList_canrowposchange_callback");
        	}
        	return can_rowchange;
        }

        this.dsList_canrowposchange_callback = function(strId, val)
        {
        	if(val == true) {
        		this.dsList.set_enableevent(false);
        		this.dsList.set_rowposition(this._row);
        		this.dsList.set_enableevent(true);
        	}
        }



        /************************************************************************
         * 기타 이벤트
         ************************************************************************/
        this.fnSearchInit = function(obj,e) {
        	if(e == null || (e.pretext != e.posttext)) {
        		this.gfnSetFormStatus(this);
        		this.gfnGridClear(this.dxGrid);
        		//this.gfnGridClear(this.dxGridSub);
        	}
        }

        this.divData_ondragmove = function(obj,e)
        {
           if(e.userdata == "splitter") {
              this.divData.form.divSplitter.set_left(e.clientx);
              this.divData.form.resetScroll();
           }
        };

        this.divData_divSplitter_ondrag = function(obj,e)
        {
           e.set_userdata("splitter");
           return true;
        };
        this.dsSearch_onvaluechanged = function(obj,e)
        {
        	if(e.oldvalue != e.newvalue){
        	this.gfnGridClear(this.dxGrid);
        	//this.gfnGridClear(this.dxGridSub);
        	}
        };



        // 셀 수정가능 여부
         this.fnGrid_EnterCell = function(obj, row, cell) {
        	var colnm = this.gfnGridGetBindColumnNameByIndex(obj, cell);

        	if(row == 2 || row == 6 || row == 9 || row == 11){
        		return false;
        	}

        	/*
        	if(colnm == "DS_MON") {
        		if(this.dsList.getColumn(0, "AM_VAT") == 0){
        			return false;
        		}
        	}
        	*/
        }

        // 전 법인 생성 버튼 클릭 이벤트
        this.fnCorpCrt = function(obj,e) {
        	if (!this.gfnGridIsRow(this.dxGrid)) { return false; }

        	this.dsExec.clearData();
        	this.dsExec.addRow();

        	this.dsExec.setColumn(0, "CD_CORP", this.dsList.getColumn(this.dsList.rowposition, "CD_CORP"));
        	this.dsExec.setColumn(0, "DT_BASE", this.dsList.getColumn(this.dsList.rowposition, "DT_BASE"));
        	this.dsExec.setColumn(0, "TY_DEPT", this.dsList.getColumn(this.dsList.rowposition, "TY_DEPT"));
        	this.dsExec.setColumn(0, "ID_USER", this.AuthClient.ID_USER);

        	if (this.dsExec.rowcount == 0) return;

        	var strSvcId    = "exec";
        	var strSvcType  = "save";
        	var inProc		= "_dsProc";
        	var inData      = "exec=dsExec";
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
        // onkeyup 이벤트(시간 관련 컬럼에서 사용)
        this.divData_divDataRight_onkeyup = function(obj:nexacro.Edit,e:nexacro.KeyEventInfo)
        {
        	if(obj.value.length == 1){
        		this.gbDel = "N";
        	}else if(obj.value.length == 3){
        		this.gbDel = "Y";
        	}

        	if(obj.value.length == 2){
        		if(this.gbDel == "N"){	// N일때 (:) 추가한다
        			obj.set_value(obj.value + ":");
        		}
        	}

        };

        // 시간을 네자리만 입력했을경우  : 입력
        this.divData_divDataRight_onkillfocus = function(obj:nexacro.Edit,e:nexacro.KillFocusEventInfo)
        {
        	if(obj.value.length == 4){
        		if(obj.value.indexOf(":") < 0){
        			obj.set_value(obj.value.substr(0,2) + ":" + obj.value.substr(2,2));
        		}
        	}


        	//if(obj.value.length == 5){
        	//	if(obj.value.indexOf(":") < 0){
        	//		this.gfnAlert("시간 입력이 잘못되었습니다.");
        	//	}
        	//}

        };
        */

        this.dsList_onvaluechanged = function(obj,e)
        {
        	if(e.oldvalue != e.newvalue)
        	{
        		if(e.columnid == "YN_OVER_MIN" || e.columnid == "YN_OVER_MAX" || e.columnid == "YN_SATURDAY" || e.columnid == "TY_DEPT") {
        			this.fnEnableSet();
        		}
        	}
        };



        // 싱글폼 활성화 or 비활성화 처리
        this.fnEnableSet = function() {
        	if(this.dsList.rowcount < 1) return;

        	this.dsList.set_enableevent(false);
        	if(this.dsList.getColumn(this.dsList.rowposition, "YN_OVER_MIN") == "Y"){
        		this.cboHH_OVER_MIN.set_enable(true);
        		this.cboMM_OVER_MIN.set_enable(true);
        	}else{
        		this.cboHH_OVER_MIN.set_enable(false);
        		this.cboMM_OVER_MIN.set_enable(false);
        		this.dsList.setColumn(this.dsList.rowposition, "HH_OVER_MIN", "00");
        		this.dsList.setColumn(this.dsList.rowposition, "MM_OVER_MIN", "00");
        	}

        	if(this.dsList.getColumn(this.dsList.rowposition, "YN_OVER_MAX") == "Y"){
        		this.cboHH_OVER_MAX.set_enable(true);
        		this.cboMM_OVER_MAX.set_enable(true);
        	}else{
        		this.cboHH_OVER_MAX.set_enable(false);
        		this.cboMM_OVER_MAX.set_enable(false);
        		this.dsList.setColumn(this.dsList.rowposition, "HH_OVER_MAX", "00");
        		this.dsList.setColumn(this.dsList.rowposition, "MM_OVER_MAX", "00");
        	}

        	if(this.dsList.getColumn(this.dsList.rowposition, "YN_SATURDAY") == "Y"){
        		this.cboHH_SATSTART.set_enable(true);
        		this.cboMM_SATSTART.set_enable(true);

        		this.cboHH_SATEND.set_enable(true);
        		this.cboMM_SATEND.set_enable(true);

        		this.cboHH_SATBREAK.set_enable(true);
        		this.cboMM_SATBREAK.set_enable(true);
        	}else{
        		this.cboHH_SATSTART.set_enable(false);
        		this.cboMM_SATSTART.set_enable(false);

        		this.cboHH_SATEND.set_enable(false);
        		this.cboMM_SATEND.set_enable(false);

        		this.cboHH_SATBREAK.set_enable(false);
        		this.cboMM_SATBREAK.set_enable(false);

        		this.dsList.setColumn(this.dsList.rowposition, "HH_SATSTART", "00");
        		this.dsList.setColumn(this.dsList.rowposition, "MM_SATSTART", "00");
        		this.dsList.setColumn(this.dsList.rowposition, "HH_SATEND", "00");
        		this.dsList.setColumn(this.dsList.rowposition, "MM_SATEND", "00");
        		this.dsList.setColumn(this.dsList.rowposition, "HH_SATBREAK", "00");
        		this.dsList.setColumn(this.dsList.rowposition, "MM_SATBREAK", "00");
        	}

        	if(this.dsList.getColumn(this.dsList.rowposition, "TY_DEPT") == "00"){
        		this.ccfCD_DEPT.set_enable(false);
        		this.dsList.setColumn(this.dsList.rowposition, "CD_DEPT", "");
        		this.dsList.setColumn(this.dsList.rowposition, "DS_DEPT", "");
        	}else{
        		this.ccfCD_DEPT.set_enable(true);
        	}
        	this.dsList.set_enableevent(true);
        }

        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.form_onload,this);
            this.divSearch.form.ctclDT_BASE.addEventHandler("onchanged",this.fnSearchInit,this);
            this.divSearch.form.rdoTY_DEPT.addEventHandler("onitemchanged",this.divData_divDataRight_rdoTY_DAYWEEK_onitemchanged,this);
            this.divData.addEventHandler("ondragmove",this.divData_ondragmove,this);
            this.divData.form.divSplitter.addEventHandler("ondrag",this.divData_divSplitter_ondrag,this);
            this.divData.form.divDataRight.form.txtTM_WORK_DAY.addEventHandler("onkeyup",this.divData_divDataRight_onkeyup,this);
            this.divData.form.divDataRight.form.txtTM_WORK_DAY.addEventHandler("onkillfocus",this.divData_divDataRight_onkillfocus,this);
            this.divData.form.divDataRight.form.txtTM_SATWORK.addEventHandler("onkeyup",this.divData_divDataRight_onkeyup,this);
            this.divData.form.divDataRight.form.txtTM_SATWORK.addEventHandler("onkillfocus",this.divData_divDataRight_onkillfocus,this);
            this.dsList.addEventHandler("onvaluechanged",this.dsList_onvaluechanged,this);
            this.dsSearch.addEventHandler("onvaluechanged",this.dsSearch_onvaluechanged,this);
        };
        this.loadIncludeScript("DAG_AUTHWEEK.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
