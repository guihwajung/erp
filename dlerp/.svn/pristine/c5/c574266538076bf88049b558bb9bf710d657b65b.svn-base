(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("DBS_COST_MONTH");
            this.set_titletext("월별기성현황(단지)");
            if (Form == this.constructor)
            {
                this._setFormPosition(1280,720);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("dsList", this);
            obj._setContents("");
            this.addChild(obj.name, obj);


            obj = new Dataset("_dsProc", this);
            obj._setContents("<ColumnInfo><Column id=\"TARGET\" type=\"STRING\" size=\"256\"/><Column id=\"SP\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"TARGET\">select</Col><Col id=\"SP\">DBSPR_COST_MONTH_SELECT</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsSearch", this);
            obj._setContents("<ColumnInfo><Column id=\"CD_BUNSO\" type=\"STRING\" size=\"256\"/><Column id=\"YM_FROM\" type=\"STRING\" size=\"256\"/><Column id=\"YM_TO\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row/></Rows>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Div("divSearch","0.0","10.0",null,"46.0","0",null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_cssclass("div_SEARCH_Bg");
            this.addChild(obj.name, obj);

            obj = new Static("staItem01","0.0","10.0","105.0","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("3");
            obj.set_text("AS사무소");
            obj.set_cssclass("sta_WF_SchLabel");
            this.divSearch.addChild(obj.name, obj);

            obj = new Div("ccfCD_BUNSO","staItem01:0.0","10.0","250","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.getSetter("CDTextWidth").set("70");
            obj.set_taborder("0");
            obj.set_url("cmm::cmmCodeFind.xfdl");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("staItem02","ccfCD_BUNSO:0.0","10.0","105.0","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("4");
            obj.set_text("조회기간");
            obj.set_cssclass("sta_WF_SchLabelE");
            this.divSearch.addChild(obj.name, obj);

            obj = new Div("calYM_FROM","staItem02:0.0","10.0","80","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("1");
            obj.set_url("cmm::cmmCalMM.xfdl");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("sta00","calYM_FROM:0.0","10.0","30.0","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("5");
            obj.set_text("~");
            obj.set_cssclass("sta_WF_AC");
            this.divSearch.addChild(obj.name, obj);

            obj = new Div("calYM_TO","sta00:0.0","10.0","80","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("2");
            obj.set_url("cmm::cmmCalMM.xfdl");
            this.divSearch.addChild(obj.name, obj);

            obj = new Div("divData","0","40",null,null,"0","0",null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_cssclass("div_DATA_Bg");
            this.addChild(obj.name, obj);

            obj = new Grid("objGrid","0","0",null,null,"0","0",null,null,null,null,this.divData.form);
            obj.set_taborder("0");
            obj._setContents("<Formats><Format id=\"default\"/></Formats>");
            this.divData.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this
            obj = new Layout("default","",this._adjust_width,this._adjust_height,this,function(p){});
            this.addLayout(obj.name, obj);
            
            // BindItem Information
            obj = new BindItem("item0","divSearch.form.ccfCD_BUNSO.form.CDTextBox","value","dsSearch","CD_BUNSO");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item1","divSearch.form.calYM_FROM.form.TextBox","value","dsSearch","YM_FROM");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item2","divSearch.form.calYM_TO.form.TextBox","value","dsSearch","YM_TO");
            this.addChild(obj.name, obj);
            obj.bind();
            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {
            this._addPreloadList("fdl","cmm::cmmCodeFind.xfdl");
            this._addPreloadList("fdl","cmm::cmmCalMM.xfdl");
        };
        
        // User Script
        this.registerScript("DBS_COST_MONTH.xfdl", function() {
        this.objApp = this.gfnGetApplication();

        this.form_onload = function(obj,e)
        {
        	// -- 필수 -------------------//
        	this.gfnFormOnLoad(this);
        	this.gfnFormInfo(this);
        	// ---------------------------//
        	//this.fnSetButton();
        	//this.fnSetExtendButton();
        	this.fnSetVariable();
        	this.fnSetEvent();
        	this.fnSetParameter();

        	// AS사무소 셋팅
        	if(this.FormInfo.ID_GROUP != "0" && this.FormInfo.ID_GROUP != "A" && this.FormInfo.ID_GROUP != "3" && this.FormInfo.ID_GROUP != "W"  ){
        		if( this.FormInfo.ID_GROUP == "2" ){
        			this.ccfCD_BUNSO.form.CDTextBox.set_value(this.AuthClient.CD_DEPT.substr(1));
        			this.ccfCD_BUNSO.form.fnCodeFindLoad();
        		}
        		this.ccfCD_BUNSO.form.set_readonly(true);
        	}

        	//작업일자 셋팅
        	var strYM = this.gfnGetDate().substring(0,6);
        	this.calYM_FROM.form.TextBox.set_value(strYM.substring(0,4)+"01");
        	this.calYM_TO.form.TextBox.set_value(strYM);

        };

        /************************************************************************
         * 버튼 설정 : 화면(Tab) 전환시 마다 호출
         * 서브버튼 사용 및 공통버튼 강제 제어시 여기서 처리
         ************************************************************************/
        this.fnSetButton = function() {
        	// 서브 버튼 사용
        	//this.gfnUseSubBtn(true, this.divData, this.divData.form.divSplitter); // divSplitter sync
        }

        /************************************************************************
         * 확장 버튼 : 화면별 버튼 설정 ID, function 연결
         ************************************************************************/
        this.fnSetExtendButton = function() {
        };

        /************************************************************************
         * 변수 선언
         ************************************************************************/
        this.fnSetVariable = function() {
        	this.ccfCD_BUNSO = this.divSearch.form.ccfCD_BUNSO;
        	this.calYM_FROM = this.divSearch.form.calYM_FROM;
        	this.calYM_TO = this.divSearch.form.calYM_TO;
        	this.dxGrid = this.divData.form.objGrid;

        };

        /************************************************************************
         * 이벤트 설정
         ************************************************************************/
        this.fnSetEvent = function() {

        	this.ccfCD_BUNSO.CodeFindName = "DBX_CFBUNSO";
        	this.gfnGridInit(this.dxGrid, this.dsList, "DB", "DBS_COST_MONTH");  // pForm.gfnGridInit = function(objGrid, objDs, cd_system, id_grid, tree_column, level_column, is_manual)
        	this.dxGrid.setCellProperty( "summary", this.dxGrid.getBindCellIndex("body","DS_SITE"), "text", "합  계");
        	this.dxGrid.setCellProperty( "summary", this.dxGrid.getBindCellIndex("body","DS_SITE"), "textAlign", "center");
        	this.grdFormat = this.dxGrid.getCurFormatString();
        	// 그리드 셋팅
        	this.fnSetGridColunm();

        	this.dsSearch.addEventHandler("onvaluechanged", this.dsSearch_onvaluechanged, this);
        };

        /************************************************************************
         * 파라미터 설정
         ************************************************************************/
        this.fnSetParameter = function() {

        	this.dsSelect = new Dataset();
        	this.dsSelect.addColumn("CD_BUNSO", "string");
        	this.dsSelect.addColumn("YM_FROM", "string");
        	this.dsSelect.addColumn("YM_TO", "string");
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
        	this.dsSelect.setColumn(0, "CD_BUNSO", this.dsSearch.getColumn(0,"CD_BUNSO"));
        	this.dsSelect.setColumn(0, "YM_FROM", this.dsSearch.getColumn(0,"YM_FROM"));
        	this.dsSelect.setColumn(0, "YM_TO", this.dsSearch.getColumn(0,"YM_TO"));

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
         *	엑셀 버튼
         */
        this.fnExcel = function() {
        	this.gfnExcelExport(this.dxGrid);
        }


        /*
         *	출력 버튼
         */
        this.fnPrint = function() {
        };

        /************************************************************************
         * Validate
         ************************************************************************/
        /*
         *	조회 Validate
         */
        this.fnSelectValidate = function() {
        	var validate = true;
        	if ( !this.gfnIsNull(this.dsSearch.getColumn(0,"YM_FROM")) && !this.gfnIsNull(this.dsSearch.getColumn(0,"YM_TO")) )  {
        		if (this.dsSearch.getColumn(0,"YM_FROM") > this.dsSearch.getColumn(0,"YM_TO") )  {
        			validate = false;
        			this.fnVaidateCallback = function() {
        				this.calYM_FROM.setFocus();
        			}
        			this.gfnAlert("시작월이 종료일보다 클 수 없습니다.", "fnVaidateCallback"); // gfnAlert = function (sMsgId, arrArg, sPopId, sCallback)
        		}
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
        	}
        }

        /************************************************************************
         * 코드파인드 이벤트
         ************************************************************************/

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
        this.dsSearch_onvaluechanged = function(obj,e)
        {

        	if(e.oldvalue != e.newvalue) {
        		this.gfnSetFormStatus(this);	// 폼상태 초기화
        		this.gfnGridClear(this.dxGrid);
        	}

        	if( e.columnid == "YM_FROM" || e.columnid == "YM_TO" ){
        		this.fnSetGridColunm();
        	}
        };

        this.fnSetGridColunm = function (){
        	var ncol = 0;
        	var intDiffMonth = nexacro.toNumber(this.gfnGetDiffMonth(this.dsSearch.getColumn(0,"YM_FROM")+"01",this.dsSearch.getColumn(0,"YM_TO")+"01"),0)+1;

        	this.dxGrid.set_enableredraw(false);
        	this.dsList.set_enableevent(false);

        	// 그리드 초기화
        	this.dxGrid.set_formats(this.grdFormat);

        	// 데이터셋 초기화
        	for ( var i =this.dsList.colcount-1; -1 < i ; i--){

        		if( this.dsList.getColID(i).search("YM_") > -1){
        			this.dsList.deleteColumn(i);
        		}
        	}

        	// 동적으로 데이터셋, 그리드 컬럼 추가
        	for( var i = 0; i < intDiffMonth; i++ ){
        		var strYm = "YM_"+this.gfnAddMonth(this.dsSearch.getColumn(0,"YM_FROM")+"01", i).substr(0,6);


        		var objColinfo = new ColumnInfo() ;
        		objColinfo.set_type( "BIGDECIMAL" );
        		objColinfo.set_size( 256 );

        		this.dsList.addColumnInfo(strYm,objColinfo);

        		ncol = this.dxGrid.appendContentsCol();
        		this.dxGrid.setFormatColProperty(ncol, "size", 120);
        		this.dxGrid.setCellProperty("head", ncol, "text", strYm.substr(3,4)+"-"+strYm.substr(7,2));
        		this.dxGrid.setCellProperty("body", ncol, "displaytype", "mask");
        		this.dxGrid.setCellProperty("body", ncol, "maskeditformat", "#,###,###,##0");
        		this.dxGrid.setCellProperty("body", ncol, "text", "bind:" + strYm);
        		this.dxGrid.setCellProperty("summary", ncol, "displaytype", "mask");
        		this.dxGrid.setCellProperty("summary", ncol, "maskeditformat", "#,###,###,##0");
        		this.dxGrid.setCellProperty( "summary", ncol, "text", "expr:dataset.getSum('"+strYm+"')");
        	}

        	this.dxGrid.set_enableredraw(true);
        	this.dsList.set_enableevent(true);
        };
        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.form_onload,this);
        };
        this.loadIncludeScript("DBS_COST_MONTH.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
