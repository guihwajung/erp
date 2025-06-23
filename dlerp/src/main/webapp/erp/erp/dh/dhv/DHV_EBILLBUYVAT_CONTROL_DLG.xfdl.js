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
            this.set_titletext("반제전표(팝업)");
            this.getSetter("maxwidth").set("1280");
            this.getSetter("maxheight").set("580");
            if (Form == this.constructor)
            {
                this._setFormPosition(1280,500);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("dsList", this);
            obj._setContents("");
            this.addChild(obj.name, obj);


            obj = new Dataset("_dsProc", this);
            obj._setContents("<ColumnInfo><Column id=\"TARGET\" type=\"STRING\" size=\"256\"/><Column id=\"SP\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"TARGET\">select</Col><Col id=\"SP\">DHVPR_EBILLBUYVAT_APPR_NO</Col></Row><Row><Col id=\"TARGET\">update</Col><Col id=\"SP\">DHVPR_EBILLBUYVAT_AUTOSLIP_UPDATE</Col></Row><Row><Col id=\"TARGET\">execute</Col><Col id=\"SP\">DHVPR_EBILLBUYVAT_AUTOSLIP_ISSUE</Col></Row></Rows>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Static("staTitle","0","10",null,"22","0",null,null,null,null,null,this);
            obj.set_taborder("3");
            obj.set_text("전표생성");
            obj.set_cssclass("sta_TITLE_Bg");
            this.addChild(obj.name, obj);

            obj = new Div("divData","0","staTitle:10",null,null,"0","45",null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_cssclass("div_DATA_Bg");
            this.addChild(obj.name, obj);

            obj = new Grid("objGrid","0","0",null,null,"0","0",null,null,null,null,this.divData.form);
            obj.set_taborder("0");
            obj._setContents("");
            this.divData.addChild(obj.name, obj);

            obj = new Button("btnConf","511",null,"69","27",null,"7",null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_text("전표발행");
            this.addChild(obj.name, obj);

            obj = new Button("btnCancel","590",null,"69","27",null,"7",null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_text("닫기");
            this.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this
            obj = new Layout("default","",this._adjust_width,this._adjust_height,this,function(p){});
            this.addLayout(obj.name, obj);
            
            // BindItem Information

            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script
        this.registerScript("DHV_EBILLBUYVAT_CONTROL_DLG.xfdl", function() {
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

        	this.fnSelect();
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

        };

        /************************************************************************
         * 변수 선언
         ************************************************************************/
        this.fnSetVariable = function() {
        	this.dxGrid        = this.divData.form.objGrid;
        };

        /************************************************************************
         * 이벤트 설정
         ************************************************************************/
        this.fnSetEvent = function() {
        	this.gfnGridInit(this.dxGrid, this.dsList, "DH", "DHV_EBILLBUYVAT_CONTROL_AUTOSLIP");

        	this.dxGrid.BeforeUserDataSetParam = "fnGrid_BeforeUserDataSetParam";
        	this.dxGrid.AfterCDTextChanged = "fnGrid_AfterCDTextChanged";
        };

        /************************************************************************
         * 파라미터 설정
         ************************************************************************/
        this.fnSetParameter = function() {
        	this.dsSelect = new Dataset();
        	this.dsSelect.addColumn("APPR_NO", "string");
        	this.dsSelect.addColumn("TY_SALBUY", "string");

        	this.dsUpdate = new Dataset();
        	this.dsUpdate.addColumn("APPR_NO", "string");
        	this.dsUpdate.addColumn("CD_DEPT_BE", "string");
        	this.dsUpdate.addColumn("DR_CD_ACCOUNT", "string");
        	this.dsUpdate.addColumn("CR_CD_ACOCOUNT", "string");
        	this.dsUpdate.addColumn("TY_SALBUY", "string");
        	this.dsUpdate.addColumn("DS_REM", "string");

        	this.dsExecute = new Dataset();
        	this.dsExecute.addColumn("APPR_NO", "string");
        	this.dsExecute.addColumn("ID_SABUN", "string");
        	this.dsExecute.addColumn("CD_DEPT", "string");
        	this.dsExecute.addColumn("TY_SALEBUY", "string");
        	this.dsExecute.addColumn("CD_TRADE", "string");
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
        	this.dsSelect.setColumn(0, "APPR_NO", this.getOwnerFrame().APPR_NO);
        	this.dsSelect.setColumn(0, "TY_SALBUY", this.getOwnerFrame().TY_SALBUY);

        	var strSvcId    = "select";
        	var strSvcType  = "grid";
        	var inProc		= "_dsProc";
        	var inData      = "select=dsSelect";
        	var outData     = "dsList=select0";
        	var strArg      = "";
        	var callBackFnc = "fnCallback";

        	this.gfnTransaction( strSvcId , 	// transaction을 구분하기 위한 svc id값
        						strSvcType , 	// trabsaction을 요청할 구분
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
        			this.fnExecuteData();
        		} else {
        			this.gfnAlert(errorMsg);
        		}
        	}
        	else if(svcID == "execute") {
        		if (errorCode == 0) {
        			this.fnExecute_callback = function() {
        				this.getParentContext().close(true);
        			}
        			this.gfnAlert("전표발행이 완료되었습니다.", "fnExecute_callback");
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
        this.fnGrid_BeforeUserDataSetParam = function(id, dsUserParam, nrow) {
        	if (id == "DHX_CFDEPT_02") {
        		dsUserParam.setColumn(nrow, "CD_CORP", this.AuthClient.CD_CORP);
        	}
        	return true;
        }

        this.fnGrid_AfterCDTextChanged = function(id, codeFindData) {
        	if (id == "DHX_CFDEPT_02") {
        		var arr = codeFindData;
        		if(arr.length > 0) {
        			for (var i=0; i<this.dsList.rowcount; i++) {
        				this.dsList.setColumn(i, "CD_DEPT_BE", arr[0]["CD_DEPT"]);
        				this.dsList.setColumn(i, "DS_DEPT_ACNT", arr[0]["DS_DEPT"]);
        			}
        		}
        	}
        	else if (id == "DHX_CFACNT") {
        		var arr = codeFindData;
        		if(arr.length > 0) {
        			for (var i=0; i<this.dsList.rowcount; i++) {
        				this.dsList.setColumn(i, "DR_CD_ACCOUNT", arr[0]["CD_ACCOUNT"]);
        				this.dsList.setColumn(i, "DR_DS_ACCOUNT", arr[0]["DS_ACCOUNT"]);
        			}
        		}
        	}
        	else if (id == "DHX_CFACNT2") {
        		var arr = codeFindData;
        		if(arr.length > 0) {
        			for (var i=0; i<this.dsList.rowcount; i++) {
        				this.dsList.setColumn(i, "CR_CD_ACCOUNT", arr[0]["CD_ACCOUNT"]);
        				this.dsList.setColumn(i, "CR_DS_ACCOUNT", arr[0]["DS_ACCOUNT"]);
        			}
        		}
        	}
        };

        /************************************************************************
         * 기타 이벤트
         ************************************************************************/
        //취소버튼 클릭
        this.btnCancel_onclick = function(obj,e)
        {
        	this.getParentContext().close(false);
        };

        //확인버튼 클릭
        this.btnConf_onclick = function(obj,e)
        {
        	if (this.dsList.rowcount == 0) return;
        	if (!this.gfnGridValidate(this.dxGrid)) return;

        	this.dxGrid.updateToDataset();

        	this.dsUpdate.clearData();

        	for (var i = 0; i < this.dsList.rowcount; i++) {
        		var flag = this.gfnGetFlag(this.dsList, i);
        		switch(flag) {
        			case "U":
        				var nrow = this.dsUpdate.addRow();
        				this.dsUpdate.setColumn(nrow, "APPR_NO", this.dsList.getColumn(i, "APPR_NO"));
        				this.dsUpdate.setColumn(nrow, "CD_DEPT_BE", this.dsList.getColumn(i, "CD_DETP_BE"));
        				this.dsUpdate.setColumn(nrow, "DR_CD_ACCOUNT", this.dsList.getColumn(i, "DR_CD_ACCOUNT"));
        				this.dsUpdate.setColumn(nrow, "CR_CD_ACOCOUNT", this.dsList.getColumn(i, "CR_CD_ACCOUNT"));
        				this.dsUpdate.setColumn(nrow, "TY_SALBUY", this.getOwnerFrame().TY_SALBUY);
        				this.dsUpdate.setColumn(nrow, "DS_REM", this.dsList.getColumn(i, "DS_REM"));
        				break;
        		}
        	}

        	if (this.dsUpdate.rowcount == 0) return;

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
        };

        this.fnExecuteData = function() {
        if (this.dsList.rowcount == 0) return;
        	if (!this.gfnGridValidate(this.dxGrid)) return;

        	this.dxGrid.updateToDataset();

        	this.dsExecute.clearData();
        	this.dsExecute.addRow();
        	this.dsExecute.setColumn(0, "APPR_NO", this.getOwnerFrame().APPR_NO);
        	this.dsExecute.setColumn(0, "ID_SABUN", this.AuthClient.ID_USER);
        	this.dsExecute.setColumn(0, "CD_DEPT", this.AuthClient.CD_DEPT);
        	this.dsExecute.setColumn(0, "TY_SALEBUY", this.getOwnerFrame().TY_SALBUY);
        	this.dsExecute.setColumn(0, "CD_TRADE", "");

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

        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.form_onload,this);
            this.btnConf.addEventHandler("onclick",this.btnConf_onclick,this);
            this.btnCancel.addEventHandler("onclick",this.btnCancel_onclick,this);
        };
        this.loadIncludeScript("DHV_EBILLBUYVAT_CONTROL_DLG.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
