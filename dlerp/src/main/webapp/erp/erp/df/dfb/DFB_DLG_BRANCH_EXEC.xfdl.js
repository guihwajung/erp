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
            this.set_titletext("브랜치전송");
            this.getSetter("maxwidth").set("450");
            this.getSetter("maxheight").set("220");
            if (Form == this.constructor)
            {
                this._setFormPosition(450,160);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("_dsProc", this);
            obj._setContents("<ColumnInfo><Column id=\"TARGET\" type=\"STRING\" size=\"256\"/><Column id=\"SP\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"TARGET\">insert</Col><Col id=\"SP\">DFBPR_BRANCH_INSERT</Col></Row><Row><Col id=\"TARGET\">combo</Col><Col id=\"SP\">DZXPR_COMBO_SELECT</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsList", this);
            obj._setContents("<ColumnInfo><Column id=\"TY_TRAN\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row/></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsTY_TRAN", this);
            obj._setContents("");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Div("divData","0","0",null,null,"0","0",null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_cssclass("div_DATA_Bg");
            obj.set_text("");
            this.addChild(obj.name, obj);

            obj = new Static("staTITLE","10","0","90%","30",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("0");
            obj.set_text("CMS전송");
            obj.set_cssclass("sta_TITLE_Bg");
            obj.set_textAlign("left");
            this.divData.addChild(obj.name, obj);

            obj = new Static("sta01","20","69","80","30",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("3");
            obj.set_text("입금계좌");
            obj.set_textAlign("right");
            obj.set_visible("false");
            obj.set_cssclass("sta_WF_tablelabelE");
            this.divData.addChild(obj.name, obj);

            obj = new Static("staBg2","sta01:-1","69",null,"30","20",null,null,null,null,null,this.divData.form);
            obj.set_taborder("4");
            obj.set_cssclass("sta_WF_tablebg");
            obj.set_visible("false");
            this.divData.addChild(obj.name, obj);

            obj = new Static("sta02","20","sta01:-1","80","30",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("5");
            obj.set_text("출금계좌");
            obj.set_textAlign("right");
            obj.set_visible("false");
            obj.set_cssclass("sta_WF_tablelabelE");
            this.divData.addChild(obj.name, obj);

            obj = new Static("staBg00","sta02:-1","staBg2:-1",null,"30","20",null,null,null,null,null,this.divData.form);
            obj.set_taborder("6");
            obj.set_cssclass("sta_WF_tablebg");
            obj.set_visible("false");
            this.divData.addChild(obj.name, obj);

            obj = new Div("cfCD_IN","sta01:5","74","285","20",null,null,null,null,null,null,this.divData.form);
            obj.getSetter("CodeFindName").set("DFX_CFNO_ACCOUNT");
            obj.getSetter("CDTextWidth").set("150");
            obj.set_taborder("7");
            obj.set_url("cmm::cmmCodeFind.xfdl");
            obj.set_visible("false");
            obj.set_text("");
            this.divData.addChild(obj.name, obj);

            obj = new Div("cfCD_OUT","sta02:5","staBg2:4","285","20",null,null,null,null,null,null,this.divData.form);
            obj.getSetter("CodeFindName").set("DFX_CFNO_ACCOUNT");
            obj.getSetter("CDTextWidth").set("150");
            obj.set_taborder("8");
            obj.set_url("cmm::cmmCodeFind.xfdl");
            obj.set_visible("false");
            this.divData.addChild(obj.name, obj);

            obj = new Button("btnSave","36.89%","119","50","20",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("1");
            obj.set_text("전송");
            this.divData.addChild(obj.name, obj);

            obj = new Button("btnCancel","50.00%","119","50","20",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("2");
            obj.set_text("취소");
            this.divData.addChild(obj.name, obj);

            obj = new Static("staBg00_00","99","40",null,"30","20",null,null,null,null,null,this.divData.form);
            obj.set_taborder("9");
            obj.set_cssclass("sta_WF_tablebg");
            this.divData.addChild(obj.name, obj);

            obj = new Static("sta02_00","20","40","80","30",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("10");
            obj.set_text("이체구분");
            obj.set_textAlign("right");
            obj.set_cursor("none");
            obj.set_cssclass("sta_WF_tablelabelE");
            this.divData.addChild(obj.name, obj);

            obj = new Combo("ccboTY_TRAN","105","45","150","20",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("11");
            obj.set_innerdataset("dsTY_TRAN");
            obj.set_codecolumn("CD_CODE");
            obj.set_datacolumn("DS_CODE");
            obj.set_cursor("none");
            this.divData.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this
            obj = new Layout("default","",this._adjust_width,this._adjust_height,this,function(p){});
            this.addLayout(obj.name, obj);
            
            // BindItem Information
            obj = new BindItem("item1","divData.form.cfCD_IN.form.CDTextBox","value","dsList","NO_IN");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item2","divData.form.cfCD_OUT.form.CDTextBox","value","dsList","NO_OUT");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item0","divData.form.ccboTY_TRAN","value","dsList","TY_TRAN");
            this.addChild(obj.name, obj);
            obj.bind();
            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {
            this._addPreloadList("fdl","cmm::cmmCodeFind.xfdl");
        };
        
        // User Script
        this.registerScript("DFB_DLG_BRANCH_EXEC.xfdl", function() {
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
        // 	this.cfCD_IN = this.divData.form.cfCD_IN;
        // 	this.cfCD_OUT = this.divData.form.cfCD_OUT;
        	this.ccboTY_TRAN = this.divData.form.ccboTY_TRAN;
        };

        /************************************************************************
         * 이벤트 설정
         ************************************************************************/
        this.fnSetEvent = function() {
        // 	this.cfCD_IN.BeforeUserDataSetParam = "fnBeforeUserDataSetParam";
        // 	this.cfCD_OUT.BeforeUserDataSetParam = "fnBeforeUserDataSetParam";
        //
        // 	this.cfCD_IN.AfterCDTextChanged = "fnAfterCDTextChanged";
        // 	this.cfCD_OUT.AfterCDTextChanged = "fnAfterCDTextChanged";
        };

        /************************************************************************
         * 파라미터 설정
         ************************************************************************/
        this.fnSetParameter = function() {

        // 	this.dsInsert = new Dataset();
        // 	this.dsInsert.addColumn("NO_IN", "string");
        // 	this.dsInsert.addColumn("TY_IN", "string");
        // 	this.dsInsert.addColumn("CD_IN", "string");
        // 	this.dsInsert.addColumn("CD_OWNER", "string");
        // 	this.dsInsert.addColumn("NO_OUT", "string");
        // 	this.dsInsert.addColumn("TY_OUT", "string");
        // 	this.dsInsert.addColumn("CD_OUT", "string");

        }

        /************************************************************************
         * 컨트롤 이벤트
         ************************************************************************/

         this.fnSetCombo = function() {

        	this.dsCombo = new Dataset();
        	this.dsCombo.addColumn("CD_SYSTEM", "string");
        	this.dsCombo.addColumn("CD_TYPE", "string");

        	this.dsCombo.addRow();
        	this.dsCombo.setColumn(0, "CD_SYSTEM", "DF");
        	this.dsCombo.setColumn(0, "CD_TYPE", "S5");

        	var strSvcId    = "combo";
        	var strSvcType  = "select";
        	var inProc		= "_dsProc";
        	var inData      = "combo=dsCombo";
        	var outData     = "dsTY_TRAN=combo0";
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
         *	저장 버튼
         */
        this.fnSave = function() {

        }



        /*
         *	삭제 버튼
         */
        this.fnDel = function() {
        	//this.gfnGridDel(this.dxGrid);
        }


        /*
         *	엑셀 버튼
         */
        this.fnExcel = function() {
        	//this.gfnExcelExport(this.dxGrid);
        }

        /*
         *	출력 버튼
         */
        this.fnPrint = function() {
        }
        /************************************************************************
         * Validate
         ************************************************************************/

        /************************************************************************
         * 콜백 이벤트
         ************************************************************************/
        /*
         *	콜백 처리
        */
        this.fnCallback = function(svcID, errorCode, errorMsg)
        {
        	 if(svcID == "combo") {
        	    trace("0 = " + this.getOwnerFrame().CD_CURR);
        		if (this.getOwnerFrame().YN_FRGN == "Y" && this.getOwnerFrame().CD_CURR != "KRW") {
        			this.divData.form.ccboTY_TRAN.set_index(1);

        		}
        		else {
        			this.divData.form.ccboTY_TRAN.set_index(0);
        		}
        	}else
        		{
        			this.gfnAlert(errorMsg);
        		}
        }

        /************************************************************************
         * 코드파인드 이벤트
         ************************************************************************/
        // this.fnBeforeUserDataSetParam = function(id, dsUserParam, nrow) {
        // 	if (id == "cfCD_IN") {
        // 		dsUserParam.setColumn(nrow, "GUBUN", "DF");
        // 		dsUserParam.setColumn(nrow, "CD_CORP", this.getOwnerFrame().CD_CORP);
        // 	}
        // 	else if (id == "cfCD_OUT") {
        // 		dsUserParam.setColumn(nrow, "GUBUN", "MAIN");
        // 		dsUserParam.setColumn(nrow, "CD_CORP", this.getOwnerFrame().CD_CORP);
        // 	}
        // 	return true;
        // }
        //
        // this.fnAfterCDTextChanged = function(id, codeFindData) {
        // 	var arr = codeFindData;
        //
        // 	if (id == "cfCD_IN") {
        // 		if(arr.length > 0) {
        // 			this.dsList.setColumn(0, "NO_IN", arr[0]["NO_ACCOUNT"]);  // 입금계좌
        // 			this.dsList.setColumn(0, "TY_IN", arr[0]["TY_GUBUN"]);	  // 입금계좌구분
        // 			this.dsList.setColumn(0, "CD_IN", arr[0]["CD_BANK"]);	  // 입금은행
        // 			this.dsList.setColumn(0, "CD_OWNER", arr[0]["CD_OWNER"]); // 입금계좌소유주
        //
        // 		}
        // 	}
        //
        // 	if (id == "cfCD_OUT") {
        // 		if(arr.length > 0) {
        // 			this.dsList.setColumn(0, "NO_OUT", arr[0]["NO_ACCOUNT"]); // 출금계좌
        // 			this.dsList.setColumn(0, "TY_OUT", arr[0]["TY_GUBUN"]);   // 출금계좌구분
        // 			this.dsList.setColumn(0, "CD_OUT", arr[0]["CD_BANK"]);	  // 출금은행
        //
        // 		}
        // 	}
        // }

        /************************************************************************
         * 그리드 이벤트
         ************************************************************************/

        /************************************************************************
         * 기타 이벤트
         ************************************************************************/

        // 저장 버튼 클릭
        this.divData_btnSave_onclick = function(obj,e)
        {
        	if(!this.fnSaveValidate()) return;

        	var json = {};
        	json.TY_TRAN = this.dsList.getColumn(0, "TY_TRAN");
        	this.getParentContext().close(JSON.stringify(json));
        };

        // 취소 버튼 클릭
        this.divData_btnCancel_onclick = function(obj,e)
        {
        	this.getParentContext().close(false);
        };

        this.fnSaveValidate = function() {

        	var strMsg = "";

        // 	if(this.gfnIsNull(this.dsList.getColumn(0, "NO_IN"))) {
        // 		strMsg += "입금계좌는 반드시 입력 하셔야 합니다.\n";
        // 	}
        // 	if(this.gfnIsNull(this.dsList.getColumn(0, "NO_OUT"))) {
        // 		strMsg += "출금계좌는 반드시 입력 하셔야 합니다.\n";
        // 	}
        	if(this.gfnIsNull(this.dsList.getColumn(0, "TY_TRAN"))) {
        		strMsg += "이체구분은 반드시 선택 하셔야 합니다.\n";
        	}

        	if(strMsg.length > 0) {
        		this.gfnAlert(strMsg);
        		return false;
        	}

        	return true;
        }


        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.form_onload,this);
            this.divData.form.btnSave.addEventHandler("onclick",this.divData_btnSave_onclick,this);
            this.divData.form.btnCancel.addEventHandler("onclick",this.divData_btnCancel_onclick,this);
            this.divData.form.sta02_00.addEventHandler("onclick",this.divData_sta02_00_onclick,this);
        };
        this.loadIncludeScript("DFB_DLG_BRANCH_EXEC.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
