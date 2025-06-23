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
            this.set_titletext("평가항목복사");
            this.getSetter("maxwidth").set("430");
            this.getSetter("maxheight").set("220");
            if (Form == this.constructor)
            {
                this._setFormPosition(380,180);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("dsList", this);
            obj._setContents("<ColumnInfo><Column id=\"STATE\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row/></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("_dsProc", this);
            obj._setContents("<ColumnInfo><Column id=\"TARGET\" type=\"STRING\" size=\"256\"/><Column id=\"SP\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"TARGET\">combo</Col><Col id=\"SP\">DAXPR_EVAL_TERMS_COMBO</Col></Row><Row><Col id=\"TARGET\">copyItem</Col><Col id=\"SP\">DAJPR_EVAL_ITEMS_COPY</Col></Row><Row><Col id=\"TARGET\">copyWeight</Col><Col id=\"SP\">DAJPR_EVAL_WEIGHTS_COPY</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsTERM_EVAL", this);
            obj._setContents("<ColumnInfo><Column id=\"CD_CODE\" type=\"STRING\" size=\"256\"/><Column id=\"DS_CODE\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsSave", this);
            obj._setContents("<ColumnInfo><Column id=\"TERM_EVAL_FROM\" type=\"STRING\" size=\"256\"/><Column id=\"TERM_EVAL_TO\" type=\"STRING\" size=\"256\"/><Column id=\"SABUN\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row/></Rows>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Static("staTITLE","0","0","100.00%","30",null,null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_text("평가항목복사");
            obj.set_cssclass("sta_TITLE_Bg");
            this.addChild(obj.name, obj);

            obj = new Static("staTERM_EVAL_FROM1","20","40","60","20",null,null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_text("대상기수");
            obj.set_cssclass("sta_WF_tablelabelE");
            this.addChild(obj.name, obj);

            obj = new Static("staTERM_EVAL_TO1","20","70","60","20",null,null,null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_text("생성기수");
            obj.set_cssclass("sta_WF_tablelabelE");
            this.addChild(obj.name, obj);

            obj = new Combo("cboTERM_EVAL_FROM","81","40","100","20",null,null,null,null,null,null,this);
            obj.set_taborder("8");
            obj.set_datacolumn("DS_CODE");
            obj.set_codecolumn("CD_CODE");
            obj.set_innerdataset("dsTERM_EVAL");
            obj.set_text("");
            obj.set_value("%");
            obj.set_index("0");
            this.addChild(obj.name, obj);

            obj = new Combo("cboTERM_EVAL_TO","81","70","100","20",null,null,null,null,null,null,this);
            obj.set_taborder("6");
            obj.set_datacolumn("DS_CODE");
            obj.set_codecolumn("CD_CODE");
            obj.set_innerdataset("dsTERM_EVAL");
            obj.set_text("");
            obj.set_value("%");
            obj.set_index("0");
            this.addChild(obj.name, obj);

            obj = new Static("staTERM_EVAL_FROM2","190","40","190","20",null,null,null,null,null,null,this);
            obj.set_taborder("6");
            obj.set_text("의 모든 평가항목 가중치 데이터를");
            this.addChild(obj.name, obj);

            obj = new Static("staTERM_EVAL_TO2","188","70","190","20",null,null,null,null,null,null,this);
            obj.set_taborder("7");
            obj.set_text("(으)로 복사합니다.");
            this.addChild(obj.name, obj);

            obj = new Div("divBtns","128","117","200","40",null,null,null,null,null,null,this);
            this.addChild(obj.name, obj);

            obj = new Button("btnOK","0","10","60","27",null,null,null,null,null,null,this.divBtns.form);
            obj.set_taborder("12");
            obj.set_text("복사");
            this.divBtns.addChild(obj.name, obj);

            obj = new Button("btnCANCLE","btnOK:30","10","60","27",null,null,null,null,null,null,this.divBtns.form);
            obj.set_taborder("13");
            obj.set_text("취소");
            this.divBtns.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this
            obj = new Layout("default","",this._adjust_width,this._adjust_height,this,function(p){});
            this.addLayout(obj.name, obj);
            
            // BindItem Information
            obj = new BindItem("item0","cboTERM_EVAL_FROM","value","dsSave","TERM_EVAL_FROM");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item1","cboTERM_EVAL_TO","value","dsSave","TERM_EVAL_TO");
            this.addChild(obj.name, obj);
            obj.bind();
            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script
        this.registerScript("DAJ_EVALUATION_CRITERIA_DLG.xfdl", function() {
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
        	this.fnSetCombo();
        };

        /************************************************************************
         * 변수 선언
         ************************************************************************/
        this.fnSetVariable = function() {
        };

        /************************************************************************
         * 파라미터 설정
         ************************************************************************/
        this.fnSetParameter = function() {

        }

        /************************************************************************
         * 이벤트 설정
         ************************************************************************/
        this.fnSetEvent = function() {

        	var P_GUBUN = this.getOwnerFrame().P_GUBUN;	// ITEM(항목) / WEIGH(가중치)
        	var P_TERM_EVAL = this.getOwnerFrame().P_TERM_EVAL;

        	var strTitle = (P_GUBUN == "WEIGH") ? "평가가중치복사 " : "평가항목복사";
        	this.staTITLE.set_text(strTitle) // set

        	var strText = (P_GUBUN == "WEIGH") ? "가중치 " : "";
        	strText = "의 모든 평가항목 " + strText + "데이터를";
        	this.staTERM_EVAL_FROM2.set_text(strText) // set
        	//trace("P_GUBUN->" + P_GUBUN + " / P_TERM_EVAL->" + P_TERM_EVAL);
        };

        // 확인
        this.btnOK_onclick = function(obj,e)
        {
        	if (!this.fnDataValidate()) return;

        	var cboTERM_EVAL_FROM = this.cboTERM_EVAL_FROM.value;
        	var cboTERM_EVAL_TO = this.cboTERM_EVAL_TO.value;
        	this.gfnConfirm("대상기수 " + cboTERM_EVAL_FROM +" 데이터를 " + cboTERM_EVAL_TO + " 으로 복사 하시겠습니까?", "fnCopyCallback");
        };

        this.btnCANCLE_onclick = function(obj,e)
        {
        	// 취소
        	this.getParentContext().close(false);
        };

        /************************************************************************
         * 코드파인드 이벤트
         ************************************************************************/
         this.fnBeforeUserDataSetParam = function(id, dsUserParam, nrow) {
        	return true;
        }


        /************************************************************************
         * Validate
         ************************************************************************/
        this.fnDataValidate = function(){
        	var msg = "은(는) 필수입력 입니다.";

        	var cboTERM_EVAL_FROM = this.cboTERM_EVAL_FROM.value;
        	var cboTERM_EVAL_TO = this.cboTERM_EVAL_TO.value;

        	if(this.gfnIsNull(this.gfnTrim(cboTERM_EVAL_FROM))){
        		this.gfnAlert("대상기수" + msg);
        		this.cboTERM_EVAL_FROM.setFocus();
        		return false;
        	}

        	if(this.gfnIsNull(this.gfnTrim(cboTERM_EVAL_TO))){
        		this.gfnAlert("생성기수" + msg);
        		this.cboTERM_EVAL_TO.setFocus();
        		return false;
        	}

        	if (cboTERM_EVAL_FROM == cboTERM_EVAL_TO) {
        		this.gfnAlert("같은 평가 기수끼리로의 복사는 불가능합니다.");
        		return false;
        	}
        	return true;
        }

        this.fnAfterCDTextChanged = function(id, codeFindData) {
        }

        /************************************************************************
         * 콜백 이벤트
         ************************************************************************/
        this.fnCallback = function(svcID, errorCode, errorMsg)
        {
        	if (errorCode != 0) {
        		this.gfnAlert(errorMsg);
        		return;
        	}

        	switch(svcID) {
        		case "combo":
        			if (!this.gfnIsNull(this.getOwnerFrame().P_TERM_EVAL)) {
        				this.cboTERM_EVAL_FROM.set_value(this.getOwnerFrame().P_TERM_EVAL);
        			}

        			//this.cboTERM_EVAL_FROM.set_index(0);
        			this.cboTERM_EVAL_TO.set_index(0);
        		break;
        		case "save":	// 평가항목 / 평가가중치 복사
        			if (errorCode != 0) {
        				this.gfnAlert(errorMsg);
        				return;
        			} else {
        				this.getParentContext().close(true);
        			}
        		break;

        		default:
        	}
        }

        /************************************************************************
         * 기타 이벤트
         ************************************************************************/
        // 데이터 복사
        this.fnCopyCallback = function(strId, val)  {
        	if(val == false) return;

        	this.dsSave.setColumn(0, "SABUN", this.AuthClient.ID_USER);

        	if (this.dsSave.rowcount == 0) return;

        	trace(this.dsSave.saveXML());

        	var P_GUBUN = this.getOwnerFrame().P_GUBUN;	// ITEM(항목) / WEIGH(가중치)
        	var sInData = (P_GUBUN == "ITEM") ? "copyItem=dsSave" : "copyWeight=dsSave";

        	var strSvcId    = "save";
        	var strSvcType  = "save";
        	var inProc		= "_dsProc";
        	//var inData      = "copyItem=dsSave";
        	var inData      = sInData;
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

        //평가기수 콤보 조회
        this.fnSetCombo = function() {

        	this.dsCombo = new Dataset();
        	this.dsCombo.addColumn("TY_SEL", "string");
        	this.dsCombo.addColumn("YEAR_EVAL", "string");

        	this.dsCombo.addRow();
        	this.dsCombo.setColumn(0, "TY_SEL", "P");	// A: 전체 P: 필수
        	this.dsCombo.setColumn(0, "YEAR_EVAL", "");

        	var strSvcId    = "combo";
        	var strSvcType  = "select";
        	var inProc		= "_dsProc";
        	var inData      = "combo=dsCombo";
        	var outData     = "dsTERM_EVAL=combo0";
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
        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.form_onload,this);
            this.cboTERM_EVAL_FROM.addEventHandler("onitemchanged",this.fnSearchInit,this);
            this.cboTERM_EVAL_TO.addEventHandler("onitemchanged",this.fnSearchInit,this);
            this.divBtns.form.btnOK.addEventHandler("onclick",this.btnOK_onclick,this);
            this.divBtns.form.btnCANCLE.addEventHandler("onclick",this.btnCANCLE_onclick,this);
            this.dsSave.addEventHandler("onvaluechanged",this.dsSearch_onvaluechanged,this);
        };
        this.loadIncludeScript("DAJ_EVALUATION_CRITERIA_DLG.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
