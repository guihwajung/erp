(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("DCC_ACTUALPROOFLIST");
            this.set_titletext("기성실적관리");
            if (Form == this.constructor)
            {
                this._setFormPosition(1280,720);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("dsList", this);
            obj._setContents("");
            this.addChild(obj.name, obj);


            obj = new Dataset("_dsProc", this);
            obj._setContents("<ColumnInfo><Column id=\"TARGET\" type=\"STRING\" size=\"256\"/><Column id=\"SP\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"TARGET\">select</Col><Col id=\"SP\">DCCPR_ACTUALPROOFLIST_SELET</Col></Row><Row><Col id=\"TARGET\">create</Col><Col id=\"SP\">DCCPR_ACTUALPROOF_CREATE</Col></Row><Row><Col id=\"TARGET\">combo</Col><Col id=\"SP\">DZXPR_COMBO_SELECT</Col></Row><Row><Col id=\"TARGET\">signSave</Col><Col id=\"SP\">DCCPR_ACTUALPROOF_SIGN_SAVE</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsSearch", this);
            obj._setContents("<ColumnInfo><Column id=\"CD_COSTCLASS\" type=\"STRING\" size=\"256\"/><Column id=\"CD_LICCOST\" type=\"STRING\" size=\"256\"/><Column id=\"CD_LICENSE\" type=\"STRING\" size=\"256\"/><Column id=\"CD_SITE\" type=\"STRING\" size=\"256\"/><Column id=\"WORKYEAR\" type=\"STRING\" size=\"256\"/><Column id=\"DS_VENDOR\" type=\"STRING\" size=\"256\"/><Column id=\"TY_STATUS\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"CD_COSTCLASS\"/><Col id=\"CD_LICCOST\"/><Col id=\"CD_LICENSE\"/><Col id=\"CD_SITE\"/><Col id=\"WORKYEAR\"/><Col id=\"DS_VENDOR\"/><Col id=\"TY_STATUS\"/></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsCD_LICENSE", this);
            obj._setContents("<ColumnInfo><Column id=\"CD_CODE\" type=\"STRING\" size=\"256\"/><Column id=\"DS_CODE\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsTY_STATUS", this);
            obj._setContents("<ColumnInfo><Column id=\"CD_CODE\" type=\"STRING\" size=\"256\"/><Column id=\"DS_CODE\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Div("divSearch","0.0","10.0",null,"142.0","0",null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_cssclass("div_SEARCH_Bg");
            obj.set_formscrollbartype("auto auto");
            this.addChild(obj.name, obj);

            obj = new Static("staYR_MAGAM","0.0","10.0","92.0","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("0");
            obj.set_text("해당년도");
            obj.set_cssclass("sta_WF_SchLabel");
            this.divSearch.addChild(obj.name, obj);

            obj = new Div("ctcYR_MAGAM","staYR_MAGAM:0.0","10.0","100","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("1");
            obj.set_url("cmm::cmmCalYY.xfdl");
            obj.set_text("");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("staCD_SITE","ctcYR_MAGAM:0.0","10.0","92.0","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("2");
            obj.set_text("현장코드");
            obj.set_cssclass("sta_WF_SchLabel");
            this.divSearch.addChild(obj.name, obj);

            obj = new Div("ccfCD_SITE","staCD_SITE:0.0","10.0","310","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.getSetter("CodeFindName").set("DZX_CFSITE");
            obj.getSetter("CDTextWidth").set("80");
            obj.set_taborder("3");
            obj.getSetter("FitToContents").set("true");
            obj.getSetter("AutoSet").set("false");
            obj.set_url("cmm::cmmCodeFind.xfdl");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("staID_DAM","ccfCD_SITE:0.0","10.0","92.0","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("4");
            obj.set_text("면허");
            obj.set_cssclass("sta_WF_SchLabel");
            this.divSearch.addChild(obj.name, obj);

            obj = new Combo("cboCD_LICENCE","staID_DAM:0.0","10.0","165","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("5");
            obj.set_innerdataset("dsCD_LICENSE");
            obj.set_codecolumn("CD_CODE");
            obj.set_datacolumn("DS_CODE");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("staCD_COSTCLASS","0.0","staCD_SITE:10.0","92.0","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("6");
            obj.set_text("공종");
            obj.set_cssclass("sta_WF_SchLabel");
            this.divSearch.addChild(obj.name, obj);

            obj = new Div("cfCD_COSTCLASS","staCD_COSTCLASS:0.0","staYR_MAGAM:10.0","224","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.getSetter("CodeFindName").set("DCX_CFCOSTCLASS_01");
            obj.getSetter("CDTextWidth").set("70");
            obj.set_taborder("7");
            obj.set_url("cmm::cmmCodeFind.xfdl");
            obj.set_text("");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("staCD_LICCOST","0.0","staCD_SITE:10.0","92.0","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("8");
            obj.set_text("하도공종");
            obj.set_cssclass("sta_WF_SchLabel");
            this.divSearch.addChild(obj.name, obj);

            obj = new Div("cfCD_LICCOST","0.0","staYR_MAGAM:10.0","310","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.getSetter("CodeFindName").set("DCX_CFLICCOST_01");
            obj.getSetter("CDTextWidth").set("70");
            obj.set_taborder("9");
            obj.set_url("cmm::cmmCodeFind.xfdl");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("staTY_STATUS","cboCD_LICENCE:0.0","10.0","92.0","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("10");
            obj.set_text("상태");
            obj.set_cssclass("sta_WF_SchLabel");
            this.divSearch.addChild(obj.name, obj);

            obj = new Combo("cboTY_STATUS","staTY_STATUS:0.0","10.0","165","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("11");
            obj.set_innerdataset("dsTY_STATUS");
            obj.set_codecolumn("CD_CODE");
            obj.set_datacolumn("DS_CODE");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("staDS_VENDOR","0.0","staID_DAM:10.0","92.0","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("12");
            obj.set_text("업체명");
            obj.set_cssclass("sta_WF_SchLabel");
            this.divSearch.addChild(obj.name, obj);

            obj = new Edit("txtDS_VENDOR","0.0","staYR_MAGAM:10.0","216","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("13");
            obj.set_value("");
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
            obj = new BindItem("item0","divSearch.form.ctcYR_MAGAM.form.TextBox","value","dsSearch","WORKYEAR");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item1","divSearch.form.cboCD_LICENCE","value","dsSearch","CD_LICENSE");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item2","divSearch.form.ccfCD_SITE.form.CDTextBox","value","dsSearch","CD_SITE");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item3","divSearch.form.cfCD_COSTCLASS.form.CDTextBox","value","dsSearch","CD_COSTCLASS");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item5","divSearch.form.cfCD_LICCOST.form.CDTextBox","value","dsSearch","CD_LICCOST");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item7","divSearch.form.cboTY_STATUS","value","dsSearch","TY_STATUS");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item8","divSearch.form.txtDS_VENDOR","value","dsSearch","DS_VENDOR");
            this.addChild(obj.name, obj);
            obj.bind();
            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {
            this._addPreloadList("fdl","cmm::cmmCalYY.xfdl");
            this._addPreloadList("fdl","cmm::cmmCodeFind.xfdl");
        };
        
        // User Script
        this.registerScript("DCC_ACTUALPROOFLIST.xfdl", function() {
        this.objApp = this.gfnGetApplication();

        this.DCC_ACTUALPROOFLIST_onload = function(obj,e)
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
        	// Select, Add, Del, Save, Excel, Print
        	// SubSelect, SubAdd, SubDel, SuubSave, SubExcel
        	// this.FormBtns.Add.set_enable(false);
        	// this.FormBtns.Del.set_enable(false);
        }

        /************************************************************************
         * 확장 버튼 : 화면별 버튼 설정 ID, function 연결 (화면버튼관리)
         ************************************************************************/
        this.fnSetExtendButton = function() {
        	this.btnCreate = this.gfnFormButtonAdd("btnCreate", "fnCreate");
        	this.btnDetail = this.gfnFormButtonAdd("btnDetail", "divData_objGrid_oncelldblclick");
        	this.btnReqAgree = this.gfnFormButtonAdd("btnReqAgree", "fnReqAgree");
        	this.btnOzReport = this.gfnFormButtonAdd("btnOzReport", "fnOzReport");
        	this.btnHadoDj = this.gfnFormButtonAdd("btnHadoDj", "fnHadoDj");
        };

        /************************************************************************
         * 변수 선언
         ************************************************************************/
        this.fnSetVariable = function() {
        	this.dxGrid = this.divData.form.objGrid;
        };

        /************************************************************************
         * 이벤트 설정
         ************************************************************************/
        this.fnSetEvent = function() {
        	// 그리드 초기화
        	this.gfnGridInit(this.dxGrid, this.dsList, "DC", "DCC_ACTUALPROOFLIST");
        	this.divSearch.form.cfCD_LICCOST.BeforeUserDataSetParam = "fnBeforeUserDataSetParam";

        	var colCHK = this.dxGrid.getBindCellIndex("body","CHK");
            this.dxGrid.setCellProperty("body", colCHK, "edittype", "expr: YN_EDIT == 'N' ?'none':'checkbox'");

        	this.dxGrid.addEventHandler("onselectchanged", this.fnGrid_RowCellChanged, this);
        	this.dxGrid.EnterCell = "fnGrid_EnterCell";
        };

        this.fnGrid_RowCellChanged = function(obj,e, event)
        {
        	if ((obj.oldrow > -1 && obj.oldrow == e.row)
        		|| (obj.oldrow == -1 && e.oldrow != e.row)) {
        		var colnm = this.gfnGridGetBindColumnNameByIndex(obj, e.cell);

        		var event = nexacro.KeyEventInfo;

        		var rows = this.dxGrid.getSelectedDatasetRows();

        		this.dsList.set_enableevent(false);
        		for(var i = 0; i < this.dsList.rowcount; i++)
        		{
        			var check = false;

        			if(this.gfnGetFlag(this.dsList, i) != "#")
        			{
        				if(colnm == "CHK")
        				{
        					check = true;
        					break;
        				}

        				if(rows.length > 0)
        				{
        					for(var j = 0; j < rows.length ; j++)
        					{
        						if(i == e.row || i == rows[j])
        						{
        							check = true;
        							this.dsList.setColumn(i, "CHK", 1);
        						}
        					}
        				}
        				else
        				{
        					if(i == e.row)
        					{
        						check = true;
        						this.dsList.setColumn(i, "CHK", 1);
        					}
        				}

        				if(check == false)
        				{
        					this.dsList.setColumn(i, "CHK", 0);
        				}
        			}
        		}
        		this.dsList.set_enableevent(true);

        		obj.oldrow = -1;
        	}
        }

        // cell 클릭했을때 이벤트(해당 cell에 대한 이벤트를 건다)
        this.fnGrid_EnterCell = function(obj, row, cell) {
        	// 수정가능 true, false 처리하려는 컬럼에 대해서만 return 처리할것.
        	var colnm = this.gfnGridGetBindColumnNameByIndex(this.dxGrid, cell);	// 클릭한 cell의 컬럼명

        	if(colnm == "CHK") {
        		return;
        	}
        };

        /************************************************************************
         * 파라미터 설정
         ************************************************************************/
        this.fnSetParameter = function() {

        	this.dsSelect = new Dataset();

        	this.dsSelect.addColumn("CD_COSTCLASS", "string");
        	this.dsSelect.addColumn("CD_LICCOST", "string");
        	this.dsSelect.addColumn("CD_LICENSE", "string");
        	this.dsSelect.addColumn("CD_SITE", "string");
        	this.dsSelect.addColumn("WORKYEAR", "string");
        	this.dsSelect.addColumn("DS_VENDOR", "string");
        	this.dsSelect.addColumn("TY_STATUS", "string");

        	var lastYear = this.gfnGetDate().substr(0,4) - 1;
        	this.dsSearch.setColumn(0, "WORKYEAR", lastYear);

        	this.dsSign = new Dataset();
        	this.dsSign.addColumn("ENO_SEQ", "string");
        	this.dsSign.addColumn("CD_VENDOR", "string");
        	this.dsSign.addColumn("SIGN_STATUS", "string");
        	this.dsSign.addColumn("DS_HASHVAL", "string");
        	this.dsSign.addColumn("DS_SIGNVAL", "string");
        	this.dsSign.addColumn("DN_CERTORGNAME", "string");
        	this.dsSign.addColumn("DN_SIGNNAME", "string");
        	this.dsSign.addColumn("ID_SIGN", "string");

        	this.dsCreate = new Dataset();
        	this.dsCreate.addColumn("WORKYEAR", "string");
        	this.dsCreate.addColumn("ID_USER", "string");
        }

        /************************************************************************
         * 컨트롤 이벤트
         ************************************************************************/

         this.fnSetCombo = function()
        {
        	this.dsCombo = new Dataset();
        	this.dsCombo.addColumn("CD_SYSTEM", "string");
        	this.dsCombo.addColumn("CD_TYPE", "string");

        	this.dsCombo.addRow();
        	this.dsCombo.setColumn(0, "CD_SYSTEM", "DC");
        	this.dsCombo.setColumn(0, "CD_TYPE", "C02");

        	this.dsCombo.addRow();
        	this.dsCombo.setColumn(1, "CD_SYSTEM", "DC");
        	this.dsCombo.setColumn(1, "CD_TYPE", "C50");

        	var strSvcId    = "combo";
        	var strSvcType  = "select";
        	var inProc		= "_dsProc";
        	var inData      = "combo=dsCombo";
        	var outData     = "dsCD_LICENSE=combo0 dsTY_STATUS=combo1";
        	var strArg      = "";
        	var callBackFnc = "fnCallback";

        	this.gfnTransaction( strSvcId , 	// transaction을 구분하기 위한 svc id값
        						strSvcType , 	// transaction을 요청할 구분
        						inProc,			// Procedure 정보 Dataset 이름
        						inData , 		// 입력값으로 보낼 dataset id , a=b형태로 실제이름과 입력이름을 매칭
        						outData , 		// 처리결과값으로 받을 dataset id, a=b형태로 실제이름과 입력이름을 매칭
        						strArg, 		// 입력값으로 보낼 arguments, strFormData="20120607"
        						callBackFnc); // 통신방법 정의 [생략가능]
        }

         /*
          *	조회 버튼
          */
        this.fnSelect = function() {
        	if(!this.fnValidate()) return;

        	this.dsSelect.clearData();
        	this.dsSelect.addRow();
        	this.dsSelect.setColumn(0, "CD_COSTCLASS", this.dsSearch.getColumn(0, "CD_COSTCLASS"));
        	this.dsSelect.setColumn(0, "CD_LICCOST", this.dsSearch.getColumn(0, "CD_LICCOST"));
        	this.dsSelect.setColumn(0, "CD_LICENSE", this.dsSearch.getColumn(0, "CD_LICENSE"));
        	this.dsSelect.setColumn(0, "CD_SITE", this.dsSearch.getColumn(0, "CD_SITE"));
        	this.dsSelect.setColumn(0, "WORKYEAR", this.dsSearch.getColumn(0, "WORKYEAR"));
        	this.dsSelect.setColumn(0, "DS_VENDOR", this.dsSearch.getColumn(0, "DS_VENDOR"));
        	this.dsSelect.setColumn(0, "TY_STATUS", this.dsSearch.getColumn(0, "TY_STATUS"));

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

        /************************************************************************
         * Validate
         ************************************************************************/
        /*
         *	조회 Validate
         */
        this.fnValidate = function() {
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
        	if (svcID == "select")
        	{
        		this.gfnGridAfterSelect(this.dxGrid);
        	}
        	else if(svcID == "combo") {
        		if (errorCode == 0) {
        			var nrow = this.dsTY_STATUS.insertRow(0);
        			this.dsTY_STATUS.setColumn(nrow, "CD_CODE", "");
        			this.dsTY_STATUS.setColumn(nrow, "DS_CODE", "전체");
        			this.divSearch.form.cboTY_STATUS.set_index(0);

        			var nrow2 = this.dsCD_LICENSE.insertRow(0);
        			this.dsCD_LICENSE.setColumn(nrow2, "CD_CODE", "");
        			this.dsCD_LICENSE.setColumn(nrow2, "DS_CODE", "전체");
        			this.divSearch.form.cboCD_LICENCE.set_index(0);
        		}
        		else {
        			this.gfnAlert(errorMsg);
        		}
        	}
        	else if (svcID == "sign") {
        		if(errorCode == 0)
        		{
        			this.fnSignSave();
        		}else
        		{
        			this.gfnAlert(errorMsg);
        		}
        	}
        	else if(svcID == "signSave") {
        		if (errorCode == 0) {
        			this.fnSignSaveCallback = function() {
        				this.FormBtns.Select.click();
        			}

        			this.gfnAlert("승인이 완료 되었습니다.", "fnSignSaveCallback");
        		} else {
        			this.gfnAlert(errorMsg);
        		}
        	}
        	else if(svcID == "create") {
        		if (errorCode == 0) {
        			this.fnCreateCallback = function() {
        				this.FormBtns.Select.click();
        			}

        			this.gfnAlert("자료 생성이 완료 되었습니다.", "fnCreateCallback");
        		} else {
        			this.gfnAlert(errorMsg);
        		}
        	}
        };

        /************************************************************************
         * 코드파인드 이벤트
         ************************************************************************/

        this.fnBeforeUserDataSetParam = function(id, dsUserParam, nrow) {
        	if (id == "cfCD_LICCOST") {
        		if(this.gfnIsNull(this.dsSearch.getColumn(0, "CD_COSTCLASS")))
        		{
        			this.gfnAlert("부문을 먼저 입력해주세요.");
        			return false;
        		}
        		dsUserParam.setColumn(nrow, "COSTCLASS", this.dsSearch.getColumn(0, "CD_COSTCLASS"));
        	}
        	return true;
        };

        this.fnAfterCDTextChanged = function(id){

        };


        /************************************************************************
         * 그리드 이벤트
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
        	if(e.oldvalue != e.newvalue) {
        		this.gfnSetFormStatus(this);	// 폼상태 초기화
        		this.gfnGridClear(this.dxGrid);

        		if(e.columnid == "CD_COSTCLASS")
        		{
        			this.divSearch.form.cfCD_LICCOST.form.fnCodeFindClear();
        		}
        	}
        };

        /*
         *	자료생성
         */
        this.fnCreate = function(obj,e)
        {
        	var msg =  "기존 생성된 계약 자료는 재 생성되지 않습니다."
        			+ "\n기준년도 : ["+ this.dsSearch.getColumn(0, "WORKYEAR")  + "] 년도 실적자료를 집계 하시겠습니까?";

        	this.gfnConfirm(msg, "fnCreate_callback");
        }

        this.fnCreate_callback = function(strId, val) {
        	if(val == true) {
        		this.dsCreate.clearData();
        		var nrow = this.dsCreate.addRow();

        		this.dsCreate.setColumn(nrow, "WORKYEAR", this.dsSearch.getColumn(0, "WORKYEAR"));
        		this.dsCreate.setColumn(nrow, "ID_USER", this.AuthClient.ID_USER);

        		if (this.dsCreate.rowcount == 0) return;

        		var strSvcId    = "create";
        		var strSvcType  = "save";
        		var inProc		= "_dsProc";
        		var inData      = "create=dsCreate";
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
        }

        this.fnOzReport = function(obj,e) {
        	var param = {};

        	var strSiljukGubun = this.dsList.getColumn(this.dsList.rowposition, "TY_ACTUALPROOF");
        	var strReportName = "";

        	if(strSiljukGubun == "SC051010") strReportName = '/dp/scjaSC051010p.ozr';      // 대한전문건설협회
        	else if(strSiljukGubun == "SC051020") strReportName = '/dp/scjaSC051020p.ozr'; // 대한설비건설협회
        	else if(strSiljukGubun == "SC051030") strReportName = '/dp/scjaSC051030p.ozr'; // 한국전기공사협회
        	else if(strSiljukGubun == "SC051040") strReportName = '/dp/scjaSC051040p.ozr'; // 한국정보통신공사협회
        	else if(strSiljukGubun == "SC051050") strReportName = '/dp/scjaSC051050p.ozr'; // 대한시설물유지관리협회
        	else if(strSiljukGubun == "SC051060") strReportName = '/dp/scjaSC051010p.ozr'; // 한국엔지니어링진흥협회
            else if(strSiljukGubun == "SC051070") strReportName = '/dp/scjaSC051070p.ozr'; // 한국소방안전협회
            else if(strSiljukGubun == "SC051080") strReportName = '/dp/scjaSC051080p.ozr'; // 대한건설협회

        	param.REPORT_NAME = strReportName;

        	// 테스트용
        	var strENO_SEQ = this.dsList.getColumn(this.dsList.rowposition, "ENO_SEQ");

        	param.JSONPARAM = "{\"addSql\":\""+ strENO_SEQ + "\" , \"wsvrUrl\":\""+ this.gfnGetServerUrl() +"/images/ingam.png\"}";

        	this.gfnFormOpenNonAuth("DZU", "DZU_OZ", "", param, 900, 650);
        }

        this.fnHadoDj = function(obj,e) {
        	var param = {};
        	var rowposition = this.dsList.rowposition;
        	if(rowposition > -1){

        		param.CD_SITE = this.dsList.getColumn(rowposition, "CD_SITE");
        		param.DS_SITE = this.dsList.getColumn(rowposition, "DS_SITE");
        		param.DS_CONTMETHOD = this.FormInfo.DS_PARAM;
        		param.NO_HADOCONT = this.dsList.getColumn(rowposition, "NO_CONT");
        		param.DS_HADOCONT = this.dsList.getColumn(rowposition, "DS_CONT");
        		param.CD_VENDOR = this.dsList.getColumn(rowposition, "CD_VENDOR");
        		param.DS_VENDOR = this.dsList.getColumn(rowposition, "DS_VENDOR");
        	}

        	this.gfnFormOpen("DWB", "DWB_HADODJ", "", param);
        };


        this.divData_objGrid_oncelldblclick = function(obj,e)
        {
        	if (!this.gfnGridIsRow(this.dxGrid)) { return false; }

        	var nRow = this.dsList.rowposition;
        	var param = {};
        	param.WORKYEAR = this.dsList.getColumn(nRow, "WORKYEAR");
        	param.CD_VENDOR = this.dsList.getColumn(nRow, "CD_VENDOR");
        	param.DS_VENDOR = this.dsList.getColumn(nRow, "DS_VENDOR");
        	param.ENO_SEQ = this.dsList.getColumn(nRow, "ENO_SEQ");
        	param.DS_STATUS = this.dsList.getColumn(nRow, "DS_STATUS");

        	this.gfnFormOpen(this.FormInfo.CD_MODULE, "DCC_ACTUALPROOF", "fnActualproof_callback", param, 1300, 750);
        };

        this.fnActualproof_callback = function()
        {
        	this.FormBtns.Select.click();
        }

        this.fnReqAgree = function(obj,e)
        {
        	var strTY_STATUS = this.dsSearch.getColumn(0, "TY_STATUS");

        	if(strTY_STATUS == "SC05010")
        	{
        		var msg = "선택항목을 승인 완료 하시겠습니까?";

        		this.gfnConfirm(msg, "fnSign_callback", "");
        	}
        	else{
        		this.gfnAlert("승인요청자료만 조회후 작업 가능합니다.");
        		return;
        	}
        }

        this.fnSign_callback = function(strId, val)
        {
        	if(val == true)
        	{
        		this.dsSign.clearData();

        		for(var i = 0; i < this.dsList.rowcount; i++)
        		{
        			if(this.dsList.getColumn(i, "CHK") != 1) continue;

        			var arrVal	= [];
        			var arrSign = [];
        			var arrEtc 	= [];

        			arrVal.push(this.dsList.getColumn(i,"NO_CONT"));
        			arrVal.push(this.dsList.getColumn(i,"WORKYEAR"));
        			arrVal.push(this.dsList.getColumn(i,"SN_SEQ"));
        			arrVal.push(this.dsList.getColumn(i,"ENO_SEQ"));
        			arrVal.push(this.dsList.getColumn(i,"CD_SITE"));
        			arrVal.push(this.dsList.getColumn(i,"TY_STATUS"));
        			arrVal.push(this.dsList.getColumn(i,"CD_VENDOR"));
        			arrVal.push(this.dsList.getColumn(i,"DS_VENDOR"));
        			arrVal.push(this.dsList.getColumn(i,"CD_LICCOST"));
        			arrVal.push(this.dsList.getColumn(i,"SUPDEPTCD"));
        			arrVal.push(this.dsList.getColumn(i,"SUPUSERID"));
        			arrVal.push(this.dsList.getColumn(i,"RESNO"));
        			arrVal.push(this.dsList.getColumn(i,"PROOFUSERID"));
        			arrVal.push(this.dsList.getColumn(i,"PROOFDATE"));
        			arrVal.push(this.dsList.getColumn(i,"TRADEUSERID"));
        			arrVal.push(this.dsList.getColumn(i,"REPNM"));
        			arrVal.push(this.dsList.getColumn(i,"TELNO"));
        			arrVal.push(this.dsList.getColumn(i,"ADDR"));
        			arrVal.push(this.dsList.getColumn(i,"CD_LICNO"));
        			arrVal.push(this.dsList.getColumn(i,"BIZTYPENM"));
        			arrVal.push(this.dsList.getColumn(i,"PERMORG"));
        			arrVal.push(this.dsList.getColumn(i,"PERMYMD"));
        			arrVal.push(this.dsList.getColumn(i,"ETC"));
        			arrVal.push(this.dsList.getColumn(i,"SEQNUM"));
        			arrVal.push(this.dsList.getColumn(i,"REPORTNUM"));
        			arrVal.push(this.dsList.getColumn(i,"REGNUM"));
        			arrVal.push(this.dsList.getColumn(i,"CONTTYPE"));
        			arrVal.push(this.dsList.getColumn(i,"TOTCONTAMT"));
        			arrVal.push(this.dsList.getColumn(i,"YEARBEGCONTAMT"));
        			arrVal.push(this.dsList.getColumn(i,"CURYEARCONTAMT"));
        			arrVal.push(this.dsList.getColumn(i,"CURCONNETAMT"));
        			arrVal.push(this.dsList.getColumn(i,"CURYEARACCAMT"));
        			arrVal.push(this.dsList.getColumn(i,"PREYEARACCAMT"));
        			arrVal.push(this.dsList.getColumn(i,"CURYEARACCPAY"));
        			arrVal.push(this.dsList.getColumn(i,"PREYEARACCPAY"));
        			arrVal.push(this.dsList.getColumn(i,"ORDAMT"));
        			arrVal.push(this.dsList.getColumn(i,"TOTCONAMT"));
        			arrVal.push(this.dsList.getColumn(i,"YETACCAMT"));
        			arrVal.push(this.dsList.getColumn(i,"PREYEARTRANAMT"));
        			arrVal.push(this.dsList.getColumn(i,"SUBCONTAMT"));
        			arrVal.push(this.dsList.getColumn(i,"GOVAMT"));
        			arrVal.push(this.dsList.getColumn(i,"OTHPROACCAMT"));
        			arrVal.push(this.dsList.getColumn(i,"CURYEARADDAMT"));

        			var nrow = this.dsSign.addRow();
        			this.dsSign.setColumn(nrow, "DS_HASHVAL", arrVal.join("/"));

        			this.dsSign.setColumn(nrow,"ENO_SEQ", this.dsList.getColumn(i, "ENO_SEQ"));
        			this.dsSign.setColumn(nrow,"CD_VENDOR", "000000");
        			this.dsSign.setColumn(nrow,"SIGN_STATUS", "SC05050");
        			this.dsSign.setColumn(nrow,"ID_SIGN",this.AuthClient.ID_USER);
        		}

        		var strSvcId    = "sign";
        		var strSvcType  = "pki/sign";
        		var inProc		= "";
        		var inData      = "input=dsSign";
        		var outData     = "dsSign=output0";
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
        };

        this.fnSignSave = function()
        {
        	var strSvcId    = "signSave";
        	var strSvcType  = "save";
        	var inProc		= "_dsProc";
        	var inData      = "signSave=dsSign";
        	var outData     = "dsSign=signSave";
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
        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.DCC_ACTUALPROOFLIST_onload,this);
            this.divData.form.objGrid.addEventHandler("oncelldblclick",this.divData_objGrid_oncelldblclick,this);
            this.dsSearch.addEventHandler("onvaluechanged",this.dsSearch_onvaluechanged,this);
        };
        this.loadIncludeScript("DCC_ACTUALPROOFLIST.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
