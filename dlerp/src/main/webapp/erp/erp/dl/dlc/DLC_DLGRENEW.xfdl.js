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
            this.set_titletext("재계약");
            this.getSetter("maxwidth").set("610");
            this.getSetter("maxheight").set("400");
            if (Form == this.constructor)
            {
                this._setFormPosition(610,400);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("dsList", this);
            obj._setContents("<ColumnInfo><Column id=\"CD_ACNTUNIT\" type=\"STRING\" size=\"256\"/><Column id=\"NO_DONG\" type=\"STRING\" size=\"256\"/><Column id=\"NO_FLOOR\" type=\"STRING\" size=\"256\"/><Column id=\"NO_HO\" type=\"STRING\" size=\"256\"/><Column id=\"DS_DONGHO\" type=\"STRING\" size=\"256\"/><Column id=\"DS_CONTRACTOR\" type=\"STRING\" size=\"256\"/><Column id=\"DT_RENEW\" type=\"STRING\" size=\"256\"/><Column id=\"DT_LEASE_FR\" type=\"STRING\" size=\"256\"/><Column id=\"DT_LEASE_TO\" type=\"STRING\" size=\"256\"/><Column id=\"AM_DEPOSIT\" type=\"BIGDECIMAL\" size=\"256\"/><Column id=\"AM_DEPOSIT_UP\" type=\"BIGDECIMAL\" size=\"256\"/><Column id=\"AM_LEASE\" type=\"BIGDECIMAL\" size=\"256\"/><Column id=\"AM_LEASE_UP\" type=\"BIGDECIMAL\" size=\"256\"/></ColumnInfo><Rows><Row/></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("_dsProc", this);
            obj._setContents("<ColumnInfo><Column id=\"TARGET\" type=\"STRING\" size=\"256\"/><Column id=\"SP\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"TARGET\">insert</Col><Col id=\"SP\">DLCPR_RECONTRACT_INSERT</Col></Row></Rows>");
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
            obj.set_text("재계약");
            obj.set_cssclass("sta_TITLE_Bg");
            obj.set_textAlign("left");
            this.divData.addChild(obj.name, obj);

            obj = new Static("staSubTitle00","0","staTITLE:5",null,"22","0",null,null,null,null,null,this.divData.form);
            obj.set_taborder("5");
            obj.set_text("재계약을 체결합니다");
            this.divData.addChild(obj.name, obj);

            obj = new Static("sta00","0","staSubTitle00:5","100","30",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("1");
            obj.set_text("동층호");
            obj.set_cssclass("sta_WF_tablelabel");
            this.divData.addChild(obj.name, obj);

            obj = new Static("sta01","sta00:-1","staSubTitle00:5","130","30",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("2");
            obj.set_cssclass("sta_WF_tablebg");
            obj.set_text("");
            this.divData.addChild(obj.name, obj);

            obj = new Button("btnOK","210","307","60","27",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("3");
            obj.set_text("확인");
            this.divData.addChild(obj.name, obj);

            obj = new Button("btnCANCLE","btnOK:30","307","60","27",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("4");
            obj.set_text("취소");
            this.divData.addChild(obj.name, obj);

            obj = new Static("sta02","sta01:-1","staSubTitle00:5","100","30",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("6");
            obj.set_text("계약자 성명");
            obj.set_cssclass("sta_WF_tablelabel");
            this.divData.addChild(obj.name, obj);

            obj = new Static("sta03","sta02:-1","staSubTitle00:5",null,"30","0",null,null,null,null,null,this.divData.form);
            obj.set_taborder("7");
            obj.set_cssclass("sta_WF_tablebg");
            obj.set_text("");
            this.divData.addChild(obj.name, obj);

            obj = new Static("sta04","0","sta00:-1","100","30",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("8");
            obj.set_text("재계약일자");
            obj.set_cssclass("sta_WF_tablelabelE");
            this.divData.addChild(obj.name, obj);

            obj = new Static("sta05","sta04:-1","sta01:-1","130","30",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("9");
            obj.set_cssclass("sta_WF_tablebg");
            obj.set_text("");
            this.divData.addChild(obj.name, obj);

            obj = new Static("sta06","sta05:-1","sta02:-1","100","30",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("10");
            obj.set_text("재계약 기간");
            obj.set_cssclass("sta_WF_tablelabel");
            this.divData.addChild(obj.name, obj);

            obj = new Static("sta07","sta06:-1","sta03:-1",null,"30","0",null,null,null,null,null,this.divData.form);
            obj.set_taborder("11");
            obj.set_cssclass("sta_WF_tablebg");
            obj.set_text("");
            this.divData.addChild(obj.name, obj);

            obj = new Static("staSubTitle01","0","151",null,"22","0",null,null,null,null,null,this.divData.form);
            obj.set_taborder("12");
            obj.set_text("재계약을 체결합니다");
            this.divData.addChild(obj.name, obj);

            obj = new Static("sta08","0","staSubTitle01:5","100","30",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("13");
            obj.set_text("현 보증금");
            obj.set_cssclass("sta_WF_tablelabel");
            this.divData.addChild(obj.name, obj);

            obj = new Static("sta09","sta08:-1","staSubTitle01:5","130","30",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("14");
            obj.set_cssclass("sta_WF_tablebg");
            obj.set_text("");
            this.divData.addChild(obj.name, obj);

            obj = new Static("sta10","sta09:-1","staSubTitle01:5","100","30",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("15");
            obj.set_text("보증금 인상분");
            obj.set_cssclass("sta_WF_tablelabelE");
            this.divData.addChild(obj.name, obj);

            obj = new Static("sta11","sta10:-1","staSubTitle01:5",null,"30","0",null,null,null,null,null,this.divData.form);
            obj.set_taborder("16");
            obj.set_cssclass("sta_WF_tablebg");
            obj.set_text("");
            this.divData.addChild(obj.name, obj);

            obj = new Static("staSubTitle02","0","220",null,"22","0",null,null,null,null,null,this.divData.form);
            obj.set_taborder("17");
            obj.set_text("재계약을 체결합니다");
            this.divData.addChild(obj.name, obj);

            obj = new Static("sta12","0","staSubTitle02:5","100","30",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("18");
            obj.set_text("현 임대료");
            obj.set_cssclass("sta_WF_tablelabel");
            this.divData.addChild(obj.name, obj);

            obj = new Static("sta13","sta12:-1","staSubTitle02:5","130","30",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("19");
            obj.set_cssclass("sta_WF_tablebg");
            obj.set_text("");
            this.divData.addChild(obj.name, obj);

            obj = new Static("sta14","sta13:-1","staSubTitle02:5","100","30",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("20");
            obj.set_text("변경 임대료");
            obj.set_cssclass("sta_WF_tablelabelE");
            this.divData.addChild(obj.name, obj);

            obj = new Static("sta15","sta14:-1","staSubTitle02:5",null,"30","0",null,null,null,null,null,this.divData.form);
            obj.set_taborder("21");
            obj.set_cssclass("sta_WF_tablebg");
            obj.set_text("");
            this.divData.addChild(obj.name, obj);

            obj = new Static("staDS_DONGHO","sta00:5","87","120","20",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("22");
            this.divData.addChild(obj.name, obj);

            obj = new Edit("txtDS_CONTRACTOR","sta02:5","87","120","20",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("25");
            obj.set_readonly("true");
            this.divData.addChild(obj.name, obj);

            obj = new Calendar("tclDT_RENEW","sta04:5","116","105","20",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("23");
            obj.set_dateformat("yyyy-MM-dd");
            obj.set_editformat("yyyyMMdd");
            obj.set_autoselect("true");
            this.divData.addChild(obj.name, obj);

            obj = new Calendar("tclDT_LEASE_FR","sta06:5","116","105","20",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("24");
            obj.set_dateformat("yyyy-MM-dd");
            obj.set_editformat("yyyyMMdd");
            obj.set_autoselect("true");
            this.divData.addChild(obj.name, obj);

            obj = new Static("sta58","tclDT_LEASE_FR:10","116","20","20",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("26");
            obj.set_text("~");
            this.divData.addChild(obj.name, obj);

            obj = new Calendar("tclDT_LEASE_TO","sta58:0","116","105","20",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("27");
            obj.set_dateformat("yyyy-MM-dd");
            obj.set_editformat("yyyyMMdd");
            obj.set_autoselect("true");
            this.divData.addChild(obj.name, obj);

            obj = new MaskEdit("txtAM_DEPOSIT","105","183","100","20",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("28");
            obj.set_format("#,##0");
            obj.set_readonly("true");
            this.divData.addChild(obj.name, obj);

            obj = new Static("sta79","txtAM_DEPOSIT:5","183","10","20",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("29");
            obj.set_text("원");
            this.divData.addChild(obj.name, obj);

            obj = new MaskEdit("txtAM_DEPOSIT_UP","333","183","100","20",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("30");
            obj.set_format("#,##0");
            this.divData.addChild(obj.name, obj);

            obj = new Static("sta16","438","183","10","20",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("31");
            obj.set_text("원");
            this.divData.addChild(obj.name, obj);

            obj = new MaskEdit("txtAM_LEASE","105","252","100","20",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("32");
            obj.set_format("#,##0");
            obj.set_readonly("true");
            this.divData.addChild(obj.name, obj);

            obj = new Static("sta17","210","252","10","20",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("33");
            obj.set_text("원");
            this.divData.addChild(obj.name, obj);

            obj = new MaskEdit("txtAM_LEASE_UP","333","252","100","20",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("34");
            obj.set_format("#,##0");
            this.divData.addChild(obj.name, obj);

            obj = new Static("sta18","438","252","10","20",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("35");
            obj.set_text("원");
            this.divData.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this
            obj = new Layout("default","",this._adjust_width,this._adjust_height,this,function(p){});
            this.addLayout(obj.name, obj);
            
            // BindItem Information
            obj = new BindItem("item0","divData.form.staDS_DONGHO","text","dsList","DS_DONGHO");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item1","divData.form.txtDS_CONTRACTOR","value","dsList","DS_CONTRACTOR");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item2","divData.form.tclDT_RENEW","value","dsList","DT_RENEW");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item3","divData.form.tclDT_LEASE_FR","value","dsList","DT_LEASE_FR");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item4","divData.form.tclDT_LEASE_TO","value","dsList","DT_LEASE_TO");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item5","divData.form.txtAM_DEPOSIT","value","dsList","AM_DEPOSIT");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item6","divData.form.txtAM_DEPOSIT_UP","value","dsList","AM_DEPOSIT_UP");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item7","divData.form.txtAM_LEASE","value","dsList","AM_LEASE");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item8","divData.form.txtAM_LEASE_UP","value","dsList","AM_LEASE_UP");
            this.addChild(obj.name, obj);
            obj.bind();
            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script
        this.registerScript("DLC_DLGRENEW.xfdl", function() {
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

        	this.dsList.setColumn(0, "CD_ACNTUNIT", this.getOwnerFrame().CD_ACNTUNIT);
        	this.dsList.setColumn(0, "NO_DONG", this.getOwnerFrame().NO_DONG);
        	this.dsList.setColumn(0, "NO_FLOOR", this.getOwnerFrame().NO_FLOOR);
        	this.dsList.setColumn(0, "NO_HO", this.getOwnerFrame().NO_HO);
        	this.dsList.setColumn(0, "DS_DONGHO", this.getOwnerFrame().DS_DONGHO);
        	this.dsList.setColumn(0, "DS_CONTRACTOR", this.getOwnerFrame().DS_CONTRACTOR);
        	this.dsList.setColumn(0, "AM_DEPOSIT", this.getOwnerFrame().AM_DEPOSIT);
        	this.dsList.setColumn(0, "AM_LEASE", this.getOwnerFrame().AM_LEASE);
        	this.dsList.setColumn(0, "DT_LEASE_FR", this.getOwnerFrame().DT_LEASE_FR);
        	this.dsList.setColumn(0, "DS_CONTRACTOR", this.getOwnerFrame().DS_CONTRACTOR);

        	this.dsList.setColumn(0, "DT_RENEW", this.gfnGetDate());
        	this.dsList.setColumn(0, "AM_LEASE_UP", this.dsList.getColumn(0, "AM_LEASE"));
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
        	this.dsInsert.addColumn("DT_RENEW", "string");
        	this.dsInsert.addColumn("DT_LEASE_FR", "string");
        	this.dsInsert.addColumn("DT_LEASE_TO", "string");
        	this.dsInsert.addColumn("AM_DEPOSIT_UP", "bigdecimal");
        	this.dsInsert.addColumn("AM_LEASE_UP", "bigdecimal");
        	this.dsInsert.addColumn("ID_INSERT", "string");
        }

        /************************************************************************
         * 버튼 이벤트
         ************************************************************************/
        this.fnSave = function() {
        	if (!this.fnSaveValidate()) return;

        	this.dsInsert.clearData();
        	var nrow = this.dsInsert.addRow();
        	this.dsInsert.setColumn(nrow, "CD_ACNTUNIT", this.dsList.getColumn(0, "CD_ACNTUNIT").substr(0, 6));
        	this.dsInsert.setColumn(nrow, "TY_GUBUN", this.dsList.getColumn(0, "CD_ACNTUNIT").substr(6, 1));
        	this.dsInsert.setColumn(nrow, "NO_CHASU", this.dsList.getColumn(0, "CD_ACNTUNIT").substr(7, 2));
        	this.dsInsert.setColumn(nrow, "NO_DONG", this.dsList.getColumn(0, "NO_DONG"));
        	this.dsInsert.setColumn(nrow, "NO_FLOOR", this.dsList.getColumn(0, "NO_FLOOR"));
        	this.dsInsert.setColumn(nrow, "NO_HO", this.dsList.getColumn(0, "NO_HO"));
        	this.dsInsert.setColumn(nrow, "DT_RENEW", this.dsList.getColumn(0, "DT_RENEW"));
        	this.dsInsert.setColumn(nrow, "DT_LEASE_FR", this.dsList.getColumn(0, "DT_LEASE_FR"));
        	this.dsInsert.setColumn(nrow, "DT_LEASE_TO", this.dsList.getColumn(0, "DT_LEASE_TO"));
        	this.dsInsert.setColumn(nrow, "AM_DEPOSIT_UP", this.dsList.getColumn(0, "AM_DEPOSIT_UP"));
        	this.dsInsert.setColumn(nrow, "AM_LEASE_UP", this.dsList.getColumn(0, "AM_LEASE_UP"));
        	this.dsInsert.setColumn(nrow, "ID_INSERT", this.AuthClient.ID_USER);

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
        	var strMsg = "";
        	if (this.gfnIsNull(this.dsList.getColumn(0, "CD_ACNTUNIT"))) {
        		strMsg += "사업지코드가 존재하지 않습니다.\n";
        		validate = false;
        	}
        	if (this.gfnIsNull(this.dsList.getColumn(0, "NO_DONG"))) {
        		strMsg += "동정보가 존재하지 않습니다.\n";
        		validate = false;
        	}
        	if (this.gfnIsNull(this.dsList.getColumn(0, "NO_FLOOR"))) {
        		strMsg += "층정보가 존재하지 않습니다.\n";
        		validate = false;
        	}
        	if (this.gfnIsNull(this.dsList.getColumn(0, "NO_HO"))) {
        		strMsg += "호정보가 존재하지 않습니다.\n";
        		validate = false;
        	}

        	if (this.gfnIsNull(this.dsList.getColumn(0, "DT_RENEW"))) {
        		strMsg += "재계약일자가 존재하지 않습니다.\n";
        		validate = false;
        	}
        	if (this.gfnIsNull(this.dsList.getColumn(0, "DT_LEASE_FR"))) {
        		strMsg += "계약기간의 시작일자가 존재하지 않습니다.\n";
        		validate = false;
        	}
        	if (this.gfnIsNull(this.dsList.getColumn(0, "DT_LEASE_TO"))) {
        		strMsg += "계약기간의 만료일자가 존재하지 않습니다.\n";
        		validate = false;
        	}
        	if (!this.gfnIsNull(this.dsList.getColumn(0, "DT_LEASE_FR")) && !this.gfnIsNull(this.dsList.getColumn(0, "DT_LEASE_TO"))) {
        		if (this.gfnGetDiffDate(this.dsList.getColumn(0, "DT_LEASE_FR"), this.dsList.getColumn(0, "DT_LEASE_TO")) < 0) {
        			this.gfnAlert("계약기간의 만료일자는 시작일자 이후이어야 합니다.");
        		}
        	}

        	if (nexacro.toNumber(this.dsList.getColumn(0, "AM_DEPOSIT_UP")) == 0) {
        		strMsg += "보증금 인상분이 존재하지 않습니다.\n";
        		validate = false;
        	}
        	if (nexacro.toNumber(this.dsList.getColumn(0, "AM_LEASE_UP")) == 0) {
        		strMsg += "인상임대료가 존재하지 않습니다.\n";
        		validate = false;
        	}

        	if (!validate) {
        		this.gfnAlert(strMsg);
        		return false;
        	}

        	return true;
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

        this.btnCANCLE_onclick = function(obj,e) {
        	this.getParentContext().close(false);
        };

        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.form_onload,this);
            this.divData.form.btnOK.addEventHandler("onclick",this.btnOK_onclick,this);
            this.divData.form.btnCANCLE.addEventHandler("onclick",this.btnCANCLE_onclick,this);
            this.divData.form.tclDT_RENEW.addEventHandler("onchanged",this.fnSearchInit,this);
            this.divData.form.tclDT_LEASE_FR.addEventHandler("onchanged",this.fnSearchInit,this);
            this.divData.form.tclDT_LEASE_TO.addEventHandler("onchanged",this.fnSearchInit,this);
        };
        this.loadIncludeScript("DLC_DLGRENEW.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
