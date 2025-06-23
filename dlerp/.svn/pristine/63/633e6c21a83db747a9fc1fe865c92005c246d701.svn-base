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
                this._setFormPosition(500,230);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("dsList", this);
            obj._setContents("");
            this.addChild(obj.name, obj);


            obj = new Dataset("_dsProc", this);
            obj._setContents("<ColumnInfo><Column id=\"TARGET\" type=\"STRING\" size=\"256\"/><Column id=\"SP\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"TARGET\">report</Col><Col id=\"SP\">DSBPR_HDC_ILYONG_SODUK_JIGUB</Col></Row><Row><Col id=\"TARGET\">report2</Col><Col id=\"SP\">DSBPR_HDC_ILYONG_SODUK_JIGUB2</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsSearch", this);
            obj._setContents("<ColumnInfo><Column id=\"CD_SITE\" type=\"STRING\" size=\"256\"/><Column id=\"DS_SITE\" type=\"STRING\" size=\"256\"/><Column id=\"NO_IDS\" type=\"STRING\" size=\"256\"/><Column id=\"DS_NAMES\" type=\"STRING\" size=\"256\"/><Column id=\"DT_YEAR\" type=\"STRING\" size=\"256\"/><Column id=\"TY_BUNGI\" type=\"STRING\" size=\"256\"/><Column id=\"TY_GUBUN\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"TY_GUBUN\">1</Col><Col id=\"TY_BUNGI\">1</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsTY_GUBUN", this);
            obj._setContents("<ColumnInfo><Column id=\"CD_CODE\" type=\"STRING\" size=\"256\"/><Column id=\"DS_CODE\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"CD_CODE\">1</Col><Col id=\"DS_CODE\">소득자용</Col></Row><Row><Col id=\"CD_CODE\">2</Col><Col id=\"DS_CODE\">지급자용</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsTY_BUNGI", this);
            obj._setContents("<ColumnInfo><Column id=\"CD_CODE\" type=\"STRING\" size=\"256\"/><Column id=\"DS_CODE\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"CD_CODE\">1</Col><Col id=\"DS_CODE\">1/4</Col></Row><Row><Col id=\"CD_CODE\">2</Col><Col id=\"DS_CODE\">2/4</Col></Row><Row><Col id=\"CD_CODE\">3</Col><Col id=\"DS_CODE\">3/4</Col></Row><Row><Col id=\"CD_CODE\">4</Col><Col id=\"DS_CODE\">4/4</Col></Row></Rows>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Static("staTITLE","0","0",null,"22","0",null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_text("일용근로소득지급조서(원천징수영수증)");
            obj.set_cssclass("sta_TITLE_Bg");
            obj.set_textAlign("left");
            this.addChild(obj.name, obj);

            obj = new Div("divSearch","0.0","staTITLE:10.0",null,"46.0","0",null,null,null,null,null,this);
            obj.set_taborder("0");
            this.addChild(obj.name, obj);

            obj = new Static("staCD_COSTCLASS","0.0","10.0","92.0","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("0");
            obj.set_text("현장코드");
            obj.set_cssclass("sta_WF_tablelabel");
            obj.set_textAlign("left");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("staBgCD_COSTCLASS","staCD_COSTCLASS:0.0","10.0",null,"24.0","0",null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("1");
            obj.set_cssclass("sta_WF_tablebg");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("staCD_COSTCLASS00","0.0","staCD_COSTCLASS:10.0","92.0","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("3");
            obj.set_text("귀속연도");
            obj.set_cssclass("sta_WF_tablelabel");
            obj.set_textAlign("left");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("staBgCD_COSTCLASS00","0.0","staBgCD_COSTCLASS:10.0",null,"24.0","0",null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("4");
            obj.set_cssclass("sta_WF_tablebg");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("staCD_COSTCLASS02","0.0","staCD_COSTCLASS:10.0","92.0","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("5");
            obj.set_text("분기");
            obj.set_cssclass("sta_WF_tablelabel");
            obj.set_textAlign("left");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("staBgCD_COSTCLASS02","staCD_COSTCLASS02:0.0","staCD_COSTCLASS:10.0",null,"24.0","0",null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("6");
            obj.set_cssclass("sta_WF_tablebg");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("staCD_COSTCLASS03","0.0","staCD_COSTCLASS00:10.0","92.0","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("7");
            obj.set_text("선택");
            obj.set_cssclass("sta_WF_tablelabel");
            obj.set_textAlign("left");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("staBgCD_COSTCLASS03","0.0","staBgCD_COSTCLASS00:10.0",null,"24.0","0",null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("8");
            obj.set_cssclass("sta_WF_tablebg");
            this.divSearch.addChild(obj.name, obj);

            obj = new Edit("ctxtCD_SITE","staCD_COSTCLASS:0.0","10.0","80","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("9");
            obj.set_readonly("true");
            this.divSearch.addChild(obj.name, obj);

            obj = new Combo("ccboTY_GUBUN","staCD_COSTCLASS03:0.0","staBgCD_COSTCLASS00:10.0","80","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("10");
            obj.set_innerdataset("dsTY_GUBUN");
            obj.set_datacolumn("DS_CODE");
            obj.set_codecolumn("CD_CODE");
            obj.set_text("소득자용");
            obj.set_value("1");
            obj.set_index("0");
            this.divSearch.addChild(obj.name, obj);

            obj = new Radio("crdoTY_BUNGI","staCD_COSTCLASS02:0.0","staCD_COSTCLASS:10.0","200","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("2");
            obj.set_innerdataset("dsTY_BUNGI");
            obj.set_direction("vertical");
            obj.set_fittocontents("width");
            obj.set_datacolumn("DS_CODE");
            obj.set_codecolumn("CD_CODE");
            obj.set_text("1/4");
            obj.set_value("1");
            obj.set_index("0");
            this.divSearch.addChild(obj.name, obj);

            obj = new Div("ctclDT_YEAR","staCD_COSTCLASS00:0.0","staBgCD_COSTCLASS:10.0","60","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("11");
            obj.set_url("cmm::cmmCalYY.xfdl");
            this.divSearch.addChild(obj.name, obj);

            obj = new Edit("ctxtDS_SITE","ctxtCD_SITE:0.0","10.0","320","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("12");
            obj.set_readonly("true");
            this.divSearch.addChild(obj.name, obj);

            obj = new Div("divData","0","divSearch:0","0","0",null,null,null,null,null,null,this);
            obj.set_taborder("0");
            this.addChild(obj.name, obj);

            obj = new Button("btn00","181","191","69","27",null,null,null,null,null,null,this);
            obj.set_taborder("3");
            obj.set_text("확인");
            this.addChild(obj.name, obj);

            obj = new Button("btn01","260","191","69","27",null,null,null,null,null,null,this);
            obj.set_taborder("4");
            obj.set_text("취소");
            this.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this
            obj = new Layout("default","",this._adjust_width,this._adjust_height,this,function(p){});
            this.addLayout(obj.name, obj);
            
            // BindItem Information
            obj = new BindItem("item0","divSearch.form.ctxtCD_SITE","value","dsSearch","CD_SITE");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item1","divSearch.form.ctclDT_YEAR.form.TextBox","value","dsSearch","DT_YEAR");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item2","divSearch.form.crdoTY_BUNGI","value","dsSearch","TY_BUNGI");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item3","divSearch.form.ccboTY_GUBUN","value","dsSearch","TY_GUBUN");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item6","divSearch.form.ctxtDS_SITE","value","dsSearch","DS_SITE");
            this.addChild(obj.name, obj);
            obj.bind();
            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {
            this._addPreloadList("fdl","cmm::cmmCalYY.xfdl");
        };
        
        // User Script
        this.registerScript("DSB_ILYONG_SODUK_JIGUB.xfdl", function() {
        this.objApp = this.gfnGetApplication();

        this.form_onload = function(obj,e)
        {
        	// -- 필수 -------------------//
        	this.gfnFormOnLoad(this);
        	this.gfnFormInfo(this);
        	// ---------------------------//


        	this.dsSearch.setColumn(0, "DT_YEAR", this.gfnGetDate().substr(0,4));

        	// 타화면에서 오픈시 넘어오는 파라미터 처리
        	if(!this.gfnIsNull(this.getOwnerFrame().CD_SITE) && !this.gfnIsNull(this.getOwnerFrame().NO_IDS)) {
        		this.dsSearch.setColumn(0, "CD_SITE", this.getOwnerFrame().CD_SITE);
        		this.dsSearch.setColumn(0, "DS_SITE", this.getOwnerFrame().DS_SITE);
        		this.dsSearch.setColumn(0, "NO_IDS", this.getOwnerFrame().NO_IDS);
        		this.dsSearch.setColumn(0, "DS_NAMES", this.getOwnerFrame().DS_NAMES.substr(0, this.getOwnerFrame().DS_NAMES.length-2));
        	}
        };

        this.btn00_onclick = function(obj,e)
        {
        	var sitecd = this.dsSearch.getColumn(0, "CD_SITE");
        	var idnos = this.dsSearch.getColumn(0, "NO_IDS");
        	var yeardt = this.dsSearch.getColumn(0, "DT_YEAR");
        	var tybungi = this.dsSearch.getColumn(0, "TY_BUNGI");
        	var tygubun = this.dsSearch.getColumn(0, "TY_GUBUN");

        	var strReportName = "/ds/DSA_ILYONG_SODUK_JIGUB.ozr";

        	var param = {};
        	param.REPORT_NAME = strReportName;
        	param.JSONPARAM = "{\"sitecd\":\""+ sitecd
        				 + "\", \"idnos\":\"" + idnos
        	             + "\", \"yeardt\":\"" + yeardt
        				 + "\", \"tybungi\":\"" + tybungi
        				 + "\", \"tygubun\":\"" + tygubun
        				 + "\"}";

        	console.log(param);
        	this.gfnFormOpenNonAuth("DZU", "DZU_OZ", "", param, 960, 830);


        };

        this.btn01_onclick = function(obj,e)
        {
        	// 취소
        	this.getParentContext().close();
        };

        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.form_onload,this);
            this.divSearch.form.staCD_COSTCLASS.addEventHandler("onclick",this.divData_staDS_SITE_onclick,this);
            this.divSearch.form.staCD_COSTCLASS00.addEventHandler("onclick",this.divData_staDS_SITE_onclick,this);
            this.divSearch.form.staCD_COSTCLASS02.addEventHandler("onclick",this.divData_staDS_SITE_onclick,this);
            this.divSearch.form.staCD_COSTCLASS03.addEventHandler("onclick",this.divData_staDS_SITE_onclick,this);
            this.btn00.addEventHandler("onclick",this.btn00_onclick,this);
            this.btn01.addEventHandler("onclick",this.btn01_onclick,this);
            this.dsSearch.addEventHandler("onvaluechanged",this.dsSearch_onvaluechanged,this);
        };
        this.loadIncludeScript("DSB_ILYONG_SODUK_JIGUB.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
