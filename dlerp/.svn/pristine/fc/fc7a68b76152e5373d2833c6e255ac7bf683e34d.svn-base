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
            this.set_titletext("재입찰");
            if (Form == this.constructor)
            {
                this._setFormPosition(410,360);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("_dsProc", this);
            obj._setContents("<ColumnInfo><Column id=\"TARGET\" type=\"STRING\" size=\"256\"/><Column id=\"SP\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"TARGET\">select</Col><Col id=\"SP\">DCBPR_BID_DTMAGAM_SELECT</Col></Row><Row><Col id=\"TARGET\">save</Col><Col id=\"SP\">DCBPR_BID_CANCEL</Col></Row><Row><Col id=\"TARGET\">combo</Col><Col id=\"SP\">DZXPR_COMBO_SELECT</Col></Row><Row><Col id=\"TARGET\">send_sms</Col><Col id=\"SP\">DZZPR_BID_MAIL_SMS_SEND</Col></Row><Row><Col id=\"TARGET\">appChk</Col><Col id=\"SP\">DCBPR_APP_DC05_CHK</Col></Row><Row><Col id=\"TARGET\">appSelect</Col><Col id=\"SP\">DCBPR_APP_DC05_SELECT</Col></Row><Row><Col id=\"TARGET\">saveYouchal</Col><Col id=\"SP\">DCBPR_APP_REMARK_SAVE</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsData", this);
            obj._setContents("<ColumnInfo><Column id=\"CD_SITE\" type=\"STRING\" size=\"256\"/><Column id=\"DS_SITE\" type=\"STRING\" size=\"256\"/><Column id=\"NO_BID\" type=\"STRING\" size=\"256\"/><Column id=\"DS_SUBCON\" type=\"STRING\" size=\"256\"/><Column id=\"TY_WORK\" type=\"STRING\" size=\"256\"/><Column id=\"DS_REASON\" type=\"STRING\" size=\"256\"/><Column id=\"DT_BIDMAGAM_PRE\" type=\"STRING\" size=\"256\"/><Column id=\"DT_BIDMAGAM_PRE_HOUR\" type=\"STRING\" size=\"256\"/><Column id=\"DT_BIDMAGAM_PRE_MIN\" type=\"STRING\" size=\"256\"/><Column id=\"DT_BIDMAGAM\" type=\"STRING\" size=\"256\"/><Column id=\"DT_BIDMAGAM_HOUR\" type=\"STRING\" size=\"256\"/><Column id=\"DT_BIDMAGAM_MIN\" type=\"STRING\" size=\"256\"/><Column id=\"YN_SMS\" type=\"STRING\" size=\"256\"/><Column id=\"YN_MAIL\" type=\"STRING\" size=\"256\"/><Column id=\"CD_SYSTEM\" type=\"STRING\" size=\"256\"/><Column id=\"CT_BID\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"TY_WORK\">01</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsTY_WORK", this);
            obj._setContents("<ColumnInfo><Column id=\"CD_CODE\" type=\"STRING\" size=\"256\"/><Column id=\"DS_CODE\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsHOUR", this);
            obj._setContents("<ColumnInfo><Column id=\"CD_CODE\" type=\"STRING\" size=\"256\"/><Column id=\"DS_CODE\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"CD_CODE\">00</Col><Col id=\"DS_CODE\">00</Col></Row><Row><Col id=\"CD_CODE\">01</Col><Col id=\"DS_CODE\">01</Col></Row><Row><Col id=\"CD_CODE\">02</Col><Col id=\"DS_CODE\">02</Col></Row><Row><Col id=\"CD_CODE\">03</Col><Col id=\"DS_CODE\">03</Col></Row><Row><Col id=\"CD_CODE\">04</Col><Col id=\"DS_CODE\">04</Col></Row><Row><Col id=\"CD_CODE\">05</Col><Col id=\"DS_CODE\">05</Col></Row><Row><Col id=\"CD_CODE\">06</Col><Col id=\"DS_CODE\">06</Col></Row><Row><Col id=\"CD_CODE\">07</Col><Col id=\"DS_CODE\">07</Col></Row><Row><Col id=\"CD_CODE\">08</Col><Col id=\"DS_CODE\">08</Col></Row><Row><Col id=\"CD_CODE\">09</Col><Col id=\"DS_CODE\">09</Col></Row><Row><Col id=\"CD_CODE\">10</Col><Col id=\"DS_CODE\">10</Col></Row><Row><Col id=\"CD_CODE\">11</Col><Col id=\"DS_CODE\">11</Col></Row><Row><Col id=\"CD_CODE\">12</Col><Col id=\"DS_CODE\">12</Col></Row><Row><Col id=\"CD_CODE\">13</Col><Col id=\"DS_CODE\">13</Col></Row><Row><Col id=\"CD_CODE\">14</Col><Col id=\"DS_CODE\">14</Col></Row><Row><Col id=\"CD_CODE\">15</Col><Col id=\"DS_CODE\">15</Col></Row><Row><Col id=\"CD_CODE\">16</Col><Col id=\"DS_CODE\">16</Col></Row><Row><Col id=\"CD_CODE\">17</Col><Col id=\"DS_CODE\">17</Col></Row><Row><Col id=\"CD_CODE\">18</Col><Col id=\"DS_CODE\">18</Col></Row><Row><Col id=\"CD_CODE\">19</Col><Col id=\"DS_CODE\">19</Col></Row><Row><Col id=\"CD_CODE\">20</Col><Col id=\"DS_CODE\">20</Col></Row><Row><Col id=\"CD_CODE\">21</Col><Col id=\"DS_CODE\">21</Col></Row><Row><Col id=\"CD_CODE\">22</Col><Col id=\"DS_CODE\">22</Col></Row><Row><Col id=\"CD_CODE\">23</Col><Col id=\"DS_CODE\">23</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsMINUTE", this);
            obj._setContents("<ColumnInfo><Column id=\"CD_CODE\" type=\"STRING\" size=\"256\"/><Column id=\"DS_CODE\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"CD_CODE\">00</Col><Col id=\"DS_CODE\">00</Col></Row><Row><Col id=\"CD_CODE\">05</Col><Col id=\"DS_CODE\">05</Col></Row><Row><Col id=\"CD_CODE\">10</Col><Col id=\"DS_CODE\">10</Col></Row><Row><Col id=\"CD_CODE\">15</Col><Col id=\"DS_CODE\">15</Col></Row><Row><Col id=\"CD_CODE\">20</Col><Col id=\"DS_CODE\">20</Col></Row><Row><Col id=\"CD_CODE\">25</Col><Col id=\"DS_CODE\">25</Col></Row><Row><Col id=\"CD_CODE\">30</Col><Col id=\"DS_CODE\">30</Col></Row><Row><Col id=\"CD_CODE\">35</Col><Col id=\"DS_CODE\">35</Col></Row><Row><Col id=\"CD_CODE\">40</Col><Col id=\"DS_CODE\">40</Col></Row><Row><Col id=\"CD_CODE\">45</Col><Col id=\"DS_CODE\">45</Col></Row><Row><Col id=\"CD_CODE\">50</Col><Col id=\"DS_CODE\">50</Col></Row><Row><Col id=\"CD_CODE\">55</Col><Col id=\"DS_CODE\">55</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsDT_MAGAM", this);
            obj._setContents("");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsAppList", this);
            obj._setContents("<ColumnInfo><Column id=\"CD_SITE\" type=\"STRING\" size=\"256\"/><Column id=\"DS_SITE\" type=\"STRING\" size=\"256\"/><Column id=\"NO_BID\" type=\"STRING\" size=\"256\"/><Column id=\"NO_HADO\" type=\"STRING\" size=\"256\"/><Column id=\"DS_SUBCON\" type=\"STRING\" size=\"256\"/><Column id=\"TY_ACCOUNT\" type=\"STRING\" size=\"256\"/><Column id=\"RT_TAX\" type=\"BIGDECIMAL\" size=\"256\"/><Column id=\"TY_TAX\" type=\"STRING\" size=\"256\"/><Column id=\"RT_JIBUN\" type=\"INT\" size=\"256\"/><Column id=\"DT_FROM\" type=\"STRING\" size=\"256\"/><Column id=\"DT_TO\" type=\"STRING\" size=\"256\"/><Column id=\"DS_FROMTO\" type=\"STRING\" size=\"256\"/><Column id=\"DT_REQ_SITE\" type=\"STRING\" size=\"256\"/><Column id=\"DT_HQRECEIPT\" type=\"STRING\" size=\"256\"/><Column id=\"DT_HQAPPR\" type=\"STRING\" size=\"256\"/><Column id=\"AM_TT_DOKUB\" type=\"BIGDECIMAL\" size=\"256\"/><Column id=\"AM_TT_SILHENG\" type=\"BIGDECIMAL\" size=\"256\"/><Column id=\"AM_REQUEST\" type=\"BIGDECIMAL\" size=\"256\"/><Column id=\"AM_GONGSA\" type=\"BIGDECIMAL\" size=\"256\"/><Column id=\"UP_PYEONG\" type=\"INT\" size=\"256\"/><Column id=\"CD_VENDOR\" type=\"STRING\" size=\"256\"/><Column id=\"CD_COSTCLASS\" type=\"STRING\" size=\"256\"/><Column id=\"DS_COSTCLASS\" type=\"STRING\" size=\"256\"/><Column id=\"CD_LICCOST\" type=\"STRING\" size=\"256\"/><Column id=\"DS_LICCOST\" type=\"STRING\" size=\"256\"/><Column id=\"CD_SPECCONST\" type=\"STRING\" size=\"256\"/><Column id=\"CD_AREA\" type=\"STRING\" size=\"256\"/><Column id=\"DS_AREA\" type=\"STRING\" size=\"256\"/><Column id=\"NO_RFQ\" type=\"STRING\" size=\"256\"/><Column id=\"DS_CONTMETHOD\" type=\"STRING\" size=\"256\"/><Column id=\"AREA_SITE\" type=\"INT\" size=\"256\"/><Column id=\"AM_BASIC\" type=\"INT\" size=\"256\"/><Column id=\"YN_PUBLISH_BID\" type=\"STRING\" size=\"256\"/><Column id=\"YN_ATTACH_ILSIK\" type=\"STRING\" size=\"256\"/><Column id=\"YN_HASU\" type=\"STRING\" size=\"256\"/><Column id=\"YN_EXFILE_SEPARATE\" type=\"STRING\" size=\"256\"/><Column id=\"NO_UNION_HADO\" type=\"STRING\" size=\"256\"/><Column id=\"NO_UNION_BID_CONNECT\" type=\"STRING\" size=\"256\"/><Column id=\"YN_UNION_BID\" type=\"STRING\" size=\"256\"/><Column id=\"YN_UNION_BID_ING\" type=\"STRING\" size=\"256\"/><Column id=\"CT_GONGU\" type=\"INT\" size=\"256\"/><Column id=\"NUM_GONGU\" type=\"BIGDECIMAL\" size=\"256\"/><Column id=\"AREA_SITE1\" type=\"BIGDECIMAL\" size=\"256\"/><Column id=\"AREA_SITE2\" type=\"BIGDECIMAL\" size=\"256\"/><Column id=\"AREA_SITE3\" type=\"BIGDECIMAL\" size=\"256\"/><Column id=\"AREA_SITE4\" type=\"BIGDECIMAL\" size=\"256\"/><Column id=\"AREA_SITEALL\" type=\"BIGDECIMAL\" size=\"256\"/><Column id=\"ID_MANAGER\" type=\"BIGDECIMAL\" size=\"256\"/><Column id=\"NM_MANAGER\" type=\"STRING\" size=\"256\"/><Column id=\"NO_MANAGERTEL\" type=\"STRING\" size=\"256\"/><Column id=\"ID_SITESABUN\" type=\"STRING\" size=\"256\"/><Column id=\"NM_SITESABUN\" type=\"STRING\" size=\"256\"/><Column id=\"NO_SITETEL\" type=\"STRING\" size=\"256\"/><Column id=\"RM_BIDREMARK\" type=\"STRING\" size=\"256\"/><Column id=\"RM_REMARK\" type=\"STRING\" size=\"256\"/><Column id=\"YN_EXPLAIN\" type=\"STRING\" size=\"256\"/><Column id=\"ONOFF_EXPLAIN\" type=\"STRING\" size=\"256\"/><Column id=\"AT_SITEEXPLAIN\" type=\"STRING\" size=\"256\"/><Column id=\"DT_EXPLAIN\" type=\"STRING\" size=\"256\"/><Column id=\"DT_EXPLAIN_GONGO\" type=\"STRING\" size=\"256\"/><Column id=\"DT_BIDMAGAM\" type=\"STRING\" size=\"256\"/><Column id=\"DT_BIDMAGAM_GONGO\" type=\"STRING\" size=\"256\"/><Column id=\"TY_BID\" type=\"STRING\" size=\"256\"/><Column id=\"DS_BID_SUCCESS\" type=\"STRING\" size=\"256\"/><Column id=\"ONOFF\" type=\"STRING\" size=\"256\"/><Column id=\"ID_BIDCOORDI\" type=\"STRING\" size=\"256\"/><Column id=\"NM_BIDCOORDI\" type=\"STRING\" size=\"256\"/><Column id=\"NO_BIDCOORDITEL\" type=\"STRING\" size=\"256\"/><Column id=\"EM_BIDCOORDI\" type=\"STRING\" size=\"256\"/><Column id=\"ID_BIDDAM1\" type=\"STRING\" size=\"256\"/><Column id=\"NM_BIDDAM1\" type=\"STRING\" size=\"256\"/><Column id=\"NO_BIDDAM1TEL\" type=\"STRING\" size=\"256\"/><Column id=\"EM_BIDDAM1\" type=\"STRING\" size=\"256\"/><Column id=\"ID_BIDDAM2\" type=\"STRING\" size=\"256\"/><Column id=\"NM_BIDDAM2\" type=\"STRING\" size=\"256\"/><Column id=\"NO_BIDDAM2TEL\" type=\"STRING\" size=\"256\"/><Column id=\"EM_BIDDAM2\" type=\"STRING\" size=\"256\"/><Column id=\"ID_QUESTION\" type=\"STRING\" size=\"256\"/><Column id=\"NM_QUESTION\" type=\"STRING\" size=\"256\"/><Column id=\"NO_QUESTIONTEL\" type=\"STRING\" size=\"256\"/><Column id=\"EM_QUESTION\" type=\"STRING\" size=\"256\"/><Column id=\"ID_INSERT\" type=\"STRING\" size=\"256\"/><Column id=\"NM_INSERT\" type=\"STRING\" size=\"256\"/><Column id=\"DT_INSERT\" type=\"STRING\" size=\"256\"/><Column id=\"ID_UPDATE\" type=\"STRING\" size=\"256\"/><Column id=\"NM_UPDATE\" type=\"STRING\" size=\"256\"/><Column id=\"DT_UPDATE\" type=\"STRING\" size=\"256\"/><Column id=\"GW_STATUS1\" type=\"STRING\" size=\"256\"/><Column id=\"DS_STATUS1\" type=\"STRING\" size=\"256\"/><Column id=\"TY_BIDSTATUS\" type=\"STRING\" size=\"256\"/><Column id=\"DS_BIDSTATUS\" type=\"STRING\" size=\"256\"/><Column id=\"CT_HOUSEHOLDS\" type=\"BIGDECIMAL\" size=\"256\"/><Column id=\"RT_CONTGUARANTEE\" type=\"BIGDECIMAL\" size=\"256\"/><Column id=\"RT_ASGUARANTEE\" type=\"BIGDECIMAL\" size=\"256\"/><Column id=\"DT_ASFROMTO\" type=\"STRING\" size=\"256\"/><Column id=\"CT_JICHAE\" type=\"INT\" size=\"256\"/><Column id=\"TY_RETIRE_BUGEUM\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Div("divData","0","0",null,null,"0","0",null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_cssclass("div_DATA_Bg");
            obj.set_text("");
            this.addChild(obj.name, obj);

            obj = new Static("staTITLE","0","0","100%","30",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("0");
            obj.set_text("재입찰");
            obj.set_cssclass("sta_TITLE_Bg");
            obj.set_textAlign("left");
            this.divData.addChild(obj.name, obj);

            obj = new Static("staCD_SITE","0","40","87","30",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("1");
            obj.set_text("현장코드");
            obj.set_cssclass("sta_WF_tablelabel");
            obj.set_textAlign("left");
            this.divData.addChild(obj.name, obj);

            obj = new Static("staNO_BID","0","staCD_SITE:-1","87","30",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("2");
            obj.set_text("입찰번호");
            obj.set_cssclass("sta_WF_tablelabel");
            obj.set_textAlign("left");
            this.divData.addChild(obj.name, obj);

            obj = new Static("staTY_WORK","0","staNO_BID:-1","87","30",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("4");
            obj.set_text("유형");
            obj.set_cssclass("sta_WF_tablelabel");
            obj.set_textAlign("left");
            this.divData.addChild(obj.name, obj);

            obj = new Static("staDT_BIDMAGAM_PRE","0","staTY_WORK:-1","87","30",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("3");
            obj.set_text("현재");
            obj.set_cssclass("sta_WF_tablelabel");
            this.divData.addChild(obj.name, obj);

            obj = new Static("staDT_BIDMAGAM","0","staDT_BIDMAGAM_PRE:-1","87","30",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("5");
            obj.set_text("변경");
            obj.set_cssclass("sta_WF_tablelabel");
            this.divData.addChild(obj.name, obj);

            obj = new Static("staDS_REASON","0","staDT_BIDMAGAM:-1","87","90",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("6");
            obj.set_text("사유");
            obj.set_cssclass("sta_WF_tablelabel");
            obj.set_textAlign("left");
            this.divData.addChild(obj.name, obj);

            obj = new Static("staBg1","staCD_SITE:-1","40",null,"30","0%",null,null,null,null,null,this.divData.form);
            obj.set_taborder("7");
            obj.set_cssclass("sta_WF_tablebg");
            this.divData.addChild(obj.name, obj);

            obj = new Static("staBg2","86","69",null,"31","0.00%",null,null,null,null,null,this.divData.form);
            obj.set_taborder("8");
            obj.set_cssclass("sta_WF_tablebg");
            this.divData.addChild(obj.name, obj);

            obj = new Static("staBg3","staTY_WORK:-1","staBg2:-2",null,"30","0.00%",null,null,null,null,null,this.divData.form);
            obj.set_taborder("9");
            obj.set_cssclass("sta_WF_tablebg");
            this.divData.addChild(obj.name, obj);

            obj = new Static("staBg4","staDT_BIDMAGAM_PRE:-1","staBg3:-1",null,"30","0%",null,null,null,null,null,this.divData.form);
            obj.set_taborder("10");
            obj.set_cssclass("sta_WF_tablebg");
            this.divData.addChild(obj.name, obj);

            obj = new Static("staBg5","staDT_BIDMAGAM:-1","staBg4:-1",null,"31","0.00%",null,null,null,null,null,this.divData.form);
            obj.set_taborder("11");
            obj.set_cssclass("sta_WF_tablebg");
            this.divData.addChild(obj.name, obj);

            obj = new Static("staBg6","86","185",null,"90","0.00%",null,null,null,null,null,this.divData.form);
            obj.set_taborder("12");
            obj.set_cssclass("sta_WF_tablebg");
            this.divData.addChild(obj.name, obj);

            obj = new Edit("edtCD_SITE","staCD_SITE:5","staTITLE:15","90","20",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("13");
            obj.set_readonly("true");
            obj.set_maxlength("50");
            this.divData.addChild(obj.name, obj);

            obj = new Edit("edtDS_SITE","edtCD_SITE:5","staTITLE:15",null,"20","5",null,null,null,null,null,this.divData.form);
            obj.set_taborder("14");
            obj.set_readonly("true");
            obj.set_maxlength("50");
            this.divData.addChild(obj.name, obj);

            obj = new Edit("edtNO_BID","staNO_BID:5","edtCD_SITE:10","90","20",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("15");
            obj.set_readonly("true");
            obj.set_maxlength("50");
            this.divData.addChild(obj.name, obj);

            obj = new Edit("edtDS_SUBCON","edtNO_BID:5","edtCD_SITE:10",null,"20","5",null,null,null,null,null,this.divData.form);
            obj.set_taborder("16");
            obj.set_readonly("true");
            obj.set_maxlength("50");
            this.divData.addChild(obj.name, obj);

            obj = new Combo("ccboTY_WORK","staTY_WORK:5","edtNO_BID:9",null,"20","5",null,null,null,null,null,this.divData.form);
            obj.set_taborder("17");
            obj.set_innerdataset("dsTY_WORK");
            obj.set_codecolumn("CD_CODE");
            obj.set_datacolumn("DS_CODE");
            this.divData.addChild(obj.name, obj);

            obj = new Calendar("ctclDT_BIDMAGAM_PRE","staDT_BIDMAGAM_PRE:5","ccboTY_WORK:9","100","20",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("18");
            obj.set_dateformat("yyyy-MM-dd");
            obj.set_editformat("yyyyMMdd");
            obj.set_autoselect("true");
            obj.set_value("");
            obj.set_readonly("true");
            this.divData.addChild(obj.name, obj);

            obj = new Edit("edtDT_BIDMAGAM_PRE_HOUR","ctclDT_BIDMAGAM_PRE:5","ccboTY_WORK:9","60","20",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("19");
            obj.set_readonly("true");
            this.divData.addChild(obj.name, obj);

            obj = new Static("staDT_BIDMAGAM_PRE_HOUR","edtDT_BIDMAGAM_PRE_HOUR:3","ccboTY_WORK:9","20","20",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("20");
            obj.set_text("시");
            this.divData.addChild(obj.name, obj);

            obj = new Edit("edtDT_BIDMAGAM_PRE_MIN","staDT_BIDMAGAM_PRE_HOUR:3","ccboTY_WORK:9","60","20",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("21");
            obj.set_readonly("true");
            this.divData.addChild(obj.name, obj);

            obj = new Static("staDT_BIDMAGAM_PRE_MIN","edtDT_BIDMAGAM_PRE_MIN:3","ccboTY_WORK:9","20","20",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("22");
            obj.set_text("분");
            this.divData.addChild(obj.name, obj);

            obj = new Calendar("ctclDT_BIDMAGAM","staDT_BIDMAGAM:5","ctclDT_BIDMAGAM_PRE:9","100","20",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("23");
            obj.set_dateformat("yyyy-MM-dd");
            obj.set_editformat("yyyyMMdd");
            obj.set_autoselect("true");
            obj.set_value("");
            this.divData.addChild(obj.name, obj);

            obj = new Combo("ccboDT_BIDMAGAM_HOUR","ctclDT_BIDMAGAM:5","ctclDT_BIDMAGAM_PRE:9","60","20",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("24");
            obj.set_innerdataset("dsHOUR");
            obj.set_codecolumn("CD_CODE");
            obj.set_datacolumn("DS_CODE");
            obj.set_text("00");
            obj.set_value("00");
            obj.set_index("0");
            this.divData.addChild(obj.name, obj);

            obj = new Static("staDT_BIDMAGAM_HOUR","ccboDT_BIDMAGAM_HOUR:3","staDT_BIDMAGAM_PRE:5","20","20",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("25");
            obj.set_text("시");
            this.divData.addChild(obj.name, obj);

            obj = new Combo("ccboDT_BIDMAGAM_MIN","staDT_BIDMAGAM_HOUR:3","ctclDT_BIDMAGAM_PRE:9","60","20",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("26");
            obj.set_innerdataset("dsMINUTE");
            obj.set_codecolumn("CD_CODE");
            obj.set_datacolumn("DS_CODE");
            obj.set_text("00");
            obj.set_value("00");
            obj.set_index("0");
            this.divData.addChild(obj.name, obj);

            obj = new Static("staDT_BIDMAGAM_MIN","ccboDT_BIDMAGAM_MIN:3","staDT_BIDMAGAM_PRE:5","20","20",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("27");
            obj.set_text("분");
            this.divData.addChild(obj.name, obj);

            obj = new TextArea("edtDS_FALLREASON","staDS_REASON:5","ctclDT_BIDMAGAM:9",null,"80","5",null,null,null,null,null,this.divData.form);
            obj.set_taborder("28");
            this.divData.addChild(obj.name, obj);

            obj = new Button("btnOk","136","300","62","20",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("29");
            obj.set_text("확인");
            this.divData.addChild(obj.name, obj);

            obj = new Button("btnCancel","201","300","60","20",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("30");
            obj.set_text("취소");
            this.divData.addChild(obj.name, obj);

            obj = new Button("btnOk00","5","300","128","20",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("31");
            obj.set_text("재입찰/유찰첨부파일");
            obj.set_visible("false");
            this.divData.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this
            obj = new Layout("default","",this._adjust_width,this._adjust_height,this,function(p){});
            this.addLayout(obj.name, obj);
            
            // BindItem Information
            obj = new BindItem("item0","divData.form.edtCD_SITE","value","dsData","CD_SITE");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item1","divData.form.edtDS_SITE","value","dsData","DS_SITE");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item2","divData.form.edtNO_BID","value","dsData","NO_BID");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item3","divData.form.edtDS_SUBCON","value","dsData","DS_SUBCON");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item4","divData.form.ccboTY_WORK","value","dsData","TY_WORK");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item5","divData.form.edtDS_FALLREASON","value","dsData","DS_REASON");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item6","divData.form.ctclDT_BIDMAGAM_PRE","value","dsData","DT_BIDMAGAM_PRE");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item7","divData.form.edtDT_BIDMAGAM_PRE_HOUR","value","dsData","DT_BIDMAGAM_PRE_HOUR");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item8","divData.form.edtDT_BIDMAGAM_PRE_MIN","value","dsData","DT_BIDMAGAM_PRE_MIN");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item9","divData.form.ctclDT_BIDMAGAM","value","dsData","DT_BIDMAGAM");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item10","divData.form.ccboDT_BIDMAGAM_HOUR","value","dsData","DT_BIDMAGAM_HOUR");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item11","divData.form.ccboDT_BIDMAGAM_MIN","value","dsData","DT_BIDMAGAM_MIN");
            this.addChild(obj.name, obj);
            obj.bind();
            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script
        this.addIncludeScript("DCB_YOUCHALDLG_EPS.xfdl","lib::libCommon.xjs");
        this.registerScript("DCB_YOUCHALDLG_EPS.xfdl", function() {
        this.executeIncludeScript("lib::libCommon.xjs"); /*include "lib::libCommon.xjs"*/;
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

        	// 이전 화면에서 데이터 받기.
        	this.dsData.setColumn(0, "CD_SITE", this.getOwnerFrame().CD_SITE);
        	this.dsData.setColumn(0, "DS_SITE", this.getOwnerFrame().DS_SITE);
        	this.dsData.setColumn(0, "NO_BID", this.getOwnerFrame().NO_BID);
        	this.dsData.setColumn(0, "DS_SUBCON", this.getOwnerFrame().DS_SUBCON);
        	this.dsData.setColumn(0, "CD_SYSTEM", this.getOwnerFrame().CD_SYSTEM);

        	this.dsData.setColumn(0, "DT_BIDMAGAM_HOUR", 16);
        	this.dsData.setColumn(0, "DT_BIDMAGAM_MIN", "00");

        	if(!this.gfnIsNull(this.dsData.getColumn(0, "NO_BID")))
        	{
        		this.fnSelect();
        	}
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

        };

        /************************************************************************
         * 이벤트 설정
         ************************************************************************/
        this.fnSetEvent = function() {

        };

        /************************************************************************
         * 파라미터 설정
         ************************************************************************/
        this.fnSetParameter = function() {
        	this.dsMagam = new Dataset();
        	this.dsMagam.addColumn("NO_BID", "string");

        	this.dsSave = new Dataset();
        	this.dsSave.addColumn("CD_SITE", "string");
        	this.dsSave.addColumn("NO_BID", "string");
        	this.dsSave.addColumn("DS_REASON", "string");
        	this.dsSave.addColumn("DS_REMARK", "string");
        	this.dsSave.addColumn("TY_WORK", "string");
        	this.dsSave.addColumn("YN_SMS", "string");
        	this.dsSave.addColumn("YN_MAIL", "string");
        	this.dsSave.addColumn("DT_ONLINEMAGAM", "string");
        	this.dsSave.addColumn("ID_USER", "string");

        	this.dsSendSms = new Dataset();
        	this.dsSendSms.addColumn("NO_BID", "string");
        	this.dsSendSms.addColumn("TY_GUBUN", "string");
        	this.dsSendSms.addColumn("CD_CODE", "string");

        	this.dsAppParam = new Dataset();
        	this.dsAppParam.addColumn("CD_SITE", "string");
        	this.dsAppParam.addColumn("NO_BID", "string");
        	this.dsAppParam.addColumn("URL", "string");
        }

        /************************************************************************
         * 컨트롤 이벤트
         ************************************************************************/
         /*
          *	조회 버튼
          */
        this.fnSelect = function() {
        	this.dsMagam.clearData();
        	this.dsMagam.addRow();

        	this.dsMagam.setColumn(0, "NO_BID", this.dsData.getColumn(0, "NO_BID"));

        	var strSvcId    = "select";
        	var strSvcType  = "grid";
        	var inProc		= "_dsProc";
        	var inData      = "select=dsMagam";
        	var outData     = "dsDT_MAGAM=select0";
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
        /************************************************************************
         * Validate
         ************************************************************************/
        this.fnSaveValidate = function()
        {
        	var validate = true;
        	if(this.dsData.getColumn(0, "TY_WORK") != "04") {
        		var dt_onlinemagam_pre = this.dsData.getColumn(0, "DT_BIDMAGAM_PRE") + this.dsData.getColumn(0, "DT_BIDMAGAM_PRE_HOUR") + this.dsData.getColumn(0, "DT_BIDMAGAM_PRE_MIN");
        		var dt_onlinemagam = this.dsData.getColumn(0, "DT_BIDMAGAM") + this.dsData.getColumn(0, "DT_BIDMAGAM_HOUR") + this.dsData.getColumn(0, "DT_BIDMAGAM_MIN");

        		if(nexacro.toNumber(dt_onlinemagam_pre) > nexacro.toNumber(dt_onlinemagam))
        		{
        			validate = false;
        			this.gfnAlert("변경일자가 현재일자보다 이전일 수는 없습니다.");
        		}
        	}
        	return validate;
        }
        /************************************************************************
         * 콜백 이벤트
         ************************************************************************/
        /*
         *	콜백 처리
         */
        this.fnCallback = function(svcID, errorCode, errorMsg)
        {
        	if( svcID == "select") {
        		if(this.dsDT_MAGAM.rowcount > 0)
        		{
        			var magam = this.dsDT_MAGAM.getColumn(0, "DT_BIDMAGAM");
        			this.dsData.setColumn(0, "DT_BIDMAGAM_PRE", magam.substr(0,8));
        			this.dsData.setColumn(0, "DT_BIDMAGAM_PRE_HOUR", magam.substr(8,2));
        			this.dsData.setColumn(0, "DT_BIDMAGAM_PRE_MIN", magam.substr(10,2));
        			this.dsData.setColumn(0, "DT_BIDMAGAM", magam.substr(0,8));
        			this.dsData.setColumn(0, "CT_BID", this.dsDT_MAGAM.getColumn(0, "CT_BID"));
        		}
        	}
        	else if (svcID == "save") {
        		if(errorCode == 0)
        		{
        			// this.close()가 작동하지 않았고,
        			// 부모의 callback 함수로 데이터를 넘겨주기 위해 작성되었습니다.
        			if(this.dsData.getColumn(0, "YN_SMS") == "Y")
        			{
        				this.fnSendSMS();
        			}
        			else
        			{
        				this.getParentContext().close(true);
        			}
        			//this.fnSelectEPS("RB");
        		}else
        		{
        			this.gfnAlert(errorMsg);
        		}
        	}
        	else if (svcID == "saveYouchal") {
        		if(errorCode == 0)
        		{
        			this.fnApp_callback(svcID, true);
        		}
        	}
        	else if(svcID == "esp")
        	{
        		if(errorCode == 0)
        		{
        			this.getParentContext().close(true);
        		}
        		else
        		{
        			this.gfnAlert(errorMsg);
        		}
        	}
        	else if (svcID == "send_sms") {
        		if(errorCode == 0)
        		{
        			this.getParentContext().close(true);
        		}
        		else
        		{
        			this.gfnAlert(errorMsg);
        		}
        	}
        	else if(svcID == "appChk")
        	{
        		if (errorCode == 0)
        		{
        			this.fnAppSelect();
        		}
        		else
        		{
        			this.gfnAlert(errorMsg);
        		}
        	}
        	else if(svcID == "appSelect") {
        		if (errorCode == 0)
        		{
        			this.fnAppOpen();
        		}
        		else
        		{
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
        // 확인 버튼 클릭
        this.divData_btnOk_onclick = function(obj,e)
        {
        	if(!this.fnSaveValidate()) return;

        	var nData = this.dsData.rowposition;
        	var sTY_WORK = this.dsData.getColumn(nData, "TY_WORK");

        	if(sTY_WORK == "02")
        	{
        		var msg = "유찰결재의뢰를 진행하시겠습니까?";
        		this.gfnConfirm(msg, "fnApp_before_callback", "");
        	}
        	else
        	{
        		this.dsSave.clearData();
        		var nrow = this.dsSave.addRow();

        		var dt_onlinemagam = this.dsData.getColumn(0, "DT_BIDMAGAM") + this.dsData.getColumn(0, "DT_BIDMAGAM_HOUR") + this.dsData.getColumn(0, "DT_BIDMAGAM_MIN");

        		this.dsSave.setColumn(nrow, "CD_SITE", this.dsData.getColumn(0, "CD_SITE"));
        		this.dsSave.setColumn(nrow, "NO_BID", this.dsData.getColumn(0, "NO_BID"));
        		this.dsSave.setColumn(nrow, "DS_REASON", this.dsData.getColumn(0, "DS_REASON"));
        		this.dsSave.setColumn(nrow, "TY_WORK", this.dsData.getColumn(0, "TY_WORK"));
        		this.dsSave.setColumn(nrow, "YN_SMS", this.dsData.getColumn(0, "YN_SMS"));
        		this.dsSave.setColumn(nrow, "YN_MAIL", this.dsData.getColumn(0, "YN_MAIL"));
        		this.dsSave.setColumn(nrow, "DT_ONLINEMAGAM", dt_onlinemagam);
        		this.dsSave.setColumn(nrow, "ID_USER", this.AuthClient.ID_USER);

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
        	}
        };

        // 취소 버튼 클릭
        this.divData_btnCancel_onclick = function(obj,e)
        {
        	// this.close()가 작동하지 않았고,
        	// 부모의 callback 함수로 데이터를 넘겨주기 위해 작성되었습니다.
        	this.getParentContext().close(false);
        };

        this.fnSetCombo = function()
        {
        	this.dsCombo = new Dataset();
        	this.dsCombo.addColumn("CD_SYSTEM", "string");
        	this.dsCombo.addColumn("CD_TYPE", "string");

        	var nrow = this.dsCombo.addRow();
        	this.dsCombo.setColumn(0, "CD_SYSTEM", "DC");
        	this.dsCombo.setColumn(0, "CD_TYPE", "64");

        	var strSvcId    = "combo";
        	var strSvcType  = "select";
        	var inProc		= "_dsProc";
        	var inData      = "combo=dsCombo";
        	var outData     = "dsTY_WORK=combo0";
        	var strArg      = "";
        	var callBackFnc = "fnCallback";

        	this.gfnTransaction( strSvcId , 	// transaction을 구분하기 위한 svc id값
        						strSvcType , 	// transaction을 요청할 구분
        						inProc,			// Procedure 정보 Dataset 이름
        						inData , 		// 입력값으로 보낼 dataset id , a=b형태로 실제이름과 입력이름을 매칭
        						outData , 		// 처리결과값으로 받을 dataset id, a=b형태로 실제이름과 입력이름을 매칭
        						strArg, 		// 입력값으로 보낼 arguments, strFormData="20120607"
        						callBackFnc); // 통신방법 정의 [생략가능]
        }

        this.fnSendSMS = function()
        {
        	this.dsSendSms.clearData();
        	var nrow = this.dsSendSms.addRow();

        	this.dsSendSms.setColumn(nrow, "NO_BID", this.dsData.getColumn(0, "NO_BID"));
        	this.dsSendSms.setColumn(nrow, "TY_GUBUN", "S");
        	this.dsSendSms.setColumn(nrow, "CD_CODE", "DC04");

        	var strSvcId    = "send_sms";
        	var strSvcType  = "select";
        	var inProc		= "_dsProc";
        	var inData      = "send_sms=dsSendSms";
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

        }

        //
        // this.fnSelectEPS = function(lv_app) {
        //
        // 	this.dsEPS = new Dataset();
        //
        // 	this._dsProcEPS = new Dataset();
        // 	this._dsProcEPS.addColumn("TARGET", "string");
        // 	this._dsProcEPS.addColumn("SP", "string");
        //
        // 	this._dsProcEPS.addRow();
        // 	this._dsProcEPS.setColumn(0, "TARGET", "eps");
        // 	this._dsProcEPS.setColumn(0, "SP", "DZZPR_EPS_BID_SAP_MIDDLE_POPUP_SELECT");
        //
        // 	this.dsSelectEPS = new Dataset();
        // 	this.dsSelectEPS.addColumn("NO_BID", "string");		// ERP발주(입찰)번호
        // 	this.dsSelectEPS.addColumn("YN_UNION", "string");	// 통합입찰여부
        // 	this.dsSelectEPS.addColumn("ID_USER", "string");
        //
        // 	this.dsSelectEPS.addRow();
        //
        // 	this.dsSelectEPS.setColumn(0, "NO_BID", this.dsData.getColumn(0, "NO_BID"));
        // 	this.dsSelectEPS.setColumn(0, "YN_UNION", "N");
        // 	this.dsSelectEPS.setColumn(0, "ID_USER", this.AuthClient.ID_USER);
        //
        // 	var strSvcId    = "eps";
        // 	var strSvcType  = "select";
        // 	var inProc		= "_dsProcEPS";
        // 	var inData      = "eps=dsSelectEPS";
        // 	var outData     = "dsEPS=eps0";
        // 	var strArg      = "P_APP=" + lv_app;
        // 	var callBackFnc = "fnCallbackEPS";
        //
        // 	this.gfnTransaction( strSvcId , 	// transaction을 구분하기 위한 svc id값
        // 						strSvcType , 	// transaction을 요청할 구분
        // 						inProc,			// Procedure 정보 Dataset 이름
        // 						inData , 		// 입력값으로 보낼 dataset id , a=b형태로 실제이름과 입력이름을 매칭
        // 						outData , 		// 처리결과값으로 받을 dataset id, a=b형태로 실제이름과 입력이름을 매칭
        // 						strArg, 			// 입력갑스로 보낼 arguments, strFormData="20120607"
        // 						callBackFnc); // 통신방법 정의 [생략가능]
        //
        // }
        //
        // this.fnCallbackEPS = function(svcID, errorCode, errorMsg, strArg)
        // {
        // 	if (errorCode!=0) {
        // 		this.gfnAlert(errorMsg);
        // 		return;
        // 	}
        //
        // 	var url = "";
        // 	if (svcID == "eps") {
        // 		url = "/buyer/bid/pop/bid_sap_middle_pop.do";
        // 	}
        // 	else if (svcID == "eps2") {
        // 		url = "/buyer/bid/open_su_nosave.do";
        // 	}
        //
        // 	if(this.dsEPS.rowcount > 0) {
        // 		var arr_param = [];
        //
        // 		arr_param.push(strArg);
        // 		for(var c = 0; c < this.dsEPS.colinfos.length; c++) {
        // 			var colid = this.dsEPS.colinfos[c].name;
        // 			var val = this.dsEPS.getColumn(0, colid);
        // 			if(val==null) val="";
        // 			arr_param.push(colid + "=" + val);
        // 		}
        //
        // 		this.gfnOpenEPS(url, arr_param.join('&'));
        // 	}
        // };

        this.fnApp_before_callback = function(strId, val)
        {
        	if(val == true)
        	{
        		this.dsSave.clearData();
        		var nrow = this.dsSave.addRow();

        		this.dsSave.setColumn(nrow, "CD_SITE", this.dsData.getColumn(0, "CD_SITE"));
        		this.dsSave.setColumn(nrow, "NO_BID", this.dsData.getColumn(0, "NO_BID"));
        		this.dsSave.setColumn(nrow, "TY_WORK", "DC05");
        		this.dsSave.setColumn(nrow, "DS_REMARK", this.dsData.getColumn(0, "DS_REASON"));

        		var strSvcId    = "saveYouchal";
        		var strSvcType  = "save";
        		var inProc		= "_dsProc";
        		var inData      = "saveYouchal=dsSave";
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
        	}
        }

        this.fnApp_callback = function(strId, val)
        {
        	if(val == true)
        	{
        		this.dsAppParam.clearData();
        		var nrow = this.dsAppParam.addRow();

        		this.dsAppParam.setColumn(nrow, "CD_SITE", this.dsData.getColumn(0, "CD_SITE"));
        		this.dsAppParam.setColumn(nrow, "NO_BID", this.dsData.getColumn(0, "NO_BID"));

        		if (this.dsAppParam.rowcount == 0) return;

        		var strSvcId    = "appChk";
        		var strSvcType  = "save";
        		var inProc		= "_dsProc";
        		var inData      = "appChk=dsAppParam";
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
        }

        this.fnAppSelect = function()
        {
        	var url = this.gfnGetServerUrl();

        	if(url == "http://localhost:8080")
        	{
        		url += "/erp";
        	}

        	this.dsAppParam.setColumn(0, "URL", url);

        	var strSvcId    = "appSelect";
        	var strSvcType  = "select";
        	var inProc		= "_dsProc";
        	var inData      = "appSelect=dsAppParam";
        	var outData     = "dsAppList=appSelect0";
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

        this.fnAppOpen = function()
        {
        	if(this.dsAppList.rowcount > 0)
        	{
        		var vCD_SYSTEM = this.dsData.getColumn(0, "CD_SYSTEM");

        		var sApType = "";
        		var sTitle  = "";

        		var ds_site = this.dsData.getColumn(0, "DS_SITE");
        		var ds_cont = this.dsData.getColumn(0, "DS_SUBCON");

        		if(vCD_SYSTEM == "DM")
        		{
        			sApType = "DM05";
        			sTitle  = "[유찰품의/자재]"+ ds_site + "/" + ds_cont;
        		}
        		else
        		{
        			sApType = "DC05";
        			sTitle  = "[유찰품의/외주]"+ ds_site + "/" + ds_cont;
        		}

        		var sRef01  = this.dsData.getColumn(0, "CD_SITE");
        		var sRef02  = this.dsData.getColumn(0, "NO_BID");
        		var sRef03  = "";
        		var sRef04  = "";
        		var oParam  = this.gfnDataSetToJson(this.dsAppList, this.dsAppList.rowposition)

        		console.info("================ oParam");
        		console.info(oParam);

        		this.gfnApprove(sApType, sTitle, sRef01, sRef02, "", "", oParam, "fnAprvDialogCallback");
        	}
        }

        this.fnAprvDialogCallback = function(svcID, value) {
        	// 리턴값
        	if(value){
        		// 결재완료, 결재취소, 결재상신 후에는 재조회를 한다
        		this.FormBtns.Select.click();
        	}
        };

        this.divData_btnOk00_onclick = function(obj,e)
        {
        	var strKey = this.dsData.getColumn(0, "NO_BID") + this.dsData.getColumn(0, "CT_BID");

        	var fileManager = {};
        	fileManager.CD_GUBUN = "DC59";
        	fileManager.CD_DIR = [strKey];
        	fileManager.IS_READONLY = false;
        	this.gfnFileManager(fileManager, "fnFileCallback");
        };

        this.dsData_onvaluechanged = function(obj,e)
        {
        	if(e.columnid == "TY_WORK") {
        		if(e.newvalue == "04") {
        			this.divData.form.ctclDT_BIDMAGAM.set_enable(false);
        			this.divData.form.ccboDT_BIDMAGAM_HOUR.set_enable(false);
        			this.divData.form.ccboDT_BIDMAGAM_MIN.set_enable(false);

        			this.dsData.setColumn(0, "DT_BIDMAGAM", "");
        			this.dsData.setColumn(0, "DT_BIDMAGAM_HOUR", "");
        			this.dsData.setColumn(0, "DT_BIDMAGAM_MIN", "");
        		} else {
        			this.divData.form.ctclDT_BIDMAGAM.set_enable(true);
        			this.divData.form.ccboDT_BIDMAGAM_HOUR.set_enable(true);
        			this.divData.form.ccboDT_BIDMAGAM_MIN.set_enable(true);

        			var magam = this.dsDT_MAGAM.getColumn(0, "DT_BIDMAGAM");
        			this.dsData.setColumn(0, "DT_BIDMAGAM", magam.substr(0,8));
        			this.dsData.setColumn(0, "DT_BIDMAGAM_HOUR", 16);
        			this.dsData.setColumn(0, "DT_BIDMAGAM_MIN", "00");
        		}
        	}
        };

        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.form_onload,this);
            this.divData.form.staCD_SITE.addEventHandler("onclick",this.divData_staDS_SITE_onclick,this);
            this.divData.form.btnOk.addEventHandler("onclick",this.divData_btnOk_onclick,this);
            this.divData.form.btnCancel.addEventHandler("onclick",this.divData_btnCancel_onclick,this);
            this.divData.form.btnOk00.addEventHandler("onclick",this.divData_btnOk00_onclick,this);
            this.dsData.addEventHandler("onvaluechanged",this.dsData_onvaluechanged,this);
            this.dsAppList.addEventHandler("onvaluechanged",this.dsList_onvaluechanged,this);
        };
        this.loadIncludeScript("DCB_YOUCHALDLG_EPS.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
