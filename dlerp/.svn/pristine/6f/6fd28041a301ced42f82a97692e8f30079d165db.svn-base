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
            this.set_titletext("추가정보입력");
            this.getSetter("maxwidth").set("400");
            this.getSetter("maxheight").set("300");
            if (Form == this.constructor)
            {
                this._setFormPosition(400,260);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("dsList", this);
            obj._setContents("<ColumnInfo><Column id=\"AM_SHASI\" type=\"BIGDECIMAL\" size=\"256\"/><Column id=\"AM_PENALTY\" type=\"BIGDECIMAL\" size=\"256\"/><Column id=\"AM_BUNYANGTRANS\" type=\"BIGDECIMAL\" size=\"256\"/><Column id=\"ID_JIKUB\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row/></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("_dsProc", this);
            obj._setContents("<ColumnInfo><Column id=\"TARGET\" type=\"STRING\" size=\"256\"/><Column id=\"SP\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"TARGET\">insert</Col><Col id=\"SP\">DLCPR_AUTOSLIP_ISSUE_FAKECANCEL_DAEBANG</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsSearch", this);
            obj._setContents("<ColumnInfo><Column id=\"CD_ACNTUNIT\" type=\"STRING\" size=\"256\"/><Column id=\"TY_GUBUN\" type=\"STRING\" size=\"256\"/><Column id=\"NO_CHASU\" type=\"STRING\" size=\"256\"/><Column id=\"NO_DONG\" type=\"STRING\" size=\"256\"/><Column id=\"NO_FLOOR\" type=\"STRING\" size=\"256\"/><Column id=\"NO_HO\" type=\"STRING\" size=\"256\"/><Column id=\"DT_CANCEL\" type=\"STRING\" size=\"256\"/><Column id=\"AM_INCOME\" type=\"STRING\" size=\"256\"/><Column id=\"CD_DEPT_BH\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row/></Rows>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Div("divData","0","0",null,null,"0","0",null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_cssclass("div_DATA_Bg");
            obj.set_text("");
            this.addChild(obj.name, obj);

            obj = new Static("staTITLE","0","20","100.00%","30",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("0");
            obj.set_text("추가정보입력");
            obj.set_cssclass("sta_TITLE_Bg");
            obj.set_textAlign("left");
            this.divData.addChild(obj.name, obj);

            obj = new Static("sta00","0","staTITLE:5","130","30",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("1");
            obj.set_text("샤시비");
            obj.set_cssclass("sta_WF_tablelabel");
            this.divData.addChild(obj.name, obj);

            obj = new Static("sta01","sta00:-1","staTITLE:5",null,"30","0",null,null,null,null,null,this.divData.form);
            obj.set_taborder("2");
            obj.set_cssclass("sta_WF_tablebg");
            obj.set_text("");
            this.divData.addChild(obj.name, obj);

            obj = new Static("sta02","0","sta00:-1","130","30",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("5");
            obj.set_text("위약금");
            obj.set_cssclass("sta_WF_tablelabel");
            this.divData.addChild(obj.name, obj);

            obj = new Static("sta03","sta02:-1","sta01:-1",null,"30","0",null,null,null,null,null,this.divData.form);
            obj.set_taborder("6");
            obj.set_cssclass("sta_WF_tablebg");
            obj.set_text("");
            this.divData.addChild(obj.name, obj);

            obj = new Static("sta04","0","sta02:-1","130","30",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("7");
            obj.set_text("분양전환승계금액");
            obj.set_cssclass("sta_WF_tablelabel");
            this.divData.addChild(obj.name, obj);

            obj = new Static("sta05","sta04:-1","sta03:-1",null,"30","0",null,null,null,null,null,this.divData.form);
            obj.set_taborder("8");
            obj.set_cssclass("sta_WF_tablebg");
            obj.set_text("");
            this.divData.addChild(obj.name, obj);

            obj = new Static("sta06","0","sta04:-1","130","30",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("9");
            obj.set_text("가해약금지급거래처");
            obj.set_cssclass("sta_WF_tablelabelE");
            this.divData.addChild(obj.name, obj);

            obj = new Static("sta07","sta06:-1","sta05:-1",null,"30","0",null,null,null,null,null,this.divData.form);
            obj.set_taborder("10");
            obj.set_cssclass("sta_WF_tablebg");
            obj.set_text("");
            this.divData.addChild(obj.name, obj);

            obj = new Button("btnOK","114","200","60","27",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("3");
            obj.set_text("확인");
            this.divData.addChild(obj.name, obj);

            obj = new Button("btnCANCEL","btnOK:30","200","60","27",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("4");
            obj.set_text("취소");
            this.divData.addChild(obj.name, obj);

            obj = new MaskEdit("txtAM_SHASI","sta00:5","sta01:-25","140","20",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("11");
            obj.set_format("#,###");
            this.divData.addChild(obj.name, obj);

            obj = new MaskEdit("txtAM_PENALTY","sta02:5","sta03:-25","140","20",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("12");
            obj.set_format("#,###");
            this.divData.addChild(obj.name, obj);

            obj = new MaskEdit("txtAM_BUNYANGTRANS","sta04:5","sta05:-25","140","20",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("13");
            obj.set_format("#,###");
            this.divData.addChild(obj.name, obj);

            obj = new Div("cfID_JIKUB","sta06:5","sta07:-25","240","20",null,null,null,null,null,null,this.divData.form);
            obj.getSetter("CodeFindName").set("DLX_CFBASEINFO_CORP");
            obj.getSetter("CDTextWidth").set("70");
            obj.set_taborder("14");
            obj.set_url("cmm::cmmCodeFind.xfdl");
            this.divData.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this
            obj = new Layout("default","",this._adjust_width,this._adjust_height,this,function(p){});
            this.addLayout(obj.name, obj);
            
            // BindItem Information
            obj = new BindItem("item0","divData.form.txtAM_SHASI","value","dsList","AM_SHASI");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item1","divData.form.txtAM_PENALTY","value","dsList","AM_PENALTY");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item2","divData.form.txtAM_BUNYANGTRANS","value","dsList","AM_BUNYANGPLAN");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item3","divData.form.cfID_JIKUB.form.CDTextBox","value","dsSearch","ID_JIKUB");
            this.addChild(obj.name, obj);
            obj.bind();
            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {
            this._addPreloadList("fdl","cmm::cmmCodeFind.xfdl");
        };
        
        // User Script
        this.registerScript("DLC_RESIDENTMANAGEDLG.xfdl", function() {
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

        	this.dsSearch.setColumn(0, "CD_ACNTUNIT", this.getOwnerFrame().CD_ACNTUNIT);
        	this.dsSearch.setColumn(0, "TY_GUBUN", this.getOwnerFrame().TY_GUBUN);
        	this.dsSearch.setColumn(0, "NO_CHASU", this.getOwnerFrame().NO_CHASU);
        	this.dsSearch.setColumn(0, "NO_DONG", this.getOwnerFrame().NO_DONG);
        	this.dsSearch.setColumn(0, "NO_FLOOR", this.getOwnerFrame().NO_FLOOR);
        	this.dsSearch.setColumn(0, "NO_HO", this.getOwnerFrame().NO_HO);
        	this.dsSearch.setColumn(0, "DT_CANCEL", this.getOwnerFrame().DT_CANCEL);
        	this.dsSearch.setColumn(0, "AM_INCOME", this.getOwnerFrame().AM_INCOME);
        	this.dsSearch.setColumn(0, "CD_DEPT_BH", this.getOwnerFrame().CD_DEPT_BH);
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
        	this.dsInsert.addColumn("NO_CANCEL", "string");
        	this.dsInsert.addColumn("DT_CANCEL", "string");
        	this.dsInsert.addColumn("AM_INCOME", "bigdecimal");
        	this.dsInsert.addColumn("AM_FORFEIT", "bigdecimal");
        	this.dsInsert.addColumn("AM_MLEASE", "bigdecimal");
        	this.dsInsert.addColumn("AM_MDEL", "bigdecimal");
        	this.dsInsert.addColumn("DT_RETURN", "string");
        	this.dsInsert.addColumn("AM_RETURN", "bigdecimal");
        	this.dsInsert.addColumn("CD_DEPT_BH", "string");
        	this.dsInsert.addColumn("CD_FINANCING", "string");
        	this.dsInsert.addColumn("ID_INSERT", "string");
        	this.dsInsert.addColumn("AM_SHASI", "bigdecimal");
        	this.dsInsert.addColumn("ID_JIKUB", "string");
        	this.dsInsert.addColumn("AM_PENALTY", "bigdecimal");
        	this.dsInsert.addColumn("AM_BUNYANGTRANS", "bigdecimal");
        }

        /************************************************************************
         * 버튼 이벤트
         ************************************************************************/
        this.fnSave = function() {
        	if (!this.fnSaveValidate()) return;

        	this.dsInsert.clearData();

        	this.dsInsert.clearData();
        	var nrow = this.dsInsert.addRow();
        	this.dsInsert.setColumn(nrow, "CD_ACNTUNIT", this.dsSearch.getColumn(0, "CD_ACNTUNIT"));
        	this.dsInsert.setColumn(nrow, "TY_GUBUN", this.dsSearch.getColumn(0, "TY_GUBUN"));
        	this.dsInsert.setColumn(nrow, "NO_CHASU", this.dsSearch.getColumn(0, "NO_CHASU"));
        	this.dsInsert.setColumn(nrow, "NO_DONG", this.dsSearch.getColumn(0, "NO_DONG"));
        	this.dsInsert.setColumn(nrow, "NO_FLOOR", this.dsSearch.getColumn(0, "NO_FLOOR"));
        	this.dsInsert.setColumn(nrow, "NO_HO", this.dsSearch.getColumn(0, "NO_HO"));
        	this.dsInsert.setColumn(nrow, "NO_CANCEL", "");
        	this.dsInsert.setColumn(nrow, "DT_CANCEL", this.dsSearch.getColumn(0, "DT_CANCEL"));
        	this.dsInsert.setColumn(nrow, "AM_INCOME", this.dsSearch.getColumn(0, "AM_INCOME"));
        	this.dsInsert.setColumn(nrow, "AM_FORFEIT", 0);
        	this.dsInsert.setColumn(nrow, "AM_MLEASE", 0);
        	this.dsInsert.setColumn(nrow, "AM_MDEL", 0);
        	this.dsInsert.setColumn(nrow, "DT_RETURN", "");
        	this.dsInsert.setColumn(nrow, "AM_RETURN", 0);
        	this.dsInsert.setColumn(nrow, "CD_DEPT_BH", this.dsSearch.getColumn(0, "CD_DEPT_BH"));
        	this.dsInsert.setColumn(nrow, "CD_FINANCING", "");
        	this.dsInsert.setColumn(nrow, "ID_INSERT", this.AuthClient.ID_USER);
        	this.dsInsert.setColumn(nrow, "AM_SHASI", this.dsList.getColumn(0, "AM_SHASI"));
        	this.dsInsert.setColumn(nrow, "ID_JIKUB", this.dsList.getColumn(0, "ID_JIKUB"));
        	this.dsInsert.setColumn(nrow, "AM_PENALTY", this.dsList.getColumn(0, "AM_PENALTY"));
        	this.dsInsert.setColumn(nrow, "AM_BUNYANGTRANS", this.dsList.getColumn(0, "AM_BUNYANGTRANS"));

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
        this.fnSaveValidate = function() {
        	var validate = true;
        	if (this.gfnIsNull(this.dsSearch.getColumn(0, "ID_JIGUB"))) {
        		this.fnVaidateCallback = function() {
        			this.cfID_JIGUB.form.CDTextBox.setFocus();
        		}
        		this.gfnAlert("가해약금지급거래처를 입력하세요.", "fnVaidateCallback");
        		validate = false;
        	}
        	return validate;
        };

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
        this.btnOK_onclick = function(obj,e) {
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
        };
        this.loadIncludeScript("DLC_RESIDENTMANAGEDLG.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
