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
            this.set_titletext("전자결재상신");
            this.getSetter("maxwidth").set("1200");
            this.getSetter("maxheight").set("700");
            if (Form == this.constructor)
            {
                this._setFormPosition(1200,700);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("dsListMaster", this);
            obj._setContents("<ColumnInfo><Column id=\"ST_APPR\" type=\"STRING\" size=\"256\"/><Column id=\"DS_TITLE\" type=\"STRING\" size=\"256\"/><Column id=\"DS_ETITLE\" type=\"STRING\" size=\"256\"/><Column id=\"DS_HNAME\" type=\"STRING\" size=\"256\"/><Column id=\"DS_DEPT\" type=\"STRING\" size=\"256\"/><Column id=\"DT_START\" type=\"STRING\" size=\"256\"/><Column id=\"NO_DOC\" type=\"STRING\" size=\"256\"/><Column id=\"V_PARAM01\" type=\"STRING\" size=\"256\"/><Column id=\"V_PARAM02\" type=\"STRING\" size=\"256\"/><Column id=\"V_PARAM03\" type=\"STRING\" size=\"256\"/><Column id=\"V_PARAM04\" type=\"STRING\" size=\"256\"/><Column id=\"BTNAPPR\" type=\"STRING\" size=\"256\"/><Column id=\"BTNREJECT\" type=\"STRING\" size=\"256\"/><Column id=\"BTNLINES\" type=\"STRING\" size=\"256\"/><Column id=\"BTNISSUE\" type=\"STRING\" size=\"256\"/><Column id=\"BTNCANCEL\" type=\"STRING\" size=\"256\"/><Column id=\"BTNFILE\" type=\"STRING\" size=\"256\"/><Column id=\"BTNDE\" type=\"STRING\" size=\"256\"/><Column id=\"BTNRE\" type=\"STRING\" size=\"256\"/><Column id=\"BTNAC\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("_dsProc", this);
            obj._setContents("<ColumnInfo><Column id=\"TARGET\" type=\"STRING\" size=\"256\"/><Column id=\"SP\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"TARGET\">init</Col><Col id=\"SP\">DZRPR_APPROVAL_INIT</Col></Row><Row><Col id=\"TARGET\">selectmaster</Col><Col id=\"SP\">DZRPR_APPROVAL_MASTER_SELECT</Col></Row><Row><Col id=\"TARGET\">savemaster</Col><Col id=\"SP\">DZRPR_APPROVAL_MASTER_SAVE</Col></Row><Row><Col id=\"TARGET\">line1</Col><Col id=\"SP\">DZRPR_APPROVAL_LINE_SELECT</Col></Row><Row><Col id=\"TARGET\">line2</Col><Col id=\"SP\">DZRPR_APPROVAL_LINE_SELECT</Col></Row><Row><Col id=\"TARGET\">exec</Col><Col id=\"SP\">DZRPR_APPROVAL_EXECUTE</Col></Row><Row><Col id=\"TARGET\">select</Col><Col id=\"SP\">DABPR_DAYDUTY_APP_SELECT</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsSearch", this);
            obj._setContents("<ColumnInfo><Column id=\"ID_AP\" type=\"STRING\" size=\"256\"/><Column id=\"ID_AP_TYPE\" type=\"STRING\" size=\"256\"/><Column id=\"V1\" type=\"STRING\" size=\"256\"/><Column id=\"V2\" type=\"STRING\" size=\"256\"/><Column id=\"V3\" type=\"STRING\" size=\"256\"/><Column id=\"V4\" type=\"STRING\" size=\"256\"/><Column id=\"DS_ETITLE\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"ID_AP\"/><Col id=\"ID_AP_TYPE\"/><Col id=\"V1\"/><Col id=\"V2\"/><Col id=\"V3\"/><Col id=\"V4\"/><Col id=\"DS_ETITLE\"/></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsApprLines1", this);
            obj.set_useclientlayout("false");
            obj._setContents("");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsApprLines2", this);
            obj.set_useclientlayout("false");
            obj._setContents("");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsInit", this);
            obj._setContents("");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsList", this);
            obj._setContents("<ColumnInfo><Column id=\"DT_WORK\" type=\"STRING\" size=\"256\"/><Column id=\"DS_APPROVAL\" type=\"STRING\" size=\"256\"/><Column id=\"HH_DAYDUTY_FROM\" type=\"STRING\" size=\"256\"/><Column id=\"MM_DAYDUTY_FROM\" type=\"STRING\" size=\"256\"/><Column id=\"HH_DAYDUTY_TO\" type=\"STRING\" size=\"256\"/><Column id=\"MM_DAYDUTY_TO\" type=\"STRING\" size=\"256\"/><Column id=\"DS_HNAME\" type=\"STRING\" size=\"256\"/><Column id=\"DS_DIRECTION\" type=\"STRING\" size=\"256\"/><Column id=\"DS_ACTION\" type=\"STRING\" size=\"256\"/><Column id=\"DS_LIGHTS_08\" type=\"STRING\" size=\"256\"/><Column id=\"DS_FIRE_08\" type=\"STRING\" size=\"256\"/><Column id=\"DS_CURB_08\" type=\"STRING\" size=\"256\"/><Column id=\"DS_LIGHTS_12\" type=\"STRING\" size=\"256\"/><Column id=\"DS_FIRE_12\" type=\"STRING\" size=\"256\"/><Column id=\"DS_CURB_12\" type=\"STRING\" size=\"256\"/><Column id=\"DS_LIGHTS_15\" type=\"STRING\" size=\"256\"/><Column id=\"DS_FIRE_15\" type=\"STRING\" size=\"256\"/><Column id=\"DS_CURB_15\" type=\"STRING\" size=\"256\"/><Column id=\"DS_LIGHTS_17\" type=\"STRING\" size=\"256\"/><Column id=\"DS_FIRE_17\" type=\"STRING\" size=\"256\"/><Column id=\"DS_CURB_17\" type=\"STRING\" size=\"256\"/><Column id=\"DS_LIGHTS_ETC\" type=\"STRING\" size=\"256\"/><Column id=\"DS_FIRE_ETC\" type=\"STRING\" size=\"256\"/><Column id=\"DS_CURB_ETC\" type=\"STRING\" size=\"256\"/><Column id=\"DS_ACCEPT\" type=\"STRING\" size=\"256\"/><Column id=\"DS_VISIT\" type=\"STRING\" size=\"256\"/><Column id=\"DS_REMARK\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsListSub", this);
            obj._setContents("<ColumnInfo><Column id=\"CD_CORP\" type=\"STRING\" size=\"256\"/><Column id=\"DS_CORP\" type=\"STRING\" size=\"256\"/><Column id=\"DT_BASE\" type=\"STRING\" size=\"256\"/><Column id=\"TY_DEPT\" type=\"STRING\" size=\"256\"/><Column id=\"TM_SWORK\" type=\"STRING\" size=\"256\"/><Column id=\"TM_EWORK\" type=\"STRING\" size=\"256\"/><Column id=\"TM_SOBLIGATE\" type=\"STRING\" size=\"256\"/><Column id=\"TM_EOBLIGATE\" type=\"STRING\" size=\"256\"/><Column id=\"TM_BREAKWORK\" type=\"STRING\" size=\"256\"/><Column id=\"TM_WORK_DAY\" type=\"STRING\" size=\"256\"/><Column id=\"YN_OVER_MIN\" type=\"STRING\" size=\"256\"/><Column id=\"TM_OVER_MIN\" type=\"STRING\" size=\"256\"/><Column id=\"YN_OVER_MAX\" type=\"STRING\" size=\"256\"/><Column id=\"TM_OVER_MAX\" type=\"STRING\" size=\"256\"/><Column id=\"CD_DEPT\" type=\"STRING\" size=\"256\"/><Column id=\"DS_DEPT\" type=\"STRING\" size=\"256\"/><Column id=\"HH_SWORK\" type=\"STRING\" size=\"256\"/><Column id=\"MM_SWORK\" type=\"STRING\" size=\"256\"/><Column id=\"HH_EWORK\" type=\"STRING\" size=\"256\"/><Column id=\"MM_EWORK\" type=\"STRING\" size=\"256\"/><Column id=\"HH_SOBLIGATE\" type=\"STRING\" size=\"256\"/><Column id=\"MM_SOBLIGATE\" type=\"STRING\" size=\"256\"/><Column id=\"HH_EOBLIGATE\" type=\"STRING\" size=\"256\"/><Column id=\"MM_EOBLIGATE\" type=\"STRING\" size=\"256\"/><Column id=\"HH_BREAKWORK\" type=\"STRING\" size=\"256\"/><Column id=\"MM_BREAKWORK\" type=\"STRING\" size=\"256\"/><Column id=\"HH_OVER_MIN\" type=\"STRING\" size=\"256\"/><Column id=\"MM_OVER_MIN\" type=\"STRING\" size=\"256\"/><Column id=\"HH_OVER_MAX\" type=\"STRING\" size=\"256\"/><Column id=\"MM_OVER_MAX\" type=\"STRING\" size=\"256\"/><Column id=\"YN_SATURDAY\" type=\"STRING\" size=\"256\"/><Column id=\"HH_SATSTART\" type=\"STRING\" size=\"256\"/><Column id=\"MM_SATSTART\" type=\"STRING\" size=\"256\"/><Column id=\"HH_SATEND\" type=\"STRING\" size=\"256\"/><Column id=\"MM_SATEND\" type=\"STRING\" size=\"256\"/><Column id=\"HH_SATBREAK\" type=\"STRING\" size=\"256\"/><Column id=\"MM_SATBREAK\" type=\"STRING\" size=\"256\"/><Column id=\"TM_SATWORK\" type=\"STRING\" size=\"256\"/><Column id=\"DS_REMARK\" type=\"STRING\" size=\"256\"/><Column id=\"YN_DELETE\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsHH", this);
            obj._setContents("<ColumnInfo><Column id=\"CD_CODE\" type=\"STRING\" size=\"256\"/><Column id=\"DS_CODE\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"CD_CODE\">00</Col><Col id=\"DS_CODE\">00</Col></Row><Row><Col id=\"CD_CODE\">01</Col><Col id=\"DS_CODE\">01</Col></Row><Row><Col id=\"CD_CODE\">02</Col><Col id=\"DS_CODE\">02</Col></Row><Row><Col id=\"CD_CODE\">03</Col><Col id=\"DS_CODE\">03</Col></Row><Row><Col id=\"CD_CODE\">04</Col><Col id=\"DS_CODE\">04</Col></Row><Row><Col id=\"CD_CODE\">05</Col><Col id=\"DS_CODE\">05</Col></Row><Row><Col id=\"CD_CODE\">06</Col><Col id=\"DS_CODE\">06</Col></Row><Row><Col id=\"CD_CODE\">07</Col><Col id=\"DS_CODE\">07</Col></Row><Row><Col id=\"CD_CODE\">08</Col><Col id=\"DS_CODE\">08</Col></Row><Row><Col id=\"CD_CODE\">09</Col><Col id=\"DS_CODE\">09</Col></Row><Row><Col id=\"CD_CODE\">10</Col><Col id=\"DS_CODE\">10</Col></Row><Row><Col id=\"CD_CODE\">11</Col><Col id=\"DS_CODE\">11</Col></Row><Row><Col id=\"CD_CODE\">12</Col><Col id=\"DS_CODE\">12</Col></Row><Row><Col id=\"CD_CODE\">13</Col><Col id=\"DS_CODE\">13</Col></Row><Row><Col id=\"CD_CODE\">14</Col><Col id=\"DS_CODE\">14</Col></Row><Row><Col id=\"CD_CODE\">15</Col><Col id=\"DS_CODE\">15</Col></Row><Row><Col id=\"CD_CODE\">16</Col><Col id=\"DS_CODE\">16</Col></Row><Row><Col id=\"CD_CODE\">17</Col><Col id=\"DS_CODE\">17</Col></Row><Row><Col id=\"CD_CODE\">18</Col><Col id=\"DS_CODE\">18</Col></Row><Row><Col id=\"CD_CODE\">19</Col><Col id=\"DS_CODE\">19</Col></Row><Row><Col id=\"CD_CODE\">20</Col><Col id=\"DS_CODE\">20</Col></Row><Row><Col id=\"CD_CODE\">21</Col><Col id=\"DS_CODE\">21</Col></Row><Row><Col id=\"CD_CODE\">22</Col><Col id=\"DS_CODE\">22</Col></Row><Row><Col id=\"CD_CODE\">23</Col><Col id=\"DS_CODE\">23</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsMM", this);
            obj._setContents("<ColumnInfo><Column id=\"CD_CODE\" type=\"STRING\" size=\"256\"/><Column id=\"DS_CODE\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"CD_CODE\">00</Col><Col id=\"DS_CODE\">00</Col></Row><Row><Col id=\"CD_CODE\">10</Col><Col id=\"DS_CODE\">10</Col></Row><Row><Col id=\"CD_CODE\">20</Col><Col id=\"DS_CODE\">20</Col></Row><Row><Col id=\"CD_CODE\">30</Col><Col id=\"DS_CODE\">30</Col></Row><Row><Col id=\"CD_CODE\">40</Col><Col id=\"DS_CODE\">40</Col></Row><Row><Col id=\"CD_CODE\">50</Col><Col id=\"DS_CODE\">50</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsOX", this);
            obj._setContents("<ColumnInfo><Column id=\"CD_CODE\" type=\"STRING\" size=\"256\"/><Column id=\"DS_CODE\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"CD_CODE\">○</Col><Col id=\"DS_CODE\">○</Col></Row><Row><Col id=\"CD_CODE\">X</Col><Col id=\"DS_CODE\">X</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsListPrint", this);
            obj._setContents("<ColumnInfo><Column id=\"TY_AUTOSLIP\" type=\"STRING\" size=\"256\"/><Column id=\"CD_TRADE\" type=\"STRING\" size=\"256\"/><Column id=\"DS_AUTOSLIP\" type=\"STRING\" size=\"256\"/><Column id=\"CD_SLIP_MI\" type=\"STRING\" size=\"256\"/><Column id=\"DS_DEPT_ACNT\" type=\"STRING\" size=\"256\"/><Column id=\"CD_ACCOUNT\" type=\"STRING\" size=\"256\"/><Column id=\"DS_ACCOUNT\" type=\"STRING\" size=\"256\"/><Column id=\"DS_PROOF\" type=\"STRING\" size=\"256\"/><Column id=\"DT_ACCOUNT\" type=\"STRING\" size=\"256\"/><Column id=\"AM_CR\" type=\"INT\" size=\"256\"/><Column id=\"AM_DR\" type=\"INT\" size=\"256\"/><Column id=\"DS_REM\" type=\"STRING\" size=\"256\"/><Column id=\"NO_REF\" type=\"STRING\" size=\"256\"/><Column id=\"DT_REF1\" type=\"STRING\" size=\"256\"/><Column id=\"DS_ETC\" type=\"STRING\" size=\"256\"/><Column id=\"CD_SLIP\" type=\"STRING\" size=\"256\"/><Column id=\"CD_REF1\" type=\"STRING\" size=\"256\"/><Column id=\"ISSUE_ID\" type=\"STRING\" size=\"256\"/><Column id=\"TY_ISSUE\" type=\"STRING\" size=\"256\"/><Column id=\"DS_DEPT_BE\" type=\"STRING\" size=\"256\"/><Column id=\"CD_DEPT_BE\" type=\"STRING\" size=\"256\"/><Column id=\"DS_REFDT1\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsListSubPrint", this);
            obj._setContents("");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Div("divData1","0","0",null,"700","0",null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_cssclass("div_DATA_Bg");
            obj.set_text("");
            obj.set_formscrolltype("vertical");
            this.addChild(obj.name, obj);

            obj = new Div("divDataApprTitle","0","0",null,"40","0",null,null,null,null,null,this.divData1.form);
            obj.set_taborder("0");
            obj.set_background("");
            this.divData1.addChild(obj.name, obj);

            obj = new Static("staApprNm","0","0",null,null,"0","0",null,null,null,null,this.divData1.form.divDataApprTitle.form);
            obj.set_taborder("0");
            obj.set_text("전자결재 SAMPLE");
            obj.set_font("normal 20pt/normal \"Arial\"");
            obj.set_textAlign("center");
            obj.set_cssclass("sta_WF_tablelabelE");
            this.divData1.form.divDataApprTitle.addChild(obj.name, obj);

            obj = new Div("divDataApprLine","0","divDataApprTitle:10",null,"80","0",null,null,null,null,null,this.divData1.form);
            obj.set_taborder("1");
            this.divData1.addChild(obj.name, obj);

            obj = new Static("sta01","0","0","50",null,null,"0",null,null,null,null,this.divData1.form.divDataApprLine.form);
            obj.set_taborder("0");
            obj.set_text("결재");
            obj.set_cssclass("sta_WF_tablelabel");
            obj.set_textAlign("center");
            this.divData1.form.divDataApprLine.addChild(obj.name, obj);

            obj = new Grid("objGridAppr1","sta01:-1","0",null,null,"50.5%","0",null,null,null,null,this.divData1.form.divDataApprLine.form);
            obj.set_taborder("1");
            obj._setContents("");
            this.divData1.form.divDataApprLine.addChild(obj.name, obj);

            obj = new Static("sta02","objGridAppr1:10","0","50",null,null,"0",null,null,null,null,this.divData1.form.divDataApprLine.form);
            obj.set_taborder("2");
            obj.set_text("합의");
            obj.set_cssclass("sta_WF_tablelabel");
            obj.set_textAlign("center");
            this.divData1.form.divDataApprLine.addChild(obj.name, obj);

            obj = new Grid("objGridAppr2","sta02:-1","0",null,null,"0","0",null,null,null,null,this.divData1.form.divDataApprLine.form);
            obj.set_taborder("3");
            obj._setContents("");
            this.divData1.form.divDataApprLine.addChild(obj.name, obj);

            obj = new Div("divDataMaster","0","divDataApprLine:10",null,"60","0",null,null,null,null,null,this.divData1.form);
            obj.set_taborder("2");
            obj.set_text("");
            this.divData1.addChild(obj.name, obj);

            obj = new Static("sta01","0","0","150","30",null,null,null,null,null,null,this.divData1.form.divDataMaster.form);
            obj.set_taborder("0");
            obj.set_text("기안자");
            obj.set_cssclass("sta_WF_tablelabel");
            obj.set_textAlign("center");
            this.divData1.form.divDataMaster.addChild(obj.name, obj);

            obj = new Static("sta02","sta01:-1","0","270","30",null,null,null,null,null,null,this.divData1.form.divDataMaster.form);
            obj.set_taborder("1");
            obj.set_cssclass("sta_WF_tablebg");
            this.divData1.form.divDataMaster.addChild(obj.name, obj);

            obj = new Static("sta00","sta02:-1","0","150","30",null,null,null,null,null,null,this.divData1.form.divDataMaster.form);
            obj.set_taborder("2");
            obj.set_text("기안부서");
            obj.set_cssclass("sta_WF_tablelabel");
            obj.set_textAlign("center");
            this.divData1.form.divDataMaster.addChild(obj.name, obj);

            obj = new Static("sta03","sta00:-1","0","270","30",null,null,null,null,null,null,this.divData1.form.divDataMaster.form);
            obj.set_taborder("3");
            obj.set_cssclass("sta_WF_tablebg");
            this.divData1.form.divDataMaster.addChild(obj.name, obj);

            obj = new Static("sta04","sta03:-1","0","150","30",null,null,null,null,null,null,this.divData1.form.divDataMaster.form);
            obj.set_taborder("4");
            obj.set_text("기안일자");
            obj.set_cssclass("sta_WF_tablelabel");
            obj.set_textAlign("center");
            this.divData1.form.divDataMaster.addChild(obj.name, obj);

            obj = new Static("sta05","sta04:-1","0",null,"30","0",null,null,null,null,null,this.divData1.form.divDataMaster.form);
            obj.set_taborder("5");
            obj.set_cssclass("sta_WF_tablebg");
            this.divData1.form.divDataMaster.addChild(obj.name, obj);

            obj = new Static("sta06","0","sta01:-1","150","30",null,null,null,null,null,null,this.divData1.form.divDataMaster.form);
            obj.set_taborder("6");
            obj.set_text("제목");
            obj.set_cssclass("sta_WF_tablelabel");
            obj.set_textAlign("center");
            this.divData1.form.divDataMaster.addChild(obj.name, obj);

            obj = new Static("sta07","sta06:-1","sta02:-1","688","30",null,null,null,null,null,null,this.divData1.form.divDataMaster.form);
            obj.set_taborder("7");
            obj.set_cssclass("sta_WF_tablebg");
            this.divData1.form.divDataMaster.addChild(obj.name, obj);

            obj = new Static("sta08","sta07:-1","sta04:-1","150","30",null,null,null,null,null,null,this.divData1.form.divDataMaster.form);
            obj.set_taborder("8");
            obj.set_text("문서번호");
            obj.set_cssclass("sta_WF_tablelabel");
            obj.set_textAlign("center");
            this.divData1.form.divDataMaster.addChild(obj.name, obj);

            obj = new Static("sta09","sta08:-1","sta05:-1",null,"30","0",null,null,null,null,null,this.divData1.form.divDataMaster.form);
            obj.set_taborder("9");
            obj.set_cssclass("sta_WF_tablebg");
            this.divData1.form.divDataMaster.addChild(obj.name, obj);

            obj = new Edit("txtDS_ETITLE","sta06:0","sta07:-25","671","20",null,null,null,null,null,null,this.divData1.form.divDataMaster.form);
            obj.set_taborder("10");
            obj.set_readonly("true");
            obj.set_border("0px none");
            obj.set_background("#ffffff");
            this.divData1.form.divDataMaster.addChild(obj.name, obj);

            obj = new Div("divDataRight","0","210",null,"992","0",null,null,null,null,null,this.divData1.form);
            obj.set_taborder("3");
            obj.set_formscrolltype("none");
            this.divData1.addChild(obj.name, obj);

            obj = new Static("sta30","0","0","120","30",null,null,null,null,null,null,this.divData1.form.divDataRight.form);
            obj.set_taborder("0");
            obj.set_text("당직일자");
            obj.set_cssclass("sta_WF_tablelabel");
            obj.set_textDecoration("none");
            this.divData1.form.divDataRight.addChild(obj.name, obj);

            obj = new Static("sta00","119","29",null,"30","0",null,null,null,null,null,this.divData1.form.divDataRight.form);
            obj.set_taborder("1");
            obj.set_cssclass("sta_WF_tablebg");
            this.divData1.form.divDataRight.addChild(obj.name, obj);

            obj = new Static("sta35","119","0","255","30",null,null,null,null,null,null,this.divData1.form.divDataRight.form);
            obj.set_taborder("2");
            obj.set_cssclass("sta_WF_tablebg");
            this.divData1.form.divDataRight.addChild(obj.name, obj);

            obj = new Static("sta02","0","29","120","30",null,null,null,null,null,null,this.divData1.form.divDataRight.form);
            obj.set_taborder("3");
            obj.set_text("당직시간");
            obj.set_cssclass("sta_WF_tablelabel");
            obj.set_textDecoration("none");
            this.divData1.form.divDataRight.addChild(obj.name, obj);

            obj = new Static("sta01","119","58",null,"30","0",null,null,null,null,null,this.divData1.form.divDataRight.form);
            obj.set_taborder("4");
            obj.set_cssclass("sta_WF_tablebg");
            this.divData1.form.divDataRight.addChild(obj.name, obj);

            obj = new Static("sta03","0","58","120","30",null,null,null,null,null,null,this.divData1.form.divDataRight.form);
            obj.set_taborder("5");
            obj.set_text("당직자");
            obj.set_cssclass("sta_WF_tablelabel");
            obj.set_textDecoration("none");
            this.divData1.form.divDataRight.addChild(obj.name, obj);

            obj = new Calendar("ctclDT_WORK","124","5","105","20",null,null,null,null,null,null,this.divData1.form.divDataRight.form);
            obj.set_taborder("6");
            obj.set_dateformat("yyyy-MM-dd");
            obj.set_editformat("yyyyMMdd");
            obj.set_autoselect("true");
            obj.set_enable("true");
            obj.set_readonly("true");
            this.divData1.form.divDataRight.addChild(obj.name, obj);

            obj = new Static("staTO_EDUCATION00","234","34","10","20",null,null,null,null,null,null,this.divData1.form.divDataRight.form);
            obj.set_taborder("9");
            obj.set_text("~");
            this.divData1.form.divDataRight.addChild(obj.name, obj);

            obj = new Combo("cboHH_DAYDUTY_TO","249","34","50","20",null,null,null,null,null,null,this.divData1.form.divDataRight.form);
            obj.set_taborder("10");
            obj.set_datacolumn("DS_CODE");
            obj.set_codecolumn("CD_CODE");
            obj.set_innerdataset("dsHH");
            obj.set_readonly("true");
            obj.set_text("");
            obj.set_value("");
            obj.set_index("0");
            this.divData1.form.divDataRight.addChild(obj.name, obj);

            obj = new Combo("cboMM_DAYDUTY_TO","304","34","50","20",null,null,null,null,null,null,this.divData1.form.divDataRight.form);
            obj.set_taborder("11");
            obj.set_datacolumn("DS_CODE");
            obj.set_codecolumn("CD_CODE");
            obj.set_innerdataset("dsMM");
            obj.set_readonly("true");
            obj.set_text("");
            obj.set_value("");
            obj.set_index("0");
            this.divData1.form.divDataRight.addChild(obj.name, obj);

            obj = new Combo("cboMM_DAYDUTY_FROM","179","34","50","20",null,null,null,null,null,null,this.divData1.form.divDataRight.form);
            obj.set_taborder("12");
            obj.set_datacolumn("DS_CODE");
            obj.set_codecolumn("CD_CODE");
            obj.set_innerdataset("dsMM");
            obj.set_readonly("true");
            obj.set_text("");
            obj.set_value("");
            obj.set_index("0");
            this.divData1.form.divDataRight.addChild(obj.name, obj);

            obj = new Combo("cboHH_DAYDUTY_FROM","124","34","50","20",null,null,null,null,null,null,this.divData1.form.divDataRight.form);
            obj.set_taborder("13");
            obj.set_datacolumn("DS_CODE");
            obj.set_codecolumn("CD_CODE");
            obj.set_innerdataset("dsHH");
            obj.set_readonly("true");
            obj.set_text("");
            obj.set_value("");
            obj.set_index("0");
            this.divData1.form.divDataRight.addChild(obj.name, obj);

            obj = new Static("sta31","492","0",null,"30","0",null,null,null,null,null,this.divData1.form.divDataRight.form);
            obj.set_taborder("14");
            obj.set_cssclass("sta_WF_tablebg");
            this.divData1.form.divDataRight.addChild(obj.name, obj);

            obj = new Static("sta32","373","0","120","30",null,null,null,null,null,null,this.divData1.form.divDataRight.form);
            obj.set_taborder("15");
            obj.set_text("결재상태 ");
            obj.set_cssclass("sta_WF_tablelabel");
            obj.set_textDecoration("none");
            this.divData1.form.divDataRight.addChild(obj.name, obj);

            obj = new Edit("txtDS_APPROVAL","497","5",null,"20","5",null,null,null,null,null,this.divData1.form.divDataRight.form);
            obj.set_taborder("16");
            obj.set_enable("true");
            obj.set_readonly("true");
            this.divData1.form.divDataRight.addChild(obj.name, obj);

            obj = new Edit("txtDS_HNAME","124","63",null,"20","5",null,null,null,null,null,this.divData1.form.divDataRight.form);
            obj.set_taborder("17");
            obj.set_enable("true");
            obj.set_readonly("true");
            this.divData1.form.divDataRight.addChild(obj.name, obj);

            obj = new Static("staTITLE","0","100","44.55%","22",null,null,null,null,null,null,this.divData1.form.divDataRight.form);
            obj.set_taborder("18");
            obj.set_text("지시 또는 전달사항");
            obj.set_cssclass("sta_TITLE_Bg");
            obj.set_textAlign("left");
            this.divData1.form.divDataRight.addChild(obj.name, obj);

            obj = new Static("sta26","0","125",null,"71","0",null,null,null,null,null,this.divData1.form.divDataRight.form);
            obj.set_taborder("7");
            obj.set_cssclass("sta_WF_tablebg");
            this.divData1.form.divDataRight.addChild(obj.name, obj);

            obj = new TextArea("txtDS_DIRECTION","5","130",null,"61","5",null,null,null,null,null,this.divData1.form.divDataRight.form);
            obj.set_taborder("8");
            obj.set_readonly("true");
            this.divData1.form.divDataRight.addChild(obj.name, obj);

            obj = new Static("sta04","0","235",null,"71","0",null,null,null,null,null,this.divData1.form.divDataRight.form);
            obj.set_taborder("19");
            obj.set_cssclass("sta_WF_tablebg");
            this.divData1.form.divDataRight.addChild(obj.name, obj);

            obj = new TextArea("txtDS_ACTION","5","240",null,"61","5",null,null,null,null,null,this.divData1.form.divDataRight.form);
            obj.set_taborder("20");
            obj.set_readonly("true");
            this.divData1.form.divDataRight.addChild(obj.name, obj);

            obj = new Static("staTITLE00","0","210","44.55%","22",null,null,null,null,null,null,this.divData1.form.divDataRight.form);
            obj.set_taborder("21");
            obj.set_text("조치사항");
            obj.set_cssclass("sta_TITLE_Bg");
            obj.set_textAlign("left");
            this.divData1.form.divDataRight.addChild(obj.name, obj);

            obj = new Static("sta05","0","348","120","67",null,null,null,null,null,null,this.divData1.form.divDataRight.form);
            obj.set_taborder("22");
            obj.set_text("점검요소");
            obj.set_cssclass("sta_WF_tablelabel");
            obj.set_textDecoration("none");
            obj.set_textAlign("center");
            this.divData1.form.divDataRight.addChild(obj.name, obj);

            obj = new Static("staTITLE01","0","320","44.55%","22",null,null,null,null,null,null,this.divData1.form.divDataRight.form);
            obj.set_taborder("23");
            obj.set_text("안전점검");
            obj.set_cssclass("sta_TITLE_Bg");
            obj.set_textAlign("left");
            this.divData1.form.divDataRight.addChild(obj.name, obj);

            obj = new Static("sta06","119","348","513","38",null,null,null,null,null,null,this.divData1.form.divDataRight.form);
            obj.set_taborder("24");
            obj.set_text("점검결과\r\n( 이상 無 O / 이상 有 X 표시 )");
            obj.set_cssclass("sta_WF_tablelabel");
            obj.set_textDecoration("none");
            obj.set_textAlign("center");
            this.divData1.form.divDataRight.addChild(obj.name, obj);

            obj = new Static("sta07","631","348",null,"67","0",null,null,null,null,null,this.divData1.form.divDataRight.form);
            obj.set_taborder("25");
            obj.set_text("특이사항");
            obj.set_cssclass("sta_WF_tablelabel");
            obj.set_textDecoration("none");
            obj.set_textAlign("center");
            this.divData1.form.divDataRight.addChild(obj.name, obj);

            obj = new Static("sta08","0","414","120","30",null,null,null,null,null,null,this.divData1.form.divDataRight.form);
            obj.set_taborder("26");
            obj.set_text("소등상태");
            obj.set_cssclass("sta_WF_tablelabel");
            obj.set_textDecoration("none");
            obj.set_textAlign("center");
            this.divData1.form.divDataRight.addChild(obj.name, obj);

            obj = new Static("sta10","119","385","128","30",null,null,null,null,null,null,this.divData1.form.divDataRight.form);
            obj.set_taborder("27");
            obj.set_text("8시");
            obj.set_cssclass("sta_WF_tablelabel");
            obj.set_textDecoration("none");
            obj.set_textAlign("center");
            this.divData1.form.divDataRight.addChild(obj.name, obj);

            obj = new Static("sta11","246","385","128","30",null,null,null,null,null,null,this.divData1.form.divDataRight.form);
            obj.set_taborder("28");
            obj.set_text("12시");
            obj.set_cssclass("sta_WF_tablelabel");
            obj.set_textDecoration("none");
            obj.set_textAlign("center");
            this.divData1.form.divDataRight.addChild(obj.name, obj);

            obj = new Static("sta12","373","385","128","30",null,null,null,null,null,null,this.divData1.form.divDataRight.form);
            obj.set_taborder("29");
            obj.set_text("15시");
            obj.set_cssclass("sta_WF_tablelabel");
            obj.set_textDecoration("none");
            obj.set_textAlign("center");
            this.divData1.form.divDataRight.addChild(obj.name, obj);

            obj = new Static("sta13","500","385","132","30",null,null,null,null,null,null,this.divData1.form.divDataRight.form);
            obj.set_taborder("30");
            obj.set_text("17시");
            obj.set_cssclass("sta_WF_tablelabel");
            obj.set_textDecoration("none");
            obj.set_textAlign("center");
            this.divData1.form.divDataRight.addChild(obj.name, obj);

            obj = new Static("sta14","119","414","128","30",null,null,null,null,null,null,this.divData1.form.divDataRight.form);
            obj.set_taborder("31");
            obj.set_cssclass("sta_WF_tablebg");
            this.divData1.form.divDataRight.addChild(obj.name, obj);

            obj = new Static("sta15","246","414","128","30",null,null,null,null,null,null,this.divData1.form.divDataRight.form);
            obj.set_taborder("32");
            obj.set_cssclass("sta_WF_tablebg");
            this.divData1.form.divDataRight.addChild(obj.name, obj);

            obj = new Static("sta16","373","414","128","30",null,null,null,null,null,null,this.divData1.form.divDataRight.form);
            obj.set_taborder("33");
            obj.set_cssclass("sta_WF_tablebg");
            this.divData1.form.divDataRight.addChild(obj.name, obj);

            obj = new Static("sta17","500","414","132","30",null,null,null,null,null,null,this.divData1.form.divDataRight.form);
            obj.set_taborder("34");
            obj.set_cssclass("sta_WF_tablebg");
            this.divData1.form.divDataRight.addChild(obj.name, obj);

            obj = new Static("sta18","631","414",null,"30","0",null,null,null,null,null,this.divData1.form.divDataRight.form);
            obj.set_taborder("35");
            obj.set_cssclass("sta_WF_tablebg");
            this.divData1.form.divDataRight.addChild(obj.name, obj);

            obj = new Combo("cboDS_LIGHTS_08","124","419","118","20",null,null,null,null,null,null,this.divData1.form.divDataRight.form);
            obj.set_taborder("36");
            obj.set_datacolumn("DS_CODE");
            obj.set_codecolumn("CD_CODE");
            obj.set_innerdataset("dsOX");
            obj.set_readonly("true");
            obj.set_text("");
            obj.set_value("");
            obj.set_index("0");
            this.divData1.form.divDataRight.addChild(obj.name, obj);

            obj = new Combo("cboDS_LIGHTS_12","251","419","118","20",null,null,null,null,null,null,this.divData1.form.divDataRight.form);
            obj.set_taborder("37");
            obj.set_datacolumn("DS_CODE");
            obj.set_codecolumn("CD_CODE");
            obj.set_innerdataset("dsOX");
            obj.set_readonly("true");
            obj.set_text("");
            obj.set_value("");
            obj.set_index("0");
            this.divData1.form.divDataRight.addChild(obj.name, obj);

            obj = new Combo("cboDS_LIGHTS_15","378","419","118","20",null,null,null,null,null,null,this.divData1.form.divDataRight.form);
            obj.set_taborder("38");
            obj.set_datacolumn("DS_CODE");
            obj.set_codecolumn("CD_CODE");
            obj.set_innerdataset("dsOX");
            obj.set_readonly("true");
            obj.set_text("");
            obj.set_value("");
            obj.set_index("0");
            this.divData1.form.divDataRight.addChild(obj.name, obj);

            obj = new Combo("cboDS_LIGHTS_17","505","419","122","20",null,null,null,null,null,null,this.divData1.form.divDataRight.form);
            obj.set_taborder("39");
            obj.set_datacolumn("DS_CODE");
            obj.set_codecolumn("CD_CODE");
            obj.set_innerdataset("dsOX");
            obj.set_readonly("true");
            obj.set_text("");
            obj.set_value("");
            obj.set_index("0");
            this.divData1.form.divDataRight.addChild(obj.name, obj);

            obj = new Edit("txtDS_LIGHTS_ETC","635","419",null,"20","5",null,null,null,null,null,this.divData1.form.divDataRight.form);
            obj.set_taborder("40");
            obj.set_enable("true");
            obj.set_readonly("true");
            this.divData1.form.divDataRight.addChild(obj.name, obj);

            obj = new Static("sta09","500","443","132","30",null,null,null,null,null,null,this.divData1.form.divDataRight.form);
            obj.set_taborder("41");
            obj.set_cssclass("sta_WF_tablebg");
            this.divData1.form.divDataRight.addChild(obj.name, obj);

            obj = new Static("sta19","373","443","128","30",null,null,null,null,null,null,this.divData1.form.divDataRight.form);
            obj.set_taborder("42");
            obj.set_cssclass("sta_WF_tablebg");
            this.divData1.form.divDataRight.addChild(obj.name, obj);

            obj = new Static("sta20","246","443","128","30",null,null,null,null,null,null,this.divData1.form.divDataRight.form);
            obj.set_taborder("43");
            obj.set_cssclass("sta_WF_tablebg");
            this.divData1.form.divDataRight.addChild(obj.name, obj);

            obj = new Static("sta21","119","443","128","30",null,null,null,null,null,null,this.divData1.form.divDataRight.form);
            obj.set_taborder("44");
            obj.set_cssclass("sta_WF_tablebg");
            this.divData1.form.divDataRight.addChild(obj.name, obj);

            obj = new Static("sta22","0","443","120","30",null,null,null,null,null,null,this.divData1.form.divDataRight.form);
            obj.set_taborder("45");
            obj.set_text("소방상태");
            obj.set_cssclass("sta_WF_tablelabel");
            obj.set_textDecoration("none");
            obj.set_textAlign("center");
            this.divData1.form.divDataRight.addChild(obj.name, obj);

            obj = new Combo("cboDS_FIRE_08","124","448","118","20",null,null,null,null,null,null,this.divData1.form.divDataRight.form);
            obj.set_taborder("46");
            obj.set_datacolumn("DS_CODE");
            obj.set_codecolumn("CD_CODE");
            obj.set_innerdataset("dsOX");
            obj.set_readonly("true");
            obj.set_text("");
            obj.set_value("");
            obj.set_index("0");
            this.divData1.form.divDataRight.addChild(obj.name, obj);

            obj = new Combo("cboDS_FIRE_12","251","448","118","20",null,null,null,null,null,null,this.divData1.form.divDataRight.form);
            obj.set_taborder("47");
            obj.set_datacolumn("DS_CODE");
            obj.set_codecolumn("CD_CODE");
            obj.set_innerdataset("dsOX");
            obj.set_readonly("true");
            obj.set_text("");
            obj.set_value("");
            obj.set_index("0");
            this.divData1.form.divDataRight.addChild(obj.name, obj);

            obj = new Combo("cboDS_FIRE_15","378","448","118","20",null,null,null,null,null,null,this.divData1.form.divDataRight.form);
            obj.set_taborder("48");
            obj.set_datacolumn("DS_CODE");
            obj.set_codecolumn("CD_CODE");
            obj.set_innerdataset("dsOX");
            obj.set_readonly("true");
            obj.set_text("");
            obj.set_value("");
            obj.set_index("0");
            this.divData1.form.divDataRight.addChild(obj.name, obj);

            obj = new Combo("cboDS_FIRE_17","505","448","122","20",null,null,null,null,null,null,this.divData1.form.divDataRight.form);
            obj.set_taborder("49");
            obj.set_datacolumn("DS_CODE");
            obj.set_codecolumn("CD_CODE");
            obj.set_innerdataset("dsOX");
            obj.set_readonly("true");
            obj.set_text("");
            obj.set_value("");
            obj.set_index("0");
            this.divData1.form.divDataRight.addChild(obj.name, obj);

            obj = new Static("sta23","631","443",null,"30","0",null,null,null,null,null,this.divData1.form.divDataRight.form);
            obj.set_taborder("50");
            obj.set_cssclass("sta_WF_tablebg");
            this.divData1.form.divDataRight.addChild(obj.name, obj);

            obj = new Edit("txtDS_FIRE_ETC","635","448",null,"20","5",null,null,null,null,null,this.divData1.form.divDataRight.form);
            obj.set_taborder("51");
            obj.set_enable("true");
            obj.set_readonly("true");
            this.divData1.form.divDataRight.addChild(obj.name, obj);

            obj = new Static("sta24","500","472","132","30",null,null,null,null,null,null,this.divData1.form.divDataRight.form);
            obj.set_taborder("52");
            obj.set_cssclass("sta_WF_tablebg");
            this.divData1.form.divDataRight.addChild(obj.name, obj);

            obj = new Static("sta25","373","472","128","30",null,null,null,null,null,null,this.divData1.form.divDataRight.form);
            obj.set_taborder("53");
            obj.set_cssclass("sta_WF_tablebg");
            this.divData1.form.divDataRight.addChild(obj.name, obj);

            obj = new Static("sta27","246","472","128","30",null,null,null,null,null,null,this.divData1.form.divDataRight.form);
            obj.set_taborder("54");
            obj.set_cssclass("sta_WF_tablebg");
            this.divData1.form.divDataRight.addChild(obj.name, obj);

            obj = new Static("sta28","119","472","128","30",null,null,null,null,null,null,this.divData1.form.divDataRight.form);
            obj.set_taborder("55");
            obj.set_cssclass("sta_WF_tablebg");
            this.divData1.form.divDataRight.addChild(obj.name, obj);

            obj = new Static("sta29","0","472","120","30",null,null,null,null,null,null,this.divData1.form.divDataRight.form);
            obj.set_taborder("56");
            obj.set_text("단속상태");
            obj.set_cssclass("sta_WF_tablelabel");
            obj.set_textDecoration("none");
            obj.set_textAlign("center");
            this.divData1.form.divDataRight.addChild(obj.name, obj);

            obj = new Combo("cboDS_CURB_08","124","477","118","20",null,null,null,null,null,null,this.divData1.form.divDataRight.form);
            obj.set_taborder("57");
            obj.set_datacolumn("DS_CODE");
            obj.set_codecolumn("CD_CODE");
            obj.set_innerdataset("dsOX");
            obj.set_readonly("true");
            obj.set_text("");
            obj.set_value("");
            obj.set_index("0");
            this.divData1.form.divDataRight.addChild(obj.name, obj);

            obj = new Combo("cboDS_CURB_12","251","477","118","20",null,null,null,null,null,null,this.divData1.form.divDataRight.form);
            obj.set_taborder("58");
            obj.set_datacolumn("DS_CODE");
            obj.set_codecolumn("CD_CODE");
            obj.set_innerdataset("dsOX");
            obj.set_readonly("true");
            obj.set_text("");
            obj.set_value("");
            obj.set_index("0");
            this.divData1.form.divDataRight.addChild(obj.name, obj);

            obj = new Combo("cboDS_CURB_15","378","477","118","20",null,null,null,null,null,null,this.divData1.form.divDataRight.form);
            obj.set_taborder("59");
            obj.set_datacolumn("DS_CODE");
            obj.set_codecolumn("CD_CODE");
            obj.set_innerdataset("dsOX");
            obj.set_readonly("true");
            obj.set_text("");
            obj.set_value("");
            obj.set_index("0");
            this.divData1.form.divDataRight.addChild(obj.name, obj);

            obj = new Combo("cboDS_CURB_17","505","477","122","20",null,null,null,null,null,null,this.divData1.form.divDataRight.form);
            obj.set_taborder("60");
            obj.set_datacolumn("DS_CODE");
            obj.set_codecolumn("CD_CODE");
            obj.set_innerdataset("dsOX");
            obj.set_readonly("true");
            obj.set_text("");
            obj.set_value("");
            obj.set_index("0");
            this.divData1.form.divDataRight.addChild(obj.name, obj);

            obj = new Static("sta33","631","472",null,"30","0",null,null,null,null,null,this.divData1.form.divDataRight.form);
            obj.set_taborder("61");
            obj.set_cssclass("sta_WF_tablebg");
            this.divData1.form.divDataRight.addChild(obj.name, obj);

            obj = new Edit("txtDS_CURB_ETC","635","477",null,"20","5",null,null,null,null,null,this.divData1.form.divDataRight.form);
            obj.set_taborder("62");
            obj.set_enable("true");
            obj.set_readonly("true");
            this.divData1.form.divDataRight.addChild(obj.name, obj);

            obj = new Static("staTITLE02","0","510","44.55%","22",null,null,null,null,null,null,this.divData1.form.divDataRight.form);
            obj.set_taborder("63");
            obj.set_text("사옥출입자현황");
            obj.set_cssclass("sta_TITLE_Bg");
            obj.set_textAlign("left");
            this.divData1.form.divDataRight.addChild(obj.name, obj);

            obj = new Grid("objGridSub","0","538",null,"150","0",null,null,null,null,null,this.divData1.form.divDataRight.form);
            obj.set_taborder("64");
            obj._setContents("");
            this.divData1.form.divDataRight.addChild(obj.name, obj);

            obj = new Static("sta34","0","721",null,"71","0",null,null,null,null,null,this.divData1.form.divDataRight.form);
            obj.set_taborder("65");
            obj.set_cssclass("sta_WF_tablebg");
            this.divData1.form.divDataRight.addChild(obj.name, obj);

            obj = new TextArea("txtDS_ACCEPT","5","726",null,"61","5",null,null,null,null,null,this.divData1.form.divDataRight.form);
            obj.set_taborder("66");
            obj.set_readonly("true");
            this.divData1.form.divDataRight.addChild(obj.name, obj);

            obj = new Static("staTITLE03","0","696","44.55%","22",null,null,null,null,null,null,this.divData1.form.divDataRight.form);
            obj.set_taborder("67");
            obj.set_text("접수");
            obj.set_cssclass("sta_TITLE_Bg");
            obj.set_textAlign("left");
            this.divData1.form.divDataRight.addChild(obj.name, obj);

            obj = new Static("sta36","0","821",null,"71","0",null,null,null,null,null,this.divData1.form.divDataRight.form);
            obj.set_taborder("68");
            obj.set_cssclass("sta_WF_tablebg");
            this.divData1.form.divDataRight.addChild(obj.name, obj);

            obj = new TextArea("txtDS_VISIT","5","826",null,"61","5",null,null,null,null,null,this.divData1.form.divDataRight.form);
            obj.set_taborder("69");
            obj.set_readonly("true");
            this.divData1.form.divDataRight.addChild(obj.name, obj);

            obj = new Static("staTITLE04","0","796","44.55%","22",null,null,null,null,null,null,this.divData1.form.divDataRight.form);
            obj.set_taborder("70");
            obj.set_text("내방");
            obj.set_cssclass("sta_TITLE_Bg");
            obj.set_textAlign("left");
            this.divData1.form.divDataRight.addChild(obj.name, obj);

            obj = new Static("sta37","0","921",null,"71","0",null,null,null,null,null,this.divData1.form.divDataRight.form);
            obj.set_taborder("71");
            obj.set_cssclass("sta_WF_tablebg");
            this.divData1.form.divDataRight.addChild(obj.name, obj);

            obj = new TextArea("txtDS_REMARK","5","926",null,"61","5",null,null,null,null,null,this.divData1.form.divDataRight.form);
            obj.set_taborder("72");
            obj.set_readonly("true");
            this.divData1.form.divDataRight.addChild(obj.name, obj);

            obj = new Static("staTITLE05","0","896","44.55%","22",null,null,null,null,null,null,this.divData1.form.divDataRight.form);
            obj.set_taborder("73");
            obj.set_text("비고");
            obj.set_cssclass("sta_TITLE_Bg");
            obj.set_textAlign("left");
            this.divData1.form.divDataRight.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this
            obj = new Layout("default","",this._adjust_width,this._adjust_height,this,function(p){});
            this.addLayout(obj.name, obj);
            
            // BindItem Information
            obj = new BindItem("item0","divData1.form.divDataMaster.form.sta02","text","dsListMaster","DS_HNAME");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item1","divData1.form.divDataMaster.form.sta03","text","dsListMaster","DS_DEPT");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item2","divData1.form.divDataMaster.form.sta05","text","dsListMaster","DT_START");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item4","divData1.form.divDataMaster.form.sta09","text","dsListMaster","NO_DOC");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item5","divData1.form.divDataApprTitle.form.staApprNm","text","dsListMaster","DS_TITLE");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item6","divData1.form.divDataMaster.form.txtDS_ETITLE","value","dsListMaster","DS_ETITLE");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item3","divData1.form.divDataRight.form.ctclDT_WORK","value","dsList","DT_WORK");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item7","divData1.form.divDataRight.form.txtDS_DIRECTION","value","dsList","DS_DIRECTION");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item8","divData1.form.divDataRight.form.cboHH_DAYDUTY_TO","value","dsList","HH_DAYDUTY_TO");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item9","divData1.form.divDataRight.form.cboMM_DAYDUTY_TO","value","dsList","MM_DAYDUTY_TO");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item10","divData1.form.divDataRight.form.cboMM_DAYDUTY_FROM","value","dsList","MM_DAYDUTY_FROM");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item11","divData1.form.divDataRight.form.cboHH_DAYDUTY_FROM","value","dsList","HH_DAYDUTY_FROM");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item12","divData1.form.divDataRight.form.txtDS_ACTION","value","dsList","DS_ACTION");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item13","divData1.form.divDataRight.form.cboDS_LIGHTS_08","value","dsList","DS_LIGHTS_08");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item14","divData1.form.divDataRight.form.cboDS_LIGHTS_12","value","dsList","DS_LIGHTS_12");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item15","divData1.form.divDataRight.form.cboDS_LIGHTS_15","value","dsList","DS_LIGHTS_15");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item16","divData1.form.divDataRight.form.cboDS_LIGHTS_17","value","dsList","DS_LIGHTS_17");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item17","divData1.form.divDataRight.form.cboDS_FIRE_08","value","dsList","DS_FIRE_08");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item18","divData1.form.divDataRight.form.cboDS_FIRE_12","value","dsList","DS_FIRE_12");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item19","divData1.form.divDataRight.form.cboDS_FIRE_15","value","dsList","DS_FIRE_15");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item20","divData1.form.divDataRight.form.cboDS_FIRE_17","value","dsList","DS_FIRE_17");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item21","divData1.form.divDataRight.form.cboDS_CURB_08","value","dsList","DS_CURB_08");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item22","divData1.form.divDataRight.form.cboDS_CURB_12","value","dsList","DS_CURB_12");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item23","divData1.form.divDataRight.form.cboDS_CURB_15","value","dsList","DS_CURB_15");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item24","divData1.form.divDataRight.form.cboDS_CURB_17","value","dsList","DS_CURB_17");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item25","divData1.form.divDataRight.form.txtDS_ACCEPT","value","dsList","DS_ACCEPT");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item26","divData1.form.divDataRight.form.txtDS_VISIT","value","dsList","DS_VISIT");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item27","divData1.form.divDataRight.form.txtDS_REMARK","value","dsList","DS_REMARK");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item28","divData1.form.divDataRight.form.txtDS_APPROVAL","value","dsList","DS_APPROVAL");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item29","divData1.form.divDataRight.form.txtDS_HNAME","value","dsList","DS_HNAME");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item30","divData1.form.divDataRight.form.txtDS_LIGHTS_ETC","value","dsList","DS_LIGHTS_ETC");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item31","divData1.form.divDataRight.form.txtDS_FIRE_ETC","value","dsList","DS_FIRE_ETC");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item32","divData1.form.divDataRight.form.txtDS_CURB_ETC","value","dsList","DS_CURB_ETC");
            this.addChild(obj.name, obj);
            obj.bind();
            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script
        this.registerScript("DAB_DAYDUTY_APP.xfdl", function() {
        this.objApp = this.gfnGetApplication();

        this.ID_AP_TYPE = "DA04";	//	당직일지

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

        	// 기본 버튼(입력,저장 등..) 숨김처리
        	this.divTopBtn.form.fnSetVisibleButton(false);

        	this.dsSearch.setColumn(0, "V1", this.gfnIsNull(this.getOwnerFrame().V1) ? "" : this.getOwnerFrame().V1); //DT_WORK
        	this.dsSearch.setColumn(0, "V2", this.gfnIsNull(this.getOwnerFrame().V2) ? "" : this.getOwnerFrame().V2); //ID_PERSON
        	this.dsSearch.setColumn(0, "V3", this.gfnIsNull(this.getOwnerFrame().V3) ? "" : this.getOwnerFrame().V3); //CD_CORP
        	this.dsSearch.setColumn(0, "V4", this.gfnIsNull(this.getOwnerFrame().V4) ? "" : this.getOwnerFrame().V4); //ID_SABUN
        	this.dsSearch.setColumn(0, "DS_ETITLE", this.getOwnerFrame().DS_ETITLE);

        	if(this.gfnIsNull(this.getOwnerFrame().ID_AP)) {
        		//채번 후 조회
        		this.fnInit();
        	}
        	else {
        		//조회
        		this.dsSearch.setColumn(0, "ID_AP", this.getOwnerFrame().ID_AP);
        		this.fnSelectMaster();
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
        	this.btn1 = this.gfnFormButtonAdd("btn1", "fnAppr");	//승인
        	this.btn2 = this.gfnFormButtonAdd("btn2", "fnAppr");	//반려
        	this.btn3 = this.gfnFormButtonAdd("btn3", "fnBtn3");	//결재정보
        	this.btn4 = this.gfnFormButtonAdd("btn4", "fnAppr");	//상신
        	this.btn5 = this.gfnFormButtonAdd("btn5", "fnAppr");	//상신취소
        	this.btn6 = this.gfnFormButtonAdd("btn6", "fnBtn6");	//파일첨부
        	this.btn7 = this.gfnFormButtonAdd("btn7", "fnAppr");	//재기안
        	this.btn8 = this.gfnFormButtonAdd("btn8", "fnAppr");	//수신접수
        	this.btn9 = this.gfnFormButtonAdd("btn9", "fnAppr");	//삭제
        	this.btn10 = this.gfnFormButtonAdd("btn10", "fnBtn10");	//결재선
        	this.btn11 = this.gfnFormButtonAdd("btn11", "fnAppr");	//임시저장
        	this.btnRpt = this.gfnFormButtonAdd("btnRpt", "fnPrint");	//출력

        };

        /************************************************************************
         * 변수 선언
         ************************************************************************/
        this.fnSetVariable = function() {
        	//Title
        	this.staApprNm = this.divData1.form.divDataApprTitle.form.staApprNm;
        	//제목
        	this.txtDS_ETITLE = this.divData1.form.divDataMaster.form.txtDS_ETITLE;

        	// 결재선
        	this.dxGridAppr1 = this.divData1.form.divDataApprLine.form.objGridAppr1;
        	this.dxGridAppr2 = this.divData1.form.divDataApprLine.form.objGridAppr2;

        	this.dxGridSub = this.divData1.form.divDataRight.form.objGridSub;

        	//this.dxGrid = this.divData1.form.objGrid;
        	//this.dxGrid1 = this.divData1.form.objGrid1;

        	// BUTTON, BUTTON-IN 처리
        };

        /************************************************************************
         * 이벤트 설정
         ************************************************************************/
        this.fnSetEvent = function() {
        	//결재선 그리드 세팅
        	this.gfnGridInit(this.dxGridAppr1, this.dsApprLines1, "DZ", "DZR_APLINES_01");
        	this.gfnGridInit(this.dxGridAppr2, this.dsApprLines2, "DZ", "DZR_APLINES_01");

        	this.dxGridAppr1.set_extendsizetype("none");
        	this.dxGridAppr1.set_scrollbartype("none none");	// 가로 스크롤이 생기지 않게 세팅
        	this.dxGridAppr2.set_extendsizetype("none");
        	this.dxGridAppr2.set_scrollbartype("none none");	// 가로 스크롤이 생기지 않게 세팅

        	this.gfnGridInit(this.dxGridSub, this.dsListSub, "DA", "DAB_DAYDUTY_DTL");

        	this.dxGridSub.EnterCell = "fnGrid_EnterCell";

        	//결재본문 그리드 세팅
        	//this.gfnGridInit(this.dxGrid, this.dsList, "DA", "DAG_WORKDAY_PLAN_APP");

        	//가로 스크롤이 생기지 않게 세팅
        	//this.dxGrid.set_scrollbartype("none default");

        	//그리드 헤더 색상 변경
        	//this.dxGrid.set_enableredraw(false);
        	//for(var i = 0; i < this.dxGrid.getCellCount("head"); i++) {
         	//	this.dxGrid.setCellProperty("head",i,"background","#EDECEF");
         	//	this.dxGrid.setCellProperty("head",i,"color","#4b5055");
        	//	this.dxGrid.setCellProperty("head",i,"border","none, 1px solid #C4C2CD, 1px solid #C4C2CD, none");
        	//}
        	//this.dxGrid.set_enableredraw(true);

        // 	this.dxGrid1.set_enableredraw(false);
        // 	for(var i = 0; i < this.dxGrid1.getCellCount("head"); i++) {
        // 		this.dxGrid1.setCellProperty("head",i,"background","#EDECEF");
        // 		this.dxGrid1.setCellProperty("head",i,"color","#4b5055");
        // 		this.dxGrid1.setCellProperty("head",i,"border","none, 1px solid #C4C2CD, 1px solid #C4C2CD, none");
        // 	}
        // 	this.dxGrid1.set_enableredraw(true);

        }

        /************************************************************************
         * 파라미터 설정
         ************************************************************************/
        this.fnSetParameter = function() {
        	this.dsApprInit = new Dataset();
        	this.dsApprInit.addColumn("ID_AP_OUT", "string");
        	this.dsApprInit.addColumn("ID_AP_TYPE", "string");
        	this.dsApprInit.addColumn("PARAM01", "string");
        	this.dsApprInit.addColumn("PARAM02", "string");
        	this.dsApprInit.addColumn("PARAM03", "string");
        	this.dsApprInit.addColumn("PARAM04", "string");
        	this.dsApprInit.addColumn("DS_TITLE", "string");
        	this.dsApprInit.addColumn("ID_USER", "string");

        	this.dsLine1 = new Dataset();
        	this.dsLine1.addColumn("ID_AP", "string");
        	this.dsLine1.addColumn("TY_GUBUN", "string");

        	this.dsLine2 = new Dataset();
        	this.dsLine2.addColumn("ID_AP", "string");
        	this.dsLine2.addColumn("TY_GUBUN", "string");

        	this.dsMaster = new Dataset();
        	this.dsMaster.addColumn("ID_AP", "string");
        	this.dsMaster.addColumn("ID_USER", "string");

        	this.dsExec = new Dataset();
        	this.dsExec.addColumn("ID_AP", "string");
        	this.dsExec.addColumn("ST_APPR", "string");
        	this.dsExec.addColumn("DS_NOTE", "string");
        	this.dsExec.addColumn("ID_USER", "string");

        	this.dsSaveMaster = new Dataset();
        	this.dsSaveMaster.addColumn("ID_AP", "string");
        	this.dsSaveMaster.addColumn("DS_ETITLE", "string");
        	this.dsSaveMaster.addColumn("ID_USER", "string");

        	/*************************************************************************************************
        	* 결재본분 관련 Parameter
        	**************************************************************************************************/
        	this.dsSelect = new Dataset();
        	this.dsSelect.addColumn("DT_DAYDUTY", "string");
        	this.dsSelect.addColumn("ID_PERSON", "int");
        	this.dsSelect.addColumn("CD_CORP", "string");
        	this.dsSelect.addColumn("ID_SABUN", "string");
        	this.dsSelect.addColumn("GR_SEARCH", "string");
        	this.dsSelect.addColumn("GR_CORP", "string");
        	this.dsSelect.addColumn("GR_DEPT", "string");
        	this.dsSelect.addColumn("ID_USER", "string");
        }

        /************************************************************************
         * 버튼 이벤트
         ************************************************************************/
        //결재정보 / 결재선 조회
        this.fnSelectMaster = function() {
        	//if (!this.fnSelectValidate()) return false;

        	this.dsLine1.clearData();
        	this.dsLine1.addRow();
        	this.dsLine1.setColumn(0, "ID_AP", this.dsSearch.getColumn(0, "ID_AP"));
        	this.dsLine1.setColumn(0, "TY_GUBUN", "결재");

        	this.dsLine2.clearData();
        	this.dsLine2.addRow();
        	this.dsLine2.setColumn(0, "ID_AP", this.dsSearch.getColumn(0, "ID_AP"));
        	this.dsLine2.setColumn(0, "TY_GUBUN", "합의");

        	this.dsMaster.clearData();
        	this.dsMaster.addRow();
        	this.dsMaster.setColumn(0, "ID_AP", this.dsSearch.getColumn(0, "ID_AP"));
        	this.dsMaster.setColumn(0, "ID_USER", this.AuthClient.ID_USER);


        	var strSvcId    = "master";
        	var strSvcType  = "grid";
        	var inProc		= "_dsProc";
         	var inData      = "line1=dsLine1 line2=dsLine2 selectmaster=dsMaster";
         	var outData     = "dsApprLines1=line10 dsApprLines2=line20 dsListMaster=selectmaster0";
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

        // 결재선 조회
        this.fnSelectLines = function() {
        	this.dsLine1.clearData();
        	this.dsLine1.addRow();
        	this.dsLine1.setColumn(0, "ID_AP", this.dsSearch.getColumn(0, "ID_AP"));
        	this.dsLine1.setColumn(0, "TY_GUBUN", "결재");

        	this.dsLine2.clearData();
        	this.dsLine2.addRow();
        	this.dsLine2.setColumn(0, "ID_AP", this.dsSearch.getColumn(0, "ID_AP"));
        	this.dsLine2.setColumn(0, "TY_GUBUN", "합의");

        	var strSvcId    = "lines";
        	var strSvcType  = "grid";
        	var inProc		= "_dsProc";
         	var inData      = "line1=dsLine1 line2=dsLine2";
         	var outData     = "dsApprLines1=line10 dsApprLines2=line20";
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


        /*************************************************************************************************
        * 결재본분 조회
        * ------------------------------------------------------------------------------------------------
        * 결재본분 문서 내용 조회시 필요한 sp 호출
        **************************************************************************************************/
        this.fnSelect = function() {
        	if (!this.fnSelectValidate()) return false;

        	//결재본문 그리드 세팅
        	//this.gfnGridInit(this.dxGrid, this.dsList, "DF", "DFA_PLANS_APP");

        	this.dsSelect.clearData();
        	this.dsSelect.addRow();


        	this.dsSelect.setColumn(0, "DT_DAYDUTY", this.dsListMaster.getColumn(0, "V_PARAM01")); //DT_WORK
        	this.dsSelect.setColumn(0, "ID_PERSON", this.dsListMaster.getColumn(0, "V_PARAM02")); //ID_PERSON
        	this.dsSelect.setColumn(0, "CD_CORP", this.dsListMaster.getColumn(0, "V_PARAM03")); //CD_CORP
        	this.dsSelect.setColumn(0, "ID_SABUN", this.dsListMaster.getColumn(0, "V_PARAM04")); //ID_SABUN
        	this.dsSelect.setColumn(0, "GR_SEARCH", this.FormInfo.GR_SEARCH);
        	this.dsSelect.setColumn(0, "GR_CORP", this.AuthClient.CD_CORP);
        	this.dsSelect.setColumn(0, "GR_DEPT", this.AuthClient.CD_DEPT);
        	this.dsSelect.setColumn(0, "ID_USER", this.AuthClient.ID_USER);

        	var strSvcId    = "select";
        	var strSvcType  = "grid";
        	var inProc		= "_dsProc";
         	var inData      = "select=dsSelect";	// select1=dsSelect1
         	var outData     = "dsList=select0 dsListSub=select1";		// dsList1=select10
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

        /*************************************************************************************************
        * 결재본분 문서 저장 / 상신 호출
        * ------------------------------------------------------------------------------------------------
        * 결재본분 문서 저장이 필요할 경우
        * this.fnExec("01"); 부분 주석 처리 후 아래 저장 부분 주석 풀고 내용 입력
        *  - strSvcId = "save" 그대로 사용 (fnCallback 함수에서 상신 처리)
        * 결재본분 문서 저장이 필요없는 경우 그대로 상신 처리 사용
        **************************************************************************************************/
        this.fnSave = function() {
        	this.fnExec("01");	//상신

        // 	this.dsSave.clearData();
        // 	this.dsSave.addRow();
        //
        // 	this.dsSave.setColumn(0, "ID_AP", this.dsSearch.getColumn(0, "ID_AP"));
        // 	this.dsSave.setColumn(0, "ID_USER", this.AuthClient.ID_USER);
        //
        // 	var strSvcId    = "save";
        // 	var strSvcType  = "save";
        // 	var inProc		= "_dsProc";
        // 	var inData      = "save=dsSave";
        // 	var outData     = "";
        // 	var strArg      = "";
        // 	var callBackFnc = "fnCallback";
        //
        // 	this.gfnTransaction( strSvcId , 	// transaction을 구분하기 위한 svc id값
        // 						strSvcType , 	// transaction을 요청할 구분
        // 						inProc,			// Procedure 정보 Dataset 이름
        // 						inData , 		// 입력값으로 보낼 dataset id , a=b형태로 실제이름과 입력이름을 매칭
        // 						outData , 		// 처리결과값으로 받을 dataset id, a=b형태로 실제이름과 입력이름을 매칭
        // 						strArg, 			// 입력갑스로 보낼 arguments, strFormData="20120607"
        // 						callBackFnc); // 통신방법 정의 [생략가능]
        }


        /************************************************************************
         * Validate
         ************************************************************************/
        /*
         *	조회 Validate
         */
        this.fnSelectValidate = function() {
        	var validate = true;

        	return validate;
        };

        /************************************************************************
         * 콜백 이벤트
         ************************************************************************/
        /*
         *	콜백 처리
         */
        this.fnCallback = function(svcID, errorCode, errorMsg, strArg) {
        	if (svcID == "init") {
        		if (this.dsInit.rowcount > 0) {

        			//채번 후 결재선/결재정보 조회
        			this.dsSearch.setColumn(0, "ID_AP", this.dsInit.getColumn(0, "ID_AP_OUT"));

        			this.fnSelectMaster();
        		}
        	}
        	else if (svcID == "master" || svcID == "lines") {
        		//결재선 Height 설정
        		if(this.dsApprLines1.rowcount > 0) {
        			this.dxGridAppr1.setRealRowSize(0, 24);
        			this.dxGridAppr1.setRealRowSize(1, 26);
        		}
        		if(this.dsApprLines2.rowcount > 0) {
        			this.dxGridAppr2.setRealRowSize(0, 24);
        			this.dxGridAppr2.setRealRowSize(1, 26);
        		}

        		if (this.dsListMaster.rowcount > 0) {
        			this.btn1.set_visible(this.dsListMaster.getColumn(0, "BTNAPPR") != "H");
        			this.btn2.set_visible(this.dsListMaster.getColumn(0, "BTNREJECT") != "H");
        			this.btn3.set_visible(this.dsListMaster.getColumn(0, "BTNINFO") != "H");
        			this.btn4.set_visible(this.dsListMaster.getColumn(0, "BTNISSUE") != "H");
        			this.btn5.set_visible(this.dsListMaster.getColumn(0, "BTNCANCEL") != "H");
        			this.btn6.set_visible(this.dsListMaster.getColumn(0, "BTNFILE") != "H");
        			this.btn7.set_visible(this.dsListMaster.getColumn(0, "BTNRE") != "H");
        			this.btn8.set_visible(this.dsListMaster.getColumn(0, "BTNAC") != "H");
        			this.btn9.set_visible(this.dsListMaster.getColumn(0, "BTNDE") != "H");
        			this.btn10.set_visible(this.dsListMaster.getColumn(0, "BTNLINES") != "H");
        			this.btn11.set_visible(this.dsListMaster.getColumn(0, "BTNSAVE") != "H");

        			// 확장버튼 숨김 처리 후 위치조정
        			var arrBtns = [];
        			for (var i = this.BtnsInfo.length - 1; i >= 0; i--) {
        				if (this.BtnsInfo[i].COMP_BUTTON.visible)
        					arrBtns.push(this.BtnsInfo[i].COMP_BUTTON);
        			}

        			var r = 0;
        			for(var i = 0; i <= arrBtns.length - 1; i++) {
        				var btn = arrBtns[i];
        				if (i == 0)
        					btn.set_right(0);
        				else {
        					btn.set_right(r + 2);
        				}

        				r = btn.right + btn.width;
        			}

        			this.btn1.set_enable(this.dsListMaster.getColumn(0, "BTNAPPR") == "Y");
        			this.btn2.set_enable(this.dsListMaster.getColumn(0, "BTNREJECT") == "Y");
        			this.btn3.set_enable(this.dsListMaster.getColumn(0, "BTNINFO") == "Y");
        			this.btn4.set_enable(this.dsListMaster.getColumn(0, "BTNISSUE") == "Y");
        			this.btn5.set_enable(this.dsListMaster.getColumn(0, "BTNCANCEL") == "Y");
        			//this.btn6.set_enable(this.dsListMaster.getColumn(0, "BTNFILE") == "Y");
        			this.btn7.set_enable(this.dsListMaster.getColumn(0, "BTNRE") == "Y");
        			this.btn8.set_enable(this.dsListMaster.getColumn(0, "BTNAC") == "Y");
        			this.btn9.set_enable(this.dsListMaster.getColumn(0, "BTNDE") == "Y");
        			this.btn10.set_enable(this.dsListMaster.getColumn(0, "BTNLINES") == "Y");
        			this.btn11.set_enable(this.dsListMaster.getColumn(0, "BTNSAVE") == "Y");

        			// 상태값이 00 이면 제목 활성화
        			if (this.dsListMaster.getColumn(0, "ST_APPR") == "00")
        				this.txtDS_ETITLE.set_readonly(false);
        			else
        				this.txtDS_ETITLE.set_readonly(true);


        			// 결재정보 조회후 결재본문 내역 조회
        			this.fnSelect();
        		}
        	}
        	else if(svcID == "savemaster") {
        		if (errorCode == 0) {
        			var json = this.gfnArgsToJson(strArg);
        			var status = json.status;
        			//this.fnExec("01");
        			this.fnSave(status);
        		} else {
        			this.gfnAlert(errorMsg);
        		}
        	}
        	else if(svcID == "save") {
        		if (errorCode == 0) {
        			this.fnExec("01");	//상신
        		} else {
        			this.gfnAlert(errorMsg);
        		}
        	}
        	else if(svcID == "exec") {
        		if (errorCode == 0) {
        			var json = this.gfnArgsToJson(strArg);
        			var status = json.status;
        			if (status == "DE") {
        				this.getParentContext().close(true);
        			}
        			else {
        				this.fnSelectMaster();
        			}
        		} else {
        			this.gfnAlert(errorMsg);
        		}
        	}
        	else if(svcID == "select") {
        		if (errorCode == 0) {

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
        this.fnGrid_EnterCell = function(obj, row, cell) {
        	return false;
        }
        /************************************************************************
         * 확장버튼 이벤트
         ************************************************************************/
         // 승인/반려/상신/상신취소/재기안/수신접수/삭제 처리
        this.fnAppr = function(obj,e) {
        	var status = "";
        	switch (obj.name) {
        		case "btnExt_btn1":	//승인
        			status = "03";
        			break;
        		case "btnExt_btn2":	//반려
        			status = "04";
        			break;
        		case "btnExt_btn4":	//상신
        			status = "01";
        			break;
        		case "btnExt_btn5":	//상신취소
        			status = "05";
        			break;
        		case "btnExt_btn7":	//재기안
        			status = "RE";
        			break;
        		case "btnExt_btn8":	//수신접수
        			status = "AC";
        			break;
        		case "btnExt_btn9":	//삭제
        			status = "DE";
        			break;
        		case "btnExt_btn11"://임시저장
        			status = "00";
        			break;
        	}

        	if (status == "01" || status == "00") {
        		this.fnSaveMaster(status);
        	}
        	else {
        		this.fnExec(status);
        	}
        }

        // // 확장버튼 sp 호출 (DZRPR_APPROVAL_EXECUTE)
        // this.fnExec = function(status) {
        // 	this.dsExec.clearData();
        // 	this.dsExec.addRow();
        //
        // 	this.dsExec.setColumn(0, "ID_AP", this.dsSearch.getColumn(0, "ID_AP"));
        // 	this.dsExec.setColumn(0, "ST_APPR", status);
        // 	this.dsExec.setColumn(0, "ID_USER", this.AuthClient.ID_USER);
        //
        // 	var strSvcId    = "exec";
        // 	var strSvcType  = "save";
        // 	var inProc		= "_dsProc";
        // 	var inData      = "exec=dsExec";
        // 	var outData     = "";
        // 	var strArg      = "status=" + status;
        // 	var callBackFnc = "fnCallback";
        //
        // 	this.gfnTransaction( strSvcId , 	// transaction을 구분하기 위한 svc id값
        // 						strSvcType , 	// transaction을 요청할 구분
        // 						inProc,			// Procedure 정보 Dataset 이름
        // 						inData , 		// 입력값으로 보낼 dataset id , a=b형태로 실제이름과 입력이름을 매칭
        // 						outData , 		// 처리결과값으로 받을 dataset id, a=b형태로 실제이름과 입력이름을 매칭
        // 						strArg, 			// 입력갑스로 보낼 arguments, strFormData="20120607"
        // 						callBackFnc); // 통신방법 정의 [생략가능]
        // }

        this.fnExec = function(status) {
        	// 의견 등록 - 상신(01), 승인(03), 반려(04)
        	if(status == "01" || status == "03" || status == "04"){
        		var param = {};

        		param.ID_AP = this.dsSearch.getColumn(0, "ID_AP");
        		param.V_PARAM01 = this.dsListMaster.getColumn(0, "V_PARAM01");
        		param.V_PARAM02 = this.dsListMaster.getColumn(0, "V_PARAM02");
        		param.V_PARAM03 = this.dsListMaster.getColumn(0, "V_PARAM03");
        		param.V_PARAM04 = this.dsListMaster.getColumn(0, "V_PARAM04");
        		param.ST_APPR = status;

        		this.gfnFormOpenNonAuth("DZR", "DZR_AP_NOTE", "fnAprvDialogCallback", param, 550, 300);
        	}else{
        		var dsNote = "";
        		this.fnApprovalExec(status, dsNote);
        	}
        }

        this.fnAprvDialogCallback = function(svcID, value) {
        	if(value){	// 리턴값
        		var json = JSON.parse(value);
        		this.fnApprovalExec(json.ST_APPR, json.DS_NOTE);
        	}
        };

        // 확장버튼 sp 호출 (DZRPR_APPROVAL_EXECUTE)
        this.fnApprovalExec = function(status, dsNote) {
        	this.dsExec.clearData();
        	this.dsExec.addRow();

        	this.dsExec.setColumn(0, "ID_AP", this.dsSearch.getColumn(0, "ID_AP"));
        	this.dsExec.setColumn(0, "ST_APPR", status);
        	this.dsExec.setColumn(0, "DS_NOTE", dsNote);
        	this.dsExec.setColumn(0, "ID_USER", this.AuthClient.ID_USER);

        	var strSvcId    = "exec";
        	var strSvcType  = "save";
        	var inProc		= "_dsProc";
        	var inData      = "exec=dsExec";
        	var outData     = "";
        	var strArg      = "status=" + status;
        	var callBackFnc = "fnCallback";

        	this.gfnTransaction( strSvcId , 	// transaction을 구분하기 위한 svc id값
        						strSvcType , 	// transaction을 요청할 구분
        						inProc,			// Procedure 정보 Dataset 이름
        						inData , 		// 입력값으로 보낼 dataset id , a=b형태로 실제이름과 입력이름을 매칭
        						outData , 		// 처리결과값으로 받을 dataset id, a=b형태로 실제이름과 입력이름을 매칭
        						strArg, 			// 입력갑스로 보낼 arguments, strFormData="20120607"
        						callBackFnc); // 통신방법 정의 [생략가능]
        }

        // 상신전에 저장 sp 호출 (DZRPR_APPROVAL_MASTER_SAVE)
        this.fnSaveMaster = function(status) {
        	this.dsSaveMaster.clearData();
        	this.dsSaveMaster.addRow();

        	this.dsSaveMaster.setColumn(0, "ID_AP", this.dsSearch.getColumn(0, "ID_AP"));
        	this.dsSaveMaster.setColumn(0, "DS_ETITLE", this.dsListMaster.getColumn(0, "DS_ETITLE"));
        	this.dsSaveMaster.setColumn(0, "ID_USER", this.AuthClient.ID_USER);

        	var strSvcId    = "savemaster";
        	var strSvcType  = "save";
        	var inProc		= "_dsProc";
        	var inData      = "savemaster=dsSaveMaster";
        	var outData     = "";
        	var strArg      = "status=" + status;
        	var callBackFnc = "fnCallback";

        	this.gfnTransaction( strSvcId , 	// transaction을 구분하기 위한 svc id값
        						strSvcType , 	// transaction을 요청할 구분
        						inProc,			// Procedure 정보 Dataset 이름
        						inData , 		// 입력값으로 보낼 dataset id , a=b형태로 실제이름과 입력이름을 매칭
        						outData , 		// 처리결과값으로 받을 dataset id, a=b형태로 실제이름과 입력이름을 매칭
        						strArg, 			// 입력갑스로 보낼 arguments, strFormData="20120607"
        						callBackFnc); // 통신방법 정의 [생략가능]
        }

        //결재정보
        this.fnBtn3 = function(obj,e) {
        	var param = {};
        	param.ID_AP = this.dsSearch.getColumn(0, "ID_AP");

        	this.gfnFormOpenNonAuth("DZR", "DZR_APLINES", "", param, 1000, 420);
        };

        //파일첨부
        this.fnBtn6 = function(obj,e) {
           var fileManager = {};
           fileManager.CD_GUBUN = "DZAP";
           fileManager.CD_DIR = [ this.dsSearch.getColumn(0, "ID_AP") ];

           //fileManager.IS_READONLY = (this.dsListMaster.getColumn(0, "BTNFILE") == "Y");
           //false가 수정가능상태 Y가 수정가능
           var bReadOnly = (this.dsListMaster.getColumn(0, "BTNFILE") == "Y")?false:true;
           fileManager.IS_READONLY = bReadOnly;

           this.gfnFileManager(fileManager, "");
        };
        /*
        this.fnFileCallback = function(strID, val) {
        	// val.IsChange : 변경여부, val.Cnt : 파일개수
        	// 파일개수를 다시 셋팅
        	this.dsList.set_enableevent(false);
        	if(val.Cnt == 0) {
        		//this.dsList.setColumn(this.dsList.rowposition, "URL_PROOF", "첨부");
        	}
        	this.dsList.setColumn(this.dsList.rowposition, "CT_PROOF", "첨부(" + val.Cnt + ")");
        	this.dsList.set_enableevent(true);
        };
        */
        //결재선
        this.fnBtn10 = function(obj,e) {
        	var param = {};
        	param.ID_AP = this.dsSearch.getColumn(0, "ID_AP");
        // 	param.ID_AP_TYPE = this.ID_AP_TYPE;
        // 	param.PARAM01 = this.dsSearch.getColumn(0, "V1");
        // 	param.PARAM02 = this.dsSearch.getColumn(0, "V2");
        // 	param.PARAM03 = this.dsSearch.getColumn(0, "V3");
        // 	param.PARAM04 = this.dsSearch.getColumn(0, "V4");
        // 	param.DS_TITLE = this.dsSearch.getColumn(0, "DS_ETITLE");

        	this.gfnFormOpen("DZR", "DZR_AP_REQUEST", "fnBtn10_callback", param, 930, 680);
        };

        this.fnBtn10_callback = function(svcID, val) {
        	this.fnSelectLines();
        }

        this.fnPrint = function(svcID, val) {
        	//master
        	this.dsListPrint.clearData();
        	this.dsListPrint.copyData(this.dsList);
        	if(this.dsListPrint.rowcount == 0){
        		this.dsListPrint.addRow();
        	}
        	for(var i = 0;i<this.dsListPrint.rowcount;i++){
        		this.dsListPrint.setColumn(i, "PROOF_URL", "");
        	}

         	var inProc		= "_dsProc";
        	var inParam 	= "params=dsListPrint";			// 조회SP이외 사용할 정보
        	//var inParam 	= "";			// 조회SP이외 사용할 정보
         	var inData      = "line1=dsLine1 line2=dsLine2 selectmaster=dsMaster select=dsSelect";	// select=dsSelect
        	var reportpath  = "/da/dab/DAB_DAYDUTY_APP.ozr";

         	gfnOpenReport(this, reportpath, inProc, inParam, inData);
        }

        this.fnNewLineReplace = function(dataset){
        	//replace("\n", '\\n').replace("\t", "\\t")

        	var sDS_PURPOSE = this.fnReplace(dataset.getColumn(0, "DS_PURPOSE"), "\n",  "\\n");
        	sDS_PURPOSE = this.fnReplace(sDS_PURPOSE, "\t",  "\\t");
        	dataset.setColumn(0, "DS_PURPOSE", sDS_PURPOSE);

        	var sDS_REMARK = this.fnReplace(dataset.getColumn(0, "DS_REMARK"), "\n",  "\\n");
        	sDS_REMARK = this.fnReplace(sDS_REMARK, "\t",  "\\t");
        	dataset.setColumn(0, "DS_REMARK", sDS_REMARK);
        }


        /************************************************************************
         * 기타 이벤트
         ************************************************************************/
        //결재번호 채번
        this.fnInit = function() {
        	this.dsApprInit.clearData();
        	this.dsApprInit.addRow();

        	this.dsApprInit.setColumn(0, "ID_AP_OUT", "");
        	this.dsApprInit.setColumn(0, "ID_AP_TYPE", this.ID_AP_TYPE);
        	this.dsApprInit.setColumn(0, "PARAM01", this.dsSearch.getColumn(0, "V1"));
        	this.dsApprInit.setColumn(0, "PARAM02", this.dsSearch.getColumn(0, "V2"));
        	this.dsApprInit.setColumn(0, "PARAM03", this.dsSearch.getColumn(0, "V3"));
        	this.dsApprInit.setColumn(0, "PARAM04", this.dsSearch.getColumn(0, "V4"));
        	this.dsApprInit.setColumn(0, "DS_TITLE", this.dsSearch.getColumn(0, "DS_ETITLE"));
        	this.dsApprInit.setColumn(0, "ID_USER", this.AuthClient.ID_USER);

        	var strSvcId    = "init";
        	var strSvcType  = "save";
        	var inProc		= "_dsProc";
        	var inData      = "init=dsApprInit";
        	var outData     = "dsInit=init";
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


        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.form_onload,this);
            this.addEventHandler("onclick",this.form_onclick,this);
            this.divData1.form.divDataApprTitle.form.staApprNm.addEventHandler("onclick",this.divData1_divDataApprTitle_staApprNm_onclick,this);
            this.divData1.form.divDataRight.form.txtDS_APPROVAL.addEventHandler("onkeyup",this.divData_divDataRight_onkeyup,this);
            this.divData1.form.divDataRight.form.txtDS_APPROVAL.addEventHandler("onkillfocus",this.divData_divDataRight_onkillfocus,this);
            this.divData1.form.divDataRight.form.txtDS_HNAME.addEventHandler("onkeyup",this.divData_divDataRight_onkeyup,this);
            this.divData1.form.divDataRight.form.txtDS_HNAME.addEventHandler("onkillfocus",this.divData_divDataRight_onkillfocus,this);
            this.divData1.form.divDataRight.form.staTITLE01.addEventHandler("onclick",this.divData1_divDataRight_staTITLE01_onclick,this);
            this.divData1.form.divDataRight.form.txtDS_LIGHTS_ETC.addEventHandler("onkeyup",this.divData_divDataRight_onkeyup,this);
            this.divData1.form.divDataRight.form.txtDS_LIGHTS_ETC.addEventHandler("onkillfocus",this.divData_divDataRight_onkillfocus,this);
            this.divData1.form.divDataRight.form.txtDS_FIRE_ETC.addEventHandler("onkeyup",this.divData_divDataRight_onkeyup,this);
            this.divData1.form.divDataRight.form.txtDS_FIRE_ETC.addEventHandler("onkillfocus",this.divData_divDataRight_onkillfocus,this);
            this.divData1.form.divDataRight.form.txtDS_CURB_ETC.addEventHandler("onkeyup",this.divData_divDataRight_onkeyup,this);
            this.divData1.form.divDataRight.form.txtDS_CURB_ETC.addEventHandler("onkillfocus",this.divData_divDataRight_onkillfocus,this);
            this.dsListSub.addEventHandler("onvaluechanged",this.dsList_onvaluechanged,this);
        };
        this.loadIncludeScript("DAB_DAYDUTY_APP.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
