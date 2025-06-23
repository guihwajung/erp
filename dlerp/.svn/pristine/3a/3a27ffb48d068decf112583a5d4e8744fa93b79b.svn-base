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
            obj._setContents("");
            this.addChild(obj.name, obj);


            obj = new Dataset("_dsProc", this);
            obj._setContents("<ColumnInfo><Column id=\"TARGET\" type=\"STRING\" size=\"256\"/><Column id=\"SP\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"TARGET\">select</Col><Col id=\"SP\">DLCPR_QUITSTATE_SELECT</Col></Row><Row><Col id=\"TARGET\">execute</Col><Col id=\"SP\">DLBPR_CANCEL_RESTORE_DAEBANG</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsSearch", this);
            obj._setContents("<ColumnInfo><Column id=\"CD_ACNTUNIT\" type=\"STRING\" size=\"256\"/><Column id=\"DS_ACNTUNIT\" type=\"STRING\" size=\"256\"/><Column id=\"NO_DONG\" type=\"STRING\" size=\"256\"/><Column id=\"NO_FLOOR\" type=\"STRING\" size=\"256\"/><Column id=\"NO_HO\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"CD_ACNTUNIT\"/><Col id=\"DS_ACNTUNIT\"/><Col id=\"NO_DONG\"/></Row></Rows>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Div("divSearch","0.0","10.0",null,"46.0","0",null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_cssclass("div_SEARCH_Bg");
            obj.set_formscrolltype("none");
            obj.set_text("");
            this.addChild(obj.name, obj);

            obj = new Static("staCD_ACNTUNIT","0.0","10.0","105.0","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("0");
            obj.set_text("사업지코드");
            obj.set_cssclass("sta_WF_SchLabelE");
            this.divSearch.addChild(obj.name, obj);

            obj = new Div("ccfCD_ACNTUNIT","staCD_ACNTUNIT:0.0","10.0","350","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.getSetter("CodeFindName").set("DLX_CFLEASESITE_CODEFIND");
            obj.getSetter("CDTextWidth").set("70");
            obj.set_taborder("1");
            obj.set_url("cmm::cmmCodeFind.xfdl");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("sta03","ccfCD_ACNTUNIT:0.0","10.0","105.0","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("2");
            obj.set_text("동층호");
            obj.set_cssclass("sta_WF_SchLabel");
            this.divSearch.addChild(obj.name, obj);

            obj = new Edit("ctxtNO_DONG","sta03:0.0","10.0","40","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("3");
            obj.set_maxlength("4");
            this.divSearch.addChild(obj.name, obj);

            obj = new Edit("ctxtNO_FLOOR","ctxtNO_DONG:0.0","10.0","30","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("4");
            obj.set_maxlength("2");
            this.divSearch.addChild(obj.name, obj);

            obj = new Edit("ctxtNO_HO","ctxtNO_FLOOR:0.0","10.0","40","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("5");
            obj.set_maxlength("3");
            this.divSearch.addChild(obj.name, obj);

            obj = new Button("cbtnNO_DONGHO","ctxtNO_HO:0.0","10.0","25","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("6");
            obj.set_cssclass("btn_CF_Search");
            this.divSearch.addChild(obj.name, obj);

            obj = new Div("divData","0","divSearch:10",null,null,"0","0",null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_cssclass("div_DATA_Bg");
            obj.set_text("");
            this.addChild(obj.name, obj);

            obj = new Grid("objGrid","0","0",null,null,"0","0",null,null,null,null,this.divData.form);
            obj.set_taborder("0");
            obj._setContents("");
            this.divData.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this
            obj = new Layout("default","",this._adjust_width,this._adjust_height,this,function(p){});
            obj.set_stepcount("0");
            this.addLayout(obj.name, obj);
            
            // BindItem Information
            obj = new BindItem("item0","divSearch.form.ccfCD_ACNTUNIT.form.CDTextBox","value","dsSearch","CD_ACNTUNIT");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item1","divSearch.form.ccfCD_ACNTUNIT.form.DSTextBox","value","dsSearch","DS_ACNTUNIT");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item2","divSearch.form.ctxtNO_DONG","value","dsSearch","NO_DONG");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item3","divSearch.form.ctxtNO_FLOOR","value","dsSearch","NO_FLOOR");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item4","divSearch.form.ctxtNO_HO","value","dsSearch","NO_HO");
            this.addChild(obj.name, obj);
            obj.bind();
            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {
            this._addPreloadList("fdl","cmm::cmmCodeFind.xfdl");
        };
        
        // User Script
        this.registerScript("DLC_QUITSTATE.xfdl", function() {
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
        };

        this.fnSetButton = function() {
        }

        this.fnSetExtendButton = function() {
        	this.btnDetail = this.gfnFormButtonAdd("Detail", "fnDetail");
        	this.btnRestore = this.gfnFormButtonAdd("Restore", "fnRestore");
        	this.btnQuitPic = this.gfnFormButtonAdd("QuitPic", "fnQuitPic");
        };

        this.fnSetVariable = function() {
        	this.ccfCD_ACNTUNIT = this.divSearch.form.ccfCD_ACNTUNIT;
        	this.ctxtNO_DONG = this.divSearch.form.ctxtNO_DONG;
        	this.ctxtNO_FLOOR = this.divSearch.form.ctxtNO_FLOOR;
        	this.ctxtNO_HO = this.divSearch.form.ctxtNO_HO;
        	this.cbtnNO_DONGHO = this.divSearch.form.cbtnNO_DONGHO;

        	this.dxGrid = this.divData.form.objGrid;
        };

        this.fnSetEvent = function() {
        	this.gfnGridInit(this.dxGrid, this.dsList, "DL", "DLC_QUITSTATE");

        	this.dxGrid.addEventHandler("oncelldblclick", this.dxGrid_oncelldblclick, this);

        	this.ccfCD_ACNTUNIT.BeforeUserDataSetParam = "fnBeforeUserDataSetParam";
        	this.ccfCD_ACNTUNIT.AfterCDTextChanged = "fnAfterCDTextChanged";

        }

        this.fnSetParameter = function() {
        	this.dsSelect = new Dataset();
        	this.dsSelect.addColumn("CD_ACNTUNIT", "string");
        	this.dsSelect.addColumn("TY_GUBUN", "string");
        	this.dsSelect.addColumn("NO_CHASU", "string");
        	this.dsSelect.addColumn("NO_DONG", "string");
        	this.dsSelect.addColumn("NO_FLOOR", "string");
        	this.dsSelect.addColumn("NO_HO", "string");

        	this.dsExecute = new Dataset();
        	this.dsExecute.addColumn("CD_ACNTUNIT", "string");
        	this.dsExecute.addColumn("TY_GUBUN", "string");
        	this.dsExecute.addColumn("NO_CHASU", "string");
        	this.dsExecute.addColumn("NO_DONG", "string");
        	this.dsExecute.addColumn("NO_FLOOR", "string");
        	this.dsExecute.addColumn("NO_HO", "string");
        	this.dsExecute.addColumn("NO_UNIONMEMBER", "string");
        	this.dsExecute.addColumn("NO_CANCEL", "string");
        	this.dsExecute.addColumn("CD_SLIP", "string");
        	this.dsExecute.addColumn("ID_INSERT", "string");
        }

        /************************************************************************
         * 컨트롤 이벤트
         ************************************************************************/
        this.fnSelect = function() {
        	if (!this.fnSelectValidation()) return;

        	this.gfnGridBeforeSelect(this.dxGrid);

        	this.dsSelect.clearData();
        	this.dsSelect.addRow();
        	this.dsSelect.setColumn(0, "CD_ACNTUNIT", this.dsSearch.getColumn(0, "CD_ACNTUNIT").substr(0, 6));
        	this.dsSelect.setColumn(0, "TY_GUBUN", this.dsSearch.getColumn(0, "CD_ACNTUNIT").substr(6, 1));
        	this.dsSelect.setColumn(0, "NO_CHASU", this.dsSearch.getColumn(0, "CD_ACNTUNIT").substr(7, 2));
        	this.dsSelect.setColumn(0, "NO_DONG", this.dsSearch.getColumn(0, "NO_DONG"));
        	this.dsSelect.setColumn(0, "NO_FLOOR", this.dsSearch.getColumn(0, "NO_FLOOR"));
        	this.dsSelect.setColumn(0, "NO_HO", this.dsSearch.getColumn(0, "NO_HO"));

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

        this.fnAdd = function() {
        }

        this.fnDel = function() {
        }

        this.fnSave = function() {
        }

        this.fnExcel = function() {
        	this.gfnExcelExport(this.dxGrid);
        }

        this.fnPrint = function() {

        }

        /************************************************************************
         * Validate
         ************************************************************************/
        this.fnSelectValidation = function() {
        	var validate = true;
        	if (this.gfnIsNull(this.dsSearch.getColumn(0, "CD_ACNTUNIT"))) {
        		this.fnVaidateCallback = function() {
        			this.ccfCD_ACNTUNIT.form.CDTextBox.setFocus();
        		}
        		this.gfnAlert("사업지코드가 입력되지 않았습니다.", "fnVaidateCallback");
        	}
        	return validate;
        }

        /************************************************************************
         * 콜백 이벤트
         ************************************************************************/
        this.fnCallback = function(svcID, errorCode, errorMsg) {
        	if (svcID == "select") {
        		this.gfnGridAfterSelect(this.dxGrid);
        	}
        	else if (svcID == "execute") {
        		if (errorCode == 0) {
        			this.execute_callback = function() {
        			this.FormBtns.Select.click();
        			}
        			this.gfnAlert("작업에 성공하였습니다.", "execute_callback");
        		}
        		else {
        			this.gfnAlert(errorMsg);
        		}
        	}
        }

        /************************************************************************
         * 코드파인드 이벤트
         ************************************************************************/
        this.fnBeforeUserDataSetParam = function(id, dsUserParam, nrow) {
        	if (id == "ccfCD_ACNTUNIT") {
        		dsUserParam.setColumn(nrow, "FLAG", "A");
        		dsUserParam.setColumn(nrow, "CD_DEPT", this.AuthClient.CD_DEPT);
        		dsUserParam.setColumn(nrow, "ID_USER", this.AuthClient.ID_USER);
        		dsUserParam.setColumn(nrow, "ID_GROUP", this.FormInfo.ID_GROUP);
        		dsUserParam.setColumn(nrow, "GR_SEARCH", this.FormInfo.GR_SEARCH);
        		dsUserParam.setColumn(nrow, "YN_TOTALCHASU", "");
        	}

        	return true;
        };

        this.fnAfterCDTextChanged = function(id, codeFindData) {
        	var arr = codeFindData;

        	switch(id){
        		case "ccfCD_ACNTUNIT" :
        			this.dsSearch.setColumn(0, "NO_DONG", "");
        			this.dsSearch.setColumn(0, "NO_FLOOR", "");
        			this.dsSearch.setColumn(0, "NO_HO", "");
        			break;
        	}
        }

        /************************************************************************
         * 그리드 이벤트
         ************************************************************************/
        this.dxGrid_oncelldblclick = function(obj,e) {
        	if (!this.gfnGridIsRow(this.dxGrid)) return;

        	this.fnDetail();
        };

        /************************************************************************
         * 기타 이벤트
         ************************************************************************/
        this.dsSearch_onvaluechanged = function(obj,e) {
        	if(e.oldvalue != e.newvalue) {
        		this.gfnSetFormStatus(this);	// 폼상태 초기화
        		this.gfnGridClear(this.dxGrid);

        		if (e.columnid == "TY_BUNYANG") {
        			this.dsSearch.setColumn(0, "NO_DONG", "");
        			this.dsSearch.setColumn(0, "NO_FLOOR", "");
        			this.dsSearch.setColumn(0, "NO_HO", "");
        		}
        		if (e.columnid == "NO_DONG") {
        			this.dsSearch.setColumn(0, "NO_FLOOR", "");
        			this.dsSearch.setColumn(0, "NO_HO", "");
        		}
        		else if (e.columnid == "NO_FLOOR") {
        			this.dsSearch.setColumn(0, "NO_HO", "");
        		}
        	}
        };

        this.divSearch_ctxtNO_DONG_onkillfocus = function(obj,e) {
        	if (this.gfnIsNull(this.dsSearch.getColumn(0, "NO_DONG"))) return;
        	if (nexacro.isNumeric(this.dsSearch.getColumn(0, "NO_DONG"))) {
        		this.dsSearch.setColumn(0, "NO_DONG", this.dsSearch.getColumn(0, "NO_DONG").padLeft(4, "0"));
        	}
        };

        this.divSearch_ctxtNO_FLOOR_onkillfocus = function(obj,e) {
        	if (this.gfnIsNull(this.dsSearch.getColumn(0, "NO_FLOOR"))) return;
        	if (nexacro.isNumeric(this.dsSearch.getColumn(0, "NO_FLOOR"))) {
        		this.dsSearch.setColumn(0, "NO_FLOOR", this.dsSearch.getColumn(0, "NO_FLOOR").padLeft(2, "0"));
        	}
        };

        this.divSearch_ctxtNO_HO_onkillfocus = function(obj,e) {
        	if (this.gfnIsNull(this.dsSearch.getColumn(0, "NO_HO"))) return;
        	if (nexacro.isNumeric(this.dsSearch.getColumn(0, "NO_HO"))) {
        		this.dsSearch.setColumn(0, "NO_HO", this.dsSearch.getColumn(0, "NO_HO").padLeft(3, "0"));
        	}
        };

        this.divSearch_ctxt_onkeyup = function(obj,e) {
        //  	if (e.keycode == 112) {	//F1
        //  		this.divSearch_cbtnNO_DONGHO_onclick();
        //  	}
        	if (obj.value.length == obj.maxlength) {
        		switch (obj.id) {
        			case "ctxtNO_DONG":
        				this.ctxtNO_FLOOR.setFocus();
        				break;
        			case "ctxtNO_FLOOR":
        				this.ctxtNO_HO.setFocus();
        				break;
        			case "ctxtNO_HO":
        				this.cbtnNO_DONGHO.setFocus();
        				break;
        		}
        	}
        };

        this.divSearch_cbtnNO_DONGHO_onclick = function(obj,e) {
        	if (this.gfnIsNull(this.dsSearch.getColumn(0, "CD_ACNTUNIT"))) {
        		this.fnVaidateCallback = function() {
        			this.ccfCD_ACNTUNIT.form.CDTextBox.setFocus();
        		}
        		this.gfnAlert("사업지코드를 입력하세요!", "fnVaidateCallback");
        		return;
        	}

        	var param = {};
        	param.CD_ACNTUNIT = this.dsSearch.getColumn(0, "CD_ACNTUNIT");
        	param.FLAG = "1";

        	this.gfnFormOpen("DRI", "DRI_DONGHOCONTRACT", "fnDonghoPopupCallback", param);
        };

        this.fnDonghoPopupCallback = function(svcID, val) {
        	if (!val) return;

        	var json = JSON.parse(val);
        	if (json.DONG.length > 0) {
        		this.dsSearch.setColumn(0, "NO_DONG", json.DONG);
        		this.dsSearch.setColumn(0, "NO_FLOOR", json.FLOOR);
        		this.dsSearch.setColumn(0, "NO_HO", json.HO);
        	}
        }

        /************************************************************************
         * 확장 버튼 실행
         ************************************************************************/
         //상세정보
        this.fnDetail = function() {
        	if (this.dsList.rowcount <= 0) return;

        	var row = this.dsList.rowposition;

        	var param = {};
        	param.CD_ACNTUNIT = this.dsSearch.getColumn(0, "CD_ACNTUNIT");
        	param.NO_DONG = this.dsList.getColumn(row, "NO_DONG");
        	param.NO_FLOOR = this.dsList.getColumn(row, "NO_FLOOR");
        	param.NO_HO = this.dsList.getColumn(row, "NO_HO");
        	param.NO_QUIT = this.dsList.getColumn(row, "NO_QUIT");
        	var strText = this.dsList.getColumn(row, "NO_DONG") + "동 "
        				+ this.dsList.getColumn(row, "NO_FLOOR") + "층 "
        				+ this.dsList.getColumn(row, "NO_HO") + "호";
        	param.LABEL_TEXT_DONGHO = strText;

        	this.gfnFormOpen("DLC", "DLC_DLGQUITDETAIL", "", param);
        }

        //퇴거자복원
        this.fnRestore = function() {
        	this.gfnConfirm("퇴거자복원 작업을 수행하시겠습니까?", "fnRestore_callback");
        }

        this.fnRestore_callback = function(strID, val) {
        	if (!val) return;

        	this.dsExecute.clearData();
        	this.dsExecute.addRow();
        	this.dsExecute.setColumn(0, "CD_ACNTUNIT", this.dsSearch.getColumn(0, "CD_ACNTUNIT").substr(0, 6));
        	this.dsExecute.setColumn(0, "TY_GUBUN", this.dsSearch.getColumn(0, "CD_ACNTUNIT").substr(6, 1));
        	this.dsExecute.setColumn(0, "NO_CHASU", this.dsSearch.getColumn(0, "CD_ACNTUNIT").substr(7, 2));
        	this.dsExecute.setColumn(0, "NO_DONG", this.dsList.getColumn(this.dsList.rowposition, "NO_DONG"));
        	this.dsExecute.setColumn(0, "NO_FLOOR", this.dsList.getColumn(this.dsList.rowposition, "NO_FLOOR"));
        	this.dsExecute.setColumn(0, "NO_HO", this.dsList.getColumn(this.dsList.rowposition, "NO_HO"));
        	this.dsExecute.setColumn(0, "NO_UNIONMEMBER", "");
        	this.dsExecute.setColumn(0, "NO_CANCEL", this.dsList.getColumn(this.dsList.rowposition, "NO_QUIT"));
        	this.dsExecute.setColumn(0, "CD_SLIP", this.dsList.getColumn(this.dsList.rowposition, "CD_SLIP2"));
        	this.dsExecute.setColumn(0, "ID_INSERT", this.AuthClient.ID_USER);

        	var strSvcId    = "execute";
        	var strSvcType  = "save";
        	var inProc		= "_dsProc";
        	var inData      = "execute=dsExecute";
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

        this.fnQuitPic = function() {
        	if (this.dsList.rowcount <= 0) return;

        	var row = this.dsList.rowposition;

        	var param = {};
        	param.CD_ACNTUNIT = this.dsSearch.getColumn(0, "CD_ACNTUNIT");
        	param.NO_DONG = this.dsList.getColumn(row, "NO_DONG");
        	param.NO_FLOOR = this.dsList.getColumn(row, "NO_FLOOR");
        	param.NO_HO = this.dsList.getColumn(row, "NO_HO");
        	param.NO_QUIT = this.dsList.getColumn(row, "NO_QUIT");

        	this.gfnFormOpen("DLC", "DLC_DLGQUITPIC", "", param);
        }


        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.form_onload,this);
            this.divSearch.form.ctxtNO_DONG.addEventHandler("onkillfocus",this.divSearch_ctxtNO_DONG_onkillfocus,this);
            this.divSearch.form.ctxtNO_DONG.addEventHandler("onkeyup",this.divSearch_ctxt_onkeyup,this);
            this.divSearch.form.ctxtNO_FLOOR.addEventHandler("onkillfocus",this.divSearch_ctxtNO_FLOOR_onkillfocus,this);
            this.divSearch.form.ctxtNO_FLOOR.addEventHandler("onkeyup",this.divSearch_ctxt_onkeyup,this);
            this.divSearch.form.ctxtNO_HO.addEventHandler("onkillfocus",this.divSearch_ctxtNO_HO_onkillfocus,this);
            this.divSearch.form.ctxtNO_HO.addEventHandler("onkeyup",this.divSearch_ctxt_onkeyup,this);
            this.divSearch.form.cbtnNO_DONGHO.addEventHandler("onclick",this.divSearch_cbtnNO_DONGHO_onclick,this);
            this.dsSearch.addEventHandler("onvaluechanged",this.dsSearch_onvaluechanged,this);
        };
        this.loadIncludeScript("DLC_QUITSTATE.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
