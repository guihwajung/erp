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
            this.set_titletext("전출입관리");
            if (Form == this.constructor)
            {
                this._setFormPosition(1280,720);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("dsList", this);
            obj._setContents("");
            this.addChild(obj.name, obj);


            obj = new Dataset("_dsProc", this);
            obj._setContents("<ColumnInfo><Column id=\"TARGET\" type=\"STRING\" size=\"256\"/><Column id=\"SP\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"TARGET\">select</Col><Col id=\"SP\">DMBPR_TM_STOCK_SELECT</Col></Row><Row><Col id=\"TARGET\">trans</Col><Col id=\"SP\">DMBPR_TM_STOCK_TRANS</Col></Row><Row><Col id=\"TARGET\">transItem</Col><Col id=\"SP\">DMBPR_TM_STOCK_TRANS_ITEM</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsSearch", this);
            obj._setContents("<ColumnInfo><Column id=\"CD_SITE\" type=\"STRING\" size=\"256\"/><Column id=\"CD_SITE_TO\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"CD_SITE\"/><Col id=\"CD_SITE_TO\"/></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsUpdate", this);
            obj._setContents("");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Div("divSearch","0.0","10.0",null,"46.0","0",null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_cssclass("div_SEARCH_Bg");
            this.addChild(obj.name, obj);

            obj = new Static("staCD_SYSTEM","0.0","10.0","92.0","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("1");
            obj.set_text("전출현장");
            obj.set_cssclass("sta_WF_SchLabelE");
            this.divSearch.addChild(obj.name, obj);

            obj = new Div("ccfCD_SITE","staCD_SYSTEM:0.0","10.0","250","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.getSetter("CodeFindName").set("DZX_CFSITE");
            obj.getSetter("CDTextWidth").set("80");
            obj.set_taborder("0");
            obj.set_url("cmm::cmmCodeFind.xfdl");
            this.divSearch.addChild(obj.name, obj);

            obj = new Div("divData","0","divSearch:10",null,null,"0","0",null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_cssclass("div_DATA_Bg");
            this.addChild(obj.name, obj);

            obj = new Div("divSplitter","50%","0","5","100%",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("1");
            obj.set_background("skyblue");
            obj.set_cursor("ew-resize");
            this.divData.addChild(obj.name, obj);

            obj = new Button("btnSend_Right",null,"40%","30","40","divSplitter:0",null,null,null,null,null,this.divData.form);
            obj.set_taborder("3");
            obj.set_text("▶");
            this.divData.addChild(obj.name, obj);

            obj = new Button("btnSend_Left",null,"60%","30","40","divSplitter:0",null,null,null,null,null,this.divData.form);
            obj.set_taborder("3");
            obj.set_text("◀");
            this.divData.addChild(obj.name, obj);

            obj = new Div("divDataLeft","0","0",null,null,"btnSend_Left:0","0",null,null,null,null,this.divData.form);
            obj.set_taborder("0");
            this.divData.addChild(obj.name, obj);

            obj = new Grid("objGrid","0","0",null,null,"0","0",null,null,null,null,this.divData.form.divDataLeft.form);
            obj.set_taborder("0");
            obj.set_treeinitstatus("collapse,all");
            obj._setContents("");
            this.divData.form.divDataLeft.addChild(obj.name, obj);

            obj = new Div("divDataRight","divSplitter:5","0",null,null,"0","0",null,null,null,null,this.divData.form);
            obj.set_taborder("0");
            this.divData.addChild(obj.name, obj);

            obj = new Grid("objGridSub","0","30",null,null,"0","0",null,null,null,null,this.divData.form.divDataRight.form);
            obj.set_taborder("0");
            obj._setContents("");
            this.divData.form.divDataRight.addChild(obj.name, obj);

            obj = new Static("staCD_SYSTEM","10","1","60","25",null,null,null,null,null,null,this.divData.form.divDataRight.form);
            obj.set_taborder("1");
            obj.set_text("전입현장");
            obj.set_cssclass("sta_WF_tablelabelE");
            this.divData.form.divDataRight.addChild(obj.name, obj);

            obj = new Div("ccfCD_SITE","80","1","250","25",null,null,null,null,null,null,this.divData.form.divDataRight.form);
            obj.getSetter("CDTextWidth").set("80");
            obj.set_taborder("2");
            obj.set_url("cmm::cmmCodeFind.xfdl");
            this.divData.form.divDataRight.addChild(obj.name, obj);

            obj = new Button("btnTrans","333","0","73","27",null,null,null,null,null,null,this.divData.form.divDataRight.form);
            obj.set_taborder("3");
            obj.set_text("승인요청");
            obj.set_cssclass("btnExt");
            this.divData.form.divDataRight.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this
            obj = new Layout("default","",this._adjust_width,this._adjust_height,this,function(p){});
            this.addLayout(obj.name, obj);
            
            // BindItem Information
            obj = new BindItem("item0","divSearch.form.ccfCD_SITE.form.CDTextBox","value","dsSearch","CD_SITE");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item1","divData.form.divDataRight.form.ccfCD_SITE.form.CDTextBox","value","dsSearch","CD_SITE_TO");
            this.addChild(obj.name, obj);
            obj.bind();
            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {
            this._addPreloadList("fdl","cmm::cmmCodeFind.xfdl");
        };
        
        // User Script
        this.registerScript("DMB_TM_STOCK_TRANS.xfdl", function() {
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

        	this.dsSearch.setColumn(0, "CD_SITE", this.getOwnerFrame().CD_SITE);
        	this.ccfCD_SITE.form.DSTextBox.set_value(this.getOwnerFrame().DS_SITE);

        	this.FormBtns.Select.click();
        };

        /************************************************************************
         * 버튼 설정 : 화면(Tab) 전환시 마다 호출
         ************************************************************************/
        this.fnSetButton = function() {
        // 	var id_group = this.FormInfo.ID_GROUP;
        // 	var gr_search = this.FormInfo.GR_SEARCH;
        // 	var cd_role = this.FormInfo.CD_ROLE;
        }

        /************************************************************************
         * 확장 버튼 : 화면별 버튼 설정 ID, function 연결
         ************************************************************************/
        this.fnSetExtendButton = function() {
        };

        /************************************************************************
         * 변수 선언
         ************************************************************************/
        this.fnSetVariable = function() {
        	this.ccfCD_SITE = this.divSearch.form.ccfCD_SITE;
        	this.ccfCD_SITE_TO = this.divData.form.divDataRight.form.ccfCD_SITE;
        	this.dxGrid = this.divData.form.divDataLeft.form.objGrid;
        	this.dxGridSub = this.divData.form.divDataRight.form.objGridSub;
        };

        /************************************************************************
         * 이벤트 설정
         ************************************************************************/
        this.fnSetEvent = function() {
        	this.ccfCD_SITE_TO.CodeFindName = "DZX_CFSITE";
        	this.ccfCD_SITE_TO.BeforeUserDataSetParam = "fnBeforeUserDataSetParam";

        	this.gfnGridInit(this.dxGrid, this.dsList, "DM", "DMB_TM_STOCK_TRANS_R");
        	this.gfnGridInit(this.dxGridSub, this.dsUpdate, "DM", "DMB_TM_STOCK_TRANS");
        }
        /************************************************************************
         * 파라미터 설정
         ************************************************************************/
        this.fnSetParameter = function() {
        	this.dsSelect = new Dataset();
        	this.dsSelect.addColumn("CD_SITE", "string");

        	this.dsTrans = new Dataset();
        	this.dsTrans.addColumn("NO_INVOICE", "string");
        	this.dsTrans.addColumn("AM_INVOICE", "string");
        	this.dsTrans.addColumn("CD_INSIT", "string");
        	this.dsTrans.addColumn("CD_OUTSIT", "string");
        	this.dsTrans.addColumn("ID_USER", "string");
        }

        /************************************************************************
         * 컨트롤 이벤트
         ************************************************************************/
         /*
          *	조회 버튼
          */
        this.fnSelect = function() {
        	if (!this.fnSelectValidate()) return false;

        	this.gfnGridBeforeSelect(this.dxGrid);

        	this.dsSelect.clearData();
        	this.dsSelect.addRow();
        	this.dsSelect.setColumn(0, "CD_SITE", this.dsSearch.getColumn(0, "CD_SITE"));

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



        /*
         *	입력 버튼
         */
        this.fnAdd = function() {
        }

        /*
         *	삭제 버튼
         */
        this.fnDel = function() {
        	this.divData_btnSend_Left_onclick();
        }

        /*
         *	저장 버튼
         */
        this.fnSave = function() {
        	this.fnTrans();
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
         * Validate
         ************************************************************************/
        /*
         *	조회 Validate
          */
        this.fnSelectValidate = function() {
        	var validate = true;
        	if (this.gfnIsNull(this.ccfCD_SITE.form.CDTextBox.text)) {
        		validate = false;
        		// Alert후 실행할 처리
        		this.fnVaidateCallback = function() {
        			this.ccfCD_SITE.form.CDTextBox.setFocus();
        		}
        		this.gfnAlert("현장코드를 입력하세요.", "fnVaidateCallback");
        	}

        	return validate;
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
        		this.dsUpdate.copyData(this.dsList);
        		this.dsUpdate.clearData();
        	} else if (svcID == "trans") {
        		this.dsUpdate.addColumn("NO_INVOICE", "string");
        		var sum = 0;
        		for(var i = 0; i < this.dsUpdate.getRowCount(); i++) {
        			this.dsUpdate.setColumn(i, "NO_INVOICE", this.dsTrans.getColumn(0, "NO_INVOICE"));
        		}

        		var strSvcId    = "transItem";
        		var strSvcType  = "save";
        		var inProc		= "_dsProc";
        		var inData      = "transItem=dsUpdate";
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
        	} else if (svcID == "transItem") {
        		this.FormBtns.Select.click();
        		this.gfnAlert("전출승인요청 되었습니다.");
        	}
        }

        /************************************************************************
         * 코드파인드 이벤트
         ************************************************************************/
        //코드파인드의 파라미터 값을 넘겨줄때 사용하는 함수
        this.fnBeforeUserDataSetParam = function(id, dsUserParam, nrow) {
        	if(id == "ccfCD_SITE_TO") {
        		dsUserParam.setColumn(nrow, "CD_CORP", this.AuthClient.CD_CORP);
        		dsUserParam.setColumn(nrow, "CD_DEPT", this.AuthClient.CD_DEPT);
        		dsUserParam.setColumn(nrow, "ID_USER", this.AuthClient.ID_USER);
        		dsUserParam.setColumn(nrow, "GR_SEARCH", this.FormInfo.GR_SEARCH);
        	}

        	return true;
        }

        /************************************************************************
         * 그리드 이벤트
         ************************************************************************/

        /************************************************************************
         * 기타 이벤트
         ************************************************************************/
        this.dsSearch_onvaluechanged = function(obj,e)
        {
        	if(e.oldvalue != e.newvalue && e.columnid != "CD_SITE_TO") {
        		this.gfnSetFormStatus(this);	// 폼상태 초기화
        		this.gfnGridClear(this.dxGrid);
        	}
        };

        this.divData_btnSend_Right_onclick = function(obj,e)
        {
        	for(var i = 0; i < this.dsList.getRowCount(); i++) {
        		if(this.dsList.getColumn(i, "CHK") == "1") {
        			if(this.dsUpdate.findRow("CD_ITEM", this.dsList.getColumn(i, "CD_ITEM")) < 0) {
        				var nrow = this.dsUpdate.addRow();
        				this.dsUpdate.copyRow(nrow, this.dsList, i);

        				this.dsList.setColumn(i, "QN_ITEM", 0);
        				this.dsList.setColumn(i, "AM_ITEM", 0);
        			}
        		}
        	}
        };

        this.divData_btnSend_Left_onclick = function(obj,e)
        {
        	for(var i = this.dsUpdate.getRowCount() - 1; i >= 0; i--) {
        		if(this.dsUpdate.getColumn(i, "CHK") == "1") {
        			var nrow = this.dsList.findRow("CD_ITEM", this.dsUpdate.getColumn(i, "CD_ITEM"));
        			this.dsList.setColumn(nrow, "QN_ITEM", this.dsList.getColumn(nrow, "QN_ITEM") + this.dsUpdate.getColumn(i, "QN_ITEM"));
        			this.dsList.setColumn(nrow, "AM_ITEM", this.dsList.getColumn(nrow, "AM_ITEM") + this.dsUpdate.getColumn(i, "AM_ITEM"));

        			this.dsUpdate.deleteRow(i);
        		}
        	}
        };

        this.dsUpdate_cancolumnchange = function(obj,e)
        {
        	var nrow = this.dsList.findRow("CD_ITEM", this.dsUpdate.getColumn(e.row, "CD_ITEM"));
        	if(e.columnid == "QN_ITEM") {
        		if(e.newvalue < 0) { //전출단위는 음수가 될수없고
        			return false;
        		}
        		if(this.dsList.getColumn(nrow, "QN_ITEM") + (e.oldvalue - e.newvalue) < 0) { //전출현장에서 음수가 되어선 안됨
        			return false;
        		}
        		this.dsList.setColumn(nrow, "QN_ITEM", this.dsList.getColumn(nrow, "QN_ITEM") + (e.oldvalue - e.newvalue));
        	}
        	if(e.columnid == "AM_ITEM") {
        		if(e.newvalue < 0) {
        			return false;
        		}
        		if(this.dsList.getColumn(nrow, "AM_ITEM") + (e.oldvalue - e.newvalue) < 0) {
        			return false;
        		}
        		this.dsList.setColumn(nrow, "AM_ITEM", this.dsList.getColumn(nrow, "AM_ITEM") + (e.oldvalue - e.newvalue));
        	}

        	return true;
        };

        this.fnTrans = function(obj,e)
        {
        	if(this.gfnIsNull(this.dsSearch.getColumn(0, "CD_SITE_TO"))) {
        		this.gfnAlert("전입현장이 입력되지 않았습니다.");
        		return;
        	}

        	for(var i = 0; i < this.dsList.getRowCount(); i++) {
        		if(this.dsList.getColumn(i, "QN_ITEM") == 0 && this.dsList.getColumn(i, "AM_ITEM") != 0) { //수량이 0일때 금액이 0이 아니면 안됨 vice versa
        			this.gfnAlert("품목명 : [" + this.dsList.getColumn(i, "DS_ITEM") + "] 전출현장의 남은 수량이 0일 때 금액이 남아있을 수 없습니다.");
        			return;
        		}
        		if(this.dsList.getColumn(i, "AM_ITEM") == 0 && this.dsList.getColumn(i, "QN_ITEM") != 0) {
        			this.gfnAlert("품목명 : [" + this.dsList.getColumn(i, "DS_ITEM") + "] 전출현장의 남은 금액이 0일 때 수량이 남아있을 수 없습니다.");
        			return;
        		}
        	}

        	this.dsUpdate.addColumn("ID_USER", "string");
        	this.dsUpdate.addColumn("CD_SITE_TO", "string");
        	var sum = 0;
        	for(var i = 0; i < this.dsUpdate.getRowCount(); i++) {
        		if(this.dsUpdate.getColumn(i, "QN_ITEM") == 0 || this.dsUpdate.getColumn(i, "AM_ITEM") == 0) { //21.10.29 수량과 금액은 0일수 없습니다 추가
        			this.gfnAlert("품목명 : [" + this.dsUpdate.getColumn(i, "DS_ITEM") + "] 전입현장의 수량 또는 금액이 0일 수 없습니다.");
        			return;
        		}

        		this.dsUpdate.setColumn(i, "ID_USER", this.AuthClient.ID_USER);
        		this.dsUpdate.setColumn(i, "CD_SITE_TO", this.dsSearch.getColumn(0, "CD_SITE_TO"));

        		sum += this.dsUpdate.getColumn(i, "AM_ITEM");
        	}

        	this.dsTrans.clearData();
        	this.dsTrans.addRow();
        	this.dsTrans.setColumn(0, "AM_INVOICE", sum);
        	this.dsTrans.setColumn(0, "CD_INSIT", this.dsSearch.getColumn(0, "CD_SITE"));
        	this.dsTrans.setColumn(0, "CD_OUTSIT", this.dsSearch.getColumn(0, "CD_SITE_TO"));
        	this.dsTrans.setColumn(0, "ID_USER", this.AuthClient.ID_USER);

        	var strSvcId    = "trans";
        	var strSvcType  = "save";
        	var inProc		= "_dsProc";
        	var inData      = "trans=dsTrans";
        	var outData     = "dsTrans=trans";
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

        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.form_onload,this);
            this.divData.addEventHandler("ondragmove",this.divData_ondragmove,this);
            this.divData.form.divSplitter.addEventHandler("ondrag",this.divData_divSplitter_ondrag,this);
            this.divData.form.btnSend_Right.addEventHandler("onclick",this.divData_btnSend_Right_onclick,this);
            this.divData.form.btnSend_Left.addEventHandler("onclick",this.divData_btnSend_Left_onclick,this);
            this.divData.form.divDataRight.form.btnTrans.addEventHandler("onclick",this.fnTrans,this);
            this.dsSearch.addEventHandler("onvaluechanged",this.dsSearch_onvaluechanged,this);
            this.dsUpdate.addEventHandler("cancolumnchange",this.dsUpdate_cancolumnchange,this);
        };
        this.loadIncludeScript("DMB_TM_STOCK_TRANS.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
