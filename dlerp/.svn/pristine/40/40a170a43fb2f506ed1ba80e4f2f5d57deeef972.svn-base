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
            this.set_titletext("공동도급수금관리");
            if (Form == this.constructor)
            {
                this._setFormPosition(1280,720);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("dsList", this);
            obj._setContents("");
            this.addChild(obj.name, obj);


            obj = new Dataset("_dsProc", this);
            obj._setContents("<ColumnInfo><Column id=\"TARGET\" type=\"STRING\" size=\"256\"/><Column id=\"SP\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"TARGET\">select</Col><Col id=\"SP\">DOFPR_JTCOLLECT_SELECT</Col></Row><Row><Col id=\"TARGET\">insert</Col><Col id=\"SP\">DOFPR_JTCOLLECT_INSERT</Col></Row><Row><Col id=\"TARGET\">update</Col><Col id=\"SP\">DOFPR_JTCOLLECT_UPDATE</Col></Row><Row><Col id=\"TARGET\">delete</Col><Col id=\"SP\">DOFPR_JTCOLLECT_DELETE</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsSearch", this);
            obj._setContents("<ColumnInfo><Column id=\"CD_FIELD\" type=\"STRING\" size=\"256\"/><Column id=\"DS_FIELD\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row/></Rows>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Div("divSearch","0.0","10.0",null,"46.0","0",null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_cssclass("div_SEARCH_Bg");
            obj.set_formscrolltype("none");
            this.addChild(obj.name, obj);

            obj = new Static("staCD_FIELD","0.0","10.0","92.0","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("0");
            obj.set_text("현장코드");
            obj.set_cssclass("sta_WF_SchLabelE");
            this.divSearch.addChild(obj.name, obj);

            obj = new Div("ccfCD_FIELD","staCD_FIELD:0.0","10.0","250","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.getSetter("CodeFindName").set("DOXPR_CONTRCT_CODEFIND");
            obj.getSetter("CDTextWidth").set("65");
            obj.set_taborder("1");
            obj.set_url("cmm::cmmCodeFind.xfdl");
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
            obj = new BindItem("item0","divSearch.form.ccfCD_FIELD.form.CDTextBox","value","dsSearch","CD_FIELD");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item1","divSearch.form.ccfCD_FIELD.form.DSTextBox","value","dsSearch","DS_FIELD");
            this.addChild(obj.name, obj);
            obj.bind();
            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {
            this._addPreloadList("fdl","cmm::cmmCodeFind.xfdl");
        };
        
        // User Script
        this.registerScript("DOF_JTCOLLECT.xfdl", function() {
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

        	if(!this.gfnIsNull(this.getOwnerFrame().CD_FIELD)){
        		this.dsSearch.setColumn(0, "CD_FIELD", this.getOwnerFrame().CD_FIELD);
        		this.dsSearch.setColumn(0, "DS_FIELD", this.getOwnerFrame().DS_FIELD);

        		this.FormBtns.Select.click();
        	}

        };

        /************************************************************************
         * 버튼 설정 : 화면(Tab) 전환시 마다 호출
         * 서브버튼 사용 및 공통버튼 강제 제어시 여기서 처리
         ************************************************************************/
        this.fnSetButton = function() {
        }

        /************************************************************************
         * 확장 버튼 : 화면별 버튼 설정 ID, function 연결 (화면버튼관리)
         ************************************************************************/
        this.fnSetExtendButton = function() {
            this.btnSlipSelect = this.gfnFormButtonAdd("btnSlipSelect", "fnSlipSelect", "전표조회");
        };

        /************************************************************************
         * 변수 선언
         ************************************************************************/
        this.fnSetVariable = function() {
            this.ccfCD_FIELD = this.divSearch.form.ccfCD_FIELD; //현장코드
        	this.dxGrid = this.divData.form.objGrid;
        };

        /************************************************************************
         * 이벤트 설정
         ************************************************************************/
        this.fnSetEvent = function() {
        	// 그리드 초기화
        	this.gfnGridInit(this.dxGrid, this.dsList, "DO", "DOF_JTCOLLECT");
        	this.ccfCD_FIELD.BeforeUserDataSetParam = "fnBeforeUserDataSetParam";
        	this.dxGrid.BeforeUserDataSetParam = "fnGrid_BeforeUserDataSetParam";
        };

        /************************************************************************
         * 파라미터 설정
         ************************************************************************/
        this.fnSetParameter = function() {
        	this.dsSelect = new Dataset();
        	this.dsSelect.addColumn("CD_FIELD", "string");

        	this.dsInsert = new Dataset();
        	this.dsInsert.addColumn("CD_FIELD", "string");
        	this.dsInsert.addColumn("NO_INCONFIRM", "string");
        	this.dsInsert.addColumn("DT_COLT", "string");
        	this.dsInsert.addColumn("AM_COLT", "bigdecimal");
        	this.dsInsert.addColumn("AM_DIVIDE", "bigdecimal");
        	this.dsInsert.addColumn("DS_RM", "string");
        	this.dsInsert.addColumn("ID_USER", "string");

        	this.dsUpdate = new Dataset();
        	this.dsUpdate.addColumn("CD_FIELD", "string");
        	this.dsUpdate.addColumn("NO_COLT", "int");
        	this.dsUpdate.addColumn("NO_INCONFIRM", "string");
        	this.dsUpdate.addColumn("DT_COLT", "string");
        	this.dsUpdate.addColumn("AM_COLT", "bigdecimal");
        	this.dsUpdate.addColumn("AM_DIVIDE", "bigdecimal");
        	this.dsUpdate.addColumn("DS_RM", "string");
        	this.dsUpdate.addColumn("ID_USER", "string");

        	this.dsDelete = new Dataset();
        	this.dsDelete.addColumn("CD_FIELD", "string");
        	this.dsDelete.addColumn("NO_COLT", "int");
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

        	this.dsSelect.setColumn(0, "CD_FIELD", this.dsSearch.getColumn(0, "CD_FIELD"));

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
        	var nrow = this.gfnGridAdd(this.dxGrid); // top (default), bottom, current
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
        	// 그리드 필수항목 체크
        	if (!this.gfnGridValidate(this.dxGrid)) return;

        	this.dxGrid.updateToDataset();

        	this.dsInsert.clearData();
        	this.dsUpdate.clearData();
        	this.dsDelete.clearData();

        	for (var i = 0; i < this.dsList.rowcount; i++) {
        		var flag = this.gfnGetFlag(this.dsList, i);
        		switch(flag) {
        			case "I":
        				var nrow = this.dsInsert.addRow();
                        this.dsInsert.setColumn(nrow, "CD_FIELD", this.dsSearch.getColumn(0, "CD_FIELD"));
        				this.dsInsert.setColumn(nrow, "NO_INCONFIRM", this.dsList.getColumn(i, "NO_INCONFIRM"));
        				this.dsInsert.setColumn(nrow, "DT_COLT", this.dsList.getColumn(i, "DT_COLT"));
        				this.dsInsert.setColumn(nrow, "AM_COLT", this.dsList.getColumn(i, "AM_COLT"));
        				this.dsInsert.setColumn(nrow, "AM_DIVIDE", this.dsList.getColumn(i, "AM_DIVIDE"));
        				this.dsInsert.setColumn(nrow, "DS_RM", this.dsList.getColumn(i, "DS_RM"));
        				this.dsInsert.setColumn(nrow, "ID_USER", this.AuthClient.ID_USER);
        				break;

        			case "U":
        				var nrow = this.dsUpdate.addRow();
                        this.dsUpdate.setColumn(nrow, "CD_FIELD", this.dsSearch.getColumn(0, "CD_FIELD"));
        				this.dsUpdate.setColumn(nrow, "NO_COLT", this.dsList.getColumn(i, "NO_COLT"));
        				this.dsUpdate.setColumn(nrow, "NO_INCONFIRM", this.dsList.getColumn(i, "NO_INCONFIRM"));
        				this.dsUpdate.setColumn(nrow, "DT_COLT", this.dsList.getColumn(i, "DT_COLT"));
        				this.dsUpdate.setColumn(nrow, "AM_COLT", this.dsList.getColumn(i, "AM_COLT"));
        				this.dsUpdate.setColumn(nrow, "AM_DIVIDE", this.dsList.getColumn(i, "AM_DIVIDE"));
        				this.dsUpdate.setColumn(nrow, "DS_RM", this.dsList.getColumn(i, "DS_RM"));
        				this.dsUpdate.setColumn(nrow, "ID_USER", this.AuthClient.ID_USER);
        				break;

        			case "D":
        				var nrow = this.dsDelete.addRow();
          				this.dsDelete.setColumn(nrow, "CD_FIELD", this.dsSearch.getColumn(0, "CD_FIELD"));
        				this.dsDelete.setColumn(nrow, "NO_COLT", this.dsList.getColumn(i, "NO_COLT"));
        				break;
        		}
        	}

        	if (this.dsInsert.rowcount == 0 && this.dsUpdate.rowcount == 0 && this.dsDelete.rowcount == 0) return;

        	var strSvcId    = "save";
        	var strSvcType  = "save";
        	var inProc		= "_dsProc";
        	var inData      = "insert=dsInsert update=dsUpdate delete=dsDelete";
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
         * Validate
         ************************************************************************/
        /*
         *	조회 Validate
         */
        this.fnSelectValidate = function() {
        	var validate = true;
        	if (this.gfnIsNull(this.dsSearch.getColumn(0,"CD_FIELD"))) {
        		validate = false;
        		//Alert후 실행할 처리
        		this.fnVaidateCallback = function() {
        			this.ccfCD_FIELD.form.CDTextBox.setFocus();
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
        this.fnBeforeUserDataSetParam = function(id, dsUserParam, nrow)
        {
        	if(id == "ccfCD_FIELD"){

        	}

        	return true;
        }
        /************************************************************************
         * 그리드 이벤트
         ************************************************************************/
         this.fnGrid_BeforeUserDataSetParam = function(id, dsUserParam, nrow) {
        	// 사원번호
        	if(id = "DFX_CFNO_INCOMELIST") {
        		dsUserParam.setColumn(nrow, "CD_DEPT", this.dsSearch.getColumn(0, "CD_FIELD"));
        		dsUserParam.setColumn(nrow, "CD_CORP", this.AuthClient.CD_CORP);
        		dsUserParam.setColumn(nrow, "NO_ACCOUNT", "");
        		dsUserParam.setColumn(nrow, "DT_TRADE", "");
        		dsUserParam.setColumn(nrow, "TY_NOTE", "C");
        		dsUserParam.setColumn(nrow, "TY_INLIST", "모계좌");

        	}

        	return true;
        };
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


        // 전표조회
        this.fnSlipSelect = function(obj,e) {

            // 선택된 row가 있을 경우에만 팝업을 띄움
        	if (!this.gfnGridIsRow(this.dxGrid)) { return false; }
        	//var chkRow = this.dsList.findRow("CHK", 1);
        	var param = {};
        	param.CD_TRADE = this.dsList.getColumn(this.dsList.rowposition, "NO_SLIP");
        	param.IUD_FLAG = "S";
        	param.strYN_JUNDO_START = "";

        	// 화면 오픈.
        	// CD_MODULE은 보통 같은 모듈에서 호출하는 경우가 많으니 this.FormInfo.CD_MODULE 사용
        	// 타 모듈 화면 호출시 지정할것.
        	//trace("this.FormInfo.CD_MODULE :: " + this.FormInfo.CD_MODULE);
        	this.gfnFormOpen("DHA", "DHA_ISSUESLIP", "fnPopCallBack", param);

        }
        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.form_onload,this);
            this.dsSearch.addEventHandler("onvaluechanged",this.dsSearch_onvaluechanged,this);
        };
        this.loadIncludeScript("DOF_JTCOLLECT.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
