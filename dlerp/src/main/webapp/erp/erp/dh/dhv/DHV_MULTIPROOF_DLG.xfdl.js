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
            this.set_titletext("부가세 마감");
            this.getSetter("maxwidth").set("480");
            this.getSetter("maxheight").set("240");
            if (Form == this.constructor)
            {
                this._setFormPosition(450,230);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("_dsProc", this);
            obj._setContents("<ColumnInfo><Column id=\"TARGET\" type=\"STRING\" size=\"256\"/><Column id=\"SP\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"SP\">DHVPR_VATTUJA</Col><Col id=\"TARGET\">combo</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsTY_VATTUJA", this);
            obj._setContents("<ColumnInfo><Column id=\"CD_CODE\" type=\"STRING\" size=\"256\"/><Column id=\"DS_CODE\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row/></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsSearch", this);
            obj._setContents("<ColumnInfo><Column id=\"TY_VATTUJA\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row/></Rows>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Div("divData","0","0",null,"128","0",null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_cssclass("div_DATA_Bg");
            this.addChild(obj.name, obj);

            obj = new Static("staTitle","10","0",null,"22","0",null,null,null,null,null,this.divData.form);
            obj.set_taborder("1");
            obj.set_text("투자유형일괄수정");
            obj.set_cssclass("sta_TITLE_Bg");
            this.divData.addChild(obj.name, obj);

            obj = new Static("staBg","0","staTitle:10",null,"30","0",null,null,null,null,null,this.divData.form);
            obj.set_taborder("2");
            obj.set_cssclass("sta_WF_tablebg");
            obj.set_text("");
            this.divData.addChild(obj.name, obj);

            obj = new Combo("ccboTY_VATTUJA","10%","staTitle:15",null,"20","10%",null,null,null,null,null,this.divData.form);
            obj.set_taborder("3");
            obj.set_innerdataset("dsTY_VATTUJA");
            obj.set_codecolumn("CD_CODE");
            obj.set_datacolumn("DS_CODE");
            this.divData.addChild(obj.name, obj);

            obj = new Button("btnConf","148","staBg:20","69","27",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("4");
            obj.set_text("확인");
            this.divData.addChild(obj.name, obj);

            obj = new Button("btnCancel","227","staBg:20","69","27",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("5");
            obj.set_text("취소");
            this.divData.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this
            obj = new Layout("default","",this._adjust_width,this._adjust_height,this,function(p){});
            this.addLayout(obj.name, obj);
            
            // BindItem Information
            obj = new BindItem("item0","divData.form.ccboTY_VATTUJA","value","dsSearch","TY_VATTUJA");
            this.addChild(obj.name, obj);
            obj.bind();
            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script
        this.registerScript("DHV_MULTIPROOF_DLG.xfdl", function() {
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

        	this.fnSetCombo();

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
        	//this.gfnGridDel(this.dxGrid);
        }


        /*
         *	엑셀 버튼
         */
        this.fnExcel = function() {
        	//this.gfnExcelExport(this.dxGrid);
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
        	var validate = true;

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
        	if(svcID == "magamCreate"){
        		if (errorCode == 0) {
        			this.gfnAlert("마감 작업이 완료되었습니다.", "fnMsgCallback");
        		} else {
        			this.gfnAlert(errorMsg);
        		}
        	}
        	if(svcID == "magamCancel"){
        		if (errorCode == 0) {
        			this.gfnAlert("마감취소 작업이 완료되었습니다.", "fnMsgCallback");
        		} else {
        			this.gfnAlert(errorMsg);
        		}
        	}
        }

        this.fnMsgCallback = function() {
        	this.getParentContext().close("SUSESS");
        }

        /************************************************************************
         * 코드파인드 이벤트
         ************************************************************************/
        this.fnBeforeUserDataSetParam = function(id, dsUserParam, nrow) {
        	switch(id) {

        		case "ccfCD_CORP": // 법인코드
        			dsUserParam.setColumn(nrow, "ID_SABUN", this.AuthClient.ID_USER);
        		break;

        		case "ccfCD_SELFACNT":	//세무단위
        			if (this.gfnIsNull(this.ccfCD_CORP.form.CDTextBox.value)) {
        				this.gfnAlert("법인코드를 먼저 선택하세요.");
        				this.ccfCD_CORP.form.CDTextBox.setFocus();
        				return false;
        			}
        			dsUserParam.setColumn(nrow, "CD_CORP", this.ccfCD_CORP.form.CDTextBox.value);
        		break;
        	}

        	return true;
        };


         this.fnAfterCDTextChanged = function(id, codeFindData) {
        	var arrData = codeFindData;

        	switch(id) {

        	case "ccfCD_CORP": // 법인코드
        		this.ccfCD_SELFACNT.form.fnCodeFindClear();
        		break;

        		case "ccfCD_SELFACNT":	//세무단위
        			if (arrData.length > 0) {
        				var strCdSelfAcnt = "";
        				var strDsSelfAcnt = "";
        				for(var r = 0; r < arrData.length; r++) {
        					strCdSelfAcnt += arrData[r]["CD_DEPT_SELFACNT"]+",";
        					strDsSelfAcnt += arrData[r]["DS_DEPT_SELFACNT"]+",";
        				}

        				strCdSelfAcnt = strCdSelfAcnt.substr(0,strCdSelfAcnt.length-1);
        				strDsSelfAcnt = strDsSelfAcnt.substr(0,strDsSelfAcnt.length-1);

        				this.ccfCD_SELFACNT.form.CDTextBox.set_value(strCdSelfAcnt);
        				this.ccfCD_SELFACNT.form.DSTextBox.set_value(strDsSelfAcnt);

        			}
        			break;
        	}
        }

        /************************************************************************
         * 그리드 이벤트
         ************************************************************************/

        /************************************************************************
         * 기타 이벤트
         ************************************************************************/
        //취소버튼 클릭
        this.btnCancel_onclick = function(obj,e)
        {
        	var param = {};
        	param.bSave = false;
        	this.getParentContext().close(param);
        };

        //확인버튼 클릭
        this.btnConf_onclick = function(obj,e)
        {
        	var param = {};
        	param.bSave = true;
        	param.TY_VATTUJA = this.dsSearch.getColumn(0, "TY_VATTUJA");
        	this.getParentContext().close(param);
        };

        this.fnSetCombo = function()
        {
        	this.dsCombo = new Dataset();
        	this.dsCombo.clearData();
        	this.dsCombo.addRow();

        	var strSvcId    = "combo";
        	var strSvcType  = "grid";
        	var inProc		= "_dsProc";
        	var inData      = "combo=dsCombo";
        	var outData     = "dsTY_VATTUJA=combo0";
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


        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.form_onload,this);
            this.divData.form.btnConf.addEventHandler("onclick",this.btnConf_onclick,this);
            this.divData.form.btnCancel.addEventHandler("onclick",this.btnCancel_onclick,this);
            this.dsTY_VATTUJA.addEventHandler("onvaluechanged",this.dsMagam_onvaluechanged,this);
            this.dsSearch.addEventHandler("onvaluechanged",this.dsMagam_onvaluechanged,this);
        };
        this.loadIncludeScript("DHV_MULTIPROOF_DLG.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
