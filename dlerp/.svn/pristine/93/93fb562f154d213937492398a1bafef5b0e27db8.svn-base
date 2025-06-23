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
            this.set_titletext("분양금 특별수납");
            this.getSetter("maxwidth").set("640");
            this.getSetter("maxheight").set("420");
            if (Form == this.constructor)
            {
                this._setFormPosition(640,420);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("dsList", this);
            obj._setContents("<ColumnInfo><Column id=\"DT_CONTRACT\" type=\"STRING\" size=\"256\"/><Column id=\"DS_CONTRACTOR\" type=\"STRING\" size=\"256\"/><Column id=\"NO_JUMIN\" type=\"STRING\" size=\"256\"/><Column id=\"NO_OFFICETEL\" type=\"STRING\" size=\"256\"/><Column id=\"NO_TEL\" type=\"STRING\" size=\"256\"/><Column id=\"DS_EMAIL\" type=\"STRING\" size=\"256\"/><Column id=\"NO_MOBILE\" type=\"STRING\" size=\"256\"/><Column id=\"DS_CANCEL\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row/></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("_dsProc", this);
            obj._setContents("<ColumnInfo><Column id=\"TARGET\" type=\"STRING\" size=\"256\"/><Column id=\"SP\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"TARGET\">save</Col><Col id=\"SP\">DLBPR_CONTRACT_CANCEL_HISTORY</Col></Row></Rows>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Div("divData","0","0",null,null,"0","0",null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_cssclass("div_DATA_Bg");
            obj.set_text("");
            this.addChild(obj.name, obj);

            obj = new Static("staTITLE","0","20","100.00%","30",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("0");
            obj.set_text("분양금 특별수납");
            obj.set_cssclass("sta_TITLE_Bg");
            obj.set_textAlign("left");
            this.divData.addChild(obj.name, obj);

            obj = new Static("staSunapInfo","0","staTITLE:5",null,"22","0",null,null,null,null,null,this.divData.form);
            obj.set_taborder("13");
            obj.set_text("수납정보");
            this.divData.addChild(obj.name, obj);

            obj = new Static("sta00","0","82","87","30",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("1");
            obj.set_text("계약일자");
            obj.set_cssclass("sta_WF_tablelabelE");
            this.divData.addChild(obj.name, obj);

            obj = new Static("sta01","86","82","214","30",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("2");
            obj.set_cssclass("sta_WF_tablebg");
            obj.set_text("");
            this.divData.addChild(obj.name, obj);

            obj = new Static("sta02","0","111","87","30",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("5");
            obj.set_text("주민번호");
            obj.set_cssclass("sta_WF_tablelabelE");
            this.divData.addChild(obj.name, obj);

            obj = new Static("sta03","86","111","214","30",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("6");
            obj.set_cssclass("sta_WF_tablebg");
            obj.set_text("");
            this.divData.addChild(obj.name, obj);

            obj = new Static("sta04","0","140","87","30",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("7");
            obj.set_text("☎(자택)");
            obj.set_cssclass("sta_WF_tablelabelE");
            this.divData.addChild(obj.name, obj);

            obj = new Static("sta05","86","140","214","30",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("8");
            obj.set_cssclass("sta_WF_tablebg");
            obj.set_text("");
            this.divData.addChild(obj.name, obj);

            obj = new Static("sta06","0","169","87","30",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("9");
            obj.set_text("휴대폰");
            obj.set_cssclass("sta_WF_tablelabelE");
            this.divData.addChild(obj.name, obj);

            obj = new Static("sta07","86","169","214","30",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("10");
            obj.set_cssclass("sta_WF_tablebg");
            obj.set_text("");
            this.divData.addChild(obj.name, obj);

            obj = new Static("sta18","0","198","87","112",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("11");
            obj.set_text("취소사유");
            obj.set_cssclass("sta_WF_tablelabelE");
            this.divData.addChild(obj.name, obj);

            obj = new Static("sta19","86","198","513","112",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("12");
            obj.set_cssclass("sta_WF_tablebg");
            obj.set_text("");
            this.divData.addChild(obj.name, obj);

            obj = new Button("btnOK","224","320","60","27",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("3");
            obj.set_text("확인");
            this.divData.addChild(obj.name, obj);

            obj = new Button("btnCANCLE","btnOK:30","320","60","27",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("4");
            obj.set_text("취소");
            this.divData.addChild(obj.name, obj);

            obj = new Static("sta06_00","299","82","87","30",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("14");
            obj.set_text("계약자명");
            obj.set_cssclass("sta_WF_tablelabelE");
            this.divData.addChild(obj.name, obj);

            obj = new Static("sta07_00","385","82","214","30",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("15");
            obj.set_cssclass("sta_WF_tablebg");
            obj.set_text("");
            this.divData.addChild(obj.name, obj);

            obj = new Static("sta06_00_00","299","111","87","30",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("16");
            obj.set_text("☎(직장)");
            obj.set_cssclass("sta_WF_tablelabelE");
            this.divData.addChild(obj.name, obj);

            obj = new Static("sta07_00_00","385","111","214","30",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("17");
            obj.set_cssclass("sta_WF_tablebg");
            obj.set_text("");
            this.divData.addChild(obj.name, obj);

            obj = new Static("sta06_00_01","299","140","87","30",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("18");
            obj.set_text("e-Mail");
            obj.set_cssclass("sta_WF_tablelabelE");
            this.divData.addChild(obj.name, obj);

            obj = new Static("sta07_00_01","385","140","214","30",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("19");
            obj.set_cssclass("sta_WF_tablebg");
            obj.set_text("");
            this.divData.addChild(obj.name, obj);

            obj = new Edit("txtDT_CONTRACT","93","87","191","20",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("20");
            obj.set_readonly("true");
            this.divData.addChild(obj.name, obj);

            obj = new Edit("txtNO_JUMIN","93","116","191","20",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("21");
            obj.set_readonly("true");
            this.divData.addChild(obj.name, obj);

            obj = new Edit("txtNO_TEL","93","145","191","20",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("22");
            obj.set_readonly("true");
            this.divData.addChild(obj.name, obj);

            obj = new Edit("txtNO_MOBILE","93","174","191","20",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("23");
            obj.set_readonly("true");
            this.divData.addChild(obj.name, obj);

            obj = new Edit("txtDS_CONTRACTOR","395","87","191","20",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("24");
            obj.set_readonly("true");
            this.divData.addChild(obj.name, obj);

            obj = new Edit("txtNO_OFFICETEL","395","116","191","20",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("25");
            obj.set_readonly("true");
            this.divData.addChild(obj.name, obj);

            obj = new Edit("txtDS_EMAIL","395","145","191","20",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("26");
            obj.set_readonly("true");
            this.divData.addChild(obj.name, obj);

            obj = new Edit("txtDS_CANCEL","92","204","498","100",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("27");
            this.divData.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this
            obj = new Layout("default","",this._adjust_width,this._adjust_height,this,function(p){});
            this.addLayout(obj.name, obj);
            
            // BindItem Information
            obj = new BindItem("item0","divData.form.txtDT_CONTRACT","value","dsList","DT_CONTRACT");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item1","divData.form.txtNO_JUMIN","value","dsList","NO_JUMIN");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item2","divData.form.txtNO_TEL","value","dsList","NO_TEL");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item3","divData.form.txtNO_MOBILE","value","dsList","NO_MOBILE");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item4","divData.form.txtDS_CONTRACTOR","value","dsList","DS_CONTRACTOR");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item5","divData.form.txtNO_OFFICETEL","value","dsList","NO_OFFICETEL");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item6","divData.form.txtDS_EMAIL","value","dsList","DS_EMAIL");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item7","divData.form.txtDS_CANCEL","value","dsList","DS_CANCEL");
            this.addChild(obj.name, obj);
            obj.bind();
            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script
        this.registerScript("DLB_DLGCONTRACTRETRACT.xfdl", function() {
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

        	if (this.getOwnerFrame().CD_ACNTUNIT.length > 0) {
        		this.ACNTUNIT = this.getOwnerFrame().CD_ACNTUNIT.substr(0, 6);
        		this.GUBUN = this.getOwnerFrame().CD_ACNTUNIT.substr(6, 1);
        		this.CHASU = this.getOwnerFrame().CD_ACNTUNIT.substr(7, 2);
        	}
        	this.NO_DONG = this.getOwnerFrame().DONG;
        	this.NO_FLOOR = this.getOwnerFrame().FLOOR;
        	this.NO_HO = this.getOwnerFrame().HO;
        	this.NO_UNIONMEMBER = this.getOwnerFrame().NO_UNIONMEMBER;
        	this.CD_ACNTUNIT = this.getOwnerFrame().CD_ACNTUNIT;
        	this.NO_SIZE = this.getOwnerFrame().NO_SIZE;
        	this.TY_TYPE = this.getOwnerFrame().TY_TYPE;
        	this.RT_OPTION = this.getOwnerFrame().RT_OPTION;

        	this.dsList.setColumn(0, "DT_CONTRACT", this.getOwnerFrame().DT_CONTRACT);
        	this.dsList.setColumn(0, "DS_CONTRACTOR", this.getOwnerFrame().DS_CONTRACTOR);
        	this.dsList.setColumn(0, "NO_JUMIN", this.getOwnerFrame().NO_JUMIN);
        	this.dsList.setColumn(0, "NO_OFFICETEL", this.getOwnerFrame().NO_OFFICETEL);
        	this.dsList.setColumn(0, "NO_TEL", this.getOwnerFrame().NO_TEL);
        	this.dsList.setColumn(0, "DS_EMAIL", this.getOwnerFrame().DS_EMAIL);
        	this.dsList.setColumn(0, "NO_MOBILE", this.getOwnerFrame().NO_MOBILE);

        	trace("dsList>>>" + this.dsList.saveXML());

        };

        /************************************************************************
         * 변수 선언
         ************************************************************************/
        this.fnSetVariable = function() {
         	this.txtDT_CONTRACT = this.divData.form.txtDT_CONTRACT;
        	this.txtDS_CONTRACTOR = this.divData.form.txtDS_CONTRACTOR;
        	this.txtNO_JUMIN = this.divData.form.txtNO_JUMIN;
        	this.txtNO_OFFICETEL = this.divData.form.txtNO_OFFICETEL;
        	this.txtNO_TEL = this.divData.form.txtNO_TEL;
        	this.txtDS_EMAIL = this.divData.form.txtDS_EMAIL;
        	this.txtNO_MOBILE = this.divData.form.txtNO_MOBILE;
        	this.txtDS_CANCEL= this.divData.form.txtDS_CANCEL;

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
        	this.dsSave.addColumn("CD_ACNTUNIT", "string");
        	this.dsSave.addColumn("TY_GUBUN", "string");
        	this.dsSave.addColumn("NO_CHASU", "string");
        	this.dsSave.addColumn("NO_DONG", "string");
        	this.dsSave.addColumn("NO_FLOOR", "string");
        	this.dsSave.addColumn("NO_HO", "string");
        	this.dsSave.addColumn("NO_SIZE", "bigdecimal");
        	this.dsSave.addColumn("TY_TYPE", "string");
        	this.dsSave.addColumn("TY_DISTRICT", "string");
        	this.dsSave.addColumn("RT_OPTION", "string");
        	this.dsSave.addColumn("ID_UPDATE", "string");
        	this.dsSave.addColumn("DS_CANCEL", "string");

        }

        /************************************************************************
         * Validate
         ************************************************************************/
        this.fnSaveValidate = function() {
        	var validate = true;
        	var strMsg = "";
        	if (this.gfnIsNull(this.dsList.getColumn(0, "DS_CANCEL"))) {
        		strMsg += "취소사유를 입력하지 않았습니다!\n";
        		this.txtDS_CANCEL.setFocus();
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
        this.fnBeforeUserDataSetParam = function(id, dsUserParam, nrow) {

        };



        /************************************************************************
         * 콜백 이벤트
         ************************************************************************/
        this.fnCallback = function(svcID, errorCode, errorMsg) {
        	//if(svcID == "select"){
        	if(svcID == "save"){
        		if (errorCode == 0) {
        // 			this.fnCallback = function() {
        // 				//this.gfnSetFormStatus(this);
        // 				this.getParentContext().close(true);
        // 			}
        			this.getParentContext().close(true);
        		}
        		else {
        			this.gfnAlert(errorMsg);
        		}
         	}
        }

        /************************************************************************
         * 기타 이벤트
         ************************************************************************/
        this.dsList_onvaluechanged = function(obj,e) {

        };

        this.fnSave = function() {

         	this.dsSave.clearData();
         	this.dsSave.addRow();

        	this.dsSave.setColumn(0, "CD_ACNTUNIT", this.ACNTUNIT);
        	this.dsSave.setColumn(0, "TY_GUBUN", this.GUBUN);
        	this.dsSave.setColumn(0, "NO_CHASU", this.CHASU);
        	this.dsSave.setColumn(0, "NO_DONG", this.NO_DONG);
        	this.dsSave.setColumn(0, "NO_FLOOR", this.NO_FLOOR);
        	this.dsSave.setColumn(0, "NO_HO", this.NO_HO);
        	this.dsSave.setColumn(0, "NO_SIZE", this.NO_SIZE);
        	this.dsSave.setColumn(0, "TY_TYPE", this.TY_TYPE);
        	this.dsSave.setColumn(0, "TY_DISTRICT", "");
        	this.dsSave.setColumn(0, "RT_OPTION", this.RT_OPTION);
        	this.dsSave.setColumn(0, "ID_UPDATE", this.AuthClient.ID_USER);
        	this.dsSave.setColumn(0, "DS_CANCEL", this.dsList.getColumn(0, "DS_CANCEL"));

        	var strSvcId    = "save";
        	var strSvcType  = "save";
        	var inProc		= "_dsProc";
        	var inData      = "save=dsSave";
        	var outData     = "";
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
        	if(!this.fnSaveValidate()) return;

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
            this.dsList.addEventHandler("onvaluechanged",this.dsList_onvaluechanged,this);
        };
        this.loadIncludeScript("DLB_DLGCONTRACTRETRACT.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
