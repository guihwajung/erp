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
            this.set_titletext("발주요청서(본사수정)");
            if (Form == this.constructor)
            {
                this._setFormPosition(1280,990);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("dsList", this);
            obj._setContents("<ColumnInfo><Column id=\"CD_SITE\" type=\"STRING\" size=\"256\"/><Column id=\"DS_SITE\" type=\"STRING\" size=\"256\"/><Column id=\"NO_BID\" type=\"STRING\" size=\"256\"/><Column id=\"NO_HADO\" type=\"STRING\" size=\"256\"/><Column id=\"DS_SUBCON\" type=\"STRING\" size=\"256\"/><Column id=\"TY_ACCOUNT\" type=\"STRING\" size=\"256\"/><Column id=\"RT_TAX\" type=\"BIGDECIMAL\" size=\"256\"/><Column id=\"TY_TAX\" type=\"STRING\" size=\"256\"/><Column id=\"RT_JIBUN\" type=\"INT\" size=\"256\"/><Column id=\"DT_FROM\" type=\"STRING\" size=\"256\"/><Column id=\"DT_TO\" type=\"STRING\" size=\"256\"/><Column id=\"DS_FROMTO\" type=\"STRING\" size=\"256\"/><Column id=\"DT_REQ_SITE\" type=\"STRING\" size=\"256\"/><Column id=\"DT_HQRECEIPT\" type=\"STRING\" size=\"256\"/><Column id=\"DT_HQAPPR\" type=\"STRING\" size=\"256\"/><Column id=\"AM_TT_DOKUB\" type=\"BIGDECIMAL\" size=\"256\"/><Column id=\"AM_TT_SILHENG\" type=\"BIGDECIMAL\" size=\"256\"/><Column id=\"AM_REQUEST\" type=\"BIGDECIMAL\" size=\"256\"/><Column id=\"AM_GONGSA\" type=\"BIGDECIMAL\" size=\"256\"/><Column id=\"UP_PYEONG\" type=\"INT\" size=\"256\"/><Column id=\"CD_VENDOR\" type=\"STRING\" size=\"256\"/><Column id=\"CD_COSTCLASS\" type=\"STRING\" size=\"256\"/><Column id=\"DS_COSTCLASS\" type=\"STRING\" size=\"256\"/><Column id=\"CD_LICCOST\" type=\"STRING\" size=\"256\"/><Column id=\"DS_LICCOST\" type=\"STRING\" size=\"256\"/><Column id=\"CD_SPECCONST\" type=\"STRING\" size=\"256\"/><Column id=\"CD_AREA\" type=\"STRING\" size=\"256\"/><Column id=\"DS_AREA\" type=\"STRING\" size=\"256\"/><Column id=\"NO_RFQ\" type=\"STRING\" size=\"256\"/><Column id=\"DS_CONTMETHOD\" type=\"STRING\" size=\"256\"/><Column id=\"AREA_SITE\" type=\"INT\" size=\"256\"/><Column id=\"AM_BASIC\" type=\"INT\" size=\"256\"/><Column id=\"YN_PUBLISH_BID\" type=\"STRING\" size=\"256\"/><Column id=\"YN_ATTACH_ILSIK\" type=\"STRING\" size=\"256\"/><Column id=\"YN_HASU\" type=\"STRING\" size=\"256\"/><Column id=\"YN_EXFILE_SEPARATE\" type=\"STRING\" size=\"256\"/><Column id=\"NO_UNION_HADO\" type=\"STRING\" size=\"256\"/><Column id=\"NO_UNION_BID_CONNECT\" type=\"STRING\" size=\"256\"/><Column id=\"YN_UNION_BID\" type=\"STRING\" size=\"256\"/><Column id=\"YN_UNION_BID_ING\" type=\"STRING\" size=\"256\"/><Column id=\"CT_GONGU\" type=\"INT\" size=\"256\"/><Column id=\"NUM_GONGU\" type=\"BIGDECIMAL\" size=\"256\"/><Column id=\"AREA_SITE1\" type=\"BIGDECIMAL\" size=\"256\"/><Column id=\"AREA_SITE2\" type=\"BIGDECIMAL\" size=\"256\"/><Column id=\"AREA_SITE3\" type=\"BIGDECIMAL\" size=\"256\"/><Column id=\"AREA_SITE4\" type=\"BIGDECIMAL\" size=\"256\"/><Column id=\"AREA_SITEALL\" type=\"BIGDECIMAL\" size=\"256\"/><Column id=\"ID_MANAGER\" type=\"BIGDECIMAL\" size=\"256\"/><Column id=\"NM_MANAGER\" type=\"STRING\" size=\"256\"/><Column id=\"NO_MANAGERTEL\" type=\"STRING\" size=\"256\"/><Column id=\"ID_SITESABUN\" type=\"STRING\" size=\"256\"/><Column id=\"NM_SITESABUN\" type=\"STRING\" size=\"256\"/><Column id=\"NO_SITETEL\" type=\"STRING\" size=\"256\"/><Column id=\"RM_BIDREMARK\" type=\"STRING\" size=\"256\"/><Column id=\"RM_REMARK\" type=\"STRING\" size=\"256\"/><Column id=\"YN_EXPLAIN\" type=\"STRING\" size=\"256\"/><Column id=\"ONOFF_EXPLAIN\" type=\"STRING\" size=\"256\"/><Column id=\"AT_SITEEXPLAIN\" type=\"STRING\" size=\"256\"/><Column id=\"DT_EXPLAIN\" type=\"STRING\" size=\"256\"/><Column id=\"DT_EXPLAIN_GONGO\" type=\"STRING\" size=\"256\"/><Column id=\"DT_BIDMAGAM\" type=\"STRING\" size=\"256\"/><Column id=\"DT_BIDMAGAM_GONGO\" type=\"STRING\" size=\"256\"/><Column id=\"TY_BID\" type=\"STRING\" size=\"256\"/><Column id=\"DS_BID_SUCCESS\" type=\"STRING\" size=\"256\"/><Column id=\"ONOFF\" type=\"STRING\" size=\"256\"/><Column id=\"ID_BIDCOORDI\" type=\"STRING\" size=\"256\"/><Column id=\"NM_BIDCOORDI\" type=\"STRING\" size=\"256\"/><Column id=\"NO_BIDCOORDITEL\" type=\"STRING\" size=\"256\"/><Column id=\"EM_BIDCOORDI\" type=\"STRING\" size=\"256\"/><Column id=\"ID_BIDDAM1\" type=\"STRING\" size=\"256\"/><Column id=\"NM_BIDDAM1\" type=\"STRING\" size=\"256\"/><Column id=\"NO_BIDDAM1TEL\" type=\"STRING\" size=\"256\"/><Column id=\"EM_BIDDAM1\" type=\"STRING\" size=\"256\"/><Column id=\"ID_BIDDAM2\" type=\"STRING\" size=\"256\"/><Column id=\"NM_BIDDAM2\" type=\"STRING\" size=\"256\"/><Column id=\"NO_BIDDAM2TEL\" type=\"STRING\" size=\"256\"/><Column id=\"EM_BIDDAM2\" type=\"STRING\" size=\"256\"/><Column id=\"ID_QUESTION\" type=\"STRING\" size=\"256\"/><Column id=\"NM_QUESTION\" type=\"STRING\" size=\"256\"/><Column id=\"NO_QUESTIONTEL\" type=\"STRING\" size=\"256\"/><Column id=\"EM_QUESTION\" type=\"STRING\" size=\"256\"/><Column id=\"ID_INSERT\" type=\"STRING\" size=\"256\"/><Column id=\"NM_INSERT\" type=\"STRING\" size=\"256\"/><Column id=\"DT_INSERT\" type=\"STRING\" size=\"256\"/><Column id=\"ID_UPDATE\" type=\"STRING\" size=\"256\"/><Column id=\"NM_UPDATE\" type=\"STRING\" size=\"256\"/><Column id=\"DT_UPDATE\" type=\"STRING\" size=\"256\"/><Column id=\"GW_STATUS1\" type=\"STRING\" size=\"256\"/><Column id=\"DS_STATUS1\" type=\"STRING\" size=\"256\"/><Column id=\"TY_BIDSTATUS\" type=\"STRING\" size=\"256\"/><Column id=\"DS_BIDSTATUS\" type=\"STRING\" size=\"256\"/><Column id=\"CT_HOUSEHOLDS\" type=\"BIGDECIMAL\" size=\"256\"/><Column id=\"RT_CONTGUARANTEE\" type=\"BIGDECIMAL\" size=\"256\"/><Column id=\"RT_ASGUARANTEE\" type=\"BIGDECIMAL\" size=\"256\"/><Column id=\"DT_ASFROMTO\" type=\"STRING\" size=\"256\"/><Column id=\"CT_JICHAE\" type=\"INT\" size=\"256\"/><Column id=\"TY_RETIRE_BUGEUM\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("_dsProc", this);
            obj._setContents("<ColumnInfo><Column id=\"TARGET\" type=\"STRING\" size=\"256\"/><Column id=\"SP\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"TARGET\">select</Col><Col id=\"SP\">DCBPR_ORDERPLAN_SITE_SELECT</Col></Row><Row><Col id=\"TARGET\">update</Col><Col id=\"SP\">DCBPR_ORDERPLAN_SITE_EDIT_UPDATE</Col></Row><Row><Col id=\"TARGET\">delete</Col><Col id=\"SP\">DCBPR_ORDERPLAN_SITE_DELETE</Col></Row><Row><Col id=\"TARGET\">d_select</Col><Col id=\"SP\">DCBPR_JOINBID_SITE_SELECT</Col></Row><Row><Col id=\"TARGET\">d_update</Col><Col id=\"SP\">DCBPR_PR_JOINBID_UPDATE_HDC</Col></Row><Row><Col id=\"TARGET\">combo</Col><Col id=\"SP\">DZXPR_COMBO_SELECT</Col></Row><Row><Col id=\"TARGET\">execute</Col><Col id=\"SP\">DCBPR_PREORDERPLAN_APPROVE_GW1_UPDATE</Col></Row><Row><Col id=\"TARGET\">update_attend</Col><Col id=\"SP\">DCBPR_SITE_EXPLAIN_ATTEND_UPDATE</Col></Row><Row><Col id=\"TARGET\">update_attach</Col><Col id=\"SP\">DCBPR_PR_EXPLAIN_FILE_CONFIRM</Col></Row><Row><Col id=\"TARGET\">select_jodal</Col><Col id=\"SP\">DZZPR_EPS_BID_SAP_MIDDLE_POPUP_SELECT</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsSearch", this);
            obj._setContents("<ColumnInfo><Column id=\"CD_SITE\" type=\"STRING\" size=\"256\"/><Column id=\"NO_BID\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"CD_SITE\"/><Col id=\"NO_BID\"/></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsList2", this);
            obj._setContents("");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsTY_ACCOUNT", this);
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
            obj._setContents("<ColumnInfo><Column id=\"CD_FIELD\" type=\"STRING\" size=\"256\"/><Column id=\"DS_FIELD\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"CD_FIELD\">TY_ACCOUNT</Col><Col id=\"DS_FIELD\">구매유형</Col></Row><Row><Col id=\"CD_FIELD\">DS_CONTMETHOD</Col><Col id=\"DS_FIELD\">계약유형</Col></Row><Row><Col id=\"CD_FIELD\">TY_TAX</Col><Col id=\"DS_FIELD\">과세구분</Col></Row><Row><Col id=\"CD_FIELD\">DT_FROM</Col><Col id=\"DS_FIELD\">공사시작일</Col></Row><Row><Col id=\"CD_FIELD\">DT_TO</Col><Col id=\"DS_FIELD\">공사종료일</Col></Row><Row><Col id=\"CD_FIELD\">CD_COSTCLASS</Col><Col id=\"DS_FIELD\">부문</Col></Row><Row><Col id=\"CD_FIELD\">CD_LICCOST</Col><Col id=\"DS_FIELD\">하도공종</Col></Row><Row><Col id=\"CD_FIELD\">DS_SUBCON</Col><Col id=\"DS_FIELD\">하도급명</Col></Row><Row><Col id=\"CD_FIELD\">TY_BID</Col><Col id=\"DS_FIELD\">선정방법</Col></Row><Row><Col id=\"CD_FIELD\">ONOFF_EXPLAIN</Col><Col id=\"DS_FIELD\">현설유형</Col></Row><Row><Col id=\"CD_FIELD\">DT_EXPLAIN</Col><Col id=\"DS_FIELD\">현설일시</Col></Row><Row><Col id=\"CD_FIELD\">ID_SITESABUN</Col><Col id=\"DS_FIELD\">현장담당자</Col></Row><Row><Col id=\"CD_FIELD\">AREA_SITE1</Col><Col id=\"DS_FIELD\">1공구연면적</Col></Row><Row><Col id=\"CD_FIELD\">AREA_SITE2</Col><Col id=\"DS_FIELD\">2공구연면적</Col></Row><Row><Col id=\"CD_FIELD\">AREA_SITE3</Col><Col id=\"DS_FIELD\">3공구연면적</Col></Row><Row><Col id=\"CD_FIELD\">AREA_SITE4</Col><Col id=\"DS_FIELD\">4공구연면적</Col></Row></Rows>");
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


            obj = new Dataset("dsJodal", this);
            obj._setContents("");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsONOFF", this);
            obj._setContents("");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsTY_RETIRE_BUGEUM", this);
            obj._setContents("<ColumnInfo><Column id=\"CD_CODE\" type=\"STRING\" size=\"256\"/><Column id=\"DS_CODE\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsYN_PIL", this);
            obj._setContents("<ColumnInfo><Column id=\"CODE\" type=\"STRING\" size=\"256\"/><Column id=\"VALUE\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"CODE\">Y</Col><Col id=\"VALUE\">대상</Col></Row><Row><Col id=\"CODE\">N</Col><Col id=\"VALUE\">비대상</Col></Row></Rows>");
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
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("staNO_BID","ccfCD_SITE:0.0","10.0","118.0","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("1");
            obj.set_text("구매요청번호");
            obj.set_cssclass("sta_WF_SchLabelE");
            this.divSearch.addChild(obj.name, obj);

            obj = new Div("ccfNO_BID","staNO_BID:0.0","10.0","250","24.0",null,null,null,"300",null,null,this.divSearch.form);
            obj.getSetter("CodeFindName").set("DWX_CFPR_01");
            obj.getSetter("CDTextWidth").set("100");
            obj.set_taborder("1");
            obj.set_url("cmm::cmmCodeFind.xfdl");
            obj.getSetter("FitToContents").set("true");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("staDS_STATUS1","ccfNO_BID:0.0","10.0","118.0","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("1");
            obj.set_text("발주의뢰");
            obj.set_cssclass("sta_WF_SchLabel");
            this.divSearch.addChild(obj.name, obj);

            obj = new Edit("ctxtDS_STATUS1","staDS_STATUS1:0.0","10.0","100","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("1");
            obj.getSetter("FitToContents").set("true");
            obj.set_value("");
            obj.set_readonly("true");
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
            obj.set_readonly("true");
            this.divSearch.addChild(obj.name, obj);

            obj = new Div("divData","0","divSearch:10",null,null,"0","0",null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_cssclass("div_DATA_Bg");
            obj.set_text("");
            this.addChild(obj.name, obj);

            obj = new Static("sta01","0","0","950","22",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("3");
            obj.set_text("선정 및 승인사항");
            obj.set_cssclass("sta_TITLE_Bg");
            this.divData.addChild(obj.name, obj);

            obj = new Div("divData01","0","sta01:10","950","273",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("1");
            obj.set_text("");
            this.divData.addChild(obj.name, obj);

            obj = new Static("sta001","0","0","110","30",null,null,null,null,null,null,this.divData.form.divData01.form);
            obj.set_taborder("0");
            obj.set_text("구매유형");
            obj.set_visible("false");
            obj.set_cssclass("sta_WF_tablelabelE");
            this.divData.form.divData01.addChild(obj.name, obj);

            obj = new Static("sta002","0","sta001:-1","110","30",null,null,null,null,null,null,this.divData.form.divData01.form);
            obj.set_taborder("1");
            obj.set_text("구매요청번호");
            obj.set_cssclass("sta_WF_tablelabel");
            this.divData.form.divData01.addChild(obj.name, obj);

            obj = new Static("sta005","0","sta004:-1","110","30",null,null,null,null,null,null,this.divData.form.divData01.form);
            obj.set_taborder("4");
            obj.set_text("RFQ_NO");
            obj.set_cssclass("sta_WF_tablelabel");
            this.divData.form.divData01.addChild(obj.name, obj);

            obj = new Static("sta101","sta001:-1","0","181","30",null,null,null,null,null,null,this.divData.form.divData01.form);
            obj.set_taborder("2");
            obj.set_cssclass("sta_WF_tablebg");
            obj.set_visible("false");
            this.divData.form.divData01.addChild(obj.name, obj);

            obj = new Static("sta102","sta002:-1","sta101:-1","181","30",null,null,null,null,null,null,this.divData.form.divData01.form);
            obj.set_taborder("3");
            obj.set_cssclass("sta_WF_tablebg");
            this.divData.form.divData01.addChild(obj.name, obj);

            obj = new Static("sta105","sta005:-1","sta104:-1","181","30",null,null,null,null,null,null,this.divData.form.divData01.form);
            obj.set_taborder("15");
            obj.set_cssclass("sta_WF_tablebg");
            this.divData.form.divData01.addChild(obj.name, obj);

            obj = new Static("sta201","0","0","110","30",null,null,null,null,null,null,this.divData.form.divData01.form);
            obj.set_taborder("4");
            obj.set_text("계약유형");
            obj.set_cssclass("sta_WF_tablelabelE");
            this.divData.form.divData01.addChild(obj.name, obj);

            obj = new Static("sta202","sta102:-1","sta201:-1","131","30",null,null,null,null,null,null,this.divData.form.divData01.form);
            obj.set_taborder("5");
            obj.set_text("과세율");
            obj.set_cssclass("sta_WF_tablelabel");
            this.divData.form.divData01.addChild(obj.name, obj);

            obj = new Static("sta301","sta201:-1","0","181","30",null,null,null,null,null,null,this.divData.form.divData01.form);
            obj.set_taborder("6");
            obj.set_cssclass("sta_WF_tablebg");
            this.divData.form.divData01.addChild(obj.name, obj);

            obj = new Static("sta302","sta202:-1","sta301:-1","181","30",null,null,null,null,null,null,this.divData.form.divData01.form);
            obj.set_taborder("7");
            obj.set_cssclass("sta_WF_tablebg");
            this.divData.form.divData01.addChild(obj.name, obj);

            obj = new Static("sta401","sta301:-1","0","131","30",null,null,null,null,null,null,this.divData.form.divData01.form);
            obj.set_taborder("8");
            obj.set_text("과세구분");
            obj.set_cssclass("sta_WF_tablelabelE");
            this.divData.form.divData01.addChild(obj.name, obj);

            obj = new Static("sta402","sta302:-1","sta401:-1","120","30",null,null,null,null,null,null,this.divData.form.divData01.form);
            obj.set_taborder("9");
            obj.set_text("공사기간");
            obj.set_cssclass("sta_WF_tablelabelE");
            this.divData.form.divData01.addChild(obj.name, obj);

            obj = new Static("sta403","0","58","110","30",null,null,null,null,null,null,this.divData.form.divData01.form);
            obj.set_taborder("10");
            obj.set_text("부문");
            obj.set_cssclass("sta_WF_tablelabelE");
            this.divData.form.divData01.addChild(obj.name, obj);

            obj = new Static("sta404","289","58","131","30",null,null,null,null,null,null,this.divData.form.divData01.form);
            obj.set_taborder("11");
            obj.set_text("하도공종");
            obj.set_cssclass("sta_WF_tablelabelE");
            this.divData.form.divData01.addChild(obj.name, obj);

            obj = new Static("sta405","599","58","120","30",null,null,null,null,null,null,this.divData.form.divData01.form);
            obj.set_taborder("12");
            obj.set_text("계약보증금율");
            obj.set_cssclass("sta_WF_tablelabel");
            obj.set_textDecoration("none");
            this.divData.form.divData01.addChild(obj.name, obj);

            obj = new Static("sta501","sta401:-1","0","181","30",null,null,null,null,null,null,this.divData.form.divData01.form);
            obj.set_taborder("13");
            obj.set_cssclass("sta_WF_tablebg");
            this.divData.form.divData01.addChild(obj.name, obj);

            obj = new Static("sta502","sta402:-1","sta501:-1","231","30",null,null,null,null,null,null,this.divData.form.divData01.form);
            obj.set_taborder("14");
            obj.set_cssclass("sta_WF_tablebg");
            this.divData.form.divData01.addChild(obj.name, obj);

            obj = new Static("sta503","sta403:-1","58","181","30",null,null,null,null,null,null,this.divData.form.divData01.form);
            obj.set_taborder("15");
            obj.set_cssclass("sta_WF_tablebg");
            this.divData.form.divData01.addChild(obj.name, obj);

            obj = new Static("sta504","sta404:-1","58","181","30",null,null,null,null,null,null,this.divData.form.divData01.form);
            obj.set_taborder("16");
            obj.set_cssclass("sta_WF_tablebg");
            this.divData.form.divData01.addChild(obj.name, obj);

            obj = new Static("sta505","sta405:-1","58","231","30",null,null,null,null,null,null,this.divData.form.divData01.form);
            obj.set_taborder("17");
            obj.set_cssclass("sta_WF_tablebg");
            obj.set_text("계약금액의                    %");
            this.divData.form.divData01.addChild(obj.name, obj);

            obj = new Static("staSpace00","sta501:-1","0","120","30",null,null,null,null,null,null,this.divData.form.divData01.form);
            obj.set_taborder("19");
            obj.set_text("하도급명");
            obj.set_cssclass("sta_WF_tablelabelE");
            this.divData.form.divData01.addChild(obj.name, obj);

            obj = new Static("staBgSpace00","staSpace00:-1","0","231","30",null,null,null,null,null,null,this.divData.form.divData01.form);
            obj.set_taborder("20");
            obj.set_cssclass("sta_WF_tablebg");
            this.divData.form.divData01.addChild(obj.name, obj);

            obj = new Combo("cboTY_ACCOUNT","sta001:5","5","165","20",null,null,null,null,null,null,this.divData.form.divData01.form);
            obj.set_taborder("18");
            obj.set_innerdataset("dsTY_ACCOUNT");
            obj.set_codecolumn("CD_CODE");
            obj.set_datacolumn("DS_CODE");
            obj.set_visible("false");
            this.divData.form.divData01.addChild(obj.name, obj);

            obj = new Edit("txtNO_BID","sta002:5","sta101:4","165","20",null,null,null,null,null,null,this.divData.form.divData01.form);
            obj.set_taborder("21");
            obj.set_value("");
            obj.set_readonly("true");
            this.divData.form.divData01.addChild(obj.name, obj);

            obj = new Edit("txtNO_RFQ","sta005:5","sta104:4","165","20",null,null,null,null,null,null,this.divData.form.divData01.form);
            obj.set_taborder("68");
            obj.set_value("");
            obj.set_readonly("true");
            this.divData.form.divData01.addChild(obj.name, obj);

            obj = new Combo("cboDS_CONTMETHOD","sta201:5","5","164","20",null,null,null,null,null,null,this.divData.form.divData01.form);
            obj.set_taborder("22");
            obj.set_innerdataset("dsDS_CONTMETHOD");
            obj.set_codecolumn("CD_CODE");
            obj.set_datacolumn("DS_CODE");
            obj.set_readonly("true");
            this.divData.form.divData01.addChild(obj.name, obj);

            obj = new MaskEdit("txtRT_TAX","sta202:5","sta301:4","164","20",null,null,null,null,null,null,this.divData.form.divData01.form);
            obj.set_taborder("23");
            obj.set_value("");
            obj.set_format("#,0.##");
            this.divData.form.divData01.addChild(obj.name, obj);

            obj = new Combo("cboTY_TAX","sta401:5","5","164","20",null,null,null,null,null,null,this.divData.form.divData01.form);
            obj.set_taborder("24");
            obj.set_innerdataset("dsTY_TAX");
            obj.set_codecolumn("CODE");
            obj.set_datacolumn("DATA");
            this.divData.form.divData01.addChild(obj.name, obj);

            obj = new Calendar("tclDT_FROM","sta402:5","sta501:4","100","20",null,null,null,null,null,null,this.divData.form.divData01.form);
            obj.set_taborder("25");
            obj.set_dateformat("yyyy-MM-dd");
            obj.set_editformat("yyyyMMdd");
            obj.set_autoselect("true");
            obj.set_value("");
            this.divData.form.divData01.addChild(obj.name, obj);

            obj = new Static("sta00","tclDT_FROM:2","sta501:4","12","20",null,null,null,null,null,null,this.divData.form.divData01.form);
            obj.set_taborder("29");
            obj.set_text("~");
            obj.set_textAlign("center");
            obj.set_verticalAlign("middle");
            this.divData.form.divData01.addChild(obj.name, obj);

            obj = new Calendar("tclDT_TO","sta00:2","sta501:4","100","20",null,null,null,null,null,null,this.divData.form.divData01.form);
            obj.set_taborder("26");
            obj.set_dateformat("yyyy-MM-dd");
            obj.set_editformat("yyyyMMdd");
            obj.set_autoselect("true");
            obj.set_value("");
            this.divData.form.divData01.addChild(obj.name, obj);

            obj = new Edit("txtDS_SUBCON","staSpace00:5","5","216","20",null,null,null,null,null,null,this.divData.form.divData01.form);
            obj.set_taborder("30");
            obj.set_value("");
            this.divData.form.divData01.addChild(obj.name, obj);

            obj = new Div("cfCD_COSTCLASS","sta403:5","63","164","20",null,null,null,null,null,null,this.divData.form.divData01.form);
            obj.getSetter("CodeFindName").set("DCX_CFCOSTCLASS_01");
            obj.getSetter("CDTextWidth").set("70");
            obj.set_taborder("27");
            obj.set_url("cmm::cmmCodeFind.xfdl");
            obj.set_text("");
            this.divData.form.divData01.addChild(obj.name, obj);

            obj = new Div("cfCD_LICCOST","sta404:5","63","165","20",null,null,null,null,null,null,this.divData.form.divData01.form);
            obj.getSetter("CodeFindName").set("DCX_CFLICCOST_01");
            obj.getSetter("CDTextWidth").set("70");
            obj.set_taborder("28");
            obj.set_url("cmm::cmmCodeFind.xfdl");
            this.divData.form.divData01.addChild(obj.name, obj);

            obj = new MaskEdit("txtRT_TAX00","sta405:90","63","51","20",null,null,null,null,null,null,this.divData.form.divData01.form);
            obj.set_taborder("31");
            obj.set_value("");
            obj.set_format("#,0.##");
            this.divData.form.divData01.addChild(obj.name, obj);

            obj = new Static("sta01","0","87","112","30",null,null,null,null,null,null,this.divData.form.divData01.form);
            obj.set_taborder("32");
            obj.set_text("하자보증금율");
            obj.set_cssclass("sta_WF_tablelabel");
            this.divData.form.divData01.addChild(obj.name, obj);

            obj = new Static("sta02","109","87","181","30",null,null,null,null,null,null,this.divData.form.divData01.form);
            obj.set_taborder("33");
            obj.set_cssclass("sta_WF_tablebg");
            obj.set_text("계약금액의                 %");
            this.divData.form.divData01.addChild(obj.name, obj);

            obj = new MaskEdit("txtRT_TAX01","183","92","51","20",null,null,null,null,null,null,this.divData.form.divData01.form);
            obj.set_taborder("34");
            obj.set_value("");
            obj.set_format("#,0.##");
            this.divData.form.divData01.addChild(obj.name, obj);

            obj = new Static("sta03","289","87","132","30",null,null,null,null,null,null,this.divData.form.divData01.form);
            obj.set_taborder("35");
            obj.set_text("하자보증기간");
            obj.set_cssclass("sta_WF_tablelabel");
            this.divData.form.divData01.addChild(obj.name, obj);

            obj = new Static("sta04","419","87","530","30",null,null,null,null,null,null,this.divData.form.divData01.form);
            obj.set_taborder("36");
            obj.set_cssclass("sta_WF_tablebg");
            obj.set_text("전체공사 준공             년 까지");
            this.divData.form.divData01.addChild(obj.name, obj);

            obj = new Edit("txtDS_SUBCON00","506","92","41","20",null,null,null,null,null,null,this.divData.form.divData01.form);
            obj.set_taborder("37");
            obj.set_value("");
            this.divData.form.divData01.addChild(obj.name, obj);

            obj = new Static("sta07","0","116","112","30",null,null,null,null,null,null,this.divData.form.divData01.form);
            obj.set_taborder("38");
            obj.set_text("지체보상금");
            obj.set_cssclass("sta_WF_tablelabel");
            this.divData.form.divData01.addChild(obj.name, obj);

            obj = new Static("sta08","109","116","840","30",null,null,null,null,null,null,this.divData.form.divData01.form);
            obj.set_taborder("39");
            obj.set_cssclass("sta_WF_tablebg");
            obj.set_text("매 지체 일수마다 계약금액의              /1000 현금 또는 기성공제");
            this.divData.form.divData01.addChild(obj.name, obj);

            obj = new Edit("txtDS_SUBCON01","282","121","41","20",null,null,null,null,null,null,this.divData.form.divData01.form);
            obj.set_taborder("40");
            obj.set_value("");
            this.divData.form.divData01.addChild(obj.name, obj);

            obj = new Static("sta08_00","109","145","840","30",null,null,null,null,null,null,this.divData.form.divData01.form);
            obj.set_taborder("41");
            obj.set_cssclass("sta_WF_tablebg");
            this.divData.form.divData01.addChild(obj.name, obj);

            obj = new Static("sta05","600","145","136","30",null,null,null,null,null,null,this.divData.form.divData01.form);
            obj.set_taborder("42");
            obj.set_text("근로자퇴직공제부금?");
            obj.set_tooltiptext("(1안_부가가치세를 포함한 하도급공사 계약금액이 10억원 미만인 경우) 근로자퇴직공제부금은 \"원사업자\"가 부담하여 일괄 납부한다.\r\n(2안_부가가치세를 포함한 하도급공사 계약금액이 10억원 이상인 경우) 관련법에 의거 하수급인 사업주 승인 신청을 하고, 관할 공제회로부터 사업주 승인여부를 통보 받는 즉시 \"건설근로자 퇴직공제가입자증서\" 사본 1부를 제출 원사업자에게 제출하여야 한다.\r\n");
            obj.set_cssclass("sta_WF_tablelabelE");
            this.divData.form.divData01.addChild(obj.name, obj);

            obj = new Combo("cboTY_RETIRE_BUGEUM","741","150","79","20",null,null,null,null,null,null,this.divData.form.divData01.form);
            obj.set_taborder("43");
            obj.set_innerdataset("dsTY_RETIRE_BUGEUM");
            obj.set_codecolumn("CD_CODE");
            obj.set_datacolumn("DS_CODE");
            this.divData.form.divData01.addChild(obj.name, obj);

            obj = new Static("sta07_00","0","145","110","30",null,null,null,null,null,null,this.divData.form.divData01.form);
            obj.set_taborder("44");
            obj.set_text("선급금유무");
            obj.set_cssclass("sta_WF_tablelabel");
            this.divData.form.divData01.addChild(obj.name, obj);

            obj = new Edit("txtDS_PREPAY1","115","150","166","20",null,null,null,null,null,null,this.divData.form.divData01.form);
            obj.set_taborder("45");
            obj.set_value("");
            this.divData.form.divData01.addChild(obj.name, obj);

            obj = new Static("sta07_00_00","289","145","132","30",null,null,null,null,null,null,this.divData.form.divData01.form);
            obj.set_taborder("46");
            obj.set_text("선급금대상");
            obj.set_cssclass("sta_WF_tablelabel");
            this.divData.form.divData01.addChild(obj.name, obj);

            obj = new Radio("rdoYN_PAYGUARANTEE","426","151","129","20",null,null,null,null,null,null,this.divData.form.divData01.form);
            obj.set_taborder("47");
            obj.set_innerdataset("dsYN_PIL");
            obj.set_direction("vertical");
            obj.set_fittocontents("width");
            obj.set_codecolumn("CODE");
            obj.set_datacolumn("VALUE");
            this.divData.form.divData01.addChild(obj.name, obj);

            obj = new Static("sta07_00_01","0","174","110","60",null,null,null,null,null,null,this.divData.form.divData01.form);
            obj.set_taborder("48");
            obj.set_text("특기사항");
            obj.set_cssclass("sta_WF_tablelabel");
            this.divData.form.divData01.addChild(obj.name, obj);

            obj = new Static("sta08_00_00","109","174","840","60",null,null,null,null,null,null,this.divData.form.divData01.form);
            obj.set_taborder("49");
            obj.set_cssclass("sta_WF_tablebg");
            this.divData.form.divData01.addChild(obj.name, obj);

            obj = new TextArea("txt00","115","179","827","50",null,null,null,null,null,null,this.divData.form.divData01.form);
            obj.set_taborder("50");
            this.divData.form.divData01.addChild(obj.name, obj);

            obj = new Static("sta405_00","600","116","120","30",null,null,null,null,null,null,this.divData.form.divData01.form);
            obj.set_taborder("51");
            obj.set_text("대금지급조건");
            obj.set_cssclass("sta_WF_tablelabel");
            obj.set_textDecoration("none");
            obj.set_usedecorate("false");
            this.divData.form.divData01.addChild(obj.name, obj);

            obj = new Edit("txtDS_PAY","723","121","219","20",null,null,null,null,null,null,this.divData.form.divData01.form);
            obj.set_taborder("52");
            obj.set_value("");
            this.divData.form.divData01.addChild(obj.name, obj);

            obj = new Div("divData02","0","divData01:-27","1100","59",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("2");
            this.divData.addChild(obj.name, obj);

            obj = new Static("sta2001","0","0","136","30",null,null,null,null,null,null,this.divData.form.divData02.form);
            obj.set_taborder("1");
            obj.set_text("현장요청일");
            obj.set_cssclass("sta_WF_tablelabel");
            obj.set_textAlign("center");
            this.divData.form.divData02.addChild(obj.name, obj);

            obj = new Static("sta2002","sta2001:-1","0","136","30",null,null,null,null,null,null,this.divData.form.divData02.form);
            obj.set_taborder("1");
            obj.set_text("본사접수일");
            obj.set_cssclass("sta_WF_tablelabel");
            obj.set_textAlign("center");
            this.divData.form.divData02.addChild(obj.name, obj);

            obj = new Static("sta2003","sta2002:-1","0","136","30",null,null,null,null,null,null,this.divData.form.divData02.form);
            obj.set_taborder("1");
            obj.set_text("승인일자");
            obj.set_cssclass("sta_WF_tablelabel");
            obj.set_textAlign("center");
            this.divData.form.divData02.addChild(obj.name, obj);

            obj = new Static("sta2004","sta2003:-1","0","136","30",null,null,null,null,null,null,this.divData.form.divData02.form);
            obj.set_taborder("1");
            obj.set_text("도급금액");
            obj.set_cssclass("sta_WF_tablelabel");
            obj.set_textAlign("center");
            this.divData.form.divData02.addChild(obj.name, obj);

            obj = new Static("sta2005","sta2004:-1","0","136","30",null,null,null,null,null,null,this.divData.form.divData02.form);
            obj.set_taborder("1");
            obj.set_text("실행금액");
            obj.set_cssclass("sta_WF_tablelabel");
            obj.set_textAlign("center");
            this.divData.form.divData02.addChild(obj.name, obj);

            obj = new Static("sta2006","sta2005:-1","0","136","30",null,null,null,null,null,null,this.divData.form.divData02.form);
            obj.set_taborder("1");
            obj.set_text("실시(안)금액");
            obj.set_cssclass("sta_WF_tablelabel");
            obj.set_textAlign("center");
            this.divData.form.divData02.addChild(obj.name, obj);

            obj = new Static("sta2007","sta2006:-1","0","139","30",null,null,null,null,null,null,this.divData.form.divData02.form);
            obj.set_taborder("1");
            obj.set_text("계약금액");
            obj.set_cssclass("sta_WF_tablelabel");
            obj.set_textAlign("center");
            this.divData.form.divData02.addChild(obj.name, obj);

            obj = new Static("sta2008","sta2007:-1","0","123","30",null,null,null,null,null,null,this.divData.form.divData02.form);
            obj.set_taborder("1");
            obj.set_text("평단가");
            obj.set_cssclass("sta_WF_tablelabel");
            obj.set_textAlign("center");
            obj.set_visible("false");
            this.divData.form.divData02.addChild(obj.name, obj);

            obj = new Static("sta2101","0","sta2001:-1","136","30",null,null,null,null,null,null,this.divData.form.divData02.form);
            obj.set_taborder("1");
            obj.set_cssclass("sta_WF_tablebg");
            this.divData.form.divData02.addChild(obj.name, obj);

            obj = new Static("sta2102","sta2101:-1","sta2002:-1","136","30",null,null,null,null,null,null,this.divData.form.divData02.form);
            obj.set_taborder("1");
            obj.set_cssclass("sta_WF_tablebg");
            this.divData.form.divData02.addChild(obj.name, obj);

            obj = new Static("sta2103","sta2102:-1","sta2003:-1","136","30",null,null,null,null,null,null,this.divData.form.divData02.form);
            obj.set_taborder("1");
            obj.set_cssclass("sta_WF_tablebg");
            this.divData.form.divData02.addChild(obj.name, obj);

            obj = new Static("sta2104","sta2103:-1","sta2004:-1","136","30",null,null,null,null,null,null,this.divData.form.divData02.form);
            obj.set_taborder("1");
            obj.set_cssclass("sta_WF_tablebg");
            this.divData.form.divData02.addChild(obj.name, obj);

            obj = new Static("sta2105","sta2104:-1","sta2005:-1","136","30",null,null,null,null,null,null,this.divData.form.divData02.form);
            obj.set_taborder("1");
            obj.set_cssclass("sta_WF_tablebg");
            this.divData.form.divData02.addChild(obj.name, obj);

            obj = new Static("sta2106","sta2105:-1","sta2006:-1","136","30",null,null,null,null,null,null,this.divData.form.divData02.form);
            obj.set_taborder("1");
            obj.set_cssclass("sta_WF_tablebg");
            this.divData.form.divData02.addChild(obj.name, obj);

            obj = new Static("sta2107","sta2106:-1","sta2007:-1","139","30",null,null,null,null,null,null,this.divData.form.divData02.form);
            obj.set_taborder("1");
            obj.set_cssclass("sta_WF_tablebg");
            this.divData.form.divData02.addChild(obj.name, obj);

            obj = new Static("sta2108","sta2107:-1","sta2008:-1","123","30",null,null,null,null,null,null,this.divData.form.divData02.form);
            obj.set_taborder("1");
            obj.set_cssclass("sta_WF_tablebg");
            obj.set_visible("false");
            this.divData.form.divData02.addChild(obj.name, obj);

            obj = new Calendar("tclDT_REQ_SITE","13","34","110","20",null,null,null,null,null,null,this.divData.form.divData02.form);
            obj.set_taborder("2");
            obj.set_dateformat("yyyy-MM-dd");
            obj.set_editformat("yyyyMMdd");
            obj.set_autoselect("true");
            obj.set_value("");
            obj.set_readonly("true");
            this.divData.form.divData02.addChild(obj.name, obj);

            obj = new Calendar("tclDT_HQRECEIPT","sta2101:13","34","110","20",null,null,null,null,null,null,this.divData.form.divData02.form);
            obj.set_taborder("2");
            obj.set_dateformat("yyyy-MM-dd");
            obj.set_editformat("yyyyMMdd");
            obj.set_autoselect("true");
            obj.set_value("");
            obj.set_readonly("true");
            this.divData.form.divData02.addChild(obj.name, obj);

            obj = new Calendar("tclDT_HQAPPR","sta2102:13","34","110","20",null,null,null,null,null,null,this.divData.form.divData02.form);
            obj.set_taborder("2");
            obj.set_dateformat("yyyy-MM-dd");
            obj.set_editformat("yyyyMMdd");
            obj.set_autoselect("true");
            obj.set_value("");
            obj.set_readonly("true");
            this.divData.form.divData02.addChild(obj.name, obj);

            obj = new MaskEdit("txtAM_TT_DOKUB","sta2103:4","34","126","20",null,null,null,null,null,null,this.divData.form.divData02.form);
            obj.set_taborder("2");
            obj.set_value("");
            obj.set_readonly("true");
            obj.set_format("9,990");
            this.divData.form.divData02.addChild(obj.name, obj);

            obj = new MaskEdit("txtAM_TT_SILHENG","sta2104:4","34","126","20",null,null,null,null,null,null,this.divData.form.divData02.form);
            obj.set_taborder("2");
            obj.set_value("");
            obj.set_readonly("true");
            obj.set_format("9,990");
            this.divData.form.divData02.addChild(obj.name, obj);

            obj = new MaskEdit("txtAM_REQUEST","sta2105:4","34","126","20",null,null,null,null,null,null,this.divData.form.divData02.form);
            obj.set_taborder("2");
            obj.set_value("");
            obj.set_readonly("true");
            obj.set_format("9,990");
            this.divData.form.divData02.addChild(obj.name, obj);

            obj = new MaskEdit("txtAM_GONGSA","sta2106:4","34","129","20",null,null,null,null,null,null,this.divData.form.divData02.form);
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
            obj.set_visible("false");
            this.divData.form.divData02.addChild(obj.name, obj);

            obj = new Tab("tabData","0","divData02:10","950",null,null,"0",null,null,"300",null,this.divData.form);
            obj.set_taborder("0");
            obj.set_tabindex("0");
            this.divData.addChild(obj.name, obj);

            obj = new Tabpage("tab1",this.divData.form.tabData);
            obj.set_text("현장설명회");
            this.divData.form.tabData.addChild(obj.name, obj);

            obj = new Div("div00","10","5",null,"70","10",null,null,null,null,null,this.divData.form.tabData.tab1.form);
            obj.set_taborder("1");
            obj.set_formscrolltype("none");
            this.divData.form.tabData.tab1.addChild(obj.name, obj);

            obj = new Static("sta01","0","0",null,"22","0",null,null,null,null,null,this.divData.form.tabData.tab1.form.div00.form);
            obj.set_taborder("0");
            obj.set_text("현장설명회");
            obj.set_cssclass("sta_TITLE_Bg");
            this.divData.form.tabData.tab1.form.div00.addChild(obj.name, obj);

            obj = new Static("sta001","0","30","110","30",null,null,null,null,null,null,this.divData.form.tabData.tab1.form.div00.form);
            obj.set_taborder("1");
            obj.set_text("현장실시여부");
            obj.set_visible("false");
            obj.set_cssclass("sta_WF_tablelabelE");
            this.divData.form.tabData.tab1.form.div00.addChild(obj.name, obj);

            obj = new Static("sta101","109","30","283","30",null,null,null,null,null,null,this.divData.form.tabData.tab1.form.div00.form);
            obj.set_taborder("2");
            obj.set_cssclass("sta_WF_tablebg");
            obj.set_visible("false");
            this.divData.form.tabData.tab1.form.div00.addChild(obj.name, obj);

            obj = new Static("sta00","0","30","110","30",null,null,null,null,null,null,this.divData.form.tabData.tab1.form.div00.form);
            obj.set_taborder("3");
            obj.set_text("현설진행여부");
            obj.set_cssclass("sta_WF_tablelabelE");
            this.divData.form.tabData.tab1.form.div00.addChild(obj.name, obj);

            obj = new Static("sta02","sta00:-1","30","283","30",null,null,null,null,null,null,this.divData.form.tabData.tab1.form.div00.form);
            obj.set_taborder("4");
            obj.set_cssclass("sta_WF_tablebg");
            this.divData.form.tabData.tab1.form.div00.addChild(obj.name, obj);

            obj = new Static("sta06","sta02:-1","30","110","30",null,null,null,null,null,null,this.divData.form.tabData.tab1.form.div00.form);
            obj.set_taborder("5");
            obj.set_text("현설장소");
            obj.set_cssclass("sta_WF_tablelabel");
            this.divData.form.tabData.tab1.form.div00.addChild(obj.name, obj);

            obj = new Static("sta05","sta06:-1","30","310","30",null,null,null,null,null,null,this.divData.form.tabData.tab1.form.div00.form);
            obj.set_taborder("6");
            obj.set_cssclass("sta_WF_tablebg");
            this.divData.form.tabData.tab1.form.div00.addChild(obj.name, obj);

            obj = new Combo("cboYN_EXPLAIN","sta001:5","35","165","20",null,null,null,null,null,null,this.divData.form.tabData.tab1.form.div00.form);
            obj.set_taborder("9");
            obj.set_innerdataset("dsYN_EXPLAIN");
            obj.set_codecolumn("CODE");
            obj.set_datacolumn("DATA");
            obj.set_visible("false");
            this.divData.form.tabData.tab1.form.div00.addChild(obj.name, obj);

            obj = new Combo("cboONOFF_EXPLAIN","sta00:5","35","165","20",null,null,null,null,null,null,this.divData.form.tabData.tab1.form.div00.form);
            obj.set_taborder("7");
            obj.set_innerdataset("dsONOFF_EXPLAIN");
            obj.set_codecolumn("CD_CODE");
            obj.set_datacolumn("DS_CODE");
            this.divData.form.tabData.tab1.form.div00.addChild(obj.name, obj);

            obj = new Edit("txtAT_SITEEXPLAIN","sta06:5","35","295","20",null,null,null,null,null,null,this.divData.form.tabData.tab1.form.div00.form);
            obj.set_taborder("8");
            obj.set_value("");
            this.divData.form.tabData.tab1.form.div00.addChild(obj.name, obj);

            obj = new Div("div01","10","div00:0",null,"118","10",null,null,null,null,null,this.divData.form.tabData.tab1.form);
            obj.set_taborder("1");
            obj.set_text("div00");
            obj.set_formscrolltype("none");
            this.divData.form.tabData.tab1.addChild(obj.name, obj);

            obj = new Static("sta0111","0","0",null,"22","0",null,null,null,null,null,this.divData.form.tabData.tab1.form.div01.form);
            obj.set_taborder("0");
            obj.set_text("현장담당");
            obj.set_cssclass("sta_TITLE_Bg");
            this.divData.form.tabData.tab1.form.div01.addChild(obj.name, obj);

            obj = new Static("sta00","0","29","110","30",null,null,null,null,null,null,this.divData.form.tabData.tab1.form.div01.form);
            obj.set_taborder("1");
            obj.set_text("현장담당자");
            obj.set_cssclass("sta_WF_tablelabelE");
            this.divData.form.tabData.tab1.form.div01.addChild(obj.name, obj);

            obj = new Static("sta03","0","58","110","30",null,null,null,null,null,null,this.divData.form.tabData.tab1.form.div01.form);
            obj.set_taborder("2");
            obj.set_text("기타사항");
            obj.set_cssclass("sta_WF_tablelabel");
            this.divData.form.tabData.tab1.form.div01.addChild(obj.name, obj);

            obj = new Static("sta02","109","29","283","30",null,null,null,null,null,null,this.divData.form.tabData.tab1.form.div01.form);
            obj.set_taborder("3");
            obj.set_cssclass("sta_WF_tablebg");
            this.divData.form.tabData.tab1.form.div01.addChild(obj.name, obj);

            obj = new Static("sta04","109","58","590","30",null,null,null,null,null,null,this.divData.form.tabData.tab1.form.div01.form);
            obj.set_taborder("4");
            obj.set_cssclass("sta_WF_tablebg");
            this.divData.form.tabData.tab1.form.div01.addChild(obj.name, obj);

            obj = new Static("sta07","sta02:-1",null,"110","30",null,"59",null,null,null,null,this.divData.form.tabData.tab1.form.div01.form);
            obj.set_taborder("5");
            obj.set_text("전화번호");
            obj.set_cssclass("sta_WF_tablelabel");
            this.divData.form.tabData.tab1.form.div01.addChild(obj.name, obj);

            obj = new Static("sta08","sta07:-1",null,"199","30",null,"59",null,null,null,null,this.divData.form.tabData.tab1.form.div01.form);
            obj.set_taborder("6");
            obj.set_cssclass("sta_WF_tablebg");
            this.divData.form.tabData.tab1.form.div01.addChild(obj.name, obj);

            obj = new Edit("txtRM_BIDREMARK","sta03:5","sta02:4","579","20",null,null,null,null,null,null,this.divData.form.tabData.tab1.form.div01.form);
            obj.set_taborder("9");
            obj.set_value("");
            this.divData.form.tabData.tab1.form.div01.addChild(obj.name, obj);

            obj = new Div("ccfID_SITESABUN","sta00:5",null,"272","20",null,"64",null,null,null,null,this.divData.form.tabData.tab1.form.div01.form);
            obj.getSetter("CodeFindName").set("DZX_CFUSER");
            obj.getSetter("CDTextWidth").set("70");
            obj.set_taborder("7");
            obj.set_url("cmm::cmmCodeFind.xfdl");
            this.divData.form.tabData.tab1.form.div01.addChild(obj.name, obj);

            obj = new Edit("txtNO_SITETEL","sta07:5",null,"188","20",null,"64",null,null,null,null,this.divData.form.tabData.tab1.form.div01.form);
            obj.set_taborder("8");
            obj.set_value("");
            this.divData.form.tabData.tab1.form.div01.addChild(obj.name, obj);

            obj = new Tabpage("tab2",this.divData.form.tabData);
            obj.set_text("현설참석목록");
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
            obj.set_text("현설진행여부");
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
            obj.set_taborder("0");
            obj.set_text("현장담당");
            obj.set_cssclass("sta_TITLE_Bg");
            this.divData.form.tabData.tab3.form.div01.addChild(obj.name, obj);

            obj = new Static("sta00","0","29","110","30",null,null,null,null,null,null,this.divData.form.tabData.tab3.form.div01.form);
            obj.set_taborder("1");
            obj.set_text("현장담당자");
            obj.set_cssclass("sta_WF_tablelabel");
            this.divData.form.tabData.tab3.form.div01.addChild(obj.name, obj);

            obj = new Static("sta03","0","58","110","30",null,null,null,null,null,null,this.divData.form.tabData.tab3.form.div01.form);
            obj.set_taborder("2");
            obj.set_text("기타사항");
            obj.set_cssclass("sta_WF_tablelabel");
            this.divData.form.tabData.tab3.form.div01.addChild(obj.name, obj);

            obj = new Static("sta02","109","29","283","30",null,null,null,null,null,null,this.divData.form.tabData.tab3.form.div01.form);
            obj.set_taborder("3");
            obj.set_cssclass("sta_WF_tablebg");
            this.divData.form.tabData.tab3.form.div01.addChild(obj.name, obj);

            obj = new Static("sta04","109","58","590","30",null,null,null,null,null,null,this.divData.form.tabData.tab3.form.div01.form);
            obj.set_taborder("4");
            obj.set_cssclass("sta_WF_tablebg");
            this.divData.form.tabData.tab3.form.div01.addChild(obj.name, obj);

            obj = new Static("sta07","sta02:-1",null,"110","30",null,"59",null,null,null,null,this.divData.form.tabData.tab3.form.div01.form);
            obj.set_taborder("5");
            obj.set_text("전화번호");
            obj.set_cssclass("sta_WF_tablelabel");
            this.divData.form.tabData.tab3.form.div01.addChild(obj.name, obj);

            obj = new Static("sta08","sta07:-1",null,"199","30",null,"59",null,null,null,null,this.divData.form.tabData.tab3.form.div01.form);
            obj.set_taborder("6");
            obj.set_cssclass("sta_WF_tablebg");
            obj.getSetter("readonly").set("true");
            this.divData.form.tabData.tab3.form.div01.addChild(obj.name, obj);

            obj = new Edit("txtRM_BIDREMARK","sta03:5","sta02:4","579","20",null,null,null,null,null,null,this.divData.form.tabData.tab3.form.div01.form);
            obj.set_taborder("9");
            obj.set_value("");
            obj.set_readonly("true");
            this.divData.form.tabData.tab3.form.div01.addChild(obj.name, obj);

            obj = new Div("ccfID_SITESABUN_01","sta00:5",null,"272","20",null,"64",null,null,null,null,this.divData.form.tabData.tab3.form.div01.form);
            obj.getSetter("CodeFindName").set("DZX_CFUSER");
            obj.getSetter("CDTextWidth").set("70");
            obj.set_taborder("7");
            obj.set_url("cmm::cmmCodeFind.xfdl");
            obj.getSetter("readonly").set("true");
            this.divData.form.tabData.tab3.form.div01.addChild(obj.name, obj);

            obj = new Edit("txtNO_SITETEL","sta07:5",null,"188","20",null,"64",null,null,null,null,this.divData.form.tabData.tab3.form.div01.form);
            obj.set_taborder("8");
            obj.set_value("");
            obj.set_readonly("true");
            this.divData.form.tabData.tab3.form.div01.addChild(obj.name, obj);

            obj = new Div("div02","10","div01:-25",null,"217","10",null,null,null,null,null,this.divData.form.tabData.tab3.form);
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

            obj = new Edit("txtNO_BIDCOORDITEL","sta10:5","103","144","20",null,null,null,null,null,null,this.divData.form.tabData.tab3.form.div02.form);
            obj.set_taborder("46");
            obj.set_readonly("true");
            this.divData.form.tabData.tab3.form.div02.addChild(obj.name, obj);

            obj = new Edit("txtNO_BIDDAM1TEL","sta11:5","132","144","20",null,null,null,null,null,null,this.divData.form.tabData.tab3.form.div02.form);
            obj.set_taborder("45");
            obj.set_readonly("true");
            this.divData.form.tabData.tab3.form.div02.addChild(obj.name, obj);

            obj = new Edit("txtNO_BIDDAM2TEL","sta16:5","161","144","20",null,null,null,null,null,null,this.divData.form.tabData.tab3.form.div02.form);
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
            obj.set_innerdataset("dsONOFF");
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

            obj = new Button("btn04","tabData:-100","divData02:5","60","23",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("8");
            obj.set_text("현설파일확정");
            obj.set_fittocontents("width");
            obj.set_padding("4px 7px 4px 7px");
            obj.set_color("crimson");
            this.divData.addChild(obj.name, obj);

            obj = new Button("btn01",null,"divData02:5","60","23","btn02:5",null,null,null,null,null,this.divData.form);
            obj.set_taborder("6");
            obj.set_text("현설질의응답");
            obj.set_fittocontents("width");
            obj.set_padding("4px 7px 4px 7px");
            obj.set_color("crimson");
            this.divData.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this
            obj = new Layout("default","",0,0,this,
            	//-- Layout function
            	function(p)
            	{
                var rootobj = p;


                // {{ this.divSearch
                p = rootobj.divSearch.form;

                p.staCD_SITE.set_taborder("1");
                p.staCD_SITE.set_text("현장코드");
                p.staCD_SITE.set_cssclass("sta_WF_SchLabelE");
                p.staCD_SITE.move("0.0","10.0","118.0","24.0",null,null);

                p.ccfCD_SITE.getSetter("CodeFindName").set("DZX_CFSITE");
                p.ccfCD_SITE.getSetter("AfterCDTextChanged").set("ccfCD_SITE_AfterCDTextChanged");
                p.ccfCD_SITE.getSetter("CDTextWidth").set("80");
                p.ccfCD_SITE.set_taborder("1");
                p.ccfCD_SITE.set_url("cmm::cmmCodeFind.xfdl");
                p.ccfCD_SITE.move("staCD_SITE:0.0","10.0","250","24.0",null,null);

                p.staNO_BID.set_taborder("1");
                p.staNO_BID.set_text("구매요청번호");
                p.staNO_BID.set_cssclass("sta_WF_SchLabelE");
                p.staNO_BID.move("ccfCD_SITE:0.0","10.0","118.0","24.0",null,null);

                p.ccfNO_BID.getSetter("CodeFindName").set("DWX_CFPR_01");
                p.ccfNO_BID.getSetter("CDTextWidth").set("100");
                p.ccfNO_BID.set_taborder("1");
                p.ccfNO_BID.set_url("cmm::cmmCodeFind.xfdl");
                p.ccfNO_BID.getSetter("FitToContents").set("true");
                p.ccfNO_BID.set_maxwidth("300");
                p.ccfNO_BID.move("staNO_BID:0.0","10.0","250","24.0",null,null);

                p.staDS_STATUS1.set_taborder("1");
                p.staDS_STATUS1.set_text("발주의뢰");
                p.staDS_STATUS1.set_cssclass("sta_WF_SchLabel");
                p.staDS_STATUS1.move("ccfNO_BID:0.0","10.0","118.0","24.0",null,null);

                p.ctxtDS_STATUS1.set_taborder("1");
                p.ctxtDS_STATUS1.getSetter("FitToContents").set("true");
                p.ctxtDS_STATUS1.set_value("");
                p.ctxtDS_STATUS1.set_readonly("true");
                p.ctxtDS_STATUS1.move("staDS_STATUS1:0.0","10.0","100","24.0",null,null);

                p.staDS_BIDSTATUS.set_taborder("1");
                p.staDS_BIDSTATUS.set_text("입찰진행");
                p.staDS_BIDSTATUS.set_cssclass("sta_WF_SchLabel");
                p.staDS_BIDSTATUS.move("ctxtDS_STATUS1:0.0","10.0","118.0","24.0",null,null);

                p.ctxtDS_BIDSTATUS.set_taborder("1");
                p.ctxtDS_BIDSTATUS.getSetter("FitToContents").set("true");
                p.ctxtDS_BIDSTATUS.set_value("");
                p.ctxtDS_BIDSTATUS.set_readonly("true");
                p.ctxtDS_BIDSTATUS.move("staDS_BIDSTATUS:0.0","10.0","100","24.0",null,null);
                // this.divSearch }}


                // {{ this.divData.form.divData01
                p = rootobj.divData.form.divData01.form;

                p.sta001.set_taborder("0");
                p.sta001.set_text("구매유형");
                p.sta001.set_visible("false");
                p.sta001.set_cssclass("sta_WF_tablelabelE");
                p.sta001.move("0","0","110","30",null,null);

                p.sta002.set_taborder("1");
                p.sta002.set_text("구매요청번호");
                p.sta002.set_cssclass("sta_WF_tablelabel");
                p.sta002.move("0","sta001:-1","110","30",null,null);

                p.sta005.set_taborder("4");
                p.sta005.set_text("RFQ_NO");
                p.sta005.set_cssclass("sta_WF_tablelabel");
                p.sta005.move("0","sta004:-1","110","30",null,null);

                p.sta101.set_taborder("2");
                p.sta101.set_cssclass("sta_WF_tablebg");
                p.sta101.set_visible("false");
                p.sta101.move("sta001:-1","0","181","30",null,null);

                p.sta102.set_taborder("3");
                p.sta102.set_cssclass("sta_WF_tablebg");
                p.sta102.move("sta002:-1","sta101:-1","181","30",null,null);

                p.sta105.set_taborder("15");
                p.sta105.set_cssclass("sta_WF_tablebg");
                p.sta105.move("sta005:-1","sta104:-1","181","30",null,null);

                p.sta201.set_taborder("4");
                p.sta201.set_text("계약유형");
                p.sta201.set_cssclass("sta_WF_tablelabelE");
                p.sta201.move("0","0","110","30",null,null);

                p.sta202.set_taborder("5");
                p.sta202.set_text("과세율");
                p.sta202.set_cssclass("sta_WF_tablelabel");
                p.sta202.move("sta102:-1","sta201:-1","131","30",null,null);

                p.sta301.set_taborder("6");
                p.sta301.set_cssclass("sta_WF_tablebg");
                p.sta301.move("sta201:-1","0","181","30",null,null);

                p.sta302.set_taborder("7");
                p.sta302.set_cssclass("sta_WF_tablebg");
                p.sta302.move("sta202:-1","sta301:-1","181","30",null,null);

                p.sta401.set_taborder("8");
                p.sta401.set_text("과세구분");
                p.sta401.set_cssclass("sta_WF_tablelabelE");
                p.sta401.move("sta301:-1","0","131","30",null,null);

                p.sta402.set_taborder("9");
                p.sta402.set_text("공사기간");
                p.sta402.set_cssclass("sta_WF_tablelabelE");
                p.sta402.move("sta302:-1","sta401:-1","120","30",null,null);

                p.sta403.set_taborder("10");
                p.sta403.set_text("부문");
                p.sta403.set_cssclass("sta_WF_tablelabelE");
                p.sta403.move("0","58","110","30",null,null);

                p.sta404.set_taborder("11");
                p.sta404.set_text("하도공종");
                p.sta404.set_cssclass("sta_WF_tablelabelE");
                p.sta404.move("289","58","131","30",null,null);

                p.sta405.set_taborder("12");
                p.sta405.set_text("계약보증금율");
                p.sta405.set_cssclass("sta_WF_tablelabel");
                p.sta405.set_textDecoration("none");
                p.sta405.move("599","58","120","30",null,null);

                p.sta501.set_taborder("13");
                p.sta501.set_cssclass("sta_WF_tablebg");
                p.sta501.move("sta401:-1","0","181","30",null,null);

                p.sta502.set_taborder("14");
                p.sta502.set_cssclass("sta_WF_tablebg");
                p.sta502.move("sta402:-1","sta501:-1","231","30",null,null);

                p.sta503.set_taborder("15");
                p.sta503.set_cssclass("sta_WF_tablebg");
                p.sta503.move("sta403:-1","58","181","30",null,null);

                p.sta504.set_taborder("16");
                p.sta504.set_cssclass("sta_WF_tablebg");
                p.sta504.move("sta404:-1","58","181","30",null,null);

                p.sta505.set_taborder("17");
                p.sta505.set_cssclass("sta_WF_tablebg");
                p.sta505.set_text("계약금액의                    %");
                p.sta505.move("sta405:-1","58","231","30",null,null);

                p.staSpace00.set_taborder("19");
                p.staSpace00.set_text("하도급명");
                p.staSpace00.set_cssclass("sta_WF_tablelabelE");
                p.staSpace00.move("sta501:-1","0","120","30",null,null);

                p.staBgSpace00.set_taborder("20");
                p.staBgSpace00.set_cssclass("sta_WF_tablebg");
                p.staBgSpace00.move("staSpace00:-1","0","231","30",null,null);

                p.cboTY_ACCOUNT.set_taborder("18");
                p.cboTY_ACCOUNT.set_innerdataset("dsTY_ACCOUNT");
                p.cboTY_ACCOUNT.set_codecolumn("CD_CODE");
                p.cboTY_ACCOUNT.set_datacolumn("DS_CODE");
                p.cboTY_ACCOUNT.set_visible("false");
                p.cboTY_ACCOUNT.move("sta001:5","5","165","20",null,null);

                p.txtNO_BID.set_taborder("21");
                p.txtNO_BID.set_value("");
                p.txtNO_BID.set_readonly("true");
                p.txtNO_BID.move("sta002:5","sta101:4","165","20",null,null);

                p.txtNO_RFQ.set_taborder("68");
                p.txtNO_RFQ.set_value("");
                p.txtNO_RFQ.set_readonly("true");
                p.txtNO_RFQ.move("sta005:5","sta104:4","165","20",null,null);

                p.cboDS_CONTMETHOD.set_taborder("22");
                p.cboDS_CONTMETHOD.set_innerdataset("dsDS_CONTMETHOD");
                p.cboDS_CONTMETHOD.set_codecolumn("CD_CODE");
                p.cboDS_CONTMETHOD.set_datacolumn("DS_CODE");
                p.cboDS_CONTMETHOD.set_readonly("true");
                p.cboDS_CONTMETHOD.move("sta201:5","5","164","20",null,null);

                p.txtRT_TAX.set_taborder("23");
                p.txtRT_TAX.set_value("");
                p.txtRT_TAX.set_format("#,0.##");
                p.txtRT_TAX.move("sta202:5","sta301:4","164","20",null,null);

                p.cboTY_TAX.set_taborder("24");
                p.cboTY_TAX.set_innerdataset("dsTY_TAX");
                p.cboTY_TAX.set_codecolumn("CODE");
                p.cboTY_TAX.set_datacolumn("DATA");
                p.cboTY_TAX.move("sta401:5","5","164","20",null,null);

                p.tclDT_FROM.set_taborder("25");
                p.tclDT_FROM.set_dateformat("yyyy-MM-dd");
                p.tclDT_FROM.set_editformat("yyyyMMdd");
                p.tclDT_FROM.set_autoselect("true");
                p.tclDT_FROM.set_value("");
                p.tclDT_FROM.move("sta402:5","sta501:4","100","20",null,null);

                p.sta00.set_taborder("29");
                p.sta00.set_text("~");
                p.sta00.set_textAlign("center");
                p.sta00.set_verticalAlign("middle");
                p.sta00.move("tclDT_FROM:2","sta501:4","12","20",null,null);

                p.tclDT_TO.set_taborder("26");
                p.tclDT_TO.set_dateformat("yyyy-MM-dd");
                p.tclDT_TO.set_editformat("yyyyMMdd");
                p.tclDT_TO.set_autoselect("true");
                p.tclDT_TO.set_value("");
                p.tclDT_TO.move("sta00:2","sta501:4","100","20",null,null);

                p.txtDS_SUBCON.set_taborder("30");
                p.txtDS_SUBCON.set_value("");
                p.txtDS_SUBCON.move("staSpace00:5","5","216","20",null,null);

                p.cfCD_COSTCLASS.getSetter("CodeFindName").set("DCX_CFCOSTCLASS_01");
                p.cfCD_COSTCLASS.getSetter("CDTextWidth").set("70");
                p.cfCD_COSTCLASS.set_taborder("27");
                p.cfCD_COSTCLASS.set_url("cmm::cmmCodeFind.xfdl");
                p.cfCD_COSTCLASS.set_text("");
                p.cfCD_COSTCLASS.move("sta403:5","63","164","20",null,null);

                p.cfCD_LICCOST.getSetter("CodeFindName").set("DCX_CFLICCOST_01");
                p.cfCD_LICCOST.getSetter("CDTextWidth").set("70");
                p.cfCD_LICCOST.set_taborder("28");
                p.cfCD_LICCOST.set_url("cmm::cmmCodeFind.xfdl");
                p.cfCD_LICCOST.move("sta404:5","63","165","20",null,null);

                p.txtRT_TAX00.set_taborder("31");
                p.txtRT_TAX00.set_value("");
                p.txtRT_TAX00.set_format("#,0.##");
                p.txtRT_TAX00.move("sta405:90","63","51","20",null,null);

                p.sta01.set_taborder("32");
                p.sta01.set_text("하자보증금율");
                p.sta01.set_cssclass("sta_WF_tablelabel");
                p.sta01.move("0","87","112","30",null,null);

                p.sta02.set_taborder("33");
                p.sta02.set_cssclass("sta_WF_tablebg");
                p.sta02.set_text("계약금액의                 %");
                p.sta02.move("109","87","181","30",null,null);

                p.txtRT_TAX01.set_taborder("34");
                p.txtRT_TAX01.set_value("");
                p.txtRT_TAX01.set_format("#,0.##");
                p.txtRT_TAX01.move("183","92","51","20",null,null);

                p.sta03.set_taborder("35");
                p.sta03.set_text("하자보증기간");
                p.sta03.set_cssclass("sta_WF_tablelabel");
                p.sta03.move("289","87","132","30",null,null);

                p.sta04.set_taborder("36");
                p.sta04.set_cssclass("sta_WF_tablebg");
                p.sta04.set_text("전체공사 준공             년 까지");
                p.sta04.move("419","87","530","30",null,null);

                p.txtDS_SUBCON00.set_taborder("37");
                p.txtDS_SUBCON00.set_value("");
                p.txtDS_SUBCON00.move("506","92","41","20",null,null);

                p.sta07.set_taborder("38");
                p.sta07.set_text("지체보상금");
                p.sta07.set_cssclass("sta_WF_tablelabel");
                p.sta07.move("0","116","112","30",null,null);

                p.sta08.set_taborder("39");
                p.sta08.set_cssclass("sta_WF_tablebg");
                p.sta08.set_text("매 지체 일수마다 계약금액의              /1000 현금 또는 기성공제");
                p.sta08.move("109","116","840","30",null,null);

                p.txtDS_SUBCON01.set_taborder("40");
                p.txtDS_SUBCON01.set_value("");
                p.txtDS_SUBCON01.move("282","121","41","20",null,null);

                p.sta08_00.set_taborder("41");
                p.sta08_00.set_cssclass("sta_WF_tablebg");
                p.sta08_00.move("109","145","840","30",null,null);

                p.sta05.set_taborder("42");
                p.sta05.set_text("근로자퇴직공제부금?");
                p.sta05.set_tooltiptext("(1안_부가가치세를 포함한 하도급공사 계약금액이 10억원 미만인 경우) 근로자퇴직공제부금은 \"원사업자\"가 부담하여 일괄 납부한다.\r\n(2안_부가가치세를 포함한 하도급공사 계약금액이 10억원 이상인 경우) 관련법에 의거 하수급인 사업주 승인 신청을 하고, 관할 공제회로부터 사업주 승인여부를 통보 받는 즉시 \"건설근로자 퇴직공제가입자증서\" 사본 1부를 제출 원사업자에게 제출하여야 한다.\r\n");
                p.sta05.set_cssclass("sta_WF_tablelabelE");
                p.sta05.move("600","145","136","30",null,null);

                p.cboTY_RETIRE_BUGEUM.set_taborder("43");
                p.cboTY_RETIRE_BUGEUM.set_innerdataset("dsTY_RETIRE_BUGEUM");
                p.cboTY_RETIRE_BUGEUM.set_codecolumn("CD_CODE");
                p.cboTY_RETIRE_BUGEUM.set_datacolumn("DS_CODE");
                p.cboTY_RETIRE_BUGEUM.move("741","150","79","20",null,null);

                p.sta07_00.set_taborder("44");
                p.sta07_00.set_text("선급금유무");
                p.sta07_00.set_cssclass("sta_WF_tablelabel");
                p.sta07_00.move("0","145","110","30",null,null);

                p.txtDS_PREPAY1.set_taborder("45");
                p.txtDS_PREPAY1.set_value("");
                p.txtDS_PREPAY1.move("115","150","166","20",null,null);

                p.sta07_00_00.set_taborder("46");
                p.sta07_00_00.set_text("선급금대상");
                p.sta07_00_00.set_cssclass("sta_WF_tablelabel");
                p.sta07_00_00.move("289","145","132","30",null,null);

                p.rdoYN_PAYGUARANTEE.set_taborder("47");
                p.rdoYN_PAYGUARANTEE.set_innerdataset("dsYN_PIL");
                p.rdoYN_PAYGUARANTEE.set_direction("vertical");
                p.rdoYN_PAYGUARANTEE.set_fittocontents("width");
                p.rdoYN_PAYGUARANTEE.set_codecolumn("CODE");
                p.rdoYN_PAYGUARANTEE.set_datacolumn("VALUE");
                p.rdoYN_PAYGUARANTEE.move("426","151","129","20",null,null);

                p.sta07_00_01.set_taborder("48");
                p.sta07_00_01.set_text("특기사항");
                p.sta07_00_01.set_cssclass("sta_WF_tablelabel");
                p.sta07_00_01.move("0","174","110","60",null,null);

                p.sta08_00_00.set_taborder("49");
                p.sta08_00_00.set_cssclass("sta_WF_tablebg");
                p.sta08_00_00.move("109","174","840","60",null,null);

                p.txt00.set_taborder("50");
                p.txt00.move("115","179","827","50",null,null);

                p.sta405_00.set_taborder("51");
                p.sta405_00.set_text("대금지급조건");
                p.sta405_00.set_cssclass("sta_WF_tablelabel");
                p.sta405_00.set_textDecoration("none");
                p.sta405_00.set_usedecorate("false");
                p.sta405_00.move("600","116","120","30",null,null);

                p.txtDS_PAY.set_taborder("52");
                p.txtDS_PAY.set_value("");
                p.txtDS_PAY.move("723","121","219","20",null,null);
                // this.divData.form.divData01 }}


                // {{ this.divData.form.divData02
                p = rootobj.divData.form.divData02.form;

                p.sta2001.set_taborder("1");
                p.sta2001.set_text("현장요청일");
                p.sta2001.set_cssclass("sta_WF_tablelabel");
                p.sta2001.set_textAlign("center");
                p.sta2001.move("0","0","136","30",null,null);

                p.sta2002.set_taborder("1");
                p.sta2002.set_text("본사접수일");
                p.sta2002.set_cssclass("sta_WF_tablelabel");
                p.sta2002.set_textAlign("center");
                p.sta2002.move("sta2001:-1","0","136","30",null,null);

                p.sta2003.set_taborder("1");
                p.sta2003.set_text("승인일자");
                p.sta2003.set_cssclass("sta_WF_tablelabel");
                p.sta2003.set_textAlign("center");
                p.sta2003.move("sta2002:-1","0","136","30",null,null);

                p.sta2004.set_taborder("1");
                p.sta2004.set_text("도급금액");
                p.sta2004.set_cssclass("sta_WF_tablelabel");
                p.sta2004.set_textAlign("center");
                p.sta2004.move("sta2003:-1","0","136","30",null,null);

                p.sta2005.set_taborder("1");
                p.sta2005.set_text("실행금액");
                p.sta2005.set_cssclass("sta_WF_tablelabel");
                p.sta2005.set_textAlign("center");
                p.sta2005.move("sta2004:-1","0","136","30",null,null);

                p.sta2006.set_taborder("1");
                p.sta2006.set_text("실시(안)금액");
                p.sta2006.set_cssclass("sta_WF_tablelabel");
                p.sta2006.set_textAlign("center");
                p.sta2006.move("sta2005:-1","0","136","30",null,null);

                p.sta2007.set_taborder("1");
                p.sta2007.set_text("계약금액");
                p.sta2007.set_cssclass("sta_WF_tablelabel");
                p.sta2007.set_textAlign("center");
                p.sta2007.move("sta2006:-1","0","139","30",null,null);

                p.sta2008.set_taborder("1");
                p.sta2008.set_text("평단가");
                p.sta2008.set_cssclass("sta_WF_tablelabel");
                p.sta2008.set_textAlign("center");
                p.sta2008.set_visible("false");
                p.sta2008.move("sta2007:-1","0","123","30",null,null);

                p.sta2101.set_taborder("1");
                p.sta2101.set_cssclass("sta_WF_tablebg");
                p.sta2101.move("0","sta2001:-1","136","30",null,null);

                p.sta2102.set_taborder("1");
                p.sta2102.set_cssclass("sta_WF_tablebg");
                p.sta2102.move("sta2101:-1","sta2002:-1","136","30",null,null);

                p.sta2103.set_taborder("1");
                p.sta2103.set_cssclass("sta_WF_tablebg");
                p.sta2103.move("sta2102:-1","sta2003:-1","136","30",null,null);

                p.sta2104.set_taborder("1");
                p.sta2104.set_cssclass("sta_WF_tablebg");
                p.sta2104.move("sta2103:-1","sta2004:-1","136","30",null,null);

                p.sta2105.set_taborder("1");
                p.sta2105.set_cssclass("sta_WF_tablebg");
                p.sta2105.move("sta2104:-1","sta2005:-1","136","30",null,null);

                p.sta2106.set_taborder("1");
                p.sta2106.set_cssclass("sta_WF_tablebg");
                p.sta2106.move("sta2105:-1","sta2006:-1","136","30",null,null);

                p.sta2107.set_taborder("1");
                p.sta2107.set_cssclass("sta_WF_tablebg");
                p.sta2107.move("sta2106:-1","sta2007:-1","139","30",null,null);

                p.sta2108.set_taborder("1");
                p.sta2108.set_cssclass("sta_WF_tablebg");
                p.sta2108.set_visible("false");
                p.sta2108.move("sta2107:-1","sta2008:-1","123","30",null,null);

                p.tclDT_REQ_SITE.set_taborder("2");
                p.tclDT_REQ_SITE.set_dateformat("yyyy-MM-dd");
                p.tclDT_REQ_SITE.set_editformat("yyyyMMdd");
                p.tclDT_REQ_SITE.set_autoselect("true");
                p.tclDT_REQ_SITE.set_value("");
                p.tclDT_REQ_SITE.set_readonly("true");
                p.tclDT_REQ_SITE.move("13","34","110","20",null,null);

                p.tclDT_HQRECEIPT.set_taborder("2");
                p.tclDT_HQRECEIPT.set_dateformat("yyyy-MM-dd");
                p.tclDT_HQRECEIPT.set_editformat("yyyyMMdd");
                p.tclDT_HQRECEIPT.set_autoselect("true");
                p.tclDT_HQRECEIPT.set_value("");
                p.tclDT_HQRECEIPT.set_readonly("true");
                p.tclDT_HQRECEIPT.move("sta2101:13","34","110","20",null,null);

                p.tclDT_HQAPPR.set_taborder("2");
                p.tclDT_HQAPPR.set_dateformat("yyyy-MM-dd");
                p.tclDT_HQAPPR.set_editformat("yyyyMMdd");
                p.tclDT_HQAPPR.set_autoselect("true");
                p.tclDT_HQAPPR.set_value("");
                p.tclDT_HQAPPR.set_readonly("true");
                p.tclDT_HQAPPR.move("sta2102:13","34","110","20",null,null);

                p.txtAM_TT_DOKUB.set_taborder("2");
                p.txtAM_TT_DOKUB.set_value("");
                p.txtAM_TT_DOKUB.set_readonly("true");
                p.txtAM_TT_DOKUB.set_format("9,990");
                p.txtAM_TT_DOKUB.move("sta2103:4","34","126","20",null,null);

                p.txtAM_TT_SILHENG.set_taborder("2");
                p.txtAM_TT_SILHENG.set_value("");
                p.txtAM_TT_SILHENG.set_readonly("true");
                p.txtAM_TT_SILHENG.set_format("9,990");
                p.txtAM_TT_SILHENG.move("sta2104:4","34","126","20",null,null);

                p.txtAM_REQUEST.set_taborder("2");
                p.txtAM_REQUEST.set_value("");
                p.txtAM_REQUEST.set_readonly("true");
                p.txtAM_REQUEST.set_format("9,990");
                p.txtAM_REQUEST.move("sta2105:4","34","126","20",null,null);

                p.txtAM_GONGSA.set_taborder("2");
                p.txtAM_GONGSA.set_value("");
                p.txtAM_GONGSA.set_readonly("true");
                p.txtAM_GONGSA.set_format("9,990");
                p.txtAM_GONGSA.move("sta2106:4","34","129","20",null,null);

                p.txtUP_PYEONG.set_taborder("2");
                p.txtUP_PYEONG.set_value("");
                p.txtUP_PYEONG.set_readonly("true");
                p.txtUP_PYEONG.set_format("9,990");
                p.txtUP_PYEONG.set_visible("false");
                p.txtUP_PYEONG.move("sta2107:4","34","109","20",null,null);
                // this.divData.form.divData02 }}


                // {{ this.divData.form.tabData.tab1.form.div00
                p = rootobj.divData.form.tabData.tab1.form.div00.form;

                p.sta01.set_taborder("0");
                p.sta01.set_text("현장설명회");
                p.sta01.set_cssclass("sta_TITLE_Bg");
                p.sta01.move("0","0",null,"22","0",null);

                p.sta001.set_taborder("1");
                p.sta001.set_text("현장실시여부");
                p.sta001.set_visible("false");
                p.sta001.set_cssclass("sta_WF_tablelabelE");
                p.sta001.move("0","30","110","30",null,null);

                p.sta101.set_taborder("2");
                p.sta101.set_cssclass("sta_WF_tablebg");
                p.sta101.set_visible("false");
                p.sta101.move("109","30","283","30",null,null);

                p.sta00.set_taborder("3");
                p.sta00.set_text("현설진행여부");
                p.sta00.set_cssclass("sta_WF_tablelabelE");
                p.sta00.move("0","30","110","30",null,null);

                p.sta02.set_taborder("4");
                p.sta02.set_cssclass("sta_WF_tablebg");
                p.sta02.move("sta00:-1","30","283","30",null,null);

                p.sta06.set_taborder("5");
                p.sta06.set_text("현설장소");
                p.sta06.set_cssclass("sta_WF_tablelabel");
                p.sta06.move("sta02:-1","30","110","30",null,null);

                p.sta05.set_taborder("6");
                p.sta05.set_cssclass("sta_WF_tablebg");
                p.sta05.move("sta06:-1","30","310","30",null,null);

                p.cboYN_EXPLAIN.set_taborder("9");
                p.cboYN_EXPLAIN.set_innerdataset("dsYN_EXPLAIN");
                p.cboYN_EXPLAIN.set_codecolumn("CODE");
                p.cboYN_EXPLAIN.set_datacolumn("DATA");
                p.cboYN_EXPLAIN.set_visible("false");
                p.cboYN_EXPLAIN.move("sta001:5","35","165","20",null,null);

                p.cboONOFF_EXPLAIN.set_taborder("7");
                p.cboONOFF_EXPLAIN.set_innerdataset("dsONOFF_EXPLAIN");
                p.cboONOFF_EXPLAIN.set_codecolumn("CD_CODE");
                p.cboONOFF_EXPLAIN.set_datacolumn("DS_CODE");
                p.cboONOFF_EXPLAIN.move("sta00:5","35","165","20",null,null);

                p.txtAT_SITEEXPLAIN.set_taborder("8");
                p.txtAT_SITEEXPLAIN.set_value("");
                p.txtAT_SITEEXPLAIN.move("sta06:5","35","295","20",null,null);
                // this.divData.form.tabData.tab1.form.div00 }}


                // {{ this.divData.form.tabData.tab1.form.div01
                p = rootobj.divData.form.tabData.tab1.form.div01.form;

                p.sta0111.set_taborder("0");
                p.sta0111.set_text("현장담당");
                p.sta0111.set_cssclass("sta_TITLE_Bg");
                p.sta0111.move("0","0",null,"22","0",null);

                p.sta00.set_taborder("1");
                p.sta00.set_text("현장담당자");
                p.sta00.set_cssclass("sta_WF_tablelabelE");
                p.sta00.move("0","29","110","30",null,null);

                p.sta03.set_taborder("2");
                p.sta03.set_text("기타사항");
                p.sta03.set_cssclass("sta_WF_tablelabel");
                p.sta03.move("0","58","110","30",null,null);

                p.sta02.set_taborder("3");
                p.sta02.set_cssclass("sta_WF_tablebg");
                p.sta02.move("109","29","283","30",null,null);

                p.sta04.set_taborder("4");
                p.sta04.set_cssclass("sta_WF_tablebg");
                p.sta04.move("109","58","590","30",null,null);

                p.sta07.set_taborder("5");
                p.sta07.set_text("전화번호");
                p.sta07.set_cssclass("sta_WF_tablelabel");
                p.sta07.move("sta02:-1",null,"110","30",null,"59");

                p.sta08.set_taborder("6");
                p.sta08.set_cssclass("sta_WF_tablebg");
                p.sta08.move("sta07:-1",null,"199","30",null,"59");

                p.txtRM_BIDREMARK.set_taborder("9");
                p.txtRM_BIDREMARK.set_value("");
                p.txtRM_BIDREMARK.move("sta03:5","sta02:4","579","20",null,null);

                p.ccfID_SITESABUN.getSetter("CodeFindName").set("DZX_CFUSER");
                p.ccfID_SITESABUN.getSetter("CDTextWidth").set("70");
                p.ccfID_SITESABUN.set_taborder("7");
                p.ccfID_SITESABUN.set_url("cmm::cmmCodeFind.xfdl");
                p.ccfID_SITESABUN.move("sta00:5",null,"272","20",null,"64");

                p.txtNO_SITETEL.set_taborder("8");
                p.txtNO_SITETEL.set_value("");
                p.txtNO_SITETEL.move("sta07:5",null,"188","20",null,"64");
                // this.divData.form.tabData.tab1.form.div01 }}


                // {{ this.divData.form.tabData.tab1
                p = rootobj.divData.form.tabData.tab1.form;

                p.div00.set_taborder("1");
                p.div00.set_formscrolltype("none");
                p.div00.move("10","5",null,"70","10",null);

                p.div01.set_taborder("1");
                p.div01.set_text("div00");
                p.div01.set_formscrolltype("none");
                p.div01.move("10","div00:0",null,"118","10",null);
                // this.divData.form.tabData.tab1 }}


                // {{ this.divData.form.tabData.tab2
                p = rootobj.divData.form.tabData.tab2.form;

                p.objGrid.set_taborder("1");
                p.objGrid.move("0","0",null,null,"0","0");
                // this.divData.form.tabData.tab2 }}


                // {{ this.divData.form.tabData.tab3.form.div00
                p = rootobj.divData.form.tabData.tab3.form.div00.form;

                p.sta01.set_taborder("1");
                p.sta01.set_text("현장설명회");
                p.sta01.set_cssclass("sta_TITLE_Bg");
                p.sta01.move("0","0",null,"22","0",null);

                p.sta001.set_taborder("1");
                p.sta001.set_text("현장실시여부");
                p.sta001.set_cssclass("sta_WF_tablelabel");
                p.sta001.set_visible("false");
                p.sta001.move("0","30","110","30",null,null);

                p.sta101.set_taborder("1");
                p.sta101.set_cssclass("sta_WF_tablebg");
                p.sta101.set_visible("false");
                p.sta101.move("109","30","283","30",null,null);

                p.sta00.set_taborder("1");
                p.sta00.set_text("현설진행여부");
                p.sta00.set_cssclass("sta_WF_tablelabel");
                p.sta00.move("0","30","110","30",null,null);

                p.sta02.set_taborder("1");
                p.sta02.set_cssclass("sta_WF_tablebg");
                p.sta02.move("sta00:-1","30","283","30",null,null);

                p.sta03.set_taborder("1");
                p.sta03.set_text("현설일시");
                p.sta03.set_cssclass("sta_WF_tablelabel");
                p.sta03.move("0","sta00:-1","110","30",null,null);

                p.sta04.set_taborder("1");
                p.sta04.set_cssclass("sta_WF_tablebg");
                p.sta04.move("sta03:-1","sta02:-1","283","30",null,null);

                p.sta06.set_taborder("1");
                p.sta06.set_text("현설장소");
                p.sta06.set_cssclass("sta_WF_tablelabel");
                p.sta06.move("sta02:-1","30","110","30",null,null);

                p.sta07.set_taborder("1");
                p.sta07.set_text("현설공고일");
                p.sta07.set_cssclass("sta_WF_tablelabel");
                p.sta07.move("sta04:-1","sta06:-1","110","30",null,null);

                p.sta05.set_taborder("1");
                p.sta05.set_cssclass("sta_WF_tablebg");
                p.sta05.move("sta06:-1","30","310","30",null,null);

                p.sta08.set_taborder("1");
                p.sta08.set_cssclass("sta_WF_tablebg");
                p.sta08.move("sta07:-1","sta05:-1","310","30",null,null);

                p.cboYN_EXPLAIN.set_taborder("2");
                p.cboYN_EXPLAIN.set_innerdataset("dsYN_EXPLAIN");
                p.cboYN_EXPLAIN.set_codecolumn("CODE");
                p.cboYN_EXPLAIN.set_datacolumn("DATA");
                p.cboYN_EXPLAIN.set_visible("false");
                p.cboYN_EXPLAIN.set_readonly("true");
                p.cboYN_EXPLAIN.move("sta001:5","35","165","20",null,null);

                p.cboONOFF_EXPLAIN.set_taborder("2");
                p.cboONOFF_EXPLAIN.set_innerdataset("dsONOFF_EXPLAIN");
                p.cboONOFF_EXPLAIN.set_codecolumn("CD_CODE");
                p.cboONOFF_EXPLAIN.set_datacolumn("DS_CODE");
                p.cboONOFF_EXPLAIN.set_readonly("true");
                p.cboONOFF_EXPLAIN.move("sta00:5","35","165","20",null,null);

                p.txtAT_SITEEXPLAIN.set_taborder("2");
                p.txtAT_SITEEXPLAIN.set_value("");
                p.txtAT_SITEEXPLAIN.set_readonly("true");
                p.txtAT_SITEEXPLAIN.move("sta06:5","35","295","20",null,null);

                p.tclDT_EXPLAIN.set_taborder("2");
                p.tclDT_EXPLAIN.set_dateformat("yyyy-MM-dd");
                p.tclDT_EXPLAIN.set_editformat("yyyyMMdd");
                p.tclDT_EXPLAIN.set_autoselect("true");
                p.tclDT_EXPLAIN.set_value("");
                p.tclDT_EXPLAIN.set_readonly("true");
                p.tclDT_EXPLAIN.move("sta03:5","sta02:4","110","20",null,null);

                p.tclDT_EXPLAIN_GONGO.set_taborder("2");
                p.tclDT_EXPLAIN_GONGO.set_dateformat("yyyy-MM-dd");
                p.tclDT_EXPLAIN_GONGO.set_editformat("yyyyMMdd");
                p.tclDT_EXPLAIN_GONGO.set_autoselect("true");
                p.tclDT_EXPLAIN_GONGO.set_value("");
                p.tclDT_EXPLAIN_GONGO.set_readonly("true");
                p.tclDT_EXPLAIN_GONGO.move("sta07:5","sta05:4","110","20",null,null);

                p.ccboDT_EXPLAIN_HOUR.set_taborder("1");
                p.ccboDT_EXPLAIN_HOUR.set_innerdataset("dsHOUR");
                p.ccboDT_EXPLAIN_HOUR.set_codecolumn("CD_CODE");
                p.ccboDT_EXPLAIN_HOUR.set_datacolumn("DS_CODE");
                p.ccboDT_EXPLAIN_HOUR.set_readonly("true");
                p.ccboDT_EXPLAIN_HOUR.set_text("00");
                p.ccboDT_EXPLAIN_HOUR.set_value("00");
                p.ccboDT_EXPLAIN_HOUR.set_index("0");
                p.ccboDT_EXPLAIN_HOUR.move("tclDT_EXPLAIN:5","sta02:4","45","20",null,null);

                p.staDT_EXPLAIN_HOUR.set_taborder("1");
                p.staDT_EXPLAIN_HOUR.set_text("시");
                p.staDT_EXPLAIN_HOUR.getSetter("readonly").set("true");
                p.staDT_EXPLAIN_HOUR.move("ccboDT_EXPLAIN_HOUR:3","sta02:4","20","20",null,null);

                p.ccboDT_EXPLAIN_MINUTE.set_taborder("1");
                p.ccboDT_EXPLAIN_MINUTE.set_innerdataset("dsMINUTE");
                p.ccboDT_EXPLAIN_MINUTE.set_codecolumn("CD_CODE");
                p.ccboDT_EXPLAIN_MINUTE.set_datacolumn("DS_CODE");
                p.ccboDT_EXPLAIN_MINUTE.set_readonly("true");
                p.ccboDT_EXPLAIN_MINUTE.set_text("00");
                p.ccboDT_EXPLAIN_MINUTE.set_value("00");
                p.ccboDT_EXPLAIN_MINUTE.set_index("0");
                p.ccboDT_EXPLAIN_MINUTE.move("staDT_EXPLAIN_HOUR:5","sta02:4","45","20",null,null);

                p.staDT_EXPLAIN_MINUTE.set_taborder("1");
                p.staDT_EXPLAIN_MINUTE.set_text("분");
                p.staDT_EXPLAIN_MINUTE.getSetter("readonly").set("true");
                p.staDT_EXPLAIN_MINUTE.move("ccboDT_EXPLAIN_MINUTE:3","sta02:4","20","20",null,null);
                // this.divData.form.tabData.tab3.form.div00 }}


                // {{ this.divData.form.tabData.tab3.form.div01
                p = rootobj.divData.form.tabData.tab3.form.div01.form;

                p.sta0111.set_taborder("0");
                p.sta0111.set_text("현장담당");
                p.sta0111.set_cssclass("sta_TITLE_Bg");
                p.sta0111.move("0","0",null,"22","0",null);

                p.sta00.set_taborder("1");
                p.sta00.set_text("현장담당자");
                p.sta00.set_cssclass("sta_WF_tablelabel");
                p.sta00.move("0","29","110","30",null,null);

                p.sta03.set_taborder("2");
                p.sta03.set_text("기타사항");
                p.sta03.set_cssclass("sta_WF_tablelabel");
                p.sta03.move("0","58","110","30",null,null);

                p.sta02.set_taborder("3");
                p.sta02.set_cssclass("sta_WF_tablebg");
                p.sta02.move("109","29","283","30",null,null);

                p.sta04.set_taborder("4");
                p.sta04.set_cssclass("sta_WF_tablebg");
                p.sta04.move("109","58","590","30",null,null);

                p.sta07.set_taborder("5");
                p.sta07.set_text("전화번호");
                p.sta07.set_cssclass("sta_WF_tablelabel");
                p.sta07.move("sta02:-1",null,"110","30",null,"59");

                p.sta08.set_taborder("6");
                p.sta08.set_cssclass("sta_WF_tablebg");
                p.sta08.getSetter("readonly").set("true");
                p.sta08.move("sta07:-1",null,"199","30",null,"59");

                p.txtRM_BIDREMARK.set_taborder("9");
                p.txtRM_BIDREMARK.set_value("");
                p.txtRM_BIDREMARK.set_readonly("true");
                p.txtRM_BIDREMARK.move("sta03:5","sta02:4","579","20",null,null);

                p.ccfID_SITESABUN_01.getSetter("CodeFindName").set("DZX_CFUSER");
                p.ccfID_SITESABUN_01.getSetter("CDTextWidth").set("70");
                p.ccfID_SITESABUN_01.set_taborder("7");
                p.ccfID_SITESABUN_01.set_url("cmm::cmmCodeFind.xfdl");
                p.ccfID_SITESABUN_01.getSetter("readonly").set("true");
                p.ccfID_SITESABUN_01.move("sta00:5",null,"272","20",null,"64");

                p.txtNO_SITETEL.set_taborder("8");
                p.txtNO_SITETEL.set_value("");
                p.txtNO_SITETEL.set_readonly("true");
                p.txtNO_SITETEL.move("sta07:5",null,"188","20",null,"64");
                // this.divData.form.tabData.tab3.form.div01 }}


                // {{ this.divData.form.tabData.tab3.form.div02
                p = rootobj.divData.form.tabData.tab3.form.div02.form;

                p.sta0111.set_taborder("0");
                p.sta0111.set_text("입찰견적");
                p.sta0111.set_cssclass("sta_TITLE_Bg");
                p.sta0111.move("0","0",null,"22","0",null);

                p.sta001.set_taborder("1");
                p.sta001.set_text("입찰공고일");
                p.sta001.set_cssclass("sta_WF_tablelabel");
                p.sta001.move("0","30","110","30",null,null);

                p.sta00.set_taborder("2");
                p.sta00.set_text("입찰일시");
                p.sta00.set_cssclass("sta_WF_tablelabel");
                p.sta00.move("0","59","110","30",null,null);

                p.sta101.set_taborder("3");
                p.sta101.set_cssclass("sta_WF_tablebg");
                p.sta101.move("109","30","283","30",null,null);

                p.sta02.set_taborder("4");
                p.sta02.set_cssclass("sta_WF_tablebg");
                p.sta02.move("109","59","283","30",null,null);

                p.sta06.set_taborder("5");
                p.sta06.set_text("낙찰방식");
                p.sta06.set_cssclass("sta_WF_tablelabel");
                p.sta06.move("sta101:-1","30","110","30",null,null);

                p.sta07.set_taborder("6");
                p.sta07.set_text("입찰방식");
                p.sta07.set_cssclass("sta_WF_tablelabel");
                p.sta07.move("sta02:-1","sta06:-1","110","30",null,null);

                p.sta05.set_taborder("7");
                p.sta05.set_cssclass("sta_WF_tablebg");
                p.sta05.move("sta06:-1","30","160","30",null,null);

                p.sta08.set_taborder("8");
                p.sta08.set_cssclass("sta_WF_tablebg");
                p.sta08.move("sta07:-1","sta05:-1","160","30",null,null);

                p.sta01.set_taborder("9");
                p.sta01.set_text("입찰코디네이터");
                p.sta01.set_cssclass("sta_WF_tablelabel");
                p.sta01.move("0","98","110","30",null,null);

                p.sta03.set_taborder("10");
                p.sta03.set_text("입찰담당1");
                p.sta03.set_cssclass("sta_WF_tablelabel");
                p.sta03.move("0","127","110","30",null,null);

                p.sta04.set_taborder("11");
                p.sta04.set_cssclass("sta_WF_tablebg");
                p.sta04.move("109","98","283","30",null,null);

                p.sta09.set_taborder("12");
                p.sta09.set_cssclass("sta_WF_tablebg");
                p.sta09.move("109","127","283","30",null,null);

                p.sta10.set_taborder("13");
                p.sta10.set_text("전화번호");
                p.sta10.set_cssclass("sta_WF_tablelabel");
                p.sta10.move("sta04:-1","98","110","30",null,null);

                p.sta11.set_taborder("14");
                p.sta11.set_text("전화번호");
                p.sta11.set_cssclass("sta_WF_tablelabel");
                p.sta11.move("sta09:-1","127","110","30",null,null);

                p.sta12.set_taborder("15");
                p.sta12.set_cssclass("sta_WF_tablebg");
                p.sta12.move("sta10:-1","98","160","30",null,null);

                p.sta13.set_taborder("16");
                p.sta13.set_cssclass("sta_WF_tablebg");
                p.sta13.move("sta11:-1","127","160","30",null,null);

                p.sta14.set_taborder("17");
                p.sta14.set_text("입찰담당2");
                p.sta14.set_cssclass("sta_WF_tablelabel");
                p.sta14.move("0","156","110","30",null,null);

                p.sta15.set_taborder("18");
                p.sta15.set_cssclass("sta_WF_tablebg");
                p.sta15.move("109","156","283","30",null,null);

                p.sta16.set_taborder("19");
                p.sta16.set_text("전화번호");
                p.sta16.set_cssclass("sta_WF_tablelabel");
                p.sta16.move("sta15:-1","156","110","30",null,null);

                p.sta17.set_taborder("20");
                p.sta17.set_cssclass("sta_WF_tablebg");
                p.sta17.move("sta16:-1","156","160","30",null,null);

                p.sta18.set_taborder("21");
                p.sta18.set_text("문의담당");
                p.sta18.set_cssclass("sta_WF_tablelabel");
                p.sta18.move("0","185","110","30",null,null);

                p.sta19.set_taborder("22");
                p.sta19.set_cssclass("sta_WF_tablebg");
                p.sta19.move("109","185","283","30",null,null);

                p.sta20.set_taborder("23");
                p.sta20.set_text("전화번호");
                p.sta20.set_cssclass("sta_WF_tablelabel");
                p.sta20.move("sta19:-1","185","110","30",null,null);

                p.sta21.set_taborder("24");
                p.sta21.set_cssclass("sta_WF_tablebg");
                p.sta21.move("sta20:-1","185","160","30",null,null);

                p.sta22.set_taborder("25");
                p.sta22.set_text("이메일");
                p.sta22.set_cssclass("sta_WF_tablelabel");
                p.sta22.move("sta12:-1","98","71","30",null,null);

                p.sta23.set_taborder("26");
                p.sta23.set_cssclass("sta_WF_tablebg");
                p.sta23.move("sta22:-1","98","195","30",null,null);

                p.sta24.set_taborder("27");
                p.sta24.set_text("이메일");
                p.sta24.set_cssclass("sta_WF_tablelabel");
                p.sta24.move("sta13:-1","127","71","30",null,null);

                p.sta25.set_taborder("28");
                p.sta25.set_cssclass("sta_WF_tablebg");
                p.sta25.move("sta24:-1","127","195","30",null,null);

                p.sta26.set_taborder("29");
                p.sta26.set_text("이메일");
                p.sta26.set_cssclass("sta_WF_tablelabel");
                p.sta26.move("sta17:-1","156","71","30",null,null);

                p.sta27.set_taborder("30");
                p.sta27.set_cssclass("sta_WF_tablebg");
                p.sta27.move("sta26:-1","156","195","30",null,null);

                p.sta28.set_taborder("31");
                p.sta28.set_text("이메일");
                p.sta28.set_cssclass("sta_WF_tablelabel");
                p.sta28.move("sta21:-1","185","71","30",null,null);

                p.sta29.set_taborder("32");
                p.sta29.set_cssclass("sta_WF_tablebg");
                p.sta29.move("sta28:-1","185","195","30",null,null);

                p.txtDS_BID_SUCCESS.set_taborder("47");
                p.txtDS_BID_SUCCESS.set_readonly("true");
                p.txtDS_BID_SUCCESS.move("sta06:5","35","144","20",null,null);

                p.ccfID_BIDCOORD.getSetter("CodeFindName").set("DZX_CFUSER");
                p.ccfID_BIDCOORD.getSetter("CDTextWidth").set("70");
                p.ccfID_BIDCOORD.set_taborder("34");
                p.ccfID_BIDCOORD.set_url("cmm::cmmCodeFind.xfdl");
                p.ccfID_BIDCOORD.getSetter("readonly").set("true");
                p.ccfID_BIDCOORD.move("sta01:5","103","174","20",null,null);

                p.txtNO_BIDCOORDITEL.set_taborder("46");
                p.txtNO_BIDCOORDITEL.set_readonly("true");
                p.txtNO_BIDCOORDITEL.move("sta10:5","103","144","20",null,null);

                p.txtNO_BIDDAM1TEL.set_taborder("45");
                p.txtNO_BIDDAM1TEL.set_readonly("true");
                p.txtNO_BIDDAM1TEL.move("sta11:5","132","144","20",null,null);

                p.txtNO_BIDDAM2TEL.set_taborder("37");
                p.txtNO_BIDDAM2TEL.set_readonly("true");
                p.txtNO_BIDDAM2TEL.move("sta16:5","161","144","20",null,null);

                p.txtNO_QUESTIONTEL.set_taborder("38");
                p.txtNO_QUESTIONTEL.set_readonly("true");
                p.txtNO_QUESTIONTEL.move("sta20:5","190","144","20",null,null);

                p.txtEM_BIDCOORDI.set_taborder("39");
                p.txtEM_BIDCOORDI.set_readonly("true");
                p.txtEM_BIDCOORDI.move("sta22:5","103","184","20",null,null);

                p.txtEM_BIDDAM1.set_taborder("40");
                p.txtEM_BIDDAM1.set_readonly("true");
                p.txtEM_BIDDAM1.move("sta24:5","132","184","20",null,null);

                p.txtEM_BIDDAM2.set_taborder("41");
                p.txtEM_BIDDAM2.set_readonly("true");
                p.txtEM_BIDDAM2.move("sta26:5","161","184","20",null,null);

                p.txtEM_QUESTION.set_taborder("42");
                p.txtEM_QUESTION.set_readonly("true");
                p.txtEM_QUESTION.move("sta28:5","191","184","20",null,null);

                p.tclDT_BID_GONGO.set_taborder("43");
                p.tclDT_BID_GONGO.set_dateformat("yyyy-MM-dd");
                p.tclDT_BID_GONGO.set_editformat("yyyyMMdd");
                p.tclDT_BID_GONGO.set_autoselect("true");
                p.tclDT_BID_GONGO.set_value("");
                p.tclDT_BID_GONGO.set_readonly("true");
                p.tclDT_BID_GONGO.move("115","35","110","20",null,null);

                p.tclDT_BIDMAGAM.set_taborder("44");
                p.tclDT_BIDMAGAM.set_dateformat("yyyy-MM-dd");
                p.tclDT_BIDMAGAM.set_editformat("yyyyMMdd");
                p.tclDT_BIDMAGAM.set_autoselect("true");
                p.tclDT_BIDMAGAM.set_value("");
                p.tclDT_BIDMAGAM.set_readonly("true");
                p.tclDT_BIDMAGAM.move("115","64","110","20",null,null);

                p.ccfID_BIDDAM1.getSetter("CodeFindName").set("DZX_CFUSER");
                p.ccfID_BIDDAM1.getSetter("CDTextWidth").set("70");
                p.ccfID_BIDDAM1.set_taborder("36");
                p.ccfID_BIDDAM1.set_url("cmm::cmmCodeFind.xfdl");
                p.ccfID_BIDDAM1.getSetter("readonly").set("true");
                p.ccfID_BIDDAM1.move("115","132","174","20",null,null);

                p.ccfID_BIDDAM2.getSetter("CodeFindName").set("DZX_CFUSER");
                p.ccfID_BIDDAM2.getSetter("CDTextWidth").set("70");
                p.ccfID_BIDDAM2.set_taborder("35");
                p.ccfID_BIDDAM2.set_url("cmm::cmmCodeFind.xfdl");
                p.ccfID_BIDDAM2.getSetter("readonly").set("true");
                p.ccfID_BIDDAM2.move("115","161","174","20",null,null);

                p.ccfID_QUESTION.getSetter("CodeFindName").set("DZX_CFUSER");
                p.ccfID_QUESTION.getSetter("CDTextWidth").set("70");
                p.ccfID_QUESTION.set_taborder("33");
                p.ccfID_QUESTION.set_url("cmm::cmmCodeFind.xfdl");
                p.ccfID_QUESTION.getSetter("readonly").set("true");
                p.ccfID_QUESTION.move("115","190","174","20",null,null);

                p.cboONOFF_EXPLAIN.set_taborder("48");
                p.cboONOFF_EXPLAIN.set_innerdataset("dsONOFF");
                p.cboONOFF_EXPLAIN.set_codecolumn("CD_CODE");
                p.cboONOFF_EXPLAIN.set_datacolumn("DS_CODE");
                p.cboONOFF_EXPLAIN.set_readonly("true");
                p.cboONOFF_EXPLAIN.move("sta07:5","64","144","20",null,null);

                p.ccboDT_BIDMAGAM_HOUR.set_taborder("1");
                p.ccboDT_BIDMAGAM_HOUR.set_innerdataset("dsHOUR");
                p.ccboDT_BIDMAGAM_HOUR.set_codecolumn("CD_CODE");
                p.ccboDT_BIDMAGAM_HOUR.set_datacolumn("DS_CODE");
                p.ccboDT_BIDMAGAM_HOUR.set_readonly("true");
                p.ccboDT_BIDMAGAM_HOUR.set_text("00");
                p.ccboDT_BIDMAGAM_HOUR.set_value("00");
                p.ccboDT_BIDMAGAM_HOUR.set_index("0");
                p.ccboDT_BIDMAGAM_HOUR.move("tclDT_BIDMAGAM:5","64","45","20",null,null);

                p.staDT_BIDMAGAM_HOUR.set_taborder("1");
                p.staDT_BIDMAGAM_HOUR.set_text("시");
                p.staDT_BIDMAGAM_HOUR.getSetter("readonly").set("true");
                p.staDT_BIDMAGAM_HOUR.move("ccboDT_BIDMAGAM_HOUR:3","64","20","20",null,null);

                p.ccboDT_BIDMAGAM_MINUTE.set_taborder("1");
                p.ccboDT_BIDMAGAM_MINUTE.set_innerdataset("dsMINUTE");
                p.ccboDT_BIDMAGAM_MINUTE.set_codecolumn("CD_CODE");
                p.ccboDT_BIDMAGAM_MINUTE.set_datacolumn("DS_CODE");
                p.ccboDT_BIDMAGAM_MINUTE.set_readonly("true");
                p.ccboDT_BIDMAGAM_MINUTE.set_text("00");
                p.ccboDT_BIDMAGAM_MINUTE.set_value("00");
                p.ccboDT_BIDMAGAM_MINUTE.set_index("0");
                p.ccboDT_BIDMAGAM_MINUTE.move("staDT_BIDMAGAM_HOUR:5","64","45","20",null,null);

                p.staDT_BIDMAGAM_MINUTE.set_taborder("1");
                p.staDT_BIDMAGAM_MINUTE.set_text("분");
                p.staDT_BIDMAGAM_MINUTE.getSetter("readonly").set("true");
                p.staDT_BIDMAGAM_MINUTE.move("ccboDT_BIDMAGAM_MINUTE:3","64","20","20",null,null);
                // this.divData.form.tabData.tab3.form.div02 }}


                // {{ this.divData.form.tabData.tab3
                p = rootobj.divData.form.tabData.tab3.form;

                p.div00.set_taborder("0");
                p.div00.set_text("div00");
                p.div00.move("10","5",null,"100","10",null);

                p.div01.set_taborder("1");
                p.div01.set_text("div00");
                p.div01.move("10","div00:5",null,"118","10",null);

                p.div02.set_taborder("2");
                p.div02.set_text("div00");
                p.div02.set_formscrolltype("none");
                p.div02.move("10","div01:-25",null,"217","10",null);
                // this.divData.form.tabData.tab3 }}


                // {{ this.divData
                p = rootobj.divData.form;

                p.sta01.set_taborder("3");
                p.sta01.set_text("선정 및 승인사항");
                p.sta01.set_cssclass("sta_TITLE_Bg");
                p.sta01.move("0","0","950","22",null,null);

                p.divData01.set_taborder("1");
                p.divData01.set_text("");
                p.divData01.move("0","sta01:10","950","273",null,null);

                p.divData02.set_taborder("2");
                p.divData02.move("0","divData01:-27","1100","59",null,null);

                p.tabData.set_taborder("0");
                p.tabData.set_tabindex("0");
                p.tabData.set_minheight("300");
                p.tabData.set_maxheight("");
                p.tabData.move("0","divData02:10","950",null,null,"0");

                p.tabData.tab1.set_text("현장설명회");

                p.tabData.tab2.set_text("현설참석목록");

                p.tabData.tab3.set_text("현설입찰일정");

                p.btn04.set_taborder("8");
                p.btn04.set_text("현설파일확정");
                p.btn04.set_fittocontents("width");
                p.btn04.set_padding("4px 7px 4px 7px");
                p.btn04.set_color("crimson");
                p.btn04.move("tabData:-100","divData02:5","60","23",null,null);

                p.btn01.set_taborder("6");
                p.btn01.set_text("현설질의응답");
                p.btn01.set_fittocontents("width");
                p.btn01.set_padding("4px 7px 4px 7px");
                p.btn01.set_color("crimson");
                p.btn01.move(null,"divData02:5","60","23","btn02:5",null);
                // this.divData }}
                p = rootobj;
                p.set_titletext("발주요청서(본사수정)");

                p.divSearch.set_taborder("1");
                p.divSearch.set_cssclass("div_SEARCH_Bg");
                p.divSearch.set_formscrolltype("none");
                p.divSearch.move("0.0","10.0",null,"46.0","0",null);

                p.divData.set_taborder("0");
                p.divData.set_cssclass("div_DATA_Bg");
                p.divData.set_text("");
                p.divData.move("0","divSearch:10",null,null,"0","0");
            	}
            );
            this.addLayout(obj.name, obj);

            //-- Normal Layout : this
            obj = new Layout("default0","",0,0,this,
            	//-- Layout function
            	function(p)
            	{
                var rootobj = p;


                // {{ this.divSearch
                p = rootobj.divSearch.form;

                p.staCD_SITE.set_taborder("1");
                p.staCD_SITE.set_text("현장코드");
                p.staCD_SITE.set_cssclass("sta_WF_SchLabelE");
                p.staCD_SITE.move("0.0","10.0","118.0","24.0",null,null);

                p.ccfCD_SITE.getSetter("CodeFindName").set("DZX_CFSITE");
                p.ccfCD_SITE.getSetter("AfterCDTextChanged").set("ccfCD_SITE_AfterCDTextChanged");
                p.ccfCD_SITE.getSetter("CDTextWidth").set("80");
                p.ccfCD_SITE.set_taborder("1");
                p.ccfCD_SITE.set_url("cmm::cmmCodeFind.xfdl");
                p.ccfCD_SITE.move("staCD_SITE:0.0","10.0","250","24.0",null,null);

                p.staNO_BID.set_taborder("1");
                p.staNO_BID.set_text("구매요청번호");
                p.staNO_BID.set_cssclass("sta_WF_SchLabelE");
                p.staNO_BID.move("ccfCD_SITE:0.0","10.0","118.0","24.0",null,null);

                p.ccfNO_BID.getSetter("CodeFindName").set("DWX_CFPR_01");
                p.ccfNO_BID.getSetter("CDTextWidth").set("100");
                p.ccfNO_BID.set_taborder("1");
                p.ccfNO_BID.set_url("cmm::cmmCodeFind.xfdl");
                p.ccfNO_BID.getSetter("FitToContents").set("true");
                p.ccfNO_BID.set_maxwidth("300");
                p.ccfNO_BID.move("staNO_BID:0.0","10.0","250","24.0",null,null);

                p.staDS_STATUS1.set_taborder("1");
                p.staDS_STATUS1.set_text("발주의뢰");
                p.staDS_STATUS1.set_cssclass("sta_WF_SchLabel");
                p.staDS_STATUS1.move("ccfNO_BID:0.0","10.0","118.0","24.0",null,null);

                p.ctxtDS_STATUS1.set_taborder("1");
                p.ctxtDS_STATUS1.getSetter("FitToContents").set("true");
                p.ctxtDS_STATUS1.set_value("");
                p.ctxtDS_STATUS1.set_readonly("true");
                p.ctxtDS_STATUS1.move("staDS_STATUS1:0.0","10.0","100","24.0",null,null);

                p.staDS_BIDSTATUS.set_taborder("1");
                p.staDS_BIDSTATUS.set_text("입찰진행");
                p.staDS_BIDSTATUS.set_cssclass("sta_WF_SchLabel");
                p.staDS_BIDSTATUS.move("ctxtDS_STATUS1:0.0","10.0","118.0","24.0",null,null);

                p.ctxtDS_BIDSTATUS.set_taborder("1");
                p.ctxtDS_BIDSTATUS.getSetter("FitToContents").set("true");
                p.ctxtDS_BIDSTATUS.set_value("");
                p.ctxtDS_BIDSTATUS.set_readonly("true");
                p.ctxtDS_BIDSTATUS.move("staDS_BIDSTATUS:0.0","10.0","100","24.0",null,null);
                // this.divSearch }}


                // {{ this.divData.form.divData01
                p = rootobj.divData.form.divData01.form;

                p.sta001.set_taborder("0");
                p.sta001.set_text("구매유형");
                p.sta001.set_cssclass("sta_WF_tablelabelE");
                p.sta001.move("0","0","110","30",null,null);

                p.sta002.set_taborder("1");
                p.sta002.set_text("구매요청번호");
                p.sta002.set_cssclass("sta_WF_tablelabel");
                p.sta002.move("0","sta001:0","110","30",null,null);

                p.sta101.set_taborder("2");
                p.sta101.set_cssclass("sta_WF_tablebg");
                p.sta101.move("sta001:-1","0","181","30",null,null);

                p.sta102.set_taborder("3");
                p.sta102.set_cssclass("sta_WF_tablebg");
                p.sta102.move("sta002:-1","sta101:-1","181","30",null,null);

                p.sta201.set_taborder("4");
                p.sta201.set_text("계약유형");
                p.sta201.set_cssclass("sta_WF_tablelabelE");
                p.sta201.move("sta101:-1","0","131","30",null,null);

                p.sta202.set_taborder("5");
                p.sta202.set_text("면세율");
                p.sta202.set_cssclass("sta_WF_tablelabel");
                p.sta202.move("sta102:-1","sta201:-1","131","30",null,null);

                p.sta301.set_taborder("6");
                p.sta301.set_cssclass("sta_WF_tablebg");
                p.sta301.move("sta201:-1","0","181","30",null,null);

                p.sta302.set_taborder("7");
                p.sta302.set_cssclass("sta_WF_tablebg");
                p.sta302.move("sta202:-1","sta301:-1","181","30",null,null);

                p.sta401.set_taborder("8");
                p.sta401.set_text("과세구분");
                p.sta401.set_cssclass("sta_WF_tablelabelE");
                p.sta401.move("sta301:-1","0","131","30",null,null);

                p.sta402.set_taborder("9");
                p.sta402.set_text("공사기간");
                p.sta402.set_cssclass("sta_WF_tablelabelE");
                p.sta402.move("sta302:-1","sta401:-1","120","30",null,null);

                p.sta403.set_taborder("10");
                p.sta403.set_text("부문");
                p.sta403.set_cssclass("sta_WF_tablelabelE");
                p.sta403.move("0","58","110","30",null,null);

                p.sta404.set_taborder("11");
                p.sta404.set_text("하도공종");
                p.sta404.set_cssclass("sta_WF_tablelabelE");
                p.sta404.move("289","58","130","30",null,null);

                p.sta405.set_taborder("12");
                p.sta405.set_text("하도급명");
                p.sta405.set_cssclass("sta_WF_tablelabelE");
                p.sta405.move("599","58","120","30",null,null);

                p.sta501.set_taborder("13");
                p.sta501.set_cssclass("sta_WF_tablebg");
                p.sta501.move("sta401:-1","0","231","30",null,null);

                p.sta502.set_taborder("14");
                p.sta502.set_cssclass("sta_WF_tablebg");
                p.sta502.move("sta402:-1","sta501:-1","231","30",null,null);

                p.sta503.set_taborder("15");
                p.sta503.set_cssclass("sta_WF_tablebg");
                p.sta503.move("sta403:-1","58","180","30",null,null);

                p.sta504.set_taborder("16");
                p.sta504.set_cssclass("sta_WF_tablebg");
                p.sta504.move("sta404:-1","58","182","30",null,null);

                p.sta505.set_taborder("17");
                p.sta505.set_cssclass("sta_WF_tablebg");
                p.sta505.move("sta405:-1","58","231","30",null,null);

                p.cboTY_ACCOUNT.set_taborder("49");
                p.cboTY_ACCOUNT.set_innerdataset("dsTY_ACCOUNT");
                p.cboTY_ACCOUNT.set_codecolumn("CD_CODE");
                p.cboTY_ACCOUNT.set_datacolumn("DS_CODE");
                p.cboTY_ACCOUNT.move("sta001:5","5","165","20",null,null);

                p.txtNO_BID.set_taborder("50");
                p.txtNO_BID.set_value("");
                p.txtNO_BID.set_readonly("true");
                p.txtNO_BID.move("sta002:5","sta101:4","165","20",null,null);

                p.cboDS_CONTMETHOD.set_taborder("54");
                p.cboDS_CONTMETHOD.set_innerdataset("dsDS_CONTMETHOD");
                p.cboDS_CONTMETHOD.set_codecolumn("CD_CODE");
                p.cboDS_CONTMETHOD.set_datacolumn("DS_CODE");
                p.cboDS_CONTMETHOD.move("sta201:5","5","164","20",null,null);

                p.txtRT_TAX.set_taborder("55");
                p.txtRT_TAX.set_value("");
                p.txtRT_TAX.set_format("9,999.99");
                p.txtRT_TAX.move("sta202:5","sta301:4","164","20",null,null);

                p.cboTY_TAX.set_taborder("61");
                p.cboTY_TAX.set_innerdataset("dsTY_TAX");
                p.cboTY_TAX.set_codecolumn("CODE");
                p.cboTY_TAX.set_datacolumn("DATA");
                p.cboTY_TAX.move("sta401:5","5","216","20",null,null);

                p.tclDT_FROM.set_taborder("62");
                p.tclDT_FROM.set_dateformat("yyyy-MM-dd");
                p.tclDT_FROM.set_editformat("yyyyMMdd");
                p.tclDT_FROM.set_autoselect("true");
                p.tclDT_FROM.set_value("");
                p.tclDT_FROM.move("sta402:5","sta501:4","100","20",null,null);

                p.sta00.set_taborder("66");
                p.sta00.set_text("~");
                p.sta00.set_textAlign("center");
                p.sta00.set_verticalAlign("middle");
                p.sta00.move("tclDT_FROM:2","sta501:4","12","20",null,null);

                p.tclDT_TO.set_taborder("63");
                p.tclDT_TO.set_dateformat("yyyy-MM-dd");
                p.tclDT_TO.set_editformat("yyyyMMdd");
                p.tclDT_TO.set_autoselect("true");
                p.tclDT_TO.set_value("");
                p.tclDT_TO.move("sta00:2","sta501:4","100","20",null,null);

                p.txtDS_SUBCON.set_taborder("67");
                p.txtDS_SUBCON.set_value("");
                p.txtDS_SUBCON.move("sta405:5","63","216","20",null,null);

                p.cfCD_COSTCLASS.getSetter("CodeFindName").set("DCX_CFCOSTCLASS_01");
                p.cfCD_COSTCLASS.getSetter("CDTextWidth").set("70");
                p.cfCD_COSTCLASS.set_taborder("64");
                p.cfCD_COSTCLASS.set_url("cmm::cmmCodeFind.xfdl");
                p.cfCD_COSTCLASS.set_text("");
                p.cfCD_COSTCLASS.move("sta403:5","63","164","20",null,null);

                p.cfCD_LICCOST.getSetter("CodeFindName").set("DCX_CFLICCOST_01");
                p.cfCD_LICCOST.getSetter("CDTextWidth").set("70");
                p.cfCD_LICCOST.set_taborder("65");
                p.cfCD_LICCOST.set_url("cmm::cmmCodeFind.xfdl");
                p.cfCD_LICCOST.move("sta404:5","63","165","20",null,null);
                // this.divData.form.divData01 }}


                // {{ this.divData.form.divData02
                p = rootobj.divData.form.divData02.form;

                p.sta2001.set_taborder("1");
                p.sta2001.set_text("현장요청일");
                p.sta2001.set_cssclass("sta_WF_tablelabel");
                p.sta2001.set_textAlign("center");
                p.sta2001.move("0","0","119","30",null,null);

                p.sta2002.set_taborder("1");
                p.sta2002.set_text("본사접수일");
                p.sta2002.set_cssclass("sta_WF_tablelabel");
                p.sta2002.set_textAlign("center");
                p.sta2002.move("sta2001:-1","0","119","30",null,null);

                p.sta2003.set_taborder("1");
                p.sta2003.set_text("승인일자");
                p.sta2003.set_cssclass("sta_WF_tablelabel");
                p.sta2003.set_textAlign("center");
                p.sta2003.move("sta2002:-1","0","119","30",null,null);

                p.sta2004.set_taborder("1");
                p.sta2004.set_text("도급금액");
                p.sta2004.set_cssclass("sta_WF_tablelabel");
                p.sta2004.set_textAlign("center");
                p.sta2004.move("sta2003:-1","0","119","30",null,null);

                p.sta2005.set_taborder("1");
                p.sta2005.set_text("예산금액");
                p.sta2005.set_cssclass("sta_WF_tablelabel");
                p.sta2005.set_textAlign("center");
                p.sta2005.move("sta2004:-1","0","119","30",null,null);

                p.sta2006.set_taborder("1");
                p.sta2006.set_text("승인요청액");
                p.sta2006.set_cssclass("sta_WF_tablelabel");
                p.sta2006.set_textAlign("center");
                p.sta2006.move("sta2005:-1","0","119","30",null,null);

                p.sta2007.set_taborder("1");
                p.sta2007.set_text("승인금액");
                p.sta2007.set_cssclass("sta_WF_tablelabel");
                p.sta2007.set_textAlign("center");
                p.sta2007.move("sta2006:-1","0","119","30",null,null);

                p.sta2008.set_taborder("1");
                p.sta2008.set_text("평단가");
                p.sta2008.set_cssclass("sta_WF_tablelabel");
                p.sta2008.set_textAlign("center");
                p.sta2008.move("sta2007:-1","0","123","30",null,null);

                p.sta2101.set_taborder("1");
                p.sta2101.set_cssclass("sta_WF_tablebg");
                p.sta2101.move("0","sta2001:-1","119","30",null,null);

                p.sta2102.set_taborder("1");
                p.sta2102.set_cssclass("sta_WF_tablebg");
                p.sta2102.move("sta2101:-1","sta2002:-1","119","30",null,null);

                p.sta2103.set_taborder("1");
                p.sta2103.set_cssclass("sta_WF_tablebg");
                p.sta2103.move("sta2102:-1","sta2003:-1","119","30",null,null);

                p.sta2104.set_taborder("1");
                p.sta2104.set_cssclass("sta_WF_tablebg");
                p.sta2104.move("sta2103:-1","sta2004:-1","119","30",null,null);

                p.sta2105.set_taborder("1");
                p.sta2105.set_cssclass("sta_WF_tablebg");
                p.sta2105.move("sta2104:-1","sta2005:-1","119","30",null,null);

                p.sta2106.set_taborder("1");
                p.sta2106.set_cssclass("sta_WF_tablebg");
                p.sta2106.move("sta2105:-1","sta2006:-1","119","30",null,null);

                p.sta2107.set_taborder("1");
                p.sta2107.set_cssclass("sta_WF_tablebg");
                p.sta2107.move("sta2106:-1","sta2007:-1","119","30",null,null);

                p.sta2108.set_taborder("1");
                p.sta2108.set_cssclass("sta_WF_tablebg");
                p.sta2108.move("sta2107:-1","sta2008:-1","123","30",null,null);

                p.tclDT_REQ_SITE.set_taborder("2");
                p.tclDT_REQ_SITE.set_dateformat("yyyy-MM-dd");
                p.tclDT_REQ_SITE.set_editformat("yyyyMMdd");
                p.tclDT_REQ_SITE.set_autoselect("true");
                p.tclDT_REQ_SITE.set_value("");
                p.tclDT_REQ_SITE.set_readonly("true");
                p.tclDT_REQ_SITE.move("5","34","107","20",null,null);

                p.tclDT_HQRECEIPT.set_taborder("2");
                p.tclDT_HQRECEIPT.set_dateformat("yyyy-MM-dd");
                p.tclDT_HQRECEIPT.set_editformat("yyyyMMdd");
                p.tclDT_HQRECEIPT.set_autoselect("true");
                p.tclDT_HQRECEIPT.set_value("");
                p.tclDT_HQRECEIPT.set_readonly("true");
                p.tclDT_HQRECEIPT.move("sta2101:4","34","107","20",null,null);

                p.tclDT_HQAPPR.set_taborder("2");
                p.tclDT_HQAPPR.set_dateformat("yyyy-MM-dd");
                p.tclDT_HQAPPR.set_editformat("yyyyMMdd");
                p.tclDT_HQAPPR.set_autoselect("true");
                p.tclDT_HQAPPR.set_value("");
                p.tclDT_HQAPPR.set_readonly("true");
                p.tclDT_HQAPPR.move("sta2102:4","34","107","20",null,null);

                p.txtAM_TT_DOKUB.set_taborder("2");
                p.txtAM_TT_DOKUB.set_value("");
                p.txtAM_TT_DOKUB.set_readonly("true");
                p.txtAM_TT_DOKUB.set_format("9,990");
                p.txtAM_TT_DOKUB.move("sta2103:4","34","107","20",null,null);

                p.txtAM_TT_SILHENG.set_taborder("2");
                p.txtAM_TT_SILHENG.set_value("");
                p.txtAM_TT_SILHENG.set_readonly("true");
                p.txtAM_TT_SILHENG.set_format("9,990");
                p.txtAM_TT_SILHENG.move("sta2104:4","34","107","20",null,null);

                p.txtAM_REQUEST.set_taborder("2");
                p.txtAM_REQUEST.set_value("");
                p.txtAM_REQUEST.set_readonly("true");
                p.txtAM_REQUEST.set_format("9,990");
                p.txtAM_REQUEST.move("sta2105:4","34","107","20",null,null);

                p.txtAM_GONGSA.set_taborder("2");
                p.txtAM_GONGSA.set_value("");
                p.txtAM_GONGSA.set_readonly("true");
                p.txtAM_GONGSA.set_format("9,990");
                p.txtAM_GONGSA.move("sta2106:4","34","107","20",null,null);

                p.txtUP_PYEONG.set_taborder("2");
                p.txtUP_PYEONG.set_value("");
                p.txtUP_PYEONG.set_readonly("true");
                p.txtUP_PYEONG.set_format("9,990");
                p.txtUP_PYEONG.move("sta2107:4","34","109","20",null,null);
                // this.divData.form.divData02 }}


                // {{ this.divData.form.tabData.tab1.form.div00
                p = rootobj.divData.form.tabData.tab1.form.div00.form;

                p.sta01.set_taborder("0");
                p.sta01.set_text("현장설명회");
                p.sta01.set_cssclass("sta_TITLE_Bg");
                p.sta01.move("0","0",null,"22","0",null);

                p.sta001.set_taborder("1");
                p.sta001.set_text("현장실시여부");
                p.sta001.set_visible("false");
                p.sta001.set_cssclass("sta_WF_tablelabelE");
                p.sta001.move("0","30","110","30",null,null);

                p.sta101.set_taborder("2");
                p.sta101.set_cssclass("sta_WF_tablebg");
                p.sta101.set_visible("false");
                p.sta101.move("109","30","283","30",null,null);

                p.sta00.set_taborder("3");
                p.sta00.set_text("현설유형");
                p.sta00.set_cssclass("sta_WF_tablelabelE");
                p.sta00.move("0","30","110","30",null,null);

                p.sta02.set_taborder("4");
                p.sta02.set_cssclass("sta_WF_tablebg");
                p.sta02.move("sta00:-1","30","283","30",null,null);

                p.sta06.set_taborder("5");
                p.sta06.set_text("현설장소");
                p.sta06.set_cssclass("sta_WF_tablelabel");
                p.sta06.move("sta02:-1","30","110","30",null,null);

                p.sta05.set_taborder("6");
                p.sta05.set_cssclass("sta_WF_tablebg");
                p.sta05.move("sta06:-1","30","310","30",null,null);

                p.cboYN_EXPLAIN.set_taborder("9");
                p.cboYN_EXPLAIN.set_innerdataset("dsYN_EXPLAIN");
                p.cboYN_EXPLAIN.set_codecolumn("CODE");
                p.cboYN_EXPLAIN.set_datacolumn("DATA");
                p.cboYN_EXPLAIN.set_visible("false");
                p.cboYN_EXPLAIN.move("sta001:5","35","165","20",null,null);

                p.cboONOFF_EXPLAIN.set_taborder("7");
                p.cboONOFF_EXPLAIN.set_innerdataset("dsONOFF_EXPLAIN");
                p.cboONOFF_EXPLAIN.set_codecolumn("CD_CODE");
                p.cboONOFF_EXPLAIN.set_datacolumn("DS_CODE");
                p.cboONOFF_EXPLAIN.move("sta00:5","35","165","20",null,null);

                p.txtAT_SITEEXPLAIN.set_taborder("8");
                p.txtAT_SITEEXPLAIN.set_value("");
                p.txtAT_SITEEXPLAIN.move("sta06:5","35","295","20",null,null);
                // this.divData.form.tabData.tab1.form.div00 }}


                // {{ this.divData.form.tabData.tab1.form.div01
                p = rootobj.divData.form.tabData.tab1.form.div01.form;

                p.sta0111.set_taborder("0");
                p.sta0111.set_text("현장담당");
                p.sta0111.set_cssclass("sta_TITLE_Bg");
                p.sta0111.move("0","0",null,"22","0",null);

                p.sta00.set_taborder("1");
                p.sta00.set_text("현장담당자");
                p.sta00.set_cssclass("sta_WF_tablelabelE");
                p.sta00.move("0","59","110","30",null,null);

                p.sta03.set_taborder("2");
                p.sta03.set_text("기타사항");
                p.sta03.set_cssclass("sta_WF_tablelabel");
                p.sta03.move("0","88","110","30",null,null);

                p.sta02.set_taborder("3");
                p.sta02.set_cssclass("sta_WF_tablebg");
                p.sta02.move("109","59","283","30",null,null);

                p.sta04.set_taborder("4");
                p.sta04.set_cssclass("sta_WF_tablebg");
                p.sta04.move("109","88","590","30",null,null);

                p.sta07.set_taborder("5");
                p.sta07.set_text("전화번호");
                p.sta07.set_cssclass("sta_WF_tablelabel");
                p.sta07.move("sta02:-1",null,"110","30",null,"29");

                p.sta08.set_taborder("6");
                p.sta08.set_cssclass("sta_WF_tablebg");
                p.sta08.move("sta07:-1",null,"199","30",null,"29");

                p.txtRM_BIDREMARK.set_taborder("9");
                p.txtRM_BIDREMARK.set_value("");
                p.txtRM_BIDREMARK.move("sta03:5","sta02:4","579","20",null,null);

                p.ccfID_SITESABUN.getSetter("CodeFindName").set("DZX_CFUSER");
                p.ccfID_SITESABUN.getSetter("CDTextWidth").set("70");
                p.ccfID_SITESABUN.set_taborder("7");
                p.ccfID_SITESABUN.set_url("cmm::cmmCodeFind.xfdl");
                p.ccfID_SITESABUN.move("sta00:5",null,"272","20",null,"34");

                p.txtNO_SITETEL.set_taborder("8");
                p.txtNO_SITETEL.set_value("");
                p.txtNO_SITETEL.move("sta07:5",null,"188","20",null,"34");
                // this.divData.form.tabData.tab1.form.div01 }}


                // {{ this.divData.form.tabData.tab1
                p = rootobj.divData.form.tabData.tab1.form;

                p.div00.set_taborder("1");
                p.div00.set_formscrolltype("none");
                p.div00.move("10","5",null,"100","10",null);

                p.div01.set_taborder("1");
                p.div01.set_text("div00");
                p.div01.set_formscrolltype("none");
                p.div01.move("10","div00:5",null,"118","10",null);
                // this.divData.form.tabData.tab1 }}


                // {{ this.divData.form.tabData.tab2
                p = rootobj.divData.form.tabData.tab2.form;

                p.objGrid.set_taborder("1");
                p.objGrid.move("0","0",null,null,"0","0");
                // this.divData.form.tabData.tab2 }}


                // {{ this.divData.form.tabData.tab3.form.div00
                p = rootobj.divData.form.tabData.tab3.form.div00.form;

                p.sta01.set_taborder("1");
                p.sta01.set_text("현장설명회");
                p.sta01.set_cssclass("sta_TITLE_Bg");
                p.sta01.move("0","0",null,"22","0",null);

                p.sta001.set_taborder("1");
                p.sta001.set_text("현장실시여부");
                p.sta001.set_cssclass("sta_WF_tablelabel");
                p.sta001.set_visible("false");
                p.sta001.move("0","30","110","30",null,null);

                p.sta101.set_taborder("1");
                p.sta101.set_cssclass("sta_WF_tablebg");
                p.sta101.set_visible("false");
                p.sta101.move("109","30","283","30",null,null);

                p.sta00.set_taborder("1");
                p.sta00.set_text("현설유형");
                p.sta00.set_cssclass("sta_WF_tablelabel");
                p.sta00.move("0","30","110","30",null,null);

                p.sta02.set_taborder("1");
                p.sta02.set_cssclass("sta_WF_tablebg");
                p.sta02.move("sta00:-1","30","283","30",null,null);

                p.sta03.set_taborder("1");
                p.sta03.set_text("현설일시");
                p.sta03.set_cssclass("sta_WF_tablelabel");
                p.sta03.move("0","sta00:-1","110","30",null,null);

                p.sta04.set_taborder("1");
                p.sta04.set_cssclass("sta_WF_tablebg");
                p.sta04.move("sta03:-1","sta02:-1","283","30",null,null);

                p.sta06.set_taborder("1");
                p.sta06.set_text("현설장소");
                p.sta06.set_cssclass("sta_WF_tablelabel");
                p.sta06.move("sta02:-1","30","110","30",null,null);

                p.sta07.set_taborder("1");
                p.sta07.set_text("현설공고일");
                p.sta07.set_cssclass("sta_WF_tablelabel");
                p.sta07.move("sta04:-1","sta06:-1","110","30",null,null);

                p.sta05.set_taborder("1");
                p.sta05.set_cssclass("sta_WF_tablebg");
                p.sta05.move("sta06:-1","30","310","30",null,null);

                p.sta08.set_taborder("1");
                p.sta08.set_cssclass("sta_WF_tablebg");
                p.sta08.move("sta07:-1","sta05:-1","310","30",null,null);

                p.cboYN_EXPLAIN.set_taborder("2");
                p.cboYN_EXPLAIN.set_innerdataset("dsYN_EXPLAIN");
                p.cboYN_EXPLAIN.set_codecolumn("CODE");
                p.cboYN_EXPLAIN.set_datacolumn("DATA");
                p.cboYN_EXPLAIN.set_visible("false");
                p.cboYN_EXPLAIN.set_readonly("true");
                p.cboYN_EXPLAIN.move("sta001:5","35","165","20",null,null);

                p.cboONOFF_EXPLAIN.set_taborder("2");
                p.cboONOFF_EXPLAIN.set_innerdataset("dsONOFF_EXPLAIN");
                p.cboONOFF_EXPLAIN.set_codecolumn("CD_CODE");
                p.cboONOFF_EXPLAIN.set_datacolumn("DS_CODE");
                p.cboONOFF_EXPLAIN.set_readonly("true");
                p.cboONOFF_EXPLAIN.move("sta00:5","35","165","20",null,null);

                p.txtAT_SITEEXPLAIN.set_taborder("2");
                p.txtAT_SITEEXPLAIN.set_value("");
                p.txtAT_SITEEXPLAIN.set_readonly("true");
                p.txtAT_SITEEXPLAIN.move("sta06:5","35","295","20",null,null);

                p.tclDT_EXPLAIN.set_taborder("2");
                p.tclDT_EXPLAIN.set_dateformat("yyyy-MM-dd");
                p.tclDT_EXPLAIN.set_editformat("yyyyMMdd");
                p.tclDT_EXPLAIN.set_autoselect("true");
                p.tclDT_EXPLAIN.set_value("");
                p.tclDT_EXPLAIN.set_readonly("true");
                p.tclDT_EXPLAIN.move("sta03:5","sta02:4","110","20",null,null);

                p.tclDT_EXPLAIN_GONGO.set_taborder("2");
                p.tclDT_EXPLAIN_GONGO.set_dateformat("yyyy-MM-dd");
                p.tclDT_EXPLAIN_GONGO.set_editformat("yyyyMMdd");
                p.tclDT_EXPLAIN_GONGO.set_autoselect("true");
                p.tclDT_EXPLAIN_GONGO.set_value("");
                p.tclDT_EXPLAIN_GONGO.set_readonly("true");
                p.tclDT_EXPLAIN_GONGO.move("sta07:5","sta05:4","110","20",null,null);

                p.ccboDT_EXPLAIN_HOUR.set_taborder("1");
                p.ccboDT_EXPLAIN_HOUR.set_innerdataset("dsHOUR");
                p.ccboDT_EXPLAIN_HOUR.set_codecolumn("CD_CODE");
                p.ccboDT_EXPLAIN_HOUR.set_datacolumn("DS_CODE");
                p.ccboDT_EXPLAIN_HOUR.set_readonly("true");
                p.ccboDT_EXPLAIN_HOUR.set_text("00");
                p.ccboDT_EXPLAIN_HOUR.set_value("00");
                p.ccboDT_EXPLAIN_HOUR.set_index("0");
                p.ccboDT_EXPLAIN_HOUR.move("tclDT_EXPLAIN:5","sta02:4","45","20",null,null);

                p.staDT_EXPLAIN_HOUR.set_taborder("1");
                p.staDT_EXPLAIN_HOUR.set_text("시");
                p.staDT_EXPLAIN_HOUR.getSetter("readonly").set("true");
                p.staDT_EXPLAIN_HOUR.move("ccboDT_EXPLAIN_HOUR:3","sta02:4","20","20",null,null);

                p.ccboDT_EXPLAIN_MINUTE.set_taborder("1");
                p.ccboDT_EXPLAIN_MINUTE.set_innerdataset("dsMINUTE");
                p.ccboDT_EXPLAIN_MINUTE.set_codecolumn("CD_CODE");
                p.ccboDT_EXPLAIN_MINUTE.set_datacolumn("DS_CODE");
                p.ccboDT_EXPLAIN_MINUTE.set_readonly("true");
                p.ccboDT_EXPLAIN_MINUTE.set_text("00");
                p.ccboDT_EXPLAIN_MINUTE.set_value("00");
                p.ccboDT_EXPLAIN_MINUTE.set_index("0");
                p.ccboDT_EXPLAIN_MINUTE.move("staDT_EXPLAIN_HOUR:5","sta02:4","45","20",null,null);

                p.staDT_EXPLAIN_MINUTE.set_taborder("1");
                p.staDT_EXPLAIN_MINUTE.set_text("분");
                p.staDT_EXPLAIN_MINUTE.getSetter("readonly").set("true");
                p.staDT_EXPLAIN_MINUTE.move("ccboDT_EXPLAIN_MINUTE:3","sta02:4","20","20",null,null);
                // this.divData.form.tabData.tab3.form.div00 }}


                // {{ this.divData.form.tabData.tab3.form.div01
                p = rootobj.divData.form.tabData.tab3.form.div01.form;

                p.sta0111.set_taborder("0");
                p.sta0111.set_text("현장담당");
                p.sta0111.set_cssclass("sta_TITLE_Bg");
                p.sta0111.move("0","0",null,"22","0",null);

                p.sta00.set_taborder("1");
                p.sta00.set_text("현장담당자");
                p.sta00.set_cssclass("sta_WF_tablelabel");
                p.sta00.move("0","59","110","30",null,null);

                p.sta03.set_taborder("2");
                p.sta03.set_text("기타사항");
                p.sta03.set_cssclass("sta_WF_tablelabel");
                p.sta03.move("0","88","110","30",null,null);

                p.sta02.set_taborder("3");
                p.sta02.set_cssclass("sta_WF_tablebg");
                p.sta02.move("109","59","283","30",null,null);

                p.sta04.set_taborder("4");
                p.sta04.set_cssclass("sta_WF_tablebg");
                p.sta04.move("109","88","590","30",null,null);

                p.sta07.set_taborder("5");
                p.sta07.set_text("전화번호");
                p.sta07.set_cssclass("sta_WF_tablelabel");
                p.sta07.move("sta02:-1",null,"110","30",null,"29");

                p.sta08.set_taborder("6");
                p.sta08.set_cssclass("sta_WF_tablebg");
                p.sta08.getSetter("readonly").set("true");
                p.sta08.move("sta07:-1",null,"199","30",null,"29");

                p.txtRM_BIDREMARK.set_taborder("9");
                p.txtRM_BIDREMARK.set_value("");
                p.txtRM_BIDREMARK.set_readonly("true");
                p.txtRM_BIDREMARK.move("sta03:5","sta02:4","579","20",null,null);

                p.ccfID_SITESABUN_01.getSetter("CodeFindName").set("DZX_CFUSER");
                p.ccfID_SITESABUN_01.getSetter("CDTextWidth").set("70");
                p.ccfID_SITESABUN_01.set_taborder("7");
                p.ccfID_SITESABUN_01.set_url("cmm::cmmCodeFind.xfdl");
                p.ccfID_SITESABUN_01.getSetter("readonly").set("true");
                p.ccfID_SITESABUN_01.move("sta00:5",null,"272","20",null,"34");

                p.txtNO_SITETEL.set_taborder("8");
                p.txtNO_SITETEL.set_value("");
                p.txtNO_SITETEL.set_readonly("true");
                p.txtNO_SITETEL.move("sta07:5",null,"188","20",null,"34");
                // this.divData.form.tabData.tab3.form.div01 }}


                // {{ this.divData.form.tabData.tab3.form.div02
                p = rootobj.divData.form.tabData.tab3.form.div02.form;

                p.sta0111.set_taborder("0");
                p.sta0111.set_text("입찰견적");
                p.sta0111.set_cssclass("sta_TITLE_Bg");
                p.sta0111.move("0","0",null,"22","0",null);

                p.sta001.set_taborder("1");
                p.sta001.set_text("입찰공고일");
                p.sta001.set_cssclass("sta_WF_tablelabel");
                p.sta001.move("0","30","110","30",null,null);

                p.sta00.set_taborder("2");
                p.sta00.set_text("입찰일시");
                p.sta00.set_cssclass("sta_WF_tablelabel");
                p.sta00.move("0","59","110","30",null,null);

                p.sta101.set_taborder("3");
                p.sta101.set_cssclass("sta_WF_tablebg");
                p.sta101.move("109","30","283","30",null,null);

                p.sta02.set_taborder("4");
                p.sta02.set_cssclass("sta_WF_tablebg");
                p.sta02.move("109","59","283","30",null,null);

                p.sta06.set_taborder("5");
                p.sta06.set_text("낙찰방식");
                p.sta06.set_cssclass("sta_WF_tablelabel");
                p.sta06.move("sta101:-1","30","110","30",null,null);

                p.sta07.set_taborder("6");
                p.sta07.set_text("입찰방식");
                p.sta07.set_cssclass("sta_WF_tablelabel");
                p.sta07.move("sta02:-1","sta06:-1","110","30",null,null);

                p.sta05.set_taborder("7");
                p.sta05.set_cssclass("sta_WF_tablebg");
                p.sta05.move("sta06:-1","30","160","30",null,null);

                p.sta08.set_taborder("8");
                p.sta08.set_cssclass("sta_WF_tablebg");
                p.sta08.move("sta07:-1","sta05:-1","160","30",null,null);

                p.sta01.set_taborder("9");
                p.sta01.set_text("입찰코디네이터");
                p.sta01.set_cssclass("sta_WF_tablelabel");
                p.sta01.move("0","98","110","30",null,null);

                p.sta03.set_taborder("10");
                p.sta03.set_text("입찰담당1");
                p.sta03.set_cssclass("sta_WF_tablelabel");
                p.sta03.move("0","127","110","30",null,null);

                p.sta04.set_taborder("11");
                p.sta04.set_cssclass("sta_WF_tablebg");
                p.sta04.move("109","98","283","30",null,null);

                p.sta09.set_taborder("12");
                p.sta09.set_cssclass("sta_WF_tablebg");
                p.sta09.move("109","127","283","30",null,null);

                p.sta10.set_taborder("13");
                p.sta10.set_text("전화번호");
                p.sta10.set_cssclass("sta_WF_tablelabel");
                p.sta10.move("sta04:-1","98","110","30",null,null);

                p.sta11.set_taborder("14");
                p.sta11.set_text("전화번호");
                p.sta11.set_cssclass("sta_WF_tablelabel");
                p.sta11.move("sta09:-1","127","110","30",null,null);

                p.sta12.set_taborder("15");
                p.sta12.set_cssclass("sta_WF_tablebg");
                p.sta12.move("sta10:-1","98","160","30",null,null);

                p.sta13.set_taborder("16");
                p.sta13.set_cssclass("sta_WF_tablebg");
                p.sta13.move("sta11:-1","127","160","30",null,null);

                p.sta14.set_taborder("17");
                p.sta14.set_text("입찰담당2");
                p.sta14.set_cssclass("sta_WF_tablelabel");
                p.sta14.move("0","156","110","30",null,null);

                p.sta15.set_taborder("18");
                p.sta15.set_cssclass("sta_WF_tablebg");
                p.sta15.move("109","156","283","30",null,null);

                p.sta16.set_taborder("19");
                p.sta16.set_text("전화번호");
                p.sta16.set_cssclass("sta_WF_tablelabel");
                p.sta16.move("sta15:-1","156","110","30",null,null);

                p.sta17.set_taborder("20");
                p.sta17.set_cssclass("sta_WF_tablebg");
                p.sta17.move("sta16:-1","156","160","30",null,null);

                p.sta18.set_taborder("21");
                p.sta18.set_text("문의담당");
                p.sta18.set_cssclass("sta_WF_tablelabel");
                p.sta18.move("0","185","110","30",null,null);

                p.sta19.set_taborder("22");
                p.sta19.set_cssclass("sta_WF_tablebg");
                p.sta19.move("109","185","283","30",null,null);

                p.sta20.set_taborder("23");
                p.sta20.set_text("전화번호");
                p.sta20.set_cssclass("sta_WF_tablelabel");
                p.sta20.move("sta19:-1","185","110","30",null,null);

                p.sta21.set_taborder("24");
                p.sta21.set_cssclass("sta_WF_tablebg");
                p.sta21.move("sta20:-1","185","160","30",null,null);

                p.sta22.set_taborder("25");
                p.sta22.set_text("이메일");
                p.sta22.set_cssclass("sta_WF_tablelabel");
                p.sta22.move("sta12:-1","98","71","30",null,null);

                p.sta23.set_taborder("26");
                p.sta23.set_cssclass("sta_WF_tablebg");
                p.sta23.move("sta22:-1","98","195","30",null,null);

                p.sta24.set_taborder("27");
                p.sta24.set_text("이메일");
                p.sta24.set_cssclass("sta_WF_tablelabel");
                p.sta24.move("sta13:-1","127","71","30",null,null);

                p.sta25.set_taborder("28");
                p.sta25.set_cssclass("sta_WF_tablebg");
                p.sta25.move("sta24:-1","127","195","30",null,null);

                p.sta26.set_taborder("29");
                p.sta26.set_text("이메일");
                p.sta26.set_cssclass("sta_WF_tablelabel");
                p.sta26.move("sta17:-1","156","71","30",null,null);

                p.sta27.set_taborder("30");
                p.sta27.set_cssclass("sta_WF_tablebg");
                p.sta27.move("sta26:-1","156","195","30",null,null);

                p.sta28.set_taborder("31");
                p.sta28.set_text("이메일");
                p.sta28.set_cssclass("sta_WF_tablelabel");
                p.sta28.move("sta21:-1","185","71","30",null,null);

                p.sta29.set_taborder("32");
                p.sta29.set_cssclass("sta_WF_tablebg");
                p.sta29.move("sta28:-1","185","195","30",null,null);

                p.txtDS_BID_SUCCESS.set_taborder("47");
                p.txtDS_BID_SUCCESS.set_readonly("true");
                p.txtDS_BID_SUCCESS.move("sta06:5","35","144","20",null,null);

                p.ccfID_BIDCOORD.getSetter("CodeFindName").set("DZX_CFUSER");
                p.ccfID_BIDCOORD.getSetter("CDTextWidth").set("70");
                p.ccfID_BIDCOORD.set_taborder("34");
                p.ccfID_BIDCOORD.set_url("cmm::cmmCodeFind.xfdl");
                p.ccfID_BIDCOORD.getSetter("readonly").set("true");
                p.ccfID_BIDCOORD.move("sta01:5","103","174","20",null,null);

                p.txtNO_BIDCOORDITEL.set_taborder("46");
                p.txtNO_BIDCOORDITEL.set_readonly("true");
                p.txtNO_BIDCOORDITEL.move("sta10:5","103","144","20",null,null);

                p.txtNO_BIDDAM1TEL.set_taborder("45");
                p.txtNO_BIDDAM1TEL.set_readonly("true");
                p.txtNO_BIDDAM1TEL.move("sta11:5","132","144","20",null,null);

                p.txtNO_BIDDAM2TEL.set_taborder("37");
                p.txtNO_BIDDAM2TEL.set_readonly("true");
                p.txtNO_BIDDAM2TEL.move("sta16:5","161","144","20",null,null);

                p.txtNO_QUESTIONTEL.set_taborder("38");
                p.txtNO_QUESTIONTEL.set_readonly("true");
                p.txtNO_QUESTIONTEL.move("sta20:5","190","144","20",null,null);

                p.txtEM_BIDCOORDI.set_taborder("39");
                p.txtEM_BIDCOORDI.set_readonly("true");
                p.txtEM_BIDCOORDI.move("sta22:5","103","184","20",null,null);

                p.txtEM_BIDDAM1.set_taborder("40");
                p.txtEM_BIDDAM1.set_readonly("true");
                p.txtEM_BIDDAM1.move("sta24:5","132","184","20",null,null);

                p.txtEM_BIDDAM2.set_taborder("41");
                p.txtEM_BIDDAM2.set_readonly("true");
                p.txtEM_BIDDAM2.move("sta26:5","161","184","20",null,null);

                p.txtEM_QUESTION.set_taborder("42");
                p.txtEM_QUESTION.set_readonly("true");
                p.txtEM_QUESTION.move("sta28:5","191","184","20",null,null);

                p.tclDT_BID_GONGO.set_taborder("43");
                p.tclDT_BID_GONGO.set_dateformat("yyyy-MM-dd");
                p.tclDT_BID_GONGO.set_editformat("yyyyMMdd");
                p.tclDT_BID_GONGO.set_autoselect("true");
                p.tclDT_BID_GONGO.set_value("");
                p.tclDT_BID_GONGO.set_readonly("true");
                p.tclDT_BID_GONGO.move("115","35","110","20",null,null);

                p.tclDT_BIDMAGAM.set_taborder("44");
                p.tclDT_BIDMAGAM.set_dateformat("yyyy-MM-dd");
                p.tclDT_BIDMAGAM.set_editformat("yyyyMMdd");
                p.tclDT_BIDMAGAM.set_autoselect("true");
                p.tclDT_BIDMAGAM.set_value("");
                p.tclDT_BIDMAGAM.set_readonly("true");
                p.tclDT_BIDMAGAM.move("115","64","110","20",null,null);

                p.ccfID_BIDDAM1.getSetter("CodeFindName").set("DZX_CFUSER");
                p.ccfID_BIDDAM1.getSetter("CDTextWidth").set("70");
                p.ccfID_BIDDAM1.set_taborder("36");
                p.ccfID_BIDDAM1.set_url("cmm::cmmCodeFind.xfdl");
                p.ccfID_BIDDAM1.getSetter("readonly").set("true");
                p.ccfID_BIDDAM1.move("115","132","174","20",null,null);

                p.ccfID_BIDDAM2.getSetter("CodeFindName").set("DZX_CFUSER");
                p.ccfID_BIDDAM2.getSetter("CDTextWidth").set("70");
                p.ccfID_BIDDAM2.set_taborder("35");
                p.ccfID_BIDDAM2.set_url("cmm::cmmCodeFind.xfdl");
                p.ccfID_BIDDAM2.getSetter("readonly").set("true");
                p.ccfID_BIDDAM2.move("115","161","174","20",null,null);

                p.ccfID_QUESTION.getSetter("CodeFindName").set("DZX_CFUSER");
                p.ccfID_QUESTION.getSetter("CDTextWidth").set("70");
                p.ccfID_QUESTION.set_taborder("33");
                p.ccfID_QUESTION.set_url("cmm::cmmCodeFind.xfdl");
                p.ccfID_QUESTION.getSetter("readonly").set("true");
                p.ccfID_QUESTION.move("115","190","174","20",null,null);

                p.cboONOFF_EXPLAIN.set_taborder("48");
                p.cboONOFF_EXPLAIN.set_innerdataset("dsONOFF");
                p.cboONOFF_EXPLAIN.set_codecolumn("CD_CODE");
                p.cboONOFF_EXPLAIN.set_datacolumn("DS_CODE");
                p.cboONOFF_EXPLAIN.set_readonly("true");
                p.cboONOFF_EXPLAIN.move("sta07:5","64","144","20",null,null);

                p.ccboDT_BIDMAGAM_HOUR.set_taborder("1");
                p.ccboDT_BIDMAGAM_HOUR.set_innerdataset("dsHOUR");
                p.ccboDT_BIDMAGAM_HOUR.set_codecolumn("CD_CODE");
                p.ccboDT_BIDMAGAM_HOUR.set_datacolumn("DS_CODE");
                p.ccboDT_BIDMAGAM_HOUR.set_readonly("true");
                p.ccboDT_BIDMAGAM_HOUR.set_text("00");
                p.ccboDT_BIDMAGAM_HOUR.set_value("00");
                p.ccboDT_BIDMAGAM_HOUR.set_index("0");
                p.ccboDT_BIDMAGAM_HOUR.move("tclDT_BIDMAGAM:5","64","45","20",null,null);

                p.staDT_BIDMAGAM_HOUR.set_taborder("1");
                p.staDT_BIDMAGAM_HOUR.set_text("시");
                p.staDT_BIDMAGAM_HOUR.getSetter("readonly").set("true");
                p.staDT_BIDMAGAM_HOUR.move("ccboDT_BIDMAGAM_HOUR:3","64","20","20",null,null);

                p.ccboDT_BIDMAGAM_MINUTE.set_taborder("1");
                p.ccboDT_BIDMAGAM_MINUTE.set_innerdataset("dsMINUTE");
                p.ccboDT_BIDMAGAM_MINUTE.set_codecolumn("CD_CODE");
                p.ccboDT_BIDMAGAM_MINUTE.set_datacolumn("DS_CODE");
                p.ccboDT_BIDMAGAM_MINUTE.set_readonly("true");
                p.ccboDT_BIDMAGAM_MINUTE.set_text("00");
                p.ccboDT_BIDMAGAM_MINUTE.set_value("00");
                p.ccboDT_BIDMAGAM_MINUTE.set_index("0");
                p.ccboDT_BIDMAGAM_MINUTE.move("staDT_BIDMAGAM_HOUR:5","64","45","20",null,null);

                p.staDT_BIDMAGAM_MINUTE.set_taborder("1");
                p.staDT_BIDMAGAM_MINUTE.set_text("분");
                p.staDT_BIDMAGAM_MINUTE.getSetter("readonly").set("true");
                p.staDT_BIDMAGAM_MINUTE.move("ccboDT_BIDMAGAM_MINUTE:3","64","20","20",null,null);
                // this.divData.form.tabData.tab3.form.div02 }}


                // {{ this.divData.form.tabData.tab3
                p = rootobj.divData.form.tabData.tab3.form;

                p.div00.set_taborder("0");
                p.div00.set_text("div00");
                p.div00.move("10","5",null,"100","10",null);

                p.div01.set_taborder("1");
                p.div01.set_text("div00");
                p.div01.move("10","div00:5",null,"118","10",null);

                p.div02.set_taborder("2");
                p.div02.set_text("div00");
                p.div02.set_formscrolltype("none");
                p.div02.move("10","div01:5",null,"217","10",null);
                // this.divData.form.tabData.tab3 }}


                // {{ this.divData
                p = rootobj.divData.form;

                p.sta01.set_taborder("3");
                p.sta01.set_text("선정 및 승인사항");
                p.sta01.set_cssclass("sta_TITLE_Bg");
                p.sta01.move("0","0","950","22",null,null);

                p.divData01.set_taborder("1");
                p.divData01.set_text("");
                p.divData01.move("0","sta01:10","950","300",null,null);

                p.divData02.set_taborder("2");
                p.divData02.move("0","divData01:10","1100","59",null,null);

                p.tabData.set_taborder("0");
                p.tabData.set_tabindex("0");
                p.tabData.set_onchanged("divData_tabData_onchanged");
                p.tabData.set_minheight("300");
                p.tabData.set_maxheight("");
                p.tabData.move("0","divData02:10","950",null,null,"0");

                p.btn04.set_taborder("8");
                p.btn04.set_text("현설파일확정");
                p.btn04.set_fittocontents("width");
                p.btn04.set_padding("4px 7px 4px 7px");
                p.btn04.set_onclick("divData_btn04_onclick");
                p.btn04.set_color("crimson");
                p.btn04.move("tabData:-100","divData02:5","60","23",null,null);

                p.btn01.set_taborder("6");
                p.btn01.set_text("현설질의응답");
                p.btn01.set_fittocontents("width");
                p.btn01.set_padding("4px 7px 4px 7px");
                p.btn01.set_onclick("divData_btn01_onclick");
                p.btn01.set_color("crimson");
                p.btn01.move(null,"divData02:5","60","23","btn02:5",null);
                // this.divData }}
                p = rootobj;
                p.divSearch.set_taborder("1");
                p.divSearch.set_cssclass("div_SEARCH_Bg");
                p.divSearch.set_formscrolltype("none");
                p.divSearch.move("0","0",null,"45","0",null);

                p.divData.set_taborder("0");
                p.divData.set_cssclass("div_DATA_Bg");
                p.divData.set_text("");
                p.divData.move("0","divSearch:10",null,null,"0","0");
            	}
            );
            this.addLayout(obj.name, obj);
            
            // BindItem Information
            obj = new BindItem("item0","divSearch.form.ccfCD_SITE.form.CDTextBox","value","dsSearch","CD_SITE");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item1","divSearch.form.ccfNO_BID.form.CDTextBox","value","dsSearch","NO_BID");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item2","divData.form.divData01.form.cboTY_ACCOUNT","value","dsList","TY_ACCOUNT");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item3","divData.form.divData01.form.txtNO_BID","value","dsList","NO_BID");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item8","divData.form.divData01.form.txtNO_RFQ","value","dsList","NO_RFQ");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item18","divData.form.divData01.form.cboDS_CONTMETHOD","value","dsList","DS_CONTMETHOD");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item19","divData.form.divData01.form.txtRT_TAX","value","dsList","RT_TAX");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item25","divData.form.divData01.form.cboTY_TAX","value","dsList","TY_TAX");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item26","divData.form.divData01.form.tclDT_FROM","value","dsList","DT_FROM");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item27","divData.form.divData01.form.tclDT_TO","value","dsList","DT_TO");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item28","divData.form.divData01.form.cfCD_COSTCLASS.form.CDTextBox","value","dsList","CD_COSTCLASS");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item29","divData.form.divData01.form.cfCD_COSTCLASS.form.DSTextBox","value","dsList","DS_COSTCLASS");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item30","divData.form.divData01.form.cfCD_LICCOST.form.CDTextBox","value","dsList","CD_LICCOST");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item31","divData.form.divData01.form.cfCD_LICCOST.form.DSTextBox","value","dsList","DS_LICCOST");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item32","divData.form.divData01.form.txtDS_SUBCON","value","dsList","DS_SUBCON");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item36","divData.form.divData02.form.tclDT_REQ_SITE","value","dsList","DT_REQ_SITE");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item37","divData.form.divData02.form.tclDT_HQRECEIPT","value","dsList","DT_HQRECEIPT");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item38","divData.form.divData02.form.tclDT_HQAPPR","value","dsList","DT_HQAPPR");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item39","divData.form.divData02.form.txtAM_TT_DOKUB","value","dsList","AM_TT_DOKUB");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item40","divData.form.divData02.form.txtAM_TT_SILHENG","value","dsList","AM_TT_SILHENG");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item41","divData.form.divData02.form.txtAM_REQUEST","value","dsList","AM_REQUEST");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item42","divData.form.divData02.form.txtAM_GONGSA","value","dsList","AM_GONGSA");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item43","divData.form.divData02.form.txtUP_PYEONG","value","dsList","UP_PYEONG");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item44","divData.form.tabData.tab1.form.div00.form.cboYN_EXPLAIN","value","dsList","YN_EXPLAIN");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item45","divData.form.tabData.tab1.form.div00.form.cboONOFF_EXPLAIN","value","dsList","ONOFF_EXPLAIN");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item47","divData.form.tabData.tab1.form.div00.form.txtAT_SITEEXPLAIN","value","dsList","AT_SITEEXPLAIN");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item52","divData.form.tabData.tab1.form.div01.form.ccfID_SITESABUN.form.CDTextBox","value","dsList","ID_SITESABUN");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item53","divData.form.tabData.tab1.form.div01.form.ccfID_SITESABUN.form.DSTextBox","value","dsList","NM_SITESABUN");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item54","divData.form.tabData.tab1.form.div01.form.txtNO_SITETEL","value","dsList","NO_SITETEL");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item55","divData.form.tabData.tab1.form.div01.form.txtRM_BIDREMARK","value","dsList","RM_BIDREMARK");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item56","divData.form.tabData.tab3.form.div00.form.cboYN_EXPLAIN","value","dsList","YN_EXPLAIN");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item57","divData.form.tabData.tab3.form.div00.form.cboONOFF_EXPLAIN","value","dsList","ONOFF_EXPLAIN");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item58","divData.form.tabData.tab3.form.div00.form.tclDT_EXPLAIN","value","dsList","DT_EXPLAIN");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item59","divData.form.tabData.tab3.form.div00.form.txtAT_SITEEXPLAIN","value","dsList","AT_SITEEXPLAIN");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item60","divData.form.tabData.tab3.form.div00.form.tclDT_EXPLAIN_GONGO","value","dsList","DT_EXPLAIN_GONGO");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item64","divData.form.tabData.tab3.form.div01.form.ccfID_SITESABUN_01.form.CDTextBox","value","dsList","ID_SITESABUN");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item65","divData.form.tabData.tab3.form.div01.form.ccfID_SITESABUN_01.form.DSTextBox","value","dsList","NM_SITESABUN");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item66","divData.form.tabData.tab3.form.div01.form.txtNO_SITETEL","value","dsList","NO_SITETEL");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item67","divData.form.tabData.tab3.form.div01.form.txtRM_BIDREMARK","value","dsList","RM_BIDREMARK");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item68","divData.form.tabData.tab3.form.div02.form.tclDT_BID_GONGO","value","dsList","DT_EXPLAIN_GONGO");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item69","divData.form.tabData.tab3.form.div02.form.tclDT_BIDMAGAM","value","dsList","DT_BIDMAGAM");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item70","divData.form.tabData.tab3.form.div02.form.cboONOFF_EXPLAIN","value","dsList","ONOFF");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item73","divData.form.tabData.tab3.form.div02.form.txtDS_BID_SUCCESS","value","dsList","DS_BID_SUCCESS");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item74","divData.form.tabData.tab3.form.div02.form.ccfID_BIDCOORD.form.CDTextBox","value","dsList","ID_BIDCOORDI");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item75","divData.form.tabData.tab3.form.div02.form.ccfID_BIDCOORD.form.DSTextBox","value","dsList","NM_BIDCOORDI");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item76","divData.form.tabData.tab3.form.div02.form.txtNO_BIDCOORDITEL","value","dsList","NO_BIDCOORDITEL");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item77","divData.form.tabData.tab3.form.div02.form.txtEM_BIDCOORDI","value","dsList","EM_BIDCOORDI");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item78","divData.form.tabData.tab3.form.div02.form.ccfID_BIDDAM1.form.CDTextBox","value","dsList","ID_BIDDAM1");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item79","divData.form.tabData.tab3.form.div02.form.ccfID_BIDDAM1.form.DSTextBox","value","dsList","NM_BIDDAM1");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item80","divData.form.tabData.tab3.form.div02.form.txtNO_BIDDAM1TEL","value","dsList","NO_BIDDAM1TEL");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item81","divData.form.tabData.tab3.form.div02.form.txtEM_BIDDAM1","value","dsList","EM_BIDDAM1");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item82","divData.form.tabData.tab3.form.div02.form.ccfID_BIDDAM2.form.CDTextBox","value","dsList","ID_BIDDAM2");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item83","divData.form.tabData.tab3.form.div02.form.ccfID_BIDDAM2.form.DSTextBox","value","dsList","NM_BIDDAM2");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item84","divData.form.tabData.tab3.form.div02.form.txtNO_BIDDAM2TEL","value","dsList","NO_BIDDAM2TEL");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item85","divData.form.tabData.tab3.form.div02.form.txtEM_BIDDAM2","value","dsList","EM_BIDDAM2");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item86","divData.form.tabData.tab3.form.div02.form.ccfID_QUESTION.form.CDTextBox","value","dsList","ID_QUESTION");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item87","divData.form.tabData.tab3.form.div02.form.ccfID_QUESTION.form.DSTextBox","value","dsList","NM_QUESTION");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item88","divData.form.tabData.tab3.form.div02.form.txtNO_QUESTIONTEL","value","dsList","NO_QUESTIONTEL");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item89","divData.form.tabData.tab3.form.div02.form.txtEM_QUESTION","value","dsList","EM_QUESTION");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item90","divSearch.form.ctxtDS_STATUS1","value","dsList","DS_STATUS1");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item91","divSearch.form.ctxtDS_BIDSTATUS","value","dsList","DS_BIDSTATUS");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item95","divData.form.tabData.tab3.form.div00.form.ccboDT_EXPLAIN_HOUR","value","dsTempTime","EXPLAIN_HOUR");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item96","divData.form.tabData.tab3.form.div00.form.ccboDT_EXPLAIN_MINUTE","value","dsTempTime","EXPLAIN_MINUTE");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item71","divData.form.tabData.tab3.form.div02.form.ccboDT_BIDMAGAM_HOUR","value","dsTempTime","BIDMAGAM_HOUR");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item72","divData.form.tabData.tab3.form.div02.form.ccboDT_BIDMAGAM_MINUTE","value","dsTempTime","BIDMAGAM_MINUTE");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item4","divData.form.divData01.form.txtRT_TAX00","value","dsList","RT_CONTGUARANTEE");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item5","divData.form.divData01.form.txtRT_TAX01","value","dsList","RT_ASGUARANTEE");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item6","divData.form.divData01.form.txtDS_SUBCON00","value","dsList","DT_ASFROMTO");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item7","divData.form.divData01.form.txtDS_SUBCON01","value","dsList","CT_JICHAE");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item9","divData.form.divData01.form.cboTY_RETIRE_BUGEUM","value","dsList","TY_RETIRE_BUGEUM");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item10","divData.form.divData01.form.txtDS_PREPAY1","value","dsList","DS_PREPAY1");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item11","divData.form.divData01.form.rdoYN_PAYGUARANTEE","value","dsList","YN_PREPAY1");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item12","divData.form.divData01.form.txt00","value","dsList","RM_REMARK");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item13","divData.form.divData01.form.txtDS_PAY","value","dsList","DS_PAY");
            this.addChild(obj.name, obj);
            obj.bind();
            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {
            this._addPreloadList("fdl","cmm::cmmCodeFind.xfdl");
        };
        
        // User Script
        this.registerScript("DCB_ORDERPLANSR_SITE_EDIT.xfdl", function() {
        this.objApp = this.gfnGetApplication();
        this.singFormStat = "Q";	// 싱글폼 데이터 수정시 변경됨(싱글폼데이터와 그리드데이터를 같이 저장할지 각각 따로 저장할지 구분하기 위한변수)

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

        	// 타화면에서 오픈시 넘어오는 파라미터 처리
        	if(!this.gfnIsNull(this.getOwnerFrame().CD_SITE) && !this.gfnIsNull(this.getOwnerFrame().NO_BID)) {
        		this.dsSearch.setColumn(0, "CD_SITE", this.getOwnerFrame().CD_SITE);
        		this.dsSearch.setColumn(0, "NO_BID", this.getOwnerFrame().NO_BID);
        		// 코드파인드의 명칭부분은 직접 접근해서 셋팅
        		this.ccfCD_SITE.form.DSTextBox.set_value(this.getOwnerFrame().DS_SITE);
        		if(!this.gfnIsNull(this.getOwnerFrame().DS_SUBCON)) {
        			this.ccfNO_BID.form.DSTextBox.set_value(this.getOwnerFrame().DS_SUBCON);
        		}

        		this.ccfCD_SITE.form.fnFitToContents();

        		this.FormBtns.Select.click();
        	}
        };

        /************************************************************************
         * 버튼 설정 : 화면(Tab) 전환시 마다 호출
         * 서브버튼 사용 및 공통버튼 강제 제어시 여기서 처리
         ************************************************************************/
        this.fnSetButton = function() {
        	// gfnCallAuthBtn 호출시 화면의 fnSetButton 호출이 되므로
        	// 버튼들에 대한 권한 처리가 이뤄진후 fnSetButton에서는 false에 대한 처리만 해준다.
        	if(this.gfnGetFormStatus(this) != "") {
        		switch(this.divData.form.tabData.tabindex) {
        			case 0:
        			case 1:
        			case 2:
        // 				this.FormBtns.Add.set_enable(false);
        // 				this.FormBtns.Del.set_enable(false);
        				break;

        		}
        	}
        }

        /************************************************************************
         * 확장 버튼 : 화면별 버튼 설정 ID, function 연결 (화면버튼관리)
         ************************************************************************/
        this.fnSetExtendButton = function() {
        // 	this.btnIndirect = this.gfnFormButtonAdd("btnIndirect", "fnIndirect");
        // 	this.btnPRAttach.set_color("crimson");
        // 	this.btnReqETC = this.gfnFormButtonAdd("btnReqETC", "fnReqETC");
        // 	this.btnAttendUpdate = this.gfnFormButtonAdd("btnAttendUpdate","fnAttendUpdate");
        // 	this.btnNonAttendMail = this.gfnFormButtonAdd("btnNonAttendMail","fnNonAttendMail");
         	this.btnReq = this.gfnFormButtonAdd("btnReq", "fnReq");
         	this.btnReqCancel = this.gfnFormButtonAdd("btnReqCancel", "fnReqCancel");
        	this.btnVendorAdd = this.gfnFormButtonAdd("btnVendorAdd","fnVendorAdd");
        	this.btnPRAttach = this.gfnFormButtonAdd("btnPRAttach", "fnPRAttach");
        	this.btnPRAttach1 = this.gfnFormButtonAdd("btnPRAttach1", "fnPRAttach1");
         	this.btnPRAttach2 = this.gfnFormButtonAdd("btnPRAttach2", "fnPRAttach2");
        };

        /************************************************************************
         * 변수 선언
         ************************************************************************/
        this.fnSetVariable = function() {
        	this.ccfCD_SITE = this.divSearch.form.ccfCD_SITE;
        	this.ccfNO_BID = this.divSearch.form.ccfNO_BID;
        	this.dxGrid = this.divData.form.tabData.tab2.form.objGrid;
        };

        /************************************************************************
         * 이벤트 설정
         ************************************************************************/
        this.fnSetEvent = function() {
        	this.ccfNO_BID.BeforeUserDataSetParam = "fnBeforeUserDataSetParam";
        	this.ccfCD_SITE.AfterCDTextChanged = "fnAfterCDTextChanged";
        	this.divData.form.divData01.form.cfCD_LICCOST.BeforeUserDataSetParam = "fnBeforeUserDataSetParam";

        	//this.divData.form.tabData.tab1.form.div01.form.ccfID_MANAGER.AfterCDTextChanged = "fnAfterCDTextChanged";
        	//this.divData.form.tabData.tab1.form.div01.form.ccfID_SITESABUN.AfterCDTextChanged = "fnAfterCDTextChanged";

        	//this.divData.form.tabData.tab3.form.div01.form.ccfID_MANAGER_01.AfterCDTextChanged = "fnAfterCDTextChanged";
        	//this.divData.form.tabData.tab3.form.div01.form.ccfID_SITESABUN_01.AfterCDTextChanged = "fnAfterCDTextChanged";

        	this.divData.form.tabData.tab3.form.div02.form.ccfID_BIDCOORD.AfterCDTextChanged = "fnAfterCDTextChanged";
        	this.divData.form.tabData.tab3.form.div02.form.ccfID_BIDDAM1.AfterCDTextChanged = "fnAfterCDTextChanged";
        	this.divData.form.tabData.tab3.form.div02.form.ccfID_BIDDAM2.AfterCDTextChanged = "fnAfterCDTextChanged";
        	this.divData.form.tabData.tab3.form.div02.form.ccfID_QUESTION.AfterCDTextChanged = "fnAfterCDTextChanged";

        	this.gfnGridInit(this.dxGrid, this.dsList2, "DC", "DCB_ORDERPLAN_SITE_JOIN");

        };

        /************************************************************************
         * 파라미터 설정
         ************************************************************************/
        this.fnSetParameter = function() {

        	this.dsSelect = new Dataset();
        	this.dsSelect.addColumn("CD_SITE", "string");
        	this.dsSelect.addColumn("NO_BID", "string");
        	this.dsSelect.addColumn("CD_CORP", "string");
        	this.dsSelect.addColumn("CD_DEPT", "string");
        	this.dsSelect.addColumn("ID_USER", "string");


        	this.dsUpdate = new Dataset();
        	this.dsUpdate.addColumn("CD_SITE", "string");
        	this.dsUpdate.addColumn("NO_BID", "string");
        	this.dsUpdate.addColumn("NO_HADO", "string");
        	this.dsUpdate.addColumn("DS_SUBCON", "string");
        	this.dsUpdate.addColumn("TY_ACCOUNT", "string");
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
        	this.dsUpdate.addColumn("CT_HOUSEHOLDS", "bigdecimal");
        	this.dsUpdate.addColumn("ID_USER", "string");

        	this.dsUpdate.addColumn("RT_CONTGUARANTEE", "bigdecimal");
        	this.dsUpdate.addColumn("RT_ASGUARANTEE", "bigdecimal");
        	this.dsUpdate.addColumn("DT_ASFROMTO", "string");
        	this.dsUpdate.addColumn("CT_JICHAE", "int");
        	this.dsUpdate.addColumn("TY_RETIRE_BUGEUM", "string");
        	this.dsUpdate.addColumn("DS_PREPAY1", "string");
        	this.dsUpdate.addColumn("YN_PREPAY1", "string");
        	this.dsUpdate.addColumn("DS_PAY", "string");

        	this.dsDelete = new Dataset();
        	this.dsDelete.addColumn("CD_SITE", "string");
        	this.dsDelete.addColumn("NO_BID", "string");

        	// 현설참석목록
        	this.dsSelect2 = new Dataset();
        	this.dsSelect2.addColumn("CD_GROUP", "string");
        	this.dsSelect2.addColumn("CD_SITE", "string");
        	this.dsSelect2.addColumn("NO_BID", "string");
        	this.dsSelect2.addColumn("CD_VENDOR", "string");
        	this.dsSelect2.addColumn("TY_BIDOREXPLAIN", "string");

        	this.dsUpdate2 = new Dataset();
        	this.dsUpdate2.addColumn("NO_PR", "string");
        	this.dsUpdate2.addColumn("CD_VENDOR", "string");
        	this.dsUpdate2.addColumn("YN_JOIN", "string");
        	this.dsUpdate2.addColumn("DS_CONTACTNAME", "string");
        	this.dsUpdate2.addColumn("DT_CONTACTTEL", "string");
        	this.dsUpdate2.addColumn("DS_REASON", "string");

        	this.dsExecute = new Dataset();
        	this.dsExecute.addColumn("CD_SITE", "string");
        	this.dsExecute.addColumn("NO_PR", "string");
        	this.dsExecute.addColumn("CD_APP", "string");
        	this.dsExecute.addColumn("V_NO_DOC", "string");

        	this.dsSelectJodal = new Dataset();
        	this.dsSelectJodal.addColumn("NO_BID", "string");
        	this.dsSelectJodal.addColumn("YN_UNION", "string");
        	this.dsSelectJodal.addColumn("ID_USER", "string");
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
        	this.dsSelect.setColumn(0, "NO_BID", this.dsSearch.getColumn(0, "NO_BID"));
        	this.dsSelect.setColumn(0, "CD_CORP", this.AuthClient.CD_CORP);
        	this.dsSelect.setColumn(0, "CD_DEPT", this.AuthClient.CD_DEPT);
        	this.dsSelect.setColumn(0, "ID_USER", this.AuthClient.ID_USER);

        	this.dsSelect2.clearData();
        	this.dsSelect2.addRow();
        	this.dsSelect2.setColumn(0, "CD_GROUP", "");
        	this.dsSelect2.setColumn(0, "CD_SITE", this.dsSearch.getColumn(0, "CD_SITE"));
        	this.dsSelect2.setColumn(0, "NO_BID", this.dsSearch.getColumn(0, "NO_BID"));
        	this.dsSelect2.setColumn(0, "CD_VENDOR", "");
        	this.dsSelect2.setColumn(0, "TY_BIDOREXPLAIN", "");

        	var strSvcId    = "select";
        	var strSvcType  = "grid";
        	var inProc		= "_dsProc";
        	var inData      = "select=dsSelect d_select=dsSelect2";
        	var outData     = "dsList=select0 dsList2=d_select0";
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
        		this.dsDelete.setColumn(nrow, "NO_BID", this.dsList.getColumn(0, "NO_BID"));

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

        	/*
        	if(this.dsList.getColumn(0, "CT_GONGU") == "0"){
        		this.gfnAlert("당해공종 공구분할수 항목값은 0이 아닌 1이상값을 선택하세요.");
        		return;
        	}
        	if(this.dsList.getColumn(0, "NUM_GONGU") == "0"){
        		this.gfnAlert("금회발주공구 항목값은 0이 아닌 1이상값을 선택하세요.");
        		return;
        	}
        	*/

        	var arr_in = [];

        	var update = false;
        	if (this.dsList.rowcount > 0) {
        		// 싱글폼쪽 update 유무 체크
        		/*
        		if(this.dsList.getRowType(0) == Dataset.ROWTYPE_UPDATE) {
        			update = true;
        		}
        		*/

        		if(this.singFormStat == "Q") {
        			update = true;
        		}
        		this.singFormStat = "Q";	// 초기화
        	}

        	//alert(update);return;
        	if (update) {
        		// 싱글폼 변경 내역이 있으면 필수값 체크
        		//if (!this.gfnDataValidate(this.dsList, this.dsRequired)) return;
        		if(!this.fnSaveValidate()) return;
        		arr_in.push("update=dsUpdate");

        		this.dsUpdate.clearData();
        		var nrow = this.dsUpdate.addRow();
        		this.dsUpdate.setColumn(nrow, "CD_SITE", this.dsList.getColumn(0, "CD_SITE"));
        		this.dsUpdate.setColumn(nrow, "NO_BID", this.dsList.getColumn(0, "NO_BID"));
        		this.dsUpdate.setColumn(nrow, "NO_HADO", this.dsList.getColumn(0, "NO_HADO"));
        		this.dsUpdate.setColumn(nrow, "DS_SUBCON", this.dsList.getColumn(0, "DS_SUBCON"));
        		this.dsUpdate.setColumn(nrow, "TY_ACCOUNT", this.dsList.getColumn(0, "TY_ACCOUNT"));
        		this.dsUpdate.setColumn(nrow, "RT_TAX", this.dsList.getColumn(0, "RT_TAX"));
        		this.dsUpdate.setColumn(nrow, "TY_TAX", this.dsList.getColumn(0, "TY_TAX"));
        		this.dsUpdate.setColumn(nrow, "DT_FROM", this.dsList.getColumn(0, "DT_FROM"));
        		this.dsUpdate.setColumn(nrow, "DT_TO", this.dsList.getColumn(0, "DT_TO"));
        		this.dsUpdate.setColumn(nrow, "DS_FROMTO", this.dsList.getColumn(0, "DS_FROMTO"));
        		this.dsUpdate.setColumn(nrow, "AM_TT_SILHENG", this.dsList.getColumn(0, "AM_TT_SILHENG"));
        		this.dsUpdate.setColumn(nrow, "AM_TT_DOKUB", this.dsList.getColumn(0, "AM_TT_DOKUB"));
        		this.dsUpdate.setColumn(nrow, "RT_JIBUN", this.dsList.getColumn(0, "RT_JIBUN"));
        		this.dsUpdate.setColumn(nrow, "CD_VENDOR", this.dsList.getColumn(0, "CD_VENDOR"));
        		this.dsUpdate.setColumn(nrow, "CD_COSTCLASS", this.dsList.getColumn(0, "CD_COSTCLASS"));
        		this.dsUpdate.setColumn(nrow, "CD_LICCOST", this.dsList.getColumn(0, "CD_LICCOST"));
        		this.dsUpdate.setColumn(nrow, "CD_LICCOSTSUB", this.dsList.getColumn(0, "CD_LICCOSTSUB"));
        		this.dsUpdate.setColumn(nrow, "CD_SPECCONST", this.dsList.getColumn(0, "CD_SPECCONST"));
        		this.dsUpdate.setColumn(nrow, "CD_AREA", this.dsList.getColumn(0, "CD_AREA"));
        		this.dsUpdate.setColumn(nrow, "DS_GONSADESC", this.dsList.getColumn(0, "DS_GONSADESC"));
        		this.dsUpdate.setColumn(nrow, "DS_LOCATION", this.dsList.getColumn(0, "DS_LOCATION"));
        		this.dsUpdate.setColumn(nrow, "OR_ORDER", this.dsList.getColumn(0, "OR_ORDER"));
        		this.dsUpdate.setColumn(nrow, "AM_GONGSA", this.dsList.getColumn(0, "AM_GONGSA"));
        		//this.dsUpdate.setColumn(nrow, "NO_RFQ", this.dsList.getColumn(0, "NO_RFQ"));
        		this.dsUpdate.setColumn(nrow, "NO_RFQ", "");
        		this.dsUpdate.setColumn(nrow, "UP_PYEONG", this.dsList.getColumn(0, "UP_PYEONG"));
        		this.dsUpdate.setColumn(nrow, "DS_CONTMETHOD", this.dsList.getColumn(0, "DS_CONTMETHOD"));
        		this.dsUpdate.setColumn(nrow, "AREA_SITE", this.dsList.getColumn(0, "AREA_SITE"));
        		this.dsUpdate.setColumn(nrow, "AM_BASIC", this.dsList.getColumn(0, "AM_BASIC"));
        		this.dsUpdate.setColumn(nrow, "YN_PUBLISH_BID", this.dsList.getColumn(0, "YN_PUBLISH_BID"));
        		this.dsUpdate.setColumn(nrow, "YN_ATTACH_ILSIK", this.dsList.getColumn(0, "YN_ATTACH_ILSIK"));
        		this.dsUpdate.setColumn(nrow, "YN_HASU", this.dsList.getColumn(0, "YN_HASU"));
        		this.dsUpdate.setColumn(nrow, "YN_EXFILE_SEPARATE", this.dsList.getColumn(0, "YN_EXFILE_SEPARATE"));
        		this.dsUpdate.setColumn(nrow, "NO_UNION_HADO", this.dsList.getColumn(0, "NO_UNION_HADO"));
        		this.dsUpdate.setColumn(nrow, "NO_UNION_BID_CONNECT", this.dsList.getColumn(0, "NO_UNION_BID_CONNECT"));
        		this.dsUpdate.setColumn(nrow, "YN_UNION_BID", this.dsList.getColumn(0, "YN_UNION_BID"));
        		this.dsUpdate.setColumn(nrow, "YN_UNION_BID_ING", this.dsList.getColumn(0, "YN_UNION_BID_ING"));
        		this.dsUpdate.setColumn(nrow, "CT_GONGU", this.dsList.getColumn(0, "CT_GONGU"));
        		this.dsUpdate.setColumn(nrow, "NUM_GONGU", this.dsList.getColumn(0, "NUM_GONGU"));
        		this.dsUpdate.setColumn(nrow, "AREA_SITE1", this.dsList.getColumn(0, "AREA_SITE1"));
        		this.dsUpdate.setColumn(nrow, "AREA_SITE2", this.dsList.getColumn(0, "AREA_SITE2"));
        		this.dsUpdate.setColumn(nrow, "AREA_SITE3", this.dsList.getColumn(0, "AREA_SITE3"));
        		this.dsUpdate.setColumn(nrow, "AREA_SITE4", this.dsList.getColumn(0, "AREA_SITE4"));
        		this.dsUpdate.setColumn(nrow, "AREA_SITEALL", this.dsList.getColumn(0, "AREA_SITEALL"));
        		this.dsUpdate.setColumn(nrow, "ID_MANAGER", this.dsList.getColumn(0, "ID_MANAGER"));
        		this.dsUpdate.setColumn(nrow, "NO_MANAGERTEL", this.dsList.getColumn(0, "NO_MANAGERTEL"));
        		this.dsUpdate.setColumn(nrow, "ID_SITESABUN", this.dsList.getColumn(0, "ID_SITESABUN"));
        		this.dsUpdate.setColumn(nrow, "NO_SITETEL", this.dsList.getColumn(0, "NO_SITETEL"));
        		this.dsUpdate.setColumn(nrow, "RM_BIDREMARK", this.dsList.getColumn(0, "RM_BIDREMARK"));
        		this.dsUpdate.setColumn(nrow, "RM_REMARK", this.dsList.getColumn(0, "RM_REMARK"));
        		this.dsUpdate.setColumn(nrow, "YN_EXPLAIN", this.dsList.getColumn(0, "YN_EXPLAIN"));
        		this.dsUpdate.setColumn(nrow, "ONOFF_EXPLAIN", this.dsList.getColumn(0, "ONOFF_EXPLAIN"));
        		this.dsUpdate.setColumn(nrow, "AT_SITEEXPLAIN", this.dsList.getColumn(0, "AT_SITEEXPLAIN"));
        		this.dsUpdate.setColumn(nrow, "DT_EXPLAIN", this.dsList.getColumn(0, "DT_EXPLAIN")+ this.dsTempTime.getColumn(0, "EXPLAIN_HOUR") + this.dsTempTime.getColumn(0, "EXPLAIN_MINUTE"));
        		this.dsUpdate.setColumn(nrow, "DT_EXPLAIN_GONGO", this.dsList.getColumn(0, "DT_EXPLAIN_GONGO"));
        		this.dsUpdate.setColumn(nrow, "DT_BIDMAGAM", this.dsList.getColumn(0, "DT_BIDMAGAM") + this.dsTempTime.getColumn(0, "BIDMAGAM_HOUR") + this.dsTempTime.getColumn(0, "BIDMAGAM_MINUTE"));
        		this.dsUpdate.setColumn(nrow, "DT_BIDMAGAM_GONGO", this.dsList.getColumn(0, "DT_BIDMAGAM_GONGO"));
        		this.dsUpdate.setColumn(nrow, "TY_BID", this.dsList.getColumn(0, "TY_BID"));
        		this.dsUpdate.setColumn(nrow, "DS_BID_SUCCESS", this.dsList.getColumn(0, "DS_BID_SUCCESS"));
        		this.dsUpdate.setColumn(nrow, "ONOFF", this.dsList.getColumn(0, "ONOFF"));
        		this.dsUpdate.setColumn(nrow, "ID_BIDCOORDI", this.dsList.getColumn(0, "ID_BIDCOORDI"));
        		this.dsUpdate.setColumn(nrow, "NO_BIDCOORDITEL", this.dsList.getColumn(0, "NO_BIDCOORDITEL"));
        		this.dsUpdate.setColumn(nrow, "EM_BIDCOORDI", this.dsList.getColumn(0, "EM_BIDCOORDI"));
        		this.dsUpdate.setColumn(nrow, "ID_BIDDAM1", this.dsList.getColumn(0, "ID_BIDDAM1"));
        		this.dsUpdate.setColumn(nrow, "NO_BIDDAM1TEL", this.dsList.getColumn(0, "NO_BIDDAM1TEL"));
        		this.dsUpdate.setColumn(nrow, "EM_BIDDAM1", this.dsList.getColumn(0, "EM_BIDDAM1"));
        		this.dsUpdate.setColumn(nrow, "ID_BIDDAM2", this.dsList.getColumn(0, "ID_BIDDAM2"));
        		this.dsUpdate.setColumn(nrow, "NO_BIDDAM2TEL", this.dsList.getColumn(0, "NO_BIDDAM2TEL"));
        		this.dsUpdate.setColumn(nrow, "EM_BIDDAM2", this.dsList.getColumn(0, "EM_BIDDAM2"));
        		this.dsUpdate.setColumn(nrow, "ID_QUESTION", this.dsList.getColumn(0, "ID_QUESTION"));
        		this.dsUpdate.setColumn(nrow, "NO_QUESTIONTEL", this.dsList.getColumn(0, "NO_QUESTIONTEL"));
        		this.dsUpdate.setColumn(nrow, "EM_QUESTION", this.dsList.getColumn(0, "EM_QUESTION"));
        		this.dsUpdate.setColumn(nrow, "ID_USER", this.AuthClient.ID_USER);
        		this.dsUpdate.setColumn(nrow, "YN_EXFILE_SEPARATE", this.dsList.getColumn(0, "YN_EXFILE_SEPARATE"));
        		this.dsUpdate.setColumn(nrow, "CT_HOUSEHOLDS", this.dsList.getColumn(0, "CT_HOUSEHOLDS"));

        		this.dsUpdate.setColumn(nrow, "RT_CONTGUARANTEE", this.dsList.getColumn(0, "RT_CONTGUARANTEE"));
        		this.dsUpdate.setColumn(nrow, "RT_ASGUARANTEE", this.dsList.getColumn(0, "RT_ASGUARANTEE"));
        		this.dsUpdate.setColumn(nrow, "DT_ASFROMTO", this.dsList.getColumn(0, "DT_ASFROMTO"));
        		this.dsUpdate.setColumn(nrow, "CT_JICHAE", this.dsList.getColumn(0, "CT_JICHAE"));
        		this.dsUpdate.setColumn(nrow, "TY_RETIRE_BUGEUM", this.dsList.getColumn(0, "TY_RETIRE_BUGEUM"));

        		this.dsUpdate.setColumn(nrow, "DS_PREPAY1", this.dsList.getColumn(0, "DS_PREPAY1"));
        		this.dsUpdate.setColumn(nrow, "YN_PREPAY1", this.dsList.getColumn(0, "YN_PREPAY1"));
        		this.dsUpdate.setColumn(nrow, "DS_PAY", this.dsList.getColumn(0, "DS_PAY"));
        	}

        	// 현설참석목록
        	this.dsUpdate2.clearData();
        	for (var i = 0; i < this.dsList2.rowcount; i++) {
        		var flag = this.gfnGetFlag(this.dsList2, i);
        		if(flag == "U") {
        			var nrow = this.dsUpdate2.addRow();
        			this.dsUpdate2.setColumn(nrow, "NO_PR", this.dsSearch.getColumn(0, "NO_BID"));
        			this.dsUpdate2.setColumn(nrow, "CD_VENDOR", this.dsList2.getColumn(i, "CD_VENDOR"));
        			this.dsUpdate2.setColumn(nrow, "YN_JOIN", this.dsList2.getColumn(i, "YN_JOIN"));
        			this.dsUpdate2.setColumn(nrow, "DS_CONTACTNAME", this.dsList2.getColumn(i, "DS_CONTACTNAME"));
        			this.dsUpdate2.setColumn(nrow, "DT_CONTACTTEL", this.dsList2.getColumn(i, "DT_CONTACTTEL"));
        			this.dsUpdate2.setColumn(nrow, "DS_REASON", this.dsList2.getColumn(i, "DS_REASON"));
        		}
        	}

        	if(this.dsUpdate2.rowcount > 0) {
        		arr_in.push("d_update=dsUpdate2");
        	}

        	if (this.dsUpdate.rowcount == 0 && this.dsUpdate2.rowcount == 0) return;

        	var strSvcId    = "save";
        	var strSvcType  = "save";
        	var inProc		= "_dsProc";
        	var inData      = arr_in.join(' ');
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
        	else if (this.gfnIsNull(this.dsSearch.getColumn(0,"NO_BID"))) {
        		validate = false;
        		// Alert후 실행할 처리
        		this.fnVaidateCallback = function() {
        			this.divSearch.form.ccfNO_BID.form.CDTextBox.setFocus();
        		}
        		this.gfnAlert("구매요청번호를 입력하세요.", "fnVaidateCallback");
        	}
        	return validate;
        };


        this.fnSaveValidate = function()
        {
        	var validate = true;
        	var msg = "";

        	var err = this.gfnDataValidate(this.dsList, this.dsRequired, false);
        	if (!this.gfnIsNull(err))
        	{
        		validate = false;
        		msg += err;
        	}

        	/*
        	if(this.dsList.getColumn(0, "CT_GONGU") == "0"){

        		msg += "[당해공종 공구분할수] 항목값은 0이 아닌 1이상값을 선택하세요.";
        		validate = false;
        	}
        	if(this.dsList.getColumn(0, "NUM_GONGU") == "0"){
        		validate = false;
        	}
        	*/

        	if(this.dsList.getColumn(0, "ONOFF_EXPLAIN") != "9")
        	{
        		if(this.gfnIsNull(this.dsList.getColumn(0, "DT_EXPLAIN")))
        		{
        			validate = false;
        			msg += "[현설일시] 필수입력값입니다.\n";
        		}
        	}

        	/*
        	if(this.fnZeroCheck(this.dsList.getColumn(0, "AREA_SITE1")) && this.fnZeroCheck(this.dsList.getColumn(0, "AREA_SITE2"))
        	&& this.fnZeroCheck(this.dsList.getColumn(0, "AREA_SITE3")) && this.fnZeroCheck(this.dsList.getColumn(0, "AREA_SITE4")))
        	{
        		msg += "[1공구 ~ 4공구연면적] 중 하나는 필수입력값입니다.\n";
        		validate = false;
        	}
        	*/

        	if(!this.gfnIsNull(msg)) {
        		var arrError = [msg];
        		this.gfnAlert("msg.err.validator", arrError);
        	}

        	return validate;
        }

        this.fnZeroCheck = function(sValue)
        {
        	if (new String(sValue).valueOf() == "undefined") return true;
            if (sValue == null) return true;

            var ChkStr = new String(sValue);

            if (ChkStr == null) return true;
            if (ChkStr.toString().length == 0 ) return true;

        	if (sValue == 0 || sValue == "0" || sValue == null) return true;

        	return false;
        }

        /************************************************************************
         * 콜백 이벤트
         ************************************************************************/
        /*
         *	콜백 처리
         */
        this.fnCallback = function(svcID, errorCode, errorMsg, strArg)
        {
        	if (svcID == "select") {
        		this.dsTempTime.clearData();
        		this.dsTempTime.addRow();

        		if(!this.gfnIsNull(this.dsList.getColumn(0, "DT_EXPLAIN")))
        		{
        			if(this.dsList.getColumn(0, "DT_EXPLAIN").length > 8)
        			{
        				this.dsTempTime.setColumn(0, "EXPLAIN_HOUR", this.dsList.getColumn(0, "DT_EXPLAIN").substr(8,2));
        				this.dsTempTime.setColumn(0, "EXPLAIN_MINUTE", this.dsList.getColumn(0, "DT_EXPLAIN").substr(10,2));
        				this.dsList.setColumn(0, "DT_EXPLAIN", this.dsList.getColumn(0, "DT_EXPLAIN").substr(0,8));

        				// 폼상태 초기화
        				this.gfnSetFormStatus(this);
        				this.singFormStat = "U";
        			}
        		}

        		if(!this.gfnIsNull(this.dsList.getColumn(0, "DT_BIDMAGAM")))
        		{
        			if(this.dsList.getColumn(0, "DT_BIDMAGAM").length > 8)
        			{
        				this.dsTempTime.setColumn(0, "BIDMAGAM_HOUR", this.dsList.getColumn(0, "DT_BIDMAGAM").substr(8,2));
        				this.dsTempTime.setColumn(0, "BIDMAGAM_MINUTE", this.dsList.getColumn(0, "DT_BIDMAGAM").substr(10,2));
        				this.dsList.setColumn(0, "DT_BIDMAGAM", this.dsList.getColumn(0, "DT_BIDMAGAM").substr(0,8));

        				// 폼상태 초기화
        				this.gfnSetFormStatus(this);
        				this.singFormStat = "U";
        			}
        		}

        		if(this.dsList.rowcount > 0)
        		{
        			this.fnCheckRT_TAX(this.dsList.getColumn(0, "TY_TAX"));

        			this.fnBtnCheckAll();
        		}
        	}
        	else if(svcID == "save") {
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

        			this.gfnAlert("현설참석여부확인이 정상처리되었습니다.", "","","fnExecute_callback");
        		}
        		else
        		{
        			this.gfnAlert(errorMsg);
        		}
        	}
        	else if(svcID == "update_attach") {
        		if (errorCode == 0) {
        			this.fnAttach_callback = function()
        			{
        				this.FormBtns.Select.click();
        			}

        // 			this.fnJodal("F");
        // 			this.FormBtns.Select.click();

        			this.gfnAlert("현설파일확정이 정상처리되었습니다.", "","","fnAttach_callback");
        		} else {
        			this.gfnAlert(errorMsg);
        		}
        	}
        	else if(svcID == "select_jodal")
        	{
        		if (errorCode == 0) {
        			if(this.dsJodal.rowcount < 1) return;

        			var json = this.gfnArgsToJson(strArg);
        			strArg = json.gubun;

        			var url = "";
        			var param = "";

        			url = "/buyer/bid/pop/bid_sap_middle_pop.do";
        			param += "&P_ZBANF=" + this.dsJodal.getColumn(0, "P_ZBANF");
        			param += "&P_ZCHA=" + this.dsJodal.getColumn(0, "P_ZCHA");
        			param += "&P_ZBHFLAG=" + this.dsJodal.getColumn(0, "P_ZBHFLAG");
        			param += "&P_ZCHGYN=" + this.dsJodal.getColumn(0, "P_ZCHGYN");
        			param += "&P_ZBIDCHA=" + this.dsJodal.getColumn(0, "P_ZBIDCHA");
        			param += "&P_ZHJCD=" + this.dsJodal.getColumn(0, "P_ZHJCD");
        			param += "&P_ZBMCD=" + this.dsJodal.getColumn(0, "P_ZBMCD");
        			param += "&P_ZHDGJ=" + this.dsJodal.getColumn(0, "P_ZHDGJ");
        			param += "&P_ZATTACHYN=" + this.dsJodal.getColumn(0, "P_ZATTACHYN");
        			param += "&P_ZSUVR=" + this.dsJodal.getColumn(0, "P_ZSUVR");
        			param += "&P_APP=" + strArg;
        			param += "&P_USER=" + this.dsJodal.getColumn(0, "P_USER");
        			param += "&P_TONG=" + this.dsJodal.getColumn(0, "P_TONG");
        			param += "&P_ILKWAL=" + this.dsJodal.getColumn(0, "P_ILKWAL");
        			param += "&P_ZHSCONDYN=" + this.dsJodal.getColumn(0, "P_ZHSCONDYN");
        			param += "&P_ZREJCYN=" + this.dsJodal.getColumn(0, "P_ZREJCYN");
        			param += "&P_BIDDATE=" + this.dsJodal.getColumn(0, "P_BIDDATE");
        			param += "&P_ZAPDA=" + this.dsJodal.getColumn(0, "P_ZAPDA");

        			this.gfnOpenEPS(url, param);
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
        this.fnBeforeUserDataSetParam = function(id, dsUserParam, nrow) {
        	if (id == "ccfNO_BID") {
        		if(this.gfnIsNull(this.dsSearch.getColumn(0, "CD_SITE"))) {
        			this.gfnAlert("현장코드를 먼저 입력하세요.");
        			return false;
        		}
        		dsUserParam.setColumn(nrow, "CD_SITE", this.dsSearch.getColumn(0, "CD_SITE")); // CD_SITE
        	}
        	else if (id == "cfCD_LICCOST") {
        		if(this.gfnIsNull(this.dsList.getColumn(0, "CD_COSTCLASS")))
        		{
        			this.gfnAlert("부문을 먼저 입력해주세요.");
        			return false;
        		}

        		dsUserParam.setColumn(nrow, "COSTCLASS", this.dsList.getColumn(0, "CD_COSTCLASS"));

        	}
        	return true;
        }


        this.fnAfterCDTextChanged = function(id, codeFindData){
        	var arr = codeFindData;

        	if(id == "ccfCD_SITE") {
        		this.ccfNO_BID.form.fnCodeFindClear();
        	}
        	else if(id == "ccfID_MANAGER"){
        		if(arr.length > 0){
        			this.dsList.setColumn(0, "NO_MANAGERTEL", arr[0].PHONE);
        		}
        	}
        	else if(id == "ccfID_SITESABUN"){
        		if(arr.length > 0){
        			this.dsList.setColumn(0, "NO_SITETEL", arr[0].PHONE);
        		}
        	}
        	else if(id == "ccfID_MANAGER_01"){
        		if(arr.length > 0){
        			this.dsList.setColumn(0, "NO_MANAGERTEL", arr[0].PHONE);
        		}
        	}
        	else if(id == "ccfID_SITESABUN_01"){
        		if(arr.length > 0){
        			this.dsList.setColumn(0, "NO_SITETEL", arr[0].PHONE);
        		}
        	}
        	else if(id == "ccfID_BIDCOORD"){
        		if(arr.length > 0){
        			this.dsList.setColumn(0, "NO_BIDCOORDITEL", arr[0].PHONE);
        			this.dsList.setColumn(0, "EM_BIDCOORDI", arr[0].ID_EMAIL);
        		}
        	}
        	else if(id == "ccfID_BIDDAM1"){
        		if(arr.length > 0){
        			this.dsList.setColumn(0, "NO_BIDDAM1TEL", arr[0].PHONE);
        			this.dsList.setColumn(0, "EM_BIDDAM1", arr[0].ID_EMAIL);
        		}
        	}
        	else if(id == "ccfID_BIDDAM2"){
        		if(arr.length > 0){
        			this.dsList.setColumn(0, "NO_BIDDAM2TEL", arr[0].PHONE);
        			this.dsList.setColumn(0, "EM_BIDDAM2", arr[0].ID_EMAIL);
        		}
        	}
        	else if(id == "ccfID_QUESTION"){
        		if(arr.length > 0){
        			this.dsList.setColumn(0, "NO_QUESTIONTEL", arr[0].PHONE);
        			this.dsList.setColumn(0, "EM_QUESTION", arr[0].ID_EMAIL);
        		}
        	}
        };

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
        		this.dsList.clearData();	// 싱글폼데이터 초기화
        		this.dsList2.clearData();
        	}
        };

        this.dsList_onvaluechanged = function(obj,e)
        {
        	if(e.oldvalue != e.newvalue) {
        		this.gfnSetFormStatus(this, "U");	// 폼상태 초기화

        		// 현설일자외에 다른 싱글폼 데이터를 수정시에는 this.singFormStat 값을 Q로 초기화 한다
        		if(e.columnid != "DT_EXPLAIN"){
        			this.singFormStat = "Q";
        		}

        		this.dsList.set_enableevent(false);
        		// 공구연면적합 자동산식.
        		var site1 = nexacro.toNumber(this.dsList.getColumn(0, "AREA_SITE1"),0);
        		var site2 = nexacro.toNumber(this.dsList.getColumn(0, "AREA_SITE2"),0);
        		var site3 = nexacro.toNumber(this.dsList.getColumn(0, "AREA_SITE3"),0);
        		var site4 = nexacro.toNumber(this.dsList.getColumn(0, "AREA_SITE4"),0);

        		switch(e.columnid)
        		{
        			case "AREA_SITE1": this.dsList.setColumn(0, "AREA_SITEALL", nexacro.toNumber(e.newvalue,0) + site2 + site3 + site4); break;
        			case "AREA_SITE2": this.dsList.setColumn(0, "AREA_SITEALL", nexacro.toNumber(e.newvalue,0) + site1 + site3 + site4); break;
        			case "AREA_SITE3": this.dsList.setColumn(0, "AREA_SITEALL", nexacro.toNumber(e.newvalue,0) + site2 + site1 + site4); break;
        			case "AREA_SITE4": this.dsList.setColumn(0, "AREA_SITEALL", nexacro.toNumber(e.newvalue,0) + site2 + site3 + site1); break;
        		}

        		this.dsList.set_enableevent(true);

        		if(e.columnid == "DS_CONTMETHOD")
        		{
        			if(e.newvalue == "40" || e.newvalue == "50")
        			{
        				this.divData.form.divData01.form.cfCD_LICCOST.CodeFindName = "DMX_CFLICCOST";
        				this.divData.form.divData01.form.cfCD_COSTCLASS.CodeFindName = "CF_CODE_DM_H01";
        			}
        			else
        			{
        				this.divData.form.divData01.form.cfCD_LICCOST.CodeFindName = "DCX_CFLICCOST_01";
        			    this.divData.form.divData01.form.cfCD_COSTCLASS.CodeFindName = "DCX_CFCOSTCLASS_01";
        			}

        			this.divData.form.divData01.form.cfCD_LICCOST.form.fnCodeFindClear();
        			this.divData.form.divData01.form.cfCD_COSTCLASS.form.fnCodeFindClear();
        		}
        		else if(e.columnid == "CD_COSTCLASS")
        		{
        			this.divData.form.divData01.form.cfCD_LICCOST.form.fnCodeFindClear();
        		}
        		else if(e.columnid == "TY_TAX")
        		{
        			this.fnCheckRT_TAX(e.newvalue);
        		}
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

        this.divData_tabData_onchanged = function(obj,e)
        {
        	if(e.postindex == 2) {
        		this.divData.form.tabData.set_minheight(520);
        	}
        	this.divData.form.resetScroll();
        };

        this.fnSetCombo = function()
        {
        	this.dsCombo = new Dataset();
        	this.dsCombo.addColumn("CD_SYSTEM", "string");
        	this.dsCombo.addColumn("CD_TYPE", "string");

        	this.dsCombo.addRow();
        	this.dsCombo.setColumn(0, "CD_SYSTEM", "DC");
        	this.dsCombo.setColumn(0, "CD_TYPE", "53");

        	this.dsCombo.addRow();
        	this.dsCombo.setColumn(1, "CD_SYSTEM", "DC");
        	this.dsCombo.setColumn(1, "CD_TYPE", "50");

        	this.dsCombo.addRow();
        	this.dsCombo.setColumn(2, "CD_SYSTEM", "DC");
        	this.dsCombo.setColumn(2, "CD_TYPE", "C07");

        	this.dsCombo.addRow();
        	this.dsCombo.setColumn(3, "CD_SYSTEM", "DC");
        	this.dsCombo.setColumn(3, "CD_TYPE", "C15");

        	this.dsCombo.addRow();
        	this.dsCombo.setColumn(4, "CD_SYSTEM", "DC");
        	this.dsCombo.setColumn(4, "CD_TYPE", "58");

        	this.dsCombo.addRow();
        	this.dsCombo.setColumn(5, "CD_SYSTEM", "DC");
        	this.dsCombo.setColumn(5, "CD_TYPE", "C31");

        	var strSvcId    = "combo";
        	var strSvcType  = "select";
        	var inProc		= "_dsProc";
        	var inData      = "combo=dsCombo";
        	var outData     = "dsTY_ACCOUNT=combo0 dsDS_CONTMETHOD=combo1 dsTY_BID=combo2 dsONOFF_EXPLAIN=combo3 dsONOFF=combo4 dsTY_RETIRE_BUGEUM=combo5";
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
        	param.NO_BID = this.dsSearch.getColumn(0, "NO_BID");
        	param.DS_BID = this.divSearch.form.ccfNO_BID.form.DSTextBox.text;

        	this.gfnFormOpen(this.FormInfo.CD_MODULE, "DCB_INDIRECT_SITE_REG", "", param);
        }

        this.fnPRAttach = function(obj,e) {
        	if (!this.fnSelectValidate()) return false;

        	var fileManager = {};
        	fileManager.CD_GUBUN = "DC49";
        	fileManager.CD_DIR = [this.dsSearch.getColumn(0, "NO_BID"), "001"];
        	fileManager.IS_READONLY = false;
        	this.gfnFileManager(fileManager, "fnFileCallback");
        }

        this.fnPRAttach1 = function(obj,e) {
        	if (!this.fnSelectValidate()) return false;

        	var fileManager = {};
        	fileManager.CD_GUBUN = "DC50";
        	fileManager.CD_DIR = [this.dsSearch.getColumn(0, "NO_BID"), "001"];
        	fileManager.IS_READONLY = false;
        	this.gfnFileManager(fileManager, "fnFileCallback");
        }

        this.fnPRAttach2 = function(obj,e) {
        	var param = {};

        	param.CD_SITE = this.dsSearch.getColumn(0, "CD_SITE");
        	param.DS_SITE = this.divSearch.form.ccfCD_SITE.form.DSTextBox.text;
        	param.NO_PR = this.dsSearch.getColumn(0, "NO_BID");
        	param.DS_PR = this.divSearch.form.ccfNO_BID.form.DSTextBox.text;

        	this.gfnFormOpen(this.FormInfo.CD_MODULE, "DCB_PR_EXPLAIN_FILE", "", param);
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
        	this.dsSelectEPS.addColumn("NO_BID", "string");		// ERP발주(입찰)번호
        	this.dsSelectEPS.addColumn("YN_UNION", "string");	// 통합입찰여부
        	this.dsSelectEPS.addColumn("ID_USER", "string");

        	this.dsSelectEPS.addRow();
        	this.dsSelectEPS.setColumn(0, "NO_BID", this.dsSearch.getColumn(0, "NO_BID"));
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
        	        + "\n입찰번호 : " + this.dsSearch.getColumn(0, "NO_BID") + " [" + this.ccfNO_BID.form.DSTextBox.text + "]"
        			+ "\n\n발주의뢰를 진행하시겠습니까?";
        	this.gfnConfirm(msg, "fnReq_callback", "A");
        }

        this.fnReqCancel = function(obj,e) {
        	if (!this.fnSelectValidate()) return false;

        	var msg = "현장코드 : " + this.dsSearch.getColumn(0, "CD_SITE") + " [" + this.ccfCD_SITE.form.DSTextBox.text + "]"
        	        + "\n입찰번호 : " + this.dsSearch.getColumn(0, "NO_BID") + " [" + this.ccfNO_BID.form.DSTextBox.text + "]"
        			+ "\n\n발주의뢰취소를 진행하시겠습니까?";
        	this.gfnConfirm(msg, "fnReq_callback", "R");
        }

        this.fnReq_callback = function(strId, val)
        {
        	if(val == true) {
        		this.dsExecute.clearData();

        		var nrow = this.dsExecute.addRow();

        		this.dsExecute.setColumn(nrow, "CD_SITE", this.dsSearch.getColumn(0, "CD_SITE"));
        		this.dsExecute.setColumn(nrow, "NO_PR", this.dsSearch.getColumn(0, "NO_BID"));
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
        	param.NO_BID = this.dsSearch.getColumn(0, "NO_BID");
        	param.DS_SUBCON = this.divSearch.form.ccfNO_BID.form.DSTextBox.text;

        	this.gfnFormOpen(this.FormInfo.CD_MODULE, "DCB_RECOMMEND_ETC_REQ", "", param);
        }
        //
        // // 탭 위의 확장버튼들 클릭 이벤트.
        // // 현설참석자명단
        // this.divData_btn00_onclick = function(obj:nexacro.Button,e:nexacro.ClickEventInfo)
        // {
        // 	if(this.gfnIsNull(this.dsList.getColumn(0, "NO_BID"))) return;
        //
        // 	var fileManager = {};
        // 	fileManager.CD_GUBUN = "DC51";
        // 	fileManager.CD_DIR = [ this.dsList.getColumn(0, "NO_BID") ];
        // 	// CD_DIR 만 지정시 CD_DIR 배열 순대로 키1,키2,키3 까지 자동지정
        // 	// 저장되는 디렉토리와 키값이 다른경우 CD_REF 추가로 사용
        // 	//fileManager.CD_REF = [ "A1" ];
        // 	// 권한 및 상태에 따라 업로드,삭제 가능여부 지정 (기본: true)
        // 	fileManager.IS_READONLY = false;
        //
        // 	this.gfnFileManager(fileManager, "fnFileCallback");
        // };

        this.fnFileCallback = function() {
        };

        this.divData_btn01_onclick = function(obj,e)
        {
        	this.fnJodal("Q");
        };

        // 현설참석여부확인
        this.fnAttendUpdate = function(obj,e)
        {
        	if(this.gfnIsNull(this.dsList.getColumn(0, "NO_BID"))) return;

        	this.dsAttendUpdate = new Dataset();
        	this.dsAttendUpdate.addColumn("NO_BID", "string");
        	this.dsAttendUpdate.addColumn("ID_USER", "string");

        	this.dsAttendUpdate.clearData();
        	var nrow = this.dsAttendUpdate.addRow();

        	this.dsAttendUpdate.setColumn(nrow, "NO_BID", this.dsList.getColumn(0, "NO_BID"));
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

        // 현설파일확정
        this.divData_btn04_onclick = function(obj,e)
        {
        	//if(this.gfnIsNull(this.dsList.getColumn(0, "NO_BID"))) return;

        	this.dsAttachUpdate = new Dataset();
        	this.dsAttachUpdate.addColumn("NO_PR", "string");

        	this.dsAttachUpdate.clearData();
        	var nrow = this.dsAttachUpdate.addRow();

        	this.dsAttachUpdate.setColumn(nrow, "NO_PR", this.dsSearch.getColumn(0, "NO_BID"));

        	if (this.dsAttachUpdate.rowcount == 0) return;

        	var strSvcId    = "update_attach";
        	var strSvcType  = "save";
        	var inProc		= "_dsProc";
        	var inData      = "update_attach=dsAttachUpdate";
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

        this.divData_btn03_onclick = function(obj,e)
        {

        };

        this.dsTempTime_onvaluechanged = function(obj,e)
        {
        	if(e.oldvalue != e.newvalue) {
        		this.gfnSetFormStatus(this, "U");	// 폼상태 초기화
        	}
        };


        this.fnJodal = function(type)
        {
        	if (!this.fnSelectValidate()) return false;

        	this.dsSelectJodal.clearData();
        	this.dsSelectJodal.addRow();

        	this.dsSelectJodal.setColumn(0, "NO_BID", this.dsSearch.getColumn(0, "NO_BID"));
        	this.dsSelectJodal.setColumn(0, "YN_UNION", this.dsSearch.getColumn(0, "YN_UNION"));
        	this.dsSelectJodal.setColumn(0, "ID_USER", this.AuthClient.ID_USER);

        	var strSvcId    = "select_jodal";
        	var strSvcType  = "grid";
        	var inProc		= "_dsProc";
        	var inData      = "select_jodal=dsSelectJodal";
        	var outData     = "dsJodal=select_jodal0";
        	var strArg      = "gubun="+ type;
        	var callBackFnc = "fnCallback";

        	this.gfnTransaction( strSvcId , 	// transaction을 구분하기 위한 svc id값
        						strSvcType , 	// transaction을 요청할 구분
        						inProc,			// Procedure 정보 Dataset 이름
        						inData , 		// 입력값으로 보낼 dataset id , a=b형태로 실제이름과 입력이름을 매칭
        						outData , 		// 처리결과값으로 받을 dataset id, a=b형태로 실제이름과 입력이름을 매칭
        						strArg, 		// 입력값으로 보낼 arguments, strFormData="20120607"
        						callBackFnc); // 통신방법 정의 [생략가능]
        }

        // 현장설명회 탭에서 현설일자 변경시 싱글폼 데이터가 저장 되도록한다
        this.divData_tabData_tab1_div00_tclDT_EXPLAIN_onchanged = function(obj,e)
        {
        	this.singFormStat = "Q";
        };


        this.fnBtnCheckAll = function()
        {
        // 	this.gfnBtnCheck(this.btnIndirect, this.dsList);
         	this.gfnBtnCheck(this.btnPRAttach, this.dsList);
         	this.gfnBtnCheck(this.btnReq,this.dsList);
         	this.gfnBtnCheck(this.btnReqCancel, this.dsList);
        // 	this.gfnBtnCheck(this.btnReqETC, this.dsList);
         	this.gfnBtnCheck(this.btnPRAttach2, this.dsList);
        // 	this.gfnBtnCheck(this.btnAttendUpdate, this.dsList);
        // 	this.gfnBtnCheck(this.btnNonAttendMail, this.dsList);
        }

        this.fnVendorAdd = function(obj,e) {
        	var param = {};

        	param.CD_SITE = this.dsSearch.getColumn(0, "CD_SITE");
        	param.DS_SITE = this.divSearch.form.ccfCD_SITE.form.DSTextBox.text;
        	param.NO_BID = this.dsSearch.getColumn(0, "NO_BID");
        	param.DS_SUBCON = this.divSearch.form.ccfNO_BID.form.DSTextBox.text;
        	param.CD_COSTCLASS = this.dsList.getColumn(0, "CD_COSTCLASS");
        	param.CD_LICCOST = this.dsList.getColumn(0, "CD_LICCOST");
        	param.CD_MODULE = "DC";

        	this.gfnFormOpen(this.FormInfo.CD_MODULE, "DCB_RECOMMEND_SITE_DLG", "", param, 1200, 700);
        }
        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.form_onload,this);
            this.divData.form.tabData.addEventHandler("onchanged",this.divData_tabData_onchanged,this);
            this.divData.form.btn04.addEventHandler("onclick",this.divData_btn04_onclick,this);
            this.divData.form.btn01.addEventHandler("onclick",this.divData_btn01_onclick,this);
            this.dsList.addEventHandler("onvaluechanged",this.dsList_onvaluechanged,this);
            this.dsSearch.addEventHandler("onvaluechanged",this.dsSearch_onvaluechanged,this);
            this.dsTempTime.addEventHandler("onvaluechanged",this.dsTempTime_onvaluechanged,this);
        };
        this.loadIncludeScript("DCB_ORDERPLANSR_SITE_EDIT.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
