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
            this.set_titletext("주택-프로젝트관리");
            this.set_scrolltype("both");
            if (Form == this.constructor)
            {
                this._setFormPosition(1290,990);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("_dsProc", this);
            obj._setContents("<ColumnInfo><Column id=\"TARGET\" type=\"STRING\" size=\"256\"/><Column id=\"SP\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"TARGET\">combo</Col><Col id=\"SP\">DZXPR_COMBO_SELECT</Col></Row><Row><Col id=\"TARGET\">save0</Col><Col id=\"SP\">DOAPR_OVS_PROJ_MERGE</Col></Row><Row><Col id=\"TARGET\">select0</Col><Col id=\"SP\">DOAPR_OVS_PROJ_SELECT</Col></Row><Row><Col id=\"TARGET\">delete0</Col><Col id=\"SP\">DOAPR_OVS_PROJ_DELETE</Col></Row><Row><Col id=\"TARGET\">select1</Col><Col id=\"SP\">DOAPR_CIVL_PROJ_FIELD_EXPL_SELECT</Col></Row><Row><Col id=\"TARGET\">save2</Col><Col id=\"SP\">DOAPR_CIVL_PROJ_UPDATE</Col></Row><Row><Col id=\"TARGET\">select2</Col><Col id=\"SP\">DOAPR_CIVL_PROJ_DSN_CONSOR_MST_SELECT</Col></Row><Row><Col id=\"TARGET\">delete2</Col><Col id=\"SP\">DOAPR_CIVL_PROJ_DSN_CONSOR_MST_SAVE</Col></Row><Row><Col id=\"SP\">DOAPR_CIVL_PROJ_BID_RLT_SELECT</Col><Col id=\"TARGET\">select3</Col></Row><Row><Col id=\"TARGET\">select4</Col><Col id=\"SP\">DOAPR_ARCH_CO_CONTRCT</Col></Row><Row><Col id=\"TARGET\">select5</Col><Col id=\"SP\">DOAPR_ARCH_CONCERN</Col></Row><Row><Col id=\"TARGET\">select6</Col><Col id=\"SP\">DOAPR_ARCH_CHARGE</Col></Row><Row><Col id=\"TARGET\">select7</Col><Col id=\"SP\">DOAPR_CIVL_PROJ_CO_BID_SELECT</Col></Row><Row><Col id=\"TARGET\">select8</Col><Col id=\"SP\">DOAPR_CIVL_PROJ_CO_CONTRCT_BID_SELECT</Col></Row><Row><Col id=\"TARGET\">select9</Col><Col id=\"SP\">DOBPR_CIVL_PROJ_AM_DCID_SELECT</Col></Row><Row><Col id=\"TARGET\">selectCharge</Col><Col id=\"SP\">DOAPR_PROJ_YNCHARGE_SELECT</Col></Row><Row><Col id=\"TARGET\">updateHqCreate</Col><Col id=\"SP\">DOZPR_HQ_CODE_CREATE</Col></Row><Row><Col id=\"TARGET\">appChk1</Col><Col id=\"SP\">DOBPR_APP_DOB01_CHECK</Col></Row><Row><Col id=\"TARGET\">appSelect1</Col><Col id=\"SP\">DOBPR_APP_DOB01_SELECT</Col></Row><Row><Col id=\"TARGET\">appChk2</Col><Col id=\"SP\">DOBPR_APP_DOB02_CHECK</Col></Row><Row><Col id=\"TARGET\">appSelect2</Col><Col id=\"SP\">DOBPR_APP_DOB02_SELECT</Col></Row><Row><Col id=\"TARGET\">select10</Col><Col id=\"SP\">DOAPR_CIVL_DSGN_PROJ_SELECT</Col></Row><Row><Col id=\"TARGET\">appChk3</Col><Col id=\"SP\">DOBPR_APP_DOB03_CHECK</Col></Row><Row><Col id=\"TARGET\">appSelect3</Col><Col id=\"SP\">DOBPR_APP_DOB03_SELECT</Col></Row><Row><Col id=\"TARGET\">appChk4</Col><Col id=\"SP\">DOBPR_APP_DOB04_CHECK</Col></Row><Row><Col id=\"TARGET\">appSelect4</Col><Col id=\"SP\">DOBPR_APP_DOB04_SELECT</Col></Row><Row><Col id=\"TARGET\">appChk5</Col><Col id=\"SP\">DOBPR_APP_DOB05_CHECK</Col></Row><Row><Col id=\"TARGET\">appSelect5</Col><Col id=\"SP\">DOBPR_APP_DOB05_SELECT</Col></Row><Row><Col id=\"TARGET\">appChk6</Col><Col id=\"SP\">DOBPR_APP_DOB06_CHECK</Col></Row><Row><Col id=\"TARGET\">appSelect6</Col><Col id=\"SP\">DOBPR_APP_DOB06_SELECT</Col></Row><Row><Col id=\"TARGET\">select11</Col><Col id=\"SP\">DOAPR_PROJ_AUTH</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsSearch", this);
            obj._setContents("<ColumnInfo><Column id=\"CD_PROJ\" type=\"STRING\" size=\"256\"/><Column id=\"DS_PROJ\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row/></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsBase", this);
            obj._setContents("<ColumnInfo><Column id=\"CD_PROJ\" type=\"STRING\" size=\"256\"/><Column id=\"DS_PROJ\" type=\"STRING\" size=\"256\"/><Column id=\"CD_CV_GO\" type=\"STRING\" size=\"256\"/><Column id=\"CD_CLS\" type=\"STRING\" size=\"256\"/><Column id=\"CD_CLS_CONST\" type=\"STRING\" size=\"256\"/><Column id=\"DS_CLS_CONST\" type=\"STRING\" size=\"256\"/><Column id=\"TY_ORD\" type=\"STRING\" size=\"256\"/><Column id=\"DS_ORD\" type=\"STRING\" size=\"256\"/><Column id=\"YN_ORD\" type=\"STRING\" size=\"256\"/><Column id=\"CD_PRC_BID\" type=\"STRING\" size=\"256\"/><Column id=\"NO_TERM\" type=\"STRING\" size=\"256\"/><Column id=\"CD_LOC\" type=\"STRING\" size=\"256\"/><Column id=\"CD_ZIP\" type=\"STRING\" size=\"256\"/><Column id=\"DS_ADDR1\" type=\"STRING\" size=\"256\"/><Column id=\"DS_ADDR2\" type=\"STRING\" size=\"256\"/><Column id=\"AM_CONST\" type=\"BIGDECIMAL\" size=\"256\"/><Column id=\"AM_BIZ\" type=\"BIGDECIMAL\" size=\"256\"/><Column id=\"DS_RM_CONST\" type=\"STRING\" size=\"256\"/><Column id=\"DT_BID_PUB\" type=\"STRING\" size=\"256\"/><Column id=\"DT_PQ\" type=\"STRING\" size=\"256\"/><Column id=\"HM_PQ\" type=\"STRING\" size=\"256\"/><Column id=\"H_PQ\" type=\"STRING\" size=\"256\"/><Column id=\"M_PQ\" type=\"STRING\" size=\"256\"/><Column id=\"DT_AGREE\" type=\"STRING\" size=\"256\"/><Column id=\"HM_AGREE\" type=\"STRING\" size=\"256\"/><Column id=\"H_AGREE\" type=\"STRING\" size=\"256\"/><Column id=\"M_AGREE\" type=\"STRING\" size=\"256\"/><Column id=\"DT_SITE_EXPL\" type=\"STRING\" size=\"256\"/><Column id=\"HM_SITE_EXPL\" type=\"STRING\" size=\"256\"/><Column id=\"H_SITE_EXPL\" type=\"STRING\" size=\"256\"/><Column id=\"M_SITE_EXPL\" type=\"STRING\" size=\"256\"/><Column id=\"DT_BID_REG\" type=\"STRING\" size=\"256\"/><Column id=\"HM_BID_REG\" type=\"STRING\" size=\"256\"/><Column id=\"H_BID_REG\" type=\"STRING\" size=\"256\"/><Column id=\"M_BID_REG\" type=\"STRING\" size=\"256\"/><Column id=\"DT_BID\" type=\"STRING\" size=\"256\"/><Column id=\"HM_BID\" type=\"STRING\" size=\"256\"/><Column id=\"H_BID\" type=\"STRING\" size=\"256\"/><Column id=\"M_BID\" type=\"STRING\" size=\"256\"/><Column id=\"DT_BID_OPEN\" type=\"STRING\" size=\"256\"/><Column id=\"HM_BID_OPEN\" type=\"STRING\" size=\"256\"/><Column id=\"H_BID_OPEN\" type=\"STRING\" size=\"256\"/><Column id=\"M_BID_OPEN\" type=\"STRING\" size=\"256\"/><Column id=\"DT_REVIEW\" type=\"STRING\" size=\"256\"/><Column id=\"HM_REVIEW\" type=\"STRING\" size=\"256\"/><Column id=\"H_REVIEW\" type=\"STRING\" size=\"256\"/><Column id=\"M_REVIEW\" type=\"STRING\" size=\"256\"/><Column id=\"DT_BID_WIN\" type=\"STRING\" size=\"256\"/><Column id=\"HM_BID_WIN\" type=\"STRING\" size=\"256\"/><Column id=\"H_BID_WIN\" type=\"STRING\" size=\"256\"/><Column id=\"M_BID_WIN\" type=\"STRING\" size=\"256\"/><Column id=\"DT_SC_COMPL\" type=\"STRING\" size=\"256\"/><Column id=\"DS_BID_LIC\" type=\"STRING\" size=\"256\"/><Column id=\"DS_BID_CONST\" type=\"STRING\" size=\"256\"/><Column id=\"DS_BID_CO\" type=\"STRING\" size=\"256\"/><Column id=\"DS_EXPL_AREA\" type=\"STRING\" size=\"256\"/><Column id=\"DS_SITE_EXPL\" type=\"STRING\" size=\"256\"/><Column id=\"AM_ESTM\" type=\"BIGDECIMAL\" size=\"256\"/><Column id=\"ID_USER_EXPL\" type=\"STRING\" size=\"256\"/><Column id=\"DS_USER_EXPL\" type=\"STRING\" size=\"256\"/><Column id=\"ID_FILE_ATTCH\" type=\"STRING\" size=\"256\"/><Column id=\"ID_USER\" type=\"STRING\" size=\"256\"/><Column id=\"CD_DEPT\" type=\"STRING\" size=\"256\"/><Column id=\"DS_DEPT\" type=\"STRING\" size=\"256\"/><Column id=\"DS_RM_OP\" type=\"STRING\" size=\"256\"/><Column id=\"OUT_DATA\" type=\"STRING\" size=\"256\"/><Column id=\"ST_APPR\" type=\"STRING\" size=\"256\"/><Column id=\"NM_ST_APPR\" type=\"STRING\" size=\"256\"/><Column id=\"ST_APPR2\" type=\"STRING\" size=\"256\"/><Column id=\"NM_ST_APPR2\" type=\"STRING\" size=\"256\"/><Column id=\"TY_MJ_CONST\" type=\"STRING\" size=\"256\"/><Column id=\"NO_BID_CO\" type=\"INT\" size=\"256\"/><Column id=\"NO_DSN_SCO\" type=\"BIGDECIMAL\" size=\"256\"/><Column id=\"NO_COST_SCO\" type=\"BIGDECIMAL\" size=\"256\"/><Column id=\"NO_DSN_COST_SCO\" type=\"BIGDECIMAL\" size=\"256\"/><Column id=\"YN_SAUP\" type=\"STRING\" size=\"256\"/><Column id=\"CD_CORP\" type=\"STRING\" size=\"256\"/><Column id=\"CD_SAUP\" type=\"STRING\" size=\"256\"/><Column id=\"DS_CORP\" type=\"STRING\" size=\"256\"/><Column id=\"DS_SAUP\" type=\"STRING\" size=\"256\"/><Column id=\"NM_COUNTRY\" type=\"STRING\" size=\"256\"/><Column id=\"CD_CURRENCY\" type=\"STRING\" size=\"256\"/><Column id=\"CD_PERMIT_STAT\" type=\"STRING\" size=\"256\"/><Column id=\"AM_AREA\" type=\"BIGDECIMAL\" size=\"256\"/><Column id=\"AM_LAND\" type=\"BIGDECIMAL\" size=\"256\"/><Column id=\"RT_SHOP\" type=\"BIGDECIMAL\" size=\"256\"/><Column id=\"SZ_SHOP\" type=\"BIGDECIMAL\" size=\"256\"/><Column id=\"SZ_SHOP_M\" type=\"BIGDECIMAL\" size=\"256\"/><Column id=\"SZ_LAND_UNDR\" type=\"BIGDECIMAL\" size=\"256\"/><Column id=\"SZ_LAND_UNDR_M\" type=\"BIGDECIMAL\" size=\"256\"/><Column id=\"SZ_LAND\" type=\"BIGDECIMAL\" size=\"256\"/><Column id=\"SZ_LAND_M\" type=\"BIGDECIMAL\" size=\"256\"/><Column id=\"CD_LAND_STAT\" type=\"STRING\" size=\"256\"/><Column id=\"RT_ARCH\" type=\"BIGDECIMAL\" size=\"256\"/><Column id=\"SZ_ARCH\" type=\"BIGDECIMAL\" size=\"256\"/><Column id=\"SZ_ARCH_M\" type=\"BIGDECIMAL\" size=\"256\"/><Column id=\"RT_LAND_OVR\" type=\"BIGDECIMAL\" size=\"256\"/><Column id=\"SZ_LAND_OVR\" type=\"BIGDECIMAL\" size=\"256\"/><Column id=\"SZ_LAND_OVR_M\" type=\"BIGDECIMAL\" size=\"256\"/><Column id=\"SZ_AREA\" type=\"BIGDECIMAL\" size=\"256\"/><Column id=\"SZ_AREA_M\" type=\"BIGDECIMAL\" size=\"256\"/><Column id=\"TY_STATUS\" type=\"STRING\" size=\"256\"/><Column id=\"RM_END\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row/></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsBaseRst", this);
            obj._setContents("");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsDetail1", this);
            obj._setContents("<ColumnInfo><Column id=\"CD_PROJ\" type=\"STRING\" size=\"256\"/><Column id=\"DT_SITE_EXPL\" type=\"STRING\" size=\"256\"/><Column id=\"ID_USER_EXPL\" type=\"STRING\" size=\"256\"/><Column id=\"DS_USER_EXPL\" type=\"STRING\" size=\"256\"/><Column id=\"DS_EXPL\" type=\"STRING\" size=\"256\"/><Column id=\"DS_INCU_CONST\" type=\"STRING\" size=\"256\"/><Column id=\"DS_EXCP_CONST\" type=\"STRING\" size=\"256\"/><Column id=\"DS_MAT_PAY\" type=\"STRING\" size=\"256\"/><Column id=\"DS_RM_SP\" type=\"STRING\" size=\"256\"/><Column id=\"ID_FILE_ATTCH\" type=\"STRING\" size=\"256\"/><Column id=\"ST_APPR\" type=\"STRING\" size=\"256\"/><Column id=\"NM_ST_APPR\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsDetail2", this);
            obj._setContents("<ColumnInfo><Column id=\"CD_PROJ\" type=\"STRING\" size=\"256\"/><Column id=\"DT_BID_RECOG\" type=\"STRING\" size=\"256\"/><Column id=\"AM_DESIGN\" type=\"STRING\" size=\"256\"/><Column id=\"DT_FIX\" type=\"STRING\" size=\"256\"/><Column id=\"AM_FIX_SUP\" type=\"STRING\" size=\"256\"/><Column id=\"AM_FIX_VAT\" type=\"STRING\" size=\"256\"/><Column id=\"AM_ESTM_CAL\" type=\"STRING\" size=\"256\"/><Column id=\"AM_ESTM_SUP\" type=\"STRING\" size=\"256\"/><Column id=\"AM_ESTM_VAT\" type=\"STRING\" size=\"256\"/><Column id=\"AM_BID_CAL\" type=\"STRING\" size=\"256\"/><Column id=\"AM_BID_SUP\" type=\"STRING\" size=\"256\"/><Column id=\"AM_BID_VAT\" type=\"STRING\" size=\"256\"/><Column id=\"NO_BID_CO\" type=\"STRING\" size=\"256\"/><Column id=\"NO_FCT\" type=\"STRING\" size=\"256\"/><Column id=\"AM_ESTM\" type=\"STRING\" size=\"256\"/><Column id=\"AM_INIT\" type=\"STRING\" size=\"256\"/><Column id=\"RT_INIT\" type=\"STRING\" size=\"256\"/><Column id=\"RT_BID\" type=\"STRING\" size=\"256\"/><Column id=\"RT_SC\" type=\"STRING\" size=\"256\"/><Column id=\"AM_BID_OUR\" type=\"STRING\" size=\"256\"/><Column id=\"RT_BID_OUR\" type=\"STRING\" size=\"256\"/><Column id=\"DS_BID_RLT\" type=\"STRING\" size=\"256\"/><Column id=\"TY_BID_RLT\" type=\"STRING\" size=\"256\"/><Column id=\"DT_CONT_SCHD\" type=\"STRING\" size=\"256\"/><Column id=\"DS_ENTY\" type=\"STRING\" size=\"256\"/><Column id=\"TY_ENTY\" type=\"STRING\" size=\"256\"/><Column id=\"DS_OPNI\" type=\"STRING\" size=\"256\"/><Column id=\"ST_APPR\" type=\"STRING\" size=\"256\"/><Column id=\"NM_ST_APPR\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row/></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsList1", this);
            obj._setContents("");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsList2", this);
            obj._setContents("");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsList3", this);
            obj._setContents("");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsList4", this);
            obj._setContents("");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsList5", this);
            obj._setContents("");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsList6", this);
            obj._setContents("");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsMinutes", this);
            obj._setContents("<ColumnInfo><Column id=\"CD_CODE\" type=\"STRING\" size=\"256\"/><Column id=\"DS_CODE\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"CD_CODE\">00</Col><Col id=\"DS_CODE\">00</Col></Row><Row><Col id=\"CD_CODE\">10</Col><Col id=\"DS_CODE\">10</Col></Row><Row><Col id=\"CD_CODE\">20</Col><Col id=\"DS_CODE\">20</Col></Row><Row><Col id=\"CD_CODE\">30</Col><Col id=\"DS_CODE\">30</Col></Row><Row><Col id=\"CD_CODE\">40</Col><Col id=\"DS_CODE\">40</Col></Row><Row><Col id=\"CD_CODE\">50</Col><Col id=\"DS_CODE\">50</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dshours", this);
            obj._setContents("<ColumnInfo><Column id=\"CD_CODE\" type=\"STRING\" size=\"256\"/><Column id=\"DS_CODE\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"CD_CODE\">00</Col><Col id=\"DS_CODE\">00</Col></Row><Row><Col id=\"CD_CODE\">01</Col><Col id=\"DS_CODE\">01</Col></Row><Row><Col id=\"CD_CODE\">02</Col><Col id=\"DS_CODE\">02</Col></Row><Row><Col id=\"CD_CODE\">03</Col><Col id=\"DS_CODE\">03</Col></Row><Row><Col id=\"CD_CODE\">04</Col><Col id=\"DS_CODE\">04</Col></Row><Row><Col id=\"CD_CODE\">05</Col><Col id=\"DS_CODE\">05</Col></Row><Row><Col id=\"CD_CODE\">06</Col><Col id=\"DS_CODE\">06</Col></Row><Row><Col id=\"CD_CODE\">07</Col><Col id=\"DS_CODE\">07</Col></Row><Row><Col id=\"CD_CODE\">08</Col><Col id=\"DS_CODE\">08</Col></Row><Row><Col id=\"CD_CODE\">09</Col><Col id=\"DS_CODE\">09</Col></Row><Row><Col id=\"CD_CODE\">10</Col><Col id=\"DS_CODE\">10</Col></Row><Row><Col id=\"CD_CODE\">11</Col><Col id=\"DS_CODE\">11</Col></Row><Row><Col id=\"CD_CODE\">12</Col><Col id=\"DS_CODE\">12</Col></Row><Row><Col id=\"CD_CODE\">13</Col><Col id=\"DS_CODE\">13</Col></Row><Row><Col id=\"CD_CODE\">14</Col><Col id=\"DS_CODE\">14</Col></Row><Row><Col id=\"CD_CODE\">15</Col><Col id=\"DS_CODE\">15</Col></Row><Row><Col id=\"CD_CODE\">16</Col><Col id=\"DS_CODE\">16</Col></Row><Row><Col id=\"CD_CODE\">17</Col><Col id=\"DS_CODE\">17</Col></Row><Row><Col id=\"CD_CODE\">18</Col><Col id=\"DS_CODE\">18</Col></Row><Row><Col id=\"CD_CODE\">19</Col><Col id=\"DS_CODE\">19</Col></Row><Row><Col id=\"CD_CODE\">20</Col><Col id=\"DS_CODE\">20</Col></Row><Row><Col id=\"CD_CODE\">21</Col><Col id=\"DS_CODE\">21</Col></Row><Row><Col id=\"CD_CODE\">22</Col><Col id=\"DS_CODE\">22</Col></Row><Row><Col id=\"CD_CODE\">23</Col><Col id=\"DS_CODE\">23</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsDS_CD_CV_GO", this);
            obj._setContents("");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsDS_CD_CLS", this);
            obj._setContents("");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsDS_CD_PRC_BID", this);
            obj._setContents("");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsCD_LOC", this);
            obj._setContents("");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsRequired", this);
            obj._setContents("<ColumnInfo><Column id=\"CD_FIELD\" type=\"STRING\" size=\"256\"/><Column id=\"DS_FIELD\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"CD_FIELD\">DS_PROJ</Col><Col id=\"DS_FIELD\">프로젝트명</Col></Row><Row><Col id=\"CD_FIELD\">CD_CV_GO</Col><Col id=\"DS_FIELD\">공공/민간</Col></Row><Row><Col id=\"CD_FIELD\">CD_CLS</Col><Col id=\"DS_FIELD\">공사분야</Col></Row><Row><Col id=\"CD_FIELD\">CD_CLS_CONST</Col><Col id=\"DS_FIELD\">상품분류</Col></Row><Row><Col id=\"CD_FIELD\">TY_ORD</Col><Col id=\"DS_FIELD\">발주/사업방식</Col></Row><Row><Col id=\"CD_FIELD\">CD_CORP</Col><Col id=\"DS_FIELD\">법인코드</Col></Row><Row><Col id=\"CD_FIELD\">CD_DEPT</Col><Col id=\"DS_FIELD\">사업관리부서</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsDetail3", this);
            obj._setContents("<ColumnInfo><Column id=\"CD_PROJ\" type=\"STRING\" size=\"256\"/><Column id=\"DS_PROJ\" type=\"STRING\" size=\"256\"/><Column id=\"AM_ESTM\" type=\"BIGDECIMAL\" size=\"256\"/><Column id=\"AM_CONST\" type=\"BIGDECIMAL\" size=\"256\"/><Column id=\"AM_ESTM_CONST\" type=\"BIGDECIMAL\" size=\"256\"/><Column id=\"AM_INIT\" type=\"BIGDECIMAL\" size=\"256\"/><Column id=\"AM_PROJ\" type=\"BIGDECIMAL\" size=\"256\"/><Column id=\"RT_ESTM\" type=\"BIGDECIMAL\" size=\"256\"/><Column id=\"RT_QUAL\" type=\"BIGDECIMAL\" size=\"256\"/><Column id=\"RT_PERPECT\" type=\"BIGDECIMAL\" size=\"256\"/><Column id=\"AM_RST\" type=\"BIGDECIMAL\" size=\"256\"/><Column id=\"DS_RM\" type=\"STRING\" size=\"256\"/><Column id=\"ST_APPR\" type=\"STRING\" size=\"256\"/><Column id=\"NM_ST_APPR\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsRcvYNCharge", this);
            obj._setContents("<ColumnInfo><ConstColumn id=\"YN_EXISTS\" type=\"STRING\" size=\"30\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsAppList", this);
            obj._setContents("");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsDetail4", this);
            obj._setContents("<ColumnInfo><Column id=\"ST_APPR\" type=\"STRING\" size=\"256\"/><Column id=\"NM_ST_APPR\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsTY_MJ_CONST", this);
            obj._setContents("");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsYN_SAUP", this);
            obj._setContents("<ColumnInfo><ConstColumn id=\"YN_EXISTS\" type=\"STRING\" size=\"30\"/><Column id=\"CD_CODE\" type=\"STRING\" size=\"256\"/><Column id=\"DS_CODE\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"CD_CODE\">Y</Col><Col id=\"DS_CODE\">관리</Col></Row><Row><Col id=\"CD_CODE\">N</Col><Col id=\"DS_CODE\">미관리</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsList6_Auth", this);
            obj._setContents("");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsCD_PERMIT_STAT", this);
            obj._setContents("");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsCD_LAND_STAT", this);
            obj._setContents("");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsTY_STATUS", this);
            obj._setContents("");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Div("divSearch","0.0","10.0",null,"78.0","0",null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_cssclass("div_SEARCH_Bg");
            obj.set_text("");
            this.addChild(obj.name, obj);

            obj = new Static("staCD_PROJ","0.0","10.0","118.0","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("0");
            obj.set_text("프로젝트코드");
            obj.set_cssclass("sta_WF_SchLabelE");
            this.divSearch.addChild(obj.name, obj);

            obj = new Edit("ctxtCD_PROJ","0.0","staCD_PROJ:10.0","66","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("1");
            obj.set_value("");
            obj.set_readonly("true");
            this.divSearch.addChild(obj.name, obj);

            obj = new Edit("ctxtDS_PROJ","ctxtCD_PROJ:0.0","staCD_PROJ:10.0","500","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("2");
            obj.set_value("");
            this.divSearch.addChild(obj.name, obj);

            obj = new Div("divData","0","50",null,null,"0","0",null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_cssclass("div_DATA_Bg");
            this.addChild(obj.name, obj);

            obj = new Tab("tabData","0","0",null,null,"0","0",null,null,null,null,this.divData.form);
            obj.set_taborder("0");
            obj.set_tabindex("0");
            this.divData.addChild(obj.name, obj);

            obj = new Tabpage("tab1",this.divData.form.tabData);
            obj.set_text("기본정보");
            this.divData.form.tabData.addChild(obj.name, obj);

            obj = new Static("staDS_RM_CONST","5","188","120","90",null,null,null,null,null,null,this.divData.form.tabData.tab1.form);
            obj.set_taborder("56");
            obj.set_text("공사개요");
            obj.set_cssclass("sta_WF_tablelabel");
            obj.set_textAlign("left");
            this.divData.form.tabData.tab1.addChild(obj.name, obj);

            obj = new Static("staCD_CLS_CONST","855","72","120","30",null,null,null,null,null,null,this.divData.form.tabData.tab1.form);
            obj.set_taborder("76");
            obj.set_text("상품분류");
            obj.set_textAlign("left");
            obj.set_cssclass("sta_WF_tablelabelE");
            this.divData.form.tabData.tab1.addChild(obj.name, obj);

            obj = new Static("sta04","974","72","308","30",null,null,null,null,null,null,this.divData.form.tabData.tab1.form);
            obj.set_taborder("77");
            obj.set_cssclass("sta_WF_tablebg");
            this.divData.form.tabData.tab1.addChild(obj.name, obj);

            obj = new Static("staNO_TERM","855","101","120","30",null,null,null,null,null,null,this.divData.form.tabData.tab1.form);
            obj.set_taborder("78");
            obj.set_text("공사기간");
            obj.set_cssclass("sta_WF_tablelabel");
            obj.set_textAlign("left");
            this.divData.form.tabData.tab1.addChild(obj.name, obj);

            obj = new Static("sta05","974","101","308","30",null,null,null,null,null,null,this.divData.form.tabData.tab1.form);
            obj.set_taborder("79");
            obj.set_cssclass("sta_WF_tablebg");
            this.divData.form.tabData.tab1.addChild(obj.name, obj);

            obj = new Static("staTab1Title","5","10",null,"22","5",null,null,null,null,null,this.divData.form.tabData.tab1.form);
            obj.set_taborder("40");
            obj.set_text("프로젝트 개요");
            obj.set_cssclass("sta_TITLE_Bg");
            this.divData.form.tabData.tab1.addChild(obj.name, obj);

            obj = new Static("staCD_CV_GO","5","72","120","30",null,null,null,null,null,null,this.divData.form.tabData.tab1.form);
            obj.set_taborder("41");
            obj.set_text("공공/민간");
            obj.set_textAlign("left");
            obj.set_cssclass("sta_WF_tablelabelE");
            this.divData.form.tabData.tab1.addChild(obj.name, obj);

            obj = new Static("staTY_ORD","5","101","120","30",null,null,null,null,null,null,this.divData.form.tabData.tab1.form);
            obj.set_taborder("42");
            obj.set_text("발주/사업방식");
            obj.set_textAlign("left");
            obj.set_cssclass("sta_WF_tablelabelE");
            this.divData.form.tabData.tab1.addChild(obj.name, obj);

            obj = new Static("staCD_LOC","5","130","120","30",null,null,null,null,null,null,this.divData.form.tabData.tab1.form);
            obj.set_taborder("43");
            obj.set_text("지역");
            obj.set_cssclass("sta_WF_tablelabel");
            obj.set_textAlign("left");
            this.divData.form.tabData.tab1.addChild(obj.name, obj);

            obj = new Static("sta00","124","72","307","30",null,null,null,null,null,null,this.divData.form.tabData.tab1.form);
            obj.set_taborder("44");
            obj.set_cssclass("sta_WF_tablebg");
            this.divData.form.tabData.tab1.addChild(obj.name, obj);

            obj = new Static("sta01","124","101","307","30",null,null,null,null,null,null,this.divData.form.tabData.tab1.form);
            obj.set_taborder("45");
            obj.set_cssclass("sta_WF_tablebg");
            this.divData.form.tabData.tab1.addChild(obj.name, obj);

            obj = new Static("sta02","124","130","1158","30",null,null,null,null,null,null,this.divData.form.tabData.tab1.form);
            obj.set_taborder("46");
            obj.set_cssclass("sta_WF_tablebg");
            this.divData.form.tabData.tab1.addChild(obj.name, obj);

            obj = new Static("staCD_CLS","430","72","120","30",null,null,null,null,null,null,this.divData.form.tabData.tab1.form);
            obj.set_taborder("47");
            obj.set_text("공사분야");
            obj.set_textAlign("left");
            obj.set_cssclass("sta_WF_tablelabelE");
            this.divData.form.tabData.tab1.addChild(obj.name, obj);

            obj = new Static("sta18","549","72","307","30",null,null,null,null,null,null,this.divData.form.tabData.tab1.form);
            obj.set_taborder("48");
            obj.set_cssclass("sta_WF_tablebg");
            this.divData.form.tabData.tab1.addChild(obj.name, obj);

            obj = new Static("staCD_PRC_BID","430","101","120","30",null,null,null,null,null,null,this.divData.form.tabData.tab1.form);
            obj.set_taborder("49");
            obj.set_text("입찰추진");
            obj.set_cssclass("sta_WF_tablelabel");
            obj.set_textAlign("left");
            this.divData.form.tabData.tab1.addChild(obj.name, obj);

            obj = new Div("ccfCD_CLS_CONST","979","77","298","20",null,null,null,null,null,null,this.divData.form.tabData.tab1.form);
            obj.getSetter("CodeFindName").set("CF_CODE_DO_41");
            obj.getSetter("CDTextWidth").set("80");
            obj.set_taborder("2");
            obj.set_url("cmm::cmmCodeFind.xfdl");
            this.divData.form.tabData.tab1.addChild(obj.name, obj);

            obj = new Static("staAM_CONST","5","159","120","30",null,null,null,null,null,null,this.divData.form.tabData.tab1.form);
            obj.set_taborder("50");
            obj.set_text("화폐단위");
            obj.set_cssclass("sta_WF_tablelabel");
            obj.set_textAlign("left");
            this.divData.form.tabData.tab1.addChild(obj.name, obj);

            obj = new Static("sta09","124","159","307","30",null,null,null,null,null,null,this.divData.form.tabData.tab1.form);
            obj.set_taborder("51");
            obj.set_cssclass("sta_WF_tablebg");
            this.divData.form.tabData.tab1.addChild(obj.name, obj);

            obj = new Static("staAM_BIZ","430","159","120","30",null,null,null,null,null,null,this.divData.form.tabData.tab1.form);
            obj.set_taborder("52");
            obj.set_text("사업비");
            obj.set_cssclass("sta_WF_tablelabel");
            obj.set_textAlign("left");
            this.divData.form.tabData.tab1.addChild(obj.name, obj);

            obj = new Combo("ccboCD_CLS","554","77","132","20",null,null,null,null,null,null,this.divData.form.tabData.tab1.form);
            obj.set_taborder("1");
            obj.set_codecolumn("CD_CODE");
            obj.set_datacolumn("DS_CODE");
            obj.set_innerdataset("dsDS_CD_CLS");
            obj.set_index("-1");
            this.divData.form.tabData.tab1.addChild(obj.name, obj);

            obj = new Static("sta10","549","101","307","30",null,null,null,null,null,null,this.divData.form.tabData.tab1.form);
            obj.set_taborder("53");
            obj.set_cssclass("sta_WF_tablebg");
            this.divData.form.tabData.tab1.addChild(obj.name, obj);

            obj = new Combo("ccboCD_PRC_BID","554","106","132","20",null,null,null,null,null,null,this.divData.form.tabData.tab1.form);
            obj.set_taborder("4");
            obj.set_codecolumn("CD_CODE");
            obj.set_datacolumn("DS_CODE");
            obj.set_innerdataset("dsDS_CD_PRC_BID");
            this.divData.form.tabData.tab1.addChild(obj.name, obj);

            obj = new Static("sta12","974","159","308","30",null,null,null,null,null,null,this.divData.form.tabData.tab1.form);
            obj.set_taborder("54");
            obj.set_cssclass("sta_WF_tablebg");
            this.divData.form.tabData.tab1.addChild(obj.name, obj);

            obj = new Static("sta03","124","188","1158","90",null,null,null,null,null,null,this.divData.form.tabData.tab1.form);
            obj.set_taborder("55");
            obj.set_cssclass("sta_WF_tablebg");
            this.divData.form.tabData.tab1.addChild(obj.name, obj);

            obj = new Static("staTab1Title01","5","310",null,"22","529",null,null,null,null,null,this.divData.form.tabData.tab1.form);
            obj.set_taborder("57");
            obj.set_text("입찰정보");
            obj.set_cssclass("sta_TITLE_Bg");
            this.divData.form.tabData.tab1.addChild(obj.name, obj);

            obj = new Static("staDT_BID_PUB","5","337","120","30",null,null,null,null,null,null,this.divData.form.tabData.tab1.form);
            obj.set_taborder("58");
            obj.set_cssclass("sta_WF_tablelabel");
            obj.set_textAlign("left");
            obj.set_text("입찰공고일");
            this.divData.form.tabData.tab1.addChild(obj.name, obj);

            obj = new Static("staDT_PQ","5","366","120","30",null,null,null,null,null,null,this.divData.form.tabData.tab1.form);
            obj.set_taborder("59");
            obj.set_text("실적/PQ마감");
            obj.set_cssclass("sta_WF_tablelabel");
            obj.set_textAlign("left");
            this.divData.form.tabData.tab1.addChild(obj.name, obj);

            obj = new Static("sta16","124","337","172","30",null,null,null,null,null,null,this.divData.form.tabData.tab1.form);
            obj.set_taborder("60");
            obj.set_cssclass("sta_WF_tablebg");
            obj.set_text("");
            this.divData.form.tabData.tab1.addChild(obj.name, obj);

            obj = new Static("sta17","124","366","172","30",null,null,null,null,null,null,this.divData.form.tabData.tab1.form);
            obj.set_taborder("61");
            obj.set_cssclass("sta_WF_tablebg");
            this.divData.form.tabData.tab1.addChild(obj.name, obj);

            obj = new Static("staDS_BID_LIC","295","337","120","30",null,null,null,null,null,null,this.divData.form.tabData.tab1.form);
            obj.set_taborder("62");
            obj.set_text("입찰자격 면허");
            obj.set_cssclass("sta_WF_tablelabel");
            obj.set_textAlign("left");
            this.divData.form.tabData.tab1.addChild(obj.name, obj);

            obj = new Static("staDT_AGREE","5","395","120","30",null,null,null,null,null,null,this.divData.form.tabData.tab1.form);
            obj.set_taborder("63");
            obj.set_text("공동협정");
            obj.set_cssclass("sta_WF_tablelabel");
            obj.set_textAlign("left");
            this.divData.form.tabData.tab1.addChild(obj.name, obj);

            obj = new Static("sta19","124","395","172","30",null,null,null,null,null,null,this.divData.form.tabData.tab1.form);
            obj.set_taborder("64");
            obj.set_cssclass("sta_WF_tablebg");
            this.divData.form.tabData.tab1.addChild(obj.name, obj);

            obj = new Static("staDS_BID_CONST","295","366","120","30",null,null,null,null,null,null,this.divData.form.tabData.tab1.form);
            obj.set_taborder("65");
            obj.set_text("입찰자격 실적");
            obj.set_cssclass("sta_WF_tablelabel");
            obj.set_textAlign("left");
            this.divData.form.tabData.tab1.addChild(obj.name, obj);

            obj = new Static("sta20","414","337","345","30",null,null,null,null,null,null,this.divData.form.tabData.tab1.form);
            obj.set_taborder("66");
            obj.set_cssclass("sta_WF_tablebg");
            this.divData.form.tabData.tab1.addChild(obj.name, obj);

            obj = new Static("sta22","414","366","345","30",null,null,null,null,null,null,this.divData.form.tabData.tab1.form);
            obj.set_taborder("67");
            obj.set_cssclass("sta_WF_tablebg");
            this.divData.form.tabData.tab1.addChild(obj.name, obj);

            obj = new Static("staDS_BID_CO","295","395","120","30",null,null,null,null,null,null,this.divData.form.tabData.tab1.form);
            obj.set_taborder("68");
            obj.set_text("입찰자격 공동도급");
            obj.set_cssclass("sta_WF_tablelabel");
            obj.set_textAlign("left");
            this.divData.form.tabData.tab1.addChild(obj.name, obj);

            obj = new Static("sta24","414","395","345","30",null,null,null,null,null,null,this.divData.form.tabData.tab1.form);
            obj.set_taborder("69");
            obj.set_cssclass("sta_WF_tablebg");
            this.divData.form.tabData.tab1.addChild(obj.name, obj);

            obj = new Static("sta25","124","424","172","30",null,null,null,null,null,null,this.divData.form.tabData.tab1.form);
            obj.set_taborder("70");
            obj.set_cssclass("sta_WF_tablebg");
            obj.set_text("");
            this.divData.form.tabData.tab1.addChild(obj.name, obj);

            obj = new Static("staDT_SITE_EXPL","5","424","120","30",null,null,null,null,null,null,this.divData.form.tabData.tab1.form);
            obj.set_taborder("71");
            obj.set_text("현장설명");
            obj.set_cssclass("sta_WF_tablelabel");
            obj.set_textAlign("left");
            this.divData.form.tabData.tab1.addChild(obj.name, obj);

            obj = new Static("sta27","124","627","1158","149",null,null,null,null,null,null,this.divData.form.tabData.tab1.form);
            obj.set_taborder("72");
            obj.set_cssclass("sta_WF_tablebg");
            this.divData.form.tabData.tab1.addChild(obj.name, obj);

            obj = new Static("staID_FILE_ATTCH","5","627","120","149",null,null,null,null,null,null,this.divData.form.tabData.tab1.form);
            obj.set_taborder("73");
            obj.set_text("첨부파일");
            obj.set_cssclass("sta_WF_tablelabel");
            obj.set_textAlign("left");
            this.divData.form.tabData.tab1.addChild(obj.name, obj);

            obj = new Static("staDS_EXPL_AREA","295","424","120","30",null,null,null,null,null,null,this.divData.form.tabData.tab1.form);
            obj.set_taborder("74");
            obj.set_text("현설장소");
            obj.set_cssclass("sta_WF_tablelabel");
            obj.set_textAlign("left");
            this.divData.form.tabData.tab1.addChild(obj.name, obj);

            obj = new Static("sta28","414","424","345","30",null,null,null,null,null,null,this.divData.form.tabData.tab1.form);
            obj.set_taborder("75");
            obj.set_cssclass("sta_WF_tablebg");
            this.divData.form.tabData.tab1.addChild(obj.name, obj);

            obj = new MaskEdit("ctxtNO_TERM","978","106","80","20",null,null,null,null,null,null,this.divData.form.tabData.tab1.form);
            obj.set_taborder("5");
            obj.set_value("");
            obj.set_textAlign("right");
            obj.set_autoselect("true");
            this.divData.form.tabData.tab1.addChild(obj.name, obj);

            obj = new Div("ccfDS_LOC","1422","-34","321","20",null,null,null,null,null,null,this.divData.form.tabData.tab1.form);
            obj.getSetter("CodeFindName").set("DZX_CFZIP_STREET");
            obj.getSetter("CDTextWidth").set("50");
            obj.set_taborder("7");
            obj.set_url("cmm::cmmCodeFind.xfdl");
            this.divData.form.tabData.tab1.addChild(obj.name, obj);

            obj = new Edit("ctxtDS_ADDR2","553","135","297","20",null,null,null,null,null,null,this.divData.form.tabData.tab1.form);
            obj.set_taborder("8");
            obj.set_value("");
            this.divData.form.tabData.tab1.addChild(obj.name, obj);

            obj = new Div("divFile","127","627","1144","150",null,null,null,null,null,null,this.divData.form.tabData.tab1.form);
            obj.set_taborder("39");
            obj.set_url("cmm::cmmFileManager.xfdl");
            obj.set_text("");
            this.divData.form.tabData.tab1.addChild(obj.name, obj);

            obj = new Static("staPercent16","1065","106","40","20",null,null,null,null,null,null,this.divData.form.tabData.tab1.form);
            obj.set_taborder("80");
            obj.set_text("개월");
            this.divData.form.tabData.tab1.addChild(obj.name, obj);

            obj = new Combo("ccboCD_CV_GO","129","77","132","20",null,null,null,null,null,null,this.divData.form.tabData.tab1.form);
            obj.set_taborder("0");
            obj.set_codecolumn("CD_CODE");
            obj.set_datacolumn("DS_CODE");
            obj.set_innerdataset("dsDS_CD_CV_GO");
            this.divData.form.tabData.tab1.addChild(obj.name, obj);

            obj = new TextArea("txtDS_RM_CONST","129","193","1148","80",null,null,null,null,null,null,this.divData.form.tabData.tab1.form);
            obj.set_taborder("13");
            obj.set_maxlength("1000");
            this.divData.form.tabData.tab1.addChild(obj.name, obj);

            obj = new Combo("ccboCD_LOC","1323","-34","96","20",null,null,null,null,null,null,this.divData.form.tabData.tab1.form);
            obj.set_taborder("6");
            obj.set_codecolumn("CD_CODE");
            obj.set_datacolumn("DS_CODE");
            obj.set_innerdataset("dsCD_LOC");
            this.divData.form.tabData.tab1.addChild(obj.name, obj);

            obj = new Div("ccfTY_ORD","129","106","298","20",null,null,null,null,null,null,this.divData.form.tabData.tab1.form);
            obj.getSetter("CodeFindName").set("CF_CODE_DO_O2");
            obj.getSetter("CDTextWidth").set("132");
            obj.set_taborder("3");
            obj.set_url("cmm::cmmCodeFind.xfdl");
            this.divData.form.tabData.tab1.addChild(obj.name, obj);

            obj = new Static("staDS_SITE_EXPL","295","482","120","117",null,null,null,null,null,null,this.divData.form.tabData.tab1.form);
            obj.set_taborder("81");
            obj.set_text("의견");
            obj.set_cssclass("sta_WF_tablelabel");
            obj.set_textAlign("left");
            this.divData.form.tabData.tab1.addChild(obj.name, obj);

            obj = new Static("sta07","414","482","345","117",null,null,null,null,null,null,this.divData.form.tabData.tab1.form);
            obj.set_taborder("82");
            obj.set_cssclass("sta_WF_tablebg");
            this.divData.form.tabData.tab1.addChild(obj.name, obj);

            obj = new Static("staDT_BID_WIN","5","569","120","30",null,null,null,null,null,null,this.divData.form.tabData.tab1.form);
            obj.set_taborder("83");
            obj.set_text("낙찰일자");
            obj.set_cssclass("sta_WF_tablelabel");
            obj.set_textAlign("left");
            this.divData.form.tabData.tab1.addChild(obj.name, obj);

            obj = new Static("sta08","124","569","172","30",null,null,null,null,null,null,this.divData.form.tabData.tab1.form);
            obj.set_taborder("84");
            obj.set_cssclass("sta_WF_tablebg");
            obj.set_text("");
            this.divData.form.tabData.tab1.addChild(obj.name, obj);

            obj = new Static("staDT_SC_COMPL","5","598","120","30",null,null,null,null,null,null,this.divData.form.tabData.tab1.form);
            obj.set_taborder("85");
            obj.set_text("준공예정");
            obj.set_cssclass("sta_WF_tablelabel");
            obj.set_textAlign("left");
            this.divData.form.tabData.tab1.addChild(obj.name, obj);

            obj = new Static("sta11","124","598","172","30",null,null,null,null,null,null,this.divData.form.tabData.tab1.form);
            obj.set_taborder("86");
            obj.set_cssclass("sta_WF_tablebg");
            obj.set_text("");
            this.divData.form.tabData.tab1.addChild(obj.name, obj);

            obj = new Static("staID_USER_EXPL","295","598","120","30",null,null,null,null,null,null,this.divData.form.tabData.tab1.form);
            obj.set_taborder("87");
            obj.set_text("현설의뢰자");
            obj.set_cssclass("sta_WF_tablelabel");
            obj.set_textAlign("left");
            this.divData.form.tabData.tab1.addChild(obj.name, obj);

            obj = new Static("sta15","414","598","345","30",null,null,null,null,null,null,this.divData.form.tabData.tab1.form);
            obj.set_taborder("88");
            obj.set_cssclass("sta_WF_tablebg");
            this.divData.form.tabData.tab1.addChild(obj.name, obj);

            obj = new Calendar("ctclDT_BID_PUB","129","342","110","20",null,null,null,null,null,null,this.divData.form.tabData.tab1.form);
            obj.set_taborder("14");
            obj.set_dateformat("yyyy-MM-dd");
            obj.set_editformat("yyyyMMdd");
            obj.set_autoselect("true");
            obj.set_value("20200101");
            this.divData.form.tabData.tab1.addChild(obj.name, obj);

            obj = new Calendar("ctclDT_PQ","129","371","110","20",null,null,null,null,null,null,this.divData.form.tabData.tab1.form);
            obj.set_taborder("15");
            obj.set_dateformat("yyyy-MM-dd");
            obj.set_editformat("yyyyMMdd");
            obj.set_autoselect("true");
            obj.set_value("20200101");
            this.divData.form.tabData.tab1.addChild(obj.name, obj);

            obj = new Calendar("ctclDT_AGREE","129","400","110","20",null,null,null,null,null,null,this.divData.form.tabData.tab1.form);
            obj.set_taborder("17");
            obj.set_dateformat("yyyy-MM-dd");
            obj.set_editformat("yyyyMMdd");
            obj.set_autoselect("true");
            obj.set_value("20200101");
            this.divData.form.tabData.tab1.addChild(obj.name, obj);

            obj = new Calendar("ctclDT_SITE_EXPL","129","429","110","20",null,null,null,null,null,null,this.divData.form.tabData.tab1.form);
            obj.set_taborder("19");
            obj.set_dateformat("yyyy-MM-dd");
            obj.set_editformat("yyyyMMdd");
            obj.set_autoselect("true");
            obj.set_value("20200101");
            this.divData.form.tabData.tab1.addChild(obj.name, obj);

            obj = new Calendar("ctclDT_BID_WIN","129","574","110","20",null,null,null,null,null,null,this.divData.form.tabData.tab1.form);
            obj.set_taborder("30");
            obj.set_dateformat("yyyy-MM-dd");
            obj.set_editformat("yyyyMMdd");
            obj.set_autoselect("true");
            obj.set_value("20200101");
            this.divData.form.tabData.tab1.addChild(obj.name, obj);

            obj = new Calendar("ctclDT_SC_COMPL","129","603","110","20",null,null,null,null,null,null,this.divData.form.tabData.tab1.form);
            obj.set_taborder("32");
            obj.set_dateformat("yyyy-MM-dd");
            obj.set_editformat("yyyyMMdd");
            obj.set_autoselect("true");
            obj.set_value("20200101");
            this.divData.form.tabData.tab1.addChild(obj.name, obj);

            obj = new Edit("ctxtDS_BID_LIC","419","342","335","20",null,null,null,null,null,null,this.divData.form.tabData.tab1.form);
            obj.set_taborder("33");
            obj.set_value("");
            this.divData.form.tabData.tab1.addChild(obj.name, obj);

            obj = new Edit("ctxtDS_BID_CONST","419","371","335","20",null,null,null,null,null,null,this.divData.form.tabData.tab1.form);
            obj.set_taborder("34");
            obj.set_value("");
            this.divData.form.tabData.tab1.addChild(obj.name, obj);

            obj = new Edit("ctxtDS_BID_CO","419","400","335","20",null,null,null,null,null,null,this.divData.form.tabData.tab1.form);
            obj.set_taborder("35");
            obj.set_value("");
            this.divData.form.tabData.tab1.addChild(obj.name, obj);

            obj = new Edit("ctxtDS_EXPL_AREA","419","429","335","20",null,null,null,null,null,null,this.divData.form.tabData.tab1.form);
            obj.set_taborder("36");
            obj.set_value("");
            this.divData.form.tabData.tab1.addChild(obj.name, obj);

            obj = new TextArea("txtDS_SITE_EXPL","419","486","335","109",null,null,null,null,null,null,this.divData.form.tabData.tab1.form);
            obj.set_taborder("37");
            obj.set_maxlength("1000");
            this.divData.form.tabData.tab1.addChild(obj.name, obj);

            obj = new MaskEdit("ctxtAM_ESTM","978","164","95","20",null,null,null,null,null,null,this.divData.form.tabData.tab1.form);
            obj.set_taborder("11");
            obj.set_value("");
            obj.set_textAlign("right");
            obj.set_format("#,##0");
            obj.set_autoselect("true");
            this.divData.form.tabData.tab1.addChild(obj.name, obj);

            obj = new Div("ccfID_USER_EXPL","419","603","335","20",null,null,null,null,null,null,this.divData.form.tabData.tab1.form);
            obj.getSetter("CodeFindName").set("DOXPR_USERID_BYCORP_CODEFIND");
            obj.getSetter("CDTextWidth").set("80");
            obj.set_taborder("38");
            obj.set_url("cmm::cmmCodeFind.xfdl");
            this.divData.form.tabData.tab1.addChild(obj.name, obj);

            obj = new MaskEdit("ctxtAM_CONST","1117","164","95","20",null,null,null,null,null,null,this.divData.form.tabData.tab1.form);
            obj.set_taborder("12");
            obj.set_value("");
            obj.set_textAlign("right");
            obj.set_format("#,##0");
            obj.set_autoselect("true");
            this.divData.form.tabData.tab1.addChild(obj.name, obj);

            obj = new Static("staPercent16_00","1215","164","40","20",null,null,null,null,null,null,this.divData.form.tabData.tab1.form);
            obj.set_taborder("89");
            obj.set_text("(VAT)");
            this.divData.form.tabData.tab1.addChild(obj.name, obj);

            obj = new Static("staDT_BID01","5","453","120","30",null,null,null,null,null,null,this.divData.form.tabData.tab1.form);
            obj.set_taborder("90");
            obj.set_text("입찰등록");
            obj.set_cssclass("sta_WF_tablelabel");
            obj.set_textAlign("left");
            this.divData.form.tabData.tab1.addChild(obj.name, obj);

            obj = new Static("sta06_01","124","453","172","30",null,null,null,null,null,null,this.divData.form.tabData.tab1.form);
            obj.set_taborder("91");
            obj.set_cssclass("sta_WF_tablebg");
            obj.set_text("");
            this.divData.form.tabData.tab1.addChild(obj.name, obj);

            obj = new Static("staDT_BID02","5","540","120","30",null,null,null,null,null,null,this.divData.form.tabData.tab1.form);
            obj.set_taborder("92");
            obj.set_text("심의일자");
            obj.set_cssclass("sta_WF_tablelabel");
            obj.set_textAlign("left");
            this.divData.form.tabData.tab1.addChild(obj.name, obj);

            obj = new Static("sta06_02","124","540","172","30",null,null,null,null,null,null,this.divData.form.tabData.tab1.form);
            obj.set_taborder("93");
            obj.set_cssclass("sta_WF_tablebg");
            obj.set_text("");
            this.divData.form.tabData.tab1.addChild(obj.name, obj);

            obj = new Calendar("ctclDT_BID_REG","129","458","110","20",null,null,null,null,null,null,this.divData.form.tabData.tab1.form);
            obj.set_taborder("21");
            obj.set_dateformat("yyyy-MM-dd");
            obj.set_editformat("yyyyMMdd");
            obj.set_autoselect("true");
            obj.set_value("20200101");
            this.divData.form.tabData.tab1.addChild(obj.name, obj);

            obj = new Calendar("ctclDT_REVIEW","129","545","110","20",null,null,null,null,null,null,this.divData.form.tabData.tab1.form);
            obj.set_taborder("28");
            obj.set_dateformat("yyyy-MM-dd");
            obj.set_editformat("yyyyMMdd");
            obj.set_autoselect("true");
            obj.set_value("20200101");
            this.divData.form.tabData.tab1.addChild(obj.name, obj);

            obj = new Static("staDT_BID02_00","5","482","120","30",null,null,null,null,null,null,this.divData.form.tabData.tab1.form);
            obj.set_taborder("94");
            obj.set_text("입찰일자");
            obj.set_cssclass("sta_WF_tablelabel");
            obj.set_textAlign("left");
            this.divData.form.tabData.tab1.addChild(obj.name, obj);

            obj = new Static("staDT_BID_WIN00","5","511","120","30",null,null,null,null,null,null,this.divData.form.tabData.tab1.form);
            obj.set_taborder("95");
            obj.set_text("개찰일자");
            obj.set_cssclass("sta_WF_tablelabel");
            obj.set_textAlign("left");
            this.divData.form.tabData.tab1.addChild(obj.name, obj);

            obj = new Static("sta08_00","124","511","172","30",null,null,null,null,null,null,this.divData.form.tabData.tab1.form);
            obj.set_taborder("96");
            obj.set_cssclass("sta_WF_tablebg");
            obj.set_text("");
            this.divData.form.tabData.tab1.addChild(obj.name, obj);

            obj = new Static("sta06_02_00","124","482","172","30",null,null,null,null,null,null,this.divData.form.tabData.tab1.form);
            obj.set_taborder("97");
            obj.set_cssclass("sta_WF_tablebg");
            obj.set_text("");
            this.divData.form.tabData.tab1.addChild(obj.name, obj);

            obj = new Calendar("ctclDT_BID_OPEN00","129","516","110","20",null,null,null,null,null,null,this.divData.form.tabData.tab1.form);
            obj.set_taborder("26");
            obj.set_dateformat("yyyy-MM-dd");
            obj.set_editformat("yyyyMMdd");
            obj.set_autoselect("true");
            obj.set_value("20200101");
            this.divData.form.tabData.tab1.addChild(obj.name, obj);

            obj = new Calendar("ctclDT_BID00","129","487","110","20",null,null,null,null,null,null,this.divData.form.tabData.tab1.form);
            obj.set_taborder("24");
            obj.set_dateformat("yyyy-MM-dd");
            obj.set_editformat("yyyyMMdd");
            obj.set_autoselect("true");
            obj.set_value("20200101");
            this.divData.form.tabData.tab1.addChild(obj.name, obj);

            obj = new MaskEdit("ctxtHM_PQ","245","370","45","22",null,null,null,null,null,null,this.divData.form.tabData.tab1.form);
            obj.set_taborder("16");
            obj.set_format("##:##");
            obj.set_type("string");
            obj.set_autoselect("true");
            obj.set_maskchar("-");
            this.divData.form.tabData.tab1.addChild(obj.name, obj);

            obj = new MaskEdit("ctxtHM_PQ00","245","399","45","22",null,null,null,null,null,null,this.divData.form.tabData.tab1.form);
            obj.set_taborder("18");
            obj.set_format("##:##");
            obj.set_type("string");
            obj.set_autoselect("true");
            obj.set_maskchar("-");
            this.divData.form.tabData.tab1.addChild(obj.name, obj);

            obj = new MaskEdit("ctxtHM_PQ00_00","245","428","45","22",null,null,null,null,null,null,this.divData.form.tabData.tab1.form);
            obj.set_taborder("20");
            obj.set_format("##:##");
            obj.set_type("string");
            obj.set_autoselect("true");
            obj.set_maskchar("-");
            this.divData.form.tabData.tab1.addChild(obj.name, obj);

            obj = new MaskEdit("ctxtHM_PQ00_00_00","245","457","45","22",null,null,null,null,null,null,this.divData.form.tabData.tab1.form);
            obj.set_taborder("22");
            obj.set_format("##:##");
            obj.set_type("string");
            obj.set_autoselect("true");
            obj.set_maskchar("-");
            this.divData.form.tabData.tab1.addChild(obj.name, obj);

            obj = new MaskEdit("ctxtHM_PQ00_00_00_00","245","486","45","22",null,null,null,null,null,null,this.divData.form.tabData.tab1.form);
            obj.set_taborder("25");
            obj.set_format("##:##");
            obj.set_type("string");
            obj.set_autoselect("true");
            obj.set_maskchar("-");
            this.divData.form.tabData.tab1.addChild(obj.name, obj);

            obj = new MaskEdit("ctxtHM_PQ00_00_00_00_00","245","515","45","22",null,null,null,null,null,null,this.divData.form.tabData.tab1.form);
            obj.set_taborder("27");
            obj.set_format("##:##");
            obj.set_type("string");
            obj.set_autoselect("true");
            obj.set_maskchar("-");
            this.divData.form.tabData.tab1.addChild(obj.name, obj);

            obj = new MaskEdit("ctxtHM_PQ00_00_00_00_00_00","245","544","45","22",null,null,null,null,null,null,this.divData.form.tabData.tab1.form);
            obj.set_taborder("29");
            obj.set_format("##:##");
            obj.set_type("string");
            obj.set_autoselect("true");
            obj.set_maskchar("-");
            this.divData.form.tabData.tab1.addChild(obj.name, obj);

            obj = new MaskEdit("ctxtHM_PQ00_00_00_00_00_00_00","245","573","45","22",null,null,null,null,null,null,this.divData.form.tabData.tab1.form);
            obj.set_taborder("31");
            obj.set_format("##:##");
            obj.set_type("string");
            obj.set_autoselect("true");
            obj.set_maskchar("-");
            this.divData.form.tabData.tab1.addChild(obj.name, obj);

            obj = new Button("btnApp",null,"5","70","24","5",null,null,null,null,null,this.divData.form.tabData.tab1.form);
            obj.set_taborder("98");
            obj.set_text("결재요청");
            obj.set_visible("false");
            this.divData.form.tabData.tab1.addChild(obj.name, obj);

            obj = new Static("staTab1Title01_00_01","1021","6",null,"22","208",null,null,null,null,null,this.divData.form.tabData.tab1.form);
            obj.set_taborder("99");
            obj.set_text("결재 상태 :");
            obj.set_visible("false");
            this.divData.form.tabData.tab1.addChild(obj.name, obj);

            obj = new Static("staTab1Title01_00_01_00","1088","6",null,"22","81",null,null,null,null,null,this.divData.form.tabData.tab1.form);
            obj.set_taborder("100");
            obj.set_text("");
            obj.set_textAlign("right");
            obj.set_font("bold 12px/normal \"Dotum\"");
            obj.set_visible("false");
            this.divData.form.tabData.tab1.addChild(obj.name, obj);

            obj = new Static("staNO_TERM00","855","130","120","30",null,null,null,null,null,null,this.divData.form.tabData.tab1.form);
            obj.set_taborder("101");
            obj.set_text("주요공사");
            obj.set_cssclass("sta_WF_tablelabel");
            obj.set_textAlign("left");
            this.divData.form.tabData.tab1.addChild(obj.name, obj);

            obj = new Static("sta05_00","974","130","308","30",null,null,null,null,null,null,this.divData.form.tabData.tab1.form);
            obj.set_taborder("102");
            obj.set_cssclass("sta_WF_tablebg");
            this.divData.form.tabData.tab1.addChild(obj.name, obj);

            obj = new Combo("ccboCD_CLS00","staNO_TERM00:3","135","132","20",null,null,null,null,null,null,this.divData.form.tabData.tab1.form);
            obj.set_taborder("9");
            obj.set_codecolumn("CD_CODE");
            obj.set_datacolumn("DS_CODE");
            obj.set_innerdataset("dsTY_MJ_CONST");
            obj.set_index("-1");
            this.divData.form.tabData.tab1.addChild(obj.name, obj);

            obj = new Static("staDS_EXPL_AREA00","295","453","120","30",null,null,null,null,null,null,this.divData.form.tabData.tab1.form);
            obj.set_taborder("103");
            obj.set_text("참여 예정사");
            obj.set_cssclass("sta_WF_tablelabel");
            obj.set_textAlign("left");
            this.divData.form.tabData.tab1.addChild(obj.name, obj);

            obj = new Static("sta28_00","414","453","345","30",null,null,null,null,null,null,this.divData.form.tabData.tab1.form);
            obj.set_taborder("104");
            obj.set_cssclass("sta_WF_tablebg");
            this.divData.form.tabData.tab1.addChild(obj.name, obj);

            obj = new MaskEdit("ctxtAM_CONST_VAT","419","458","335","20",null,null,null,null,null,null,this.divData.form.tabData.tab1.form);
            obj.set_taborder("23");
            obj.set_value("");
            obj.set_textAlign("right");
            obj.set_format("#,0");
            obj.set_autoselect("true");
            this.divData.form.tabData.tab1.addChild(obj.name, obj);

            obj = new Static("staCD_SAUP","855","43","120","30",null,null,null,null,null,null,this.divData.form.tabData.tab1.form);
            obj.set_taborder("105");
            obj.set_text("사업관리부서");
            obj.set_textAlign("left");
            obj.set_cssclass("sta_WF_tablelabelE");
            this.divData.form.tabData.tab1.addChild(obj.name, obj);

            obj = new Static("sta00_3","974","43","308","30",null,null,null,null,null,null,this.divData.form.tabData.tab1.form);
            obj.set_taborder("107");
            obj.set_cssclass("sta_WF_tablebg");
            this.divData.form.tabData.tab1.addChild(obj.name, obj);

            obj = new Div("ccfCD_SAUP","979","48","298","20",null,null,null,null,null,null,this.divData.form.tabData.tab1.form);
            obj.getSetter("CodeFindName").set("DOS_CFACNTUNIT");
            obj.getSetter("CDTextWidth").set("80");
            obj.set_taborder("108");
            obj.set_url("cmm::cmmCodeFind.xfdl");
            this.divData.form.tabData.tab1.addChild(obj.name, obj);

            obj = new Static("staCD_CORP","5","43","120","30",null,null,null,null,null,null,this.divData.form.tabData.tab1.form);
            obj.set_taborder("109");
            obj.set_text("법인코드");
            obj.set_textAlign("left");
            obj.set_cssclass("sta_WF_tablelabelE");
            this.divData.form.tabData.tab1.addChild(obj.name, obj);

            obj = new Static("sta00_1","124","43","307","30",null,null,null,null,null,null,this.divData.form.tabData.tab1.form);
            obj.set_taborder("110");
            obj.set_cssclass("sta_WF_tablebg");
            this.divData.form.tabData.tab1.addChild(obj.name, obj);

            obj = new Div("ccfCD_CORP","129","48","298","20",null,null,null,null,null,null,this.divData.form.tabData.tab1.form);
            obj.getSetter("CDTextWidth").set("100");
            obj.getSetter("CodeFindName").set("DHX_CFCORP");
            obj.set_taborder("106");
            obj.set_url("cmm::cmmCodeFind.xfdl");
            obj.set_text("");
            this.divData.form.tabData.tab1.addChild(obj.name, obj);

            obj = new Static("staYN_SAUP","430","13","120","30",null,null,null,null,null,null,this.divData.form.tabData.tab1.form);
            obj.set_taborder("111");
            obj.set_text("사업관리여부");
            obj.set_textAlign("left");
            obj.set_visible("false");
            obj.set_cssclass("sta_WF_tablelabelE");
            this.divData.form.tabData.tab1.addChild(obj.name, obj);

            obj = new Static("sta00_2","549","43","307","30",null,null,null,null,null,null,this.divData.form.tabData.tab1.form);
            obj.set_taborder("112");
            obj.set_cssclass("sta_WF_tablebg");
            obj.set_visible("true");
            this.divData.form.tabData.tab1.addChild(obj.name, obj);

            obj = new Combo("ccboYN_SAUP","554","18","132","20",null,null,null,null,null,null,this.divData.form.tabData.tab1.form);
            obj.set_taborder("113");
            obj.set_codecolumn("CD_CODE");
            obj.set_datacolumn("DS_CODE");
            obj.set_innerdataset("dsYN_SAUP");
            obj.set_visible("false");
            obj.set_index("-1");
            this.divData.form.tabData.tab1.addChild(obj.name, obj);

            obj = new Static("staAM_ESTM","855","159","120","30",null,null,null,null,null,null,this.divData.form.tabData.tab1.form);
            obj.set_taborder("114");
            obj.set_text("추정가격");
            obj.set_cssclass("sta_WF_tablelabel");
            obj.set_textAlign("left");
            this.divData.form.tabData.tab1.addChild(obj.name, obj);

            obj = new Static("sta12_00","548","159","308","30",null,null,null,null,null,null,this.divData.form.tabData.tab1.form);
            obj.set_taborder("115");
            obj.set_cssclass("sta_WF_tablebg");
            this.divData.form.tabData.tab1.addChild(obj.name, obj);

            obj = new MaskEdit("ctxtAM_BIZ","553","164","200","20",null,null,null,null,null,null,this.divData.form.tabData.tab1.form);
            obj.set_taborder("10");
            obj.set_value("");
            obj.set_textAlign("right");
            obj.set_format("#,##0");
            obj.set_autoselect("true");
            this.divData.form.tabData.tab1.addChild(obj.name, obj);

            obj = new Div("ccfMoney_Unit","129","164","298","20",null,null,null,null,null,null,this.divData.form.tabData.tab1.form);
            obj.getSetter("CodeFindName").set("CF_CODE_DO_O3");
            obj.getSetter("CDTextWidth").set("132");
            obj.set_taborder("116");
            obj.set_url("cmm::cmmCodeFind.xfdl");
            this.divData.form.tabData.tab1.addChild(obj.name, obj);

            obj = new Static("sta06","759","164","87","20",null,null,null,null,null,null,this.divData.form.tabData.tab1.form);
            obj.set_taborder("117");
            this.divData.form.tabData.tab1.addChild(obj.name, obj);

            obj = new Static("sta06_00","1077","164","29","20",null,null,null,null,null,null,this.divData.form.tabData.tab1.form);
            obj.set_taborder("118");
            this.divData.form.tabData.tab1.addChild(obj.name, obj);

            obj = new Edit("ctxtNM_COUNTRY","129","135","420","20",null,null,null,null,null,null,this.divData.form.tabData.tab1.form);
            obj.set_taborder("119");
            obj.set_value("");
            this.divData.form.tabData.tab1.addChild(obj.name, obj);

            obj = new Static("staTab1Title01_00","757","310",null,"22","9",null,null,null,null,null,this.divData.form.tabData.tab1.form);
            obj.set_taborder("120");
            obj.set_text("건축 개요");
            obj.set_cssclass("sta_TITLE_Bg");
            this.divData.form.tabData.tab1.addChild(obj.name, obj);

            obj = new Static("staCD_LAND_STAT00","758","337","120","30",null,null,null,null,null,null,this.divData.form.tabData.tab1.form);
            obj.set_taborder("121");
            obj.set_text("대지면적");
            obj.set_cssclass("sta_WF_tablelabel");
            obj.set_textAlign("left");
            this.divData.form.tabData.tab1.addChild(obj.name, obj);

            obj = new Static("staCD_PERMIT_STAT00","758","366","120","30",null,null,null,null,null,null,this.divData.form.tabData.tab1.form);
            obj.set_taborder("122");
            obj.set_text("지상연면적");
            obj.set_cssclass("sta_WF_tablelabel");
            obj.set_textAlign("left");
            this.divData.form.tabData.tab1.addChild(obj.name, obj);

            obj = new Static("staCD_BIZ01","758","395","120","30",null,null,null,null,null,null,this.divData.form.tabData.tab1.form);
            obj.set_taborder("123");
            obj.set_cssclass("sta_WF_tablelabel");
            obj.set_textAlign("left");
            obj.set_text("건축면적");
            this.divData.form.tabData.tab1.addChild(obj.name, obj);

            obj = new Static("staCD_LAND_STAT","758","424","120","30",null,null,null,null,null,null,this.divData.form.tabData.tab1.form);
            obj.set_taborder("124");
            obj.set_text("토지작업현황");
            obj.set_cssclass("sta_WF_tablelabel");
            obj.set_textAlign("left");
            this.divData.form.tabData.tab1.addChild(obj.name, obj);

            obj = new Static("staCD_PERMIT_STAT00_00","758","453","120","30",null,null,null,null,null,null,this.divData.form.tabData.tab1.form);
            obj.set_taborder("125");
            obj.set_text("전체연면적");
            obj.set_cssclass("sta_WF_tablelabel");
            obj.set_textAlign("left");
            this.divData.form.tabData.tab1.addChild(obj.name, obj);

            obj = new Static("staCD_PERMIT_STAT00_00_00","758","482","120","30",null,null,null,null,null,null,this.divData.form.tabData.tab1.form);
            obj.set_taborder("126");
            obj.set_text("지하연면적");
            obj.set_cssclass("sta_WF_tablelabel");
            obj.set_textAlign("left");
            this.divData.form.tabData.tab1.addChild(obj.name, obj);

            obj = new Static("staAR_SITE01","758","511","120","30",null,null,null,null,null,null,this.divData.form.tabData.tab1.form);
            obj.set_taborder("127");
            obj.set_text("상가면적");
            obj.set_cssclass("sta_WF_tablelabel");
            obj.set_textAlign("left");
            this.divData.form.tabData.tab1.addChild(obj.name, obj);

            obj = new Static("staAM_LAND","758","540","120","30",null,null,null,null,null,null,this.divData.form.tabData.tab1.form);
            obj.set_taborder("128");
            obj.set_text("토지비");
            obj.set_cssclass("sta_WF_tablelabel");
            obj.set_textAlign("left");
            this.divData.form.tabData.tab1.addChild(obj.name, obj);

            obj = new Static("staCD_PERMIT_STAT","758","569","120","30",null,null,null,null,null,null,this.divData.form.tabData.tab1.form);
            obj.set_taborder("129");
            obj.set_text("인허가상황");
            obj.set_cssclass("sta_WF_tablelabel");
            obj.set_textAlign("left");
            this.divData.form.tabData.tab1.addChild(obj.name, obj);

            obj = new Static("sta23_00","877","453","405","30",null,null,null,null,null,null,this.divData.form.tabData.tab1.form);
            obj.set_taborder("130");
            obj.set_cssclass("sta_WF_tablebg");
            this.divData.form.tabData.tab1.addChild(obj.name, obj);

            obj = new Static("sta23_00_00","877","482","405","30",null,null,null,null,null,null,this.divData.form.tabData.tab1.form);
            obj.set_taborder("131");
            obj.set_cssclass("sta_WF_tablebg");
            this.divData.form.tabData.tab1.addChild(obj.name, obj);

            obj = new Static("sta20_00","877","511","405","30",null,null,null,null,null,null,this.divData.form.tabData.tab1.form);
            obj.set_taborder("132");
            obj.set_cssclass("sta_WF_tablebg");
            this.divData.form.tabData.tab1.addChild(obj.name, obj);

            obj = new Static("sta28_01","877","569","405","30",null,null,null,null,null,null,this.divData.form.tabData.tab1.form);
            obj.set_taborder("133");
            obj.set_cssclass("sta_WF_tablebg");
            this.divData.form.tabData.tab1.addChild(obj.name, obj);

            obj = new Static("sta19_00","877","540","144","30",null,null,null,null,null,null,this.divData.form.tabData.tab1.form);
            obj.set_taborder("134");
            obj.set_cssclass("sta_WF_tablebg");
            this.divData.form.tabData.tab1.addChild(obj.name, obj);

            obj = new Static("staAM_AREA","1020","540","120","30",null,null,null,null,null,null,this.divData.form.tabData.tab1.form);
            obj.set_taborder("135");
            obj.set_text("평단가금액");
            obj.set_cssclass("sta_WF_tablelabel");
            obj.set_textAlign("left");
            this.divData.form.tabData.tab1.addChild(obj.name, obj);

            obj = new Static("sta24_00","1139","540","143","30",null,null,null,null,null,null,this.divData.form.tabData.tab1.form);
            obj.set_taborder("136");
            obj.set_cssclass("sta_WF_tablebg");
            this.divData.form.tabData.tab1.addChild(obj.name, obj);

            obj = new MaskEdit("ctxtSZ_SHOP_M00_00","920","458","80","20",null,null,null,null,null,null,this.divData.form.tabData.tab1.form);
            obj.set_taborder("137");
            obj.set_value("");
            obj.set_textAlign("right");
            obj.set_format("#,0.0000");
            obj.set_autoselect("true");
            obj.set_readonly("true");
            this.divData.form.tabData.tab1.addChild(obj.name, obj);

            obj = new MaskEdit("ctxtSZ_SHOP_M00_00_00","920","487","80","20",null,null,null,null,null,null,this.divData.form.tabData.tab1.form);
            obj.set_taborder("138");
            obj.set_value("");
            obj.set_textAlign("right");
            obj.set_format("#,0.0000");
            obj.set_autoselect("true");
            obj.set_readonly("false");
            this.divData.form.tabData.tab1.addChild(obj.name, obj);

            obj = new MaskEdit("ctxtSZ_SHOP00_00","1049","458","60","20",null,null,null,null,null,null,this.divData.form.tabData.tab1.form);
            obj.set_taborder("139");
            obj.set_value("");
            obj.set_textAlign("right");
            obj.set_format("#,0.0000");
            obj.set_autoselect("true");
            obj.set_readonly("true");
            this.divData.form.tabData.tab1.addChild(obj.name, obj);

            obj = new MaskEdit("ctxtSZ_SHOP00_00_00","1049","487","60","20",null,null,null,null,null,null,this.divData.form.tabData.tab1.form);
            obj.set_taborder("140");
            obj.set_value("");
            obj.set_textAlign("right");
            obj.set_format("#,0.0000");
            obj.set_autoselect("true");
            obj.set_readonly("true");
            this.divData.form.tabData.tab1.addChild(obj.name, obj);

            obj = new Static("staPercent09","880","517","40","20",null,null,null,null,null,null,this.divData.form.tabData.tab1.form);
            obj.set_taborder("141");
            obj.set_text("연면적");
            obj.set_textAlign("right");
            this.divData.form.tabData.tab1.addChild(obj.name, obj);

            obj = new MaskEdit("ctxtSZ_SHOP_M","920","516","80","20",null,null,null,null,null,null,this.divData.form.tabData.tab1.form);
            obj.set_taborder("142");
            obj.set_value("");
            obj.set_textAlign("right");
            obj.set_format("#,0.0000");
            obj.set_autoselect("true");
            obj.set_readonly("false");
            this.divData.form.tabData.tab1.addChild(obj.name, obj);

            obj = new Static("staPercent12","1003","517","40","20",null,null,null,null,null,null,this.divData.form.tabData.tab1.form);
            obj.set_taborder("143");
            obj.set_text("m²");
            this.divData.form.tabData.tab1.addChild(obj.name, obj);

            obj = new Static("staPercent19_00_00","1003","489","40","20",null,null,null,null,null,null,this.divData.form.tabData.tab1.form);
            obj.set_taborder("144");
            obj.set_text("m²");
            this.divData.form.tabData.tab1.addChild(obj.name, obj);

            obj = new Static("staPercent19_00","1003","455","40","20",null,null,null,null,null,null,this.divData.form.tabData.tab1.form);
            obj.set_taborder("145");
            obj.set_text("m²");
            this.divData.form.tabData.tab1.addChild(obj.name, obj);

            obj = new Static("staPercent18_00","1113","460","40","20",null,null,null,null,null,null,this.divData.form.tabData.tab1.form);
            obj.set_taborder("146");
            obj.set_text("평");
            this.divData.form.tabData.tab1.addChild(obj.name, obj);

            obj = new Static("staPercent18_00_00","1113","489","40","20",null,null,null,null,null,null,this.divData.form.tabData.tab1.form);
            obj.set_taborder("147");
            obj.set_text("평");
            this.divData.form.tabData.tab1.addChild(obj.name, obj);

            obj = new Static("staPercent11","1113","517","40","20",null,null,null,null,null,null,this.divData.form.tabData.tab1.form);
            obj.set_taborder("148");
            obj.set_text("평");
            this.divData.form.tabData.tab1.addChild(obj.name, obj);

            obj = new MaskEdit("ctxtSZ_SHOP","1049","516","60","20",null,null,null,null,null,null,this.divData.form.tabData.tab1.form);
            obj.set_taborder("149");
            obj.set_value("");
            obj.set_textAlign("right");
            obj.set_format("#,0.0000");
            obj.set_autoselect("true");
            obj.set_readonly("true");
            this.divData.form.tabData.tab1.addChild(obj.name, obj);

            obj = new Static("staPercent14","1139","517","40","20",null,null,null,null,null,null,this.divData.form.tabData.tab1.form);
            obj.set_taborder("150");
            obj.set_text("건폐율");
            obj.set_textAlign("right");
            this.divData.form.tabData.tab1.addChild(obj.name, obj);

            obj = new MaskEdit("ctxtRT_SHOP","1179","516","60","20",null,null,null,null,null,null,this.divData.form.tabData.tab1.form);
            obj.set_taborder("151");
            obj.set_value("");
            obj.set_textAlign("right");
            obj.set_format("#,0.00");
            obj.set_autoselect("true");
            obj.set_readonly("false");
            this.divData.form.tabData.tab1.addChild(obj.name, obj);

            obj = new Static("staPercent15","1241","517","40","20",null,null,null,null,null,null,this.divData.form.tabData.tab1.form);
            obj.set_taborder("152");
            obj.set_text("%");
            this.divData.form.tabData.tab1.addChild(obj.name, obj);

            obj = new Combo("ccboCD_PERMIT_STAT","884","574","190","20",null,null,null,null,null,null,this.divData.form.tabData.tab1.form);
            obj.set_taborder("153");
            obj.set_codecolumn("CD_CODE");
            obj.set_datacolumn("DS_CODE");
            obj.set_innerdataset("dsCD_PERMIT_STAT");
            this.divData.form.tabData.tab1.addChild(obj.name, obj);

            obj = new MaskEdit("ctxtAM_LAND","884","545","101","20",null,null,null,null,null,null,this.divData.form.tabData.tab1.form);
            obj.set_taborder("154");
            obj.set_value("");
            obj.set_textAlign("right");
            obj.set_format("#,0");
            obj.set_autoselect("true");
            this.divData.form.tabData.tab1.addChild(obj.name, obj);

            obj = new MaskEdit("ctxtAM_AREA","1145","545","101","20",null,null,null,null,null,null,this.divData.form.tabData.tab1.form);
            obj.set_taborder("155");
            obj.set_value("");
            obj.set_textAlign("right");
            obj.set_format("#,0");
            obj.set_autoselect("true");
            this.divData.form.tabData.tab1.addChild(obj.name, obj);

            obj = new Static("sta21","877","337","405","30",null,null,null,null,null,null,this.divData.form.tabData.tab1.form);
            obj.set_taborder("156");
            obj.set_cssclass("sta_WF_tablebg");
            obj.set_text("");
            this.divData.form.tabData.tab1.addChild(obj.name, obj);

            obj = new Static("sta23","877","366","405","30",null,null,null,null,null,null,this.divData.form.tabData.tab1.form);
            obj.set_taborder("157");
            obj.set_cssclass("sta_WF_tablebg");
            this.divData.form.tabData.tab1.addChild(obj.name, obj);

            obj = new Static("sta16_00","877","395","405","30",null,null,null,null,null,null,this.divData.form.tabData.tab1.form);
            obj.set_taborder("158");
            obj.set_cssclass("sta_WF_tablebg");
            obj.set_text("");
            this.divData.form.tabData.tab1.addChild(obj.name, obj);

            obj = new Static("sta25_00","877","424","405","30",null,null,null,null,null,null,this.divData.form.tabData.tab1.form);
            obj.set_taborder("159");
            obj.set_cssclass("sta_WF_tablebg");
            obj.set_text("");
            this.divData.form.tabData.tab1.addChild(obj.name, obj);

            obj = new Static("sta06_00_00","1248","164","29","20",null,null,null,null,null,null,this.divData.form.tabData.tab1.form);
            obj.set_taborder("160");
            this.divData.form.tabData.tab1.addChild(obj.name, obj);

            obj = new Static("sta06_00_00_00","1249","544","29","20",null,null,null,null,null,null,this.divData.form.tabData.tab1.form);
            obj.set_taborder("161");
            this.divData.form.tabData.tab1.addChild(obj.name, obj);

            obj = new Static("sta06_00_00_00_00","987","544","29","20",null,null,null,null,null,null,this.divData.form.tabData.tab1.form);
            obj.set_taborder("162");
            this.divData.form.tabData.tab1.addChild(obj.name, obj);

            obj = new Combo("ccboCD_LAND_STAT","884","429","190","20",null,null,null,null,null,null,this.divData.form.tabData.tab1.form);
            obj.set_taborder("163");
            obj.set_codecolumn("CD_CODE");
            obj.set_datacolumn("DS_CODE");
            obj.set_innerdataset("dsCD_LAND_STAT");
            this.divData.form.tabData.tab1.addChild(obj.name, obj);

            obj = new MaskEdit("ctxtSZ_ARCH_M","921","400","80","20",null,null,null,null,null,null,this.divData.form.tabData.tab1.form);
            obj.set_taborder("164");
            obj.set_value("");
            obj.set_textAlign("right");
            obj.set_format("#,0.0000");
            obj.set_autoselect("true");
            obj.set_readonly("false");
            this.divData.form.tabData.tab1.addChild(obj.name, obj);

            obj = new Static("staPercent03","1006","401","30","20",null,null,null,null,null,null,this.divData.form.tabData.tab1.form);
            obj.set_taborder("165");
            obj.set_text("m²");
            this.divData.form.tabData.tab1.addChild(obj.name, obj);

            obj = new MaskEdit("ctxtSZ_ARCH","1049","400","60","20",null,null,null,null,null,null,this.divData.form.tabData.tab1.form);
            obj.set_taborder("166");
            obj.set_value("");
            obj.set_textAlign("right");
            obj.set_format("#,0.0000");
            obj.set_autoselect("true");
            obj.set_readonly("true");
            this.divData.form.tabData.tab1.addChild(obj.name, obj);

            obj = new Static("staPercent05","1113","401","30","20",null,null,null,null,null,null,this.divData.form.tabData.tab1.form);
            obj.set_taborder("167");
            obj.set_text("평");
            this.divData.form.tabData.tab1.addChild(obj.name, obj);

            obj = new Static("staPercent07","1138","401","40","20",null,null,null,null,null,null,this.divData.form.tabData.tab1.form);
            obj.set_taborder("168");
            obj.set_text("건폐율");
            obj.set_textAlign("right");
            this.divData.form.tabData.tab1.addChild(obj.name, obj);

            obj = new MaskEdit("ctxtRT_ARCH","1178","400","60","20",null,null,null,null,null,null,this.divData.form.tabData.tab1.form);
            obj.set_taborder("169");
            obj.set_value("");
            obj.set_textAlign("right");
            obj.set_format("#,0.00");
            obj.set_autoselect("true");
            obj.set_readonly("false");
            this.divData.form.tabData.tab1.addChild(obj.name, obj);

            obj = new Static("staPercent04","1250","400","30","20",null,null,null,null,null,null,this.divData.form.tabData.tab1.form);
            obj.set_taborder("170");
            obj.set_text("%");
            this.divData.form.tabData.tab1.addChild(obj.name, obj);

            obj = new MaskEdit("ctxtSZ_SHOP_M00","921","371","80","20",null,null,null,null,null,null,this.divData.form.tabData.tab1.form);
            obj.set_taborder("171");
            obj.set_value("");
            obj.set_textAlign("right");
            obj.set_format("#,0.0000");
            obj.set_autoselect("true");
            obj.set_readonly("false");
            this.divData.form.tabData.tab1.addChild(obj.name, obj);

            obj = new Static("staPercent19","1006","373","30","20",null,null,null,null,null,null,this.divData.form.tabData.tab1.form);
            obj.set_taborder("172");
            obj.set_text("m²");
            this.divData.form.tabData.tab1.addChild(obj.name, obj);

            obj = new MaskEdit("ctxtSZ_SHOP00","1049","371","60","20",null,null,null,null,null,null,this.divData.form.tabData.tab1.form);
            obj.set_taborder("173");
            obj.set_value("");
            obj.set_textAlign("right");
            obj.set_format("#,0.0000");
            obj.set_autoselect("true");
            obj.set_readonly("true");
            this.divData.form.tabData.tab1.addChild(obj.name, obj);

            obj = new Static("staPercent18","1113","373","30","20",null,null,null,null,null,null,this.divData.form.tabData.tab1.form);
            obj.set_taborder("174");
            obj.set_text("평");
            this.divData.form.tabData.tab1.addChild(obj.name, obj);

            obj = new Static("staPercent20","1138","371","40","20",null,null,null,null,null,null,this.divData.form.tabData.tab1.form);
            obj.set_taborder("175");
            obj.set_text("용적율");
            obj.set_textAlign("right");
            this.divData.form.tabData.tab1.addChild(obj.name, obj);

            obj = new MaskEdit("ctxtRT_SHOP00","1178","371","60","20",null,null,null,null,null,null,this.divData.form.tabData.tab1.form);
            obj.set_taborder("176");
            obj.set_value("");
            obj.set_textAlign("right");
            obj.set_format("#,0.00");
            obj.set_autoselect("true");
            obj.set_readonly("false");
            this.divData.form.tabData.tab1.addChild(obj.name, obj);

            obj = new Static("staPercent21","1250","370","30","20",null,null,null,null,null,null,this.divData.form.tabData.tab1.form);
            obj.set_taborder("177");
            obj.set_text("%");
            this.divData.form.tabData.tab1.addChild(obj.name, obj);

            obj = new MaskEdit("ctxtSZ_ARCH_M00","921","342","80","20",null,null,null,null,null,null,this.divData.form.tabData.tab1.form);
            obj.set_taborder("178");
            obj.set_value("");
            obj.set_textAlign("right");
            obj.set_format("#,0.0000");
            obj.set_autoselect("true");
            obj.set_readonly("false");
            this.divData.form.tabData.tab1.addChild(obj.name, obj);

            obj = new Static("staPercent17","1006","344","30","20",null,null,null,null,null,null,this.divData.form.tabData.tab1.form);
            obj.set_taborder("179");
            obj.set_text("m²");
            this.divData.form.tabData.tab1.addChild(obj.name, obj);

            obj = new MaskEdit("ctxtSZ_ARCH00","1049","342","60","20",null,null,null,null,null,null,this.divData.form.tabData.tab1.form);
            obj.set_taborder("180");
            obj.set_value("");
            obj.set_textAlign("right");
            obj.set_format("#,0.0000");
            obj.set_autoselect("true");
            obj.set_readonly("true");
            this.divData.form.tabData.tab1.addChild(obj.name, obj);

            obj = new Static("staPercent16_01","1113","344","30","20",null,null,null,null,null,null,this.divData.form.tabData.tab1.form);
            obj.set_taborder("181");
            obj.set_text("평");
            this.divData.form.tabData.tab1.addChild(obj.name, obj);

            obj = new Static("staTY_STATUS","430","44","120","30",null,null,null,null,null,null,this.divData.form.tabData.tab1.form);
            obj.set_taborder("182");
            obj.set_text("진행상태");
            obj.set_textAlign("left");
            obj.set_visible("true");
            obj.set_cssclass("sta_WF_tablelabelE");
            this.divData.form.tabData.tab1.addChild(obj.name, obj);

            obj = new Combo("ccboTY_STATUS","554","48","132","20",null,null,null,null,null,null,this.divData.form.tabData.tab1.form);
            obj.set_taborder("183");
            obj.set_codecolumn("CD_CODE");
            obj.set_datacolumn("DS_CODE");
            obj.set_innerdataset("dsTY_STATUS");
            obj.set_visible("true");
            obj.set_index("-1");
            this.divData.form.tabData.tab1.addChild(obj.name, obj);

            obj = new Static("staRM_END","5","277","120","30",null,null,null,null,null,null,this.divData.form.tabData.tab1.form);
            obj.set_taborder("184");
            obj.set_text("종결사유");
            obj.set_cssclass("sta_WF_tablelabel");
            obj.set_textAlign("left");
            this.divData.form.tabData.tab1.addChild(obj.name, obj);

            obj = new Static("sta13","124","277","1158","30",null,null,null,null,null,null,this.divData.form.tabData.tab1.form);
            obj.set_taborder("185");
            obj.set_cssclass("sta_WF_tablebg");
            this.divData.form.tabData.tab1.addChild(obj.name, obj);

            obj = new Edit("edtRM_END","129","282","1148","20",null,null,null,null,null,null,this.divData.form.tabData.tab1.form);
            obj.set_taborder("186");
            this.divData.form.tabData.tab1.addChild(obj.name, obj);

            obj = new Tabpage("tab5",this.divData.form.tabData);
            obj.set_text("공동도급사");
            this.divData.form.tabData.addChild(obj.name, obj);

            obj = new Grid("objGrdtab5","5","37",null,null,"5","5",null,null,null,null,this.divData.form.tabData.tab5.form);
            obj.set_taborder("0");
            obj._setContents("");
            this.divData.form.tabData.tab5.addChild(obj.name, obj);

            obj = new Button("btnReg",null,"5","50","24","5",null,null,null,null,null,this.divData.form.tabData.tab5.form);
            obj.set_taborder("1");
            obj.set_text("등록");
            this.divData.form.tabData.tab5.addChild(obj.name, obj);

            obj = new Tabpage("tab6",this.divData.form.tabData);
            obj.set_text("관계사");
            this.divData.form.tabData.addChild(obj.name, obj);

            obj = new Grid("objGrdtab6","5","37",null,null,"5","5",null,null,null,null,this.divData.form.tabData.tab6.form);
            obj.set_taborder("0");
            obj._setContents("");
            this.divData.form.tabData.tab6.addChild(obj.name, obj);

            obj = new Button("btnReg",null,"5","50","24","5",null,null,null,null,null,this.divData.form.tabData.tab6.form);
            obj.set_taborder("1");
            obj.set_text("등록");
            this.divData.form.tabData.tab6.addChild(obj.name, obj);

            obj = new Tabpage("tab7",this.divData.form.tabData);
            obj.set_text("담당자 / 열람부서");
            this.divData.form.tabData.addChild(obj.name, obj);

            obj = new Static("staTitle00","10","10",null,"24","5",null,null,null,null,null,this.divData.form.tabData.tab7.form);
            obj.set_taborder("1");
            obj.set_text("담당자");
            obj.set_cssclass("sta_TITLE_Bg");
            this.divData.form.tabData.tab7.addChild(obj.name, obj);

            obj = new Grid("objGrdtab7","5","44",null,"265","5",null,null,null,null,null,this.divData.form.tabData.tab7.form);
            obj.set_taborder("0");
            obj._setContents("");
            this.divData.form.tabData.tab7.addChild(obj.name, obj);

            obj = new Button("btnReg",null,"10","50",null,"10","objGrdtab7:10",null,null,null,null,this.divData.form.tabData.tab7.form);
            obj.set_taborder("1");
            obj.set_text("등록");
            this.divData.form.tabData.tab7.addChild(obj.name, obj);

            obj = new Static("staTitle01","10","objGrdtab7:10",null,"24","10",null,null,null,null,null,this.divData.form.tabData.tab7.form);
            obj.set_taborder("3");
            obj.set_text("열람부서");
            obj.set_cssclass("sta_TITLE_Bg");
            this.divData.form.tabData.tab7.addChild(obj.name, obj);

            obj = new Grid("objGrdtab7_Auth","5","staTitle01:10",null,"265","5",null,null,null,null,null,this.divData.form.tabData.tab7.form);
            obj.set_taborder("4");
            obj._setContents("");
            this.divData.form.tabData.tab7.addChild(obj.name, obj);

            obj = new Button("btnReg_Auth","staTitle01:-50","objGrdtab7:10","50",null,null,"objGrdtab7_Auth:10",null,null,null,null,this.divData.form.tabData.tab7.form);
            obj.set_taborder("5");
            obj.set_text("등록");
            this.divData.form.tabData.tab7.addChild(obj.name, obj);

            obj = new Tabpage("tab2",this.divData.form.tabData);
            obj.set_text("현설결과");
            this.divData.form.tabData.addChild(obj.name, obj);

            obj = new Static("staID_FILE_ATTCH","5","360","120","149",null,null,null,null,null,null,this.divData.form.tabData.tab2.form);
            obj.set_taborder("18");
            obj.set_text("첨부파일");
            obj.set_cssclass("sta_WF_tablelabel");
            obj.set_textAlign("left");
            this.divData.form.tabData.tab2.addChild(obj.name, obj);

            obj = new Static("sta27","124","360","1158","149",null,null,null,null,null,null,this.divData.form.tabData.tab2.form);
            obj.set_taborder("19");
            obj.set_cssclass("sta_WF_tablebg");
            this.divData.form.tabData.tab2.addChild(obj.name, obj);

            obj = new Static("staDS_RM_SP","5","271","120","90",null,null,null,null,null,null,this.divData.form.tabData.tab2.form);
            obj.set_taborder("14");
            obj.set_text("특기사항");
            obj.set_cssclass("sta_WF_tablelabel");
            obj.set_textAlign("left");
            this.divData.form.tabData.tab2.addChild(obj.name, obj);

            obj = new Static("sta06","124","271","1158","90",null,null,null,null,null,null,this.divData.form.tabData.tab2.form);
            obj.set_taborder("16");
            obj.set_cssclass("sta_WF_tablebg");
            this.divData.form.tabData.tab2.addChild(obj.name, obj);

            obj = new Button("btnRegFieldExpl",null,"5","50","24","5",null,null,null,null,null,this.divData.form.tabData.tab2.form);
            obj.set_taborder("0");
            obj.set_text("등록");
            this.divData.form.tabData.tab2.addChild(obj.name, obj);

            obj = new Static("staDT_SITE_EXPL","5","37","120","30",null,null,null,null,null,null,this.divData.form.tabData.tab2.form);
            obj.set_taborder("1");
            obj.set_text("현장설명회 일자");
            obj.set_cssclass("sta_WF_tablelabel");
            obj.set_textAlign("left");
            this.divData.form.tabData.tab2.addChild(obj.name, obj);

            obj = new Static("sta02","124","37","1158","30",null,null,null,null,null,null,this.divData.form.tabData.tab2.form);
            obj.set_taborder("2");
            obj.set_cssclass("sta_WF_tablebg");
            this.divData.form.tabData.tab2.addChild(obj.name, obj);

            obj = new Static("staID_USER_EXPL","5","66","120","30",null,null,null,null,null,null,this.divData.form.tabData.tab2.form);
            obj.set_taborder("3");
            obj.set_text("현설참가자");
            obj.set_cssclass("sta_WF_tablelabel");
            obj.set_textAlign("left");
            this.divData.form.tabData.tab2.addChild(obj.name, obj);

            obj = new Static("sta00","124","66","1158","30",null,null,null,null,null,null,this.divData.form.tabData.tab2.form);
            obj.set_taborder("4");
            obj.set_cssclass("sta_WF_tablebg");
            this.divData.form.tabData.tab2.addChild(obj.name, obj);

            obj = new Static("staDS_EXPL","5","95","120","90",null,null,null,null,null,null,this.divData.form.tabData.tab2.form);
            obj.set_taborder("5");
            obj.set_text("공사개요");
            obj.set_cssclass("sta_WF_tablelabel");
            obj.set_textAlign("left");
            this.divData.form.tabData.tab2.addChild(obj.name, obj);

            obj = new Static("sta03","124","95","1158","90",null,null,null,null,null,null,this.divData.form.tabData.tab2.form);
            obj.set_taborder("7");
            obj.set_cssclass("sta_WF_tablebg");
            this.divData.form.tabData.tab2.addChild(obj.name, obj);

            obj = new TextArea("txtDS_EXPL","129","100","1148","80",null,null,null,null,null,null,this.divData.form.tabData.tab2.form);
            obj.set_taborder("6");
            obj.set_maxlength("1000");
            obj.set_enable("true");
            obj.set_readonly("true");
            this.divData.form.tabData.tab2.addChild(obj.name, obj);

            obj = new Static("staDS_INCU_CONST","5","184","120","30",null,null,null,null,null,null,this.divData.form.tabData.tab2.form);
            obj.set_taborder("8");
            obj.set_text("포함공사");
            obj.set_cssclass("sta_WF_tablelabel");
            obj.set_textAlign("left");
            this.divData.form.tabData.tab2.addChild(obj.name, obj);

            obj = new Static("sta01","124","184","1158","30",null,null,null,null,null,null,this.divData.form.tabData.tab2.form);
            obj.set_taborder("9");
            obj.set_cssclass("sta_WF_tablebg");
            this.divData.form.tabData.tab2.addChild(obj.name, obj);

            obj = new Static("staDS_EXCP_CONST","5","213","120","30",null,null,null,null,null,null,this.divData.form.tabData.tab2.form);
            obj.set_taborder("10");
            obj.set_text("제외공사");
            obj.set_cssclass("sta_WF_tablelabel");
            obj.set_textAlign("left");
            this.divData.form.tabData.tab2.addChild(obj.name, obj);

            obj = new Static("sta04","124","213","1158","30",null,null,null,null,null,null,this.divData.form.tabData.tab2.form);
            obj.set_taborder("11");
            obj.set_cssclass("sta_WF_tablebg");
            this.divData.form.tabData.tab2.addChild(obj.name, obj);

            obj = new Static("staDS_MAT_PAY","5","242","120","30",null,null,null,null,null,null,this.divData.form.tabData.tab2.form);
            obj.set_taborder("12");
            obj.set_text("지급자재");
            obj.set_cssclass("sta_WF_tablelabel");
            obj.set_textAlign("left");
            this.divData.form.tabData.tab2.addChild(obj.name, obj);

            obj = new Static("sta05","124","242","1158","30",null,null,null,null,null,null,this.divData.form.tabData.tab2.form);
            obj.set_taborder("13");
            obj.set_cssclass("sta_WF_tablebg");
            this.divData.form.tabData.tab2.addChild(obj.name, obj);

            obj = new TextArea("txtDS_RM_SP","129","276","1148","80",null,null,null,null,null,null,this.divData.form.tabData.tab2.form);
            obj.set_taborder("15");
            obj.set_maxlength("1000");
            obj.set_enable("true");
            obj.set_readonly("true");
            this.divData.form.tabData.tab2.addChild(obj.name, obj);

            obj = new Div("divFile","119","354","1145","150",null,null,null,null,null,null,this.divData.form.tabData.tab2.form);
            obj.set_taborder("17");
            obj.set_url("cmm::cmmFileManager.xfdl");
            obj.set_text("");
            this.divData.form.tabData.tab2.addChild(obj.name, obj);

            obj = new Edit("ctxtID_USER_EXPL","129","71","111","20",null,null,null,null,null,null,this.divData.form.tabData.tab2.form);
            obj.set_taborder("20");
            obj.set_value("");
            obj.set_enable("true");
            obj.set_readonly("true");
            this.divData.form.tabData.tab2.addChild(obj.name, obj);

            obj = new Edit("ctxtDS_USER_EXPL","244","71","183","20",null,null,null,null,null,null,this.divData.form.tabData.tab2.form);
            obj.set_taborder("21");
            obj.set_value("");
            obj.set_enable("true");
            obj.set_readonly("true");
            this.divData.form.tabData.tab2.addChild(obj.name, obj);

            obj = new Edit("ctxtDS_INCU_CONST","129","189","298","20",null,null,null,null,null,null,this.divData.form.tabData.tab2.form);
            obj.set_taborder("22");
            obj.set_value("");
            obj.set_enable("true");
            obj.set_readonly("true");
            this.divData.form.tabData.tab2.addChild(obj.name, obj);

            obj = new Edit("ctxtDS_EXCP_CONST","129","218","298","20",null,null,null,null,null,null,this.divData.form.tabData.tab2.form);
            obj.set_taborder("23");
            obj.set_value("");
            obj.set_enable("true");
            obj.set_readonly("true");
            this.divData.form.tabData.tab2.addChild(obj.name, obj);

            obj = new Edit("ctxtDS_MAT_PAY","129","247","298","20",null,null,null,null,null,null,this.divData.form.tabData.tab2.form);
            obj.set_taborder("24");
            obj.set_value("");
            obj.set_enable("true");
            obj.set_readonly("true");
            this.divData.form.tabData.tab2.addChild(obj.name, obj);

            obj = new Calendar("ctclDT_SITE_EXPL","130","43","132","20",null,null,null,null,null,null,this.divData.form.tabData.tab2.form);
            obj.set_taborder("25");
            obj.set_dateformat("yyyy-MM-dd");
            obj.set_editformat("yyyyMMdd");
            obj.set_autoselect("true");
            obj.set_value("20200101");
            obj.set_enable("true");
            obj.set_visible("true");
            obj.set_readonly("true");
            this.divData.form.tabData.tab2.addChild(obj.name, obj);

            obj = new Combo("ccboH_SITE_EXPL","267","43","45","20",null,null,null,null,null,null,this.divData.form.tabData.tab2.form);
            obj.set_taborder("26");
            obj.set_innerdataset("dshours");
            obj.set_codecolumn("CD_CODE");
            obj.set_datacolumn("DS_CODE");
            obj.set_readonly("true");
            obj.set_text("00");
            obj.set_value("00");
            obj.set_index("-1");
            this.divData.form.tabData.tab2.addChild(obj.name, obj);

            obj = new Combo("ccboM_SITE_EXPL","317","43","45","20",null,null,null,null,null,null,this.divData.form.tabData.tab2.form);
            obj.set_taborder("27");
            obj.set_codecolumn("CD_CODE");
            obj.set_datacolumn("DS_CODE");
            obj.set_innerdataset("dsMinutes");
            obj.set_readonly("true");
            obj.set_text("00");
            obj.set_value("00");
            obj.set_index("-1");
            this.divData.form.tabData.tab2.addChild(obj.name, obj);

            obj = new Button("btnApp",null,"5","70","24","65",null,null,null,null,null,this.divData.form.tabData.tab2.form);
            obj.set_taborder("28");
            obj.set_text("결재요청");
            obj.set_visible("false");
            this.divData.form.tabData.tab2.addChild(obj.name, obj);

            obj = new Static("staTab1Title01_00_01_00","1032","7",null,"22","147",null,null,null,null,null,this.divData.form.tabData.tab2.form);
            obj.set_taborder("29");
            obj.set_text("");
            obj.set_textAlign("right");
            obj.set_font("bold 12px/normal \"Dotum\"");
            obj.set_visible("false");
            this.divData.form.tabData.tab2.addChild(obj.name, obj);

            obj = new Static("staTab1Title01_00_01","963","7",null,"22","266",null,null,null,null,null,this.divData.form.tabData.tab2.form);
            obj.set_taborder("30");
            obj.set_text("결재 상태 :");
            obj.set_visible("false");
            this.divData.form.tabData.tab2.addChild(obj.name, obj);

            obj = new Tabpage("tab3",this.divData.form.tabData);
            obj.set_text("입찰평가");
            this.divData.form.tabData.addChild(obj.name, obj);

            obj = new Static("staDS_RM_OP","5","37","120","90",null,null,null,null,null,null,this.divData.form.tabData.tab3.form);
            obj.set_taborder("2");
            obj.set_text("의견");
            obj.set_cssclass("sta_WF_tablelabel");
            obj.set_textAlign("left");
            this.divData.form.tabData.tab3.addChild(obj.name, obj);

            obj = new Static("sta03","124","37","1158","90",null,null,null,null,null,null,this.divData.form.tabData.tab3.form);
            obj.set_taborder("4");
            obj.set_cssclass("sta_WF_tablebg");
            this.divData.form.tabData.tab3.addChild(obj.name, obj);

            obj = new Grid("objGrdtab3","5","211",null,null,"5","32",null,null,null,null,this.divData.form.tabData.tab3.form);
            obj.set_taborder("0");
            obj._setContents("");
            this.divData.form.tabData.tab3.addChild(obj.name, obj);

            obj = new Static("staTab1Title","5","179",null,"22","5",null,null,null,null,null,this.divData.form.tabData.tab3.form);
            obj.set_taborder("1");
            obj.set_text("컨소시엄");
            obj.set_cssclass("sta_TITLE_Bg");
            this.divData.form.tabData.tab3.addChild(obj.name, obj);

            obj = new TextArea("txtDS_RM_OP","129","42","1148","80",null,null,null,null,null,null,this.divData.form.tabData.tab3.form);
            obj.set_taborder("3");
            obj.set_maxlength("1000");
            obj.set_enable("true");
            obj.set_readonly("false");
            this.divData.form.tabData.tab3.addChild(obj.name, obj);

            obj = new Button("btnDelConsor",null,"179","50","24","6",null,null,null,null,null,this.divData.form.tabData.tab3.form);
            obj.set_taborder("5");
            obj.set_text("삭제");
            this.divData.form.tabData.tab3.addChild(obj.name, obj);

            obj = new Button("btnRegConsor",null,"179","50","24","66",null,null,null,null,null,this.divData.form.tabData.tab3.form);
            obj.set_taborder("6");
            obj.set_text("등록");
            obj.set_tooltiptext("컨소시엄 추가");
            this.divData.form.tabData.tab3.addChild(obj.name, obj);

            obj = new Button("btnApp",null,"7","70","24","7",null,null,null,null,null,this.divData.form.tabData.tab3.form);
            obj.set_taborder("7");
            obj.set_text("결재요청");
            obj.set_visible("false");
            this.divData.form.tabData.tab3.addChild(obj.name, obj);

            obj = new Static("staTab1Title01_00_01_00","1100","9",null,"22","79",null,null,null,null,null,this.divData.form.tabData.tab3.form);
            obj.set_taborder("8");
            obj.set_text("");
            obj.set_textAlign("right");
            obj.set_font("bold 12px/normal \"Dotum\"");
            obj.set_visible("false");
            this.divData.form.tabData.tab3.addChild(obj.name, obj);

            obj = new Static("staTab1Title01_00_01","1031","9",null,"22","198",null,null,null,null,null,this.divData.form.tabData.tab3.form);
            obj.set_taborder("9");
            obj.set_text("결재 상태 :");
            obj.set_visible("false");
            this.divData.form.tabData.tab3.addChild(obj.name, obj);

            obj = new Static("staDS_RM_OP00","5","126","120","32",null,null,null,null,null,null,this.divData.form.tabData.tab3.form);
            obj.set_taborder("10");
            obj.set_text("만점점수");
            obj.set_cssclass("sta_WF_tablelabel");
            obj.set_textAlign("left");
            this.divData.form.tabData.tab3.addChild(obj.name, obj);

            obj = new Static("sta03_00","124","126","1158","32",null,null,null,null,null,null,this.divData.form.tabData.tab3.form);
            obj.set_taborder("11");
            obj.set_cssclass("sta_WF_tablebg");
            this.divData.form.tabData.tab3.addChild(obj.name, obj);

            obj = new Static("staPercent01","135","133","79","20",null,null,null,null,null,null,this.divData.form.tabData.tab3.form);
            obj.set_taborder("12");
            obj.set_text("기술/설계점수");
            obj.set_textAlign("right");
            this.divData.form.tabData.tab3.addChild(obj.name, obj);

            obj = new MaskEdit("ctxtNO_DSN_SCO","222","133","77","20",null,null,null,null,null,null,this.divData.form.tabData.tab3.form);
            obj.set_taborder("13");
            obj.set_value("");
            obj.set_textAlign("right");
            obj.set_format("#,0.000");
            obj.set_autoselect("true");
            obj.set_readonly("false");
            this.divData.form.tabData.tab3.addChild(obj.name, obj);

            obj = new MaskEdit("ctxtNO_COST_SCO","371","133","77","20",null,null,null,null,null,null,this.divData.form.tabData.tab3.form);
            obj.set_taborder("14");
            obj.set_value("");
            obj.set_textAlign("right");
            obj.set_format("#,0.000");
            obj.set_autoselect("true");
            obj.set_readonly("false");
            this.divData.form.tabData.tab3.addChild(obj.name, obj);

            obj = new Static("staPercent01_00","303","133","60","20",null,null,null,null,null,null,this.divData.form.tabData.tab3.form);
            obj.set_taborder("15");
            obj.set_text("가격점수");
            obj.set_textAlign("right");
            this.divData.form.tabData.tab3.addChild(obj.name, obj);

            obj = new MaskEdit("ctxtNO_COST_SCO_TT","548","133","77","20",null,null,null,null,null,null,this.divData.form.tabData.tab3.form);
            obj.set_taborder("16");
            obj.set_value("");
            obj.set_textAlign("right");
            obj.set_format("#,0.000");
            obj.set_autoselect("true");
            obj.set_readonly("true");
            this.divData.form.tabData.tab3.addChild(obj.name, obj);

            obj = new Static("staPercent01_00_00","480","133","60","20",null,null,null,null,null,null,this.divData.form.tabData.tab3.form);
            obj.set_taborder("17");
            obj.set_text("합계");
            obj.set_textAlign("right");
            this.divData.form.tabData.tab3.addChild(obj.name, obj);

            obj = new Tabpage("tab8",this.divData.form.tabData);
            obj.set_text("입찰금액결정");
            this.divData.form.tabData.addChild(obj.name, obj);

            obj = new Static("staAM_ESTM","5","37","120","30",null,null,null,null,null,null,this.divData.form.tabData.tab8.form);
            obj.set_taborder("0");
            obj.set_text("추정가격");
            obj.set_cssclass("sta_WF_tablelabel");
            obj.set_textAlign("right");
            this.divData.form.tabData.tab8.addChild(obj.name, obj);

            obj = new Static("sta14","124","37","1158","30",null,null,null,null,null,null,this.divData.form.tabData.tab8.form);
            obj.set_taborder("1");
            obj.set_cssclass("sta_WF_tablebg");
            this.divData.form.tabData.tab8.addChild(obj.name, obj);

            obj = new Static("staAM_INIT","5","95","120","30",null,null,null,null,null,null,this.divData.form.tabData.tab8.form);
            obj.set_taborder("2");
            obj.set_text("예가대비낙착율");
            obj.set_cssclass("sta_WF_tablelabel");
            obj.set_textAlign("right");
            this.divData.form.tabData.tab8.addChild(obj.name, obj);

            obj = new Static("sta17","124","95","1158","30",null,null,null,null,null,null,this.divData.form.tabData.tab8.form);
            obj.set_taborder("3");
            obj.set_cssclass("sta_WF_tablebg");
            this.divData.form.tabData.tab8.addChild(obj.name, obj);

            obj = new Static("sta22","124","124","1158","30",null,null,null,null,null,null,this.divData.form.tabData.tab8.form);
            obj.set_taborder("4");
            obj.set_cssclass("sta_WF_tablebg");
            this.divData.form.tabData.tab8.addChild(obj.name, obj);

            obj = new Static("staDS_OPNI","5","153","120","90",null,null,null,null,null,null,this.divData.form.tabData.tab8.form);
            obj.set_taborder("5");
            obj.set_text("비고");
            obj.set_cssclass("sta_WF_tablelabel");
            obj.set_textAlign("right");
            this.divData.form.tabData.tab8.addChild(obj.name, obj);

            obj = new Static("sta24","124","153","1158","90",null,null,null,null,null,null,this.divData.form.tabData.tab8.form);
            obj.set_taborder("6");
            obj.set_cssclass("sta_WF_tablebg");
            this.divData.form.tabData.tab8.addChild(obj.name, obj);

            obj = new MaskEdit("ctxtAM_ESTM","129","42","140","20",null,null,null,null,null,null,this.divData.form.tabData.tab8.form);
            obj.set_taborder("7");
            obj.set_value("");
            obj.set_textAlign("right");
            obj.set_format("#,0");
            obj.set_autoselect("true");
            obj.set_readonly("true");
            obj.set_displaynulltext(" ");
            this.divData.form.tabData.tab8.addChild(obj.name, obj);

            obj = new TextArea("txtDS_OPNI","129","158","1148","80",null,null,null,null,null,null,this.divData.form.tabData.tab8.form);
            obj.set_taborder("8");
            obj.set_maxlength("1000");
            obj.set_enable("false");
            obj.set_readonly("true");
            this.divData.form.tabData.tab8.addChild(obj.name, obj);

            obj = new Static("sta23_00","316","41","121","20",null,null,null,null,null,null,this.divData.form.tabData.tab8.form);
            obj.set_taborder("9");
            obj.set_text("(VAT 포함)");
            this.divData.form.tabData.tab8.addChild(obj.name, obj);

            obj = new Static("staAM_ESTM00","5","66","120","30",null,null,null,null,null,null,this.divData.form.tabData.tab8.form);
            obj.set_taborder("10");
            obj.set_text("기초금액");
            obj.set_textAlign("right");
            obj.set_cssclass("sta_WF_tablelabelE");
            this.divData.form.tabData.tab8.addChild(obj.name, obj);

            obj = new Static("sta14_00","124","66","1158","30",null,null,null,null,null,null,this.divData.form.tabData.tab8.form);
            obj.set_taborder("11");
            obj.set_cssclass("sta_WF_tablebg");
            this.divData.form.tabData.tab8.addChild(obj.name, obj);

            obj = new MaskEdit("ctxtAM_ESTM00","129","71","140","20",null,null,null,null,null,null,this.divData.form.tabData.tab8.form);
            obj.set_taborder("12");
            obj.set_value("");
            obj.set_textAlign("right");
            obj.set_format("#,0");
            obj.set_autoselect("true");
            obj.set_readonly("true");
            obj.set_displaynulltext(" ");
            this.divData.form.tabData.tab8.addChild(obj.name, obj);

            obj = new Static("sta23_00_01","316","70","121","20",null,null,null,null,null,null,this.divData.form.tabData.tab8.form);
            obj.set_taborder("13");
            obj.set_text("(VAT 포함)");
            this.divData.form.tabData.tab8.addChild(obj.name, obj);

            obj = new Button("btnReg",null,"5","50","24","5",null,null,null,null,null,this.divData.form.tabData.tab8.form);
            obj.set_taborder("14");
            obj.set_text("등록");
            this.divData.form.tabData.tab8.addChild(obj.name, obj);

            obj = new Button("btnApp",null,"5","70","24","65",null,null,null,null,null,this.divData.form.tabData.tab8.form);
            obj.set_taborder("15");
            obj.set_text("결재요청");
            obj.set_visible("false");
            this.divData.form.tabData.tab8.addChild(obj.name, obj);

            obj = new Static("staTab1Title01_00_01_00","1042","8",null,"22","142",null,null,null,null,null,this.divData.form.tabData.tab8.form);
            obj.set_taborder("16");
            obj.set_text("");
            obj.set_textAlign("right");
            obj.set_font("bold 12px/normal \"Dotum\"");
            obj.set_visible("false");
            this.divData.form.tabData.tab8.addChild(obj.name, obj);

            obj = new Static("staTab1Title01_00_01","973","8",null,"22","256",null,null,null,null,null,this.divData.form.tabData.tab8.form);
            obj.set_taborder("17");
            obj.set_text("결재 상태 :");
            obj.set_visible("false");
            this.divData.form.tabData.tab8.addChild(obj.name, obj);

            obj = new Static("sta06_00_00","278","42","29","20",null,null,null,null,null,null,this.divData.form.tabData.tab8.form);
            obj.set_taborder("18");
            this.divData.form.tabData.tab8.addChild(obj.name, obj);

            obj = new Static("sta06_00_00_00","278","70","29","20",null,null,null,null,null,null,this.divData.form.tabData.tab8.form);
            obj.set_taborder("19");
            this.divData.form.tabData.tab8.addChild(obj.name, obj);

            obj = new Static("staAM_INIT00","5","124","120","30",null,null,null,null,null,null,this.divData.form.tabData.tab8.form);
            obj.set_taborder("21");
            obj.set_text("기초대비낙찰율");
            obj.set_cssclass("sta_WF_tablelabel");
            obj.set_textAlign("right");
            this.divData.form.tabData.tab8.addChild(obj.name, obj);

            obj = new MaskEdit("ctxtAM_ESTM00_00","129","100","140","20",null,null,null,null,null,null,this.divData.form.tabData.tab8.form);
            obj.set_taborder("22");
            obj.set_value("");
            obj.set_textAlign("right");
            obj.set_format("#,0");
            obj.set_autoselect("true");
            obj.set_readonly("true");
            obj.set_displaynulltext(" ");
            this.divData.form.tabData.tab8.addChild(obj.name, obj);

            obj = new MaskEdit("ctxtAM_ESTM00_00_00","129","129","140","20",null,null,null,null,null,null,this.divData.form.tabData.tab8.form);
            obj.set_taborder("23");
            obj.set_value("");
            obj.set_textAlign("right");
            obj.set_format("#,0");
            obj.set_autoselect("true");
            obj.set_readonly("true");
            obj.set_displaynulltext(" ");
            this.divData.form.tabData.tab8.addChild(obj.name, obj);

            obj = new Static("sta06_00_00_00_00_00","278","129","29","20",null,null,null,null,null,null,this.divData.form.tabData.tab8.form);
            obj.set_taborder("24");
            obj.set_text("%");
            this.divData.form.tabData.tab8.addChild(obj.name, obj);

            obj = new Static("sta06_00_00_00_00","278","99","29","20",null,null,null,null,null,null,this.divData.form.tabData.tab8.form);
            obj.set_taborder("20");
            obj.set_text("%");
            this.divData.form.tabData.tab8.addChild(obj.name, obj);

            obj = new Tabpage("tab4",this.divData.form.tabData);
            obj.set_text("입찰결과");
            this.divData.form.tabData.addChild(obj.name, obj);

            obj = new Static("staDT_BID_RECOG","5","37","120","30",null,null,null,null,null,null,this.divData.form.tabData.tab4.form);
            obj.set_taborder("0");
            obj.set_text("수주인식");
            obj.set_cssclass("sta_WF_tablelabel");
            obj.set_textAlign("right");
            this.divData.form.tabData.tab4.addChild(obj.name, obj);

            obj = new Static("sta00","124","37","307","30",null,null,null,null,null,null,this.divData.form.tabData.tab4.form);
            obj.set_taborder("1");
            obj.set_cssclass("sta_WF_tablebg");
            this.divData.form.tabData.tab4.addChild(obj.name, obj);

            obj = new Static("staAM_DESIGN","430","37","120","30",null,null,null,null,null,null,this.divData.form.tabData.tab4.form);
            obj.set_taborder("2");
            obj.set_text("설계금액");
            obj.set_cssclass("sta_WF_tablelabel");
            obj.set_textAlign("right");
            this.divData.form.tabData.tab4.addChild(obj.name, obj);

            obj = new Static("sta18","549","37","307","30",null,null,null,null,null,null,this.divData.form.tabData.tab4.form);
            obj.set_taborder("3");
            obj.set_cssclass("sta_WF_tablebg");
            this.divData.form.tabData.tab4.addChild(obj.name, obj);

            obj = new Static("staTY_BID_RLT","855","37","120","30",null,null,null,null,null,null,this.divData.form.tabData.tab4.form);
            obj.set_taborder("4");
            obj.set_text("입찰결과");
            obj.set_textAlign("right");
            obj.set_cssclass("sta_WF_tablelabelE");
            this.divData.form.tabData.tab4.addChild(obj.name, obj);

            obj = new Static("sta04","974","37","308","30",null,null,null,null,null,null,this.divData.form.tabData.tab4.form);
            obj.set_taborder("5");
            obj.set_cssclass("sta_WF_tablebg");
            this.divData.form.tabData.tab4.addChild(obj.name, obj);

            obj = new Button("btnRegBidRlt",null,"5","50","24","5",null,null,null,null,null,this.divData.form.tabData.tab4.form);
            obj.set_taborder("46");
            obj.set_text("등록");
            this.divData.form.tabData.tab4.addChild(obj.name, obj);

            obj = new Static("staDT_FIX","5","66","120","30",null,null,null,null,null,null,this.divData.form.tabData.tab4.form);
            obj.set_taborder("6");
            obj.set_text("수주확정");
            obj.set_cssclass("sta_WF_tablelabel");
            obj.set_textAlign("right");
            this.divData.form.tabData.tab4.addChild(obj.name, obj);

            obj = new Static("sta01","124","66","307","30",null,null,null,null,null,null,this.divData.form.tabData.tab4.form);
            obj.set_taborder("7");
            obj.set_cssclass("sta_WF_tablebg");
            this.divData.form.tabData.tab4.addChild(obj.name, obj);

            obj = new Static("staAM_FIX_SUP","430","66","120","30",null,null,null,null,null,null,this.divData.form.tabData.tab4.form);
            obj.set_taborder("8");
            obj.set_text("수주확정 공급가");
            obj.set_cssclass("sta_WF_tablelabel");
            obj.set_textAlign("right");
            this.divData.form.tabData.tab4.addChild(obj.name, obj);

            obj = new Static("sta02","549","66","307","30",null,null,null,null,null,null,this.divData.form.tabData.tab4.form);
            obj.set_taborder("9");
            obj.set_cssclass("sta_WF_tablebg");
            this.divData.form.tabData.tab4.addChild(obj.name, obj);

            obj = new Static("staAM_FIX_VAT","855","66","120","30",null,null,null,null,null,null,this.divData.form.tabData.tab4.form);
            obj.set_taborder("10");
            obj.set_text("수주확정 부가세");
            obj.set_cssclass("sta_WF_tablelabel");
            obj.set_textAlign("right");
            this.divData.form.tabData.tab4.addChild(obj.name, obj);

            obj = new Static("sta03","974","66","308","30",null,null,null,null,null,null,this.divData.form.tabData.tab4.form);
            obj.set_taborder("11");
            obj.set_cssclass("sta_WF_tablebg");
            this.divData.form.tabData.tab4.addChild(obj.name, obj);

            obj = new Static("staAM_ESTM_CAL","5","95","120","30",null,null,null,null,null,null,this.divData.form.tabData.tab4.form);
            obj.set_taborder("12");
            obj.set_text("예정가격");
            obj.set_cssclass("sta_WF_tablelabel");
            obj.set_textAlign("right");
            this.divData.form.tabData.tab4.addChild(obj.name, obj);

            obj = new Static("sta05","124","95","307","30",null,null,null,null,null,null,this.divData.form.tabData.tab4.form);
            obj.set_taborder("13");
            obj.set_cssclass("sta_WF_tablebg");
            this.divData.form.tabData.tab4.addChild(obj.name, obj);

            obj = new Static("staCD_CLS01","430","95","120","30",null,null,null,null,null,null,this.divData.form.tabData.tab4.form);
            obj.set_taborder("14");
            obj.set_text("예정가격 공급가");
            obj.set_cssclass("sta_WF_tablelabel");
            obj.set_textAlign("right");
            this.divData.form.tabData.tab4.addChild(obj.name, obj);

            obj = new Static("sta06","549","95","307","30",null,null,null,null,null,null,this.divData.form.tabData.tab4.form);
            obj.set_taborder("15");
            obj.set_cssclass("sta_WF_tablebg");
            this.divData.form.tabData.tab4.addChild(obj.name, obj);

            obj = new Static("staCD_CLS_CONST01","855","95","120","30",null,null,null,null,null,null,this.divData.form.tabData.tab4.form);
            obj.set_taborder("16");
            obj.set_text("예정가격 부가세");
            obj.set_cssclass("sta_WF_tablelabel");
            obj.set_textAlign("right");
            this.divData.form.tabData.tab4.addChild(obj.name, obj);

            obj = new Static("sta07","974","95","308","30",null,null,null,null,null,null,this.divData.form.tabData.tab4.form);
            obj.set_taborder("17");
            obj.set_cssclass("sta_WF_tablebg");
            this.divData.form.tabData.tab4.addChild(obj.name, obj);

            obj = new Static("staAM_BID_CAL","5","124","120","30",null,null,null,null,null,null,this.divData.form.tabData.tab4.form);
            obj.set_taborder("18");
            obj.set_text("낙찰가격");
            obj.set_cssclass("sta_WF_tablelabel");
            obj.set_textAlign("right");
            this.divData.form.tabData.tab4.addChild(obj.name, obj);

            obj = new Static("sta08","124","124","307","30",null,null,null,null,null,null,this.divData.form.tabData.tab4.form);
            obj.set_taborder("19");
            obj.set_cssclass("sta_WF_tablebg");
            this.divData.form.tabData.tab4.addChild(obj.name, obj);

            obj = new Static("staAM_BID_SUP","430","124","120","30",null,null,null,null,null,null,this.divData.form.tabData.tab4.form);
            obj.set_taborder("20");
            obj.set_text("낙찰가격 공급가");
            obj.set_cssclass("sta_WF_tablelabel");
            obj.set_textAlign("right");
            this.divData.form.tabData.tab4.addChild(obj.name, obj);

            obj = new Static("sta09","549","124","307","30",null,null,null,null,null,null,this.divData.form.tabData.tab4.form);
            obj.set_taborder("21");
            obj.set_cssclass("sta_WF_tablebg");
            this.divData.form.tabData.tab4.addChild(obj.name, obj);

            obj = new Static("staAM_BID_VAT","855","124","120","30",null,null,null,null,null,null,this.divData.form.tabData.tab4.form);
            obj.set_taborder("22");
            obj.set_text("낙찰가격 부가세");
            obj.set_cssclass("sta_WF_tablelabel");
            obj.set_textAlign("right");
            this.divData.form.tabData.tab4.addChild(obj.name, obj);

            obj = new Static("sta10","974","124","308","30",null,null,null,null,null,null,this.divData.form.tabData.tab4.form);
            obj.set_taborder("23");
            obj.set_cssclass("sta_WF_tablebg");
            this.divData.form.tabData.tab4.addChild(obj.name, obj);

            obj = new Static("staNO_BID_CO","5","153","120","30",null,null,null,null,null,null,this.divData.form.tabData.tab4.form);
            obj.set_taborder("24");
            obj.set_text("입찰참여사");
            obj.set_cssclass("sta_WF_tablelabel");
            obj.set_textAlign("right");
            this.divData.form.tabData.tab4.addChild(obj.name, obj);

            obj = new Static("sta11","124","153","307","30",null,null,null,null,null,null,this.divData.form.tabData.tab4.form);
            obj.set_taborder("25");
            obj.set_cssclass("sta_WF_tablebg");
            this.divData.form.tabData.tab4.addChild(obj.name, obj);

            obj = new Static("staNO_FCT","430","153","120","30",null,null,null,null,null,null,this.divData.form.tabData.tab4.form);
            obj.set_taborder("26");
            obj.set_text("난이도계수");
            obj.set_cssclass("sta_WF_tablelabel");
            obj.set_textAlign("right");
            this.divData.form.tabData.tab4.addChild(obj.name, obj);

            obj = new Static("sta12","549","153","307","30",null,null,null,null,null,null,this.divData.form.tabData.tab4.form);
            obj.set_taborder("27");
            obj.set_cssclass("sta_WF_tablebg");
            this.divData.form.tabData.tab4.addChild(obj.name, obj);

            obj = new Static("staTY_ENTY","855","153","120","30",null,null,null,null,null,null,this.divData.form.tabData.tab4.form);
            obj.set_taborder("28");
            obj.set_text("참가방법");
            obj.set_cssclass("sta_WF_tablelabel");
            obj.set_textAlign("right");
            this.divData.form.tabData.tab4.addChild(obj.name, obj);

            obj = new Static("sta13","974","153","308","30",null,null,null,null,null,null,this.divData.form.tabData.tab4.form);
            obj.set_taborder("29");
            obj.set_cssclass("sta_WF_tablebg");
            this.divData.form.tabData.tab4.addChild(obj.name, obj);

            obj = new Static("staAM_ESTM","5","182","120","30",null,null,null,null,null,null,this.divData.form.tabData.tab4.form);
            obj.set_taborder("30");
            obj.set_text("추정가격");
            obj.set_cssclass("sta_WF_tablelabel");
            obj.set_textAlign("right");
            this.divData.form.tabData.tab4.addChild(obj.name, obj);

            obj = new Static("sta14","124","182","1158","30",null,null,null,null,null,null,this.divData.form.tabData.tab4.form);
            obj.set_taborder("31");
            obj.set_cssclass("sta_WF_tablebg");
            this.divData.form.tabData.tab4.addChild(obj.name, obj);

            obj = new Static("staRT_BID","713","211","120","30",null,null,null,null,null,null,this.divData.form.tabData.tab4.form);
            obj.set_taborder("36");
            obj.set_text("낙찰사 투찰율");
            obj.set_cssclass("sta_WF_tablelabel");
            obj.set_textAlign("right");
            this.divData.form.tabData.tab4.addChild(obj.name, obj);

            obj = new Static("sta15","832","211","166","30",null,null,null,null,null,null,this.divData.form.tabData.tab4.form);
            obj.set_taborder("37");
            obj.set_cssclass("sta_WF_tablebg");
            this.divData.form.tabData.tab4.addChild(obj.name, obj);

            obj = new Static("staAM_INIT","5","211","120","30",null,null,null,null,null,null,this.divData.form.tabData.tab4.form);
            obj.set_taborder("32");
            obj.set_text("기초금액");
            obj.set_cssclass("sta_WF_tablelabel");
            obj.set_textAlign("right");
            this.divData.form.tabData.tab4.addChild(obj.name, obj);

            obj = new Static("sta17","124","211","307","30",null,null,null,null,null,null,this.divData.form.tabData.tab4.form);
            obj.set_taborder("33");
            obj.set_cssclass("sta_WF_tablebg");
            this.divData.form.tabData.tab4.addChild(obj.name, obj);

            obj = new Static("staRT_INIT","430","211","120","30",null,null,null,null,null,null,this.divData.form.tabData.tab4.form);
            obj.set_taborder("34");
            obj.set_text("기초금액 사정율");
            obj.set_cssclass("sta_WF_tablelabel");
            obj.set_textAlign("right");
            this.divData.form.tabData.tab4.addChild(obj.name, obj);

            obj = new Static("sta19","549","211","165","30",null,null,null,null,null,null,this.divData.form.tabData.tab4.form);
            obj.set_taborder("35");
            obj.set_cssclass("sta_WF_tablebg");
            this.divData.form.tabData.tab4.addChild(obj.name, obj);

            obj = new Static("staRT_SC","997","211","120","30",null,null,null,null,null,null,this.divData.form.tabData.tab4.form);
            obj.set_taborder("38");
            obj.set_text("추첨예가 사정율");
            obj.set_cssclass("sta_WF_tablelabel");
            obj.set_textAlign("right");
            this.divData.form.tabData.tab4.addChild(obj.name, obj);

            obj = new Static("sta20","1116","211","166","30",null,null,null,null,null,null,this.divData.form.tabData.tab4.form);
            obj.set_taborder("39");
            obj.set_cssclass("sta_WF_tablebg");
            this.divData.form.tabData.tab4.addChild(obj.name, obj);

            obj = new Static("staAM_BID_OUR","5","240","120","30",null,null,null,null,null,null,this.divData.form.tabData.tab4.form);
            obj.set_taborder("40");
            obj.set_text("당사투찰가격");
            obj.set_cssclass("sta_WF_tablelabel");
            obj.set_textAlign("right");
            this.divData.form.tabData.tab4.addChild(obj.name, obj);

            obj = new Static("sta21","124","240","307","30",null,null,null,null,null,null,this.divData.form.tabData.tab4.form);
            obj.set_taborder("41");
            obj.set_cssclass("sta_WF_tablebg");
            this.divData.form.tabData.tab4.addChild(obj.name, obj);

            obj = new Static("staRT_BID_OUR","430","240","120","30",null,null,null,null,null,null,this.divData.form.tabData.tab4.form);
            obj.set_taborder("42");
            obj.set_text("당사투찰율");
            obj.set_cssclass("sta_WF_tablelabel");
            obj.set_textAlign("right");
            this.divData.form.tabData.tab4.addChild(obj.name, obj);

            obj = new Static("sta22","549","240","733","30",null,null,null,null,null,null,this.divData.form.tabData.tab4.form);
            obj.set_taborder("43");
            obj.set_cssclass("sta_WF_tablebg");
            this.divData.form.tabData.tab4.addChild(obj.name, obj);

            obj = new Static("staDS_OPNI","5","269","120","90",null,null,null,null,null,null,this.divData.form.tabData.tab4.form);
            obj.set_taborder("44");
            obj.set_text("의견");
            obj.set_cssclass("sta_WF_tablelabel");
            obj.set_textAlign("right");
            this.divData.form.tabData.tab4.addChild(obj.name, obj);

            obj = new Static("sta24","124","269","1158","90",null,null,null,null,null,null,this.divData.form.tabData.tab4.form);
            obj.set_taborder("45");
            obj.set_cssclass("sta_WF_tablebg");
            this.divData.form.tabData.tab4.addChild(obj.name, obj);

            obj = new MaskEdit("ctxtAM_DESIGN","554","42","140","20",null,null,null,null,null,null,this.divData.form.tabData.tab4.form);
            obj.set_taborder("47");
            obj.set_value("");
            obj.set_textAlign("right");
            obj.set_format("#,###");
            obj.set_autoselect("true");
            obj.set_readonly("true");
            obj.set_displaynulltext(" ");
            this.divData.form.tabData.tab4.addChild(obj.name, obj);

            obj = new Edit("ctxtTY_BID_RLT","978","42","140","20",null,null,null,null,null,null,this.divData.form.tabData.tab4.form);
            obj.set_taborder("48");
            obj.set_readonly("true");
            this.divData.form.tabData.tab4.addChild(obj.name, obj);

            obj = new MaskEdit("ctxtAM_FIX_SUP","554","71","140","20",null,null,null,null,null,null,this.divData.form.tabData.tab4.form);
            obj.set_taborder("49");
            obj.set_value("");
            obj.set_textAlign("right");
            obj.set_format("#,###");
            obj.set_autoselect("true");
            obj.set_readonly("true");
            obj.set_displaynulltext(" ");
            this.divData.form.tabData.tab4.addChild(obj.name, obj);

            obj = new MaskEdit("ctxtAM_FIX_VAT","979","71","140","20",null,null,null,null,null,null,this.divData.form.tabData.tab4.form);
            obj.set_taborder("50");
            obj.set_value("");
            obj.set_textAlign("right");
            obj.set_format("#,###");
            obj.set_autoselect("true");
            obj.set_readonly("true");
            obj.set_displaynulltext(" ");
            this.divData.form.tabData.tab4.addChild(obj.name, obj);

            obj = new MaskEdit("ctxtAM_ESTM_SUP","554","100","140","20",null,null,null,null,null,null,this.divData.form.tabData.tab4.form);
            obj.set_taborder("51");
            obj.set_value("");
            obj.set_textAlign("right");
            obj.set_format("#,###");
            obj.set_autoselect("true");
            obj.set_readonly("true");
            obj.set_displaynulltext(" ");
            this.divData.form.tabData.tab4.addChild(obj.name, obj);

            obj = new MaskEdit("ctxtAM_BID_SUP","554","129","140","20",null,null,null,null,null,null,this.divData.form.tabData.tab4.form);
            obj.set_taborder("52");
            obj.set_value("");
            obj.set_textAlign("right");
            obj.set_format("#,###");
            obj.set_autoselect("true");
            obj.set_readonly("true");
            obj.set_displaynulltext(" ");
            this.divData.form.tabData.tab4.addChild(obj.name, obj);

            obj = new MaskEdit("ctxtAM_ESTM_CAL","129","100","140","20",null,null,null,null,null,null,this.divData.form.tabData.tab4.form);
            obj.set_taborder("53");
            obj.set_value("");
            obj.set_textAlign("right");
            obj.set_format("#,###");
            obj.set_autoselect("true");
            obj.set_readonly("true");
            this.divData.form.tabData.tab4.addChild(obj.name, obj);

            obj = new MaskEdit("ctxtAM_BID_CAL","129","129","140","20",null,null,null,null,null,null,this.divData.form.tabData.tab4.form);
            obj.set_taborder("54");
            obj.set_value("");
            obj.set_textAlign("right");
            obj.set_format("#,###");
            obj.set_autoselect("true");
            obj.set_readonly("true");
            this.divData.form.tabData.tab4.addChild(obj.name, obj);

            obj = new MaskEdit("ctxtAM_ESTM_VAT","979","100","140","20",null,null,null,null,null,null,this.divData.form.tabData.tab4.form);
            obj.set_taborder("55");
            obj.set_value("");
            obj.set_textAlign("right");
            obj.set_format("#,###");
            obj.set_autoselect("true");
            obj.set_readonly("true");
            obj.set_displaynulltext(" ");
            this.divData.form.tabData.tab4.addChild(obj.name, obj);

            obj = new MaskEdit("ctxtAM_BID_VAT","979","129","140","20",null,null,null,null,null,null,this.divData.form.tabData.tab4.form);
            obj.set_taborder("56");
            obj.set_value("");
            obj.set_textAlign("right");
            obj.set_format("#,###");
            obj.set_autoselect("true");
            obj.set_readonly("true");
            obj.set_displaynulltext(" ");
            this.divData.form.tabData.tab4.addChild(obj.name, obj);

            obj = new MaskEdit("ctxtAM_ESTM","129","187","140","20",null,null,null,null,null,null,this.divData.form.tabData.tab4.form);
            obj.set_taborder("57");
            obj.set_value("");
            obj.set_textAlign("right");
            obj.set_format("#,###");
            obj.set_autoselect("true");
            obj.set_readonly("true");
            obj.set_displaynulltext(" ");
            this.divData.form.tabData.tab4.addChild(obj.name, obj);

            obj = new MaskEdit("ctxtAM_INIT","129","216","140","20",null,null,null,null,null,null,this.divData.form.tabData.tab4.form);
            obj.set_taborder("58");
            obj.set_value("");
            obj.set_textAlign("right");
            obj.set_format("#,###");
            obj.set_autoselect("true");
            obj.set_readonly("true");
            obj.set_displaynulltext(" ");
            this.divData.form.tabData.tab4.addChild(obj.name, obj);

            obj = new MaskEdit("ctxtAM_BID_OUR","129","245","140","20",null,null,null,null,null,null,this.divData.form.tabData.tab4.form);
            obj.set_taborder("59");
            obj.set_value("");
            obj.set_textAlign("right");
            obj.set_format("#,###");
            obj.set_autoselect("true");
            obj.set_readonly("true");
            obj.set_displaynulltext(" ");
            this.divData.form.tabData.tab4.addChild(obj.name, obj);

            obj = new MaskEdit("ctxtNO_FCT","554","158","80","20",null,null,null,null,null,null,this.divData.form.tabData.tab4.form);
            obj.set_taborder("60");
            obj.set_value("");
            obj.set_textAlign("right");
            obj.set_format("#.###");
            obj.set_autoselect("true");
            obj.set_readonly("true");
            obj.set_displaynulltext("0");
            this.divData.form.tabData.tab4.addChild(obj.name, obj);

            obj = new Edit("ctxtTY_ENTY","979","158","140","20",null,null,null,null,null,null,this.divData.form.tabData.tab4.form);
            obj.set_taborder("61");
            obj.set_readonly("true");
            this.divData.form.tabData.tab4.addChild(obj.name, obj);

            obj = new MaskEdit("ctxtRT_INIT","554","216","80","20",null,null,null,null,null,null,this.divData.form.tabData.tab4.form);
            obj.set_taborder("62");
            obj.set_value("");
            obj.set_textAlign("right");
            obj.set_format("#.###");
            obj.set_autoselect("true");
            obj.set_readonly("true");
            this.divData.form.tabData.tab4.addChild(obj.name, obj);

            obj = new MaskEdit("ctxtRT_BID","837","216","80","20",null,null,null,null,null,null,this.divData.form.tabData.tab4.form);
            obj.set_taborder("63");
            obj.set_value("");
            obj.set_textAlign("right");
            obj.set_format("#.###");
            obj.set_autoselect("true");
            obj.set_readonly("true");
            this.divData.form.tabData.tab4.addChild(obj.name, obj);

            obj = new MaskEdit("ctxtRT_SC","1121","216","80","20",null,null,null,null,null,null,this.divData.form.tabData.tab4.form);
            obj.set_taborder("64");
            obj.set_value("");
            obj.set_textAlign("right");
            obj.set_format("#.###");
            obj.set_autoselect("true");
            obj.set_readonly("true");
            this.divData.form.tabData.tab4.addChild(obj.name, obj);

            obj = new MaskEdit("ctxtRT_BID_OUR","554","245","80","20",null,null,null,null,null,null,this.divData.form.tabData.tab4.form);
            obj.set_taborder("65");
            obj.set_value("");
            obj.set_textAlign("right");
            obj.set_format("#.###");
            obj.set_autoselect("true");
            obj.set_readonly("true");
            this.divData.form.tabData.tab4.addChild(obj.name, obj);

            obj = new MaskEdit("ctxtNO_BID_CO","129","158","140","20",null,null,null,null,null,null,this.divData.form.tabData.tab4.form);
            obj.set_taborder("67");
            obj.set_value("");
            obj.set_textAlign("right");
            obj.set_format("#,###");
            obj.set_autoselect("true");
            obj.set_readonly("true");
            obj.set_displaynulltext(" ");
            this.divData.form.tabData.tab4.addChild(obj.name, obj);

            obj = new Static("staTab1Title","5","361","100","22",null,null,null,null,null,null,this.divData.form.tabData.tab4.form);
            obj.set_taborder("68");
            obj.set_text("투찰사 목록");
            obj.set_cssclass("sta_TITLE_Bg");
            this.divData.form.tabData.tab4.addChild(obj.name, obj);

            obj = new Static("staTab1Title00","729","365","140","22",null,null,null,null,null,null,this.divData.form.tabData.tab4.form);
            obj.set_taborder("69");
            obj.set_text("낙찰 공동도급사");
            obj.set_cssclass("sta_TITLE_Bg");
            this.divData.form.tabData.tab4.addChild(obj.name, obj);

            obj = new Grid("objGrdtab4_1","5","388","714","160",null,null,null,null,null,null,this.divData.form.tabData.tab4.form);
            obj.set_taborder("70");
            obj._setContents("");
            this.divData.form.tabData.tab4.addChild(obj.name, obj);

            obj = new Grid("objGrdtab4_2","729","388","553","160",null,null,null,null,null,null,this.divData.form.tabData.tab4.form);
            obj.set_taborder("71");
            obj._setContents("");
            this.divData.form.tabData.tab4.addChild(obj.name, obj);

            obj = new TextArea("txtDS_OPNI","129","274","1148","80",null,null,null,null,null,null,this.divData.form.tabData.tab4.form);
            obj.set_taborder("66");
            obj.set_maxlength("1000");
            obj.set_enable("true");
            obj.set_readonly("true");
            this.divData.form.tabData.tab4.addChild(obj.name, obj);

            obj = new Div("divFile","5","559","1277","150",null,null,null,null,null,null,this.divData.form.tabData.tab4.form);
            obj.set_taborder("72");
            obj.set_url("cmm::cmmFileManager.xfdl");
            obj.set_text("");
            this.divData.form.tabData.tab4.addChild(obj.name, obj);

            obj = new Static("sta16","274","158","41","20",null,null,null,null,null,null,this.divData.form.tabData.tab4.form);
            obj.set_taborder("73");
            obj.set_text("(개사)");
            this.divData.form.tabData.tab4.addChild(obj.name, obj);

            obj = new Static("sta23","639","216","41","20",null,null,null,null,null,null,this.divData.form.tabData.tab4.form);
            obj.set_taborder("74");
            obj.set_text("%");
            this.divData.form.tabData.tab4.addChild(obj.name, obj);

            obj = new Static("sta25","639","245","41","20",null,null,null,null,null,null,this.divData.form.tabData.tab4.form);
            obj.set_taborder("75");
            obj.set_text("%");
            this.divData.form.tabData.tab4.addChild(obj.name, obj);

            obj = new Static("sta26","922","216","41","20",null,null,null,null,null,null,this.divData.form.tabData.tab4.form);
            obj.set_taborder("76");
            obj.set_text("%");
            this.divData.form.tabData.tab4.addChild(obj.name, obj);

            obj = new Static("sta27","1206","216","41","20",null,null,null,null,null,null,this.divData.form.tabData.tab4.form);
            obj.set_taborder("77");
            obj.set_text("%");
            this.divData.form.tabData.tab4.addChild(obj.name, obj);

            obj = new Calendar("ctclDT_BID_RECOG","130","42","132","20",null,null,null,null,null,null,this.divData.form.tabData.tab4.form);
            obj.set_taborder("78");
            obj.set_dateformat("yyyy-MM-dd");
            obj.set_editformat("yyyyMMdd");
            obj.set_autoselect("true");
            obj.set_value("20200101");
            obj.set_enable("true");
            obj.set_visible("true");
            obj.set_readonly("true");
            this.divData.form.tabData.tab4.addChild(obj.name, obj);

            obj = new Calendar("ctclDT_FIX","130","71","132","20",null,null,null,null,null,null,this.divData.form.tabData.tab4.form);
            obj.set_taborder("79");
            obj.set_dateformat("yyyy-MM-dd");
            obj.set_editformat("yyyyMMdd");
            obj.set_autoselect("true");
            obj.set_value("20200101");
            obj.set_enable("true");
            obj.set_visible("true");
            obj.set_readonly("true");
            this.divData.form.tabData.tab4.addChild(obj.name, obj);

            obj = new Button("btnApp",null,"5","70","24","65",null,null,null,null,null,this.divData.form.tabData.tab4.form);
            obj.set_taborder("80");
            obj.set_text("결재요청");
            obj.set_visible("false");
            this.divData.form.tabData.tab4.addChild(obj.name, obj);

            obj = new Static("staTab1Title01_00_01_00","1042","7",null,"22","139",null,null,null,null,null,this.divData.form.tabData.tab4.form);
            obj.set_taborder("81");
            obj.set_text("");
            obj.set_textAlign("right");
            obj.set_font("bold 12px/normal \"Dotum\"");
            obj.set_visible("false");
            this.divData.form.tabData.tab4.addChild(obj.name, obj);

            obj = new Static("staTab1Title01_00_01","973","7",null,"22","256",null,null,null,null,null,this.divData.form.tabData.tab4.form);
            obj.set_taborder("82");
            obj.set_text("결재 상태 :");
            obj.set_visible("false");
            this.divData.form.tabData.tab4.addChild(obj.name, obj);

            obj = new Static("sta06_00_00_00","278","100","29","20",null,null,null,null,null,null,this.divData.form.tabData.tab4.form);
            obj.set_taborder("83");
            this.divData.form.tabData.tab4.addChild(obj.name, obj);

            obj = new Static("sta06_00_00_00_00","278","130","29","20",null,null,null,null,null,null,this.divData.form.tabData.tab4.form);
            obj.set_taborder("84");
            this.divData.form.tabData.tab4.addChild(obj.name, obj);

            obj = new Static("sta06_00_00_00_00_00","278","187","29","20",null,null,null,null,null,null,this.divData.form.tabData.tab4.form);
            obj.set_taborder("85");
            this.divData.form.tabData.tab4.addChild(obj.name, obj);

            obj = new Static("sta06_00_00_00_00_00_00","278","216","29","20",null,null,null,null,null,null,this.divData.form.tabData.tab4.form);
            obj.set_taborder("86");
            this.divData.form.tabData.tab4.addChild(obj.name, obj);

            obj = new Static("sta06_00_00_00_00_00_00_00","278","244","29","20",null,null,null,null,null,null,this.divData.form.tabData.tab4.form);
            obj.set_taborder("87");
            this.divData.form.tabData.tab4.addChild(obj.name, obj);

            obj = new Static("sta06_00_00_00_01","704","41","29","20",null,null,null,null,null,null,this.divData.form.tabData.tab4.form);
            obj.set_taborder("88");
            this.divData.form.tabData.tab4.addChild(obj.name, obj);

            obj = new Static("sta06_00_00_00_01_00","704","70","29","20",null,null,null,null,null,null,this.divData.form.tabData.tab4.form);
            obj.set_taborder("89");
            this.divData.form.tabData.tab4.addChild(obj.name, obj);

            obj = new Static("sta06_00_00_00_01_00_00","704","99","29","20",null,null,null,null,null,null,this.divData.form.tabData.tab4.form);
            obj.set_taborder("90");
            this.divData.form.tabData.tab4.addChild(obj.name, obj);

            obj = new Static("sta06_00_00_00_01_00_00_00","704","129","29","20",null,null,null,null,null,null,this.divData.form.tabData.tab4.form);
            obj.set_taborder("91");
            this.divData.form.tabData.tab4.addChild(obj.name, obj);

            obj = new Static("sta06_00_00_00_01_00_00_00_00","1127","129","29","20",null,null,null,null,null,null,this.divData.form.tabData.tab4.form);
            obj.set_taborder("92");
            this.divData.form.tabData.tab4.addChild(obj.name, obj);

            obj = new Static("sta06_00_00_00_01_00_00_00_00_00","1127","100","29","20",null,null,null,null,null,null,this.divData.form.tabData.tab4.form);
            obj.set_taborder("93");
            this.divData.form.tabData.tab4.addChild(obj.name, obj);

            obj = new Static("sta06_00_00_00_01_00_00_00_00_00_00","1127","71","29","20",null,null,null,null,null,null,this.divData.form.tabData.tab4.form);
            obj.set_taborder("94");
            this.divData.form.tabData.tab4.addChild(obj.name, obj);

            obj = new MaskEdit("ctxtAM_INIT","1380","36","140","20",null,null,null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_value("");
            obj.set_textAlign("right");
            obj.set_format("#,0");
            obj.set_autoselect("true");
            obj.set_readonly("true");
            obj.set_displaynulltext(" ");
            obj.set_visible("false");
            this.addChild(obj.name, obj);

            obj = new Static("sta23_00_00_00","1649","36","29","20",null,null,null,null,null,null,this);
            obj.set_taborder("3");
            obj.set_text("X");
            obj.set_visible("false");
            this.addChild(obj.name, obj);

            obj = new Static("staRT_INIT","1681","31","120","30",null,null,null,null,null,null,this);
            obj.set_taborder("4");
            obj.set_text("예정가 사정");
            obj.set_cssclass("sta_WF_tablelabel");
            obj.set_textAlign("right");
            obj.set_visible("false");
            this.addChild(obj.name, obj);

            obj = new MaskEdit("ctxtRT_INIT","1805","36","80","20",null,null,null,null,null,null,this);
            obj.set_taborder("5");
            obj.set_value("");
            obj.set_textAlign("right");
            obj.set_format("#,0.000");
            obj.set_autoselect("true");
            obj.set_readonly("true");
            obj.set_visible("false");
            this.addChild(obj.name, obj);

            obj = new Static("sta23","1890","36","41","20",null,null,null,null,null,null,this);
            obj.set_taborder("6");
            obj.set_text("%");
            obj.set_visible("false");
            this.addChild(obj.name, obj);

            obj = new Static("sta23_00_00_00_00","1932","36","29","20",null,null,null,null,null,null,this);
            obj.set_taborder("7");
            obj.set_text("X");
            obj.set_visible("false");
            this.addChild(obj.name, obj);

            obj = new Static("staRT_BID","1964","31","120","30",null,null,null,null,null,null,this);
            obj.set_taborder("8");
            obj.set_text("투찰율");
            obj.set_cssclass("sta_WF_tablelabel");
            obj.set_textAlign("right");
            obj.set_visible("false");
            this.addChild(obj.name, obj);

            obj = new MaskEdit("ctxtRT_BID","2088","36","80","20",null,null,null,null,null,null,this);
            obj.set_taborder("9");
            obj.set_value("");
            obj.set_textAlign("right");
            obj.set_format("#,0.000");
            obj.set_autoselect("true");
            obj.set_readonly("true");
            obj.set_visible("false");
            this.addChild(obj.name, obj);

            obj = new Static("sta26","2173","36","21","20",null,null,null,null,null,null,this);
            obj.set_taborder("10");
            obj.set_text("%");
            obj.set_visible("false");
            this.addChild(obj.name, obj);

            obj = new Static("sta26_00","2203","36","31","20",null,null,null,null,null,null,this);
            obj.set_taborder("11");
            obj.set_text(")   =");
            obj.set_visible("false");
            this.addChild(obj.name, obj);

            obj = new MaskEdit("ctxtRT_SC","2252","36","161","20",null,null,null,null,null,null,this);
            obj.set_taborder("12");
            obj.set_value("");
            obj.set_textAlign("right");
            obj.set_format("#,0");
            obj.set_autoselect("true");
            obj.set_readonly("true");
            obj.set_visible("false");
            this.addChild(obj.name, obj);

            obj = new Static("sta27","2417","36","21","20",null,null,null,null,null,null,this);
            obj.set_taborder("13");
            obj.set_text("원");
            obj.set_visible("false");
            this.addChild(obj.name, obj);

            obj = new Static("staRT_BID00","1964","60","120","30",null,null,null,null,null,null,this);
            obj.set_taborder("14");
            obj.set_text("만점△");
            obj.set_cssclass("sta_WF_tablelabel");
            obj.set_textAlign("right");
            obj.set_visible("false");
            this.addChild(obj.name, obj);

            obj = new MaskEdit("ctxtRT_BID_OUR","2088","65","80","20",null,null,null,null,null,null,this);
            obj.set_taborder("15");
            obj.set_value("");
            obj.set_textAlign("right");
            obj.set_format("#,0.000");
            obj.set_autoselect("true");
            obj.set_readonly("true");
            obj.set_visible("false");
            this.addChild(obj.name, obj);

            obj = new Static("sta25","2173","65","41","20",null,null,null,null,null,null,this);
            obj.set_taborder("16");
            obj.set_text("%");
            obj.set_visible("false");
            this.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this
            obj = new Layout("default","",this._adjust_width,this._adjust_height,this,function(p){});
            obj.set_stepcount("0");
            this.addLayout(obj.name, obj);
            
            // BindItem Information
            obj = new BindItem("item0","divSearch.form.ctxtCD_PROJ","value","dsSearch","CD_PROJ");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item1","divSearch.form.ctxtDS_PROJ","value","dsSearch","DS_PROJ");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item2","divData.form.tabData.tab1.form.ccboCD_CV_GO","value","dsBase","CD_CV_GO");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item3","divData.form.tabData.tab1.form.ccboCD_CLS","value","dsBase","CD_CLS");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item5","divData.form.tabData.tab1.form.ccfTY_ORD.form.CDTextBox","value","dsBase","TY_ORD");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item6","divData.form.tabData.tab1.form.ccboCD_PRC_BID","value","dsBase","CD_PRC_BID");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item7","divData.form.tabData.tab1.form.ctxtNO_TERM","value","dsBase","NO_TERM");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item8","divData.form.tabData.tab1.form.ccboCD_LOC","value","dsBase","CD_LOC");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item9","divData.form.tabData.tab1.form.ctxtAM_CONST","value","dsBase","AM_CONST");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item10","divData.form.tabData.tab1.form.ctxtAM_BIZ","value","dsBase","AM_BIZ");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item12","divData.form.tabData.tab1.form.ctclDT_PQ","value","dsBase","DT_PQ");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item15","divData.form.tabData.tab1.form.ctclDT_AGREE","value","dsBase","DT_AGREE");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item18","divData.form.tabData.tab1.form.ctclDT_SITE_EXPL","value","dsBase","DT_SITE_EXPL");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item27","divData.form.tabData.tab1.form.ctclDT_SC_COMPL","value","dsBase","DT_SC_COMPL");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item31","divData.form.tabData.tab1.form.ctxtDS_BID_LIC","value","dsBase","DS_BID_LIC");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item32","divData.form.tabData.tab1.form.ctxtDS_BID_CONST","value","dsBase","DS_BID_CONST");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item33","divData.form.tabData.tab1.form.ctxtDS_BID_CO","value","dsBase","DS_BID_CO");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item34","divData.form.tabData.tab1.form.ctxtDS_EXPL_AREA","value","dsBase","DS_EXPL_AREA");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item35","divData.form.tabData.tab1.form.txtDS_SITE_EXPL","value","dsBase","DS_SITE_EXPL");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item36","divData.form.tabData.tab1.form.ctxtAM_ESTM","value","dsBase","AM_ESTM");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item37","divData.form.tabData.tab1.form.ccfID_USER_EXPL.form.CDTextBox","value","dsBase","ID_USER_EXPL");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item38","divData.form.tabData.tab1.form.ctxtDS_ADDR2","value","dsBase","DS_ADDR2");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item40","divData.form.tabData.tab1.form.ccfTY_ORD.form.DSTextBox","value","dsBase","DS_ORD");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item41","divData.form.tabData.tab1.form.ccfID_USER_EXPL.form.DSTextBox","value","dsBase","DS_USER_EXPL");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item42","divData.form.tabData.tab1.form.txtDS_RM_CONST","value","dsBase","DS_RM_CONST");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item44","divData.form.tabData.tab2.form.ctxtID_USER_EXPL","value","dsDetail1","ID_USER_EXPL");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item45","divData.form.tabData.tab2.form.ctxtDS_USER_EXPL","value","dsDetail1","DS_USER_EXPL");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item46","divData.form.tabData.tab2.form.txtDS_EXPL","value","dsDetail1","DS_EXPL");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item47","divData.form.tabData.tab2.form.ctxtDS_INCU_CONST","value","dsDetail1","DS_INCU_CONST");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item48","divData.form.tabData.tab2.form.ctxtDS_EXCP_CONST","value","dsDetail1","DS_EXCP_CONST");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item49","divData.form.tabData.tab2.form.ctxtDS_MAT_PAY","value","dsDetail1","DS_MAT_PAY");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item50","divData.form.tabData.tab2.form.txtDS_RM_SP","value","dsDetail1","DS_RM_SP");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item51","divData.form.tabData.tab3.form.txtDS_RM_OP","value","dsBase","DS_RM_OP");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item53","divData.form.tabData.tab4.form.ctxtAM_DESIGN","value","dsDetail2","AM_DESIGN");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item55","divData.form.tabData.tab4.form.ctxtAM_FIX_SUP","value","dsDetail2","AM_FIX_SUP");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item56","divData.form.tabData.tab4.form.ctxtAM_FIX_VAT","value","dsDetail2","AM_FIX_VAT");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item57","divData.form.tabData.tab4.form.ctxtAM_ESTM_SUP","value","dsDetail2","AM_ESTM_SUP");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item58","divData.form.tabData.tab4.form.ctxtAM_BID_SUP","value","dsDetail2","AM_BID_SUP");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item61","divData.form.tabData.tab4.form.ctxtAM_ESTM_VAT","value","dsDetail2","AM_ESTM_VAT");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item63","divData.form.tabData.tab4.form.ctxtAM_ESTM","value","dsDetail2","AM_ESTM");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item66","divData.form.tabData.tab4.form.ctxtNO_FCT","value","dsDetail2","NO_FCT");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item72","divData.form.tabData.tab4.form.ctxtNO_BID_CO","value","dsDetail2","NO_BID_CO");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item62","divData.form.tabData.tab4.form.ctxtAM_BID_OUR","value","dsDetail2","AM_BID_OUR");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item64","divData.form.tabData.tab4.form.ctxtAM_INIT","value","dsDetail2","AM_INIT");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item65","divData.form.tabData.tab4.form.ctxtRT_INIT","value","dsDetail2","RT_INIT");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item67","divData.form.tabData.tab4.form.ctxtRT_BID_OUR","value","dsDetail2","RT_BID_OUR");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item68","divData.form.tabData.tab4.form.ctxtRT_BID","value","dsDetail2","RT_BID");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item69","divData.form.tabData.tab4.form.ctxtTY_BID_RLT","value","dsDetail2","DS_BID_RLT");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item70","divData.form.tabData.tab4.form.ctxtAM_BID_VAT","value","dsDetail2","AM_BID_VAT");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item71","divData.form.tabData.tab4.form.ctxtTY_ENTY","value","dsDetail2","DS_ENTY");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item73","divData.form.tabData.tab4.form.ctxtRT_SC","value","dsDetail2","RT_SC");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item74","divData.form.tabData.tab4.form.txtDS_OPNI","value","dsDetail2","DS_OPNI");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item59","divData.form.tabData.tab4.form.ctxtAM_BID_CAL","value","dsDetail2","AM_BID_CAL");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item60","divData.form.tabData.tab4.form.ctxtAM_ESTM_CAL","value","dsDetail2","AM_ESTM_CAL");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item77","divData.form.tabData.tab1.form.ctclDT_REVIEW","value","dsBase","DT_REVIEW");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item4","divData.form.tabData.tab1.form.ccfCD_CLS_CONST.form.CDTextBox","value","dsBase","CD_CLS_CONST");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item39","divData.form.tabData.tab1.form.ccfCD_CLS_CONST.form.DSTextBox","value","dsBase","DS_CLS_CONST");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item81","divData.form.tabData.tab2.form.ctclDT_SITE_EXPL","value","dsBase","DT_SITE_EXPL");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item82","divData.form.tabData.tab2.form.ccboH_SITE_EXPL","value","dsBase","H_SITE_EXPL");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item83","divData.form.tabData.tab2.form.ccboM_SITE_EXPL","value","dsBase","M_SITE_EXPL");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item43","divData.form.tabData.tab4.form.ctclDT_BID_RECOG","value","dsDetail2","DT_BID_RECOG");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item84","divData.form.tabData.tab4.form.ctclDT_FIX","value","dsDetail2","DT_FIX");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item52","divData.form.tabData.tab8.form.ctxtAM_ESTM","value","dsDetail3","AM_ESTM_CONST");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item54","divData.form.tabData.tab8.form.ctxtAM_ESTM00","value","dsDetail3","AM_INIT");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item90","divData.form.tabData.tab8.form.txtDS_OPNI","value","dsDetail3","DS_RM");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item11","divData.form.tabData.tab1.form.ctxtHM_PQ","value","dsBase","HM_PQ");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item21","divData.form.tabData.tab1.form.ctxtHM_PQ00","value","dsBase","HM_AGREE");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item22","divData.form.tabData.tab1.form.ctxtHM_PQ00_00","value","dsBase","HM_SITE_EXPL");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item23","divData.form.tabData.tab1.form.ctxtHM_PQ00_00_00","value","dsBase","HM_BID_REG");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item24","divData.form.tabData.tab1.form.ctxtHM_PQ00_00_00_00","value","dsBase","HM_BID");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item25","divData.form.tabData.tab1.form.ctclDT_BID00","value","dsBase","DT_BID");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item26","divData.form.tabData.tab1.form.ctclDT_BID_REG","value","dsBase","DT_BID_REG");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item28","divData.form.tabData.tab1.form.ctclDT_BID_OPEN00","value","dsBase","DT_BID_OPEN");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item29","divData.form.tabData.tab1.form.ctxtHM_PQ00_00_00_00_00","value","dsBase","HM_BID_OPEN");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item30","divData.form.tabData.tab1.form.ctxtHM_PQ00_00_00_00_00_00","value","dsBase","HM_REVIEW");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item78","divData.form.tabData.tab1.form.ctxtHM_PQ00_00_00_00_00_00_00","value","dsBase","HM_BID_WIN");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item79","divData.form.tabData.tab1.form.ctclDT_BID_WIN","value","dsBase","DT_BID_WIN");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item13","divData.form.staTab1Title01_00_01_00","text","dsBase","NM_ST_APPR");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item14","divData.form.tabData.tab1.form.staTab1Title01_00_01_00","text","dsBase","NM_ST_APPR");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item16","divData.form.tabData.tab2.form.staTab1Title01_00_01_00","text","dsDetail1","NM_ST_APPR");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item17","divData.form.tabData.tab3.form.staTab1Title01_00_01_00","text","dsDetail4","NM_ST_APPR");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item19","divData.form.tabData.tab8.form.staTab1Title01_00_01_00","text","dsDetail3","NM_ST_APPR");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item20","divData.form.tabData.tab4.form.staTab1Title01_00_01_00","text","dsDetail2","NM_ST_APPR");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item75","divData.form.tabData.tab1.form.ctclDT_BID_PUB","value","dsBase","DT_BID_PUB");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item76","divData.form.tabData.tab1.form.ccboCD_CLS00","value","dsBase","TY_MJ_CONST");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item80","divData.form.tabData.tab1.form.ctxtAM_CONST_VAT","value","dsBase","NO_BID_CO");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item91","divData.form.tabData.tab3.form.ctxtNO_DSN_SCO","value","dsBase","NO_DSN_SCO");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item92","divData.form.tabData.tab1.form.ctxtSZ_ARCH_M00","value","dsBase","SZ_AREA_M");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item93","divData.form.tabData.tab3.form.ctxtNO_COST_SCO","value","dsBase","NO_COST_SCO");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item94","divData.form.tabData.tab3.form.ctxtNO_COST_SCO_TT","value","dsBase","NO_DSN_COST_SCO");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item95","divData.form.tabData.tab1.form.ccfCD_CORP.form.CDTextBox","value","dsBase","CD_CORP");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item96","divData.form.tabData.tab1.form.ccfCD_SAUP.form.CDTextBox","value","dsBase","CD_DEPT");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item97","divData.form.tabData.tab1.form.ccboYN_SAUP","value","dsBase","YN_SAUP");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item98","divData.form.tabData.tab1.form.ccfCD_CORP.form.DSTextBox","value","dsBase","DS_CORP");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item99","divData.form.tabData.tab1.form.ccfCD_SAUP.form.DSTextBox","value","dsBase","DS_DEPT");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item100","divData.form.tabData.tab1.form.ccfMoney_Unit.form.CDTextBox","value","dsBase","CD_CURRENCY");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item102","divData.form.tabData.tab1.form.ctxtNM_COUNTRY","value","dsBase","NM_COUNTRY");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item101","divData.form.tabData.tab1.form.ctxtSZ_SHOP_M00_00","value","dsBase","SZ_LAND_M");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item103","divData.form.tabData.tab1.form.div00.form.ctxtSZ_SHOP_M00_00_00","value","dsBase","SZ_LAND_UNDR_M");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item104","divData.form.tabData.tab1.form.ctxtSZ_SHOP_M00_00_00","value","dsBase","SZ_LAND_UNDR_M");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item105","divData.form.tabData.tab1.form.ctxtSZ_SHOP00_00","value","dsBase","SZ_LAND");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item106","divData.form.tabData.tab1.form.div00.form.ctxtSZ_SHOP00_00_00","value","dsBase","SZ_LAND_UNDR");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item107","divData.form.tabData.tab1.form.ctxtSZ_SHOP00_00_00","value","dsBase","SZ_LAND_UNDR");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item108","divData.form.tabData.tab1.form.ctxtSZ_SHOP_M","value","dsBase","SZ_SHOP_M");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item109","divData.form.tabData.tab1.form.div00.form.ctxtSZ_SHOP_M00","value","dsBase","SZ_LAND_OVR_M");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item110","divData.form.tabData.tab1.form.div00.form.ctxtSZ_SHOP_M00_00","value","dsBase","SZ_LAND_M");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item111","divData.form.tabData.tab1.form.div00.form.ctxtSZ_SHOP_TOP","value","dsBase","SZ_SHOP_TOP");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item112","divData.form.tabData.tab1.form.div00.form.ctxtSZ_SHOP_BOTTM","value","dsBase","SZ_SHOP_BOTTM");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item113","divData.form.tabData.tab1.form.ctxtSZ_SHOP","value","dsBase","SZ_SHOP");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item114","divData.form.tabData.tab1.form.div00.form.ctxtSZ_SHOP_M","value","dsBase","SZ_SHOP_M");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item115","divData.form.tabData.tab1.form.div00.form.ctxtSZ_SHOP_UNDR","value","dsBase","SZ_SHOP_UNDR");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item116","divData.form.tabData.tab1.form.div00.form.ctxtSZ_SHOP00","value","dsBase","SZ_LAND_OVR");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item117","divData.form.tabData.tab1.form.div00.form.ctxtSZ_SHOP00_00","value","dsBase","SZ_LAND");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item118","divData.form.tabData.tab1.form.ctxtRT_SHOP","value","dsBase","RT_SHOP");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item119","divData.form.tabData.tab1.form.div00.form.ctxtRT_SHOP00","value","dsBase","RT_LAND_OVR");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item120","divData.form.tabData.tab1.form.ccboCD_PERMIT_STAT","value","dsBase","CD_PERMIT_STAT");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item121","divData.form.tabData.tab1.form.ctxtAM_LAND","value","dsBase","AM_LAND");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item122","divData.form.tabData.tab1.form.ctxtAM_AREA","value","dsBase","AM_AREA");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item124","divData.form.tabData.tab1.form.div00.form.ctxtSZ_ARCH_M00","value","dsBase","SZ_AREA_M");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item129","divData.form.tabData.tab1.form.div00.form.ctxtSZ_ARCH_M","value","dsBase","SZ_ARCH_M");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item131","divData.form.tabData.tab1.form.div00.form.ctxtSZ_ARCH00","value","dsBase","SZ_AREA");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item135","divData.form.tabData.tab1.form.sta06_00_00","text","dsBase","CD_CURRENCY");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item136","divData.form.tabData.tab1.form.sta06_00","text","dsBase","CD_CURRENCY");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item137","divData.form.tabData.tab1.form.sta06","text","dsBase","CD_CURRENCY");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item138","divData.form.tabData.tab1.form.sta06_00_00_00","text","dsBase","CD_CURRENCY");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item139","divData.form.tabData.tab1.form.sta06_00_00_00_00","text","dsBase","CD_CURRENCY");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item140","divData.form.tabData.tab8.form.sta06_00_00","text","dsBase","CD_CURRENCY");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item141","divData.form.tabData.tab8.form.sta06_00_00_00","text","dsBase","CD_CURRENCY");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item143","divData.form.tabData.tab4.form.sta06_00_00_00","text","dsBase","CD_CURRENCY");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item144","divData.form.tabData.tab4.form.sta06_00_00_00_00","text","dsBase","CD_CURRENCY");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item145","divData.form.tabData.tab4.form.sta06_00_00_00_00_00","text","dsBase","CD_CURRENCY");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item146","divData.form.tabData.tab4.form.sta06_00_00_00_00_00_00","text","dsBase","CD_CURRENCY");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item147","divData.form.tabData.tab4.form.sta06_00_00_00_00_00_00_00","text","dsBase","CD_CURRENCY");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item148","divData.form.tabData.tab4.form.sta06_00_00_00_01","text","dsBase","CD_CURRENCY");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item149","divData.form.tabData.tab4.form.sta06_00_00_00_01_00","text","dsBase","CD_CURRENCY");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item150","divData.form.tabData.tab4.form.sta06_00_00_00_01_00_00","text","dsBase","CD_CURRENCY");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item151","divData.form.tabData.tab4.form.sta06_00_00_00_01_00_00_00","text","dsBase","CD_CURRENCY");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item152","divData.form.tabData.tab4.form.sta06_00_00_00_01_00_00_00_00","text","dsBase","CD_CURRENCY");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item153","divData.form.tabData.tab4.form.sta06_00_00_00_01_00_00_00_00_00","text","dsBase","CD_CURRENCY");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item154","divData.form.tabData.tab4.form.sta06_00_00_00_01_00_00_00_00_00_00","text","dsBase","CD_CURRENCY");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item134","divData.form.tabData.tab1.form.ccboCD_LAND_STAT","value","dsBase","CD_LAND_STAT");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item123","divData.form.tabData.tab1.form.ctxtSZ_ARCH_M","value","dsBase","SZ_ARCH_M");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item127","ctxtSZ_ARCH_M","value","dsBase","SZ_ARCH_M");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item133","divData.form.tabData.tab1.form.ctxtSZ_ARCH","value","dsBase","SZ_ARCH");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item155","divData.form.tabData.tab1.form.ctxtRT_ARCH","value","dsBase","RT_ARCH");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item125","divData.form.tabData.tab1.form.ctxtSZ_SHOP_M00","value","dsBase","SZ_LAND_OVR_M");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item128","divData.form.tabData.tab1.form.ctxtSZ_SHOP00","value","dsBase","SZ_LAND_OVR");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item132","divData.form.tabData.tab1.form.ctxtRT_SHOP00","value","dsBase","RT_LAND_OVR");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item126","divData.form.tabData.tab1.form.ctxtSZ_ARCH00","value","dsBase","SZ_AREA");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item85","ctxtAM_INIT","value","dsDetail3","AM_PROJ");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item86","ctxtRT_INIT","value","dsDetail3","RT_ESTM");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item87","ctxtRT_BID","value","dsDetail3","RT_QUAL");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item88","divData.form.tabData.tab8.form.ctxtRT_BID_OUR","value","dsDetail3","RT_PERPECT");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item89","ctxtRT_SC","value","dsDetail3","AM_RST");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item130","ctxtRT_BID_OUR","value","dsDetail3","RT_PERPECT");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item156","divData.form.tabData.tab8.form.ctxtAM_ESTM00_00","value","dsDetail3","RT_YBID");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item157","divData.form.tabData.tab8.form.ctxtAM_ESTM00_00_00","value","dsDetail3","RT_GBID");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item142","divData.form.tabData.tab1.form.ccboTY_STATUS","value","dsBase","TY_STATUS");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item158","divData.form.tabData.tab1.form.edtRM_END","value","dsBase","RM_END");
            this.addChild(obj.name, obj);
            obj.bind();
            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {
            this._addPreloadList("fdl","cmm::cmmCodeFind.xfdl");
            this._addPreloadList("fdl","cmm::cmmFileManager.xfdl");
        };
        
        // User Script
        this.addIncludeScript("DOO_OVS_PROJ.xfdl","lib::libCommon.xjs");
        this.registerScript("DOO_OVS_PROJ.xfdl", function() {
        this.executeIncludeScript("lib::libCommon.xjs"); /*include "lib::libCommon.xjs"*/;

        this.objApp = this.gfnGetApplication();

        this.form_onload = function(obj,e)
        {
        	// -- 필수 -------------------//
        	this.gfnFormOnLoad(this);
        	this.gfnFormInfo(this);
        	// ---------------------------//
        	this.fnSetExtendButton();

        	this.fnSetVariable();
        	this.fnSetParameter();
        	this.fnSetEvent();

        	this.fnSetCombo();

        	// 파일관리자 - 조회전에는 disable
        	this.divData.form.tabData.tab1.form.divFile.form.set_enable(false);

        	if(!this.gfnIsNull(this.getOwnerFrame().CD_PROJ))
        	{
        		this.dsSearch.setColumn(0, "CD_PROJ", this.getOwnerFrame().CD_PROJ);
        		this.fnSelect();
        	} else {
        		this.gfnSetFormStatus(this, "I");
        		this.dsBase.setColumn(0, "CD_DEPT", this.AuthClient.CD_DEPT);
        		this.divData.form.tabData.tab1.form.ccfCD_SAUP.form.fnCodeFindLoad();
        	}

        	this.fnSetButton();
        };

        /************************************************************************
         * 담당자 여부 검사
         ************************************************************************/
         this.fnGetYNCharge = function(){

        	this.dsReqYNCharge = new Dataset();
        	this.dsReqYNCharge.addColumn("CD_PROJ", "string");
        	this.dsReqYNCharge.addColumn("ID_USER", "string");

        	this.dsReqYNCharge.addRow();
        	this.dsReqYNCharge.setColumn(0, "CD_PROJ", this.getOwnerFrame().CD_PROJ);
        	this.dsReqYNCharge.setColumn(0, "ID_USER", this.objApp.gdsUserInfo.getColumn(0, "ID_USER"));

        	var strSvcId    = "selectCharge";
        	var strSvcType  = "select";
        	var inProc		= "_dsProc";
        		inData      = "selectCharge=dsReqYNCharge";
        		outData     = "dsRcvYNCharge=selectCharge0";
        	var strArg      = "";
        	var callBackFnc = "fnCallback";

        	this.gfnTransaction( strSvcId , 	// transaction을 구분하기 위한 svc id값
        						strSvcType , 	// transaction을 요청할 구분
        						inProc,			// Procedure 정보 Dataset 이름
        						inData , 		// 입력값으로 보낼 dataset id , a=b형태로 실제이름과 입력이름을 매칭
        						outData , 		// 처리결과값으로 받을 dataset id, a=b형태로 실제이름과 입력이름을 매칭
        						strArg, 			// 입력갑스로 보낼 arguments, strFormData="20120607"
        						callBackFnc,false); // 통신방법 정의 [생략가능]
         }

        /************************************************************************
         * 버튼 설정 : 화면(Tab) 전환시 마다 호출
         * 서브버튼 사용 및 공통버튼 강제 제어시 여기서 처리
         ************************************************************************/
        this.fnSetButton = function() {
        	this.FormBtns.Select.set_enable(false);
        	this.FormBtns.Add.set_enable(false);
        	this.FormBtns.Save.set_enable(false);
        	this.FormBtns.Del.set_enable(false);
        // 	this.FormBtns.Excel.set_enable(false);
        // 	this.FormBtns.Print.set_enable(false);

        	if(this.FormInfo.TY_AUTH == "R") {
        		this.FormBtns.Select.set_enable(true);
        		//this.divData.form.tabData.tab3.form.btnRegConsor.set_enable(false);
        		this.divData.form.tabData.tab3.form.btnDelConsor.set_enable(false);
        		return;
        	}

        	var frmStatus = this.gfnGetFormStatus(this);
        	switch(frmStatus) {
        	case "I":
        		this.FormBtns.Select.set_enable(false);
        		this.FormBtns.Save.set_enable(true);
        		this.FormBtns.Del.set_enable(false);
        		/*Tab제어*/
        		this.divData.form.tabData.tab2.set_enable(false);
        		this.divData.form.tabData.tab3.set_enable(false);
        		this.divData.form.tabData.tab4.set_enable(false);
        		this.divData.form.tabData.tab5.set_enable(false);
        		this.divData.form.tabData.tab6.set_enable(false);
        		this.divData.form.tabData.tab7.set_enable(false);
        		this.divData.form.tabData.tab8.set_enable(false);

        		this.btnCreate.set_enable(false);
        		this.btnHqCreate.set_enable(false);
        		break;
        	case "U":
        		this.FormBtns.Select.set_enable(true);
        		this.FormBtns.Save.set_enable(true);
        		this.FormBtns.Del.set_enable(true);

        		this.btnCreate.set_enable(false);
        		this.btnHqCreate.set_enable(false);
        		break;
        	case "D":
        		break;
        	default: /*기본(조회완료)*/
        		this.FormBtns.Select.set_enable(true);
        		this.FormBtns.Save.set_enable(false);
        		this.FormBtns.Del.set_enable(true);
        		/*Tab제어*/
        		this.divData.form.tabData.tab2.set_enable(true);
        		if(this.dsBase.getColumn(0, "YN_ORD") == "Y"){
        			this.divData.form.tabData.tab3.set_enable(true);
        		}else{
        			this.divData.form.tabData.tab3.set_enable(false);
        		}
        		this.divData.form.tabData.tab4.set_enable(true);
        		this.divData.form.tabData.tab5.set_enable(true);
        		this.divData.form.tabData.tab6.set_enable(true);
        		this.divData.form.tabData.tab7.set_enable(true);
        		this.divData.form.tabData.tab8.set_enable(true);
        		this.btnCreate.set_enable(true);
        		this.btnHqCreate.set_enable(true);
        	}
        }

        /************************************************************************
         * 확장 버튼 : 화면별 버튼 설정 ID, function 연결 (화면버튼관리)
         ************************************************************************/
        this.fnSetExtendButton = function() {
            this.btnVendor = this.gfnFormButtonAdd("btnVendor", "fnVendor");
        	this.btnCreate = this.gfnFormButtonAdd("btnContCreate", "fnContCreate");
        	this.btnHqCreate = this.gfnFormButtonAdd("btnHqCreate", "fnHqCreate");
        };

        /************************************************************************
         * 변수 선언
         ************************************************************************/
        this.fnSetVariable = function() {
        	this.dsAppParam = new Dataset();
        	this.dsAppParam.addColumn("CD_PROJ", "string");
        	this.dsAppParam.addColumn("DOC_APP", "string");
        	this.dsAppParam.addColumn("DOC_NO", "int");

        	this.dsDelete = new Dataset();

        	this.dsDelete.addColumn("TY_WRK","string");
        	this.dsDelete.addColumn("CD_PROJ","string");
        	this.dsDelete.addColumn("NO_CONSOR","string");
        	this.dsDelete.addRow();

        	this.CD_CORP = this.AuthClient.CD_CORP;

         	this.ccfCD_CLS_CONST = this.divData.form.tabData.tab1.form.ccfCD_CLS_CONST;
        	this.ccfTY_ORD = this.divData.form.tabData.tab1.form.ccfTY_ORD;
        	/*this.ccfDS_LOC = this.divData.form.tabData.tab1.form.ccfDS_LOC;*/
        	this.ccfID_USER_EXPL = this.divData.form.tabData.tab1.form.ccfID_USER_EXPL;
        	this.ccfCD_CORP =  this.divData.form.tabData.tab1.form.ccfCD_CORP;
        	this.ccfCD_SAUP =  this.divData.form.tabData.tab1.form.ccfCD_SAUP;

         	this.ccfCD_CLS_CONST.AfterCDTextChanged = "fnCodeFinder_AfterCDTextChanged";	//상품분류
        	this.ccfTY_ORD.AfterCDTextChanged = "fnCodeFinder_AfterCDTextChanged";			//발주방식
        	/*this.ccfDS_LOC.AfterCDTextChanged = "fnCodeFinder_AfterCDTextChanged";			//지역*/
        	this.ccfID_USER_EXPL.AfterCDTextChanged = "fnCodeFinder_AfterCDTextChanged";	//현설의뢰자

        	//설계심의
        	this.dxGrid1 = this.divData.form.tabData.tab3.form.objGrdtab3;
        	//투찰사 목록
        	this.dxGrid2 = this.divData.form.tabData.tab4.form.objGrdtab4_1;
        	//낙찰 공동도급사 목록
        	this.dxGrid3 = this.divData.form.tabData.tab4.form.objGrdtab4_2;

        	//공동도급사
        	this.dxGrid5 = this.divData.form.tabData.tab5.form.objGrdtab5;
        	//관계사
        	this.dxGrid6 = this.divData.form.tabData.tab6.form.objGrdtab6;
        	//담당자
        	this.dxGrid7 = this.divData.form.tabData.tab7.form.objGrdtab7;
        	//열람부서
        	this.dxGrid7_Auth = this.divData.form.tabData.tab7.form.objGrdtab7_Auth;
        };

        /************************************************************************
         * 이벤트 설정
         ************************************************************************/
        this.fnSetEvent = function() {
        	this.ccfID_USER_EXPL.BeforeUserDataSetParam = "fnBeforeUserDataSetParam";
        	this.ccfCD_CORP.BeforeUserDataSetParam = "fnBeforeUserDataSetParam";
        	this.ccfCD_SAUP.BeforeUserDataSetParam = "fnBeforeUserDataSetParam";

        	this.gfnGridInit(this.dxGrid1, this.dsList1, "DO", "DOA_CIVL_PROJ_DSN_CONSOR");
        	this.gfnGridInit(this.dxGrid2, this.dsList2, "DO", "DOA_CO_BID");
        	this.gfnGridInit(this.dxGrid3, this.dsList3, "DO", "DOA_CO_CONTRCT_BID");

        	this.gfnGridInit(this.dxGrid5, this.dsList4, "DO", "DOA_ARCH_CO_CONTRCT");
        	this.gfnGridInit(this.dxGrid6, this.dsList5, "DO", "DOA_ARCH_CONCERN");
        	this.gfnGridInit(this.dxGrid7, this.dsList6, "DO", "DOA_ARCH_CHARGE");

        	this.gfnGridInit(this.dxGrid7_Auth, this.dsList6_Auth, "DO", "DOZ_PROJ_AUTH");

        	this.dxGrid2.BeforeUserDataSetParam = "fnGrid_BeforeUserDataSetParam";
        	this.dxGrid3.BeforeUserDataSetParam = "fnGrid_BeforeUserDataSetParam";
        };



        /************************************************************************
         * 코드파인드 이벤트
         ************************************************************************/
        this.fnBeforeUserDataSetParam = function(id, dsUserParam, nrow)
         {
        	if(id == "ccfID_USER_EXPL"){
        		dsUserParam.setColumn(nrow, "CD_CORP", this.CD_CORP);
        	} else if(id == "ccfCD_CORP"){
        	 dsUserParam.setColumn(nrow, "ID_SABUN", this.AuthClient.ID_USER);

        	} else if(id == "ccfCD_SAUP"){
        	  dsUserParam.setColumn(nrow, "ID_USER", this.AuthClient.ID_USER);
        	  dsUserParam.setColumn(nrow, "CD_CORP", this.AuthClient.CD_CORP);
        	  dsUserParam.setColumn(nrow, "CD_DEPT", this.AuthClient.CD_DEPT);
        	  dsUserParam.setColumn(nrow, "GR_SEARCH", this.FormInfo.GR_SEARCH);
        	  dsUserParam.setColumn(nrow, "CD_PROJ", this.divSearch.form.ctxtCD_PROJ.value);
        	}
        	return true;
         }

         this.fnGrid_BeforeUserDataSetParam = function(id, dsUserParam, nrow)
         {
        	dsUserParam.setColumn(nrow, "CD_CORP", "");
        	dsUserParam.setColumn(nrow, "CD_SITE", "");
        	dsUserParam.setColumn(nrow, "TY_VENDOR", "CIVL");
        	return true;
         }

        /************************************************************************
         * 파라미터 설정
         ************************************************************************/
        this.fnSetParameter = function() {
        	this.dsBase.set_enableevent(false);
        	this.dsBase.setColumn(0, "ID_USER", this.objApp.gdsUserInfo.getColumn(0, "ID_USER"));
        	this.dsBase.set_enableevent(true);

        	this.dsSelect = new Dataset();
        	this.dsSelect.addColumn("CD_PROJ", "string");
        }

        /************************************************************************
         * 콤보 이벤트 설정
         ************************************************************************/
        this.fnSetCombo = function() {
        	this.dsCombo = new Dataset();
        	this.dsCombo.addColumn("CD_SYSTEM", "string");
        	this.dsCombo.addColumn("CD_TYPE", "string");

        	this.dsCombo.addRow();	// 공공/민간
        	this.dsCombo.setColumn(0, "CD_SYSTEM", "DO");
        	this.dsCombo.setColumn(0, "CD_TYPE", "O1");

        	this.dsCombo.addRow();	// 공사분야
        	this.dsCombo.setColumn(1, "CD_SYSTEM", "DO");
        	this.dsCombo.setColumn(1, "CD_TYPE", "24");

        	this.dsCombo.addRow();	// 입찰추진
        	this.dsCombo.setColumn(2, "CD_SYSTEM", "DO");
        	this.dsCombo.setColumn(2, "CD_TYPE", "26");

        	this.dsCombo.addRow();	// 지역
        	this.dsCombo.setColumn(3, "CD_SYSTEM", "DO");
        	this.dsCombo.setColumn(3, "CD_TYPE", "02");

        	this.dsCombo.addRow();	// 주요공사
        	this.dsCombo.setColumn(4, "CD_SYSTEM", "DO");
        	this.dsCombo.setColumn(4, "CD_TYPE", "46");

        	this.dsCombo.addRow();	// 토지작업
        	this.dsCombo.setColumn(5, "CD_SYSTEM", "DO");
        	this.dsCombo.setColumn(5, "CD_TYPE", "08");

        	this.dsCombo.addRow();	// 인허가
        	this.dsCombo.setColumn(6, "CD_SYSTEM", "DO");
        	this.dsCombo.setColumn(6, "CD_TYPE", "07");


        	this.dsCombo.addRow();	// 진행상태 TY_STATUS
        	this.dsCombo.setColumn(7, "CD_SYSTEM", "DO");
        	this.dsCombo.setColumn(7, "CD_TYPE", "O4");

        	var strSvcId    = "combo";
        	var strSvcType  = "select";
        	var inProc		= "_dsProc";
        	var inData      = "combo=dsCombo";
        	var outData     = "dsDS_CD_CV_GO=combo0 dsDS_CD_CLS=combo1 dsDS_CD_PRC_BID=combo2 dsCD_LOC=combo3 dsTY_MJ_CONST=combo4 dsCD_LAND_STAT=combo5 dsCD_PERMIT_STAT=combo6  dsTY_STATUS=combo7";
        	var strArg      = "";
        	var callBackFnc = "fnCallback";

        	this.gfnTransaction( strSvcId , 	// transaction을 구분하기 위한 svc id값
        						strSvcType , 	// transaction을 요청할 구분
        						inProc,			// Procedure 정보 Dataset 이름
        						inData , 		// 입력값으로 보낼 dataset id , a=b형태로 실제이름과 입력이름을 매칭
        						outData , 		// 처리결과값으로 받을 dataset id, a=b형태로 실제이름과 입력이름을 매칭
        						strArg, 			// 입력갑스로 보낼 arguments, strFormData="20120607"
        						callBackFnc ); // 통신방법 정의 [생략가능]
        }

        this.fnCodeFinder_AfterCDTextChanged = function(id, codeFindData) {
        	var arr = codeFindData;

        	if(arr.length > 0)
        	{
        		switch(id)
        		{
        			//우편번호
        // 			case "ccfDS_LOC":
        // 				this.dsBase.setColumn(0, "CD_ZIP", arr[0].ZIPCODE);
        // 				this.dsBase.setColumn(0, "DS_ADDR1", arr[0].ADDRESS);
        // 			break;
        		}
        	}
        }

        /************************************************************************
         * 트렌젝션 버튼 이벤트
         ************************************************************************/
        this.fnSelect = function(obj,e){
        	var tIdx = this.divData.form.tabData.tabindex;
        	var strSvcId    = "select"+tIdx;
        	var strSvcType  = "select";
        	var inProc		= "_dsProc";
        	var inData      = "";
        	var outData     = "";

        	this.dsSelect.clearData();
        	this.dsSelect.addRow();
        	this.dsSelect.setColumn(0, "CD_PROJ", this.dsSearch.getColumn(0, "CD_PROJ"));

        	if(tIdx == 0){
        		inData      = "select0=dsSelect";
        		outData     = "dsBase=select00";
        	} else if (tIdx == 4){
        		inData      = "select1=dsSelect";
        		outData     = "dsDetail1=select10";
        	} else if (tIdx == 5){
        		inData      = "select10=dsSelect select2=dsSelect";
        		outData     = "dsDetail4=select100 dsList1=select20";
        	} else if (tIdx == 7){
        		this.dsSelect3 = new Dataset();

        		this.dsSelect3.addColumn("CD_PROJ", "string");
        		this.dsSelect3.addColumn("YN_READ", "string");

        		this.dsSelect3.addRow();

        		this.dsSelect3.setColumn(0, "CD_PROJ", this.dsSearch.getColumn(0, "CD_PROJ"));
        		this.dsSelect3.setColumn(0, "YN_READ", "Y");

        		inData      = "select3=dsSelect select7=dsSelect3 select8=dsSelect3";
        		outData     = "dsDetail2=select30 dsList2=select70 dsList3=select80";
        	} else if (tIdx == 1){
        		inData      = "select4=dsSelect";
        		outData     = "dsList4=select40";
        	} else if (tIdx == 2){
        		inData      = "select5=dsSelect";
        		outData     = "dsList5=select50";
        	} else if (tIdx == 3){
        		inData      = "select6=dsSelect";
        		outData     = "dsList6=select60";
        	} else if(tIdx == 6){
        		inData      = "select9=dsSelect";
        		outData     = "dsDetail3=select90";
        	}

        	var strArg      = "";
        	var callBackFnc = "fnCallback";

        	this.gfnTransaction( strSvcId , 	// transaction을 구분하기 위한 svc id값
        						strSvcType , 	// transaction을 요청할 구분
        						inProc,			// Procedure 정보 Dataset 이름
        						inData , 		// 입력값으로 보낼 dataset id , a=b형태로 실제이름과 입력이름을 매칭
        						outData , 		// 처리결과값으로 받을 dataset id, a=b형태로 실제이름과 입력이름을 매칭
        						strArg, 			// 입력갑스로 보낼 arguments, strFormData="20120607"
        						callBackFnc,false); // 통신방법 정의 [생략가능]
        }

        this.fnSelect_Auth = function(){
        	this.dsSelect.clearData();
        	this.dsSelect.addRow();
        	this.dsSelect.setColumn(0, "CD_PROJ", this.dsSearch.getColumn(0, "CD_PROJ"));

        	var strSvcId    = "select11";
        	var strSvcType  = "select";
        	var inProc		= "_dsProc";
        	var inData      = "select11=dsSelect";
        	var outData     = "dsList6_Auth=select110";
        	var strArg      = "";
        	var callBackFnc = "fnCallback";

        	this.gfnTransaction( strSvcId , 	// transaction을 구분하기 위한 svc id값
        						strSvcType , 	// transaction을 요청할 구분
        						inProc,			// Procedure 정보 Dataset 이름
        						inData , 		// 입력값으로 보낼 dataset id , a=b형태로 실제이름과 입력이름을 매칭
        						outData , 		// 처리결과값으로 받을 dataset id, a=b형태로 실제이름과 입력이름을 매칭
        						strArg, 			// 입력갑스로 보낼 arguments, strFormData="20120607"
        						callBackFnc,false); // 통신방법 정의 [생략가능]
        }

        this.fnSave = function(obj,e){

        	var tIdx = this.divData.form.tabData.tabindex==5?0:this.divData.form.tabData.tabindex;
        	this.dsBase.setColumn(0, "DS_PROJ", this.dsSearch.getColumn(0, "DS_PROJ") );
        	this.dsBase.setColumn(0, "ID_USER", this.AuthClient.ID_USER);
        	//this.dsBase.setColumn(0, "CD_DEPT", this.AuthClient.CD_DEPT);

        	if(!this.gfnDataValidate(this.dsBase, this.dsRequired))return;

        	var strSvcId    = "save";
        	var strSvcType  = "save";
        	var inProc		= "_dsProc";
        	var inData      = "save" + tIdx + "=dsBase";
        	var outData     = "dsBaseRst=save" + tIdx;
        	var strArg      = "";
        	var callBackFnc = "fnCallback";

        	this.gfnTransaction( strSvcId , 	// transaction을 구분하기 위한 svc id값
        						strSvcType , 	// transaction을 요청할 구분
        						inProc,			// Procedure 정보 Dataset 이름
        						inData , 		// 입력값으로 보낼 dataset id , a=b형태로 실제이름과 입력이름을 매칭
        						outData , 		// 처리결과값으로 받을 dataset id, a=b형태로 실제이름과 입력이름을 매칭
        						strArg, 			// 입력갑스로 보낼 arguments, strFormData="20120607"
        						callBackFnc,false); // 통신방법 정의 [생략가능]
        }

        this.fnDel = function(obj,e){

        	var tIdx = this.divData.form.tabData.tabindex;

        	this.gfnConfirm("삭제 하시겠습니까?", function(strId, val){
        		if(val == true) {
        			var strSvcId    = "delete";
        			var strSvcType  = "save";
        			var inProc		= "_dsProc";
        			var inData 		= "delete" + tIdx + "=dsBase";
        			var outData     = "";
        			var strArg      = "";
        			var callBackFnc = "fnCallback";

        			this.gfnTransaction( strSvcId , 	// transaction을 구분하기 위한 svc id값
        								strSvcType , 	// transaction을 요청할 구분
        								inProc,			// Procedure 정보 Dataset 이름
        								inData , 		// 입력값으로 보낼 dataset id , a=b형태로 실제이름과 입력이름을 매칭
        								outData , 		// 처리결과값으로 받을 dataset id, a=b형태로 실제이름과 입력이름을 매칭
        								strArg, 			// 입력갑스로 보낼 arguments, strFormData="20120607"
        								callBackFnc,false); // 통신방법 정의 [생략가능]
        		}
        	});
        }

        /************************************************************************
         * 콜백 이벤트
         ************************************************************************/
        /*
         *	콜백 처리
         */
        this.fnCallback = function(svcID, errorCode, errorMsg)
        {
        	if (errorCode == 0) {
        		if (svcID == "combo") {

        			this.dsDS_CD_PRC_BID.insertRow(0);
        			this.dsDS_CD_PRC_BID.setColumn(0, "CD_CODE", "");
        			this.dsDS_CD_PRC_BID.setColumn(0, "DS_CODE", "");

        			this.dsTY_MJ_CONST.insertRow(0);
        			this.dsTY_MJ_CONST.setColumn(0, "CD_CODE", "");
        			this.dsTY_MJ_CONST.setColumn(0, "DS_CODE", "");

        			if(this.gfnIsNull(this.getOwnerFrame().CD_PROJ)){
        				this.divData.form.tabData.tab1.form.ccboCD_CLS.set_index(0);
        			}

        		} else if(svcID == "save") {
        			this.dsSearch.setColumn(0, "CD_PROJ", this.dsBaseRst.getColumn(0, "OUT_DATA"))
        			this.FormBtns.Select.click();

        		} else if(svcID == "select0") {
        			//TAB1 조회
        			this.dsSearch.setColumn(0, "DS_PROJ", this.dsBase.getColumn(0, "DS_PROJ"));
        // 			this.divData.form.tabData.tab1.form.ccfDS_LOC.form.CDTextBox.set_value(this.dsBase.getColumn(0, "CD_ZIP"));
        // 			this.divData.form.tabData.tab1.form.ccfDS_LOC.form.DSTextBox.set_value(this.dsBase.getColumn(0, "DS_ADDR1"));
        			var HM_PQ = this.dsBase.getColumn(0, "HM_PQ");
        			var HM_AGREE = this.dsBase.getColumn(0, "HM_AGREE");
        			var HM_SITE_EXPL = this.dsBase.getColumn(0, "HM_SITE_EXPL");
        			var HM_BID_REG = this.dsBase.getColumn(0, "HM_BID_REG");
        			var HM_BID = this.dsBase.getColumn(0, "HM_BID");
        			var HM_BID_OPEN = this.dsBase.getColumn(0, "HM_BID_OPEN");
        			var HM_REVIEW = this.dsBase.getColumn(0, "HM_REVIEW");
        			var HM_BID_WIN = this.dsBase.getColumn(0, "HM_BID_WIN");

        			/*결재 승인 상태일때 재결재요청 가능*/
        			if("05" === this.dsBase.getColumn(0, "ST_APPR")){
        				//this.divData.form.tabData.tab1.form.btnApp.set_text("재결재요청");
        			} else {
        				//this.divData.form.tabData.tab1.form.btnApp.set_text("결재요청");
        			}

        			/*
        			this.dsBase.set_enableevent(false);
        			if(!this.gfnIsNull(HM_PQ)){
        				this.dsBase.setColumn(0, "H_PQ", HM_PQ.substring(0,2));
        				this.dsBase.setColumn(0, "M_PQ", HM_PQ.substring(2,4));
        			}
        			if(!this.gfnIsNull(HM_AGREE)){
        				this.dsBase.setColumn(0, "H_AGREE", HM_AGREE.substring(0,2));
        				this.dsBase.setColumn(0, "M_AGREE", HM_AGREE.substring(2,4));
        			}
        			if(!this.gfnIsNull(HM_SITE_EXPL)){
        				this.dsBase.setColumn(0, "H_SITE_EXPL", HM_SITE_EXPL.substring(0,2));
        				this.dsBase.setColumn(0, "M_SITE_EXPL", HM_SITE_EXPL.substring(2,4));
        			}
        			if(!this.gfnIsNull(HM_BID_REG)){
        				this.dsBase.setColumn(0, "H_BID_REG", HM_BID_REG.substring(0,2));
        				this.dsBase.setColumn(0, "M_BID_REG", HM_BID_REG.substring(2,4));
        			}
        			if(!this.gfnIsNull(HM_BID)){
        				this.dsBase.setColumn(0, "H_BID", HM_BID.substring(0,2));
        				this.dsBase.setColumn(0, "M_BID", HM_BID.substring(2,4));
        			}
        			if(!this.gfnIsNull(HM_BID_OPEN)){
        				this.dsBase.setColumn(0, "H_BID_OPEN", HM_BID_OPEN.substring(0,2));
        				this.dsBase.setColumn(0, "M_BID_OPEN", HM_BID_OPEN.substring(2,4));
        			}
        			if(!this.gfnIsNull(HM_REVIEW)){
        				this.dsBase.setColumn(0, "H_REVIEW", HM_REVIEW.substring(0,2));
        				this.dsBase.setColumn(0, "M_REVIEW", HM_REVIEW.substring(2,4));
        			}
        			if(!this.gfnIsNull(HM_BID_WIN)){
        				this.dsBase.setColumn(0, "H_BID_WIN", HM_BID_WIN.substring(0,2));
        				this.dsBase.setColumn(0, "M_BID_WIN", HM_BID_WIN.substring(2,4));
        			}
        			this.dsBase.set_enableevent(true);
        			*/
        			this.divData.form.tabData.tab1.form.divFile.form.set_enable(true);
        			// 첨부파일
        			//var cd_site = this.ccfCD_SITE.form.CDTextBox.value;
        			if(!this.gfnIsNull(this.dsBase.getColumn(0, "CD_PROJ"))){
        				var fileManager = {};
        				fileManager.CD_GUBUN = "DOC1";
        				fileManager.CD_DIR = [ this.dsBase.getColumn(0, "CD_PROJ") ];
        				fileManager.CD_REF1 = this.dsBase.getColumn(0, "CD_PROJ");
        				if(this.FormInfo.TY_AUTH == "R") {
        					fileManager.IS_READONLY = true;
        				} else {
        					fileManager.IS_READONLY = false;
        				}
        				// div FileManager 셋팅
        				this.divData.form.tabData.tab1.form.divFile.form.setFileManager(fileManager);
        			}
        			this.gfnSetFormStatus(this, "");
        			this.fnSetButton();
        		} else if(svcID == "delete"){
        			this.getParentContext().close(true);
        		} else if(svcID == "select1"){
        		} else if(svcID == "select2"){
        		} else if(svcID == "delete2"){
        			this.gfnAlert("삭제 되었습니다.");
        			this.FormBtns.Select.click();
        		} else if(svcID == "select3"){
        			this.fnSelect_Auth();
        		} else if(svcID == "select4"){
        			if(this.dsDetail1.rowcount > 0){
        				this.divData.form.tabData.tab2.form.divFile.form.set_enable(true);
        				// 첨부파일
        				//var cd_site = this.ccfCD_SITE.form.CDTextBox.value;
        				if(!this.gfnIsNull(this.dsBase.getColumn(0, "CD_PROJ"))){
        					var fileManager = {};
        					fileManager.CD_GUBUN = "DOC2";
        					fileManager.CD_DIR = [ this.dsBase.getColumn(0, "CD_PROJ") ];
        					fileManager.CD_REF1 = this.dsBase.getColumn(0, "CD_PROJ");
        					fileManager.IS_READONLY = true;
        					// div FileManager 셋팅
        					this.divData.form.tabData.tab2.form.divFile.form.setFileManager(fileManager);
        				}
        				//this.divData.form.tabData.tab2.form.btnApp.set_enable(true);

        				/*결재 승인 상태일때 재결재요청 가능*/
        				if("05" === this.dsDetail1.getColumn(0, "ST_APPR")){
        					//this.divData.form.tabData.tab2.form.btnApp.set_text("재결재요청");
        				} else {
        					//this.divData.form.tabData.tab2.form.btnApp.set_text("결재요청");
        				}

        			} else {
        				//this.divData.form.tabData.tab2.form.btnApp.set_enable(false);
        			}
        		} else if(svcID == "select5"){
        			/*결재 승인 상태일때 재결재요청 가능*/
        			if("05" === this.dsDetail4.getColumn(0, "ST_APPR")){
        				//this.divData.form.tabData.tab3.form.btnApp.set_text("재결재요청");
        			} else {
        				//this.divData.form.tabData.tab3.form.btnApp.set_text("결재요청");
        			}
        		} else if(svcID == "select7"){
        			this.tab4Flag = "";
        			if(this.dsDetail2.rowcount > 0){
        				this.tab4Flag = "U";

        				// 예정가격 계산.
        				var AM_ESTM_SUP = this.dsDetail2.getColumn(0, "AM_ESTM_SUP");
        				var AM_ESTM_VAT = this.dsDetail2.getColumn(0, "AM_ESTM_VAT");
        				// 낙찰가격 계산.
        				var AM_BID_SUP = this.dsDetail2.getColumn(0, "AM_BID_SUP");
        				var AM_BID_VAT = this.dsDetail2.getColumn(0, "AM_BID_VAT");

        				this.dsDetail2.setColumn(0, "AM_ESTM_CAL", AM_ESTM_SUP + AM_ESTM_VAT);
        				this.dsDetail2.setColumn(0, "AM_BID_CAL", AM_BID_SUP + AM_BID_VAT);

        				this.divData.form.tabData.tab4.form.divFile.form.set_enable(true);
        				// 첨부파일
        				//var cd_site = this.ccfCD_SITE.form.CDTextBox.value;
        				if(!this.gfnIsNull(this.dsBase.getColumn(0, "CD_PROJ"))){
        					var fileManager = {};
        					fileManager.CD_GUBUN = "DOC3";
        					fileManager.CD_DIR = [this.dsBase.getColumn(0, "CD_PROJ")];
        					fileManager.CD_REF1 = this.dsBase.getColumn(0, "CD_PROJ");
        					fileManager.IS_READONLY = true;
        					// div FileManager 셋팅
        					this.divData.form.tabData.tab4.form.divFile.form.setFileManager(fileManager);
        				}
        				//this.divData.form.tabData.tab4.form.btnApp.set_enable(true);
        				/*결재 승인 상태일때 재결재요청 가능*/
        				if("05" === this.dsDetail2.getColumn(0, "ST_APPR")){
        					//this.divData.form.tabData.tab4.form.btnApp.set_text("재결재요청");
        				} else {
        					//this.divData.form.tabData.tab4.form.btnApp.set_text("결재요청");
        				}
        			}else{
        				this.tab4Flag = "I";
        				//this.divData.form.tabData.tab4.form.btnApp.set_enable(false);
        			}
        		} else if(svcID == "select6"){
        			if(this.dsDetail3.getRowCount() == 0){
        				//this.divData.form.tabData.tab8.form.btnApp.set_enable(false);
        			} else {
        				//this.divData.form.tabData.tab8.form.btnApp.set_enable(true);
        				/*결재 승인 상태일때 재결재요청 가능*/
        				if("05" === this.dsDetail3.getColumn(0, "ST_APPR")){
        					//this.divData.form.tabData.tab8.form.btnApp.set_text("재결재요청");
        				} else {
        					//this.divData.form.tabData.tab8.form.btnApp.set_text("결재요청");
        				}
        			}
        		}
        		else if(svcID == "select6_Auth"){
        		} else if(svcID == "appChk") {
        			this.fnAppSelect();
        		} else if(svcID == "appSelect") {
        			this.fnAppOpen();
        		}
        	} else {
        		this.gfnAlert(errorMsg);
        	}
        };

        /************************************************************************
         * 기타 이벤트
         ************************************************************************/
        this.dsBase_onvaluechanged = function(obj,e)
        {
        	var _vat=0;
        	if(e.oldvalue != e.newvalue) {
        		if(this.gfnGetFormStatus(this) == "I"){
        			this.gfnSetFormStatus(this, "I");
        		}else{
        			this.gfnSetFormStatus(this, "U");
        		}
        		this.fnSetButton();
         		if(e.columnid == "AM_ESTM") {
        			//2020.02.26  한대운 숫자변환 수정
        			this.dsBase.set_enableevent(false);
        			_vat = nexacro.toNumber(obj.getColumn(0, "AM_ESTM"),0)*0.1;
        			obj.setColumn(0, "AM_CONST", _vat);
        			this.dsBase.set_enableevent(true);
        		} else if(e.columnid == "NO_TERM" || e.columnid == "DT_BID"){
        			//2020.04.24 진상우 준공예정일 자동계산 (입찰일 + 공사일 - 1일)
        			var _noTerm = this.gfnIsNull(this.dsBase.getColumn(0, "NO_TERM")) ? -1 : nexacro.toNumber(this.dsBase.getColumn(0, "NO_TERM"));
        			var _bidDt = this.dsBase.getColumn(0, "DT_BID");

        			var _rstDt = "";
        			if(!this.gfnIsNull(_bidDt) && _noTerm > 0){
        				_rstDt = this.gfnAddDate(this.gfnAddMonth(_bidDt, _noTerm), -1);
        				obj.setColumn(0, "DT_SC_COMPL", _rstDt);
        			} else {
        				obj.setColumn(0, "DT_SC_COMPL", "");
        			}
        		}
        		else if(e.columnid.substr(0, 2) == "HM"){
        			obj.setColumn(0, e.columnid, this.fnHmStr(e.columnid, e.oldvalue));
        			//if(!this.fnHmValidate(e.columnid)){
        				//
        				//return false;
        			//}
        		} else if(e.columnid == "NO_DSN_SCO" || e.columnid == "NO_COST_SCO"){
        			obj.setColumn(0, "NO_DSN_COST_SCO",
        												nexacro.toNumber(obj.getColumn(0, "NO_DSN_SCO"), 0.000) +
        												nexacro.toNumber(obj.getColumn(0, "NO_COST_SCO"), 0.000)
        			)
        		}
        		else if(e.columnid == "SZ_AREA_M"){		//대지면적 면적
         				_val = e.newvalue / 3.3058;
        				obj.setColumn(0, "SZ_AREA", nexacro.round(_val,2));
        				//건축면적 - 건폐율	건축면적 / 대지면적 * 100
        				_rt_arch = obj.getColumn(0, "SZ_AREA_M") == 0 ? 0 : (obj.getColumn(0, "SZ_ARCH_M") / obj.getColumn(0, "SZ_AREA_M")) * 100;
        				obj.setColumn(0, "RT_ARCH", nexacro.round(_rt_arch,2));
        				//상가면적 - 건폐율	상가면적 / 대지면적 * 100
        				_rt_arch = obj.getColumn(0, "SZ_AREA_M") == 0 ? 0 : (obj.getColumn(0, "SZ_SHOP_M") / obj.getColumn(0, "SZ_AREA_M")) * 100;
        				obj.setColumn(0, "RT_SHOP", nexacro.round(_rt_arch,2));
        				//용적율	지상연면적 / 대지면적 * 100
        				_rt_land_over = obj.getColumn(0, "SZ_AREA_M") == 0 ? 0 : (obj.getColumn(0, "SZ_LAND_OVR_M") / obj.getColumn(0, "SZ_AREA_M")) * 100;
        				obj.setColumn(0, "RT_LAND_OVR", nexacro.round(_rt_land_over,2));
        		}
        		else if(e.columnid == "SZ_LAND_OVR_M"){	//지상연면적
         				_val = e.newvalue  / 3.3058;
        				obj.setColumn(0, "SZ_LAND_OVR", nexacro.round(_val,2));
        				//용적율	지상연면적 / 대지면적 * 100
        				_rt_land_over = obj.getColumn(0, "SZ_AREA_M") == 0 ? 0 : (obj.getColumn(0, "SZ_LAND_OVR_M") / obj.getColumn(0, "SZ_AREA_M")) * 100;
        				obj.setColumn(0, "RT_LAND_OVR", nexacro.round(_rt_land_over,2));
        				//전체연면적
        				_val = obj.getColumn(0, "SZ_LAND_OVR_M") + obj.getColumn(0, "SZ_LAND_UNDR_M");
        				obj.setColumn(0, "SZ_LAND_M", _val);
        				obj.setColumn(0, "SZ_LAND", nexacro.round(_val / 3.3058,2));
        		}
        		else if(e.columnid == "SZ_LAND_UNDR_M"){	//지하연면적
         				_val = e.newvalue  / 3.3058 ;
        				obj.setColumn(0, "SZ_LAND_UNDR", nexacro.round(_val,2));
        				//전체연면적
        				_val = obj.getColumn(0, "SZ_LAND_OVR_M") + obj.getColumn(0, "SZ_LAND_UNDR_M");
        				obj.setColumn(0, "SZ_LAND_M", _val);
        				obj.setColumn(0, "SZ_LAND", nexacro.round(_val  / 3.3058,2));
        		}
        		else if(e.columnid == "SZ_ARCH_M"){	//건축면적-연면적
         				_val = e.newvalue  / 3.3058;
        				obj.setColumn(0, "SZ_ARCH", _val);
        				//건축면적 - 건폐율	건축면적 / 대지면적 * 100
        				_rt_arch = obj.getColumn(0, "SZ_AREA_M") == 0 ? 0 : (obj.getColumn(0, "SZ_ARCH_M") / obj.getColumn(0, "SZ_AREA_M")) * 100;
        				obj.setColumn(0, "RT_ARCH", nexacro.round(_rt_arch,2));
        				//상가면적 - 건폐율	상가면적 / 대지면적 * 100
        				_rt_arch = obj.getColumn(0, "SZ_AREA_M") == 0 ? 0 : (obj.getColumn(0, "SZ_SHOP_M") / obj.getColumn(0, "SZ_AREA_M")) * 100;
        				obj.setColumn(0, "RT_SHOP", nexacro.round( _rt_arch,2));
        		}
        		else if(e.columnid == "SZ_SHOP_M"){	//상가면적
         				_val = e.newvalue  / 3.3058;
        				obj.setColumn(0, "SZ_SHOP", _val);
        				//상가면적 - 건폐율	상가면적 / 대지면적 * 100
        				_rt_arch = obj.getColumn(0, "SZ_AREA_M") == 0 ? 0 : (obj.getColumn(0, "SZ_SHOP_M") / obj.getColumn(0, "SZ_AREA_M")) * 100;
        				obj.setColumn(0, "RT_SHOP", nexacro.round(_rt_arch,2));
        		}
        	}
        };

        this.fnHmStr = function(colId, oVal){
        	//input value 0붙여서 처리시작
        	var rtn = nexacro.replaceAll(this.gfnIsNull(this.dsBase.getColumn(0, colId)) ? "    " : this.dsBase.getColumn(0, colId) , " ", "0");

        	//oldvalue 0 붙여서 처리
        	var oVal1 = nexacro.replaceAll(this.gfnIsNull(oVal) ? "    " : oVal, " ", "0");

        	// 시간형식 체크 정규화 hh:mm
        	// /^([1-9]|[01][0-9]|2[0-3])([0-5][0-9])$/
        	var pVal = rtn.substr(0, 2)
        	  , sVal = rtn.substr(2, 2)
        	  , pVal1 = oVal1.substr(0, 2)
        	  , sVal1 = oVal1.substr(2, 2);

        	var hhFormat = /^([1-9]|[01][0-9]|2[0-3])$/;
        	var mmFormat = /^([0-5][0-9])$/;

        	if(!hhFormat.test(rtn.substr(0, 2))){
        		this.gfnAlert("00시부터 24시내로 입력해주세요.");
        		pVal = pVal1;
        	}

        	if(!mmFormat.test(rtn.substr(2, 2))){
        		this.gfnAlert("00분부터 59분내로 입력해주세요.");
        		sVal = sVal1;
        	}

        	return pVal + sVal;
        }

        /*
         *	조회 조건 변경시 초기화
         */
        this.dsSearch_onvaluechanged = function(obj,e){
        	if(e.oldvalue != e.newvalue) {
        		if(this.gfnGetFormStatus(this) == "I"){
        			this.gfnSetFormStatus(this, "I");
        		}else{
        			this.gfnSetFormStatus(this, "U");
        		}
        		this.fnSetButton();
        	}
        };

        this.divData_tabData_onchanged = function(obj,e)
        {
        	switch(obj.tabindex) {
        		case 0:
        			this.fnSetButton();
        			break;
        		break;
        		case 5:
        			this.fnSelect();
        			this.fnSetButton();
        			break;
        		case 1:
        		case 2:
        		case 3:
        		case 4:
        		case 6:
        		case 7:
        			this.fnSelect();
        			this.FormBtns.Select.set_enable(false);
        			this.FormBtns.Save.set_enable(false);
        			this.FormBtns.Del.set_enable(false);
        		break;
        	}
        };

        this.divData_tabData_btnReg_onclick = function(obj,e)
        {
        	var tIdx = this.divData.form.tabData.tabindex;
        	var popStr = "";
        	var _popType = "";
        	var _width = 0;
        	var _height = 0;
        	switch(tIdx) {
        		case 0:
        		case 1:
        			//수주 > 주택 > 공통 > 공동도급사 관리
        			popStr = "DOZ_PROJ_CO_CONTRCT";
        			_width = 770;
        			_height = 600;
        			_popType = "DOZ";

        			var param = {
        				CD_PROJ : this.dsSearch.getColumn(0, "CD_PROJ")
        			  , DS_PROJ : this.dsBase.getColumn(0, "DS_PROJ")
        			  , TY_VENDOR : "CIVL"
        			}

        			this.gfnFormOpen(_popType, popStr, "fnDialogCallback", param, _width, _height);
        		break;
        		case 2:
        			//수주 > 주택 > 공통 > 관계사 관리
        			popStr = "DOZ_PROJ_CONCERN";
        			_width = 850;
        			_height = 600;
        			_popType = "DOZ";

        			var param = {
        				CD_PROJ : this.dsSearch.getColumn(0, "CD_PROJ")
        			  , DS_PROJ : this.dsBase.getColumn(0, "DS_PROJ")
        			  , TY_VENDOR : "CIVLJNT"
        			}

        			this.gfnFormOpen(_popType, popStr, "fnDialogCallback", param, _width, _height);
        		break;
        		case 3:
        			//수주 > 주택 > 공통 > 담당자 관리
        			popStr = "DOZ_PROJ_CHARGE";
        			_width = 600;
        			_height = 600;
        			_popType = "DOZ";

        			var param = {
        				CD_PROJ : this.dsSearch.getColumn(0, "CD_PROJ")
        			  , DS_PROJ : this.dsBase.getColumn(0, "DS_PROJ")
        			  , TY_VENDOR : ""
        			}

        			this.gfnFormOpen(_popType, popStr, "fnDialogCallback", param, _width, _height);
        		break;
        		case 6:
        			//수주 > 도급 > 입찰금액결정
        			popStr = "DOB_BID_AM_DCID";
        			_width = 1150;
        			_height = 370;
        			_popType = "DOA";

        			var param = {
        				CD_PROJ : this.dsSearch.getColumn(0, "CD_PROJ")
        			  , DS_PROJ : this.dsBase.getColumn(0, "DS_PROJ")
        			  , TY_VENDOR : ""
        			}

        			this.gfnFormOpen(_popType, popStr, "fnDialogCallback", param, _width, _height);
        		break;
        		case 4:
        		case 5:
        	}
        };

        this.divData_tabData_btnReg_Auth_onclick = function(obj,e)
        {
        	popStr = "DOZ_PROJ_AUTH";
        	_width = 600;
        	_height = 600;
        	_popType = "DOZ";

        	var param = {
        		CD_PROJ : this.dsSearch.getColumn(0, "CD_PROJ")
        	  , DS_PROJ : this.dsBase.getColumn(0, "DS_PROJ")
        	  , TY_VENDOR : ""
        	  }

        	this.gfnFormOpen(_popType, popStr, "fnDialogCallback", param, _width, _height);
        };

        this.fnDialogCallback = function(svcID, value) {
        	var tIdx = this.divData.form.tabData.tabindex;
        	switch(tIdx) {
        		case 0:
        			this.fnSetButton();
        			break;
        		break;
        		case 5:
        			this.fnSelect();
        			this.fnSetButton();
        			break;
        		case 1:
        		case 2:
        		case 3:
        		case 4:
        		case 6:
        		case 7:
        			this.fnSelect();
        			this.FormBtns.Select.set_enable(false);
        			this.FormBtns.Save.set_enable(false);
        			this.FormBtns.Del.set_enable(false);
        		break;
        	}
        };

        this.fnContCreate = function(){
        		var param = {
        		CD_PROJ  : this.dsSearch.getColumn(0, "CD_PROJ")
        	  , DS_PROJ  : this.dsSearch.getColumn(0, "DS_PROJ")
        	  , CD_FIELD : this.dsBase.getColumn(0, "CD_FIELD")
        	  , NO_CONT : this.dsBase.getColumn(0, "NO_CONT")
        	  , NO_CHG_CONT : this.dsBase.getColumn(0, "NO_CHG_CONT")
        	}
        	this.gfnFormOpen("DOD", "DOD_CIVL_CONT", "fnDialogCallback", param, 1320, 880);
        }

        this.fnHqCreate = function(){
        	this.gfnConfirm("HQ코드생성을 하시겠습니까?", function(strId, val){
        		if(val == true) {
        			var strSvcId    = "hqCreate";
        			var strSvcType  = "save";
        			var inProc		= "_dsProc";
        			var inData 		= "updateHqCreate=dsBase";
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
        	});
        }

        // 현설결과 등록버튼
        this.divData_tabData_tab2_btnRegFieldExpl_onclick = function(obj,e)
        {
        	var FIELD_EXPL_GUBUN = "I";

        	if(this.dsDetail1.rowcount > 0){
        		FIELD_EXPL_GUBUN = "U";
        	}

        	var param = {
        		CD_PROJ : this.dsSearch.getColumn(0, "CD_PROJ")
        	  , DS_PROJ : this.dsSearch.getColumn(0, "DS_PROJ")
        	  , DT_SITE_EXPL : this.dsBase.getColumn(0, "DT_SITE_EXPL")
        	  , H_SITE_EXPL : this.dsBase.getColumn(0, "H_SITE_EXPL")
        	  , M_SITE_EXPL : this.dsBase.getColumn(0, "M_SITE_EXPL")
        	  , FIELD_EXPL_GUBUN : FIELD_EXPL_GUBUN
        	}

        	this.gfnFormOpen("DOB", "DOB_CIVL_FIELD_EXPL", "fnDialogCallback", param, 1180, 800);
        };

        // 컨소시엄 등록 팝업 호출
        this.divData_tabData_tab3_btnRegConsor_onclick = function(obj,e)
        {
        	var DSN_CONSOR_GUBUN = "I";

        	var param = {
        		CD_PROJ 	: this.dsSearch.getColumn(0, "CD_PROJ")
        	  , NO_CONSOR 	: ""
        	  , DSN_CONSOR_GUBUN : DSN_CONSOR_GUBUN
        	}

        	this.gfnFormOpen("DOB", "DOB_CIVL_DSN_DEL_CO", "fnDialogCallback", param, 635, 740);
        };

        // 컨소시엄 삭제 버튼
        this.divData_tabData_tab3_btnDelConsor_onclick = function(obj,e)
        {
        	// 선택된 row가 있을 경우에만 삭제
        	if (!this.gfnGridIsRow(this.dxGrid1)) { return false; }

        	this.gfnConfirm("삭제 하시겠습니까?", function(strId, val){
        		if(val == true) {

        			this.dsDelete.clearData();
        			this.dsDelete.addRow();

        			this.dsDelete.setColumn(0, "TY_WRK", "D");
        			this.dsDelete.setColumn(0, "CD_PROJ", this.dsList1.getColumn(this.dsList1.rowposition, "CD_PROJ"));
        			this.dsDelete.setColumn(0, "NO_CONSOR", this.dsList1.getColumn(this.dsList1.rowposition, "NO_CONSOR"));

        			var strSvcId    = "delete2";
        			var strSvcType  = "save";
        			var inProc		= "_dsProc";
        			var inData      = "delete2=dsDelete";
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
        	});

        };

        this.divData_tabData_tab4_btnRegBidRlt_onclick = function(obj,e)
        {
        	var BID_RLT_GUBUN = "I";

        	if(this.dsDetail2.rowcount > 0){
        		BID_RLT_GUBUN = "U";
        	}
        	var param = {
        		CD_PROJ : this.dsSearch.getColumn(0, "CD_PROJ")
        	  , DS_PROJ : this.dsSearch.getColumn(0, "DS_PROJ")
        	  , BID_RLT_GUBUN : BID_RLT_GUBUN
        	}

        	this.gfnFormOpen("DOB", "DOB_CIVL_BID_RLT", "fnDialogCallback", param, 1340, 800);
        };


        this.divData_tabData_tab3_objGrdtab3_oncelldblclick = function(obj,e)
        {
        	// 선택된 row가 있을 경우에만 팝업을 띄움
        	if (!this.gfnGridIsRow(this.dxGrid1)) { return false; }

        	var DSN_CONSOR_GUBUN = "U";

        	var param = {
        		CD_PROJ 	: this.dsSearch.getColumn(0, "CD_PROJ")
        	  , NO_CONSOR 	: this.dsList1.getColumn(this.dsList1.rowposition, "NO_CONSOR")
        	  , DSN_CONSOR_GUBUN : DSN_CONSOR_GUBUN
        	}

        	this.gfnFormOpen("DOB", "DOB_CIVL_DSN_DEL_CO", "fnDialogCallback", param, 635, 740);
        };

        this.divData_tabData_btnApp_onclick = function(obj,e)
        {
        	var tIdx = this.divData.form.tabData.tabindex;

        	var _docId = "";
        	var _docNm = "";
        	var _docNo = 0;

        	if(tIdx == 0){
        		//기본정보
        		_docId = "DOB01";
        		_docNm = "발주예정";
        		_docNo = 1;
        	} else if(tIdx == 4){
        		//현설결과
        		_docId = "DOB02";
        		_docNm = "입찰공고";
        		_docNo = 2;
        	} else if(tIdx == 5){
        		//설계심의
        		_docId = "DOB03";
        		_docNm = "설계심의";
        		_docNo = 3;
        	} else if(tIdx == 6){
        		//입찰금액결정
        		_docId = "DOB04";
        		_docNm = "입찰금액결정";
        		_docNo = 4;
        	} else if(tIdx == 7){
        		if(this.dsBase.getColumn(0, "YN_ORD") == "Y"){
        			//입찰결과 TK
        			_docId = "DOB05";
        			_docNm = "입찰결과(TK)";
        			_docNo = 5;
        		} else {
        			//입찰결과
        			_docId = "DOB06";
        			_docNm = "입찰결과";
        			_docNo = 6;
        		}
        	}

        	this.fnApp(_docId, _docNm, _docNo);
        };


        this.fnApp = function( docId, docNm, docNo ){
        	this.dsAppParam.clearData();
        	var nrow = this.dsAppParam.addRow();
        	this.dsAppParam.setColumn(nrow, "CD_PROJ", this.dsSearch.getColumn(0, "CD_PROJ"));
        	this.dsAppParam.setColumn(nrow, "DOC_APP", docId);
        	this.dsAppParam.setColumn(nrow, "DOC_NO", docNo);
        	//DOB01 : 발주예정 (프로젝트기본정보)
        	//DOB02 : 입찰공고 (현설결과)
        	//DOB03 :  설계심의
        	//DOB04 :  입찰금액결정
        	//DOB05 :  입찰결과(TK)
        	//DOB06 :  입찰결과

        	var msg = "프로젝트코드 : " + this.dsSearch.getColumn(0, "CD_PROJ") + " [" + this.dsSearch.getColumn(0, "DS_PROJ") + "]"
        			+ "\n " + "[" + docNm +  "]" + "결재상신 하시겠습니까?"
        			+ "\n " + " 주의) 재결재 시 이전 결제 정보는 삭제 됩니다!!!";
        	this.gfnConfirm(msg, "fnApp_callback", "");
        }

        this.fnApp_callback = function(strId, val){
        	if(val == true)
        	{
        		if (this.dsAppParam.rowcount == 0) return;

        		var strSvcId    = "appChk";
        		var strSvcType  = "save";
        		var inProc		= "_dsProc";
        		var inData      = "appChk"+this.dsAppParam.getColumn(0, "DOC_NO") +"=dsAppParam";
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

        this.fnAppSelect = function(){
        	var strSvcId    = "appSelect";
        	var strSvcType  = "select";
        	var inProc		= "_dsProc";
        	var inData      = "appSelect"+this.dsAppParam.getColumn(0, "DOC_NO") +"=dsAppParam";
        	var outData     = "dsAppList=appSelect"+this.dsAppParam.getColumn(0, "DOC_NO") +"0";
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
        		var sApType = "";
        		var sTitle  = this.dsBase.getColumn(0, "DS_ORD") + "/"  + this.dsSearch.getColumn(0, "DS_PROJ") + "/";
        		sApType = this.dsAppParam.getColumn(0, "DOC_APP");

        		this.serverTime = "";
        		this.gfnGetServerTime("serverTime");

        		this.serverTimeStr = this.gfnGetDigit(this.serverTime.substring(0, 10));

        		if(sApType == "DOB01"){
        			sTitle += "발주예정";
        		} else if(sApType == "DOB02"){
        			sTitle += "입찰의견";
        		} else if(sApType == "DOB03"){
        			sTitle += "설계심의";
        		} else if(sApType == "DOB04"){
        			sTitle += "입찰금액결정";
        		} else if(sApType == "DOB05"){
        			sTitle += "입찰결과(TK)";
        		} else if(sApType == "DOB06"){
        			sTitle += "입찰결과";
        		}
        		sTitle += "/" + this.serverTimeStr;

        		var sRef01  = this.dsSearch.getColumn(0, "CD_PROJ");
        		var sRef02  = "";
        		var sRef03  = "";
        		var sRef04  = "";
        		var oParam  = this.gfnDataSetToJson(this.dsAppList, this.dsAppList.rowposition)

        		console.info("================ oParam");
        		console.info(sApType);
        		console.info(sTitle);
        		console.info(oParam);

        		this.gfnApprove(sApType, sTitle, sRef01, sRef02, sRef03, sRef04, oParam, "fnAprvDialogCallback");
        	}
        }

        this.fnAprvDialogCallback = function(){
        	this.FormBtns.Select.click();
        }

        this.fnVendor = function(){
            var param = {};
            this.gfnFormOpen("DHZ", "DHZ_VENDORALL", "fnDialogCallback", param, 980, 720);
        }
        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.form_onload,this);
            this.addEventHandler("onclick",this.form_onclick,this);
            this.divSearch.form.ctxtDS_PROJ.addEventHandler("onchanged",this.divSearch_ctxtDS_PROJ_onchanged,this);
            this.divData.addEventHandler("ondragmove",this.divData_ondragmove,this);
            this.divData.form.tabData.addEventHandler("onchanged",this.divData_tabData_onchanged,this);
            this.divData.form.tabData.tab1.form.staCD_CV_GO.addEventHandler("onclick",this.divData_tabData_tab1_staCD_CV_GO_onclick,this);
            this.divData.form.tabData.tab1.form.staDT_BID_WIN00.addEventHandler("onclick",this.divData_tabData_tab1_staDT_BID_WIN00_onclick,this);
            this.divData.form.tabData.tab1.form.btnApp.addEventHandler("onclick",this.divData_tabData_btnApp_onclick,this);
            this.divData.form.tabData.tab1.form.staNO_TERM00.addEventHandler("onclick",this.divData_tabData_tab1_staNO_TERM00_onclick,this);
            this.divData.form.tabData.tab1.form.staCD_CORP.addEventHandler("onclick",this.divData_tabData_tab1_staCD_CV_GO_onclick,this);
            this.divData.form.tabData.tab1.form.staCD_LAND_STAT.addEventHandler("onclick",this.divData_tabData_tab1_staCD_LAND_STAT_onclick,this);
            this.divData.form.tabData.tab1.form.staCD_PERMIT_STAT00_00_00.addEventHandler("onclick",this.divData_tabData_tab1_staCD_PERMIT_STAT00_00_00_onclick,this);
            this.divData.form.tabData.tab1.form.staPercent09.addEventHandler("onclick",this.divData_tabData_tab1_staPercent09_onclick,this);
            this.divData.form.tabData.tab1.form.ccboCD_LAND_STAT.addEventHandler("onitemchanged",this.divData_tabData_tab1_ccboCD_LAND_STAT_onitemchanged,this);
            this.divData.form.tabData.tab5.form.btnReg.addEventHandler("onclick",this.divData_tabData_btnReg_onclick,this);
            this.divData.form.tabData.tab6.form.btnReg.addEventHandler("onclick",this.divData_tabData_btnReg_onclick,this);
            this.divData.form.tabData.tab7.form.btnReg.addEventHandler("onclick",this.divData_tabData_btnReg_onclick,this);
            this.divData.form.tabData.tab7.form.btnReg_Auth.addEventHandler("onclick",this.divData_tabData_btnReg_Auth_onclick,this);
            this.divData.form.tabData.tab2.form.btnRegFieldExpl.addEventHandler("onclick",this.divData_tabData_tab2_btnRegFieldExpl_onclick,this);
            this.divData.form.tabData.tab2.form.btnApp.addEventHandler("onclick",this.divData_tabData_btnApp_onclick,this);
            this.divData.form.tabData.tab3.form.objGrdtab3.addEventHandler("oncelldblclick",this.divData_tabData_tab3_objGrdtab3_oncelldblclick,this);
            this.divData.form.tabData.tab3.form.btnDelConsor.addEventHandler("onclick",this.divData_tabData_tab3_btnDelConsor_onclick,this);
            this.divData.form.tabData.tab3.form.btnRegConsor.addEventHandler("onclick",this.divData_tabData_tab3_btnRegConsor_onclick,this);
            this.divData.form.tabData.tab3.form.btnApp.addEventHandler("onclick",this.divData_tabData_btnApp_onclick,this);
            this.divData.form.tabData.tab8.form.btnReg.addEventHandler("onclick",this.divData_tabData_btnReg_onclick,this);
            this.divData.form.tabData.tab8.form.btnApp.addEventHandler("onclick",this.divData_tabData_btnApp_onclick,this);
            this.divData.form.tabData.tab4.form.btnRegBidRlt.addEventHandler("onclick",this.divData_tabData_tab4_btnRegBidRlt_onclick,this);
            this.divData.form.tabData.tab4.form.btnApp.addEventHandler("onclick",this.divData_tabData_btnApp_onclick,this);
            this.dsSearch.addEventHandler("onvaluechanged",this.dsSearch_onvaluechanged,this);
            this.dsBase.addEventHandler("onvaluechanged",this.dsBase_onvaluechanged,this);
        };
        this.loadIncludeScript("DOO_OVS_PROJ.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
