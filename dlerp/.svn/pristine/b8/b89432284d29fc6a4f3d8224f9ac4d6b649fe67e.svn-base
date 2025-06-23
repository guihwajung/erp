(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("DAV_YEARENDTRANSDLG");
            this.set_titletext("정산결과 급여이관");
            this.getSetter("maxwidth").set("395");
            this.getSetter("maxheight").set("340");
            if (Form == this.constructor)
            {
                this._setFormPosition(340,270);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("dsList", this);
            obj._setContents("");
            this.addChild(obj.name, obj);


            obj = new Dataset("_dsProc", this);
            obj._setContents("<ColumnInfo><Column id=\"TARGET\" type=\"STRING\" size=\"256\"/><Column id=\"SP\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"TARGET\">select</Col><Col id=\"SP\">DAVPR_CHKYEARENDTRANS_SELECT</Col></Row><Row><Col id=\"TARGET\">update</Col><Col id=\"SP\">DAVPR_YEARENDTRANS_UPDATE</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsSN_SALARY", this);
            obj._setContents("<ColumnInfo><Column id=\"CODE\" type=\"STRING\" size=\"256\"/><Column id=\"VALUE\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"CODE\">1</Col><Col id=\"VALUE\">1</Col></Row><Row><Col id=\"VALUE\">2</Col><Col id=\"CODE\">2</Col></Row><Row><Col id=\"CODE\">3</Col><Col id=\"VALUE\">3</Col></Row><Row><Col id=\"CODE\">4</Col><Col id=\"VALUE\">4</Col></Row><Row><Col id=\"CODE\">5</Col><Col id=\"VALUE\">5</Col></Row></Rows>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Static("staTITLE","0","10",null,"30","3",null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_text("연말정산 급여이관");
            obj.set_cssclass("sta_TITLE_Bg");
            obj.set_textAlign("left");
            this.addChild(obj.name, obj);

            obj = new Static("staCD_CORP","0","102","100","30",null,null,null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_text("법인");
            obj.set_cssclass("sta_WF_tablelabel");
            obj.set_visible("true");
            this.addChild(obj.name, obj);

            obj = new Static("sta06","99","102","241","30",null,null,null,null,null,null,this);
            obj.set_taborder("3");
            obj.set_cssclass("sta_WF_tablebg");
            obj.set_visible("true");
            this.addChild(obj.name, obj);

            obj = new Static("staID_RESIDENT","0","staCD_CORP:-1","100","30",null,null,null,null,null,null,this);
            obj.set_taborder("4");
            obj.set_text("특정사번");
            obj.set_cssclass("sta_WF_tablelabel");
            this.addChild(obj.name, obj);

            obj = new Static("sta08","99","131","241","30",null,null,null,null,null,null,this);
            obj.set_taborder("5");
            obj.set_cssclass("sta_WF_tablebg");
            this.addChild(obj.name, obj);

            obj = new Div("ccfCD_CORP","staCD_CORP:5","107","228","20",null,null,null,null,null,null,this);
            obj.getSetter("CodeFindName").set("DAX_CFCORP_CODEFIND");
            obj.getSetter("CDTextWidth").set("30");
            obj.set_taborder("1");
            obj.set_url("cmm::cmmCodeFind.xfdl");
            obj.set_text("");
            obj.set_visible("true");
            obj.getSetter("BeforeUserDataSetParam").set("fnBeforeUserDataSetParam");
            obj.getSetter("AfterCDTextChanged").set("fnAfterCDTextChanged");
            this.addChild(obj.name, obj);

            obj = new Div("divBtns","69","234","200","27",null,null,null,null,null,null,this);
            obj.set_taborder("6");
            this.addChild(obj.name, obj);

            obj = new Button("btnCANCLE","114","0","60","27",null,null,null,null,null,null,this.divBtns.form);
            obj.set_taborder("0");
            obj.set_text("취소");
            this.divBtns.addChild(obj.name, obj);

            obj = new Button("btnOK","28","0","60","27",null,null,null,null,null,null,this.divBtns.form);
            obj.set_taborder("1");
            obj.set_text("확인");
            this.divBtns.addChild(obj.name, obj);

            obj = new Div("ccfID_RESIDENT","staID_RESIDENT:5","136","228","20",null,null,null,null,null,null,this);
            obj.getSetter("CDTextWidth").set("110");
            obj.set_taborder("7");
            obj.set_url("cmm::cmmCodeFind.xfdl");
            obj.set_text("");
            obj.getSetter("CodeFindName").set("DAX_CFEMP");
            obj.getSetter("BeforeUserDataSetParam").set("fnBeforeUserDataSetParam");
            obj.getSetter("AfterCDTextChanged").set("fnAfterCDTextChanged");
            this.addChild(obj.name, obj);

            obj = new Static("staWORK_BASE","0","44","100","30",null,null,null,null,null,null,this);
            obj.set_taborder("8");
            obj.set_text("적용년월");
            obj.set_cssclass("sta_WF_tablelabelE");
            this.addChild(obj.name, obj);

            obj = new Static("sta04","99","44","241","30",null,null,null,null,null,null,this);
            obj.set_taborder("9");
            obj.set_cssclass("sta_WF_tablebg");
            obj.set_textAlign("right");
            this.addChild(obj.name, obj);

            obj = new Div("ctclWORK_BASE","staWORK_BASE:5","49","80","20",null,null,null,null,null,null,this);
            obj.set_taborder("10");
            obj.set_url("cmm::cmmCalMM.xfdl");
            this.addChild(obj.name, obj);

            obj = new Static("staYM_SALARY","0","73","100","30",null,null,null,null,null,null,this);
            obj.set_taborder("11");
            obj.set_text("급여이관년월");
            obj.set_cssclass("sta_WF_tablelabelE");
            this.addChild(obj.name, obj);

            obj = new Static("sta00","99","73","100","30",null,null,null,null,null,null,this);
            obj.set_taborder("12");
            obj.set_cssclass("sta_WF_tablebg");
            obj.set_textAlign("right");
            this.addChild(obj.name, obj);

            obj = new Div("ctclYM_SALARY","staYM_SALARY:5","78","80","20",null,null,null,null,null,null,this);
            obj.set_taborder("13");
            obj.set_url("cmm::cmmCalMM.xfdl");
            this.addChild(obj.name, obj);

            obj = new Static("staSN_SALARY","198","73","80","30",null,null,null,null,null,null,this);
            obj.set_taborder("14");
            obj.set_text("지급순서");
            obj.set_cssclass("sta_WF_tablelabelE");
            this.addChild(obj.name, obj);

            obj = new Static("sta01","277","73","63","30",null,null,null,null,null,null,this);
            obj.set_taborder("15");
            obj.set_cssclass("sta_WF_tablebg");
            obj.set_textAlign("right");
            this.addChild(obj.name, obj);

            obj = new Combo("cboSN_SALARY","283","78","50","20",null,null,null,null,null,null,this);
            obj.set_taborder("16");
            obj.set_codecolumn("CODE");
            obj.set_datacolumn("VALUE");
            obj.set_innerdataset("dsSN_SALARY");
            obj.set_text("비과세 포함");
            obj.set_value("1");
            obj.set_index("0");
            this.addChild(obj.name, obj);

            obj = new TextArea("txt00","0","170",null,"54","3",null,null,null,null,null,this);
            obj.set_taborder("17");
            obj.set_value("◆ 자료가 존재할 경우에는 삭제하고 재생성합니다.\n\n◆ 중도정산일 경우 적용월을 입력하십시오.");
            obj.set_border("0px none");
            this.addChild(obj.name, obj);

            obj = new Combo("cboYN_MID","346","49","77","20",null,null,null,null,null,null,this);
            obj.set_taborder("18");
            obj.set_datacolumn("datacolumn");
            obj.set_codecolumn("codecolumn");
            obj.set_visible("false");
            var cboYN_MID_innerdataset = new nexacro.NormalDataset("cboYN_MID_innerdataset", obj);
            cboYN_MID_innerdataset._setContents("<ColumnInfo><Column id=\"codecolumn\" size=\"256\"/><Column id=\"datacolumn\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"datacolumn\">연말정산</Col><Col id=\"codecolumn\">N</Col></Row><Row><Col id=\"datacolumn\">중도정산</Col><Col id=\"codecolumn\">Y</Col></Row></Rows>");
            obj.set_innerdataset(cboYN_MID_innerdataset);
            obj.set_text("연말정산");
            obj.set_value("1");
            obj.set_index("0");
            this.addChild(obj.name, obj);

            obj = new Edit("edtNO_APPLY","346","108","79","20",null,null,null,null,null,null,this);
            obj.set_taborder("19");
            obj.set_visible("false");
            this.addChild(obj.name, obj);

            obj = new Edit("edtID_SABUN","347","78","79","20",null,null,null,null,null,null,this);
            obj.set_taborder("20");
            obj.set_visible("false");
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
            this._addPreloadList("fdl","cmm::cmmCodeFind.xfdl");
            this._addPreloadList("fdl","cmm::cmmCalMM.xfdl");
        };
        
        // User Script
        this.registerScript("DAV_YEARENDTRANSDLG.xfdl", function() {
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


        	//작업구분
        	this.cboYN_MID.set_value(this.getOwnerFrame().YN_MID);

        	//적용년도(현재)
        	this.ctclWORK_BASE.set_url(this.cboYN_MID.value=="Y"?"cmm::cmmCalMM.xfdl":"cmm::cmmCalYY.xfdl");
        	this.ctclWORK_BASE.form.TextBox.set_value(this.getOwnerFrame().YR_BASE);
        	this.staWORK_BASE.set_text(this.cboYN_MID.value=="Y"?"적용년월":"적용년도");

        	// 법인코드 및 법인명 기본세팅
        	this.ccfCD_CORP.form.CDTextBox.set_value(this.getOwnerFrame().CD_CORP);
        	this.ccfCD_CORP.form.DSTextBox.set_value(this.getOwnerFrame().DS_CORP);

        	//주민번호
        	this.ccfID_RESIDENT.form.CDTextBox.set_value(nexacro.replaceAll(this.getOwnerFrame().ID_RESIDENT, "-", ""));
        	this.ccfID_RESIDENT.form.DSTextBox.set_value(this.getOwnerFrame().DS_HNAME);

        	this.edtNO_APPLY.set_value(this.getOwnerFrame().NO_APPLY);
        	//사번
        	this.edtID_SABUN.set_value(this.getOwnerFrame().ID_SABUN);

        	//급여이관년월
        	this.ctclYM_SALARY.form.TextBox.set_value(this.gfnGetDate().substr(0,6));
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
        };

        /************************************************************************
         * 확장 버튼 : 화면별 버튼 설정 ID, function 연결 (화면버튼관리)
         ************************************************************************/

        /************************************************************************
         * 변수 선언
         ************************************************************************/
        this.fnSetVariable = function() {

        	this.grSearch = this.FormInfo.GR_SEARCH;					          // 권한
        	this.cdGroup = this.AuthClient.CD_GROUP;					          // 그룹코드
        };

        /************************************************************************
         * 이벤트 설정
         ************************************************************************/
        this.fnSetEvent = function() {

        };

        /************************************************************************
         * 파라미터 설정
         ************************************************************************/
        this.fnSetParameter = function() {
        	// 조회
        	this.dsSelect = new Dataset();
        	this.dsSelect.addColumn("ID_SABUN", "string");
        	this.dsSelect.addColumn("YM_BASE", "string");
        	this.dsSelect.addColumn("NO_APPLY", "int");
        	this.dsSelect.addColumn("CD_CORP", "string");
        	this.dsSelect.addColumn("YY_BASE", "string");
        	this.dsSelect.addColumn("MM_BASE", "string");
        	this.dsSelect.addColumn("YN_MID", "string");

        	//수정
        	this.dsUpdate = new Dataset();
        	this.dsUpdate.addColumn("ID_RESIDENT", "string");
        	this.dsUpdate.addColumn("YY_BASE", "string");
        	this.dsUpdate.addColumn("MM_BASE", "string");
        	this.dsUpdate.addColumn("NO_APPLY", "int");
        	this.dsUpdate.addColumn("YN_MID", "string");
        	this.dsUpdate.addColumn("YM_SALARY", "string");
        	this.dsUpdate.addColumn("TY_SALARY", "string");
        	this.dsUpdate.addColumn("SN_SALARY", "int");
        	this.dsUpdate.addColumn("ID_INSERT", "string");
        	this.dsUpdate.addColumn("CD_CORP", "string");


        };

        /************************************************************************
         * 컨트롤 이벤트
         ************************************************************************/
         /*
          *	조회 버튼
          */
        this.fnSelect = function() {

        	if (!this.fnSelectValidate()) return false;

        	this.dsSelect.clearData();
        	this.dsSelect.addRow();

        	this.dsSelect.setColumn(0, "ID_SABUN", this.edtID_SABUN.value);
        	this.dsSelect.setColumn(0, "YM_BASE", this.ctclYM_SALARY.form.TextBox.value);
        	this.dsSelect.setColumn(0, "NO_APPLY", this.edtNO_APPLY.value);
        	this.dsSelect.setColumn(0, "CD_CORP", this.ccfCD_CORP.form.CDTextBox.value);
        	this.dsSelect.setColumn(0, "YY_BASE", this.cboYN_MID.value=="Y"?this.ctclWORK_BASE.form.TextBox.value:this.ctclWORK_BASE.form.TextBox.value.substring(0,4));
        	this.dsSelect.setColumn(0, "MM_BASE", "12");
        	//this.dsSelect.setColumn(0, "MM_BASE", this.cboYN_MID.value=="Y"?this.ctclWORK_BASE.form.TextBox.value.substring(4,6):"12");
        	this.dsSelect.setColumn(0, "YN_MID", this.cboYN_MID.value);

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
        						callBackFnc); 	// 통신방법 정의 [생략가능]
        };

        this.fnExcute = function(){

        	this.dsUpdate.clearData();
        	var nrow = this.dsUpdate.addRow();

        	this.dsUpdate.setColumn(nrow, "ID_RESIDENT", this.ccfID_RESIDENT.form.CDTextBox.value);
        	this.dsUpdate.setColumn(nrow, "YY_BASE", this.cboYN_MID.value=="Y"?this.ctclWORK_BASE.form.TextBox.value:this.ctclWORK_BASE.form.TextBox.value.substring(0,4));
        	this.dsUpdate.setColumn(nrow, "MM_BASE", this.cboYN_MID.value=="Y"?this.ctclWORK_BASE.form.TextBox.value.substring(4,6):"12");
        	this.dsUpdate.setColumn(nrow, "NO_APPLY", this.edtNO_APPLY.value);
        	this.dsUpdate.setColumn(nrow, "YN_MID", this.cboYN_MID.value);
        	this.dsUpdate.setColumn(nrow, "YM_SALARY", this.ctclYM_SALARY.form.TextBox.value);
        	this.dsUpdate.setColumn(nrow, "TY_SALARY", "S");
        	this.dsUpdate.setColumn(nrow, "SN_SALARY", this.cboSN_SALARY.value);
        	this.dsUpdate.setColumn(nrow, "ID_INSERT", this.AuthClient.ID_USER);
        	this.dsUpdate.setColumn(nrow, "CD_CORP", this.ccfCD_CORP.form.CDTextBox.value);

        	var strSvcId    = "save";
        	var strSvcType  = "grid";
        	var inProc		= "_dsProc";
        	var inData      = "update=dsUpdate";
        	var outData     = "";
        	var strArg      = "";
        	var callBackFnc = "fnCallback";

        	this.gfnTransaction( strSvcId , 	// transaction을 구분하기 위한 svc id값
        						strSvcType , 	// trabsaction을 요청할 구분
        						inProc,			// Procedure 정보 Dataset 이름
        						inData , 		// 입력값으로 보낼 dataset id , a=b형태로 실제이름과 입력이름을 매칭
        						outData , 		// 처리결과값으로 받을 dataset id, a=b형태로 실제이름과 입력이름을 매칭
        						strArg, 	    // 입력갑스로 보낼 arguments, strFormData="20120607"
        						callBackFnc); 	// 통신방법 정의 [생략가능]
        };
         /************************************************************************
         * Validate
         ************************************************************************/
        this.fnSelectValidate = function() {

         	var validate = true;

        	//법인
        	if (this.gfnIsNull(this.ccfCD_CORP.form.CDTextBox.value)) {
        		validate = false;
        		this.fnVaidateCallback = function() {
        			this.ccfCD_CORP.form.CDTextBox.setFocus();
        		}
        		this.gfnAlert("법인코드를 입력하세요.", "fnVaidateCallback");
        		return validate;
        	}else if (this.gfnIsNull(this.ctclWORK_BASE.form.TextBox.value)) {
        		validate = false;
        		this.fnVaidateCallback = function() {
        			this.ctclWORK_BASE.form.TextBox.setFocus();
        		}
        		this.gfnAlert(this.staWORK_BASE.text+"을/를 입력하세요.", "fnVaidateCallback");
        		return validate;
        	}else if (this.gfnIsNull(this.ctclYM_SALARY.form.TextBox.value)) {
        		validate = false;
        		this.fnVaidateCallback = function() {
        			this.ctclYM_SALARY.form.TextBox.setFocus();
        		}
        		this.gfnAlert("급여이관년월을 입력하세요.", "fnVaidateCallback");
        		return validate;
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
        		if(this.dsList.rowcount > 0){
        			if(this.dsList.getColumn(0, "YEAREND_CLOSE") == "Y"){
        				this.gfnConfirm("이미 정산결과가 지급순서" + this.dsList.getColumn(0, "SN_SALARY") + " 차 급여에 이관되어 있습니다. 새로 작업하시겠습니까?", "fnPopupCallback");
        			}else{
        				this.fnExcute();
        			}
        		}else{
        			this.fnExcute();
        		}
        	} else if (svcID == "save"){
        		if (errorCode == 0) {
        			this.fnUpdateCallback = function() {
        				this.getParentContext().close(true);
        			}
        			this.gfnAlert("급여이관작업이 완료되었습니다.", "fnUpdateCallback");
        		} else {
        			this.gfnAlert(errorMsg);
        		}
        	}
        };

        this.fnPopupCallback = function(strId, val){
        	if(val){
        		this.fnExcute();
        	}
        };

        /************************************************************************
         * 코드파인드 이벤트
         ************************************************************************/
        this.fnBeforeUserDataSetParam = function(id, dsUserParam, nrow) {

         	switch(id) {
        		case "ccfCD_CORP": // 법인코드
        			dsUserParam.setColumn(nrow, "CD_CORP", this.AuthClient.CD_CORP);
        			dsUserParam.setColumn(nrow, "GR_SEARCH", this.FormInfo.GR_SEARCH);
        			dsUserParam.setColumn(nrow, "ID_USER", this.AuthClient.ID_USER);
        			break;

        		case "ccfID_RESIDENT"://주민번호
        			if (this.gfnIsNull(this.ccfCD_CORP.form.CDTextBox.value)) {
        				this.fnBeforeUserCallback = function() {
        						this.ccfCD_CORP.form.CDTextBox.setFocus();
        					}
        					this.gfnAlert("법인코드를 입력하세요.", "fnBeforeUserCallback");
        					return false;
        			}
        			dsUserParam.setColumn(nrow, "GUBUN", "E");
        			dsUserParam.setColumn(nrow, "CD_CORP", this.ccfCD_CORP.form.CDTextBox.value);
        			break;

        		default:
         	}
         	return true;
        };

        this.fnAfterCDTextChanged = function(id, codeFindData) {
        	var arr = codeFindData;

        	switch(id) {
        		case "ccfCD_CORP": // 법인코드
        			this.ccfID_RESIDENT.form.CDTextBox.set_value("");
        			this.ccfID_RESIDENT.form.DSTextBox.set_value("");
        			this.edtID_SABUN.set_value("");
        			break;
        		case "ccfID_RESIDENT": // 주민번호
        			//this.ccfID_RESIDENT.form.CDTextBox.set_value(arr[0]["ID_RESIDENT"]);
        			//this.ccfID_RESIDENT.form.DSTextBox.set_value(arr[0]["DS_HNAME"]);

        			if(arr.length > 0) {
        				this.edtID_SABUN.set_value(arr[0]["ID_SABUN"]);
        			}else{
        				this.edtID_SABUN.set_value("");
        			}

        			break;

        		default:
        	}
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

        this.btnOK_onclick = function(obj,e)
        {
        	if(!this.fnSelectValidate()) return false;

        	this.fnSelect();
        };

        this.btnCANCLE_onclick = function(obj,e)
        {
        	this.getParentContext().close(false);
        };
        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.form_onload,this);
            this.divBtns.form.btnCANCLE.addEventHandler("onclick",this.btnCANCLE_onclick,this);
            this.divBtns.form.btnOK.addEventHandler("onclick",this.btnOK_onclick,this);
            this.sta04.addEventHandler("onclick",this.sta04_onclick,this);
            this.sta00.addEventHandler("onclick",this.sta04_onclick,this);
            this.sta01.addEventHandler("onclick",this.sta04_onclick,this);
            this.cboYN_MID.addEventHandler("onitemchanged",this.fnSearchInit,this);
        };
        this.loadIncludeScript("DAV_YEARENDTRANSDLG.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
