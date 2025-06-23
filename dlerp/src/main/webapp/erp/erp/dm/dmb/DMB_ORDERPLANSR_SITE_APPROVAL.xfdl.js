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
            this.set_titletext("하도구매요청서(자재)");
            if (Form == this.constructor)
            {
                this._setFormPosition(1370,990);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("dsList", this);
            obj._setContents("<ColumnInfo><Column id=\"CD_SITE\" type=\"STRING\" size=\"256\"/><Column id=\"DS_SITE\" type=\"STRING\" size=\"256\"/><Column id=\"NO_PR\" type=\"STRING\" size=\"256\"/><Column id=\"NO_HADO\" type=\"STRING\" size=\"256\"/><Column id=\"DS_SUBCON\" type=\"STRING\" size=\"256\"/><Column id=\"TY_SELECT\" type=\"STRING\" size=\"256\"/><Column id=\"RT_TAX\" type=\"BIGDECIMAL\" size=\"256\"/><Column id=\"TY_TAX\" type=\"STRING\" size=\"256\"/><Column id=\"RT_JIBUN\" type=\"INT\" size=\"256\"/><Column id=\"DT_FROM\" type=\"STRING\" size=\"256\"/><Column id=\"DT_TO\" type=\"STRING\" size=\"256\"/><Column id=\"DS_FROMTO\" type=\"STRING\" size=\"256\"/><Column id=\"DT_REQ_SITE\" type=\"STRING\" size=\"256\"/><Column id=\"DT_HQRECEIPT\" type=\"STRING\" size=\"256\"/><Column id=\"DT_HQAPPR\" type=\"STRING\" size=\"256\"/><Column id=\"AM_TT_DOKUB\" type=\"BIGDECIMAL\" size=\"256\"/><Column id=\"AM_TT_SILHENG\" type=\"BIGDECIMAL\" size=\"256\"/><Column id=\"AM_REQUEST\" type=\"BIGDECIMAL\" size=\"256\"/><Column id=\"AM_GONGSA\" type=\"BIGDECIMAL\" size=\"256\"/><Column id=\"UP_PYEONG\" type=\"INT\" size=\"256\"/><Column id=\"CD_VENDOR\" type=\"STRING\" size=\"256\"/><Column id=\"DS_VENDOR\" type=\"STRING\" size=\"256\"/><Column id=\"CD_COSTCLASS\" type=\"STRING\" size=\"256\"/><Column id=\"DS_COSTCLASS\" type=\"STRING\" size=\"256\"/><Column id=\"CD_LICCOST\" type=\"STRING\" size=\"256\"/><Column id=\"DS_LICCOST\" type=\"STRING\" size=\"256\"/><Column id=\"CD_SPECCONST\" type=\"STRING\" size=\"256\"/><Column id=\"CD_AREA\" type=\"STRING\" size=\"256\"/><Column id=\"DS_AREA\" type=\"STRING\" size=\"256\"/><Column id=\"NO_RFQ\" type=\"STRING\" size=\"256\"/><Column id=\"DS_CONTMETHOD\" type=\"STRING\" size=\"256\"/><Column id=\"AREA_SITE\" type=\"INT\" size=\"256\"/><Column id=\"AM_BASIC\" type=\"INT\" size=\"256\"/><Column id=\"YN_PUBLISH_BID\" type=\"STRING\" size=\"256\"/><Column id=\"YN_ATTACH_ILSIK\" type=\"STRING\" size=\"256\"/><Column id=\"YN_HASU\" type=\"STRING\" size=\"256\"/><Column id=\"YN_EXFILE_SEPARATE\" type=\"STRING\" size=\"256\"/><Column id=\"NO_UNION_HADO\" type=\"STRING\" size=\"256\"/><Column id=\"NO_UNION_BID_CONNECT\" type=\"STRING\" size=\"256\"/><Column id=\"YN_UNION_BID\" type=\"STRING\" size=\"256\"/><Column id=\"YN_UNION_BID_ING\" type=\"STRING\" size=\"256\"/><Column id=\"CT_GONGU\" type=\"INT\" size=\"256\"/><Column id=\"NUM_GONGU\" type=\"BIGDECIMAL\" size=\"256\"/><Column id=\"AREA_SITE1\" type=\"BIGDECIMAL\" size=\"256\"/><Column id=\"AREA_SITE2\" type=\"BIGDECIMAL\" size=\"256\"/><Column id=\"AREA_SITE3\" type=\"BIGDECIMAL\" size=\"256\"/><Column id=\"AREA_SITE4\" type=\"BIGDECIMAL\" size=\"256\"/><Column id=\"AREA_SITEALL\" type=\"BIGDECIMAL\" size=\"256\"/><Column id=\"ID_MANAGER\" type=\"BIGDECIMAL\" size=\"256\"/><Column id=\"NM_MANAGER\" type=\"STRING\" size=\"256\"/><Column id=\"NO_MANAGERTEL\" type=\"STRING\" size=\"256\"/><Column id=\"ID_SITESABUN\" type=\"STRING\" size=\"256\"/><Column id=\"NM_SITESABUN\" type=\"STRING\" size=\"256\"/><Column id=\"NO_SITETEL\" type=\"STRING\" size=\"256\"/><Column id=\"RM_BIDREMARK\" type=\"STRING\" size=\"256\"/><Column id=\"RM_REMARK\" type=\"STRING\" size=\"256\"/><Column id=\"YN_EXPLAIN\" type=\"STRING\" size=\"256\"/><Column id=\"ONOFF_EXPLAIN\" type=\"STRING\" size=\"256\"/><Column id=\"AT_SITEEXPLAIN\" type=\"STRING\" size=\"256\"/><Column id=\"DT_EXPLAIN\" type=\"STRING\" size=\"256\"/><Column id=\"DT_EXPLAIN_GONGO\" type=\"STRING\" size=\"256\"/><Column id=\"DT_BIDMAGAM\" type=\"STRING\" size=\"256\"/><Column id=\"DT_BIDMAGAM_GONGO\" type=\"STRING\" size=\"256\"/><Column id=\"TY_BID\" type=\"STRING\" size=\"256\"/><Column id=\"DS_BID_SUCCESS\" type=\"STRING\" size=\"256\"/><Column id=\"ONOFF\" type=\"STRING\" size=\"256\"/><Column id=\"ID_BIDCOORDI\" type=\"STRING\" size=\"256\"/><Column id=\"NM_BIDCOORDI\" type=\"STRING\" size=\"256\"/><Column id=\"NO_PRCOORDITEL\" type=\"STRING\" size=\"256\"/><Column id=\"EM_BIDCOORDI\" type=\"STRING\" size=\"256\"/><Column id=\"ID_BIDDAM1\" type=\"STRING\" size=\"256\"/><Column id=\"NM_BIDDAM1\" type=\"STRING\" size=\"256\"/><Column id=\"NO_PRDAM1TEL\" type=\"STRING\" size=\"256\"/><Column id=\"EM_BIDDAM1\" type=\"STRING\" size=\"256\"/><Column id=\"ID_BIDDAM2\" type=\"STRING\" size=\"256\"/><Column id=\"NM_BIDDAM2\" type=\"STRING\" size=\"256\"/><Column id=\"NO_PRDAM2TEL\" type=\"STRING\" size=\"256\"/><Column id=\"EM_BIDDAM2\" type=\"STRING\" size=\"256\"/><Column id=\"ID_QUESTION\" type=\"STRING\" size=\"256\"/><Column id=\"NM_QUESTION\" type=\"STRING\" size=\"256\"/><Column id=\"NO_QUESTIONTEL\" type=\"STRING\" size=\"256\"/><Column id=\"EM_QUESTION\" type=\"STRING\" size=\"256\"/><Column id=\"ID_INSERT\" type=\"STRING\" size=\"256\"/><Column id=\"NM_INSERT\" type=\"STRING\" size=\"256\"/><Column id=\"DT_INSERT\" type=\"STRING\" size=\"256\"/><Column id=\"ID_UPDATE\" type=\"STRING\" size=\"256\"/><Column id=\"NM_UPDATE\" type=\"STRING\" size=\"256\"/><Column id=\"DT_UPDATE\" type=\"STRING\" size=\"256\"/><Column id=\"GW_STATUS1\" type=\"STRING\" size=\"256\"/><Column id=\"DS_STATUS1\" type=\"STRING\" size=\"256\"/><Column id=\"TY_BIDSTATUS\" type=\"STRING\" size=\"256\"/><Column id=\"DS_BIDSTATUS\" type=\"STRING\" size=\"256\"/><Column id=\"DT_DELIVERY\" type=\"STRING\" size=\"256\"/><Column id=\"NO_CONT\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("_dsProc", this);
            obj._setContents("<ColumnInfo><Column id=\"TARGET\" type=\"STRING\" size=\"256\"/><Column id=\"SP\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"TARGET\">select</Col><Col id=\"SP\">DCBPR_ORDERPLAN_SITE_DM_SELECT</Col></Row><Row><Col id=\"TARGET\">update</Col><Col id=\"SP\">DCBPR_ORDERPLAN_SITE_DM_UPDATE</Col></Row><Row><Col id=\"TARGET\">delete</Col><Col id=\"SP\">DCBPR_ORDERPLAN_SITE_DM_DELETE</Col></Row><Row><Col id=\"TARGET\">d_select</Col><Col id=\"SP\">DCBPR_JOINBID_SITE_SELECT</Col></Row><Row><Col id=\"TARGET\">d_update</Col><Col id=\"SP\">DCBPR_JOINBID_SITE_UPDATE</Col></Row><Row><Col id=\"TARGET\">combo</Col><Col id=\"SP\">DZXPR_COMBO_SELECT</Col></Row><Row><Col id=\"TARGET\">execute</Col><Col id=\"SP\">DCBPR_PREORDERPLAN_APPROVE_GW1_UPDATE</Col></Row><Row><Col id=\"TARGET\">update_attend</Col><Col id=\"SP\">DCBPR_SITE_EXPLAIN_ATTEND_UPDATE</Col></Row><Row><Col id=\"TARGET\">combo</Col><Col id=\"SP\">DZXPR_COMBO_SELECT</Col></Row><Row><Col id=\"TARGET\">execute</Col><Col id=\"SP\">DCBPR_PREORDERPLAN_APPROVE_GW1_UPDATE</Col></Row><Row><Col id=\"TARGET\">select_d</Col><Col id=\"SP\">DCBPR_PRITEM_DX_SELECT</Col></Row><Row><Col id=\"TARGET\">update_d</Col><Col id=\"SP\">DCBPR_PRITEM_DX_UPDATE</Col></Row><Row><Col id=\"TARGET\">insert_po</Col><Col id=\"SP\">DCBPR_PRTOPO_INSERT</Col></Row><Row><Col id=\"TARGET\">appr_select</Col><Col id=\"SP\">DZRPR_AP_STATE_SELECT</Col></Row><Row><Col id=\"TARGET\">aplines</Col><Col id=\"SP\">DZRPR_APPLINES_SELECT</Col></Row><Row><Col id=\"TARGET\">execAppr</Col><Col id=\"SP\">DZZPR_APPROVAL_CALLBACK</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsSearch", this);
            obj._setContents("<ColumnInfo><Column id=\"CD_SITE\" type=\"STRING\" size=\"256\"/><Column id=\"NO_PR\" type=\"STRING\" size=\"256\"/><Column id=\"YN_LINK\" type=\"STRING\" size=\"256\"/><Column id=\"ID_AP\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"CD_SITE\"/><Col id=\"NO_PR\"/><Col id=\"ID_AP\"/><Col id=\"YN_LINK\"/></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsList1", this);
            obj._setContents("");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsTY_SELECT", this);
            obj._setContents("<ColumnInfo><Column id=\"CD_CODE\" type=\"STRING\" size=\"256\"/><Column id=\"DS_CODE\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"CD_CODE\"/><Col id=\"DS_CODE\"/></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsDS_CONTMETHOD", this);
            obj._setContents("<ColumnInfo><Column id=\"CD_CODE\" type=\"STRING\" size=\"256\"/><Column id=\"DS_CODE\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row/></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsTY_TAX", this);
            obj._setContents("<ColumnInfo><Column id=\"CODE\" type=\"STRING\" size=\"256\"/><Column id=\"DATA\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"CODE\">과세</Col><Col id=\"DATA\">과세</Col></Row><Row><Col id=\"CODE\">면세</Col><Col id=\"DATA\">면세</Col></Row><Row><Col id=\"CODE\">공존</Col><Col id=\"DATA\">공존</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsYN_EXPLAIN", this);
            obj._setContents("<ColumnInfo><Column id=\"CODE\" type=\"STRING\" size=\"256\"/><Column id=\"DATA\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"CODE\">Y</Col><Col id=\"DATA\">현설실시</Col></Row><Row><Col id=\"CODE\">N</Col><Col id=\"DATA\">현설없음</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsONOFF_EXPLAIN", this);
            obj._setContents("<ColumnInfo><Column id=\"CD_CODE\" type=\"STRING\" size=\"256\"/><Column id=\"DS_CODE\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsRequired", this);
            obj._setContents("<ColumnInfo><Column id=\"CD_FIELD\" type=\"STRING\" size=\"256\"/><Column id=\"DS_FIELD\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"CD_FIELD\">TY_SELECT</Col><Col id=\"DS_FIELD\">구매유형</Col></Row><Row><Col id=\"CD_FIELD\">DS_CONTMETHOD</Col><Col id=\"DS_FIELD\">계약유형</Col></Row><Row><Col id=\"CD_FIELD\">TY_TAX</Col><Col id=\"DS_FIELD\">과세구분</Col></Row><Row><Col id=\"CD_FIELD\">CD_COSTCLASS</Col><Col id=\"DS_FIELD\">부문</Col></Row><Row><Col id=\"CD_FIELD\">CD_LICCOST</Col><Col id=\"DS_FIELD\">구매품목</Col></Row><Row><Col id=\"CD_FIELD\">DS_SUBCON</Col><Col id=\"DS_FIELD\">구매요청명</Col></Row><Row><Col id=\"CD_FIELD\">TY_BID</Col><Col id=\"DS_FIELD\">선정방법</Col></Row><Row><Col id=\"DS_FIELD\">납기일자</Col><Col id=\"CD_FIELD\">DT_DELIVERY</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsGONGU", this);
            obj._setContents("<ColumnInfo><Column id=\"CD_CODE\" type=\"STRING\" size=\"256\"/><Column id=\"DS_CODE\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"CD_CODE\">0</Col><Col id=\"DS_CODE\">0</Col></Row><Row><Col id=\"CD_CODE\">1</Col><Col id=\"DS_CODE\">1</Col></Row><Row><Col id=\"CD_CODE\">2</Col><Col id=\"DS_CODE\">2</Col></Row><Row><Col id=\"CD_CODE\">3</Col><Col id=\"DS_CODE\">3</Col></Row><Row><Col id=\"CD_CODE\">4</Col><Col id=\"DS_CODE\">4</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsTY_BID", this);
            obj._setContents("<ColumnInfo><Column id=\"CD_CODE\" type=\"STRING\" size=\"256\"/><Column id=\"DS_CODE\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsHOUR", this);
            obj._setContents("<ColumnInfo><Column id=\"CD_CODE\" type=\"STRING\" size=\"256\"/><Column id=\"DS_CODE\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"CD_CODE\">00</Col><Col id=\"DS_CODE\">00</Col></Row><Row><Col id=\"CD_CODE\">01</Col><Col id=\"DS_CODE\">01</Col></Row><Row><Col id=\"CD_CODE\">02</Col><Col id=\"DS_CODE\">02</Col></Row><Row><Col id=\"CD_CODE\">03</Col><Col id=\"DS_CODE\">03</Col></Row><Row><Col id=\"CD_CODE\">04</Col><Col id=\"DS_CODE\">04</Col></Row><Row><Col id=\"CD_CODE\">05</Col><Col id=\"DS_CODE\">05</Col></Row><Row><Col id=\"CD_CODE\">06</Col><Col id=\"DS_CODE\">06</Col></Row><Row><Col id=\"CD_CODE\">07</Col><Col id=\"DS_CODE\">07</Col></Row><Row><Col id=\"CD_CODE\">08</Col><Col id=\"DS_CODE\">08</Col></Row><Row><Col id=\"CD_CODE\">09</Col><Col id=\"DS_CODE\">09</Col></Row><Row><Col id=\"CD_CODE\">10</Col><Col id=\"DS_CODE\">10</Col></Row><Row><Col id=\"CD_CODE\">11</Col><Col id=\"DS_CODE\">11</Col></Row><Row><Col id=\"CD_CODE\">12</Col><Col id=\"DS_CODE\">12</Col></Row><Row><Col id=\"CD_CODE\">13</Col><Col id=\"DS_CODE\">13</Col></Row><Row><Col id=\"CD_CODE\">14</Col><Col id=\"DS_CODE\">14</Col></Row><Row><Col id=\"CD_CODE\">15</Col><Col id=\"DS_CODE\">15</Col></Row><Row><Col id=\"CD_CODE\">16</Col><Col id=\"DS_CODE\">16</Col></Row><Row><Col id=\"CD_CODE\">17</Col><Col id=\"DS_CODE\">17</Col></Row><Row><Col id=\"CD_CODE\">18</Col><Col id=\"DS_CODE\">18</Col></Row><Row><Col id=\"CD_CODE\">19</Col><Col id=\"DS_CODE\">19</Col></Row><Row><Col id=\"CD_CODE\">20</Col><Col id=\"DS_CODE\">20</Col></Row><Row><Col id=\"CD_CODE\">21</Col><Col id=\"DS_CODE\">21</Col></Row><Row><Col id=\"CD_CODE\">22</Col><Col id=\"DS_CODE\">22</Col></Row><Row><Col id=\"CD_CODE\">23</Col><Col id=\"DS_CODE\">23</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsMINUTE", this);
            obj._setContents("<ColumnInfo><Column id=\"CD_CODE\" type=\"STRING\" size=\"256\"/><Column id=\"DS_CODE\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"CD_CODE\">00</Col><Col id=\"DS_CODE\">00</Col></Row><Row><Col id=\"CD_CODE\">05</Col><Col id=\"DS_CODE\">05</Col></Row><Row><Col id=\"CD_CODE\">10</Col><Col id=\"DS_CODE\">10</Col></Row><Row><Col id=\"CD_CODE\">15</Col><Col id=\"DS_CODE\">15</Col></Row><Row><Col id=\"CD_CODE\">20</Col><Col id=\"DS_CODE\">20</Col></Row><Row><Col id=\"CD_CODE\">25</Col><Col id=\"DS_CODE\">25</Col></Row><Row><Col id=\"CD_CODE\">30</Col><Col id=\"DS_CODE\">30</Col></Row><Row><Col id=\"CD_CODE\">35</Col><Col id=\"DS_CODE\">35</Col></Row><Row><Col id=\"CD_CODE\">40</Col><Col id=\"DS_CODE\">40</Col></Row><Row><Col id=\"CD_CODE\">45</Col><Col id=\"DS_CODE\">45</Col></Row><Row><Col id=\"CD_CODE\">50</Col><Col id=\"DS_CODE\">50</Col></Row><Row><Col id=\"CD_CODE\">55</Col><Col id=\"DS_CODE\">55</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsTempTime", this);
            obj._setContents("<ColumnInfo><Column id=\"EXPLAIN_HOUR\" type=\"STRING\" size=\"256\"/><Column id=\"EXPLAIN_MINUTE\" type=\"STRING\" size=\"256\"/><Column id=\"BIDMAGAM_HOUR\" type=\"STRING\" size=\"256\"/><Column id=\"BIDMAGAM_MINUTE\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsListAppr", this);
            obj._setContents("<ColumnInfo><Column id=\"ID_AP\" type=\"STRING\" size=\"256\"/><Column id=\"ID_AP_TYPE\" type=\"STRING\" size=\"256\"/><Column id=\"DS_AP_TYPE\" type=\"STRING\" size=\"256\"/><Column id=\"DS_TITLE\" type=\"STRING\" size=\"256\"/><Column id=\"ST_APPR\" type=\"STRING\" size=\"256\"/><Column id=\"YN_USER\" type=\"STRING\" size=\"256\"/><Column id=\"YN_APP\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsListAplines", this);
            obj.set_useclientlayout("false");
            obj._setContents("");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Div("divSearch","0.0","10.0",null,"46.0","0",null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_cssclass("div_SEARCH_Bg");
            obj.set_formscrolltype("none");
            this.addChild(obj.name, obj);

            obj = new Static("staCD_SITE","0.0","10.0","118.0","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("1");
            obj.set_text("현장코드");
            obj.set_cssclass("sta_WF_SchLabelE");
            this.divSearch.addChild(obj.name, obj);

            obj = new Div("ccfCD_SITE","staCD_SITE:0.0","10.0","250","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.getSetter("CodeFindName").set("DZX_CFSITE");
            obj.getSetter("AfterCDTextChanged").set("ccfCD_SITE_AfterCDTextChanged");
            obj.getSetter("CDTextWidth").set("80");
            obj.set_taborder("1");
            obj.set_url("cmm::cmmCodeFind.xfdl");
            obj.set_enable("false");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("staNO_PR","ccfCD_SITE:0.0","10.0","118.0","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("1");
            obj.set_text("구매요청번호");
            obj.set_cssclass("sta_WF_SchLabelE");
            this.divSearch.addChild(obj.name, obj);

            obj = new Div("ccfNO_PR","staNO_PR:0.0","10.0","250","24.0",null,null,null,"300",null,null,this.divSearch.form);
            obj.getSetter("CodeFindName").set("DWX_CFPR_01");
            obj.getSetter("CDTextWidth").set("100");
            obj.set_taborder("1");
            obj.set_url("cmm::cmmCodeFind.xfdl");
            obj.getSetter("FitToContents").set("true");
            obj.set_enable("false");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("staDS_STATUS1","ccfNO_PR:0.0","10.0","118.0","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("1");
            obj.set_text("발주의뢰");
            obj.set_cssclass("sta_WF_SchLabel");
            this.divSearch.addChild(obj.name, obj);

            obj = new Edit("ctxtDS_STATUS1","staDS_STATUS1:0.0","10.0","100","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("1");
            obj.getSetter("FitToContents").set("true");
            obj.set_value("");
            obj.set_readonly("false");
            obj.set_enable("false");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("staDS_BIDSTATUS","ctxtDS_STATUS1:0.0","10.0","118.0","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("1");
            obj.set_text("입찰진행");
            obj.set_cssclass("sta_WF_SchLabel");
            this.divSearch.addChild(obj.name, obj);

            obj = new Edit("ctxtDS_BIDSTATUS","staDS_BIDSTATUS:0.0","10.0","100","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("1");
            obj.getSetter("FitToContents").set("true");
            obj.set_value("");
            obj.set_readonly("false");
            obj.set_enable("false");
            this.divSearch.addChild(obj.name, obj);

            obj = new Div("divData","0","divSearch:10",null,null,"0","0",null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_cssclass("div_DATA_Bg");
            obj.set_text("");
            this.addChild(obj.name, obj);

            obj = new Div("divDataApprLeft","0","0","700","79",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("4");
            obj.set_background("");
            obj.set_border("1px solid #c9c6c3");
            this.divData.addChild(obj.name, obj);

            obj = new Static("staApprNm","0","4",null,null,"0","0",null,null,null,null,this.divData.form.divDataApprLeft.form);
            obj.set_taborder("0");
            obj.set_text("하도구매요청 품의서(자재)");
            obj.set_textDecoration("none");
            obj.set_background("");
            obj.set_font("normal 20pt/normal \"Arial\"");
            obj.set_textAlign("center");
            this.divData.form.divDataApprLeft.addChild(obj.name, obj);

            obj = new Div("divDataAppr","divDataApprLeft:10","0",null,"80","90",null,null,null,null,null,this.divData.form);
            obj.set_taborder("3");
            this.divData.addChild(obj.name, obj);

            obj = new Grid("objGridAppr","0","0",null,null,"0","0",null,null,null,null,this.divData.form.divDataAppr.form);
            obj.set_taborder("0");
            obj._setContents("");
            this.divData.form.divDataAppr.addChild(obj.name, obj);

            obj = new Static("sta01","0","divDataAppr:10","950","22",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("7");
            obj.set_text("선정 및 승인사항");
            obj.set_cssclass("sta_TITLE_Bg");
            this.divData.addChild(obj.name, obj);

            obj = new Div("divData01","11","sta01:10",null,"108","0",null,null,null,null,null,this.divData.form);
            obj.set_taborder("1");
            this.divData.addChild(obj.name, obj);

            obj = new Static("sta001","0","0","110","30",null,null,null,null,null,null,this.divData.form.divData01.form);
            obj.set_taborder("0");
            obj.set_text("구매유형");
            obj.set_cssclass("sta_WF_tablelabel");
            obj.set_textDecoration("underline");
            this.divData.form.divData01.addChild(obj.name, obj);

            obj = new Static("sta002","0","sta001:-1","110","30",null,null,null,null,null,null,this.divData.form.divData01.form);
            obj.set_taborder("1");
            obj.set_text("구매요청번호");
            obj.set_cssclass("sta_WF_tablelabel");
            this.divData.form.divData01.addChild(obj.name, obj);

            obj = new Static("sta003","0","sta002:-1","110","30",null,null,null,null,null,null,this.divData.form.divData01.form);
            obj.set_taborder("2");
            obj.set_text("현장코드");
            obj.set_cssclass("sta_WF_tablelabel");
            this.divData.form.divData01.addChild(obj.name, obj);

            obj = new Static("sta101","sta001:-1","0","181","30",null,null,null,null,null,null,this.divData.form.divData01.form);
            obj.set_taborder("3");
            obj.set_cssclass("sta_WF_tablebg");
            this.divData.form.divData01.addChild(obj.name, obj);

            obj = new Static("sta102","sta002:-1","sta101:-1","181","30",null,null,null,null,null,null,this.divData.form.divData01.form);
            obj.set_taborder("4");
            obj.set_cssclass("sta_WF_tablebg");
            this.divData.form.divData01.addChild(obj.name, obj);

            obj = new Static("sta103","sta003:-1","sta102:-1","491","30",null,null,null,null,null,null,this.divData.form.divData01.form);
            obj.set_taborder("5");
            obj.set_cssclass("sta_WF_tablebg");
            this.divData.form.divData01.addChild(obj.name, obj);

            obj = new Static("sta201","sta101:-1","0","131","30",null,null,null,null,null,null,this.divData.form.divData01.form);
            obj.set_taborder("6");
            obj.set_text("계약유형");
            obj.set_cssclass("sta_WF_tablelabel");
            obj.set_textDecoration("underline");
            this.divData.form.divData01.addChild(obj.name, obj);

            obj = new Static("sta202","sta102:-1","sta201:-1","131","30",null,null,null,null,null,null,this.divData.form.divData01.form);
            obj.set_taborder("7");
            obj.set_text("면세율");
            obj.set_cssclass("sta_WF_tablelabel");
            this.divData.form.divData01.addChild(obj.name, obj);

            obj = new Static("sta301","sta201:-1","0","181","30",null,null,null,null,null,null,this.divData.form.divData01.form);
            obj.set_taborder("8");
            obj.set_cssclass("sta_WF_tablebg");
            this.divData.form.divData01.addChild(obj.name, obj);

            obj = new Static("sta302","sta202:-1","sta301:-1","181","30",null,null,null,null,null,null,this.divData.form.divData01.form);
            obj.set_taborder("9");
            obj.set_cssclass("sta_WF_tablebg");
            this.divData.form.divData01.addChild(obj.name, obj);

            obj = new Static("sta401","sta301:-1","0","120","30",null,null,null,null,null,null,this.divData.form.divData01.form);
            obj.set_taborder("10");
            obj.set_text("과세구분");
            obj.set_cssclass("sta_WF_tablelabel");
            obj.set_textDecoration("underline");
            this.divData.form.divData01.addChild(obj.name, obj);

            obj = new Static("sta402","sta301:-1","sta401:-1","120","30",null,null,null,null,null,null,this.divData.form.divData01.form);
            obj.set_taborder("11");
            obj.set_text("납기일자");
            obj.set_cssclass("sta_WF_tablelabel");
            obj.set_textDecoration("underline");
            this.divData.form.divData01.addChild(obj.name, obj);

            obj = new Static("sta403","sta301:-1","sta402:-1","120","30",null,null,null,null,null,null,this.divData.form.divData01.form);
            obj.set_taborder("12");
            obj.set_text("부문");
            obj.set_cssclass("sta_WF_tablelabel");
            obj.set_textDecoration("underline");
            this.divData.form.divData01.addChild(obj.name, obj);

            obj = new Static("sta501","sta401:-1","0","231","30",null,null,null,null,null,null,this.divData.form.divData01.form);
            obj.set_taborder("13");
            obj.set_cssclass("sta_WF_tablebg");
            this.divData.form.divData01.addChild(obj.name, obj);

            obj = new Static("sta601","sta501:-1","0","120","30",null,null,null,null,null,null,this.divData.form.divData01.form);
            obj.set_taborder("14");
            obj.set_text("구매품목");
            obj.set_cssclass("sta_WF_tablelabel");
            obj.set_textDecoration("underline");
            this.divData.form.divData01.addChild(obj.name, obj);

            obj = new Static("sta602","sta501:-1","sta601:-1","120","30",null,null,null,null,null,null,this.divData.form.divData01.form);
            obj.set_taborder("15");
            obj.set_text("구매요청명");
            obj.set_cssclass("sta_WF_tablelabel");
            obj.set_textDecoration("underline");
            this.divData.form.divData01.addChild(obj.name, obj);

            obj = new Static("sta603","sta501:-1","sta602:-1","120","30",null,null,null,null,null,null,this.divData.form.divData01.form);
            obj.set_taborder("16");
            obj.set_text("선정방법");
            obj.set_cssclass("sta_WF_tablelabel");
            obj.set_textDecoration("underline");
            obj.set_visible("false");
            this.divData.form.divData01.addChild(obj.name, obj);

            obj = new Static("sta502","sta402:-1","sta501:-1","231","30",null,null,null,null,null,null,this.divData.form.divData01.form);
            obj.set_taborder("17");
            obj.set_cssclass("sta_WF_tablebg");
            this.divData.form.divData01.addChild(obj.name, obj);

            obj = new Static("sta503","sta403:-1","sta502:-1","231","30",null,null,null,null,null,null,this.divData.form.divData01.form);
            obj.set_taborder("18");
            obj.set_cssclass("sta_WF_tablebg");
            this.divData.form.divData01.addChild(obj.name, obj);

            obj = new Static("sta701","sta601:-1","0","231","30",null,null,null,null,null,null,this.divData.form.divData01.form);
            obj.set_taborder("19");
            obj.set_cssclass("sta_WF_tablebg");
            this.divData.form.divData01.addChild(obj.name, obj);

            obj = new Static("sta702","sta602:-1","29","231","30",null,null,null,null,null,null,this.divData.form.divData01.form);
            obj.set_taborder("20");
            obj.set_cssclass("sta_WF_tablebg");
            this.divData.form.divData01.addChild(obj.name, obj);

            obj = new Static("sta703","sta603:-1","sta702:-1","231","30",null,null,null,null,null,null,this.divData.form.divData01.form);
            obj.set_taborder("21");
            obj.set_cssclass("sta_WF_tablebg");
            obj.set_visible("false");
            this.divData.form.divData01.addChild(obj.name, obj);

            obj = new Static("staNO_PR","0","0","110","30",null,null,null,null,null,null,this.divData.form.divData01.form);
            obj.set_taborder("0");
            obj.set_text("구매요청번호");
            obj.set_cssclass("sta_WF_tablelabel");
            this.divData.form.divData01.addChild(obj.name, obj);

            obj = new Static("staCD_COSTCLASS","0","staNO_PR:-1","110","30",null,null,null,null,null,null,this.divData.form.divData01.form);
            obj.set_taborder("13");
            obj.set_text("부문");
            obj.set_cssclass("sta_WF_tablelabelE");
            this.divData.form.divData01.addChild(obj.name, obj);

            obj = new Static("staCD_VENDOR","0","staCD_COSTCLASS:-1","110","30",null,null,null,null,null,null,this.divData.form.divData01.form);
            obj.set_taborder("12");
            obj.set_text("업체코드");
            obj.set_cssclass("sta_WF_tablelabelE");
            this.divData.form.divData01.addChild(obj.name, obj);

            obj = new Static("staBgNO_PR","staNO_PR:-1","0","221","30",null,null,null,null,null,null,this.divData.form.divData01.form);
            obj.set_taborder("3");
            obj.set_cssclass("sta_WF_tablebg");
            this.divData.form.divData01.addChild(obj.name, obj);

            obj = new Static("staBgCD_COSTCLASS","staCD_COSTCLASS:-1","staBgNO_PR:-1","221","30",null,null,null,null,null,null,this.divData.form.divData01.form);
            obj.set_taborder("4");
            obj.set_cssclass("sta_WF_tablebg");
            this.divData.form.divData01.addChild(obj.name, obj);

            obj = new Static("staBgCD_VENDOR","staCD_VENDOR:-1","staBgCD_COSTCLASS:-1","560","30",null,null,null,null,null,null,this.divData.form.divData01.form);
            obj.set_taborder("5");
            obj.set_cssclass("sta_WF_tablebg");
            this.divData.form.divData01.addChild(obj.name, obj);

            obj = new Static("staDS_SUBCON","staBgNO_PR:-1","0","120","30",null,null,null,null,null,null,this.divData.form.divData01.form);
            obj.set_taborder("18");
            obj.set_text("구매요청명");
            obj.set_cssclass("sta_WF_tablelabelE");
            this.divData.form.divData01.addChild(obj.name, obj);

            obj = new Static("staCD_LICCOST","staBgCD_COSTCLASS:-1","staDS_SUBCON:-1","120","30",null,null,null,null,null,null,this.divData.form.divData01.form);
            obj.set_taborder("14");
            obj.set_text("구매품목");
            obj.set_cssclass("sta_WF_tablelabelE");
            this.divData.form.divData01.addChild(obj.name, obj);

            obj = new Static("staBgDS_SUBCON","staDS_SUBCON:-1","0","221","30",null,null,null,null,null,null,this.divData.form.divData01.form);
            obj.set_taborder("8");
            obj.set_cssclass("sta_WF_tablebg");
            this.divData.form.divData01.addChild(obj.name, obj);

            obj = new Static("staBgCD_LICCOST","staCD_LICCOST:-1","staBgDS_SUBCON:-1","221","30",null,null,null,null,null,null,this.divData.form.divData01.form);
            obj.set_taborder("9");
            obj.set_cssclass("sta_WF_tablebg");
            this.divData.form.divData01.addChild(obj.name, obj);

            obj = new Static("staTY_TAX","staBgDS_SUBCON:-1","0","120","30",null,null,null,null,null,null,this.divData.form.divData01.form);
            obj.set_taborder("19");
            obj.set_text("과세구분");
            obj.set_cssclass("sta_WF_tablelabelE");
            this.divData.form.divData01.addChild(obj.name, obj);

            obj = new Static("staTY_SELECT","staBgCD_LICCOST:-1","staTY_TAX:-1","120","30",null,null,null,null,null,null,this.divData.form.divData01.form);
            obj.set_taborder("21");
            obj.set_text("구매유형");
            obj.set_cssclass("sta_WF_tablelabelE");
            this.divData.form.divData01.addChild(obj.name, obj);

            obj = new Static("staDT_DELIVERY","staBgCD_VENDOR:-1","staTY_SELECT:-1","120","30",null,null,null,null,null,null,this.divData.form.divData01.form);
            obj.set_taborder("20");
            obj.set_text("납기일자");
            obj.set_cssclass("sta_WF_tablelabelE");
            this.divData.form.divData01.addChild(obj.name, obj);

            obj = new Static("staBgTY_TAX","staTY_TAX:-1","0","181","30",null,null,null,null,null,null,this.divData.form.divData01.form);
            obj.set_taborder("10");
            obj.set_cssclass("sta_WF_tablebg");
            this.divData.form.divData01.addChild(obj.name, obj);

            obj = new Static("staBgTY_SELECT","staTY_SELECT:-1","staBgTY_TAX:-1","181","30",null,null,null,null,null,null,this.divData.form.divData01.form);
            obj.set_taborder("7");
            obj.set_cssclass("sta_WF_tablebg");
            this.divData.form.divData01.addChild(obj.name, obj);

            obj = new Static("staBgDT_DELIVERY","staDT_DELIVERY:-1","staBgTY_SELECT:-1","181","30",null,null,null,null,null,null,this.divData.form.divData01.form);
            obj.set_taborder("6");
            obj.set_cssclass("sta_WF_tablebg");
            this.divData.form.divData01.addChild(obj.name, obj);

            obj = new Static("staRT_TAX","staBgTY_TAX:-1","0","120","30",null,null,null,null,null,null,this.divData.form.divData01.form);
            obj.set_taborder("15");
            obj.set_text("과세율");
            obj.set_cssclass("sta_WF_tablelabelE");
            this.divData.form.divData01.addChild(obj.name, obj);

            obj = new Static("staDS_CONTMETHOD","staBgTY_SELECT:-1","staRT_TAX:-1","120","30",null,null,null,null,null,null,this.divData.form.divData01.form);
            obj.set_taborder("16");
            obj.set_text("계약유형");
            obj.set_cssclass("sta_WF_tablelabelE");
            this.divData.form.divData01.addChild(obj.name, obj);

            obj = new Static("staNO_CONT","staBgDT_DELIVERY:-1","staDS_CONTMETHOD:-1","120","30",null,null,null,null,null,null,this.divData.form.divData01.form);
            obj.set_taborder("17");
            obj.set_text("발주번호");
            obj.set_cssclass("sta_WF_tablelabel");
            obj.set_textDecoration("none");
            this.divData.form.divData01.addChild(obj.name, obj);

            obj = new Static("staBgRT_TAX","staRT_TAX:-1","0","212","30",null,null,null,null,null,null,this.divData.form.divData01.form);
            obj.set_taborder("2");
            obj.set_cssclass("sta_WF_tablebg");
            this.divData.form.divData01.addChild(obj.name, obj);

            obj = new Static("staBgDS_CONTMETHOD","staDS_CONTMETHOD:-1","staBgTY_TAX:-1","212","30",null,null,null,null,null,null,this.divData.form.divData01.form);
            obj.set_taborder("1");
            obj.set_cssclass("sta_WF_tablebg");
            this.divData.form.divData01.addChild(obj.name, obj);

            obj = new Static("staBgSPACE00","staNO_CONT:-1","staBgDS_CONTMETHOD:-1","212","30",null,null,null,null,null,null,this.divData.form.divData01.form);
            obj.set_taborder("11");
            obj.set_cssclass("sta_WF_tablebg");
            this.divData.form.divData01.addChild(obj.name, obj);

            obj = new Edit("txtNO_PR","staNO_PR:5","5","210","20",null,null,null,null,null,null,this.divData.form.divData01.form);
            obj.set_taborder("24");
            obj.set_value("");
            obj.set_readonly("false");
            obj.set_enable("false");
            this.divData.form.divData01.addChild(obj.name, obj);

            obj = new Div("cfCD_COSTCLASS","staCD_COSTCLASS:5","txtNO_PR:9","210","20",null,null,null,null,null,null,this.divData.form.divData01.form);
            obj.getSetter("CodeFindName").set("DMX_CFCOSTCLASS_01");
            obj.getSetter("CDTextWidth").set("70");
            obj.set_taborder("29");
            obj.set_url("cmm::cmmCodeFind.xfdl");
            obj.set_enable("false");
            this.divData.form.divData01.addChild(obj.name, obj);

            obj = new Div("cfCD_VENDOR","staCD_COSTCLASS:5","cfCD_COSTCLASS:9","549","20",null,null,null,null,null,null,this.divData.form.divData01.form);
            obj.getSetter("CodeFindName").set("DCX_CFVENDOR_DM");
            obj.getSetter("CDTextWidth").set("70");
            obj.set_taborder("30");
            obj.set_url("cmm::cmmCodeFind.xfdl");
            obj.set_enable("false");
            this.divData.form.divData01.addChild(obj.name, obj);

            obj = new Edit("txtDS_SUBCON","staDS_SUBCON:5","5","210","20",null,null,null,null,null,null,this.divData.form.divData01.form);
            obj.set_taborder("32");
            obj.set_value("");
            obj.set_enable("false");
            this.divData.form.divData01.addChild(obj.name, obj);

            obj = new Div("cfCD_LICCOST","staCD_LICCOST:5","txtDS_SUBCON:9","210","20",null,null,null,null,null,null,this.divData.form.divData01.form);
            obj.getSetter("CodeFindName").set("DMX_CFLICCOST");
            obj.getSetter("CDTextWidth").set("70");
            obj.set_taborder("31");
            obj.set_url("cmm::cmmCodeFind.xfdl");
            obj.set_enable("false");
            this.divData.form.divData01.addChild(obj.name, obj);

            obj = new Combo("cboTY_TAX","staTY_TAX:5","5","165","20",null,null,null,null,null,null,this.divData.form.divData01.form);
            obj.set_taborder("27");
            obj.set_innerdataset("dsTY_TAX");
            obj.set_codecolumn("CODE");
            obj.set_datacolumn("DATA");
            obj.set_enable("false");
            this.divData.form.divData01.addChild(obj.name, obj);

            obj = new Combo("cboTY_SELECT","staTY_SELECT:5","cboTY_TAX:9","165","20",null,null,null,null,null,null,this.divData.form.divData01.form);
            obj.set_taborder("23");
            obj.set_innerdataset("dsTY_SELECT");
            obj.set_codecolumn("CD_CODE");
            obj.set_datacolumn("DS_CODE");
            obj.set_enable("false");
            obj.set_readonly("false");
            this.divData.form.divData01.addChild(obj.name, obj);

            obj = new Calendar("ctclDT_DELIVERY","staDT_DELIVERY:5","cboTY_SELECT:9","105","20",null,null,null,null,null,null,this.divData.form.divData01.form);
            obj.set_taborder("28");
            obj.set_dateformat("yyyy-MM-dd");
            obj.set_editformat("yyyyMMdd");
            obj.set_autoselect("true");
            obj.set_value("");
            obj.set_enable("false");
            this.divData.form.divData01.addChild(obj.name, obj);

            obj = new MaskEdit("txtRT_TAX","staRT_TAX:5","5","164","20",null,null,null,null,null,null,this.divData.form.divData01.form);
            obj.set_taborder("26");
            obj.set_value("");
            obj.set_format("9,999.99");
            obj.set_enable("false");
            this.divData.form.divData01.addChild(obj.name, obj);

            obj = new Static("staRT_TAX_PERCENT","txtRT_TAX:3","0","20","30",null,null,null,null,null,null,this.divData.form.divData01.form);
            obj.set_taborder("22");
            obj.set_text("%");
            this.divData.form.divData01.addChild(obj.name, obj);

            obj = new Combo("cboDS_CONTMETHOD","staDS_CONTMETHOD:5","txtRT_TAX:9","164","20",null,null,null,null,null,null,this.divData.form.divData01.form);
            obj.set_taborder("25");
            obj.set_innerdataset("dsDS_CONTMETHOD");
            obj.set_codecolumn("CD_CODE");
            obj.set_datacolumn("DS_CODE");
            obj.set_readonly("false");
            obj.set_enable("false");
            this.divData.form.divData01.addChild(obj.name, obj);

            obj = new Combo("cboTY_SELECT","sta001:5","5","165","20",null,null,null,null,null,null,this.divData.form.divData01.form);
            obj.set_taborder("22");
            obj.set_innerdataset("dsTY_SELECT");
            obj.set_codecolumn("CD_CODE");
            obj.set_datacolumn("DS_CODE");
            this.divData.form.divData01.addChild(obj.name, obj);

            obj = new Edit("txtNO_PR","sta002:5","sta101:4","165","20",null,null,null,null,null,null,this.divData.form.divData01.form);
            obj.set_taborder("23");
            obj.set_value("");
            obj.set_readonly("true");
            this.divData.form.divData01.addChild(obj.name, obj);

            obj = new Edit("txtCD_SITE","sta003:5","sta102:4","165","20",null,null,null,null,null,null,this.divData.form.divData01.form);
            obj.set_taborder("24");
            obj.set_value("");
            this.divData.form.divData01.addChild(obj.name, obj);

            obj = new Edit("txtDS_SITE","txtCD_SITE:9","64","300","20",null,null,null,null,null,null,this.divData.form.divData01.form);
            obj.set_taborder("25");
            obj.set_value("");
            this.divData.form.divData01.addChild(obj.name, obj);

            obj = new Combo("cboDS_CONTMETHOD","sta201:5","5","164","20",null,null,null,null,null,null,this.divData.form.divData01.form);
            obj.set_taborder("26");
            obj.set_innerdataset("dsDS_CONTMETHOD");
            obj.set_codecolumn("CD_CODE");
            obj.set_datacolumn("DS_CODE");
            this.divData.form.divData01.addChild(obj.name, obj);

            obj = new MaskEdit("txtRT_TAX","sta202:5","sta301:4","164","20",null,null,null,null,null,null,this.divData.form.divData01.form);
            obj.set_taborder("27");
            obj.set_value("");
            obj.set_format("9,999.99");
            this.divData.form.divData01.addChild(obj.name, obj);

            obj = new Combo("cboTY_TAX","sta401:5","5","216","20",null,null,null,null,null,null,this.divData.form.divData01.form);
            obj.set_taborder("28");
            obj.set_innerdataset("dsTY_TAX");
            obj.set_codecolumn("CODE");
            obj.set_datacolumn("DATA");
            this.divData.form.divData01.addChild(obj.name, obj);

            obj = new Calendar("ctclDT_DELIVERY","sta402:5","sta501:3","105","20",null,null,null,null,null,null,this.divData.form.divData01.form);
            obj.set_taborder("29");
            obj.set_dateformat("yyyy-MM-dd");
            obj.set_editformat("yyyyMMdd");
            obj.set_autoselect("true");
            obj.set_value("");
            this.divData.form.divData01.addChild(obj.name, obj);

            obj = new Div("cfCD_COSTCLASS","sta403:5","sta502:4","216","20",null,null,null,null,null,null,this.divData.form.divData01.form);
            obj.getSetter("CodeFindName").set("DCX_CFCOSTCLASS_01");
            obj.getSetter("CDTextWidth").set("70");
            obj.set_taborder("30");
            obj.set_url("cmm::cmmCodeFind.xfdl");
            this.divData.form.divData01.addChild(obj.name, obj);

            obj = new Div("cfCD_LICCOST","sta601:5","5","216","20",null,null,null,null,null,null,this.divData.form.divData01.form);
            obj.getSetter("CodeFindName").set("DMX_CFLICCOST");
            obj.getSetter("CDTextWidth").set("70");
            obj.set_taborder("31");
            obj.set_url("cmm::cmmCodeFind.xfdl");
            this.divData.form.divData01.addChild(obj.name, obj);

            obj = new Edit("txtDS_SUBCON","sta602:5","sta701:4","216","20",null,null,null,null,null,null,this.divData.form.divData01.form);
            obj.set_taborder("32");
            obj.set_value("");
            this.divData.form.divData01.addChild(obj.name, obj);

            obj = new Combo("ccboTY_BID","sta603:5","sta702:4","216","20",null,null,null,null,null,null,this.divData.form.divData01.form);
            obj.set_taborder("33");
            obj.set_innerdataset("dsTY_BID");
            obj.set_codecolumn("CD_CODE");
            obj.set_datacolumn("DS_CODE");
            obj.set_visible("false");
            this.divData.form.divData01.addChild(obj.name, obj);

            obj = new Static("staSpace00","sta501:-1","sta602:-1","120","30",null,null,null,null,null,null,this.divData.form.divData01.form);
            obj.set_taborder("34");
            obj.set_text("");
            obj.set_cssclass("sta_WF_tablelabel");
            obj.set_textDecoration("underline");
            obj.set_visible("true");
            this.divData.form.divData01.addChild(obj.name, obj);

            obj = new Static("staBgSpace00","staSpace00:-1","sta702:-1","231","30",null,null,null,null,null,null,this.divData.form.divData01.form);
            obj.set_taborder("35");
            obj.set_cssclass("sta_WF_tablebg");
            obj.set_visible("true");
            this.divData.form.divData01.addChild(obj.name, obj);

            obj = new Edit("txtNO_CONT","staNO_CONT:5","cboDS_CONTMETHOD:9","201","20",null,null,null,null,null,null,this.divData.form.divData01.form);
            obj.set_taborder("33");
            obj.set_value("");
            obj.set_readonly("false");
            obj.set_enable("false");
            this.divData.form.divData01.addChild(obj.name, obj);

            obj = new Div("divData02","10","divData01:10",null,null,"0","0",null,null,null,null,this.divData.form);
            obj.set_taborder("2");
            this.divData.addChild(obj.name, obj);

            obj = new Grid("objGrid","0","0","1299",null,null,"0",null,null,null,null,this.divData.form.divData02.form);
            obj.set_taborder("0");
            obj._setContents("");
            this.divData.form.divData02.addChild(obj.name, obj);

            obj = new Div("divData02","0","divData01:10","1100","59",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("2");
            this.divData.addChild(obj.name, obj);

            obj = new Static("sta2001","0","0","119","30",null,null,null,null,null,null,this.divData.form.divData02.form);
            obj.set_taborder("1");
            obj.set_text("현장요청일");
            obj.set_cssclass("sta_WF_tablelabel");
            obj.set_textAlign("center");
            this.divData.form.divData02.addChild(obj.name, obj);

            obj = new Static("sta2002","sta2001:-1","0","119","30",null,null,null,null,null,null,this.divData.form.divData02.form);
            obj.set_taborder("1");
            obj.set_text("본사접수일");
            obj.set_cssclass("sta_WF_tablelabel");
            obj.set_textAlign("center");
            this.divData.form.divData02.addChild(obj.name, obj);

            obj = new Static("sta2003","sta2002:-1","0","119","30",null,null,null,null,null,null,this.divData.form.divData02.form);
            obj.set_taborder("1");
            obj.set_text("승인일자");
            obj.set_cssclass("sta_WF_tablelabel");
            obj.set_textAlign("center");
            this.divData.form.divData02.addChild(obj.name, obj);

            obj = new Static("sta2004","sta2003:-1","0","119","30",null,null,null,null,null,null,this.divData.form.divData02.form);
            obj.set_taborder("1");
            obj.set_text("도급금액");
            obj.set_cssclass("sta_WF_tablelabel");
            obj.set_textAlign("center");
            this.divData.form.divData02.addChild(obj.name, obj);

            obj = new Static("sta2005","sta2004:-1","0","119","30",null,null,null,null,null,null,this.divData.form.divData02.form);
            obj.set_taborder("1");
            obj.set_text("예산금액");
            obj.set_cssclass("sta_WF_tablelabel");
            obj.set_textAlign("center");
            this.divData.form.divData02.addChild(obj.name, obj);

            obj = new Static("sta2006","sta2005:-1","0","119","30",null,null,null,null,null,null,this.divData.form.divData02.form);
            obj.set_taborder("1");
            obj.set_text("승인요청액");
            obj.set_cssclass("sta_WF_tablelabel");
            obj.set_textAlign("center");
            this.divData.form.divData02.addChild(obj.name, obj);

            obj = new Static("sta2007","sta2006:-1","0","119","30",null,null,null,null,null,null,this.divData.form.divData02.form);
            obj.set_taborder("1");
            obj.set_text("승인금액");
            obj.set_cssclass("sta_WF_tablelabel");
            obj.set_textAlign("center");
            this.divData.form.divData02.addChild(obj.name, obj);

            obj = new Static("sta2008","sta2007:-1","0","123","30",null,null,null,null,null,null,this.divData.form.divData02.form);
            obj.set_taborder("1");
            obj.set_text("평단가");
            obj.set_cssclass("sta_WF_tablelabel");
            obj.set_textAlign("center");
            this.divData.form.divData02.addChild(obj.name, obj);

            obj = new Static("sta2101","0","sta2001:-1","119","30",null,null,null,null,null,null,this.divData.form.divData02.form);
            obj.set_taborder("1");
            obj.set_cssclass("sta_WF_tablebg");
            this.divData.form.divData02.addChild(obj.name, obj);

            obj = new Static("sta2102","sta2101:-1","sta2002:-1","119","30",null,null,null,null,null,null,this.divData.form.divData02.form);
            obj.set_taborder("1");
            obj.set_cssclass("sta_WF_tablebg");
            this.divData.form.divData02.addChild(obj.name, obj);

            obj = new Static("sta2103","sta2102:-1","sta2003:-1","119","30",null,null,null,null,null,null,this.divData.form.divData02.form);
            obj.set_taborder("1");
            obj.set_cssclass("sta_WF_tablebg");
            this.divData.form.divData02.addChild(obj.name, obj);

            obj = new Static("sta2104","sta2103:-1","sta2004:-1","119","30",null,null,null,null,null,null,this.divData.form.divData02.form);
            obj.set_taborder("1");
            obj.set_cssclass("sta_WF_tablebg");
            this.divData.form.divData02.addChild(obj.name, obj);

            obj = new Static("sta2105","sta2104:-1","sta2005:-1","119","30",null,null,null,null,null,null,this.divData.form.divData02.form);
            obj.set_taborder("1");
            obj.set_cssclass("sta_WF_tablebg");
            this.divData.form.divData02.addChild(obj.name, obj);

            obj = new Static("sta2106","sta2105:-1","sta2006:-1","119","30",null,null,null,null,null,null,this.divData.form.divData02.form);
            obj.set_taborder("1");
            obj.set_cssclass("sta_WF_tablebg");
            this.divData.form.divData02.addChild(obj.name, obj);

            obj = new Static("sta2107","sta2106:-1","sta2007:-1","119","30",null,null,null,null,null,null,this.divData.form.divData02.form);
            obj.set_taborder("1");
            obj.set_cssclass("sta_WF_tablebg");
            this.divData.form.divData02.addChild(obj.name, obj);

            obj = new Static("sta2108","sta2107:-1","sta2008:-1","123","30",null,null,null,null,null,null,this.divData.form.divData02.form);
            obj.set_taborder("1");
            obj.set_cssclass("sta_WF_tablebg");
            this.divData.form.divData02.addChild(obj.name, obj);

            obj = new Calendar("tclDT_REQ_SITE","5","34","107","20",null,null,null,null,null,null,this.divData.form.divData02.form);
            obj.set_taborder("2");
            obj.set_dateformat("yyyy-MM-dd");
            obj.set_editformat("yyyyMMdd");
            obj.set_autoselect("true");
            obj.set_value("");
            obj.set_readonly("true");
            this.divData.form.divData02.addChild(obj.name, obj);

            obj = new Calendar("tclDT_HQRECEIPT","sta2101:4","34","107","20",null,null,null,null,null,null,this.divData.form.divData02.form);
            obj.set_taborder("2");
            obj.set_dateformat("yyyy-MM-dd");
            obj.set_editformat("yyyyMMdd");
            obj.set_autoselect("true");
            obj.set_value("");
            obj.set_readonly("true");
            this.divData.form.divData02.addChild(obj.name, obj);

            obj = new Calendar("tclDT_HQAPPR","sta2102:4","34","107","20",null,null,null,null,null,null,this.divData.form.divData02.form);
            obj.set_taborder("2");
            obj.set_dateformat("yyyy-MM-dd");
            obj.set_editformat("yyyyMMdd");
            obj.set_autoselect("true");
            obj.set_value("");
            obj.set_readonly("true");
            this.divData.form.divData02.addChild(obj.name, obj);

            obj = new MaskEdit("txtAM_TT_DOKUB","sta2103:4","34","107","20",null,null,null,null,null,null,this.divData.form.divData02.form);
            obj.set_taborder("2");
            obj.set_value("");
            obj.set_readonly("true");
            obj.set_format("9,990");
            this.divData.form.divData02.addChild(obj.name, obj);

            obj = new MaskEdit("txtAM_TT_SILHENG","sta2104:4","34","107","20",null,null,null,null,null,null,this.divData.form.divData02.form);
            obj.set_taborder("2");
            obj.set_value("");
            obj.set_readonly("true");
            obj.set_format("9,990");
            this.divData.form.divData02.addChild(obj.name, obj);

            obj = new MaskEdit("txtAM_REQUEST","sta2105:4","34","107","20",null,null,null,null,null,null,this.divData.form.divData02.form);
            obj.set_taborder("2");
            obj.set_value("");
            obj.set_readonly("true");
            obj.set_format("9,990");
            this.divData.form.divData02.addChild(obj.name, obj);

            obj = new MaskEdit("txtAM_GONGSA","sta2106:4","34","107","20",null,null,null,null,null,null,this.divData.form.divData02.form);
            obj.set_taborder("2");
            obj.set_value("");
            obj.set_readonly("true");
            obj.set_format("9,990");
            this.divData.form.divData02.addChild(obj.name, obj);

            obj = new MaskEdit("txtUP_PYEONG","sta2107:4","34","109","20",null,null,null,null,null,null,this.divData.form.divData02.form);
            obj.set_taborder("2");
            obj.set_value("");
            obj.set_readonly("true");
            obj.set_format("9,990");
            this.divData.form.divData02.addChild(obj.name, obj);

            obj = new Tab("tabData","0","divData02:10","950",null,null,"0",null,null,"300",null,this.divData.form);
            obj.set_taborder("0");
            obj.set_tabindex("0");
            this.divData.addChild(obj.name, obj);

            obj = new Tabpage("tab1",this.divData.form.tabData);
            obj.set_text("현장설명회");
            this.divData.form.tabData.addChild(obj.name, obj);

            obj = new Div("div00","10","5",null,"100","10",null,null,null,null,null,this.divData.form.tabData.tab1.form);
            obj.set_taborder("1");
            obj.set_formscrolltype("none");
            this.divData.form.tabData.tab1.addChild(obj.name, obj);

            obj = new Static("sta01","0","0",null,"22","0",null,null,null,null,null,this.divData.form.tabData.tab1.form.div00.form);
            obj.set_taborder("1");
            obj.set_text("현장설명회");
            obj.set_cssclass("sta_TITLE_Bg");
            this.divData.form.tabData.tab1.form.div00.addChild(obj.name, obj);

            obj = new Static("sta001","0","30","110","30",null,null,null,null,null,null,this.divData.form.tabData.tab1.form.div00.form);
            obj.set_taborder("1");
            obj.set_text("현장실시여부");
            obj.set_cssclass("sta_WF_tablelabel");
            obj.set_textDecoration("underline");
            obj.set_visible("false");
            this.divData.form.tabData.tab1.form.div00.addChild(obj.name, obj);

            obj = new Static("sta101","109","30","283","30",null,null,null,null,null,null,this.divData.form.tabData.tab1.form.div00.form);
            obj.set_taborder("1");
            obj.set_cssclass("sta_WF_tablebg");
            obj.set_visible("false");
            this.divData.form.tabData.tab1.form.div00.addChild(obj.name, obj);

            obj = new Static("sta00","0","30","110","30",null,null,null,null,null,null,this.divData.form.tabData.tab1.form.div00.form);
            obj.set_taborder("1");
            obj.set_text("현설유형");
            obj.set_cssclass("sta_WF_tablelabel");
            obj.set_textDecoration("underline");
            this.divData.form.tabData.tab1.form.div00.addChild(obj.name, obj);

            obj = new Static("sta02","sta00:-1","30","283","30",null,null,null,null,null,null,this.divData.form.tabData.tab1.form.div00.form);
            obj.set_taborder("1");
            obj.set_cssclass("sta_WF_tablebg");
            this.divData.form.tabData.tab1.form.div00.addChild(obj.name, obj);

            obj = new Static("sta03","0","sta00:-1","110","30",null,null,null,null,null,null,this.divData.form.tabData.tab1.form.div00.form);
            obj.set_taborder("1");
            obj.set_text("현설일시");
            obj.set_cssclass("sta_WF_tablelabel");
            obj.set_textDecoration("underline");
            this.divData.form.tabData.tab1.form.div00.addChild(obj.name, obj);

            obj = new Static("sta04","sta03:-1","sta02:-1","283","30",null,null,null,null,null,null,this.divData.form.tabData.tab1.form.div00.form);
            obj.set_taborder("1");
            obj.set_cssclass("sta_WF_tablebg");
            this.divData.form.tabData.tab1.form.div00.addChild(obj.name, obj);

            obj = new Static("sta06","sta02:-1","30","110","30",null,null,null,null,null,null,this.divData.form.tabData.tab1.form.div00.form);
            obj.set_taborder("1");
            obj.set_text("현설장소");
            obj.set_cssclass("sta_WF_tablelabel");
            this.divData.form.tabData.tab1.form.div00.addChild(obj.name, obj);

            obj = new Static("sta07","sta04:-1","sta06:-1","110","30",null,null,null,null,null,null,this.divData.form.tabData.tab1.form.div00.form);
            obj.set_taborder("1");
            obj.set_text("현설공고일");
            obj.set_cssclass("sta_WF_tablelabel");
            this.divData.form.tabData.tab1.form.div00.addChild(obj.name, obj);

            obj = new Static("sta05","sta06:-1","30","310","30",null,null,null,null,null,null,this.divData.form.tabData.tab1.form.div00.form);
            obj.set_taborder("1");
            obj.set_cssclass("sta_WF_tablebg");
            this.divData.form.tabData.tab1.form.div00.addChild(obj.name, obj);

            obj = new Static("sta08","sta07:-1","sta05:-1","310","30",null,null,null,null,null,null,this.divData.form.tabData.tab1.form.div00.form);
            obj.set_taborder("1");
            obj.set_cssclass("sta_WF_tablebg");
            this.divData.form.tabData.tab1.form.div00.addChild(obj.name, obj);

            obj = new Combo("cboYN_EXPLAIN","sta001:5","35","165","20",null,null,null,null,null,null,this.divData.form.tabData.tab1.form.div00.form);
            obj.set_taborder("2");
            obj.set_innerdataset("dsYN_EXPLAIN");
            obj.set_codecolumn("CODE");
            obj.set_datacolumn("DATA");
            obj.set_visible("false");
            this.divData.form.tabData.tab1.form.div00.addChild(obj.name, obj);

            obj = new Combo("cboONOFF_EXPLAIN","sta00:5","35","165","20",null,null,null,null,null,null,this.divData.form.tabData.tab1.form.div00.form);
            obj.set_taborder("2");
            obj.set_innerdataset("dsONOFF_EXPLAIN");
            obj.set_codecolumn("CD_CODE");
            obj.set_datacolumn("DS_CODE");
            this.divData.form.tabData.tab1.form.div00.addChild(obj.name, obj);

            obj = new Edit("txtAT_SITEEXPLAIN","sta06:5","35","295","20",null,null,null,null,null,null,this.divData.form.tabData.tab1.form.div00.form);
            obj.set_taborder("2");
            obj.set_value("");
            this.divData.form.tabData.tab1.form.div00.addChild(obj.name, obj);

            obj = new Calendar("tclDT_EXPLAIN","sta03:5","sta02:4","110","20",null,null,null,null,null,null,this.divData.form.tabData.tab1.form.div00.form);
            obj.set_taborder("2");
            obj.set_dateformat("yyyy-MM-dd");
            obj.set_editformat("yyyyMMdd");
            obj.set_autoselect("true");
            obj.set_value("");
            this.divData.form.tabData.tab1.form.div00.addChild(obj.name, obj);

            obj = new Combo("ccboDT_EXPLAIN_HOUR","tclDT_EXPLAIN:5","sta02:4","45","20",null,null,null,null,null,null,this.divData.form.tabData.tab1.form.div00.form);
            obj.set_taborder("1");
            obj.set_innerdataset("dsHOUR");
            obj.set_codecolumn("CD_CODE");
            obj.set_datacolumn("DS_CODE");
            obj.set_text("00");
            obj.set_value("00");
            obj.set_index("0");
            this.divData.form.tabData.tab1.form.div00.addChild(obj.name, obj);

            obj = new Static("staDT_EXPLAIN_HOUR","ccboDT_EXPLAIN_HOUR:3","sta02:4","20","20",null,null,null,null,null,null,this.divData.form.tabData.tab1.form.div00.form);
            obj.set_taborder("1");
            obj.set_text("시");
            this.divData.form.tabData.tab1.form.div00.addChild(obj.name, obj);

            obj = new Combo("ccboDT_EXPLAIN_MINUTE","staDT_EXPLAIN_HOUR:5","sta02:4","45","20",null,null,null,null,null,null,this.divData.form.tabData.tab1.form.div00.form);
            obj.set_taborder("1");
            obj.set_innerdataset("dsMINUTE");
            obj.set_codecolumn("CD_CODE");
            obj.set_datacolumn("DS_CODE");
            obj.set_text("00");
            obj.set_value("00");
            obj.set_index("0");
            this.divData.form.tabData.tab1.form.div00.addChild(obj.name, obj);

            obj = new Static("staDT_EXPLAIN_MINUTE","ccboDT_EXPLAIN_MINUTE:3","sta02:4","20","20",null,null,null,null,null,null,this.divData.form.tabData.tab1.form.div00.form);
            obj.set_taborder("1");
            obj.set_text("분");
            this.divData.form.tabData.tab1.form.div00.addChild(obj.name, obj);

            obj = new Calendar("tclDT_EXPLAIN_GONGO","sta07:5","sta05:4","110","20",null,null,null,null,null,null,this.divData.form.tabData.tab1.form.div00.form);
            obj.set_taborder("2");
            obj.set_dateformat("yyyy-MM-dd");
            obj.set_editformat("yyyyMMdd");
            obj.set_autoselect("true");
            obj.set_value("");
            obj.set_readonly("true");
            this.divData.form.tabData.tab1.form.div00.addChild(obj.name, obj);

            obj = new Div("div01","10","div00:5",null,"118","10",null,null,null,null,null,this.divData.form.tabData.tab1.form);
            obj.set_taborder("1");
            obj.set_text("div00");
            obj.set_formscrolltype("none");
            this.divData.form.tabData.tab1.addChild(obj.name, obj);

            obj = new Static("sta0111","0","0",null,"22","0",null,null,null,null,null,this.divData.form.tabData.tab1.form.div01.form);
            obj.set_taborder("1");
            obj.set_text("현장담당");
            obj.set_cssclass("sta_TITLE_Bg");
            this.divData.form.tabData.tab1.form.div01.addChild(obj.name, obj);

            obj = new Static("sta001","0","30","110","30",null,null,null,null,null,null,this.divData.form.tabData.tab1.form.div01.form);
            obj.set_taborder("1");
            obj.set_text("관리책임자");
            obj.set_cssclass("sta_WF_tablelabel");
            obj.set_textDecoration("underline");
            this.divData.form.tabData.tab1.form.div01.addChild(obj.name, obj);

            obj = new Static("sta00","0","59","110","30",null,null,null,null,null,null,this.divData.form.tabData.tab1.form.div01.form);
            obj.set_taborder("1");
            obj.set_text("현장담당자");
            obj.set_cssclass("sta_WF_tablelabel");
            obj.set_textDecoration("underline");
            this.divData.form.tabData.tab1.form.div01.addChild(obj.name, obj);

            obj = new Static("sta03","0","88","110","30",null,null,null,null,null,null,this.divData.form.tabData.tab1.form.div01.form);
            obj.set_taborder("1");
            obj.set_text("기타사항");
            obj.set_cssclass("sta_WF_tablelabel");
            this.divData.form.tabData.tab1.form.div01.addChild(obj.name, obj);

            obj = new Static("sta101","109","30","283","30",null,null,null,null,null,null,this.divData.form.tabData.tab1.form.div01.form);
            obj.set_taborder("1");
            obj.set_cssclass("sta_WF_tablebg");
            this.divData.form.tabData.tab1.form.div01.addChild(obj.name, obj);

            obj = new Static("sta02","109","59","283","30",null,null,null,null,null,null,this.divData.form.tabData.tab1.form.div01.form);
            obj.set_taborder("1");
            obj.set_cssclass("sta_WF_tablebg");
            this.divData.form.tabData.tab1.form.div01.addChild(obj.name, obj);

            obj = new Static("sta04","109","88","590","30",null,null,null,null,null,null,this.divData.form.tabData.tab1.form.div01.form);
            obj.set_taborder("1");
            obj.set_cssclass("sta_WF_tablebg");
            this.divData.form.tabData.tab1.form.div01.addChild(obj.name, obj);

            obj = new Static("sta06","sta101:-1","30","110","30",null,null,null,null,null,null,this.divData.form.tabData.tab1.form.div01.form);
            obj.set_taborder("1");
            obj.set_text("전화번호");
            obj.set_cssclass("sta_WF_tablelabel");
            this.divData.form.tabData.tab1.form.div01.addChild(obj.name, obj);

            obj = new Static("sta07","sta02:-1","sta06:-1","110","30",null,null,null,null,null,null,this.divData.form.tabData.tab1.form.div01.form);
            obj.set_taborder("1");
            obj.set_text("전화번호");
            obj.set_cssclass("sta_WF_tablelabel");
            this.divData.form.tabData.tab1.form.div01.addChild(obj.name, obj);

            obj = new Static("sta05","sta06:-1","30","199","30",null,null,null,null,null,null,this.divData.form.tabData.tab1.form.div01.form);
            obj.set_taborder("1");
            obj.set_cssclass("sta_WF_tablebg");
            this.divData.form.tabData.tab1.form.div01.addChild(obj.name, obj);

            obj = new Static("sta08","sta07:-1","sta05:-1","199","30",null,null,null,null,null,null,this.divData.form.tabData.tab1.form.div01.form);
            obj.set_taborder("1");
            obj.set_cssclass("sta_WF_tablebg");
            this.divData.form.tabData.tab1.form.div01.addChild(obj.name, obj);

            obj = new Edit("txtRM_BIDREMARK","sta03:5","sta02:4","579","20",null,null,null,null,null,null,this.divData.form.tabData.tab1.form.div01.form);
            obj.set_taborder("2");
            obj.set_value("");
            this.divData.form.tabData.tab1.form.div01.addChild(obj.name, obj);

            obj = new Div("ccfID_SITESABUN","sta00:5","sta101:4","272","20",null,null,null,null,null,null,this.divData.form.tabData.tab1.form.div01.form);
            obj.getSetter("CodeFindName").set("DZX_CFUSER");
            obj.getSetter("CDTextWidth").set("70");
            obj.set_taborder("1");
            obj.set_url("cmm::cmmCodeFind.xfdl");
            this.divData.form.tabData.tab1.form.div01.addChild(obj.name, obj);

            obj = new Div("ccfID_MANAGER","sta001:5","35","272","20",null,null,null,null,null,null,this.divData.form.tabData.tab1.form.div01.form);
            obj.getSetter("CodeFindName").set("DZX_CFUSER");
            obj.getSetter("CDTextWidth").set("70");
            obj.set_taborder("1");
            obj.set_url("cmm::cmmCodeFind.xfdl");
            this.divData.form.tabData.tab1.form.div01.addChild(obj.name, obj);

            obj = new Edit("txtNO_MANAGERTEL","sta06:5","35","188","20",null,null,null,null,null,null,this.divData.form.tabData.tab1.form.div01.form);
            obj.set_taborder("2");
            obj.set_value("");
            this.divData.form.tabData.tab1.form.div01.addChild(obj.name, obj);

            obj = new Edit("txtNO_SITETEL","sta07:5","sta05:4","188","20",null,null,null,null,null,null,this.divData.form.tabData.tab1.form.div01.form);
            obj.set_taborder("2");
            obj.set_value("");
            this.divData.form.tabData.tab1.form.div01.addChild(obj.name, obj);

            obj = new Tabpage("tab2",this.divData.form.tabData);
            obj.set_text("현장참석목록");
            this.divData.form.tabData.addChild(obj.name, obj);

            obj = new Grid("objGrid","0","0",null,null,"0","0",null,null,null,null,this.divData.form.tabData.tab2.form);
            obj.set_taborder("1");
            obj._setContents("");
            this.divData.form.tabData.tab2.addChild(obj.name, obj);

            obj = new Tabpage("tab3",this.divData.form.tabData);
            obj.set_text("현설입찰일정");
            this.divData.form.tabData.addChild(obj.name, obj);

            obj = new Div("div00","10","5",null,"100","10",null,null,null,null,null,this.divData.form.tabData.tab3.form);
            obj.set_taborder("0");
            obj.set_text("div00");
            this.divData.form.tabData.tab3.addChild(obj.name, obj);

            obj = new Static("sta01","0","0",null,"22","0",null,null,null,null,null,this.divData.form.tabData.tab3.form.div00.form);
            obj.set_taborder("1");
            obj.set_text("현장설명회");
            obj.set_cssclass("sta_TITLE_Bg");
            this.divData.form.tabData.tab3.form.div00.addChild(obj.name, obj);

            obj = new Static("sta001","0","30","110","30",null,null,null,null,null,null,this.divData.form.tabData.tab3.form.div00.form);
            obj.set_taborder("1");
            obj.set_text("현장실시여부");
            obj.set_cssclass("sta_WF_tablelabel");
            obj.set_visible("false");
            this.divData.form.tabData.tab3.form.div00.addChild(obj.name, obj);

            obj = new Static("sta101","109","30","283","30",null,null,null,null,null,null,this.divData.form.tabData.tab3.form.div00.form);
            obj.set_taborder("1");
            obj.set_cssclass("sta_WF_tablebg");
            obj.set_visible("false");
            this.divData.form.tabData.tab3.form.div00.addChild(obj.name, obj);

            obj = new Static("sta00","0","30","110","30",null,null,null,null,null,null,this.divData.form.tabData.tab3.form.div00.form);
            obj.set_taborder("1");
            obj.set_text("현설유형");
            obj.set_cssclass("sta_WF_tablelabel");
            this.divData.form.tabData.tab3.form.div00.addChild(obj.name, obj);

            obj = new Static("sta02","sta00:-1","30","283","30",null,null,null,null,null,null,this.divData.form.tabData.tab3.form.div00.form);
            obj.set_taborder("1");
            obj.set_cssclass("sta_WF_tablebg");
            this.divData.form.tabData.tab3.form.div00.addChild(obj.name, obj);

            obj = new Static("sta03","0","sta00:-1","110","30",null,null,null,null,null,null,this.divData.form.tabData.tab3.form.div00.form);
            obj.set_taborder("1");
            obj.set_text("현설일시");
            obj.set_cssclass("sta_WF_tablelabel");
            this.divData.form.tabData.tab3.form.div00.addChild(obj.name, obj);

            obj = new Static("sta04","sta03:-1","sta02:-1","283","30",null,null,null,null,null,null,this.divData.form.tabData.tab3.form.div00.form);
            obj.set_taborder("1");
            obj.set_cssclass("sta_WF_tablebg");
            this.divData.form.tabData.tab3.form.div00.addChild(obj.name, obj);

            obj = new Static("sta06","sta02:-1","30","110","30",null,null,null,null,null,null,this.divData.form.tabData.tab3.form.div00.form);
            obj.set_taborder("1");
            obj.set_text("현설장소");
            obj.set_cssclass("sta_WF_tablelabel");
            this.divData.form.tabData.tab3.form.div00.addChild(obj.name, obj);

            obj = new Static("sta07","sta04:-1","sta06:-1","110","30",null,null,null,null,null,null,this.divData.form.tabData.tab3.form.div00.form);
            obj.set_taborder("1");
            obj.set_text("현설공고일");
            obj.set_cssclass("sta_WF_tablelabel");
            this.divData.form.tabData.tab3.form.div00.addChild(obj.name, obj);

            obj = new Static("sta05","sta06:-1","30","310","30",null,null,null,null,null,null,this.divData.form.tabData.tab3.form.div00.form);
            obj.set_taborder("1");
            obj.set_cssclass("sta_WF_tablebg");
            this.divData.form.tabData.tab3.form.div00.addChild(obj.name, obj);

            obj = new Static("sta08","sta07:-1","sta05:-1","310","30",null,null,null,null,null,null,this.divData.form.tabData.tab3.form.div00.form);
            obj.set_taborder("1");
            obj.set_cssclass("sta_WF_tablebg");
            this.divData.form.tabData.tab3.form.div00.addChild(obj.name, obj);

            obj = new Combo("cboYN_EXPLAIN","sta001:5","35","165","20",null,null,null,null,null,null,this.divData.form.tabData.tab3.form.div00.form);
            obj.set_taborder("2");
            obj.set_innerdataset("dsYN_EXPLAIN");
            obj.set_codecolumn("CODE");
            obj.set_datacolumn("DATA");
            obj.set_visible("false");
            obj.set_readonly("true");
            this.divData.form.tabData.tab3.form.div00.addChild(obj.name, obj);

            obj = new Combo("cboONOFF_EXPLAIN","sta00:5","35","165","20",null,null,null,null,null,null,this.divData.form.tabData.tab3.form.div00.form);
            obj.set_taborder("2");
            obj.set_innerdataset("dsONOFF_EXPLAIN");
            obj.set_codecolumn("CD_CODE");
            obj.set_datacolumn("DS_CODE");
            obj.set_readonly("true");
            this.divData.form.tabData.tab3.form.div00.addChild(obj.name, obj);

            obj = new Edit("txtAT_SITEEXPLAIN","sta06:5","35","295","20",null,null,null,null,null,null,this.divData.form.tabData.tab3.form.div00.form);
            obj.set_taborder("2");
            obj.set_value("");
            obj.set_readonly("true");
            this.divData.form.tabData.tab3.form.div00.addChild(obj.name, obj);

            obj = new Calendar("tclDT_EXPLAIN","sta03:5","sta02:4","110","20",null,null,null,null,null,null,this.divData.form.tabData.tab3.form.div00.form);
            obj.set_taborder("2");
            obj.set_dateformat("yyyy-MM-dd");
            obj.set_editformat("yyyyMMdd");
            obj.set_autoselect("true");
            obj.set_value("");
            obj.set_readonly("true");
            this.divData.form.tabData.tab3.form.div00.addChild(obj.name, obj);

            obj = new Calendar("tclDT_EXPLAIN_GONGO","sta07:5","sta05:4","110","20",null,null,null,null,null,null,this.divData.form.tabData.tab3.form.div00.form);
            obj.set_taborder("2");
            obj.set_dateformat("yyyy-MM-dd");
            obj.set_editformat("yyyyMMdd");
            obj.set_autoselect("true");
            obj.set_value("");
            obj.set_readonly("true");
            this.divData.form.tabData.tab3.form.div00.addChild(obj.name, obj);

            obj = new Combo("ccboDT_EXPLAIN_HOUR","tclDT_EXPLAIN:5","sta02:4","45","20",null,null,null,null,null,null,this.divData.form.tabData.tab3.form.div00.form);
            obj.set_taborder("1");
            obj.set_innerdataset("dsHOUR");
            obj.set_codecolumn("CD_CODE");
            obj.set_datacolumn("DS_CODE");
            obj.set_readonly("true");
            obj.set_text("00");
            obj.set_value("00");
            obj.set_index("0");
            this.divData.form.tabData.tab3.form.div00.addChild(obj.name, obj);

            obj = new Static("staDT_EXPLAIN_HOUR","ccboDT_EXPLAIN_HOUR:3","sta02:4","20","20",null,null,null,null,null,null,this.divData.form.tabData.tab3.form.div00.form);
            obj.set_taborder("1");
            obj.set_text("시");
            obj.getSetter("readonly").set("true");
            this.divData.form.tabData.tab3.form.div00.addChild(obj.name, obj);

            obj = new Combo("ccboDT_EXPLAIN_MINUTE","staDT_EXPLAIN_HOUR:5","sta02:4","45","20",null,null,null,null,null,null,this.divData.form.tabData.tab3.form.div00.form);
            obj.set_taborder("1");
            obj.set_innerdataset("dsMINUTE");
            obj.set_codecolumn("CD_CODE");
            obj.set_datacolumn("DS_CODE");
            obj.set_readonly("true");
            obj.set_text("00");
            obj.set_value("00");
            obj.set_index("0");
            this.divData.form.tabData.tab3.form.div00.addChild(obj.name, obj);

            obj = new Static("staDT_EXPLAIN_MINUTE","ccboDT_EXPLAIN_MINUTE:3","sta02:4","20","20",null,null,null,null,null,null,this.divData.form.tabData.tab3.form.div00.form);
            obj.set_taborder("1");
            obj.set_text("분");
            obj.getSetter("readonly").set("true");
            this.divData.form.tabData.tab3.form.div00.addChild(obj.name, obj);

            obj = new Div("div01","10","div00:5",null,"118","10",null,null,null,null,null,this.divData.form.tabData.tab3.form);
            obj.set_taborder("1");
            obj.set_text("div00");
            this.divData.form.tabData.tab3.addChild(obj.name, obj);

            obj = new Static("sta0111","0","0",null,"22","0",null,null,null,null,null,this.divData.form.tabData.tab3.form.div01.form);
            obj.set_taborder("1");
            obj.set_text("현장담당");
            obj.set_cssclass("sta_TITLE_Bg");
            this.divData.form.tabData.tab3.form.div01.addChild(obj.name, obj);

            obj = new Static("sta001","0","30","110","30",null,null,null,null,null,null,this.divData.form.tabData.tab3.form.div01.form);
            obj.set_taborder("1");
            obj.set_text("관리책임자");
            obj.set_cssclass("sta_WF_tablelabel");
            this.divData.form.tabData.tab3.form.div01.addChild(obj.name, obj);

            obj = new Static("sta00","0","59","110","30",null,null,null,null,null,null,this.divData.form.tabData.tab3.form.div01.form);
            obj.set_taborder("1");
            obj.set_text("현장담당자");
            obj.set_cssclass("sta_WF_tablelabel");
            this.divData.form.tabData.tab3.form.div01.addChild(obj.name, obj);

            obj = new Static("sta03","0","88","110","30",null,null,null,null,null,null,this.divData.form.tabData.tab3.form.div01.form);
            obj.set_taborder("1");
            obj.set_text("기타사항");
            obj.set_cssclass("sta_WF_tablelabel");
            this.divData.form.tabData.tab3.form.div01.addChild(obj.name, obj);

            obj = new Static("sta101","109","30","283","30",null,null,null,null,null,null,this.divData.form.tabData.tab3.form.div01.form);
            obj.set_taborder("1");
            obj.set_cssclass("sta_WF_tablebg");
            this.divData.form.tabData.tab3.form.div01.addChild(obj.name, obj);

            obj = new Static("sta02","109","59","283","30",null,null,null,null,null,null,this.divData.form.tabData.tab3.form.div01.form);
            obj.set_taborder("1");
            obj.set_cssclass("sta_WF_tablebg");
            this.divData.form.tabData.tab3.form.div01.addChild(obj.name, obj);

            obj = new Static("sta04","109","88","590","30",null,null,null,null,null,null,this.divData.form.tabData.tab3.form.div01.form);
            obj.set_taborder("1");
            obj.set_cssclass("sta_WF_tablebg");
            this.divData.form.tabData.tab3.form.div01.addChild(obj.name, obj);

            obj = new Static("sta06","sta101:-1","30","110","30",null,null,null,null,null,null,this.divData.form.tabData.tab3.form.div01.form);
            obj.set_taborder("1");
            obj.set_text("전화번호");
            obj.set_cssclass("sta_WF_tablelabel");
            this.divData.form.tabData.tab3.form.div01.addChild(obj.name, obj);

            obj = new Static("sta07","sta02:-1","sta06:-1","110","30",null,null,null,null,null,null,this.divData.form.tabData.tab3.form.div01.form);
            obj.set_taborder("1");
            obj.set_text("전화번호");
            obj.set_cssclass("sta_WF_tablelabel");
            this.divData.form.tabData.tab3.form.div01.addChild(obj.name, obj);

            obj = new Static("sta05","sta06:-1","30","199","30",null,null,null,null,null,null,this.divData.form.tabData.tab3.form.div01.form);
            obj.set_taborder("1");
            obj.set_cssclass("sta_WF_tablebg");
            this.divData.form.tabData.tab3.form.div01.addChild(obj.name, obj);

            obj = new Static("sta08","sta07:-1","sta05:-1","199","30",null,null,null,null,null,null,this.divData.form.tabData.tab3.form.div01.form);
            obj.set_taborder("1");
            obj.set_cssclass("sta_WF_tablebg");
            obj.getSetter("readonly").set("true");
            this.divData.form.tabData.tab3.form.div01.addChild(obj.name, obj);

            obj = new Edit("txtRM_BIDREMARK","sta03:5","sta02:4","579","20",null,null,null,null,null,null,this.divData.form.tabData.tab3.form.div01.form);
            obj.set_taborder("2");
            obj.set_value("");
            obj.set_readonly("true");
            this.divData.form.tabData.tab3.form.div01.addChild(obj.name, obj);

            obj = new Div("ccfID_SITESABUN_01","sta00:5","sta101:4","272","20",null,null,null,null,null,null,this.divData.form.tabData.tab3.form.div01.form);
            obj.getSetter("CodeFindName").set("DZX_CFUSER");
            obj.getSetter("CDTextWidth").set("70");
            obj.set_taborder("1");
            obj.set_url("cmm::cmmCodeFind.xfdl");
            obj.getSetter("readonly").set("true");
            this.divData.form.tabData.tab3.form.div01.addChild(obj.name, obj);

            obj = new Div("ccfID_MANAGER_01","sta001:5","35","272","20",null,null,null,null,null,null,this.divData.form.tabData.tab3.form.div01.form);
            obj.getSetter("CodeFindName").set("DZX_CFUSER");
            obj.getSetter("CDTextWidth").set("70");
            obj.set_taborder("1");
            obj.set_url("cmm::cmmCodeFind.xfdl");
            obj.getSetter("readonly").set("true");
            this.divData.form.tabData.tab3.form.div01.addChild(obj.name, obj);

            obj = new Edit("txtNO_MANAGERTEL","sta06:5","35","188","20",null,null,null,null,null,null,this.divData.form.tabData.tab3.form.div01.form);
            obj.set_taborder("2");
            obj.set_value("");
            obj.set_readonly("true");
            this.divData.form.tabData.tab3.form.div01.addChild(obj.name, obj);

            obj = new Edit("txtNO_SITETEL","sta07:5","sta05:4","188","20",null,null,null,null,null,null,this.divData.form.tabData.tab3.form.div01.form);
            obj.set_taborder("2");
            obj.set_value("");
            obj.set_readonly("true");
            this.divData.form.tabData.tab3.form.div01.addChild(obj.name, obj);

            obj = new Div("div02","10","div01:5",null,"217","10",null,null,null,null,null,this.divData.form.tabData.tab3.form);
            obj.set_taborder("2");
            obj.set_text("div00");
            obj.set_formscrolltype("none");
            this.divData.form.tabData.tab3.addChild(obj.name, obj);

            obj = new Static("sta0111","0","0",null,"22","0",null,null,null,null,null,this.divData.form.tabData.tab3.form.div02.form);
            obj.set_taborder("0");
            obj.set_text("입찰견적");
            obj.set_cssclass("sta_TITLE_Bg");
            this.divData.form.tabData.tab3.form.div02.addChild(obj.name, obj);

            obj = new Static("sta001","0","30","110","30",null,null,null,null,null,null,this.divData.form.tabData.tab3.form.div02.form);
            obj.set_taborder("1");
            obj.set_text("입찰공고일");
            obj.set_cssclass("sta_WF_tablelabel");
            this.divData.form.tabData.tab3.form.div02.addChild(obj.name, obj);

            obj = new Static("sta00","0","59","110","30",null,null,null,null,null,null,this.divData.form.tabData.tab3.form.div02.form);
            obj.set_taborder("2");
            obj.set_text("입찰일시");
            obj.set_cssclass("sta_WF_tablelabel");
            this.divData.form.tabData.tab3.form.div02.addChild(obj.name, obj);

            obj = new Static("sta101","109","30","283","30",null,null,null,null,null,null,this.divData.form.tabData.tab3.form.div02.form);
            obj.set_taborder("3");
            obj.set_cssclass("sta_WF_tablebg");
            this.divData.form.tabData.tab3.form.div02.addChild(obj.name, obj);

            obj = new Static("sta02","109","59","283","30",null,null,null,null,null,null,this.divData.form.tabData.tab3.form.div02.form);
            obj.set_taborder("4");
            obj.set_cssclass("sta_WF_tablebg");
            this.divData.form.tabData.tab3.form.div02.addChild(obj.name, obj);

            obj = new Static("sta06","sta101:-1","30","110","30",null,null,null,null,null,null,this.divData.form.tabData.tab3.form.div02.form);
            obj.set_taborder("5");
            obj.set_text("낙찰방식");
            obj.set_cssclass("sta_WF_tablelabel");
            this.divData.form.tabData.tab3.form.div02.addChild(obj.name, obj);

            obj = new Static("sta07","sta02:-1","sta06:-1","110","30",null,null,null,null,null,null,this.divData.form.tabData.tab3.form.div02.form);
            obj.set_taborder("6");
            obj.set_text("입찰방식");
            obj.set_cssclass("sta_WF_tablelabel");
            this.divData.form.tabData.tab3.form.div02.addChild(obj.name, obj);

            obj = new Static("sta05","sta06:-1","30","160","30",null,null,null,null,null,null,this.divData.form.tabData.tab3.form.div02.form);
            obj.set_taborder("7");
            obj.set_cssclass("sta_WF_tablebg");
            this.divData.form.tabData.tab3.form.div02.addChild(obj.name, obj);

            obj = new Static("sta08","sta07:-1","sta05:-1","160","30",null,null,null,null,null,null,this.divData.form.tabData.tab3.form.div02.form);
            obj.set_taborder("8");
            obj.set_cssclass("sta_WF_tablebg");
            this.divData.form.tabData.tab3.form.div02.addChild(obj.name, obj);

            obj = new Static("sta01","0","98","110","30",null,null,null,null,null,null,this.divData.form.tabData.tab3.form.div02.form);
            obj.set_taborder("9");
            obj.set_text("입찰코디네이터");
            obj.set_cssclass("sta_WF_tablelabel");
            this.divData.form.tabData.tab3.form.div02.addChild(obj.name, obj);

            obj = new Static("sta03","0","127","110","30",null,null,null,null,null,null,this.divData.form.tabData.tab3.form.div02.form);
            obj.set_taborder("10");
            obj.set_text("입찰담당1");
            obj.set_cssclass("sta_WF_tablelabel");
            this.divData.form.tabData.tab3.form.div02.addChild(obj.name, obj);

            obj = new Static("sta04","109","98","283","30",null,null,null,null,null,null,this.divData.form.tabData.tab3.form.div02.form);
            obj.set_taborder("11");
            obj.set_cssclass("sta_WF_tablebg");
            this.divData.form.tabData.tab3.form.div02.addChild(obj.name, obj);

            obj = new Static("sta09","109","127","283","30",null,null,null,null,null,null,this.divData.form.tabData.tab3.form.div02.form);
            obj.set_taborder("12");
            obj.set_cssclass("sta_WF_tablebg");
            this.divData.form.tabData.tab3.form.div02.addChild(obj.name, obj);

            obj = new Static("sta10","sta04:-1","98","110","30",null,null,null,null,null,null,this.divData.form.tabData.tab3.form.div02.form);
            obj.set_taborder("13");
            obj.set_text("전화번호");
            obj.set_cssclass("sta_WF_tablelabel");
            this.divData.form.tabData.tab3.form.div02.addChild(obj.name, obj);

            obj = new Static("sta11","sta09:-1","127","110","30",null,null,null,null,null,null,this.divData.form.tabData.tab3.form.div02.form);
            obj.set_taborder("14");
            obj.set_text("전화번호");
            obj.set_cssclass("sta_WF_tablelabel");
            this.divData.form.tabData.tab3.form.div02.addChild(obj.name, obj);

            obj = new Static("sta12","sta10:-1","98","160","30",null,null,null,null,null,null,this.divData.form.tabData.tab3.form.div02.form);
            obj.set_taborder("15");
            obj.set_cssclass("sta_WF_tablebg");
            this.divData.form.tabData.tab3.form.div02.addChild(obj.name, obj);

            obj = new Static("sta13","sta11:-1","127","160","30",null,null,null,null,null,null,this.divData.form.tabData.tab3.form.div02.form);
            obj.set_taborder("16");
            obj.set_cssclass("sta_WF_tablebg");
            this.divData.form.tabData.tab3.form.div02.addChild(obj.name, obj);

            obj = new Static("sta14","0","156","110","30",null,null,null,null,null,null,this.divData.form.tabData.tab3.form.div02.form);
            obj.set_taborder("17");
            obj.set_text("입찰담당2");
            obj.set_cssclass("sta_WF_tablelabel");
            this.divData.form.tabData.tab3.form.div02.addChild(obj.name, obj);

            obj = new Static("sta15","109","156","283","30",null,null,null,null,null,null,this.divData.form.tabData.tab3.form.div02.form);
            obj.set_taborder("18");
            obj.set_cssclass("sta_WF_tablebg");
            this.divData.form.tabData.tab3.form.div02.addChild(obj.name, obj);

            obj = new Static("sta16","sta15:-1","156","110","30",null,null,null,null,null,null,this.divData.form.tabData.tab3.form.div02.form);
            obj.set_taborder("19");
            obj.set_text("전화번호");
            obj.set_cssclass("sta_WF_tablelabel");
            this.divData.form.tabData.tab3.form.div02.addChild(obj.name, obj);

            obj = new Static("sta17","sta16:-1","156","160","30",null,null,null,null,null,null,this.divData.form.tabData.tab3.form.div02.form);
            obj.set_taborder("20");
            obj.set_cssclass("sta_WF_tablebg");
            this.divData.form.tabData.tab3.form.div02.addChild(obj.name, obj);

            obj = new Static("sta18","0","185","110","30",null,null,null,null,null,null,this.divData.form.tabData.tab3.form.div02.form);
            obj.set_taborder("21");
            obj.set_text("문의담당");
            obj.set_cssclass("sta_WF_tablelabel");
            this.divData.form.tabData.tab3.form.div02.addChild(obj.name, obj);

            obj = new Static("sta19","109","185","283","30",null,null,null,null,null,null,this.divData.form.tabData.tab3.form.div02.form);
            obj.set_taborder("22");
            obj.set_cssclass("sta_WF_tablebg");
            this.divData.form.tabData.tab3.form.div02.addChild(obj.name, obj);

            obj = new Static("sta20","sta19:-1","185","110","30",null,null,null,null,null,null,this.divData.form.tabData.tab3.form.div02.form);
            obj.set_taborder("23");
            obj.set_text("전화번호");
            obj.set_cssclass("sta_WF_tablelabel");
            this.divData.form.tabData.tab3.form.div02.addChild(obj.name, obj);

            obj = new Static("sta21","sta20:-1","185","160","30",null,null,null,null,null,null,this.divData.form.tabData.tab3.form.div02.form);
            obj.set_taborder("24");
            obj.set_cssclass("sta_WF_tablebg");
            this.divData.form.tabData.tab3.form.div02.addChild(obj.name, obj);

            obj = new Static("sta22","sta12:-1","98","71","30",null,null,null,null,null,null,this.divData.form.tabData.tab3.form.div02.form);
            obj.set_taborder("25");
            obj.set_text("이메일");
            obj.set_cssclass("sta_WF_tablelabel");
            this.divData.form.tabData.tab3.form.div02.addChild(obj.name, obj);

            obj = new Static("sta23","sta22:-1","98","195","30",null,null,null,null,null,null,this.divData.form.tabData.tab3.form.div02.form);
            obj.set_taborder("26");
            obj.set_cssclass("sta_WF_tablebg");
            this.divData.form.tabData.tab3.form.div02.addChild(obj.name, obj);

            obj = new Static("sta24","sta13:-1","127","71","30",null,null,null,null,null,null,this.divData.form.tabData.tab3.form.div02.form);
            obj.set_taborder("27");
            obj.set_text("이메일");
            obj.set_cssclass("sta_WF_tablelabel");
            this.divData.form.tabData.tab3.form.div02.addChild(obj.name, obj);

            obj = new Static("sta25","sta24:-1","127","195","30",null,null,null,null,null,null,this.divData.form.tabData.tab3.form.div02.form);
            obj.set_taborder("28");
            obj.set_cssclass("sta_WF_tablebg");
            this.divData.form.tabData.tab3.form.div02.addChild(obj.name, obj);

            obj = new Static("sta26","sta17:-1","156","71","30",null,null,null,null,null,null,this.divData.form.tabData.tab3.form.div02.form);
            obj.set_taborder("29");
            obj.set_text("이메일");
            obj.set_cssclass("sta_WF_tablelabel");
            this.divData.form.tabData.tab3.form.div02.addChild(obj.name, obj);

            obj = new Static("sta27","sta26:-1","156","195","30",null,null,null,null,null,null,this.divData.form.tabData.tab3.form.div02.form);
            obj.set_taborder("30");
            obj.set_cssclass("sta_WF_tablebg");
            this.divData.form.tabData.tab3.form.div02.addChild(obj.name, obj);

            obj = new Static("sta28","sta21:-1","185","71","30",null,null,null,null,null,null,this.divData.form.tabData.tab3.form.div02.form);
            obj.set_taborder("31");
            obj.set_text("이메일");
            obj.set_cssclass("sta_WF_tablelabel");
            this.divData.form.tabData.tab3.form.div02.addChild(obj.name, obj);

            obj = new Static("sta29","sta28:-1","185","195","30",null,null,null,null,null,null,this.divData.form.tabData.tab3.form.div02.form);
            obj.set_taborder("32");
            obj.set_cssclass("sta_WF_tablebg");
            this.divData.form.tabData.tab3.form.div02.addChild(obj.name, obj);

            obj = new Edit("txtDS_BID_SUCCESS","sta06:5","35","144","20",null,null,null,null,null,null,this.divData.form.tabData.tab3.form.div02.form);
            obj.set_taborder("47");
            obj.set_readonly("true");
            this.divData.form.tabData.tab3.form.div02.addChild(obj.name, obj);

            obj = new Div("ccfID_BIDCOORD","sta01:5","103","174","20",null,null,null,null,null,null,this.divData.form.tabData.tab3.form.div02.form);
            obj.getSetter("CodeFindName").set("DZX_CFUSER");
            obj.getSetter("CDTextWidth").set("70");
            obj.set_taborder("34");
            obj.set_url("cmm::cmmCodeFind.xfdl");
            obj.getSetter("readonly").set("true");
            this.divData.form.tabData.tab3.form.div02.addChild(obj.name, obj);

            obj = new Edit("txtNO_PRCOORDITEL","sta10:5","103","144","20",null,null,null,null,null,null,this.divData.form.tabData.tab3.form.div02.form);
            obj.set_taborder("46");
            obj.set_readonly("true");
            this.divData.form.tabData.tab3.form.div02.addChild(obj.name, obj);

            obj = new Edit("txtNO_PRDAM1TEL","sta11:5","132","144","20",null,null,null,null,null,null,this.divData.form.tabData.tab3.form.div02.form);
            obj.set_taborder("45");
            obj.set_readonly("true");
            this.divData.form.tabData.tab3.form.div02.addChild(obj.name, obj);

            obj = new Edit("txtNO_PRDAM2TEL","sta16:5","161","144","20",null,null,null,null,null,null,this.divData.form.tabData.tab3.form.div02.form);
            obj.set_taborder("37");
            obj.set_readonly("true");
            this.divData.form.tabData.tab3.form.div02.addChild(obj.name, obj);

            obj = new Edit("txtNO_QUESTIONTEL","sta20:5","190","144","20",null,null,null,null,null,null,this.divData.form.tabData.tab3.form.div02.form);
            obj.set_taborder("38");
            obj.set_readonly("true");
            this.divData.form.tabData.tab3.form.div02.addChild(obj.name, obj);

            obj = new Edit("txtEM_BIDCOORDI","sta22:5","103","184","20",null,null,null,null,null,null,this.divData.form.tabData.tab3.form.div02.form);
            obj.set_taborder("39");
            obj.set_readonly("true");
            this.divData.form.tabData.tab3.form.div02.addChild(obj.name, obj);

            obj = new Edit("txtEM_BIDDAM1","sta24:5","132","184","20",null,null,null,null,null,null,this.divData.form.tabData.tab3.form.div02.form);
            obj.set_taborder("40");
            obj.set_readonly("true");
            this.divData.form.tabData.tab3.form.div02.addChild(obj.name, obj);

            obj = new Edit("txtEM_BIDDAM2","sta26:5","161","184","20",null,null,null,null,null,null,this.divData.form.tabData.tab3.form.div02.form);
            obj.set_taborder("41");
            obj.set_readonly("true");
            this.divData.form.tabData.tab3.form.div02.addChild(obj.name, obj);

            obj = new Edit("txtEM_QUESTION","sta28:5","191","184","20",null,null,null,null,null,null,this.divData.form.tabData.tab3.form.div02.form);
            obj.set_taborder("42");
            obj.set_readonly("true");
            this.divData.form.tabData.tab3.form.div02.addChild(obj.name, obj);

            obj = new Calendar("tclDT_BID_GONGO","115","35","110","20",null,null,null,null,null,null,this.divData.form.tabData.tab3.form.div02.form);
            obj.set_taborder("43");
            obj.set_dateformat("yyyy-MM-dd");
            obj.set_editformat("yyyyMMdd");
            obj.set_autoselect("true");
            obj.set_value("");
            obj.set_readonly("true");
            this.divData.form.tabData.tab3.form.div02.addChild(obj.name, obj);

            obj = new Calendar("tclDT_BIDMAGAM","115","64","110","20",null,null,null,null,null,null,this.divData.form.tabData.tab3.form.div02.form);
            obj.set_taborder("44");
            obj.set_dateformat("yyyy-MM-dd");
            obj.set_editformat("yyyyMMdd");
            obj.set_autoselect("true");
            obj.set_value("");
            obj.set_readonly("true");
            this.divData.form.tabData.tab3.form.div02.addChild(obj.name, obj);

            obj = new Div("ccfID_BIDDAM1","115","132","174","20",null,null,null,null,null,null,this.divData.form.tabData.tab3.form.div02.form);
            obj.getSetter("CodeFindName").set("DZX_CFUSER");
            obj.getSetter("CDTextWidth").set("70");
            obj.set_taborder("36");
            obj.set_url("cmm::cmmCodeFind.xfdl");
            obj.getSetter("readonly").set("true");
            this.divData.form.tabData.tab3.form.div02.addChild(obj.name, obj);

            obj = new Div("ccfID_BIDDAM2","115","161","174","20",null,null,null,null,null,null,this.divData.form.tabData.tab3.form.div02.form);
            obj.getSetter("CodeFindName").set("DZX_CFUSER");
            obj.getSetter("CDTextWidth").set("70");
            obj.set_taborder("35");
            obj.set_url("cmm::cmmCodeFind.xfdl");
            obj.getSetter("readonly").set("true");
            this.divData.form.tabData.tab3.form.div02.addChild(obj.name, obj);

            obj = new Div("ccfID_QUESTION","115","190","174","20",null,null,null,null,null,null,this.divData.form.tabData.tab3.form.div02.form);
            obj.getSetter("CodeFindName").set("DZX_CFUSER");
            obj.getSetter("CDTextWidth").set("70");
            obj.set_taborder("33");
            obj.set_url("cmm::cmmCodeFind.xfdl");
            obj.getSetter("readonly").set("true");
            this.divData.form.tabData.tab3.form.div02.addChild(obj.name, obj);

            obj = new Combo("cboONOFF_EXPLAIN","sta07:5","64","144","20",null,null,null,null,null,null,this.divData.form.tabData.tab3.form.div02.form);
            obj.set_taborder("48");
            obj.set_innerdataset("dsONOFF_EXPLAIN");
            obj.set_codecolumn("CD_CODE");
            obj.set_datacolumn("DS_CODE");
            obj.set_readonly("true");
            this.divData.form.tabData.tab3.form.div02.addChild(obj.name, obj);

            obj = new Combo("ccboDT_BIDMAGAM_HOUR","tclDT_BIDMAGAM:5","64","45","20",null,null,null,null,null,null,this.divData.form.tabData.tab3.form.div02.form);
            obj.set_taborder("1");
            obj.set_innerdataset("dsHOUR");
            obj.set_codecolumn("CD_CODE");
            obj.set_datacolumn("DS_CODE");
            obj.set_readonly("true");
            obj.set_text("00");
            obj.set_value("00");
            obj.set_index("0");
            this.divData.form.tabData.tab3.form.div02.addChild(obj.name, obj);

            obj = new Static("staDT_BIDMAGAM_HOUR","ccboDT_BIDMAGAM_HOUR:3","64","20","20",null,null,null,null,null,null,this.divData.form.tabData.tab3.form.div02.form);
            obj.set_taborder("1");
            obj.set_text("시");
            obj.getSetter("readonly").set("true");
            this.divData.form.tabData.tab3.form.div02.addChild(obj.name, obj);

            obj = new Combo("ccboDT_BIDMAGAM_MINUTE","staDT_BIDMAGAM_HOUR:5","64","45","20",null,null,null,null,null,null,this.divData.form.tabData.tab3.form.div02.form);
            obj.set_taborder("1");
            obj.set_innerdataset("dsMINUTE");
            obj.set_codecolumn("CD_CODE");
            obj.set_datacolumn("DS_CODE");
            obj.set_readonly("true");
            obj.set_text("00");
            obj.set_value("00");
            obj.set_index("0");
            this.divData.form.tabData.tab3.form.div02.addChild(obj.name, obj);

            obj = new Static("staDT_BIDMAGAM_MINUTE","ccboDT_BIDMAGAM_MINUTE:3","64","20","20",null,null,null,null,null,null,this.divData.form.tabData.tab3.form.div02.form);
            obj.set_taborder("1");
            obj.set_text("분");
            obj.getSetter("readonly").set("true");
            this.divData.form.tabData.tab3.form.div02.addChild(obj.name, obj);

            obj = new Button("btn03","tabData:-100","divData02:5","60","23",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("4");
            obj.set_text("불참메일발송");
            obj.set_fittocontents("width");
            obj.set_padding("4px 7px 4px 7px");
            obj.set_color("crimson");
            this.divData.addChild(obj.name, obj);

            obj = new Button("btn02","sta501:-100","divData01:5","60","23",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("5");
            obj.set_text("현설참석여부확인");
            obj.set_fittocontents("width");
            obj.set_padding("4px 7px 4px 7px");
            this.divData.addChild(obj.name, obj);

            obj = new Button("btn01",null,"divData01:5","60","23","btn02:5",null,null,null,null,null,this.divData.form);
            obj.set_taborder("6");
            obj.set_text("현설질의응답");
            obj.set_fittocontents("width");
            obj.set_padding("4px 7px 4px 7px");
            obj.set_color("crimson");
            this.divData.addChild(obj.name, obj);

            obj = new Button("btn00",null,"divData01:5","60","23","btn01:5",null,null,null,null,null,this.divData.form);
            obj.set_taborder("3");
            obj.set_text("현설참석자명단");
            obj.set_fittocontents("width");
            obj.set_padding("4px 7px 4px 7px");
            this.divData.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this
            obj = new Layout("default","",this._adjust_width,this._adjust_height,this,function(p){});
            this.addLayout(obj.name, obj);
            
            // BindItem Information
            obj = new BindItem("item0","divSearch.form.ccfCD_SITE.form.CDTextBox","value","dsSearch","CD_SITE");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item1","divSearch.form.ccfNO_PR.form.CDTextBox","value","dsSearch","NO_PR");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item2","divData.form.divData01.form.cboTY_SELECT","value","dsList","TY_SELECT");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item3","divData.form.divData01.form.cboDS_CONTMETHOD","value","dsList","DS_CONTMETHOD");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item4","divData.form.divData01.form.txtNO_PR","value","dsList","NO_PR");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item5","divData.form.divData01.form.txtRT_TAX","value","dsList","RT_TAX");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item6","divData.form.divData01.form.cfCD_VENDOR.form.CDTextBox","value","dsList","CD_VENDOR");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item7","divData.form.divData01.form.cfCD_VENDOR.form.DSTextBox","value","dsList","DS_VENDOR");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item8","divData.form.divData01.form.cboTY_TAX","value","dsList","TY_TAX");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item9","divData.form.divData01.form.ctclDT_DELIVERY","value","dsList","DT_DELIVERY");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item10","divData.form.divData01.form.cfCD_COSTCLASS.form.CDTextBox","value","dsList","CD_COSTCLASS");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item11","divData.form.divData01.form.cfCD_COSTCLASS.form.DSTextBox","value","dsList","DS_COSTCLASS");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item12","divData.form.divData01.form.cfCD_LICCOST.form.CDTextBox","value","dsList","CD_LICCOST");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item13","divData.form.divData01.form.cfCD_LICCOST.form.DSTextBox","value","dsList","DS_LICCOST");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item14","divData.form.divData01.form.txtDS_SUBCON","value","dsList","DS_SUBCON");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item15","divData.form.divData01.form.ccboTY_BID","value","dsList","TY_BID");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item16","divSearch.form.ctxtDS_STATUS1","value","dsList","DS_STATUS1");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item17","divSearch.form.ctxtDS_BIDSTATUS","value","dsList","DS_BIDSTATUS");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item18","divData.form.divData01.form.txtNO_CONT","value","dsList","NO_CONT");
            this.addChild(obj.name, obj);
            obj.bind();
            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {
            this._addPreloadList("fdl","cmm::cmmCodeFind.xfdl");
        };
        
        // User Script
        this.registerScript("DMB_ORDERPLANSR_SITE_APPROVAL.xfdl", function() {
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

        	//this.btnCreatePo.set_enable(false);
        	//this.btnPoDetail.set_enable(false);

        	// 타화면에서 오픈시 넘어오는 파라미터 처리
        	if(!this.gfnIsNull(this.getOwnerFrame().PARAM01) && !this.gfnIsNull(this.getOwnerFrame().PARAM02)) {
        		this.dsSearch.setColumn(0, "CD_SITE", this.getOwnerFrame().PARAM01);
        		this.divSearch.form.ccfCD_SITE.form.fnCodeFindLoad();
        		this.dsSearch.setColumn(0, "NO_PR", this.getOwnerFrame().PARAM02);
        		this.divSearch.form.ccfNO_PR.form.fnCodeFindLoad();

        		this.dsSearch.setColumn(0, "YN_LINK", this.getOwnerFrame().YN_LINK);	// 화면에서 팝업을 호출할경우 N, 링크를 통해서 화면을 오픈할경우 null 이다
        		this.dsSearch.setColumn(0, "ID_AP", this.getOwnerFrame().ID_AP);		// 전자결재문서번호

        		this.ccfCD_SITE.form.fnFitToContents();

        		// 결재상태값 조회 후 그리드 조회한다
        		this.fnApprSel();
        	}


        };

        /************************************************************************
         * 버튼 설정 : 화면(Tab) 전환시 마다 호출
         * 서브버튼 사용 및 공통버튼 강제 제어시 여기서 처리
         ************************************************************************/
        this.fnSetButton = function() {

        }

        /************************************************************************
         * 확장 버튼 : 화면별 버튼 설정 ID, function 연결 (화면버튼관리)
         ************************************************************************/
        this.fnSetExtendButton = function() {
        	this.btnAprvCmpl = this.gfnFormButtonAdd("btnAprvCmpl", "fnAprvCmpl");
        	this.btnAprvCnc = this.gfnFormButtonAdd("btnAprvCnc", "fnAprvCnc");
        	this.btnAprvInf = this.gfnFormButtonAdd("btnAprvInf", "fnAprvInf");
        	this.btnAprvSang = this.gfnFormButtonAdd("btnAprvSang", "fnAprvSang");
        	this.btnApCnl = this.gfnFormButtonAdd("btnApCnl", "fnApCnl");
        	this.btnAttach = this.gfnFormButtonAdd("btnAttach", "fnAttach");
        };

        /************************************************************************
         * 변수 선언
         ************************************************************************/
        this.fnSetVariable = function() {
        	this.ccfCD_SITE = this.divSearch.form.ccfCD_SITE;
        	this.ccfNO_PR = this.divSearch.form.ccfNO_PR;

        	this.dxGrid = this.divData.form.divData02.form.objGrid;

        	// 결재관련
        	this.dxGridAppr = this.divData.form.divDataAppr.form.objGridAppr;
        };

        /************************************************************************
         * 이벤트 설정
         ************************************************************************/
        this.fnSetEvent = function() {
        	this.ccfNO_PR.BeforeUserDataSetParam = "fnBeforeUserDataSetParam";
        	this.ccfCD_SITE.AfterCDTextChanged = "fnAfterCDTextChanged";

        	this.divData.form.divData01.form.cfCD_LICCOST.BeforeUserDataSetParam = "fnBeforeUserDataSetParam";
        	this.divData.form.divData01.form.cfCD_COSTCLASS.AfterCDTextChanged ="fnAfterCDTextChanged";
        	this.divData.form.divData01.form.cfCD_LICCOST.AfterCDTextChanged = "fnAfterCDTextChanged";

        	this.gfnGridInit(this.dxGrid, this.dsList1, "DC", "DCB_PRITEM_GRID");
        	this.dxGrid.EnterCell = "fnGrid_EnterCell";

        	// 결재관련
        	this.gfnGridInit(this.dxGridAppr, this.dsListAplines, "DZ", "DZR_APLINES_01");
        	this.dxGridAppr.set_extendsizetype("none");
        	this.dxGridAppr.set_scrollbartype("none default");	// 가로 스크롤이 생기지 않게 셋팅
        	var colDS_NOTE = this.dxGridAppr.getBindCellIndex("body", "DS_NOTE");
        	this.dxGridAppr.setCellProperty("body", colDS_NOTE, "tooltiptext", "expr:DS_NOTE==''?'':DS_NOTE" );	// 의견컬럼 툴팁추가
        };

        /************************************************************************
         * 파라미터 설정
         ************************************************************************/
        this.fnSetParameter = function() {

        	this.dsSelect = new Dataset();
        	this.dsSelect.addColumn("CD_SITE", "string");
        	this.dsSelect.addColumn("NO_PR", "string");
        	this.dsSelect.addColumn("CD_CORP", "string");
        	this.dsSelect.addColumn("CD_DEPT", "string");
        	this.dsSelect.addColumn("ID_USER", "string");

        	this.dsUpdate = new Dataset();
        	this.dsUpdate.addColumn("CD_SITE", "string");
        	this.dsUpdate.addColumn("NO_PR", "string");
        	this.dsUpdate.addColumn("NO_HADO", "string");
        	this.dsUpdate.addColumn("DS_SUBCON", "string");
        	this.dsUpdate.addColumn("TY_SELECT", "string");
        	this.dsUpdate.addColumn("RT_TAX", "bigdecimal");
        	this.dsUpdate.addColumn("TY_TAX", "string");
        	this.dsUpdate.addColumn("DT_FROM", "string");
        	this.dsUpdate.addColumn("DT_TO", "string");
        	this.dsUpdate.addColumn("DS_FROMTO", "string");
        	this.dsUpdate.addColumn("AM_TT_SILHENG", "bigdecimal");
        	this.dsUpdate.addColumn("AM_TT_DOKUB", "bigdecimal");
        	this.dsUpdate.addColumn("RT_JIBUN", "bigdecimal");
        	this.dsUpdate.addColumn("CD_VENDOR", "string");
        	this.dsUpdate.addColumn("CD_COSTCLASS", "string");
        	this.dsUpdate.addColumn("CD_LICCOST", "string");
        	this.dsUpdate.addColumn("CD_LICCOSTSUB", "string");
        	this.dsUpdate.addColumn("CD_SPECCONST", "string");
        	this.dsUpdate.addColumn("CD_AREA", "string");
        	this.dsUpdate.addColumn("DS_GONSADESC", "string");
        	this.dsUpdate.addColumn("DS_LOCATION", "string");
        	this.dsUpdate.addColumn("OR_ORDER", "string");
        	this.dsUpdate.addColumn("AM_GONGSA", "bigdecimal");
        	this.dsUpdate.addColumn("NO_RFQ", "string");
        	this.dsUpdate.addColumn("UP_PYEONG", "bigdecimal");
        	this.dsUpdate.addColumn("DS_CONTMETHOD", "string");
        	this.dsUpdate.addColumn("AREA_SITE", "bigdecimal");
        	this.dsUpdate.addColumn("AM_BASIC", "bigdecimal");
        	this.dsUpdate.addColumn("YN_PUBLISH_BID", "string");
        	this.dsUpdate.addColumn("YN_ATTACH_ILSIK", "string");
        	this.dsUpdate.addColumn("YN_HASU", "string");
        	this.dsUpdate.addColumn("YN_EXFILE_SEPARATE", "string");
        	this.dsUpdate.addColumn("NO_UNION_HADO", "string");
        	this.dsUpdate.addColumn("NO_UNION_BID_CONNECT", "string");
        	this.dsUpdate.addColumn("YN_UNION_BID", "string");
        	this.dsUpdate.addColumn("YN_UNION_BID_ING", "string");
        	this.dsUpdate.addColumn("CT_GONGU", "int");
        	this.dsUpdate.addColumn("NUM_GONGU", "int");
        	this.dsUpdate.addColumn("AREA_SITE1", "bigdecimal");
        	this.dsUpdate.addColumn("AREA_SITE2", "bigdecimal");
        	this.dsUpdate.addColumn("AREA_SITE3", "bigdecimal");
        	this.dsUpdate.addColumn("AREA_SITE4", "bigdecimal");
        	this.dsUpdate.addColumn("AREA_SITEALL", "bigdecimal");
        	this.dsUpdate.addColumn("ID_MANAGER", "string");
        	this.dsUpdate.addColumn("NO_MANAGERTEL", "string");
        	this.dsUpdate.addColumn("ID_SITESABUN", "string");
        	this.dsUpdate.addColumn("NO_SITETEL", "string");
        	this.dsUpdate.addColumn("RM_BIDREMARK", "string");
        	this.dsUpdate.addColumn("RM_REMARK", "string");
        	this.dsUpdate.addColumn("YN_EXPLAIN", "string");
        	this.dsUpdate.addColumn("ONOFF_EXPLAIN", "string");
        	this.dsUpdate.addColumn("AT_SITEEXPLAIN", "string");
        	this.dsUpdate.addColumn("DT_EXPLAIN", "string");
        	this.dsUpdate.addColumn("DT_EXPLAIN_GONGO", "string");
        	this.dsUpdate.addColumn("DT_BIDMAGAM", "string");
        	this.dsUpdate.addColumn("DT_BIDMAGAM_GONGO", "string");
        	this.dsUpdate.addColumn("TY_BID", "string");
        	this.dsUpdate.addColumn("DS_BID_SUCCESS", "string");
        	this.dsUpdate.addColumn("ONOFF", "string");
        	this.dsUpdate.addColumn("ID_BIDCOORDI", "string");
        	this.dsUpdate.addColumn("NO_PRCOORDITEL", "string");
        	this.dsUpdate.addColumn("EM_BIDCOORDI", "string");
        	this.dsUpdate.addColumn("ID_BIDDAM1", "string");
        	this.dsUpdate.addColumn("NO_PRDAM1TEL", "string");
        	this.dsUpdate.addColumn("EM_BIDDAM1", "string");
        	this.dsUpdate.addColumn("ID_BIDDAM2", "string");
        	this.dsUpdate.addColumn("NO_PRDAM2TEL", "string");
        	this.dsUpdate.addColumn("EM_BIDDAM2", "string");
        	this.dsUpdate.addColumn("ID_QUESTION", "string");
        	this.dsUpdate.addColumn("NO_QUESTIONTEL", "string");
        	this.dsUpdate.addColumn("EM_QUESTION", "string");
        	this.dsUpdate.addColumn("ID_USER", "string");
        	this.dsUpdate.addColumn("DT_DELIVERY", "string");

        	this.dsDelete = new Dataset();
        	this.dsDelete.addColumn("CD_SITE", "string");
        	this.dsDelete.addColumn("NO_PR", "string");

        	// 현설참석목록
        	this.dsSelect2 = new Dataset();
        	this.dsSelect2.addColumn("CD_GROUP", "string");
        	this.dsSelect2.addColumn("CD_SITE", "string");
        	this.dsSelect2.addColumn("NO_PR", "string");
        	this.dsSelect2.addColumn("CD_VENDOR", "string");
        	this.dsSelect2.addColumn("TY_BIDOREXPLAIN", "string");

        	this.dsUpdate2 = new Dataset();
        	this.dsUpdate2.addColumn("CD_SITE", "string");
        	this.dsUpdate2.addColumn("NO_PR", "string");
        	this.dsUpdate2.addColumn("CD_VENDOR", "string");
        	this.dsUpdate2.addColumn("YN_JOIN", "string");
        	this.dsUpdate2.addColumn("DS_CONTACTNAME", "string");
        	this.dsUpdate2.addColumn("DT_CONTACTTEL", "string");
        	this.dsUpdate2.addColumn("DS_CONTACTEMAIL", "string");
        	this.dsUpdate2.addColumn("DS_REASON", "string");

        	this.dsExecute = new Dataset();
        	this.dsExecute.addColumn("CD_SITE", "string");
        	this.dsExecute.addColumn("NO_PR", "string");
        	this.dsExecute.addColumn("CD_APP", "string");
        	this.dsExecute.addColumn("V_NO_DOC", "string");

        	this.dsDetail = new Dataset();
        	this.dsDetail.addColumn("CD_SITE", "string");
        	this.dsDetail.addColumn("NO_PR", "string");

        	this.dsUpdate1 = new Dataset();
        	this.dsUpdate1.addColumn("CD_SITE", "string");
        	this.dsUpdate1.addColumn("NO_PR", "string");
        	this.dsUpdate1.addColumn("CD_COST", "string");
        	this.dsUpdate1.addColumn("SZ_SIZE", "string");
        	this.dsUpdate1.addColumn("QN_TT_HADO", "bigdecimal");
        	this.dsUpdate1.addColumn("UP_TT_HADO", "bigdecimal");
        	this.dsUpdate1.addColumn("AM_TT_HADO", "bigdecimal");

        	this.dsInsertPO = new Dataset();
        	this.dsInsertPO.addColumn("CD_SITE", "string");
        	this.dsInsertPO.addColumn("NO_PR", "string");
        	this.dsInsertPO.addColumn("ID_USER", "string");

        	// 결재관련
        	this.dsExecAppr = new Dataset();
        	this.dsExecAppr.addColumn("ID_AP", "string");
        	this.dsExecAppr.addColumn("V_PARAM01", "string");
        	this.dsExecAppr.addColumn("V_PARAM02", "string");
        	this.dsExecAppr.addColumn("V_PARAM03", "string");
        	this.dsExecAppr.addColumn("V_PARAM04", "string");
        	this.dsExecAppr.addColumn("ST_APPR", "string");
        	this.dsExecAppr.addColumn("ID_USER", "string");

        	// 결재관련 상태
        	this.dsSelectAppr = new Dataset();
        	this.dsSelectAppr.addColumn("ID_AP", "string");
        	this.dsSelectAppr.addColumn("ID_USER", "string");

        	// 결재선 그리드
        	this.dsAplines = new Dataset();
        	this.dsAplines.addColumn("ID_AP", "string");
        }

        /************************************************************************
         * 컨트롤 이벤트
         ************************************************************************/
         /*
          *	조회 버튼
          */
        this.fnSelect = function() {
        	if (!this.fnSelectValidate()) return false;

        	this.dsSelect.clearData();
        	this.dsSelect.addRow();

        	this.dsSelect.setColumn(0, "CD_SITE", this.dsSearch.getColumn(0, "CD_SITE"));
        	this.dsSelect.setColumn(0, "NO_PR", this.dsSearch.getColumn(0, "NO_PR"));
        	this.dsSelect.setColumn(0, "CD_CORP", this.AuthClient.CD_CORP);
        	this.dsSelect.setColumn(0, "CD_DEPT", this.AuthClient.CD_DEPT);
        	this.dsSelect.setColumn(0, "ID_USER", this.AuthClient.ID_USER);

        // 	this.dsSelect2.clearData();
        // 	this.dsSelect2.addRow();
        // 	this.dsSelect2.setColumn(0, "CD_GROUP", "");
        // 	this.dsSelect2.setColumn(0, "CD_SITE", this.dsSearch.getColumn(0, "CD_SITE"));
        // 	this.dsSelect2.setColumn(0, "NO_PR", this.dsSearch.getColumn(0, "NO_PR"));
        // 	this.dsSelect2.setColumn(0, "CD_VENDOR", "");
        // 	this.dsSelect2.setColumn(0, "TY_BIDOREXPLAIN", "");

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

        this.fnDetail = function() {
        	this.dsDetail.clearData();
        	this.dsDetail.addRow();

        	this.dsDetail.setColumn(0, "CD_SITE", this.dsSearch.getColumn(0, "CD_SITE"));
        	this.dsDetail.setColumn(0, "NO_PR", this.dsSearch.getColumn(0, "NO_PR"));

        	var strSvcId    = "detail";
        	var strSvcType  = "grid";
        	var inProc		= "_dsProc";
        	var inData      = "select_d=dsDetail";
        	var outData     = "dsList1=select_d0";
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
        }

        /*
         *	삭제 버튼
         */
        this.fnDel = function() {
        	this.gfnConfirm("삭제하시겠습니까?", "fnDel_callback");
        }

        this.fnDel_callback = function(strId, val) {
        	if(val == true) {

        		this.dsDelete.clearData();
        		var nrow = this.dsDelete.addRow();
        		this.dsDelete.setColumn(nrow, "CD_SITE", this.dsList.getColumn(0, "CD_SITE"));
        		this.dsDelete.setColumn(nrow, "NO_PR", this.dsList.getColumn(0, "NO_PR"));

        		if (this.dsDelete.rowcount == 0) return;

        		var strSvcId    = "save";
        		var strSvcType  = "save";
        		var inProc		= "_dsProc";
        		var inData      = "delete=dsDelete";
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

        /*
         *	저장 버튼
         */
        this.fnSave = function() {
        	// 싱글폼(Dataset) 필수입력 체크

        // 	var arr_in = [];
        //
        // 	var update = false;
        // 	if (this.dsList.rowcount > 0) {
        // 		// 싱글폼쪽 update 유무 체크
        // 		if(this.dsList.getRowType(0) == Dataset.ROWTYPE_UPDATE) {
        // 			update = true;
        // 		}
        // 	}
        //
        // 	if (update) {
        // 		// 싱글폼 변경 내역이 있으면 필수값 체크
        	if (!this.gfnDataValidate(this.dsList, this.dsRequired)) return;

        	this.dsUpdate.clearData();
        	var nrow = this.dsUpdate.addRow();
        	this.dsUpdate.setColumn(nrow, "CD_SITE", this.dsList.getColumn(0, "CD_SITE"));
        	this.dsUpdate.setColumn(nrow, "NO_PR", this.dsList.getColumn(0, "NO_PR"));
        	this.dsUpdate.setColumn(nrow, "NO_HADO", this.dsList.getColumn(0, "NO_HADO"));
        	this.dsUpdate.setColumn(nrow, "DS_SUBCON", this.dsList.getColumn(0, "DS_SUBCON"));
        	this.dsUpdate.setColumn(nrow, "TY_SELECT", this.dsList.getColumn(0, "TY_SELECT"));
        	this.dsUpdate.setColumn(nrow, "RT_TAX", this.dsList.getColumn(0, "RT_TAX"));
        	this.dsUpdate.setColumn(nrow, "TY_TAX", this.dsList.getColumn(0, "TY_TAX"));
        	//this.dsUpdate.setColumn(nrow, "DT_FROM", this.dsList.getColumn(0, "DT_FROM"));
        	//this.dsUpdate.setColumn(nrow, "DT_TO", this.dsList.getColumn(0, "DT_TO"));
        	//this.dsUpdate.setColumn(nrow, "DS_FROMTO", this.dsList.getColumn(0, "DS_FROMTO"));
        	//this.dsUpdate.setColumn(nrow, "AM_TT_SILHENG", this.dsList.getColumn(0, "AM_TT_SILHENG"));
        	//this.dsUpdate.setColumn(nrow, "AM_TT_DOKUB", this.dsList.getColumn(0, "AM_TT_DOKUB"));
        	//this.dsUpdate.setColumn(nrow, "RT_JIBUN", this.dsList.getColumn(0, "RT_JIBUN"));
        	this.dsUpdate.setColumn(nrow, "CD_VENDOR", this.dsList.getColumn(0, "CD_VENDOR"));

        	this.dsUpdate.setColumn(nrow, "CD_COSTCLASS", this.dsList.getColumn(0, "CD_COSTCLASS"));
        	this.dsUpdate.setColumn(nrow, "CD_LICCOST", this.dsList.getColumn(0, "CD_LICCOST"));
        	//this.dsUpdate.setColumn(nrow, "CD_LICCOSTSUB", this.dsList.getColumn(0, "CD_LICCOSTSUB"));
        	//this.dsUpdate.setColumn(nrow, "CD_SPECCONST", this.dsList.getColumn(0, "CD_SPECCONST"));
        	//this.dsUpdate.setColumn(nrow, "CD_AREA", this.dsList.getColumn(0, "CD_AREA"));
        	//this.dsUpdate.setColumn(nrow, "DS_GONSADESC", this.dsList.getColumn(0, "DS_GONSADESC"));
        	//this.dsUpdate.setColumn(nrow, "DS_LOCATION", this.dsList.getColumn(0, "DS_LOCATION"));
        	//this.dsUpdate.setColumn(nrow, "OR_ORDER", this.dsList.getColumn(0, "OR_ORDER"));
        	//this.dsUpdate.setColumn(nrow, "AM_GONGSA", this.dsList.getColumn(0, "AM_GONGSA"));
        	//this.dsUpdate.setColumn(nrow, "NO_RFQ", this.dsList.getColumn(0, "NO_RFQ"));
        	//this.dsUpdate.setColumn(nrow, "UP_PYEONG", this.dsList.getColumn(0, "UP_PYEONG"));
        	this.dsUpdate.setColumn(nrow, "DS_CONTMETHOD", this.dsList.getColumn(0, "DS_CONTMETHOD"));
        //	this.dsUpdate.setColumn(nrow, "AREA_SITE", this.dsList.getColumn(0, "AREA_SITE"));
        //	this.dsUpdate.setColumn(nrow, "AM_BASIC", this.dsList.getColumn(0, "AM_BASIC"));
        //	this.dsUpdate.setColumn(nrow, "YN_PUBLISH_BID", this.dsList.getColumn(0, "YN_PUBLISH_BID"));
        //	this.dsUpdate.setColumn(nrow, "YN_ATTACH_ILSIK", this.dsList.getColumn(0, "YN_ATTACH_ILSIK"));
        	//this.dsUpdate.setColumn(nrow, "YN_HASU", this.dsList.getColumn(0, "YN_HASU"));
        	//this.dsUpdate.setColumn(nrow, "YN_EXFILE_SEPARATE", this.dsList.getColumn(0, "YN_EXFILE_SEPARATE"));
        	//this.dsUpdate.setColumn(nrow, "NO_UNION_HADO", this.dsList.getColumn(0, "NO_UNION_HADO"));
        	//this.dsUpdate.setColumn(nrow, "NO_UNION_BID_CONNECT", this.dsList.getColumn(0, "NO_UNION_BID_CONNECT"));
        	//this.dsUpdate.setColumn(nrow, "YN_UNION_BID", this.dsList.getColumn(0, "YN_UNION_BID"));
        	//this.dsUpdate.setColumn(nrow, "YN_UNION_BID_ING", this.dsList.getColumn(0, "YN_UNION_BID_ING"));
        	//this.dsUpdate.setColumn(nrow, "CT_GONGU", this.dsList.getColumn(0, "CT_GONGU"));
        	//this.dsUpdate.setColumn(nrow, "NUM_GONGU", this.dsList.getColumn(0, "NUM_GONGU"));
        	//this.dsUpdate.setColumn(nrow, "AREA_SITE1", this.dsList.getColumn(0, "AREA_SITE1"));
        	//this.dsUpdate.setColumn(nrow, "AREA_SITE2", this.dsList.getColumn(0, "AREA_SITE2"));
        	//this.dsUpdate.setColumn(nrow, "AREA_SITE3", this.dsList.getColumn(0, "AREA_SITE3"));
        	//this.dsUpdate.setColumn(nrow, "AREA_SITE4", this.dsList.getColumn(0, "AREA_SITE4"));
        	//this.dsUpdate.setColumn(nrow, "AREA_SITEALL", this.dsList.getColumn(0, "AREA_SITEALL"));
        	//this.dsUpdate.setColumn(nrow, "ID_MANAGER", this.dsList.getColumn(0, "ID_MANAGER"));
        	//this.dsUpdate.setColumn(nrow, "NO_MANAGERTEL", this.dsList.getColumn(0, "NO_MANAGERTEL"));
        	//this.dsUpdate.setColumn(nrow, "ID_SITESABUN", this.dsList.getColumn(0, "ID_SITESABUN"));
        	//this.dsUpdate.setColumn(nrow, "NO_SITETEL", this.dsList.getColumn(0, "NO_SITETEL"));
        	//this.dsUpdate.setColumn(nrow, "RM_BIDREMARK", this.dsList.getColumn(0, "RM_BIDREMARK"));
        	//this.dsUpdate.setColumn(nrow, "RM_REMARK", this.dsList.getColumn(0, "RM_REMARK"));
        	//this.dsUpdate.setColumn(nrow, "YN_EXPLAIN", this.dsList.getColumn(0, "YN_EXPLAIN"));
        	//this.dsUpdate.setColumn(nrow, "ONOFF_EXPLAIN", this.dsList.getColumn(0, "ONOFF_EXPLAIN"));
        	//this.dsUpdate.setColumn(nrow, "AT_SITEEXPLAIN", this.dsList.getColumn(0, "AT_SITEEXPLAIN"));
        	//this.dsUpdate.setColumn(nrow, "DT_EXPLAIN", this.dsList.getColumn(0, "DT_EXPLAIN"));
        	//this.dsUpdate.setColumn(nrow, "DT_EXPLAIN_GONGO", this.dsList.getColumn(0, "DT_EXPLAIN_GONGO"));
        	//this.dsUpdate.setColumn(nrow, "DT_BIDMAGAM", this.dsList.getColumn(0, "DT_BIDMAGAM"));
        	//this.dsUpdate.setColumn(nrow, "DT_BIDMAGAM_GONGO", this.dsList.getColumn(0, "DT_BIDMAGAM_GONGO"));
        	this.dsUpdate.setColumn(nrow, "TY_BID", this.dsList.getColumn(0, "TY_BID"));

        	/*
        	this.dsUpdate.setColumn(nrow, "DS_BID_SUCCESS", this.dsList.getColumn(0, "DS_BID_SUCCESS"));
        	this.dsUpdate.setColumn(nrow, "ONOFF", this.dsList.getColumn(0, "ONOFF"));
        	this.dsUpdate.setColumn(nrow, "ID_BIDCOORDI", this.dsList.getColumn(0, "ID_BIDCOORDI"));
        	this.dsUpdate.setColumn(nrow, "NO_PRCOORDITEL", this.dsList.getColumn(0, "NO_PRCOORDITEL"));
        	this.dsUpdate.setColumn(nrow, "EM_BIDCOORDI", this.dsList.getColumn(0, "EM_BIDCOORDI"));
        	this.dsUpdate.setColumn(nrow, "ID_BIDDAM1", this.dsList.getColumn(0, "ID_BIDDAM1"));
        	this.dsUpdate.setColumn(nrow, "NO_PRDAM1TEL", this.dsList.getColumn(0, "NO_PRDAM1TEL"));
        	this.dsUpdate.setColumn(nrow, "EM_BIDDAM1", this.dsList.getColumn(0, "EM_BIDDAM1"));
        	this.dsUpdate.setColumn(nrow, "ID_BIDDAM2", this.dsList.getColumn(0, "ID_BIDDAM2"));
        	this.dsUpdate.setColumn(nrow, "NO_PRDAM2TEL", this.dsList.getColumn(0, "NO_PRDAM2TEL"));
        	this.dsUpdate.setColumn(nrow, "EM_BIDDAM2", this.dsList.getColumn(0, "EM_BIDDAM2"));
        	this.dsUpdate.setColumn(nrow, "ID_QUESTION", this.dsList.getColumn(0, "ID_QUESTION"));
        	this.dsUpdate.setColumn(nrow, "NO_QUESTIONTEL", this.dsList.getColumn(0, "NO_QUESTIONTEL"));
        	this.dsUpdate.setColumn(nrow, "EM_QUESTION", this.dsList.getColumn(0, "EM_QUESTION"));
        	*/
        	this.dsUpdate.setColumn(nrow, "ID_USER", this.AuthClient.ID_USER);
        	this.dsUpdate.setColumn(nrow, "DT_DELIVERY", this.dsList.getColumn(0, "DT_DELIVERY"));

        	// 현설참석목록
        // 	this.dsUpdate2.clearData();
        // 	for (var i = 0; i < this.dsList2.rowcount; i++) {
        // 		var flag = this.gfnGetFlag(this.dsList2, i);
        // 		if(flag == "U") {
        // 			var nrow = this.dsUpdate2.addRow();
        // 			this.dsUpdate2.setColumn(nrow, "CD_SITE", this.dsList2.getColumn(i, "CD_SITE"));
        // 			this.dsUpdate2.setColumn(nrow, "NO_PR", this.dsList2.getColumn(i, "NO_PR"));
        // 			this.dsUpdate2.setColumn(nrow, "CD_VENDOR", this.dsList2.getColumn(i, "CD_VENDOR"));
        // 			this.dsUpdate2.setColumn(nrow, "YN_JOIN", this.dsList2.getColumn(i, "YN_JOIN"));
        // 			this.dsUpdate2.setColumn(nrow, "DS_CONTACTNAME", this.dsList2.getColumn(i, "DS_CONTACTNAME"));
        // 			this.dsUpdate2.setColumn(nrow, "DT_CONTACTTEL", this.dsList2.getColumn(i, "DT_CONTACTTEL"));
        // 			this.dsUpdate2.setColumn(nrow, "DS_CONTACTEMAIL", this.dsList2.getColumn(i, "DS_CONTACTEMAIL"));
        // 			this.dsUpdate2.setColumn(nrow, "DS_REASON", this.dsList2.getColumn(i, "DS_REASON"));
        // 		}
        // 	}
        //
        // 	if(this.dsUpdate2.rowcount > 0) {
        // 		arr_in.push("d_update=dsUpdate2");
        // 	}

        	if (this.dsUpdate.rowcount == 0) return;
        //	if (this.dsUpdate.rowcount == 0 && this.dsUpdate2.rowcount == 0) return;

        	var strSvcId    = "save";
        	var strSvcType  = "save";
        	var inProc		= "_dsProc";
        	//var inData      = arr_in.join(' ');
        	var inData      = "update=dsUpdate";
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

        this.fnSave1 = function()
        {
        	this.dsUpdate1.clearData();
        	var nrow = this.dsUpdate1.addRow();

        	for(var i = 0 ; i < this.dsList1.rowcount; i++)
        	{
        		var flag = this.gfnGetFlag(this.dsList1, i);
        		switch(flag) {
        			case "U":
        				var nrow = this.dsUpdate1.addRow();
        				this.dsUpdate1.setColumn(nrow, "CD_SITE", this.dsList1.getColumn(i, "CD_SITE"));
        				this.dsUpdate1.setColumn(nrow, "NO_PR", this.dsList1.getColumn(i, "NO_PR"));
        				this.dsUpdate1.setColumn(nrow, "CD_COST", this.dsList1.getColumn(i, "CD_COST"));
        				this.dsUpdate1.setColumn(nrow, "SZ_SIZE", this.dsList1.getColumn(i, "SZ_SIZE"));
        				this.dsUpdate1.setColumn(nrow, "QN_TT_HADO", this.dsList1.getColumn(i, "QN_TT_HADO"));
        				this.dsUpdate1.setColumn(nrow, "UP_TT_HADO", this.dsList1.getColumn(i, "UP_TT_HADO"));
        				this.dsUpdate1.setColumn(nrow, "AM_TT_HADO", this.dsList1.getColumn(i, "AM_TT_HADO"));
        				break;
        		}
        	}

        	if (this.dsUpdate1.rowcount == 0) return;

        	var strSvcId    = "update_d";
        	var strSvcType  = "save";
        	var inProc		= "_dsProc";
        	var inData      = "update_d=dsUpdate1";
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
        	switch(this.divData.form.tabData.tabindex) {
        		case 0:
        			break;
        		case 1:
        			var nrow = this.gfnExcelExport(this.dxGrid);
        			break;
        		case 2:
        			break;
        	}
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
        	var validate = true;
        	if (this.gfnIsNull(this.dsSearch.getColumn(0,"CD_SITE"))) {
        		validate = false;
        		// Alert후 실행할 처리
        		this.fnVaidateCallback = function() {
        			this.divSearch.form.ccfCD_SITE.form.CDTextBox.setFocus();
        		}
        		this.gfnAlert("현장코드를 입력하세요.", "fnVaidateCallback");
        	}
        	else if (this.gfnIsNull(this.dsSearch.getColumn(0,"NO_PR"))) {
        		validate = false;
        		// Alert후 실행할 처리
        		this.fnVaidateCallback = function() {
        			this.divSearch.form.ccfNO_PR.form.CDTextBox.setFocus();
        		}
        		this.gfnAlert("구매요청번호를 입력하세요.", "fnVaidateCallback");
        	}
        	return validate;
        };

        /************************************************************************
         * 콜백 이벤트
         ************************************************************************/
        /*
         *	콜백 처리
         */
        this.fnCallback = function(svcID, errorCode, errorMsg, strArg)
        {
        	if (svcID == "select") {
        // 		this.dsTempTime.clearData();
        // 		this.dsTempTime.addRow();

        		this.fnDetail();
        // 		if(this.dsList.getColumn(0, "DT_EXPLAIN").length > 8)
        // 		{
        // 			this.dsTempTime.setColumn(0, "EXPLAIN_HOUR", this.dsList.getColumn(0, "DT_EXPLAIN").substr(8,2));
        // 			this.dsTempTime.setColumn(0, "EXPLAIN_MINUTE", this.dsList.getColumn(0, "DT_EXPLAIN").substr(10,2));
        // 			this.dsList.setColumn(0, "DT_EXPLAIN", this.dsList.getColumn(0, "DT_EXPLAIN").substr(0,8));
        // 		}
        //
        // 		if(this.dsList.getColumn(0, "DT_BIDMAGAM").length > 8)
        // 		{
        // 			this.dsTempTime.setColumn(0, "BIDMAGAM_HOUR", this.dsList.getColumn(0, "DT_BIDMAGAM").substr(8,2));
        // 			this.dsTempTime.setColumn(0, "BIDMAGAM_MINUTE", this.dsList.getColumn(0, "DT_BIDMAGAM").substr(10,2));
        // 			this.dsList.setColumn(0, "DT_BIDMAGAM", this.dsList.getColumn(0, "DT_BIDMAGAM").substr(0,8));
        // 		}

        		if(this.dsList.rowcount > 0)
        		{
        			// 조회 후 과세율 readonly 처리 관련.
        			this.fnCheckRT_TAX(this.dsList.getColumn(0, "TY_TAX"));

        			if(this.gfnIsNull(this.dsList.getColumn(0, "NO_CONT")))
        			{
        				//this.btnCreatePo.set_enable(true);
        				//this.btnPoDetail.set_enable(false);
        			}
        			else
        			{
        				//this.btnCreatePo.set_enable(false);
        				//this.btnPoDetail.set_enable(true);
        			}

        			this.fnBtnCheckAll();
        		}
        	}
        	else if (svcID == "detail") {
        		// 확장버튼 활성화 or 비활성화 처리
        		this.fnBtnEnable();	// 결재관련

        		// 결재선 조회
        		this.fnSelectAppr();
        	}
        	else if(svcID == "save") {
        		if (errorCode == 0) {
        			this.fnSave1();
        			//this.FormBtns.Select.click();
        		} else {
        			this.gfnAlert(errorMsg);
        		}
        	}
        	else if(svcID == "update_d") {
        		if (errorCode == 0) {
        			this.FormBtns.Select.click();
        		} else {
        			this.gfnAlert(errorMsg);
        		}
        	}
        	else if(svcID == "execute") {
        		if (errorCode == 0) {
        			this.fnExecute_callback = function()
        			{
        				this.FormBtns.Select.click();
        			}

        			var msg = "";
        			var json = this.gfnArgsToJson(strArg);

        			if(json.gubun == "A") msg = "발주의뢰";
        			else if(json.gubun == "R") msg = "발주의뢰취소";

        			msg += "를 정상적으로 완료하였습니다.";

        			this.gfnAlert(msg, "","","fnExecute_callback");
        		} else {
        			this.gfnAlert(errorMsg);
        		}
        	}
        	else if(svcID == "update_attend")
        	{
        		if (errorCode == 0) {
        			this.fnExecute_callback = function()
        			{
        				this.FormBtns.Select.click();
        			}

        			this.gfnAlert("현설참석여부확인이 정상처리되었습니다.", "fnExecute_callback");
        		}
        		else
        		{
        			this.gfnAlert(errorMsg);
        		}
        	}
        	else if(svcID == "insert_po")
        	{
        		if (errorCode == 0) {
        			this.fnExecute_callback = function()
        			{
        				this.FormBtns.Select.click();
        			}

        			this.gfnAlert("발주서 생성이 정상처리되었습니다.","fnExecute_callback");
        		}
        		else
        		{
        			this.gfnAlert(errorMsg);
        		}
        	}
        	else if(svcID == "aplines") {
        		if(this.dsListAplines.rowcount > 0) {
        			this.dxGridAppr.setRealRowSize(0, 24);
        		}
        	}
        	else if (svcID == "apprsel") {	// 결재관련
        		// 링크 통해서 화면이 오픈되었을 경우에 this.fnExec() 실행한다
        		if(this.dsSearch.getColumn(0, "YN_LINK") != "N"){
        			if(this.dsListAppr.rowcount < 1){
        				this.fnApprselnullCallback = function() {
        					this.getParentContext().close(true);
        					return;
        				}
        				this.gfnAlert("품의서를 열수없습니다.", "fnApprselnullCallback");
        			}

        			if(this.dsListAppr.getColumn(0,"ST_APPR") == "05"){
        				this.fnApprselCallback = function() {
        					this.getParentContext().close(true);
        				}
        				this.gfnAlert("결재가 취소되었습니다.", "fnApprselCallback");
        			}else{
        				this.fnExecAppr();
        			}
        		}else{
        			this.FormBtns.Select.click();
        		}
        	}
        	else if(svcID == "execAppr") {	// 결재관련
        		if (errorCode == 0) {
        			// 화면 로드시에 링크 통해서 화면이 오픈되었을경우에만 처리후에 조회한다
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
        	if (id == "ccfNO_PR") {
        		if(this.gfnIsNull(this.dsSearch.getColumn(0, "CD_SITE"))) {
        			this.gfnAlert("현장코드를 먼저 입력하세요.");
        			return false;
        		}
        		dsUserParam.setColumn(nrow, "CD_SITE", this.dsSearch.getColumn(0, "CD_SITE")); // CD_SITE
        	}
        	else if (id == "cfCD_LICCOST") {
        		if(this.gfnIsNull(this.dsList.getColumn(0, "CD_COSTCLASS")))
        		{
        			this.gfnAlert("부문을 먼저 선택해주세요.");
        			return;
        		}

        		dsUserParam.setColumn(nrow, "COSTCLASS", this.dsList.getColumn(0, "CD_COSTCLASS"));
        	}
        	return true;
        }


        this.fnAfterCDTextChanged = function(id, codeFindData){
        	var arr = codeFindData;

        	if(id == "ccfCD_SITE") {
        		//this.ccfNO_PR.form.fnCodeFindClear();
        	}
        	else if(id == "cfCD_COSTCLASS")
        	{
        		if(arr.length > 0)
        		{
        			this.dsList.setColumn(0, "CD_LICCOST", "");
        			this.divData.form.divData01.form.cfCD_LICCOST.form.DSTextBox.set_value("");
        		}
        	}
        	else if(id == "cfCD_LICCOST")
        	{
        		if(arr.length > 0)
        		{
        			this.dsList.setColumn(0, "TY_SELECT", arr[0]["TY_SELECT"]);
        		}
        	}
        };

        /************************************************************************
         * 그리드 이벤트
         ************************************************************************/
         this.fnGrid_EnterCell = function(obj, row, cell) {
        	var colnm = this.gfnGridGetBindColumnNameByIndex(this.dxGrid, cell);

        // 	if(colnm == "AM_TT_HADO"){
        // 		if(this.dsList1.getColumn(row, "YN_EDIT") == "Y" && this.dsList1.getColumn(row, "YN_LSUNIT") == "Y" && this.dsList1.getColumn(row, "YN_EDIT_H") == "Y")
        // 		{
        // 			return true;
        // 		}
        // 	}
        // 	else if(colnm == "QN_TT_HADO"){
        // 		if(this.dsList1.getColumn(row, "YN_EDIT") == "Y" && this.dsList1.getColumn(row, "YN_EDIT_H") == "Y")
        // 		{
        // 			if(this.dsList1.getColumn(row, "YN_LSUNIT") != "Y") return true;
        // 			else return false;
        // 		}
        // 	}
        // 	else if(colnm == "UP_TT_HADO"){
        // 		if(this.dsList1.getColumn(row, "YN_EDIT") == "Y" && this.dsList1.getColumn(row, "YN_EDIT_H") == "Y")
        // 		{
        // 			if(this.dsList1.getColumn(row, "YN_LSUNIT") != "Y" && this.dsList1.getColumn(row, "YN_UPRC_H") == "Y")
        // 				return true;
        // 			else return false;
        // 		}
        // 	}
        //
        	return false;
         }
        /************************************************************************
         * 기타 이벤트
         ************************************************************************/
        this.dsSearch_onvaluechanged = function(obj,e)
        {
        	if(e.oldvalue != e.newvalue) {
        		this.gfnSetFormStatus(this);	// 폼상태 초기화
        		this.dsList.clearData();	// 싱글폼데이터 초기화
        		this.dsList1.clearData();
        	}
        };

        this.dsList_onvaluechanged = function(obj,e)
        {
        	if(e.oldvalue != e.newvalue) {
        		this.gfnSetFormStatus(this, "U");	// 폼상태 초기화

        		if(e.columnid == "TY_TAX")
        		{
        			this.fnCheckRT_TAX(e.newvalue);
        		}
        	}
        };

        this.divData_tabData_onchanged = function(obj,e)
        {

        };

        this.fnSetCombo = function()
        {
        	this.dsCombo = new Dataset();
        	this.dsCombo.addColumn("CD_SYSTEM", "string");
        	this.dsCombo.addColumn("CD_TYPE", "string");

        	this.dsCombo.addRow();
        	this.dsCombo.setColumn(0, "CD_SYSTEM", "DM");
        	this.dsCombo.setColumn(0, "CD_TYPE", "H08");

        	this.dsCombo.addRow();
        	this.dsCombo.setColumn(1, "CD_SYSTEM", "DC");
        	this.dsCombo.setColumn(1, "CD_TYPE", "50");

        	this.dsCombo.addRow();
        	this.dsCombo.setColumn(2, "CD_SYSTEM", "DC");
        	this.dsCombo.setColumn(2, "CD_TYPE", "C07");

        // 	this.dsCombo.addRow();
        // 	this.dsCombo.setColumn(3, "CD_SYSTEM", "DC");
        // 	this.dsCombo.setColumn(3, "CD_TYPE", "C15");
        //
        	var strSvcId    = "combo";
        	var strSvcType  = "select";
        	var inProc		= "_dsProc";
        	var inData      = "combo=dsCombo";
        	var outData     = "dsTY_SELECT=combo0 dsDS_CONTMETHOD=combo1 dsTY_BID=combo2";
        	var strArg      = "";
        	var callBackFnc = "fnCallbackCombo";

        	this.gfnTransaction( strSvcId , 	// transaction을 구분하기 위한 svc id값
        						strSvcType , 	// transaction을 요청할 구분
        						inProc,			// Procedure 정보 Dataset 이름
        						inData , 		// 입력값으로 보낼 dataset id , a=b형태로 실제이름과 입력이름을 매칭
        						outData , 		// 처리결과값으로 받을 dataset id, a=b형태로 실제이름과 입력이름을 매칭
        						strArg, 		// 입력값으로 보낼 arguments, strFormData="20120607"
        						callBackFnc); // 통신방법 정의 [생략가능]
        }

        //아래서부터는 확장버튼 이벤트
        this.fnIndirect= function(obj,e) {
        	var param = {};

        	param.CD_SITE = this.dsSearch.getColumn(0, "CD_SITE");
        	param.DS_SITE = this.divSearch.form.ccfCD_SITE.form.DSTextBox.text;
        	param.NO_PR = this.dsSearch.getColumn(0, "NO_PR");
        	param.DS_BID = this.divSearch.form.ccfNO_PR.form.DSTextBox.text;

        	this.gfnFormOpen(this.FormInfo.CD_MODULE, "DCB_INDIRECT_SITE_REG", "", param);
        }

        this.fnPRAttach = function(obj,e) {
        	if (!this.fnSelectValidate()) return false;

        	this.fnSelectEPS("S");	// S : 현설조건/공내역서 등록 시
        }

        /*
         *	EPS 파라미터 공통 조회
         */
        this.fnSelectEPS = function(lv_app) {

        	this.dsEPS = new Dataset();

        	this._dsProcEPS = new Dataset();
        	this._dsProcEPS.addColumn("TARGET", "string");
        	this._dsProcEPS.addColumn("SP", "string");

        	this._dsProcEPS.addRow();
        	this._dsProcEPS.setColumn(0, "TARGET", "eps");
        	this._dsProcEPS.setColumn(0, "SP", "DZZPR_EPS_BID_SAP_MIDDLE_POPUP_SELECT");

        	this.dsSelectEPS = new Dataset();
        	this.dsSelectEPS.addColumn("NO_PR", "string");		// ERP발주(입찰)번호
        	this.dsSelectEPS.addColumn("YN_UNION", "string");	// 통합입찰여부
        	this.dsSelectEPS.addColumn("ID_USER", "string");

        	this.dsSelectEPS.addRow();
        	this.dsSelectEPS.setColumn(0, "NO_PR", this.dsSearch.getColumn(0, "NO_PR"));
        	this.dsSelectEPS.setColumn(0, "YN_UNION", "N");
        	this.dsSelectEPS.setColumn(0, "ID_USER", this.AuthClient.ID_USER);

        	var strSvcId    = "eps";
        	var strSvcType  = "select";
        	var inProc		= "_dsProcEPS";
        	var inData      = "eps=dsSelectEPS";
        	var outData     = "dsEPS=eps0";
        	var strArg      = "P_APP=" + lv_app;
        	var callBackFnc = "fnCallbackEPS";

        	this.gfnTransaction( strSvcId , 	// transaction을 구분하기 위한 svc id값
        						strSvcType , 	// transaction을 요청할 구분
        						inProc,			// Procedure 정보 Dataset 이름
        						inData , 		// 입력값으로 보낼 dataset id , a=b형태로 실제이름과 입력이름을 매칭
        						outData , 		// 처리결과값으로 받을 dataset id, a=b형태로 실제이름과 입력이름을 매칭
        						strArg, 			// 입력갑스로 보낼 arguments, strFormData="20120607"
        						callBackFnc); // 통신방법 정의 [생략가능]

        }

        this.fnCallbackEPS = function(svcID, errorCode, errorMsg, strArg)
        {
        	if (errorCode!=0) {
        		this.gfnAlert(errorMsg);
        		return;
        	}

        	var url = "";
        	if (svcID == "eps") {
        		url = "/buyer/bid/pop/bid_sap_middle_pop.do";
        	}
        	else if (svcID == "eps2") {
        		url = "/buyer/bid/open_su_nosave.do";
        	}

        	if(this.dsEPS.rowcount > 0) {
        		var arr_param = [];

        		arr_param.push(strArg);
        		for(var c = 0; c < this.dsEPS.colinfos.length; c++) {
        			var colid = this.dsEPS.colinfos[c].name;
        			var val = this.dsEPS.getColumn(0, colid);
        			if(val==null) val="";
        			arr_param.push(colid + "=" + val);
        		}

        		this.gfnOpenEPS(url, arr_param.join('&'));
        	}
        };

        this.fnReq = function(obj,e) {
        	if (!this.fnSelectValidate()) return false;

        	var msg = "현장코드 : " + this.dsSearch.getColumn(0, "CD_SITE") + " [" + this.ccfCD_SITE.form.DSTextBox.text + "]"
        	        + "\n구매요청번호 : " + this.dsSearch.getColumn(0, "NO_PR") + " [" + this.ccfNO_PR.form.DSTextBox.text + "]"
        			+ "\n\n발주의뢰를 진행하시겠습니까?";
        	this.gfnConfirm(msg, "fnReq_callback", "A");
        }

        this.fnReqCancel = function(obj,e) {
        	if (!this.fnSelectValidate()) return false;

        	var msg = "현장코드 : " + this.dsSearch.getColumn(0, "CD_SITE") + " [" + this.ccfCD_SITE.form.DSTextBox.text + "]"
        	        + "\n구매요청번호 : " + this.dsSearch.getColumn(0, "NO_PR") + " [" + this.ccfNO_PR.form.DSTextBox.text + "]"
        			+ "\n\n발주의뢰취소를 진행하시겠습니까?";
        	this.gfnConfirm(msg, "fnReq_callback", "R");
        }

        this.fnReq_callback = function(strId, val)
        {
        	if(val == true) {
        		this.dsExecute.clearData();

        		var nrow = this.dsExecute.addRow();

        		this.dsExecute.setColumn(nrow, "CD_SITE", this.dsSearch.getColumn(0, "CD_SITE"));
        		this.dsExecute.setColumn(nrow, "NO_PR", this.dsSearch.getColumn(0, "NO_PR"));
        		this.dsExecute.setColumn(nrow, "CD_APP", strId);
        		this.dsExecute.setColumn(nrow, "V_NO_DOC", "");

        		if (this.dsExecute.rowcount == 0) return;

        		var strSvcId    = "execute";
        		var strSvcType  = "save";
        		var inProc		= "_dsProc";
        		var inData      = "execute=dsExecute";
        		var outData     = "";
        		var strArg      = "gubun="+ strId;
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

        this.fnReqETC = function(obj,e) {
        	var param = {};

        	param.CD_SITE = this.dsSearch.getColumn(0, "CD_SITE");
        	param.DS_SITE = this.divSearch.form.ccfCD_SITE.form.DSTextBox.text;
        	param.NO_PR = this.dsSearch.getColumn(0, "NO_PR");
        	param.DS_SUBCON = this.divSearch.form.ccfNO_PR.form.DSTextBox.text;

        	this.gfnFormOpen(this.FormInfo.CD_MODULE, "DCB_RECOMMEND_ETC_REQ", "", param);
        }

        // 탭 위의 확장버튼들 클릭 이벤트.
        // 현설참석자명단
        this.divData_btn00_onclick = function(obj,e)
        {
        	if(this.gfnIsNull(this.dsList.getColumn(0, "NO_PR"))) return;

        	var fileManager = {};
        	fileManager.CD_GUBUN = "DC51";
        	fileManager.CD_DIR = [ this.dsList.getColumn(0, "NO_PR") ];
        	// CD_DIR 만 지정시 CD_DIR 배열 순대로 키1,키2,키3 까지 자동지정
        	// 저장되는 디렉토리와 키값이 다른경우 CD_REF 추가로 사용
        	//fileManager.CD_REF = [ "A1" ];
        	// 권한 및 상태에 따라 업로드,삭제 가능여부 지정 (기본: true)

        	if(this.FormInfo.TY_AUTH == "R") {
        		fileManager.IS_READONLY = true;
        	} else {
        		fileManager.IS_READONLY = false;
        	}

        	this.gfnFileManager(fileManager, "fnFileCallback");
        };

        this.fnFileCallback = function() {
        };

        this.divData_btn01_onclick = function(obj,e)
        {

        };

        // 현설참석여부확인
        this.divData_btn02_onclick = function(obj,e)
        {
        	if(this.gfnIsNull(this.dsList.getColumn(0, "NO_PR"))) return;

        	this.dsAttendUpdate = new Dataset();
        	this.dsAttendUpdate.addColumn("NO_PR", "string");
        	this.dsAttendUpdate.addColumn("ID_USER", "string");

        	this.dsAttendUpdate.clearData();
        	var nrow = this.dsAttendUpdate.addRow();

        	this.dsAttendUpdate.setColumn(nrow, "NO_PR", this.dsList.getColumn(0, "NO_PR"));
        	this.dsAttendUpdate.setColumn(nrow, "ID_USER", this.AuthClient.ID_USER);

        	if (this.dsAttendUpdate.rowcount == 0) return;

        	var strSvcId    = "update_attend";
        	var strSvcType  = "save";
        	var inProc		= "_dsProc";
        	var inData      = "update_attend=dsAttendUpdate";
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

        };

        // 발주서 생성 버튼 이벤트
        this.fnCreatePo = function(obj,e) {
        	if(!this.fnSelectValidate()) return;

        	this.gfnConfirm("발주서 생성을 진행하시겠습니까?", "fnCreatePo_callback");
        }

        this.fnCreatePo_callback = function(strID, val)
        {
        	if(val == true)
        	{
        		this.dsInsertPO.clearData();
        		var nrow = this.dsInsertPO.addRow();

        		this.dsInsertPO.setColumn(nrow, "CD_SITE", this.dsSearch.getColumn(0, "CD_SITE"));
        		this.dsInsertPO.setColumn(nrow, "NO_PR", this.dsSearch.getColumn(0, "NO_PR"));
        		this.dsInsertPO.setColumn(nrow, "ID_USER", this.AuthClient.ID_USER);

        		if (this.dsInsertPO.rowcount == 0) return;

        		var strSvcId    = "insert_po";
        		var strSvcType  = "save";
        		var inProc		= "_dsProc";
        		var inData      = "insert_po=dsInsertPO";
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

        // 발주서 버튼 이벤트
        this.fnPoDetail = function(obj,e) {
        	var param = {};

        	param.CD_SITE = this.dsSearch.getColumn(0, "CD_SITE");
        	param.DS_SITE = this.divSearch.form.ccfCD_SITE.form.DSTextBox.text;
        	// 임시로 현장코드만 넘긴다.
        	//param.NO_CONT = this.dsSearch.getColumn(0, "NO_PR");
        	//param.DS_SUBCON = this.divSearch.form.ccfNO_PR.form.DSTextBox.text;

        	this.gfnFormOpen(this.FormInfo.CD_MODULE, "DMA_PO_DETAIL", "fnPoDetail_callback", param);
        }

        this.fnPoDetail_callback = function()
        {
        	this.FormBtns.Select.click();
        }

        // 파일첨부 버튼 클릭 이벤트
        this.fnAttach = function(obj,e) {
        	if(this.gfnIsNull(this.dsSearch.getColumn(0, "NO_PR")))
        	{
        		this.gfnAlert("구매요청번호를 입력하세요.");
        		return;
        	}

        	var no_pr = this.dsSearch.getColumn(0, "NO_PR");

            var fileManager = {};
            fileManager.CD_GUBUN = "DM01";
        	fileManager.CD_DIR = [ no_pr ];
            fileManager.IS_READONLY = true;

            this.gfnFileManager(fileManager, "fnFileCallback");
        }

        this.divData_btn03_onclick = function(obj,e)
        {

        };

        this.dsTempTime_onvaluechanged = function(obj,e)
        {
        	if(e.oldvalue != e.newvalue) {
        		this.gfnSetFormStatus(this, "U");	// 폼상태 초기화
        	}
        };

        this.dsList1_onvaluechanged = function(obj,e)
        {
        	if(e.columnid == "AM_TT_HADO"){
        		this.dsList1.set_enableevent(false);
        		this.dsList1.setColumn(e.row, "UP_TT_HADO", nexacro.toNumber(this.dsList1.getColumn(e.row, "AM_TT_HADO"),0));
        		this.dsList1.set_enableevent(true);
        	}
        	else if(e.columnid == "QN_TT_HADO" || e.columnid == "UP_TT_HADO"){
        		this.dsList1.set_enableevent(false);
        		this.dsList1.setColumn(e.row, "AM_TT_HADO", nexacro.floor(nexacro.toNumber(this.dsList1.getColumn(e.row, "QN_TT_HADO"),0) * nexacro.toNumber(this.dsList1.getColumn(e.row, "UP_TT_HADO"),0)));
        		this.dsList1.set_enableevent(true);
        	}
        };

        this.fnCheckRT_TAX = function(value)
        {
        	if(value == "공존")
        	{
        		this.divData.form.divData01.form.txtRT_TAX.set_readonly(false);
        	}
        	else
        	{
        		this.divData.form.divData01.form.txtRT_TAX.set_readonly(true);

        		if(value == "과세") this.dsList.setColumn(0, "RT_TAX", 100);
        		else if(value == "면세") this.dsList.setColumn(0, "RT_TAX", 0);
        	}
        }

        this.fnBtnCheckAll = function()
        {
        	this.gfnBtnCheck(this.btnReq, this.dsList);
        	this.gfnBtnCheck(this.btnReqCancel, this.dsList);
        	this.gfnBtnCheck(this.btnCreatePo, this.dsList);
        	this.gfnBtnCheck(this.btnAttach, this.dsList);
        }


        //*** 아래는 결재관련 소스 ***//

         // 승인 버튼 클릭 이벤트
         this.fnAprvCmpl = function(obj,e) {
        	// 선택된 row가 있을 경우에만 팝업을 띄움
        	//if (!this.gfnGridIsRow(this.dxGrid)) { return false; }

        	var param = {};

        	param.ID_AP = this.dsSearch.getColumn(0, "ID_AP");
        	param.V_PARAM01 = this.dsSearch.getColumn(0, "CD_SITE");
        	param.V_PARAM02 = this.dsSearch.getColumn(0,"NO_PR");
        	param.V_PARAM03 = "";
        	param.V_PARAM04 = "";
        	param.ST_APPR = "03";

        	this.gfnFormOpenNonAuth("DZR", "DZR_AP_NOTE", "fnAprvDialogCallback", param, 430, 210);
        }

         // 반려 버튼 클릭 이벤트
         this.fnAprvCnc = function(obj,e) {
        	// 선택된 row가 있을 경우에만 팝업을 띄움
        	//if (!this.gfnGridIsRow(this.dxGrid)) { return false; }

        	var param = {};

        	param.ID_AP = this.dsSearch.getColumn(0, "ID_AP");
        	param.V_PARAM01 = this.dsSearch.getColumn(0, "CD_SITE");
        	param.V_PARAM02 = this.dsSearch.getColumn(0,"NO_PR");
        	param.V_PARAM03 = "";
        	param.V_PARAM04 = "";
        	param.ST_APPR = "04";

        	this.gfnFormOpenNonAuth("DZR", "DZR_AP_NOTE", "fnAprvDialogCallback", param, 430, 210);
        }

         // 결재취소 버튼 클릭 이벤트
         this.fnApCnl = function(obj,e) {
        	// 선택된 row가 있을 경우에만 팝업을 띄움
        	//if (!this.gfnGridIsRow(this.dxGrid)) { return false; }

        	var param = {};

        	param.ID_AP = this.dsSearch.getColumn(0, "ID_AP");
        	param.V_PARAM01 = this.dsSearch.getColumn(0, "CD_SITE");
        	param.V_PARAM02 = this.dsSearch.getColumn(0,"NO_PR");
        	param.V_PARAM03 = "";
        	param.V_PARAM04 = "";
        	param.ST_APPR = "05";

        	this.gfnFormOpenNonAuth("DZR", "DZR_AP_NOTE", "fnAprvDialogCallback", param, 430, 210);
        }


        this.fnAprvDialogCallback = function(svcID, value) {
        	// 리턴값
        	if(value){
        		this.getParentContext().close(true);
        	}
        };

         // 결재정보 버튼 클릭 이벤트
         this.fnAprvInf = function(obj,e) {
        	// 선택된 row가 있을 경우에만 팝업을 띄움
        	//if (!this.gfnGridIsRow(this.dxGrid)) { return false; }

        	var param = {};

        	param.ID_AP = this.dsListAppr.getColumn(0, "ID_AP");

        	this.gfnFormOpenNonAuth("DZR", "DZR_APLINES", "", param, 830, 400);
        }


        // 결제상신
         this.fnAprvSang = function(obj,e) {
        	//if (!this.gfnGridIsRow(this.dxGrid)) { return false; }

        	var param = {};
        	var nRow = this.dsList.rowposition;

        	param.ID_AP_TYPE = "DM04";
        	param.V_PARAM01 = this.dsSearch.getColumn(0, "CD_SITE");
        	param.V_PARAM02 = this.dsSearch.getColumn(0,"NO_PR");
        	param.V_PARAM03 = "";
        	param.V_PARAM04 = "";
        	param.DS_TITLE =  "하도구매요청 품의서";

        	this.gfnFormOpenNonAuth("DZR", "DZR_AP_REQUEST", "fnDialogCallback", param, 900, 650);
         }

         this.fnDialogCallback = function(svcID, value) {
        	// 리턴값
        	if(value == true){
        		this.getParentContext().close(true);
        	}
        };

        // 결재상태값 조회
        this.fnApprSel = function() {
        	this.dsSelectAppr.clearData();
        	this.dsSelectAppr.addRow();

        	this.dsSelectAppr.setColumn(0, "ID_AP", this.dsSearch.getColumn(0, "ID_AP"));
        	this.dsSelectAppr.setColumn(0, "ID_USER", this.AuthClient.ID_USER);

        	var strSvcId    = "apprsel";
        	var strSvcType  = "grid";
        	var inProc		= "_dsProc";
        	var inData      = "appr_select=dsSelectAppr";
        	var outData     = "dsListAppr=appr_select0";
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

        // 확장버튼 활성화 or 비활성화처리
        this.fnBtnEnable = function() {
        	if(this.gfnIsNull(this.dsListAppr.getColumn(0, "ID_AP"))){	// 결재번호
        		this.btnAprvCmpl.set_enable(false);		// 승인(03)
        		this.btnAprvCnc.set_enable(false);		// 반려(04)
        		this.btnApCnl.set_enable(false);		// 결제취소(05)
        		this.btnAprvInf.set_enable(false);		// 결제정보
        		this.btnAprvSang.set_enable(true);		// 결제상신
        	}else{
        		if(this.dsListAppr.getColumn(0, "ST_APPR") == "01"){	// 결재상태
        			if(this.dsListAppr.getColumn(0, "YN_USER") == "Y"){
        				if(this.dsListAppr.getColumn(0, "YN_APP") == "Y"){
        					this.btnAprvCmpl.set_enable(true);
        				}else{
        					this.btnAprvCmpl.set_enable(false);
        				}

        				this.btnAprvCnc.set_enable(false);
        				this.btnApCnl.set_enable(true);
        			}else{
        				if(this.dsListAppr.getColumn(0, "YN_APP") == "Y"){
        					this.btnAprvCmpl.set_enable(true);
        					this.btnAprvCnc.set_enable(true);
        				}else{
        					this.btnAprvCmpl.set_enable(false);
        					this.btnAprvCnc.set_enable(false);
        				}

        				this.btnApCnl.set_enable(false);
        			}

        			this.btnAprvInf.set_enable(true);
        			this.btnAprvSang.set_enable(false);
        		}else if(this.dsListAppr.getColumn(0, "ST_APPR") == "02"){
        			if(this.dsListAppr.getColumn(0, "YN_USER") == "Y"){
        				if(this.dsListAppr.getColumn(0, "YN_APP") == "Y"){
        					this.btnAprvCmpl.set_enable(true);
        				}else{
        					this.btnAprvCmpl.set_enable(false);
        				}

        				this.btnAprvCnc.set_enable(false);
        				this.btnApCnl.set_enable(false);
        			}else{
        				if(this.dsListAppr.getColumn(0, "YN_APP") == "Y"){
        					this.btnAprvCmpl.set_enable(true);
        					this.btnAprvCnc.set_enable(true);
        				}else{
        					this.btnAprvCmpl.set_enable(false);
        					this.btnAprvCnc.set_enable(false);
        				}

        				this.btnApCnl.set_enable(false);
        			}

        			this.btnAprvInf.set_enable(true);
        			this.btnAprvSang.set_enable(false);
        		}else if(this.dsListAppr.getColumn(0, "ST_APPR") == "03"){
        			this.btnAprvCmpl.set_enable(false);
        			this.btnAprvCnc.set_enable(false);
        			this.btnApCnl.set_enable(false);
        			this.btnAprvInf.set_enable(true);
        			this.btnAprvSang.set_enable(false);
        		}else if(this.dsListAppr.getColumn(0, "ST_APPR") == "04"){
        			this.btnAprvCmpl.set_enable(false);
        			this.btnAprvCnc.set_enable(false);
        			this.btnApCnl.set_enable(false);
        			this.btnAprvInf.set_enable(true);
        			this.btnAprvSang.set_enable(true);
        			this.btnAprvSang.set_text("재상신");	// 반려 상태일때는 결재상신 버튼이 재상신으로 셋팅한다
        		}else if(this.dsListAppr.getColumn(0, "ST_APPR") == "05"){
        			this.btnAprvCmpl.set_enable(false);
        			this.btnAprvCnc.set_enable(false);
        			this.btnApCnl.set_enable(false);
        			this.btnAprvInf.set_enable(false);
        			this.btnAprvSang.set_enable(true);
        		}
        	}
        }


        /*
         *	결재완료 or 취소 처리
         */
        this.fnExecAppr = function() {

        	this.dsExecAppr.clearData();

        	this.dsExecAppr.addRow();

        	this.dsExecAppr.setColumn(0, "ID_AP", this.dsSearch.getColumn(0, "ID_AP"));
        	this.dsExecAppr.setColumn(0, "V_PARAM01", this.dsSearch.getColumn(0, "CD_SITE"));
        	this.dsExecAppr.setColumn(0, "V_PARAM02", this.dsSearch.getColumn(0, "NO_PR"));
        	this.dsExecAppr.setColumn(0, "V_PARAM03", "");
        	this.dsExecAppr.setColumn(0, "V_PARAM04", "");
        	this.dsExecAppr.setColumn(0, "ST_APPR", "02");
        	this.dsExecAppr.setColumn(0, "ID_USER", this.AuthClient.ID_USER);

        	if (this.dsExecAppr.rowcount == 0) return;

        	var strSvcId    = "execAppr";
        	var strSvcType  = "save";
        	var inProc		= "_dsProc";
        	var inData      = "execAppr=dsExecAppr";
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
          *	결재선그리드 조회
          */
        this.fnSelectAppr = function() {
        	this.dsAplines.clearData();
        	this.dsAplines.addRow();

        	this.dsAplines.setColumn(0, "ID_AP", this.dsSearch.getColumn(0, "ID_AP"));

        	var strSvcId    = "aplines";
        	var strSvcType  = "grid";
        	var inProc		= "_dsProc";
        	var inData      = "aplines=dsAplines";
        	var outData     = "dsListAplines=aplines0";
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
            this.divData.form.tabData.addEventHandler("onchanged",this.divData_tabData_onchanged,this);
            this.divData.form.btn03.addEventHandler("onclick",this.divData_btn03_onclick,this);
            this.divData.form.btn02.addEventHandler("onclick",this.divData_btn02_onclick,this);
            this.divData.form.btn01.addEventHandler("onclick",this.divData_btn01_onclick,this);
            this.divData.form.btn00.addEventHandler("onclick",this.divData_btn00_onclick,this);
            this.dsList.addEventHandler("onvaluechanged",this.dsList_onvaluechanged,this);
            this.dsSearch.addEventHandler("onvaluechanged",this.dsSearch_onvaluechanged,this);
            this.dsList1.addEventHandler("onvaluechanged",this.dsList1_onvaluechanged,this);
            this.dsTempTime.addEventHandler("onvaluechanged",this.dsTempTime_onvaluechanged,this);
        };
        this.loadIncludeScript("DMB_ORDERPLANSR_SITE_APPROVAL.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
