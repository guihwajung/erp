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
            this.set_titletext("선급비용관리");
            if (Form == this.constructor)
            {
                this._setFormPosition(1500,700);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("dsList", this);
            obj._setContents("<ColumnInfo><Column id=\"NO_ID\" type=\"STRING\" size=\"256\"/><Column id=\"CD_CORP\" type=\"STRING\" size=\"256\"/><Column id=\"CD_PLACE\" type=\"STRING\" size=\"256\"/><Column id=\"DS_PLACE\" type=\"STRING\" size=\"256\"/><Column id=\"DS_ADDRESS\" type=\"STRING\" size=\"256\"/><Column id=\"NO_PHONE\" type=\"STRING\" size=\"256\"/><Column id=\"NO_SPHONE\" type=\"STRING\" size=\"256\"/><Column id=\"DS_REGION\" type=\"STRING\" size=\"256\"/><Column id=\"CD_STREET\" type=\"STRING\" size=\"256\"/><Column id=\"DS_STREET\" type=\"STRING\" size=\"256\"/><Column id=\"CD_WORK\" type=\"STRING\" size=\"256\"/><Column id=\"YM_WORK\" type=\"STRING\" size=\"256\"/><Column id=\"YM_PAYMENT\" type=\"STRING\" size=\"256\"/><Column id=\"DT_NOTIFY\" type=\"STRING\" size=\"256\"/><Column id=\"DT_DELIVERY\" type=\"STRING\" size=\"256\"/><Column id=\"DT_PAY\" type=\"STRING\" size=\"256\"/><Column id=\"YN_DEDUCT\" type=\"STRING\" size=\"256\"/><Column id=\"DS_DEDUCT\" type=\"STRING\" size=\"256\"/><Column id=\"NO_FIRSTEMP\" type=\"INT\" size=\"256\"/><Column id=\"DS_REDUCTION\" type=\"STRING\" size=\"256\"/><Column id=\"NO_EMP\" type=\"BIGDECIMAL\" size=\"256\"/><Column id=\"AM_PAYAVG\" type=\"BIGDECIMAL\" size=\"256\"/><Column id=\"AM_PAYSUM\" type=\"BIGDECIMAL\" size=\"256\"/><Column id=\"AM_TAXFREE\" type=\"BIGDECIMAL\" size=\"256\"/><Column id=\"AM_TAXPAY\" type=\"BIGDECIMAL\" size=\"256\"/><Column id=\"NO_EMP_PRE\" type=\"BIGDECIMAL\" size=\"256\"/><Column id=\"AM_MONTHPAY\" type=\"BIGDECIMAL\" size=\"256\"/><Column id=\"AM_TAXBASE_DEDUCT\" type=\"BIGDECIMAL\" size=\"256\"/><Column id=\"AM_TAXBASE\" type=\"BIGDECIMAL\" size=\"256\"/><Column id=\"AM_TAXAMOUNT\" type=\"BIGDECIMAL\" size=\"256\"/><Column id=\"CD_PENALTY\" type=\"STRING\" size=\"256\"/><Column id=\"DS_WITHOUT\" type=\"STRING\" size=\"256\"/><Column id=\"AM_PENALTY_DEFAULT\" type=\"BIGDECIMAL\" size=\"256\"/><Column id=\"AM_PENALTY_DATE\" type=\"BIGDECIMAL\" size=\"256\"/><Column id=\"AM_EMPTAX\" type=\"BIGDECIMAL\" size=\"256\"/><Column id=\"YN_CLOSE\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows/>");
            this.addChild(obj.name, obj);


            obj = new Dataset("_dsProc", this);
            obj._setContents("<ColumnInfo><Column id=\"TARGET\" type=\"STRING\" size=\"256\"/><Column id=\"SP\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"TARGET\">select</Col><Col id=\"SP\">DHVPR_EMPTAX_SELECT</Col></Row><Row><Col id=\"TARGET\">update</Col><Col id=\"SP\">DHVPR_EMPTAX_UPDATE</Col></Row><Row><Col id=\"TARGET\">delete</Col><Col id=\"SP\">DHVPR_EMPTAX_DELETE</Col></Row><Row><Col id=\"TARGET\">create</Col><Col id=\"SP\">DHVPR_EMPTAX_CREATE</Col></Row><Row><Col id=\"TARGET\">selectpay</Col><Col id=\"SP\">DHVPR_EMPTAXPAY_SELECT</Col></Row><Row><Col id=\"TARGET\">updatepay</Col><Col id=\"SP\">DHVPR_EMPTAXPAY_SAVE</Col></Row><Row><Col id=\"TARGET\">selectrate</Col><Col id=\"SP\">DHVPR_LOCALTAX_RATE_SELECT</Col></Row><Row><Col id=\"TARGET\">combo</Col><Col id=\"SP\">DHXPR_COMBO_SELECT</Col></Row><Row><Col id=\"TARGET\">close</Col><Col id=\"SP\">DHVPR_EMPTAX_CLOSE</Col></Row><Row><Col id=\"TARGET\">ESingo</Col><Col id=\"SP\">DHVPR_EMPTAX_EXCELFILE_SELECT</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsListPay", this);
            obj._setContents("");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsSearch", this);
            obj._setContents("<ColumnInfo><Column id=\"CD_CORP\" type=\"STRING\" size=\"256\"/><Column id=\"DS_CORP\" type=\"STRING\" size=\"256\"/><Column id=\"YM_FROM\" type=\"STRING\" size=\"256\"/><Column id=\"YM_TO\" type=\"STRING\" size=\"256\"/><Column id=\"YM_JFROM\" type=\"STRING\" size=\"256\"/><Column id=\"YM_JTO\" type=\"STRING\" size=\"256\"/><Column id=\"CD_PLACE\" type=\"STRING\" size=\"256\"/><Column id=\"DS_PLACE\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row/></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsReduction", this);
            obj._setContents("");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsRate", this);
            obj._setContents("");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsPenalty", this);
            obj._setContents("");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsWithout", this);
            obj._setContents("");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsExcelFile", this);
            obj._setContents("<ColumnInfo><Column id=\"SEQ\" type=\"BIGDECIMAL\" size=\"256\"/><Column id=\"NO_CORP\" type=\"STRING\" size=\"256\"/><Column id=\"CD_PLACE\" type=\"STRING\" size=\"256\"/><Column id=\"CD_ZIP\" type=\"STRING\" size=\"256\"/><Column id=\"DS_ADDRESS\" type=\"STRING\" size=\"256\"/><Column id=\"DS_REGION\" type=\"STRING\" size=\"256\"/><Column id=\"DS_DONG\" type=\"STRING\" size=\"256\"/><Column id=\"CD_REGION\" type=\"STRING\" size=\"256\"/><Column id=\"CD_DONG\" type=\"STRING\" size=\"256\"/><Column id=\"YM_WORK\" type=\"STRING\" size=\"256\"/><Column id=\"DT_PAY\" type=\"STRING\" size=\"256\"/><Column id=\"DS_PENALTY\" type=\"STRING\" size=\"256\"/><Column id=\"DS_WITHOUT\" type=\"STRING\" size=\"256\"/><Column id=\"DS_DEDUCT\" type=\"STRING\" size=\"256\"/><Column id=\"NO_FIRSTEMP\" type=\"INT\" size=\"256\"/><Column id=\"DS_REDUCTION\" type=\"STRING\" size=\"256\"/><Column id=\"NO_EMP\" type=\"BIGDECIMAL\" size=\"256\"/><Column id=\"NO_DAYEMP\" type=\"INT\" size=\"256\"/><Column id=\"AM_TAXPAY\" type=\"BIGDECIMAL\" size=\"256\"/><Column id=\"AM_SPAY\" type=\"INT\" size=\"256\"/><Column id=\"AM_BONUS\" type=\"INT\" size=\"256\"/><Column id=\"AM_ETCPAY\" type=\"INT\" size=\"256\"/><Column id=\"AM_TAXFREE\" type=\"INT\" size=\"256\"/><Column id=\"AM_SPAYFREE\" type=\"INT\" size=\"256\"/><Column id=\"AM_BONUSFREE\" type=\"INT\" size=\"256\"/><Column id=\"AM_ETCPAYTREE\" type=\"BIGDECIMAL\" size=\"256\"/><Column id=\"AM_01\" type=\"BIGDECIMAL\" size=\"256\"/><Column id=\"AM_02\" type=\"BIGDECIMAL\" size=\"256\"/><Column id=\"AM_03\" type=\"BIGDECIMAL\" size=\"256\"/><Column id=\"AM_04\" type=\"BIGDECIMAL\" size=\"256\"/><Column id=\"AM_05\" type=\"BIGDECIMAL\" size=\"256\"/><Column id=\"AM_06\" type=\"BIGDECIMAL\" size=\"256\"/><Column id=\"AM_07\" type=\"BIGDECIMAL\" size=\"256\"/><Column id=\"AM_08\" type=\"BIGDECIMAL\" size=\"256\"/><Column id=\"AM_09\" type=\"BIGDECIMAL\" size=\"256\"/><Column id=\"AM_10\" type=\"BIGDECIMAL\" size=\"256\"/><Column id=\"AM_11\" type=\"BIGDECIMAL\" size=\"256\"/><Column id=\"NO_01\" type=\"INT\" size=\"256\"/><Column id=\"NO_02\" type=\"INT\" size=\"256\"/><Column id=\"NO_03\" type=\"INT\" size=\"256\"/><Column id=\"NO_04\" type=\"INT\" size=\"256\"/><Column id=\"NO_05\" type=\"INT\" size=\"256\"/><Column id=\"NO_06\" type=\"INT\" size=\"256\"/><Column id=\"NO_07\" type=\"INT\" size=\"256\"/><Column id=\"NO_08\" type=\"INT\" size=\"256\"/><Column id=\"NO_09\" type=\"INT\" size=\"256\"/><Column id=\"NO_10\" type=\"INT\" size=\"256\"/><Column id=\"NO_11\" type=\"INT\" size=\"256\"/><Column id=\"NO_12\" type=\"INT\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsExcel", this);
            obj._setContents("");
            this.addChild(obj.name, obj);


            obj = new FileDialog("fdg00", this);
            obj.set_accept("*.xlsx");
            this.addChild(obj.name, obj);


            obj = new FileUpTransfer("FileUpTransfer00", this);
            this.addChild(obj.name, obj);


            obj = new FileDownTransfer("FileDownTransfer00", this);
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Div("divSearch","0","10.0",null,"47","0",null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_cssclass("div_SEARCH_Bg");
            obj.set_formscrolltype("none");
            this.addChild(obj.name, obj);

            obj = new Static("sta01","0.0","10.0","92.0","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("0");
            obj.set_text("법인코드");
            obj.set_cssclass("sta_WF_SchLabelE");
            this.divSearch.addChild(obj.name, obj);

            obj = new Div("ccfCD_CORP","sta01:0.0","10.0","219","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.getSetter("CDTextWidth").set("50");
            obj.set_taborder("1");
            obj.set_url("cmm::cmmCodeFind.xfdl");
            obj.set_text("");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("sta02","870","10","106","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("7");
            obj.set_text("사업장코드");
            obj.set_cssclass("sta_WF_SchLabel");
            this.divSearch.addChild(obj.name, obj);

            obj = new Div("ccfCD_PLACE","972","10","219","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.getSetter("CDTextWidth").set("50");
            obj.set_taborder("6");
            obj.set_url("cmm::cmmCodeFind.xfdl");
            obj.set_text("");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("staYM","312","10.0","92.0","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("8");
            obj.set_text("귀속기간");
            obj.set_usedecorate("false");
            obj.set_cssclass("sta_WF_SchLabelE");
            this.divSearch.addChild(obj.name, obj);

            obj = new Div("ctclYM_FROM","404","10.0","80","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("2");
            obj.set_url("cmm::cmmCalMM.xfdl");
            obj.set_enableevent("true");
            obj.set_text("");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("staWAVE","484","10.0","30.0","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("9");
            obj.set_text("~");
            obj.set_cssclass("sta_WF_AC");
            this.divSearch.addChild(obj.name, obj);

            obj = new Div("ctclYM_TO","514","10.0","80","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("3");
            obj.set_url("cmm::cmmCalMM.xfdl");
            obj.set_enableevent("true");
            obj.set_text("");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("staYM2","594","10.0","92.0","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("10");
            obj.set_text("지급기간");
            obj.set_usedecorate("false");
            obj.set_cssclass("sta_WF_SchLabelE");
            this.divSearch.addChild(obj.name, obj);

            obj = new Div("ctclYM_JFROM","686","10.0","80","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("4");
            obj.set_url("cmm::cmmCalMM.xfdl");
            obj.set_enableevent("true");
            obj.set_text("");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("staWAVE2","766","10.0","30.0","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("11");
            obj.set_text("~");
            obj.set_cssclass("sta_WF_AC");
            this.divSearch.addChild(obj.name, obj);

            obj = new Div("ctclYM_JTO","796","10.0","80","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("5");
            obj.set_url("cmm::cmmCalMM.xfdl");
            obj.set_enableevent("true");
            obj.set_text("");
            this.divSearch.addChild(obj.name, obj);

            obj = new Div("divData","0","divSearch:10",null,null,"0","0",null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_cssclass("div_DATA_Bg");
            obj.set_text("");
            this.addChild(obj.name, obj);

            obj = new Div("divSplitter","30%","0","5",null,null,"0",null,null,null,null,this.divData.form);
            obj.set_taborder("2");
            obj.set_cursor("ew-resize");
            obj.set_cssclass("div_Splitter");
            this.divData.addChild(obj.name, obj);

            obj = new Div("divDataLeft","0","0",null,null,"divSplitter:5","0",null,null,null,null,this.divData.form);
            obj.set_taborder("0");
            this.divData.addChild(obj.name, obj);

            obj = new Grid("objGrid","0","0",null,null,"0","0",null,null,null,null,this.divData.form.divDataLeft.form);
            obj.set_taborder("0");
            obj.set_scrollbartype("auto");
            obj._setContents("<Formats><Format id=\"default\"/></Formats>");
            this.divData.form.divDataLeft.addChild(obj.name, obj);

            obj = new Grid("objGridExcel","0","323",null,null,"0","0",null,null,null,null,this.divData.form.divDataLeft.form);
            obj.set_taborder("1");
            obj.set_scrollbartype("auto");
            obj.set_visible("false");
            obj.set_binddataset("dsExcelFile");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"40\"/><Column size=\"60\"/><Column size=\"60\"/><Column size=\"60\"/><Column size=\"150\"/><Column size=\"100\"/><Column size=\"100\"/><Column size=\"100\"/><Column size=\"100\"/><Column size=\"80\"/><Column size=\"100\"/><Column size=\"100\"/><Column size=\"100\"/><Column size=\"100\"/><Column size=\"60\"/><Column size=\"100\"/><Column size=\"60\"/><Column size=\"60\"/><Column size=\"100\"/><Column size=\"100\"/><Column size=\"100\"/><Column size=\"100\"/><Column size=\"100\"/><Column size=\"100\"/><Column size=\"100\"/><Column size=\"100\"/><Column size=\"100\"/><Column size=\"100\"/><Column size=\"100\"/><Column size=\"100\"/><Column size=\"100\"/><Column size=\"100\"/><Column size=\"100\"/><Column size=\"100\"/><Column size=\"100\"/><Column size=\"100\"/><Column size=\"100\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/></Columns><Rows><Row size=\"24\" band=\"head\"/><Row size=\"24\" band=\"head\"/><Row size=\"24\"/></Rows><Band id=\"head\"><Cell rowspan=\"2\" text=\"번호\"/><Cell col=\"1\" rowspan=\"2\" text=\"사업자등록번호\"/><Cell col=\"2\" rowspan=\"2\" text=\"사업소일련번호\"/><Cell col=\"3\" rowspan=\"2\" text=\"사업소우편번호\"/><Cell col=\"4\" rowspan=\"2\" text=\"사업소소재지\"/><Cell col=\"5\" rowspan=\"2\" text=\"지방자치단쳬\"/><Cell col=\"6\" rowspan=\"2\" text=\"행정동\"/><Cell col=\"7\" rowspan=\"2\" text=\"지방자치단체코드\"/><Cell col=\"8\" rowspan=\"2\" text=\"행정동코드\"/><Cell col=\"9\" rowspan=\"2\" text=\"귀속년월\"/><Cell col=\"10\" rowspan=\"2\" text=\"급여지급일\"/><Cell col=\"11\" colspan=\"2\" text=\"가산세\"/><Cell col=\"13\" colspan=\"2\" text=\"중소기업 과세표준공제 대상내용\"/><Cell col=\"15\" rowspan=\"2\" text=\"감면사유\"/><Cell col=\"16\" colspan=\"2\" text=\"사업소인원\"/><Cell col=\"18\" colspan=\"8\"/><Cell col=\"26\" colspan=\"11\" text=\"최근 12개월간 월별 급여\"/><Cell col=\"37\" colspan=\"12\" text=\"직전연도 월별 평균 종업원수\"/><Cell row=\"1\" col=\"11\" text=\"가산세구분\"/><Cell row=\"1\" col=\"12\" text=\"부정무신고사유\"/><Cell row=\"1\" col=\"13\" text=\"공제사유\"/><Cell row=\"1\" col=\"14\" text=\"신설당시종업원수\"/><Cell row=\"1\" col=\"16\" text=\"상시고용&#13;&#10;종업원수\"/><Cell row=\"1\" col=\"17\" text=\"수시고용&#13;&#10;종업원수\"/><Cell row=\"1\" col=\"18\" text=\"과세대상(기본급)\"/><Cell row=\"1\" col=\"19\" text=\"과세대상(수당)\"/><Cell row=\"1\" col=\"20\" text=\"과세대상(상여금)\"/><Cell row=\"1\" col=\"21\" text=\"과세대상(기타)\"/><Cell row=\"1\" col=\"22\" text=\"비과세대상(기본급)\"/><Cell row=\"1\" col=\"23\" text=\"비과세대상(수당)\"/><Cell row=\"1\" col=\"24\" text=\"비과세대상(상여금)\"/><Cell row=\"1\" col=\"25\" text=\"비과세대상(기타)\"/><Cell row=\"1\" col=\"26\" text=\"1개월전\"/><Cell row=\"1\" col=\"27\" text=\"2개월전\"/><Cell row=\"1\" col=\"28\" text=\"3개월전\"/><Cell row=\"1\" col=\"29\" text=\"4개월전\"/><Cell row=\"1\" col=\"30\" text=\"5개월전\"/><Cell row=\"1\" col=\"31\" text=\"6개월전\"/><Cell row=\"1\" col=\"32\" text=\"7개월전\"/><Cell row=\"1\" col=\"33\" text=\"8개월전\"/><Cell row=\"1\" col=\"34\" text=\"9개월전\"/><Cell row=\"1\" col=\"35\" text=\"10개월전\"/><Cell row=\"1\" col=\"36\" text=\"11개월전\"/><Cell row=\"1\" col=\"37\" text=\"1월\"/><Cell row=\"1\" col=\"38\" text=\"2월\"/><Cell row=\"1\" col=\"39\" text=\"3월\"/><Cell row=\"1\" col=\"40\" text=\"4월\"/><Cell row=\"1\" col=\"41\" text=\"5월\"/><Cell row=\"1\" col=\"42\" text=\"6월\"/><Cell row=\"1\" col=\"43\" text=\"7월\"/><Cell row=\"1\" col=\"44\" text=\"8월\"/><Cell row=\"1\" col=\"45\" text=\"9월\"/><Cell row=\"1\" col=\"46\" text=\"10월\"/><Cell row=\"1\" col=\"47\" text=\"11월\"/><Cell row=\"1\" col=\"48\" text=\"12월\"/></Band><Band id=\"body\"><Cell text=\"bind:SEQ\"/><Cell col=\"1\" text=\"bind:NO_CORP\" displaytype=\"text\" textAlign=\"center\"/><Cell col=\"2\" text=\"bind:CD_PLACE\" displaytype=\"text\" textAlign=\"center\"/><Cell col=\"3\" text=\"bind:CD_ZIP\" displaytype=\"text\" textAlign=\"center\"/><Cell col=\"4\" text=\"bind:DS_ADDRESS\"/><Cell col=\"5\" text=\"bind:DS_REGION\"/><Cell col=\"6\" text=\"bind:DS_DONG\" displaytype=\"text\" textAlign=\"center\"/><Cell col=\"7\" text=\"bind:CD_REGION\" displaytype=\"text\" textAlign=\"center\"/><Cell col=\"8\" text=\"bind:CD_DONG\" displaytype=\"text\" textAlign=\"center\"/><Cell col=\"9\" text=\"bind:YM_WORK\" displaytype=\"text\" textAlign=\"center\"/><Cell col=\"10\" text=\"bind:DT_PAY\" displaytype=\"text\" textAlign=\"center\"/><Cell col=\"11\" text=\"bind:DS_PENALTY\"/><Cell col=\"12\" text=\"bind:DS_WITHOUT\"/><Cell col=\"13\" text=\"bind:DS_DEDUCT\"/><Cell col=\"14\" text=\"bind:NO_FIRSTEMP\"/><Cell col=\"15\" text=\"bind:DS_REDUCTION\"/><Cell col=\"16\" text=\"bind:NO_EMP\" textAlign=\"right\" maskeditformat=\"#,##0.0\" edittype=\"mask\" displaytype=\"mask\"/><Cell col=\"17\" text=\"bind:NO_DAYEMP\" textAlign=\"right\" maskeditformat=\"#,##0.0\" edittype=\"mask\" displaytype=\"mask\"/><Cell col=\"18\" text=\"bind:AM_TAXPAY\" textAlign=\"right\" displaytype=\"mask\" edittype=\"mask\" maskeditformat=\"#,##0\"/><Cell col=\"19\" text=\"bind:AM_SPAY\" textAlign=\"right\" displaytype=\"mask\" edittype=\"mask\" maskeditformat=\"#,##0\"/><Cell col=\"20\" text=\"bind:AM_BONUS\" textAlign=\"right\" displaytype=\"mask\" edittype=\"mask\" maskeditformat=\"#,##0\"/><Cell col=\"21\" text=\"bind:AM_ETCPAY\" textAlign=\"right\" displaytype=\"mask\" edittype=\"mask\" maskeditformat=\"#,##0\"/><Cell col=\"22\" text=\"bind:AM_TAXFREE\" textAlign=\"right\" displaytype=\"mask\" edittype=\"mask\" maskeditformat=\"#,##0\"/><Cell col=\"23\" text=\"bind:AM_SPAYFREE\" textAlign=\"right\" displaytype=\"mask\" edittype=\"mask\" maskeditformat=\"#,##0\"/><Cell col=\"24\" text=\"bind:AM_BONUSFREE\" textAlign=\"right\" displaytype=\"mask\" edittype=\"mask\" maskeditformat=\"#,##0\"/><Cell col=\"25\" text=\"bind:AM_ETCPAYTREE\" textAlign=\"right\" displaytype=\"mask\" edittype=\"mask\" maskeditformat=\"#,##0\"/><Cell col=\"26\" text=\"bind:AM_01\" maskeditformat=\"#,##0.0\" edittype=\"mask\" displaytype=\"mask\"/><Cell col=\"27\" text=\"bind:AM_02\" maskeditformat=\"#,##0.0\" edittype=\"mask\" displaytype=\"mask\"/><Cell col=\"28\" text=\"bind:AM_03\" maskeditformat=\"#,##0.0\" edittype=\"mask\" displaytype=\"mask\"/><Cell col=\"29\" text=\"bind:AM_04\" maskeditformat=\"#,##0.0\" edittype=\"mask\" displaytype=\"mask\"/><Cell col=\"30\" text=\"bind:AM_05\" maskeditformat=\"#,##0.0\" edittype=\"mask\" displaytype=\"mask\"/><Cell col=\"31\" text=\"bind:AM_06\" maskeditformat=\"#,##0.0\" edittype=\"mask\" displaytype=\"mask\"/><Cell col=\"32\" text=\"bind:AM_07\" maskeditformat=\"#,##0.0\" edittype=\"mask\" displaytype=\"mask\"/><Cell col=\"33\" text=\"bind:AM_08\" maskeditformat=\"#,##0.0\" edittype=\"mask\" displaytype=\"mask\"/><Cell col=\"34\" text=\"bind:AM_09\" maskeditformat=\"#,##0.0\" edittype=\"mask\" displaytype=\"mask\"/><Cell col=\"35\" text=\"bind:AM_10\" maskeditformat=\"#,##0.0\" edittype=\"mask\" displaytype=\"mask\"/><Cell col=\"36\" text=\"bind:AM_11\" maskeditformat=\"#,##0.0\" edittype=\"mask\" displaytype=\"mask\"/><Cell col=\"37\" text=\"bind:NO_01\" maskeditformat=\"#,##0.0\" edittype=\"mask\" displaytype=\"mask\"/><Cell col=\"38\" text=\"bind:NO_02\" maskeditformat=\"#,##0.0\" edittype=\"mask\" displaytype=\"mask\"/><Cell col=\"39\" text=\"bind:NO_03\" maskeditformat=\"#,##0.0\" edittype=\"mask\" displaytype=\"mask\"/><Cell col=\"40\" text=\"bind:NO_04\" maskeditformat=\"#,##0.0\" edittype=\"mask\" displaytype=\"mask\"/><Cell col=\"41\" text=\"bind:NO_05\" maskeditformat=\"#,##0.0\" edittype=\"mask\" displaytype=\"mask\"/><Cell col=\"42\" text=\"bind:NO_06\" maskeditformat=\"#,##0.0\" edittype=\"mask\" displaytype=\"mask\"/><Cell col=\"43\" text=\"bind:NO_07\" maskeditformat=\"#,##0.0\" edittype=\"mask\" displaytype=\"mask\"/><Cell col=\"44\" text=\"bind:NO_08\" maskeditformat=\"#,##0.0\" edittype=\"mask\" displaytype=\"mask\"/><Cell col=\"45\" text=\"bind:NO_09\" maskeditformat=\"#,##0.0\" edittype=\"mask\" displaytype=\"mask\"/><Cell col=\"46\" text=\"bind:NO_10\" maskeditformat=\"#,##0.0\" edittype=\"mask\" displaytype=\"mask\"/><Cell col=\"47\" text=\"bind:NO_11\" maskeditformat=\"#,##0.0\" edittype=\"mask\" displaytype=\"mask\"/><Cell col=\"48\" text=\"bind:NO_12\" maskeditformat=\"#,##0.0\" edittype=\"mask\" displaytype=\"mask\"/></Band></Format></Formats>");
            this.divData.form.divDataLeft.addChild(obj.name, obj);

            obj = new Div("divDataRight","divSplitter:5","0",null,null,"0","0",null,null,null,null,this.divData.form);
            obj.set_taborder("1");
            obj.set_tooltiptype("default");
            obj.set_text("ssss");
            this.divData.addChild(obj.name, obj);

            obj = new Tab("tabdata","0","0",null,null,"0","0",null,null,null,null,this.divData.form.divDataRight.form);
            obj.set_taborder("1");
            obj.set_tabindex("0");
            this.divData.form.divDataRight.addChild(obj.name, obj);

            obj = new Tabpage("tab1",this.divData.form.divDataRight.form.tabdata);
            obj.set_text("종업원분");
            this.divData.form.divDataRight.form.tabdata.addChild(obj.name, obj);

            obj = new Static("staBg21","705","478","275","27",null,null,null,null,null,null,this.divData.form.divDataRight.form.tabdata.tab1.form);
            obj.set_taborder("83");
            obj.set_cssclass("sta_WF_tablebg");
            obj.set_text("");
            this.divData.form.divDataRight.form.tabdata.tab1.addChild(obj.name, obj);

            obj = new Static("sta55","565","530","149","27",null,null,null,null,null,null,this.divData.form.divDataRight.form.tabdata.tab1.form);
            obj.set_taborder("51");
            obj.set_text("20. 신고세액합계");
            obj.set_textAlign("center");
            obj.set_cssclass("sta_WF_tablelabelE");
            this.divData.form.divDataRight.form.tabdata.tab1.addChild(obj.name, obj);

            obj = new Static("sta48","643","387","337","27",null,null,null,null,null,null,this.divData.form.divDataRight.form.tabdata.tab1.form);
            obj.set_taborder("42");
            obj.set_cssclass("sta_WF_tablebg");
            obj.set_text("");
            this.divData.form.divDataRight.form.tabdata.tab1.addChild(obj.name, obj);

            obj = new Static("staBg20","sta55:-2","sta48:116","268","27",null,null,null,null,null,null,this.divData.form.divDataRight.form.tabdata.tab1.form);
            obj.set_taborder("84");
            obj.set_cssclass("sta_WF_tablebg");
            obj.set_text("");
            this.divData.form.divDataRight.form.tabdata.tab1.addChild(obj.name, obj);

            obj = new Static("sta50","565","sta48:64","149","27",null,null,null,null,null,null,this.divData.form.divDataRight.form.tabdata.tab1.form);
            obj.set_taborder("45");
            obj.set_text("18. 산출세액");
            obj.set_textAlign("center");
            obj.set_cssclass("sta_WF_tablelabelE");
            this.divData.form.divDataRight.form.tabdata.tab1.addChild(obj.name, obj);

            obj = new Static("staTITLE5","565","420","294","30",null,null,null,null,null,null,this.divData.form.divDataRight.form.tabdata.tab1.form);
            obj.set_taborder("81");
            obj.set_text("납부할세액");
            obj.set_cssclass("sta_TITLE_Bg");
            obj.set_textAlign("left");
            this.divData.form.divDataRight.form.tabdata.tab1.addChild(obj.name, obj);

            obj = new Static("staBg22","712","sta48:38","268","27",null,null,null,null,null,null,this.divData.form.divDataRight.form.tabdata.tab1.form);
            obj.set_taborder("82");
            obj.set_cssclass("sta_WF_tablebg");
            obj.set_text("");
            this.divData.form.divDataRight.form.tabdata.tab1.addChild(obj.name, obj);

            obj = new Static("staTITLE","5","420","500","30",null,null,null,null,null,null,this.divData.form.divDataRight.form.tabdata.tab1.form);
            obj.set_taborder("43");
            obj.set_text("가산세액");
            obj.set_cssclass("sta_TITLE_Bg");
            obj.set_textAlign("left");
            this.divData.form.divDataRight.form.tabdata.tab1.addChild(obj.name, obj);

            obj = new Static("sta60","5","staTITLE:2","149","27",null,null,null,null,null,null,this.divData.form.divDataRight.form.tabdata.tab1.form);
            obj.set_taborder("76");
            obj.set_text("가산세구분");
            obj.set_textAlign("center");
            obj.set_cssclass("sta_WF_tablelabel");
            this.divData.form.divDataRight.form.tabdata.tab1.addChild(obj.name, obj);

            obj = new Static("staBg23","sta60:-1","452","401","27",null,null,null,null,null,null,this.divData.form.divDataRight.form.tabdata.tab1.form);
            obj.set_taborder("46");
            obj.set_cssclass("sta_WF_tablebg");
            obj.set_text("");
            this.divData.form.divDataRight.form.tabdata.tab1.addChild(obj.name, obj);

            obj = new Static("sta61","5","staTITLE:28","149","27",null,null,null,null,null,null,this.divData.form.divDataRight.form.tabdata.tab1.form);
            obj.set_taborder("77");
            obj.set_text("부정무신고사유");
            obj.set_textAlign("center");
            obj.set_cssclass("sta_WF_tablelabel");
            this.divData.form.divDataRight.form.tabdata.tab1.addChild(obj.name, obj);

            obj = new Static("staBg24","sta61:-1","478","401","27",null,null,null,null,null,null,this.divData.form.divDataRight.form.tabdata.tab1.form);
            obj.set_taborder("47");
            obj.set_cssclass("sta_WF_tablebg");
            obj.set_text("");
            this.divData.form.divDataRight.form.tabdata.tab1.addChild(obj.name, obj);

            obj = new Static("staBg25","712","sta48:90","268","27",null,null,null,null,null,null,this.divData.form.divDataRight.form.tabdata.tab1.form);
            obj.set_taborder("80");
            obj.set_cssclass("sta_WF_tablebg");
            obj.set_text("");
            this.divData.form.divDataRight.form.tabdata.tab1.addChild(obj.name, obj);

            obj = new Static("sta52","5","staTITLE:54","149","27",null,null,null,null,null,null,this.divData.form.divDataRight.form.tabdata.tab1.form);
            obj.set_taborder("48");
            obj.set_text("무(과소)신고 가산세");
            obj.set_textAlign("center");
            obj.set_cssclass("sta_WF_tablelabel");
            this.divData.form.divDataRight.form.tabdata.tab1.addChild(obj.name, obj);

            obj = new Static("staBg26","sta52:-1","504","401","27",null,null,null,null,null,null,this.divData.form.divDataRight.form.tabdata.tab1.form);
            obj.set_taborder("53");
            obj.set_cssclass("sta_WF_tablebg");
            obj.set_text("");
            this.divData.form.divDataRight.form.tabdata.tab1.addChild(obj.name, obj);

            obj = new Static("sta43","5","245","500","30",null,null,null,null,null,null,this.divData.form.divDataRight.form.tabdata.tab1.form);
            obj.set_taborder("37");
            obj.set_text("지방세법 제85조의 5에 따른 과세표준 공제액");
            obj.set_cssclass("sta_TITLE_Bg");
            obj.set_textAlign("left");
            this.divData.form.divDataRight.form.tabdata.tab1.addChild(obj.name, obj);

            obj = new Static("staBg27","153","sta43:53","827","27",null,null,null,null,null,null,this.divData.form.divDataRight.form.tabdata.tab1.form);
            obj.set_taborder("35");
            obj.set_cssclass("sta_WF_tablebg");
            obj.set_text("");
            this.divData.form.divDataRight.form.tabdata.tab1.addChild(obj.name, obj);

            obj = new Static("staBg28","153","sta43:27","827","27",null,null,null,null,null,null,this.divData.form.divDataRight.form.tabdata.tab1.form);
            obj.set_taborder("33");
            obj.set_cssclass("sta_WF_tablebg");
            obj.set_text("");
            obj.getSetter("onitemchanged").set("divData_divDataRight_tabdata_tab1_staBg28_onitemchanged");
            this.divData.form.divDataRight.form.tabdata.tab1.addChild(obj.name, obj);

            obj = new Static("staBg0","114","35","866","27",null,null,null,null,null,null,this.divData.form.divDataRight.form.tabdata.tab1.form);
            obj.set_taborder("13");
            obj.set_cssclass("sta_WF_tablebg");
            obj.set_text("");
            this.divData.form.divDataRight.form.tabdata.tab1.addChild(obj.name, obj);

            obj = new Static("staBg2","114","staBg0:25","866","27",null,null,null,null,null,null,this.divData.form.divDataRight.form.tabdata.tab1.form);
            obj.set_taborder("1");
            obj.set_cssclass("sta_WF_tablebg");
            obj.set_text("");
            this.divData.form.divDataRight.form.tabdata.tab1.addChild(obj.name, obj);

            obj = new Static("staBg1","114","staBg0:-1","866","27",null,null,null,null,null,null,this.divData.form.divDataRight.form.tabdata.tab1.form);
            obj.set_taborder("2");
            obj.set_cssclass("sta_WF_tablebg");
            obj.set_text("");
            this.divData.form.divDataRight.form.tabdata.tab1.addChild(obj.name, obj);

            obj = new Static("sta12","490","61","110","27",null,null,null,null,null,null,this.divData.form.divDataRight.form.tabdata.tab1.form);
            obj.set_taborder("5");
            obj.set_text("신고기한");
            obj.set_textAlign("center");
            obj.set_cssclass("sta_WF_tablelabelE");
            this.divData.form.divDataRight.form.tabdata.tab1.addChild(obj.name, obj);

            obj = new Calendar("ccfDT_NOTIFY","sta12:5","65","97","20",null,null,null,null,null,null,this.divData.form.divDataRight.form.tabdata.tab1.form);
            obj.set_taborder("0");
            this.divData.form.divDataRight.form.tabdata.tab1.addChild(obj.name, obj);

            obj = new Static("staYmWork","5","35","110","27",null,null,null,null,null,null,this.divData.form.divDataRight.form.tabdata.tab1.form);
            obj.set_taborder("12");
            obj.set_text("귀속년월");
            obj.set_textAlign("center");
            obj.set_cssclass("sta_WF_tablelabelE");
            this.divData.form.divDataRight.form.tabdata.tab1.addChild(obj.name, obj);

            obj = new Static("sta10","5","staYmWork:-1","110","27",null,null,null,null,null,null,this.divData.form.divDataRight.form.tabdata.tab1.form);
            obj.set_taborder("3");
            obj.set_text("사업장");
            obj.set_textAlign("center");
            obj.set_cssclass("sta_WF_tablelabelE");
            this.divData.form.divDataRight.form.tabdata.tab1.addChild(obj.name, obj);

            obj = new Static("sta11","5","staYmWork:25","110","27",null,null,null,null,null,null,this.divData.form.divDataRight.form.tabdata.tab1.form);
            obj.set_taborder("4");
            obj.set_text("사업장소재지");
            obj.set_textAlign("center");
            obj.set_cssclass("sta_WF_tablelabelE");
            this.divData.form.divDataRight.form.tabdata.tab1.addChild(obj.name, obj);

            obj = new Static("sta23","staYmWork:375","35","110","27",null,null,null,null,null,null,this.divData.form.divDataRight.form.tabdata.tab1.form);
            obj.set_taborder("10");
            obj.set_text("마감여부");
            obj.set_textAlign("center");
            obj.set_cssclass("sta_WF_tablelabel");
            this.divData.form.divDataRight.form.tabdata.tab1.addChild(obj.name, obj);

            obj = new Static("sta13","sta12:145","61","110","27",null,null,null,null,null,null,this.divData.form.divDataRight.form.tabdata.tab1.form);
            obj.set_taborder("6");
            obj.set_text("제출일자");
            obj.set_textAlign("center");
            obj.set_cssclass("sta_WF_tablelabelE");
            this.divData.form.divDataRight.form.tabdata.tab1.addChild(obj.name, obj);

            obj = new Static("sta14","sta11:375","sta23:25","110","27",null,null,null,null,null,null,this.divData.form.divDataRight.form.tabdata.tab1.form);
            obj.set_taborder("7");
            obj.set_text("소재지시군구");
            obj.set_textAlign("center");
            obj.set_cssclass("sta_WF_tablelabelE");
            this.divData.form.divDataRight.form.tabdata.tab1.addChild(obj.name, obj);

            obj = new Static("staDT_ENTER","745","sta13:-1","110","27",null,null,null,null,null,null,this.divData.form.divDataRight.form.tabdata.tab1.form);
            obj.set_taborder("8");
            obj.set_text("행정동");
            obj.set_textAlign("center");
            obj.set_cssclass("sta_WF_tablelabelE");
            this.divData.form.divDataRight.form.tabdata.tab1.addChild(obj.name, obj);

            obj = new Calendar("ccfDT_DELIVERY","sta13:5","64","97","20",null,null,null,null,null,null,this.divData.form.divDataRight.form.tabdata.tab1.form);
            obj.set_taborder("9");
            obj.set_dateformat("yyyy-MM-dd");
            this.divData.form.divDataRight.form.tabdata.tab1.addChild(obj.name, obj);

            obj = new Radio("rdoYN_CLOSE","sta23:5","39","100","20",null,null,null,null,null,null,this.divData.form.divDataRight.form.tabdata.tab1.form);
            obj.set_taborder("11");
            obj.set_datacolumn("datacolumn");
            obj.set_codecolumn("codecolumn");
            obj.set_fittocontents("width");
            obj.set_direction("vertical");
            obj.set_enable("false");
            obj.set_tabstop("false");
            var divData_form_divDataRight_form_tabdata_tab1_form_rdoYN_CLOSE_innerdataset = new nexacro.NormalDataset("divData_form_divDataRight_form_tabdata_tab1_form_rdoYN_CLOSE_innerdataset", obj);
            divData_form_divDataRight_form_tabdata_tab1_form_rdoYN_CLOSE_innerdataset._setContents("<ColumnInfo><Column id=\"codecolumn\" size=\"256\"/><Column id=\"datacolumn\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"codecolumn\">Y</Col><Col id=\"datacolumn\">여</Col></Row><Row><Col id=\"codecolumn\">N</Col><Col id=\"datacolumn\">부</Col></Row></Rows>");
            obj.set_innerdataset(divData_form_divDataRight_form_tabdata_tab1_form_rdoYN_CLOSE_innerdataset);
            obj.set_text("");
            obj.set_value("");
            obj.set_index("-1");
            this.divData.form.divDataRight.form.tabdata.tab1.addChild(obj.name, obj);

            obj = new Div("ctclYM_WORK","staYmWork:5","38","80","20",null,null,null,null,null,null,this.divData.form.divDataRight.form.tabdata.tab1.form);
            obj.set_taborder("14");
            obj.set_url("cmm::cmmCalMM.xfdl");
            obj.set_enableevent("true");
            obj.set_text("");
            this.divData.form.divDataRight.form.tabdata.tab1.addChild(obj.name, obj);

            obj = new Static("sta31","staYmWork:130","35","110","27",null,null,null,null,null,null,this.divData.form.divDataRight.form.tabdata.tab1.form);
            obj.set_taborder("16");
            obj.set_text("지급년월");
            obj.set_textAlign("center");
            obj.set_cssclass("sta_WF_tablelabelE");
            this.divData.form.divDataRight.form.tabdata.tab1.addChild(obj.name, obj);

            obj = new Div("ctclYM_PAYMENT","sta31:5","38","80","20",null,null,null,null,null,null,this.divData.form.divDataRight.form.tabdata.tab1.form);
            obj.set_taborder("15");
            obj.set_url("cmm::cmmCalMM.xfdl");
            obj.set_enableevent("true");
            obj.set_text("");
            this.divData.form.divDataRight.form.tabdata.tab1.addChild(obj.name, obj);

            obj = new Static("sta32","5","sta11:12","150","86",null,null,null,null,null,null,this.divData.form.divDataRight.form.tabdata.tab1.form);
            obj.set_taborder("17");
            obj.set_text("신고납부\r\n(급여지급일)");
            obj.set_textAlign("center");
            obj.set_cssclass("sta_WF_tablelabel");
            this.divData.form.divDataRight.form.tabdata.tab1.addChild(obj.name, obj);

            obj = new Static("sta33","5","7","500","30",null,null,null,null,null,null,this.divData.form.divDataRight.form.tabdata.tab1.form);
            obj.set_taborder("18");
            obj.set_text("주민세 종업원분");
            obj.set_cssclass("sta_TITLE_Bg");
            obj.set_textAlign("left");
            this.divData.form.divDataRight.form.tabdata.tab1.addChild(obj.name, obj);

            obj = new Static("sta34","sta32:-1","126","190","86",null,null,null,null,null,null,this.divData.form.divDataRight.form.tabdata.tab1.form);
            obj.set_taborder("19");
            obj.set_text("9. 종업원수\r\n(소수점 이하 1자리까지 기재)");
            obj.set_textAlign("center");
            obj.set_cssclass("sta_WF_tablelabel");
            this.divData.form.divDataRight.form.tabdata.tab1.addChild(obj.name, obj);

            obj = new Static("sta35","sta34:-1","126","190","86",null,null,null,null,null,null,this.divData.form.divDataRight.form.tabdata.tab1.form);
            obj.set_taborder("20");
            obj.set_text("10. 최근1년간 종업원\r\n급여총액의 월평균금액\r\n(소수점 이하 1자리까지 기재)");
            obj.set_textAlign("center");
            obj.set_cssclass("sta_WF_tablelabel");
            this.divData.form.divDataRight.form.tabdata.tab1.addChild(obj.name, obj);

            obj = new Static("sta37","532","126","448","27",null,null,null,null,null,null,this.divData.form.divDataRight.form.tabdata.tab1.form);
            obj.set_taborder("22");
            obj.set_text("과세표준");
            obj.set_textAlign("center");
            obj.set_cssclass("sta_WF_tablelabel");
            this.divData.form.divDataRight.form.tabdata.tab1.addChild(obj.name, obj);

            obj = new Static("sta36","sta35:-1","sta37:-1","150","60",null,null,null,null,null,null,this.divData.form.divDataRight.form.tabdata.tab1.form);
            obj.set_taborder("21");
            obj.set_text("11. 급여총액");
            obj.set_textAlign("center");
            obj.set_cssclass("sta_WF_tablelabel");
            this.divData.form.divDataRight.form.tabdata.tab1.addChild(obj.name, obj);

            obj = new Static("sta38","sta36:-1","sta35:-60","150","60",null,null,null,null,null,null,this.divData.form.divDataRight.form.tabdata.tab1.form);
            obj.set_taborder("23");
            obj.set_text("12. 과세제외급여액");
            obj.set_textAlign("center");
            obj.set_cssclass("sta_WF_tablelabel");
            this.divData.form.divDataRight.form.tabdata.tab1.addChild(obj.name, obj);

            obj = new Static("sta39","sta38:-1","sta37:-1","150","60",null,null,null,null,null,null,this.divData.form.divDataRight.form.tabdata.tab1.form);
            obj.set_taborder("24");
            obj.set_text("13. 과세급여총액");
            obj.set_textAlign("center");
            obj.set_cssclass("sta_WF_tablelabel");
            this.divData.form.divDataRight.form.tabdata.tab1.addChild(obj.name, obj);

            obj = new Static("staBg10","5","sta32:-1","150","27",null,null,null,null,null,null,this.divData.form.divDataRight.form.tabdata.tab1.form);
            obj.set_taborder("25");
            obj.set_cssclass("sta_WF_tablebg");
            obj.set_text("");
            this.divData.form.divDataRight.form.tabdata.tab1.addChild(obj.name, obj);

            obj = new Static("staBgS11","154","sta34:-1","190","27",null,null,null,null,null,null,this.divData.form.divDataRight.form.tabdata.tab1.form);
            obj.set_taborder("26");
            obj.set_cssclass("sta_WF_tablebg");
            obj.set_text("");
            this.divData.form.divDataRight.form.tabdata.tab1.addChild(obj.name, obj);

            obj = new Static("staBg12","343","sta35:-1","190","27",null,null,null,null,null,null,this.divData.form.divDataRight.form.tabdata.tab1.form);
            obj.set_taborder("27");
            obj.set_cssclass("sta_WF_tablebg");
            obj.set_text("");
            this.divData.form.divDataRight.form.tabdata.tab1.addChild(obj.name, obj);

            obj = new Static("staBg14","681","sta38:-1","150","27",null,null,null,null,null,null,this.divData.form.divDataRight.form.tabdata.tab1.form);
            obj.set_taborder("28");
            obj.set_cssclass("sta_WF_tablebg");
            obj.set_text("");
            this.divData.form.divDataRight.form.tabdata.tab1.addChild(obj.name, obj);

            obj = new Static("staBg13","532","sta36:-1","150","27",null,null,null,null,null,null,this.divData.form.divDataRight.form.tabdata.tab1.form);
            obj.set_taborder("29");
            obj.set_cssclass("sta_WF_tablebg");
            obj.set_text("");
            this.divData.form.divDataRight.form.tabdata.tab1.addChild(obj.name, obj);

            obj = new Static("staBg15","830","sta39:-1","150","27",null,null,null,null,null,null,this.divData.form.divDataRight.form.tabdata.tab1.form);
            obj.set_taborder("30");
            obj.set_cssclass("sta_WF_tablebg");
            obj.set_text("");
            this.divData.form.divDataRight.form.tabdata.tab1.addChild(obj.name, obj);

            obj = new CheckBox("chkYN_DEDUCT","5","sta43:-1","487","26",null,null,null,null,null,null,this.divData.form.divDataRight.form.tabdata.tab1.form);
            obj.set_taborder("31");
            obj.set_text("중소기업 고용지원 공제 해당여부(지방세법 제84조의5에 해당하는 경우 체크합니다.)");
            obj.set_falsevalue("N");
            obj.set_truevalue("Y");
            obj.set_value("N");
            this.divData.form.divDataRight.form.tabdata.tab1.addChild(obj.name, obj);

            obj = new Static("sta40","5","sta43:27","149","27",null,null,null,null,null,null,this.divData.form.divDataRight.form.tabdata.tab1.form);
            obj.set_taborder("32");
            obj.set_text("공제사유");
            obj.set_textAlign("center");
            obj.set_cssclass("sta_WF_tablelabel");
            this.divData.form.divDataRight.form.tabdata.tab1.addChild(obj.name, obj);

            obj = new Static("sta41","5","sta43:53","149","27",null,null,null,null,null,null,this.divData.form.divDataRight.form.tabdata.tab1.form);
            obj.set_taborder("34");
            obj.set_text("신설당시 종업원수");
            obj.set_textAlign("center");
            obj.set_cssclass("sta_WF_tablelabel");
            this.divData.form.divDataRight.form.tabdata.tab1.addChild(obj.name, obj);

            obj = new Static("sta42","5","sta43:79","320","34",null,null,null,null,null,null,this.divData.form.divDataRight.form.tabdata.tab1.form);
            obj.set_taborder("36");
            obj.set_text("14. 직전년도 월평균 종업원수 \r\n(소수점 이하 1자리까지 기재)");
            obj.set_textAlign("center");
            obj.set_cssclass("sta_WF_tablelabel");
            this.divData.form.divDataRight.form.tabdata.tab1.addChild(obj.name, obj);

            obj = new Static("sta44","sta43:-181","354","320","34",null,null,null,null,null,null,this.divData.form.divDataRight.form.tabdata.tab1.form);
            obj.set_taborder("38");
            obj.set_text("15. 신고월의 월 적용급여액(13/9)");
            obj.set_textAlign("center");
            obj.set_cssclass("sta_WF_tablelabel");
            this.divData.form.divDataRight.form.tabdata.tab1.addChild(obj.name, obj);

            obj = new Static("sta45","sta43:138","354","337","34",null,null,null,null,null,null,this.divData.form.divDataRight.form.tabdata.tab1.form);
            obj.set_taborder("39");
            obj.set_text("16. 과세표준 공제액\r\n(15 * (9-14))");
            obj.set_textAlign("center");
            obj.set_cssclass("sta_WF_tablelabel");
            this.divData.form.divDataRight.form.tabdata.tab1.addChild(obj.name, obj);

            obj = new Static("sta46","5","sta42:-1","320","27",null,null,null,null,null,null,this.divData.form.divDataRight.form.tabdata.tab1.form);
            obj.set_taborder("40");
            obj.set_cssclass("sta_WF_tablebg");
            obj.set_text("");
            this.divData.form.divDataRight.form.tabdata.tab1.addChild(obj.name, obj);

            obj = new Static("sta47","sta46:-1","sta44:-1","320","27",null,null,null,null,null,null,this.divData.form.divDataRight.form.tabdata.tab1.form);
            obj.set_taborder("41");
            obj.set_cssclass("sta_WF_tablebg");
            obj.set_text("");
            this.divData.form.divDataRight.form.tabdata.tab1.addChild(obj.name, obj);

            obj = new Static("sta53","5","staTITLE:80","149","27",null,null,null,null,null,null,this.divData.form.divDataRight.form.tabdata.tab1.form);
            obj.set_taborder("49");
            obj.set_text("납부지연가산세");
            obj.set_textAlign("center");
            obj.set_cssclass("sta_WF_tablelabel");
            this.divData.form.divDataRight.form.tabdata.tab1.addChild(obj.name, obj);

            obj = new Static("sta56","sta53:-1","staTITLE:80","401","27",null,null,null,null,null,null,this.divData.form.divDataRight.form.tabdata.tab1.form);
            obj.set_taborder("52");
            obj.set_cssclass("sta_WF_tablebg");
            obj.set_text("");
            this.divData.form.divDataRight.form.tabdata.tab1.addChild(obj.name, obj);

            obj = new Edit("edtDS_ADDRESS","sta11:5","90","361","20",null,null,null,null,null,null,this.divData.form.divDataRight.form.tabdata.tab1.form);
            obj.set_taborder("54");
            obj.set_readonly("true");
            obj.set_tabstop("false");
            this.divData.form.divDataRight.form.tabdata.tab1.addChild(obj.name, obj);

            obj = new Edit("edtCD_PLACE","sta10:5","66","40","20",null,null,null,null,null,null,this.divData.form.divDataRight.form.tabdata.tab1.form);
            obj.set_taborder("56");
            obj.set_readonly("true");
            obj.set_tabstop("false");
            this.divData.form.divDataRight.form.tabdata.tab1.addChild(obj.name, obj);

            obj = new Edit("edtDS_PLACE","edtCD_PLACE:5","66","326","20",null,null,null,null,null,null,this.divData.form.divDataRight.form.tabdata.tab1.form);
            obj.set_taborder("55");
            obj.set_readonly("true");
            obj.set_tabstop("false");
            this.divData.form.divDataRight.form.tabdata.tab1.addChild(obj.name, obj);

            obj = new MaskEdit("mskNO_FIRSTEMP","sta40:5","332","80","20",null,null,null,null,null,null,this.divData.form.divDataRight.form.tabdata.tab1.form);
            obj.set_taborder("57");
            obj.set_format("###,###,###,###");
            obj.set_limitbymask("both");
            this.divData.form.divDataRight.form.tabdata.tab1.addChild(obj.name, obj);

            obj = new Calendar("ccfDT_PAY","31","sta32:2","97","20",null,null,null,null,null,null,this.divData.form.divDataRight.form.tabdata.tab1.form);
            obj.set_taborder("65");
            this.divData.form.divDataRight.form.tabdata.tab1.addChild(obj.name, obj);

            obj = new MaskEdit("mskNO_EMP","ccfDT_PAY:71","214","89","20",null,null,null,null,null,null,this.divData.form.divDataRight.form.tabdata.tab1.form);
            obj.set_taborder("58");
            obj.set_format("###,###,###,###.#");
            obj.set_limitbymask("both");
            obj.set_enable("false");
            this.divData.form.divDataRight.form.tabdata.tab1.addChild(obj.name, obj);

            obj = new Edit("edtDS_DONG","staDT_ENTER:5","90","106","20",null,null,null,null,null,null,this.divData.form.divDataRight.form.tabdata.tab1.form);
            obj.set_taborder("59");
            obj.set_readonly("true");
            obj.set_tabstop("false");
            this.divData.form.divDataRight.form.tabdata.tab1.addChild(obj.name, obj);

            obj = new Edit("edtDS_REGION","sta14:5","90","132","20",null,null,null,null,null,null,this.divData.form.divDataRight.form.tabdata.tab1.form);
            obj.set_taborder("60");
            obj.set_readonly("true");
            obj.set_tabstop("false");
            this.divData.form.divDataRight.form.tabdata.tab1.addChild(obj.name, obj);

            obj = new MaskEdit("mskAM_PAYAVG","mskNO_EMP:73","sta35:3","157","20",null,null,null,null,null,null,this.divData.form.divDataRight.form.tabdata.tab1.form);
            obj.set_taborder("61");
            obj.set_format("###,###,###,###.#");
            obj.set_limitbymask("both");
            obj.set_enable("false");
            this.divData.form.divDataRight.form.tabdata.tab1.addChild(obj.name, obj);

            obj = new MaskEdit("mskAM_PAYSUM","mskAM_PAYAVG:20","sta36:3","137","20",null,null,null,null,null,null,this.divData.form.divDataRight.form.tabdata.tab1.form);
            obj.set_taborder("62");
            obj.set_format("###,###,###,###");
            obj.set_limitbymask("both");
            obj.set_enable("false");
            this.divData.form.divDataRight.form.tabdata.tab1.addChild(obj.name, obj);

            obj = new MaskEdit("mskAM_TAXFREE","mskAM_PAYSUM:13","sta38:3","137","20",null,null,null,null,null,null,this.divData.form.divDataRight.form.tabdata.tab1.form);
            obj.set_taborder("63");
            obj.set_format("###,###,###,###");
            obj.set_limitbymask("both");
            obj.set_enable("false");
            this.divData.form.divDataRight.form.tabdata.tab1.addChild(obj.name, obj);

            obj = new MaskEdit("mskAM_TAXPAY","mskAM_TAXFREE:12","sta39:3","137","20",null,null,null,null,null,null,this.divData.form.divDataRight.form.tabdata.tab1.form);
            obj.set_taborder("64");
            obj.set_format("###,###,###,###");
            obj.set_limitbymask("both");
            obj.set_enable("false");
            this.divData.form.divDataRight.form.tabdata.tab1.addChild(obj.name, obj);

            obj = new MaskEdit("mskNO_EMP_PRE","109","sta42:2","90","20",null,null,null,null,null,null,this.divData.form.divDataRight.form.tabdata.tab1.form);
            obj.set_taborder("66");
            obj.set_format("###,###,###,###.#");
            obj.set_limitbymask("both");
            this.divData.form.divDataRight.form.tabdata.tab1.addChild(obj.name, obj);

            obj = new MaskEdit("mskAM_MONTHPAY","mskNO_EMP_PRE:216","sta44:2","154","20",null,null,null,null,null,null,this.divData.form.divDataRight.form.tabdata.tab1.form);
            obj.set_taborder("67");
            obj.set_format("###,###,###,###");
            obj.set_limitbymask("both");
            this.divData.form.divDataRight.form.tabdata.tab1.addChild(obj.name, obj);

            obj = new MaskEdit("mskAM_TAXBASE_DEDUCT","mskAM_MONTHPAY:170","sta45:2","160","20",null,null,null,null,null,null,this.divData.form.divDataRight.form.tabdata.tab1.form);
            obj.set_taborder("68");
            obj.set_format("###,###,###,###");
            obj.set_limitbymask("both");
            this.divData.form.divDataRight.form.tabdata.tab1.addChild(obj.name, obj);

            obj = new MaskEdit("mskAM_TAXBASE","718","455","130","20",null,null,null,null,null,null,this.divData.form.divDataRight.form.tabdata.tab1.form);
            obj.set_taborder("69");
            obj.set_format("###,###,###,###");
            obj.set_limitbymask("both");
            this.divData.form.divDataRight.form.tabdata.tab1.addChild(obj.name, obj);

            obj = new MaskEdit("mskAM_TAXAMOUNT","718","481","130","20",null,null,null,null,null,null,this.divData.form.divDataRight.form.tabdata.tab1.form);
            obj.set_taborder("70");
            obj.set_format("###,###,###,###");
            obj.set_limitbymask("both");
            this.divData.form.divDataRight.form.tabdata.tab1.addChild(obj.name, obj);

            obj = new MaskEdit("mskAM_PENALTY_DEFAULT","sta52:5","507","130","20",null,null,null,null,null,null,this.divData.form.divDataRight.form.tabdata.tab1.form);
            obj.set_taborder("71");
            obj.set_format("###,###,###,###");
            obj.set_limitbymask("both");
            this.divData.form.divDataRight.form.tabdata.tab1.addChild(obj.name, obj);

            obj = new MaskEdit("mskAM_PENALTY_DATE","sta53:5","533","130","20",null,null,null,null,null,null,this.divData.form.divDataRight.form.tabdata.tab1.form);
            obj.set_taborder("72");
            obj.set_format("###,###,###,###");
            obj.set_limitbymask("both");
            this.divData.form.divDataRight.form.tabdata.tab1.addChild(obj.name, obj);

            obj = new MaskEdit("mskAM_PENALTY","719","507","130","20",null,null,null,null,null,null,this.divData.form.divDataRight.form.tabdata.tab1.form);
            obj.set_taborder("73");
            obj.set_format("###,###,###,###");
            obj.set_limitbymask("both");
            obj.set_enable("false");
            this.divData.form.divDataRight.form.tabdata.tab1.addChild(obj.name, obj);

            obj = new MaskEdit("mskAM_EMPTAX","718","534","130","20",null,null,null,null,null,null,this.divData.form.divDataRight.form.tabdata.tab1.form);
            obj.set_taborder("74");
            obj.set_format("###,###,###,###");
            obj.set_limitbymask("both");
            this.divData.form.divDataRight.form.tabdata.tab1.addChild(obj.name, obj);

            obj = new Combo("cboDS_DEDUCT","sta43:-346","306","690","20",null,null,null,null,null,null,this.divData.form.divDataRight.form.tabdata.tab1.form);
            obj.set_taborder("75");
            obj.set_innerdataset("dsReduction");
            obj.set_codecolumn("CD_CODE");
            obj.set_datacolumn("DS_CODE");
            obj.set_text("해당없음");
            obj.set_value("0");
            obj.set_index("0");
            this.divData.form.divDataRight.form.tabdata.tab1.addChild(obj.name, obj);

            obj = new Combo("cboCD_PENALTY","sta60:5","455","150","20",null,null,null,null,null,null,this.divData.form.divDataRight.form.tabdata.tab1.form);
            obj.set_taborder("78");
            obj.set_innerdataset("dsPenalty");
            obj.set_codecolumn("CD_CODE");
            obj.set_datacolumn("DS_CODE");
            obj.set_text("해당없음");
            obj.set_value("0");
            obj.set_index("0");
            this.divData.form.divDataRight.form.tabdata.tab1.addChild(obj.name, obj);

            obj = new Combo("cboDS_WITHOUT","sta61:5","482","390","20",null,null,null,null,null,null,this.divData.form.divDataRight.form.tabdata.tab1.form);
            obj.set_taborder("79");
            obj.set_innerdataset("dsWithout");
            obj.set_codecolumn("CD_CODE");
            obj.set_datacolumn("DS_CODE");
            obj.set_text("해당없음");
            obj.set_value("0");
            obj.set_index("0");
            this.divData.form.divDataRight.form.tabdata.tab1.addChild(obj.name, obj);

            obj = new Static("sta49","565","452","149","27",null,null,null,null,null,null,this.divData.form.divDataRight.form.tabdata.tab1.form);
            obj.set_taborder("44");
            obj.set_text("17. 과세표준");
            obj.set_textAlign("center");
            obj.set_cssclass("sta_WF_tablelabelE");
            this.divData.form.divDataRight.form.tabdata.tab1.addChild(obj.name, obj);

            obj = new Static("sta54","565","sta50:-1","149","27",null,null,null,null,null,null,this.divData.form.divDataRight.form.tabdata.tab1.form);
            obj.set_taborder("50");
            obj.set_text("19. 가산세합계");
            obj.set_textAlign("center");
            obj.set_cssclass("sta_WF_tablelabel");
            this.divData.form.divDataRight.form.tabdata.tab1.addChild(obj.name, obj);

            obj = new Static("sta00","mskNO_EMP:5","215","40","20",null,null,null,null,null,null,this.divData.form.divDataRight.form.tabdata.tab1.form);
            obj.set_taborder("85");
            obj.set_text("명");
            this.divData.form.divDataRight.form.tabdata.tab1.addChild(obj.name, obj);

            obj = new Static("sta00_00","mskNO_FIRSTEMP:5","332","40","20",null,null,null,null,null,null,this.divData.form.divDataRight.form.tabdata.tab1.form);
            obj.set_taborder("86");
            obj.set_text("명");
            this.divData.form.divDataRight.form.tabdata.tab1.addChild(obj.name, obj);

            obj = new Static("sta00_00_00","mskNO_EMP_PRE:5","390","40","20",null,null,null,null,null,null,this.divData.form.divDataRight.form.tabdata.tab1.form);
            obj.set_taborder("87");
            obj.set_text("명");
            this.divData.form.divDataRight.form.tabdata.tab1.addChild(obj.name, obj);

            obj = new MaskEdit("mskDD_PENALTY","mskAM_PENALTY_DATE:3","533","52","20",null,null,null,null,null,null,this.divData.form.divDataRight.form.tabdata.tab1.form);
            obj.set_taborder("88");
            obj.set_format("#,###");
            obj.set_limitbymask("both");
            this.divData.form.divDataRight.form.tabdata.tab1.addChild(obj.name, obj);

            obj = new Tabpage("tab2",this.divData.form.divDataRight.form.tabdata);
            obj.set_text("급여총괄표");
            this.divData.form.divDataRight.form.tabdata.addChild(obj.name, obj);

            obj = new Grid("objGrid2","0","0",null,null,"0","0",null,null,null,null,this.divData.form.divDataRight.form.tabdata.tab2.form);
            obj.set_taborder("0");
            obj._setContents("");
            this.divData.form.divDataRight.form.tabdata.tab2.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this
            obj = new Layout("default","",this._adjust_width,this._adjust_height,this,function(p){});
            this.addLayout(obj.name, obj);
            
            // BindItem Information
            obj = new BindItem("item18","divSearch.form.ccfCD_CORP.form.CDTextBox","value","dsSearch","CD_CORP");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item37","divSearch.form.ccfCD_CORP.form.DSTextBox","value","dsSearch","DS_CORP");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item17","divSearch.form.ccfCD_PLACE.form.CDTextBox","value","dsSearch","CD_PLACE");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item19","divSearch.form.ccfCD_PLACE.form.DSTextBox","value","dsSearch","DS_PLACE");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item38","divSearch.form.ctclYM_FROM.form.TextBox","value","dsSearch","YM_FROM");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item41","divSearch.form.ctclYM_TO.form.TextBox","value","dsSearch","YM_TO");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item42","divSearch.form.ctclYM_JFROM.form.TextBox","value","dsSearch","YM_JFROM");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item43","divSearch.form.ctclYM_JTO.form.TextBox","value","dsSearch","YM_JTO");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item0","divData.form.divDataRight.form.tabdata.tab1.form.ccfDT_NOTIFY","value","dsList","DT_NOTIFY");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item4","divData.form.divDataRight.form.tabdata.tab1.form.ccfDT_DELIVERY","value","dsList","DT_DELIVERY");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item5","divData.form.divDataRight.form.tabdata.tab1.form.rdoYN_CLOSE","value","dsList","YN_CLOSE");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item3","divData.form.divDataRight.form.tabdata.tab1.form.ctclYM_WORK.form.TextBox","value","dsList","YM_WORK");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item6","divData.form.divDataRight.form.tabdata.tab1.form.ctclYM_PAYMENT.form.TextBox","value","dsList","YM_PAYMENT");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item7","divData.form.divDataRight.form.tabdata.tab1.form.edtDS_ADDRESS","value","dsList","DS_ADDRESS");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item1","divData.form.divDataRight.form.tabdata.tab1.form.edtDS_PLACE","value","dsList","DS_PLACE");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item2","divData.form.divDataRight.form.tabdata.tab1.form.edtCD_PLACE","value","dsList","CD_PLACE");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item8","divData.form.divDataRight.form.tabdata.tab1.form.mskNO_FIRSTEMP","value","dsList","NO_FIRSTEMP");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item9","divData.form.divDataRight.form.tabdata.tab1.form.mskNO_EMP","value","dsList","NO_EMP");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item10","divData.form.divDataRight.form.tabdata.tab1.form.edtDS_DONG","value","dsList","DS_DONG");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item11","divData.form.divDataRight.form.tabdata.tab1.form.edtDS_REGION","value","dsList","DS_REGION");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item12","divData.form.divDataRight.form.tabdata.tab1.form.mskAM_PAYAVG","value","dsList","AM_PAYAVG");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item13","divData.form.divDataRight.form.tabdata.tab1.form.mskAM_PAYSUM","value","dsList","AM_PAYSUM");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item14","divData.form.divDataRight.form.tabdata.tab1.form.mskAM_TAXFREE","value","dsList","AM_TAXFREE");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item15","divData.form.divDataRight.form.tabdata.tab1.form.mskAM_TAXPAY","value","dsList","AM_TAXPAY");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item16","divData.form.divDataRight.form.tabdata.tab1.form.ccfDT_PAY","value","dsList","DT_PAY");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item20","divData.form.divDataRight.form.tabdata.tab1.form.mskNO_EMP_PRE","value","dsList","NO_EMP_PRE");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item21","divData.form.divDataRight.form.tabdata.tab1.form.mskAM_MONTHPAY","value","dsList","AM_MONTHPAY");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item22","divData.form.divDataRight.form.tabdata.tab1.form.mskAM_TAXBASE_DEDUCT","value","dsList","AM_TAXBASE_DEDUCT");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item23","divData.form.divDataRight.form.tabdata.tab1.form.mskAM_TAXBASE","value","dsList","AM_TAXBASE");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item24","divData.form.divDataRight.form.tabdata.tab1.form.mskAM_TAXAMOUNT","value","dsList","AM_TAXAMOUNT");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item25","divData.form.divDataRight.form.tabdata.tab1.form.mskAM_PENALTY_DEFAULT","value","dsList","AM_PENALTY_DEFAULT");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item26","divData.form.divDataRight.form.tabdata.tab1.form.mskAM_EMPTAX","value","dsList","AM_EMPTAX");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item27","divData.form.divDataRight.form.tabdata.tab1.form.mskAM_PENALTY","value","dsList","AM_PENALTY");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item28","divData.form.divDataRight.form.tabdata.tab1.form.mskAM_PENALTY_DATE","value","dsList","AM_PENALTY_DATE");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item29","divData.form.divDataRight.form.tabdata.tab1.form.cboDS_WITHOUT","value","dsList","DS_WITHOUT");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item30","divData.form.divDataRight.form.tabdata.tab1.form.cboCD_PENALTY","value","dsList","CD_PENALTY");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item31","divData.form.divDataRight.form.tabdata.tab1.form.cboDS_DEDUCT","value","dsList","DS_DEDUCT");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item32","divData.form.divDataRight.form.tabdata.tab1.form.chkYN_DEDUCT","value","dsList","YN_DEDUCT");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item33","divData.form.divDataRight.form.tabdata.tab1.form.mskDD_PENALTY","value","dsList","DD_PENALTY");
            this.addChild(obj.name, obj);
            obj.bind();
            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {
            this._addPreloadList("fdl","cmm::cmmCodeFind.xfdl");
            this._addPreloadList("fdl","cmm::cmmCalMM.xfdl");
        };
        
        // User Script
        this.registerScript("DHV_EMPTAX.xfdl", function() {
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

        	//법인코드 세션에 코드로 셋팅
        	this.dsSearch.setColumn(0, "CD_CORP", this.AuthClient.CD_CORP);
        	this.dsSearch.setColumn(0, "DS_CORP", this.AuthClient.DS_CORP);

        	var toYm = this.gfnGetDate().substring(0, 6);
        	//trace(" toYm=>" + toYm);

        	this.dsSearch.setColumn(0, "YM_FROM", toYm);
        	this.dsSearch.setColumn(0, "YM_TO", toYm);
        	this.dsSearch.setColumn(0, "YM_JFROM", toYm);
        	this.dsSearch.setColumn(0, "YM_JTO", toYm);
        };

        /************************************************************************
         * 버튼 설정 : 화면(Tab) 전환시 마다 호출
         * 서브버튼 사용 및 공통버튼 강제 제어시 여기서 처리
         ************************************************************************/
        this.fnSetButton = function() {
        	// Select, Add, Del, Save, Excel, Print
        	// SubSelect, SubAdd, SubDel, SuubSave, SubExcel

        	this.FormBtns.Add.set_enable(true);

        }

        /************************************************************************
         * 확장 버튼 : 화면별 버튼 설정 ID, function 연결 (화면버튼관리)
         ************************************************************************/
        this.fnSetExtendButton = function() {
        	this.btnDataCreate = this.gfnFormButtonAdd("DataCreate", "fnDataCreate"); 	//계획생성 버튼
        	this.btnClose = this.gfnFormButtonAdd("btnClose", "fnTaxClose")//, "마감");
        	this.btnCancle = this.gfnFormButtonAdd("btnCancle", "fnCancle")//, "마감취소");
        	this.btnESingo = this.gfnFormButtonAdd("ESingo", "fnESingo")//, "전자신고");

        };

        /************************************************************************
         * 변수 선언
         ************************************************************************/
        this.fnSetVariable = function() {
        	this.ccfCD_CORP 	= this.divSearch.form.ccfCD_CORP;
        	this.ccfCD_PLACE 	= this.divSearch.form.ccfCD_PLACE;
        	this.ctclYM_FROM	= this.divSearch.form.ctclYM_FROM;
        	this.ctclYM_TO		= this.divSearch.form.ctclYM_TO;
        	this.ctclYM_JFROM	= this.divSearch.form.ctclYM_JFROM;
        	this.ctclYM_JTO		= this.divSearch.form.ctclYM_JTO;

        	this.ctclYM_WORK = this.divData.form.divDataRight.form.tabdata.tab1.form.ctclYM_WORK;
        	this.ctclYM_PAYMENT = this.divData.form.divDataRight.form.tabdata.tab1.form.ctclYM_PAYMENT;
        	this.rdoYN_CLOSE = this.divData.form.divDataRight.form.tabdata.tab1.form.rdoYN_CLOSE;
        	this.edtDS_PLACE = this.divData.form.divDataRight.form.tabdata.tab1.form.edtDS_PLACE;
        	this.edtDS_ADDRESS = this.divData.form.divDataRight.form.tabdata.tab1.form.edtDS_ADDRESS;
        	this.ccfDT_NOTIFY = this.divData.form.divDataRight.form.tabdata.tab1.form.ccfDT_NOTIFY;
        	this.ccfDT_DELIVERY = this.divData.form.divDataRight.form.tabdata.tab1.form.ccfDT_DELIVERY;
        	this.edtDS_DONG = this.divData.form.divDataRight.form.tabdata.tab1.form.edtDS_DONG;
        	this.edtDS_STREET = this.divData.form.divDataRight.form.tabdata.tab1.form.edtDS_STREET;

        	this.ccfDT_PAY = this.divData.form.divDataRight.form.tabdata.tab1.form.ccfDT_PAY;
        	this.mskNO_EMP = this.divData.form.divDataRight.form.tabdata.tab1.form.mskNO_EMP;
        	this.mskAM_PAYAVG = this.divData.form.divDataRight.form.tabdata.tab1.form.mskAM_PAYAVG;
        	this.mskAM_PAYSUM = this.divData.form.divDataRight.form.tabdata.tab1.form.mskAM_PAYSUM;
        	this.mskAM_TAXFREE = this.divData.form.divDataRight.form.tabdata.tab1.form.mskAM_TAXFREE;
        	this.mskAM_TAXPAY = this.divData.form.divDataRight.form.tabdata.tab1.form.mskAM_TAXPAY;

        	this.chkYN_DEDUCT = this.divData.form.divDataRight.form.tabdata.tab1.form.chkYN_DEDUCT;
        	this.cboDS_DEDUCT = this.divData.form.divDataRight.form.tabdata.tab1.form.cboDS_DEDUCT;
        	this.mskNO_FIRSTEMP = this.divData.form.divDataRight.form.tabdata.tab1.form.mskNO_FIRSTEMP;
        	this.mskNO_EMP_PRE = this.divData.form.divDataRight.form.tabdata.tab1.form.mskNO_EMP_PRE;
        	this.mskAM_MONTHPAY = this.divData.form.divDataRight.form.tabdata.tab1.form.mskAM_MONTHPAY;
        	this.mskAM_TAXBASE_DEDUCT = this.divData.form.divDataRight.form.tabdata.tab1.form.mskAM_TAXBASE_DEDUCT;

        	this.cboCD_PENALTY = this.divData.form.divDataRight.form.tabdata.tab1.form.cboCD_PENALTY;
        	this.cboDS_WITHOUT = this.divData.form.divDataRight.form.tabdata.tab1.form.cboDS_WITHOUT;
        	this.mskAM_PENALTY_DEFAULT = this.divData.form.divDataRight.form.tabdata.tab1.form.mskAM_PENALTY_DEFAULT;
        	this.mskAM_PENALTY_DATE = this.divData.form.divDataRight.form.tabdata.tab1.form.mskAM_PENALTY_DATE;
        	this.mskDD_PENALTY = this.divData.form.divDataRight.form.tabdata.tab1.form.mskDD_PENALTY;

        	this.mskAM_TAXBASE = this.divData.form.divDataRight.form.tabdata.tab1.form.mskAM_TAXBASE;
        	this.mskAM_TAXAMOUNT = this.divData.form.divDataRight.form.tabdata.tab1.form.mskAM_TAXAMOUNT;
        	this.mskAM_PENALTY = this.divData.form.divDataRight.form.tabdata.tab1.form.mskAM_PENALTY;
        	this.mskAM_EMPTAX = this.divData.form.divDataRight.form.tabdata.tab1.form.mskAM_EMPTAX;

        	this.dxGrid = this.divData.form.divDataLeft.form.objGrid;
        	this.dxGridPay = this.divData.form.divDataRight.form.tabdata.tab2.form.objGrid2;
        	this.dxExcelFile = this.divData.form.divDataLeft.form.objGridExcel;

        	this.tabData = this.divData.form.divDataRight.form.tabdata;

        	this.sFileName = "";

        };

        /************************************************************************
         * 이벤트 설정
         ************************************************************************/
        this.fnSetEvent = function() {
        	this.ccfCD_CORP.CodeFindName = "DHX_CFCORP";
        	this.ccfCD_CORP.BeforeUserDataSetParam = "fnBeforeUserDataSetParam";
        	this.ccfCD_CORP.AfterCDTextChanged = "fnAfterCDTextChanged";

        	// 신고사업장
        	this.ccfCD_PLACE.CodeFindName = "DHX_LOCALTAXPLACE";
        	this.ccfCD_PLACE.BeforeUserDataSetParam = "fnBeforeUserDataSetParam";
        	this.ccfCD_PLACE.AfterCDTextChanged = "fnAfterCDTextChanged";

        	// 그리드 초기화
        	this.gfnGridInit(this.dxGridPay, this.dsListPay, "DH", "DHV_EMPTAX_PAY");
        	this.gfnGridInit(this.dxGrid, this.dsList, "DH", "DHV_EMPTAX");

        	this.dsList.addEventHandler("oncolumnchanged", this.dsList_ColumnChanged, this);
        	this.dxGrid.addEventHandler("onselectchanged", this.fnGrid_RowCellChanged, this);

        	this.dxGridPay.addEventHandler("cancolumnchange", this.dsListSub_CanColumnChange, this);

        	//검색조건 변경 이벤트
        	this.dsSearch.addEventHandler("onvaluechanged", this.dsSearch_Valuechanged, this);

        	this.tabChange = true;
        };

        /************************************************************************
         * 파라미터 설정
         ************************************************************************/
        this.fnSetParameter = function() {

        	this.dsSelect = new Dataset();
        	this.dsSelect.addColumn("CD_CORP", "string");
        	this.dsSelect.addColumn("YM_FROM", "string");
        	this.dsSelect.addColumn("YM_TO", "string");
        	this.dsSelect.addColumn("YM_JFROM", "string");
        	this.dsSelect.addColumn("YM_JTO", "string");
        	this.dsSelect.addColumn("CD_PLACE", "string");

        	this.dsSelectPay = new Dataset();
        	this.dsSelectPay.addColumn("CD_CORP", "string");
        	this.dsSelectPay.addColumn("NO_ID", "string");

        	this.dsUpdate = new Dataset();
        	this.dsUpdate.addColumn("CD_CORP", "string");
        	this.dsUpdate.addColumn("NO_ID", "string");
        	this.dsUpdate.addColumn("CD_PLACE", "string");
        	this.dsUpdate.addColumn("CD_WORK", "string");
        	this.dsUpdate.addColumn("YM_WORK", "string");
        	this.dsUpdate.addColumn("YM_PAYMENT", "string");
        	this.dsUpdate.addColumn("DT_NOTIFY", "string");
        	this.dsUpdate.addColumn("DT_DELIVERY", "string");
        	this.dsUpdate.addColumn("DT_PAY", "string");
        	this.dsUpdate.addColumn("YN_DEDUCT", "string");
        	this.dsUpdate.addColumn("DS_DEDUCT", "string");
        	this.dsUpdate.addColumn("NO_FIRSTEMP", "int");
        	this.dsUpdate.addColumn("DS_REDUCTION", "string");
        	this.dsUpdate.addColumn("NO_EMP", "bigdecimal");
        	this.dsUpdate.addColumn("AM_PAYAVG", "bigdecimal");
        	this.dsUpdate.addColumn("AM_PAYSUM", "bigdecimal");
        	this.dsUpdate.addColumn("AM_TAXFREE", "bigdecimal");
        	this.dsUpdate.addColumn("AM_TAXPAY", "bigdecimal");
        	this.dsUpdate.addColumn("NO_EMP_PRE", "bigdecimal");
        	this.dsUpdate.addColumn("AM_MONTHPAY", "bigdecimal");
        	this.dsUpdate.addColumn("AM_TAXBASE_DEDUCT", "bigdecimal");
        	this.dsUpdate.addColumn("AM_TAXBASE", "bigdecimal");
        	this.dsUpdate.addColumn("AM_TAXAMOUNT", "bigdecimal");
        	this.dsUpdate.addColumn("CD_PENALTY", "string");
        	this.dsUpdate.addColumn("DS_WITHOUT", "string");
        	this.dsUpdate.addColumn("AM_PENALTY_DEFAULT", "bigdecimal");
        	this.dsUpdate.addColumn("AM_PENALTY_DATE", "bigdecimal");
        	this.dsUpdate.addColumn("AM_EMPTAX", "bigdecimal");
        	this.dsUpdate.addColumn("DD_PENALTY", "INT");
        	this.dsUpdate.addColumn("ID_USER", "string");

        	this.dsDelete = new Dataset();
        	this.dsDelete.addColumn("CD_CORP", "string");
        	this.dsDelete.addColumn("NO_ID", "string");
        	this.dsDelete.addColumn("ID_USER", "string");


        	this.dsSave = new Dataset();
        	this.dsSave.addColumn("CD_CORP", "string");
        	this.dsSave.addColumn("TY_WORK", "string");
        	this.dsSave.addColumn("NO_ID", "string");
        	this.dsSave.addColumn("YM_SALARY", "string");
        	this.dsSave.addColumn("NO_SALARYTAX", "bigdecimal");
        	this.dsSave.addColumn("NO_EMPTAX", "bigdecimal");
        	this.dsSave.addColumn("AM_TAXPAY", "bigdecimal");
        	this.dsSave.addColumn("AM_TAXPAY01", "bigdecimal");
        	this.dsSave.addColumn("AM_TAXPAY02", "bigdecimal");
        	this.dsSave.addColumn("AM_TAXPAY03", "bigdecimal");
        	this.dsSave.addColumn("AM_TAXPAY04", "bigdecimal");
        	this.dsSave.addColumn("AM_NTAXPAY", "bigdecimal");
        	this.dsSave.addColumn("AM_NTAXPAY01", "bigdecimal");
        	this.dsSave.addColumn("AM_NTAXPAY02", "bigdecimal");
        	this.dsSave.addColumn("AM_NTAXPAY03", "bigdecimal");
        	this.dsSave.addColumn("AM_NTAXPAY04", "bigdecimal");
        	this.dsSave.addColumn("AM_TAXTOTAL", "bigdecimal");
        	this.dsSave.addColumn("DS_NOTE", "string");
        	this.dsSave.addColumn("ID_USER", "string");

        	// 마감처리
        	this.dsClose = new Dataset();
        	this.dsClose.addColumn("CD_CORP", "string");
        	this.dsClose.addColumn("NO_ID", "string");
        	this.dsClose.addColumn("YN_CLOSE", "string");
        	this.dsClose.addColumn("ID_USER", "string");

        	this.dsESingo = new Dataset();
        	this.dsESingo.addColumn("CD_CORP", "string");
        	this.dsESingo.addColumn("NO_ID", "string");


        }

        /************************************************************************
         * 컨트롤 이벤트
         ************************************************************************/
         /*
          *	조회 버튼
          */
        this.fnSelect = function() {
        	if (!this.fnSelectValidate()) return;

        	this.gfnGridBeforeSelect(this.dxGrid);

        	this.dsSelect.clearData();
        	this.dsSelect.addRow();

        	this.dsSelect.setColumn(0, "CD_CORP", this.dsSearch.getColumn(0, "CD_CORP"));
        	this.dsSelect.setColumn(0, "YM_FROM", this.dsSearch.getColumn(0, "YM_FROM"));
        	this.dsSelect.setColumn(0, "YM_TO", this.dsSearch.getColumn(0, "YM_TO"));
        	this.dsSelect.setColumn(0, "YM_JFROM", this.dsSearch.getColumn(0, "YM_JFROM"));
        	this.dsSelect.setColumn(0, "YM_JTO", this.dsSearch.getColumn(0, "YM_JTO"));
        	this.dsSelect.setColumn(0, "CD_PLACE", this.dsSearch.getColumn(0, "CD_PLACE"));


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

        this.fnSelectPay = function(vrow) {


        	this.gfnGridBeforeSelect(this.dxGridPay);

        	this.dsSelectPay.clearData();
        	var nrow = this.dsSelectPay.addRow();

        	this.dsSelectPay.setColumn(nrow, "CD_CORP", this.dsList.getColumn(vrow, "CD_CORP"));
        	this.dsSelectPay.setColumn(nrow, "NO_ID", this.dsList.getColumn(vrow, "NO_ID"));

        	var strSvcId    = "selectpay";
        	var strSvcType  = "grid";
        	var inProc		= "_dsProc";
        	var inData      = "selectpay=dsSelectPay";
        	var outData     = "dsListPay=selectpay0";
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

        	var nTabIdx = this.tabData.tabindex;
        	if (nTabIdx == 0 )
        	{
        		return ;
        	} else {
        		var nRow = this.gfnGridAdd(this.dxGridPay);

        		this.dsListPay.setColumn(nRow, "CD_CORP", this.dsSearch.getColumn(0, "CD_CORP"));
        		this.dsListPay.setColumn(nRow, "NO_ID", this.dsList.getColumn(this.dsList.rowposition, "NO_ID"));

        	}
        }

        /*
         *	삭제 버튼
         */
        this.fnDel = function() {
        var nTabIdx = this.tabData.tabindex;
        	if (nTabIdx ==0 )
        	{
        		this.gfnGridDel(this.dxGrid);
        	} else {
        		this.gfnGridDel(this.dxGridPay);
        	}
        }

        /*
         *	저장 버튼
         */
        this.fnSave = function() {

        	// 필수항목 체크
        	if (!this.gfnValidation(this.dxGrid)) return;
        	if (!this.gfnValidation(this.dxGridPay)) return;

        	this.dxGrid.updateToDataset();
        	this.dxGridPay.updateToDataset();

        	this.dsUpdate.clearData();
        	this.dsDelete.clearData();
        	this.dsSave.clearData();

        	for (var i = 0; i < this.dsList.rowcount; i++) {
        		var flag = this.gfnGetFlag(this.dsList, i);

        		switch(flag) {
        			case "U":
        				var nrow = this.dsUpdate.addRow();
        				this.dsUpdate.setColumn(nrow, "CD_CORP", this.dsList.getColumn(i, "CD_CORP"));
        				this.dsUpdate.setColumn(nrow, "NO_ID", this.dsList.getColumn(i, "NO_ID"));
        				this.dsUpdate.setColumn(nrow, "CD_PLACE", this.dsList.getColumn(i, "CD_PLACE"));
        				this.dsUpdate.setColumn(nrow, "CD_WORK", this.dsList.getColumn(i, "CD_WORK"));
        				this.dsUpdate.setColumn(nrow, "YM_WORK", this.dsList.getColumn(i, "YM_WORK"));
        				this.dsUpdate.setColumn(nrow, "YM_PAYMENT", this.dsList.getColumn(i, "YM_PAYMENT"));
        				this.dsUpdate.setColumn(nrow, "DT_NOTIFY", this.dsList.getColumn(i, "DT_NOTIFY"));
        				this.dsUpdate.setColumn(nrow, "DT_DELIVERY", this.dsList.getColumn(i, "DT_DELIVERY"));
        				this.dsUpdate.setColumn(nrow, "DT_PAY", this.dsList.getColumn(i, "DT_PAY"));
        				this.dsUpdate.setColumn(nrow, "YN_DEDUCT", this.dsList.getColumn(i, "YN_DEDUCT"));
        				this.dsUpdate.setColumn(nrow, "DS_DEDUCT", this.dsList.getColumn(i, "DS_DEDUCT"));
        				this.dsUpdate.setColumn(nrow, "NO_FIRSTEMP", this.dsList.getColumn(i, "NO_FIRSTEMP"));
        				this.dsUpdate.setColumn(nrow, "DS_REDUCTION", this.dsList.getColumn(i, "DS_REDUCTION"));
        				this.dsUpdate.setColumn(nrow, "NO_EMP", this.dsList.getColumn(i, "NO_EMP"));
        				this.dsUpdate.setColumn(nrow, "AM_PAYAVG", this.dsList.getColumn(i, "AM_PAYAVG"));
        				this.dsUpdate.setColumn(nrow, "AM_PAYSUM", this.dsList.getColumn(i, "AM_PAYSUM"));
        				this.dsUpdate.setColumn(nrow, "AM_TAXFREE", this.dsList.getColumn(i, "AM_TAXFREE"));
        				this.dsUpdate.setColumn(nrow, "AM_TAXPAY", this.dsList.getColumn(i, "AM_TAXPAY"));
        				this.dsUpdate.setColumn(nrow, "NO_EMP_PRE", this.dsList.getColumn(i, "NO_EMP_PRE"));
        				this.dsUpdate.setColumn(nrow, "AM_MONTHPAY", this.dsList.getColumn(i, "AM_MONTHPAY"));
        				this.dsUpdate.setColumn(nrow, "AM_TAXBASE_DEDUCT", this.dsList.getColumn(i, "AM_TAXBASE_DEDUCT"));
        				this.dsUpdate.setColumn(nrow, "AM_TAXBASE", this.dsList.getColumn(i, "AM_TAXBASE"));
        				this.dsUpdate.setColumn(nrow, "AM_TAXAMOUNT", this.dsList.getColumn(i, "AM_TAXAMOUNT"));
        				this.dsUpdate.setColumn(nrow, "CD_PENALTY", this.dsList.getColumn(i, "CD_PENALTY"));
        				this.dsUpdate.setColumn(nrow, "DS_WITHOUT", this.dsList.getColumn(i, "DS_WITHOUT"));
        				this.dsUpdate.setColumn(nrow, "AM_PENALTY_DEFAULT", this.dsList.getColumn(i, "AM_PENALTY_DEFAULT"));
        				this.dsUpdate.setColumn(nrow, "AM_PENALTY_DATE", this.dsList.getColumn(i, "AM_PENALTY_DATE"));
        				this.dsUpdate.setColumn(nrow, "AM_EMPTAX", this.dsList.getColumn(i, "AM_EMPTAX"));
        				this.dsUpdate.setColumn(nrow, "DD_PENALTY", this.dsList.getColumn(i, "DD_PENALTY"));
        				this.dsUpdate.setColumn(nrow, "ID_USER", this.AuthClient.ID_USER);

        				break;
        			case "D" :
        				this.dsDelete.clearData();
        				var nRow = this.dsDelete.addRow();

        				//처리할 데이터 담기
        				this.dsDelete.setColumn(nrow, "CD_CORP", this.dsList.getColumn(i, "CD_CORP"));
        				this.dsDelete.setColumn(nrow, "NO_ID", this.dsList.getColumn(i, "NO_ID"));
        				this.dsDelete.setColumn(nrow, "ID_USER", this.AuthClient.ID_USER);
        				break;
        		}
        	}

        	for (var i = 0; i < this.dsListPay.rowcount; i++) {
        		var flag = this.gfnGetFlag(this.dsListPay, i);

        		switch(flag) {
        			case "I":
        			case "U":
        			case "D":
        				this.dsSave.clearData();
        				var nRow = this.dsSave.addRow();

        				this.dsSave.setColumn(nrow, "CD_CORP", this.dsListPay.getColumn(i, "CD_CORP"));
        				this.dsSave.setColumn(nrow, "TY_WORK", flag);
        				this.dsSave.setColumn(nrow, "NO_ID", this.dsListPay.getColumn(i, "NO_ID"));
        				this.dsSave.setColumn(nrow, "YM_SALARY", this.dsListPay.getColumn(i, "YM_SALARY"));
        				this.dsSave.setColumn(nrow, "NO_SALARYTAX", this.dsListPay.getColumn(i, "NO_SALARYTAX"));
        				this.dsSave.setColumn(nrow, "NO_EMPTAX", this.dsListPay.getColumn(i, "NO_EMPTAX"));
        				this.dsSave.setColumn(nrow, "AM_TAXPAY", this.dsListPay.getColumn(i, "AM_TAXPAY"));
        				this.dsSave.setColumn(nrow, "AM_TAXPAY01", this.dsListPay.getColumn(i, "AM_TAXPAY01"));
        				this.dsSave.setColumn(nrow, "AM_TAXPAY02", this.dsListPay.getColumn(i, "AM_TAXPAY02"));
        				this.dsSave.setColumn(nrow, "AM_TAXPAY03", this.dsListPay.getColumn(i, "AM_TAXPAY03"));
        				this.dsSave.setColumn(nrow, "AM_TAXPAY04", this.dsListPay.getColumn(i, "AM_TAXPAY04"));
        				this.dsSave.setColumn(nrow, "AM_NTAXPAY", this.dsListPay.getColumn(i, "AM_NTAXPAY"));
        				this.dsSave.setColumn(nrow, "AM_NTAXPAY01", this.dsListPay.getColumn(i, "AM_NTAXPAY01"));
        				this.dsSave.setColumn(nrow, "AM_NTAXPAY02", this.dsListPay.getColumn(i, "AM_NTAXPAY02"));
        				this.dsSave.setColumn(nrow, "AM_NTAXPAY03", this.dsListPay.getColumn(i, "AM_NTAXPAY03"));
        				this.dsSave.setColumn(nrow, "AM_NTAXPAY04", this.dsListPay.getColumn(i, "AM_NTAXPAY04"));
        				this.dsSave.setColumn(nrow, "AM_TAXTOTAL", this.dsListPay.getColumn(i, "AM_TAXTOTAL"));
        				this.dsSave.setColumn(nrow, "DS_NOTE", this.dsListPay.getColumn(i, "DS_NOTE"));
        				this.dsSave.setColumn(nrow, "ID_USER", this.AuthClient.ID_USER);

        				break;
        		}
        	}

        	if (this.dsUpdate.rowcount == 0 && this.dsDelete.rowcount == 0 && this.dsSave == 0 ) return;

        	var strSvcType  = "save";
        	var strSvcId    = "save";
        	var inProc		= "_dsProc";
        	var inData      = "update=dsUpdate delete=dsDelete updatepay=dsSave";
        	var outData     = "";
        	var strArg      = "";
        	var callBackFnc = "fnCallback";

        	this.gfnTransaction( strSvcId , 	// transaction을 구분하기 위한 svc id값
        						strSvcType , 	// transaction을 요청할 구분
        						inProc,			// Procedure 정보 Dataset 이름
        						inData , 		// 입력값으로 보낼 dataset id , a=b형태로 실제이름과 입력이름을 매칭
        						outData , 		// 처리결과값으로 받을 dataset id, a=b형태로 실제이름과 입력이름을 매칭
        						strArg, 		// 입력갑스로 보낼 arguments, strFormData="20120607"
        						callBackFnc); // 통신방법 정의 [생략가능]
        }

        /*
         *	엑셀 버튼
         */
        this.fnExcel = function() {

        	var arrGrid = [this.dxGrid, this.dxGridPay];
        	var arrSheetName = ["주민세(종업원분)", "주민세(종업원분)급여명세"];
        	var sFileName = "주민세(종업원분)";

        	// 1 (시트명: sheet1,sheet2.. 사용, 파일명: 화면명_날짜)
        	this.gfnExcelExportMulti(arrGrid, arrSheetName, sFileName);
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
        	if (this.gfnIsNull(this.ccfCD_CORP.form.CDTextBox.value)) {
        		this.gfnAlert("법인코드는 필수입니다.");
        		this.ccfCD_CORP.form.CDTextBox.setFocus();
        		return false;
        	}
        	if(this.gfnIsNull(this.dsSearch.getColumn(0, "YM_FROM"))) {
        		this.fnVaidateCallback = function() {
        			this.ctclYM_FROM.form.TextBox.setFocus();
        		}
        		this.gfnAlert("귀속기간을 입력하세요!", "fnVaidateCallback");
        		return false;
        	}

        	if(this.gfnIsNull(this.dsSearch.getColumn(0, "YM_TO"))) {
        		this.fnVaidateCallback = function() {
        			this.ctclYM_TO.form.TextBox.setFocus();
        		}
        		this.gfnAlert("귀속기간을 입력하세요!", "fnVaidateCallback");
        		return false;
        	}

        	if(this.gfnIsNull(this.dsSearch.getColumn(0, "YM_JFROM"))) {
        		this.fnVaidateCallback = function() {
        			this.ctclYM_JFROM.form.TextBox.setFocus();
        		}
        		this.gfnAlert("지급기간을 입력하세요!", "fnVaidateCallback");
        		return false;
        	}

        	if(this.gfnIsNull(this.dsSearch.getColumn(0, "YM_JTO"))) {
        		this.fnVaidateCallback = function() {
        			this.ctclYM_JTO.form.TextBox.setFocus();
        		}
        		this.gfnAlert("지급기간을 입력하세요!", "fnVaidateCallback");
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
        	switch(svcID) {
        	case "select" :
        		this.gfnGridAfterSelect(this.dxGrid);
        		if(this.dsList.rowcount > 0){

        			this.fnSetAdd();
        			this.tabChange = true;
        		}else{

        			//급여데이터 클리어
        			this.dsListPay.clearData();
        		}
        		break;
        	case "selectpay" :

        		this.gfnGridAfterSelect(this.dxGridPay);

        		if (errorCode == 0) {


        		} else {
        			this.gfnAlert(errorMsg);
        		}
        		break;
        	case "save" :
        		if (errorCode == 0) {

        			this.FormBtns.Select.click();

        		} else {
        			this.gfnAlert(errorMsg);
        		}
        		break;
        	case "saveSub" :
        		if (errorCode == 0) {
        			this.FormBtns.Select.click();
        		} else {
        			this.gfnAlert(errorMsg);
        		}
        		break;
        	case "delete" :
        		if (errorCode == 0) {
        			this.gfnAlert("삭제되었습니다.");

        		} else {
        			this.gfnAlert(errorMsg);
        		}
        		break;
        	case "create" :
        		if (errorCode == 0) {
        			this.gfnAlert("생성되었습니다.");
        			this.FormBtns.Select.click();
        		} else {
        			this.gfnAlert(errorMsg);
        		}
        		break;
        	case "selectrate" :
        		if (errorCode == 0) {
        		} else {
        			this.gfnAlert(errorMsg);
        		}
        		break;
        	case "combo" :
        		if (errorCode == 0) {
        		} else {
        			this.gfnAlert(errorMsg);
        		}
        		break;
        	case "close" :
        		if (errorCode == 0) {
        			this.FormBtns.Select.click();
        		} else {
        			this.gfnAlert(errorMsg);
        		}
        		break;
        	case "ESingo" :
        		if (errorCode == 0) {
        			this.fnExcelFileOpen();
        			//this.gfnExcelExport(this.dxExcelFile);
        			//this.fnExcelFileDownload(this.dxExcelFile, "주민세 종업원분","주민세 종업원분엑셀신고파일");
        		} else {
        			this.gfnAlert(errorMsg);
        		}
        		break;
        	}
        }

        this.fnSetAdd = function ()
        {
        	if (this.tabData.tabindex == 0)
        	{
        		this.FormBtns.Add.set_enable(false);
        	} else {
        		this.FormBtns.Add.set_enable(true);
        	}
        };

        this.fnSetData = function(vrow) {

        	if (this.dsList.getColumn(vrow, "YN_CLOSE") == "Y")
        	{

        		this.btnDataCreate.set_enable(true);
        		this.btnClose.set_enable(false);
        		this.btnCancle.set_enable(true);
        		this.btnESingo.set_enable(true);

        		this.ctclYM_WORK.set_enable(false);
        		this.ctclYM_PAYMENT.set_enable(false);
        		this.ccfDT_NOTIFY.set_enable(false);
        		this.ccfDT_DELIVERY.set_enable(false);
        		this.ccfDT_PAY.set_enable(false);
        		this.chkYN_DEDUCT.set_enable(false);
        		this.cboDS_DEDUCT.set_enable(false);
        		this.mskNO_FIRSTEMP.set_enable(false);
        		this.mskNO_EMP_PRE.set_enable(false);
        		this.mskAM_MONTHPAY.set_enable(false);
        		this.mskAM_TAXBASE_DEDUCT.set_enable(false);
        		this.cboCD_PENALTY.set_enable(false);
        		this.cboDS_WITHOUT.set_enable(false);
        		this.mskDD_PENALTY.set_enable(false);
        		this.mskAM_PENALTY_DEFAULT.set_enable(false);
        		this.mskAM_PENALTY_DATE.set_enable(false);
        		this.mskAM_TAXBASE.set_enable(false);
        		this.mskAM_TAXAMOUNT.set_enable(false);
        		this.mskAM_EMPTAX.set_enable(false);

        	} else {

        		this.btnDataCreate.set_enable(true);
        		this.btnClose.set_enable(true);
        		this.btnCancle.set_enable(false);
        		this.btnESingo.set_enable(true);

        		this.ctclYM_WORK.set_enable(true);
        		this.ctclYM_PAYMENT.set_enable(true);
        		this.ccfDT_NOTIFY.set_enable(true);
        		this.ccfDT_DELIVERY.set_enable(true);
        		this.ccfDT_PAY.set_enable(true);

        		this.cboCD_PENALTY.set_enable(true);

        		this.cboDS_DEDUCT.set_enable(true);

        		this.chkYN_DEDUCT.set_enable(true);

        	}

        }

        /************************************************************************
         * 코드파인드 이벤트
         ************************************************************************/
        this.fnAfterCDTextChanged = function(id, codeFindData) {
        	var arrData = codeFindData;
        	switch(id) {
        		case "ccfCD_CORP":	//법인코드
        			this.ccfCD_PLACE.form.fnCodeFindClear();
        		break;

        	}
        }

        this.fnBeforeUserDataSetParam = function(id, dsUserParam, nrow) {
        	var cdCorp = this.ccfCD_CORP.form.CDTextBox.value;
        	switch(id) {
        		case "ccfCD_CORP":	//법인코드
        			dsUserParam.setColumn(nrow, "ID_SABUN", this.AuthClient.ID_USER);
        		break;

        		case "ccfCD_PLACE":	//발행부서 (검색조건)
        			if(this.gfnIsNull(cdCorp)){
        				this.gfnAlert("법인코드를 선택하세요.");
        				return false;
        			}
        			dsUserParam.setColumn(nrow, "CD_CORP", this.dsSearch.getColumn(0, "CD_CORP"));
        		break;


        	}
        	return true;
        };

        /************************************************************************
         * 그리드 이벤트
         ************************************************************************/
        this.fnGrid_RowCellChanged = function(obj,e)
        {

        	if (e.row != -1 && e.oldrow != e.row) {
        // 		trace(" e.oldrow=>" + e.oldrow);
        // 		trace(" fnGrid_RowCellChanged=>" + e.row);
        		if (!this.gfnGridIsRow(this.dxGrid)) return;
        		this.fnSelectPay(e.row);
                this.fnSetData(e.row);

        		trace("fnGrid_RowCellChanged YN_CLOSE=>" + this.dsList.getColumn(e.row, "YN_CLOSE"));

        		if ( this.dsList.getColumn(e.row, "YN_CLOSE") != "Y")
        		{
        			if (this.dsList.getColumn(e.row , "YN_DEDUCT") == "Y" )
        			{
        				this.cboDS_DEDUCT.set_enable(true);
        				this.mskNO_FIRSTEMP.set_enable(true);
        				this.mskNO_EMP_PRE.set_enable(true);
        				this.mskAM_MONTHPAY.set_enable(true);
        				this.mskAM_TAXBASE_DEDUCT.set_enable(true);
        			} else{

        				this.cboDS_DEDUCT.set_enable(false);
        				this.mskNO_FIRSTEMP.set_enable(false);
        				this.mskNO_EMP_PRE.set_enable(false);
        				this.mskAM_MONTHPAY.set_enable(false);
        				this.mskAM_TAXBASE_DEDUCT.set_enable(false);
        				//trace(" YN_DEDUCT=>" + this.dsList.getColumn(e.row , "YN_DEDUCT"));
        			}

        			if (this.dsList.getColumn(e.row , "CD_PENALTY") == "2" ){
        					this.cboDS_WITHOUT.set_enable(true);
        					this.mskAM_PENALTY_DEFAULT.set_enable(true);
        					this.mskAM_PENALTY_DATE.set_enable(true);
        					this.mskDD_PENALTY.set_enable(true)
        				}
        			else if(this.dsList.getColumn(e.row , "CD_PENALTY") == "1" || this.dsList.getColumn(e.row , "CD_PENALTY") == "3" ){
        					this.cboDS_WITHOUT.set_enable(false);
        					this.mskAM_PENALTY_DEFAULT.set_enable(true);
        					this.mskAM_PENALTY_DATE.set_enable(true);
        					this.mskDD_PENALTY.set_enable(true)
        				}
        			else if(this.dsList.getColumn(e.row , "CD_PENALTY") == "0" || this.gfnIsNull(this.dsList.getColumn(e.row , "CD_PENALTY")) ){
        				this.cboDS_WITHOUT.set_enable(false);
        				this.mskAM_PENALTY_DEFAULT.set_enable(false);
        				this.mskAM_PENALTY_DATE.set_enable(false);
        				this.mskDD_PENALTY.set_enable(false)
        			}
        		}
        	}
        };


        this.dsList_oncolumnchanged = function(obj,e)
        {
        	//trace("dsList_onvaluechanged");
        	//trace("dsList_onvaluechanged =>" + e.columnid + String(e.newvalue));
        	if(this.gfnDsIsUpdated(obj)){

        		this.dsList.setColumn(e.row, "FLAG" , "U");
        		this.gfnSetFormStatus(this, "U");
        		this.fnSetAdd();

        		this.dxGrid.updateToDataset();

        		if(e.columnid == "DT_DELIVERY"|| e.columnid == "DT_NOTIFY" || e.columnid == "AM_TAXPAY"
        		|| e.columnid == "AM_TAXAMOUNT" || e.columnid == "AM_TAXBASE_DEDUCT" || e.columnid == "AM_TAXBASE") {
        			if (!this.gfnIsNull(this.dsList.getColumn(e.row, "DT_DELIVERY")))
        			{
        				this.fnSetTax(e.row);
        			}
        		}

        		if (e.columnid == "YN_DEDUCT")
        		{
        			if (e.newvalue =="Y")
        			{
        				this.cboDS_DEDUCT.set_enable(true);
        				this.mskNO_FIRSTEMP.set_enable(true);
        				this.mskNO_EMP_PRE.set_enable(true);
        				this.mskAM_MONTHPAY.set_enable(true);
        				this.mskAM_TAXBASE_DEDUCT.set_enable(true);
        			} else{
        				this.cboDS_DEDUCT.set_enable(false);
        				this.mskNO_FIRSTEMP.set_enable(false);
        				this.mskNO_EMP_PRE.set_enable(false);
        				this.mskAM_MONTHPAY.set_enable(false);
        				this.mskAM_TAXBASE_DEDUCT.set_enable(false);
        				this.dsList.setColumn(e.row, "DS_DEDUCT", "0");
        				this.dsList.setColumn(e.row, "NO_FIRSTEMP", 0);
        				this.dsList.setColumn(e.row, "NO_EMP_PRE", 0);
        				this.dsList.setColumn(e.row, "AM_MONTHPAY", 0);
        				this.dsList.setColumn(e.row, "AM_TAXBASE_DEDUCT", 0);
        			}
        		}
        		if (e.columnid == "CD_PENALTY")
        		{
        			if (e.newvalue == "0" )
        			{
        				this.cboDS_WITHOUT.set_enable(false);
        				this.mskAM_PENALTY_DEFAULT.set_enable(false);
        				this.mskAM_PENALTY_DATE.set_enable(false);
        				this.mskDD_PENALTY.set_enable(false)
        				this.dsList.setColumn(e.row, "DS_WITHOUT", "0");
        				this.dsList.setColumn(e.row, "AM_PENALTY_DEFAULT", 0);
        				this.dsList.setColumn(e.row, "AM_PENALTY_DATE", 0);
        			}
        			else if (e.newvalue == "2" ){
        				this.cboDS_WITHOUT.set_enable(true);
        				this.mskAM_PENALTY_DEFAULT.set_enable(true);
        				this.mskAM_PENALTY_DATE.set_enable(true);
        				this.mskDD_PENALTY.set_enable(true)
        				this.dsList.setColumn(e.row, "DS_WITHOUT", "0");
        				this.fnSetPenaltyNow(e.row);
        			}
        			else if(e.newvalue == "1" || e.newvalue == "3" ){
        				this.cboDS_WITHOUT.set_enable(false);
        				this.mskAM_PENALTY_DEFAULT.set_enable(true);
        				this.mskAM_PENALTY_DATE.set_enable(true);
        				this.mskDD_PENALTY.set_enable(true)
        				this.dsList.setColumn(e.row, "DS_WITHOUT", "0");
        				this.fnSetPenaltyNow(e.row);
        			}
        		}

        		if( e.columnid == "AM_PENALTY_DEFAULT" || e.columnid == "AM_PENALTY_DATE") {
        			this.fnSetTotal(e.row);
        		}
        	}

        };

        this.dsListPay_oncolumnchanged = function(obj,e)
        {
        	if(this.gfnDsIsUpdated(obj)){
        		//trace("dsListPay_oncolumnchanged!!!!");
        		this.dsListPay.setColumn(e.row, "FLAG" , "U");
        		this.gfnSetFormStatus(this, "U");
        		this.fnSetAdd();

        		this.dxGridPay.updateToDataset();
        		//trace(" dsListPay_oncolumnchanged columnid =>" + e.columnid);

        		if (e.columnid == "AM_TAXPAY01" || e.columnid == "AM_TAXPAY02" || e.columnid == "AM_TAXPAY03" || e.columnid == "AM_TAXPAY04")
        		{
        			var amTaxpay = Number(this.dsListPay.getColumn(e.row, "AM_TAXPAY01")) + Number(this.gfnNvl(this.dsListPay.getColumn(e.row, "AM_TAXPAY02"),0))
        						 + Number(this.gfnNvl(this.dsListPay.getColumn(e.row, "AM_TAXPAY03"),0)) + Number(this.gfnNvl(this.dsListPay.getColumn(e.row, "AM_TAXPAY04"),0))

        			this.dsListPay.setColumn(e.row , "AM_TAXPAY", amTaxpay);
        		}

        	    if (e.columnid == "AM_NTAXPAY01" || e.columnid == "AM_NTAXPAY02" || e.columnid == "AM_NTAXPAY03" || e.columnid == "AM_NTAXPAY04")
        		{
        			var amNTaxpay = Number(this.dsListPay.getColumn(e.row, "AM_NTAXPAY01")) + Number(this.gfnNvl(this.dsListPay.getColumn(e.row, "AM_NTAXPAY02"),0))
        						 + Number(this.gfnNvl(this.dsListPay.getColumn(e.row, "AM_NTAXPAY03"),0)) + Number(this.gfnNvl(this.dsListPay.getColumn(e.row, "AM_NTAXPAY04"),0))

        			this.dsListPay.setColumn(e.row , "AM_NTAXPAY", amNTaxpay);
        		}

        		if(e.columnid== "AM_TAXPAY" || e.columnid == "AM_NTAXPAY") {

        			var amPayment = Number(this.dsListPay.getColumn(e.row, "AM_TAXPAY")) + Number(this.gfnNvl(this.dsListPay.getColumn(e.row, "AM_NTAXPAY"),0))

        			this.dsListPay.setColumn(e.row , "AM_TAXTOTAL", amPayment);
        		}
        	}
        };

        /************************************************************************
         * 기타 이벤트
         ************************************************************************/

         this.fnSetCombo = function(){

        	this.dsSelectRate = new Dataset();
        	this.dsSelectRate.addColumn("DT_DATE", "string");
        	this.dsSelectRate.addColumn("TY_GUBUN", "string");

        	this.dsSelectRate.clearData();
        	this.dsSelectRate.addRow();
        	this.dsSelectRate.setColumn(0, "DT_DATE", this.gfnGetDate());
        	this.dsSelectRate.setColumn(0, "TY_GUBUN", "EMPTAX");

        	this.dsCombo = new Dataset();
        	this.dsCombo.addColumn("CD_SYSTEM", "string");
        	this.dsCombo.addColumn("CD_TYPE", "string");
        	this.dsCombo.addColumn("TY_SEL", "string");

            this.dsCombo.addRow();
        	this.dsCombo.setColumn(0, "CD_SYSTEM", "DH");
        	this.dsCombo.setColumn(0, "CD_TYPE"  , "V36");
        	this.dsCombo.setColumn(0, "TY_SEL"   , "C");

            this.dsCombo.addRow();
            this.dsCombo.setColumn(1, "CD_SYSTEM", "DH");
        	this.dsCombo.setColumn(1, "CD_TYPE"  , "V37");
        	this.dsCombo.setColumn(1, "TY_SEL"   , "C");

            this.dsCombo.addRow();
            this.dsCombo.setColumn(2, "CD_SYSTEM", "DH");
        	this.dsCombo.setColumn(2, "CD_TYPE"  , "V35");
        	this.dsCombo.setColumn(2, "TY_SEL"   , "C");

        	var strSvcId    = "combo";
        	var strSvcType  = "select";
        	var inProc		= "_dsProc";
        	var inData      = "combo=dsCombo selectrate=dsSelectRate";
        	var outData     = "dsReduction=combo0 dsPenalty=combo1 dsWithout=combo2 dsRate=selectrate0";
        	var strArg      = "";
        	var callBackFnc = "fnCallback";

        	this.gfnTransaction( strSvcId , 	// transaction을 구분하기 위한 svc id값
        						strSvcType , 	// transaction을 요청할 구분
        						inProc,			// Procedure 정보 Dataset 이름
        						inData , 		// 입력값으로 보낼 dataset id , a=b형태로 실제이름과 입력이름을 매칭
        						outData , 		// 처리결과값으로 받을 dataset id, a=b형태로 실제이름과 입력이름을 매칭
        						strArg, 		// 입력갑스로 보낼 arguments, strFormData="20120607"
        						callBackFnc);   // 통신방법 정의 [생략가능]

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

        //자료생성 처리
        this.fnDataCreate = function (obj,e)
        {
        	var param = {};
        	param.YM_WORK = this.dsSearch.getColumn(0, "YM_FROM");
        	param.YM_PAYMENT = this.dsSearch.getColumn(0, "YM_JFROM");
        	param.CD_CORP = this.dsSearch.getColumn(0, "CD_CORP");
        	param.DS_CORP = this.dsSearch.getColumn(0, "DS_CORP");

        	this.gfnFormOpen(this.FormInfo.CD_MODULE, "DHV_EMPTAX_DLG", "fnPopupCallBack", param);

        };

        this.fnPopupCallBack = function(vtype, vflg) {
        	if (!vflg) return;

        	this.FormBtns.Select.click();

        }

        this.dsSearch_onvaluechanged = function(obj,e)
        {
        	if(e.oldvalue != e.newvalue) {
        		this.gfnSetFormStatus(this);	// 폼상태 초기화
        		this.gfnGridClear(this.dxGrid);
        		this.gfnGridClear(this.dxGridPay);

        		switch(e.columnid) {
        			case "YM_FROM" :
        				this.ctclYM_JFROM.form.TextBox.set_value(e.newvalue);
        				break;
        			case "YM_TO" :
        				this.ctclYM_JTO.form.TextBox.set_value(e.newvalue);
        				break;
        			case "YM_JFROM" :
        				break;
        			case "YM_JTO" :
        				//this.ctclYM_IMPUTE.form.TextBox.set_value(e.newvalue);
        				//this.ctclYM_SUPPY.form.TextBox.set_value(e.newvalue);
        				break;
        		}
        	}
        };

        // 산출세액 계산
        this.fnSetTax = function(nRow) {
        	if(this.gfnIsNull(nRow)) nRow = this.dsList.rowposition;

        	var amPaySum = Number(this.gfnNvl(this.dsList.getColumn(nRow, "AM_TAXPAY"),0)); // 과세급여
        	var amTaxbaseDeduct = Number(this.gfnNvl(this.dsList.getColumn(nRow, "AM_TAXBASE_DEDUCT"),0));  // 과세표준공제액
        	var amTaxBase = amPaySum - amTaxbaseDeduct;   // 과세표준

        	var amTaxAmount = nexacro.floor(amTaxBase * this.dsRate.getColumn(0, "RT_RATE")/100/10) *10;  //산출세액 0.5%

        	this.dsList.setColumn(nRow , "AM_PAYSUM" , amPaySum);
        	this.dsList.setColumn(nRow , "AM_TAXBASE" , amTaxBase);
        	this.dsList.setColumn(nRow , "AM_TAXAMOUNT" , amTaxAmount);

        	this.fnSetPenaltyNow(nRow);
        }


        //가산세 계산
        this.fnSetPenaltyNow = function(vRow){
            trace("fnSetPenaltyNow =>" + vRow);

        	var dayPenalty = this.gfnGetDiffDate(this.dsList.getColumn(vRow, "DT_NOTIFY") ,this.dsList.getColumn(vRow, "DT_DELIVERY")); // 지연일수

        	var amTaxSum = this.gfnNvl(this.dsList.getColumn(vRow, "AM_TAXAMOUNT"),0)

        	var cdPenalty = this.gfnNvl(this.dsList.getColumn(vRow, "CD_PENALTY"), "0");

        //     trace(" dayPenalty=>" +dayPenalty );
        // 	trace(" amTaxSum=>" +amTaxSum );
        	if (dayPenalty > 0 && amTaxSum > 0 ) {
        		if(cdPenalty == "0") {
        			cdPenalty = "1" ;  // 무신고 가산세 항목 처리
        		}

        		var rtPenalty = (cdPenalty == "1") ? this.dsRate.getColumn(0, "RT_PANELTY_DEFAULT2") : (cdPenalty == "2") ? this.dsRate.getColumn(0, "RT_PANELTY_DEFAULT3") : this.dsRate.getColumn(0, "RT_PANELTY_DEFAULT");
        		var amPenaltyDefault = Math.floor(Number(amTaxSum) * rtPenalty/100/10) * 10; 	// 정액 가산세 10,20,40

        		var amPenaltyData = Math.floor(amTaxSum * dayPenalty * this.dsRate.getColumn(0, "RT_PANELTY_DAY")/10)*10  ;  // 추가납부금 기간지연 가산세 0.00022

        		var amPenaltySum = amPenaltyDefault + amPenaltyData;   // 당월 가산세 합계

        		//this.dsList.setColumn(vRow, "CD_PENALTY", cdPenalty);
        		this.cboCD_PENALTY.set_index(Number(cdPenalty));
        		this.dsList.setColumn(vRow, "AM_PENALTY_DEFAULT", amPenaltyDefault);
        		this.dsList.setColumn(vRow, "AM_PENALTY_DATE", amPenaltyData);
        		this.dsList.setColumn(vRow, "DD_PENALTY" , dayPenalty > 0 ? dayPenalty : 0 );
        		this.dsList.setColumn(vRow, "AM_PENALTY" , amPenaltySum);
        // 		this.mskAM_PENALTY_DEFAULT.set_enable(true);
        // 		this.mskAM_PENALTY_DATE.set_enable(true);

        	} else {
        	trace(" cdPenalty=>" +cdPenalty );
        		//this.dsList.setColumn(0, "CD_PENALTY", "9");  // 가산세구분
        		this.dsList.setColumn(vRow, "AM_PENALTY_DEFAULT", 0);
        		this.dsList.setColumn(vRow, "AM_PENALTY_DATE", 0);
        		this.dsList.setColumn(vRow, "DD_PENALTY" , 0);
        		this.dsList.setColumn(vRow, "AM_PENALTY" , 0);
        	}
        	this.fnSetTotal(vRow);
        }

        //차감납부세액 계산
        this.fnSetTotal = function(nRow) {

        	var amTaxAmount =  Number(this.dsList.getColumn(nRow, "AM_TAXAMOUNT"));
        	var amPenalty = Number(this.gfnNvl(this.dsList.getColumn(nRow, "AM_PENALTY_DEFAULT"),0)) + Number(this.gfnNvl(this.dsList.getColumn(nRow, "AM_PENALTY_DATE"),0)); // 가산세액

        	var amEmpTax = amTaxAmount + amPenalty; // 산출세액

        	this.dsList.setColumn(nRow , "AM_PENALTY" , amPenalty);
        	this.dsList.setColumn(nRow , "AM_EMPTAX" , amEmpTax);

        }

        this.divData_divDataRight_tabdata_onchanged = function(obj,e)
        {
        	if ((this.gfnGetFormStatus(this)== "U" || this.gfnGetFormStatus(this)== "I" || this.gfnGetFormStatus(this)=="D") && this.tabChange == true)
        	{
        		this.tabChange =false;
        		this.gfnConfirm("변경된 데이터가 있습니다. 저장하지 않고 탭이동 하시겠습니까?", "fnConfirmCallback");
        	}
        };

        this.fnConfirmCallback = function (svcID, value)
        {
        	if (value)
        	{
        		this.FormBtns.Select.click();
        	} else {
        		if (this.tabData.tabindex == 0 )
        		{
        			this.tabData.set_tabindex(1);
        		} else {
        			this.tabData.set_tabindex(0);
        		}
        		this.tabChange =true;
        		return false;
        	}
        };


        this.fnTaxClose = function(obj,e) { //마감

        	if(!this.gfnGridIsRow(this.dxGrid)) return;

        	if(this.dsList.getCaseCount("CHK == '1' && "+this.ucFlag+" != '#'") == 0){
        		this.gfnAlert("마감 처리할 행을 선택하세요.");
        		return false;
        	}

        	for(var i = 0; i < this.dsList.rowcount; i++) {
        		if(this.dsList.getColumn(i, this.ucFlag) == "U" || this.dsList.getColumn(i, this.ucFlag) == "I" || this.dsList.getColumn(i, this.ucFlag) == "D"){
        			this.gfnAlert("수정중인자료가 있습니다. 저장후 작업하세요.");
        			return false;
        		}
        		if(this.dsList.getColumn(i, this.ucFlag) != "#" && this.dsList.getColumn(i, "CHK") == 1){
        			if( this.dsList.getColumn(i,"YN_CLOSE") != "N" ) {
        				this.gfnAlert("마감상태가  '미마감' 상태인 경우만 마감 가능합니다.");
        				return false;
        			}
        		}
        	}

        	// 마감처리
        	this.gfnConfirm("마감 처리후에는 수정 불가능합니다. \n마감을 진행하시겠습니까?", "fnCloseCallBack", "Y");

        }

        this.fnCancle = function(obj,e) { //마감 취소
            if(!this.gfnGridIsRow(this.dxGrid)) return;

        	if(this.dsList.getCaseCount("CHK == '1' && "+this.ucFlag+" != '#'") == 0){
        		this.gfnAlert("마감취소 처리할 행을 선택하세요.");
        		return false;
        	}

        	for(var i = 0; i < this.dsList.rowcount; i++) {
        		if(this.dsList.getColumn(i, this.ucFlag) == "U" || this.dsList.getColumn(i, this.ucFlag) == "I" || this.dsList.getColumn(i, this.ucFlag) == "D"){
        			this.gfnAlert("수정중인자료가 있습니다. 저장후 작업하세요.");
        			return false;
        		}
        		if(this.dsList.getColumn(i, this.ucFlag) != "#" && this.dsList.getColumn(i, "CHK") == 1){
        			if( this.dsList.getColumn(i,"YN_CLOSE") != "Y" ) {
        				this.gfnAlert("마감상태가  '마감' 상태인 경우만 마감취소 가능합니다.");
        				return false;
        			}
        		}
        	}

        	// 마감취소
        	this.gfnConfirm("마감취소를 진행하시겠습니까?", "fnCloseCallBack", "N");

        }

        this.fnCloseCallBack = function(strId, val) {
        	//trace(" fnCloseCallBack=> strId : " +strId );
        	if(val == false) return;

        	this.dsClose.clearData();

        	for (var i = 0; i < this.dsList.rowcount; i++) {
        		if (this.dsList.getColumn( i , "CHK") == 1)
        		{
        			var nrow = this.dsClose.addRow();
        			this.dsClose.setColumn(nrow, "CD_CORP", this.ccfCD_CORP.form.CDTextBox.value);
        			this.dsClose.setColumn(nrow, "NO_ID", this.dsList.getColumn(i, "NO_ID"));
        			this.dsClose.setColumn(nrow, "YN_CLOSE", strId);
        			this.dsClose.setColumn(nrow, "ID_USER", this.AuthClient.ID_USER);
        		}
        	}

        	var strSvcId    = "close";
        	var strSvcType  = "save";
        	var inProc		= "_dsProc";
        	var inData      = "close=dsClose";
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
        this.fnESingo = function() {
        	if(!this.fnESingoValidate()) return;

        	var param = {};

        	var noId = [];
        	for(var i = 0; i < this.dsList.rowcount; i++) {
        		if(this.dsList.getCaseCount("CHK == '1'")) {
        			noId.push(this.dsList.getColumn(i, "NO_ID"));
        		}
        	}
        	param.CD_CORP = this.dsSearch.getColumn(0, "CD_CORP");
        	param.NO_ID = noId.join("|");

        	this.gfnConfirm("전자 신고 작업을 진행하시겠습니까? \n일괄신고서식 엑셀파일을 선택하세요!", "fnESingoCallBack");
        };

        this.fnPopupCallback = function(strId, val) {
        	if (val)
        	{
        		this.FormBtns.Select.click();
        	}
        }

        this.fnESingoValidate = function() {
        	var strMsg = "";
        	if(!this.gfnGridIsRow(this.dxGrid)) return;

        	if(this.dsList.getCaseCount("CHK == '1' && "+this.ucFlag+" != '#'") == 0){
        		this.gfnAlert("신고자료생성할 행을 선택하세요.");
        		return false;
        	}
        	var dtDelivery = "";
        	for(var i = 0; i < this.dsList.rowcount; i++) {

        		if(this.dsList.getColumn(i, this.ucFlag) == "U" || this.dsList.getColumn(i, this.ucFlag) == "I" || this.dsList.getColumn(i, this.ucFlag) == "D"){
        			this.gfnAlert("수정중인자료가 있습니다. 저장후 작업하세요.");
        			return false;
        		}

        		if( this.dsList.getColumn(i, "CHK") =="1" &&  dtDelivery != "" && this.dsList.getColumn(i, "DT_DELIVERY") != dtDelivery) {
        			this.gfnAlert("신고제출일자가 다른자료가 선택되었습니다. 신고제출일자가 같은 자료를 선택 후 작업하세요.");
        			return false;
        		}
        		if (this.dsList.getColumn(i, "CHK") =="1"){
        			dtDelivery = this.dsList.getColumn(i, "DT_DELIVERY");
        		}
        	}

        	return true;
        }

        this.fnESingoCallBack = function(strId, val) {
        	if(!val) return;

        	//var json = JSON.parse(val);
        	//trace("fnESingoCallBack  PASSWORD=>" + json.PASSWORD);

        	//전자신고
        	this.dsExcelFile.clearData();

        	var noId = [];
        	for(var i = 0; i < this.dsList.rowcount; i++) {
        		if(this.dsList.getColumn(i, "CHK") == "1") {
        			noId.push(this.dsList.getColumn(i, "NO_ID"));
        		}
        	}

        	this.dsESingo.clearData();
        	var nrow = this.dsESingo.addRow();

        	this.dsESingo.setColumn(nrow, "CD_CORP", this.dsSearch.getColumn(0, "CD_CORP"));
        	this.dsESingo.setColumn(nrow, "NO_ID", noId.join("|"));

        	trace(this.dsESingo.saveXML());

        	var strSvcId    = "ESingo";
        	var strSvcType  = "select";
        	var inProc		= "_dsProc";
        	var inData      = "ESingo=dsESingo";
        	var outData     = "dsExcelFile=ESingo0";
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

        this.fnExcelFileDownload = function(objGridExcel, sSheetName, sFileName) {
        // 	trace("this.dsText.rowcount", this.dsText.rowcount);
        // 	trace("this.dsText.saveXML", this.dsText.saveXML());

        	if (this.dsExcelFile.rowcount <= 0) {
        		return false;
        	}

        	var objGrid_excel = objGridExcel;

        	this.setWaitCursor(true);

        	var regExp = /[?*:\/\[\]]/g;  				//(엑셀에서 지원하지않는 모든 문자)

        	//fileName nullcheck
        	sFileName = this.gfnIsNull(sFileName) ? this.gfnGetArgument("NM_FORM")+"_"+this.gfnGetDate() : sFileName;
        	//sheetName nullcheck
        	sSheetName = this.gfnIsNull(sSheetName) ? "sheet1" : sSheetName;

        	sFileName = sFileName.replace(regExp,"");	//파일명에 특수문자 제거
        	sSheetName = sSheetName.replace(regExp,""); //시트명에 특수문자 제거

        	//sheetName 30이상일경우 기본시트명
        	if( String(sSheetName).length > 30 ){
        		sSheetName =  "sheet1";
        	}

        	var _contextPath = nexacro.getEnvironmentVariable("evContextPath");
        	var svcUrl = "svcUrl::XExportImport.do";
        	if (!this.gfnIsNull(_contextPath)) {
        		_contextPath = _contextPath.substr(1, _contextPath.length - 1);
        		svcUrl = "svcUrl::" + _contextPath + "XExportImport.do";
        	}

        	this.objExport = null;
        	this.objExport = new ExcelExportObject();

        	var gridHeadInfos = [];
        	var gridBodyInfos = [];
        	var gh = objGridExcel._getCellinfos(-1);
        	var gb = objGridExcel._getCellinfos(0);
        	this._getGCGridCustomMap(gridHeadInfos, gh, _gcGridHeadCustomMap);
        	this._getGCGridCustomMap(gridBodyInfos, gb, _gcGridBodyCustomMap);

        	this.objExport._arrGridHeadInfo = [gridHeadInfos];
        	this.objExport._arrGridBodyInfo = [gridBodyInfos];

        	objGridExcel._oldSelectType = objGridExcel.selecttype;
        	objGridExcel.set_selecttype("cell");

        	this.objExport._arrGrid = [objGrid_excel];
        	this.objExport.set_exporttype(nexacro.ExportTypes.EXCEL2007);
        	this.objExport.set_exporturl(svcUrl);

            this.objExport.addExportItem(nexacro.ExportItemTypes.GRID, objGrid_excel, sSheetName+"!A3","allband","allrecord","suppress","allstyle","none","","both");
        	//this.objExport.addExportItem(nexacro.ExportItemTypes.GRID, objGridExcel, sSheetName+"!A3","allband","allrecord","nosuppress","allstyle","none","","both");

        	this.objExport.set_exportfilename(sFileName);

         	this.objExport.set_exporteventtype("itemrecord");
         	this.objExport.set_exportuitype("none");
         	this.objExport.set_exportmessageprocess("");
        	this.objExport.addEventHandler("onsuccess", this.gfnExportOnsuccess, this);
        	this.objExport.addEventHandler("onerror", this.gfnExportOnerror, this);

        	//this.setWaitCursor(false);
        //	var result = this.objExport.exportData(arrParams.join(' '));
        	var result = this.objExport.exportData();

        	if (this.gfnGetConfig("DZ", "LOG_TYPE").indexOf("download") != -1)
        	{
        		this.gfnExcelLog(objGridExcel); //excel log 저장
        	}
        }

        // 파일설정
        var context = "/";
        if (nexacro.getEnvironmentVariable("evContextPath") != undefined) {
        	context = nexacro.getEnvironmentVariable("evContextPath");
        }

        this.fileConfig = this.gfnGetFileConfig();
        this.fileConfig.downloadUrl = context + "file/downloadFile.do";
        this.fileConfig.uploadUrl = context + "file/saveFile.do";
        this.fileConfig.allowTypes = ["xlsx"]; // 엑셀파일
        this.filepath = "DH/EMPTAX/";

        //엑셀 파일 선택
        this.fnExcelFileOpen = function()
        {
        	//this.fdg00.set_accept(this.fileConfig.allowTypes);
        	this.fdg00.open('FileOpen', FileDialog.LOAD);
        };

        /*
         * 파일Dialog
         */
        this.fdg00_onclose = function(obj, e)
        {
        	var filelist = e.virtualfiles;
        	this.FileList = filelist;
            if (filelist.length > 0)
        	{
                var vFile;
                for (var i = 0; i < filelist.length; i++)
        		{
                    vFile = filelist[i];
                    var extFile = vFile.filename.substring(vFile.filename.lastIndexOf('.') + 1);
                    if (!this.gfnIsExistInArray(this.fileConfig.allowTypes, extFile.toLowerCase()))
        			{
                        this.gfnAlert("엑셀 파일(" + this.fileConfig.allowTypes.join(',') + ")을 선택하세요.");
                        return;
                    }

                    vFile.addEventHandler("onsuccess", this.FileList_onsuccess, this);
                    vFile.addEventHandler("onerror", this.FileList_onerror, this);
                    vFile.open(null, 1);
                }
            }
        };

        this.FileList_onsuccess = function(obj, e)
        {
            switch (e.reason)
        	{
                case 1:
                    obj.getFileSize();
                    break;
                case 9:
                    // 하나씩 올리는 화면이므로 바로 업로드 처리
                    this.FileUpTransfer00.clearFileList();
                    this.FileUpTransfer00.addFile(obj.filename, obj);

        			if (this.FileUpTransfer00.filelist.length > 0)
        			{
                        this._waitCursor(true);
                        var sUploadUrl = this.fileConfig.host + this.fileConfig.uploadUrl;

        				trace(" sUploadUrl=>" + sUploadUrl);
                        var filename = this.FileUpTransfer00.filelist[0].filename;
                        var fileext = filename.substring(filename.lastIndexOf('.'));

        				var CD_CORP = this.dsList.getColumn(this.dsList.rowposition, "CD_CORP");
        				var NO_ID = this.dsList.getColumn(this.dsList.rowposition, "NO_ID");
         				trace(" path=>" + this.filepath.replace(/\//g, "\\") + "\\" + NO_ID);
        // 				this.FileUpTransfer00.setPostData("CD_CORP",  CD_CORP);
        // 				this.FileUpTransfer00.setPostData("NO_ID", NO_ID);
                        this.FileUpTransfer00.setPostData("path",  this.filepath.replace(/\//g, "\\") + "\\" + NO_ID);

                        this.FileUpTransfer00.upload(sUploadUrl);
        				//   \DH\EMPTAX\202412-01\주민세 종업원분 일괄신고서식.xlsx
        				this.sFileName = filename;
        				this.sFilePath = this.filepath.replace(/\//g, "\\") + NO_ID + "\\"
        				trace(" sFileName=>" + this.sFileName);

        				//this.gfnExcelUpdater(this.dsExcelFile, "", "", "", sFileName);

                    }
                    break;
            }
        }
        this.FileList_onerror = function(obj, e)
        {
            trace("errortype: " + e.errortype);
            trace("errormsg: " + e.errormsg);
            trace("statuscode: " + e.statuscode);
        };

        this.FileUpTransfer00_onprogress = function(obj, e)
        {
            trace("FileUpTransfer00_onprogress: " + e.loaded + "/" + e.total);
        };
        this.FileUpTransfer00_onsuccess = function(obj, e)
        {
        	trace("FileUpTransfer00_onsuccess: " + e.code + "/" + e.message);
        	trace(" dsExcelFile=>" + this.dsExcelFile.saveXML());
        	this.fnExcelUpdater();
            this._waitCursor(false);

        };

        this.fnExcelUpdater = function() {
        	var sFileName = this.sFileName;
        	var sFilePath = this.sFilePath;
        	//sheetName nullcheck
        	var sSheetName = this.gfnIsNull(sSheetName) ? "sheet1" : sSheetName;

        	this._dsExInfo = new nexacro.Dataset();
        	this._dsExInfo.addColumn("SHEETNAME", "string");
        	this._dsExInfo.addColumn("FILEPATH", "string");
        	this._dsExInfo.addColumn("FILENAME", "string");

        	this._dsExInfo.addRow();
        	this._dsExInfo.setColumn(0, "SHEETNAME", sSheetName);
        	this._dsExInfo.setColumn(0, "FILEPATH", sFilePath);
        	this._dsExInfo.setColumn(0, "FILENAME", sFileName);

        	var strSvcId    = "ExcelFileUpdater";
        	var inProc 		= "";
        	var strSvcType  = "file/ExcelFileUpdater";
        	var inData 		= "datainfo=dsExcelFile exinfo=_dsExInfo";
        	var outData     = "";
        	var strArg      = "";
        	var callBackFnc = "fnExcelFileUpdater_callback";

        	this.gfnTransaction( strSvcId , 	// transaction을 구분하기 위한 svc id값
        						strSvcType , 	// transaction을 요청할 구분
        						inProc,			// Procedure 정보 Dataset 이름
        						inData , 		// 입력값으로 보낼 dataset id , a=b형태로 실제이름과 입력이름을 매칭
        						outData , 		// 처리결과값으로 받을 dataset id, a=b형태로 실제이름과 입력이름을 매칭
        						strArg, 			// 입력갑스로 보낼 arguments, strFormData="20120607"
        						callBackFnc);   // 통신방법 정의 [생략가능]

        }

        this.fnExcelFileUpdater_callback = function(svcID, errorCode, errorMsg)
        {
        	trace(" errorMsg =>" + errorMsg);
        	if (errorCode == 0) {
        		var filename = errorMsg;
        		var Filepath = this.sFilePath;
        		var fileConfig = this.gfnGetFileConfig();
        		var surl = fileConfig.host+ fileConfig.downloadUrl;
        		var encodeFileName = encodeURIComponent(filename);

         		trace(" Filepath =>" + Filepath);
          		trace(" filename =>" + filename);

        		this.FileDownTransfer00.set_url(surl);
        		this.FileDownTransfer00.setPostData("path", Filepath);
        		this.FileDownTransfer00.setPostData("fileName", encodeFileName);
        		if( system.navigatorname =="nexacro"){
        			this.FileDownTransfer00.set_downloadfilename(filename);
        		}
        		this.FileDownTransfer00.download();
        		//this.FormBtns.Select.click();
        	} else {
        		this.gfnAlert(errorMsg);
        	}
        }
        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.form_onload,this);
            this.divData.addEventHandler("ondragmove",this.divData_ondragmove,this);
            this.divData.form.divSplitter.addEventHandler("ondrag",this.divData_divSplitter_ondrag,this);
            this.divData.form.divDataRight.form.tabdata.addEventHandler("onchanged",this.divData_divDataRight_tabdata_onchanged,this);
            this.divData.form.divDataRight.form.tabdata.tab1.form.staTITLE5.addEventHandler("onclick",this.divData_tabData_tab3_staTITLE_onclick,this);
            this.divData.form.divDataRight.form.tabdata.tab1.form.staTITLE.addEventHandler("onclick",this.divData_tabData_tab3_staTITLE_onclick,this);
            this.divData.form.divDataRight.form.tabdata.tab1.form.sta43.addEventHandler("onclick",this.divData_tabData_tab3_staTITLE_onclick,this);
            this.divData.form.divDataRight.form.tabdata.tab1.form.ccfDT_NOTIFY.addEventHandler("onchanged",this.divData_ccfDT_ENTER_onchanged,this);
            this.divData.form.divDataRight.form.tabdata.tab1.form.ccfDT_DELIVERY.addEventHandler("onchanged",this.divData_ccfDT_ENTER_onchanged,this);
            this.divData.form.divDataRight.form.tabdata.tab1.form.sta33.addEventHandler("onclick",this.divData_tabData_tab3_staTITLE_onclick,this);
            this.divData.form.divDataRight.form.tabdata.tab1.form.mskNO_FIRSTEMP.addEventHandler("onkillfocus",this.mask_onkillfocus,this);
            this.divData.form.divDataRight.form.tabdata.tab1.form.mskNO_FIRSTEMP.addEventHandler("onchanged",this.fn_OnChanged,this);
            this.divData.form.divDataRight.form.tabdata.tab1.form.ccfDT_PAY.addEventHandler("onchanged",this.divData_ccfDT_ENTER_onchanged,this);
            this.divData.form.divDataRight.form.tabdata.tab1.form.mskNO_EMP.addEventHandler("onkillfocus",this.mask_onkillfocus,this);
            this.divData.form.divDataRight.form.tabdata.tab1.form.mskNO_EMP.addEventHandler("onchanged",this.fn_OnChanged,this);
            this.divData.form.divDataRight.form.tabdata.tab1.form.mskAM_PAYAVG.addEventHandler("onkillfocus",this.mask_onkillfocus,this);
            this.divData.form.divDataRight.form.tabdata.tab1.form.mskAM_PAYAVG.addEventHandler("onchanged",this.fn_OnChanged,this);
            this.divData.form.divDataRight.form.tabdata.tab1.form.mskAM_PAYSUM.addEventHandler("onkillfocus",this.mask_onkillfocus,this);
            this.divData.form.divDataRight.form.tabdata.tab1.form.mskAM_PAYSUM.addEventHandler("onchanged",this.fn_OnChanged,this);
            this.divData.form.divDataRight.form.tabdata.tab1.form.mskAM_TAXFREE.addEventHandler("onkillfocus",this.mask_onkillfocus,this);
            this.divData.form.divDataRight.form.tabdata.tab1.form.mskAM_TAXFREE.addEventHandler("onchanged",this.fn_OnChanged,this);
            this.divData.form.divDataRight.form.tabdata.tab1.form.mskAM_TAXPAY.addEventHandler("onkillfocus",this.mask_onkillfocus,this);
            this.divData.form.divDataRight.form.tabdata.tab1.form.mskAM_TAXPAY.addEventHandler("onchanged",this.fn_OnChanged,this);
            this.divData.form.divDataRight.form.tabdata.tab1.form.mskNO_EMP_PRE.addEventHandler("onkillfocus",this.mask_onkillfocus,this);
            this.divData.form.divDataRight.form.tabdata.tab1.form.mskNO_EMP_PRE.addEventHandler("onchanged",this.fn_OnChanged,this);
            this.divData.form.divDataRight.form.tabdata.tab1.form.mskAM_MONTHPAY.addEventHandler("onkillfocus",this.mask_onkillfocus,this);
            this.divData.form.divDataRight.form.tabdata.tab1.form.mskAM_MONTHPAY.addEventHandler("onchanged",this.fn_OnChanged,this);
            this.divData.form.divDataRight.form.tabdata.tab1.form.mskAM_TAXBASE_DEDUCT.addEventHandler("onkillfocus",this.mask_onkillfocus,this);
            this.divData.form.divDataRight.form.tabdata.tab1.form.mskAM_TAXBASE_DEDUCT.addEventHandler("onchanged",this.fn_OnChanged,this);
            this.divData.form.divDataRight.form.tabdata.tab1.form.mskAM_TAXBASE.addEventHandler("onkillfocus",this.mask_onkillfocus,this);
            this.divData.form.divDataRight.form.tabdata.tab1.form.mskAM_TAXBASE.addEventHandler("onchanged",this.fn_OnChanged,this);
            this.divData.form.divDataRight.form.tabdata.tab1.form.mskAM_TAXAMOUNT.addEventHandler("onkillfocus",this.mask_onkillfocus,this);
            this.divData.form.divDataRight.form.tabdata.tab1.form.mskAM_TAXAMOUNT.addEventHandler("onchanged",this.fn_OnChanged,this);
            this.divData.form.divDataRight.form.tabdata.tab1.form.mskAM_PENALTY_DEFAULT.addEventHandler("onkillfocus",this.mask_onkillfocus,this);
            this.divData.form.divDataRight.form.tabdata.tab1.form.mskAM_PENALTY_DEFAULT.addEventHandler("onchanged",this.fn_OnChanged,this);
            this.divData.form.divDataRight.form.tabdata.tab1.form.mskAM_PENALTY_DATE.addEventHandler("onkillfocus",this.mask_onkillfocus,this);
            this.divData.form.divDataRight.form.tabdata.tab1.form.mskAM_PENALTY_DATE.addEventHandler("onchanged",this.fn_OnChanged,this);
            this.divData.form.divDataRight.form.tabdata.tab1.form.mskAM_PENALTY.addEventHandler("onkillfocus",this.mask_onkillfocus,this);
            this.divData.form.divDataRight.form.tabdata.tab1.form.mskAM_PENALTY.addEventHandler("onchanged",this.fn_OnChanged,this);
            this.divData.form.divDataRight.form.tabdata.tab1.form.mskAM_EMPTAX.addEventHandler("onkillfocus",this.mask_onkillfocus,this);
            this.divData.form.divDataRight.form.tabdata.tab1.form.mskAM_EMPTAX.addEventHandler("onchanged",this.fn_OnChanged,this);
            this.divData.form.divDataRight.form.tabdata.tab1.form.mskDD_PENALTY.addEventHandler("onkillfocus",this.mask_onkillfocus,this);
            this.divData.form.divDataRight.form.tabdata.tab1.form.mskDD_PENALTY.addEventHandler("onchanged",this.fn_OnChanged,this);
            this.dsList.addEventHandler("onvaluechanged",this.dsList_oncolumnchanged,this);
            this.dsListPay.addEventHandler("onvaluechanged",this.dsListPay_oncolumnchanged,this);
            this.dsSearch.addEventHandler("onvaluechanged",this.dsSearch_onvaluechanged,this);
            this.dsReduction.addEventHandler("cancolumnchange",this.dsListSub_cancolumnchange,this);
            this.dsRate.addEventHandler("onvaluechanged",this.dsSearch_onvaluechanged,this);
            this.dsPenalty.addEventHandler("onvaluechanged",this.dsSearch_onvaluechanged,this);
            this.dsWithout.addEventHandler("onvaluechanged",this.dsSearch_onvaluechanged,this);
            this.dsExcelFile.addEventHandler("onvaluechanged",this.dsSearch_onvaluechanged,this);
            this.dsExcel.addEventHandler("onvaluechanged",this.dsSearch_onvaluechanged,this);
            this.fdg00.addEventHandler("onclose",this.fdg00_onclose,this);
            this.FileUpTransfer00.addEventHandler("onprogress",this.FileUpTransfer00_onprogress,this);
            this.FileUpTransfer00.addEventHandler("onsuccess",this.FileUpTransfer00_onsuccess,this);
            this.FileUpTransfer00.addEventHandler("onerror",this.FileUpTransfer00_onerror,this);
        };
        this.loadIncludeScript("DHV_EMPTAX.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
