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
            this.set_titletext("배정내역상세");
            if (Form == this.constructor)
            {
                this._setFormPosition(1280,720);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("dsList", this);
            obj._setContents("");
            this.addChild(obj.name, obj);


            obj = new Dataset("_dsProc", this);
            obj._setContents("<ColumnInfo><Column id=\"TARGET\" type=\"STRING\" size=\"256\"/><Column id=\"SP\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"TARGET\">select</Col><Col id=\"SP\">DFBPR_EXECQUERY_SELECT</Col></Row><Row><Col id=\"TARGET\">update</Col><Col id=\"SP\">DFBPR_REQUEST_UPDATE</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsSearch", this);
            obj._setContents("<ColumnInfo><Column id=\"SEQ_EXEC\" type=\"BIGDECIMAL\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"SEQ_EXEC\"/></Row></Rows>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Div("divSearch","0.0","10.0",null,"46.0","0",null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_cssclass("div_SEARCH_Bg");
            this.addChild(obj.name, obj);

            obj = new Static("sta00","0.0","10.0","92.0","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("1");
            obj.set_text("집행순번");
            obj.set_cssclass("sta_WF_SchLabel");
            this.divSearch.addChild(obj.name, obj);

            obj = new Edit("txtSEQ_EXEC","sta00:0.0","10.0","140","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("0");
            obj.set_text("2343234234");
            this.divSearch.addChild(obj.name, obj);

            obj = new Div("divData","0","divSearch:10",null,null,"0","0",null,null,null,null,this);
            obj.set_taborder("1");
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
            obj = new BindItem("item0","divSearch.form.txtSEQ_EXEC","value","dsSearch","SEQ_EXEC");
            this.addChild(obj.name, obj);
            obj.bind();
            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script
        this.registerScript("DFB_EXECQUERY.xfdl", function() {
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
        	this.fnSetCombo();

        	// 타화면에서 호출 및 파라미터 존재시 자동 조회
        	if(!this.gfnIsNull(this.getOwnerFrame().SEQ_EXEC)) {
        		// 집행순번
        		this.dsSearch.setColumn(0, "SEQ_EXE", this.getOwnerFrame().SEQ_EXEC);
        		this.txtSEQ_EXEC.set_value(this.getOwnerFrame().SEQ_EXEC);
        		this.txtSEQ_EXEC.set_readonly(true);
        		this.FormBtns.Select.click();
        	}
        };

        /************************************************************************
         * 버튼 설정 : 화면(Tab) 전환시 마다 호출
         ************************************************************************/
        this.fnSetButton = function() {
        };

        /************************************************************************
         * 확장 버튼 : 화면별 버튼 설정 ID, function 연결 (화면버튼관리)
         ************************************************************************/
        this.fnSetExtendButton = function() {
        	this.btnChitSelect = this.gfnFormButtonAdd("btnChitSelect", "fnChitSelect", "전표조회");
        	//this.btnElctrncPmntDoc = this.gfnFormButtonAdd("btnElctrncPmntDoc", "fnElctrncPmntDoc", "전자결재문서조회");
        };

        // 전표조회
        this.fnChitSelect = function(obj,e) {
        	if(!this.gfnGridIsRow(this.dxGrid)) return;

        	var noSlip = this.dsList.getColumn(this.dsList.rowposition, "NO_SLIP");

        	if ( this.gfnIsNull(noSlip) ) {
        		this.gfnAlert("발행된 전표가 없습니다.");
        		return false;
        	}

        	var param = {};

        	param.CD_TRADE = noSlip;
        	param.IUD_FLAG = "";
        	param.strYN_JUNDO_START = "";

        	this.gfnFormOpen("DHA", "DHA_ISSUESLIP", "fnPopCallBack", param);
        }

        /************************************************************************
         * 변수 선언
         ************************************************************************/
        this.fnSetVariable = function() {

        	this.txtSEQ_EXEC = this.divSearch.form.txtSEQ_EXEC;	// 집행순번

        	this.dxGrid = this.divData.form.objGrid;		// 그리드
        	this.grSearch = this.FormInfo.GR_SEARCH;		// 권한?
        	this.cdGroup = this.gfnIsNull(this.AuthClient.CD_GROUP) ? "" : this.AuthClient.CD_GROUP;			// 그룹코드
        }

        /************************************************************************
         * 이벤트 설정
         ************************************************************************/
        this.fnSetEvent = function() {

        	// 그리드
        	this.gfnGridInit(this.dxGrid, this.dsList, "DF", "DFB_EXECQUERY");
        	this.dxGrid.BeforeUserDataSetParam = "fnGrid_BeforuserDataSetParam";
        	this.dxGrid.AfterCDTextChanged = "fnGrid_AfterCDTextChanged";


        	// 권한체크 - 해당부서내역만 조회가능
        // 	if (nexacro.toNumber(this.grSearch) >= 2) {
        // 		this.txtSEQ_EXEC.set_enable(false);
        // 	}

        	// 집행순번 포커스추가
        	//this.txtSEQ_EXEC.setFocus();
        }

        /************************************************************************
         * 파라미터 설정
         ************************************************************************/
        this.fnSetParameter = function() {

        	this.dsSelect = new Dataset();
        	this.dsSelect.addColumn("SEQ_EXEC", "bigdecimal");

        	this.dsUpdate = new Dataset();
        	this.dsUpdate.addColumn("NO_REQUEST", "string");
        	this.dsUpdate.addColumn("SEQ_ALLOT", "int");
        	this.dsUpdate.addColumn("YN_DEFER", "string");
        	this.dsUpdate.addColumn("AM_DEFER", "bigdecimal");
        	this.dsUpdate.addColumn("RM_DEFER", "string");
        	this.dsUpdate.addColumn("DT_EXPIRY", "string");
        	this.dsUpdate.addColumn("TY_PAYMENT2", "string");
        	this.dsUpdate.addColumn("CD_SUJI", "string");
        	this.dsUpdate.addColumn("ID_USER", "string");
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
        	this.dsSelect.setColumn(0, "SEQ_EXEC", this.dsSearch.getColumn(0, "SEQ_EXEC"));

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
        						strArg, 		// 입력갑스로 보낼 arguments, strFormData="20120607"
        						callBackFnc); 	// 통신방법 정의 [생략가능]
        }

        /*
         *	입력 버튼
         */
        this.fnAdd = function() {
        	var nRow = this.gfnGridAdd(this.dxGrid);
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

        	this.dxGrid.updateToDataset();

        	//this.dsInsert.clearData();
        	this.dsUpdate.clearData();
        	//this.dsDelete.clearData();

        	for (var i = 0; i < this.dsList.rowcount; i++) {
        		var flag = this.gfnGetFlag(this.dsList, i);
        		switch(flag) {
        // 			case "I":
        // 				var nrow = this.dsInsert.addRow();
        // 				this.dsInsert.setColumn(nrow, "CD_SITE", this.dsList.getColumn(i, "CD_SITE"));
        // 				this.dsInsert.setColumn(nrow, "CD_CORP", this.dsList.getColumn(i, "CD_CORP"));
        // 				this.dsInsert.setColumn(nrow, "YN_USE", this.dsList.getColumn(i, "YN_USE"));
        // 				this.dsInsert.setColumn(nrow, "RM_BIGO", this.dsList.getColumn(i, "RM_BIGO"));
        // 				this.dsInsert.setColumn(nrow, "ID_USER", this.AuthClient.ID_USER);
        // 				break;

        			case "U":
        				var nrow = this.dsUpdate.addRow();
        				this.dsUpdate.setColumn(nrow, "NO_REQUEST", this.dsList.getColumn(i, "NO_REQUEST"));
        				this.dsUpdate.setColumn(nrow, "SEQ_ALLOT", this.dsList.getColumn(i, "SEQ_ALLOT"));
        				this.dsUpdate.setColumn(nrow, "YN_DEFER", this.dsList.getColumn(i, "YN_DEFER"));
        				this.dsUpdate.setColumn(nrow, "AM_DEFER", this.dsList.getColumn(i, "AM_DEFER"));
        				this.dsUpdate.setColumn(nrow, "RM_DEFER", this.dsList.getColumn(i, "RM_DEFER"));
        				this.dsUpdate.setColumn(nrow, "DT_EXPIRY", this.dsList.getColumn(i, "DT_EXPIRY"));
        				this.dsUpdate.setColumn(nrow, "TY_PAYMENT2", this.dsList.getColumn(i, "TY_PAYMENT2"));
        				this.dsUpdate.setColumn(nrow, "CD_SUJI", this.dsList.getColumn(i, "CD_SUJI"));
        				this.dsUpdate.setColumn(nrow, "ID_USER", this.AuthClient.ID_USER);
        				break;

        // 			case "D":
        // 				var nrow = this.dsDelete.addRow();
        // 				this.dsDelete.setColumn(nrow, "CD_SITE", this.dsList.getColumn(i, "CD_SITE"));
        // 				break;
        		}
        	}

        	if (this.dsUpdate.rowcount == 0) return;
        	//if (this.dsInsert.rowcount == 0 && this.dsUpdate.rowcount == 0 && this.dsDelete.rowcount == 0) return;

        	var strSvcId    = "save";
        	var strSvcType  = "save";
        	var inProc		= "_dsProc";
        	var inData      = "update=dsUpdate";
        	//var inData      = "insert=dsInsert update=dsUpdate delete=dsDelete";
        	var outData     = "";
        	var strArg      = "";
        	var callBackFnc = "fnCallback";

        	this.gfnTransaction( strSvcId , 	// transaction을 구분하기 위한 svc id값
        						strSvcType , 	// transaction을 요청할 구분
        						inProc,			// Procedure 정보 Dataset 이름
        						inData , 		// 입력값으로 보낼 dataset id , a=b형태로 실제이름과 입력이름을 매칭
        						outData , 		// 처리결과값으로 받을 dataset id, a=b형태로 실제이름과 입력이름을 매칭
        						strArg, 		// 입력갑스로 보낼 arguments, strFormData="20120607"
        						callBackFnc); 	// 통신방법 정의 [생략가능]
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
        	}
        	else if(svcID == "save") {
        		if (errorCode == 0) {
        			this.FormBtns.Select.click();
        		} else {
        			this.gfnAlert(errorMsg);
        		}
        	}
        }

        /************************************************************************
         * 코드파인드 이벤트
         ************************************************************************/
        this.fnBeforeUserDataSetParam = function(id, dsUserParam, nrow) {
        	return true;
        }

        this.fnAfterCDTextChanged = function(id) {
        }


        this.fnGrid_BeforuserDataSetParam = function(id, dsUserParam, nrow) {

            // 수지
        	if (id == "DFX_CFSUJICODE") {
        		dsUserParam.setColumn(nrow, "TY_INOUT", "O");
        		dsUserParam.setColumn(nrow, "YN_USE", "Y");
        	}

        	return true;
        }

        this.fnGrid_AfterCDTextChanged = function(id, codeFindData) {
        };

        /************************************************************************
         * 그리드 이벤트
         ************************************************************************/

        /************************************************************************
         * 기타 이벤트
         ************************************************************************/
         // 전자결재문서조회
        this.fnElctrncPmntDoc = function(obj,e) {
        	if(!this.gfnGridIsRow(this.dxGrid)) return;

        	var nICnt = this.dsList.findRow(this.ucFlag,"I");
        	var nUCnt = this.dsList.findRow(this.ucFlag,"U");
        	var nDCnt = this.dsList.findRow(this.ucFlag,"D");

        	if( nICnt > -1|| nUCnt > -1 || nDCnt > -1) {
        		this.gfnAlert("저장 후 처리하세요.", "");
        		return;
        	}

        	// 결재상태 0 : 결재전 시 return;
        // 	var tyAppr = this.dsList.getColumn(this.dsList.rowposition, "TY_APPR");
        // 	if ( tyAppr == "0") {
        // 		this.gfnAlert("결재상태를 확인 바랍니다.");
        // 		return;
        // 	}

        	var url = this.gfnGetConfig("DZ" , "GW_APROVAL_URL");
        	url += "approval/approval_Form.do?";
        	url +="forminstanceID="+this.dsList.getColumn(this.dsList.rowposition , "NO_APPR");
        	url +="&processID="+this.dsList.getColumn(this.dsList.rowposition , "NM_APPR");

        	trace("url :: " + url);
        	window.open(url,"_blank", "width=790,height=1000,menubar=no,scrollbars=no,resizable=no,status=no");
        }

        /*
         *	조회 조건 변경시 초기화
         */
        this.fnSearchInit = function(obj,e) {
        	if(e == null || (e.pretext != e.posttext)) {
        		this.gfnSetFormStatus(this);
        		this.gfnGridClear(this.dxGrid);
        	}
        };

        this.fnSetCombo = function() {
        };

        this.dsSearch_onvaluechanged = function(obj,e)
        {
        	if(e.oldvalue != e.newvalue) {
        		this.gfnSetFormStatus(this);	// 폼상태 초기화
        		this.gfnGridClear(this.dxGrid);
        	}
        };
        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.form_onload,this);
            this.dsSearch.addEventHandler("onvaluechanged",this.dsSearch_onvaluechanged,this);
        };
        this.loadIncludeScript("DFB_EXECQUERY.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
