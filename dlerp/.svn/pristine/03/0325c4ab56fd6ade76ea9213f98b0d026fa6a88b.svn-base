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
            obj._setContents("<ColumnInfo><Column id=\"TARGET\" type=\"STRING\" size=\"256\"/><Column id=\"SP\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"TARGET\">selectLeft</Col><Col id=\"SP\">DBZPR_SILPART_SELECT</Col></Row><Row><Col id=\"TARGET\">select</Col><Col id=\"SP\">DBZPR_SILPART_SELECT</Col></Row><Row><Col id=\"TARGET\">insert</Col><Col id=\"SP\">DBZPR_SILPART_INSERT</Col></Row><Row><Col id=\"TARGET\">update</Col><Col id=\"SP\">DBZPR_SILPART_UPDATE</Col></Row><Row><Col id=\"TARGET\">delete</Col><Col id=\"SP\">DBZPR_SILPART_DELETE</Col></Row><Row><Col id=\"TARGET\">select_dlg</Col><Col id=\"SP\">DBZPR_SUBSILPART_SELECT</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsSearch", this);
            obj._setContents("<ColumnInfo><Column id=\"CD_SIL\" type=\"STRING\" size=\"256\"/><Column id=\"DS_SIL\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row/></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsListLeft", this);
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

            obj = new Button("btnRight","divDataLeft:1","40%","30","30",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("3");
            obj.set_text(">");
            this.divData.addChild(obj.name, obj);

            obj = new Button("btnAllRight","divDataLeft:1","btnRight:2","30","30",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("3");
            obj.set_text(">>");
            this.divData.addChild(obj.name, obj);

            obj = new Div("divDataMiddle","btnRight:1","0",null,null,"0","0",null,null,null,null,this.divData.form);
            obj.set_taborder("0");
            obj.set_cssclass("div_DATA_Bg");
            this.divData.addChild(obj.name, obj);

            obj = new Static("staTITLE","0","0","100%","30",null,null,null,null,null,null,this.divData.form.divDataMiddle.form);
            obj.set_taborder("0");
            obj.set_text("실별 부위코드");
            obj.set_cssclass("sta_TITLE_Bg");
            obj.set_textAlign("left");
            this.divData.form.divDataMiddle.addChild(obj.name, obj);

            obj = new Grid("objGrid1","0","staTITLE:5",null,null,"0","0",null,null,null,null,this.divData.form.divDataMiddle.form);
            obj.set_taborder("0");
            obj._setContents("");
            this.divData.form.divDataMiddle.addChild(obj.name, obj);
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
        this.registerScript("DBZ_SILPARTINPUT.xfdl", function() {
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

        	if(this.FormInfo.TY_AUTH == "R")
        	{
        		this.divData.form.btnRight.set_enable(false);
        		this.divData.form.btnAllRight.set_enable(false);
        	}
        	else
        	{
        		this.divData.form.btnRight.set_enable(true);
        		this.divData.form.btnAllRight.set_enable(true);
        	}

        	this.fnSelectMaster();

        	if(!this.gfnIsNull(this.getOwnerFrame().CD_SIL))
        	{
        		this.dsSearch.setColumn(0, "CD_SIL", this.getOwnerFrame().CD_SIL);
        		this.dsSearch.setColumn(0, "DS_SIL", this.getOwnerFrame().DS_SIL);

        		this.FormBtns.Select.click();
        	}
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
        	this.btnPartDlg = this.gfnFormButtonAdd("btnPartDlg", "fnPartDlg");
        };

        /************************************************************************
         * 변수 선언
         ************************************************************************/
        this.fnSetVariable = function() {
        	this.dxGridLeft = this.divData.form.divDataLeft.form.objGrid;
        	this.dxGrid = this.divData.form.divDataMiddle.form.objGrid1;
        };

        /************************************************************************
         * 이벤트 설정
         ************************************************************************/
        this.fnSetEvent = function() {
        	this.divSearch.form.ccfCD_SIL.BeforeUserDataSetParam = "fnBeforeUserDataSetParam";

        	// 그리드 초기화
        	this.gfnGridInit(this.dxGridLeft, this.dsListLeft, "DB", "DBZ_SILPARTINPUT1");
        	this.gfnGridInit(this.dxGrid, this.dsList, "DB", "DBZ_SILPARTINPUT");
        };

        /************************************************************************
         * 파라미터 설정
         ************************************************************************/
        this.fnSetParameter = function() {
        	this.dsSelectLeft = new Dataset();
        	this.dsSelectLeft.addColumn("CD_SIL", "string");
        	this.dsSelectLeft.addColumn("TY_GBN", "int");

        	this.dsSelect = new Dataset();
        	this.dsSelect.addColumn("CD_SIL", "string");
        	this.dsSelect.addColumn("TY_GBN", "int");

        	this.dsInsert = new Dataset();
        	this.dsInsert.addColumn("CD_SIL", "string");
        	this.dsInsert.addColumn("CD_PART", "string");
        	this.dsInsert.addColumn("YN_USE", "string");
        	this.dsInsert.addColumn("NM_USER", "string");

        	this.dsUpdate = new Dataset();
        	this.dsUpdate.addColumn("CD_SIL", "string");
        	this.dsUpdate.addColumn("CD_PART", "string");
        	this.dsUpdate.addColumn("YN_USE", "string");
        	this.dsUpdate.addColumn("NM_USER", "string");

        	this.dsDelete = new Dataset();
        	this.dsDelete.addColumn("CD_SIL", "string");
        	this.dsDelete.addColumn("CD_PART", "string");

        	this.dsSelectDlg = new Dataset();
        	this.dsSelectDlg.addColumn("CD_SIL", "string");
        	this.dsSelectDlg.addColumn("CD_SUBSIL", "string");
        	this.dsSelectDlg.addColumn("ID_USER", "string");
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
        	this.dsSelect.setColumn(0, "TY_GBN", 1);


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
        	this.gfnGridBeforeSelect(this.dxGridLeft);

        	this.dsSelectLeft.clearData();
        	this.dsSelectLeft.addRow();

        	this.dsSelectLeft.setColumn(0, "CD_SIL", "");
        	this.dsSelectLeft.setColumn(0, "TY_GBN", 0);

        	var strSvcId    = "selectLeft";
        	var strSvcType  = "grid";
        	var inProc		= "_dsProc";
        	var inData      = "select=dsSelectLeft";
        	var outData     = "dsListLeft=select0";
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

        this.fnSelectDlg = function(cd_sil)
        {
        	this.dsSelectDlg.clearData();
        	this.dsSelectDlg.addRow();

        	this.dsSelectDlg.setColumn(0, "CD_SIL", this.dsSearch.getColumn(0, "CD_SIL"));
        	this.dsSelectDlg.setColumn(0, "CD_SUBSIL", cd_sil);
        	this.dsSelectDlg.setColumn(0, "ID_USER", this.AuthClient.DS_HNAME);

        	var strSvcId    = "selectdlg";
        	var strSvcType  = "grid";
        	var inProc		= "_dsProc";
        	var inData      = "select_dlg=dsSelectDlg";
        	var outData     = "dsList=select_dlg0";
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
        	//var nrow = this.gfnGridAdd(this.dxGrid); // top (default), bottom, current
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
        				this.dsInsert.setColumn(nrow, "YN_USE", this.dsList.getColumn(i, "YN_USE"));
        				this.dsInsert.setColumn(nrow, "NM_USER", this.AuthClient.DS_HNAME);
        				break;

        			case "U":
        				var nrow = this.dsUpdate.addRow();
        				this.dsUpdate.setColumn(nrow, "CD_SIL", this.dsSearch.getColumn(0, "CD_SIL"));
        				this.dsUpdate.setColumn(nrow, "CD_PART", this.dsList.getColumn(i, "CD_PART"));
        				this.dsUpdate.setColumn(nrow, "YN_USE", this.dsList.getColumn(i, "YN_USE"));
        				this.dsUpdate.setColumn(nrow, "NM_USER", this.AuthClient.DS_HNAME);
        				break;

        			case "D":
        				var nrow = this.dsDelete.addRow();
        				this.dsDelete.setColumn(nrow, "CD_SIL", this.dsSearch.getColumn(0, "CD_SIL"));
        				this.dsDelete.setColumn(nrow, "CD_PART", this.dsList.getColumn(i, "CD_PART"));
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
        		this.divData.form.divDataMiddle.form.staTITLE.set_text("실별 부위코드");
        	}
        	else if (svcID == "selectLeft") {
        		this.gfnGridAfterSelect(this.dxGridLeft);
        	}
        	else if (svcID == "selectdlg") {
        		if(this.dsList.rowcount > 0)
        		{
        			for(var i = 0; i < this.dsList.rowcount; i++)
        			{
        				this.dsList.setColumn(i, this.ucFlag, "I");
        				this.dsList.setColumn(i, "YN_USE", "Y");
        			}

        			this.gfnSetFormStatus(this, "I");
        		}
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


        this.fnPartDlg = function()
        {
        	var param = {};

        	this.gfnFormOpen(this.FormInfo.CD_MODULE, "DBZ_PARTDLG", "fnPartDlg_callback", param);
        }

        this.fnPartDlg_callback = function(strID, val)
        {
        	if(val != false)
        	{
        		var json = JSON.parse(val);

        		var cd_sil = json.CD_SIL;
        		var ds_sil = json.DS_SIL;

        		this.divData.form.divDataMiddle.form.staTITLE.set_text("실별 부위코드 (" + ds_sil + ")");
        		this.fnSelectDlg(cd_sil, ds_sil);
        	}
        }

        // >  버튼 클릭
        this.divData_btnRight_onclick = function(obj,e)
        {
        	if (!this.gfnGridIsRow(this.dxGridLeft)) { return false; }

        	if(this.gfnIsNull(this.dsSearch.getColumn(0, "CD_SIL")))
        	{
        		this.gfnAlert("조회 후 진행해주세요.");
        		return false;
        	}

        	if(this.dsList.findRow("CD_PART", this.dsListLeft.getColumn(this.dsListLeft.rowposition, "CD_CODE")) < 0)
        	{
        		var nrow = this.gfnGridAdd(this.dxGrid);
        		this.dsList.setColumn(nrow, this.ucFlag, "I");
        		this.dsList.setColumn(nrow, "CD_PART", this.dsListLeft.getColumn(this.dsListLeft.rowposition, "CD_CODE"));
        		this.dsList.setColumn(nrow, "DS_PART", this.dsListLeft.getColumn(this.dsListLeft.rowposition, "DS_CODE"));
        		this.dsList.setColumn(nrow, "YN_USE", "Y");
        	}
        	else
        	{
        		this.gfnAlert("이미 입력된 자료입니다.");
        		return false;
        	}
        };

        // >> 버튼 클릭.
        this.divData_btnAllRight_onclick = function(obj,e)
        {
        	if(this.gfnIsNull(this.dsSearch.getColumn(0, "CD_SIL")))
        	{
        		this.gfnAlert("조회 후 진행해주세요.");
        		return false;
        	}

        	this.gfnConfirm("모든 자료를 이동 하겠습니까?", "fnAllRight_callback");
        };

        this.fnAllRight_callback = function(strID, val)
        {
        	if(val == true)
        	{
        		for(var i = 0; i < this.dsListLeft.rowcount; i++)
        		{
        			var cd_code = this.dsListLeft.getColumn(i, "CD_CODE");

        			if(this.dsList.findRow("CD_PART", cd_code) < 0)
        			{
        				var nrow = this.gfnGridAdd(this.dxGrid);
        				this.dsList.setColumn(nrow, this.ucFlag, "I");
        				this.dsList.setColumn(nrow, "CD_PART", this.dsListLeft.getColumn(i, "CD_CODE"));
        				this.dsList.setColumn(nrow, "DS_PART", this.dsListLeft.getColumn(i, "DS_CODE"));
        				this.dsList.setColumn(nrow, "YN_USE", "Y");
        			}
        		}
        	}
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
        this.loadIncludeScript("DBZ_SILPARTINPUT.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
