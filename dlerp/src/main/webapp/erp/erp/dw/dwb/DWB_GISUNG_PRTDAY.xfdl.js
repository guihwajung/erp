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
            this.getSetter("maxheight").set("250");
            if (Form == this.constructor)
            {
                this._setFormPosition(400,170);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("_dsProc", this);
            obj._setContents("<ColumnInfo><Column id=\"TARGET\" type=\"STRING\" size=\"256\"/><Column id=\"SP\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"TARGET\">update</Col><Col id=\"SP\">DCBPR_BIDEXPLAINTIME_UPDATE</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsData", this);
            obj._setContents("<ColumnInfo><Column id=\"CD_SITE\" type=\"STRING\" size=\"256\"/><Column id=\"DS_SITE\" type=\"STRING\" size=\"256\"/><Column id=\"NO_BID\" type=\"STRING\" size=\"256\"/><Column id=\"DS_BID\" type=\"STRING\" size=\"256\"/><Column id=\"DT_EXPLAIN_PRE\" type=\"STRING\" size=\"256\"/><Column id=\"DT_EXPLAIN_PRE_HOUR\" type=\"STRING\" size=\"256\"/><Column id=\"DT_EXPLAIN_PRE_MIN\" type=\"STRING\" size=\"256\"/><Column id=\"DT_EXPLAIN\" type=\"STRING\" size=\"256\"/><Column id=\"DT_EXPLAIN_HOUR\" type=\"STRING\" size=\"256\"/><Column id=\"DT_EXPLAIN_MIN\" type=\"STRING\" size=\"256\"/><Column id=\"CD_PROC\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"CD_PROC\">J</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsCD_PROCDIV", this);
            obj._setContents("<ColumnInfo><Column id=\"NO_DGR\" type=\"STRING\" size=\"256\"/><Column id=\"DS_DGR\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"NO_DGR\">J</Col><Col id=\"DS_DGR\">정기</Col></Row><Row><Col id=\"NO_DGR\">S</Col><Col id=\"DS_DGR\">수시</Col></Row></Rows>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Div("divData","0","0",null,null,"0","0",null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_cssclass("div_DATA_Bg");
            obj.set_text("");
            this.addChild(obj.name, obj);

            obj = new Static("staTITLE","0","0","100%","30",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("0");
            obj.set_text("정기 수시 설정");
            obj.set_cssclass("sta_TITLE_Bg");
            obj.set_textAlign("center");
            this.divData.addChild(obj.name, obj);

            obj = new Static("staCD_SITE","0","staTITLE:5","87","30",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("1");
            obj.set_text("현장코드");
            obj.set_cssclass("sta_WF_tablelabel");
            obj.set_textAlign("right");
            this.divData.addChild(obj.name, obj);

            obj = new Static("staNO_BID","0","staCD_SITE:-1","87","30",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("2");
            obj.set_text("처리구분");
            obj.set_cssclass("sta_WF_tablelabel");
            obj.set_textAlign("right");
            this.divData.addChild(obj.name, obj);

            obj = new Static("staDT_EXPLAIN","0","92","87","30",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("3");
            obj.set_text("일자");
            obj.set_cssclass("sta_WF_tablelabel");
            obj.set_textAlign("right");
            this.divData.addChild(obj.name, obj);

            obj = new Static("staBg1","staCD_SITE:-1","staTITLE:5",null,"30","0%",null,null,null,null,null,this.divData.form);
            obj.set_taborder("4");
            obj.set_cssclass("sta_WF_tablebg");
            this.divData.addChild(obj.name, obj);

            obj = new Static("staBg2","staNO_BID:-1","staBg1:-1",null,"30","0%",null,null,null,null,null,this.divData.form);
            obj.set_taborder("5");
            obj.set_cssclass("sta_WF_tablebg");
            this.divData.addChild(obj.name, obj);

            obj = new Static("staBg4","staDT_EXPLAIN:-1","92",null,"30","0.00%",null,null,null,null,null,this.divData.form);
            obj.set_taborder("6");
            obj.set_cssclass("sta_WF_tablebg");
            this.divData.addChild(obj.name, obj);

            obj = new Edit("edtCD_SITE","staCD_SITE:5","staTITLE:10",null,"20","208",null,null,null,null,null,this.divData.form);
            obj.set_taborder("7");
            obj.set_readonly("true");
            this.divData.addChild(obj.name, obj);

            obj = new Edit("edtDS_SITE","edtCD_SITE:3","staTITLE:10",null,"20","5",null,null,null,null,null,this.divData.form);
            obj.set_taborder("8");
            obj.set_readonly("true");
            this.divData.addChild(obj.name, obj);

            obj = new Calendar("ctclDT_EXPLAIN","staDT_EXPLAIN:5","97","108","20",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("9");
            obj.set_dateformat("yyyy-MM-dd");
            obj.set_editformat("yyyyMMdd");
            obj.set_autoselect("true");
            obj.set_value("");
            obj.set_visible("true");
            obj.set_enable("false");
            this.divData.addChild(obj.name, obj);

            obj = new Button("btnOk","130","142","60","20",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("10");
            obj.set_text("확인");
            this.divData.addChild(obj.name, obj);

            obj = new Button("btnCancel","193","142","60","20",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("11");
            obj.set_text("취소");
            this.divData.addChild(obj.name, obj);

            obj = new Radio("crdoCD_PROCDIV","92","70","100","20",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("12");
            obj.set_innerdataset("dsCD_PROCDIV");
            obj.set_direction("vertical");
            obj.set_fittocontents("width");
            obj.set_codecolumn("NO_DGR");
            obj.set_datacolumn("DS_DGR");
            obj.set_enable("true");
            obj.set_text("정기");
            obj.set_value("J");
            obj.set_index("0");
            this.divData.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this
            obj = new Layout("default","",this._adjust_width,this._adjust_height,this,function(p){});
            this.addLayout(obj.name, obj);
            
            // BindItem Information
            obj = new BindItem("item0","divData.form.edtCD_SITE","value","dsData","CD_SITE");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item1","divData.form.edtDS_SITE","value","dsData","DS_SITE");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item7","divData.form.ctclDT_EXPLAIN","value","dsData","DT_EXPLAIN");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item2","divData.form.crdoCD_PROCDIV","value","dsData","CD_PROC");
            this.addChild(obj.name, obj);
            obj.bind();
            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script
        this.registerScript("DWB_GISUNG_PRTDAY.xfdl", function() {
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

        	// 이전 화면에서 데이터 받기.
        	this.dsData.setColumn(0, "CD_SITE", this.getOwnerFrame().CD_SITE);
        	this.dsData.setColumn(0, "DS_SITE", this.getOwnerFrame().DS_SITE);

        	var today = this.gfnGetDate();
        	var nextDay = this.gfnAddMonth(today,1)

        	//junggiDay = nextDay.substring(0,6)+"10";

        	var day = this.getOwnerFrame().YM_WORK+01;

        	junggiDay = this.gfnAddMonth(day,1).substring(0,6)+"10"
        	this.dsData.setColumn(0, "DT_EXPLAIN", junggiDay);


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
        // 	if(!this.fnSaveValidate()) return;
        //
        // 	this.dsUpdate.clearData();
        // 	var nrow = this.dsUpdate.addRow();
        //
        // 	var dt_onlinemagam = this.dsData.getColumn(0, "DT_EXPLAIN") + this.dsData.getColumn(0, "DT_EXPLAIN_HOUR") + this.dsData.getColumn(0, "DT_EXPLAIN_MIN");
        //
        // 	this.dsUpdate.setColumn(nrow, "CD_SITE", this.dsData.getColumn(0, "CD_SITE"));
        // 	this.dsUpdate.setColumn(nrow, "NO_BID", this.dsData.getColumn(0, "NO_BID"));
        // 	this.dsUpdate.setColumn(nrow, "DT_ONLINEEXPLAIN", dt_onlinemagam);
        //
        // 	var strSvcId    = "update";
        // 	var strSvcType  = "save";
        // 	var inProc		= "_dsProc";
        // 	var inData      = "update=dsUpdate";
        // 	var outData     = "";
        // 	var strArg      = "";
        // 	var callBackFnc = "fnCallback";
        //
        // 	this.gfnTransaction( strSvcId , 	// transaction을 구분하기 위한 svc id값
        // 						strSvcType , 	// transaction을 요청할 구분
        // 						inProc,			// Procedure 정보 Dataset 이름
        // 						inData , 		// 입력값으로 보낼 dataset id , a=b형태로 실제이름과 입력이름을 매칭
        // 						outData , 		// 처리결과값으로 받을 dataset id, a=b형태로 실제이름과 입력이름을 매칭
        // 						strArg, 		// 입력값으로 보낼 arguments, strFormData="20120607"
        // 						callBackFnc); // 통신방법 정의 [생략가능]

        	var json = {CD_PROC : this.dsData.getColumn(0,"CD_PROC"),DT_EXPLAIN: this.dsData.getColumn(0,"DT_EXPLAIN")};
        	this.getParentContext().close(JSON.stringify(json));

        };

        // 취소 버튼 클릭
        this.divData_btnCancel_onclick = function(obj,e)
        {
        	// this.close()가 작동하지 않았고,
        	// 부모의 callback 함수로 데이터를 넘겨주기 위해 작성되었습니다.
        	this.getParentContext().close(false);
        };

        this.divData_crdoCD_PROCDIV_onitemchanged = function(obj,e)
        {
        	if(this.dsData.getColumn(0,"CD_PROC") =="J"){
        		this.dsData.setColumn(0,"DT_EXPLAIN",junggiDay);
        		this.divData.form.ctclDT_EXPLAIN.set_enable(false);
        	}else if(this.dsData.getColumn(0,"CD_PROC") =="S"){
        		this.divData.form.ctclDT_EXPLAIN.set_enable(true);
        	}

        };

        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.form_onload,this);
            this.divData.form.btnOk.addEventHandler("onclick",this.divData_btnOk_onclick,this);
            this.divData.form.btnCancel.addEventHandler("onclick",this.divData_btnCancel_onclick,this);
            this.divData.form.crdoCD_PROCDIV.addEventHandler("onitemchanged",this.divData_crdoCD_PROCDIV_onitemchanged,this);
            this.dsData.addEventHandler("onvaluechanged",this.dsData_onvaluechanged,this);
        };
        this.loadIncludeScript("DWB_GISUNG_PRTDAY.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
