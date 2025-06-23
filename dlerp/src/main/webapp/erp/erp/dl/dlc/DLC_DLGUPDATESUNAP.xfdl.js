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
            this.set_titletext("수납정정");
            this.getSetter("maxwidth").set("260");
            this.getSetter("maxheight").set("460");
            if (Form == this.constructor)
            {
                this._setFormPosition(260,460);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("dsList", this);
            obj._setContents("<ColumnInfo><Column id=\"CD_ACNTUNIT\" type=\"STRING\" size=\"256\"/><Column id=\"NO_DONG\" type=\"STRING\" size=\"256\"/><Column id=\"NO_FLOOR\" type=\"STRING\" size=\"256\"/><Column id=\"NO_HO\" type=\"STRING\" size=\"256\"/><Column id=\"NO_SUNAP\" type=\"STRING\" size=\"256\"/><Column id=\"YM_IMPOSE\" type=\"STRING\" size=\"256\"/><Column id=\"DT_RECEIPT\" type=\"STRING\" size=\"256\"/><Column id=\"AM_RECEIPT\" type=\"BIGDECIMAL\" size=\"256\"/><Column id=\"AM_MLEASE\" type=\"BIGDECIMAL\" size=\"256\"/><Column id=\"AM_DELAY\" type=\"BIGDECIMAL\" size=\"256\"/><Column id=\"AM_INLEASE\" type=\"BIGDECIMAL\" size=\"256\"/><Column id=\"AM_LEFT\" type=\"BIGDECIMAL\" size=\"256\"/><Column id=\"DS_REMARK\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row/></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("_dsProc", this);
            obj._setContents("<ColumnInfo><Column id=\"TARGET\" type=\"STRING\" size=\"256\"/><Column id=\"SP\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"TARGET\">insert</Col><Col id=\"SP\">DLCPR_LEASE_SUNAP_REVISE</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsResult", this);
            obj._setContents("");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Div("divData","0","0",null,null,"0","0",null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_cssclass("div_DATA_Bg");
            obj.set_text("");
            this.addChild(obj.name, obj);

            obj = new Static("staTITLE","0","20","100.00%","30",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("0");
            obj.set_text("수납정정");
            obj.set_cssclass("sta_TITLE_Bg");
            obj.set_textAlign("left");
            this.divData.addChild(obj.name, obj);

            obj = new Static("sta00","0","staTITLE:5","90","30",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("1");
            obj.set_text("부과년월");
            obj.set_cssclass("sta_WF_tablelabel");
            this.divData.addChild(obj.name, obj);

            obj = new Static("sta01","sta00:-1","staTITLE:5",null,"30","0",null,null,null,null,null,this.divData.form);
            obj.set_taborder("2");
            obj.set_cssclass("sta_WF_tablebg");
            obj.set_text("");
            this.divData.addChild(obj.name, obj);

            obj = new Static("sta02","0","sta00:-1","90","30",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("5");
            obj.set_text("수납일자");
            obj.set_cssclass("sta_WF_tablelabel");
            this.divData.addChild(obj.name, obj);

            obj = new Static("sta03","sta02:-1","sta01:-1",null,"30","0",null,null,null,null,null,this.divData.form);
            obj.set_taborder("6");
            obj.set_cssclass("sta_WF_tablebg");
            obj.set_text("");
            this.divData.addChild(obj.name, obj);

            obj = new Static("sta04","0","sta02:-1","90","30",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("7");
            obj.set_text("수납금액");
            obj.set_cssclass("sta_WF_tablelabel");
            this.divData.addChild(obj.name, obj);

            obj = new Static("sta05","sta04:-1","sta03:-1",null,"30","0",null,null,null,null,null,this.divData.form);
            obj.set_taborder("8");
            obj.set_cssclass("sta_WF_tablebg");
            obj.set_text("");
            this.divData.addChild(obj.name, obj);

            obj = new Static("sta06","0","sta04:-1","90","30",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("9");
            obj.set_text("수납임대료");
            obj.set_cssclass("sta_WF_tablelabelE");
            this.divData.addChild(obj.name, obj);

            obj = new Static("sta07","sta06:-1","sta05:-1",null,"30","0",null,null,null,null,null,this.divData.form);
            obj.set_taborder("10");
            obj.set_cssclass("sta_WF_tablebg");
            obj.set_text("");
            this.divData.addChild(obj.name, obj);

            obj = new Button("btnOK","35","373","60","27",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("3");
            obj.set_text("확인");
            this.divData.addChild(obj.name, obj);

            obj = new Button("btnCANCEL","btnOK:20","373","60","27",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("4");
            obj.set_text("취소");
            this.divData.addChild(obj.name, obj);

            obj = new Static("sta08","0","sta06:-1","90","30",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("11");
            obj.set_text("수납연체료");
            obj.set_cssclass("sta_WF_tablelabelE");
            this.divData.addChild(obj.name, obj);

            obj = new Static("sta09","sta08:-1","sta07:-1",null,"30","0",null,null,null,null,null,this.divData.form);
            obj.set_taborder("12");
            obj.set_cssclass("sta_WF_tablebg");
            obj.set_text("");
            this.divData.addChild(obj.name, obj);

            obj = new Div("staSplitter","0","sta08:5",null,"2","0",null,null,null,null,null,this.divData.form);
            obj.set_taborder("19");
            obj.set_background("black");
            obj.set_cursor("ns-resize");
            this.divData.addChild(obj.name, obj);

            obj = new Static("sta10","0","staSplitter:5","90","30",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("13");
            obj.set_text("납기내금액");
            obj.set_cssclass("sta_WF_tablelabel");
            this.divData.addChild(obj.name, obj);

            obj = new Static("sta11","sta10:-1","staSplitter:5",null,"30","0",null,null,null,null,null,this.divData.form);
            obj.set_taborder("14");
            obj.set_cssclass("sta_WF_tablebg");
            obj.set_text("");
            this.divData.addChild(obj.name, obj);

            obj = new Static("sta12","0","sta10:-1","90","30",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("15");
            obj.set_text("입대료잔액");
            obj.set_cssclass("sta_WF_tablelabel");
            this.divData.addChild(obj.name, obj);

            obj = new Static("sta13","sta12:-1","sta11:-1",null,"30","0",null,null,null,null,null,this.divData.form);
            obj.set_taborder("16");
            obj.set_cssclass("sta_WF_tablebg");
            obj.set_text("");
            this.divData.addChild(obj.name, obj);

            obj = new Static("sta14","0","sta12:-1","90","80",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("17");
            obj.set_text("비고");
            obj.set_cssclass("sta_WF_tablelabelE");
            this.divData.addChild(obj.name, obj);

            obj = new Static("sta15","sta14:-1","sta13:-1",null,"80","0",null,null,null,null,null,this.divData.form);
            obj.set_taborder("18");
            obj.set_cssclass("sta_WF_tablebg");
            obj.set_text("");
            this.divData.addChild(obj.name, obj);

            obj = new Div("tclYM_IMPOSE","sta00:5","sta01:-25","80","20",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("20");
            obj.set_url("cmm::cmmCalMM.xfdl");
            obj.set_enable("false");
            this.divData.addChild(obj.name, obj);

            obj = new Calendar("tclDT_RECEIPT","95","89","105","20",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("21");
            obj.set_dateformat("yyyy-MM-dd");
            obj.set_editformat("yyyyMMdd");
            obj.set_autoselect("true");
            obj.set_readonly("true");
            this.divData.addChild(obj.name, obj);

            obj = new MaskEdit("txtAM_RECEIPT","95","118","100","20",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("22");
            obj.set_format("#,##0");
            obj.set_readonly("true");
            this.divData.addChild(obj.name, obj);

            obj = new Static("sta72","200","118","10","20",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("23");
            obj.set_text("원");
            this.divData.addChild(obj.name, obj);

            obj = new MaskEdit("txtAM_MLEASE","95","147","100","20",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("24");
            obj.set_format("#,##0");
            this.divData.addChild(obj.name, obj);

            obj = new Static("sta16","200","147","10","20",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("25");
            obj.set_text("원");
            this.divData.addChild(obj.name, obj);

            obj = new MaskEdit("txtAM_DELAY","95","176","100","20",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("26");
            obj.set_format("#,##0");
            this.divData.addChild(obj.name, obj);

            obj = new Static("sta17","200","176","10","20",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("27");
            obj.set_text("원");
            this.divData.addChild(obj.name, obj);

            obj = new MaskEdit("txtAM_INLEASE","95","218","100","20",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("28");
            obj.set_format("#,##0");
            obj.set_readonly("true");
            this.divData.addChild(obj.name, obj);

            obj = new Static("sta18","200","218","10","20",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("29");
            obj.set_text("원");
            this.divData.addChild(obj.name, obj);

            obj = new MaskEdit("txtAM_LEFT","95","247","100","20",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("30");
            obj.set_format("#,##0");
            obj.set_readonly("true");
            this.divData.addChild(obj.name, obj);

            obj = new Static("sta19","200","247","10","20",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("31");
            obj.set_text("원");
            this.divData.addChild(obj.name, obj);

            obj = new TextArea("txtDS_REMARK","95","276",null,"68","5",null,null,null,null,null,this.divData.form);
            obj.set_taborder("32");
            this.divData.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this
            obj = new Layout("default","",this._adjust_width,this._adjust_height,this,function(p){});
            this.addLayout(obj.name, obj);
            
            // BindItem Information
            obj = new BindItem("item0","divData.form.tclYM_IMPOSE.form.TextBox","value","dsList","YM_IMPOSE");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item1","divData.form.tclDT_RECEIPT","value","dsList","DT_RECEIPT");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item2","divData.form.txtAM_RECEIPT","value","dsList","AM_RECEIPT");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item3","divData.form.txtAM_MLEASE","value","dsList","AM_MLEASE");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item4","divData.form.txtAM_DELAY","value","dsList","AM_DELAY");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item5","divData.form.txtAM_INLEASE","value","dsList","AM_INLEASE");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item6","divData.form.txtAM_LEFT","value","dsList","AM_LEFT");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item7","divData.form.txtDS_REMARK","value","dsList","DS_REMARK");
            this.addChild(obj.name, obj);
            obj.bind();
            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {
            this._addPreloadList("fdl","cmm::cmmCalMM.xfdl");
        };
        
        // User Script
        this.registerScript("DLC_DLGUPDATESUNAP.xfdl", function() {
        this.objApp = this.gfnGetApplication();

        this.saveFlag = "";

        this.form_onload = function(obj,e)
        {
        	// -- 필수 -------------------//
        	this.gfnFormOnLoad(this);
        	this.gfnFormInfo(this);
        	// ---------------------------//

        	this.fnSetVariable();
        	this.fnSetEvent();
        	this.fnSetParameter();

        	this.dsList.setColumn(0, "CD_ACNTUNIT", this.getOwnerFrame().CD_ACNTUNIT);
        	this.dsList.setColumn(0, "NO_DONG", this.getOwnerFrame().NO_DONG);
        	this.dsList.setColumn(0, "NO_FLOOR", this.getOwnerFrame().NO_FLOOR);
        	this.dsList.setColumn(0, "NO_HO", this.getOwnerFrame().NO_HO);
        	this.dsList.setColumn(0, "NO_SUNAP", this.getOwnerFrame().NO_SUNAP);
        	this.dsList.setColumn(0, "YM_IMPOSE", this.getOwnerFrame().YM_IMPOSE);
        	this.dsList.setColumn(0, "DT_RECEIPT", this.getOwnerFrame().DT_RECEIPT);
        	this.dsList.setColumn(0, "AM_RECEIPT", this.getOwnerFrame().AM_RECEIPT);
        	this.dsList.setColumn(0, "AM_MLEASE", this.getOwnerFrame().AM_MLEASE);
        	this.dsList.setColumn(0, "AM_DELAY", this.getOwnerFrame().AM_DELAY);
        	this.dsList.setColumn(0, "AM_INLEASE", this.getOwnerFrame().AM_INLEASE);
        	this.dsList.setColumn(0, "AM_LEFT", this.getOwnerFrame().AM_LEFT);

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
        	this.dsInsert = new Dataset();
        	this.dsInsert.addColumn("CD_ACNTUNIT", "string");
        	this.dsInsert.addColumn("TY_GUBUN", "string");
        	this.dsInsert.addColumn("NO_CHASU", "string");
        	this.dsInsert.addColumn("NO_DONG", "string");
        	this.dsInsert.addColumn("NO_FLOOR", "string");
        	this.dsInsert.addColumn("NO_HO", "string");
        	this.dsInsert.addColumn("YM_IMPOSE", "string");
        	this.dsInsert.addColumn("DT_RECEIVED", "string");
        	this.dsInsert.addColumn("NO_SUNAP", "string");
        	this.dsInsert.addColumn("AM_DELAY", "bigdecimal");
        	this.dsInsert.addColumn("AM_MLEASE", "bigdecimal");
        	this.dsInsert.addColumn("AM_LEFT", "bigdecimal");
        	this.dsInsert.addColumn("DS_REMARK", "string");
        	this.dsInsert.addColumn("ID_UPDATE", "string");
        }

        /************************************************************************
         * 버튼 이벤트
         ************************************************************************/
        this.fnSave = function() {
        	this.dsInsert.clearData();
        	var nrow = this.dsInsert.addRow();
        	this.dsInsert.setColumn(nrow, "CD_ACNTUNIT", this.dsList.getColumn(0, "CD_ACNTUNIT").substr(0, 6));
        	this.dsInsert.setColumn(nrow, "TY_GUBUN", this.dsList.getColumn(0, "CD_ACNTUNIT").substr(6, 1));
        	this.dsInsert.setColumn(nrow, "NO_CHASU", this.dsList.getColumn(0, "CD_ACNTUNIT").substr(7, 2));
        	this.dsInsert.setColumn(nrow, "NO_DONG", this.dsList.getColumn(0, "NO_DONG"));
        	this.dsInsert.setColumn(nrow, "NO_FLOOR", this.dsList.getColumn(0, "NO_FLOOR"));
        	this.dsInsert.setColumn(nrow, "NO_HO", this.dsList.getColumn(0, "NO_HO"));
        	this.dsInsert.setColumn(nrow, "YM_IMPOSE", this.dsList.getColumn(0, "YM_IMPOSE"));
        	this.dsInsert.setColumn(nrow, "DT_RECEIVED", this.dsList.getColumn(0, "DT_RECEIPT"));
        	this.dsInsert.setColumn(nrow, "NO_SUNAP", this.dsList.getColumn(0, "NO_SUNAP"));
        	this.dsInsert.setColumn(nrow, "AM_DELAY", this.dsList.getColumn(0, "AM_DELAY"));
        	this.dsInsert.setColumn(nrow, "AM_MLEASE", this.dsList.getColumn(0, "AM_MLEASE"));
        	this.dsInsert.setColumn(nrow, "AM_LEFT", this.dsList.getColumn(0, "AM_LEFT"));
        	this.dsInsert.setColumn(nrow, "DS_REMARK", this.dsList.getColumn(0, "DS_REMARK"));
        	this.dsInsert.setColumn(nrow, "ID_UPDATE", this.AuthClient.ID_USER);

        	var strSvcId    = "save";
        	var strSvcType  = "save";
        	var inProc		= "_dsProc";
        	var inData      = "insert=dsInsert";
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

        /************************************************************************
         * Validate
         ************************************************************************/

        /************************************************************************
         * 코드파인드 이벤트
         ************************************************************************/

        /************************************************************************
         * 콜백 이벤트
         ************************************************************************/
        this.fnCallback = function(svcID, errorCode, errorMsg) {
        	if (svcID == "save") {
        		if (errorCode == 0) {
        			this.getParentContext().close(true);
        		} else {
        			this.gfnAlert(errorMsg);
        		}
        	}
        }

        /************************************************************************
         * 기타 이벤트
         ************************************************************************/
        this.dsList_onvaluechanged = function(obj,e) {
        	if (e.oldvalue != e.newvalue) {
        		if (e.columnid == "AM_DELAY") {
        			this.dsList.setColumn(0, "AM_MLEASE", nexacro.toNumber(this.dsList.getColumn(0, "AM_RECEIPT") - this.dsList.getColumn(0, "AM_DELAY")))
        			this.dsList.setColumn(0, "AM_LEFT", nexacro.toNumber(this.dsList.getColumn(0, "AM_INLEASE") - this.dsList.getColumn(0, "AM_MLEASE")))
        		}
        		else if (e.columnid == "AM_MLEASE") {
        			this.dsList.setColumn(0, "AM_DELAY", nexacro.toNumber(this.dsList.getColumn(0, "AM_RECEIPT") - this.dsList.getColumn(0, "AM_MLEASE")))
        			this.dsList.setColumn(0, "AM_LEFT", nexacro.toNumber(this.dsList.getColumn(0, "AM_INLEASE") - this.dsList.getColumn(0, "AM_MLEASE")))
        		}
        	}
        };

        this.btnOK_onclick = function(obj,e) {
        	if (nexacro.toNumber(this.dsList.getColumn(0, "AM_RECEIPT")) <
        		Math.abs(nexacro.toNumber(this.dsList.getColumn(0, "AM_MLEASE"))) + Math.abs(nexacro.toNumber(this.dsList.getColumn(0, "AM_DELAY")))) {
        		this.gfnAlert("수납임대료 + 수납연체료가 수납금액보다 큽니다.");
        		return;
        	}

        	if (this.gfnIsNull(this.dsList.getColumn(0, "DS_REMARK"))) {
        		this.gfnAlert("비고란은 필수 입력사항입니다.");
        		return;
        	}

        	this.fnSave();
        };

        this.btnCANCEL_onclick = function(obj,e) {
        	this.getParentContext().close(false);
        };



        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.form_onload,this);
            this.divData.form.btnOK.addEventHandler("onclick",this.btnOK_onclick,this);
            this.divData.form.btnCANCEL.addEventHandler("onclick",this.btnCANCEL_onclick,this);
            this.dsList.addEventHandler("onvaluechanged",this.dsList_onvaluechanged,this);
        };
        this.loadIncludeScript("DLC_DLGUPDATESUNAP.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
