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
            this.getSetter("maxwidth").set("450");
            this.getSetter("maxheight").set("200");
            if (Form == this.constructor)
            {
                this._setFormPosition(450,200);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("_dsProc", this);
            obj._setContents("<ColumnInfo><Column id=\"TARGET\" type=\"STRING\" size=\"256\"/><Column id=\"SP\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"TARGET\">insert</Col><Col id=\"SP\">DFBPR_REQUESTDTL_ACCOUNT_EDIT</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsList", this);
            obj._setContents("<ColumnInfo><Column id=\"NO_ACCOUNT\" type=\"STRING\" size=\"256\"/><Column id=\"DS_ACCOUNT\" type=\"STRING\" size=\"256\"/><Column id=\"NO_ACCOUNT_AFTER\" type=\"STRING\" size=\"256\"/><Column id=\"DS_BANK_AFTER\" type=\"STRING\" size=\"256\"/><Column id=\"CD_BANK_AFTER\" type=\"STRING\" size=\"256\"/><Column id=\"TY_GUBUN_AFTER\" type=\"STRING\" size=\"256\"/><Column id=\"NO_REQUEST\" type=\"STRING\" size=\"256\"/><Column id=\"SEQ_ALLOT\" type=\"STRING\" size=\"256\"/><Column id=\"TY_VENDOR\" type=\"STRING\" size=\"256\"/><Column id=\"CD_PAY\" type=\"STRING\" size=\"256\"/><Column id=\"TY_CASH\" type=\"STRING\" size=\"256\"/><Column id=\"CD_CORP\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row/></Rows>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Div("divData","0","0",null,null,"0","0",null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_cssclass("div_DATA_Bg");
            obj.set_text("");
            this.addChild(obj.name, obj);

            obj = new Static("staTITLE","0","0","100%","30",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("0");
            obj.set_text("계좌번호변경");
            obj.set_cssclass("sta_TITLE_Bg");
            obj.set_textAlign("left");
            this.divData.addChild(obj.name, obj);

            obj = new Static("staBEFORE","0","40","110","30",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("3");
            obj.set_text("변경전");
            obj.set_cssclass("sta_WF_tablelabel");
            obj.set_textAlign("right");
            this.divData.addChild(obj.name, obj);

            obj = new Static("staAFTER","0","staBEFORE:-1","110","30",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("4");
            obj.set_text("변경후");
            obj.set_cssclass("sta_WF_tablelabel");
            obj.set_textAlign("right");
            this.divData.addChild(obj.name, obj);

            obj = new Static("staBg1","109","40",null,"30","0",null,null,null,null,null,this.divData.form);
            obj.set_taborder("6");
            obj.set_cssclass("sta_WF_tablebg");
            this.divData.addChild(obj.name, obj);

            obj = new Static("staBg2","staAFTER:-1","staBg1:-1",null,"30","0",null,null,null,null,null,this.divData.form);
            obj.set_taborder("5");
            obj.set_cssclass("sta_WF_tablebg");
            this.divData.addChild(obj.name, obj);

            obj = new Edit("txtNO_ACCOUNT","staBEFORE:5","45","180","20",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("7");
            obj.set_autoselect("true");
            this.divData.addChild(obj.name, obj);

            obj = new Button("btnSave","38.64%","127","50","20",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("1");
            obj.set_text("저장");
            this.divData.addChild(obj.name, obj);

            obj = new Button("btnCancel","50.23%","127","50","20",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("2");
            obj.set_text("취소");
            this.divData.addChild(obj.name, obj);

            obj = new Edit("txtDS_ACCOUNT","txtNO_ACCOUNT:5","45","100","20",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("8");
            obj.set_autoselect("true");
            this.divData.addChild(obj.name, obj);

            obj = new Div("cfNO_ACCOUNT_AFTER","staAFTER:5","staBg1:4","285","20",null,null,null,null,null,null,this.divData.form);
            obj.getSetter("CodeFindName").set("DFX_CFACCOUNTMATCH");
            obj.getSetter("CDTextWidth").set("159");
            obj.set_taborder("9");
            obj.set_url("cmm::cmmCodeFind.xfdl");
            this.divData.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this
            obj = new Layout("default","",this._adjust_width,this._adjust_height,this,function(p){});
            this.addLayout(obj.name, obj);
            
            // BindItem Information
            obj = new BindItem("item0","divData.form.txtNO_ACCOUNT","value","dsList","NO_ACCOUNT");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item1","divData.form.txtDS_ACCOUNT","value","dsList","DS_ACCOUNT");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item2","divData.form.cfNO_ACCOUNT_AFTER.form.CDTextBox","value","dsList","NO_ACCOUNT_AFTER");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item3","divData.form.cfNO_ACCOUNT_AFTER.form.DSTextBox","value","dsList","DS_BANK_AFTER");
            this.addChild(obj.name, obj);
            obj.bind();
            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {
            this._addPreloadList("fdl","cmm::cmmCodeFind.xfdl");
        };
        
        // User Script
        this.registerScript("DFB_REQUESTASSIGN_EXECTRANCHGACCOUNT_DLG.xfdl", function() {
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

        	// 팝업사이즈 조정
         	var nWidth = "500px";
         	var nHeight = "250px";
         	this.getOwnerFrame().set_width(nWidth);
         	this.getOwnerFrame().set_height(nHeight);

        	// 이전 화면에서 데이터 받기.
         	this.dsList.setColumn(0, "NO_REQUEST", this.getOwnerFrame().NO_REQUEST);
         	this.dsList.setColumn(0, "SEQ_ALLOT", this.getOwnerFrame().SEQ_ALLOT);
        	this.dsList.setColumn(0, "NO_ACCOUNT", this.getOwnerFrame().NO_ACCOUNT);
        	this.dsList.setColumn(0, "DS_ACCOUNT", this.getOwnerFrame().DS_ACCOUNT);
        	this.dsList.setColumn(0, "TY_GUBUN", this.getOwnerFrame().TY_GUBUN);

         	this.dsList.setColumn(0, "TY_VENDOR", this.getOwnerFrame().TY_VENDOR);
         	this.dsList.setColumn(0, "CD_PAY", this.getOwnerFrame().CD_PAY);
         	this.dsList.setColumn(0, "TY_CASH", this.getOwnerFrame().TY_CASH);
         	this.dsList.setColumn(0, "CD_CORP", this.getOwnerFrame().CD_CORP);

        	//trace(this.dsList.saveXML());

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

        	this.cfNO_ACCOUNT_AFTER = this.divData.form.cfNO_ACCOUNT_AFTER;

        };

        /************************************************************************
         * 이벤트 설정
         ************************************************************************/
        this.fnSetEvent = function() {
        	this.cfNO_ACCOUNT_AFTER.BeforeUserDataSetParam = "fnBeforeUserDataSetParam";
        	this.cfNO_ACCOUNT_AFTER.AfterCDTextChanged = "fnAfterCDTextChanged";
        };

        /************************************************************************
         * 파라미터 설정
         ************************************************************************/
        this.fnSetParameter = function() {
        	this.dsInsert = new Dataset();
        	this.dsInsert.addColumn("NO_REQUEST", "bigdecimal");
        	this.dsInsert.addColumn("SEQ_ALLOT", "bigdecimal");
        	this.dsInsert.addColumn("NO_ACCOUNT", "string");
        	this.dsInsert.addColumn("TY_GUBUN", "string");
        	this.dsInsert.addColumn("CD_BANK", "string");
        	this.dsInsert.addColumn("ID_USER", "string");
        }

        /************************************************************************
         * 컨트롤 이벤트
         ************************************************************************/

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
        	if (svcID == "save") {
        		if(errorCode == 0)
        		{
        			// this.close()가 작동하지 않았고,
        			// 부모의 callback 함수로 데이터를 넘겨주기 위해 작성되었습니다.
        			this.getParentContext().close(true);
        		}else
        		{
        			this.gfnAlert(errorMsg);
        		}
        	}
        }

        /************************************************************************
         * 코드파인드 이벤트
         ************************************************************************/
        this.fnBeforeUserDataSetParam = function(id, dsUserParam, nrow) {
        	if (id == "cfNO_ACCOUNT_AFTER") {
        		dsUserParam.setColumn(nrow, "TY_VENDOR", this.dsList.getColumn(0, "TY_VENDOR"));
        		dsUserParam.setColumn(nrow, "CD_PAY", this.dsList.getColumn(0, "CD_PAY"));
        		dsUserParam.setColumn(nrow, "TY_CASH", this.dsList.getColumn(0, "TY_CASH"));
        		dsUserParam.setColumn(nrow, "CD_CORP", this.dsList.getColumn(0, "CD_CORP"));
        	}
        	return true;
        }

        this.fnAfterCDTextChanged = function(id, codeFindData) {
        	var arr = codeFindData;

        	if (id == "cfNO_ACCOUNT_AFTER") {
        		if(arr.length > 0) {
        			this.dsList.setColumn(0, "NO_ACCOUNT_AFTER", arr[0]["NO_ACCOUNT"]);
        			this.dsList.setColumn(0, "DS_BANK_AFTER", arr[0]["DS_BANK"]);
        			this.dsList.setColumn(0, "CD_BANK_AFTER", arr[0]["CD_BANK"]);
        			this.dsList.setColumn(0, "TY_GUBUN_AFTER", arr[0]["TY_GUBUN"]);
        		}
        	}
        }

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

        	this.dsInsert.clearData();
        	var nrow = this.dsInsert.addRow();
        	this.dsInsert.setColumn(nrow, "NO_REQUEST", this.dsList.getColumn(0, "NO_REQUEST"));
        	this.dsInsert.setColumn(nrow, "SEQ_ALLOT", this.dsList.getColumn(0, "SEQ_ALLOT"));
        	this.dsInsert.setColumn(nrow, "NO_ACCOUNT", this.dsList.getColumn(0, "NO_ACCOUNT_AFTER"));
        	this.dsInsert.setColumn(nrow, "TY_GUBUN", this.dsList.getColumn(0, "TY_GUBUN_AFTER"));
        	this.dsInsert.setColumn(nrow, "CD_BANK", this.dsList.getColumn(0, "CD_BANK_AFTER"));
        	this.dsInsert.setColumn(nrow, "ID_USER", this.AuthClient.ID_USER);

        	if (this.dsInsert.rowcount == 0) return;

        	var strSvcId    = "save";
        	var strSvcType  = "save";
        	var inProc		= "_dsProc";
        	var inData      = "insert=dsInsert";
        	var outData     = "";
        	var strArg      = "";
        	var callBackFnc = "fnCallback";

        	this.gfnTransaction( strSvcId , 	// transaction을 구분하기 위한 svc id값
        					strSvcType , 	// transaction을 요청할 구분
        					inProc,			// Procedure 정보 Dataset 이름
        					inData , 		// 입력값으로 보낼 dataset id , a=b형태로 실제이름과 입력이름을 매칭
        					outData , 		// 처리결과값으로 받을 dataset id, a=b형태로 실제이름과 입력이름을 매칭
        					strArg, 		// 입력값으로 보낼 arguments, strFormData="20120607"
        					callBackFnc); // 통신방법 정의 [생략가능]
        };

        // 취소 버튼 클릭
        this.divData_btnCancel_onclick = function(obj,e)
        {
        	// this.close()가 작동하지 않았고,
        	// 부모의 callback 함수로 데이터를 넘겨주기 위해 작성되었습니다.
        	this.getParentContext().close(false);
        };

        this.fnSaveValidate = function() {

        	var strMsg = "";

        	if(this.gfnIsNull(this.dsList.getColumn(0, "NO_ACCOUNT_AFTER"))) {
        		strMsg += "변경후 계좌번호는 반드시 입력 하셔야 합니다.\n";
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
        };
        this.loadIncludeScript("DFB_REQUESTASSIGN_EXECTRANCHGACCOUNT_DLG.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
