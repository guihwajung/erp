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
            this.set_titletext("자동전표 코드등록");
            if (Form == this.constructor)
            {
                this._setFormPosition(1400,720);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("dsList", this);
            obj._setContents("<ColumnInfo><Column id=\"CD_ACNTUNIT\" type=\"STRING\" size=\"256\"/><Column id=\"DS_CONTRACTOR_ADDR\" type=\"STRING\" size=\"256\"/><Column id=\"DS_CONTRACTOR\" type=\"STRING\" size=\"256\"/><Column id=\"NO_JUMIN\" type=\"STRING\" size=\"256\"/><Column id=\"DS_ADDRESS\" type=\"STRING\" size=\"256\"/><Column id=\"NO_DONG\" type=\"STRING\" size=\"256\"/><Column id=\"NO_FLOOR\" type=\"STRING\" size=\"256\"/><Column id=\"NO_HO\" type=\"STRING\" size=\"256\"/><Column id=\"DS_COMMENT\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row/></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("_dsProc", this);
            obj._setContents("<ColumnInfo><Column id=\"TARGET\" type=\"STRING\" size=\"256\"/><Column id=\"SP\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"TARGET\">select</Col><Col id=\"SP\">DLBPR_DUNNING_SELECT</Col></Row><Row><Col id=\"TARGET\">update</Col><Col id=\"SP\">DLBPR_DUNNING_UPDATE</Col></Row></Rows>");
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

            obj = new Static("sta00","0","0",null,"22","0",null,null,null,null,null,this.divData.form);
            obj.set_taborder("0");
            obj.set_text("수신인정보");
            obj.set_cssclass("sta_TITLE_Bg");
            this.divData.addChild(obj.name, obj);

            obj = new Static("sta01","0","sta00:10","100","30",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("1");
            obj.set_text("주소");
            obj.set_cssclass("sta_WF_tablelabel");
            this.divData.addChild(obj.name, obj);

            obj = new Static("sta02","sta01:-1","sta00:10",null,"30","0",null,null,null,null,null,this.divData.form);
            obj.set_taborder("2");
            obj.set_cssclass("sta_WF_tablebg");
            this.divData.addChild(obj.name, obj);

            obj = new Static("sta03","0","sta01:-1","100","30",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("3");
            obj.set_text("성명");
            obj.set_cssclass("sta_WF_tablelabel");
            this.divData.addChild(obj.name, obj);

            obj = new Static("sta04","sta03:-1","sta02:-1",null,"30","0",null,null,null,null,null,this.divData.form);
            obj.set_taborder("4");
            obj.set_cssclass("sta_WF_tablebg");
            this.divData.addChild(obj.name, obj);

            obj = new Static("sta05","0","sta03:-1","100","30",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("5");
            obj.set_text("주민등록번호");
            obj.set_cssclass("sta_WF_tablelabel");
            this.divData.addChild(obj.name, obj);

            obj = new Static("sta06","sta05:-1","sta04:-1",null,"30","0",null,null,null,null,null,this.divData.form);
            obj.set_taborder("6");
            obj.set_cssclass("sta_WF_tablebg");
            this.divData.addChild(obj.name, obj);

            obj = new Static("sta07","0","sta05:-1","100","30",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("7");
            obj.set_text("재산의표시");
            obj.set_cssclass("sta_WF_tablelabelE");
            this.divData.addChild(obj.name, obj);

            obj = new Static("sta08","sta07:-1","sta06:-1",null,"30","0",null,null,null,null,null,this.divData.form);
            obj.set_taborder("8");
            obj.set_cssclass("sta_WF_tablebg");
            this.divData.addChild(obj.name, obj);

            obj = new Static("sta09","0","160",null,"22","0",null,null,null,null,null,this.divData.form);
            obj.set_taborder("9");
            obj.set_text("독촉장내용");
            obj.set_cssclass("sta_TITLE_Bg");
            this.divData.addChild(obj.name, obj);

            obj = new Edit("ctxtDS_CONTRACTOR_ADDR","sta01:5","sta02:-25","500","20",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("10");
            obj.set_readonly("true");
            this.divData.addChild(obj.name, obj);

            obj = new Edit("ctxtDS_CONTRACTOR","sta03:5","sta04:-25","150","20",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("11");
            obj.set_readonly("true");
            this.divData.addChild(obj.name, obj);

            obj = new Edit("ctxtNO_JUMIN","sta05:5","sta06:-25","150","20",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("12");
            obj.set_readonly("true");
            this.divData.addChild(obj.name, obj);

            obj = new Edit("ctxtDS_ADDRESS","sta07:5","sta08:-25","300","20",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("13");
            this.divData.addChild(obj.name, obj);

            obj = new Edit("txtNO_DONG","ctxtDS_ADDRESS:10","sta08:-25","50","20",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("14");
            obj.set_readonly("true");
            this.divData.addChild(obj.name, obj);

            obj = new Static("sta41","txtNO_DONG:5","sta08:-25","20","20",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("15");
            obj.set_text("동");
            this.divData.addChild(obj.name, obj);

            obj = new Edit("txtNO_FLOOR","sta41:10","sta08:-25","50","20",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("16");
            obj.set_readonly("true");
            this.divData.addChild(obj.name, obj);

            obj = new Static("sta10","txtNO_FLOOR:5","sta08:-25","20","20",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("17");
            obj.set_text("층");
            this.divData.addChild(obj.name, obj);

            obj = new Edit("txtNO_HO","sta10:10","sta08:-25","50","20",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("18");
            obj.set_readonly("true");
            this.divData.addChild(obj.name, obj);

            obj = new Static("sta11","txtNO_HO:5","sta08:-25","20","20",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("19");
            obj.set_text("호");
            this.divData.addChild(obj.name, obj);

            obj = new TextArea("ctxtDS_COMMENT","5","sta09:10",null,null,"5","5",null,null,null,null,this.divData.form);
            obj.set_taborder("20");
            obj.set_wordWrap("char");
            this.divData.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this
            obj = new Layout("default","",this._adjust_width,this._adjust_height,this,function(p){});
            obj.set_stepcount("0");
            this.addLayout(obj.name, obj);
            
            // BindItem Information
            obj = new BindItem("item0","divData.form.ctxtDS_CONTRACTOR_ADDR","value","dsList","DS_CONTRACTOR_ADDR");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item1","divData.form.ctxtDS_CONTRACTOR","value","dsList","DS_CONTRACTOR");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item2","divData.form.ctxtNO_JUMIN","value","dsList","NO_JUMIN");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item3","divData.form.ctxtDS_ADDRESS","value","dsList","DS_ADDRESS");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item4","divData.form.txtNO_DONG","value","dsList","NO_DONG");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item5","divData.form.txtNO_FLOOR","value","dsList","NO_FLOOR");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item6","divData.form.txtNO_HO","value","dsList","NO_HO");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item7","divData.form.ctxtDS_COMMENT","value","dsList","DS_COMMENT");
            this.addChild(obj.name, obj);
            obj.bind();
            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script
        this.registerScript("DLC_DUNNINGLETTER.xfdl", function() {
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

        	this.dsList.set_enableevent(false);
        	this.dsList.setColumn(0, "CD_ACNTUNIT", this.getOwnerFrame().CD_ACNTUNIT);
        	this.dsList.setColumn(0, "NO_DONG", this.getOwnerFrame().NO_DONG);
        	this.dsList.setColumn(0, "NO_FLOOR", this.getOwnerFrame().NO_FLOOR);
        	this.dsList.setColumn(0, "NO_HO", this.getOwnerFrame().NO_HO);
        	this.dsList.set_enableevent(true);

        	if (!this.gfnIsNull(this.getOwnerFrame().CD_ACNTUNIT))
        		this.FormBtns.Select.click();
        };

        this.fnSetButton = function() {
        }

        this.fnSetExtendButton = function() {
        };

        this.fnSetVariable = function() {
        	this.ctxtDS_ADDRESS = this.divData.form.ctxtDS_ADDRESS;
        };

        this.fnSetEvent = function() {

        }

        this.fnSetParameter = function() {
        	this.dsSelect = new Dataset();
        	this.dsSelect.addColumn("CD_ACNTUNIT", "string");
        	this.dsSelect.addColumn("TY_GUBUN", "string");
        	this.dsSelect.addColumn("NO_CHASU", "string");
        	this.dsSelect.addColumn("NO_DONG", "string");
        	this.dsSelect.addColumn("NO_FLOOR", "string");
        	this.dsSelect.addColumn("NO_HO", "string");

        	this.dsUpdate = new Dataset();
        	this.dsUpdate.addColumn("CD_ACNTUNIT", "string");
        	this.dsUpdate.addColumn("TY_GUBUN", "string");
        	this.dsUpdate.addColumn("NO_CHASU", "string");
        	this.dsUpdate.addColumn("YN_OPTION", "string");
        	this.dsUpdate.addColumn("DS_ADDRESS", "string");
        	this.dsUpdate.addColumn("DS_COMMENT", "string");
        	this.dsUpdate.addColumn("DS_REQUEST", "string");
        	this.dsUpdate.addColumn("DS_REQUEST_BANK", "string");
        	this.dsUpdate.addColumn("ID_UPDATE", "string");
        }

        /************************************************************************
         * 컨트롤 이벤트
         ************************************************************************/
        this.fnSelect = function() {
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
        						strSvcType , 	// transaction을 요청할 구분
        						inProc,			// Procedure 정보 Dataset 이름
        						inData , 		// 입력값으로 보낼 dataset id , a=b형태로 실제이름과 입력이름을 매칭
        						outData , 		// 처리결과값으로 받을 dataset id, a=b형태로 실제이름과 입력이름을 매칭
        						strArg, 			// 입력갑스로 보낼 arguments, strFormData="20120607"
        						callBackFnc); // 통신방법 정의 [생략가능]
        }

        this.fnAdd = function() {
        	this.dsList.setColumn(0, "DS_ADDRESS", "");
        	this.dsList.setColumn(0, "DS_COMMENT", "");
        }

        this.fnDel = function() {
        	this.gfnConfirm("삭제 하시겠습니까?", "fnDel_callback");
        }

        this.fnDel_callback = function(strID, val) {
        	if (!val) return;

        	this.dsList.setColumn(0, "DS_ADDRESS", "");
        	this.dsList.setColumn(0, "DS_COMMENT", "");
        }

        this.fnSave = function() {
        	if (!this.fnSaveValidate()) return;

        	this.dsUpdate.clearData();

        	var nrow = this.dsUpdate.addRow();
        	this.dsUpdate.setColumn(nrow, "CD_ACNTUNIT", this.dsList.getColumn(0, "CD_ACNTUNIT").substr(0, 6));
        	this.dsUpdate.setColumn(nrow, "TY_GUBUN", this.dsList.getColumn(0, "CD_ACNTUNIT").substr(6, 1));
        	this.dsUpdate.setColumn(nrow, "NO_CHASU", this.dsList.getColumn(0, "CD_ACNTUNIT").substr(7, 2));
        	this.dsUpdate.setColumn(nrow, "YN_OPTION", "N");
        	this.dsUpdate.setColumn(nrow, "DS_ADDRESS", this.dsList.getColumn(0, "DS_ADDRESS"));
        	this.dsUpdate.setColumn(nrow, "DS_COMMENT", this.dsList.getColumn(0, "DS_COMMENT"));
        	this.dsUpdate.setColumn(nrow, "DS_REQUEST", "");
        	this.dsUpdate.setColumn(nrow, "DS_REQUEST_BANK", "");
        	this.dsUpdate.setColumn(nrow, "ID_UPDATE", this.AuthClient.ID_USER);

        	var strSvcId    = "save";
        	var strSvcType  = "save";
        	var inProc		= "_dsProc";
        	var inData      = "update=dsUpdate";
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

        this.fnExcel = function() {
        }

        this.fnPrint = function() {

        }

        /************************************************************************
         * Validate
         ************************************************************************/
        this.fnSaveValidate = function() {
        	var strMsg = "";
        	var validate = true;

        	if (this.gfnTrim(this.dsList.getColumn(0, "DS_ADDRESS")) == "") {
        		strMsg += "재산의 표시는 반드시 입력 하셔야 합니다.\n";
        		validate = false;
        	}
        	if (this.byte_length(this.gfnTrim(this.dsList.getColumn(0, "DS_ADDRESS"))) > 60) {
        		strMsg += "재산의 표시의 내용이 너무 많습니다.\n";
        		validate = false;
        	}

        	if (this.gfnTrim(this.dsList.getColumn(0, "DS_COMMENT")) == "") {
        		strMsg += "독촉장내용은 반드시 입력 하셔야 합니다.\n";
        		validate = false;
        	}
        	if (this.byte_length(this.gfnTrim(this.dsList.getColumn(0, "DS_COMMENT"))) > 2000) {
        		strMsg += "독촉장내용의 내용이 너무 많습니다.\n";
        		validate = false;
        	}

        	if (!validate) {
        		this.gfnAlert(strMsg);
        		return false;
        	}

        	return true;
        }

        /************************************************************************
         * 콜백 이벤트
         ************************************************************************/
        this.fnCallback = function(svcID, errorCode, errorMsg) {
        	if (svcID == "select") {
        		this.dsList.set_enableevent(false);
        		if (this.dsResult.rowcount > 0) {
        			this.dsList.setColumn(0, "DS_CONTRACTOR_ADDR", this.dsResult.getColumn(0, "주소"));
        			this.dsList.setColumn(0, "DS_CONTRACTOR", this.dsResult.getColumn(0, "성명"));
        			this.dsList.setColumn(0, "NO_JUMIN", this.dsResult.getColumn(0, "주민번호"));
        			this.dsList.setColumn(0, "DS_ADDRESS", this.dsResult.getColumn(0, "재산의표시"));
        			this.dsList.setColumn(0, "DS_COMMENT", this.dsResult.getColumn(0, "DS_COMMENT"));
        		}

        		if (this.dsList.getColumn(0, "NO_JUMIN").length == 13) {
        			this.dsList.setColumn(0, "NO_JUMIN", this.dsList.getColumn(0, "NO_JUMIN").substr(0, 6) + "-" + this.dsList.getColumn(0, "NO_JUMIN").substr(6))
        		}
        		this.dsList.set_enableevent(true);
        	}
        	else if (svcID == "save") {
        		if (errorCode == 0) {
        			this.FormBtns.Select.click();
        		}
        		else {
        			this.gfnAlert(errorMsg);
        		}
        	}
        }

        /************************************************************************
         * 코드파인드 이벤트
         ************************************************************************/

        /************************************************************************
         * 그리드 이벤트
         ************************************************************************/

        /************************************************************************
         * 기타 이벤트
         ************************************************************************/
        this.dsList_onvaluechanged = function(obj,e) {
        	if (e.oldvalue != e.newvalue) {
        		this.gfnSetFormStatus(this, "U");
        	}
        };

        this.byte_length = function(str) {
        	var count = 0;
        	var ch = '';

        	for(var i = 0; i < str.length; i++) {
        		ch = str.charAt(i);
        		if(escape(ch).length == 6) {
        			count ++;
        		}
        		count ++;
        	}
        	return count;
        }

        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.form_onload,this);
            this.dsList.addEventHandler("onvaluechanged",this.dsList_onvaluechanged,this);
        };
        this.loadIncludeScript("DLC_DUNNINGLETTER.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
