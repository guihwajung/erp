(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("DSB_MAGAM");
            this.set_titletext("노무비명세서");
            if (Form == this.constructor)
            {
                this._setFormPosition(1280,720);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("dsList", this);
            obj._setContents("");
            this.addChild(obj.name, obj);


            obj = new Dataset("_dsProc", this);
            obj._setContents("<ColumnInfo><Column id=\"TARGET\" type=\"STRING\" size=\"256\"/><Column id=\"SP\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"TARGET\">select</Col><Col id=\"SP\">DSZPR_NOMU_SLIP</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsSearch", this);
            obj._setContents("<ColumnInfo><Column id=\"YM_WORK\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"YM_WORK\"/></Row></Rows>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Div("divSearch","0.0","10.0",null,"46.0","0",null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_cssclass("div_SEARCH_Bg");
            obj.set_text("");
            obj.set_formscrolltype("none");
            this.addChild(obj.name, obj);

            obj = new Static("staYM_WORK","0.0","10.0","92.0","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("0");
            obj.set_text("조회년월");
            obj.set_cssclass("sta_WF_SchLabelE");
            this.divSearch.addChild(obj.name, obj);

            obj = new Div("ctclYM_WORK","staYM_WORK:0.0","10.0","80","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("1");
            obj.set_url("cmm::cmmCalMM.xfdl");
            this.divSearch.addChild(obj.name, obj);

            obj = new Div("divData","0","divSearch:10",null,null,"0","0",null,null,null,null,this);
            obj.set_taborder("0");
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
            obj = new BindItem("item1","divSearch.form.ctclYM_WORK.form.TextBox","value","dsSearch","YM_WORK");
            this.addChild(obj.name, obj);
            obj.bind();
            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {
            this._addPreloadList("fdl","cmm::cmmCalMM.xfdl");
        };
        
        // User Script
        this.registerScript("DSB_NOMU_SLIP.xfdl", function() {
        this.objApp = this.gfnGetApplication();

        this.DSB_MAGAM_onload = function(obj, e) {
            // -- 필수 -------------------//
            this.gfnFormOnLoad(this);
            this.gfnFormInfo(this);
            // ---------------------------//

            this.fnSetButton();
            this.fnSetExtendButton();
            this.fnSetVariable();
            this.fnSetEvent();
            this.fnSetParameter();

        };

        /************************************************************************
         * 버튼 설정 : 화면(Tab) 전환시 마다 호출
         ************************************************************************/
        this.fnSetButton = function() {
        }

        /************************************************************************
         * 확장 버튼 : 화면별 버튼 설정 ID, function 연결
         ************************************************************************/
        this.fnSetExtendButton = function() {

            //his.btn1 = this.gfnFormButtonAdd("BTN_MONMAGAM", "fnMonmagamYnCheck"); //월마감
        };

        /************************************************************************
         * 변수 선언
         ************************************************************************/
        this.fnSetVariable = function() {

        //    this.ccfCD_DEPT = this.divSearch.form.ccfCD_DEPT;
            this.ctclYM_WORK = this.divSearch.form.ctclYM_WORK;
        //	this.ccfCD_JIKJONG = this.divSearch.form.ccfCD_JIKJONG;

            this.dxGrid = this.divData.form.objGrid;
        };

        /************************************************************************
         * 이벤트 설정
         ************************************************************************/
        this.fnSetEvent = function() {
        //	this.ccfCD_JIKJONG.CodeFindName = "DSX_CFJIKJONG";	// 직종

        //	this.ccfCD_DEPT.BeforeUserDataSetParam = "fnBeforeUserDataSetParam";
            //그리드 초기화
            this.gfnGridInit(this.dxGrid, this.dsList, "DS", "DSB_NOMU_SLIP");

        }
        /************************************************************************
         * 파라미터 설정
         ************************************************************************/
        this.fnSetParameter = function() {

           this.dsSelect = new Dataset();
        //	this.dsSelect.addColumn("CD_SITE", "string");
        	this.dsSelect.addColumn("YM_WORK", "string");
        //	this.dsSelect.addColumn("CD_JIKJONG", "string");

            var dt = new Date();
        	this.dsSearch.set_enableevent(false);
            this.dsSearch.setColumn(0, "YM_WORK", dt.getFullYear().toString() + this.inZero((dt.getMonth() + 1), 2));
        	this.dsSearch.set_enableevent(true);
        }

        /************************************************************************
         * 컨트롤 이벤트
         ************************************************************************/
        /*
         *   조회 버튼
         */
        this.fnSelect = function() {
            if (!this.fnValidate()) return false;

            this.gfnGridBeforeSelect(this.dxGrid);

            this.dsSelect.clearData();
            this.dsSelect.addRow();
            this.dsSelect.setColumn(0, "YM_WORK", this.dsSearch.getColumn(0, "YM_WORK"));

            var strSvcId = "select";
            var strSvcType = "grid";
            var inProc = "_dsProc";
            var inData = "select=dsSelect";
            var outData = "dsList=select0";
            var strArg = "";
            var callBackFnc = "fnCallback";

            this.gfnTransaction(strSvcId, // transaction을 구분하기 위한 svc id값
                strSvcType, // transaction을 요청할 구분
                inProc, // Procedure 정보 Dataset 이름
                inData, // 입력값으로 보낼 dataset id , a=b형태로 실제이름과 입력이름을 매칭
                outData, // 처리결과값으로 받을 dataset id, a=b형태로 실제이름과 입력이름을 매칭
                strArg, // 입력갑스로 보낼 arguments, strFormData="20120607"
                callBackFnc); // 통신방법 정의 [생략가능]
        }



        /*
         *   입력 버튼
         */
        this.fnAdd = function() {
            //this.gfnGridAdd(this.dxGrid);
        }

        /*
         *   삭제 버튼
         */
        this.fnDel = function() {
            //this.gfnGridDel(this.dxGrid);
        }

        /*
         *   저장 버튼
         */
        this.fnSave = function() {

        }

        /*
         *   엑셀 버튼
         */
        this.fnExcel = function() {
            this.gfnExcelExport(this.dxGrid);
        }

        /*
         *   출력 버튼
         */
        this.fnPrint = function() {}

        /************************************************************************
         * Validate
         ************************************************************************/
        /*
         *   조회 Validate
         */
        this.fnValidate = function() {
            var validate = true;

        	if (this.gfnIsNull(this.dsSearch.getColumn(0, "YM_WORK"))) {
                validate = false;
                this.fnVaidateCallback = function() {
                    this.ctclYM_WORK.form.TextBox.setFocus();
                }
                this.gfnAlert("조회년월을 입력하세요.", "fnVaidateCallback");

            }
            return validate;
        };

        /************************************************************************
         * 콜백 이벤트
         ***********************************************************************

        /*
         *   콜백 처리
         */

        this.fnCallback = function(svcID, errorCode, errorMsg) {
            if (errorCode != 0) {
                this.gfnAlert(errorMsg);

                return;
            }

            if (svcID == "select") {
                this.gfnGridAfterSelect(this.dxGrid);

            }
        };


        /************************************************************************
         * 코드파인드 이벤트
         ************************************************************************/
        //코드파인드의 파라미터 값을 넘겨줄때 사용하는 함수
        this.fnBeforeUserDataSetParam = function(id, dsUserParam, nrow) {
        	return true;
        }

        /************************************************************************
         * 그리드 이벤트
         ************************************************************************/

        /************************************************************************
         * 기타 이벤트
         ************************************************************************/

        this.dsSearch_onvaluechanged = function(obj, e) {
            if (e.oldvalue != e.newvalue) {
                this.gfnSetFormStatus(this); // 폼상태 초기화
                this.gfnGridClear(this.dxGrid);
            }
        };


        //날짜 셋팅
        this.inZero = function(p1, p2) {
            var zero = "";
            for (var i = 0; i < p2; i++) zero += "0";
            return zero.toString().concat(p1).match(new RegExp("\\d{" + p2 + "}$"));
        };
        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.DSB_MAGAM_onload,this);
            this.divSearch.form.staYM_WORK.addEventHandler("onclick",this.divSearch_staYM_WORK_onclick,this);
            this.divData.addEventHandler("onlbuttonup",this.divData_onlbuttonup,this);
            this.dsList.addEventHandler("onrowposchanged",this.dsList_onrowposchanged,this);
            this.dsSearch.addEventHandler("onvaluechanged",this.dsSearch_onvaluechanged,this);
        };
        this.loadIncludeScript("DSB_NOMU_SLIP.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
