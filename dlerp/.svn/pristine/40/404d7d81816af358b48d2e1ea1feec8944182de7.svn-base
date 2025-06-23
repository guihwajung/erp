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
            if (Form == this.constructor)
            {
                this._setFormPosition(1280,720);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("dsList", this);
            obj._setContents("");
            this.addChild(obj.name, obj);


            obj = new Dataset("_dsProc", this);
            obj._setContents("<ColumnInfo><Column id=\"TARGET\" type=\"STRING\" size=\"256\"/><Column id=\"SP\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"TARGET\">selectLeft</Col><Col id=\"SP\">DBZPR_SIL_PART_SELECT</Col></Row><Row><Col id=\"TARGET\">selectMid</Col><Col id=\"SP\">DBZPR_SUBPART_SELECT</Col></Row><Row><Col id=\"TARGET\">select</Col><Col id=\"SP\">DBZPR_SIL_SUBPART_SELECT</Col></Row><Row><Col id=\"TARGET\">insert</Col><Col id=\"SP\">DBZPR_SIL_SUBPART_INSERT</Col></Row><Row><Col id=\"TARGET\">update</Col><Col id=\"SP\">DBZPR_SIL_SUBPART_UPDATE</Col></Row><Row><Col id=\"TARGET\">delete</Col><Col id=\"SP\">DBZPR_SIL_SUBPART_DELETE</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsSearch", this);
            obj._setContents("<ColumnInfo><Column id=\"CD_SIL\" type=\"STRING\" size=\"256\"/><Column id=\"DS_SIL\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row/></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsListLeft", this);
            obj._setContents("");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsListMid", this);
            obj._setContents("");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Div("divSearch","0.0","10.0",null,"46.0","0",null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_cssclass("div_SEARCH_Bg");
            obj.set_formscrolltype("none");
            this.addChild(obj.name, obj);

            obj = new Static("staCD_SIL","0.0","10.0","79.0","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("1");
            obj.set_text("실코드");
            obj.set_cssclass("sta_WF_SchLabelE");
            this.divSearch.addChild(obj.name, obj);

            obj = new Div("ccfCD_SIL","staCD_SIL:0.0","10.0","200","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.getSetter("CodeFindName").set("DBX_CFCOMM");
            obj.getSetter("CDTextWidth").set("60");
            obj.set_taborder("0");
            obj.getSetter("FitToContents").set("true");
            obj.set_url("cmm::cmmCodeFind.xfdl");
            this.divSearch.addChild(obj.name, obj);

            obj = new Div("divData","0","divSearch:10",null,null,"0","0",null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_cssclass("div_DATA_Bg");
            this.addChild(obj.name, obj);

            obj = new Div("divDataLeft","0","0","240",null,null,"0",null,null,null,null,this.divData.form);
            obj.set_taborder("0");
            obj.set_cssclass("div_DATA_Bg");
            this.divData.addChild(obj.name, obj);

            obj = new Static("staTITLE","0","0","100%","30",null,null,null,null,null,null,this.divData.form.divDataLeft.form);
            obj.set_taborder("0");
            obj.set_text("부위정보");
            obj.set_cssclass("sta_TITLE_Bg");
            obj.set_textAlign("left");
            this.divData.form.divDataLeft.addChild(obj.name, obj);

            obj = new Grid("objGrid","0","staTITLE:5",null,null,"0","0",null,null,null,null,this.divData.form.divDataLeft.form);
            obj.set_taborder("0");
            obj._setContents("");
            this.divData.form.divDataLeft.addChild(obj.name, obj);

            obj = new Div("divDataMiddle","divDataLeft:5","0","240",null,null,"0",null,null,null,null,this.divData.form);
            obj.set_taborder("0");
            obj.set_cssclass("div_DATA_Bg");
            this.divData.addChild(obj.name, obj);

            obj = new Static("staTITLE","0","0","100%","30",null,null,null,null,null,null,this.divData.form.divDataMiddle.form);
            obj.set_taborder("0");
            obj.set_text("상세부위");
            obj.set_cssclass("sta_TITLE_Bg");
            obj.set_textAlign("left");
            this.divData.form.divDataMiddle.addChild(obj.name, obj);

            obj = new Grid("objGrid1","0","staTITLE:5",null,null,"0","0",null,null,null,null,this.divData.form.divDataMiddle.form);
            obj.set_taborder("0");
            obj._setContents("");
            this.divData.form.divDataMiddle.addChild(obj.name, obj);

            obj = new Button("btnRight","divDataMiddle:1","40%","30","30",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("3");
            obj.set_text(">");
            this.divData.addChild(obj.name, obj);

            obj = new Button("btnAllRight","divDataMiddle:1","btnRight:2","30","30",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("3");
            obj.set_text(">>");
            this.divData.addChild(obj.name, obj);

            obj = new Div("divDataRight","btnRight:1","0",null,null,"0","0",null,null,null,null,this.divData.form);
            obj.set_taborder("0");
            obj.set_cssclass("div_DATA_Bg");
            this.divData.addChild(obj.name, obj);

            obj = new Static("staTITLE","0","0","100%","30",null,null,null,null,null,null,this.divData.form.divDataRight.form);
            obj.set_taborder("0");
            obj.set_text("부위별상세부위");
            obj.set_cssclass("sta_TITLE_Bg");
            obj.set_textAlign("left");
            this.divData.form.divDataRight.addChild(obj.name, obj);

            obj = new Grid("objGrid2","0","staTITLE:5",null,null,"0","0",null,null,null,null,this.divData.form.divDataRight.form);
            obj.set_taborder("0");
            obj._setContents("");
            this.divData.form.divDataRight.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this
            obj = new Layout("default","",this._adjust_width,this._adjust_height,this,function(p){});
            this.addLayout(obj.name, obj);
            
            // BindItem Information
            obj = new BindItem("item0","divSearch.form.ccfCD_SIL.form.CDTextBox","value","dsSearch","CD_SIL");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item1","divSearch.form.ccfCD_SIL.form.DSTextBox","value","dsSearch","DS_SIL");
            this.addChild(obj.name, obj);
            obj.bind();
            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {
            this._addPreloadList("fdl","cmm::cmmCodeFind.xfdl");
        };
        
        // User Script
        this.registerScript("DBZ_SIL_SUBPARTINPUT.xfdl", function() {
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

        	this.fnSelectMaster();
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
        	this.dxGridLeft = this.divData.form.divDataLeft.form.objGrid;
        	this.dxGridMid = this.divData.form.divDataMiddle.form.objGrid1;
        	this.dxGrid = this.divData.form.divDataRight.form.objGrid2;
        };

        /************************************************************************
         * 이벤트 설정
         ************************************************************************/
        this.fnSetEvent = function() {
        	this.divSearch.form.ccfCD_SIL.BeforeUserDataSetParam = "fnBeforeUserDataSetParam";

        	// 그리드 초기화
        	this.gfnGridInit(this.dxGridLeft, this.dsListLeft, "DB", "DBZ_SIL_SUBPARTINPUT1");
        	this.gfnGridInit(this.dxGridMid, this.dsListMid, "DB", "DBZ_SIL_SUBPARTINPUT2");
        	this.gfnGridInit(this.dxGrid, this.dsList, "DB", "DBZ_SIL_SUBPARTINPUT");

        	this.dxGrid.BeforeUserDataSetParam = "fnGrid_BeforeUserDataSetParam";

        };

        /************************************************************************
         * 파라미터 설정
         ************************************************************************/
        this.fnSetParameter = function() {
        	this.dsSelectLeft = new Dataset();
        	this.dsSelectLeft.addColumn("CD_SIL", "string");

        	this.dsSelectMid = new Dataset();

        	this.dsSelect = new Dataset();
        	this.dsSelect.addColumn("CD_SIL", "string");
        	this.dsSelect.addColumn("CD_SUBSIL", "string");
        	this.dsSelect.addColumn("ID_USER", "string");

        	this.dsInsert = new Dataset();
        	this.dsInsert.addColumn("CD_SIL", "string");
        	this.dsInsert.addColumn("CD_PART", "string");
        	this.dsInsert.addColumn("CD_SUBPART", "string");
        	this.dsInsert.addColumn("CD_ACT", "string");
        	this.dsInsert.addColumn("SN_PRINT", "int");
        	this.dsInsert.addColumn("YN_USE", "string");
        	this.dsInsert.addColumn("NM_USER", "string");

        	this.dsUpdate = new Dataset();
        	this.dsUpdate.addColumn("CD_SIL", "string");
        	this.dsUpdate.addColumn("CD_PART", "string");
        	this.dsUpdate.addColumn("CD_SUBPART", "string");
        	this.dsUpdate.addColumn("CD_ACT", "string");
        	this.dsUpdate.addColumn("SN_PRINT", "int");
        	this.dsUpdate.addColumn("YN_USE", "string");
        	this.dsUpdate.addColumn("NM_USER", "string");

        	this.dsDelete = new Dataset();
        	this.dsDelete.addColumn("CD_SIL", "string");
        	this.dsDelete.addColumn("CD_PART", "string");
        	this.dsDelete.addColumn("CD_SUBPART", "string");
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

        	this.dsSelect.clearData();
        	this.dsSelect.addRow();

        	this.dsSelect.setColumn(0, "CD_SIL", this.dsSearch.getColumn(0, "CD_SIL"));
        	this.dsSelect.setColumn(0, "CD_SUBSIL", "");
        	this.dsSelect.setColumn(0, "ID_USER", "");

        	var strSvcId    = "select";
        	var strSvcType  = "grid";
        	var inProc		= "_dsProc";
        	var inData      = "select=dsSelect";
        	var outData     = "dsList=select0";
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


        this.fnSelectMaster = function() {

        	this.dsSelectLeft.clearData();
        	this.dsSelectLeft.addRow();

        	this.dsSelectLeft.setColumn(0, "CD_SIL", "");

        	var strSvcId    = "selectLeft";
        	var strSvcType  = "grid";
        	var inProc		= "_dsProc";
        	var inData      = "selectLeft=dsSelectLeft selectMid=dsSelectMid";
        	var outData     = "dsListLeft=selectLeft0 dsListMid=selectMid0";
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
        	var nrow = this.gfnGridAdd(this.dxGrid); // top (default), bottom, current
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
        				this.dsInsert.setColumn(nrow, "CD_SIL", this.dsSearch.getColumn(0, "CD_SIL"));
        				this.dsInsert.setColumn(nrow, "CD_PART", this.dsList.getColumn(i, "CD_PART"));
        				this.dsInsert.setColumn(nrow, "CD_SUBPART", this.dsList.getColumn(i, "CD_SUBPART"));
        				this.dsInsert.setColumn(nrow, "CD_ACT", this.dsList.getColumn(i, "CD_ACT"));
        				this.dsInsert.setColumn(nrow, "SN_PRINT", this.dsList.getColumn(i, "SN_PRINT"));
        				this.dsInsert.setColumn(nrow, "YN_USE", this.dsList.getColumn(i, "YN_USE"));
        				this.dsInsert.setColumn(nrow, "NM_USER", this.AuthClient.DS_HNAME);
        				break;

        			case "U":
        				var nrow = this.dsUpdate.addRow();
        				this.dsUpdate.setColumn(nrow, "CD_SIL", this.dsSearch.getColumn(0, "CD_SIL"));
        				this.dsUpdate.setColumn(nrow, "CD_PART", this.dsList.getColumn(i, "CD_PART"));
        				this.dsUpdate.setColumn(nrow, "CD_SUBPART", this.dsList.getColumn(i, "CD_SUBPART"));
        				this.dsUpdate.setColumn(nrow, "CD_ACT", this.dsList.getColumn(i, "CD_ACT"));
        				this.dsUpdate.setColumn(nrow, "SN_PRINT", this.dsList.getColumn(i, "SN_PRINT"));
        				this.dsUpdate.setColumn(nrow, "YN_USE", this.dsList.getColumn(i, "YN_USE"));
        				this.dsUpdate.setColumn(nrow, "NM_USER", this.AuthClient.DS_HNAME);
        				break;

        			case "D":
        				var nrow = this.dsDelete.addRow();
        				this.dsDelete.setColumn(nrow, "CD_SIL", this.dsSearch.getColumn(0, "CD_SIL"));
        				this.dsDelete.setColumn(nrow, "CD_PART", this.dsList.getColumn(i, "CD_PART"));
        				this.dsDelete.setColumn(nrow, "CD_SUBPART", this.dsList.getColumn(i, "CD_SUBPART"));
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

        /************************************************************************
         * Validate
         ************************************************************************/
        /*
         *	조회 Validate
         */
        this.fnSelectValidate = function() {
        	var validate = true;

        	if (this.gfnIsNull(this.dsSearch.getColumn(0, "CD_SIL"))) {
        		validate = false;
        		// Alert후 실행할 처리
        		this.fnVaidateCallback = function() {
        			this.divSearch.form.ccfCD_SIL.form.CDTextBox.setFocus();
        		}
        		this.gfnAlert("실코드가 입력되지 않았습니다.", "fnVaidateCallback");
        	}

        	return validate;
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
        this.fnBeforeUserDataSetParam = function(id, dsUserParam, nrow) {
        	if (id == "ccfCD_SIL") {
        		dsUserParam.setColumn(nrow, "CD_GUBUN", "S3");
        	}
        	return true;
        }

        this.fnGrid_BeforeUserDataSetParam = function(id, dsUserParam, nrow){

        	switch(id) {
        		case "DBX_CFCOMM":
        			dsUserParam.setColumn(nrow, "CD_GUBUN", "S5");
        		break;
        	}
        	return true;
        }

        /************************************************************************
         * 그리드 이벤트
         ************************************************************************/

        /************************************************************************
         * 기타 이벤트
         ************************************************************************/
        this.dsSearch_onvaluechanged = function(obj,e)
        {
        	if(e.oldvalue != e.newvalue) {
        		this.gfnSetFormStatus(this);	// 폼상태 초기화
        		this.gfnGridClear(this.dxGrid);
        	}
        };

        this.divData_btnRight_onclick = function(obj,e)
        {
        	if (!this.gfnGridIsRow(this.dxGridLeft)) { return false; }
        	if (!this.gfnGridIsRow(this.dxGridMid)) { return false; }

        	if(this.gfnIsNull(this.dsSearch.getColumn(0, "CD_SIL")))
        	{
        		this.gfnAlert("조회 후 진행해주세요.");
        		return false;
        	}

        	var strArr = this.fnGridDataCollection("CD_PART", "CD_SUBPART");
        	var leftRow = this.dsListLeft.rowposition;
        	var rows = this.dxGridMid.getSelectedDatasetRows();

        	for(var i = 0 ; i < rows.length; i++)
        	{
        		if(this.fnRepetitionCheck(this.dsListLeft.getColumn(leftRow, "CD_CODE"), this.dsListMid.getColumn(rows[i], "CD_CODE"), strArr))
        		{
        			var nrow = this.gfnGridAdd(this.dxGrid);
        			this.dsList.setColumn(nrow, this.ucFlag, "I");
        			this.dsList.setColumn(nrow, "CD_PART", this.dsListLeft.getColumn(this.dsListLeft.rowposition, "CD_CODE"));
        			this.dsList.setColumn(nrow, "DS_PART", this.dsListLeft.getColumn(this.dsListLeft.rowposition, "DS_CODE"));
        			this.dsList.setColumn(nrow, "CD_SUBPART", this.dsListMid.getColumn(rows[i], "CD_CODE"));
        			this.dsList.setColumn(nrow, "DS_SUBPART", this.dsListMid.getColumn(rows[i], "DS_CODE"));

        			this.dsList.setColumn(nrow, "YN_USE", "Y");
        		}
        		else
        		{
        			this.gfnAlert("이미 입력된 자료입니다.");
        			return;
        		}
        	}
        };

        this.divData_btnAllRight_onclick = function(obj,e)
        {
        	if (!this.gfnGridIsRow(this.dxGridLeft)) { return false; }

        	if(this.gfnIsNull(this.dsSearch.getColumn(0, "CD_SIL")))
        	{
        		this.gfnAlert("조회 후 진행해주세요.");
        		return false;
        	}

        	this.gfnConfirm("전체 자료를 이동 하겠습니까?","fnAllRight_callback");

        };

        this.fnAllRight_callback = function(strID, val)
        {
        	if(val == true)
        	{
        		var strArr = this.fnGridDataCollection("CD_PART", "CD_SUBPART");
        		var leftRow = this.dsListLeft.rowposition;
        		var midRow = this.dsListMid.rowposition;

        		for(var i = 0 ; i < this.dsListMid.rowcount; i++)
        		{
        			if(this.fnRepetitionCheck(this.dsListLeft.getColumn(leftRow, "CD_CODE"), this.dsListMid.getColumn(i, "CD_CODE"), strArr))
        			{
        				var nrow = this.gfnGridAdd(this.dxGrid);
        				this.dsList.setColumn(nrow, this.ucFlag, "I");
        				this.dsList.setColumn(nrow, "CD_PART", this.dsListLeft.getColumn(this.dsListLeft.rowposition, "CD_CODE"));
        				this.dsList.setColumn(nrow, "DS_PART", this.dsListLeft.getColumn(this.dsListLeft.rowposition, "DS_CODE"));
        				this.dsList.setColumn(nrow, "CD_SUBPART", this.dsListMid.getColumn(i, "CD_CODE"));
        				this.dsList.setColumn(nrow, "DS_SUBPART", this.dsListMid.getColumn(i, "DS_CODE"));

        				this.dsList.setColumn(nrow, "YN_USE", "Y");
        			}
        		}
        	}
        }

        this.fnGridDataCollection = function(col1, col2)
        {
        	var str = [];
        	for(var i = 0; i < this.dsList.rowcount; i++)
        	{
        		str[i] = this.dsList.getColumn(i, col1) + this.dsList.getColumn(i, col2);
        	}

        	return str;
        }

        this.fnRepetitionCheck = function(cd_part, cd_subpart, strArr)
        {
        	for(var i = 0; i < strArr.length -1 ; i++)
        	{
        		if(cd_part + cd_subpart == strArr[i]) return false;
        	}
        	return true;
        }



        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.form_onload,this);
            this.divData.form.btnRight.addEventHandler("onclick",this.divData_btnRight_onclick,this);
            this.divData.form.btnAllRight.addEventHandler("onclick",this.divData_btnAllRight_onclick,this);
            this.dsSearch.addEventHandler("onvaluechanged",this.dsSearch_onvaluechanged,this);
        };
        this.loadIncludeScript("DBZ_SIL_SUBPARTINPUT.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
