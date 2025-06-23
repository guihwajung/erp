(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("DAA_EDI_SINGO_EDI_FILE_DLG");
            this.set_titletext("EDI 파일 생성");
            this.getSetter("maxwidth").set("360");
            this.getSetter("maxheight").set("230");
            if (Form == this.constructor)
            {
                this._setFormPosition(330,180);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("dsList", this);
            obj._setContents("<ColumnInfo><Column id=\"TY_GUBUN\" type=\"STRING\" size=\"256\"/><Column id=\"DT_BASE\" type=\"STRING\" size=\"256\"/><Column id=\"CD_CORP\" type=\"STRING\" size=\"256\"/><Column id=\"DS_CORP\" type=\"STRING\" size=\"256\"/><Column id=\"CD_POSITION\" type=\"STRING\" size=\"256\"/><Column id=\"DS_POSITION\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row/></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("_dsProc", this);
            obj._setContents("<ColumnInfo><Column id=\"TARGET\" type=\"STRING\" size=\"256\"/><Column id=\"SP\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"TARGET\">saveJoin</Col><Col id=\"SP\">DAAPR_EDI_SINGO_JOIN_FILE</Col></Row><Row><Col id=\"TARGET\">saveRetire</Col><Col id=\"SP\">DAAPR_EDI_SINGO_RETIRE_FILE</Col></Row></Rows>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Static("sta05","86","95","244","30",null,null,null,null,null,null,this);
            obj.set_taborder("9");
            obj.set_cssclass("sta_WF_tablebg");
            obj.set_text("");
            this.addChild(obj.name, obj);

            obj = new Static("staTITLE","0","0","100.00%","30",null,null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_text("EDI 파일 생성");
            obj.set_cssclass("sta_TITLE_Bg");
            obj.set_textAlign("left");
            this.addChild(obj.name, obj);

            obj = new Static("sta03","0","66","87","30",null,null,null,null,null,null,this);
            obj.set_taborder("4");
            obj.set_text("기준일자");
            obj.set_cssclass("sta_WF_tablelabelE");
            this.addChild(obj.name, obj);

            obj = new Static("sta00","0","37","87","30",null,null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_text("법인");
            obj.set_cssclass("sta_WF_tablelabelE");
            this.addChild(obj.name, obj);

            obj = new Static("sta01","86","37","244","30",null,null,null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_cssclass("sta_WF_tablebg");
            obj.set_text("");
            this.addChild(obj.name, obj);

            obj = new Static("sta02","86","66","244","30",null,null,null,null,null,null,this);
            obj.set_taborder("3");
            obj.set_cssclass("sta_WF_tablebg");
            obj.set_text("");
            this.addChild(obj.name, obj);

            obj = new Div("divBtns","67","137","200","30",null,null,null,null,null,null,this);
            obj.set_taborder("5");
            this.addChild(obj.name, obj);

            obj = new Button("btnOK","20","3","60","27",null,null,null,null,null,null,this.divBtns.form);
            obj.set_taborder("0");
            obj.set_text("확인");
            this.divBtns.addChild(obj.name, obj);

            obj = new Button("btnCANCLE","btnOK:30","3","60","27",null,null,null,null,null,null,this.divBtns.form);
            obj.set_taborder("15");
            obj.set_text("취소");
            this.divBtns.addChild(obj.name, obj);

            obj = new Calendar("ctclDT_FROM","93","71","105","20",null,null,null,null,null,null,this);
            obj.set_taborder("6");
            obj.set_dateformat("yyyy-MM-dd");
            obj.set_editformat("yyyyMMdd");
            obj.set_autoselect("true");
            this.addChild(obj.name, obj);

            obj = new Div("ccfCD_CORP","93","42","230","20",null,null,null,null,null,null,this);
            obj.getSetter("CodeFindName").set("DAX_CFCORP2");
            obj.getSetter("CDTextWidth").set("40");
            obj.set_taborder("7");
            obj.set_url("cmm::cmmCodeFind.xfdl");
            obj.set_text("");
            obj.getSetter("BeforeUserDataSetParam").set("fnBeforeUserDataSetParam");
            obj.getSetter("AfterCDTextChanged").set("fnAfterCDTextChanged");
            this.addChild(obj.name, obj);

            obj = new Static("staTY_SINGO","0","95","87","30",null,null,null,null,null,null,this);
            obj.set_taborder("8");
            obj.set_text("신고구분");
            obj.set_cssclass("sta_WF_tablelabel");
            this.addChild(obj.name, obj);

            obj = new Static("staDT00","ctclDT_FROM:5","71","10","20",null,null,null,null,null,null,this);
            obj.set_taborder("10");
            obj.set_text("~");
            this.addChild(obj.name, obj);

            obj = new Calendar("ctclDT_TO","staDT00:5","71","105","20",null,null,null,null,null,null,this);
            obj.set_taborder("11");
            obj.set_dateformat("yyyy-MM-dd");
            obj.set_editformat("yyyyMMdd");
            obj.set_autoselect("true");
            this.addChild(obj.name, obj);

            obj = new Radio("rdoTY_SINGO","91","100","232","20",null,null,null,null,null,null,this);
            obj.set_taborder("12");
            obj.set_codecolumn("codecolumn");
            obj.set_datacolumn("datacolumn");
            obj.set_direction("vertical");
            var rdoTY_SINGO_innerdataset = new nexacro.NormalDataset("rdoTY_SINGO_innerdataset", obj);
            rdoTY_SINGO_innerdataset._setContents("<ColumnInfo><Column id=\"codecolumn\" size=\"256\"/><Column id=\"datacolumn\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"codecolumn\">J</Col><Col id=\"datacolumn\">취득</Col></Row><Row><Col id=\"codecolumn\">R</Col><Col id=\"datacolumn\">상실</Col></Row></Rows>");
            obj.set_innerdataset(rdoTY_SINGO_innerdataset);
            obj.set_text("취득");
            obj.set_value("J");
            obj.set_index("0");
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
        this.registerScript("DAA_EDI_SINGO_EDI_FILE_DLG.xfdl", function() {
        this.objApp = this.gfnGetApplication();

        this.form_onload = function(obj,e)
        {
        	// -- 필수 -------------------//
        	this.gfnFormOnLoad(this);
        	this.gfnFormInfo(this);
        	// ---------------------------//

        	this.fnSetVariable();
        	this.fnSetEvent();
        	this.fnSetParameter();

        };

        /************************************************************************
         * 변수 선언
         ************************************************************************/
        this.fnSetVariable = function() {

        	// 메인창 파라미터 받기
         	this.ctclDT_FROM.set_value(this.getOwnerFrame().DT_FROM);				//조회 시작일자
        	this.ctclDT_TO.set_value(this.getOwnerFrame().DT_TO);					//조회 종료일자
        	this.ccfCD_CORP.form.CDTextBox.set_value(this.getOwnerFrame().CD_CORP);	//법인코드
            this.ccfCD_CORP.form.DSTextBox.set_value(this.getOwnerFrame().DS_CORP);	//법인
        	this.rdoTY_SINGO.set_value(this.getOwnerFrame().TY_SINGO);				//취득,상실 구분
        };

        /************************************************************************
         * 파라미터 설정
         ************************************************************************/
        this.fnSetParameter = function() {

        	//EDI 파일 생성
        	this.dsSave = new Dataset();
        	this.dsSave.addColumn("CD_CORP", "string");
        	this.dsSave.addColumn("DT_FROM", "string");
        	this.dsSave.addColumn("DT_TO", "string");
        	this.dsSave.addColumn("ID_USER", "string");
        	this.dsSave.addColumn("IP_ADDR", "string");
        };

        /************************************************************************
         * 이벤트 설정
         ************************************************************************/
        this.fnSetEvent = function() {
        };

        this.btnOK_onclick = function(obj,e)
        {
        	// 확인
        	this.fnSave();
        };

        this.fnSave = function() {

        	//VALIDATION
        	if (!this.fnSaveValidate()) return false;

        	this.dsSave.clearData();
        	var nrow = this.dsSave.addRow();

        	this.dsSave.setColumn(nrow, "CD_CORP", this.ccfCD_CORP.form.CDTextBox.value);
        	this.dsSave.setColumn(nrow, "DT_FROM", this.ctclDT_FROM.value);
        	this.dsSave.setColumn(nrow, "DT_TO", this.ctclDT_TO.value);
        	this.dsSave.setColumn(nrow, "ID_USER", this.AuthClient.ID_USER);
        	this.dsSave.setColumn(nrow, "IP_ADDR", this.AuthClient.NO_IP);

        	var inDataStr = this.rdoTY_SINGO.value=="J"?"saveJoin=dsSave":"saveRetire=dsSave";

        	var strSvcId    = "save";
        	var strSvcType  = "save";
        	var inProc		= "_dsProc";
        	var inData      = inDataStr;
        	var outData     = "";
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
         *	저장 Validate
         */
        this.fnSaveValidate = function() {
        	var validate = true;
        	if (this.gfnIsNull(this.ccfCD_CORP.form.CDTextBox.text)) {
        		validate = false;
        		this.fnVaidateCallback = function() {
        			this.ccfCD_CORP.form.CDTextBox.setFocus();
        		}
        		this.gfnAlert("법인을 입력해주세요.", "fnVaidateCallback");
        	}

        	if (this.gfnIsNull(this.ctclDT_FROM.value) || this.gfnIsNull(this.ctclDT_TO.value) ) {
        		validate = false;
        		this.fnVaidateCallback = function() {
        		}
        		this.gfnAlert("기준일자를 입력해주세요.", "fnVaidateCallback");
        	}


        	if (!this.gfnIsNull(this.ctclDT_FROM.value) && !this.gfnIsNull(this.ctclDT_TO.value)) {
        		if (this.ctclDT_FROM.value > this.ctclDT_TO.value) {
        			this.fnVaidateCallback = function() {
        			}
        			this.gfnAlert("기준일자 기간이 올바르지 않습니다. 다시 입력해주세요.", "fnVaidateCallback");
        			validate = false;
        		}
        	}


        	return validate;
        }

        this.btnCANCLE_onclick = function(obj,e)
        {
        	// 취소
        	this.getParentContext().close(false);
        };

         /************************************************************************
         * 코드파인드 이벤트
         ************************************************************************/
        this.fnBeforeUserDataSetParam = function(id, dsUserParam, nrow) {

        	if (id == "ccfCD_CORP") {
        		dsUserParam.setColumn(nrow, "GR_SEARCH", this.FormInfo.GR_SEARCH); //법인
        		dsUserParam.setColumn(nrow, "CD_DEPT", this.AuthClient.CD_DEPT);
        	}

        	return true;
        };

        this.fnAfterCDTextChanged = function(id, codeFindData) {
        	var arr = codeFindData;
        };

        /************************************************************************
         * 콜백 이벤트
         ************************************************************************/
        this.fnCallback = function(svcID, errorCode, errorMsg)
        {
        	if (errorCode != 0) {
        		this.gfnAlert(errorMsg);
        		return;
        	} if(svcID == "save"){
        		if (errorCode == 0) {
        			var json = {};

        			json.DT_FROM = this.ctclDT_FROM.value;	// 생성 시작일
        			json.DT_TO = this.ctclDT_TO.value;		// 생성 종료일
        			json.CD_CORP = this.ccfCD_CORP.form.CDTextBox.value;	// 법인코드
        			json.DS_CORP = this.ccfCD_CORP.form.DSTextBox.value;	// 법인명
        			json.TY_SINGO = this.rdoTY_SINGO.value;	// 신고구분

        			this.getParentContext().close(JSON.stringify(json));

        		} else {
        			this.gfnAlert(errorMsg);
        		}
        	}
        };
        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.form_onload,this);
            this.sta05.addEventHandler("onclick",this.sta23_onclick,this);
            this.sta03.addEventHandler("onclick",this.sta03_onclick,this);
            this.sta01.addEventHandler("onclick",this.sta23_onclick,this);
            this.sta02.addEventHandler("onclick",this.sta23_onclick,this);
            this.divBtns.form.btnOK.addEventHandler("onclick",this.btnOK_onclick,this);
            this.divBtns.form.btnCANCLE.addEventHandler("onclick",this.btnCANCLE_onclick,this);
            this.ctclDT_FROM.addEventHandler("onchanged",this.fnSearchInit,this);
            this.ctclDT_TO.addEventHandler("onchanged",this.fnSearchInit,this);
        };
        this.loadIncludeScript("DAA_EDI_SINGO_EDI_FILE_DLG.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
