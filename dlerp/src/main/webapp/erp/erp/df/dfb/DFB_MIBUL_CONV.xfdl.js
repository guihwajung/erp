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
            this.set_titletext("미지급데이터이관");
            if (Form == this.constructor)
            {
                this._setFormPosition(1280,720);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("dsList", this);
            obj._setContents("");
            this.addChild(obj.name, obj);


            obj = new Dataset("_dsProc", this);
            obj._setContents("<ColumnInfo><Column id=\"TARGET\" type=\"STRING\" size=\"256\"/><Column id=\"SP\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"TARGET\">select</Col><Col id=\"SP\">DFBPR_MIBULCONV_SELECT</Col></Row><Row><Col id=\"TARGET\">insert</Col><Col id=\"SP\">DFBPR_MIBULCONV_INSERT</Col></Row><Row><Col id=\"TARGET\">delete</Col><Col id=\"SP\">DFBPR_MIBULCONV_DELETE</Col></Row><Row><Col id=\"TARGET\">update</Col><Col id=\"SP\">DFBPR_MIBULCONV_UPDATE</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsSearch", this);
            obj._setContents("<ColumnInfo><Column id=\"CD_CORP\" type=\"STRING\" size=\"256\"/><Column id=\"CD_VENDOR\" type=\"STRING\" size=\"256\"/><Column id=\"NO_SLIP\" type=\"STRING\" size=\"256\"/><Column id=\"DS_CORP\" type=\"STRING\" size=\"256\"/><Column id=\"DS_VENDOR\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row/></Rows>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Div("divSearch","0.0","10.0",null,"46.0","0",null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_cssclass("div_SEARCH_Bg");
            this.addChild(obj.name, obj);

            obj = new Static("staCD_CORP","0.0","10.0","92.0","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("9");
            obj.set_text("법인코드");
            obj.set_cssclass("sta_WF_SchLabel");
            this.divSearch.addChild(obj.name, obj);

            obj = new Div("ccfCD_CORP","staCD_CORP:0.0","10.0","250","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.getSetter("CodeFindName").set("DZX_CFCORP");
            obj.getSetter("CDTextWidth").set("50");
            obj.set_taborder("0");
            obj.set_url("cmm::cmmCodeFind.xfdl");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("staCD_VENDOR","ccfCD_CORP:0.0","10.0","79","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("15");
            obj.set_text("거래처");
            obj.set_cssclass("sta_WF_SchLabel");
            this.divSearch.addChild(obj.name, obj);

            obj = new Div("ccfCD_VENDOR","staCD_VENDOR:0.0","10.0","280","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.getSetter("CodeFindName").set("DFX_CFVENDOR");
            obj.getSetter("CDTextWidth").set("70");
            obj.set_taborder("5");
            obj.set_url("cmm::cmmCodeFind.xfdl");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("staACC_CD00","ccfCD_VENDOR:0.0","10.0","92.0","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("18");
            obj.set_text("전표번호");
            obj.set_cssclass("sta_WF_SchLabel");
            this.divSearch.addChild(obj.name, obj);

            obj = new Edit("edtCD_TRADE","staACC_CD00:0.0","10.0","250","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("19");
            this.divSearch.addChild(obj.name, obj);

            obj = new Div("divData","0","divSearch:10",null,null,"0","0",null,null,null,null,this);
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
            obj = new BindItem("item0","divSearch.form.ccfCD_CORP.form.CDTextBox","value","dsSearch","CD_CORP");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item1","divSearch.form.ccfCD_CORP.form.DSTextBox","value","dsSearch","DS_CORP");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item2","divSearch.form.ccfCD_VENDOR.form.CDTextBox","value","dsSearch","CD_VENDOR");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item3","divSearch.form.ccfCD_VENDOR.form.DSTextBox","value","dsSearch","DS_VENDOR");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item4","divSearch.form.edtCD_TRADE","value","dsSearch","NO_SLIP");
            this.addChild(obj.name, obj);
            obj.bind();
            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {
            this._addPreloadList("fdl","cmm::cmmCodeFind.xfdl");
        };
        
        // User Script
        this.registerScript("DFB_MIBUL_CONV.xfdl", function() {
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

        	// 법인코드 포커스추가
        	this.ccfCD_CORP.form.CDTextBox.setFocus();
        };

        /************************************************************************
         * 버튼 설정 : 화면(Tab) 전환시 마다 호출
         * 서브버튼 사용 및 공통버튼 강제 제어시 여기서 처리
         ************************************************************************/
        this.fnSetButton = function() {
        // 	this.FormBtns.Add.set_enable(false);
        // 	this.FormBtns.Save.set_enable(false);
        // 	this.FormBtns.Del.set_enable(false);
        }

        /************************************************************************
         * 확장 버튼 : 화면별 버튼 설정 ID, function 연결 (화면버튼관리)
         ************************************************************************/
        this.fnSetExtendButton = function() {
        	//this.btnClassifyInput = this.gfnFormButtonAdd("btnClassifyInput", "fnClassifyInput", "거래내역 입력");
        };

        /************************************************************************
         * 변수 선언
         ************************************************************************/
        this.fnSetVariable = function() {
        	this.ccfCD_CORP = this.divSearch.form.ccfCD_CORP;			// 법인코드
        	this.ccfCD_VENDOR = this.divSearch.form.ccfCD_VENDOR;		// 거래처
        	this.edtCD_TRADE = this.divSearch.form.edtCD_TRADE;			// 전표번호

        	this.dxGrid = this.divData.form.objGrid;
        	this.grSearch = this.FormInfo.GR_SEARCH;		// 권한?
        };

        /************************************************************************
         * 이벤트 설정
         ************************************************************************/
        this.fnSetEvent = function() {

        	this.gfnGridInit(this.dxGrid, this.dsList, "DF", "DFB_MIBUL_CONV");
        	this.dxGrid.BeforeUserDataSetParam = "fnGrid_BeforuserDataSetParam";
        	this.dxGrid.AfterCDTextChanged = "fnGrid_AfterCDTextChanged";
        	this.dxGrid.AfterEdit = "fnGrid_AfterEdit";

        	this.ccfCD_CORP.BeforeUserDataSetParam = "fnBeforeUserDataSetParam";
        	this.ccfCD_CORP.AfterCDTextChanged = "fnAfterCDTextChanged";

        	this.ccfCD_VENDOR.BeforeUserDataSetParam = "fnBeforeUserDataSetParam";
        	this.ccfCD_VENDOR.AfterCDTextChanged = "fnAfterCDTextChanged";

        	// 법인코드 init
        	if (this.gfnIsNull(this.ccfCD_CORP.form.CDTextBox.value)) {
        		this.ccfCD_CORP.form.DSTextBox.set_value(this.AuthClient.DS_CORP);
        		this.ccfCD_CORP.form.CDTextBox.set_value(this.AuthClient.CD_CORP);
        	}

        	// 권한체크
        	// 법인코드(1)/발의부서필수(7)
        	//if (nexacro.toNumber(this.grSearch) >= 1) {
        	//	this.divSearch.form.staCD_CORP.set_textDecoration("underline");
        	//}
        }

        /************************************************************************
         * 파라미터 설정
         ************************************************************************/
        this.fnSetParameter = function() {

        	this.dsSelect = new Dataset();
        	this.dsSelect.addColumn("CD_CORP", "string");
        	this.dsSelect.addColumn("CD_VENDOR", "string");
        	this.dsSelect.addColumn("NO_SLIP", "string");

        this.dsInsert = new Dataset();
        	this.dsInsert.addColumn("CD_CORP", "string");
        	this.dsInsert.addColumn("DT_SLIP", "string");
        	this.dsInsert.addColumn("CD_VENDOR", "string");
        	this.dsInsert.addColumn("TY_VENDOR", "string");
        	this.dsInsert.addColumn("AM_SLIP", "bigdecimal");
        	this.dsInsert.addColumn("AM_REMAIN", "bigdecimal");
        	this.dsInsert.addColumn("CD_ACNT", "string");
        	this.dsInsert.addColumn("CD_DEPTOPER", "string");
        	this.dsInsert.addColumn("CD_DEPTINVEST", "string");
        	this.dsInsert.addColumn("RM_BIGO", "string");
        	this.dsInsert.addColumn("NO_OLD", "string");
        	this.dsInsert.addColumn("NO_NEW", "string");
        	this.dsInsert.addColumn("CD_CURR", "string");
        	this.dsInsert.addColumn("AM_ACCOUNT", "bigdecimal");
        	this.dsInsert.addColumn("ID_USER", "string");

        	this.dsUpdate = new Dataset();
        	this.dsUpdate.addColumn("NO_MIBUL", "string");
        	this.dsUpdate.addColumn("DT_SLIP", "string");
        	this.dsUpdate.addColumn("CD_VENDOR", "string");
        	this.dsUpdate.addColumn("TY_VENDOR", "string");
        	this.dsUpdate.addColumn("AM_SLIP", "bigdecimal");
        	this.dsUpdate.addColumn("AM_REMAIN", "bigdecimal");
        	this.dsUpdate.addColumn("CD_ACNT", "string");
        	this.dsUpdate.addColumn("CD_DEPTOPER", "string");
        	this.dsUpdate.addColumn("CD_DEPTINVEST", "string");
        	this.dsUpdate.addColumn("RM_BIGO", "string");
        	this.dsUpdate.addColumn("NO_OLD", "string");
        	this.dsUpdate.addColumn("NO_NEW", "string");
        	this.dsUpdate.addColumn("CD_CURR", "string");
        	this.dsUpdate.addColumn("AM_ACCOUNT", "bigdecimal");
        	this.dsUpdate.addColumn("ID_USER", "string");

        	this.dsDelete = new Dataset();
        	this.dsDelete.addColumn("NO_MIBUL", "string");
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

        	this.dsSelect.setColumn(0, "CD_CORP", this.dsSearch.getColumn(0, "CD_CORP"));
        	this.dsSelect.setColumn(0, "CD_VENDOR", this.dsSearch.getColumn(0, "CD_VENDOR"));
        	this.dsSelect.setColumn(0, "NO_SLIP", this.dsSearch.getColumn(0, "NO_SLIP"));

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
        	var nrow = this.gfnGridAdd(this.dxGrid);
        	this.dsList.set_enableevent(false);

        // 	this.dsList.setColumn(nrow, "CD_TRADE", this.ccboTY_GUBUN.value);	// 입출구분
        // 	this.dsList.setColumn(nrow, "YN_CANCEL", "N");					    // 취소거래여부

        	this.dsList.set_enableevent(true);
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
        				this.dsInsert.setColumn(nrow, "CD_CORP", this.dsSearch.getColumn(0, "CD_CORP"));
        				this.dsInsert.setColumn(nrow, "DT_SLIP", this.dsList.getColumn(i, "DT_SLIP"));
        				this.dsInsert.setColumn(nrow, "CD_VENDOR", this.dsList.getColumn(i, "CD_VENDOR"));
        				this.dsInsert.setColumn(nrow, "TY_VENDOR", this.dsList.getColumn(i, "TY_VENDOR"));
        				this.dsInsert.setColumn(nrow, "AM_SLIP", this.dsList.getColumn(i, "AM_SLIP"));
        				this.dsInsert.setColumn(nrow, "AM_REMAIN", this.dsList.getColumn(i, "AM_REMAIN"));
        				this.dsInsert.setColumn(nrow, "CD_ACNT", this.dsList.getColumn(i, "CD_ACNT"));
        				this.dsInsert.setColumn(nrow, "CD_DEPTOPER", this.dsList.getColumn(i, "CD_DEPTOPER"));
        				this.dsInsert.setColumn(nrow, "CD_DEPTINVEST", this.dsList.getColumn(i, "CD_DEPTINVEST"));
        				this.dsInsert.setColumn(nrow, "RM_BIGO", this.dsList.getColumn(i, "RM_BIGO"));
        				this.dsInsert.setColumn(nrow, "NO_OLD", this.dsList.getColumn(i, "NO_OLD"));
        				this.dsInsert.setColumn(nrow, "NO_NEW", this.dsList.getColumn(i, "NO_NEW"));
        				this.dsInsert.setColumn(nrow, "CD_CURR", this.dsList.getColumn(i, "CD_CURR"));
        				this.dsInsert.setColumn(nrow, "AM_ACCOUNT", this.dsList.getColumn(i, "AM_ACCOUNT"));
        				this.dsInsert.setColumn(nrow, "ID_USER", this.AuthClient.ID_USER);

        				break;

        			case "U":
        				var nrow = this.dsUpdate.addRow();
        				this.dsUpdate.setColumn(nrow, "NO_MIBUL", this.dsList.getColumn(i, "NO_MIBUL"));
        				this.dsUpdate.setColumn(nrow, "DT_SLIP", this.dsList.getColumn(i, "DT_SLIP"));
        				this.dsUpdate.setColumn(nrow, "CD_VENDOR", this.dsList.getColumn(i, "CD_VENDOR"));
        				this.dsUpdate.setColumn(nrow, "TY_VENDOR", this.dsList.getColumn(i, "TY_VENDOR"));
        				this.dsUpdate.setColumn(nrow, "AM_SLIP", this.dsList.getColumn(i, "AM_SLIP"));
        				this.dsUpdate.setColumn(nrow, "AM_REMAIN", this.dsList.getColumn(i, "AM_REMAIN"));
        				this.dsUpdate.setColumn(nrow, "CD_ACNT", this.dsList.getColumn(i, "CD_ACNT"));
        				this.dsUpdate.setColumn(nrow, "CD_DEPTOPER", this.dsList.getColumn(i, "CD_DEPTOPER"));
        				this.dsUpdate.setColumn(nrow, "CD_DEPTINVEST", this.dsList.getColumn(i, "CD_DEPTINVEST"));
        				this.dsUpdate.setColumn(nrow, "RM_BIGO", this.dsList.getColumn(i, "RM_BIGO"));
        				this.dsUpdate.setColumn(nrow, "NO_OLD", this.dsList.getColumn(i, "NO_OLD"));
        				this.dsUpdate.setColumn(nrow, "NO_NEW", this.dsList.getColumn(i, "NO_NEW"));
        				this.dsUpdate.setColumn(nrow, "CD_CURR", this.dsList.getColumn(i, "CD_CURR"));
        				this.dsUpdate.setColumn(nrow, "AM_ACCOUNT", this.dsList.getColumn(i, "AM_ACCOUNT"));
        				this.dsUpdate.setColumn(nrow, "ID_USER", this.AuthClient.ID_USER);

        				break;

        			case "D":
        				var nrow = this.dsDelete.addRow();
        				this.dsDelete.setColumn(nrow, "NO_MIBUL", this.dsList.getColumn(i, "NO_MIBUL"));

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
        	//if (nexacro.toNumber(this.grSearch) >= 7) {
        		if (this.gfnIsNull(this.ccfCD_CORP.form.CDTextBox.text)) {
        			this.gfnAlert("법인코드가 입력되지 않았습니다.");
        			this.cfDEPT.form.CDTextBox.setFocus();
        			return false;
        		}
        	//}

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
        	} else if(svcID == "save") {
        		if (errorCode == 0) {
        			this.FormBtns.Select.click();
        		} else {
        			this.gfnAlert(errorMsg);
        		}
        	} else if (svcID == "combo") {
        		//  조회조건(완료여부)
        		var iRow = this.dsTY_GUBUN.insertRow(0);
        		this.dsTY_GUBUN.setColumn(iRow, "CD_CODE", "");
        		this.dsTY_GUBUN.setColumn(iRow, "DS_CODE", "전체");
        		this.ccboTY_GUBUN.set_index(2);
        	}
        }

        this.fnPopCallBack = function(svcID, val) {
        // 	if (val != false) {
        // 		var json = JSON.parse(val);
        // 		var no_to = parseInt(json.NO_TO);
        // 		var note = parseInt(json.NO_FROM);
        //
        // 		//trace("no_to :: " + no_to);
        // 		//trace("note :: " + note);
        //
        // 		this.dsList.set_enableevent(false);
        //
        // 		for (var row = no_to - 1; row >= 0; row--) {
        // 			var nRow = this.dsList.addRow();
        // 			//trace("note.Length :: " + note.toString().length);
        // 			var newNoteNumber = (note + row).toString().padLeft(note.toString().length, "0");
        //
        // 			this.dsList.setColumn(nRow, this.ucFlag, "I");
        //
        // 			//this.dsList.setColumn(nRow, "CD_CORP", this.ccfCD_CORP.form.CDTextBox.value);
        // 			this.dsList.setColumn(nRow, "CD_SIDEBANK", json.CD_SIDEBANK);
        // 			this.dsList.setColumn(nRow, "CD_BANK", json.CD_BANK);
        // 			this.dsList.setColumn(nRow, "DS_BANK", json.DS_BANK);
        // 			this.dsList.setColumn(nRow, "NO_ACCOUNT", json.NO_ACCOUNT);
        // 			this.dsList.setColumn(nRow, "DS_VENDOR", json.DS_VENDOR);
        // 			this.dsList.setColumn(nRow, "DT_REGIST", json.DT_REGIST);
        // 			this.dsList.setColumn(nRow, "NO_NOTES", newNoteNumber);
        // 			this.dsList.setColumn(nRow, "TY_USE", "N");
        // 			this.dsList.setColumn(nRow, "TY_GUBUN", json.TY_GUBUN);
        // 		}
        //
        // 		this.gfnSetFormStatus(this, "I");
        // 		this.dsList.set_enableevent(true);
        //
        // 		//trace(this.dsList.saveXML());
        // 		this.fnSave();
        // 	}
        }

        /************************************************************************
         * 코드파인드 이벤트
         ************************************************************************/
        this.fnBeforeUserDataSetParam = function(id, dsUserParam, nrow) {
        	if (id == "ccfCD_CORP") {
        		dsUserParam.setColumn(nrow, "CD_GROUP", "");
        	}else if (id == "ccfCD_VENDOR") {
        		dsUserParam.setColumn(nrow, "TY_VENDOR1", "전체");
        		dsUserParam.setColumn(nrow, "CD_CORP", this.dsSearch.getColumn(0, "CD_CORP"));
        	}
        	return true;
        };

        this.fnAfterCDTextChanged = function(id, codeFindData) {
        	if (id == "cfNO_ACCOUNT") {
        		this.fnSearchInit();
        	}
        }

        this.fnGrid_BeforuserDataSetParam = function(id, dsUserParam, nrow) {
        	var cdCorp = this.dsSearch.getColumn(0, "CD_CORP");
        	//var cdCorp = this.cfDEPT.form.CDTextBox.value;

        	if (id == "DFX_CFVENDOR") {
        		if ( this.gfnIsNull(cdCorp) ) {
        			this.gfnAlert("법인코드를 먼저 입력하세요.");
        			return false;
        		}

        		dsUserParam.setColumn(nrow, "TY_VENDOR1", "전체");
        		dsUserParam.setColumn(nrow, "CD_CORP", cdCorp);
        	}
        	if(id == "DFX_CFACNTUNIT" || id == "DFX_CFACNTUNIT1"){
        		if ( this.gfnIsNull(cdCorp) ) {
        			this.gfnAlert("법인코드를 먼저 입력하세요.");
        			return false;
        		}
        		dsUserParam.setColumn(nrow, "CD_GROUP", this.idGroup);
        		dsUserParam.setColumn(nrow, "CD_CORP", cdCorp);
        	}

        	return true;
        }

        this.fnGrid_AfterCDTextChanged = function(id, codeFindData) {
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

        this.fnOnitemchanged = function(obj,e)
        {
        	this.gfnGridClear(this.dxGrid);
        };


        // 사용여부변경
        this.fnChangeTyCms = function(obj,e) {
        	if(!this.gfnGridIsRow(this.dxGrid)) return;

        	var options = {
        		resizable: true
        	}

        	var nCnt = this.dsList.findRow("CHK",1);
        	if( nCnt == -1) {
        		this.gfnAlert("CMS종류변경할 행을 체크하세요.", "");
        		return;
        	}

        	this.gfnOpenPopup("DFL_INPUT_CMS","dfl::DFL_INPUT_CMS.xfdl",{},"fnfnChangeTyCmsCallback",options);
        }
        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.form_onload,this);
        };
        this.loadIncludeScript("DFB_MIBUL_CONV.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
