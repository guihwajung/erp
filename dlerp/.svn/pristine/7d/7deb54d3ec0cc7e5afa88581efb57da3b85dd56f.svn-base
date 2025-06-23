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
            this.set_titletext("분담금 분담내역");
            if (Form == this.constructor)
            {
                this._setFormPosition(1280,720);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("dsList", this);
            obj._setContents("");
            this.addChild(obj.name, obj);


            obj = new Dataset("_dsProc", this);
            obj._setContents("<ColumnInfo><Column id=\"TARGET\" type=\"STRING\" size=\"256\"/><Column id=\"SP\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"TARGET\">combo</Col><Col id=\"SP\">DAUPR_CORPANTE_CORP_HEAD_SELECT</Col></Row><Row><Col id=\"TARGET\">select</Col><Col id=\"SP\">DAUPR_CORPANTE_CORP_SELECT</Col></Row><Row><Col id=\"TARGET\">comboFix</Col><Col id=\"SP\">DAUPR_CORPANTE_CORP_HEAD_SELECT</Col></Row><Row><Col id=\"TARGET\">test</Col><Col id=\"SP\">DAUPR_CORPANTE_CORP_HEAD2_SELECT</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsSearch", this);
            obj._setContents("<ColumnInfo><Column id=\"YY_BASE\" type=\"STRING\" size=\"256\"/><Column id=\"TY_GUBUN\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"YY_BASE\"/><Col id=\"TY_GUBUN\"/></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsHeader", this);
            obj._setContents("<ColumnInfo><Column id=\"CD_CODE\" type=\"STRING\" size=\"256\"/><Column id=\"DS_CODE\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsHeader2", this);
            obj._setContents("<ColumnInfo><Column id=\"CD_CODE\" type=\"STRING\" size=\"256\"/><Column id=\"DS_CODE\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Div("divSearch","0","0",null,"46.0","0",null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_cssclass("div_SEARCH_Bg");
            this.addChild(obj.name, obj);

            obj = new Static("staYY_BASE","0.0","10.0","92.0","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("0");
            obj.set_text("대상년도");
            obj.set_cssclass("sta_WF_SchLabelE");
            this.divSearch.addChild(obj.name, obj);

            obj = new Div("ctclYY_BASE","staYY_BASE:0.0","10.0","80","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("1");
            obj.set_url("cmm::cmmCalYY.xfdl");
            obj.getSetter("onchanged").set("fnSearchInit");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("staTY_GUBUN","ctclYY_BASE:0.0","10.0","92.0","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("2");
            obj.set_text("구분");
            obj.set_cssclass("sta_WF_SchLabelE");
            this.divSearch.addChild(obj.name, obj);

            obj = new Radio("rdoTY_GUBUN","staTY_GUBUN:0.0","10.0","180","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("3");
            obj.set_codecolumn("codecolumn");
            obj.set_datacolumn("datacolumn");
            obj.set_direction("vertical");
            var divSearch_form_rdoTY_GUBUN_innerdataset = new nexacro.NormalDataset("divSearch_form_rdoTY_GUBUN_innerdataset", obj);
            divSearch_form_rdoTY_GUBUN_innerdataset._setContents("<ColumnInfo><Column id=\"codecolumn\" size=\"256\"/><Column id=\"datacolumn\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"codecolumn\">E</Col><Col id=\"datacolumn\">예상분담금</Col></Row><Row><Col id=\"codecolumn\">D</Col><Col id=\"datacolumn\">확정분담금</Col></Row></Rows>");
            obj.set_innerdataset(divSearch_form_rdoTY_GUBUN_innerdataset);
            obj.set_text("상반기");
            obj.set_value("1");
            obj.set_index("0");
            this.divSearch.addChild(obj.name, obj);

            obj = new Div("divData","0","divSearch:5",null,null,"0","0",null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_cssclass("div_DATA_Bg");
            this.addChild(obj.name, obj);

            obj = new Grid("objGrid","0","0",null,null,"0","0",null,null,null,null,this.divData.form);
            obj.set_taborder("0");
            obj.getSetter("BeforeUserDataSetParam").set("fnGrid_BeforeUserDataSetParam");
            obj.getSetter("AfterCDTextChanged").set("fnGrid_AfterCDTextChanged");
            obj._setContents("");
            this.divData.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this
            obj = new Layout("default","",this._adjust_width,this._adjust_height,this,function(p){});
            this.addLayout(obj.name, obj);
            
            // BindItem Information
            obj = new BindItem("item0","divSearch.form.ctclYY_BASE.form.TextBox","value","dsSearch","YY_BASE");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item2","divSearch.form.rdoTY_GUBUN","value","dsSearch","TY_GUBUN");
            this.addChild(obj.name, obj);
            obj.bind();
            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {
            this._addPreloadList("fdl","cmm::cmmCalYY.xfdl");
        };
        
        // User Script
        this.registerScript("DAU_CORPANTE_CORP.xfdl", function() {
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
        	this.fnSetCombo();

        	//기준년도
        // 	this.ctclYY_BASE.form.TextBox.set_value(this.gfnGetDate().substr(0,4));
        // 	this.rdoTY_GUBUN.set_index(0);
        	// 타화면에서 오픈시 넘어오는 파라미터 처리
        	var frame = this.getOwnerFrame();
        	if(!this.gfnIsNull(frame.YY_BASE)){
        		this.ctclYY_BASE.form.TextBox.set_value(frame.YY_BASE);
        		this.rdoTY_GUBUN.set_value(frame.TY_GUBUN);
        		this.FormBtns.Select.click();
        	}

        };

        /************************************************************************
         * 버튼 설정 : 화면(Tab) 전환시 마다 호출
         * 서브버튼 사용 및 공통버튼 강제 제어시 여기서 처리
         ************************************************************************/
        this.fnSetButton = function() {
        	// Select, Add, Del, Save, Excel, Print
        	// SubSelect, SubAdd, SubDel, SuubSave, SubExcel
         	this.FormBtns.Add.set_enable(false);
         	this.FormBtns.Del.set_enable(false);
         	this.FormBtns.Save.set_enable(false);
        };

        /************************************************************************
         * 확장 버튼 : 화면별 버튼 설정 ID, function 연결 (화면버튼관리)
         ************************************************************************/
        this.fnSetExtendButton = function() {

        };

        /************************************************************************
         * 변수 선언
         ************************************************************************/
        this.fnSetVariable = function() {
        	//기준년도
        	this.ctclYY_BASE = this.divSearch.form.ctclYY_BASE;

            //구분
        	this.rdoTY_GUBUN = this.divSearch.form.rdoTY_GUBUN;

        	this.dxGrid = this.divData.form.objGrid;

        	this.grSearch = this.FormInfo.GR_SEARCH;					          // 권한
        	this.cdGroup = this.AuthClient.CD_GROUP;					          // 그룹코드
        };

        /************************************************************************
         * 이벤트 설정
         ************************************************************************/
        this.fnSetEvent = function() {
        	this.gfnGridInit(this.dxGrid, this.dsList, "DA", "DAU_CORPANTE_CORP");

        	this.ctclYY_BASE.form.TextBox.set_value(this.gfnGetDate().substr(0,4));
        	this.rdoTY_GUBUN.set_index(0);

        	//this.divData.form.objGrid.setCellProperty("head", 3, "autosizerow", "limitmin");
        	//this.dxGrid.setFormatRowProperty(1, "size", 50);
        };

        /************************************************************************
         * 파라미터 설정
         ************************************************************************/
        this.fnSetParameter = function() {

        	//조회
        	this.dsSelect = new Dataset();
        	this.dsSelect.addColumn("YY_BASE", "string");
        	this.dsSelect.addColumn("TY_GUBUN", "string");

        };

        /************************************************************************
         * 컨트롤 이벤트
         ************************************************************************/
         /*
          *	조회 버튼
          */
        this.fnSelect = function() {

        	if (!this.fnSelectValidate()) return false;

        	if(this.rdoTY_GUBUN.value == "E"){
        		this.fnSetGridColunm(this.dsHeader);
        	}else{
        		this.fnSetGridColunm(this.dsHeader2);
        	}

        	// 헤더 높이를 변경(매출비율까지 같이 보이게 하려고)
        	//this.dxGrid.setFormatRowProperty(0, "size", 45);
        	//this.dxGrid.setFormatRowProperty(1, "size", 24);

        	this.gfnGridBeforeSelect(this.dxGrid);

        	this.dsSelect.clearData();
        	this.dsSelect.addRow();

        	this.dsSelect.setColumn(0, "YY_BASE", this.ctclYY_BASE.form.TextBox.value);
        	this.dsSelect.setColumn(0, "TY_GUBUN", this.rdoTY_GUBUN.value);

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
        						strArg, 	    // 입력갑스로 보낼 arguments, strFormData="20120607"
        						callBackFnc); // 통신방법 정의 [생략가능]
        };

        this.fnSetGridColunm = function ( objDataSet ){
        	var ncol1 = 0;
        	var ncol2 = 0;
        	var ncol3 = 1;
        	var cols = 0; // merge 되면서 cell index가 조정된다.
        	this.dxGrid.set_enableredraw(false);
        	this.dsList.set_enableevent(false);

        	trace(this.dxGrid);
         	for ( var i =this.dxGrid.getCellCount("body")-1; 1 < i ; i--){
         		if( this.gfnGridGetBindColumnNameByIndex( this.dxGrid, i).search("CD_") > -1 ){
         			this.dxGrid.deleteContentsCol("body",i);
         		}
         	}

        	for ( var i =this.dsList.colcount-1; -1 < i ; i--){
        		trace(i+"=" + this.dsList.getColID(i));
        		if( this.dsList.getColID(i).search("CD_") > -1 ){
        			this.dsList.deleteColumn(i);
        		}
        	}

        	for( var i = 0; i < objDataSet.rowcount; i++ ){
        		var objColinfo = new ColumnInfo() ;
        		objColinfo.set_type( "DOUBLE" );
        		objColinfo.set_size( 256 );

        		this.dsList.addColumnInfo(objDataSet.getColumn(i,"CD_CODE"),objColinfo);

        		ncol1 = this.dxGrid.appendContentsCol();
        		this.dxGrid.setFormatColProperty(ncol1, "size", 120);
        		this.dxGrid.setCellProperty("head", ncol1, "text", objDataSet.getColumn(i,"DS_CODE") );
        		this.dxGrid.setCellProperty("body", ncol1, "displaytype", "number");
        		this.dxGrid.setCellProperty("body", ncol1, "text", "bind:" + objDataSet.getColumn(i,"CD_CODE"));
        		this.dxGrid.setCellProperty("summ", ncol1, "displaytype", "number");
        //		this.dxGrid.setCellProperty("summ", ncol1 , "text", "expr:dataset.getSum('CD_" + objDataSet.getColumn(i,"CD_CODE") + "')");
        		//this.dxGrid.setCellProperty("summ", ncol1 , "text", "expr:dataset.getSum('" + objDataSet.getColumn(i,"DS_CODE") + "')");
        	}
        	this.dxGrid.set_enableredraw(true);
        	this.dsList.set_enableevent(true);
        };

        /*
         *	입력 버튼
         */
        this.fnAdd = function() {
        	//this.gfnGridAdd(this.dxGrid);
        };

        /*
         *	삭제 버튼
         */
        this.fnDel = function() {
        	//this.gfnGridDel(this.dxGrid);
        };

        /*
         *	저장 버튼
         */
        this.fnSave = function() {

        };

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
        this.fnSelectValidate = function() {

        	var validate = true;

        	if (this.gfnIsNull(this.ctclYY_BASE.form.TextBox.value)) {
        		validate = false;
        		this.fnVaidateCallback = function() {
        			this.ctclYY_BASE.form.TextBox.setFocus();
        		}
        		this.gfnAlert("기준년도를 입력하세요.", "fnVaidateCallback");
        	}

        	return validate;
        };
        /************************************************************************
         * 콜백 이벤트
         ************************************************************************/
        /*
         *	콜백 처리
         */
        this.fnCallback = function(svcID, errorCode, errorMsg, args)
        {
        	if (svcID == "select") {
        		this.gfnGridAfterSelect(this.dxGrid);
        		trace(this.dsList.saveXML());
        		for( var i = 0 ; i < this.dxGrid.getCellCount("body"); i++){
        			var strExpr = "dataset.getColumn(currow, 'CD_ORDER') == '1' ? 'BACK_ReadOnly': (dataset.getColumn(currow, 'CD_ORDER') == '3' || dataset.getColumn(currow, 'CD_ORDER') == '4') ? 'BACK_GangJo': ''";
        			this.dxGrid.setCellProperty( "body", i, "cssclass", "expr:" + strExpr );
        			// BACK_KuBun
        			// BACK_ReadOnly
        		}

        		this.dxGrid.set_enableredraw(false);
        		this.dsList.set_enableevent(false);

        		var nRow3 = this.dsList.findRow( "CD_ORDER", "3" );	// 합계
        		var nRow4 = this.dsList.findRow( "CD_ORDER", "4" );	// 수령액

        		this.dsList.setColumn(nRow3 , "CD_X", this.dsList.getSum( "CD_X"));
        		this.dsList.setColumn(nRow4 , "CD_Y", this.dsList.getSum( "CD_Y"));

        		this.dxGrid.set_enableredraw(true);
        		this.dsList.set_enableevent(true);

        	} else if(svcID == "save") {
        		if (errorCode == 0) {
        			this.FormBtns.Select.click();
        		} else {
        			this.gfnAlert(errorMsg);
        		}
        	} else if(svcID == "combo") {
         		trace("fnCallback dsHeader >>>>"+this.dsHeader.saveXML());
         		trace("fnCallback dsHeader2 >>>>"+this.dsHeader2.saveXML());
        	}
         	this.FormBtns.Add.set_enable(false);
         	this.FormBtns.Del.set_enable(false);
         	this.FormBtns.Save.set_enable(false);

        };

        /************************************************************************
         * 코드파인드 이벤트
         ************************************************************************/
        this.fnBeforeUserDataSetParam = function(id, dsUserParam, nrow) {
         	return true;
        }

        this.fnAfterCDTextChanged = function(id, codeFindData) {
        	this.fnSearchInit();
        };

        //그리드 코드파인드
        this.fnGrid_BeforeUserDataSetParam = function(id, dsUserParam, nrow){

        	return true;
        };

        this.fnGrid_AfterCDTextChanged = function(id, codeFindData) {
        	var arr = codeFindData;
        };
        /************************************************************************
         * 그리드 이벤트
         ************************************************************************/

         /************************************************************************
         * 확장버튼 이벤트
         ************************************************************************/


         /************************************************************************
         * 기타 이벤트
         ************************************************************************/
        /*
         *	조회 조건 변경시 초기화
         */
        this.fnSearchInit = function(obj,e) {
        	if(e == null || (e.pretext != e.posttext)) {
        		// 폼상태 초기화
        		this.gfnSetFormStatus(this);
        		this.gfnGridClear(this.dxGrid);
        	}
        };

        this.dsSearch_onvaluechanged = function(obj,e)
        {
        	if(!this.gfnIsNull(e.columnid)){
        		this.fnSearchInit();
        	}
        };

        this.fnSetCombo = function() {

        	this.dsCombo = new Dataset();
        	this.dsCombo.addColumn("YY_BASE", "string");
        	this.dsCombo.addColumn("TY_GUBUN", "string");

        	this.dsCombo.addRow();
        	this.dsCombo.setColumn(0, "YY_BASE", this.divSearch.form.ctclYY_BASE.form.TextBox.value);
        	this.dsCombo.setColumn(0, "TY_GUBUN", this.divSearch.form.rdoTY_GUBUN.value);

        	var strSvcId    = "combo";
        	var strSvcType  = "select";
        	var inProc		= "_dsProc";
        	var inData      = "combo=dsCombo comboFix=dsCombo";
        	var outData     = "dsHeader=combo0 dsHeader2=comboFix0";
        	var strArg      = "";
        	var callBackFnc = "fnCallback";

        	this.gfnTransaction( strSvcId , 	// transaction을 구분하기 위한 svc id값
        						strSvcType , 	// transaction을 요청할 구분
        						inProc,			// Procedure 정보 Dataset 이름
        						inData , 		// 입력값으로 보낼 dataset id , a=b형태로 실제이름과 입력이름을 매칭
        						outData , 		// 처리결과값으로 받을 dataset id, a=b형태로 실제이름과 입력이름을 매칭
        						strArg, 			// 입력갑스로 보낼 arguments, strFormData="20120607"
        						callBackFnc, false); // 통신방법 정의 [생략가능]
        };

        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.form_onload,this);
            this.dsList.addEventHandler("onrowposchanged",this.dsList_onrowposchanged,this);
            this.dsSearch.addEventHandler("onvaluechanged",this.dsSearch_onvaluechanged,this);
            this.dsHeader.addEventHandler("onvaluechanged",this.dsSearch_onvaluechanged,this);
            this.dsHeader2.addEventHandler("onvaluechanged",this.dsSearch_onvaluechanged,this);
        };
        this.loadIncludeScript("DAU_CORPANTE_CORP.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
