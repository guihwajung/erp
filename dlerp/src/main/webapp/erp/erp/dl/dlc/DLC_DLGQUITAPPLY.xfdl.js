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
            this.set_titletext("보증금 특별수납");
            this.getSetter("maxwidth").set("400");
            this.getSetter("maxheight").set("350");
            if (Form == this.constructor)
            {
                this._setFormPosition(400,310);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("dsList", this);
            obj._setContents("<ColumnInfo><Column id=\"CD_ACNTUNIT\" type=\"STRING\" size=\"256\"/><Column id=\"NO_DONG\" type=\"STRING\" size=\"256\"/><Column id=\"NO_FLOOR\" type=\"STRING\" size=\"256\"/><Column id=\"NO_HO\" type=\"STRING\" size=\"256\"/><Column id=\"DS_DONGHO\" type=\"STRING\" size=\"256\"/><Column id=\"DS_CONTRACTOR\" type=\"STRING\" size=\"256\"/><Column id=\"DT_OUT\" type=\"STRING\" size=\"256\"/><Column id=\"DS_REMARK\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row/></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("_dsProc", this);
            obj._setContents("<ColumnInfo><Column id=\"TARGET\" type=\"STRING\" size=\"256\"/><Column id=\"SP\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"TARGET\">select</Col><Col id=\"SP\">DLCPR_QUITAPPLY_SELECT</Col></Row><Row><Col id=\"TARGET\">insert</Col><Col id=\"SP\">DLCPR_QUITAPPLY_INSERT</Col></Row><Row><Col id=\"TARGET\">update</Col><Col id=\"SP\">DLCPR_QUITAPPLY_UPDATE</Col></Row><Row><Col id=\"TARGET\">delete</Col><Col id=\"SP\">DLCPR_QUITAPPLY_CANCEL</Col></Row></Rows>");
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
            obj.set_text("퇴거신청");
            obj.set_cssclass("sta_TITLE_Bg");
            obj.set_textAlign("left");
            this.divData.addChild(obj.name, obj);

            obj = new Static("staSunapInfo","0","staTITLE:5",null,"22","0",null,null,null,null,null,this.divData.form);
            obj.set_taborder("12");
            obj.set_text("퇴거신청");
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
            obj.set_text("퇴거자 성명");
            obj.set_cssclass("sta_WF_tablelabel");
            this.divData.addChild(obj.name, obj);

            obj = new Static("sta03","sta02:-1","sta01:-1",null,"30","0",null,null,null,null,null,this.divData.form);
            obj.set_taborder("6");
            obj.set_cssclass("sta_WF_tablebg");
            obj.set_text("");
            this.divData.addChild(obj.name, obj);

            obj = new Static("sta04","0","sta02:-1","100","30",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("7");
            obj.set_text("퇴거신청일자");
            obj.set_cssclass("sta_WF_tablelabel");
            this.divData.addChild(obj.name, obj);

            obj = new Static("sta05","sta04:-1","sta03:-1",null,"30","0",null,null,null,null,null,this.divData.form);
            obj.set_taborder("8");
            obj.set_cssclass("sta_WF_tablebg");
            obj.set_text("");
            this.divData.addChild(obj.name, obj);

            obj = new Static("sta06","0","sta04:-1","100","60",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("9");
            obj.set_text("퇴거사유");
            obj.set_cssclass("sta_WF_tablelabelE");
            this.divData.addChild(obj.name, obj);

            obj = new Static("sta07","sta06:-1","sta05:-1",null,"60","0",null,null,null,null,null,this.divData.form);
            obj.set_taborder("10");
            obj.set_cssclass("sta_WF_tablebg");
            obj.set_text("");
            this.divData.addChild(obj.name, obj);

            obj = new Button("btnOK","114","250","60","27",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("3");
            obj.set_text("확인");
            this.divData.addChild(obj.name, obj);

            obj = new Button("btnCANCLE","btnOK:30","250","60","27",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("4");
            obj.set_text("취소");
            this.divData.addChild(obj.name, obj);

            obj = new Static("staDS_DONGHO","sta00:5","sta01:-25",null,"20","5",null,null,null,null,null,this.divData.form);
            obj.set_taborder("15");
            this.divData.addChild(obj.name, obj);

            obj = new Edit("txtDS_CONTRACTOR","sta02:5","sta03:-25",null,"20","5",null,null,null,null,null,this.divData.form);
            obj.set_taborder("14");
            obj.set_readonly("true");
            this.divData.addChild(obj.name, obj);

            obj = new Calendar("tclDT_OUT","sta04:5","sta05:-25","105","20",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("11");
            obj.set_dateformat("yyyy-MM-dd");
            obj.set_editformat("yyyyMMdd");
            obj.set_autoselect("true");
            this.divData.addChild(obj.name, obj);

            obj = new TextArea("txtDS_REMARK","sta06:5","sta07:-55",null,"50","5",null,null,null,null,null,this.divData.form);
            obj.set_taborder("13");
            this.divData.addChild(obj.name, obj);

            obj = new Button("btnQuitApplyCancel",null,"52","100","27","5",null,null,null,null,null,this.divData.form);
            obj.set_taborder("16");
            obj.set_text("퇴거신청취소");
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

            obj = new BindItem("item2","divData.form.tclDT_OUT","value","dsList","DT_OUT");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item3","divData.form.txtDS_REMARK","value","dsList","DS_REMARK");
            this.addChild(obj.name, obj);
            obj.bind();
            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script
        this.registerScript("DLC_DLGQUITAPPLY.xfdl", function() {
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
        	this.dsList.setColumn(0, "DS_DONGHO", this.getOwnerFrame().DONG_FLOOR_HO);
        	this.dsList.setColumn(0, "DS_CONTRACTOR", this.getOwnerFrame().DS_CONTRACTOR);

        	this.dsList.setColumn(0, "DT_OUT", this.gfnGetDate());

        	this.saveFlag = this.getOwnerFrame().TY_STATE == "해지신청" ? "U" : "I";

        	this.fnSelect();
        };

        /************************************************************************
         * 변수 선언
         ************************************************************************/
        this.fnSetVariable = function() {
        	this.staDS_DONGHO = this.divData.form.staDS_DONGHO;
        	this.txtDS_CONTRACTOR = this.divData.form.txtDS_CONTRACTOR;
        	this.tclDT_QUIT = this.divData.form.tclDT_QUIT;
        	this.txtDS_REMARK = this.divData.form.txtDS_REMARK;
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
        	this.dsSelect = new Dataset();
        	this.dsSelect.addColumn("CD_ACNTUNIT", "string");
        	this.dsSelect.addColumn("TY_GUBUN", "string");
        	this.dsSelect.addColumn("NO_CHASU", "string");
        	this.dsSelect.addColumn("NO_DONG", "string");
        	this.dsSelect.addColumn("NO_FLOOR", "string");
        	this.dsSelect.addColumn("NO_HO", "string");

        	this.dsInsert = new Dataset();
        	this.dsInsert.addColumn("CD_ACNTUNIT", "string");
        	this.dsInsert.addColumn("TY_GUBUN", "string");
        	this.dsInsert.addColumn("NO_CHASU", "string");
        	this.dsInsert.addColumn("NO_DONG", "string");
        	this.dsInsert.addColumn("NO_FLOOR", "string");
        	this.dsInsert.addColumn("NO_HO", "string");
        	this.dsInsert.addColumn("DT_OUT", "string");
        	this.dsInsert.addColumn("DS_REMARK", "string");
        	this.dsInsert.addColumn("ID_INSERT", "string");

        	this.dsUpdate = new Dataset();
        	this.dsUpdate.addColumn("CD_ACNTUNIT", "string");
        	this.dsUpdate.addColumn("TY_GUBUN", "string");
        	this.dsUpdate.addColumn("NO_CHASU", "string");
        	this.dsUpdate.addColumn("NO_DONG", "string");
        	this.dsUpdate.addColumn("NO_FLOOR", "string");
        	this.dsUpdate.addColumn("NO_HO", "string");
        	this.dsUpdate.addColumn("DT_OUT", "string");
        	this.dsUpdate.addColumn("DS_REMARK", "string");
        	this.dsUpdate.addColumn("ID_INSERT", "string");

        	this.dsDelete = new Dataset();
        	this.dsDelete.addColumn("CD_ACNTUNIT", "string");
        	this.dsDelete.addColumn("TY_GUBUN", "string");
        	this.dsDelete.addColumn("NO_CHASU", "string");
        	this.dsDelete.addColumn("NO_DONG", "string");
        	this.dsDelete.addColumn("NO_FLOOR", "string");
        	this.dsDelete.addColumn("NO_HO", "string");
        	this.dsDelete.addColumn("ID_UPDATE", "string");
        }

        /************************************************************************
         * 버튼 이벤트
         ************************************************************************/
        this.fnSelect = function() {
        	if (!this.fnSelectValidate()) return;

        	this.dsSelect.clearData();
        	this.dsSelect.addRow();
        	this.dsSelect.setColumn(0, "CD_ACNTUNIT", this.dsList.getColumn(0, "CD_ACNTUNIT").substr(0, 6));
        	this.dsSelect.setColumn(0, "TY_GUBUN", this.dsList.getColumn(0, "CD_ACNTUNIT").substr(6, 1));
        	this.dsSelect.setColumn(0, "NO_CHASU", this.dsList.getColumn(0, "CD_ACNTUNIT").substr(7, 2));
        	this.dsSelect.setColumn(0, "NO_DONG", this.dsList.getColumn(0, "NO_DONG"));
        	this.dsSelect.setColumn(0, "NO_FLOOR", this.dsList.getColumn(0, "NO_FLOOR"));
        	this.dsSelect.setColumn(0, "NO_HO", this.dsList.getColumn(0, "NO_HO"));

        	var strSvcId    = "select";
        	var strSvcType  = "grid";
        	var inProc		= "_dsProc";
        	var inData      = "select=dsSelect";
        	var outData     = "dsResult=select0";
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

        this.fnSave = function() {
        	if (!this.fnSaveValidate()) return;

        	var inData = "";

        	this.dsInsert.clearData();
        	this.dsUpdate.clearData();
        	this.dsDelete.clearData();

        	if (this.saveFlag == "I") {
        		this.dsInsert.clearData();
        		var nrow = this.dsInsert.addRow();
        		this.dsInsert.setColumn(nrow, "CD_ACNTUNIT", this.dsList.getColumn(0, "CD_ACNTUNIT").substr(0, 6));
        		this.dsInsert.setColumn(nrow, "TY_GUBUN", this.dsList.getColumn(0, "CD_ACNTUNIT").substr(6, 1));
        		this.dsInsert.setColumn(nrow, "NO_CHASU", this.dsList.getColumn(0, "CD_ACNTUNIT").substr(7, 2));
        		this.dsInsert.setColumn(nrow, "NO_DONG", this.dsList.getColumn(0, "NO_DONG"));
        		this.dsInsert.setColumn(nrow, "NO_FLOOR", this.dsList.getColumn(0, "NO_FLOOR"));
        		this.dsInsert.setColumn(nrow, "NO_HO", this.dsList.getColumn(0, "NO_HO"));
        		this.dsInsert.setColumn(nrow, "DT_OUT", this.dsList.getColumn(0, "DT_OUT"));
        		this.dsInsert.setColumn(nrow, "DS_REMARK", this.dsList.getColumn(0, "DS_REMARK"));
        		this.dsInsert.setColumn(nrow, "ID_INSERT", this.AuthClient.ID_USER);

        		inData      = "insert=dsInsert";
        	}
        	else if (this.saveFlag == "U") {
        		this.dsUpdate.clearData();
        		var nrow = this.dsUpdate.addRow();
        		this.dsUpdate.setColumn(nrow, "CD_ACNTUNIT", this.dsList.getColumn(0, "CD_ACNTUNIT").substr(0, 6));
        		this.dsUpdate.setColumn(nrow, "TY_GUBUN", this.dsList.getColumn(0, "CD_ACNTUNIT").substr(6, 1));
        		this.dsUpdate.setColumn(nrow, "NO_CHASU", this.dsList.getColumn(0, "CD_ACNTUNIT").substr(7, 2));
        		this.dsUpdate.setColumn(nrow, "NO_DONG", this.dsList.getColumn(0, "NO_DONG"));
        		this.dsUpdate.setColumn(nrow, "NO_FLOOR", this.dsList.getColumn(0, "NO_FLOOR"));
        		this.dsUpdate.setColumn(nrow, "NO_HO", this.dsList.getColumn(0, "NO_HO"));
        		this.dsUpdate.setColumn(nrow, "DT_OUT", this.dsList.getColumn(0, "DT_OUT"));
        		this.dsUpdate.setColumn(nrow, "DS_REMARK", this.dsList.getColumn(0, "DS_REMARK"));
        		this.dsUpdate.setColumn(nrow, "ID_INSERT", this.AuthClient.ID_USER);

        		inData      = "update=dsUpdate";
        	}
        	else if (this.saveFlag == "D") {
        		this.dsDelete.clearData();
        		var nrow = this.dsDelete.addRow();
        		this.dsDelete.setColumn(nrow, "CD_ACNTUNIT", this.dsList.getColumn(0, "CD_ACNTUNIT").substr(0, 6));
        		this.dsDelete.setColumn(nrow, "TY_GUBUN", this.dsList.getColumn(0, "CD_ACNTUNIT").substr(6, 1));
        		this.dsDelete.setColumn(nrow, "NO_CHASU", this.dsList.getColumn(0, "CD_ACNTUNIT").substr(7, 2));
        		this.dsDelete.setColumn(nrow, "NO_DONG", this.dsList.getColumn(0, "NO_DONG"));
        		this.dsDelete.setColumn(nrow, "NO_FLOOR", this.dsList.getColumn(0, "NO_FLOOR"));
        		this.dsDelete.setColumn(nrow, "NO_HO", this.dsList.getColumn(0, "NO_HO"));
        		this.dsDelete.setColumn(nrow, "ID_UPDATE", this.AuthClient.ID_USER);

        		inData      = "delete=dsDelete";
        	}

        	var strSvcId    = "save";
        	var strSvcType  = "save";
        	var inProc		= "_dsProc";
        	//var inData      = "insert=dsInsert update=dsUpdate delete=dsDelete";
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
        this.fnSelectValidate = function() {
        	var validate = true;
        	if (this.gfnIsNull(this.dsList.getColumn(0, "CD_ACNTUNIT"))) {
        		this.gfnAlert("사업지정보가 정확하지 않습니다!!");
        		validate = false;
        	}
        	else if (this.gfnIsNull(this.dsList.getColumn(0, "NO_DONG")) || this.gfnIsNull(this.dsList.getColumn(0, "NO_FLOOR")) || this.gfnIsNull(this.dsList.getColumn(0, "NO_HO"))) {
        		this.gfnAlert("동층호정보가 정확하지 않습니다!!");
        		validate = false;
        	}
        	return validate;
        };

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
        	if (this.gfnIsNull(this.dsList.getColumn(0, "DT_OUT"))) {
        		strMsg += "퇴거신청일자가 존재하지 않습니다.\n";
        		validate = false;
        	}
        	if (this.gfnIsNull(this.dsList.getColumn(0, "DS_REMARK"))) {
        		strMsg += "퇴거사유가 존재하지 않습니다.\n";
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
        	if (svcID == "select"){
        		if (this.dsResult.rowcount > 0) {
        			this.dsList.setColumn(0, "DT_OUT", this.dsResult.getColumn(0, "DT_APPQUIT"));
        			this.dsList.setColumn(0, "DS_REMARK", this.dsResult.getColumn(0, "RM_APPQUIT"));
        		}
         	}
        	else if (svcID == "save") {
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

        this.btnQuitApplyCancel_onclick = function(obj,e) {
        	if (!this.fnSelectValidate()) return;

        	this.gfnConfirm("퇴거신청자 " + this.dsList.getColumn(0, "DS_CONTRACTOR") + "의 퇴거신청을 취소합니다.", "btnQuitApplyCancel_callback");
        };

        this.btnQuitApplyCancel_callback = function(strID, val) {
        	if (val) {
        		this.saveFlag = "D";
        		this.fnSave();
        	}
        	else {
        		this.getParentContext().close(false);
        	}
        }

        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.form_onload,this);
            this.divData.form.btnOK.addEventHandler("onclick",this.btnOK_onclick,this);
            this.divData.form.btnCANCLE.addEventHandler("onclick",this.btnCANCLE_onclick,this);
            this.divData.form.tclDT_OUT.addEventHandler("onchanged",this.fnSearchInit,this);
            this.divData.form.btnQuitApplyCancel.addEventHandler("onclick",this.btnQuitApplyCancel_onclick,this);
        };
        this.loadIncludeScript("DLC_DLGQUITAPPLY.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
