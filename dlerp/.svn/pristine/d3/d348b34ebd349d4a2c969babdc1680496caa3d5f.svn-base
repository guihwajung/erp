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
            this.set_titletext("기납부세액신고내역");
            this.getSetter("maxwidth").set("1000");
            this.getSetter("maxheight").set("580");
            if (Form == this.constructor)
            {
                this._setFormPosition(1000,500);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("dsList", this);
            obj._setContents("");
            this.addChild(obj.name, obj);


            obj = new Dataset("_dsProc", this);
            obj._setContents("<ColumnInfo><Column id=\"TARGET\" type=\"STRING\" size=\"256\"/><Column id=\"SP\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"TARGET\">select</Col><Col id=\"SP\">DHVPR_RETURNPAYMENTDLG_SELECT</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsSearch", this);
            obj._setContents("<ColumnInfo><Column id=\"CD_CORP\" type=\"STRING\" size=\"256\"/><Column id=\"TY_GUBUN\" type=\"STRING\" size=\"256\"/><Column id=\"YR_WORK\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row/></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsGubun", this);
            obj._setContents("<ColumnInfo><Column id=\"CODE\" type=\"STRING\" size=\"256\"/><Column id=\"VALUE\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"CODE\">Y</Col><Col id=\"VALUE\">연말</Col></Row><Row><Col id=\"CODE\">N</Col><Col id=\"VALUE\">중도</Col></Row></Rows>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Static("staTitle","0","10",null,"22","0",null,null,null,null,null,this);
            obj.set_taborder("3");
            obj.set_text("기납부세액신고내역");
            obj.set_cssclass("sta_TITLE_Bg");
            this.addChild(obj.name, obj);

            obj = new Div("divSearch","0","staTitle:10.0",null,"45","0",null,null,null,null,null,this);
            obj.set_taborder("4");
            obj.set_cssclass("div_SEARCH_Bg");
            obj.set_text("");
            this.addChild(obj.name, obj);

            obj = new Static("sta01","0","40","92.0","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("0");
            obj.set_text("법인코드");
            obj.set_cssclass("sta_WF_SchLabelE");
            obj.set_visible("false");
            this.divSearch.addChild(obj.name, obj);

            obj = new Div("ccfCD_CORP","sta01:0","40","259","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.getSetter("CDTextWidth").set("70");
            obj.set_taborder("1");
            obj.set_url("cmm::cmmCodeFind.xfdl");
            obj.set_text("");
            obj.set_enable("false");
            obj.set_visible("false");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("sta03","8","10","92.0","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("2");
            obj.set_text("귀속연도");
            obj.set_cssclass("sta_WF_SchLabelE");
            this.divSearch.addChild(obj.name, obj);

            obj = new Radio("rdoGUBUN","200","11","120","20",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("3");
            obj.set_innerdataset("dsGubun");
            obj.set_datacolumn("VALUE");
            obj.set_codecolumn("CODE");
            obj.set_fittocontents("width");
            obj.set_direction("vertical");
            obj.set_text("연말");
            obj.set_value("Y");
            obj.set_index("0");
            this.divSearch.addChild(obj.name, obj);

            obj = new Div("ctclYR_WORK","sta03:-3","10","60","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.getSetter("CDTextWidth").set("70");
            obj.set_taborder("4");
            obj.set_url("cmm::cmmCalYY.xfdl");
            obj.set_text("");
            this.divSearch.addChild(obj.name, obj);

            obj = new Button("btnSearch",null,"55","50","21","10",null,null,null,null,null,this);
            obj.set_taborder("5");
            obj.set_text("조회");
            this.addChild(obj.name, obj);

            obj = new Div("divData","0","divSearch:10",null,null,"0","45",null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_cssclass("div_DATA_Bg");
            this.addChild(obj.name, obj);

            obj = new Grid("objGrid","0","0",null,null,"0","0",null,null,null,null,this.divData.form);
            obj.set_taborder("0");
            obj._setContents("");
            this.divData.addChild(obj.name, obj);

            obj = new Button("btnConf","335",null,"69","27",null,"7",null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_text("확인");
            this.addChild(obj.name, obj);

            obj = new Button("btnCancel","423",null,"69","27",null,"7",null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_text("닫기");
            this.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this
            obj = new Layout("default","",this._adjust_width,this._adjust_height,this,function(p){});
            this.addLayout(obj.name, obj);
            
            // BindItem Information
            obj = new BindItem("item0","divSearch.form.ccfCD_CORP.form.CDTextBox","value","dsSearch","CD_CORP");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item1","divSearch.form.rdoGUBUN","value","dsSearch","TY_GUBUN");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item2","divSearch.form.ctclYR_WORK.form.TextBox","value","dsSearch","YR_WORK");
            this.addChild(obj.name, obj);
            obj.bind();
            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {
            this._addPreloadList("fdl","cmm::cmmCodeFind.xfdl");
            this._addPreloadList("fdl","cmm::cmmCalYY.xfdl");
        };
        
        // User Script
        this.registerScript("DHV_RETURNPAYMENTDLG.xfdl", function() {
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

        	//법인코드 셋팅
        // 	this.ccfCD_CORP.form.CDTextBox.set_value(this.getOwnerFrame().CD_CORP);
        // 	this.ccfCD_CORP.form.DSTextBox.set_value(this.getOwnerFrame().DS_CORP);
        	//this.ctclYR_WORK.set_value(this.getOwnerFrame().YR_WORK);
        	//this.ctclYR_WORK.set_value(this.gfnGetDate().substr(0,4));
        // 	this.dsSearch.setColumn(0, "CD_CORP", this.getOwnerFrame().CD_CORP);
        // 	this.dsSearch.setColumn(0, "DS_CORP", this.getOwnerFrame().DS_CORP);
         	this.dsSearch.setColumn(0, "YR_WORK", this.getOwnerFrame().YR_WORK);
        	this.dsSearch.setColumn(0, "TY_GUBUN" , this.getOwnerFrame().TY_GUBUN);
        	this.dsSearch.setColumn(0, "CD_CORP" , this.getOwnerFrame().CD_CORP);

        	//this.divSearch.form.ctclYR_WORK.set_value(this.gfnAddMonth(this.gfnGetDate(), -12));
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

        	this.ccfCD_CORP    = this.divSearch.form.ccfCD_CORP;
        	this.rdoGUBUN    = this.divSearch.form.rdoGUBUN;
        	this.ctclYR_WORK   = this.divSearch.form.ctclYR_WORK;
        	this.dxGrid        = this.divData.form.objGrid;
        };

        /************************************************************************
         * 이벤트 설정
         ************************************************************************/
        this.fnSetEvent = function() {
        	//법인코드
        	this.ccfCD_CORP.CodeFindName = "DHX_CFCORP";
        	this.ccfCD_CORP.BeforeUserDataSetParam = "fnBeforeUserDataSetParam";
        	this.ccfCD_CORP.AfterCDTextChanged = "fnAfterCDTextChanged";

        	this.gfnGridInit(this.dxGrid, this.dsList, "DH", "DHV_RETURNPAYMENTDLG");

        	this.dsList.addEventHandler("oncolumnchanged", this.dsList_ColumnChanged, this);
        	this.dsList.addEventHandler("onvaluechanged", this.dsList_Valuechanged, this);

        	//검색조건 변경 이벤트
        	this.dsSearch.addEventHandler("onvaluechanged", this.dsSearch_Valuechanged, this);

        };

        /************************************************************************
         * 파라미터 설정
         ************************************************************************/
        this.fnSetParameter = function() {
        	this.dsSelect = new Dataset();
        	this.dsSelect.addColumn("CD_CORP", "string");
        	this.dsSelect.addColumn("YR_WORK", "string");
        	this.dsSelect.addColumn("TY_GUBUN", "string");

        	//리턴 데이터셋
         	this.dsResultPayment = new Dataset();

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

        	this.dsList.clearData();

        	this.dsSelect.clearData();
        	this.dsSelect.addRow();
        	this.dsSelect.setColumn(0, "CD_CORP" , this.ccfCD_CORP.form.CDTextBox.value);          	// 법인코드
        	this.dsSelect.setColumn(0, "YR_WORK" , this.ctclYR_WORK.form.TextBox.value);          	        // 귀속년도
        	this.dsSelect.setColumn(0, "TY_GUBUN" , this.rdoGUBUN.value);  	// 소득구분

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
        this.fnSelectValidate = function() {
        	if (this.gfnIsNull(this.ccfCD_CORP.form.CDTextBox.value)) {
        		this.gfnAlert("법인코드는 필수입니다.");
        		this.ccfCD_CORP.form.CDTextBox.setFocus();
        		return false;
        	}


        	if(this.gfnIsNull(this.ctclYR_WORK.form.TextBox.value)){
        		this.gfnAlert("귀속연도는 필수입니다.");
        		this.ctclYR_WORK.setFocus();
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
        	}
        }

        /************************************************************************
         * 코드파인드 이벤트
         ************************************************************************/
         this.fnAfterCDTextChanged = function(id, codeFindData) {
        	var arrData = codeFindData; //this.ccfCD_DEPT_ORG.form.SelectedData; 둘다 사용가능
        	switch(id) {
        		case "ccfCD_CORP":	//법인코드
        			this.ccfCD_DEPT_BH.form.fnCodeFindClear();
        			this.ccfCD_DEPT_BE.form.fnCodeFindClear();
        			this.ccfCD_VENDOR.form.fnCodeFindClear();
        		break;

        	}
        }

        this.fnBeforeUserDataSetParam = function(id, dsUserParam, nrow) {
        	var cdCorp = this.ccfCD_CORP.form.CDTextBox.value;
        	switch(id) {
        		case "ccfCD_CORP":	//법인코드
        			dsUserParam.setColumn(nrow, "ID_SABUN", this.AuthClient.ID_USER);
        		break;

        	}

        	return true;
        };

        /************************************************************************
         * 그리드 이벤트
         ************************************************************************/

        /************************************************************************
         * 기타 이벤트
         ************************************************************************/
        //조회버튼 클릭
        this.btnSearch_onclick = function(obj,e)
        {
        	this.fnSelect();
        };

        //취소버튼 클릭
        this.btnCancel_onclick = function(obj,e)
        {
        	this.getParentContext().close();
        };

        //확인버튼 클릭
        this.btnConf_onclick = function(obj,e)
        {
        	this.fnSetParentsData();

        	//팝업 닫기 처리
        	this.getParentContext().close(this.dsResultPayment.saveXML());
        };

        // 추가버튼
        this.btnAdd_onclick = function(obj,e)
        {
        	//trace(this.getParentContext() + "-부모창 id : "+this.getOwnerFrame().parent.id);
        	this.fnSetParentsData();

        	this.getParentContext().opener.fnBanjeSlipPopupAddData(this.dsResult.saveXML());
        	for(var i=0;i<this.dsList.rowcount;i++){
        		if(this.dsList.getColumn(i, "YN_SELECT") == "1"  && this.gfnGetFlag(this.dsList, i) != "#"){
        			this.dsList.setColumn(i, "YN_ADD", "Y");
        			this.dsList.setColumn(i, "YN_SELECT", 0);
        		}
        	}
        };

        this.fnSetParentsData = function(){

        	if(this.dsList.findRowExprNF("YN_SELECT == '1' && "+this.ucFlag+" != '#'") == -1 ){
        		this.gfnAlert("선택된 항목이 없습니다.");
        		return;
        	}

        	this.dsResultPayment.clearData();

        	this.dsResultPayment.set_enableevent(false);

        	//컬럼/데이터 복사
        	this.dsResultPayment.assign(this.dsList);

        	var arrDel = [];
         	for(var i =0;i<this.dsResultPayment.getRowCountNF();i++){
        		this.dsResultPayment.setColumnNF(i, this.ucFlag, "I");
        		//미선택/필터 로우 제외
         		if(this.dsList.getColumnNF(i, "YN_SELECT") != "1" || this.dsList.getColumnNF(i, this.ucFlag) == "#"){
        			arrDel[arrDel.length] = i;
         		}
         	}

        	//미선택 데이터 삭제
        	this.dsResultPayment.deleteMultiRows(arrDel);

        	this.dsResultPayment.set_enableevent(true);

        }

        //검색조건 변경 이벤트
        this.dsSearch_Valuechanged = function(obj,e)
        {
        	if(e.oldvalue != e.newvalue) {
        		this.gfnGridClear(this.dxGrid);
        	}
        };


        //데이터 변경 이벤트
        this.dsList_Valuechanged = function(obj,e)
        {
        	if(e.oldvalue != e.newvalue) {
        		switch(e.columnid ) {
        			case "YN_SELECT":

        		}
        	}
        };


        // 그리드 헤드 체크박스 클릭
        this.divData_objGrid_onheadclick = function(obj,e)
        {
        	var objGrid = obj;
        	//var cell = this._gfnGridGetBodyCellIndex(objGrid, e.cell);
        	var cellIdx = this._gfnGridGetBodyCellIndex(objGrid, e.cell);
        	var rowCellIndex = this.gfnGetHeadRowCellIndex(objGrid, 2, "YN_SELECT");
        	var colnm = this.gfnGridGetBindColumnNameByIndex(objGrid, cellIdx);

        	if(colnm == "YN_SELECT") {
        		var varValue = this.gfnNvl(objGrid.getHeadValue(rowCellIndex),0);
        		// Sub Row 를 갖는 Row 에서 Cell 인덱스는 "Sub Row 인덱스 * Column 갯수 + Cell 의 col 속성값" 이 됩니다.
        		//this.dsList.set_enableevent(false);
        		for(var i = 0; i < this.dsList.rowcount; i++){
        			var flag = this.dsList.getColumn(i, this.ucFlag);
        			if(flag != "#"){

        					this.dsList.setColumn(i, this.ucFlag, "U");
        			}
        		}
        		//this.dsList.set_enableevent(true);
        	}
        };
        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.form_onload,this);
            this.divSearch.form.rdoGUBUN.addEventHandler("onitemchanged",this.fn_onitemchanged,this);
            this.btnSearch.addEventHandler("onclick",this.btnSearch_onclick,this);
            this.divData.form.objGrid.addEventHandler("onheadclick",this.divData_objGrid_onheadclick,this);
            this.btnConf.addEventHandler("onclick",this.btnConf_onclick,this);
            this.btnCancel.addEventHandler("onclick",this.btnCancel_onclick,this);
        };
        this.loadIncludeScript("DHV_RETURNPAYMENTDLG.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
