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
            this.set_titletext("세대주변경");
            this.getSetter("maxwidth").set("390");
            this.getSetter("maxheight").set("520");
            if (Form == this.constructor)
            {
                this._setFormPosition(360,470);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("dsList", this);
            obj._setContents("<ColumnInfo><Column id=\"CD_SITE\" type=\"STRING\" size=\"256\"/><Column id=\"CD_CORP\" type=\"STRING\" size=\"256\"/><Column id=\"CD_DONG\" type=\"STRING\" size=\"256\"/><Column id=\"CD_CUNG\" type=\"STRING\" size=\"256\"/><Column id=\"CD_HO\" type=\"STRING\" size=\"256\"/><Column id=\"PN_SDJ\" type=\"STRING\" size=\"256\"/><Column id=\"NO_TEL_H\" type=\"STRING\" size=\"256\"/><Column id=\"NO_TEL_M\" type=\"STRING\" size=\"256\"/><Column id=\"DT_IPJU\" type=\"STRING\" size=\"256\"/><Column id=\"DS_GUBUN\" type=\"STRING\" size=\"256\"/><Column id=\"RM_SPECIAL\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"CD_SITE\"/><Col id=\"CD_CORP\"/></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("_dsProc", this);
            obj._setContents("<ColumnInfo><Column id=\"TARGET\" type=\"STRING\" size=\"256\"/><Column id=\"SP\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"TARGET\">save</Col><Col id=\"SP\">DBSPR_HOUSEINFOCHANGEDLG_INSERT</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsTY_GUBUN", this);
            obj._setContents("<ColumnInfo><Column id=\"CD_CODE\" type=\"STRING\" size=\"256\"/><Column id=\"DS_CODE\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"CD_CODE\">계약자</Col><Col id=\"DS_CODE\">계약자</Col></Row><Row><Col id=\"CD_CODE\">세대주</Col><Col id=\"DS_CODE\">세대주</Col></Row></Rows>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Div("divData","10","10",null,null,"0","43",null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_cssclass("div_DATA_Bg");
            this.addChild(obj.name, obj);

            obj = new Static("staTITLE","0","20","100.00%","30",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("0");
            obj.set_text("세대정보");
            obj.set_textAlign("left");
            obj.set_cssclass("sta_TITLE_Bg");
            this.divData.addChild(obj.name, obj);

            obj = new Static("sta01","0","staTITLE:10","140","30",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("33");
            obj.set_text("동");
            obj.set_cssclass("sta_WF_tablelabel");
            this.divData.addChild(obj.name, obj);

            obj = new Static("staCD_DONG","sta01:-1","staTITLE:10","200","30",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("34");
            obj.set_cssclass("sta_WF_tablebg");
            this.divData.addChild(obj.name, obj);

            obj = new Edit("edtCD_DONG","sta01:4","staTITLE:14","190","20",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("35");
            obj.set_enable("false");
            obj.set_readonly("true");
            this.divData.addChild(obj.name, obj);

            obj = new Static("sta02","0","sta01:-1","140","30",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("33");
            obj.set_text("호");
            obj.set_cssclass("sta_WF_tablelabel");
            this.divData.addChild(obj.name, obj);

            obj = new Static("staCD_HO","sta02:-1","sta01:-1","200","30",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("34");
            obj.set_cssclass("sta_WF_tablebg");
            this.divData.addChild(obj.name, obj);

            obj = new Edit("edtCD_HO","sta02:4","sta01:4","190","20",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("35");
            obj.set_enable("false");
            obj.set_readonly("true");
            this.divData.addChild(obj.name, obj);

            obj = new Static("sta03","0","sta02:-1","140","30",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("33");
            obj.set_text("세대주명");
            obj.set_cssclass("sta_WF_tablelabel");
            this.divData.addChild(obj.name, obj);

            obj = new Static("staPN_SDJ","sta03:-1","sta02:-1","200","30",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("34");
            obj.set_cssclass("sta_WF_tablebg");
            this.divData.addChild(obj.name, obj);

            obj = new Edit("edtPN_SDJ","sta03:4","sta02:4","190","20",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("35");
            this.divData.addChild(obj.name, obj);

            obj = new Static("sta04","0","sta03:-1","140","30",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("33");
            obj.set_text("전화번호");
            obj.set_cssclass("sta_WF_tablelabel");
            this.divData.addChild(obj.name, obj);

            obj = new Static("staNO_TEL_H","sta04:-1","sta03:-1","200","30",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("34");
            obj.set_cssclass("sta_WF_tablebg");
            this.divData.addChild(obj.name, obj);

            obj = new Edit("edtNO_TEL_H","sta04:4","sta03:4","190","20",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("35");
            this.divData.addChild(obj.name, obj);

            obj = new Static("sta05","0","sta04:-1","140","30",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("33");
            obj.set_text("휴대폰");
            obj.set_cssclass("sta_WF_tablelabel");
            this.divData.addChild(obj.name, obj);

            obj = new Static("staNO_TEL_M","sta05:-1","sta04:-1","200","30",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("34");
            obj.set_cssclass("sta_WF_tablebg");
            this.divData.addChild(obj.name, obj);

            obj = new Edit("edtNO_TEL_M","sta05:4","sta04:4","190","20",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("35");
            this.divData.addChild(obj.name, obj);

            obj = new Static("sta06","0","sta05:-1","140","30",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("33");
            obj.set_text("입주일");
            obj.set_cssclass("sta_WF_tablelabel");
            this.divData.addChild(obj.name, obj);

            obj = new Static("staDT_IPJU","sta06:-1","sta05:-1","200","30",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("34");
            obj.set_cssclass("sta_WF_tablebg");
            this.divData.addChild(obj.name, obj);

            obj = new Calendar("calDT_IPJU","sta06:4","sta05:4","190","20",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("246");
            obj.set_dateformat("yyyy-MM-dd");
            this.divData.addChild(obj.name, obj);

            obj = new Static("sta07","0","sta06:-1","140","30",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("33");
            obj.set_text("입주분류");
            obj.set_cssclass("sta_WF_tablelabel");
            this.divData.addChild(obj.name, obj);

            obj = new Static("staDS_GUBUN","sta07:-1","sta06:-1","200","30",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("34");
            obj.set_cssclass("sta_WF_tablebg");
            this.divData.addChild(obj.name, obj);

            obj = new Combo("cboDS_GUBUN","sta07:4","sta06:4","190","20",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("1");
            obj.set_codecolumn("CD_CODE");
            obj.set_datacolumn("DS_CODE");
            obj.set_innerdataset("dsTY_GUBUN");
            this.divData.addChild(obj.name, obj);

            obj = new Static("sta08","0","sta07:-1","140","90",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("33");
            obj.set_text("특기사항");
            obj.set_cssclass("sta_WF_tablelabel");
            this.divData.addChild(obj.name, obj);

            obj = new Static("staRM_SPECIAL","sta08:-1","sta07:-1","200","90",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("34");
            obj.set_cssclass("sta_WF_tablebg");
            this.divData.addChild(obj.name, obj);

            obj = new TextArea("edtRM_SPECIAL","sta08:4","sta07:4","190","80",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("35");
            this.divData.addChild(obj.name, obj);

            obj = new Button("btnClose","43.71%","edtRM_SPECIAL:30","45","23",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("2");
            obj.set_text("확인");
            obj.getSetter("uWord").set("popup.ok");
            this.divData.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this
            obj = new Layout("default","",this._adjust_width,this._adjust_height,this,function(p){});
            this.addLayout(obj.name, obj);
            
            // BindItem Information
            obj = new BindItem("item0","divData.form.edtCD_DONG","value","dsList","CD_DONG");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item1","divData.form.edtCD_HO","value","dsList","CD_HO");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item2","divData.form.edtPN_SDJ","value","dsList","PN_SDJ");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item3","divData.form.edtNO_TEL_H","value","dsList","NO_TEL_H");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item4","divData.form.edtNO_TEL_M","value","dsList","NO_TEL_M");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item5","divData.form.calDT_IPJU","value","dsList","DT_IPJU");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item6","divData.form.cboDS_GUBUN","value","dsList","DS_GUBUN");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item7","divData.form.edtRM_SPECIAL","value","dsList","RM_SPECIAL");
            this.addChild(obj.name, obj);
            obj.bind();
            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script
        this.registerScript("DBS_SDJCHANGE.xfdl", function() {
        /************************************************************************************************
         * FORM 변수 선언 영역
         ************************************************************************************************/

        /***********************************************************************************************
        * FORM EVENT 영역(onload)
        /***********************************************************************************************/
        this.form_onload = function(obj,e)
        {
        	// -- 필수 -------------------//
        	this.gfnFormOnLoad(this);
        	this.gfnFormInfo(this);
        	// ---------------------------//
        	this.fnSetVariable();
        	this.fnSetEvent();
        	this.fnSetParameter();

        	this.dsList.setColumn(0, "CD_SITE" , this.getOwnerFrame().CD_SITE);
        	this.dsList.setColumn(0, "CD_CORP" , this.getOwnerFrame().CD_CORP);
        	this.dsList.setColumn(0, "CD_DONG" , this.getOwnerFrame().CD_DONG);
        	this.dsList.setColumn(0, "CD_CUNG" , this.getOwnerFrame().CD_CUNG);
        	this.dsList.setColumn(0, "CD_HO"   , this.getOwnerFrame().CD_HO);
        	this.dsList.setColumn(0, "DS_GUBUN", "계약자");
        };

        /************************************************************************
         * 변수 선언
         ************************************************************************/
        this.fnSetVariable = function() {

        	this.edtPN_SDJ     = this.divData.form.edtPN_SDJ;
        	this.edtNO_TEL_H   = this.divData.form.edtNO_TEL_H;
        	this.edtNO_TEL_M   = this.divData.form.edtNO_TEL_M;
        	this.calDT_IPJU    = this.divData.form.calDT_IPJU;
        	this.cboDS_GUBUN   = this.divData.form.cboDS_GUBUN;
        	this.edtRM_SPECIAL = this.divData.form.edtRM_SPECIAL;

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

        	this.dsSave = new Dataset();
        	this.dsSave.addColumn("CD_SITE"     , "string");
        	this.dsSave.addColumn("DS_DONG"     , "string");
        	this.dsSave.addColumn("DS_CUNG"     , "string");
        	this.dsSave.addColumn("DS_HO"       , "string");
        	this.dsSave.addColumn("PN_SDJ"      , "string");
        	this.dsSave.addColumn("NO_TEL_H"    , "string");
        	this.dsSave.addColumn("NO_TEL_M"	, "string");
        	this.dsSave.addColumn("DT_IPJU"		, "string");
        	this.dsSave.addColumn("DS_GUBUN"	, "string");
        	this.dsSave.addColumn("RM_SPECIAL"	, "string");
        };


        /************************************************************************************************
         * 각 COMPONENT 별 EVENT 영역
         ************************************************************************************************/
         /*
          *	조회 버튼
          */
        this.fnSelect = function() {};

         /*
          *	저장 버튼
          */
        this.fnSave = function() {

        	this.dsSave.clearData();
        	this.dsSave.addRow();

        	this.dsSave.setColumn(0, "CD_SITE"   , this.dsList.getColumn(0, "CD_SITE"));
        	this.dsSave.setColumn(0, "DS_DONG"   , this.dsList.getColumn(0, "CD_DONG"));
        	this.dsSave.setColumn(0, "DS_CUNG"   , this.dsList.getColumn(0, "CD_CUNG"));
        	this.dsSave.setColumn(0, "DS_HO"     , this.dsList.getColumn(0, "CD_HO"));
        	this.dsSave.setColumn(0, "PN_SDJ"    , this.dsList.getColumn(0, "PN_SDJ"));
        	this.dsSave.setColumn(0, "NO_TEL_H"  , this.dsList.getColumn(0, "NO_TEL_H"));
        	this.dsSave.setColumn(0, "NO_TEL_M"  , this.dsList.getColumn(0, "NO_TEL_M"));
        	this.dsSave.setColumn(0, "DT_IPJU"   , this.dsList.getColumn(0, "DT_IPJU"));
        	this.dsSave.setColumn(0, "DS_GUBUN"  , this.dsList.getColumn(0, "DS_GUBUN"));
        	this.dsSave.setColumn(0, "RM_SPECIAL", this.dsList.getColumn(0, "RM_SPECIAL"));

        	var strSvcId    = "save";
        	var strSvcType  = "save";
        	var inProc		= "_dsProc";
        	var inData      = "save=dsSave";
        	var outData     = "";
        	var strArg      = "";
        	var callBackFnc = "fnCallback";

        	this.gfnTransaction(strSvcId, 		// transaction을 구분하기 위한 svc id값
        						strSvcType, 	// transaction을 요청할 구분
        						inProc,			// Procedure 정보 Dataset 이름
        						inData, 		// 입력값으로 보낼 dataset id , a=b형태로 실제이름과 입력이름을 매칭
        						outData, 		// 처리결과값으로 받을 dataset id, a=b형태로 실제이름과 입력이름을 매칭
        						strArg, 		// 입력값으로 보낼 arguments, strFormData="20120607"
        						callBackFnc); 	// 통신방법 정의 [생략가능]
        };

        /*
         *	엑셀 버튼
         */
        this.fnExcel = function() {};

        /************************************************************************
         * Validate
         ************************************************************************/
        this.fnSaveValidate = function() {

         	// 세대주
        	if (this.gfnIsNull(this.dsList.getColumn(0, "PN_SDJ"))) {
        		this.gfnAlert("세대주를 반드시 입력 하셔야 합니다.");
        		this.edtPN_SDJ.setFocus();
        		return false;
        	}

        	// 입주일
        	if (this.gfnIsNull(this.dsList.getColumn(0, "DT_IPJU"))) {
        		this.gfnAlert("입주일을 확인해 주시기 바랍니다.");
        		this.DT_IPJU.setFocus();
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
        this.fnCallback = function(svcID, errorCode, errorMsg) {

        	if(svcID == "save") {
        		if (errorCode == 0) {
        		    this.parent.parent.opener.divWork.form.fnSelect();
        			this.getParentContext().close(false);
        		} else {
        			this.gfnAlert(errorMsg);
        		}
        	}
        }

        /**
          *  확인버튼이벤트
          */
        this.btnClose_onclick = function(obj,e)
        {
        	if (!this.fnSaveValidate()) return false;

        	this.gfnConfirm("등록 하시겠습니까?", function(strId, val) {
        		if(val) this.fnSave();
        	});
        };

        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.form_onload,this);
            this.divData.form.btnClose.addEventHandler("onclick",this.btnClose_onclick,this);
        };
        this.loadIncludeScript("DBS_SDJCHANGE.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
