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
            this.set_titletext("처리부서변경(팝업)");
            this.getSetter("maxwidth").set("440");
            this.getSetter("maxheight").set("200");
            if (Form == this.constructor)
            {
                this._setFormPosition(410,120);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("_dsProc", this);
            obj._setContents("<ColumnInfo><Column id=\"TARGET\" type=\"STRING\" size=\"256\"/><Column id=\"SP\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"TARGET\">eTaxBuy</Col><Col id=\"SP\">DHVPR_ETAXBUYLIST_AR_INSERT</Col></Row></Rows>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Div("divData","0","42",null,"31","0",null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_cssclass("div_DATA_Bg");
            this.addChild(obj.name, obj);

            obj = new Static("staCD_DEPT_BH","10","0","95","30",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("1");
            obj.set_text("처리부서");
            obj.set_cssclass("sta_WF_tablelabel");
            this.divData.addChild(obj.name, obj);

            obj = new Static("sta12","104","0",null,"30","5",null,null,null,null,null,this.divData.form);
            obj.set_taborder("2");
            obj.set_cssclass("sta_WF_tablebg");
            this.divData.addChild(obj.name, obj);

            obj = new Div("ccfCD_DEPT_BH","110","5","284","20",null,null,null,null,null,null,this.divData.form);
            obj.getSetter("CDTextWidth").set("90");
            obj.set_taborder("0");
            obj.set_url("cmm::cmmCodeFind.xfdl");
            obj.set_text("");
            this.divData.addChild(obj.name, obj);

            obj = new Static("staTitle","10","10",null,"22","0",null,null,null,null,null,this);
            obj.set_taborder("3");
            obj.set_text("처리부서변경");
            obj.set_cssclass("sta_TITLE_Bg");
            this.addChild(obj.name, obj);

            obj = new Button("btnOk","131",null,"69","27",null,"3",null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_text("확인");
            this.addChild(obj.name, obj);

            obj = new Button("btnCancel","210",null,"69","27",null,"3",null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_text("취소");
            this.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this
            obj = new Layout("default","",this._adjust_width,this._adjust_height,this,function(p){});
            this.addLayout(obj.name, obj);
            
            // BindItem Information
            obj = new BindItem("item1","divData.form.ccfCD_DEPT_BH.form.CDTextBox","value","dsList","CD_DEPT_BH");
            this.addChild(obj.name, obj);
            obj.bind();
            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {
            this._addPreloadList("fdl","cmm::cmmCodeFind.xfdl");
        };
        
        // User Script
        this.registerScript("DFL_CONFIRM_CASHDEPT.xfdl", function() {
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
        //alert(this.getOwnerFrame().P_CD_CORP + ", "  + this.getOwnerFrame().P_GR_SEARCH + ", " + this.getOwnerFrame().P_ID_USER + ", " + this.getOwnerFrame().P_CD_DEPT);

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
        	this.ccfCD_DEPT_BH   = this.divData.form.ccfCD_DEPT_BH;
        };

        /************************************************************************
         * 이벤트 설정
         ************************************************************************/
        this.fnSetEvent = function() {
        	this.ccfCD_DEPT_BH.CodeFindName = "DFX_CFACNTUNIT_GROUP";
        	this.ccfCD_DEPT_BH.BeforeUserDataSetParam = "fnBeforeUserDataSetParam";

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
        }

        /************************************************************************
         * 코드파인드 이벤트
         ************************************************************************/
        this.fnBeforeUserDataSetParam = function(id, dsUserParam, nrow) {
        	switch(id) {
        		case "ccfCD_DEPT_BH":	//처리부서
        			dsUserParam.setColumn(nrow, "CD_GROUP", "");	//this.cdGroup);
        			dsUserParam.setColumn(nrow, "CD_CORP", this.getOwnerFrame().P_CD_CORP);
        			dsUserParam.setColumn(nrow, "GR_SEARCH", this.getOwnerFrame().P_GR_SEARCH);
        			dsUserParam.setColumn(nrow, "ID_USER", this.getOwnerFrame().P_ID_USER);
        			dsUserParam.setColumn(nrow, "CD_DEPT", this.getOwnerFrame().P_CD_DEPT);
        		break;

        	}

        	return true;
        };

        /************************************************************************
         * 그리드 이벤트
         ************************************************************************/

        /************************************************************************
         * 기타 이벤트
         ************************************************************************/
        //취소버튼 클릭
        this.btnCancel_onclick = function(obj,e)
        {
        	this.getParentContext().close("");
        };

        this.btnOk_onclick = function(obj,e)
        {
        	this.getParentContext().close(this.ccfCD_DEPT_BH.form.CDTextBox.value);
        };

        this.fnClose = function()
        {
        	this.getParentContext().close("");
        };

        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.form_onload,this);
            this.addEventHandler("onbeforeclose",this.form_onbeforeclose,this);
            this.btnOk.addEventHandler("onclick",this.btnOk_onclick,this);
            this.btnCancel.addEventHandler("onclick",this.btnCancel_onclick,this);
        };
        this.loadIncludeScript("DFL_CONFIRM_CASHDEPT.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
