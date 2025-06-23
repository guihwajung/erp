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
            this.set_titletext("공종코드 등록");
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


            obj = new Dataset("dsListExcel", this);
            obj._setContents("");
            this.addChild(obj.name, obj);


            obj = new Dataset("_dsProc", this);
            obj._setContents("<ColumnInfo><Column id=\"TARGET\" type=\"STRING\" size=\"256\"/><Column id=\"SP\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"TARGET\">select</Col><Col id=\"SP\">DBZPR_ACTTREE_SELECT</Col></Row><Row><Col id=\"TARGET\">selectSub</Col><Col id=\"SP\">DBZPR_ACTSELECT_SELECT</Col></Row><Row><Col id=\"SP\">DBZPR_ACTSELECT_INSERT</Col><Col id=\"TARGET\">insert</Col></Row><Row><Col id=\"SP\">DBZPR_ACTSELECT_UPDATE</Col><Col id=\"TARGET\">update</Col></Row><Row><Col id=\"SP\">DBZPR_ACTSELECT_DELETE</Col><Col id=\"TARGET\">delete</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsYN_USE", this);
            obj._setContents("<ColumnInfo><Column id=\"CODE\" type=\"STRING\" size=\"256\"/><Column id=\"VALUE\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"CODE\">ALL</Col><Col id=\"VALUE\">전체</Col></Row><Row><Col id=\"CODE\">Y</Col><Col id=\"VALUE\">사용</Col></Row><Row><Col id=\"CODE\">N</Col><Col id=\"VALUE\">미사용</Col></Row></Rows>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Div("divSearch","0.0","10.0",null,"46.0","0",null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_cssclass("div_SEARCH_Bg");
            this.addChild(obj.name, obj);

            obj = new Static("staUSE_YN","0.0","10.0","131.0","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("1");
            obj.set_text("사용여부");
            obj.set_cssclass("sta_WF_SchLabel");
            this.divSearch.addChild(obj.name, obj);

            obj = new Radio("rdoYN_USE","staUSE_YN:0.0","10.0","169","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("1");
            obj.set_innerdataset("dsYN_USE");
            obj.set_datacolumn("VALUE");
            obj.set_codecolumn("CODE");
            obj.set_direction("vertical");
            obj.set_fittocontents("width");
            obj.set_text("사업자등록번호");
            obj.set_value("1");
            obj.set_index("0");
            this.divSearch.addChild(obj.name, obj);

            obj = new Div("divData","0","40",null,null,"0","0",null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_cssclass("div_DATA_Bg");
            this.addChild(obj.name, obj);

            obj = new Div("divDataLeft","0","0","300",null,null,"0",null,null,null,null,this.divData.form);
            obj.set_taborder("1");
            this.divData.addChild(obj.name, obj);

            obj = new Grid("objGrid","0","30",null,null,"0","0",null,null,null,null,this.divData.form.divDataLeft.form);
            obj.set_taborder("0");
            obj.set_treeusecheckbox("false");
            obj._setContents("");
            this.divData.form.divDataLeft.addChild(obj.name, obj);

            obj = new Static("staLeftTitle","0","0","100%","22",null,null,null,null,null,null,this.divData.form.divDataLeft.form);
            obj.set_taborder("1");
            obj.set_text("공종코드");
            obj.set_cssclass("sta_TITLE_Bg");
            this.divData.form.divDataLeft.addChild(obj.name, obj);

            obj = new Div("divDataRight","divDataLeft:10","0",null,null,"0","0",null,null,null,null,this.divData.form);
            obj.set_taborder("0");
            this.divData.addChild(obj.name, obj);

            obj = new Grid("objGridSub","0","30",null,null,"0","0",null,null,null,null,this.divData.form.divDataRight.form);
            obj.set_taborder("0");
            obj._setContents("");
            this.divData.form.divDataRight.addChild(obj.name, obj);

            obj = new Static("staLeftTitle","0","0","100%","22",null,null,null,null,null,null,this.divData.form.divDataRight.form);
            obj.set_taborder("1");
            obj.set_text("공종상세");
            obj.set_cssclass("sta_TITLE_Bg");
            this.divData.form.divDataRight.addChild(obj.name, obj);

            obj = new Grid("objGridExcel","0","divData:0","280","170",null,null,null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_visible("false");
            obj._setContents("");
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
        this.registerScript("DBZ_GONGJONG.xfdl", function() {
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
        	this.FormBtns.Select.click();
        };

        /************************************************************************
         * 버튼 설정 : 화면(Tab) 전환시 마다 호출
         ************************************************************************/
        this.fnSetButton = function() {
        };

        /************************************************************************
         * 확장 버튼 : 화면별 버튼 설정 ID, function 연결
         ************************************************************************/
        this.fnSetExtendButton = function() {
        };

        /************************************************************************
         * 변수 선언
         ************************************************************************/
        this.fnSetVariable = function() {
        	this.dxGrid = this.divData.form.divDataLeft.form.objGrid;
        	this.dxGridSub = this.divData.form.divDataRight.form.objGridSub;
        	this.dxGridExcel = this.objGridExcel;
        };

        /************************************************************************
         * 이벤트 설정
         ************************************************************************/
        this.fnSetEvent = function() {
        	this.gfnGridInit(this.dxGrid, this.dsList, "DB", "DBZ_ACTSELECT_TREE","DS_TITLE","NO_LEVEL");  // pForm.gfnGridInit = function(objGrid, objDs, cd_system, id_grid, tree_column, level_column, is_manual)
        	this.gfnGridInit(this.dxGridSub, this.dsListSub, "DB", "DBZ_ACTSELECT");
        	this.gfnGridInit(this.dxGridExcel, this.dsListExcel, "DB", "DBZ_ACTSELECT_EXCEL");

        	this.dxGridSub.set_selecttype("cell");	// IE경우만 multiarea모드에서 master선택후 마우스 이동 빠르게 할 경우 버그가 있어서 cell 모드로 변경
        	this.dxGridSub.setCellProperty("body",this.dxGridSub.getBindCellIndex("body","CD_ACT") , "editinputmode", "upper");
        	this.dxGridSub.setCellProperty( "body", this.dxGridSub.getBindCellIndex("body","CD_ACT"), "editinputtype", "alpha,digit" );

        	this.dsList.addEventHandler("onrowposchanged", this.dsList_onrowposchanged, this);
        	this.dsListSub.addEventHandler("onrowposchanged", this.dsListSub_onrowposchanged, this);
        }

        /************************************************************************
         * 파라미터 설정
         ************************************************************************/
        this.fnSetParameter = function() {
        	this.dsSelect = new Dataset();
        	//this.dsSelect.addColumn("NO_LEVEL", "string");
        	this.dsSelect.addColumn("TY_ALL", "string");

        	this.dsSelectSub = new Dataset();
        	this.dsSelectSub.addColumn("NO_LEVEL", "string");
        	this.dsSelectSub.addColumn("CD_ACTTREE", "string");
        	this.dsSelectSub.addColumn("YN_USE", "string");

        	this.dsInsertSub = new Dataset();
        	this.dsInsertSub.addColumn("NO_LEVEL", "string");    // 트리레벨코드
        	this.dsInsertSub.addColumn("CD_UPLEVEL", "string");  // 트리분류코드
        	this.dsInsertSub.addColumn("CD_ACT", "string");      // 아이템코드
        	this.dsInsertSub.addColumn("DS_ACT", "string");	     // 아이템코드명
        	this.dsInsertSub.addColumn("YN_USE", "string");	     // 사용여부
        	this.dsInsertSub.addColumn("RM_REM", "string");      // 비고
        	this.dsInsertSub.addColumn("ID_INSERT", "string");   // 입력자
        	this.dsInsertSub.addColumn("NO_ORDER", "string");    // 정렬순서

        	this.dsUpdateSub = new Dataset();
        	this.dsUpdateSub.addColumn("NO_LEVEL", "string");    // 트리레벨코드
        	this.dsUpdateSub.addColumn("CD_UPLEVEL", "string");  // 트리분류코드
        	this.dsUpdateSub.addColumn("CD_ACT", "string");      // 아이템코드
        	this.dsUpdateSub.addColumn("DS_ACT", "string");	     // 아이템코드명
        	this.dsUpdateSub.addColumn("YN_USE", "string");	     // 사용여부
        	this.dsUpdateSub.addColumn("RM_REM", "string");      // 비고
        	this.dsUpdateSub.addColumn("ID_INSERT", "string");   // 입력자
        	this.dsUpdateSub.addColumn("NO_ORDER", "string");    // 정렬순서

        	this.dsDeleteSub = new Dataset();
        	this.dsDeleteSub.addColumn("NO_LEVEL", "string");    // 트리레벨코드
        	this.dsDeleteSub.addColumn("CD_UPLEVEL", "string");  // 트리분류코드
        	this.dsDeleteSub.addColumn("CD_ACT", "string");      // 아이템코드
        }

        /************************************************************************
         * 컨트롤 이벤트
         ************************************************************************/
         /*
          *	조회 버튼
          */
        this.fnSelect = function() {

        	this.gfnGridBeforeSelect(this.dxGrid);

        	this.dsList.clearData();
        	this.dsListExcel.clearData();

        	this.dsSelect.clearData();
         	this.dsSelect.addRow();
        // 	this.dsSelect.setColumn(0, "NO_LEVEL", "");
        	this.dsSelect.setColumn(0, "TY_ALL", 1);

        	var strSvcId    = "select";
        	var strSvcType  = "grid";
        	var inProc		= "_dsProc";
        	var inData      = "select=dsSelect";
        	var outData     = "dsList=select0 dsListExcel=select1";
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
          *	조회 버튼
          */
        this.fnSelectSub = function() {

        	this.gfnGridBeforeSelect(this.dxGridSub);

        	this.dsListSub.clearData();

        	this.dsSelectSub.clearData();
        	this.dsSelectSub.addRow();
        	this.dsSelectSub.setColumn(0, "NO_LEVEL", this.dsList.getColumn(this.dsList.rowposition,"NO_LEVEL"));
        	this.dsSelectSub.setColumn(0, "CD_ACTTREE", this.dsList.getColumn(this.dsList.rowposition,"CD_ACT"));
        	this.dsSelectSub.setColumn(0, "YN_USE", this.divSearch.form.rdoYN_USE.value);

        	var strSvcId    = "selectSub";
        	var strSvcType  = "grid";
        	var inProc		= "_dsProc";
        	var inData      = "selectSub=dsSelectSub";
        	var outData     = "dsListSub=selectSub0";
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
         *	저장 버튼
         */
        this.fnSave = function() {
        	if (!this.fnSaveValidate()) return;
        	if (!this.gfnGridValidate(this.dxGridSub)) return;

        	this.dxGridSub.updateToDataset();

        	this.dsInsertSub.clearData();
        	this.dsUpdateSub.clearData();
        	this.dsDeleteSub.clearData();

        	this.dsInsertSub.addColumn("NO_LEVEL", "string");    // 트리레벨코드
        	this.dsInsertSub.addColumn("CD_UPLEVEL", "string");  // 트리분류코드
        	this.dsInsertSub.addColumn("CD_ACT", "string");      // 아이템코드
        	this.dsInsertSub.addColumn("DS_ACT", "string");	     // 아이템코드명
        	this.dsInsertSub.addColumn("YN_USE", "string");	     // 사용여부
        	this.dsInsertSub.addColumn("RM_REM", "string");      // 비고
        	this.dsInsertSub.addColumn("ID_INSERT", "string");   // 입력자
        	this.dsInsertSub.addColumn("NO_ORDER", "string");    // 정렬순서

        	for (var i = 0; i < this.dsListSub.rowcount; i++) {
        		var flag = this.gfnGetFlag(this.dsListSub, i);
        		switch(flag) {
        			case "I":
        				var nrow = this.dsInsertSub.addRow();
        				this.dsInsertSub.setColumn(nrow, "NO_LEVEL", this.dsList.getColumn(this.dsList.rowposition, "NO_LEVEL"));   // 트리레벨코드
        				this.dsInsertSub.setColumn(nrow, "CD_UPLEVEL", this.dsList.getColumn(this.dsList.rowposition, "CD_ACT"));   // 트리분류코드
        				this.dsInsertSub.setColumn(nrow, "CD_ACT", this.dsListSub.getColumn(i, "CD_ACT"));                          // 아이템코드
        				this.dsInsertSub.setColumn(nrow, "DS_ACT", this.dsListSub.getColumn(i, "DS_ACT"));                          // 아이템코드명
        				this.dsInsertSub.setColumn(nrow, "YN_USE", this.dsListSub.getColumn(i, "YN_USE"));                          // 사용여부
        				this.dsInsertSub.setColumn(nrow, "RM_REM", this.dsListSub.getColumn(i, "RM_REM"));                          // 비고
        				this.dsInsertSub.setColumn(nrow, "ID_INSERT", this.AuthClient.ID_USER);                                     // 입력자
        				this.dsInsertSub.setColumn(nrow, "NO_ORDER", this.dsListSub.getColumn(i, "NO_ORDER"));			            // 정렬순서
        				break;

        			case "U":
        				var nrow = this.dsUpdateSub.addRow();
        				this.dsUpdateSub.setColumn(nrow, "NO_LEVEL", this.dsList.getColumn(this.dsList.rowposition, "NO_LEVEL"));   // 트리레벨코드
        				this.dsUpdateSub.setColumn(nrow, "CD_UPLEVEL", this.dsList.getColumn(this.dsList.rowposition, "CD_ACT"));   // 트리분류코드
        				this.dsUpdateSub.setColumn(nrow, "CD_ACT", this.dsListSub.getColumn(i, "CD_ACT"));                          // 아이템코드
        				this.dsUpdateSub.setColumn(nrow, "DS_ACT", this.dsListSub.getColumn(i, "DS_ACT"));                          // 아이템코드명
        				this.dsUpdateSub.setColumn(nrow, "YN_USE", this.dsListSub.getColumn(i, "YN_USE"));                          // 사용여부
        				this.dsUpdateSub.setColumn(nrow, "RM_REM", this.dsListSub.getColumn(i, "RM_REM"));                          // 비고
        				this.dsUpdateSub.setColumn(nrow, "ID_INSERT", this.AuthClient.ID_USER);                                     // 입력자
        				this.dsUpdateSub.setColumn(nrow, "NO_ORDER", this.dsListSub.getColumn(i, "NO_ORDER"));			            // 정렬순서
        				break;

        			case "D":
        				var nrow = this.dsDeleteSub.addRow();
        				this.dsDeleteSub.setColumn(nrow, "NO_LEVEL", this.dsList.getColumn(this.dsList.rowposition, "NO_LEVEL"));   // 트리레벨코드
        				this.dsDeleteSub.setColumn(nrow, "CD_UPLEVEL", this.dsList.getColumn(this.dsList.rowposition, "CD_ACT"));   // 트리분류코드
        				this.dsDeleteSub.setColumn(nrow, "CD_ACT", this.dsListSub.getColumn(i, "CD_ACT"));                          // 아이템코드

        				break;
        		}
        	}

        	if (this.dsInsertSub.rowcount == 0 && this.dsUpdateSub.rowcount == 0 && this.dsDeleteSub.rowcount == 0) return;

        	var strSvcId    = "save";
        	var strSvcType  = "save";
        	var inProc		= "_dsProc";
        	var inData      = "insert=dsInsertSub update=dsUpdateSub delete=dsDeleteSub";
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
         *	입력 버튼
         */
        this.fnAdd = function() {
        	var nrow = this.gfnGridAdd(this.dxGridSub);
        	var strCdAct = this.dsListSub.getMax("CD_ACT");

        	//if("2" == this.dsList.getColumn(this.dsList.rowposition, "NO_LEVEL")  || "3" == this.dsList.getColumn(this.dsList.rowposition, "NO_LEVEL")){
        	if("1" == this.dsList.getColumn(this.dsList.rowposition, "NO_LEVEL")  || "2" == this.dsList.getColumn(this.dsList.rowposition, "NO_LEVEL") || "3" == this.dsList.getColumn(this.dsList.rowposition, "NO_LEVEL")){
        		strCdAct = (nexacro.toNumber(this.gfnRight(strCdAct,2))+1).toString().padLeft(2, '0');
        		strCdAct = this.dsList.getColumn(this.dsList.rowposition, "CD_ACT") + strCdAct;

        		this.dsListSub.setColumn(nrow, "CD_ACT", strCdAct);
        		if( this.divSearch.form.rdoYN_USE.value == "N") {
        			this.dsListSub.setColumn(nrow, "YN_USE", this.divSearch.form.rdoYN_USE.value);
        		} else {
        			this.dsListSub.setColumn(nrow, "YN_USE", "Y");
        		}
        	}

        	this.dsListSub.setColumn(nrow, "NO_ORDER", nexacro.toNumber(this.dsListSub.getMax("NO_ORDER"))+1);
        }

        /*
         *	삭제 버튼
         */
        this.fnDel = function() {
        	this.gfnGridDel(this.dxGridSub);
        }

        /*
         *	엑셀 버튼
         */
        this.fnExcel = function() {
        	this.gfnExcelExport(this.dxGridExcel);
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
        this.fnSaveValidate = function() {

        	var validate = true;
        	for (var i = 0; i < this.dsListSub.rowcount; i++) {
        		var flag = this.gfnGetFlag(this.dsListSub, i);
        		if(!validate) break;

        		switch(flag) {
        			case "I":
        			case "U":
        				var strCdAct = this.dsListSub.getColumn(i, "CD_ACT");
        				if(this.gfnIsNull(strCdAct) ) strCdAct = "";

        				if("0" == this.dsList.getColumn(this.dsList.rowposition, "NO_LEVEL") ){
        					if(strCdAct.length != 1) {
        						this.gfnAlert((i+1)+"행: [코드] 1자리로 입력하셔야합니다.");
        						this.dsListSub.set_rowposition(i);
        						validate = false;
        						break;
        					}

        				} else if("1" == this.dsList.getColumn(this.dsList.rowposition, "NO_LEVEL") ){
        					if(strCdAct.length != 3) {
        						this.gfnAlert((i+1)+"행: [코드] 3자리로 입력하셔야합니다.");
        						this.dsListSub.set_rowposition(i);
        						validate = false;
        						break;
        					}
        				} else if("2" == this.dsList.getColumn(this.dsList.rowposition, "NO_LEVEL") ){
        					if(strCdAct.length != 5) {
        						this.gfnAlert((i+1)+"행: [코드] 5자리로 입력하셔야합니다.");
        						this.dsListSub.set_rowposition(i);
        						validate = false;
        						break;
        					}
        				} else if("3" == this.dsList.getColumn(this.dsList.rowposition, "NO_LEVEL") ){
        					if(strCdAct.length < 6 || strCdAct.length > 10) {
        						this.gfnAlert((i+1)+"행: [코드] 6자리 이상 10자리 이하로 입력하셔야합니다.");
        						this.dsListSub.set_rowposition(i);
        						validate = false;
        						break;
        					}

        					var strYnUse = this.dsListSub.getColumn(i, "YN_USE");
        					if(this.gfnIsNull(strYnUse) ) {
        						this.gfnAlert((i+1)+"행: [사용여부] 필수입력값입니다.");
        						validate = false;
        						break;
        					}
        				}
        				break;
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
        	else if (svcID == "selectSub") {
        		if( this.dsListSub.rowcount == 0){
        			this.gfnAlert("자료가 존재하지 않습니다.", "fnVaidateCallback");
        			return;
        		}
        		this.gfnGridAfterSelect(this.dxGridSub);
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

        /************************************************************************
         * 그리드 이벤트
         ************************************************************************/
         /*
          *	메인그리드 행 이동시 서브그리드 목록 조회
          */
         this.dsList_onrowposchanged = function(obj,e)
        {
        	if(e.newrow < 0) return false;
        	if (e.oldrow != e.newrow) {
        		this.fnSelectSub();
        	}
        };

        /*
         *	서브그리드 행 이동시 그리드 컬럼의 속성 변경
         */
        this.dsListSub_onrowposchanged = function(obj,e)
        {
        	this.dxGridSub.setCellProperty( "body", this.dxGridSub.getBindCellIndex( "body", "YN_USE"), "edittype", "none");

        	if("0" == this.dsList.getColumn(this.dsList.rowposition, "NO_LEVEL") ){
        		this.dxGridSub.setCellProperty( "body", this.dxGridSub.getBindCellIndex( "body", "CD_ACT"), "editmaxlength", "1" );
        	} else if("1" == this.dsList.getColumn(this.dsList.rowposition, "NO_LEVEL") ){
        		this.dxGridSub.setCellProperty( "body", this.dxGridSub.getBindCellIndex( "body", "CD_ACT"), "editmaxlength", "3");
        	} else if("2" == this.dsList.getColumn(this.dsList.rowposition, "NO_LEVEL") ){
        		this.dxGridSub.setCellProperty( "body", this.dxGridSub.getBindCellIndex( "body", "CD_ACT"), "editmaxlength", "5");
        	} else if("3" == this.dsList.getColumn(this.dsList.rowposition, "NO_LEVEL") ){
        		this.dxGridSub.setCellProperty( "body", this.dxGridSub.getBindCellIndex( "body", "CD_ACT"), "editmaxlength", "10");
        		this.dxGridSub.setCellProperty( "body", this.dxGridSub.getBindCellIndex( "body", "YN_USE"), "edittype", "combo");
        	}
        };
        /************************************************************************
         * 확장버튼 이벤트
         ************************************************************************/

        /************************************************************************
         * 기타 이벤트
         ************************************************************************/


        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.form_onload,this);
        };
        this.loadIncludeScript("DBZ_GONGJONG.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
