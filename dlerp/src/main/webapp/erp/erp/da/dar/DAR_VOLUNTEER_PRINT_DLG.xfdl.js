(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("DAR_VOLUNTEER_PRINT_DLG");
            this.set_titletext("접수현황 출력");
            this.getSetter("maxwidth").set("370");
            this.getSetter("maxheight").set("230");
            if (Form == this.constructor)
            {
                this._setFormPosition(340,170);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("dsList", this);
            obj._setContents("");
            this.addChild(obj.name, obj);


            obj = new Dataset("_dsProc", this);
            obj._setContents("<ColumnInfo><Column id=\"TARGET\" type=\"STRING\" size=\"256\"/><Column id=\"SP\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"TARGET\">select</Col><Col id=\"SP\"/></Row><Row><Col id=\"TARGET\">insert</Col><Col id=\"SP\"/></Row><Row><Col id=\"TARGET\">update</Col><Col id=\"SP\"/></Row><Row><Col id=\"TARGET\">delete</Col><Col id=\"SP\"/></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsSearch", this);
            obj._setContents("<ColumnInfo><Column id=\"NO_NOTICE\" type=\"STRING\" size=\"256\"/><Column id=\"DT_BASE\" type=\"STRING\" size=\"256\"/><Column id=\"DS_NOTICE\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row/></Rows>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Static("staTITLE","0","10","336","30",null,null,null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_text("접수현황 출력");
            obj.set_cssclass("sta_TITLE_Bg");
            obj.set_textAlign("left");
            this.addChild(obj.name, obj);

            obj = new Div("divBtns","2","130","334","40",null,null,null,null,null,null,this);
            obj.set_taborder("1");
            this.addChild(obj.name, obj);

            obj = new Button("btnCANCLE","190","0","60","27",null,null,null,null,null,null,this.divBtns.form);
            obj.set_taborder("1");
            obj.set_text("취소");
            this.divBtns.addChild(obj.name, obj);

            obj = new Button("btnOK","100","0","60","27",null,null,null,null,null,null,this.divBtns.form);
            obj.set_taborder("0");
            obj.set_text("확인");
            this.divBtns.addChild(obj.name, obj);

            obj = new Static("staDT_BASE","10","45","87","30",null,null,null,null,null,null,this);
            obj.set_taborder("3");
            obj.set_text("기준일자");
            obj.set_visible("true");
            obj.set_cssclass("sta_WF_tablelabelE");
            this.addChild(obj.name, obj);

            obj = new Static("staNO_NOTICE","10","staDT_BASE:-1","87","30",null,null,null,null,null,null,this);
            obj.set_taborder("6");
            obj.set_text("채용공고");
            obj.set_visible("true");
            obj.set_cssclass("sta_WF_tablelabelE");
            this.addChild(obj.name, obj);

            obj = new Static("sta03","86","45","250","30",null,null,null,null,null,null,this);
            obj.set_taborder("4");
            obj.set_cssclass("sta_WF_tablebg");
            obj.set_visible("true");
            this.addChild(obj.name, obj);

            obj = new Static("sta00","86","sta03:-1","250","30",null,null,null,null,null,null,this);
            obj.set_taborder("7");
            obj.set_cssclass("sta_WF_tablebg");
            obj.set_visible("true");
            this.addChild(obj.name, obj);

            obj = new Calendar("calDT_BASE","92","50","105","20",null,null,null,null,null,null,this);
            obj.set_taborder("5");
            obj.set_dateformat("yyyy-MM-dd");
            obj.set_editformat("yyyyMMdd");
            obj.set_autoselect("true");
            this.addChild(obj.name, obj);

            obj = new Div("ccfNO_NOTICE","93","80","235","20",null,null,null,null,null,null,this);
            obj.getSetter("CDTextWidth").set("50");
            obj.set_taborder("5");
            obj.set_url("cmm::cmmCodeFind.xfdl");
            obj.set_text("");
            this.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this
            obj = new Layout("default","",this._adjust_width,this._adjust_height,this,function(p){});
            this.addLayout(obj.name, obj);
            
            // BindItem Information
            obj = new BindItem("item0","calDT_BASE","value","dsSearch","DT_BASE");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item1","ccfNO_NOTICE.form.CDTextBox","value","dsSearch","NO_NOTICE");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item2","ccfNO_NOTICE.form.DSTextBox","value","dsSearch","DS_NOTICE");
            this.addChild(obj.name, obj);
            obj.bind();
            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {
            this._addPreloadList("fdl","cmm::cmmCodeFind.xfdl");
        };
        
        // User Script
        this.registerScript("DAR_VOLUNTEER_PRINT_DLG.xfdl", function() {
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

        	this.grSearch = this.FormInfo.GR_SEARCH;			// 권한
        	this.cdGroup = this.AuthClient.CD_GROUP;			// 그룹코드
        };

        /************************************************************************
         * 이벤트 설정
         ************************************************************************/
        this.fnSetEvent = function() {
        	// 채용공고 코드파인드
        	this.ccfNO_NOTICE.CodeFindName = "DAX_RECRUIT_NOTICE";
        	this.ccfNO_NOTICE.AfterCDTextChanged = "fnAfterCDTextChanged";

        	//적용년도(현재)
        	// this.calDT_BASE.form.TextBox.set_value(this.gfnGetDate().substr(0,4));
        	this.calDT_BASE.set_value(this.getOwnerFrame().DT_BASE);
        	this.ccfNO_NOTICE.form.CDTextBox.set_value(this.getOwnerFrame().NO_NOTICE);
            this.ccfNO_NOTICE.form.DSTextBox.set_value(this.getOwnerFrame().DS_NOTICE);
        };

        /************************************************************************
         * 파라미터 설정
         ************************************************************************/
        this.fnSetParameter = function() {

        };

        /************************************************************************
         * 컨트롤 이벤트
         ************************************************************************/
         /************************************************************************
         * Validate
         ************************************************************************/
        this.fnSelectValidate = function() {

         	var validate = true;

        	// 기준일자
        	if (this.gfnIsNull(this.dsSearch.getColumn(0, "DT_BASE"))) {
        		this.fnVaidateCallback = function() {
        			this.calDT_BASE.setFocus();
        		}
        		this.gfnAlert("기준일자를 입력하세요.");
        		return false;
        	}

        	// 채용공고
        	if (this.gfnIsNull(this.dsSearch.getColumn(0, "NO_NOTICE"))) {
        		this.fnVaidateCallback = function() {
        			this.ccfNO_NOTICE.setFocus();
        		}
        		this.gfnAlert("채용공고를 입력하세요.");
        		return false;
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
        		//this.gfnGridAfterSelect(this.dxGrid);
        	}
        // 	else if(svcID == "save") {
        // 		if (errorCode == 0) {
        // 			this.FormBtns.Select.click();
        // 		} else {
        // 			this.gfnAlert(errorMsg);
        // 		}
        // 	}
        };

        /************************************************************************
         * 코드파인드 이벤트
         ************************************************************************/
        this.fnBeforeUserDataSetParam = function(id, dsUserParam, nrow) {

         	switch(id) {
        		case "ccfCD_CORP": // 법인코드
        			dsUserParam.setColumn(nrow, "GR_SEARCH", this.FormInfo.GR_SEARCH);
        			dsUserParam.setColumn(nrow, "CD_DEPT", this.AuthClient.CD_DEPT);
        			break;

        		default:
         	}
         	return true;
        };

        this.fnAfterCDTextChanged = function(id, codeFindData) {

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
        	if (!this.fnSelectValidate()) return false;

        	var json = {};
        	json.DT_BASE = this.dsSearch.getColumn(0, "DT_BASE");
        	json.NO_NOTICE = this.dsSearch.getColumn(0, "NO_NOTICE");

        	this.getParentContext().close(JSON.stringify(json));
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
            this.dsSearch.addEventHandler("onvaluechanged",this.dsSearch_onvaluechanged,this);
        };
        this.loadIncludeScript("DAR_VOLUNTEER_PRINT_DLG.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
