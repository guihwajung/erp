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
            this.getSetter("maxwidth").set("400");
            this.getSetter("maxheight").set("200");
            if (Form == this.constructor)
            {
                this._setFormPosition(400,110);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("_dsProc", this);
            obj._setContents("<ColumnInfo><Column id=\"TARGET\" type=\"STRING\" size=\"256\"/><Column id=\"SP\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"TARGET\">update</Col><Col id=\"SP\">DCBPR_BIDEXPLAINTIME_UPDATE</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsData", this);
            obj._setContents("<ColumnInfo><Column id=\"CD_SITE\" type=\"STRING\" size=\"256\"/><Column id=\"DS_SITE\" type=\"STRING\" size=\"256\"/><Column id=\"NO_BID\" type=\"STRING\" size=\"256\"/><Column id=\"DS_BID\" type=\"STRING\" size=\"256\"/><Column id=\"DT_EXPLAIN_PRE\" type=\"STRING\" size=\"256\"/><Column id=\"DT_EXPLAIN_PRE_HOUR\" type=\"STRING\" size=\"256\"/><Column id=\"DT_EXPLAIN_PRE_MIN\" type=\"STRING\" size=\"256\"/><Column id=\"DT_EXPLAIN\" type=\"STRING\" size=\"256\"/><Column id=\"DT_EXPLAIN_HOUR\" type=\"STRING\" size=\"256\"/><Column id=\"DT_EXPLAIN_MIN\" type=\"STRING\" size=\"256\"/><Column id=\"CD_PROC\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"CD_PROC\">J</Col></Row></Rows>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Div("divData","0","0",null,null,"0","0",null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_cssclass("div_DATA_Bg");
            obj.set_text("");
            this.addChild(obj.name, obj);

            obj = new Static("staTITLE","0","0","100%","30",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("0");
            obj.set_text("일자 일괄 변경");
            obj.set_cssclass("sta_TITLE_Bg");
            obj.set_textAlign("center");
            this.divData.addChild(obj.name, obj);

            obj = new Static("staDT_EXPLAIN","0","32","87","30",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("1");
            obj.set_text("일자");
            obj.set_cssclass("sta_WF_tablelabel");
            obj.set_textAlign("right");
            this.divData.addChild(obj.name, obj);

            obj = new Static("staBg4","staDT_EXPLAIN:-1","32",null,"30","0.00%",null,null,null,null,null,this.divData.form);
            obj.set_taborder("2");
            obj.set_cssclass("sta_WF_tablebg");
            this.divData.addChild(obj.name, obj);

            obj = new Calendar("ctclDT_EXPLAIN","staDT_EXPLAIN:5","37","108","20",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("3");
            obj.set_dateformat("yyyy-MM-dd");
            obj.set_editformat("yyyyMMdd");
            obj.set_autoselect("true");
            obj.set_value("");
            obj.set_visible("true");
            obj.set_enable("true");
            this.divData.addChild(obj.name, obj);

            obj = new Button("btnOk","130","82","60","20",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("4");
            obj.set_text("확인");
            this.divData.addChild(obj.name, obj);

            obj = new Button("btnCancel","193","82","60","20",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("5");
            obj.set_text("취소");
            this.divData.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this
            obj = new Layout("default","",this._adjust_width,this._adjust_height,this,function(p){});
            this.addLayout(obj.name, obj);
            
            // BindItem Information
            obj = new BindItem("item7","divData.form.ctclDT_EXPLAIN","value","dsData","DT_EXPLAIN");
            this.addChild(obj.name, obj);
            obj.bind();
            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script
        this.registerScript("DWB_SET_DAY.xfdl", function() {
        this.objApp = this.gfnGetApplication();
        var junggiDay = "";
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


        	var today = this.gfnGetDate();
        // 	var nextDay = this.gfnAddMonth(today,1)
        //
        // 	//junggiDay = nextDay.substring(0,6)+"10";
        //
        // 	var day = this.getOwnerFrame().YM_WORK+01;
        //
        // 	junggiDay = this.gfnAddMonth(day,1).substring(0,6)+"10"
        	this.dsData.setColumn(0, "DT_EXPLAIN", today);


        };

        /************************************************************************
         * 버튼 설정 : 화면(Tab) 전환시 마다 호출
         * 서브버튼 사용 및 공통버튼 강제 제어시 여기서 처리
         ************************************************************************/
        this.fnSetButton = function() {
        	this.FormBtns.Select.set_enable(false);
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
        	this.dxGrid = this.divData.form.objGrid;
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
        	this.dsUpdate = new Dataset();
        	this.dsUpdate.addColumn("CD_SITE", "string");
        	this.dsUpdate.addColumn("NO_BID", "string");
        	this.dsUpdate.addColumn("DT_ONLINEEXPLAIN", "string");
        }

        /************************************************************************
         * 컨트롤 이벤트
         ************************************************************************/

        /************************************************************************
         * Validate
         ************************************************************************/
        this.fnSaveValidate = function()
        {
        	var validate = true;
        	var dt_onlinemagam_pre = this.dsData.getColumn(0, "DT_EXPLAIN_PRE") + this.dsData.getColumn(0, "DT_EXPLAIN_PRE_HOUR") + this.dsData.getColumn(0, "DT_EXPLAIN_PRE_MIN");
        	var dt_onlinemagam = this.dsData.getColumn(0, "DT_EXPLAIN") + this.dsData.getColumn(0, "DT_EXPLAIN_HOUR") + this.dsData.getColumn(0, "DT_EXPLAIN_MIN");

        	/*
        	if(nexacro.toNumber(dt_onlinemagam_pre) > nexacro.toNumber(dt_onlinemagam))
        	{
        		validate = false;
        		this.gfnAlert("변경일자가 현재일자보다 이전일 수는 없습니다.");
        	}
        	*/

        	return validate;
        }
        /************************************************************************
         * 콜백 이벤트
         ************************************************************************/
        /*
         *	콜백 처리
         */
        this.fnCallback = function(svcID, errorCode, errorMsg)
        {
        	if (svcID == "update") {
        		if(errorCode == 0)
        		{
        			// this.close()가 작동하지 않았고,
        			// 부모의 callback 함수로 데이터를 넘겨주기 위해 작성되었습니다.
        			this.getParentContext().close(true);
        		}else
        		{
        			this.gfnAlert(errorMsg);
        		}
        	}
        }

        /************************************************************************
         * 코드파인드 이벤트
         ************************************************************************/

        /************************************************************************
         * 그리드 이벤트
         ************************************************************************/

        /************************************************************************
         * 기타 이벤트
         ************************************************************************/

        // 확인 버튼 클릭
        this.divData_btnOk_onclick = function(obj,e)
        {

        	var json = {DT_EXPLAIN: this.dsData.getColumn(0,"DT_EXPLAIN")};
        	this.getParentContext().close(JSON.stringify(json));

        };

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
            this.divData.form.btnOk.addEventHandler("onclick",this.divData_btnOk_onclick,this);
            this.divData.form.btnCancel.addEventHandler("onclick",this.divData_btnCancel_onclick,this);
            this.dsData.addEventHandler("onvaluechanged",this.dsData_onvaluechanged,this);
        };
        this.loadIncludeScript("DWB_SET_DAY.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
