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
            this.set_titletext("당직일지");
            if (Form == this.constructor)
            {
                this._setFormPosition(1280,1032);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("dsList", this);
            obj._setContents("<ColumnInfo><Column id=\"ID_PERSON\" type=\"INT\" size=\"256\"/><Column id=\"DT_WORK\" type=\"STRING\" size=\"256\"/><Column id=\"CD_CORP\" type=\"STRING\" size=\"256\"/><Column id=\"DS_CORP\" type=\"STRING\" size=\"256\"/><Column id=\"ID_SABUN\" type=\"STRING\" size=\"256\"/><Column id=\"DS_HNAME\" type=\"STRING\" size=\"256\"/><Column id=\"CD_DEPT\" type=\"STRING\" size=\"256\"/><Column id=\"DS_DEPT\" type=\"STRING\" size=\"256\"/><Column id=\"YN_DUTY\" type=\"STRING\" size=\"256\"/><Column id=\"TM_DAYDUTY_FROM\" type=\"STRING\" size=\"256\"/><Column id=\"HH_DAYDUTY_FROM\" type=\"STRING\" size=\"256\"/><Column id=\"MM_DAYDUTY_FROM\" type=\"STRING\" size=\"256\"/><Column id=\"TM_DAYDUTY_TO\" type=\"STRING\" size=\"256\"/><Column id=\"HH_DAYDUTY_TO\" type=\"STRING\" size=\"256\"/><Column id=\"MM_DAYDUTY_TO\" type=\"STRING\" size=\"256\"/><Column id=\"CD_POSITION\" type=\"STRING\" size=\"256\"/><Column id=\"DS_POSITION\" type=\"STRING\" size=\"256\"/><Column id=\"DS_DIRECTION\" type=\"STRING\" size=\"256\"/><Column id=\"DS_ACTION\" type=\"STRING\" size=\"256\"/><Column id=\"DS_LIGHTS_08\" type=\"STRING\" size=\"256\"/><Column id=\"DS_LIGHTS_12\" type=\"STRING\" size=\"256\"/><Column id=\"DS_LIGHTS_15\" type=\"STRING\" size=\"256\"/><Column id=\"DS_LIGHTS_17\" type=\"STRING\" size=\"256\"/><Column id=\"DS_LIGHTS_ETC\" type=\"STRING\" size=\"256\"/><Column id=\"DS_FIRE_08\" type=\"STRING\" size=\"256\"/><Column id=\"DS_FIRE_12\" type=\"STRING\" size=\"256\"/><Column id=\"DS_FIRE_15\" type=\"STRING\" size=\"256\"/><Column id=\"DS_FIRE_17\" type=\"STRING\" size=\"256\"/><Column id=\"DS_FIRE_ETC\" type=\"STRING\" size=\"256\"/><Column id=\"DS_CURB_08\" type=\"STRING\" size=\"256\"/><Column id=\"DS_CURB_12\" type=\"STRING\" size=\"256\"/><Column id=\"DS_CURB_15\" type=\"STRING\" size=\"256\"/><Column id=\"DS_CURB_17\" type=\"STRING\" size=\"256\"/><Column id=\"DS_CURB_ETC\" type=\"STRING\" size=\"256\"/><Column id=\"DS_ACCEPT\" type=\"STRING\" size=\"256\"/><Column id=\"DS_VISIT\" type=\"STRING\" size=\"256\"/><Column id=\"DS_REMARK\" type=\"STRING\" size=\"256\"/><Column id=\"CD_APPROVAL\" type=\"STRING\" size=\"256\"/><Column id=\"DS_APPROVAL\" type=\"STRING\" size=\"256\"/><Column id=\"DT_APPROVAL\" type=\"STRING\" size=\"256\"/><Column id=\"ID_APPROVAL\" type=\"STRING\" size=\"256\"/><Column id=\"NO_APPROVAL\" type=\"STRING\" size=\"256\"/><Column id=\"YN_EDIT\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("_dsProc", this);
            obj._setContents("<ColumnInfo><Column id=\"TARGET\" type=\"STRING\" size=\"256\"/><Column id=\"SP\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"TARGET\">select</Col><Col id=\"SP\">DABPR_DAYDUTY_SELECT</Col></Row><Row><Col id=\"TARGET\">save</Col><Col id=\"SP\">DABPR_DAYDUTY_SAVE</Col></Row><Row><Col id=\"TARGET\">d_select</Col><Col id=\"SP\">DABPR_DAYDUTY_DTL_SELECT</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsSearch", this);
            obj._setContents("<ColumnInfo><Column id=\"CD_CORP\" type=\"STRING\" size=\"256\"/><Column id=\"FR_DAYDUTY\" type=\"STRING\" size=\"256\"/><Column id=\"TO_DAYDUTY\" type=\"STRING\" size=\"256\"/><Column id=\"ID_SABUN\" type=\"STRING\" size=\"256\"/><Column id=\"ID_PERSON\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"CD_CORP\"/><Col id=\"FR_DAYDUTY\"/><Col id=\"TO_DAYDUTY\">%</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsHH", this);
            obj._setContents("<ColumnInfo><Column id=\"CD_CODE\" type=\"STRING\" size=\"256\"/><Column id=\"DS_CODE\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"CD_CODE\">00</Col><Col id=\"DS_CODE\">00</Col></Row><Row><Col id=\"CD_CODE\">01</Col><Col id=\"DS_CODE\">01</Col></Row><Row><Col id=\"CD_CODE\">02</Col><Col id=\"DS_CODE\">02</Col></Row><Row><Col id=\"CD_CODE\">03</Col><Col id=\"DS_CODE\">03</Col></Row><Row><Col id=\"CD_CODE\">04</Col><Col id=\"DS_CODE\">04</Col></Row><Row><Col id=\"CD_CODE\">05</Col><Col id=\"DS_CODE\">05</Col></Row><Row><Col id=\"CD_CODE\">06</Col><Col id=\"DS_CODE\">06</Col></Row><Row><Col id=\"CD_CODE\">07</Col><Col id=\"DS_CODE\">07</Col></Row><Row><Col id=\"CD_CODE\">08</Col><Col id=\"DS_CODE\">08</Col></Row><Row><Col id=\"CD_CODE\">09</Col><Col id=\"DS_CODE\">09</Col></Row><Row><Col id=\"CD_CODE\">10</Col><Col id=\"DS_CODE\">10</Col></Row><Row><Col id=\"CD_CODE\">11</Col><Col id=\"DS_CODE\">11</Col></Row><Row><Col id=\"CD_CODE\">12</Col><Col id=\"DS_CODE\">12</Col></Row><Row><Col id=\"CD_CODE\">13</Col><Col id=\"DS_CODE\">13</Col></Row><Row><Col id=\"CD_CODE\">14</Col><Col id=\"DS_CODE\">14</Col></Row><Row><Col id=\"CD_CODE\">15</Col><Col id=\"DS_CODE\">15</Col></Row><Row><Col id=\"CD_CODE\">16</Col><Col id=\"DS_CODE\">16</Col></Row><Row><Col id=\"CD_CODE\">17</Col><Col id=\"DS_CODE\">17</Col></Row><Row><Col id=\"CD_CODE\">18</Col><Col id=\"DS_CODE\">18</Col></Row><Row><Col id=\"CD_CODE\">19</Col><Col id=\"DS_CODE\">19</Col></Row><Row><Col id=\"CD_CODE\">20</Col><Col id=\"DS_CODE\">20</Col></Row><Row><Col id=\"CD_CODE\">21</Col><Col id=\"DS_CODE\">21</Col></Row><Row><Col id=\"CD_CODE\">22</Col><Col id=\"DS_CODE\">22</Col></Row><Row><Col id=\"CD_CODE\">23</Col><Col id=\"DS_CODE\">23</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsMM", this);
            obj._setContents("<ColumnInfo><Column id=\"CD_CODE\" type=\"STRING\" size=\"256\"/><Column id=\"DS_CODE\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"CD_CODE\">00</Col><Col id=\"DS_CODE\">00</Col></Row><Row><Col id=\"CD_CODE\">10</Col><Col id=\"DS_CODE\">10</Col></Row><Row><Col id=\"CD_CODE\">20</Col><Col id=\"DS_CODE\">20</Col></Row><Row><Col id=\"CD_CODE\">30</Col><Col id=\"DS_CODE\">30</Col></Row><Row><Col id=\"CD_CODE\">40</Col><Col id=\"DS_CODE\">40</Col></Row><Row><Col id=\"CD_CODE\">50</Col><Col id=\"DS_CODE\">50</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsListSub", this);
            obj._setContents("<ColumnInfo><Column id=\"DT_DAYDUTY\" type=\"STRING\" size=\"256\"/><Column id=\"ID_PERSON\" type=\"INT\" size=\"256\"/><Column id=\"NO_SEQ\" type=\"INT\" size=\"256\"/><Column id=\"TM_VISIT_FROM\" type=\"STRING\" size=\"256\"/><Column id=\"HH_VISIT_FROM\" type=\"STRING\" size=\"256\"/><Column id=\"MM_VISIT_FROM\" type=\"STRING\" size=\"256\"/><Column id=\"TM_VISIT_TO\" type=\"STRING\" size=\"256\"/><Column id=\"HH_VISIT_TO\" type=\"STRING\" size=\"256\"/><Column id=\"MM_VISIT_TO\" type=\"STRING\" size=\"256\"/><Column id=\"DS_ORG\" type=\"STRING\" size=\"256\"/><Column id=\"DS_POSITION\" type=\"STRING\" size=\"256\"/><Column id=\"DS_HNAME\" type=\"STRING\" size=\"256\"/><Column id=\"DS_REMARK\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsOX", this);
            obj._setContents("<ColumnInfo><Column id=\"CD_CODE\" type=\"STRING\" size=\"256\"/><Column id=\"DS_CODE\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"CD_CODE\">○</Col><Col id=\"DS_CODE\">○</Col></Row><Row><Col id=\"CD_CODE\">X</Col><Col id=\"DS_CODE\">X</Col></Row></Rows>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Div("divSearch","0","0",null,"46.0","0",null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_cssclass("div_SEARCH_Bg");
            obj.set_text("");
            this.addChild(obj.name, obj);

            obj = new Static("staCD_CORP","0.0","10.0","92.0","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("0");
            obj.set_text("법인");
            obj.set_cssclass("sta_WF_SchLabelE");
            this.divSearch.addChild(obj.name, obj);

            obj = new Div("ccfCD_CORP","staCD_CORP:0.0","10.0","250","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.getSetter("CodeFindName").set("DAX_CFCORP_CODEFIND");
            obj.getSetter("CDTextWidth").set("30");
            obj.set_taborder("1");
            obj.set_url("cmm::cmmCodeFind.xfdl");
            obj.set_text("");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("orderPeriod","ccfCD_CORP:0.0","10.0","92.0","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("5");
            obj.set_text("당직일자");
            obj.set_cssclass("sta_WF_SchLabel");
            this.divSearch.addChild(obj.name, obj);

            obj = new Calendar("ctclFR_DAYDUTY","orderPeriod:0.0","10.0","97","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("4");
            obj.set_dateformat("yyyy-MM-dd");
            obj.set_editformat("yyyyMMdd");
            obj.set_autoselect("true");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("staCD_TILDE","ctclFR_DAYDUTY:0.0","10.0","30.0","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("2");
            obj.set_text("~");
            obj.set_cssclass("sta_WF_AC");
            this.divSearch.addChild(obj.name, obj);

            obj = new Calendar("ctclTO_DAYDUTY","staCD_TILDE:0.0","10.0","94","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("3");
            obj.set_dateformat("yyyy-MM-dd");
            obj.set_editformat("yyyyMMdd");
            obj.set_autoselect("true");
            this.divSearch.addChild(obj.name, obj);

            obj = new Div("ccfID_SABUN","ctclTO_DAYDUTY:0.0","10.0","250","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.getSetter("CodeFindName").set("DAX_CFBASEINFO_ALL");
            obj.getSetter("CDTextWidth").set("80");
            obj.set_taborder("7");
            obj.set_url("cmm::cmmCodeFind.xfdl");
            obj.set_text("");
            this.divSearch.addChild(obj.name, obj);

            obj = new Edit("edtID_PERSON","ccfID_SABUN:0.0","10.0","60","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("6");
            obj.set_visible("false");
            obj.set_readonly("true");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("staID_SABUN","ctclTO_DAYDUTY:0.0","10.0","92.0","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("8");
            obj.set_text("성명");
            obj.set_cssclass("sta_WF_SchLabel");
            this.divSearch.addChild(obj.name, obj);

            obj = new Div("divData","0","divSearch:10",null,null,"0","0",null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_cssclass("div_DATA_Bg");
            this.addChild(obj.name, obj);

            obj = new Div("divSplitter","40.47%","0","5","100.00%",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("2");
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
            obj.set_taborder("1");
            this.divData.addChild(obj.name, obj);

            obj = new Static("sta30","0","0","120","30",null,null,null,null,null,null,this.divData.form.divDataRight.form);
            obj.set_taborder("0");
            obj.set_text("당직일자");
            obj.set_cssclass("sta_WF_tablelabel");
            obj.set_textDecoration("none");
            this.divData.form.divDataRight.addChild(obj.name, obj);

            obj = new Static("sta00","119","29",null,"30","0",null,null,null,null,null,this.divData.form.divDataRight.form);
            obj.set_taborder("1");
            obj.set_cssclass("sta_WF_tablebg");
            this.divData.form.divDataRight.addChild(obj.name, obj);

            obj = new Static("sta35","119","0","255","30",null,null,null,null,null,null,this.divData.form.divDataRight.form);
            obj.set_taborder("2");
            obj.set_cssclass("sta_WF_tablebg");
            this.divData.form.divDataRight.addChild(obj.name, obj);

            obj = new Static("sta02","0","29","120","30",null,null,null,null,null,null,this.divData.form.divDataRight.form);
            obj.set_taborder("3");
            obj.set_text("당직시간");
            obj.set_cssclass("sta_WF_tablelabel");
            obj.set_textDecoration("none");
            this.divData.form.divDataRight.addChild(obj.name, obj);

            obj = new Static("sta01","119","58",null,"30","0",null,null,null,null,null,this.divData.form.divDataRight.form);
            obj.set_taborder("4");
            obj.set_cssclass("sta_WF_tablebg");
            this.divData.form.divDataRight.addChild(obj.name, obj);

            obj = new Static("sta03","0","58","120","30",null,null,null,null,null,null,this.divData.form.divDataRight.form);
            obj.set_taborder("5");
            obj.set_text("당직자");
            obj.set_cssclass("sta_WF_tablelabel");
            obj.set_textDecoration("none");
            this.divData.form.divDataRight.addChild(obj.name, obj);

            obj = new Calendar("ctclDT_WORK","124","5","105","20",null,null,null,null,null,null,this.divData.form.divDataRight.form);
            obj.set_taborder("6");
            obj.set_dateformat("yyyy-MM-dd");
            obj.set_editformat("yyyyMMdd");
            obj.set_autoselect("true");
            obj.set_enable("true");
            obj.set_readonly("true");
            this.divData.form.divDataRight.addChild(obj.name, obj);

            obj = new Static("staTO_EDUCATION00","234","34","10","20",null,null,null,null,null,null,this.divData.form.divDataRight.form);
            obj.set_taborder("9");
            obj.set_text("~");
            this.divData.form.divDataRight.addChild(obj.name, obj);

            obj = new Combo("cboHH_DAYDUTY_TO","249","34","50","20",null,null,null,null,null,null,this.divData.form.divDataRight.form);
            obj.set_taborder("10");
            obj.set_datacolumn("DS_CODE");
            obj.set_codecolumn("CD_CODE");
            obj.set_innerdataset("dsHH");
            obj.set_text("");
            obj.set_value("");
            obj.set_index("0");
            this.divData.form.divDataRight.addChild(obj.name, obj);

            obj = new Combo("cboMM_DAYDUTY_TO","304","34","50","20",null,null,null,null,null,null,this.divData.form.divDataRight.form);
            obj.set_taborder("11");
            obj.set_datacolumn("DS_CODE");
            obj.set_codecolumn("CD_CODE");
            obj.set_innerdataset("dsMM");
            obj.set_text("");
            obj.set_value("");
            obj.set_index("0");
            this.divData.form.divDataRight.addChild(obj.name, obj);

            obj = new Combo("cboMM_DAYDUTY_FROM","179","34","50","20",null,null,null,null,null,null,this.divData.form.divDataRight.form);
            obj.set_taborder("12");
            obj.set_datacolumn("DS_CODE");
            obj.set_codecolumn("CD_CODE");
            obj.set_innerdataset("dsMM");
            obj.set_text("");
            obj.set_value("");
            obj.set_index("0");
            this.divData.form.divDataRight.addChild(obj.name, obj);

            obj = new Combo("cboHH_DAYDUTY_FROM","124","34","50","20",null,null,null,null,null,null,this.divData.form.divDataRight.form);
            obj.set_taborder("13");
            obj.set_datacolumn("DS_CODE");
            obj.set_codecolumn("CD_CODE");
            obj.set_innerdataset("dsHH");
            obj.set_text("");
            obj.set_value("");
            obj.set_index("0");
            this.divData.form.divDataRight.addChild(obj.name, obj);

            obj = new Static("sta31","492","0",null,"30","0",null,null,null,null,null,this.divData.form.divDataRight.form);
            obj.set_taborder("14");
            obj.set_cssclass("sta_WF_tablebg");
            this.divData.form.divDataRight.addChild(obj.name, obj);

            obj = new Static("sta32","373","0","120","30",null,null,null,null,null,null,this.divData.form.divDataRight.form);
            obj.set_taborder("15");
            obj.set_text("결재상태 ");
            obj.set_cssclass("sta_WF_tablelabel");
            obj.set_textDecoration("none");
            this.divData.form.divDataRight.addChild(obj.name, obj);

            obj = new Edit("txtDS_APPROVAL","497","5",null,"20","5",null,null,null,null,null,this.divData.form.divDataRight.form);
            obj.set_taborder("16");
            obj.set_enable("true");
            obj.set_readonly("true");
            this.divData.form.divDataRight.addChild(obj.name, obj);

            obj = new Edit("txtDS_HNAME","124","63",null,"20","5",null,null,null,null,null,this.divData.form.divDataRight.form);
            obj.set_taborder("17");
            obj.set_enable("true");
            obj.set_readonly("true");
            this.divData.form.divDataRight.addChild(obj.name, obj);

            obj = new Static("staTITLE","0","100","44.55%","22",null,null,null,null,null,null,this.divData.form.divDataRight.form);
            obj.set_taborder("18");
            obj.set_text("지시 또는 전달사항");
            obj.set_cssclass("sta_TITLE_Bg");
            obj.set_textAlign("left");
            this.divData.form.divDataRight.addChild(obj.name, obj);

            obj = new Static("sta26","0","125",null,"71","0",null,null,null,null,null,this.divData.form.divDataRight.form);
            obj.set_taborder("7");
            obj.set_cssclass("sta_WF_tablebg");
            this.divData.form.divDataRight.addChild(obj.name, obj);

            obj = new TextArea("txtDS_DIRECTION","5","130",null,"61","5",null,null,null,null,null,this.divData.form.divDataRight.form);
            obj.set_taborder("8");
            this.divData.form.divDataRight.addChild(obj.name, obj);

            obj = new Static("sta04","0","235",null,"71","0",null,null,null,null,null,this.divData.form.divDataRight.form);
            obj.set_taborder("19");
            obj.set_cssclass("sta_WF_tablebg");
            this.divData.form.divDataRight.addChild(obj.name, obj);

            obj = new TextArea("txtDS_ACTION","5","240",null,"61","5",null,null,null,null,null,this.divData.form.divDataRight.form);
            obj.set_taborder("20");
            this.divData.form.divDataRight.addChild(obj.name, obj);

            obj = new Static("staTITLE00","0","210","44.55%","22",null,null,null,null,null,null,this.divData.form.divDataRight.form);
            obj.set_taborder("21");
            obj.set_text("조치사항");
            obj.set_cssclass("sta_TITLE_Bg");
            obj.set_textAlign("left");
            this.divData.form.divDataRight.addChild(obj.name, obj);

            obj = new Static("sta05","0","348","120","67",null,null,null,null,null,null,this.divData.form.divDataRight.form);
            obj.set_taborder("22");
            obj.set_text("점검요소");
            obj.set_cssclass("sta_WF_tablelabel");
            obj.set_textDecoration("none");
            obj.set_textAlign("center");
            this.divData.form.divDataRight.addChild(obj.name, obj);

            obj = new Static("staTITLE01","0","320","44.55%","22",null,null,null,null,null,null,this.divData.form.divDataRight.form);
            obj.set_taborder("23");
            obj.set_text("안전점검");
            obj.set_cssclass("sta_TITLE_Bg");
            obj.set_textAlign("left");
            this.divData.form.divDataRight.addChild(obj.name, obj);

            obj = new Static("sta06","119","348","513","38",null,null,null,null,null,null,this.divData.form.divDataRight.form);
            obj.set_taborder("24");
            obj.set_text("점검결과\r\n( 이상 無 O / 이상 有 X 표시 )");
            obj.set_cssclass("sta_WF_tablelabel");
            obj.set_textDecoration("none");
            obj.set_textAlign("center");
            this.divData.form.divDataRight.addChild(obj.name, obj);

            obj = new Static("sta07","631","348",null,"67","0",null,null,null,null,null,this.divData.form.divDataRight.form);
            obj.set_taborder("25");
            obj.set_text("특이사항");
            obj.set_cssclass("sta_WF_tablelabel");
            obj.set_textDecoration("none");
            obj.set_textAlign("center");
            this.divData.form.divDataRight.addChild(obj.name, obj);

            obj = new Static("sta08","0","414","120","30",null,null,null,null,null,null,this.divData.form.divDataRight.form);
            obj.set_taborder("26");
            obj.set_text("소등상태");
            obj.set_cssclass("sta_WF_tablelabel");
            obj.set_textDecoration("none");
            obj.set_textAlign("center");
            this.divData.form.divDataRight.addChild(obj.name, obj);

            obj = new Static("sta10","119","385","128","30",null,null,null,null,null,null,this.divData.form.divDataRight.form);
            obj.set_taborder("27");
            obj.set_text("8시");
            obj.set_cssclass("sta_WF_tablelabel");
            obj.set_textDecoration("none");
            obj.set_textAlign("center");
            this.divData.form.divDataRight.addChild(obj.name, obj);

            obj = new Static("sta11","246","385","128","30",null,null,null,null,null,null,this.divData.form.divDataRight.form);
            obj.set_taborder("28");
            obj.set_text("12시");
            obj.set_cssclass("sta_WF_tablelabel");
            obj.set_textDecoration("none");
            obj.set_textAlign("center");
            this.divData.form.divDataRight.addChild(obj.name, obj);

            obj = new Static("sta12","373","385","128","30",null,null,null,null,null,null,this.divData.form.divDataRight.form);
            obj.set_taborder("29");
            obj.set_text("15시");
            obj.set_cssclass("sta_WF_tablelabel");
            obj.set_textDecoration("none");
            obj.set_textAlign("center");
            this.divData.form.divDataRight.addChild(obj.name, obj);

            obj = new Static("sta13","500","385","132","30",null,null,null,null,null,null,this.divData.form.divDataRight.form);
            obj.set_taborder("30");
            obj.set_text("17시");
            obj.set_cssclass("sta_WF_tablelabel");
            obj.set_textDecoration("none");
            obj.set_textAlign("center");
            this.divData.form.divDataRight.addChild(obj.name, obj);

            obj = new Static("sta14","119","414","128","30",null,null,null,null,null,null,this.divData.form.divDataRight.form);
            obj.set_taborder("31");
            obj.set_cssclass("sta_WF_tablebg");
            this.divData.form.divDataRight.addChild(obj.name, obj);

            obj = new Static("sta15","246","414","128","30",null,null,null,null,null,null,this.divData.form.divDataRight.form);
            obj.set_taborder("32");
            obj.set_cssclass("sta_WF_tablebg");
            this.divData.form.divDataRight.addChild(obj.name, obj);

            obj = new Static("sta16","373","414","128","30",null,null,null,null,null,null,this.divData.form.divDataRight.form);
            obj.set_taborder("33");
            obj.set_cssclass("sta_WF_tablebg");
            this.divData.form.divDataRight.addChild(obj.name, obj);

            obj = new Static("sta17","500","414","132","30",null,null,null,null,null,null,this.divData.form.divDataRight.form);
            obj.set_taborder("34");
            obj.set_cssclass("sta_WF_tablebg");
            this.divData.form.divDataRight.addChild(obj.name, obj);

            obj = new Static("sta18","631","414",null,"30","0",null,null,null,null,null,this.divData.form.divDataRight.form);
            obj.set_taborder("35");
            obj.set_cssclass("sta_WF_tablebg");
            this.divData.form.divDataRight.addChild(obj.name, obj);

            obj = new Combo("cboDS_LIGHTS_08","124","419","118","20",null,null,null,null,null,null,this.divData.form.divDataRight.form);
            obj.set_taborder("36");
            obj.set_datacolumn("DS_CODE");
            obj.set_codecolumn("CD_CODE");
            obj.set_innerdataset("dsOX");
            obj.set_text("");
            obj.set_value("");
            obj.set_index("0");
            this.divData.form.divDataRight.addChild(obj.name, obj);

            obj = new Combo("cboDS_LIGHTS_12","251","419","118","20",null,null,null,null,null,null,this.divData.form.divDataRight.form);
            obj.set_taborder("37");
            obj.set_datacolumn("DS_CODE");
            obj.set_codecolumn("CD_CODE");
            obj.set_innerdataset("dsOX");
            obj.set_text("");
            obj.set_value("");
            obj.set_index("0");
            this.divData.form.divDataRight.addChild(obj.name, obj);

            obj = new Combo("cboDS_LIGHTS_15","378","419","118","20",null,null,null,null,null,null,this.divData.form.divDataRight.form);
            obj.set_taborder("38");
            obj.set_datacolumn("DS_CODE");
            obj.set_codecolumn("CD_CODE");
            obj.set_innerdataset("dsOX");
            obj.set_text("");
            obj.set_value("");
            obj.set_index("0");
            this.divData.form.divDataRight.addChild(obj.name, obj);

            obj = new Combo("cboDS_LIGHTS_17","505","419","122","20",null,null,null,null,null,null,this.divData.form.divDataRight.form);
            obj.set_taborder("39");
            obj.set_datacolumn("DS_CODE");
            obj.set_codecolumn("CD_CODE");
            obj.set_innerdataset("dsOX");
            obj.set_text("");
            obj.set_value("");
            obj.set_index("0");
            this.divData.form.divDataRight.addChild(obj.name, obj);

            obj = new Edit("txtDS_LIGHTS_ETC","635","419",null,"20","5",null,null,null,null,null,this.divData.form.divDataRight.form);
            obj.set_taborder("40");
            obj.set_enable("true");
            this.divData.form.divDataRight.addChild(obj.name, obj);

            obj = new Static("sta09","500","443","132","30",null,null,null,null,null,null,this.divData.form.divDataRight.form);
            obj.set_taborder("41");
            obj.set_cssclass("sta_WF_tablebg");
            this.divData.form.divDataRight.addChild(obj.name, obj);

            obj = new Static("sta19","373","443","128","30",null,null,null,null,null,null,this.divData.form.divDataRight.form);
            obj.set_taborder("42");
            obj.set_cssclass("sta_WF_tablebg");
            this.divData.form.divDataRight.addChild(obj.name, obj);

            obj = new Static("sta20","246","443","128","30",null,null,null,null,null,null,this.divData.form.divDataRight.form);
            obj.set_taborder("43");
            obj.set_cssclass("sta_WF_tablebg");
            this.divData.form.divDataRight.addChild(obj.name, obj);

            obj = new Static("sta21","119","443","128","30",null,null,null,null,null,null,this.divData.form.divDataRight.form);
            obj.set_taborder("44");
            obj.set_cssclass("sta_WF_tablebg");
            this.divData.form.divDataRight.addChild(obj.name, obj);

            obj = new Static("sta22","0","443","120","30",null,null,null,null,null,null,this.divData.form.divDataRight.form);
            obj.set_taborder("45");
            obj.set_text("소방상태");
            obj.set_cssclass("sta_WF_tablelabel");
            obj.set_textDecoration("none");
            obj.set_textAlign("center");
            this.divData.form.divDataRight.addChild(obj.name, obj);

            obj = new Combo("cboDS_FIRE_08","124","448","118","20",null,null,null,null,null,null,this.divData.form.divDataRight.form);
            obj.set_taborder("46");
            obj.set_datacolumn("DS_CODE");
            obj.set_codecolumn("CD_CODE");
            obj.set_innerdataset("dsOX");
            obj.set_text("");
            obj.set_value("");
            obj.set_index("0");
            this.divData.form.divDataRight.addChild(obj.name, obj);

            obj = new Combo("cboDS_FIRE_12","251","448","118","20",null,null,null,null,null,null,this.divData.form.divDataRight.form);
            obj.set_taborder("47");
            obj.set_datacolumn("DS_CODE");
            obj.set_codecolumn("CD_CODE");
            obj.set_innerdataset("dsOX");
            obj.set_text("");
            obj.set_value("");
            obj.set_index("0");
            this.divData.form.divDataRight.addChild(obj.name, obj);

            obj = new Combo("cboDS_FIRE_15","378","448","118","20",null,null,null,null,null,null,this.divData.form.divDataRight.form);
            obj.set_taborder("48");
            obj.set_datacolumn("DS_CODE");
            obj.set_codecolumn("CD_CODE");
            obj.set_innerdataset("dsOX");
            obj.set_text("");
            obj.set_value("");
            obj.set_index("0");
            this.divData.form.divDataRight.addChild(obj.name, obj);

            obj = new Combo("cboDS_FIRE_17","505","448","122","20",null,null,null,null,null,null,this.divData.form.divDataRight.form);
            obj.set_taborder("49");
            obj.set_datacolumn("DS_CODE");
            obj.set_codecolumn("CD_CODE");
            obj.set_innerdataset("dsOX");
            obj.set_text("");
            obj.set_value("");
            obj.set_index("0");
            this.divData.form.divDataRight.addChild(obj.name, obj);

            obj = new Static("sta23","631","443",null,"30","0",null,null,null,null,null,this.divData.form.divDataRight.form);
            obj.set_taborder("50");
            obj.set_cssclass("sta_WF_tablebg");
            this.divData.form.divDataRight.addChild(obj.name, obj);

            obj = new Edit("txtDS_FIRE_ETC","635","448",null,"20","5",null,null,null,null,null,this.divData.form.divDataRight.form);
            obj.set_taborder("51");
            obj.set_enable("true");
            this.divData.form.divDataRight.addChild(obj.name, obj);

            obj = new Static("sta24","500","472","132","30",null,null,null,null,null,null,this.divData.form.divDataRight.form);
            obj.set_taborder("52");
            obj.set_cssclass("sta_WF_tablebg");
            this.divData.form.divDataRight.addChild(obj.name, obj);

            obj = new Static("sta25","373","472","128","30",null,null,null,null,null,null,this.divData.form.divDataRight.form);
            obj.set_taborder("53");
            obj.set_cssclass("sta_WF_tablebg");
            this.divData.form.divDataRight.addChild(obj.name, obj);

            obj = new Static("sta27","246","472","128","30",null,null,null,null,null,null,this.divData.form.divDataRight.form);
            obj.set_taborder("54");
            obj.set_cssclass("sta_WF_tablebg");
            this.divData.form.divDataRight.addChild(obj.name, obj);

            obj = new Static("sta28","119","472","128","30",null,null,null,null,null,null,this.divData.form.divDataRight.form);
            obj.set_taborder("55");
            obj.set_cssclass("sta_WF_tablebg");
            this.divData.form.divDataRight.addChild(obj.name, obj);

            obj = new Static("sta29","0","472","120","30",null,null,null,null,null,null,this.divData.form.divDataRight.form);
            obj.set_taborder("56");
            obj.set_text("단속상태");
            obj.set_cssclass("sta_WF_tablelabel");
            obj.set_textDecoration("none");
            obj.set_textAlign("center");
            this.divData.form.divDataRight.addChild(obj.name, obj);

            obj = new Combo("cboDS_CURB_08","124","477","118","20",null,null,null,null,null,null,this.divData.form.divDataRight.form);
            obj.set_taborder("57");
            obj.set_datacolumn("DS_CODE");
            obj.set_codecolumn("CD_CODE");
            obj.set_innerdataset("dsOX");
            obj.set_text("");
            obj.set_value("");
            obj.set_index("0");
            this.divData.form.divDataRight.addChild(obj.name, obj);

            obj = new Combo("cboDS_CURB_12","251","477","118","20",null,null,null,null,null,null,this.divData.form.divDataRight.form);
            obj.set_taborder("58");
            obj.set_datacolumn("DS_CODE");
            obj.set_codecolumn("CD_CODE");
            obj.set_innerdataset("dsOX");
            obj.set_text("");
            obj.set_value("");
            obj.set_index("0");
            this.divData.form.divDataRight.addChild(obj.name, obj);

            obj = new Combo("cboDS_CURB_15","378","477","118","20",null,null,null,null,null,null,this.divData.form.divDataRight.form);
            obj.set_taborder("59");
            obj.set_datacolumn("DS_CODE");
            obj.set_codecolumn("CD_CODE");
            obj.set_innerdataset("dsOX");
            obj.set_text("");
            obj.set_value("");
            obj.set_index("0");
            this.divData.form.divDataRight.addChild(obj.name, obj);

            obj = new Combo("cboDS_CURB_17","505","477","122","20",null,null,null,null,null,null,this.divData.form.divDataRight.form);
            obj.set_taborder("60");
            obj.set_datacolumn("DS_CODE");
            obj.set_codecolumn("CD_CODE");
            obj.set_innerdataset("dsOX");
            obj.set_text("");
            obj.set_value("");
            obj.set_index("0");
            this.divData.form.divDataRight.addChild(obj.name, obj);

            obj = new Static("sta33","631","472",null,"30","0",null,null,null,null,null,this.divData.form.divDataRight.form);
            obj.set_taborder("61");
            obj.set_cssclass("sta_WF_tablebg");
            this.divData.form.divDataRight.addChild(obj.name, obj);

            obj = new Edit("txtDS_CURB_ETC","635","477",null,"20","5",null,null,null,null,null,this.divData.form.divDataRight.form);
            obj.set_taborder("62");
            obj.set_enable("true");
            this.divData.form.divDataRight.addChild(obj.name, obj);

            obj = new Static("staTITLE02","0","510","44.55%","22",null,null,null,null,null,null,this.divData.form.divDataRight.form);
            obj.set_taborder("63");
            obj.set_text("사옥출입자현황");
            obj.set_cssclass("sta_TITLE_Bg");
            obj.set_textAlign("left");
            this.divData.form.divDataRight.addChild(obj.name, obj);

            obj = new Button("btnDel",null,"512","60","20","5",null,null,null,null,null,this.divData.form.divDataRight.form);
            obj.set_taborder("65");
            obj.set_text("삭제");
            this.divData.form.divDataRight.addChild(obj.name, obj);

            obj = new Button("btnAdd",null,"512","60","20","btnDel:6",null,null,null,null,null,this.divData.form.divDataRight.form);
            obj.set_taborder("64");
            obj.set_text("추가");
            this.divData.form.divDataRight.addChild(obj.name, obj);

            obj = new Grid("objGridSub","0","538",null,"150","0",null,null,null,null,null,this.divData.form.divDataRight.form);
            obj.set_taborder("66");
            obj._setContents("");
            this.divData.form.divDataRight.addChild(obj.name, obj);

            obj = new Static("sta34","0","721",null,"71","0",null,null,null,null,null,this.divData.form.divDataRight.form);
            obj.set_taborder("67");
            obj.set_cssclass("sta_WF_tablebg");
            this.divData.form.divDataRight.addChild(obj.name, obj);

            obj = new TextArea("txtDS_ACCEPT","5","726",null,"61","5",null,null,null,null,null,this.divData.form.divDataRight.form);
            obj.set_taborder("68");
            this.divData.form.divDataRight.addChild(obj.name, obj);

            obj = new Static("staTITLE03","0","696","44.55%","22",null,null,null,null,null,null,this.divData.form.divDataRight.form);
            obj.set_taborder("69");
            obj.set_text("접수");
            obj.set_cssclass("sta_TITLE_Bg");
            obj.set_textAlign("left");
            this.divData.form.divDataRight.addChild(obj.name, obj);

            obj = new Static("sta36","0","821",null,"71","0",null,null,null,null,null,this.divData.form.divDataRight.form);
            obj.set_taborder("70");
            obj.set_cssclass("sta_WF_tablebg");
            this.divData.form.divDataRight.addChild(obj.name, obj);

            obj = new TextArea("txtDS_VISIT","5","826",null,"61","5",null,null,null,null,null,this.divData.form.divDataRight.form);
            obj.set_taborder("71");
            this.divData.form.divDataRight.addChild(obj.name, obj);

            obj = new Static("staTITLE04","0","796","44.55%","22",null,null,null,null,null,null,this.divData.form.divDataRight.form);
            obj.set_taborder("72");
            obj.set_text("내방");
            obj.set_cssclass("sta_TITLE_Bg");
            obj.set_textAlign("left");
            this.divData.form.divDataRight.addChild(obj.name, obj);

            obj = new Static("sta37","0","921",null,"71","0",null,null,null,null,null,this.divData.form.divDataRight.form);
            obj.set_taborder("73");
            obj.set_cssclass("sta_WF_tablebg");
            this.divData.form.divDataRight.addChild(obj.name, obj);

            obj = new TextArea("txtDS_REMARK","5","926",null,"61","5",null,null,null,null,null,this.divData.form.divDataRight.form);
            obj.set_taborder("74");
            this.divData.form.divDataRight.addChild(obj.name, obj);

            obj = new Static("staTITLE05","0","896","44.55%","22",null,null,null,null,null,null,this.divData.form.divDataRight.form);
            obj.set_taborder("75");
            obj.set_text("비고");
            obj.set_cssclass("sta_TITLE_Bg");
            obj.set_textAlign("left");
            this.divData.form.divDataRight.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this
            obj = new Layout("default","",this._adjust_width,this._adjust_height,this,function(p){});
            this.addLayout(obj.name, obj);
            
            // BindItem Information
            obj = new BindItem("item0","divSearch.form.ccfCD_CORP.form.CDTextBox","value","dsSearch","CD_CORP");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item3","divData.form.divDataRight.form.ctclDT_WORK","value","dsList","DT_WORK");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item20","divData.form.divDataRight.form.txtDS_DIRECTION","value","dsList","DS_DIRECTION");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item5","divData.form.divDataRight.form.cboHH_DAYDUTY_TO","value","dsList","HH_DAYDUTY_TO");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item6","divData.form.divDataRight.form.cboMM_DAYDUTY_TO","value","dsList","MM_DAYDUTY_TO");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item7","divData.form.divDataRight.form.cboMM_DAYDUTY_FROM","value","dsList","MM_DAYDUTY_FROM");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item8","divData.form.divDataRight.form.cboHH_DAYDUTY_FROM","value","dsList","HH_DAYDUTY_FROM");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item1","divSearch.form.ctclTO_DAYDUTY","value","dsSearch","TO_DAYDUTY");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item9","divSearch.form.ctclFR_DAYDUTY","value","dsSearch","FR_DAYDUTY");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item36","divSearch.form.edtID_PERSON","value","dsSearch","ID_PERSON");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item37","divSearch.form.ccfID_SABUN.form.CDTextBox","value","dsSearch","ID_SABUN");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item2","divData.form.divDataRight.form.txtDS_ACTION","value","dsList","DS_ACTION");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item4","divData.form.divDataRight.form.cboDS_LIGHTS_08","value","dsList","DS_LIGHTS_08");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item10","divData.form.divDataRight.form.cboDS_LIGHTS_12","value","dsList","DS_LIGHTS_12");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item11","divData.form.divDataRight.form.cboDS_LIGHTS_15","value","dsList","DS_LIGHTS_15");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item12","divData.form.divDataRight.form.cboDS_LIGHTS_17","value","dsList","DS_LIGHTS_17");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item13","divData.form.divDataRight.form.cboDS_FIRE_08","value","dsList","DS_FIRE_08");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item14","divData.form.divDataRight.form.cboDS_FIRE_12","value","dsList","DS_FIRE_12");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item15","divData.form.divDataRight.form.cboDS_FIRE_15","value","dsList","DS_FIRE_15");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item16","divData.form.divDataRight.form.cboDS_FIRE_17","value","dsList","DS_FIRE_17");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item17","divData.form.divDataRight.form.cboDS_CURB_08","value","dsList","DS_CURB_08");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item18","divData.form.divDataRight.form.cboDS_CURB_12","value","dsList","DS_CURB_12");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item19","divData.form.divDataRight.form.cboDS_CURB_15","value","dsList","DS_CURB_15");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item21","divData.form.divDataRight.form.cboDS_CURB_17","value","dsList","DS_CURB_17");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item22","divData.form.divDataRight.form.txtDS_ACCEPT","value","dsList","DS_ACCEPT");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item23","divData.form.divDataRight.form.txtDS_VISIT","value","dsList","DS_VISIT");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item24","divData.form.divDataRight.form.txtDS_REMARK","value","dsList","DS_REMARK");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item25","divData.form.divDataRight.form.txtDS_APPROVAL","value","dsList","DS_APPROVAL");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item26","divData.form.divDataRight.form.txtDS_HNAME","value","dsList","DS_HNAME");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item27","divData.form.divDataRight.form.txtDS_LIGHTS_ETC","value","dsList","DS_LIGHTS_ETC");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item28","divData.form.divDataRight.form.txtDS_FIRE_ETC","value","dsList","DS_FIRE_ETC");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item29","divData.form.divDataRight.form.txtDS_CURB_ETC","value","dsList","DS_CURB_ETC");
            this.addChild(obj.name, obj);
            obj.bind();
            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {
            this._addPreloadList("fdl","cmm::cmmCodeFind.xfdl");
        };
        
        // User Script
        this.registerScript("DAB_DAYDUTY.xfdl", function() {
        this.objApp = this.gfnGetApplication();
        this.FlagGb = "";	// 저장 플래그값

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

        	var toDay = this.gfnGetDate().substr(0,8);
        	this.dsSearch.setColumn(0, "FR_DAYDUTY", this.gfnGetFirstDate(toDay));
        	this.dsSearch.setColumn(0, "TO_DAYDUTY", this.gfnGetLastDate(toDay));

        	this.dsSearch.setColumn(0, "CD_CORP", this.AuthClient.CD_CORP);
        	this.divSearch.form.ccfCD_CORP.form.DSTextBox.set_value(this.AuthClient.DS_CORP);
        	this.dsSearch.setColumn(0, "ID_SABUN", this.AuthClient.ID_USER);
        	this.divSearch.form.ccfID_SABUN.form.DSTextBox.set_value(this.AuthClient.DS_HNAME);
        	this.divSearch.form.edtID_PERSON.set_value(this.AuthClient.ID_PERSON);

        	this.divData.form.divDataRight.form.btnAdd.set_enable(false);	// 추가버튼
        	this.divData.form.divDataRight.form.btnDel.set_enable(false);	// 삭제버튼

        	if(this.FormInfo.GR_SEARCH == "1"){
        		this.ccfCD_CORP.set_enable(true);
        		this.ccfID_SABUN.set_enable(true);
        	}else{
        		this.ccfCD_CORP.set_enable(false);
        		this.ccfID_SABUN.set_enable(false);
        	}
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
        	this.btnElctrncPmnt = this.gfnFormButtonAdd("btnElctrncPmnt", "fnElctrncPmnt", "전자결재");
        	//this.btnElctrncPmntDoc = this.gfnFormButtonAdd("btnElctrncPmntDoc", "fnElctrncPmntDoc", "전자결재문서조회");
        };

        /************************************************************************
         * 변수 선언
         ************************************************************************/
        this.fnSetVariable = function() {
        	this.ccfCD_CORP = this.divSearch.form.ccfCD_CORP;
        	this.ccfID_SABUN = this.divSearch.form.ccfID_SABUN;
        	this.ctclFR_DAYDUTY = this.divSearch.form.ctclFR_DAYDUTY;
        	this.ctclTO_DAYDUTY = this.divSearch.form.ctclTO_DAYDUTY;
        	this.edtID_PERSON = this.divSearch.form.edtID_PERSON;

        	/*
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
        	*/

        	this.dxGrid = this.divData.form.divDataLeft.form.objGrid;
        	this.dxGridSub = this.divData.form.divDataRight.form.objGridSub;
        };

        /************************************************************************
         * 이벤트 설정
         ************************************************************************/
        this.fnSetEvent = function() {
        	this.gfnGridInit(this.dxGrid, this.dsList, "DA", "DAB_DAYDUTY");
        	this.gfnGridInit(this.dxGridSub, this.dsListSub, "DA", "DAB_DAYDUTY_DTL");

        	this.ccfCD_CORP.BeforeUserDataSetParam = "fnBeforeUserDataSetParam";

        	this.ccfID_SABUN.BeforeUserDataSetParam = "fnBeforeUserDataSetParam";
        	this.ccfID_SABUN.AfterCDTextChanged = "fnAfterCDTextChanged";


        	this.dxGrid.set_selecttype("cell");
        	this.dxGrid.addEventHandler("onselectchanged", this.fnGrid_RowCellChanged, this);
        	//this.dsList.addEventHandler("canrowposchange", this.dsList_canrowposchange, this);


        	this.dxGridSub.EnterCell = "fnGrid_EnterCell";
        }

        /************************************************************************
         * 파라미터 설정
         ************************************************************************/
        this.fnSetParameter = function() {

        	this.dsSelect = new Dataset();
        	this.dsSelect.addColumn("CD_CORP", "string");
        	this.dsSelect.addColumn("FR_DAYDUTY", "string");
        	this.dsSelect.addColumn("TO_DAYDUTY", "string");
        	this.dsSelect.addColumn("ID_PERSON", "int");
        	this.dsSelect.addColumn("ID_SABUN", "string");
        	this.dsSelect.addColumn("ID_USER", "string");
        	this.dsSelect.addColumn("GR_SEARCH", "string");
        	this.dsSelect.addColumn("GR_CORP", "string");


        	this.dsSave = new Dataset();
        	this.dsSave.addColumn("DT_DAYDUTY", "string");
        	this.dsSave.addColumn("ID_PERSON", "int");
        	this.dsSave.addColumn("HH_DAYDUTY_FROM", "string");
        	this.dsSave.addColumn("MM_DAYDUTY_FROM", "string");
        	this.dsSave.addColumn("HH_DAYDUTY_TO", "string");
        	this.dsSave.addColumn("MM_DAYDUTY_TO", "string");
        	this.dsSave.addColumn("ID_SABUN", "string");
        	this.dsSave.addColumn("DS_DIRECTION", "string");
        	this.dsSave.addColumn("DS_ACTION", "string");
        	this.dsSave.addColumn("DS_LIGHTS_08", "string");
        	this.dsSave.addColumn("DS_LIGHTS_12", "string");
        	this.dsSave.addColumn("DS_LIGHTS_15", "string");
        	this.dsSave.addColumn("DS_LIGHTS_17", "string");
        	this.dsSave.addColumn("DS_LIGHTS_ETC", "string");
        	this.dsSave.addColumn("DS_FIRE_08", "string");
        	this.dsSave.addColumn("DS_FIRE_12", "string");
        	this.dsSave.addColumn("DS_FIRE_15", "string");
        	this.dsSave.addColumn("DS_FIRE_17", "string");
        	this.dsSave.addColumn("DS_FIRE_ETC", "string");
        	this.dsSave.addColumn("DS_CURB_08", "string");
        	this.dsSave.addColumn("DS_CURB_12", "string");
        	this.dsSave.addColumn("DS_CURB_15", "string");
        	this.dsSave.addColumn("DS_CURB_17", "string");
        	this.dsSave.addColumn("DS_CURB_ETC", "string");
        	this.dsSave.addColumn("DS_ACCEPT", "string");
        	this.dsSave.addColumn("DS_VISIT", "string");
        	this.dsSave.addColumn("DS_REMARK", "string");
        	this.dsSave.addColumn("TY_SAVE_DTL", "string");
        	this.dsSave.addColumn("NO_SEQ", "int");
        	this.dsSave.addColumn("HH_VISIT_FROM", "string");
        	this.dsSave.addColumn("MM_VISIT_FROM", "string");
        	this.dsSave.addColumn("HH_VISIT_TO", "string");
        	this.dsSave.addColumn("MM_VISIT_TO", "string");
        	this.dsSave.addColumn("DS_ORG", "string");
        	this.dsSave.addColumn("DS_POSITION", "string");
        	this.dsSave.addColumn("DS_HNAME", "string");
        	this.dsSave.addColumn("DS_REMARK_DTL", "string");
        	this.dsSave.addColumn("ID_USER", "string");
        	this.dsSave.addColumn("GR_SEARCH", "string");
        	this.dsSave.addColumn("GR_CORP", "string");

        	this.dsSelectSub = new Dataset();
        	this.dsSelectSub.addColumn("DT_DAYDUTY", "string");
        	this.dsSelectSub.addColumn("ID_PERSON", "int");
        	this.dsSelectSub.addColumn("ID_USER", "string");
        	this.dsSelectSub.addColumn("GR_SEARCH", "string");
        	this.dsSelectSub.addColumn("GR_CORP", "string");

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
        	this.dsSelect.setColumn(0, "FR_DAYDUTY", this.dsSearch.getColumn(0, "FR_DAYDUTY"));
        	this.dsSelect.setColumn(0, "TO_DAYDUTY", this.dsSearch.getColumn(0, "TO_DAYDUTY"));
        	this.dsSelect.setColumn(0, "ID_PERSON", this.dsSearch.getColumn(0, "ID_PERSON"));
        	this.dsSelect.setColumn(0, "ID_SABUN", this.dsSearch.getColumn(0, "ID_SABUN"));
        	this.dsSelect.setColumn(0, "ID_USER", this.AuthClient.ID_USER);
        	this.dsSelect.setColumn(0, "GR_SEARCH", this.FormInfo.GR_SEARCH);
        	this.dsSelect.setColumn(0, "GR_CORP", this.AuthClient.CD_CORP);

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

        this.fnSelectSub = function() {
        	if (this.dxGrid.rowcount == 0 || this.dxGrid.currentrow < 0) return false;

        	this.dsListSub.clearData();

        	this.gfnGridBeforeSelect(this.dxGridSub);

        	this.dsSelectSub.clearData();
        	this.dsSelectSub.addRow();

        	this.dsSelectSub.setColumn(0, "DT_DAYDUTY", this.dsList.getColumn(this.dsList.rowposition, "DT_WORK"));
        	this.dsSelectSub.setColumn(0, "ID_PERSON", this.dsList.getColumn(this.dsList.rowposition, "ID_PERSON"));
        	this.dsSelectSub.setColumn(0, "ID_USER", this.AuthClient.ID_USER);
        	this.dsSelectSub.setColumn(0, "GR_SEARCH", this.FormInfo.GR_SEARCH);
        	this.dsSelectSub.setColumn(0, "GR_CORP", this.AuthClient.CD_CORP);


        	var strSvcId    = "detail";
        	var strSvcType  = "grid";
        	var inProc		= "_dsProc";
        	var inData      = "d_select=dsSelectSub";
        	var outData     = "dsListSub=d_select0";
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

        	var listRow = this.dsList.rowposition;

        	// 사옥출입자현황 그리드에 변경된 값이있으면 변경된 갯수만큼 저장값을 담아준다
        	if(this.dsListSub.rowcount > 0){

        		// 사옥출입자현황 그리드에 데이터가 있을때 추가,수정,삭제된 값이 있을때 값 셋팅
        		for (var i = 0; i < this.dsListSub.rowcount; i++) {
        			var flag = this.gfnGetFlag(this.dsListSub, i);
        			switch(flag) {
        				case "I":
        				case "U":
        				case "D":
        					var nrow = this.dsSave.addRow();
        					this.dsSave.setColumn(nrow, "DT_DAYDUTY", this.dsList.getColumn(listRow, "DT_WORK"));
        					this.dsSave.setColumn(nrow, "ID_PERSON", this.dsList.getColumn(listRow, "ID_PERSON"));
        					this.dsSave.setColumn(nrow, "HH_DAYDUTY_FROM", this.dsList.getColumn(listRow, "HH_DAYDUTY_FROM"));
        					this.dsSave.setColumn(nrow, "MM_DAYDUTY_FROM", this.dsList.getColumn(listRow, "MM_DAYDUTY_FROM"));
        					this.dsSave.setColumn(nrow, "HH_DAYDUTY_TO", this.dsList.getColumn(listRow, "HH_DAYDUTY_TO"));
        					this.dsSave.setColumn(nrow, "MM_DAYDUTY_TO", this.dsList.getColumn(listRow, "MM_DAYDUTY_TO"));
        					this.dsSave.setColumn(nrow, "ID_SABUN", this.dsList.getColumn(listRow, "ID_SABUN"));
        					this.dsSave.setColumn(nrow, "DS_DIRECTION", this.dsList.getColumn(listRow, "DS_DIRECTION"));
        					this.dsSave.setColumn(nrow, "DS_ACTION", this.dsList.getColumn(listRow, "DS_ACTION"));
        					this.dsSave.setColumn(nrow, "DS_LIGHTS_08", this.dsList.getColumn(listRow, "DS_LIGHTS_08"));
        					this.dsSave.setColumn(nrow, "DS_LIGHTS_12", this.dsList.getColumn(listRow, "DS_LIGHTS_12"));
        					this.dsSave.setColumn(nrow, "DS_LIGHTS_15", this.dsList.getColumn(listRow, "DS_LIGHTS_15"));
        					this.dsSave.setColumn(nrow, "DS_LIGHTS_17", this.dsList.getColumn(listRow, "DS_LIGHTS_17"));
        					this.dsSave.setColumn(nrow, "DS_LIGHTS_ETC", this.dsList.getColumn(listRow, "DS_LIGHTS_ETC"));
        					this.dsSave.setColumn(nrow, "DS_FIRE_08", this.dsList.getColumn(listRow, "DS_FIRE_08"));
        					this.dsSave.setColumn(nrow, "DS_FIRE_12", this.dsList.getColumn(listRow, "DS_FIRE_12"));
        					this.dsSave.setColumn(nrow, "DS_FIRE_15", this.dsList.getColumn(listRow, "DS_FIRE_15"));
        					this.dsSave.setColumn(nrow, "DS_FIRE_17", this.dsList.getColumn(listRow, "DS_FIRE_17"));
        					this.dsSave.setColumn(nrow, "DS_FIRE_ETC", this.dsList.getColumn(listRow, "DS_FIRE_ETC"));
        					this.dsSave.setColumn(nrow, "DS_CURB_08", this.dsList.getColumn(listRow, "DS_CURB_08"));
        					this.dsSave.setColumn(nrow, "DS_CURB_12", this.dsList.getColumn(listRow, "DS_CURB_12"));
        					this.dsSave.setColumn(nrow, "DS_CURB_15", this.dsList.getColumn(listRow, "DS_CURB_15"));
        					this.dsSave.setColumn(nrow, "DS_CURB_17", this.dsList.getColumn(listRow, "DS_CURB_17"));
        					this.dsSave.setColumn(nrow, "DS_CURB_ETC", this.dsList.getColumn(listRow, "DS_CURB_ETC"));
        					this.dsSave.setColumn(nrow, "DS_ACCEPT", this.dsList.getColumn(listRow, "DS_ACCEPT"));
        					this.dsSave.setColumn(nrow, "DS_VISIT", this.dsList.getColumn(listRow, "DS_VISIT"));
        					this.dsSave.setColumn(nrow, "DS_REMARK", this.dsList.getColumn(listRow, "DS_REMARK"));
        					this.dsSave.setColumn(nrow, "ID_USER", this.AuthClient.ID_USER);
        					this.dsSave.setColumn(nrow, "GR_SEARCH", this.FormInfo.GR_SEARCH);
        					this.dsSave.setColumn(nrow, "GR_CORP", this.AuthClient.CD_CORP);

        					this.dsSave.setColumn(nrow, "TY_SAVE_DTL", flag);
        					this.dsSave.setColumn(nrow, "NO_SEQ", this.dsListSub.getColumn(i, "NO_SEQ"));
        					this.dsSave.setColumn(nrow, "HH_VISIT_FROM", this.dsListSub.getColumn(i, "HH_VISIT_FROM"));
        					this.dsSave.setColumn(nrow, "MM_VISIT_FROM", this.dsListSub.getColumn(i, "MM_VISIT_FROM"));
        					this.dsSave.setColumn(nrow, "HH_VISIT_TO", this.dsListSub.getColumn(i, "HH_VISIT_TO"));
        					this.dsSave.setColumn(nrow, "MM_VISIT_TO", this.dsListSub.getColumn(i, "MM_VISIT_TO"));
        					this.dsSave.setColumn(nrow, "DS_ORG", this.dsListSub.getColumn(i, "DS_ORG"));
        					this.dsSave.setColumn(nrow, "DS_POSITION", this.dsListSub.getColumn(i, "DS_POSITION"));
        					this.dsSave.setColumn(nrow, "DS_HNAME", this.dsListSub.getColumn(i, "DS_HNAME"));
        					this.dsSave.setColumn(nrow, "DS_REMARK_DTL", this.dsListSub.getColumn(i, "DS_REMARK"));
        					break;
        			}
        		}

        		// 사옥출입자현황 그리드에 변경된 데이터가 없고 싱글폼에 변경된 데이터가 있을때 값 셋팅
        		if (this.dsSave.rowcount == 0){
        			if(this.FlagGb == "U"){
        				var nrow = this.dsSave.addRow();
        				this.dsSave.setColumn(nrow, "DT_DAYDUTY", this.dsList.getColumn(listRow, "DT_WORK"));
        				this.dsSave.setColumn(nrow, "ID_PERSON", this.dsList.getColumn(listRow, "ID_PERSON"));
        				this.dsSave.setColumn(nrow, "HH_DAYDUTY_FROM", this.dsList.getColumn(listRow, "HH_DAYDUTY_FROM"));
        				this.dsSave.setColumn(nrow, "MM_DAYDUTY_FROM", this.dsList.getColumn(listRow, "MM_DAYDUTY_FROM"));
        				this.dsSave.setColumn(nrow, "HH_DAYDUTY_TO", this.dsList.getColumn(listRow, "HH_DAYDUTY_TO"));
        				this.dsSave.setColumn(nrow, "MM_DAYDUTY_TO", this.dsList.getColumn(listRow, "MM_DAYDUTY_TO"));
        				this.dsSave.setColumn(nrow, "ID_SABUN", this.dsList.getColumn(listRow, "ID_SABUN"));
        				this.dsSave.setColumn(nrow, "DS_DIRECTION", this.dsList.getColumn(listRow, "DS_DIRECTION"));
        				this.dsSave.setColumn(nrow, "DS_ACTION", this.dsList.getColumn(listRow, "DS_ACTION"));
        				this.dsSave.setColumn(nrow, "DS_LIGHTS_08", this.dsList.getColumn(listRow, "DS_LIGHTS_08"));
        				this.dsSave.setColumn(nrow, "DS_LIGHTS_12", this.dsList.getColumn(listRow, "DS_LIGHTS_12"));
        				this.dsSave.setColumn(nrow, "DS_LIGHTS_15", this.dsList.getColumn(listRow, "DS_LIGHTS_15"));
        				this.dsSave.setColumn(nrow, "DS_LIGHTS_17", this.dsList.getColumn(listRow, "DS_LIGHTS_17"));
        				this.dsSave.setColumn(nrow, "DS_LIGHTS_ETC", this.dsList.getColumn(listRow, "DS_LIGHTS_ETC"));
        				this.dsSave.setColumn(nrow, "DS_FIRE_08", this.dsList.getColumn(listRow, "DS_FIRE_08"));
        				this.dsSave.setColumn(nrow, "DS_FIRE_12", this.dsList.getColumn(listRow, "DS_FIRE_12"));
        				this.dsSave.setColumn(nrow, "DS_FIRE_15", this.dsList.getColumn(listRow, "DS_FIRE_15"));
        				this.dsSave.setColumn(nrow, "DS_FIRE_17", this.dsList.getColumn(listRow, "DS_FIRE_17"));
        				this.dsSave.setColumn(nrow, "DS_FIRE_ETC", this.dsList.getColumn(listRow, "DS_FIRE_ETC"));
        				this.dsSave.setColumn(nrow, "DS_CURB_08", this.dsList.getColumn(listRow, "DS_CURB_08"));
        				this.dsSave.setColumn(nrow, "DS_CURB_12", this.dsList.getColumn(listRow, "DS_CURB_12"));
        				this.dsSave.setColumn(nrow, "DS_CURB_15", this.dsList.getColumn(listRow, "DS_CURB_15"));
        				this.dsSave.setColumn(nrow, "DS_CURB_17", this.dsList.getColumn(listRow, "DS_CURB_17"));
        				this.dsSave.setColumn(nrow, "DS_CURB_ETC", this.dsList.getColumn(listRow, "DS_CURB_ETC"));
        				this.dsSave.setColumn(nrow, "DS_ACCEPT", this.dsList.getColumn(listRow, "DS_ACCEPT"));
        				this.dsSave.setColumn(nrow, "DS_VISIT", this.dsList.getColumn(listRow, "DS_VISIT"));
        				this.dsSave.setColumn(nrow, "DS_REMARK", this.dsList.getColumn(listRow, "DS_REMARK"));
        				this.dsSave.setColumn(nrow, "ID_USER", this.AuthClient.ID_USER);
        				this.dsSave.setColumn(nrow, "GR_SEARCH", this.FormInfo.GR_SEARCH);
        				this.dsSave.setColumn(nrow, "GR_CORP", this.AuthClient.CD_CORP);
        			}
        		}

        	}else{	// 싱글폼에 변경된 값이 있을때 저장
        		if(this.FlagGb == "U"){
        			var nrow = this.dsSave.addRow();
        			this.dsSave.setColumn(nrow, "DT_DAYDUTY", this.dsList.getColumn(listRow, "DT_WORK"));
        			this.dsSave.setColumn(nrow, "ID_PERSON", this.dsList.getColumn(listRow, "ID_PERSON"));
        			this.dsSave.setColumn(nrow, "HH_DAYDUTY_FROM", this.dsList.getColumn(listRow, "HH_DAYDUTY_FROM"));
        			this.dsSave.setColumn(nrow, "MM_DAYDUTY_FROM", this.dsList.getColumn(listRow, "MM_DAYDUTY_FROM"));
        			this.dsSave.setColumn(nrow, "HH_DAYDUTY_TO", this.dsList.getColumn(listRow, "HH_DAYDUTY_TO"));
        			this.dsSave.setColumn(nrow, "MM_DAYDUTY_TO", this.dsList.getColumn(listRow, "MM_DAYDUTY_TO"));
        			this.dsSave.setColumn(nrow, "ID_SABUN", this.dsList.getColumn(listRow, "ID_SABUN"));
        			this.dsSave.setColumn(nrow, "DS_DIRECTION", this.dsList.getColumn(listRow, "DS_DIRECTION"));
        			this.dsSave.setColumn(nrow, "DS_ACTION", this.dsList.getColumn(listRow, "DS_ACTION"));
        			this.dsSave.setColumn(nrow, "DS_LIGHTS_08", this.dsList.getColumn(listRow, "DS_LIGHTS_08"));
        			this.dsSave.setColumn(nrow, "DS_LIGHTS_12", this.dsList.getColumn(listRow, "DS_LIGHTS_12"));
        			this.dsSave.setColumn(nrow, "DS_LIGHTS_15", this.dsList.getColumn(listRow, "DS_LIGHTS_15"));
        			this.dsSave.setColumn(nrow, "DS_LIGHTS_17", this.dsList.getColumn(listRow, "DS_LIGHTS_17"));
        			this.dsSave.setColumn(nrow, "DS_LIGHTS_ETC", this.dsList.getColumn(listRow, "DS_LIGHTS_ETC"));
        			this.dsSave.setColumn(nrow, "DS_FIRE_08", this.dsList.getColumn(listRow, "DS_FIRE_08"));
        			this.dsSave.setColumn(nrow, "DS_FIRE_12", this.dsList.getColumn(listRow, "DS_FIRE_12"));
        			this.dsSave.setColumn(nrow, "DS_FIRE_15", this.dsList.getColumn(listRow, "DS_FIRE_15"));
        			this.dsSave.setColumn(nrow, "DS_FIRE_17", this.dsList.getColumn(listRow, "DS_FIRE_17"));
        			this.dsSave.setColumn(nrow, "DS_FIRE_ETC", this.dsList.getColumn(listRow, "DS_FIRE_ETC"));
        			this.dsSave.setColumn(nrow, "DS_CURB_08", this.dsList.getColumn(listRow, "DS_CURB_08"));
        			this.dsSave.setColumn(nrow, "DS_CURB_12", this.dsList.getColumn(listRow, "DS_CURB_12"));
        			this.dsSave.setColumn(nrow, "DS_CURB_15", this.dsList.getColumn(listRow, "DS_CURB_15"));
        			this.dsSave.setColumn(nrow, "DS_CURB_17", this.dsList.getColumn(listRow, "DS_CURB_17"));
        			this.dsSave.setColumn(nrow, "DS_CURB_ETC", this.dsList.getColumn(listRow, "DS_CURB_ETC"));
        			this.dsSave.setColumn(nrow, "DS_ACCEPT", this.dsList.getColumn(listRow, "DS_ACCEPT"));
        			this.dsSave.setColumn(nrow, "DS_VISIT", this.dsList.getColumn(listRow, "DS_VISIT"));
        			this.dsSave.setColumn(nrow, "DS_REMARK", this.dsList.getColumn(listRow, "DS_REMARK"));
        			this.dsSave.setColumn(nrow, "ID_USER", this.AuthClient.ID_USER);
        			this.dsSave.setColumn(nrow, "GR_SEARCH", this.FormInfo.GR_SEARCH);
        			this.dsSave.setColumn(nrow, "GR_CORP", this.AuthClient.CD_CORP);
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
        			this.FlagGb = "";

        			this.FormBtns.Select.click();
        		} else {
        			this.gfnAlert(errorMsg);
        		}
        	}
        	else if (svcID == "detail") {
        		this.gfnGridAfterSelect(this.dxGridSub);


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

        	if(id == "ccfID_SABUN") {
        		if(this.gfnIsNull(this.dsSearch.getColumn(0, "CD_CORP"))){
        			this.gfnAlert("법인을 먼저 선택하세요.");
        			return false;
        		}

        		dsUserParam.setColumn(nrow, "CD_DEPT", this.AuthClient.CD_DEPT);
        		dsUserParam.setColumn(nrow, "CD_CORP", this.dsSearch.getColumn(0, "CD_CORP"));
        		dsUserParam.setColumn(nrow, "GR_SEARCH", this.FormInfo.GR_SEARCH);
        		dsUserParam.setColumn(nrow, "YN_CORP", "N");
        		dsUserParam.setColumn(nrow, "TY_RETIRE", "%");
        	}

        	return true;
        };


        this.fnAfterCDTextChanged = function(id, codeFindData) {
        	var arr = codeFindData;

        	if(id == "ccfCD_CORP"){
        		this.ccfID_SABUN.form.CDTextBox.set_value("");
        		this.ccfID_SABUN.form.DSTextBox.set_value("");
        		this.edtID_PERSON.set_value("");
        	}else if(id == "ccfID_SABUN") {
        		if(arr.length > 0) {
        			this.edtID_PERSON.set_value(arr[0]["ID_PERSON"]);
        		}else{
        			this.edtID_PERSON.set_value("");
        		}
        	}
        };


        /************************************************************************
         * 그리드 이벤트
         ************************************************************************/
        this.fnGrid_RowCellChanged = function(obj,e)
        {
            if ((obj.oldrow > -1 && obj.oldrow == e.row)
        		|| (obj.oldrow == -1 && e.oldrow != e.row)) {

        		this.fnEnableSet();
        		this.FormBtns.SubSelect.click();
        		obj.oldrow = -1;
        	}
        };



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


         this.fnGrid_EnterCell = function(obj, row, cell) {
        	// 수정가능 true, false 처리하려는 컬럼에 대해서만 return 처리할것.
        	var colnm = this.gfnGridGetBindColumnNameByIndex(this.dxGrid, cell);	// 클릭한 cell의 컬럼명

        	// 클릭했을때 클릭한 cell을 수정 가능 or 불가능 상태로 만든다.
        	// YN_EDIT 값이 Y일때만 수정가능상태
        	var flag = this.gfnGetFlag(this.dsList, this.dsList.rowposition);
        	var cdApproval = this.dsList.getColumn(this.dsList.rowposition, "CD_APPROVAL");
        	if(cdApproval == "00" || cdApproval == "01" || cdApproval == "02" || flag == "#"){
        		return false;
        	}

        }
        /************************************************************************
         * 기타 이벤트
         ************************************************************************/
        this.fnSearchInit = function(obj,e) {
        	if(e == null || (e.pretext != e.posttext)) {
        		this.gfnSetFormStatus(this);
        		this.gfnGridClear(this.dxGrid);
        		this.gfnGridClear(this.dxGridSub);
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
        	this.gfnGridClear(this.dxGridSub);
        	}
        };



        this.dsList_onvaluechanged = function(obj,e)
        {
        	if(e.oldvalue != e.newvalue)
        	{
        		this.FlagGb = "U";
        	}
        };



        // 싱글폼 활성화 or 비활성화 처리
        this.fnEnableSet = function() {

        trace("fnEnableSet====>");

        	if(this.dsList.rowcount < 1){
        		this.divData.form.divDataRight.form.btnAdd.set_enable(false);
        		this.divData.form.divDataRight.form.btnDel.set_enable(false);
        		return;
        	}

        	this.divData.form.divDataRight.form.btnAdd.set_enable(true);
        	this.divData.form.divDataRight.form.btnDel.set_enable(true);

        	var flag = this.gfnGetFlag(this.dsList, this.dsList.rowposition);
        	var cdApproval = this.dsList.getColumn(this.dsList.rowposition, "CD_APPROVAL");

        	var sYN_EDIT = this.dsList.getColumn(this.dsList.rowposition, "YN_EDIT");
        	//if(cdApproval == "00" || cdApproval == "01" || cdApproval == "02" || flag == "#"){
        	if(sYN_EDIT == "N"){
        		this.divData.form.divDataRight.form.cboHH_DAYDUTY_FROM.set_readonly(true);
        		this.divData.form.divDataRight.form.cboMM_DAYDUTY_FROM.set_readonly(true);
        		this.divData.form.divDataRight.form.cboHH_DAYDUTY_TO.set_readonly(true);
        		this.divData.form.divDataRight.form.cboMM_DAYDUTY_TO.set_readonly(true);

        		this.divData.form.divDataRight.form.txtDS_DIRECTION.set_readonly(true);
        		this.divData.form.divDataRight.form.txtDS_ACTION.set_readonly(true);

        		this.divData.form.divDataRight.form.cboDS_LIGHTS_08.set_readonly(true);
        		this.divData.form.divDataRight.form.cboDS_FIRE_08.set_readonly(true);
        		this.divData.form.divDataRight.form.cboDS_CURB_08.set_readonly(true);
        		this.divData.form.divDataRight.form.cboDS_LIGHTS_12.set_readonly(true);
        		this.divData.form.divDataRight.form.cboDS_FIRE_12.set_readonly(true);
        		this.divData.form.divDataRight.form.cboDS_CURB_12.set_readonly(true);
        		this.divData.form.divDataRight.form.cboDS_LIGHTS_15.set_readonly(true);
        		this.divData.form.divDataRight.form.cboDS_FIRE_15.set_readonly(true);
        		this.divData.form.divDataRight.form.cboDS_CURB_15.set_readonly(true);
        		this.divData.form.divDataRight.form.cboDS_LIGHTS_17.set_readonly(true);
        		this.divData.form.divDataRight.form.cboDS_FIRE_17.set_readonly(true);
        		this.divData.form.divDataRight.form.cboDS_CURB_17.set_readonly(true);
        		this.divData.form.divDataRight.form.txtDS_LIGHTS_ETC.set_readonly(true);
        		this.divData.form.divDataRight.form.txtDS_FIRE_ETC.set_readonly(true);
        		this.divData.form.divDataRight.form.txtDS_CURB_ETC.set_readonly(true);

        		this.divData.form.divDataRight.form.btnAdd.set_enable(false);
        		this.divData.form.divDataRight.form.btnDel.set_enable(false);
        		//this.dxGridSub.set_readonly(true);

        		this.divData.form.divDataRight.form.txtDS_ACCEPT.set_readonly(true);
        		this.divData.form.divDataRight.form.txtDS_VISIT.set_readonly(true);
        		this.divData.form.divDataRight.form.txtDS_REMARK.set_readonly(true);
        	}else{
        		this.divData.form.divDataRight.form.cboHH_DAYDUTY_FROM.set_readonly(false);
        		this.divData.form.divDataRight.form.cboMM_DAYDUTY_FROM.set_readonly(false);
        		this.divData.form.divDataRight.form.cboHH_DAYDUTY_TO.set_readonly(false);
        		this.divData.form.divDataRight.form.cboMM_DAYDUTY_TO.set_readonly(false);

        		this.divData.form.divDataRight.form.txtDS_DIRECTION.set_readonly(false);
        		this.divData.form.divDataRight.form.txtDS_ACTION.set_readonly(false);

        		this.divData.form.divDataRight.form.cboDS_LIGHTS_08.set_readonly(false);
        		this.divData.form.divDataRight.form.cboDS_FIRE_08.set_readonly(false);
        		this.divData.form.divDataRight.form.cboDS_CURB_08.set_readonly(false);
        		this.divData.form.divDataRight.form.cboDS_LIGHTS_12.set_readonly(false);
        		this.divData.form.divDataRight.form.cboDS_FIRE_12.set_readonly(false);
        		this.divData.form.divDataRight.form.cboDS_CURB_12.set_readonly(false);
        		this.divData.form.divDataRight.form.cboDS_LIGHTS_15.set_readonly(false);
        		this.divData.form.divDataRight.form.cboDS_FIRE_15.set_readonly(false);
        		this.divData.form.divDataRight.form.cboDS_CURB_15.set_readonly(false);
        		this.divData.form.divDataRight.form.cboDS_LIGHTS_17.set_readonly(false);
        		this.divData.form.divDataRight.form.cboDS_FIRE_17.set_readonly(false);
        		this.divData.form.divDataRight.form.cboDS_CURB_17.set_readonly(false);
        		this.divData.form.divDataRight.form.txtDS_LIGHTS_ETC.set_readonly(false);
        		this.divData.form.divDataRight.form.txtDS_FIRE_ETC.set_readonly(false);
        		this.divData.form.divDataRight.form.txtDS_CURB_ETC.set_readonly(false);

        		this.divData.form.divDataRight.form.btnAdd.set_enable(true);
        		this.divData.form.divDataRight.form.btnDel.set_enable(true);
        		//this.dxGridSub.set_readonly(false);

        		this.divData.form.divDataRight.form.txtDS_ACCEPT.set_readonly(false);
        		this.divData.form.divDataRight.form.txtDS_VISIT.set_readonly(false);
        		this.divData.form.divDataRight.form.txtDS_REMARK.set_readonly(false);
        	}
        }

        // 추가 버튼 클릭
        this.divData_divDataRight_btnAdd_onclick = function(obj,e)
        {
        	var nrow = this.gfnGridAdd(this.dxGridSub, "bottom"); // top (default), bottom, current
        };

        // 삭제 버튼 클릭
        this.divData_divDataRight_btnDel_onclick = function(obj,e)
        {
        	this.gfnGridDel(this.dxGridSub);
        };

        // 전자결재
        this.fnElctrncPmnt = function(obj,e) {
        	if(!this.gfnGridIsRow(this.dxGrid)) return;

        	var nICnt = this.dsList.findRow(this.ucFlag,"I");
        	var nUCnt = this.dsList.findRow(this.ucFlag,"U");
        	var nDCnt = this.dsList.findRow(this.ucFlag,"D");

        	if( nICnt > -1|| nUCnt > -1 || nDCnt > -1) {
        		this.gfnAlert("저장 후 처리하세요.", "");
        		return;
        	}

        	var param = {};
        	param.V1 = this.dsList.getColumn(this.dsList.rowposition, "DT_WORK");		// DT_WORK
        	param.V2 = this.dsList.getColumn(this.dsList.rowposition, "ID_PERSON");			// ID_PERSON
        	param.V3 = this.dsList.getColumn(this.dsList.rowposition, "CD_CORP");			// CD_CORP
        	param.V4 = this.dsList.getColumn(this.dsList.rowposition, "ID_SABUN");			// ID_SABUN
        	param.ID_AP = this.dsList.getColumn(this.dsList.rowposition, "NO_APPROVAL");	// 전자결재문서번호
        	param.DS_ETITLE = "당직일지";

        	this.gfnFormOpen("DAB", "DAB_DAYDUTY_APP", "fnAprvDialogCallback", param, 1200, 700);

        // 	//var url = "http://ngw.booyoung.co.kr/approval/legacy/goFormLink.do?mode=DRAFT&legacyFormID=WF_FORM_ERP_LONG_FUND";
        // 	var url = this.gfnGetConfig("DZ" , "GW_APROVAL_URL");
        // 	url += "approval/legacy/goFormLink.do?mode=DRAFT";
        // 	url += "&legacyFormID=WF_FORM_ERP_LONG_FUND";
        // 	url += "&subject="+encodeURI("장기자금계획 상신");
        // 	url += "&dataType=proc";
        // 	url += "&empno=" + this.AuthClient.ID_USER;
        // 	//url += "&empno="+this.AuthClient.ID_USER; 현재 하나의 사번만가능하여 사번 고정
        // 	url += "&P_DS_KEY1="+this.dsSearch.getColumn(0, "YM_PLAN");						// 작성년월
        // 	url += "&P_DS_KEY2="+this.dsList.getColumn(this.dsList.rowposition, "CD_CORP");	// 법인코드
        // 	url += "&P_DS_KEY3="+this.dsList.getColumn(this.dsList.rowposition, "CD_SITE");	// 작성부서
        // 	url += "&P_DS_KEY4="+this.dsList.getColumn(this.dsList.rowposition, "YN_FINAL");// 구분
        // 	url += "&P_DS_KEY5="
        //
        // 	trace("url :: " + url);
        //
        // 	window.open(url,"_blank", "width=790,height=1000,menubar=no,scrollbars=no,resizable=no,status=no");
        }

         this.fnAprvDialogCallback = function(svcID, value) {
        	// 리턴값
        	//if(value){
        		// 결재완료, 결재취소, 결재상신 후에는 재조회를 한다
        		this.FormBtns.Select.click();
        	//}
        };


        // 전자결재문서조회
        this.fnElctrncPmntDoc = function(obj,e) {
        	if(!this.gfnGridIsRow(this.dxGrid)) return;

        	var nICnt = this.dsList.findRow(this.ucFlag,"I");
        	var nUCnt = this.dsList.findRow(this.ucFlag,"U");
        	var nDCnt = this.dsList.findRow(this.ucFlag,"D");

        	if( nICnt > -1|| nUCnt > -1 || nDCnt > -1) {
        		this.gfnAlert("저장 후 처리하세요.", "");
        		return;
        	}
        	var nRow = this.dsList.rowposition;
        	if(this.gfnIsNull(this.dsList.getColumn(this.dsList.rowposition , "NO_APPROVAL"))){
        		this.gfnAlert("결재번호 정보가 존재하지 않습니다.");
        		return;
        	}

        // 	// 결재상태 0 : 결재전 시 return;
        // 	var tyAppr = this.dsList.getColumn(this.dsList.rowposition, "TY_APPR");
        // 	if ( tyAppr == "0") {
        // 		this.gfnAlert("결재상태를 확인 바랍니다.");
        // 		return;
        // 	}


        	var param = {};
        	param.V1 = this.dsList.getColumn(nRow, "DT_WORK");
        	param.V2 = this.dsList.getColumn(nRow, "ID_PERSON");
        	param.V3 = this.dsList.getColumn(nRow, "CD_CORP");
        	param.V4 = this.dsList.getColumn(nRow, "ID_SABUN");
        	param.ID_AP = this.dsList.getColumn(nRow, "NO_APPROVAL");	// 전자결재문서번호
        	param.YN_LINK = "N";	// 화면에서 팝업을 호출할경우 N, 링크를 통해서 화면을 오픈할경우 null 이다
        	//param.NO_SILHENG = "";
        	//param.CD_ELAPPRGS = this.dsList.getColumn(nRow, "ST_APPR");	// 전자결재진행상태

        	// 화면 오픈.
        	// CD_MODULE은 보통 같은 모듈에서 호출하는 경우가 많으니 this.FormInfo.CD_MODULE 사용
        	// 타 모듈 화면 호출시 지정할것.

        	this.gfnFormOpen("DAB", "DAB_DAYDUTY_APP", "fnAprvDialogCallback", param, 1200, 700);


        // 	var url = this.gfnGetConfig("DZ" , "GW_APROVAL_URL");
        // 	url += "approval/approval_Form.do?";
        // 	url +="forminstanceID="+this.dsList.getColumn(this.dsList.rowposition , "NO_APPR");
        // 	url +="&processID="+this.dsList.getColumn(this.dsList.rowposition , "NM_APPR");
        //
        // 	trace("url :: " + url);
        // 	window.open(url,"_blank", "width=790,height=1000,menubar=no,scrollbars=no,resizable=no,status=no");
        }

        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.form_onload,this);
            this.divData.addEventHandler("ondragmove",this.divData_ondragmove,this);
            this.divData.form.divSplitter.addEventHandler("ondrag",this.divData_divSplitter_ondrag,this);
            this.divData.form.divDataRight.form.txtDS_APPROVAL.addEventHandler("onkeyup",this.divData_divDataRight_onkeyup,this);
            this.divData.form.divDataRight.form.txtDS_APPROVAL.addEventHandler("onkillfocus",this.divData_divDataRight_onkillfocus,this);
            this.divData.form.divDataRight.form.txtDS_HNAME.addEventHandler("onkeyup",this.divData_divDataRight_onkeyup,this);
            this.divData.form.divDataRight.form.txtDS_HNAME.addEventHandler("onkillfocus",this.divData_divDataRight_onkillfocus,this);
            this.divData.form.divDataRight.form.txtDS_LIGHTS_ETC.addEventHandler("onkeyup",this.divData_divDataRight_onkeyup,this);
            this.divData.form.divDataRight.form.txtDS_LIGHTS_ETC.addEventHandler("onkillfocus",this.divData_divDataRight_onkillfocus,this);
            this.divData.form.divDataRight.form.txtDS_FIRE_ETC.addEventHandler("onkeyup",this.divData_divDataRight_onkeyup,this);
            this.divData.form.divDataRight.form.txtDS_FIRE_ETC.addEventHandler("onkillfocus",this.divData_divDataRight_onkillfocus,this);
            this.divData.form.divDataRight.form.txtDS_CURB_ETC.addEventHandler("onkeyup",this.divData_divDataRight_onkeyup,this);
            this.divData.form.divDataRight.form.txtDS_CURB_ETC.addEventHandler("onkillfocus",this.divData_divDataRight_onkillfocus,this);
            this.divData.form.divDataRight.form.btnDel.addEventHandler("onclick",this.divData_divDataRight_btnDel_onclick,this);
            this.divData.form.divDataRight.form.btnAdd.addEventHandler("onclick",this.divData_divDataRight_btnAdd_onclick,this);
            this.dsList.addEventHandler("onvaluechanged",this.dsList_onvaluechanged,this);
            this.dsSearch.addEventHandler("onvaluechanged",this.dsSearch_onvaluechanged,this);
            this.dsListSub.addEventHandler("onvaluechanged",this.dsList_onvaluechanged,this);
        };
        this.loadIncludeScript("DAB_DAYDUTY.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
