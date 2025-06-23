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
            this.set_titletext("어음번호 입력");
            this.getSetter("maxwidth").set("470");
            this.getSetter("maxheight").set("300");
            if (Form == this.constructor)
            {
                this._setFormPosition(470,300);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("dsList", this);
            obj._setContents("");
            this.addChild(obj.name, obj);


            obj = new Dataset("_dsProc", this);
            obj._setContents("<ColumnInfo><Column id=\"TARGET\" type=\"STRING\" size=\"256\"/><Column id=\"SP\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"TARGET\">select</Col><Col id=\"SP\">DFBPR_NONOTESASSIGN_SELECT</Col></Row></Rows>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Static("staTITLE","0","0","100%","30",null,null,null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_text("어음번호입력");
            obj.set_cssclass("sta_TITLE_Bg");
            obj.set_textAlign("left");
            this.addChild(obj.name, obj);

            obj = new Static("staSUBTITLE","10","staTITLE:10","410","30",null,null,null,null,null,null,this);
            obj.set_taborder("3");
            obj.set_text("어음번호를 입력하세요.");
            obj.set_cssclass("sta_WF_tablelabel");
            obj.set_textAlign("left");
            this.addChild(obj.name, obj);

            obj = new Static("sta00","10","staSUBTITLE:10","100","20",null,null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_text("입력대상어음건수");
            obj.set_textAlign("right");
            this.addChild(obj.name, obj);

            obj = new Edit("txtNO_CHK","sta00:10","staSUBTITLE:10","200","20",null,null,null,null,null,null,this);
            obj.set_taborder("5");
            obj.set_autoselect("true");
            obj.set_readonly("true");
            obj.set_textAlign("right");
            this.addChild(obj.name, obj);

            obj = new Static("sta01_1","txtNO_CHK:5","staSUBTITLE:10","20","20",null,null,null,null,null,null,this);
            obj.set_taborder("10");
            obj.set_text("건");
            this.addChild(obj.name, obj);

            obj = new Static("sta01","10","sta00:10","100","20",null,null,null,null,null,null,this);
            obj.set_taborder("9");
            obj.set_text("출금당좌계좌");
            obj.set_textAlign("right");
            obj.set_cssclass("sta_WF_tablelabelE");
            this.addChild(obj.name, obj);

            obj = new Div("cfNO_ACCOUNT","sta01:10","sta00:10","300","20",null,null,null,null,null,null,this);
            obj.getSetter("CDTextWidth").set("60");
            obj.set_taborder("6");
            obj.set_url("cmm::cmmCodeFind.xfdl");
            this.addChild(obj.name, obj);

            obj = new Static("sta02","10","sta01:10","100","20",null,null,null,null,null,null,this);
            obj.set_taborder("8");
            obj.set_text("시작어음번호");
            obj.set_textAlign("right");
            obj.set_cssclass("sta_WF_tablelabelE");
            this.addChild(obj.name, obj);

            obj = new Static("sta03","10","sta02:10","430","20",null,null,null,null,null,null,this);
            obj.set_taborder("7");
            obj.set_text("선택하신 자금집행내역에 시작어음번호부터 대상건수에 자동 맵핑합니다.");
            this.addChild(obj.name, obj);

            obj = new Button("btnSave","35%","sta03:20","60","20",null,null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_text("확인");
            this.addChild(obj.name, obj);

            obj = new Button("btnCancel","btnSave:10","sta03:20","60","20",null,null,null,null,null,null,this);
            obj.set_taborder("4");
            obj.set_text("취소");
            this.addChild(obj.name, obj);

            obj = new Edit("cfFR_NOTESNUM","120","140","200","20",null,null,null,null,null,null,this);
            obj.set_taborder("11");
            obj.set_autoselect("true");
            obj.set_readonly("false");
            obj.set_textAlign("right");
            obj.set_autoskip("false");
            obj.set_inputtype("digit");
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
        };
        
        // User Script
        this.registerScript("DFB_NONOTESASSIGN.xfdl", function() {
        this.objApp = this.gfnGetApplication();

        var CD_BANK = "";
        var CD_MANAGEBANK = "";
        var CD_CORP = "";

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

        	// 이전 화면에서 데이터 받기.
        	this.txtNO_CHK.set_value(this.getOwnerFrame().iSelect);
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
        	this.ctxtCD_BANK = '';
        	this.ctxtCD_SIDEBANK = '';
        };

        /************************************************************************
         * 이벤트 설정
         ************************************************************************/
        this.fnSetEvent = function() {
        	this.cfNO_ACCOUNT.CodeFindName = "DFX_CFNO_ACCOUNT";
        	this.cfNO_ACCOUNT.BeforeUserDataSetParam = "fnBeforeUserDataSetParam";
        	this.cfNO_ACCOUNT.AfterCDTextChanged = "fnAfterCDTextChanged";

        	//this.cfFR_NOTESNUM.CodeFindName = "DFX_CFNO_NOTES_BANK";
        	//this.cfFR_NOTESNUM.BeforeUserDataSetParam = "fnBeforeUserDataSetParam";

        };

        /************************************************************************
         * 파라미터 설정
         ************************************************************************/
        this.fnSetParameter = function() {

        	this.dsSelect = new Dataset();

        	this.dsSelect.addColumn("NO_NOTES", "string");
        }

        /************************************************************************
         * 컨트롤 이벤트
         ************************************************************************/

         /*
          *	조회 버튼
          */
        this.fnSelect = function() {

        }

         /*
         *	입력 버튼
         */
        this.fnAdd = function() {

        }

         /*
         *	저장 버튼
         */
        this.fnSave = function() {

        }



        /*
         *	삭제 버튼
         */
        this.fnDel = function() {

        }


        /*
         *	엑셀 버튼
         */
        this.fnExcel = function() {

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
        	if(this.gfnIsNull(this.cfNO_ACCOUNT.form.CDTextBox.value)) {
        		this.gfnAlert("출금당좌계좌를 입력하세요.");
        		return false;
        	}

        	if(this.gfnIsNull(this.cfFR_NOTESNUM.value)) {
        		this.gfnAlert("시작어음번호를 입력하세요.");
        		return false;
        	}

        	if (this.cfFR_NOTESNUM.value.length < 3) {
        		this.gfnAlert("시작어음번호를 3자리 이상 입력하세요.");
        		return false;
        	}
        	//trace(this.cfFR_NOTESNUM.value.length);
        	//trace(this.cfFR_NOTESNUM.value);

        	return true;
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
        		this.fnSaveCallback();
        	}
        }

        /************************************************************************
         * 코드파인드 이벤트
         ************************************************************************/
        this.fnBeforeUserDataSetParam = function(id, dsUserParam, nrow) {

        	if (id == "cfNO_ACCOUNT") {
        		dsUserParam.setColumn(nrow, "GUBUN", "NOTE");
        		dsUserParam.setColumn(nrow, "CD_CORP", this.getOwnerFrame().CD_CORP);
        	}

        // 	if (id == "cfFR_NOTESNUM") {
        // 		if (!this.gfnIsNull(this.cfNO_ACCOUNT.form.CDTextBox.value)) {
        // 			dsUserParam.setColumn(nrow, "TY_USE", 'N');
        // 			dsUserParam.setColumn(nrow, "CD_BANK", CD_BANK);
        // 			dsUserParam.setColumn(nrow, "CD_SIDEBANK", CD_MANAGEBANK);
        // 			dsUserParam.setColumn(nrow, "CD_CORP", CD_CORP);
        // 			dsUserParam.setColumn(nrow, "NO_ACCOUNT", this.cfNO_ACCOUNT.form.CDTextBox.value);
        // 		} else {
        // 			this.gfnAlert("먼저 출금계좌를 선택하여주십시오.");
        // 			return false;
        // 		}
        // 	}

        	return true;
        }

        this.fnAfterCDTextChanged = function(id, codeFindData) {
        	var arr = codeFindData;

        	if(id == "cfNO_ACCOUNT") {
        		if(arr.length > 0) {
        			CD_BANK = codeFindData[0].CD_BANK;
        			CD_MANAGEBANK = codeFindData[0].CD_MANAGEBANK;
        			CD_CORP = this.getOwnerFrame().CD_CORP;
        		}
        	}
        }

        /************************************************************************
         * 그리드 이벤트
         ************************************************************************/

        /************************************************************************
         * 기타 이벤트
         ************************************************************************/

        // 저장 버튼 클릭
        this.divData_btnSave_onclick = function(obj,e)
        {
        	if (!this.fnSelectValidate()) return false;

        	var json = {};

        	json.FR_NOTESNUM = this.cfFR_NOTESNUM.value;
        	json.TY_GUBUN = "15";
        	json.CD_BANK = CD_BANK;
        	json.CD_SIDEBANK = CD_MANAGEBANK;
        	json.NO_ACCOUNT = this.cfNO_ACCOUNT.form.CDTextBox.value;

        	json.totalCount = this.getOwnerFrame().iSelect;
        	//json.NO_NOTES_LIST = this.dsList;


        	//trace(this.parent.parent.parent.form.opener.dsNoNoteList);
        	//trace(this.getOwnerFrame().dsNoNoteList.saveXML());
        	//this.parent.parent.parent.form.opener.dsNoNoteList.copyData(this.dsList);


        	this.getParentContext().close(JSON.stringify(json));

        };

        // this.fnSavePrcss = function() {
        // 	if (val) {
        // 		this.fnSaveCallback("", true);
        // 	}
        // }

        this.fnSaveCallback = function(strId, val) {
        	//if(val == true) {
        		var json = {};

        		json.FR_NOTESNUM = this.cfFR_NOTESNUM.value;
        		json.TY_GUBUN = 15;
        		json.CD_BANK = this.ctxtCD_BANK;
        		json.CD_SIDEBANK = this.ctxtCD_SIDEBANK;
        		json.NO_ACCOUNT = this.cfNO_ACCOUNT.form.CDTextBox.value;

        		json.totalCount = this.getOwnerFrame().iSelect;
        		//json.NO_NOTES_LIST = this.dsList;


        		trace(this.parent.parent.parent.form.opener.dsNoNoteList);
        		//trace(this.getOwnerFrame().dsNoNoteList.saveXML());
        		this.parent.parent.parent.form.opener.dsNoNoteList.copyData(this.dsList);


        		this.getParentContext().close(JSON.stringify(json));
        	//}
        }

        // 취소 버튼 클릭
        this.divData_btnCancel_onclick = function(obj,e)
        {
        	// this.close()가 작동하지 않았고,
        	// 부모의 callback 함수로 데이터를 넘겨주기 위해 작성되었습니다.
        	this.getParentContext().close(false);
        };

        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.form_onload,this);
            this.btnSave.addEventHandler("onclick",this.divData_btnSave_onclick,this);
            this.btnCancel.addEventHandler("onclick",this.divData_btnCancel_onclick,this);
        };
        this.loadIncludeScript("DFB_NONOTESASSIGN.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
