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
            this.set_titletext("수주-공통-공동도급사관리");
            if (Form == this.constructor)
            {
                this._setFormPosition(800,500);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("dsList", this);
            obj._setContents("");
            this.addChild(obj.name, obj);


            obj = new Dataset("_dsProc", this);
            obj._setContents("<ColumnInfo><Column id=\"TARGET\" type=\"STRING\" size=\"256\"/><Column id=\"SP\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"TARGET\">combo0</Col><Col id=\"SP\">DOXPR_CONTRCT_NO_CONT_COMBO</Col></Row><Row><Col id=\"TARGET\">combo1</Col><Col id=\"SP\">DOXPR_CONTRCT_NO_CHG_CONT_COMBO</Col></Row><Row><Col id=\"TARGET\">select</Col><Col id=\"SP\">DODPR_ARCH_CONT_CO_CONTRCT_SELECT</Col></Row><Row><Col id=\"TARGET\">save</Col><Col id=\"SP\">DODPR_ARCH_CONT_CO_CONTRCT_MERGE</Col></Row><Row><Col id=\"TARGET\">saveChk</Col><Col id=\"SP\">DOAPR_CO_CONTRCT_CHECK</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsSearch", this);
            obj._setContents("<ColumnInfo><Column id=\"CD_FIELD\" type=\"STRING\" size=\"256\"/><Column id=\"DS_FIELD\" type=\"STRING\" size=\"256\"/><Column id=\"NO_CONT\" type=\"STRING\" size=\"256\"/><Column id=\"NO_CHG_CONT\" type=\"INT\" size=\"256\"/></ColumnInfo><Rows><Row/></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsNO_CONT", this);
            obj._setContents("<ColumnInfo><Column id=\"NO_CONT\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsNO_CHG_CONT", this);
            obj._setContents("");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsChk", this);
            obj._setContents("");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsSave", this);
            obj._setContents("");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Div("divSearch","0.0","10.0",null,"46.0","0",null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_cssclass("div_SEARCH_Bg");
            obj.set_formscrolltype("none");
            this.addChild(obj.name, obj);

            obj = new Div("ccfCD_FIELD","0.0","10.0","400","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.getSetter("CodeFindName").set("DOXPR_CONTRCT_CODEFIND");
            obj.getSetter("CDTextWidth").set("80");
            obj.set_taborder("1");
            obj.set_url("cmm::cmmCodeFind.xfdl");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("staCD_SITE","ccfCD_FIELD:0.0","10.0","92.0","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("0");
            obj.set_text("현장코드");
            obj.set_cssclass("sta_WF_SchLabel");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("staCONT1","staCD_SITE:0.0","10.0","92.0","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("2");
            obj.set_text("차수");
            obj.set_cssclass("sta_WF_SchLabel");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("staCONT2","staCONT1:0.0","10.0","92.0","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("4");
            obj.set_text("회수");
            obj.set_cssclass("sta_WF_SchLabel");
            this.divSearch.addChild(obj.name, obj);

            obj = new Combo("ccboNO_CONT","staCONT2:0.0","10.0","50","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("3");
            obj.set_codecolumn("NO_CONT");
            obj.set_datacolumn("NO_CONT");
            obj.set_innerdataset("dsNO_CONT");
            obj.set_text("");
            obj.set_index("-1");
            this.divSearch.addChild(obj.name, obj);

            obj = new Combo("ccboNO_CHG_CONT","ccboNO_CONT:0.0","10.0","50","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("5");
            obj.set_codecolumn("NO_CHG_CONT");
            obj.set_datacolumn("NO_CHG_CONT");
            obj.set_innerdataset("dsNO_CHG_CONT");
            this.divSearch.addChild(obj.name, obj);

            obj = new Div("divData","0",null,null,"457","0","0",null,null,null,null,this);
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
            obj = new BindItem("item2","divSearch.form.ccfCD_FIELD.form.CDTextBox","value","dsSearch","CD_FIELD");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item0","divSearch.form.ccfCD_FIELD.form.DSTextBox","value","dsSearch","DS_FIELD");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item3","divSearch.form.ccboNO_CONT","value","dsSearch","NO_CONT");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item4","divSearch.form.ccboNO_CHG_CONT","value","dsSearch","NO_CHG_CONT");
            this.addChild(obj.name, obj);
            obj.bind();
            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {
            this._addPreloadList("fdl","cmm::cmmCodeFind.xfdl");
        };
        
        // User Script
        this.registerScript("DOZ_CO_CONTRCT.xfdl", function() {
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
        	this.gridGoloring();

        	this.fnSetComboByNoCont(this.getOwnerFrame().CD_FIELD);
        	this.fnSetComboByNoChgCont(this.getOwnerFrame().NO_CONT);

        	if(!this.gfnIsNull(this.getOwnerFrame().CD_FIELD))
        	{
        		this.dsSearch.setColumn(0, "CD_FIELD", this.getOwnerFrame().CD_FIELD);
        		this.dsSearch.setColumn(0, "DS_FIELD", this.getOwnerFrame().DS_FIELD);
        		this.dsSearch.setColumn(0, "NO_CONT", this.getOwnerFrame().NO_CONT);
        		this.dsSearch.setColumn(0, "NO_CHG_CONT", this.getOwnerFrame().NO_CHG_CONT);

        		this.fnSelect();
        	}
        };

        /************************************************************************
         * 버튼 설정 : 화면(Tab) 전환시 마다 호출
         * 서브버튼 사용 및 공통버튼 강제 제어시 여기서 처리
         ************************************************************************/
        this.fnSetButton = function() {
        	this.FormBtns.Select.set_enable(true);
        	this.FormBtns.Add.set_enable(true);
        	this.FormBtns.Del.set_enable(true);

        	this.FormBtns.Save.set_enable(false);
        	//this.FormBtns.Excel.set_enable(true);
        	//this.FormBtns.Print.set_enable(true);

        	this.divSearch.form.ccfCD_FIELD.set_enable(false);
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
           this.ccfCD_FIELD = this.divSearch.form.ccfCD_FIELD;
           this.dxGrid = this.divData.form.objGrid;
        };

        /************************************************************************
         * 이벤트 설정
         ************************************************************************/
        this.fnSetEvent = function() {
        	this.ccfCD_FIELD.BeforeUserDataSetParam = "fnBeforeUserDataSetParam";

        	// 그리드 초기화
        	this.gfnGridInit(this.dxGrid, this.dsList, "DO", "DOZ_CO_CONTRCT");

        	// 그리드 코드파인드 설정
        	this.dxGrid.BeforeUserDataSetParam = "fnGrid_BeforeUserDataSetParam";

        	// 그리드 코드파인드 값 변경
        	this.dxGrid.AfterCDTextChanged = "fnGrid_AfterCDTextChanged";

        	this.dxGrid.EnterCell = "fnGrid_EnterCell";
        };

        /************************************************************************
         * 파라미터 설정
         ************************************************************************/
        this.fnSetParameter = function() {
        	this.dsSelect = new Dataset();
        	this.dsSelect.addColumn("CD_FIELD", "string");
        	this.dsSelect.addColumn("NO_CONT", "int");
        	this.dsSelect.addColumn("NO_CHG_CONT", "int");

        }

        /************************************************************************
         * 차수 콤보 설정
         ************************************************************************/
        this.fnSetComboByNoCont = function(CD_FIELD) {
        	this.dsCombo = new Dataset();
        	this.dsCombo.addColumn("CD_FIELD", "STRING");

        	this.dsCombo.addRow();
        	this.dsCombo.setColumn(0, "CD_FIELD", CD_FIELD);

        	var strSvcId    = "combo0";
        	var strSvcType  = "select";
        	var inProc		= "_dsProc";
        	var inData      = "combo0=dsCombo";
        	var outData     = "dsNO_CONT=combo00";
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

        /************************************************************************
         * 횟수 콤보 설정
         ************************************************************************/
        this.fnSetComboByNoChgCont = function(NO_CONT) {

        	this.dsCombo1 = new Dataset();
        	this.dsCombo1.addColumn("CD_FIELD", "STRING");
        	this.dsCombo1.addColumn("NO_CONT", "STRING");

        	this.dsCombo1.addRow();
        	this.dsCombo1.setColumn(0, "CD_FIELD", this.getOwnerFrame().CD_FIELD);
        	this.dsCombo1.setColumn(0, "NO_CONT", NO_CONT);

        	var strSvcId    = "combo1";
        	var strSvcType  = "select";
        	var inProc		= "_dsProc";
        	var inData      = "combo1=dsCombo1";
        	var outData     = "dsNO_CHG_CONT=combo10";
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

        /************************************************************************
         * 컨트롤 이벤트
         ************************************************************************/
         /*
          *	조회 버튼
          */
        this.fnSelect = function() {
        	this.gfnGridBeforeSelect(this.dxGrid);

        	this.dsSelect.clearData();
        	this.dsSelect.addRow();
        	this.dsSelect.setColumn(0, "CD_FIELD", this.dsSearch.getColumn(0, "CD_FIELD"));
        	this.dsSelect.setColumn(0, "NO_CONT", this.dsSearch.getColumn(0, "NO_CONT"));
        	this.dsSelect.setColumn(0, "NO_CHG_CONT", this.dsSearch.getColumn(0, "NO_CHG_CONT"));

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
        						strArg, 		// 입력값으로 보낼 arguments, strFormData="20120607"
        						callBackFnc); // 통신방법 정의 [생략가능]
        }

        /*
         *	입력 버튼
         */
        this.fnAdd = function() {
        	var nrow = this.gfnGridAdd(this.dxGrid, "bottom"); // top (default), bottom, current

        	var rtChk = 100 - this.dsList.getSum("RT_POTN");
        	var ynChk = this.dsList.getCaseCount("YN_JUGAN == 'Y'")

        	this.dsList.set_updatecontrol(false);
        	this.dsList.setColumn(nrow, "CD_FIELD", this.dsSearch.getColumn(0, "CD_FIELD"));
        	this.dsList.setColumn(nrow, "NO_CONT", this.dsSearch.getColumn(0, "NO_CONT"));
        	this.dsList.setColumn(nrow, "NO_CHG_CONT", this.dsSearch.getColumn(0, "NO_CHG_CONT"));
        	this.dsList.setColumn(nrow, "YN_JUGAN", ynChk > 0 ? "N" : "Y");
        	this.dsList.setColumn(nrow, "RT_POTN", rtChk);
        	this.dsList.setColumn(nrow, "ID_ADD", this.objApp.gdsUserInfo.getColumn(0, "ID_USER"));
        	this.dsList.set_updatecontrol(true);
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

        	this.dsSave.copyData(this.dsList, true);

        	if (this.dsSave.rowcount == 0) return;

        	if(!this.fnGridCustmValidate()) return;

        	var strSvcId    = "save";
        	var strSvcType  = "save";
        	var inProc		= "_dsProc";
        	var inData      = "save=dsSave saveChk=dsSearch";
        	var outData     = "";
        	var strArg      = "";
        	var callBackFnc = "fnCallback";

        	this.gfnTransaction( strSvcId , 	// transaction을 구분하기 위한 svc id값
        						strSvcType , 	// transaction을 요청할 구분
        						inProc,			// Procedure 정보 Dataset 이름
        						inData , 		// 입력값으로 보낼 dataset id , a=b형태로 실제이름과 입력이름을 매칭
        						outData , 		// 처리결과값으로 받을 dataset id, a=b형태로 실제이름과 입력이름을 매칭
        						strArg, 			// 입력갑스로 보낼 arguments, strFormData="20120607"
        						callBackFnc,false); // 통신방법 정의 [생략가능]
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


        /************************************************************************
         * 콜백 이벤트
         ************************************************************************/
        /*
         *	콜백 처리
         */
        this.fnCallback = function(svcID, errorCode, errorMsg)
        {
        	if (errorCode == 0) {
        		if (svcID == "select") {
        // 				if(this.dsList.rowcount < 1){
        // 					this.FormBtns.Add.click();
        // 				}

        				this.FormBtns.Add.set_enable(true);
        				this.gfnGridAfterSelect(this.dxGrid);
        			}
        			else if(svcID == "save") {
        				this.FormBtns.Select.click();
        			}
        	} else {
        		this.gfnAlert(errorMsg);
        	}
        }

        /************************************************************************
         * 코드파인드 이벤트
         ************************************************************************/
        this.fnBeforeUserDataSetParam = function(id, dsUserParam, nrow)
         {
        	if(id == "ccfCD_FIELD")
        	{
        		dsUserParam.setColumn(nrow, "TY_PROJ", this.getOwnerFrame().TY_PROJ);
        	}
        	return true;
         }


        /************************************************************************
         * 기타 이벤트
         ************************************************************************/

         /*한대운 수정: 셀수정 설정*/
        this.fnGrid_EnterCell = function(obj, row, cell){
            var colnm = this.gfnGridGetBindColumnNameByIndex(obj, cell);
        	if(colnm == "NM_CONCERN" || colnm == "AM_TOT_OUR") return false;

        	if(colnm == "CD_CO_CONTRCT"){
        		if(this.gfnIsNull(this.gfnGetFlag(this.dsList, row))) return false;
        	}
        	return true;
         };

        this.dsSearch_onvaluechanged = function(obj,e)
        {
        	if(e.oldvalue != e.newvalue) {
        		this.gfnSetFormStatus(this);	// 폼상태 초기화
        		this.gfnGridClear(this.dxGrid);
        	}
        };


        this.fnGrid_BeforeUserDataSetParam = function(id, dsUserParam, nrow) {
        	// 그리드에서 코드파인드 id는 그리드셋팅의 코드파인드 식별ID
         	if (id == "DOX_CFVENDOR_DH") {
        		if(this.gfnIsNull(this.dsSearch.getColumn(0, "CD_FIELD"))){
        			this.gfnAlert("현장 코드를 입력해주십시오.");
        			return false;
        		}

        		dsUserParam.setColumn(nrow, "CD_CORP", this.objApp.gdsUserInfo.getColumn(0, "CD_CORP"));
        		dsUserParam.setColumn(nrow, "CD_SITE", "");
        		dsUserParam.setColumn(nrow, "TY_VENDOR", "");
         	}
        	return true;
        }

        this.fnGrid_AfterCDTextChanged = function(id, codeFindData) {
        	if(id == "DOX_CFVENDOR_DH") {
        		var arr = codeFindData;
        		if(arr.length > 0) {
        			var CD_VENDOR = arr[0].CD_VENDOR;
        			var chkCnt = this.dsList.getCaseCount("CD_CO_CONTRCT == '" + CD_VENDOR + "'");
        			if(chkCnt > 1){
        				this.gfnAlert("공동도급사 코드가 중복입니다.");
        				this.dsList.setColumn(this.dsList.rowposition,"CD_CO_CONTRCT","")
        				this.dsList.setColumn(this.dsList.rowposition,"NM_CO_CONTRCT","")
        				return false;
        			}
        		}
        	}

        	return true;
        };

        this.fnGridCustmValidate = function(){
        	var cntChk = this.dsSave.getCaseCount("nx_flag == 'D' || nx_flag == 'DU'");

        	this.dsSave.filter("nx_flag == 'I' || nx_flag == 'U' || nx_flag == undefined");
        	this.dsChk.copyData(this.dsSave, true);
        	this.dsSave.filter("");

        	if(cntChk != this.dsSave.getRowCount()){
        		var ynChk = this.dsChk.getCaseCount("YN_JUGAN == 'Y'");
        		if(ynChk !== 1){
        			this.gfnAlert("Main여부를 확인해주세요.");
        			return false;
        		}


        		var rtChk = this.dsChk.getSum("RT_POTN");
        		if(rtChk != '100'){
        			this.gfnAlert("지분율을 확인해주세요.");
        			return false;
        		}

        	}
        	return true;
        }

        this.divSearch_ccboNO_CONT_onitemchanged = function(obj,e)
        {
        	this.fnSetComboByNoChgCont(e.postvalue);
        };

        this.dsList_onvaluechanged = function(obj,e)
        {
        	var amSup, amTxf, amVat = 0;

        	if(e.oldvalue != e.newvalue) {
        		if(e.columnid == "AM_SUP_OUR" || e.columnid == "AM_TXF_OUR" || e.columnid == "AM_VAT_OUR"){
        			amSup = nexacro.toNumber(obj.getColumn(e.row, "AM_SUP_OUR"), 0);
        			amTxf = nexacro.toNumber(obj.getColumn(e.row, "AM_TXF_OUR"), 0);
        			amVat = nexacro.toNumber(obj.getColumn(e.row, "AM_VAT_OUR"), 0);

        			obj.setColumn(e.row, "AM_TOT_OUR", amSup+amTxf+amVat);
        		}
        	}
        };

        //readonly color 설정
        this.gridGoloring = function(){
        	this.gfnGridColumnColor(this.dxGrid, "CD_CO_CONTRCT","BACK_ReadOnly", "nx_flag==null");
        	this.gfnGridColumnColor(this.dxGrid, "AM_TOT_OUR","BACK_ReadOnly", "nx_flag==null");
        }
        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.form_onload,this);
            this.divSearch.form.ccboNO_CONT.addEventHandler("onitemchanged",this.divSearch_ccboNO_CONT_onitemchanged,this);
            this.dsList.addEventHandler("onvaluechanged",this.dsList_onvaluechanged,this);
            this.dsSearch.addEventHandler("onvaluechanged",this.dsSearch_onvaluechanged,this);
        };
        this.loadIncludeScript("DOZ_CO_CONTRCT.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
