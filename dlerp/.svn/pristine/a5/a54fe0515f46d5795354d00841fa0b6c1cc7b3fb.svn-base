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
            this.set_titletext("가설재 감가/마감관리");
            if (Form == this.constructor)
            {
                this._setFormPosition(1280,720);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("dsList", this);
            obj._setContents("");
            this.addChild(obj.name, obj);


            obj = new Dataset("_dsProc", this);
            obj._setContents("<ColumnInfo><Column id=\"TARGET\" type=\"STRING\" size=\"256\"/><Column id=\"SP\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"TARGET\">select</Col><Col id=\"SP\">DMBPR_TM_MAGAM_SELECT</Col></Row><Row><Col id=\"TARGET\">gamga</Col><Col id=\"SP\">DMBPR_TM_GAMGA_UPDATE</Col></Row><Row><Col id=\"TARGET\">magam</Col><Col id=\"SP\">DMBPR_TM_MAGAM_UPDATE</Col></Row><Row><Col id=\"TARGET\">exec</Col><Col id=\"SP\">DMBPR_GAMGA_AUTOSLIP_ISSUE</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsSearch", this);
            obj._setContents("<ColumnInfo><Column id=\"CD_SITE\" type=\"STRING\" size=\"256\"/><Column id=\"YM_ACT\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"CD_SITE\"/></Row></Rows>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Div("divSearch","0.0","10.0",null,"46.0","0",null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_cssclass("div_SEARCH_Bg");
            this.addChild(obj.name, obj);

            obj = new Static("staCD_SYSTEM","0.0","10.0","92.0","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("1");
            obj.set_text("현장코드");
            obj.set_cssclass("sta_WF_SchLabel");
            this.divSearch.addChild(obj.name, obj);

            obj = new Div("ccfCD_SITE","staCD_SYSTEM:0.0","10.0","250","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.getSetter("CodeFindName").set("DZX_CFSITE");
            obj.getSetter("CDTextWidth").set("80");
            obj.set_taborder("0");
            obj.set_url("cmm::cmmCodeFind.xfdl");
            this.divSearch.addChild(obj.name, obj);

            obj = new Div("ctclYM_ACT","ccfCD_SITE:0.0","10.0","80","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("2");
            obj.set_url("cmm::cmmCalMM.xfdl");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("staYM_ACT","ctclYM_ACT:0.0","10.0","92.0","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("3");
            obj.set_text("작업년월");
            obj.set_cssclass("sta_WF_SchLabelE");
            this.divSearch.addChild(obj.name, obj);

            obj = new Div("divData","0","divSearch:10",null,null,"0","0",null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_cssclass("div_DATA_Bg");
            this.addChild(obj.name, obj);

            obj = new Grid("objGrid","0","0",null,null,"0","0",null,null,null,null,this.divData.form);
            obj.set_taborder("0");
            obj._setContents("");
            this.divData.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this
            obj = new Layout("default","",this._adjust_width,this._adjust_height,this,function(p){});
            this.addLayout(obj.name, obj);
            
            // BindItem Information
            obj = new BindItem("item0","divSearch.form.ccfCD_SITE.form.CDTextBox","value","dsSearch","CD_SITE");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item1","divSearch.form.ctclYM_ACT.form.TextBox","value","dsSearch","YM_ACT");
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
        this.registerScript("DMB_TM_STOCK_MAGAM.xfdl", function() {
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

        	var today = this.gfnGetDate();
        	this.dsSearch.setColumn(0, "YM_ACT", today.substring(0,6));
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
        	this.btnGamga = this.gfnFormButtonAdd("btnGamga", "fnGamga");
        	this.btnGamgaCancel = this.gfnFormButtonAdd("btnGamgaCancel", "fnGamgaCancel");
        	this.btnMagam = this.gfnFormButtonAdd("btnMagam", "fnMagam");
        	this.btnMagamCancel = this.gfnFormButtonAdd("btnMagamCancel", "fnMagamCancel");
        	this.btnDetail = this.gfnFormButtonAdd("btnDetail", "fnDetail");

        	this.btn2 = this.gfnFormButtonAdd("btnSlipIssue", "fnSlipIssue");
        	this.btn3 = this.gfnFormButtonAdd("btnSlipSearch", "fnSlipSearch");
        	this.btn4 = this.gfnFormButtonAdd("btnSlipCancel", "fnSlipCancel");
        };

        /************************************************************************
         * 변수 선언
         ************************************************************************/
        this.fnSetVariable = function() {
        	this.ctclYM_ACT = this.divSearch.form.ctclYM_ACT;
        	this.ccfCD_SITE = this.divSearch.form.ccfCD_SITE;
        	this.dxGrid = this.divData.form.objGrid;
        };

        /************************************************************************
         * 이벤트 설정
         ************************************************************************/
        this.fnSetEvent = function() {
        	this.gfnGridInit(this.dxGrid, this.dsList, "DM", "DMB_TM_STOCK_MAGAM");
        }
        /************************************************************************
         * 파라미터 설정
         ************************************************************************/
        this.fnSetParameter = function() {
        	this.dsSelect = new Dataset();
        	this.dsSelect.addColumn("CD_SITE", "string");
        	this.dsSelect.addColumn("YM_ACT", "string");

        	this.dsExec = new Dataset();
        	this.dsExec.addColumn("TY_WORK", "string");
        	this.dsExec.addColumn("CD_SITE", "string");
        	this.dsExec.addColumn("YM_ACT", "string");
        	this.dsExec.addColumn("ID_USER", "string");
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
        	this.dsSelect.setColumn(0, "YM_ACT", this.dsSearch.getColumn(0, "YM_ACT"));

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
        }

        /*
         *	저장 버튼
         */
        this.fnSave = function() {
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
        	if (this.gfnIsNull(this.dsSearch.getColumn(0, "YM_ACT"))) {
        		validate = false;
        		// Alert후 실행할 처리
        		this.fnVaidateCallback = function() {
        			this.ctclYM_ACT.form.TextBox.setFocus();
        		}
        		this.gfnAlert("작업년월을 입력하세요.", "fnVaidateCallback");
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
        	} else if (svcID == "gamga") {
        		this.FormBtns.Select.click();
        		this.gfnAlert("감가작업이 완료되었습니다.");
        	} else if (svcID == "gamgaCancel") {
        		this.FormBtns.Select.click();
        		this.gfnAlert("감가작업이 취소되었습니다.");
        	} else if (svcID == "magam") {
        		this.FormBtns.Select.click();
        		this.gfnAlert("마감작업이 완료되었습니다.");
        	} else if (svcID == "magamCancel") {
        		this.FormBtns.Select.click();
        		this.gfnAlert("마감작업이 취소되었습니다.");
        	} else if(svcID == "SLPPUB"){
        		if (errorCode == 0) {
        			this.FormBtns.Select.click();
        			this.gfnAlert("전표발행이 정상 처리되었습니다.");
        		} else {
        			this.gfnAlert(errorMsg);
        		}
        	} else if(svcID == "SLPCNC"){
        		if (errorCode == 0) {
        			this.FormBtns.Select.click();
        			this.gfnAlert("전표취소가 정상 처리되었습니다.");
        		} else {
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
        this.dsSearch_onvaluechanged = function(obj,e)
        {
        	if(e.oldvalue != e.newvalue) {
        		this.gfnSetFormStatus(this);	// 폼상태 초기화
        		this.gfnGridClear(this.dxGrid);
        	}
        };

        // 상세현황 버튼 클릭 이벤트
        this.fnDetail = function() {
        	var param = {};
        	param.CD_SITE = this.dsList.getColumn(this.dsList.rowposition, "CD_SITE");
        	param.DS_SITE = this.dsList.getColumn(this.dsList.rowposition, "DS_SITE");
        	param.YM_ACT = this.dsList.getColumn(this.dsList.rowposition, "YM_ACT");

        	// 화면 오픈.
        	// CD_MODULE은 보통 같은 모듈에서 호출하는 경우가 많으니 this.FormInfo.CD_MODULE 사용
        	// 타 모듈 화면 호출시 지정할것.
        	this.gfnFormOpen(this.FormInfo.CD_MODULE, "DMB_TM_STOCK_DEP_DETAIL", "", param);
        }

        this.fnGamga = function() {

        // 	if(this.dsSearch.getColumn(0, "YM_ACT") != this.gfnGetDate().substring(0,6)) {
        // 		this.gfnAlert("현재 월의 감가작업만 가능합니다.");
        // 		return;
        // 	}

        	this.dsExec.clearData();

        	for(var i = 0; i < this.dsList.getRowCount(); i++) {
        		if(this.dsList.getColumn(i, "CHK") == "1") {
        			if(!this.gfnIsNull(this.dsList.getColumn(i, "DT_GAMGA"))) {
        				this.gfnAlert("이미 감가작업이 완료된 현장이 포함되어 있습니다.");
        				return;
        			}

        			var nrow = this.dsExec.addRow();
        			this.dsExec.setColumn(nrow, "TY_WORK", "Y");
        			this.dsExec.setColumn(nrow, "CD_SITE", this.dsList.getColumn(i, "CD_SITE"));
        			this.dsExec.setColumn(nrow, "YM_ACT", this.dsList.getColumn(i, "YM_ACT"));
        			this.dsExec.setColumn(nrow, "ID_USER", this.AuthClient.ID_USER);
        		}
        	}

        	if (this.dsExec.rowcount == 0) return;

        	var strSvcId    = "gamga";
        	var strSvcType  = "save";
        	var inProc		= "_dsProc";
        	var inData      = "gamga=dsExec";
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

        this.fnGamgaCancel = function() {

        // 	if(this.dsSearch.getColumn(0, "YM_ACT") != this.gfnGetDate().substring(0,6)) {
        // 		this.gfnAlert("현재 월의 감가작업만 가능합니다.");
        // 		return;
        // 	}

        	this.dsExec.clearData();

        	for(var i = 0; i < this.dsList.getRowCount(); i++) {
        		if(this.dsList.getColumn(i, "CHK") == "1") {
        			if(this.gfnIsNull(this.dsList.getColumn(i, "DT_GAMGA"))) {
        				this.gfnAlert("감가작업이 완료되지 않은 현장이 포함되어 있습니다.");
        				return;
        			}

        			if(!this.gfnIsNull(this.dsList.getColumn(i, "DT_MAGAM"))) {
        				this.gfnAlert("이미 마감작업이 완료된 현장이 포함되어 있습니다.");
        				return;
        			}

        			var nrow = this.dsExec.addRow();
        			this.dsExec.setColumn(nrow, "TY_WORK", "N");
        			this.dsExec.setColumn(nrow, "CD_SITE", this.dsList.getColumn(i, "CD_SITE"));
        			this.dsExec.setColumn(nrow, "YM_ACT", this.dsList.getColumn(i, "YM_ACT"));
        			this.dsExec.setColumn(nrow, "ID_USER", this.AuthClient.ID_USER);
        		}
        	}

        	if (this.dsExec.rowcount == 0) return;

        	var strSvcId    = "gamgaCancel";
        	var strSvcType  = "save";
        	var inProc		= "_dsProc";
        	var inData      = "gamga=dsExec";
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

        this.fnMagam = function() {

        // 	if(this.dsSearch.getColumn(0, "YM_ACT") != this.gfnGetDate().substring(0,6)) {
        // 		this.gfnAlert("현재 월의 마감작업만 가능합니다.");
        // 		return;
        // 	}

        	this.dsExec.clearData();

        	for(var i = 0; i < this.dsList.getRowCount(); i++) {
        		if(this.dsList.getColumn(i, "CHK") == "1") {
        			if(this.gfnIsNull(this.dsList.getColumn(i, "DT_GAMGA"))) {
        				this.gfnAlert("감가작업이 완료되지 않은 현장이 포함되어 있습니다.");
        				return;
        			}

        			if(!this.gfnIsNull(this.dsList.getColumn(i, "DT_MAGAM"))) {
        				this.gfnAlert("이미 마감작업이 완료된 현장이 포함되어 있습니다.");
        				return;
        			}

        			var nrow = this.dsExec.addRow();
        			this.dsExec.setColumn(nrow, "TY_WORK", "Y");
        			this.dsExec.setColumn(nrow, "CD_SITE", this.dsList.getColumn(i, "CD_SITE"));
        			this.dsExec.setColumn(nrow, "YM_ACT", this.dsList.getColumn(i, "YM_ACT"));
        			this.dsExec.setColumn(nrow, "ID_USER", this.AuthClient.ID_USER);
        		}
        	}

        	if (this.dsExec.rowcount == 0) return;

        	var strSvcId    = "magam";
        	var strSvcType  = "save";
        	var inProc		= "_dsProc";
        	var inData      = "magam=dsExec";
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

        this.fnMagamCancel = function() {

        // 	if(this.dsSearch.getColumn(0, "YM_ACT") != this.gfnGetDate().substring(0,6)) {
        // 		this.gfnAlert("현재 월의 마감취소 작업만 가능합니다.");
        // 		return;
        // 	}

        	this.dsExec.clearData();

        	for(var i = 0; i < this.dsList.getRowCount(); i++) {
        		if(this.dsList.getColumn(i, "CHK") == "1") {
        			if(this.gfnIsNull(this.dsList.getColumn(i, "DT_MAGAM"))) {
        				this.gfnAlert("마감되지 않은 현장이 포함되어 있습니다.");
        				return;
        			}

        			var nrow = this.dsExec.addRow();
        			this.dsExec.setColumn(nrow, "TY_WORK", "N");
        			this.dsExec.setColumn(nrow, "CD_SITE", this.dsList.getColumn(i, "CD_SITE"));
        			this.dsExec.setColumn(nrow, "YM_ACT", this.dsList.getColumn(i, "YM_ACT"));
        			this.dsExec.setColumn(nrow, "ID_USER", this.AuthClient.ID_USER);
        		}
        	}

        	if (this.dsExec.rowcount == 0) return;

        	var strSvcId    = "magamCancel";
        	var strSvcType  = "save";
        	var inProc		= "_dsProc";
        	var inData      = "magam=dsExec";
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

        this.fnSlipSearch = function(obj,e) {
        	if (!this.gfnGridIsRow(this.dxGrid)) {
        		this.gfnAlert("전표조회할 데이터를 선택하세요.");
        		return false;
        	}

        // 	if (this.gfnIsNull(this.dsList.getColumn(this.dsList.rowposition, "CD_TRADE"))) {
        // 		this.gfnAlert("전표가 발행되지 않았습니다.");
        // 		return false;
        // 	}

        	var param = {};
        	param.CD_TRADE = this.dsList.getColumn(this.dsList.rowposition, "CD_TRADE");
        	this.gfnFormOpen("DHA", "DHA_ISSUESLIP", "", param);
        };

        this.fnSlipIssue = function(obj,e) {
        	if (this.dsList.findRowNF("CHK", "1") < 0) {
        		this.gfnAlert("선택된 행이 없습니다.");
        		return false;
        	}

        	var msg = "선택한 현장의 전표를 일괄 발행합니다. 계속하시겠습니까?";

        	this.gfnConfirm(msg, "fnSlip_callback", "SLPPUB");
        };

        this.fnSlipCancel = function(obj,e) {
        	if (this.dsList.findRowNF("CHK", "1") < 0) {
        		this.gfnAlert("선택된 행이 없습니다.");
        		return false;
        	}

        	var msg = "선택한 현장의 발행전표를 취소합니다. 계속하시겠습니까?";

        	this.gfnConfirm(msg, "fnSlip_callback", "SLPCNC");
        };

        // 전표 발행 or 취소 처리
        this.fnSlip_callback = function(strId, val) {
        	if(val == true)
        	{
        		if(strId=="SLPPUB"){
        			this.fnHdExec("SLPPUB");
        		}else if(strId=="SLPCNC"){
        			this.fnHdExec("SLPCNC");
        		}
        	}
        }

        this.fnHdExec = function(flg,acnt){
        	this.dxGrid.updateToDataset();

        	var cd_sites = "";
        	for(var i = 0; i < this.dsList.rowcount; i++){
        		if(this.dsList.getColumn(i, "CHK") == "1"){
        			if(cd_sites != ""){
        				cd_sites += ",";
        			}
        			cd_sites += this.dsList.getColumn(i, "CD_SITE");
        		}
        	}

        	this.dsExec.clearData();

        	var nrow = this.dsExec.addRow();
        	this.dsExec.setColumn(nrow, "TY_WORK", flg);
        	this.dsExec.setColumn(nrow, "CD_SITE", cd_sites);
        	this.dsExec.setColumn(nrow, "YM_ACT", this.dsSearch.getColumn(0, "YM_ACT"));
        	this.dsExec.setColumn(nrow, "ID_USER", this.AuthClient.ID_USER);

        	if (this.dsExec.rowcount == 0) return;

        	var strSvcId    = flg;
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
        						strArg, 			// 입력갑스로 보낼 arguments, strFormData="20120607"
        						callBackFnc); // 통신방법 정의 [생략가능]
        };

        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.form_onload,this);
            this.divData.form.objGrid.addEventHandler("oncelldblclick",this.divData_objGrid_oncelldblclick,this);
            this.dsSearch.addEventHandler("onvaluechanged",this.dsSearch_onvaluechanged,this);
        };
        this.loadIncludeScript("DMB_TM_STOCK_MAGAM.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
