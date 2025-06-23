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
            this.set_titletext("경조금잔액등록");
            if (Form == this.constructor)
            {
                this._setFormPosition(1280,720);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("dsList", this);
            obj._setContents("");
            this.addChild(obj.name, obj);


            obj = new Dataset("_dsProc", this);
            obj._setContents("<ColumnInfo><Column id=\"TARGET\" type=\"STRING\" size=\"256\"/><Column id=\"SP\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"TARGET\">select</Col><Col id=\"SP\">DAAPR_DED_CHANGE_SELECT</Col></Row><Row><Col id=\"TARGET\">insert</Col><Col id=\"SP\">DAAPR_DED_CHANGE_SAVE</Col></Row><Row><Col id=\"TARGET\">update</Col><Col id=\"SP\">DAAPR_DED_CHANGE_SAVE</Col></Row><Row><Col id=\"TARGET\">delete</Col><Col id=\"SP\">DAAPR_DED_CHANGE_SAVE</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsSearch", this);
            obj._setContents("<ColumnInfo><Column id=\"YM_CHANGE\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"YM_CHANGE\"/></Row></Rows>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Div("divSearch","0","0",null,"46.0","0",null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_cssclass("div_SEARCH_Bg");
            obj.set_formscrolltype("none");
            this.addChild(obj.name, obj);

            obj = new Static("staYY_WORK","0.0","10.0","92.0","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("1");
            obj.set_text("관리년월");
            obj.set_cssclass("sta_WF_SchLabel");
            this.divSearch.addChild(obj.name, obj);

            obj = new Div("ctclYM_WORK","staYY_WORK:0.0","10.0","80","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("0");
            obj.set_url("cmm::cmmCalMM.xfdl");
            obj.set_text("");
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
            obj = new BindItem("item0","ctclYM_WORK.form.TextBox","value","dsSearch","YM_WORK");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item1","divSearch.form.ctclYM_WORK.form.TextBox","value","dsSearch","YM_CHANGE");
            this.addChild(obj.name, obj);
            obj.bind();
            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {
            this._addPreloadList("fdl","cmm::cmmCalMM.xfdl");
        };
        
        // User Script
        this.registerScript("DAA_DED_CHANGE.xfdl", function() {
        this.objApp = this.gfnGetApplication();

        this.form_onload = function(obj,e)
        {
        	// -- 필수 -------------------//
        	this.gfnFormOnLoad(this);
        	this.gfnFormInfo(this);
        	// ---------------------------//

        	this.fnSetButton();
        	//this.fnSetExtendButton();
        	this.fnSetVariable();
        	this.fnSetEvent();
        	this.fnSetParameter();

        	//연월 셋팅
        	var today = this.gfnGetDate().substring(0,6);
        	this.divSearch.form.ctclYM_WORK.form.TextBox.set_value(today);

        	//this.FormBtns.Select.click();
        };
        /************************************************************************
         * 버튼 설정 : 화면(Tab) 전환시 마다 호출
         * 서브버튼 사용 및 공통버튼 강제 제어시 여기서 처리
         ************************************************************************/
        this.fnSetButton = function() {
        	// Select, Add, Del, Save, Excel, Print
        	// SubSelect, SubAdd, SubDel, SuubSave, SubExcel
        	// 	this.FormBtns.Add.set_enable(false);
        	// 	this.FormBtns.Del.set_enable(false);
        	this.FormBtns.Reset.set_enable(true);
        };
        /************************************************************************
         * 이벤트 설정
         ************************************************************************/
        this.fnSetEvent = function() {
        	// 그리드 초기화
        	this.gfnGridInit(this.dxGrid, this.dsList, "DA", "DAA_DED_CHANGE");
        };


        /************************************************************************
         * 파라미터 설정
         ************************************************************************/
        this.fnSetParameter = function() {

        	this.dsSelect = new Dataset();
        	this.dsSelect.addColumn("YM_CHANGE", "string");

        	this.dsInsert = new Dataset();
        	this.dsInsert.addColumn("TY_SAVE", "string");
        	this.dsInsert.addColumn("YM_CHANGE", "string");
        	this.dsInsert.addColumn("QN_PAYMENT", "int");
        	this.dsInsert.addColumn("AM_PAYMENT", "int");
        	this.dsInsert.addColumn("QN_DEDUCTION", "int");
        	this.dsInsert.addColumn("AM_DEDUCTION", "int");
        	this.dsInsert.addColumn("AM_CHANGE", "int");
        	this.dsInsert.addColumn("DS_REMARK", "string");
        	this.dsInsert.addColumn("ID_USER", "string");

        	this.dsUpdate = new Dataset();
        	this.dsUpdate.addColumn("TY_SAVE", "string");
        	this.dsUpdate.addColumn("YM_CHANGE", "string");
        	this.dsUpdate.addColumn("QN_PAYMENT", "int");
        	this.dsUpdate.addColumn("AM_PAYMENT", "int");
        	this.dsUpdate.addColumn("QN_DEDUCTION", "int");
        	this.dsUpdate.addColumn("AM_DEDUCTION", "int");
        	this.dsUpdate.addColumn("AM_CHANGE", "int");
        	this.dsUpdate.addColumn("DS_REMARK", "string");
        	this.dsUpdate.addColumn("ID_USER", "string");

        	this.dsDelete = new Dataset();
        	this.dsDelete.addColumn("TY_SAVE", "string");
        	this.dsDelete.addColumn("YM_CHANGE", "string");
        	this.dsDelete.addColumn("QN_PAYMENT", "int");
        	this.dsDelete.addColumn("AM_PAYMENT", "int");
        	this.dsDelete.addColumn("QN_DEDUCTION", "int");
        	this.dsDelete.addColumn("AM_DEDUCTION", "int");
        	this.dsDelete.addColumn("AM_CHANGE", "int");
        	this.dsDelete.addColumn("DS_REMARK", "string");
        	this.dsDelete.addColumn("ID_USER", "string");

        }

        /************************************************************************
         * 변수 선언
         ************************************************************************/
        this.fnSetVariable = function() {
        	this.dxGrid = this.divData.form.objGrid;
        };

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
        		this.dsSelect.setColumn(0, "YM_CHANGE", this.divSearch.form.ctclYM_WORK.form.TextBox.value); //this.divSearch.form.ctclYM_WORK.form.TextBox.set_value);

        		var strSvcId    = "select";
        		var strSvcType  = "grid";
        		var inProc		= "_dsProc";
        		var inData      = "select=dsSelect";
        		var outData     = "dsList=select0";
        		var strArg      = "";
        		var callBackFnc = "fnCallback";

        		this.gfnTransaction( strSvcId ,
        						strSvcType ,
        						inProc,
        						inData ,
        						outData ,
        						strArg,
        						callBackFnc);
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
        				this.dsInsert.setColumn(nrow, "TY_SAVE", flag);
        				this.dsInsert.setColumn(nrow, "YM_CHANGE", this.dsList.getColumn(i, "YM_CHANGE"));
        				this.dsInsert.setColumn(nrow, "QN_PAYMENT", this.dsList.getColumn(i, "QN_PAYMENT"));
        				this.dsInsert.setColumn(nrow, "AM_PAYMENT", this.dsList.getColumn(i, "AM_PAYMENT"));
        				this.dsInsert.setColumn(nrow, "QN_DEDUCTION", this.dsList.getColumn(i, "QN_DEDUCTION"));
        				this.dsInsert.setColumn(nrow, "AM_DEDUCTION", this.dsList.getColumn(i, "AM_DEDUCTION"));
        				this.dsInsert.setColumn(nrow, "AM_CHANGE", this.dsList.getColumn(i, "AM_CHANGE"));
        				this.dsInsert.setColumn(nrow, "DS_REMARK", this.dsList.getColumn(i, "DS_REMARK"));
        				this.dsInsert.setColumn(nrow, "ID_USER", this.AuthClient.ID_USER);
        				break;

        			case "U":
        				var nrow = this.dsUpdate.addRow();
        				this.dsUpdate.setColumn(nrow, "TY_SAVE", flag);
        				this.dsUpdate.setColumn(nrow, "YM_CHANGE", this.dsList.getColumn(i, "YM_CHANGE"));
        				this.dsUpdate.setColumn(nrow, "QN_PAYMENT", this.dsList.getColumn(i, "QN_PAYMENT"));
        				this.dsUpdate.setColumn(nrow, "AM_PAYMENT", this.dsList.getColumn(i, "AM_PAYMENT"));
        				this.dsUpdate.setColumn(nrow, "QN_DEDUCTION", this.dsList.getColumn(i, "QN_DEDUCTION"));
        				this.dsUpdate.setColumn(nrow, "AM_DEDUCTION", this.dsList.getColumn(i, "AM_DEDUCTION"));
        				this.dsUpdate.setColumn(nrow, "AM_CHANGE", this.dsList.getColumn(i, "AM_CHANGE"));
        				this.dsUpdate.setColumn(nrow, "DS_REMARK", this.dsList.getColumn(i, "DS_REMARK"));
        				this.dsUpdate.setColumn(nrow, "ID_USER", this.AuthClient.ID_USER);
        				break;

        			case "D":
        				var nrow = this.dsDelete.addRow();
        					this.dsDelete.setColumn(nrow, "TY_SAVE", flag);
        					this.dsDelete.setColumn(nrow, "YM_CHANGE", this.dsList.getColumn(i, "YM_CHANGE"));
        					this.dsDelete.setColumn(nrow, "QN_PAYMENT", this.dsList.getColumn(i, "QN_PAYMENT"));
        					this.dsDelete.setColumn(nrow, "AM_PAYMENT", this.dsList.getColumn(i, "AM_PAYMENT"));
        					this.dsDelete.setColumn(nrow, "QN_DEDUCTION", this.dsList.getColumn(i, "QN_DEDUCTION"));
        					this.dsDelete.setColumn(nrow, "AM_DEDUCTION", this.dsList.getColumn(i, "AM_DEDUCTION"));
        					this.dsDelete.setColumn(nrow, "AM_CHANGE", this.dsList.getColumn(i, "AM_CHANGE"));
        					this.dsDelete.setColumn(nrow, "DS_REMARK", this.dsList.getColumn(i, "DS_REMARK"));
        					this.dsDelete.setColumn(nrow, "ID_USER", this.AuthClient.ID_USER);

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
        						strArg, 			// 입력값으로 보낼 arguments, strFormData="20120607"
        						callBackFnc); // 통신방법 정의 [생략가능]
        }

        this.fnReset = function() {
        	this.dsSearch.clearData();
        	this.dsSearch.addRow();
        	this.divSearch.form.ctclYM_WORK.form.TextBox.set_value("");
        }

        /************************************************************************
         * Validate
         ************************************************************************/
         this.fnSelectValidate = function() {

        	return true;
         }

        /************************************************************************
         * 콜백 이벤트
         ************************************************************************/
        /*
         *	콜백 처리
         */
        this.fnCallback = function(svcID, errorCode, errorMsg)
        {
        	this.FormBtns.Reset.set_enable(true);

        	if (svcID == "select") {
        		this.gfnGridAfterSelect(this.dxGrid);

        	} else if(svcID == "save") {
        		if (errorCode == 0) {
        			this.gfnAlert("작업이 완료되었습니다.");
        			this.FormBtns.Select.click();
        		} else {
        			this.gfnAlert(errorMsg);
        		}
        	}
        }

        this.dsSearch_onvaluechanged = function(obj,e)
        {
        	if(!this.gfnIsNull(e) && e.oldvalue != e.newvalue){
        		this.gfnSetFormStatus(this);
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
        this.loadIncludeScript("DAA_DED_CHANGE.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
