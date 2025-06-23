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
                this._setFormPosition(1280,720);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("dsList", this);
            obj._setContents("");
            this.addChild(obj.name, obj);


            obj = new Dataset("_dsProc", this);
            obj._setContents("<ColumnInfo><Column id=\"TARGET\" type=\"STRING\" size=\"256\"/><Column id=\"SP\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"TARGET\">select</Col><Col id=\"SP\">DWDPR_FNDREQDPLN_SELECT</Col></Row><Row><Col id=\"TARGET\">save</Col><Col id=\"SP\">DWDPR_FNDREQDPLN_SAVE</Col></Row><Row><Col id=\"TARGET\">exec</Col><Col id=\"SP\">DWDPR_FNDREQDPLN_EXECUTE</Col></Row><Row><Col id=\"TARGET\">selectd</Col><Col id=\"SP\">DWDPR_FNDREQDPLN_SELECT</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsListSub", this);
            obj._setContents("");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsSearch", this);
            obj._setContents("<ColumnInfo><Column id=\"CD_SITE\" type=\"STRING\" size=\"256\"/><Column id=\"YM_WORK\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"CD_SITE\"/><Col id=\"YM_WORK\"/></Row></Rows>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Div("divSearch","0.0","10.0",null,"46.0","0",null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_cssclass("div_SEARCH_Bg");
            this.addChild(obj.name, obj);

            obj = new Static("staCODE_DC_03","0.0","10.0","92.0","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("1");
            obj.set_text("현장코드");
            obj.set_cssclass("sta_WF_SchLabelE");
            this.divSearch.addChild(obj.name, obj);

            obj = new Div("ccfCD_SITE","staCODE_DC_03:0.0","10.0","250","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.getSetter("CodeFindName").set("DZX_CFSITE");
            obj.getSetter("CDTextWidth").set("80");
            obj.set_taborder("0");
            obj.set_url("cmm::cmmCodeFind.xfdl");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("staYM_WORK","ccfCD_SITE:0.0","10.0","92.0","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("2");
            obj.set_text("작업년월");
            obj.set_cssclass("sta_WF_SchLabelE");
            this.divSearch.addChild(obj.name, obj);

            obj = new Div("ctclYM_WORK","staYM_WORK:0.0","10.0","80","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("3");
            obj.set_url("cmm::cmmCalMM.xfdl");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("staMsg00",null,"divSearch:0","90","25","0",null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_text("(단위 :백만원)");
            obj.set_textDecoration("none");
            obj.set_font("bold 12px/normal \"Dotum\"");
            this.addChild(obj.name, obj);

            obj = new Div("divData","0","staMsg00:0",null,null,"0","0",null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_cssclass("div_DATA_Bg");
            this.addChild(obj.name, obj);

            obj = new Div("divDataTop","0","0",null,"120","0",null,null,null,null,null,this.divData.form);
            obj.set_taborder("1");
            this.divData.addChild(obj.name, obj);

            obj = new Grid("objGrid","0","0",null,null,"0","0",null,null,null,null,this.divData.form.divDataTop.form);
            obj.set_taborder("0");
            obj._setContents("");
            this.divData.form.divDataTop.addChild(obj.name, obj);

            obj = new Div("divDataBottom","0","divDataTop:15",null,"212","0",null,null,null,null,null,this.divData.form);
            obj.set_taborder("0");
            this.divData.addChild(obj.name, obj);

            obj = new Grid("objGridSub","0","0",null,null,"0","0",null,null,null,null,this.divData.form.divDataBottom.form);
            obj.getSetter("sub").set("true");
            obj.set_taborder("0");
            obj._setContents("");
            this.divData.form.divDataBottom.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this
            obj = new Layout("default","",this._adjust_width,this._adjust_height,this,function(p){});
            this.addLayout(obj.name, obj);
            
            // BindItem Information
            obj = new BindItem("item0","divSearch.form.ctclYM_WORK.form.TextBox","value","dsSearch","YM_WORK");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item1","divSearch.form.ccfCD_SITE.form.CDTextBox","value","dsSearch","CD_SITE");
            this.addChild(obj.name, obj);
            obj.bind();
            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {
            this._addPreloadList("fdl","cmm::cmmCodeFind.xfdl");
            this._addPreloadList("fdl","cmm::cmmCalMM.xfdl");
        };
        
        // User Script
        this.registerScript("DWD_FNDREQDPLN.xfdl", function() {
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

        	if(!this.gfnIsNull(this.getOwnerFrame().CD_SITE) && !this.gfnIsNull(this.getOwnerFrame().YM_WORK))
        	{
        		this.dsSearch.setColumn(0,"CD_SITE", this.getOwnerFrame().CD_SITE);
        		this.dsSearch.setColumn(0,"YM_WORK", this.getOwnerFrame().YM_WORK);
        		this.ccfSite.form.DSTextBox.set_value(this.getOwnerFrame().DS_SITE);

        		this.FormBtns.Select.click();
        	}else{
        		var today = this.gfnGetDate();
        		this.dsSearch.setColumn(0,"YM_WORK",today.substr(0,6));
        	}

        };

        /************************************************************************
         * 버튼 설정 : 화면(Tab) 전환시 마다 호출
         ************************************************************************/
        this.fnSetButton = function() {
        }

        /************************************************************************
         * 확장 버튼 : 화면별 버튼 설정 ID, function 연결
         ************************************************************************/
        this.fnSetExtendButton = function() {
        	this.btnHqSend = this.gfnFormButtonAdd("btnHqSend", "fnHqSend");
        	this.btnAPP = this.gfnFormButtonAdd("btnAPP", "fnAPP");
        	this.btnHqSendCnc = this.gfnFormButtonAdd("btnHqSendCnc", "fnHqSendCnc");
        };

        /************************************************************************
         * 변수 선언
         ************************************************************************/
        this.fnSetVariable = function() {
        	this.ccfSite = this.divSearch.form.ccfCD_SITE;
        	this.dxGrid = this.divData.form.divDataTop.form.objGrid;
        	this.dxGridSub = this.divData.form.divDataBottom.form.objGridSub;
        };

        /************************************************************************
         * 이벤트 설정
         ************************************************************************/
        this.fnSetEvent = function() {
        	this.gfnGridInit(this.dxGrid, this.dsList, "DW", "DWD_FNDREQDPLN_A");
        	this.gfnGridInit(this.dxGridSub, this.dsListSub, "DW", "DWD_FNDREQDPLN_B");
        	this.dxGrid.EnterCell = "fnGrid_EnterCell";
        	this.dxGridSub.EnterCell = "fnGrid_EnterCell";
        	this.dxGridSub.AfterEdit = "fnSubGrid_AfterEdit";
        };

        /************************************************************************
         * 파라미터 설정
         ************************************************************************/
        this.fnSetParameter = function() {

        	this.dsSelect = new Dataset();
        	this.dsSelect.addColumn("TY_WRK", "string");
        	this.dsSelect.addColumn("CD_SITE", "string");
        	this.dsSelect.addColumn("YM_WORK", "string");
        	this.dsSelect.addColumn("CD_CLS", "string");

        	this.dsSelectD = new Dataset();
        	this.dsSelectD.addColumn("TY_WRK", "string");
        	this.dsSelectD.addColumn("CD_SITE", "string");
        	this.dsSelectD.addColumn("YM_WORK", "string");
        	this.dsSelectD.addColumn("CD_CLS", "string");

        	this.dsSave = new Dataset();
        	this.dsSave.addColumn("TY_WRK", "string");
        	this.dsSave.addColumn("ID_USER", "string");
        	this.dsSave.addColumn("CD_SITE", "string");
        	this.dsSave.addColumn("YM_WORK", "string");
        	this.dsSave.addColumn("CD_CLS", "string");
        	this.dsSave.addColumn("CD_DIV", "string");
        	this.dsSave.addColumn("AM_CASHOCO", "bigdecimal");
        	this.dsSave.addColumn("AM_NOTEOCO", "bigdecimal");
        	this.dsSave.addColumn("AM_CASHOTHCO", "bigdecimal");
        	this.dsSave.addColumn("AM_NOTEOTHCO", "bigdecimal");
        	this.dsSave.addColumn("DS_RMKS", "string");
        	this.dsSave.addColumn("CD_PRGS", "string");

        	this.dsExec = new Dataset();
        	this.dsExec.addColumn("TY_WRK", "string");
        	this.dsExec.addColumn("ID_USER", "string");
        	this.dsExec.addColumn("CD_SITE", "string");
        	this.dsExec.addColumn("YM_WORK", "string");

        };

        /************************************************************************
         * 버튼 이벤트
         ************************************************************************/
         /*
          *	조회 버튼
          */
        this.fnSelect = function() {
        	if(!this.fnValidate()) return;

        	this.gfnGridBeforeSelect(this.dxGrid);
        	this.gfnGridBeforeSelect(this.dxGridSub);

        	this.dsSelect.clearData();
        	this.dsSelect.addRow();
        	this.dsSelect.setColumn(0, "TY_WRK", "Q");
        	this.dsSelect.setColumn(0, "CD_SITE", this.dsSearch.getColumn(0, "CD_SITE"));
        	this.dsSelect.setColumn(0, "YM_WORK", this.dsSearch.getColumn(0, "YM_WORK").substr(0,6));
        	this.dsSelect.setColumn(0, "CD_CLS", "A");

        	this.dsSelectD.clearData();
        	this.dsSelectD.addRow();
        	this.dsSelectD.setColumn(0, "TY_WRK", "Q");
        	this.dsSelectD.setColumn(0, "CD_SITE", this.dsSearch.getColumn(0, "CD_SITE"));
        	this.dsSelectD.setColumn(0, "YM_WORK", this.dsSearch.getColumn(0, "YM_WORK").substr(0,6));
        	this.dsSelectD.setColumn(0, "CD_CLS", "B");

        	var strSvcId    = "select";
        	var strSvcType  = "grid";
        	var inProc		= "_dsProc";
        	var inData      = "select=dsSelect selectd=dsSelectD";
        	var outData     = "dsList=select0 dsListSub=selectd0";
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

        /*
         *	입력 버튼
         */
        this.fnAdd = function() {
        	this.gfnGridAdd(this.dxGrid);
        }

        /*
         *	삭제 버튼
         */
        this.fnDel = function() {
        	this.gfnGridDel(this.dxGrid);
        }

        /*
         *	저장 버튼
         */
        this.fnSave = function() {
        	if (!this.gfnGridValidate(this.dxGrid)) return;
        	if (!this.gfnGridValidate(this.dxGridSub)) return;

        	this.dxGrid.updateToDataset();
        	this.dxGridSub.updateToDataset();

        	this.dsSave.clearData();


        	for (var i = 0; i < this.dsList.rowcount; i++) {
        		var flag = this.gfnGetFlag(this.dsList, i);
        		switch(flag) {
        			case "I":
        			case "U":
        			case "D":
        				var nrow = this.dsSave.addRow();
        				this.dsSave.setColumn(nrow, "TY_WRK", flag);
        				this.dsSave.setColumn(nrow, "ID_USER", this.AuthClient.ID_USER);
        				this.dsSave.setColumn(nrow, "CD_SITE", this.dsSearch.getColumn(0, "CD_SITE"));
        				this.dsSave.setColumn(nrow, "YM_WORK", this.dsSearch.getColumn(0, "YM_WORK").substr(0,6));
        				this.dsSave.setColumn(nrow, "CD_CLS", this.dsList.getColumn(i, "CD_CLS"));
        				this.dsSave.setColumn(nrow, "CD_DIV", this.dsList.getColumn(i, "CD_DIV"));
        				this.dsSave.setColumn(nrow, "AM_CASHOCO", this.dsList.getColumn(i, "AM_CASHOCO"));
        				this.dsSave.setColumn(nrow, "AM_CASHOTHCO", this.dsList.getColumn(i, "AM_CASHOTHCO"));
        				this.dsSave.setColumn(nrow, "DS_RMKS", this.dsList.getColumn(i, "DS_RMKS"));
        				this.dsSave.setColumn(nrow, "CD_PRGS", this.dsList.getColumn(i, "CD_PRGS"));
        			break;
        		}
        	}
        	for (var i = 0; i < this.dsListSub.rowcount; i++) {
        		var flag = this.gfnGetFlag(this.dsListSub, i);
        		switch(flag) {
        			case "I":
        			case "U":
        			case "D":
        				var nrow = this.dsSave.addRow();
        				this.dsSave.setColumn(nrow, "TY_WRK", flag);
        				this.dsSave.setColumn(nrow, "ID_USER", this.AuthClient.ID_USER);
        				this.dsSave.setColumn(nrow, "CD_SITE", this.dsSearch.getColumn(0, "CD_SITE"));
        				this.dsSave.setColumn(nrow, "YM_WORK", this.dsSearch.getColumn(0, "YM_WORK").substr(0,6));
        				this.dsSave.setColumn(nrow, "CD_CLS", this.dsListSub.getColumn(i, "CD_CLS"));
        				this.dsSave.setColumn(nrow, "CD_DIV", this.dsListSub.getColumn(i, "CD_DIV"));
        				this.dsSave.setColumn(nrow, "AM_CASHOCO", this.dsListSub.getColumn(i, "AM_CASHOCO"));
        				this.dsSave.setColumn(nrow, "AM_NOTEOCO", this.dsListSub.getColumn(i, "AM_NOTEOCO"));
        				this.dsSave.setColumn(nrow, "AM_CASHOTHCO", this.dsListSub.getColumn(i, "AM_CASHOTHCO"));
        				this.dsSave.setColumn(nrow, "AM_NOTEOTHCO", this.dsListSub.getColumn(i, "AM_NOTEOTHCO"));
        				this.dsSave.setColumn(nrow, "DS_RMKS", this.dsListSub.getColumn(i, "DS_RMKS"));
        				this.dsSave.setColumn(nrow, "CD_PRGS", this.dsListSub.getColumn(i, "CD_PRGS"));
        			break;
        		}
        	}
        	if (this.dsSave.rowcount == 0) return;

        	var strSvcId    = "save";
        	var strSvcType  = "save";
        	var inProc		= "_dsProc";
        	var inData      = "save=dsSave";
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

        /*
         *	엑셀 버튼
         */
        this.fnExcel = function() {
        	this.gfnExcelExport(this.dxGrid);
        }

        /*
         *	출력 버튼
         */
        this.fnPrint = function() {
        }

        /************************************************************************
         * 서브 버튼 이벤트
         ************************************************************************/

        /************************************************************************
         * Validate
         ************************************************************************/
        this.fnValidate = function() {

        	if (this.gfnIsNull(this.dsSearch.getColumn(0, "CD_SITE"))) {
        		this.fnVaidateCallback = function() {
        			this.ccfSite.form.CDTextBox.setFocus();
        		}
        		this.gfnAlert("현장코드는 필수입력 값입니다.", "fnVaidateCallback");
        		return false;
        	}else if(this.gfnIsNull(this.dsSearch.getColumn(0, "YM_WORK"))){
        		this.gfnAlert("작업년월은 필수입력 값입니다.");
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
        this.fnCallback = function(svcID, errorCode, errorMsg)
        {
        	if (svcID == "select") {
        		this.gfnGridAfterSelect(this.dxGrid);
        		this.gfnGridAfterSelect(this.dxGridSub);

        		if(this.dsList.getColumn(0, "YN_EDIT") == "Y"){
        			this.btnAPP.set_enable(false);
        		}else{
        			this.btnAPP.set_enable(true);
        		}

        		this.fnBtnCheckAll();
        	}
        	/*
        	else if(svcID == "exec"){
        		if (errorCode == 0) {
        			this.gfnAlert("본사송부가 정상 처리되었습니다.");
        			this.FormBtns.Select.click();
        		} else {
        			this.gfnAlert(errorMsg);
        		}
        	}*/
        	else if(svcID == "save") {
        		if (errorCode == 0) {
        			this.FormBtns.Select.click();
        		} else {
        			this.gfnAlert(errorMsg);
        		}
        	}
        	else if(svcID == "HQSEND") {
        		if (errorCode == 0) {
        			this.gfnAlert("본사송부가 정상 처리되었습니다.");
         			this.FormBtns.Select.click();
         		} else {
         			this.gfnAlert(errorMsg);
         		}
         	}
         	else if(svcID == "SENDCNC") {
         		if (errorCode == 0) {
         			this.gfnAlert("본사송부취소가 정상 처리되었습니다.");
         			this.FormBtns.Select.click();
         		} else {
         			this.gfnAlert(errorMsg);
         		}
         	}
        };

        /************************************************************************
         * 코드파인드 이벤트
         ************************************************************************/

        /************************************************************************
         * 그리드 이벤트
         ************************************************************************/
         this.fnGrid_EnterCell = function(obj, row, cell){

        	if(obj.name == "objGrid"){
        		if(this.dsList.getColumn(row, "YN_EDIT") == "Y"){
        			if(obj.getBindCellIndex("body", "AM_CASHOTHCO") == cell){
        				if(this.dsList.getColumn(row, "YN_EDIT_OTH") == "Y"){
        					return true;
        				}else{
        					return false;
        				}
        			}
        		}
        	}else if(obj.name == "objGridSub"){
        		if(this.dsListSub.getColumn(row, "YN_EDIT") == "Y"){
        			if(obj.getBindCellIndex("body", "AM_CASHOTHCO") == cell || obj.getBindCellIndex("body", "AM_NOTEOTHCO") == cell){
        				if(this.dsListSub.getColumn(row, "YN_EDIT_OTH") == "Y"){
        					return true;
        				}else{
        					return false;
        				}
        			}
        		}
        	}
         };

        this.fnSubGrid_AfterEdit = function(obj, e){
        	if(e.oldvalue != e.newvalue) {
        		this.gfnSetFormStatus(this, "U");
        	};
        };
        /************************************************************************
         * 기타 이벤트
         ************************************************************************/
        this.fnSearchInit = function(obj,e) {
        	if(e == null || (e.pretext != e.posttext)) {
        		this.gfnSetFormStatus(this);
        		this.gfnGridClear(this.dxGrid);
        		this.gfnGridClear(this.dxGridSub);
        	}
        };


        this.dsSearch_onvaluechanged = function(obj,e)
        {
        	if(e.oldvalue != e.newvalue) {
        		this.gfnSetFormStatus(this);	// 폼상태 초기화
        		this.gfnGridClear(this.dxGrid);
        		this.gfnGridClear(this.dxGridSub);
        	}
        };


        this.dsList_oncolumnchanged = function(obj,e)
        {
        	if(e.oldvalue != e.newvalue){
        		if(e.columnid == "AM_CASHOCO" || e.columnid == "AM_CASHOTHCO"){
        			this.dsList.setColumn(e.row, "AM_CASHTOT", this.dsList.getColumn(e.row, "AM_CASHOCO")+this.dsList.getColumn(e.row, "AM_CASHOTHCO"));
        		}
        	}
        };


        this.dsListSub_oncolumnchanged = function(obj,e)
        {
        	if(e.oldvalue != e.newvalue){
        		if(e.columnid == "AM_CASHOCO" || e.columnid == "AM_CASHOTHCO"){
        			this.dsListSub.setColumn(e.row, "AM_CASHTOT", this.dsListSub.getColumn(e.row, "AM_CASHOCO")+this.dsListSub.getColumn(e.row, "AM_CASHOTHCO"));
        		}else if(e.columnid == "AM_NOTEOCO" || e.columnid == "AM_NOTEOTHCO"){
        			this.dsListSub.setColumn(e.row, "AM_NOTETOT", this.dsListSub.getColumn(e.row, "AM_NOTEOCO")+this.dsListSub.getColumn(e.row, "AM_NOTEOTHCO"));
        		}
        	}
        };
        /*
        this.fnHqSend = function(obj:nexacro.Button,e:nexacro.ClickEventInfo) {
        	this.gfnConfirm("분사송부 후 데이타수정은 불가능 합니다. \n\n본사송부 처리하시겠습니까?", "fnGoHqSend");
        };

        this.fnGoHqSend = function(strId, val){
        	if(val == false){
        		return false;
        	}
        	this.dsExec.clearData();
        	this.dsExec.addRow();
        	this.dsExec.setColumn(0, "TY_WRK", "HQSEND");
        	this.dsSave.setColumn(nrow, "ID_USER", this.AuthClient.ID_USER);
        	this.dsExec.setColumn(0, "CD_SITE", this.dsSearch.getColumn(0, "CD_SITE"));
        	this.dsExec.setColumn(0, "YM_WORK", this.dsSearch.getColumn(0, "YM_WORK").substr(0,6));

        	var strSvcId    = "exec";
        	var strSvcType  = "save";
        	var inProc		= "_dsProc";
        	var inData      = "save=dsSave";
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
        };

        */

        this.fnExec = function(strID) {
           this.dsExec.clearData();

           var nrow = this.dsExec.addRow();
           this.dsExec.setColumn(nrow, "TY_WRK", strID);
           this.dsSave.setColumn(nrow, "ID_USER", this.AuthClient.ID_USER);
           this.dsExec.setColumn(0, "CD_SITE", this.dsSearch.getColumn(0, "CD_SITE"));
           this.dsExec.setColumn(0, "YM_WORK", this.dsSearch.getColumn(0, "YM_WORK").substr(0,6));

           if (this.dsExec.rowcount == 0) return;

           var strSvcId    = strID;
        	var strSvcType  = "save";
        	var inProc		= "_dsProc";
        	var inData      = "exec=dsExec";
        	var outData     = "";
        	var strArg      = "";
        	var callBackFnc = "fnCallback";

        	this.gfnTransaction( strSvcId , 	// transaction을 구분하기 위한 svc id값
        						strSvcType , 	// transaction을 요청할 구분
        						inProc,			// Procedure 정보 Dataset 이름
        						inData , 		// 입력값으로 보낼 dataset id , a=b형태로 실제이름과 입력이름을 매칭
        						outData , 		// 처리결과값으로 받을 dataset id, a=b형태로 실제이름과 입력이름을 매칭
        						strArg, 		// 입력값으로 보낼 arguments, strFormData="20120607"
        						callBackFnc);   // 통신방법 정의 [생략가능]

        }


        this.fnHqSend = function(obj,e) {

        	var msg = "본사송부 후 데이타수정은 불가능 합니다. \n\n본사송부 처리하시겠습니까?";

        	this.gfnConfirm(msg, "fnExec_callback", "HQSEND");

        }


        this.fnHqSendCnc = function(obj,e) {

        	var msg = "본사송부취소 후 데이타수정이 가능합니다. \n\n본사송부취소 하시겠습니까?";

        	this.gfnConfirm(msg, "fnExec_callback", "SENDCNC");

        }

        this.fnExec_callback = function(strID, val) {
           if(val == true) {
              this.fnExec(strID);
           }
        }

        this.fnAPP = function(obj,e) {
        	//if (!this.gfnGridIsRow(this.dxGrid)) { return false; }
        	if (this.dsList.rowcount < 1) { return false; }

        	var param = {};
        	//var nRow = this.dsList.rowposition;

        	param.PARAM01 = this.dsSearch.getColumn(0,"CD_SITE");
        	param.PARAM02 = this.dsSearch.getColumn(0, "YM_WORK").substr(0,6);
        	param.ID_AP = this.dsList.getColumn(0, "NO_ELAPDOC");	// 전자결재문서번호
        	param.YN_LINK = "N";	// 화면에서 팝업을 호출할경우 N, 링크를 통해서 화면을 오픈할경우 null 이다

        	// 화면 오픈.
        	// CD_MODULE은 보통 같은 모듈에서 호출하는 경우가 많으니 this.FormInfo.CD_MODULE 사용
        	// 타 모듈 화면 호출시 지정할것.
        	this.gfnFormOpen(this.FormInfo.CD_MODULE, "DWD_FNDREQDPLN_APP", "fnAprvDialogCallback", param);

        }

         this.fnAprvDialogCallback = function(svcID, value) {
        	// 리턴값
        	if(value){
        		// 결재완료, 결재취소, 결재상신 후에는 재조회를 한다
        		this.FormBtns.Select.click();
        	}
        };

        this.fnBtnCheckAll = function() {
        	this.gfnBtnCheck(this.btnHqSend, this.dsList);
        	this.gfnBtnCheck(this.btnHqSendCnc, this.dsList);
        }
        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.form_onload,this);
            this.divData.addEventHandler("ondragmove",this.divData_ondragmove,this);
            this.dsList.addEventHandler("oncolumnchanged",this.dsList_oncolumnchanged,this);
            this.dsListSub.addEventHandler("oncolumnchanged",this.dsListSub_oncolumnchanged,this);
            this.dsSearch.addEventHandler("onvaluechanged",this.dsSearch_onvaluechanged,this);
        };
        this.loadIncludeScript("DWD_FNDREQDPLN.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
