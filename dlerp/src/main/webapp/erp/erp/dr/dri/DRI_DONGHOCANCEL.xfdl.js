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
            this.set_titletext("계약자 검색");
            this.getSetter("maxwidth").set("450");
            this.getSetter("maxheight").set("480");
            if (Form == this.constructor)
            {
                this._setFormPosition(450,480);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("dsList", this);
            obj._setContents("<ColumnInfo><Column id=\"DT_RECEIVED\" type=\"STRING\" size=\"256\"/><Column id=\"AM_RECEIVED\" type=\"BIGDECIMAL\" size=\"256\"/><Column id=\"AM_COMMISSION\" type=\"BIGDECIMAL\" size=\"256\"/><Column id=\"TY_RECEIPT\" type=\"STRING\" size=\"256\"/><Column id=\"TY_POSITION\" type=\"STRING\" size=\"256\"/><Column id=\"CD_GUJA\" type=\"STRING\" size=\"256\"/><Column id=\"DS_GUJA\" type=\"STRING\" size=\"256\"/><Column id=\"CD_CARD\" type=\"STRING\" size=\"256\"/><Column id=\"DS_CARD\" type=\"STRING\" size=\"256\"/><Column id=\"NO_APPROVAL\" type=\"STRING\" size=\"256\"/><Column id=\"TY_MONEY\" type=\"STRING\" size=\"256\"/><Column id=\"CD_FINANCING\" type=\"STRING\" size=\"256\"/><Column id=\"DS_FINANCING\" type=\"STRING\" size=\"256\"/><Column id=\"YN_DELAY\" type=\"STRING\" size=\"256\"/><Column id=\"YN_DISCOUNT\" type=\"STRING\" size=\"256\"/><Column id=\"DT_PAYBACK\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row/></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("_dsProc", this);
            obj._setContents("<ColumnInfo><Column id=\"TARGET\" type=\"STRING\" size=\"256\"/><Column id=\"SP\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"TARGET\">select</Col><Col id=\"SP\">DRIPR_DONGHOCANCEL_CODEFIND</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsSearch", this);
            obj._setContents("<ColumnInfo><Column id=\"CD_ACNTUNIT\" type=\"STRING\" size=\"256\"/><Column id=\"FLAG\" type=\"STRING\" size=\"256\"/><Column id=\"NO_DONG\" type=\"STRING\" size=\"256\"/><Column id=\"NO_FLOOR\" type=\"STRING\" size=\"256\"/><Column id=\"NO_HO\" type=\"STRING\" size=\"256\"/><Column id=\"DS_CONTRACTOR\" type=\"STRING\" size=\"256\"/><Column id=\"NO_ID\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"CD_ACNTUNIT\"/><Col id=\"NO_DONG\"/></Row></Rows>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Div("divData","0","0",null,null,"0","0",null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_cssclass("div_DATA_Bg");
            obj.set_text("");
            this.addChild(obj.name, obj);

            obj = new Static("staTITLE","0","20","100.00%","30",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("0");
            obj.set_text("해약자 검색");
            obj.set_cssclass("sta_TITLE_Bg");
            obj.set_textAlign("left");
            this.divData.addChild(obj.name, obj);

            obj = new Static("staSunapInfo","0","staTITLE:5",null,"22","0",null,null,null,null,null,this.divData.form);
            obj.set_taborder("9");
            obj.set_text("해약자 검색");
            this.divData.addChild(obj.name, obj);

            obj = new Static("sta00","0","staSunapInfo:5","100","30",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("1");
            obj.set_text("동층호");
            obj.set_cssclass("sta_WF_tablelabel");
            this.divData.addChild(obj.name, obj);

            obj = new Static("sta01","sta00:-1","staSunapInfo:5",null,"30","0",null,null,null,null,null,this.divData.form);
            obj.set_taborder("2");
            obj.set_cssclass("sta_WF_tablebg");
            obj.set_text("");
            this.divData.addChild(obj.name, obj);

            obj = new Static("sta02","0","sta00:-1","100","30",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("5");
            obj.set_text("성명");
            obj.set_cssclass("sta_WF_tablelabel");
            this.divData.addChild(obj.name, obj);

            obj = new Static("sta03","sta02:-1","sta01:-1",null,"30","0",null,null,null,null,null,this.divData.form);
            obj.set_taborder("6");
            obj.set_cssclass("sta_WF_tablebg");
            obj.set_text("");
            this.divData.addChild(obj.name, obj);

            obj = new Static("sta04","0","sta02:-1","100","30",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("7");
            obj.set_text("주민등록번호");
            obj.set_cssclass("sta_WF_tablelabel");
            this.divData.addChild(obj.name, obj);

            obj = new Static("sta05","sta04:-1","sta03:-1",null,"30","0",null,null,null,null,null,this.divData.form);
            obj.set_taborder("8");
            obj.set_cssclass("sta_WF_tablebg");
            obj.set_text("");
            this.divData.addChild(obj.name, obj);

            obj = new Button("btnOK","148",null,"60","27",null,"26",null,null,null,null,this.divData.form);
            obj.set_taborder("3");
            obj.set_text("확인");
            this.divData.addChild(obj.name, obj);

            obj = new Button("btnCANCLE","btnOK:30",null,"60","27",null,"26",null,null,null,null,this.divData.form);
            obj.set_taborder("4");
            obj.set_text("취소");
            this.divData.addChild(obj.name, obj);

            obj = new Edit("ctxtNO_DONG","sta00:5","87","40","20",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("10");
            this.divData.addChild(obj.name, obj);

            obj = new Static("sta06","ctxtNO_DONG:5","87","20","20",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("13");
            obj.set_text("동");
            this.divData.addChild(obj.name, obj);

            obj = new Edit("ctxtNO_FLOOR","sta06:4","87","30","20",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("12");
            this.divData.addChild(obj.name, obj);

            obj = new Static("sta07","ctxtNO_FLOOR:5","87","20","20",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("15");
            obj.set_text("층");
            this.divData.addChild(obj.name, obj);

            obj = new Edit("ctxtNO_HO","sta07:4","87","40","20",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("11");
            this.divData.addChild(obj.name, obj);

            obj = new Static("sta08","ctxtNO_HO:5","87","20","20",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("14");
            obj.set_text("호");
            this.divData.addChild(obj.name, obj);

            obj = new Edit("ctxtDS_CONTRACTOR","sta02:5","sta01:4","200","20",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("16");
            this.divData.addChild(obj.name, obj);

            obj = new Edit("ctxtNO_ID","sta04:5","sta03:4","100","20",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("17");
            this.divData.addChild(obj.name, obj);

            obj = new Button("cbtnNO_DONGHO","ctxtNO_ID:5","sta03:4","25","20",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("18");
            obj.set_cssclass("btn_CF_Search");
            this.divData.addChild(obj.name, obj);

            obj = new Grid("objGrid","0","sta04:10",null,null,"0","80",null,null,null,null,this.divData.form);
            obj.set_taborder("19");
            obj._setContents("");
            this.divData.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this
            obj = new Layout("default","",this._adjust_width,this._adjust_height,this,function(p){});
            this.addLayout(obj.name, obj);
            
            // BindItem Information
            obj = new BindItem("item0","divData.form.ctxtNO_DONG","value","dsSearch","NO_DONG");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item1","divData.form.ctxtNO_FLOOR","value","dsSearch","NO_FLOOR");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item2","divData.form.ctxtNO_HO","value","dsSearch","NO_HO");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item3","divData.form.ctxtDS_CONTRACTOR","value","dsSearch","DS_CONTRACTOR");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item4","divData.form.ctxtNO_ID","value","dsSearch","NO_ID");
            this.addChild(obj.name, obj);
            obj.bind();
            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script
        this.registerScript("DRI_DONGHOCANCEL.xfdl", function() {
        this.objApp = this.gfnGetApplication();

        this.form_onload = function(obj,e)
        {
        	// -- 필수 -------------------//
        	this.gfnFormOnLoad(this);
        	this.gfnFormInfo(this);
        	// ---------------------------//

        	this.fnSetVariable();
        	this.fnSetEvent();
        	this.fnSetParameter();

        	this.dsSearch.setColumn(0, "CD_ACNTUNIT", this.getOwnerFrame().CD_ACNTUNIT);
        	this.dsSearch.setColumn(0, "FLAG", this.getOwnerFrame().FLAG);
        };

        /************************************************************************
         * 변수 선언
         ************************************************************************/
        this.fnSetVariable = function() {
        	this.ctxtNO_DONG = this.divData.form.ctxtNO_DONG;
        	this.ctxtNO_FLOOR = this.divData.form.ctxtNO_FLOOR;
        	this.ctxtNO_HO = this.divData.form.ctxtNO_HO;
        	this.ctxtDS_CONTRACTOR = this.divData.form.ctxtDS_CONTRACTOR;
        	this.ctxtNO_ID = this.divData.form.ctxtNO_ID;

        	this.dxGrid = this.divData.form.objGrid;
        };

        /************************************************************************
         * 이벤트 설정
         ************************************************************************/
        this.fnSetEvent = function() {
        	this.gfnGridInit(this.dxGrid, this.dsList, "DR", "DRI_DONGHOCONTRACT");

        	this.dxGrid.addEventHandler("oncelldblclick", this.dxGrid_oncelldblclick, this);
        	this.dxGrid.addEventHandler("onkeydown", this.dxGrid_onkeydown, this);
        };

        /************************************************************************
         * 파라미터 설정
         ************************************************************************/
        this.fnSetParameter = function() {
        	this.dsSelect = new Dataset();
        	this.dsSelect.addColumn("CD_ACNTUNIT", "string");
        	this.dsSelect.addColumn("NO_DONG", "string");
        	this.dsSelect.addColumn("NO_FLOOR", "string");
        	this.dsSelect.addColumn("NO_HO", "string");
        	this.dsSelect.addColumn("DS_CONTRACTOR", "string");
        	this.dsSelect.addColumn("NO_ID", "string");
        }

        /************************************************************************
         * Validate
         ************************************************************************/
        this.fnSaveValidate = function() {
        	return true;
        };

        /************************************************************************
         * 코드파인드 이벤트
         ************************************************************************/

        /************************************************************************
         * 그리드 이벤트
         ************************************************************************/
        this.dxGrid_oncelldblclick = function(obj,e) {
        	if (!this.gfnGridIsRow(this.dxGrid)) return;

        	this.btnOK_onclick();
        };

        this.dxGrid_onkeydown = function(obj,e) {
        	if (!this.gfnGridIsRow(this.dxGrid)) return;

        	if (e.keycode == 13)
        		this.btnOK_onclick();
        }

        /************************************************************************
         * 콜백 이벤트
         ************************************************************************/
        this.fnCallback = function(svcID, errorCode, errorMsg) {
        	if (svcID == "select") {
        		this.gfnGridAfterSelect(this.dxGrid);
        	}
        }

        /************************************************************************
         * 기타 이벤트
         ************************************************************************/
        this.fnSelect = function() {
        	this.gfnGridBeforeSelect(this.dxGrid);

        	this.dsSelect.clearData();
        	this.dsSelect.addRow();
        	this.dsSelect.setColumn(0, "CD_ACNTUNIT", this.dsSearch.getColumn(0, "CD_ACNTUNIT"));
        	this.dsSelect.setColumn(0, "NO_DONG", this.dsSearch.getColumn(0, "NO_DONG"));
        	this.dsSelect.setColumn(0, "NO_FLOOR", this.dsSearch.getColumn(0, "NO_FLOOR"));
        	this.dsSelect.setColumn(0, "NO_HO", this.dsSearch.getColumn(0, "NO_HO"));
        	this.dsSelect.setColumn(0, "DS_CONTRACTOR", this.dsSearch.getColumn(0, "DS_CONTRACTOR"));
        	this.dsSelect.setColumn(0, "NO_ID", nexacro.replaceAll(this.gfnTrim(this.dsSearch.getColumn(0, "NO_ID"), "-", "")));

        	var strSvcId    = "select";
        	var strSvcType  = "grid";
        	var inProc		= "_dsProc";
        	var inData      = "select=dsSelect";
        	var outData     = "dsList=select0";
        	var strArg      = "";
        	var callBackFnc = "fnCallback";

        	this.gfnTransaction( strSvcId , 	// transaction을 구분하기 위한 svc id값
        						strSvcType , 	// trabsaction을 요청할 구분
        						inProc,			// Procedure 정보 Dataset 이름
        						inData , 		// 입력값으로 보낼 dataset id , a=b형태로 실제이름과 입력이름을 매칭
        						outData , 		// 처리결과값으로 받을 dataset id, a=b형태로 실제이름과 입력이름을 매칭
        						strArg, 			// 입력갑스로 보낼 arguments, strFormData="20120607"
        						callBackFnc); // 통신방법 정의 [생략가능]
        };

        this.btnOK_onclick = function(obj,e) {
        	this.Result = {};
        	if (this.dsList.rowcount > 0) {
        		var row = this.dsList.rowposition;
        		this.Result.DONG = this.dsList.getColumn(row, "NO_DONG");
        		this.Result.FLOOR = this.dsList.getColumn(row, "NO_FLOOR");
        		this.Result.HO = this.dsList.getColumn(row, "NO_HO");
        		this.Result.NAME = this.dsList.getColumn(row, "DS_CONTRACTOR");
        		this.Result.UNION = this.dsList.getColumn(row, "NO_UNIONMEMBER");
        		this.Result.NO_ID = this.dsList.getColumn(row, "NO_ID");
        	}

        	this.getParentContext().close(JSON.stringify(this.Result));
        };

        this.btnCANCLE_onclick = function(obj,e) {
        	this.getParentContext().close(false);
        };


        this.divData_cbtnNO_DONGHO_onclick = function(obj,e) {
        	this.fnSelect();
        };

        this.divData_ctxtNO_DONG_onkillfocus = function(obj,e) {
        	if (this.gfnIsNull(this.dsSearch.getColumn(0, "NO_DONG"))) return;
        	if (nexacro.isNumeric(this.dsSearch.getColumn(0, "NO_DONG"))) {
        		this.dsSearch.setColumn(0, "NO_DONG", this.dsSearch.getColumn(0, "NO_DONG").padLeft(4, "0"));
        	}
        };

        this.divData_ctxtNO_FLOOR_onkillfocus = function(obj,e) {
        	if (this.gfnIsNull(this.dsSearch.getColumn(0, "NO_FLOOR"))) return;
        	if (nexacro.isNumeric(this.dsSearch.getColumn(0, "NO_FLOOR"))) {
        		this.dsSearch.setColumn(0, "NO_FLOOR", this.dsSearch.getColumn(0, "NO_FLOOR").padLeft(2, "0"));
        	}
        };

        this.divData_ctxtNO_HO_onkillfocus = function(obj,e) {
        	if (this.gfnIsNull(this.dsSearch.getColumn(0, "NO_HO"))) return;
        	if (nexacro.isNumeric(this.dsSearch.getColumn(0, "NO_HO"))) {
        		this.dsSearch.setColumn(0, "NO_HO", this.dsSearch.getColumn(0, "NO_HO").padLeft(3, "0"));
        	}
        };

        this.divData_ctxtDS_CONTRACTOR_onkeydown = function(obj,e) {
        	if (e.keycode == 13) {
        		this.fnSelect();
        	}
        };

        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.form_onload,this);
            this.divData.form.btnOK.addEventHandler("onclick",this.btnOK_onclick,this);
            this.divData.form.btnCANCLE.addEventHandler("onclick",this.btnCANCLE_onclick,this);
            this.divData.form.ctxtNO_DONG.addEventHandler("onkillfocus",this.divData_ctxtNO_DONG_onkillfocus,this);
            this.divData.form.ctxtNO_FLOOR.addEventHandler("onkillfocus",this.divData_ctxtNO_FLOOR_onkillfocus,this);
            this.divData.form.ctxtNO_HO.addEventHandler("onkillfocus",this.divData_ctxtNO_HO_onkillfocus,this);
            this.divData.form.ctxtDS_CONTRACTOR.addEventHandler("onkeydown",this.divData_ctxtDS_CONTRACTOR_onkeydown,this);
            this.divData.form.cbtnNO_DONGHO.addEventHandler("onclick",this.divData_cbtnNO_DONGHO_onclick,this);
        };
        this.loadIncludeScript("DRI_DONGHOCANCEL.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
