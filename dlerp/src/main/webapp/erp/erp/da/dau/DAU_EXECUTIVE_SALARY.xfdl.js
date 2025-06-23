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
            this.set_titletext("임원보수한도조회");
            if (Form == this.constructor)
            {
                this._setFormPosition(1280,720);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("dsList", this);
            obj.set_enableevent("false");
            obj._setContents("");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsListSub", this);
            obj.set_enableevent("false");
            obj._setContents("");
            this.addChild(obj.name, obj);


            obj = new Dataset("_dsProc", this);
            obj._setContents("<ColumnInfo><Column id=\"TARGET\" type=\"STRING\" size=\"256\"/><Column id=\"SP\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"TARGET\">select</Col><Col id=\"SP\">DAUPR_EXECUTIVE_SALARY_SELECT</Col></Row><Row><Col id=\"TARGET\">combo</Col><Col id=\"SP\">DAZPR_CORP_NAME_SELECT</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsSearch", this);
            obj._setContents("<ColumnInfo><Column id=\"YY_WORK\" type=\"STRING\" size=\"256\"/><Column id=\"DT_WORK\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row/></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsCD_CORP", this);
            obj.set_enableevent("false");
            obj._setContents("<ColumnInfo><Column id=\"CD_CORP\" type=\"STRING\" size=\"256\"/><Column id=\"DS_CORP\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Div("divSearch","0","0",null,"46.0","0",null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_cssclass("div_SEARCH_Bg");
            this.addChild(obj.name, obj);

            obj = new Static("staYY_WORK","0.0","10.0","92.0","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("0");
            obj.set_text("기준년도");
            obj.set_cssclass("sta_WF_SchLabelE");
            this.divSearch.addChild(obj.name, obj);

            obj = new Div("ctclYY_WORK","staYY_WORK:0.0","10.0","90","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("1");
            obj.set_url("cmm::cmmCalYY.xfdl");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("staDT_WORK","ctclYY_WORK:0.0","10.0","92.0","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("2");
            obj.set_text("기준일자");
            obj.set_cssclass("sta_WF_SchLabelE");
            this.divSearch.addChild(obj.name, obj);

            obj = new Calendar("calDT_WORK","staDT_WORK:0.0","10.0","100","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("3");
            obj.set_dateformat("yyyy-MM-dd");
            this.divSearch.addChild(obj.name, obj);

            obj = new Div("divData","0","40",null,null,"0","0",null,null,null,null,this);
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
            obj = new BindItem("item0","divSearch.form.ctclYY_WORK.form.TextBox","value","dsSearch","YY_WORK");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item1","divSearch.form.calDT_WORK","value","dsSearch","DT_WORK");
            this.addChild(obj.name, obj);
            obj.bind();
            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {
            this._addPreloadList("fdl","cmm::cmmCalYY.xfdl");
        };
        
        // User Script
        this.registerScript("DAU_EXECUTIVE_SALARY.xfdl", function() {
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

        	//기준년월 셋팅
        	var today = this.gfnGetDate();
        	var todayYear = today.substring(0,4);
        	this.divSearch.form.ctclYY_WORK.form.TextBox.set_value(todayYear);
        	this.divSearch.form.calDT_WORK.set_value(today);
        };

        /************************************************************************
         * 버튼 설정 : 화면(Tab) 전환시 마다 호출
         * 서브버튼 사용 및 공통버튼 강제 제어시 여기서 처리
         ************************************************************************/
        this.fnSetButton = function() {
        	// 서브 버튼 사용
        	//this.gfnUseSubBtn(true, this.divData, this.divData.form.divSplitter); // divSplitter sync
        	this.FormBtns.Reset.set_enable(true);
        }

        /************************************************************************
         * 확장 버튼 : 화면별 버튼 설정 ID, function 연결
         ************************************************************************/
        this.fnSetExtendButton = function() {
        	this.btnFormButton = this.gfnFormButtonAdd("ExecutiveBtn", "fnExecutiveBtn", "임원보수한도등록");
        	this.btnFormButton.set_enable(true);
        };

        /************************************************************************
         * 변수 선언
         ************************************************************************/
        this.fnSetVariable = function() {

        	this.ctclYY_WORK = this.divSearch.form.ctclYY_WORK;
        	this.calDT_WORK = this.divSearch.form.calDT_WORK;

        	this.dxGrid = this.divData.form.objGrid;
        };

        /************************************************************************
         * 이벤트 설정
         ************************************************************************/
        this.fnSetEvent = function() {
        	this.gfnGridInit(this.dxGrid, this.dsList, "DA", "DAU_EXECUTIVE_SALARY");  // pForm.gfnGridInit = function(objGrid, objDs, cd_system, id_grid, tree_column, level_column, is_manual)
        	this.dxGrid.set_selecttype("cell");	// IE경우만 multiarea모드에서 master선택후 마우스 이동 빠르게 할 경우 버그가 있어서 cell 모드로 변경

        	var colDS_CODE = this.dxGrid.getBindCellIndex("body", "DS_CODE");
        	this.dxGrid.setCellProperty("summary", 2, "textAlign", "center");
        	this.dxGrid.setCellProperty("summary", 2, "text", "합계");

        	var nRow = this.dxGrid.appendContentsRow("summary");
        	this.dxGrid.setCellProperty("summary", 5, "textAlign", "center");
        	this.dxGrid.setCellProperty("summary", 5, "text", "보수한도");

        }

        /************************************************************************
         * 파라미터 설정
         ************************************************************************/
        this.fnSetParameter = function() {

        	this.dsSelect = new Dataset();
        	this.dsSelect.addColumn("YY_WORK", "string");
        	this.dsSelect.addColumn("DT_WORK", "string");

        	// 한도 Summary
        	this.dsListSub = new Dataset();
        	this.dsListSub.set_name("dsListSub");
        	this.dsListSub.set_enableevent(false);

        }

        /************************************************************************
         * 컨트롤 이벤트
         ************************************************************************/
         /*
          *	조회 버튼
          */
        this.fnSelect = function() {

        	if (!this.fnSelectValidate()) return false;

        	this.fnSetGridColunm(this.dsCD_CORP);

        	this.gfnGridBeforeSelect(this.dxGrid);

        	//this.dsList.clearData();
        	this.dsSelect.clearData();
        	this.dsSelect.addRow();
        	this.dsSelect.setColumn(0, "YY_WORK", this.dsSearch.getColumn(0, "YY_WORK"));
        	this.dsSelect.setColumn(0, "DT_WORK", this.dsSearch.getColumn(0, "DT_WORK"));
        	//trace("dsList:"+this.dsList.saveXML());
        	var strSvcId    = "select";
        	var strSvcType  = "grid";
        	var inProc		= "_dsProc";
        	var inData      = "select=dsSelect";
        	var outData     = "dsList=select0 dsListSub=select1";
        	var strArg      = "";
        	var callBackFnc = "fnCallback";
        	//trace("dsList::::"+this.dsList.saveXML());
        	this.gfnTransaction( strSvcId , 	// transaction을 구분하기 위한 svc id값
        						strSvcType , 	// trabsaction을 요청할 구분
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

        /*
         *	초기화 버튼
         */
        this.fnReset  = function() {
        	this.dsSearch.clearData();
        	this.dsSearch.addRow();

        	//기준년월 셋팅
        	var today = this.gfnGetDate();
        	var todayYear = today.substring(0,4);
        	this.divSearch.form.ctclYY_WORK.form.TextBox.set_value(todayYear);
        	this.divSearch.form.calDT_WORK.set_value(today);
        }

        /************************************************************************
         * Validate
         ************************************************************************/
        /*
         *	조회 Validate
         */
        this.fnSelectValidate = function() {
        	var validate = true;
        	if (this.gfnIsNull(this.dsSearch.getColumn(0, "YY_WORK"))){
        		validate = false;
        		this.fnVaidateCallback = function() {
        			this.divSearch.form.calDT_WORK.setFocus();
        		}
        		this.gfnAlert("기준년도를 입력하십시오.", "fnVaidateCallback"); // gfnAlert = function (sMsgId, arrArg, sPopId, sCallback)
        		return false;
        	}

        	if (this.gfnIsNull(this.dsSearch.getColumn(0, "DT_WORK"))){
        		validate = false;
        		this.fnVaidateCallback = function() {
        			this.divSearch.form.calDT_WORK.setFocus();
        		}
        		this.gfnAlert("기준일자를 입력하십시오.", "fnVaidateCallback"); // gfnAlert = function (sMsgId, arrArg, sPopId, sCallback)
        		return false;
        	}

        	return validate;
        }

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
        			trace("갯수"+this.dsList.rowscount);
        			trace("합계"+this.dsList.saveXML());

        //		if (this.dsList.rowscount > 0)
        		{
        			trace("합계"+this.dsList.saveXML());
        			for ( var i =0; i < this.dsList.colcount; i++){
        				if( this.dsList.getColID(i).search("_IC") > -1 || this.dsList.getColID(i).search("_AM_INCOMESUM") > -1){
        					this.dsList.colinfos[i].set_type("INT");

        					//합계
        					this.dxGrid.setCellProperty("summ",this.dxGrid.getBindCellIndex( "body", this.dsList.getColID(i)) , "text", "expr:dataset.getSum('" + this.dsList.getColID(i) + "')");

        					// 보수한도
        					//Sub Row 를 갖는 밴드의 Cell 인덱스는 "Sub Row 인덱스 * Column 갯수 + Cell 의 col 속성값" 이 됩니다.
        					var subRowIndex = this.dxGrid.getBindCellIndex( "body", this.dsList.getColID(i));
        					var subRowValue = pForm.gfnNvl(this.dsListSub.getColumn(0, this.dsList.getColID(i)),0);
        					this.dxGrid.setCellProperty("summary", subRowIndex-1 + this.dsList.colcount, "displaytype", "number");
        					this.dxGrid.setCellProperty("summary", subRowIndex-1 + this.dsList.colcount, "text", subRowValue);

        				}
        			}
        		}
        	} else if (svcID == "combo") {
        	}

        	this.fnSetButton();
        }

        /************************************************************************
         * 코드파인드 이벤트
         ************************************************************************/
          this.fnBeforeUserDataSetParam = function(id, dsUserParam, nrow) {
        	return true;
        }

        this.fnAfterCDTextChanged = function(id) {
        	this.fnSearchInit();
        }

        /************************************************************************
         * 그리드 이벤트
         ************************************************************************/

        /************************************************************************
         * 확장버튼 이벤트
         ************************************************************************/
         this.fnExecutiveBtn = function(obj,e) {
        	var param = {};
        	//param.CF_CD_SITE = this.dsList.getColumn(this.dsList.rowposition,"CD_SITE");
        	//param.CF_DS_SITE = this.dsList.getColumn(this.dsList.rowposition,"DS_SITE");
        	//param.CF_CD_CTM = this.dsList.getColumn(this.dsList.rowposition,"CD_CTM");
        	//param.CF_DS_CTM = this.dsList.getColumn(this.dsList.rowposition,"DS_CTM");
        	//param.CF_CD_ACT = this.dsList.getColumn(this.dsList.rowposition,"CD_ACT");
        	//param.CF_DS_ACT = this.dsList.getColumn(this.dsList.rowposition,"DS_ACT");
        	//this.gfnFormOpen(this.FormInfo.CD_MODULE, "DHA_ISSUESLIP", "fnPopupCallBack", param, this.getOffsetWidth(), this.getOffsetHeight());
        	//this.gfnFormOpenNonAuth(this.FormInfo.CD_MODULE, "DAU_EXECUTIVE", "fnPopupCallBack", param, this.getOffsetWidth(), this.getOffsetHeight());
        	this.gfnFormOpen(this.FormInfo.CD_MODULE, "DAU_EXECUTIVE", "fnPopupCallBack", param, this.getOffsetWidth(), this.getOffsetHeight());
        };

        this.fnPopupCallBack = function(svcID, value) {
        	if(value == true) {
        		this.FormBtns.Select.click();
        	}
        };

        /************************************************************************
         * 기타 이벤트
         ************************************************************************/
        /*
         *	조회 조건 변경시 초기화
         */
        this.dsSearch_onvaluechanged = function(obj,e)
        {
        	if(e.oldvalue != e.newvalue) {
        		this.gfnSetFormStatus(this);	// 폼상태 초기화
        		this.gfnGridClear(this.dxGrid);

        		for ( var i =0; i < this.dsList.colcount; i++){
        			if( this.dsList.getColID(i).search("_IC") > -1 || this.dsList.getColID(i).search("_AM_INCOMESUM") > -1){
        				this.dsList.colinfos[i].set_type("INT");
        				var subRowIndex = this.dxGrid.getBindCellIndex( "body", this.dsList.getColID(i));
        				this.dxGrid.setCellProperty("summary", subRowIndex-1 + this.dsList.colcount, "displaytype", "number");
        				this.dxGrid.setCellProperty("summary", subRowIndex-1 + this.dsList.colcount, "text", 0);
        			}
        		}
        	}
        };

        /*
         *	콤보박스 값 설정
         */
        this.fnSetCombo = function() {
        	this.dsCombo = new Dataset();
        	this.dsCombo.addColumn("CD_CORP", "string");

        	this.dsCombo.addRow();
        	this.dsCombo.setColumn(0, "CD_CORP", "");

        	var strSvcId    = "combo";
        	var strSvcType  = "select";
        	var inProc		= "_dsProc";
        	var inData      = "combo=dsCombo";
        	var outData     = "dsCD_CORP=combo0";
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

        this.fnSetGridColunm = function ( objDataSet ){
        	var ncol1 = 0;
        	var ncol2 = 0;
        	var ncol3 = 1;
        	var cols = 0; // merge 되면서 cell index가 조정된다.
        	this.dxGrid.set_enableredraw(false);
        	this.dsList.set_enableevent(false);
        	for ( var i =this.dxGrid.getCellCount("body")-1; -1 < i ; i--){
        		if( this.gfnGridGetBindColumnNameByIndex( this.dxGrid, i).search("_IC") > -1 ||this.gfnGridGetBindColumnNameByIndex( this.dxGrid, i).search("_AM_INCOMESUM") > -1){
        			this.dxGrid.deleteContentsCol("body",i);
        		}
        	}

        	for ( var i =this.dsList.colcount-1; -1 < i ; i--){
        		//trace(i+"=" + this.dsList.getColID(i));
        		if( this.dsList.getColID(i).search("_IC") > -1 || this.dsList.getColID(i).search("_AM_INCOMESUM") > -1){
        			this.dsList.deleteColumn(i);
        		}
        	}

        	for( var i = 0; i < objDataSet.rowcount; i++ ){
        		var objColinfo = new ColumnInfo() ;
        		objColinfo.set_type( "INT" );
        		objColinfo.set_size( 256 );

        		this.dsList.addColumn("CD_"+objDataSet.getColumn(i,"CD_CORP")+"_IC",objColinfo);
        		this.dsList.addColumn("CD_"+objDataSet.getColumn(i,"CD_CORP")+"_AM_INCOMESUM",objColinfo);

        		ncol1 = this.dxGrid.appendContentsCol();
        		this.dxGrid.setFormatColProperty(ncol1, "size", 90);
        		this.dxGrid.setCellProperty("head", (ncol1+ncol3), "text", "인원");
        		this.dxGrid.setCellProperty("body", ncol1, "displaytype", "number");
        		this.dxGrid.setCellProperty("body", ncol1, "text", "bind:" + "CD_"+objDataSet.getColumn(i,"CD_CORP")+"_IC");
        		this.dxGrid.setCellProperty("summ", ncol1, "displaytype", "number");
        		//var subIdx1 = 3 + (objDataSet.rowcount * 2) + ncol1;
        		//this.dxGrid.setCellProperty("summ", subIdx1, "displaytype", "number");

        		ncol2 = this.dxGrid.appendContentsCol();
        		this.dxGrid.setFormatColProperty(ncol2, "size", 90);
        		ncol3++;
        		this.dxGrid.setCellProperty("head", ncol2+ncol3, "text", "금액");
        		this.dxGrid.setCellProperty("body", ncol2, "text", "bind:" + "CD_"+objDataSet.getColumn(i,"CD_CORP")+"_AM_INCOMESUM");
        		this.dxGrid.setCellProperty("body", ncol2, "textAlign", "right");
        		this.dxGrid.setCellProperty("body", ncol2, "displaytype", "number");
        		this.dxGrid.setCellProperty("summ", ncol2, "displaytype", "number");
        		//var subIdx2 = 3 + (objDataSet.rowcount * 2) + ncol2;
        		//this.dxGrid.setCellProperty("summ", subIdx2, "displaytype", "number");

        		var rtn = this.dxGrid.mergeContentsCell("head", 0, ncol1, 0, ncol1+1, ncol1 - cols, false);
        		if(rtn > -1) {
        			this.dxGrid.setCellProperty("head", rtn, "text", objDataSet.getColumn(i,"DS_CORP"));
        			cols = cols + 1;
        		}
        	}
        	this.dxGrid.set_enableredraw(true);
        	this.dsList.set_enableevent(true);
        	//trace(this.dsList.saveXML());
        }
        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.form_onload,this);
            this.dsSearch.addEventHandler("onvaluechanged",this.dsSearch_onvaluechanged,this);
        };
        this.loadIncludeScript("DAU_EXECUTIVE_SALARY.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
