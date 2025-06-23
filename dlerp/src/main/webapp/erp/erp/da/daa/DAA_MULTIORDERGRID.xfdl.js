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
            this.set_titletext("일괄발령");
            if (Form == this.constructor)
            {
                this._setFormPosition(1280,720);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("dsList", this);
            obj._setContents("");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsListSub", this);
            obj._setContents("");
            this.addChild(obj.name, obj);


            obj = new Dataset("_dsProc", this);
            obj._setContents("<ColumnInfo><Column id=\"TARGET\" type=\"STRING\" size=\"256\"/><Column id=\"SP\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"TARGET\">select</Col><Col id=\"SP\">DAAPR_ORDERTARGET_SELECT</Col></Row><Row><Col id=\"TARGET\">save</Col><Col id=\"SP\">DAAPR_ORDER_SAVE</Col></Row><Row><Col id=\"TARGET\">select1</Col><Col id=\"SP\">DAAPR_MULTIORDER_SELECT</Col></Row><Row><Col id=\"TARGET\">insertApply</Col><Col id=\"SP\">DAAPR_ORDER_CONFIRM_INSERT</Col></Row><Row><Col id=\"TARGET\">insertCancel</Col><Col id=\"SP\">DAAPR_ORDER_CONFIRM_CANCEL</Col></Row></Rows>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Div("divSearch","0","0",null,"46.0","0",null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_cssclass("div_SEARCH_Bg");
            this.addChild(obj.name, obj);

            obj = new Static("staNO_DOCUMENT","0.0","10.0","92.0","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("0");
            obj.set_text("문서번호");
            obj.set_cssclass("sta_WF_SchLabelE");
            this.divSearch.addChild(obj.name, obj);

            obj = new Edit("txtNO_DOCUMENT","staNO_DOCUMENT:0.0","10.0","100","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("1");
            obj.set_enable("false");
            obj.set_enableevent("false");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("staCD_CORP","txtNO_DOCUMENT:0.0","10.0","92.0","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("2");
            obj.set_text("소속법인");
            obj.set_cssclass("sta_WF_SchLabelE");
            this.divSearch.addChild(obj.name, obj);

            obj = new Div("ccfCD_CORP","staCD_CORP:0.0","10.0","250","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.getSetter("CDTextWidth").set("50");
            obj.set_taborder("3");
            obj.set_url("cmm::cmmCodeFind.xfdl");
            obj.set_enable("false");
            obj.set_enableevent("false");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("staDT_ORDER","ccfCD_CORP:0.0","10.0","92.0","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("4");
            obj.set_text("발령일자");
            obj.set_cssclass("sta_WF_SchLabelE");
            this.divSearch.addChild(obj.name, obj);

            obj = new Edit("txtDT_ORDER","staDT_ORDER:0.0","10.0","100","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("5");
            obj.set_enable("false");
            obj.set_enableevent("false");
            obj.set_visible("true");
            this.divSearch.addChild(obj.name, obj);

            obj = new Edit("txtTY_CONFIRM","txtDT_ORDER:10","10.0","100","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("6");
            obj.set_enable("false");
            obj.set_enableevent("false");
            obj.set_visible("false");
            this.divSearch.addChild(obj.name, obj);

            obj = new Div("divData","0","divSearch:10",null,null,"0","0",null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_cssclass("div_DATA_Bg");
            this.addChild(obj.name, obj);

            obj = new Div("divSplitter","31.48%","-20","5","100.00%",null,"0",null,null,null,null,this.divData.form);
            obj.set_taborder("1");
            obj.set_cursor("ew-resize");
            obj.set_cssclass("div_Splitter");
            this.divData.addChild(obj.name, obj);

            obj = new Div("divDataLeft","0","0",null,null,"divSplitter:5","0",null,null,null,null,this.divData.form);
            obj.set_taborder("0");
            this.divData.addChild(obj.name, obj);

            obj = new Grid("objGrid","0","5",null,null,"0","0",null,null,null,null,this.divData.form.divDataLeft.form);
            obj.getSetter("sub").set("true");
            obj.set_taborder("0");
            obj._setContents("");
            this.divData.form.divDataLeft.addChild(obj.name, obj);

            obj = new Div("divDataRight","divSplitter:5","0",null,null,"0","0",null,null,null,null,this.divData.form);
            obj.set_taborder("0");
            obj.set_text("");
            this.divData.addChild(obj.name, obj);

            obj = new Grid("objGridSub","50","5",null,null,"0","0",null,null,null,null,this.divData.form.divDataRight.form);
            obj.getSetter("sub").set("false");
            obj.set_taborder("0");
            obj._setContents("");
            this.divData.form.divDataRight.addChild(obj.name, obj);

            obj = new Button("btnMove","0","45.59%","40","25",null,null,null,null,null,null,this.divData.form.divDataRight.form);
            obj.set_taborder("1");
            obj.set_text(">");
            this.divData.form.divDataRight.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this
            obj = new Layout("default","",this._adjust_width,this._adjust_height,this,function(p){});
            this.addLayout(obj.name, obj);
            
            // BindItem Information
            obj = new BindItem("item0","divSearch.form.ctclYY_ORDER.form.TextBox","value","dsSearch","YY_ORDER");
            this.addChild(obj.name, obj);
            obj.bind();
            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {
            this._addPreloadList("fdl","cmm::cmmCodeFind.xfdl");
        };
        
        // User Script
        this.registerScript("DAA_MULTIORDERGRID.xfdl", function() {
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

        	// 타화면에서 오픈시 넘어오는 파라미터 처리
        	var frame = this.getOwnerFrame();

        	if(!this.gfnIsNull(frame.CD_CORP) && !this.gfnIsNull(frame.NO_DOCUMENT)) {
        		var dtOrder = frame.DT_ORDER;
        		if(frame.DT_ORDER.length == 8){
        			dtOrder = frame.DT_ORDER.substr(0,4)+"-"+frame.DT_ORDER.substr(4,2)+"-"+frame.DT_ORDER.substr(6);
        		}

        	    this.ccfCD_CORP.form.CDTextBox.set_value(frame.CD_CORP);
         		this.ccfCD_CORP.form.DSTextBox.set_value(frame.DS_CORP);
        	    this.divSearch.form.txtNO_DOCUMENT.set_value(frame.NO_DOCUMENT);
         		//this.divSearch.form.txtDT_ORDER.set_value(frame.DT_ORDER);
        		this.divSearch.form.txtDT_ORDER.set_value(dtOrder);
        		this.divSearch.form.txtTY_CONFIRM.set_value(frame.TY_CONFIRM);
        		this.FormBtns.Select.click();
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
        	this.btn1 = this.gfnFormButtonAdd("OrderApply", "fnOrderApply", "발령적용");
        	this.btn2 = this.gfnFormButtonAdd("OrderCancel", "fnOrderCancel", "발령적용취소");
        	this.btn3 = this.gfnFormButtonAdd("fileUpload", "fnFileUpload", "파일첨부");
        };

        /************************************************************************
         * 변수 선언
         ************************************************************************/
        this.fnSetVariable = function() {
        	this.dxGrid = this.divData.form.divDataLeft.form.objGrid;
        	this.dxGridSub = this.divData.form.divDataRight.form.objGridSub;
        	this.ccfCD_CORP = this.divSearch.form.ccfCD_CORP;
        	this.txtDT_ORDER = this.divSearch.form.txtDT_ORDER;
        };

        /************************************************************************
         * 이벤트 설정
         ************************************************************************/
        this.fnSetEvent = function() {
        	this.gfnGridInit(this.dxGrid, this.dsList, "DA", "DAA_MULTIORDERGRID");
        	this.gfnGridInit(this.dxGridSub, this.dsListSub, "DA", "DAA_MULTIORDERGRID2");

        	this.ccfCD_CORP.CodeFindName = "DAX_CFCORP";
        	this.dxGridSub.BeforeUserDataSetParam = "fnGridSub_BeforuserDataSetParam";
        	this.dxGridSub.AfterCDTextChanged = "fnGridSub_AfterCDTextChanged";

        	// 셀 수정가능 여부
        	this.dxGridSub.EnterCell = "fnGridSub_EnterCell";
        }

        /************************************************************************
         * 파라미터 설정
         ************************************************************************/
        this.fnSetParameter = function() {

        	this.dsSelect = new Dataset();
        	this.dsSelect.addColumn("CD_CORP", "string");

        	this.dsSave = new Dataset();
        	this.dsSave.addColumn("TY_WRK", "string");
        	this.dsSave.addColumn("ID_PERSON", "int");
        	this.dsSave.addColumn("CD_CORP", "string");
        	this.dsSave.addColumn("ID_SABUN", "string");
        	this.dsSave.addColumn("DT_ORDER", "string");
        	this.dsSave.addColumn("NO_SEQ", "int");
        	this.dsSave.addColumn("CD_ORDER1", "string");
        	this.dsSave.addColumn("CD_ORDER2", "string");
        	this.dsSave.addColumn("CD_DEPTBEF", "string");
        	this.dsSave.addColumn("CD_CORP_ORD", "string");
        	this.dsSave.addColumn("CD_DEPT", "string");
        	this.dsSave.addColumn("CD_EMPTYPE", "string");
        	this.dsSave.addColumn("CD_POSITION", "string");
        	this.dsSave.addColumn("CD_PAYSTEP", "string");
        	this.dsSave.addColumn("CD_OCCUPATION", "string");
        	this.dsSave.addColumn("CD_JOBTYPE", "string");
        	this.dsSave.addColumn("CD_DUTY", "string");
        	this.dsSave.addColumn("CD_DISPATCHORG", "string");
        	this.dsSave.addColumn("FR_DISPATCH", "string");
        	this.dsSave.addColumn("TO_DISPATCH", "string");
        	this.dsSave.addColumn("MM_TERM", "int");
        	this.dsSave.addColumn("NO_DOCUMENT", "string");
        	this.dsSave.addColumn("DS_REMARK", "string");
        	this.dsSave.addColumn("FR_CORPCURRENT", "string");
        	this.dsSave.addColumn("TO_CORPCURRENT", "string");
        	this.dsSave.addColumn("YN_APPLY_PROVATION", "string");
        	this.dsSave.addColumn("FR_PROVATION", "string");
        	this.dsSave.addColumn("TO_PROVATION", "string");
        	this.dsSave.addColumn("CD_AGREEMENT", "string");
        	this.dsSave.addColumn("CD_HOLDDUTY", "string");
        	this.dsSave.addColumn("ID_INSERT", "string");
        	this.dsSave.addColumn("FR_LEAVE", "string");	// 휴직 시작일 20240205 관리 시작(안내메일발송)
        	this.dsSave.addColumn("TO_LEAVE", "string");	// 휴직 종료일 20240205 관리 시작(안내메일발송)
        	this.dsSave.addColumn("DS_BUSINESS", "string");	// 겸직 담당업무 20240227 관리 시작
        	this.dsSave.addColumn("CD_ROLE", "string");	// 겸직 담당업무 20240227 관리 시작

        	//서브그리드 조회
        	this.dsSelectSub = new Dataset();
        	this.dsSelectSub.addColumn("NO_DOCUMENT", "string");
        	this.dsSelectSub.addColumn("CD_CORP", "string");
        	this.dsSelectSub.addColumn("DT_ORDER", "string");

        	//발령적용
        	this.dsInsertApply = new Dataset();
        	this.dsInsertApply.addColumn("NO_DOCUMENT", "string");
        	this.dsInsertApply.addColumn("CD_CORP_S", "string");
        	this.dsInsertApply.addColumn("DT_ORDER", "string");
        	this.dsInsertApply.addColumn("ID_INSERT", "string");

        	//발령취소
        	this.dsInsertCancel = new Dataset();
        	this.dsInsertCancel.addColumn("NO_DOCUMENT", "string");
        	this.dsInsertCancel.addColumn("CD_CORP_S", "string");
        	this.dsInsertCancel.addColumn("DT_ORDER", "string");
        	this.dsInsertCancel.addColumn("ID_INSERT", "string");
        }

        /************************************************************************
         * 버튼 이벤트
         ************************************************************************/
         /*
          *	조회 버튼
          */
        this.fnSelect = function() {
        	//if(!this.fnSelectValidate()) return;

        	this.gfnGridBeforeSelect(this.dxGrid);
        	this.gfnGridBeforeSelect(this.dxGridSub);

        	this.dsSelect.clearData();
        	this.dsSelect.addRow();
        	this.dsSelect.setColumn(0, "CD_CORP", this.ccfCD_CORP.form.CDTextBox.value);

        	this.dsSelectSub.clearData();
        	this.dsSelectSub.addRow();
        	this.dsSelectSub.setColumn(0, "NO_DOCUMENT", this.divSearch.form.txtNO_DOCUMENT.value);
        	this.dsSelectSub.setColumn(0, "CD_CORP", this.ccfCD_CORP.form.CDTextBox.value);
        	this.dsSelectSub.setColumn(0, "DT_ORDER", nexacro.replaceAll(this.txtDT_ORDER.value, "-", ""));

        	var strSvcId    = "select";
        	var strSvcType  = "select";
        	var inProc		= "_dsProc";
        	var inData      = "select=dsSelect select1=dsSelectSub";
        	var outData     = "dsList=select0 dsListSub=select10";
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
        this.fnAdd = function() {
        }
         */

        /*
         *	삭제 버튼
         */
        this.fnDel = function() {
        	this.gfnGridDel(this.dxGridSub);
        }

        /*
         *	저장 버튼
         */
        this.fnSave = function() {
        	if (!this.gfnGridValidate(this.dxGridSub)) return;

        	this.dxGridSub.updateToDataset();

        	this.dsSave.clearData();

        	for (var i = 0; i < this.dsListSub.rowcount; i++) {
        		var flag = this.gfnGetFlag(this.dsListSub, i);

        		switch(flag) {
        			case "I":
        			case "U":
        			case "D":
        				var nrow = this.dsSave.addRow();
        				this.dsSave.setColumn(nrow, "TY_WRK", flag);
        				this.dsSave.setColumn(nrow, "ID_PERSON", this.dsListSub.getColumn(i, "ID_PERSON"));
        				this.dsSave.setColumn(nrow, "CD_CORP", this.ccfCD_CORP.form.CDTextBox.value);
        				this.dsSave.setColumn(nrow, "ID_SABUN", this.dsListSub.getColumn(i, "ID_SABUN"));
        				this.dsSave.setColumn(nrow, "DT_ORDER", this.dsListSub.getColumn(i, "DT_ORDER"));
        				this.dsSave.setColumn(nrow, "NO_SEQ", this.dsListSub.getColumn(i, "NO_SEQ"));
        				this.dsSave.setColumn(nrow, "CD_ORDER1", this.dsListSub.getColumn(i, "CD_ORDER1"));
        				this.dsSave.setColumn(nrow, "CD_ORDER2", this.dsListSub.getColumn(i, "CD_ORDER2"));
        				this.dsSave.setColumn(nrow, "CD_DEPTBEF", this.dsListSub.getColumn(i, "CD_DEPTBEF"));
        				this.dsSave.setColumn(nrow, "CD_CORP_ORD", this.dsListSub.getColumn(i, "CD_CORP_ORD"));
        				this.dsSave.setColumn(nrow, "CD_DEPT", this.dsListSub.getColumn(i, "CD_DEPT"));
        				this.dsSave.setColumn(nrow, "CD_EMPTYPE", this.dsListSub.getColumn(i, "CD_EMPTYPE"));
        				this.dsSave.setColumn(nrow, "CD_POSITION", this.dsListSub.getColumn(i, "CD_POSITION"));
        				this.dsSave.setColumn(nrow, "CD_PAYSTEP", this.dsListSub.getColumn(i, "CD_PAYSTEP"));
        				this.dsSave.setColumn(nrow, "CD_OCCUPATION", this.dsListSub.getColumn(i, "CD_OCCUPATION"));
        				this.dsSave.setColumn(nrow, "CD_JOBTYPE", this.dsListSub.getColumn(i, "CD_JOBTYPE"));
        				this.dsSave.setColumn(nrow, "CD_DUTY", this.dsListSub.getColumn(i, "CD_DUTY"));
        				this.dsSave.setColumn(nrow, "CD_DISPATCHORG", this.dsListSub.getColumn(i, "CD_DISPATCHORG"));
        				this.dsSave.setColumn(nrow, "FR_DISPATCH", this.dsListSub.getColumn(i, "FR_DISPATCH"));
        				this.dsSave.setColumn(nrow, "TO_DISPATCH", this.dsListSub.getColumn(i, "TO_DISPATCH"));
        				this.dsSave.setColumn(nrow, "MM_TERM", this.dsListSub.getColumn(i, "MM_TERM"));
        				this.dsSave.setColumn(nrow, "NO_DOCUMENT", this.divSearch.form.txtNO_DOCUMENT.value);
        				this.dsSave.setColumn(nrow, "DS_REMARK", this.dsListSub.getColumn(i, "DS_REMARK"));
        				this.dsSave.setColumn(nrow, "FR_CORPCURRENT", this.dsListSub.getColumn(i, "FR_CORPCURRENT"));
        				this.dsSave.setColumn(nrow, "TO_CORPCURRENT", this.dsListSub.getColumn(i, "TO_CORPCURRENT"));
        				this.dsSave.setColumn(nrow, "YN_APPLY_PROVATION", this.dsListSub.getColumn(i, "YN_APPLY_PROVATION"));
        				this.dsSave.setColumn(nrow, "FR_PROVATION", this.dsListSub.getColumn(i, "FR_PROVATION"));
        				this.dsSave.setColumn(nrow, "TO_PROVATION", this.dsListSub.getColumn(i, "TO_PROVATION"));
        				this.dsSave.setColumn(nrow, "CD_AGREEMENT", this.dsListSub.getColumn(i, "CD_AGREEMENT"));
        				this.dsSave.setColumn(nrow, "CD_HOLDDUTY", this.dsListSub.getColumn(i, "CD_HOLDDUTY"));
        				this.dsSave.setColumn(nrow, "FR_LEAVE", this.dsListSub.getColumn(i, "FR_LEAVE"));	// 휴직 시작일 20240205 관리 시작(안내메일발송)
        				this.dsSave.setColumn(nrow, "TO_LEAVE", this.dsListSub.getColumn(i, "TO_LEAVE"));	// 휴직 종료일 20240205 관리 시작(안내메일발송)
        				this.dsSave.setColumn(nrow, "DS_BUSINESS", this.dsListSub.getColumn(i, "DS_BUSINESS"));	// 겸직 담당업무 20240227 관리 시작
        				this.dsSave.setColumn(nrow, "CD_ROLE", this.dsListSub.getColumn(i, "CD_ROLE"));	// 겸직 담당업무 20240227 관리 시작
        				this.dsSave.setColumn(nrow, "ID_INSERT", this.AuthClient.ID_USER);

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
        	this.gfnExcelExport(this.dxGridSub);
        }

        /*
         *	출력 버튼
         */
        this.fnPrint = function() {
        }
        /************************************************************************
         * Validate
         ************************************************************************/
        this.fnSelectValidate = function() {
        	var validate = true;
        	var cd_corp = this.ccfCD_CORP.form.CDTextBox.value;
        	var no_docu = this.divSearch.form.txtNO_DOCUMENT.value;

        	if (this.gfnIsNull(no_docu)) {
        	validate = false;
        	this.gfnAlert("문서번호를 입력하세요.", "fnVaidateCallback");
        	}
        	else if (this.gfnIsNull(cd_corp)) {
        	validate = false;
        	this.fnVaidateCallback = function() {
        	this.ccfCD_CORP.form.CDTextBox.setFocus();
        	}
        		this.gfnAlert("소속법인을 입력하세요.", "fnVaidateCallback");
        	}
        	return validate;
        };
        /************************************************************************
         * 콜백 이벤트
         ************************************************************************/
        this.fnCallback = function(svcID, errorCode, errorMsg)
        {
        	if (svcID == "select") {
        		this.gfnGridAfterSelect(this.dxGrid);
        		this.gfnGridAfterSelect(this.dxGridSub);
        		//버튼제어
        		if(this.dsListSub.rowcount > 0) {
        			if (this.dsListSub.getColumn(this.dsListSub.rowposition, "YN_REFLECT") == "Y") {
        				this.btn1.set_enable(false); //발령적용
        				this.btn2.set_enable(true);  //발령적용 취소
        			} else {
        				this.btn1.set_enable(true); //발령적용
        				this.btn2.set_enable(false);  //발령적용 취소
        			}
        		}
        	}
        	else if(svcID == "save") {
        		if (errorCode == 0) {
        			this.FormBtns.Select.click();
        			this.gfnGridAfterSelect(this.dxGrid);
        			this.gfnGridAfterSelect(this.dxGridSub);
        		} else {
        			this.gfnAlert(errorMsg);
        		}
        	}
        	else if(svcID == "insertApply") {
        		this.gfnAlert("인사발령이 적용되었습니다.");
        		this.FormBtns.Select.click();
        	}
        	else if(svcID == "insertCancel") {
        		this.gfnAlert("인사발령이 취소되었습니다.");
        		this.FormBtns.Select.click();
        	}
        }

        this.fnOrderApply_callback = function(strId, val)
        {
        	if(val == true) {
        		this.dsInsertApply.clearData();
        		this.dsInsertApply.addRow();
        		this.dsInsertApply.setColumn(0, "NO_DOCUMENT", this.divSearch.form.txtNO_DOCUMENT.value);
        		this.dsInsertApply.setColumn(0, "CD_CORP_S", this.ccfCD_CORP.form.CDTextBox.value);
        		this.dsInsertApply.setColumn(0, "DT_ORDER", nexacro.replaceAll(this.divSearch.form.txtDT_ORDER.value, "-", ""));
        		this.dsInsertApply.setColumn(0, "ID_INSERT", this.AuthClient.ID_USER);

        		var strSvcId    = "insertApply";
        		var strSvcType  = "save";
        		var inProc		= "_dsProc";
        		var inData      = "insertApply=dsInsertApply";
        		var outData     = "";
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
        }

        this.fnOrderCancel_callback = function(strId, val)
        {
        	if(val == true) {
        		this.dsInsertCancel.clearData();
        		this.dsInsertCancel.addRow();
        		this.dsInsertCancel.setColumn(0, "NO_DOCUMENT", this.divSearch.form.txtNO_DOCUMENT.value);
        		this.dsInsertCancel.setColumn(0, "CD_CORP_S", this.ccfCD_CORP.form.CDTextBox.value);
        		this.dsInsertCancel.setColumn(0, "DT_ORDER", nexacro.replaceAll(this.divSearch.form.txtDT_ORDER.value, "-", ""));
        		this.dsInsertCancel.setColumn(0, "ID_INSERT", this.AuthClient.ID_USER);

        		var strSvcId    = "insertCancel";
        		var strSvcType  = "save";
        		var inProc		= "_dsProc";
        		var inData      = "insertCancel=dsInsertCancel";
        		var outData     = "";
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
        }

        this.fnDlgButton_callback = function(svcID, val)
        {
        	if(val != false) {
        		var rows = this.dxGrid.getSelectedDatasetRows();
        		for(var r = 0; r < rows.length; r++) {

        			var json = JSON.parse(val);
        			this.dsListSub.set_enableevent(false);
        			var nrow = this.dsListSub.addRow();

        			// 부서코드 겸직, 겸직해지 발령(CD_ORDER1 = 08,09)일 때 빈값 바인딩
        			var cd_dept;
        			var ds_dept;
        			if (json.CD_ORDER1 == "08" || json.CD_ORDER1 == "09"){
        				if(json.CD_DEPT == ""){
        					cd_dept = "";
        					ds_dept = "";
        				} else {
        					cd_dept = json.CD_DEPT;
        					ds_dept = json.DS_DEPT;
        				}
        			} else {
        				if(json.CD_DEPT == "" || json.CD_DEPT == undefined){
        					cd_dept = this.dsList.getColumn(rows[r], "CD_DEPT");
        					ds_dept = this.dsList.getColumn(rows[r], "DS_DEPT");
        				} else {
        					cd_dept = json.CD_DEPT;
        					ds_dept = json.DS_DEPT;
        				}
        			}

        			this.dsListSub.setColumn(nrow, this.ucFlag, "I");
        			this.dsListSub.setColumn(nrow, "NO_DOCUMENT", this.divSearch.form.txtNO_DOCUMENT.value);
        			this.dsListSub.setColumn(nrow, "CD_CORP", this.ccfCD_CORP.form.CDTextBox.value);
        			this.dsListSub.setColumn(nrow, "DS_CORP", this.ccfCD_CORP.form.DSTextBox.value);
        			this.dsListSub.setColumn(nrow, "CD_CORP_ORD", this.ccfCD_CORP.form.CDTextBox.value);
        			this.dsListSub.setColumn(nrow, "DS_CORP_ORD", this.ccfCD_CORP.form.DSTextBox.value);
        			this.dsListSub.setColumn(nrow, "ID_SABUN", this.dsList.getColumn(rows[r], "ID_SABUN"));
        			this.dsListSub.setColumn(nrow, "DS_HNAME", this.dsList.getColumn(rows[r], "DS_HNAME"));
        			this.dsListSub.setColumn(nrow, "CD_ORDER1", json.CD_ORDER1);
        			this.dsListSub.setColumn(nrow, "DS_ORDER1", json.DS_ORDER1);
        			this.dsListSub.setColumn(nrow, "CD_ORDER2", json.CD_ORDER2);
        			this.dsListSub.setColumn(nrow, "DS_ORDER2", json.DS_ORDER2);
        			this.dsListSub.setColumn(nrow, "CD_DEPT", cd_dept); //부서
        			this.dsListSub.setColumn(nrow, "DS_DEPT", ds_dept);
        			this.dsListSub.setColumn(nrow, "CD_EMPTYPE", this.dsList.getColumn(rows[r], "CD_EMPTYPE"));
        			this.dsListSub.setColumn(nrow, "DS_EMPTYPE", this.dsList.getColumn(rows[r], "DS_EMPTYPE"));
        			this.dsListSub.setColumn(nrow, "CD_POSITION", this.gfnIsNull(json.CD_POSITION) ? this.dsList.getColumn(rows[r], "CD_POSITION") : json.CD_POSITION);//직위
        			this.dsListSub.setColumn(nrow, "DS_POSITION", this.gfnIsNull(json.DS_POSITION) ? this.dsList.getColumn(rows[r], "DS_POSITION") : json.DS_POSITION);
        			this.dsListSub.setColumn(nrow, "NO_JIK_YEAR", this.dsList.getColumn(rows[r], "NO_JIK_YEAR"));
        			this.dsListSub.setColumn(nrow, "CD_PAYSTEP", this.gfnIsNull(json.CD_PAYSTEP) ? this.dsList.getColumn(rows[r], "CD_PAYSTEP") : json.CD_PAYSTEP);	//급호
        			this.dsListSub.setColumn(nrow, "DS_PAYSTEP", this.gfnIsNull(json.DS_PAYSTEP) ? this.dsList.getColumn(rows[r], "DS_PAYSTEP") : json.DS_PAYSTEP);
        			this.dsListSub.setColumn(nrow, "CD_OCCUPATION", this.gfnIsNull(json.CD_OCCUPATION) ? this.dsList.getColumn(rows[r], "CD_OCCUPATION") : json.CD_OCCUPATION);	//직책
        			this.dsListSub.setColumn(nrow, "DS_OCCUPATION", this.gfnIsNull(json.DS_OCCUPATION) ? this.dsList.getColumn(rows[r], "DS_OCCUPATION") : json.DS_OCCUPATION);
        			this.dsListSub.setColumn(nrow, "CD_DUTY", this.gfnIsNull(json.CD_DUTY) ? this.dsList.getColumn(rows[r], "CD_DUTY") : json.CD_DUTY);//직무
        			this.dsListSub.setColumn(nrow, "DS_DUTY", this.gfnIsNull(json.DS_DUTY) ? this.dsList.getColumn(rows[r], "DS_DUTY") : json.DS_DUTY);
        			this.dsListSub.setColumn(nrow, "CD_JOBTYPE", this.gfnIsNull(json.CD_JOBTYPE) ? this.dsList.getColumn(rows[r], "CD_JOBTYPE") : json.CD_JOBTYPE);	//직종
        			this.dsListSub.setColumn(nrow, "DS_JOBTYPE", this.gfnIsNull(json.DS_JOBTYPE) ? this.dsList.getColumn(rows[r], "DS_JOBTYPE") : json.DS_JOBTYPE);
        			this.dsListSub.setColumn(nrow, "CD_HOLDDUTY", this.dsList.getColumn(rows[r], "CD_HOLDDUTY")); //겸무
        			this.dsListSub.setColumn(nrow, "DS_HOLDDUTY", this.dsList.getColumn(rows[r], "DS_HOLDDUTY"));
        			this.dsListSub.setColumn(nrow, "CD_WORK_PLACE", this.dsList.getColumn(rows[r], "CD_WORK_PLACE"));  //실근무지
        			this.dsListSub.setColumn(nrow, "DS_WORK_PLACE", this.dsList.getColumn(rows[r], "DS_WORK_PLACE"));
        			this.dsListSub.setColumn(nrow, "DT_ORDER", nexacro.replaceAll(this.divSearch.form.txtDT_ORDER.value, "-", ""));
        			this.dsListSub.setColumn(nrow, "ID_PERSON", this.dsList.getColumn(rows[r], "ID_PERSON"));
        			// 겸직 발령(CD_ORDER1 = "08") 경우 겸직시작일에 발령일 바인딩
        			this.dsListSub.setColumn(nrow, "FR_CORPCURRENT", json.CD_ORDER1 == "08" ? nexacro.replaceAll(this.divSearch.form.txtDT_ORDER.value, "-", "") : ""); //겸직시작일
        			// 파견복귀 발령(CD_ORDER1 = "07") 경우 파견시작일, 종료일 바인딩
        			//this.dsListSub.setColumn(nrow, "FR_DISPATCH", this.dsList.getColumn(rows[r], "FR_DISPATCH")); //파견일
        			this.dsListSub.setColumn(nrow, "FR_DISPATCH", json.CD_ORDER1 == "06" ? nexacro.replaceAll(this.divSearch.form.txtDT_ORDER.value, "-", "") : this.dsList.getColumn(rows[r], "FR_DISPATCH")); //파견일
        			this.dsListSub.setColumn(nrow, "TO_DISPATCH", this.dsList.getColumn(rows[r], "TO_DISPATCH"));
        			// 촉탁 발령(CD_ORDER1 = "01", CD_ORDER2 = "08") 경우 계약시작일에 발령일 바인딩
        			this.dsListSub.setColumn(nrow, "FR_PROVATION", (json.CD_ORDER1 == "01" && json.CD_ORDER2 == "08")  ? nexacro.replaceAll(this.divSearch.form.txtDT_ORDER.value, "-", "") : "");
        			// 휴직 시작일/ 종료일 20240205 관리 시작(안내메일발송)
        			this.dsListSub.setColumn(nrow, "FR_LEAVE", json.CD_ORDER1 == "02" ? nexacro.replaceAll(this.divSearch.form.txtDT_ORDER.value, "-", "") : "");
        			this.dsListSub.setColumn(nrow, "TO_LEAVE", "");
        			this.dsListSub.setColumn(nrow, "DS_BUSINESS", json.CD_ORDER1 == "08" ? this.dsList.getColumn(rows[r], "DS_BUSINESS") : "");	// 담당업무

        			//겸직해지(cd_order1 = 09) or 파견복귀(07) 발령일경우 코드파인드 변경 >> DAX_CFCONCURDEPT
        			if (json.CD_ORDER1 == "09" || json.CD_ORDER1 == "07") {
        				this.dxGridSub.usCodefindInfo.CD_DEPT.CD_CODEFIND = "DAX_CFCONCURDEPT";
        				this.dxGridSub.usCodefindInfo.CD_DEPT.NM_CODEFIND = "DAX_CFCONCURDEPT";
        				this.dxGridSub.usCodefindInfo.DS_DEPT.CD_CODEFIND = "DAX_CFCONCURDEPT";
        				this.dxGridSub.usCodefindInfo.DS_DEPT.NM_CODEFIND = "DAX_CFCONCURDEPT";
        			} else {
        				this.dxGridSub.usCodefindInfo.CD_DEPT.CD_CODEFIND = "DAX_CFDEPT";
        				this.dxGridSub.usCodefindInfo.CD_DEPT.NM_CODEFIND = "DAX_CFDEPT";
        				this.dxGridSub.usCodefindInfo.DS_DEPT.CD_CODEFIND = "DAX_CFDEPT";
        				this.dxGridSub.usCodefindInfo.DS_DEPT.NM_CODEFIND = "DAX_CFDEPT";
        			}
        			this.gfnSetFormStatus(this, "I");
        			this.dsListSub.set_enableevent(true);

        		}
        	}
        };
        /************************************************************************
         * 확장버튼 이벤트
         ************************************************************************/
        this.fnOrderApply = function () {
        	if (this.dxGridSub.rowcount == 0) return false;

        	var objDs = this.dsListSub;
        	for(var i = 0 ; i < objDs.getRowCount() ; i++){
        		var flag = objDs.getColumn(i, this.ucFlag);
        		if( flag != "#" && (objDs.getRowType(i) == 2 || objDs.getRowType(i) == 4 || objDs.getRowType(i) == 8)){
        			this.gfnAlert("변경된 정보가 있습니다. 저장후에 【 발령적용 】 을 하시기 바랍니다.");
        			return false;
        		}
        	}

        	this.gfnConfirm("발령사항을 적용 하시겠습니까?", "fnOrderApply_callback");
        };

        this.fnOrderCancel = function () {
        	if (this.dxGridSub.rowcount == 0){ return false; }
        	else {
        		this.gfnConfirm("발령사항을 취소 하시겠습니까?", "fnOrderCancel_callback");
        	}
        };

        // 첨부파일
        this.fnFileUpload = function(obj,e) {

        	if(this.gfnIsNull(this.divSearch.form.txtNO_DOCUMENT.value)){
        		this.gfnAlert("문서번호가 없습니다.");
        		return false;
        	}

        	var cdGubun = "DA05";
        	var cdDir = this.divSearch.form.txtNO_DOCUMENT.value;

        	var fileManager = {};
        	fileManager.CD_GUBUN = cdGubun;
        	fileManager.CD_DIR = [cdDir];
        	fileManager.IS_READONLY = false;

        // 		trace("VcboAccntGb :: " + VcboAccntGb);
        // 		trace("fileManager.CD_GUBUN :: " + fileManager.CD_GUBUN);
        // 		trace("fileManager.CD_DIR :: " + fileManager.CD_DIR);
        // 		trace("fileManager.IS_READONLY :: " + fileManager.IS_READONLY);

        	this.gfnFileManager(fileManager, "fnFileCallback");

        }

        this.fnFileCallback = function(strID, val) {
        	// val.IsChange : 변경여부, val.Cnt : 파일개수

        	// 파일개수를 다시 셋팅
        	//this.dsList.set_enableevent(false);
        	if(val.Cnt == 0) {
        		this.btn3.set_text("첨부(0)");
        	} else {
        		this.btn3.set_text("첨부(" + val.Cnt + ")");
        	}
        	//this.dsList.setColumn(this.dsList.rowposition, "URL_PROOF", "첨부(" + val.Cnt + ")");
        	//this.dsList.set_enableevent(true);
        };


        /************************************************************************
         * 코드파인드 이벤트
         ************************************************************************/

        /************************************************************************
         * 그리드 이벤트
         ************************************************************************/
        this.fnGridSub_BeforuserDataSetParam = function(id, dsUserParam, nrow){

        	var gridIdx = this.dxGridSub.currentrow;

         //trace("그리드 코드파인드 >>>id["+id+"] nrow["+nrow+"] gridIdx["+gridIdx+"] CD_ORDER1[" + this.dsListSub.getColumn(nrow, "CD_ORDER1") +"]" );
         //trace("그리드 코드파인드 >>>CD_ORDER1["+this.dxGridSub.getCellValue(gridIdx, this.dxGridSub.getBindCellIndex("body", "CD_ORDER1"))+"] " );

        	switch(id) {

        		case "OA":	//발령대분류
        			dsUserParam.setColumn(nrow, "CD_PREFIX", "OA");
        			break;
        		case "DAX_CFORDER":	//발령소분류
        			var cd_order1 = this.dxGridSub.getCellValue(gridIdx, this.dxGridSub.getBindCellIndex("body", "CD_ORDER1"));
        			if(this.gfnIsNull(cd_order1)) {
        				this.gfnAlert("발령대분류를 먼저 입력하세요.");
        				return false;
        			}
        			dsUserParam.setColumn(nrow, "CD_ORDER1", cd_order1);
        			break;
        		case "DAX_CFCORP2": //법인
        			dsUserParam.setColumn(nrow, "GR_SEARCH", this.FormInfo.GR_SEARCH);
        			dsUserParam.setColumn(nrow, "CD_DEPT", this.AuthClient.CD_DEPT);
        			break;
        		/*
        		case "DAX_CFDEPT": //부서

        			var cd_corp = this.dsListSub.getColumn(this.dsListSub.rowposition, "CD_CORP_ORD");
        			var id_sabun = this.dsListSub.getColumn(this.dsListSub.rowposition, "ID_SABUN");
        			if(this.gfnIsNull(cd_corp)) cd_corp = this.ccfCD_CORP.form.CDTextBox.value;

        			dsUserParam.setColumn(nrow, "GR_SEARCH", this.FormInfo.GR_SEARCH);
        			dsUserParam.setColumn(nrow, "CD_DEPT", this.AuthClient.CD_DEPT);
        			dsUserParam.setColumn(nrow, "CD_CORP", cd_corp);
        			dsUserParam.setColumn(nrow, "YN_CURRENT", "");
        			break;
        		*/
        		case "DAX_CFDEPT": // 발령부서

        			var cd_corp = this.dsListSub.getColumn(this.dsListSub.rowposition, "CD_CORP_ORD");
        			if(this.gfnIsNull(cd_corp)) {
        				this.gfnAlert("발령법인을 먼저 입력해주세요.");
        				return false;
        			}

        			dsUserParam.setColumn(nrow, "GR_SEARCH", this.FormInfo.GR_SEARCH);
        			dsUserParam.setColumn(nrow, "CD_DEPT", this.AuthClient.CD_DEPT);
        			dsUserParam.setColumn(nrow, "CD_CORP", cd_corp);
        			dsUserParam.setColumn(nrow, "YN_CURRENT", "Y");
        			break;
        		case "DAX_CFCONCURDEPT": //겸직부서 (DAXPR_CONCURDEPT_CODEFIND)
        			var cd_corp = this.dsListSub.getColumn(this.dsListSub.rowposition, "CD_CORP_ORD");
        			var id_sabun = this.dsListSub.getColumn(this.dsListSub.rowposition, "ID_SABUN");
        			var cd_order1 = this.dsListSub.getColumn(this.dsListSub.rowposition, "CD_ORDER1");	// 발령구분

        			if(this.gfnIsNull(cd_corp)) cd_corp = this.ccfCD_CORP.form.CDTextBox.value;
        			if(this.gfnIsNull(id_sabun)) {
        				this.gfnAlert("발령사번을 먼저 입력해주세요.");
        				return false;
        			}

        			if(this.gfnIsNull(cd_order1)) {
        				this.gfnAlert(" 발령구분을 먼저 입력해주세요.");
        				return false;
        			}

        			dsUserParam.setColumn(nrow, "CD_CORP", cd_corp);
        			dsUserParam.setColumn(nrow, "ID_SABUN", id_sabun);
        			dsUserParam.setColumn(nrow, "CD_ORDER1", cd_order1);
        			break;
        		case "EA":
        			dsUserParam.setColumn(nrow, "CD_PREFIX", "EA");
        			break;
        		case "ED":
        			dsUserParam.setColumn(nrow, "CD_PREFIX", "ED");
        			break;
        		case "EH":
        			dsUserParam.setColumn(nrow, "CD_PREFIX", "EH");
        			break;
        		case "EC":
        			dsUserParam.setColumn(nrow, "CD_PREFIX", "EC");
        			break;
        		case "EF":
        			dsUserParam.setColumn(nrow, "CD_PREFIX", "EF");
        			break;

        		case "DS_HOLDDUTY":	//겸무
        			dsUserParam.setColumn(nrow, "CD_PREFIX", "EF");
        			break;

        		case "EB":
        			dsUserParam.setColumn(nrow, "CD_PREFIX", "EB");
        			break;
        		case "DAX_CFDEPT2":
        			var cd_corp = this.ccfCD_CORP.form.CDTextBox.value;
        			dsUserParam.setColumn(nrow, "GR_SEARCH", this.FormInfo.GR_SEARCH);
        			dsUserParam.setColumn(nrow, "CD_DEPT", this.AuthClient.CD_DEPT);
        			dsUserParam.setColumn(nrow, "CD_CORP", cd_corp);
        			dsUserParam.setColumn(nrow, "YN_CURRENT", "");
        			break;
        		case "DAX_CFDEPT_MST1":  //실근무지
        			break;
        		case "DAX_CFBASEINFO_ALL":	// 사번
        			var cd_corp = this.ccfCD_CORP.form.CDTextBox.value;
        			dsUserParam.setColumn(nrow, "CD_DEPT", this.AuthClient.CD_DEPT);
        			dsUserParam.setColumn(nrow, "CD_CORP", cd_corp);
        			dsUserParam.setColumn(nrow, "GR_SEARCH", this.FormInfo.GR_SEARCH);
        			dsUserParam.setColumn(nrow, "YN_CORP", "N");
        			dsUserParam.setColumn(nrow, "TY_RETIRE", "%");
        			break;
        		case "DAX_CFCORP_CODEFIND":	// 발령법인
        			dsUserParam.setColumn(nrow, "GR_SEARCH", this.FormInfo.GR_SEARCH);
        			dsUserParam.setColumn(nrow, "CD_CORP", "%");
        			dsUserParam.setColumn(nrow, "CD_DEPT", this.AuthClient.ID_USER);
        			break;

        		default:
        	}
        	return true;
        }

        this.fnGridSub_AfterCDTextChanged = function(id, codeFindData) {
        	var arr = codeFindData;
        	switch(id) {
        		case "OA":	// 발령대분류
        			//겸직해지(cd_order1 = 09) or 파견복귀(07) 발령일경우 코드파인드 변경 >> DAX_CFCONCURDEPT
        			var CD_ORDER1 = this.dsListSub.getColumn(this.dsListSub.rowposition, "CD_ORDER1");
        			if (CD_ORDER1 == "09" || CD_ORDER1 == "07") {

        				this.dxGridSub.usCodefindInfo.CD_DEPT.CD_CODEFIND = "DAX_CFCONCURDEPT";
        				this.dxGridSub.usCodefindInfo.CD_DEPT.NM_CODEFIND = "DAX_CFCONCURDEPT";
        				this.dxGridSub.usCodefindInfo.DS_DEPT.CD_CODEFIND = "DAX_CFCONCURDEPT";
        				this.dxGridSub.usCodefindInfo.DS_DEPT.NM_CODEFIND = "DAX_CFCONCURDEPT";
        			} else {
        				this.dxGridSub.usCodefindInfo.CD_DEPT.CD_CODEFIND = "DAX_CFDEPT";
        				this.dxGridSub.usCodefindInfo.CD_DEPT.NM_CODEFIND = "DAX_CFDEPT";
        				this.dxGridSub.usCodefindInfo.DS_DEPT.CD_CODEFIND = "DAX_CFDEPT";
        				this.dxGridSub.usCodefindInfo.DS_DEPT.NM_CODEFIND = "DAX_CFDEPT";
        			}
        			this.dsListSub.setColumn(this.dsListSub.rowposition, "CD_ORDER2", ""); //발령소분류 초기화
          			this.dsListSub.setColumn(this.dsListSub.rowposition, "DS_ORDER2", "");
        		break;

        		case "DAX_CFCORP2": //법인
          			this.dsListSub.setColumn(this.dsListSub.rowposition, "CD_DEPT", "");
          			this.dsListSub.setColumn(this.dsListSub.rowposition, "DS_DEPT", "");

        			var CD_ORDER1 = this.dsListSub.getColumn(this.dsListSub.rowposition, "CD_ORDER1");
        			if (CD_ORDER1 == "01" || CD_ORDER1 == "04" || CD_ORDER1 == "05") { //채용(01),퇴직(04),부서이동(05)인 경우만 실근무지 초기화
        				this.dsListSub.setColumn(this.dsListSub.rowposition, "CD_WORK_PLACE", "");
        				this.dsListSub.setColumn(this.dsListSub.rowposition, "DS_WORK_PLACE", "");
        			}

        		break;

        		case "DAX_CFDEPT": //부서
        			var CD_ORDER1 = this.dsListSub.getColumn(this.dsListSub.rowposition, "CD_ORDER1");
        			if (CD_ORDER1 == "01" || CD_ORDER1 == "04" || CD_ORDER1 == "05") { //채용(01),퇴직(04),부서이동(05) 인 경우 실근무지 동일하게 셋팅
        				this.dsListSub.setColumn(this.dsListSub.rowposition, "CD_WORK_PLACE", this.dsListSub.getColumn(this.dsListSub.rowposition, "CD_DEPT").substring(1,6));
        				this.dsListSub.setColumn(this.dsListSub.rowposition, "DS_WORK_PLACE", this.dsListSub.getColumn(this.dsListSub.rowposition, "DS_DEPT"));
        			}
        		break;

        		default:
        	}
        	return true;
        };

        this.fnGridSub_EnterCell = function(obj, row, cell) {
        	var colnm = this.gfnGridGetBindColumnNameByIndex(this.dxGridSub, cell);

        	if(this.gfnNvl(this.dsListSub.getColumn(row, "YN_REFLECT"),"") == "Y") {
        		return false;
        	}
        }

        /************************************************************************
         * 기타 이벤트
         ************************************************************************/
        this.divData_divSplitter_btnMove_onclick = function(obj,e)
        {
        	if (!this.gfnGridIsRow(this.dxGrid)) { return false; }
        	var param = {};
        	param.CD_CORP = this.ccfCD_CORP.form.CDTextBox.value;
        	param.DS_CORP = this.ccfCD_CORP.form.DSTextBox.value;
        	this.gfnFormOpenNonAuth(this.FormInfo.CD_MODULE, "DAA_MULTIORDERDLG", "fnDlgButton_callback", param, 386, 315);
        };

        this.fnSearchInit = function(obj,e) {
        	if(e == null || (e.pretext != e.posttext)) {
        		this.gfnSetFormStatus(this);
        		this.gfnGridClear(this.dxGrid);
        		this.gfnGridClear(this.dxGridSub);
        	}
        }

        this.dsSearch_onvaluechanged = function(obj,e)
        {
        	if(e.oldvalue != e.newvalue) {
        		this.gfnSetFormStatus(this);	// 폼상태 초기화
        		this.gfnGridClear(this.dxGrid);
        		this.gfnGridClear(this.dxGridSub);
        	}
        };

        this.divData_ondragmove = function(obj,e)
        {
        	if(e.userdata == "splitter") {
        		this.divData.form.divSplitter.set_left(e.clientx);
        		this.divData.form.resetScroll();
        	}
        };

        this.divData_divSplitter_ondrag = function(obj,e)
        {
        	e.set_userdata("splitter");
        	return true;
        };


        this.dsListSub_onrowposchanged = function(obj,e)
        {
        	//겸직해지(cd_order1 = 09) or 파견복귀(07) 발령일경우 코드파인드 변경 >> DAX_CFCONCURDEPT
        	var CD_ORDER1 = this.dsListSub.getColumn(e.newrow, "CD_ORDER1");
        	if (CD_ORDER1 == "09" || CD_ORDER1 == "07") {
        		this.dxGridSub.usCodefindInfo.CD_DEPT.CD_CODEFIND = "DAX_CFCONCURDEPT";
        		this.dxGridSub.usCodefindInfo.CD_DEPT.NM_CODEFIND = "DAX_CFCONCURDEPT";
        		this.dxGridSub.usCodefindInfo.DS_DEPT.CD_CODEFIND = "DAX_CFCONCURDEPT";
        		this.dxGridSub.usCodefindInfo.DS_DEPT.NM_CODEFIND = "DAX_CFCONCURDEPT";
        	} else {
        		this.dxGridSub.usCodefindInfo.CD_DEPT.CD_CODEFIND = "DAX_CFDEPT";
        		this.dxGridSub.usCodefindInfo.CD_DEPT.NM_CODEFIND = "DAX_CFDEPT";
        		this.dxGridSub.usCodefindInfo.DS_DEPT.CD_CODEFIND = "DAX_CFDEPT";
        		this.dxGridSub.usCodefindInfo.DS_DEPT.NM_CODEFIND = "DAX_CFDEPT";
        	}
        };
        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.form_onload,this);
            this.divData.addEventHandler("ondragmove",this.divData_ondragmove,this);
            this.divData.form.divSplitter.addEventHandler("ondrag",this.divData_divSplitter_ondrag,this);
            this.divData.form.divDataRight.form.btnMove.addEventHandler("onclick",this.divData_divSplitter_btnMove_onclick,this);
            this.dsListSub.addEventHandler("onrowposchanged",this.dsListSub_onrowposchanged,this);
        };
        this.loadIncludeScript("DAA_MULTIORDERGRID.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
