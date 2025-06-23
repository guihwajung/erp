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
            this.set_titletext("마감품의비고");
            if (Form == this.constructor)
            {
                this._setFormPosition(800,380);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("_dsProc", this);
            obj._setContents("<ColumnInfo><Column id=\"TARGET\" type=\"STRING\" size=\"256\"/><Column id=\"SP\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsSearch", this);
            obj._setContents("<ColumnInfo><Column id=\"CD_SITE\" type=\"STRING\" size=\"256\"/><Column id=\"YM_ACT\" type=\"STRING\" size=\"256\"/><Column id=\"RM_BIGO\" type=\"STRING\" size=\"256\"/><Column id=\"DS_SITE\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"CD_SITE\"/><Col id=\"YM_ACT\"/><Col id=\"RM_BIGO\"/><Col id=\"DS_SITE\"/></Row></Rows>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Div("divData","0","0",null,null,"0","0",null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_text("");
            obj.set_cssclass("div_DATA_Bg");
            this.addChild(obj.name, obj);

            obj = new Static("staCD_SITE","0","34","87","30",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("0");
            obj.set_text("현장코드");
            obj.set_cssclass("sta_WF_tablelabel");
            obj.set_textAlign("center");
            this.divData.addChild(obj.name, obj);

            obj = new Static("staBgCD_SITE","staCD_SITE:-1","34","234","30",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("1");
            obj.set_cssclass("sta_WF_tablebg");
            this.divData.addChild(obj.name, obj);

            obj = new Static("staYM_ACT","0","staCD_SITE:-1","87","30",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("2");
            obj.set_text("마감년월");
            obj.set_cssclass("sta_WF_tablelabel");
            obj.set_textAlign("center");
            this.divData.addChild(obj.name, obj);

            obj = new Static("staBgYM_ACT","staYM_ACT:-1","staBgCD_SITE:-1","234","30",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("3");
            obj.set_cssclass("sta_WF_tablebg");
            this.divData.addChild(obj.name, obj);

            obj = new Static("staRM_BIGO","0","staYM_ACT:-1","87","90",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("4");
            obj.set_text("비고");
            obj.set_cssclass("sta_WF_tablelabel");
            obj.set_textAlign("center");
            this.divData.addChild(obj.name, obj);

            obj = new Static("staBgRM_BIGO","staRM_BIGO:-1","staBgYM_ACT:-1","234","90",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("5");
            obj.set_cssclass("sta_WF_tablebg");
            this.divData.addChild(obj.name, obj);

            obj = new Edit("ctxtCD_SITE","staCD_SITE:5","39","100","20",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("6");
            obj.set_value("");
            obj.set_readonly("true");
            this.divData.addChild(obj.name, obj);

            obj = new Edit("ctxtDS_SITE","ctxtCD_SITE:2","39","122","20",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("7");
            obj.set_value("");
            obj.set_readonly("true");
            this.divData.addChild(obj.name, obj);

            obj = new Div("ctclYM_ACT","staYM_ACT:5","ctxtCD_SITE:9","80","20",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("8");
            obj.set_url("cmm::cmmCalMM.xfdl");
            obj.set_enable("false");
            this.divData.addChild(obj.name, obj);

            obj = new TextArea("ctxtRM_BIGO","staRM_BIGO:5","ctclYM_ACT:10","224","80",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("9");
            obj.set_scrolltype("vertical");
            this.divData.addChild(obj.name, obj);

            obj = new Button("btnConfirm","95","staRM_BIGO:20","60","20",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("10");
            obj.set_text("확인");
            this.divData.addChild(obj.name, obj);

            obj = new Button("btnCancel","177","staRM_BIGO:20","60","20",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("11");
            obj.set_text("닫기");
            this.divData.addChild(obj.name, obj);

            obj = new Static("sta02","7","8","165","22",null,null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_text("마감품의");
            obj.set_cssclass("sta_TITLE_Bg");
            this.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this
            obj = new Layout("default","",this._adjust_width,this._adjust_height,this,function(p){});
            this.addLayout(obj.name, obj);
            
            // BindItem Information
            obj = new BindItem("item0","divData.form.ctxtCD_SITE","value","dsSearch","CD_SITE");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item1","divData.form.ctxtDS_SITE","value","dsSearch","DS_SITE");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item2","divData.form.ctclYM_ACT.form.TextBox","value","dsSearch","YM_ACT");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item3","divData.form.ctxtRM_BIGO","value","dsSearch","RM_BIGO");
            this.addChild(obj.name, obj);
            obj.bind();
            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {
            this._addPreloadList("fdl","cmm::cmmCalMM.xfdl");
        };
        
        // User Script
        this.registerScript("DMB_MAGAMBYDAM_BIGO.xfdl", function() {
        this.objApp = this.gfnGetApplication();

        this.form_onload = function(obj, e) {
            // -- 필수 -------------------//
            this.gfnFormOnLoad(this);
            this.gfnFormInfo(this);
            // ---------------------------//

            this.fnSetButton();
            this.fnSetExtendButton();
            this.fnSetVariable();
            this.fnSetEvent();
            this.fnSetParameter();

        	this.dsSearch.setColumn(0, "CD_SITE", this.getOwnerFrame().CD_SITE);
        	this.dsSearch.setColumn(0, "DS_SITE", this.getOwnerFrame().DS_SITE);
        	this.dsSearch.setColumn(0, "YM_ACT", this.getOwnerFrame().YM_ACT);

        };

        /************************************************************************
         * 버튼 설정 : 화면(Tab) 전환시 마다 호출
         * 서브버튼 사용 및 공통버튼 강제 제어시 여기서 처리
         ************************************************************************/
        this.fnSetButton = function() {
            // Select, Add, Del, Save, Excel, Print
            // SubSelect, SubAdd, SubDel, SuubSave, SubExcel
            //this.FormBtns.Select.set_enable(false);
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
         *	삭제 버튼
         */
        this.fnDel = function() {
        }

        /*
         *	저장 버튼
         */
        this.fnSave = function() {
        }

        /*
         *	엑셀 버튼
         */
        this.fnExcel = function() {
        }

        /*
         *	출력 버튼
         */
        this.fnPrint = function() {}

        /************************************************************************
         * Validate
         ************************************************************************/
        /*
         *	조회 Validate
         */
        this.fnValidate = function() {
        };

        /************************************************************************
         * 콜백 이벤트
         ************************************************************************/
        /*
         *	콜백 처리
         */
        this.fnCallback = function(svcID, errorCode, errorMsg) {

        }


        this.fnCloseForm = function() {
            this.getParentContext().close(null);
        }

        /************************************************************************
         * 코드파인드 이벤트
         ************************************************************************/
        //코드파인드의 파라미터 값을 넘겨줄때 사용하는 함수

        this.fnBeforeUserDataSetParam = function(id, dsUserParam, nrow) {
        }

        /************************************************************************
         * 그리드 이벤트
         ************************************************************************/


        /************************************************************************
         * 기타 이벤트
         ************************************************************************/
        this.fnConfirm = function(obj,e) {
        	var json = {};
        	json.RM_BIGO 		= this.dsSearch.getColumn(0,"RM_BIGO");

        	this.getParentContext().close(JSON.stringify(json));
        };
        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.form_onload,this);
            this.divData.addEventHandler("ondragmove",this.divData_ondragmove,this);
            this.divData.form.btnConfirm.addEventHandler("onclick",this.fnConfirm,this);
            this.divData.form.btnCancel.addEventHandler("onclick",this.fnCloseForm,this);
            this.dsSearch.addEventHandler("onvaluechanged",this.dsSearch_onvaluechanged,this);
        };
        this.loadIncludeScript("DMB_MAGAMBYDAM_BIGO.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
